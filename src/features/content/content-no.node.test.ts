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

/** Norwegian markers: æ/ø/å or common Norwegian (Bokmål) function/domain words. */
const NORWEGIAN_RE = /[æøåÆØÅ]|\b(og|en|et|for|med|ikke|er|til|fra|på|som|har|kan|skal|vil|var|der|hvor|når|får|gir|blir|oss|vår|vårt|våre|også|bare|derfor|etter|mellom|over|under|hver|alle|disse|hvilke|hvordan|hva|hvem|dette|brett|brettet|bretter|padle|padlen|oppblåsbar|oppblåsbare|fabrikk|fabrikken|levering|bestilling|bestillinger|prøve|prøver|tilbud|serieproduksjon|produksjon|emballasje|garanti|kvalitet|kunde|kunder|forhandler|leverandør|minutter|dager|lesing|tematisk|tematiske|utgave|utgaven|utgaver|edisjon|utgavers)\b/i

function isNorwegian(text: string): boolean {
  return NORWEGIAN_RE.test(text)
}

function pageSlugToNoFile(slug: string): string {
  return resolve(contentRoot, `pages/${slug}.no.yaml`)
}

test('no pages load Norwegian content (not en fallback)', () => {
  const failures: string[] = []
  for (const path of getPublicPaths()) {
    const slug = path.split('/').filter(Boolean).pop() ?? ''
    if (!existsSync(pageSlugToNoFile(slug))) continue
    const en = getContentPage(path)
    const no = getContentPage(path, 'no')
    if (!no) { failures.push(`${path}: no no page`); continue }
    if (JSON.stringify(no.content) === JSON.stringify(en?.content ?? {})) {
      failures.push(`${path}: no content identical to en (fallback)`)
      continue
    }
    if (!isNorwegian(JSON.stringify({ ...no.meta, ...no.content }))) {
      failures.push(`${path}: no content has no Norwegian text`)
    }
  }
  expect(failures).toEqual([])
})

test('no news posts load Norwegian titles', () => {
  const en = getNewsPosts('en')
  const no = getNewsPosts('no')
  const failures: string[] = []
  for (const post of no) {
    const base = en.find((p) => p.slug === post.slug)
    if (!base || base.title === post.title) {
      failures.push(`${post.slug}: no title fell back to en`)
      continue
    }
    if (!isNorwegian(post.title)) failures.push(`${post.slug}: title not Norwegian`)
  }
  expect(failures).toEqual([])
})

test('no products load Norwegian copy', () => {
  const en = getContentProducts('en')
  const no = getContentProducts('no')
  const failures: string[] = []
  for (const p of no) {
    const base = en.find((x) => x.slug === p.slug)
    if (!base) { failures.push(`${p.slug}: missing in en`); continue }
    // Product titles are locale-invariant brand names; translate the body/summary.
    const sample = `${p.summary ?? ''} ${p.description ?? ''} ${p.body ?? ''}`
    if (sample.length === 0) { failures.push(`${p.slug}: no copy to check`); continue }
    if (!isNorwegian(sample)) failures.push(`${p.slug}: product copy not Norwegian`)
  }
  expect(failures).toEqual([])
})

test('no technology articles load Norwegian copy', () => {
  const en = getTechArticles('en')
  const no = getTechArticles('no')
  const failures: string[] = []
  for (const a of no) {
    const base = en.find((x) => x.slug === a.slug)
    if (!base || base.title === a.title) { failures.push(`${a.slug}: no title fell back to en`); continue }
    const sample = `${a.title} ${a.summary ?? ''} ${a.body ?? ''}`
    if (!isNorwegian(sample)) failures.push(`${a.slug}: title not Norwegian`)
  }
  expect(failures).toEqual([])
})

test('no case-use articles load Norwegian copy', () => {
  const en = getCaseUses('en')
  const no = getCaseUses('no')
  const failures: string[] = []
  for (const c of no) {
    const base = en.find((x) => x.slug === c.slug)
    if (!base || base.title === c.title) { failures.push(`${c.slug}: no title fell back to en`); continue }
    if (!isNorwegian(c.title)) failures.push(`${c.slug}: title not Norwegian`)
  }
  expect(failures).toEqual([])
})

test('no research topics load Norwegian copy', () => {
  const en = getResearchTopics('en')
  const no = getResearchTopics('no')
  const failures: string[] = []
  for (const r of no) {
    const base = en.find((x) => x.slug === r.slug)
    if (!base || (base.category === r.category && base.readTime === r.readTime)) {
      failures.push(`${r.slug}: no overlay fell back to en`)
      continue
    }
    if (!isNorwegian(r.readTime)) failures.push(`${r.slug}: readTime not Norwegian (${r.readTime})`)
  }
  expect(failures).toEqual([])
})

test('no faqs load Norwegian questions', () => {
  const en = getSiteFaqs('en')
  const no = getSiteFaqs('no')
  if (en.length === 0 || no.length === 0) {
    expect(no.length).toBeGreaterThan(0)
    return
  }
  const failures: string[] = []
  for (let i = 0; i < Math.min(en.length, no.length); i++) {
    const enQ = en[i].q
    const noQ = no[i].q
    if (enQ === noQ) { failures.push(`faq #${i}: no question fell back to en`); continue }
    if (!isNorwegian(noQ)) failures.push(`faq #${i}: question not Norwegian`)
  }
  expect(failures).toEqual([])
})

test('every en content file has a .no counterpart (except locale-agnostic site/pages.yaml)', () => {
  const missing: string[] = []
  const dirs = ['pages', 'news', 'products', 'technology', 'case-use', 'site']
  for (const dir of dirs) {
    for (const name of readdirSync(resolve(contentRoot, dir))) {
      if (name.includes('.de.') || name.includes('.es.') || name.includes('.fr.') || name.includes('.it.') || name.includes('.pt.') || name.includes('.nl.') || name.includes('.sv.') || name.includes('.no.') || name.includes('.pl.')) continue
      if (dir === 'site' && name === 'pages.yaml') continue
      const noName = name.replace(/(\.(yaml|mdx|md))$/, '.no$1')
      if (!existsSync(resolve(contentRoot, `${dir}/${noName}`))) {
        missing.push(`${dir}/${name}`)
      }
    }
  }
  expect(missing).toEqual([])
})

test('no content files contain no leftover /sv or /nl links', () => {
  const leftover: string[] = []
  const dirs = ['pages', 'news', 'products', 'technology', 'case-use', 'site']
  for (const dir of dirs) {
    for (const name of readdirSync(resolve(contentRoot, dir))) {
      if (!name.includes('.no.')) continue
      const raw = readFileSync(resolve(contentRoot, `${dir}/${name}`), 'utf8')
      if (/(["'\s(])\/(sv|nl)\//.test(raw)) leftover.push(`${dir}/${name}`)
    }
  }
  expect(leftover).toEqual([])
})

/* ─────────────────────── TS data layer (Part B) ─────────────────────── */

function assertNorwegian(failures: string[], label: string, sample: string) {
  if (!isNorwegian(sample)) failures.push(`${label}: not Norwegian (${sample.slice(0, 60)})`)
}

test('no knowledge articles are Norwegian with en slug parity', () => {
  const en = knowledge.en
  const no = pick(knowledge, 'no')
  const failures: string[] = []
  expect(knowledge.no).toBeDefined()
  for (const a of en) {
    const f = no.find((x) => x.slug === a.slug)
    if (!f) { failures.push(`${a.slug}: missing in no`); continue }
    assertNorwegian(
      failures,
      `${a.slug}.h1`,
      `${f.h1} ${f.intro} ${f.sections.map((x) => `${x.title} ${x.body.join(' ')}`).join(' ')}`,
    )
  }
  expect(failures).toEqual([])
  expect(knowledgeMeta.no.metaTitle).toBeDefined()
  assertNorwegian(failures, 'knowledgeMeta.metaTitle', knowledgeMeta.no.metaTitle)
  expect(failures).toEqual([])
})

test('no projects are Norwegian with en slug parity and invariant assets', () => {
  const en = projects.en
  const no = pick(projects, 'no')
  const failures: string[] = []
  expect(no.length).toBe(en.length)
  for (const p of en) {
    const f = no.find((x) => x.slug === p.slug)
    if (!f) { failures.push(`${p.slug}: missing in no`); continue }
    assertNorwegian(
      failures,
      `${p.slug}.content`,
      `${f.h1} ${f.intro.join(' ')} ${f.process.map((x) => x.title).join(' ')} ${f.customizations.join(' ')} ${f.inspectionFocus.join(' ')} ${f.outcome}`,
    )
  }
  expect(failures).toEqual([])
  expect(projectsMeta.no.metaTitle).toBeDefined()
  assertNorwegian(failures, 'projectsMeta.metaTitle', projectsMeta.no.metaTitle)
  expect(failures).toEqual([])
})

test('no series landing pages are Norwegian with en slug parity', () => {
  const en = seriesPages.en
  const no = pick(seriesPages, 'no')
  const failures: string[] = []
  expect(no.length).toBe(en.length)
  for (const s of en) {
    const f = no.find((x) => x.slug === s.slug)
    if (!f) { failures.push(`${s.slug}: missing in no`); continue }
    assertNorwegian(failures, `${s.slug}.h1`, `${f.h1} ${f.intro}`)
  }
  expect(failures).toEqual([])
})

test('no solution pages are Norwegian with en slug parity', () => {
  const en = solutionPages.en
  const no = pick(solutionPages, 'no')
  const failures: string[] = []
  expect(no.length).toBe(en.length)
  for (const s of en) {
    const f = no.find((x) => x.slug === s.slug)
    if (!f) { failures.push(`${s.slug}: missing in no`); continue }
    assertNorwegian(failures, `${s.slug}.h1`, `${f.h1} ${f.intro}`)
  }
  expect(failures).toEqual([])
})

test('no guides are Norwegian with en slug parity', () => {
  const en = localizedGuides('en')
  const no = localizedGuides('no')
  const failures: string[] = []
  expect(no.length).toBe(en.length)
  for (const g of en) {
    const f = no.find((x) => x.slug === g.slug)
    if (!f) { failures.push(`${g.slug}: missing in no`); continue }
    assertNorwegian(failures, `${g.slug}.intro`, `${f.title} ${f.intro}`)
  }
  expect(failures).toEqual([])
  const cards = GUIDE_CARDS.no
  expect(cards.length).toBe(GUIDE_CARDS.en.length)
})

test('no home & catalog content is Norwegian', () => {
  const failures: string[] = []
  assertNorwegian(failures, 'hero.title', `${pick(hero, 'no').titlePre} ${pick(hero, 'no').titleAccent} ${pick(hero, 'no').sub}`)
  assertNorwegian(failures, 'products.tagline', pick(products, 'no').title)
  const noItems = pick(products, 'no').items
  const enItems = products.en.items
  expect(noItems.length).toBe(enItems.length)
  for (const item of enItems) {
    const f = noItems.find((x) => x.slug === item.slug)
    if (!f) { failures.push(`${item.slug}: missing in no products`); continue }
    assertNorwegian(failures, `${item.slug}.desc`, `${f.tagline} ${f.desc} ${f.uses.join(' ')} ${f.for.join(' ')}`)
  }
  assertNorwegian(failures, 'series.title', `${pick(series, 'no').title} ${pick(series, 'no').items[0].title}`)
  assertNorwegian(failures, 'about.story', pick(about, 'no').story.join(' '))
  assertNorwegian(failures, 'solve.title', `${pick(solve, 'no').title} ${pick(solve, 'no').items[0].title}`)
  assertNorwegian(failures, 'faq', `${pick(faq, 'no').title} ${pick(faq, 'no').items[0].q}`)
  expect(failures).toEqual([])
})

test('no procurement profiles are Norwegian with en key parity', () => {
  const en = procurementProfiles.en
  const no = procurementProfiles.no
  const failures: string[] = []
  expect(Object.keys(no).sort()).toEqual(Object.keys(en).sort())
  for (const slug of Object.keys(en)) {
    const f = no[slug]
    if (!f) { failures.push(`${slug}: missing in no`); continue }
    assertNorwegian(failures, `${slug}.bestFor`, `${f.bestFor} ${f.customization ?? ''}`)
  }
  expect(failures).toEqual([])
})

test('no product-page customization & OEM application sections are Norwegian', () => {
  expect(CUSTOMIZATION_OPTIONS.no).toBeDefined()
  expect(OEM_APPLICATIONS.no).toBeDefined()
  expect(CUSTOMIZATION_OPTIONS.no.length).toBe(CUSTOMIZATION_OPTIONS.en.length)
  expect(OEM_APPLICATIONS.no.length).toBe(OEM_APPLICATIONS.en.length)
  const failures: string[] = []
  for (let i = 0; i < CUSTOMIZATION_OPTIONS.en.length; i++) {
    assertNorwegian(failures, `customization #${i}`, CUSTOMIZATION_OPTIONS.no[i].title + ' ' + CUSTOMIZATION_OPTIONS.no[i].body)
  }
  for (let i = 0; i < OEM_APPLICATIONS.en.length; i++) {
    assertNorwegian(failures, `oem-application #${i}`, OEM_APPLICATIONS.no[i].title + ' ' + OEM_APPLICATIONS.no[i].body)
  }
  expect(failures).toEqual([])
})

test('no product FAQ pool is Norwegian (not Spanish/German/French-Italian/en fallback)', () => {
  expect(PRODUCT_FAQ_POOL.no.length).toBe(PRODUCT_FAQ_POOL.en.length)
  const failures: string[] = []
  for (let i = 0; i < PRODUCT_FAQ_POOL.en.length; i++) {
    const qa = `${PRODUCT_FAQ_POOL.no[i].q} ${PRODUCT_FAQ_POOL.no[i].a}`
    assertNorwegian(failures, `faq #${i}`, qa)
    expect(qa).not.toMatch(/[¿¡ñ]/i)
    expect(qa).not.toMatch(/[àèìòù]/i)
    expect(qa).not.toMatch(/[üß]/i)
    expect(PRODUCT_FAQ_POOL.no[i].q).not.toBe(PRODUCT_FAQ_POOL.en[i].q)
  }
  expect(failures).toEqual([])
})

test('localized facts (FACTS_LOCALE) provide Norwegian shorthands', () => {
  const noAll = Object.values(FACTS_LOCALE.no).flat().join(' ') + Object.values(FACTS_LOCALE.no.moq).join(' ')
  expect(noAll).toMatch(/stk\b|dager|timer/)
  expect(noAll.toLowerCase()).not.toMatch(/\bpcs\b|\bdays\b|\border\b/)
  expect(noAll).not.toMatch(/[¿¡ñ]/i)
  expect(noAll).not.toMatch(/[àèìòù]/i)
  expect(noAll).not.toMatch(/[üß]/i)
  expect(noAll).not.toMatch(/é/)
})