/**
 * Cloudflare Worker entry (wrangler `main`). Wraps the framework's default
 * server entry so every deployed response goes through cross-cutting steps:
 *   1. validate required env once per isolate (fail fast on misconfig),
 *   2. add baseline security headers, and
 *   3. report unhandled exceptions to Sentry (when SENTRY_DSN is set).
 *
 * Importing `@tanstack/react-start/server-entry` reuses the exact handler the
 * framework would otherwise run, so SSR/streaming behaviour is unchanged.
 */
import * as Sentry from '@sentry/cloudflare'
import entry from '@tanstack/react-start/server-entry'
import { withSecurityHeaders } from '@/lib/security-headers'
import { runWithNonce, getNonce } from '@/lib/csp'
import { assertEnvOnce } from '@/lib/env-validate'
import { createDb } from '@/db/client'
import { runCleanup } from '@/features/maintenance/cleanup'

const fetchHandler = (
  entry as { fetch: (request: Request, env: Cloudflare.Env, ctx: ExecutionContext) => Promise<Response> }
).fetch

/**
 * Edge/CDN caching for public marketing pages. HTML responses are immutable
 * per deploy, so a short public cache (1h) lets Cloudflare edge cache absorb
 * repeat crawls of the SEO surface (solutions, projects, knowledge, home).
 * Authenticated areas (app/admin) and API responses stay uncached.
 */
function withMarketingCache(request: Request, response: Response): Response {
  const isUpgrade = response.status === 101 || (response as { webSocket?: unknown }).webSocket != null
  if (isUpgrade) return response
  if (request.method !== 'GET' && request.method !== 'HEAD') return response
  const path = new URL(request.url).pathname
  if (path.startsWith('/app') || path.startsWith('/admin') || path.startsWith('/api')) return response
  const contentType = response.headers.get('content-type') ?? ''
  if (!contentType.includes('text/html')) return response
  const headers = new Headers(response.headers)
  if (!headers.has('Cache-Control')) headers.set('Cache-Control', 'public, max-age=3600')
  return new Response(response.body, { status: response.status, statusText: response.statusText, headers })
}

const handler = {
  async fetch(request: Request, env: Cloudflare.Env, ctx: ExecutionContext): Promise<Response> {
    await assertEnvOnce()
    // The nonce scope must wrap BOTH the SSR render (script tags read it) and
    // header construction (CSP references it) — ALS makes that request-scoped.
    return runWithNonce(async () => {
      const response = await fetchHandler(request, env, ctx)
      return withSecurityHeaders(withMarketingCache(request, response), getNonce())
    })
  },

  // Cron Triggers entry (schedule in wrangler.jsonc → triggers.crons). Runs the
  // maintenance cleanup; extend with your own periodic tasks (digests, etc.).
  async scheduled(_controller: ScheduledController, env: Cloudflare.Env, _ctx: ExecutionContext): Promise<void> {
    const result = await runCleanup(createDb(env.DB), Date.now())
    console.log('[cron] cleanup', result)
  },
}

// withSentry catches unhandled exceptions / promise rejections in the worker.
// Returning undefined when no DSN is set disables Sentry entirely (degrades
// gracefully). tracesSampleRate: 0 keeps it errors-only — cheap by default.
export default Sentry.withSentry(
  (env: Cloudflare.Env) =>
    env.SENTRY_DSN ? { dsn: env.SENTRY_DSN, tracesSampleRate: 0, sendDefaultPii: false } : undefined,
  handler,
)
