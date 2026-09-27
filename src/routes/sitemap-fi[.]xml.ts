import { createFileRoute } from '@tanstack/react-router'

// Finnish marketing pages (hreflang-linked to the English pages file) plus
// the brand pages and detail content (news/products/technology/case-use/guides)
// that ship a real Finnish variant — mirror of sitemap-da.xml.
//
// Content loader, product pages and sitemap builders are server-only — loaded
// dynamically so they stay out of the client bundle.
const handler = async () => {
  const [{ env }, { buildLocaleSitemap, PUBLIC_PATHS }, { EDGE_REDIRECTS }, { LEGACY_REDIRECTS }, loader, { GUIDES_FI }, { projects }, { knowledge }, { seriesPages }] =
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
    .getLocalePaths('fi')
    .filter((p: string) => !(p in EDGE_REDIRECTS) && !(p in LEGACY_REDIRECTS))
    .map((path: string) => ({ path }))
  const detailFi = [
    { path: '/evidence/case-studies' },
    { path: '/terms' },
    { path: '/privacy' },
    ...loader.getLocaleContentPaths('fi').map((p: string) => ({ path: p })),
    ...GUIDES_FI.map((g: { slug: string }) => ({ path: `/guides/${g.slug}` })),
    ...projects.fi.map((p: { slug: string }) => ({ path: `/projects/${p.slug}` })),
    ...knowledge.fi.map((a: { slug: string }) => ({ path: `/knowledge/${a.slug}` })),
    ...seriesPages.fi.map((s: { slug: string }) => ({ path: `/products/${s.slug}` })),
  ]
  return new Response(buildLocaleSitemap(origin, 'fi', [...PUBLIC_PATHS, ...detailFi, ...brandPaths]), {
    headers: { 'content-type': 'application/xml; charset=utf-8', 'cache-control': 'public, max-age=3600' },
  })
}

export const Route = createFileRoute('/sitemap-fi.xml')({
  server: { handlers: { GET: handler } },
})