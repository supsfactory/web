import { createFileRoute, getRouteApi } from '@tanstack/react-router'
import { localeHead } from '@/features/seo/seo'
import { getOrigin } from '@/features/seo/seo.fns'
import type { Locale } from '@/features/i18n/locale'
import { useTranslation } from '@/features/i18n/provider'
import { pick, faq, videoShowcase } from '@/features/site/content'
import { JsonLd, faqLd } from '@/features/seo/jsonld'
import { SiteNav } from '@/components/marketing/site-nav'
import { Hero } from '@/components/marketing/hero'
import { TrustBar } from '@/components/marketing/trust-bar'
import { RoleBoundary } from '@/components/marketing/role-boundary'
import { ValueProp } from '@/components/marketing/value-prop'
import { SolveSection } from '@/components/marketing/solve-section'
import { PlantCapability } from '@/components/marketing/plant-capability'
import { QualitySteps } from '@/components/marketing/quality-steps'
import { CommercialTerms } from '@/components/marketing/commercial-terms'
import { HowItWorks } from '@/components/marketing/how-it-works'
import { VideoShowcase } from '@/components/marketing/video-showcase'
import { WhyUs } from '@/components/marketing/why-us'
import { PlatformsSection } from '@/components/marketing/platforms-section'
import { StudioSection } from '@/components/marketing/studio-section'
import { SeriesSection } from '@/components/marketing/series-section'
import { GallerySection } from '@/components/marketing/gallery-section'
import { GuidesSection } from '@/components/marketing/guides-section'
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
          ? 'Fabricante de tablas SUP personalizadas | Socio OEM ODM para marcas globales'
          : 'Custom SUP Board Manufacturer | OEM/ODM Partner for Global Brands',
      description:
        locale === 'es'
          ? 'Supsfactory es un fabricante de tablas SUP a medida y socio OEM/ODM para marcas, distribuidores y organizaciones. Del desarrollo de prototipos a la producción en masa y la entrega global.'
          : 'Supsfactory is a custom SUP board manufacturer and OEM/ODM manufacturing partner for global brands, distributors and water sports organizations. From prototype development to mass production and global delivery.',
      ogTitle:
        locale === 'es'
          ? 'SUPsfactory — Fabricante de tablas SUP personalizadas y socio OEM/ODM'
          : 'SUPsfactory — Custom SUP Board Manufacturer & OEM/ODM Partner',
    })
    return { meta, links }
  },
  component: Home,
})

function Home() {
  const { theme, user } = rootRoute.useLoaderData()
  const { locale } = useTranslation()

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteNav theme={theme} loggedIn={!!user} />
      <Hero />
      <TrustBar />
      <RoleBoundary />
      <ValueProp />
      <SolveSection />
      <VideoShowcase
        video="/assets/videos/2026/oem-brand-launch.mp4"
        poster="/assets/videos/2026/oem-brand-launch.jpg"
        {...pick(videoShowcase, locale).launch}
      />
      <PlantCapability />
      <QualitySteps />
      <CommercialTerms />
      <HowItWorks />
      <PlatformsSection />
      <StudioSection />
      <SeriesSection />
      <WhyUs />
      <GallerySection />
      <GuidesSection />
      <FaqSection />
      <JsonLd data={faqLd(pick(faq, locale).items, locale)} />
      <CtaBand />
      <Footer theme={theme} />
    </div>
  )
}