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
 *
 * The factory serves the EN page only (locale hardcoded below); the `/es/*`
 * twins of these paths are served by the `/$` catch-all, which is fully
 * locale-aware.
 */
export function afarerSingleRoute(path: string) {
  return {
    loader: async (): Promise<CatchAllData> => afarerServerLoader({ data: { path, locale: 'en' } }),
    head: ({ loaderData }: { loaderData?: CatchAllData }) => {
      if (!loaderData) return {}
      const { origin, title, description } = loaderData
      const canonical = `${origin}${path}`
      const image = loaderData.kind === 'page' ? OG_IMAGE : ((loaderData as { image?: string }).image ?? OG_IMAGE)
      // Product detail images are AVIF for the <img>; social crawlers lag on
      // AVIF support, so point og:image at the sibling JPG (kept alongside).
      const absImage = image.startsWith('http') ? image : `${origin}${image.replace(/\.avif$/, '.jpg')}`
      const links: { rel: string; href: string; hreflang?: string }[] = [{ rel: 'canonical', href: canonical }]
      links.push({ rel: 'alternate', hreflang: 'en-US', href: canonical })
      // Link the Spanish twin (when it exists) so the es page feeds back the
      // en page's signals too.
      if (loaderData.esTranslated) {
        links.push({ rel: 'alternate', hreflang: 'es-ES', href: `${origin}/es${path}` })
        links.push({ rel: 'alternate', hreflang: 'x-default', href: canonical })
      }
      return {
        meta: [
          { title },
          { name: 'description', content: description },
          { property: 'og:site_name', content: 'SUPsfactory' },
          { property: 'og:title', content: title },
          { property: 'og:description', content: description },
          { property: 'og:url', content: canonical },
          { property: 'og:locale', content: 'en_US' },
          { property: 'og:image', content: absImage },
          ...(image === OG_IMAGE
            ? [
                { property: 'og:image:width', content: '1200' },
                { property: 'og:image:height', content: '630' },
              ]
            : []),
          { property: 'og:image:type', content: absImage.endsWith('.webp') ? 'image/webp' : 'image/jpeg' },
          { property: 'og:image:alt', content: `SUPsfactory — ${title.replace(/\s+\|.*$/, '')}` },
          { name: 'twitter:card', content: 'summary_large_image' },
          { name: 'twitter:title', content: title },
          { name: 'twitter:description', content: description },
          { name: 'twitter:image', content: absImage },
          { name: 'twitter:image:alt', content: `SUPsfactory — ${title.replace(/\s+\|.*$/, '')}` },
        ],
        links,
      }
    },
  }
}