import { createFileRoute } from '@tanstack/react-router'
import { env } from '@/lib/env'
import { buildSitemap } from '@/features/seo/seo'
import { EDGE_REDIRECTS } from '@/features/seo/edge-gate'
import { getAfarerPages } from '@/features/content/loader'
import { GUIDES } from '@/features/content/guide-content'
import { projects } from '@/features/site/projects'
import { knowledge } from '@/features/site/knowledge'

// English marketing pages (hreflang-linked to /es mirrors in sitemap-es) plus
// English-only afarer/static pages (no hreflang — their /es prefix is an
// English duplicate, not a translation).
const handler = () => {
  const origin = new URL(env.BETTER_AUTH_URL).origin
  const afarer = getAfarerPages()
    .filter((p) => !(p.path in EDGE_REDIRECTS))
    .map((p) => {
      const seo = p.content.seo as { dateModified?: string } | undefined
      return { loc: p.path, lastmod: seo?.dateModified ?? '2026-06-01' }
    })
  const staticPages = [
    ...GUIDES.map((g) => ({ loc: `/guides/${g.slug}`, lastmod: '2026-06-01' })),
    ...projects.en.map((p) => ({ loc: `/projects/${p.slug}`, lastmod: '2026-08-07' })),
    ...knowledge.en.map((a) => ({ loc: `/knowledge/${a.slug}`, lastmod: '2026-08-07' })),
    { loc: '/evidence/case-studies', lastmod: '2026-06-01' },
    { loc: '/faq', lastmod: '2026-06-01' },
  ]
  return new Response(buildSitemap(origin, [...afarer, ...staticPages], { locale: 'en' }), {
    headers: { 'content-type': 'application/xml; charset=utf-8' },
  })
}

export const Route = createFileRoute('/sitemap-pages.xml')({
  server: { handlers: { GET: handler } },
})
