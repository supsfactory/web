import { createFileRoute, getRouteApi } from '@tanstack/react-router'
import { localeHead } from '@/features/seo/seo'
import { getOrigin } from '@/features/seo/seo.fns'
import type { Locale } from '@/features/i18n/locale'
import { useTranslation } from '@/features/i18n/provider'
import { pick, strip } from '@/features/site/content'
import { SiteNav } from '@/components/marketing/site-nav'
import { Hero } from '@/components/marketing/hero'
import { WhyUs } from '@/components/marketing/why-us'
import { WhoWeServe } from '@/components/marketing/who-we-serve'
import { StudioSection } from '@/components/marketing/studio-section'
import { SolutionsSection } from '@/components/marketing/solutions-section'
import { ProductsSection } from '@/components/marketing/products-section'
import { HowItWorks } from '@/components/marketing/how-it-works'
import { GallerySection } from '@/components/marketing/gallery-section'
import { FaqSection } from '@/components/marketing/faq'
import { CtaBand } from '@/components/marketing/cta'
import { Footer } from '@/components/marketing/footer'

const rootRoute = getRouteApi('__root__')

export const Route = createFileRoute('/{-$locale}/')({
  loader: async () => ({ origin: await getOrigin() }),
  head: ({ loaderData, params }) => {
    const origin = loaderData?.origin ?? ''
    const locale = ((params as { locale?: string }).locale ?? 'en') as Locale
    const { meta, links } = localeHead({
      origin,
      locale,
      path: '/',
      title: 'SUPsfactory — Launch Your Own SUP Brand | Custom SUP Manufacturing',
      description:
        locale === 'zh'
          ? 'SUPsfactory——定制 SUP 制造伙伴。创建你自己的 SUP 品牌，无需自建工厂。50 片起订、全面定制与专业设计支持，服务初创品牌、俱乐部、度假村与企业。'
          : 'Create your own SUP brand without building your own factory. Custom SUP manufacturing for startups, clubs, resorts and businesses — low MOQ from 50pcs, full customization and design support.',
    })
    return { meta, links }
  },
  component: Home,
})

function Home() {
  const { theme, user } = rootRoute.useLoaderData()
  const { locale } = useTranslation()
  const items = pick(strip, locale)

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteNav theme={theme} loggedIn={!!user} />
      <Hero />

      {/* capability strip */}
      <div className="border-b border-border bg-bg-alt">
        <ul className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-7 gap-y-2 px-5 py-4 md:px-7">
          {items.map((item, i) => (
            <li key={item} className="flex items-center gap-7">
              {i > 0 && <span className="hidden h-1.5 w-1.5 rounded-full bg-aqua/60 sm:block" aria-hidden="true" />}
              <span className="text-[12.5px] font-bold uppercase tracking-[0.14em] text-fg-2">{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <WhyUs />
      <WhoWeServe />
      <StudioSection />
      <SolutionsSection />
      <ProductsSection limit={4} />
      <HowItWorks />
      <GallerySection />
      <FaqSection />
      <CtaBand />
      <Footer theme={theme} />
    </div>
  )
}
