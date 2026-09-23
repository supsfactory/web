import { createFileRoute } from '@tanstack/react-router'

// French marketing pages (hreflang-linked to the English pages file) plus the
// brand pages and detail content (news/products/technology/case-use/guides)
// that ship a real French variant — mirror of sitemap-es.xml.
//
// Content loader, product pages and sitemap builders are server-only — loaded
// dynamically so they stay out of the client bundle.
const handler = async () => {
  const [{ env }, { buildLocaleSitemap, PUBLIC_PATHS }, { EDGE_REDIRECTS }, { LEGACY_REDIRECTS }, loader, { GUIDES_FR }, { projects }, { knowledge }, { seriesPages }] =
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
    .getLocalePaths('fr')
    .filter((p: string) => !(p in EDGE_REDIRECTS) && !(p in LEGACY_REDIRECTS))
    .map((path: string) => ({ path }))
  const detailFr = [
    { path: '/evidence/case-studies' },
    { path: '/terms' },
    { path: '/privacy' },
    ...loader.getLocaleContentPaths('fr').map((p: string) => ({ path: p })),
    ...GUIDES_FR.map((g: { slug: string }) => ({ path: `/guides/${g.slug}` })),
    ...projects.fr.map((p: { slug: string }) => ({ path: `/projects/${p.slug}` })),
    ...knowledge.fr.map((a: { slug: string }) => ({ path: `/knowledge/${a.slug}` })),
    ...seriesPages.fr.map((s: { slug: string }) => ({ path: `/products/${s.slug}` })),
  ]
  return new Response(buildLocaleSitemap(origin, 'fr', [...PUBLIC_PATHS, ...detailFr, ...brandPaths]), {
    headers: { 'content-type': 'application/xml; charset=utf-8', 'cache-control': 'public, max-age=3600' },
  })
}

export const Route = createFileRoute('/sitemap-fr.xml')({
  server: { handlers: { GET: handler } },
})