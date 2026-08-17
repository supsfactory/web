/**
 * AI sales assistant — server handler for POST /api/ask.
 *
 * Pipeline: embed question → Vectorize top-K → prompt → Workers AI LLM, with
 * graceful degradation: without AI/Vectorize bindings (or on any failure) it
 * falls back to keyword-matched site FAQs, and finally to an empty "none"
 * answer. Hot answers are cached in KV. The heavy content loader is imported
 * lazily so the worker startup graph stays small.
 */

import { defaultLocale, type Locale } from '@/features/i18n/locale'
import { buildAskPrompt, matchFaq, stableHash, type AiChunk, type AskMessage, type AskSource } from './rag'

const EMBED_MODEL = '@cf/baai/bge-m3'
const LLM_MODEL = '@cf/meta/llama-3.2-3b-instruct'
const TOP_K = 6
const MAX_QUESTION = 500
const CACHE_TTL = 6 * 60 * 60
const CACHE_PREFIX = 'aiask:'

export interface AskInput {
  question: string
  history?: AskMessage[]
  locale?: string
}

export interface AskResponse {
  answer: string
  sources: AskSource[]
  mode: 'ai' | 'faq' | 'none'
}

export interface AskEnv {
  CACHE: KVNamespace
  AI?: Ai
  VECTORIZE?: VectorizeIndex
}

export async function ask(env: AskEnv, input: AskInput): Promise<AskResponse> {
  const question = input.question.trim().slice(0, MAX_QUESTION)
  if (!question) return { answer: '', sources: [], mode: 'none' }
  const locale = (input.locale === 'es' ? 'es' : defaultLocale) as Locale

  const cacheKey = `${CACHE_PREFIX}${locale}:${stableHash(question.toLowerCase())}`
  try {
    const cached = await env.CACHE.get<AskResponse>(cacheKey, 'json')
    if (cached) return cached
  } catch {
    // KV failure — compute fresh (fail-open)
  }

  const result =
    env.AI && env.VECTORIZE
      ? await askWithRag(env, question, locale, input.history)
      : await askFromFaq(question, locale)

  if (result.mode !== 'none') {
    try {
      await env.CACHE.put(cacheKey, JSON.stringify(result), { expirationTtl: CACHE_TTL })
    } catch {
      // caching is best-effort
    }
  }
  return result
}

async function askWithRag(env: AskEnv, question: string, locale: Locale, history?: AskMessage[]): Promise<AskResponse> {
  try {
    // The generated bge-m3 output type is a union across input variants — the
    // embedding variant is what we requested with `{ text: [...] }`.
    const embedded = (await env.AI!.run(EMBED_MODEL, { text: [question] })) as unknown as {
      data?: { embedding: number[] }[]
    }
    const vector = embedded.data?.[0]?.embedding
    if (!vector) throw new Error('embedding failed')
    const { matches } = await env.VECTORIZE!.query(vector, {
      topK: TOP_K,
      returnValues: false,
      returnMetadata: 'all',
    })
    const chunks: AiChunk[] = matches
      .map((m) => ({
        id: String(m.id),
        text: String(m.metadata?.text ?? ''),
        url: String(m.metadata?.url ?? ''),
        title: String(m.metadata?.title ?? ''),
      }))
      .filter((c) => c.text && c.url)
    if (chunks.length === 0) return await askFromFaq(question, locale)

    const { system, user } = buildAskPrompt({ question, history, chunks })
    const out = await env.AI!.run(LLM_MODEL, {
      messages: [
        { role: 'system', content: system },
        { role: 'user', content: user },
      ],
      max_tokens: 400,
      stream: false,
    })
    const answer = (out.response ?? '').trim()
    if (!answer) throw new Error('llm returned empty response')
    const seen = new Set<string>()
    const sources: AskSource[] = []
    for (const c of chunks) {
      if (seen.has(c.url)) continue
      seen.add(c.url)
      sources.push({ title: c.title, url: c.url })
      if (sources.length === 4) break
    }
    return { answer, sources, mode: 'ai' }
  } catch (err) {
    console.error('[ai] RAG ask failed, falling back to FAQ', err instanceof Error ? err.message : err)
    return await askFromFaq(question, locale)
  }
}

/** Degraded path: keyword-match against the site FAQ collection. */
async function askFromFaq(question: string, locale: Locale): Promise<AskResponse> {
  try {
    const { getSiteFaqs } = await import('@/features/content/loader')
    const hit = matchFaq(question, getSiteFaqs(locale))
    if (!hit) return { answer: '', sources: [], mode: 'none' }
    const { localizePath } = await import('@/features/i18n/locale')
    return {
      answer: hit.answer,
      sources: [{ title: hit.faq.q, url: localizePath(locale, '/faq') }],
      mode: 'faq',
    }
  } catch (err) {
    console.error('[ai] FAQ fallback failed', err instanceof Error ? err.message : err)
    return { answer: '', sources: [], mode: 'none' }
  }
}
