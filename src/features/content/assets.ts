/**
 * Central afarer asset URL rewrite.
 *
 * afarer content keeps its legacy `assets.afarer.com` hotlinks (YAML/MDX are
 * copied verbatim from the source repo). At every render boundary we map those
 * onto our own R2-backed CDN (`assets.supsfactory.com`) under the `images/sups/`
 * prefix. Refs that point at files missing from the source tree are remapped to
 * a real sibling image so the site never renders a broken asset.
 *
 * The upload script (`scripts/upload-afarer-images.ts`) mirrors the whole
 * `images/afarer/` tree into R2 at `images/sups/`, so every path below exists.
 */

const CDN_BASE = 'https://assets.supsfactory.com'
const CDN_PREFIX = 'images/sups/'
const LEGACY_PREFIX = 'https://assets.afarer.com/images/afarer/'

/** Missing-in-source refs → real sibling file (paths relative to images/afarer/). */
const MISSING_IMAGE_MAP: Record<string, string> = {
  'categories/rescue.webp': 'categories/afarer-rescue-operations.webp',
  'categories/rib.webp': 'categories/afarer-rib-boat-category.webp',
  'certifications/certifications-hero.webp': 'factory/afarer-factory-building.webp',
  'factory/design discussafarer-inflatable-boat-afarer-factory-exterior.webp': 'factory/afarer-design-discussion.webp',
  'factory/afarer-factory-aerial-1.webp': 'factory/afarer-factory-building.webp',
  'hero/hero-4.webp': 'hero/tech-meeting-small.webp',
  'hero/hero-5.webp': 'hero/afarer-hero-design-concept.webp',
  'hero/hero-scenic.webp': 'hero/production-dept.webp',
  'lifestyle/afarer-lifestyle-1.webp': 'use-cases/afarer-family-use-case.webp',
  'lifestyle/afarer-lifestyle-6.webp': 'use-cases/afarer-outdoor-adventure.webp',
  'news/afarer-rd-center-innovation.webp': 'factory/afarer-design-discussion.webp',
  'news/afarer-team-surfski.webp': 'team/afarer-paddle-girls-team.webp',
  'news/dealers.webp': 'news/afarer-dealers-network.webp',
  'news/oem-production-line.webp': 'factory/afarer-production-department.webp',
  'news/outdoor.webp': 'news/afarer-outdoor-events.webp',
  'news/quality.webp': 'news/afarer-quality-news.webp',
  'news/supply-chain.webp': 'news/afarer-supply-chain.webp',
  'partners/partners-hero.webp': 'team/afarer-meeting-overseas.webp',
  'products/accessories/oar-pump-1.webp': 'products/afarer-accessories-product.webp',
  'products/life-jacket-2.webp': 'products/afarer-life-vest-classic.webp',
  'products/life-jacket-afarer-inflatable-boat-afarer-factory-exterior.webp': 'products/afarer-inflatable-boat-factory.webp',
  'products/sup-series/sup-explorer-11.webp': 'products/sup-series/sup-ocean-voyager-1.webp',
  'products/sup-touring.webp': 'products/afarer-sup-boards-collection.webp',
  'use-cases/beginner.webp': 'use-cases/afarer-beginner-use-case.webp',
  'use-cases/family.webp': 'use-cases/afarer-family-use-case.webp',
  'use-cases/outdoor.webp': 'use-cases/afarer-outdoor-adventure.webp',
}

/** Maps a legacy afarer asset URL onto our R2-backed CDN; non-legacy URLs pass through. */
export function assetUrl(url: string): string {
  if (!url || !url.startsWith(LEGACY_PREFIX)) return url
  const rel = url.slice(LEGACY_PREFIX.length)
  return `${CDN_BASE}/${CDN_PREFIX}${MISSING_IMAGE_MAP[rel] ?? rel}`
}
