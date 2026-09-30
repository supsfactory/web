// Reports which `Localized<T>` exports in content.ts have no `ar` entry.
// Read-only — used to build the translator handoff list and to re-check
// progress without scrolling an 18k-line file.
import { readFileSync } from 'node:fs'

const src = readFileSync('src/product/content.ts', 'utf8')
const lines = src.split('\n')

const blocks = []
lines.forEach((line, i) => {
  const m = line.match(/^export const (\w+): Localized</)
  if (!m) return
  // Find the end of this export (next top-level `}` at column 0).
  let end = i
  for (let j = i; j < lines.length; j++) {
    if (lines[j].trimEnd() === '}') { end = j; break }
  }
  const body = lines.slice(i, end + 1).join('\n')
  const has = /^\s{2}ar:\s*[{[]/m.test(body)
  blocks.push({ name: m[1], line: i + 1, end: end + 1, has, size: end - i + 1 })
})

const done = blocks.filter((b) => b.has)
const todo = blocks.filter((b) => !b.has)
const pct = ((done.length / blocks.length) * 100).toFixed(0)

console.log(`content.ts  ${done.length}/${blocks.length} blocks localized (${pct}%)`)
console.log(`\nDONE (${done.length}):`)
for (const b of done) console.log(`  ${b.name.padEnd(20)} L${b.line}-${b.end}`)
console.log(`\nTODO (${todo.length}):`)
for (const b of todo) console.log(`  ${b.name.padEnd(20)} L${b.line}-${b.end}  (~${b.size} lines / locale)`)
