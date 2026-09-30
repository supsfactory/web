// Structural parity check for localized blocks in content.ts.
//
// For every `export const <name>: Localized<T>` that has a target-locale entry,
// compares that entry against `en` on:
//   - property names, in order, at every depth
//   - array lengths
//   - the exact set of {placeholder} tokens and ${VAR} interpolations
//
// This is the mechanical half of the translator guide's hard rules 2 and 4.
// It cannot judge whether the translation is any good — only whether it is the
// same shape as the English it replaced.
//
// WHAT A SHAPE CHECK CANNOT SEE, AND WHAT IS DONE ABOUT IT
//
// Two findings from auditing all eighteen locales, both recorded here so the
// next person does not have to rediscover them:
//
// 1. Most "mismatches" are not defects. A leaf where en is a shared constant
//    and the locale supplies its own translated sentence is the *correct*
//    outcome, not a bug: 177 of the 199 leaf differences were exactly that.
//    Rewriting them back to the English constant would be a language
//    regression, so `shapeLoose()` below treats a plain translated literal as
//    interchangeable with the English expression it replaces. It stays narrow:
//    property names, counts, array lengths, `{placeholder}` sets and the
//    fact-slot fingerprint are all still compared, and a literal is only
//    interchangeable when it carries no `{placeholder}` of its own.
//
// 2. The opposite case was invisible and *was* a defect. A bare reference like
//    `value: FACTS.annualCapacity` is a non-literal on both sides, so it
//    fingerprinted identically to the correct `FACTS_LOCALE.<locale>.…` and
//    passed. Seventeen locales rendered "120,000+ units" and "4 business hours"
//    inside otherwise translated tiles, and `ar` still carried the whole English
//    MOQ note. Interpolation was the only shape the fingerprint could compare,
//    which is why fixing the interpolated half of this left the bare half
//    standing. `factRefProblems()` now rejects an English fact reference in a
//    translated block outright, so the class cannot come back silently.
//
// 3. The rule in 1 has an edge that is a real limit, not a bug to route around:
//    once the reference is gone, the two spellings are the same source. Delete
//    the only `${…}` from a template and it parses as a NoSubstitutionTemplate,
//    which fingerprints exactly like a translator who restated the constant
//    inline — so a *deleted* fact reference in a one-fact sentence is invisible.
//    A reference dropped from a longer sentence still fails, because the
//    remaining slots no longer match. This is the same blind spot as pasting
//    English text into a translated literal: the shape is unchanged, only the
//    language went wrong. The value assertions in the `*.node.test.ts` files
//    under src/features/content/ cover the numbers that must never go stale.
//
// Usage: node scripts/check-locale-parity.mjs [locale]   (default: ar)
import { readFileSync } from 'node:fs'
import ts from 'typescript'

const FILE = 'src/product/content.ts'
const src = readFileSync(FILE, 'utf8')
const sf = ts.createSourceFile(FILE, src, ts.ScriptTarget.Latest, true)

const TARGET = process.argv[2] ?? 'ar'
if (!/^[a-z]{2}$/.test(TARGET)) {
  console.error(`invalid locale "${TARGET}": expected a two-letter code`)
  process.exit(2)
}

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
  // facts.ts also keeps a few facts per language, for strings more than one
  // block needs: FACTS.moqExplanationEs.coBrand and FACTS.moqNoteAr name the
  // same slots as FACTS.moqExplanation.coBrand and FACTS.moqNote. The suffix is
  // dropped here on purpose; reaching for another locale's constant is caught by
  // factRefProblems() instead, which knows which block it is looking at.
  const perLocale = /^FACTS\.moqExplanation[A-Z][a-z]{0,3}\.([A-Za-z]+)$/.exec(text)
  if (perLocale) return `MOQEXPL(${perLocale[1]})`
  if (/^FACTS\.moqExplanation\.([A-Za-z]+)$/.test(text)) return `MOQEXPL(${/^FACTS\.moqExplanation\.([A-Za-z]+)$/.exec(text)[1]})`
  if (/^FACTS\.moqNote[A-Z][a-z]{0,3}$/.test(text) || text === 'FACTS.moqNote') return 'MOQNOTE'
  return text
}

/**
 * Facts every locale is allowed to share, because they carry no words to
 * translate: `workers` is "350+", `exportCountries` is "50+", `warehouseM2` is
 * "12,500 m²". Same reasoning as `assemblyChecklist: '100'`, which is a bare
 * number in every locale. Anything in FACTS that does contain prose has to be
 * read from `FACTS_LOCALE[locale]` instead.
 */
const LOCALE_INVARIANT_FACTS = new Set(['workers', 'exportCountries', 'warehouseM2'])

/**
 * `FACTS.moqNoteEs` and `FACTS.moqExplanationAr.sample` are the same idea one
 * level down: facts.ts keeps a per-language constant for the few strings that
 * more than one block needs. The suffix has to name the block's own locale, so
 * `moqNoteEs` inside the `fr` block is still an error.
 */
const PER_LOCALE_FACT = /^FACTS\.(?:moqNote|moqExplanation)([A-Z][a-z]{0,3})(?:\.[A-Za-z]+)?$/

/**
 * Rejects two things a shape fingerprint cannot see, anywhere in a translated
 * block — bare initializer or `${…}` span alike:
 *
 *   - a translated block reaching into another locale's shorthands
 *     (`FACTS_LOCALE.es` inside the ar block prints Spanish on the Arabic page);
 *   - a translated block reading the English-only fact sources (`FACTS.*`,
 *     `MOQ_SHORT.*`) instead of its own `FACTS_LOCALE` entry. Both normalise to
 *     the same token or to a bare `X`, so parity cannot see the difference.
 */
function factRefProblems(node, locale) {
  const bad = []
  const check = (text) => {
    const foreign = /^FACTS_LOCALE\.([a-z]{2})\./.exec(text)
    if (foreign && foreign[1] !== locale) {
      bad.push(`FACTS_LOCALE.${foreign[1]} inside the ${locale} block`)
      return
    }
    if (!/^(?:FACTS|MOQ_SHORT)\b/.test(text)) return
    if (PER_LOCALE_FACT.test(text)) {
      if (PER_LOCALE_FACT.exec(text)[1].toLowerCase() !== locale) bad.push(`${text} inside the ${locale} block`)
      return
    }
    if (LOCALE_INVARIANT_FACTS.has(text.split('.')[1])) return
    // en is the source these constants are read from, so it is the one block
    // allowed to name them.
    if (locale === 'en') return
    bad.push(`${text} inside the ${locale} block — read FACTS_LOCALE.${locale}.… instead`)
  }
  const walk = (n) => {
    if (ts.isTemplateExpression(n)) for (const span of n.templateSpans) check(span.expression.getText(sf))
    else if (ts.isPropertyAccessExpression(n) && n.expression.getText(sf) !== 'FACTS_LOCALE') {
      // Only the outermost reference: FACTS.moqExplanationEs.sample would
      // otherwise also report its own FACTS.moqExplanationEs prefix.
      const parent = n.parent
      const inner = parent && ts.isPropertyAccessExpression(parent) && parent.expression === n
      if (!inner) check(n.getText(sf))
    }
    n.forEachChild(walk)
  }
  walk(node)
  return bad
}


/**
 * Identity for a fact reference that carries no interpolation of its own.
 *
 * Without this, every bare `FACTS.x` fingerprinted as an anonymous `X`, so a
 * locale reading `FACTS_LOCALE.ar.assemblyChecklist` where en reads
 * `FACTS.workers` compared equal: same shape, wrong number. Keying on the fact
 * name catches that. The locale segment is dropped on purpose — reaching into
 * another locale is factRefProblems()' job, and it knows the block it is in.
 */
function factRefToken(text) {
  const slot = factSlot(text)
  if (slot !== text) return slot
  const en = /^(?:FACTS|MOQ_SHORT)\.([A-Za-z][A-Za-z0-9]*)(?:\.([A-Za-z]+))?$/.exec(text)
  if (en) return `FACTREF(${en[1]}${en[2] ? `.${en[2]}` : ''})`
  const loc = /^FACTS_LOCALE\.[a-z]{2}\.([A-Za-z][A-Za-z0-9]*)(?:\.([A-Za-z]+))?$/.exec(text)
  if (loc) return `FACTREF(${loc[1]}${loc[2] ? `.${loc[2]}` : ''})`
  return null
}

/**
 * Facts whose value is a sentence, so a locale may legitimately restate it in
 * its own words: the loose pass treats the constant and a translated literal as
 * the same thing. `FACTREF` tokens are deliberately absent — those are values
 * ("350+", "25–35 nap") with nothing to translate, and a locale that reaches for
 * a different key there has the wrong number, not a different wording.
 */
const isInlinable = (token) => token === 'MOQNOTE' || token.startsWith('MOQEXPL(') || token.startsWith('FACT(')

/** Ordered structural fingerprint of an object/array literal. */
function shape(node, loose = false) {
  if (ts.isObjectLiteralExpression(node)) {
    const parts = []
    for (const p of node.properties) {
      const name = p.name ? (ts.isIdentifier(p.name) || ts.isStringLiteral(p.name) ? p.name.text : '?') : '?'
      parts.push(name + ':' + shape(p.initializer, loose))
    }
    return '{' + parts.join(',') + '}'
  }
  if (ts.isArrayLiteralExpression(node)) {
    return '[' + node.elements.map((e) => shape(e, loose)).join(',') + ']'
  }
  if (ts.isTemplateExpression(node)) {
    const slots = node.templateSpans.map((s) => factSlot(s.expression.getText(sf)))
    // Exactly one fact slot, and nothing else: that is the shape of a locale
    // restating a single English constant in its own sentence. The count is
    // load-bearing in both directions. A template built from two or more facts
    // is not a restatement of a constant, so it has to be compared slot by slot
    // — that is what catches a locale which hardcodes the answer and drops the
    // reference, as hu did for three MOQ answers. A template with no slots at
    // all is not one either, so `length === 1` rather than "every slot is a
    // fact" (which is vacuously true when there are none).
    if (loose && slots.length === 1 && isInlinable(slots[0])) return 'X'
    return 'T(' + slots.join(',') + ')'
  }
  if (ts.isStringLiteral(node) || ts.isNoSubstitutionTemplateLiteral(node)) {
    const tokens = (node.text.match(/\{[A-Za-z][A-Za-z0-9_]*\}/g) ?? []).sort()
    // A literal with a {placeholder} in it is compared verbatim: there is
    // nothing to relax it against, and dropping the check would let a locale
    // invent or lose an interpolation.
    if (loose && tokens.length === 0) return 'X'
    return 'S(' + tokens.join('|') + ')'
  }
  if (ts.isNumericLiteral(node) || node.kind === ts.SyntaxKind.TrueKeyword || node.kind === ts.SyntaxKind.FalseKeyword) {
    return 'LIT'
  }
  const ref = factRefToken(node.getText(sf))
  if (ref) return loose && isInlinable(ref) ? 'X' : ref
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
    const loc = prop(obj, TARGET)
    if (!en || !loc) continue
    checked++
    const se = shape(en)
    const sl = shape(loc)
    // Strict first. The loose pass is an independent second opinion covering
    // only "the locale restates this leaf in its own words"; it never replaces
    // the strict comparison, it only rescues a block the strict pass rejected.
    const ok = se === sl || shape(loc, true) === shape(en, true)
    if (!ok) {
      // Narrow the report to the first differing top-level key.
      const ke = se.slice(1, -1).split(',')
      const ka = sl.slice(1, -1).split(',')
      const diff = []
      for (let i = 0; i < Math.max(ke.length, ka.length); i++) {
        if (ke[i] !== ka[i]) { diff.push(`key#${i}: en=${ke[i]} ${TARGET}=${ka[i]}`); break }
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
          `${TARGET} ${lc(loc)} top-level props, arrays [${arrayLens(loc)}])` +
          (diff.length ? ` | first diff ${diff[0]}` : ''),
      )
    }
    for (const ref of factRefProblems(loc, TARGET)) {
      problems.push(`${d.name.text}: ${ref}`)
    }
    rows.push({ name: d.name.text, ok, bytes: se.length })
  }
}

for (const r of rows) console.log((r.ok ? 'ok   ' : 'FAIL ') + r.name.padEnd(22) + ` shape=${r.bytes} chars`)
// A typo'd locale must not produce a vacuous pass.
if (checked === 0) {
  console.error(`\nno localized block(s) declare a "${TARGET}" entry — nothing was compared`)
  process.exit(2)
}
console.log(`\n${checked} localized block(s) compared against en`)
if (problems.length) {
  console.error('\nstructural mismatches: ' + problems.length)
  for (const p of problems) console.error('  ' + p)
  process.exit(1)
}
console.log(`${TARGET} matches en structure everywhere`)
