import { createFileRoute } from '@tanstack/react-router'

// Arabic marketing pages (hreflang-linked to the English pages file) plus the
// brand pages and the detail content that ship a real Arabic variant — mirror
// of sitemap-ru.xml.
//
// Content loader, product pages and sitemap builders are server-only — loaded
// dynamically so they stay out of the client bundle.
const handler = async () => {
  const [{ env }, { buildLocaleSitemap, PUBLIC_PATHS }, { EDGE_REDIRECTS }, { LEGACY_REDIRECTS }, loader, { projects }, { knowledge }] =
    await Promise.all([
      import('@/lib/env'),
      import('@/features/seo/seo'),
      import('@/features/seo/edge-gate'),
      import('@/features/seo/legacy-redirects'),
      import('@/features/content/loader'),
      import('@/product/projects'),
      import('@/product/knowledge'),
    ])
  const origin = new URL(env.BETTER_AUTH_URL).origin
  const brandPaths = loader
    .getLocalePaths('ar')
    .filter((p: string) => !(p in EDGE_REDIRECTS) && !(p in LEGACY_REDIRECTS))
    .map((path: string) => ({ path }))
  const detailAr = [
    { path: '/evidence/case-studies' },
    { path: '/terms' },
    { path: '/privacy' },
    ...loader.getLocaleContentPaths('ar').map((p: string) => ({ path: p })),
    ...projects.ar.map((p: { slug: string }) => ({ path: `/projects/${p.slug}` })),
    ...knowledge.ar.map((a: { slug: string }) => ({ path: `/knowledge/${a.slug}` })),
  ]
  return new Response(buildLocaleSitemap(origin, 'ar', [...PUBLIC_PATHS, ...detailAr, ...brandPaths]), {
    headers: { 'content-type': 'application/xml; charset=utf-8', 'cache-control': 'public, max-age=3600' },
  })
}

export const Route = createFileRoute('/sitemap-ar.xml')({
  server: { handlers: { GET: handler } },
})
