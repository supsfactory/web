/**
 * Edge URL policy — applied in worker.ts before the framework handler.
 *
 * P0-4: 301 merge of duplicate pages (canonical target must not redirect again).
 * P0-x: 301 legacy theafarer-era URLs (see legacy-redirects.ts).
 * P0-2: 410 for removed SaaS-template pages (/docs, /waitlist, /changelog).
 * P0-6: trailing-slash normalisation (301 to the slash-less URL).
 * zh→es: every remaining /zh/* URL 301s to its /es mirror — the zh locale was
 * retired (its afarer pages were English duplicates of the en twins).
 */
export const EDGE_REDIRECTS: Record<string, string> = {
  '/oem-odm': '/oem-manufacturing',
  '/zh/oem-odm': '/es/oem-manufacturing',
  // P0-4: OEM/ODM split into two focused pages — merged page 301s to OEM keeper
  '/oem-odm-manufacturer': '/oem-manufacturing',
  '/es/oem-odm-manufacturer': '/es/oem-manufacturing',
  '/zh/oem-odm-manufacturer': '/es/oem-manufacturing',
  // P0-4: retire Hifond dealer-recruitment posts (third-party brand leakage) → news hub
  '/news/afarer-supply-chain-2025': '/news',
  '/news/seeking-dealers-for-afarer': '/news',
  // P0-2: /request-quotation merged into /contact (single inquiry entry point)
  '/request-quotation': '/contact',
  '/es/request-quotation': '/es/contact',
  // P1-5: retire French-slug doorways (English content under fr-looking URLs) → closest English page
  '/fabricant-sup-gonflable': '/oem-manufacturing',
  '/bateau-gonflable-fabricant': '/oem-manufacturing',
  '/fournisseur-nautique': '/solutions/rental-operators',
  // P1-#8: collapse duplicate pages onto their modern keepers (single canonical per topic)
  '/custom': '/product-development',
  '/es/custom': '/es/product-development',
  '/quality-testing': '/quality',
  '/es/quality-testing': '/es/quality',
  '/safety': '/quality',
  '/es/safety': '/es/quality',
  '/trust': '/quality',
  '/es/trust': '/es/quality',
  // P1-#8: QC page canonical moves to the factory cluster (/quality stays certifications)
  '/quality-control': '/factory/quality-inspection',
  '/es/quality-control': '/es/factory/quality-inspection',
  '/solutions/resorts-hotels': '/solutions/resort-sup',
  '/es/solutions/resorts-hotels': '/es/solutions/resort-sup',
  '/solutions/paddle-clubs': '/solutions/club-sup',
  '/es/solutions/paddle-clubs': '/es/solutions/club-sup',
  '/solutions/build-your-own-brand': '/solutions/private-label-sup',
  '/es/solutions/build-your-own-brand': '/es/solutions/private-label-sup',
  // P1-3: collapse the 8 brand sub-pages onto /about (story + values + team) and /about/afarer (brand page)
  '/afarer': '/about/afarer',
  '/es/afarer': '/es/about/afarer',
  '/zh/afarer': '/es/about/afarer',
  '/brand': '/about',
  '/es/brand': '/es/about',
  '/zh/brand': '/es/about',
  '/brand/afarer': '/about/afarer',
  '/es/brand/afarer': '/es/about/afarer',
  '/zh/brand/afarer': '/es/about/afarer',
  '/brand/story': '/about/afarer',
  '/es/brand/story': '/es/about/afarer',
  '/zh/brand/story': '/es/about/afarer',
  '/brand/global-presence': '/about',
  '/es/brand/global-presence': '/es/about',
  '/brand/marine-expertise': '/about',
  '/es/brand/marine-expertise': '/es/about',
  '/brand/team': '/about',
  '/es/brand/team': '/es/about',
  '/brand/why-afarer': '/about/afarer',
  '/es/brand/why-afarer': '/es/about/afarer',
  // P1-7: non-SUP business lines migrate to afarer.com (supsfactory stays SUP-only).
  // afarer.com already carries these pages/products (EN + /es); hand off with a single hop.
  '/commercial-workboats': `${BRAND_PARENT_URL}/commercial-workboats`,
  '/es/commercial-workboats': `${BRAND_PARENT_URL}/es/commercial-workboats`,
  '/zh/commercial-workboats': `${BRAND_PARENT_URL}/es/commercial-workboats`,
  '/maritime-safety-defense': `${BRAND_PARENT_URL}/maritime-safety-defense`,
  '/es/maritime-safety-defense': `${BRAND_PARENT_URL}/es/maritime-safety-defense`,
  '/zh/maritime-safety-defense': `${BRAND_PARENT_URL}/es/maritime-safety-defense`,
  '/search-and-rescue': `${BRAND_PARENT_URL}/search-and-rescue`,
  '/es/search-and-rescue': `${BRAND_PARENT_URL}/es/search-and-rescue`,
  '/zh/search-and-rescue': `${BRAND_PARENT_URL}/es/search-and-rescue`,
  '/disaster-relief-humanitarian-aid': `${BRAND_PARENT_URL}/disaster-relief-humanitarian-aid`,
  '/es/disaster-relief-humanitarian-aid': `${BRAND_PARENT_URL}/es/disaster-relief-humanitarian-aid`,
  '/zh/disaster-relief-humanitarian-aid': `${BRAND_PARENT_URL}/es/disaster-relief-humanitarian-aid`,
  '/products/life-vest-classic': `${BRAND_PARENT_URL}/products/life-vest-classic`,
  '/es/products/life-vest-classic': `${BRAND_PARENT_URL}/es/products/life-vest-classic`,
  '/zh/products/life-vest-classic': `${BRAND_PARENT_URL}/es/products/life-vest-classic`,
  '/products/life-vest-pro': `${BRAND_PARENT_URL}/products/life-vest-pro`,
  '/es/products/life-vest-pro': `${BRAND_PARENT_URL}/es/products/life-vest-pro`,
  '/zh/products/life-vest-pro': `${BRAND_PARENT_URL}/es/products/life-vest-pro`,
  '/products/oars-pump-set': `${BRAND_PARENT_URL}/products/oars-pump-set`,
  '/es/products/oars-pump-set': `${BRAND_PARENT_URL}/es/products/oars-pump-set`,
  '/zh/products/oars-pump-set': `${BRAND_PARENT_URL}/es/products/oars-pump-set`,
  // P1-2: consolidate the 10 template-driven content hubs onto the 4 keepers
  // (/knowledge + /projects are the ESM hubs; /news + /technology are afarer
  // registry pages). The real content under each hub stays live — /guides/*,
  // /research/*, /evidence/case-studies/* sub-pages are served as before; only
  // the duplicate hub indexes 301. /evidence/case-studies stays live (real
  // case index with 4 ported case studies), only /evidence itself merges.
  '/learn': '/knowledge',
  '/es/learn': '/es/knowledge',
  '/academy': '/knowledge',
  '/es/academy': '/es/knowledge',
  '/guides': '/knowledge',
  '/es/guides': '/es/knowledge',
  '/research': '/knowledge',
  '/es/research': '/es/knowledge',
  '/resources': '/knowledge',
  '/es/resources': '/es/knowledge',
  '/es/resources/download-catalog': '/es/products',
  '/community': '/knowledge',
  '/es/community': '/es/knowledge',
  '/lifestyle': '/knowledge',
  '/es/lifestyle': '/es/knowledge',
  '/journal': '/news',
  '/es/journal': '/es/news',
  '/media': '/products',
  '/es/media': '/es/products',
  '/evidence': '/projects',
  '/es/evidence': '/es/projects',
  // SEO alias for the project gallery (supsfactory case studies live on /projects)
  '/case-studies': '/projects',
  '/es/case-studies': '/es/projects',
  // P1-9: dead whitepaper PDF links in news articles fold into the OEM landing page
  '/whitepaper/oem-sup-manufacturing-guide': '/oem-manufacturing',
  '/es/whitepaper/oem-sup-manufacturing-guide': '/es/oem-manufacturing',
  // consolidated news articles fold into their successor guides
  '/news/sup-oem-shipping-logistics': '/news/private-label-sup-oem-guide',
  '/es/news/sup-oem-shipping-logistics': '/es/news/private-label-sup-oem-guide',
  '/news/importing-sup-from-china-guide': '/news/private-label-sup-guide',
  '/es/news/importing-sup-from-china-guide': '/es/news/private-label-sup-guide',
}

import { LEGACY_REDIRECTS } from '@/features/seo/legacy-redirects'
import { GONE_PATHS as CONFIG_GONE_PATHS } from '@/config/navigation'
import { BRAND_PARENT_URL } from '@/config/branding'

const GONE_PATHS = CONFIG_GONE_PATHS

export type EdgeGate =
  | { action: 'ok' }
  | { action: 'redirect'; to: string }
  | { action: 'gone' }
  | { action: 'slash'; to: string }

export function gatePath(pathname: string): EdgeGate {
  if (pathname.startsWith('/api') || pathname.startsWith('/app') || pathname.startsWith('/admin')) {
    return { action: 'ok' }
  }
  const path = pathname.length > 1 && pathname.endsWith('/') ? pathname.replace(/\/+$/, '') : pathname
  if (path !== pathname) {
    // Single-hop: a trailing-slash URL that has a 301 target jumps straight to
    // the final destination instead of 301 → 301 (e.g. /oem-odm/ → /oem-manufacturing).
    const direct = EDGE_REDIRECTS[path] ?? LEGACY_REDIRECTS[path]
    if (direct) return { action: 'redirect', to: direct }
    return { action: 'slash', to: path }
  }
  const redirect = EDGE_REDIRECTS[path]
  if (redirect) return { action: 'redirect', to: redirect }
  const legacy = LEGACY_REDIRECTS[path]
  if (legacy) return { action: 'redirect', to: legacy }
  const gone =
    path === '/docs' ||
    path.startsWith('/docs/') ||
    path === '/es/docs' ||
    path.startsWith('/es/docs/') ||
    path === '/zh/docs' ||
    path.startsWith('/zh/docs/') ||
    GONE_PATHS.includes(path)
  if (gone) return { action: 'gone' }
  // Legacy Chinese URLs — the zh locale is gone, so /zh/* 301s to its /es mirror.
  if (path === '/zh' || path.startsWith('/zh/')) {
    return { action: 'redirect', to: path === '/zh' ? '/es' : `/es${path.slice(3)}` }
  }
  return { action: 'ok' }
}
