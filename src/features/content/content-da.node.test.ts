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

/** Danish markers: æøå diacritics, common Danish function words, or product-domain words (prefix match covers inflections). */
const DANISH_RE = /[æøåÆØÅ]|\b(og|en|et|for|med|ikke|er|til|fra|på|som|har|kan|skal|vil|var|der|hvor|når|får|giver|bliver|os|vores|også|bare|derfor|efter|mellem|over|under|hver|alle|disse|hvilke|hvordan|hvad|hvem|dette|bræt|brættet|brætter|oppustelig|oppustelige|padle|pagaj|finne|dæk|produktion|produktions|produc\w*|tilbyd\w*|udvikl\w*|spørgsmål\w*|ordre|leverings?|garanti|kvalitet|kunde|kunder|fabrik|distributør|forhandler|engros|certificering|overensstemmelse|sporbarhed|emballage|prøve|forsendelse|vilkår|svejsning|ventiler|dage|min|læsning|tematisk|udgave|udgaven|udgaver)\b/i

function isDanish(text: string): boolean {
  return DANISH_RE.test(text)
}

function pageSlugToDaFile(slug: string): string {
  return resolve(contentRoot, `pages/${slug}.da.yaml`)
}

test('da pages load Danish content (not en fallback)', () => {
  const failures: string[] = []
  for (const path of getPublicPaths()) {
    const slug = path.split('/').filter(Boolean).pop() ?? ''
    if (!existsSync(pageSlugToDaFile(slug))) continue
    const en = getContentPage(path)
    const da = getContentPage(path, 'da')
    if (!da) { failures.push(`${path}: no da page`); continue }
    if (JSON.stringify(da.content) === JSON.stringify(en?.content ?? {})) {
      failures.push(`${path}: da content identical to en (fallback)`)
      continue
    }
    if (!isDanish(JSON.stringify({ ...da.meta, ...da.content }))) {
      failures.push(`${path}: da content has no Danish text`)
    }
  }
  expect(failures).toEqual([])
})

test('da news posts load Danish titles', () => {
  const en = getNewsPosts('en')
  const da = getNewsPosts('da')
  const failures: string[] = []
  for (const post of da) {
    const base = en.find((p) => p.slug === post.slug)
    if (!base || base.title === post.title) {
      failures.push(`${post.slug}: da title fell back to en`)
      continue
    }
    if (!isDanish(post.title)) failures.push(`${post.slug}: title not Danish`)
  }
  expect(failures).toEqual([])
})

test('da products load Danish copy', () => {
  const en = getContentProducts('en')
  const da = getContentProducts('da')
  const failures: string[] = []
  for (const p of da) {
    const base = en.find((x) => x.slug === p.slug)
    if (!base) { failures.push(`${p.slug}: missing in en`); continue }
    // Product titles are locale-invariant brand names; translate the body/summary.
    const sample = `${p.summary ?? ''} ${p.description ?? ''} ${p.body ?? ''}`
    if (sample.length === 0) { failures.push(`${p.slug}: no copy to check`); continue }
    if (!isDanish(sample)) failures.push(`${p.slug}: product copy not Danish`)
  }
  expect(failures).toEqual([])
})

test('da technology articles load Danish copy', () => {
  const en = getTechArticles('en')
  const da = getTechArticles('da')
  const failures: string[] = []
  for (const a of da) {
    const base = en.find((x) => x.slug === a.slug)
    if (!base || base.title === a.title) { failures.push(`${a.slug}: da title fell back to en`); continue }
    const sample = `${a.title} ${a.summary ?? ''} ${a.body ?? ''}`
    if (!isDanish(sample)) failures.push(`${a.slug}: title not Danish`)
  }
  expect(failures).toEqual([])
})

test('da case-use articles load Danish copy', () => {
  const en = getCaseUses('en')
  const da = getCaseUses('da')
  const failures: string[] = []
  for (const c of da) {
    const base = en.find((x) => x.slug === c.slug)
    if (!base || base.title === c.title) { failures.push(`${c.slug}: da title fell back to en`); continue }
    if (!isDanish(c.title)) failures.push(`${c.slug}: title not Danish`)
  }
  expect(failures).toEqual([])
})

test('da research topics load Danish copy', () => {
  const en = getResearchTopics('en')
  const da = getResearchTopics('da')
  const failures: string[] = []
  for (const r of da) {
    const base = en.find((x) => x.slug === r.slug)
    if (!base || (base.category === r.category && base.readTime === r.readTime)) {
      failures.push(`${r.slug}: da overlay fell back to en`)
      continue
    }
    if (!isDanish(r.readTime)) failures.push(`${r.slug}: readTime not Danish (${r.readTime})`)
  }
  expect(failures).toEqual([])
})

test('da faqs load Danish questions', () => {
  const en = getSiteFaqs('en')
  const da = getSiteFaqs('da')
  if (en.length === 0 || da.length === 0) {
    expect(da.length).toBeGreaterThan(0)
    return
  }
  const failures: string[] = []
  for (let i = 0; i < Math.min(en.length, da.length); i++) {
    const enQ = en[i].q
    const daQ = da[i].q
    if (enQ === daQ) { failures.push(`faq #${i}: da question fell back to en`); continue }
    if (!isDanish(daQ)) failures.push(`faq #${i}: question not Danish`)
  }
  expect(failures).toEqual([])
})

test('every en content file has a .da counterpart (except locale-agnostic site/pages.yaml)', () => {
  const missing: string[] = []
  const dirs = ['pages', 'news', 'products', 'technology', 'case-use', 'site']
  for (const dir of dirs) {
    for (const name of readdirSync(resolve(contentRoot, dir))) {
      if (name.includes('.de.') || name.includes('.es.') || name.includes('.fr.') || name.includes('.it.') || name.includes('.pt.') || name.includes('.nl.') || name.includes('.sv.') || name.includes('.no.') || name.includes('.pl.') || name.includes('.da.') || name.includes('.fi.') || name.includes('.ru.') || name.includes('.cs.') || name.includes('.tr.')) continue
      if (dir === 'site' && name === 'pages.yaml') continue
      const daName = name.replace(/(\.(yaml|mdx|md))$/, '.da$1')
      if (!existsSync(resolve(contentRoot, `${dir}/${daName}`))) {
        missing.push(`${dir}/${name}`)
      }
    }
  }
  expect(missing).toEqual([])
})

test('da content files contain no leftover /sv /no /nl or /pl links', () => {
  const leftover: string[] = []
  const dirs = ['pages', 'news', 'products', 'technology', 'case-use', 'site']
  for (const dir of dirs) {
    for (const name of readdirSync(resolve(contentRoot, dir))) {
      if (!name.includes('.da.')) continue
      const raw = readFileSync(resolve(contentRoot, `${dir}/${name}`), 'utf8')
      if (/(["'\s(])\/(sv|nl|no|pl)\//.test(raw)) leftover.push(`${dir}/${name}`)
    }
  }
  expect(leftover).toEqual([])
})

/* ─────────────────────── TS data layer (Part B) ─────────────────────── */

function assertDanish(failures: string[], label: string, sample: string) {
  if (!isDanish(sample)) failures.push(`${label}: not Danish (${sample.slice(0, 60)})`)
}

test('da knowledge articles are Danish with en slug parity', () => {
  const en = knowledge.en
  const da = pick(knowledge, 'da')
  const failures: string[] = []
  expect(knowledge.da).toBeDefined()
  for (const a of en) {
    const f = da.find((x) => x.slug === a.slug)
    if (!f) { failures.push(`${a.slug}: missing in da`); continue }
    assertDanish(
      failures,
      `${a.slug}.h1`,
      `${f.h1} ${f.intro} ${f.sections.map((x) => `${x.title} ${x.body.join(' ')}`).join(' ')}`,
    )
  }
  expect(failures).toEqual([])
  expect(knowledgeMeta.da.metaTitle).toBeDefined()
  assertDanish(failures, 'knowledgeMeta.metaTitle', knowledgeMeta.da.metaTitle)
  expect(failures).toEqual([])
})

test('da projects are Danish with en slug parity and invariant assets', () => {
  const en = projects.en
  const da = pick(projects, 'da')
  const failures: string[] = []
  expect(da.length).toBe(en.length)
  for (const p of en) {
    const f = da.find((x) => x.slug === p.slug)
    if (!f) { failures.push(`${p.slug}: missing in da`); continue }
    assertDanish(
      failures,
      `${p.slug}.content`,
      `${f.h1} ${f.intro.join(' ')} ${f.process.map((x) => x.title).join(' ')} ${f.customizations.join(' ')} ${f.inspectionFocus.join(' ')} ${f.outcome}`,
    )
  }
  expect(failures).toEqual([])
  expect(projectsMeta.da.metaTitle).toBeDefined()
  assertDanish(failures, 'projectsMeta.metaTitle', projectsMeta.da.metaTitle)
  expect(failures).toEqual([])
})

test('da series landing pages are Danish with en slug parity', () => {
  const en = seriesPages.en
  const da = pick(seriesPages, 'da')
  const failures: string[] = []
  expect(da.length).toBe(en.length)
  for (const s of en) {
    const f = da.find((x) => x.slug === s.slug)
    if (!f) { failures.push(`${s.slug}: missing in da`); continue }
    assertDanish(failures, `${s.slug}.h1`, `${f.h1} ${f.intro}`)
  }
  expect(failures).toEqual([])
})

test('da solution pages are Danish with en slug parity', () => {
  const en = solutionPages.en
  const da = pick(solutionPages, 'da')
  const failures: string[] = []
  expect(da.length).toBe(en.length)
  for (const s of en) {
    const f = da.find((x) => x.slug === s.slug)
    if (!f) { failures.push(`${s.slug}: missing in da`); continue }
    assertDanish(failures, `${s.slug}.h1`, `${f.h1} ${f.intro}`)
  }
  expect(failures).toEqual([])
})

test('da guides are Danish with en slug parity', () => {
  const en = localizedGuides('en')
  const da = localizedGuides('da')
  const failures: string[] = []
  expect(da.length).toBe(en.length)
  for (const g of en) {
    const f = da.find((x) => x.slug === g.slug)
    if (!f) { failures.push(`${g.slug}: missing in da`); continue }
    assertDanish(failures, `${g.slug}.intro`, `${f.title} ${f.intro}`)
  }
  expect(failures).toEqual([])
  const cards = GUIDE_CARDS.da
  expect(cards.length).toBe(GUIDE_CARDS.en.length)
})

test('da home & catalog content is Danish', () => {
  const failures: string[] = []
  assertDanish(failures, 'hero.title', `${pick(hero, 'da').titlePre} ${pick(hero, 'da').titleAccent} ${pick(hero, 'da').sub}`)
  assertDanish(failures, 'products.tagline', pick(products, 'da').title)
  const daItems = pick(products, 'da').items
  const enItems = products.en.items
  expect(daItems.length).toBe(enItems.length)
  for (const item of enItems) {
    const f = daItems.find((x) => x.slug === item.slug)
    if (!f) { failures.push(`${item.slug}: missing in da products`); continue }
    assertDanish(failures, `${item.slug}.desc`, `${f.tagline} ${f.desc} ${f.uses.join(' ')} ${f.for.join(' ')}`)
  }
  assertDanish(failures, 'series.title', `${pick(series, 'da').title} ${pick(series, 'da').items[0].title}`)
  assertDanish(failures, 'about.story', pick(about, 'da').story.join(' '))
  assertDanish(failures, 'solve.title', `${pick(solve, 'da').title} ${pick(solve, 'da').items[0].title}`)
  assertDanish(failures, 'faq', `${pick(faq, 'da').title} ${pick(faq, 'da').items[0].q}`)
  expect(failures).toEqual([])
})

test('da procurement profiles are Danish with en key parity', () => {
  const en = procurementProfiles.en
  const da = procurementProfiles.da
  const failures: string[] = []
  expect(Object.keys(da).sort()).toEqual(Object.keys(en).sort())
  for (const slug of Object.keys(en)) {
    const f = da[slug]
    if (!f) { failures.push(`${slug}: missing in da`); continue }
    assertDanish(failures, `${slug}.bestFor`, `${f.bestFor} ${f.customization ?? ''}`)
  }
  expect(failures).toEqual([])
})

test('da product-page customization & OEM application sections are Danish', () => {
  expect(CUSTOMIZATION_OPTIONS.da).toBeDefined()
  expect(OEM_APPLICATIONS.da).toBeDefined()
  expect(CUSTOMIZATION_OPTIONS.da.length).toBe(CUSTOMIZATION_OPTIONS.en.length)
  expect(OEM_APPLICATIONS.da.length).toBe(OEM_APPLICATIONS.en.length)
  const failures: string[] = []
  for (let i = 0; i < CUSTOMIZATION_OPTIONS.en.length; i++) {
    assertDanish(failures, `customization #${i}`, CUSTOMIZATION_OPTIONS.da[i].title + ' ' + CUSTOMIZATION_OPTIONS.da[i].body)
  }
  for (let i = 0; i < OEM_APPLICATIONS.en.length; i++) {
    assertDanish(failures, `oem-application #${i}`, OEM_APPLICATIONS.da[i].title + ' ' + OEM_APPLICATIONS.da[i].body)
  }
  expect(failures).toEqual([])
})

test('da product FAQ pool is Danish (not Spanish/German/French-Italian/en fallback)', () => {
  expect(PRODUCT_FAQ_POOL.da.length).toBe(PRODUCT_FAQ_POOL.en.length)
  const failures: string[] = []
  for (let i = 0; i < PRODUCT_FAQ_POOL.en.length; i++) {
    const qa = `${PRODUCT_FAQ_POOL.da[i].q} ${PRODUCT_FAQ_POOL.da[i].a}`
    assertDanish(failures, `faq #${i}`, qa)
    expect(qa).not.toMatch(/[¿¡ñ]/i)
    expect(qa).not.toMatch(/[àèìòù]/i)
    expect(qa).not.toMatch(/[üß]/i)
    expect(PRODUCT_FAQ_POOL.da[i].q).not.toBe(PRODUCT_FAQ_POOL.en[i].q)
  }
  expect(failures).toEqual([])
})

test('localized facts (FACTS_LOCALE) provide Danish shorthands', () => {
  const daAll = Object.values(FACTS_LOCALE.da).flat().join(' ') + Object.values(FACTS_LOCALE.da.moq).join(' ')
  expect(daAll).toMatch(/stk\b|dage|min/)
  expect(daAll.toLowerCase()).not.toMatch(/\bpcs\b|\bdays\b|\border\b/)
  expect(daAll).not.toMatch(/[¿¡ñ]/i)
  expect(daAll).not.toMatch(/[àèìòù]/i)
  expect(daAll).not.toMatch(/[üß]/i)
  expect(daAll).not.toMatch(/é|ä|ö|ë/i)
})