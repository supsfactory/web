import { createFileRoute } from '@tanstack/react-router'
import { env } from '@/lib/env'
import { buildLocaleSitemap, PUBLIC_PATHS } from '@/features/seo/seo'
import { EDGE_REDIRECTS } from '@/features/seo/edge-gate'
import { LEGACY_REDIRECTS } from '@/features/seo/legacy-redirects'
import { getAfarerEsPaths } from '@/features/content/loader'

// Spanish marketing pages (hreflang-linked to the English pages file) plus the
// afarer pages that ship a real Spanish variant.
const handler = () => {
  const origin = new URL(env.BETTER_AUTH_URL).origin
  const afarerEs = getAfarerEsPaths()
    .filter((p) => !(p in EDGE_REDIRECTS) && !(p in LEGACY_REDIRECTS))
    .map((p) => ({ path: p }))
  return new Response(buildLocaleSitemap(origin, 'es', [...PUBLIC_PATHS, ...afarerEs]), {
    headers: { 'content-type': 'application/xml; charset=utf-8' },
  })
}

export const Route = createFileRoute('/sitemap-es.xml')({
  server: { handlers: { GET: handler } },
})
