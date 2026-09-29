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

/** Russian markers: any Cyrillic char (the en fallback has none, so a Russian page is unmistakable). */
const RUSSIAN_RE = /[\u0400-\u04FF\u0500-\u052F]/

function isRussian(text: string): boolean {
  return RUSSIAN_RE.test(text)
}

function pageSlugToRuFile(slug: string): string {
  return resolve(contentRoot, `pages/${slug}.ru.yaml`)
}

test('ru pages load Russian content (not en fallback)', () => {
  const failures: string[] = []
  for (const path of getPublicPaths()) {
    const slug = path.split('/').filter(Boolean).pop() ?? ''
    if (!existsSync(pageSlugToRuFile(slug))) continue
    const en = getContentPage(path)
    const ru = getContentPage(path, 'ru')
    if (!ru) { failures.push(`${path}: no ru page`); continue }
    if (JSON.stringify(ru.content) === JSON.stringify(en?.content ?? {})) {
      failures.push(`${path}: ru content identical to en (fallback)`)
      continue
    }
    if (!isRussian(JSON.stringify({ ...ru.meta, ...ru.content }))) {
      failures.push(`${path}: ru content has no Russian text`)
    }
  }
  expect(failures).toEqual([])
})

test('ru news posts load Russian titles', () => {
  const en = getNewsPosts('en')
  const ru = getNewsPosts('ru')
  const failures: string[] = []
  for (const post of ru) {
    const base = en.find((p) => p.slug === post.slug)
    if (!base || base.title === post.title) {
      failures.push(`${post.slug}: ru title fell back to en`)
      continue
    }
    if (!isRussian(post.title)) failures.push(`${post.slug}: title not Russian`)
  }
  expect(failures).toEqual([])
})

test('ru products load Russian copy', () => {
  const en = getContentProducts('en')
  const ru = getContentProducts('ru')
  const failures: string[] = []
  for (const p of ru) {
    const base = en.find((x) => x.slug === p.slug)
    if (!base) { failures.push(`${p.slug}: missing in en`); continue }
    // Product titles are locale-invariant brand names; translate the body/summary.
    const sample = `${p.summary ?? ''} ${p.description ?? ''} ${p.body ?? ''}`
    if (sample.length === 0) { failures.push(`${p.slug}: no copy to check`); continue }
    if (!isRussian(sample)) failures.push(`${p.slug}: product copy not Russian`)
  }
  expect(failures).toEqual([])
})

test('ru technology articles load Russian copy', () => {
  const en = getTechArticles('en')
  const ru = getTechArticles('ru')
  const failures: string[] = []
  for (const a of ru) {
    const base = en.find((x) => x.slug === a.slug)
    if (!base || base.title === a.title) { failures.push(`${a.slug}: ru title fell back to en`); continue }
    const sample = `${a.title} ${a.summary ?? ''} ${a.body ?? ''}`
    if (!isRussian(sample)) failures.push(`${a.slug}: title not Russian`)
  }
  expect(failures).toEqual([])
})

test('ru case-use articles load Russian copy', () => {
  const en = getCaseUses('en')
  const ru = getCaseUses('ru')
  const failures: string[] = []
  for (const c of ru) {
    const base = en.find((x) => x.slug === c.slug)
    if (!base || base.title === c.title) { failures.push(`${c.slug}: ru title fell back to en`); continue }
    if (!isRussian(c.title)) failures.push(`${c.slug}: title not Russian`)
  }
  expect(failures).toEqual([])
})

test('ru research topics load Russian copy', () => {
  const en = getResearchTopics('en')
  const ru = getResearchTopics('ru')
  const failures: string[] = []
  for (const r of ru) {
    const base = en.find((x) => x.slug === r.slug)
    if (!base || (base.category === r.category && base.readTime === r.readTime)) {
      failures.push(`${r.slug}: ru overlay fell back to en`)
      continue
    }
    if (!isRussian(r.readTime)) failures.push(`${r.slug}: readTime not Russian (${r.readTime})`)
  }
  expect(failures).toEqual([])
})

test('ru faqs load Russian questions', () => {
  const en = getSiteFaqs('en')
  const ru = getSiteFaqs('ru')
  if (en.length === 0 || ru.length === 0) {
    expect(ru.length).toBeGreaterThan(0)
    return
  }
  const failures: string[] = []
  for (let i = 0; i < Math.min(en.length, ru.length); i++) {
    const enQ = en[i].q
    const ruQ = ru[i].q
    if (enQ === ruQ) { failures.push(`faq #${i}: ru question fell back to en`); continue }
    if (!isRussian(ruQ)) failures.push(`faq #${i}: question not Russian`)
  }
  expect(failures).toEqual([])
})

test('every en content file has a .ru counterpart (except locale-agnostic site/pages.yaml)', () => {
  const missing: string[] = []
  const dirs = ['pages', 'news', 'products', 'technology', 'case-use', 'site']
  for (const dir of dirs) {
    for (const name of readdirSync(resolve(contentRoot, dir))) {
      if (name.includes('.de.') || name.includes('.es.') || name.includes('.fr.') || name.includes('.it.') || name.includes('.pt.') || name.includes('.nl.') || name.includes('.sv.') || name.includes('.no.') || name.includes('.pl.') || name.includes('.da.') || name.includes('.fi.') || name.includes('.ru.') || name.includes('.cs.') || name.includes('.tr.') || name.includes('.hu.') || name.includes('.ro.')) continue
      if (dir === 'site' && name === 'pages.yaml') continue
      const ruName = name.replace(/(\.(yaml|mdx|md))$/, '.ru$1')
      if (!existsSync(resolve(contentRoot, `${dir}/${ruName}`))) {
        missing.push(`${dir}/${name}`)
      }
    }
  }
  expect(missing).toEqual([])
})

test('ru content files contain no leftover /sv /no /nl /pl /da or /fi links', () => {
  const leftover: string[] = []
  const dirs = ['pages', 'news', 'products', 'technology', 'case-use', 'site']
  for (const dir of dirs) {
    for (const name of readdirSync(resolve(contentRoot, dir))) {
      if (!name.includes('.ru.')) continue
      const raw = readFileSync(resolve(contentRoot, `${dir}/${name}`), 'utf8')
      if (/(["'\s(])\/(sv|no|nl|pl|da|fi)\//.test(raw)) leftover.push(`${dir}/${name}`)
    }
  }
  expect(leftover).toEqual([])
})

/* ─────────────────────── TS data layer (Part B) ─────────────────────── */

function assertRussian(failures: string[], label: string, sample: string) {
  if (!isRussian(sample)) failures.push(`${label}: not Russian (${sample.slice(0, 60)})`)
}

test('ru knowledge articles are Russian with en slug parity', () => {
  const en = knowledge.en
  const ru = pick(knowledge, 'ru')
  const failures: string[] = []
  expect(knowledge.ru).toBeDefined()
  for (const a of en) {
    const f = ru.find((x) => x.slug === a.slug)
    if (!f) { failures.push(`${a.slug}: missing in ru`); continue }
    assertRussian(
      failures,
      `${a.slug}.h1`,
      `${f.h1} ${f.intro} ${f.sections.map((x) => `${x.title} ${x.body.join(' ')}`).join(' ')}`,
    )
  }
  expect(failures).toEqual([])
  expect(knowledgeMeta.ru.metaTitle).toBeDefined()
  assertRussian(failures, 'knowledgeMeta.metaTitle', knowledgeMeta.ru.metaTitle)
  expect(failures).toEqual([])
})

test('ru projects are Russian with en slug parity and invariant assets', () => {
  const en = projects.en
  const ru = pick(projects, 'ru')
  const failures: string[] = []
  expect(ru.length).toBe(en.length)
  for (const p of en) {
    const f = ru.find((x) => x.slug === p.slug)
    if (!f) { failures.push(`${p.slug}: missing in ru`); continue }
    assertRussian(
      failures,
      `${p.slug}.content`,
      `${f.h1} ${f.intro.join(' ')} ${f.process.map((x) => x.title).join(' ')} ${f.customizations.join(' ')} ${f.inspectionFocus.join(' ')} ${f.outcome}`,
    )
  }
  expect(failures).toEqual([])
  expect(projectsMeta.ru.metaTitle).toBeDefined()
  assertRussian(failures, 'projectsMeta.metaTitle', projectsMeta.ru.metaTitle)
  expect(failures).toEqual([])
})

test('ru series landing pages are Russian with en slug parity', () => {
  const en = seriesPages.en
  const ru = pick(seriesPages, 'ru')
  const failures: string[] = []
  expect(ru.length).toBe(en.length)
  for (const s of en) {
    const f = ru.find((x) => x.slug === s.slug)
    if (!f) { failures.push(`${s.slug}: missing in ru`); continue }
    assertRussian(failures, `${s.slug}.h1`, `${f.h1} ${f.intro}`)
  }
  expect(failures).toEqual([])
})

test('ru solution pages are Russian with en slug parity', () => {
  const en = solutionPages.en
  const ru = pick(solutionPages, 'ru')
  const failures: string[] = []
  expect(ru.length).toBe(en.length)
  for (const s of en) {
    const f = ru.find((x) => x.slug === s.slug)
    if (!f) { failures.push(`${s.slug}: missing in ru`); continue }
    assertRussian(failures, `${s.slug}.h1`, `${f.h1} ${f.intro}`)
  }
  expect(failures).toEqual([])
})

test('ru guides are Russian with en slug parity', () => {
  const en = localizedGuides('en')
  const ru = localizedGuides('ru')
  const failures: string[] = []
  expect(ru.length).toBe(en.length)
  for (const g of en) {
    const f = ru.find((x) => x.slug === g.slug)
    if (!f) { failures.push(`${g.slug}: missing in ru`); continue }
    assertRussian(failures, `${g.slug}.intro`, `${f.title} ${f.intro}`)
  }
  expect(failures).toEqual([])
  const cards = GUIDE_CARDS.ru
  expect(cards.length).toBe(GUIDE_CARDS.en.length)
})

test('ru home & catalog content is Russian', () => {
  const failures: string[] = []
  assertRussian(failures, 'hero.title', `${pick(hero, 'ru').titlePre} ${pick(hero, 'ru').titleAccent} ${pick(hero, 'ru').sub}`)
  assertRussian(failures, 'products.tagline', pick(products, 'ru').title)
  const ruItems = pick(products, 'ru').items
  const enItems = products.en.items
  expect(ruItems.length).toBe(enItems.length)
  for (const item of enItems) {
    const f = ruItems.find((x) => x.slug === item.slug)
    if (!f) { failures.push(`${item.slug}: missing in ru products`); continue }
    assertRussian(failures, `${item.slug}.desc`, `${f.tagline} ${f.desc} ${f.uses.join(' ')} ${f.for.join(' ')}`)
  }
  assertRussian(failures, 'series.title', `${pick(series, 'ru').title} ${pick(series, 'ru').items[0].title}`)
  assertRussian(failures, 'about.story', pick(about, 'ru').story.join(' '))
  assertRussian(failures, 'solve.title', `${pick(solve, 'ru').title} ${pick(solve, 'ru').items[0].title}`)
  assertRussian(failures, 'faq', `${pick(faq, 'ru').title} ${pick(faq, 'ru').items[0].q}`)
  expect(failures).toEqual([])
})

test('ru procurement profiles are Russian with en key parity', () => {
  const en = procurementProfiles.en
  const ru = procurementProfiles.ru
  const failures: string[] = []
  expect(Object.keys(ru).sort()).toEqual(Object.keys(en).sort())
  for (const slug of Object.keys(en)) {
    const f = ru[slug]
    if (!f) { failures.push(`${slug}: missing in ru`); continue }
    assertRussian(failures, `${slug}.bestFor`, `${f.bestFor} ${f.customization ?? ''}`)
  }
  expect(failures).toEqual([])
})

test('ru product-page customization & OEM application sections are Russian', () => {
  expect(CUSTOMIZATION_OPTIONS.ru).toBeDefined()
  expect(OEM_APPLICATIONS.ru).toBeDefined()
  expect(CUSTOMIZATION_OPTIONS.ru.length).toBe(CUSTOMIZATION_OPTIONS.en.length)
  expect(OEM_APPLICATIONS.ru.length).toBe(OEM_APPLICATIONS.en.length)
  const failures: string[] = []
  for (let i = 0; i < CUSTOMIZATION_OPTIONS.en.length; i++) {
    assertRussian(failures, `customization #${i}`, CUSTOMIZATION_OPTIONS.ru[i].title + ' ' + CUSTOMIZATION_OPTIONS.ru[i].body)
  }
  for (let i = 0; i < OEM_APPLICATIONS.en.length; i++) {
    assertRussian(failures, `oem-application #${i}`, OEM_APPLICATIONS.ru[i].title + ' ' + OEM_APPLICATIONS.ru[i].body)
  }
  expect(failures).toEqual([])
})

test('ru product FAQ pool is Russian (not Spanish/German/French-Italian/Danish en fallback)', () => {
  expect(PRODUCT_FAQ_POOL.ru.length).toBe(PRODUCT_FAQ_POOL.en.length)
  const failures: string[] = []
  for (let i = 0; i < PRODUCT_FAQ_POOL.en.length; i++) {
    const qa = `${PRODUCT_FAQ_POOL.ru[i].q} ${PRODUCT_FAQ_POOL.ru[i].a}`.replace(/TÜV/g, '')
    assertRussian(failures, `faq #${i}`, qa)
    expect(qa).not.toMatch(/[¿¡ñ]/i)
    expect(qa).not.toMatch(/[àèìòù]/i)
    expect(qa).not.toMatch(/[üß]/i)
    expect(PRODUCT_FAQ_POOL.ru[i].q).not.toBe(PRODUCT_FAQ_POOL.en[i].q)
  }
  expect(failures).toEqual([])
})

test('localized facts (FACTS_LOCALE) provide Russian shorthands', () => {
  const ruAll = Object.values(FACTS_LOCALE.ru).flat().join(' ') + Object.values(FACTS_LOCALE.ru.moq).join(' ')
  expect(ruAll).toMatch(/шт\b|дн|мин|ч\b/)
  expect(ruAll.toLowerCase()).not.toMatch(/\bpcs\b|\bdays\b|\border\b/)
  expect(ruAll).not.toMatch(/[¿¡ñ]/i)
  expect(ruAll).not.toMatch(/[àèìòù]/i)
  expect(ruAll.replace(/TÜV/g, '')).not.toMatch(/[üß]/i)
  expect(ruAll).not.toMatch(/é|å|æ|ø|ë|ä|ö/i)
})