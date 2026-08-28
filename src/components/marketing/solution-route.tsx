import { useLoaderData } from '@tanstack/react-router'
import { localeHead } from '@/features/seo/seo'
import { getOrigin } from '@/features/seo/seo.fns'
import { isLocale, defaultLocale, type Locale } from '@/features/i18n/locale'
import type { SolutionPageData } from '@/product/solution-pages'
import { SolutionPage } from './solution-page'
import { MarketingShell } from './shell'

/**
 * Shared route factory for the Solutions system pages. The canonical URL of a
 * page comes from solutionPath(slug) — the flagship custom-SUP page lives at
 * /custom-sup-development (keyword-first URL), the rest under /solutions/*.
 * The page data is resolved in the loader via a dynamic import so the
 * solution-pages module stays out of the eager client bundle.
 */
export function solutionRoute(slug: string) {
  return {
    loader: async ({ params }: { params?: unknown }): Promise<SolutionRouteData> => {
      const raw = (params as Record<string, string | undefined>)?.locale
      const locale: Locale = isLocale(raw) ? raw : defaultLocale
      const origin = await getOrigin()
      const { getSolutionPage, solutionPath } = await import('@/product/solution-pages')
      return { origin, path: solutionPath(slug), page: getSolutionPage(locale, slug) ?? null }
    },
    head: ({ loaderData, params }: { loaderData?: SolutionRouteData | null; params?: unknown }) => {
      const origin = loaderData?.origin ?? ''
      const raw = (params as Record<string, string | undefined>)?.locale
      const locale: Locale = isLocale(raw) ? raw : defaultLocale
      const page = loaderData?.page
      const { meta, links } = localeHead({
        origin,
        locale,
        path: loaderData?.path ?? '',
        title: page?.metaTitle ?? slug,
        description: page?.metaDescription ?? '',
      })
      return { meta, links }
    },
    component: function SolutionPageRoute() {
      const data = useLoaderData({ strict: false }) as SolutionRouteData | undefined
      if (!data?.page) return null
      return (
        <MarketingShell>
          <SolutionPage page={data.page} path={data.path} />
        </MarketingShell>
      )
    },
  }
}

interface SolutionRouteData {
  origin: string
  path: string
  page: SolutionPageData | null
}