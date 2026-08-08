import { locales, defaultLocale, localizePath, type Locale } from '@/features/i18n/locale'

interface PublicPathEntry {
  path: string
  lastmod: string
}

/** Marketing pages in the sitemap (bilingual, hreflang-linked). */
export const PUBLIC_PATHS: PublicPathEntry[] = [
  { path: '/', lastmod: '2026-08-07' },
  { path: '/solutions', lastmod: '2026-06-20' },
  { path: '/products', lastmod: '2026-06-20' },
  { path: '/who-we-serve', lastmod: '2026-06-20' },
  { path: '/how-it-works', lastmod: '2026-08-07' },
  { path: '/gallery', lastmod: '2026-08-07' },
  { path: '/about', lastmod: '2026-08-07' },
  { path: '/contact', lastmod: '2026-08-07' },
  { path: '/customizer', lastmod: '2026-08-07' },
  { path: '/custom-sup-development', lastmod: '2026-06-01' },
  { path: '/solutions/private-label-sup', lastmod: '2026-06-01' },
  { path: '/solutions/resort-sup', lastmod: '2026-06-01' },
  { path: '/solutions/club-sup', lastmod: '2026-06-01' },
  { path: '/solutions/school-sup', lastmod: '2026-06-01' },
  { path: '/projects', lastmod: '2026-06-20' },
  { path: '/knowledge', lastmod: '2026-06-25' },
  { path: '/about/supsfactory-entity', lastmod: '2026-06-30' },
]

// Open Graph 要求 language_TERRITORY 形态（en_US），裸语言码会被严格解析器忽略。
const OG_LOCALE: Record<Locale, string> = { en: 'en_US', es: 'es_ES' }

// RFC 5646 语言标签（hreflang / alternate link）——裸语言码对 Google 不够精确。
const HREFLANG: Record<Locale, string> = { en: 'en-US', es: 'es-ES' }

// 社交分享封面：真实产品图（assets.supsfactory.com，自有 R2 CDN）比 logo 更适合做 OG 图。
// afarer-og-default.webp 为 1200x630 的专用 OG 规格图（源图 products/afarer-juno-sup-board.webp，
// 由 scripts/afarer-images 上传工作流同步到 R2；本地重新生成后需重新跑上传）。
export const OG_IMAGE = 'https://assets.supsfactory.com/images/sups/products/afarer-og-default.webp'

export function buildRobots(origin: string): string {
  const aiAgents = [
    'GPTBot',
    'OAI-SearchBot',
    'ChatGPT-User',
    'ClaudeBot',
    'Claude-SearchBot',
    'Claude-User',
    'PerplexityBot',
    'Perplexity-User',
    'Google-Extended',
    'Applebot',
    'Applebot-Extended',
    'Amazonbot',
    'meta-externalagent',
    'Bytespider',
    'cohere-ai',
    'CCBot',
    'YouBot',
  ]
  const aiGroups = aiAgents.map((agent) => `User-agent: ${agent}\nAllow: /`).join('\n\n')
  return [
    `# ${origin}/robots.txt`,
    '# Last updated: 2026-08-07',
    '',
    '# ---------------------------------------------------------------',
    '# Content signals',
    '# search   = yes  (allow search indexing)',
    '# ai-input = yes  (allow grounding / RAG for AI answers — required for GEO)',
    '# ai-train = no   (do not use for model training)',
    '# ---------------------------------------------------------------',
    'Content-Signal: search=yes, ai-input=yes, ai-train=no, use=reference',
    '',
    // Single wildcard group — private app surfaces and removed template pages
    // only; the whole marketing site is crawlable (incl. AI agents, each
    // allowed explicitly below so no edge/anti-bot rule can blanket-block
    // LLM crawlers).
    'User-agent: *',
    'Allow: /',
    'Disallow: /api',
    'Disallow: /admin',
    'Disallow: /*/admin',
    'Disallow: /app',
    'Disallow: /*/app',
    'Disallow: /docs',
    'Disallow: /docs/',
    'Disallow: /waitlist',
    'Disallow: /changelog',
    'Disallow: /*?*sort=',
    'Disallow: /*?*utm_',
    '',
    '# --- AI search & answer engines: explicitly allowed (GEO) ---',
    aiGroups,
    '',
    `Sitemap: ${origin}/sitemap.xml`,
    '',
  ].join('\n')
}

function alternates(origin: string, path: string): string {
  const links = locales.map(
    (l) => `<xhtml:link rel="alternate" hreflang="${HREFLANG[l]}" href="${origin}${localizePath(l, path)}"/>`,
  )
  links.push(
    `<xhtml:link rel="alternate" hreflang="x-default" href="${origin}${localizePath(defaultLocale, path)}"/>`,
  )
  return links.join('')
}

export interface SitemapEntry {
  loc: string
  lastmod?: string
  /** Emit the Spanish sibling as an hreflang alternate (must have a real es variant). */
  es?: boolean
}

type SingleLocalePath = string | SitemapEntry

/** Which locale variants of PUBLIC_PATHS a sitemap file should carry: every
 *  bilingual pair (default), only the given locale, or none (detail-only files
 *  like products/news — they must not repeat the template URLs). */
export function buildSitemap(
  origin: string,
  singleLocalePaths: SingleLocalePath[] = [],
  opts: { locale?: Locale | 'all' | 'none' } = {},
): string {
  const include = opts.locale ?? 'all'
  const bilingual =
    include === 'none'
      ? []
      : locales
          .filter((l) => include === 'all' || l === include)
          .flatMap((l) =>
            PUBLIC_PATHS.map(
              (e) =>
                `<url><loc>${origin}${localizePath(l, e.path)}</loc><lastmod>${e.lastmod}</lastmod>${alternates(origin, e.path)}</url>`,
            ),
          )
  const single = singleLocalePaths.map((p) => {
    const entry = typeof p === 'string' ? { loc: p } : p
    const lastmod = entry.lastmod ? `<lastmod>${entry.lastmod}</lastmod>` : ''
    const links = entry.es
      ? `<xhtml:link rel="alternate" hreflang="${HREFLANG.en}" href="${origin}${entry.loc}"/><xhtml:link rel="alternate" hreflang="${HREFLANG.es}" href="${origin}${localizePath('es', entry.loc)}"/><xhtml:link rel="alternate" hreflang="x-default" href="${origin}${entry.loc}"/>`
      : ''
    return `<url><loc>${origin}${entry.loc}</loc>${lastmod}${links}</url>`
  })
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">${[...bilingual, ...single].join('')}</urlset>`
}

/** One locale's marketing pages (hreflang alternates to the sibling locale files). */
export function buildLocaleSitemap(
  origin: string,
  locale: Locale,
  entries: { path: string; lastmod?: string }[],
): string {
  const urls = entries.map(
    (e) =>
      `<url><loc>${origin}${localizePath(locale, e.path)}</loc>${e.lastmod ? `<lastmod>${e.lastmod}</lastmod>` : ''}${alternates(origin, e.path)}</url>`,
  )
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">${urls.join('')}</urlset>`
}

/** sitemap index aggregating the per-section sitemap files. */
export function buildSitemapIndex(origin: string, files: string[]): string {
  const items = files.map((f) => `<sitemap><loc>${origin}/${f}</loc></sitemap>`)
  return `<?xml version="1.0" encoding="UTF-8"?>\n<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${items.join('')}</sitemapindex>`
}

export interface HeadLink {
  rel: string
  href: string
  hreflang?: string // lowercase HTML attr — TanStack serializes head attrs verbatim
  as?: string
  type?: string
  fetchpriority?: string
}

export interface HeadMeta {
  title?: string
  name?: string
  property?: string
  content?: string
}

export function localeHead(input: {
  origin: string
  locale: Locale
  path: string
  title: string
  description: string
  ogTitle?: string
}): { meta: HeadMeta[]; links: HeadLink[] } {
  const { origin, locale, path, title, description, ogTitle } = input
  const canonical = `${origin}${localizePath(locale, path)}`
  const links: HeadLink[] = [{ rel: 'canonical', href: canonical }]
  for (const l of locales) {
    links.push({ rel: 'alternate', hreflang: HREFLANG[l], href: `${origin}${localizePath(l, path)}` })
  }
  links.push({
    rel: 'alternate',
    hreflang: 'x-default',
    href: `${origin}${localizePath(defaultLocale, path)}`,
  })
  const meta: HeadMeta[] = [
    { title },
    { name: 'description', content: description },
    { property: 'og:site_name', content: 'SUPsfactory' },
    { property: 'og:title', content: ogTitle ?? title },
    { property: 'og:description', content: description },
    { property: 'og:url', content: canonical },
    { property: 'og:locale', content: OG_LOCALE[locale] },
    { property: 'og:image', content: OG_IMAGE },
    { property: 'og:image:width', content: '1200' },
    { property: 'og:image:height', content: '630' },
    { property: 'og:image:type', content: 'image/webp' },
    { property: 'og:image:alt', content: 'SUPsfactory — Inflatable SUP OEM factory floor' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: title },
    { name: 'twitter:description', content: description },
    { name: 'twitter:image', content: OG_IMAGE },
    { name: 'twitter:image:alt', content: 'SUPsfactory — Inflatable SUP OEM factory floor' },
  ]
  return { meta, links }
}
