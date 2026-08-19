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
import { PRODUCT_BOILERPLATE, PRODUCT_BUILD_LINE, PRODUCT_NOT_ROB, PRODUCT_OG_IMAGE_FILENAME } from '@/product/brand-constants'

export const BRAND_LOGO_URL = '/logo192.png' as const

export const BRAND_FAVICON_ICO = '/favicon.ico' as const
export const BRAND_FAVICON_SVG = '/favicon.svg' as const

export const BRAND_OG_IMAGE = `https://assets.${SITE_DOMAIN}/images/sups/products/${PRODUCT_OG_IMAGE_FILENAME}.webp` as const
export const BRAND_HERO_IMAGE = `https://assets.${SITE_DOMAIN}/images/sups/products/${PRODUCT_OG_IMAGE_FILENAME}.avif` as const
export const BRAND_HERO_IMAGE_768 = `https://assets.${SITE_DOMAIN}/images/sups/products/${PRODUCT_OG_IMAGE_FILENAME}-768.avif` as const
export const BRAND_HERO_IMAGE_480 = `https://assets.${SITE_DOMAIN}/images/sups/products/${PRODUCT_OG_IMAGE_FILENAME}-480.avif` as const

export const BRAND_ASSETS_CDN = `https://assets.${SITE_DOMAIN}` as const

export const BRAND_SOCIAL = {
  facebook: `https://www.facebook.com/${SITE_NAME.toLowerCase()}`,
  linkedin: `https://www.linkedin.com/company/${SITE_NAME.toLowerCase()}`,
  youtube: `https://www.youtube.com/@${SITE_NAME.toLowerCase()}`,
} as const

export const BRAND_CONTACT = {
  email: `info@${SITE_DOMAIN}`,
  whatsapp: '+86 13305324192',
  whatsappLink: 'https://wa.me/8613305324192',
  address: 'Economic Development Zone, Laixi, Qingdao, China, 266600',
} as const

export const BRAND_BOILERPLATE = PRODUCT_BOILERPLATE as typeof PRODUCT_BOILERPLATE

export const BRAND_BUILD_LINE = PRODUCT_BUILD_LINE as typeof PRODUCT_BUILD_LINE

export const BRAND_NOT_ROB = PRODUCT_NOT_ROB as typeof PRODUCT_NOT_ROB

export const BRAND_COMPANY_NAME = 'Qingdao Vatrad Group Co., Ltd.' as const
export const BRAND_PARENT_BRAND = 'Afarer' as const
export const BRAND_PARENT_DOMAIN = 'afarer.com' as const
export const BRAND_PARENT_URL = `https://${BRAND_PARENT_DOMAIN}` as const
