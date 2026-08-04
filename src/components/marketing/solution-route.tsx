import { localeHead } from '@/features/seo/seo'
import { getOrigin } from '@/features/seo/seo.fns'
import type { Locale } from '@/features/i18n/locale'
import { useTranslation } from '@/features/i18n/provider'
import { getSolutionPage } from '@/features/site/solution-pages'
import { SolutionPage } from './solution-page'

/**
 * Shared route factory for the Solutions system pages
 * (/solutions/custom-sup, /solutions/private-label-sup, …).
 */
export function solutionRoute(slug: string) {
  return {
    loader: async () => ({ origin: await getOrigin() }),
    head: ({ loaderData, params }: { loaderData?: { origin: string } | null; params?: unknown }) => {
      const origin = loaderData?.origin ?? ''
      const locale = ((params as { locale?: string } | undefined)?.locale ?? 'en') as Locale
      const page = getSolutionPage(locale, slug)
      const { meta, links } = localeHead({
        origin,
        locale,
        path: `/solutions/${slug}`,
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
