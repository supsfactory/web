/**
 * Shared afarer catch-all logic.
 *
 * A single root splat route (`src/routes/$.tsx`) serves the ported afarer
 * content site for both prefix-less and locale-prefixed URLs (`/factory`,
 * `/es/factory`). It strips a leading locale segment before resolving the
 * path against the afarer registry.
 *
 * The heavy resolution (afarer corpus + YAML parsing) is server-only in
 * catchall.server.ts; this module keeps only the createServerFn handler, the
 * loader data shape and the client views, so the client bundle stays free of
 * the 900 KB+ content corpus.
 */

import { getRouteApi, notFound } from '@tanstack/react-router'
import { createServerFn } from '@tanstack/react-start'
import { I18nProvider } from '@/features/i18n/provider'
import { type Locale } from '@/features/i18n/locale'
import { SiteNav } from '@/components/marketing/site-nav'
import { PageHero, SectionHead } from '@/components/marketing/section-head'
import { CtaBand } from '@/components/marketing/cta'
import { Footer } from '@/components/marketing/footer'
import { JsonLd, breadcrumbLd, faqLd, itemListLd, newsArticleLd } from '@/features/seo/jsonld'
import { brandify } from './brand'
import { AferIndexProvider, type AferIndexData } from './index-data'
import { getGuide } from './guide-content'
import { FACTS } from '@/features/site/facts'
import { ArrowRight } from 'lucide-react'
import { AfarerSections, CaseStudiesIndex, ResearchIndex, collectPageFaqs } from './render/sections'
import { Markdown } from './render/markdown'
import type { AfarerArticle, AfarerCaseUse, AfarerPage, AfarerPost, AfarerProduct } from './types'

const rootRoute = getRouteApi('__root__')

/** Minimal product card for the "related platforms" strip on product pages. */
export type RelatedProduct = { slug: string; title: string; image: string; amount?: string }

/** Minimal post card for the "related news" strip on article pages. */
export type RelatedPost = { slug: string; title: string; excerpt: string; date: string }

export type CatchAllData = {
  path: string
  origin: string
  /** Locale the page is served as (from the URL prefix, defaults to en). */
  locale: Locale
  /** True when a real Spanish variant is rendered (vs an English duplicate). */
  translated: boolean
  /** True when a real Spanish variant exists for this path. */
  esTranslated: boolean
  /** Server-resolved widget index payloads for the page's sections. */
  index: AferIndexData
} & (
  | { kind: 'page'; page: AfarerPage; slug: string; title: string; description: string }
  | { kind: 'product'; product: AfarerProduct; title: string; description: string; image: string; related: RelatedProduct[] }
  | { kind: 'post'; post: AfarerPost; title: string; description: string; image: string; relatedPosts: RelatedPost[] }
  | { kind: 'article'; article: AfarerArticle; slug: string; title: string; description: string }
  | { kind: 'case'; case: AfarerCaseUse; slug: string; title: string; description: string }
  | { kind: 'guide'; slug: string; title: string; description: string }
  | { kind: 'cases-index'; title: string; description: string }
  | { kind: 'research-index'; title: string; description: string }
  | { kind: 'faq'; faqs: { q: string; a: string }[]; title: string; description: string }
)

export const afarerServerLoader = createServerFn({ method: 'GET' })
  .validator((input: { path: string; locale: string }) => input)
  .handler(async ({ data }) => {
    const { resolveCatchAll } = await import('./catchall.server')
    const { env } = await import('@/lib/env')
    const origin = new URL(env.BETTER_AUTH_URL).origin
    const resolved = resolveCatchAll(data.path, data.locale as Locale)
    if (!resolved) throw notFound()
    const d = { ...resolved, origin } as CatchAllData
    if (d.kind === 'product' || d.kind === 'post') {
      d.image = d.image.startsWith('http') ? d.image : `${origin}${d.image}`
    }
    return d
  })

/* ─────────────────────────── JSON-LD helpers ─────────────────────────── */

function articleLd(url: string, title: string, description: string, locale: Locale, dateModified?: string): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    headline: title,
    description,
    url,
    dateModified,
    ...(locale === 'es' ? { inLanguage: 'es' } : {}),
    publisher: { '@type': 'Organization', name: 'Afarer' },
  }
}

/** TechArticle JSON-LD for the /research/* long-form articles (P2-1). */
function researchArticleLd(origin: string, path: string, title: string, description: string, page: AfarerPage): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    headline: title,
    description,
    url: `${origin}${path}`,
    author: { '@type': 'Organization', name: 'SUPsfactory' },
    publisher: { '@type': 'Organization', name: 'SUPsfactory' },
    datePublished: page.meta?.datePublished,
    dateModified: page.meta?.dateModified,
  }
}

function productLd(origin: string, product: AfarerProduct, locale: Locale): Record<string, unknown> {
  const abs = (u?: string) => (u ? (u.startsWith('http') ? u : `${origin}${u}`) : undefined)
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.title,
    sku: product.sku,
    description: brandify(product.description ?? product.summary ?? ''),
    image: abs(product.image) ? [abs(product.image)!] : undefined,
    brand: { '@type': 'Brand', name: 'Afarer' },
    manufacturer: { '@type': 'Organization', name: 'Qingdao Vatrad Group Co., Ltd.' },
    ...(locale === 'es' ? { inLanguage: 'es' } : {}),
    additionalProperty: (product.specs ?? []).map((s) => ({
      '@type': 'PropertyValue',
      name: s.label,
      value: s.value,
    })),
    offers: product.price
      ? {
          '@type': 'Offer',
          price: product.price.amount,
          priceCurrency: product.price.currency,
          availability: product.inStock === false ? 'https://schema.org/OutOfStock' : 'https://schema.org/InStock',
          url: `${origin}${locale === 'es' ? '/es' : ''}/products/${product.slug}`,
        }
      : undefined,
  }
}

/* ─────────────────────────── shell + views ─────────────────────────── */

export function AfarerCatchAll({ data }: { data: CatchAllData }) {
  const { theme, user } = rootRoute.useLoaderData()

  const body = (() => {
    switch (data.kind) {
      case 'page': {
        const page = data.page
        const faqs = collectPageFaqs(page)
        return (
          <>
            <AfarerSections page={page} />
            <JsonLd
              data={breadcrumbLd(data.origin, [
                { name: data.locale === 'es' ? 'Inicio' : 'Home', path: '/' },
                { name: data.title, path: data.path },
              ])}
            />
            {data.path.startsWith('/research/') && (
              <JsonLd data={researchArticleLd(data.origin, data.path, data.title, data.description, page)} />
            )}
            {page.meta?.dateModified && (
              <JsonLd
                data={{
                  '@context': 'https://schema.org',
                  '@type': 'WebPage',
                  url: `${data.origin}${data.path}`,
                  dateModified: page.meta.dateModified,
                }}
              />
            )}
            {faqs.length > 0 && <JsonLd data={faqLd(faqs, data.locale)} />}
          </>
        )
      }
      case 'product':
        return (
          <>
            <ProductView product={data.product} related={data.related} origin={data.origin} locale={data.locale} />
            <CtaBand productSlug={data.product.slug} />
          </>
        )
      case 'post':
        return (
          <>
            <PostView post={data.post} relatedPosts={data.relatedPosts} origin={data.origin} path={data.path} locale={data.locale} />
            <CtaBand />
          </>
        )
      case 'article':
        return <ArticleView article={data.article} origin={data.origin} title={data.title} path={data.path} locale={data.locale} />
      case 'case':
        return <CaseView c={data.case} origin={data.origin} title={data.title} path={data.path} locale={data.locale} />
      case 'guide':
        return <GuideView slug={data.slug} origin={data.origin} path={data.path} locale={data.locale} />
      case 'faq':
        return <FaqView faqs={data.faqs} origin={data.origin} path={data.path} translated={data.translated} locale={data.locale} />
      case 'cases-index':
        return (
          <>
            <PageHero
              kicker={data.translated ? 'Casos de éxito' : 'Case Studies'}
              title={data.translated ? 'Casos de éxito afarer' : 'afarer Case Studies'}
              sub={data.translated ? 'Cómo lanzan y escalan su marca las marcas, resorts y operadores con nuestra fábrica.' : 'How brands, resorts and operators launch and scale with our factory.'}
            />
            <CaseStudiesIndex />
            {data.index.cases && data.index.cases.length > 0 && (
              <JsonLd
                data={itemListLd(data.index.cases.map((c) => ({ name: c.title, path: `/evidence/case-studies/${c.slug}` })))}
              />
            )}
          </>
        )
      case 'research-index':
        return (
          <>
            <PageHero
              kicker={data.translated ? 'Centro de conocimiento' : 'Knowledge Center'}
              title={data.translated ? 'Investigación y guías técnicas' : 'Research & Technical Guides'}
              sub={data.translated ? 'Investigación técnica en profundidad sobre materiales, construcción, estándares de seguridad y fabricación de SUP.' : 'In-depth technical research on SUP materials, construction, safety standards and manufacturing.'}
            />
            <ResearchIndex />
            {data.index.topics && data.index.topics.length > 0 && (
              <JsonLd
                data={itemListLd(data.index.topics.map((t) => ({ name: t.slug.replace(/-/g, ' '), path: `/research/${t.slug}` })))}
              />
            )}
          </>
        )
    }
  })()

  return (
    <I18nProvider locale={data.locale}>
      <AferIndexProvider value={data.index}>
        <div className="min-h-screen bg-background text-foreground">
          <SiteNav theme={theme} loggedIn={!!user} />
          {body}
          <Footer theme={theme} />
        </div>
      </AferIndexProvider>
    </I18nProvider>
  )
}

function ProductView({ product, related, origin, locale }: { product: AfarerProduct; related: RelatedProduct[]; origin: string; locale: Locale }) {
  const specs = product.specs ?? []
  const gallery = product.gallery?.length ? product.gallery : product.image ? [{ url: product.image, alt: product.title }] : []
  const fl = (p: string): string => (locale === 'en' ? p : `/es${p}`)
  const es = locale === 'es'
  return (
    <>
      <PageHero kicker={product.category ?? (locale === 'es' ? 'Producto' : 'Product')} title={product.title} sub={brandify(product.summary ?? '')} />
      <section className="mx-auto max-w-6xl px-5 py-14 md:px-7 md:py-16">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_1fr]">
          <div className="grid gap-3">
            {gallery.map((img, i) => (
              <img key={i} src={img.url} alt={img.alt ?? product.title} loading={i === 0 ? 'eager' : 'lazy'} fetchPriority={i === 0 ? 'high' : 'auto'} className="w-full rounded-2xl border border-border-2 object-cover" />
            ))}
          </div>
          <div>
            <div className="flex items-center gap-3">
              <span className="pill border-primary/25! bg-soft! text-primary!">{product.sku}</span>
              {product.price && (
                <span className="font-display text-2xl font-extrabold text-primary">
                  ${brandify(product.price.amount)} {product.price.currency}
                </span>
              )}
            </div>
            {product.price?.note && <p className="mt-2 text-[13px] text-fg-3">{brandify(product.price.note)}</p>}
            {product.price && (
              <p className="mt-1 text-[12px] font-semibold text-fg-3">
                {locale === 'es' ? 'Precio de referencia de venta al público — precio de fábrica OEM según tu especificación' : 'Retail reference price — factory OEM pricing from your specification'}
              </p>
            )}
            {product.description && <p className="mt-4 text-[15px] leading-relaxed text-fg-2">{brandify(product.description)}</p>}
            {product.tags && product.tags.length > 0 && (
              <div className="mt-4 flex flex-wrap gap-1.5">
                {product.tags.map((t) => (
                  <span key={t} className="pill">{t}</span>
                ))}
              </div>
            )}
            {specs.length > 0 && (
              <div className="mt-6 overflow-hidden rounded-2xl border border-border">
                <table className="w-full text-left text-[13.5px]">
                  <tbody className="divide-y divide-border">
                    {specs.map((s, i) => (
                      <tr key={i} className="odd:bg-bg-alt/60">
                        <th className="w-2/5 px-4 py-3 font-semibold">{brandify(s.label)}</th>
                        <td className="px-4 py-3 text-fg-2">{brandify(s.value)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
            <JsonLd
              data={breadcrumbLd(origin, [
                { name: locale === 'es' ? 'Inicio' : 'Home', path: '/' },
                { name: locale === 'es' ? 'Productos' : 'Products', path: '/products' },
                { name: product.title, path: `/products/${product.slug}` },
              ])}
            />
            <JsonLd data={productLd(origin, product, locale)} />

            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              <div className="marine-card p-4">
                <p className="text-[11.5px] font-bold uppercase tracking-[0.12em] text-fg-3">
                  {es ? 'Cantidad mínima' : 'Minimum order'}
                </p>
                <p className="mt-1.5 text-[13.5px] font-semibold leading-snug">
                  {es
                    ? `${FACTS.moq.standardRun} lote OEM estándar · ${FACTS.moq.trialStandard} prueba · ${FACTS.moq.customMould} molde a medida`
                    : `${FACTS.moq.standardRun} standard OEM batch · ${FACTS.moq.trialStandard} trial · ${FACTS.moq.customMould} custom mould`}
                </p>
              </div>
              <div className="marine-card p-4">
                <p className="text-[11.5px] font-bold uppercase tracking-[0.12em] text-fg-3">
                  {es ? 'Plazos' : 'Timeline'}
                </p>
                <p className="mt-1.5 text-[13.5px] font-semibold leading-snug">
                  {es
                    ? `Muestras en ${FACTS.sampleTime} · producción en ${FACTS.leadTime} tras PO y depósito`
                    : `Samples in ${FACTS.sampleTime} · production in ${FACTS.leadTime} after PO and deposit`}
                </p>
              </div>
              <div className="marine-card p-4">
                <p className="text-[11.5px] font-bold uppercase tracking-[0.12em] text-fg-3">
                  {es ? 'Control de calidad' : 'Quality control'}
                </p>
                <p className="mt-1.5 text-[13.5px] font-semibold leading-snug">
                  {es
                    ? `Lista de ${FACTS.assemblyChecklist} · prueba de presión ${FACTS.pressureTest}`
                    : `${FACTS.assemblyChecklist} checklist · ${FACTS.pressureTest} pressure test`}
                </p>
              </div>
            </div>

            <div className="mt-5 flex flex-wrap items-center gap-3 rounded-2xl border border-border-2 bg-bg-alt/60 px-5 py-4">
              <p className="flex-1 text-[13.5px] leading-snug text-fg-2">
                {es
                  ? '¿Listo para fabricar esta plataforma bajo tu marca?'
                  : 'Ready to manufacture this platform under your own brand?'}
              </p>
              <a
                href={fl(`/contact?product=${encodeURIComponent(product.slug)}`)}
                className="sun-grad inline-flex h-[40px] items-center gap-1.5 rounded-full px-6 text-[13.5px] font-bold transition-transform hover:-translate-y-0.5"
              >
                {es ? 'Inicia tu proyecto' : 'Start a Custom SUP Project'} <ArrowRight size={15} />
              </a>
            </div>
          </div>
        </div>
        <div className="mx-auto mt-12 max-w-3xl">
          <Markdown text={brandify(product.body)} />
        </div>
        {related.length > 0 && (
          <div className="mx-auto mt-12 max-w-3xl">
            <h2 className="font-display text-2xl font-extrabold tracking-tight">
              {es ? 'Plataformas relacionadas' : 'Related Platforms'}
            </h2>
            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              {related.map((r) => (
                <a
                  key={r.slug}
                  href={fl(`/products/${r.slug}`)}
                  className="marine-card group flex flex-col overflow-hidden p-0 transition-colors hover:border-primary/40"
                >
                  {r.image && (
                    <img src={r.image} alt={r.title} loading="lazy" className="aspect-[4/3] w-full object-cover" />
                  )}
                  <div className="flex flex-1 flex-col gap-1 p-4">
                    <p className="text-[13.5px] font-bold leading-snug">{r.title}</p>
                    {r.amount && <p className="text-[12.5px] font-semibold text-primary">${r.amount}</p>}
                  </div>
                </a>
              ))}
            </div>
          </div>
        )}
        {productFaqs(product, es).length > 0 && (
          <div className="mx-auto mt-12 max-w-3xl">
            <h2 className="font-display text-2xl font-extrabold tracking-tight">
              {es ? 'Preguntas frecuentes' : 'Frequently Asked Questions'}
            </h2>
            <div className="mt-6 flex flex-col gap-3">
              {productFaqs(product, es).map((f, i) => (
                <details key={i} className="marine-card group px-5 py-4" open={i === 0}>
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-[15px] font-semibold marker:hidden">
                    <span>{f.q}</span>
                    <span className="text-fg-3 transition-transform group-open:rotate-45">+</span>
                  </summary>
                  <p className="mt-3 text-[14px] leading-relaxed text-fg-2">{f.a}</p>
                </details>
              ))}
            </div>
            <JsonLd data={faqLd(productFaqs(product, es), locale)} />
          </div>
        )}

        {/* related services — product pages must link into the OEM/ODM funnel */}
        <div className="mx-auto mt-12 max-w-3xl">
          <h2 className="font-display text-2xl font-extrabold tracking-tight">
            {es ? 'Producción bajo tu marca' : 'Produce This Board Under Your Brand'}
          </h2>
          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            <a href={fl('/oem-odm-manufacturer')} className="marine-card p-5 transition-colors hover:border-primary/40">
              <p className="text-[14px] font-bold">{es ? 'OEM / ODM' : 'OEM / ODM Manufacturing'}</p>
              <p className="mt-1.5 text-[12.5px] leading-snug text-fg-3">
                {es ? 'Fabricación según tu especificación y muestras' : 'Manufacture to your spec, from sample to batch'}
              </p>
            </a>
            <a href={fl('/product-development')} className="marine-card p-5 transition-colors hover:border-primary/40">
              <p className="text-[14px] font-bold">{es ? 'Desarrollo de producto SUP' : 'SUP Product Development'}</p>
              <p className="mt-1.5 text-[12.5px] leading-snug text-fg-3">
                {es ? 'Proceso de desarrollo en 6 pasos — ingeniería, prototipos, moldes y producción' : '6-step development pipeline — engineering, prototyping, moulds and mass production'}
              </p>
            </a>
            <a href={fl('/solutions/private-label-sup')} className="marine-card p-5 transition-colors hover:border-primary/40">
              <p className="text-[14px] font-bold">{es ? 'Marca privada' : 'Private Label'}</p>
              <p className="mt-1.5 text-[12.5px] leading-snug text-fg-3">
                {es ? 'Tu logo en plataformas probadas, desde 50 uds.' : 'Your brand on proven platforms, from 50 pcs'}
              </p>
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

/** Product FAQ pool: product-specific entries + shared fallbacks (≥5 total). */
function productFaqs(product: AfarerProduct, es: boolean): { q: string; a: string }[] {
  const specific = product.faqs ?? []
  const pool: { q: string; a: string }[] = es
    ? [
        {
          q: '¿Cuál es el pedido mínimo para personalizar esta tabla?',
          a: `El MOQ por diseño es de ${FACTS.moq.standardRun} para el lote OEM estándar, con pruebas desde ${FACTS.moq.trialStandard} y ${FACTS.moq.customMould} para un molde a medida.`,
        },
        {
          q: '¿Cuánto tardan las muestras y la producción?',
          a: `Las muestras tardan ${FACTS.sampleTime}; la producción en serie se completa en ${FACTS.leadTime} tras confirmar el pedido y el depósito.`,
        },
        {
          q: '¿Puedo cambiar los colores, el arte y el logo?',
          a: 'Sí — gráficos, colores, EVA, logotipo, embalaje y accesorios se personalizan en cada plataforma. Comparte tu logo y te haremos una prueba visual antes de la producción.',
        },
        {
          q: '¿Cómo se controla la calidad antes del envío?',
          a: `Cada tabla pasa por una lista de verificación de ${FACTS.assemblyChecklist} y una prueba de presión de ${FACTS.pressureTest} antes de empaquetar; las piezas que superen una caída de presión mayor al 5% se rechazan automáticamente.`,
        },
      ]
    : [
        {
          q: 'What is the minimum order to customize this board?',
          a: `MOQ is ${FACTS.moq.standardRun} per design for the standard OEM batch, with trial runs from ${FACTS.moq.trialStandard} and ${FACTS.moq.customMould} for a custom mould.`,
        },
        {
          q: 'How long do samples and production take?',
          a: `Samples ship in ${FACTS.sampleTime}; batch production completes in ${FACTS.leadTime} after confirmed PO and deposit.`,
        },
        {
          q: 'Can I change colors, artwork and the logo?',
          a: 'Yes — graphics, colors, EVA traction, logo, packaging and accessories are all customizable on every platform. Share your logo and we produce a visual proof before production.',
        },
        {
          q: 'How is quality controlled before shipment?',
          a: `Every board passes a ${FACTS.assemblyChecklist} assembly checklist and a ${FACTS.pressureTest} pressure test before packing; units exceeding a 5% pressure drop are auto-rejected.`,
        },
      ]
  return [...specific, ...pool]
}

function PostView({ post, relatedPosts, origin, path, locale }: { post: AfarerPost; relatedPosts: RelatedPost[]; origin: string; path: string; locale: Locale }) {
  return (
    <>
      <PageHero kicker={post.category ?? (locale === 'es' ? 'Noticias' : 'News')} title={post.title} sub={post.excerpt ?? ''} />
      <article className="mx-auto max-w-3xl px-5 py-14 md:px-7">
        <div className="flex flex-wrap items-center gap-3 text-[12.5px] font-semibold text-fg-3">
          <span>{post.date.slice(0, 10)}</span>
          {post.author && <span>· {post.author}</span>}
          {post.tags && post.tags.length > 0 && (
            <span className="flex flex-wrap gap-1.5">
              {post.tags.map((t) => (
                <span key={t} className="pill">{t}</span>
              ))}
            </span>
          )}
        </div>
        {post.image && <img src={post.image} alt={post.title} loading="lazy" className="mt-6 w-full rounded-2xl border border-border-2 object-cover" />}
        <Markdown text={brandify(post.body)} className="mt-4" />
        <JsonLd
          data={breadcrumbLd(origin, [
            { name: locale === 'es' ? 'Inicio' : 'Home', path: '/' },
            { name: locale === 'es' ? 'Noticias' : 'News', path: '/news' },
            { name: post.title, path },
          ])}
        />
        <JsonLd
          data={newsArticleLd({
            origin,
            title: post.title,
            description: post.excerpt ?? '',
            image: post.image,
            url: `${origin}${path}`,
            datePublished: post.date,
            author: post.author,
            inLanguage: locale === 'es' ? 'es' : 'en',
          })}
        />
        {relatedPosts.length > 0 && (
          <div className="mt-12">
            <h2 className="font-display text-xl font-extrabold tracking-tight">
              {locale === 'es' ? 'Lecturas relacionadas' : 'Related Reading'}
            </h2>
            <div className="mt-5 flex flex-col gap-3">
              {relatedPosts.map((r) => (
                <a
                  key={r.slug}
                  href={`${locale === 'es' ? '/es' : ''}/news/${r.slug}`}
                  className="marine-card p-5 transition-colors hover:border-primary/40"
                >
                  <p className="text-[12px] font-semibold uppercase tracking-wide text-fg-3">{r.date}</p>
                  <p className="mt-1 text-[15px] font-bold leading-snug">{r.title}</p>
                  {r.excerpt && <p className="mt-1.5 line-clamp-2 text-[13px] leading-snug text-fg-2">{r.excerpt}</p>}
                </a>
              ))}
            </div>
          </div>
        )}
        <ContentCta locale={locale} />
      </article>
    </>
  )
}

function ArticleView({ article, origin, title, path, locale }: { article: AfarerArticle; origin: string; title: string; path: string; locale: Locale }) {
  return (
    <>
      <PageHero kicker={locale === 'es' ? 'Tecnología' : 'Technology'} title={title} sub={brandify(article.summary ?? '')} />
      <article className="mx-auto max-w-3xl px-5 py-14 md:px-7">
        {article.description && <p className="text-[15px] leading-relaxed text-fg-2">{brandify(article.description)}</p>}
        {article.dateModified && (
          <p className="mt-4 text-[12.5px] font-medium tracking-wide text-fg-3">{locale === 'es' ? 'Especificaciones verificadas:' : 'Specifications verified:'} {article.dateModified}</p>
        )}
        <Markdown text={brandify(article.body)} className="mt-4" />
        <JsonLd
          data={breadcrumbLd(origin, [
            { name: locale === 'es' ? 'Inicio' : 'Home', path: '/' },
            { name: locale === 'es' ? 'Tecnología' : 'Technology', path: '/technology' },
            { name: title, path },
          ])}
        />
        <JsonLd data={articleLd(`${origin}/technology/${article.slug}`, title, article.description ?? article.summary ?? '', locale, article.dateModified)} />
        <ContentCta locale={locale} />
      </article>
    </>
  )
}

function CaseView({ c, origin, title, path, locale }: { c: AfarerCaseUse; origin: string; title: string; path: string; locale: Locale }) {
  return (
    <>
      <PageHero kicker={c.category ?? (locale === 'es' ? 'Caso de estudio' : 'Case Study')} title={title} sub={brandify(c.summary ?? '')} />
      <article className="mx-auto max-w-3xl px-5 py-14 md:px-7">
        <div className="flex flex-wrap items-center gap-2 text-[12.5px] font-semibold text-fg-3">
          {c.environment && <span className="pill">{c.environment}</span>}
          {c.skill && <span className="pill">{c.skill}</span>}
          {c.products && c.products.length > 0 && (
            <span className="flex flex-wrap gap-1.5">
              {c.products.map((p) => (
                <span key={p} className="pill">{p}</span>
              ))}
            </span>
          )}
        </div>
        {c.description && <p className="mt-5 text-[15px] leading-relaxed text-fg-2">{brandify(c.description)}</p>}
        <Markdown text={brandify(c.body)} className="mt-4" />
        <JsonLd
          data={breadcrumbLd(origin, [
            { name: locale === 'es' ? 'Inicio' : 'Home', path: '/' },
            { name: locale === 'es' ? 'Casos de estudio' : 'Case Studies', path: '/evidence/case-studies' },
            { name: title, path },
          ])}
        />
        <JsonLd data={articleLd(`${origin}${path}`, title, c.summary ?? '', locale)} />
        <ContentCta locale={locale} />
      </article>
    </>
  )
}

function GuideView({ slug, origin, path, locale }: { slug: string; origin: string; path: string; locale: Locale }) {
  const guide = getGuide(`/guides/${slug}`, locale)
  if (!guide) return null
  return (
    <>
      <PageHero kicker={locale === 'es' ? 'Guía' : 'Guide'} title={guide.title} />
      <article className="mx-auto max-w-3xl px-5 py-14 md:px-7">
        {guide.intro.map((p, i) => (
          <p key={i} className="mt-4 text-[15px] leading-relaxed text-fg-2">{brandify(p)}</p>
        ))}
        {guide.sections.map((s, i) => (
          <section key={i}>
            <h2 className="mt-10 flex items-center gap-3 font-display text-xl font-extrabold tracking-tight">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/12 font-display text-[14px] font-extrabold text-primary">{i + 1}</span>
              {s.title}
            </h2>
            <p className="mt-3 text-[14.5px] leading-relaxed text-fg-2">{brandify(s.body)}</p>
          </section>
        ))}
        {guide.faqs.length > 0 && (
          <section className="mt-12">
            <SectionHead kicker="FAQ" title={locale === 'es' ? 'Respuestas rápidas' : 'Quick Answers'} />
            <div className="mt-6 space-y-3">
              {guide.faqs.map((f, i) => (
                <details key={i} className="marine-card group px-5 py-4">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-[14.5px] font-semibold marker:hidden">
                    {f.q}
                    <span className="text-fg-3 transition-transform group-open:rotate-45">+</span>
                  </summary>
                  <p className="mt-3 text-[14px] leading-relaxed text-fg-2">{brandify(f.a)}</p>
                </details>
              ))}
            </div>
          </section>
        )}
        <JsonLd
          data={breadcrumbLd(origin, [
            { name: locale === 'es' ? 'Inicio' : 'Home', path: '/' },
            { name: locale === 'es' ? 'Guías' : 'Guides', path: '/knowledge' },
            { name: guide.title, path },
          ])}
        />
        <JsonLd data={articleLd(`${origin}/guides/${guide.slug}`, guide.title, guide.intro[0] ?? '', locale)} />
        {guide.faqs.length > 0 && <JsonLd data={faqLd(guide.faqs, locale)} />}
        <ContentCta locale={locale} />
      </article>
    </>
  )
}

/** Content → inquiry conversion block appended to news, tech articles, case studies and guides. */
function ContentCta({ locale }: { locale: Locale }) {
  const es = locale === 'es'
  const fl = (p: string): string => (es ? `/es${p}` : p)
  return (
    <div className="mt-12 rounded-2xl border border-border-2 bg-bg-alt p-7 text-center">
      <p className="font-display text-xl font-extrabold">
        {es ? '¿Lo fabricamos con tu propia marca?' : 'Need this built under your own brand?'}
      </p>
      <p className="mx-auto mt-2 max-w-md text-[13.5px] leading-relaxed text-fg-2">
        {es
          ? 'Cuéntanos tu proyecto y te responderemos con MOQ, tiempos de muestra y plazos para tu mercado — sin compromiso.'
          : 'Tell us your project and we reply with MOQ, sample timing and lead times for your market — no commitment.'}
      </p>
      <div className="mt-5 flex flex-wrap justify-center gap-3">
        <a
          href={fl('/contact')}
          className="sun-grad inline-flex h-[40px] items-center gap-1.5 rounded-full px-6 text-[13.5px] font-bold transition-transform hover:-translate-y-0.5"
        >
          {es ? 'Inicia tu proyecto' : 'Start a Custom SUP Project'} <ArrowRight size={15} />
        </a>
        <a
          href={fl('/products')}
          className="inline-flex h-[40px] items-center rounded-full border border-border-2 px-6 text-[13.5px] font-bold transition-colors hover:border-primary/40 hover:text-primary"
        >
          {es ? 'Ver plataformas' : 'Browse Platforms'}
        </a>
      </div>
    </div>
  )
}

function FaqView({ faqs, origin, path, translated, locale }: { faqs: { q: string; a: string }[]; origin: string; path: string; translated: boolean; locale: Locale }) {
  return (
    <>
      <PageHero
        kicker="FAQ"
        title={translated ? 'Preguntas frecuentes' : 'Frequently Asked Questions'}
        sub={translated
          ? 'Las preguntas que recibimos antes de cada proyecto SUP OEM/ODM: materiales, certificaciones, pedido mínimo y logística.'
          : 'Questions we hear before every SUP OEM/ODM project — materials, certifications, MOQ and logistics.'}
      />
      <section className="mx-auto max-w-3xl px-5 py-14 md:px-7">
        <div className="flex flex-col gap-3">
          {faqs.map((f, i) => (
            <details key={i} className="marine-card group px-5 py-4" open={i === 0}>
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-[15px] font-semibold marker:hidden">
                <span>{f.q}</span>
                <span className="text-fg-3 transition-transform group-open:rotate-45">+</span>
              </summary>
              <p className="mt-3 text-[14px] leading-relaxed text-fg-2">{f.a}</p>
            </details>
          ))}
        </div>
      </section>
      <div className="mx-auto max-w-3xl px-5 pb-4">
        <ContentCta locale={locale} />
      </div>
      <JsonLd data={breadcrumbLd(origin, [{ name: locale === 'es' ? 'Inicio' : 'Home', path: '/' }, { name: 'FAQ', path }])} />
      <JsonLd data={faqLd(faqs, locale)} />
    </>
  )
}
