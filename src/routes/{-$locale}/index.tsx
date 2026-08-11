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
          ? 'Fábrica de fabricación de SUP personalizados | Fabricante OEM ODM de SUP'
          : 'Custom SUP Manufacturing Factory | OEM ODM SUP Manufacturer',
      description:
        locale === 'es'
          ? 'Supsfactory es una fábrica profesional de fabricación de SUP a medida que ayuda a marcas globales a desarrollar y producir tablas hinchables mediante soluciones OEM y ODM, desde el prototipo hasta la producción en masa.'
          : 'Supsfactory is a professional custom SUP manufacturing factory helping global brands develop and produce inflatable SUP products through OEM and ODM solutions, from prototype to mass production.',
      ogTitle:
        locale === 'es'
          ? 'SUPsfactory — Fábrica de fabricación de SUP personalizados para marcas globales'
          : 'SUPsfactory — Custom SUP Manufacturing Factory for Global Brands',
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
      <GuidesSection />
      <FaqSection />
      <JsonLd data={faqLd(pick(faq, locale).items, locale)} />
      <CtaBand />
      <Footer theme={theme} />
    </div>
  )
}