import { createFileRoute, Link } from '@tanstack/react-router'
import { ArrowRight } from 'lucide-react'
import { localeHead } from '@/features/seo/seo'
import { getOrigin } from '@/features/seo/seo.fns'
import type { Locale } from '@/features/i18n/locale'
import { useTranslation } from '@/features/i18n/provider'
import { localizePath } from '@/features/i18n/locale'
import { pick, solutions } from '@/features/site/content'
import { solutionPages, solutionPath } from '@/features/site/solution-pages'
import { PageHero, SectionHead } from '@/components/marketing/section-head'
import { SolutionsSection } from '@/components/marketing/solutions-section'
import { CtaBand } from '@/components/marketing/cta'
import { JsonLd, itemListLd, siteBreadcrumbLd } from '@/features/seo/jsonld'

export const Route = createFileRoute('/{-$locale}/solutions/')({
  loader: async () => ({ origin: await getOrigin() }),
  head: ({ loaderData, params }) => {
    const origin = loaderData?.origin ?? ''
    const locale = ((params as { locale?: string }).locale ?? 'en') as Locale
    const { meta, links } = localeHead({
      origin,
      locale,
      path: '/solutions',
      title: locale === 'zh' ? '定制 SUP 解决方案 | 板面、品牌、完整套装 — SUPsfactory' : 'Custom SUP Solutions | Board, Brand & Complete Packages — SUPsfactory',
      description:
        locale === 'zh'
          ? '从板身定制、品牌形象到完整产品套装——每一层都可以定制。SUPsfactory 提供板面、Logo、EVA 防滑垫、配件与包装的全面定制。'
          : 'Board customization, brand identity and complete product packages — every layer of your SUP is customizable. SUPsfactory: custom shapes, graphics, EVA pads, accessories and packaging.',
    })
    return { meta, links }
  },
  component: SolutionsIndex,
})

function SolutionsIndex() {
  const { locale, t } = useTranslation()
  const c = pick(solutions, locale)
  const pages = pick(solutionPages, locale)

  return (
    <>
      <PageHero kicker={c.kicker} title={c.title} sub={c.sub} />
      <SolutionsSection heading={null} />
      <section className="border-t border-border bg-bg-alt">
        <div className="mx-auto max-w-6xl px-5 py-16 md:px-7 md:py-20">
          <SectionHead kicker={t('sup.solutions.hubKicker')} title={t('sup.solutions.hubTitle')} />
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {pages.map((page) => (
              <Link
                key={page.slug}
                to="/$"
                params={{ _splat: localizePath(locale, solutionPath(page.slug)).replace(/^\/+/, '') }}
                className="marine-card group flex flex-col p-6 transition-transform hover:-translate-y-0.5"
                style={{ color: 'inherit' }}
              >
                <p className="kicker">{page.kicker}</p>
                <h3 className="mt-2 font-display text-lg font-bold">{page.navLabel}</h3>
                <p className="mt-2.5 flex-1 text-[13.5px] leading-relaxed text-fg-2">{page.metaDescription}</p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-[13px] font-bold text-primary">
                  {t('sup.solutions.seeAll')}
                  <ArrowRight size={15} className="transition-transform group-hover:translate-x-0.5" />
                </span>
              </Link>
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
          pages.map((p) => ({ name: p.h1, path: solutionPath(p.slug) })),
        )}
      />
    </>
  )
}