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
    return 'T(' + node.templateSpans.map((s) => s.expression.getText(sf)).join(',') + ')'
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
