import { products } from './content'
import { landings } from './landings'
import { solutionPages } from './solution-pages'
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

/** Index entries for the SEO landing pages (in /llms.txt). */
export function llmLandingsIndex(): string {
  const lines = landings.en.map((l) => `- [${l.metaTitle}](${l.slug}): ${flat(l.metaDescription)}`)
  return ['', '## Solutions', ...lines, ''].join('\n')
}

/** Full text for the SEO landing pages incl. their FAQ Q&A (in /llms-full.txt). */
export function llmLandingsFull(): string {
  const blocks = landings.en.map((l) =>
    [
      `# ${l.h1}`,
      '',
      ...l.intro.map(flat),
      '',
      ...l.bullets.map((b) => `- ${b}`),
      '',
      '## FAQ',
      ...l.faqs.flatMap((f) => [`### Q: ${f.q}`, '', f.a, '']),
    ].join('\n'),
  )
  return ['', ...blocks].join('\n\n')
}

/** Index entries for the Solutions system pages (in /llms.txt). */
export function llmSolutionsIndex(): string {
  const lines = solutionPages.en.map((p) => `- [${p.metaTitle}](/solutions/${p.slug}): ${flat(p.metaDescription)}`)
  return ['', '## Solution Pages', ...lines, ''].join('\n')
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
    '/size-guide', '/resources', '/custom', '/oem-odm', '/oem-paddle',
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
  const pageBlocks = getAfarerPages().map((p) =>
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
