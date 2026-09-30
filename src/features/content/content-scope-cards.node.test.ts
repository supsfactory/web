import { test, expect } from 'vitest'
import { solve } from '@/product/content'

/**
 * The collaboration selector renders `short`, `buyerState` and `ctaLabel` for
 * each of the four OEM / ODM / private-label / fleet cards.
 *
 * Those three fields used to be optional on ScopeCard, and the component filled
 * the gaps from an English table hardcoded next to its icon map. Only `hu`
 * supplied them, so all seventeen other locales — `ar` included — rendered
 * English headings, "who is this for" labels and buttons inside an otherwise
 * translated page. The per-locale content suites could not see it: they assert
 * on the data in content.ts, never on the component's fallbacks.
 *
 * The fields are now required, so the compiler rejects a locale that omits one.
 * This suite guards the half a type cannot: a locale that supplies the field but
 * fills it with the English text, which is exactly how the original defect would
 * come back.
 */
const CARD_FIELDS = ['short', 'buyerState', 'ctaLabel'] as const

const en = solve.en
const locales = Object.keys(solve).filter((l) => l !== 'en')

test('every locale supplies all four collaboration-selector cards', () => {
  expect(locales.length).toBeGreaterThanOrEqual(17)
  expect(en.items.length).toBe(4)

  const problems: string[] = []
  for (const locale of locales) {
    const items = solve[locale as keyof typeof solve].items
    if (items.length !== en.items.length) {
      problems.push(`${locale}: ${items.length} card(s), en has ${en.items.length}`)
      continue
    }
    items.forEach((item, i) => {
      for (const field of CARD_FIELDS) {
        const value = item[field]
        if (typeof value !== 'string' || value.trim() === '') {
          problems.push(`${locale}[${i}].${field}: missing or empty`)
        } else if (value === en.items[i][field]) {
          problems.push(`${locale}[${i}].${field}: English copy — would render untranslated`)
        }
      }
    })
  }
  expect(problems).toEqual([])
})

test('en collaboration-selector cards are populated', () => {
  for (const [i, item] of en.items.entries()) {
    for (const field of CARD_FIELDS) {
      expect(item[field], `en[${i}].${field}`).toBeTruthy()
    }
  }
})
