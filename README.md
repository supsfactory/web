<div align="center">
  <h1>SUPsfactory</h1>
  <p>Launch your own SUP brand — 10 manufacturing platforms, real OEM/ODM, bilingual marketing site, shipped edge-native.</p>
  <p>
    <a href="LICENSE"><img src="https://img.shields.io/badge/License-Apache_2.0-blue.svg" alt="License"></a>
    <a href="https://developers.cloudflare.com/workers/"><img src="https://img.shields.io/badge/Cloudflare-Workers-F38020?logo=cloudflare&logoColor=white" alt="Cloudflare Workers"></a>
    <a href="https://www.typescriptlang.org/"><img src="https://img.shields.io/badge/TypeScript-007ACC?logo=typescript&logoColor=white" alt="TypeScript"></a>
  </p>
  <p>
    <em>Bright Ocean Studio × Premium Manufacturing — a complete SUP brand platform built on the FlareStarter full-stack SaaS starter.</em>
  </p>
</div>

---

**English** | [简体中文](README.zh.md)

SUPsfactory is the production-ready web presence for an SUP (stand-up paddleboard) OEM/ODM manufacturer. It pairs a fully designed bilingual (en / zh) marketing site with the complete SaaS backend from [FlareStarter](https://github.com/FlareStarter/flarestarter): auth, billing, email, an admin console, and more — every feature a real implementation, no mocks or stubs, running on the Cloudflare free-to-cheap stack (Workers + D1 + KV + R2).

## The marketing site

Custom-built "Bright Ocean Studio × Premium Manufacturing" design system: Ocean White / Ocean Blue / Aqua / Sunset / Deep Navy palette, Manrope + Inter typefaces, wave motion, glass cards, and reveal-on-scroll — light & dark modes.

| Page | What it does |
|------|--------------|
| **Home** | 100svh ocean hero with the flagship product photo, live stats, why-us cards, who-we-serve scene cards, a horizontal snap-scroll **Custom SUP Studio** walkthrough (board shape → graphics → deck pad → accessories → packaging), catalog preview, 5-step how-it-works timeline, brand-story gallery, CTA band |
| **Products** | Full catalog of the **10 real series** (SKUs, specs, prices, photos, artwork & construction lines) with SKU + price badges — see the table below |
| **SUP Design Studio** | Interactive configurator: pick colors and preview a live board mockup — the "place your logo" pitch for prospects |
| **Solutions / Who we serve** | Dedicated sections for startup brands, resorts, clubs, and private label |
| **5 SEO landing pages** | `/sup-startup-brands`, `/sup-for-resorts`, `/sup-for-clubs`, `/private-label-sup`, `/custom-sup-manufacturing` — targeted keyword pages for AI answer engines and search |
| **Gallery / How it works / About / Contact** | Brand stories with real project photos, manufacturing timeline, company story, inquiry form |

**The 10 platform series** (data in `src/features/site/content.ts`, photos served from `assets.afarer.com`):

| Series | SKU | Price | Position |
|--------|-----|-------|----------|
| SUP Explorer 11' | SUP-EX11 | $399 | All-around entry platform, complete package |
| Ocean Pulse | SUP-OP11 | $449 | Mechanical heat-embossed Tiffany contours |
| Cheetah Surge | SUP-CS11 | $449 | Multi-color EVA block piecing |
| Medusa Glow | SUP-MG11 | $449 | Yoga-focused mint dreamscape |
| Deep Wave | SUP-DW11 | $449 | CNC color-block splicing, PANTONE matching |
| Floating Lotus | SUP-FL11 | $449 | Laser-engraved EVA, gradient UV |
| Jellyfish Moon | SUP-JM11 | $449 | Multi-technique combo, screen-printed rails |
| Living Water | SUP-LW11 | $449 | UV printing + mechanical embossing |
| Ocean Voyager | SUP-OV11 | $449 | Touring turtle artwork + coordinated kit |
| Tropic Breeze | SUP-TB11 | $449 | Die-cut EVA patchwork travel board |

Every series is a manufacturing platform — shape, artwork, EVA deck pads, and packaging all adapt to your client's brand (50pcs MOQ per design).

**AI-ready content**: `/llms.txt` and `/llms-full.txt` index both the docs and the full product catalog (names, SKUs, specs, prices, recommended use), so answer engines can cite the actual offering.

## The platform under the hood

| Area | What you get |
|------|--------------|
| **Auth** | Email/password with mandatory verification, password reset, and account deletion via [better-auth](https://better-auth.com). Google & GitHub OAuth that gracefully hide themselves when their env vars are unset. Sessions use D1 as source of truth with a cookie cache. |
| **Billing** | [Stripe](https://stripe.com) subscriptions (monthly/yearly) **and** one-time lifetime purchase, a Customer Portal link, plan-gated routes (`requirePlan`), idempotent webhook handling, and best-effort billing event hooks. Failed renewals surface an in-app "update your payment method" banner — see [billing](src/content/docs/features/billing.mdx). |
| **Storage** | [R2](https://developers.cloudflare.com/r2/) object storage with a working avatar upload (validated, streamed back through a serving route since R2 isn't public). Zero-config locally via miniflare — see [storage](src/content/docs/features/storage.mdx). |
| **Email** | [Resend](https://resend.com) with string templates (React Email isn't usable on workerd). Missing API key? Emails are captured to the console so local dev never blocks. |
| **Waitlist** | A complete pre-launch signup loop: a public signup page, Turnstile bot protection, an admin management page + CSV export, and automatic subscriber sync into a [Resend](https://resend.com) audience (gracefully skipped when unconfigured). |
| **Changelog** | An in-app `/changelog` page — MDX-driven, per-locale, with a `published` flag. |
| **Sponsor** | A standalone `/sponsor` page demoing a real Stripe donation loop — **pure donation, unlocks nothing**. One-time and monthly, amount-driven (PWYW), with WeChat Pay support and a GitHub thank-you avatar wall. Config via `src/features/sponsor/sponsor.config.ts`. |
| **Feedback** | Signed-in users submit feedback + a "my feedback" list; an admin governance page drives status transitions and replies. Also the **reference for adding your own feature**: a vertical slice with ownership filtering, a pure function layer, both gate patterns, and dual-pool tests — see [feedback](src/content/docs/features/feedback.mdx). |
| **i18n** | Path-based locale routing via TanStack's `{-$locale}` optional prefix — English at `/`, 中文 at `/zh`. All marketing copy, UI strings, and docs translated. |
| **SEO** | Per-locale sitemap, `hreflang`, canonical URLs, OpenGraph tags (featured image now a real product photo from the afarer CDN), `robots.txt`, `noindex` on authenticated pages, and 5 keyword-targeted landing pages. |
| **AI-ready** | **Runtime:** [`llms.txt`](/llms.txt) index and [`llms-full.txt`](/llms-full.txt) full corpus — docs **plus product catalog**; clean frontmatter-stripped Markdown via `/docs-md/*`; `robots.txt` pointing to both. **Codebase:** [`AGENTS.md`](AGENTS.md) is the single source of truth for coding agents (auto-imported into [`CLAUDE.md`](CLAUDE.md)). |
| **Admin** | better-auth admin plugin: roles, ban, user impersonation, a searchable/paginated user table, and a stats dashboard — all built on real data. |
| **Theme** | Dark-first design with a light/dark toggle persisted via cookie. |
| **Security & observability** | Turnstile bot protection, security headers + production CSP, auth-endpoint rate limiting (D1-backed), startup env validation (fail-fast); CF Web Analytics (cookieless) and Sentry error reporting — all optional, off when keys are blank. |
| **Dev/Ops** | Cron Triggers reference (daily cleanup of expired sessions/tokens/rate-limit rows), local/staging/prod environment separation, GitHub Actions CI (lint + typecheck + build). |

## Tech stack

- **[TanStack Start](https://tanstack.com/start)** (React 19, file-based routing, server functions)
- **[Cloudflare Workers](https://workers.cloudflare.com)** runtime, deployed via the `@cloudflare/vite-plugin`
- **[D1](https://developers.cloudflare.com/d1/)** (SQLite) with **[Drizzle ORM](https://orm.drizzle.team)** + migrations
- **[KV](https://developers.cloudflare.com/kv/)** for caching, **[R2](https://developers.cloudflare.com/r2/)** for object storage
- **[better-auth](https://better-auth.com)**, **[Stripe](https://stripe.com)**, **[Resend](https://resend.com)**
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
#    Everything is optional locally — blank Stripe/Resend keys degrade
#    gracefully (no billing, console-captured emails).

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
    site/          # marketing content (content.ts: products, sections, FAQ) + landings.ts + llm.ts
    auth/          # better-auth setup, middleware, social buttons
    billing/       # Stripe provider, entitlements, webhooks, hooks
    storage/       # R2 object storage: validated upload + serving route (avatar)
    email/         # Resend client + string templates
    waitlist/      # signup page + Turnstile + admin mgmt + CSV export + Resend audience sync
    audience/      # Resend contacts/audience sync (reused by waitlist)
    changelog/     # MDX-driven in-app changelog page (/changelog)
    sponsor/       # standalone sponsor page: one-time/monthly Stripe + GitHub thanks wall
    feedback/      # example feedback box: submit/list/admin governance — the teach-by-example slice
    i18n/          # dictionaries (en/zh) + provider
    seo/           # sitemap, robots, locale head tags (og:image, hreflang)
    docs/          # fumadocs source/layout config + llms.txt text generation
    admin/         # admin plugin wiring + dashboard
    analytics/     # CF Web Analytics beacon (optional)
    maintenance/   # Cron cleanup task (expired sessions/tokens/rate-limit rows)
    theme/         # dark-first theme toggle
  components/
    ui/            # primitives
    marketing/     # hero, why-us, who-we-serve, studio-section, products-section,
                   # how-it-works, gallery-section, cta, reveal, board-art, landing-page
  routes/
    {-$locale}/    # locale-prefixed pages: /, /zh, /products, /solutions, /customizer,
                   # /sup-startup-brands, /admin, /app, ...
    api/, docs/, docs-md/, llms.txt, robots.txt, sitemap.xml   # top-level routes (outside the locale group)
  content/docs/    # in-app docs content (fumadocs mdx sources)
  db/              # Drizzle schema barrel + client + migrations
drizzle/           # generated SQL migrations (repo root, sibling of src/)
```

> **Product photos** are currently hot-linked from `assets.afarer.com` (the manufacturer's CDN). Swap the URLs in `src/features/site/content.ts` (and `OG_IMAGE` in `src/features/seo/seo.ts`) for your own assets before going live.

## Environment variables

See [`.dev.vars.example`](.dev.vars.example) for the full list. Locally everything is optional and degrades gracefully. For production, the required secrets and how to set them are documented in [deploy](src/content/docs/getting-started/deploy.mdx):

- `BETTER_AUTH_SECRET`, `BETTER_AUTH_URL` (also drives canonical/sitemap origin) — **required**; validated at startup
- `RESEND_API_KEY`, `EMAIL_FROM` (email; blank → console-captured)
- `GOOGLE_CLIENT_ID/SECRET`, `GITHUB_CLIENT_ID/SECRET` (optional social login)
- `STRIPE_SECRET_KEY`, `STRIPE_WEBHOOK_SECRET`, `STRIPE_PRICE_PRO_*` (billing); `STRIPE_WECHAT_PAY_ENABLED` (optional)
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

The **full first-time walkthrough** — creating D1/KV, setting secrets, running remote migrations, configuring the Stripe webhook — is in [deploy](src/content/docs/getting-started/deploy.mdx).

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
| `STRIPE_SECRET_KEY` | Stripe Dashboard → Developers → API keys (`sk_live_…`) | Billing off |
| `STRIPE_WEBHOOK_SECRET` | Stripe → Webhooks → endpoint (`whsec_…`) | Webhook verification fails |
| `STRIPE_PRICE_PRO_MONTHLY` / `_YEARLY` / `_LIFETIME` | Stripe → Products → Price ids (`price_…`) | No Pro pricing |
| `ADMIN_EMAILS` | Comma-separated admin emails | No admins |
| `TURNSTILE_SITE_KEY` / `TURNSTILE_SECRET_KEY` | Dashboard → Turnstile → create a widget | Forms work without captcha |
| `CF_ANALYTICS_TOKEN` | Dashboard → Analytics & Logs → Web Analytics | No beacon |
| `SENTRY_DSN` | Sentry project → Client Keys (DSN) | No error reporting |

Notes: keys left blank in GitHub are skipped during sync (they never overwrite existing Cloudflare values); to remove a secret, clear it in GitHub first, then clean up the Cloudflare side manually. `STRIPE_WECHAT_PAY_ENABLED` is not in the sync list — set it manually with `wrangler secret put STRIPE_WECHAT_PAY_ENABLED --env production` to enable WeChat Pay in production.

## Documentation

Docs are built into the main app — visit `/docs` to read them (powered by
[Fumadocs](https://fumadocs.dev), deployed with the app, no separate Worker).
Content lives in [`src/content/docs/`](src/content/docs/):

- [`install.mdx`](src/content/docs/getting-started/install.mdx) — local setup
- [`deploy.mdx`](src/content/docs/getting-started/deploy.mdx) — production deployment
- [`branding.mdx`](src/content/docs/customization/branding.mdx) — titles, descriptions, social preview image, logo
- [`billing.mdx`](src/content/docs/features/billing.mdx) — billing & subscriptions, failed-payment (dunning) handling
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
