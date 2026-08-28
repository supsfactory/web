# SUPsfactory — LLM / RAG Content Index

> **Purpose:** This file documents the content sources and structure that power the site's LLM discovery endpoints (`/llms.txt`, `/llms-full.txt`, `/entity.json`, `/rss.xml`, `/search-index.json`). All are generated **dynamically** from a single point of truth — edit the source, not a committed artifact.
>
> **Note:** The AI RAG assistant (Vectorize + Workers AI) is **optional** — AI/Vectorize bindings are commented out by default in `wrangler.jsonc`. The assistant works in **FAQ+corpus keyword search mode** (matchFaq + matchCorpus, token-overlap scoring) on the Workers free tier with no AI inference. Uncomment the `ai`/`vectorize` blocks and upgrade to Workers Paid ($5/month) for full RAG mode (embeddings + LLM generation). The chat shows a "FAQ" or "AI" badge on each answer.

## 1. Endpoint Map

| Endpoint | Source | Output Format | Key Content |
|----------|--------|---------------|-------------|
| `/llms.txt` | `src/features/site/llm.ts` + `src/features/docs/llm.ts` | Markdown index | Products + solution pages + afarer index (factory, technology, research, news, product pages, geo facts) |
| `/llms-full.txt` | Same as `/llms.txt`, concatenated plain Markdown | Full corpus | Catalog, solutions incl. FAQ, afarer pages/news/technology/case studies, geo facts |
| `/entity.json` | `src/features/content/loader.ts` (`getGeoEntity`) | schema.org Organization | `@id`/`url`/`name`/`description` rewritten to this site's origin; `subjectOf`/`knowsAbout` rebuilt from live page set |
| `/rss.xml` | afarer news posts (RSS feed) | XML | Latest news/posts from the afarer corpus |
| `/search-index.json` | `src/features/site/search-index.server.ts` | JSON (Orama-backed) | Every public page deduped across the active locales (en/es/fr); cached at edge (`max-age=3600`) |
| `/sitemap.xml` | `src/features/seo/seo.ts` (`PUBLIC_PATHS` × locales + afarer registry) | XML | en/es/fr entries with hreflang alternates |
| `/robots.txt` | `src/features/seo/seo.ts` | Plain text | Disallows `/app`, `/admin`, `/*/admin`, `/api`, `/docs`, `/waitlist`, `/changelog`; points to sitemap, llms, entity.json, rss.xml |

## 2. Content Source Hierarchy (Single Point of Truth)

```
src/product/                          ← Product Layer (swap per deployment)
│
├─ content.ts        ← HERO_CONTENT, gallery, FAQ, site-wide copy (en/es/fr `Localized<T>`)
├─ solution-pages.ts ← the 5 solution pages (scenario → … → FAQ, CTA temperature)
├─ series-pages.ts   ← product series landing pages
├─ knowledge.ts      ← knowledge hub articles + meta
├─ projects.ts       ← case-study projects + meta
├─ procurement.ts    ← procurement profiles + commercial rows
├─ facts.ts          ← SITE_FACTS (5 capability cards, "who we serve" stats)
├─ ai-content.ts     ← LLM descriptions, AI prompts, FAQ excerpts, corpus text
├─ brand-constants.ts← PRODUCT_TAGLINE, PRODUCT_DESCRIPTION, PRODUCT_BOILERPLATE
├─ guide-content.ts  ← GUIDES_BY_LOCALE, guide data
├─ hub-pages.ts      ← hub/landing page entries
├─ entity-data.ts    ← ENTITY_FACTS, ENTITY_SERVICES, ENTITY_KNOWS_ABOUT
├─ product-jsonld.ts ← 9 structured data generators
│
│   (Framework code reads via re-exports in features/site/ → @/product/)

src/features/site/
│
├─ llm.ts            ← LLM index builder (products + solutions + content)
├─ site-config.ts    ← read-only config views (SITE_FACTS, HERO_CONTENT)
│
├─ seo.ts            ← PUBLIC_PATHS, HREFLANG, OG_LOCALE → /sitemap.xml, /robots.txt
│
├─ i18n/             ← dictionaries from src/product/dictionary/ (UI + Product merge)
│
└─ loader.ts         ← getGeoEntity → /entity.json
```

```
src/features/seo/
│
├─ seo.ts            ← core SEO config, edge-gate, hreflang mapping
├─ edge-gate.ts      ← legacy URL redirects, 410 removals, locale redirects
│
└─ PUBLIC_PATHS      ← every public page path × locale, feeds sitemap & search-index
```

```
src/content/site/
│
├─ site/pages.yaml   ← registry of every content page (slug, locale, meta)
├─ *.yaml            ← per-page frontmatter (title, description, etc.)
├─ products/         ← product series with SKUs, prices, specs
├─ news/             ← news posts with date, title, description
├─ technology/       ← technology explanation pages
├─ case-use/         ← case study write-ups
├─ geo/              ← (empty — geo data moved to src/product/geo/)
│
└─ docs/             ← in-app docs (Fumadocs), excluded from LLM corpus at production
```

```
src/product/geo/     ← Geo/fact data for LLM grounding (JSON, Product Layer)
│
├─ entity.json           Schema.org entity data
├─ company-facts.json    Company facts (location, established, area)
├─ certification-facts.json  Certification details
└─ manufacturing-facts.json  Manufacturing capabilities & stats
```

## 3. LLM Index Build Logic (simplified)

```typescript
// src/features/site/llm.ts
// English corpus chunks; the Spanish section is emitted separately
// (llmSpanishIndex). The same source data is trilingual (en/es/fr) — a
// French section can be added by mirroring llmSpanishIndex.
export function buildLlmIndex(locale: 'en' | 'es' = 'en') {
  const chunks: LLMChunk[] = [];

  // 1) Solution pages (+ their individual FAQ blocks)
  chunks.push(...buildSolutionChunks(locale));

  // 2) Product catalog (from content.ts)
  chunks.push(...buildProductChunks(locale));

  // 3) Knowledge hub sections
  chunks.push(...buildKnowledgeChunks(locale));

  // 4) Afarer corpus (products/news/technology/case-studies/geo)
  chunks.push(...buildAfarerChunks(locale));

  // 5) Site FAQ (each as its own Q/A chunk)
  chunks.push(...buildFaqChunks());

  return chunks;
}
```

## 4. Chunk Stability & Vectorize (optional — only for full RAG mode)

- **Chunk ids** are stable FNV-1a hashes of `(locale, url, part)` → daily re-runs upsert in place in Vectorize `supsfactory-knowledge` / `-staging` / `-prod`. These indexes only exist when the `vectorize` block is uncommented in `wrangler.jsonc`.
- **Metadata** per chunk carries `text/url/title` so answer engines render sources as links.
- **Rebuild** triggered daily at 03:00 UTC cron + every production deploy via `.github/workflows/ai-index.yml` (`POST /api/reindex` with `REINDEX_TOKEN`). Skipped when bindings are absent.
- **Without Vectorize**, `matchCorpus` searches the same chunks using token-overlap scoring — no embeddings needed, free-tier compatible.

## 5. Meta Length Spec (enforced on products/news/YAML pages)

- `title ≤ 70` chars → clean SERP snippet
- `description 80–170` chars → kept in sync across locales

## 6. What to Edit (never touch committed artifacts)

| If you want to change… | Edit this file… | Effect |
|------------------------|----------------|--------|
| Product SKU / price / spec | `src/product/content.ts` → product entries | `/llms.txt`, `/llms-full.txt`, `/entity.json`, `/search-index.json` all rebuild on next deploy |
| Solution page copy / CTA | `src/product/solution-pages.ts` | Same as above |
| FAQ entries | `src/product/facts.ts` / per-page YAML | Same as above |
| Add a new page / locale | Add path to `PUBLIC_PATHS` in `seo.ts`; add YAML in `src/content/site/` | New entry appears in sitemap, LLM index, search-index within one deploy cycle |
| SEO metadata (OG, Twitter) | `src/features/site/branding.mdx` / `branding.ts` | OpenGraph/Twitter cards update on next build |

---
*Generated from the living codebase. Do not edit `.git`-committed `llms.txt` artifacts — they will be overwritten at next build.*