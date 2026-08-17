/**
 * Pure RAG core for the AI sales assistant (POST /api/ask).
 *
 * Deliberately free of Cloudflare bindings and the content loader so it stays
 * node-testable and cheap to import on the hot path — the loader is pulled in
 * lazily only where the data is actually needed (faq fallback / index build).
 */

export interface AiChunk {
  id: string
  text: string
  url: string
  title: string
}

export interface AskSource {
  title: string
  url: string
}

export interface AskMessage {
  role: 'user' | 'assistant'
  content: string
}

/** FNV-1a 32-bit — deterministic, stable across restarts (ids key vector upserts). */
export function stableHash(s: string): string {
  let h = 0x811c9dc5
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i)
    h = Math.imul(h, 0x01000193)
  }
  return (h >>> 0).toString(36)
}

const squeeze = (s: string): string => s.replace(/\s+/g, ' ').trim()

/** Build a single index chunk; drops empty text, caps length (bge-m3 context). */
export function makeChunk(url: string, title: string, text: string, id: string): AiChunk | null {
  const t = squeeze(text)
  if (!t) return null
  return { id, url, title: squeeze(title), text: t.slice(0, 3000) }
}

export interface AskPromptInput {
  question: string
  history?: AskMessage[]
  chunks: Pick<AiChunk, 'text' | 'url' | 'title'>[]
}

/**
 * Assemble the system + user messages for the answer generator.
 * Chunks are numbered [n] so the model can cite its sources.
 */
export function buildAskPrompt(input: AskPromptInput): { system: string; user: string } {
  const { question, chunks } = input
  const history = (input.history ?? []).slice(-6)
  const context = chunks
    .map((c, i) => `[${i + 1}] ${c.title}\nSource: ${c.url}\n${c.text}`)
    .join('\n\n')
  const system = [
    'You are the SUPsfactory product advisor, a sales engineer for a custom inflatable SUP (stand-up paddle board) OEM/ODM factory in Qingdao, China.',
    'Answer the buyer using ONLY the knowledge base below. Cite the relevant sources as [1], [2] after every factual claim.',
    'Never invent prices, MOQ, lead times, certifications, materials or delivery conditions — if a fact is not in the knowledge base, do not guess it.',
    'If the knowledge base does not answer the question, say you do not have that information and invite the buyer to submit an inquiry form at https://supsfactory.com/contact.',
    'Answer in the same language as the buyer\'s question (English or Spanish). Be concise and helpful: state the answer first, then 2-5 short bullets of supporting detail.',
    '',
    'Knowledge base:',
    context,
  ].join('\n')
  const historyBlock = history
    .map((m) => `${m.role === 'user' ? 'Buyer' : 'Assistant'}: ${m.content}`)
    .join('\n')
  const user = [historyBlock && `Previous conversation:\n${historyBlock}`, `Buyer: ${question}`]
    .filter(Boolean)
    .join('\n\n')
  return { system, user }
}

/** Lowercase + punctuation-to-space, so FAQ matching ignores casing and punc. */
export function normalizeQuestion(question: string): string {
  return question
    .toLowerCase()
    .replace(/[^\p{L}\p{N}]+/gu, ' ')
    .trim()
}

/**
 * Keyword-overlap FAQ fallback (used when AI/Vectorize are unavailable or fail).
 * Requires >= 3 significant words; a hit needs >= 55% of them inside q+a.
 */
export function matchFaq(
  question: string,
  faqs: { q: string; a: string }[],
): { answer: string; faq: { q: string; a: string } } | null {
  const words = normalizeQuestion(question)
    .split(' ')
    .filter((w) => w.length > 2)
  if (words.length < 3) return null
  let best: { score: number; faq: { q: string; a: string } } | null = null
  for (const faq of faqs) {
    const hay = normalizeQuestion(`${faq.q} ${faq.a}`)
    const hits = words.filter((w) => hay.includes(w)).length
    const score = hits / words.length
    if (score >= 0.55 && (!best || score > best.score)) best = { score, faq }
  }
  return best ? { answer: best.faq.a, faq: best.faq } : null
}
