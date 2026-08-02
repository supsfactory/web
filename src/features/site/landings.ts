import type { Locale } from '@/features/i18n/locale'
import type { Localized } from './content'
import { pick } from './content'

/**
 * SEO landing pages (/custom-sup-manufacturing, /private-label-sup,
 * /sup-for-resorts, /sup-for-clubs, /sup-startup-brands).
 *
 * Each entry drives a dedicated bilingual route (see
 * src/routes/{-$locale}/<slug>.tsx via <SeoLandingPage slug>). The copy here
 * targets both classic search (sitemap + meta) and AI answer engines
 * (question-answer pairs), all in plain business language.
 */

export interface Landing {
  slug: string
  metaTitle: string
  metaDescription: string
  kicker: string
  h1: string
  intro: string[]
  bullets: string[]
  faqs: { q: string; a: string }[]
  ctaTitle: string
  ctaButton: string
}

const landings: Localized<Landing[]> = {
  en: [
    {
      slug: 'custom-sup-manufacturing',
      metaTitle: 'Custom SUP Manufacturing | OEM & ODM SUP Factory — SUPsfactory',
      metaDescription:
        'Custom SUP manufacturing for startups, clubs, resorts and businesses. Low MOQ from 50pcs, OEM & ODM production, design support and worldwide export.',
      kicker: 'Custom SUP Manufacturing',
      h1: 'Custom SUP Manufacturing, Built Around Your Brand',
      intro: [
        'SUPsfactory is a custom SUP manufacturer helping brands, clubs, resorts and businesses produce their own paddleboards. From low-MOQ first runs to full private-label programs, we handle design, tooling, production, QC and export — so you can focus on building your brand.',
        'Unlike factory catalog suppliers, we structure every project around your business: flexible minimums, dedicated project specialists and a complete product package that includes the board, paddle, pump, backpack and branding.',
      ],
      bullets: [
        'Low MOQ from 50pcs per design',
        'OEM & ODM production on proven platforms',
        'In-house design and artwork support',
        'Complete packages: board, paddle, pump, bag',
        'Multi-point QC on every production run',
        'Worldwide export with professional packing',
      ],
      faqs: [
        {
          q: 'What is the minimum order quantity for custom SUP manufacturing?',
          a: 'Our standard custom production starts from 50pcs per design, which keeps the first investment small while maintaining fair pricing. Larger quantities unlock better unit prices.',
        },
        {
          q: 'What is the difference between OEM and ODM?',
          a: 'With OEM you produce an existing, proven platform under your brand. With ODM we develop a board to your specification — shape, materials, graphics and packaging. We support both paths.',
        },
        {
          q: 'How long does a custom SUP production order take?',
          a: 'Samples typically take 7–10 days, and production takes 30–45 days after design and sample approval, depending on quantity and model.',
        },
      ],
      ctaTitle: 'Request a Manufacturing Quote',
      ctaButton: 'Start Your Project',
    },
    {
      slug: 'private-label-sup',
      metaTitle: 'Private Label SUP Boards | White Label SUP Manufacturing — SUPsfactory',
      metaDescription:
        'Launch your own SUP line with private label manufacturing. Your brand on proven boards, flexible MOQ from 50pcs, design and packaging support.',
      kicker: 'Private Label SUP',
      h1: 'Private Label SUP Boards — Your Name, Your Brand',
      intro: [
        'Private label production lets you launch your own paddleboard line without investing in tooling or a factory. Your logo, colors and packaging go on quality-verified SUP platforms — with flexible quantities that grow with you.',
        'Every private label program includes design support: we turn your existing brand assets into board graphics, EVA pad layouts and packaging, or develop them from scratch with your team.',
      ],
      bullets: [
        'Your branding on every part of the product',
        'Proven, quality-verified platform shapes',
        'Flexible MOQ from 50pcs',
        'Design and packaging development included',
        'Scalable from first run to large fleets',
      ],
      faqs: [
        {
          q: 'What is included in a private label SUP program?',
          a: 'Your brand on the board itself (graphics, logo, EVA pad), plus optional branded paddle, pump, backpack and packaging — a complete sellable product under your name.',
        },
        {
          q: 'Can I change the design between orders?',
          a: 'Yes. Once your brand assets are production-ready, reorders can refresh graphics, colors or packaging at any time. Platform shapes stay verified and tooling remains yours.',
        },
        {
          q: 'Can you help if I only have a logo?',
          a: 'Absolutely. Our design team develops the full board and packaging artwork from just your logo and brand colors.',
        },
      ],
      ctaTitle: 'Start Your Private Label SUP Line',
      ctaButton: 'Start Your Project',
    },
    {
      slug: 'sup-for-resorts',
      metaTitle: 'SUP Boards for Resorts & Hotels | Branded Guest SUP Fleets — SUPsfactory',
      metaDescription:
        'Branded SUP fleets for resorts and hotels. Durable, guest-friendly boards in your colors, with storage-friendly inflatables and full accessory packages.',
      kicker: 'Resorts & Hotels',
      h1: 'Resort-Grade SUP Boards with Your Branding',
      intro: [
        'Give guests a water experience they remember — with SUP fleets in your resort’s colors and logo. We design durable, guest-friendly boards for daily rental use, with inflatable options that store in a closet when the season ends.',
        'Every resort project includes a service plan: branded boards and accessories, reorder programs to refresh the fleet, and honest guidance on quantities and upkeep for your location.',
      ],
      bullets: [
        'Branded guest fleets in resort colors',
        'Durable, rental-grade builds for daily use',
        'Storage-friendly inflatable options',
        'Paddles, pumps, bags and accessories included',
        'Reorder and refresh programs for seasonal fleets',
      ],
      faqs: [
        {
          q: 'How many SUP boards does a resort need?',
          a: 'It depends on your guest volume and shoreline, but most resorts start with 20–50 boards and scale with demand. We recommend quantities based on usage patterns, not guesses.',
        },
        {
          q: 'Are inflatable boards suitable for resort use?',
          a: 'Yes. Modern inflatable SUP boards are extremely durable and easy to store and transport — a popular choice for resorts with limited storage space.',
        },
        {
          q: 'Can the fleet include our logo and colors?',
          a: 'Yes — full-board graphics, logo printing, EVA pad branding and branded accessories are all part of the resort program.',
        },
      ],
      ctaTitle: 'Equip Your Resort With a Branded Fleet',
      ctaButton: 'Start Your Project',
    },
    {
      slug: 'sup-for-clubs',
      metaTitle: 'SUP Boards for Clubs & Schools | Durable Training & Rental Fleets — SUPsfactory',
      metaDescription:
        'Durable SUP fleets for clubs, schools and water sports centers. Reinforced construction, beginner and multi-person shapes, fleet pricing and parts support.',
      kicker: 'Clubs & Schools',
      h1: 'SUP Equipment Built for Clubs, Schools & Water Sports Centers',
      intro: [
        'High-usage paddleboards for lessons, training and rentals need construction that survives daily professional use. We build reinforced boards with beginner-friendly and multi-person shapes, then structure fleet pricing around your program.',
        'Clubs and schools also get practical support that rental operators value most: replacement parts, consistent reorders at the same quality, and guidance on maintaining a fleet that sees thousands of sessions.',
      ],
      bullets: [
        'Reinforced construction for daily professional use',
        'Beginner and multi-person shapes',
        'Fleet pricing for programs and centers',
        'Replacement parts and reorder support',
        'Optional custom club and school branding',
      ],
      faqs: [
        {
          q: 'What boards are best for SUP lessons and schools?',
          a: 'Wide, stable beginner boards and multi-person boards are ideal for instruction. Their generous volume makes them forgiving for first-timers and stable under several riders.',
        },
        {
          q: 'Do you offer fleet pricing?',
          a: 'Yes — volume pricing applies to club and school fleets, with a dedicated contact for reorders, parts and maintenance questions.',
        },
        {
          q: 'Can damaged boards be repaired or replaced?',
          a: 'We provide replacement parts and repair guidance, and our reorder program ensures you can refresh the fleet at consistent quality.',
        },
      ],
      ctaTitle: 'Build a Fleet That Lasts',
      ctaButton: 'Start Your Project',
    },
    {
      slug: 'sup-startup-brands',
      metaTitle: 'Start a SUP Brand | Low MOQ Custom SUP Launch Partner — SUPsfactory',
      metaDescription:
        'Launch your own SUP brand with a 50pcs minimum order. Design support, full product packages and a manufacturing partner that grows with you.',
      kicker: 'Startup Brands',
      h1: 'Start Your Own SUP Brand — Without the Factory',
      intro: [
        'You have the brand idea — we have the factory. Launch your own SUP line with a 50pcs minimum order, complete design support and a manufacturing partner that treats your first run as seriously as your hundredth.',
        'Most new paddle brands fail at the factory gate: big minimums, no design support, slow communication. We built SUPsfactory to remove those barriers, with a project specialist guiding you from first mockup to first container.',
      ],
      bullets: [
        'Start from 50pcs per design',
        'Design support from logo to production artwork',
        'Complete packages: board, paddle, pump, bag',
        'Brand assets: graphics, EVA pad, packaging',
        'Scale up when you sell out — no re-tooling',
      ],
      faqs: [
        {
          q: 'I have an idea but no design. Can you still help?',
          a: 'Yes. We develop board graphics, EVA pad layouts and packaging from your ideas, and iterate with mockups until you are happy — before you commit to production.',
        },
        {
          q: 'How much does it cost to start a SUP brand?',
          a: 'Because our MOQ starts at 50pcs, the first run is designed to fit a startup budget. Send us your project details and we will give you a transparent quote for samples and production.',
        },
        {
          q: 'Can I grow my brand with you over time?',
          a: 'That is exactly how we work. Start with a first run to test the market, then scale quantity, add models and refresh designs as your brand grows.',
        },
      ],
      ctaTitle: 'Launch Your SUP Brand This Season',
      ctaButton: 'Start Your Project',
    },
  ],
  zh: [
    {
      slug: 'custom-sup-manufacturing',
      metaTitle: '定制 SUP 制造 | OEM & ODM SUP 工厂 — SUPsfactory',
      metaDescription:
        '面向初创品牌、俱乐部、度假村与企业的定制 SUP 制造。最低 50 片起订、OEM & ODM 生产、设计支持与全球出口。',
      kicker: '定制 SUP 制造',
      h1: '围绕你的品牌构建的定制 SUP 制造',
      intro: [
        'SUPsfactory 是一家定制 SUP 制造商，帮助品牌、俱乐部、度假村与企业生产自己的桨板。从低起订量的首批订单到完整的贴牌项目，我们负责设计、模具、生产、质检与出口——你专注于建立品牌。',
        '与工厂目录型供应商不同，我们围绕你的业务组织每个项目：灵活的起订量、专属项目专员，以及包含板、桨、气泵、背包与品牌元素的完整产品套装。',
      ],
      bullets: [
        '每个设计 50 片起订',
        '基于成熟板型的 OEM & ODM 生产',
        '自有设计与图案开发支持',
        '完整套装：板、桨、气泵、背包',
        '每批生产多节点质检',
        '专业包装，全球出口',
      ],
      faqs: [
        {
          q: '定制 SUP 制造的最低起订量是多少？',
          a: '标准定制生产每个设计 50 片起订，让首次投入保持在合理范围，同时保证公平的价格。数量越大，单价越优。',
        },
        {
          q: 'OEM 和 ODM 有什么区别？',
          a: 'OEM 是把成熟的板型在你的品牌下生产；ODM 则是按你的规格开发整块板——板型、材料、图案与包装。两条路径我们都支持。',
        },
        {
          q: '定制 SUP 订单需要多长时间？',
          a: '打样通常 7–10 天；设计样品确认后，量产 30–45 天，具体视数量与板型而定。',
        },
      ],
      ctaTitle: '获取制造报价',
      ctaButton: '开始你的项目',
    },
    {
      slug: 'private-label-sup',
      metaTitle: '贴牌 SUP 板 | SUP 白牌制造 — SUPsfactory',
      metaDescription:
        '通过贴牌制造推出你自己的 SUP 产品线。品牌印在成熟板型上，50 片起订，含设计与包装支持。',
      kicker: '贴牌 SUP',
      h1: '贴牌 SUP 板——你的名字，你的品牌',
      intro: [
        '贴牌生产让你无需投资模具或工厂，就能推出自己的桨板产品线。你的 Logo、配色与包装印在经品质验证的 SUP 平台上——数量灵活，随你成长。',
        '每个贴牌项目都包含设计支持：我们把你的品牌资产变成板面图案、EVA 防滑垫排版与包装，或与你的团队从零开发。',
      ],
      bullets: [
        '产品每个部分都体现你的品牌',
        '经品质验证的成熟板型',
        '50 片起订，数量灵活',
        '含设计与包装开发',
        '从首批订单到大规模舰队可扩展',
      ],
      faqs: [
        {
          q: '贴牌 SUP 项目包含什么？',
          a: '你的品牌体现在板身（图案、Logo、EVA 防滑垫），以及可选的品牌桨、气泵、背包与包装——一件以你的名字命名的完整可销售产品。',
        },
        {
          q: '订单之间可以修改设计吗？',
          a: '可以。品牌资产完成可量产化后，复购时随时可以更新图案、配色或包装。板型保持验证状态，模具也属于你。',
        },
        {
          q: '我只有 Logo，你们能帮忙吗？',
          a: '当然。我们的设计团队仅凭你的 Logo 与品牌色，就能完成整套板面与包装设计稿。',
        },
      ],
      ctaTitle: '开始你的贴牌 SUP 产品线',
      ctaButton: '开始你的项目',
    },
    {
      slug: 'sup-for-resorts',
      metaTitle: '度假村与酒店 SUP 板 | 品牌化客用舰队 — SUPsfactory',
      metaDescription:
        '面向度假村与酒店的品牌化 SUP 舰队。耐用、易上手的板型，度假村配色，可选可收纳充气板与完整配件套装。',
      kicker: '度假村与酒店',
      h1: '带品牌标识的度假村级 SUP 板',
      intro: [
        '用印有度假村配色与 Logo 的 SUP 舰队，为客人创造难忘的水上体验。我们设计耐用、易上手、适合每日租赁使用的板型，并提供旺季结束后可收进储藏间的充气板选项。',
        '每个度假村项目都包含服务计划：品牌化板体与配件、舰队更新复购计划，以及针对你所在地区关于数量与维护的务实建议。',
      ],
      bullets: [
        '度假村专属配色的品牌舰队',
        '适合每日使用的高耐用租赁板',
        '便于收纳的充气板选项',
        '包含桨、气泵、背包与配件',
        '季节性舰队的复购与更新计划',
      ],
      faqs: [
        {
          q: '度假村需要多少块 SUP 板？',
          a: '取决于客流量与水域情况，但大多数度假村从 20–50 块起步，随需求增长。我们会依据使用规律给出建议，而不是猜测。',
        },
        {
          q: '充气板适合度假村使用吗？',
          a: '适合。现代充气 SUP 板非常耐用，且便于存放与运输——是存储空间有限的度假村的热门选择。',
        },
        {
          q: '舰队可以带上我们的 Logo 与配色吗？',
          a: '可以——整板图案、Logo 印刷、EVA 防滑垫品牌定制与品牌配件都是度假村项目的一部分。',
        },
      ],
      ctaTitle: '为你的度假村配置品牌舰队',
      ctaButton: '开始你的项目',
    },
    {
      slug: 'sup-for-clubs',
      metaTitle: '俱乐部与学校 SUP 板 | 耐用的训练与租赁舰队 — SUPsfactory',
      metaDescription:
        '面向俱乐部、学校与水上运动中心的耐用 SUP 舰队。加强结构、初学者与多人板型、舰队批量价与配件支持。',
      kicker: '俱乐部与学校',
      h1: '为俱乐部、学校与水上运动中心打造的 SUP 装备',
      intro: [
        '用于课程、训练与租赁的高频桨板，需要能承受每日专业使用的结构。我们生产加强版板体，配备初学者友好与多人板型，并围绕你的项目规划舰队价格。',
        '俱乐部和学校还能获得租赁运营者最看重的实际支持：替换配件、质量稳定的复购，以及经受数千次使用考验的舰队维护指导。',
      ],
      bullets: [
        '为每日专业使用设计的加强结构',
        '初学者与多人板型',
        '面向项目与中心的舰队价格',
        '替换配件与复购支持',
        '可选的俱乐部与学校品牌定制',
      ],
      faqs: [
        {
          q: 'SUP 课程与学校最适合什么板？',
          a: '宽而稳定的初学者板与多人板最适合教学。充足的排水量让初学者更容易上手，多人站立时也更稳定。',
        },
        {
          q: '你们提供舰队批量价格吗？',
          a: '提供——俱乐部与学校舰队享受批量价格，并有专属对接人处理复购、配件与维护问题。',
        },
        {
          q: '损坏的板可以维修或更换吗？',
          a: '我们提供替换配件与维修指导，复购计划确保你以一致的质量更新舰队。',
        },
      ],
      ctaTitle: '建设一支经久耐用的舰队',
      ctaButton: '开始你的项目',
    },
    {
      slug: 'sup-startup-brands',
      metaTitle: '创办 SUP 品牌 | 低起订量定制 SUP 创始伙伴 — SUPsfactory',
      metaDescription:
        '以 50 片最低起订量创办你的 SUP 品牌。设计支持、完整产品套装，以及与你共同成长的制造伙伴。',
      kicker: '初创品牌',
      h1: '创办你自己的 SUP 品牌——无需工厂',
      intro: [
        '你有品牌想法——我们有工厂。以 50 片的最低起订量创办你的 SUP 产品线，获得完整的设计支持，以及把你的第一张订单看得和第一百张同样重要的制造伙伴。',
        '大多数新桨板品牌都倒在工厂门槛前：起订量太大、没有设计支持、沟通缓慢。我们创建 SUPsfactory 就是为了扫清这些障碍，由项目专员带你从第一张效果图走到第一个货柜。',
      ],
      bullets: [
        '每个设计 50 片起订',
        '从 Logo 到量产图案的设计支持',
        '完整套装：板、桨、气泵、背包',
        '品牌资产：图案、EVA 垫、包装',
        '卖完就放量——无需重新开模',
      ],
      faqs: [
        {
          q: '我有想法但没有设计，你们能帮忙吗？',
          a: '可以。我们从你的想法出发开发板面图案、EVA 防滑垫排版与包装，在投产前用效果图反复迭代直到你满意。',
        },
        {
          q: '创办一个 SUP 品牌要花多少钱？',
          a: '由于起订量低至 50 片，首批订单就是为初创预算设计的。把你的项目细节发给我们，我们会给出透明的样品与生产报价。',
        },
        {
          q: '我可以和你们长期合作成长吗？',
          a: '这正是我们的工作方式。先用首批订单测试市场，然后随着品牌成长逐步放量、增加板型、更新设计。',
        },
      ],
      ctaTitle: '这个季节就推出你的 SUP 品牌',
      ctaButton: '开始你的项目',
    },
  ],
}

export function getLanding(locale: Locale, slug: string): Landing | undefined {
  return pick(landings, locale).find((l) => l.slug === slug)
}
