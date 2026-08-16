# Changelog

All notable changes to this project are documented here.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project aims to follow [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added

- **Site search** — three surfaces over one index: a header search dialog fed by
  `/search-index.json` (full public index, edge-cached 1h), a `/search` page with
  Orama full-text search, and `/api/search` for the docs area. Covers solution
  pages, knowledge hub, projects, product series, afarer products/news/technology/
  case-studies/guides, FAQ and the six hub/landing pages (home, `/products`,
  `/solutions`, `/projects`, `/knowledge`, `/gallery`) in en+es.
- **Edge URL gate** (`src/features/seo/edge-gate.ts`) — 301 merges of duplicate/
  legacy URLs, 410 for removed template pages, trailing-slash normalisation and
  retired-locale `/zh/*` → `/es` redirects, applied before any route runs.
- **Edge cache policy** (`src/lib/cache-headers.ts`) — marketing HTML cached 1h,
  hashed assets 1y immutable, images/fonts 7d, crawler files 1h, via the Cache API
  plus an hourly edge-cache warmer in the cron handler.
- **Real legal pages** — terms of service and privacy policy (en/es), indexed in
  the sitemaps.
- **Quality content ecosystem** — 7-stage QC flow with buyer-verifiable checks,
  anonymized quality-record samples, non-conforming product control (ISO 9001
  Clause 8.7), rework parameter change control, factory floor photo evidence
  (en+es, bilingual PDFs, JSON-LD).
- **MOQ pricing, co-branding and rental guide articles** (en+es) linked from
  `llms.txt`; project snapshot cards on case-study pages.
- **`cf-inspect` workflow** — manual Cloudflare diagnostics that dumps zone cache
  settings, rulesets and purge results to `cf-inspect.log` in the repo.

### Changed

- **Inquiry uploads broadened** — the form's single attachment is now a general
  project file (references, artwork, specs, CAD or ZIP) instead of images only:
  PNG/JPG/SVG/WebP/PDF/AI/PSD/DWG/DXF/ZIP up to 10 MB, gated by an extension
  whitelist shared between form and server plus per-format magic-number
  sniffing (SVG must contain a real `<svg>` element). R2 keys moved to
  `inquiry-files/{id}.{ext}` (one object per inquiry, old uploads — including
  legacy `inquiry-logos/` keys — cleared on re-submit); form errors now name
  the exact problem (empty / unsupported type / too large), admin mail and
  tables show the file type, downloads carry real filenames
  (`Content-Disposition`: images inline, the rest force-downloaded), and the
  CSV export column is `file`. Legacy `inquiry-logos/` keys stay readable for
  admins. The admin detail view renders images inline and offers a download
  link for the rest.
- **AEO/GEO surfaces brought current** — `entity.json` now serves a
  SUPsfactory-specific `description` (plant scale, MOQ tiers, lead times) and a
  `subjectOf` graph covering the factory evidence, factory, quality, MOQ/lead-time
  and trial-order pages; page titles added for the new registry pages in
  `/llms.txt`; `llms.txt` company card links the entity hub and documents the
  inquiry form's project-file upload; the entity hub's fact card shows the
  current tiered MOQ (1–2 samples / 20–50 trial / 90–100+ volume) en+es.
- **SEO meta spec enforced** — news titles/excerpts, product meta (26 files) and
  YAML page meta (34 files) trimmed to `title ≤ 70` / `description 80–170` chars,
  bilingual; sitemap `lastmod` derived from page meta.
- **Documentation refreshed** — `README.md` and `TECH.md` rewritten to the current
  architecture (search, edge cache, URL gate, security hardening, CI/CD).
- **Removed 22 dead YAML files** never read by the content loader (smaller worker
  bundle); removed fabricated quotes, unverified certifications and invented
  metrics from content.

### Fixed

- **Private-page caching** — `/app`, `/admin`, `/api` and auth pages forced
  `Cache-Control: private, no-store` + `Vary: Cookie` on every method, so a CDN
  misconfiguration can never serve one user's session page to another (root cause
  was a stale edge-cache entry that the deploy pipeline's purge now clears).
- **Search index gaps** — six live hub/landing pages missing from the index are
  now included (en+es).
- **Upload hardening** — magic-number sniffing on avatar and inquiry-logo uploads
  (MIME allow-list no longer the only gate); avatars served with a sandboxed CSP.
- **`/api/search` CPU DoS** — Orama index rebuilt per request is now a lazy
  module-level singleton, plus per-IP rate limiting (60/min, fail-open).
- **ES news mojibake** — repaired in source files and BOMs stripped.

### Security

- **Dependency upgrades** — vite 8.2.1, @cloudflare/vite-plugin 1.52.1, wrangler
  4.123.0, fumadocs-core 16.14.4, @typescript-eslint/parser 8.67.0; `pnpm.overrides`
  pin undici, brace-expansion and js-yaml advisory fixes. `pnpm audit` 30 → 2
  remaining findings, both dev-only (miniflare → sharp, upstream fix pending).
- **Deploy pipeline** — CDN cache purge after every release (token now carries
  `Zone → Cache Purge`), edge-cache warming and afarer image backfill steps.

## [1.1.0] — 2026-06-24

### Added

- **Storage** — Cloudflare R2 wired end-to-end with a working avatar upload
  (validated upload + private serving route). Zero-config locally via miniflare.
- **Security headers** — baseline headers on every response, plus a production
  Content-Security-Policy.
- **Environment validation** — fail-fast zod schema validates required env on
  startup; conditional rules for OAuth/Turnstile pairs.

### Fixed

- Styled 500 error boundary so uncaught render errors no longer blank the screen.

## [1.0.0] — 2026-06-01

### Added

- Email/password auth with verification, social login (graceful degradation), and
  sessions on D1.
- Path-based i18n (en/es), per-locale SEO, and a real-data admin console.

[Unreleased]: https://github.com/supsfactory/web/compare/v1.1.0...main
[1.1.0]: https://github.com/supsfactory/web/releases/tag/v1.1.0
[1.0.0]: https://github.com/supsfactory/web/releases/tag/v1.0.0
