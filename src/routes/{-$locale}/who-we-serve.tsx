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
      title: locale === 'zh' ? '客户群体 | 初创品牌、度假村、俱乐部、企业 — SUPsfactory' : 'Who We Serve | Startups, Resorts, Clubs & Businesses — SUPsfactory',
      description:
        locale === 'zh'
          ? 'SUPsfactory 服务新 SUP 品牌、度假村与酒店、俱乐部与学校、企业与活动——为每种水上业务定制生产方案。'
          : 'SUPsfactory serves new SUP brands, resorts & hotels, clubs & schools and corporate events — with custom manufacturing built around each business model.',
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
