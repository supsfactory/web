/** Shared inquiry types + validation limits (pure, node-testable). */

export type InquiryBusinessType = 'brand' | 'retailer' | 'distributor' | 'resort' | 'club' | 'rental' | 'corporate' | 'other'
export type InquiryQuantity = 'q50' | 'q100' | 'q300' | 'q500' | 'unsure'
export type InquiryProductType = 'inflatable-sup' | 'hard-sup' | 'accessories' | 'multiple' | 'unsure'
export type InquiryModel = 'oem' | 'odm' | 'private-label' | 'unsure'
export type InquiryTimeline = 'now' | 't1-3mo' | 't3-6mo' | 't6mo+'
export type InquiryStatus = 'new' | 'contacted' | 'quoted' | 'closed'

export const BUSINESS_TYPES: InquiryBusinessType[] = ['brand', 'retailer', 'distributor', 'resort', 'club', 'rental', 'corporate', 'other']
export const QUANTITIES: InquiryQuantity[] = ['q50', 'q100', 'q300', 'q500', 'unsure']
export const PRODUCT_TYPES: InquiryProductType[] = ['inflatable-sup', 'hard-sup', 'accessories', 'multiple', 'unsure']
export const MODELS: InquiryModel[] = ['oem', 'odm', 'private-label', 'unsure']
export const TIMELINES: InquiryTimeline[] = ['now', 't1-3mo', 't3-6mo', 't6mo+']
export const STATUSES: InquiryStatus[] = ['new', 'contacted', 'quoted', 'closed']

export const INQUIRY_LIMITS = {
  nameMax: 120,
  companyMax: 120,
  websiteMax: 200,
  countryMax: 80,
  emailMax: 200,
  whatsappMax: 60,
  targetMarketMax: 120,
  requirementsMax: 2000,
  logoMaxBytes: 5 * 1024 * 1024,
} as const

export const LOGO_CONTENT_TYPES = ['image/png', 'image/jpeg', 'image/svg+xml', 'image/webp'] as const

export type InquiryInput = {
  name: string
  company: string
  website: string
  country: string
  email: string
  whatsapp: string
  businessType: string
  quantity: string
  productType: string
  model: string
  timeline: string
  targetMarket: string
  requirements: string
}

/** Clamp arbitrary strings into a safe InquiryInput (validator hardening). */
export function clampInquiryInput(d: unknown): InquiryInput {
  const o = (d ?? {}) as Record<string, unknown>
  const s = (v: unknown, max: number) => (typeof v === 'string' ? v.slice(0, max) : '')
  return {
    name: s(o.name, INQUIRY_LIMITS.nameMax).trim(),
    company: s(o.company, INQUIRY_LIMITS.companyMax).trim(),
    website: s(o.website, INQUIRY_LIMITS.websiteMax).trim().replace(/^https?:\/\//, ''),
    country: s(o.country, INQUIRY_LIMITS.countryMax).trim(),
    email: s(o.email, INQUIRY_LIMITS.emailMax).trim().toLowerCase(),
    whatsapp: s(o.whatsapp, INQUIRY_LIMITS.whatsappMax).trim(),
    businessType: BUSINESS_TYPES.includes(o.businessType as InquiryBusinessType) ? (o.businessType as InquiryBusinessType) : 'other',
    quantity: QUANTITIES.includes(o.quantity as InquiryQuantity) ? (o.quantity as InquiryQuantity) : 'unsure',
    productType: PRODUCT_TYPES.includes(o.productType as InquiryProductType) ? (o.productType as InquiryProductType) : 'unsure',
    model: MODELS.includes(o.model as InquiryModel) ? (o.model as InquiryModel) : 'unsure',
    timeline: TIMELINES.includes(o.timeline as InquiryTimeline) ? (o.timeline as InquiryTimeline) : 'now',
    targetMarket: s(o.targetMarket, INQUIRY_LIMITS.targetMarketMax).trim(),
    requirements: s(o.requirements, INQUIRY_LIMITS.requirementsMax).trim(),
  }
}

export function isValidInquiryEmail(email: string): boolean {
  return /^[^\s@<>"']+@[^\s@<>"']+\.[^\s@<>"']{2,}$/.test(email)
}

export interface FileCheck {
  ok: boolean
  reason?: 'empty' | 'type' | 'size'
}

export function checkLogoFile(file: File): FileCheck {
  if (file.size === 0) return { ok: false, reason: 'empty' }
  if (!(LOGO_CONTENT_TYPES as readonly string[]).includes(file.type)) return { ok: false, reason: 'type' }
  if (file.size > INQUIRY_LIMITS.logoMaxBytes) return { ok: false, reason: 'size' }
  return { ok: true }
}

export function isValidInquiry(input: InquiryInput): boolean {
  return input.name.length >= 2 && isValidInquiryEmail(input.email)
}
