import { createFileRoute } from '@tanstack/react-router'
import { env } from '@/lib/env'
import { buildSitemap } from '@/features/seo/seo'
import { getAfarerProducts, getTechArticles, getCaseUses } from '@/features/content/loader'

// Product / technology / case-study detail pages (English-only).
const handler = () => {
  const origin = new URL(env.BETTER_AUTH_URL).origin
  const paths = [
    ...getAfarerProducts().map((p) => ({ loc: `/products/${p.slug}`, lastmod: '2026-06-01' })),
    ...getTechArticles().map((p) => ({ loc: `/technology/${p.slug}`, lastmod: '2026-06-01' })),
    ...getCaseUses().map((p) => ({ loc: `/evidence/case-studies/${p.slug}`, lastmod: '2026-06-01' })),
  ]
  return new Response(buildSitemap(origin, paths, { locale: 'none' }), {
    headers: { 'content-type': 'application/xml; charset=utf-8' },
  })
}

export const Route = createFileRoute('/sitemap-products.xml')({
  server: { handlers: { GET: handler } },
})
