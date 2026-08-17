import type { Locale } from '@/features/i18n/locale'
import { FACTS } from './facts'

/**
 * Marketing content for the SUPsfactory site, localized en/es.
 *
 * Content (headlines, body copy, products, FAQ, landings) lives here rather
 * than in the i18n dictionaries, which stay reserved for structural UI strings
 * (nav, buttons, form labels). Every entry is bilingual so both locale routes
 * render the same structure.
 */

export interface Localized<T> {
  en: T
  es: T
}

export function pick<T>(d: Localized<T>, locale: Locale): T {
  return locale === 'es' ? d.es : d.en
}

/* ─────────────────────────── home: hero ─────────────────────────── */

export interface HeroContent {
  kicker: string
  titlePre: string
  titleAccent: string
  titlePost: string
  sub: string
  ctaPrimary: string
  ctaSecondary: string
  ctaTertiary: string
  ctaQuartiary: string
  ctaMicro: string
  stats: { value: string; label: string }[]
  mockupLabel: string
  mockupBrand: string
  mockupHint: string
  heroNote: string
  float1: { value: string; label: string }
  float2: { value: string; label: string }
}

export const hero: Localized<HeroContent> = {
  en: {
    kicker: 'SUP Manufacturer — OEM / ODM / Private Label',
    titlePre: 'Custom Inflatable SUP Manufacturing for',
    titleAccent: 'Brands, Distributors & Commercial Programs',
    titlePost: '',
    sub: 'Develop your private-label paddle board range with a manufacturing partner that supports product specification, custom graphics, samples, quality control, packaging and export-ready production.',
    ctaPrimary: 'Get a Custom Project Quote',
    ctaSecondary: 'Explore Construction & Quality',
    ctaTertiary: 'MOQ & Lead-Time Guide',
    ctaQuartiary: 'Proof Center — Factory Evidence',
    ctaMicro: 'Reply within 1 business day · NDA available · MOQ confirmed after specification review',
    stats: [
      { value: '120,000+', label: 'Boards produced annually' },
      { value: '12,500 m²', label: 'Factory floor — 4 workshops' },
      { value: '4', label: 'Specialized production workshops' },
      { value: '50+', label: 'Export countries served' },
    ],
    mockupLabel: 'Signature Platform',
    mockupBrand: "SUP Explorer 11'",
    mockupHint: 'Your graphics · your colors · your packaging',
    heroNote:
      'SUPSfactory is a custom inflatable SUP manufacturer in Qingdao (Laixi), China — the inflatable-SUP division of Afarer (Qingdao Vatrad Group). We run OEM, ODM and private-label programs from a 12,500 m² plant with 120,000+ boards of annual capacity. Trial runs start at 1–2 boards, pilots at 20–50, and standard volume MOQ from 90–100 boards per design.',
    float1: { value: '90–100 pcs', label: 'Standard volume MOQ (per 150 m roll)' },
    float2: { value: FACTS.leadTime, label: 'Production lead time (after PO)' },
  },
  es: {
    kicker: 'Fabricante de SUP — OEM / ODM / Marca privada',
    titlePre: 'Fabricación de tablas SUP hinchables a medida para',
    titleAccent: 'marcas, distribuidores y programas comerciales',
    titlePost: '',
    sub: 'Desarrolla tu gama de tablas de paddle board de marca propia con un socio de fabricación que cubre especificación de producto, gráficos personalizados, muestras, control de calidad, packaging y producción lista para exportar.',
    ctaPrimary: 'Solicita un presupuesto de proyecto',
    ctaSecondary: 'Explora construcción y calidad',
    ctaTertiary: 'Guía de MOQ y plazos',
    ctaQuartiary: 'Centro de Evidencia — Datos de Fábrica',
    ctaMicro: 'Respuesta en 1 día hábil · NDA disponible · MOQ confirmado tras revisar la especificación',
    stats: [
      { value: '120.000+', label: 'Tablas producidas al año' },
      { value: '12.500 m²', label: 'Superficie de fábrica — 4 talleres' },
      { value: '4', label: 'Talleres de producción especializados' },
      { value: '50+', label: 'Países de exportación' },
    ],
    mockupLabel: 'Plataforma insignia',
    mockupBrand: 'SUP Explorer 11\'',
    mockupHint: 'Tus gráficos · Tus colores · tu packaging',
    heroNote:
      'SUPsfactory es un fabricante de tablas SUP hinchables a medida en Qingdao (Laixi), China — la división de SUP hinchables de Afarer (Qingdao Vatrad Group). Realizamos programas OEM, ODM y de marca privada en una planta de 12.500 m² con capacidad anual de 120.000+ tablas. Los pedidos de prueba parten de 1–2 tablas, los pilotos de 20–50 y el MOQ de volumen estándar desde 90–100 tablas por diseño.',
    float1: { value: '90–100 uds.', label: 'MOQ de volumen estándar (por rollo de 150 m)' },
    float2: { value: FACTS.leadTime, label: 'Plazo de producción (tras PO)' },
  },
}

/* ─────────────────────────── home: why us (Afarer advantage) ─────────────────────────── */

export interface WhyBullet {
  title: string
  body: string
}

export interface WhyContent {
  kicker: string
  title: string
  sub: string
  image: string
  imageCaption: string
  bullets: WhyBullet[]
}

export const why: Localized<WhyContent> = {
  en: {
    kicker: 'The Manufacturing Brand',
    title: 'Powered by Afarer',
    sub: 'SUPsfactory is the SUP product development and manufacturing division of Afarer, the manufacturing division of Qingdao Vatrad Group Co., Ltd. Our 12,500 m² plant in Laixi, Qingdao has produced inflatable products since 2012, with 25+ engineers across R&D, mold design, materials lab and production engineering averaging 7+ years in inflatable manufacturing, running two production shifts daily.',
    image: 'https://assets.supsfactory.com/images/sups/factory/afarer-production-department.webp',
    imageCaption: 'Afarer manufacturing facility, Qingdao, China',
    bullets: [
      {
        title: '12,500 m² plant',
        body: 'In-house from raw PVC to finished board, in Laixi, Qingdao.',
      },
      {
        title: 'Producing since 2012',
        body: 'Two production shifts daily across SUP and inflatables.',
      },
      {
        title: '25+ engineers',
        body: 'Across R&D, mold design, materials lab and production engineering.',
      },
      {
        title: '7+ years average',
        body: 'Inflatable manufacturing experience per engineer.',
      },
    ],
  },
  es: {
    kicker: 'La marca de fabricación',
    title: 'Con el respaldo de Afarer',
    sub: 'SUPsfactory es la división de desarrollo y fabricación de productos SUP de Afarer, la división de fabricación de Qingdao Vatrad Group Co., Ltd. Nuestra planta de 12.500 m² en Laixi, Qingdao produce productos inflables desde 2012, con más de 25 ingenieros entre I+D, diseño de moldes, laboratorio de materiales e ingeniería de producción, con una media de más de 7 años en fabricación de inflables y dos turnos de producción diarios.',
    image: 'https://assets.supsfactory.com/images/sups/factory/afarer-production-department.webp',
    imageCaption: 'Instalaciones de fabricación de Afarer, Qingdao, China',
    bullets: [
      {
        title: 'Planta de 12,500 m²',
        body: 'Del PVC en bruto a la tabla terminada, en Laixi, Qingdao.',
      },
      {
        title: 'Produciendo desde 2012',
        body: 'Dos turnos de producción diarios entre SUP e inflables.',
      },
      {
        title: '+25 ingenieros',
        body: 'Entre I+D, diseño de moldes, laboratorio de materiales e ingeniería de producción.',
      },
      {
        title: '+7 años de media',
        body: 'De experiencia en fabricación de inflables por ingeniero.',
      },
    ],
  },
}

/* ─────────────────────────── capability strip ─────────────────────────── */

export const strip: Localized<string[]> = {
  en: ['OEM & ODM', 'Private Label', 'Sample Service', 'Design & Artwork', 'QC on every run', 'Worldwide export'],
  es: ['OEM & ODM', 'Marca privada', 'Servicio de muestras', 'Diseño y arte', 'QC en cada lote', 'Exportación mundial'],
}

/* ─────────────────────────── home: trust bar ─────────────────────────── */

export interface TrustStat {
  value: string
  label: string
}

export interface TrustBarContent {
  stats: TrustStat[]
}

export const trustBar: Localized<TrustBarContent> = {
  en: {
    stats: [
      { value: `MOQ ${FACTS.moq.standardRun}`, label: 'per 150 m roll for volume production; pilot runs from 20–50 pcs' },
      { value: FACTS.sampleTime, label: 'samples to your desk after artwork confirmation' },
      { value: FACTS.leadTime, label: 'batch production after confirmed PO and deposit' },
      { value: FACTS.annualCapacity, label: 'annual in-house capacity at the Qingdao plant' },
      { value: FACTS.warehouseM2, label: 'owned plant, from raw PVC to finished board' },
      { value: FACTS.workers, label: 'factory workers and engineers on site' },
      { value: 'ISO 9001 · CE · BSCI', label: 'certified; REACH/RoHS compliant materials' },
      { value: FACTS.exportCountries, label: 'export markets across the EU, US, AU and Asia' },
      { value: '18 PSI / 24 h', label: '100% inflation & leakage test on every board before packing' },
      { value: 'MSL Fusion', label: 'multi-layer fusion welding with woven drop-stitch constructions' },
    ],
  },
  es: {
    stats: [
      { value: `MOQ ${FACTS.moq.standardRun}`, label: 'por rollo de 150 m para volumen; piloto desde 20–50 uds.' },
      { value: FACTS.sampleTime, label: 'muestras en tu escritorio tras confirmar el arte' },
      { value: FACTS.leadTime, label: 'producción en serie tras PO y depósito confirmados' },
      { value: FACTS.annualCapacity, label: 'capacidad anual interna en la planta de Qingdao' },
      { value: FACTS.warehouseM2, label: 'planta propia, del PVC en bruto a la tabla terminada' },
      { value: FACTS.workers, label: 'operarios e ingenieros de planta' },
      { value: 'ISO 9001 · CE · BSCI', label: 'certificada; materiales conformes a REACH/RoHS' },
      { value: FACTS.exportCountries, label: 'mercados de exportación en la UE, EE. UU., Australia y Asia' },
      { value: '18 PSI / 24 h', label: 'prueba de inflado y estanqueidad al 100% en cada tabla antes del embalaje' },
      { value: 'MSL Fusion', label: 'soldadura de fusión multicapa con construcciones de drop-stitch tejido' },
    ],
  },
}

/* ─────────────────────────── home: Manufacturing Scope (OEM/ODM/Private Label/Volume) ─────────────────────────── */

export interface ScopeCard {
  title: string
  body: string
}

export interface SolveContent {
  kicker: string
  title: string
  sub: string
  cta: string
  items: ScopeCard[]
}

export const solve: Localized<SolveContent> = {
  en: {
    kicker: 'Manufacturing Scope',
    title: 'Four Ways Brands and Buyers Work With Our Plant',
    sub: 'OEM, ODM, private label or volume supply — the same in-house engineering and quality system behind every program.',
    cta: 'Request a Manufacturing Quote',
    items: [
      {
        title: 'OEM — Build to Your Specification',
        body: 'You supply drawings, specifications or a reference board. Our engineering team returns a manufacturability report covering materials, layup, tolerances, tooling requirements and cost drivers, then produces to that spec.',
      },
      {
        title: 'ODM — Adapt a Proven Platform',
        body: 'Start from one of our validated board platforms and adjust dimensions, layup, fin configuration, hardware and graphics. Faster to market than a ground-up mold, with the same construction standards.',
      },
      {
        title: 'Private Label — Your Brand on Commercial-Grade Boards',
        body: 'Standard construction, your artwork, your deck pad colors, your packaging and your barcode. Delivered ready for retail or rental deployment with no SUPsfactory or Afarer marking anywhere on the product.',
      },
      {
        title: 'Volume Supply — Repeat and Fleet Orders',
        body: 'Large-run production for distributors, rental operators and resort groups, with locked specifications, batch traceability and consistent construction across reorders.',
      },
    ],
  },
  es: {
    kicker: 'Alcance de fabricación',
    title: 'Cuatro formas de trabajar con nuestra planta',
    sub: 'OEM, ODM, marca privada o suministro por volumen — los mismos estándares de ingeniería y calidad en cada programa.',
    cta: 'Solicita un presupuesto de fabricación',
    items: [
      {
        title: 'OEM — fabrica según tu especificación',
        body: 'Tú aportas planos, especificaciones o una tabla de referencia. Nuestro equipo de ingeniería entrega un informe de fabricabilidad con materiales, layup, tolerancias, utillaje y costes, y produce conforme a esa especificación.',
      },
      {
        title: 'ODM — adapta una plataforma probada',
        body: 'Parte de una de nuestras plataformas validadas y ajusta dimensiones, layup, configuración de quillas, herrajes y gráficos. Más rápido a mercado que un molde desde cero, con los mismos estándares de construcción.',
      },
      {
        title: 'Marca privada — tu marca en tablas de grado comercial',
        body: 'Construcción estándar, tu arte, tus colores de piso de cubierta, tu packaging y tu código de barras. Entregamos listas para retail o alquiler, sin ninguna marca SUPsfactory o Afarer visible en el producto.',
      },
      {
        title: 'Suministro por volumen — pedidos repetidos y de flota',
        body: 'Producción en volumen para distribuidores, operadores de alquiler y grupos hoteleros, con especificaciones fijadas, trazabilidad por lote y construcción homogénea entre reposiciones.',
      },
    ],
  },
}

/* ─────────────────────────── home: Inside the Plant (manufacturing capability) ─────────────────────────── */

export interface CapabilityBlock {
  name: string
  body: string
}

export interface CapabilityContent {
  kicker: string
  title: string
  sub: string
  items: CapabilityBlock[]
}

export const capability: Localized<CapabilityContent> = {
  en: {
    kicker: 'Manufacturing Capability',
    title: 'Inside the Plant',
    sub: 'Every process below runs in-house. Nothing critical is subcontracted.',
    items: [
      {
        name: 'CNC Cutting',
        body: 'Automatic CNC machines cut PVC, Hypalon and drop-stitch fabric to 0.1 mm positional accuracy, with computer-optimised nesting to control material waste.',
      },
      {
        name: 'RF Dielectric Welding',
        body: '15 kW welding presses produce airtight seams. Rail bands are triple-layer fusion bonded for edge strength and impact resistance.',
      },
      {
        name: 'Drop-Stitch Core Lamination',
        body: 'Thousands of internal polyester threads hold the top and bottom laminates parallel, producing a rigid platform at 12–15 PSI. Cores laminated up to 14 ft.',
      },
      {
        name: 'Deck Graphics',
        body: 'Full-colour digital printing and multi-colour screen printing, produced from your brand files. EVA deck pads in your colors with custom logos, cutouts and textures.',
      },
      {
        name: 'Assembly and Rigging',
        body: 'Each board follows a 100-point assembly checklist signed off by the line lead — hardware, D-rings, valves, leash points and accessory fitment.',
      },
      {
        name: 'Export Packing',
        body: 'Vacuum-packed, boxed and export-grade packed, with printed retail cartons available.',
      },
    ],
  },
  es: {
    kicker: 'Capacidad de fabricación',
    title: 'Dentro de la planta',
    sub: 'Todos los procesos siguientes se realizan en casa. Nada crítico se subcontrata.',
    items: [
      {
        name: 'Corte CNC',
        body: 'Las máquinas CNC automáticas cortan PVC, Hypalon y panel drop-stitch con una precisión posicional de 0,1 mm y anidado optimizado por ordenador para controlar el desperdicio de material.',
      },
      {
        name: 'Soldadura dieléctrica RF',
        body: 'Las prensas de soldadura de 15 kW producen juntas herméticas. Las cotas de los rails se fusionan en tres capas para máxima resistencia de borde y contra impactos.',
      },
      {
        name: 'Laminación del núcleo drop-stitch',
        body: 'Miles de hilos internos de poliéster mantienen paralelos el laminado inferior y superior, produciendo una plataforma rígida a 12–15 PSI. Núcleos laminados de hasta 14 pies.',
      },
      {
        name: 'Gráficos de cubierta',
        body: 'Impresión digital a todo color y serigrafía multicolor, producidas a partir de tus archivos de marca. Pavimentos EVA en tus colores con tu logo, recortes y texturas.',
      },
      {
        name: 'Ensamblado y aprestado',
        body: 'Cada tabla sigue un checklist de ensamblado de 100 puntos firmado por el responsable de línea: herrajes, puntos de fijación, válvulas, leash y accesorios.',
      },
      {
        name: 'Embalaje de exportación',
        body: 'Envasado al vacío, encajado y embalado para exportación, con impresión de cartoncines minoristas disponible.',
      },
    ],
  },
}

/* ─────────────────────────── home: quality control (How Every Board Is Verified) ─────────────────────────── */

export interface QualityStep {
  title: string
  body: string
}

export interface QualityContent {
  kicker: string
  title: string
  sub: string
  steps: QualityStep[]
}

export const quality: Localized<QualityContent> = {
  en: {
    kicker: 'Quality Control',
    title: 'How Every Board Is Verified',
    sub: 'Quality is a documented process, not a promise. Here is what happens to your order before it ships.',
    steps: [
      {
        title: 'Incoming Material QC',
        body: 'PVC rolls, drop-stitch cores, valves, adhesives and hardware are quarantined until QC sign-off. Fabrics undergo tensile, tear-propagation and UV-resistance testing before any batch enters the line.',
      },
      {
        title: 'In-Process Checkpoints',
        body: 'QC checkpoints at every production stage, with weld samples pulled and peel-tested against the batch standard.',
      },
      {
        title: 'Pressure Hold Test',
        body: 'Every chamber is inflated to 18.0 PSI and held for 24 hours with continuous sensor logging. Any chamber exceeding 0.50 PSI of pressure drop over 24 hours is rejected and returned for seam re-inspection.',
      },
      {
        // TODO [待确认] D 环拉拔力具体数值（如 ≥150 kgf）待业务方确认后补充
        title: 'Structural Verification',
        body: 'Deflection under rated load, D-ring pull strength, deck pad adhesion peel and valve seating are verified against the specification before final inspection.',
      },
      {
        title: 'Final Inspection',
        body: '100-point checklist per board, plus dimensional and weight verification against the approved sample.',
      },
      {
        title: 'Batch Traceability',
        body: 'Every material lot receives a unique ERP number. Each board’s bill of materials links back to the original supplier batch. Records retained 10 years, per CE 2013/53/EU.',
      },
    ],
  },
  es: {
    kicker: 'Control de calidad',
    title: 'Cómo se verifica cada tabla',
    sub: 'La calidad es un proceso documentado, no una promesa. Esto es lo que le ocurre a tu pedido antes de enviarlo.',
    steps: [
      {
        title: 'Control de calidad de entrada',
        body: 'Los rollos de PVC, núcleos drop-stitch, válvulas, adhesivos y herrerjes quedan en cuarentena hasta la validación. Los tejidos pasan ensayos de tracción, propagación del desgarro y resistencia UV antes de entrar en la línea.',
      },
      {
        title: 'Puntos de control en proceso',
        body: 'Puntos de control en cada etapa de producción, con muestras de soldadura retiradas y ensayadas en pelado contra el estándar del lote.',
      },
      {
        title: 'Ensayo de retención de presión',
        body: 'Cada cámara se infla a 18,0 PSI y se mantiene durante 24 horas con registro de sensores continuo. Cualquier cámara que supere una caída de presión de 0,50 PSI en 24 horas se rechaza y vuelve a revisar las costuras.',
      },
      {
        title: 'Verificación estructural',
        body: 'La flecha bajo carga nominal, la resistencia de los D-rings, la adherencia del pavlo de cubierta y el asiento de las válvulas se verifican contra la especificación antes de la inspección final.',
      },
      {
        title: 'Inspección final',
        body: 'Checklist de 100 puntos por tabla, además de verificación dimensional y de peso contra la muestra aprobada.',
      },
      {
        title: 'Trazabilidad de lote',
        body: 'Cada lote de material recibe un número ERP único. La lista de materiales de cada tabla enlaza con el lote del proveedor original. Registros conservados 10 años, según CE 2013/53/EU.',
      },
    ],
  },
}

/* ─────────────────────────── home: commercial terms ─────────────────────────── */

export interface CommercialCell {
  label: string
  lines: string[]
}

export interface CommercialCell {
  label: string
  lines: string[]
}

export interface MoqTier {
  stage: string
  quantity: string
  purpose: string
  note: string
}

export interface CommercialContent {
  kicker: string
  title: string
  sub: string
  cells: CommercialCell[]
  moqTiers: MoqTier[]
  certs: string
}

export const commercial: Localized<CommercialContent> = {
  en: {
    kicker: 'Commercial Terms',
    title: 'Commercial Terms, Stated Upfront',
    sub: 'Standard MOQ, sampling, production and delivery terms are listed below. Projects involving new tooling, specialized materials, compliance testing or custom packaging are quoted separately.',
    cells: [
      {
        label: 'Minimum order',
        lines: [
          'Co-branding small bulk: 5–10 pcs',
          'Pilot batch / initial stock: 20–50 pcs',
          'Standard volume production: 90–100+ pcs (per 150 m roll)',
        ],
      },
      {
        label: 'Lead time',
        lines: [
          '25–35 days from confirmed PO and deposit',
          'Custom mold development: +15–20 days for tooling',
          'Expedited production available for seasonal rush',
        ],
      },
      {
        label: 'Sampling',
        lines: [
          'Prototype samples ship in 7–12 days',
          'Sample cost credited against bulk order',
        ],
      },
      {
        label: 'Export & documentation',
        lines: [
          'Export documentation handled in-house',
          'Export-grade packing; printed retail cartons available',
        ],
      },
    ],
    certs:
      'ISO 9001 quality management · CE certification · BSCI social compliance (audit report available on request) · REACH and RoHS documentation with every order.',
    moqTiers: [
      {
        stage: 'Sample & approval',
        quantity: '1–2 pcs per design',
        purpose: 'Confirm shape, colors, printing and packaging before any production run',
        note: '7–12 days; physical board, not a rendering',
      },
      {
        stage: 'Co-branding small bulk',
        quantity: '5–10 pcs',
        purpose: 'Test a design on a proven platform with logo over-printing',
        note: 'Fastest way to validate a new graphic',
      },
      {
        stage: 'Pilot batch / initial stock',
        quantity: '20–50 pcs per design',
        purpose: 'Validate the market or open your store with real inventory',
        note: 'Lowest volume on existing platforms',
      },
      {
        stage: 'Standard volume production',
        quantity: '90–100+ pcs per 150 m roll (~180–220 boards)',
        purpose: 'Regular production runs at the best unit price',
        note: 'Custom-mould projects run at this tier (+15–20 days tooling)',
      },
    ],
  },
  es: {
    kicker: 'Condiciones comerciales',
    title: 'Condiciones comerciales, expresadas por adelantado',
    sub: 'Los términos estándar de MOQ, muestreo, producción y entrega se indican a continuación. Los proyectos con utillaje nuevo, materiales especiales, ensayos de cumplimiento o packaging a medida se presupuestan por separado.',
    cells: [
      {
        label: 'Pedido mínimo',
        lines: [
          'Pequeño lote de co-branding: 5–10 uds.',
          'Lote piloto / stock inicial: 20–50 uds.',
          'Producción de volumen estándar: 90–100+ uds. (por rollo de 150 m)',
        ],
      },
      {
        label: 'Plazo de entrega',
        lines: [
          '25–35 días desde el PO confirmado y el depósito',
          'Desarrollo de molde a medida: +15–20 días para utillaje',
          'Producción acelerada disponible para la temporada',
        ],
      },
      {
        label: 'Muestras',
        lines: [
          'Las muestras de prototipo salen en 7–12 días',
          'El coste de la muestra se descuenta del pedido de volumen',
        ],
      },
      {
        label: 'Exportación y documentación',
        lines: [
          'Documentación de exportación gestionada en casa',
          'Embalaje de exportación; cartoncines minoristas impresos disponibles',
        ],
      },
    ],
    certs:
      'ISO 9001 · Certificación CE · BSCI (informe de auditoría disponible) · Documentación REACH y RoHS con cada pedido.',
    moqTiers: [
      {
        stage: 'Muestra y aprobación',
        quantity: '1–2 uds. por diseño',
        purpose: 'Confirmar forma, colores, impresión y packaging antes de cualquier producción',
        note: '7–12 días; tabla física, no un render',
      },
      {
        stage: 'Co-branding en pequeño lote',
        quantity: '5–10 uds.',
        purpose: 'Probar un diseño sobre una plataforma probada con impresión de logo',
        note: 'La vía más rápida para validar un gráfico',
      },
      {
        stage: 'Lote piloto / stock inicial',
        quantity: '20–50 uds. por diseño',
        purpose: 'Validar el mercado o abrir tu tienda con inventario real',
        note: 'El volumen más bajo sobre plataformas existentes',
      },
      {
        stage: 'Producción de volumen estándar',
        quantity: '90–100+ uds. por rollo de 150 m (~180–220 tablas)',
        purpose: 'Producción regular al mejor precio unitario',
        note: 'Los proyectos con molde a medida usan esta capa (+15–20 días utillaje)',
      },
    ],
  },
}

/* ─────────────────────────── who we serve / customer needs ─────────────────────────── */

export interface Segment {
  slug: string
  title: string
  body: string
  points: string[]
  cta: string
  href: string
}

export interface ServeContent {
  kicker: string
  title: string
  sub: string
  segments: Segment[]
}

export const serve: Localized<ServeContent> = {
  en: {
    kicker: 'Who We Serve',
    title: 'Built for Businesses Creating Their Own SUP Products',
    sub: 'Whether you are launching a new paddle board brand or expanding an existing outdoor product line, our manufacturing solutions can be adapted to your business.',
    segments: [
      {
        slug: 'sup-brands',
        title: 'SUP Brands',
        body: 'Develop custom paddle boards that match your brand positioning, target market and product strategy.',
        points: ['Custom designs', 'Brand graphics', 'Product development', 'Private label'],
        cta: 'Explore Custom SUP',
        href: '/product-development',
      },
      {
        slug: 'outdoor-companies',
        title: 'Outdoor & Water Sports Companies',
        body: 'Expand your product portfolio with customized SUP products designed for your market.',
        points: ['Product customization', 'Multiple models', 'OEM production'],
        cta: 'View Custom SUP',
        href: '/solutions/custom-sup',
      },
      {
        slug: 'distributors-retailers',
        title: 'Distributors & Retailers',
        body: 'Create differentiated paddle board collections instead of competing on the same standard products.',
        points: ['Private label', 'Custom packaging', 'Retail-ready products'],
        cta: 'Learn More',
        href: '/solutions/private-label-sup',
      },
      {
        slug: 'resorts-clubs',
        title: 'Resorts, Clubs & Organizations',
        body: 'Develop SUP products and equipment tailored to your operating environment and users.',
        points: ['Custom specifications', 'Branding', 'Bulk production'],
        cta: 'View Solutions',
        href: '/solutions/resort-sup',
      },
    ],
  },
  es: {
    kicker: 'A quién servimos',
    title: 'Hecho para empresas que crean sus propios productos SUP',
    sub: 'Ya sea que estés lanzando una nueva marca de tablas de pádel o ampliando una línea de productos outdoor existente, nuestras soluciones de fabricación se adaptan a tu negocio.',
    segments: [
      {
        slug: 'sup-brands',
        title: 'Marcas de SUP',
        body: 'Desarrolla tablas de pádel personalizadas que coincidan con el posicionamiento de tu marca, tu mercado objetivo y tu estrategia de producto.',
        points: ['Diseños personalizados', 'Gráficos de marca', 'Desarrollo de producto', 'Marca privada'],
        cta: 'Explorar SUP personalizado',
        href: '/product-development',
      },
      {
        slug: 'outdoor-companies',
        title: 'Empresas outdoor y de deportes acuáticos',
        body: 'Amplía tu cartera de productos con SUP personalizados diseñados para tu mercado.',
        points: ['Personalización de producto', 'Varios modelos', 'Producción OEM'],
        cta: 'Ver SUP personalizado',
        href: '/solutions/custom-sup',
      },
      {
        slug: 'distributors-retailers',
        title: 'Distribuidores y minoristas',
        body: 'Crea colecciones de tablas de pádel diferenciadas en lugar de competir con los mismos productos estándar.',
        points: ['Marca privada', 'Embalaje personalizado', 'Productos listos para retail'],
        cta: 'Saber más',
        href: '/solutions/private-label-sup',
      },
      {
        slug: 'resorts-clubs',
        title: 'Resorts, clubes y organizaciones',
        body: 'Desarrolla productos y equipamiento SUP adaptados a tu entorno operativo y a tus usuarios.',
        points: ['Especificaciones personalizadas', 'Marca', 'Producción por volumen'],
        cta: 'Ver soluciones',
        href: '/solutions/resort-sup',
      },
    ],
  },
}

/* ─────────────────────────── solutions ─────────────────────────── */

export interface SolutionPillar {
  title: string
  body: string
  points: string[]
}

export interface SolutionsContent {
  kicker: string
  title: string
  sub: string
  pillars: SolutionPillar[]
}

export const solutions: Localized<SolutionsContent> = {
  en: {
    kicker: 'Customization Capability',
    title: 'Custom SUP Product Solutions For Your Business',
    sub: 'From OEM/ODM programs for brands to private-label lines for distributors and sourcing teams — every requirement turns into a manufacturable product.',
    pillars: [
      {
        title: 'Board Design',
        body: 'Define the board as your product requires.',
        points: ['Shape', 'Size', 'Thickness', 'Construction'],
      },
      {
        title: 'Graphics & Branding',
        body: 'Put your identity on every board.',
        points: ['Logo', 'Colors', 'Artwork', 'Printing'],
      },
      {
        title: 'Accessories',
        body: 'Complete the product with matched parts.',
        points: ['Paddle', 'Bag', 'Fin', 'Packaging'],
      },
      {
        title: 'Production Requirements',
        body: 'Tailor how your project is produced.',
        points: ['Quantity', 'Specification', 'Application'],
      },
    ],
  },
  es: {
    kicker: 'Capacidad de personalización',
    title: 'Soluciones de productos SUP personalizados para tu negocio',
    sub: 'De los programas OEM/ODM para marcas a las líneas de marca privada para distribuidores y equipos de compra — cada requisito se convierte en un producto fabricable.',
    pillars: [
      {
        title: 'Diseño de la tabla',
        body: 'Define la tabla según lo que requiere tu producto.',
        points: ['Forma', 'Tamaño', 'Grosor', 'Construcción'],
      },
      {
        title: 'Gráficos y marca',
        body: 'Pon tu identidad en cada tabla.',
        points: ['Logo', 'Colores', 'Arte', 'Impresión'],
      },
      {
        title: 'Accesorios',
        body: 'Completa el producto con piezas a juego.',
        points: ['Remo', 'Bolsa', 'Quilla', 'Embalaje'],
      },
      {
        title: 'Requisitos de producción',
        body: 'Adapta cómo se produce tu proyecto.',
        points: ['Cantidad', 'Especificación', 'Aplicación'],
      },
    ],
  },
}

/* ─────────────────────────── custom sup studio ─────────────────────────── */

export interface StudioStep {
  title: string
  body: string
}

export interface StudioContent {
  kicker: string
  title: string
  sub: string
  scrollHint: string
  steps: StudioStep[]
}

export const studio: Localized<StudioContent> = {
  en: {
    kicker: 'Configurator',
    title: 'Specification Builder',
    sub: 'Scroll the build — from the board shape to the carton it ships in, every layer is specified by you.',
    scrollHint: 'Scroll to explore',
    steps: [
      {
        title: 'Shape and Size',
        body: 'Choose a proven platform or specify a custom outline — length, width, thickness, rail profile and rocker.',
      },
      {
        title: 'Construction',
        body: 'Single-layer, dual-layer or fusion layup. Rail band count and reinforcement zones specified per use case.',
      },
      {
        title: 'Deck Graphics',
        body: 'Full-deck artwork in your colors, printed from your brand files. Our prepress team converts rough concepts into production-ready data.',
      },
      {
        title: 'Deck Pad',
        body: 'EVA in your brand colors, with custom logos, groove patterns, cutouts and textures.',
      },
      {
        title: 'Accessories and Packaging',
        body: 'Paddles, pumps, bags, fins and leashes — customised and bundled. Printed cartons and retail sleeves to your spec.',
      },
    ],
  },
  es: {
    kicker: 'Configurador',
    title: 'Constructor de especificaciones',
    sub: 'Desliza por todo el proceso — de la forma de la tabla a la caja en la que se envía, cada capa es especificada por ti.',
    scrollHint: 'Desliza para explorar',
    steps: [
      {
        title: 'Forma y tamaño',
        body: 'Elige una plataforma probada o especifica un contorno propio: eslora, manga, grosor, perfil de rails y rocker.',
      },
      {
        title: 'Construcción',
        body: 'Layupl de una capa, doble o de fusión. Número de cintas de rail y zonas de refuerzo según el uso.',
      },
      {
        title: 'Gráficos de cubierta',
        body: 'Arte a toda cubierta en tus colores, impreso desde tus archivos de marca. Nuestro equipo de preimpresión convierte ideas en bruto en datos listos para producción.',
      },
      {
        title: 'Piso de cubierta',
        body: 'EVA en los colores de tu marca, con logos, muescas de agarre, recortes y texturas.',
      },
      {
        title: 'Accesorios y embalaje',
        body: 'Remos, bombas, bolsas, quillas y correas — personalizados y empaquetados. Cajas impresas y fundas de retail según tu especificación.',
      },
    ],
  },
}

/* ─────────────────────────── products ─────────────────────────── */

export interface Product {
  slug: string
  series: string
  sku: string
  name: string
  tagline: string
  desc: string
  uses: string[]
  for: string[]
  specs: string
  artwork: string
  image: string
  hue: number
}

export interface ProductsContent {
  kicker: string
  title: string
  sub: string
  items: Product[]
}

export interface ProductFilterGroup {
  key: string
  label: string
}

export const productFilters: Localized<{ all: string; groups: ProductFilterGroup[] }> = {
  en: {
    all: 'All Platforms',
    groups: [
      { key: 'all-around', label: 'All-Around' },
      { key: 'race', label: 'Race' },
      { key: 'surf', label: 'Surf' },
      { key: 'touring', label: 'Touring' },
      { key: 'yoga', label: 'Yoga' },
      { key: 'whitewater', label: 'Whitewater' },
      { key: 'fishing', label: 'Fishing' },
      { key: 'kids', label: 'Kids' },
      { key: 'multi', label: 'Multi-Person' },
    ],
  },
  es: {
    all: 'Todas las plataformas',
    groups: [
      { key: 'all-around', label: 'Polivalente' },
      { key: 'race', label: 'Competición' },
      { key: 'surf', label: 'Surf' },
      { key: 'touring', label: 'Travesía' },
      { key: 'yoga', label: 'Yoga' },
      { key: 'whitewater', label: 'Aguas bravas' },
      { key: 'fishing', label: 'Pesca' },
      { key: 'kids', label: 'Infantil' },
      { key: 'multi', label: 'Multipersona' },
    ],
  },
}

export const products: Localized<ProductsContent> = {
  en: {
    kicker: 'Product Platforms',
    title: 'SUP Platforms Available For Customization',
    sub: 'Each series is a manufacturing platform — choose a starting point and we adapt the shape, graphics and specs to your product.',
    items: [
      {
        slug: 'sup-explorer-11',
        series: 'all-around',
        sku: 'SUP-EX11',
        name: "SUP Explorer 11'",
        tagline: 'The all-around classic',
        desc: 'Our most popular all-around board — wide-body stability for beginners, agility for intermediates, and portability for any adventure. The default starting point for most new brands.',
        uses: ['Beginner', 'All-Around', 'Family'],
        for: ['Startups', 'Rental fleets'],
        specs: "11'0\" × 32\" × 6\" · drop-stitch PVC · 15 PSI · 19 lbs (8.6 kg)",
        artwork: 'Military-grade drop-stitch core · reinforced rails · 2+1 fins · complete package',
        image: 'https://assets.supsfactory.com/site/products/2026/all-around/all-around-03.avif',
        hue: 195,
      },
      {
        slug: 'sup-ocean-pulse',
        series: 'whitewater',
        sku: 'SUP-OP11',
        name: 'Ocean Pulse Series',
        tagline: 'Topographic wave designer edition',
        desc: 'Ocean waves transformed into Tiffany Blue topographic contours with high-precision mechanical embossing and a unified color-matched accessory kit.',
        uses: ['Lifestyle', 'Flatwater', 'Designer'],
        for: ['Lifestyle brands', 'Boutique travel'],
        specs: "11'0\" × 32\" × 6\" · drop-stitch PVC · 15 PSI · 20 lbs (9.1 kg)",
        artwork: 'UV digital printing + mechanical heat-embossing · coordinated accessories',
        image: 'https://assets.supsfactory.com/site/products/2026/whitewater/whitewater-01.avif',
        hue: 210,
      },
      {
        slug: 'sup-cheetah-surge',
        series: 'surf',
        sku: 'SUP-CS11',
        name: 'Cheetah Surge Edition',
        tagline: 'Wild-inspired premium edition',
        desc: 'Raw wild power meets artistic elegance — a cheetah motif in pastel pink, teal and coral, built with zero-fade multi-color EVA block piecing.',
        uses: ['Lifestyle', 'Flatwater', 'Designer'],
        for: ['Lifestyle brands', 'Social-first brands'],
        specs: "11'0\" × 32\" × 6\" · drop-stitch PVC · 15 PSI · 20 lbs (9.1 kg)",
        artwork: 'Multi-color EVA block piecing + UV printing · anti-delamination build',
        image: 'https://assets.supsfactory.com/site/products/2026/surf/surf-01.avif',
        hue: 28,
      },
      {
        slug: 'sup-medusa-glow',
        series: 'yoga',
        sku: 'SUP-MG11',
        name: 'Medusa Glow Series',
        tagline: 'The jellyfish edition',
        desc: 'An underwater dreamscape — vibrant jellyfish, sea stars and coral reefs in refreshing mint green, with zero-fade EVA artwork and exceptional lateral stability for yoga.',
        uses: ['Yoga', 'Tropical', 'Lifestyle'],
        for: ['Yoga studios', 'Tropical brands'],
        specs: "11'0\" × 32\" × 6\" · drop-stitch PVC · 15 PSI · 20 lbs (9.1 kg)",
        artwork: 'Multi-color EVA block piecing + UV printing · handle anchored to PVC hull',
        image: 'https://assets.supsfactory.com/site/products/2026/kids-teens/kids-teens-05.avif',
        hue: 260,
      },
      {
        slug: 'sup-dolphin-wave',
        series: 'touring',
        sku: 'SUP-DW11',
        name: 'Dolphin Wave Series',
        tagline: 'Marine 360° edition',
        desc: 'Leaping dolphins and layered medieval blue waves with CNC puzzle-cut EVA splicing and screen-printed continuous rail art that wraps the deck 360°.',
        uses: ['Marine', 'Flatwater', 'Designer'],
        for: ['Marine brands', 'Resorts'],
        specs: "11'0\" × 32\" × 6\" · drop-stitch PVC · 15 PSI · 20 lbs (9.1 kg)",
        artwork: 'CNC-cut EVA color-block splicing + screen-printed rails · PANTONE TPG color matching',
        image: 'https://assets.supsfactory.com/site/products/2026/touring/touring-02.avif',
        hue: 210,
      },
      {
        slug: 'sup-flowing-lotus',
        series: 'yoga',
        sku: 'SUP-FL11',
        name: 'Flowing Lotus Series',
        tagline: 'Eastern art wellness edition',
        desc: 'Traditional Eastern brushwork with lotus, koi and dragonfly motifs — laser-engraved into the traction pad so it never wears out or fades. Built for tranquil paddling and yoga.',
        uses: ['Yoga', 'Meditation', 'Flatwater'],
        for: ['Yoga studios', 'Wellness brands'],
        specs: "11'0\" × 32\" × 6\" · drop-stitch PVC · 15 PSI · 20 lbs (9.1 kg)",
        artwork: 'Dual-layer laser-engraved EVA + gradient UV printing · dynamic color-blocked fins',
        image: 'https://assets.supsfactory.com/site/products/2026/yoga/yoga-01.avif',
        hue: 150,
      },
      {
        slug: 'sup-jungle-mandala',
        series: 'all-around',
        sku: 'SUP-JM11',
        name: 'Jungle Mandala Series',
        tagline: 'Tropical sacred geometry',
        desc: 'Tropical vitality meets sacred geometry — hibiscus, hummingbirds and mandala totems in Tiffany Blue and Coral Orange, engineered to stay perfectly symmetrical at full pressure.',
        uses: ['Tropical', 'Coastal', 'Designer'],
        for: ['Tropical brands', 'Travel'],
        specs: "11'0\" × 32\" × 6\" · drop-stitch PVC · 15 PSI · 20 lbs (9.1 kg)",
        artwork: 'Dual-layer laser-engraved EVA + UV printing + screen-printed rails · anti-distortion geometry',
        image: 'https://assets.supsfactory.com/site/products/2026/all-around/all-around-10.avif',
        hue: 28,
      },
      {
        slug: 'sup-leviathan-wake',
        series: 'race',
        sku: 'SUP-LW11',
        name: 'Leviathan Wake Series',
        tagline: 'The whale edition',
        desc: 'A majestic blue whale totem with geometric tribal patterns and minimalist black-white swell lines — for paddlers who connect with the ocean.',
        uses: ['Ocean', 'All-Around', 'Designer'],
        for: ['Ocean brands', 'Outdoor brands'],
        specs: "11'0\" × 32\" × 6\" · drop-stitch PVC · 15 PSI · 20 lbs (9.1 kg)",
        artwork: 'UV digital printing + mechanical embossing · stretchable PVC inks on bottom logo',
        image: 'https://assets.supsfactory.com/site/products/2026/race/race-01.avif',
        hue: 195,
      },
      {
        slug: 'sup-ocean-voyager',
        series: 'all-around',
        sku: 'SUP-OV11',
        name: 'Ocean Voyager Series',
        tagline: 'The sea turtle edition',
        desc: 'A tribute to the ocean’s ultimate wanderer — geometric sea turtle artwork in deep teal, turquoise and coral orange, with an end-to-end coordinated accessory kit.',
        uses: ['Touring', 'Ocean', 'All-Around'],
        for: ['Touring brands', 'Outdoor brands'],
        specs: "11'0\" × 32\" × 6\" · drop-stitch PVC · 15 PSI · 20 lbs (9.1 kg)",
        artwork: 'Multi-color EVA block piecing + UV printing · color-matched backpack, pump & leash',
        image: 'https://assets.supsfactory.com/site/products/2026/all-around/all-around-12.avif',
        hue: 170,
      },
      {
        slug: 'sup-tropical-breeze',
        series: 'all-around',
        sku: 'SUP-TB11',
        name: 'Tropical Breeze Series',
        tagline: 'Island escape edition',
        desc: 'A complete island vacation canvas — sunshine, coconut groves and beach scenes flowing from a micro-illustrated nose into abstract EVA color-blocking toward the tail.',
        uses: ['Vacation', 'Lifestyle', 'Coastal'],
        for: ['Travel brands', 'Resorts'],
        specs: "11'0\" × 32\" × 6\" · drop-stitch PVC · 15 PSI · 20 lbs (9.1 kg)",
        artwork: 'UV digital printing + die-cut EVA patchwork · illustrated nose landscape',
        image: 'https://assets.supsfactory.com/site/products/2026/all-around/all-around-17.avif',
        hue: 330,
      },
      {
        slug: 'sup-rheo-race',
        series: 'race',
        sku: 'SUP-RHEO01',
        name: 'RHEO Race Series',
        tagline: 'Carbon hybrid race edition',
        desc: 'Elite-tier inflatable race board with carbon hybrid construction and an aggressive glide rocker — built for competitive racing, sprint training and technical courses where rigidity and speed decide the result.',
        uses: ['Racing', 'Speed', 'Training'],
        for: ['Race teams', 'Coaching'],
        specs: 'Carbon hybrid matrix · glide rocker · streamlined high-speed profile',
        artwork: 'Carbon hybrid inflatable construction · performance glide rocker',
        image: 'https://assets.supsfactory.com/site/products/2026/race/race-11.avif',
        hue: 195,
      },
      {
        slug: 'sup-fishing',
        series: 'fishing',
        sku: 'SUP-FSH01',
        name: 'Inflatable Fishing SUP',
        tagline: 'Catamaran-stability fishing edition',
        desc: 'Fishing-dedicated inflatable SUP with a double-sided air chamber (catamaran style) for exceptional secondary stability, rod holder mounts, an on-deck fish ruler and a reinforced utility hull.',
        uses: ['Fishing', 'Stability', 'Utility'],
        for: ['Fishing brands', 'Guides'],
        specs: 'Double-sided air chamber · 10–80 cm fish ruler · rod holder mounts',
        artwork: 'Reinforced utility hull · multi-point metal D-rings',
        image: 'https://assets.supsfactory.com/site/products/2026/fishing/fishing-01.avif',
        hue: 210,
      },
      {
        slug: 'sup-mini',
        series: 'kids',
        sku: 'SUP-MINI01',
        name: 'Mini SUP Series',
        tagline: '3-in-1 kids / surf / bodyboard',
        desc: 'Ultra-portable hybrid board that switches between a kids SUP, an inflatable surfboard and a bodyboard — with a short, wide, highly stable profile and a puncture-resistant deck.',
        uses: ['Kids', 'Surf', 'Travel'],
        for: ['Kids brands', 'Resorts'],
        specs: 'Hybrid SUP / surf / bodyboard geometry · short wide hull · puncture-resistant deck',
        artwork: 'Multi-purpose hybrid geometry · heavy-duty deck material',
        image: 'https://assets.supsfactory.com/site/products/2026/mini/mini-01.avif',
        hue: 28,
      },
      {
        slug: 'sup-giant',
        series: 'multi',
        sku: 'SUP-GNT01',
        name: 'Giant SUP — Multi-Person Team Board',
        tagline: '6–8 rider team platform',
        desc: 'Large-format multi-person SUP for 6–8 riders: 16.4–17 ft hull, 59–60 inch width, 8-inch thickness and dual-valve inflation, with 8–12 grab handles and a 4+1 fin system.',
        uses: ['Group', 'Team', 'Leisure'],
        for: ['Resorts', 'Rental fleets'],
        specs: "16'4\"–17'0\" × 59\"–60\" × 8\" · 1200–1400 L · 11–15 PSI · 4+1 fins",
        artwork: 'Dual-valve inflation · 8–12 neoprene grab handles · 4+1 fin system',
        image: 'https://assets.supsfactory.com/site/products/2026/giant/giant-03.avif',
        hue: 195,
      },
      {
        slug: 'sup-lure-skiff',
        series: 'fishing',
        sku: 'SUP-LSK01',
        name: 'Utility SUP — Lure Skiff',
        tagline: 'Ultra-wide 120 cm lure fishing',
        desc: 'Ultra-wide 120 cm lure-fishing board with a central cutout compartment and underwater viewing window, 400 kg payload and a pontoon-like hull for rock-solid casting and seated angling.',
        uses: ['Fishing', 'Utility', 'Stability'],
        for: ['Fishing brands', 'Anglers'],
        specs: '350 × 120 × 15 cm · 400 kg load · tri-fin · viewing window',
        artwork: 'Central cutout compartment · transparent underwater viewing window · pontoon hull',
        image: 'https://assets.supsfactory.com/site/products/2026/utility-lure/utility-lure-01.avif',
        hue: 170,
      },
    ],
  },
  es: {
    kicker: 'Plataformas de producto',
    title: 'Plataformas SUP disponibles para personalización',
    sub: 'Cada serie es una plataforma de fabricación: elige un punto de partida y adaptamos la forma, los gráficos y las especificaciones a tu producto.',
    items: [
      {
        slug: 'sup-explorer-11',
        series: 'all-around',
        sku: 'SUP-EX11',
        name: 'SUP Explorer 11\'',
        tagline: 'El clásico polivalente',
        desc: 'Nuestra tabla polivalente más popular: estabilidad de cuerpo ancho para principiantes, agilidad para intermedios y portabilidad para cualquier aventura. El punto de partida por defecto para la mayoría de las marcas nuevas.',
        uses: ['Principiante', 'Polivalente', 'Familia'],
        for: ['Marcas emergentes', 'Flotas de alquiler'],
        specs: "11'0\" × 32\" × 6\" · PVC drop-stitch · 15 PSI · 19 lb (8.6 kg)",
        artwork: 'Núcleo drop-stitch de grado militar · rails reforzados · quillas 2+1 · paquete completo',
        image: 'https://assets.supsfactory.com/site/products/2026/all-around/all-around-03.avif',
        hue: 195,
      },
      {
        slug: 'sup-ocean-pulse',
        series: 'whitewater',
        sku: 'SUP-OP11',
        name: 'Serie Ocean Pulse',
        tagline: 'Edición de diseñador de olas topográficas',
        desc: 'Olas del océano transformadas en contornos topográficos azul Tiffany con gofrado mecánico de alta precisión y un kit de accesorios a juego.',
        uses: ['Estilo de vida', 'Aguas tranquilas', 'Diseñador'],
        for: ['Marcas lifestyle', 'Turismo boutique'],
        specs: "11'0\" × 32\" × 6\" · PVC drop-stitch · 15 PSI · 20 lb (9.1 kg)",
        artwork: 'Impresión UV digital + gofrado térmico mecánico · accesorios coordinados',
        image: 'https://assets.supsfactory.com/site/products/2026/whitewater/whitewater-01.avif',
        hue: 210,
      },
      {
        slug: 'sup-cheetah-surge',
        series: 'surf',
        sku: 'SUP-CS11',
        name: 'Edición Cheetah Surge',
        tagline: 'Edición premium de inspiración salvaje',
        desc: 'Poder salvaje bruto con elegancia artística: un motivo de guepardo en rosa pastel, azul verdoso y coral, construido con mosaicos EVA multicolor que no destiñen.',
        uses: ['Estilo de vida', 'Aguas tranquilas', 'Diseñador'],
        for: ['Marcas lifestyle', 'Marcas social-first'],
        specs: "11'0\" × 32\" × 6\" · PVC drop-stitch · 15 PSI · 20 lb (9.1 kg)",
        artwork: 'Mosaicos EVA multicolor + impresión UV · construcción antidelaminación',
        image: 'https://assets.supsfactory.com/site/products/2026/surf/surf-01.avif',
        hue: 28,
      },
      {
        slug: 'sup-medusa-glow',
        series: 'yoga',
        sku: 'SUP-MG11',
        name: 'Serie Medusa Glow',
        tagline: 'La edición medusa',
        desc: 'Un paisaje submarino de ensueño: medusas vibrantes, estrellas de mar y arrecifes de coral en refrescante verde menta, con arte EVA sin decoloración y excepcional estabilidad lateral para yoga.',
        uses: ['Yoga', 'Tropical', 'Estilo de vida'],
        for: ['Estudios de yoga', 'Marcas tropicales'],
        specs: "11'0\" × 32\" × 6\" · PVC drop-stitch · 15 PSI · 20 lb (9.1 kg)",
        artwork: 'Mosaicos EVA multicolor + impresión UV · asa anclada al casco de PVC',
        image: 'https://assets.supsfactory.com/site/products/2026/kids-teens/kids-teens-05.avif',
        hue: 260,
      },
      {
        slug: 'sup-dolphin-wave',
        series: 'touring',
        sku: 'SUP-DW11',
        name: 'Serie Dolphin Wave',
        tagline: 'Edición marina 360°',
        desc: 'Delfines saltando y capas de olas azul medieval con splicado EVA cortado por CNC e impresión serigráfica de arte continuo en los rails que envuelve la tabla 360°.',
        uses: ['Marino', 'Aguas tranquilas', 'Diseñador'],
        for: ['Marcas marinas', 'Resorts'],
        specs: "11'0\" × 32\" × 6\" · PVC drop-stitch · 15 PSI · 20 lb (9.1 kg)",
        artwork: 'Splicado de bloques de color EVA por CNC + rails serigrafiados · ajuste de color PANTONE TPG',
        image: 'https://assets.supsfactory.com/site/products/2026/touring/touring-02.avif',
        hue: 210,
      },
      {
        slug: 'sup-flowing-lotus',
        series: 'yoga',
        sku: 'SUP-FL11',
        name: 'Serie Flowing Lotus',
        tagline: 'Edición de bienestar artístico oriental',
        desc: 'Pinceladas orientales tradicionales con motivos de loto, carpas y libélulas, grabadas con láser en el piso antideslizante para que nunca se desgasten ni destiñan. Diseñada para remar con calma y practicar yoga.',
        uses: ['Yoga', 'Meditación', 'Aguas tranquilas'],
        for: ['Estudios de yoga', 'Marcas de bienestar'],
        specs: "11'0\" × 32\" × 6\" · PVC drop-stitch · 15 PSI · 20 lb (9.1 kg)",
        artwork: 'EVA grabada con láser de doble capa + impresión UV degradada · quillas dinámicas en bloques de color',
        image: 'https://assets.supsfactory.com/site/products/2026/yoga/yoga-01.avif',
        hue: 150,
      },
      {
        slug: 'sup-jungle-mandala',
        series: 'all-around',
        sku: 'SUP-JM11',
        name: 'Serie Jungle Mandala',
        tagline: 'Geometría sagrada tropical',
        desc: 'Vitalidad tropical con geometría sagrada: hibiscos, colibríes y tótems mandala en azul Tiffany y naranja coral, diseñados para mantenerse perfectamente simétricos a máxima presión.',
        uses: ['Tropical', 'Costero', 'Diseñador'],
        for: ['Marcas tropicales', 'Viajes'],
        specs: "11'0\" × 32\" × 6\" · PVC drop-stitch · 15 PSI · 20 lb (9.1 kg)",
        artwork: 'EVA grabada con láser de doble capa + impresión UV + rails serigrafiados · geometría antideformación',
        image: 'https://assets.supsfactory.com/site/products/2026/all-around/all-around-10.avif',
        hue: 28,
      },
      {
        slug: 'sup-leviathan-wake',
        series: 'race',
        sku: 'SUP-LW11',
        name: 'Serie Leviathan Wake',
        tagline: 'La edición ballena',
        desc: 'Un majestuoso tótem de ballena azul con patrones tribales geométricos y líneas de oleaje minimalistas en blanco y negro, para remeros que conectan con el océano.',
        uses: ['Océano', 'Polivalente', 'Diseñador'],
        for: ['Marcas oceánicas', 'Marcas outdoor'],
        specs: "11'0\" × 32\" × 6\" · PVC drop-stitch · 15 PSI · 20 lb (9.1 kg)",
        artwork: 'Impresión UV digital + gofrado mecánico · tintas PVC estirables en el logo inferior',
        image: 'https://assets.supsfactory.com/site/products/2026/race/race-01.avif',
        hue: 195,
      },
      {
        slug: 'sup-ocean-voyager',
        series: 'all-around',
        sku: 'SUP-OV11',
        name: 'Serie Ocean Voyager',
        tagline: 'La edición tortuga marina',
        desc: 'Un homenaje al vagabundo supremo del océano: arte geométrico de tortuga marina en azul profundo, turquesa y naranja coral, con un kit de accesorios coordinados de principio a fin.',
        uses: ['Travesía', 'Océano', 'Polivalente'],
        for: ['Marcas de travesía', 'Marcas outdoor'],
        specs: "11'0\" × 32\" × 6\" · PVC drop-stitch · 15 PSI · 20 lb (9.1 kg)",
        artwork: 'Mosaicos EVA multicolor + impresión UV · mochila, bomba y leash a juego',
        image: 'https://assets.supsfactory.com/site/products/2026/all-around/all-around-12.avif',
        hue: 170,
      },
      {
        slug: 'sup-tropical-breeze',
        series: 'all-around',
        sku: 'SUP-TB11',
        name: 'Serie Tropical Breeze',
        tagline: 'Edición escapada isleña',
        desc: 'Un lienzo completo de vacaciones en la isla: sol, cocoteros y escenas de playa que fluyen desde una proa con micro ilustraciones hacia bloques de color EVA abstractos en la cola.',
        uses: ['Vacaciones', 'Estilo de vida', 'Costero'],
        for: ['Marcas de viajes', 'Resorts'],
        specs: "11'0\" × 32\" × 6\" · PVC drop-stitch · 15 PSI · 20 lb (9.1 kg)",
        artwork: 'Impresión UV digital + patchwork EVA troquelado · paisaje ilustrado en la proa',
        image: 'https://assets.supsfactory.com/site/products/2026/all-around/all-around-17.avif',
        hue: 330,
      },
      {
        slug: 'sup-rheo-race',
        series: 'race',
        sku: 'SUP-RHEO01',
        name: 'Serie RHEO Race',
        tagline: 'Edición de competición híbrida de carbono',
        desc: 'Tabla de SUP hinchable de élite para competición, con construcción híbrida de carbono y rocker de deslizamiento agresivo — diseñada para carreras, entrenamientos de velocidad y cursos técnicos donde la rigidez decide el resultado.',
        uses: ['Competición', 'Velocidad', 'Entrenamiento'],
        for: ['Equipos de competición', 'Coaching'],
        specs: 'Matriz híbrida de carbono · rocker de deslizamiento · perfil aerodinámico de alta velocidad',
        artwork: 'Construcción hinchable híbrida de carbono · rocker de deslizamiento de alto rendimiento',
        image: 'https://assets.supsfactory.com/site/products/2026/race/race-11.avif',
        hue: 195,
      },
      {
        slug: 'sup-fishing',
        series: 'fishing',
        sku: 'SUP-FSH01',
        name: 'SUP de Pesca Hinchable',
        tagline: 'Edición de pesca con estabilidad de catamarán',
        desc: 'SUP hinchable dedicado a la pesca con cámara de aire doble (estilo catamarán) para una estabilidad secundaria excepcional, soportes para cañeros, regla de peces sobre la cubierta y casco utilitario reforzado.',
        uses: ['Pesca', 'Estabilidad', 'Utilidad'],
        for: ['Marcas de pesca', 'Guías'],
        specs: 'Cámara de aire doble · regla de peces de 10–80 cm · soportes para cañeros',
        artwork: 'Casco utilitario reforzado · anillos en D metálicos multipunto',
        image: 'https://assets.supsfactory.com/site/products/2026/fishing/fishing-01.avif',
        hue: 210,
      },
      {
        slug: 'sup-mini',
        series: 'kids',
        sku: 'SUP-MINI01',
        name: 'Serie Mini SUP',
        tagline: '3 en 1: infantil / surf / bodyboard',
        desc: 'Tabla híbrida ultratransportable que se convierte en SUP infantil, tabla de surf hinchable y bodyboard — con perfil corto, ancho y muy estable, y cubierta resistente a la perforación.',
        uses: ['Infantil', 'Surf', 'Viajes'],
        for: ['Marcas infantiles', 'Resorts'],
        specs: 'Geometría híbrida SUP / surf / bodyboard · casco corto y ancho · cubierta resistente a la perforación',
        artwork: 'Geometría híbrida multipropósito · material de cubierta de alta resistencia',
        image: 'https://assets.supsfactory.com/site/products/2026/mini/mini-01.avif',
        hue: 28,
      },
      {
        slug: 'sup-giant',
        series: 'multi',
        sku: 'SUP-GNT01',
        name: 'Giant SUP — Tabla de equipo multipersona',
        tagline: 'Plataforma de equipo para 6–8 remeros',
        desc: 'Tabla multipersona de gran formato para 6–8 remeros: casco de 16,4–17 pies, 59–60 pulgadas de ancho, 8 pulgadas de espesor e inflado de doble válvula, con 8–12 asas y sistema de quillas 4+1.',
        uses: ['Grupo', 'Equipo', 'Ocio'],
        for: ['Resorts', 'Flotas de alquiler'],
        specs: "16'4\"–17'0\" × 59\"–60\" × 8\" · 1200–1400 L · 11–15 PSI · quillas 4+1",
        artwork: 'Inflado de doble válvula · 8–12 asas de neopreno · sistema de quillas 4+1',
        image: 'https://assets.supsfactory.com/site/products/2026/giant/giant-03.avif',
        hue: 195,
      },
      {
        slug: 'sup-lure-skiff',
        series: 'fishing',
        sku: 'SUP-LSK01',
        name: 'Utility SUP — Lure Skiff',
        tagline: 'Pesca a señuelo ultrancha de 120 cm',
        desc: 'Tabla de pesca a señuelo ultrancha de 120 cm con compartimento central recortado y ventana de observación subacuática, carga útil de 400 kg y casco tipo pontón para lanzar y pescar sentado con total firmeza.',
        uses: ['Pesca', 'Utilidad', 'Estabilidad'],
        for: ['Marcas de pesca', 'Pescadores'],
        specs: '350 × 120 × 15 cm · carga de 400 kg · tri-quilla · ventana de observación',
        artwork: 'Compartimento central recortado · ventana transparente de observación subacuática · casco tipo pontón',
        image: 'https://assets.supsfactory.com/site/products/2026/utility-lure/utility-lure-01.avif',
        hue: 170,
      },
    ],
  },
}

/* ─────────────────────────── video showcases ─────────────────────────── */

export interface VideoStep {
  t: string
  d?: string
}

export interface VideoShowcaseContent {
  badge: string
  title: string
  sub: string
  points: VideoStep[]
}

export const videoShowcase: Localized<{
  launch: VideoShowcaseContent
  process: VideoShowcaseContent
}> = {
  en: {
    launch: {
      badge: 'Brand Launch',
      title: 'Dreaming of launching your own SUP brand?',
      sub: 'You don\'t need your own factory to launch a SUP brand. We are the manufacturing partner behind your line: specification, engineering, sampling, QC, packaging and export-ready production — all under one contract with one accountable team.',
      points: [
        { t: 'Full OEM/ODM Concept-to-Production', d: 'Custom board graphics, logo integration, deck pads, and custom packaging.' },
        { t: 'Low MOQ Flexible Launch', d: 'Small-batch support so you can test the market without tying up massive capital.' },
        { t: 'Complete Accessory Bundles', d: 'High-performance paddles, pumps, leashes, and travel bags ready to go.' },
        { t: 'Enterprise-Grade Quality & Certification', d: 'Strict QA/QC protocols, pressure testing, and global export compliance.' },
      ],
    },
    process: {
      badge: 'Inside the Factory',
      title: 'How an inflatable SUP is born',
      sub: 'Ever wondered how a soft board turns rock hard? Five steps inside our plant.',
      points: [
        { t: 'Precision Cutting & UV Printing' },
        { t: '100% Air-Tight Heat Welding' },
        { t: 'Non-Slip Deck Pad' },
        { t: 'Hardware & Bungee Cords' },
        { t: 'Deflate, Fold & Pack' },
      ],
    },
  },
  es: {
    launch: {
      badge: 'Lanzamiento de marca',
      title: '¿Sueñas con lanzar tu propia marca de SUP?',
      sub: 'No necesitas tu propia fábrica para lanzar una marca de SUP. Somos el socio de fabricación detrás de tu línea: especificación, ingeniería, muestras, control de calidad, packaging y producción lista para exportar — todo bajo un solo contrato y un solo equipo responsable.',
      points: [
        { t: 'OEM/ODM completo del concepto a la producción', d: 'Gráficos personalizados, integración de logotipo, pads de cubierta y embalaje a medida.' },
        { t: 'Lanzamiento flexible con MOQ bajo', d: 'Producción de pequeños lotes para testear el mercado sin inmovilizar capital.' },
        { t: 'Paquetes de accesorios completos', d: 'Palas, bombas, correas y bolsas de viaje de alto rendimiento listas para enviar.' },
        { t: 'Calidad y certificación de nivel empresarial', d: 'Protocolos estrictos de QA/QC, pruebas de presión y cumplimiento de exportación global.' },
      ],
    },
    process: {
      badge: 'Dentro de la fábrica',
      title: 'Cómo nace un SUP hinchable',
      sub: '¿Alguna vez te preguntaste cómo una tabla blanda se vuelve rígida? Cinco pasos en nuestra planta.',
      points: [
        { t: 'Corte de precisión e impresión UV' },
        { t: 'Soldadura térmica 100% hermética' },
        { t: 'Pad de cubierta antideslizante' },
        { t: 'Hardware y cuerdas elásticas' },
        { t: 'Desinflar, plegar y empacar' },
      ],
    },
  },
}

/* ─────────────────────────── how it works ─────────────────────────── */

export interface Step {
  title: string
  body: string
}

export interface WorksContent {
  kicker: string
  title: string
  sub: string
  steps: Step[]
  note: string
}

export const works: Localized<WorksContent> = {
  en: {
    kicker: 'Development Process',
    title: 'From Specification to Finished Product',
    sub: 'Requirement intake through finished goods — every step inside our own plant.',
    steps: [
      {
        title: 'Requirement Intake',
        body: 'We collect your specification, target market, compliance requirements and volume forecast. NDA signed before any file exchange.',
      },
      {
        title: 'Engineering Review',
        body: 'Board type, dimensions, layup, materials and hardware are assessed for manufacturability. You receive a written report with cost drivers identified.',
      },
      {
        title: 'Artwork Prepress',
        body: 'Your brand files are converted to production-ready print data. Colors are matched and proofed before printing.',
      },
      {
        title: 'Prototype',
        body: 'A physical prototype confirms shape, stiffness, weight and finish. Ships in 7–12 days.',
      },
      {
        title: 'Sample Approval',
        body: 'You sign off on the physical sample. Nothing enters production until the golden sample is approved and archived as the batch reference.',
      },
      {
        title: 'Batch Production',
        body: 'Manufactured in our own plant under the QC process above, with batch traceability to material lot level.',
      },
      {
        title: 'Export-Ready Delivery',
        body: 'Vacuum-packed, boxed, documented and handed over ready for export.',
      },
    ],
    note: 'The approved sample is the contract. Every board in the batch is measured against it.',
  },
  es: {
    kicker: 'Proceso de desarrollo',
    title: 'De la especificación al producto terminado',
    sub: 'Desde la recepción de requisitos hasta el producto terminado — cada paso dentro de nuestra propia planta.',
    steps: [
      {
        title: 'Recepción de requisitos',
        body: 'Recopilamos tu especificación, mercado objetivo, requisitos de cumplimiento y previsión de volumen. NDA firmado antes de cualquier intercambio de archivos.',
      },
      {
        title: 'Revisión de ingeniería',
        body: 'El tipo de tabla, dimensiones, layup, materiales y herrajes se evalúan en cuanto a fabricabilidad. Recibes un informe escrito con los factores de coste identificados.',
      },
      {
        title: 'Preimpresión de arte',
        body: 'Tus archivos de marca se convierten en datos de impresión listos para producción. Los colores se gestionan y contratan antes de imprimir.',
      },
      {
        title: 'Prototipo',
        body: 'Un prototipo físico confirma forma, rigidez, peso y acabado. Se envía en 7–12 días.',
      },
      {
        title: 'Aprobación de la muestra',
        body: 'Validas la muestra física. Nada entra en producción hasta que la muestra dorada esté aprobada y archivada como referencia del lote.',
      },
      {
        title: 'Producción en serie',
        body: 'Fabricado en nuestra propia planta bajo el proceso de control de calidad descrito, con trazabilidad por lote hasta el nivel de material.',
      },
      {
        title: 'Entrega lista para exportación',
        body: 'Envasado al vacío, encajado, documentado y entregado listo para la exportación.',
      },
    ],
    note: 'La muestra aprobada es el punto de referencia. Cada tabla del lote se mide contra ella.',
  },
}

/* ─────────────────────────── home: product platforms ─────────────────────────── */

export interface PlatformItem {
  title: string
  body: string
  uses: string[]
  cta: string
  href: string
}

export interface PlatformsContent {
  kicker: string
  title: string
  sub: string
  items: PlatformItem[]
}

export const platforms: Localized<PlatformsContent> = {
  en: {
    kicker: 'Product Platforms',
    title: 'Base Platforms',
    sub: 'Base platforms, not catalog products. Every dimension, layup and graphic is specified per project.',
    items: [
      {
        title: 'All-Around',
        body: 'Classic recreational platforms for retail lines, rental fleets and outdoor programs.',
        uses: ['Retail lines', 'Rental fleets', 'Outdoor programs'],
        cta: 'Request This Platform',
        href: '/contact',
      },
      {
        title: 'Touring',
        body: 'Longer waterlines built for distance, tracking and expedition use.',
        uses: ['Distance', 'Tracking', 'Expedition'],
        cta: 'Request This Platform',
        href: '/contact',
      },
      {
        title: 'Race',
        body: 'Performance shapes for clubs, events and competition teams.',
        uses: ['Clubs', 'Events', 'Competition teams'],
        cta: 'Request This Platform',
        href: '/contact',
      },
      {
        title: 'Multi-Purpose',
        body: 'Durable, high-cycle boards for schools, rental operations and institutional buyers.',
        uses: ['Schools', 'Rental operations', 'Institutional buyers'],
        cta: 'Request This Platform',
        href: '/contact',
      },
    ],
  },
  es: {
    kicker: 'Plataformas de producto',
    title: 'Plataformas base',
    sub: 'Plataformas base, no productos de catálogo. Cada dimensión, construcción y diseño se especifica por proyecto.',
    items: [
      {
        title: 'Polivalente',
        body: 'Plataformas recreativas clásicas para líneas de retail, flotas de alquiler y programas al aire libre.',
        uses: ['Líneas de retail', 'Flotas de alquiler', 'Programas outdoor'],
        cta: 'Solicita esta plataforma',
        href: '/contact',
      },
      {
        title: 'Travesía',
        body: 'Líneas de agua más largas para distancia, derrota y expediciones.',
        uses: ['Distancia', 'Derrota', 'Expediciones'],
        cta: 'Solicita esta plataforma',
        href: '/contact',
      },
      {
        title: 'Competición',
        body: 'Formas de rendimiento para clubes, eventos y equipos de competición.',
        uses: ['Clubes', 'Eventos', 'Equipos de competición'],
        cta: 'Solicita esta plataforma',
        href: '/contact',
      },
      {
        title: 'Multiusos',
        body: 'Tablas duraderas de alto ciclo para escuelas, operaciones de alquiler y compradores institucionales.',
        uses: ['Escuelas', 'Operaciones de alquiler', 'Compradores institucionales'],
        cta: 'Solicita esta plataforma',
        href: '/contact',
      },
    ],
  },
}

/* ─────────────────────────── gallery ─────────────────────────── */

export interface Project {
  tag: string
  title: string
  body: string
  hue: number
  image: string
}

export interface GalleryContent {
  kicker: string
  title: string
  sub: string
  projects: Project[]
}

export const gallery: Localized<GalleryContent> = {
  en: {
    kicker: 'Production Projects',
    title: 'Recent Production',
    sub: 'Manufacturing projects delivered from our plant — with the numbers buyers actually ask about.',
    projects: [
      {
        tag: 'Batch Traceability',
        title: 'Shipment Release & Traceability Handover',
        body: 'Every batch ships with its quality handover — inspection records, per-board serial numbers and the signed release transfer, filed under 10-year ERP traceability. The photo shows the actual release & traceability handover record at the plant.',
        hue: 195,
        image: '/出货放行与批次追溯记录交接.jpg',
      },
      {
        tag: 'Club Team',
        title: 'Club Team Boards — Race Platform',
        body: 'Race platform with specification adjustments and club graphics locked at the sample stage, tooling reused across two seasons so the expansion reorder matched the original fleet exactly.',
        hue: 28,
        image: 'https://assets.supsfactory.com/site/products/2026/surf/surf-01.avif',
      },
      {
        tag: 'Brand Line Extension',
        title: 'Brand Line Extension — Inflatable SUP',
        body: 'An established watersports brand added an inflatable SUP line: engineering review, custom mold, three sizes, and a 50 pcs first production run with artwork-match and air-tightness verification before scale-up — designs and tooling owned by the brand.',
        hue: 210,
        image: 'https://assets.supsfactory.com/site/products/2026/all-around/all-around-03.avif',
      },
    ],
  },
  es: {
    kicker: 'Proyectos de producción',
    title: 'Producción reciente',
    sub: 'Proyectos de fabricación entregados desde la planta — con las cifras que de verdad pregunta un comprador.',
    projects: [
      {
        tag: 'Trazabilidad de lotes',
        title: 'Liberación de embarque y traspaso de trazabilidad',
        body: 'Cada lote sale con su traspaso de calidad: registros de inspección, número de serie por tabla y el acta de liberación firmada, archivados con trazabilidad ERP de 10 años. La foto muestra el acta real de liberación y trazabilidad en planta.',
        hue: 195,
        image: '/出货放行与批次追溯记录交接.jpg',
      },
      {
        tag: 'Equipo de club',
        title: 'Tablas de equipo — plataforma de competición',
        body: 'Plataforma de competición con ajustes de especificación y gráficos del club fijados en la fase de muestra; el utillaje se reutilizó dos temporadas para que la ampliación coincidiera exactamente con la flota original.',
        hue: 28,
        image: 'https://assets.supsfactory.com/site/products/2026/surf/surf-01.avif',
      },
      {
        tag: 'Extensión de marca',
        title: 'Extensión de línea — SUP hinchable',
        body: 'Una marca de deportes acuáticos consolidada añadió una línea de SUP hinchable: revisión de ingeniería, molde a medida, tres tallas y una primera tirada de 50 unidades verificada en arte y estanqueidad antes del escalado — con diseños y utillaje en propiedad de la marca.',
        hue: 210,
        image: 'https://assets.supsfactory.com/site/products/2026/all-around/all-around-03.avif',
      },
    ],
  },
}

/* ─────────────────────────── buyer's guides (home) ─────────────────────────── */

export interface GuideLink {
  title: string
  body: string
  href: string
}

export interface GuidesContent {
  kicker: string
  title: string
  sub: string
  guides: GuideLink[]
}

export const guides: Localized<GuidesContent> = {
  en: {
    kicker: "Buyer's Guides",
    title: 'Manufacturing Guides',
    sub: 'The questions every SUP brand asks before ordering — answered in plain language, with our real terms.',
    guides: [
      {
        title: 'Private Label: The Complete Step-by-Step Guide',
        body: 'From choosing a factory to production — the full six-step journey for new brands.',
        href: '/news/private-label-sup-guide',
      },
      {
        title: 'SUP OEM MOQ and Pricing',
        body: 'MOQ tiers from 1–2 samples to 90–100+ unit volume runs, the six cost drivers, and five ways to cut cost without cutting quality.',
        href: '/news/sup-oem-moq-pricing',
      },
      {
        title: 'CE Certification for Inflatable SUP',
        body: 'What CE really covers, the five documents to demand, and how to verify a certificate names your model.',
        href: '/news/ce-certification-inflatable-sup',
      },
    ],
  },
  es: {
    kicker: 'Guías del comprador',
    title: 'Guías de fabricación',
    sub: 'Las preguntas que toda marca de SUP hace antes de pedir — respondidas con claridad y con nuestras condiciones reales.',
    guides: [
      {
        title: 'SUP de marca privada: la guía completa paso a paso',
        body: 'De elegir fábrica a producción — el recorrido completo en seis pasos para nuevas marcas.',
        href: '/news/private-label-sup-guide',
      },
      {
        title: 'MOQ y precios OEM de SUP',
        body: 'Niveles de MOQ desde 1–2 muestras hasta 90–100+ unidades de volumen, los seis factores de coste y cinco formas de reducir coste sin bajar calidad.',
        href: '/news/sup-oem-moq-pricing',
      },
      {
        title: 'Certificación CE para SUP hinchables',
        body: 'Qué cubre realmente el CE, los cinco documentos que debes exigir y cómo verificar que un certificado nombra tu modelo.',
        href: '/news/ce-certification-inflatable-sup',
      },
    ],
  },
}

/* ─────────────────────── manufacturing guides (knowledge) ─────────────────────── */

export const manufacturingGuides: Localized<GuidesContent> = {
  en: {
    kicker: 'Manufacturing Guides',
    title: 'From Factory to Finished Product',
    sub: 'The complete sourcing library — every stage of a custom SUP project with our real lead times, terms and documentation.',
    guides: [
      {
        title: 'How to Choose a SUP OEM Manufacturer',
        body: 'The audit questions that separate a real factory from a trader: certifications, QC, samples and ownership.',
        href: '/news/how-to-choose-sup-oem-manufacturer',
      },
      {
        title: 'SUP Product Development Timeline',
        body: 'Sample in 7–12 days, production in 25–35 days, tooling plus 15–20 — the full calendar, stage by stage.',
        href: '/news/custom-sup-development-timeline',
      },
      {
        title: 'Information to Prepare Before Ordering',
        body: 'The five details that let a factory quote accurately on the first pass — and avoid spec rework.',
        href: '/news/info-needed-before-sup-production',
      },
      {
        title: 'Private Label: The Complete Step-by-Step Guide',
        body: 'From choosing a factory to production — the full six-step journey for new brands.',
        href: '/news/private-label-sup-guide',
      },
      {
        title: 'SUP OEM MOQ and Pricing',
        body: 'MOQ tiers from 1–2 samples to 90–100+ unit volume runs, the six cost drivers, and five ways to cut cost without cutting quality.',
        href: '/news/sup-oem-moq-pricing',
      },
      {
        title: 'CE Certification for Inflatable SUP',
        body: 'What CE really covers, the five documents to demand, and how to verify a certificate names your model.',
        href: '/news/ce-certification-inflatable-sup',
      },
    ],
  },
  es: {
    kicker: 'Guías de fabricación',
    title: 'De la fábrica al producto terminado',
    sub: 'La biblioteca completa de abastecimiento — cada etapa de un proyecto SUP a medida con nuestros plazos, condiciones y documentación reales.',
    guides: [
      {
        title: 'Cómo elegir un fabricante OEM de SUP',
        body: 'Las preguntas de auditoría que separan una fábrica real de un intermediario: certificaciones, control de calidad, muestras y propiedad.',
        href: '/news/how-to-choose-sup-oem-manufacturer',
      },
      {
        title: 'Calendario de desarrollo de producto SUP',
        body: 'Muestra en 7–12 días, producción en 25–35 días, utillaje más 15–20 — el calendario completo, etapa por etapa.',
        href: '/news/custom-sup-development-timeline',
      },
      {
        title: 'Información para preparar antes de pedir',
        body: 'Los cinco detalles que permiten a una fábrica cotizar con precisión a la primera — y evitar rehacer la especificación.',
        href: '/news/info-needed-before-sup-production',
      },
      {
        title: 'SUP de marca privada: la guía completa paso a paso',
        body: 'De elegir fábrica a producción — el recorrido completo en seis pasos para nuevas marcas.',
        href: '/news/private-label-sup-guide',
      },
      {
        title: 'MOQ y precios OEM de SUP',
        body: 'Niveles de MOQ desde 1–2 muestras hasta 90–100+ unidades de volumen, los seis factores de coste y cinco formas de reducir coste sin bajar calidad.',
        href: '/news/sup-oem-moq-pricing',
      },
      {
        title: 'Certificación CE para SUP hinchables',
        body: 'Qué cubre realmente el CE, los cinco documentos que debes exigir y cómo verificar que un certificado nombra tu modelo.',
        href: '/news/ce-certification-inflatable-sup',
      },
    ],
  },
}

/* ─────────────────────────── FAQ ─────────────────────────── */

export interface FaqItem {
  q: string
  a: string
}

export interface FaqContent {
  kicker: string
  title: string
  sub: string
  items: FaqItem[]
}

export const faq: Localized<FaqContent> = {
  en: {
    kicker: 'FAQ',
    title: 'Manufacturing FAQ',
    sub: 'Questions buyers ask before placing an order — answered with our actual terms.',
    items: [
      {
        q: 'What does Supsfactory manufacture?',
        a: 'Supsfactory is a professional SUP manufacturing factory specializing in customized inflatable SUP boards and related water sports products for global brands and businesses — engineered, sampled and produced in our own 12,500 m² plant in Qingdao, China.',
      },
      {
        q: 'What is the difference between OEM and ODM?',
        a: `OEM builds your board to your specification — shape, artwork, materials and packaging — from an existing platform or a new custom mould you own. ODM adapts a proven platform we already engineer: you add your brand, colors and artwork without owning the design. Both routes run through the same plant, QC system and export team: OEM suits product owners with their own spec, ODM is the fastest route to a branded board, starting at ${FACTS.moq.standardRun} with samples in ${FACTS.sampleTime}.`,
      },
      {
        q: 'What is your minimum order quantity?',
        a: `Co-branding small bulk starts at 5–10 pcs; pilot batches from 20–50 pcs. Standard volume production starts at ${FACTS.moq.standardRun} per 150 m roll. Custom-mould shapes run at the volume tier, depending on complexity.`,
      },
      {
        q: 'How long does production take?',
        a: '25–35 days from confirmed PO and deposit. Custom tooling adds 15–20 days for mold development. Expedited production is available for seasonal rush orders.',
      },
      {
        q: 'How fast can I get a sample?',
        a: 'Prototype samples typically ship within 7–12 days of approved artwork and specification.',
      },
      {
        q: 'What certifications do you hold?',
        a: 'ISO 9001 for quality management, CE certification on all products, and valid BSCI social compliance certification with the audit report available on request. REACH and RoHS documentation is provided with every order.',
      },
      {
        q: 'Do you handle export documentation?',
        a: 'Yes. Export documentation and export-grade packing are handled in-house, and we supply brands in 50+ countries across the EU, US, AU and Asia.',
      },
      {
        q: 'Will my design be shown to other clients?',
        a: 'No. Artwork, tooling and specification files remain your property. We sign an NDA before any file exchange and we never reuse or resell client tooling or designs.',
      },
      {
        q: 'Do you sell your own SUP brand?',
        a: 'No. We manufacture exclusively under our clients’ brands. We do not sell to end consumers and we do not compete with our clients in any market.',
      },
      {
        q: 'Can you match a board I already sell?',
        a: 'Yes. Send a physical sample or full specification and our engineering team will return a manufacturability report with materials, layup, tolerances and cost drivers.',
      },
      {
        q: 'Can you manufacture SUP boards with our logo?',
        a: 'Yes. Custom branding — logos, colors, graphics and surface artwork — is incorporated into the product design and production according to the agreed specifications. You own all brand and artwork files.',
      },
      {
        q: 'Can you develop a completely new SUP product?',
        a: 'Yes. Custom product development starts from your concept, sketches, specifications or market requirements. We work through specification review, structural engineering, prototype sampling and approval before mass production.',
      },
      {
        q: 'What materials do you use for inflatable SUP boards?',
        a: `Inflatable SUPs are built with drop-stitch construction and a choice of PVC layers and densities to match weight, stiffness and price targets, with REACH/RoHS-compliant materials and quality certification (ISO 9001, CE, BSCI).`,
      },
      {
        q: 'Do you work with new or startup SUP brands?',
        a: `Yes. OEM/ODM projects are developed according to your product requirements, target market and volume — pilot runs start at 20–50 pcs and standard volume production at ${FACTS.moq.standardRun} per 150 m roll.`,
      },
      {
        q: 'What information should I provide for an OEM SUP inquiry?',
        a: 'The most useful information: product type, target market, board size or specifications, desired construction, branding requirements, estimated quantity, packaging requirements and target launch schedule. Our team returns an engineering assessment and quotation within one business day.',
      },
    ],
  },
  es: {
    kicker: 'Preguntas frecuentes',
    title: 'Preguntas sobre fabricación',
    sub: 'Estas son las preguntas que un comprador plantea antes de encargar — respondidas con nuestras condiciones reales.',
    items: [
      {
        q: '¿Qué fabrica Supsfactory?',
        a: 'Supsfactory es una fábrica profesional de fabricación de SUP especializada en tablas hinchables personalizadas y productos acuáticos relacionados para marcas y empresas globales — diseñadas, muestreadas y producidas en nuestra propia planta de 12,500 m² en Qingdao, China.',
      },
      {
        q: '¿Cuál es la diferencia entre OEM y ODM?',
        a: `OEM fabrica tu tabla según tu especificación — forma, arte, materiales y empaque — sobre una plataforma existente o un molde nuevo a medida de tu propiedad. ODM adapta una plataforma probada que ya ingeniamos: tú añades tu marca, colores y arte sin ser dueño del diseño. Ambas rutas pasan por la misma planta, el mismo sistema de QC y el mismo equipo de exportación: OEM es para quien tiene especificación propia; ODM es la vía más rápida hacia una tabla con tu marca, desde ${FACTS.moq.standardRun} y con muestras en ${FACTS.sampleTime}.`,
      },
      {
        q: '¿Cuál es la cantidad mínima de pedido?',
        a: `El pequeño lote de co-branding parte de 5–10 uds.; los lotes piloto, de 20–50 uds. La producción de volumen estándar parte de ${FACTS.moq.standardRun} por rollo de 150 m. Los diseños con molde a medida se producen en el tramo de volumen, según la complejidad.`,
      },
      {
        q: '¿Cuánto tarda la producción?',
        a: '25–35 días desde el PO confirmado y el depósito. El utillaje añade 15–20 días de desarrollo de molde. Se dispone de producción acelerada para los picos de temporada.',
      },
      {
        q: '¿Qué rapidez tengo para recibir una muestra?',
        a: 'Las muestras de prototipo salen en 7–12 días tras la aprobación del arte y la especificación.',
      },
      {
        q: '¿Qué certificaciones tenéis?',
        a: 'ISO 9001 para la gestión de calidad, certificación CE en todos los productos y certificación BSCI válida con informe de auditoría disponible. La documentación REACH y RoHS se entrega con cada pedido.',
      },
      {
        q: '¿Gestionáis la documentación de exportación?',
        a: 'Sí. La documentación de exportación y el embalaje de exportación se gestionan en casa, y suministramos a marcas en más de 50 países de la UE, EE. UU., Australia y Asia.',
      },
      {
        q: '¿Mostraréis mi diseño a otros clientes?',
        a: 'No. Los archivos de arte, utillaje y especificaciones siguen siendo de tu propiedad. Firmamos un NDA antes de cualquier intercambio y nunca reutilizamos ni vendemos moldes o diseños de clientes.',
      },
      {
        q: '¿Vendéis vuestra propia marca de SUP?',
        a: 'No. Fabricamos exclusivamente bajo las marcas de nuestros clientes. No vendemos a consumidores finales y no competimos con nuestros clientes en ningún mercado.',
      },
      {
        q: '¿Podéis replicar una tabla que ya vendo?',
        a: 'Sí. Envíanos una muestra física o una especificación completa y nuestro equipo de ingeniería te devolverá un informe de fabricabilidad con materiales, capas de construcción, tolerancias y factores de coste.',
      },
      {
        q: '¿Podéis fabricar tablas SUP con nuestro logotipo?',
        a: 'Sí. La personalización de marca — logotipos, colores, gráficos y arte de superficie — se incorpora al diseño y a la producción según las especificaciones acordadas. Todos los archivos de marca y arte son de tu propiedad.',
      },
      {
        q: '¿Podéis desarrollar un producto SUP completamente nuevo?',
        a: 'Sí. El desarrollo de productos personalizados parte de tu concepto, bocetos, especificaciones o requisitos de mercado. Trabajamos en revisión de especificaciones, ingeniería estructural, muestras de prototipo y aprobación antes de la producción en masa.',
      },
      {
        q: '¿Qué materiales usáis para las tablas SUP hinchables?',
        a: 'Los SUP hinchables se fabrican con construcción drop-stitch y una selección de capas y densidades de PVC para ajustar peso, rigidez y precio, con materiales conformes a REACH/RoHS y certificación de calidad (ISO 9001, CE, BSCI).',
      },
      {
        q: '¿Trabajáis con marcas de SUP nuevas o emergentes?',
        a: `Sí. Los proyectos OEM/ODM se desarrollan según tus requisitos de producto, mercado objetivo y volumen — los pilotos parten de 20–50 uds. y la producción de volumen estándar, de ${FACTS.moq.standardRun} por rollo de 150 m.`,
      },
      {
        q: '¿Qué información debo dar en una consulta OEM de SUP?',
        a: 'La información más útil: tipo de producto, mercado objetivo, tamaño o especificaciones de la tabla, construcción deseada, requisitos de marca, cantidad estimada, requisitos de embalaje y fecha de lanzamiento prevista. Nuestro equipo responde con una evaluación de ingeniería y un presupuesto en un día laborable.',
      },
    ],
  },
}

/* ─────────────────────────── CTA band ─────────────────────────── */

export interface CtaContent {
  title: string
  body: string
  button: string
  note: string
}

export const cta: Localized<CtaContent> = {
  en: {
    title: 'Have a SUP Product Idea?',
    body: "Whether you already have a complete product specification or are still developing your concept, our team can help you evaluate the next step. Tell us what you want to build — we'll review your requirements and discuss the most practical path from concept to production.",
    button: 'Start Your SUP Project',
    note: 'Reply within 1 business day · NDA on request before file exchange · info@supsfactory.com · +86-13305324192',
  },
  es: {
    title: '¿Tienes una idea de producto SUP?',
    body: 'Ya sea que tengas una especificación de producto completa o estés todavía desarrollando tu concepto, nuestro equipo puede ayudarte a evaluar el siguiente paso. Cuéntanos qué quieres construir — revisaremos tus requisitos y plantearemos la vía más práctica del concepto a la producción.',
    button: 'Inicia tu proyecto de SUP',
    note: 'Respuesta en 1 día laborable · NDA disponible antes del intercambio de archivos · info@supsfactory.com · +86-13305324192',
  },
}

/* ─────────────────────────── home: value proposition (More Than a SUP Factory) ─────────────────────────── */

export interface ValuePropCard {
  title: string
  body: string
}

export interface ValuePropContent {
  kicker: string
  title: string
  sub: string
  cards: ValuePropCard[]
}

export const valueProp: Localized<ValuePropContent> = {
  en: {
    kicker: 'Our Role',
    title: 'More Than a SUP Factory',
    sub: 'Many manufacturers can produce a standard paddle board. Our role is different. SUPS Factory is a custom SUP product development and manufacturing partner, helping businesses move from an initial idea to a production-ready product.',
    cards: [
      {
        title: 'Product Development',
        body: 'Turn your concept, sketches, specifications or market requirements into a manufacturable SUP product.',
      },
      {
        title: 'Custom Manufacturing',
        body: 'Customize product construction, dimensions, graphics, colors, accessories and packaging according to your requirements.',
      },
      {
        title: 'Prototype Development',
        body: 'Evaluate the product before committing to mass production through sample development and testing.',
      },
      {
        title: 'Production Support',
        body: 'Once the design is approved, we manage the transition from prototype to repeatable mass production.',
      },
      {
        title: 'Quality Control',
        body: 'Quality checks throughout production help ensure that finished products meet the agreed specifications.',
      },
      {
        title: 'Global Supply',
        body: 'Support with packaging and export documentation helps simplify the sourcing process.',
      },
    ],
  },
  es: {
    kicker: 'Nuestro papel',
    title: 'Más que una fábrica de SUP',
    sub: 'Muchos fabricantes pueden producir una tabla de pádel estándar. Nuestro papel es distinto. SUPS Factory es un socio de desarrollo de productos y fabricación de SUP personalizados que ayuda a las empresas a pasar de la idea inicial a un producto listo para producir.',
    cards: [
      {
        title: 'Desarrollo de producto',
        body: 'Convierte tu concepto, bocetos, especificaciones o requisitos de mercado en un producto SUP fabricable.',
      },
      {
        title: 'Fabricación personalizada',
        body: 'Personaliza construcción, dimensiones, gráficos, colores, accesorios y embalaje según tus requisitos.',
      },
      {
        title: 'Desarrollo de prototipos',
        body: 'Evalúa el producto antes de comprometerte con la producción en masa mediante muestras y pruebas.',
      },
      {
        title: 'Soporte de producción',
        body: 'Una vez aprobado el diseño, gestionamos la transición del prototipo a la producción en serie repetible.',
      },
      {
        title: 'Control de calidad',
        body: 'Los controles de calidad a lo largo de la producción aseguran que el producto final cumpla las especificaciones acordadas.',
      },
      {
        title: 'Suministro global',
        body: 'Apoyo con embalaje y documentación de exportación para simplificar el proceso de abastecimiento.',
      },
    ],
  },
}

/* ─────────────────────────── home: role boundary (Where We Stop, You Start) ─────────────────────────── */

export interface BoundaryRow {
  ours: string
  theirs: string
}

export interface BoundaryContent {
  kicker: string
  title: string
  sub: string
  oursTitle: string
  theirsTitle: string
  rows: BoundaryRow[]
  footer: string
}

export const boundary: Localized<BoundaryContent> = {
  en: {
    kicker: 'Who We Are',
    title: 'Built by a SUP Factory, Not a Trading Platform',
    sub: 'We are a manufacturing partner, not a marketplace. Our role is to help customers turn ideas, designs and product requirements into manufacturable SUP products. You own your brand. You control your market. We support production execution.',
    oursTitle: 'We handle',
    theirsTitle: 'You keep',
    rows: [
      { ours: 'Specification review and manufacturability assessment', theirs: 'Brand name, identity and positioning' },
      { ours: 'Structural engineering, materials selection, mold development', theirs: 'Pricing, channels and sales' },
      { ours: 'Deck artwork prepress and print production from your brand files', theirs: 'Ownership of all brand and artwork files' },
      { ours: 'Prototyping, sampling and sample approval documentation', theirs: 'Final approval on every sample' },
      { ours: 'Batch production, in-process QC and final inspection', theirs: 'Your market, your customers, your data' },
      { ours: 'Certification documentation and export-grade packing', theirs: 'End-customer relationships and after-sales' },
    ],
    footer:
      'Your artwork, tooling and specification files remain your property and are never reused, resold or shown to another client.',
  },
  es: {
    kicker: 'Quiénes somos',
    title: 'Construido por una fábrica de SUP, no por una plataforma comercial',
    sub: 'Somos un socio de fabricación, no un marketplace. Nuestro papel es ayudar a los clientes a convertir ideas, diseños y requisitos de producto en productos SUP fabricables. Tú eres dueño de tu marca. Tú controlas tu mercado. Nosotros ejecutamos la producción.',
    oursTitle: 'Nosotros nos encargamos',
    theirsTitle: 'Tú conservas',
    rows: [
      { ours: 'Revisión de especificaciones y evaluación de fabricabilidad', theirs: 'Nombre, identidad y posicionamiento de marca' },
      { ours: 'Ingeniería estructural, selección de materiales y desarrollo de moldes', theirs: 'Precios, canales y ventas' },
      { ours: 'Preimpresión de arte de cubierta e impresión desde tus archivos de marca', theirs: 'Propiedad de todos los archivos de marca y arte' },
      { ours: 'Prototipado, muestreo y documentación de aprobación de muestras', theirs: 'Aprobación final de cada muestra' },
      { ours: 'Producción por lotes, QC en proceso e inspección final', theirs: 'Tu mercado, tus clientes, tus datos' },
      { ours: 'Documentación de certificación y embalaje de exportación', theirs: 'Relaciones con el cliente final y posventa' },
    ],
    footer:
      'Tus archivos de arte, utillaje y especificación siguen siendo de tu propiedad y nunca se reutilizan, revenden ni muestran a otro cliente.',
  },
}

/* ─────────────────────────── about page ─────────────────────────── */

export interface AboutContent {
  kicker: string
  title: string
  sub: string
  story: string[]
  values: { title: string; body: string }[]
  capabilities: string[]
  stats: { value: string; label: string }[]
  strength: { title: string; body: string }[]
  partnering: { title: string; body: string[] }
}

export const about: Localized<AboutContent> = {
  en: {
    kicker: 'About Us',
    title: 'About SUPsfactory',
    sub: 'Your Custom SUP Manufacturing Partner',
    story: [
      'We are an inflatable SUP OEM/ODM factory that has spent years building boards for brands, distributors and sourcing teams around the world. Along the way, we kept meeting the same kind of customer — brands and buyers with a clear product vision but no in-house plant to build it.',
      'So we built SUPsfactory around them. Tiered minimums from 5–10-unit co-branding runs, complete engineering and design support, and a manufacturing team that treats your first order as seriously as your hundredth. You bring the brand; we run the factory.',
    ],
    values: [
      {
        title: 'Quality First',
        body: 'Every board passes multi-point QC — materials, welding, printing, assembly and packaging are checked at every stage of production.',
      },
      {
        title: 'Manufacturer, Not Middleman',
        body: 'Design, mould engineering, prototype, production and testing all happen under one roof — no trading-desk gap between you and the plant.',
      },
      {
        title: 'Flexible by Design',
        body: 'Tiered MOQs, modular options and honest lead times let brands grow from trial orders to volume runs.',
      },
    ],
    capabilities: ['OEM / ODM / private label', 'Custom moulds', 'Sample service', 'Design & artwork', 'Multi-point QC', 'Export documentation'],
    stats: [
      { value: '90–100 pcs', label: 'Standard volume MOQ (per 150 m roll)' },
      { value: '7–12 days', label: 'Sample lead time' },
      { value: '25–35 days', label: 'Production lead time' },
      { value: '20–50 pcs', label: 'Pilot order MOQ' },
    ],
    strength: [
      {
        title: 'Product Development',
        body: 'From concept sketches to production drawings — our engineers refine shape, rocker, thickness and drop-stitch construction to hit your target performance and price.',
      },
      {
        title: 'OEM Manufacturing',
        body: 'Build your exact specification: materials, colors, logo placement, accessories and packaging, in standard volume batches from 90–100+ pcs per 150 m roll.',
      },
      {
        title: 'ODM Solutions',
        body: 'Start from our proven in-house platforms — all-around, touring, race, yoga and more — and customize branding, graphics and trim for a fast, low-risk launch.',
      },
      {
        title: 'Engineering Support',
        body: 'Mould engineering, prototyping and sample iteration under one roof, with visual proofs and artwork approvals at every milestone before mass production.',
      },
      {
        title: 'Quality Management',
        body: 'Multi-point QC across materials, welding, printing, assembly and packaging, plus on-sample and pre-shipment inspections you can book as a third party.',
      },
      {
        title: 'Global Delivery',
        body: 'Export documentation, export-grade packing and in-house documentation support for brands in 50+ markets.',
      },
    ],
    partnering: {
      title: 'Partnering With Global Businesses',
      body: [
        'SUPsfactory works with SUP brands, distributors, resorts, schools and outdoor companies that need a reliable inflatable paddle board factory — from a first trial order to container-scale programs.',
        'Tell us your market and target price, and we respond with a spec sheet, MOQ and lead times for your specific business model.',
      ],
    },
  },
  es: {
    kicker: 'Sobre nosotros',
    title: 'Sobre SUPsfactory',
    sub: 'Tu socio de fabricación de SUP a medida',
    story: [
      'Somos una fábrica OEM/ODM de SUP hinchables que lleva años fabricando tablas para marcas, distribuidores y equipos de compra de todo el mundo. En el camino, nos encontrábamos una y otra vez con el mismo tipo de cliente: marcas y compradores con un plan de producto claro pero sin planta productiva propia.',
      'Por eso construimos SUPsfactory a su alrededor. Pedidos mínimos por tramos desde 5–10 unidades de co-branding, soporte de ingeniería y diseño completo, y un equipo de fabricación que trata tu primer pedido con la misma seriedad que el centésimo. Tú traes la marca; nosotros dirigimos la fábrica.',
    ],
    values: [
      {
        title: 'Calidad primero',
        body: 'Cada tabla supera un control de calidad multipunto: material, soldadura, impresión, montaje y embalaje se revisan en cada etapa de la producción.',
      },
      {
        title: 'Fabricante, no intermediario',
        body: 'Ingeniería, moldes, prototipos, producción y ensayos ocurren bajo el mismo techo: sin mesas de negociación entre tú y la planta.',
      },
      {
        title: 'Flexibles por diseño',
        body: 'MOQ por tramos, opciones modulares y plazos reales permiten crecer del pedido de prueba a la serie por volumen.',
      },
    ],
    capabilities: ['OEM / ODM y marca privada', 'Moldes a medida', 'Servicio de muestras', 'Diseño e ingeniería', 'QC multipunto', 'Documentación de exportación'],
    stats: [
      { value: '90–100 uds.', label: 'MOQ de volumen estándar (por rollo de 150 m)' },
      { value: '7–12 días', label: 'Plazo de muestras' },
      { value: '25–35 días', label: 'Plazo de producción' },
      { value: '20–50 uds.', label: 'MOQ de pedido piloto' },
    ],
    strength: [
      {
        title: 'Desarrollo de producto',
        body: 'Del boceto al plano de producción — nuestros ingenieros afinan forma, rocker, grosor y construcción drop-stitch para alcanzar tu rendimiento y precio objetivo.',
      },
      {
        title: 'Fabricación OEM',
        body: 'Construimos tu especificación exacta: materiales, colores, colocación del logotipo, accesorios y embalaje, en lotes de volumen estándar a partir de 90–100+ uds. por rollo de 150 m.',
      },
      {
        title: 'Soluciones ODM',
        body: 'Parte de nuestras plataformas probadas — all-around, touring, race, yoga y más — y personaliza marca, gráficos y acabados para un lanzamiento rápido y de bajo riesgo.',
      },
      {
        title: 'Soporte de ingeniería',
        body: 'Ingeniería de moldes, prototipos e iteración de muestras bajo el mismo techo, con pruebas visuales y aprobaciones de arte en cada hito antes de la producción en serie.',
      },
      {
        title: 'Gestión de calidad',
        body: 'QC multipunto en materiales, soldadura, impresión, montaje y embalaje, más inspecciones sobre muestra y previas al envío que puedes contratar como tercero.',
      },
      {
        title: 'Entrega global',
        body: 'Documentación de exportación, embalaje de exportación y soporte documental interno para marcas en más de 50 mercados.',
      },
    ],
    partnering: {
      title: 'Colaboramos con empresas de todo el mundo',
      body: [
        'SUPsfactory trabaja con marcas de SUP, distribuidores, resorts, escuelas y empresas de actividades al aire libre que necesitan una fábrica de tablas hinchables fiable — desde el primer pedido de prueba hasta programas de producción por volumen.',
        'Cuéntanos tu mercado y tu precio objetivo, y te responderemos con una ficha de especificaciones, MOQ y plazos para tu modelo de negocio.',
      ],
    },
  },
}

/* ─────────────────────────── customizer page ─────────────────────────── */

export interface CustomizerContent {
  kicker: string
  title: string
  sub: string
  status: string
  statusBody: string
  steps: { title: string; body: string }[]
  mockupLabel: string
  stepLabel: string
  boardLabel: string
  cta: string
}

export const customizer: Localized<CustomizerContent> = {
  en: {
    kicker: 'Design Your SUP',
    title: 'Visualize Your SUP Concept Before Production',
    sub: 'Preview how your brand will look on a real board — pick a color, watch the mockup update live, then send us your logo for a full design.',
    status: 'Interactive Preview',
    statusBody: 'Try the palette now, then send us your idea — our team will create a free mockup of your full design.',
    steps: [
      { title: 'Choose board model', body: 'From all-around platforms to touring and yoga shapes — each with realistic proportions.' },
      { title: 'Select colors', body: 'Pick your brand palette and watch the board change instantly.' },
      { title: 'Upload logo', body: 'Place your logo and artwork on the deck — adjust size and position.' },
      { title: 'Generate mockup', body: 'Export a preview of your custom SUP to share with your team.' },
    ],
    mockupLabel: 'Live mockup preview',
    stepLabel: 'Step',
    boardLabel: 'YOUR BRAND',
    cta: 'Create Your Design',
  },
  es: {
    kicker: 'Diseña tu SUP',
    title: 'Visualiza tu concepto SUP antes de la producción',
    sub: 'Previsualiza cómo se verá tu marca en una tabla real: elige un color, observa cómo se actualiza el mockup en vivo y envíanos tu logo para un diseño completo.',
    status: 'Vista previa interactiva',
    statusBody: 'Prueba la paleta ahora y luego envíanos tu idea: nuestro equipo creará un mockup gratuito de tu diseño completo.',
    steps: [
      { title: 'Elige el modelo de tabla', body: 'De plataformas polivalentes a formas de travesía y yoga, cada una con proporciones realistas.' },
      { title: 'Selecciona colores', body: 'Elige tu paleta de marca y observa cómo la tabla cambia al instante.' },
      { title: 'Sube tu logo', body: 'Coloca tu logo y tu arte en la cubierta: ajusta el tamaño y la posición.' },
      { title: 'Genera el mockup', body: 'Exporta una vista previa de tu SUP personalizado para compartirla con tu equipo.' },
    ],
    mockupLabel: 'Vista previa del mockup en vivo',
    stepLabel: 'Paso',
    boardLabel: 'TU MARCA',
    cta: 'Crea tu diseño',
  },
}

/* ─────────────────────────── products page extras ─────────────────────────── */

export interface ProductsPageContent {
  kicker: string
  title: string
  sub: string
  customTitle: string
  customBody: string
  customPoints: string[]
}

export const productsPage: Localized<ProductsPageContent> = {
  en: {
    kicker: 'Product Platforms',
    title: 'SUP Platforms Available For Customization',
    sub: 'Each model below is a manufacturing platform. Choose one as your starting point and we’ll adapt the shape, graphics, colors and specs to your product.',
    customTitle: 'Every Product Can Be Customized',
    customBody: 'Nothing ships off-the-shelf. Each board is built for you with your choices at every layer.',
    customPoints: ['Shape & size', 'Colors & full-board graphics', 'Logo & EVA pad design', 'Accessories & packaging'],
  },
  es: {
    kicker: 'Plataformas de producto',
    title: 'Plataformas SUP disponibles para personalización',
    sub: 'Cada modelo de abajo es una plataforma de fabricación. Elige uno como punto de partida y adaptaremos la forma, los gráficos, los colores y las especificaciones a tu producto.',
    customTitle: 'Cada producto se puede personalizar',
    customBody: 'Nada sale de fábrica en serie. Cada tabla se construye para ti con tus elecciones en cada capa.',
    customPoints: ['Forma y tamaño', 'Colores y gráficos a toda cubierta', 'Diseño de logo y piso EVA', 'Accesorios y embalaje'],
  },
}

/* ─────────────────────────── catalog download (email capture) ─────────────────────────── */

export interface CatalogContent {
  kicker: string
  title: string
  body: string
  emailLabel: string
  emailPlaceholder: string
  submit: string
  secure: string
  successTitle: string
  successBody: string
}

export const catalogDownload: Localized<CatalogContent> = {
  en: {
    kicker: 'Product Catalog',
    title: 'Get the full catalog and MOQ sheet',
    body: 'All ten platforms with specs, artwork options, MOQ tiers, sample timing and packaging — sent to your inbox by our sales team within one business day.',
    emailLabel: 'Work email',
    emailPlaceholder: 'you@yourcompany.com',
    submit: 'Request the Catalog',
    secure: 'No spam. Only the catalog and answers to your project.',
    successTitle: 'Request received',
    successBody: 'Our sales team will send the full product catalog and MOQ sheet to {email} within one business day.',
  },
  es: {
    kicker: 'Catálogo de productos',
    title: 'Recibe el catálogo completo y la ficha de MOQ',
    body: 'Las diez plataformas con especificaciones, opciones de arte, MOQ escalonados, tiempos de muestreo y embalaje — enviados a tu correo por nuestro equipo comercial en un día laborable.',
    emailLabel: 'Correo de trabajo',
    emailPlaceholder: 'tu@tuempresa.com',
    submit: 'Solicitar el catálogo',
    secure: 'Sin spam. Solo el catálogo y respuestas sobre tu proyecto.',
    successTitle: 'Solicitud recibida',
    successBody: 'Nuestro equipo comercial enviará el catálogo completo y la ficha de MOQ a {email} en un día laborable.',
  },
}

/* ─────────────────────────── gallery page extras ─────────────────────────── */

export interface GalleryPageContent {
  kicker: string
  title: string
  sub: string
  note: string
}

export const galleryPage: Localized<GalleryPageContent> = {
  en: {
    kicker: 'Customized SUP Projects',
    title: 'Customized SUP Projects',
    sub: 'A look at how SUP products come to life — from client requirements to finished boards.',
    note: 'Want your project featured here? Start a conversation and let’s design it together.',
  },
  es: {
    kicker: 'Proyectos SUP personalizados',
    title: 'Proyectos SUP personalizados',
    sub: 'Una mirada a cómo los productos SUP cobran vida: de los requisitos del cliente a las tablas terminadas.',
    note: '¿Quieres que tu proyecto aparezca aquí? Inicia una conversación y diseñémoslo juntos.',
  },
}

/* ─────────────────────────── who-we-serve page extras ─────────────────────────── */

export interface ServePageContent {
  kicker: string
  title: string
  sub: string
}

export const servePage: Localized<ServePageContent> = {
  en: {
    kicker: 'Customer Needs',
    title: 'Custom SUP Solutions For Your Business',
    sub: 'Whether you need branded boards for your organization or customized SUP products for your business, we help turn requirements into finished products.',
  },
  es: {
    kicker: 'Necesidades del cliente',
    title: 'Soluciones SUP personalizadas para tu negocio',
    sub: 'Ya sea que necesites tablas con marca para tu organización o productos SUP personalizados para tu negocio, te ayudamos a convertir los requisitos en productos terminados.',
  },
}

/* ─────────────────────────── how-it-works page extras ─────────────────────────── */

export interface WorksPageContent {
  kicker: string
  title: string
  sub: string
  consultTitle: string
  consultBody: string
}

export const worksPage: Localized<WorksPageContent> = {
  en: {
    kicker: 'Development Process',
    title: 'From Specification to Finished Product',
    sub: 'Requirement intake, engineering review, sampling, production and export — every step inside our own plant.',
    consultTitle: 'Start With a Specification Review',
    consultBody: 'Send us your spec, reference board or drawings. We return a manufacturability assessment and a quotation — no obligation.',
  },
  es: {
    kicker: 'Proceso de desarrollo',
    title: 'De la especificación al producto terminado',
    sub: 'Recepción de requisitos, revisión de ingeniería, muestras, producción en serie y exportación — cada paso dentro de nuestra propia planta.',
    consultTitle: 'Empieza con una revisión de especificación',
    consultBody: 'Envíanos tu especificación, una tabla de referencia o planos. Te devolvemos una evaluación de fabricabilidad y un presupuesto, sin compromiso.',
  },
}

/* ─────────────────────────── signature series (home) ─────────────────────────── */

export interface SeriesItem {
  title: string
  sku: string
  body: string
  image: string
  href: string
}

export interface SeriesContent {
  kicker: string
  title: string
  sub: string
  items: SeriesItem[]
}

export const series: Localized<SeriesContent> = {
  en: {
    kicker: 'Signature Series',
    title: 'Themed Edition Boards',
    sub: 'Ocean-inspired themed editions ready for your private label — drop-in designs with UV digital printing and mechanical embossing.',
    items: [
      {
        title: 'Leviathan Wake Series (The Whale Edition)',
        sku: 'SUP-LW11',
        body: 'A majestic blue whale totem with geometric and tribal patterns, paired with minimalist black-white swell lines. All-around 11 ft hull for lakes, rivers and coastal waters.',
        image: 'https://assets.supsfactory.com/site/products/2026/editions/leviathan-whale-edition.avif',
        href: '/products/sup-leviathan-wake',
      },
      {
        title: 'Medusa Glow Series (The Jellyfish Edition)',
        sku: 'SUP-MG11',
        body: 'Vibrant jellyfish, sea stars and coral reefs with zero-fade EVA block piecing in refreshing mint green. All-around 11 ft hull for tropical and coastal adventures.',
        image: 'https://assets.supsfactory.com/site/products/2026/editions/medusa-jellyfish-edition.avif',
        href: '/products/sup-medusa-glow',
      },
    ],
  },
  es: {
    kicker: 'Serie insignia',
    title: 'Tablas de ediciones temáticas',
    sub: 'Ediciones temáticas inspiradas en el océano listas para tu marca propia: diseños llave en mano con impresión digital UV y termograbado mecánico.',
    items: [
      {
        title: 'Serie Leviathan Wake (La Edición de la Ballena)',
        sku: 'SUP-LW11',
        body: 'Un majestuoso tótem de ballena azul con patrones geométricos y tribales, junto a líneas minimalistas de oleaje en blanco y negro. Casco polivalente de 11 ft para lagos, ríos y aguas costeras.',
        image: 'https://assets.supsfactory.com/site/products/2026/editions/leviathan-whale-edition.avif',
        href: '/products/sup-leviathan-wake',
      },
      {
        title: 'Serie Medusa Glow (La Edición de las Medusas)',
        sku: 'SUP-MG11',
        body: 'Medusas vibrantes, estrellas de mar y arrecifes de coral con bloques de EVA que no se decoloran, en un refrescante verde menta. Casco polivalente de 11 ft para aventuras tropicales y costeras.',
        image: 'https://assets.supsfactory.com/site/products/2026/editions/medusa-jellyfish-edition.avif',
        href: '/products/sup-medusa-glow',
      },
    ],
  },
}
