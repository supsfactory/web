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
    kicker: 'Custom SUP Product Development & Manufacturing Partner',
    titlePre: 'Turn Your',
    titleAccent: 'SUP Ideas',
    titlePost: 'Into Reality',
    sub: 'From product concepts and customization requirements to prototypes and production, SUPsfactory helps businesses create SUP products with reliable manufacturing support.',
    ctaPrimary: 'Discuss Your Project',
    ctaSecondary: 'Explore Custom Solutions',
    chips: ['Flexible MOQ', 'Custom Production', 'Powered by Afarer Manufacturing'],
    mockupLabel: 'Signature Platform',
    mockupBrand: "SUP Explorer 11'",
    mockupHint: 'Your graphics · your colors · your packaging',
    float1: { value: '50pcs', label: 'Minimum order' },
    float2: { value: '4–6 wks', label: 'Production time' },
  },
  zh: {
    kicker: '定制 SUP 产品开发与制造伙伴',
    titlePre: '把你的',
    titleAccent: 'SUP 想法',
    titlePost: '变成现实',
    sub: '从产品需求、定制方案到样品和批量生产，SUPsfactory 以可靠的制造支持，帮助企业把 SUP 产品想法转化为真实产品。',
    ctaPrimary: '讨论你的项目',
    ctaSecondary: '探索定制方案',
    chips: ['灵活起订量', '定制生产', 'Afarer 制造能力支持'],
    mockupLabel: '旗舰平台',
    mockupBrand: 'SUP 探索者 11\'',
    mockupHint: '你的图案 · 你的配色 · 你的包装',
    float1: { value: '50 片', label: '最低起订量' },
    float2: { value: '4–6 周', label: '生产周期' },
  },
}

/* ─────────────────────────── home: why us (Afarer advantage) ─────────────────────────── */

export interface WhyBullet {
  title: string
  body: string
}

export interface WhyContent {
  kicker: string
  title: string
  sub: string
  image: string
  imageCaption: string
  bullets: WhyBullet[]
}

export const why: Localized<WhyContent> = {
  en: {
    kicker: 'Powered by Afarer Manufacturing',
    title: 'Manufacturing Capability Behind Your Project',
    sub: 'Every project is supported by Afarer’s SUP manufacturing expertise — engineering, production, quality and supply.',
    image: 'https://assets.supsfactory.com/images/sups/factory/afarer-production-department.webp',
    imageCaption: 'Afarer manufacturing facility, Qingdao, China',
    bullets: [
      {
        title: 'Engineering Support',
        body: 'Professional SUP product development capability — specifications, materials and manufacturing feasibility evaluated before production.',
      },
      {
        title: 'Manufacturing Experience',
        body: 'Reliable production processes and quality control across every batch.',
      },
      {
        title: 'Flexible Production',
        body: 'Solutions for both customized and repeat projects, from small batches to volume.',
      },
      {
        title: 'Global Supply',
        body: 'Support from prototype to delivery, with worldwide shipping and professional export packing.',
      },
    ],
  },
  zh: {
    kicker: 'Afarer 制造能力支持',
    title: '项目背后的制造能力',
    sub: '每一个项目都由 Afarer 的 SUP 制造专长支撑——工程、生产、品质与全球供应。',
    image: 'https://assets.supsfactory.com/images/sups/factory/afarer-production-department.webp',
    imageCaption: 'Afarer 制造工厂,中国青岛',
    bullets: [
      {
        title: '工程支持',
        body: '专业的 SUP 产品开发能力——生产前评估规格、材料与制造可行性。',
      },
      {
        title: '制造经验',
        body: '可靠的生产流程与全批次质量控制。',
      },
      {
        title: '灵活生产',
        body: '同时支持定制项目与复购项目,从小批量到规模化生产。',
      },
      {
        title: '全球供应',
        body: '从打样到交付的全链条支持,全球发货与专业出口包装。',
      },
    ],
  },
}

/* ─────────────────────────── capability strip ─────────────────────────── */

export const strip: Localized<string[]> = {
  en: ['OEM & ODM', 'Private Label', 'Sample Service', 'Design & Artwork', 'QC on every run', 'Worldwide export'],
  zh: ['OEM & ODM', '贴牌生产', '打样服务', '设计与制版', '逐批质检', '全球出口'],
}

/* ─────────────────────────── who we serve / customer needs ─────────────────────────── */

export interface Segment {
  slug: string
  title: string
  body: string
  points: string[]
  cta: string
  href: string
}

export interface ServeContent {
  kicker: string
  title: string
  sub: string
  segments: Segment[]
}

export const serve: Localized<ServeContent> = {
  en: {
    kicker: 'Customer Needs',
    title: 'What Can We Help You Create?',
    sub: 'Every SUP project starts with a specific requirement.',
    segments: [
      {
        slug: 'custom-sup-products',
        title: 'Custom SUP Products',
        body: 'Customize boards, graphics, specifications and accessories — from your idea to a manufacturable product.',
        points: ['Board customization', 'Graphics & branding', 'Specification support'],
        cta: 'Explore Custom SUP',
        href: '/solutions/custom-sup',
      },
      {
        slug: 'private-label-sup',
        title: 'Private Label SUP',
        body: 'Develop SUP products under your own brand identity, produced and delivered by our factory.',
        points: ['Branded boards', 'Product packaging', 'Bulk supply'],
        cta: 'Learn More',
        href: '/solutions/private-label-sup',
      },
      {
        slug: 'resort-club-solutions',
        title: 'Resort & Club Solutions',
        body: 'Create branded SUP equipment for guests, teams and activities — with fleet-friendly production.',
        points: ['Branded guest fleets', 'Team equipment', 'Fleet pricing'],
        cta: 'View Solutions',
        href: '/solutions/resort-sup',
      },
      {
        slug: 'organization-projects',
        title: 'Organization Projects',
        body: 'Customized SUP solutions for schools, programs and events — with bulk supply support.',
        points: ['School programs', 'Event equipment', 'Bulk orders'],
        cta: 'Discuss Requirements',
        href: '/contact',
      },
    ],
  },
  zh: {
    kicker: '客户需求',
    title: '我们能帮你做什么?',
    sub: '每一个 SUP 项目都从一个具体需求开始。',
    segments: [
      {
        slug: 'custom-sup-products',
        title: '定制 SUP 产品',
        body: '定制板型、图案、规格与配件——从你的想法到可量产的产品。',
        points: ['板面定制', '图案与品牌', '规格支持'],
        cta: '了解定制 SUP',
        href: '/solutions/custom-sup',
      },
      {
        slug: 'private-label-sup',
        title: '贴牌 SUP',
        body: '以你自己的品牌开发 SUP 产品,由我们的工厂生产与交付。',
        points: ['品牌板面', '产品包装', '批量供应'],
        cta: '了解更多',
        href: '/solutions/private-label-sup',
      },
      {
        slug: 'resort-club-solutions',
        title: '度假村与俱乐部方案',
        body: '为客人、团队与活动打造品牌 SUP 装备——以适合舰队的生产方式。',
        points: ['品牌客用舰队', '团队装备', '舰队批量价'],
        cta: '查看方案',
        href: '/solutions/resort-sup',
      },
      {
        slug: 'organization-projects',
        title: '机构项目',
        body: '面向学校、项目与活动的定制 SUP 方案——支持批量供应。',
        points: ['学校项目', '活动装备', '批量订单'],
        cta: '讨论需求',
        href: '/contact',
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
    kicker: 'Customization Capability',
    title: 'Customize Your SUP Product',
    sub: 'Four areas you can customize — from the board itself to your production requirements.',
    pillars: [
      {
        title: 'Board Design',
        body: 'Define the board as your product requires.',
        points: ['Shape', 'Size', 'Thickness', 'Construction'],
      },
      {
        title: 'Graphics & Branding',
        body: 'Put your identity on every board.',
        points: ['Logo', 'Colors', 'Artwork', 'Printing'],
      },
      {
        title: 'Accessories',
        body: 'Complete the product with matched parts.',
        points: ['Paddle', 'Bag', 'Fin', 'Packaging'],
      },
      {
        title: 'Production Requirements',
        body: 'Tailor how your project is produced.',
        points: ['Quantity', 'Specification', 'Application'],
      },
    ],
  },
  zh: {
    kicker: '定制能力',
    title: '定制你的 SUP 产品',
    sub: '四个可定制方向——从板身本身到你的生产需求。',
    pillars: [
      {
        title: '板面设计',
        body: '按你的产品需求定义板面。',
        points: ['板型', '尺寸', '厚度', '结构'],
      },
      {
        title: '图案与品牌',
        body: '让每一块板都带上你的标识。',
        points: ['Logo', '配色', '图案', '印刷'],
      },
      {
        title: '配件',
        body: '用配套部件完善整个产品。',
        points: ['桨', '背包', '尾鳍', '包装'],
      },
      {
        title: '生产需求',
        body: '按你的项目定制生产方式。',
        points: ['数量', '规格', '应用场景'],
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
    kicker: 'Product Platforms',
    title: 'SUP Platforms Available For Customization',
    sub: 'Each series is a manufacturing platform — choose a starting point and we adapt the shape, graphics and specs to your product.',
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
    kicker: '产品平台',
    title: '可定制的 SUP 平台',
    sub: '以下每个系列都是制造平台——选择一个起点,我们将根据你的产品调整板型、图案与规格。',
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
    kicker: 'Product Development Process',
    title: 'From Requirement To Finished Product',
    sub: 'A clear process for turning your requirements into delivered products.',
    steps: [
      {
        title: 'Project Discussion',
        body: 'Understand your product requirements, market application and expectations.',
      },
      {
        title: 'Specification Development',
        body: 'Select suitable board type, materials and configurations.',
      },
      {
        title: 'Design Adjustment',
        body: 'Prepare graphics, colors and customization details.',
      },
      {
        title: 'Prototype & Sample',
        body: 'Confirm product appearance and performance before production.',
      },
      {
        title: 'Production',
        body: 'Manufacturing supported by Afarer’s factory and quality system.',
      },
      {
        title: 'Delivery',
        body: 'Reliable shipment and ongoing supply support.',
      },
    ],
    note: 'Samples are confirmed before production — you always know what your final product will look like.',
  },
  zh: {
    kicker: '产品开发流程',
    title: '从需求到成品交付',
    sub: '一个清晰的流程,把你的需求变成交付的产品。',
    steps: [
      {
        title: '项目沟通',
        body: '了解你的产品需求、应用场景与预期。',
      },
      {
        title: '规格开发',
        body: '选择合适的板型、材料与配置。',
      },
      {
        title: '设计调整',
        body: '准备图案、配色与定制细节。',
      },
      {
        title: '打样与样品',
        body: '量产前确认产品外观与性能。',
      },
      {
        title: '生产',
        body: '由 Afarer 工厂与质量体系支持的生产制造。',
      },
      {
        title: '交付',
        body: '可靠的发货与持续的供应支持。',
      },
    ],
    note: '样品会在量产前确认——你始终知道最终产品是什么样。',
  },
}

/* ─────────────────────────── home: what we help you solve ─────────────────────────── */

export interface SolveItem {
  problem: string
  solution: string
  body: string
}

export interface SolveContent {
  kicker: string
  title: string
  sub: string
  cta: string
  items: SolveItem[]
}

export const solve: Localized<SolveContent> = {
  en: {
    kicker: 'What We Help You Solve',
    title: 'We Help Solve Your SUP Product Challenges',
    sub: 'Your concerns first — here is how we address them.',
    cta: 'Discuss Your Project',
    items: [
      {
        problem: '“I have an idea, but I don’t know how to make it.”',
        solution: 'Product Development Support',
        body: 'We help evaluate specifications, materials and manufacturing feasibility.',
      },
      {
        problem: '“I need customization, but my quantity is limited.”',
        solution: 'Flexible Production',
        body: 'Support customized projects with practical production quantities.',
      },
      {
        problem: '“I need a reliable manufacturer.”',
        solution: 'Manufacturing Expertise',
        body: 'Benefit from Afarer’s SUP production experience and quality systems.',
      },
      {
        problem: '“I need to know what my final product will look like.”',
        solution: 'Prototype Development',
        body: 'Validate designs before moving into production.',
      },
    ],
  },
  zh: {
    kicker: '我们解决什么',
    title: '帮你解决 SUP 产品落地中的难题',
    sub: '先关注你的顾虑——这是我们给出的答案。',
    cta: '讨论你的项目',
    items: [
      {
        problem: '“我有一个想法,但不知道怎么做。”',
        solution: '产品开发支持',
        body: '我们帮你评估规格、材料与制造可行性。',
      },
      {
        problem: '“我需要定制,但数量不大。”',
        solution: '灵活生产',
        body: '以实际可行的起订量支持定制项目。',
      },
      {
        problem: '“我需要一个可靠的制造商。”',
        solution: '制造专长',
        body: '受益于 Afarer 的 SUP 生产经验与质量体系。',
      },
      {
        problem: '“我想知道最终产品长什么样。”',
        solution: '样品开发',
        body: '在量产前先验证设计与性能。',
      },
    ],
  },
}

/* ─────────────────────────── home: product platforms ─────────────────────────── */

export interface PlatformItem {
  title: string
  body: string
  uses: string[]
  cta: string
  href: string
}

export interface PlatformsContent {
  kicker: string
  title: string
  sub: string
  items: PlatformItem[]
}

export const platforms: Localized<PlatformsContent> = {
  en: {
    kicker: 'Product Platforms',
    title: 'SUP Platforms Available For Customization',
    sub: 'Not a product store — each platform below can be customized to your requirements.',
    items: [
      {
        title: 'Inflatable SUP',
        body: 'Classic all-around platforms for recreation, travel and outdoor programs.',
        uses: ['Resorts', 'Travel', 'Outdoor programs'],
        cta: 'Customize This Platform',
        href: '/contact',
      },
      {
        title: 'Touring SUP',
        body: 'Longer boards built for distance, speed and adventure paddling.',
        uses: ['Adventure', 'Recreation'],
        cta: 'Customize This Platform',
        href: '/contact',
      },
      {
        title: 'Racing SUP',
        body: 'Performance-oriented shapes for clubs, events and competition teams.',
        uses: ['Clubs', 'Events'],
        cta: 'Customize This Platform',
        href: '/contact',
      },
      {
        title: 'Multi-Purpose SUP',
        body: 'Versatile boards for schools, rental operations and organizations.',
        uses: ['Schools', 'Rental', 'Organizations'],
        cta: 'Customize This Platform',
        href: '/contact',
      },
    ],
  },
  zh: {
    kicker: '产品平台',
    title: '可定制的 SUP 平台',
    sub: '不是产品商城——以下每个平台都可以按你的需求定制。',
    items: [
      {
        title: '充气全能 SUP',
        body: '适合休闲、旅行与户外项目的经典全能板型。',
        uses: ['度假村', '旅行', '户外项目'],
        cta: '定制此平台',
        href: '/contact',
      },
      {
        title: '巡航 SUP',
        body: '为长距离、速度与探险划行打造的长板。',
        uses: ['探险', '休闲'],
        cta: '定制此平台',
        href: '/contact',
      },
      {
        title: '竞速 SUP',
        body: '为俱乐部、赛事与竞技团队打造的性能板型。',
        uses: ['俱乐部', '赛事'],
        cta: '定制此平台',
        href: '/contact',
      },
      {
        title: '多功能 SUP',
        body: '适合学校、租赁运营与机构的多用途板。',
        uses: ['学校', '租赁', '机构'],
        cta: '定制此平台',
        href: '/contact',
      },
    ],
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
    kicker: 'Customized SUP Projects',
    title: 'Customized SUP Projects',
    sub: 'Real projects — from client requirements to finished products.',
    projects: [
      {
        tag: 'Resorts',
        title: 'Resort SUP Equipment Project',
        body: 'Hotel required branded SUP equipment — custom graphics, matching accessories and production delivery.',
        hue: 195,
        image: 'https://assets.supsfactory.com/images/sups/products/sup-series/sup-tropical-breeze-1.webp',
      },
      {
        tag: 'Clubs',
        title: 'Paddle Club Team Boards',
        body: 'Club wanted customized boards — team graphics and specification adjustment, delivered for the season.',
        hue: 28,
        image: 'https://assets.supsfactory.com/images/sups/products/sup-series/sup-cheetah-surge-1.webp',
      },
      {
        tag: 'Outdoor Brand',
        title: 'Outdoor Brand Product Extension',
        body: 'Existing brand needed SUP products — product customization and manufacturing support for a new line.',
        hue: 210,
        image: 'https://assets.supsfactory.com/images/sups/products/afarer-sup-allround-board.webp',
      },
    ],
  },
  zh: {
    kicker: '定制 SUP 项目',
    title: '定制 SUP 项目',
    sub: '真实案例——从客户需求到成品交付。',
    projects: [
      {
        tag: '度假村',
        title: '度假村 SUP 装备项目',
        body: '酒店需要品牌化 SUP 装备——定制图案、配套配件与生产交付。',
        hue: 195,
        image: 'https://assets.supsfactory.com/images/sups/products/sup-series/sup-tropical-breeze-1.webp',
      },
      {
        tag: '俱乐部',
        title: '桨板俱乐部团队板',
        body: '俱乐部需要定制板面——团队图案与规格调整,当季交付。',
        hue: 28,
        image: 'https://assets.supsfactory.com/images/sups/products/sup-series/sup-cheetah-surge-1.webp',
      },
      {
        tag: '户外品牌',
        title: '户外品牌产品线扩展',
        body: '已有品牌需要新增 SUP 产品——产品定制与制造支持,推出新系列。',
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
    title: 'Questions Before You Start',
    sub: 'If yours isn’t here, ask us directly — we answer within one business day.',
    items: [
      {
        q: 'What is the minimum order quantity?',
        a: 'It depends on the product and customization requirements. Our team will evaluate your project and confirm a practical quantity for you.',
      },
      {
        q: 'Can you support small projects?',
        a: 'Yes. We support projects of different scales — from small batches to volume production.',
      },
      {
        q: 'Can I customize colors and logos?',
        a: 'Yes. Visual and specification customization — graphics, colors, logos and packaging — are all supported.',
      },
      {
        q: 'Do you provide samples?',
        a: 'Yes. Samples are developed and confirmed before production, so you always know what your final product will look like.',
      },
      {
        q: 'Who manufactures the products?',
        a: 'Products are manufactured through Afarer’s SUP manufacturing capability — a 12,000 m² factory in Qingdao, China with CE-certified quality systems.',
      },
    ],
  },
  zh: {
    kicker: '常见问题',
    title: '开始前的问题',
    sub: '这里没有你的问题？直接问我们——一个工作日内回复。',
    items: [
      {
        q: '最低起订量是多少?',
        a: '取决于产品与定制要求。我们的团队会评估你的项目,并确认一个实际可行的起订量。',
      },
      {
        q: '小项目也可以支持吗?',
        a: '可以。我们支持不同规模的项目——从小批量到规模化生产。',
      },
      {
        q: '可以定制颜色和 Logo 吗?',
        a: '可以。视觉与规格定制——图案、配色、Logo 与包装——都支持。',
      },
      {
        q: '提供样品吗?',
        a: '提供。样品会在量产前开发并确认,你始终知道最终产品是什么样。',
      },
      {
        q: '产品由谁生产?',
        a: '产品通过 Afarer 的 SUP 制造能力生产——位于中国青岛的 12,000 m² 工厂,具备 CE 认证质量体系。',
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
    title: 'Have A SUP Product Idea?',
    body: 'Tell us your requirements and our team will help evaluate the right solution.',
    button: 'Submit Your Project',
    note: 'Free consultation · Sample service · No minimum for the first talk',
  },
  zh: {
    title: '有一个 SUP 产品想法?',
    body: '告诉我们你的需求,我们的团队会帮你评估合适的方案。',
    button: '提交你的项目',
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
    kicker: 'Product Platforms',
    title: 'SUP Platforms Available For Customization',
    sub: 'Each model below is a manufacturing platform. Choose one as your starting point and we’ll adapt the shape, graphics, colors and specs to your product.',
    customTitle: 'Every Product Can Be Customized',
    customBody: 'Nothing ships off-the-shelf. Each board is built for you with your choices at every layer.',
    customPoints: ['Shape & size', 'Colors & full-board graphics', 'Logo & EVA pad design', 'Accessories & packaging'],
  },
  zh: {
    kicker: '产品平台',
    title: '可定制的 SUP 平台',
    sub: '以下每一款都是制造平台。选择一个作为起点,我们将根据你的产品调整板型、图案、配色与规格。',
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
    kicker: 'Customized SUP Projects',
    title: 'Customized SUP Projects',
    sub: 'A look at how SUP products come to life — from client requirements to finished boards.',
    note: 'Want your project featured here? Start a conversation and let’s design it together.',
  },
  zh: {
    kicker: '定制 SUP 项目',
    title: '定制 SUP 项目',
    sub: '看看 SUP 产品如何落地——从客户需求到成品交付。',
    note: '想让你的项目也出现在这里?开始一次沟通,我们一起设计。',
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
    kicker: 'Customer Needs',
    title: 'Custom SUP Solutions For Your Business',
    sub: 'Whether you need branded boards for your organization or customized SUP products for your business, we help turn requirements into finished products.',
  },
  zh: {
    kicker: '客户需求',
    title: '适合你的业务的定制 SUP 方案',
    sub: '无论你需要机构品牌板还是企业定制产品,我们都帮你把需求变成成品。',
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
    kicker: 'Product Development Process',
    title: 'From Requirement To Finished Product',
    sub: 'From project discussion to delivery — we guide you through every step of product development.',
    consultTitle: 'Start With a Free Consultation',
    consultBody: 'Tell us where you are and where you want to be. We’ll recommend the fastest path to your first finished boards.',
  },
  zh: {
    kicker: '产品开发流程',
    title: '从需求到成品交付',
    sub: '从项目沟通到交付——我们带你走完产品开发的每一步。',
    consultTitle: '从免费咨询开始',
    consultBody: '告诉我们你目前的状态与目标,我们会推荐最快拿到第一批成品板的路径。',
  },
}
