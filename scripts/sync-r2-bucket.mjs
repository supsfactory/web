const args = process.argv.slice(2)
const flagValue = (name, fallback) => {
  const i = args.indexOf(`--${name}`)
  return i !== -1 && args[i + 1] ? args[i + 1] : fallback
}
const HTTP_MODE = args.includes('--http')
const DRY_RUN = args.includes('--dry-run')
const FROM = flagValue('from', '')
const TO = flagValue('to', '')
const PREFIX = flagValue('prefix', '')
const CONCURRENCY = 8

const ACCOUNT_ID = process.env.CLOUDFLARE_ACCOUNT_ID ?? ''
const API_TOKEN = process.env.CLOUDFLARE_API_TOKEN ?? ''
const API = 'https://api.cloudflare.com/client/v4'

if (!HTTP_MODE) {
  console.error('Only --http mode (CLOUDFLARE_API_TOKEN bearer) is supported.')
  process.exit(1)
}
if (!ACCOUNT_ID || !API_TOKEN) {
  console.error('Set CLOUDFLARE_API_TOKEN and CLOUDFLARE_ACCOUNT_ID.')
  process.exit(1)
}
if (!FROM || !TO) {
  console.error('--from <bucket> and --to <bucket> are required.')
  process.exit(1)
}

async function listKeys(bucket) {
  const keys = []
  let cursor = ''
  for (;;) {
    const q = new URLSearchParams({ per_page: '1000' })
    if (PREFIX) q.set('prefix', PREFIX)
    if (cursor) q.set('cursor', cursor)
    const res = await fetch(`${API}/r2/buckets/${encodeURIComponent(bucket)}/objects?${q}`, {
      headers: { authorization: `Bearer ${API_TOKEN}` },
    })
    if (!res.ok) throw new Error(`list ${bucket} -> ${res.status} ${(await res.text()).slice(0, 300)}`)
    const data = await res.json()
    if (!data.success) throw new Error(`list ${bucket} failed: ${JSON.stringify(data.errors ?? data)}`)
    for (const obj of data.result ?? []) if (obj.key) keys.push(obj)
    if (!data.result_info?.is_truncated || !data.result_info?.cursor) break
    cursor = data.result_info.cursor
  }
  return keys
}

function contentTypeFor(key) {
  const ext = key.slice(key.lastIndexOf('.')).toLowerCase()
  const map = {
    '.webp': 'image/webp', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg',
    '.png': 'image/png', '.svg': 'image/svg+xml', '.ico': 'image/x-icon',
    '.gif': 'image/gif', '.avif': 'image/avif', '.mp4': 'video/mp4',
    '.pdf': 'application/pdf',
  }
  return map[ext] ?? 'application/octet-stream'
}

async function exists(bucket, key) {
  const res = await fetch(`${API}/r2/buckets/${encodeURIComponent(bucket)}/objects/${encodeURIComponent(key)}`, {
    method: 'HEAD',
    headers: { authorization: `Bearer ${API_TOKEN}` },
  })
  return res.status === 200 || res.status === 304
}

async function copy(key) {
  const src = await fetch(`${API}/r2/buckets/${encodeURIComponent(FROM)}/objects/${encodeURIComponent(key.key)}`, {
    headers: { authorization: `Bearer ${API_TOKEN}` },
  })
  if (!src.ok) throw new Error(`get ${key.key} -> ${src.status}`)
  const body = await src.arrayBuffer()
  const contentType = key.http_metadata?.contentType || contentTypeFor(key.key)
  const cacheControl = key.http_metadata?.cacheControl || 'public, max-age=31536000, immutable'
  const put = await fetch(`${API}/r2/buckets/${encodeURIComponent(TO)}/objects/${encodeURIComponent(key.key)}`, {
    method: 'PUT',
    headers: {
      authorization: `Bearer ${API_TOKEN}`,
      'content-type': contentType,
      'cache-control': cacheControl,
    },
    body,
  })
  if (!put.ok) throw new Error(`put ${key.key} -> ${put.status}`)
}

async function run() {
  console.log(`Listing objects from ${FROM}${PREFIX ? ` (prefix ${PREFIX})` : ''}...`)
  const keys = await listKeys(FROM)
  console.log(`  ${keys.length} objects in source`)
  if (keys.length === 0) return

  if (DRY_RUN) {
    for (const k of keys.slice(0, 50)) console.log(`  [dry] would copy ${k.key}`)
    if (keys.length > 50) console.log(`  [dry] ... and ${keys.length - 50} more`)
    return
  }

  const queue = [...keys]
  let done = 0
  let skipped = 0
  let failed = 0

  async function worker() {
    while (queue.length > 0) {
      const job = queue.shift()
      try {
        if (await exists(TO, job.key)) {
          skipped++
        } else {
          await copy(job)
          done++
          console.log(`  [${done + skipped}/${keys.length}] copied ${job.key} (${(job.size / 1024).toFixed(1)} KiB)`)
        }
      } catch (err) {
        failed++
        console.error(`  FAILED ${job.key}: ${err.message}`)
      }
    }
  }

  await Promise.all(Array.from({ length: Math.min(CONCURRENCY, keys.length) }, worker))
  console.log(`Done: ${done} copied, ${skipped} already present, ${failed} failed`)
  if (failed > 0) process.exitCode = 1
}

run().catch((err) => {
  console.error(err)
  process.exit(1)
})