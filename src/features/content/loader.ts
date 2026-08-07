import { parse } from 'yaml'
import { assetUrl } from './assets'
import { defaultLocale, type Locale } from '@/features/i18n/locale'
import type {
  AfarerArticle,
  AfarerCaseUse,
  AfarerPage,
  AfarerPost,
  AfarerProduct,
  AfarerResearchTopic,
  AfarerSectionDef,
} from './types'

/**
 * afarer content loader.
 *
 * All sources live in src/content/afarer/ and are bundled at build time as
 * raw strings (Vite glob + `?raw`), so this works on Cloudflare Workers where
 * there is no filesystem at runtime. Parsing is cached at module level.
 *
 * The registry (site/pages.yaml) is the source of truth for page routes.
 * Additional pages that afarer serves via dedicated routes (research articles,
 * R&D subpages) are added through EXTRA_PATHS.
 */

const siteGlob = import.meta.glob('../../content/afarer/site/*.yaml', { query: '?raw', import: 'default', eager: true }) as Record<string, string>
const pageGlob = import.meta.glob('../../content/afarer/pages/*.yaml', { query: '?raw', import: 'default', eager: true }) as Record<string, string>
// Spanish sidecar variants — `pages/{slug}.es.yaml` / `site/{name}.es.yaml` are
// full-structure copies of their English twin (translated values, same keys).
// When present, /es/* pages render them instead of the English source.
const esSiteGlob = import.meta.glob('../../content/afarer/site/*.es.yaml', { query: '?raw', import: 'default', eager: true }) as Record<string, string>
const esPageGlob = import.meta.glob('../../content/afarer/pages/*.es.yaml', { query: '?raw', import: 'default', eager: true }) as Record<string, string>
const productGlob = import.meta.glob('../../content/afarer/products/*.mdx', { query: '?raw', import: 'default', eager: true }) as Record<string, string>
const newsGlob = import.meta.glob('../../content/afarer/news/*.mdx', { query: '?raw', import: 'default', eager: true }) as Record<string, string>
const techGlob = import.meta.glob('../../content/afarer/technology/*.md', { query: '?raw', import: 'default', eager: true }) as Record<string, string>
const caseGlob = import.meta.glob('../../content/afarer/case-use/*.md', { query: '?raw', import: 'default', eager: true }) as Record<string, string>
const geoGlob = import.meta.glob('../../content/afarer/geo/*.json', { query: '?raw', import: 'default', eager: true }) as Record<string, string>

const stripBom = (s: string) => s.replace(/^\uFEFF/, '')

function suffixMatch(glob: Record<string, string>, suffix: string): string | undefined {
  const key = Object.keys(glob).find((k) => k.endsWith(suffix))
  return key ? glob[key] : undefined
}

function basename(path: string): string {
  return path.split(/[\\/]/).pop() ?? ''
}

function parseYamlMap(glob: Record<string, string>, stripEs = false): Record<string, unknown> {
  const out: Record<string, unknown> = {}
  for (const [key, raw] of Object.entries(glob)) {
    let name = basename(key).replace(/\.(yaml|yml)$/i, '')
    if (stripEs) name = name.replace(/\.es$/i, '')
    out[name] = parse(stripBom(raw))
  }
  return out
}

/** Splits `---\n<yaml>\n---\n<body>` MDX/MD frontmatter. */
function parseFrontmatter<T>(raw: string): { data: T; body: string } {
  const clean = stripBom(raw)
  const m = /^---\r?\n([\s\S]*?)\r?\n---\r?\n?/.exec(clean)
  if (!m) return { data: {} as T, body: clean }
  return { data: parse(m[1]) as T, body: clean.slice(m[0].length) }
}

const normalizePath = (p: string): string => `/${p.replace(/^\/+|\/+$/g, '')}`.replace(/\/$/, '') || '/'

/* ───────────────────────── registry pages ───────────────────────── */

interface RegistryEntry {
  slug: string
  label?: string
  path?: string
  permalink?: string
  sections?: { key: string; type: string; label?: string }[]
}

const REGISTRY_RAW = suffixMatch(siteGlob, 'pages.yaml') ?? ''
const REGISTRY = (parse(stripBom(REGISTRY_RAW)) as RegistryEntry[]) ?? []
const PAGES_YAML = parseYamlMap(pageGlob)
const PAGES_YAML_ES = parseYamlMap(esPageGlob, true)

/** Global market regions afarer serves, sourced from the distributor coverage list. */
const REGION_COUNT = (() => {
  const dist = (PAGES_YAML['solutions-distributors'] ?? {}) as { coverage?: { regions?: unknown[] } }
  const regions = dist.coverage?.regions
  if (Array.isArray(regions) && regions.length > 0) return regions.length
  return 6
})()

/** Type inference for pages that ship no registry entry (dedicated-route pages). */
function inferSectionType(value: unknown, key: string): string {
  if (key === 'hero' || key.includes('hero')) return 'hero'
  if (key === 'hero_text') return 'hero_text'
  if (key === 'stats' || key.includes('stats') || key.includes('numbers')) return 'stats'
  if (key === 'cta' || key.includes('cta')) return 'cta'
  if (key.includes('faq')) return 'faqs'
  if (key === 'content_html' || key.includes('html')) return 'html'
  if (Array.isArray(value)) {
    const first = value[0]
    if (first && typeof first === 'object' && 'value' in first) return 'stats'
    if (first && typeof first === 'object' && ('q' in first || 'question' in first)) return 'faqs'
    return 'features'
  }
  return 'content'
}

function deriveSections(content: Record<string, unknown>): AfarerSectionDef[] {
  const keys = Object.keys(content).filter((k) => !['meta', 'back_text', 'backText'].includes(k))
  // hero first, cta last, everything else in source order
  const ordered = [...keys].sort((a, b) => {
    const rank = (k: string) => (k === 'hero' || k.includes('hero') ? 0 : k.includes('cta') ? 2 : 1)
    return rank(a) - rank(b)
  })
  return ordered.map((k) => ({ key: k, type: inferSectionType(content[k], k) }))
}

/** Paths owned by static SUPsfactory routes — registry entries under these are never rendered. */
const SHADOWED_PATHS = new Set([
  '/', '/solutions', '/products', '/who-we-serve', '/how-it-works', '/gallery', '/about',
  '/contact', '/customizer', '/waitlist', '/changelog',
  '/custom-sup-manufacturing', '/private-label-sup', '/sup-for-resorts', '/sup-for-clubs',
  '/sup-startup-brands', '/terms', '/privacy',
  '/custom-sup-development', '/solutions/private-label-sup', '/solutions/resort-sup',
  '/solutions/club-sup', '/solutions/school-sup', '/solutions/custom-sup',
  '/projects', '/projects/resort-sup-fleet', '/projects/private-label-launch',
  '/projects/club-team-boards', '/projects/school-program-fleet',
  '/knowledge', '/knowledge/how-custom-sup-boards-are-developed',
  '/knowledge/inflatable-sup-construction-explained',
  '/knowledge/how-organizations-choose-sup-equipment',
  '/about/supsfactory-entity',
])

const REGISTERED_PAGES: AfarerPage[] = REGISTRY.flatMap((entry) => {
  const path = normalizePath(entry.permalink || entry.path || `/${entry.slug}`)
  if (SHADOWED_PATHS.has(path)) return []
  const content = (PAGES_YAML[entry.slug] ?? {}) as Record<string, unknown>
  return [
    {
      slug: entry.slug,
      label: entry.label ?? entry.slug,
      path,
      meta: content.meta as AfarerPage['meta'],
      sections: entry.sections ?? deriveSections(content),
      content,
    },
  ]
})

/** Dedicated-route pages served by afarer outside the registry (path → yaml slug). */
const EXTRA_PATHS: Record<string, string> = {
  '/research/drop-stitch-technology': 'research-drop-stitch',
  '/research/pvc-vs-hypalon': 'research-pvc-vs-hypalon',
  '/research/ce-certification-guide': 'research-ce-certification',
  '/research/sup-thickness-guide': 'research-sup-thickness',
  '/research/oem-buyer-guide': 'research-oem-buyer-guide',
  '/randdcenter/hull-engineering': 'hull-engineering',
  '/randdcenter/hydrodynamic-test-tank': 'hydrodynamic-test-tank',
  '/randdcenter/prototype-workshop': 'prototype-workshop',
  '/randdcenter/pvc-fabric-lab': 'pvc-fabric-lab',
  '/randdcenter/quality-inspection-lab': 'quality-inspection-lab',
  '/randdcenter/rf-welding': 'rf-welding',
  // ported afarer solution / OEM pages (path → yaml slug)
  '/oem-odm': 'oem-odm-manufacturer',
  '/oem-odm-manufacturer': 'oem-odm-manufacturer',
  '/oem-paddle': 'oem-paddle',
  '/solutions/rental-operators': 'solutions-rental-operators',
  '/solutions/retail-partners': 'solutions-retail-partners',
  '/solutions/distributors': 'solutions-distributors',
  '/b2b-solutions-matrix': 'b2b-solutions-matrix',
}

const EXTRA_PAGES: AfarerPage[] = Object.entries(EXTRA_PATHS).map(([path, slug]) => {
  const content = (PAGES_YAML[slug] ?? {}) as Record<string, unknown>
  return {
    slug,
    label: slug,
    path: normalizePath(path),
    meta: content.meta as AfarerPage['meta'],
    sections: deriveSections(content),
    content,
  }
})

const ALL_PAGES = [...REGISTERED_PAGES, ...EXTRA_PAGES]

const PAGE_BY_PATH = new Map(ALL_PAGES.map((p) => [p.path, p]))

/* ───────────────────────── articles (MDX) ───────────────────────── */

function parseMdxFiles<T>(glob: Record<string, string>): Record<string, T> {
  const out: Record<string, T> = {}
  for (const [key, raw] of Object.entries(glob)) {
    const slug = basename(key).replace(/\.mdx?$/i, '')
    out[slug] = parseFrontmatter<T>(raw).data
  }
  return out
}

const PRODUCT_DATA = parseMdxFiles<Record<string, unknown>>(productGlob)
const NEWS_DATA = parseMdxFiles<Record<string, unknown>>(newsGlob)
const TECH_DATA = parseMdxFiles<Record<string, unknown>>(techGlob)
const CASE_DATA = parseMdxFiles<Record<string, unknown>>(caseGlob)

function mdxBodyOf(glob: Record<string, string>, slug: string): string {
  const key = Object.keys(glob).find((k) => basename(k).replace(/\.mdx?$/i, '') === slug)
  return key ? parseFrontmatter(glob[key]).body : ''
}

const PRODUCTS: AfarerProduct[] = Object.entries(PRODUCT_DATA)
  .map(([slug, d]) => {
    const rec = { ...(d as object) } as Record<string, unknown>
    if (typeof rec.image === 'string') rec.image = assetUrl(rec.image)
    if (Array.isArray(rec.gallery)) {
      rec.gallery = (rec.gallery as { url?: unknown; alt?: unknown }[]).map((g) => ({
        ...g,
        url: typeof g.url === 'string' ? assetUrl(g.url) : g.url,
      }))
    }
    return { slug, body: mdxBodyOf(productGlob, slug), ...rec } as unknown as AfarerProduct
  })
  .sort((a, b) => a.title.localeCompare(b.title))

const NEWS: AfarerPost[] = Object.entries(NEWS_DATA)
  .map(([slug, d]) => {
    const rec = d as Record<string, unknown>
    return {
      slug,
      title: String(rec.title ?? slug),
      date: String(rec.publishDate ?? ''),
      excerpt: rec.excerpt ? String(rec.excerpt) : undefined,
      image: rec.image ? assetUrl(String(rec.image)) : undefined,
      category: rec.category ? String(rec.category) : undefined,
      author: rec.author ? String(rec.author) : undefined,
      tags: Array.isArray(rec.tags) ? rec.tags.map(String) : [],
      metadata: rec.metadata as AfarerPost['metadata'],
      body: mdxBodyOf(newsGlob, slug),
    }
  })
  .sort((a, b) => (a.date < b.date ? 1 : -1))

const TECH: AfarerArticle[] = Object.entries(TECH_DATA).map(([slug, d]) => {
  const rec = d as Record<string, unknown>
  return {
    slug,
    title: String(rec.title ?? slug),
    summary: rec.summary ? String(rec.summary) : undefined,
    description: rec.description ? String(rec.description) : undefined,
    category: rec.category ? String(rec.category) : undefined,
    tags: Array.isArray(rec.tags) ? rec.tags.map(String) : [],
    body: mdxBodyOf(techGlob, slug),
  }
})

const CASE_USES: AfarerCaseUse[] = Object.entries(CASE_DATA).map(([slug, d]) => {
  const rec = d as Record<string, unknown>
  return {
    slug,
    title: String(rec.title ?? slug),
    summary: rec.summary ? String(rec.summary) : undefined,
    description: rec.description ? String(rec.description) : undefined,
    category: rec.category ? String(rec.category) : undefined,
    environment: rec.environment ? String(rec.environment) : undefined,
    skill: rec.skill ? String(rec.skill) : undefined,
    products: Array.isArray(rec.products) ? rec.products.map(String) : [],
    tags: Array.isArray(rec.tags) ? rec.tags.map(String) : [],
    body: mdxBodyOf(caseGlob, slug),
  }
})

/* ───────────────────────── research topics ───────────────────────── */

const RESEARCH_RAW = suffixMatch(siteGlob, 'research.yaml') ?? ''
const RESEARCH_TOPICS = ((parse(stripBom(RESEARCH_RAW)) as { topics?: AfarerResearchTopic[] }).topics ?? []).map((t) => ({
  ...t,
  slug: String(t.slug),
}))

/* ───────────────────────── geo ───────────────────────── */

function geoJson(name: string): Record<string, unknown> | undefined {
  const raw = suffixMatch(geoGlob, `${name}.json`)
  // afarer 源数据允许重复键(如 entity.json 里的 sameAs),yaml 默认严格报错 → 关闭唯一键检查
  return raw ? (parse(stripBom(raw), { uniqueKeys: false }) as Record<string, unknown>) : undefined
}

/* ───────────────────────── public API ───────────────────────── */

export function getAfarerPage(path: string, locale: Locale = defaultLocale): AfarerPage | undefined {
  const page = PAGE_BY_PATH.get(normalizePath(path))
  if (!page) return undefined
  if (locale !== 'es') return page
  const es = PAGES_YAML_ES[page.slug]
  if (!es) return page
  const esContent = es as Record<string, unknown>
  return { ...page, content: esContent, meta: (esContent.meta as AfarerPage['meta']) ?? page.meta }
}

/** True when a Spanish variant exists for the page (or /faq) at `path`. */
export function isAfarerPageTranslated(path: string, locale: Locale): boolean {
  if (locale !== 'es') return false
  const page = PAGE_BY_PATH.get(normalizePath(path))
  if (page) return !!PAGES_YAML_ES[page.slug]
  if (normalizePath(path) === '/faq') return !!suffixMatch(esSiteGlob, 'faqs.es.yaml')
  return false
}

/** Live page paths that have a Spanish variant (for the /es sitemap). */
export function getAfarerEsPaths(): string[] {
  const pages = ALL_PAGES.filter((p) => PAGES_YAML_ES[p.slug]).map((p) => p.path)
  if (suffixMatch(esSiteGlob, 'faqs.es.yaml')) pages.push('/faq')
  return pages
}

export function getAfarerPages(): AfarerPage[] {
  return ALL_PAGES
}

/** Pages that are actually renderable (registry + extra), for sitemap/llms. */
export function getAfarerPublicPaths(): string[] {
  return ALL_PAGES.map((p) => p.path)
}

export function getAfarerProducts(): AfarerProduct[] {
  return PRODUCTS
}

export function getAfarerProduct(slug: string): AfarerProduct | undefined {
  return PRODUCTS.find((p) => p.slug === slug)
}

export function getNewsPosts(): AfarerPost[] {
  return NEWS
}

export function getNewsPost(slug: string): AfarerPost | undefined {
  return NEWS.find((p) => p.slug === slug)
}

export function getTechArticles(): AfarerArticle[] {
  return TECH
}

export function getTechArticle(slug: string): AfarerArticle | undefined {
  return TECH.find((t) => t.slug === slug)
}

export function getCaseUses(): AfarerCaseUse[] {
  return CASE_USES
}

export function getCaseUse(slug: string): AfarerCaseUse | undefined {
  return CASE_USES.find((c) => c.slug === slug)
}

export function getResearchTopics(): AfarerResearchTopic[] {
  return RESEARCH_TOPICS
}

export function getGeoEntity(): Record<string, unknown> | undefined {
  return geoJson('entity')
}

/** Structured company / certification / manufacturing facts for GEO exposure. */
export function getGeoFacts(): {
  company?: Record<string, unknown>
  certifications?: Record<string, unknown>
  manufacturing?: Record<string, unknown>
} {
  return {
    company: geoJson('company-facts'),
    certifications: geoJson('certification-facts'),
    manufacturing: geoJson('manufacturing-facts'),
  }
}

/** Site-wide FAQ Q&A (src/content/afarer/site/faqs.yaml), for the /faq page. */
export function getSiteFaqs(locale: Locale = defaultLocale): { q: string; a: string }[] {
  const raw =
    locale === 'es' ? (suffixMatch(esSiteGlob, 'faqs.es.yaml') ?? '') : ''
  const source = raw || suffixMatch(siteGlob, 'faqs.yaml') || ''
  if (!source) return []
  const parsed = parse(stripBom(source)) as { faqs?: { q: string; a: string }[] }
  return Array.isArray(parsed.faqs) ? parsed.faqs : []
}

/** Replaces the afarer `{SITE}`/`{BRAND}`/`{count}` template placeholders with brand values. */
export function brandify(text: string): string {
  return text
    .replaceAll('{SITE}', 'SUPsfactory')
    .replaceAll('{BRAND}', 'afarer')
    .replaceAll('{count}', String(REGION_COUNT))
}

/** Number of global market regions afarer serves (brand `{count}` value). */
export function getRegionCount(): number {
  return REGION_COUNT
}
