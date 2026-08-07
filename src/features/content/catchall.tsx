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
import { JsonLd, breadcrumbLd, faqLd, newsArticleLd } from '@/features/seo/jsonld'
import { brandify } from './brand'
import { AferIndexProvider, type AferIndexData } from './index-data'
import { getGuide } from './guide-content'
import { AfarerSections, CaseStudiesIndex, ResearchIndex, collectPageFaqs } from './render/sections'
import { Markdown } from './render/markdown'
import type { AfarerArticle, AfarerCaseUse, AfarerPage, AfarerPost, AfarerProduct } from './types'

const rootRoute = getRouteApi('__root__')

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
  | { kind: 'product'; product: AfarerProduct; title: string; description: string; image: string }
  | { kind: 'post'; post: AfarerPost; title: string; description: string; image: string }
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
    return { ...resolved, origin } as CatchAllData
  })

/* ─────────────────────────── JSON-LD helpers ─────────────────────────── */

function articleLd(origin: string, title: string, description: string): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    headline: title,
    description,
    url: `${origin}/technology/${title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`,
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

function productLd(origin: string, product: AfarerProduct): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.title,
    sku: product.sku,
    description: brandify(product.description ?? product.summary ?? ''),
    image: product.image ? [product.image] : undefined,
    offers: product.price
      ? {
          '@type': 'Offer',
          price: product.price.amount,
          priceCurrency: product.price.currency,
          availability: product.inStock === false ? 'https://schema.org/OutOfStock' : 'https://schema.org/InStock',
          url: `${origin}/products/${product.slug}`,
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
                { name: 'Home', path: '/' },
                { name: data.title, path: data.path },
              ])}
            />
            {data.path.startsWith('/research/') && (
              <JsonLd data={researchArticleLd(data.origin, data.path, data.title, data.description, page)} />
            )}
            {faqs.length > 0 && <JsonLd data={faqLd(faqs)} />}
          </>
        )
      }
      case 'product':
        return (
          <>
            <ProductView product={data.product} origin={data.origin} />
            <CtaBand />
          </>
        )
      case 'post':
        return (
          <>
            <PostView post={data.post} origin={data.origin} path={data.path} />
            <CtaBand />
          </>
        )
      case 'article':
        return <ArticleView article={data.article} origin={data.origin} title={data.title} path={data.path} />
      case 'case':
        return <CaseView c={data.case} origin={data.origin} title={data.title} path={data.path} />
      case 'guide':
        return <GuideView slug={data.slug} origin={data.origin} path={data.path} />
      case 'faq':
        return <FaqView faqs={data.faqs} origin={data.origin} path={data.path} translated={data.translated} />
      case 'cases-index':
        return (
          <>
            <PageHero
              kicker={data.translated ? 'Casos de éxito' : 'Case Studies'}
              title={data.translated ? 'Casos de éxito afarer' : 'afarer Case Studies'}
              sub={data.translated ? 'Cómo lanzan y escalan su marca las marcas, resorts y operadores con nuestra fábrica.' : 'How brands, resorts and operators launch and scale with our factory.'}
            />
            <CaseStudiesIndex />
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

function ProductView({ product, origin }: { product: AfarerProduct; origin: string }) {
  const specs = product.specs ?? []
  const gallery = product.gallery?.length ? product.gallery : product.image ? [{ url: product.image, alt: product.title }] : []
  return (
    <>
      <PageHero kicker={product.category ?? 'Product'} title={product.title} sub={brandify(product.summary ?? '')} />
      <section className="mx-auto max-w-6xl px-5 py-14 md:px-7 md:py-16">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_1fr]">
          <div className="grid gap-3">
            {gallery.map((img, i) => (
              <img key={i} src={img.url} alt={img.alt ?? product.title} loading={i === 0 ? 'eager' : 'lazy'} className="w-full rounded-2xl border border-border-2 object-cover" />
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
                { name: 'Home', path: '/' },
                { name: 'Products', path: '/products' },
                { name: product.title, path: `/products/${product.slug}` },
              ])}
            />
            <JsonLd data={productLd(origin, product)} />
          </div>
        </div>
        <div className="mx-auto mt-12 max-w-3xl">
          <Markdown text={brandify(product.body)} />
        </div>
      </section>
    </>
  )
}

function PostView({ post, origin, path }: { post: AfarerPost; origin: string; path: string }) {
  return (
    <>
      <PageHero kicker={post.category ?? 'News'} title={post.title} sub={post.excerpt ?? ''} />
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
            { name: 'Home', path: '/' },
            { name: 'News', path: '/news' },
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
          })}
        />
      </article>
    </>
  )
}

function ArticleView({ article, origin, title, path }: { article: AfarerArticle; origin: string; title: string; path: string }) {
  return (
    <>
      <PageHero kicker="Technology" title={title} sub={brandify(article.summary ?? '')} />
      <article className="mx-auto max-w-3xl px-5 py-14 md:px-7">
        {article.description && <p className="text-[15px] leading-relaxed text-fg-2">{brandify(article.description)}</p>}
        <Markdown text={brandify(article.body)} className="mt-4" />
        <JsonLd
          data={breadcrumbLd(origin, [
            { name: 'Home', path: '/' },
            { name: 'Technology', path: '/technology' },
            { name: title, path },
          ])}
        />
        <JsonLd data={articleLd(origin, title, article.description ?? article.summary ?? '')} />
      </article>
    </>
  )
}

function CaseView({ c, origin, title, path }: { c: AfarerCaseUse; origin: string; title: string; path: string }) {
  return (
    <>
      <PageHero kicker={c.category ?? 'Case Study'} title={title} sub={brandify(c.summary ?? '')} />
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
            { name: 'Home', path: '/' },
            { name: 'Case Studies', path: '/evidence/case-studies' },
            { name: title, path },
          ])}
        />
        <JsonLd data={articleLd(origin, title, c.summary ?? '')} />
      </article>
    </>
  )
}

function GuideView({ slug, origin, path }: { slug: string; origin: string; path: string }) {
  const guide = getGuide(`/guides/${slug}`)
  if (!guide) return null
  return (
    <>
      <PageHero kicker="Guide" title={guide.title} />
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
            <SectionHead kicker="FAQ" title="Quick Answers" />
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
            { name: 'Home', path: '/' },
            { name: 'Guides', path: '/knowledge' },
            { name: guide.title, path },
          ])}
        />
        <JsonLd data={articleLd(origin, guide.title, guide.intro[0] ?? '')} />
        {guide.faqs.length > 0 && <JsonLd data={faqLd(guide.faqs)} />}
      </article>
    </>
  )
}

function FaqView({ faqs, origin, path, translated }: { faqs: { q: string; a: string }[]; origin: string; path: string; translated: boolean }) {
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
      <JsonLd data={breadcrumbLd(origin, [{ name: 'Home', path: '/' }, { name: 'FAQ', path }])} />
      <JsonLd data={faqLd(faqs)} />
    </>
  )
}
