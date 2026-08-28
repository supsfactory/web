import { createFileRoute } from '@tanstack/react-router'

// Product / technology / case-study detail pages. Entries with a real Spanish
// sidecar ({slug}.es.*) emit the /es twin as an hreflang alternate.
const handler = async () => {
  const [{ env }, { buildSitemap }, loader] = await Promise.all([
    import('@/lib/env'),
    import('@/features/seo/seo'),
    import('@/features/content/loader'),
  ])
  const origin = new URL(env.BETTER_AUTH_URL).origin
  const es = new Set(loader.getLocaleContentPaths('es'))
  const paths = [
    ...loader.getContentProducts().map((p: { slug: string }) => ({ loc: `/products/${p.slug}`, lastmod: '2026-06-01', es: es.has(`/products/${p.slug}`) })),
    ...loader.getTechArticles().map((p: { slug: string }) => ({ loc: `/technology/${p.slug}`, lastmod: '2026-06-01', es: es.has(`/technology/${p.slug}`) })),
    ...loader.getCaseUses().map((p: { slug: string }) => ({ loc: `/evidence/case-studies/${p.slug}`, lastmod: '2026-06-01', es: es.has(`/evidence/case-studies/${p.slug}`) })),
  ]
  return new Response(buildSitemap(origin, paths, { locale: 'none' }), {
    headers: { 'content-type': 'application/xml; charset=utf-8', 'cache-control': 'public, max-age=3600' },
  })
}

export const Route = createFileRoute('/sitemap-products.xml')({
  server: { handlers: { GET: handler } },
})