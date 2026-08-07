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
  '/oem-odm': '/oem-odm-manufacturer',
  '/zh/oem-odm': '/es/oem-odm-manufacturer',
  // P0-4: retire Hifond dealer-recruitment posts (third-party brand leakage) → news hub
  '/news/afarer-supply-chain-2025': '/news',
  '/news/seeking-dealers-for-afarer': '/news',
  // P0-2: /request-quotation merged into /contact (single inquiry entry point)
  '/request-quotation': '/contact',
  '/es/request-quotation': '/es/contact',
  // P1-5: retire French-slug doorways (English content under fr-looking URLs) → closest English page
  '/fabricant-sup-gonflable': '/oem-odm-manufacturer',
  '/bateau-gonflable-fabricant': '/oem-odm-manufacturer',
  '/fournisseur-nautique': '/solutions/rental-operators',
  // P1-#8: collapse duplicate pages onto their modern keepers (single canonical per topic)
  '/custom': '/custom-sup-development',
  '/es/custom': '/es/custom-sup-development',
  '/quality-testing': '/quality',
  '/es/quality-testing': '/es/quality',
  '/safety': '/quality',
  '/es/safety': '/es/quality',
  '/trust': '/quality',
  '/es/trust': '/es/quality',
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
  '/zh/brand/afarer': '/about/afarer',
  '/brand/story': '/about/afarer',
  '/es/brand/story': '/es/about/afarer',
  '/zh/brand/story': '/about/afarer',
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
  '/commercial-workboats': 'https://afarer.com/commercial-workboats',
  '/es/commercial-workboats': 'https://afarer.com/es/commercial-workboats',
  '/zh/commercial-workboats': 'https://afarer.com/es/commercial-workboats',
  '/maritime-safety-defense': 'https://afarer.com/maritime-safety-defense',
  '/es/maritime-safety-defense': 'https://afarer.com/es/maritime-safety-defense',
  '/zh/maritime-safety-defense': 'https://afarer.com/es/maritime-safety-defense',
  '/search-and-rescue': 'https://afarer.com/search-and-rescue',
  '/es/search-and-rescue': 'https://afarer.com/es/search-and-rescue',
  '/zh/search-and-rescue': 'https://afarer.com/es/search-and-rescue',
  '/disaster-relief-humanitarian-aid': 'https://afarer.com/disaster-relief-humanitarian-aid',
  '/es/disaster-relief-humanitarian-aid': 'https://afarer.com/es/disaster-relief-humanitarian-aid',
  '/zh/disaster-relief-humanitarian-aid': 'https://afarer.com/es/disaster-relief-humanitarian-aid',
  '/products/life-vest-classic': 'https://afarer.com/products/life-vest-classic',
  '/es/products/life-vest-classic': 'https://afarer.com/es/products/life-vest-classic',
  '/zh/products/life-vest-classic': 'https://afarer.com/es/products/life-vest-classic',
  '/products/life-vest-pro': 'https://afarer.com/products/life-vest-pro',
  '/es/products/life-vest-pro': 'https://afarer.com/es/products/life-vest-pro',
  '/zh/products/life-vest-pro': 'https://afarer.com/es/products/life-vest-pro',
  '/products/oars-pump-set': 'https://afarer.com/products/oars-pump-set',
  '/es/products/oars-pump-set': 'https://afarer.com/es/products/oars-pump-set',
  '/zh/products/oars-pump-set': 'https://afarer.com/es/products/oars-pump-set',
}

import { LEGACY_REDIRECTS } from '@/features/seo/legacy-redirects'

const GONE_PATHS = ['/waitlist', '/changelog', '/es/waitlist', '/es/changelog', '/zh/waitlist', '/zh/changelog']

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
    // the final destination instead of 301 → 301 (e.g. /oem-odm/ → /oem-odm-manufacturer).
    const direct = EDGE_REDIRECTS[path] ?? LEGACY_REDIRECTS[path]
    if (direct) return { action: 'redirect', to: direct }
    return { action: 'slash', to: path }
  }
  const redirect = EDGE_REDIRECTS[path]
  if (redirect) return { action: 'redirect', to: redirect }
  const legacy = LEGACY_REDIRECTS[path]
  if (legacy) return { action: 'redirect', to: legacy }
  if (path === '/docs' || path.startsWith('/docs/') || GONE_PATHS.includes(path)) return { action: 'gone' }
  // Legacy Chinese URLs — the zh locale is gone, so /zh/* 301s to its /es mirror.
  if (path === '/zh' || path.startsWith('/zh/')) {
    return { action: 'redirect', to: path === '/zh' ? '/es' : `/es${path.slice(3)}` }
  }
  return { action: 'ok' }
}
