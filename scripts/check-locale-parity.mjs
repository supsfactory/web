// Structural parity check for localized blocks in content.ts.
//
// For every `export const <name>: Localized<T>` that now has an `ar:` entry,
// compares the `ar` object against `en` on:
//   - property names, in order, at every depth
//   - array lengths
//   - the exact set of {placeholder} tokens and ${VAR} interpolations
//
// This is the mechanical half of the translator guide's hard rules 2 and 4.
// It cannot judge whether the Arabic is any good — only whether it is the same
// shape as the English it replaced.
import { readFileSync } from 'node:fs'
import ts from 'typescript'

const FILE = 'src/product/content.ts'
const src = readFileSync(FILE, 'utf8')
const sf = ts.createSourceFile(FILE, src, ts.ScriptTarget.Latest, true)

/**
 * Interpolation slots that have a localized counterpart.
 *
 * `MOQ_SHORT.standardRun` and `FACTS.sampleTime` are English-only, so a
 * translated block that interpolates them prints an English fragment in the
 * middle of a translated sentence. `FACTS_LOCALE[<locale>]` holds translated
 * text for every locale, so a translated block references its own locale:
 *
 *   en: `${MOQ_SHORT.standardRun}`   ar: `${FACTS_LOCALE.ar.moq.standardRun}`
 *
 * Both spellings are the same slot, so the fingerprint normalises them to one
 * token. The table is explicit and closed: an expression that is not listed
 * keeps its exact source text, so every other interpolation is still compared
 * verbatim. `MOQ_SHORT.trialStandard` aliases `FACTS.moq.pilotBatch`, which is
 * why the two spellings differ for that key.
 */
const FACT_SLOTS = new Map([
  ['MOQ_SHORT.trialStandard', 'moq.pilotBatch'],
  ['MOQ_SHORT.standardRun', 'moq.standardRun'],
  ['MOQ_SHORT.customMould', 'moq.customMould'],
  ['MOQ_SHORT.existingPlatform', 'moq.existingPlatform'],
  ['FACTS.moq.pilotBatch', 'moq.pilotBatch'],
  ['FACTS.moq.standardRun', 'moq.standardRun'],
  ['FACTS.moq.customMould', 'moq.customMould'],
  ['FACTS.moq.existingPlatform', 'moq.existingPlatform'],
  ['FACTS.sampleTime', 'sampleTime'],
])

/** Canonical token for an interpolation, or its verbatim source text. */
function factSlot(text) {
  const direct = FACT_SLOTS.get(text)
  if (direct) return `FACT(${direct})`
  const localized = /^FACTS_LOCALE\.[a-z]{2}\.(moq\.[A-Za-z]+|sampleTime)$/.exec(text)
  if (localized && FACT_SLOTS.has(`FACTS.${localized[1]}`)) return `FACT(${localized[1]})`
  return text
}

/**
 * A translated block must not reach into another locale's shorthands:
 * `FACTS_LOCALE.es` inside the ar block would print Spanish on the Arabic page.
 * The slot fingerprint cannot catch this, because both locales normalise to the
 * same token.
 */
function foreignLocaleRefs(node, locale) {
  const bad = []
  const walk = (n) => {
    if (ts.isTemplateExpression(n)) {
      for (const span of n.templateSpans) {
        const m = /^FACTS_LOCALE\.([a-z]{2})\./.exec(span.expression.getText(sf))
        if (m && m[1] !== locale) bad.push(`FACTS_LOCALE.${m[1]} inside the ${locale} block`)
      }
    }
    n.forEachChild(walk)
  }
  walk(node)
  return bad
}

/** Ordered structural fingerprint of an object/array literal. */
function shape(node) {
  if (ts.isObjectLiteralExpression(node)) {
    const parts = []
    for (const p of node.properties) {
      const name = p.name ? (ts.isIdentifier(p.name) || ts.isStringLiteral(p.name) ? p.name.text : '?') : '?'
      parts.push(name + ':' + shape(p.initializer))
    }
    return '{' + parts.join(',') + '}'
  }
  if (ts.isArrayLiteralExpression(node)) {
    return '[' + node.elements.map((e) => shape(e)).join(',') + ']'
  }
  if (ts.isTemplateExpression(node)) {
    return 'T(' + node.templateSpans.map((s) => factSlot(s.expression.getText(sf))).join(',') + ')'
  }
  if (ts.isStringLiteral(node) || ts.isNoSubstitutionTemplateLiteral(node)) {
    return 'S(' + (node.text.match(/\{[A-Za-z][A-Za-z0-9_]*\}/g) ?? []).sort().join('|') + ')'
  }
  if (ts.isNumericLiteral(node) || node.kind === ts.SyntaxKind.TrueKeyword || node.kind === ts.SyntaxKind.FalseKeyword) {
    return 'LIT'
  }
  // Any other expression: identity only (enum member, call, identifier).
  return 'X'
}

function prop(obj, key) {
  for (const p of obj.properties) {
    if (p.name && (ts.isIdentifier(p.name) || ts.isStringLiteral(p.name)) && p.name.text === key) return p.initializer
  }
  return undefined
}

const problems = []
let checked = 0
const rows = []

for (const st of sf.statements) {
  if (!ts.isVariableStatement(st)) continue
  for (const d of st.declarationList.declarations) {
    if (!d.name || !ts.isIdentifier(d.name)) continue
    if (!d.type || !d.type.getText(sf).startsWith('Localized<')) continue
    if (!d.initializer || !ts.isObjectLiteralExpression(d.initializer)) continue
    const obj = d.initializer
    const en = prop(obj, 'en')
    const ar = prop(obj, 'ar')
    if (!en || !ar) continue
    checked++
    const se = shape(en)
    const sa = shape(ar)
    const ok = se === sa
    if (!ok) {
      // Narrow the report to the first differing top-level key.
      const ke = se.slice(1, -1).split(',')
      const ka = sa.slice(1, -1).split(',')
      const diff = []
      for (let i = 0; i < Math.max(ke.length, ka.length); i++) {
        if (ke[i] !== ka[i]) { diff.push(`key#${i}: en=${ke[i]} ar=${ka[i]}`); break }
      }
      const lc = (node) => (ts.isObjectLiteralExpression(node) ? node.properties.length : -1)
      const arrayLens = (node) => {
        const n = []
        const walk = (x) => {
          if (ts.isArrayLiteralExpression(x)) { n.push(x.elements.length); return }
          if (ts.isObjectLiteralExpression(x)) for (const p of x.properties) if (p.initializer) walk(p.initializer)
        }
        walk(node)
        return n.join(',')
      }
      problems.push(
        `${d.name.text}: shape mismatch (en ${lc(en)} top-level props, arrays [${arrayLens(en)}] | ` +
          `ar ${lc(ar)} top-level props, arrays [${arrayLens(ar)}])` +
          (diff.length ? ` | first diff ${diff[0]}` : ''),
      )
    }
    for (const ref of foreignLocaleRefs(ar, 'ar')) {
      problems.push(`${d.name.text}: ${ref}`)
    }
    rows.push({ name: d.name.text, ok, bytes: se.length })
  }
}

for (const r of rows) console.log((r.ok ? 'ok   ' : 'FAIL ') + r.name.padEnd(22) + ` shape=${r.bytes} chars`)
console.log(`\n${checked} localized block(s) compared against en`)
if (problems.length) {
  console.error('\nstructural mismatches: ' + problems.length)
  for (const p of problems) console.error('  ' + p)
  process.exit(1)
}
console.log('ar matches en structure everywhere')
