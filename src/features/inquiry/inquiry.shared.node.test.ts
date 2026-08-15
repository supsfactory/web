/**
 * Pure-logic tests for the inquiry RFQ pipeline: input hardening (clamp),
 * hard gating (isValid) and B2B lead scoring (scoreInquiry → tier).
 */
import { describe, expect, test } from 'vitest'
import {
  clampInquiryInput,
  inquiryScoreSignals,
  isValidInquiry,
  scoreInquiry,
  type InquiryInput,
} from './inquiry.shared'

function validInput(overrides: Partial<InquiryInput> = {}): InquiryInput {
  return {
    company: 'Acme Boards GmbH',
    website: 'acme-boards.com',
    country: 'Germany',
    email: 'purchasing@acme-boards.com',
    whatsapp: '+49 170 0000000',
    businessType: 'brand',
    quantity: 'q100-299',
    category: 'all-around',
    timeline: 't3-6mo',
    targetMarket: 'EU retailers',
    projectStage: 'reviewing',
    role: 'purchasing',
    boardPlatform: '11′ × 32″',
    construction: 'premium',
    customization: 'logo,graphics',
    packaging: 'branded',
    compliance: 'eu',
    docs: 'test-report',
    annualVolume: 'v300-999',
    budget: '€349–€449 retail',
    nda: 'no',
    consent: 'yes',
    requirements: 'Need UV-resistant boards with custom graphics for our summer fleet.',
    ...overrides,
  }
}

describe('clampInquiryInput', () => {
  test('normalizes email, website and whitespace', () => {
    const out = clampInquiryInput({ ...validInput(), website: 'HTTPS://Acme-Boards.com/', email: '  Buyer@Acme-Boards.COM ' })
    expect(out.website).toBe('Acme-Boards.com/')
    expect(out.email).toBe('buyer@acme-boards.com')
    expect(out.company).toBe('Acme Boards GmbH')
  })

  test('rejects unknown enum values → empty string (hard fail in isValid)', () => {
    const out = clampInquiryInput({
      ...validInput(),
      businessType: 'hacker',
      quantity: 'q999999',
      category: 'mystery-board',
      timeline: 'yesterday',
      projectStage: 'nowhere',
      role: 'ceo-troll',
      construction: 'beyond-premium',
      packaging: 'void',
      compliance: 'mars',
      annualVolume: 'v99999',
      nda: 'maybe',
      consent: 'sure',
    })
    expect(out.businessType).toBe('')
    expect(out.quantity).toBe('')
    expect(out.category).toBe('')
    expect(out.timeline).toBe('')
    expect(out.projectStage).toBe('')
    expect(out.role).toBe('')
    expect(out.construction).toBe('')
    expect(out.packaging).toBe('')
    expect(out.compliance).toBe('')
    expect(out.annualVolume).toBe('')
    expect(out.nda).toBe('')
    expect(out.consent).toBe('')
  })

  test('keeps known enum values', () => {
    const out = clampInquiryInput(validInput())
    expect(out.businessType).toBe('brand')
    expect(out.quantity).toBe('q100-299')
    expect(out.category).toBe('all-around')
    expect(out.timeline).toBe('t3-6mo')
    expect(out.projectStage).toBe('reviewing')
    expect(out.role).toBe('purchasing')
    expect(out.consent).toBe('yes')
  })

  test('pickList keeps only whitelisted comma values, preserves order', () => {
    const out = clampInquiryInput({ ...validInput(), customization: 'logo,naughty,tooling,,graphics' })
    expect(out.customization).toBe('logo,tooling,graphics')
  })

  test('single unsupported pickList value falls through to the list parser', () => {
    expect(clampInquiryInput({ ...validInput(), docs: 'audit,inspection' }).docs).toBe('audit,inspection')
    expect(clampInquiryInput({ ...validInput(), docs: 'bogus,audit' }).docs).toBe('audit')
  })

  test('caps string lengths and hard-fails non-strings', () => {
    const out = clampInquiryInput({
      ...validInput(),
      company: 'X'.repeat(500),
      requirements: 'R'.repeat(5000),
      whatsapp: 42 as unknown as string,
    })
    expect(out.company).toHaveLength(120)
    expect(out.requirements).toHaveLength(2000)
    expect(out.whatsapp).toBe('')
  })

  test('null/undefined input → all defaults, no throw', () => {
    const out = clampInquiryInput(null)
    expect(out.company).toBe('')
    expect(out.consent).toBe('')
    expect(out.requirements).toBe('')
  })
})

describe('isValidInquiry', () => {
  test('complete input passes', () => {
    expect(isValidInquiry(validInput())).toBe(true)
  })

  test.each([
    ['company', { company: 'X' }],
    ['company missing entirely', { company: '' }],
    ['email', { email: 'not-an-email' }],
    ['country+market both empty', { country: '', targetMarket: '' }],
    ['businessType', { businessType: '' }],
    ['quantity', { quantity: '' }],
    ['category', { category: '' }],
    ['timeline', { timeline: '' }],
    ['projectStage', { projectStage: '' }],
    ['role', { role: '' }],
    ['consent', { consent: '' }],
  ] as const)('rejects missing %s', (_label, patch) => {
    expect(isValidInquiry(validInput({ ...patch }))).toBe(false)
  })

  test('country alone satisfies the market gate (targetMarket optional)', () => {
    expect(isValidInquiry(validInput({ targetMarket: '' }))).toBe(true)
  })
})

describe('scoreInquiry', () => {
  test('fully-specified B2B lead with business email + file → tier A', () => {
    const { score, tier } = scoreInquiry(
      validInput({ businessType: 'brand', quantity: 'q500', projectStage: 'ready', packaging: 'custom' }),
      { hasFile: true },
    )
    expect(score).toBeGreaterThanOrEqual(70)
    expect(tier).toBe('A')
  })

  test('mid-level profile → tier B', () => {
    const { score, tier } = scoreInquiry(
      validInput({ businessType: 'retailer', quantity: 'q50-99', annualVolume: 'v300-999', projectStage: 'developing', packaging: 'export' }),
      { hasFile: false },
    )
    expect(score).toBeGreaterThanOrEqual(40)
    expect(score).toBeLessThan(70)
    expect(tier).toBe('B')
  })

  test('free mail + tiny qty + future stage + price-only message → tier C, clamped ≥ 0', () => {
    const { score, tier } = scoreInquiry(
      validInput({
        email: 'someone@gmail.com',
        businessType: 'other',
        quantity: 'q1-9',
        timeline: 'unsure',
        projectStage: 'future',
        construction: 'need-rec',
        packaging: 'not-decided',
        compliance: 'guidance',
        annualVolume: 'not-decided',
        docs: 'not-decided',
        requirements: 'price?',
      }),
      { hasFile: false },
    )
    expect(score).toBe(0)
    expect(tier).toBe('C')
  })

  test('business email outranks free mail', () => {
    const a = scoreInquiry(validInput({ email: 'buyer@acme-boards.com' }), { hasFile: false }).score
    const b = scoreInquiry(validInput({ email: 'buyer@gmail.com' }), { hasFile: false }).score
    expect(a).toBe(b + 20)
  })

  test('uploaded file adds the lead-quality bonus', () => {
    const without = scoreInquiry(validInput(), { hasFile: false }).score
    const withFile = scoreInquiry(validInput(), { hasFile: true }).score
    expect(withFile).toBe(without + 15)
  })

  test('price-only messages are penalized but full briefs are not', () => {
    const spammy = scoreInquiry(validInput({ requirements: 'send me price' }), { hasFile: false }).score
    const brief = scoreInquiry(validInput(), { hasFile: false }).score
    expect(spammy).toBeLessThan(brief)
  })

  test('score equals the sum of its signals (single source of truth)', () => {
    const input = validInput()
    const { score } = scoreInquiry(input, { hasFile: true })
    const sum = inquiryScoreSignals(input, { hasFile: true }).reduce((acc, s) => acc + s.delta, 0)
    expect(score).toBe(Math.max(0, sum))
    expect(inquiryScoreSignals(input, { hasFile: true }).some((s) => s.id === 'logoUploaded')).toBe(true)
  })
})
