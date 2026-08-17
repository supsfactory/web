import { getNonce } from '@/lib/csp'
import { FACTS } from '@/features/site/facts'
import { SITE_NAME, SITE_URL } from '@/config/site'
import { BRAND_PARENT_BRAND, BRAND_COMPANY_NAME } from '@/config/branding'

/**
 * Shared JSON-LD (schema.org) builders.
 *
 * Crawler-facing structured data lives inline in the SSR'd HTML with a CSP
 * nonce (see lib/csp.ts). All builders return plain objects that can be
 * serialized with JSON.stringify.
 */

export interface FaqQa {
  q: string
  a: string
}

/** Production origin for schema.org URLs (crawlers only hit prod). */
export const SITE_ORIGIN = SITE_URL

export function JsonLd({ data }: { data: Record<string, unknown> }) {
  const nonce = getNonce()
  return <script type="application/ld+json" nonce={nonce} dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
}

export function faqLd(faqs: FaqQa[], locale?: string): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    inLanguage: locale ?? 'en',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  }
}

/** ContactPage schema for /contact (entity signal for the inquiry route). */
export function contactPageLd(origin: string, path: string): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'Contact ' + SITE_NAME,
    url: `${origin}${path}`,
    about: 'SUP OEM/ODM manufacturing inquiry — project quotation, samples and production',
  }
}

/** AboutPage schema for /about (entity signal for the company page). */
export function aboutPageLd(origin: string, path: string, description: string): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    name: 'About ' + SITE_NAME,
    url: `${origin}${path}`,
    description,
  }
}

export function breadcrumbLd(origin: string, crumbs: { name: string; path: string }[]): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: c.name,
      item: `${origin}${c.path}`,
    })),
  }
}

/** Breadcrumbs for SUPsfactory's own pages (canonical origin). Home is prepended by callers. */
export function siteBreadcrumbLd(crumbs: { name: string; path: string }[]): Record<string, unknown> {
  return breadcrumbLd(SITE_ORIGIN, crumbs)
}

/** ItemList for collection hubs (solutions, projects, knowledge) — GEO shares lists well. */
export function itemListLd(items: { name: string; path: string }[]): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: items.map((it, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: it.name,
      url: `${SITE_ORIGIN}${it.path}`,
    })),
  }
}

/** Site-wide Organization + WebSite pair, emitted once on every page. */
export function siteLd(): Record<string, unknown>[] {
  return [
    {
      '@context': 'https://schema.org',
      '@type': ['Organization', 'Manufacturer'],
      '@id': `${SITE_ORIGIN}/#organization`,
      name: SITE_NAME,
      alternateName: 'Supsfactory',
      legalName: BRAND_COMPANY_NAME,
      url: `${SITE_ORIGIN}/`,
      logo: `${SITE_ORIGIN}/logo192.png`,
      description:
        'SUPS Factory is a professional custom SUP board manufacturer and OEM/ODM manufacturing partner serving brands, distributors, outdoor companies and water sports organizations. As the SUP product development and manufacturing division of Afarer (Qingdao Vatrad Group Co., Ltd.) — a 12,500 m² inflatable manufacturing plant in Qingdao, China — we build customized paddle board products from product development and prototype sampling to mass production and global delivery. We do not sell to end consumers and we do not compete with our clients in any market.',
      // 实体统一：SUPsfactory / Afarer / Qingdao Vatrad Group 是一家工厂，sameAs 连接
      // 母公司官网 + 社媒主页（与 footer 链接共用 FACTS.social，保持实体一致）。
      sameAs: ['https://afarer.com', FACTS.social.facebook, FACTS.social.linkedin, FACTS.social.youtube],
      parentOrganization: {
        '@type': 'Organization',
        name: BRAND_COMPANY_NAME,
        sameAs: 'https://afarer.com',
      },
      brand: { '@type': 'Brand', name: BRAND_PARENT_BRAND },
      numberOfEmployees: { '@type': 'QuantitativeValue', value: '350+' },
      hasCredential: [
        { '@type': 'EducationalOccupationalCredential', credentialCategory: 'certification', name: 'ISO 9001' },
        { '@type': 'EducationalOccupationalCredential', credentialCategory: 'certification', name: 'BSCI' },
        { '@type': 'EducationalOccupationalCredential', credentialCategory: 'certification', name: 'CE' },
        { '@type': 'EducationalOccupationalCredential', credentialCategory: 'certification', name: 'REACH / RoHS' },
      ],
      knowsAbout: [
        'SUP manufacturing',
        'inflatable paddle board factory',
        'SUP OEM / ODM',
        'custom paddle boards',
        'SUP product development',
        'SUP prototyping',
        'private label SUP',
        'drop stitch construction',
        'RF welding SUP',
        'SUP quality control',
      ],
      foundingLocation: { '@type': 'Place', name: 'Qingdao, China' },
      foundingDate: '2012',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Economic Development Zone, Laixi',
        addressLocality: 'Qingdao',
        addressRegion: 'Shandong',
        postalCode: '266600',
        addressCountry: 'CN',
      },
      contactPoint: [
        {
          '@type': 'ContactPoint',
          telephone: '+86-13305324192',
          email: 'info@supsfactory.com',
          contactType: 'sales',
          availableLanguage: ['English', 'Chinese', 'French', 'Spanish', 'Arabic', 'German'],
        },
        {
          '@type': 'ContactPoint',
          telephone: '+86-13305324192',
          email: 'info@supsfactory.com',
          contactType: 'customer service',
          availableLanguage: ['English', 'Chinese'],
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      '@id': `${SITE_ORIGIN}/#website`,
      url: `${SITE_ORIGIN}/`,
      name: SITE_NAME,
      inLanguage: 'en',
      publisher: { '@id': `${SITE_ORIGIN}/#organization` },
    },
  ]
}

/** Service entity for a solution page — what the business offers, provider-linked. */
export function serviceLd(input: {
  serviceType: string
  description: string
  path: string
}): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: input.serviceType,
    serviceType: input.serviceType,
    description: input.description,
    url: `${SITE_ORIGIN}${input.path}`,
    provider: { '@id': `${SITE_ORIGIN}/#organization` },
    areaServed: 'Worldwide',
    audience: {
      '@type': 'BusinessAudience',
      name: 'Businesses, brands, resorts, clubs, schools and organizations',
    },
  }
}

/** CaseStudy entity for a project page. */
export function projectLd(input: {
  title: string
  description: string
  path: string
  industry: string
  outcome: string
}): Record<string, unknown> {
  const url = `${SITE_ORIGIN}${input.path}`
  return {
    '@context': 'https://schema.org',
    '@type': ['Article', 'CaseStudy'],
    headline: input.title,
    description: input.description,
    url,
    about: { '@type': 'Thing', name: input.industry },
    result: input.outcome,
    author: { '@id': `${SITE_ORIGIN}/#organization` },
    publisher: { '@type': 'Organization', '@id': `${SITE_ORIGIN}/#organization`, name: SITE_NAME },
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
  }
}

export function newsArticleLd(input: {
  origin: string
  title: string
  description: string
  image?: string
  url: string
  datePublished: string
  dateModified?: string
  author?: string
  inLanguage?: string
}): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'NewsArticle',
    headline: input.title,
    description: input.description,
    image: input.image,
    url: input.url,
    datePublished: input.datePublished,
    ...(input.dateModified && input.dateModified !== input.datePublished
      ? { dateModified: input.dateModified }
      : {}),
    ...(input.author ? { author: { '@type': 'Person', name: input.author } } : {}),
    publisher: { '@type': 'Organization', '@id': `${SITE_ORIGIN}/#organization`, name: SITE_NAME },
    mainEntityOfPage: { '@type': 'WebPage', '@id': input.url },
    inLanguage: input.inLanguage ?? 'en',
  }
}

/** Article entity for knowledge-center guides. */
export function articleLd(input: {
  title: string
  description: string
  path: string
}): Record<string, unknown> {
  const url = `${SITE_ORIGIN}${input.path}`
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: input.title,
    description: input.description,
    url,
    author: { '@id': `${SITE_ORIGIN}/#organization` },
    publisher: { '@type': 'Organization', name: SITE_NAME },
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
  }
}

/**
 * ManufacturingFacility entity — the factory itself: plant, capacity, lines,
 * certifications, QC gates. Built exclusively from FACTS so the numbers match
 * the /factory page (single source of truth).
 */
export function factoryCapabilitiesLd(): Record<string, unknown> {
  return {
    '@type': 'ManufacturingFacility',
    name: `${SITE_NAME} Inflatable SUP Plant`,
    description:
      '12,500 m² inflatable SUP manufacturing plant in Qingdao, China — the SUP product development and manufacturing division of Afarer (Qingdao Vatrad Group Co., Ltd.).',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Economic Development Zone, Laixi',
      addressLocality: 'Qingdao',
      addressRegion: 'Shandong',
      postalCode: '266600',
      addressCountry: 'CN',
    },
    location: { '@type': 'Place', name: 'Qingdao, China' },
    employeeCount: FACTS.workers,
    numberOfEmployees: { '@type': 'QuantitativeValue', value: FACTS.workers },
    areaServed: FACTS.exportCountries,
    isicV4: '3012',
    // 运营能力（与 /factory 口径一致）
    operationalCapabilities: [
      { name: 'Production capacity', value: FACTS.annualCapacity },
      { name: 'Monthly capacity', value: FACTS.monthlyCapacity },
      { name: 'Production lines', value: FACTS.productionLines },
      { name: 'Workshops', value: FACTS.workshops },
      { name: 'CNC accuracy', value: FACTS.cncAccuracy },
      { name: 'RF welding power', value: FACTS.rfPower },
      { name: 'Drop-stitch pressure', value: FACTS.dropStitchPsi },
      { name: 'Export countries', value: FACTS.exportCountries },
    ],
    // MOQ 分档与交期
    offers: [
      {
        '@type': 'Offer',
        name: 'Trial / pilot order',
        description: 'Small pilot batch to validate spec before scaling',
        priceSpecification: { '@type': 'PriceSpecification', price: '0', priceCurrency: 'USD', description: `MOQ ${FACTS.moq.trialStandard}` },
      },
      {
        '@type': 'Offer',
        name: 'Standard production run',
        description: 'Regular bulk production per 150 m material roll',
        priceSpecification: { '@type': 'PriceSpecification', price: '0', priceCurrency: 'USD', description: `MOQ ${FACTS.moq.standardRun}` },
      },
    ],
    // 认证与第三方验厂
    hasCredential: FACTS.certifications.map((c) => ({
      '@type': 'EducationalOccupationalCredential',
      credentialCategory: 'certification',
      name: c,
    })),
    certification: FACTS.certifications,
    thirdPartyInspectors: FACTS.thirdPartyInspectors,
    // 质量体系
    qualityControl: {
      '@type': 'Thing',
      name: `${SITE_NAME} quality system`,
      description: `${FACTS.qualityGates} inspection gates · ${FACTS.assemblyChecklist} assembly checklist · ${FACTS.pressureTest} pressure hold · ${FACTS.traceabilityRet} ERP traceability per batch`,
    },
    foundingDate: '2012',
  }
}

/**
 * Brand heritage entity — founding story, milestones and manufacturing
 * experience for E-E-A-T. Dates beyond the 2012 founding are intentionally
 * generic: only factory facts the site can prove are asserted.
 */
export function brandHeritageLd(): Record<string, unknown> {
  return {
    '@type': 'Brand',
    name: SITE_NAME,
    alternateName: BRAND_PARENT_BRAND,
    description: FACTS.boilerplate,
    foundingDate: '2012',
    founder: 'Qingdao Vatrad Group Co., Ltd.',
    slogan: FACTS.buildLine,
    // 真实可证的历史节点（全部来自 FACTS / afarer 语料）
    historyHighlights: [
      { '@type': 'Event', name: 'Founding', startDate: '2012', description: 'Founded as the inflatable SUP manufacturing division of Qingdao Vatrad Group Co., Ltd.' },
      { '@type': 'Event', name: 'Plant operations', description: `${FACTS.warehouseM2} inflatable manufacturing plant with ${FACTS.workshops} in Qingdao, China.` },
      { '@type': 'Event', name: 'Certification', description: `Certified ${FACTS.certifications.join(', ')} — manufacturing quality, safety and social compliance.` },
      { '@type': 'Event', name: 'Global exports', description: `Supplies SUP OEM/ODM partners in ${FACTS.exportCountries} countries worldwide.` },
    ],
    certifications: FACTS.certifications,
    manufacturingExperience: {
      yearsInOperation: 'Since 2012',
      annualCapacity: FACTS.annualCapacity,
      monthlyCapacity: FACTS.monthlyCapacity,
      exportCountries: FACTS.exportCountries,
      leadTime: FACTS.leadTime,
      sampleTime: FACTS.sampleTime,
      moq: FACTS.moq,
      qualityGates: FACTS.qualityGates,
      traceability: FACTS.traceabilityRet,
    },
  }
}

/**
 * Enhanced site-wide FAQPage entity — categorized + priority-scored Q&A whose
 * answers are bound to FACTS so AI answer engines cite the same numbers the
 * site pages use.
 */
export function enhancedFaqLd(): Record<string, unknown> {
  const faqs: {
    q: string
    a: string
    category: string
    priority: number
    keywords: string[]
  }[] = [
    {
      q: `What is ${SITE_NAME}?`,
      a: FACTS.boilerplate,
      category: 'General',
      priority: 5,
      keywords: [SITE_NAME, 'SUP manufacturer', 'inflatable SUP factory', 'Qingdao'],
    },
    {
      q: 'What is the MOQ for custom SUP orders?',
      a: `Trial/pilot orders start at ${FACTS.moq.trialStandard}; standard production runs are ${FACTS.moq.standardRun} per 150 m material roll.`,
      category: 'Pricing',
      priority: 5,
      keywords: ['MOQ', 'minimum order quantity', 'pilot order', 'custom SUP'],
    },
    {
      q: 'What are the production and sampling lead times?',
      a: `Samples ship in ${FACTS.sampleTime}; bulk production is ${FACTS.leadTime} from confirmed PO and deposit. Custom mould development adds 15–20 days for tooling.`,
      category: 'Production',
      priority: 5,
      keywords: ['lead time', 'sample time', 'production time', 'bulk order'],
    },
    {
      q: 'Can you manufacture SUP boards with my own brand?',
      a: 'Yes — OEM and private-label manufacturing: engineering, tooling, sampling, production and export. You own the brand, the market and the customer.',
      category: 'Customization',
      priority: 5,
      keywords: ['private label', 'OEM', 'ODM', 'custom graphics', 'own brand'],
    },
    {
      q: 'What quality control do you run on every board?',
      a: `Every board passes ${FACTS.qualityGates} inspection gates including a ${FACTS.assemblyChecklist} assembly checklist and a ${FACTS.pressureTest} pressure hold. Batches keep ${FACTS.traceabilityRet} ERP traceability, and third-party inspections by ${FACTS.thirdPartyInspectors.join(', ')} are available.`,
      category: 'Technical',
      priority: 4,
      keywords: ['quality control', 'inspection', 'pressure test', 'QC', 'factory audit'],
    },
    {
      q: 'What certifications does the factory hold?',
      a: `${FACTS.certifications.join(', ')} — with third-party inspection by ${FACTS.thirdPartyInspectors.join(', ')}.`,
      category: 'Technical',
      priority: 4,
      keywords: ['certifications', 'ISO 9001', 'BSCI', 'CE', 'REACH', 'RoHS'],
    },
    {
      q: 'What warranty do you provide on bulk orders?',
      a: 'A 5-year limited warranty covers primary tube fabric, seams, drop-stitch core structural integrity, inflation valves and factory-installed accessories; commercial/rental use carries a 1-year warranty. Warranty terms are written into each order contract.',
      category: 'Warranty',
      priority: 5,
      keywords: ['warranty', '5 year warranty', 'after-sales', 'claim'],
    },
    {
      q: 'Do you ship worldwide?',
      a: `Yes — export to ${FACTS.exportCountries} countries with sea and air freight, full export documentation and customs brokerage support.`,
      category: 'Shipping',
      priority: 4,
      keywords: ['shipping', 'worldwide', 'export', 'freight', 'logistics'],
    },
    {
      q: 'Do you sell to end consumers?',
      a: FACTS.notRob,
      category: 'General',
      priority: 3,
      keywords: ['end consumer', 'retail', 'B2B', 'wholesale'],
    },
  ]
  return {
    '@type': 'FAQPage',
    inLanguage: 'en',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      category: f.category,
      priority: f.priority,
      keywords: f.keywords,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
    metadata: {
      totalFaqs: faqs.length,
      categories: [...new Set(faqs.map((f) => f.category))],
      avgPriority: Math.round(faqs.reduce((s, f) => s + f.priority, 0) / faqs.length * 10) / 10,
    },
  }
}

/** Warranty & after-sales entity — mirrors the public /warranty page terms. */
export function warrantyReturnsLd(): Record<string, unknown> {
  return {
    '@type': 'WarrantyPromise',
    durationOfWarranty: { '@type': 'QuantitativeValue', value: 5, unitCode: 'ANN' },
    warrantyScope: 'Defects in materials and workmanship',
    description:
      '5-year limited warranty on primary tube fabric, seams, drop-stitch core structural integrity, inflation valves and factory-installed accessories. Commercial, rental or instructional use reduces coverage to 1 year.',
    coverage: [
      { '@type': 'Thing', name: 'Primary tube fabric', warranty: '5 years' },
      { '@type': 'Thing', name: 'Seams', warranty: '5 years' },
      { '@type': 'Thing', name: 'Drop-stitch core structural integrity', warranty: '5 years' },
      { '@type': 'Thing', name: 'Inflation valves & factory-installed accessories', warranty: '5 years' },
      { '@type': 'Thing', name: 'Commercial / rental / instructional use', warranty: '1 year' },
    ],
    claimProcess: {
      '@type': 'HowTo',
      name: 'Warranty claim',
      description:
        `Contact ${SITE_NAME} through the contact page with your order number and product details; claims are adjudicated against the batch inspection records (10-year ERP traceability), not guesswork.`,
      step: [
        { '@type': 'HowToStep', position: 1, name: 'Contact sales', text: 'Reach us via the contact page with your order number and product details.' },
        { '@type': 'HowToStep', position: 2, name: 'Review against batch records', text: 'Claims are checked against the board serial number and 7-stage inspection records.' },
        { '@type': 'HowToStep', position: 3, name: 'Repair or replace', text: 'Defective components are repaired or replaced at our option, per the warranty terms in the order contract.' },
      ],
    },
  }
}

/** B2B shipping & logistics entity — export capabilities for procurement teams. */
export function shippingLogisticsLd(): Record<string, unknown> {
  return {
    '@type': 'ShippingDeliveryTime',
    description: `Export to ${FACTS.exportCountries} countries with production lead time ${FACTS.leadTime} and samples in ${FACTS.sampleTime}.`,
    shippingMethods: [
      { '@type': 'OfferShippingDetails', name: 'Sea freight', description: 'Bulk production shipments (LCL/FCL) — standard for 90–100+ board runs.' },
      { '@type': 'OfferShippingDetails', name: 'Air freight', description: 'Samples and urgent orders via air courier.' },
      { '@type': 'OfferShippingDetails', name: 'Express courier', description: 'DHL/FedEx/UPS for samples and small parcels.' },
    ],
    incoterms: ['EXW', 'FOB', 'CIF', 'DAP'],
    exportDocumentation: [
      'Commercial invoice',
      'Packing list',
      'Certificate of origin',
      'FQC test reports (final inspection)',
      'Batch traceability records (10-year ERP)',
    ],
    logisticsCapabilities: {
      customsBrokerage: true,
      exportCountries: FACTS.exportCountries,
      packaging: 'Export-grade packaging per destination; palletized sea-freight option.',
    },
  }
}

/** Product-variant FAQ entity — variant-specific questions on top of the base FAQ. */
export function productVariantFaqLd(input: {
  variantName: string
  baseProduct: string
  sku?: string
}): Record<string, unknown> {
  return {
    '@type': 'FAQPage',
    name: `${input.variantName} — variant FAQ`,
    mainEntity: [
      {
        '@type': 'Question',
        name: `What is the ${input.variantName}?`,
        category: 'General',
        acceptedAnswer: {
          '@type': 'Answer',
          text: `A variant of the ${input.baseProduct}${input.sku ? ` (SKU ${input.sku})` : ''}, manufactured to order with the customization options agreed in the purchase contract.`,
        },
      },
      {
        '@type': 'Question',
        name: 'Can variant artwork and packaging be customized?',
        category: 'Customization',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes — graphics, deck pad and packaging are customized per PO within the standard MOQ tiers.',
        },
      },
      {
        '@type': 'Question',
        name: 'What lead time applies to this variant?',
        category: 'Production',
        acceptedAnswer: {
          '@type': 'Answer',
          text: `Samples in ${FACTS.sampleTime}; bulk production ${FACTS.leadTime} after PO confirmation. Custom mould tooling adds 15–20 days.`,
        },
      },
    ],
  }
}
