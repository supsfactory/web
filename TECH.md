# SUPsfactory — Technical Documentation

> Last updated: 2026-08-04
> Project path: `E:\github\supsfactory`
> Production: https://supsfactory.com (Cloudflare Workers, `supsfactory-production`)
> Stack: TanStack Start (React 19) + Cloudflare Workers + D1 (Drizzle ORM) + KV + R2 + better-auth + Resend
> Tests: Vitest (node + workers pools); `pnpm typecheck` / `pnpm build` green
> Marketing positioning: custom SUP product development & manufacturing partner (not "launch your own brand") — 5-page /solutions system, legacy landings 301 to it; full afarer brand content ported under `/`

---

## 1. Architecture

### 1.1 Edge-native full-stack on Cloudflare Workers

Everything runs on the edge — the marketing site, the SaaS app, and all APIs are one Worker deployed from a single build. Environments are selected **at build time** (`CLOUDFLARE_ENV=production pnpm build`) because the `@cloudflare/vite-plugin` bakes the chosen bindings (D1/KV/R2 ids) into `dist/server/wrangler.json`. `wrangler deploy` then ships that artifact.

| Piece | How it works |
|-------|--------------|
| Server entry (`src/worker.ts`) | Wraps the TanStack server entry: fail-fast env validation once per isolate, per-request CSP nonce (AsyncLocalStorage), baseline security headers, Sentry wrapper (only when `SENTRY_DSN` set). |
| Cron | `0 3 * * *` daily cleanup — deletes expired `session`/`verification` and stale `rateLimit` rows (`src/features/maintenance/cleanup.ts`). No outbound calls. |
| Assets | Self-hosted fonts, `public/` statics. Product photos served from `assets.supsfactory.com` (the site's own R2 CDN). All afarer content (`src/content/afarer/`) is bundled at build time via Vite glob + `?raw` — no filesystem at runtime. |

### 1.2 Locale routing and the two content worlds

Path-based bilingual routing via TanStack's `{-$locale}` optional prefix: English at `/`, Español at `/es` (default locale has no prefix; `/en/...` is 301-stripped to the canonical no-prefix form in `route.tsx`). Locale is negotiated from cookie → Accept-Language.

The site serves **two content worlds** from one route tree:

1. **Bilingual marketing site** (`{-$locale}/` routes) — copy/UI in `src/features/site/content.ts`, solution pages in `solution-pages.ts`.
2. **Ported afarer brand site** (English-only) — the factory/technology/research/news/product content from `src/content/afarer/`. The root catch-all `src/routes/$.tsx` strips an optional leading locale segment and resolves the rest against the afarer registry; unknown paths throw `notFound()`. ~45 single-segment paths (e.g. `/factory`, `/oem-odm`, `/technology`) get their own static route stub via `afarerSingleRoute()` — they **must** be explicit routes because the optional `{-$locale}` group terminates on a bare segment before the splat is ever considered (a static route outranks the optional group).

Registry ownership is explicit: `SHADOWED_PATHS` (`features/content/loader.ts`) lists every path owned by a static SUPsfactory route — registry entries under those are never rendered; `EXTRA_PATHS` maps registry-less pages (research articles, R&D subpages, ported solution/OEM pages) to their YAML slugs for dedicated routes.

### 1.3 Three data stores

| Store | Use |
|-------|-----|
| **D1** (SQLite, Drizzle ORM) | Single source of truth for auth (`user/account/session/verification/rateLimit`) plus app tables (`waitlist`, `inquiry`, `feedback`). |
| **KV** | Per-IP rate-limit counters for the public waitlist form (`src/features/waitlist/rate-limit.ts`). Avatar/inquiry logo uploads go to R2, not KV. |
| **R2** | Blobs: user avatars (`avatars/{userId}`, overwrite-on-upload), inquiry logos (`inquiry-logos/{id}.{ext}`, up to 5 MB). Served back through Worker routes because R2 isn't public. |

---

## 2. Admin authorization model (the core security logic)

### 2.1 `ADMIN_EMAILS` is the single source of truth

The DB `role` column is a **cache**, not authority. `ADMIN_EMAILS` (env) decides who is an admin. On signup, `databaseHooks.user.create.before` stamps `role: 'admin' | 'user'` for matching emails.

### 2.2 One shared gate: `assertAdmin()` — `src/features/admin/assert-admin.server.ts`

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

### 2.3 Least-privilege roles — `src/features/auth/admin-roles.ts`

`adminRoles = { admin: ['ban','impersonate','delete','list'], user: [] }` via `createAccessControl`. The admin UI only uses ban/unban/impersonate/stop-impersonating/delete; the user list is a custom Drizzle query, not `listUsers`. Deliberately dropped: `create/update/set-role/set-password/set-email/get` — even a tampered `role` column can't rewrite users or elevate access. Same object is shared with tests (`createTestAuth(db, emails, { roles: adminRoles })`).

### 2.4 Auth details (better-auth)

- Email/password, mandatory email verification (only when `RESEND_API_KEY` present), password reset, account deletion (`user.deleteUser`).
- Google + GitHub OAuth, auto-hidden when keys blank; account linking trusted for verified providers.
- **Rate limiting**: built-in throttling on sign-in/sign-up/send-verification/`reset-password`, persisted in **D1** (Workers memory is per-isolate); client IP is `cf-connecting-ip`.
- **Turnstile** captcha plugin on sign-up/sign-in/reset when `TURNSTILE_SECRET_KEY` set (graceful off).

---

## 3. Security model

| Vector | Mitigation | Location |
|--------|-----------|----------|
| SQL injection | Drizzle ORM parameterization everywhere; the only raw `sql` is the admin user `LIKE` search with DB-bound pattern + `ESCAPE '!'` + whitelisted sort column | `admin/getAdminUsers.ts` |
| XSS | React escapes by default; admin notification email **HTML-escapes all fields**; CSP has no `unsafe-inline` for scripts (nonce-based) | `inquiry/notify.ts`, `lib/security-headers.ts` |
| Stored file XSS | Uploaded logo responses enforced `Content-Security-Policy: default-src 'none'; sandbox` + `nosniff` | `routes/api/inquiry-logo/$.ts` |
| CSV injection | Cells starting with `= + - @` prefixed with a quote in admin exports | `routes/admin/*.csv.ts`, `waitlist/csv.ts` |
| SSRF | Only outbound `fetch` is Turnstile `siteverify` to a hardcoded URL | `features/waitlist/turnstile.ts` |
| Path traversal | R2 keys are flat strings (no directory hierarchy); avatar/logo keys use the UUID id | `features/storage/storage.ts`, `inquiry/inquiry.server.ts` |
| Admin abuse | Single `assertAdmin` gate + least-privilege roles + 404 for non-admins | `admin/assert-admin.server.ts` |
| Brute force | Turnstile + better-auth rate limits (D1-backed) | `auth/auth.server.ts` |
| Unknown endpoints | 404 (TFS/route handlers), CSP `object-src 'none'`, no legacy files | workers routes |

**Protocol headers** (every response): `X-Content-Type-Options`, `X-Frame-Options: DENY`, `Referrer-Policy`, `Permissions-Policy`, HSTS; CSP in production only (nonce-based, `static.cloudflareinsights.com` + `challenges.cloudflare.com` whitelisted for Web Analytics + Turnstile).

**Secrets hygiene**: secrets live only in GitHub Actions secrets → `wrangler secret bulk` on deploy. Never in the repo. Dev uses git-ignored `.dev.vars`.

---

## 4. SEO & LLM discovery endpoints

All generated dynamically; content sources are the single point of truth — edit the source, not a committed artifact:

| Endpoint | Source | Output |
|----------|--------|--------|
| `/sitemap.xml` | `src/features/seo/seo.ts` (`PUBLIC_PATHS` × locales, hreflang alternates) + docs pages + afarer public paths (registry + products/news/technology/case-studies/guides) | XML; bilingual entries with hreflang, single-locale entries (no alternates) for the English-only afarer pages |
| `/robots.txt` | `src/features/seo/seo.ts` | disallow `/app`, `/admin`, `/*/admin`, `/api`; points to sitemap, llms, entity.json, rss.xml |
| `/llms.txt` | `src/features/docs/llm.ts` (docs index) + `src/features/site/llm.ts` (products + **solution pages** + afarer index) | Markdown index for LLMs |
| `/llms-full.txt` | same, concatenated plain Markdown | full corpus (catalog, solutions incl. FAQ, afarer pages/news/technology/case studies, geo facts) |
| `/entity.json` | `src/features/content/loader.ts` (`getGeoEntity`) | schema.org Organization — `@id`/`url` rewritten to this site's origin |
| `/rss.xml` | afarer news posts | RSS feed |
| `/docs-md/*` | `src/routes/docs-md/$.ts` | frontmatter-stripped Markdown per page |

Product catalog lives in `src/features/site/content.ts`; the 5 solution pages (with FAQ) in `src/features/site/solution-pages.ts`; the afarer corpus in `src/content/afarer/` (registry `site/pages.yaml` + 70 page YAMLs + 13 products + 19 news + 4 technology + 4 case studies + geo JSON). Keeping all of it in the LLM corpus means answer engines cite the actual offer — including prices and SKUs.

### 4.1 Solutions system and the legacy-landing 301s

The five `/solutions/*` pages (custom-sup, private-label-sup, resort-sup, club-sup, school-sup) are data-driven: `solution-pages.ts` (en/es) + the `solution-page.tsx` renderer + the `solution-route.tsx` route factory, mounted under the `solutions.tsx` layout with a hub at `solutions/index.tsx`. Every page shares one business logic — scenario → problems → solution → process → case study → FAQ — and ends in a **CTA temperature** (`cold` = Learn More, `warm` = Discuss Your Project, `hot` = Request Manufacturing Proposal): custom-sup is hot, private-label-sup and resort-sup warm, club-sup and school-sup cold.

The five legacy landing routes (`custom-sup-manufacturing`, `private-label-sup`, `sup-for-resorts`, `sup-for-clubs`, `sup-startup-brands`) are now stubs whose loaders throw `redirect({ href: localizePath(locale, target), statusCode: 301 })` (TanStack's `redirect` with `statusCode`, validated against the router-core 1.171 `RedirectOptions`). Rationale and mechanics:

- Old URLs keep their search equity: `sup-startup-brands` → `/solutions/custom-sup`, the other four map 1:1 to their new pages; es requests redirect to the `/es/...` equivalents via `localizePath`.
- The old paths were removed from `PUBLIC_PATHS`/sitemap and their data (`landings.ts`, `landing-page.tsx`) deleted — the solution pages are the single source of truth; `SHADOWED_PATHS` covers all five new paths so the afarer registry can never shadow them.

---

## 5. Dev/Ops

| Task | Command |
|------|---------|
| Dev server | `pnpm dev` |
| Tests | `pnpm test` (Vitest: `*.node.test.ts` = pure logic, `*.workers.test.ts` = D1/R2/KV via CF vitest pool) |
| Typecheck / lint / build | `pnpm typecheck` / `pnpm lint` / `pnpm build` |
| D1 migrations | `pnpm db:generate` → `pnpm db:migrate:local` (local); `db:migrate:prod` remote |
| Deploy prod | `pnpm deploy:prod` (builds with `CLOUDFLARE_ENV=production` + `wrangler deploy`) |
| CI | `ci.yml` (lint + typecheck + test + build); `deploy.yml` (deploys on push to `main`, then bulk-syncs GitHub secrets → Worker secrets) |

**Testing note:** the workers pool does NOT auto-apply migrations — create tables in `beforeAll` (see `features/auth/test-helpers.ts`).