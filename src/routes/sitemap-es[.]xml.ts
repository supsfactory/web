import { createFileRoute } from '@tanstack/react-router'

// Spanish marketing pages (hreflang-linked to the English pages file) plus the
// afarer pages and detail content (news/products/technology/case-use/guides)
// that ship a real Spanish variant.
//
// Content loader, product pages and sitemap builders are server-only — loaded
// dynamically so they stay out of the client bundle.
const handler = async () => {
  const [{ env }, { buildLocaleSitemap, PUBLIC_PATHS }, { EDGE_REDIRECTS }, { LEGACY_REDIRECTS }, loader, { GUIDES_ES }, { projects }, { knowledge }, { seriesPages }] =
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
  const afarerEs = loader
    .getLocalePaths('es')
    .filter((p: string) => !(p in EDGE_REDIRECTS) && !(p in LEGACY_REDIRECTS))
    .map((path: string) => ({ path }))
  const detailEs = [
    { path: '/evidence/case-studies' },
    { path: '/terms' },
    { path: '/privacy' },
    ...loader.getLocaleContentPaths('es').map((p: string) => ({ path: p })),
    ...GUIDES_ES.map((g: { slug: string }) => ({ path: `/guides/${g.slug}` })),
    ...projects.es.map((p: { slug: string }) => ({ path: `/projects/${p.slug}` })),
    ...knowledge.es.map((a: { slug: string }) => ({ path: `/knowledge/${a.slug}` })),
    ...seriesPages.es.map((s: { slug: string }) => ({ path: `/products/${s.slug}` })),
  ]
  return new Response(buildLocaleSitemap(origin, 'es', [...PUBLIC_PATHS, ...detailEs, ...afarerEs]), {
    headers: { 'content-type': 'application/xml; charset=utf-8', 'cache-control': 'public, max-age=3600' },
  })
}

export const Route = createFileRoute('/sitemap-es.xml')({
  server: { handlers: { GET: handler } },
})