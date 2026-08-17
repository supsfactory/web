/**
 * Search index tests (node pool — full afarer corpus resolves like any module).
 * Guards against regressions where content lives in bodies but not excerpts.
 */
import { describe, expect, test } from 'vitest'
import { buildExtendedIndex, buildFullIndex } from './search-index.server'

describe('buildExtendedIndex', () => {
  test('every entry carries a non-empty searchable surface', () => {
    for (const locale of ['en', 'es'] as const) {
      const entries = buildExtendedIndex(locale)
      expect(entries.length).toBeGreaterThan(80)
      for (const it of entries) {
        expect(it.url).toMatch(/^\//)
        expect(it.title.length).toBeGreaterThan(0)
        expect(it.locale).toBe(locale)
      }
    }
  })

  test('body-only keywords are searchable (Qingdao Vatrad Group)', () => {
    for (const locale of ['en', 'es'] as const) {
      const hits = buildExtendedIndex(locale).filter((it) => (it.content ?? '').includes('Vatrad'))
      expect(hits.length, `locale ${locale}`).toBeGreaterThanOrEqual(2)
      expect(hits.some((h) => h.url === (locale === 'es' ? '/es/faq' : '/faq'))).toBe(true)
      expect(hits.some((h) => h.url.includes('/proof-center') || h.url.includes('/oem-trust'))).toBe(true)
    }
  })

  test('mdx article bodies are indexed', () => {
    const hits = buildExtendedIndex('en').filter((it) => (it.content ?? '').includes('pressure-hold'))
    expect(hits.length).toBeGreaterThan(0)
  })
})

describe('buildFullIndex', () => {
  test('deduplicates urls across locales and keeps content', () => {
    const entries = buildFullIndex()
    const urls = new Set(entries.map((it) => it.url))
    expect(urls.size).toBe(entries.length)
    expect(entries.some((it) => (it.content ?? '').includes('Vatrad'))).toBe(true)
  })
})
