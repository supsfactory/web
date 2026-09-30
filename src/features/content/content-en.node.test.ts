import { test, expect } from 'vitest'
import * as content from '@/product/content'

/**
 * The `en` blocks in src/product/content are the source every other locale is
 * translated from, so foreign text that lands here propagates to all of them.
 * Two en product names were found carrying Danish text — 'Oppustelig fiskes-SUP'
 * and 'Giant SUP — flerspersons teambræt' — byte-identical to the `da` block,
 * which is the signature of a copy out of the Danish source rather than a
 * translation slip.
 *
 * Detection is deliberately narrow. Nordic diacritics never occur in English
 * copy, and the word list holds only tokens that are not English words. Shared
 * cognates are excluded on purpose: 'for', 'over', 'under', 'brett', 'alle',
 * 'til', 'var' and friends would fire on correct English, and a guard that
 * cries wolf is worse than no guard.
 */
const NORDIC_RE = /[æøåÆØÅ]|\b(oppustelig\w*|fiskes|fiskes-SUP|teambrett\w*|flersperson\w*|flerpersoners)\b/i

/** Every exported localized block, including flat `Record<locale, string>` shapes. */
function enBlocks(): [string, Record<string, unknown>][] {
  const blocks: [string, Record<string, unknown>][] = []
  // content.ts also exports a `pick` helper, so the namespace is not homogeneous
  // and a type predicate over Object.entries will not narrow.
  const all = content as unknown as Record<string, unknown>
  for (const [name, value] of Object.entries(all)) {
    if (typeof value === 'object' && value !== null && 'en' in value) {
      blocks.push([name, value as Record<string, unknown>])
    }
  }
  return blocks
}

test('en content blocks carry no Nordic-language text', () => {
  const blocks = enBlocks()
  expect(blocks.length).toBeGreaterThan(30)

  const problems: string[] = []
  for (const [name, block] of blocks) {
    const found = [...JSON.stringify(block.en).matchAll(new RegExp(NORDIC_RE, 'gi'))].map((m) => m[0])
    if (found.length) problems.push(`${name}: ${[...new Set(found)].join(', ')}`)
  }
  expect(problems, `Nordic text found in en blocks:\n${problems.join('\n')}`).toEqual([])
})
