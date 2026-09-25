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
  'categories/rescue.webp': 'categories/isupfactory-rescue-operations.webp',
  'categories/rib.webp': 'categories/isupfactory-rib-boat-category.webp',
  'certifications/certifications-hero.webp': 'factory/isupfactory-factory-building.webp',
  'factory/design discussafarer-inflatable-boat-afarer-factory-exterior.webp': 'factory/isupfactory-design-discussion.webp',
  'factory/afarer-factory-aerial-1.webp': 'factory/isupfactory-factory-building.webp',
  'hero/hero-4.webp': 'hero/tech-meeting-small.webp',
  'hero/hero-5.webp': 'hero/isupfactory-hero-design-concept.webp',
  'hero/hero-scenic.webp': 'hero/production-dept.webp',
  'lifestyle/afarer-lifestyle-1.webp': 'use-cases/isupfactory-family-use-case.webp',
  'lifestyle/afarer-lifestyle-6.webp': 'use-cases/isupfactory-outdoor-adventure.webp',
  'news/afarer-rd-center-innovation.webp': 'factory/isupfactory-design-discussion.webp',
  'news/afarer-team-surfski.webp': 'team/isupfactory-paddle-girls-team.webp',
  'news/dealers.webp': 'news/isupfactory-dealers-network.webp',
  'news/oem-production-line.webp': 'factory/isupfactory-production-department.webp',
  'news/outdoor.webp': 'news/isupfactory-outdoor-events.webp',
  'news/quality.webp': 'news/isupfactory-quality-news.webp',
  'news/supply-chain.webp': 'news/isupfactory-supply-chain.webp',
  'partners/partners-hero.webp': 'team/isupfactory-meeting-overseas.webp',
  'products/accessories/oar-pump-1.webp': 'products/isupfactory-accessories-product.webp',
  'products/life-jacket-2.webp': 'products/isupfactory-life-vest-classic.webp',
  'products/life-jacket-afarer-inflatable-boat-afarer-factory-exterior.webp': 'products/isupfactory-inflatable-boat-factory.webp',
  'products/sup-series/sup-explorer-11.webp': 'products/sup-series/sup-ocean-voyager-1.webp',
  'products/sup-touring.webp': 'products/isupfactory-sup-boards-collection.webp',
  'use-cases/beginner.webp': 'use-cases/isupfactory-beginner-use-case.webp',
  'use-cases/family.webp': 'use-cases/isupfactory-family-use-case.webp',
  'use-cases/outdoor.webp': 'use-cases/isupfactory-outdoor-adventure.webp',
}
