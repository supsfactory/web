/**
 * Batch-processes source images with sharp and publishes them (plus generated
 * responsive variants) to R2.
 *
 * Free-tier Cloudflare R2 serves objects verbatim — it has NO image resizing
 * (that lives in the paid "Images" product). To get responsive images we
 * generate the variants locally with the open-source sharp library during a
 * CI run, then upload them once so the CDN can serve the exact size.
 *
 * For every source raster (webp/jpg/png/avif) this produces:
 *   <file>.webp                     (original size, webp)
 *   <file>-768.webp                 (width <= 768)
 *   <file>-480.webp                 (width <= 480)
 *   <file>.avif                     (original size, avif)
 *   <file>-768.avif
 *   <file>-480.avif
 *
 * The <name>-768 / <name>-480 convention matches the existing
 * afarer-og-default-768.avif / -480.avif hero URLs in src/config/branding.ts.
 * Renderers can choose format + width via <picture>/srcset. Only images wider
 * than the target bucket are downscaled; smaller ones are skipped to avoid
 * pointless upscaling.
 *
 * Usage:
 *   node scripts/process-and-publish-images.mjs --dry-run                  # render to ./dist-image-preview, list variants
 *   node scripts/process-and-publish-images.mjs --src scripts/afarer-images # S3 mode, upload everything
 *   node scripts/process-and-publish-images.mjs --http --src ...            # HTTP API mode (CI)
 *   node scripts/process-and-publish-images.mjs --http --src ... --missing  # only upload variants not yet in R2
 *   node scripts/process-and-publish-images.mjs --src ... --widths 1200,768,480 --formats webp,avif
 *   node scripts/process-and-publish-images.mjs --src ... --prefix images/sups/
 *
 * Env: R2_BUCKET (default ${SITE_ID}-files-prod), plus R2 or CLOUDFLARE creds.
 */

import { mkdir, readdir, readFile, stat, writeFile } from 'node:fs/promises'
import { join, relative, sep } from 'node:path'
import sharp from 'sharp'

import { createUploader, contentType } from './lib/r2-upload.mjs'

const args = process.argv.slice(2)
const flagValue = (name, fallback) => {
  const i = args.indexOf(`--${name}`)
  return i !== -1 && args[i + 1] ? args[i + 1] : fallback
}
const flagList = (name, fallback) =>
  flagValue(name, fallback)
    .split(',')
    .map((s) => s.trim())
    .filter(Boolean)

const DRY_RUN = args.includes('--dry-run')
const HTTP_MODE = args.includes('--http')
// --missing: only upload objects not already present in R2 (HEAD probe per key).
// Avoids re-uploading ~1300 immutable variants on every CI run. HTTP mode only.
const MISSING_ONLY = args.includes('--missing')

// --src can be repeated; each flag consumes exactly one value. Everything else
// is a standalone boolean or `--flag value`.
function collectSrcs() {
  const out = []
  for (let i = 0; i < args.length; i++) {
    if (args[i] === '--src' && args[i + 1] && !args[i + 1].startsWith('--')) {
      out.push(args[i + 1])
      i++
    }
  }
  return out.length ? out : ['scripts/afarer-images']
}
const SRCS = collectSrcs()
const KEY_PREFIX = flagValue('prefix', 'images/sups/')
const WIDTHS = flagList('widths', '768,480').map(Number)
const FORMATS = flagList('formats', 'webp,avif')
const QUALITY = Number(flagValue('quality', '82'))
const CACHE_CONTROL = flagValue('cache', 'public, max-age=31536000, immutable')
const CONCURRENCY = Number(flagValue('concurrency', '6'))
const PREVIEW_DIR = flagValue('preview-dir', 'dist-image-preview')

const RASTER = /\.(webp|jpe?g|png|avif)$/i
// Existing variant files are never re-processed (they'd produce -768-768 etc).
const ALREADY_VARIANT = /-\d+\.(webp|avif)$/i

function resolveSrc(src) {
  return src.startsWith('.') || src.startsWith('/') ? src : join(process.cwd(), src)
}

async function walk(dir, out = []) {
  const entries = await readdir(dir, { withFileTypes: true })
  for (const entry of entries) {
    const full = join(dir, entry.name)
    if (entry.isDirectory()) await walk(full, out)
    else out.push(full)
  }
  return out
}

/** Returns [{ width, format, buffer }] for a source image. width===null for full-size. */
async function renderVariants(file, buffer) {
  const img = sharp(buffer, { failOn: 'none' })
  const meta = await img.metadata()
  if (!meta.width) return []

  const srcW = meta.width
  const output = []

  // Always emit the full-size original (re-encoded but same dims) for each format
  for (const fmt of FORMATS) {
    output.push({ width: null, format: fmt, buffer: await encode(img.clone(), fmt) })
  }
  // Downscaled variants (only if the source is actually larger).
  for (const w of WIDTHS) {
    if (!(w < srcW)) continue
    for (const fmt of FORMATS) {
      const resized = img.clone().resize({ width: w, withoutEnlargement: true })
      output.push({ width: w, format: fmt, buffer: await encode(resized, fmt) })
    }
  }
  return output
}

function encode(img, fmt) {
  const o = { quality: QUALITY }
  if (fmt === 'avif') o.effort = 4
  return img[fmt](o).toBuffer()
}

function variantKey(file, rel, width, format) {
  const base = rel.replace(/\.[^.]+$/, '')
  const name = width != null ? `${base}-${width}.${format}` : `${base}.${format}`
  return `${KEY_PREFIX}${name}`
}

async function run() {
  const uploader = createUploader({ http: HTTP_MODE, cacheControl: CACHE_CONTROL })
  if (!DRY_RUN) uploader.requireCreds()

  // Collect source files.
  const srcDirs = SRCS.map(resolveSrc)
  const files = []
  for (const dir of srcDirs) {
    let found
    try {
      found = await walk(dir)
    } catch (err) {
      throw new Error(`Source dir not readable: ${dir} (${err.message})`)
    }
    for (const f of found) {
      if (RASTER.test(f) && !ALREADY_VARIANT.test(f)) files.push(f)
    }
  }
  if (files.length === 0) throw new Error(`No raster images found under ${srcDirs.join(', ')}`)
  files.sort()
  console.log(`Sources: ${files.length} images`)

  // Render every variant first so failures surface before any upload.
  const jobs = [] // { key, file, buffer, mime }
  let rendered = 0
  for (let i = 0; i < files.length; i++) {
    const file = files[i]
    const dir = srcDirs.find((d) => file.startsWith(d + sep))
    const rel = relative(dir, file).split(sep).join('/')
    const buf = await readFile(file)
    const variants = await renderVariants(file, buf)
    for (const v of variants) {
      const key = variantKey(file, rel, v.width, v.format)
      jobs.push({ key, file: rel, buffer: v.buffer, mime: contentType(`.${v.format}`) })
    }
    rendered += variants.length
    console.log(`  rendered ${rel} -> ${variants.length} variants`)
  }
  console.log(`Total variants: ${rendered}`)

  if (DRY_RUN) {
    await mkdir(PREVIEW_DIR, { recursive: true })
    // Keep flattest grouping: write under preview-dir/<rel-of-key> to avoid
    // name collisions across the two source dirs.
    for (const j of jobs) {
      const keyRel = j.key.slice(KEY_PREFIX.length)
      const out = join(PREVIEW_DIR, keyRel.split('/').join(sep))
      await mkdir(join(out, '..'), { recursive: true })
      await writeFile(out, j.buffer)
      const kb = (j.buffer.length / 1024).toFixed(1)
      console.log(`  [preview] ${j.key} (${kb} KiB)`)
    }
    console.log(`[dry-run] wrote ${jobs.length} preview files to ${PREVIEW_DIR}/`)
    return
  }

  if (MISSING_ONLY && !HTTP_MODE) {
    console.error('--missing requires --http (HEAD probing uses the R2 HTTP API).')
    process.exit(1)
  }
  if (MISSING_ONLY) {
    console.log(`Checking ${jobs.length} keys for existing objects (--missing)...`)
    const present = new Set()
    const probeQueue = [...jobs]
    let checked = 0
    async function probeWorker() {
      while (probeQueue.length > 0) {
        const job = probeQueue.shift()
        if (!(await uploader.isMissing(job.key))) present.add(job.key)
        checked++
        if (checked % 100 === 0) console.log(`  probed ${checked}/${jobs.length}`)
      }
    }
    await Promise.all(Array.from({ length: Math.min(CONCURRENCY, jobs.length) }, probeWorker))
    const missing = jobs.filter((j) => !present.has(j.key))
    console.log(`  ${missing.length} missing (${jobs.length - missing.length} already present, skipped)`)
    if (missing.length === 0) {
      console.log('Nothing to upload.')
      return
    }
    jobs.splice(0, jobs.length, ...missing)
  }

  console.log(`Uploading ${jobs.length} objects to ${uploader.bucket} under ${KEY_PREFIX}*`)
  let done = 0
  const failed = []
  let queue = [...jobs]
  async function worker() {
    while (queue.length > 0) {
      const job = queue.shift()
      try {
        await uploader.put(job.key, job.buffer, job.mime)
        done++
        console.log(`  [${done}/${jobs.length}] ok ${job.key}`)
      } catch (err) {
        failed.push({ key: job.key, err: err.message })
        console.error(`  FAILED ${job.key}: ${err.message}`)
      }
    }
  }
  await Promise.all(Array.from({ length: Math.min(CONCURRENCY, jobs.length) }, worker))

  console.log(`Done: ${done} uploaded, ${failed.length} failed`)
  for (const f of failed) console.error(`  ! ${f.key}: ${f.err}`)
  if (failed.length > 0) process.exitCode = 1
}

run().catch((err) => {
  console.error(err)
  process.exit(1)
})
