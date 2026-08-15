/** Shared inquiry types + validation limits (pure, node-testable). */

export type InquiryBusinessType = 'brand' | 'retailer' | 'distributor' | 'resort' | 'club' | 'rental' | 'corporate' | 'other'
export type InquiryQuantity = 'q1-9' | 'q10-49' | 'q50-99' | 'q100-299' | 'q300-499' | 'q500' | 'unsure'
export type InquiryCategory =
  | 'all-around'
  | 'race'
  | 'surf'
  | 'touring'
  | 'yoga'
  | 'whitewater'
  | 'fishing'
  | 'kids'
  | 'multi'
  | 'hard'
  | 'accessories'
  | 'multiple'
  | 'unsure'
export type InquiryTimeline = 'now' | 't1-3mo' | 't3-6mo' | 't6-12mo' | 't12mo+' | 'unsure'
export type InquiryProjectStage = 'ready' | 'reviewing' | 'developing' | 'sampling' | 'future'
export type InquiryRole = 'owner' | 'purchasing' | 'product' | 'designer' | 'operations' | 'other'
export type InquiryConstruction = 'standard' | 'premium' | 'rental' | 'need-rec'
export type InquiryCustomization = 'logo' | 'graphics' | 'eva' | 'accessories' | 'packaging' | 'tooling' | 'not-sure'
export type InquiryPackaging = 'export' | 'branded' | 'custom' | 'mixed' | 'not-decided'
export type InquiryCompliance = 'eu' | 'uk' | 'us-ca' | 'au-nz' | 'other' | 'guidance'
export type InquiryDocs = 'audit' | 'declaration' | 'test-report' | 'labeling' | 'inspection' | 'not-decided'
export type InquiryAnnualVolume = 'v50-99' | 'v100-299' | 'v300-999' | 'v1000' | 'not-decided'
export type InquiryNda = 'yes' | 'no'
export type InquiryStatus = 'new' | 'contacted' | 'quoted' | 'closed'
export type InquiryTier = 'A' | 'B' | 'C'

export const BUSINESS_TYPES: InquiryBusinessType[] = ['brand', 'retailer', 'distributor', 'resort', 'club', 'rental', 'corporate', 'other']
export const QUANTITIES: InquiryQuantity[] = ['q1-9', 'q10-49', 'q50-99', 'q100-299', 'q300-499', 'q500', 'unsure']
export const CATEGORIES: InquiryCategory[] = [
  'all-around', 'race', 'surf', 'touring', 'yoga', 'whitewater', 'fishing', 'kids', 'multi', 'hard', 'accessories', 'multiple', 'unsure',
]
export const TIMELINES: InquiryTimeline[] = ['now', 't1-3mo', 't3-6mo', 't6-12mo', 't12mo+', 'unsure']
export const PROJECT_STAGES: InquiryProjectStage[] = ['ready', 'reviewing', 'developing', 'sampling', 'future']
export const ROLES: InquiryRole[] = ['owner', 'purchasing', 'product', 'designer', 'operations', 'other']
export const CONSTRUCTIONS: InquiryConstruction[] = ['standard', 'premium', 'rental', 'need-rec']
export const CUSTOMIZATIONS: InquiryCustomization[] = ['logo', 'graphics', 'eva', 'accessories', 'packaging', 'tooling', 'not-sure']
export const PACKAGINGS: InquiryPackaging[] = ['export', 'branded', 'custom', 'mixed', 'not-decided']
export const COMPLIANCES: InquiryCompliance[] = ['eu', 'uk', 'us-ca', 'au-nz', 'other', 'guidance']
export const DOCS: InquiryDocs[] = ['audit', 'declaration', 'test-report', 'labeling', 'inspection', 'not-decided']
export const ANNUAL_VOLUMES: InquiryAnnualVolume[] = ['v50-99', 'v100-299', 'v300-999', 'v1000', 'not-decided']
export const NDAS: InquiryNda[] = ['yes', 'no']
export const STATUSES: InquiryStatus[] = ['new', 'contacted', 'quoted', 'closed']
export const TIERS: InquiryTier[] = ['A', 'B', 'C']

export const INQUIRY_LIMITS = {
  companyMax: 120,
  websiteMax: 200,
  countryMax: 80,
  emailMax: 200,
  whatsappMax: 60,
  targetMarketMax: 120,
  boardPlatformMax: 120,
  budgetMax: 160,
  customizationMax: 200,
  docsMax: 200,
  requirementsMax: 2000,
  logoMaxBytes: 5 * 1024 * 1024,
} as const

export const LOGO_CONTENT_TYPES = ['image/png', 'image/jpeg', 'image/svg+xml', 'image/webp'] as const

/** Common consumer mailbox providers — free mail drags the lead score down. */
export const FREE_MAIL_DOMAINS = [
  'gmail.com', 'yahoo.com', 'hotmail.com', 'outlook.com', 'aol.com', 'icloud.com',
  'protonmail.com', 'qq.com', '163.com', '126.com', '139.com', 'foxmail.com',
  'live.com', 'msn.com', 'yandex.com', 'gmx.com',
]

export type InquiryInput = {
  company: string
  website: string
  country: string
  email: string
  whatsapp: string
  businessType: string
  quantity: string
  category: string
  timeline: string
  targetMarket: string
  projectStage: string
  role: string
  boardPlatform: string
  construction: string
  customization: string
  packaging: string
  compliance: string
  docs: string
  annualVolume: string
  budget: string
  nda: string
  consent: string
  requirements: string
}

/** Clamp arbitrary strings into a safe InquiryInput (validator hardening). */
export function clampInquiryInput(d: unknown): InquiryInput {
  const o = (d ?? {}) as Record<string, unknown>
  const s = (v: unknown, max: number) => (typeof v === 'string' ? v.slice(0, max) : '')
  const pick = (v: unknown, allowed: readonly string[]): string => (allowed.includes(v as string) ? (v as string) : '')
  const pickList = (v: unknown, allowed: readonly string[], max: number) =>
    pick(v, allowed) === '' && typeof v === 'string'
      ? v
          .split(',')
          .map((x) => x.trim())
          .filter((x) => x && allowed.includes(x))
          .slice(0, 10)
          .join(',')
          .slice(0, max)
      : pick(v, allowed)
  return {
    company: s(o.company, INQUIRY_LIMITS.companyMax).trim(),
    website: s(o.website, INQUIRY_LIMITS.websiteMax).trim().replace(/^https?:\/\//i, ''),
    country: s(o.country, INQUIRY_LIMITS.countryMax).trim(),
    email: s(o.email, INQUIRY_LIMITS.emailMax).trim().toLowerCase(),
    whatsapp: s(o.whatsapp, INQUIRY_LIMITS.whatsappMax).trim(),
    businessType: pick(o.businessType, BUSINESS_TYPES),
    quantity: pick(o.quantity, QUANTITIES),
    category: pick(o.category, CATEGORIES),
    timeline: pick(o.timeline, TIMELINES),
    targetMarket: s(o.targetMarket, INQUIRY_LIMITS.targetMarketMax).trim(),
    projectStage: pick(o.projectStage, PROJECT_STAGES),
    role: pick(o.role, ROLES),
    boardPlatform: s(o.boardPlatform, INQUIRY_LIMITS.boardPlatformMax).trim(),
    construction: pick(o.construction, CONSTRUCTIONS),
    customization: pickList(o.customization, CUSTOMIZATIONS, INQUIRY_LIMITS.customizationMax),
    packaging: pick(o.packaging, PACKAGINGS),
    compliance: pick(o.compliance, COMPLIANCES),
    docs: pickList(o.docs, DOCS, INQUIRY_LIMITS.docsMax),
    annualVolume: pick(o.annualVolume, ANNUAL_VOLUMES),
    budget: s(o.budget, INQUIRY_LIMITS.budgetMax).trim(),
    nda: pick(o.nda, NDAS),
    consent: o.consent === 'yes' ? 'yes' : '',
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

/**
 * Hard gating rules (RFQ triage): no company, no valid email, no country/market,
 * or no quantity selection → rejected before any scoring.
 */
export function isValidInquiry(input: InquiryInput): boolean {
  return (
    input.company.length >= 2 &&
    isValidInquiryEmail(input.email) &&
    (input.country.length > 0 || input.targetMarket.length > 0) &&
    input.businessType !== '' &&
    input.quantity !== '' &&
    input.category !== '' &&
    input.timeline !== '' &&
    input.projectStage !== '' &&
    input.role !== '' &&
    input.consent === 'yes'
  )
}

function emailDomain(email: string): string {
  return email.includes('@') ? email.slice(email.lastIndexOf('@') + 1).toLowerCase() : ''
}

function isFreeMail(email: string): boolean {
  const d = emailDomain(email)
  return FREE_MAIL_DOMAINS.includes(d) || /gmail|yahoo|hotmail|outlook|163|qq\.com/.test(d)
}

/** "price?" / "catalog?" / "send me quote" style content-only messages. */
const PRICE_ONLY_RE = /^(price|catalog|quotation|quote|cost|lowest|moq|send\s*me|send\s*.*(price|catalog|quote))[\s?!.\-]?$/i

const UNDECIDED_VALUES = new Set(['unsure', 'not-decided', 'guidance', 'need-rec'])

/** One scored signal behind the tier — lets the UI explain *why* a lead graded out. */
export interface ScoreSignal {
  id: string
  delta: number
}

/**
 * Per-signal breakdown of the B2B lead score. `scoreInquiry` is the sum of
 * these deltas (single source of truth); the admin drawer renders the signals
 * so triage can see why a lead is an A, B or C.
 */
export function inquiryScoreSignals(input: InquiryInput, opts: { hasFile: boolean }): ScoreSignal[] {
  const signals: ScoreSignal[] = []
  const push = (id: string, delta: number) => signals.push({ id, delta })
  const email = input.email.toLowerCase()

  if (!isFreeMail(email)) push('corporateMail', 15)
  if (input.company.length >= 2) push('companySet', 10)
  if (input.businessType === 'brand' || input.businessType === 'distributor' || input.businessType === 'resort' || input.businessType === 'rental') push('businessType', 15)
  if (input.quantity === 'q100-299' || input.quantity === 'q300-499' || input.quantity === 'q500') push('quantity', 20)
  else if (input.quantity === 'q50-99') push('quantity', 10)
  if (input.annualVolume !== '' && input.annualVolume !== 'not-decided') push('annualVolume', 10)
  if (input.timeline !== 'unsure') push('timeline', 10)
  if (input.projectStage === 'ready' || input.projectStage === 'sampling') push('stageReady', 15)
  if (opts.hasFile) push('logoUploaded', 15)
  if (input.targetMarket.length > 0) push('targetMarket', 10)
  if (input.packaging === 'branded' || input.packaging === 'custom') push('packaging', 10)

  if (isFreeMail(email)) push('freeMail', -5)
  if (input.quantity === 'q1-9') push('quantity', -25)
  if (input.projectStage === 'future') push('stageFuture', -10)
  const undecidedCount = [
    input.quantity, input.timeline, input.construction, input.packaging, input.compliance, input.annualVolume, input.docs,
  ].filter((v) => v === '' || UNDECIDED_VALUES.has(v)).length
  if (undecidedCount >= 3) push('undecided', -20)
  if (input.requirements.length > 0 && input.requirements.length < 120 && PRICE_ONLY_RE.test(input.requirements.trim())) push('priceOnly', -20)

  return signals
}

/**
 * B2B lead scoring → triage tier.
 *
 * ≥ 70 → A (SQL — priority sales follow-up)
 * 40–69 → B (MQL — nurture + sales screening)
 * < 40  → C (low priority — automated resource reply)
 */
export function scoreInquiry(input: InquiryInput, opts: { hasFile: boolean }): { score: number; tier: InquiryTier } {
  const score = inquiryScoreSignals(input, opts).reduce((acc, s) => acc + s.delta, 0)
  const tier: InquiryTier = score >= 70 ? 'A' : score >= 40 ? 'B' : 'C'
  return { score: Math.max(0, score), tier }
}
