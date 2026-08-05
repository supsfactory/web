import { products } from './content'
import { solutionPages, solutionPath } from './solution-pages'
import { projects } from './projects'
import { knowledge } from './knowledge'
import {
  getAfarerPages,
  getAfarerProducts,
  getNewsPosts,
  getTechArticles,
  getCaseUses,
  getResearchTopics,
  getGeoFacts,
  brandify,
} from '@/features/content/loader'
import { EDGE_REDIRECTS } from '@/features/seo/edge-gate'
import { LEGACY_REDIRECTS } from '@/features/seo/legacy-redirects'

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
    '# SUPsfactory',
    '',
    '> Custom inflatable SUP manufacturer: OEM/ODM/private-label production for brands, resorts and rental operators worldwide. MOQ from 50 pcs per design, sample 7–10 days, bulk 4–6 weeks after sample approval, 12,000 m² facility with 200+ workers and 15,000+ units annual capacity, CE / ISO 9001 / ISO 14001 / BSCI / REACH / USCG certified.',
    ...factsSection('Company Facts', company),
    ...factsSection('Certifications', certifications),
    ...factsSection('Manufacturing', manufacturing),
    '',
  ].join('\n')
}

export function llmProductsIndex(): string {
  // Real product detail pages exist for the ported afarer products — link each
  // entry to its page instead of the /products index.
  const lines = getAfarerProducts().map((p) => `- [${p.title}](/products/${p.slug}): ${flat(p.summary ?? '')}`)
  return ['', '## Products', ...lines, ''].join('\n')
}

export function llmProductsFull(): string {
  const blocks = products.en.items.map((p) =>
    [
      `## ${p.name} (${p.sku})`,
      '',
      flat(p.desc),
      '',
      `- Price: ${p.price}`,
      `- Specs: ${flat(p.specs)}`,
      `- Artwork & construction: ${flat(p.artwork)}`,
      `- Recommended for: ${p.for.join(', ')}`,
    ].join('\n'),
  )
  return ['', '# Products', '', blocks.join('\n\n'), ''].join('\n')
}

/** Index entries for the Solutions system pages (in /llms.txt). */
export function llmSolutionsIndex(): string {
  const lines = solutionPages.en.map((p) => `- [${p.metaTitle}](${solutionPath(p.slug)}): ${flat(p.metaDescription)}`)
  return ['', '## Solution Pages', ...lines, ''].join('\n')
}

/** Index entries for the project case studies (in /llms.txt). */
export function llmProjectsIndex(): string {
  const lines = projects.en.map((p) => `- [${p.metaTitle}](/projects/${p.slug}): ${flat(p.metaDescription)}`)
  return ['', '## Projects', ...lines, ''].join('\n')
}

/** Index entries for the Knowledge Center articles (in /llms.txt). */
export function llmKnowledgeIndex(): string {
  const lines = knowledge.en.map((a) => `- [${a.metaTitle}](/knowledge/${a.slug}): ${flat(a.metaDescription)}`)
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
      `Product delivered: ${flat(p.product)}`,
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

/** Display titles for ported pages whose slug labels are not user-facing. */
const PAGE_TITLES: Record<string, string> = {
  '/oem-odm': 'OEM/ODM Manufacturing',
  '/oem-paddle': 'OEM Paddle Boards',
  '/solutions/resorts-hotels': 'Solutions: Resorts & Hotels',
  '/solutions/paddle-clubs': 'Solutions: Paddle Clubs',
  '/solutions/rental-operators': 'Solutions: Rental Operators',
  '/solutions/retail-partners': 'Solutions: Retail Partners',
  '/solutions/distributors': 'Solutions: Distributors',
  '/b2b-solutions-matrix': 'B2B Solutions Matrix',
  '/fabricant-sup-gonflable': 'Fabricant SUP Gonflable',
  '/bateau-gonflable-fabricant': 'Fabricant de Bateaux Gonflables',
  '/fournisseur-nautique': 'Fournisseur Nautique',
}

/** Index entries for the ported afarer brand pages (in /llms.txt). */
export function llmAfarerIndex(): string {
  const pagesByPath = new Map(getAfarerPages().map((p) => [p.path, p]))
  const indexPaths = [
    '/factory', '/factory/process', '/factory/quality-lab', '/factory/oem-capability',
    '/factory/capacity', '/factory/equipment', '/quality-testing', '/quality',
    '/randdcenter', '/randdcenter/rf-welding', '/randdcenter/pvc-fabric-lab',
    '/technology', '/safety', '/academy', '/learn', '/knowledge',
    '/guides', '/evidence', '/news', '/journal', '/solutions/build-your-own-brand',
    '/brand/why-afarer', '/trust', '/warranty', '/what-is-sup', '/inflatable-vs-hardboard',
    '/size-guide', '/resources', '/custom', '/oem-odm-manufacturer', '/oem-paddle',
    '/solutions/resorts-hotels', '/solutions/paddle-clubs', '/solutions/rental-operators',
    '/solutions/retail-partners', '/solutions/distributors', '/b2b-solutions-matrix',
    '/fabricant-sup-gonflable', '/bateau-gonflable-fabricant', '/fournisseur-nautique',
  ]
  const pageLines = indexPaths
    .map((p) => pagesByPath.get(p))
    .filter((p): p is NonNullable<typeof p> => Boolean(p))
    .map((p) => `- [${PAGE_TITLES[p.path] ?? brandify(p.label)}](${p.path}): ${flat(brandify(p.meta?.description ?? ''))}`)
  const staticLines = [
    '- [FAQ](/faq): Answers to the most common questions about inflatable SUPs',
    '- [Research](/research): Research library — drop-stitch, PVC vs Hypalon, CE certification, thickness',
  ]
  const resolvedResearch = new Set(getAfarerPages().map((p) => p.path))
  const researchLines = getResearchTopics()
    .filter((t) => resolvedResearch.has(`/research/${t.slug}`))
    .map((t) => `- [Research: ${t.slug.replace(/-/g, ' ')}](/research/${t.slug}): ${t.category}, ${t.readTime}`)
  const newsLines = getNewsPosts()
    .slice(0, 10)
    .map((p) => `- [${p.title}](/news/${p.slug}): ${flat(p.excerpt ?? '')}`)
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
  const pageBlocks = getAfarerPages()
    .filter((p) => !(p.path in EDGE_REDIRECTS) && !(p.path in LEGACY_REDIRECTS))
    .map((p) =>
      [`# ${brandify(p.label)}`, '', flat(brandify(p.meta?.description ?? '')), '', `URL: ${p.path}`].join('\n'),
    )
  const productBlocks = getAfarerProducts().map((p) =>
    [
      `## Product: ${p.title}${p.sku ? ` (${p.sku})` : ''}`,
      '',
      flat(p.summary ?? ''),
      ...(p.specs ?? []).map((s) => `- ${s.label}: ${s.value}`),
      ...(p.price ? [`- Price: ${p.price.amount} ${p.price.currency}`] : []),
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
    '# afarer Brand Site',
    ...pageBlocks.slice(0, 40),
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
