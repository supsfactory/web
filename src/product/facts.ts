import { BRAND_SOCIAL, BRAND_CONTACT, BRAND_BOILERPLATE, BRAND_BUILD_LINE, BRAND_NOT_ROB } from '@/config/branding'

export const FACTS_VERIFIED = '2026-08-20' as const

export type VerifiedSource = 'factory-record' | 'qc-procedure' | 'certificate' | 'project-record' | 'audit-report'

export const FACTS = {
  warehouseM2: '12,500 m²',
  workers: '350+',
  annualCapacity: '120,000+ units',
  moq: {
    existingPlatform: '5–10 pcs (logo-only on existing shape, same material roll)',
    pilotBatch: '20–50 pcs (custom graphics or minor spec change, same material roll)',
    standardRun: '90–100+ pcs per 150 m drop-stitch roll (~180–220 boards)',
    customMould: '90–100+ pcs (new shape requires dedicated mould; tooling adds 15–20 days)',
    multiSku: 'Each SKU (size/color combo) on a separate material roll has its own MOQ',
  },
  moqDecisionTree: [
    { scenario: 'Existing platform, logo overlay only', min: '5–10 pcs', unit: 'per design', condition: 'Same shape, same material roll, same colorway' },
    { scenario: 'Custom graphics / EVA / packaging on existing platform', min: '20–50 pcs', unit: 'pilot batch', condition: 'Same shape; new artwork requires visual proof approval' },
    { scenario: 'Standard volume production (any platform)', min: '90–100+ pcs', unit: 'per 150 m roll (~180–220 boards)', condition: 'Per material roll; multiple SKUs = separate rolls' },
    { scenario: 'New shape / custom mould', min: '90–100+ pcs', unit: 'production run', condition: 'Mould tooling 15–20 extra days; one-time mould fee applies' },
  ] as const,
  leadTime: '25–35 days',
  leadTimeDetail: '25–35 days from confirmed PO and deposit; custom mould development adds 15–20 days for tooling.',
  sampleTime: '7–12 days',
  cncAccuracy: '0.1 mm',
  rfPower: '15 kW',
  dropStitchPsi: '12–15 PSI',
  evaHardness: '45–55 Shore C',
  assemblyChecklist: '100-point',
  pressureTest: '18.0 PSI · 24h hold',
  pressureReject: '>0.50 PSI/24h pressure drop (auto-reject)',
  traceabilityRet: '10 years',
  certifications: [
    { name: 'BSCI', scope: 'Social responsibility audit', authority: 'amfori BSCI', appliesTo: 'Manufacturing facility', verifiedSource: 'audit-report' as VerifiedSource },
    { name: 'ISO 9001', scope: 'Quality management system', authority: 'Certifying body (available on request)', appliesTo: 'Manufacturing facility', verifiedSource: 'certificate' as VerifiedSource },
    { name: 'ISO 25649', scope: 'Inflatable water craft safety', authority: 'ISO', appliesTo: 'Applicable SUP models per market', verifiedSource: 'certificate' as VerifiedSource },
    { name: 'CE', scope: 'EU market conformity (EN ISO 6185 / EN ISO 10087 / EN ISO 10240)', authority: 'EU notified body', appliesTo: 'Models destined for EU market', verifiedSource: 'certificate' as VerifiedSource },
    { name: 'REACH', scope: 'EU chemical safety', authority: 'ECHA', appliesTo: 'Materials used in production', verifiedSource: 'certificate' as VerifiedSource },
    { name: 'RoHS', scope: 'Restriction of hazardous substances', authority: 'EU directive', appliesTo: 'Electronic accessories (pumps)', verifiedSource: 'certificate' as VerifiedSource },
  ] as const,
  certificationNote: 'Certificate numbers, validity periods and issuing authorities are available per project on request. "CE on all products" applies to models destined for EU markets; scope varies by target market and product configuration.',
  exportCountries: '50+',
  workshops: '4 specialized workshops',
  productionLines: '4 automated lines',
  monthlyCapacity: '10,000 boards/month',
  ndaWindow: '4 business hours',
  qualityGates: '7-stage (Node 01–07)',
  thirdPartyInspectors: ['SGS', 'TÜV', 'BV', 'Intertek'],
  samplingStandard: 'ISO 2859-1 Level II',
  peakSeason: 'October–April',
  social: BRAND_SOCIAL,
  contact: BRAND_CONTACT,
  boilerplate: BRAND_BOILERPLATE,
  buildLine: BRAND_BUILD_LINE,
  notRob: BRAND_NOT_ROB,
  tagline:
    'Engineering, tooling, sampling and production for SUP brands, distributors and sourcing teams. You bring the brand — we build the boards.',
  taglineEs:
    'Ingeniería, utillaje, muestras y producción para marcas de SUP, distribuidores y equipos de compra. Tú traes la marca — nosotros fabricamos las tablas.',
} as const

export type FactLiteral = (typeof FACTS)[keyof typeof FACTS]

export const CERTIFICATION_NAMES = FACTS.certifications.map((c) => c.name) as readonly string[]

export const MOQ_SHORT = {
  trialStandard: FACTS.moq.pilotBatch,
  standardRun: FACTS.moq.standardRun,
  customMould: FACTS.moq.customMould,
  existingPlatform: FACTS.moq.existingPlatform,
} as const