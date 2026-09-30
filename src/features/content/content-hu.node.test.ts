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

/** Hungarian markers: double-acute vowels (ő ű) or common Hungarian function words / product-domain stems. */
const HUNGARIAN_RE =
  /[őűŐŰ]|(?<![A-Za-zÀ-ÿ])(és|nem|egy|van|vannak|hogy|mint|vagy|mert|ez|az|ezek|azok|meg|is|de|pedig|nélkül|még|így|már|után|előtt|között|által|számára|alapján|érdekében|további|minden|több|bármely|saját|kell|lehet|keresztül|mielőtt|most|milyen|mennyi|mikor|miért|hogyan|melyik|melyek|amely)(?![A-Za-zÀ-ÿőűŐŰ])|(?<![A-Za-zÀ-ÿ])(gyárt|gyár|termék|deszk|hullám|evez|vásárló|kereskedő|minta|minőség|ellenőrz|szállít|megrendel|rendel|csomagol|nyomás|garancia|garanci|prototípus|uszony|tanúsít|sorozat|felfúj|szerszám|mérnök|útmutató|mennyiség|szabvány|vizsgál|dokument|ajánlat|próba|vízi|víz|perc|olvas|személy|szabhat|márka|márkáz|idő|nap|óra|hét|széria|testreszab|minimális|megfelel|konfiguráció|kiegészítő|felépítés|flotta|választ|rendezvény|üzlet|bérbead|díjszab|árrés|szervezet|partnerség|padló|technológi)[A-Za-zÀ-ÿőűŐŰ]*(?![A-Za-zÀ-ÿőűŐŰ])/i

function isHungarian(text: string): boolean {
  return HUNGARIAN_RE.test(text)
}

function pageSlugToHuFile(slug: string): string {
  return resolve(contentRoot, `pages/${slug}.hu.yaml`)
}

test('hu pages load Hungarian content (not en fallback)', () => {
  const failures: string[] = []
  for (const path of getPublicPaths()) {
    const slug = path.split('/').filter(Boolean).pop() ?? ''
    if (!existsSync(pageSlugToHuFile(slug))) continue
    const en = getContentPage(path)
    const hu = getContentPage(path, 'hu')
    if (!hu) { failures.push(`${path}: no hu page`); continue }
    if (JSON.stringify(hu.content) === JSON.stringify(en?.content ?? {})) {
      failures.push(`${path}: hu content identical to en (fallback)`)
      continue
    }
    if (!isHungarian(JSON.stringify({ ...hu.meta, ...hu.content }))) {
      failures.push(`${path}: hu content has no Hungarian text`)
    }
  }
  expect(failures).toEqual([])
})

test('hu news posts load Hungarian titles', () => {
  const en = getNewsPosts('en')
  const hu = getNewsPosts('hu')
  const failures: string[] = []
  for (const post of hu) {
    const base = en.find((p) => p.slug === post.slug)
    if (!base || base.title === post.title) {
      failures.push(`${post.slug}: hu title fell back to en`)
      continue
    }
    if (!isHungarian(post.title)) failures.push(`${post.slug}: title not Hungarian`)
  }
  expect(failures).toEqual([])
})

test('hu products load Hungarian copy', () => {
  const en = getContentProducts('en')
  const hu = getContentProducts('hu')
  const failures: string[] = []
  for (const p of hu) {
    const base = en.find((x) => x.slug === p.slug)
    if (!base) { failures.push(`${p.slug}: missing in en`); continue }
    const sample = `${p.summary ?? ''} ${p.description ?? ''} ${p.body ?? ''}`
    if (sample.length === 0) { failures.push(`${p.slug}: no copy to check`); continue }
    if (!isHungarian(sample)) failures.push(`${p.slug}: product copy not Hungarian`)
  }
  expect(failures).toEqual([])
})

test('hu technology articles load Hungarian copy', () => {
  const en = getTechArticles('en')
  const hu = getTechArticles('hu')
  const failures: string[] = []
  for (const a of hu) {
    const base = en.find((x) => x.slug === a.slug)
    if (!base || base.title === a.title) { failures.push(`${a.slug}: hu title fell back to en`); continue }
    const sample = `${a.title} ${a.summary ?? ''} ${a.body ?? ''}`
    if (!isHungarian(sample)) failures.push(`${a.slug}: title not Hungarian`)
  }
  expect(failures).toEqual([])
})

test('hu case-use articles load Hungarian copy', () => {
  const en = getCaseUses('en')
  const hu = getCaseUses('hu')
  const failures: string[] = []
  for (const c of hu) {
    const base = en.find((x) => x.slug === c.slug)
    if (!base || base.title === c.title) { failures.push(`${c.slug}: hu title fell back to en`); continue }
    if (!isHungarian(c.title)) failures.push(`${c.slug}: title not Hungarian`)
  }
  expect(failures).toEqual([])
})

test('hu research topics load Hungarian copy', () => {
  const en = getResearchTopics('en')
  const hu = getResearchTopics('hu')
  const failures: string[] = []
  for (const r of hu) {
    const base = en.find((x) => x.slug === r.slug)
    if (!base || (base.category === r.category && base.readTime === r.readTime)) {
      failures.push(`${r.slug}: hu overlay fell back to en`)
      continue
    }
    if (!isHungarian(r.readTime)) failures.push(`${r.slug}: readTime not Hungarian (${r.readTime})`)
  }
  expect(failures).toEqual([])
})

test('hu faqs load Hungarian questions', () => {
  const en = getSiteFaqs('en')
  const hu = getSiteFaqs('hu')
  if (en.length === 0 || hu.length === 0) {
    expect(hu.length).toBeGreaterThan(0)
    return
  }
  const failures: string[] = []
  for (let i = 0; i < Math.min(en.length, hu.length); i++) {
    const enQ = en[i].q
    const huQ = hu[i].q
    if (enQ === huQ) { failures.push(`faq #${i}: hu question fell back to en`); continue }
    if (!isHungarian(huQ)) failures.push(`faq #${i}: question not Hungarian`)
  }
  expect(failures).toEqual([])
})

test('every en content file has a .hu counterpart (except locale-agnostic site/pages.yaml)', () => {
  const missing: string[] = []
  const dirs = ['pages', 'news', 'products', 'technology', 'case-use', 'site']
  for (const dir of dirs) {
    for (const name of readdirSync(resolve(contentRoot, dir))) {
      if (name.includes('.de.') || name.includes('.es.') || name.includes('.fr.') || name.includes('.it.') || name.includes('.pt.') || name.includes('.nl.') || name.includes('.sv.') || name.includes('.no.') || name.includes('.pl.') || name.includes('.da.') || name.includes('.fi.') || name.includes('.ru.') || name.includes('.cs.') || name.includes('.tr.') || name.includes('.ro.') || name.includes('.hu.') || name.includes('.ar.')) continue
      if (dir === 'site' && name === 'pages.yaml') continue
      const huName = name.replace(/(\.(yaml|mdx|md))$/, '.hu$1')
      if (!existsSync(resolve(contentRoot, `${dir}/${huName}`))) {
        missing.push(`${dir}/${name}`)
      }
    }
  }
  expect(missing).toEqual([])
})

test('hu content files contain no leftover /es /fr /de /it /pt /nl /sv /no /pl /da /fi /ru /cs /tr or /ro links', () => {
  const leftover: string[] = []
  const dirs = ['pages', 'news', 'products', 'technology', 'case-use', 'site']
  for (const dir of dirs) {
    for (const name of readdirSync(resolve(contentRoot, dir))) {
      if (!name.includes('.hu.')) continue
      const raw = readFileSync(resolve(contentRoot, `${dir}/${name}`), 'utf8')
      if (/(["'\s(])\/(es|fr|de|it|pt|nl|sv|no|pl|da|fi|ru|cs|tr|ro)\//.test(raw)) leftover.push(`${dir}/${name}`)
    }
  }
  expect(leftover).toEqual([])
})

test('hu content files contain no forbidden diacritics or Cyrillic', () => {
  const forbidden: string[] = []
  const dirs = ['pages', 'news', 'products', 'technology', 'case-use', 'site']
  const RE_FORBIDDEN = /[ßåæøąęśłżźćńãõẞĄĘŚŁŻŹĆŃ]|[\u0300-\u036F]|[\u0400-\u04FF]/
  // Hungarian uses only á é í ó ö ő ú ü ű (+ capitals). Everything else is foreign here.
  const RE_NON_HUNGARIAN = /[àèìòùâêîôûäëïÿçñãõåøÅØąęśłżźćńĄĘŚŁŻŹĆŃšžčďťňřŠŽČĎŤŇŘăâîșțĂÂÎȘŢşţŞŢýÝþðÞÐ]/i
  for (const dir of dirs) {
    for (const name of readdirSync(resolve(contentRoot, dir))) {
      if (!name.includes('.hu.')) continue
      const raw = readFileSync(resolve(contentRoot, `${dir}/${name}`), 'utf8')
      if (RE_FORBIDDEN.test(raw)) forbidden.push(`${dir}/${name}: forbidden char`)
      if (RE_NON_HUNGARIAN.test(raw)) forbidden.push(`${dir}/${name}: non-Hungarian diacritic`)
    }
  }
  expect(forbidden).toEqual([])
})

/* ─────────────────────── TS data layer (Part B) ─────────────────────── */

function assertHungarian(failures: string[], label: string, sample: string) {
  if (!isHungarian(sample)) failures.push(`${label}: not Hungarian (${sample.slice(0, 60)})`)
}

test('hu knowledge articles are Hungarian with en slug parity', () => {
  const en = knowledge.en
  const hu = pick(knowledge, 'hu')
  const failures: string[] = []
  expect(knowledge.hu).toBeDefined()
  for (const a of en) {
    const f = hu.find((x) => x.slug === a.slug)
    if (!f) { failures.push(`${a.slug}: missing in hu`); continue }
    assertHungarian(
      failures,
      `${a.slug}.h1`,
      `${f.h1} ${f.intro} ${f.sections.map((x) => `${x.title} ${x.body.join(' ')}`).join(' ')}`,
    )
  }
  expect(failures).toEqual([])
  expect(knowledgeMeta.hu.metaTitle).toBeDefined()
  assertHungarian(failures, 'knowledgeMeta.metaTitle', knowledgeMeta.hu.metaTitle)
  expect(failures).toEqual([])
})

test('hu projects are Hungarian with en slug parity and invariant assets', () => {
  const en = projects.en
  const hu = pick(projects, 'hu')
  const failures: string[] = []
  expect(hu.length).toBe(en.length)
  for (const p of en) {
    const f = hu.find((x) => x.slug === p.slug)
    if (!f) { failures.push(`${p.slug}: missing in hu`); continue }
    assertHungarian(
      failures,
      `${p.slug}.content`,
      `${f.h1} ${f.intro.join(' ')} ${f.process.map((x) => x.title).join(' ')} ${f.customizations.join(' ')} ${f.inspectionFocus.join(' ')} ${f.outcome}`,
    )
  }
  expect(failures).toEqual([])
  expect(projectsMeta.hu.metaTitle).toBeDefined()
  assertHungarian(failures, 'projectsMeta.metaTitle', projectsMeta.hu.metaTitle)
  expect(failures).toEqual([])
})

test('hu series landing pages are Hungarian with en slug parity', () => {
  const en = seriesPages.en
  const hu = pick(seriesPages, 'hu')
  const failures: string[] = []
  expect(hu.length).toBe(en.length)
  for (const s of en) {
    const f = hu.find((x) => x.slug === s.slug)
    if (!f) { failures.push(`${s.slug}: missing in hu`); continue }
    assertHungarian(failures, `${s.slug}.h1`, `${f.h1} ${f.intro}`)
  }
  expect(failures).toEqual([])
})

test('hu solution pages are Hungarian with en slug parity', () => {
  const en = solutionPages.en
  const hu = pick(solutionPages, 'hu')
  const failures: string[] = []
  expect(hu.length).toBe(en.length)
  for (const s of en) {
    const f = hu.find((x) => x.slug === s.slug)
    if (!f) { failures.push(`${s.slug}: missing in hu`); continue }
    assertHungarian(failures, `${s.slug}.h1`, `${f.h1} ${f.intro}`)
  }
  expect(failures).toEqual([])
})

test('hu guides are Hungarian with en slug parity', () => {
  const en = localizedGuides('en')
  const hu = localizedGuides('hu')
  const failures: string[] = []
  expect(hu.length).toBe(en.length)
  for (const g of en) {
    const f = hu.find((x) => x.slug === g.slug)
    if (!f) { failures.push(`${g.slug}: missing in hu`); continue }
    assertHungarian(failures, `${g.slug}.intro`, `${f.title} ${f.intro}`)
  }
  expect(failures).toEqual([])
  const cards = GUIDE_CARDS.hu
  expect(cards.length).toBe(GUIDE_CARDS.en.length)
})

test('hu home & catalog content is Hungarian', () => {
  const failures: string[] = []
  assertHungarian(failures, 'hero.title', `${pick(hero, 'hu').titlePre} ${pick(hero, 'hu').titleAccent} ${pick(hero, 'hu').sub}`)
  assertHungarian(failures, 'products.tagline', pick(products, 'hu').title)
  const huItems = pick(products, 'hu').items
  const enItems = products.en.items
  expect(huItems.length).toBe(enItems.length)
  for (const item of enItems) {
    const f = huItems.find((x) => x.slug === item.slug)
    if (!f) { failures.push(`${item.slug}: missing in hu products`); continue }
    assertHungarian(failures, `${item.slug}.desc`, `${f.tagline} ${f.desc} ${f.uses.join(' ')} ${f.for.join(' ')}`)
  }
  assertHungarian(failures, 'series.title', `${pick(series, 'hu').title} ${pick(series, 'hu').items[0].title}`)
  assertHungarian(failures, 'about.story', pick(about, 'hu').story.join(' '))
  assertHungarian(failures, 'solve.title', `${pick(solve, 'hu').title} ${pick(solve, 'hu').items[0].title}`)
  assertHungarian(failures, 'faq', `${pick(faq, 'hu').title} ${pick(faq, 'hu').items[0].q}`)
  expect(failures).toEqual([])
})

test('hu procurement profiles are Hungarian with en key parity', () => {
  const en = procurementProfiles.en
  const hu = procurementProfiles.hu
  const failures: string[] = []
  expect(Object.keys(hu).sort()).toEqual(Object.keys(en).sort())
  for (const slug of Object.keys(en)) {
    const f = hu[slug]
    if (!f) { failures.push(`${slug}: missing in hu`); continue }
    assertHungarian(failures, `${slug}.bestFor`, `${f.bestFor} ${f.customization ?? ''}`)
  }
  expect(failures).toEqual([])
})

test('hu product-page customization & OEM application sections are Hungarian', () => {
  expect(CUSTOMIZATION_OPTIONS.hu).toBeDefined()
  expect(OEM_APPLICATIONS.hu).toBeDefined()
  expect(CUSTOMIZATION_OPTIONS.hu.length).toBe(CUSTOMIZATION_OPTIONS.en.length)
  expect(OEM_APPLICATIONS.hu.length).toBe(OEM_APPLICATIONS.en.length)
  const failures: string[] = []
  for (let i = 0; i < CUSTOMIZATION_OPTIONS.en.length; i++) {
    assertHungarian(failures, `customization #${i}`, CUSTOMIZATION_OPTIONS.hu[i].title + ' ' + CUSTOMIZATION_OPTIONS.hu[i].body)
  }
  for (let i = 0; i < OEM_APPLICATIONS.en.length; i++) {
    assertHungarian(failures, `oem-application #${i}`, OEM_APPLICATIONS.hu[i].title + ' ' + OEM_APPLICATIONS.hu[i].body)
  }
  expect(failures).toEqual([])
})

test('hu product FAQ pool is Hungarian (no Spanish/German/French en fallback)', () => {
  expect(PRODUCT_FAQ_POOL.hu.length).toBe(PRODUCT_FAQ_POOL.en.length)
  const failures: string[] = []
  for (let i = 0; i < PRODUCT_FAQ_POOL.en.length; i++) {
    const qa = `${PRODUCT_FAQ_POOL.hu[i].q} ${PRODUCT_FAQ_POOL.hu[i].a}`
    assertHungarian(failures, `faq #${i}`, qa)
    expect(qa).not.toMatch(/[¿¡ñ]/i)
    expect(qa).not.toMatch(/[àèìòù]/i)
    expect(qa).not.toMatch(/[äï]/i)
    expect(qa).not.toMatch(/[\u0400-\u04FF]/)
    expect(PRODUCT_FAQ_POOL.hu[i].q).not.toBe(PRODUCT_FAQ_POOL.en[i].q)
  }
  expect(failures).toEqual([])
})

test('localized facts (FACTS_LOCALE) provide Hungarian shorthands', () => {
  const huAll = Object.values(FACTS_LOCALE.hu).flat().join(' ') + Object.values(FACTS_LOCALE.hu.moq).join(' ')
  expect(huAll).toMatch(/db\.|nap|henger|nyomás|szerszám/)
  expect(huAll.toLowerCase()).not.toMatch(/\bpcs\b|\bdays\b|\border\b|\bpieces\b/)
  expect(huAll.toLowerCase()).not.toMatch(/[äï]/) // only non-Hungarian diacritics; ö/ü (e.g. nyomáscsökkenés) are legal
  expect(huAll).not.toMatch(/å|æ|ø|â|ê|ô|û/i)
  expect(huAll).not.toMatch(/[\u0400-\u04FF]/)
})