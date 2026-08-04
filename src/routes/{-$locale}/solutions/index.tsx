import { createFileRoute } from '@tanstack/react-router'
import { localeHead } from '@/features/seo/seo'
import { getOrigin } from '@/features/seo/seo.fns'
import type { Locale } from '@/features/i18n/locale'
import { useTranslation } from '@/features/i18n/provider'
import { pick, solutions } from '@/features/site/content'
import { PageHero } from '@/components/marketing/section-head'
import { SolutionsSection } from '@/components/marketing/solutions-section'
import { CtaBand } from '@/components/marketing/cta'

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
  const { locale } = useTranslation()
  const c = pick(solutions, locale)

  return (
    <>
      <PageHero kicker={c.kicker} title={c.title} sub={c.sub} />
      <SolutionsSection heading={null} />
      <CtaBand />
    </>
  )
}