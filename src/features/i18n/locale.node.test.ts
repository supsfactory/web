import { test, expect } from 'vitest'
import { translate, negotiateLocale, locales, defaultLocale, stripDefaultLocalePrefix } from '@/features/i18n/locale'
import { en } from '@/features/i18n/dictionaries/en'
import { ar } from '@/features/i18n/dictionaries/ar'
import { RTL_LOCALES, getLocaleDirection, SUPPORTED_LOCALES } from '@/config/locales'

test('stripDefaultLocalePrefix：去掉 /en 前缀且保留 query 和 hash', () => {
  expect(stripDefaultLocalePrefix('/en/contact?ref=x')).toBe('/contact?ref=x')
  expect(stripDefaultLocalePrefix('/en/products?tag=1')).toBe('/products?tag=1')
  expect(stripDefaultLocalePrefix('/en/docs#setup')).toBe('/docs#setup')
  expect(stripDefaultLocalePrefix('/en')).toBe('/')
  expect(stripDefaultLocalePrefix('/en?a=1')).toBe('/?a=1')
  expect(stripDefaultLocalePrefix('/en/')).toBe('/')
})

test('translate 解析嵌套 key', () => {
  expect(translate(en, 'feedback.status.open')).toBe('Open')
})
test('translate 插值 {n}', () => {
  expect(translate(en, 'feedback.limitReached', { n: '2' })).toBe('You have 2 open items — let us catch up before filing more.')
})
test('translate 缺失 key 回退为 key 本身', () => {
  expect(translate(en, 'home.nope')).toBe('home.nope')
})
test('negotiateLocale：cookie 优先', () => {
  expect(negotiateLocale('es', 'en-US,en')).toBe('es')
})
test('negotiateLocale：无 cookie 时按 accept-language', () => {
  expect(negotiateLocale(undefined, 'es-ES,es;q=0.9,en;q=0.8')).toBe('es')
})
test('negotiateLocale：都不匹配回退默认', () => {
  expect(negotiateLocale('xx', 'xx-XX')).toBe(defaultLocale)
  expect(locales).toContain(defaultLocale)
})

test('ar 已激活并注册字典', () => {
  expect(locales).toContain('ar')
  expect(translate(ar, 'feedback.status.open')).toBe(ar.feedback.status.open)
  expect(translate(ar, 'feedback.status.open')).not.toBe('feedback.status.open')
})

test('ar 为 RTL，其余激活 locale 为 LTR', () => {
  expect(getLocaleDirection('ar')).toBe('rtl')
  expect(getLocaleDirection('he')).toBe('rtl')
  expect(getLocaleDirection('en')).toBe('ltr')
  expect(getLocaleDirection('tr')).toBe('ltr')
  expect(getLocaleDirection(undefined)).toBe('ltr')
  // 只有激活且受支持的 locale 才能是 RTL locale
  for (const l of RTL_LOCALES) {
    expect(SUPPORTED_LOCALES).toContain(l)
  }
  expect(RTL_LOCALES.filter((l) => !locales.includes(l))).toEqual(['he'])
})
