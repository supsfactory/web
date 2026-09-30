# Arabic (MSA) Localization — Translator Guide (iSupfactory)

Translate the **21 remaining content blocks** in `src/product/content.ts` into
Modern Standard Arabic. 15 blocks are already done and shipped — this guide
covers the remainder.

## Audience and register

- **Readers:** B2B buyers — distributors, importers, promotional-product
  buyers and resort operators in Saudi Arabia and the wider Gulf.
- **Register:** Modern Standard Arabic. Formal, documentary, professional.
  Do **not** use colloquial Gulf dialect.
- **Tone:** factual and evidence-led. The English source is deliberately
  understated ("we are a real factory", "documents you can verify"). Preserve
  that restraint. Do not amplify claims, and do not invent superlatives.
- Decisions already made in the shipped copy — follow them:
  - Verb forms are imperative/plural polite: `احصل على` (get), `اطلب عرض سعر`
    (request a quote), `ابدأ` (start). Avoid blunt `خذ` / `اشترِ`.
  - Latin digits are acceptable and are what the existing Arabic copy uses.
    Do not convert to Arabic-Indic digits — inconsistency is worse than either
    choice.

## Hard rules

1. **English is the only source.** Do not translate from the `es`, `fr`, or
   `zh` siblings. They are secondary files and may themselves be imperfect.
2. **Never change structure.** Identical keys, identical key order, identical
   nesting, identical array lengths, identical item order.
3. **Never change technical values:**
   - `image` / `href` / `sku` / `id` / `slug` — copy byte-for-byte.
   - URLs, `assets.isupfactory.com` paths, emails, phone numbers.
   - ISO dates, `CE`, `REACH`, `RoHS`, `ISO 9001`, `SGS`, `BSCI`.
   - Dimensions and pressure: `11'6" × 22" × 6"`, `15 PSI`, `6 inch`,
     `12,500 m²`. You may render `inch` as `بوصة` but never alter the number.
4. **Interpolations must match character-for-character:**
   - `{...}` — e.g. `{email}`
   - `${...}` — e.g. `${years} years of experience`
   Count them in the English value and confirm your Arabic has the same set.
5. **Do not translate inside `FACITS.*`.** Those are shared constants
   (`FACTS.moqNote`, `FACTS.heroProof`, `FACTS.defectNote`, …). Leave the
   property names alone. If a value *feels* like it needs translating, it
   already has an Arabic sibling — use that.
6. **No leading whitespace** inside any string. `' نص'` is a defect; `'نص'`
   is correct. This one is **not machine-checked** — dictionary fragments
   legitimately carry trailing spaces because they are composed at runtime, so
   an automated check cannot tell a stray space from a fragment boundary. Your
   eye is the only check here.
7. **UTF-8, real Arabic characters, no HTML entities, no BOM, final newline.**

## Do not translate (leave in Latin)

| Category | Examples |
|---|---|
| Company / brand | iSupfactory, Vatrad, Qingdao Vatrad Group Co., Ltd. |
| Product & series names | Cheetah Surge, Leviathan Wake, Medusa Glow, Coastal Rleet, Raptor Cruiser, Viper Glide |
| Technical abbreviations | SUP, OEM, ODM, MOQ, SKU, PSI, EVA, TPU, PVC, RF, CAD, HS Code, QC, AQL, L/C, T/T, FOB, CIF, EXW |
| Established industry terms | drop-stitch, drop stitch, Private Label, one-piece, one-stop, in-house, MLO, Shipment, Turnkey |
| Certifications | SGS, BSCI, FDA, UL, ISO |
| Contact details | https://…, info@isupfactory.com, +86… |

## Terminology — ground truth from the 15 shipped blocks

These forms are **already live** on the site. Reuse them exactly so the site
reads as one voice. Do not introduce synonyms for words listed here.

| English | Arabic (use as-is) |
|---|---|
| factory | مصنع |
| our factory | مصنعنا |
| manufacturing / manufacturing process | تصنيع / عملية التصنيع |
| production | إنتاج / الإنتاج |
| product development | تطوير المنتج |
| board | لوح / ألواح |
| inflatable | قابل للنفخ |
| product / products | المنتج / المنتجات |
| quality | الجودة |
| quality control | ضبط الجودة |
| order | الطلب |
| minimum order / MOQ | الحد الأدنى للطلب |
| lead time | مدة التوريد / التوريد |
| sample | عيّنة |
| export / exporting | التصدير |
| distributor | موزّع |
| private label | علامتك التجارية / علامة تجارية خاصة |
| China | الصين |

Terms **not** yet settled — pick one and use it consistently:

| English | Suggested Arabic |
|---|---|
| warranty | ضمان |
| retailer | بائع تجزئة |
| rental operator | شركة تأجير |
| customization | تخصيص |
| trial order | طلب تجريبي |
| mass production | إنتاج واسع النطاق |
| prototype | نموذج أولي |
| compliance | الامتثال |
| proof / evidence | دليل / مستند |
| mould / moulding | قالب / التشكيل بالقوالب |
| non-conforming product | منتج غير مطابق |

## Scope: `content.ts` only — do NOT create `.ar.yaml` sidecars

Your 21 blocks live in `src/product/content.ts`. That is the whole job.

**Do not** add `*.ar.yaml` / `*.ar.mdx` / `*.ar.md` files under
`src/content/site/`. The long-form corpus is 111 files per locale — a separate,
much larger scope. Adding a few `.ar.` files without wiring the loader would
switch on routing for a locale that has almost no corpus.

If `.ar.` sidecars are commissioned later, four integration points must change
first. All four are already in place for 16 other locales but not yet for `ar`:

| File | What is missing |
|------|-----------------|
| `src/features/content/loader.ts` | six `import.meta.glob` maps (`site`, `pages`, `news`, `products`, `technology`, `case-use`), each listing 16 locales with no `ar` entry |
| `src/routes/sitemap-pages[.]xml.ts` | the `ar` hreflang flag, next to the per-locale `getLocalePaths('<loc>')` booleans |
| `src/features/content/product-faq-pool.ts` | `ar` in the `Record<...>` union, plus four translated Q&A pairs |
| `src/features/site/llm.ts` | the Arabic index and full-text entries |

Until then `/ar` deliberately serves English for corpus pages, and the Arabic
sitemap lists only genuinely-Arabic URLs. That is intended — do not "fix" it
by widening the sitemap.

## Where to put the code

Insert each new `ar:` object **immediately after the `en:` block** and
**before `es:`**, matching the ordering used in the 15 completed blocks:

```ts
export const someBlock: Localized<SomeContent> = {
  en: { /* ... */ },
  ar: { /* your translation */ },
  es: { /* ... */ },
```

## Validation — run after every block

```bash
pnpm check:mixed-script      # rejects Cyrillic/CJK and stray Latin in Arabic
pnpm check:locale-parity     # rejects key / array-length / placeholder drift
pnpm check:locale-coverage   # confirms each block now reports as localized
```

`check:locale-parity` is the mechanical half of hard rules 2 and 4. It parses
`content.ts` with the TypeScript compiler and compares every `ar` object
against its `en` original: property names **in order** at every depth, array
lengths, and the exact set of `{placeholder}` and `${VAR}` tokens. A dropped
array item, a renamed key or a lost placeholder fails the build:

```
factoryEvidence: shape mismatch (en 5 top-level props, arrays [3] |
                 ar 5 top-level props, arrays [2])
```

It says nothing about whether the Arabic reads well. A block can pass all three
checks and still be awkward — see the register notes above.

`check-mixed-script` scans **`src/` only** — it will not inspect anything you
write in `tools/`. Keep your scratch work outside the repo, and keep the
Arabic inside `content.ts` where the checks can see it.

When all 21 are done:

```bash
pnpm typecheck && pnpm lint && pnpm test && pnpm build
```

Expected: `614 passed` (or higher). If the count is unchanged, you likely
missed a block — re-run `pnpm check:locale-coverage` and confirm it prints
`36/36`.

## The 21 blocks

| # | Export | Line | English lines / locale |
|---|--------|------|------------------------|
| 1 | `manufacturerPledge` | 507 | 206 |
| 2 | `factoryEvidence` | 1075 | 189 |
| 3 | `solve` | 2041 | 422 |
| 4 | `capability` | 2478 | 529 |
| 5 | `quality` | 3022 | 529 |
| 6 | `commercial` | 3575 | 1,092 |
| 7 | `serve` | 4686 | 665 |
| 8 | `solutions` | 5367 | 461 |
| 9 | `studio` | 5844 | 478 |
| 10 | `productFilters` | 6352 | 240 |
| 11 | `products` | 6593 | 3,691 |
| 12 | `videoShowcase` | 10299 | 430 |
| 13 | `works` | 10745 | 614 |
| 14 | `boardCategories` | 11378 | 291 |
| 15 | `platforms` | 11687 | 597 |
| 16 | `gallery` | 12302 | 478 |
| 17 | `guides` | 12796 | 376 |
| 18 | `manufacturingGuides` | 13175 | 631 |
| 19 | `faq` | 13821 | 1,141 |
| 20 | `homeFaq` | 14963 | 393 |
| 21 | `about` | 16379 | 695 |

Line numbers are as of commit `80f71c7` and will shift as you insert blocks.
`pnpm check:locale-coverage` reprints the current position of everything.

**Suggested order** — cheapest risk first, so the big blocks get maximum
remaining attention:

1. `manufacturerPledge`, `factoryEvidence`, `productFilters`, `boardCategories`
2. `solve`, `solutions`, `studio`, `gallery`, `videoShowcase`, `platforms`
3. `capability`, `quality`, `serve`, `works`, `manufacturingGuides`, `guides`
4. `commercial`, `about`, `homeFaq`, `faq`
5. `products` — **split this last block into 3–4 sub-batches.** At 3,691
   English lines it is larger than all of #1–#4 combined; a single pass will
   drift structurally. Verify the array lengths after each sub-batch.

## Self-review before you hand back

Per block:

- [ ] Keys identical to `en`, same order
- [ ] Array lengths identical — recount items
- [ ] Every `{...}` and `${...}` present, identical spelling
- [ ] Brand / model names / abbreviations untouched
- [ ] Numbers unaltered (no double-counting, no reformatting)
- [ ] No leading space in any string
- [ ] `pnpm check:mixed-script` clean
- [ ] `pnpm check:locale-parity` clean
- [ ] Terminology matches the "ground truth" table above

Whole set:

- [ ] `pnpm check:locale-coverage` prints `36/36 blocks localized (100%)`
- [ ] `pnpm typecheck && pnpm lint && pnpm test && pnpm build` all pass
- [ ] Spot-read the Arabic aloud — it should sound like a Gulf corporate
      brochure, not a translation
