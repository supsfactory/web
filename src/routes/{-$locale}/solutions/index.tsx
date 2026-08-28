import { createFileRoute } from '@tanstack/react-router'
import { createServerFn } from '@tanstack/react-start'
import { ArrowRight } from 'lucide-react'
import { localeHead } from '@/features/seo/seo'
import { getOrigin } from '@/features/seo/seo.fns'
import type { Locale } from '@/features/i18n/locale'
import { getDictionary, translate } from '@/features/i18n/locale'
import { useTranslation } from '@/features/i18n/provider'
import { localizePath } from '@/features/i18n/locale'
import { pick, solutions } from '@/product/content'
import { PageHero, SectionHead } from '@/components/marketing/section-head'
import { SolutionsSection } from '@/components/marketing/solutions-section'
import { CtaBand } from '@/components/marketing/cta'
import { JsonLd, itemListLd, siteBreadcrumbLd } from '@/features/seo/jsonld'

/** Program pages served by the afarer catch-all (not part of solutionPages). */
const PROGRAM_PATHS = ['/solutions/distributors', '/solutions/rental-operators', '/solutions/retail-partners'] as const

/**
 * Resolve the program-page cards (title + meta from the content corpus) on the
 * server: the loader it reads from is pulled in dynamically so the YAML corpus
 * and parser stay out of the client bundle.
 */
const programCardsServerFn = createServerFn({ method: 'GET' })
  .validator((locale: string) => locale)
  .handler(async ({ data }) => {
    const { getContentPage, brandify } = await import('@/features/content/loader')
    const cards: { path: string; navLabel: string; metaDescription: string }[] = []
    for (const path of PROGRAM_PATHS) {
      const page = getContentPage(path, data as Locale)
      if (!page) continue
      const meta = page.content.meta as { title?: string; description?: string } | undefined
      if (!meta?.title) continue
      cards.push({
        path,
        navLabel: brandify(String(meta.title)).split('|')[0].trim(),
        metaDescription: brandify(meta.description ?? ''),
      })
    }
    return cards
  })

export const Route = createFileRoute('/{-$locale}/solutions/')({
  loader: async ({ params }) => {
    const origin = await getOrigin()
    const locale = ((params as { locale?: string }).locale ?? 'en') as Locale
    const { solutionPages, solutionPath } = await import('@/product/solution-pages')
    const solutionCards = (solutionPages[locale] ?? solutionPages.en).map((p) => ({
      path: solutionPath(p.slug),
      navLabel: p.navLabel,
      metaDescription: p.metaDescription,
      kicker: p.kicker,
    }))
    const programPages = await programCardsServerFn({ data: locale })
    return { origin, solutionCards, programPages }
  },
  head: ({ loaderData, params }) => {
    const origin = loaderData?.origin ?? ''
    const locale = ((params as { locale?: string }).locale ?? 'en') as Locale
    const d = getDictionary(locale)
    const { meta, links } = localeHead({
      origin,
      locale,
      path: '/solutions',
      title: translate(d, 'content.seo.solutionsTitle'),
      description: translate(d, 'content.seo.solutionsDesc'),
    })
    return { meta, links }
  },
  component: SolutionsIndex,
})

function SolutionsIndex() {
  const { locale, t } = useTranslation()
  const { solutionCards, programPages } = Route.useLoaderData()
  const c = pick(solutions, locale)
  const programCards = programPages.map((p) => ({
    ...p,
    kicker: t('content.kickers.program'),
  }))
  const cards = [...solutionCards, ...programCards]

  return (
    <>
      <PageHero kicker={c.kicker} title={c.title} sub={c.sub} />
      <SolutionsSection heading={null} />
      <section className="border-t border-border bg-bg-alt">
        <div className="mx-auto max-w-6xl px-5 py-16 md:px-7 md:py-20">
          <SectionHead kicker={t('sup.solutions.hubKicker')} title={t('sup.solutions.hubTitle')} />
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {cards.map((card) => (
              <a
                key={card.path}
                href={localizePath(locale, card.path)}
                className="marine-card group flex flex-col p-6 text-current transition-transform hover:-translate-y-0.5"
              >
                <p className="kicker">{card.kicker}</p>
                <h3 className="mt-2 font-display text-lg font-bold">{card.navLabel}</h3>
                <p className="mt-2.5 flex-1 text-[13.5px] leading-relaxed text-fg-2">{card.metaDescription}</p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-[13px] font-bold text-primary">
                  {t('sup.solutions.seeAll')}
                  <ArrowRight size={15} className="transition-transform group-hover:translate-x-0.5" />
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>
      <CtaBand />
      <JsonLd
        data={siteBreadcrumbLd([
          { name: t('sup.breadcrumb.home'), path: '/' },
          { name: t('sup.breadcrumb.solutions'), path: '/solutions' },
        ])}
      />
      <JsonLd
        data={itemListLd(
          cards.map((p) => ({ name: p.navLabel, path: p.path })),
        )}
      />
    </>
  )
}