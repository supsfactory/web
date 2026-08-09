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
      title: locale === 'es' ? 'Sobre nosotros | Fabricante OEM de SUP | SUPsfactory' : 'About Us | Inflatable SUP OEM | SUPsfactory',
      description:
        locale === 'es'
          ? 'SUPsfactory es la división de fabricación OEM/ODM de SUP hinchables de Afarer — ingeniería, moldes, muestras y producción desde pedidos de prueba.'
          : 'SUPsfactory is the inflatable SUP OEM/ODM manufacturing arm of Afarer — engineering, tooling, sampling and container-scale production from trial orders up.',
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
          'https://supsfactory.com',
          locale === 'es' ? '/es/about' : '/about',
          locale === 'es'
            ? 'SUPsfactory es la división de desarrollo y fabricación de SUP de Afarer (Qingdao Vatrad Group Co., Ltd.), planta de hinchables de 12.000 m² en Qingdao, China.'
            : 'SUPsfactory is the SUP product development and manufacturing division of Afarer (Qingdao Vatrad Group Co., Ltd.), a 12,000 m² inflatable manufacturing plant in Qingdao, China.',
        )}
      />

      <CtaBand />
      <Footer theme={theme} />
    </div>
  )
}
