/**
 * Server-only afarer catch-all resolver.
 *
 * The `/$` route handler (catchall.tsx) imports this module dynamically from
 * inside the createServerFn handler, so the 900 KB+ YAML/MDX corpus and the
 * `yaml` parser it pulls in via loader.ts never enter the client bundle.
 * It resolves a path into the full CatchAllData the client renders from —
 * including the per-page widget index payloads the sections need.
 */

import { OG_IMAGE } from '@/features/seo/seo'
import { defaultLocale, type Locale } from '@/features/i18n/locale'
import {
  getAfarerPage,
  getAfarerProduct,
  getNewsPost,
  getTechArticle,
  getCaseUse,
  getSiteFaqs,
  hasSpanishVariant,
  getNewsPosts,
  getAfarerProducts,
  getResearchTopics,
  getCaseUses,
  getRegionCount,
  brandify,
} from './loader'
import { getGuide } from './guide-content'
import type { CatchAllData } from './catchall'
import type { AfarerPage } from './types'
import type {
  AferIndexCase,
  AferIndexData,
  AferIndexNews,
  AferIndexProduct,
  AferIndexTopic,
} from './index-data'

const slugOf = (path: string): string => path.split('/').filter(Boolean).pop() ?? ''

/** Top-3 related products by shared tags (fallback: any other product), locale-aware. */
function relatedProducts(
  slug: string,
  selfTags: string[],
  locale: Locale,
): { slug: string; title: string; image: string; amount?: string }[] {
  const all = getAfarerProducts(locale).filter((p) => p.slug !== slug)
  const tags = new Set(selfTags)
  const scored = all
    .map((p) => ({ p, score: (p.tags ?? []).filter((t) => tags.has(t)).length }))
    .sort((a, b) => b.score - a.score || a.p.title.localeCompare(b.p.title))
  const top = scored.slice(0, 3)
  for (const rest of all.filter((p) => !top.some((t) => t.p.slug === p.slug)).slice(0, Math.max(0, 3 - top.length))) {
    top.push({ p: rest, score: 0 })
  }
  return top.map(({ p }) => ({ slug: p.slug, title: p.title, image: p.image ?? '', amount: p.price?.amount }))
}

/** Top-3 related posts by shared category (fallback: newest posts), locale-aware. */
function relatedPosts(
  slug: string,
  selfCategory: string,
  locale: Locale,
): { slug: string; title: string; excerpt: string; date: string }[] {
  const all = getNewsPosts(locale).filter((p) => p.slug !== slug)
  const same = all.filter((p) => p.category === selfCategory)
  const rest = all.filter((p) => p.category !== selfCategory)
  const picked = [...same, ...rest]
    .sort((a, b) => (a.date < b.date ? 1 : -1))
    .slice(0, 3)
  return picked.map((p) => ({ slug: p.slug, title: p.title, excerpt: p.excerpt ?? '', date: p.date.slice(0, 10) }))
}

function indexNews(locale?: Locale): AferIndexNews[] {
  return getNewsPosts(locale).map((p) => ({
    slug: p.slug,
    title: p.title,
    date: p.date,
    excerpt: p.excerpt,
    image: p.image,
    category: p.category,
  }))
}

function indexProducts(locale?: Locale): AferIndexProduct[] {
  return getAfarerProducts(locale).map((p) => ({
    slug: p.slug,
    title: p.title,
    image: p.image,
    sku: p.sku,
    summary: p.summary,
    price: p.price,
  }))
}

function indexTopics(locale?: Locale): AferIndexTopic[] {
  return getResearchTopics(locale)
    .filter((t) => getAfarerPage(`/research/${t.slug}`))
    .map((t) => ({ slug: t.slug, category: t.category, readTime: t.readTime }))
}

function indexCases(locale: Locale): AferIndexCase[] {
  return getCaseUses(locale).map((c) => ({
    slug: c.slug,
    title: c.title,
    summary: c.summary,
    category: c.category,
  }))
}

/** Which widget index payloads a page's sections need. */
function indexNeeds(page?: AfarerPage): { news?: boolean; products?: boolean; topics?: boolean } {
  if (!page) return {}
  const need: { news?: boolean; products?: boolean; topics?: boolean } = {}
  for (const def of page.sections) {
    if (def.type === 'blog_latest') need.news = true
    if (def.type === 'featured_products') need.products = true
  }
  for (const value of Object.values(page.content)) {
    if (value && typeof value === 'object' && !Array.isArray(value) && Array.isArray((value as Record<string, unknown>).topics)) need.topics = true
  }
  return need
}

function indexFor(page?: AfarerPage, locale?: Locale): AferIndexData {
  const need = indexNeeds(page)
  return {
    regionCount: getRegionCount(),
    ...(need.news ? { news: indexNews(locale) } : {}),
    ...(need.products ? { products: indexProducts(locale) } : {}),
    ...(need.topics ? { topics: indexTopics(locale) } : {}),
  }
}

export function resolveCatchAll(path: string, locale: Locale = defaultLocale): CatchAllData | null {
  const hasEs =
    hasSpanishVariant(path) ||
    (path.startsWith('/guides/') && !!getGuide(path, 'es')) ||
    path === '/research' ||
    path === '/evidence/case-studies'
  const translated = locale === 'es' && hasEs
  const esTranslated = hasEs
  const page = getAfarerPage(path, locale)
  if (page) {
    return {
      kind: 'page',
      path: page.path,
      locale,
      translated,
      esTranslated,
      slug: page.slug,
      title: brandify(page.meta?.title ?? `${page.label} — SUPsfactory`),
      description: brandify(page.meta?.description ?? ''),
      origin: '',
      page,
      index: indexFor(page, locale),
    }
  }
  if (path.startsWith('/products/')) {
    const product = getAfarerProduct(slugOf(path), locale)
    if (product) {
      return {
        kind: 'product',
        path,
        locale,
        translated,
        esTranslated,
        product,
        title: brandify(product.metadata?.title ?? `${product.title} — SUPsfactory`),
        description: brandify(product.metadata?.description ?? product.description ?? product.summary ?? ''),
        image: product.image ?? OG_IMAGE,
        origin: '',
        index: indexFor(undefined, locale),
        related: relatedProducts(product.slug, product.tags ?? [], locale),
      }
    }
  }
  if (path.startsWith('/news/')) {
    const post = getNewsPost(slugOf(path), locale)
    if (post) {
      return {
        kind: 'post',
        path,
        locale,
        translated,
        esTranslated,
        post,
        title: brandify(post.metadata?.title ?? `${post.title} — SUPsfactory`),
        description: brandify(post.metadata?.description ?? post.excerpt ?? ''),
        image: post.image ?? OG_IMAGE,
        origin: '',
        index: indexFor(undefined, locale),
        relatedPosts: relatedPosts(post.slug, post.category ?? '', locale),
      }
    }
  }
  if (path.startsWith('/technology/')) {
    const article = getTechArticle(slugOf(path), locale)
    if (article) {
      return {
        kind: 'article',
        path,
        locale,
        translated,
        esTranslated,
        slug: article.slug,
        title: brandify(`${article.title} — SUPsfactory`),
        description: brandify(article.description ?? article.summary ?? ''),
        article,
        origin: '',
        index: indexFor(undefined, locale),
      }
    }
  }
  if (path.startsWith('/evidence/case-studies/')) {
    const c = getCaseUse(slugOf(path), locale)
    if (c) {
      return {
        kind: 'case',
        path,
        locale,
        translated,
        esTranslated,
        slug: c.slug,
        title: brandify(`${c.title} — SUPsfactory`),
        description: brandify(c.description ?? c.summary ?? ''),
        case: c,
        origin: '',
        index: indexFor(undefined, locale),
      }
    }
  }
  if (path === '/evidence/case-studies') {
    return {
      kind: 'cases-index',
      path,
      locale,
      translated,
      esTranslated,
      origin: '',
      title: locale === 'es' ? 'Casos de estudio — SUPsfactory' : 'Case Studies — SUPsfactory',
      description:
        locale === 'es'
          ? 'Cómo marcas, resorts y operadores lanzan y escalan con nuestra fábrica.'
          : 'How brands, resorts and operators launch and scale with our factory.',
      index: { regionCount: getRegionCount(), cases: indexCases(locale) },
    }
  }
  if (path === '/research') {
    return {
      kind: 'research-index',
      path,
      locale,
      translated,
      esTranslated,
      origin: '',
      title: locale === 'es' ? 'Investigación y guías técnicas — SUPsfactory' : 'Research & Technical Guides — SUPsfactory',
      description:
        locale === 'es'
          ? 'Investigación técnica en profundidad sobre materiales, construcción, estándares de seguridad y fabricación de SUP.'
          : 'In-depth technical research on SUP materials, construction, safety standards and manufacturing.',
      index: { regionCount: getRegionCount(), topics: indexTopics(locale) },
    }
  }
  if (path.startsWith('/guides/')) {
    const guide = getGuide(path, locale)
    if (guide) {
      return {
        kind: 'guide',
        path,
        locale,
        translated,
        esTranslated,
        slug: guide.slug,
        title: brandify(`${guide.title} — SUPsfactory`),
        description: brandify(guide.intro[0] ?? ''),
        origin: '',
        index: indexFor(undefined, locale),
      }
    }
  }
  if (path === '/faq') {
    // afarer's footer links to /faq; the nav target exists as a site-level
    // faqs.yaml. Serve it as a real page (fixes the dead link + FAQPage schema).
    if (getSiteFaqs(locale).length > 0) {
      return {
        kind: 'faq',
        path,
        locale,
        translated,
        esTranslated,
        origin: '',
        title:
          locale === 'es'
            ? 'Preguntas frecuentes — Fabricación OEM de SUP'
            : 'FAQ — Inflatable SUP OEM, Materials & MOQ | SUPsfactory',
        description:
          locale === 'es'
            ? 'Preguntas frecuentes sobre la fabricación OEM/ODM de SUP hinchables afarer — materiales, certificaciones, cantidades mínimas de pedido y logística mayorista.'
            : 'Frequently asked questions about afarer inflatable SUP OEM/ODM manufacturing — materials, certifications, minimum order quantities and wholesale logistics.',
        faqs: getSiteFaqs(locale).map((f) => ({ q: brandify(f.q), a: brandify(f.a) })),
        index: indexFor(undefined, locale),
      }
    }
  }
  return null
}
