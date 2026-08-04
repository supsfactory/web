import { test, expect } from 'vitest'
import { gatePath, EDGE_REDIRECTS } from '@/features/seo/edge-gate'

test('301 merge of duplicate paths (P0-4)', () => {
  expect(gatePath('/oem-odm')).toEqual({ action: 'redirect', to: '/oem-odm-manufacturer' })
  expect(gatePath('/zh/oem-odm')).toEqual({ action: 'redirect', to: '/es/oem-odm-manufacturer' })
  expect(gatePath('/brand/afarer')).toEqual({ action: 'redirect', to: '/about/afarer' })
  expect(gatePath('/zh/brand/afarer')).toEqual({ action: 'redirect', to: '/about/afarer' })
  expect(gatePath('/brand/story')).toEqual({ action: 'redirect', to: '/about/afarer' })
  expect(gatePath('/zh/brand/story')).toEqual({ action: 'redirect', to: '/about/afarer' })
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
  expect(gatePath('/about/afarer').action).toBe('ok')
  expect(gatePath('/api/v1/waitlist').action).toBe('ok')
  expect(gatePath('/app/dashboard').action).toBe('ok')
  expect(gatePath('/admin/users').action).toBe('ok')
})

test('redirect targets never redirect again', () => {
  for (const to of Object.values(EDGE_REDIRECTS)) {
    expect(gatePath(to).action).toBe('ok')
  }
})
