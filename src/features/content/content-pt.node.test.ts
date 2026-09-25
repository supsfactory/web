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

/**
 * Portuguese markers: the pt accent inventory or pt-PT/pt-BR words that are
 * not shared with English, German, Italian, French or Spanish (word-boundary
 * matched). Words shared with other Latin languages (marca, cliente, barco,
 * bomba, aleta, entrega, tempo, fábrica, catálogo...) are deliberately left to
 * the accent arm so the heuristic stays discriminating.
 */
const PORTUGUESE_RE =
  /[áàâãçéêíóôõúÁÀÂÃÇÉÊÍÓÔÕÚ]|\b(prancha(?:s)?|insufl\S*|produ(?:ção|ções)|encomenda(?:s)?|prazo(?:s)?|amostra(?:s)?|embalagem(?:s)?|pre(?:ço|ços)|orçamento(?:s)?|garantia(?:s)?|caiaque(?:s)?|fornecedor(?:es)?|equipa(?:m|s)?|equipe|dia(?:s)?|não|são|uma|noss\w*|estão|orde(?:m|ns)|aprovação|ensai(?:o|os)|qualidade|control(?:o|os|e|es)|teste(?:s)?|leitura|produt(?:o|os)|travessia(?:s)?|frota(?:s)?|guia(?:s)?|escolh\w*|colabor\w*|pavimento(?:s)?|estrela(?:s)?|barreira(?:s)?|desenho(?:s)?|aluguer|incluem|servem|voss\w*)\b/i

function isPortuguese(text: string): boolean {
  return PORTUGUESE_RE.test(text)
}

function countPortuguese(text: string): number {
  const global = new RegExp(PORTUGUESE_RE.source, PORTUGUESE_RE.flags.includes('g') ? PORTUGUESE_RE.flags : `${PORTUGUESE_RE.flags}g`)
  return (text.match(global) ?? []).length
}

function pageSlugToPtFile(slug: string): string {
  return resolve(contentRoot, `pages/${slug}.pt.yaml`)
}

test('pt pages load Portuguese content (not en fallback)', () => {
  const failures: string[] = []
  for (const path of getPublicPaths()) {
    const slug = path.split('/').filter(Boolean).pop() ?? ''
    if (!existsSync(pageSlugToPtFile(slug))) continue
    const en = getContentPage(path)
    const pt = getContentPage(path, 'pt')
    if (!pt) { failures.push(`${path}: no pt page`); continue }
    if (JSON.stringify(pt.content) === JSON.stringify(en?.content ?? {})) {
      failures.push(`${path}: pt content identical to en (fallback)`)
      continue
    }
    if (countPortuguese(JSON.stringify({ ...pt.meta, ...pt.content })) < 2) {
      failures.push(`${path}: pt content has no Portuguese text`)
    }
  }
  expect(failures).toEqual([])
})

test('pt news posts load Portuguese titles', () => {
  const en = getNewsPosts('en')
  const pt = getNewsPosts('pt')
  const failures: string[] = []
  for (const post of pt) {
    const base = en.find((p) => p.slug === post.slug)
    if (!base || base.title === post.title) {
      failures.push(`${post.slug}: pt title fell back to en`)
      continue
    }
    if (!isPortuguese(post.title)) failures.push(`${post.slug}: title not Portuguese`)
  }
  expect(failures).toEqual([])
})

test('pt products load Portuguese copy', () => {
  const en = getContentProducts('en')
  const pt = getContentProducts('pt')
  const failures: string[] = []
  for (const p of pt) {
    const base = en.find((x) => x.slug === p.slug)
    if (!base) { failures.push(`${p.slug}: missing in en`); continue }
    // Product titles are locale-invariant brand names; translate the body/summary.
    const sample = `${p.summary ?? ''} ${p.description ?? ''} ${p.body ?? ''}`
    if (sample.length === 0) { failures.push(`${p.slug}: no copy to check`); continue }
    if (!isPortuguese(sample)) failures.push(`${p.slug}: product copy not Portuguese`)
  }
  expect(failures).toEqual([])
})

test('pt technology articles load Portuguese copy', () => {
  const en = getTechArticles('en')
  const pt = getTechArticles('pt')
  const failures: string[] = []
  for (const a of pt) {
    const base = en.find((x) => x.slug === a.slug)
    if (!base || base.title === a.title) { failures.push(`${a.slug}: pt title fell back to en`); continue }
    if (!isPortuguese(a.title)) failures.push(`${a.slug}: title not Portuguese`)
  }
  expect(failures).toEqual([])
})

test('pt case-use articles load Portuguese copy', () => {
  const en = getCaseUses('en')
  const pt = getCaseUses('pt')
  const failures: string[] = []
  for (const c of pt) {
    const base = en.find((x) => x.slug === c.slug)
    if (!base || base.title === c.title) { failures.push(`${c.slug}: pt title fell back to en`); continue }
    if (!isPortuguese(c.title)) failures.push(`${c.slug}: title not Portuguese`)
  }
  expect(failures).toEqual([])
})

test('pt research topics load Portuguese copy', () => {
  const en = getResearchTopics('en')
  const pt = getResearchTopics('pt')
  const failures: string[] = []
  for (const r of pt) {
    const base = en.find((x) => x.slug === r.slug)
    if (!base || (base.category === r.category && base.readTime === r.readTime)) {
      failures.push(`${r.slug}: pt overlay fell back to en`)
      continue
    }
    if (!isPortuguese(r.readTime)) failures.push(`${r.slug}: readTime not Portuguese (${r.readTime})`)
  }
  expect(failures).toEqual([])
})

test('pt faqs load Portuguese questions', () => {
  const en = getSiteFaqs('en')
  const pt = getSiteFaqs('pt')
  if (en.length === 0 || pt.length === 0) {
    expect(pt.length).toBeGreaterThan(0)
    return
  }
  const failures: string[] = []
  for (let i = 0; i < Math.min(en.length, pt.length); i++) {
    const enQ = en[i].q
    const ptQ = pt[i].q
    if (enQ === ptQ) { failures.push(`faq #${i}: pt question fell back to en`); continue }
    if (!isPortuguese(ptQ)) failures.push(`faq #${i}: question not Portuguese`)
  }
  expect(failures).toEqual([])
})

test('every en content file has a .pt counterpart (except locale-agnostic site/pages.yaml)', () => {
  const missing: string[] = []
  const dirs = ['pages', 'news', 'products', 'technology', 'case-use', 'site']
  for (const dir of dirs) {
    for (const name of readdirSync(resolve(contentRoot, dir))) {
      if (name.includes('.de.') || name.includes('.es.') || name.includes('.fr.') || name.includes('.it.') || name.includes('.pt.')) continue
      if (dir === 'site' && name === 'pages.yaml') continue
      const ptName = name.replace(/(\.(yaml|mdx|md))$/, '.pt$1')
      if (!existsSync(resolve(contentRoot, `${dir}/${ptName}`))) {
        missing.push(`${dir}/${name}`)
      }
    }
  }
  expect(missing).toEqual([])
})

test('pt content files contain no leftover /it links', () => {
  const leftover: string[] = []
  const dirs = ['pages', 'news', 'products', 'technology', 'case-use', 'site']
  for (const dir of dirs) {
    for (const name of readdirSync(resolve(contentRoot, dir))) {
      if (!name.includes('.pt.')) continue
      const raw = readFileSync(resolve(contentRoot, `${dir}/${name}`), 'utf8')
      if (/(["'\s(])\/it\//.test(raw)) leftover.push(`${dir}/${name}`)
    }
  }
  expect(leftover).toEqual([])
})

test('PORTUGUESE_RE is not satisfied by English or German copy', () => {
  const negatives = [
    'The factory produces custom inflatable stand up paddle boards with quality control, samples in 7-12 days and production in 25-35 days after order.',
    'Die Fabrik produziert aufblasbare SUPs mit Qualitätskontrolle, Mustern in 7-12 Tagen und Produktion in 25-35 Tagen nach Bestellung.',
  ]
  for (const s of negatives) expect(isPortuguese(s)).toBe(false)
})

/* ─────────────────────── TS data layer (Part B) ─────────────────────── */

function assertPortuguese(failures: string[], label: string, sample: string) {
  if (!isPortuguese(sample)) failures.push(`${label}: not Portuguese (${sample.slice(0, 60)})`)
}

test('pt knowledge articles are Portuguese with en slug parity', () => {
  expect(knowledge.pt).toBeDefined()
  expect(knowledgeMeta.pt).toBeDefined()
  const en = knowledge.en
  const pt = knowledge.pt
  const failures: string[] = []
  for (const a of en) {
    const f = pt.find((x) => x.slug === a.slug)
    if (!f) { failures.push(`${a.slug}: missing in pt`); continue }
    assertPortuguese(
      failures,
      `${a.slug}.h1`,
      `${f.h1} ${f.intro} ${f.sections.map((x) => `${x.title} ${x.body.join(' ')}`).join(' ')}`,
    )
  }
  expect(failures).toEqual([])
  assertPortuguese(failures, 'knowledgeMeta.metaTitle', knowledgeMeta.pt.metaTitle)
  expect(failures).toEqual([])
})

test('pt projects are Portuguese with en slug parity and invariant assets', () => {
  expect(projects.pt).toBeDefined()
  expect(projectsMeta.pt).toBeDefined()
  const en = projects.en
  const pt = projects.pt
  const failures: string[] = []
  expect(pt.length).toBe(en.length)
  for (const p of en) {
    const f = pt.find((x) => x.slug === p.slug)
    if (!f) { failures.push(`${p.slug}: missing in pt`); continue }
    assertPortuguese(
      failures,
      `${p.slug}.content`,
      `${f.h1} ${f.intro.join(' ')} ${f.process.map((x) => x.title).join(' ')} ${f.customizations.join(' ')} ${f.inspectionFocus.join(' ')} ${f.outcome}`,
    )
  }
  expect(failures).toEqual([])
  assertPortuguese(failures, 'projectsMeta.metaTitle', projectsMeta.pt.metaTitle)
  expect(failures).toEqual([])
})

test('pt series landing pages are Portuguese with en slug parity', () => {
  expect(seriesPages.pt).toBeDefined()
  const en = seriesPages.en
  const pt = seriesPages.pt
  const failures: string[] = []
  expect(pt.length).toBe(en.length)
  for (const s of en) {
    const f = pt.find((x) => x.slug === s.slug)
    if (!f) { failures.push(`${s.slug}: missing in pt`); continue }
    assertPortuguese(failures, `${s.slug}.h1`, `${f.h1} ${f.intro}`)
  }
  expect(failures).toEqual([])
})

test('pt solution pages are Portuguese with en slug parity', () => {
  expect(solutionPages.pt).toBeDefined()
  const en = solutionPages.en
  const pt = solutionPages.pt
  const failures: string[] = []
  expect(pt.length).toBe(en.length)
  for (const s of en) {
    const f = pt.find((x) => x.slug === s.slug)
    if (!f) { failures.push(`${s.slug}: missing in pt`); continue }
    assertPortuguese(failures, `${s.slug}.h1`, `${f.h1} ${f.intro}`)
  }
  expect(failures).toEqual([])
})

test('pt guides are Portuguese with en slug parity', () => {
  expect(GUIDE_CARDS.pt).toBeDefined()
  const en = localizedGuides('en')
  const pt = localizedGuides('pt')
  const failures: string[] = []
  expect(pt.length).toBe(en.length)
  for (const g of en) {
    const f = pt.find((x) => x.slug === g.slug)
    if (!f) { failures.push(`${g.slug}: missing in pt`); continue }
    assertPortuguese(failures, `${g.slug}.intro`, `${f.title} ${f.intro}`)
  }
  expect(failures).toEqual([])
  const cards = GUIDE_CARDS.pt
  expect(cards.length).toBe(GUIDE_CARDS.en.length)
})

test('pt home & catalog content is Portuguese', () => {
  const sections = { hero, products, series, about, solve, faq } as const
  const missing = (Object.keys(sections) as (keyof typeof sections)[]).filter((k) => !('pt' in sections[k]))
  expect(missing).toEqual([])
  const failures: string[] = []
  assertPortuguese(failures, 'hero.title', `${pick(hero, 'pt').titlePre} ${pick(hero, 'pt').titleAccent} ${pick(hero, 'pt').sub}`)
  assertPortuguese(failures, 'products.tagline', pick(products, 'pt').title)
  const ptItems = pick(products, 'pt').items
  const enItems = products.en.items
  expect(ptItems.length).toBe(enItems.length)
  for (const item of enItems) {
    const f = ptItems.find((x) => x.slug === item.slug)
    if (!f) { failures.push(`${item.slug}: missing in pt products`); continue }
    assertPortuguese(failures, `${item.slug}.desc`, `${f.tagline} ${f.desc} ${f.uses.join(' ')} ${f.for.join(' ')}`)
  }
  assertPortuguese(failures, 'series.title', `${pick(series, 'pt').title} ${pick(series, 'pt').items[0].title}`)
  assertPortuguese(failures, 'about.story', pick(about, 'pt').story.join(' '))
  assertPortuguese(failures, 'solve.title', `${pick(solve, 'pt').title} ${pick(solve, 'pt').items[0].title}`)
  assertPortuguese(failures, 'faq', `${pick(faq, 'pt').title} ${pick(faq, 'pt').items[0].q}`)
  expect(failures).toEqual([])
})

test('pt procurement profiles are Portuguese with en key parity', () => {
  expect(procurementProfiles.pt).toBeDefined()
  const en = procurementProfiles.en
  const pt = procurementProfiles.pt
  const failures: string[] = []
  expect(Object.keys(pt).sort()).toEqual(Object.keys(en).sort())
  for (const slug of Object.keys(en)) {
    const f = pt[slug]
    if (!f) { failures.push(`${slug}: missing in pt`); continue }
    assertPortuguese(failures, `${slug}.bestFor`, `${f.bestFor} ${f.customization ?? ''}`)
  }
  expect(failures).toEqual([])
})

test('pt product-page customization & OEM application sections are Portuguese', () => {
  expect(CUSTOMIZATION_OPTIONS.pt).toBeDefined()
  expect(OEM_APPLICATIONS.pt).toBeDefined()
  expect(CUSTOMIZATION_OPTIONS.pt.length).toBe(CUSTOMIZATION_OPTIONS.en.length)
  expect(OEM_APPLICATIONS.pt.length).toBe(OEM_APPLICATIONS.en.length)
  const failures: string[] = []
  for (let i = 0; i < CUSTOMIZATION_OPTIONS.en.length; i++) {
    assertPortuguese(failures, `customization #${i}`, CUSTOMIZATION_OPTIONS.pt[i].title + ' ' + CUSTOMIZATION_OPTIONS.pt[i].body)
  }
  for (let i = 0; i < OEM_APPLICATIONS.en.length; i++) {
    assertPortuguese(failures, `oem-application #${i}`, OEM_APPLICATIONS.pt[i].title + ' ' + OEM_APPLICATIONS.pt[i].body)
  }
  expect(failures).toEqual([])
})

test('pt product FAQ pool is Portuguese (not Spanish/en fallback)', () => {
  expect(PRODUCT_FAQ_POOL.pt.length).toBe(PRODUCT_FAQ_POOL.en.length)
  const failures: string[] = []
  for (let i = 0; i < PRODUCT_FAQ_POOL.en.length; i++) {
    const qa = `${PRODUCT_FAQ_POOL.pt[i].q} ${PRODUCT_FAQ_POOL.pt[i].a}`
    assertPortuguese(failures, `faq #${i}`, qa)
    expect(qa).not.toMatch(/[¿¡ñ]/i)
    expect(qa).not.toMatch(/[äöüß]/i)
    expect(PRODUCT_FAQ_POOL.pt[i].q).not.toBe(PRODUCT_FAQ_POOL.en[i].q)
  }
  expect(failures).toEqual([])
})

test('localized facts (FACTS_LOCALE) provide Portuguese shorthands for all locales', () => {
  const locales = Object.keys(FACTS_LOCALE).sort() as (keyof typeof FACTS_LOCALE)[]
  expect(locales).toEqual(['de', 'en', 'es', 'fr', 'it', 'pt'])
  const enKeys = Object.keys(FACTS_LOCALE.en)
  for (const l of locales) {
    expect(Object.keys(FACTS_LOCALE[l]).sort()).toEqual([...enKeys].sort())
    expect(Object.keys(FACTS_LOCALE[l].moq).sort()).toEqual(Object.keys(FACTS_LOCALE.en.moq).sort())
  }
  const ptAll = Object.values(FACTS_LOCALE.pt).flat().join(' ') + Object.values(FACTS_LOCALE.pt.moq).join(' ')
  expect(ptAll).toMatch(/dias|unidades|molde|embalagem/)
  expect(ptAll.toLowerCase()).not.toMatch(/\bpcs\b|\bdays\b|\border\b/)
  expect(ptAll).not.toMatch(/[¿¡ñ]/i)
  expect(ptAll).not.toMatch(/[äöüß]/i)
})