/**
 * Shared afarer catch-all logic.
 *
 * A single root splat route (`src/routes/$.tsx`) serves the ported afarer
 * content site for both prefix-less and locale-prefixed URLs (`/factory`,
 * `/zh/factory`). It strips a leading locale segment before resolving the
 * path against the afarer registry. All server loading + views live here so
 * the route file stays thin.
 */

import { getRouteApi, notFound } from '@tanstack/react-router'
import { createServerFn } from '@tanstack/react-start'
import { I18nProvider } from '@/features/i18n/provider'
import { defaultLocale } from '@/features/i18n/locale'
import { SiteNav } from '@/components/marketing/site-nav'
import { PageHero, SectionHead } from '@/components/marketing/section-head'
import { CtaBand } from '@/components/marketing/cta'
import { Footer } from '@/components/marketing/footer'
import { getNonce } from '@/lib/csp'
import { OG_IMAGE } from '@/features/seo/seo'
import { getAfarerPage, getAfarerProduct, getNewsPost, getTechArticle, getCaseUse, brandify } from './loader'
import { getGuide } from './guide-content'
import { AfarerSections, CaseStudiesIndex, ResearchIndex } from './render/sections'
import { Markdown } from './render/markdown'
import type { AfarerProduct, AfarerPost } from './types'

const rootRoute = getRouteApi('__root__')

export type CatchAllData =
  | { kind: 'page'; path: string; origin: string; slug: string; title: string; description: string }
  | { kind: 'product'; path: string; origin: string; product: AfarerProduct; title: string; description: string; image: string }
  | { kind: 'post'; path: string; origin: string; post: AfarerPost; title: string; description: string; image: string }
  | { kind: 'article'; path: string; origin: string; slug: string; title: string; description: string }
  | { kind: 'case'; path: string; origin: string; slug: string; title: string; description: string }
  | { kind: 'guide'; path: string; origin: string; slug: string; title: string; description: string }
  | { kind: 'cases-index'; path: string; origin: string; title: string; description: string }
  | { kind: 'research-index'; path: string; origin: string; title: string; description: string }

const slugOf = (path: string): string => path.split('/').filter(Boolean).pop() ?? ''

export function resolveCatchAll(path: string): CatchAllData | null {
  const page = getAfarerPage(path)
  if (page) {
    return {
      kind: 'page',
      path: page.path,
      slug: page.slug,
      title: brandify(page.meta?.title ?? `${page.label} — SUPsfactory`),
      description: brandify(page.meta?.description ?? ''),
      origin: '',
    }
  }
  if (path.startsWith('/products/')) {
    const product = getAfarerProduct(slugOf(path))
    if (product) {
      return {
        kind: 'product',
        path,
        product,
        title: brandify(product.metadata?.title ?? `${product.title} — SUPsfactory`),
        description: brandify(product.metadata?.description ?? product.description ?? product.summary ?? ''),
        image: product.image ?? OG_IMAGE,
        origin: '',
      }
    }
  }
  if (path.startsWith('/news/')) {
    const post = getNewsPost(slugOf(path))
    if (post) {
      return {
        kind: 'post',
        path,
        post,
        title: brandify(post.metadata?.title ?? `${post.title} — SUPsfactory`),
        description: brandify(post.metadata?.description ?? post.excerpt ?? ''),
        image: post.image ?? OG_IMAGE,
        origin: '',
      }
    }
  }
  if (path.startsWith('/technology/')) {
    const article = getTechArticle(slugOf(path))
    if (article) {
      return {
        kind: 'article',
        path,
        slug: article.slug,
        title: brandify(`${article.title} — SUPsfactory`),
        description: brandify(article.description ?? article.summary ?? ''),
        origin: '',
      }
    }
  }
  if (path.startsWith('/evidence/case-studies/')) {
    const c = getCaseUse(slugOf(path))
    if (c) {
      return {
        kind: 'case',
        path,
        slug: c.slug,
        title: brandify(`${c.title} — SUPsfactory`),
        description: brandify(c.description ?? c.summary ?? ''),
        origin: '',
      }
    }
  }
  if (path === '/evidence/case-studies')
    return { kind: 'cases-index', path, origin: '', title: 'Case Studies — SUPsfactory', description: 'How brands, resorts and operators launch and scale with our factory.' }
  if (path === '/research')
    return { kind: 'research-index', path, origin: '', title: 'Research & Technical Guides — SUPsfactory', description: 'In-depth technical research on SUP materials, construction, safety standards and manufacturing.' }
  if (path.startsWith('/guides/')) {
    const guide = getGuide(path)
    if (guide) {
      return {
        kind: 'guide',
        path,
        slug: guide.slug,
        title: brandify(`${guide.title} — SUPsfactory`),
        description: brandify(guide.intro[0] ?? ''),
        origin: '',
      }
    }
  }
  return null
}

export const afarerServerLoader = createServerFn({ method: 'GET' })
  .validator((path: string) => path)
  .handler(async ({ data: path }) => {
    const { env } = await import('@/lib/env')
    const origin = new URL(env.BETTER_AUTH_URL).origin
    const data = resolveCatchAll(path)
    if (!data) throw notFound()
    return { ...data, origin } as CatchAllData
  })

/* ─────────────────────────── JSON-LD helpers ─────────────────────────── */

export function JsonLd({ data }: { data: Record<string, unknown> }) {
  const nonce = getNonce()
  return <script type="application/ld+json" nonce={nonce} dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
}

function breadcrumbLd(origin: string, path: string, title: string): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: origin },
      { '@type': 'ListItem', position: 2, name: title, item: `${origin}${path}` },
    ],
  }
}

function articleLd(origin: string, title: string, description: string): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    headline: title,
    description,
    url: `${origin}/technology/${title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`,
    publisher: { '@type': 'Organization', name: 'SUPsfactory' },
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
      case 'page':
        return (
          <>
            <AfarerSections page={getAfarerPage(data.path)!} />
            <JsonLd data={breadcrumbLd(data.origin, data.path, data.title)} />
          </>
        )
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
            <PostView post={data.post} />
            <CtaBand />
          </>
        )
      case 'article':
        return <ArticleView slug={data.slug} origin={data.origin} title={data.title} />
      case 'case':
        return <CaseView slug={data.slug} origin={data.origin} title={data.title} />
      case 'guide':
        return <GuideView slug={data.slug} origin={data.origin} />
      case 'cases-index':
        return (
          <>
            <PageHero kicker="Case Studies" title="afarer Case Studies" sub="How brands, resorts and operators launch and scale with our factory." />
            <CaseStudiesIndex />
          </>
        )
      case 'research-index':
        return (
          <>
            <PageHero kicker="Knowledge Center" title="Research & Technical Guides" sub="In-depth technical research on SUP materials, construction, safety standards and manufacturing." />
            <ResearchIndex />
          </>
        )
    }
  })()

  return (
    <I18nProvider locale={defaultLocale}>
      <div className="min-h-screen bg-background text-foreground">
        <SiteNav theme={theme} loggedIn={!!user} />
        {body}
        <Footer theme={theme} />
      </div>
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

function PostView({ post }: { post: AfarerPost }) {
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
      </article>
    </>
  )
}

function ArticleView({ slug, origin, title }: { slug: string; origin: string; title: string }) {
  const article = getTechArticle(slug)
  if (!article) return null
  return (
    <>
      <PageHero kicker="Technology" title={title} sub={brandify(article.summary ?? '')} />
      <article className="mx-auto max-w-3xl px-5 py-14 md:px-7">
        {article.description && <p className="text-[15px] leading-relaxed text-fg-2">{brandify(article.description)}</p>}
        <Markdown text={brandify(article.body)} className="mt-4" />
        <JsonLd data={articleLd(origin, title, article.description ?? article.summary ?? '')} />
      </article>
    </>
  )
}

function CaseView({ slug, origin, title }: { slug: string; origin: string; title: string }) {
  const c = getCaseUse(slug)
  if (!c) return null
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
        <JsonLd data={articleLd(origin, title, c.summary ?? '')} />
      </article>
    </>
  )
}

function GuideView({ slug, origin }: { slug: string; origin: string }) {
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
        <JsonLd data={articleLd(origin, guide.title, guide.intro[0] ?? '')} />
      </article>
    </>
  )
}
