import { products } from './content'
import { landings } from './landings'
import {
  getAfarerPages,
  getAfarerProducts,
  getNewsPosts,
  getTechArticles,
  getCaseUses,
  getResearchTopics,
  brandify,
} from '@/features/content/loader'

const flat = (text: string) => text.replace(/\s+/g, ' ').trim()

const mdBody = (body: string) => body.split('\n').map((l) => l.trim()).filter(Boolean)

export function llmProductsIndex(): string {
  const lines = products.en.items.map((p) => `- [${p.name}](/products): ${flat(p.desc)}`)
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

/* ─────────────────────────── afarer (GEO/AI) ─────────────────────────── */

/** Index entries for the ported afarer brand pages (in /llms.txt). */
export function llmAfarerIndex(): string {
  const pagesByPath = new Map(getAfarerPages().map((p) => [p.path, p]))
  const indexPaths = [
    '/factory', '/factory/process', '/factory/quality-lab', '/factory/oem-capability',
    '/factory/capacity', '/factory/equipment', '/quality-testing', '/quality',
    '/randdcenter', '/randdcenter/rf-welding', '/randdcenter/pvc-fabric-lab',
    '/technology', '/safety', '/certifications', '/academy', '/learn', '/knowledge',
    '/guides', '/evidence', '/news', '/journal', '/solutions/build-your-own-brand',
    '/brand/why-afarer', '/trust', '/warranty', '/what-is-sup', '/inflatable-vs-hardboard',
    '/size-guide', '/resources', '/custom', '/research',
  ]
  const pageLines = indexPaths
    .map((p) => pagesByPath.get(p))
    .filter((p): p is NonNullable<typeof p> => Boolean(p))
    .map((p) => `- [${brandify(p.label)}](${p.path}): ${flat(brandify(p.meta?.description ?? ''))}`)
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
  return [
    '',
    '# afarer Brand Site',
    ...pageBlocks.slice(0, 40),
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
