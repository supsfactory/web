import type { Locale } from '@/features/i18n/locale'

/**
 * Marketing content for the SUPsfactory site, localized en/zh.
 *
 * Content (headlines, body copy, products, FAQ, landings) lives here rather
 * than in the i18n dictionaries, which stay reserved for structural UI strings
 * (nav, buttons, form labels). Every entry is bilingual so both locale routes
 * render the same structure.
 */

export interface Localized<T> {
  en: T
  zh: T
}

export function pick<T>(d: Localized<T>, locale: Locale): T {
  return locale === 'zh' ? d.zh : d.en
}

/* ─────────────────────────── home: hero ─────────────────────────── */

export interface HeroContent {
  kicker: string
  titlePre: string
  titleAccent: string
  titlePost: string
  sub: string
  ctaPrimary: string
  ctaSecondary: string
  chips: string[]
  mockupLabel: string
  mockupBrand: string
  mockupHint: string
  float1: { value: string; label: string }
  float2: { value: string; label: string }
}

export const hero: Localized<HeroContent> = {
  en: {
    kicker: 'Custom SUP Manufacturing Partner',
    titlePre: 'Create Your Own',
    titleAccent: 'SUP Brand',
    titlePost: 'Without Building Your Own Factory',
    sub: 'We help startups, clubs, resorts and businesses bring their own custom SUP boards to life — with a low MOQ from 50pcs, professional design support and reliable manufacturing from first sketch to final delivery.',
    ctaPrimary: 'Start Your Project',
    ctaSecondary: 'Explore SUP Solutions',
    chips: ['MOQ from 50pcs', 'Full customization', 'OEM & ODM support'],
    mockupLabel: 'Signature Platform',
    mockupBrand: "SUP Explorer 11'",
    mockupHint: 'Your graphics · your colors · your packaging',
    float1: { value: '50pcs', label: 'Minimum order' },
    float2: { value: '4–6 wks', label: 'Production time' },
  },
  zh: {
    kicker: '定制 SUP 制造伙伴',
    titlePre: '创建你自己的',
    titleAccent: 'SUP 品牌',
    titlePost: '无需自建工厂',
    sub: '我们帮助初创品牌、俱乐部、度假村与企业把定制 SUP 板从想法变成现实——最低 50 片起订、专业设计支持、从第一张草图到成品交付的可靠制造。',
    ctaPrimary: '开始你的项目',
    ctaSecondary: '了解定制方案',
    chips: ['最低 50 片起订', '全面定制', 'OEM & ODM 支持'],
    mockupLabel: '旗舰平台',
    mockupBrand: 'SUP 探索者 11\'',
    mockupHint: '你的图案 · 你的配色 · 你的包装',
    float1: { value: '50 片', label: '最低起订量' },
    float2: { value: '4–6 周', label: '生产周期' },
  },
}

/* ─────────────────────────── home: why us ─────────────────────────── */

export interface WhyCard {
  value: string
  valueLabel: string
  title: string
  body: string
}

export interface WhyContent {
  kicker: string
  title: string
  sub: string
  cards: WhyCard[]
}

export const why: Localized<WhyContent> = {
  en: {
    kicker: 'Why Brands Choose Us',
    title: 'A Launch Partner, Not Just a Factory',
    sub: 'Professional manufacturing capability, designed around helping you build a brand — not just ship boards.',
    cards: [
      {
        value: '50+',
        valueLabel: 'MOQ starting point',
        title: 'Low MOQ — Start from 50pcs',
        body: 'Lower your risk and launch faster. Our flexible minimum order lets you test the market before scaling up.',
      },
      {
        value: '100%',
        valueLabel: 'Custom branding',
        title: 'Full Customization',
        body: 'Turn your ideas into real products. Shapes, graphics, colors, accessories and packaging are all yours to define.',
      },
      {
        value: '15+',
        valueLabel: 'Years manufacturing',
        title: 'Design Support',
        body: 'No design team? No problem. We help transform rough ideas into production-ready artwork.',
      },
      {
        value: 'Global',
        valueLabel: 'Business support',
        title: 'Reliable Manufacturing',
        body: 'Professional production support from prototype to delivery, with multi-point QC on every run.',
      },
    ],
  },
  zh: {
    kicker: '为什么选择 SUPsfactory',
    title: '品牌伙伴，而不仅是工厂',
    sub: '专业的制造能力，围绕帮你建立品牌而设计——而不只是出货。',
    cards: [
      {
        value: '50+',
        valueLabel: '最低起订起点',
        title: '低起订量——50 片起',
        body: '降低风险、更快启动。灵活的起订量让你先小批量试水市场，再逐步放量。',
      },
      {
        value: '100%',
        valueLabel: '品牌全面定制',
        title: '全面定制',
        body: '把想法变成真正的产品。板型、图案、配色、配件与包装都由你定义。',
      },
      {
        value: '15+',
        valueLabel: '年制造经验',
        title: '设计支持',
        body: '没有设计团队？没问题。我们帮你把粗糙的想法变成可量产的设计稿。',
      },
      {
        value: '全球',
        valueLabel: '业务支持',
        title: '可靠制造',
        body: '从打样到交付的全流程专业制造支持，每批产品都经过多节点质检。',
      },
    ],
  },
}

/* ─────────────────────────── capability strip ─────────────────────────── */

export const strip: Localized<string[]> = {
  en: ['OEM & ODM', 'Private Label', 'Sample Service', 'Design & Artwork', 'QC on every run', 'Worldwide export'],
  zh: ['OEM & ODM', '贴牌生产', '打样服务', '设计与制版', '逐批质检', '全球出口'],
}

/* ─────────────────────────── who we serve ─────────────────────────── */

export interface Segment {
  slug: string
  title: string
  body: string
  points: string[]
  cta: string
  href: string
  image: string
}

export interface ServeContent {
  kicker: string
  title: string
  sub: string
  segments: Segment[]
}

export const serve: Localized<ServeContent> = {
  en: {
    kicker: 'Who We Serve',
    title: 'Solutions Designed for Different Businesses',
    sub: 'One manufacturing partner, four ways to build a SUP brand — pick the path that fits your business.',
    segments: [
      {
        slug: 'sup-startup-brands',
        title: 'New SUP Brands',
        body: 'Launch your own paddleboard brand with flexible MOQ and complete support — from first mockup to first container.',
        points: ['Start from 50pcs', 'Full brand package: board, paddle, bag', 'Design support included', 'Scale up as you grow'],
        cta: 'Launch a SUP brand',
        href: '/sup-startup-brands',
        image: 'https://assets.supsfactory.com/images/sups/products/sup-series/sup-cheetah-surge-1.webp',
      },
      {
        slug: 'sup-for-resorts',
        title: 'Resorts & Hotels',
        body: 'Create branded water experiences for your guests with custom SUP fleets in your resort’s colors.',
        points: ['Branded guest fleets', 'Durable, guest-friendly builds', 'Storage-friendly inflatables', 'Full accessory packages'],
        cta: 'Equip your resort',
        href: '/sup-for-resorts',
        image: 'https://assets.supsfactory.com/images/sups/products/sup-series/sup-tropical-breeze-1.webp',
      },
      {
        slug: 'sup-for-clubs',
        title: 'Clubs & Schools',
        body: 'Durable SUP equipment designed for frequent professional use — lessons, rentals and training.',
        points: ['Reinforced construction', 'Beginner & multi-person shapes', 'Fleet pricing', 'Replacement parts support'],
        cta: 'Build your fleet',
        href: '/sup-for-clubs',
        image: 'https://assets.supsfactory.com/images/sups/products/afarer-sup-allround-board.webp',
      },
      {
        slug: 'corporate-events',
        title: 'Corporate & Events',
        body: 'Customized SUP products for marketing campaigns, team building and brand events.',
        points: ['Event-ready quantities', 'Promotional branding', 'Fast-track lead times', 'Global delivery'],
        cta: 'Plan your event',
        href: '/contact',
        image: 'https://assets.supsfactory.com/images/sups/products/sup-series/sup-medusa-glow-1.webp',
      },
    ],
  },
  zh: {
    kicker: '客户群体',
    title: '为不同业务设计的解决方案',
    sub: '一个制造伙伴，四种建立 SUP 品牌的方式——选择适合你业务的路径。',
    segments: [
      {
        slug: 'sup-startup-brands',
        title: '新 SUP 品牌',
        body: '以灵活起订量与完整支持创立你自己的桨板品牌——从第一张效果图到第一个货柜。',
        points: ['50 片起订', '完整品牌套装：板、桨、背包', '含设计支持', '随成长逐步放量'],
        cta: '创立 SUP 品牌',
        href: '/sup-startup-brands',
        image: 'https://assets.supsfactory.com/images/sups/products/sup-series/sup-cheetah-surge-1.webp',
      },
      {
        slug: 'sup-for-resorts',
        title: '度假村与酒店',
        body: '用度假村专属配色的定制 SUP 舰队，为客人打造难忘的水上体验。',
        points: ['品牌化客用舰队', '耐用、易上手的板型', '可收纳充气板', '完整配件套装'],
        cta: '配置你的度假村',
        href: '/sup-for-resorts',
        image: 'https://assets.supsfactory.com/images/sups/products/sup-series/sup-tropical-breeze-1.webp',
      },
      {
        slug: 'sup-for-clubs',
        title: '俱乐部与学校',
        body: '为高频专业使用设计的耐用 SUP 装备——教学、租赁与训练。',
        points: ['加强结构', '初学者与多人板型', '舰队批量价', '配件更换支持'],
        cta: '建设你的舰队',
        href: '/sup-for-clubs',
        image: 'https://assets.supsfactory.com/images/sups/products/afarer-sup-allround-board.webp',
      },
      {
        slug: 'corporate-events',
        title: '企业与活动',
        body: '面向营销活动、团队建设与品牌活动的定制 SUP 产品。',
        points: ['活动级数量', '推广性品牌定制', '快速交期', '全球配送'],
        cta: '规划你的活动',
        href: '/contact',
        image: 'https://assets.supsfactory.com/images/sups/products/sup-series/sup-medusa-glow-1.webp',
      },
    ],
  },
}

/* ─────────────────────────── solutions ─────────────────────────── */

export interface SolutionPillar {
  title: string
  body: string
  points: string[]
}

export interface SolutionsContent {
  kicker: string
  title: string
  sub: string
  pillars: SolutionPillar[]
}

export const solutions: Localized<SolutionsContent> = {
  en: {
    kicker: 'Custom SUP Solutions',
    title: 'Every Layer of Your Product, Yours to Define',
    sub: 'From the board itself to the box it ships in — customization is available at every layer.',
    pillars: [
      {
        title: 'Board Customization',
        body: 'Start from proven platform shapes and make them yours.',
        points: ['Shape & size', 'Construction & materials', 'Colors & full-board graphics', 'Deck pad design'],
      },
      {
        title: 'Brand Identity',
        body: 'Put your mark on every board — and every touchpoint.',
        points: ['Full board graphics', 'Logo printing', 'EVA pad branding', 'Custom packaging'],
      },
      {
        title: 'Complete Product Package',
        body: 'Launch a sellable product, not just a board.',
        points: ['SUP board', 'Paddle & pump', 'Backpack', 'Accessories bundle'],
      },
    ],
  },
  zh: {
    kicker: '定制 SUP 解决方案',
    title: '产品的每一层，都由你定义',
    sub: '从板身到出货包装——每一层都可以定制。',
    pillars: [
      {
        title: '板面定制',
        body: '从成熟板型出发，把它变成你的专属设计。',
        points: ['板型与尺寸', '结构与材料', '配色与整板图案', '防滑垫设计'],
      },
      {
        title: '品牌形象',
        body: '让每一块板、每一个触点都带上你的品牌。',
        points: ['整板图案', 'Logo 印刷', 'EVA 垫品牌定制', '定制包装'],
      },
      {
        title: '完整产品套装',
        body: '推出可销售的产品，而不只是一块板。',
        points: ['SUP 板', '桨与气泵', '背包', '配件套装'],
      },
    ],
  },
}

/* ─────────────────────────── custom sup studio ─────────────────────────── */

export interface StudioStep {
  title: string
  body: string
}

export interface StudioContent {
  kicker: string
  title: string
  sub: string
  scrollHint: string
  steps: StudioStep[]
}

export const studio: Localized<StudioContent> = {
  en: {
    kicker: 'Custom SUP Studio',
    title: 'Every Layer, Designed by You',
    sub: 'Scroll through the build — from the board shape to the box it ships in, every layer is yours to define.',
    scrollHint: 'Scroll to explore',
    steps: [
      {
        title: 'Board Shape',
        body: 'Choose a proven platform shape or spec a custom one — size, rails and construction are yours to define.',
      },
      {
        title: 'Graphics',
        body: 'Full-deck artwork in your colors. Our design team turns rough ideas into production-ready prints.',
      },
      {
        title: 'Deck Pad',
        body: 'EVA pad in your brand colors, with custom logos, cutouts and textures.',
      },
      {
        title: 'Accessories',
        body: 'Paddles, pumps, bags and fins — all customizable and bundled with your boards.',
      },
      {
        title: 'Packaging',
        body: 'Branded cartons and printed sleeves that make every delivery feel like a launch.',
      },
    ],
  },
  zh: {
    kicker: '定制 SUP 工作室',
    title: '每一层，都由你设计',
    sub: '滑动浏览整个制造流程——从板型到包装箱，每一层都由你定义。',
    scrollHint: '左右滑动探索',
    steps: [
      {
        title: '板型',
        body: '选择成熟的平台板型，或定制专属规格——尺寸、侧边与结构都由你定义。',
      },
      {
        title: '图案',
        body: '整板图案用你的配色。我们的设计团队把粗略想法变成可量产的印刷稿。',
      },
      {
        title: '防滑垫',
        body: 'EVA 防滑垫采用你的品牌色，支持定制 Logo、开孔与纹理。',
      },
      {
        title: '配件',
        body: '桨、气泵、背包与尾鳍——全部可定制，并与板子打包发货。',
      },
      {
        title: '包装',
        body: '品牌定制纸箱与印刷内衬，让每一次到货都像一场发布。',
      },
    ],
  },
}

/* ─────────────────────────── products ─────────────────────────── */

export interface Product {
  slug: string
  sku: string
  name: string
  tagline: string
  desc: string
  uses: string[]
  for: string[]
  specs: string
  artwork: string
  price: string
  image: string
  hue: number
}

export interface ProductsContent {
  kicker: string
  title: string
  sub: string
  items: Product[]
}

export const products: Localized<ProductsContent> = {
  en: {
    kicker: 'Products',
    title: 'Proven Platforms, Built Your Way',
    sub: 'Every series below is a manufacturing platform — shapes, artwork and specs adapt to your brand.',
    items: [
      {
        slug: 'sup-explorer-11',
        sku: 'SUP-EX11',
        name: "SUP Explorer 11'",
        tagline: 'The all-around classic',
        desc: 'Our most popular all-around board — wide-body stability for beginners, agility for intermediates, and portability for any adventure. The default starting point for most new brands.',
        uses: ['Beginner', 'All-Around', 'Family'],
        for: ['Startups', 'Rental fleets'],
        specs: "11'0\" × 32\" × 6\" · drop-stitch PVC · 15 PSI · 19 lbs (8.6 kg)",
        artwork: 'Military-grade drop-stitch core · reinforced rails · 2+1 fins · complete package',
        price: '$399',
        image: 'https://assets.supsfactory.com/images/sups/products/afarer-sup-allround-board.webp',
        hue: 195,
      },
      {
        slug: 'sup-ocean-pulse',
        sku: 'SUP-OP11',
        name: 'Ocean Pulse Series',
        tagline: 'Topographic wave designer edition',
        desc: 'Ocean waves transformed into Tiffany Blue topographic contours with high-precision mechanical embossing and a unified color-matched accessory kit.',
        uses: ['Lifestyle', 'Flatwater', 'Designer'],
        for: ['Lifestyle brands', 'Boutique travel'],
        specs: "11'0\" × 32\" × 6\" · drop-stitch PVC · 15 PSI · 20 lbs (9.1 kg)",
        artwork: 'UV digital printing + mechanical heat-embossing · coordinated accessories',
        price: '$449',
        image: 'https://assets.supsfactory.com/images/sups/products/sup-series/sup-ocean-pulse-1.webp',
        hue: 210,
      },
      {
        slug: 'sup-cheetah-surge',
        sku: 'SUP-CS11',
        name: 'Cheetah Surge Edition',
        tagline: 'Wild-inspired premium edition',
        desc: 'Raw wild power meets artistic elegance — a cheetah motif in pastel pink, teal and coral, built with zero-fade multi-color EVA block piecing.',
        uses: ['Lifestyle', 'Flatwater', 'Designer'],
        for: ['Lifestyle brands', 'Social-first brands'],
        specs: "11'0\" × 32\" × 6\" · drop-stitch PVC · 15 PSI · 20 lbs (9.1 kg)",
        artwork: 'Multi-color EVA block piecing + UV printing · anti-delamination build',
        price: '$449',
        image: 'https://assets.supsfactory.com/images/sups/products/sup-series/sup-cheetah-surge-1.webp',
        hue: 28,
      },
      {
        slug: 'sup-medusa-glow',
        sku: 'SUP-MG11',
        name: 'Medusa Glow Series',
        tagline: 'The jellyfish edition',
        desc: 'An underwater dreamscape — vibrant jellyfish, sea stars and coral reefs in refreshing mint green, with zero-fade EVA artwork and exceptional lateral stability for yoga.',
        uses: ['Yoga', 'Tropical', 'Lifestyle'],
        for: ['Yoga studios', 'Tropical brands'],
        specs: "11'0\" × 32\" × 6\" · drop-stitch PVC · 15 PSI · 20 lbs (9.1 kg)",
        artwork: 'Multi-color EVA block piecing + UV printing · handle anchored to PVC hull',
        price: '$449',
        image: 'https://assets.supsfactory.com/images/sups/products/sup-series/sup-medusa-glow-1.webp',
        hue: 260,
      },
      {
        slug: 'sup-dolphin-wave',
        sku: 'SUP-DW11',
        name: 'Dolphin Wave Series',
        tagline: 'Marine 360° edition',
        desc: 'Leaping dolphins and layered medieval blue waves with CNC puzzle-cut EVA splicing and screen-printed continuous rail art that wraps the deck 360°.',
        uses: ['Marine', 'Flatwater', 'Designer'],
        for: ['Marine brands', 'Resorts'],
        specs: "11'0\" × 32\" × 6\" · drop-stitch PVC · 15 PSI · 20 lbs (9.1 kg)",
        artwork: 'CNC-cut EVA color-block splicing + screen-printed rails · PANTONE TPG color matching',
        price: '$449',
        image: 'https://assets.supsfactory.com/images/sups/products/sup-series/sup-dolphin-wave-1.webp',
        hue: 210,
      },
      {
        slug: 'sup-flowing-lotus',
        sku: 'SUP-FL11',
        name: 'Flowing Lotus Series',
        tagline: 'Eastern art wellness edition',
        desc: 'Traditional Eastern brushwork with lotus, koi and dragonfly motifs — laser-engraved into the traction pad so it never wears out or fades. Built for tranquil paddling and yoga.',
        uses: ['Yoga', 'Meditation', 'Flatwater'],
        for: ['Yoga studios', 'Wellness brands'],
        specs: "11'0\" × 32\" × 6\" · drop-stitch PVC · 15 PSI · 20 lbs (9.1 kg)",
        artwork: 'Dual-layer laser-engraved EVA + gradient UV printing · dynamic color-blocked fins',
        price: '$449',
        image: 'https://assets.supsfactory.com/images/sups/products/sup-series/sup-flowing-lotus-1.webp',
        hue: 150,
      },
      {
        slug: 'sup-jungle-mandala',
        sku: 'SUP-JM11',
        name: 'Jungle Mandala Series',
        tagline: 'Tropical sacred geometry',
        desc: 'Tropical vitality meets sacred geometry — hibiscus, hummingbirds and mandala totems in Tiffany Blue and Coral Orange, engineered to stay perfectly symmetrical at full pressure.',
        uses: ['Tropical', 'Coastal', 'Designer'],
        for: ['Tropical brands', 'Travel'],
        specs: "11'0\" × 32\" × 6\" · drop-stitch PVC · 15 PSI · 20 lbs (9.1 kg)",
        artwork: 'Dual-layer laser-engraved EVA + UV printing + screen-printed rails · anti-distortion geometry',
        price: '$449',
        image: 'https://assets.supsfactory.com/images/sups/products/sup-series/sup-jungle-mandala-1.webp',
        hue: 28,
      },
      {
        slug: 'sup-leviathan-wake',
        sku: 'SUP-LW11',
        name: 'Leviathan Wake Series',
        tagline: 'The whale edition',
        desc: 'A majestic blue whale totem with geometric tribal patterns and minimalist black-white swell lines — for paddlers who connect with the ocean.',
        uses: ['Ocean', 'All-Around', 'Designer'],
        for: ['Ocean brands', 'Outdoor brands'],
        specs: "11'0\" × 32\" × 6\" · drop-stitch PVC · 15 PSI · 20 lbs (9.1 kg)",
        artwork: 'UV digital printing + mechanical embossing · stretchable PVC inks on bottom logo',
        price: '$449',
        image: 'https://assets.supsfactory.com/images/sups/products/sup-series/sup-leviathan-wake-1.webp',
        hue: 195,
      },
      {
        slug: 'sup-ocean-voyager',
        sku: 'SUP-OV11',
        name: 'Ocean Voyager Series',
        tagline: 'The sea turtle edition',
        desc: 'A tribute to the ocean’s ultimate wanderer — geometric sea turtle artwork in deep teal, turquoise and coral orange, with an end-to-end coordinated accessory kit.',
        uses: ['Touring', 'Ocean', 'All-Around'],
        for: ['Touring brands', 'Outdoor brands'],
        specs: "11'0\" × 32\" × 6\" · drop-stitch PVC · 15 PSI · 20 lbs (9.1 kg)",
        artwork: 'Multi-color EVA block piecing + UV printing · color-matched backpack, pump & leash',
        price: '$449',
        image: 'https://assets.supsfactory.com/images/sups/products/sup-series/sup-ocean-voyager-1.webp',
        hue: 170,
      },
      {
        slug: 'sup-tropical-breeze',
        sku: 'SUP-TB11',
        name: 'Tropical Breeze Series',
        tagline: 'Island escape edition',
        desc: 'A complete island vacation canvas — sunshine, coconut groves and beach scenes flowing from a micro-illustrated nose into abstract EVA color-blocking toward the tail.',
        uses: ['Vacation', 'Lifestyle', 'Coastal'],
        for: ['Travel brands', 'Resorts'],
        specs: "11'0\" × 32\" × 6\" · drop-stitch PVC · 15 PSI · 20 lbs (9.1 kg)",
        artwork: 'UV digital printing + die-cut EVA patchwork · illustrated nose landscape',
        price: '$449',
        image: 'https://assets.supsfactory.com/images/sups/products/sup-series/sup-tropical-breeze-1.webp',
        hue: 330,
      },
    ],
  },
  zh: {
    kicker: '产品',
    title: '成熟板型，按你的方式打造',
    sub: '以下每个系列都是成熟的制造平台——板型、图案与规格都可按你的品牌调整。',
    items: [
      {
        slug: 'sup-explorer-11',
        sku: 'SUP-EX11',
        name: 'SUP 探索者 11\'',
        tagline: '全能经典款',
        desc: '我们最受欢迎的全能板——宽体稳定适合新手，灵活机动适合进阶玩家，便携适合任何冒险。大多数新品牌的首选起点。',
        uses: ['新手', '全能', '家庭'],
        for: ['初创品牌', '租赁舰队'],
        specs: "11'0\" × 32\" × 6\" · 滴胶 PVC · 15 PSI · 19 磅 (8.6 kg)",
        artwork: '军规滴胶核心 · 加强侧边 · 2+1 尾鳍 · 完整套装',
        price: '$399',
        image: 'https://assets.supsfactory.com/images/sups/products/afarer-sup-allround-board.webp',
        hue: 195,
      },
      {
        slug: 'sup-ocean-pulse',
        sku: 'SUP-OP11',
        name: '海潮脉冲系列',
        tagline: '等高线波浪设计师版',
        desc: '把海浪变成蒂芙尼蓝的等高线图案，配高精度机械压花与全套配色一致的配件。',
        uses: ['生活方式', '静水', '设计师款'],
        for: ['生活方式品牌', '精品旅行'],
        specs: "11'0\" × 32\" × 6\" · 滴胶 PVC · 15 PSI · 20 磅 (9.1 kg)",
        artwork: 'UV 数码印刷 + 机械热压花 · 配件统一配色',
        price: '$449',
        image: 'https://assets.supsfactory.com/images/sups/products/sup-series/sup-ocean-pulse-1.webp',
        hue: 210,
      },
      {
        slug: 'sup-cheetah-surge',
        sku: 'SUP-CS11',
        name: '猎豹奔涌版',
        tagline: '野性灵感高端版',
        desc: '野性的力量与艺术优雅相遇——粉彩粉、青绿与珊瑚橙的猎豹图案，采用永不褪色的多彩 EVA 拼块工艺。',
        uses: ['生活方式', '静水', '设计师款'],
        for: ['生活方式品牌', '社交优先品牌'],
        specs: "11'0\" × 32\" × 6\" · 滴胶 PVC · 15 PSI · 20 磅 (9.1 kg)",
        artwork: '多彩 EVA 拼块 + UV 印刷 · 防脱层结构',
        price: '$449',
        image: 'https://assets.supsfactory.com/images/sups/products/sup-series/sup-cheetah-surge-1.webp',
        hue: 28,
      },
      {
        slug: 'sup-medusa-glow',
        sku: 'SUP-MG11',
        name: '水母微光系列',
        tagline: '水母限定版',
        desc: '一片海底梦境——薄荷绿底色上的水母、海星与珊瑚礁，零褪色 EVA 图案，超强侧向稳定，适合瑜伽。',
        uses: ['瑜伽', '热带', '生活方式'],
        for: ['瑜伽工作室', '热带品牌'],
        specs: "11'0\" × 32\" × 6\" · 滴胶 PVC · 15 PSI · 20 磅 (9.1 kg)",
        artwork: '多彩 EVA 拼块 + UV 印刷 · 提手锚固于 PVC 船体',
        price: '$449',
        image: 'https://assets.supsfactory.com/images/sups/products/sup-series/sup-medusa-glow-1.webp',
        hue: 260,
      },
      {
        slug: 'sup-dolphin-wave',
        sku: 'SUP-DW11',
        name: '海豚逐浪系列',
        tagline: '360° 海洋版',
        desc: '跃出海面的海豚与中世纪蓝海浪，CNC 拼图式 EVA 拼接，丝印连续侧边图案环绕整板 360°。',
        uses: ['海洋', '静水', '设计师款'],
        for: ['海洋品牌', '度假村'],
        specs: "11'0\" × 32\" × 6\" · 滴胶 PVC · 15 PSI · 20 磅 (9.1 kg)",
        artwork: 'CNC 裁切 EVA 拼块 + 丝印侧边 · PANTONE TPG 色彩校准',
        price: '$449',
        image: 'https://assets.supsfactory.com/images/sups/products/sup-series/sup-dolphin-wave-1.webp',
        hue: 210,
      },
      {
        slug: 'sup-flowing-lotus',
        sku: 'SUP-FL11',
        name: '流水莲花系列',
        tagline: '东方艺术康养版',
        desc: '东方传统笔意与莲花、锦鲤、蜻蜓元素——激光蚀刻进防滑垫，永不磨损褪色。为静谧划行与瑜伽而生。',
        uses: ['瑜伽', '冥想', '静水'],
        for: ['瑜伽工作室', '康养品牌'],
        specs: "11'0\" × 32\" × 6\" · 滴胶 PVC · 15 PSI · 20 磅 (9.1 kg)",
        artwork: '双层激光蚀刻 EVA + 渐变 UV 印刷 · 动态拼色尾鳍',
        price: '$449',
        image: 'https://assets.supsfactory.com/images/sups/products/sup-series/sup-flowing-lotus-1.webp',
        hue: 150,
      },
      {
        slug: 'sup-jungle-mandala',
        sku: 'SUP-JM11',
        name: '丛林曼陀罗系列',
        tagline: '热带神圣几何',
        desc: '热带活力与神圣几何交汇——蒂芙尼蓝与珊瑚橙中的芙蓉、蜂鸟与曼陀罗图腾，满压状态下依然完美对称。',
        uses: ['热带', '近海', '设计师款'],
        for: ['热带品牌', '旅行'],
        specs: "11'0\" × 32\" × 6\" · 滴胶 PVC · 15 PSI · 20 磅 (9.1 kg)",
        artwork: '双层激光蚀刻 EVA + UV 印刷 + 丝印侧边 · 抗变形几何设计',
        price: '$449',
        image: 'https://assets.supsfactory.com/images/sups/products/sup-series/sup-jungle-mandala-1.webp',
        hue: 28,
      },
      {
        slug: 'sup-leviathan-wake',
        sku: 'SUP-LW11',
        name: '利维坦之浪系列',
        tagline: '鲸鱼限定版',
        desc: '蓝色巨鲸图腾配几何部落纹样与极简黑白涌浪线条——献给与海洋共鸣的划行者。',
        uses: ['海洋', '全能', '设计师款'],
        for: ['海洋品牌', '户外品牌'],
        specs: "11'0\" × 32\" × 6\" · 滴胶 PVC · 15 PSI · 20 磅 (9.1 kg)",
        artwork: 'UV 数码印刷 + 机械压花 · 底部 Logo 高弹性油墨',
        price: '$449',
        image: 'https://assets.supsfactory.com/images/sups/products/sup-series/sup-leviathan-wake-1.webp',
        hue: 195,
      },
      {
        slug: 'sup-ocean-voyager',
        sku: 'SUP-OV11',
        name: '远洋航行家系列',
        tagline: '海龟限定版',
        desc: '致敬海洋最伟大的漫游者——深青、蓝绿与珊瑚橙的几何海龟图案，配件从背包到气泵全套配色统一。',
        uses: ['巡航', '海洋', '全能'],
        for: ['巡航品牌', '户外品牌'],
        specs: "11'0\" × 32\" × 6\" · 滴胶 PVC · 15 PSI · 20 磅 (9.1 kg)",
        artwork: '多彩 EVA 拼块 + UV 印刷 · 背包、气泵、脚绳配色统一',
        price: '$449',
        image: 'https://assets.supsfactory.com/images/sups/products/sup-series/sup-ocean-voyager-1.webp',
        hue: 170,
      },
      {
        slug: 'sup-tropical-breeze',
        sku: 'SUP-TB11',
        name: '热带微风系列',
        tagline: '海岛逃离版',
        desc: '整幅海岛度假画卷——阳光、椰林与沙滩场景从微缩插画板头流向抽象的 EVA 拼色板尾。',
        uses: ['度假', '生活方式', '近海'],
        for: ['旅行品牌', '度假村'],
        specs: "11'0\" × 32\" × 6\" · 滴胶 PVC · 15 PSI · 20 磅 (9.1 kg)",
        artwork: 'UV 数码印刷 + 冲切 EVA 拼布 · 板头插画景观',
        price: '$449',
        image: 'https://assets.supsfactory.com/images/sups/products/sup-series/sup-tropical-breeze-1.webp',
        hue: 330,
      },
    ],
  },
}

/* ─────────────────────────── how it works ─────────────────────────── */

export interface Step {
  title: string
  body: string
}

export interface WorksContent {
  kicker: string
  title: string
  sub: string
  steps: Step[]
  note: string
}

export const works: Localized<WorksContent> = {
  en: {
    kicker: 'How It Works',
    title: 'From Your First Idea to Finished Products',
    sub: 'A clear, guided process — you always know what happens next.',
    steps: [
      {
        title: 'Share Your Idea',
        body: 'Tell us your vision, target market and quantity. A project specialist replies within one business day.',
      },
      {
        title: 'Choose Your SUP Model',
        body: 'Pick from proven platform shapes and constructions — or brief us on a fully custom build.',
      },
      {
        title: 'Approve Design & Sample',
        body: 'We develop your artwork, produce a sample and refine it until you approve.',
      },
      {
        title: 'Production & Delivery',
        body: 'Once approved, we run production with strict QC, then pack and ship worldwide.',
      },
      {
        title: 'Launch & Grow',
        body: 'Your boards arrive under your brand. Restock easily with repeat-order pricing and new models as you scale.',
      },
    ],
    note: 'Need help with design? Our team can support your artwork development — free with your first order.',
  },
  zh: {
    kicker: '合作流程',
    title: '从第一个想法到成品交付',
    sub: '清晰、有指导的全流程——每一步你都知道接下来会发生什么。',
    steps: [
      {
        title: '分享你的想法',
        body: '告诉我们你的愿景、目标市场与数量。项目专员会在一个工作日内回复。',
      },
      {
        title: '选择你的 SUP 板型',
        body: '从成熟的板型与结构方案中选择——或告诉我们你的全定制需求。',
      },
      {
        title: '确认设计与样品',
        body: '我们完成设计稿、制作样品，并持续打磨直到你确认。',
      },
      {
        title: '生产与交付',
        body: '确认后进入生产，全程严格质检，然后包装并运往全球。',
      },
      {
        title: '首发与增长',
        body: '成品板以你的品牌抵达。复购享老客价格，随规模增加新板型。',
      },
    ],
    note: '需要设计支持？我们的团队可以帮你完成图案开发——首单免费。',
  },
}

/* ─────────────────────────── gallery ─────────────────────────── */

export interface Project {
  tag: string
  title: string
  body: string
  hue: number
  image: string
}

export interface GalleryContent {
  kicker: string
  title: string
  sub: string
  projects: Project[]
}

export const gallery: Localized<GalleryContent> = {
  en: {
    kicker: 'Project Gallery',
    title: 'Custom SUP Projects',
    sub: 'A few of the brands, resorts and clubs we build for.',
    projects: [
      {
        tag: 'Resorts',
        title: 'Resort Collection',
        body: 'Custom SUP boards designed for a luxury guest experience — branded fleets in resort colors, delivered with full accessory packages.',
        hue: 195,
        image: 'https://assets.supsfactory.com/images/sups/products/sup-series/sup-tropical-breeze-1.webp',
      },
      {
        tag: 'Startups',
        title: 'Startup Brand Launch',
        body: 'Helping new brands enter the paddle sports market — from logo development and board graphics to packaging and first containers.',
        hue: 28,
        image: 'https://assets.supsfactory.com/images/sups/products/sup-series/sup-cheetah-surge-1.webp',
      },
      {
        tag: 'Clubs',
        title: 'Club Fleet Program',
        body: 'Durable, repeat-order fleets for surf and paddle clubs — reinforced construction, fleet pricing and replacement parts support.',
        hue: 210,
        image: 'https://assets.supsfactory.com/images/sups/products/afarer-sup-allround-board.webp',
      },
    ],
  },
  zh: {
    kicker: '项目案例',
    title: '定制 SUP 项目',
    sub: '我们服务的部分品牌、度假村与俱乐部。',
    projects: [
      {
        tag: '度假村',
        title: '度假村系列',
        body: '为奢华客人体验设计的定制 SUP——度假村专属配色的品牌舰队，附带完整配件套装。',
        hue: 195,
        image: 'https://assets.supsfactory.com/images/sups/products/sup-series/sup-tropical-breeze-1.webp',
      },
      {
        tag: '初创品牌',
        title: '品牌首发',
        body: '帮助新品牌进入桨板运动市场——从 Logo 与板面图案，到包装与第一批货柜。',
        hue: 28,
        image: 'https://assets.supsfactory.com/images/sups/products/sup-series/sup-cheetah-surge-1.webp',
      },
      {
        tag: '俱乐部',
        title: '俱乐部舰队计划',
        body: '为冲浪与桨板俱乐部提供耐用的复购舰队——加强结构、批量价格与配件更换支持。',
        hue: 210,
        image: 'https://assets.supsfactory.com/images/sups/products/afarer-sup-allround-board.webp',
      },
    ],
  },
}

/* ─────────────────────────── FAQ ─────────────────────────── */

export interface FaqItem {
  q: string
  a: string
}

export interface FaqContent {
  kicker: string
  title: string
  sub: string
  items: FaqItem[]
}

export const faq: Localized<FaqContent> = {
  en: {
    kicker: 'FAQ',
    title: 'Questions We Hear Before Every Project',
    sub: 'If yours isn’t here, ask us directly — we answer within one business day.',
    items: [
      {
        q: 'What is the minimum order quantity?',
        a: 'Our standard custom production starts from 50pcs per design, which helps startups reduce initial investment while keeping pricing fair. Larger quantities unlock better unit prices.',
      },
      {
        q: 'Can I create my own SUP brand?',
        a: 'Yes — that is exactly what we specialize in. We produce boards under your brand name with your graphics, colors, packaging and accessories, and we support you with design and mockups along the way.',
      },
      {
        q: 'Do you provide design support?',
        a: 'Yes. If you don’t have a design team, our in-house team can turn your ideas into production-ready artwork — board graphics, EVA pad layouts, logo placement and packaging design.',
      },
      {
        q: 'Can I customize accessories?',
        a: 'Absolutely. Paddles, pumps, backpacks, EVA pads, fins and packaging can all be customized and bundled into your complete product package.',
      },
      {
        q: 'How long does production take?',
        a: 'Typically 7–10 days for samples and 30–45 days for production once the design and sample are approved, depending on quantity and model.',
      },
      {
        q: 'Do you ship worldwide?',
        a: 'Yes, we ship globally with professional export packing. Your project specialist will confirm the best shipping option and timeline for your location.',
      },
    ],
  },
  zh: {
    kicker: '常见问题',
    title: '每个项目开始前，我们常被问到的问题',
    sub: '这里没有你的问题？直接问我们——一个工作日内回复。',
    items: [
      {
        q: '最低起订量是多少？',
        a: '标准定制生产每个设计 50 片起订，帮助初创品牌降低初始投入，同时保持合理价格。数量越大，单价越优。',
      },
      {
        q: '我可以创建自己的 SUP 品牌吗？',
        a: '可以——这正是我们的专长。我们用你的品牌名、图案、配色、包装与配件生产板子，并在过程中提供设计与效果图支持。',
      },
      {
        q: '你们提供设计支持吗？',
        a: '提供。如果你没有设计团队，我们的自有团队可以把你的想法变成可量产的设计稿——板面图案、EVA 防滑垫排版、Logo 位置与包装设计。',
      },
      {
        q: '配件可以定制吗？',
        a: '当然可以。桨、气泵、背包、EVA 防滑垫、尾鳍与包装都可以定制，并打包进你的完整产品套装。',
      },
      {
        q: '生产需要多长时间？',
        a: '通常打样 7–10 天；设计样品确认后，量产 30–45 天，具体视数量与板型而定。',
      },
      {
        q: '你们能发往全球吗？',
        a: '可以，我们提供全球发货与专业出口包装。项目专员会为你确认最适合的物流方案与时效。',
      },
    ],
  },
}

/* ─────────────────────────── CTA band ─────────────────────────── */

export interface CtaContent {
  title: string
  body: string
  button: string
  note: string
}

export const cta: Localized<CtaContent> = {
  en: {
    title: 'Ready to Launch Your Own SUP Brand?',
    body: 'Tell us about your project and get a tailored quote within one business day — no commitment required for the first conversation.',
    button: 'Start Your Project',
    note: 'Free consultation · Sample service · No minimum for the first talk',
  },
  zh: {
    title: '准备好创建你自己的 SUP 品牌了吗？',
    body: '告诉我们你的项目，一个工作日内拿到定制报价——第一次沟通无需任何承诺。',
    button: '开始你的项目',
    note: '免费咨询 · 打样服务 · 首次沟通无任何门槛',
  },
}

/* ─────────────────────────── about page ─────────────────────────── */

export interface AboutContent {
  kicker: string
  title: string
  sub: string
  story: string[]
  values: { title: string; body: string }[]
  capabilities: string[]
  stats: { value: string; label: string }[]
}

export const about: Localized<AboutContent> = {
  en: {
    kicker: 'About Us',
    title: 'The Manufacturing Partner Behind Emerging Paddle Brands',
    sub: 'SUPsfactory exists for one reason: great SUP brands shouldn’t require a factory.',
    story: [
      'We are a custom SUP manufacturing company that has spent years building boards for retailers, brands and rental operations around the world. Along the way, we kept meeting the same kind of customer — passionate founders, resorts, clubs and schools who had a clear vision for their own paddle brand but no way to produce it at a reasonable scale.',
      'So we built SUPsfactory around them. Flexible minimums starting from 50pcs, complete design support, and a manufacturing team that treats your first order as seriously as your hundredth. You bring the brand; we handle the factory.',
    ],
    values: [
      {
        title: 'Quality First',
        body: 'Every board passes multi-point QC — materials, lamination, graphics and packaging are checked at every stage of production.',
      },
      {
        title: 'Partner, Not Vendor',
        body: 'We work alongside your team from the first sketch to the final delivery, sharing production expertise at every step.',
      },
      {
        title: 'Flexible by Design',
        body: 'Low MOQs, modular options and honest lead times let emerging brands grow at their own pace.',
      },
    ],
    capabilities: ['OEM / ODM', 'Private label', 'Sample service', 'Design & artwork', 'Multi-point QC', 'Export logistics'],
    stats: [
      { value: '50pcs', label: 'Minimum order' },
      { value: '7–10 days', label: 'Sample lead time' },
      { value: '30–45 days', label: 'Production lead time' },
      { value: 'Worldwide', label: 'Shipping coverage' },
    ],
  },
  zh: {
    kicker: '关于我们',
    title: '新兴桨板品牌背后的制造伙伴',
    sub: 'SUPsfactory 存在的理由只有一个：好的 SUP 品牌不应该需要自己建厂。',
    story: [
      '我们是一家定制 SUP 制造公司，多年来为全球零售商、品牌与租赁运营方生产桨板。在这个过程中，我们不断遇到同一类客户——充满热情的创始人、度假村、俱乐部和学校，他们对自己品牌桨板有清晰的愿景，却没有规模合理的方式来生产它。',
      '于是我们围绕他们打造了 SUPsfactory：50 片起订的灵活起订量、完整的设计支持，以及一支把你的第一张订单看得和第一百张一样重要的制造团队。你负责品牌，我们负责工厂。',
    ],
    values: [
      {
        title: '品质优先',
        body: '每一块板都经过多节点质检——材料、层压、图案与包装在生产每个阶段都会被检查。',
      },
      {
        title: '伙伴，而非供应商',
        body: '从第一张草图到最终交付，我们与你的团队并肩工作，每一步都分享制造经验。',
      },
      {
        title: '为灵活而生',
        body: '低起订量、模块化选项与诚实的交期，让新兴品牌按自己的节奏成长。',
      },
    ],
    capabilities: ['OEM / ODM', '贴牌生产', '打样服务', '设计与制版', '多节点质检', '出口物流'],
    stats: [
      { value: '50 片', label: '最低起订量' },
      { value: '7–10 天', label: '打样周期' },
      { value: '30–45 天', label: '生产周期' },
      { value: '全球', label: '配送覆盖' },
    ],
  },
}

/* ─────────────────────────── customizer page ─────────────────────────── */

export interface CustomizerContent {
  kicker: string
  title: string
  sub: string
  status: string
  statusBody: string
  steps: { title: string; body: string }[]
  mockupLabel: string
  cta: string
}

export const customizer: Localized<CustomizerContent> = {
  en: {
    kicker: 'Design Your SUP',
    title: 'Visualize Your SUP Concept Before Production',
    sub: 'Preview how your brand will look on a real board — pick a color, watch the mockup update live, then send us your logo for a full design.',
    status: 'Interactive Preview',
    statusBody: 'Try the palette now, then send us your idea — our team will create a free mockup of your full design.',
    steps: [
      { title: 'Choose board model', body: 'From all-around platforms to touring and yoga shapes — each with realistic proportions.' },
      { title: 'Select colors', body: 'Pick your brand palette and watch the board change instantly.' },
      { title: 'Upload logo', body: 'Place your logo and artwork on the deck — adjust size and position.' },
      { title: 'Generate mockup', body: 'Export a preview of your custom SUP to share with your team.' },
    ],
    mockupLabel: 'Live mockup preview',
    cta: 'Create Your Design',
  },
  zh: {
    kicker: '设计你的 SUP',
    title: '生产前先预览你的 SUP 方案',
    sub: '先预览品牌在板上的效果——挑选颜色，效果图实时更新，再把 Logo 发给我们完成全套设计。',
    status: '交互预览',
    statusBody: '现在就可以试试配色，然后把想法发给我们——我们的团队会免费制作你的完整设计效果图。',
    steps: [
      { title: '选择板型', body: '从全能板到巡航板、瑜伽板——每个板型都按真实比例呈现。' },
      { title: '选择颜色', body: '挑选你的品牌色，板面实时变化。' },
      { title: '上传 Logo', body: '把你的 Logo 与图案放在板面上——可调整大小与位置。' },
      { title: '生成效果图', body: '导出你的定制 SUP 预览，与团队分享。' },
    ],
    mockupLabel: '实时效果预览',
    cta: '创建你的设计',
  },
}

/* ─────────────────────────── products page extras ─────────────────────────── */

export interface ProductsPageContent {
  kicker: string
  title: string
  sub: string
  customTitle: string
  customBody: string
  customPoints: string[]
}

export const productsPage: Localized<ProductsPageContent> = {
  en: {
    kicker: 'Products',
    title: 'SUP Boards, Customized to Your Brand',
    sub: 'Every model below is a manufacturing platform. Choose one as your starting point and we’ll adapt the shape, graphics, colors and specs to your brand.',
    customTitle: 'Every Product Can Be Customized',
    customBody: 'Nothing ships off-the-shelf. Each board is built for you with your choices at every layer.',
    customPoints: ['Shape & size', 'Colors & full-board graphics', 'Logo & EVA pad design', 'Accessories & packaging'],
  },
  zh: {
    kicker: '产品',
    title: 'SUP 板，按你的品牌定制',
    sub: '以下每一款都是制造平台。选择一个作为起点，我们将根据你的品牌调整板型、图案、配色与规格。',
    customTitle: '每款产品都可以定制',
    customBody: '没有一件现货产品。每一块板都按照你在每个层面上的选择为你制造。',
    customPoints: ['板型与尺寸', '配色与整板图案', 'Logo 与 EVA 垫设计', '配件与包装'],
  },
}

/* ─────────────────────────── gallery page extras ─────────────────────────── */

export interface GalleryPageContent {
  kicker: string
  title: string
  sub: string
  note: string
}

export const galleryPage: Localized<GalleryPageContent> = {
  en: {
    kicker: 'Project Gallery',
    title: 'Brands, Resorts and Clubs We Build For',
    sub: 'A look at how custom SUP projects come to life — from board graphics to complete brand launches.',
    note: 'Want your project featured here? Start a conversation and let’s design it together.',
  },
  zh: {
    kicker: '项目案例',
    title: '我们服务的品牌、度假村与俱乐部',
    sub: '看看定制 SUP 项目如何落地——从板面图案到完整的品牌首发。',
    note: '想让你的项目也出现在这里？开始一次沟通，我们一起设计。',
  },
}

/* ─────────────────────────── who-we-serve page extras ─────────────────────────── */

export interface ServePageContent {
  kicker: string
  title: string
  sub: string
}

export const servePage: Localized<ServePageContent> = {
  en: {
    kicker: 'Who We Serve',
    title: 'A Manufacturing Partner for Every Kind of Water Business',
    sub: 'Whether you’re launching a brand or outfitting a fleet, we structure every project around your business model.',
  },
  zh: {
    kicker: '客户群体',
    title: '适合各类水上业务的制造伙伴',
    sub: '无论你是创立品牌还是配置舰队，我们都会围绕你的业务模式来组织每一个项目。',
  },
}

/* ─────────────────────────── how-it-works page extras ─────────────────────────── */

export interface WorksPageContent {
  kicker: string
  title: string
  sub: string
  consultTitle: string
  consultBody: string
}

export const worksPage: Localized<WorksPageContent> = {
  en: {
    kicker: 'How It Works',
    title: 'A Guided Process, From Idea to Delivery',
    sub: 'No experience with manufacturing? You don’t need any — we guide you through every step.',
    consultTitle: 'Start With a Free Consultation',
    consultBody: 'Tell us where you are and where you want to be. We’ll recommend the fastest path to your first finished boards.',
  },
  zh: {
    kicker: '合作流程',
    title: '从想法到交付的全程指导',
    sub: '没有制造经验？你不需要有——我们带你走完每一步。',
    consultTitle: '从免费咨询开始',
    consultBody: '告诉我们你目前的状态与目标，我们会推荐最快拿到第一批成品板的路径。',
  },
}
