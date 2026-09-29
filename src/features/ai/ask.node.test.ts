/**
 * AI assistant fallback coverage (node pool).
 *
 * ask() degrades gracefully when AI/Vectorize bindings are absent — and KV
 * reads/writes are best-effort — so the FAQ fallback path is exercised with
 * an in-memory CACHE shim — keeping the heavy content loader out of the
 * workerd isolate, which would otherwise OOM the runtime (a 256 MB V8 cap).
 */
import { beforeAll, describe, expect, test } from 'vitest'
import { ask } from './ask.server'

const store = new Map<string, string>()
const CACHE = {
  get: async <T>(key: string): Promise<T | null> => {
    const raw = store.get(key)
    return raw ? (JSON.parse(raw) as T) : null
  },
  put: async (key: string, value: string): Promise<void> => {
    store.set(key, value)
  },
} as unknown as KVNamespace

// The first ask() lazily pulls in the large content loader — warm it in
// beforeAll and keep a generous per-test timeout for the cold case.
beforeAll(async () => {
  await import('@/features/content/loader')
}, 60000)

describe('ask — graceful degradation without AI bindings', () => {
  test('answers an FAQ-shaped question from the site FAQ collection', async () => {
    const res = await ask({ CACHE }, { question: 'What is your minimum order quantity?', locale: 'en' })
    expect(res.mode).toBe('faq')
    expect(res.answer.length).toBeGreaterThan(0)
    expect(res.sources[0].url).toMatch(/^\/faq#/)
  }, 30000)

  test('returns none (empty answer) when nothing matches', async () => {
    const res = await ask({ CACHE }, { question: 'quark traversal photon tachyon', locale: 'en' })
    expect(res.mode).toBe('none')
    expect(res.answer).toBe('')
  }, 30000)

  test('caches a computed answer in KV', async () => {
    const res = await ask({ CACHE }, { question: 'How long does a sample take?', locale: 'en' })
    expect(res.mode).toBe('faq')
    const again = await ask({ CACHE }, { question: 'How long does a sample take?', locale: 'en' })
    expect(again.mode).toBe('faq')
    expect(store.size).toBeGreaterThan(0)
  }, 30000)

  test('empty question short-circuits', async () => {
    const res = await ask({ CACHE }, { question: '   ' })
    expect(res.mode).toBe('none')
  })
})