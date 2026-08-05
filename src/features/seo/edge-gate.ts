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
  '/brand/afarer': '/afarer',
  '/zh/brand/afarer': '/afarer',
  '/brand/story': '/afarer',
  '/zh/brand/story': '/afarer',
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
