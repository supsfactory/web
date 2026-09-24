import { test, expect } from 'vitest'
import { enUi, esUi, frUi, deUi, itUi, enProduct, esProduct, frProduct, deProduct, itProduct } from '@/product/dictionary'

function flatKeys(value: unknown, prefix = ''): string[] {
  if (value === null || typeof value !== 'object') return [prefix]
  const out: string[] = []
  for (const [k, v] of Object.entries(value as Record<string, unknown>)) {
    const path = prefix ? `${prefix}.${k}` : k
    if (typeof v === 'object' && v !== null) out.push(...flatKeys(v, path))
    else out.push(path)
  }
  return out
}

function keyParity(en: Record<string, unknown>, other: Record<string, unknown>, label: string) {
  const a = flatKeys(en).sort()
  const b = flatKeys(other).sort()
  const missing = a.filter((k) => !b.includes(k))
  const extra = b.filter((k) => !a.includes(k))
  expect(missing, `${label}: keys missing vs en`).toEqual([])
  expect(extra, `${label}: keys added that en does not have`).toEqual([])
}

test('ui dictionaries: es/fr/de/it keep exact key parity with en', () => {
  keyParity(enUi, esUi, 'esUi')
  keyParity(enUi, frUi, 'frUi')
  keyParity(enUi, deUi, 'deUi')
  keyParity(enUi, itUi, 'itUi')
})

test('product dictionaries: es/fr/de/it keep exact key parity with en', () => {
  keyParity(enProduct, esProduct, 'esProduct')
  keyParity(enProduct, frProduct, 'frProduct')
  keyParity(enProduct, deProduct, 'deProduct')
  keyParity(enProduct, itProduct, 'itProduct')
})