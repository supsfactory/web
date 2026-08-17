/**
 * Corpus builder for the AI knowledge index (server-only).
 *
 * Statically imports the full afarer corpus, so it must never enter the client
 * bundle or the worker startup graph — it is loaded dynamically by the
 * scheduled index rebuild (src/features/ai/ingest.ts) and tests only.
 */

import { localizePath, type Locale } from '@/features/i18n/locale'
import { pick } from '@/features/site/content'
import { solutionPages, solutionPath } from '@/features/site/solution-pages'
import { knowledge } from '@/features/site/knowledge'
import { projects } from '@/features/site/projects'
import { seriesPages } from '@/features/site/series-pages'
import { GUIDES, GUIDES_ES } from '@/features/content/guide-content'
import {
  brandify,
  getAfarerPage,
  getAfarerPages,
  getAfarerProducts,
  getCaseUses,
  getNewsPosts,
  getSiteFaqs,
  getTechArticles,
  isAfarerPageTranslated,
} from '@/features/content/loader'
import { EDGE_REDIRECTS } from '@/features/seo/edge-gate'
import { stableHash, makeChunk, type AiChunk } from './rag'

const FAQ_PATH = '/faq'
/** Body chunks are capped around this many chars — big enough for an answer,
 *  small enough to keep bge-m3 embeddings focused. */
const CHUNK_CHARS = 1800

/** Strip markdown to plain text (headings, links, lists, emphasis, tables…). */
function mdToText(md: string): string {
  return md
    .replace(/```[\s\S]*?```/g, ' ')
    .replace(/`([^`]*)`/g, '$1')
    .replace(/!\[([^\]]*)\]\([^)]*\)/g, '$1')
    .replace(/\[([^\]]*)\]\([^)]*\)/g, '$1')
    .replace(/^#{1,6}\s+/gm, '')
    .replace(/^\s*[-*+]\s+/gm, '')
    .replace(/^\s*\d+[.)]\s+/gm, '')
    .replace(/\*\*([^*]+)\*\*/g, '$1')
    .replace(/(^|\s)\*([^*]+)\*(?=\s|$)/g, '$1$2')
    .replace(/<[^>]+>/g, ' ')
    .replace(/\|/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
}

/** Split a body into ~CHUNK_CHARS paragraph-grouped pieces (stable part ids). */
function chunkBody(body: string): string[] {
  const paragraphs = body
    .split(/\n{2,}/)
    .map((p) => mdToText(p))
    .map((p) => p.trim())
    .filter((p) => p.length > 20)
  const out: string[] = []
  let buf = ''
  for (const p of paragraphs) {
    if (buf && buf.length + p.length + 1 > CHUNK_CHARS) {
      out.push(buf)
      buf = ''
    }
    buf = buf ? `${buf} ${p}` : p
  }
  if (buf) out.push(buf)
  return out
}

/** Deep-walk a YAML page's `content` record into one text blob (all sections). */
function pageText(content: Record<string, unknown>): string {
  const parts: string[] = []
  const walk = (v: unknown): void => {
    if (typeof v === 'string') {
      const s = v.trim()
      if (s.length > 2 && !/^(https?:\/\/|\/)/.test(s) && !/\.(jpe?g|png|webp|svg|avif|pdf)$/i.test(s)) {
        parts.push(s)
      }
    } else if (Array.isArray(v)) {
      for (const item of v) walk(item)
    } else if (v && typeof v === 'object') {
      for (const val of Object.values(v)) walk(val)
    }
  }
  for (const [key, value] of Object.entries(content)) {
    if (key === 'meta' || key === 'cta') continue
    walk(value)
  }
  return parts.join('\n')
}

/** Stable chunk id per (locale, url, part) — text changes overwrite the same vector. */
const chunkId = (locale: Locale, url: string, part = ''): string =>
  stableHash(`${locale}:${url}#${part}`)

/**
 * All answerable content for one locale, one atomic chunk per piece of
 * information. FAQ entries and solution FAQ blocks are chunked individually —
 * they are the highest-value matches for buyer questions.
 */
export function buildChunks(locale: Locale): AiChunk[] {
  const out: AiChunk[] = []
  const url = (p: string): string => localizePath(locale, p)
  const push = (u: string, title: string, text: string, part = ''): void => {
    const c = makeChunk(u, title, text, chunkId(locale, u, part))
    if (c) out.push(c)
  }

  for (const p of pick(solutionPages, locale)) {
    const u = url(solutionPath(p.slug))
    push(u, p.navLabel, [p.h1, p.answer, ...p.intro, p.scenario.title, p.scenario.body].join('\n'))
    for (const [i, pair] of p.pairs.entries()) {
      push(u, `${p.navLabel} — ${pair.problem}`, `Problem: ${pair.problem}\nSolution: ${pair.solution}`, `pair${i}`)
    }
    for (const [i, f] of p.faqs.entries()) {
      push(u, `${p.navLabel} — FAQ`, `Q: ${f.q}\nA: ${f.a}`, `faq${i}`)
    }
  }

  for (const a of pick(knowledge, locale)) {
    const u = url(`/knowledge/${a.slug}`)
    push(u, a.navLabel, [a.h1, a.intro].join('\n'))
    for (const [i, s] of a.sections.entries()) {
      push(u, a.navLabel, `${s.title}\n${s.body.join('\n')}`, `sec${i}`)
    }
  }

  for (const pr of pick(projects, locale)) {
    const u = url(`/projects/${pr.slug}`)
    push(u, pr.navLabel, [pr.h1, pr.metaDescription, pr.requirement, pr.challenge, pr.solution, pr.result, pr.outcome].join('\n'))
    for (const [i, s] of pr.process.entries()) {
      push(u, `${pr.navLabel} — ${s.title}`, s.body, `step${i}`)
    }
  }

  for (const s of pick(seriesPages, locale)) {
    const u = url(`/products/${s.slug}`)
    push(u, s.navLabel, [s.h1, s.metaDescription, ...s.intro].join('\n'))
    for (const [i, f] of s.faqs.entries()) {
      push(u, `${s.navLabel} — FAQ`, `Q: ${f.q}\nA: ${f.a}`, `faq${i}`)
    }
  }

  for (const g of (locale === 'es' ? GUIDES_ES : GUIDES)) {
    const u = url(`/guides/${g.slug}`)
    push(u, g.title, g.intro.join('\n'))
    for (const [i, s] of g.sections.entries()) {
      push(u, `${g.title} — ${s.title}`, s.body, `sec${i}`)
    }
    for (const [i, f] of g.faqs.entries()) {
      push(u, `${g.title} — FAQ`, `Q: ${f.q}\nA: ${f.a}`, `faq${i}`)
    }
  }

  for (const p of getAfarerProducts(locale)) {
    const u = url(`/products/${p.slug}`)
    push(u, p.title, [p.summary, p.description].filter(Boolean).join('\n'))
    for (const [i, t] of chunkBody(brandify(p.body)).entries()) push(u, p.title, t, `body${i}`)
  }

  for (const n of getNewsPosts(locale)) {
    const u = url(`/news/${n.slug}`)
    push(u, n.title, n.excerpt ?? '')
    for (const [i, t] of chunkBody(brandify(n.body)).entries()) push(u, n.title, t, `body${i}`)
  }

  for (const t of getTechArticles(locale)) {
    const u = url(`/technology/${t.slug}`)
    push(u, t.title, [t.summary, t.description].filter(Boolean).join('\n'))
    for (const [i, b] of chunkBody(brandify(t.body)).entries()) push(u, t.title, b, `body${i}`)
  }

  for (const c of getCaseUses(locale)) {
    const u = url(`/evidence/case-studies/${c.slug}`)
    push(u, c.title, [c.summary, c.description].filter(Boolean).join('\n'))
    for (const [i, b] of chunkBody(brandify(c.body)).entries()) push(u, c.title, b, `body${i}`)
  }

  // Afarer pages carry their own SEO description — good one-chunk answers
  // (product-development, private-label, customizer, trust pages etc.). Full
  // page text is added per-section so deep details are searchable too.
  for (const p of getAfarerPages()) {
    if (p.path in EDGE_REDIRECTS || p.path === FAQ_PATH) continue
    if (locale === 'es' && !isAfarerPageTranslated(p.path, 'es')) continue
    const page = locale === 'es' ? getAfarerPage(p.path, 'es')! : p
    const seo = page.content.seo as { title?: string; description?: string } | undefined
    const title = (seo?.title ?? '').replace(/[|–—-].*$/, '').trim() || page.label
    push(url(p.path), title, seo?.description ?? '')
    for (const [i, t] of chunkBody(brandify(pageText(page.content))).entries()) {
      push(url(p.path), title, t, `body${i}`)
    }
  }

  const faqUrl = url(FAQ_PATH)
  for (const [i, f] of getSiteFaqs(locale).entries()) {
    push(faqUrl, f.q, `Q: ${f.q}\nA: ${f.a}`, `faq${i}`)
  }

  return out
}
