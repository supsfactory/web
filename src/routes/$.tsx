import { createFileRoute } from '@tanstack/react-router'
import { OG_IMAGE } from '@/features/seo/seo'
import { isLocale } from '@/features/i18n/locale'
import { AfarerCatchAll, afarerServerLoader } from '@/features/content/catchall'

/**
 * Catch-all route for the ported afarer content site.
 *
 * Serves every prefix-less and locale-prefixed URL (`/factory`, `/es/factory`,
 * `/news/...`) by stripping a leading valid locale segment and resolving the
 * rest against the afarer page registry. Content is English-only, so all
 * locales render the same pages. Unknown paths throw notFound().
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
    const path = stripLocalePrefix(raw)
    return { ...(await afarerServerLoader({ data: path })), localized }
  },
  head: ({ loaderData }) => {
    if (!loaderData) return {}
    const { origin, path, title, description } = loaderData
    const canonical = `${origin}${path}`
    const image = loaderData.kind === 'page' ? OG_IMAGE : ((loaderData as { image?: string }).image ?? OG_IMAGE)
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
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: title },
      { name: 'twitter:description', content: description },
      { name: 'twitter:image', content: image },
    ]
    // /es/* afarer pages render the same English content as their en twin
    // (canonical → en). Noindex the duplicate so only the en page ranks.
    if (loaderData.localized) {
      meta.push({ name: 'robots', content: 'noindex, follow' })
    }
    return { meta, links: [{ rel: 'canonical', href: canonical }] }
  },
  component: CatchAll,
})

function CatchAll() {
  const data = Route.useLoaderData()
  if (!data) return null
  return <AfarerCatchAll data={data} />
}