import { products } from './content'

const flat = (text: string) => text.replace(/\s+/g, ' ').trim()

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
