import { createFileRoute } from '@tanstack/react-router'

// Portuguese marketing pages (hreflang-linked to the English pages file) plus
// the brand pages and detail content (news/products/technology/case-use/guides)
// that ship a real Portuguese variant — mirror of sitemap-it.xml.
//
// Content loader, product pages and sitemap builders are server-only — loaded
// dynamically so they stay out of the client bundle.
const handler = async () => {
  const [{ env }, { buildLocaleSitemap, PUBLIC_PATHS }, { EDGE_REDIRECTS }, { LEGACY_REDIRECTS }, loader, { GUIDES_PT }, { projects }, { knowledge }, { seriesPages }] =
    await Promise.all([
      import('@/lib/env'),
      import('@/features/seo/seo'),
      import('@/features/seo/edge-gate'),
      import('@/features/seo/legacy-redirects'),
      import('@/features/content/loader'),
      import('@/features/content/guide-content'),
      import('@/product/projects'),
      import('@/product/knowledge'),
      import('@/product/series-pages'),
    ])
  const origin = new URL(env.BETTER_AUTH_URL).origin
  const brandPaths = loader
    .getLocalePaths('pt')
    .filter((p: string) => !(p in EDGE_REDIRECTS) && !(p in LEGACY_REDIRECTS))
    .map((path: string) => ({ path }))
  const detailPt = [
    { path: '/evidence/case-studies' },
    { path: '/terms' },
    { path: '/privacy' },
    ...loader.getLocaleContentPaths('pt').map((p: string) => ({ path: p })),
    ...GUIDES_PT.map((g: { slug: string }) => ({ path: `/guides/${g.slug}` })),
    ...projects.pt.map((p: { slug: string }) => ({ path: `/projects/${p.slug}` })),
    ...knowledge.pt.map((a: { slug: string }) => ({ path: `/knowledge/${a.slug}` })),
    ...seriesPages.pt.map((s: { slug: string }) => ({ path: `/products/${s.slug}` })),
  ]
  return new Response(buildLocaleSitemap(origin, 'pt', [...PUBLIC_PATHS, ...detailPt, ...brandPaths]), {
    headers: { 'content-type': 'application/xml; charset=utf-8', 'cache-control': 'public, max-age=3600' },
  })
}

export const Route = createFileRoute('/sitemap-pt.xml')({
  server: { handlers: { GET: handler } },
})