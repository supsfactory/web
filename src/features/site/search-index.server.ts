/**
 * Server-only site search index builder.
 *
 * Statically imported by server routes (`/search-index.json`) and dynamically
 * by the `/search` page server fn, so the afarer corpus it pulls in via the
 * loader never enters the client bundle.
 */

import { locales, localizePath, type Locale } from '@/features/i18n/locale'
import { pick } from './content'
import { solutionPages, solutionPath } from './solution-pages'
import { knowledge } from './knowledge'
import { projects } from './projects'
import { getAfarerPage, getAfarerPages, isAfarerPageTranslated, getSiteFaqs } from '@/features/content/loader'
import { EDGE_REDIRECTS } from '@/features/seo/edge-gate'
import type { SearchEntry } from './search'

const squeeze = (s: string): string => s.replace(/\s+/g, ' ').trim()

/** Slug → readable label fallback for pages without an explicit SEO title. */
const humanize = (s: string): string =>
  squeeze(s.replace(/^\/+/, '').replace(/[-_]+/g, ' ').replace(/\b\w/g, (ch) => ch.toUpperCase()))

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

/** Afarer + site-FAQ entries for one locale (the `/search` server filter). */
export function buildExtendedIndex(locale: Locale): SearchEntry[] {
  const entries: SearchEntry[] = [...buildContentIndex(locale)]
  for (const p of getAfarerPages()) {
    if (p.path in EDGE_REDIRECTS) continue
    const seo = p.content.seo as { title?: string; description?: string } | undefined
    entries.push({
      url: p.path,
      title: (seo?.title ?? '').replace(/[|–—-].*$/, '').trim() || humanize(p.label),
      excerpt: seo?.description ?? '',
      type: 'page',
      locale: 'en',
    })
    if (locale === 'es' && isAfarerPageTranslated(p.path, 'es')) {
      const es = getAfarerPage(p.path, 'es')!
      const esMeta = es.content.meta as { title?: string; description?: string } | undefined
      const esSeo = es.content.seo as { headline?: string; description?: string } | undefined
      const esTitle = (esMeta?.title ?? esSeo?.headline ?? '').replace(/[|–—-].*$/, '').trim() || humanize(p.label)
      entries.push({
        url: `/es${p.path}`,
        title: esTitle,
        excerpt: esMeta?.description ?? esSeo?.description ?? '',
        type: 'page',
        locale: 'es',
      })
    }
  }
  entries.push({
    url: '/faq',
    title: 'FAQ',
    excerpt: 'Frequently asked questions about inflatable SUP OEM/ODM manufacturing — materials, certifications, minimum order quantities and wholesale logistics.',
    type: 'page',
    locale: 'en',
  })
  if (locale === 'es' && isAfarerPageTranslated('/faq', 'es') && getSiteFaqs('es').length > 0) {
    entries.push({
      url: '/es/faq',
      title: 'Preguntas frecuentes',
      excerpt: 'Preguntas frecuentes sobre fabricación OEM/ODM de SUP hinchables — materiales, certificaciones, cantidades mínimas de pedido y logística al por mayor.',
      type: 'page',
      locale: 'es',
    })
  }
  return entries
}

/** Full index for the `Header /search-index.json` endpoint. */
export function buildFullIndex(): SearchEntry[] {
  const seen = new Set<string>()
  const out: SearchEntry[] = []
  for (const locale of locales) {
    for (const it of buildExtendedIndex(locale)) {
      if (seen.has(it.url)) continue
      seen.add(it.url)
      out.push(it)
    }
  }
  return out
}
