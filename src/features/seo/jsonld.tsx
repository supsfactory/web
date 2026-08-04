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

/** Site-wide Organization + WebSite pair, emitted once on every page. */
export function siteLd(): Record<string, unknown>[] {
  return [
    {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      '@id': `${SITE_ORIGIN}/#organization`,
      name: 'Afarer',
      alternateName: 'SUPsfactory',
      legalName: 'Qingdao Vatrad Group Co., Ltd.',
      url: `${SITE_ORIGIN}/`,
      logo: `${SITE_ORIGIN}/logo192.png`,
      description:
        'Afarer is the OEM/ODM support team behind the SUPs brand of Qingdao Vatrad Group Co., Ltd. — custom inflatable SUP manufacturing, private label and low MOQ production for startups, clubs, resorts and businesses.',
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
