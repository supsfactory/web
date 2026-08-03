import { AsyncLocalStorage } from 'node:async_hooks'

/**
 * Per-request CSP nonce, propagated through the SSR render (and into the
 * Response headers) via AsyncLocalStorage. Workerd ships nodejs_compat, so
 * this works identically on the local vite dev server and in production.
 * A module-global would race once responses stream; ALS is request-scoped.
 */
const nonceStore = new AsyncLocalStorage<string>()

/** Generate a fresh nonce for this request and run `fn` inside its scope. */
export function runWithNonce<T>(fn: () => T | Promise<T>): Promise<T> {
  return Promise.resolve(nonceStore.run(crypto.randomUUID(), fn))
}

/** Read the current request's nonce (SSR components / header middleware). */
export function getNonce(): string | undefined {
  return nonceStore.getStore()
}
