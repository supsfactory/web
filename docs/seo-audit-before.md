# SEO / GEO / AEO Audit — Before

Date: 2026-09-23
Scope: supsfactory.com — SUP OEM/ODM manufacturer positioning per the "0923优化" implementation spec.

## 1. Architecture summary

- TanStack Start + Cloudflare Workers; 5-layer separation (Product / Config / Foundation / Platform / Infra).
- Content system: page YAML (`src/content/site/pages/*.yaml`, en + es + fr), MDX products/news, MD `technology/` / `case-use/`.
- Dedicated routes: `src/routes/*.tsx` stubs using `contentSingleRoute(path)` (loader + head, body rendered by catch-all).
- SEO head: `localeHead()` for locale-suffixed pages; `contentSingleRoute().head` for single-segment content; YAML `meta:` block (title/description/keywords/dateModified) is the metadata source.
- Sitemap: `PUBLIC_PATHS` inventory in `src/features/seo/seo.ts`; split files (`sitemap.xml`, pages/products/news/es) + `robots.txt` with explicit AI-agent rules.
- GEO: `src/product/geo/{entity,company-facts,manufacturing-facts,certification-facts}.json`; `llms.txt` / `llms-full.txt` generated in `src/routes/llms[.]txt.ts` / `llms-full[.]txt.ts` from `src/features/site/llm.ts` + `src/product/llms-content.ts`.
- Factory facts: centralized in `src/product/facts.ts` (12,500 m² · 350+ · 120,000+/yr · 50+ export countries · 7–12 day samples · 25–35 day lead time). Consistent across product/site-config/geo/llms (verified — no 12,000 vs 12,500 or 200 vs 350 drift).

## 2. Brand contamination ("afarer")

`case-insensitive "afarer" scan of src/public/scripts/docs/llms.md/sitemap.md → 261 match lines across 137 files.`

Every match falls into one of three non-public categories:

1. Code comments describing the ported prior codebase (e.g. `features/site/llm.ts`, `features/ai/corpus.ts`, `features/content/*`, `sitemap-*.xml.ts`, `rss.xml.ts`).
2. R2 asset URLs (`https://assets.supsfactory.com/images/sups/**/afarer-*.webp`) referenced from page YAML / product MDX / `asset-map.ts` / `brand-constants.ts`. R2 object names are not renameable without asset ops ("where practical" exemption).
3. Legacy 301 source paths (`navigation.ts` LEGACY_REDIRECTS, `edge-redirects.ts`) that must keep serving inbound equity.

Zero public rendered text, metadata, headings, alt text, JSON-LD, footer or generated llms output contains "Afarer". Product dictionaries / UI dictionaries are clean.

Action: add an automated brand-contamination test (Phase 9) that fails on public-facing surfaces (rendered strings, meta, JSON-LD, llms output, sitemap) while scoping out the three acceptable categories above.

## 3. URL inventory — exists vs required

| Required (spec) | Exists | Notes |
|---|---|---|
| `/` | ✅ | order needs restructure |
| `/oem-manufacturing/` | ✅ | YAML title already matches spec |
| `/odm-manufacturing/` | ⚠️ | current route is `/odm-development` (same content) |
| `/product-development/` | ✅ | exists |
| `/manufacturing-capabilities/` | ❌ | create |
| `/factory/` | ✅ | exists |
| `/factory/process/` | ✅ | exists |
| `/factory/capacity/` | ✅ | exists |
| `/verify-factory/` | ❌ | create |
| `/quality/` | ✅ | exists |
| `/quality/evidence/` | ⚠️ | Proof Center (`/proof-center`) exists — reuse/alias |
| `/products/` | ✅ | exists |
| `/projects/` | ✅ | exists |
| `/knowledge/` | ✅ | exists |
| `/faq/` | ✅ | exists |
| `/contact/` | ✅ | exists |

Other live single-segment routes: about/identity, b2b-solutions-matrix, factory-audit-checklist, inflatable-sup-certification, inflatable-vs-hardboard, knowledge, new-brand-trial-order, news, oem-moq-guide, oem-odm, oem-odm-private-label-comparison, oem-onboarding-guide, oem-paddle, oem-sup-moq, oem-trust-assurance, partners, proof-center, randdcenter, size-guide, start-sup-project, sup-compliance-by-market, sup-construction-comparison, sup-oem-moq-lead-time, technology, tourism-recreation, warranty, what-is-sup, fishing, faq + `{-$locale}/` group (solutions, products, projects, knowledge, contact, about, gallery, customizer, how-it-works, who-we-serve, private-label-sup, custom-sup-*, sup-for-*, waitlist, terms, privacy, auth, admin, app).

## 4. Metadata inventory

- Home SEO title (en): `Custom Inflatable SUP Manufacturing | OEM/ODM for Brands & Distributors` → target: `Inflatable SUP Manufacturer & OEM/ODM Factory | SUPsfactory`.
- Home H1 (en, hero.titlePre+Accent): `Custom SUP Product Manufacturing for Brands, Distributors & Organizations` → target: `Inflatable SUP Manufacturer & OEM/ODM Factory`.
- Every indexable page has unique title/description (YAML meta). Canonical + hreflang + OG + Twitter emitted by `localeHead`/`contentSingleRoute`.
- Breadcrumb + FAQ JSON-LD on homepage; product JSON-LD per product; Organization JSON-LD at `/entity.json`.
- Existing process page (`/factory/process`) preserves IQC/IPQC/FAI/pressure/FQC/PSI/traceability language — matches spec §16.
- Quality page (`/quality`) carries 100% pressure testing, 24h hold, 18.0 PSI, AQL 2.5, 100-point FAI, traceability — matches spec §17.

## 5. Homepage current order → target order

Current: Hero → BoardCategories (product platforms) → CollaborationSelector (OEM/ODM/PrivateLabel) → WhoWeServe → CommercialTerms → PlantCapability (factory) → QualitySteps → HowItWorks (process) → ProjectsShowcase → FAQ → CTA.

Target (spec §5): 1 Hero → 2 Factory proof → 3 OEM/ODM/Private Label → 4 Product development → 5 Manufacturing capabilities → 6 Quality control → 7 Product platforms → 8 Case studies → 9 Factory evidence → 10 FAQ → 11 Final CTA.

Delta: move factory proof above product platforms; insert product-development + manufacturing-capabilities signals before QualitySteps; platforms pushed down; factory evidence surfaced.

## 6. Gaps & action plan

1. **Brand contamination test** — automated guard (spec §53).
2. **New pages** — `/manufacturing-capabilities`, `/verify-factory`, `/quality/evidence` (alias to Proof Center), `/odm-manufacturing` canonical (alias or redirect from `/odm-development`). Add YAML pages + EXTRA_PATHS + route stubs + PUBLIC_PATHS + nav/footer links + search-index coverage.
3. **Homepage restructure** — new hero copy/H1/CTAs (OEM Quote, Develop Your SUP Product, Explore Our Factory) + factory-proof band + reorder sections.
4. **SEO titles/descriptions** — align home + remaining pages to §28/§29 guidance; add `ogTitle/ogDescription/ogImage`-style completeness where cheap via existing model.
5. **Redirects** — preserve existing edge-redirect architecture; add only mappings that match real routes (e.g. `/odm-development` → `/odm-manufacturing` if canonicalized).
6. **GEO/AEO** — verify entity.json/llms content wording ("SUP OEM and ODM Manufacturer in Qingdao, China"), FAQ answer-first blocks, centralized facts consumption (already strong).
7. **RFQ form** — review `/contact` + inquiry schema for B2B fields (project type, qty, existing design, upload).
8. **Image SEO** — audit manufacturing images for descriptive alt (asset URLs already filename-rich).
9. **Verification** — build/typecheck/test + drive-through of new routes + llms/sitemap/search-index regeneration.