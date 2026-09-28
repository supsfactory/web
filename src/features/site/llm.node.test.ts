import { test, expect } from 'vitest'
import { llmsFull, llmBrandIndex, llmFrenchIndex, llmsFrenchFull, llmGermanIndex, llmsGermanFull, llmItalianIndex, llmsItalianFull, llmPortugueseIndex, llmsPortugueseFull, llmDutchIndex, llmsDutchFull, llmSwedishIndex, llmsSwedishFull, llmNorwegianIndex, llmsNorwegianFull, llmPolishIndex, llmsPolishFull, llmDanishIndex, llmsDanishFull, llmFinnishIndex, llmsFinnishFull, llmRussianIndex, llmsRussianFull, llmCzechIndex, llmsCzechFull } from '@/features/site/llm'
import { getContentPages } from '@/features/content/loader'
import { GUIDES_FR, GUIDES_DE, GUIDES_IT, GUIDES_PT, GUIDES_NL, GUIDES_SV, GUIDES_NO, GUIDES_PL, GUIDES_DA, GUIDES_FI, GUIDES_RU, GUIDES_CS } from '@/features/content/guide-content'
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

test('llms.txt Danish section: /da absolute links, Danish homepage note and guides', () => {
  const section = llmDanishIndex('https://isupfactory.com')
  expect(section).toContain('## Dansk')
  expect(section).toContain('— Forside')
  expect(section).toContain('### Dansk: Produkter')
  expect(section).toContain('### Dansk: Guider')
  expect(section).toContain('### Dansk: Ofte stillede spørgsmål')
  expect(section).toContain('https://isupfactory.com/da/')
  for (const g of GUIDES_DA) {
    expect(section, `llms.txt Danish section missing guide ${g.slug}`).toContain(`https://isupfactory.com/da/guides/${g.slug}`)
  }
})

test('llms-full.txt Danish section: product/news/tech/case/guide bodies present', () => {
  const da = llmsDanishFull()
  expect(da).toContain('# Dansk')
  expect(da).toContain('## Produkt:')
  expect(da).toContain('## Nyhed:')
  expect(da).toContain('## Teknologi:')
  expect(da).toContain('## Case study:')
  expect(da).toContain('# Guide:')
  for (const g of GUIDES_DA) {
    expect(da, `llms-full.txt Danish section missing guide ${g.slug}`).toContain(`# Guide: ${g.title}`)
  }
})

test('llms.txt Finnish section: /fi absolute links, Finnish homepage note and guides', () => {
  const section = llmFinnishIndex('https://isupfactory.com')
  expect(section).toContain('## Suomeksi')
  expect(section).toContain('— Etusivu')
  expect(section).toContain('### Suomeksi: Tuotteet')
  expect(section).toContain('### Suomeksi: Oppaat')
  expect(section).toContain('### Suomeksi: Usein kysytyt kysymykset')
  expect(section).toContain('https://isupfactory.com/fi/')
  for (const g of GUIDES_FI) {
    expect(section, `llms.txt Finnish section missing guide ${g.slug}`).toContain(`https://isupfactory.com/fi/guides/${g.slug}`)
  }
})

test('llms-full.txt Finnish section: product/news/tech/case/guide bodies present', () => {
  const fi = llmsFinnishFull()
  expect(fi).toContain('# Suomeksi')
  expect(fi).toContain('## Tuote:')
  expect(fi).toContain('## Uutinen:')
  expect(fi).toContain('## Teknologia:')
  expect(fi).toContain('## Case study:')
  expect(fi).toContain('# Opas:')
  for (const g of GUIDES_FI) {
    expect(fi, `llms-full.txt Finnish section missing guide ${g.slug}`).toContain(`# Opas: ${g.title}`)
  }
})

test('llms.txt Russian section: /ru absolute links, Russian homepage note and guides', () => {
  const section = llmRussianIndex('https://isupfactory.com')
  expect(section).toContain('## По-русски')
  expect(section).toContain('— Главная')
  expect(section).toContain('### По-русски: Товары')
  expect(section).toContain('### По-русски: Гайды')
  expect(section).toContain('### По-русски: Часто задаваемые вопросы')
  expect(section).toContain('https://isupfactory.com/ru/')
  for (const g of GUIDES_RU) {
    expect(section, `llms.txt Russian section missing guide ${g.slug}`).toContain(`https://isupfactory.com/ru/guides/${g.slug}`)
  }
})

test('llms-full.txt Russian section: product/news/tech/case/guide bodies present', () => {
  const ru = llmsRussianFull()
  expect(ru).toContain('# По-русски')
  expect(ru).toContain('## Товар:')
  expect(ru).toContain('## Новость:')
  expect(ru).toContain('## Технологии:')
  expect(ru).toContain('## Кейс:')
  expect(ru).toContain('# Гайд:')
  for (const g of GUIDES_RU) {
    expect(ru, `llms-full.txt Russian section missing guide ${g.slug}`).toContain(`# Гайд: ${g.title}`)
  }
})

test('llms.txt Czech section: /cs absolute links, Czech homepage note and guides', () => {
  const section = llmCzechIndex('https://isupfactory.com')
  expect(section).toContain('## Česky')
  expect(section).toContain('— Hlavní stránka')
  expect(section).toContain('### Česky: Produkty')
  expect(section).toContain('### Česky: Technologie')
  expect(section).toContain('### Česky: Případové studie')
  expect(section).toContain('### Česky: Průvodci')
  expect(section).toContain('### Česky: Novinky')
  expect(section).toContain('### Česky: Často kladené dotazy')
  expect(section).toContain('https://isupfactory.com/cs/')
  for (const g of GUIDES_CS) {
    expect(section, `llms.txt Czech section missing guide ${g.slug}`).toContain(`https://isupfactory.com/cs/guides/${g.slug}`)
  }
})

test('llms-full.txt Czech section: product/news/tech/case/guide bodies present', () => {
  const cs = llmsCzechFull()
  expect(cs).toContain('# Česky')
  expect(cs).toContain('## Produkt:')
  expect(cs).toContain('## Novinka:')
  expect(cs).toContain('## Technologie:')
  expect(cs).toContain('## Případová studie:')
  expect(cs).toContain('# Průvodce:')
  for (const g of GUIDES_CS) {
    expect(cs, `llms-full.txt Czech section missing guide ${g.slug}`).toContain(`# Průvodce: ${g.title}`)
  }
})
