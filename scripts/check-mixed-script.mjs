// Scans string literals in src/ for text that mixes Arabic with other scripts,
// which is always a translation artifact (a stray CJK/Cyrillic word, a
// full-width comma, a leftover English fragment glued into the sentence).
//
// Only string-literal contents are inspected — object keys, identifiers and
// ${VAR} interpolations are skipped, so legitimate code never trips the check.
// Latin is tolerated for industry terms that are kept in English by design
// (OEM/ODM, drop-stitch, MSL, QC, PSI, ISO, NDA) and for brand names.
import { readdirSync, readFileSync } from 'node:fs'
import { join } from 'node:path'

const ARABIC = /[؀-ۿݐ-ݿﭐ-﷿ﹰ-﻿]/
const CYRILLIC = /[Ѐ-ӿ]/
const CJK = /[　-〿぀-ヿ㐀-䶿一-鿿豈-﫿＀-￯]/
// English terms that are intentionally left in Latin inside Arabic copy.
const ALLOWED = new Set([
  'oem', 'odm', 'sup', 'qc', 'qc', 'psi', 'iso', 'ce', 'bsci', 'nda', 'pvc', 'eva',
  'drop', 'stitch', 'msl', 'fusion', 'reach', 'rohs', 'exw', 'fob', 'cif', 'ddp', 'rf',
  'id', 'logo', 'moq', 'po', 'bar', 'tpu', 'hdpe', 'lldpe', 'sgs', 'apk', 'tuv',
  'bureau', 'veritas', 'intertek', 'tcs', 'qms', 'sop', 'sops', 'gdpr', 'ccpa',
  'https', 'http', 'wechat', 'webp', 'jpeg', 'jpg', 'png', 'svg', 'gif', 'pdf',
  'chamber', 'visual', 'proof', 'incoterms', 'certification', 'certificate',
  'eng', 'doc', 'led', 'rf', 'wifi', 'usb', 'qr', 'ai', 'psd', 'dwg', 'dxf', 'zip',
  'isupfactory', 'vatrad', 'isup', 'mockup', 'yourbrand', 'rocker', 'yoga',
  'to', 'consumer', 'click', 'fin', 'soft', 'top', 'us', 'box', 'brand',
  'signature', 'leviathan', 'wake', 'medusa', 'glow',
])

// Multi-word proper nouns kept in Latin by design. Matched as whole units and
// blanked out before the word scan, so a company legal name does not force its
// individual words into ALLOWED — which would also permit those words
// anywhere else in Arabic copy (e.g. allowing "group" everywhere to satisfy
// "Group" in a single legal name).
const ALLOWED_PHRASES = [
  'Qingdao Vatrad Group Co., Ltd.',
]

const files = []
const walk = (dir) => {
  for (const e of readdirSync(dir, { withFileTypes: true })) {
    if (e.name === 'node_modules' || e.name === 'dist' || e.name === 'routeTree.gen.ts') continue
    if (e.name.endsWith('.test.ts') || e.name.endsWith('.test.tsx')) continue
    const full = join(dir, e.name)
    if (e.isDirectory()) walk(full)
    else if (e.name.endsWith('.ts') || e.name.endsWith('.tsx')) files.push(full)
  }
}
walk('src')

/** Extract single-quoted and backtick string literals, minus holes/placeholders. */
function literals(line) {
  const out = []
  for (const m of line.matchAll(/'((?:[^'\\]|\\.)*)'|`((?:[^`\\]|\\.)*)`/g)) {
    // Drop ${VAR} template holes and {placeholder} tokens — neither is copy.
    const body = (m[1] ?? m[2] ?? '')
      .replace(/\$\{[^}]*\}/g, '')
      .replace(/\{[A-Za-z][A-Za-z0-9_]*\}/g, '')
    if (body) out.push(body)
  }
  return out
}

const offenders = []
for (const file of files) {
  readFileSync(file, 'utf8')
    .split('\n')
    .forEach((line, i) => {
      for (const text of literals(line)) {
        if (!ARABIC.test(text)) continue
        // Contact details (info@…, https://…) legitimately contain Latin.
        if (text.includes('@') || /https?:/.test(text) || /\+\d[\d-]{6,}/.test(text)) continue
        if (CYRILLIC.test(text)) offenders.push(`${file}:${i + 1} cyrillic ${text.slice(0, 110)}`)
        if (CJK.test(text)) offenders.push(`${file}:${i + 1} cjk      ${text.slice(0, 110)}`)
        // Note: translator-guide rule 6 (no leading/trailing space inside a
        // string) is deliberately NOT checked here. It is not machine-checkable
        // in this codebase: dictionary fragments legitimately carry trailing
        // spaces ("الحد الأدنى ", ": ") because they are composed at runtime,
        // and stripping ${VAR} holes out of template literals synthesises a
        // space that was never a defect. An attempt flagged 71 false positives,
        // which would only teach people to ignore this checker.
        //
        // Remove whole-unit Latin proper nouns so their words are not judged
        // individually.
        let words = text
        for (const phrase of ALLOWED_PHRASES) words = words.split(phrase).join(' ')
        for (const m of words.matchAll(/[A-Za-z][A-Za-z'\-]{3,}/g)) {
          if (ALLOWED.has(m[0].toLowerCase())) continue
          if (/^https?:/.test(text)) continue
          // Hyphenated compounds: allow when every part is allowed.
          if (m[0].includes('-') && m[0].split('-').filter(Boolean).every((p) => ALLOWED.has(p.toLowerCase()))) continue
          offenders.push(`${file}:${i + 1} latin    "${m[0]}"  ${text.slice(0, 110)}`)
        }
      }
    })
}

if (offenders.length > 0) {
  console.error(`mixed-script artifacts: ${offenders.length}`)
  for (const o of offenders) console.error('  ' + o)
  process.exit(1)
}
console.log('no mixed-script artifacts in src/')
