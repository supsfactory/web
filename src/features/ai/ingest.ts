/**
 * AI knowledge index rebuild (scheduled, 03:00 UTC).
 *
 * Re-embeds the whole corpus (both locales) with bge-m3 and upserts it into
 * the Vectorize index. Chunk ids are stable hashes of (locale, url, part), so
 * re-runs overwrite in place — no delete pass needed. The corpus builder is
 * imported lazily: it pulls in the 1.6 MB content loader, which must not be
 * part of the worker startup graph.
 */

import { locales, type Locale } from '@/features/i18n/locale'
import type { AiChunk } from './rag'
export interface IngestEnv {
  AI: Ai
  VECTORIZE: VectorizeIndex
}

const EMBED_MODEL = '@cf/baai/bge-m3'
/** Vectorize accepts at most 100 vectors per upsert call. */
const UPSERT_BATCH = 64
const EMBED_BATCH = 64
/** Workers AI gateway can transiently fail (HTTPError: 429/529/overload) — retry with backoff. */
const EMBED_ATTEMPTS = 4

const sleep = (ms: number): Promise<void> => new Promise((r) => setTimeout(r, ms))

export async function rebuildAiIndex(env: IngestEnv): Promise<{ locale: Locale; chunks: number }[]> {
  const { buildChunks } = await import('./corpus')
  const stats: { locale: Locale; chunks: number }[] = []
  for (const locale of locales) {
    const chunks = buildChunks(locale)
    for (let i = 0; i < chunks.length; i += EMBED_BATCH) {
      const batch = chunks.slice(i, i + EMBED_BATCH)
      const vectors = await embedBatch(env, batch)
      const payload = batch.map((c, j) => ({
        id: c.id,
        values: vectors[j],
        metadata: { text: c.text, url: c.url, title: c.title, locale },
      }))
      for (let k = 0; k < payload.length; k += UPSERT_BATCH) {
        for (let attempt = 1; ; attempt++) {
          try {
            await env.VECTORIZE.upsert(payload.slice(k, k + UPSERT_BATCH))
            break
          } catch (err) {
            if (attempt >= EMBED_ATTEMPTS) throw err
            console.error(`[ingest] upsert failed (attempt ${attempt}), retrying`, err instanceof Error ? err.message : err)
            await sleep(500 * 2 ** attempt)
          }
        }
      }
    }
    stats.push({ locale, chunks: chunks.length })
  }
  return stats
}

async function embedBatch(env: IngestEnv, batch: AiChunk[]): Promise<number[][]> {
  let vectors: number[][] | undefined
  for (let attempt = 1; attempt <= EMBED_ATTEMPTS; attempt++) {
    try {
      // Generated bge-m3 output is a union across input variants — the
      // embedding variant is what we requested with `{ text: [...] }`.
      const embedded = (await env.AI.run(EMBED_MODEL, { text: batch.map((c) => c.text) })) as unknown as {
        data?: { embedding: number[] }[]
      }
      vectors = (embedded.data ?? []).map((d) => d.embedding)
      if (vectors.length !== batch.length) throw new Error('embedding count mismatch')
      return vectors
    } catch (err) {
      const msg = err instanceof Error ? err.message : String(err)
      if (attempt === EMBED_ATTEMPTS) {
        throw new Error(`embedding batch failed after ${EMBED_ATTEMPTS} attempts: ${msg}`)
      }
      console.error(`[ingest] embed failed (attempt ${attempt}): ${msg}, retrying`)
      await sleep(800 * 2 ** (attempt - 1))
    }
  }
  throw new Error('unreachable')
}
