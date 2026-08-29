/**
 * Compresses PDFs under public/downloads with Ghostscript, then uploads the
 * compressed files to R2 under site/downloads/ (same key, `-compressed` suffix)
 * so the CDN can serve smaller documents when bandwidth matters.
 *
 * Uses Ghostscript (AGPL open-source) for lossy-ish optimization: it re-renders
 * the PDF through the `pdfwrite` device. This is the standard, battle-tested
 * way to shrink PDFs offline; R2 has no PDF-processing capability.
 *
 * Requires Ghostscript on PATH. Install it via your package manager:
 *   macOS:  brew install ghostscript
 *   Ubuntu: sudo apt-get install ghostscript
 *   Windows: download from https://ghostscript.com — the binary is gswin64c.exe;
 *            set GS_EXEC accordingly if not on PATH.
 * Override the binary with the GS_EXEC env var.
 *
 * Each `foo.pdf` becomes `foo-compressed.pdf`, keeping the original intact.
 * The .mjs also uploads using the shared R2 helper so a single CI step can
 * compress + publish in one shot.
 *
 * Usage:
 *   node scripts/compress-pdf.mjs --dry-run            # compress locally, don't upload
 *   node scripts/compress-pdf.mjs                      # S3 mode, upload
 *   node scripts/compress-pdf.mjs --http               # HTTP API mode (CI)
 *   node scripts/compress-pdf.mjs --src public/downloads
 *   node scripts/compress-pdf.mjs --level ebook        # gs -dPDFSETTINGS level
 *   node scripts/compress-pdf.mjs --keep               # don't delete temp compressed files
 *
 * Env: R2_BUCKET (default ${SITE_ID}-files-prod), R2 or CLOUDFLARE creds.
 */

import { execFile } from 'node:child_process'
import { existsSync } from 'node:fs'
import { mkdtemp, readdir, readFile, rm, stat } from 'node:fs/promises'
import { tmpdir } from 'node:os'
import { join, relative, sep } from 'node:path'
import { promisify } from 'node:util'
import { createUploader, contentType } from './lib/r2-upload.mjs'

const execFileP = promisify(execFile)

const args = process.argv.slice(2)
const flagValue = (name, fallback) => {
  const i = args.indexOf(`--${name}`)
  return i !== -1 && args[i + 1] ? args[i + 1] : fallback
}
const DRY_RUN = args.includes('--dry-run')
const HTTP_MODE = args.includes('--http')
const SRC_DIR = flagValue('src', 'public/downloads')
const PREFIX = flagValue('prefix', 'site/downloads/')
const LEVEL = flagValue('level', 'ebook') // screen | ebook | printer | prepress | default
const KEEP = args.includes('--keep')
const MAX_BYTES = Number(flagValue('max', 10 * 1024 * 1024)) // skip files already tiny / huge
const CONCURRENCY = Number(flagValue('concurrency', '4'))

const GS = process.env.GS_EXEC || (process.platform === 'win32' ? findWindowsGs() : 'gs')

function findWindowsGs() {
  const cands = ['gswin64c.exe', 'gswin32c.exe', 'gs.exe']
  return cands.find((c) => existsSync(c)) || 'gswin64c.exe'
}

async function walkPdf(dir, out = []) {
  const entries = await readdir(dir, { withFileTypes: true })
  for (const entry of entries) {
    const full = join(dir, entry.name)
    if (entry.isDirectory()) await walkPdf(full, out)
    else if (/\.pdf$/i.test(entry.name)) out.push(full)
  }
  return out
}

/** Runs gs and resolves with the compressed bytes; returns null on failure. */
async function compressOne(file, outDir) {
  const rel = relative(SRC_DIR, file).split(sep).join('/')
  const base = rel.replace(/\.pdf$/i, '')
  const outFile = join(outDir, `${base}-compressed.pdf`)
  const stdin = file // gs -sOutputFile=out -dPDFSETTINGS=...
  const args = [
    '-q',
    '-dNOPAUSE',
    '-dBATCH',
    '-dSAFER',
    '-sDEVICE=pdfwrite',
    `-dPDFSETTINGS=/${LEVEL}`,
    '-dCompatibilityLevel=1.4',
    '-dDownsampleColorImages=true',
    '-dColorImageResolution=150',
    '-dGrayImageResolution=150',
    '-dMonoImageResolution=150',
    '-dAutoRotatePages=/None',
    `-sOutputFile=${outFile}`,
    stdin,
  ]
  const res = await execFileP(GS, args, { maxBuffer: 256 * 1024 * 1024 }).catch((err) => {
    if (err && err.code === 'ENOENT') {
      throw new Error(
        `Ghostscript ('${GS}') not found. Install it and/or set GS_EXEC. See the header of this script.`,
      )
    }
    throw err
  })
  const st = await stat(outFile).catch(() => null)
  if (!st) return null
  const bytes = await readFile(outFile)
  return { rel, base, file, outFile, bytes, size: st.size }
}

async function run() {
  const uploader = createUploader({ http: HTTP_MODE })
  if (!DRY_RUN) uploader.requireCreds()

  const files = (await walkPdf(SRC_DIR)).sort()
  if (files.length === 0) throw new Error(`No PDFs found under ${SRC_DIR}`)
  console.log(`PDFs: ${files.length}`)

  const outDir = await mkdtemp(join(tmpdir(), 'gs-compress-'))
  const results = []
  for (const f of files) {
    const rel = relative(SRC_DIR, f).split(sep).join('/')
    const orig = await stat(f)
    if (orig.size === 0) {
      console.log(`  skip ${rel} (empty)`)
      continue
    }
    try {
      const r = await compressOne(f, outDir)
      if (!r) {
        console.log(`  skip ${rel} (gs produced no output)`)
        continue
      }
      const savedPct = orig.size ? ((1 - r.size / orig.size) * 100).toFixed(0) : 0
      if (r.size >= orig.size) {
        console.log(`  skip ${rel}: compressed (${(r.size / 1024).toFixed(0)} KiB) not smaller than original (${(orig.size / 1024).toFixed(0)} KiB)`)
        continue
      }
      console.log(`  ${rel}: ${(orig.size / 1024).toFixed(0)} KiB -> ${(r.size / 1024).toFixed(0)} KiB (${savedPct}% saved)`)
      results.push(r)
    } catch (err) {
      console.error(`  FAILED ${rel}: ${err.message}`)
    }
  }

  if (results.length === 0) {
    console.log('Nothing compressed.')
    await rm(outDir, { recursive: true, force: true })
    return
  }

  if (DRY_RUN) {
    console.log(`[dry-run] ${results.length} compressed to ${outDir} (not uploaded)`)
    if (!KEEP) await rm(outDir, { recursive: true, force: true })
    return
  }

  // Upload each rendered blob.
  console.log(`Uploading ${results.length} compressed PDFs to ${uploader.bucket} under ${PREFIX}*`)
  let done = 0
  const failed = []
  let queue = [...results]
  async function worker() {
    while (queue.length > 0) {
      const r = queue.shift()
      const key = `${PREFIX}${r.base}-compressed.pdf`
      try {
        await uploader.put(key, r.bytes, contentType('.pdf'))
        done++
        console.log(`  [${done}/${results.length}] ok ${key}`)
      } catch (err) {
        failed.push({ key, err: err.message })
        console.error(`  FAILED ${key}: ${err.message}`)
      }
    }
  }
  await Promise.all(Array.from({ length: Math.min(CONCURRENCY, results.length) }, worker))
  await rm(outDir, { recursive: true, force: true })

  console.log(`Done: ${done} uploaded, ${failed.length} failed`)
  for (const f of failed) console.error(`  ! ${f.key}: ${f.err}`)
  if (failed.length > 0) process.exitCode = 1
}

run().catch((err) => {
  console.error(err)
  process.exit(1)
})
