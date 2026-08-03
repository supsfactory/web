import { createFileRoute } from '@tanstack/react-router'
import { OG_IMAGE } from '@/features/seo/seo'
import { isLocale } from '@/features/i18n/locale'
import { AfarerCatchAll, afarerServerLoader } from '@/features/content/catchall'

/**
 * Catch-all route for the ported afarer content site.
 *
 * Serves every prefix-less and locale-prefixed URL (`/factory`, `/zh/factory`,
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
    const path = stripLocalePrefix(`/${splat}`.replace(/\/+$/, '') || '/')
    return afarerServerLoader({ data: path })
  },
  head: ({ loaderData }) => {
    if (!loaderData) return {}
    const { origin, path, title, description } = loaderData
    const canonical = `${origin}${path}`
    return {
      meta: [
        { title },
        { name: 'description', content: description },
        { property: 'og:title', content: title },
        { property: 'og:description', content: description },
        { property: 'og:url', content: canonical },
        { property: 'og:image', content: loaderData.kind === 'page' ? OG_IMAGE : ((loaderData as { image?: string }).image ?? OG_IMAGE) },
        { name: 'twitter:card', content: 'summary_large_image' },
      ],
      links: [{ rel: 'canonical', href: canonical }],
    }
  },
  component: CatchAll,
})

function CatchAll() {
  const data = Route.useLoaderData()
  if (!data) return null
  return <AfarerCatchAll data={data} />
}