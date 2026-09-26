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

/** Polish markers: Western-Slavic diacritics, common Polish function words, or product-domain stems (prefix match covers inflections). */
const POLISH_RE = /[ąćęłńóśźżĄĆĘŁŃÓŚŹŻ]|\b(i|w|na|z|do|dla|jest|nie|się|jak|że|oraz|ale|też|tylko|bardzo)\b|\b(produk\w*|fabryk\w*|desk\w*|wiosł\w*|płetw\w*|smycz\w*|nadmuchiw\w*|zamówi\w*|realizacj\w*|opracowani\w*|harmonogram\w*|próbk\w*|prototyp\w*|parti\w*|seri\w*|produkcj\w*|dostaw\w*|wysył\w*|gwarancj\w*|jakoś\w*|klient\w*|dystrybutor\w*|sprzedaw\w*|hurt\w*|wycen\w*|ofert\w*|warunki\w*|firm\w*|certyfikacj\w*|zgodnoś\w*|identyfikowalnoś\w*|surowc\w*|opakow\w*|zgrzew\w*|minimaln\w*|czytani\w*|sztuk\w*|tematyczn\w*|edycj\w*|niestandardow\w*|obejmuj\w*|zestaw\w*|komplet\w*|komercyjn\w*|wielk\w*|material\w*|oferuj\w*|używ\w*|skład\w*|przeciwni\w*|nanosi\w*)\b/i

function isPolish(text: string): boolean {
  return POLISH_RE.test(text)
}

function pageSlugToPlFile(slug: string): string {
  return resolve(contentRoot, `pages/${slug}.pl.yaml`)
}

test('pl pages load Polish content (not en fallback)', () => {
  const failures: string[] = []
  for (const path of getPublicPaths()) {
    const slug = path.split('/').filter(Boolean).pop() ?? ''
    if (!existsSync(pageSlugToPlFile(slug))) continue
    const en = getContentPage(path)
    const pl = getContentPage(path, 'pl')
    if (!pl) { failures.push(`${path}: no pl page`); continue }
    if (JSON.stringify(pl.content) === JSON.stringify(en?.content ?? {})) {
      failures.push(`${path}: pl content identical to en (fallback)`)
      continue
    }
    if (!isPolish(JSON.stringify({ ...pl.meta, ...pl.content }))) {
      failures.push(`${path}: pl content has no Polish text`)
    }
  }
  expect(failures).toEqual([])
})

test('pl news posts load Polish titles', () => {
  const en = getNewsPosts('en')
  const pl = getNewsPosts('pl')
  const failures: string[] = []
  for (const post of pl) {
    const base = en.find((p) => p.slug === post.slug)
    if (!base || base.title === post.title) {
      failures.push(`${post.slug}: pl title fell back to en`)
      continue
    }
    if (!isPolish(post.title)) failures.push(`${post.slug}: title not Polish`)
  }
  expect(failures).toEqual([])
})

test('pl products load Polish copy', () => {
  const en = getContentProducts('en')
  const pl = getContentProducts('pl')
  const failures: string[] = []
  for (const p of pl) {
    const base = en.find((x) => x.slug === p.slug)
    if (!base) { failures.push(`${p.slug}: missing in en`); continue }
    // Product titles are locale-invariant brand names; translate the body/summary.
    const sample = `${p.summary ?? ''} ${p.description ?? ''} ${p.body ?? ''}`
    if (sample.length === 0) { failures.push(`${p.slug}: no copy to check`); continue }
    if (!isPolish(sample)) failures.push(`${p.slug}: product copy not Polish`)
  }
  expect(failures).toEqual([])
})

test('pl technology articles load Polish copy', () => {
  const en = getTechArticles('en')
  const pl = getTechArticles('pl')
  const failures: string[] = []
  for (const a of pl) {
    const base = en.find((x) => x.slug === a.slug)
    if (!base || base.title === a.title) { failures.push(`${a.slug}: pl title fell back to en`); continue }
    const sample = `${a.title} ${a.summary ?? ''} ${a.body ?? ''}`
    if (!isPolish(sample)) failures.push(`${a.slug}: title not Polish`)
  }
  expect(failures).toEqual([])
})

test('pl case-use articles load Polish copy', () => {
  const en = getCaseUses('en')
  const pl = getCaseUses('pl')
  const failures: string[] = []
  for (const c of pl) {
    const base = en.find((x) => x.slug === c.slug)
    if (!base || base.title === c.title) { failures.push(`${c.slug}: pl title fell back to en`); continue }
    if (!isPolish(c.title)) failures.push(`${c.slug}: title not Polish`)
  }
  expect(failures).toEqual([])
})

test('pl research topics load Polish copy', () => {
  const en = getResearchTopics('en')
  const pl = getResearchTopics('pl')
  const failures: string[] = []
  for (const r of pl) {
    const base = en.find((x) => x.slug === r.slug)
    if (!base || (base.category === r.category && base.readTime === r.readTime)) {
      failures.push(`${r.slug}: pl overlay fell back to en`)
      continue
    }
    if (!isPolish(r.readTime)) failures.push(`${r.slug}: readTime not Polish (${r.readTime})`)
  }
  expect(failures).toEqual([])
})

test('pl faqs load Polish questions', () => {
  const en = getSiteFaqs('en')
  const pl = getSiteFaqs('pl')
  if (en.length === 0 || pl.length === 0) {
    expect(pl.length).toBeGreaterThan(0)
    return
  }
  const failures: string[] = []
  for (let i = 0; i < Math.min(en.length, pl.length); i++) {
    const enQ = en[i].q
    const plQ = pl[i].q
    if (enQ === plQ) { failures.push(`faq #${i}: pl question fell back to en`); continue }
    if (!isPolish(plQ)) failures.push(`faq #${i}: question not Polish`)
  }
  expect(failures).toEqual([])
})

test('every en content file has a .pl counterpart (except locale-agnostic site/pages.yaml)', () => {
  const missing: string[] = []
  const dirs = ['pages', 'news', 'products', 'technology', 'case-use', 'site']
  for (const dir of dirs) {
    for (const name of readdirSync(resolve(contentRoot, dir))) {
      if (name.includes('.de.') || name.includes('.es.') || name.includes('.fr.') || name.includes('.it.') || name.includes('.pt.') || name.includes('.nl.') || name.includes('.sv.') || name.includes('.no.') || name.includes('.pl.')) continue
      if (dir === 'site' && name === 'pages.yaml') continue
      const plName = name.replace(/(\.(yaml|mdx|md))$/, '.pl$1')
      if (!existsSync(resolve(contentRoot, `${dir}/${plName}`))) {
        missing.push(`${dir}/${name}`)
      }
    }
  }
  expect(missing).toEqual([])
})

test('pl content files contain no leftover /sv /nl or /no links', () => {
  const leftover: string[] = []
  const dirs = ['pages', 'news', 'products', 'technology', 'case-use', 'site']
  for (const dir of dirs) {
    for (const name of readdirSync(resolve(contentRoot, dir))) {
      if (!name.includes('.pl.')) continue
      const raw = readFileSync(resolve(contentRoot, `${dir}/${name}`), 'utf8')
      if (/(["'\s(])\/(sv|nl|no)\//.test(raw)) leftover.push(`${dir}/${name}`)
    }
  }
  expect(leftover).toEqual([])
})

/* ─────────────────────── TS data layer (Part B) ─────────────────────── */

function assertPolish(failures: string[], label: string, sample: string) {
  if (!isPolish(sample)) failures.push(`${label}: not Polish (${sample.slice(0, 60)})`)
}

test('pl knowledge articles are Polish with en slug parity', () => {
  const en = knowledge.en
  const pl = pick(knowledge, 'pl')
  const failures: string[] = []
  expect(knowledge.pl).toBeDefined()
  for (const a of en) {
    const f = pl.find((x) => x.slug === a.slug)
    if (!f) { failures.push(`${a.slug}: missing in pl`); continue }
    assertPolish(
      failures,
      `${a.slug}.h1`,
      `${f.h1} ${f.intro} ${f.sections.map((x) => `${x.title} ${x.body.join(' ')}`).join(' ')}`,
    )
  }
  expect(failures).toEqual([])
  expect(knowledgeMeta.pl.metaTitle).toBeDefined()
  assertPolish(failures, 'knowledgeMeta.metaTitle', knowledgeMeta.pl.metaTitle)
  expect(failures).toEqual([])
})

test('pl projects are Polish with en slug parity and invariant assets', () => {
  const en = projects.en
  const pl = pick(projects, 'pl')
  const failures: string[] = []
  expect(pl.length).toBe(en.length)
  for (const p of en) {
    const f = pl.find((x) => x.slug === p.slug)
    if (!f) { failures.push(`${p.slug}: missing in pl`); continue }
    assertPolish(
      failures,
      `${p.slug}.content`,
      `${f.h1} ${f.intro.join(' ')} ${f.process.map((x) => x.title).join(' ')} ${f.customizations.join(' ')} ${f.inspectionFocus.join(' ')} ${f.outcome}`,
    )
  }
  expect(failures).toEqual([])
  expect(projectsMeta.pl.metaTitle).toBeDefined()
  assertPolish(failures, 'projectsMeta.metaTitle', projectsMeta.pl.metaTitle)
  expect(failures).toEqual([])
})

test('pl series landing pages are Polish with en slug parity', () => {
  const en = seriesPages.en
  const pl = pick(seriesPages, 'pl')
  const failures: string[] = []
  expect(pl.length).toBe(en.length)
  for (const s of en) {
    const f = pl.find((x) => x.slug === s.slug)
    if (!f) { failures.push(`${s.slug}: missing in pl`); continue }
    assertPolish(failures, `${s.slug}.h1`, `${f.h1} ${f.intro}`)
  }
  expect(failures).toEqual([])
})

test('pl solution pages are Polish with en slug parity', () => {
  const en = solutionPages.en
  const pl = pick(solutionPages, 'pl')
  const failures: string[] = []
  expect(pl.length).toBe(en.length)
  for (const s of en) {
    const f = pl.find((x) => x.slug === s.slug)
    if (!f) { failures.push(`${s.slug}: missing in pl`); continue }
    assertPolish(failures, `${s.slug}.h1`, `${f.h1} ${f.intro}`)
  }
  expect(failures).toEqual([])
})

test('pl guides are Polish with en slug parity', () => {
  const en = localizedGuides('en')
  const pl = localizedGuides('pl')
  const failures: string[] = []
  expect(pl.length).toBe(en.length)
  for (const g of en) {
    const f = pl.find((x) => x.slug === g.slug)
    if (!f) { failures.push(`${g.slug}: missing in pl`); continue }
    assertPolish(failures, `${g.slug}.intro`, `${f.title} ${f.intro}`)
  }
  expect(failures).toEqual([])
  const cards = GUIDE_CARDS.pl
  expect(cards.length).toBe(GUIDE_CARDS.en.length)
})

test('pl home & catalog content is Polish', () => {
  const failures: string[] = []
  assertPolish(failures, 'hero.title', `${pick(hero, 'pl').titlePre} ${pick(hero, 'pl').titleAccent} ${pick(hero, 'pl').sub}`)
  assertPolish(failures, 'products.tagline', pick(products, 'pl').title)
  const plItems = pick(products, 'pl').items
  const enItems = products.en.items
  expect(plItems.length).toBe(enItems.length)
  for (const item of enItems) {
    const f = plItems.find((x) => x.slug === item.slug)
    if (!f) { failures.push(`${item.slug}: missing in pl products`); continue }
    assertPolish(failures, `${item.slug}.desc`, `${f.tagline} ${f.desc} ${f.uses.join(' ')} ${f.for.join(' ')}`)
  }
  assertPolish(failures, 'series.title', `${pick(series, 'pl').title} ${pick(series, 'pl').items[0].title}`)
  assertPolish(failures, 'about.story', pick(about, 'pl').story.join(' '))
  assertPolish(failures, 'solve.title', `${pick(solve, 'pl').title} ${pick(solve, 'pl').items[0].title}`)
  assertPolish(failures, 'faq', `${pick(faq, 'pl').title} ${pick(faq, 'pl').items[0].q}`)
  expect(failures).toEqual([])
})

test('pl procurement profiles are Polish with en key parity', () => {
  const en = procurementProfiles.en
  const pl = procurementProfiles.pl
  const failures: string[] = []
  expect(Object.keys(pl).sort()).toEqual(Object.keys(en).sort())
  for (const slug of Object.keys(en)) {
    const f = pl[slug]
    if (!f) { failures.push(`${slug}: missing in pl`); continue }
    assertPolish(failures, `${slug}.bestFor`, `${f.bestFor} ${f.customization ?? ''}`)
  }
  expect(failures).toEqual([])
})

test('pl product-page customization & OEM application sections are Polish', () => {
  expect(CUSTOMIZATION_OPTIONS.pl).toBeDefined()
  expect(OEM_APPLICATIONS.pl).toBeDefined()
  expect(CUSTOMIZATION_OPTIONS.pl.length).toBe(CUSTOMIZATION_OPTIONS.en.length)
  expect(OEM_APPLICATIONS.pl.length).toBe(OEM_APPLICATIONS.en.length)
  const failures: string[] = []
  for (let i = 0; i < CUSTOMIZATION_OPTIONS.en.length; i++) {
    assertPolish(failures, `customization #${i}`, CUSTOMIZATION_OPTIONS.pl[i].title + ' ' + CUSTOMIZATION_OPTIONS.pl[i].body)
  }
  for (let i = 0; i < OEM_APPLICATIONS.en.length; i++) {
    assertPolish(failures, `oem-application #${i}`, OEM_APPLICATIONS.pl[i].title + ' ' + OEM_APPLICATIONS.pl[i].body)
  }
  expect(failures).toEqual([])
})

test('pl product FAQ pool is Polish (not Spanish/German/French-Italian/en fallback)', () => {
  expect(PRODUCT_FAQ_POOL.pl.length).toBe(PRODUCT_FAQ_POOL.en.length)
  const failures: string[] = []
  for (let i = 0; i < PRODUCT_FAQ_POOL.en.length; i++) {
    const qa = `${PRODUCT_FAQ_POOL.pl[i].q} ${PRODUCT_FAQ_POOL.pl[i].a}`
    assertPolish(failures, `faq #${i}`, qa)
    expect(qa).not.toMatch(/[¿¡ñ]/i)
    expect(qa).not.toMatch(/[àèìòù]/i)
    expect(qa).not.toMatch(/[üß]/i)
    expect(PRODUCT_FAQ_POOL.pl[i].q).not.toBe(PRODUCT_FAQ_POOL.en[i].q)
  }
  expect(failures).toEqual([])
})

test('localized facts (FACTS_LOCALE) provide Polish shorthands', () => {
  const plAll = Object.values(FACTS_LOCALE.pl).flat().join(' ') + Object.values(FACTS_LOCALE.pl.moq).join(' ')
  expect(plAll).toMatch(/szt\b|dni|min/)
  expect(plAll.toLowerCase()).not.toMatch(/\bpcs\b|\bdays\b|\border\b/)
  expect(plAll).not.toMatch(/[¿¡ñ]/i)
  expect(plAll).not.toMatch(/[àèìòù]/i)
  expect(plAll).not.toMatch(/[üß]/i)
  expect(plAll).not.toMatch(/[éæøåäöë]/i)
})