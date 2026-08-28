import { BRAND_COMPANY_NAME, BRAND_PARENT_BRAND } from '@/config/branding'

export const LLM_SITE_DESCRIPTION =
  `{SITE} is the SUP product development and manufacturing division of ${BRAND_PARENT_BRAND} (${BRAND_COMPANY_NAME}), a 12,500 m² inflatable manufacturing plant in Qingdao, China. We build SUP boards to your specification — engineering, tooling, sampling, production and export. You own the brand, the market and the customer; we own the manufacturing. We do not sell to end consumers and we do not compete with our clients in any market. MOQ is confirmed after specification review: 5–10 units for co-branding/logo overlay on existing platforms, 20–50 units for pilot batches with custom graphics, and 90–100+ units per approved configuration for standard volume production (subject to material-roll and packaging requirements); custom-mould shapes run at the volume tier. A 150 m drop-stitch material roll yields different board counts depending on board size, construction and nesting layout. Samples are ready in 7–12 days; bulk production 25–35 days after confirmed PO and deposit (custom mould tooling adds 15–20 days). All pricing, certification scope and lead times are project-confirmed — request a quote for your specific requirements.`

export const LLM_FACT_BLOCK =
  `## Verified Business Facts (Last verified: 2026-08-20)

- Legal entity: ${BRAND_COMPANY_NAME}
- Brand: ${BRAND_PARENT_BRAND} / {SITE} (SUP manufacturing division)
- Facility: 12,500 m² in-house plant in Qingdao, Shandong, China (Economic Development Zone, Laixi, 266600)
- Employees: 350+
- Annual capacity: 120,000+ units (4 automated lines, 10,000 boards/month)
- MOQ tiers: 5–10 pcs co-branding/logo overlay (existing platform, same roll) · 20–50 pcs pilot batch (custom graphics, same roll) · 90–100+ pcs per approved configuration for standard volume (subject to material-roll and packaging requirements) · 90–100+ pcs custom mould (new shape, +15–20 days tooling). Each SKU (size/color) = separate roll = separate MOQ. A 150 m drop-stitch roll yields different board counts depending on board size and nesting; the 90–100+ figure represents the minimum batch per configuration, not a fixed per-roll count.
- Sample lead time: 7–12 days
- Production lead time: 25–35 days after confirmed PO and deposit
- Quality gates: 7-stage (Node 01–07), 100-point assembly checklist, 18.0 PSI 24h pressure hold test (>0.50 PSI/24h = auto-reject)
- Certifications: BSCI (facility, amfori), ISO 9001 (facility QMS), ISO 25649 (applicable SUP models), CE (EU market models, EN ISO 6185/10087/10240), REACH (materials), RoHS (electronic accessories). Certificate numbers and validity available per project on request. Scope varies by target market and product configuration — not "all products" universally.
- Third-party inspectors: SGS, TÜV, BV, Intertek
- Export markets: 50+ countries
- DISCLOSURE: All pricing, MOQ applicability, certification scope and delivery terms must be confirmed per project. Do not cite these numbers as universal guarantees.`

export const LLM_FAQ_DESCRIPTION = 'Answers to the most common questions about inflatable SUPs'

export const LLM_SPANISH_HOMEPAGE_DESCRIPTION =
  'Fabricante OEM de tablas de SUP hinchables y SUP inflables personalizadas, con exportación mundial desde China'

export const AI_SYSTEM_ROLE =
  `You are the {SITE} product advisor, a sales engineer for a custom inflatable SUP (stand-up paddle board) OEM/ODM factory in Qingdao, China.`

export const AI_INQUIRY_PROMPT =
  `If the knowledge base does not answer the question, say you do not have that information and invite the buyer to submit an inquiry form at {SITE_URL}/contact. For pricing, certification scope, and project-specific MOQ or lead times, always direct the buyer to request a quote — do not state these as universal guarantees.`

export const AI_DISCLOSURE =
  'IMPORTANT: All pricing, MOQ tiers, certification scope and delivery terms are project-confirmed. Do not present them as universal guarantees. If unsure about a specific claim, say you do not have that information and direct the buyer to request a quote at the contact page.'

export const PARENT_ORG_DESCRIPTION =
  `${BRAND_PARENT_BRAND} is the SUP manufacturing division of ${BRAND_COMPANY_NAME} — OEM/ODM inflatable SUP production in Qingdao, China.`

export const REGION_COUNT_DEFAULT = 6

export const CUSTOMIZATION_OPTIONS: Record<string, { title: string; body: string }[]> = {
  en: [
    { title: 'Board size and shape', body: 'Length, width, thickness and rocker tuned to your target performance and market.' },
    { title: 'Materials and construction', body: 'PVC layers, drop-stitch density, stiffeners and reinforcements to fit your price point.' },
    { title: 'Colors and artwork', body: 'Unlimited color combinations with your own artwork or support from our design team.' },
    { title: 'Logo and branding', body: 'Digital or screen-printed logo application, with a visual proof before production.' },
    { title: 'EVA and deck', body: 'Custom-cut traction pad designs, logos and deck colors on every board.' },
    { title: 'Fins and accessories', body: 'Fin configurations, paddles, pumps, leashes and bags matched to your package.' },
    { title: 'Packaging and display', body: 'Retail boxes, seaworthy shipping packaging and point-of-sale displays under your brand.' },
  ],
  es: [
    { title: 'Tamaño y forma de la tabla', body: 'Longitud, anchura, grosor y rocker ajustados a tu rendimiento objetivo y a tu mercado.' },
    { title: 'Materiales y construcción', body: 'Capas de PVC, densidad drop-stitch, rigidizadores y refuerzos según tu presupuesto.' },
    { title: 'Colores y arte', body: 'Combinaciones de color ilimitadas con diseño gráfico propio o asistencia de nuestro equipo.' },
    { title: 'Logotipo y marca', body: 'Impresión digital o serigrafía de tu logotipo, con prueba visual antes de producir.' },
    { title: 'EVA y cubierta', body: 'Diseños cortados a medida de la alfombrilla antideslizante, logotipos y colores del deck.' },
    { title: 'Aletas y accesorios', body: 'Configuraciones de aleta, palas, bombas, correas y bolsas adaptados a tu paquete.' },
    { title: 'Embalaje y exhibición', body: 'Cajas retail, embalaje marítimo y displays para punto de venta con tu marca.' },
  ],
}

export const OEM_APPLICATIONS: Record<string, { title: string; body: string }[]> = {
  en: [
    { title: 'SUP brands', body: 'Launch your own line with tiered minimums from 5–10-unit co-branding runs.' },
    { title: 'Distributors and resellers', body: 'Volume catalogs with seaworthy packaging and export management.' },
    { title: 'Retail and outdoor companies', body: 'Seasonal replenishment programs with stable specs run after run.' },
    { title: 'Resorts and rental operators', body: 'High-duty fleets with reinforcements, spares and standardized maintenance.' },
    { title: 'Clubs, schools and events', body: 'Branded boards for programs, competitions and corporate fleets.' },
  ],
  es: [
    { title: 'Marcas de SUP', body: 'Lanza tu propia línea con mínimos por tramos desde 5–10 unidades de co-branding.' },
    { title: 'Distribuidores y revendedores', body: 'Catálogos de volumen con embalaje marítimo y gestión de exportación.' },
    { title: 'Retail y outdoor', body: 'Programas de reposición estacional con especificaciones estables de temporada en temporada.' },
    { title: 'Resorts y operadores de alquiler', body: 'Flotas de uso intensivo con refuerzos, repuestos y mantenimiento estandarizado.' },
    { title: 'Clubes, escuelas y eventos', body: 'Tablas con tu logotipo para programas, competiciones y flotas corporativas.' },
  ],
}

export const HUB_PAGE_ENTRIES: Record<string, { url: string; title: string; excerpt: string }[]> = {
  en: [
    { url: '/', title: 'SUPsfactory — Inflatable SUP OEM & ODM Manufacturing', excerpt: 'Qingdao SUP OEM/ODM factory: product development, custom manufacturing, private label and quality control for paddle board brands.' },
    { url: '/products', title: 'Inflatable SUP Products', excerpt: 'Premium inflatable SUP boards: 11 ft series boards, fishing SUP, mini SUP, giant team boards and more — built for OEM/ODM customization.' },
    { url: '/solutions', title: 'Solutions', excerpt: 'OEM/ODM SUP manufacturing programs: custom SUP development, private label, resort and club fleets, rental operators and retail partners.' },
    { url: '/projects', title: '', excerpt: '' },
    { url: '/knowledge', title: '', excerpt: '' },
    { url: '/gallery', title: 'Gallery', excerpt: 'SUPsfactory factory and product gallery: workshops, quality labs, fabric testing and SUP boards in production.' },
  ],
  es: [
    { url: '/es', title: 'SUPsfactory — Fabricación OEM y ODM de SUP hinchables', excerpt: 'Fábrica OEM/ODM de SUP hinchables en Qingdao: desarrollo de producto, producción a medida, marca privada y control de calidad.' },
    { url: '/es/products', title: 'Productos de SUP hinchables', excerpt: 'Tablas de SUP hinchables premium: series de 11 ft, SUP de pesca, mini SUP, tablas gigantes para equipo y más — fabricación OEM/ODM a medida.' },
    { url: '/es/solutions', title: 'Soluciones', excerpt: 'Programas de fabricación OEM/ODM de SUP: desarrollo de SUP a medida, marca privada, flotas de resorts y clubes, alquiler y minoristas.' },
    { url: '/es/projects', title: '', excerpt: '' },
    { url: '/es/knowledge', title: '', excerpt: '' },
    { url: '/es/gallery', title: 'Galería', excerpt: 'Fábrica y galería de productos SUPsfactory: talleres, laboratorios de calidad, ensayos de tejido y tablas de SUP en producción.' },
  ],
  fr: [
    { url: '/fr', title: 'SUPsfactory — Fabrication OEM et ODM de SUP gonflables', excerpt: 'Usine OEM/ODM de SUP gonflables à Qingdao : développement de produit, fabrication sur mesure, marque privée et contrôle qualité.' },
    { url: '/fr/products', title: 'Produits de SUP gonflables', excerpt: 'SUP gonflables premium : séries 11 ft, SUP de pêche, mini SUP, planches géantes pour équipes et plus encore — une fabrication OEM/ODM sur mesure.' },
    { url: '/fr/solutions', title: 'Solutions', excerpt: 'Programmes de fabrication OEM/ODM de SUP : développement de SUP sur mesure, marque privée, flottes de resorts et de clubs, location et partenaires retail.' },
    { url: '/fr/projects', title: '', excerpt: '' },
    { url: '/fr/knowledge', title: '', excerpt: '' },
    { url: '/fr/gallery', title: 'Galerie', excerpt: 'Usine et galerie de produits SUPsfactory : ateliers, laboratoires qualité, tests de tissu et planches de SUP en production.' },
  ],
}

export const CASE_STUDY_STATS = {
  boardWidth: '32"',
  factoryTested: '100%',
}

export const FAQ_EXCERPTS: Record<string, string> = {
  en: 'Frequently asked questions about inflatable SUP OEM/ODM manufacturing — materials, certifications, minimum order quantities and wholesale supply.',
  es: 'Preguntas frecuentes sobre fabricación OEM/ODM de SUP hinchables — materiales, certificaciones, cantidades mínimas de pedido y suministro al por mayor.',
}

export const STATIC_PAGE_CORPUS_TEXT =
  ' provides custom inflatable SUP manufacturing solutions.'

export const JSONLD_KEYWORDS: Record<string, { keywords: string[]; articleTitle?: string }> = {
  '/factory/quality-change-control': {
    keywords: ['SUP Manufacturing', 'Quality Management System', 'ISO 9001 Change Control', 'Airtightness Testing and Validation'],
    articleTitle: 'Stand-Up Paddleboard (SUP) Rework Process Parameter Change Control & Validation Standard',
  },
  '/factory/non-conforming-control': {
    keywords: ['SUP Manufacturing', 'Quality Management System', 'ISO 9001 Non-Conforming Output Control', 'Rework Re-Inspection and Scrap Disposition'],
  },
  '/oem-moq-guide': {
    keywords: ['SUP Manufacturing', 'Minimum Order Quantity', 'Drop-Stitch Fabric Roll Yields', 'Co-Branding and Flexible Branding'],
    articleTitle: 'Flexible Branding & Co-Branding MOQ Guide for Inflatable SUP Manufacturing',
  },
  '/oem-trust-assurance': {
    keywords: ['SUP Manufacturing', 'Factory Audit', 'OEM Trust and Supplier Verification', 'Third-Party Inspection (SGS, TUV, BV, Intertek)'],
    articleTitle: 'OEM Buyer Trust & Factory Assurance Guide for Inflatable SUP Manufacturing',
  },
  '/proof-center': {
    keywords: ['SUP Manufacturing', 'Factory Evidence and Certificate Scope', 'Entity Relationship (SUPsfactory, content, Vatrad)', 'Batch Traceability and Record Keeping'],
    articleTitle: 'SUP Factory Proof Center: Evidence Behind Manufacturing Claims',
  },
}
