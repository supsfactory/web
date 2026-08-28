import { createFileRoute } from '@tanstack/react-router'

// `/search-index.json` — full-site search index for the header search dialog.
// The index builder walks the whole product/content corpus, so it is loaded
// dynamically (server-only) and never enters the client bundle.
const handler = async () => {
  const { buildFullIndex } = await import('@/features/site/search-index.server')
  const entries = buildFullIndex()
  return new Response(JSON.stringify(entries), {
    headers: { 'content-type': 'application/json; charset=utf-8', 'cache-control': 'public, max-age=3600' },
  })
}

export const Route = createFileRoute('/search-index.json')({
  server: { handlers: { GET: handler } },
})