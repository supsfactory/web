import { test, expect } from 'vitest'
import { llmsFull, llmBrandIndex, llmFrenchIndex, llmsFrenchFull, llmGermanIndex, llmsGermanFull, llmItalianIndex, llmsItalianFull } from '@/features/site/llm'
import { getContentPages } from '@/features/content/loader'
import { GUIDES_FR, GUIDES_DE, GUIDES_IT } from '@/features/content/guide-content'
import { EDGE_REDIRECTS } from '@/features/seo/edge-gate'
import { LEGACY_REDIRECTS } from '@/features/seo/legacy-redirects'

const urlLines = (text: string): Set<string> => {
  const paths = new Set<string>()
  for (const m of text.matchAll(/^URL: (.+)$/gm)) paths.add(m[1])
  return paths
}

const indexPaths = (text: string): Set<string> => {
  const paths = new Set<string>()
  for (const m of text.matchAll(/^- \[[^\]]+\]\(([^)]+)\):/gm)) paths.add(m[1])
  return paths
}

const SHADOWED = new Set([...Object.keys(EDGE_REDIRECTS), ...Object.keys(LEGACY_REDIRECTS)])

test('llms-full.txt contains every live page (no truncation regression)', () => {
  const full = llmsFull()
  const urls = urlLines(full)
  const expected = getContentPages()
    .filter((p) => !SHADOWED.has(p.path))
    .map((p) => p.path)
  for (const path of expected) {
    expect(urls, `llms-full.txt missing live page ${path}`).toContain(path)
  }
  expect(expected.length).toBeGreaterThan(30)
})

test('llms-full.txt never advertises edge-301 or legacy-shadowed paths', () => {
  const urls = urlLines(llmsFull())
  for (const shadowed of SHADOWED) {
    expect(urls, `llms-full.txt must not contain shadowed path ${shadowed}`).not.toContain(shadowed)
  }
})

test('llms.txt index covers every live page and no shadowed paths', () => {
  const index = llmBrandIndex('https://supsfactory.com')
  const listed = indexPaths(index)
  const live = getContentPages().map((p) => `${index.includes('https://supsfactory.com') ? 'https://supsfactory.com' : ''}${p.path}`)

  // Coverage via the path portion (index links are now absolute URLs).
  const listedPaths = new Set([...listed].map((u) => (u.startsWith('https://') ? new URL(u).pathname : u)))
  for (const path of live.map((p) => (p.startsWith('https://') ? new URL(p).pathname : p))) {
    if (SHADOWED.has(path)) {
      expect(listedPaths, `llms.txt index must not list shadowed path ${path}`).not.toContain(path)
    } else {
      expect(listedPaths, `llms.txt index missing live page ${path}`).toContain(path)
    }
  }
})

test('llms.txt French section: /fr absolute links, French homepage note and guides', () => {
  const section = llmFrenchIndex('https://supsfactory.com')
  expect(section).toContain('## Français')
  expect(section).toContain('— accueil')
  expect(section).toContain('### Français: Produits')
  expect(section).toContain('### Français: Guides')
  expect(section).toContain('### Français: Questions fréquentes')
  expect(section).toContain('https://supsfactory.com/fr/')
  for (const g of GUIDES_FR) {
    expect(section, `llms.txt French section missing guide ${g.slug}`).toContain(`https://supsfactory.com/fr/guides/${g.slug}`)
  }
})

test('llms-full.txt French section: product/news/tech/case/guide bodies present', () => {
  const fr = llmsFrenchFull()
  expect(fr).toContain('# Français')
  expect(fr).toContain('## Produit:')
  expect(fr).toContain('## Actualité:')
  expect(fr).toContain('## Technologie:')
  expect(fr).toContain('## Étude de cas:')
  expect(fr).toContain('# Guide:')
  for (const g of GUIDES_FR) {
    expect(fr, `llms-full.txt French section missing guide ${g.slug}`).toContain(`# Guide: ${g.title}`)
  }
})

test('llms.txt German section: /de absolute links, German homepage note and guides', () => {
  const section = llmGermanIndex('https://supsfactory.com')
  expect(section).toContain('## Deutsch')
  expect(section).toContain('— Startseite')
  expect(section).toContain('### Deutsch: Produkte')
  expect(section).toContain('### Deutsch: Guides')
  expect(section).toContain('### Deutsch: Häufig gestellte Fragen')
  expect(section).toContain('https://supsfactory.com/de/')
  for (const g of GUIDES_DE) {
    expect(section, `llms.txt German section missing guide ${g.slug}`).toContain(`https://supsfactory.com/de/guides/${g.slug}`)
  }
})

test('llms-full.txt German section: product/news/tech/case/guide bodies present', () => {
  const de = llmsGermanFull()
  expect(de).toContain('# Deutsch')
  expect(de).toContain('## Produkt:')
  expect(de).toContain('## Nachricht:')
  expect(de).toContain('## Technologie:')
  expect(de).toContain('## Fallstudie:')
  expect(de).toContain('# Guide:')
  for (const g of GUIDES_DE) {
    expect(de, `llms-full.txt German section missing guide ${g.slug}`).toContain(`# Guide: ${g.title}`)
  }
})

test('llms.txt Italian section: /it absolute links, Italian homepage note and guides', () => {
  const section = llmItalianIndex('https://supsfactory.com')
  expect(section).toContain('## Italiano')
  expect(section).toContain('— Homepage')
  expect(section).toContain('### Italiano: Prodotti')
  expect(section).toContain('### Italiano: Guides')
  expect(section).toContain('### Italiano: Domande frequenti')
  expect(section).toContain('https://supsfactory.com/it/')
  for (const g of GUIDES_IT) {
    expect(section, `llms.txt Italian section missing guide ${g.slug}`).toContain(`https://supsfactory.com/it/guides/${g.slug}`)
  }
})

test('llms-full.txt Italian section: product/news/tech/case/guide bodies present', () => {
  const it = llmsItalianFull()
  expect(it).toContain('# Italiano')
  expect(it).toContain('## Prodotto:')
  expect(it).toContain('## Notizia:')
  expect(it).toContain('## Tecnologia:')
  expect(it).toContain('## Caso di studio:')
  expect(it).toContain('# Guide:')
  for (const g of GUIDES_IT) {
    expect(it, `llms-full.txt Italian section missing guide ${g.slug}`).toContain(`# Guide: ${g.title}`)
  }
})
