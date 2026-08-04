import type { Locale } from '@/features/i18n/locale'
import type { Localized } from './content'
import { pick } from './content'

/**
 * Solutions system (/solutions/custom-sup, /solutions/private-label-sup,
 * /solutions/resort-sup, /solutions/club-sup, /solutions/school-sup).
 *
 * Every page follows the same business logic: scenario → problems →
 * solution → process → case study → FAQ → CTA. Each page carries a CTA
 * temperature instead of a hard "Request Quote" pitch:
 *   cold → Learn More · warm → Discuss Your Project · hot → Request Manufacturing Proposal
 */

export type CtaLevel = 'cold' | 'warm' | 'hot'

export interface SolutionPageData {
  slug: string
  navLabel: string
  metaTitle: string
  metaDescription: string
  kicker: string
  h1: string
  intro: string[]
  scenario: { title: string; body: string }
  pairs: { problem: string; solution: string }[]
  steps: { title: string; body: string }[]
  caseStudy: { title: string; body: string; tags: string[] }
  faqs: { q: string; a: string }[]
  ctaLevel: CtaLevel
}

export const solutionPages: Localized<SolutionPageData[]> = {
  en: [
    {
      slug: 'custom-sup',
      navLabel: 'Custom SUP Manufacturing',
      metaTitle: 'Custom SUP Manufacturer | OEM & ODM Paddle Board Production — SUPsfactory',
      metaDescription:
        'Custom SUP manufacturing for brands, clubs and organizations: your shapes, graphics and specs on proven platforms, from 50pcs per design, with samples, QC and worldwide delivery.',
      kicker: 'Custom SUP Manufacturer',
      h1: 'Custom SUP Manufacturing — From Your Idea to Finished Boards',
      intro: [
        'You need paddle boards built to your specification — shape, graphics, materials, packaging — without running a factory yourself. We are the manufacturing partner that takes your requirement and returns a deliverable product.',
        'Every project is handled by a dedicated specialist who manages design, samples, production and delivery, so you always know where your order stands.',
      ],
      scenario: {
        title: 'You need boards built to your specification',
        body: 'A product requirement — not a catalog pick. Your shape preferences, your graphics, your quality level, your packaging. We engineer, sample and produce it on proven platforms, with flexibility from the first small run.',
      },
      pairs: [
        {
          problem: 'Factory catalogs only offer stock designs you cannot change.',
          solution: 'We produce custom boards with your shapes, graphics and specifications — from first sample to full production runs.',
        },
        {
          problem: 'Big minimums lock you into inventory before the market is validated.',
          solution: 'Custom production starts from 50pcs per design, so first runs stay small while unit pricing stays fair.',
        },
        {
          problem: 'You have no design or engineering team on your side.',
          solution: 'Our in-house design and engineering team turns an idea, sketch or reference board into production-ready drawings.',
        },
        {
          problem: 'Unknown factory quality and slow communication.',
          solution: 'A project specialist owns samples, QC milestones and delivery timelines from start to finish — one point of contact, clear updates.',
        },
      ],
      steps: [
        { title: 'Submit your project', body: 'Tell us your requirements, or share sketches and reference images.' },
        { title: 'Design & sample', body: 'We develop drawings and ship a physical sample within 7–10 days.' },
        { title: 'Approve & produce', body: 'After your approval, production runs 30–45 days with multi-point QC.' },
        { title: 'Deliver & reorder', body: 'Worldwide export with professional packing, plus reorder support at consistent quality.' },
      ],
      caseStudy: {
        title: 'Outdoor brand product extension',
        body: 'An outdoor gear brand moved into paddle sports with a branded touring board. We developed the board from a rough sketch, reached sample approval in 10 days and shipped the first production run 40 days later.',
        tags: ['Board development', 'Branded graphics', 'First production run'],
      },
      faqs: [
        {
          q: 'What is the minimum order for custom SUP manufacturing?',
          a: 'Custom production starts from 50pcs per design. Larger quantities unlock better unit pricing, and reorders keep your tooling and designs.',
        },
        {
          q: 'What can be customized on a board?',
          a: 'Shape and dimensions, construction and materials, graphics and logos, EVA pad layout, accessories (paddle, pump, bag) and packaging.',
        },
        {
          q: 'Do you provide samples before production?',
          a: 'Yes — a physical sample is produced and approved before any production run. Sample time is typically 7–10 days.',
        },
        {
          q: 'Can you handle my brand assets only, without a full design team?',
          a: 'Yes. Our design team develops production-ready artwork from your logo, brand colors or a rough concept.',
        },
      ],
      ctaLevel: 'hot',
    },
    {
      slug: 'private-label-sup',
      navLabel: 'Private Label Paddle Boards',
      metaTitle: 'Private Label Paddle Boards | White Label SUP Manufacturing — SUPsfactory',
      metaDescription:
        'Launch a paddle board line under your own brand: your logo, colors and packaging on proven platforms, flexible MOQ from 50pcs, design and packaging support included.',
      kicker: 'Private Label Paddle Boards',
      h1: 'Private Label SUP — Your Brand on Proven Boards',
      intro: [
        'Private label production lets you launch a paddle board line under your own brand without investing in tooling or a factory. Your logo, colors and packaging go on quality-verified platforms, with quantities that grow with demand.',
        'We support the product side so you can focus on the brand side: design, packaging and reorder logistics are handled by us.',
      ],
      scenario: {
        title: 'You have a brand — and need a product under it',
        body: 'A brand identity without inventory. You want a sellable paddle board line carrying your name, at a quantity that matches your stage — from a first validation batch to repeat fleets.',
      },
      pairs: [
        {
          problem: 'Branding only on a sticker — the product still looks generic.',
          solution: 'Full brand integration: board graphics, logo, EVA pad layout, branded paddle, pump, bag and packaging.',
        },
        {
          problem: 'First orders force you to buy hundreds of units you may not sell.',
          solution: 'Flexible MOQ from 50pcs lets you validate the market before scaling.',
        },
        {
          problem: 'Design and packaging development feels out of reach.',
          solution: 'Your brand assets are turned into production-ready board and packaging artwork by our design team.',
        },
        {
          problem: 'Reorders drift in quality or availability.',
          solution: 'Tooling and designs stay yours, and reorders run on the same verified platforms at consistent quality.',
        },
      ],
      steps: [
        { title: 'Share your brand', body: 'Send your logo, colors and any existing brand assets.' },
        { title: 'Develop artwork', body: 'We design board graphics, EVA layout and packaging around your brand.' },
        { title: 'Approve sample', body: 'A physical sample confirms colors, finish and packaging.' },
        { title: 'Produce & deliver', body: 'Production runs to your quantity, with QC and export handled end to end.' },
      ],
      caseStudy: {
        title: 'New brand, first container',
        body: 'A sports retailer launched its own paddle board line from just a logo. We developed the full board and packaging artwork, produced a first run of 50pcs for market testing, then scaled to a container order within one season.',
        tags: ['Brand development', 'Packaging design', 'Scaled production'],
      },
      faqs: [
        {
          q: 'What is included in a private label SUP program?',
          a: 'Your brand on the board itself — graphics, logo, EVA pad — plus optional branded paddle, pump, backpack and packaging: a complete sellable product under your name.',
        },
        {
          q: 'Can the design change between orders?',
          a: 'Yes. Once brand assets are production-ready, reorders can refresh graphics, colors or packaging at any time.',
        },
        {
          q: 'We only have a logo. Can you still help?',
          a: 'Yes. Our design team develops the full board and packaging artwork from your logo and brand colors.',
        },
      ],
      ctaLevel: 'warm',
    },
    {
      slug: 'resort-sup',
      navLabel: 'Resort Paddle Boards',
      metaTitle: 'Resort Paddle Boards | Branded Guest SUP Fleets — SUPsfactory',
      metaDescription:
        'Branded paddle board fleets for resorts and hotels: durable, guest-friendly boards in your colors, storage-friendly inflatables, accessories and fleet reorder programs.',
      kicker: 'Resort Paddle Boards',
      h1: 'Resort SUP Fleets — Board Equipment Your Guests Remember',
      intro: [
        'Resort paddle board fleets need to survive daily guest use, store easily between seasons and carry your brand. We build durable, guest-friendly boards in your colors and structure the fleet program around your operation.',
        'Quantities are recommended from usage patterns, not guesses — and reorder programs keep the fleet fresh season after season.',
      ],
      scenario: {
        title: 'You run water activities for guests',
        body: 'Guests expect a memorable water experience, and the equipment represents your property. You need boards that are durable enough for daily rental, easy to store, and branded to match the resort.',
      },
      pairs: [
        {
          problem: 'Guest fleets wear out fast with daily rental use.',
          solution: 'Rental-grade construction with reinforced rails and UV-resistant materials built for repeated sessions.',
        },
        {
          problem: 'Storage space is limited outside the season.',
          solution: 'Storage-friendly inflatable options that pack into a closet when the season ends.',
        },
        {
          problem: 'Equipment looks generic, not like your property.',
          solution: 'Full-board graphics, logos and EVA branding in your resort colors — including branded accessories.',
        },
        {
          problem: 'Replacing and refreshing the fleet is uncoordinated.',
          solution: 'A fleet reorder program with consistent quality, spare parts support and honest quantity guidance.',
        },
      ],
      steps: [
        { title: 'Describe your operation', body: 'Guest volume, shoreline, storage and season length.' },
        { title: 'Get a fleet plan', body: 'We recommend board types and quantities based on usage patterns.' },
        { title: 'Approve branded sample', body: 'Your colors and logo confirmed on a physical board.' },
        { title: 'Receive and maintain', body: 'Delivery, spare parts and a reorder program for future seasons.' },
      ],
      caseStudy: {
        title: 'Coastal resort guest fleet',
        body: 'A coastal resort equipped its beach program with 40 branded inflatable boards in resort colors, including branded paddles and pumps. Boards store in a single closet off-season, and the fleet was refreshed after the second season at consistent quality.',
        tags: ['Branded guest fleet', 'Inflatable storage', 'Seasonal refresh'],
      },
      faqs: [
        {
          q: 'How many boards does a resort need?',
          a: 'Most resorts start with 20–50 boards and scale with demand. We recommend quantities based on your guest volume and shoreline, not guesses.',
        },
        {
          q: 'Are inflatable boards suitable for resort use?',
          a: 'Yes. Modern inflatable SUP boards are extremely durable and much easier to store and transport — the popular choice for resorts with limited storage.',
        },
        {
          q: 'Can the fleet carry our logo and colors?',
          a: 'Yes — full-board graphics, logo printing, EVA pad branding and branded accessories are all part of the resort program.',
        },
      ],
      ctaLevel: 'warm',
    },
    {
      slug: 'club-sup',
      navLabel: 'Custom SUP Team Boards',
      metaTitle: 'Custom SUP Team Boards | Branded Club Fleets — SUPsfactory',
      metaDescription:
        'Custom team SUP boards for paddling clubs: your club name, colors and logo on durable boards, team pricing, reorder support and spare parts.',
      kicker: 'Custom SUP Team Boards',
      h1: 'Custom SUP Team Boards — Equipment Your Club Is Proud Of',
      intro: [
        'Paddling clubs need boards that survive daily training, look like the team and stay consistent across reorders. We produce custom team boards with your club name and colors, at fleet-friendly pricing.',
        'Club programs also include the practical side: spare parts, repair guidance and reorder support at the same quality.',
      ],
      scenario: {
        title: 'Your club runs training and team sessions',
        body: 'Boards are used by members daily and represent the club at events and regattas. You want durable team equipment with club branding, without managing factory relationships yourself.',
      },
      pairs: [
        {
          problem: 'Training boards get heavy repeated use.',
          solution: 'Reinforced construction built for daily professional use, with repair guidance and spare parts support.',
        },
        {
          problem: 'Fleets look mismatched and unbranded.',
          solution: 'Club name, colors and logo printed on every board for a unified team fleet.',
        },
        {
          problem: 'Growing the fleet means hunting for matching stock.',
          solution: 'Reorders run on the same verified platforms, so new boards match existing ones.',
        },
        {
          problem: 'Fleet budgets are tight.',
          solution: 'Fleet pricing and a dedicated contact for reorders, parts and maintenance questions.',
        },
      ],
      steps: [
        { title: 'Tell us about the club', body: 'Number of members, session types and current equipment.' },
        { title: 'Choose board types', body: 'Training, beginner and team shapes matched to your program.' },
        { title: 'Add club branding', body: 'Your name, colors and logo on boards and accessories.' },
        { title: 'Order & grow', body: 'Fleet delivery, spare parts and consistent reorders.' },
      ],
      caseStudy: {
        title: 'Club fleet refresh',
        body: 'A paddling club rebranded and refreshed its fleet with 25 branded training boards and replacement parts. Members train on matching equipment, and the club extended the fleet the following season with an identical reorder.',
        tags: ['Club branding', 'Fleet refresh', 'Parts support'],
      },
      faqs: [
        {
          q: 'What boards are best for club training?',
          a: 'Stable, durable boards suited to your members’ level — wide beginner shapes for lessons, touring shapes for distance training.',
        },
        {
          q: 'Do you offer fleet pricing for clubs?',
          a: 'Yes — volume pricing applies to club fleets, with a dedicated contact for reorders, parts and maintenance questions.',
        },
        {
          q: 'Can damaged boards be repaired or replaced?',
          a: 'We provide replacement parts, repair guidance and reorder support so the fleet stays consistent.',
        },
      ],
      ctaLevel: 'cold',
    },
    {
      slug: 'school-sup',
      navLabel: 'School Paddle Board Program',
      metaTitle: 'School Paddle Board Program | SUP Equipment for Schools — SUPsfactory',
      metaDescription:
        'SUP equipment programs for schools: safe, stable boards for instruction, curriculum-friendly package options, program guidance and bulk supply for class sizes.',
      kicker: 'School Paddle Board Program',
      h1: 'School SUP Program — Equipment Built for Instruction',
      intro: [
        'Schools run paddle sports differently: large classes, mixed ability, strict safety needs and education budgets. Our school program provides stable, beginner-friendly boards, package options that fit class sizes, and guidance from an instructors’ perspective.',
        'Bulk supply and reorder support keep the equipment available year after year for new student cohorts.',
      ],
      scenario: {
        title: 'You teach paddle sports to students',
        body: 'Classes are large and ability levels vary. You need boards that are stable and safe for first-timers, quantities that match class sizes, and an equipment program that fits a school budget and procurement cycle.',
      },
      pairs: [
        {
          problem: 'Students need maximum stability on the water.',
          solution: 'Wide, high-volume beginner boards and multi-person boards designed to be forgiving for first-timers.',
        },
        {
          problem: 'Class sizes demand consistent equipment at scale.',
          solution: 'Bulk program pricing for class quantities, with the same quality across every board.',
        },
        {
          problem: 'Instructors manage safety with limited help.',
          solution: 'Boards come with clear user guidance, and we advise on quantities and layouts for your water area.',
        },
        {
          problem: 'Equipment must survive multiple student cohorts.',
          solution: 'Reinforced construction plus spare parts and reorder support for long program life.',
        },
      ],
      steps: [
        { title: 'Share your program', body: 'Class sizes, water area, instructor setup and budget cycle.' },
        { title: 'Build the package', body: 'Board types and quantities matched to instruction, not guesses.' },
        { title: 'Approve sample', body: 'Verify stability, construction and finish on a physical board.' },
        { title: 'Deliver & renew', body: 'Bulk delivery, spare parts and reorders for new cohorts.' },
      ],
      caseStudy: {
        title: 'School water sports program',
        body: 'A school launched a paddle sports elective with a 15-board beginner fleet and multi-person boards for first lessons. Instructors reported faster first-session progress on the stable platforms, and the program renewed equipment with a matching reorder the next year.',
        tags: ['Beginner fleet', 'Program launch', 'Renewal orders'],
      },
      faqs: [
        {
          q: 'What boards are best for school SUP lessons?',
          a: 'Wide, stable beginner boards and multi-person boards are ideal — their volume makes them forgiving for first-timers and stable under several riders.',
        },
        {
          q: 'Can quantities match our class sizes?',
          a: 'Yes — program pricing is built around class quantities, and we recommend numbers based on your water area and rotation.',
        },
        {
          q: 'Do you work with school procurement timelines?',
          a: 'Yes. We plan sample and production lead times around school budget and season cycles.',
        },
      ],
      ctaLevel: 'cold',
    },
  ],
  zh: [
    {
      slug: 'custom-sup',
      navLabel: '定制 SUP 制造',
      metaTitle: '定制 SUP 制造商 | OEM & ODM 桨板生产 — SUPsfactory',
      metaDescription:
        '面向品牌、俱乐部与机构的定制 SUP 制造:在成熟板型上实现你的板型、图案与规格,每个设计 50 片起订,含样品、质检与全球交付。',
      kicker: '定制 SUP 制造商',
      h1: '定制 SUP 制造——从你的想法到成品交付',
      intro: [
        '你需要按自己的规格生产桨板——板型、图案、材料、包装——而不必自己经营工厂。我们就是那个制造伙伴:接收你的需求,交付成品。',
        '每个项目由专属专员负责设计、打样、生产与交付,让你随时清楚订单进度。',
      ],
      scenario: {
        title: '你需要按规格生产的桨板',
        body: '这是一个产品需求,而不是目录选择。你的板型偏好、你的图案、你的质量要求、你的包装。我们在成熟平台上完成工程、打样与生产,从小批量开始保持灵活。',
      },
      pairs: [
        {
          problem: '工厂目录只有无法改动的现成设计。',
          solution: '我们按你的板型、图案与规格生产定制板——从首件样品到完整量产。',
        },
        {
          problem: '大起订量在市场验证前就把你锁进了库存。',
          solution: '定制生产每个设计 50 片起订,首批规模小,而单价依然公道。',
        },
        {
          problem: '你这边没有设计或工程团队。',
          solution: '我们自有设计与工程团队,把你的想法、草图或参考板变成可生产的图纸。',
        },
        {
          problem: '工厂质量未知,沟通缓慢。',
          solution: '专属项目专员全流程负责样品、质检节点与交付周期——单一对接人,进度透明。',
        },
      ],
      steps: [
        { title: '提交项目', body: '告诉我们你的需求,或分享草图与参考图。' },
        { title: '设计并打样', body: '我们开发图纸,并在 7–10 天内寄出实物样品。' },
        { title: '确认并量产', body: '样品确认后,量产 30–45 天,全程多节点质检。' },
        { title: '交付与复购', body: '专业包装全球发货,复购支持保持质量一致。' },
      ],
      caseStudy: {
        title: '户外品牌产品线延伸',
        body: '一个户外装备品牌凭借一块品牌旅行板进入桨板运动。我们从粗略草图开始开发板体,10 天达成样品确认,40 天后交付首批量产。',
        tags: ['板体开发', '品牌图案', '首批量产'],
      },
      faqs: [
        {
          q: '定制 SUP 制造的最低起订量是多少?',
          a: '定制生产每个设计 50 片起订。数量越大单价越优,复购时模具与设计继续保留。',
        },
        {
          q: '一块板可以定制哪些部分?',
          a: '板型与尺寸、结构与材料、图案与 Logo、EVA 防滑垫布局、配件(桨、气泵、背包)与包装。',
        },
        {
          q: '量产前会提供样品吗?',
          a: '会——量产前必须先生产并确认实物样品,打样通常需要 7–10 天。',
        },
        {
          q: '我们没有完整设计团队,只有品牌素材,能合作吗?',
          a: '可以。我们的设计团队根据你的 Logo、品牌色或粗略概念开发可量产的设计稿。',
        },
      ],
      ctaLevel: 'hot',
    },
    {
      slug: 'private-label-sup',
      navLabel: '贴牌桨板',
      metaTitle: '贴牌桨板 | SUP 白牌制造 — SUPsfactory',
      metaDescription:
        '以你自己的品牌推出桨板产品线:Logo、配色与包装印在成熟板型上,50 片起订,含设计与包装支持。',
      kicker: '贴牌桨板',
      h1: '贴牌 SUP——成熟板型上的你的品牌',
      intro: [
        '贴牌生产让你无需投资模具或工厂,就能推出自有品牌的桨板产品线。你的 Logo、配色与包装印在经品质验证的平台上,数量随需求增长。',
        '我们负责产品一侧,让你专注于品牌一侧:设计、包装与复购物流都由我们处理。',
      ],
      scenario: {
        title: '你有品牌——需要品牌下的产品',
        body: '一个没有库存的品牌身份。你想要一条以你的名字命名的可销售桨板产品线,数量与你的阶段匹配——从首批发货验证到复购舰队。',
      },
      pairs: [
        {
          problem: '品牌只体现在贴纸上——产品看起来仍然千篇一律。',
          solution: '完整品牌整合:板面图案、Logo、EVA 防滑垫布局、品牌桨、气泵、背包与包装。',
        },
        {
          problem: '首批订单逼你采购可能卖不完的几百片。',
          solution: '50 片起订,让你在放量之前先验证市场。',
        },
        {
          problem: '设计与包装开发看起来遥不可及。',
          solution: '我们的设计团队把你的品牌素材变成可量产的板面与包装设计稿。',
        },
        {
          problem: '复购在质量或交期上不稳定。',
          solution: '模具与设计归你所有,复购在同样验证过的平台上以一致质量进行。',
        },
      ],
      steps: [
        { title: '分享你的品牌', body: '发送你的 Logo、配色与现有品牌素材。' },
        { title: '开发设计稿', body: '我们围绕你的品牌设计板面图案、EVA 布局与包装。' },
        { title: '确认样品', body: '实物样品确认颜色、工艺与包装。' },
        { title: '生产与交付', body: '按你的数量生产,质检与出口全流程负责。' },
      ],
      caseStudy: {
        title: '新品牌,第一个货柜',
        body: '一家运动零售商仅凭一个 Logo 推出了自己的桨板产品线。我们完成整套板面与包装设计,先生产 50 片测试市场,随后一个季度内放量到货柜订单。',
        tags: ['品牌开发', '包装设计', '放量生产'],
      },
      faqs: [
        {
          q: '贴牌 SUP 项目包含什么?',
          a: '品牌体现在板身本身——图案、Logo、EVA 防滑垫——以及可选品牌桨、气泵、背包与包装:一件以你的名字命名的完整可销售产品。',
        },
        {
          q: '订单之间可以修改设计吗?',
          a: '可以。品牌素材完成可量产化后,复购时随时可以更新图案、配色或包装。',
        },
        {
          q: '我们只有 Logo,你们能帮忙吗?',
          a: '可以。我们的设计团队仅凭你的 Logo 与品牌色就能完成整套板面与包装设计稿。',
        },
      ],
      ctaLevel: 'warm',
    },
    {
      slug: 'resort-sup',
      navLabel: '度假村桨板',
      metaTitle: '度假村桨板 | 品牌化客用 SUP 舰队 — SUPsfactory',
      metaDescription:
        '面向度假村与酒店的品牌化桨板舰队:耐用、易上手的板型,度假村配色,便于收纳的充气板、配件与舰队复购计划。',
      kicker: '度假村桨板',
      h1: '度假村 SUP 舰队——让客人记住的水上装备',
      intro: [
        '度假村桨板舰队需要经受每日客用、淡季轻松收纳,并承载你的品牌。我们生产耐用、易上手、带度假村配色的板体,并围绕你的运营规划舰队方案。',
        '数量依据使用规律建议,而不是猜测——复购计划让舰队一季接一季保持常新。',
      ],
      scenario: {
        title: '你为客人运营水上活动',
        body: '客人期待难忘的水上体验,而装备代表着你的酒店形象。你需要足够耐用、便于收纳、并带有度假村品牌标识的板体。',
      },
      pairs: [
        {
          problem: '每日租赁使用让客用舰队快速损耗。',
          solution: '租赁级结构,强化边轨与抗 UV 材料,为反复使用设计。',
        },
        {
          problem: '淡季存储空间有限。',
          solution: '便于收纳的充气板选项,季末可收进储藏间。',
        },
        {
          problem: '装备看起来千篇一律,不像你的物业。',
          solution: '整板图案、Logo 与 EVA 品牌定制,采用度假村配色——含品牌配件。',
        },
        {
          problem: '舰队的更换与更新缺乏统筹。',
          solution: '舰队复购计划:质量一致、配件支持与务实的数量建议。',
        },
      ],
      steps: [
        { title: '描述你的运营', body: '客流量、水域、存储条件与季节长度。' },
        { title: '获取舰队方案', body: '我们依据使用规律推荐板型与数量。' },
        { title: '确认品牌样品', body: '在实物板上确认你的配色与 Logo。' },
        { title: '接收与维护', body: '交付、配件与未来季节的复购计划。' },
      ],
      caseStudy: {
        title: '海滨度假村客用舰队',
        body: '一家海滨度假村为海滩项目配置了 40 块度假村配色的品牌充气板,含品牌桨与气泵。淡季整批收进一间储藏室,第二季后以一致质量完成舰队更新。',
        tags: ['品牌客用舰队', '充气板收纳', '季节更新'],
      },
      faqs: [
        {
          q: '度假村需要多少块板?',
          a: '大多数度假村从 20–50 块起步,随需求增长。我们依据客流量与水域给出建议,而不是猜测。',
        },
        {
          q: '充气板适合度假村使用吗?',
          a: '适合。现代充气 SUP 板非常耐用,且存放与运输容易得多——是存储空间有限的度假村的热门选择。',
        },
        {
          q: '舰队可以带上我们的 Logo 与配色吗?',
          a: '可以——整板图案、Logo 印刷、EVA 防滑垫品牌定制与品牌配件都是度假村项目的一部分。',
        },
      ],
      ctaLevel: 'warm',
    },
    {
      slug: 'club-sup',
      navLabel: '俱乐部定制团队板',
      metaTitle: '俱乐部定制团队板 | 品牌化俱乐部舰队 — SUPsfactory',
      metaDescription:
        '面向桨板俱乐部的定制团队板:俱乐部名称、配色与 Logo 印在耐用的板体上,团队批量价、复购支持与配件供应。',
      kicker: '俱乐部定制团队板',
      h1: '俱乐部定制团队板——让俱乐部引以为傲的装备',
      intro: [
        '桨板俱乐部需要能承受每日训练、像团队一样整齐、复购保持一致性的板体。我们生产带有俱乐部名称与配色的定制团队板,享受舰队友好价格。',
        '俱乐部项目同样包含务实的一面:配件、维修指导与质量一致的复购支持。',
      ],
      scenario: {
        title: '你的俱乐部开展训练与团队活动',
        body: '板体被成员每日使用,并在活动与比赛中代表俱乐部形象。你想要带俱乐部品牌、耐用且无需亲自管理工厂关系的团队装备。',
      },
      pairs: [
        {
          problem: '训练板承受大量反复使用。',
          solution: '为每日专业使用设计的加强结构,附维修指导与配件支持。',
        },
        {
          problem: '舰队看起来参差不齐、没有品牌。',
          solution: '每块板都印上俱乐部名称、配色与 Logo,组成统一的团队舰队。',
        },
        {
          problem: '扩充舰队时要四处寻找匹配的现货。',
          solution: '复购在同样验证过的平台上进行,新板与现有板保持一致。',
        },
        {
          problem: '舰队预算有限。',
          solution: '舰队批量价格,并有专属对接人处理复购、配件与维护问题。',
        },
      ],
      steps: [
        { title: '介绍你的俱乐部', body: '成员数量、活动类型与现有装备。' },
        { title: '选择板型', body: '训练、入门与团队板型,匹配你的项目。' },
        { title: '加入俱乐部品牌', body: '名称、配色与 Logo 印在板体与配件上。' },
        { title: '下单与成长', body: '舰队交付、配件与质量一致的复购。' },
      ],
      caseStudy: {
        title: '俱乐部舰队更新',
        body: '一家桨板俱乐部完成品牌焕新,以 25 块品牌训练板与替换配件更新舰队。成员使用统一的装备训练,次年俱乐部以完全一致的复购扩充了舰队。',
        tags: ['俱乐部品牌', '舰队更新', '配件支持'],
      },
      faqs: [
        {
          q: '俱乐部训练最适合什么板?',
          a: '适合成员水平、稳定耐用的板——课程用宽入门板,距离训练用旅行板。',
        },
        {
          q: '俱乐部有舰队批量价格吗?',
          a: '有——俱乐部舰队享受批量价格,并有专属对接人处理复购、配件与维护问题。',
        },
        {
          q: '损坏的板可以维修或更换吗?',
          a: '我们提供替换配件、维修指导与复购支持,保证舰队一致性。',
        },
      ],
      ctaLevel: 'cold',
    },
    {
      slug: 'school-sup',
      navLabel: '学校桨板项目',
      metaTitle: '学校桨板项目 | 面向学校的 SUP 装备 — SUPsfactory',
      metaDescription:
        '面向学校的 SUP 装备项目:安全稳定的教学板型、匹配班级规模的套餐选项、项目指导与批量供应。',
      kicker: '学校桨板项目',
      h1: '学校 SUP 项目——为教学而生的装备',
      intro: [
        '学校开展桨板运动的方式不同:大班教学、水平参差、严格的安全要求与教育预算。我们的学校项目提供稳定、易上手的板型,匹配班级规模的套餐选项,以及站在教练视角的指导。',
        '批量供应与复购支持让装备一年又一年地服务新一届学生。',
      ],
      scenario: {
        title: '你向学生教授桨板运动',
        body: '班级人数多,能力水平不一。你需要对初学者稳定安全的板、匹配班级规模的板数,以及适合学校预算与采购周期的装备项目。',
      },
      pairs: [
        {
          problem: '学生在水面上需要最大程度的稳定。',
          solution: '宽体高排水量入门板与多人板,为初学者设计,容错性高。',
        },
        {
          problem: '班级规模要求装备数量充足且一致。',
          solution: '面向班级数量的批量项目价格,每一块板质量一致。',
        },
        {
          problem: '教练在有限的协助下保障安全。',
          solution: '板体附带清晰的使用指导,我们并为你的水域提供数量与布局建议。',
        },
        {
          problem: '装备要经受多届学生使用。',
          solution: '加强结构加上配件与复购支持,延长项目装备寿命。',
        },
      ],
      steps: [
        { title: '分享你的项目', body: '班级规模、水域、教练配置与预算周期。' },
        { title: '构建套餐', body: '依据教学需求匹配板型与数量,而不是猜测。' },
        { title: '确认样品', body: '在实物板上验证稳定性、结构与工艺。' },
        { title: '交付与续订', body: '批量交付、配件与面向新一届学生的复购。' },
      ],
      caseStudy: {
        title: '学校水上运动项目',
        body: '一所学校以 15 块入门板与多人板开启桨板选修课。教练反馈,稳定板型让首节课进步更快,次年项目以一致的复购更新了装备。',
        tags: ['入门舰队', '项目启动', '续订订单'],
      },
      faqs: [
        {
          q: '学校 SUP 课程最适合什么板?',
          a: '宽而稳定的入门板与多人板最理想——充足的排水量让初学者更容易上手,多人站立时也更稳定。',
        },
        {
          q: '数量可以匹配我们的班级规模吗?',
          a: '可以——项目价格围绕班级数量构建,我们会依据水域与轮换给出数量建议。',
        },
        {
          q: '你们能配合学校的采购周期吗?',
          a: '能。我们会围绕学校预算与季节周期规划打样与生产周期。',
        },
      ],
      ctaLevel: 'cold',
    },
  ],
}

export function getSolutionPage(locale: Locale, slug: string): SolutionPageData | undefined {
  return pick(solutionPages, locale).find((p) => p.slug === slug)
}
