import { createFileRoute } from '@tanstack/react-router'
import { ArrowRight } from 'lucide-react'
import { localeHead } from '@/features/seo/seo'
import { getOrigin } from '@/features/seo/seo.fns'
import type { Locale } from '@/features/i18n/locale'
import { useTranslation } from '@/features/i18n/provider'
import { localizePath } from '@/features/i18n/locale'
import { pick, solutions } from '@/features/site/content'
import { solutionPages, solutionPath } from '@/features/site/solution-pages'
import { getAfarerPage, brandify } from '@/features/content/loader'
import { PageHero, SectionHead } from '@/components/marketing/section-head'
import { SolutionsSection } from '@/components/marketing/solutions-section'
import { CtaBand } from '@/components/marketing/cta'
import { JsonLd, itemListLd, siteBreadcrumbLd } from '@/features/seo/jsonld'

/** Program pages served by the afarer catch-all (not part of solutionPages). */
const PROGRAM_PATHS = ['/solutions/distributors', '/solutions/rental-operators', '/solutions/retail-partners'] as const

export const Route = createFileRoute('/{-$locale}/solutions/')({
  loader: async () => ({ origin: await getOrigin() }),
  head: ({ loaderData, params }) => {
    const origin = loaderData?.origin ?? ''
    const locale = ((params as { locale?: string }).locale ?? 'en') as Locale
    const { meta, links } = localeHead({
      origin,
      locale,
      path: '/solutions',
      title: locale === 'es' ? 'Soluciones SUP personalizadas | Tabla, marca y paquetes' : 'Custom SUP Solutions | Boards, Brands & Packages',
      description:
        locale === 'es'
          ? 'Personalización de la tabla, identidad de marca y paquetes completos: formas, gráficos, pads EVA, accesorios y embalaje a medida.'
          : 'Board customization, brand identity and complete packages — every layer of your SUP is customizable: shapes, graphics, EVA pads, accessories.',
    })
    return { meta, links }
  },
  component: SolutionsIndex,
})

function SolutionsIndex() {
  const { locale, t } = useTranslation()
  const c = pick(solutions, locale)
  const pages = pick(solutionPages, locale)
  const programPages = PROGRAM_PATHS
    .map((path) => {
      const page = getAfarerPage(path, locale)
      if (!page) return null
      const meta = page.content.meta as { title?: string; description?: string } | undefined
      if (!meta?.title) return null
      return {
        path,
        navLabel: brandify(String(meta.title)).split('|')[0].trim(),
        metaDescription: brandify(meta.description ?? ''),
        kicker: locale === 'es' ? 'Programa' : 'Program',
      }
    })
    .filter((p): p is NonNullable<typeof p> => p !== null)
  const cards = [
    ...pages.map((p) => ({ path: solutionPath(p.slug), navLabel: p.navLabel, metaDescription: p.metaDescription, kicker: p.kicker })),
    ...programPages,
  ]

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
                className="marine-card group flex flex-col p-6 transition-transform hover:-translate-y-0.5"
                style={{ color: 'inherit' }}
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