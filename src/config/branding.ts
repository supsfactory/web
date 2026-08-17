/**
 * Branding configuration — visual identity, social links, and contact info.
 *
 * Every brand-specific string (logo URL, social profile URLs, contact
 * details, company boilerplate) lives here. Code imports from this module
 * instead of hardcoding any of these values.
 *
 * To deploy a new product: replace the values below with the new brand's
 * identity. No other code changes are needed for branding swaps.
 */

import { SITE_NAME, SITE_DOMAIN } from './site'

export const BRAND_LOGO_URL = '/logo192.png' as const

export const BRAND_FAVICON_ICO = '/favicon.ico' as const
export const BRAND_FAVICON_SVG = '/favicon.svg' as const

export const BRAND_OG_IMAGE = `https://assets.${SITE_DOMAIN}/images/sups/products/afarer-og-default.webp` as const
export const BRAND_HERO_IMAGE = `https://assets.${SITE_DOMAIN}/images/sups/products/afarer-og-default.avif` as const
export const BRAND_HERO_IMAGE_768 = `https://assets.${SITE_DOMAIN}/images/sups/products/afarer-og-default-768.avif` as const
export const BRAND_HERO_IMAGE_480 = `https://assets.${SITE_DOMAIN}/images/sups/products/afarer-og-default-480.avif` as const

export const BRAND_ASSETS_CDN = `https://assets.${SITE_DOMAIN}` as const

export const BRAND_SOCIAL = {
  facebook: `https://www.facebook.com/${SITE_NAME.toLowerCase()}`,
  linkedin: `https://www.linkedin.com/company/${SITE_NAME.toLowerCase()}`,
  youtube: `https://www.youtube.com/@${SITE_NAME.toLowerCase()}`,
} as const

export const BRAND_CONTACT = {
  whatsapp: '+86 13305324192',
  whatsappLink: 'https://wa.me/8613305324192',
  address: 'Economic Development Zone, Laixi, Qingdao, China, 266600',
} as const

export const BRAND_BOILERPLATE =
  `${SITE_NAME} is the SUP product development and manufacturing division of Afarer (Qingdao Vatrad Group Co., Ltd.), a 12,500 m² inflatable manufacturing plant in Qingdao, China.` as const

export const BRAND_BUILD_LINE =
  'We build SUP boards to your specification — engineering, tooling, sampling, production and export. You own the brand, the market and the customer; we own the manufacturing.' as const

export const BRAND_NOT_ROB =
  'We do not sell to end consumers and we do not compete with our clients in any market.' as const

export const BRAND_COMPANY_NAME = 'Qingdao Vatrad Group Co., Ltd.' as const
export const BRAND_PARENT_BRAND = 'Afarer' as const
