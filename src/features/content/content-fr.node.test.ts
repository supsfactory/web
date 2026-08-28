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
import { knowledge, knowledgeMeta } from '@/product/knowledge'
import { projects, projectsMeta } from '@/product/projects'
import { seriesPages } from '@/product/series-pages'
import { solutionPages } from '@/product/solution-pages'
import { localizedGuides, GUIDE_CARDS } from '@/product/guide-content'
import { procurementProfiles } from '@/product/procurement'

const contentRoot = resolve(process.cwd(), 'src/content/site')

/** French markers: accented characters or common French tokens. */
const FRENCH_RE = /[éèêàçôûîïœ«»ÉÈÊÀÇÔÛÎÏ]|\b(le|la|les|un|une|des|du|de|au|aux|et|ou|pour|avec|dans|sur|est|sont|sera|ont|que|qui|quelle|quel|quels|quelles|notre|votre|vos|nos|nous|vous|leur|leurs|en|par|cette|ces|planche|planches|gonflable|peut)\b/i

function isFrench(text: string): boolean {
  return FRENCH_RE.test(text)
}

function pageSlugToFrFile(slug: string): string {
  return resolve(contentRoot, `pages/${slug}.fr.yaml`)
}

test('fr pages load French content (not en fallback)', () => {
  const failures: string[] = []
  for (const path of getPublicPaths()) {
    const slug = path.split('/').filter(Boolean).pop() ?? ''
    if (!existsSync(pageSlugToFrFile(slug))) continue
    const en = getContentPage(path)
    const fr = getContentPage(path, 'fr')
    if (!fr) { failures.push(`${path}: no fr page`); continue }
    if (JSON.stringify(fr.content) === JSON.stringify(en?.content ?? {})) {
      failures.push(`${path}: fr content identical to en (fallback)`)
      continue
    }
    if (!isFrench(JSON.stringify({ ...fr.meta, ...fr.content }))) {
      failures.push(`${path}: fr content has no French text`)
    }
  }
  expect(failures).toEqual([])
})

test('fr news posts load French titles', () => {
  const en = getNewsPosts('en')
  const fr = getNewsPosts('fr')
  const failures: string[] = []
  for (const post of fr) {
    const base = en.find((p) => p.slug === post.slug)
    if (!base || base.title === post.title) {
      failures.push(`${post.slug}: fr title fell back to en`)
      continue
    }
    if (!isFrench(post.title)) failures.push(`${post.slug}: title not French`)
  }
  expect(failures).toEqual([])
})

test('fr products load French copy', () => {
  const en = getContentProducts('en')
  const fr = getContentProducts('fr')
  const failures: string[] = []
  for (const p of fr) {
    const base = en.find((x) => x.slug === p.slug)
    if (!base) { failures.push(`${p.slug}: missing in en`); continue }
    // Product titles are locale-invariant brand names; translate the body/summary.
    const sample = `${p.summary ?? ''} ${p.description ?? ''} ${p.body ?? ''}`
    if (sample.length === 0) { failures.push(`${p.slug}: no copy to check`); continue }
    if (!isFrench(sample)) failures.push(`${p.slug}: product copy not French`)
  }
  expect(failures).toEqual([])
})

test('fr technology articles load French copy', () => {
  const en = getTechArticles('en')
  const fr = getTechArticles('fr')
  const failures: string[] = []
  for (const a of fr) {
    const base = en.find((x) => x.slug === a.slug)
    if (!base || base.title === a.title) { failures.push(`${a.slug}: fr title fell back to en`); continue }
    if (!isFrench(a.title)) failures.push(`${a.slug}: title not French`)
  }
  expect(failures).toEqual([])
})

test('fr case-use articles load French copy', () => {
  const en = getCaseUses('en')
  const fr = getCaseUses('fr')
  const failures: string[] = []
  for (const c of fr) {
    const base = en.find((x) => x.slug === c.slug)
    if (!base || base.title === c.title) { failures.push(`${c.slug}: fr title fell back to en`); continue }
    if (!isFrench(c.title)) failures.push(`${c.slug}: title not French`)
  }
  expect(failures).toEqual([])
})

test('fr research topics load French copy', () => {
  const en = getResearchTopics('en')
  const fr = getResearchTopics('fr')
  const failures: string[] = []
  for (const r of fr) {
    const base = en.find((x) => x.slug === r.slug)
    if (!base || (base.category === r.category && base.readTime === r.readTime)) {
      failures.push(`${r.slug}: fr overlay fell back to en`)
      continue
    }
    if (!isFrench(r.readTime)) failures.push(`${r.slug}: readTime not French (${r.readTime})`)
  }
  expect(failures).toEqual([])
})

test('fr faqs load French questions', () => {
  const en = getSiteFaqs('en')
  const fr = getSiteFaqs('fr')
  if (en.length === 0 || fr.length === 0) {
    expect(fr.length).toBeGreaterThan(0)
    return
  }
  const failures: string[] = []
  for (let i = 0; i < Math.min(en.length, fr.length); i++) {
    const enQ = en[i].q
    const frQ = fr[i].q
    if (enQ === frQ) { failures.push(`faq #${i}: fr question fell back to en`); continue }
    if (!isFrench(frQ)) failures.push(`faq #${i}: question not French`)
  }
  expect(failures).toEqual([])
})

test('every en content file has a .fr counterpart (except locale-agnostic site/pages.yaml)', () => {
  const missing: string[] = []
  const dirs = ['pages', 'news', 'products', 'technology', 'case-use', 'site']
  for (const dir of dirs) {
    for (const name of readdirSync(resolve(contentRoot, dir))) {
      if (name.includes('.fr.') || name.includes('.es.')) continue
      if (dir === 'site' && name === 'pages.yaml') continue
      const frName = name.replace(/(\.(yaml|mdx|md))$/, '.fr$1')
      if (!existsSync(resolve(contentRoot, `${dir}/${frName}`))) {
        missing.push(`${dir}/${name}`)
      }
    }
  }
  expect(missing).toEqual([])
})

/* ─────────────────────── TS data layer (Part B) ─────────────────────── */

function assertFrench(failures: string[], label: string, sample: string) {
  if (!isFrench(sample)) failures.push(`${label}: not French (${sample.slice(0, 60)})`)
}

test('fr knowledge articles are French with en slug parity', () => {
  const en = knowledge.en
  const fr = pick(knowledge, 'fr')
  const failures: string[] = []
  expect(knowledge.es).toBeDefined()
  for (const a of en) {
    const f = fr.find((x) => x.slug === a.slug)
    if (!f) { failures.push(`${a.slug}: missing in fr`); continue }
    assertFrench(
      failures,
      `${a.slug}.h1`,
      `${f.h1} ${f.intro} ${f.sections.map((x) => `${x.title} ${x.body.join(' ')}`).join(' ')}`,
    )
  }
  expect(failures).toEqual([])
  expect(knowledgeMeta.fr.metaTitle).toBeDefined()
  assertFrench(failures, 'knowledgeMeta.metaTitle', knowledgeMeta.fr.metaTitle)
  expect(failures).toEqual([])
})

test('fr projects are French with en slug parity and invariant assets', () => {
  const en = projects.en
  const fr = pick(projects, 'fr')
  const failures: string[] = []
  expect(fr.length).toBe(en.length)
  for (const p of en) {
    const f = fr.find((x) => x.slug === p.slug)
    if (!f) { failures.push(`${p.slug}: missing in fr`); continue }
    assertFrench(
      failures,
      `${p.slug}.content`,
      `${f.h1} ${f.intro.join(' ')} ${f.process.map((x) => x.title).join(' ')} ${f.customizations.join(' ')} ${f.inspectionFocus.join(' ')} ${f.outcome}`,
    )
  }
  expect(failures).toEqual([])
  expect(projectsMeta.fr.metaTitle).toBeDefined()
  assertFrench(failures, 'projectsMeta.metaTitle', projectsMeta.fr.metaTitle)
  expect(failures).toEqual([])
})

test('fr series landing pages are French with en slug parity', () => {
  const en = seriesPages.en
  const fr = pick(seriesPages, 'fr')
  const failures: string[] = []
  expect(fr.length).toBe(en.length)
  for (const s of en) {
    const f = fr.find((x) => x.slug === s.slug)
    if (!f) { failures.push(`${s.slug}: missing in fr`); continue }
    assertFrench(failures, `${s.slug}.h1`, `${f.h1} ${f.intro}`)
  }
  expect(failures).toEqual([])
})

test('fr solution pages are French with en slug parity', () => {
  const en = solutionPages.en
  const fr = pick(solutionPages, 'fr')
  const failures: string[] = []
  expect(fr.length).toBe(en.length)
  for (const s of en) {
    const f = fr.find((x) => x.slug === s.slug)
    if (!f) { failures.push(`${s.slug}: missing in fr`); continue }
    assertFrench(failures, `${s.slug}.h1`, `${f.h1} ${f.intro}`)
  }
  expect(failures).toEqual([])
})

test('fr guides are French with en slug parity', () => {
  const en = localizedGuides('en')
  const fr = localizedGuides('fr')
  const failures: string[] = []
  expect(fr.length).toBe(en.length)
  for (const g of en) {
    const f = fr.find((x) => x.slug === g.slug)
    if (!f) { failures.push(`${g.slug}: missing in fr`); continue }
    assertFrench(failures, `${g.slug}.intro`, `${f.title} ${f.intro}`)
  }
  expect(failures).toEqual([])
  const cards = GUIDE_CARDS.fr
  expect(cards.length).toBe(GUIDE_CARDS.en.length)
})

test('fr home & catalog content is French', () => {
  const failures: string[] = []
  assertFrench(failures, 'hero.title', `${pick(hero, 'fr').titlePre} ${pick(hero, 'fr').titleAccent} ${pick(hero, 'fr').sub}`)
  assertFrench(failures, 'products.tagline', pick(products, 'fr').title)
  const frItems = pick(products, 'fr').items
  const enItems = products.en.items
  expect(frItems.length).toBe(enItems.length)
  for (const item of enItems) {
    const f = frItems.find((x) => x.slug === item.slug)
    if (!f) { failures.push(`${item.slug}: missing in fr products`); continue }
    assertFrench(failures, `${item.slug}.desc`, `${f.tagline} ${f.desc} ${f.uses.join(' ')} ${f.for.join(' ')}`)
  }
  assertFrench(failures, 'series.title', `${pick(series, 'fr').title} ${pick(series, 'fr').items[0].title}`)
  assertFrench(failures, 'about.story', pick(about, 'fr').story.join(' '))
  assertFrench(failures, 'solve.title', `${pick(solve, 'fr').title} ${pick(solve, 'fr').items[0].title}`)
  assertFrench(failures, 'faq', `${pick(faq, 'fr').title} ${pick(faq, 'fr').items[0].q}`)
  expect(failures).toEqual([])
})

test('fr procurement profiles are French with es key parity', () => {
  const en = procurementProfiles.en
  const fr = procurementProfiles.fr
  const failures: string[] = []
  expect(Object.keys(fr).sort()).toEqual(Object.keys(en).sort())
  for (const slug of Object.keys(en)) {
    const f = fr[slug]
    if (!f) { failures.push(`${slug}: missing in fr`); continue }
    assertFrench(failures, `${slug}.bestFor`, `${f.bestFor} ${f.customization ?? ''}`)
  }
  expect(failures).toEqual([])
})