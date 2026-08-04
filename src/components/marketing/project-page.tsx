import { Link } from '@tanstack/react-router'
import { ArrowRight, Building2, CheckCircle2, ClipboardList, Package } from 'lucide-react'
import type { ProjectData } from '@/features/site/projects'
import { useTranslation } from '@/features/i18n/provider'
import { PageHero, SectionHead } from './section-head'
import { JsonLd, projectLd } from '@/features/seo/jsonld'

/**
 * Case-study page renderer for /projects/{slug}: industry → requirement →
 * challenge → solution → product → process → result, plus CaseStudy JSON-LD.
 */
export function ProjectPage({ page }: { page: ProjectData }) {
  const { t } = useTranslation()

  return (
    <>
      <PageHero kicker={page.kicker} title={page.h1}>
        <div className="mt-7 flex max-w-2xl flex-col gap-4">
          {page.intro.map((p, i) => (
            <p key={i} className="fg-dim text-[15.5px] leading-relaxed">{p}</p>
          ))}
        </div>
        <Link
          to="/{-$locale}/contact"
          className="sun-grad mt-8 inline-flex h-[46px] items-center gap-2 rounded-full px-7 text-[15px] font-bold shadow-[0_10px_30px_-8px_rgba(255,107,53,0.65)] transition-transform hover:-translate-y-px"
        >
          {t('sup.projects.discuss')} <ArrowRight size={17} />
        </Link>
      </PageHero>

      {/* at-a-glance facts */}
      <section className="mx-auto max-w-6xl px-5 py-14 md:px-7">
        <dl className="grid gap-5 md:grid-cols-3">
          <div className="marine-card p-6">
            <dt className="flex items-center gap-2 text-[12px] font-bold uppercase tracking-[0.12em] text-fg-3">
              <Building2 size={15} className="text-primary" /> {t('sup.projects.industry')}
            </dt>
            <dd className="mt-2 text-[15px] font-semibold">{page.industry}</dd>
          </div>
          <div className="marine-card p-6">
            <dt className="flex items-center gap-2 text-[12px] font-bold uppercase tracking-[0.12em] text-fg-3">
              <ClipboardList size={15} className="text-primary" /> {t('sup.projects.requirement')}
            </dt>
            <dd className="mt-2 text-[15px] font-semibold">{page.requirement}</dd>
          </div>
          <div className="marine-card p-6">
            <dt className="flex items-center gap-2 text-[12px] font-bold uppercase tracking-[0.12em] text-fg-3">
              <Package size={15} className="text-primary" /> {t('sup.projects.product')}
            </dt>
            <dd className="mt-2 text-[15px] font-semibold">{page.product}</dd>
          </div>
        </dl>
      </section>

      {/* challenge → solution */}
      <section className="border-y border-border bg-bg-alt">
        <div className="mx-auto max-w-6xl px-5 py-16 md:px-7 md:py-20">
          <SectionHead kicker={t('sup.projects.storyKicker')} title={t('sup.projects.storyTitle')} />
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            <div className="marine-card p-6">
              <p className="text-[13px] font-bold uppercase tracking-[0.1em] text-sun">{t('sup.projects.challenge')}</p>
              <p className="mt-2.5 text-[14.5px] leading-relaxed text-fg-2">{page.challenge}</p>
            </div>
            <div className="marine-card p-6">
              <p className="flex items-center gap-1.5 text-[13px] font-bold uppercase tracking-[0.1em] text-primary">
                <CheckCircle2 size={15} /> {t('sup.projects.solution')}
              </p>
              <p className="mt-2.5 text-[14.5px] leading-relaxed text-fg-2">{page.solution}</p>
            </div>
          </div>
        </div>
      </section>

      {/* process */}
      <section className="mx-auto max-w-6xl px-5 py-16 md:px-7 md:py-20">
        <SectionHead kicker={t('sup.projects.processKicker')} title={t('sup.projects.processTitle')} />
        <ol className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {page.process.map((step, i) => (
            <li key={step.title} className="marine-card p-5">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-primary to-aqua font-display text-[13px] font-extrabold text-white">
                {i + 1}
              </span>
              <h3 className="mt-3.5 font-display text-[15.5px] font-bold">{step.title}</h3>
              <p className="mt-2 text-[13.5px] leading-relaxed text-fg-2">{step.body}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* result */}
      <section className="border-y border-border bg-bg-alt">
        <div className="mx-auto max-w-3xl px-5 py-16 text-center md:px-7 md:py-20">
          <p className="kicker">{t('sup.projects.result')}</p>
          <p className="mt-4 text-[16px] leading-relaxed text-fg-2">{page.result}</p>
          <div className="mt-6 flex flex-wrap justify-center gap-2">
            {page.tags.map((tag) => (
              <span key={tag} className="pill">{tag}</span>
            ))}
          </div>
        </div>
      </section>

      <JsonLd
        data={projectLd({
          title: page.h1,
          description: page.metaDescription,
          path: `/projects/${page.slug}`,
          industry: page.industry,
          outcome: page.outcome,
        })}
      />

      {/* CTA */}
      <section className="ocean-grad">
        <div className="mx-auto flex max-w-4xl flex-col items-center px-5 py-16 text-center md:px-7 md:py-20">
          <p className="font-display text-xs font-bold uppercase tracking-[0.16em] text-[#aee3f7]">{t('sup.projects.ctaKicker')}</p>
          <h2 className="mt-3 font-display text-3xl font-extrabold leading-[1.12] text-white md:text-4xl">{t('sup.projects.ctaTitle')}</h2>
          <Link
            to="/{-$locale}/contact"
            className="sun-grad mt-8 inline-flex h-[46px] items-center gap-2 rounded-full px-7 text-[15px] font-bold shadow-[0_10px_30px_-8px_rgba(255,107,53,0.65)] transition-transform hover:-translate-y-px"
          >
            {t('sup.projects.discuss')} <ArrowRight size={17} />
          </Link>
        </div>
      </section>
      <nav className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-2 gap-y-1 px-5 py-12 md:px-7">
        <Link to="/{-$locale}/projects" className="text-[13px] font-medium text-primary hover:underline">{t('sup.projects.seeAll')}</Link>
        <span className="text-fg-3">·</span>
        <Link to="/{-$locale}/solutions" className="text-[13px] font-medium text-primary hover:underline">{t('sup.nav.solutions')}</Link>
        <span className="text-fg-3">·</span>
        <Link to="/{-$locale}/contact" className="text-[13px] font-medium text-primary hover:underline">{t('sup.nav.contact')}</Link>
      </nav>
    </>
  )
}
