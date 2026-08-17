import { createFileRoute } from '@tanstack/react-router'
import { env } from '@/lib/env'
import { getGeoEntity } from '@/features/content/loader'
import { SITE_NAME } from '@/config/site'
import { BRAND_PARENT_BRAND, BRAND_COMPANY_NAME, BRAND_BOILERPLATE } from '@/config/branding'
import {
  brandHeritageLd,
  enhancedFaqLd,
  factoryCapabilitiesLd,
  shippingLogisticsLd,
  warrantyReturnsLd,
} from '@/features/seo/jsonld'

/**
 * `/entity.json` — schema.org Organization entity that describes the factory
 * and brand behind SUPsfactory (ported from the afarer GEO dataset). Served as
 * structured JSON for AI answer engines and knowledge graphs. The canonical
 * `@id`/`url` are rewritten to this site's origin.
 */
const handler = () => {
  const entity = getGeoEntity()
  if (!entity) {
    return new Response('{"error":"entity unavailable"}', {
      status: 404,
      headers: { 'content-type': 'application/json; charset=utf-8' },
    })
  }
  const origin = new URL(env.BETTER_AUTH_URL).origin
  const out = JSON.parse(JSON.stringify(entity)) as Record<string, unknown>
  if (typeof out['@id'] === 'string') out['@id'] = `${origin}/#organization`
  if (typeof out.url === 'string') out.url = origin
  out.name = SITE_NAME
  out.description = BRAND_BOILERPLATE
  out.parentOrganization = {
    '@type': 'Organization',
    name: BRAND_PARENT_BRAND,
    description:
      `${BRAND_PARENT_BRAND} is the SUP manufacturing division of ${BRAND_COMPANY_NAME} — OEM/ODM inflatable SUP production in Qingdao, China.`,
  }
  out.knowsAbout = [
    'SUP manufacturing',
    'custom paddle boards',
    'SUP product development',
    'SUP prototyping',
    'private label SUP',
    'custom SUP design',
    'OEM manufacturing',
    'resort SUP equipment',
    'club SUP equipment',
    'school SUP equipment',
    'SUP MOQ tiers',
    'SUP production lead time',
    'SUP quality control',
    'factory audit',
  ]
  out.subjectOf = [
    { '@type': 'WebPage', name: 'Company entity', url: `${origin}/about/supsfactory-entity` },
    { '@type': 'WebPage', name: 'Proof Center — factory evidence', url: `${origin}/proof-center` },
    { '@type': 'WebPage', name: 'Factory & manufacturing capability', url: `${origin}/factory` },
    { '@type': 'WebPage', name: 'Quality, testing & certifications', url: `${origin}/quality` },
    { '@type': 'WebPage', name: 'Custom SUP MOQ & lead time', url: `${origin}/sup-oem-moq-lead-time` },
    { '@type': 'WebPage', name: 'New-brand trial order', url: `${origin}/new-brand-trial-order` },
    { '@type': 'CollectionPage', name: 'Projects', url: `${origin}/projects` },
    { '@type': 'CollectionPage', name: 'Knowledge Center', url: `${origin}/knowledge` },
  ]
  // GEO 扩展实体（与 jsonld.tsx 的每页 JSON-LD 同源，口径与 /factory、/quality、/warranty 页面一致）
  out.brandHeritage = brandHeritageLd()
  out.factoryCapabilities = factoryCapabilitiesLd()
  out.enhancedFaq = enhancedFaqLd()
  out.warranty = warrantyReturnsLd()
  out.shippingLogistics = shippingLogisticsLd()
  return new Response(JSON.stringify(out, null, 2), {
    headers: { 'content-type': 'application/json; charset=utf-8' },
  })
}

export const Route = createFileRoute('/entity.json')({
  server: { handlers: { GET: handler } },
})