import { createFileRoute } from '@tanstack/react-router'

// Czech marketing pages (hreflang-linked to the English pages file) plus
// the brand pages and detail content (news/products/technology/case-use/guides)
// that ship a real Czech variant — mirror of sitemap-ru.xml.
//
// Content loader, product pages and sitemap builders are server-only — loaded
// dynamically so they stay out of the client bundle.
const handler = async () => {
  const [{ env }, { buildLocaleSitemap, PUBLIC_PATHS }, { EDGE_REDIRECTS }, { LEGACY_REDIRECTS }, loader, { GUIDES_CS }, { projects }, { knowledge }, { seriesPages }] =
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
    .getLocalePaths('cs')
    .filter((p: string) => !(p in EDGE_REDIRECTS) && !(p in LEGACY_REDIRECTS))
    .map((path: string) => ({ path }))
  const detailCs = [
    { path: '/evidence/case-studies' },
    { path: '/terms' },
    { path: '/privacy' },
    ...loader.getLocaleContentPaths('cs').map((p: string) => ({ path: p })),
    ...GUIDES_CS.map((g: { slug: string }) => ({ path: `/guides/${g.slug}` })),
    ...projects.cs.map((p: { slug: string }) => ({ path: `/projects/${p.slug}` })),
    ...knowledge.cs.map((a: { slug: string }) => ({ path: `/knowledge/${a.slug}` })),
    ...seriesPages.cs.map((s: { slug: string }) => ({ path: `/products/${s.slug}` })),
  ]
  return new Response(buildLocaleSitemap(origin, 'cs', [...PUBLIC_PATHS, ...detailCs, ...brandPaths]), {
    headers: { 'content-type': 'application/xml; charset=utf-8', 'cache-control': 'public, max-age=3600' },
  })
}

export const Route = createFileRoute('/sitemap-cs.xml')({
  server: { handlers: { GET: handler } },
})