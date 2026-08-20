/**
 * Site configuration – centralized business constants.
 *
 * 此文件仅作抽象层，不删减原有 `facts.ts` 与 `content.ts` 的任何导出。
 * 所有原有通过 `FACTS` / `hero` 导入的方式均可继续使用，本模块提供
 * 相同数据的只读视图，便于框架化与多站点派生。
 */
import { FACTS, MOQ_SHORT, CERTIFICATION_NAMES } from './facts'

/** 从 facts.ts 导出的全部字段（逐一映射，防止任何遗漏） */
export const SITE_FACTS = {
  warehouseM2: FACTS.warehouseM2,
  workers: FACTS.workers,
  annualCapacity: FACTS.annualCapacity,
  moq: {
    trialStandard: MOQ_SHORT.trialStandard,
    standardRun: MOQ_SHORT.standardRun,
    customMould: MOQ_SHORT.customMould,
  },
  leadTime: FACTS.leadTime,
  leadTimeDetail: FACTS.leadTimeDetail,
  sampleTime: FACTS.sampleTime,
  cncAccuracy: FACTS.cncAccuracy,
  rfPower: FACTS.rfPower,
  dropStitchPsi: FACTS.dropStitchPsi,
  evaHardness: FACTS.evaHardness,
  assemblyChecklist: FACTS.assemblyChecklist,
  pressureTest: FACTS.pressureTest,
  pressureReject: FACTS.pressureReject,
  traceabilityRet: FACTS.traceabilityRet,
  certifications: CERTIFICATION_NAMES,
  exportCountries: FACTS.exportCountries,
  workshops: FACTS.workshops,
  productionLines: FACTS.productionLines,
  monthlyCapacity: FACTS.monthlyCapacity,
  ndaWindow: FACTS.ndaWindow,
  qualityGates: FACTS.qualityGates,
  thirdPartyInspectors: FACTS.thirdPartyInspectors,
  samplingStandard: FACTS.samplingStandard,
  peakSeason: FACTS.peakSeason,
  social: FACTS.social,
  contact: FACTS.contact,
  boilerplate: FACTS.boilerplate,
  tagline: FACTS.tagline,
  taglineEs: FACTS.taglineEs,
  notRob: FACTS.notRob,
}

/** 从 content.ts hero 区块导出的全部字段 */
export const HERO_CONTENT = {
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
      { value: '120,000+', label: 'Tablas producidas anualmente' },
      { value: '12,500 m²', label: 'Planta industrial — 4 talleres' },
      { value: '4', label: 'Workshops especializados' },
      { value: '50+', label: 'Países con exportación' },
    ],
    mockupLabel: 'Plataforma Signature',
    mockupBrand: "SUP Explorer 11'",
    mockupHint: 'Tus gráficos · tus colores · tu packaging',
    heroNote:
      'SUPSfactory es un fabricante de SUP a medida en Qingdao (Laixi), China — la división inflable de Afarer (Qingdao Vatrad Group). Gestionamos programas OEM, ODM y marca privada desde una planta de 12,500 m² con capacidad de 120,000+ tablas al año. Las pruebas de ensayo comienzan con 1–2 tablas, pilotos con 20–50， y el volumen estándar de MOQ desde 90–100 tablas por diseño.',
    float1: { value: '90–100 pcs', label: 'Volumen estándar de MOQ (por rollo de 150 m)' },
    float2: { value: FACTS.leadTime, label: 'Tiempo de producción ( después de la orden de compra)' },
  },
}

/** 供 Seo 模块使用的简化映射（仅读，不修改 PUBLIC_PATHS/HREFLANG/OG_*） */
export const siteConfig = {
  facts: SITE_FACTS,
  hero: HERO_CONTENT,
}

/**
 * 保持全局兼容：确保原有 import 仍然有效。
 * 此处仅作演示；实际使用时 seo.ts 可根据需要引入 siteConfig.facts / siteConfig.hero
 * 而非直接依赖 facts.ts / content.ts 的原始导出，以实现未来的框架化改动。
 */
export type { Locale } from '@/features/i18n/locale'