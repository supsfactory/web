import { createFileRoute, Link } from '@tanstack/react-router'
import { ArrowRight, BookOpen, Compass } from 'lucide-react'
import { localeHead } from '@/features/seo/seo'
import { getOrigin } from '@/features/seo/seo.fns'
import { useTranslation } from '@/features/i18n/provider'
import { knowledge, knowledgeMeta } from '@/features/site/knowledge'
import { GUIDES } from '@/features/content/guide-content'
import { PageHero } from '@/components/marketing/section-head'
import { JsonLd, itemListLd, siteBreadcrumbLd } from '@/features/seo/jsonld'
import { MarketingShell } from '@/components/marketing/shell'
import type { Locale } from '@/features/i18n/locale'

export const Route = createFileRoute('/{-$locale}/knowledge/')({
  loader: async () => ({ origin: await getOrigin() }),
  head: ({ loaderData, params }) => {
    const origin = loaderData?.origin ?? ''
    const locale = ((params as { locale?: string }).locale ?? 'en') as Locale
    const { meta, links } = localeHead({
      origin,
      locale,
      path: '/knowledge',
      title: knowledgeMeta[locale].metaTitle,
      description: knowledgeMeta[locale].metaDescription,
    })
    return { meta, links }
  },
  component: KnowledgeIndex,
})

function KnowledgeIndex() {
  const { locale, t } = useTranslation()
  const articles = knowledge[locale]
  const meta = knowledgeMeta[locale]

  return (
    <MarketingShell>
      <PageHero kicker={t('sup.knowledge.hubKicker')} title={meta.h1}>
        <div className="mt-7 flex max-w-2xl flex-col gap-4">
          <p className="fg-dim text-[15.5px] leading-relaxed">{t('sup.knowledge.hubIntro')}</p>
        </div>
      </PageHero>

      <section className="mx-auto max-w-6xl px-5 py-14 md:px-7 md:py-16">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((a) => (
            <Link
              key={a.slug}
              to="/{-$locale}/knowledge/$slug"
              params={{ slug: a.slug }}
              className="marine-card group flex flex-col justify-between gap-5 p-6 transition-transform hover:-translate-y-0.5"
            >
              <div>
                <p className="flex items-center gap-2 text-[12px] font-bold uppercase tracking-[0.12em] text-primary">
                  <BookOpen size={14} /> {t('sup.knowledge.sectionKicker')}
                </p>
                <h2 className="mt-3 font-display text-[19px] font-bold leading-snug">{a.h1}</h2>
                <p className="mt-3 text-[14px] leading-relaxed text-fg-2">{a.intro}</p>
              </div>
              <p className="flex items-center gap-1.5 text-[14px] font-bold text-primary group-hover:underline">
                {t('sup.knowledge.readArticle')} <ArrowRight size={15} className="transition-transform group-hover:translate-x-0.5" />
              </p>
            </Link>
          ))}
        </div>
      </section>

      {GUIDES.length > 0 && (
        <section className="mx-auto max-w-6xl px-5 pb-14 md:px-7 md:pb-16">
          <div className="mb-6 flex items-center gap-2">
            <Compass size={18} className="text-primary" />
            <h2 className="font-display text-xl font-extrabold tracking-tight">{t('sup.knowledge.guidesTitle')}</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {GUIDES.map((g) => (
              <a
                key={g.slug}
                href={`/guides/${g.slug}`}
                className="marine-card group flex flex-col justify-between gap-5 p-6 transition-transform hover:-translate-y-0.5"
              >
                <div>
                  <p className="flex items-center gap-2 text-[12px] font-bold uppercase tracking-[0.12em] text-primary">
                    {t('sup.knowledge.guidesKicker')}
                  </p>
                  <h3 className="mt-3 font-display text-[17px] font-bold leading-snug">{g.title}</h3>
                  <p className="mt-3 text-[14px] leading-relaxed text-fg-2">{g.intro[0]}</p>
                </div>
                <p className="flex items-center gap-1.5 text-[14px] font-bold text-primary group-hover:underline">
                  {t('sup.knowledge.readArticle')} <ArrowRight size={15} className="transition-transform group-hover:translate-x-0.5" />
                </p>
              </a>
            ))}
          </div>
        </section>
      )}

      <JsonLd
        data={siteBreadcrumbLd([
          { name: t('sup.breadcrumb.home'), path: '/' },
          { name: t('sup.breadcrumb.knowledge'), path: '/knowledge' },
        ])}
      />
      <JsonLd
        data={itemListLd([
          ...articles.map((a) => ({ name: a.h1, path: `/knowledge/${a.slug}` })),
          ...GUIDES.map((g) => ({ name: g.title, path: `/guides/${g.slug}` })),
        ])}
      />
    </MarketingShell>
  )
}
