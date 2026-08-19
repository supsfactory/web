# AGENTS.md

Guide for AI coding agents (Claude Code, Codex, etc.) working in this repo.

## What this is

A **Website Foundation** — a Cloudflare-native SaaS platform on **TanStack Start + Cloudflare Workers**, with D1 (SQLite) + KV + R2, Drizzle ORM, better-auth, Resend, and Tailwind v4. The product layer is fully decoupled: swap `src/product/` and `src/config/` to launch a new site.

## Architecture (5 layers)

```
Product Layer          src/product/       Brand strings, product data, AI prompts, dictionaries
Site Configuration     src/config/        SITE_ID, domain, locales, feature flags, nav redirects
Website Foundation     src/features/      Auth, search, AI chat, SEO, inquiry, admin, storage
Cloudflare Platform    D1 + KV + R2 + Vectorize + Workers AI
Infrastructure         GitHub Actions CI/CD + CDN
```

Framework code (`src/features/`, `src/routes/`, `src/components/`) never imports brand-specific data directly — it reads from `@/config/` (which re-exports from `@/product/`). To deploy a new product, change only the Product and Config layers.

## Structure

- `src/product/` — **Product Layer**: brand strings (`brand-constants.ts`), AI content (`ai-content.ts`), section content (`content.ts`), dictionaries (`dictionary/`), asset maps, route registries, edge redirects, entity data, guide content, hub pages, facts, knowledge, projects, series, solutions, procurement, LLMS text, geo JSON. See README for the full file reference.
- `src/config/` — **Site Configuration**: `site.ts` (SITE_ID/NAME/DOMAIN), `branding.ts` (logo/social/contact), `locales.ts` (22 supported, ACTIVE_LOCALES for runtime), `navigation.ts` (redirects), `features.ts` (feature flags), `deployment.ts` (CF resource naming from SITE_ID).
- `src/features/*` — **Website Foundation**: vertical feature slices, each self-contained: `admin`, `analytics`, `audience`, `auth`, `changelog`, `docs`, `email`, `i18n`, `inquiry`, `maintenance`, `seo`, `storage`, `theme`, `waitlist`. `features/site/` contains re-export stubs to `@/product/` for backward compat.
- `src/routes/{-$locale}/` — file-based routes with optional locale prefix (`/` = default locale, `/es` = es). Top-level routes (`api`, `sitemap`, `robots`, `docs`) live outside the locale group.
- `src/components/` — `ui/` primitives + `marketing/` landing + `app/` shell.
- `src/db/` — Drizzle client + `schema.ts` barrel; tables in `src/db/tables/` and feature `*.schema.ts`.
- `src/content/site/` — **Product Content**: page YAML, product MDX, news MDX, case-use/technology MD, geo JSON, site-wide YAML (faqs, registry, research). Swap per deployment.
- `src/content/docs/` — in-app docs (MDX, Fumadocs).
- `scripts/` — `framework.sql` (system bootstrap), `demo.sql` (sample data), `upload-afarer-images.mjs`, `upload-site-assets.mjs`.

## Conventions

- **Config reads:** Import from `@/config` (never hardcode brand names, domains, or resource IDs). Config re-exports from `@/product/` — the API surface is unchanged for consumers.
- **Product reads:** Import from `@/product/` for brand-specific data (content, AI prompts, redirects, entity data). Framework code never hardcodes product data.
- **Env:** Read from `@/lib/env` (re-exports `cloudflare:workers`). Never use `process.env`. In server-only modules read env **lazily** inside the function (`const { env } = await import('@/lib/env')`) so pure cores stay node-testable.
- **i18n:** Dictionaries split into UI (`src/product/dictionary/*-ui.ts`, framework-reusable) and Product (`src/product/dictionary/*-product.ts`, brand-specific). `mergeDict()` combines them. `en.ts`/`es.ts` import and merge. Use `t('key.path')` — never `locale === 'es'` for UI text.
- **Locales:** `SUPPORTED_LOCALES` (22 entries, type system) vs `ACTIVE_LOCALES` (runtime routing, only locales with deployed dictionaries). Add new locale: update ACTIVE_LOCALES + create dictionary file.
- **DB:** Drizzle + D1 migrations — `pnpm db:generate` then `pnpm db:migrate:local`; register new tables in `src/db/schema.ts`. Seed split: `pnpm db:seed:framework:local` (system) then `pnpm db:seed:local` (demo data).
- **No mock, graceful degradation:** optional integrations (Resend, Turnstile, Sentry, analytics) switch off when their env keys are absent — keep that behavior.
- **Routes:** after adding a route, run `pnpm build` before `pnpm typecheck` (the route tree is generated at build).
- **Tests:** Vitest — node pool (`*.node.test.ts`) for pure logic, workers pool (`*.workers.test.ts`) for D1; the workers pool does NOT auto-apply migrations (hand-create tables in `beforeAll`).
- **Media assets:** `public/assets/videos/`, `public/assets/quality/`, `public/assets/products/`, `public/downloads/` are git-ignored; large binaries live in Cloudflare R2 CDN `assets.{SITE_DOMAIN}/site/*`; re-upload via `pnpm upload:site-assets`.

## Commands

```bash
pnpm dev                      # vite dev on :3000
pnpm typecheck                # fumadocs-mdx && tsc --noEmit
pnpm test                     # vitest run
pnpm build                    # vite build
pnpm db:migrate:local         # apply D1 migrations locally
pnpm db:seed:framework:local  # seed system tables (required)
pnpm db:seed:local            # seed demo data (optional)
pnpm deploy:prod              # CLOUDFLARE_ENV=production build + wrangler deploy
pnpm deploy:prod:all          # deploy + purge CDN cache
pnpm upload:site-assets       # upload media to R2; --prefix for key prefix
```
