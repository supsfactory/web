import { createFileRoute } from '@tanstack/react-router'

/**
 * `/entity.json` — schema.org Organization entity that describes the factory
 * and brand behind SUPsfactory (ported from the afarer GEO dataset). Served as
 * structured JSON for AI answer engines and knowledge graphs. The canonical
 * `@id`/`url` are rewritten to this site's origin.
 *
 * The GEO loader, brand data and JSON-LD builders are loaded dynamically
 * (server-only) so they stay out of the client bundle.
 */
const handler = async () => {
  const [{ env }, { SITE_NAME }, branding, { getGeoEntity }, entityData, { PARENT_ORG_DESCRIPTION }, jsonld] =
    await Promise.all([
      import('@/lib/env'),
      import('@/config/site'),
      import('@/config/branding'),
      import('@/features/content/loader'),
      import('@/product/entity-data'),
      import('@/product/ai-content'),
      import('@/features/seo/jsonld'),
    ])
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
  out.description = branding.BRAND_BOILERPLATE
  out.parentOrganization = {
    '@type': 'Organization',
    name: branding.BRAND_COMPANY_NAME,
    sameAs: branding.BRAND_PARENT_URL,
  }
  out.department = {
    '@type': 'Organization',
    name: branding.BRAND_PARENT_BRAND,
    description: PARENT_ORG_DESCRIPTION,
    sameAs: branding.BRAND_PARENT_URL,
  }
  out.knowsAbout = entityData.ENTITY_KNOWS_ABOUT
  out.subjectOf = entityData.ENTITY_SUBJECT_OF.map((s: { type: string; name: string; path: string }) => ({
    '@type': s.type,
    name: s.name,
    url: `${origin}${s.path}`,
  }))
  // GEO 扩展实体（与 jsonld.tsx 的每页 JSON-LD 同源，口径与 /factory、/quality、/warranty 页面一致）
  out.brandHeritage = jsonld.brandHeritageLd()
  out.factoryCapabilities = jsonld.factoryCapabilitiesLd()
  out.enhancedFaq = jsonld.enhancedFaqLd()
  out.warranty = jsonld.warrantyReturnsLd()
  out.shippingLogistics = jsonld.shippingLogisticsLd()
  return new Response(JSON.stringify(out, null, 2), {
    headers: { 'content-type': 'application/json; charset=utf-8', 'cache-control': 'public, max-age=3600' },
  })
}

export const Route = createFileRoute('/entity.json')({
  server: { handlers: { GET: handler } },
})