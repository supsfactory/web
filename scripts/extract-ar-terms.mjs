// Extracts Arabic terminology already in use in the completed `ar` blocks of
// content.ts, so the translator glossary stays consistent with shipped copy
// instead of inventing new terms.
import { readFileSync } from 'node:fs'

const src = readFileSync('src/product/content.ts', 'utf8')
const lines = src.split('\n')

// Collect the text of every `ar:` block.
const arText = []
let inAr = false
let depth = 0
for (const line of lines) {
  if (/^\s{2}ar:\s*\{/.test(line)) { inAr = true; depth = 0 }
  if (!inAr) continue
  depth += (line.match(/\{/g) ?? []).length - (line.match(/\}/g) ?? []).length
  const m = line.match(/[:(]\s*'([^']*)'/g)
  if (m) arText.push(m.map((s) => s.replace(/^[:(]\s*'/, '').replace(/'$/, '')).join(' | '))
  if (depth <= 0 && /^\s{2}\},?/.test(line)) inAr = false
}

const blob = arText.join('\n')
console.log(`ar string values in completed blocks: ${arText.length}`)

// Bucket candidate terms by frequency.
const words = blob.match(/[\u0600-\u06ff]{3,}/g) ?? []
const freq = new Map()
for (const w of words) freq.set(w, (freq.get(w) ?? 0) + 1)
const top = [...freq.entries()].sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0], 'ar'))
console.log(`\ndistinct arabic tokens: ${top.length}\ntop 60 by frequency:`)
for (const [w, n] of top.slice(0, 60)) console.log(`  ${String(n).padStart(3)}  ${w}`)
