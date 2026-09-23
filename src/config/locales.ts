/**
 * Locale configuration — BCP 47 locale list and routing conventions.
 *
 * This module replaces the hardcoded `locales` array in
 * `src/features/i18n/locale.ts`. All locale-aware code should import from
 * here instead of defining locale lists inline.
 *
 * The current project supports en + es + fr runtimes (ACTIVE_LOCALES); the
 * template architecture supports 34 locales. Adding a live locale requires:
 *   1. Move the BCP 47 code from SUPPORTED_LOCALES usage into ACTIVE_LOCALES
 *   2. Create a dictionary file in src/features/i18n/dictionaries/{locale}.ts
 *   3. Add locale-specific content in src/content/locales/{locale}/
 *   4. No route changes needed — the routing engine is locale-agnostic
 *
 * BCP 47 conventions:
 *   - Use two-letter codes for macro-languages: en, es, de, fr, it, pt
 *   - Use four-letter codes for specific variants: pt-BR
 *   - Never use non-standard codes: zh, cn, chs, cht
 */

export const SUPPORTED_LOCALES = [
  'en',
  'de',
  'fr',
  'es',
  'it',
  'nl',
  'sv',
  'no',
  'pl',
  'da',
  'fi',
  'pt',
  'ru',
  'cs',
  'ar',
  'el',
  'th',
  'hr',
  'tl',
  'hu',
  'ro',
  'sk',
  'bg',
  'sl',
  'sr',
  'ja',
  'ko',
  'tr',
  'id',
  'he',
  'ms',
  'lt',
  'lv',
  'et',
] as const

export const ACTIVE_LOCALES: readonly Locale[] = ['en', 'es', 'fr']

export type Locale = (typeof SUPPORTED_LOCALES)[number]

export type ActiveLocale = typeof ACTIVE_LOCALES[number]

export const DEFAULT_LOCALE: Locale = 'en'

export const LOCALE_LABELS: Record<string, { native: string; short: string }> = {
  en: { native: 'English', short: 'EN' },
  de: { native: 'Deutsch', short: 'DE' },
  fr: { native: 'Français', short: 'FR' },
  es: { native: 'Español', short: 'ES' },
  it: { native: 'Italiano', short: 'IT' },
  nl: { native: 'Nederlands', short: 'NL' },
  sv: { native: 'Svenska', short: 'SV' },
  no: { native: 'Norsk', short: 'NO' },
  pl: { native: 'Polski', short: 'PL' },
  da: { native: 'Dansk', short: 'DA' },
  fi: { native: 'Suomi', short: 'FI' },
  pt: { native: 'Português', short: 'PT' },
  ru: { native: 'Русский', short: 'RU' },
  cs: { native: 'Čeština', short: 'CS' },
  ar: { native: 'العربية', short: 'AR' },
  el: { native: 'Ελληνικά', short: 'EL' },
  th: { native: 'ไทย', short: 'TH' },
  hr: { native: 'Hrvatski', short: 'HR' },
  tl: { native: 'Filipino', short: 'TL' },
  hu: { native: 'Magyar', short: 'HU' },
  ro: { native: 'Română', short: 'RO' },
  sk: { native: 'Slovenčina', short: 'SK' },
  bg: { native: 'Български', short: 'BG' },
  sl: { native: 'Slovenščina', short: 'SL' },
  sr: { native: 'Српски', short: 'SR' },
  ja: { native: '日本語', short: 'JA' },
  ko: { native: '한국어', short: 'KO' },
  tr: { native: 'Türkçe', short: 'TR' },
  id: { native: 'Bahasa Indonesia', short: 'ID' },
  he: { native: 'עברית', short: 'HE' },
  ms: { native: 'Bahasa Melayu', short: 'MS' },
  lt: { native: 'Lietuvių', short: 'LT' },
  lv: { native: 'Latviešu', short: 'LV' },
  et: { native: 'Eesti', short: 'ET' },
}

export function isLocale(value: unknown): value is Locale {
  return typeof value === 'string' && (SUPPORTED_LOCALES as readonly string[]).includes(value)
}

export function localizePath(locale: Locale, path: string): string {
  const clean = path === '/' ? '' : path
  if (locale === DEFAULT_LOCALE) return clean || '/'
  return `/${locale}${clean}` || `/${locale}`
}

export function stripDefaultLocalePrefix(href: string): string {
  const stripped = href.replace(/^\/en(?=[/?#]|$)/, '')
  if (stripped === '') return '/'
  if (stripped.startsWith('?') || stripped.startsWith('#')) return `/${stripped}`
  return stripped
}

export const OG_LOCALE: Record<string, string> = {
  en: 'en_US',
  de: 'de_DE',
  fr: 'fr_FR',
  es: 'es_ES',
  it: 'it_IT',
  nl: 'nl_NL',
  sv: 'sv_SE',
  no: 'no_NO',
  pl: 'pl_PL',
  da: 'da_DK',
  fi: 'fi_FI',
  pt: 'pt_PT',
  ru: 'ru_RU',
  cs: 'cs_CZ',
  ar: 'ar_SA',
  el: 'el_GR',
  th: 'th_TH',
  hr: 'hr_HR',
  tl: 'tl_PH',
  hu: 'hu_HU',
  ro: 'ro_RO',
  sk: 'sk_SK',
  bg: 'bg_BG',
  sl: 'sl_SI',
  sr: 'sr_RS',
  ja: 'ja_JP',
  ko: 'ko_KR',
  tr: 'tr_TR',
  id: 'id_ID',
  he: 'he_IL',
  ms: 'ms_MY',
  lt: 'lt_LT',
  lv: 'lv_LV',
  et: 'et_EE',
}

export const HREFLANG: Record<string, string> = {
  en: 'en-US',
  de: 'de-DE',
  fr: 'fr-FR',
  es: 'es-ES',
  it: 'it-IT',
  nl: 'nl-NL',
  sv: 'sv-SE',
  no: 'no-NO',
  pl: 'pl-PL',
  da: 'da-DK',
  fi: 'fi-FI',
  pt: 'pt-PT',
  ru: 'ru-RU',
  cs: 'cs-CZ',
  ar: 'ar-SA',
  el: 'el-GR',
  th: 'th-TH',
  hr: 'hr-HR',
  tl: 'tl-PH',
  hu: 'hu-HU',
  ro: 'ro-RO',
  sk: 'sk-SK',
  bg: 'bg-BG',
  sl: 'sl-SI',
  sr: 'sr-RS',
  ja: 'ja-JP',
  ko: 'ko-KR',
  tr: 'tr-TR',
  id: 'id-ID',
  he: 'he-IL',
  ms: 'ms-MY',
  lt: 'lt-LT',
  lv: 'lv-LV',
  et: 'et-EE',
}

export function negotiateLocale(
  cookieLocale: string | undefined,
  acceptLanguage: string | null,
): Locale {
  if (isLocale(cookieLocale)) return cookieLocale
  if (acceptLanguage) {
    for (const part of acceptLanguage.split(',')) {
      const tag = part.split(';')[0].trim().toLowerCase()
      const base = tag.split('-')[0]
      if (isLocale(base)) return base
      if (isLocale(tag)) return tag
    }
  }
  return DEFAULT_LOCALE
}
