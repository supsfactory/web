import { createFileRoute } from '@tanstack/react-router'
import { locales } from '@/features/i18n/locale'
import { buildContentIndex, type SearchEntry } from '@/features/site/search'
import { getAfarerPages } from '@/features/content/loader'
import { EDGE_REDIRECTS } from '@/features/seo/edge-gate'

// `/search-index.json` — full-site search index for the header search dialog.
// Marketing deep content (solutions/guides/projects) is indexed per locale;
// afarer content pages are English-only, so they are single-locale entries.
const handler = () => {
  const entries: SearchEntry[] = locales.flatMap((l) => buildContentIndex(l))
  for (const p of getAfarerPages()) {
    if (p.path in EDGE_REDIRECTS) continue
    const seo = p.content.seo as { title?: string; description?: string } | undefined
    const title = seo?.title ?? p.label
    const excerpt = seo?.description ?? ''
    entries.push({
      url: p.path,
      title: title.replace(/[|–—-].*$/, '').trim() || p.label,
      excerpt,
      type: 'page',
      locale: 'en',
    })
  }
  return new Response(JSON.stringify(entries), {
    headers: { 'content-type': 'application/json; charset=utf-8', 'cache-control': 'public, max-age=3600' },
  })
}

export const Route = createFileRoute('/search-index.json')({
  server: { handlers: { GET: handler } },
})
