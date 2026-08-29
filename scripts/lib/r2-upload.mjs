/**
 * Shared R2 upload helpers for the scripts/ build pipeline.
 *
 * Zero-dependency (SigV4 via node:crypto + fetch). Two auth modes, mirroring
 * the existing upload-*.mjs scripts:
 *
 *   --http   Cloudflare R2 HTTP API with a bearer token (CI).
 *            Needs CLOUDFLARE_API_TOKEN/CLOUDFLARE_ACCOUNT_ID (R2 › Edit).
 *   (default) S3-compatible API with an R2 API token:
 *            R2_ACCOUNT_ID/R2_ACCESS_KEY_ID/R2_SECRET_ACCESS_KEY.
 *
 * Bucket defaults to ${SITE_ID}-files-prod (override via R2_BUCKET).
 */

import { createHash, createHmac } from 'node:crypto'

export const CONTENT_TYPES = {
  '.webp': 'image/webp',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.png': 'image/png',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.gif': 'image/gif',
  '.avif': 'image/avif',
  '.mp4': 'video/mp4',
  '.pdf': 'application/pdf',
}

export function contentType(name) {
  const ext = name.slice(name.lastIndexOf('.')).toLowerCase()
  return CONTENT_TYPES[ext] ?? 'application/octet-stream'
}

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

function signPut({ method, url, body, accessKey, secret, region = 'auto', service = 's3' }) {
  const amzDate = new Date().toISOString().replace(/[:-]/g, '').replace(/\.\d{3}/, '')
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
  return {
    authorization: `AWS4-HMAC-SHA256 Credential=${accessKey}/${credentialScope}, SignedHeaders=${signedHeaders}, Signature=${signature}`,
    amzDate,
    bodyHash,
  }
}

/**
 * Creates a batch uploader bound to the current auth mode / bucket.
 * `keyFor(file)` maps an absolute local path to its R2 key.
 */
export function createUploader({ http = false, cacheControl = 'public, max-age=31536000, immutable' } = {}) {
  const bucket = process.env.R2_BUCKET ?? `${process.env.SITE_ID ?? 'supsfactory'}-files-prod`
  const accountId = process.env[http ? 'CLOUDFLARE_ACCOUNT_ID' : 'R2_ACCOUNT_ID'] ?? ''
  const apiToken = process.env.CLOUDFLARE_API_TOKEN ?? ''
  const accessKey = process.env.R2_ACCESS_KEY_ID ?? ''
  const secret = process.env.R2_SECRET_ACCESS_KEY ?? ''

  function requireCreds() {
    if (http) {
      if (!accountId || !apiToken) throw new Error('Missing CLOUDFLARE_API_TOKEN / CLOUDFLARE_ACCOUNT_ID (--http mode).')
    } else if (!accountId || !accessKey || !secret) {
      throw new Error('Missing R2 credentials (R2_ACCOUNT_ID, R2_ACCESS_KEY_ID, R2_SECRET_ACCESS_KEY).')
    }
  }

  async function put(key, body, mime) {
    if (http) {
      const url = `https://api.cloudflare.com/client/v4/accounts/${accountId}/r2/buckets/${bucket}/objects/${encodeURIComponent(key)}`
      const res = await fetch(url, {
        method: 'PUT',
        headers: { authorization: `Bearer ${apiToken}`, 'content-type': mime, 'cache-control': cacheControl },
        body,
      })
      const data = await res.json()
      if (!data.success) throw new Error(`PUT ${key} -> ${res.status} ${JSON.stringify(data.errors)}`)
      return
    }
    const url = `https://${bucket}.${accountId}.r2.cloudflarestorage.com/${key}`
    const { authorization, amzDate, bodyHash } = signPut({ method: 'PUT', url, body, accessKey, secret })
    const res = await fetch(url, {
      method: 'PUT',
      headers: {
        authorization,
        'x-amz-date': amzDate,
        'x-amz-content-sha256': bodyHash,
        'content-type': mime,
        'cache-control': cacheControl,
      },
      body,
    })
    if (!res.ok) throw new Error(`PUT ${key} -> ${res.status} ${await res.text()}`)
  }

  /** HEAD-probe: true when the object is missing (404); unknown → true (upload anyway). */
  async function isMissing(key) {
    const url = `https://api.cloudflare.com/client/v4/accounts/${accountId}/r2/buckets/${bucket}/objects/${encodeURIComponent(key)}`
    const res = await fetch(url, { method: 'HEAD', headers: { authorization: `Bearer ${apiToken}` } })
    if (res.status === 404) return true
    if (res.ok) return false
    return true
  }

  return { bucket, requireCreds, put, isMissing }
}
