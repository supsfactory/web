import { localeHead } from '@/features/seo/seo'
import { getOrigin } from '@/features/seo/seo.fns'
import type { Locale } from '@/features/i18n/locale'
import { useTranslation } from '@/features/i18n/provider'
import { getSolutionPage, solutionPath } from '@/features/site/solution-pages'
import { SolutionPage } from './solution-page'

/**
 * Shared route factory for the Solutions system pages. The canonical URL of a
 * page comes from solutionPath(slug) — the flagship custom-SUP page lives at
 * /custom-sup-development (keyword-first URL), the rest under /solutions/*.
 */
export function solutionRoute(slug: string) {
  const path = solutionPath(slug)
  return {
    loader: async () => ({ origin: await getOrigin() }),
    head: ({ loaderData, params }: { loaderData?: { origin: string } | null; params?: unknown }) => {
      const origin = loaderData?.origin ?? ''
      const locale = ((params as { locale?: string } | undefined)?.locale ?? 'en') as Locale
      const page = getSolutionPage(locale, slug)
      const { meta, links } = localeHead({
        origin,
        locale,
        path,
        title: page?.metaTitle ?? slug,
        description: page?.metaDescription ?? '',
      })
      return { meta, links }
    },
    component: function SolutionPageRoute() {
      const { locale } = useTranslation()
      const page = getSolutionPage(locale, slug)
      if (!page) return null
      return <SolutionPage page={page} />
    },
  }
}
