<div align="center">
  <h1>SUPsfactory</h1>
  <p>Your custom SUP product development & manufacturing partner — 10 manufacturing platforms, real OEM/ODM, bilingual (en/es) marketing site + 5-page solutions system, shipped edge-native.</p>
  <p>
    <a href="LICENSE"><img src="https://img.shields.io/badge/License-Apache_2.0-blue.svg" alt="License"></a>
    <a href="https://developers.cloudflare.com/workers/"><img src="https://img.shields.io/badge/Cloudflare-Workers-F38020?logo=cloudflare&logoColor=white" alt="Cloudflare Workers"></a>
    <a href="https://www.typescriptlang.org/"><img src="https://img.shields.io/badge/TypeScript-007ACC?logo=typescript&logoColor=white" alt="TypeScript"></a>
  </p>
  <p>
    <em>Bright Ocean Studio × Afarer Manufacturing (Qingdao Vatrad Group) — a complete custom SUP manufacturing platform built on the Vectoflare full-stack SaaS starter.</em>
  </p>
</div>

---

**English**

SUPsfactory is the production-ready web presence for an SUP (stand-up paddleboard) OEM/ODM manufacturer — the marketing site is positioned as a **custom SUP product development & manufacturing partner**, not a "launch your own brand" tool. It pairs a fully designed bilingual (en / es) marketing site with the complete SaaS backend from [Vectoflare](https://github.com/vectoflare/vectoflare): auth, email, an admin console, and more — every feature a real implementation, no mocks or stubs, running on the Cloudflare free-to-cheap stack (Workers + D1 + KV + R2). The full afarer brand content (factory, technology, research, news, product pages) is ported in and served from the same Worker, English-only, under `/`.

## The marketing site

Custom-built "Bright Ocean Studio" design language: Ocean White / Ocean Blue / Aqua / Sunset / Deep Navy palette, Manrope + Inter typefaces, wave motion, glass cards, and reveal-on-scroll — light & dark modes.

| Page | What it does |
|------|--------------|
| **Home** | Ocean hero ("Turn your SUP ideas into reality"), a 6-item capability strip (OEM & ODM · Private Label · Sample Service · Design & Artwork · QC on every run · Worldwide export), who-we-serve scene cards, what-we-solve, a 6-step product development process, solutions pillars, why-us cards, the **10 manufacturing platforms** table, a horizontal snap-scroll **Custom SUP Studio** walkthrough (board shape → graphics → deck pad → accessories → packaging), brand-story gallery, FAQ (JSON-LD), CTA band |
| **Products** | Full catalog of the **10 real series** (SKUs, specs, prices, photos, artwork & construction lines) with SKU + price badges — see the table below |
| **SUP Design Studio** | Interactive configurator: pick colors and preview a live board mockup — the "place your logo" pitch for prospects |
| **Solutions system** | A 5-page system under `/solutions` — `/solutions/custom-sup`, `/solutions/private-label-sup`, `/solutions/resort-sup`, `/solutions/club-sup`, `/solutions/school-sup`. Every page follows one business logic (scenario → problems → solution → process → case study → FAQ) and ends in a **CTA temperature** — cold (Learn More), warm (Discuss Your Project), hot (Request Manufacturing Proposal) — so each audience gets a pitch matched to how ready they are |
| **Who we serve** | Landing-oriented scene pages that funnel into the matching solution page |
| **Site search** | Two surfaces: a header search dialog fed by `/search-index.json` (the full public index, edge-cached 1h) and a `/search` page with a full-text (Orama) index built from the same data — solutions, knowledge hub, projects, product series, afarer pages, news, technology, case studies, guides, FAQs and the six hub/landing pages (home, /products, /solutions, /projects, /knowledge, /gallery) in en+es |
| **AI sales assistant** | A floating RAG chat widget (bottom-right, above the contact floats): bge-m3 embeddings + Vectorize top-K over the whole en/es corpus + llama-3.2-3b answers with clickable sources, multi-turn context, KV-cached answers, per-IP rate limiting, and graceful degradation to keyword-matched site FAQs when AI/Vectorize are unavailable (works before the index even exists). Index rebuilt nightly by cron |
| **Legacy SEO landings** | The old keyword pages (`/sup-startup-brands`, `/sup-for-resorts`, `/sup-for-clubs`, `/private-label-sup`, `/custom-sup-manufacturing`) now **301-redirect** to their new solution-page equivalents — search equity preserved, one source of truth |
| **Edge URL policy** | `src/features/seo/edge-gate.ts` applies at the worker before any route runs: 301 merges of duplicate/legacy pages, 410 for removed template pages (`/docs`, `/waitlist`, `/changelog`), trailing-slash normalisation, and retired-locale `/zh/*` → `/es` redirects — all served with a short `max-age` so changes stay easy to amend |
| **afarer brand content** | The full ported manufacturer site (English): `/factory/*`, `/technology/*`, `/research/*`, `/news/*`, `/products/*`, `/oem-odm-manufacturer`, `/guides`, `/faq` and more — served by a catch-all route from the bundled afarer content |
| **Gallery / How it works / About / Contact** | Brand stories with real project photos, manufacturing timeline, company story, inquiry form |

**The 10 platform series** (data in `src/features/site/content.ts`, photos served from `assets.supsfactory.com`, the site's own R2 CDN):

| Series | SKU | Price | Position |
|--------|-----|-------|----------|
| SUP Explorer 11' | SUP-EX11 | $399 | All-around entry platform, complete package — Startups, rental fleets |
| Ocean Pulse Series | SUP-OP11 | $449 | UV digital printing + mechanical heat-embossing, coordinated accessories |
| Cheetah Surge Edition | SUP-CS11 | $449 | Multi-color EVA block piecing + UV printing, anti-delamination build |
| Medusa Glow Series | SUP-MG11 | $449 | Multi-color EVA block piecing, handle anchored to the PVC hull — yoga |
| Dolphin Wave Series | SUP-DW11 | $449 | CNC EVA color-block splicing + screen-printed rails, PANTONE TPG matching |
| Flowing Lotus Series | SUP-FL11 | $449 | Dual-layer laser-engraved EVA + gradient UV, dynamic color-blocked fins |
| Jungle Mandala Series | SUP-JM11 | $449 | Dual-layer laser-engraved EVA + UV + screen-printed rails, anti-distortion geometry |
| Leviathan Wake Series | SUP-LW11 | $449 | UV digital printing + mechanical embossing, stretchable PVC inks on the bottom logo |
| Ocean Voyager Series | SUP-OV11 | $449 | Multi-color EVA block piecing + UV, color-matched backpack, pump & leash — touring |
| Tropical Breeze Series | SUP-TB11 | $449 | UV digital printing + die-cut EVA patchwork, illustrated nose landscape |

Every series is a manufacturing platform — shape, artwork, EVA deck pads, and packaging all adapt to your client's brand (50pcs MOQ per design).

**AI-ready content**: `/llms.txt` and `/llms-full.txt` index the docs, the full product catalog (names, SKUs, specs, prices, recommended use), the 5 solution pages with their FAQ, and the whole ported afarer brand corpus (factory, technology, research, news) — so answer engines can cite the actual offering. `/entity.json` exposes the schema.org Organization entity behind the factory, and `/rss.xml` the news feed. Every entry carries a **page-level meta spec** enforced at build time: `title ≤ 70` chars, `description 80–170` chars (bilingual, en/es).

## The platform under the hood

| Area | What you get |
|------|--------------|
| **Auth** | Email/password with mandatory verification, password reset, and account deletion via [better-auth](https://better-auth.com). Google & GitHub OAuth that gracefully hide themselves when their env vars are unset. Sessions use D1 as source of truth with a 5-minute cookie cache. |
| **Storage** | [R2](https://developers.cloudflare.com/r2/) object storage with a working avatar upload (validated by MIME allow-list, byte-size limit **and magic-number sniffing**; streamed back through a serving route since R2 isn't public). Zero-config locally via miniflare — see [storage](src/content/docs/features/storage.mdx). |
| **Email** | [Resend](https://resend.com) with string templates (React Email isn't usable on workerd). Missing API key? Emails are captured to the console so local dev never blocks. The admin notification email HTML-escapes every field before sending. |
| **Waitlist** | A complete pre-launch signup loop: a public signup page, Turnstile bot protection, an admin management page + CSV export, and automatic subscriber sync into a [Resend](https://resend.com) audience (gracefully skipped when unconfigured). Routes are 410'd in production (edge URL gate) — kept as template reference. |
| **Inquiry** | A public B2B inquiry form (name/company/country/email/WhatsApp/business type/quantity/requirements + optional project-file upload to R2 — PNG/JPG/SVG/WebP/PDF/AI/PSD/DWG/DXF/ZIP, ≤10 MB, extension whitelist + per-format magic-number sniffing) with per-IP rate limiting + Turnstile, an HTML-escaped admin notification email, and an admin pipeline: status workflow, CSV export, and sandboxed file serving. |
| **Search** | Header dialog → `/search-index.json` (public, edge-cached 1h); `/search` page → Orama full-text over the same corpus; `/api/search` → in-docs search with a lazy-loaded single Orama instance and per-IP rate limiting (60/min). |
| **AI Assistant** | Floating RAG chat (`src/features/ai/`): bge-m3 embeddings + Vectorize index over the en/es corpus, llama-3.2-3b answers with `[n]`-cited sources, multi-turn history, KV-answer caching (6h), per-IP + daily-quota rate limiting, nightly index rebuild in the cron, and FAQ keyword fallback when the AI stack is unavailable — no mocks, degrades gracefully. |
| **Changelog** | An in-app `/changelog` page — MDX-driven, per-locale, with a `published` flag (410'd in production, template reference). |
| **Feedback** | Signed-in users submit feedback + a "my feedback" list; an admin governance page drives status transitions and replies. Also the **reference for adding your own feature**: a vertical slice with ownership filtering, a pure function layer, both gate patterns, and dual-pool tests — see [feedback](src/content/docs/features/feedback.mdx). |
| **i18n** | Path-based locale routing via TanStack's `{-$locale}` optional prefix — English at `/`, Español at `/es`. All marketing copy and UI strings translated. |
| **SEO** | Per-locale sitemap with `hreflang` + canonical for the bilingual pages, plus single-locale entries for the English-only afarer pages (factory, news, products, technology, case studies, guides); OpenGraph tags (featured image is a real product photo from the site's R2 CDN), `robots.txt`, `noindex` on authenticated pages, and the 5 solution pages as keyword targets (legacy landing URLs 301 to them). Page meta is length-validated (`title ≤ 70`, `description 80–170`). |
| **AI-ready** | **Runtime:** [`llms.txt`](/llms.txt) index and [`llms-full.txt`](/llms-full.txt) full corpus — docs **plus the product catalog, the 5 solution pages (incl. FAQ) and the afarer brand corpus**; [`entity.json`](/entity.json) schema.org Organization; [`rss.xml`](/rss.xml) news feed; `robots.txt` pointing to all of them. **Codebase:** [`AGENTS.md`](AGENTS.md) is the single source of truth for coding agents (auto-imported into [`CLAUDE.md`](CLAUDE.md)). |
| **Admin** | `ADMIN_EMAILS` is the **single source of truth**; the DB `role` column is a cache, two-way-synced on every gated access (promote on first use, demote the moment an email leaves the list). Every admin surface — pages, server fns, CSV exports, and better-auth's own `/api/auth/admin/*` — shares one `assertAdmin()` gate that returns **404** for non-admins (the admin surface stays invisible). Roles are least-privilege (`ban` / `impersonate` / `delete` / `list` only). Searchable/paginated user table, stats dashboard, ban/impersonate/delete actions — all on real data. |
| **Theme** | Dark-first design with a light/dark toggle persisted via cookie. |
| **Security & observability** | Nonce-based production CSP (no `unsafe-inline` for scripts), baseline security headers, Turnstile bot protection, per-IP rate limiting (KV/D1-backed), startup env validation (fail-fast); admin endpoints gated to `ADMIN_EMAILS` (404 for non-admins), admin notification emails HTML-escaped, uploaded files served sandboxed (`default-src 'none'; sandbox`), uploads extension- + magic-number-verified, private surfaces (`/app`, `/admin`, `/api`, auth pages) forced `private, no-store` + `Vary: Cookie` so a CDN misconfiguration can never cache one user's session page for another; CF Web Analytics (cookieless) and Sentry error reporting — all optional, off when keys are blank. |
| **Caching** | Three layers: the Worker's own Cache API for marketing HTML/static assets (1h / 1y immutable / 7d), `max-age`-driven CDN caching (zone Caching Level must be able to cache HTML), and the deploy pipeline's purge → warm sequence so every release lands on a warm edge. |
| **Dev/Ops** | Cron Triggers (daily maintenance cleanup at 03:00 UTC + edge-cache warming every 5 min), local/staging/prod environment separation, GitHub Actions CI (lint + typecheck + test + build) and a full deploy pipeline (migrate → deploy → purge CDN → warm edge → sync secrets → backfill R2 images). |

## Tech stack

- **[TanStack Start](https://tanstack.com/start)** (React 19, file-based routing, server functions)
- **[Cloudflare Workers](https://workers.cloudflare.com)** runtime, deployed via the `@cloudflare/vite-plugin`
- **[D1](https://developers.cloudflare.com/d1/)** (SQLite) with **[Drizzle ORM](https://orm.drizzle.team)** + migrations
- **[KV](https://developers.cloudflare.com/kv/)** for rate limiting, **[R2](https://developers.cloudflare.com/r2/)** for object storage
- **[better-auth](https://better-auth.com)**, **[Resend](https://resend.com)**
- **[Orama](https://orama.com)** full-text search (stopwords + tokenizers), **[Fumadocs](https://fumadocs.dev)** docs
- **[Workers AI](https://developers.cloudflare.com/workers-ai/)** (bge-m3 embeddings + llama-3.2-3b) and **[Vectorize](https://developers.cloudflare.com/vectorize/)** (RAG knowledge index)
- **[Tailwind CSS v4](https://tailwindcss.com)**
- **[Vitest](https://vitest.dev)** (Node unit tests + Workers/D1 integration tests via `@cloudflare/vitest-pool-workers`) — **258 tests green**

## Prerequisites

- **Node.js** >= 22 (recommended to use [nvm](https://github.com/nvm-sh/nvm) or [volta](https://volta.sh/))
- **pnpm** >= 9
- A **Cloudflare** account (free tier is enough to start)
- `wrangler` CLI (already installed as a dev dependency, no need to install globally)

## Quick start

```bash
# 1. Install
pnpm install

# 2. Create your local Wrangler config (holds D1/KV ids etc.; git-ignored,
#    the reference template is committed)
cp wrangler.example.jsonc wrangler.jsonc

# 3. Configure local env (copy the example and fill in what you need)
cp .dev.vars.example .dev.vars
#    Everything is optional locally — blank Resend/Turnstile keys degrade
#    gracefully (console-captured emails, no captcha).

# 4. Create the local D1 schema
pnpm db:migrate:local

# 5. Run it
pnpm dev          # http://localhost:3000
```

### Useful scripts

```bash
pnpm dev                    # dev server on :3000
pnpm build                  # production build
pnpm test                   # full test suite (Vitest)
pnpm typecheck              # fumadocs-mdx && tsc --noEmit
pnpm lint                   # eslint
pnpm db:generate            # generate a Drizzle migration from schema changes
pnpm db:migrate:local       # apply migrations to local D1
pnpm db:migrate:prod        # apply migrations to production D1 (remote)
pnpm db:reset:local         # wipe + re-migrate + re-seed local D1
pnpm deploy:staging         # CLOUDFLARE_ENV=staging build + wrangler deploy
pnpm deploy:prod            # CLOUDFLARE_ENV=production build + wrangler deploy
pnpm deploy:purge           # purge the CDN cache (scripts/purge-cache.mjs)
pnpm deploy:prod:all        # deploy + purge
pnpm upload:afarer-images   # backfill missing afarer images to R2
pnpm upload:site-assets     # upload videos / PDFs / quality photos to R2 (site/*)
pnpm cf-typegen             # regenerate worker-configuration.d.ts from wrangler.jsonc
```

## Project structure

```
src/
  features/        # vertical slices, each self-contained
    site/          # marketing content (content.ts: products, sections, FAQ)
                   # + solution-pages.ts (5 solution pages) + llm.ts (LLM corpus builders)
                   # + search-index.server.ts (full-site search index) + search.ts (Orama)
    content/       # afarer content loader: registry (pages.yaml), EXTRA_PATHS, SHADOWED_PATHS,
                   # catch-all (& static-stub) route helpers; bundles src/content/afarer at build time
    auth/          # better-auth setup, middleware, social buttons, admin-roles (least-privilege)
    storage/       # R2 object storage: validated upload (MIME + size + magic-number) + serving route
    email/         # Resend client + string templates
    waitlist/      # signup page + Turnstile + admin mgmt + CSV export + Resend audience sync
    inquiry/       # B2B inquiry form: validation, rate limiting, Turnstile, project-file upload
                   # (10 formats ≤10 MB, extension whitelist + magic-number sniffing),
                   # HTML-escaped admin notification, admin pipeline (status workflow + CSV)
    audience/      # Resend contacts/audience sync (reused by waitlist)
    changelog/     # MDX-driven in-app changelog page (/changelog)
    feedback/      # example feedback box: submit/list/admin governance — the teach-by-example slice
    i18n/          # dictionaries (en/es) + provider + localizePath
    seo/           # sitemap, robots, locale head tags (og:image, hreflang), edge-gate (301/410 policy)
    docs/          # fumadocs source/layout config + llms.txt text generation
    admin/         # ADMIN_EMAILS-gated admin: assertAdmin gate, role two-way sync,
                   # user list/stats/ban/impersonate/delete + CSV exports
    analytics/     # CF Web Analytics beacon (optional)
    maintenance/   # Cron cleanup task (expired sessions/tokens/rate-limit rows)
    theme/         # dark-first theme toggle
  components/
    ui/            # primitives
    marketing/     # hero, who-we-serve, solve-section, how-it-works, solutions-section,
                   # why-us, platforms-section, studio-section, gallery-section, faq, cta,
                   # reveal, board-art, site-nav, footer, solution-page, solution-route
  routes/
    {-$locale}/    # locale-prefixed bilingual pages: /, /es, /products, /solutions(+5 pages,
                   # hub), /who-we-serve, /customizer, /waitlist, /changelog, /admin, /app,
                   # /search, ... — 5 legacy landing stubs that 301 to their solution pages
    *.tsx          # single-segment afarer stubs (factory, oem-odm-manufacturer, technology, ...)
    $              # root catch-all that resolves any remaining path against the afarer registry
    api/, docs/, docs-md/, llms.txt, llms-full.txt, robots.txt, sitemap.xml,
    entity.json, rss.xml, search-index.json
  content/afarer/  # ported brand content: site/ (registry), pages/ (yaml), products/ (mdx),
                   # news/ (mdx), technology/ + case-use/ (md) , geo/ (json)
  content/docs/    # in-app docs content (MDX sources)
  lib/             # cross-cutting: cache-headers.ts (edge cache policy), csp.ts,
                   # security-headers.ts, env.ts, env-validate.ts
  worker.ts        # worker entry: env validation, edge cache (Cache API), URL gate,
                   # security headers, Sentry, cron (cleanup + cache warming)
db/                # Drizzle schema barrel + client + migrations
drizzle/           # generated SQL migrations (repo root, sibling of src/)
```

> **Product photos** are self-hosted on `assets.supsfactory.com` (the site's R2 CDN). To swap assets, replace the URLs in `src/features/site/content.ts` (and `OG_IMAGE` in `src/features/seo/seo.ts`).
>
> **Site media (product photos, videos, PDFs, quality photos)** are referenced via the R2 CDN (`assets.supsfactory.com/site/...`), with source files kept in Git (`public/assets/products/`, `public/assets/videos/`, `public/downloads/`, `public/assets/quality/`) so the deploy workflow can keep R2 in sync: the "Upload site assets to R2" step runs `scripts/upload-site-assets.mjs --http --missing` (Cloudflare API token) before every deploy — idempotent, only missing objects are PUT. For manual backfills: `pnpm upload:site-assets` (needs `CLOUDFLARE_API_TOKEN`/`CLOUDFLARE_ACCOUNT_ID`, or R2 S3 credentials for the default S3 mode).

## Environment variables

See [`.dev.vars.example`](.dev.vars.example) for the full list. Locally everything is optional and degrades gracefully. For production, the required secrets and how to set them are documented in [deploy](src/content/docs/getting-started/deploy.mdx):

- `BETTER_AUTH_SECRET`, `BETTER_AUTH_URL` (also drives canonical/sitemap origin) — **required**; validated at startup
- `RESEND_API_KEY`, `EMAIL_FROM` (email; blank → console-captured)
- `GOOGLE_CLIENT_ID/SECRET`, `GITHUB_CLIENT_ID/SECRET` (optional social login)
- `ADMIN_EMAILS`
- `TURNSTILE_SITE_KEY`, `TURNSTILE_SECRET_KEY` (optional bot protection)
- `CF_ANALYTICS_TOKEN`, `SENTRY_DSN` (optional analytics + error reporting)

Every optional integration degrades gracefully: leave its keys blank and the
feature simply turns off. The startup env validator catches misconfigurations
(missing required vars, half-configured OAuth/Turnstile pairs) and fails fast.

## Deployment

Once resources and secrets are set, shipping is two steps:

```bash
CLOUDFLARE_ENV=production pnpm build   # environment is chosen at build time (see below)
wrangler deploy
```

> Cloudflare environment is selected **at build time** via `CLOUDFLARE_ENV` (not `wrangler deploy --env`), because the Vite plugin bakes the chosen bindings into the build.

The **full first-time walkthrough** — creating D1/KV, setting secrets, and running remote migrations — is in [deploy](src/content/docs/getting-started/deploy.mdx).

> R2 (object storage) is enabled by default in `wrangler.jsonc` and wired into the code (avatar upload reference). Before deploying, create the bucket: `wrangler r2 bucket create supsfactory-files` (see [storage](src/content/docs/features/storage.mdx)).

## GitHub Actions & deployment configuration

The repo ships five workflows:

| Workflow | Triggers | What it does |
|----------|----------|--------------|
| `ci.yml` | every push | lint + typecheck + test + build (no secrets needed) |
| `deploy.yml` | push to `main` | generates `wrangler.jsonc` from repo variables, builds with `CLOUDFLARE_ENV=production`, applies D1 migrations, deploys the Worker, **purges the CDN cache**, **warms the edge cache** (`/`, `/es`, product pages), bulk-syncs GitHub secrets → Worker secrets, and backfills missing afarer images to R2 |
| `upload-afarer-images.yml` | manual | uploads the bundled afarer images to R2 (used for one-off backfills) |
| `website-performance.yml` | manual | Lighthouse-style performance audit |
| `cf-inspect.yml` | manual | Cloudflare diagnostics helper — dumps cache rules, zone settings and purge results to `cf-inspect.log` in the repo (keep the token's `Zone → Cache Purge` permission for the deploy pipeline's purge step) |

### GitHub repository settings (Settings → Secrets and variables → Actions)

**Variables** (non-sensitive identifiers — read by `.github/scripts/gen-wrangler.mjs` to fill in the production resource ids before deploy):

| Variable | Required | How to get it |
|----------|----------|---------------|
| `CF_PROD_D1_ID` | Yes | Production D1 database id — Cloudflare Dashboard → Workers & Pages → D1 → open database `supsfactory-db-prod` → copy `Database ID`; or `wrangler d1 list` (needs the token's D1 read permission). The deploy **fails** without it |
| `CF_PROD_KV_ID` | Yes | Production KV namespace id — Dashboard → Workers & Pages → KV → open the namespace → copy the id (right side); or `wrangler kv namespace list` |
| `CF_PROD_DOMAIN` | No | Custom domain, e.g. `supsfactory.com`. When set, the deploy binds it as a custom-domain route on the production Worker (also makes the CDN purge + warm steps meaningful) |

**Secrets** (all 17 — set under Settings → Secrets and variables → Actions → New repository secret):

| Secret | How to get it | Blank = |
|--------|---------------|---------|
| `CLOUDFLARE_API_TOKEN` | See the **Cloudflare API token permissions** section below | The whole deploy job skips gracefully (no red ✗) |
| `CLOUDFLARE_ACCOUNT_ID` | Cloudflare Dashboard → right sidebar of the Workers overview → `Account ID` (32-hex). Also shown at the bottom of the API Tokens page | Deploy skipped |
| `BETTER_AUTH_SECRET` | `openssl rand -base64 32` | **Required** — startup fails fast |
| `BETTER_AUTH_URL` | Production URL, e.g. `https://supsfactory.com` (also drives canonical/sitemap origin) | **Required** |
| `RESEND_API_KEY` | [resend.com](https://resend.com) → API Keys → create a key | Emails captured to console |
| `EMAIL_FROM` | e.g. `SUPsfactory <noreply@supsfactory.com>` — **verify your domain in Resend first** (Settings → Domains) | No sender |
| `RESEND_AUDIENCE_ID` | Resend → Audiences → select the audience → copy the id from the URL/API | Waitlist audience sync off (signups still saved to D1) |
| `GOOGLE_CLIENT_ID` | [Google Cloud Console](https://console.cloud.google.com/apis/credentials) → OAuth 2.0 Client ID, callback `https://api.<domain>/api/auth/callback/google` | Google login button hidden |
| `GOOGLE_CLIENT_SECRET` | Same OAuth client → Client secret | Google login hidden |
| `GITHUB_CLIENT_ID` | GitHub → Settings → Developer settings → OAuth Apps → New OAuth App, callback `https://api.<domain>/api/auth/callback/github` | GitHub login button hidden |
| `GITHUB_CLIENT_SECRET` | Same OAuth app → Client secret | GitHub login hidden |
| `ADMIN_EMAILS` | Comma-separated admin emails (single source of truth for admin roles) | No admins |
| `TURNSTILE_SITE_KEY` | Cloudflare Dashboard → Turnstile → Add site → copy `Site Key` | Forms work without captcha |
| `TURNSTILE_SECRET_KEY` | Same Turnstile widget → `Secret Key` | No captcha |
| `CF_ANALYTICS_TOKEN` | Dashboard → Analytics & Logs → Web Analytics → your site → Manage → copy the beacon token (this is **not** an API token) | No beacon injected |
| `SENTRY_DSN` | Sentry → project → Settings → Client Keys (DSN) | No error reporting |
| `REINDEX_TOKEN` | Any strong random string, e.g. `openssl rand -hex 24` — bearer token for `POST /api/reindex` (the AI-index workflow rebuilds the Vectorize index after every deploy) | Index rebuilt only by the daily 03:00 UTC cron |

Notes:

- Keys left blank in GitHub are **skipped during the secret sync** (they never overwrite existing Cloudflare values); to remove a secret, clear it in GitHub first, then clean up the Cloudflare side manually (`wrangler secret delete <KEY> --env production`).
- `GA4_MEASUREMENT_ID` (optional, client-side GA4) is **not** in the deploy sync list — if you want it in production, set it manually once: `wrangler secret put GA4_MEASUREMENT_ID --env production`.
- Workflow permissions: the defaults are fine. `cf-inspect.yml` declares `contents: write` in the workflow file itself (it commits the inspect log); no repo-level "Workflow permissions" change is needed.
- GitHub OAuth apps must be registered with the **same account that hosts the repo** only if you want "GitHub login" for your users; for CI you only need the secrets above.

### Cloudflare API token permissions (`CLOUDFLARE_API_TOKEN`)

Create it at [dash.cloudflare.com/profile/api-tokens](https://dash.cloudflare.com/profile/api-tokens) → **Create Token** → **Create Custom Token**. Give it a name (e.g. `supsfactory-ci`), set the lifetime (≤ 1 year recommended), and tick **both** the Account resources and the Zone resources below. Then create the token **once** and copy it into the `CLOUDFLARE_API_TOKEN` GitHub secret — it is shown only a single time.

**Account resources:**

| Resource | Permission | Why the pipeline needs it | Required |
|----------|-----------|---------------------------|----------|
| Workers Scripts | Edit | `wrangler deploy` (the worker itself) | Yes |
| Workers KV Storage | Edit | deploy binds the KV namespace; `wrangler kv namespace list` (variable lookup) | Yes |
| D1 | Edit | `d1 migrations apply supsfactory-db-prod --env production --remote` before every deploy; `wrangler d1 list` | Yes |
| R2 Storage | Edit | creates buckets + uploads afarer images (`scripts/upload-afarer-images.mjs`, used by deploy backfill and the manual upload workflow) | Yes |
| Vectorize | Edit | idempotently creates the 3 knowledge indexes (`sups-knowledge`, `-staging`, `-prod`) before deploy — deploy fails with code 10159 if the bound index is missing | Yes |
| Account Settings | Read | wrangler account/plan diagnostics | Recommended |

**Zone resources** (scope to the zone `supsfactory.com`):

| Resource | Permission | Why the pipeline needs it | Required |
|----------|-----------|---------------------------|----------|
| Zone | Read | `GET /zones?name=supsfactory.com` — resolves the zone id that the purge and R2-custom-domain steps target | Yes (with a custom domain) |
| Cache Purge | Edit | `POST /zones/{id}/purge_cache` — the deploy pipeline purges the CDN after every release; without it stale HTML can linger up to an hour | Yes (with a custom domain) |
| Workers Routes | Edit | binds `CF_PROD_DOMAIN` as a custom-domain route (only when `CF_PROD_DOMAIN` is set) | Only when using `CF_PROD_DOMAIN` |
| DNS | Edit | only if you manage DNS via the API/wrangler | Optional |

Notes:

- **Workers AI** (bge-m3 embeddings + llama-3.2-3b used by the RAG assistant) is a runtime feature gated by your account's plan — it needs **no API-token permission**; same for the AI binding. Only Vectorize creation needs the Vectorize permission above.
- No custom domain? (default `*.workers.dev`): you can omit all Zone resources — the purge/warm steps detect the missing zone and skip cleanly.
- `CF_ANALYTICS_TOKEN` is **not** an API token — it is the per-site Web Analytics beacon token from the dashboard; do not confuse the two.
- To verify a token afterwards: `curl https://api.cloudflare.com/client/v4/user/tokens/verify -H "Authorization: Bearer <token>"` (or run the `cf-inspect.yml` workflow).

## Documentation

Docs are built into the app, but `/docs` is 410'd in production (edge URL
gate) — read the sources directly in [`src/content/docs/`](src/content/docs/):
(powered by [Fumadocs](https://fumadocs.dev), deployed with the app, no separate Worker).

- [`install.mdx`](src/content/docs/getting-started/install.mdx) — local setup
- [`deploy.mdx`](src/content/docs/getting-started/deploy.mdx) — production deployment
- [`branding.mdx`](src/content/docs/customization/branding.mdx) — titles, descriptions, social preview image, logo
- [`security.mdx`](src/content/docs/platform/security.mdx) — security headers/CSP, env validation, rate limiting, Turnstile
- [`observability.mdx`](src/content/docs/platform/observability.mdx) — analytics + Sentry
- [`storage.mdx`](src/content/docs/features/storage.mdx) — R2 object storage / file uploads
- [`migrations.mdx`](src/content/docs/getting-started/migrations.mdx) — D1 migration workflow
- [`i18n.mdx`](src/content/docs/features/i18n.mdx) — locale routing & SEO origin
- [`admin.mdx`](src/content/docs/features/admin.mdx) — admin bootstrap & roles
- [`feedback.mdx`](src/content/docs/features/feedback.mdx) — feedback example domain: vertical-slice anatomy + copy-me checklist
- [`cf-gotchas.mdx`](src/content/docs/platform/cf-gotchas.mdx) — Cloudflare/workerd pitfalls

## Contact

- **Inquiries & demo requests:** use the in-app [contact form](/contact) (or email the address configured there).
- **Hit a snag?** For local-run or deployment issues, open an issue on the repo.
- [`CONTRIBUTING.md`](CONTRIBUTING.md) — local setup, the checks, conventions
- [`CHANGELOG.md`](CHANGELOG.md) — notable changes

## License

[Apache License 2.0](LICENSE).
