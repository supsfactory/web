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

/** Finnish markers: äö diacritics, common Finnish function words, or product-domain words (prefix match covers inflections). */
const FINNISH_RE = /[äöÄÖ]|\b(ja|on|ei|että|joka|jotka|kun|niin|mutta|tai|myös|voi|voivat|pitää|pitäisi|halua|haluat|sinä|me|meidän|te|teidän|he|heidän|oman|omaa|omat|oma|usein|miten|mistä|kuka|mikä|milloin|missä|tämä|nämä|siinä|tästä|näistä|se|ne|kaikki|hän|voit|osaa|tarvitse|saa|saavat|anna|ota|erittäin|vain|jopa|kuten|varten|ennen|jälkeen|välillä|mukana|ilman|kautta|kanssa|koska|siksi|siis|myös|yleensä|erilaisi|aiheutt|lauta\w*|puhallettav\w*|mela\w*|vakain\w*|hihna\w*|kansi\w*|kannet|näyte\w*|prototyyppi\w*|pilottisarj\w*|vähimmäiseräkoot|sarjatuotant\w*|tilaus\w*|tilaukse|toimitus\w*|lähetys\w*|kuljetus\w*|räätälöid\w*|räätälöint\w*|pakkaus\w*|takuu\w*|valmistaj\w*|valmistu\w*|tehta\w*|asiak\w*|jakelij\w*|jälleenmyyj\w*|tukku\w*|laadunvalvont\w*|tarkast\w*|tarjous\w*|ehto\w*|yritys\w*|sertifioin\w*|vaatimustenmukaisuus\w*|jäljitettävyy\w*|raaka-aine\w*|PVC-kangas|korkeataajuu\w*|hitsaus\w*|reunavahvikk\w*|venttiil\w*|kpl\w*|päivää\w*|lukuaika\w*|oppaa\w*|opas|deal\w*|uutinen\w*|prototyyp\w*|laut\w*|melont\w*|toimitt\w*|mukaut\w*|alusta\w*|valmist\w*|tuote\w*|tuott\w*|rakenn\w*|sotilas\w*|tapaa\w*|tapa\b|kaksi\b|koulut\w*|perhe\w*|vesiretkeil\w*|kalusto\w*|valit\w*)\b/i

function isFinnish(text: string): boolean {
  return FINNISH_RE.test(text)
}

function pageSlugToFiFile(slug: string): string {
  return resolve(contentRoot, `pages/${slug}.fi.yaml`)
}

test('fi pages load Finnish content (not en fallback)', () => {
  const failures: string[] = []
  for (const path of getPublicPaths()) {
    const slug = path.split('/').filter(Boolean).pop() ?? ''
    if (!existsSync(pageSlugToFiFile(slug))) continue
    const en = getContentPage(path)
    const fi = getContentPage(path, 'fi')
    if (!fi) { failures.push(`${path}: no fi page`); continue }
    if (JSON.stringify(fi.content) === JSON.stringify(en?.content ?? {})) {
      failures.push(`${path}: fi content identical to en (fallback)`)
      continue
    }
    if (!isFinnish(JSON.stringify({ ...fi.meta, ...fi.content }))) {
      failures.push(`${path}: fi content has no Finnish text`)
    }
  }
  expect(failures).toEqual([])
})

test('fi news posts load Finnish titles', () => {
  const en = getNewsPosts('en')
  const fi = getNewsPosts('fi')
  const failures: string[] = []
  for (const post of fi) {
    const base = en.find((p) => p.slug === post.slug)
    if (!base || base.title === post.title) {
      failures.push(`${post.slug}: fi title fell back to en`)
      continue
    }
    if (!isFinnish(post.title)) failures.push(`${post.slug}: title not Finnish`)
  }
  expect(failures).toEqual([])
})

test('fi products load Finnish copy', () => {
  const en = getContentProducts('en')
  const fi = getContentProducts('fi')
  const failures: string[] = []
  for (const p of fi) {
    const base = en.find((x) => x.slug === p.slug)
    if (!base) { failures.push(`${p.slug}: missing in en`); continue }
    // Product titles are locale-invariant brand names; translate the body/summary.
    const sample = `${p.summary ?? ''} ${p.description ?? ''} ${p.body ?? ''}`
    if (sample.length === 0) { failures.push(`${p.slug}: no copy to check`); continue }
    if (!isFinnish(sample)) failures.push(`${p.slug}: product copy not Finnish`)
  }
  expect(failures).toEqual([])
})

test('fi technology articles load Finnish copy', () => {
  const en = getTechArticles('en')
  const fi = getTechArticles('fi')
  const failures: string[] = []
  for (const a of fi) {
    const base = en.find((x) => x.slug === a.slug)
    if (!base || base.title === a.title) { failures.push(`${a.slug}: fi title fell back to en`); continue }
    const sample = `${a.title} ${a.summary ?? ''} ${a.body ?? ''}`
    if (!isFinnish(sample)) failures.push(`${a.slug}: title not Finnish`)
  }
  expect(failures).toEqual([])
})

test('fi case-use articles load Finnish copy', () => {
  const en = getCaseUses('en')
  const fi = getCaseUses('fi')
  const failures: string[] = []
  for (const c of fi) {
    const base = en.find((x) => x.slug === c.slug)
    if (!base || base.title === c.title) { failures.push(`${c.slug}: fi title fell back to en`); continue }
    if (!isFinnish(c.title)) failures.push(`${c.slug}: title not Finnish`)
  }
  expect(failures).toEqual([])
})

test('fi research topics load Finnish copy', () => {
  const en = getResearchTopics('en')
  const fi = getResearchTopics('fi')
  const failures: string[] = []
  for (const r of fi) {
    const base = en.find((x) => x.slug === r.slug)
    if (!base || (base.category === r.category && base.readTime === r.readTime)) {
      failures.push(`${r.slug}: fi overlay fell back to en`)
      continue
    }
    if (!isFinnish(r.readTime)) failures.push(`${r.slug}: readTime not Finnish (${r.readTime})`)
  }
  expect(failures).toEqual([])
})

test('fi faqs load Finnish questions', () => {
  const en = getSiteFaqs('en')
  const fi = getSiteFaqs('fi')
  if (en.length === 0 || fi.length === 0) {
    expect(fi.length).toBeGreaterThan(0)
    return
  }
  const failures: string[] = []
  for (let i = 0; i < Math.min(en.length, fi.length); i++) {
    const enQ = en[i].q
    const fiQ = fi[i].q
    if (enQ === fiQ) { failures.push(`faq #${i}: fi question fell back to en`); continue }
    if (!isFinnish(fiQ)) failures.push(`faq #${i}: question not Finnish`)
  }
  expect(failures).toEqual([])
})

test('every en content file has a .fi counterpart (except locale-agnostic site/pages.yaml)', () => {
  const missing: string[] = []
  const dirs = ['pages', 'news', 'products', 'technology', 'case-use', 'site']
  for (const dir of dirs) {
    for (const name of readdirSync(resolve(contentRoot, dir))) {
      if (name.includes('.de.') || name.includes('.es.') || name.includes('.fr.') || name.includes('.it.') || name.includes('.pt.') || name.includes('.nl.') || name.includes('.sv.') || name.includes('.no.') || name.includes('.pl.') || name.includes('.da.') || name.includes('.fi.') || name.includes('.ru.') || name.includes('.cs.') || name.includes('.tr.')) continue
      if (dir === 'site' && name === 'pages.yaml') continue
      const fiName = name.replace(/(\.(yaml|mdx|md))$/, '.fi$1')
      if (!existsSync(resolve(contentRoot, `${dir}/${fiName}`))) {
        missing.push(`${dir}/${name}`)
      }
    }
  }
  expect(missing).toEqual([])
})

test('fi content files contain no leftover /sv /no /nl /pl or /da links', () => {
  const leftover: string[] = []
  const dirs = ['pages', 'news', 'products', 'technology', 'case-use', 'site']
  for (const dir of dirs) {
    for (const name of readdirSync(resolve(contentRoot, dir))) {
      if (!name.includes('.fi.')) continue
      const raw = readFileSync(resolve(contentRoot, `${dir}/${name}`), 'utf8')
      if (/(["'\s(])\/(sv|nl|no|pl|da)\//.test(raw)) leftover.push(`${dir}/${name}`)
    }
  }
  expect(leftover).toEqual([])
})

/* ─────────────────────── TS data layer (Part B) ─────────────────────── */

function assertFinnish(failures: string[], label: string, sample: string) {
  if (!isFinnish(sample)) failures.push(`${label}: not Finnish (${sample.slice(0, 60)})`)
}

test('fi knowledge articles are Finnish with en slug parity', () => {
  const en = knowledge.en
  const fi = pick(knowledge, 'fi')
  const failures: string[] = []
  expect(knowledge.fi).toBeDefined()
  for (const a of en) {
    const f = fi.find((x) => x.slug === a.slug)
    if (!f) { failures.push(`${a.slug}: missing in fi`); continue }
    assertFinnish(
      failures,
      `${a.slug}.h1`,
      `${f.h1} ${f.intro} ${f.sections.map((x) => `${x.title} ${x.body.join(' ')}`).join(' ')}`,
    )
  }
  expect(failures).toEqual([])
  expect(knowledgeMeta.fi.metaTitle).toBeDefined()
  assertFinnish(failures, 'knowledgeMeta.metaTitle', knowledgeMeta.fi.metaTitle)
  expect(failures).toEqual([])
})

test('fi projects are Finnish with en slug parity and invariant assets', () => {
  const en = projects.en
  const fi = pick(projects, 'fi')
  const failures: string[] = []
  expect(fi.length).toBe(en.length)
  for (const p of en) {
    const f = fi.find((x) => x.slug === p.slug)
    if (!f) { failures.push(`${p.slug}: missing in fi`); continue }
    assertFinnish(
      failures,
      `${p.slug}.content`,
      `${f.h1} ${f.intro.join(' ')} ${f.process.map((x) => x.title).join(' ')} ${f.customizations.join(' ')} ${f.inspectionFocus.join(' ')} ${f.outcome}`,
    )
  }
  expect(failures).toEqual([])
  expect(projectsMeta.fi.metaTitle).toBeDefined()
  assertFinnish(failures, 'projectsMeta.metaTitle', projectsMeta.fi.metaTitle)
  expect(failures).toEqual([])
})

test('fi series landing pages are Finnish with en slug parity', () => {
  const en = seriesPages.en
  const fi = pick(seriesPages, 'fi')
  const failures: string[] = []
  expect(fi.length).toBe(en.length)
  for (const s of en) {
    const f = fi.find((x) => x.slug === s.slug)
    if (!f) { failures.push(`${s.slug}: missing in fi`); continue }
    assertFinnish(failures, `${s.slug}.h1`, `${f.h1} ${f.intro}`)
  }
  expect(failures).toEqual([])
})

test('fi solution pages are Finnish with en slug parity', () => {
  const en = solutionPages.en
  const fi = pick(solutionPages, 'fi')
  const failures: string[] = []
  expect(fi.length).toBe(en.length)
  for (const s of en) {
    const f = fi.find((x) => x.slug === s.slug)
    if (!f) { failures.push(`${s.slug}: missing in fi`); continue }
    assertFinnish(failures, `${s.slug}.h1`, `${f.h1} ${f.intro}`)
  }
  expect(failures).toEqual([])
})

test('fi guides are Finnish with en slug parity', () => {
  const en = localizedGuides('en')
  const fi = localizedGuides('fi')
  const failures: string[] = []
  expect(fi.length).toBe(en.length)
  for (const g of en) {
    const f = fi.find((x) => x.slug === g.slug)
    if (!f) { failures.push(`${g.slug}: missing in fi`); continue }
    assertFinnish(failures, `${g.slug}.intro`, `${f.title} ${f.intro}`)
  }
  expect(failures).toEqual([])
  const cards = GUIDE_CARDS.fi
  expect(cards.length).toBe(GUIDE_CARDS.en.length)
})

test('fi home & catalog content is Finnish', () => {
  const failures: string[] = []
  assertFinnish(failures, 'hero.title', `${pick(hero, 'fi').titlePre} ${pick(hero, 'fi').titleAccent} ${pick(hero, 'fi').sub}`)
  assertFinnish(failures, 'products.tagline', pick(products, 'fi').title)
  const fiItems = pick(products, 'fi').items
  const enItems = products.en.items
  expect(fiItems.length).toBe(enItems.length)
  for (const item of enItems) {
    const f = fiItems.find((x) => x.slug === item.slug)
    if (!f) { failures.push(`${item.slug}: missing in fi products`); continue }
    assertFinnish(failures, `${item.slug}.desc`, `${f.tagline} ${f.desc} ${f.uses.join(' ')} ${f.for.join(' ')}`)
  }
  assertFinnish(failures, 'series.title', `${pick(series, 'fi').title} ${pick(series, 'fi').items[0].title}`)
  assertFinnish(failures, 'about.story', pick(about, 'fi').story.join(' '))
  assertFinnish(failures, 'solve.title', `${pick(solve, 'fi').title} ${pick(solve, 'fi').items[0].title}`)
  assertFinnish(failures, 'faq', `${pick(faq, 'fi').title} ${pick(faq, 'fi').items[0].q}`)
  expect(failures).toEqual([])
})

test('fi procurement profiles are Finnish with en key parity', () => {
  const en = procurementProfiles.en
  const fi = procurementProfiles.fi
  const failures: string[] = []
  expect(Object.keys(fi).sort()).toEqual(Object.keys(en).sort())
  for (const slug of Object.keys(en)) {
    const f = fi[slug]
    if (!f) { failures.push(`${slug}: missing in fi`); continue }
    assertFinnish(failures, `${slug}.bestFor`, `${f.bestFor} ${f.customization ?? ''}`)
  }
  expect(failures).toEqual([])
})

test('fi product-page customization & OEM application sections are Finnish', () => {
  expect(CUSTOMIZATION_OPTIONS.fi).toBeDefined()
  expect(OEM_APPLICATIONS.fi).toBeDefined()
  expect(CUSTOMIZATION_OPTIONS.fi.length).toBe(CUSTOMIZATION_OPTIONS.en.length)
  expect(OEM_APPLICATIONS.fi.length).toBe(OEM_APPLICATIONS.en.length)
  const failures: string[] = []
  for (let i = 0; i < CUSTOMIZATION_OPTIONS.en.length; i++) {
    assertFinnish(failures, `customization #${i}`, CUSTOMIZATION_OPTIONS.fi[i].title + ' ' + CUSTOMIZATION_OPTIONS.fi[i].body)
  }
  for (let i = 0; i < OEM_APPLICATIONS.en.length; i++) {
    assertFinnish(failures, `oem-application #${i}`, OEM_APPLICATIONS.fi[i].title + ' ' + OEM_APPLICATIONS.fi[i].body)
  }
  expect(failures).toEqual([])
})

test('fi product FAQ pool is Finnish (not Spanish/German/French-Italian/en fallback)', () => {
  expect(PRODUCT_FAQ_POOL.fi.length).toBe(PRODUCT_FAQ_POOL.en.length)
  const failures: string[] = []
  for (let i = 0; i < PRODUCT_FAQ_POOL.en.length; i++) {
    const qa = `${PRODUCT_FAQ_POOL.fi[i].q} ${PRODUCT_FAQ_POOL.fi[i].a}`
    assertFinnish(failures, `faq #${i}`, qa)
    expect(qa).not.toMatch(/[¿¡ñ]/i)
    expect(qa).not.toMatch(/[àèìòù]/i)
    expect(qa).not.toMatch(/[üß]/i)
    expect(PRODUCT_FAQ_POOL.fi[i].q).not.toBe(PRODUCT_FAQ_POOL.en[i].q)
  }
  expect(failures).toEqual([])
})

test('localized facts (FACTS_LOCALE) provide Finnish shorthands', () => {
  const fiAll = Object.values(FACTS_LOCALE.fi).flat().join(' ') + Object.values(FACTS_LOCALE.fi.moq).join(' ')
  expect(fiAll).toMatch(/kpl\b|päivää|min/)
  expect(fiAll.toLowerCase()).not.toMatch(/\bpcs\b|\bdays\b|\border\b/)
  expect(fiAll).not.toMatch(/[¿¡ñ]/i)
  expect(fiAll).not.toMatch(/[àèìòù]/i)
  expect(fiAll).not.toMatch(/[üß]/i)
  expect(fiAll).not.toMatch(/é|å|æ|ø|ë/i)
})