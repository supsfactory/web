import { createFileRoute } from '@tanstack/react-router'

const handler = async () => {
  const [{ env }, { buildSitemapIndex }] = await Promise.all([
    import('@/lib/env'),
    import('@/features/seo/seo'),
  ])
  return new Response(
    buildSitemapIndex(new URL(env.BETTER_AUTH_URL).origin, [
      'sitemap-pages.xml',
      'sitemap-es.xml',
      'sitemap-products.xml',
      'sitemap-news.xml',
    ]),
    { headers: { 'content-type': 'application/xml; charset=utf-8', 'cache-control': 'public, max-age=3600' } },
  )
}

export const Route = createFileRoute('/sitemap.xml')({
  server: { handlers: { GET: handler } },
})