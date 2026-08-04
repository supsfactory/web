import { createFileRoute } from '@tanstack/react-router'
import { env } from '@/lib/env'
import { buildLocaleSitemap, PUBLIC_PATHS } from '@/features/seo/seo'

// Spanish marketing pages (hreflang-linked to the English pages file).
const handler = () =>
  new Response(buildLocaleSitemap(new URL(env.BETTER_AUTH_URL).origin, 'es', PUBLIC_PATHS), {
    headers: { 'content-type': 'application/xml; charset=utf-8' },
  })

export const Route = createFileRoute('/sitemap-es.xml')({
  server: { handlers: { GET: handler } },
})
