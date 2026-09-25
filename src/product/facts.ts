import { BRAND_SOCIAL, BRAND_CONTACT, BRAND_BOILERPLATE, BRAND_BUILD_LINE, BRAND_NOT_ROB } from '@/config/branding'

export const FACTS_VERIFIED = 'September 2026' as const

export type VerifiedSource = 'factory-record' | 'qc-procedure' | 'certificate' | 'project-record' | 'audit-report'

export const FACTS = {
  warehouseM2: '12,500 m²',
  workers: '350+',
  annualCapacity: '120,000+ units',
  moq: {
    existingPlatform: '5–10 pcs (logo-only on existing shape, same material roll)',
    pilotBatch: '20–50 pcs (custom graphics or minor spec change, same material roll)',
    standardRun: '90–100+ pcs per approved configuration, subject to material-roll and packaging requirements',
    customMould: '90–100+ pcs (new shape requires dedicated mould; tooling adds 15–20 days)',
    multiSku: 'Each SKU (size/color combo) on a separate material roll has its own MOQ',
  },
  moqNote: 'MOQ is confirmed after specification review, because construction, board size, PVC structure, artwork, packaging and accessories affect material usage.',
  moqNoteEs: 'El MOQ se confirma tras la revisión de especificaciones, ya que la construcción, tamaño de tabla, estructura de PVC, arte, embalaje y accesorios afectan el uso de material.',
  moqExplanation: {
    sample: '1–2 units for approval',
    coBrand: 'from 5–10 units on selected existing platforms',
    pilot: '20–50 units on existing platforms',
    standard: '90–100+ units per approved configuration, subject to material-roll and packaging requirements',
    customMould: '90–100+ units; new shape requires dedicated mould (+15–20 days tooling)',
  },
  moqExplanationEs: {
    sample: '1–2 unidades para aprobación',
    coBrand: 'desde 5–10 unidades en determinadas plataformas existentes',
    pilot: '20–50 unidades en plataformas existentes',
    standard: '90–100+ unidades por configuración aprobada, según los requisitos de material y embalaje',
    customMould: '90–100+ unidades; las formas nuevas requieren molde dedicado (+15–20 días de utillaje)',
  },
  moqExplanationFr: {
    sample: '1–2 unités pour approbation',
    coBrand: 'à partir de 5–10 unités sur certaines plateformes existantes',
    pilot: '20–50 unités sur plateformes existantes',
    standard: '90–100+ unités par configuration approuvée, selon les exigences d’emballage et de rouleau de matériau',
    customMould: '90–100+ unités ; une nouvelle forme nécessite un moule dédié (+15–20 jours d’outillage)',
  },
  materialRollNote: 'A 150 m drop-stitch material roll yields different board counts depending on board size, construction and nesting layout. The 90–100+ MOQ represents the minimum batch per configuration, not a fixed per-roll count.',
  moqDecisionTree: [
    { scenario: 'Existing platform, logo overlay only', min: '5–10 pcs', unit: 'per design', condition: 'Same shape, same material roll, same colorway' },
    { scenario: 'Custom graphics / EVA / packaging on existing platform', min: '20–50 pcs', unit: 'pilot batch', condition: 'Same shape; new artwork requires visual proof approval' },
    { scenario: 'Standard volume production (any platform)', min: '90–100+ pcs', unit: 'per approved configuration', condition: 'Per material roll; multiple SKUs = separate rolls' },
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
  certificationNote: 'Certificate numbers, validity periods and issuing authorities are available per project on request. CE certification applies to models destined for EU markets; scope varies by target market and product configuration. Not all products carry CE marking universally — scope is confirmed per project.',
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

/** Rendering shorthands for facts interpolated into localized UI strings. */
export interface FactShorthands {
  moq: {
    existingPlatform: string
    trialStandard: string
    standardRun: string
    customMould: string
  }
  leadTime: string
  leadTimeDetail: string
  sampleTime: string
  assemblyChecklist: string
  pressureTest: string
  pressureReject: string
}

export const FACTS_LOCALE: Record<'en' | 'es' | 'fr' | 'de' | 'it' | 'pt', FactShorthands> = {
  en: {
    moq: {
      existingPlatform: FACTS.moq.existingPlatform,
      trialStandard: FACTS.moq.pilotBatch,
      standardRun: FACTS.moq.standardRun,
      customMould: FACTS.moq.customMould,
    },
    leadTime: FACTS.leadTime,
    leadTimeDetail: FACTS.leadTimeDetail,
    sampleTime: FACTS.sampleTime,
    assemblyChecklist: FACTS.assemblyChecklist,
    pressureTest: FACTS.pressureTest,
    pressureReject: FACTS.pressureReject,
  },
  es: {
    moq: {
      existingPlatform: '5–10 uds. (solo logotipo en forma existente, mismo rollo de material)',
      trialStandard: '20–50 uds. (gráficos personalizados o cambio menor de especificación, mismo rollo de material)',
      standardRun: '90–100+ uds. por configuración aprobada, según los requisitos de material y embalaje',
      customMould: '90–100+ uds. (las formas nuevas requieren molde dedicado; el utillaje añade 15–20 días)',
    },
    leadTime: '25–35 días',
    leadTimeDetail: '25–35 días desde el PO y el depósito confirmados; el desarrollo de un molde a medida añade 15–20 días de utillaje.',
    sampleTime: '7–12 días',
    assemblyChecklist: '100 puntos',
    pressureTest: '18.0 PSI · 24 h de mantenimiento',
    pressureReject: 'caída de presión >0,50 PSI/24 h (rechazo automático)',
  },
  fr: {
    moq: {
      existingPlatform: '5–10 unités (logo seul sur forme existante, même rouleau de matériau)',
      trialStandard: '20–50 unités (visuels personnalisés ou légère modification de spécification, même rouleau de matériau)',
      standardRun: '90–100+ unités par configuration approuvée, selon les exigences d’emballage et de rouleau de matériau',
      customMould: '90–100+ unités (une nouvelle forme nécessite un moule dédié ; l’outillage ajoute 15–20 jours)',
    },
    leadTime: '25–35 jours',
    leadTimeDetail: '25–35 jours à compter de la confirmation du bon de commande et de l’acompte ; le développement d’un moule sur mesure ajoute 15–20 jours d’outillage.',
    sampleTime: '7–12 jours',
    assemblyChecklist: '100 points',
    pressureTest: '18,0 PSI · maintien 24 h',
    pressureReject: 'chute de pression >0,50 PSI/24 h (rejet automatique)',
  },
  de: {
    moq: {
      existingPlatform: '5–10 Stück (nur Logo auf bestehender Form, gleiche Materialrolle)',
      trialStandard: '20–50 Stück (individuelle Grafik oder geringe Spezifikationsänderung, gleiche Materialrolle)',
      standardRun: '90–100+ Stück pro freigegebener Konfiguration, abhängig von Materialrolle und Verpackungsanforderungen',
      customMould: '90–100+ Stück (neue Form erfordert Maßform; Werkzeugbau zusätzlich 15–20 Tage)',
    },
    leadTime: '25–35 Tage',
    leadTimeDetail: '25–35 Tage nach bestätigter Bestellung und Anzahlung; die Entwicklung einer Maßform dauert 15–20 Tage zusätzlich für den Werkzeugbau.',
    sampleTime: '7–12 Tage',
    assemblyChecklist: '100',
    pressureTest: '18,0 PSI über 24 h',
    pressureReject: 'Druckabfall >0,50 PSI/24 h (automatische Aussortierung)',
  },
  it: {
    moq: {
      existingPlatform: '5–10 pezzi (solo logo su forma esistente, stesso rotolo di materiale)',
      trialStandard: '20–50 pezzi (grafiche personalizzate o modifica minore di specifica, stesso rotolo di materiale)',
      standardRun: '90–100+ pezzi per configurazione approvata, soggetto ai requisiti di rotolo di materiale e imballaggio',
      customMould: '90–100+ pezzi (una nuova forma richiede stampo dedicato; l’utillaggio aggiunge 15–20 giorni)',
    },
    leadTime: '25–35 giorni',
    leadTimeDetail: '25–35 giorni da PO e acconto confermati; lo sviluppo di uno stampo su misura aggiunge 15–20 giorni di utillaggio.',
    sampleTime: '7–12 giorni',
    assemblyChecklist: '100',
    pressureTest: '18.0 PSI · 24 ore di tenuta',
    pressureReject: 'calo di pressione >0,50 PSI/24 h (scarto automatico)',
  },
  pt: {
    moq: {
      existingPlatform: '5–10 unidades (apenas logótipo em plataforma existente, mesmo rolo de material)',
      trialStandard: '20–50 unidades (gráficos personalizados ou alteração menor de especificação, mesmo rolo de material)',
      standardRun: '90–100+ unidades por configuração aprovada, sujeito aos requisitos de rolo de material e embalagem',
      customMould: '90–100+ unidades (uma nova forma exige molde dedicado; o ferramental acrescenta 15–20 dias)',
    },
    leadTime: '25–35 dias',
    leadTimeDetail: '25–35 dias a partir do PO e do depósito confirmados; o desenvolvimento de um molde à medida acrescenta 15–20 dias de ferramental.',
    sampleTime: '7–12 dias',
    assemblyChecklist: '100',
    pressureTest: '18.0 PSI · retenção de 24 h',
    pressureReject: 'queda de pressão >0,50 PSI/24 h (rejeição automática)',
  },
}

export function getFacts(locale: string): FactShorthands {
  return FACTS_LOCALE[locale as keyof typeof FACTS_LOCALE] ?? FACTS_LOCALE.en
}

export const COLLABORATION_MODES = {
  oem: {
    short: 'Manufacture to your approved specification',
    full: 'OEM (Original Equipment Manufacturing): We manufacture to your approved specification — your drawings, dimensions, materials, construction and packaging. You own the design, moulds and intellectual property.',
    bestFor: 'Buyers with existing designs, reference boards or detailed specifications',
  },
  odm: {
    short: 'Develop the board with our engineering team',
    full: 'ODM (Original Design Manufacturing): Our engineering team develops the board structure, construction, graphics and packaging from your brief — whether that is a market concept, performance target or adaptation of a proven platform. Factory proposes the design; buyer approves before production.',
    bestFor: 'Buyers with product ideas, market requirements or performance targets but no detailed specification',
  },
  privateLabel: {
    short: 'Brand a proven SUP platform with your graphics',
    full: 'Private Label: Your brand, graphics and packaging on an existing validated platform — no mould development, no structural changes. Fastest route from concept to delivery.',
    bestFor: 'Buyers who need branded boards quickly without product development',
  },
  commercial: {
    short: 'Configure durable fleet packages',
    full: 'Commercial Fleet Program: High-frequency-use SUP packages for rental operators, resorts, clubs and schools — with durability specs, spare parts, color management and batch consistency.',
    bestFor: 'Resort, rental, club and school operators',
  },
} as const