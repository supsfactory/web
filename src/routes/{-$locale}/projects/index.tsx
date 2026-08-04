import { createFileRoute, Link } from '@tanstack/react-router'
import { ArrowRight, Package } from 'lucide-react'
import { localeHead } from '@/features/seo/seo'
import { getOrigin } from '@/features/seo/seo.fns'
import { useTranslation } from '@/features/i18n/provider'
import { projects, projectsMeta } from '@/features/site/projects'
import { PageHero } from '@/components/marketing/section-head'
import { JsonLd, itemListLd, siteBreadcrumbLd } from '@/features/seo/jsonld'
import { MarketingShell } from '@/components/marketing/shell'
import type { Locale } from '@/features/i18n/locale'

export const Route = createFileRoute('/{-$locale}/projects/')({
  loader: async () => ({ origin: await getOrigin() }),
  head: ({ loaderData, params }) => {
    const origin = loaderData?.origin ?? ''
    const locale = ((params as { locale?: string }).locale ?? 'en') as Locale
    const { meta, links } = localeHead({
      origin,
      locale,
      path: '/projects',
      title: projectsMeta[locale].metaTitle,
      description: projectsMeta[locale].metaDescription,
    })
    return { meta, links }
  },
  component: ProjectsIndex,
})

function ProjectsIndex() {
  const { locale, t } = useTranslation()
  const items = projects[locale]
  const meta = projectsMeta[locale]

  return (
    <MarketingShell>
      <PageHero kicker={t('sup.projects.hubKicker')} title={meta.h1}>
        <div className="mt-7 flex max-w-2xl flex-col gap-4">
          <p className="fg-dim text-[15.5px] leading-relaxed">{t('sup.projects.hubIntro')}</p>
        </div>
      </PageHero>

      <section className="mx-auto max-w-6xl px-5 py-14 md:px-7 md:py-16">
        <div className="grid gap-6 md:grid-cols-2">
          {items.map((p) => (
            <Link
              key={p.slug}
              to="/{-$locale}/projects/$slug"
              params={{ slug: p.slug }}
              className="marine-card group flex flex-col justify-between gap-5 p-6 transition-transform hover:-translate-y-0.5 md:p-7"
            >
              <div>
                <p className="flex items-center gap-2 text-[12px] font-bold uppercase tracking-[0.12em] text-primary">
                  <Package size={14} /> {p.industry}
                </p>
                <h2 className="mt-3 font-display text-[21px] font-bold leading-snug md:text-[23px]">{p.h1}</h2>
                <p className="mt-3 text-[14px] leading-relaxed text-fg-2">{p.requirement}</p>
              </div>
              <p className="flex items-center gap-1.5 text-[14px] font-bold text-primary group-hover:underline">
                {t('sup.projects.viewCase')} <ArrowRight size={15} className="transition-transform group-hover:translate-x-0.5" />
              </p>
            </Link>
          ))}
        </div>

        <div className="mt-14 rounded-3xl border border-border bg-bg-alt p-8 text-center md:p-12">
          <h2 className="font-display text-2xl font-extrabold">{t('sup.projects.yourCaseTitle')}</h2>
          <p className="mx-auto mt-3 max-w-xl text-[14.5px] leading-relaxed text-fg-2">{t('sup.projects.yourCaseBody')}</p>
          <Link
            to="/{-$locale}/contact"
            className="sun-grad mt-7 inline-flex h-[46px] items-center gap-2 rounded-full px-7 text-[15px] font-bold shadow-[0_10px_30px_-8px_rgba(255,107,53,0.65)] transition-transform hover:-translate-y-px"
          >
            {t('sup.projects.discuss')} <ArrowRight size={17} />
          </Link>
        </div>
      </section>

      <JsonLd
        data={siteBreadcrumbLd([
          { name: t('sup.breadcrumb.home'), path: '/' },
          { name: t('sup.breadcrumb.projects'), path: '/projects' },
        ])}
      />
      <JsonLd
        data={itemListLd(items.map((p) => ({ name: p.h1, path: `/projects/${p.slug}` })))}
      />
    </MarketingShell>
  )
}
