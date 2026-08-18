import { createFileRoute, getRouteApi } from '@tanstack/react-router'
import { BadgeCheck } from 'lucide-react'
import { localeHead } from '@/features/seo/seo'
import { getOrigin } from '@/features/seo/seo.fns'
import type { Locale } from '@/features/i18n/locale'
import { useTranslation } from '@/features/i18n/provider'
import { pick, about } from '@/features/site/content'
import { SiteNav } from '@/components/marketing/site-nav'
import { PageHero } from '@/components/marketing/section-head'
import { JsonLd, aboutPageLd } from '@/features/seo/jsonld'
import { CtaBand } from '@/components/marketing/cta'
import { Footer } from '@/components/marketing/footer'
import { SectionHead } from '@/components/marketing/section-head'
import { SITE_NAME, BRAND_ASSETS_CDN, BRAND_BOILERPLATE, SITE_URL } from '@/config'

const rootRoute = getRouteApi('__root__')

export const Route = createFileRoute('/{-$locale}/about/')({
  loader: async () => ({ origin: await getOrigin() }),
  head: ({ loaderData, params }) => {
    const origin = loaderData?.origin ?? ''
    const locale = ((params as { locale?: string }).locale ?? 'en') as Locale
    const { meta, links } = localeHead({
      origin,
      locale,
      path: '/about',
      title: locale === 'es' ? `Sobre ${SITE_NAME} | Fabricante de tablas SUP a medida | OEM/ODM` : `About ${SITE_NAME} | Custom SUP Board Manufacturer | OEM/ODM`,
      description:
        locale === 'es'
          ? `${SITE_NAME} es un fabricante de tablas de paddle surf a medida — OEM y ODM de SUP hinchables, desde el diseño del prototipo hasta la producción en serie, con ingeniería, moldes, muestras y soporte global.`
          : `${SITE_NAME} is a custom SUP board manufacturer — inflatable paddle board OEM/ODM from prototype design to mass production, with engineering, tooling, sampling, QC and global export support under one roof.`,
    })
    return { meta, links }
  },
  component: AboutPage,
})

function AboutPage() {
  const { theme, user } = rootRoute.useLoaderData()
  const { locale } = useTranslation()
  const c = pick(about, locale)

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteNav theme={theme} loggedIn={!!user} />
      <PageHero kicker={c.kicker} title={c.title} sub={c.sub} />

      {/* story */}
      <section className="mx-auto max-w-3xl px-5 py-16 md:px-7 md:py-20">
        <div className="flex flex-col gap-5">
          {c.story.map((p, i) => (
            <p key={i} className="text-[15.5px] leading-[1.85] text-fg-2">{p}</p>
          ))}
        </div>
      </section>

      {/* partnering */}
      <section className="border-y border-border bg-bg-alt">
        <div className="mx-auto max-w-6xl px-5 py-14 md:px-7">
          <h2 className="text-center font-display text-2xl font-extrabold tracking-tight">{c.partnering.title}</h2>
          <div className="mx-auto mt-5 flex max-w-3xl flex-col gap-4">
            {c.partnering.body.map((p, i) => (
              <p key={i} className="text-[14.5px] leading-[1.85] text-fg-2">{p}</p>
            ))}
          </div>
        </div>
      </section>

      {/* factory imagery */}
      <section className="mx-auto max-w-6xl px-5 py-14 md:px-7">
        <div className="grid gap-5 md:grid-cols-2">
          <img
            src={`${BRAND_ASSETS_CDN}/site/videos/2026/sup-manufacturing.jpg`}
            alt={locale === 'es'
              ? 'Línea de producción de una fábrica de tablas SUP hinchables a medida en Qingdao'
              : 'Custom SUP board manufacturing factory production line — inflatable paddle board plant in Qingdao'}
            loading="lazy"
            className="aspect-[16/10] w-full rounded-2xl border border-border-2 object-cover"
          />
          <img
            src={`${BRAND_ASSETS_CDN}/site/videos/2026/oem-brand-launch.jpg`}
            alt={locale === 'es'
              ? 'Marca de SUP OEM personalizada — estampado y embalaje de tablas con marca privada'
              : 'OEM SUP brand launch — custom paddle board branding, printing and packaging for private label'}
            loading="lazy"
            className="aspect-[16/10] w-full rounded-2xl border border-border-2 object-cover"
          />
        </div>
      </section>

      {/* manufacturing strength */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-6xl px-5 py-16 md:px-7">
          <SectionHead kicker={locale === 'es' ? 'Fabricación' : 'Manufacturing'} title={locale === 'es' ? 'Nuestra fortaleza de fabricación' : 'Our Manufacturing Strength'} />
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {c.strength.map((s) => (
              <div key={s.title} className="marine-card p-7">
                <h3 className="font-display text-[17px] font-bold">{s.title}</h3>
                <p className="mt-2 text-[13.5px] leading-relaxed text-fg-2">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* stats */}
      <section className="border-y border-border bg-bg-alt">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-5 py-12 md:grid-cols-4 md:px-7">
          {c.stats.map((s) => (
            <div key={s.label} className="text-center">
              <p className="font-display text-3xl font-extrabold text-primary">{s.value}</p>
              <p className="mt-1.5 text-[13px] font-medium text-fg-3">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* values */}
      <section className="mx-auto max-w-6xl px-5 py-16 md:px-7 md:py-20">
        <div className="grid gap-5 md:grid-cols-3">
          {c.values.map((v) => (
            <div key={v.title} className="marine-card p-7">
              <span className="icon-tile">
                <BadgeCheck size={20} />
              </span>
              <h3 className="mt-4 font-display text-[17px] font-bold">{v.title}</h3>
              <p className="mt-2 text-[13.5px] leading-relaxed text-fg-2">{v.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* capabilities */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-6xl px-5 py-14 md:px-7">
          <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
            {c.capabilities.map((cap) => (
              <li key={cap} className="text-[13px] font-bold uppercase tracking-[0.12em] text-fg-3">{cap}</li>
            ))}
          </ul>
        </div>
      </section>

      <JsonLd
        data={aboutPageLd(
          SITE_URL,
          locale === 'es' ? '/es/about' : '/about',
          BRAND_BOILERPLATE,
        )}
      />

      <CtaBand />
      <Footer theme={theme} />
    </div>
  )
}
