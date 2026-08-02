import { createFileRoute, getRouteApi } from '@tanstack/react-router'
import { localeHead } from '@/features/seo/seo'
import { getOrigin } from '@/features/seo/seo.fns'
import type { Locale } from '@/features/i18n/locale'
import { useTranslation } from '@/features/i18n/provider'
import { getLanding } from '@/features/site/landings'
import { SiteNav } from '@/components/marketing/site-nav'
import { LandingPage } from '@/components/marketing/landing-page'
import { Footer } from '@/components/marketing/footer'

const rootRoute = getRouteApi('__root__')

export const Route = createFileRoute('/{-$locale}/sup-startup-brands')({
  loader: async () => ({ origin: await getOrigin() }),
  head: ({ loaderData, params }) => {
    const origin = loaderData?.origin ?? ''
    const locale = ((params as { locale?: string }).locale ?? 'en') as Locale
    const landing = getLanding(locale, 'sup-startup-brands')
    const { meta, links } = localeHead({
      origin,
      locale,
      path: '/sup-startup-brands',
      title: landing?.metaTitle ?? 'Start a SUP Brand',
      description: landing?.metaDescription ?? '',
    })
    return { meta, links }
  },
  component: SupStartupBrands,
})

function SupStartupBrands() {
  const { theme, user } = rootRoute.useLoaderData()
  const { locale } = useTranslation()
  const landing = getLanding(locale, 'sup-startup-brands')
  if (!landing) return null

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteNav theme={theme} loggedIn={!!user} />
      <LandingPage landing={landing} />
      <Footer theme={theme} />
    </div>
  )
}
