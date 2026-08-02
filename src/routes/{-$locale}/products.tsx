import { createFileRoute, getRouteApi } from '@tanstack/react-router'
import { Check } from 'lucide-react'
import { localeHead } from '@/features/seo/seo'
import { getOrigin } from '@/features/seo/seo.fns'
import type { Locale } from '@/features/i18n/locale'
import { useTranslation } from '@/features/i18n/provider'
import { pick, productsPage } from '@/features/site/content'
import { SiteNav } from '@/components/marketing/site-nav'
import { PageHero } from '@/components/marketing/section-head'
import { ProductsSection } from '@/components/marketing/products-section'
import { CtaBand } from '@/components/marketing/cta'
import { Footer } from '@/components/marketing/footer'

const rootRoute = getRouteApi('__root__')

export const Route = createFileRoute('/{-$locale}/products')({
  loader: async () => ({ origin: await getOrigin() }),
  head: ({ loaderData, params }) => {
    const origin = loaderData?.origin ?? ''
    const locale = ((params as { locale?: string }).locale ?? 'en') as Locale
    const { meta, links } = localeHead({
      origin,
      locale,
      path: '/products',
      title: locale === 'zh' ? 'SUP 产品 | 十大可定制系列 — SUPsfactory' : 'SUP Products | 10 Customizable Series — SUPsfactory',
      description:
        locale === 'zh'
          ? '十款成熟 SUP 系列——从全能入门到设计师限定版，每一款都是可定制的制造平台，适合初创品牌、度假村、俱乐部与学校。'
          : 'Ten proven SUP series — from all-around classics to designer editions. Every model is a customizable manufacturing platform for startups, resorts, clubs and schools.',
    })
    return { meta, links }
  },
  component: ProductsPage,
})

function ProductsPage() {
  const { theme, user } = rootRoute.useLoaderData()
  const { locale } = useTranslation()
  const c = pick(productsPage, locale)

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteNav theme={theme} loggedIn={!!user} />
      <PageHero kicker={c.kicker} title={c.title} sub={c.sub} />

      <ProductsSection heading={null} />

      {/* everything is customizable */}
      <section className="border-t border-border bg-bg-alt">
        <div className="mx-auto max-w-6xl px-5 py-16 md:px-7 md:py-20">
          <h2 className="text-center font-display text-2xl font-extrabold tracking-tight md:text-3xl">{c.customTitle}</h2>
          <p className="mx-auto mt-3 max-w-xl text-center text-[14.5px] leading-relaxed text-fg-2">{c.customBody}</p>
          <ul className="mx-auto mt-8 grid max-w-3xl gap-3 sm:grid-cols-2">
            {c.customPoints.map((p) => (
              <li key={p} className="marine-card flex items-center gap-3 px-5 py-3.5">
                <Check size={16} className="shrink-0 text-primary" />
                <span className="text-[14px] font-medium">{p}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand />
      <Footer theme={theme} />
    </div>
  )
}
