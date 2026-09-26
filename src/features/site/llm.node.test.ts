import { test, expect } from 'vitest'
import { llmsFull, llmBrandIndex, llmFrenchIndex, llmsFrenchFull, llmGermanIndex, llmsGermanFull, llmItalianIndex, llmsItalianFull, llmPortugueseIndex, llmsPortugueseFull, llmDutchIndex, llmsDutchFull, llmSwedishIndex, llmsSwedishFull, llmNorwegianIndex, llmsNorwegianFull, llmPolishIndex, llmsPolishFull } from '@/features/site/llm'
import { getContentPages } from '@/features/content/loader'
import { GUIDES_FR, GUIDES_DE, GUIDES_IT, GUIDES_PT, GUIDES_NL, GUIDES_SV, GUIDES_NO, GUIDES_PL } from '@/features/content/guide-content'
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
  const index = llmBrandIndex('https://isupfactory.com')
  const listed = indexPaths(index)
  const live = getContentPages().map((p) => `${index.includes('https://isupfactory.com') ? 'https://isupfactory.com' : ''}${p.path}`)

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
  const section = llmFrenchIndex('https://isupfactory.com')
  expect(section).toContain('## Français')
  expect(section).toContain('— accueil')
  expect(section).toContain('### Français: Produits')
  expect(section).toContain('### Français: Guides')
  expect(section).toContain('### Français: Questions fréquentes')
  expect(section).toContain('https://isupfactory.com/fr/')
  for (const g of GUIDES_FR) {
    expect(section, `llms.txt French section missing guide ${g.slug}`).toContain(`https://isupfactory.com/fr/guides/${g.slug}`)
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
  const section = llmGermanIndex('https://isupfactory.com')
  expect(section).toContain('## Deutsch')
  expect(section).toContain('— Startseite')
  expect(section).toContain('### Deutsch: Produkte')
  expect(section).toContain('### Deutsch: Guides')
  expect(section).toContain('### Deutsch: Häufig gestellte Fragen')
  expect(section).toContain('https://isupfactory.com/de/')
  for (const g of GUIDES_DE) {
    expect(section, `llms.txt German section missing guide ${g.slug}`).toContain(`https://isupfactory.com/de/guides/${g.slug}`)
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
  const section = llmItalianIndex('https://isupfactory.com')
  expect(section).toContain('## Italiano')
  expect(section).toContain('— Homepage')
  expect(section).toContain('### Italiano: Prodotti')
  expect(section).toContain('### Italiano: Guides')
  expect(section).toContain('### Italiano: Domande frequenti')
  expect(section).toContain('https://isupfactory.com/it/')
  for (const g of GUIDES_IT) {
    expect(section, `llms.txt Italian section missing guide ${g.slug}`).toContain(`https://isupfactory.com/it/guides/${g.slug}`)
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

test('llms.txt Portuguese section: /pt absolute links, Portuguese homepage note and guides', () => {
  const section = llmPortugueseIndex('https://isupfactory.com')
  expect(section).toContain('## Português')
  expect(section).toContain('— Homepage')
  expect(section).toContain('### Português: Produtos')
  expect(section).toContain('### Português: Guides')
  expect(section).toContain('### Português: Perguntas frequentes')
  expect(section).toContain('https://isupfactory.com/pt/')
  for (const g of GUIDES_PT) {
    expect(section, `llms.txt Portuguese section missing guide ${g.slug}`).toContain(`https://isupfactory.com/pt/guides/${g.slug}`)
  }
})

test('llms-full.txt Portuguese section: product/news/tech/case/guide bodies present', () => {
  const pt = llmsPortugueseFull()
  expect(pt).toContain('# Português')
  expect(pt).toContain('## Produto:')
  expect(pt).toContain('## Notícia:')
  expect(pt).toContain('## Tecnologia:')
  expect(pt).toContain('## Caso de estudo:')
  expect(pt).toContain('# Guide:')
  for (const g of GUIDES_PT) {
    expect(pt, `llms-full.txt Portuguese section missing guide ${g.slug}`).toContain(`# Guide: ${g.title}`)
  }
})

test('llms.txt Dutch section: /nl absolute links, Dutch homepage note and guides', () => {
  const section = llmDutchIndex('https://isupfactory.com')
  expect(section).toContain('## Nederlands')
  expect(section).toContain('— Homepage')
  expect(section).toContain('### Nederlands: Producten')
  expect(section).toContain('### Nederlands: Guides')
  expect(section).toContain('### Nederlands: Veelgestelde vragen')
  expect(section).toContain('https://isupfactory.com/nl/')
  for (const g of GUIDES_NL) {
    expect(section, `llms.txt Dutch section missing guide ${g.slug}`).toContain(`https://isupfactory.com/nl/guides/${g.slug}`)
  }
})

test('llms-full.txt Dutch section: product/news/tech/case/guide bodies present', () => {
  const nl = llmsDutchFull()
  expect(nl).toContain('# Nederlands')
  expect(nl).toContain('## Product:')
  expect(nl).toContain('## Nieuws:')
  expect(nl).toContain('## Technologie:')
  expect(nl).toContain('## Case study:')
  expect(nl).toContain('# Gids:')
  for (const g of GUIDES_NL) {
    expect(nl, `llms-full.txt Dutch section missing guide ${g.slug}`).toContain(`# Gids: ${g.title}`)
  }
})

test('llms.txt Swedish section: /sv absolute links, Swedish homepage note and guides', () => {
  const section = llmSwedishIndex('https://isupfactory.com')
  expect(section).toContain('## Svenska')
  expect(section).toContain('— Homepage')
  expect(section).toContain('### Svenska: Produkter')
  expect(section).toContain('### Svenska: Guider')
  expect(section).toContain('### Svenska: Vanliga frågor')
  expect(section).toContain('https://isupfactory.com/sv/')
  for (const g of GUIDES_SV) {
    expect(section, `llms.txt Swedish section missing guide ${g.slug}`).toContain(`https://isupfactory.com/sv/guides/${g.slug}`)
  }
})

test('llms-full.txt Swedish section: product/news/tech/case/guide bodies present', () => {
  const sv = llmsSwedishFull()
  expect(sv).toContain('# Svenska')
  expect(sv).toContain('## Produkt:')
  expect(sv).toContain('## Nyhet:')
  expect(sv).toContain('## Teknologi:')
  expect(sv).toContain('## Fallstudie:')
  expect(sv).toContain('# Guide:')
  for (const g of GUIDES_SV) {
    expect(sv, `llms-full.txt Swedish section missing guide ${g.slug}`).toContain(`# Guide: ${g.title}`)
  }
})

test('llms.txt Norwegian section: /no absolute links, Norwegian homepage note and guides', () => {
  const section = llmNorwegianIndex('https://isupfactory.com')
  expect(section).toContain('## Norsk')
  expect(section).toContain('— Homepage')
  expect(section).toContain('### Norsk: Produkter')
  expect(section).toContain('### Norsk: Guider')
  expect(section).toContain('### Norsk: Ofte stilte spørsmål')
  expect(section).toContain('https://isupfactory.com/no/')
  for (const g of GUIDES_NO) {
    expect(section, `llms.txt Norwegian section missing guide ${g.slug}`).toContain(`https://isupfactory.com/no/guides/${g.slug}`)
  }
})

test('llms-full.txt Norwegian section: product/news/tech/case/guide bodies present', () => {
  const no = llmsNorwegianFull()
  expect(no).toContain('# Norsk')
  expect(no).toContain('## Produkt:')
  expect(no).toContain('## Nyhet:')
  expect(no).toContain('## Teknologi:')
  expect(no).toContain('## Case study:')
  expect(no).toContain('# Guide:')
  for (const g of GUIDES_NO) {
    expect(no, `llms-full.txt Norwegian section missing guide ${g.slug}`).toContain(`# Guide: ${g.title}`)
  }
})

test('llms.txt Polish section: /pl absolute links, Polish homepage note and guides', () => {
  const section = llmPolishIndex('https://isupfactory.com')
  expect(section).toContain('## Polski')
  expect(section).toContain('— Strona główna')
  expect(section).toContain('### Polski: Produkty')
  expect(section).toContain('### Polski: Przewodniki')
  expect(section).toContain('### Polski: Często zadawane pytania')
  expect(section).toContain('https://isupfactory.com/pl/')
  for (const g of GUIDES_PL) {
    expect(section, `llms.txt Polish section missing guide ${g.slug}`).toContain(`https://isupfactory.com/pl/guides/${g.slug}`)
  }
})

test('llms-full.txt Polish section: product/news/tech/case/guide bodies present', () => {
  const pl = llmsPolishFull()
  expect(pl).toContain('# Polski')
  expect(pl).toContain('## Produkt:')
  expect(pl).toContain('## Nowość:')
  expect(pl).toContain('## Technologia:')
  expect(pl).toContain('## Case study:')
  expect(pl).toContain('# Guide:')
  for (const g of GUIDES_PL) {
    expect(pl, `llms-full.txt Polish section missing guide ${g.slug}`).toContain(`# Guide: ${g.title}`)
  }
})
