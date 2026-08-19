import { createFileRoute, getRouteApi } from '@tanstack/react-router'
import { MessagesSquare } from 'lucide-react'
import { localeHead } from '@/features/seo/seo'
import { getOrigin } from '@/features/seo/seo.fns'
import type { Locale } from '@/features/i18n/locale'
import { getDictionary, translate } from '@/features/i18n/locale'
import { useTranslation } from '@/features/i18n/provider'
import { pick, worksPage, videoShowcase } from '@/product/content'
import { SiteNav } from '@/components/marketing/site-nav'
import { PageHero } from '@/components/marketing/section-head'
import { HowItWorks } from '@/components/marketing/how-it-works'
import { VideoShowcase } from '@/components/marketing/video-showcase'
import { CtaBand } from '@/components/marketing/cta'
import { Footer } from '@/components/marketing/footer'
import { BRAND_ASSETS_CDN } from '@/config'

const rootRoute = getRouteApi('__root__')

export const Route = createFileRoute('/{-$locale}/how-it-works')({
  loader: async () => ({ origin: await getOrigin() }),
  head: ({ loaderData, params }) => {
    const origin = loaderData?.origin ?? ''
    const locale = ((params as { locale?: string }).locale ?? 'en') as Locale
    const d = getDictionary(locale)
    const { meta, links } = localeHead({
      origin,
      locale,
      path: '/how-it-works',
      title: translate(d, 'content.seo.howItWorksTitle'),
      description: translate(d, 'content.seo.howItWorksDesc'),
    })
    return { meta, links }
  },
  component: WorksPage,
})

function WorksPage() {
  const { theme, user } = rootRoute.useLoaderData()
  const { locale } = useTranslation()
  const c = pick(worksPage, locale)

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteNav theme={theme} loggedIn={!!user} />
      <main id="main-content">
      <PageHero kicker={c.kicker} title={c.title} sub={c.sub} />
      <VideoShowcase
        video={`${BRAND_ASSETS_CDN}/site/videos/2026/sup-manufacturing.mp4`}
        poster={`${BRAND_ASSETS_CDN}/site/videos/2026/sup-manufacturing.jpg`}
        flip
        {...pick(videoShowcase, locale).process}
      />
      <HowItWorks />

      {/* specification review CTA */}
      <section className="mx-auto max-w-6xl px-5 py-16 md:px-7 md:py-20">
        <div className="ocean-grad flex flex-col items-center gap-5 rounded-3xl px-6 py-12 text-center md:flex-row md:justify-between md:px-12 md:text-left">
          <div className="flex items-start gap-4">
            <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white/12 text-white">
              <MessagesSquare size={22} />
            </span>
            <div>
              <h2 className="font-display text-2xl font-extrabold tracking-tight text-white">{c.consultTitle}</h2>
              <p className="fg-dim mt-2 max-w-xl text-[14.5px] leading-relaxed">{c.consultBody}</p>
            </div>
          </div>
        </div>
      </section>

      <CtaBand />
      </main>
      <Footer theme={theme} />
    </div>
  )
}
