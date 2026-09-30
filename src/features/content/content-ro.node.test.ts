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

/** Romanian markers: Romanian diacritics (ă â î ș ț) or common Romanian function words / product-domain stems. */
const ROMANIAN_RE =
  /[ăâîșțĂÂÎȘȚ]|\b(și|în|între|într-o|într-un|pentru|dintr-|din|cu|la|prin|sau|dar|care|acest|această|aceste|acestea|este|sunt|să|se|după|înainte|apoi|toate|fiecare|prin)\b|\b(produs\w*|fabrica\w*|produc\w*|placă\w*|vâsl\w*|aripioar\w*|umflabil\w*|livra\w*|ambala\w*|comand\w*|eșantion\w*|prototip\w*|lotur\w*|calitat\w*|control\w*|inspec\w*|presiun\w*|mențin\w*|garant\w*|client\w*|distribuitor\w*|certific\w*|conformit\w*|proiect\w*|construct\w*|dimensiun\w*|comercial\w*)\b/i

function isRomanian(text: string): boolean {
  return ROMANIAN_RE.test(text)
}

function pageSlugToRoFile(slug: string): string {
  return resolve(contentRoot, `pages/${slug}.ro.yaml`)
}

test('ro pages load Romanian content (not en fallback)', () => {
  const failures: string[] = []
  for (const path of getPublicPaths()) {
    const slug = path.split('/').filter(Boolean).pop() ?? ''
    if (!existsSync(pageSlugToRoFile(slug))) continue
    const en = getContentPage(path)
    const ro = getContentPage(path, 'ro')
    if (!ro) { failures.push(`${path}: no ro page`); continue }
    if (JSON.stringify(ro.content) === JSON.stringify(en?.content ?? {})) {
      failures.push(`${path}: ro content identical to en (fallback)`)
      continue
    }
    if (!isRomanian(JSON.stringify({ ...ro.meta, ...ro.content }))) {
      failures.push(`${path}: ro content has no Romanian text`)
    }
  }
  expect(failures).toEqual([])
})

test('ro news posts load Romanian titles', () => {
  const en = getNewsPosts('en')
  const ro = getNewsPosts('ro')
  const failures: string[] = []
  for (const post of ro) {
    const base = en.find((p) => p.slug === post.slug)
    if (!base || base.title === post.title) {
      failures.push(`${post.slug}: ro title fell back to en`)
      continue
    }
    if (!isRomanian(post.title)) failures.push(`${post.slug}: title not Romanian`)
  }
  expect(failures).toEqual([])
})

test('ro products load Romanian copy', () => {
  const en = getContentProducts('en')
  const ro = getContentProducts('ro')
  const failures: string[] = []
  for (const p of ro) {
    const base = en.find((x) => x.slug === p.slug)
    if (!base) { failures.push(`${p.slug}: missing in en`); continue }
    const sample = `${p.summary ?? ''} ${p.description ?? ''} ${p.body ?? ''}`
    if (sample.length === 0) { failures.push(`${p.slug}: no copy to check`); continue }
    if (!isRomanian(sample)) failures.push(`${p.slug}: product copy not Romanian`)
  }
  expect(failures).toEqual([])
})

test('ro technology articles load Romanian copy', () => {
  const en = getTechArticles('en')
  const ro = getTechArticles('ro')
  const failures: string[] = []
  for (const a of ro) {
    const base = en.find((x) => x.slug === a.slug)
    if (!base || base.title === a.title) { failures.push(`${a.slug}: ro title fell back to en`); continue }
    const sample = `${a.title} ${a.summary ?? ''} ${a.body ?? ''}`
    if (!isRomanian(sample)) failures.push(`${a.slug}: title not Romanian`)
  }
  expect(failures).toEqual([])
})

test('ro case-use articles load Romanian copy', () => {
  const en = getCaseUses('en')
  const ro = getCaseUses('ro')
  const failures: string[] = []
  for (const c of ro) {
    const base = en.find((x) => x.slug === c.slug)
    if (!base || base.title === c.title) { failures.push(`${c.slug}: ro title fell back to en`); continue }
    if (!isRomanian(c.title)) failures.push(`${c.slug}: title not Romanian`)
  }
  expect(failures).toEqual([])
})

test('ro research topics load Romanian copy', () => {
  const en = getResearchTopics('en')
  const ro = getResearchTopics('ro')
  const failures: string[] = []
  for (const r of ro) {
    const base = en.find((x) => x.slug === r.slug)
    if (!base || (base.category === r.category && base.readTime === r.readTime)) {
      failures.push(`${r.slug}: ro overlay fell back to en`)
      continue
    }
    if (!isRomanian(r.readTime)) failures.push(`${r.slug}: readTime not Romanian (${r.readTime})`)
  }
  expect(failures).toEqual([])
})

test('ro faqs load Romanian questions', () => {
  const en = getSiteFaqs('en')
  const ro = getSiteFaqs('ro')
  if (en.length === 0 || ro.length === 0) {
    expect(ro.length).toBeGreaterThan(0)
    return
  }
  const failures: string[] = []
  for (let i = 0; i < Math.min(en.length, ro.length); i++) {
    const enQ = en[i].q
    const roQ = ro[i].q
    if (enQ === roQ) { failures.push(`faq #${i}: ro question fell back to en`); continue }
    if (!isRomanian(roQ)) failures.push(`faq #${i}: question not Romanian`)
  }
  expect(failures).toEqual([])
})

test('every en content file has a .ro counterpart (except locale-agnostic site/pages.yaml)', () => {
  const missing: string[] = []
  const dirs = ['pages', 'news', 'products', 'technology', 'case-use', 'site']
  for (const dir of dirs) {
    for (const name of readdirSync(resolve(contentRoot, dir))) {
      if (name.includes('.de.') || name.includes('.es.') || name.includes('.fr.') || name.includes('.it.') || name.includes('.pt.') || name.includes('.nl.') || name.includes('.sv.') || name.includes('.no.') || name.includes('.pl.') || name.includes('.da.') || name.includes('.fi.') || name.includes('.ru.') || name.includes('.cs.') || name.includes('.tr.') || name.includes('.hu.') || name.includes('.ro.') || name.includes('.ar.')) continue
      if (dir === 'site' && name === 'pages.yaml') continue
      const roName = name.replace(/(\.(yaml|mdx|md))$/, '.ro$1')
      if (!existsSync(resolve(contentRoot, `${dir}/${roName}`))) {
        missing.push(`${dir}/${name}`)
      }
    }
  }
  expect(missing).toEqual([])
})

test('ro content files contain no leftover /es /fr /de /it /pt /nl /sv /no /pl /da /fi /ru /cs or /tr links', () => {
  const leftover: string[] = []
  const dirs = ['pages', 'news', 'products', 'technology', 'case-use', 'site']
  for (const dir of dirs) {
    for (const name of readdirSync(resolve(contentRoot, dir))) {
      if (!name.includes('.ro.')) continue
      const raw = readFileSync(resolve(contentRoot, `${dir}/${name}`), 'utf8')
      if (/(["'\s(])\/(es|fr|de|it|pt|nl|sv|no|pl|da|fi|ru|cs|tr)\//.test(raw)) leftover.push(`${dir}/${name}`)
    }
  }
  expect(leftover).toEqual([])
})

test('ro content files contain no forbidden diacritics or Cyrillic', () => {
  const forbidden: string[] = []
  const dirs = ['pages', 'news', 'products', 'technology', 'case-use', 'site']
  const RE_FORBIDDEN = /[ßåæøąęśłżźćńãõẞĄĘŚŁŻŹĆŃ]|[\u0300-\u036F]|[\u0400-\u04FF]/
  const RE_NON_ROMANIAN = /[áéíóúýàèìòùñçşšžčďěňřťůğĞöÖüÜäÄëËïÏẞ]/
  for (const dir of dirs) {
    for (const name of readdirSync(resolve(contentRoot, dir))) {
      if (!name.includes('.ro.')) continue
      const raw = readFileSync(resolve(contentRoot, `${dir}/${name}`), 'utf8')
      if (RE_FORBIDDEN.test(raw)) forbidden.push(`${dir}/${name}: forbidden char`)
      if (RE_NON_ROMANIAN.test(raw.replace(/TÜV|SÜD/g, ''))) forbidden.push(`${dir}/${name}: non-Romanian diacritic`)
    }
  }
  expect(forbidden).toEqual([])
})

/* ─────────────────────── TS data layer (Part B) ─────────────────────── */

function assertRomanian(failures: string[], label: string, sample: string) {
  if (!isRomanian(sample)) failures.push(`${label}: not Romanian (${sample.slice(0, 60)})`)
}

test('ro knowledge articles are Romanian with en slug parity', () => {
  const en = knowledge.en
  const ro = pick(knowledge, 'ro')
  const failures: string[] = []
  expect(knowledge.ro).toBeDefined()
  for (const a of en) {
    const f = ro.find((x) => x.slug === a.slug)
    if (!f) { failures.push(`${a.slug}: missing in ro`); continue }
    assertRomanian(
      failures,
      `${a.slug}.h1`,
      `${f.h1} ${f.intro} ${f.sections.map((x) => `${x.title} ${x.body.join(' ')}`).join(' ')}`,
    )
  }
  expect(failures).toEqual([])
  expect(knowledgeMeta.ro.metaTitle).toBeDefined()
  assertRomanian(failures, 'knowledgeMeta.metaTitle', knowledgeMeta.ro.metaTitle)
  expect(failures).toEqual([])
})

test('ro projects are Romanian with en slug parity and invariant assets', () => {
  const en = projects.en
  const ro = pick(projects, 'ro')
  const failures: string[] = []
  expect(ro.length).toBe(en.length)
  for (const p of en) {
    const f = ro.find((x) => x.slug === p.slug)
    if (!f) { failures.push(`${p.slug}: missing in ro`); continue }
    assertRomanian(
      failures,
      `${p.slug}.content`,
      `${f.h1} ${f.intro.join(' ')} ${f.process.map((x) => x.title).join(' ')} ${f.customizations.join(' ')} ${f.inspectionFocus.join(' ')} ${f.outcome}`,
    )
  }
  expect(failures).toEqual([])
  expect(projectsMeta.ro.metaTitle).toBeDefined()
  assertRomanian(failures, 'projectsMeta.metaTitle', projectsMeta.ro.metaTitle)
  expect(failures).toEqual([])
})

test('ro series landing pages are Romanian with en slug parity', () => {
  const en = seriesPages.en
  const ro = pick(seriesPages, 'ro')
  const failures: string[] = []
  expect(ro.length).toBe(en.length)
  for (const s of en) {
    const f = ro.find((x) => x.slug === s.slug)
    if (!f) { failures.push(`${s.slug}: missing in ro`); continue }
    assertRomanian(failures, `${s.slug}.h1`, `${f.h1} ${f.intro}`)
  }
  expect(failures).toEqual([])
})

test('ro solution pages are Romanian with en slug parity', () => {
  const en = solutionPages.en
  const ro = pick(solutionPages, 'ro')
  const failures: string[] = []
  expect(ro.length).toBe(en.length)
  for (const s of en) {
    const f = ro.find((x) => x.slug === s.slug)
    if (!f) { failures.push(`${s.slug}: missing in ro`); continue }
    assertRomanian(failures, `${s.slug}.h1`, `${f.h1} ${f.intro}`)
  }
  expect(failures).toEqual([])
})

test('ro guides are Romanian with en slug parity', () => {
  const en = localizedGuides('en')
  const ro = localizedGuides('ro')
  const failures: string[] = []
  expect(ro.length).toBe(en.length)
  for (const g of en) {
    const f = ro.find((x) => x.slug === g.slug)
    if (!f) { failures.push(`${g.slug}: missing in ro`); continue }
    assertRomanian(failures, `${g.slug}.intro`, `${f.title} ${f.intro}`)
  }
  expect(failures).toEqual([])
  const cards = GUIDE_CARDS.ro
  expect(cards.length).toBe(GUIDE_CARDS.en.length)
})

test('ro home & catalog content is Romanian', () => {
  const failures: string[] = []
  assertRomanian(failures, 'hero.title', `${pick(hero, 'ro').titlePre} ${pick(hero, 'ro').titleAccent} ${pick(hero, 'ro').sub}`)
  assertRomanian(failures, 'products.tagline', pick(products, 'ro').title)
  const roItems = pick(products, 'ro').items
  const enItems = products.en.items
  expect(roItems.length).toBe(enItems.length)
  for (const item of enItems) {
    const f = roItems.find((x) => x.slug === item.slug)
    if (!f) { failures.push(`${item.slug}: missing in ro products`); continue }
    assertRomanian(failures, `${item.slug}.desc`, `${f.tagline} ${f.desc} ${f.uses.join(' ')} ${f.for.join(' ')}`)
  }
  assertRomanian(failures, 'series.title', `${pick(series, 'ro').title} ${pick(series, 'ro').items[0].title}`)
  assertRomanian(failures, 'about.story', pick(about, 'ro').story.join(' '))
  assertRomanian(failures, 'solve.title', `${pick(solve, 'ro').title} ${pick(solve, 'ro').items[0].title}`)
  assertRomanian(failures, 'faq', `${pick(faq, 'ro').title} ${pick(faq, 'ro').items[0].q}`)
  expect(failures).toEqual([])
})

test('ro procurement profiles are Romanian with en key parity', () => {
  const en = procurementProfiles.en
  const ro = procurementProfiles.ro
  const failures: string[] = []
  expect(Object.keys(ro).sort()).toEqual(Object.keys(en).sort())
  for (const slug of Object.keys(en)) {
    const f = ro[slug]
    if (!f) { failures.push(`${slug}: missing in ro`); continue }
    assertRomanian(failures, `${slug}.bestFor`, `${f.bestFor} ${f.customization ?? ''}`)
  }
  expect(failures).toEqual([])
})

test('ro product-page customization & OEM application sections are Romanian', () => {
  expect(CUSTOMIZATION_OPTIONS.ro).toBeDefined()
  expect(OEM_APPLICATIONS.ro).toBeDefined()
  expect(CUSTOMIZATION_OPTIONS.ro.length).toBe(CUSTOMIZATION_OPTIONS.en.length)
  expect(OEM_APPLICATIONS.ro.length).toBe(OEM_APPLICATIONS.en.length)
  const failures: string[] = []
  for (let i = 0; i < CUSTOMIZATION_OPTIONS.en.length; i++) {
    assertRomanian(failures, `customization #${i}`, CUSTOMIZATION_OPTIONS.ro[i].title + ' ' + CUSTOMIZATION_OPTIONS.ro[i].body)
  }
  for (let i = 0; i < OEM_APPLICATIONS.en.length; i++) {
    assertRomanian(failures, `oem-application #${i}`, OEM_APPLICATIONS.ro[i].title + ' ' + OEM_APPLICATIONS.ro[i].body)
  }
  expect(failures).toEqual([])
})

test('ro product FAQ pool is Romanian (no Spanish/German/French en fallback)', () => {
  expect(PRODUCT_FAQ_POOL.ro.length).toBe(PRODUCT_FAQ_POOL.en.length)
  const failures: string[] = []
  for (let i = 0; i < PRODUCT_FAQ_POOL.en.length; i++) {
    const qa = `${PRODUCT_FAQ_POOL.ro[i].q} ${PRODUCT_FAQ_POOL.ro[i].a}`.replace(/TÜV/g, '')
    assertRomanian(failures, `faq #${i}`, qa)
    expect(qa).not.toMatch(/[¿¡ñ]/i)
    expect(qa).not.toMatch(/[àèìòù]/i)
    expect(qa).not.toMatch(/[äëïöü]/i)
    expect(qa).not.toMatch(/[\u0400-\u04FF]/)
    expect(PRODUCT_FAQ_POOL.ro[i].q).not.toBe(PRODUCT_FAQ_POOL.en[i].q)
  }
  expect(failures).toEqual([])
})

test('localized facts (FACTS_LOCALE) provide Romanian shorthands', () => {
  const roAll = Object.values(FACTS_LOCALE.ro).flat().join(' ') + Object.values(FACTS_LOCALE.ro.moq).join(' ')
  expect(roAll).toMatch(/buc|zil|rulou|presiune|menținere/)
  expect(roAll.toLowerCase()).not.toMatch(/\bpcs\b|\bdays\b|\border\b|\bpieces\b/)
  expect(roAll).not.toMatch(/[¿¡ñ]/i)
  expect(roAll).not.toMatch(/[àèìòù]/i)
  expect(roAll.replace(/TÜV/g, '')).not.toMatch(/[äëïöü]/i)
  expect(roAll).not.toMatch(/é|å|æ|ø|â|ê|ô|û/i)
  expect(roAll).not.toMatch(/[\u0400-\u04FF]/)
})