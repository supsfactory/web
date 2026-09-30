import { expect, test } from 'vitest'
import { FACTS, FACTS_LOCALE } from '@/product/facts'
import { factoryProof, hero, trustBar } from '@/product/content'

/**
 * The stat tiles under hero / trustBar / factoryProof are the page's proof
 * numbers, and they used to carry the English string inside every localized
 * block: `FACTS.annualCapacity` ("120,000+ units") and `FACTS.ndaWindow`
 * ("4 business hours") were referenced directly, so 17 locales rendered an
 * English word inside an otherwise translated tile, right next to a translated
 * label. `FACTS.workers` ("350+") and `FACTS.exportCountries` ("50+") stayed
 * shared on purpose — they are bare numbers with no words to translate.
 *
 * Parity could not see this: both sides of a bare `FACTS.x` reference are
 * non-literals, so they fingerprinted identically. These assertions are on the
 * rendered value, which is the only place the leak is visible.
 */

// Derived from the table itself, so a locale added to facts.ts is covered here
// without anyone remembering to extend this list.
type Locale = keyof typeof FACTS_LOCALE
const LOCALES = Object.keys(FACTS_LOCALE) as Locale[]
const TRANSLATED = LOCALES.filter((l) => l !== 'en')
const BLOCKS = { hero, trustBar, factoryProof }

test('FACTS_LOCALE.en stays a mirror of the English FACTS table', () => {
  expect(FACTS_LOCALE.en.annualCapacity).toBe(FACTS.annualCapacity)
  expect(FACTS_LOCALE.en.ndaWindow).toBe(FACTS.ndaWindow)
})

test('the two word-bearing fact values are translated for every locale', () => {
  for (const locale of TRANSLATED) {
    expect(FACTS_LOCALE[locale].annualCapacity, locale).not.toBe(FACTS.annualCapacity)
    expect(FACTS_LOCALE[locale].ndaWindow, locale).not.toBe(FACTS.ndaWindow)
    expect(FACTS_LOCALE[locale].annualCapacity, locale).toMatch(/120/)
    expect(FACTS_LOCALE[locale].ndaWindow, locale).toMatch(/^4\b/)
  }
})

test('no localized stat tile renders an English capacity or NDA figure', () => {
  for (const [name, block] of Object.entries(BLOCKS)) {
    for (const locale of TRANSLATED) {
      const values = block[locale as keyof typeof block].stats.map((s) => String(s.value))
      expect(values.join(' | '), `${name}.${locale}`).not.toMatch(/\bunits\b|\bbusiness hours\b/)
    }
  }
})

test('the fact values that stay shared carry no words to translate', () => {
  expect(FACTS.workers).toMatch(/^[\d,+.]+$/)
  expect(FACTS.exportCountries).toMatch(/^[\d,+.]+$/)
})
