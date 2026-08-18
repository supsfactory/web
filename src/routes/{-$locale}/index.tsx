import { createFileRoute, getRouteApi } from '@tanstack/react-router'
import { lazy, Suspense } from 'react'
import { localeHead } from '@/features/seo/seo'
import { getOrigin } from '@/features/seo/seo.fns'
import type { Locale } from '@/features/i18n/locale'
import { getDictionary, translate } from '@/features/i18n/locale'
import { useTranslation } from '@/features/i18n/provider'
import { pick, faq, videoShowcase } from '@/features/site/content'
import { JsonLd, faqLd } from '@/features/seo/jsonld'
import { SITE_NAME, BRAND_ASSETS_CDN } from '@/config'
import { SiteNav } from '@/components/marketing/site-nav'
import { Hero } from '@/components/marketing/hero'
import { TrustBar } from '@/components/marketing/trust-bar'
import { RoleBoundary } from '@/components/marketing/role-boundary'
import { WhoWeServe } from '@/components/marketing/who-we-serve'
import { ValueProp } from '@/components/marketing/value-prop'

const SolveSection = lazy(() => import('@/components/marketing/solve-section').then((m) => ({ default: m.SolveSection })))
const VideoShowcase = lazy(() => import('@/components/marketing/video-showcase').then((m) => ({ default: m.VideoShowcase })))
const PlantCapability = lazy(() => import('@/components/marketing/plant-capability').then((m) => ({ default: m.PlantCapability })))
const QualitySteps = lazy(() => import('@/components/marketing/quality-steps').then((m) => ({ default: m.QualitySteps })))
const CommercialTerms = lazy(() => import('@/components/marketing/commercial-terms').then((m) => ({ default: m.CommercialTerms })))
const HowItWorks = lazy(() => import('@/components/marketing/how-it-works').then((m) => ({ default: m.HowItWorks })))
const PlatformsSection = lazy(() => import('@/components/marketing/platforms-section').then((m) => ({ default: m.PlatformsSection })))
const StudioSection = lazy(() => import('@/components/marketing/studio-section').then((m) => ({ default: m.StudioSection })))
const SeriesSection = lazy(() => import('@/components/marketing/series-section').then((m) => ({ default: m.SeriesSection })))
const WhyUs = lazy(() => import('@/components/marketing/why-us').then((m) => ({ default: m.WhyUs })))
const GallerySection = lazy(() => import('@/components/marketing/gallery-section').then((m) => ({ default: m.GallerySection })))
const GuidesSection = lazy(() => import('@/components/marketing/guides-section').then((m) => ({ default: m.GuidesSection })))
const ProjectsShowcase = lazy(() => import('@/components/marketing/projects-showcase').then((m) => ({ default: m.ProjectsShowcase })))
const FaqSection = lazy(() => import('@/components/marketing/faq').then((m) => ({ default: m.FaqSection })))
const CtaBand = lazy(() => import('@/components/marketing/cta').then((m) => ({ default: m.CtaBand })))
const Footer = lazy(() => import('@/components/marketing/footer').then((m) => ({ default: m.Footer })))

const rootRoute = getRouteApi('__root__')

export const Route = createFileRoute('/{-$locale}/')({
  loader: async () => ({ origin: await getOrigin() }),
  head: ({ loaderData, params }) => {
    const origin = loaderData?.origin ?? ''
    const locale = ((params as { locale?: string }).locale ?? 'en') as Locale
    const d = getDictionary(locale)
    const { meta, links } = localeHead({
      origin,
      locale,
      path: '/',
      title: translate(d, 'content.seo.homeTitle'),
      description: translate(d, 'content.seo.homeDesc', { siteName: SITE_NAME }),
      ogTitle: translate(d, 'content.seo.homeOgTitle', { siteName: SITE_NAME }),
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
      <Suspense fallback={null}>
        <SolveSection />
        <VideoShowcase
          video={`${BRAND_ASSETS_CDN}/site/videos/2026/oem-brand-launch.mp4`}
          poster={`${BRAND_ASSETS_CDN}/site/videos/2026/oem-brand-launch.jpg`}
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
        <CtaBand />
        <Footer theme={theme} />
      </Suspense>
      <JsonLd data={faqLd(pick(faq, locale).items, locale)} />
    </div>
  )
}