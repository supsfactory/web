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
export interface IngestEnv {
  AI: Ai
  VECTORIZE: VectorizeIndex
}

const EMBED_MODEL = '@cf/baai/bge-m3'
/** Vectorize accepts at most 100 vectors per upsert call. */
const UPSERT_BATCH = 64
const EMBED_BATCH = 64

export async function rebuildAiIndex(env: IngestEnv): Promise<{ locale: Locale; chunks: number }[]> {
  const { buildChunks } = await import('./corpus')
  const stats: { locale: Locale; chunks: number }[] = []
  for (const locale of locales) {
    const chunks = buildChunks(locale)
    for (let i = 0; i < chunks.length; i += EMBED_BATCH) {
      const batch = chunks.slice(i, i + EMBED_BATCH)
      // Generated bge-m3 output is a union across input variants — the
      // embedding variant is what we requested with `{ text: [...] }`.
      const embedded = (await env.AI.run(EMBED_MODEL, { text: batch.map((c) => c.text) })) as unknown as {
        data?: { embedding: number[] }[]
      }
      const vectors = (embedded.data ?? []).map((d) => d.embedding)
      if (vectors.length !== batch.length) throw new Error('embedding count mismatch')
      const payload = batch.map((c, j) => ({
        id: c.id,
        values: vectors[j],
        metadata: { text: c.text, url: c.url, title: c.title, locale },
      }))
      for (let k = 0; k < payload.length; k += UPSERT_BATCH) {
        await env.VECTORIZE.upsert(payload.slice(k, k + UPSERT_BATCH))
      }
    }
    stats.push({ locale, chunks: chunks.length })
  }
  return stats
}
