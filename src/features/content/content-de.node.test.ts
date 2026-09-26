import { test, expect } from 'vitest'
import { existsSync, readdirSync } from 'node:fs'
import { resolve } from 'node:path'
import {
  getContentPage,
  getNewsPosts,
  getContentProducts,
  getTechArticles,
  getCaseUses,
  getResearchTopics,
  getSiteFaqs,
  getPublicPaths,
} from '@/features/content/loader'
import { pick, hero, products, series, faq, about, solve } from '@/product/content'
import { CUSTOMIZATION_OPTIONS, OEM_APPLICATIONS } from '@/product/ai-content'
import { knowledge, knowledgeMeta } from '@/product/knowledge'
import { projects, projectsMeta } from '@/product/projects'
import { seriesPages } from '@/product/series-pages'
import { solutionPages } from '@/product/solution-pages'
import { localizedGuides, GUIDE_CARDS } from '@/product/guide-content'
import { procurementProfiles } from '@/product/procurement'
import { FACTS_LOCALE } from '@/product/facts'
import { PRODUCT_FAQ_POOL } from './product-faq-pool'

const contentRoot = resolve(process.cwd(), 'src/content/site')

/** German markers: umlauts/ß or common German function words. */
const GERMAN_RE = /[äöüßÄÖÜ]|\b(an|am|im|zu|zur|zum|den|der|die|das|des|dem|ein|eine|einen|einer|einem|und|oder|aber|auch|nicht|mit|von|auf|für|über|unter|aus|wenn|als|bei|nach|ist|sind|wird|werden|haben|kann|können|muss|müssen|will|wollen|seine|seinem|ihre|ihren|ihr|dieser|dieses|diese|diesen|diesem|unsere|unser|ohne|aufblasbar|aufblasbare|aufblasbaren|Fertigung|Herstellung|Qualität|Gebrauch|Lesezeit|Produktentwicklung|Entwicklungsprojekte|Fallstudien|Konstruktion|Bodensystem|Einsteigertraining|Kleinserien|Kleinserie|Technologie|Technologien|Produktionslaufzeit|Lieferzeit|Mindestbestellmenge|Zahlungsbedingungen)\b/i

function isGerman(text: string): boolean {
  return GERMAN_RE.test(text)
}

function pageSlugToDeFile(slug: string): string {
  return resolve(contentRoot, `pages/${slug}.de.yaml`)
}

test('de pages load German content (not en fallback)', () => {
  const failures: string[] = []
  for (const path of getPublicPaths()) {
    const slug = path.split('/').filter(Boolean).pop() ?? ''
    if (!existsSync(pageSlugToDeFile(slug))) continue
    const en = getContentPage(path)
    const de = getContentPage(path, 'de')
    if (!de) { failures.push(`${path}: no de page`); continue }
    if (JSON.stringify(de.content) === JSON.stringify(en?.content ?? {})) {
      failures.push(`${path}: de content identical to en (fallback)`)
      continue
    }
    if (!isGerman(JSON.stringify({ ...de.meta, ...de.content }))) {
      failures.push(`${path}: de content has no German text`)
    }
  }
  expect(failures).toEqual([])
})

test('de news posts load German titles', () => {
  const en = getNewsPosts('en')
  const de = getNewsPosts('de')
  const failures: string[] = []
  for (const post of de) {
    const base = en.find((p) => p.slug === post.slug)
    if (!base || base.title === post.title) {
      failures.push(`${post.slug}: de title fell back to en`)
      continue
    }
    if (!isGerman(post.title)) failures.push(`${post.slug}: title not German`)
  }
  expect(failures).toEqual([])
})

test('de products load German copy', () => {
  const en = getContentProducts('en')
  const de = getContentProducts('de')
  const failures: string[] = []
  for (const p of de) {
    const base = en.find((x) => x.slug === p.slug)
    if (!base) { failures.push(`${p.slug}: missing in en`); continue }
    // Product titles are locale-invariant brand names; translate the body/summary.
    const sample = `${p.summary ?? ''} ${p.description ?? ''} ${p.body ?? ''}`
    if (sample.length === 0) { failures.push(`${p.slug}: no copy to check`); continue }
    if (!isGerman(sample)) failures.push(`${p.slug}: product copy not German`)
  }
  expect(failures).toEqual([])
})

test('de technology articles load German copy', () => {
  const en = getTechArticles('en')
  const de = getTechArticles('de')
  const failures: string[] = []
  for (const a of de) {
    const base = en.find((x) => x.slug === a.slug)
    if (!base || base.title === a.title) { failures.push(`${a.slug}: de title fell back to en`); continue }
    if (!isGerman(a.title)) failures.push(`${a.slug}: title not German`)
  }
  expect(failures).toEqual([])
})

test('de case-use articles load German copy', () => {
  const en = getCaseUses('en')
  const de = getCaseUses('de')
  const failures: string[] = []
  for (const c of de) {
    const base = en.find((x) => x.slug === c.slug)
    if (!base || base.title === c.title) { failures.push(`${c.slug}: de title fell back to en`); continue }
    if (!isGerman(c.title)) failures.push(`${c.slug}: title not German`)
  }
  expect(failures).toEqual([])
})

test('de research topics load German copy', () => {
  const en = getResearchTopics('en')
  const de = getResearchTopics('de')
  const failures: string[] = []
  for (const r of de) {
    const base = en.find((x) => x.slug === r.slug)
    if (!base || (base.category === r.category && base.readTime === r.readTime)) {
      failures.push(`${r.slug}: de overlay fell back to en`)
      continue
    }
    if (!isGerman(r.readTime)) failures.push(`${r.slug}: readTime not German (${r.readTime})`)
  }
  expect(failures).toEqual([])
})

test('de faqs load German questions', () => {
  const en = getSiteFaqs('en')
  const de = getSiteFaqs('de')
  if (en.length === 0 || de.length === 0) {
    expect(de.length).toBeGreaterThan(0)
    return
  }
  const failures: string[] = []
  for (let i = 0; i < Math.min(en.length, de.length); i++) {
    const enQ = en[i].q
    const deQ = de[i].q
    if (enQ === deQ) { failures.push(`faq #${i}: de question fell back to en`); continue }
    if (!isGerman(deQ)) failures.push(`faq #${i}: question not German`)
  }
  expect(failures).toEqual([])
})

test('every en content file has a .de counterpart (except locale-agnostic site/pages.yaml)', () => {
  const missing: string[] = []
  const dirs = ['pages', 'news', 'products', 'technology', 'case-use', 'site']
  for (const dir of dirs) {
    for (const name of readdirSync(resolve(contentRoot, dir))) {
      if (name.includes('.de.') || name.includes('.es.') || name.includes('.fr.') || name.includes('.it.') || name.includes('.pt.') || name.includes('.nl.') || name.includes('.sv.')) continue
      if (dir === 'site' && name === 'pages.yaml') continue
      const deName = name.replace(/(\.(yaml|mdx|md))$/, '.de$1')
      if (!existsSync(resolve(contentRoot, `${dir}/${deName}`))) {
        missing.push(`${dir}/${name}`)
      }
    }
  }
  expect(missing).toEqual([])
})

/* ─────────────────────── TS data layer (Part B) ─────────────────────── */

function assertGerman(failures: string[], label: string, sample: string) {
  if (!isGerman(sample)) failures.push(`${label}: not German (${sample.slice(0, 60)})`)
}

test('de knowledge articles are German with en slug parity', () => {
  const en = knowledge.en
  const de = pick(knowledge, 'de')
  const failures: string[] = []
  expect(knowledge.de).toBeDefined()
  for (const a of en) {
    const f = de.find((x) => x.slug === a.slug)
    if (!f) { failures.push(`${a.slug}: missing in de`); continue }
    assertGerman(
      failures,
      `${a.slug}.h1`,
      `${f.h1} ${f.intro} ${f.sections.map((x) => `${x.title} ${x.body.join(' ')}`).join(' ')}`,
    )
  }
  expect(failures).toEqual([])
  expect(knowledgeMeta.de.metaTitle).toBeDefined()
  assertGerman(failures, 'knowledgeMeta.metaTitle', knowledgeMeta.de.metaTitle)
  expect(failures).toEqual([])
})

test('de projects are German with en slug parity and invariant assets', () => {
  const en = projects.en
  const de = pick(projects, 'de')
  const failures: string[] = []
  expect(de.length).toBe(en.length)
  for (const p of en) {
    const f = de.find((x) => x.slug === p.slug)
    if (!f) { failures.push(`${p.slug}: missing in de`); continue }
    assertGerman(
      failures,
      `${p.slug}.content`,
      `${f.h1} ${f.intro.join(' ')} ${f.process.map((x) => x.title).join(' ')} ${f.customizations.join(' ')} ${f.inspectionFocus.join(' ')} ${f.outcome}`,
    )
  }
  expect(failures).toEqual([])
  expect(projectsMeta.de.metaTitle).toBeDefined()
  assertGerman(failures, 'projectsMeta.metaTitle', projectsMeta.de.metaTitle)
  expect(failures).toEqual([])
})

test('de series landing pages are German with en slug parity', () => {
  const en = seriesPages.en
  const de = pick(seriesPages, 'de')
  const failures: string[] = []
  expect(de.length).toBe(en.length)
  for (const s of en) {
    const f = de.find((x) => x.slug === s.slug)
    if (!f) { failures.push(`${s.slug}: missing in de`); continue }
    assertGerman(failures, `${s.slug}.h1`, `${f.h1} ${f.intro}`)
  }
  expect(failures).toEqual([])
})

test('de solution pages are German with en slug parity', () => {
  const en = solutionPages.en
  const de = pick(solutionPages, 'de')
  const failures: string[] = []
  expect(de.length).toBe(en.length)
  for (const s of en) {
    const f = de.find((x) => x.slug === s.slug)
    if (!f) { failures.push(`${s.slug}: missing in de`); continue }
    assertGerman(failures, `${s.slug}.h1`, `${f.h1} ${f.intro}`)
  }
  expect(failures).toEqual([])
})

test('de guides are German with en slug parity', () => {
  const en = localizedGuides('en')
  const de = localizedGuides('de')
  const failures: string[] = []
  expect(de.length).toBe(en.length)
  for (const g of en) {
    const f = de.find((x) => x.slug === g.slug)
    if (!f) { failures.push(`${g.slug}: missing in de`); continue }
    assertGerman(failures, `${g.slug}.intro`, `${f.title} ${f.intro}`)
  }
  expect(failures).toEqual([])
  const cards = GUIDE_CARDS.de
  expect(cards.length).toBe(GUIDE_CARDS.en.length)
})

test('de home & catalog content is German', () => {
  const failures: string[] = []
  assertGerman(failures, 'hero.title', `${pick(hero, 'de').titlePre} ${pick(hero, 'de').titleAccent} ${pick(hero, 'de').sub}`)
  assertGerman(failures, 'products.tagline', pick(products, 'de').title)
  const deItems = pick(products, 'de').items
  const enItems = products.en.items
  expect(deItems.length).toBe(enItems.length)
  for (const item of enItems) {
    const f = deItems.find((x) => x.slug === item.slug)
    if (!f) { failures.push(`${item.slug}: missing in de products`); continue }
    assertGerman(failures, `${item.slug}.desc`, `${f.tagline} ${f.desc} ${f.uses.join(' ')} ${f.for.join(' ')}`)
  }
  assertGerman(failures, 'series.title', `${pick(series, 'de').title} ${pick(series, 'de').items[0].title}`)
  assertGerman(failures, 'about.story', pick(about, 'de').story.join(' '))
  assertGerman(failures, 'solve.title', `${pick(solve, 'de').title} ${pick(solve, 'de').items[0].title}`)
  assertGerman(failures, 'faq', `${pick(faq, 'de').title} ${pick(faq, 'de').items[0].q}`)
  expect(failures).toEqual([])
})

test('de procurement profiles are German with en key parity', () => {
  const en = procurementProfiles.en
  const de = procurementProfiles.de
  const failures: string[] = []
  expect(Object.keys(de).sort()).toEqual(Object.keys(en).sort())
  for (const slug of Object.keys(en)) {
    const f = de[slug]
    if (!f) { failures.push(`${slug}: missing in de`); continue }
    assertGerman(failures, `${slug}.bestFor`, `${f.bestFor} ${f.customization ?? ''}`)
  }
  expect(failures).toEqual([])
})

test('de procurement MOQ/lead-time rows embed German facts (no English fragments)', () => {
  const failures: string[] = []
  for (const [slug, f] of Object.entries(procurementProfiles.de)) {
    assertGerman(failures, `${slug}.moq`, f.moq)
    assertGerman(failures, `${slug}.leadTime`, f.leadTime)
    expect(f.moq + f.leadTime).not.toMatch(/[¿¡ñáéíóú]/i)
  }
  expect(failures).toEqual([])
})

test('localized facts (FACTS_LOCALE) provide German shorthands for all locales', () => {
  const locales = Object.keys(FACTS_LOCALE).sort() as (keyof typeof FACTS_LOCALE)[]
  expect(locales).toEqual(['de', 'en', 'es', 'fr', 'it', 'nl', 'pt', 'sv'])
  const enKeys = Object.keys(FACTS_LOCALE.en)
  for (const l of locales) {
    expect(Object.keys(FACTS_LOCALE[l]).sort()).toEqual([...enKeys].sort())
    expect(Object.keys(FACTS_LOCALE[l].moq).sort()).toEqual(Object.keys(FACTS_LOCALE.en.moq).sort())
  }
  const deAll = Object.values(FACTS_LOCALE.de).flat().join(' ') + Object.values(FACTS_LOCALE.de.moq).join(' ')
  expect(deAll).toMatch(/Stück|Tage/)
  expect(deAll.toLowerCase()).not.toMatch(/\bpcs\b|\bdays\b|\bper\b|\border\b/)
  expect(deAll).not.toMatch(/[¿¡ñáéíóú]/i)
})

test('de product-page customization & OEM application sections are German', () => {
  expect(CUSTOMIZATION_OPTIONS.de).toBeDefined()
  expect(OEM_APPLICATIONS.de).toBeDefined()
  expect(CUSTOMIZATION_OPTIONS.de.length).toBe(CUSTOMIZATION_OPTIONS.en.length)
  expect(OEM_APPLICATIONS.de.length).toBe(OEM_APPLICATIONS.en.length)
  const failures: string[] = []
  for (let i = 0; i < CUSTOMIZATION_OPTIONS.en.length; i++) {
    assertGerman(failures, `customization #${i}`, CUSTOMIZATION_OPTIONS.de[i].title + ' ' + CUSTOMIZATION_OPTIONS.de[i].body)
  }
  for (let i = 0; i < OEM_APPLICATIONS.en.length; i++) {
    assertGerman(failures, `oem-application #${i}`, OEM_APPLICATIONS.de[i].title + ' ' + OEM_APPLICATIONS.de[i].body)
  }
  expect(failures).toEqual([])
})

test('de product FAQ pool is German (not Spanish/en fallback)', () => {
  expect(PRODUCT_FAQ_POOL.de.length).toBe(PRODUCT_FAQ_POOL.en.length)
  const failures: string[] = []
  for (let i = 0; i < PRODUCT_FAQ_POOL.en.length; i++) {
    const qa = `${PRODUCT_FAQ_POOL.de[i].q} ${PRODUCT_FAQ_POOL.de[i].a}`
    assertGerman(failures, `faq #${i}`, qa)
    expect(qa).not.toMatch(/[¿¡ñáéíóú]/i)
    expect(PRODUCT_FAQ_POOL.de[i].q).not.toBe(PRODUCT_FAQ_POOL.en[i].q)
  }
  expect(failures).toEqual([])
})