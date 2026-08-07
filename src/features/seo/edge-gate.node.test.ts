import { test, expect } from 'vitest'
import { gatePath, EDGE_REDIRECTS } from '@/features/seo/edge-gate'
import { LEGACY_REDIRECTS } from '@/features/seo/legacy-redirects'
import { getAfarerPages } from '@/features/content/loader'
import { GUIDES } from '@/features/content/guide-content'
import { PUBLIC_PATHS } from '@/features/seo/seo'

/** Dedicated/static routes not covered by getAfarerPages() or PUBLIC_PATHS. */
const TEMPLATE_ROUTES = [
  '/academy', '/community', '/evidence', '/evidence/case-studies', '/faq', '/journal', '/lifestyle',
  '/media', '/news', '/partners', '/research',
  // legal pages are live routes but deliberately excluded from the sitemaps
  '/terms', '/privacy',
]

/** Dynamic prefix routes ({-$locale}/knowledge/$slug.tsx etc.) — a legacy key under one of these shadows real pages. */
const DYNAMIC_PREFIXES = ['/knowledge', '/projects', '/evidence/case-studies']

/** Every legacy target must resolve to a live route (not another redirect). */
const LIVE_ROUTES = new Set([
  ...getAfarerPages().map((p) => p.path),
  ...GUIDES.map((g) => `/guides/${g.slug}`),
  ...PUBLIC_PATHS.map((e) => e.path),
  ...TEMPLATE_ROUTES,
])

test('301 merge of duplicate paths (P0-4)', () => {
  expect(gatePath('/oem-odm')).toEqual({ action: 'redirect', to: '/oem-odm-manufacturer' })
  expect(gatePath('/zh/oem-odm')).toEqual({ action: 'redirect', to: '/es/oem-odm-manufacturer' })
  expect(gatePath('/brand/afarer')).toEqual({ action: 'redirect', to: '/afarer' })
  expect(gatePath('/zh/brand/afarer')).toEqual({ action: 'redirect', to: '/afarer' })
  expect(gatePath('/brand/story')).toEqual({ action: 'redirect', to: '/afarer' })
  expect(gatePath('/zh/brand/story')).toEqual({ action: 'redirect', to: '/afarer' })
})

test('legacy theafarer URLs 301 to live pages (spot checks)', () => {
  expect(gatePath('/odm-sup-board')).toEqual({ action: 'redirect', to: '/oem-odm-manufacturer' })
  expect(gatePath('/sup-manufacturer')).toEqual({ action: 'redirect', to: '/oem-odm-manufacturer' })
  expect(gatePath('/guides/sup-yoga')).toEqual({ action: 'redirect', to: '/knowledge' })
  expect(gatePath('/research/sup-valve-types')).toEqual({ action: 'redirect', to: '/research' })
  expect(gatePath('/solutions-fishing-boat-solutions')).toEqual({ action: 'redirect', to: '/fishing' })
  expect(gatePath('/use-cases/disaster-relief')).toEqual({ action: 'redirect', to: '/disaster-relief-humanitarian-aid' })
  expect(gatePath('/resources/download-catalog')).toEqual({ action: 'redirect', to: '/contact' })
  expect(gatePath('/touring-sup')).toEqual({ action: 'redirect', to: '/products' })
  // /search is now a live search results page (not a legacy redirect)
  expect(gatePath('/search')).toEqual({ action: 'ok' })
  expect(gatePath('/es/search')).toEqual({ action: 'ok' })
  // trailing slash single-hops straight to the final target
  expect(gatePath('/guides/sup-yoga/')).toEqual({ action: 'redirect', to: '/knowledge' })
})

test('every legacy URL resolves to a live route', () => {
  for (const [from, to] of Object.entries(LEGACY_REDIRECTS)) {
    expect(from, `legacy key must differ from its target`).not.toBe(to)
    expect(LIVE_ROUTES.has(to), `${from} → ${to} is not a live route`).toBe(true)
  }
})

test('no legacy key shadows a live page (P0-5)', () => {
  for (const from of Object.keys(LEGACY_REDIRECTS)) {
    expect(LIVE_ROUTES.has(from), `${from} shadows a live page and must be removed from LEGACY_REDIRECTS`).toBe(false)
    for (const prefix of DYNAMIC_PREFIXES) {
      expect(from.startsWith(`${prefix}/`), `${from} shadows dynamic ${prefix}/* routes`).toBe(false)
    }
  }
})

test('revived pages are served, not 301d (P0-5)', () => {
  expect(gatePath('/about/afarer').action).toBe('ok')
  expect(gatePath('/oem-paddle').action).toBe('ok')
  expect(gatePath('/factory/oem-capability').action).toBe('ok')
  expect(gatePath('/factory/capacity').action).toBe('ok')
  expect(gatePath('/randdcenter/hull-engineering').action).toBe('ok')
  expect(gatePath('/research/drop-stitch-technology').action).toBe('ok')
  expect(gatePath('/solutions/paddle-clubs').action).toBe('ok')
  expect(gatePath('/private-label-sup').action).toBe('ok')
  expect(gatePath('/guides').action).toBe('ok')
  expect(gatePath('/guides/beginner-guide').action).toBe('ok')
  expect(gatePath('/guides/inflatable-vs-hard').action).toBe('ok')
  expect(gatePath('/evidence/case-studies').action).toBe('ok')
})

test('retired zh locale: every /zh/* URL 301s to its /es mirror', () => {
  expect(gatePath('/zh')).toEqual({ action: 'redirect', to: '/es' })
  expect(gatePath('/zh/solutions')).toEqual({ action: 'redirect', to: '/es/solutions' })
  expect(gatePath('/zh/what-is-sup')).toEqual({ action: 'redirect', to: '/es/what-is-sup' })
  expect(gatePath('/zh/products/sup-explorer-11')).toEqual({ action: 'redirect', to: '/es/products/sup-explorer-11' })
})

test('410 for removed template pages (P0-2)', () => {
  expect(gatePath('/docs')).toEqual({ action: 'gone' })
  expect(gatePath('/docs/features/auth')).toEqual({ action: 'gone' })
  expect(gatePath('/waitlist')).toEqual({ action: 'gone' })
  expect(gatePath('/es/waitlist')).toEqual({ action: 'gone' })
  expect(gatePath('/zh/waitlist')).toEqual({ action: 'gone' })
  expect(gatePath('/changelog')).toEqual({ action: 'gone' })
  expect(gatePath('/es/changelog')).toEqual({ action: 'gone' })
  expect(gatePath('/zh/changelog')).toEqual({ action: 'gone' })
  // '/docs/' is normalised to '/docs' first (301), then 410 on the next hop
  expect(gatePath('/docs/')).toEqual({ action: 'slash', to: '/docs' })
})

test('trailing slash normalised (P0-6)', () => {
  expect(gatePath('/factory/')).toEqual({ action: 'slash', to: '/factory' })
  expect(gatePath('/es/solutions/')).toEqual({ action: 'slash', to: '/es/solutions' })
})

test('api/app/admin and plain paths untouched', () => {
  expect(gatePath('/factory').action).toBe('ok')
  expect(gatePath('/oem-odm-manufacturer').action).toBe('ok')
  expect(gatePath('/api/v1/waitlist').action).toBe('ok')
  expect(gatePath('/app/dashboard').action).toBe('ok')
  expect(gatePath('/admin/users').action).toBe('ok')
})

test('redirect targets never redirect again', () => {
  for (const to of [...Object.values(EDGE_REDIRECTS), ...Object.values(LEGACY_REDIRECTS)]) {
    expect(gatePath(to).action).toBe('ok')
  }
})
