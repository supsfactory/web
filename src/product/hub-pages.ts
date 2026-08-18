import type { Locale } from '@/features/i18n/locale'
import type { SearchEntry } from '@/features/site/search'
import {
  boundary,
  capability,
  commercial,
  cta,
  faq,
  gallery,
  galleryPage,
  guides,
  hero,
  manufacturingGuides,
  pick,
  platforms,
  products,
  productsPage,
  quality,
  series,
  serve,
  solutions,
  solve,
  strip,
  studio,
  trustBar,
  valueProp,
  videoShowcase,
  why,
  works,
} from './content'
import { solutionPages } from './solution-pages'
import { seriesPages } from './series-pages'
import { knowledge, knowledgeMeta } from './knowledge'
import { projects, projectsMeta } from './projects'
import { GUIDE_CARDS } from './guide-content'
import { brandify } from '@/features/content/loader'

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
  const w = pick(why, locale)
  const tb = pick(trustBar, locale)
  const so = pick(solve, locale)
  const ca = pick(capability, locale)
  const q = pick(quality, locale)
  const cm = pick(commercial, locale)
  const se = pick(serve, locale)
  const vp = pick(valueProp, locale)
  const b = pick(boundary, locale)
  const wo = pick(works, locale)
  const pl = pick(platforms, locale)
  const st = pick(studio, locale)
  const sy = pick(series, locale)
  const ga = pick(gallery, locale)
  const gd = pick(guides, locale)
  const f = pick(faq, locale)
  const c = pick(cta, locale)
  const v = pick(videoShowcase, locale)
  return parts(
    h.kicker, h.titlePre, h.titleAccent, h.titlePost, h.sub, h.heroNote,
    h.stats.flatMap((s) => [s.value, s.label]),
    `${h.float1.value} ${h.float1.label}`, `${h.float2.value} ${h.float2.label}`,
    pick(strip, locale),
    w.title, w.sub, w.bullets.flatMap((x) => [x.title, x.body]),
    tb.stats.flatMap((s) => [s.value, s.label]),
    so.title, so.sub, so.items.flatMap((x) => [x.title, x.body]),
    ca.title, ca.sub, ca.items.flatMap((x) => [x.name, x.body]),
    q.title, q.sub, q.steps.flatMap((s) => [s.title, s.body]),
    cm.title, cm.sub, cm.cells.flatMap((x) => [x.label, ...x.lines]),
    cm.moqTiers.flatMap((m) => [m.stage, m.quantity, m.purpose, m.note]),
    cm.certs,
    se.title, se.sub, se.segments.flatMap((s) => [s.title, s.body, ...s.points]),
    vp.title, vp.sub, vp.cards.flatMap((x) => [x.title, x.body]),
    b.title, b.sub, b.oursTitle, b.theirsTitle, b.rows.flatMap((r) => [r.ours, r.theirs]), b.footer,
    wo.title, wo.sub, wo.steps.flatMap((s) => [s.title, s.body]), wo.note,
    pl.title, pl.sub, pl.items.flatMap((x) => [x.title, x.body, ...x.uses]),
    st.title, st.sub, st.steps.flatMap((s) => [s.title, s.body]),
    sy.title, sy.sub, sy.items.flatMap((x) => [x.title, x.sku, x.body]),
    ga.title, ga.sub, ga.projects.flatMap((p) => [p.tag, p.title, p.body]),
    gd.title, gd.sub, gd.guides.flatMap((x) => [x.title, x.body]),
    f.title, f.sub, f.items.flatMap((x) => [`Q: ${x.q}`, `A: ${x.a}`]),
    c.title, c.body,
    v.launch.title, v.launch.sub, v.launch.points.flatMap((p) => [p.t, p.d ?? '']),
    v.process.title, v.process.sub, v.process.points.flatMap((p) => [p.t, p.d ?? '']),
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
    seriesPages[locale].flatMap((s) => [s.navLabel, s.metaDescription]),
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
  const m = projectsMeta[locale]
  return parts(
    m.h1, m.metaDescription,
    projects[locale].flatMap((p) => [p.industry, p.productCategory, p.h1, p.requirement]),
  )
}

function knowledgeContent(locale: Locale): string {
  const mfg = pick(manufacturingGuides, locale)
  return parts(
    knowledgeMeta[locale].h1, knowledgeMeta[locale].metaDescription,
    knowledge[locale].flatMap((a) => [a.h1, a.intro]),
    GUIDE_CARDS[locale].flatMap((g) => [g.title, g.intro]),
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
  if (locale === 'es') {
    const knowledgeMetaData = knowledgeMeta.es
    const projectsMetaData = projectsMeta.es
    const entries: SearchEntry[] = [
      {
        url: '/es',
        title: 'SUPsfactory — Fabricación OEM y ODM de SUP hinchables',
        excerpt: 'Fábrica OEM/ODM de SUP hinchables en Qingdao: desarrollo de producto, producción a medida, marca privada y control de calidad.',
        content: homeContent('es'),
        type: 'page',
        locale,
      },
      {
        url: '/es/products',
        title: 'Productos de SUP hinchables',
        excerpt: 'Tablas de SUP hinchables premium: series de 11 ft, SUP de pesca, mini SUP, tablas gigantes para equipo y más — fabricación OEM/ODM a medida.',
        content: productsContent('es'),
        type: 'page',
        locale,
      },
      {
        url: '/es/solutions',
        title: 'Soluciones',
        excerpt: 'Programas de fabricación OEM/ODM de SUP: desarrollo de SUP a medida, marca privada, flotas de resorts y clubes, alquiler y minoristas.',
        content: solutionsContent('es'),
        type: 'page',
        locale,
      },
      {
        url: '/es/projects',
        title: projectsMetaData.metaTitle,
        excerpt: projectsMetaData.metaDescription,
        content: projectsContent('es'),
        type: 'page',
        locale,
      },
      {
        url: '/es/knowledge',
        title: knowledgeMetaData.metaTitle,
        excerpt: knowledgeMetaData.metaDescription,
        content: knowledgeContent('es'),
        type: 'page',
        locale,
      },
      {
        url: '/es/gallery',
        title: 'Galería',
        excerpt: 'Fábrica y galería de productos SUPsfactory: talleres, laboratorios de calidad, ensayos de tejido y tablas de SUP en producción.',
        content: galleryContent('es'),
        type: 'page',
        locale,
      },
    ]
    return entries
  }
  const knowledgeMetaData = knowledgeMeta.en
  const projectsMetaData = projectsMeta.en
  return [
    {
      url: '/',
      title: 'SUPsfactory — Inflatable SUP OEM & ODM Manufacturing',
      excerpt: 'Qingdao SUP OEM/ODM factory: product development, custom manufacturing, private label and quality control for paddle board brands.',
      content: homeContent('en'),
      type: 'page',
      locale,
    },
    {
      url: '/products',
      title: 'Inflatable SUP Products',
      excerpt: 'Premium inflatable SUP boards: 11 ft series boards, fishing SUP, mini SUP, giant team boards and more — built for OEM/ODM customization.',
      content: productsContent('en'),
      type: 'page',
      locale,
    },
    {
      url: '/solutions',
      title: 'Solutions',
      excerpt: 'OEM/ODM SUP manufacturing programs: custom SUP development, private label, resort and club fleets, rental operators and retail partners.',
      content: solutionsContent('en'),
      type: 'page',
      locale,
    },
    {
      url: '/projects',
      title: projectsMetaData.metaTitle,
      excerpt: projectsMetaData.metaDescription,
      content: projectsContent('en'),
      type: 'page',
      locale,
    },
    {
      url: '/knowledge',
      title: knowledgeMetaData.metaTitle,
      excerpt: knowledgeMetaData.metaDescription,
      content: knowledgeContent('en'),
      type: 'page',
      locale,
    },
    {
      url: '/gallery',
      title: 'Gallery',
      excerpt: 'SUPsfactory factory and product gallery: workshops, quality labs, fabric testing and SUP boards in production.',
      content: galleryContent('en'),
      type: 'page',
      locale,
    },
  ]
}