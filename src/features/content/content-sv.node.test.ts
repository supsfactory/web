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

/** Swedish markers: å/ä/ö or common Swedish function/domain words. */
const SWEDISH_RE = /[åäöÅÄÖ]|\b(och|att|för|med|inte|är|till|från|på|som|har|kan|ska|kommer|var|där|när|får|ger|blir|vill|oss|vår|vårt|våra|även|bara|därför|efter|mellan|över|under|varje|alla|dessa|vilka|hur|vad|vem|vilket|bräda|brädan|brädor|paddel|paddeln|paddlar|uppblåsbar|uppblåsbara|fabrik|fabriken|leverans|beställning|beställningar|prov|prover|offert|offerta|serieproduktion|tillverkning|förpackning|garanti|kvalitet|kund|kunder|återförsäljare|leverantör|minuter|dagar)\b/i

function isSwedish(text: string): boolean {
  return SWEDISH_RE.test(text)
}

function pageSlugToSvFile(slug: string): string {
  return resolve(contentRoot, `pages/${slug}.sv.yaml`)
}

test('sv pages load Swedish content (not en fallback)', () => {
  const failures: string[] = []
  for (const path of getPublicPaths()) {
    const slug = path.split('/').filter(Boolean).pop() ?? ''
    if (!existsSync(pageSlugToSvFile(slug))) continue
    const en = getContentPage(path)
    const sv = getContentPage(path, 'sv')
    if (!sv) { failures.push(`${path}: no sv page`); continue }
    if (JSON.stringify(sv.content) === JSON.stringify(en?.content ?? {})) {
      failures.push(`${path}: sv content identical to en (fallback)`)
      continue
    }
    if (!isSwedish(JSON.stringify({ ...sv.meta, ...sv.content }))) {
      failures.push(`${path}: sv content has no Swedish text`)
    }
  }
  expect(failures).toEqual([])
})

test('sv news posts load Swedish titles', () => {
  const en = getNewsPosts('en')
  const sv = getNewsPosts('sv')
  const failures: string[] = []
  for (const post of sv) {
    const base = en.find((p) => p.slug === post.slug)
    if (!base || base.title === post.title) {
      failures.push(`${post.slug}: sv title fell back to en`)
      continue
    }
    if (!isSwedish(post.title)) failures.push(`${post.slug}: title not Swedish`)
  }
  expect(failures).toEqual([])
})

test('sv products load Swedish copy', () => {
  const en = getContentProducts('en')
  const sv = getContentProducts('sv')
  const failures: string[] = []
  for (const p of sv) {
    const base = en.find((x) => x.slug === p.slug)
    if (!base) { failures.push(`${p.slug}: missing in en`); continue }
    // Product titles are locale-invariant brand names; translate the body/summary.
    const sample = `${p.summary ?? ''} ${p.description ?? ''} ${p.body ?? ''}`
    if (sample.length === 0) { failures.push(`${p.slug}: no copy to check`); continue }
    if (!isSwedish(sample)) failures.push(`${p.slug}: product copy not Swedish`)
  }
  expect(failures).toEqual([])
})

test('sv technology articles load Swedish copy', () => {
  const en = getTechArticles('en')
  const sv = getTechArticles('sv')
  const failures: string[] = []
  for (const a of sv) {
    const base = en.find((x) => x.slug === a.slug)
    if (!base || base.title === a.title) { failures.push(`${a.slug}: sv title fell back to en`); continue }
    const sample = `${a.title} ${a.summary ?? ''} ${a.body ?? ''}`
    if (!isSwedish(sample)) failures.push(`${a.slug}: title not Swedish`)
  }
  expect(failures).toEqual([])
})

test('sv case-use articles load Swedish copy', () => {
  const en = getCaseUses('en')
  const sv = getCaseUses('sv')
  const failures: string[] = []
  for (const c of sv) {
    const base = en.find((x) => x.slug === c.slug)
    if (!base || base.title === c.title) { failures.push(`${c.slug}: sv title fell back to en`); continue }
    if (!isSwedish(c.title)) failures.push(`${c.slug}: title not Swedish`)
  }
  expect(failures).toEqual([])
})

test('sv research topics load Swedish copy', () => {
  const en = getResearchTopics('en')
  const sv = getResearchTopics('sv')
  const failures: string[] = []
  for (const r of sv) {
    const base = en.find((x) => x.slug === r.slug)
    if (!base || (base.category === r.category && base.readTime === r.readTime)) {
      failures.push(`${r.slug}: sv overlay fell back to en`)
      continue
    }
    if (!isSwedish(r.readTime)) failures.push(`${r.slug}: readTime not Swedish (${r.readTime})`)
  }
  expect(failures).toEqual([])
})

test('sv faqs load Swedish questions', () => {
  const en = getSiteFaqs('en')
  const sv = getSiteFaqs('sv')
  if (en.length === 0 || sv.length === 0) {
    expect(sv.length).toBeGreaterThan(0)
    return
  }
  const failures: string[] = []
  for (let i = 0; i < Math.min(en.length, sv.length); i++) {
    const enQ = en[i].q
    const svQ = sv[i].q
    if (enQ === svQ) { failures.push(`faq #${i}: sv question fell back to en`); continue }
    if (!isSwedish(svQ)) failures.push(`faq #${i}: question not Swedish`)
  }
  expect(failures).toEqual([])
})

test('every en content file has a .sv counterpart (except locale-agnostic site/pages.yaml)', () => {
  const missing: string[] = []
  const dirs = ['pages', 'news', 'products', 'technology', 'case-use', 'site']
  for (const dir of dirs) {
    for (const name of readdirSync(resolve(contentRoot, dir))) {
      if (name.includes('.de.') || name.includes('.es.') || name.includes('.fr.') || name.includes('.it.') || name.includes('.pt.') || name.includes('.nl.') || name.includes('.sv.')) continue
      if (dir === 'site' && name === 'pages.yaml') continue
      const svName = name.replace(/(\.(yaml|mdx|md))$/, '.sv$1')
      if (!existsSync(resolve(contentRoot, `${dir}/${svName}`))) {
        missing.push(`${dir}/${name}`)
      }
    }
  }
  expect(missing).toEqual([])
})

test('sv content files contain no leftover /nl links', () => {
  const leftover: string[] = []
  const dirs = ['pages', 'news', 'products', 'technology', 'case-use', 'site']
  for (const dir of dirs) {
    for (const name of readdirSync(resolve(contentRoot, dir))) {
      if (!name.includes('.sv.')) continue
      const raw = readFileSync(resolve(contentRoot, `${dir}/${name}`), 'utf8')
      if (/(["'\s(])\/nl\//.test(raw)) leftover.push(`${dir}/${name}`)
    }
  }
  expect(leftover).toEqual([])
})

/* ─────────────────────── TS data layer (Part B) ─────────────────────── */

function assertSwedish(failures: string[], label: string, sample: string) {
  if (!isSwedish(sample)) failures.push(`${label}: not Swedish (${sample.slice(0, 60)})`)
}

test('sv knowledge articles are Swedish with en slug parity', () => {
  const en = knowledge.en
  const sv = pick(knowledge, 'sv')
  const failures: string[] = []
  expect(knowledge.sv).toBeDefined()
  for (const a of en) {
    const f = sv.find((x) => x.slug === a.slug)
    if (!f) { failures.push(`${a.slug}: missing in sv`); continue }
    assertSwedish(
      failures,
      `${a.slug}.h1`,
      `${f.h1} ${f.intro} ${f.sections.map((x) => `${x.title} ${x.body.join(' ')}`).join(' ')}`,
    )
  }
  expect(failures).toEqual([])
  expect(knowledgeMeta.sv.metaTitle).toBeDefined()
  assertSwedish(failures, 'knowledgeMeta.metaTitle', knowledgeMeta.sv.metaTitle)
  expect(failures).toEqual([])
})

test('sv projects are Swedish with en slug parity and invariant assets', () => {
  const en = projects.en
  const sv = pick(projects, 'sv')
  const failures: string[] = []
  expect(sv.length).toBe(en.length)
  for (const p of en) {
    const f = sv.find((x) => x.slug === p.slug)
    if (!f) { failures.push(`${p.slug}: missing in sv`); continue }
    assertSwedish(
      failures,
      `${p.slug}.content`,
      `${f.h1} ${f.intro.join(' ')} ${f.process.map((x) => x.title).join(' ')} ${f.customizations.join(' ')} ${f.inspectionFocus.join(' ')} ${f.outcome}`,
    )
  }
  expect(failures).toEqual([])
  expect(projectsMeta.sv.metaTitle).toBeDefined()
  assertSwedish(failures, 'projectsMeta.metaTitle', projectsMeta.sv.metaTitle)
  expect(failures).toEqual([])
})

test('sv series landing pages are Swedish with en slug parity', () => {
  const en = seriesPages.en
  const sv = pick(seriesPages, 'sv')
  const failures: string[] = []
  expect(sv.length).toBe(en.length)
  for (const s of en) {
    const f = sv.find((x) => x.slug === s.slug)
    if (!f) { failures.push(`${s.slug}: missing in sv`); continue }
    assertSwedish(failures, `${s.slug}.h1`, `${f.h1} ${f.intro}`)
  }
  expect(failures).toEqual([])
})

test('sv solution pages are Swedish with en slug parity', () => {
  const en = solutionPages.en
  const sv = pick(solutionPages, 'sv')
  const failures: string[] = []
  expect(sv.length).toBe(en.length)
  for (const s of en) {
    const f = sv.find((x) => x.slug === s.slug)
    if (!f) { failures.push(`${s.slug}: missing in sv`); continue }
    assertSwedish(failures, `${s.slug}.h1`, `${f.h1} ${f.intro}`)
  }
  expect(failures).toEqual([])
})

test('sv guides are Swedish with en slug parity', () => {
  const en = localizedGuides('en')
  const sv = localizedGuides('sv')
  const failures: string[] = []
  expect(sv.length).toBe(en.length)
  for (const g of en) {
    const f = sv.find((x) => x.slug === g.slug)
    if (!f) { failures.push(`${g.slug}: missing in sv`); continue }
    assertSwedish(failures, `${g.slug}.intro`, `${f.title} ${f.intro}`)
  }
  expect(failures).toEqual([])
  const cards = GUIDE_CARDS.sv
  expect(cards.length).toBe(GUIDE_CARDS.en.length)
})

test('sv home & catalog content is Swedish', () => {
  const failures: string[] = []
  assertSwedish(failures, 'hero.title', `${pick(hero, 'sv').titlePre} ${pick(hero, 'sv').titleAccent} ${pick(hero, 'sv').sub}`)
  assertSwedish(failures, 'products.tagline', pick(products, 'sv').title)
  const svItems = pick(products, 'sv').items
  const enItems = products.en.items
  expect(svItems.length).toBe(enItems.length)
  for (const item of enItems) {
    const f = svItems.find((x) => x.slug === item.slug)
    if (!f) { failures.push(`${item.slug}: missing in sv products`); continue }
    assertSwedish(failures, `${item.slug}.desc`, `${f.tagline} ${f.desc} ${f.uses.join(' ')} ${f.for.join(' ')}`)
  }
  assertSwedish(failures, 'series.title', `${pick(series, 'sv').title} ${pick(series, 'sv').items[0].title}`)
  assertSwedish(failures, 'about.story', pick(about, 'sv').story.join(' '))
  assertSwedish(failures, 'solve.title', `${pick(solve, 'sv').title} ${pick(solve, 'sv').items[0].title}`)
  assertSwedish(failures, 'faq', `${pick(faq, 'sv').title} ${pick(faq, 'sv').items[0].q}`)
  expect(failures).toEqual([])
})

test('sv procurement profiles are Swedish with en key parity', () => {
  const en = procurementProfiles.en
  const sv = procurementProfiles.sv
  const failures: string[] = []
  expect(Object.keys(sv).sort()).toEqual(Object.keys(en).sort())
  for (const slug of Object.keys(en)) {
    const f = sv[slug]
    if (!f) { failures.push(`${slug}: missing in sv`); continue }
    assertSwedish(failures, `${slug}.bestFor`, `${f.bestFor} ${f.customization ?? ''}`)
  }
  expect(failures).toEqual([])
})

test('sv product-page customization & OEM application sections are Swedish', () => {
  expect(CUSTOMIZATION_OPTIONS.sv).toBeDefined()
  expect(OEM_APPLICATIONS.sv).toBeDefined()
  expect(CUSTOMIZATION_OPTIONS.sv.length).toBe(CUSTOMIZATION_OPTIONS.en.length)
  expect(OEM_APPLICATIONS.sv.length).toBe(OEM_APPLICATIONS.en.length)
  const failures: string[] = []
  for (let i = 0; i < CUSTOMIZATION_OPTIONS.en.length; i++) {
    assertSwedish(failures, `customization #${i}`, CUSTOMIZATION_OPTIONS.sv[i].title + ' ' + CUSTOMIZATION_OPTIONS.sv[i].body)
  }
  for (let i = 0; i < OEM_APPLICATIONS.en.length; i++) {
    assertSwedish(failures, `oem-application #${i}`, OEM_APPLICATIONS.sv[i].title + ' ' + OEM_APPLICATIONS.sv[i].body)
  }
  expect(failures).toEqual([])
})

test('sv product FAQ pool is Swedish (not Spanish/German/Dutch/en fallback)', () => {
  expect(PRODUCT_FAQ_POOL.sv.length).toBe(PRODUCT_FAQ_POOL.en.length)
  const failures: string[] = []
  for (let i = 0; i < PRODUCT_FAQ_POOL.en.length; i++) {
    const qa = `${PRODUCT_FAQ_POOL.sv[i].q} ${PRODUCT_FAQ_POOL.sv[i].a}`
    assertSwedish(failures, `faq #${i}`, qa)
    expect(qa).not.toMatch(/[¿¡ñ]/i)
    expect(qa).not.toMatch(/[àèìòù]/i)
    expect(qa).not.toMatch(/[üß]/i)
    expect(PRODUCT_FAQ_POOL.sv[i].q).not.toBe(PRODUCT_FAQ_POOL.en[i].q)
  }
  expect(failures).toEqual([])
})

test('localized facts (FACTS_LOCALE) provide Swedish shorthands', () => {
  const svAll = Object.values(FACTS_LOCALE.sv).flat().join(' ') + Object.values(FACTS_LOCALE.sv.moq).join(' ')
  expect(svAll).toMatch(/st\b|dagar|minuter/)
  expect(svAll.toLowerCase()).not.toMatch(/\bpcs\b|\bdays\b|\border\b/)
  expect(svAll).not.toMatch(/[¿¡ñ]/i)
  expect(svAll).not.toMatch(/[àèìòù]/i)
  expect(svAll).not.toMatch(/[üß]/i)
})