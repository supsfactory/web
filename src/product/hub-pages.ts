import type { Locale } from '@/features/i18n/locale'
import type { SearchEntry } from '@/features/content/types'
import {
  commercial,
  cta,
  gallery,
  galleryPage,
  hero,
  homeFaq,
  manufacturingGuides,
  pick,
  products,
  productsPage,
  series,
  serve,
  solutions,
  solve,
  studio,
} from './content'
import { solutionPages } from './solution-pages'
import { seriesPages } from './series-pages'
import { knowledge, knowledgeMeta } from './knowledge'
import { projects, projectsMeta } from './projects'
import { GUIDE_CARDS } from './guide-content'

function pickArr<T>(d: Record<string, T[]>, locale: Locale): T[] {
  return d[locale] ?? d.en
}

function pickVal<T>(d: Record<string, T>, locale: Locale): T {
  return d[locale] ?? d.en
}
import { brandify } from '@/features/content/brand'
import { HUB_PAGE_ENTRIES } from './ai-content'

/**
 * Structured registry for the six live hub/landing pages that ship no yaml
 * registry entry (static routes / framework templates). Each entry carries a
 * body `content` composed from the real localized section data so hub pages
 * are fully searchable instead of matching only title + excerpt.
 */

const squeeze = (s: string): string => s.replace(/\s+/g, ' ').trim()

/** Collapse every chunk into one whitespace-normalized string. */
function parts(...xs: (string | string[] | undefined)[]): string {
  const flat: string[] = []
  for (const x of xs) {
    if (!x) continue
    if (Array.isArray(x)) flat.push(...x.filter((s): s is string => !!s))
    else flat.push(x)
  }
  return squeeze(brandify(flat.join(' ')))
}

function homeContent(locale: Locale): string {
  const h = pick(hero, locale)
  const so = pick(solve, locale)
  const cm = pick(commercial, locale)
  const se = pick(serve, locale)
  const f = pick(homeFaq, locale)
  const c = pick(cta, locale)
  return parts(
    h.kicker, h.titlePre, h.titleAccent, h.titlePost, h.sub, h.heroNote,
    h.stats.flatMap((s) => [s.value, s.label]),
    `${h.float1.value} ${h.float1.label}`, `${h.float2.value} ${h.float2.label}`,
    so.title, so.sub, so.items.flatMap((x) => [x.title, x.body]),
    cm.title, cm.sub, cm.cells.flatMap((x) => [x.label, ...x.lines]),
    cm.moqTiers.flatMap((m) => [m.stage, m.quantity, m.purpose, m.note]),
    cm.certs,
    se.title, se.sub, se.segments.flatMap((s) => [s.title, s.body, ...s.points]),
    f.title, f.sub, f.items.flatMap((x) => [`Q: ${x.q}`, `A: ${x.a}`]),
    c.title, c.body,
  )
}

function productsContent(locale: Locale): string {
  const pp = pick(productsPage, locale)
  const p = pick(products, locale)
  const sy = pick(series, locale)
  return parts(
    pp.kicker, pp.title, pp.sub, pp.customTitle, pp.customBody, pp.customPoints,
    p.kicker, p.title, p.sub,
    p.items.flatMap((x) => [x.name, x.tagline, x.desc, x.specs, ...x.uses, ...x.for]),
    sy.kicker, sy.title, sy.sub, sy.items.flatMap((x) => [x.title, x.body]),
    pickArr(seriesPages, locale).flatMap((s) => [s.navLabel, s.metaDescription]),
  )
}

function solutionsContent(locale: Locale): string {
  const s = pick(solutions, locale)
  return parts(
    s.kicker, s.title, s.sub,
    s.pillars.flatMap((p) => [p.title, p.body, ...p.points]),
    pick(solutionPages, locale).flatMap((p) => [p.navLabel, p.metaDescription]),
  )
}

function projectsContent(locale: Locale): string {
  const m = pickVal(projectsMeta, locale)
  return parts(
    m.h1, m.metaDescription,
    pickArr(projects, locale).flatMap((p) => [p.industry, p.productCategory, p.h1, p.requirement]),
  )
}

function knowledgeContent(locale: Locale): string {
  const mfg = pick(manufacturingGuides, locale)
  const km = pickVal(knowledgeMeta, locale)
  return parts(
    km.h1, km.metaDescription,
    pickArr(knowledge, locale).flatMap((a) => [a.h1, a.intro]),
    pickArr(GUIDE_CARDS, locale).flatMap((g) => [g.title, g.intro]),
    mfg.title, mfg.sub, mfg.guides.flatMap((g) => [g.title, g.body]),
  )
}

function galleryContent(locale: Locale): string {
  const g = pick(galleryPage, locale)
  const ga = pick(gallery, locale)
  const st = pick(studio, locale)
  return parts(
    g.kicker, g.title, g.sub, g.note,
    ga.title, ga.sub, ga.projects.flatMap((p) => [p.tag, p.title, p.body]),
    st.title, st.sub, st.steps.flatMap((s) => [s.title, s.body]),
  )
}

export function buildHubEntries(locale: Locale): SearchEntry[] {
  const templates = HUB_PAGE_ENTRIES[locale] ?? HUB_PAGE_ENTRIES.en
  const projectsMetaData = pickVal(projectsMeta, locale)
  const knowledgeMetaData = pickVal(knowledgeMeta, locale)
  const contentFns: Record<string, (l: Locale) => string> = {
    '/': homeContent,
    '/es': homeContent,
    '/products': productsContent,
    '/es/products': productsContent,
    '/solutions': solutionsContent,
    '/es/solutions': solutionsContent,
    '/projects': projectsContent,
    '/es/projects': projectsContent,
    '/knowledge': knowledgeContent,
    '/es/knowledge': knowledgeContent,
    '/gallery': galleryContent,
    '/es/gallery': galleryContent,
  }
  return templates.map((t) => ({
    url: t.url,
    title: t.url === '/projects' || t.url === '/es/projects'
      ? projectsMetaData.metaTitle
      : t.url === '/knowledge' || t.url === '/es/knowledge'
        ? knowledgeMetaData.metaTitle
        : t.title,
    excerpt: t.url === '/projects' || t.url === '/es/projects'
      ? projectsMetaData.metaDescription
      : t.url === '/knowledge' || t.url === '/es/knowledge'
        ? knowledgeMetaData.metaDescription
        : t.excerpt,
    content: (contentFns[t.url] ?? homeContent)(locale),
    type: 'page' as const,
    locale,
  }))
}