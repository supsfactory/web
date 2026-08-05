import { createFileRoute, getRouteApi } from '@tanstack/react-router'
import { localeHead } from '@/features/seo/seo'
import { getOrigin } from '@/features/seo/seo.fns'
import type { Locale } from '@/features/i18n/locale'
import { useTranslation } from '@/features/i18n/provider'
import { pick, strip, faq } from '@/features/site/content'
import { JsonLd, faqLd } from '@/features/seo/jsonld'
import { SiteNav } from '@/components/marketing/site-nav'
import { Hero } from '@/components/marketing/hero'
import { WhoWeServe } from '@/components/marketing/who-we-serve'
import { SolveSection } from '@/components/marketing/solve-section'
import { HowItWorks } from '@/components/marketing/how-it-works'
import { SolutionsSection } from '@/components/marketing/solutions-section'
import { WhyUs } from '@/components/marketing/why-us'
import { PlatformsSection } from '@/components/marketing/platforms-section'
import { StudioSection } from '@/components/marketing/studio-section'
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
      title:
        locale === 'es'
          ? 'Supsfactory | Fabricación y desarrollo de SUP personalizados'
          : 'Supsfactory | Custom SUP Product Development & Manufacturing',
      description:
        locale === 'es'
          ? 'Supsfactory convierte ideas de productos SUP en tablas terminadas: personalización, prototipos y fabricación OEM/ODM fiable.'
          : 'SUPsfactory turns SUP product ideas into finished boards — customization, prototyping and reliable OEM/ODM manufacturing support.',
      ogTitle: 'Turn Your SUP Product Ideas Into Reality | Supsfactory',
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

      <WhoWeServe />
      <SolveSection />
      <HowItWorks />
      <SolutionsSection />
      <WhyUs />
      <PlatformsSection />
      <StudioSection />
      <GallerySection />
      <FaqSection />
      <JsonLd data={faqLd(faq[locale].items)} />
      <CtaBand />
      <Footer theme={theme} />
    </div>
  )
}
