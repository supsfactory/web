import { describe, expect, it } from 'vitest'
import { withMarketingCache, withStaticCache } from './cache-headers'

const GET = (_path: string, type = 'text/html; charset=utf-8') =>
  new Response('<html></html>', { headers: { 'content-type': type } })

describe('withMarketingCache', () => {
  it('caches public marketing HTML for 1h', () => {
    const r = withMarketingCache(new Request('https://x.test/'), GET('/'))
    expect(r.headers.get('cache-control')).toBe('public, max-age=3600')
  })

  it('respects an upstream Cache-Control (redirects)', () => {
    const r = withMarketingCache(
      new Request('https://x.test/legacy'),
      new Response(null, { status: 301, headers: { location: '/new', 'cache-control': 'max-age=3600' } }),
    )
    expect(r.headers.get('cache-control')).toBe('max-age=3600')
  })

  it('does not cache app/admin/api or non-GET', () => {
    for (const path of ['/app', '/admin', '/api/x', '/app/dashboard']) {
      expect(withMarketingCache(new Request(`https://x.test${path}`), GET(path)).headers.has('cache-control')).toBe(false)
    }
    expect(withMarketingCache(new Request('https://x.test/', { method: 'POST' }), GET('/')).headers.has('cache-control')).toBe(false)
  })

  it('does not cache non-HTML responses', () => {
    const r = withMarketingCache(new Request('https://x.test/'), GET('/', 'application/json'))
    expect(r.headers.has('cache-control')).toBe(false)
  })
})

describe('withStaticCache', () => {
  it('caches hashed build assets as immutable for a year', () => {
    for (const path of [
      '/assets/index-DYsAOzxM.js',
      '/assets/app-BH3xOMGs.css',
      '/assets/_-_-locale_-OjHCjNFD.js',
    ]) {
      const r = withStaticCache(new Request(`https://x.test${path}`), GET(path, 'text/javascript'))
      expect(r.headers.get('cache-control')).toBe('public, max-age=31536000, immutable')
    }
  })

  it('caches fonts for 7 days', () => {
    const r = withStaticCache(new Request('https://x.test/fonts/manrope-latin-700-normal.woff2'), GET('/fonts/x.woff2', 'font/woff2'))
    expect(r.headers.get('cache-control')).toBe('public, max-age=604800')
  })

  it('leaves non-hashed assets, HTML and non-GET untouched', () => {
    const plain = withStaticCache(new Request('https://x.test/assets/wechat-qr.png'), GET('/assets/wechat-qr.png', 'image/png'))
    expect(plain.headers.has('cache-control')).toBe(false)
    const html = withStaticCache(new Request('https://x.test/'), GET('/'))
    expect(html.headers.has('cache-control')).toBe(false)
    const post = withStaticCache(new Request('https://x.test/assets/x-yyyyyyyy.js', { method: 'POST' }), GET('/x'))
    expect(post.headers.has('cache-control')).toBe(false)
  })
})