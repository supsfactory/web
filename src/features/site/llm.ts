import { products } from './content'
import { solutionPages, solutionPath } from './solution-pages'
import { projects } from './projects'
import { knowledge } from './knowledge'
import {
  getContentPages,
  getContentProducts,
  getNewsPosts,
  getTechArticles,
  getCaseUses,
  getResearchTopics,
  getGeoFacts,
  getSiteFaqs,
  brandify,
} from '@/features/content/loader'
import { GUIDES_ES } from '@/features/content/guide-content'
import { EDGE_REDIRECTS } from '@/features/seo/edge-gate'
import { LEGACY_REDIRECTS } from '@/features/seo/legacy-redirects'
import { SITE_NAME } from '@/config/site'
import { PAGE_TITLES } from '@/product/entity-data'
import { LLM_SITE_DESCRIPTION, LLM_FAQ_DESCRIPTION, LLM_SPANISH_HOMEPAGE_DESCRIPTION } from '@/product/ai-content'

const flat = (text: string) => text.replace(/\s+/g, ' ').trim()

const mdBody = (body: string) => body.split('\n').map((l) => l.trim()).filter(Boolean)

/** Recursive bullet renderer for the structured geo facts (arrays → comma lists). */
function fmt(v: unknown, key: string, depth = 0): string[] {
  const pad = '  '.repeat(depth)
  const label = key.replace(/_/g, ' ')
  if (Array.isArray(v)) return [`${pad}- ${label}: ${v.map(String).join(', ')}`]
  if (v && typeof v === 'object') {
    const inner = Object.entries(v).flatMap(([k, val]) => fmt(val, k, depth + 1))
    return [`${pad}- ${label}:`, ...inner]
  }
  return [`${pad}- ${label}: ${String(v)}`]
}

function factsSection(title: string, facts?: Record<string, unknown>): string[] {
  if (!facts || Object.keys(facts).length === 0) return []
  return ['', `## ${title}`, '', ...Object.entries(facts).flatMap(([k, v]) => fmt(v, k))]
}

/**
 * `/llms-full.txt` opening card — concrete company facts instead of a generic
 * template intro, so LLMs answer GEO questions with verifiable numbers.
 */
export function llmSiteHeader(): string {
  const { company, certifications, manufacturing } = getGeoFacts()
  return [
    `# ${SITE_NAME}`,
    '',
    `> ${LLM_SITE_DESCRIPTION.replaceAll('{SITE}', SITE_NAME)}`,
    ...factsSection('Company Facts', company),
    ...factsSection('Certifications', certifications),
    ...factsSection('Manufacturing', manufacturing),
    '',
  ].join('\n')
}

export function llmProductsIndex(origin: string): string {
  // Real product detail pages exist for the ported afarer products — link each
  // entry to its page instead of the /products index.
  const lines = getContentProducts().map((p) => `- [${p.title}](${abs(origin, `/products/${p.slug}`)}): ${flat(p.summary ?? '')}`)
  return ['', '## Products', ...lines, ''].join('\n')
}

export function llmProductsFull(): string {
  const blocks = products.en.items.map((p) =>
    [
      `## ${p.name} (${p.sku})`,
      '',
      flat(p.desc),
      '',
      `- Specs: ${flat(p.specs)}`,
      `- Artwork & construction: ${flat(p.artwork)}`,
      `- Recommended for: ${p.for.join(', ')}`,
    ].join('\n'),
  )
  return ['', '# Products', '', blocks.join('\n\n'), ''].join('\n')
}

/** Index entries for the Solutions system pages (in /llms.txt). */
export function llmSolutionsIndex(origin: string): string {
  const lines = solutionPages.en.map((p) => `- [${p.metaTitle}](${abs(origin, solutionPath(p.slug))}): ${flat(p.metaDescription)}`)
  return ['', '## Solution Pages', ...lines, ''].join('\n')
}

/** Index entries for the project case studies (in /llms.txt). */
export function llmProjectsIndex(origin: string): string {
  const lines = projects.en.map((p) => `- [${p.metaTitle}](${abs(origin, `/projects/${p.slug}`)}): ${flat(p.metaDescription)}`)
  return ['', '## Projects', ...lines, ''].join('\n')
}

/** Index entries for the Knowledge Center articles (in /llms.txt). */
export function llmKnowledgeIndex(origin: string): string {
  const lines = knowledge.en.map((a) => `- [${a.metaTitle}](${abs(origin, `/knowledge/${a.slug}`)}): ${flat(a.metaDescription)}`)
  return ['', '## Knowledge Center', ...lines, ''].join('\n')
}

/** Full text for the project case studies (in /llms-full.txt). */
export function llmProjectsFull(): string {
  const blocks = projects.en.map((p) =>
    [
      `# ${p.h1}`,
      '',
      ...p.intro.map(flat),
      '',
      `Industry: ${p.industry}`,
      '',
      `Requirement: ${flat(p.requirement)}`,
      '',
      `Challenge: ${flat(p.challenge)}`,
      '',
      `Solution: ${flat(p.solution)}`,
      '',
      `Product: ${flat(p.product)}`,
      '',
      '## Process',
      ...p.process.map((s) => `- ${s.title}: ${flat(s.body)}`),
      '',
      `## Result`,
      flat(p.result),
      '',
      `Outcome: ${flat(p.outcome)}`,
      '',
      `Tags: ${p.tags.join(', ')}`,
    ].join('\n'),
  )
  return ['', '# Projects', ...blocks].join('\n\n')
}

/** Full text for the Knowledge Center articles (in /llms-full.txt). */
export function llmKnowledgeFull(): string {
  const blocks = knowledge.en.map((a) =>
    [`# ${a.h1}`, '', flat(a.intro), ...a.sections.flatMap((s) => ['', `## ${s.title}`, '', ...s.body.map(flat)])].join('\n'),
  )
  return ['', '# Knowledge Center', ...blocks].join('\n\n')
}

/** Full text for the Solutions system pages incl. their FAQ Q&A (in /llms-full.txt). */
export function llmSolutionsFull(): string {
  const blocks = solutionPages.en.map((p) =>
    [
      `# ${p.h1}`,
      '',
      ...p.intro.map(flat),
      '',
      `Scenario: ${flat(p.scenario.body)}`,
      '',
      '## Problems & Solutions',
      ...p.pairs.flatMap((pair) => [`- Problem: ${flat(pair.problem)}`, `- Solution: ${flat(pair.solution)}`]),
      '',
      '## Process',
      ...p.steps.map((s) => `- ${s.title}: ${flat(s.body)}`),
      '',
      '## Case Study',
      `- ${p.caseStudy.title}: ${flat(p.caseStudy.body)}`,
      '',
      '## FAQ',
      ...p.faqs.flatMap((f) => [`### Q: ${f.q}`, '', f.a, '']),
    ].join('\n'),
  )
  return ['', ...blocks].join('\n\n')
}

/* ─────────────────────────── afarer (GEO/AI) ─────────────────────────── */

/** `/llms.txt` index sections link to absolute URLs (llmstxt.org) so LLMs can explore directly. */
const abs = (origin: string, path: string) => `${origin}${path}`

/** Index entries for the ported afarer brand pages (in /llms.txt). */
export function llmAfarierIndex(origin: string): string {
  // Derived from the loader (not a hand-maintained list) so revived pages and
  // future registry additions are covered automatically. Edge/legacy-301'd
  // source paths must not appear as canonical URLs — same rule as the sitemap.
  const pageLines = getContentPages()
    .filter((p) => !(p.path in EDGE_REDIRECTS) && !(p.path in LEGACY_REDIRECTS))
    .map((p) => `- [${PAGE_TITLES[p.path] ?? brandify(p.label)}](${abs(origin, p.path)}): ${flat(brandify(p.meta?.description ?? ''))}`)
  const staticLines = [
    `- [FAQ](${abs(origin, '/faq')}): ${LLM_FAQ_DESCRIPTION}`,
  ]
  const resolvedResearch = new Set(getContentPages().map((p) => p.path))
  const researchLines = getResearchTopics()
    .filter((t) => resolvedResearch.has(`/research/${t.slug}`))
    .map((t) => `- [Research: ${t.slug.replace(/-/g, ' ')}](${abs(origin, `/research/${t.slug}`)}): ${t.category}, ${t.readTime}`)
  const newsLines = getNewsPosts()
    .slice(0, 10)
    .map((p) => `- [${p.title}](${abs(origin, `/news/${p.slug}`)}): ${flat(p.excerpt ?? '')}`)
  return [
    '',
    '## Factory, Technology & Resources',
    ...pageLines,
    '',
    '## FAQ',
    ...staticLines,
    '',
    '## Research',
    ...researchLines,
    '',
    '## Latest News',
    ...newsLines,
    '',
  ].join('\n')
}

/** Full text for the afarer factory/technology pages + products + articles. */
export function llmsAfarerFull(): string {
  // Edge-301'd source paths (/brand/afarer, /brand/story, /oem-odm, …) and
  // legacy theafarer-era paths must not appear as canonical URLs in the LLM
  // corpus — same rule as the sitemap.
  const pageBlocks = getContentPages()
    .filter((p) => !(p.path in EDGE_REDIRECTS) && !(p.path in LEGACY_REDIRECTS))
    .map((p) =>
      [`# ${brandify(p.label)}`, '', flat(brandify(p.meta?.description ?? '')), '', `URL: ${p.path}`].join('\n'),
    )
  const productBlocks = getContentProducts().map((p) =>
    [
      `## Product: ${p.title}${p.sku ? ` (${p.sku})` : ''}`,
      '',
      flat(p.summary ?? ''),
      ...(p.specs ?? []).map((s) => `- ${s.label}: ${s.value}`),
      '',
      ...mdBody(p.body),
    ].join('\n'),
  )
  const newsBlocks = getNewsPosts().map((p) =>
    [`## News: ${p.title}`, '', p.date.slice(0, 10), flat(p.excerpt ?? ''), '', ...mdBody(p.body)].join('\n'),
  )
  const techBlocks = getTechArticles().map((a) =>
    [`## Technology: ${a.title}`, '', flat(a.summary ?? ''), '', ...mdBody(a.body)].join('\n'),
  )
  const caseBlocks = getCaseUses().map((c) => [`## Case Study: ${c.title}`, '', flat(c.summary ?? ''), ...mdBody(c.body)].join('\n'))
  const { company, certifications, manufacturing } = getGeoFacts()
  return [
    '',
    `# ${SITE_NAME} Brand Site`,
    ...pageBlocks,
    ...factsSection('Company Facts', company),
    ...factsSection('Certifications', certifications),
    ...factsSection('Manufacturing', manufacturing),
    '',
    '# Products',
    ...productBlocks,
    '',
    '# News',
    ...newsBlocks,
    '',
    '# Technology',
    ...techBlocks,
    '',
    '# Case Studies',
    ...caseBlocks,
    '',
  ].join('\n\n')
}

/** `/llms.txt` Spanish section — absolute /es URLs so LLMs can ingest the mirror directly. */
export function llmSpanishIndex(origin: string): string {
  const es = (path: string) => abs(origin, `/es${path}`)
  const productLines = getContentProducts('es').map((p) => `- [${p.title}](${es(`/products/${p.slug}`)}): ${flat(p.summary ?? '')}`)
  const techLines = getTechArticles('es').map((a) => `- [${a.title}](${es(`/technology/${a.slug}`)}): ${flat(a.summary ?? '')}`)
  const caseLines = getCaseUses('es').map((c) => `- [${c.title}](${es(`/evidence/case-studies/${c.slug}`)}): ${flat(c.summary ?? '')}`)
  const guideLines = GUIDES_ES.map((g) => `- [${g.title}](${es(`/guides/${g.slug}`)}): ${flat(g.intro[0] ?? '')}`)
  const newsLines = getNewsPosts('es')
    .slice(0, 10)
    .map((p) => `- [${p.title}](${es(`/news/${p.slug}`)}): ${flat(p.excerpt ?? '')}`)
  const faqLines = getSiteFaqs('es')
    .slice(0, 6)
    .map((f) => `- ${f.q}`)
  return [
    '',
    '## Español',
    '',
    `- [${SITE_NAME} — inicio](${es('/')}): ${LLM_SPANISH_HOMEPAGE_DESCRIPTION}`,
    '',
    '### Español: Productos',
    ...productLines,
    '',
    '### Español: Tecnología',
    ...techLines,
    '',
    '### Español: Casos de estudio',
    ...caseLines,
    '',
    '### Español: Guías',
    ...guideLines,
    '',
    '### Español: Noticias',
    ...newsLines,
    '',
    '### Español: Preguntas frecuentes',
    ...faqLines,
    '',
  ].join('\n')
}

/** Full Spanish text for products, news, tech, cases and guides (in /llms-full.txt). */
export function llmsAfarerSpanishFull(): string {
  const productBlocks = getContentProducts('es').map((p) =>
    [
      `## Producto: ${p.title}${p.sku ? ` (${p.sku})` : ''}`,
      '',
      flat(p.summary ?? ''),
      ...(p.specs ?? []).map((s) => `- ${s.label}: ${s.value}`),
      '',
      ...mdBody(p.body),
    ].join('\n'),
  )
  const newsBlocks = getNewsPosts('es').map((p) =>
    [`## Noticia: ${p.title}`, '', p.date.slice(0, 10), flat(p.excerpt ?? ''), '', ...mdBody(p.body)].join('\n'),
  )
  const techBlocks = getTechArticles('es').map((a) =>
    [`## Tecnología: ${a.title}`, '', flat(a.summary ?? ''), '', ...mdBody(a.body)].join('\n'),
  )
  const caseBlocks = getCaseUses('es').map((c) => [`## Caso de estudio: ${c.title}`, '', flat(c.summary ?? ''), ...mdBody(c.body)].join('\n'))
  const guideBlocks = GUIDES_ES.map((g) =>
    [
      `# Guía: ${g.title}`,
      '',
      flat(g.intro.join(' ')),
      ...g.sections.flatMap((s) => ['', `## ${s.title}`, '', s.body]),
      '',
      '## FAQ',
      ...g.faqs.flatMap((f) => [`### Q: ${f.q}`, '', f.a, '']),
    ].join('\n'),
  )
  return [
    '',
    '# Español',
    ...productBlocks,
    '',
    '# Español: Noticias',
    ...newsBlocks,
    '',
    '# Español: Tecnología',
    ...techBlocks,
    '',
    '# Español: Casos de estudio',
    ...caseBlocks,
    '',
    '# Español: Guías',
    ...guideBlocks,
    '',
  ].join('\n\n')
}
