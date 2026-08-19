/**
 * Navigation configuration — site structure and page hierarchy.
 *
 * Defines the navigation tree, footer links, and page metadata that
 * previously were hardcoded across multiple marketing components.
 * Content-driven routes (products, solutions, news) are resolved by
 * the Content Registry and are not listed here.
 *
 * To deploy a new product: adjust the navigation items below.
 * The actual route handlers are generated from this structure.
 */

import { BRAND_PARENT_URL } from './branding'

export const ENTITY_PAGE_PATH = '/about/supsfactory-entity' as const

export const ABOUT_BRAND_PATH = '/about/afarer' as const

export const LEGACY_REDIRECTS: Record<string, string> = {
  '/about/afarer-brand': '/about',
  '/afarer-story': ABOUT_BRAND_PATH,
  '/brand-global-presence': '/about',
  '/brand-marine-expertise': '/about',
  '/brand-why-afarer': ABOUT_BRAND_PATH,
  '/aquafarer': '/about',
  '/people': '/about',
  '/geo-report': ABOUT_BRAND_PATH,
  '/disclaimer': '/terms',
  '/adventure-sup': '/products',
  '/all-around-sup': '/products',
  '/beginner-sup': '/products',
  '/bundles': '/products',
  '/fishing-sup': '/products',
  '/inflatable-sup': '/products',
  '/kids-sup': '/products',
  '/lightweight-sup': '/products',
  '/performance-sup': '/products',
  '/sup-accessories': '/products',
  '/touring-sup': '/products',
  '/travel-sup': '/products',
  '/ultra-stable-sup': '/products',
  '/whitewater-sup': '/products',
  '/yoga-sup': '/products',
  '/products/compare': '/inflatable-vs-hardboard',
  '/tech-specs': '/technology',
  '/odm-sup-board': '/odm-development',
  '/oem-sup-board': '/oem-manufacturing',
  '/oem-process': '/oem-manufacturing',
  '/sup-manufacturer': '/oem-manufacturing',
  '/solutions/by-industry': '/solutions',
  '/solutions/by-use-case': '/solutions',
  '/solutions/oem-brands': '/oem-manufacturing',
  '/solutions/diving-center-boats': '/solutions',
  '/solutions/fishing-boat-solutions': '/fishing',
  '/solutions/marine-tourism-equipment': '/tourism-recreation',
  '/solutions/rescue-watercraft': `${BRAND_PARENT_URL}/search-and-rescue`,
  '/solutions/yacht-tender-solutions': '/tourism-recreation',
  '/solutions-diving-center-boats': '/solutions',
  '/solutions-fishing-boat-solutions': '/fishing',
  '/solutions-marine-tourism-equipment': '/tourism-recreation',
  '/solutions-rescue-watercraft': `${BRAND_PARENT_URL}/search-and-rescue`,
  '/solutions-yacht-tender-solutions': '/tourism-recreation',
  '/buyer-center': '/solutions',
  '/marine-industry': '/solutions',
  '/v2': '/products',
  '/use-cases': '/solutions',
  '/use-cases/commercial-workboats': `${BRAND_PARENT_URL}/commercial-workboats`,
  '/use-cases/disaster-relief': `${BRAND_PARENT_URL}/disaster-relief-humanitarian-aid`,
  '/use-cases/fishing': '/fishing',
  '/use-cases/maritime-safety-defense': `${BRAND_PARENT_URL}/maritime-safety-defense`,
  '/use-cases/search-and-rescue': `${BRAND_PARENT_URL}/search-and-rescue`,
  '/use-cases/tourism-recreation': '/tourism-recreation',
  '/compare': '/inflatable-vs-hardboard',
  '/compare/inflatable-vs-hardboard': '/inflatable-vs-hardboard',
  '/compare/afarer-vs-traditional-manufacturers': '/about',
  '/compare/pvc-vs-hypalon': '/knowledge',
  '/compare/single-chamber-vs-multi-chamber': '/knowledge',
  '/design-powerhouse': '/technology',
  '/engineering-perfection': '/randdcenter',
  '/engineering-team': '/randdcenter',
  '/knowledge-graph': '/knowledge',
  '/ai-answer-center': '/faq',
  '/learn/inflatable-boat': '/knowledge',
  '/learn/materials': '/knowledge',
  '/learn/sup': '/knowledge',
  '/learn/water-safety': '/knowledge',
  '/guides/choosing-paddle': '/knowledge',
  '/guides/inflatable-repair': '/knowledge',
  '/guides/kayak-techniques': '/knowledge',
  '/guides/multi-day-trip': '/knowledge',
  '/guides/paddling-techniques': '/knowledge',
  '/guides/sup-fishing': '/knowledge',
  '/guides/sup-fitness': '/knowledge',
  '/guides/sup-maintenance': '/knowledge',
  '/guides/sup-with-kids': '/knowledge',
  '/guides/sup-yoga': '/knowledge',
  '/guides/understanding-specs': '/knowledge',
  '/guides/weather-conditions': '/knowledge',
  '/research/board-hull-design': '/knowledge',
  '/research/eva-foam-technology': '/knowledge',
  '/research/fin-systems-guide': '/knowledge',
  '/research/fusion-lamination-vs-glue': '/knowledge',
  '/research/military-grade-pvc-specs': '/knowledge',
  '/research/quality-testing-standards': '/knowledge',
  '/research/sup-manufacturing-process': '/knowledge',
  '/research/sup-paddle-technology': '/knowledge',
  '/research/sup-valve-types': '/knowledge',
  '/research/uv-printing-vs-eva-block': '/knowledge',
  '/resources/download-catalog': '/products',
}

export const GONE_PATHS: string[] = [
  '/waitlist', '/changelog', '/es/waitlist', '/es/changelog', '/zh/waitlist', '/zh/changelog',
  '/evidence/case-studies/marine-professional-operations',
  '/es/evidence/case-studies/marine-professional-operations',
]
