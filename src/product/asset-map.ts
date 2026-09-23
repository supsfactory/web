/**
 * Product-specific asset configuration — legacy CDN prefix, R2 key prefix,
 * and missing-image fallback map.
 *
 * The framework's assetUrl() function consumes these values to rewrite
 * legacy CDN hotlinks onto the R2-backed CDN. When deploying a new product,
 * replace the prefix and map below with the new brand's asset structure.
 */

export const ASSET_CDN_PREFIX = 'images/sups/'

export const ASSET_LEGACY_SUBDIR = 'afarer/'

export const MISSING_IMAGE_MAP: Record<string, string> = {
  'categories/rescue.webp': 'categories/supsfactory-rescue-operations.webp',
  'categories/rib.webp': 'categories/supsfactory-rib-boat-category.webp',
  'certifications/certifications-hero.webp': 'factory/supsfactory-factory-building.webp',
  'factory/design discussafarer-inflatable-boat-afarer-factory-exterior.webp': 'factory/supsfactory-design-discussion.webp',
  'factory/afarer-factory-aerial-1.webp': 'factory/supsfactory-factory-building.webp',
  'hero/hero-4.webp': 'hero/tech-meeting-small.webp',
  'hero/hero-5.webp': 'hero/supsfactory-hero-design-concept.webp',
  'hero/hero-scenic.webp': 'hero/production-dept.webp',
  'lifestyle/afarer-lifestyle-1.webp': 'use-cases/supsfactory-family-use-case.webp',
  'lifestyle/afarer-lifestyle-6.webp': 'use-cases/supsfactory-outdoor-adventure.webp',
  'news/afarer-rd-center-innovation.webp': 'factory/supsfactory-design-discussion.webp',
  'news/afarer-team-surfski.webp': 'team/supsfactory-paddle-girls-team.webp',
  'news/dealers.webp': 'news/supsfactory-dealers-network.webp',
  'news/oem-production-line.webp': 'factory/supsfactory-production-department.webp',
  'news/outdoor.webp': 'news/supsfactory-outdoor-events.webp',
  'news/quality.webp': 'news/supsfactory-quality-news.webp',
  'news/supply-chain.webp': 'news/supsfactory-supply-chain.webp',
  'partners/partners-hero.webp': 'team/supsfactory-meeting-overseas.webp',
  'products/accessories/oar-pump-1.webp': 'products/supsfactory-accessories-product.webp',
  'products/life-jacket-2.webp': 'products/supsfactory-life-vest-classic.webp',
  'products/life-jacket-afarer-inflatable-boat-afarer-factory-exterior.webp': 'products/supsfactory-inflatable-boat-factory.webp',
  'products/sup-series/sup-explorer-11.webp': 'products/sup-series/sup-ocean-voyager-1.webp',
  'products/sup-touring.webp': 'products/supsfactory-sup-boards-collection.webp',
  'use-cases/beginner.webp': 'use-cases/supsfactory-beginner-use-case.webp',
  'use-cases/family.webp': 'use-cases/supsfactory-family-use-case.webp',
  'use-cases/outdoor.webp': 'use-cases/supsfactory-outdoor-adventure.webp',
}
