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
  isAfarerPageTranslated,
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

function indexNews(): AferIndexNews[] {
  return getNewsPosts().map((p) => ({
    slug: p.slug,
    title: p.title,
    date: p.date,
    excerpt: p.excerpt,
    image: p.image,
    category: p.category,
  }))
}

function indexProducts(): AferIndexProduct[] {
  return getAfarerProducts().map((p) => ({
    slug: p.slug,
    title: p.title,
    image: p.image,
    sku: p.sku,
    summary: p.summary,
    price: p.price,
  }))
}

function indexTopics(): AferIndexTopic[] {
  return getResearchTopics()
    .filter((t) => getAfarerPage(`/research/${t.slug}`))
    .map((t) => ({ slug: t.slug, category: t.category, readTime: t.readTime }))
}

function indexCases(): AferIndexCase[] {
  return getCaseUses().map((c) => ({
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

function indexFor(page?: AfarerPage): AferIndexData {
  const need = indexNeeds(page)
  return {
    regionCount: getRegionCount(),
    ...(need.news ? { news: indexNews() } : {}),
    ...(need.products ? { products: indexProducts() } : {}),
    ...(need.topics ? { topics: indexTopics() } : {}),
  }
}

export function resolveCatchAll(path: string, locale: Locale = defaultLocale): CatchAllData | null {
  const translated = isAfarerPageTranslated(path, locale)
  const esTranslated = isAfarerPageTranslated(path, 'es')
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
      index: indexFor(page),
    }
  }
  if (path.startsWith('/products/')) {
    const product = getAfarerProduct(slugOf(path))
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
        index: indexFor(),
      }
    }
  }
  if (path.startsWith('/news/')) {
    const post = getNewsPost(slugOf(path))
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
        index: indexFor(),
      }
    }
  }
  if (path.startsWith('/technology/')) {
    const article = getTechArticle(slugOf(path))
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
        index: indexFor(),
      }
    }
  }
  if (path.startsWith('/evidence/case-studies/')) {
    const c = getCaseUse(slugOf(path))
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
        index: indexFor(),
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
      title: 'Case Studies — SUPsfactory',
      description: 'How brands, resorts and operators launch and scale with our factory.',
      index: { regionCount: getRegionCount(), cases: indexCases() },
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
      title: 'Research & Technical Guides — SUPsfactory',
      description: 'In-depth technical research on SUP materials, construction, safety standards and manufacturing.',
      index: { regionCount: getRegionCount(), topics: indexTopics() },
    }
  }
  if (path.startsWith('/guides/')) {
    const guide = getGuide(path)
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
        index: indexFor(),
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
          'Frequently asked questions about afarer inflatable SUP OEM/ODM manufacturing — materials, certifications, minimum order quantities and wholesale logistics.',
        faqs: getSiteFaqs(locale).map((f) => ({ q: brandify(f.q), a: brandify(f.a) })),
        index: indexFor(),
      }
    }
  }
  return null
}
