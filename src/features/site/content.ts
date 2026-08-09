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
  chips: string[]
  mockupLabel: string
  mockupBrand: string
  mockupHint: string
  heroNote: string
  float1: { value: string; label: string }
  float2: { value: string; label: string }
}

export const hero: Localized<HeroContent> = {
  en: {
    kicker: 'B2B Manufacturing — OEM / ODM / Private Label',
    titlePre: 'Custom SUP Manufacturer',
    titleAccent: 'for OEM & ODM Brands',
    titlePost: 'From Sample Development to Scalable Production',
    sub: 'We help watersports brands, retailers, clubs and corporate buyers develop custom inflatable SUPs, hard paddle boards and accessories — from concept, artwork and prototyping to QC-controlled mass production.',
    ctaPrimary: 'Start a Custom SUP Project',
    ctaSecondary: 'View Products & MOQ',
    chips: [
      'Engineering review within 1 business day',
      'Quotation within one business day',
      'NDA signed before any file exchange',
    ],
    mockupLabel: 'Signature Platform',
    mockupBrand: "SUP Explorer 11'",
    mockupHint: 'Your graphics · your colors · your packaging',
    heroNote:
      'We manufacture under your brand only. We do not sell to end consumers and we do not compete with our clients in any market.',
    float1: { value: '50 pcs', label: 'Standard OEM MOQ' },
    float2: { value: FACTS.leadTime, label: 'Production lead time (after PO)' },
  },
  es: {
    kicker: 'Fabricación B2B — OEM / ODM / Marca privada',
    titlePre: 'Fabricante de SUP personalizados',
    titleAccent: 'para marcas OEM y ODM',
    titlePost: 'Del desarrollo de muestras a la producción a escala',
    sub: 'Ayudamos a marcas de deportes acuáticos, minoristas, clubes y compradores corporativos a desarrollar tablas de SUP hinchables personalizadas, tablas rígidas y accesorios — desde el concepto y el arte hasta el prototipado y la producción masiva con control de calidad.',
    ctaPrimary: 'Inicia tu proyecto de SUP personalizado',
    ctaSecondary: 'Ver productos y MOQ',
    chips: [
      'Revisión de ingeniería en 1 día laborable',
      'Presupuesto en un día laborable',
      'NDA firmado antes de cualquier intercambio de archivos',
    ],
    mockupLabel: 'Plataforma insignia',
    mockupBrand: 'SUP Explorer 11\'',
    mockupHint: 'Tus gráficos · Tus colores · tu packaging',
    heroNote:
      'Fabricamos solo bajo tu marca. No vendemos a consumidores finales y no competimos con nuestros clientes en ningún mercado.',
    float1: { value: '50 uds.', label: 'MOQ OEM estándar' },
    float2: { value: '30–45 días', label: 'Plazo de producción (tras PO)' },
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
    sub: 'SUPsfactory is the SUP product development and manufacturing division of Afarer, the manufacturing brand of Qingdao Vatrad Group Co., Ltd. Our 12,000 m² plant in Laixi, Qingdao has produced inflatable products since 2012, with 25+ engineers across R&D, mold design, materials lab and production engineering averaging 7+ years in inflatable manufacturing, running two production shifts daily.',
    image: 'https://assets.supsfactory.com/images/sups/factory/afarer-production-department.webp',
    imageCaption: 'Afarer manufacturing facility, Qingdao, China',
    bullets: [
      {
        title: '12,000 m² plant',
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
    sub: 'SUPsfactory es la división de desarrollo y fabricación de productos SUP de Afarer, la marca de fabricación de Qingdao Vatrad Group Co., Ltd. Nuestra planta de 12.000 m² en Laixi, Qingdao produce productos inflables desde 2012, con más de 25 ingenieros entre I+D, diseño de moldes, laboratorio de materiales e ingeniería de producción, con una media de más de 7 años en fabricación de inflables y dos turnos de producción diarios.',
    image: 'https://assets.supsfactory.com/images/sups/factory/afarer-production-department.webp',
    imageCaption: 'Instalaciones de fabricación de Afarer, Qingdao, China',
    bullets: [
      {
        title: 'Planta de 12,000 m²',
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
      { value: '12,000 m²', label: 'Qingdao plant, in-house from raw PVC to finished board' },
      { value: '2012', label: 'Manufacturing SUP and inflatables since' },
      { value: '50+', label: 'Countries shipped to across EU, US, AU and Asia' },
      { value: 'ISO 9001 · CE · BSCI · REACH/RoHS', label: 'Certified and audit-ready' },
    ],
  },
  es: {
    stats: [
      { value: '12,000 m²', label: 'Planta en Qingdao, del PVC en bruto a la tabla terminada, todo en casa' },
      { value: '2012', label: 'Fabricando SUP e inflables desde' },
      { value: '50+', label: 'Países con envíos en la UE, EE. UU., Australia y Asia' },
      { value: 'ISO 9001 · CE · BSCI · REACH/RoHS', label: 'Certificada y lista para auditorías' },
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
        body: 'Standard construction, your artwork, your deck pad colors, your packaging and your barcode. Shipped ready for retail or rental deployment with no SUPsfactory or Afarer marking anywhere on the product.',
      },
      {
        title: 'Volume Supply — Repeat and Fleet Orders',
        body: 'Container-scale production for distributors, rental operators and resort groups, with locked specifications, batch traceability and consistent construction across reorders.',
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
        body: 'Producción a escala de contenedor para distribuidores, operadores de alquiler y grupos hoteleros, con especificaciones fijadas, trazabilidad por lote y construcción homogénea entre reposiciones.',
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
        body: 'Vacuum-packed, boxed and prepared for container loading, with printed retail cartons available.',
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
        body: 'Envasado al vacío, encajado y paletizado para el contenedor, con impresión de cartoncines minoristas disponible.',
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
        body: 'Every chamber is inflated to 125% of rated pressure and held for 24–48 hours with continuous sensor logging. Any chamber exceeding 5% pressure drop is rejected and returned for seam re-inspection.',
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
        body: 'Cada cámara se infla al 125% de la presión nominal y se mantiene 24–48 horas con registro de sensores continuo. Cualquier cámara que supere una pérdida del 5% se rechaza y vuelve a revisar las costuras.',
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

export interface CommercialContent {
  kicker: string
  title: string
  sub: string
  cells: CommercialCell[]
  certs: string
}

export const commercial: Localized<CommercialContent> = {
  en: {
    kicker: 'Commercial Terms',
    title: 'Commercial Terms, Stated Upfront',
    sub: 'No “it depends.” These are our standard terms — variations are quoted case by case.',
    cells: [
      {
        label: 'Minimum order',
        lines: [
          'Trial run on standard models: 5–10 pcs',
          'Standard OEM production: 50 pcs per design',
          'Custom mold / private label: 200 pcs',
        ],
      },
      {
        label: 'Lead time',
        lines: [
          '30–45 days from confirmed PO and deposit',
          'Custom mold development: +15–20 days for tooling',
          'Expedited production available for seasonal rush',
        ],
      },
      {
        label: 'Sampling',
        lines: [
          'Prototype samples ship in 15–20 days',
          'Sample cost credited against bulk order',
        ],
      },
      {
        label: 'Trade terms',
        lines: [
          'FOB Qingdao · CIF to major global ports · DDP for qualified partners',
          'Container booking, export documentation and customs clearance handled in-house',
        ],
      },
    ],
    certs:
      'ISO 9001 quality management · CE certification · BSCI social compliance (audit report available on request) · REACH and RoHS documentation with every shipment.',
  },
  es: {
    kicker: 'Condiciones comerciales',
    title: 'Condiciones comerciales, expresadas por adelantado',
    sub: 'Nada de «depende». Son nuestras condiciones estándar: las variaciones se presupuestan caso a caso.',
    cells: [
      {
        label: 'Pedido mínimo',
        lines: [
          'Pedido de prueba en modelos estándar: 5–10 uds.',
          'Producción OEM estándar: 50 uds. por diseño',
          'Molde a medida / marca privada: 200 uds.',
        ],
      },
      {
        label: 'Plazo de entrega',
        lines: [
          '30–45 días desde el PO confirmado y el depósito',
          'Desarrollo de molde a medida: +15–20 días para utillaje',
          'Producción acelerada disponible para la temporada',
        ],
      },
      {
        label: 'Muestras',
        lines: [
          'Las muestras de prototipo salen en 15–20 días',
          'El coste de la muestra se descuenta del pedido de volumen',
        ],
      },
      {
        label: 'Condiciones comerciales',
        lines: [
          'FOB Qingdao · CIF a puertos globales principales · DDP para partners cualificados',
          'Reserva de contenedor, documentación de exportación y aduanas gestionadas en casa',
        ],
      },
    ],
    certs:
      'ISO 9001 · Certificación CE · BSCI (informe de auditoría disponible) · Documentación REACH y RoHS con cada envío.',
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
    kicker: 'Customer Needs',
    title: 'From Requirements To Manufacturable Products',
    sub: 'Every SUP project starts with a specific requirement.',
    segments: [
      {
        slug: 'custom-sup-products',
        title: 'Custom SUP Products',
        body: 'Customize boards, graphics, specifications and accessories — from your idea to a manufacturable product.',
        points: ['Board customization', 'Graphics & branding', 'Specification support'],
        cta: 'Explore Custom SUP',
        href: '/custom-sup-development',
      },
      {
        slug: 'private-label-sup',
        title: 'Private Label SUP',
        body: 'Develop SUP products under your own brand identity, produced and delivered by our factory.',
        points: ['Branded boards', 'Product packaging', 'Bulk supply'],
        cta: 'Learn More',
        href: '/solutions/private-label-sup',
      },
      {
        slug: 'resort-club-solutions',
        title: 'Resort & Club Solutions',
        body: 'Create branded SUP equipment for guests, teams and activities — with fleet-friendly production.',
        points: ['Branded guest fleets', 'Team equipment', 'Fleet pricing'],
        cta: 'View Solutions',
        href: '/solutions/resort-sup',
      },
      {
        slug: 'organization-projects',
        title: 'Organization Projects',
        body: 'Customized SUP solutions for schools, programs and events — with bulk supply support.',
        points: ['School programs', 'Event equipment', 'Bulk orders'],
        cta: 'Discuss Requirements',
        href: '/contact',
      },
    ],
  },
  es: {
    kicker: 'Necesidades del cliente',
    title: 'De los requisitos al producto fabricable',
    sub: 'Cada proyecto SUP empieza con un requisito concreto.',
    segments: [
      {
        slug: 'custom-sup-products',
        title: 'Productos SUP personalizados',
        body: 'Personaliza tablas, gráficos, especificaciones y accesorios — de tu idea a un producto fabricable.',
        points: ['Personalización de tablas', 'Gráficos y branding', 'Apoyo en especificaciones'],
        cta: 'Explorar SUP personalizado',
        href: '/custom-sup-development',
      },
      {
        slug: 'private-label-sup',
        title: 'SUP de marca privada',
        body: 'Desarrolla productos SUP bajo tu propia identidad de marca, producidos y entregados por nuestra fábrica.',
        points: ['Tablas con marca', 'Embalaje del producto', 'Suministro por volumen'],
        cta: 'Saber más',
        href: '/solutions/private-label-sup',
      },
      {
        slug: 'resort-club-solutions',
        title: 'Soluciones para resorts y clubes',
        body: 'Crea equipamiento SUP con marca para huéspedes, equipos y actividades — con producción adaptada a flotas.',
        points: ['Flotas con marca para huéspedes', 'Equipamiento de equipo', 'Precios por flota'],
        cta: 'Ver soluciones',
        href: '/solutions/resort-sup',
      },
      {
        slug: 'organization-projects',
        title: 'Proyectos de organizaciones',
        body: 'Soluciones SUP personalizadas para escuelas, programas y eventos — con apoyo de suministro por volumen.',
        points: ['Programas escolares', 'Equipamiento para eventos', 'Pedidos por volumen'],
        cta: 'Comenta tus requisitos',
        href: '/contact',
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
  sku: string
  name: string
  tagline: string
  desc: string
  uses: string[]
  for: string[]
  specs: string
  artwork: string
  price: string
  image: string
  hue: number
}

export interface ProductsContent {
  kicker: string
  title: string
  sub: string
  items: Product[]
}

export const products: Localized<ProductsContent> = {
  en: {
    kicker: 'Product Platforms',
    title: 'SUP Platforms Available For Customization',
    sub: 'Each series is a manufacturing platform — choose a starting point and we adapt the shape, graphics and specs to your product.',
    items: [
      {
        slug: 'sup-explorer-11',
        sku: 'SUP-EX11',
        name: "SUP Explorer 11'",
        tagline: 'The all-around classic',
        desc: 'Our most popular all-around board — wide-body stability for beginners, agility for intermediates, and portability for any adventure. The default starting point for most new brands.',
        uses: ['Beginner', 'All-Around', 'Family'],
        for: ['Startups', 'Rental fleets'],
        specs: "11'0\" × 32\" × 6\" · drop-stitch PVC · 15 PSI · 19 lbs (8.6 kg)",
        artwork: 'Military-grade drop-stitch core · reinforced rails · 2+1 fins · complete package',
        price: '$399',
        image: 'https://assets.supsfactory.com/images/sups/products/afarer-sup-allround-board.webp',
        hue: 195,
      },
      {
        slug: 'sup-ocean-pulse',
        sku: 'SUP-OP11',
        name: 'Ocean Pulse Series',
        tagline: 'Topographic wave designer edition',
        desc: 'Ocean waves transformed into Tiffany Blue topographic contours with high-precision mechanical embossing and a unified color-matched accessory kit.',
        uses: ['Lifestyle', 'Flatwater', 'Designer'],
        for: ['Lifestyle brands', 'Boutique travel'],
        specs: "11'0\" × 32\" × 6\" · drop-stitch PVC · 15 PSI · 20 lbs (9.1 kg)",
        artwork: 'UV digital printing + mechanical heat-embossing · coordinated accessories',
        price: '$449',
        image: 'https://assets.supsfactory.com/images/sups/products/sup-series/sup-ocean-pulse-1.webp',
        hue: 210,
      },
      {
        slug: 'sup-cheetah-surge',
        sku: 'SUP-CS11',
        name: 'Cheetah Surge Edition',
        tagline: 'Wild-inspired premium edition',
        desc: 'Raw wild power meets artistic elegance — a cheetah motif in pastel pink, teal and coral, built with zero-fade multi-color EVA block piecing.',
        uses: ['Lifestyle', 'Flatwater', 'Designer'],
        for: ['Lifestyle brands', 'Social-first brands'],
        specs: "11'0\" × 32\" × 6\" · drop-stitch PVC · 15 PSI · 20 lbs (9.1 kg)",
        artwork: 'Multi-color EVA block piecing + UV printing · anti-delamination build',
        price: '$449',
        image: 'https://assets.supsfactory.com/images/sups/products/sup-series/sup-cheetah-surge-1.webp',
        hue: 28,
      },
      {
        slug: 'sup-medusa-glow',
        sku: 'SUP-MG11',
        name: 'Medusa Glow Series',
        tagline: 'The jellyfish edition',
        desc: 'An underwater dreamscape — vibrant jellyfish, sea stars and coral reefs in refreshing mint green, with zero-fade EVA artwork and exceptional lateral stability for yoga.',
        uses: ['Yoga', 'Tropical', 'Lifestyle'],
        for: ['Yoga studios', 'Tropical brands'],
        specs: "11'0\" × 32\" × 6\" · drop-stitch PVC · 15 PSI · 20 lbs (9.1 kg)",
        artwork: 'Multi-color EVA block piecing + UV printing · handle anchored to PVC hull',
        price: '$449',
        image: 'https://assets.supsfactory.com/images/sups/products/sup-series/sup-medusa-glow-1.webp',
        hue: 260,
      },
      {
        slug: 'sup-dolphin-wave',
        sku: 'SUP-DW11',
        name: 'Dolphin Wave Series',
        tagline: 'Marine 360° edition',
        desc: 'Leaping dolphins and layered medieval blue waves with CNC puzzle-cut EVA splicing and screen-printed continuous rail art that wraps the deck 360°.',
        uses: ['Marine', 'Flatwater', 'Designer'],
        for: ['Marine brands', 'Resorts'],
        specs: "11'0\" × 32\" × 6\" · drop-stitch PVC · 15 PSI · 20 lbs (9.1 kg)",
        artwork: 'CNC-cut EVA color-block splicing + screen-printed rails · PANTONE TPG color matching',
        price: '$449',
        image: 'https://assets.supsfactory.com/images/sups/products/sup-series/sup-dolphin-wave-1.webp',
        hue: 210,
      },
      {
        slug: 'sup-flowing-lotus',
        sku: 'SUP-FL11',
        name: 'Flowing Lotus Series',
        tagline: 'Eastern art wellness edition',
        desc: 'Traditional Eastern brushwork with lotus, koi and dragonfly motifs — laser-engraved into the traction pad so it never wears out or fades. Built for tranquil paddling and yoga.',
        uses: ['Yoga', 'Meditation', 'Flatwater'],
        for: ['Yoga studios', 'Wellness brands'],
        specs: "11'0\" × 32\" × 6\" · drop-stitch PVC · 15 PSI · 20 lbs (9.1 kg)",
        artwork: 'Dual-layer laser-engraved EVA + gradient UV printing · dynamic color-blocked fins',
        price: '$449',
        image: 'https://assets.supsfactory.com/images/sups/products/sup-series/sup-flowing-lotus-1.webp',
        hue: 150,
      },
      {
        slug: 'sup-jungle-mandala',
        sku: 'SUP-JM11',
        name: 'Jungle Mandala Series',
        tagline: 'Tropical sacred geometry',
        desc: 'Tropical vitality meets sacred geometry — hibiscus, hummingbirds and mandala totems in Tiffany Blue and Coral Orange, engineered to stay perfectly symmetrical at full pressure.',
        uses: ['Tropical', 'Coastal', 'Designer'],
        for: ['Tropical brands', 'Travel'],
        specs: "11'0\" × 32\" × 6\" · drop-stitch PVC · 15 PSI · 20 lbs (9.1 kg)",
        artwork: 'Dual-layer laser-engraved EVA + UV printing + screen-printed rails · anti-distortion geometry',
        price: '$449',
        image: 'https://assets.supsfactory.com/images/sups/products/sup-series/sup-jungle-mandala-1.webp',
        hue: 28,
      },
      {
        slug: 'sup-leviathan-wake',
        sku: 'SUP-LW11',
        name: 'Leviathan Wake Series',
        tagline: 'The whale edition',
        desc: 'A majestic blue whale totem with geometric tribal patterns and minimalist black-white swell lines — for paddlers who connect with the ocean.',
        uses: ['Ocean', 'All-Around', 'Designer'],
        for: ['Ocean brands', 'Outdoor brands'],
        specs: "11'0\" × 32\" × 6\" · drop-stitch PVC · 15 PSI · 20 lbs (9.1 kg)",
        artwork: 'UV digital printing + mechanical embossing · stretchable PVC inks on bottom logo',
        price: '$449',
        image: 'https://assets.supsfactory.com/images/sups/products/sup-series/sup-leviathan-wake-1.webp',
        hue: 195,
      },
      {
        slug: 'sup-ocean-voyager',
        sku: 'SUP-OV11',
        name: 'Ocean Voyager Series',
        tagline: 'The sea turtle edition',
        desc: 'A tribute to the ocean’s ultimate wanderer — geometric sea turtle artwork in deep teal, turquoise and coral orange, with an end-to-end coordinated accessory kit.',
        uses: ['Touring', 'Ocean', 'All-Around'],
        for: ['Touring brands', 'Outdoor brands'],
        specs: "11'0\" × 32\" × 6\" · drop-stitch PVC · 15 PSI · 20 lbs (9.1 kg)",
        artwork: 'Multi-color EVA block piecing + UV printing · color-matched backpack, pump & leash',
        price: '$449',
        image: 'https://assets.supsfactory.com/images/sups/products/sup-series/sup-ocean-voyager-1.webp',
        hue: 170,
      },
      {
        slug: 'sup-tropical-breeze',
        sku: 'SUP-TB11',
        name: 'Tropical Breeze Series',
        tagline: 'Island escape edition',
        desc: 'A complete island vacation canvas — sunshine, coconut groves and beach scenes flowing from a micro-illustrated nose into abstract EVA color-blocking toward the tail.',
        uses: ['Vacation', 'Lifestyle', 'Coastal'],
        for: ['Travel brands', 'Resorts'],
        specs: "11'0\" × 32\" × 6\" · drop-stitch PVC · 15 PSI · 20 lbs (9.1 kg)",
        artwork: 'UV digital printing + die-cut EVA patchwork · illustrated nose landscape',
        price: '$449',
        image: 'https://assets.supsfactory.com/images/sups/products/sup-series/sup-tropical-breeze-1.webp',
        hue: 330,
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
        sku: 'SUP-EX11',
        name: 'SUP Explorer 11\'',
        tagline: 'El clásico polivalente',
        desc: 'Nuestra tabla polivalente más popular: estabilidad de cuerpo ancho para principiantes, agilidad para intermedios y portabilidad para cualquier aventura. El punto de partida por defecto para la mayoría de las marcas nuevas.',
        uses: ['Principiante', 'Polivalente', 'Familia'],
        for: ['Marcas emergentes', 'Flotas de alquiler'],
        specs: "11'0\" × 32\" × 6\" · PVC drop-stitch · 15 PSI · 19 lb (8.6 kg)",
        artwork: 'Núcleo drop-stitch de grado militar · rails reforzados · quillas 2+1 · paquete completo',
        price: '$399',
        image: 'https://assets.supsfactory.com/images/sups/products/afarer-sup-allround-board.webp',
        hue: 195,
      },
      {
        slug: 'sup-ocean-pulse',
        sku: 'SUP-OP11',
        name: 'Serie Ocean Pulse',
        tagline: 'Edición de diseñador de olas topográficas',
        desc: 'Olas del océano transformadas en contornos topográficos azul Tiffany con gofrado mecánico de alta precisión y un kit de accesorios a juego.',
        uses: ['Estilo de vida', 'Aguas tranquilas', 'Diseñador'],
        for: ['Marcas lifestyle', 'Turismo boutique'],
        specs: "11'0\" × 32\" × 6\" · PVC drop-stitch · 15 PSI · 20 lb (9.1 kg)",
        artwork: 'Impresión UV digital + gofrado térmico mecánico · accesorios coordinados',
        price: '$449',
        image: 'https://assets.supsfactory.com/images/sups/products/sup-series/sup-ocean-pulse-1.webp',
        hue: 210,
      },
      {
        slug: 'sup-cheetah-surge',
        sku: 'SUP-CS11',
        name: 'Edición Cheetah Surge',
        tagline: 'Edición premium de inspiración salvaje',
        desc: 'Poder salvaje bruto con elegancia artística: un motivo de guepardo en rosa pastel, azul verdoso y coral, construido con mosaicos EVA multicolor que no destiñen.',
        uses: ['Estilo de vida', 'Aguas tranquilas', 'Diseñador'],
        for: ['Marcas lifestyle', 'Marcas social-first'],
        specs: "11'0\" × 32\" × 6\" · PVC drop-stitch · 15 PSI · 20 lb (9.1 kg)",
        artwork: 'Mosaicos EVA multicolor + impresión UV · construcción antidelaminación',
        price: '$449',
        image: 'https://assets.supsfactory.com/images/sups/products/sup-series/sup-cheetah-surge-1.webp',
        hue: 28,
      },
      {
        slug: 'sup-medusa-glow',
        sku: 'SUP-MG11',
        name: 'Serie Medusa Glow',
        tagline: 'La edición medusa',
        desc: 'Un paisaje submarino de ensueño: medusas vibrantes, estrellas de mar y arrecifes de coral en refrescante verde menta, con arte EVA sin decoloración y excepcional estabilidad lateral para yoga.',
        uses: ['Yoga', 'Tropical', 'Estilo de vida'],
        for: ['Estudios de yoga', 'Marcas tropicales'],
        specs: "11'0\" × 32\" × 6\" · PVC drop-stitch · 15 PSI · 20 lb (9.1 kg)",
        artwork: 'Mosaicos EVA multicolor + impresión UV · asa anclada al casco de PVC',
        price: '$449',
        image: 'https://assets.supsfactory.com/images/sups/products/sup-series/sup-medusa-glow-1.webp',
        hue: 260,
      },
      {
        slug: 'sup-dolphin-wave',
        sku: 'SUP-DW11',
        name: 'Serie Dolphin Wave',
        tagline: 'Edición marina 360°',
        desc: 'Delfines saltando y capas de olas azul medieval con splicado EVA cortado por CNC e impresión serigráfica de arte continuo en los rails que envuelve la tabla 360°.',
        uses: ['Marino', 'Aguas tranquilas', 'Diseñador'],
        for: ['Marcas marinas', 'Resorts'],
        specs: "11'0\" × 32\" × 6\" · PVC drop-stitch · 15 PSI · 20 lb (9.1 kg)",
        artwork: 'Splicado de bloques de color EVA por CNC + rails serigrafiados · ajuste de color PANTONE TPG',
        price: '$449',
        image: 'https://assets.supsfactory.com/images/sups/products/sup-series/sup-dolphin-wave-1.webp',
        hue: 210,
      },
      {
        slug: 'sup-flowing-lotus',
        sku: 'SUP-FL11',
        name: 'Serie Flowing Lotus',
        tagline: 'Edición de bienestar artístico oriental',
        desc: 'Pinceladas orientales tradicionales con motivos de loto, carpas y libélulas, grabadas con láser en el piso antideslizante para que nunca se desgasten ni destiñan. Diseñada para remar con calma y practicar yoga.',
        uses: ['Yoga', 'Meditación', 'Aguas tranquilas'],
        for: ['Estudios de yoga', 'Marcas de bienestar'],
        specs: "11'0\" × 32\" × 6\" · PVC drop-stitch · 15 PSI · 20 lb (9.1 kg)",
        artwork: 'EVA grabada con láser de doble capa + impresión UV degradada · quillas dinámicas en bloques de color',
        price: '$449',
        image: 'https://assets.supsfactory.com/images/sups/products/sup-series/sup-flowing-lotus-1.webp',
        hue: 150,
      },
      {
        slug: 'sup-jungle-mandala',
        sku: 'SUP-JM11',
        name: 'Serie Jungle Mandala',
        tagline: 'Geometría sagrada tropical',
        desc: 'Vitalidad tropical con geometría sagrada: hibiscos, colibríes y tótems mandala en azul Tiffany y naranja coral, diseñados para mantenerse perfectamente simétricos a máxima presión.',
        uses: ['Tropical', 'Costero', 'Diseñador'],
        for: ['Marcas tropicales', 'Viajes'],
        specs: "11'0\" × 32\" × 6\" · PVC drop-stitch · 15 PSI · 20 lb (9.1 kg)",
        artwork: 'EVA grabada con láser de doble capa + impresión UV + rails serigrafiados · geometría antideformación',
        price: '$449',
        image: 'https://assets.supsfactory.com/images/sups/products/sup-series/sup-jungle-mandala-1.webp',
        hue: 28,
      },
      {
        slug: 'sup-leviathan-wake',
        sku: 'SUP-LW11',
        name: 'Serie Leviathan Wake',
        tagline: 'La edición ballena',
        desc: 'Un majestuoso tótem de ballena azul con patrones tribales geométricos y líneas de oleaje minimalistas en blanco y negro, para remeros que conectan con el océano.',
        uses: ['Océano', 'Polivalente', 'Diseñador'],
        for: ['Marcas oceánicas', 'Marcas outdoor'],
        specs: "11'0\" × 32\" × 6\" · PVC drop-stitch · 15 PSI · 20 lb (9.1 kg)",
        artwork: 'Impresión UV digital + gofrado mecánico · tintas PVC estirables en el logo inferior',
        price: '$449',
        image: 'https://assets.supsfactory.com/images/sups/products/sup-series/sup-leviathan-wake-1.webp',
        hue: 195,
      },
      {
        slug: 'sup-ocean-voyager',
        sku: 'SUP-OV11',
        name: 'Serie Ocean Voyager',
        tagline: 'La edición tortuga marina',
        desc: 'Un homenaje al vagabundo supremo del océano: arte geométrico de tortuga marina en azul profundo, turquesa y naranja coral, con un kit de accesorios coordinados de principio a fin.',
        uses: ['Travesía', 'Océano', 'Polivalente'],
        for: ['Marcas de travesía', 'Marcas outdoor'],
        specs: "11'0\" × 32\" × 6\" · PVC drop-stitch · 15 PSI · 20 lb (9.1 kg)",
        artwork: 'Mosaicos EVA multicolor + impresión UV · mochila, bomba y leash a juego',
        price: '$449',
        image: 'https://assets.supsfactory.com/images/sups/products/sup-series/sup-ocean-voyager-1.webp',
        hue: 170,
      },
      {
        slug: 'sup-tropical-breeze',
        sku: 'SUP-TB11',
        name: 'Serie Tropical Breeze',
        tagline: 'Edición escapada isleña',
        desc: 'Un lienzo completo de vacaciones en la isla: sol, cocoteros y escenas de playa que fluyen desde una proa con micro ilustraciones hacia bloques de color EVA abstractos en la cola.',
        uses: ['Vacaciones', 'Estilo de vida', 'Costero'],
        for: ['Marcas de viajes', 'Resorts'],
        specs: "11'0\" × 32\" × 6\" · PVC drop-stitch · 15 PSI · 20 lb (9.1 kg)",
        artwork: 'Impresión UV digital + patchwork EVA troquelado · paisaje ilustrado en la proa',
        price: '$449',
        image: 'https://assets.supsfactory.com/images/sups/products/sup-series/sup-tropical-breeze-1.webp',
        hue: 330,
      },
    ],
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
    title: 'From Specification to Container',
    sub: 'Requirement intake through container-loaded export — every step inside our own plant.',
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
        body: 'A physical prototype confirms shape, stiffness, weight and finish. Ships in 15–20 days.',
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
        title: 'Export and Delivery',
        body: 'Vacuum-packed, container-loaded, documented and shipped. FOB, CIF or DDP as agreed.',
      },
    ],
    note: 'The approved sample is the contract. Every board in the batch is measured against it.',
  },
  es: {
    kicker: 'Proceso de desarrollo',
    title: 'De la especificación al contenedor',
    sub: 'Desde la recepción de requisitos hasta la exportación en contenedor — cada paso dentro de nuestra propia planta.',
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
        body: 'Un prototipo físico confirma forma, rigidez, peso y acabado. Se envía en 15–20 días.',
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
        title: 'Exportación y entrega',
        body: 'Envasado al vacío, cargado en contenedor, documentado y enviado. FOB, CIF o DDP según lo acordado.',
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
    sub: 'Manufacturing projects that shipped from our plant — with the numbers buyers actually ask about.',
    projects: [
      {
        // TODO(待确认) 补数量与交付周期
        tag: 'Resort Fleet',
        title: 'Resort Fleet — Hotel Group Boards',
        body: '[待确认: 数量] branded boards for a hotel group, custom deck graphics matched to property colors, accessories bundled, delivered in [待确认: 周期].',
        hue: 195,
        image: 'https://assets.supsfactory.com/images/sups/products/sup-series/sup-tropical-breeze-1.webp',
      },
      {
        tag: 'Club Team',
        title: 'Club Team Boards — Race Platform',
        body: 'Race platform with specification adjustments and team graphics, tooling reused across two seasons for reorder consistency.',
        hue: 28,
        image: 'https://assets.supsfactory.com/images/sups/products/sup-series/sup-cheetah-surge-1.webp',
      },
      {
        // TODO(待确认) 补首批数量
        tag: 'Brand Line Extension',
        title: 'Brand Line Extension — Inflatable SUP',
        body: 'An established watersports brand added an inflatable SUP line: engineering review, custom mold, three sizes, [待确认: 数量] first production run.',
        hue: 210,
        image: 'https://assets.supsfactory.com/images/sups/products/afarer-sup-allround-board.webp',
      },
    ],
  },
  es: {
    kicker: 'Proyectos de producción',
    title: 'Producción reciente',
    sub: 'Proyectos de fabricación enviados desde la planta — con las cifras que de verdad pregunta un comprador.',
    projects: [
      {
        tag: 'Flota de resort',
        title: 'Flota de resort — tablas para grupo hotelero',
        body: '[待确认: cantidad] tablas con marca para un grupo hotelero, gráficos personalizados según los colores del hotel, accesorios incluidos, entregadas en [待确认: plazo].',
        hue: 195,
        image: 'https://assets.supsfactory.com/images/sups/products/sup-series/sup-tropical-breeze-1.webp',
      },
      {
        tag: 'Equipo de club',
        title: 'Tablas de equipo — plataforma de competición',
        body: 'Plataforma de competición con ajustes de especificación y gráficos del equipo; el utillaje se reutilizó dos temporadas para la consistencia de los repedidos.',
        hue: 28,
        image: 'https://assets.supsfactory.com/images/sups/products/sup-series/sup-cheetah-surge-1.webp',
      },
      {
        tag: 'Extensión de marca',
        title: 'Extensión de línea — SUP hinchable',
        body: 'Una marca de deportes acuáticos consolidada añadió una línea de SUP hinchable: revisión de ingeniería, molde a medida, tres tallas y [待确认: cantidad] unidades en la primera tirada.',
        hue: 210,
        image: 'https://assets.supsfactory.com/images/sups/products/afarer-sup-allround-board.webp',
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
        q: 'What is your minimum order quantity?',
        a: `Trial runs on standard models start at 5–10 pcs. Standard OEM production starts at ${FACTS.moq.standardRun} per design. Custom mold and private label projects require 200 pcs minimum, depending on complexity.`,
      },
      {
        q: 'How long does production take?',
        a: '30–45 days from confirmed PO and deposit. Custom tooling adds 15–20 days for mold development. Expedited production is available for seasonal rush orders.',
      },
      {
        q: 'How fast can I get a sample?',
        a: 'Prototype samples typically ship within 15–20 days of approved artwork and specification.',
      },
      {
        q: 'What certifications do you hold?',
        a: 'ISO 9001 for quality management, CE certification on all products, and valid BSCI social compliance certification with the audit report available on request. REACH and RoHS documentation is provided with every shipment.',
      },
      {
        q: 'Which trade terms do you offer?',
        a: 'FOB Qingdao, CIF to major global ports, and DDP for qualified partners. Our logistics team handles container booking, export documentation and customs clearance. We ship to 50+ countries across the EU, US, AU and Asia.',
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
    ],
  },
  es: {
    kicker: 'Preguntas frecuentes',
    title: 'Preguntas sobre fabricación',
    sub: 'Estas son las preguntas que un comprador plantea antes de encargar — respondidas con nuestras condiciones reales.',
    items: [
      {
        q: '¿Cuál es la cantidad mínima de pedido?',
        a: `La prueba de modelos estándar parte de 5–10 uds. La producción OEM estándar parte de ${FACTS.moq.standardRun} por diseño. Los proyectos de molde a medida y marca privada requieren un mínimo de 200 uds., según la complejidad.`,
      },
      {
        q: '¿Cuánto tarda la producción?',
        a: '30–45 días desde el PO confirmado y el depósito. El utillaje añade 15–20 días de desarrollo de molde. Se dispone de producción acelerada para los picos de temporada.',
      },
      {
        q: '¿Qué rapidez tengo para recibir una muestra?',
        a: 'Las muestras de prototipo salen en 15–20 días tras la aprobación del arte y la especificación.',
      },
      {
        q: '¿Qué certificaciones tenéis?',
        a: 'ISO 9001 para la gestión de calidad, certificación CE en todos los productos y certificación BSCI válida con informe de auditoría disponible. La documentación REACH y RoHS se entrega con cada envío.',
      },
      {
        q: '¿Qué condiciones comerciales ofrecéis?',
        a: 'FOB Qingdao, CIF a los principales puertos globales y DDP para partners cualificados. Nuestro equipo de logística gestiona la reserva de contenedor, la documentación de exportación y las aduanas. Enviamos a más de 50 países en la UE, Asia y más.',
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
    title: 'Send Us Your Specification',
    body: 'Drawings, a reference board, or just a target spec and volume — we will come back with an engineering assessment and a quotation.',
    button: 'Request Quotation',
    note: 'Reply within 1 business day · NDA on request before file exchange · info@supsfactory.com · +86-13305324192',
  },
  es: {
    title: 'Envíanos tu especificación',
    body: 'Planos, una tabla de referencia o simplemente una especificación objetivo y un volumen — volveremos con una evaluación de ingeniería y un presupuesto.',
    button: 'Solicitar presupuesto',
    note: 'Respuesta en 1 día laborable · NDA disponible antes del intercambio de archivos · info@supsfactory.com · +86-13305324192',
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
    kicker: 'Our Role as Your Manufacturing Partner',
    title: 'Where We Stop, You Start',
    sub: 'A manufacturing partner should make your product, not run your business. Here is exactly where the line sits.',
    oursTitle: 'We handle',
    theirsTitle: 'You keep',
    rows: [
      { ours: 'Specification review and manufacturability assessment', theirs: 'Brand name, identity and positioning' },
      { ours: 'Structural engineering, materials selection, mold development', theirs: 'Pricing, channels and sales' },
      { ours: 'Deck artwork prepress and print production from your brand files', theirs: 'Ownership of all brand and artwork files' },
      { ours: 'Prototyping, sampling and sample approval documentation', theirs: 'Final approval on every sample' },
      { ours: 'Batch production, in-process QC and final inspection', theirs: 'Your market, your customers, your data' },
      { ours: 'Certification documentation, export packing, container loading', theirs: 'End-customer relationships and after-sales' },
    ],
    footer:
      'Your artwork, tooling and specification files remain your property and are never reused, resold or shown to another client.',
  },
  es: {
    kicker: 'Nuestro rol como tu socio de fabricación',
    title: 'Aquí terminamos nosotros, empiezas tú',
    sub: 'Un socio de fabricación debe fabricar tu producto, no dirigir tu negocio. Aquí está exactamente dónde se sitúa la línea.',
    oursTitle: 'Nosotros nos encargamos',
    theirsTitle: 'Tú conservas',
    rows: [
      { ours: 'Revisión de especificaciones y evaluación de fabricabilidad', theirs: 'Nombre, identidad y posicionamiento de marca' },
      { ours: 'Ingeniería estructural, selección de materiales y desarrollo de moldes', theirs: 'Precios, canales y ventas' },
      { ours: 'Preimpresión de arte de cubierta e impresión desde tus archivos de marca', theirs: 'Propiedad de todos los archivos de marca y arte' },
      { ours: 'Prototipado, muestreo y documentación de aprobación de muestras', theirs: 'Aprobación final de cada muestra' },
      { ours: 'Producción por lotes, QC en proceso e inspección final', theirs: 'Tu mercado, tus clientes, tus datos' },
      { ours: 'Documentación de certificación, embalaje de exportación y carga de contenedor', theirs: 'Relaciones con el cliente final y posventa' },
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
}

export const about: Localized<AboutContent> = {
  en: {
    kicker: 'About Us',
    title: 'The Manufacturing Partner Behind Emerging Paddle Brands',
    sub: 'SUPsfactory exists for one reason: great brands shouldn’t have to run their own factory.',
    story: [
      'We are an inflatable SUP OEM/ODM factory that has spent years building boards for brands, distributors and sourcing teams around the world. Along the way, we kept meeting the same kind of customer — brands and buyers with a clear product vision but no in-house plant to build it.',
      'So we built SUPsfactory around them. Tiered minimums from 5–10 trial units, complete engineering and design support, and a manufacturing team that treats your first order as seriously as your hundredth. You bring the brand; we run the factory.',
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
        body: 'Tiered MOQs, modular options and honest lead times let brands grow from trial orders to container-scale runs.',
      },
    ],
    capabilities: ['OEM / ODM / private label', 'Custom moulds', 'Sample service', 'Design & artwork', 'Multi-point QC', 'Export logistics'],
    stats: [
      { value: '50 pcs', label: 'Standard OEM MOQ' },
      { value: '15–20 days', label: 'Sample lead time' },
      { value: '30–45 days', label: 'Production lead time' },
      { value: '5–10 pcs', label: 'Trial order MOQ' },
    ],
  },
  es: {
    kicker: 'Sobre nosotros',
    title: 'El fabricante detrás de las marcas de remo emergentes',
    sub: 'SUPsfactory existe por una razón: las grandes marcas no deberían gestionar una fábrica propia.',
    story: [
      'Somos una fábrica OEM/ODM de SUP hinchables que lleva años fabricando tablas para marcas, distribuidores y equipos de compra de todo el mundo. En el camino, nos encontrábamos una y otra vez con el mismo tipo de cliente: marcas y compradores con un plan de producto claro pero sin planta productiva propia.',
      'Por eso construimos SUPsfactory a su alrededor. Pedidos mínimos por tramos desde 5–10 unidades de prueba, soporte de ingeniería y diseño completo, y un equipo de fabricación que trata tu primer pedido con la misma seriedad que el centésimo. Tú traes la marca; nosotros dirigimos la fábrica.',
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
        body: 'MOQ por tramos, opciones modulares y plazos reales permiten crecer del pedido de prueba a la serie a escala de contenedor.',
      },
    ],
    capabilities: ['OEM / ODM y marca privada', 'Moldes a medida', 'Servicio de muestras', 'Diseño e ingeniería', 'QC multipunto', 'Logística de exportación'],
    stats: [
      { value: '50 uds.', label: 'MOQ OEM estándar' },
      { value: '15–20 días', label: 'Plazo de muestras' },
      { value: '30–45 días', label: 'Plazo de producción' },
      { value: '5–10 uds.', label: 'MOQ de pedido de prueba' },
    ],
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
    title: 'From Specification to Shipped Container',
    sub: 'Requirement intake, engineering review, sampling, production and export — every step inside our own plant.',
    consultTitle: 'Start With a Specification Review',
    consultBody: 'Send us your spec, reference board or drawings. We return a manufacturability assessment and a quotation — no obligation.',
  },
  es: {
    kicker: 'Proceso de desarrollo',
    title: 'De la especificación al contenedor enviado',
    sub: 'Recepción de requisitos, revisión de ingeniería, muestras, producción en serie y exportación — cada paso dentro de nuestra propia planta.',
    consultTitle: 'Empieza con una revisión de especificación',
    consultBody: 'Envíanos tu especificación, una tabla de referencia o planos. Te devolvemos una evaluación de fabricabilidad y un presupuesto, sin compromiso.',
  },
}
