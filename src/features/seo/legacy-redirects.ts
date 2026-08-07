/**
 * Legacy theafarer-era URLs (pre-SUPsfactory site, English-only) → live pages.
 *
 * Every key is a URL that existed on the old afarer marketing site but no longer
 * resolves on this codebase. They 301 to the closest current page. Targets must
 * be real routes (or entries in EDGE_REDIRECTS) — verified by edge-gate tests.
 *
 * Keys must NEVER shadow a live page: paths served by this codebase (registry /
 * EXTRA_PATHS pages, /guides/{slug} guides, static template routes) are removed
 * from this map when the new site revives them — enforced by edge-gate tests.
 */
export const LEGACY_REDIRECTS: Record<string, string> = {
  // --- About / brand ---
  '/about/afarer-brand': '/brand',
  '/afarer-story': '/afarer',
  '/brand-global-presence': '/brand',
  '/brand-marine-expertise': '/brand',
  '/brand-why-afarer': '/brand',
  '/aquafarer': '/brand',
  '/people': '/about',
  '/geo-report': '/afarer',
  '/disclaimer': '/terms',

  // --- Products (old product-era pages) ---
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

  // --- OEM / ODM / manufacturing ---
  '/odm-sup-board': '/oem-odm-manufacturer',
  '/oem-sup-board': '/oem-odm-manufacturer',
  '/oem-process': '/oem-odm-manufacturer',
  '/sup-manufacturer': '/oem-odm-manufacturer',

  // --- Solutions ---
  '/solutions/by-industry': '/solutions',
  '/solutions/by-use-case': '/solutions',
  '/solutions/oem-brands': '/oem-odm-manufacturer',
  '/solutions/diving-center-boats': '/solutions',
  '/solutions/fishing-boat-solutions': '/fishing',
  '/solutions/marine-tourism-equipment': '/tourism-recreation',
  '/solutions/rescue-watercraft': '/search-and-rescue',
  '/solutions/yacht-tender-solutions': '/tourism-recreation',
  '/solutions-diving-center-boats': '/solutions',
  '/solutions-fishing-boat-solutions': '/fishing',
  '/solutions-marine-tourism-equipment': '/tourism-recreation',
  '/solutions-rescue-watercraft': '/search-and-rescue',
  '/solutions-yacht-tender-solutions': '/tourism-recreation',
  '/buyer-center': '/solutions',
  '/marine-industry': '/solutions',
  '/v2': '/products',

  // --- Use cases ---
  '/use-cases': '/solutions',
  '/use-cases/commercial-workboats': '/commercial-workboats',
  '/use-cases/disaster-relief': '/disaster-relief-humanitarian-aid',
  '/use-cases/fishing': '/fishing',
  '/use-cases/maritime-safety-defense': '/maritime-safety-defense',
  '/use-cases/search-and-rescue': '/search-and-rescue',
  '/use-cases/tourism-recreation': '/tourism-recreation',

  // --- Compare ---
  '/compare': '/inflatable-vs-hardboard',
  '/compare/inflatable-vs-hardboard': '/inflatable-vs-hardboard',
  '/compare/afarer-vs-traditional-manufacturers': '/brand',
  '/compare/pvc-vs-hypalon': '/research',
  '/compare/single-chamber-vs-multi-chamber': '/research',

  // --- Factory / R&D / engineering ---
  '/design-powerhouse': '/technology',
  '/engineering-perfection': '/randdcenter',
  '/engineering-team': '/randdcenter',

  // --- Knowledge / content hubs ---
  '/knowledge-graph': '/knowledge',
  '/ai-answer-center': '/faq',
  '/learn/inflatable-boat': '/learn',
  '/learn/materials': '/learn',
  '/learn/sup': '/learn',
  '/learn/water-safety': '/learn',
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
  '/research/board-hull-design': '/research',
  '/research/eva-foam-technology': '/research',
  '/research/fin-systems-guide': '/research',
  '/research/fusion-lamination-vs-glue': '/research',
  '/research/military-grade-pvc-specs': '/research',
  '/research/quality-testing-standards': '/research',
  '/research/sup-manufacturing-process': '/research',
  '/research/sup-paddle-technology': '/research',
  '/research/sup-valve-types': '/research',
  '/research/uv-printing-vs-eva-block': '/research',
  '/resources/download-catalog': '/request-quotation',
}
