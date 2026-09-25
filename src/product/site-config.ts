/**
 * Site configuration – centralized business constants.
 *
 * 此文件仅作抽象层，不删减原有 `facts.ts` 与 `content.ts` 的任何导出。
 * 所有原有通过 `FACTS` / `hero` 导入的方式均可继续使用，本模块提供
 * 相同数据的只读视图，便于框架化与多站点派生。
 */
import { FACTS, MOQ_SHORT, CERTIFICATION_NAMES, COLLABORATION_MODES } from './facts'

/** 从 facts.ts 导出的全部字段（逐一映射，防止任何遗漏） */
export const SITE_FACTS = {
  warehouseM2: FACTS.warehouseM2,
  workers: FACTS.workers,
  annualCapacity: FACTS.annualCapacity,
  moq: {
    trialStandard: MOQ_SHORT.trialStandard,
    standardRun: MOQ_SHORT.standardRun,
    customMould: MOQ_SHORT.customMould,
    existingPlatform: MOQ_SHORT.existingPlatform,
  },
  moqNote: FACTS.moqNote,
  moqExplanation: FACTS.moqExplanation,
  materialRollNote: FACTS.materialRollNote,
  collaborationModes: COLLABORATION_MODES,
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
    kicker: 'Qingdao, China Factory · OEM / ODM / Private Label · Samples to Batch Production',
    titlePre: 'Custom SUP Product Manufacturing for',
    titleAccent: 'Brands, Distributors & Organizations',
    titlePost: '',
    sub: 'OEM, ODM and private-label inflatable SUPs — from specification review and sample development to quality-controlled batch production in Qingdao, China.',
    ctaPrimary: 'Start Your SUP Project',
    ctaSecondary: 'View Factory, MOQ & Quality Evidence',
    ctaTertiary: '',
    ctaQuartiary: '',
    ctaMicro: 'Reply within 1 business day · NDA available before file exchange · MOQ confirmed after specification review',
    stats: [
      { value: '12,500 m²', label: 'In-house factory — Qingdao, China' },
      { value: '120,000+', label: 'Boards produced annually' },
      { value: '50+', label: 'Export countries served' },
      { value: FACTS.ndaWindow, label: 'NDA response window' },
    ],
    mockupLabel: 'Signature Platform',
    mockupBrand: "SUP Explorer 11'",
    mockupHint: 'Your graphics · your colors · your packaging',
    heroNote: FACTS.moqNote,
    float1: { value: '1–2 units', label: 'Sample & approval (before volume commitment)' },
    float2: { value: FACTS.leadTime, label: 'Production lead time (after PO)' },
  },
  es: {
    kicker: 'Fábrica en Qingdao, China · OEM / ODM / Marca privada · Muestras a producción en serie',
    titlePre: 'Fabricación de productos SUP a medida para',
    titleAccent: 'marcas, distribuidores y organizaciones',
    titlePost: '',
    sub: 'SUP hinchables OEM, ODM y marca privada — desde la revisión de especificaciones y desarrollo de muestras hasta la producción en serie con control de calidad en Qingdao, China.',
    ctaPrimary: 'Inicia tu proyecto de SUP',
    ctaSecondary: 'Ver fábrica, MOQ y evidencia de calidad',
    ctaTertiary: '',
    ctaQuartiary: '',
    ctaMicro: 'Respuesta en 1 día hábil · NDA disponible antes del intercambio de archivos · MOQ confirmado tras revisar la especificación',
    stats: [
      { value: '12.500 m²', label: 'Fábrica propia — Qingdao, China' },
      { value: '120.000+', label: 'Tablas producidas anualmente' },
      { value: '50+', label: 'Países de exportación' },
      { value: FACTS.ndaWindow, label: 'Plazo de respuesta NDA' },
    ],
    mockupLabel: 'Plataforma insignia',
    mockupBrand: "SUP Explorer 11'",
    mockupHint: 'Tus gráficos · tus colores · tu packaging',
    heroNote: FACTS.moqNoteEs,
    float1: { value: '1–2 uds.', label: 'Muestra y aprobación (antes de compromiso de volumen)' },
    float2: { value: FACTS.leadTime, label: 'Plazo de producción (tras PO)' },
  },
  it: {
    kicker: 'Fabbrica a Qingdao, Cina · OEM / ODM / Marchio privato · Dal campione alla produzione in serie',
    titlePre: 'Produzione di prodotti SUP su misura per',
    titleAccent: 'marchi, distributori e organizzazioni',
    titlePost: '',
    sub: 'SUP gonfiabili OEM, ODM e a marchio privato — dalla revisione delle specifiche e dallo sviluppo dei campioni alla produzione in serie con controllo qualità a Qingdao, Cina.',
    ctaPrimary: 'Avvia il tuo progetto SUP',
    ctaSecondary: 'Scopri fabbrica, MOQ ed evidenze di qualità',
    ctaTertiary: '',
    ctaQuartiary: '',
    ctaMicro: 'Risposta entro 1 giorno lavorativo · NDA disponibile prima dello scambio di file · MOQ confermato dopo la revisione della specifica',
    stats: [
      { value: '12.500 m²', label: 'Fabbrica di proprietà — Qingdao, Cina' },
      { value: '120.000+', label: 'Tavole prodotte ogni anno' },
      { value: '50+', label: 'Paesi di esportazione' },
      { value: FACTS.ndaWindow, label: 'Finestra di risposta NDA' },
    ],
    mockupLabel: 'Piattaforma di punta',
    mockupBrand: "SUP Explorer 11'",
    mockupHint: 'Le tue grafiche · i tuoi colori · il tuo packaging',
    heroNote: "Il MOQ è confermato dopo l’esame della specifica, perché costruzione, misura della tavola, struttura PVC, grafiche, imballaggio e accessori influiscono sull’uso del materiale.",
    float1: { value: '1–2 unità', label: "Campione e approvazione (prima dell’impegno di volume)" },
    float2: { value: FACTS.leadTime, label: 'Tempo di produzione (dopo il PO)' },
  },
  pt: {
    kicker: 'Fábrica em Qingdao, China · OEM / ODM / Marca própria · Das amostras à produção em série',
    titlePre: 'Fabrico de produtos SUP à medida para',
    titleAccent: 'marcas, distribuidores e organizações',
    titlePost: '',
    sub: 'SUP insufláveis OEM, ODM e de marca própria — desde a revisão de especificações e o desenvolvimento de amostras até à produção em série com controlo de qualidade em Qingdao, China.',
    ctaPrimary: 'Inicia o teu projeto SUP',
    ctaSecondary: 'Ver fábrica, MOQ e evidências de qualidade',
    ctaTertiary: '',
    ctaQuartiary: '',
    ctaMicro: 'Resposta em 1 dia útil · NDA disponível antes da troca de ficheiros · MOQ confirmado após a revisão da especificação',
    stats: [
      { value: '12.500 m²', label: 'Fábrica própria — Qingdao, China' },
      { value: '120.000+', label: 'Pranchas produzidas anualmente' },
      { value: '50+', label: 'Países de exportação' },
      { value: FACTS.ndaWindow, label: 'Janela de resposta NDA' },
    ],
    mockupLabel: 'Plataforma de referência',
    mockupBrand: "SUP Explorer 11'",
    mockupHint: 'As tuas gráficas · as tuas cores · a tua embalagem',
    heroNote: "O MOQ é confirmado após a revisão da especificação, porque a construção, o tamanho da prancha, a estrutura de PVC, as gráficas, a embalagem e os acessórios afetam o uso do material.",
    float1: { value: '1–2 unidades', label: 'Amostra e aprovação (antes do compromisso de volume)' },
    float2: { value: FACTS.leadTime, label: 'Tempo de produção (após o PO)' },
  },
  nl: {
    kicker: 'Fabriek in Qingdao, China · OEM / ODM / Privaat label · Van monster tot serieproductie',
    titlePre: 'Productie van SUP-producten op maat voor',
    titleAccent: 'merken, distributeurs en organisaties',
    titlePost: '',
    sub: 'Opblaasbare SUPs voor OEM, ODM en privaat label — van specificatiereview en monsterontwikkeling tot serieproductie met kwaliteitscontrole in Qingdao, China.',
    ctaPrimary: 'Start je SUP-project',
    ctaSecondary: 'Bekijk fabriek, MOQ en kwaliteitsbewijs',
    ctaTertiary: '',
    ctaQuartiary: '',
    ctaMicro: 'Reactie binnen 1 werkdag · NDA beschikbaar vóór het delen van bestanden · MOQ bevestigd na specificatiereview',
    stats: [
      { value: '12.500 m²', label: 'Eigen fabriek — Qingdao, China' },
      { value: '120.000+', label: 'Jaarlijks geproduceerde planken' },
      { value: '50+', label: 'Exportlanden' },
      { value: FACTS.ndaWindow, label: 'NDA-responstijd' },
    ],
    mockupLabel: 'Vlaggenschipplatform',
    mockupBrand: "SUP Explorer 11'",
    mockupHint: 'Jouw opdruk · jouw kleuren · jouw verpakking',
    heroNote: "Het MOQ wordt bevestigd na de specificatiereview, omdat constructie, boardmaat, PVC-structuur, opdruk, verpakking en accessoires van invloed zijn op het materiaalgebruik.",
    float1: { value: '1–2 stuks', label: 'Monster en goedkeuring (vóór volumeverplichting)' },
    float2: { value: FACTS.leadTime, label: 'Productietijd (na PO)' },
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