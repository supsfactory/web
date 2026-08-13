import { createFileRoute } from '@tanstack/react-router'
import { ArrowRight, CheckCircle2, Package } from 'lucide-react'
import { localeHead } from '@/features/seo/seo'
import { getOrigin } from '@/features/seo/seo.fns'
import type { Locale } from '@/features/i18n/locale'
import { useTranslation } from '@/features/i18n/provider'
import { pick, products, productsPage } from '@/features/site/content'
import { seriesPages, getSeriesPage } from '@/features/site/series-pages'
import type { SeriesPageData } from '@/features/site/series-pages'
import { FACTS } from '@/features/site/facts'
import { JsonLd, breadcrumbLd, faqLd, itemListLd } from '@/features/seo/jsonld'
import { SiteNav } from '@/components/marketing/site-nav'
import { PageHero } from '@/components/marketing/section-head'
import { Footer } from '@/components/marketing/footer'
import { CtaBand } from '@/components/marketing/cta'
import { ProductView, afarerProductLoader, type CatchAllData } from '@/features/content/catchall'
import { getRouteApi } from '@tanstack/react-router'

const rootRoute = getRouteApi('__root__')

type ProductCatchAll = Extract<CatchAllData, { kind: 'product' }>

export const Route = createFileRoute('/{-$locale}/products/$series')({
  validateSearch: (s: Record<string, unknown>): { platform?: string } => ({
    platform: typeof s.platform === 'string' ? s.platform : undefined,
  }),
  loader: async ({ params }) => {
    const locale = ((params as { locale?: string }).locale ?? 'en') as Locale
    const slug = (params as { series: string }).series
    const page = getSeriesPage(locale, slug)
    const origin = await getOrigin()
    if (page) return { origin, page, product: null as ProductCatchAll | null }
    const product = await afarerProductLoader({ data: { slug, locale } })
    return { origin, page: null as SeriesPageData | null, product }
  },
  head: ({ loaderData, params }) => {
    const origin = loaderData?.origin ?? ''
    const locale = ((params as { locale?: string }).locale ?? 'en') as Locale
    const page = loaderData?.page
    const product = loaderData?.product
    if (!page && !product) return {}
    const { meta, links } = localeHead({
      origin,
      locale,
      path: `/products/${page?.slug ?? product?.product.slug ?? ''}`,
      title: page ? page.metaTitle : product ? product.title : '',
      description: page ? page.metaDescription : product ? product.description : '',
    })
    return { meta, links }
  },
  component: SeriesPage,
})

function SeriesPage() {
  const { theme, user } = rootRoute.useLoaderData()
  const { locale } = useTranslation()
  const { origin, page, product } = Route.useLoaderData()
  const es = locale === 'es'

  if (product) {
    return (
      <div className="min-h-screen bg-background text-foreground">
        <SiteNav theme={theme} loggedIn={!!user} />
        <ProductView product={product.product} related={product.related} origin={origin} locale={locale} />
        <CtaBand productSlug={product.product.slug} />
        <Footer theme={theme} />
      </div>
    )
  }

  if (!page) return null
  const fl = (p: string): string => (es ? `/es${p}` : p)
  const items = pick(products, locale).items.filter((p) => p.series === page.slug)
  const c = pick(productsPage, locale)
  const others = seriesPages[locale].filter((s) => s.slug !== page.slug)

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteNav theme={theme} loggedIn={!!user} />
      <PageHero kicker={page.kicker} title={page.h1} sub={page.intro[0]} />

      <section className="mx-auto max-w-6xl px-5 py-14 md:px-7 md:py-16">
        <div className="mx-auto mb-10 max-w-3xl">
          <p className="text-[15px] leading-relaxed text-fg-2">{page.intro[1]}</p>
        </div>

        <div className="grid gap-4 sm:grid-cols-3">
          <div className="marine-card p-4">
            <p className="text-[11.5px] font-bold uppercase tracking-[0.12em] text-fg-3">{es ? 'Pedido mínimo' : 'Minimum order'}</p>
            <p className="mt-1.5 text-[13.5px] font-semibold leading-snug">
              {es
                ? `${FACTS.moq.standardRun} lote OEM estándar · ${FACTS.moq.trialStandard} prueba · ${FACTS.moq.customMould} molde a medida`
                : `${FACTS.moq.standardRun} standard OEM batch · ${FACTS.moq.trialStandard} trial · ${FACTS.moq.customMould} custom mould`}
            </p>
          </div>
          <div className="marine-card p-4">
            <p className="text-[11.5px] font-bold uppercase tracking-[0.12em] text-fg-3">{es ? 'Plazos' : 'Timeline'}</p>
            <p className="mt-1.5 text-[13.5px] font-semibold leading-snug">
              {es
                ? `Muestras en ${FACTS.sampleTime} · producción en ${FACTS.leadTime} tras PO y depósito`
                : `Samples in ${FACTS.sampleTime} · production in ${FACTS.leadTime} after PO and deposit`}
            </p>
          </div>
          <div className="marine-card p-4">
            <p className="text-[11.5px] font-bold uppercase tracking-[0.12em] text-fg-3">{es ? 'Control de calidad' : 'Quality control'}</p>
            <p className="mt-1.5 text-[13.5px] font-semibold leading-snug">
              {es ? `Checklist de ${FACTS.assemblyChecklist} puntos · prueba ${FACTS.pressureTest}` : `${FACTS.assemblyChecklist}-point checklist · ${FACTS.pressureTest} pressure test`}
            </p>
          </div>
        </div>

        <div className="mt-12">
          <h2 className="font-display text-2xl font-extrabold tracking-tight">
            {es ? `${page.navLabel} — modelos` : `${page.navLabel} — Models`}
          </h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((p) => (
              <a key={p.slug} href={fl(`/products/${p.slug}`)} className="marine-card group flex flex-col gap-4 p-5 transition-transform hover:-translate-y-0.5">
                <img src={p.image} alt={p.name} loading="lazy" className="aspect-[4/3] w-full rounded-xl border border-border-2 object-cover" />
                <div>
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="font-display text-[17px] font-bold leading-snug">{p.name}</h3>
                    <Package size={16} className="shrink-0 text-primary" />
                  </div>
                  <p className="mt-1.5 text-[13px] leading-relaxed text-fg-2">{p.tagline}</p>
                  <p className="mt-2 text-[12.5px] font-medium text-fg-3">{p.specs}</p>
                </div>
                <p className="mt-auto flex items-center gap-1.5 text-[13.5px] font-bold text-primary group-hover:underline">
                  {es ? 'Ver plataforma' : 'View platform'} <ArrowRight size={15} className="transition-transform group-hover:translate-x-0.5" />
                </p>
              </a>
            ))}
          </div>
        </div>

        <div className="mt-14 grid gap-3 lg:grid-cols-2">
          <div className="rounded-3xl border border-border bg-bg-alt/50 p-7">
            <h2 className="font-display text-xl font-extrabold tracking-tight">{es ? '¿Qué puedes personalizar?' : 'What You Can Customize'}</h2>
            <ul className="mt-4 flex flex-col gap-2.5">
              {c.customPoints.map((p) => (
                <li key={p} className="flex items-center gap-2.5 text-[14px] font-medium text-fg-2">
                  <CheckCircle2 size={15} className="shrink-0 text-primary" /> {p}
                </li>
              ))}
            </ul>
            <p className="mt-4 text-[14px] leading-relaxed text-fg-2">{c.customBody}</p>
          </div>
          <div className="rounded-3xl border border-border bg-bg-alt/50 p-7">
            <h2 className="font-display text-xl font-extrabold tracking-tight">{es ? 'Preguntas frecuentes de la serie' : 'Series FAQ'}</h2>
            <div className="mt-4 flex flex-col gap-3">
              {page.faqs.map((f) => (
                <details key={f.q} className="group rounded-xl border border-border bg-background px-4 py-3">
                  <summary className="cursor-pointer list-none text-[14px] font-bold leading-snug">{f.q}</summary>
                  <p className="mt-2 text-[13.5px] leading-relaxed text-fg-2">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-14 rounded-3xl border border-border bg-bg-alt p-8 text-center md:p-12">
          <p className="text-[12px] font-bold uppercase tracking-[0.14em] text-primary">
            {es ? '¿Listo para fabricar esta serie bajo tu marca?' : 'Ready to manufacture this series under your brand?'}
          </p>
          <h2 className="mt-3 font-display text-2xl font-extrabold tracking-tight md:text-3xl">
            {es ? 'Empieza con tu plataforma de partida' : 'Start With Your Platform Of Choice'}
          </h2>
          <a
            href={fl(`/contact?product=${encodeURIComponent(items[0]?.slug ?? page.slug)}`)}
            className="sun-grad mt-7 inline-flex h-[46px] items-center gap-2 rounded-full px-7 text-[15px] font-bold shadow-[0_10px_30px_-8px_rgba(255,107,53,0.65)] transition-transform hover:-translate-y-px"
          >
            {es ? 'Inicia tu proyecto' : 'Start a Custom SUP Project'} <ArrowRight size={17} />
          </a>
        </div>

        {others.length > 0 && (
          <div className="mt-10 flex flex-wrap items-center gap-2">
            <span className="text-[12px] font-bold uppercase tracking-[0.12em] text-fg-3">
              {es ? 'Otras series:' : 'Other series:'}
            </span>
            {others.map((s) => (
              <a key={s.slug} href={fl(`/products/${s.slug}`)} className="rounded-full border border-border bg-background px-3.5 py-1.5 text-[13px] font-semibold text-fg-2 transition-colors hover:border-primary/40 hover:text-primary">
                {s.navLabel}
              </a>
            ))}
          </div>
        )}

        <JsonLd
          data={breadcrumbLd(origin, [
            { name: es ? 'Inicio' : 'Home', path: '/' },
            { name: es ? 'Productos' : 'Products', path: '/products' },
            { name: page.h1, path: `/products/${page.slug}` },
          ])}
        />
        <JsonLd data={itemListLd(items.map((p) => ({ name: p.name, path: `/products/${p.slug}` })))} />
        <JsonLd data={faqLd(page.faqs, locale)} />
      </section>

      <Footer theme={theme} />
    </div>
  )
}