import { test, expect } from 'vitest'
import { existsSync, readdirSync, readFileSync } from 'node:fs'
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

/** Dutch markers: common function words and domain tokens (accents are rare in Dutch). */
const DUTCH_RE = /\b(de|het|een|en|voor|met|niet|zijn|zijn|wordt|worden|kunnen|hebben|heeft|onze|deze|maar|ook|nog|naar|uit|kan|zal|op|van|bij|je|jouw|elke|wat|waar|wie|hoe|biedt|welke|jullie|zonder|over|gids|gidsen|klant|klanten|bestelling|bestellingen|levertijd|fabriek|monster|monsters|offerte|offertes|prijs|prijzen|verzending|levering|levertijd|garantie|verpakking|kwaliteitscontrole|kwaliteitscontroles|opblaasbaar|opblaasbare|bedrijf|productie|dagen|stuks|merk|merken|gebruik|gebruiken|peddel|peddels|pomp|pompen|kajak|catalogus|leverancier|koper|winkel|winkels|minuten)\b/i

function isDutch(text: string): boolean {
  return DUTCH_RE.test(text)
}

function pageSlugToNlFile(slug: string): string {
  return resolve(contentRoot, `pages/${slug}.nl.yaml`)
}

test('nl pages load Dutch content (not en fallback)', () => {
  const failures: string[] = []
  for (const path of getPublicPaths()) {
    const slug = path.split('/').filter(Boolean).pop() ?? ''
    if (!existsSync(pageSlugToNlFile(slug))) continue
    const en = getContentPage(path)
    const nl = getContentPage(path, 'nl')
    if (!nl) { failures.push(`${path}: no nl page`); continue }
    if (JSON.stringify(nl.content) === JSON.stringify(en?.content ?? {})) {
      failures.push(`${path}: nl content identical to en (fallback)`)
      continue
    }
    if (!isDutch(JSON.stringify({ ...nl.meta, ...nl.content }))) {
      failures.push(`${path}: nl content has no Dutch text`)
    }
  }
  expect(failures).toEqual([])
})

test('nl news posts load Dutch titles', () => {
  const en = getNewsPosts('en')
  const nl = getNewsPosts('nl')
  const failures: string[] = []
  for (const post of nl) {
    const base = en.find((p) => p.slug === post.slug)
    if (!base || base.title === post.title) {
      failures.push(`${post.slug}: nl title fell back to en`)
      continue
    }
    if (!isDutch(post.title)) failures.push(`${post.slug}: title not Dutch`)
  }
  expect(failures).toEqual([])
})

test('nl products load Dutch copy', () => {
  const en = getContentProducts('en')
  const nl = getContentProducts('nl')
  const failures: string[] = []
  for (const p of nl) {
    const base = en.find((x) => x.slug === p.slug)
    if (!base) { failures.push(`${p.slug}: missing in en`); continue }
    // Product titles are locale-invariant brand names; translate the body/summary.
    const sample = `${p.summary ?? ''} ${p.description ?? ''} ${p.body ?? ''}`
    if (sample.length === 0) { failures.push(`${p.slug}: no copy to check`); continue }
    if (!isDutch(sample)) failures.push(`${p.slug}: product copy not Dutch`)
  }
  expect(failures).toEqual([])
})

test('nl technology articles load Dutch copy', () => {
  const en = getTechArticles('en')
  const nl = getTechArticles('nl')
  const failures: string[] = []
  for (const a of nl) {
    const base = en.find((x) => x.slug === a.slug)
    if (!base || base.title === a.title) { failures.push(`${a.slug}: nl title fell back to en`); continue }
    const sample = `${a.title} ${a.summary ?? ''} ${a.body ?? ''}`
    if (!isDutch(sample)) failures.push(`${a.slug}: title not Dutch`)
  }
  expect(failures).toEqual([])
})

test('nl case-use articles load Dutch copy', () => {
  const en = getCaseUses('en')
  const nl = getCaseUses('nl')
  const failures: string[] = []
  for (const c of nl) {
    const base = en.find((x) => x.slug === c.slug)
    if (!base || base.title === c.title) { failures.push(`${c.slug}: nl title fell back to en`); continue }
    if (!isDutch(c.title)) failures.push(`${c.slug}: title not Dutch`)
  }
  expect(failures).toEqual([])
})

test('nl research topics load Dutch copy', () => {
  const en = getResearchTopics('en')
  const nl = getResearchTopics('nl')
  const failures: string[] = []
  for (const r of nl) {
    const base = en.find((x) => x.slug === r.slug)
    if (!base || (base.category === r.category && base.readTime === r.readTime)) {
      failures.push(`${r.slug}: nl overlay fell back to en`)
      continue
    }
    if (!isDutch(r.readTime)) failures.push(`${r.slug}: readTime not Dutch (${r.readTime})`)
  }
  expect(failures).toEqual([])
})

test('nl faqs load Dutch questions', () => {
  const en = getSiteFaqs('en')
  const nl = getSiteFaqs('nl')
  if (en.length === 0 || nl.length === 0) {
    expect(nl.length).toBeGreaterThan(0)
    return
  }
  const failures: string[] = []
  for (let i = 0; i < Math.min(en.length, nl.length); i++) {
    const enQ = en[i].q
    const nlQ = nl[i].q
    if (enQ === nlQ) { failures.push(`faq #${i}: nl question fell back to en`); continue }
    if (!isDutch(nlQ)) failures.push(`faq #${i}: question not Dutch`)
  }
  expect(failures).toEqual([])
})

test('every en content file has a .nl counterpart (except locale-agnostic site/pages.yaml)', () => {
  const missing: string[] = []
  const dirs = ['pages', 'news', 'products', 'technology', 'case-use', 'site']
  for (const dir of dirs) {
    for (const name of readdirSync(resolve(contentRoot, dir))) {
      if (name.includes('.de.') || name.includes('.es.') || name.includes('.fr.') || name.includes('.it.') || name.includes('.pt.') || name.includes('.nl.')) continue
      if (dir === 'site' && name === 'pages.yaml') continue
      const nlName = name.replace(/(\.(yaml|mdx|md))$/, '.nl$1')
      if (!existsSync(resolve(contentRoot, `${dir}/${nlName}`))) {
        missing.push(`${dir}/${name}`)
      }
    }
  }
  expect(missing).toEqual([])
})

test('nl content files contain no leftover /it links', () => {
  const leftover: string[] = []
  const dirs = ['pages', 'news', 'products', 'technology', 'case-use', 'site']
  for (const dir of dirs) {
    for (const name of readdirSync(resolve(contentRoot, dir))) {
      if (!name.includes('.nl.')) continue
      const raw = readFileSync(resolve(contentRoot, `${dir}/${name}`), 'utf8')
      if (/(["'\s(])\/it\//.test(raw)) leftover.push(`${dir}/${name}`)
    }
  }
  expect(leftover).toEqual([])
})

/* ─────────────────────── TS data layer (Part B) ─────────────────────── */

function assertDutch(failures: string[], label: string, sample: string) {
  if (!isDutch(sample)) failures.push(`${label}: not Dutch (${sample.slice(0, 60)})`)
}

test('nl knowledge articles are Dutch with en slug parity', () => {
  const en = knowledge.en
  const nl = pick(knowledge, 'nl')
  const failures: string[] = []
  expect(knowledge.nl).toBeDefined()
  for (const a of en) {
    const f = nl.find((x) => x.slug === a.slug)
    if (!f) { failures.push(`${a.slug}: missing in nl`); continue }
    assertDutch(
      failures,
      `${a.slug}.h1`,
      `${f.h1} ${f.intro} ${f.sections.map((x) => `${x.title} ${x.body.join(' ')}`).join(' ')}`,
    )
  }
  expect(failures).toEqual([])
  expect(knowledgeMeta.nl.metaTitle).toBeDefined()
  assertDutch(failures, 'knowledgeMeta.metaTitle', knowledgeMeta.nl.metaTitle)
  expect(failures).toEqual([])
})

test('nl projects are Dutch with en slug parity and invariant assets', () => {
  const en = projects.en
  const nl = pick(projects, 'nl')
  const failures: string[] = []
  expect(nl.length).toBe(en.length)
  for (const p of en) {
    const f = nl.find((x) => x.slug === p.slug)
    if (!f) { failures.push(`${p.slug}: missing in nl`); continue }
    assertDutch(
      failures,
      `${p.slug}.content`,
      `${f.h1} ${f.intro.join(' ')} ${f.process.map((x) => x.title).join(' ')} ${f.customizations.join(' ')} ${f.inspectionFocus.join(' ')} ${f.outcome}`,
    )
  }
  expect(failures).toEqual([])
  expect(projectsMeta.nl.metaTitle).toBeDefined()
  assertDutch(failures, 'projectsMeta.metaTitle', projectsMeta.nl.metaTitle)
  expect(failures).toEqual([])
})

test('nl series landing pages are Dutch with en slug parity', () => {
  const en = seriesPages.en
  const nl = pick(seriesPages, 'nl')
  const failures: string[] = []
  expect(nl.length).toBe(en.length)
  for (const s of en) {
    const f = nl.find((x) => x.slug === s.slug)
    if (!f) { failures.push(`${s.slug}: missing in nl`); continue }
    assertDutch(failures, `${s.slug}.h1`, `${f.h1} ${f.intro}`)
  }
  expect(failures).toEqual([])
})

test('nl solution pages are Dutch with en slug parity', () => {
  const en = solutionPages.en
  const nl = pick(solutionPages, 'nl')
  const failures: string[] = []
  expect(nl.length).toBe(en.length)
  for (const s of en) {
    const f = nl.find((x) => x.slug === s.slug)
    if (!f) { failures.push(`${s.slug}: missing in nl`); continue }
    assertDutch(failures, `${s.slug}.h1`, `${f.h1} ${f.intro}`)
  }
  expect(failures).toEqual([])
})

test('nl guides are Dutch with en slug parity', () => {
  const en = localizedGuides('en')
  const nl = localizedGuides('nl')
  const failures: string[] = []
  expect(nl.length).toBe(en.length)
  for (const g of en) {
    const f = nl.find((x) => x.slug === g.slug)
    if (!f) { failures.push(`${g.slug}: missing in nl`); continue }
    assertDutch(failures, `${g.slug}.intro`, `${f.title} ${f.intro}`)
  }
  expect(failures).toEqual([])
  const cards = GUIDE_CARDS.nl
  expect(cards.length).toBe(GUIDE_CARDS.en.length)
})

test('nl home & catalog content is Dutch', () => {
  const failures: string[] = []
  assertDutch(failures, 'hero.title', `${pick(hero, 'nl').titlePre} ${pick(hero, 'nl').titleAccent} ${pick(hero, 'nl').sub}`)
  assertDutch(failures, 'products.tagline', pick(products, 'nl').title)
  const nlItems = pick(products, 'nl').items
  const enItems = products.en.items
  expect(nlItems.length).toBe(enItems.length)
  for (const item of enItems) {
    const f = nlItems.find((x) => x.slug === item.slug)
    if (!f) { failures.push(`${item.slug}: missing in nl products`); continue }
    assertDutch(failures, `${item.slug}.desc`, `${f.tagline} ${f.desc} ${f.uses.join(' ')} ${f.for.join(' ')}`)
  }
  assertDutch(failures, 'series.title', `${pick(series, 'nl').title} ${pick(series, 'nl').items[0].title}`)
  assertDutch(failures, 'about.story', pick(about, 'nl').story.join(' '))
  assertDutch(failures, 'solve.title', `${pick(solve, 'nl').title} ${pick(solve, 'nl').items[0].title}`)
  assertDutch(failures, 'faq', `${pick(faq, 'nl').title} ${pick(faq, 'nl').items[0].q}`)
  expect(failures).toEqual([])
})

test('nl procurement profiles are Dutch with en key parity', () => {
  const en = procurementProfiles.en
  const nl = procurementProfiles.nl
  const failures: string[] = []
  expect(Object.keys(nl).sort()).toEqual(Object.keys(en).sort())
  for (const slug of Object.keys(en)) {
    const f = nl[slug]
    if (!f) { failures.push(`${slug}: missing in nl`); continue }
    assertDutch(failures, `${slug}.bestFor`, `${f.bestFor} ${f.customization ?? ''}`)
  }
  expect(failures).toEqual([])
})

test('nl product-page customization & OEM application sections are Dutch', () => {
  expect(CUSTOMIZATION_OPTIONS.nl).toBeDefined()
  expect(OEM_APPLICATIONS.nl).toBeDefined()
  expect(CUSTOMIZATION_OPTIONS.nl.length).toBe(CUSTOMIZATION_OPTIONS.en.length)
  expect(OEM_APPLICATIONS.nl.length).toBe(OEM_APPLICATIONS.en.length)
  const failures: string[] = []
  for (let i = 0; i < CUSTOMIZATION_OPTIONS.en.length; i++) {
    assertDutch(failures, `customization #${i}`, CUSTOMIZATION_OPTIONS.nl[i].title + ' ' + CUSTOMIZATION_OPTIONS.nl[i].body)
  }
  for (let i = 0; i < OEM_APPLICATIONS.en.length; i++) {
    assertDutch(failures, `oem-application #${i}`, OEM_APPLICATIONS.nl[i].title + ' ' + OEM_APPLICATIONS.nl[i].body)
  }
  expect(failures).toEqual([])
})

test('nl product FAQ pool is Dutch (not Spanish/Italian/en fallback)', () => {
  expect(PRODUCT_FAQ_POOL.nl.length).toBe(PRODUCT_FAQ_POOL.en.length)
  const failures: string[] = []
  for (let i = 0; i < PRODUCT_FAQ_POOL.en.length; i++) {
    const qa = `${PRODUCT_FAQ_POOL.nl[i].q} ${PRODUCT_FAQ_POOL.nl[i].a}`
    assertDutch(failures, `faq #${i}`, qa)
    expect(qa).not.toMatch(/[¿¡ñ]/i)
    expect(qa).not.toMatch(/[äöüß]/i)
    expect(qa).not.toMatch(/[àèìòù]/i)
    expect(PRODUCT_FAQ_POOL.nl[i].q).not.toBe(PRODUCT_FAQ_POOL.en[i].q)
  }
  expect(failures).toEqual([])
})

test('localized facts (FACTS_LOCALE) provide Dutch shorthands', () => {
  const nlAll = Object.values(FACTS_LOCALE.nl).flat().join(' ') + Object.values(FACTS_LOCALE.nl.moq).join(' ')
  expect(nlAll).toMatch(/dagen|stuks|minuten|levertijd|offerte/)
  expect(nlAll.toLowerCase()).not.toMatch(/\bpcs\b|\bdays\b|\border\b/)
  expect(nlAll).not.toMatch(/[¿¡ñ]/i)
  expect(nlAll).not.toMatch(/[äöüß]/i)
})