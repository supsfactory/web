import { createFileRoute, redirect } from '@tanstack/react-router'
import { OG_IMAGE, localeHead } from '@/features/seo/seo'
import { isLocale, defaultLocale, localizePath, type Locale } from '@/features/i18n/locale'
import { AfarerCatchAll, afarerServerLoader } from '@/features/content/catchall'
import { isAfarerPageTranslated } from '@/features/content/loader'

/**
 * Catch-all route for the ported afarer content site.
 *
 * Serves every prefix-less and locale-prefixed URL (`/factory`, `/es/factory`,
 * `/news/...`) by stripping a leading valid locale segment and resolving the
 * rest against the afarer page registry. Pages with a Spanish variant
 * (`{slug}.es.yaml`) render translated content with a proper es head; pages
 * without one keep the English content and are noindexed as duplicates.
 * Unknown paths throw notFound().
 */
const stripLocalePrefix = (path: string): string => {
  const segments = path.split('/').filter(Boolean)
  if (segments.length > 0 && isLocale(segments[0])) return `/${segments.slice(1).join('/')}`
  return path
}

export const Route = createFileRoute('/$')({
  loader: async ({ params }) => {
    const splat = params._splat ?? ''
    const raw = `/${splat}`.replace(/\/+$/, '') || '/'
    const segments = raw.split('/').filter(Boolean)
    const localized = segments.length > 0 && isLocale(segments[0])
    const locale = (localized ? segments[0] : defaultLocale) as Locale
    const path = stripLocalePrefix(raw)
    // '/en/...' → permanent redirect to the canonical no-prefix URL. The
    // {-$locale} group enforces this only for its own template routes; afarer
    // pages / products / news land here, so the catch-all must apply the same
    // rule (otherwise /en/factory would 200-render a noindexed duplicate).
    if (localized && locale === defaultLocale) {
      throw redirect({ href: path, statusCode: 301 })
    }
    return { ...(await afarerServerLoader({ data: { path, locale } })), localized }
  },
  head: ({ loaderData }) => {
    if (!loaderData) return {}
    const { origin, path, title, description, locale, translated } = loaderData
    const canonical = `${origin}${path}`
    const image = loaderData.kind === 'page' ? OG_IMAGE : ((loaderData as { image?: string }).image ?? OG_IMAGE)
    // Translated /es/* pages get a real Spanish head (canonical → /es, es_ES
    // OG locale, hreflang alternates) and are indexable.
    if (loaderData.localized && translated) {
      return localeHead({ origin, locale, path, title, description })
    }
    const meta: Record<string, string>[] = [
      { title },
      { name: 'description', content: description },
      { property: 'og:site_name', content: 'SUPsfactory' },
      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
      { property: 'og:url', content: canonical },
      { property: 'og:locale', content: 'en_US' },
      { property: 'og:type', content: loaderData.kind === 'post' ? 'article' : loaderData.kind === 'product' ? 'product' : 'website' },
      { property: 'og:image', content: image },
      { property: 'og:image:width', content: '1200' },
      { property: 'og:image:height', content: '630' },
      { property: 'og:image:type', content: 'image/webp' },
      { property: 'og:image:alt', content: `SUPsfactory — ${title.replace(/\s+\|.*$/, '')}` },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: title },
      { name: 'twitter:description', content: description },
      { name: 'twitter:image', content: image },
      { name: 'twitter:image:alt', content: `SUPsfactory — ${title.replace(/\s+\|.*$/, '')}` },
    ]
    // /es/* afarer pages without a translation render the same English content
    // as their en twin (canonical → en). Noindex the duplicate so only the en
    // page ranks.
    if (loaderData.localized) {
      meta.push({ name: 'robots', content: 'noindex, follow' })
    }
    // en twin of a page with a real /es translation: emit the es alternate so
    // hreflang is bidirectional (sitemap already cross-links; the page head
    // must mirror it — Google requires the return tag on both sides).
    const hasEsTwin = !loaderData.localized && isAfarerPageTranslated(loaderData.path, 'es')
    const links: Record<string, string>[] = [{ rel: 'canonical', href: canonical }]
    if (hasEsTwin) {
      links.push({ rel: 'alternate', hreflang: 'es-ES', href: `${origin}${localizePath('es', loaderData.path)}` })
    }
    return { meta, links }
  },
  component: CatchAll,
})

function CatchAll() {
  const data = Route.useLoaderData()
  if (!data) return null
  return <AfarerCatchAll data={data} />
}