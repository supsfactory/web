/**
 * Uploads the afarer image tree to R2 under `images/sups/`.
 *
 * Source:  <afarer-repo>/public/images/afarer/   (211 webp + 2 jpg + 1 ico)
 * Target:  R2 bucket via its S3-compatible API, key prefix `images/sups/`
 *          so the CDN URLs match the rewrite in src/features/content/assets.ts.
 *
 * Zero dependencies: SigV4 signing is implemented with node:crypto + fetch.
 *
 * Credentials (R2 API token — create in Cloudflare dashboard → R2 → Manage R2
 * API Tokens, with Object Read & Write for this bucket):
 *
 *   $env:R2_ACCOUNT_ID="<account id>"
 *   $env:R2_ACCESS_KEY_ID="<access key id>"
 *   $env:R2_SECRET_ACCESS_KEY="<secret>"
 *   $env:R2_BUCKET="supsfactory-files-prod"
 *
 * Usage:
 *   node scripts/upload-afarer-images.mjs                # upload everything
 *   node scripts/upload-afarer-images.mjs --dry-run      # list without upload
 *   node scripts/upload-afarer-images.mjs --src E:/github/afarer/public/images/afarer
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
const SRC_DIR = flagValue('src', 'E:/github/afarer/public/images/afarer')
const KEY_PREFIX = flagValue('prefix', 'images/sups/')
const CACHE_CONTROL = flagValue('cache', 'public, max-age=86400')
const CONCURRENCY = 8

const BUCKET = process.env.R2_BUCKET ?? 'supsfactory-files-prod'
const ACCOUNT_ID = process.env.R2_ACCOUNT_ID ?? ''
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

async function upload(key, localPath) {
  const url = `https://${BUCKET}.${ACCOUNT_ID}.r2.cloudflarestorage.com/${key}`
  const body = await readFile(localPath)
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

async function run() {
  if (!DRY_RUN && (!ACCOUNT_ID || !ACCESS_KEY || !SECRET)) {
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
  const totalBytes = (await Promise.all(files.map((f) => stat(f)))).reduce((n, s) => n + s.size, 0)

  if (DRY_RUN) {
    console.log(`[dry-run] ${files.length} files, ${(totalBytes / 1024 / 1024).toFixed(1)} MiB -> ${BUCKET} (${KEY_PREFIX}*)`)
    for (const k of keys) console.log(`  ${k}`)
    return
  }

  console.log(`Uploading ${files.length} files (${(totalBytes / 1024 / 1024).toFixed(1)} MiB) to ${BUCKET} under ${KEY_PREFIX}*`)
  let done = 0
  let failed = 0
  let queue = [...keys.map((key, i) => ({ key, localPath: files[i] }))]

  async function worker() {
    while (queue.length > 0) {
      const job = queue.shift()
      try {
        await upload(job.key, job.localPath)
        done++
        console.log(`  [${done}/${keys.length}] ok ${job.key}`)
      } catch (err) {
        failed++
        console.error(`  FAILED ${job.key}: ${err.message}`)
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
