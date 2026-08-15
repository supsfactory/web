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
import { WhoWeServe } from '@/components/marketing/who-we-serve'
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
import { ProjectsShowcase } from '@/components/marketing/projects-showcase'
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
          ? 'Fabricante de tablas SUP hinchables a medida | OEM/ODM para marcas'
          : 'Custom Inflatable SUP Manufacturing | OEM/ODM for Brands & Distributors',
      description:
        locale === 'es'
          ? 'Supsfactory fabrica tablas SUP hinchables de marca propia para marcas, distribuidores y programas comerciales: especificación, muestras, control de calidad, packaging y producción lista para exportar.'
          : 'SUPsfactory builds custom inflatable SUP boards for brands, distributors and commercial programs: specification, samples, quality control, packaging and export-ready production.',
      ogTitle:
        locale === 'es'
          ? 'SUPsfactory — Fabricante de tablas SUP hinchables a medida'
          : 'SUPsfactory — Custom Inflatable SUP Manufacturing',
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
      <WhoWeServe />
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
      <ProjectsShowcase />
      <FaqSection />
      <JsonLd data={faqLd(pick(faq, locale).items, locale)} />
      <CtaBand />
      <Footer theme={theme} />
    </div>
  )
}