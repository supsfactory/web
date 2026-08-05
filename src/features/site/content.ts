import type { Locale } from '@/features/i18n/locale'

/**
 * Marketing content for the SUPsfactory site, localized en/es.
 *
 * Content (headlines, body copy, products, FAQ, landings) lives here rather
 * than in the i18n dictionaries, which stay reserved for structural UI strings
 * (nav, buttons, form labels). Every entry is bilingual so both locale routes
 * render the same structure.
 */

export interface Localized<T> {
  en: T
  es: T
}

export function pick<T>(d: Localized<T>, locale: Locale): T {
  return locale === 'es' ? d.es : d.en
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
    sub: 'From product concepts and customization requirements to prototypes and production, SUPsfactory helps businesses create SUP products through professional development and manufacturing support.',
    ctaPrimary: 'Discuss Your SUP Project',
    ctaSecondary: 'Explore Custom Solutions',
    chips: ['Flexible MOQ', 'Custom Production', 'Powered by Afarer'],
    mockupLabel: 'Signature Platform',
    mockupBrand: "SUP Explorer 11'",
    mockupHint: 'Your graphics · your colors · your packaging',
    float1: { value: '50pcs', label: 'Minimum order' },
    float2: { value: '4–6 wks', label: 'Production time' },
  },
  es: {
    kicker: 'Socio de desarrollo y fabricación de productos SUP personalizados',
    titlePre: 'Convierte tus',
    titleAccent: 'ideas SUP',
    titlePost: 'en realidad',
    sub: 'Desde conceptos de producto y requisitos de personalización hasta prototipos y producción, SUPsfactory ayuda a las empresas a crear productos SUP con apoyo profesional de desarrollo y fabricación.',
    ctaPrimary: 'Comenta tu proyecto SUP',
    ctaSecondary: 'Explora soluciones personalizadas',
    chips: ['MOQ flexible', 'Producción personalizada', 'Con la fabricación de Afarer'],
    mockupLabel: 'Plataforma insignia',
    mockupBrand: 'SUP Explorer 11\'',
    mockupHint: 'Tus gráficos · tus colores · tu packaging',
    float1: { value: '50 uds.', label: 'Pedido mínimo' },
    float2: { value: '4–6 sem.', label: 'Tiempo de producción' },
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
    kicker: 'Powered by Afarer',
    title: 'Powered by Afarer Expertise',
    sub: 'Supsfactory works with Afarer’s SUP manufacturing capabilities to support product development, production and delivery.',
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
  es: {
    kicker: 'Con la fabricación de Afarer',
    title: 'Respaldo de la experiencia de fabricación de Afarer',
    sub: 'Supsfactory trabaja con las capacidades de fabricación de SUP de Afarer para apoyar el desarrollo de producto, la producción y la entrega.',
    image: 'https://assets.supsfactory.com/images/sups/factory/afarer-production-department.webp',
    imageCaption: 'Instalaciones de fabricación de Afarer, Qingdao, China',
    bullets: [
      {
        title: 'Soporte de ingeniería',
        body: 'Capacidad profesional de desarrollo de productos SUP: especificaciones, materiales y viabilidad de fabricación evaluados antes de la producción.',
      },
      {
        title: 'Experiencia en fabricación',
        body: 'Procesos de producción fiables y control de calidad en cada lote.',
      },
      {
        title: 'Producción flexible',
        body: 'Soluciones para proyectos personalizados y recurrentes, de pequeños lotes a volumen.',
      },
      {
        title: 'Suministro global',
        body: 'Apoyo del prototipo a la entrega, con envío mundial y embalaje de exportación profesional.',
      },
    ],
  },
}

/* ─────────────────────────── capability strip ─────────────────────────── */

export const strip: Localized<string[]> = {
  en: ['OEM & ODM', 'Private Label', 'Sample Service', 'Design & Artwork', 'QC on every run', 'Worldwide export'],
  es: ['OEM & ODM', 'Marca privada', 'Servicio de muestras', 'Diseño y arte', 'QC en cada lote', 'Exportación mundial'],
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
        href: '/custom-sup-development',
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
  es: {
    kicker: 'Necesidades del cliente',
    title: '¿Qué podemos ayudarte a crear?',
    sub: 'Cada proyecto SUP empieza con un requisito concreto.',
    segments: [
      {
        slug: 'custom-sup-products',
        title: 'Productos SUP personalizados',
        body: 'Personaliza tablas, gráficos, especificaciones y accesorios — de tu idea a un producto fabricable.',
        points: ['Personalización de tablas', 'Gráficos y branding', 'Apoyo en especificaciones'],
        cta: 'Explorar SUP personalizado',
        href: '/custom-sup-development',
      },
      {
        slug: 'private-label-sup',
        title: 'SUP de marca privada',
        body: 'Desarrolla productos SUP bajo tu propia identidad de marca, producidos y entregados por nuestra fábrica.',
        points: ['Tablas con marca', 'Embalaje del producto', 'Suministro por volumen'],
        cta: 'Saber más',
        href: '/solutions/private-label-sup',
      },
      {
        slug: 'resort-club-solutions',
        title: 'Soluciones para resorts y clubes',
        body: 'Crea equipamiento SUP con marca para huéspedes, equipos y actividades — con producción adaptada a flotas.',
        points: ['Flotas con marca para huéspedes', 'Equipamiento de equipo', 'Precios por flota'],
        cta: 'Ver soluciones',
        href: '/solutions/resort-sup',
      },
      {
        slug: 'organization-projects',
        title: 'Proyectos de organizaciones',
        body: 'Soluciones SUP personalizadas para escuelas, programas y eventos — con apoyo de suministro por volumen.',
        points: ['Programas escolares', 'Equipamiento para eventos', 'Pedidos por volumen'],
        cta: 'Comenta tus requisitos',
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
    title: 'Custom SUP Product Solutions For Your Business',
    sub: 'Whether you need customized SUP products, private label manufacturing support, resort equipment or organization solutions, we help transform requirements into finished products.',
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
  es: {
    kicker: 'Capacidad de personalización',
    title: 'Soluciones de productos SUP personalizados para tu negocio',
    sub: 'Ya sea que necesites productos SUP personalizados, soporte de fabricación de marca privada, equipamiento para resorts o soluciones para organizaciones, te ayudamos a convertir los requisitos en productos terminados.',
    pillars: [
      {
        title: 'Diseño de la tabla',
        body: 'Define la tabla según lo que requiere tu producto.',
        points: ['Forma', 'Tamaño', 'Grosor', 'Construcción'],
      },
      {
        title: 'Gráficos y marca',
        body: 'Pon tu identidad en cada tabla.',
        points: ['Logo', 'Colores', 'Arte', 'Impresión'],
      },
      {
        title: 'Accesorios',
        body: 'Completa el producto con piezas a juego.',
        points: ['Remo', 'Bolsa', 'Quilla', 'Embalaje'],
      },
      {
        title: 'Requisitos de producción',
        body: 'Adapta cómo se produce tu proyecto.',
        points: ['Cantidad', 'Especificación', 'Aplicación'],
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
  es: {
    kicker: 'Estudio SUP personalizado',
    title: 'Cada capa, diseñada por ti',
    sub: 'Desliza por todo el proceso — de la forma de la tabla a la caja en la que se envía, cada capa es tuya para definir.',
    scrollHint: 'Desliza para explorar',
    steps: [
      {
        title: 'Forma de la tabla',
        body: 'Elige una plataforma probada o especifica una propia: tamaño, rails y construcción son tuyos para definir.',
      },
      {
        title: 'Gráficos',
        body: 'Arte a toda cubierta en tus colores. Nuestro equipo de diseño convierte ideas en bruto en impresiones listas para producción.',
      },
      {
        title: 'Piso de cubierta',
        body: 'Piso EVA en los colores de tu marca, con logos personalizados, recortes y texturas.',
      },
      {
        title: 'Accesorios',
        body: 'Remos, bombas, bolsas y quillas — todos personalizables e incluidos con tus tablas.',
      },
      {
        title: 'Embalaje',
        body: 'Cajas con marca y fundas impresas que hacen que cada entrega se sienta como un lanzamiento.',
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
  es: {
    kicker: 'Plataformas de producto',
    title: 'Plataformas SUP disponibles para personalización',
    sub: 'Cada serie es una plataforma de fabricación: elige un punto de partida y adaptamos la forma, los gráficos y las especificaciones a tu producto.',
    items: [
      {
        slug: 'sup-explorer-11',
        sku: 'SUP-EX11',
        name: 'SUP Explorer 11\'',
        tagline: 'El clásico polivalente',
        desc: 'Nuestra tabla polivalente más popular: estabilidad de cuerpo ancho para principiantes, agilidad para intermedios y portabilidad para cualquier aventura. El punto de partida por defecto para la mayoría de las marcas nuevas.',
        uses: ['Principiante', 'Polivalente', 'Familia'],
        for: ['Marcas emergentes', 'Flotas de alquiler'],
        specs: "11'0\" × 32\" × 6\" · PVC drop-stitch · 15 PSI · 19 lb (8.6 kg)",
        artwork: 'Núcleo drop-stitch de grado militar · rails reforzados · quillas 2+1 · paquete completo',
        price: '$399',
        image: 'https://assets.supsfactory.com/images/sups/products/afarer-sup-allround-board.webp',
        hue: 195,
      },
      {
        slug: 'sup-ocean-pulse',
        sku: 'SUP-OP11',
        name: 'Serie Ocean Pulse',
        tagline: 'Edición de diseñador de olas topográficas',
        desc: 'Olas del océano transformadas en contornos topográficos azul Tiffany con gofrado mecánico de alta precisión y un kit de accesorios a juego.',
        uses: ['Estilo de vida', 'Aguas tranquilas', 'Diseñador'],
        for: ['Marcas lifestyle', 'Turismo boutique'],
        specs: "11'0\" × 32\" × 6\" · PVC drop-stitch · 15 PSI · 20 lb (9.1 kg)",
        artwork: 'Impresión UV digital + gofrado térmico mecánico · accesorios coordinados',
        price: '$449',
        image: 'https://assets.supsfactory.com/images/sups/products/sup-series/sup-ocean-pulse-1.webp',
        hue: 210,
      },
      {
        slug: 'sup-cheetah-surge',
        sku: 'SUP-CS11',
        name: 'Edición Cheetah Surge',
        tagline: 'Edición premium de inspiración salvaje',
        desc: 'Poder salvaje bruto con elegancia artística: un motivo de guepardo en rosa pastel, azul verdoso y coral, construido con mosaicos EVA multicolor que no destiñen.',
        uses: ['Estilo de vida', 'Aguas tranquilas', 'Diseñador'],
        for: ['Marcas lifestyle', 'Marcas social-first'],
        specs: "11'0\" × 32\" × 6\" · PVC drop-stitch · 15 PSI · 20 lb (9.1 kg)",
        artwork: 'Mosaicos EVA multicolor + impresión UV · construcción antidelaminación',
        price: '$449',
        image: 'https://assets.supsfactory.com/images/sups/products/sup-series/sup-cheetah-surge-1.webp',
        hue: 28,
      },
      {
        slug: 'sup-medusa-glow',
        sku: 'SUP-MG11',
        name: 'Serie Medusa Glow',
        tagline: 'La edición medusa',
        desc: 'Un paisaje submarino de ensueño: medusas vibrantes, estrellas de mar y arrecifes de coral en refrescante verde menta, con arte EVA sin decoloración y excepcional estabilidad lateral para yoga.',
        uses: ['Yoga', 'Tropical', 'Estilo de vida'],
        for: ['Estudios de yoga', 'Marcas tropicales'],
        specs: "11'0\" × 32\" × 6\" · PVC drop-stitch · 15 PSI · 20 lb (9.1 kg)",
        artwork: 'Mosaicos EVA multicolor + impresión UV · asa anclada al casco de PVC',
        price: '$449',
        image: 'https://assets.supsfactory.com/images/sups/products/sup-series/sup-medusa-glow-1.webp',
        hue: 260,
      },
      {
        slug: 'sup-dolphin-wave',
        sku: 'SUP-DW11',
        name: 'Serie Dolphin Wave',
        tagline: 'Edición marina 360°',
        desc: 'Delfines saltando y capas de olas azul medieval con splicado EVA cortado por CNC e impresión serigráfica de arte continuo en los rails que envuelve la tabla 360°.',
        uses: ['Marino', 'Aguas tranquilas', 'Diseñador'],
        for: ['Marcas marinas', 'Resorts'],
        specs: "11'0\" × 32\" × 6\" · PVC drop-stitch · 15 PSI · 20 lb (9.1 kg)",
        artwork: 'Splicado de bloques de color EVA por CNC + rails serigrafiados · ajuste de color PANTONE TPG',
        price: '$449',
        image: 'https://assets.supsfactory.com/images/sups/products/sup-series/sup-dolphin-wave-1.webp',
        hue: 210,
      },
      {
        slug: 'sup-flowing-lotus',
        sku: 'SUP-FL11',
        name: 'Serie Flowing Lotus',
        tagline: 'Edición de bienestar artístico oriental',
        desc: 'Pinceladas orientales tradicionales con motivos de loto, carpas y libélulas, grabadas con láser en el piso antideslizante para que nunca se desgasten ni destiñan. Diseñada para remar con calma y practicar yoga.',
        uses: ['Yoga', 'Meditación', 'Aguas tranquilas'],
        for: ['Estudios de yoga', 'Marcas de bienestar'],
        specs: "11'0\" × 32\" × 6\" · PVC drop-stitch · 15 PSI · 20 lb (9.1 kg)",
        artwork: 'EVA grabada con láser de doble capa + impresión UV degradada · quillas dinámicas en bloques de color',
        price: '$449',
        image: 'https://assets.supsfactory.com/images/sups/products/sup-series/sup-flowing-lotus-1.webp',
        hue: 150,
      },
      {
        slug: 'sup-jungle-mandala',
        sku: 'SUP-JM11',
        name: 'Serie Jungle Mandala',
        tagline: 'Geometría sagrada tropical',
        desc: 'Vitalidad tropical con geometría sagrada: hibiscos, colibríes y tótems mandala en azul Tiffany y naranja coral, diseñados para mantenerse perfectamente simétricos a máxima presión.',
        uses: ['Tropical', 'Costero', 'Diseñador'],
        for: ['Marcas tropicales', 'Viajes'],
        specs: "11'0\" × 32\" × 6\" · PVC drop-stitch · 15 PSI · 20 lb (9.1 kg)",
        artwork: 'EVA grabada con láser de doble capa + impresión UV + rails serigrafiados · geometría antideformación',
        price: '$449',
        image: 'https://assets.supsfactory.com/images/sups/products/sup-series/sup-jungle-mandala-1.webp',
        hue: 28,
      },
      {
        slug: 'sup-leviathan-wake',
        sku: 'SUP-LW11',
        name: 'Serie Leviathan Wake',
        tagline: 'La edición ballena',
        desc: 'Un majestuoso tótem de ballena azul con patrones tribales geométricos y líneas de oleaje minimalistas en blanco y negro, para remeros que conectan con el océano.',
        uses: ['Océano', 'Polivalente', 'Diseñador'],
        for: ['Marcas oceánicas', 'Marcas outdoor'],
        specs: "11'0\" × 32\" × 6\" · PVC drop-stitch · 15 PSI · 20 lb (9.1 kg)",
        artwork: 'Impresión UV digital + gofrado mecánico · tintas PVC estirables en el logo inferior',
        price: '$449',
        image: 'https://assets.supsfactory.com/images/sups/products/sup-series/sup-leviathan-wake-1.webp',
        hue: 195,
      },
      {
        slug: 'sup-ocean-voyager',
        sku: 'SUP-OV11',
        name: 'Serie Ocean Voyager',
        tagline: 'La edición tortuga marina',
        desc: 'Un homenaje al vagabundo supremo del océano: arte geométrico de tortuga marina en azul profundo, turquesa y naranja coral, con un kit de accesorios coordinados de principio a fin.',
        uses: ['Travesía', 'Océano', 'Polivalente'],
        for: ['Marcas de travesía', 'Marcas outdoor'],
        specs: "11'0\" × 32\" × 6\" · PVC drop-stitch · 15 PSI · 20 lb (9.1 kg)",
        artwork: 'Mosaicos EVA multicolor + impresión UV · mochila, bomba y leash a juego',
        price: '$449',
        image: 'https://assets.supsfactory.com/images/sups/products/sup-series/sup-ocean-voyager-1.webp',
        hue: 170,
      },
      {
        slug: 'sup-tropical-breeze',
        sku: 'SUP-TB11',
        name: 'Serie Tropical Breeze',
        tagline: 'Edición escapada isleña',
        desc: 'Un lienzo completo de vacaciones en la isla: sol, cocoteros y escenas de playa que fluyen desde una proa con micro ilustraciones hacia bloques de color EVA abstractos en la cola.',
        uses: ['Vacaciones', 'Estilo de vida', 'Costero'],
        for: ['Marcas de viajes', 'Resorts'],
        specs: "11'0\" × 32\" × 6\" · PVC drop-stitch · 15 PSI · 20 lb (9.1 kg)",
        artwork: 'Impresión UV digital + patchwork EVA troquelado · paisaje ilustrado en la proa',
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
    title: 'From SUP Concept To Finished Product',
    sub: 'A clear process for turning your requirements into delivered products.',
    steps: [
      {
        title: 'Requirement Discussion',
        body: 'Understand your product requirements, market application and expectations.',
      },
      {
        title: 'Product Specification',
        body: 'Select suitable board type, materials and configurations.',
      },
      {
        title: 'Design Adjustment',
        body: 'Prepare graphics, colors and customization details.',
      },
      {
        title: 'Prototype Development',
        body: 'Develop a prototype that confirms appearance and performance.',
      },
      {
        title: 'Sample Approval',
        body: 'Confirm the physical sample before production starts.',
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
  es: {
    kicker: 'Proceso de desarrollo de producto',
    title: 'Del concepto SUP al producto terminado',
    sub: 'Un proceso claro para convertir tus requisitos en productos entregados.',
    steps: [
      {
        title: 'Discusión de requisitos',
        body: 'Entendemos tus requisitos de producto, aplicación de mercado y expectativas.',
      },
      {
        title: 'Especificación del producto',
        body: 'Seleccionamos el tipo de tabla, materiales y configuraciones adecuados.',
      },
      {
        title: 'Ajuste de diseño',
        body: 'Preparamos gráficos, colores y detalles de personalización.',
      },
      {
        title: 'Desarrollo de prototipo',
        body: 'Desarrollamos un prototipo que confirma apariencia y rendimiento.',
      },
      {
        title: 'Aprobación de la muestra',
        body: 'Confirmamos la muestra física antes de que empiece la producción.',
      },
      {
        title: 'Producción',
        body: 'Fabricación respaldada por la fábrica y el sistema de calidad de Afarer.',
      },
      {
        title: 'Entrega',
        body: 'Envío fiable y soporte de suministro continuo.',
      },
    ],
    note: 'Las muestras se confirman antes de la producción: siempre sabes cómo será tu producto final.',
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
    title: 'Solve Your SUP Product Development Challenges',
    sub: 'Your concerns first — here is how we address them.',
    cta: 'Discuss Your Project',
    items: [
      {
        problem: '“Need A Custom SUP Product?”',
        solution: 'Product Development Support',
        body: 'We help evaluate product requirements, specifications and manufacturing feasibility.',
      },
      {
        problem: '“Need Customized Graphics Or Specifications?”',
        solution: 'Customization Support',
        body: 'From board design and graphics to accessories and packaging.',
      },
      {
        problem: '“Need Production Without Your Own Factory?”',
        solution: 'Manufacturing Support',
        body: 'Access Afarer’s SUP manufacturing capability without building your own production system.',
      },
    ],
  },
  es: {
    kicker: 'Qué te ayudamos a resolver',
    title: 'Resuelve los retos de desarrollo de tu producto SUP',
    sub: 'Tus inquietudes primero: así las abordamos.',
    cta: 'Comenta tu proyecto',
    items: [
      {
        problem: '«¿Necesitas un producto SUP personalizado?»',
        solution: 'Soporte de desarrollo de producto',
        body: 'Te ayudamos a evaluar requisitos de producto, especificaciones y viabilidad de fabricación.',
      },
      {
        problem: '«¿Necesitas gráficos o especificaciones personalizados?»',
        solution: 'Soporte de personalización',
        body: 'Del diseño de la tabla y los gráficos a los accesorios y el embalaje.',
      },
      {
        problem: '«¿Necesitas producción sin tener tu propia fábrica?»',
        solution: 'Soporte de fabricación',
        body: 'Accede a la capacidad de fabricación de SUP de Afarer sin construir tu propio sistema de producción.',
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
    title: 'SUP Products Available For Customization',
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
  es: {
    kicker: 'Plataformas de producto',
    title: 'Productos SUP disponibles para personalización',
    sub: 'No es una tienda de productos: cada plataforma de abajo puede personalizarse según tus requisitos.',
    items: [
      {
        title: 'SUP hinchable',
        body: 'Plataformas polivalentes clásicas para recreación, viajes y programas al aire libre.',
        uses: ['Resorts', 'Viajes', 'Programas outdoor'],
        cta: 'Personaliza esta plataforma',
        href: '/contact',
      },
      {
        title: 'SUP de travesía',
        body: 'Tablas más largas diseñadas para distancia, velocidad y remadas de aventura.',
        uses: ['Aventura', 'Recreación'],
        cta: 'Personaliza esta plataforma',
        href: '/contact',
      },
      {
        title: 'SUP de competición',
        body: 'Formas orientadas al rendimiento para clubes, eventos y equipos de competición.',
        uses: ['Clubes', 'Eventos'],
        cta: 'Personaliza esta plataforma',
        href: '/contact',
      },
      {
        title: 'SUP multiusos',
        body: 'Tablas versátiles para escuelas, operaciones de alquiler y organizaciones.',
        uses: ['Escuelas', 'Alquiler', 'Organizaciones'],
        cta: 'Personaliza esta plataforma',
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
  es: {
    kicker: 'Proyectos SUP personalizados',
    title: 'Proyectos SUP personalizados',
    sub: 'Proyectos reales: de los requisitos del cliente a los productos terminados.',
    projects: [
      {
        tag: 'Resorts',
        title: 'Proyecto de equipamiento SUP para resort',
        body: 'Un hotel necesitaba equipamiento SUP con marca: gráficos personalizados, accesorios a juego y entrega de producción.',
        hue: 195,
        image: 'https://assets.supsfactory.com/images/sups/products/sup-series/sup-tropical-breeze-1.webp',
      },
      {
        tag: 'Clubes',
        title: 'Tablas de equipo para club de remo',
        body: 'Un club quería tablas personalizadas: gráficos de equipo y ajuste de especificaciones, entregadas para la temporada.',
        hue: 28,
        image: 'https://assets.supsfactory.com/images/sups/products/sup-series/sup-cheetah-surge-1.webp',
      },
      {
        tag: 'Marca outdoor',
        title: 'Extensión de línea de producto de marca outdoor',
        body: 'Una marca existente necesitaba productos SUP: personalización de producto y soporte de fabricación para una nueva línea.',
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
        q: 'What does Supsfactory do?',
        a: 'Supsfactory helps businesses and organizations develop customized SUP products from concept, design and prototype to production.',
      },
      {
        q: 'Can Supsfactory support small quantity custom SUP projects?',
        a: 'Yes. Project requirements are evaluated based on product specifications, customization needs and production requirements.',
      },
      {
        q: 'Do you manufacture SUP products?',
        a: 'Supsfactory provides product development and manufacturing support through Afarer’s SUP manufacturing capabilities.',
      },
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
  es: {
    kicker: 'Preguntas frecuentes',
    title: 'Preguntas antes de empezar',
    sub: '¿No encuentras la tuya? Pregúntanos directamente: respondemos en un día laborable.',
    items: [
      {
        q: '¿Qué hace Supsfactory?',
        a: 'Supsfactory ayuda a empresas y organizaciones a desarrollar productos SUP personalizados desde el concepto, el diseño y el prototipo hasta la producción.',
      },
      {
        q: '¿Supsfactory puede apoyar proyectos SUP personalizados de pequeñas cantidades?',
        a: 'Sí. Los requisitos del proyecto se evalúan según las especificaciones del producto, las necesidades de personalización y los requisitos de producción.',
      },
      {
        q: '¿Fabricáis productos SUP?',
        a: 'Supsfactory proporciona desarrollo de producto y soporte de fabricación a través de las capacidades de fabricación de SUP de Afarer.',
      },
      {
        q: '¿Cuál es la cantidad mínima de pedido?',
        a: 'Depende del producto y de los requisitos de personalización. Nuestro equipo evaluará tu proyecto y confirmará una cantidad práctica para ti.',
      },
      {
        q: '¿Podéis apoyar proyectos pequeños?',
        a: 'Sí. Apoyamos proyectos de distintas escalas: de pequeños lotes a producción por volumen.',
      },
      {
        q: '¿Puedo personalizar colores y logos?',
        a: 'Sí. Se admite la personalización visual y de especificaciones: gráficos, colores, logos y embalaje.',
      },
      {
        q: '¿Proporcionáis muestras?',
        a: 'Sí. Las muestras se desarrollan y confirman antes de la producción, para que siempre sepas cómo será tu producto final.',
      },
      {
        q: '¿Quién fabrica los productos?',
        a: 'Los productos se fabrican a través de la capacidad de fabricación de SUP de Afarer: una fábrica de 12.000 m² en Qingdao, China, con sistemas de calidad certificados CE.',
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
    button: 'Submit Your Project Requirements',
    note: 'Free consultation · Sample service · No minimum for the first talk',
  },
  es: {
    title: '¿Tienes una idea de producto SUP?',
    body: 'Cuéntanos tus requisitos y nuestro equipo te ayudará a evaluar la solución adecuada.',
    button: 'Envía los requisitos de tu proyecto',
    note: 'Consulta gratuita · Servicio de muestras · Sin mínimo en la primera conversación',
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
  es: {
    kicker: 'Sobre nosotros',
    title: 'El socio de fabricación detrás de las marcas de remo emergentes',
    sub: 'SUPsfactory existe por una razón: las grandes marcas de SUP no deberían necesitar una fábrica.',
    story: [
      'Somos una empresa de fabricación de SUP personalizados que lleva años construyendo tablas para minoristas, marcas y operaciones de alquiler de todo el mundo. En el camino, no dejamos de encontrarnos con el mismo tipo de cliente: fundadores apasionados, resorts, clubes y escuelas con una visión clara para su propia marca de remo, pero sin forma de producirla a una escala razonable.',
      'Así que construimos SUPsfactory a su alrededor. Mínimos flexibles desde 50 unidades, soporte de diseño completo y un equipo de fabricación que trata tu primer pedido con la misma seriedad que el centésimo. Tú traes la marca; nosotros nos ocupamos de la fábrica.',
    ],
    values: [
      {
        title: 'Calidad primero',
        body: 'Cada tabla supera un control de calidad multipunto: materiales, laminación, gráficos y embalaje se revisan en cada etapa de la producción.',
      },
      {
        title: 'Socio, no proveedor',
        body: 'Trabajamos junto a tu equipo del primer boceto a la entrega final, compartiendo experiencia de fabricación en cada paso.',
      },
      {
        title: 'Flexibles por diseño',
        body: 'MOQ bajos, opciones modulares y plazos honestos permiten a las marcas emergentes crecer a su propio ritmo.',
      },
    ],
    capabilities: ['OEM / ODM', 'Marca privada', 'Servicio de muestras', 'Diseño y arte', 'QC multipunto', 'Logística de exportación'],
    stats: [
      { value: '50 uds.', label: 'Pedido mínimo' },
      { value: '7–10 días', label: 'Plazo de muestras' },
      { value: '30–45 días', label: 'Plazo de producción' },
      { value: 'Mundial', label: 'Cobertura de envío' },
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
  es: {
    kicker: 'Diseña tu SUP',
    title: 'Visualiza tu concepto SUP antes de la producción',
    sub: 'Previsualiza cómo se verá tu marca en una tabla real: elige un color, observa cómo se actualiza el mockup en vivo y envíanos tu logo para un diseño completo.',
    status: 'Vista previa interactiva',
    statusBody: 'Prueba la paleta ahora y luego envíanos tu idea: nuestro equipo creará un mockup gratuito de tu diseño completo.',
    steps: [
      { title: 'Elige el modelo de tabla', body: 'De plataformas polivalentes a formas de travesía y yoga, cada una con proporciones realistas.' },
      { title: 'Selecciona colores', body: 'Elige tu paleta de marca y observa cómo la tabla cambia al instante.' },
      { title: 'Sube tu logo', body: 'Coloca tu logo y tu arte en la cubierta: ajusta el tamaño y la posición.' },
      { title: 'Genera el mockup', body: 'Exporta una vista previa de tu SUP personalizado para compartirla con tu equipo.' },
    ],
    mockupLabel: 'Vista previa del mockup en vivo',
    cta: 'Crea tu diseño',
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
  es: {
    kicker: 'Plataformas de producto',
    title: 'Plataformas SUP disponibles para personalización',
    sub: 'Cada modelo de abajo es una plataforma de fabricación. Elige uno como punto de partida y adaptaremos la forma, los gráficos, los colores y las especificaciones a tu producto.',
    customTitle: 'Cada producto se puede personalizar',
    customBody: 'Nada sale de fábrica en serie. Cada tabla se construye para ti con tus elecciones en cada capa.',
    customPoints: ['Forma y tamaño', 'Colores y gráficos a toda cubierta', 'Diseño de logo y piso EVA', 'Accesorios y embalaje'],
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
  es: {
    kicker: 'Proyectos SUP personalizados',
    title: 'Proyectos SUP personalizados',
    sub: 'Una mirada a cómo los productos SUP cobran vida: de los requisitos del cliente a las tablas terminadas.',
    note: '¿Quieres que tu proyecto aparezca aquí? Inicia una conversación y diseñémoslo juntos.',
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
  es: {
    kicker: 'Necesidades del cliente',
    title: 'Soluciones SUP personalizadas para tu negocio',
    sub: 'Ya sea que necesites tablas con marca para tu organización o productos SUP personalizados para tu negocio, te ayudamos a convertir los requisitos en productos terminados.',
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
  es: {
    kicker: 'Proceso de desarrollo de producto',
    title: 'Del requisito al producto terminado',
    sub: 'De la discusión del proyecto a la entrega: te guiamos por cada paso del desarrollo de producto.',
    consultTitle: 'Empieza con una consulta gratuita',
    consultBody: 'Cuéntanos dónde estás y dónde quieres llegar. Recomendaremos el camino más rápido hacia tus primeras tablas terminadas.',
  },
}
