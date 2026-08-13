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
import { withMarketingCache, withStaticCache } from '@/lib/cache-headers'
import { gatePath } from '@/features/seo/edge-gate'
import { createDb } from '@/db/client'
import { runCleanup } from '@/features/maintenance/cleanup'

const fetchHandler = (
  entry as { fetch: (request: Request, env: Cloudflare.Env, ctx: ExecutionContext) => Promise<Response> }
).fetch

const handler = {
  async fetch(request: Request, env: Cloudflare.Env, ctx: ExecutionContext): Promise<Response> {
    await assertEnvOnce()
    // Edge URL policy first: 301 merges, 410 for removed template pages, and
    // trailing-slash normalisation — before any route/API handler runs.
    // Cache-Control: max-age=3600 (not longer) so redirects stay easy to amend.
    const gate = gatePath(new URL(request.url).pathname)
    if (gate.action === 'redirect' || gate.action === 'slash') {
      return new Response(null, { status: 301, headers: { location: gate.to, 'cache-control': 'max-age=3600' } })
    }
    if (gate.action === 'gone') {
      return new Response('Gone', { status: 410, headers: { 'cache-control': 'max-age=3600' } })
    }
    // The nonce scope must wrap BOTH the SSR render (script tags read it) and
    // header construction (CSP references it) — ALS makes that request-scoped.
    return runWithNonce(async () => {
      const response = await fetchHandler(request, env, ctx)
      return withSecurityHeaders(withStaticCache(request, withMarketingCache(request, response)), getNonce())
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
