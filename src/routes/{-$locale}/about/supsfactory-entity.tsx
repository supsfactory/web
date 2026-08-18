import { createFileRoute } from '@tanstack/react-router'
import { ArrowRight, BookOpen, Building2, Hammer, PackageCheck } from 'lucide-react'
import { localeHead } from '@/features/seo/seo'
import { getOrigin } from '@/features/seo/seo.fns'
import { localizePath, type Locale } from '@/features/i18n/locale'
import { useTranslation } from '@/features/i18n/provider'
import { getSolutionPage, solutionPath } from '@/features/site/solution-pages'
import { projects } from '@/features/site/projects'
import { knowledge } from '@/features/site/knowledge'
import { PageHero } from '@/components/marketing/section-head'
import { JsonLd, siteBreadcrumbLd } from '@/features/seo/jsonld'
import { MarketingShell } from '@/components/marketing/shell'
import { SITE_NAME, BRAND_COMPANY_NAME } from '@/config'

const FACTS: Record<string, { label: string; value: string }[]> = {
  en: [
    { label: 'Legal entity', value: BRAND_COMPANY_NAME },
    { label: 'Product focus', value: 'Inflatable SUP manufacturing — OEM, ODM & private label' },
    { label: 'Factories', value: '12,500 m² in-house plant in Qingdao, China' },
    { label: 'Minimum order', value: 'Tiered: 1–2 samples · 20–50 trial · 90–100+ volume' },
    { label: 'Markets', value: 'Worldwide — Europe, Americas, Asia, Oceania' },
    { label: 'Business model', value: 'B2B development & manufacturing' },
  ],
  es: [
    { label: 'Entidad legal', value: BRAND_COMPANY_NAME },
    { label: 'Enfoque de producto', value: 'Fabricación de SUP hinchables: OEM, ODM y etiqueta privada' },
    { label: 'Fábricas', value: 'Planta propia de 12.500 m² en Qingdao, China' },
    { label: 'Pedido mínimo', value: 'Escalonado: 1–2 muestras · 20–50 prueba · 90–100+ volumen' },
    { label: 'Mercados', value: 'Mundial: Europa, América, Asia, Oceanía' },
    { label: 'Modelo de negocio', value: 'Desarrollo y fabricación B2B' },
  ],
}

/**
 * Entity hub (/about/supsfactory-entity) — the GEO-facing page that links
 * the whole entity graph together: organization facts, services, projects,
 * knowledge. This is the page search engines and AI answer engines use to
 * describe "what SUPsfactory is".
 */
export const Route = createFileRoute('/{-$locale}/about/supsfactory-entity')({
  loader: async () => ({ origin: await getOrigin() }),
  head: ({ loaderData, params }) => {
    const origin = loaderData?.origin ?? ''
    const locale = ((params as { locale?: string }).locale ?? 'en') as Locale
    const { meta, links } = localeHead({
      origin,
      locale,
      path: '/about/supsfactory-entity',
      title:
        locale === 'es'
          ? `${SITE_NAME} | Fabricante de SUP hinchables OEM/ODM`
          : `${SITE_NAME} | Inflatable SUP OEM & ODM Manufacturer`,
      description:
        locale === 'es'
          ? `${SITE_NAME}: fabricación de SUP hinchables OEM/ODM con ingeniería, moldes, muestras y producción a gran escala, por ${BRAND_COMPANY_NAME}.`
          : `${SITE_NAME} is the inflatable SUP OEM & ODM manufacturing company — engineering, tooling, sampling and full-scale production by ${BRAND_COMPANY_NAME}.`,
    })
    return { meta, links }
  },
  component: EntityPage,
})

function EntityPage() {
  const { locale, t } = useTranslation()
  const fl = (path: string): string => localizePath(locale, path)
  const c = {
    kicker: t('sup.entity.kicker'),
    title: t('sup.entity.title'),
    intro1: t('sup.entity.intro1'),
    intro2: t('sup.entity.intro2'),
    intro3: t('sup.entity.intro3'),
    factsTitle: t('sup.entity.factsTitle'),
    servicesTitle: t('sup.entity.servicesTitle'),
    servicesBody: t('sup.entity.servicesBody'),
    knowledgeTitle: t('sup.entity.knowledgeTitle'),
    knowledgeBody: t('sup.entity.knowledgeBody'),
    projectsTitle: t('sup.entity.projectsTitle'),
    projectsBody: t('sup.entity.projectsBody'),
    ctaTitle: t('sup.entity.ctaTitle'),
    ctaBody: t('sup.entity.ctaBody'),
  }
  const services = ['custom-sup', 'private-label', 'resort', 'club', 'school']

  return (
    <MarketingShell>
      <PageHero kicker={c.kicker} title={c.title}>
        <div className="mt-7 flex max-w-2xl flex-col gap-4">
          <p className="fg-dim text-[15.5px] leading-relaxed">{c.intro1}</p>
          <p className="fg-dim text-[15.5px] leading-relaxed">{c.intro2}</p>
          <p className="fg-dim text-[15.5px] leading-relaxed">{c.intro3}</p>
        </div>
      </PageHero>

      {/* company facts */}
      <section className="border-y border-border bg-bg-alt">
        <div className="mx-auto max-w-6xl px-5 py-14 md:px-7">
          <h2 className="font-display text-xl font-bold">{c.factsTitle}</h2>
          <dl className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {FACTS[locale].map((f) => (
              <div key={f.label} className="marine-card p-5">
                <dt className="text-[12px] font-bold uppercase tracking-[0.12em] text-fg-3">{f.label}</dt>
                <dd className="mt-1.5 text-[14.5px] font-semibold">{f.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* services */}
      <section className="mx-auto max-w-6xl px-5 py-16 md:px-7">
        <h2 className="flex items-center gap-2 font-display text-xl font-bold">
          <PackageCheck size={20} className="text-primary" /> {c.servicesTitle}
        </h2>
        <p className="mt-2 max-w-2xl text-[14.5px] text-fg-2">{c.servicesBody}</p>
        <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((slug) => {
            const en = getSolutionPage('en', slug)
            if (!en) return null
            return (
              <a
                key={slug}
                href={localizePath(locale, solutionPath(slug))}
                className="marine-card group p-5 transition-transform hover:-translate-y-0.5"
              >
                <h3 className="font-display text-[15.5px] font-bold leading-snug group-hover:text-primary">
                  {getSolutionPage(locale, slug)?.h1 ?? en.h1}
                </h3>
              </a>
            )
          })}
        </div>
      </section>

      {/* projects + knowledge */}
      <section className="border-y border-border bg-bg-alt">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 md:px-7 lg:grid-cols-2">
          <div>
            <h2 className="flex items-center gap-2 font-display text-xl font-bold">
              <Hammer size={20} className="text-primary" /> {c.projectsTitle}
            </h2>
            <p className="mt-2 text-[14.5px] text-fg-2">{c.projectsBody}</p>
            <ul className="mt-5 space-y-2.5">
              {projects[locale].map((p) => (
                <li key={p.slug}>
                  <a
                    href={fl(`/projects/${p.slug}`)}
                    className="group flex items-center gap-2 text-[14.5px] font-semibold text-primary hover:underline"
                  >
                    <span className="text-fg-3 group-hover:text-primary">›</span> {p.navLabel}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="flex items-center gap-2 font-display text-xl font-bold">
              <BookOpen size={20} className="text-primary" /> {c.knowledgeTitle}
            </h2>
            <p className="mt-2 text-[14.5px] text-fg-2">{c.knowledgeBody}</p>
            <ul className="mt-5 space-y-2.5">
              {knowledge[locale].map((a) => (
                <li key={a.slug}>
                  <a
                    href={fl(`/knowledge/${a.slug}`)}
                    className="group flex items-center gap-2 text-[14.5px] font-semibold text-primary hover:underline"
                  >
                    <span className="text-fg-3 group-hover:text-primary">›</span> {a.navLabel}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="ocean-grad">
        <div className="mx-auto flex max-w-4xl flex-col items-center px-5 py-16 text-center md:px-7 md:py-20">
          <p className="flex items-center gap-2 font-display text-xs font-bold uppercase tracking-[0.16em] text-[#aee3f7]">
            <Building2 size={15} /> {SITE_NAME}
          </p>
          <h2 className="mt-3 font-display text-3xl font-extrabold leading-[1.12] text-white md:text-4xl">{c.ctaTitle}</h2>
          <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-[#d6eefb]">{c.ctaBody}</p>
          <a
            href={fl('/contact')}
            className="sun-grad mt-8 inline-flex h-[46px] items-center gap-2 rounded-full px-7 text-[15px] font-bold shadow-[0_10px_30px_-8px_rgba(255,107,53,0.65)] transition-transform hover:-translate-y-px"
          >
            {t('sup.projects.discuss')} <ArrowRight size={17} />
          </a>
        </div>
      </section>

      <JsonLd
        data={siteBreadcrumbLd([
          { name: t('sup.breadcrumb.home'), path: '/' },
          { name: t('sup.breadcrumb.company'), path: '/about/supsfactory-entity' },
        ])}
      />
    </MarketingShell>
  )
}
