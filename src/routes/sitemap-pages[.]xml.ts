import { createFileRoute } from '@tanstack/react-router'

// English marketing pages (hreflang-linked to /es mirrors in sitemap-es) plus
// static pages; every entry whose /es twin renders a real translation carries
// the Spanish hreflang alternate.
//
// The content loader (YAML corpus), product pages and sitemap builders are
// server-only — loaded dynamically so they stay out of the client bundle.
const handler = async () => {
  const [{ env }, { buildSitemap }, { EDGE_REDIRECTS }, loader, { GUIDES }, { projects }, { knowledge }, { seriesPages }] =
    await Promise.all([
      import('@/lib/env'),
      import('@/features/seo/seo'),
      import('@/features/seo/edge-gate'),
      import('@/features/content/loader'),
      import('@/features/content/guide-content'),
      import('@/product/projects'),
      import('@/product/knowledge'),
      import('@/product/series-pages'),
    ])
  const origin = new URL(env.BETTER_AUTH_URL).origin
  const esPaths = new Set(loader.getLocalePaths('es'))
  const frPaths = new Set(loader.getLocalePaths('fr'))
  const livePages = loader
    .getContentPages()
    .filter((p: { path: string }) => !(p.path in EDGE_REDIRECTS))
    .map((p: { path: string; content: { seo?: { dateModified?: string } }; meta?: { dateModified?: string } }) => {
      const seo = p.content.seo as { dateModified?: string } | undefined
      return { loc: p.path, lastmod: p.meta?.dateModified ?? seo?.dateModified ?? '2026-06-01', es: esPaths.has(p.path), fr: frPaths.has(p.path) }
    })
  const staticPages = [
    ...GUIDES.map((g: { slug: string }) => ({ loc: `/guides/${g.slug}`, lastmod: '2026-06-01', es: true, fr: true })),
    ...projects.en.map((p: { slug: string }) => ({ loc: `/projects/${p.slug}`, lastmod: '2026-08-15' })),
    ...knowledge.en.map((a: { slug: string }) => ({ loc: `/knowledge/${a.slug}`, lastmod: '2026-08-07' })),
    ...seriesPages.en.map((s: { slug: string }) => ({ loc: `/products/${s.slug}`, lastmod: '2026-08-15', es: true, fr: true })),
    { loc: '/evidence/case-studies', lastmod: '2026-06-01', es: true, fr: true },
    { loc: '/faq', lastmod: '2026-06-01', es: true, fr: true },
    { loc: '/terms', lastmod: '2026-08-15', es: true, fr: true },
    { loc: '/privacy', lastmod: '2026-08-15', es: true, fr: true },
  ]
  return new Response(buildSitemap(origin, [...livePages, ...staticPages], { locale: 'en' }), {
    headers: { 'content-type': 'application/xml; charset=utf-8', 'cache-control': 'public, max-age=3600' },
  })
}

export const Route = createFileRoute('/sitemap-pages.xml')({
  server: { handlers: { GET: handler } },
})