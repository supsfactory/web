# SUPsfactory — Technical Documentation

> Last updated: 2026-08-20
> Project path: `E:\github\supsfactory`
> Production: https://supsfactory.com (Cloudflare Workers, `supsfactory-production`)
> Stack: TanStack Start (React 19) + Cloudflare Workers + D1 (Drizzle ORM) + KV + R2 + better-auth + Resend + Orama (search) + Fumadocs (docs)
> > Media: All large assets (videos, PDFs, quality photos, product photos) migrated to Cloudflare R2 bucket `supsfactory-files-prod`, served via CDN `assets.supsfactory.com/site/*`; `public/assets/*` directories added to `.gitignore`; upload script `scripts/upload-site-assets.mjs` supports `--prefix <prefix>` for multi-site key isolation.
> > Tests: 272 (Vitest node + workers pools, 45 files); `pnpm typecheck` / `pnpm build` green
> > Architecture: 5-layer decoupling — Product Layer (`src/product/`) → Site Configuration (`src/config/`) → Website Foundation (`src/features/`) → Cloudflare Platform → Infrastructure. Framework code never imports brand data directly.

---

## 1. Architecture

### 1.1 Edge-native full-stack on Cloudflare Workers

Everything runs on the edge — the marketing site, the SaaS app, and all APIs are one Worker deployed from a single build. Environments are selected **at build time** (`CLOUDFLARE_ENV=production pnpm build`) because the `@cloudflare/vite-plugin` bakes the chosen bindings (D1/KV/R2 ids) into `dist/server/wrangler.json`. `wrangler deploy` then ships that artifact.

| Piece | How it works |
|-------|--------------|
| Server entry (`src/worker.ts`) | Wraps the TanStack server entry in a fixed pipeline: ① fail-fast env validation once per isolate (`assertEnvOnce`), ② **edge cache lookup** (Cloudflare Cache API, keyed on URL), ③ **URL gate** (`gatePath` — 301 merges / 410 removals / trailing-slash normalisation / `/zh/*`→`/es`), ④ SSR under a per-request CSP nonce (AsyncLocalStorage), ⑤ cache policy headers (`withStaticCache` + `withMarketingCache`), ⑥ baseline security headers, ⑦ edge cache write-back for cacheable responses (`ctx.waitUntil`), ⑧ Sentry wrapper (only when `SENTRY_DSN` set). |
| Edge cache (`src/lib/cache-headers.ts`) | Marketing HTML is `public, max-age=3600` and written to the Cache API so repeat crawls never hit the worker. Hashed build assets under `/assets/` (index-`<hash>`.js etc.) get `max-age=31536000, immutable`; un-hashed public images + fonts `max-age=604800`; crawler files (`robots.txt`, `sitemap*.xml`, `llms.txt`) `max-age=3600`. Only responses passing `isEdgeCacheable` (GET/HEAD, non-private path, status 200/301/410, `max-age>0`) are cached. |
| **Private surfaces never cache** | `/app`, `/admin`, `/api`, `/login`, `/register`, `/sign-in`, `/sign-up`, `/signout`, `/forgot-password`, `/reset-password`, `/auth`, `/oauth`, `/verify` (first path segment) are force-stamped `Cache-Control: private, no-store` + `Vary: Cookie` on **every** method — even if the framework stamped `public` on an SSR response. This makes the worker immune to a CDN misconfiguration caching one user's session page for another. |
| URL gate (`src/features/seo/edge-gate.ts`) | `EDGE_REDIRECTS` maps every duplicate/legacy URL to its canonical keeper (301, `max-age=3600`); a set of removed template pages 410s (`/docs`, `/waitlist`, `/changelog`); trailing slashes 301 to the slash-less form; retired `/zh/*` URLs 301 to their `/es` mirror. Runs **before** any route handler, so redirects never SSR. |
| Cron | Two triggers in `wrangler.jsonc`: `0 3 * * *` daily maintenance cleanup (expired `session`/`verification`/stale `rateLimit` rows — `src/features/maintenance/cleanup.ts`, no outbound calls) and `*/5 * * * *` **edge-cache warming** (`warmEdgeCache`: replays `/`, `/es` and all `/products/*` paths through the real handler with a cache-busting query, then overwrites the clean-URL Cache API entry so real visitors get an edge hit instead of a cold worker render). |
| Assets | Self-hosted fonts, `public/` statics. Product photos served from `assets.supsfactory.com` (the site's own R2 CDN). All site content (`src/content/site/`) is bundled at build time via Vite glob + `?raw` — no filesystem at runtime. Catch-all route `$.tsx` renders content via `ContentCatchAll` component (`src/features/content/catchall.tsx`). |

### 1.2 Locale routing and the two content worlds

Path-based bilingual routing via TanStack's `{-$locale}` optional prefix: English at `/`, Español at `/es` (default locale has no prefix; `/en/...` is 301-stripped to the canonical no-prefix form). Locale is negotiated from cookie → Accept-Language.

The site serves **two content worlds** from one route tree:

1. **Bilingual marketing site** (`{-$locale}/` routes) — copy/UI in `src/product/content.ts`, solution pages in `src/product/solution-pages.ts`.
2. **Ported brand content** (English-only) — the factory/technology/research/news/product content from `src/content/site/`. The root catch-all `src/routes/$.tsx` (component: `CatchAllPage` → `ContentCatchAll`) strips an optional leading locale segment and resolves the rest against the content registry; unknown paths throw `notFound()`. ~45 single-segment paths (e.g. `/factory`, `/oem-odm-manufacturer`, `/technology`) get their own static route stub via `contentSingleRoute()` (loader + head only, component rendered by the catch-all) — they **must** be explicit routes because the optional `{-$locale}` group terminates on a bare segment before the splat is ever considered (a static route outranks the optional group).

Registry ownership is explicit: `SHADOWED_PATHS` (`src/product/route-registry.ts`) lists every path owned by a static route — registry entries under those are never rendered; `EXTRA_PATHS` maps registry-less pages (research articles, R&D subpages, ported solution/OEM pages) to their YAML slugs for dedicated routes. Single-segment routes use `contentSingleRoute()` from `src/features/content/content-single-route.ts` which provides loader + head but no component (rendered by the catch-all `$.tsx`).

### 1.3 Three data stores

| Store | Use |
|-------|-----|
| **D1** (SQLite, Drizzle ORM) | Single source of truth for auth (`user/account/session/verification/rateLimit`) plus app tables (`waitlist`, `inquiry`, `feedback`). |
| **KV** | Per-IP rate-limit counters for the public waitlist form, the inquiry form (5 / 10 min) and `/api/search` (60 / min) — `src/features/waitlist/rate-limit.ts`. |
| **R2** | Blobs: user avatars (`avatars/{userId}`, overwrite-on-upload, ≤2 MB), inquiry project files (`inquiry-files/{id}.{ext}`, ≤10 MB; PNG/JPG/JPEG/SVG/WebP/PDF/AI/PSD/DWG/DXF/ZIP — extension whitelist + per-format magic-number sniffing; one object per inquiry — re-submits purge stale keys incl. the legacy `inquiry-logos/` namespace, prefix-scoped so id-prefix neighbours are never touched). Served back through Worker routes because R2 isn't public; downloads carry real filenames (`Content-Disposition` — images inline, everything else forced `attachment`, ext derived from the R2 key). |

---

## 2. Site search

Two public surfaces + one API, all built from the **same content sources** (single point of truth — edit content, not the index):

| Surface | Endpoint | Builder | Notes |
|---------|----------|---------|-------|
| Header search dialog | `/search-index.json` | `buildFullIndex()` | Static JSON of every public page (deduped across locales). Response carries `public, max-age=3600` and is written to the Cache API — at most one worker render per hour. |
| `/search` page | server fn | `buildExtendedIndex(locale)` | Full-text Orama search with stopwords/tokenizers; results rendered server-side. |
| Docs search | `/api/search` | `fumadocs-core/search/server` | In-docs (Fumadocs) search for the `/docs` area. The Orama instance is a **lazy module-level singleton** (never rebuilt per request) and the route is **rate-limited per IP (60/min, fail-open)**. `SearchAPI` (not `SearchServer`) is the return type of `createFromSource`. |

Index coverage (`search-index.server.ts`): solution pages, knowledge hub, projects, product series, afarer products/news/technology/case-studies/guides, every afarer registry page (en + translated es), FAQ, **plus `hubEntries()`** — six live landing pages that ship no yaml registry entry yet are first-class public pages (home `/`, `/products`, `/solutions`, `/projects`, `/knowledge`, `/gallery`, en+es). Edge-redirected paths are excluded (`EDGE_REDIRECTS`), page titles strip trailing brand suffixes.

These modules are server-only: the content corpus never enters the client bundle (dynamically imported by server routes / server fns).

---

## 3. Admin authorization model (the core security logic)

### 3.1 `ADMIN_EMAILS` is the single source of truth

The DB `role` column is a **cache**, not authority. `ADMIN_EMAILS` (env) decides who is an admin. On signup, `databaseHooks.user.create.before` stamps `role: 'admin' | 'user'` for matching emails.

### 3.2 One shared gate: `assertAdmin()` — `src/features/admin/assert-admin.server.ts`

Every admin surface goes through it: admin pages, admin server fns (`src/features/admin/middleware.ts`), CSV exports, and better-auth's own `/api/auth/admin/*` (gated in `src/routes/api/auth/$.ts`).

```
readUser({ fresh: true })          → not admin ⇒ 404 (surface stays invisible)
user.role !== 'admin' && !isAdminEmail(user.email, ADMIN_EMAILS) ⇒ 404
syncAdminRole(db, user, ADMIN_EMAILS):  # two-way sync
    granted  && role !== 'admin' ⇒ promote (stamp DB role)
    !granted && role === 'admin' ⇒ demote  (revoke — live)
demoted ⇒ 404
promoted ⇒ re-read session fresh so the refreshed cookie carries role=admin
```

- **Fresh reads** on admin surfaces (bypass the 5‑minute cookie cache) so ban/revoke take effect immediately.
- **404, not 401/403** — non-admins must not learn the admin surface exists.
- **`stop-impersonating` is whitelisted** in the route gate (`ADMIN_BYPASS`) because a non-admin being impersonated must be able to exit.

### 3.3 Least-privilege roles — `src/features/auth/admin-roles.ts`

`adminRoles = { admin: ['ban','impersonate','delete','list'], user: [] }` via `createAccessControl`. The admin UI only uses ban/unban/impersonate/stop-impersonating/delete; the user list is a custom Drizzle query, not `listUsers`. Deliberately dropped: `create/update/set-role/set-password/set-email/get` — even a tampered `role` column can't rewrite users or elevate access. Same object is shared with tests (`createTestAuth(db, emails, { roles: adminRoles })`).

### 3.4 Auth details (better-auth)

- Email/password, mandatory email verification (only when `RESEND_API_KEY` present), password reset, account deletion (`user.deleteUser`).
- Google + GitHub OAuth, auto-hidden when keys blank; account linking trusted for verified providers.
- **Rate limiting**: built-in throttling on sign-in/sign-up/send-verification/`reset-password`, persisted in **D1** (Workers memory is per-isolate); client IP is `cf-connecting-ip`.
- **Turnstile** captcha plugin on sign-up/sign-in/reset when `TURNSTILE_SECRET_KEY` set (graceful off).
- Session: D1 source of truth + 5-minute cookie cache (`cookieCache`); fresh reads bypass it for admin gates.

---

## 4. Security model

| Vector | Mitigation | Location |
|--------|-----------|----------|
| SQL injection | Drizzle ORM parameterization everywhere; the only raw `sql` is admin `LIKE` search with DB-bound pattern + `ESCAPE '!'` + whitelisted sort column | `admin/getAdminUsers.ts`, `inquiry/inquiry.server.ts` |
| XSS | React escapes by default; admin notification email **HTML-escapes all fields**; CSP has no `unsafe-inline` for scripts (nonce-based) | `inquiry/notify.ts`, `lib/security-headers.ts` |
| Stored file XSS | Uploaded avatar/project-file responses enforced `Content-Security-Policy: default-src 'none'; sandbox` + `nosniff` (+ `Content-Disposition: attachment` for non-image types) | `routes/api/avatars/$.ts`, `routes/api/inquiry-logo/$.ts` |
| Spoofed uploads | Extension allow-list + byte-size limit **and per-format magic-number sniffing** before anything reaches R2 — images/PDF/AI/PSD/DWG/DXF/ZIP byte magic + SVG/DXF text headers (SVG must contain a real `<svg` element; `<?xml`/BOM/whitespace tolerated) | `features/storage/storage.ts` (`sniffImage`), `features/inquiry/inquiry.shared.ts` (`sniffProjectFile`), `features/storage/actions.ts`, `features/inquiry/actions.ts` |
| CSV injection | Cells starting with `= + - @` prefixed with a quote in admin exports; `no-store` on all exports | `routes/admin/*.csv.ts`, `waitlist/csv.ts` |
| Session-page caching | Private paths (`/app /admin /api /login /register /auth ...`) force `private, no-store` + `Vary: Cookie` on every method | `lib/cache-headers.ts` |
| SSRF | Only outbound `fetch` is Turnstile `siteverify` to a hardcoded URL | `features/waitlist/turnstile.ts` |
| Path traversal | R2 keys are flat strings (no directory hierarchy); avatar/inquiry-file keys use the UUID id | `features/storage/storage.ts`, `inquiry/inquiry.server.ts` |
| Admin abuse | Single `assertAdmin` gate + least-privilege roles + 404 for non-admins | `admin/assert-admin.server.ts` |
| Brute force | Turnstile + better-auth rate limits (D1-backed) + per-IP KV limits on public forms & search API | `auth/auth.server.ts`, `waitlist/rate-limit.ts` |
| Search DoS | Lazy Orama singleton (never rebuilt per request) + per-IP rate limit (fail-open) | `routes/api/search.ts` |
| Unknown endpoints | 404 (TFS/route handlers), CSP `object-src 'none'`, no legacy files; removed template pages 410 at the edge | worker routes, `seo/edge-gate.ts` |

**Protocol headers** (every response): `X-Content-Type-Options`, `X-Frame-Options: DENY`, `Referrer-Policy`, `Permissions-Policy`, HSTS; CSP in production only (nonce-based, `static.cloudflareinsights.com` + `challenges.cloudflare.com` + `googletagmanager.com` whitelisted for Web Analytics + Turnstile + GA4).

**Secrets hygiene**: secrets live only in GitHub Actions secrets → `wrangler secret bulk` on deploy. Never in the repo. Dev uses git-ignored `.dev.vars`.

---

## 5. SEO & LLM discovery endpoints

All generated dynamically; content sources are the single point of truth — edit the source, not a committed artifact:

| Endpoint | Source | Output |
|----------|--------|--------|
| `/sitemap.xml` | `src/features/seo/seo.ts` (`PUBLIC_PATHS` × locales, hreflang alternates) + docs pages + afarer public paths (registry + products/news/technology/case-studies/guides) | XML; bilingual entries with hreflang, single-locale entries (no alternates) for the English-only afarer pages |
| `/robots.txt` | `src/features/seo/seo.ts` | disallow `/app`, `/admin`, `/*/admin`, `/api`, `/docs`, `/waitlist`, `/changelog`; points to sitemap, llms, entity.json, rss.xml |
| `/llms.txt` | `src/features/docs/llm.ts` (docs index) + `src/features/site/llm.ts` (products + **solution pages** + afarer index) | Markdown index for LLMs |
| `/llms-full.txt` | same, concatenated plain Markdown | full corpus (catalog, solutions incl. FAQ, afarer pages/news/technology/case studies, geo facts) |
| `/entity.json` | `src/features/content/loader.ts` (`getGeoEntity`) | schema.org Organization — `@id`/`url`/`name`/`description` rewritten to this site's origin; `subjectOf`/`knowsAbout` rebuilt from the live page set |
| `/rss.xml` | afarer news posts | RSS feed |
| `/docs-md/*` | `src/routes/docs-md/$.ts` | frontmatter-stripped Markdown per page (malformed percent-encoding → 404, not 500) |
| `/search-index.json` | `src/features/site/search-index.server.ts` | full public search index (see §2), cached at the edge |

**Meta length spec** (enforced on news/products/yaml pages): `title ≤ 70` chars, `description 80–170` chars, bilingual — keeps SERP snippets clean.

Product catalog lives in `src/product/content.ts`; the 5 solution pages (with FAQ) in `src/product/solution-pages.ts`; the content corpus in `src/content/site/` (registry `site/pages.yaml` + page YAMLs + products + news + technology + case studies + geo JSON). Keeping all of it in the LLM corpus means answer engines cite the actual offer — including prices and SKUs.

### 5.1 Solutions system and the legacy-landing 301s

The five `/solutions/*` pages (custom-sup, private-label-sup, resort-sup, club-sup, school-sup) are data-driven: `solution-pages.ts` (en/es) + the `solution-page.tsx` renderer + the `solution-route.tsx` route factory, mounted under the `solutions.tsx` layout with a hub at `solutions/index.tsx`. Every page shares one business logic — scenario → problems → solution → process → case study → FAQ — and ends in a **CTA temperature** (`cold` = Learn More, `warm` = Discuss Your Project, `hot` = Request Manufacturing Proposal): custom-sup is hot, private-label-sup and resort-sup warm, club-sup and school-sup cold.

The five legacy landing routes (`custom-sup-manufacturing`, `private-label-sup`, `sup-for-resorts`, `sup-for-clubs`, `sup-startup-brands`) are stubs whose loaders throw `redirect({ href: localizePath(locale, target), statusCode: 301 })`. Broader URL policy (afarer-era dups, removed pages, trailing slashes, retired `/zh`) lives in the **edge gate** (`src/features/seo/edge-gate.ts`) so it runs before SSR:

- Old URLs keep their search equity: `sup-startup-brands` → `/solutions/custom-sup`, the other four map 1:1 to their new pages; es requests redirect to the `/es/...` equivalents via `localizePath`.
- The old paths were removed from `PUBLIC_PATHS`/sitemap and their data deleted — the solution pages are the single source of truth; `SHADOWED_PATHS` covers all five new paths so the content registry can never shadow them.

---

## 6. Dev/Ops

| Task | Command |
|------|---------|
| Dev server | `pnpm dev` |
| Tests | `pnpm test` (Vitest: `*.node.test.ts` = pure logic, `*.workers.test.ts` = D1/R2/KV via CF vitest pool) — 272 tests (45 files) |
| Typecheck / lint / build | `pnpm typecheck` (fumadocs-mdx + tsc) / `pnpm lint` / `pnpm build` |
| D1 migrations | `pnpm db:generate` → `pnpm db:migrate:local` (local); `db:migrate:staging` / `db:migrate:prod` (remote) |
| Deploy | `pnpm deploy:staging` / `pnpm deploy:prod` (builds with `CLOUDFLARE_ENV` + `wrangler deploy`); `pnpm deploy:purge` purges the CDN (needs `CLOUDFLARE_API_TOKEN` + `CLOUDFLARE_ZONE_ID` w/ cache-purge scope); `deploy:prod:all` = deploy + purge |
| Images | `pnpm upload:afarer-images` — backfills missing afarer images to R2 (`--missing` only PUTs absent objects) |
| CI | `ci.yml` (lint + typecheck + test + build, no secrets); `deploy.yml` (push to `main`: gen `wrangler.jsonc` → build with `CLOUDFLARE_ENV=production` → **D1 migrations** → `wrangler deploy` → **purge CDN cache** → **warm edge cache** (`/`, `/es`, products) → `wrangler secret bulk` from GitHub secrets → **backfill missing afarer images**). Missing `CLOUDFLARE_API_TOKEN` → whole deploy job skips gracefully. |
| Diagnostics | `cf-inspect.yml` (manual): dumps zone cache settings + purge results to `cf-inspect.log` committed back to the repo |

**Testing note:** the workers pool does NOT auto-apply migrations — create tables in `beforeAll` (see `features/auth/test-helpers.ts`).

**Dependencies**: `pnpm.overrides` pins `undici ^7.29.0`, `brace-expansion ^5.0.9`, `js-yaml@^4 ^4.3.1`, `js-yaml@^5 ^5.2.2` for advisory fixes. Remaining `pnpm audit` findings are dev-only (miniflare→sharp; upstream fix pending, never in the production bundle).

---

## 7. AI sales assistant (`src/features/ai/`) — two-tier architecture

A floating chat widget (bottom-right, above the WhatsApp/WeChat floats and the mobile contact bar) answering buyer questions from the site's own content — the same corpus the SEO/LLM layer exposes. No persistent storage; sessions live in the browser, multi-turn context is sent with each request (last 6 turns).

The assistant runs in **two modes**, selected by whether the `ai`/`vectorize` bindings are present in `wrangler.jsonc`:

### Tier 1: FAQ+corpus keyword search (default, Workers free tier)

When AI/Vectorize bindings are absent (commented out by default in `wrangler.jsonc`), the assistant uses pure keyword matching — no AI inference, no embeddings, no LLM calls. Works entirely on the Workers free tier.

| Layer | Piece |
|-------|-------|
| **matchFaq** | Token-overlap scoring against `getSiteFaqs(locale)`: splits question + FAQ question into word tokens, computes Jaccard-like overlap (≥3 significant words, ≥55% overlap for English; CJK: character-level tokenization + cross-language keyword expansion, min score 0.30 vs 0.55). Returns the best-matching FAQ answer. |
| **matchCorpus** | Token-overlap scoring against the **full content corpus** (`buildChunks(locale)` — same chunks the RAG tier uses): each chunk's `text` field is tokenized and scored against the user's question. Finds relevant product specs, solution details, manufacturing facts, etc. — not just FAQ entries. Both `matchFaq` and `matchCorpus` run; results are merged with the highest-scoring answer returned. |
| Badge | Each answer shows a subtle **"FAQ"** badge indicating keyword-search mode |

This mode works from day one — no index build, no AI quota, no paid plan. It searches both FAQ entries AND the full content corpus (solutions, products, guides, knowledge hub, afarer pages) using token-overlap scoring.

### Tier 2: Full RAG (Workers Paid plan, $5/month)

When the `ai` and `vectorize` blocks are uncommented in `wrangler.jsonc`, the assistant upgrades to full RAG with embeddings + LLM generation:

| Layer | Piece |
|-------|-------|
| Corpus | `corpus.ts` `buildChunks(locale)` — one atomic chunk per piece of info: solution pages (+ their FAQ blocks individually), knowledge hub per-section, projects, product series, guides, afarer products/news/technology/case-studies, afarer pages (SEO description), and every site FAQ as its own Q/A chunk; en + es, URLs localized via `localizePath` |
| Embeddings | Workers AI `@cf/baai/bge-m3` (1024-dim, multilingual) in batches of 64 |
| Index | Vectorize `supsfactory-knowledge` / `-staging` / `-prod` (per env); chunk ids are stable FNV-1a hashes of `(locale, url, part)` so daily re-runs upsert in place |
| Retrieval | top-K=6 cosine, `returnMetadata: 'all'`; metadata carries `text/url/title` so sources render as links |
| Generation | `@cf/meta/llama-3.2-3b-instruct` via `buildAskPrompt` (pure, in `rag.ts`): system prompt forbids inventing prices/MOQ/lead-times/certifications, demands `[n]` citations, and redirects unknown topics to `/contact`; answers in the buyer's language |
| Fallback | No AI/Vectorize bindings, empty retrieval, or any failure → Tier 1 (matchFaq + matchCorpus keyword fallback). The widget always works. |
| Badge | Each answer shows a subtle **"AI"** badge indicating RAG mode |

### Shared infrastructure (both tiers)

| Layer | Piece |
|-------|-------|
| Cache | KV `aiask:{locale}:{hash}` TTL 6h (hit answers served without AI calls); per-IP rate limit 10/10 min + daily global cap 1500, both fail-open; `/api/ask` is a POST JSON endpoint (route pattern mirrors `/api/search`, everything AI-related is dynamically imported) |
| Rebuild | `ingest.ts` `rebuildAiIndex` runs in the daily 03:00 UTC cron (same block as maintenance cleanup, idempotent; skipped when bindings are absent). After every production deploy, `.github/workflows/ai-index.yml` re-creates the indexes if missing (idempotent) and triggers a rebuild via the token-guarded `POST /api/reindex` (`REINDEX_TOKEN` secret, 404 when unset / 401 on mismatch), then smoke-tests `/api/ask`. |
| Type bindings | `worker-configuration.d.ts` declares `Ai?` and `VectorizeIndex?` as optional — code checks for their presence at runtime to select the tier |

**Workers AI free tier quota:** 10,000 neurons/day — sufficient for light testing, but reindexing exceeds this. **Upgrade to Workers Paid ($5/month) and uncomment the `ai`/`vectorize` blocks in `wrangler.jsonc` for full RAG mode.** The assistant works fully without them in FAQ+corpus keyword search mode.
