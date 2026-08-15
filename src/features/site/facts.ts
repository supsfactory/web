/**
 * SUPsfactory 事实卡（Fact Card）——全站引用的唯一事实真值源。
 *
 * 数字口径以 /factory 页面（青岛工厂运营数据）为准，任何页面引用 MOQ、交期、
 * 样品周期等运营数字都必须从这里取值或在文案里与之保持一致，禁止多套口径。
 * 本模块同时承载对外统一 Company Boilerplate（首页 / About / llms.txt / Schema），
 * 保证 SUPsfactory 在 AI 检索与采购方眼中的身份一致：制造工厂，而非品牌顾问。
 */
export const FACTS = {
  warehouseM2: '12,500 m²',
  workers: '350+',
  annualCapacity: '120,000+ units',
  // ── MOQ 分档（来自 factory.yaml FAQ/产线卡片）──
  moq: {
    trialStandard: '20–50 pcs', // 试点小批量（pilot）
    standardRun: '90–100+ pcs', // 标准量产（每 150 m 卷）
    customMould: '90–100+ pcs', // 开模定制款（量级档）
  },
  // ── 交期 ──
  leadTime: '25–35 days', // 确认 PO 及定金后，批量生产
  leadTimeDetail: '25–35 days from confirmed PO and deposit; custom mould development adds 15–20 days for tooling.',
  // ── 样品 ──
  sampleTime: '7–12 days',
  // ── 硬指标（/factory 最有价值的资产）──
  cncAccuracy: '0.1 mm',
  rfPower: '15 kW',
  dropStitchPsi: '12–15 PSI',
  evaHardness: '45–55 Shore C', // EVA 甲板垫硬度（技术规格引用）
  assemblyChecklist: '100-point',
  pressureTest: '18.0 PSI · 24h hold',
  pressureReject: '>0.50 PSI/24h pressure drop (auto-reject)',
  traceabilityRet: '10 years',
  certifications: ['BSCI', 'ISO 9001', 'ISO 25649', 'CE', 'REACH', 'RoHS'],
  exportCountries: '50+',
  workshops: '4 specialized workshops',
  productionLines: '4 automated lines',
  monthlyCapacity: '10,000 boards/month',
  ndaWindow: '4 business hours',
  qualityGates: '7-stage (Node 01–07)',
  thirdPartyInspectors: ['SGS', 'TÜV', 'BV', 'Intertek'],
  samplingStandard: 'ISO 2859-1 Level II',
  peakSeason: 'October–April',
  // ── 社媒主页（Organization sameAs + footer 链接的唯一来源）──
  social: {
    facebook: 'https://www.facebook.com/supsfactory',
    linkedin: 'https://www.linkedin.com/company/supsfactory',
    youtube: 'https://www.youtube.com/@supsfactory',
  },
  // ── 公开联系信息（footer 唯一来源）──
  contact: {
    whatsapp: '+86 13305324192',
    whatsappLink: 'https://wa.me/8613305324192',
    address: 'Economic Development Zone, Laixi, Qingdao, China, 266600',
  },
  // ── 全站拔萃内蒙古联：Company Boilerplate（逐字复用）──
  boilerplate:
    'SUPsfactory is the SUP product development and manufacturing division of Afarer (Qingdao Vatrad Group Co., Ltd.), a 12,500 m² inflatable manufacturing plant in Qingdao, China.',
  buildLine:
    'We build SUP boards to your specification — engineering, tooling, sampling, production and export. You own the brand, the market and the customer; we own the manufacturing.',
  notRob:
    'We do not sell to end consumers and we do not compete with our clients in any market.',
  // 首页 hero 副标题（替换“赋能平台”语气）
  tagline:
    'Engineering, tooling, sampling and production for SUP brands, distributors and sourcing teams. You bring the brand — we build the boards.',
  taglineEs:
    'Ingeniería, utillaje, muestras y producción para marcas de SUP, distribuidores y equipos de compra. Tú traes la marca — nosotros fabricamos las tablas.',
} as const

export type FactLiteral = (typeof FACTS)[keyof typeof FACTS]