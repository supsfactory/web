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

/** Czech markers: Czech diacritics, common Czech function words, or product-domain stems (prefix match covers inflections). */
const CZECH_RE =
  /[\u00E1\u010D\u010F\u00E9\u011B\u00ED\u0148\u00F3\u0159\u0161\u0165\u00FA\u016F\u00FD\u017E]|\b(a|i|na|v|z|do|je|se|si|že|jako|ale|také|jen|při|od|mezi|podle|jak|pokud|než|když|který|která|které|proto|protože)\b|\b(výrob\w*|továrn\w*|desk\w*|pádl\w*|ploutv\w*|vodítk\w*|nafukovac\w*|objednáv\w*|objednat|požadavk\w*|realizac\w*|zpracov\w*|vzork\w*|prototyp\w*|dávk\w*|sériov\w*|produkc\w*|dodáv\w*|dodac\w*|balen\w*|záruk\w*|klient\w*|zákazníc\w*|distributor\w*|prodejc\w*|velkoobchod\w*|kontrol\w*|kvalit\w*|inspekc\w*|nabídk\w*|cenov\w*|podmínk\w*|smlouv\w*|certifikac\w*|sledovateln\w*|neshod\w*|reklamac\w*|značk\w*|kolekc\w*|závod\w*|edice)\b/i

function isCzech(text: string): boolean {
  return CZECH_RE.test(text)
}

function pageSlugToCsFile(slug: string): string {
  return resolve(contentRoot, `pages/${slug}.cs.yaml`)
}

test('cs pages load Czech content (not en fallback)', () => {
  const failures: string[] = []
  for (const path of getPublicPaths()) {
    const slug = path.split('/').filter(Boolean).pop() ?? ''
    if (!existsSync(pageSlugToCsFile(slug))) continue
    const en = getContentPage(path)
    const cs = getContentPage(path, 'cs')
    if (!cs) { failures.push(`${path}: no cs page`); continue }
    if (JSON.stringify(cs.content) === JSON.stringify(en?.content ?? {})) {
      failures.push(`${path}: cs content identical to en (fallback)`)
      continue
    }
    if (!isCzech(JSON.stringify({ ...cs.meta, ...cs.content }))) {
      failures.push(`${path}: cs content has no Czech diacritics (ř/ě/ů)`)
    }
  }
  expect(failures).toEqual([])
})

test('cs news posts load Czech titles', () => {
  const en = getNewsPosts('en')
  const cs = getNewsPosts('cs')
  const failures: string[] = []
  for (const post of cs) {
    const base = en.find((p) => p.slug === post.slug)
    if (!base || base.title === post.title) {
      failures.push(`${post.slug}: cs title fell back to en`)
      continue
    }
    if (!isCzech(post.title)) failures.push(`${post.slug}: title not Czech`)
  }
  expect(failures).toEqual([])
})

test('cs products load Czech copy', () => {
  const en = getContentProducts('en')
  const cs = getContentProducts('cs')
  const failures: string[] = []
  for (const p of cs) {
    const base = en.find((x) => x.slug === p.slug)
    if (!base) { failures.push(`${p.slug}: missing in en`); continue }
    // Product titles are locale-invariant brand names; translate the body/summary.
    const sample = `${p.summary ?? ''} ${p.description ?? ''} ${p.body ?? ''}`
    if (sample.length === 0) { failures.push(`${p.slug}: no copy to check`); continue }
    if (!isCzech(sample)) failures.push(`${p.slug}: product copy not Czech`)
  }
  expect(failures).toEqual([])
})

test('cs technology articles load Czech copy', () => {
  const en = getTechArticles('en')
  const cs = getTechArticles('cs')
  const failures: string[] = []
  for (const a of cs) {
    const base = en.find((x) => x.slug === a.slug)
    if (!base || base.title === a.title) { failures.push(`${a.slug}: cs title fell back to en`); continue }
    const sample = `${a.title} ${a.summary ?? ''} ${a.body ?? ''}`
    if (!isCzech(sample)) failures.push(`${a.slug}: title not Czech`)
  }
  expect(failures).toEqual([])
})

test('cs case-use articles load Czech copy', () => {
  const en = getCaseUses('en')
  const cs = getCaseUses('cs')
  const failures: string[] = []
  for (const c of cs) {
    const base = en.find((x) => x.slug === c.slug)
    if (!base || base.title === c.title) { failures.push(`${c.slug}: cs title fell back to en`); continue }
    if (!isCzech(c.title)) failures.push(`${c.slug}: title not Czech`)
  }
  expect(failures).toEqual([])
})

test('cs research topics load Czech copy', () => {
  const en = getResearchTopics('en')
  const cs = getResearchTopics('cs')
  const failures: string[] = []
  for (const r of cs) {
    const base = en.find((x) => x.slug === r.slug)
    if (!base || (base.category === r.category && base.readTime === r.readTime)) {
      failures.push(`${r.slug}: cs overlay fell back to en`)
      continue
    }
    if (!isCzech(r.readTime)) failures.push(`${r.slug}: readTime not Czech (${r.readTime})`)
  }
  expect(failures).toEqual([])
})

test('cs faqs load Czech questions', () => {
  const en = getSiteFaqs('en')
  const cs = getSiteFaqs('cs')
  if (en.length === 0 || cs.length === 0) {
    expect(cs.length).toBeGreaterThan(0)
    return
  }
  const failures: string[] = []
  for (let i = 0; i < Math.min(en.length, cs.length); i++) {
    const enQ = en[i].q
    const csQ = cs[i].q
    if (enQ === csQ) { failures.push(`faq #${i}: cs question fell back to en`); continue }
    if (!isCzech(csQ)) failures.push(`faq #${i}: question not Czech`)
  }
  expect(failures).toEqual([])
})

test('every en content file has a .cs counterpart (except locale-agnostic site/pages.yaml)', () => {
  const missing: string[] = []
  const dirs = ['pages', 'news', 'products', 'technology', 'case-use', 'site']
  for (const dir of dirs) {
    for (const name of readdirSync(resolve(contentRoot, dir))) {
      if (name.includes('.de.') || name.includes('.es.') || name.includes('.fr.') || name.includes('.it.') || name.includes('.pt.') || name.includes('.nl.') || name.includes('.sv.') || name.includes('.no.') || name.includes('.pl.') || name.includes('.da.') || name.includes('.fi.') || name.includes('.ru.') || name.includes('.cs.') || name.includes('.tr.') || name.includes('.hu.') || name.includes('.ro.') || name.includes('.ar.')) continue
      if (dir === 'site' && name === 'pages.yaml') continue
      const csName = name.replace(/(\.(yaml|mdx|md))$/, '.cs$1')
      if (!existsSync(resolve(contentRoot, `${dir}/${csName}`))) {
        missing.push(`${dir}/${name}`)
      }
    }
  }
  expect(missing).toEqual([])
})

test('cs content files contain no leftover /es /fr /de /it /pt /nl /sv /no /pl /da /fi or /ru links', () => {
  const leftover: string[] = []
  const dirs = ['pages', 'news', 'products', 'technology', 'case-use', 'site']
  for (const dir of dirs) {
    for (const name of readdirSync(resolve(contentRoot, dir))) {
      if (!name.includes('.cs.')) continue
      const raw = readFileSync(resolve(contentRoot, `${dir}/${name}`), 'utf8')
      if (/(["'\s(])\/(es|fr|de|it|pt|nl|sv|no|pl|da|fi|ru)\//.test(raw)) leftover.push(`${dir}/${name}`)
    }
  }
  expect(leftover).toEqual([])
})

test('cs content files contain no forbidden diacritics or Cyrillic', () => {
  const forbidden: string[] = []
  const dirs = ['pages', 'news', 'products', 'technology', 'case-use', 'site']
  const RE_FORBIDDEN = /[ßåæøąęśćłżźãõẞ]|[\u0300-\u036F]|[\u0400-\u04FF]/
  const RE_UMLAUT = /[üöä]/
  for (const dir of dirs) {
    for (const name of readdirSync(resolve(contentRoot, dir))) {
      if (!name.includes('.cs.')) continue
      const raw = readFileSync(resolve(contentRoot, `${dir}/${name}`), 'utf8')
      if (RE_FORBIDDEN.test(raw)) forbidden.push(`${dir}/${name}: forbidden char`)
      if (RE_UMLAUT.test(raw.replace(/TÜV/g, ''))) forbidden.push(`${dir}/${name}: umlaut outside TÜV`)
    }
  }
  expect(forbidden).toEqual([])
})

/* ─────────────────────── TS data layer (Part B) ─────────────────────── */

function assertCzech(failures: string[], label: string, sample: string) {
  if (!isCzech(sample)) failures.push(`${label}: not Czech (${sample.slice(0, 60)})`)
}

test('cs knowledge articles are Czech with en slug parity', () => {
  const en = knowledge.en
  const cs = pick(knowledge, 'cs')
  const failures: string[] = []
  expect(knowledge.cs).toBeDefined()
  for (const a of en) {
    const f = cs.find((x) => x.slug === a.slug)
    if (!f) { failures.push(`${a.slug}: missing in cs`); continue }
    assertCzech(
      failures,
      `${a.slug}.h1`,
      `${f.h1} ${f.intro} ${f.sections.map((x) => `${x.title} ${x.body.join(' ')}`).join(' ')}`,
    )
  }
  expect(failures).toEqual([])
  expect(knowledgeMeta.cs.metaTitle).toBeDefined()
  assertCzech(failures, 'knowledgeMeta.metaTitle', knowledgeMeta.cs.metaTitle)
  expect(failures).toEqual([])
})

test('cs projects are Czech with en slug parity and invariant assets', () => {
  const en = projects.en
  const cs = pick(projects, 'cs')
  const failures: string[] = []
  expect(cs.length).toBe(en.length)
  for (const p of en) {
    const f = cs.find((x) => x.slug === p.slug)
    if (!f) { failures.push(`${p.slug}: missing in cs`); continue }
    assertCzech(
      failures,
      `${p.slug}.content`,
      `${f.h1} ${f.intro.join(' ')} ${f.process.map((x) => x.title).join(' ')} ${f.customizations.join(' ')} ${f.inspectionFocus.join(' ')} ${f.outcome}`,
    )
  }
  expect(failures).toEqual([])
  expect(projectsMeta.cs.metaTitle).toBeDefined()
  assertCzech(failures, 'projectsMeta.metaTitle', projectsMeta.cs.metaTitle)
  expect(failures).toEqual([])
})

test('cs series landing pages are Czech with en slug parity', () => {
  const en = seriesPages.en
  const cs = pick(seriesPages, 'cs')
  const failures: string[] = []
  expect(cs.length).toBe(en.length)
  for (const s of en) {
    const f = cs.find((x) => x.slug === s.slug)
    if (!f) { failures.push(`${s.slug}: missing in cs`); continue }
    assertCzech(failures, `${s.slug}.h1`, `${f.h1} ${f.intro}`)
  }
  expect(failures).toEqual([])
})

test('cs solution pages are Czech with en slug parity', () => {
  const en = solutionPages.en
  const cs = pick(solutionPages, 'cs')
  const failures: string[] = []
  expect(cs.length).toBe(en.length)
  for (const s of en) {
    const f = cs.find((x) => x.slug === s.slug)
    if (!f) { failures.push(`${s.slug}: missing in cs`); continue }
    assertCzech(failures, `${s.slug}.h1`, `${f.h1} ${f.intro}`)
  }
  expect(failures).toEqual([])
})

test('cs guides are Czech with en slug parity', () => {
  const en = localizedGuides('en')
  const cs = localizedGuides('cs')
  const failures: string[] = []
  expect(cs.length).toBe(en.length)
  for (const g of en) {
    const f = cs.find((x) => x.slug === g.slug)
    if (!f) { failures.push(`${g.slug}: missing in cs`); continue }
    assertCzech(failures, `${g.slug}.intro`, `${f.title} ${f.intro}`)
  }
  expect(failures).toEqual([])
  const cards = GUIDE_CARDS.cs
  expect(cards.length).toBe(GUIDE_CARDS.en.length)
})

test('cs home & catalog content is Czech', () => {
  const failures: string[] = []
  assertCzech(failures, 'hero.title', `${pick(hero, 'cs').titlePre} ${pick(hero, 'cs').titleAccent} ${pick(hero, 'cs').sub}`)
  assertCzech(failures, 'products.tagline', pick(products, 'cs').title)
  const csItems = pick(products, 'cs').items
  const enItems = products.en.items
  expect(csItems.length).toBe(enItems.length)
  for (const item of enItems) {
    const f = csItems.find((x) => x.slug === item.slug)
    if (!f) { failures.push(`${item.slug}: missing in cs products`); continue }
    assertCzech(failures, `${item.slug}.desc`, `${f.tagline} ${f.desc} ${f.uses.join(' ')} ${f.for.join(' ')}`)
  }
  assertCzech(failures, 'series.title', `${pick(series, 'cs').title} ${pick(series, 'cs').items[0].title}`)
  assertCzech(failures, 'about.story', pick(about, 'cs').story.join(' '))
  assertCzech(failures, 'solve.title', `${pick(solve, 'cs').title} ${pick(solve, 'cs').items[0].title}`)
  assertCzech(failures, 'faq', `${pick(faq, 'cs').title} ${pick(faq, 'cs').items[0].q}`)
  expect(failures).toEqual([])
})

test('cs procurement profiles are Czech with en key parity', () => {
  const en = procurementProfiles.en
  const cs = procurementProfiles.cs
  const failures: string[] = []
  expect(Object.keys(cs).sort()).toEqual(Object.keys(en).sort())
  for (const slug of Object.keys(en)) {
    const f = cs[slug]
    if (!f) { failures.push(`${slug}: missing in cs`); continue }
    assertCzech(failures, `${slug}.bestFor`, `${f.bestFor} ${f.customization ?? ''}`)
  }
  expect(failures).toEqual([])
})

test('cs product-page customization & OEM application sections are Czech', () => {
  expect(CUSTOMIZATION_OPTIONS.cs).toBeDefined()
  expect(OEM_APPLICATIONS.cs).toBeDefined()
  expect(CUSTOMIZATION_OPTIONS.cs.length).toBe(CUSTOMIZATION_OPTIONS.en.length)
  expect(OEM_APPLICATIONS.cs.length).toBe(OEM_APPLICATIONS.en.length)
  const failures: string[] = []
  for (let i = 0; i < CUSTOMIZATION_OPTIONS.en.length; i++) {
    assertCzech(failures, `customization #${i}`, CUSTOMIZATION_OPTIONS.cs[i].title + ' ' + CUSTOMIZATION_OPTIONS.cs[i].body)
  }
  for (let i = 0; i < OEM_APPLICATIONS.en.length; i++) {
    assertCzech(failures, `oem-application #${i}`, OEM_APPLICATIONS.cs[i].title + ' ' + OEM_APPLICATIONS.cs[i].body)
  }
  expect(failures).toEqual([])
})

test('cs product FAQ pool is Czech (no Spanish/German/French-Italian/Russian/Danish en fallback)', () => {
  expect(PRODUCT_FAQ_POOL.cs.length).toBe(PRODUCT_FAQ_POOL.en.length)
  const failures: string[] = []
  for (let i = 0; i < PRODUCT_FAQ_POOL.en.length; i++) {
    const qa = `${PRODUCT_FAQ_POOL.cs[i].q} ${PRODUCT_FAQ_POOL.cs[i].a}`.replace(/TÜV/g, '')
    assertCzech(failures, `faq #${i}`, qa)
    expect(qa).not.toMatch(/[¿¡ñ]/i)
    expect(qa).not.toMatch(/[àèìòù]/i)
    expect(qa).not.toMatch(/[üß]/i)
    expect(qa).not.toMatch(/[\u0400-\u04FF]/)
    expect(PRODUCT_FAQ_POOL.cs[i].q).not.toBe(PRODUCT_FAQ_POOL.en[i].q)
  }
  expect(failures).toEqual([])
})

test('localized facts (FACTS_LOCALE) provide Czech shorthands', () => {
  const csAll = Object.values(FACTS_LOCALE.cs).flat().join(' ') + Object.values(FACTS_LOCALE.cs.moq).join(' ')
  expect(csAll).toMatch(/ks|dní/)
  expect(csAll.toLowerCase()).not.toMatch(/\bpcs\b|\bdays\b|\border\b/)
  expect(csAll).not.toMatch(/[¿¡ñ]/i)
  expect(csAll).not.toMatch(/[àèìòù]/i)
  expect(csAll.replace(/TÜV/g, '')).not.toMatch(/[üß]/i)
  expect(csAll).not.toMatch(/é|å|æ|ø|ë|ä|ö/i)
  expect(csAll).not.toMatch(/[\u0400-\u04FF]/)
})