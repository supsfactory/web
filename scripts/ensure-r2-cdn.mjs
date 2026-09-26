const args = process.argv.slice(2)
const flagValue = (name, fallback) => {
  const i = args.indexOf(`--${name}`)
  return i !== -1 && args[i + 1] ? args[i + 1] : fallback
}

const ACCOUNT_ID = process.env.CLOUDFLARE_ACCOUNT_ID ?? ''
const API_TOKEN = process.env.CLOUDFLARE_API_TOKEN ?? ''
const BUCKET = flagValue('bucket', '')
const DOMAIN = flagValue('domain', `assets.${process.env.SITE_DOMAIN ?? process.env.CF_PROD_DOMAIN ?? 'isupfactory.com'}`)
const API = 'https://api.cloudflare.com/client/v4'

if (!ACCOUNT_ID || !API_TOKEN || !BUCKET) {
  console.error('Set CLOUDFLARE_ACCOUNT_ID and CLOUDFLARE_API_TOKEN; pass --bucket <name>.')
  process.exit(1)
}

async function cf(path, init = {}) {
  const res = await fetch(`${API}${path}`, {
    ...init,
    headers: {
      authorization: `Bearer ${API_TOKEN}`,
      'content-type': 'application/json',
      ...(init.headers ?? {}),
    },
  })
  const data = await res.json().catch(() => ({}))
  return { res, data }
}

async function zoneId(host) {
  const { res, data } = await cf(`/zones?name=${encodeURIComponent(host)}&per_page=1`)
  if (!res.ok || !data.success) throw new Error(`zone lookup ${host} -> ${res.status}`)
  return data.result?.[0]?.id ?? ''
}

async function existingDomains() {
  const { res, data } = await cf(`/r2/buckets/${encodeURIComponent(BUCKET)}/domains/custom`)
  if (res.status === 404 || !data.success) return []
  return (data.result ?? []).map((d) => d.domain)
}

async function run() {
  const host = new URL(`https://${DOMAIN}`).hostname
  const zid = await zoneId(host)
  if (!zid) {
    console.error(`Zone for ${host} not found in this account — cannot attach custom domain.`)
    process.exit(1)
  }
  const existing = await existingDomains()
  if (existing.includes(host)) {
    console.log(`Custom domain ${host} already attached to ${BUCKET} (skip)`)
    return
  }
  const { res, data } = await cf(`/r2/buckets/${encodeURIComponent(BUCKET)}/domains/custom`, {
    method: 'POST',
    body: JSON.stringify({ domain: host, enabled: true, zoneId: zid }),
  })
  if (res.ok && data.success) {
    console.log(`Attached custom domain ${host} -> ${BUCKET}`)
  } else {
    const msg = JSON.stringify(data.errors ?? data)
    if (/already/i.test(msg)) {
      console.log(`Custom domain ${host} already exists (skip): ${msg}`)
    } else {
      throw new Error(`attach ${host} -> ${res.status} ${msg}`)
    }
  }
}

run().catch((err) => {
  console.error(err)
  process.exit(1)
})