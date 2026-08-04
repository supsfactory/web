import { getNonce } from '@/lib/csp'

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
export const SITE_ORIGIN = 'https://supsfactory.com'

export function JsonLd({ data }: { data: Record<string, unknown> }) {
  const nonce = getNonce()
  return <script type="application/ld+json" nonce={nonce} dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
}

export function faqLd(faqs: FaqQa[]): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
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
      '@type': 'Organization',
      '@id': `${SITE_ORIGIN}/#organization`,
      name: 'SUPsfactory',
      alternateName: 'Supsfactory',
      legalName: 'Qingdao Vatrad Group Co., Ltd.',
      url: `${SITE_ORIGIN}/`,
      logo: `${SITE_ORIGIN}/logo192.png`,
      description:
        'Supsfactory is a custom SUP product development and manufacturing partner. We help businesses, brands, resorts and organizations turn SUP product ideas into finished products through customization, product development, prototyping and reliable manufacturing support.',
      parentOrganization: {
        '@type': 'Organization',
        name: 'Afarer',
        description: 'Afarer is the SUP manufacturing brand of Qingdao Vatrad Group Co., Ltd. — OEM/ODM inflatable SUP production in Qingdao, China.',
      },
      knowsAbout: [
        'SUP manufacturing',
        'custom paddle boards',
        'SUP product development',
        'SUP prototyping',
        'private label SUP',
        'OEM manufacturing',
        'custom SUP design',
        'resort SUP equipment',
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
      brand: { '@type': 'Brand', name: 'SUPsfactory' },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      '@id': `${SITE_ORIGIN}/#website`,
      url: `${SITE_ORIGIN}/`,
      name: 'SUPsfactory',
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
    publisher: { '@type': 'Organization', name: 'SUPsfactory' },
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
    publisher: { '@type': 'Organization', name: 'Afarer' },
    mainEntityOfPage: { '@type': 'WebPage', '@id': input.url },
    inLanguage: 'en',
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
    publisher: { '@type': 'Organization', name: 'SUPsfactory' },
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
  }
}
