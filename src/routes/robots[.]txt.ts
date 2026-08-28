import { createFileRoute } from '@tanstack/react-router'

const handler = async () => {
  const [{ env }, { buildRobots }] = await Promise.all([
    import('@/lib/env'),
    import('@/features/seo/seo'),
  ])
  return new Response(buildRobots(new URL(env.BETTER_AUTH_URL).origin), {
    headers: { 'content-type': 'text/plain; charset=utf-8', 'cache-control': 'public, max-age=3600' },
  })
}

export const Route = createFileRoute('/robots.txt')({
  server: { handlers: { GET: handler } },
})