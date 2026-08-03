import { createFileRoute } from '@tanstack/react-router'
import { env } from '@/lib/env'
import { buildSitemap } from '@/features/seo/seo'
import { source } from '@/features/docs/source'
import {
  getAfarerPublicPaths,
  getAfarerProducts,
  getNewsPosts,
  getTechArticles,
  getCaseUses,
} from '@/features/content/loader'
import { GUIDES } from '@/features/content/guide-content'

const handler = () => {
  const docsPaths = source.getPages().map((p) => p.url)
  const afarerPaths = getAfarerPublicPaths()
  const articlePaths = [
    ...getAfarerProducts().map((p) => `/products/${p.slug}`),
    ...getNewsPosts().map((p) => `/news/${p.slug}`),
    ...getTechArticles().map((p) => `/technology/${p.slug}`),
    ...getCaseUses().map((p) => `/evidence/case-studies/${p.slug}`),
    ...GUIDES.map((g) => `/guides/${g.slug}`),
    '/evidence/case-studies',
    '/research',
  ]
  // afarer pages are English-only: single-locale entries (no hreflang alternates).
  return new Response(buildSitemap(new URL(env.BETTER_AUTH_URL).origin, [...docsPaths, ...afarerPaths, ...articlePaths]), {
    headers: { 'content-type': 'application/xml; charset=utf-8' },
  })
}

export const Route = createFileRoute('/sitemap.xml')({
  server: { handlers: { GET: handler } },
})
