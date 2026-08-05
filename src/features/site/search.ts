import type { Locale } from '@/features/i18n/locale'
import { localizePath } from '@/features/i18n/locale'
import { pick } from './content'
import { solutionPages, solutionPath } from './solution-pages'
import { knowledge } from './knowledge'
import { projects } from './projects'

/**
 * Site search index — every deep-content page (solutions, knowledge guides,
 * project cases) per locale, served at `/search-index.json` and filtered
 * client-side in the header search dialog. Afarer content pages are added in
 * the route (they are English-only, so they carry `locale: 'en'`).
 */
export type SearchEntryType = 'solution' | 'guide' | 'project' | 'page'

export interface SearchEntry {
  url: string
  title: string
  excerpt: string
  type: SearchEntryType
  locale: Locale
}

const squeeze = (s: string): string => s.replace(/\s+/g, ' ').trim()

export function buildContentIndex(locale: Locale): SearchEntry[] {
  const entries: SearchEntry[] = []
  for (const p of pick(solutionPages, locale)) {
    entries.push({
      url: localizePath(locale, solutionPath(p.slug)),
      title: squeeze(p.navLabel),
      excerpt: squeeze(p.metaDescription),
      type: 'solution',
      locale,
    })
  }
  for (const a of pick(knowledge, locale)) {
    entries.push({
      url: localizePath(locale, `/knowledge/${a.slug}`),
      title: squeeze(a.navLabel),
      excerpt: squeeze(a.metaDescription),
      type: 'guide',
      locale,
    })
  }
  for (const pr of pick(projects, locale)) {
    entries.push({
      url: localizePath(locale, `/projects/${pr.slug}`),
      title: squeeze(pr.navLabel),
      excerpt: squeeze(pr.metaDescription),
      type: 'project',
      locale,
    })
  }
  return entries
}
