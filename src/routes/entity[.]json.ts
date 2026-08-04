import { createFileRoute } from '@tanstack/react-router'
import { env } from '@/lib/env'
import { getGeoEntity } from '@/features/content/loader'

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
  out.name = 'SUPsfactory'
  out.parentOrganization = {
    '@type': 'Organization',
    name: 'Afarer',
    description:
      'Afarer is the SUP manufacturing brand of Qingdao Vatrad Group Co., Ltd. — OEM/ODM inflatable SUP production in Qingdao, China.',
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
  ]
  out.subjectOf = [
    { '@type': 'WebPage', name: 'Company entity', url: `${origin}/about/supsfactory-entity` },
    { '@type': 'CollectionPage', name: 'Projects', url: `${origin}/projects` },
    { '@type': 'CollectionPage', name: 'Knowledge Center', url: `${origin}/knowledge` },
  ]
  return new Response(JSON.stringify(out, null, 2), {
    headers: { 'content-type': 'application/json; charset=utf-8' },
  })
}

export const Route = createFileRoute('/entity.json')({
  server: { handlers: { GET: handler } },
})