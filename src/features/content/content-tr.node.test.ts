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

/** Turkish markers: Turkish diacritics (ğ ş ç ö ü ı İ) or common Turkish function words / product-domain stems. */
const TURKISH_RE =
  /[ğĞşŞçÇöÖüÜıİ]|\b(bir|ve|ile|için|olarak|gibi|ama|veya|sonra|önce|ayrıca|ancak|çünkü|hangi|bunlar|kendi|her|tüm|gerek)\b|\b(üretim|fabrik\w*|sup tahta\w*|tahta\w*|palet\w*|kürek\w*|şişirilebilir|enflasyon\w*|sipariş\w*|numun\w*|prototip\w*|parti\w*|seri\w*|kalite\w*|kontrol\w*|denetim\w*|teslimat\w*|paketleme\w*|garanti\w*|müşteri\w*|toptancı\w*|distribütör\w*|bayi\w*|belgelendirme\w*|uygunluk\w*|düzenl\w*|tasarım\w*|üretil\w*|özellik\w*|daldırma\w*|basınç\w*)\b/i

function isTurkish(text: string): boolean {
  return TURKISH_RE.test(text)
}

function pageSlugToTrFile(slug: string): string {
  return resolve(contentRoot, `pages/${slug}.tr.yaml`)
}

test('tr pages load Turkish content (not en fallback)', () => {
  const failures: string[] = []
  for (const path of getPublicPaths()) {
    const slug = path.split('/').filter(Boolean).pop() ?? ''
    if (!existsSync(pageSlugToTrFile(slug))) continue
    const en = getContentPage(path)
    const tr = getContentPage(path, 'tr')
    if (!tr) { failures.push(`${path}: no tr page`); continue }
    if (JSON.stringify(tr.content) === JSON.stringify(en?.content ?? {})) {
      failures.push(`${path}: tr content identical to en (fallback)`)
      continue
    }
    if (!isTurkish(JSON.stringify({ ...tr.meta, ...tr.content }))) {
      failures.push(`${path}: tr content has no Turkish text`)
    }
  }
  expect(failures).toEqual([])
})

test('tr news posts load Turkish titles', () => {
  const en = getNewsPosts('en')
  const tr = getNewsPosts('tr')
  const failures: string[] = []
  for (const post of tr) {
    const base = en.find((p) => p.slug === post.slug)
    if (!base || base.title === post.title) {
      failures.push(`${post.slug}: tr title fell back to en`)
      continue
    }
    if (!isTurkish(post.title)) failures.push(`${post.slug}: title not Turkish`)
  }
  expect(failures).toEqual([])
})

test('tr products load Turkish copy', () => {
  const en = getContentProducts('en')
  const tr = getContentProducts('tr')
  const failures: string[] = []
  for (const p of tr) {
    const base = en.find((x) => x.slug === p.slug)
    if (!base) { failures.push(`${p.slug}: missing in en`); continue }
    const sample = `${p.summary ?? ''} ${p.description ?? ''} ${p.body ?? ''}`
    if (sample.length === 0) { failures.push(`${p.slug}: no copy to check`); continue }
    if (!isTurkish(sample)) failures.push(`${p.slug}: product copy not Turkish`)
  }
  expect(failures).toEqual([])
})

test('tr technology articles load Turkish copy', () => {
  const en = getTechArticles('en')
  const tr = getTechArticles('tr')
  const failures: string[] = []
  for (const a of tr) {
    const base = en.find((x) => x.slug === a.slug)
    if (!base || base.title === a.title) { failures.push(`${a.slug}: tr title fell back to en`); continue }
    const sample = `${a.title} ${a.summary ?? ''} ${a.body ?? ''}`
    if (!isTurkish(sample)) failures.push(`${a.slug}: title not Turkish`)
  }
  expect(failures).toEqual([])
})

test('tr case-use articles load Turkish copy', () => {
  const en = getCaseUses('en')
  const tr = getCaseUses('tr')
  const failures: string[] = []
  for (const c of tr) {
    const base = en.find((x) => x.slug === c.slug)
    if (!base || base.title === c.title) { failures.push(`${c.slug}: tr title fell back to en`); continue }
    if (!isTurkish(c.title)) failures.push(`${c.slug}: title not Turkish`)
  }
  expect(failures).toEqual([])
})

test('tr research topics load Turkish copy', () => {
  const en = getResearchTopics('en')
  const tr = getResearchTopics('tr')
  const failures: string[] = []
  for (const r of tr) {
    const base = en.find((x) => x.slug === r.slug)
    if (!base || (base.category === r.category && base.readTime === r.readTime)) {
      failures.push(`${r.slug}: tr overlay fell back to en`)
      continue
    }
    if (!isTurkish(r.readTime)) failures.push(`${r.slug}: readTime not Turkish (${r.readTime})`)
  }
  expect(failures).toEqual([])
})

test('tr faqs load Turkish questions', () => {
  const en = getSiteFaqs('en')
  const tr = getSiteFaqs('tr')
  if (en.length === 0 || tr.length === 0) {
    expect(tr.length).toBeGreaterThan(0)
    return
  }
  const failures: string[] = []
  for (let i = 0; i < Math.min(en.length, tr.length); i++) {
    const enQ = en[i].q
    const trQ = tr[i].q
    if (enQ === trQ) { failures.push(`faq #${i}: tr question fell back to en`); continue }
    if (!isTurkish(trQ)) failures.push(`faq #${i}: question not Turkish`)
  }
  expect(failures).toEqual([])
})

test('every en content file has a .tr counterpart (except locale-agnostic site/pages.yaml)', () => {
  const missing: string[] = []
  const dirs = ['pages', 'news', 'products', 'technology', 'case-use', 'site']
  for (const dir of dirs) {
    for (const name of readdirSync(resolve(contentRoot, dir))) {
      if (name.includes('.de.') || name.includes('.es.') || name.includes('.fr.') || name.includes('.it.') || name.includes('.pt.') || name.includes('.nl.') || name.includes('.sv.') || name.includes('.no.') || name.includes('.pl.') || name.includes('.da.') || name.includes('.fi.') || name.includes('.ru.') || name.includes('.cs.') || name.includes('.tr.') || name.includes('.hu.') || name.includes('.ro.')) continue
      if (dir === 'site' && name === 'pages.yaml') continue
      const trName = name.replace(/(\.(yaml|mdx|md))$/, '.tr$1')
      if (!existsSync(resolve(contentRoot, `${dir}/${trName}`))) {
        missing.push(`${dir}/${name}`)
      }
    }
  }
  expect(missing).toEqual([])
})

test('tr content files contain no leftover /es /fr /de /it /pt /nl /sv /no /pl /da /fi /ru or /cs links', () => {
  const leftover: string[] = []
  const dirs = ['pages', 'news', 'products', 'technology', 'case-use', 'site']
  for (const dir of dirs) {
    for (const name of readdirSync(resolve(contentRoot, dir))) {
      if (!name.includes('.tr.')) continue
      const raw = readFileSync(resolve(contentRoot, `${dir}/${name}`), 'utf8')
      if (/(["'\s(])\/(es|fr|de|it|pt|nl|sv|no|pl|da|fi|ru|cs)\//.test(raw)) leftover.push(`${dir}/${name}`)
    }
  }
  expect(leftover).toEqual([])
})

test('tr content files contain no forbidden diacritics or Cyrillic', () => {
  const forbidden: string[] = []
  const dirs = ['pages', 'news', 'products', 'technology', 'case-use', 'site']
  const RE_FORBIDDEN = /[ßåæøąęśłżźãõẞ]|[\u0300-\u036F]|[\u0400-\u04FF]/
  const RE_NON_TURKISH = /[áéíóúýäëïàèìòùâêîôûñ]/
  for (const dir of dirs) {
    for (const name of readdirSync(resolve(contentRoot, dir))) {
      if (!name.includes('.tr.')) continue
      const raw = readFileSync(resolve(contentRoot, `${dir}/${name}`), 'utf8')
      if (RE_FORBIDDEN.test(raw)) forbidden.push(`${dir}/${name}: forbidden char`)
      if (RE_NON_TURKISH.test(raw.replace(/TÜV/g, ''))) forbidden.push(`${dir}/${name}: non-Turkish diacritic`)
    }
  }
  expect(forbidden).toEqual([])
})

/* ─────────────────────── TS data layer (Part B) ─────────────────────── */

function assertTurkish(failures: string[], label: string, sample: string) {
  if (!isTurkish(sample)) failures.push(`${label}: not Turkish (${sample.slice(0, 60)})`)
}

test('tr knowledge articles are Turkish with en slug parity', () => {
  const en = knowledge.en
  const tr = pick(knowledge, 'tr')
  const failures: string[] = []
  expect(knowledge.tr).toBeDefined()
  for (const a of en) {
    const f = tr.find((x) => x.slug === a.slug)
    if (!f) { failures.push(`${a.slug}: missing in tr`); continue }
    assertTurkish(
      failures,
      `${a.slug}.h1`,
      `${f.h1} ${f.intro} ${f.sections.map((x) => `${x.title} ${x.body.join(' ')}`).join(' ')}`,
    )
  }
  expect(failures).toEqual([])
  expect(knowledgeMeta.tr.metaTitle).toBeDefined()
  assertTurkish(failures, 'knowledgeMeta.metaTitle', knowledgeMeta.tr.metaTitle)
  expect(failures).toEqual([])
})

test('tr projects are Turkish with en slug parity and invariant assets', () => {
  const en = projects.en
  const tr = pick(projects, 'tr')
  const failures: string[] = []
  expect(tr.length).toBe(en.length)
  for (const p of en) {
    const f = tr.find((x) => x.slug === p.slug)
    if (!f) { failures.push(`${p.slug}: missing in tr`); continue }
    assertTurkish(
      failures,
      `${p.slug}.content`,
      `${f.h1} ${f.intro.join(' ')} ${f.process.map((x) => x.title).join(' ')} ${f.customizations.join(' ')} ${f.inspectionFocus.join(' ')} ${f.outcome}`,
    )
  }
  expect(failures).toEqual([])
  expect(projectsMeta.tr.metaTitle).toBeDefined()
  assertTurkish(failures, 'projectsMeta.metaTitle', projectsMeta.tr.metaTitle)
  expect(failures).toEqual([])
})

test('tr series landing pages are Turkish with en slug parity', () => {
  const en = seriesPages.en
  const tr = pick(seriesPages, 'tr')
  const failures: string[] = []
  expect(tr.length).toBe(en.length)
  for (const s of en) {
    const f = tr.find((x) => x.slug === s.slug)
    if (!f) { failures.push(`${s.slug}: missing in tr`); continue }
    assertTurkish(failures, `${s.slug}.h1`, `${f.h1} ${f.intro}`)
  }
  expect(failures).toEqual([])
})

test('tr solution pages are Turkish with en slug parity', () => {
  const en = solutionPages.en
  const tr = pick(solutionPages, 'tr')
  const failures: string[] = []
  expect(tr.length).toBe(en.length)
  for (const s of en) {
    const f = tr.find((x) => x.slug === s.slug)
    if (!f) { failures.push(`${s.slug}: missing in tr`); continue }
    assertTurkish(failures, `${s.slug}.h1`, `${f.h1} ${f.intro}`)
  }
  expect(failures).toEqual([])
})

test('tr guides are Turkish with en slug parity', () => {
  const en = localizedGuides('en')
  const tr = localizedGuides('tr')
  const failures: string[] = []
  expect(tr.length).toBe(en.length)
  for (const g of en) {
    const f = tr.find((x) => x.slug === g.slug)
    if (!f) { failures.push(`${g.slug}: missing in tr`); continue }
    assertTurkish(failures, `${g.slug}.intro`, `${f.title} ${f.intro}`)
  }
  expect(failures).toEqual([])
  const cards = GUIDE_CARDS.tr
  expect(cards.length).toBe(GUIDE_CARDS.en.length)
})

test('tr home & catalog content is Turkish', () => {
  const failures: string[] = []
  assertTurkish(failures, 'hero.title', `${pick(hero, 'tr').titlePre} ${pick(hero, 'tr').titleAccent} ${pick(hero, 'tr').sub}`)
  assertTurkish(failures, 'products.tagline', pick(products, 'tr').title)
  const trItems = pick(products, 'tr').items
  const enItems = products.en.items
  expect(trItems.length).toBe(enItems.length)
  for (const item of enItems) {
    const f = trItems.find((x) => x.slug === item.slug)
    if (!f) { failures.push(`${item.slug}: missing in tr products`); continue }
    assertTurkish(failures, `${item.slug}.desc`, `${f.tagline} ${f.desc} ${f.uses.join(' ')} ${f.for.join(' ')}`)
  }
  assertTurkish(failures, 'series.title', `${pick(series, 'tr').title} ${pick(series, 'tr').items[0].title}`)
  assertTurkish(failures, 'about.story', pick(about, 'tr').story.join(' '))
  assertTurkish(failures, 'solve.title', `${pick(solve, 'tr').title} ${pick(solve, 'tr').items[0].title}`)
  assertTurkish(failures, 'faq', `${pick(faq, 'tr').title} ${pick(faq, 'tr').items[0].q}`)
  expect(failures).toEqual([])
})

test('tr procurement profiles are Turkish with en key parity', () => {
  const en = procurementProfiles.en
  const tr = procurementProfiles.tr
  const failures: string[] = []
  expect(Object.keys(tr).sort()).toEqual(Object.keys(en).sort())
  for (const slug of Object.keys(en)) {
    const f = tr[slug]
    if (!f) { failures.push(`${slug}: missing in tr`); continue }
    assertTurkish(failures, `${slug}.bestFor`, `${f.bestFor} ${f.customization ?? ''}`)
  }
  expect(failures).toEqual([])
})

test('tr product-page customization & OEM application sections are Turkish', () => {
  expect(CUSTOMIZATION_OPTIONS.tr).toBeDefined()
  expect(OEM_APPLICATIONS.tr).toBeDefined()
  expect(CUSTOMIZATION_OPTIONS.tr.length).toBe(CUSTOMIZATION_OPTIONS.en.length)
  expect(OEM_APPLICATIONS.tr.length).toBe(OEM_APPLICATIONS.en.length)
  const failures: string[] = []
  for (let i = 0; i < CUSTOMIZATION_OPTIONS.en.length; i++) {
    assertTurkish(failures, `customization #${i}`, CUSTOMIZATION_OPTIONS.tr[i].title + ' ' + CUSTOMIZATION_OPTIONS.tr[i].body)
  }
  for (let i = 0; i < OEM_APPLICATIONS.en.length; i++) {
    assertTurkish(failures, `oem-application #${i}`, OEM_APPLICATIONS.tr[i].title + ' ' + OEM_APPLICATIONS.tr[i].body)
  }
  expect(failures).toEqual([])
})

test('tr product FAQ pool is Turkish (no Spanish/German/French en fallback)', () => {
  expect(PRODUCT_FAQ_POOL.tr.length).toBe(PRODUCT_FAQ_POOL.en.length)
  const failures: string[] = []
  for (let i = 0; i < PRODUCT_FAQ_POOL.en.length; i++) {
    const qa = `${PRODUCT_FAQ_POOL.tr[i].q} ${PRODUCT_FAQ_POOL.tr[i].a}`.replace(/TÜV/g, '')
    assertTurkish(failures, `faq #${i}`, qa)
    expect(qa).not.toMatch(/[¿¡ñ]/i)
    expect(qa).not.toMatch(/[àèìòù]/i)
    expect(qa).not.toMatch(/[äëï]/i)
    expect(qa).not.toMatch(/[\u0400-\u04FF]/)
    expect(PRODUCT_FAQ_POOL.tr[i].q).not.toBe(PRODUCT_FAQ_POOL.en[i].q)
  }
  expect(failures).toEqual([])
})

test('localized facts (FACTS_LOCALE) provide Turkish shorthands', () => {
  const trAll = Object.values(FACTS_LOCALE.tr).flat().join(' ') + Object.values(FACTS_LOCALE.tr.moq).join(' ')
  expect(trAll).toMatch(/adet|gün|rulo|kalıp/)
  expect(trAll.toLowerCase()).not.toMatch(/\bpcs\b|\bdays\b|\border\b|\bpieces\b/)
  expect(trAll).not.toMatch(/[¿¡ñ]/i)
  expect(trAll).not.toMatch(/[àèìòù]/i)
  expect(trAll.replace(/TÜV/g, '')).not.toMatch(/[äëï]/i)
  expect(trAll).not.toMatch(/é|å|æ|ø|â|ê|î|ô|û/i)
  expect(trAll).not.toMatch(/[\u0400-\u04FF]/)
})