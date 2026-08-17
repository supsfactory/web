/**
 * Search index tests (node pool — full afarer corpus resolves like any module).
 * Guards against regressions where content lives in bodies but not excerpts.
 */
import { describe, expect, test } from 'vitest'
import type { SearchEntry } from './search'
import { buildExtendedIndex, buildFullIndex } from './search-index.server'
import { solutionPages, solutionPath } from './solution-pages'
import { knowledge } from './knowledge'
import { projects } from './projects'
import { seriesPages } from './series-pages'
import { pick } from './content'

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

  test('structured page bodies are indexed (solutions/knowledge/projects/series)', () => {
    const entries = buildExtendedIndex('en')
    const byUrl = new Map<string, SearchEntry>()
    for (const it of entries) if (!byUrl.has(it.url)) byUrl.set(it.url, it)
    const needle = (s: string | undefined) => s?.replace(/\s+/g, ' ').trim().slice(0, 60)
    for (const p of pick(solutionPages, 'en')) {
      const it = byUrl.get(solutionPath(p.slug))
      expect(it?.content?.includes(needle(p.answer) ?? '')).toBe(true)
    }
    for (const a of pick(knowledge, 'en')) {
      const it = byUrl.get(`/knowledge/${a.slug}`)
      expect(it?.content?.includes(needle(a.intro) ?? '')).toBe(true)
    }
    for (const pr of pick(projects, 'en')) {
      const it = byUrl.get(`/projects/${pr.slug}`)
      expect(it?.content?.includes(needle(pr.requirement) ?? '')).toBe(true)
    }
    for (const s of pick(seriesPages, 'en')) {
      const it = byUrl.get(`/products/${s.slug}`)
      expect(it?.content?.includes(needle(s.intro[0]) ?? '')).toBe(true)
    }
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
