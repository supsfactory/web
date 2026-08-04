import type { Locale } from '@/features/i18n/locale'
import type { Localized } from './content'

/**
 * Project case studies (/projects/*). Real-project stories are the strongest
 * B2B manufacturing SEO content — each project carries industry → challenge →
 * solution → product → process → result, which search engines and AI answer
 * engines cite well.
 */

export interface ProjectData {
  slug: string
  navLabel: string
  metaTitle: string
  metaDescription: string
  kicker: string
  h1: string
  intro: string[]
  industry: string
  requirement: string
  challenge: string
  solution: string
  product: string
  process: { title: string; body: string }[]
  result: string
  outcome: string
  tags: string[]
}

export const projects: Localized<ProjectData[]> = {
  en: [
    {
      slug: 'resort-sup-fleet',
      navLabel: 'Luxury Resort SUP Fleet',
      metaTitle: 'Luxury Resort SUP Fleet Project | 100 Branded Paddle Boards — SUPsfactory',
      metaDescription:
        'How a luxury resort equipped its beach program with 100 branded SUP boards — custom graphics, rental-grade construction and seasonal fleet management.',
      kicker: 'Resort Project',
      h1: 'Luxury Resort SUP Fleet — 100 Branded Boards For Guest Experiences',
      intro: [
        'A luxury resort wanted its beach program to feel like part of the property — branded boards in the resort palette, durable enough for daily guest use and easy to store between seasons.',
      ],
      industry: 'Resort & Hospitality',
      requirement: '100 branded SUP boards for guest rental, in the property palette.',
      challenge:
        'Daily rental use wears out generic fleets fast, and off-season storage is limited. The resort needed boards that survive heavy use, store compactly and carry full property branding.',
      solution:
        'Rental-grade inflatable construction with reinforced rails and UV-resistant materials, full-board graphics in the resort colors, and branded paddles and pumps as part of the fleet package.',
      product: 'Custom inflatable SUP — 11′ all-around platform, branded deck graphics and accessories.',
      process: [
        { title: 'Fleet consultation', body: 'Guest volume, shoreline and season length defined the fleet size and board mix.' },
        { title: 'Branded sample', body: 'Colors and logo approved on a physical board before production.' },
        { title: 'Production & QC', body: '100 boards produced with multi-point QC across the run.' },
        { title: 'Delivery & refresh', body: 'Seasonal delivery, spare parts and a refresh program for later seasons.' },
      ],
      result:
        'The fleet launched on time for the season, boards store in a single room off-season, and guest feedback on the branded equipment drove a fleet expansion the following year.',
      outcome: 'On-time season launch, 100% branded fleet, expansion the next season.',
      tags: ['Branded guest fleet', 'Rental-grade construction', 'Seasonal refresh'],
    },
    {
      slug: 'private-label-launch',
      navLabel: 'Private Label Brand Launch',
      metaTitle: 'Private Label SUP Launch Project | Existing Brand Product Extension — SUPsfactory',
      metaDescription:
        'How an existing outdoor brand extended into SUP with a private label product line — from logo to first container, with scalable MOQ.',
      kicker: 'Private Label Project',
      h1: 'Private Label Launch — An Existing Brand Enters SUP',
      intro: [
        'A sports retailer with an established brand wanted to extend into paddle sports without building factory relationships — a sellable SUP line under its own name.',
      ],
      industry: 'Retail & Outdoor Brands',
      requirement: 'A private label SUP line — logo, colors and packaging on proven platforms, first run at 50pcs.',
      challenge:
        'No in-house SUP design team, no manufacturing experience, and a first order small enough to test the market before scaling.',
      solution:
        'Full product and packaging artwork developed from the brand assets, a 50pcs validation run, then scaling on the same verified platforms with tooling kept for the brand.',
      product: 'Private label inflatable SUP — branded deck, paddle, pump, backpack and printed cartons.',
      process: [
        { title: 'Brand intake', body: 'Logo, colors and brand guidelines turned into board and packaging artwork.' },
        { title: 'Sample approval', body: 'Physical sample confirmed finish, colors and packaging.' },
        { title: 'Validation run', body: '50pcs first run sold through before scaling.' },
        { title: 'Scale', body: 'Container-order production at consistent quality, designs owned by the brand.' },
      ],
      result:
        'The line sold through its validation run within one season and scaled to a container order — with the brand owning all designs and tooling.',
      outcome: 'Validated in one season, scaled to container orders.',
      tags: ['Brand extension', 'Packaging design', 'Scalable MOQ'],
    },
    {
      slug: 'club-team-boards',
      navLabel: 'Club Team Boards',
      metaTitle: 'Club Team SUP Boards Project | Branded Club Fleet Refresh — SUPsfactory',
      metaDescription:
        'How a paddling club rebranded and refreshed its fleet with 25 branded training boards — team graphics, parts support and consistent reorders.',
      kicker: 'Club Project',
      h1: 'Club Fleet Refresh — One Look Across The Team',
      intro: [
        'A paddling club rebranded and needed its equipment to match — a unified team fleet for training and regattas, without mismatched stock.',
      ],
      industry: 'Paddle Clubs & Teams',
      requirement: '25 branded training boards with club name, colors and logo, plus replacement parts.',
      challenge:
        'Existing fleet was mismatched and unbranded; budgets were tight and future expansion needed identical matching stock.',
      solution:
        'Club branding on every board, fleet pricing for the volume, and spare parts + repair guidance to extend board life.',
      product: 'Custom team SUP — training shape with club graphics, plus replacement fins and repair kits.',
      process: [
        { title: 'Club intake', body: 'Membership, session types and current equipment reviewed.' },
        { title: 'Board selection', body: 'Training and beginner shapes matched to the club program.' },
        { title: 'Branding', body: 'Club name, colors and logo printed across the fleet.' },
        { title: 'Delivery & grow', body: 'Fleet delivered with parts; identical reorder for expansion.' },
      ],
      result:
        'Members train on matching branded equipment, and the club extended the fleet the following season with an identical reorder at the same quality.',
      outcome: 'Unified fleet, identical expansion reorder.',
      tags: ['Club branding', 'Fleet pricing', 'Parts support'],
    },
    {
      slug: 'school-program-fleet',
      navLabel: 'School Program Fleet',
      metaTitle: 'School SUP Program Project | Beginner Fleet For Paddle Sports — SUPsfactory',
      metaDescription:
        'How a school launched a paddle sports elective with a 15-board beginner fleet and multi-person boards — safety-first equipment for instruction.',
      kicker: 'School Project',
      h1: 'School Program Launch — A Fleet Built For Instruction',
      intro: [
        'A school launching a paddle sports elective needed equipment that is stable and safe for first-timers, sized to classes, and easy to manage with limited staff.',
      ],
      industry: 'Education & Youth Programs',
      requirement: 'A beginner fleet for class sizes, including multi-person boards for first lessons.',
      challenge:
        'Mixed ability levels, strict safety needs, school procurement cycles and a budget that must cover future cohorts.',
      solution:
        'Wide high-volume beginner boards and multi-person boards, program pricing matched to class quantities, and clear user guidance for instructors.',
      product: 'Beginner SUP fleet — stable platforms with reinforced construction for long program life.',
      process: [
        { title: 'Program review', body: 'Class sizes, water area and instructor setup defined the package.' },
        { title: 'Package build', body: 'Board types and quantities matched to instruction.' },
        { title: 'Sample approval', body: 'Stability and construction verified on a physical board.' },
        { title: 'Deliver & renew', body: 'Bulk delivery, spare parts and reorders for new cohorts.' },
      ],
      result:
        'Instructors reported faster first-session progress on the stable platforms, and the program renewed equipment with a matching reorder the next year.',
      outcome: 'Faster learning curve, renewed equipment next year.',
      tags: ['Beginner fleet', 'Program launch', 'Renewal orders'],
    },
  ],
  zh: [
    {
      slug: 'resort-sup-fleet',
      navLabel: '豪华度假村 SUP 舰队',
      metaTitle: '豪华度假村 SUP 舰队项目 | 100 块品牌桨板 — SUPsfactory',
      metaDescription:
        '一家豪华度假村如何为其海滩项目配置 100 块品牌 SUP 板——定制图案、租赁级结构与季节性舰队管理。',
      kicker: '度假村项目',
      h1: '豪华度假村 SUP 舰队——100 块品牌板,提升客人体验',
      intro: [
        '一家豪华度假村希望海滩项目成为物业形象的一部分——采用度假村配色的品牌板,足以承受每日客用,淡季便于收纳。',
      ],
      industry: '度假村与酒店业',
      requirement: '100 块品牌 SUP 板用于客用租赁,采用物业配色。',
      challenge:
        '每日租赁使用会快速损耗通用舰队,淡季存储空间也有限。度假村需要经久耐用、收纳紧凑并带完整物业品牌的板体。',
      solution:
        '租赁级充气结构,强化边轨与抗 UV 材料,度假村配色的整板图案,品牌桨与气泵一并纳入舰队套餐。',
      product: '定制充气 SUP——11′ 全能板型,品牌板面图案与配件。',
      process: [
        { title: '舰队咨询', body: '客流量、水域与季节长度确定了舰队规模与板型组合。' },
        { title: '品牌样品', body: '量产前在实物板上确认配色与 Logo。' },
        { title: '生产与质检', body: '100 块板全程多节点质检生产。' },
        { title: '交付与更新', body: '季节性交付、配件与后续季节的更新计划。' },
      ],
      result:
        '舰队在季节开始前如期交付,淡季整批收进一间储藏室;品牌装备带来的客人好评推动次年舰队扩容。',
      outcome: '按时开季,100% 品牌舰队,次年扩容。',
      tags: ['品牌客用舰队', '租赁级结构', '季节更新'],
    },
    {
      slug: 'private-label-launch',
      navLabel: '贴牌品牌首发',
      metaTitle: '贴牌 SUP 首发项目 | 已有品牌产品线延伸 — SUPsfactory',
      metaDescription:
        '一个已有户外品牌如何通过贴牌产品线进入 SUP 领域——从 Logo 到第一个货柜,起订量可扩展。',
      kicker: '贴牌项目',
      h1: '贴牌首发——一个已有品牌进入 SUP',
      intro: [
        '一家拥有成熟品牌的运动零售商希望在桨板领域延伸,又不想自己经营工厂关系——以自有品牌推出一条可销售的 SUP 产品线。',
      ],
      industry: '零售与户外品牌',
      requirement: '一条贴牌 SUP 产品线——Logo、配色与包装印在成熟板型上,首批 50 片。',
      challenge:
        '没有自有 SUP 设计团队,没有制造经验,而首单又必须小到足以在市场验证后再放量。',
      solution:
        '从品牌素材开发完整板面与包装设计稿,先 50 片验证市场,再在同样验证过的平台上放量,模具与设计归品牌所有。',
      product: '贴牌充气 SUP——品牌板面、桨、气泵、背包与印刷纸箱。',
      process: [
        { title: '品牌导入', body: 'Logo、配色与品牌规范转化为板面与包装设计稿。' },
        { title: '样品确认', body: '实物样品确认工艺、配色与包装。' },
        { title: '验证批次', body: '50 片首单先行销售,验证市场。' },
        { title: '放量', body: '质量一致的货柜订单,设计全部归品牌所有。' },
      ],
      result: '产品线在一个季度内售罄验证批次,随后放量到货柜订单——品牌拥有全部设计与模具。',
      outcome: '一季度完成验证,放量至货柜订单。',
      tags: ['品牌延伸', '包装设计', '可扩展起订量'],
    },
    {
      slug: 'club-team-boards',
      navLabel: '俱乐部团队板',
      metaTitle: '俱乐部团队 SUP 板项目 | 品牌化俱乐部舰队更新 — SUPsfactory',
      metaDescription:
        '一家桨板俱乐部如何以 25 块品牌训练板完成舰队焕新——团队图案、配件支持与一致的复购。',
      kicker: '俱乐部项目',
      h1: '俱乐部舰队更新——全队统一的视觉',
      intro: [
        '一家桨板俱乐部完成品牌焕新,希望装备同步更新——用于训练与比赛的统一团队舰队,不再拼凑不匹配的现货。',
      ],
      industry: '桨板俱乐部与团队',
      requirement: '25 块带俱乐部名称、配色与 Logo 的品牌训练板,以及替换配件。',
      challenge:
        '现有舰队参差不齐、没有品牌;预算有限,而未来的扩容需要完全一致的匹配库存。',
      solution:
        '每块板都印上俱乐部品牌,批量价享受舰队优惠,并提供配件与维修指导延长板体寿命。',
      product: '定制团队 SUP——训练板型带俱乐部图案,含替换尾鳍与维修包。',
      process: [
        { title: '俱乐部导入', body: '梳理成员数量、活动类型与现有装备。' },
        { title: '板型选择', body: '训练与入门板型匹配俱乐部项目。' },
        { title: '品牌印刷', body: '俱乐部名称、配色与 Logo 覆盖整个舰队。' },
        { title: '交付与成长', body: '舰队与配件交付;扩容时以完全一致的复购进行。' },
      ],
      result: '成员使用统一的品牌装备训练,次年俱乐部以质量完全一致的复购扩充了舰队。',
      outcome: '统一舰队,复购扩展一致。',
      tags: ['俱乐部品牌', '舰队批量价', '配件支持'],
    },
    {
      slug: 'school-program-fleet',
      navLabel: '学校项目舰队',
      metaTitle: '学校 SUP 项目 | 桨板选修课入门舰队 — SUPsfactory',
      metaDescription:
        '一所学校如何以 15 块入门板与多人板开启桨板选修课——为教学打造的安全优先装备。',
      kicker: '学校项目',
      h1: '学校项目启动——为教学而生的舰队',
      intro: [
        '一所学校开设桨板选修课,需要适合初学者的稳定安全装备、匹配班级规模的数量,并且在有限人手下易于管理。',
      ],
      industry: '教育与青少年项目',
      requirement: '面向班级规模的入门舰队,首节课含多人板。',
      challenge:
        '学员水平参差、安全要求严格、学校采购周期长,而预算还要覆盖未来的多届学生。',
      solution:
        '宽体高排水量入门板与多人板,匹配班级数量的项目价格,并为教练提供清晰的使用指导。',
      product: '入门 SUP 舰队——加强结构的稳定板型,保障长期项目寿命。',
      process: [
        { title: '项目梳理', body: '班级规模、水域与教练配置确定套餐内容。' },
        { title: '套餐构建', body: '依据教学需求匹配板型与数量。' },
        { title: '样品确认', body: '在实物板上验证稳定性与结构。' },
        { title: '交付与续订', body: '批量交付、配件与面向新一届学生的复购。' },
      ],
      result: '教练反馈,稳定板型让首节课进步更快;次年项目以一致的复购更新了装备。',
      outcome: '学习曲线更快,次年装备续订。',
      tags: ['入门舰队', '项目启动', '续订订单'],
    },
  ],
}

export function getProject(locale: Locale, slug: string): ProjectData | undefined {
  return projects[locale].find((p) => p.slug === slug)
}

export interface ProjectsMeta {
  metaTitle: string
  metaDescription: string
  h1: string
}

export const projectsMeta: Localized<ProjectsMeta> = {
  en: {
    metaTitle: 'SUP Product Development Projects & Case Studies | SUPsfactory',
    metaDescription:
      'Real SUP manufacturing projects: how resorts, brands, clubs and schools turned product requirements into finished paddle boards with SUPsfactory.',
    h1: 'Projects — How We Develop SUP Products With Clients',
  },
  zh: {
    metaTitle: 'SUP 产品开发项目与案例 | SUPsfactory',
    metaDescription:
      '真实的 SUP 制造案例:度假村、品牌、俱乐部与学校如何与 SUPsfactory 将产品需求转化为成品桨板。',
    h1: '项目案例——我们与客户的产品开发过程',
  },
}
