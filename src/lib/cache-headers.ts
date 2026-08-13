/**
 * Edge/CDN cache headers for public responses, applied in src/worker.ts.
 *
 * - Marketing HTML is immutable per deploy: cache 1h at the edge so repeat
 *   crawls of the SEO surface miss the worker. Authenticated/API responses
 *   are left untouched.
 * - Hashed build outputs under /assets/ (index-<hash>.js, app-<hash>.css) are
 *   immutable per deploy — cached for a year so repeat visits and back-forth
 *   navigation never re-validate them. The framework otherwise serves them
 *   with `max-age=0, must-revalidate` (a conditional request per asset).
 * - Fonts keep a shorter 7-day cache: their filenames carry no hash, so a
 *   future subset swap must not be masked from clients for a year.
 */

const HASHED_ASSET = /^\/assets\/[^/]+-[0-9A-Za-z_-]{8}\.(?:js|mjs|css)$/
const FONT = /^\/fonts\/[^/]+\.woff2$/

export function withMarketingCache(request: Request, response: Response): Response {
  const isUpgrade = response.status === 101 || (response as { webSocket?: unknown }).webSocket != null
  if (isUpgrade) return response
  if (request.method !== 'GET' && request.method !== 'HEAD') return response
  const path = new URL(request.url).pathname
  if (path.startsWith('/app') || path.startsWith('/admin') || path.startsWith('/api')) return response
  const contentType = response.headers.get('content-type') ?? ''
  if (!contentType.includes('text/html')) return response
  const headers = new Headers(response.headers)
  if (!headers.has('Cache-Control')) headers.set('Cache-Control', 'public, max-age=3600')
  return new Response(response.body, { status: response.status, statusText: response.statusText, headers })
}

export function withStaticCache(request: Request, response: Response): Response {
  if (request.method !== 'GET' && request.method !== 'HEAD') return response
  const path = new URL(request.url).pathname
  const headers = new Headers(response.headers)
  if (HASHED_ASSET.test(path)) {
    headers.set('Cache-Control', 'public, max-age=31536000, immutable')
  } else if (FONT.test(path)) {
    headers.set('Cache-Control', 'public, max-age=604800')
  } else {
    return response
  }
  return new Response(response.body, { status: response.status, statusText: response.statusText, headers })
}