import { createFileRoute } from '@tanstack/react-router'
import { locales } from '@/features/i18n/locale'
import { buildContentIndex, type SearchEntry } from '@/features/site/search'
import { getAfarerPage, getAfarerPages, isAfarerPageTranslated, getSiteFaqs } from '@/features/content/loader'
import { EDGE_REDIRECTS } from '@/features/seo/edge-gate'

// `/search-index.json` — full-site search index for the header search dialog.
// Marketing deep content (solutions/guides/projects) is indexed per locale;
// afarer content pages are indexed per locale too — pages with a Spanish
// variant (`{slug}.es.yaml`) also get an es entry at their /es URL.
const handler = () => {
  const entries: SearchEntry[] = locales.flatMap((l) => buildContentIndex(l))
  for (const p of getAfarerPages()) {
    if (p.path in EDGE_REDIRECTS) continue
    const seo = p.content.seo as { title?: string; description?: string } | undefined
    entries.push({
      url: p.path,
      title: (seo?.title ?? '').replace(/[|–—-].*$/, '').trim() || p.label,
      excerpt: seo?.description ?? '',
      type: 'page',
      locale: 'en',
    })
    if (isAfarerPageTranslated(p.path, 'es')) {
      const es = getAfarerPage(p.path, 'es')!
      const esMeta = es.content.meta as { title?: string; description?: string } | undefined
      const esSeo = es.content.seo as { headline?: string; description?: string } | undefined
      const esTitle = (esMeta?.title ?? esSeo?.headline ?? '').replace(/[|–—-].*$/, '').trim() || p.label
      entries.push({
        url: `/es${p.path}`,
        title: esTitle,
        excerpt: esMeta?.description ?? esSeo?.description ?? '',
        type: 'page',
        locale: 'es',
      })
    }
  }
  // /faq lives outside the afarer registry (site-level faqs.yaml) — add it per
  // locale so both the en and es variants are searchable.
  entries.push({
    url: '/faq',
    title: 'FAQ',
    excerpt: 'Frequently asked questions about inflatable SUP OEM/ODM manufacturing — materials, certifications, minimum order quantities and wholesale logistics.',
    type: 'page',
    locale: 'en',
  })
  if (isAfarerPageTranslated('/faq', 'es') && getSiteFaqs('es').length > 0) {
    entries.push({
      url: '/es/faq',
      title: 'Preguntas frecuentes',
      excerpt: 'Preguntas frecuentes sobre fabricación OEM/ODM de SUP hinchables — materiales, certificaciones, cantidades mínimas de pedido y logística al por mayor.',
      type: 'page',
      locale: 'es',
    })
  }
  return new Response(JSON.stringify(entries), {
    headers: { 'content-type': 'application/json; charset=utf-8', 'cache-control': 'public, max-age=3600' },
  })
}

export const Route = createFileRoute('/search-index.json')({
  server: { handlers: { GET: handler } },
})
