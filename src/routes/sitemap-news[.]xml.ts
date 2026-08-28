import { createFileRoute } from '@tanstack/react-router'

// News posts with real lastmod (post date). Posts with a Spanish sidecar
// ({slug}.es.mdx) emit the /es twin as an hreflang alternate.
const handler = async () => {
  const [{ env }, { buildSitemap }, loader] = await Promise.all([
    import('@/lib/env'),
    import('@/features/seo/seo'),
    import('@/features/content/loader'),
  ])
  const origin = new URL(env.BETTER_AUTH_URL).origin
  const es = new Set(loader.getLocaleContentPaths('es'))
  const paths = loader.getNewsPosts().map((p: { slug: string; date: string }) => ({
    loc: `/news/${p.slug}`,
    lastmod: p.date.slice(0, 10),
    es: es.has(`/news/${p.slug}`),
  }))
  return new Response(buildSitemap(origin, paths, { locale: 'none' }), {
    headers: { 'content-type': 'application/xml; charset=utf-8', 'cache-control': 'public, max-age=3600' },
  })
}

export const Route = createFileRoute('/sitemap-news.xml')({
  server: { handlers: { GET: handler } },
})