import { createFileRoute } from '@tanstack/react-router'
import { env } from '@/lib/env'
import { buildSitemap } from '@/features/seo/seo'
import { EDGE_REDIRECTS } from '@/features/seo/edge-gate'
import { getAfarerPages, getAfarerEsPaths } from '@/features/content/loader'
import { GUIDES } from '@/features/content/guide-content'
import { projects } from '@/features/site/projects'
import { knowledge } from '@/features/site/knowledge'
import { seriesPages } from '@/features/site/series-pages'

// English marketing pages (hreflang-linked to /es mirrors in sitemap-es) plus
// afarer/static pages; every entry whose /es twin renders a real translation
// carries the Spanish hreflang alternate.
const handler = () => {
  const origin = new URL(env.BETTER_AUTH_URL).origin
  const esPaths = new Set(getAfarerEsPaths())
  const afarer = getAfarerPages()
    .filter((p) => !(p.path in EDGE_REDIRECTS))
    .map((p) => {
      const seo = p.content.seo as { dateModified?: string } | undefined
      return { loc: p.path, lastmod: p.meta?.dateModified ?? seo?.dateModified ?? '2026-06-01', es: esPaths.has(p.path) }
    })
  const staticPages = [
    ...GUIDES.map((g) => ({ loc: `/guides/${g.slug}`, lastmod: '2026-06-01', es: true })),
    ...projects.en.map((p) => ({ loc: `/projects/${p.slug}`, lastmod: '2026-08-07' })),
    ...knowledge.en.map((a) => ({ loc: `/knowledge/${a.slug}`, lastmod: '2026-08-07' })),
    ...seriesPages.en.map((s) => ({ loc: `/products/${s.slug}`, lastmod: '2026-08-13', es: true })),
    { loc: '/evidence/case-studies', lastmod: '2026-06-01', es: true },
    { loc: '/faq', lastmod: '2026-06-01', es: true },
    { loc: '/terms', lastmod: '2026-08-15', es: true },
    { loc: '/privacy', lastmod: '2026-08-15', es: true },
  ]
  return new Response(buildSitemap(origin, [...afarer, ...staticPages], { locale: 'en' }), {
    headers: { 'content-type': 'application/xml; charset=utf-8' },
  })
}

export const Route = createFileRoute('/sitemap-pages.xml')({
  server: { handlers: { GET: handler } },
})
