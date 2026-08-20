import { FACTS, MOQ_SHORT, CERTIFICATION_NAMES } from '@/product/facts'
import { SITE_NAME, SITE_URL } from '@/config/site'
import { BRAND_PARENT_BRAND, BRAND_COMPANY_NAME, BRAND_CONTACT, BRAND_PARENT_URL } from '@/config/branding'
import { LLM_SITE_DESCRIPTION } from './ai-content'

const SITE_ORIGIN = SITE_URL

export function siteLd(): Record<string, unknown>[] {
  return [
    {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      '@id': `${SITE_ORIGIN}/#organization`,
      name: SITE_NAME,
      alternateName: SITE_NAME,
      legalName: BRAND_COMPANY_NAME,
      url: `${SITE_ORIGIN}/`,
      logo: `${SITE_ORIGIN}/logo192.png`,
      description: LLM_SITE_DESCRIPTION.replaceAll('{SITE}', SITE_NAME),
      sameAs: [BRAND_PARENT_URL, FACTS.social.facebook, FACTS.social.linkedin, FACTS.social.youtube],
      parentOrganization: {
        '@type': 'Organization',
        name: BRAND_COMPANY_NAME,
        sameAs: BRAND_PARENT_URL,
      },
      department: {
        '@type': 'Organization',
        name: BRAND_PARENT_BRAND,
        description: 'Marine manufacturing division of Qingdao Vatrad Group Co., Ltd.',
        sameAs: BRAND_PARENT_URL,
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
          telephone: BRAND_CONTACT.whatsapp,
          email: BRAND_CONTACT.email,
          contactType: 'sales',
          availableLanguage: ['English', 'Chinese', 'French', 'Spanish', 'Arabic', 'German'],
        },
        {
          '@type': 'ContactPoint',
          telephone: BRAND_CONTACT.whatsapp,
          email: BRAND_CONTACT.email,
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
      inLanguage: ['en', 'es'],
      publisher: { '@id': `${SITE_ORIGIN}/#organization` },
      potentialAction: {
        '@type': 'SearchAction',
        target: `${SITE_ORIGIN}/search?q={search_term_string}`,
        'query-input': 'required name=search_term_string',
      },
    },
  ]
}

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

export function factoryCapabilitiesLd(): Record<string, unknown> {
  return {
    '@type': 'ManufacturingFacility',
    name: `${SITE_NAME} Inflatable SUP Plant`,
    description:
      `12,500 m\u00b2 inflatable SUP manufacturing plant in Qingdao, China \u2014 the SUP product development and manufacturing division of ${BRAND_PARENT_BRAND} (${BRAND_COMPANY_NAME}).`,
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
    hasCredential: CERTIFICATION_NAMES.map((c) => ({
      '@type': 'EducationalOccupationalCredential',
      credentialCategory: 'certification',
      name: c,
    })),
    certification: CERTIFICATION_NAMES,
    foundingDate: '2012',
  }
}

export function brandHeritageLd(): Record<string, unknown> {
  return {
    '@type': 'Brand',
    name: SITE_NAME,
    alternateName: BRAND_PARENT_BRAND,
    description: FACTS.boilerplate,
    foundingDate: '2012',
    founder: BRAND_COMPANY_NAME,
    slogan: FACTS.buildLine,
    historyHighlights: [
      { '@type': 'Event', name: 'Founding', startDate: '2012', description: `Founded as the inflatable SUP manufacturing division of ${BRAND_COMPANY_NAME}.` },
      { '@type': 'Event', name: 'Plant operations', description: `${FACTS.warehouseM2} inflatable manufacturing plant with ${FACTS.workshops} in Qingdao, China.` },
      { '@type': 'Event', name: 'Certification', description: `Certified ${CERTIFICATION_NAMES.join(', ')} \u2014 manufacturing quality, safety and social compliance.` },
      { '@type': 'Event', name: 'Global exports', description: `Supplies SUP OEM/ODM partners in ${FACTS.exportCountries} countries worldwide.` },
    ],
    certifications: CERTIFICATION_NAMES,
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
      a: `Trial/pilot orders start at ${MOQ_SHORT.trialStandard}; standard production runs are ${MOQ_SHORT.standardRun}.`,
      category: 'Pricing',
      priority: 5,
      keywords: ['MOQ', 'minimum order quantity', 'pilot order', 'custom SUP'],
    },
    {
      q: 'What are the production and sampling lead times?',
      a: `Samples ship in ${FACTS.sampleTime}; bulk production is ${FACTS.leadTime} from confirmed PO and deposit. Custom mould development adds 15\u201320 days for tooling.`,
      category: 'Production',
      priority: 5,
      keywords: ['lead time', 'sample time', 'production time', 'bulk order'],
    },
    {
      q: 'Can you manufacture SUP boards with my own brand?',
      a: 'Yes \u2014 OEM and private-label manufacturing: engineering, tooling, sampling, production and export. You own the brand, the market and the customer.',
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
      a: `${CERTIFICATION_NAMES.join(', ')} \u2014 with third-party inspection by ${FACTS.thirdPartyInspectors.join(', ')}.`,
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
      a: `Yes \u2014 export to ${FACTS.exportCountries} countries with sea and air freight, full export documentation and customs brokerage support.`,
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

export function shippingLogisticsLd(): Record<string, unknown> {
  return {
    '@type': 'ShippingDeliveryTime',
    description: `Export to ${FACTS.exportCountries} countries with production lead time ${FACTS.leadTime} and samples in ${FACTS.sampleTime}.`,
    shippingMethods: [
      { '@type': 'OfferShippingDetails', name: 'Sea freight', description: 'Bulk production shipments (LCL/FCL) \u2014 standard for 90\u2013100+ board runs.' },
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

export function productVariantFaqLd(input: {
  variantName: string
  baseProduct: string
  sku?: string
}): Record<string, unknown> {
  return {
    '@type': 'FAQPage',
    name: `${input.variantName} \u2014 variant FAQ`,
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
          text: 'Yes \u2014 graphics, deck pad and packaging are customized per PO within the standard MOQ tiers.',
        },
      },
      {
        '@type': 'Question',
        name: 'What lead time applies to this variant?',
        category: 'Production',
        acceptedAnswer: {
          '@type': 'Answer',
          text: `Samples in ${FACTS.sampleTime}; bulk production ${FACTS.leadTime} after PO confirmation. Custom mould tooling adds 15\u201320 days.`,
        },
      },
    ],
  }
}

export function qcHowToLd(): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: '7-Stage SUP Quality Control Inspection',
    description: 'Every inflatable SUP board passes seven inspection gates with documented pass/fail criteria before shipment. Each gate has quantitative standards and traceability records.',
    step: [
      { '@type': 'HowToStep', position: 1, name: 'Incoming Material Inspection', text: 'PVC fabric, drop-stitch core and all raw materials inspected against specification before entering production. Batch certificates and REACH/RoHS declarations verified.' },
      { '@type': 'HowToStep', position: 2, name: 'Drop-Stitch Fabric Inspection', text: 'Drop-stitch thread density and fabric integrity verified. Thread count per inch checked against specification (96 or 140 threads/inch).' },
      { '@type': 'HowToStep', position: 3, name: 'Welding & Assembly', text: 'RF welding parameters (temperature, pressure, dwell time) logged per production run. Seam integrity inspected with documented reject rates.' },
      { '@type': 'HowToStep', position: 4, name: 'Pressure & Airtightness Testing', text: '18.0 PSI hold test for 24 hours. Auto-reject above 0.50 PSI pressure drop. Test logs retained per batch.' },
      { '@type': 'HowToStep', position: 5, name: 'EVA Pad & Accessory Installation', text: 'Traction pad alignment, fin box installation, D-ring placement and all accessories checked against frozen BOM specification.' },
      { '@type': 'HowToStep', position: 6, name: 'Graphic & Branding QC', text: 'Board graphics, logo placement and color accuracy verified against approved artwork. Brand application inspected per client specification.' },
      { '@type': 'HowToStep', position: 7, name: 'Final Packaging & Documentation', text: 'Export packaging, compliance documentation (CE, ISO 9001, BSCI, REACH, RoHS), certificates of conformity and batch traceability records verified before shipment.' },
    ],
  }
}
