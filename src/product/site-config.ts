/**
 * Site configuration – centralized business constants.
 *
 * 此文件仅作抽象层，不删减原有 `facts.ts` 与 `content.ts` 的任何导出。
 * 所有原有通过 `FACTS` / `hero` 导入的方式均可继续使用，本模块提供
 * 相同数据的只读视图，便于框架化与多站点派生。
 */
import { FACTS, MOQ_SHORT, CERTIFICATION_NAMES, COLLABORATION_MODES } from './facts'
import { hero } from './content'

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

/**
 * 从 content.ts hero 区块导出的全部字段
 *
 * This used to be a hand-copied table of the same seventeen keys. It had
 * frozen at twelve of the eighteen locales, its copy had drifted from the
 * block it mirrored, and nothing here carried the Localized<> annotation, so
 * the parity check never looked at it - which is how it still held the
 * English FACTS.ndaWindow and FACTS.leadTime values that 40d0250 removed
 * everywhere else. Aliasing the canonical block keeps the documented export
 * and puts it back under check:locale-parity, with no second copy to drift.
 */
export const HERO_CONTENT = hero

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