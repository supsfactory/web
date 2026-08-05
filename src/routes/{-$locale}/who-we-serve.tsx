import { createFileRoute, getRouteApi } from '@tanstack/react-router'
import { localeHead } from '@/features/seo/seo'
import { getOrigin } from '@/features/seo/seo.fns'
import type { Locale } from '@/features/i18n/locale'
import { useTranslation } from '@/features/i18n/provider'
import { pick, servePage } from '@/features/site/content'
import { SiteNav } from '@/components/marketing/site-nav'
import { PageHero } from '@/components/marketing/section-head'
import { WhoWeServe } from '@/components/marketing/who-we-serve'
import { CtaBand } from '@/components/marketing/cta'
import { Footer } from '@/components/marketing/footer'

const rootRoute = getRouteApi('__root__')

export const Route = createFileRoute('/{-$locale}/who-we-serve')({
  loader: async () => ({ origin: await getOrigin() }),
  head: ({ loaderData, params }) => {
    const origin = loaderData?.origin ?? ''
    const locale = ((params as { locale?: string }).locale ?? 'en') as Locale
    const { meta, links } = localeHead({
      origin,
      locale,
      path: '/who-we-serve',
      title: locale === 'es' ? 'A quién servimos | Startups, resorts y clubes | SUPsfactory' : 'Who We Serve | Startups, Resorts & Clubs | SUPsfactory',
      description:
        locale === 'es'
          ? 'SUPsfactory sirve a nuevas marcas, resorts, clubes y escuelas con fabricación personalizada para cada modelo de negocio.'
          : 'SUPsfactory serves new SUP brands, resorts, clubs and schools with custom manufacturing built around each business model.',
    })
    return { meta, links }
  },
  component: ServePage,
})

function ServePage() {
  const { theme, user } = rootRoute.useLoaderData()
  const { locale } = useTranslation()
  const c = pick(servePage, locale)

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteNav theme={theme} loggedIn={!!user} />
      <PageHero kicker={c.kicker} title={c.title} sub={c.sub} />
      <WhoWeServe />
      <CtaBand />
      <Footer theme={theme} />
    </div>
  )
}
