import { createFileRoute, getRouteApi } from '@tanstack/react-router'
import { localeHead } from '@/features/seo/seo'
import { getOrigin } from '@/features/seo/seo.fns'
import type { Locale } from '@/features/i18n/locale'
import { useTranslation } from '@/features/i18n/provider'
import { pick, faq } from '@/features/site/content'
import { JsonLd, faqLd } from '@/features/seo/jsonld'
import { SiteNav } from '@/components/marketing/site-nav'
import { Hero } from '@/components/marketing/hero'
import { TrustBar } from '@/components/marketing/trust-bar'
import { RoleBoundary } from '@/components/marketing/role-boundary'
import { SolveSection } from '@/components/marketing/solve-section'
import { PlantCapability } from '@/components/marketing/plant-capability'
import { QualitySteps } from '@/components/marketing/quality-steps'
import { CommercialTerms } from '@/components/marketing/commercial-terms'
import { HowItWorks } from '@/components/marketing/how-it-works'
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
          ? 'Fabricante de SUP hinchables y fábrica OEM | SUPsfactory'
          : 'Inflatable SUP Manufacturer & OEM Factory | SUPsfactory',
      description:
        locale === 'es'
          ? 'Fabricante OEM/ODM de SUP hinchables en Qingdao, China. Planta de 12.000 m², certificada CE e ISO 9001, producción en 30–45 días y muestras en 15–20 días. Tu marca, nuestra fábrica.'
          : 'Inflatable SUP OEM/ODM manufacturer in Qingdao, China. 12,000 m² plant, CE & ISO 9001 certified, 30–45 day production, samples in 15–20 days. Your brand, our factory.',
      ogTitle:
        locale === 'es'
          ? 'SUPsfactory — Fabricante OEM y ODM de SUP hinchables en Qingdao, China'
          : 'SUPsfactory — Inflatable SUP OEM & ODM Manufacturer in Qingdao, China',
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
      <SolveSection />
      <PlantCapability />
      <QualitySteps />
      <CommercialTerms />
      <HowItWorks />
      <PlatformsSection />
      <StudioSection />
      <WhyUs />
      <GallerySection />
      <FaqSection />
      <JsonLd data={faqLd(pick(faq, locale).items)} />
      <CtaBand />
      <Footer theme={theme} />
    </div>
  )
}