import { BRAND_COMPANY_NAME, BRAND_PARENT_BRAND } from '@/config/branding'

export const ENTITY_FACTS: Record<string, { label: string; value: string }[]> = {
  en: [
    { label: 'Brand', value: `SUPsfactory — the SUP manufacturing division of ${BRAND_PARENT_BRAND}` },
    { label: 'Legal entity', value: BRAND_COMPANY_NAME },
    { label: 'Brand relationship', value: `SUPsfactory is the SUP manufacturing division of ${BRAND_PARENT_BRAND}, operated by ${BRAND_COMPANY_NAME}. ${BRAND_PARENT_BRAND} covers RIB boats, inflatable boats, SUP boards and marine solutions; SUPsfactory focuses exclusively on inflatable SUP OEM/ODM manufacturing.` },
    { label: 'Product focus', value: 'Inflatable SUP manufacturing — OEM, ODM & private label' },
    { label: 'Factories', value: '12,500 m² in-house plant in Qingdao, China' },
    { label: 'Minimum order', value: 'Tiered: 5–10 co-branding · 20–50 pilot · 90–100+ volume per approved configuration' },
    { label: 'Markets', value: 'Worldwide — Europe, Americas, Asia, Oceania' },
    { label: 'Business model', value: 'B2B development & manufacturing only — no end-consumer sales' },
  ],
  es: [
    { label: 'Marca', value: `SUPsfactory — la división de fabricación de SUP de ${BRAND_PARENT_BRAND}` },
    { label: 'Entidad legal', value: BRAND_COMPANY_NAME },
    { label: 'Relación de marca', value: `SUPsfactory es la división de fabricación de SUP de ${BRAND_PARENT_BRAND}, operada por ${BRAND_COMPANY_NAME}. ${BRAND_PARENT_BRAND} cubre botes RIB, botes inflables, tablas de SUP y soluciones marinas; SUPsfactory se enfoca exclusivamente en fabricación OEM/ODM de SUP hinchables.` },
    { label: 'Enfoque de producto', value: 'Fabricación de SUP hinchables: OEM, ODM y etiqueta privada' },
    { label: 'Fábricas', value: 'Planta propia de 12.500 m² en Qingdao, China' },
    { label: 'Pedido mínimo', value: 'Escalonado: 5–10 co-branding · 20–50 prueba · 90–100+ volumen por configuración aprobada' },
    { label: 'Mercados', value: 'Mundial: Europa, América, Asia, Oceanía' },
    { label: 'Modelo de negocio', value: 'Desarrollo y fabricación B2B — sin venta al consumidor final' },
  ],
  it: [
    { label: 'Marchio', value: `SUPsfactory — la divisione di produzione SUP di ${BRAND_PARENT_BRAND}` },
    { label: 'Entità legale', value: BRAND_COMPANY_NAME },
    { label: 'Rapporto tra i marchi', value: `SUPsfactory è la divisione di produzione SUP di ${BRAND_PARENT_BRAND}, gestita da ${BRAND_COMPANY_NAME}. ${BRAND_PARENT_BRAND} copre gommoni RIB, imbarcazioni gonfiabili, tavole SUP e soluzioni marine; SUPsfactory si concentra esclusivamente sulla produzione OEM/ODM di SUP gonfiabili.` },
    { label: 'Focus di prodotto', value: 'Produzione di SUP gonfiabili: OEM, ODM e marchio privato' },
    { label: 'Fabbriche', value: 'Stabilimento di proprietà di 12.500 m² a Qingdao, Cina' },
    { label: 'Ordine minimo', value: 'Scalonato: 5–10 co-branding · 20–50 prova · 90–100+ volume per configurazione approvata' },
    { label: 'Mercati', value: 'Mondiale: Europa, Americhe, Asia, Oceania' },
    { label: 'Modello di business', value: 'Sviluppo e produzione B2B — nessuna vendita al consumatore finale' },
  ],
}

export const ENTITY_SERVICES = ['custom-sup', 'private-label', 'resort', 'club', 'school']

export const ENTITY_KNOWS_ABOUT = [
  'SUP manufacturing',
  'custom paddle boards',
  'SUP product development',
  'SUP prototyping',
  'private label SUP',
  'custom SUP design',
  'OEM manufacturing',
  'resort SUP equipment',
  'club SUP equipment',
  'school SUP equipment',
  'SUP MOQ tiers',
  'SUP production lead time',
  'SUP quality control',
  'factory audit',
]

export const ENTITY_SUBJECT_OF = [
  { type: 'WebPage', name: 'Company entity', path: '/about/supsfactory-entity' },
  { type: 'WebPage', name: 'Proof Center — factory evidence', path: '/proof-center' },
  { type: 'WebPage', name: 'Factory & manufacturing capability', path: '/factory' },
  { type: 'WebPage', name: 'Quality, testing & certifications', path: '/quality' },
  { type: 'WebPage', name: 'SUP manufacturing capabilities', path: '/manufacturing-capabilities' },
  { type: 'WebPage', name: 'Factory verification', path: '/verify-factory' },
  { type: 'WebPage', name: 'Custom SUP MOQ & lead time', path: '/sup-oem-moq-lead-time' },
  { type: 'WebPage', name: 'New-brand trial order', path: '/new-brand-trial-order' },
  { type: 'CollectionPage', name: 'Projects', path: '/projects' },
  { type: 'CollectionPage', name: 'Knowledge Center', path: '/knowledge' },
]

export const PAGE_TITLES: Record<string, string> = {
  '/oem-manufacturing': 'OEM Manufacturing',
  '/odm-manufacturing': 'ODM Manufacturing',
  '/manufacturing-capabilities': 'SUP Manufacturing Capabilities',
  '/verify-factory': 'Factory Verification',
  '/oem-paddle': 'OEM Paddle Boards',
  '/solutions/rental-operators': 'Solutions: Rental Operators',
  '/solutions/retail-partners': 'Solutions: Retail Partners',
  '/solutions/distributors': 'Solutions: Distributors',
  '/b2b-solutions-matrix': 'B2B Solutions Matrix',
  '/sup-oem-moq-lead-time': 'Custom SUP MOQ & Lead Time',
  '/new-brand-trial-order': 'New-Brand Trial Order',
  '/oem-moq-guide': 'MOQ & Flexible Branding Guide',
  '/oem-trust-assurance': 'OEM Trust & Factory Assurance',
  '/oem-sup-moq': 'Inflatable SUP MOQ Explained',
  '/inflatable-sup-certification': 'SUP Certification Guide',
  '/what-is-sup': 'What is SUP',
}
