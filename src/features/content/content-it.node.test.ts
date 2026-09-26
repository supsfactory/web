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

/** Italian markers: accented characters or common Italian tokens. */
const ITALIAN_RE = /[àèéìòùÀÈÉÌÒÙ]|\b(il|lo|la|gli|le|un|uno|una|dei|degli|delle|della|dello|di|con|per|in|su|che|chi|sono|sarà|saranno|hanno|tavola|tavole|fabbrica|produzione|imballaggio|campione|campioni|può|come|anche|alla|alle|dalla|dalle|nella|nelle|sulla|questo|questa|dove|quali|offre|sviluppo|prodotto|costruzione|nucleo|edizione|edizioni|tema|temi|touring|costiero|esplorazione|piattaforme|principianti|noleggio|servono|espone|anno|anni|tempo|qualsiasi|perché)\b/i

function isItalian(text: string): boolean {
  return ITALIAN_RE.test(text)
}

function pageSlugToItFile(slug: string): string {
  return resolve(contentRoot, `pages/${slug}.it.yaml`)
}

test('it pages load Italian content (not en fallback)', () => {
  const failures: string[] = []
  for (const path of getPublicPaths()) {
    const slug = path.split('/').filter(Boolean).pop() ?? ''
    if (!existsSync(pageSlugToItFile(slug))) continue
    const en = getContentPage(path)
    const it = getContentPage(path, 'it')
    if (!it) { failures.push(`${path}: no it page`); continue }
    if (JSON.stringify(it.content) === JSON.stringify(en?.content ?? {})) {
      failures.push(`${path}: it content identical to en (fallback)`)
      continue
    }
    if (!isItalian(JSON.stringify({ ...it.meta, ...it.content }))) {
      failures.push(`${path}: it content has no Italian text`)
    }
  }
  expect(failures).toEqual([])
})

test('it news posts load Italian titles', () => {
  const en = getNewsPosts('en')
  const it = getNewsPosts('it')
  const failures: string[] = []
  for (const post of it) {
    const base = en.find((p) => p.slug === post.slug)
    if (!base || base.title === post.title) {
      failures.push(`${post.slug}: it title fell back to en`)
      continue
    }
    if (!isItalian(post.title)) failures.push(`${post.slug}: title not Italian`)
  }
  expect(failures).toEqual([])
})

test('it products load Italian copy', () => {
  const en = getContentProducts('en')
  const it = getContentProducts('it')
  const failures: string[] = []
  for (const p of it) {
    const base = en.find((x) => x.slug === p.slug)
    if (!base) { failures.push(`${p.slug}: missing in en`); continue }
    // Product titles are locale-invariant brand names; translate the body/summary.
    const sample = `${p.summary ?? ''} ${p.description ?? ''} ${p.body ?? ''}`
    if (sample.length === 0) { failures.push(`${p.slug}: no copy to check`); continue }
    if (!isItalian(sample)) failures.push(`${p.slug}: product copy not Italian`)
  }
  expect(failures).toEqual([])
})

test('it technology articles load Italian copy', () => {
  const en = getTechArticles('en')
  const it = getTechArticles('it')
  const failures: string[] = []
  for (const a of it) {
    const base = en.find((x) => x.slug === a.slug)
    if (!base || base.title === a.title) { failures.push(`${a.slug}: it title fell back to en`); continue }
    if (!isItalian(a.title)) failures.push(`${a.slug}: title not Italian`)
  }
  expect(failures).toEqual([])
})

test('it case-use articles load Italian copy', () => {
  const en = getCaseUses('en')
  const it = getCaseUses('it')
  const failures: string[] = []
  for (const c of it) {
    const base = en.find((x) => x.slug === c.slug)
    if (!base || base.title === c.title) { failures.push(`${c.slug}: it title fell back to en`); continue }
    if (!isItalian(c.title)) failures.push(`${c.slug}: title not Italian`)
  }
  expect(failures).toEqual([])
})

test('it research topics load Italian copy', () => {
  const en = getResearchTopics('en')
  const it = getResearchTopics('it')
  const failures: string[] = []
  for (const r of it) {
    const base = en.find((x) => x.slug === r.slug)
    if (!base || (base.category === r.category && base.readTime === r.readTime)) {
      failures.push(`${r.slug}: it overlay fell back to en`)
      continue
    }
    if (!isItalian(r.readTime)) failures.push(`${r.slug}: readTime not Italian (${r.readTime})`)
  }
  expect(failures).toEqual([])
})

test('it faqs load Italian questions', () => {
  const en = getSiteFaqs('en')
  const it = getSiteFaqs('it')
  if (en.length === 0 || it.length === 0) {
    expect(it.length).toBeGreaterThan(0)
    return
  }
  const failures: string[] = []
  for (let i = 0; i < Math.min(en.length, it.length); i++) {
    const enQ = en[i].q
    const itQ = it[i].q
    if (enQ === itQ) { failures.push(`faq #${i}: it question fell back to en`); continue }
    if (!isItalian(itQ)) failures.push(`faq #${i}: question not Italian`)
  }
  expect(failures).toEqual([])
})

test('every en content file has a .it counterpart (except locale-agnostic site/pages.yaml)', () => {
  const missing: string[] = []
  const dirs = ['pages', 'news', 'products', 'technology', 'case-use', 'site']
  for (const dir of dirs) {
    for (const name of readdirSync(resolve(contentRoot, dir))) {
      if (name.includes('.it.') || name.includes('.es.') || name.includes('.fr.') || name.includes('.de.') || name.includes('.pt.') || name.includes('.nl.') || name.includes('.sv.') || name.includes('.no.') || name.includes('.pl.')) continue
      if (dir === 'site' && name === 'pages.yaml') continue
      const itName = name.replace(/(\.(yaml|mdx|md))$/, '.it$1')
      if (!existsSync(resolve(contentRoot, `${dir}/${itName}`))) {
        missing.push(`${dir}/${name}`)
      }
    }
  }
  expect(missing).toEqual([])
})

/* ─────────────────────── TS data layer (Part B) ─────────────────────── */

function assertItalian(failures: string[], label: string, sample: string) {
  if (!isItalian(sample)) failures.push(`${label}: not Italian (${sample.slice(0, 60)})`)
}

test('it knowledge articles are Italian with en slug parity', () => {
  const en = knowledge.en
  const it = pick(knowledge, 'it')
  const failures: string[] = []
  expect(knowledge.es).toBeDefined()
  for (const a of en) {
    const f = it.find((x) => x.slug === a.slug)
    if (!f) { failures.push(`${a.slug}: missing in it`); continue }
    assertItalian(
      failures,
      `${a.slug}.h1`,
      `${f.h1} ${f.intro} ${f.sections.map((x) => `${x.title} ${x.body.join(' ')}`).join(' ')}`,
    )
  }
  expect(failures).toEqual([])
  expect(knowledgeMeta.it.metaTitle).toBeDefined()
  assertItalian(failures, 'knowledgeMeta.metaTitle', knowledgeMeta.it.metaTitle)
  expect(failures).toEqual([])
})

test('it projects are Italian with en slug parity and invariant assets', () => {
  const en = projects.en
  const it = pick(projects, 'it')
  const failures: string[] = []
  expect(it.length).toBe(en.length)
  for (const p of en) {
    const f = it.find((x) => x.slug === p.slug)
    if (!f) { failures.push(`${p.slug}: missing in it`); continue }
    assertItalian(
      failures,
      `${p.slug}.content`,
      `${f.h1} ${f.intro.join(' ')} ${f.process.map((x) => x.title).join(' ')} ${f.customizations.join(' ')} ${f.inspectionFocus.join(' ')} ${f.outcome}`,
    )
  }
  expect(failures).toEqual([])
  expect(projectsMeta.it.metaTitle).toBeDefined()
  assertItalian(failures, 'projectsMeta.metaTitle', projectsMeta.it.metaTitle)
  expect(failures).toEqual([])
})

test('it series landing pages are Italian with en slug parity', () => {
  const en = seriesPages.en
  const it = pick(seriesPages, 'it')
  const failures: string[] = []
  expect(it.length).toBe(en.length)
  for (const s of en) {
    const f = it.find((x) => x.slug === s.slug)
    if (!f) { failures.push(`${s.slug}: missing in it`); continue }
    assertItalian(failures, `${s.slug}.h1`, `${f.h1} ${f.intro}`)
  }
  expect(failures).toEqual([])
})

test('it solution pages are Italian with en slug parity', () => {
  const en = solutionPages.en
  const it = pick(solutionPages, 'it')
  const failures: string[] = []
  expect(it.length).toBe(en.length)
  for (const s of en) {
    const f = it.find((x) => x.slug === s.slug)
    if (!f) { failures.push(`${s.slug}: missing in it`); continue }
    assertItalian(failures, `${s.slug}.h1`, `${f.h1} ${f.intro}`)
  }
  expect(failures).toEqual([])
})

test('it guides are Italian with en slug parity', () => {
  const en = localizedGuides('en')
  const it = localizedGuides('it')
  const failures: string[] = []
  expect(it.length).toBe(en.length)
  for (const g of en) {
    const f = it.find((x) => x.slug === g.slug)
    if (!f) { failures.push(`${g.slug}: missing in it`); continue }
    assertItalian(failures, `${g.slug}.intro`, `${f.title} ${f.intro}`)
  }
  expect(failures).toEqual([])
  const cards = GUIDE_CARDS.it
  expect(cards.length).toBe(GUIDE_CARDS.en.length)
})

test('it home & catalog content is Italian', () => {
  const failures: string[] = []
  assertItalian(failures, 'hero.title', `${pick(hero, 'it').titlePre} ${pick(hero, 'it').titleAccent} ${pick(hero, 'it').sub}`)
  assertItalian(failures, 'products.tagline', pick(products, 'it').title)
  const itItems = pick(products, 'it').items
  const enItems = products.en.items
  expect(itItems.length).toBe(enItems.length)
  for (const item of enItems) {
    const f = itItems.find((x) => x.slug === item.slug)
    if (!f) { failures.push(`${item.slug}: missing in it products`); continue }
    assertItalian(failures, `${item.slug}.desc`, `${f.tagline} ${f.desc} ${f.uses.join(' ')} ${f.for.join(' ')}`)
  }
  assertItalian(failures, 'series.title', `${pick(series, 'it').title} ${pick(series, 'it').items[0].title}`)
  assertItalian(failures, 'about.story', pick(about, 'it').story.join(' '))
  assertItalian(failures, 'solve.title', `${pick(solve, 'it').title} ${pick(solve, 'it').items[0].title}`)
  assertItalian(failures, 'faq', `${pick(faq, 'it').title} ${pick(faq, 'it').items[0].q}`)
  expect(failures).toEqual([])
})

test('it procurement profiles are Italian with es key parity', () => {
  const en = procurementProfiles.en
  const it = procurementProfiles.it
  const failures: string[] = []
  expect(Object.keys(it).sort()).toEqual(Object.keys(en).sort())
  for (const slug of Object.keys(en)) {
    const f = it[slug]
    if (!f) { failures.push(`${slug}: missing in it`); continue }
    assertItalian(failures, `${slug}.bestFor`, `${f.bestFor} ${f.customization ?? ''}`)
  }
  expect(failures).toEqual([])
})

test('it product-page customization & OEM application sections are Italian', () => {
  expect(CUSTOMIZATION_OPTIONS.it).toBeDefined()
  expect(OEM_APPLICATIONS.it).toBeDefined()
  expect(CUSTOMIZATION_OPTIONS.it.length).toBe(CUSTOMIZATION_OPTIONS.en.length)
  expect(OEM_APPLICATIONS.it.length).toBe(OEM_APPLICATIONS.en.length)
  const failures: string[] = []
  for (let i = 0; i < CUSTOMIZATION_OPTIONS.en.length; i++) {
    assertItalian(failures, `customization #${i}`, CUSTOMIZATION_OPTIONS.it[i].title + ' ' + CUSTOMIZATION_OPTIONS.it[i].body)
  }
  for (let i = 0; i < OEM_APPLICATIONS.en.length; i++) {
    assertItalian(failures, `oem-application #${i}`, OEM_APPLICATIONS.it[i].title + ' ' + OEM_APPLICATIONS.it[i].body)
  }
  expect(failures).toEqual([])
})

test('it product FAQ pool is Italian (not Spanish/en fallback)', () => {
  expect(PRODUCT_FAQ_POOL.it.length).toBe(PRODUCT_FAQ_POOL.en.length)
  const failures: string[] = []
  for (let i = 0; i < PRODUCT_FAQ_POOL.en.length; i++) {
    const qa = `${PRODUCT_FAQ_POOL.it[i].q} ${PRODUCT_FAQ_POOL.it[i].a}`
    assertItalian(failures, `faq #${i}`, qa)
    expect(qa).not.toMatch(/[¿¡ñ]/i)
    expect(qa).not.toMatch(/[äöüß]/i)
    expect(PRODUCT_FAQ_POOL.it[i].q).not.toBe(PRODUCT_FAQ_POOL.en[i].q)
  }
  expect(failures).toEqual([])
})

test('localized facts (FACTS_LOCALE) provide Italian shorthands', () => {
  const itAll = Object.values(FACTS_LOCALE.it).flat().join(' ') + Object.values(FACTS_LOCALE.it.moq).join(' ')
  expect(itAll).toMatch(/giorni|unità/)
  expect(itAll.toLowerCase()).not.toMatch(/\bpcs\b|\bdays\b|\border\b/)
  expect(itAll).not.toMatch(/[¿¡ñ]/i)
  expect(itAll).not.toMatch(/[äöüß]/i)
})