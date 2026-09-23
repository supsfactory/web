/**
 * Uploads the bundled brand image tree to R2 under `images/sups/`.
 *
 * Source:  scripts/brand-images/   (41 referenced sources, named `supsfactory-*`)
 * Target:  R2 bucket, key prefix `images/sups/` so the CDN URLs match the
 *          rewrite in src/features/content/assets.ts.
 *
 * Zero dependencies (SigV4 signing via node:crypto + fetch).
 *
 * Two auth modes:
 *
 *   --http   Cloudflare R2 HTTP API with a bearer token. Used by CI (GitHub
 *            Actions) where only CLOUDFLARE_API_TOKEN / CLOUDFLARE_ACCOUNT_ID
 *            are available. The token needs Account › R2 › Edit permission.
 *
 *   (default)  S3-compatible API with an R2 API token (dashboard → R2 → Manage
 *            R2 API Tokens, Object Read & Write for the bucket):
 *            $env:R2_ACCOUNT_ID / R2_ACCESS_KEY_ID / R2_SECRET_ACCESS_KEY.
 *
 * Bucket name defaults to ${SITE_ID}-files-prod (override via R2_BUCKET).
 *
 * Usage:
 *   node scripts/upload-brand-images.mjs                              # S3 mode
 *   node scripts/upload-brand-images.mjs --http                       # HTTP API mode
 *   node scripts/upload-brand-images.mjs --dry-run                    # list without upload
 *   node scripts/upload-brand-images.mjs --src scripts/brand-images
 */

import { createHash, createHmac } from 'node:crypto'
import { readdir, readFile, stat } from 'node:fs/promises'
import { join, relative, sep } from 'node:path'

const args = process.argv.slice(2)
const flagValue = (name, fallback) => {
  const i = args.indexOf(`--${name}`)
  return i !== -1 && args[i + 1] ? args[i + 1] : fallback
}
const DRY_RUN = args.includes('--dry-run')
const HTTP_MODE = args.includes('--http')
// --missing: only upload objects that don't exist in R2 yet (HEAD probe per
// key). Prevents "added images but forgot to re-run the upload" — the deploy
// workflow runs this mode automatically. HTTP mode only.
const MISSING_ONLY = args.includes('--missing')
const SRC_DIR = flagValue('src', process.env.BRAND_IMAGES_DIR ?? '')
const KEY_PREFIX = flagValue('prefix', 'images/sups/')
// 图片是稳定路径的不可变资产，允许浏览器/CDN 长缓存。若日后原地替换同名图，
// 记得 bump 版本号（文件名带上 hash），不要依赖短缓存覆盖。
const CACHE_CONTROL = flagValue('cache', 'public, max-age=31536000, immutable')
const CONCURRENCY = 8

const BUCKET = process.env.R2_BUCKET ?? `${process.env.SITE_ID ?? 'supsfactory'}-files-prod`
const ACCOUNT_ID = process.env[HTTP_MODE ? 'CLOUDFLARE_ACCOUNT_ID' : 'R2_ACCOUNT_ID'] ?? ''
const API_TOKEN = process.env.CLOUDFLARE_API_TOKEN ?? ''
const ACCESS_KEY = process.env.R2_ACCESS_KEY_ID ?? ''
const SECRET = process.env.R2_SECRET_ACCESS_KEY ?? ''

const CONTENT_TYPES = {
  '.webp': 'image/webp',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.png': 'image/png',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.gif': 'image/gif',
  '.avif': 'image/avif',
}

function contentType(name) {
  const ext = name.slice(name.lastIndexOf('.')).toLowerCase()
  return CONTENT_TYPES[ext] ?? 'application/octet-stream'
}

/* ───────────────────────────── SigV4 (S3 API) ───────────────────────────── */

function hmac(key, data) {
  return createHmac('sha256', key).update(data).digest()
}

function sha256Hex(data) {
  return createHash('sha256').update(data).digest('hex')
}

function signingKey(secret, dateStamp, region, service) {
  const kDate = hmac(`AWS4${secret}`, dateStamp)
  const kRegion = hmac(kDate, region)
  const kService = hmac(kRegion, service)
  return hmac(kService, 'aws4_request')
}

/** Signs a PUT request for the R2 S3 endpoint and returns the auth headers. */
function signPut({ method, url, body, accessKey, secret, region = 'auto', service = 's3' }) {
  const now = new Date()
  const amzDate = now.toISOString().replace(/[:-]/g, '').replace(/\.\d{3}/, '')
  const dateStamp = amzDate.slice(0, 8)
  const bodyHash = sha256Hex(body)
  const u = new URL(url)
  const canonicalQuery = [...u.searchParams.entries()]
    .map(([k, v]) => `${encodeURIComponent(k)}=${encodeURIComponent(v)}`)
    .sort()
    .join('&')
  const canonicalHeaders = `host:${u.host}\nx-amz-content-sha256:${bodyHash}\nx-amz-date:${amzDate}\n`
  const signedHeaders = 'host;x-amz-content-sha256;x-amz-date'
  const canonicalRequest = [method, u.pathname, canonicalQuery, canonicalHeaders, signedHeaders, bodyHash].join('\n')
  const credentialScope = `${dateStamp}/${region}/${service}/aws4_request`
  const stringToSign = ['AWS4-HMAC-SHA256', amzDate, credentialScope, sha256Hex(canonicalRequest)].join('\n')
  const signature = hmac(signingKey(secret, dateStamp, region, service), stringToSign).toString('hex')
  const authorization = `AWS4-HMAC-SHA256 Credential=${accessKey}/${credentialScope}, SignedHeaders=${signedHeaders}, Signature=${signature}`
  return { authorization, amzDate, bodyHash }
}

/* ───────────────────────────────── walk ───────────────────────────────── */

async function walk(dir, out = []) {
  const entries = await readdir(dir, { withFileTypes: true })
  for (const entry of entries) {
    const full = join(dir, entry.name)
    if (entry.isDirectory()) {
      await walk(full, out)
    } else {
      out.push(full)
    }
  }
  return out
}

/* ───────────────────────────────── upload ───────────────────────────────── */

async function uploadS3(key, body, localPath) {
  const url = `https://${BUCKET}.${ACCOUNT_ID}.r2.cloudflarestorage.com/${key}`
  const { authorization, amzDate, bodyHash } = signPut({
    method: 'PUT',
    url,
    body,
    accessKey: ACCESS_KEY,
    secret: SECRET,
  })
  const res = await fetch(url, {
    method: 'PUT',
    headers: {
      authorization,
      'x-amz-date': amzDate,
      'x-amz-content-sha256': bodyHash,
      'content-type': contentType(localPath),
      'cache-control': CACHE_CONTROL,
    },
    body,
  })
  if (!res.ok) {
    throw new Error(`PUT ${key} -> ${res.status} ${await res.text()}`)
  }
}

async function uploadHttp(key, body, localPath) {
  const url = `https://api.cloudflare.com/client/v4/accounts/${ACCOUNT_ID}/r2/buckets/${BUCKET}/objects/${encodeURIComponent(key)}`
  const res = await fetch(url, {
    method: 'PUT',
    headers: {
      authorization: `Bearer ${API_TOKEN}`,
      'content-type': contentType(localPath),
      'cache-control': CACHE_CONTROL,
    },
    body,
  })
  const data = await res.json()
  if (!data.success) {
    throw new Error(`PUT ${key} -> ${res.status} ${JSON.stringify(data.errors)}`)
  }
}

async function upload(key, localPath) {
  const body = await readFile(localPath)
  return HTTP_MODE ? uploadHttp(key, body, localPath) : uploadS3(key, body, localPath)
}

/** HEAD-probe a key via the HTTP API; true when the object is missing (404). */
async function isMissingHttp(key) {
  const url = `https://api.cloudflare.com/client/v4/accounts/${ACCOUNT_ID}/r2/buckets/${BUCKET}/objects/${encodeURIComponent(key)}`
  const res = await fetch(url, {
    method: 'HEAD',
    headers: { authorization: `Bearer ${API_TOKEN}` },
  })
  if (res.status === 404) return true
  if (res.ok) return false
  // Any other status (403 permission, 5xx) — unknown; upload anyway and let the
  // PUT surface the real error rather than silently skipping.
  return true
}

async function run() {
  if (DRY_RUN) {
    /* fall through, no credentials needed */
  } else if (HTTP_MODE) {
    if (!ACCOUNT_ID || !API_TOKEN) {
      console.error('Missing credentials. Set CLOUDFLARE_API_TOKEN and CLOUDFLARE_ACCOUNT_ID (--http mode).')
      process.exit(1)
    }
  } else if (!ACCOUNT_ID || !ACCESS_KEY || !SECRET) {
    console.error('Missing R2 credentials. Set R2_ACCOUNT_ID, R2_ACCESS_KEY_ID, R2_SECRET_ACCESS_KEY.')
    console.error('(Use --dry-run to list files without credentials.)')
    process.exit(1)
  }

  const files = (await walk(SRC_DIR)).sort()
  if (files.length === 0) {
    console.error(`No files found in ${SRC_DIR}`)
    process.exit(1)
  }

  const keys = files.map((f) => `${KEY_PREFIX}${relative(SRC_DIR, f).split(sep).join('/')}`)
  // Source files are named `supsfactory-*`. Extend each upload with the legacy
  // `afarer-*` key so old hotlinked CDN URLs keep resolving (`.ico` excluded —
  // the legacy favicon object already sits in R2 under its old name).
  const aliases = keys.map((k) => (k.includes('supsfactory-') && !k.endsWith('.ico') ? k.replace('supsfactory-', 'afarer-') : null))
  const totalBytes = (await Promise.all(files.map((f) => stat(f)))).reduce((n, s) => n + s.size, 0)

  if (DRY_RUN) {
    console.log(`[dry-run] ${files.length} files, ${(totalBytes / 1024 / 1024).toFixed(1)} MiB -> ${BUCKET} (${KEY_PREFIX}*)`)
    for (let i = 0; i < keys.length; i++) console.log(`  ${keys[i]}${aliases[i] && aliases[i] !== keys[i] ? `  ->  ${aliases[i]}` : ''}`)
    return
  }

  if (MISSING_ONLY && !HTTP_MODE) {
    console.error('--missing requires --http (the S3 API has no cheap per-object HEAD via an API token).')
    process.exit(1)
  }
  if (MISSING_ONLY && !DRY_RUN) {
    const targets = keys.flatMap((k, i) => (aliases[i] && aliases[i] !== k ? [k, aliases[i]] : [k]))
    console.log(`Checking ${targets.length} object keys for existing objects (--missing)...`)
    const present = new Set()
    const probeQueue = [...targets]
    let checked = 0
    async function probeWorker() {
      while (probeQueue.length > 0) {
        const key = probeQueue.shift()
        if (!(await isMissingHttp(key))) present.add(key)
        checked++
        if (checked % 50 === 0) console.log(`  probed ${checked}/${targets.length}`)
      }
    }
    await Promise.all(Array.from({ length: Math.min(CONCURRENCY, targets.length) }, probeWorker))
    const missing = new Set(targets.filter((k) => !present.has(k)))
    console.log(`  ${missing.size} missing (${targets.length - missing.size} already present, skipped)`)
    if (missing.size === 0) {
      console.log('Nothing to upload.')
      return
    }
    // Trim files/keys/aliases so only jobs with at least one missing target remain.
    for (let i = keys.length - 1; i >= 0; i--) {
      const k = keys[i]
      if (!missing.has(k) && (!aliases[i] || !missing.has(aliases[i]))) {
        keys.splice(i, 1)
        aliases.splice(i, 1)
        files.splice(i, 1)
      }
    }
  }

  const uploadTargets = keys.map((key, i) => ({
    targets: [key, ...(aliases[i] && aliases[i] !== key ? [aliases[i]] : [])],
    localPath: files[i],
  }))
  const totalTargets = uploadTargets.reduce((n, j) => n + j.targets.length, 0)
  console.log(`Uploading ${uploadTargets.length} files (${totalTargets} keys, ${(totalBytes / 1024 / 1024).toFixed(1)} MiB) to ${BUCKET} under ${KEY_PREFIX}*`)
  let done = 0
  let failed = 0
  let queue = [...uploadTargets]

  async function worker() {
    while (queue.length > 0) {
      const job = queue.shift()
      for (const key of job.targets) {
        try {
          await upload(key, job.localPath)
          done++
          console.log(`  [${done}/${totalTargets}] ok ${key}`)
        } catch (err) {
          failed++
          console.error(`  FAILED ${key}: ${err.message}`)
        }
      }
    }
  }

  await Promise.all(Array.from({ length: CONCURRENCY }, worker))
  console.log(`Done: ${done} uploaded, ${failed} failed`)
  if (failed > 0) process.exitCode = 1
}

run().catch((err) => {
  console.error(err)
  process.exit(1)
})
