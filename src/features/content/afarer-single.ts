import { OG_IMAGE } from '@/features/seo/seo'
import { afarerServerLoader } from './catchall'
import type { CatchAllData } from './catchall'

/**
 * Shared route options for the static single-segment afarer pages.
 *
 * These pages can't ride the root `/$` catch-all: the optional `{-$locale}`
 * group terminates on a bare segment before the splat is ever considered, so a
 * dedicated static route (which outranks the optional group) is required.
 * Each generated route file is a 5-line wrapper around this factory.
 */
export function afarerSingleRoute(path: string) {
  return {
    loader: async (): Promise<CatchAllData> => afarerServerLoader({ data: path }),
    head: ({ loaderData }: { loaderData?: CatchAllData }) => {
      if (!loaderData) return {}
      const { origin, title, description } = loaderData
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
  }
}