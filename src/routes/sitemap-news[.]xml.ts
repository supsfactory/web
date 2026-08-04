import { createFileRoute } from '@tanstack/react-router'
import { env } from '@/lib/env'
import { buildSitemap } from '@/features/seo/seo'
import { getNewsPosts } from '@/features/content/loader'

// News posts with real lastmod (post date).
const handler = () => {
  const origin = new URL(env.BETTER_AUTH_URL).origin
  const paths = getNewsPosts().map((p) => ({ loc: `/news/${p.slug}`, lastmod: p.date.slice(0, 10) }))
  return new Response(buildSitemap(origin, paths), {
    headers: { 'content-type': 'application/xml; charset=utf-8' },
  })
}

export const Route = createFileRoute('/sitemap-news.xml')({
  server: { handlers: { GET: handler } },
})
