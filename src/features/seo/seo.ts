import { locales, defaultLocale, localizePath, type Locale } from '@/features/i18n/locale'

const PUBLIC_PATHS = [
  '/',
  '/solutions',
  '/products',
  '/who-we-serve',
  '/how-it-works',
  '/gallery',
  '/about',
  '/contact',
  '/customizer',
  '/waitlist',
  '/changelog',
  '/custom-sup-manufacturing',
  '/private-label-sup',
  '/sup-for-resorts',
  '/sup-for-clubs',
  '/sup-startup-brands',
  '/terms',
  '/privacy',
] as const

// Open Graph 要求 language_TERRITORY 形态（en_US），裸语言码会被严格解析器忽略。
const OG_LOCALE: Record<Locale, string> = { en: 'en_US', zh: 'zh_CN' }

// 社交分享封面：真实产品图（assets.supsfactory.com，自有 R2 CDN）比 logo 更适合做 OG 图。
export const OG_IMAGE = 'https://assets.supsfactory.com/images/sups/products/afarer-sup-allround-board.webp'

export function buildRobots(origin: string): string {
  return [
    'User-agent: *',
    'Allow: /',
    'Disallow: /*/app',
    'Disallow: /app',
    'Disallow: /*/admin',
    'Disallow: /admin',
    'Disallow: /api',
    `Sitemap: ${origin}/sitemap.xml`,
    // LLM/GEO-friendly endpoints (no standard robots directive — comment for discovery).
    `# llms.txt: ${origin}/llms.txt`,
    `# llms-full.txt: ${origin}/llms-full.txt`,
    `# entity.json: ${origin}/entity.json`,
    `# RSS: ${origin}/rss.xml`,
    '',
  ].join('\n')
}

function alternates(origin: string, path: string): string {
  const links = locales.map(
    (l) => `<xhtml:link rel="alternate" hreflang="${l}" href="${origin}${localizePath(l, path)}"/>`,
  )
  links.push(
    `<xhtml:link rel="alternate" hreflang="x-default" href="${origin}${localizePath(defaultLocale, path)}"/>`,
  )
  return links.join('')
}

export interface SitemapEntry {
  loc: string
  lastmod?: string
}

type SingleLocalePath = string | SitemapEntry

export function buildSitemap(origin: string, singleLocalePaths: SingleLocalePath[] = []): string {
  const bilingual = locales.flatMap((l) =>
    PUBLIC_PATHS.map(
      (p) => `<url><loc>${origin}${localizePath(l, p)}</loc>${alternates(origin, p)}</url>`,
    ),
  )
  const single = singleLocalePaths.map((p) => {
    const entry = typeof p === 'string' ? { loc: p } : p
    const lastmod = entry.lastmod ? `<lastmod>${entry.lastmod}</lastmod>` : ''
    return `<url><loc>${origin}${entry.loc}</loc>${lastmod}</url>`
  })
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">${[...bilingual, ...single].join('')}</urlset>`
}

export interface HeadLink {
  rel: string
  href: string
  hrefLang?: string  // React/HTML camelCase prop name (renders to the `hreflang` attribute)
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
}): { meta: HeadMeta[]; links: HeadLink[] } {
  const { origin, locale, path, title, description } = input
  const canonical = `${origin}${localizePath(locale, path)}`
  const links: HeadLink[] = [{ rel: 'canonical', href: canonical }]
  for (const l of locales) {
    links.push({ rel: 'alternate', hrefLang: l, href: `${origin}${localizePath(l, path)}` })
  }
  links.push({
    rel: 'alternate',
    hrefLang: 'x-default',
    href: `${origin}${localizePath(defaultLocale, path)}`,
  })
  const meta: HeadMeta[] = [
    { title },
    { name: 'description', content: description },
    { property: 'og:site_name', content: 'SUPsfactory' },
    { property: 'og:title', content: title },
    { property: 'og:description', content: description },
    { property: 'og:url', content: canonical },
    { property: 'og:locale', content: OG_LOCALE[locale] },
    { property: 'og:image', content: OG_IMAGE },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: title },
    { name: 'twitter:description', content: description },
    { name: 'twitter:image', content: OG_IMAGE },
  ]
  return { meta, links }
}
