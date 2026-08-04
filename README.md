<div align="center">
  <h1>SUPsfactory</h1>
  <p>Your custom SUP product development & manufacturing partner — 10 manufacturing platforms, real OEM/ODM, bilingual marketing site + 5-page solutions system, shipped edge-native.</p>
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

**English** | [简体中文](README.zh.md)

SUPsfactory is the production-ready web presence for an SUP (stand-up paddleboard) OEM/ODM manufacturer — the marketing site is positioned as a **custom SUP product development & manufacturing partner**, not a "launch your own brand" tool. It pairs a fully designed bilingual (en / zh) marketing site with the complete SaaS backend from [Vectoflare](https://github.com/vectoflare/vectoflare): auth, email, an admin console, and more — every feature a real implementation, no mocks or stubs, running on the Cloudflare free-to-cheap stack (Workers + D1 + KV + R2). The full afarer brand content (factory, technology, research, news, product pages) is ported in and served from the same Worker, English-only, under `/`.

## The marketing site

Custom-built "Bright Ocean Studio" design language: Ocean White / Ocean Blue / Aqua / Sunset / Deep Navy palette, Manrope + Inter typefaces, wave motion, glass cards, and reveal-on-scroll — light & dark modes.

| Page | What it does |
|------|--------------|
| **Home** | Ocean hero ("Turn your SUP ideas into reality"), a 6-item capability strip (OEM & ODM · Private Label · Sample Service · Design & Artwork · QC on every run · Worldwide export), who-we-serve scene cards, what-we-solve, a 6-step product development process, solutions pillars, why-us cards, the **10 manufacturing platforms** table, a horizontal snap-scroll **Custom SUP Studio** walkthrough (board shape → graphics → deck pad → accessories → packaging), brand-story gallery, FAQ (JSON-LD), CTA band |
| **Products** | Full catalog of the **10 real series** (SKUs, specs, prices, photos, artwork & construction lines) with SKU + price badges — see the table below |
| **SUP Design Studio** | Interactive configurator: pick colors and preview a live board mockup — the "place your logo" pitch for prospects |
| **Solutions system** | A 5-page system under `/solutions` — `/solutions/custom-sup`, `/solutions/private-label-sup`, `/solutions/resort-sup`, `/solutions/club-sup`, `/solutions/school-sup`. Every page follows one business logic (scenario → problems → solution → process → case study → FAQ) and ends in a **CTA temperature** — cold (Learn More), warm (Discuss Your Project), hot (Request Manufacturing Proposal) — so each audience gets a pitch matched to how ready they are |
| **Who we serve** | Landing-oriented scene pages that funnel into the matching solution page |
| **Legacy SEO landings** | The old keyword pages (`/sup-startup-brands`, `/sup-for-resorts`, `/sup-for-clubs`, `/private-label-sup`, `/custom-sup-manufacturing`) now **301-redirect** to their new solution-page equivalents — search equity preserved, one source of truth |
| **afarer brand content** | The full ported manufacturer site (English): `/factory/*`, `/technology/*`, `/research/*`, `/news/*`, `/products/*`, `/oem-odm`, `/guides`, `/faq` and more — served by a catch-all route from the bundled afarer content |
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

**AI-ready content**: `/llms.txt` and `/llms-full.txt` index the docs, the full product catalog (names, SKUs, specs, prices, recommended use), the 5 solution pages with their FAQ, and the whole ported afarer brand corpus (factory, technology, research, news) — so answer engines can cite the actual offering. `/entity.json` exposes the schema.org Organization entity behind the factory, and `/rss.xml` the news feed.

## The platform under the hood

| Area | What you get |
|------|--------------|
| **Auth** | Email/password with mandatory verification, password reset, and account deletion via [better-auth](https://better-auth.com). Google & GitHub OAuth that gracefully hide themselves when their env vars are unset. Sessions use D1 as source of truth with a cookie cache. |
| **Storage** | [R2](https://developers.cloudflare.com/r2/) object storage with a working avatar upload (validated, streamed back through a serving route since R2 isn't public). Zero-config locally via miniflare — see [storage](src/content/docs/features/storage.mdx). |
| **Email** | [Resend](https://resend.com) with string templates (React Email isn't usable on workerd). Missing API key? Emails are captured to the console so local dev never blocks. The admin notification email HTML-escapes every field before sending. |
| **Waitlist** | A complete pre-launch signup loop: a public signup page, Turnstile bot protection, an admin management page + CSV export, and automatic subscriber sync into a [Resend](https://resend.com) audience (gracefully skipped when unconfigured). |
| **Inquiry** | A public B2B inquiry form (name/company/country/email/WhatsApp/business type/quantity/requirements + optional logo upload to R2) with per-IP rate limiting + Turnstile, an HTML-escaped admin notification email, and an admin pipeline: status workflow, CSV export, and sandboxed logo serving. |
| **Changelog** | An in-app `/changelog` page — MDX-driven, per-locale, with a `published` flag. |
| **Feedback** | Signed-in users submit feedback + a "my feedback" list; an admin governance page drives status transitions and replies. Also the **reference for adding your own feature**: a vertical slice with ownership filtering, a pure function layer, both gate patterns, and dual-pool tests — see [feedback](src/content/docs/features/feedback.mdx). |
| **i18n** | Path-based locale routing via TanStack's `{-$locale}` optional prefix — English at `/`, 中文 at `/zh`. All marketing copy, UI strings, and docs translated. |
| **SEO** | Per-locale sitemap with `hreflang` + canonical for the bilingual pages, plus single-locale entries for the English-only afarer pages (factory, news, products, technology, case studies, guides); OpenGraph tags (featured image is a real product photo from the site's R2 CDN), `robots.txt`, `noindex` on authenticated pages, and the 5 solution pages as keyword targets (legacy landing URLs 301 to them). |
| **AI-ready** | **Runtime:** [`llms.txt`](/llms.txt) index and [`llms-full.txt`](/llms-full.txt) full corpus — docs **plus the product catalog, the 5 solution pages (incl. FAQ) and the afarer brand corpus**; [`entity.json`](/entity.json) schema.org Organization; [`rss.xml`](/rss.xml) news feed; clean frontmatter-stripped Markdown via `/docs-md/*`; `robots.txt` pointing to all of them. **Codebase:** [`AGENTS.md`](AGENTS.md) is the single source of truth for coding agents (auto-imported into [`CLAUDE.md`](CLAUDE.md)). |
| **Admin** | `ADMIN_EMAILS` is the **single source of truth**; the DB `role` column is a cache, two-way-synced on every gated access (promote on first use, demote the moment an email leaves the list). Every admin surface — pages, server fns, CSV exports, and better-auth's own `/api/auth/admin/*` — shares one `assertAdmin()` gate that returns **404** for non-admins (the admin surface stays invisible). Roles are least-privilege (`ban` / `impersonate` / `delete` / `list` only). Searchable/paginated user table, stats dashboard, ban/impersonate/delete actions — all on real data. |
| **Theme** | Dark-first design with a light/dark toggle persisted via cookie. |
| **Security & observability** | Nonce-based production CSP (no `unsafe-inline` for scripts), baseline security headers, Turnstile bot protection, per-IP rate limiting (D1-backed), startup env validation (fail-fast); admin endpoints gated to `ADMIN_EMAILS` (404 for non-admins), admin notification emails HTML-escaped, uploaded logos served sandboxed (`default-src 'none'; sandbox`); CF Web Analytics (cookieless) and Sentry error reporting — all optional, off when keys are blank. |
| **Dev/Ops** | Cron Triggers reference (daily cleanup of expired sessions/tokens/rate-limit rows), local/staging/prod environment separation, GitHub Actions CI (lint + typecheck + build). |

## Tech stack

- **[TanStack Start](https://tanstack.com/start)** (React 19, file-based routing, server functions)
- **[Cloudflare Workers](https://workers.cloudflare.com)** runtime, deployed via the `@cloudflare/vite-plugin`
- **[D1](https://developers.cloudflare.com/d1/)** (SQLite) with **[Drizzle ORM](https://orm.drizzle.team)** + migrations
- **[KV](https://developers.cloudflare.com/kv/)** for caching, **[R2](https://developers.cloudflare.com/r2/)** for object storage
- **[better-auth](https://better-auth.com)**, **[Resend](https://resend.com)**
- **[Tailwind CSS v4](https://tailwindcss.com)**
- **[Vitest](https://vitest.dev)** (Node unit tests + Workers/D1 integration tests via `@cloudflare/vitest-pool-workers`)

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
pnpm dev               # dev server on :3000
pnpm build             # production build
pnpm test              # full test suite (Vitest)
pnpm typecheck         # tsc --noEmit
pnpm lint              # eslint
pnpm db:generate       # generate a Drizzle migration from schema changes
pnpm db:migrate:local  # apply migrations to local D1
pnpm db:reset:local    # wipe + re-migrate + re-seed local D1
pnpm cf-typegen        # regenerate worker-configuration.d.ts from wrangler.jsonc
```

## Project structure

```
src/
  features/        # vertical slices, each self-contained
    site/          # marketing content (content.ts: products, sections, FAQ)
                   # + solution-pages.ts (5 solution pages) + llm.ts (LLM corpus builders)
    content/       # afarer content loader: registry (pages.yaml), EXTRA_PATHS, SHADOWED_PATHS,
                   # catch-all (& static-stub) route helpers; bundles src/content/afarer at build time
    auth/          # better-auth setup, middleware, social buttons, admin-roles (least-privilege)
    storage/       # R2 object storage: validated upload + serving route (avatar)
    email/         # Resend client + string templates
    waitlist/      # signup page + Turnstile + admin mgmt + CSV export + Resend audience sync
    inquiry/       # B2B inquiry form: validation, rate limiting, Turnstile, logo upload,
                   # HTML-escaped admin notification, admin pipeline (status workflow + CSV)
    audience/      # Resend contacts/audience sync (reused by waitlist)
    changelog/     # MDX-driven in-app changelog page (/changelog)
    feedback/      # example feedback box: submit/list/admin governance — the teach-by-example slice
    i18n/          # dictionaries (en/zh) + provider + localizePath
    seo/           # sitemap, robots, locale head tags (og:image, hreflang)
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
    {-$locale}/    # locale-prefixed bilingual pages: /, /zh, /products, /solutions(+5 pages,
                   # hub), /who-we-serve, /customizer, /waitlist, /changelog, /admin, /app, ...
                   # 5 legacy landing stubs that 301 to their solution pages
    *.tsx          # single-segment afarer stubs (factory, oem-odm, technology, ...)
    $              # root catch-all that resolves any remaining path against the afarer registry
    api/, docs/, docs-md/, llms.txt, llms-full.txt, robots.txt, sitemap.xml, entity.json, rss.xml
  content/afarer/  # ported brand content: site/ (registry), pages/ (yaml), products/ (mdx),
                   # news/ (mdx), technology/ + case-use/ (md) , geo/ (json)
  content/docs/    # in-app docs content (MDX sources)
  db/              # Drizzle schema barrel + client + migrations
drizzle/           # generated SQL migrations (repo root, sibling of src/)
```

> **Product photos** are self-hosted on `assets.supsfactory.com` (the site's R2 CDN). To swap assets, replace the URLs in `src/features/site/content.ts` (and `OG_IMAGE` in `src/features/seo/seo.ts`).

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

## GitHub Actions configuration

The repo ships two workflows: `ci.yml` (lint + typecheck + test + build, no secrets needed) and `deploy.yml` (builds with `CLOUDFLARE_ENV=production` and deploys on every push to `main`). Configure them under **Settings → Secrets and variables → Actions**:

**Variables** (non-sensitive identifiers, used by `.github/scripts/gen-wrangler.mjs`):

| Variable | Required | How to get it |
|----------|----------|---------------|
| `CF_PROD_D1_ID` | Yes | Production D1 database id — Cloudflare Dashboard → D1, or `wrangler d1 list` (deploy fails without it) |
| `CF_PROD_KV_ID` | Yes | Production KV namespace id — Dashboard → Workers & Pages → KV, or `wrangler kv namespace list` |
| `CF_PROD_DOMAIN` | No | Custom domain, e.g. `supsfactory.com` (bound as a custom domain route) |

**Secrets** (deployment credentials):

| Secret | How to get it |
|--------|---------------|
| `CLOUDFLARE_API_TOKEN` | Dashboard → My Profile → API Tokens → Create Token — scope `Workers Scripts:Edit`, `D1`, `KV`, `R2`. If unset, the deploy job skips gracefully (no red ✗) |
| `CLOUDFLARE_ACCOUNT_ID` | 32-hex account id — Dashboard sidebar / Workers overview |

**Secrets** (app secrets, bulk-synced to the Worker on every deploy via `wrangler secret bulk`):

| Secret | How to get it | Blank = |
|--------|---------------|---------|
| `BETTER_AUTH_SECRET` | `openssl rand -base64 32` | **Required** — startup fails fast |
| `BETTER_AUTH_URL` | Production URL, e.g. `https://supsfactory.com` (also drives canonical/sitemap origin) | **Required** |
| `RESEND_API_KEY` | Resend → API Keys | Emails captured to console |
| `EMAIL_FROM` | e.g. `SUPsfactory <onboarding@yourdomain.com>` (verify the domain in Resend first) | No sender |
| `RESEND_AUDIENCE_ID` | Resend → Audiences → id | No waitlist audience sync |
| `GOOGLE_CLIENT_ID` / `GOOGLE_CLIENT_SECRET` | Google Cloud Console → OAuth client, callback `https://api.<domain>/api/auth/callback/google` | Login button hidden |
| `GITHUB_CLIENT_ID` / `GITHUB_CLIENT_SECRET` | GitHub → Settings → Developer settings → OAuth Apps | Login button hidden |
| `ADMIN_EMAILS` | Comma-separated admin emails | No admins |
| `TURNSTILE_SITE_KEY` / `TURNSTILE_SECRET_KEY` | Dashboard → Turnstile → create a widget | Forms work without captcha |
| `CF_ANALYTICS_TOKEN` | Dashboard → Analytics & Logs → Web Analytics | No beacon |
| `SENTRY_DSN` | Sentry project → Client Keys (DSN) | No error reporting |

Notes: keys left blank in GitHub are skipped during sync (they never overwrite existing Cloudflare values); to remove a secret, clear it in GitHub first, then clean up the Cloudflare side manually.

## Documentation

Docs are built into the main app — visit `/docs` to read them (powered by
[Fumadocs](https://fumadocs.dev), deployed with the app, no separate Worker).
Content lives in [`src/content/docs/`](src/content/docs/):

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
