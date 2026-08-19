import { BRAND_COMPANY_NAME } from '@/config/branding'

export const ENTITY_FACTS: Record<string, { label: string; value: string }[]> = {
  en: [
    { label: 'Legal entity', value: BRAND_COMPANY_NAME },
    { label: 'Product focus', value: 'Inflatable SUP manufacturing — OEM, ODM & private label' },
    { label: 'Factories', value: '12,500 m² in-house plant in Qingdao, China' },
    { label: 'Minimum order', value: 'Tiered: 1–2 samples · 20–50 trial · 90–100+ volume' },
    { label: 'Markets', value: 'Worldwide — Europe, Americas, Asia, Oceania' },
    { label: 'Business model', value: 'B2B development & manufacturing' },
  ],
  es: [
    { label: 'Entidad legal', value: BRAND_COMPANY_NAME },
    { label: 'Enfoque de producto', value: 'Fabricación de SUP hinchables: OEM, ODM y etiqueta privada' },
    { label: 'Fábricas', value: 'Planta propia de 12.500 m² en Qingdao, China' },
    { label: 'Pedido mínimo', value: 'Escalonado: 1–2 muestras · 20–50 prueba · 90–100+ volumen' },
    { label: 'Mercados', value: 'Mundial: Europa, América, Asia, Oceanía' },
    { label: 'Modelo de negocio', value: 'Desarrollo y fabricación B2B' },
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
  { type: 'WebPage', name: 'Custom SUP MOQ & lead time', path: '/sup-oem-moq-lead-time' },
  { type: 'WebPage', name: 'New-brand trial order', path: '/new-brand-trial-order' },
  { type: 'CollectionPage', name: 'Projects', path: '/projects' },
  { type: 'CollectionPage', name: 'Knowledge Center', path: '/knowledge' },
]

export const PAGE_TITLES: Record<string, string> = {
  '/oem-manufacturing': 'OEM Manufacturing',
  '/odm-development': 'ODM Product Development',
  '/oem-paddle': 'OEM Paddle Boards',
  '/solutions/rental-operators': 'Solutions: Rental Operators',
  '/solutions/retail-partners': 'Solutions: Retail Partners',
  '/solutions/distributors': 'Solutions: Distributors',
  '/b2b-solutions-matrix': 'B2B Solutions Matrix',
  '/sup-oem-moq-lead-time': 'Custom SUP MOQ & Lead Time',
  '/new-brand-trial-order': 'New-Brand Trial Order',
  '/oem-moq-guide': 'MOQ & Flexible Branding Guide',
  '/oem-trust-assurance': 'OEM Trust & Factory Assurance',
  '/what-is-sup': 'What is SUP',
}
