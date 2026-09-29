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
  /** schema.org Service type (GEO entity). */
  serviceType: string
  /** 40–70 word direct answer to the page's core buying question (AEO). */
  answer: string
  intro: string[]
  scenario: { title: string; body: string }
  pairs: { problem: string; solution: string }[]
  steps: { title: string; body: string }[]
  caseStudy: { title: string; body: string; tags: string[] }
  faqs: { q: string; a: string }[]
  ctaLevel: CtaLevel
  /** Per-page CTA label override (falls back to the temperature label). */
  ctaLabel?: string
}

/**
 * Canonical public path per solution slug. The flagship custom-SUP topic is
 * served by the product-development content pillar page (pipeline, FAQs and
 * schema in one place); `/solutions/custom-sup` and the legacy pages are
 * 301 stubs onto it. Everything else keeps its `/solutions/{slug}` path.
 */
export const SOLUTION_PATHS: Record<string, string> = {
  'custom-sup': '/product-development',
}

export function solutionPath(slug: string): string {
  return SOLUTION_PATHS[slug] ?? `/solutions/${slug}`
}

export const solutionPages: Localized<SolutionPageData[]> = {
  en: [
    {
      slug: 'custom-sup',
      navLabel: 'Custom SUP Manufacturing',
      metaTitle: 'Custom SUP Development | Customized Paddle Board Solutions',
      metaDescription:
        'Develop custom SUP products with iSupfactory. We support product requirements, customization, prototypes and manufacturing for businesses and organizations.',
      kicker: 'Custom SUP Manufacturer',
      serviceType: 'Custom SUP Product Development',
      answer:
        'We develop custom inflatable SUPs, hard boards and accessories from your requirement — shape, graphics, materials and packaging — through engineering, sampling and production. Custom projects start at 90–100+ pcs per 150 m roll (volume); samples ship in 7–12 days, and production runs 25–35 days after confirmed PO and deposit.',
      h1: 'Custom SUP Products Built Around Your Requirements',
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
          solution: 'Custom volume production starts from 90–100+ pcs per design, while pilot runs on existing platforms start from 20–50 pcs — so first runs stay small while unit pricing stays fair.',
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
        { title: 'Design & sample', body: 'We develop drawings and ship a physical sample within 7–12 days.' },
        { title: 'Approve & produce', body: 'After your approval, production runs 25–35 days with multi-point QC.' },
        { title: 'Deliver & reorder', body: 'Worldwide export with professional packing, plus reorder support at consistent quality.' },
      ],
      caseStudy: {
        title: 'Outdoor brand product extension',
        body: 'An outdoor gear brand moved into paddle sports with a branded touring board. We developed the board from a rough sketch, reached sample approval in 15 days and produced the first production run in 25–35 days.',
        tags: ['Board development', 'Branded graphics', 'First production run'],
      },
      faqs: [
        {
          q: 'Can you develop a SUP product from my idea?',
          a: 'Yes. We help evaluate your requirements and develop a production-ready solution — from concept and drawings to a physical sample.',
        },
        {
          q: 'Can I customize SUP graphics and colors?',
          a: 'Yes. Custom graphics, colors and branding elements can be developed according to project requirements.',
        },
        {
          q: 'What is the minimum order for custom SUP manufacturing?',
          a: 'Custom volume production starts from 90–100+ pcs per design, with pilot runs from 20–50 pcs on existing platforms. Larger quantities unlock better unit pricing, and reorders keep your tooling and designs.',
        },
        {
          q: 'What can be customized on a board?',
          a: 'Shape and dimensions, construction and materials, graphics and logos, EVA pad layout, accessories (paddle, pump, bag) and packaging.',
        },
        {
          q: 'Do you provide samples before production?',
          a: 'Yes — a physical sample is produced and approved before any production run. Sample time is typically 7–12 days.',
        },
        {
          q: 'Can you handle my brand assets only, without a full design team?',
          a: 'Yes. Our design team develops production-ready artwork from your logo, brand colors or a rough concept.',
        },
      ],
      ctaLevel: 'hot',
      ctaLabel: 'Discuss Your Custom SUP Project',
    },
    {
      slug: 'private-label-sup',
      navLabel: 'Private Label Paddle Boards',
      metaTitle: 'Private Label SUP Manufacturing | Custom SUP Production',
      metaDescription:
        'iSupfactory provides private label SUP manufacturing support for existing brands, helping develop customized SUP products from specifications to production.',
      kicker: 'Private Label Paddle Boards',
      serviceType: 'Private Label SUP Manufacturing',
      answer:
        'Private label puts your brand on proven, ready-to-produce SUP platforms without new tooling. Pick a base model, apply your logo, colors, packaging and accessories, and order from 90–100+ pcs per 150 m roll (volume). It is the fastest, lowest-risk way to launch; samples take 7–12 days and production 25–35 days after PO.',
      h1: 'Private Label SUP Manufacturing Support For Your Brand',
      intro: [
        'Private label production lets you launch a paddle board line under your own brand without investing in tooling or a factory. Your logo, colors and packaging go on quality-verified platforms, with quantities that grow with demand.',
        'We support the product side so you can focus on the brand side: design, packaging and reorder management are handled by us.',
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
          solution: 'Start with a 20–50 unit pilot batch on a standard platform, then scale to a standard volume run from 90–100+ pcs — validate the market before big batches.',
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
        title: 'New brand, first production order',
        body: 'A sports retailer launched its own paddle board line from just a logo. We developed the full board and packaging artwork, produced a first run of 50pcs for market testing, then scaled to a full production order within one season.',
        tags: ['Brand development', 'Packaging design', 'Scaled production'],
      },
      faqs: [
        {
          q: 'What is private label SUP manufacturing?',
          a: 'Private label SUP manufacturing allows businesses to sell SUP products under their own brand with customized specifications and production support.',
        },
        {
          q: 'Can existing brands develop new SUP products?',
          a: 'Yes. iSupfactory supports brands looking to expand into SUP products — product selection, specification adjustment, custom graphics and manufacturing.',
        },
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
      ctaLabel: 'Discuss Your Private Label Project',
    },
    {
      slug: 'resort-sup',
      navLabel: 'Resort Paddle Boards',
      metaTitle: 'Custom SUP Equipment for Resorts | Branded Boards',
      metaDescription:
        'Create customized SUP equipment for resorts and hotels with branded boards, accessories and production support from iSupfactory.',
      kicker: 'Resort Paddle Boards',
      serviceType: 'Resort & Hotel SUP Equipment',
      answer:
        'We supply branded inflatable SUPs for resorts and hotels, built for daily guest use: high-pressure drop-stitch construction, reinforced seams and tiered MOQs from 20–50 pilot units up to 90–100+ for fleet rollouts. Boards carry your logo and colors, and we advise on storage, maintenance and reorder schedules.',
      h1: 'Custom SUP Equipment Solutions For Resorts & Hotels',
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
          q: 'Can resorts customize SUP equipment with their logo?',
          a: 'Yes. Resorts can customize graphics, colors and accessories according to project requirements — full-board branding in your property colors.',
        },
        {
          q: 'Can you supply multiple SUP units for resort operations?',
          a: 'Yes. Production solutions can be developed based on fleet requirements, from a starter fleet to seasonal refresh programs.',
        },
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
      ctaLabel: 'Request A Resort SUP Solution',
    },
    {
      slug: 'club-sup',
      navLabel: 'Custom SUP Team Boards',
      metaTitle: 'Custom SUP Equipment for Clubs & Teams',
      metaDescription:
        'iSupfactory provides customized SUP equipment solutions for clubs, teams and events including graphics, specifications and production support.',
      kicker: 'Custom SUP Team Boards',
      serviceType: 'Club & Team SUP Equipment',
      answer:
        'Clubs and teams get durable, consistent fleets in their colors: logo placement, custom paddle lengths and accessory bundles on one standardized board spec, so repairs and spares stay simple across reorders. MOQ starts at 90–100+ pcs (volume); pilot runs from 20–50 units are available to validate the spec first.',
      h1: 'Custom SUP Equipment For Clubs And Teams',
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
        { title: 'Order & grow', body: 'Fleet supply, spare parts and consistent reorders.' },
      ],
      caseStudy: {
        title: 'Club fleet refresh',
        body: 'A paddling club rebranded and refreshed its fleet with 25 branded training boards and replacement parts. Members train on matching equipment, and the club extended the fleet the following season with an identical reorder.',
        tags: ['Club branding', 'Fleet refresh', 'Parts support'],
      },
      faqs: [
        {
          q: 'Can SUP clubs customize team boards?',
          a: 'Yes. Clubs can customize graphics, colors and product configurations — club name, colors and logo on every board.',
        },
        {
          q: 'Can you support event-based SUP production?',
          a: 'Yes. Production planning can be developed according to event requirements, including event edition boards and accessories.',
        },
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
      ctaLabel: 'Discuss Your Club SUP Project',
    },
    {
      slug: 'school-sup',
      navLabel: 'School Paddle Board Program',
      metaTitle: 'School SUP Equipment | Custom Paddle Boards for Education',
      metaDescription:
        'Provide safe and reliable SUP equipment solutions for schools, camps and organizations with customized production support from iSupfactory.',
      kicker: 'School Paddle Board Program',
      serviceType: 'School & Program SUP Equipment',
      answer:
        'For schools and education programs we supply stable, beginner-friendly boards with printed safety guidance, padded paddles and protective accessories, sized to your class count and storage setup. Standard volume batch is 90–100+ pcs per 150 m roll with pilot runs from 20–50 units; lead times support the school procurement cycle.',
      h1: 'Safe And Reliable SUP Solutions For Schools And Programs',
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
        { title: 'Deliver & renew', body: 'Bulk supply, spare parts and reorders for new cohorts.' },
      ],
      caseStudy: {
        title: 'School water sports program',
        body: 'A school launched a paddle sports elective with a 15-board beginner fleet and multi-person boards for first lessons. Instructors reported faster first-session progress on the stable platforms, and the program renewed equipment with a matching reorder the next year.',
        tags: ['Beginner fleet', 'Program launch', 'Renewal orders'],
      },
      faqs: [
        {
          q: 'What SUP equipment is suitable for schools?',
          a: 'SUP equipment selection depends on user age, application environment and program requirements — wide, stable boards are the standard choice for instruction.',
        },
        {
          q: 'Can schools customize SUP equipment?',
          a: 'Yes. Schools can customize graphics, colors and equipment packages according to their program.',
        },
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
      ctaLabel: 'Discuss Your School SUP Program',
    },
  ],
  es: [
    {
      slug: 'custom-sup',
      navLabel: 'Fabricación de SUP personalizados',
      metaTitle: 'Desarrollo de productos SUP | Soluciones a medida',
      metaDescription:
        'Desarrolla productos SUP personalizados con iSupfactory. Ofrecemos apoyo de requisitos, personalización, muestras y fabricación para empresas y organizaciones.',
      kicker: 'Fabricante de SUP personalizados',
      serviceType: 'Desarrollo de productos SUP personalizados',
      answer:
        'Desarrollamos SUP hinchables, tablas rígidas y accesorios personalizados a partir de tu requisito — forma, arte, materiales y embalaje — con ingeniería, muestras y producción. Los proyectos personalizados parten de 90–100+ uds. por rollo de 150 m (volumen); las muestras llegan en 7–12 días y la producción tarda 25–35 días tras el PO y el depósito.',
      h1: 'Productos SUP personalizados según tus requisitos',
      intro: [
        'Necesitas tablas producidas según tus propias especificaciones — forma, arte, materiales, embalaje — sin gestionar tu propia fábrica. Somos ese socio de fabricación: recibimos tus requisitos y entregamos el producto terminado.',
        'Cada proyecto cuenta con un especialista dedicado que se ocupa del diseño, las muestras, la producción y la entrega, para que siempre sepas cómo va tu pedido.',
      ],
      scenario: {
        title: 'Necesitas tablas producidas según especificación',
        body: 'Esto es un requisito de producto, no una elección de catálogo. Tu preferencia de forma, tu arte, tus requisitos de calidad, tu embalaje. Ejecutamos ingeniería, muestras y producción sobre plataformas probadas, manteniendo flexibilidad desde pequeños lotes.',
      },
      pairs: [
        {
          problem: 'El catálogo de la fábrica solo tiene diseños existentes que no se pueden modificar.',
          solution: 'Producimos tablas personalizadas según tu forma, arte y especificaciones, de la primera muestra a la producción completa.',
        },
        {
          problem: 'Los pedidos mínimos grandes te encierran en inventario antes de validar el mercado.',
          solution: 'Producción personalizada desde 90–100+ unidades por rollo de 150 m (volumen), con pedidos piloto desde 20–50 unidades y precios unitarios justos.',
        },
        {
          problem: 'No tienes equipo de diseño ni de ingeniería.',
          solution: 'Contamos con equipo propio de diseño e ingeniería que convierte tu idea, boceto o tabla de referencia en planos producibles.',
        },
        {
          problem: 'Calidad de fábrica desconocida y comunicación lenta.',
          solution: 'Un especialista de proyecto dedicado gestiona muestras, puntos de control de calidad y plazos de entrega de principio a fin: un solo interlocutor y progreso transparente.',
        },
      ],
      steps: [
        { title: 'Envía tu proyecto', body: 'Cuéntanos tu requisito o comparte bocetos e imágenes de referencia.' },
        { title: 'Diseña y muestra', body: 'Desarrollamos los planos y enviamos una muestra física en 7–12 días.' },
        { title: 'Confirma y produce', body: 'Tras aprobar la muestra, producción en 25–35 días con control de calidad multipunto.' },
        { title: 'Entrega y reordena', body: 'Exportación mundial con embalaje profesional y soporte de reorden para mantener la calidad.' },
      ],
      caseStudy: {
        title: 'Extensión de línea de una marca outdoor',
        body: 'Una marca de equipamiento outdoor entró en el remo con una tabla de viaje con marca. Desarrollamos la tabla desde un boceto bruto: aprobación de muestra en 15 días y primera producción entregada en 25–35 días.',
        tags: ['Desarrollo de tabla', 'Arte de marca', 'Primera producción'],
      },
      faqs: [
        {
          q: '¿Podéis desarrollar un producto SUP a partir de mi idea?',
          a: 'Sí. Te ayudamos a evaluar el requisito y a desarrollar una solución fabricable: del concepto y los planos a la muestra física.',
        },
        {
          q: '¿Se pueden personalizar el arte y los colores del SUP?',
          a: 'Sí. El arte, los colores y los elementos de marca se pueden desarrollar según los requisitos del proyecto.',
        },
        {
          q: '¿Cuál es el pedido mínimo para fabricación de SUP personalizados?',
          a: 'Producción personalizada desde 90–100+ unidades por rollo de 150 m (volumen). A mayor cantidad, mejor precio unitario; los moldes y el diseño se conservan para los pedidos posteriores.',
        },
        {
          q: '¿Qué partes de una tabla se pueden personalizar?',
          a: 'Forma y tamaño, construcción y materiales, arte y logo, distribución del piso EVA, accesorios (remo, bomba, bolsa) y embalaje.',
        },
        {
          q: '¿Proporcionáis muestras antes de la producción?',
          a: 'Sí: la muestra física se produce y aprueba antes de la producción en serie; el muestreo suele tardar 7–12 días.',
        },
        {
          q: 'No tenemos un equipo de diseño completo, solo material de marca. ¿Podemos trabajar juntos?',
          a: 'Sí. Nuestro equipo de diseño desarrolla planos producibles a partir de tu logo, colores de marca o concepto aproximado.',
        },
      ],
      ctaLevel: 'hot',
      ctaLabel: 'Comenta tu proyecto de SUP personalizado',
    },
    {
      slug: 'private-label-sup',
      navLabel: 'Tablas de marca privada',
      metaTitle: 'Fabricación SUP de marca privada | Producción',
      metaDescription:
        'iSupfactory ofrece soporte de fabricación SUP de marca privada para marcas existentes, del desarrollo a la producción de productos SUP personalizados.',
      kicker: 'Tablas de marca privada',
      serviceType: 'Fabricación SUP de marca privada',
      answer:
        'La marca privada pone tu marca sobre plataformas de SUP probadas y listas para producir, sin utillaje nuevo. Elige un modelo base, aplica tu logo, colores, embalaje y accesorios, y pide desde 90–100+ uds. por rollo de 150 m (volumen). Es la vía más rápida y de menor riesgo para lanzar; las muestras tardan 7–12 días y la producción 25–35 días tras el PO.',
      h1: 'Fabricación SUP de marca privada para tu marca',
      intro: [
        'La marca privada te permite lanzar una línea de tablas con tu propia marca sin invertir en moldes ni fábrica. Tu logo, colores y embalaje se aplican sobre plataformas verificadas por calidad, y las cantidades crecen según la demanda.',
        'Nosotros nos ocupamos del lado del producto para que tú te centres en el lado de la marca: diseño, embalaje y logística de reorden corren de nuestra cuenta.',
      ],
      scenario: {
        title: 'Tienes una marca — necesitas los productos que la lleven',
        body: 'Una identidad de marca sin inventario. Quieres una línea de tablas vendible con tu nombre, en cantidades que encajen con tu etapa: de la validación del primer lote a las flotas de reorden.',
      },
      pairs: [
        {
          problem: 'La marca solo vive en la pegatina: el producto sigue pareciendo genérico.',
          solution: 'Integración de marca completa: arte de cubierta, logo, distribución del piso EVA, remo, bomba, bolsa y embalaje de marca.',
        },
        {
          problem: 'El primer pedido te obliga a comprar cientos de tablas que quizá no vendas.',
          solution: 'Empieza con un lote piloto de 20–50 unidades sobre una plataforma estándar y escala al lote de volumen estándar desde 90–100+ unidades: valida el mercado antes de los lotes grandes.',
        },
        {
          problem: 'El desarrollo de diseño y embalaje parece inalcanzable.',
          solution: 'Nuestro equipo de diseño convierte tu material de marca en planos de cubierta y embalaje listos para producción.',
        },
        {
          problem: 'Los reordenes son inestables en calidad o plazos.',
          solution: 'Los moldes y diseños son tuyos; los reordenes se producen en las mismas plataformas verificadas con calidad constante.',
        },
      ],
      steps: [
        { title: 'Comparte tu marca', body: 'Envía tu logo, colores y material de marca existente.' },
        { title: 'Desarrollamos los planos', body: 'Diseñamos el arte de cubierta, la distribución EVA y el embalaje alrededor de tu marca.' },
        { title: 'Confirma la muestra', body: 'La muestra física confirma colores, acabado y embalaje.' },
        { title: 'Produce y entrega', body: 'Producimos tus cantidades con control de calidad y exportación de principio a fin.' },
      ],
      caseStudy: {
        title: 'Marca nueva, primer pedido de producción',
        body: 'Un minorista deportivo lanzó su línea de tablas con solo un logo. Completamos todo el diseño de cubierta y embalaje, produjimos 50 unidades para probar el mercado y escalamos a un pedido completo de producción en un trimestre.',
        tags: ['Desarrollo de marca', 'Diseño de embalaje', 'Producción escalada'],
      },
      faqs: [
        {
          q: '¿Qué es la fabricación SUP de marca privada?',
          a: 'La fabricación SUP de marca privada permite a las empresas vender productos SUP bajo su propia marca, con especificaciones personalizadas y soporte de producción.',
        },
        {
          q: '¿Una marca existente puede desarrollar nuevos productos SUP?',
          a: 'Sí. iSupfactory apoya a marcas que quieren ampliarse al SUP: selección de productos, ajuste de especificaciones, arte personalizado y fabricación.',
        },
        {
          q: '¿Qué incluye un proyecto SUP de marca privada?',
          a: 'La marca vive en la tabla misma: arte, logo y piso EVA, además de remo, bomba, bolsa y embalaje opcionales: un producto vendible completo con tu nombre.',
        },
        {
          q: '¿Se puede modificar el diseño entre pedidos?',
          a: 'Sí. Una vez que tu material de marca está listo para producción, puedes actualizar el arte, los colores o el embalaje en cualquier reorden.',
        },
        {
          q: 'Solo tenemos un logo, ¿podéis ayudarnos?',
          a: 'Sí. Nuestro equipo de diseño completa todos los planos de cubierta y embalaje con solo tu logo y tus colores de marca.',
        },
      ],
      ctaLevel: 'warm',
      ctaLabel: 'Comenta tu proyecto de marca privada',
    },
    {
      slug: 'resort-sup',
      navLabel: 'Tablas para resorts',
      metaTitle: 'Equipamiento SUP para resorts | Tablas de resort con marca',
      metaDescription:
        'Crea equipamiento SUP personalizado para resorts y hoteles con iSupfactory: tablas con marca, accesorios y soporte de producción.',
      kicker: 'Tablas para resorts',
      serviceType: 'Equipamiento SUP para resorts y hoteles',
      answer:
        'Suministramos SUP hinchables con marca para resorts y hoteles, pensados para el uso diario de los huéspedes: construcción drop-stitch de alta presión, costuras reforzadas y MOQ escalonado desde 20–50 uds. de piloto hasta 90–100+ para despliegues de flota. Las tablas llevan tu logo y colores, y asesoramos sobre almacenamiento, mantenimiento y reorden.',
      h1: 'Equipamiento SUP personalizado para resorts y hoteles',
      intro: [
        'Las flotas de tablas de resort deben soportar el uso diario de los huéspedes, guardarse con facilidad fuera de temporada y representar tu marca. Producimos tablas duraderas, fáciles de usar y con los colores del resort, y planificamos la flota alrededor de tu operación.',
        'Las cantidades se recomiendan según patrones de uso, no por conjetura: los planes de reorden mantienen la flota fresca temporada tras temporada.',
      ],
      scenario: {
        title: 'Gestionas actividades acuáticas para huéspedes',
        body: 'Los huéspedes esperan experiencias inolvidables en el agua, y el equipamiento representa a tu hotel. Necesitas tablas duraderas, fáciles de guardar y con la identidad de tu resort.',
      },
      pairs: [
        {
          problem: 'El uso diario de alquiler desgasta rápido las flotas.',
          solution: 'Construcción de grado alquiler con rails reforzados y materiales anti-UV, diseñada para el uso repetido.',
        },
        {
          problem: 'El espacio de almacenamiento fuera de temporada es limitado.',
          solution: 'Opciones hinchables fáciles de guardar que caben en un cuarto de almacenamiento al final de la temporada.',
        },
        {
          problem: 'El equipamiento parece genérico, no es tu propiedad.',
          solution: 'Arte a toda cubierta, logo y marca EVA en los colores del resort, con accesorios de marca.',
        },
        {
          problem: 'La renovación y actualización de la flota carece de coordinación.',
          solution: 'Plan de reorden de flota: calidad constante, soporte de accesorios y recomendaciones de cantidad prácticas.',
        },
      ],
      steps: [
        { title: 'Describe tu operación', body: 'Afluencia, zona acuática, condiciones de almacenamiento y duración de la temporada.' },
        { title: 'Recibe el plan de flota', body: 'Recomendamos tipos de tabla y cantidades según los patrones de uso.' },
        { title: 'Confirma la muestra de marca', body: 'Verifica tus colores y logo en una tabla física.' },
        { title: 'Recibe y mantiene', body: 'Entrega, accesorios y plan de reorden para las próximas temporadas.' },
      ],
      caseStudy: {
        title: 'Flota para huéspedes en un resort costero',
        body: 'Un resort costero equipó su programa de playa con 40 tablas hinchables de marca en los colores del resort, con remos y bombas de marca. Todo se guardó en un cuarto de almacenamiento fuera de temporada y la flota se renovó con calidad constante tras la segunda temporada.',
        tags: ['Flota con marca para huéspedes', 'Almacenamiento de hinchables', 'Renovación por temporada'],
      },
      faqs: [
        {
          q: '¿Puede un resort personalizar el equipamiento SUP con su logo?',
          a: 'Sí. Los resorts pueden personalizar arte, colores y accesorios según los requisitos del proyecto: marca a toda cubierta en los colores de la propiedad.',
        },
        {
          q: '¿Podéis suministrar múltiples tablas SUP para la operación de un resort?',
          a: 'Sí. Podemos desarrollar planes de producción según las necesidades de la flota, de la flota inicial a los planes de renovación por temporada.',
        },
        {
          q: '¿Cuántas tablas necesita un resort?',
          a: 'La mayoría de los resorts empiezan con 20–50 tablas y crecen según la demanda. Recomendamos según la afluencia y la zona acuática, no por conjetura.',
        },
        {
          q: '¿Las tablas hinchables sirven para un resort?',
          a: 'Sí. Los SUP hinchables modernos son muy duraderos y mucho más fáciles de almacenar y transportar: una opción popular para resorts con espacio limitado.',
        },
        {
          q: '¿La flota puede llevar nuestro logo y colores?',
          a: 'Sí: arte a toda cubierta, impresión del logo, marca del piso EVA y accesorios de marca forman parte de los proyectos de resort.',
        },
      ],
      ctaLevel: 'warm',
      ctaLabel: 'Solicita el plan SUP para tu resort',
    },
    {
      slug: 'club-sup',
      navLabel: 'Tablas de equipo personalizadas para clubes',
      metaTitle: 'Equipamiento SUP para clubes y equipos',
      metaDescription:
        'iSupfactory ofrece soluciones de equipamiento SUP personalizado para clubes, equipos y eventos, incluidos arte, especificaciones y soporte de producción.',
      kicker: 'Tablas de equipo personalizadas para clubes',
      serviceType: 'Equipamiento SUP para clubes y equipos',
      answer:
        'Los clubes y equipos obtienen flotas duraderas y consistentes con sus colores: logo, longitudes de pala a medida y paquetes de accesorios sobre una única especificación de tabla estandarizada, de modo que las reparaciones y recambios sigan siendo simples en los reordenes. El MOQ parte de 90–100+ uds. (volumen); hay lotes piloto desde 20–50 uds. para validar primero.',
      h1: 'Equipamiento SUP personalizado para clubes y equipos',
      intro: [
        'Los clubes de remo necesitan tablas que aguanten el entrenamiento diario, luzcan uniformes como un equipo y se mantengan consistentes en los reordenes. Producimos tablas de equipo personalizadas con el nombre y los colores del club, con precios favorables para flotas.',
        'Los proyectos de club también incluyen el lado práctico: accesorios, guía de reparación y soporte de reorden con calidad constante.',
      ],
      scenario: {
        title: 'Tu club entrena y organiza actividades de equipo',
        body: 'Las tablas las usan los miembros a diario y representan al club en actividades y competiciones. Quieres equipamiento de equipo con la marca del club, duradero y sin gestionar tú la relación con la fábrica.',
      },
      pairs: [
        {
          problem: 'Las tablas de entrenamiento soportan mucho uso repetido.',
          solution: 'Construcción reforzada diseñada para el uso profesional diario, con guía de reparación y soporte de accesorios.',
        },
        {
          problem: 'La flota se ve desigual y sin marca.',
          solution: 'Cada tabla lleva el nombre, los colores y el logo del club: una flota de equipo unificada.',
        },
        {
          problem: 'Al ampliar la flota hay que buscar existencias que encajen por todas partes.',
          solution: 'Los reordenes se producen en las mismas plataformas verificadas: las tablas nuevas coinciden con las existentes.',
        },
        {
          problem: 'El presupuesto de la flota es limitado.',
          solution: 'Precios por volumen para flotas y un interlocutor dedicado para reordenes, accesorios y mantenimiento.',
        },
      ],
      steps: [
        { title: 'Presenta tu club', body: 'Número de miembros, tipos de actividad y equipamiento actual.' },
        { title: 'Elige los tipos de tabla', body: 'Tablas de entrenamiento, de iniciación y de equipo, ajustadas a tu programa.' },
        { title: 'Añade la marca del club', body: 'Nombre, colores y logo aplicados a tablas y accesorios.' },
        { title: 'Pide y crece', body: 'Entrega de la flota, accesorios y reordenes con calidad constante.' },
      ],
      caseStudy: {
        title: 'Renovación de la flota de un club',
        body: 'Un club de remo renovó su imagen con 25 tablas de entrenamiento de marca y accesorios de repuesto. Los miembros entrenaron con equipamiento uniforme y al año siguiente el club amplió la flota con un reorden idéntico.',
        tags: ['Marca del club', 'Renovación de flota', 'Soporte de accesorios'],
      },
      faqs: [
        {
          q: '¿Puede un club de SUP personalizar tablas de equipo?',
          a: 'Sí. Los clubes pueden personalizar arte, colores y configuración del producto: cada tabla lleva el nombre, los colores y el logo del club.',
        },
        {
          q: '¿Podéis apoyar la producción de SUP basada en eventos?',
          a: 'Sí. Podemos crear planes de producción según las necesidades del evento, incluidas tablas y accesorios de edición para el evento.',
        },
        {
          q: '¿Qué tablas son mejores para el entrenamiento de un club?',
          a: 'Tablas estables y duraderas que encajen con el nivel de los miembros: tablas anchas de iniciación para las clases y tablas de travesía para el entrenamiento de distancia.',
        },
        {
          q: '¿Los clubes tienen precios por volumen de flota?',
          a: 'Sí: las flotas de club disfrutan de precios por volumen y de un interlocutor dedicado para reordenes, accesorios y mantenimiento.',
        },
        {
          q: '¿Se pueden reparar o sustituir las tablas dañadas?',
          a: 'Ofrecemos accesorios de repuesto, guía de reparación y soporte de reorden para mantener la coherencia de la flota.',
        },
      ],
      ctaLevel: 'cold',
      ctaLabel: 'Comenta tu proyecto SUP de club',
    },
    {
      slug: 'school-sup',
      navLabel: 'Programas de SUP escolares',
      metaTitle: 'Equipamiento SUP escolar | Tablas personalizadas',
      metaDescription:
        'Soluciones de equipamiento SUP seguras y fiables para escuelas, campamentos e instituciones, con soporte de producción personalizada de iSupfactory.',
      kicker: 'Programas de SUP escolares',
      serviceType: 'Equipamiento SUP para escuelas y programas',
      answer:
        'Para escuelas y programas educativos suministramos tablas estables y fáciles de usar para principiantes, con guía de seguridad impresa, palas acolchadas y accesorios de protección, ajustadas a tu número de alumnos y espacio de almacenamiento. El lote de volumen estándar es de 90–100+ uds. por rollo de 150 m, con pilotos desde 20–50 uds.; la entrega se adapta al ciclo de compra escolar.',
      h1: 'Soluciones SUP seguras y fiables para escuelas y programas',
      intro: [
        'Las escuelas abordan el remo de otra manera: clases grandes, niveles mixtos, requisitos de seguridad estrictos y presupuestos educativos. Nuestro programa escolar ofrece tablas estables y fáciles de usar, opciones de paquete que encajan con el tamaño de las clases y orientación desde la perspectiva del instructor.',
        'El suministro por volumen y el soporte de reorden mantienen el equipamiento sirviendo a nuevas promociones año tras año.',
      ],
      scenario: {
        title: 'Enseñas remo a estudiantes',
        body: 'Clases numerosas y niveles de habilidad variados. Necesitas tablas estables y seguras para principiantes, cantidades que encajen con el tamaño de las clases y un programa adecuado al presupuesto y los ciclos de compra escolares.',
      },
      pairs: [
        {
          problem: 'Los estudiantes necesitan máxima estabilidad en el agua.',
          solution: 'Tablas de iniciación anchas, de alto volumen, y tablas multiusuario, diseñadas para principiantes con gran tolerancia.',
        },
        {
          problem: 'El tamaño de las clases exige cantidades suficientes y consistentes.',
          solution: 'Precios de programa por volumen basados en el tamaño de la clase, con calidad idéntica en cada tabla.',
        },
        {
          problem: 'Los instructores gestionan la seguridad con apoyo limitado.',
          solution: 'Las tablas incluyen orientación de uso clara, y recomendamos cantidades y disposición para tu zona acuática.',
        },
        {
          problem: 'El equipamiento debe aguantar a muchas promociones de estudiantes.',
          solution: 'Construcción reforzada con accesorios y soporte de reorden para prolongar la vida del equipamiento del programa.',
        },
      ],
      steps: [
        { title: 'Comparte tu programa', body: 'Tamaño de las clases, zona acuática, configuración de instructores y ciclo presupuestario.' },
        { title: 'Construye el paquete', body: 'Tipos y cantidades de tabla ajustados a la enseñanza, no por conjetura.' },
        { title: 'Confirma la muestra', body: 'Verifica estabilidad, construcción y acabado en una tabla física.' },
        { title: 'Entrega y renueva', body: 'Entrega por volumen, accesorios y reordenes para las nuevas promociones.' },
      ],
      caseStudy: {
        title: 'Programa acuático escolar',
        body: 'Una escuela lanzó una optativa de remo con 15 tablas de iniciación y multiusuario. Los instructores reportaron un progreso más rápido en la primera sesión gracias a las plataformas estables, y el programa renovó el equipamiento con un reorden idéntico al año siguiente.',
        tags: ['Flota de iniciación', 'Lanzamiento del programa', 'Pedidos de renovación'],
      },
      faqs: [
        {
          q: '¿Qué equipamiento SUP es adecuado para escuelas?',
          a: 'La selección de equipamiento SUP depende de la edad de los usuarios, el entorno de aplicación y los requisitos del programa: las tablas anchas y estables son la elección estándar para la enseñanza.',
        },
        {
          q: '¿Pueden las escuelas personalizar el equipamiento SUP?',
          a: 'Sí. Las escuelas pueden personalizar arte, colores y paquetes de equipamiento según su programa.',
        },
        {
          q: '¿Qué tablas son mejores para las clases de SUP escolares?',
          a: 'Las tablas de iniciación anchas y estables y las tablas multiusuario son ideales: su volumen las hace tolerantes para los principiantes y estables con varios remadores.',
        },
        {
          q: '¿Pueden las cantidades coincidir con el tamaño de nuestras clases?',
          a: 'Sí: los precios de programa se construyen alrededor de las cantidades de clase, y recomendamos números según tu zona acuática y rotación.',
        },
        {
          q: '¿Trabajáis con los plazos de compra escolares?',
          a: 'Sí. Planificamos los plazos de muestras y producción alrededor de los ciclos presupuestarios y de temporada escolares.',
        },
      ],
      ctaLevel: 'cold',
      ctaLabel: 'Comenta tu programa SUP escolar',
    },
  ],
  fr: [
    {
      slug: 'custom-sup',
      navLabel: 'Fabrication de SUP personnalisés',
      metaTitle: 'Développement de produits SUP sur mesure | Solutions personnalisées',
      metaDescription:
        'Développez des produits SUP personnalisés avec iSupfactory. Nous accompagnons vos exigences, la personnalisation, les prototypes et la fabrication pour entreprises et organisations.',
      kicker: 'Fabricant de SUP personnalisés',
      serviceType: 'Développement de produits SUP sur mesure',
      answer:
        'Nous développons des SUP gonflables, des planches rigides et des accessoires personnalisés à partir de votre cahier des charges — forme, graphisme, matériaux et emballage — de l\'ingénierie à l\'échantillonnage et à la production. Les projets sur mesure démarrent à 90–100+ unités par rouleau de 150 m (volume) ; les échantillons sont expédiés sous 7–12 jours et la production dure 25–35 jours après confirmation du bon de commande et versement de l\'acompte.',
      h1: 'Produits SUP personnalisés selon vos exigences',
      intro: [
        'Vous avez besoin de planches fabriquées selon vos propres spécifications — forme, graphisme, matériaux, emballage — sans gérer votre propre usine. Nous sommes le partenaire de fabrication qui prend en charge vos exigences et vous livre un produit fini.',
        'Chaque projet est suivi par un spécialiste dédié qui gère la conception, les échantillons, la production et la livraison, afin que vous sachiez toujours où en est votre commande.',
      ],
      scenario: {
        title: 'Vous avez besoin de planches fabriquées sur spécification',
        body: 'Un cahier des charges produit, pas un choix de catalogue. Vos préférences de forme, votre graphisme, votre niveau de qualité, votre emballage. Nous assurons l\'ingénierie, l\'échantillonnage et la production sur des plateformes éprouvées, avec une flexibilité dès les petits premiers lots.',
      },
      pairs: [
        {
          problem: 'Les catalogues d\'usine ne proposent que des designs existants que vous ne pouvez pas modifier.',
          solution: 'Nous produisons des planches personnalisées selon vos formes, votre graphisme et vos spécifications — de la première échantillonne à la production complète.',
        },
        {
          problem: 'Les grands minimums vous engagent dans du stock avant de valider le marché.',
          solution: 'La production personnalisée commence à 90–100+ unités par design, tandis que les lots pilotes sur plateformes existantes démarrent à 20–50 unités — les premiers lots restent petits tout en maintenant un prix unitaire avantageux.',
        },
        {
          problem: 'Vous n\'avez pas d\'équipe de conception ni d\'ingénierie en interne.',
          solution: 'Notre équipe de conception et d\'ingénierie interne transforme une idée, un croquis ou une planche de référence en dessins prêts pour la production.',
        },
        {
          problem: 'Qualité d\'usine inconnue et communication lente.',
          solution: 'Un chef de projet dédié gère les échantillons, les étapes de contrôle qualité et les délais de livraison de bout en bout — un seul interlocuteur, des mises à jour claires.',
        },
      ],
      steps: [
        { title: 'Soumettez votre projet', body: 'Exposez vos exigences ou partagez des croquis et des images de référence.' },
        { title: 'Conception et échantillonnage', body: 'Nous développons les dessins et expédions un échantillon physique sous 7–12 jours.' },
        { title: 'Validation et production', body: 'Après votre approbation, la production dure 25–35 jours avec un contrôle qualité multi-étapes.' },
        { title: 'Livraison et réassort', body: 'Export mondial avec emballage professionnel, et accompagnement pour les réassorts à qualité constante.' },
      ],
      caseStudy: {
        title: 'Extension de gamme d\'une marque outdoor',
        body: 'Une marque d\'équipement outdoor s\'est lancée dans le paddle avec une planche de voyage à marque. Nous avons développé la planche à partir d\'un croquis sommaire, obtenu l\'approbation de l\'échantillon en 15 jours et livré la première production en 25–35 jours.',
        tags: ['Développement de planche', 'Graphisme de marque', 'Première production'],
      },
      faqs: [
        {
          q: 'Pouvez-vous développer un produit SUP à partir de mon idée ?',
          a: 'Oui. Nous vous aidons à évaluer vos exigences et à développer une solution prête pour la production — du concept et des dessins à l\'échantillon physique.',
        },
        {
          q: 'Puis-je personnaliser les graphismes et les couleurs du SUP ?',
          a: 'Oui. Les graphismes, les couleurs et les éléments de marque peuvent être développés selon les exigences du projet.',
        },
        {
          q: 'Quelle est la commande minimale pour la fabrication de SUP personnalisés ?',
          a: 'La production personnalisée commence à 90–100+ unités par design, avec des lots pilotes de 20–50 unités sur les plateformes existantes. Les quantités plus importantes débloquent un meilleur prix unitaire, et les réassorts conservent vos outillages et designs.',
        },
        {
          q: 'Qu\'est-ce qui peut être personnalisé sur une planche ?',
          a: 'Forme et dimensions, construction et matériaux, graphismes et logos, disposition du tapis EVA, accessoires (pagaie, pompe, sac) et emballage.',
        },
        {
          q: 'Fournissez-vous des échantillons avant la production ?',
          a: 'Oui — un échantillon physique est produit et approuvé avant toute production. Le délai d\'échantillonnage est généralement de 7–12 jours.',
        },
        {
          q: 'Pouvez-vous travailler uniquement à partir de mes éléments de marque, sans équipe de conception complète ?',
          a: 'Oui. Notre équipe de conception développe des fichiers de production prêts à partir de votre logo, de vos couleurs de marque ou d\'un concept approximatif.',
        },
      ],
      ctaLevel: 'hot',
      ctaLabel: 'Parlez de votre projet SUP personnalisé',
    },
    {
      slug: 'private-label-sup',
      navLabel: 'Planches de marque privée',
      metaTitle: 'Fabrication SUP en marque privée | Production personnalisée',
      metaDescription:
        'iSupfactory accompagne la fabrication SUP en marque privée pour les marques existantes, du développement à la production de produits SUP personnalisés.',
      kicker: 'Planches de marque privée',
      serviceType: 'Fabrication SUP en marque privée',
      answer:
        'La marque privée place votre marque sur des plateformes de SUP éprouvées et prêtes à produire, sans nouvel outillage. Choisissez un modèle de base, appliquez votre logo, vos couleurs, votre emballage et vos accessoires, et commandez dès 90–100+ unités par rouleau de 150 m (volume). C\'est la voie la plus rapide et la moins risquée pour se lancer ; les échantillons prennent 7–12 jours et la production 25–35 jours après le bon de commande.',
      h1: 'Fabrication SUP en marque privée pour votre marque',
      intro: [
        'La production en marque privée vous permet de lancer une gamme de planches sous votre propre marque sans investir dans de l\'outillage ni dans une usine. Votre logo, vos couleurs et votre emballage sont appliqués sur des plateformes vérifiées en qualité, avec des quantités qui évoluent selon la demande.',
        'Nous gérons le volet produit pour que vous puissiez vous concentrer sur le volet marque : conception, emballage et gestion des réassorts sont de notre ressort.',
      ],
      scenario: {
        title: 'Vous avez une marque — et avez besoin de produits qui la portent',
        body: 'Une identité de marque sans stock. Vous souhaitez une gamme de planches vendables à votre nom, en quantités adaptées à votre étape — du premier lot de validation aux flottes en réassort.',
      },
      pairs: [
        {
          problem: 'La marque ne vit que sur l\'étiquette — le produit reste générique.',
          solution: 'Intégration complète de la marque : graphismes de la planche, logo, disposition du tapis EVA, pagaie, pompe, sac et emballage à marque.',
        },
        {
          problem: 'La première commande vous oblige à acheter des centaines d\'unités que vous risquez de ne pas écouter.',
          solution: 'Commencez par un lot pilote de 20–50 unités sur une plateforme standard, puis passez à un lot en volume de 90–100+ unités — validez le marché avant les grands volumes.',
        },
        {
          problem: 'Le développement du design et de l\'emballage vous semble inaccessible.',
          solution: 'Notre équipe de conception transforme vos éléments de marque en fichiers de planche et d\'emballage prêts pour la production.',
        },
        {
          problem: 'Les réassorts sont instables en qualité ou en délais.',
          solution: 'Les outillages et les designs vous appartiennent, et les réassorts s\'effectuent sur les mêmes plateformes vérifiées avec une qualité constante.',
        },
      ],
      steps: [
        { title: 'Présentez votre marque', body: 'Envoyez votre logo, vos couleurs et tout élément de marque existant.' },
        { title: 'Développement du design', body: 'Nous concevons les graphismes de la planche, la disposition EVA et l\'emballage autour de votre marque.' },
        { title: 'Validation de l\'échantillon', body: 'Un échantillon physique confirme les couleurs, la finition et l\'emballage.' },
        { title: 'Production et livraison', body: 'Nous produisons les quantités demandées avec contrôle qualité et export gérés de bout en bout.' },
      ],
      caseStudy: {
        title: 'Nouvelle marque, première commande de production',
        body: 'Un détaillant sportif a lancé sa gamme de planches de paddle avec uniquement un logo. Nous avons développé l\'ensemble du design de planche et d\'emballage, produit un premier lot de 50 unités pour tester le marché, puis passé à une commande de production complète en une saison.',
        tags: ['Développement de marque', 'Design d\'emballage', 'Production escalée'],
      },
      faqs: [
        {
          q: 'Qu\'est-ce que la fabrication SUP en marque privée ?',
          a: 'La fabrication SUP en marque privée permet aux entreprises de vendre des produits SUP sous leur propre marque avec des spécifications personnalisées et un accompagnement de production.',
        },
        {
          q: 'Les marques existantes peuvent-elles développer de nouveaux produits SUP ?',
          a: 'Oui. iSupfactory accompagne les marques souhaitant s\'étendre au SUP : sélection de produits, ajustement de spécifications, graphismes personnalisés et fabrication.',
        },
        {
          q: 'Qu\'est-ce qu\'inclus dans un programme SUP en marque privée ?',
          a: 'Votre marque sur la planche elle-même — graphismes, logo, tapis EVA — plus en option la pagaie, la pompe, le sac et l\'emballage à marque : un produit complet et vendable sous votre nom.',
        },
        {
          q: 'Le design peut-il changer entre les commandes ?',
          a: 'Oui. Une fois vos éléments de marque prêts pour la production, les réassorts peuvent actualiser les graphismes, les couleurs ou l\'emballage à tout moment.',
        },
        {
          q: 'Nous n\'avons qu\'un logo. Pouvez-vous quand même nous aider ?',
          a: 'Oui. Notre équipe de conception développe l\'ensemble du design de planche et d\'emballage à partir de votre logo et de vos couleurs de marque.',
        },
      ],
      ctaLevel: 'warm',
      ctaLabel: 'Parlez de votre projet en marque privée',
    },
    {
      slug: 'resort-sup',
      navLabel: 'Planches pour resorts',
      metaTitle: 'Équipement SUP pour resorts | Planches personnalisées',
      metaDescription:
        'Créez des équipements SUP personnalisés pour resorts et hôtels avec iSupfactory : planches à marque, accessoires et accompagnement de production.',
      kicker: 'Planches pour resorts',
      serviceType: 'Équipement SUP pour resorts et hôtels',
      answer:
        'Nous fournissons des SUP gonflables à marque pour resorts et hôtels, conçus pour un usage quotidien par les clients : construction drop-stitch haute pression, coutures renforcées et MOQ progressifs de 20–50 unités pilotes à 90–100+ pour les déploiements de flotte. Les planches portent votre logo et vos couleurs, et nous conseillons sur le stockage, l\'entretien et les réassorts.',
      h1: 'Équipement SUP personnalisé pour resorts et hôtels',
      intro: [
        'Les flottes de planches de resort doivent résister à un usage quotidien par les clients, se stocker facilement hors saison et porter votre marque. Nous fabriquons des planches durables, adaptées aux clients et dans vos couleurs, et structurons le programme de flotte autour de votre exploitation.',
        'Les quantités sont recommandées selon les schémas d\'utilisation réels, pas selon des estimations — et les programmes de réassort maintiennent la flotte en bon état saison après saison.',
      ],
      scenario: {
        title: 'Vous gérez des activités nautiques pour vos clients',
        body: 'Les clients attendent une expérience mémorable sur l\'eau, et l\'équipement représente votre établissement. Vous avez besoin de planches suffisamment robustes pour la location quotidienne, faciles à ranger et à l\'image de votre resort.',
      },
      pairs: [
        {
          problem: 'Les flottes s\'usent rapidement avec l\'usage intensif de la location.',
          solution: 'Construction de qualité location avec rails renforcés et matériaux résistants aux UV, conçue pour des sessions répétées.',
        },
        {
          problem: 'L\'espace de stockage est limité hors saison.',
          solution: 'Options gonflables faciles à ranger qui se glissent dans un placard en fin de saison.',
        },
        {
          problem: 'L\'équipement est générique et ne reflète pas votre établissement.',
          solution: 'Graphismes complets sur la planche, logo et marquage EVA dans les couleurs de votre resort, avec accessoires à marque.',
        },
        {
          problem: 'Le renouvellement et la mise à jour de la flotte manquent de coordination.',
          solution: 'Programme de réassort de flotte avec qualité constante, support pour les pièces détachées et recommandations de quantités réalistes.',
        },
      ],
      steps: [
        { title: 'Décrivez votre exploitation', body: 'Volume de clients, littoral, capacités de stockage et durée de la saison.' },
        { title: 'Recevez le plan de flotte', body: 'Nous recommandons les types de planches et les quantités selon les schémas d\'utilisation.' },
        { title: 'Validation de l\'échantillon à marque', body: 'Vos couleurs et votre logo confirmés sur une planche physique.' },
        { title: 'Réception et entretien', body: 'Livraison, pièces détachées et programme de réassort pour les saisons futures.' },
      ],
      caseStudy: {
        title: 'Flotte clients pour un resort côtier',
        body: 'Un resort côtier a équipé son programme de plage avec 40 planches gonflables à marque dans les couleurs du resort, avec des pagaies et des pompes à marque. Les planches se stockent dans un seul placard hors saison, et la flotte a été renouvelée à qualité constante après la deuxième saison.',
        tags: ['Flotte clients à marque', 'Stockage gonflable', 'Renouvellement saisonnier'],
      },
      faqs: [
        {
          q: 'Les resorts peuvent-ils personnaliser l\'équipement SUP avec leur logo ?',
          a: 'Oui. Les resorts peuvent personnaliser les graphismes, les couleurs et les accessoires selon les exigences du projet — marquage complet de la planche dans les couleurs de l\'établissement.',
        },
        {
          q: 'Pouvez-vous fournir plusieurs unités SUP pour l\'exploitation d\'un resort ?',
          a: 'Oui. Des solutions de production peuvent être développées selon les besoins de la flotte, de la flotte de démarrage aux programmes de renouvellement saisonnier.',
        },
        {
          q: 'Combien de planches un resort a-t-il besoin ?',
          a: 'La plupart des resorts commencent avec 20–50 planches et évoluent selon la demande. Nous recommandons selon le volume de clients et le littoral, pas selon des estimations.',
        },
        {
          q: 'Les planches gonflables conviennent-elles à un usage en resort ?',
          a: 'Oui. Les SUP gonflables modernes sont extrêmement durables et beaucoup plus faciles à stocker et à transporter — le choix populaire pour les resorts avec un espace de stockage limité.',
        },
        {
          q: 'La flotte peut-elle porter notre logo et nos couleurs ?',
          a: 'Oui — graphismes complets sur la planche, impression du logo, marquage EVA et accessoires à marque font partie intégrante du programme resort.',
        },
      ],
      ctaLevel: 'warm',
      ctaLabel: 'Demandez une solution SUP pour votre resort',
    },
    {
      slug: 'club-sup',
      navLabel: 'Planches d\'équipe pour clubs',
      metaTitle: 'Équipement SUP pour clubs et équipes',
      metaDescription:
        'iSupfactory propose des solutions d\'équipement SUP personnalisé pour clubs, équipes et événements, incluant le graphisme, les spécifications et l\'accompagnement de production.',
      kicker: 'Planches d\'équipe pour clubs',
      serviceType: 'Équipement SUP pour clubs et équipes',
      answer:
        'Les clubs et équipes obtiennent des flottes durables et cohérentes dans leurs couleurs : placement du logo, longueurs de pagaie personnalisées et lots d\'accessoires sur une seule spécification de planche standardisée, afin que les réparations et les pièces de rechange restent simples lors des réassorts. Le MOQ démarre à 90–100+ unités (volume) ; des lots pilotes de 20–50 unités sont disponibles pour valider la spécification.',
      h1: 'Équipement SUP personnalisé pour clubs et équipes',
      intro: [
        'Les clubs de paddle ont besoin de planches qui résistent à l\'entraînement quotidien, affichent les couleurs de l\'équipe et restent cohérentes lors des réassorts. Nous fabriquons des planches d\'équipe personnalisées avec le nom et les couleurs de votre club, à des tarifs avantageux pour les flottes.',
        'Les programmes de club incluent également le volet pratique : pièces détachées, guide de réparation et accompagnement des réassorts à qualité constante.',
      ],
      scenario: {
        title: 'Votre club organise des entraînements et des sessions d\'équipe',
        body: 'Les planches sont utilisées quotidiennement par les membres et représentent le club lors d\'événements et de compétitions. Vous souhaitez un équipement d\'équipe à l\'image de votre club, robuste et sans gérer vous-même la relation avec l\'usine.',
      },
      pairs: [
        {
          problem: 'Les planches d\'entraînement subissent un usage intensif et répété.',
          solution: 'Construction renforcée conçue pour un usage professionnel quotidien, avec guide de réparation et support pour les pièces détachées.',
        },
        {
          problem: 'La flotte apparaît disparate et sans identité.',
          solution: 'Le nom, les couleurs et le logo du club imprimés sur chaque planche pour une flotte d\'équipe unifiée.',
        },
        {
          problem: 'L\'extension de la flotte nécessite de rechercher des références compatibles.',
          solution: 'Les réassorts s\'effectuent sur les mêmes plateformes vérifiées : les nouvelles planches correspondent parfaitement aux existantes.',
        },
        {
          problem: 'Les budgets flotte sont limités.',
          solution: 'Tarifs dégressifs pour les flottes et interlocuteur dédié pour les réassorts, les pièces et la maintenance.',
        },
      ],
      steps: [
        { title: 'Présentez votre club', body: 'Nombre de membres, types de sessions et équipement actuel.' },
        { title: 'Choisissez les types de planches', body: 'Planches d\'entraînement, de début et d\'équipe adaptées à votre programme.' },
        { title: 'Ajoutez la marque du club', body: 'Nom, couleurs et logo appliqués sur les planches et les accessoires.' },
        { title: 'Commandez et développez', body: 'Approvisionnement de la flotte, pièces détachées et réassorts à qualité constante.' },
      ],
      caseStudy: {
        title: 'Renouvellement de la flotte d\'un club',
        body: 'Un club de paddle a renouvelé son image avec 25 planches d\'entraînement à marque et des pièces de rechange. Les membres s\'entraînent avec un équipement unifié, et le club a étendu sa flotte la saison suivante avec un réassort identique.',
        tags: ['Marque du club', 'Renouvellement de flotte', 'Support pièces'],
      },
      faqs: [
        {
          q: 'Les clubs de SUP peuvent-ils personnaliser les planches d\'équipe ?',
          a: 'Oui. Les clubs peuvent personnaliser les graphismes, les couleurs et les configurations produit — le nom, les couleurs et le logo du club sur chaque planche.',
        },
        {
          q: 'Pouvez-vous assurer une production SUP pour des événements ?',
          a: 'Oui. Des plans de production peuvent être développés selon les besoins de l\'événement, incluant des planches et accessoires édition spéciale.',
        },
        {
          q: 'Quelles planches conviennent le mieux à l\'entraînement en club ?',
          a: 'Des planches stables et robustes adaptées au niveau des membres — planches larges de début pour les cours et planches de randonnée pour l\'entraînement en distance.',
        },
        {
          q: 'Les clubs bénéficient-ils de tarifs dégressifs pour les flottes ?',
          a: 'Oui — les flottes de club bénéficient de tarifs dégressifs et d\'un interlocuteur dédié pour les réassorts, les pièces et la maintenance.',
        },
        {
          q: 'Les planches endommagées peuvent-elles être réparées ou remplacées ?',
          a: 'Nous fournissons des pièces de rechange, un guide de réparation et un accompagnement pour les réassorts afin de maintenir la cohérence de la flotte.',
        },
      ],
      ctaLevel: 'cold',
      ctaLabel: 'Parlez de votre projet SUP club',
    },
    {
      slug: 'school-sup',
      navLabel: 'Programme SUP scolaire',
      metaTitle: 'Équipement SUP scolaire | Planches personnalisées pour l\'éducation',
      metaDescription:
        'Des solutions d\'équipement SUP sûres et fiables pour écoles, camps et organismes, avec un accompagnement de production personnalisée de iSupfactory.',
      kicker: 'Programme SUP scolaire',
      serviceType: 'Équipement SUP pour écoles et programmes',
      answer:
        'Pour les écoles et programmes éducatifs, nous fournissons des planches stables et accessibles aux débutants, avec guide de sécurité imprimé, pagaies rembourrées et accessoires de protection, dimensionnées en fonction de vos effectifs et de vos contraintes de stockage. Le lot standard est de 90–100+ unités par rouleau de 150 m, avec des lots pilotes de 20–50 unités ; les délais s\'adaptent au calendrier d\'approvisionnement scolaire.',
      h1: 'Solutions SUP sûres et fiables pour écoles et programmes',
      intro: [
        'Les écoles abordent le paddle différemment : grands groupes, niveaux hétérogènes, exigences de sécurité strictes et budgets éducatifs. Notre programme scolaire propose des planches stables et accessibles aux débutants, des packs adaptés aux effectifs et des conseils du point de vue de l\'instructeur.',
        'L\'approvisionnement en volume et l\'accompagnement des réassorts maintiennent l\'équipement disponible pour de nouvelles promotions année après année.',
      ],
      scenario: {
        title: 'Vous enseignez le paddle à des élèves',
        body: 'Les groupes sont importants et les niveaux de compétence variés. Vous avez besoin de planches stables et sûres pour les débutants, de quantités adaptées à la taille des groupes et d\'un programme compatible avec le budget et les cycles d\'approvisionnement scolaires.',
      },
      pairs: [
        {
          problem: 'Les élèves ont besoin d\'une stabilité maximale sur l\'eau.',
          solution: 'Planches de début larges et à grand volume, et planches multi-places conçues pour être indulgentes avec les premières fois.',
        },
        {
          problem: 'La taille des groupes exige un équipement suffisant et uniforme.',
          solution: 'Tarifs de programme en volume selon la taille des groupes, avec une qualité identique sur chaque planche.',
        },
        {
          problem: 'Les instructeurs gèrent la sécurité avec peu de moyens.',
          solution: 'Les planches incluent des consignes d\'utilisation claires, et nous recommandons les quantités et l\'agencement pour votre zone d\'eau.',
        },
        {
          problem: 'L\'équipement doit durer sur plusieurs promotions d\'élèves.',
          solution: 'Construction renforcée avec pièces détachées et accompagnement des réassorts pour une longue durée de vie du programme.',
        },
      ],
      steps: [
        { title: 'Présentez votre programme', body: 'Taille des groupes, zone d\'eau, configuration des instructeurs et cycle budgétaire.' },
        { title: 'Construisez le pack', body: 'Types et quantités de planches adaptés à la pédagogie, pas à des estimations.' },
        { title: 'Validation de l\'échantillon', body: 'Vérifiez la stabilité, la construction et la finition sur une planche physique.' },
        { title: 'Livraison et renouvellement', body: 'Approvisionnement en volume, pièces détachées et réassorts pour les nouvelles promotions.' },
      ],
      caseStudy: {
        title: 'Programme nautique scolaire',
        body: 'Une école a lancé un cours de paddle avec 15 planches de début et des planches multi-places pour les premières leçons. Les instructeurs ont constaté des progrès plus rapides lors de la première session grâce aux plateformes stables, et le programme a renouvelé l\'équipement avec un réassort identique l\'année suivante.',
        tags: ['Flotte de début', 'Lancement de programme', 'Commandes de renouvellement'],
      },
      faqs: [
        {
          q: 'Quel équipement SUP convient aux écoles ?',
          a: 'Le choix de l\'équipement SUP dépend de l\'âge des utilisateurs, du contexte d\'utilisation et des exigences du programme — les planches larges et stables sont le choix standard pour l\'enseignement.',
        },
        {
          q: 'Les écoles peuvent-elles personnaliser l\'équipement SUP ?',
          a: 'Oui. Les écoles peuvent personnaliser les graphismes, les couleurs et les packs d\'équipement selon leur programme.',
        },
        {
          q: 'Quelles planches conviennent le mieux aux cours de SUP scolaires ?',
          a: 'Les planches de début larges et stables et les planches multi-places sont idéales — leur volume les rend indulgentes pour les débutants et stables avec plusieurs rameurs.',
        },
        {
          q: 'Les quantités peuvent-elles correspondre à la taille de nos groupes ?',
          a: 'Oui — les tarifs de programme sont construits autour des quantités par groupe, et nous recommandons les chiffres selon votre zone d\'eau et votre rythme de rotation.',
        },
        {
          q: 'Travaillez-vous avec les calendriers d\'approvisionnement scolaires ?',
          a: 'Oui. Nous planifions les délais d\'échantillonnage et de production en fonction des cycles budgétaires et saisonniers scolaires.',
        },
      ],
      ctaLevel: 'cold',
      ctaLabel: 'Parlez de votre programme SUP scolaire',
    },
  ],
  de: [
    {
      slug: 'custom-sup',
      navLabel: 'Individuelle SUP-Fertigung',
      metaTitle: 'Individuelle SUP-Entwicklung | Lösungen für maßgeschneiderte Paddelboards',
      metaDescription:
        'Entwickeln Sie individuelle SUP-Produkte mit iSupfactory. Wir unterstützen Produktanforderungen, Individualisierung, Prototypen und Fertigung für Unternehmen und Organisationen.',
      kicker: 'Hersteller individueller SUPs',
      serviceType: 'Entwicklung individueller SUP-Produkte',
      answer:
        'Wir entwickeln aufblasbare SUPs, Hardboards und Zubehör nach Ihren Anforderungen — Form, Grafiken, Materialien und Verpackung — von der Konstruktion über Muster bis zur Produktion. Individuelle Projekte starten ab 90–100+ Stück pro 150-m-Rolle (Menge); Muster versenden wir in 7–12 Tagen, die Produktion dauert 25–35 Tage nach bestätigter Bestellung und Anzahlung.',
      h1: 'Individuelle SUP-Produkte, die auf Ihre Anforderungen zugeschnitten sind',
      intro: [
        'Sie brauchen Paddelboards nach Ihrer Spezifikation — Form, Grafiken, Materialien, Verpackung — ohne selbst eine Fabrik zu betreiben. Wir sind der Fertigungspartner, der Ihre Anforderung aufnimmt und ein lieferbares Produkt zurückgibt.',
        'Jedes Projekt wird von einem festen Spezialisten betreut, der Design, Muster, Produktion und Lieferung steuert, sodass Sie jederzeit wissen, wo Ihr Auftrag steht.',
      ],
      scenario: {
        title: 'Sie brauchen Boards nach Ihrer Spezifikation',
        body: 'Eine Produktanforderung — kein Katalogprodukt. Ihre Formpräferenzen, Ihre Grafiken, Ihr Qualitätsniveau, Ihre Verpackung. Wir konstruieren, bemustern und produzieren auf erprobten Plattformen, mit Flexibilität schon ab dem ersten kleinen Los.',
      },
      pairs: [
        {
          problem: 'Fabrikkataloge bieten nur Standarddesigns, die Sie nicht ändern können.',
          solution: 'Wir produzieren individuelle Boards mit Ihren Formen, Grafiken und Spezifikationen — vom ersten Muster bis zur vollen Serienproduktion.',
        },
        {
          problem: 'Hohe Mindestmengen binden Sie an Lagerbestände, bevor der Markt validiert ist.',
          solution: 'Individuelle Mengenproduktion startet ab 90–100+ Stück pro Design, während Pilotproduktionen auf bestehenden Plattformen ab 20–50 Stück möglich sind — erste Lose bleiben klein, der Stückpreis bleibt fair.',
        },
        {
          problem: 'Sie haben kein Design- oder Engineering-Team an Ihrer Seite.',
          solution: 'Unser hauseigenes Design- und Engineering-Team verwandelt Idee, Skizze oder Referenzboard in produktionsreife Zeichnungen.',
        },
        {
          problem: 'Unbekannte Fabrikqualität und langsame Kommunikation.',
          solution: 'Ein Projektspezialist betreut Muster, Qualitätskontroll-Meilensteine und Liefertermine vom Anfang bis zum Ende — ein Ansprechpartner, klare Updates.',
        },
      ],
      steps: [
        { title: 'Projekt einreichen', body: 'Teilen Sie uns Ihre Anforderungen mit oder senden Sie Skizzen und Referenzbilder.' },
        { title: 'Design und Muster', body: 'Wir entwickeln die Zeichnungen und versenden innerhalb von 7–12 Tagen ein physisches Muster.' },
        { title: 'Freigabe und Produktion', body: 'Nach Ihrer Freigabe läuft die Produktion 25–35 Tage mit mehrstufiger Qualitätskontrolle.' },
        { title: 'Lieferung und Nachbestellung', body: 'Weltweiter Export mit professioneller Verpackung, plus Nachbestell-Service bei gleichbleibender Qualität.' },
      ],
      caseStudy: {
        title: 'Sortimentserweiterung einer Outdoor-Marke',
        body: 'Eine Outdoor-Ausrüstungsmarke stieg mit einem gebrandeten Touring-Board in den Paddelsport ein. Wir entwickelten das Board aus einer groben Skizze, erreichten die Musterfreigabe in 15 Tagen und fertigten die erste Serie in 25–35 Tagen.',
        tags: ['Board-Entwicklung', 'Gebrandete Grafiken', 'Erste Serienproduktion'],
      },
      faqs: [
        {
          q: 'Können Sie ein SUP-Produkt aus meiner Idee entwickeln?',
          a: 'Ja. Wir unterstützen Sie bei der Bewertung Ihrer Anforderungen und entwickeln eine produktionsreife Lösung — vom Konzept und den Zeichnungen bis zum physischen Muster.',
        },
        {
          q: 'Kann ich SUP-Grafiken und Farben individualisieren?',
          a: 'Ja. Individuelle Grafiken, Farben und Branding-Elemente können je nach Projektanforderung entwickelt werden.',
        },
        {
          q: 'Wie hoch ist die Mindestbestellmenge für individuelle SUP-Fertigung?',
          a: 'Individuelle Mengenproduktion startet ab 90–100+ Stück pro Design, mit Pilotproduktionen ab 20–50 Stück auf bestehenden Plattformen. Größere Mengen sichern bessere Stückpreise, und Nachbestellungen behalten Ihr Werkzeug und Ihre Designs.',
        },
        {
          q: 'Was kann an einem Board individualisiert werden?',
          a: 'Form und Maße, Konstruktion und Materialien, Grafiken und Logos, EVA-Pad-Layout, Zubehör (Paddel, Pumpe, Tasche) und Verpackung.',
        },
        {
          q: 'Stellen Sie vor der Produktion Muster bereit?',
          a: 'Ja — vor jeder Serie wird ein physisches Muster produziert und freigegeben. Die Musterzeit beträgt in der Regel 7–12 Tage.',
        },
        {
          q: 'Können Sie nur mit meinen Marken-Assets arbeiten, ohne ein volles Designteam?',
          a: 'Ja. Unser Designteam entwickelt produktionsreife Vorlagen aus Ihrem Logo, Ihren Markenfarben oder einem groben Konzept.',
        },
      ],
      ctaLevel: 'hot',
      ctaLabel: 'Besprechen Sie Ihr individuelles SUP-Projekt',
    },
    {
      slug: 'private-label-sup',
      navLabel: 'Paddleboards unter Privatlabel',
      metaTitle: 'SUP-Fertigung unter Privatlabel | Individuelle SUP-Produktion',
      metaDescription:
        'iSupfactory unterstützt die SUP-Fertigung unter Privatlabel für bestehende Marken — von der Spezifikation bis zur Produktion individueller SUP-Produkte.',
      kicker: 'Paddleboards unter Privatlabel',
      serviceType: 'SUP-Fertigung unter Privatlabel',
      answer:
        'Privatlabel bringt Ihre Marke auf erprobte, produktionsreife SUP-Plattformen ohne neues Werkzeug. Wählen Sie ein Basismodell, bringen Sie Logo, Farben, Verpackung und Zubehör an und bestellen Sie ab 90–100+ Stück pro 150-m-Rolle (Menge). Das ist der schnellste und risikoärmste Weg zum Launch; Muster dauern 7–12 Tage, die Produktion 25–35 Tage nach Bestellung.',
      h1: 'Unterstützung bei der SUP-Fertigung unter Privatlabel für Ihre Marke',
      intro: [
        'Die Privatlabel-Produktion ermöglicht es Ihnen, eine Paddelboard-Linie unter eigener Marke zu launchen, ohne in Werkzeug oder eine Fabrik zu investieren. Logo, Farben und Verpackung kommen auf qualitätsgeprüfte Plattformen, mit Mengen, die mit der Nachfrage wachsen.',
        'Wir übernehmen die Produktseite, damit Sie sich auf die Marke konzentrieren können: Design, Verpackung und Nachbestell-Management liegen bei uns.',
      ],
      scenario: {
        title: 'Sie haben eine Marke — und brauchen ein Produkt darunter',
        body: 'Eine Markenidentität ohne Lagerbestand. Sie wollen eine verkaufsfähige Paddelboard-Linie mit Ihrem Namen, in einer Menge, die zu Ihrer Phase passt — vom ersten Validierungslos bis zu wiederkehrenden Flotten.',
      },
      pairs: [
        {
          problem: 'Branding nur auf einem Aufkleber — das Produkt wirkt weiterhin generisch.',
          solution: 'Volle Markenintegration: Board-Grafiken, Logo, EVA-Pad-Layout, gebrandetes Paddel, Pumpe, Tasche und Verpackung.',
        },
        {
          problem: 'Die ersten Bestellungen zwingen Sie, Hunderte Einheiten zu kaufen, die Sie vielleicht nicht verkaufen.',
          solution: 'Starten Sie mit einem Pilotlos von 20–50 Einheiten auf einer Standardplattform und skalieren Sie auf eine Standard-Mengenproduktion ab 90–100+ Stück — validieren Sie den Markt vor großen Losen.',
        },
        {
          problem: 'Design- und Verpackungsentwicklung scheint unerreichbar.',
          solution: 'Ihre Marken-Assets werden von unserem Designteam in produktionsreife Board- und Verpackungsvorlagen überführt.',
        },
        {
          problem: 'Nachbestellungen schwanken in Qualität oder Verfügbarkeit.',
          solution: 'Werkzeug und Designs bleiben Ihr Eigentum, und Nachbestellungen laufen auf denselben geprüften Plattformen bei gleichbleibender Qualität.',
        },
      ],
      steps: [
        { title: 'Marke teilen', body: 'Senden Sie Ihr Logo, Ihre Farben und vorhandene Marken-Assets.' },
        { title: 'Vorlagen entwickeln', body: 'Wir gestalten Board-Grafiken, EVA-Layout und Verpackung rund um Ihre Marke.' },
        { title: 'Muster freigeben', body: 'Ein physisches Muster bestätigt Farben, Finish und Verpackung.' },
        { title: 'Produzieren und liefern', body: 'Die Produktion läuft nach Ihrer Menge, mit Qualitätskontrolle und Export komplett aus einer Hand.' },
      ],
      caseStudy: {
        title: 'Neue Marke, erster Produktionsauftrag',
        body: 'Ein Sport-Händler startete seine Paddelboard-Linie mit nur einem Logo. Wir entwickelten die komplette Board- und Verpackungsvorlage, produzierten eine erste Charge von 50 Stück zum Markttest und skalierten innerhalb einer Saison auf einen vollen Produktionsauftrag.',
        tags: ['Markenentwicklung', 'Verpackungsdesign', 'Skalierte Produktion'],
      },
      faqs: [
        {
          q: 'Was ist SUP-Fertigung unter Privatlabel?',
          a: 'Privatlabel-SUP-Fertigung ermöglicht es Unternehmen, SUP-Produkte unter eigener Marke mit individuellen Spezifikationen und Produktionsunterstützung zu verkaufen.',
        },
        {
          q: 'Können bestehende Marken neue SUP-Produkte entwickeln?',
          a: 'Ja. iSupfactory unterstützt Marken beim Einstieg ins SUP-Segment — Produktauswahl, Spezifikationsanpassung, individuelle Grafiken und Fertigung.',
        },
        {
          q: 'Was ist in einem Privatlabel-SUP-Programm enthalten?',
          a: 'Ihre Marke auf dem Board selbst — Grafiken, Logo, EVA-Pad — plus optional gebrandetes Paddel, Pumpe, Rucksack und Verpackung: ein komplettes verkaufsfähiges Produkt unter Ihrem Namen.',
        },
        {
          q: 'Kann das Design zwischen Bestellungen geändert werden?',
          a: 'Ja. Sobald die Marken-Assets produktionsreif sind, können Nachbestellungen Grafiken, Farben oder Verpackung jederzeit aktualisieren.',
        },
        {
          q: 'Wir haben nur ein Logo. Können Sie trotzdem helfen?',
          a: 'Ja. Unser Designteam entwickelt die komplette Board- und Verpackungsvorlage aus Ihrem Logo und Ihren Markenfarben.',
        },
      ],
      ctaLevel: 'warm',
      ctaLabel: 'Besprechen Sie Ihr Privatlabel-Projekt',
    },
    {
      slug: 'resort-sup',
      navLabel: 'Paddleboards für Resorts',
      metaTitle: 'SUP-Ausrüstung für Resorts | Gebrandete Boards',
      metaDescription:
        'Erstellen Sie individuelle SUP-Ausrüstung für Resorts und Hotels mit gebrandeten Boards, Zubehör und Produktionsunterstützung von iSupfactory.',
      kicker: 'Paddleboards für Resorts',
      serviceType: 'SUP-Ausrüstung für Resorts und Hotels',
      answer:
        'Wir liefern gebrandete aufblasbare SUPs für Resorts und Hotels, ausgelegt für den täglichen Gästeeinsatz: Hochdruck-Drop-Stitch-Konstruktion, verstärkte Nähte und gestaffelte MOQs von 20–50 Piloteinheiten bis 90–100+ für Flotten-Rollouts. Die Boards tragen Ihr Logo und Ihre Farben, und wir beraten zu Lagerung, Wartung und Nachbestell-Zeitplänen.',
      h1: 'Individuelle SUP-Lösungen für Resorts und Hotels',
      intro: [
        'Paddleboard-Flotten in Resorts müssen täglichen Gästeeinsatz überstehen, sich zwischen den Saisons leicht lagern lassen und Ihre Marke tragen. Wir bauen langlebige, gastfreundliche Boards in Ihren Farben und strukturieren das Flottenprogramm um Ihren Betrieb herum.',
        'Mengen werden aus tatsächlichen Nutzungsmustern abgeleitet, nicht geschätzt — und Nachbestellprogramme halten die Flotte Saison für Saison aktuell.',
      ],
      scenario: {
        title: 'Sie betreiben Wasseraktivitäten für Gäste',
        body: 'Gäste erwarten ein unvergessliches Wassererlebnis, und die Ausrüstung repräsentiert Ihr Haus. Sie brauchen Boards, die für die tägliche Vermietung robust genug, leicht zu lagern und auf Ihr Resort abgestimmt sind.',
      },
      pairs: [
        {
          problem: 'Gästeflotten nutzen sich bei täglichem Verleih schnell ab.',
          solution: 'Verleihtaugliche Konstruktion mit verstärkten Rails und UV-beständigen Materialien, gebaut für wiederholte Einsätze.',
        },
        {
          problem: 'Der Lagerraum außerhalb der Saison ist begrenzt.',
          solution: 'Lagerfreundliche aufblasbare Optionen, die nach Saisonende in einen Schrank passen.',
        },
        {
          problem: 'Die Ausrüstung wirkt generisch, nicht wie Ihr Haus.',
          solution: 'Vollflächige Grafiken, Logos und EVA-Branding in Ihren Resortfarben — inklusive gebrandetem Zubehör.',
        },
        {
          problem: 'Austausch und Erneuerung der Flotte erfolgen unkoordiniert.',
          solution: 'Ein Flotten-Nachbestellprogramm mit gleichbleibender Qualität, Ersatzteil-Support und ehrlicher Mengenberatung.',
        },
      ],
      steps: [
        { title: 'Betrieb beschreiben', body: 'Gästevolumen, Uferbereich, Lagerung und Saisonlänge.' },
        { title: 'Flottenplan erhalten', body: 'Wir empfehlen Board-Typen und Mengen auf Basis der Nutzungsmuster.' },
        { title: 'Gebrandetes Muster freigeben', body: 'Ihre Farben und Ihr Logo auf einem physischen Board bestätigt.' },
        { title: 'Erhalten und pflegen', body: 'Lieferung, Ersatzteile und ein Nachbestellprogramm für kommende Saisons.' },
      ],
      caseStudy: {
        title: 'Gästeflotte eines Küstenresorts',
        body: 'Ein Küstenresort stattete sein Strandprogramm mit 40 gebrandeten aufblasbaren Boards in Resortfarben aus, inklusive gebrandeter Paddel und Pumpen. Off-Season passen die Boards in einen einzigen Schrank, und die Flotte wurde nach der zweiten Saison bei gleichbleibender Qualität erneuert.',
        tags: ['Gebrandete Gästeflotte', 'Lagerung aufblasbarer Boards', 'Saisonale Erneuerung'],
      },
      faqs: [
        {
          q: 'Können Resorts SUP-Ausrüstung mit ihrem Logo individualisieren?',
          a: 'Ja. Resorts können Grafiken, Farben und Zubehör nach Projektanforderung individualisieren — vollflächiges Branding in den Farben Ihres Hauses.',
        },
        {
          q: 'Können Sie mehrere SUP-Einheiten für den Resortbetrieb liefern?',
          a: 'Ja. Produktionslösungen können nach Flottenbedarf entwickelt werden — von der Startflotte bis zu saisonalen Erneuerungsprogrammen.',
        },
        {
          q: 'Wie viele Boards braucht ein Resort?',
          a: 'Die meisten Resorts starten mit 20–50 Boards und skalieren mit der Nachfrage. Wir empfehlen Mengen anhand von Gästevolumen und Uferbereich, nicht nach Bauchgefühl.',
        },
        {
          q: 'Sind aufblasbare Boards für den Resorteinsatz geeignet?',
          a: 'Ja. Moderne aufblasbare SUP-Boards sind extrem langlebig und deutlich einfacher zu lagern und zu transportieren — die beliebte Wahl für Resorts mit begrenztem Stauraum.',
        },
        {
          q: 'Kann die Flotte unser Logo und unsere Farben tragen?',
          a: 'Ja — vollflächige Grafiken, Logodruck, EVA-Pad-Branding und gebrandetes Zubehör gehören zum Resortprogramm.',
        },
      ],
      ctaLevel: 'warm',
      ctaLabel: 'Resort-SUP-Lösung anfragen',
    },
    {
      slug: 'club-sup',
      navLabel: 'Individuelle Team-Boards für Clubs',
      metaTitle: 'SUP-Ausrüstung für Clubs und Teams',
      metaDescription:
        'iSupfactory bietet individuelle SUP-Ausrüstungslösungen für Clubs, Teams und Events — inklusive Grafiken, Spezifikationen und Produktionsunterstützung.',
      kicker: 'Individuelle Team-Boards für Clubs',
      serviceType: 'SUP-Ausrüstung für Clubs und Teams',
      answer:
        'Clubs und Teams erhalten langlebige, konsistente Flotten in ihren Farben: Logo-Platzierung, individuelle Paddellängen und Zubehörpakete auf einer standardisierten Board-Spezifikation, sodass Reparaturen und Ersatzteile über Nachbestellungen hinweg einfach bleiben. Das MOQ startet bei 90–100+ Stück (Menge); Pilotproduktionen ab 20–50 Einheiten sind verfügbar, um die Spezifikation vorab zu validieren.',
      h1: 'Individuelle SUP-Ausrüstung für Clubs und Teams',
      intro: [
        'Paddelclubs brauchen Boards, die tägliches Training überstehen, wie das Team aussehen und über Nachbestellungen hinweg konsistent bleiben. Wir produzieren individuelle Team-Boards mit Ihrem Clubnamen und Ihren Farben zu flottenfreundlichen Konditionen.',
        'Clubprogramme umfassen auch die praktische Seite: Ersatzteile, Reparaturhinweise und Nachbestell-Support bei gleicher Qualität.',
      ],
      scenario: {
        title: 'Ihr Club betreibt Training und Team-Sessions',
        body: 'Die Boards werden täglich von Mitgliedern genutzt und repräsentieren den Club bei Events und Regatten. Sie wollen langlebige Team-Ausrüstung mit Club-Branding, ohne selbst die Fabrikbeziehung managen zu müssen.',
      },
      pairs: [
        {
          problem: 'Trainings-Boards werden stark und wiederholt genutzt.',
          solution: 'Verstärkte Konstruktion für den täglichen professionellen Einsatz, mit Reparaturhinweisen und Ersatzteil-Support.',
        },
        {
          problem: 'Flotten wirken zusammengewürfelt und ohne Branding.',
          solution: 'Clubname, Farben und Logo auf jedem Board für eine einheitliche Team-Flotte.',
        },
        {
          problem: 'Flottenausbau bedeutet die Jagd nach passenden Beständen.',
          solution: 'Nachbestellungen laufen auf denselben geprüften Plattformen, sodass neue Boards zu bestehenden passen.',
        },
        {
          problem: 'Flottenbudgets sind knapp.',
          solution: 'Flottenpreise und ein fester Ansprechpartner für Nachbestellungen, Teile und Wartungsfragen.',
        },
      ],
      steps: [
        { title: 'Über den Club berichten', body: 'Mitgliederzahl, Session-Arten und aktuelle Ausrüstung.' },
        { title: 'Board-Typen wählen', body: 'Trainings-, Einsteiger- und Team-Formen passend zu Ihrem Programm.' },
        { title: 'Club-Branding ergänzen', body: 'Name, Farben und Logo auf Boards und Zubehör.' },
        { title: 'Bestellen und wachsen', body: 'Flottenbelieferung, Ersatzteile und konsistente Nachbestellungen.' },
      ],
      caseStudy: {
        title: 'Flottenerneuerung eines Clubs',
        body: 'Ein Paddelclub erneuerte mit 25 gebrandeten Trainings-Boards und Ersatzteilen sein Image. Die Mitglieder trainieren auf einheitlicher Ausrüstung, und der Club erweiterte die Flotte in der Folgesaison mit einer identischen Nachbestellung.',
        tags: ['Club-Branding', 'Flottenerneuerung', 'Ersatzteil-Support'],
      },
      faqs: [
        {
          q: 'Können SUP-Clubs Team-Boards individualisieren?',
          a: 'Ja. Clubs können Grafiken, Farben und Produktkonfigurationen individualisieren — Clubname, Farben und Logo auf jedem Board.',
        },
        {
          q: 'Unterstützen Sie eventbasierte SUP-Produktion?',
          a: 'Ja. Produktionsplanung kann nach Eventanforderungen entwickelt werden, einschließlich Event-Edition-Boards und Zubehör.',
        },
        {
          q: 'Welche Boards eignen sich am besten für das Clubtraining?',
          a: 'Stabile, langlebige Boards passend zum Niveau Ihrer Mitglieder — breite Einsteigerformen für den Unterricht und Touring-Formen für das Distanztraining.',
        },
        {
          q: 'Bieten Sie Flottenpreise für Clubs?',
          a: 'Ja — Mengenrabatte gelten für Clubflotten, mit einem festen Ansprechpartner für Nachbestellungen, Teile und Wartungsfragen.',
        },
        {
          q: 'Können beschädigte Boards repariert oder ersetzt werden?',
          a: 'Wir stellen Ersatzteile, Reparaturhinweise und Nachbestell-Support bereit, damit die Flotte konsistent bleibt.',
        },
      ],
      ctaLevel: 'cold',
      ctaLabel: 'Besprechen Sie Ihr Club-SUP-Projekt',
    },
    {
      slug: 'school-sup',
      navLabel: 'SUP-Programm für Schulen',
      metaTitle: 'SUP-Ausrüstung für Schulen | Individuelle Paddelboards für den Unterricht',
      metaDescription:
        'Sichere und zuverlässige SUP-Ausrüstungslösungen für Schulen, Camps und Organisationen mit individueller Produktionsunterstützung von iSupfactory.',
      kicker: 'SUP-Programm für Schulen',
      serviceType: 'SUP-Ausrüstung für Schulen und Programme',
      answer:
        'Für Schulen und Bildungsprogramme liefern wir stabile, anfängergeeignete Boards mit gedruckten Sicherheitshinweisen, gepolsterten Paddeln und Schutzzubehör, abgestimmt auf Ihre Klassengrößen und Lagerung. Die Standard-Mengencharge beträgt 90–100+ Stück pro 150-m-Rolle mit Pilotproduktionen ab 20–50 Einheiten; die Lieferzeiten folgen dem Beschaffungszyklus der Schulen.',
      h1: 'Sichere und zuverlässige SUP-Lösungen für Schulen und Programme',
      intro: [
        'Schulen betreiben Paddelsport anders: große Klassen, gemischte Könnensniveaus, strenge Sicherheitsanforderungen und Bildungsbudgets. Unser Schulprogramm bietet stabile, anfängergeeignete Boards, Paketoptionen passend zur Klassengröße und Beratung aus der Perspektive von Instruktoren.',
        'Mengenbelieferung und Nachbestell-Support halten die Ausrüstung Jahr für Jahr für neue Schülerjahrgänge verfügbar.',
      ],
      scenario: {
        title: 'Sie unterrichten Paddelsport bei Schülern',
        body: 'Klassen sind groß, und die Könnensniveaus variieren. Sie brauchen Boards, die für Anfänger stabil und sicher sind, Mengen passend zur Klassengröße und ein Ausrüstungsprogramm, das in Schulbudget und Beschaffungszyklus passt.',
      },
      pairs: [
        {
          problem: 'Schüler benötigen maximale Stabilität auf dem Wasser.',
          solution: 'Breite, voluminöse Einsteiger-Boards und Mehrpersonen-Boards, die Anfängern Fehler verzeihen.',
        },
        {
          problem: 'Klassengrößen fordern konsistente Ausrüstung im großen Stil.',
          solution: 'Programmpreise für Klassenmengen, mit identischer Qualität auf jedem Board.',
        },
        {
          problem: 'Instruktoren managen die Sicherheit mit begrenzter Unterstützung.',
          solution: 'Die Boards kommen mit klaren Nutzungshinweisen, und wir beraten zu Mengen und Anordnung für Ihre Wasserfläche.',
        },
        {
          problem: 'Die Ausrüstung muss mehrere Schülerjahrgänge überstehen.',
          solution: 'Verstärkte Konstruktion plus Ersatzteile und Nachbestell-Support für eine lange Programmlaufzeit.',
        },
      ],
      steps: [
        { title: 'Programm teilen', body: 'Klassengrößen, Wasserfläche, Instruktoren-Setup und Budgetzyklus.' },
        { title: 'Paket bauen', body: 'Board-Typen und Mengen passend zum Unterricht, nicht nach Schätzung.' },
        { title: 'Muster freigeben', body: 'Stabilität, Konstruktion und Finish an einem physischen Board prüfen.' },
        { title: 'Liefern und erneuern', body: 'Mengenbelieferung, Ersatzteile und Nachbestellungen für neue Jahrgänge.' },
      ],
      caseStudy: {
        title: 'Schulisches Wassersportprogramm',
        body: 'Eine Schule startete ein Paddelsport-Wahlfach mit einer Einsteigerflotte von 15 Boards und Mehrpersonen-Boards für die ersten Stunden. Die Instruktoren meldeten schnellere Fortschritte in der ersten Session dank der stabilen Plattformen, und das Programm erneuerte die Ausrüstung im Folgejahr mit einer identischen Nachbestellung.',
        tags: ['Einsteigerflotte', 'Programm-Launch', 'Erneuerungsbestellungen'],
      },
      faqs: [
        {
          q: 'Welche SUP-Ausrüstung eignet sich für Schulen?',
          a: 'Die Auswahl hängt von Alter, Einsatzumfeld und Programmanforderungen ab — breite, stabile Boards sind die Standardwahl für den Unterricht.',
        },
        {
          q: 'Können Schulen SUP-Ausrüstung individualisieren?',
          a: 'Ja. Schulen können Grafiken, Farben und Ausrüstungspakete nach ihrem Programm individualisieren.',
        },
        {
          q: 'Welche Boards eignen sich am besten für den Schulunterricht?',
          a: 'Breite, stabile Einsteiger-Boards und Mehrpersonen-Boards sind ideal — ihr Volumen macht sie anfängertauglich und auch mit mehreren Riders stabil.',
        },
        {
          q: 'Können die Mengen an unsere Klassengrößen angepasst werden?',
          a: 'Ja — die Programmkonditionen sind auf Klassenmengen ausgelegt, und wir empfehlen Zahlen auf Basis Ihrer Wasserfläche und Rotation.',
        },
        {
          q: 'Arbeiten Sie mit schulischen Beschaffungszeitplänen?',
          a: 'Ja. Wir planen Muster- und Produktionslaufzeiten rund um Schulbudget- und Saisonzyklen.',
        },
      ],
      ctaLevel: 'cold',
      ctaLabel: 'Besprechen Sie Ihr Schul-SUP-Programm',
    },
  ],
  it: [
    {
      slug: 'custom-sup',
      navLabel: 'Produzione SUP personalizzata',
      metaTitle: 'Sviluppo SUP personalizzato | Soluzioni per paddle board personalizzate',
      metaDescription:
        'Sviluppate prodotti SUP personalizzati con iSupfactory. Supportiamo i requisiti di prodotto, la personalizzazione, i prototipi e la produzione per aziende e organizzazioni.',
      kicker: 'Produttore di SUP personalizzati',
      serviceType: 'Sviluppo di prodotti SUP personalizzati',
      answer:
        "Sviluppiamo SUP gonfiabili, tavole rigide e accessori in base ai vostri requisiti — forma, grafiche, materiali e imballaggio — dalla progettazione ai campioni fino alla produzione. I progetti personalizzati partono da 90–100+ pz per rotolo da 150 m (volume); inviamo i campioni in 7–12 giorni e la produzione richiede 25–35 giorni dopo conferma dell’ordine e acconto.",
      h1: 'Prodotti SUP personalizzati in base ai vostri requisiti',
      intro: [
        'Vi servono paddle board costruite secondo le vostre specifiche — forma, grafiche, materiali, imballaggio — senza gestire una fabbrica da soli. Siamo il partner di produzione che recepisce la vostra esigenza e vi consegna un prodotto pronto.',
        'Ogni progetto è seguito da uno specialista dedicato che gestisce design, campioni, produzione e consegna, così sapete sempre a che punto è il vostro ordine.',
      ],
      scenario: {
        title: 'Vi servono tavole secondo le vostre specifiche',
        body: 'Un requisito di prodotto — non un prodotto da catalogo. Le vostre preferenze di forma, le vostre grafiche, il vostro livello di qualità, il vostro imballaggio. Progettiamo, realizziamo i campioni e produciamo su piattaforme collaudate, con flessibilità fin dal primo piccolo lotto.',
      },
      pairs: [
        {
          problem: 'I cataloghi di fabbrica offrono solo design standard che non potete modificare.',
          solution: 'Produciamo tavole personalizzate con le vostre forme, grafiche e specifiche — dal primo campione fino alla produzione in serie completa.',
        },
        {
          problem: 'Ordini minimi elevati vi vincolano allo stock prima che il mercato sia validato.',
          solution: 'La produzione personalizzata in volume parte da 90–100+ pz per design, mentre le produzioni pilota su piattaforme esistenti partono da 20–50 pz — i primi lotti restano piccoli e il prezzo unitario resta equo.',
        },
        {
          problem: 'Non avete un team di design o ingegneria al vostro fianco.',
          solution: "Il nostro team interno di design e ingegneria trasforma un’idea, un bozzetto o una tavola di riferimento in disegni pronti per la produzione.",
        },
        {
          problem: 'Qualità di fabbrica sconosciuta e comunicazione lenta.',
          solution: "Uno specialista del progetto segue campioni, tappe del controllo qualità e scadenze di consegna dall’inizio alla fine — un unico referente e aggiornamenti chiari.",
        },
      ],
      steps: [
        { title: 'Inviate il progetto', body: 'Comunicateci i vostri requisiti oppure inviate bozzetti e immagini di riferimento.' },
        { title: 'Design e campione', body: 'Sviluppiamo i disegni e spediamo un campione fisico entro 7–12 giorni.' },
        { title: 'Approvazione e produzione', body: 'Dopo la vostra approvazione, la produzione richiede 25–35 giorni con controllo qualità in più punti.' },
        { title: 'Consegna e riordino', body: 'Esportazione mondiale con imballaggio professionale, oltre a supporto per i riordini con qualità costante.' },
      ],
      caseStudy: {
        title: 'Estensione di gamma di un brand outdoor',
        body: "Un brand di attrezzatura outdoor è entrato nel mondo del paddling con una tavola touring brandizzata. Abbiamo sviluppato la tavola da un bozzetto approssimativo, ottenuto l’approvazione del campione in 15 giorni e prodotto la prima serie in 25–35 giorni.",
        tags: ['Sviluppo della tavola', 'Grafiche brandizzate', 'Prima produzione in serie'],
      },
      faqs: [
        {
          q: 'Potete sviluppare un prodotto SUP a partire dalla mia idea?',
          a: 'Sì. Vi aiutiamo a valutare i vostri requisiti e a sviluppare una soluzione pronta per la produzione — dal concept e dai disegni fino al campione fisico.',
        },
        {
          q: 'Posso personalizzare le grafiche e i colori del SUP?',
          a: 'Sì. Grafiche, colori ed elementi di branding personalizzati possono essere sviluppati in base ai requisiti del progetto.',
        },
        {
          q: "Qual è la quantità minima d’ordine per la produzione SUP personalizzata?",
          a: 'La produzione personalizzata in volume parte da 90–100+ pz per design, con produzioni pilota da 20–50 pz su piattaforme esistenti. Quantità maggiori garantiscono prezzi unitari migliori e i riordini mantengono i vostri stampi e design.',
        },
        {
          q: 'Cosa si può personalizzare su una tavola?',
          a: 'Forma e dimensioni, costruzione e materiali, grafiche e loghi, layout del pad EVA, accessori (pagaia, pompa, borsa) e imballaggio.',
        },
        {
          q: 'Fornite campioni prima della produzione?',
          a: 'Sì: prima di ogni serie viene realizzato e approvato un campione fisico. Il tempo di campionatura è in genere di 7–12 giorni.',
        },
        {
          q: 'Potete lavorare solo con i miei asset di marca, senza un team di design completo?',
          a: 'Sì. Il nostro team di design sviluppa grafiche pronte per la produzione dal vostro logo, dai colori del brand o da un concept approssimativo.',
        },
      ],
      ctaLevel: 'hot',
      ctaLabel: 'Parliamo del vostro progetto SUP personalizzato',
    },
    {
      slug: 'private-label-sup',
      navLabel: 'Paddle board private label',
      metaTitle: 'Produzione SUP private label | Produzione SUP personalizzata',
      metaDescription:
        'iSupfactory supporta la produzione SUP private label per brand esistenti, aiutando a sviluppare prodotti SUP personalizzati dalle specifiche fino alla produzione.',
      kicker: 'Paddle board private label',
      serviceType: 'Produzione SUP private label',
      answer:
        "Il private label mette il vostro brand su piattaforme SUP collaudate e pronte per la produzione, senza nuovi stampi. Scegliete un modello base, applicate logo, colori, imballaggio e accessori e ordinate da 90–100+ pz per rotolo da 150 m (volume). È il modo più rapido e a minor rischio per lanciarsi; i campioni richiedono 7–12 giorni e la produzione 25–35 giorni dopo l’ordine.",
      h1: 'Produzione SUP private label per il vostro brand',
      intro: [
        'La produzione private label vi permette di lanciare una linea di paddle board con il vostro marchio senza investire in stampi o in una fabbrica. Logo, colori e imballaggio vengono applicati su piattaforme certificate per la qualità, con quantità che crescono con la domanda.',
        'Ci occupiamo noi del lato prodotto, così voi potete concentrarvi sul brand: design, imballaggio e gestione dei riordini sono a nostro carico.',
      ],
      scenario: {
        title: 'Avete un brand — e vi serve un prodotto che lo rappresenti',
        body: "Un’identità di marca senza magazzino. Volete una linea di paddle board vendibile a vostro nome, in una quantità adatta alla vostra fase — dal primo lotto di validazione fino alle flotte ricorrenti.",
      },
      pairs: [
        {
          problem: 'Il branding solo su un adesivo — il prodotto continua a sembrare generico.',
          solution: 'Integrazione completa del brand: grafiche sulla tavola, logo, layout del pad EVA, pagaia brandizzata, pompa, borsa e imballaggio.',
        },
        {
          problem: 'I primi ordini vi costringono ad acquistare centinaia di unità che forse non venderete.',
          solution: 'Iniziate con un lotto pilota di 20–50 unità su una piattaforma standard, poi scalate verso una produzione standard in volume da 90–100+ pz — validate il mercato prima di ordini grandi.',
        },
        {
          problem: 'La creazione di design e imballaggio sembra fuori portata.',
          solution: 'I vostri asset di marca vengono trasformati dal nostro team di design in grafiche per tavola e imballaggio pronte per la produzione.',
        },
        {
          problem: 'I riordini variano in qualità o disponibilità.',
          solution: 'Stampi e design restano di vostra proprietà, e i riordini vengono prodotti sulle stesse piattaforme certificate con qualità costante.',
        },
      ],
      steps: [
        { title: 'Condividete il brand', body: 'Inviate il vostro logo, i colori e gli asset di marca esistenti.' },
        { title: 'Sviluppo delle grafiche', body: 'Progettiamo grafiche per la tavola, layout EVA e imballaggio intorno al vostro brand.' },
        { title: 'Approvazione del campione', body: 'Un campione fisico conferma colori, finitura e imballaggio.' },
        { title: 'Produzione e consegna', body: 'La produzione segue le vostre quantità, con controllo qualità ed esportazione gestiti completamente da noi.' },
      ],
      caseStudy: {
        title: 'Nuovo brand, primo ordine di produzione',
        body: "Un rivenditore sportivo ha lanciato la sua linea di paddle board partendo solo da un logo. Abbiamo sviluppato l’intera grafica di tavola e imballaggio, prodotto una prima partita di 50 pz per il test di mercato e scalato fino a un ordine di produzione completo entro una stagione.",
        tags: ["Sviluppo del brand", "Design dell’imballaggio", 'Produzione scalata'],
      },
      faqs: [
        {
          q: "Cos’è la produzione SUP private label?",
          a: 'La produzione SUP private label permette alle aziende di vendere prodotti SUP con il proprio marchio, con specifiche personalizzate e supporto alla produzione.',
        },
        {
          q: 'I brand esistenti possono sviluppare nuovi prodotti SUP?',
          a: 'Sì. iSupfactory supporta i brand che vogliono entrare nel segmento SUP — selezione del prodotto, adeguamento delle specifiche, grafiche personalizzate e produzione.',
        },
        {
          q: 'Cosa prevede un programma SUP private label?',
          a: 'Il vostro brand sulla tavola stessa — grafiche, logo, pad EVA — più pagaia, pompa, zaino e imballaggio brandizzati opzionali: un prodotto completo e vendibile a vostro nome.',
        },
        {
          q: 'Il design può essere modificato tra un ordine e l’altro?',
          a: 'Sì. Una volta che gli asset di marca sono pronti per la produzione, i riordini possono aggiornare grafiche, colori o imballaggio in qualsiasi momento.',
        },
        {
          q: 'Abbiamo solo un logo. Potete aiutarci comunque?',
          a: "Sì. Il nostro team di design sviluppa l’intera grafica di tavola e imballaggio a partire dal vostro logo e dai colori del brand.",
        },
      ],
      ctaLevel: 'warm',
      ctaLabel: 'Parliamo del vostro progetto private label',
    },
    {
      slug: 'resort-sup',
      navLabel: 'Paddle board per resort',
      metaTitle: 'Attrezzatura SUP per resort | Tavole brandizzate',
      metaDescription:
        'Realizzate attrezzatura SUP personalizzata per resort e hotel con tavole brandizzate, accessori e supporto alla produzione di iSupfactory.',
      kicker: 'Paddle board per resort',
      serviceType: 'Attrezzatura SUP per resort e hotel',
      answer:
        "Forniamo SUP gonfiabili brandizzati per resort e hotel, progettati per l’uso quotidiano degli ospiti: costruzione drop-stitch ad alta pressione, cuciture rinforzate e MOQ scaglionati da 20–50 unità pilota fino a 90–100+ per il lancio delle flotte. Le tavole portano il vostro logo e i vostri colori, e vi consigliamo su stoccaggio, manutenzione e pianificazione dei riordini.",
      h1: 'Soluzioni SUP personalizzate per resort e hotel',
      intro: [
        "Le flotte di paddle board nei resort devono resistere all’uso quotidiano degli ospiti, essere facili da stoccare tra le stagioni e portare il vostro marchio. Costruiamo tavole robuste e adatte agli ospiti nei vostri colori e strutturiamo il programma flotta intorno alla vostra attività.",
        'Le quantità vengono definite in base ai modelli d’uso reali, non a stime — e i programmi di riordino mantengono la flotta aggiornata stagione dopo stagione.',
      ],
      scenario: {
        title: 'Gestite attività acquatiche per gli ospiti',
        body: "Gli ospiti si aspettano un’esperienza sull’acqua indimenticabile e l’attrezzatura rappresenta la vostra struttura. Vi servono tavole abbastanza robuste per il noleggio quotidiano, facili da stoccare e in linea con l’immagine del resort.",
      },
      pairs: [
        {
          problem: 'Le flotte per gli ospiti si usurano in fretta con il noleggio quotidiano.',
          solution: 'Costruzione adatta al noleggio, con rail rinforzati e materiali resistenti ai raggi UV, progettata per un uso ripetuto.',
        },
        {
          problem: 'Lo spazio di stoccaggio fuori stagione è limitato.',
          solution: 'Opzioni gonfiabili facili da stoccare, che a fine stagione stanno in un armadio.',
        },
        {
          problem: 'L’attrezzatura sembra generica, non rappresenta la vostra struttura.',
          solution: 'Grafiche a tutta coperta, loghi e branding EVA nei colori del vostro resort — inclusi accessori brandizzati.',
        },
        {
          problem: 'La sostituzione e il rinnovo della flotta avvengono senza coordinamento.',
          solution: 'Un programma di riordino della flotta con qualità costante, supporto per i ricambi e una consulenza onesta sulle quantità.',
        },
      ],
      steps: [
        { title: 'Descrivete la vostra attività', body: 'Volume di ospiti, zona costiera, stoccaggio e durata della stagione.' },
        { title: 'Ricevete un piano flotta', body: 'Vi consigliamo tipi di tavola e quantità in base ai modelli d’uso.' },
        { title: 'Approvazione del campione brandizzato', body: 'I vostri colori e il vostro logo confermati su una tavola fisica.' },
        { title: 'Ricezione e manutenzione', body: 'Consegna, ricambi e un programma di riordino per le stagioni future.' },
      ],
      caseStudy: {
        title: 'Flotta per ospiti di un resort costiero',
        body: 'Un resort costiero ha equipaggiato il suo programma da spiaggia con 40 tavole gonfiabili brandizzate nei colori del resort, inclusi pagaie e pompe brandizzate. Fuori stagione le tavole stanno in un unico armadio e la flotta è stata rinnovata dopo la seconda stagione con qualità costante.',
        tags: ['Flotta brandizzata per gli ospiti', 'Stoccaggio tavole gonfiabili', 'Rinnovo stagionale'],
      },
      faqs: [
        {
          q: 'I resort possono personalizzare l’attrezzatura SUP con il loro logo?',
          a: 'Sì. I resort possono personalizzare grafiche, colori e accessori in base ai requisiti del progetto — branding a tutta coperta nei colori della vostra struttura.',
        },
        {
          q: 'Potete fornire più unità SUP per l’attività di un resort?',
          a: 'Sì. Possiamo sviluppare soluzioni di produzione in base alle esigenze della flotta — dalla flotta iniziale ai programmi di rinnovo stagionale.',
        },
        {
          q: 'Quante tavole servono a un resort?',
          a: 'La maggior parte dei resort parte con 20–50 tavole e scala in base alla domanda. Consigliamo le quantità in base al volume di ospiti e alla zona costiera, non a sensazioni.',
        },
        {
          q: 'Le tavole gonfiabili sono adatte all’uso in un resort?',
          a: 'Sì. I moderni SUP gonfiabili sono estremamente durevoli e molto più facili da stoccare e trasportare: la scelta più diffusa per i resort con spazio di stoccaggio limitato.',
        },
        {
          q: 'La flotta può portare il nostro logo e i nostri colori?',
          a: 'Sì: grafiche a tutta coperta, stampa del logo, branding del pad EVA e accessori brandizzati fanno parte del programma resort.',
        },
      ],
      ctaLevel: 'warm',
      ctaLabel: 'Richiedete una soluzione SUP per il vostro resort',
    },
    {
      slug: 'club-sup',
      navLabel: 'Tavole da team personalizzate per club',
      metaTitle: 'Attrezzatura SUP per club e squadre',
      metaDescription:
        'iSupfactory offre soluzioni di attrezzatura SUP personalizzata per club, squadre ed eventi — inclusi grafiche, specifiche e supporto alla produzione.',
      kicker: 'Tavole da team personalizzate per club',
      serviceType: 'Attrezzatura SUP per club e squadre',
      answer:
        'Club e squadre ottengono flotte durevoli e coerenti nei loro colori: posizionamento del logo, lunghezze di pagaia personalizzate e pacchetti di accessori su una specifica di tavola standardizzata, così riparazioni e ricambi restano semplici anche nei riordini. Il MOQ parte da 90–100+ pz (volume); sono disponibili produzioni pilota da 20–50 unità per validare prima la specifica.',
      h1: 'Attrezzatura SUP personalizzata per club e squadre',
      intro: [
        "I club di paddling hanno bisogno di tavole che resistano all’allenamento quotidiano, abbiano l’aspetto della squadra e restino coerenti tra un riordino e l’altro. Produciamo tavole da team personalizzate con il nome e i colori del vostro club a condizioni vantaggiose per le flotte.",
        'I programmi per i club includono anche l’aspetto pratico: ricambi, indicazioni per le riparazioni e supporto per i riordini con la stessa qualità.',
      ],
      scenario: {
        title: 'Il vostro club organizza allenamenti e sessioni di squadra',
        body: 'Le tavole vengono usate ogni giorno dai soci e rappresentano il club in eventi e regate. Volete attrezzatura da team durevole con il branding del club, senza dover gestire personalmente il rapporto con la fabbrica.',
      },
      pairs: [
        {
          problem: 'Le tavole da allenamento vengono usate molto e ripetutamente.',
          solution: 'Costruzione rinforzata per l’uso professionale quotidiano, con indicazioni per le riparazioni e supporto per i ricambi.',
        },
        {
          problem: 'Le flotte sembrano disomogenee e senza branding.',
          solution: 'Nome del club, colori e logo su ogni tavola per una flotta da team uniforme.',
        },
        {
          problem: 'Ampliare la flotta significa cercare stock compatibili.',
          solution: 'I riordini vengono prodotti sulle stesse piattaforme certificate, così le nuove tavole corrispondono a quelle esistenti.',
        },
        {
          problem: 'I budget per le flotte sono limitati.',
          solution: 'Prezzi da flotta e un referente dedicato per riordini, ricambi e domande sulla manutenzione.',
        },
      ],
      steps: [
        { title: 'Parlateci del club', body: 'Numero di soci, tipi di sessioni e attrezzatura attuale.' },
        { title: 'Scegliete i tipi di tavola', body: 'Forme da allenamento, da principianti e da team in linea con il vostro programma.' },
        { title: 'Aggiungete il branding del club', body: 'Nome, colori e logo su tavole e accessori.' },
        { title: 'Ordinate e crescete', body: 'Fornitura della flotta, ricambi e riordini coerenti.' },
      ],
      caseStudy: {
        title: 'Rinnovo della flotta di un club',
        body: 'Un club di paddling ha rinnovato la sua immagine con 25 tavole da allenamento brandizzate e ricambi. I soci si allenano su attrezzatura uniforme e il club ha ampliato la flotta nella stagione successiva con un riordino identico.',
        tags: ['Branding del club', 'Rinnovo della flotta', 'Supporto ricambi'],
      },
      faqs: [
        {
          q: 'I club SUP possono personalizzare le tavole da team?',
          a: 'Sì. I club possono personalizzare grafiche, colori e configurazioni del prodotto — nome del club, colori e logo su ogni tavola.',
        },
        {
          q: 'Supportate la produzione SUP legata agli eventi?',
          a: 'Sì. La pianificazione della produzione può essere sviluppata in base alle esigenze dell’evento, incluse tavole in edizione evento e accessori.',
        },
        {
          q: 'Quali tavole sono più adatte all’allenamento di un club?',
          a: 'Tavole stabili e durevoli adatte al livello dei vostri soci — forme larghe da principianti per le lezioni e forme touring per l’allenamento di distanza.',
        },
        {
          q: 'Offrite prezzi da flotta per i club?',
          a: 'Sì: sconti sul volume per le flotte dei club, con un referente dedicato per riordini, ricambi e domande sulla manutenzione.',
        },
        {
          q: 'Le tavole danneggiate possono essere riparate o sostituite?',
          a: 'Forniamo ricambi, indicazioni per le riparazioni e supporto per i riordini, così la flotta resta coerente.',
        },
      ],
      ctaLevel: 'cold',
      ctaLabel: 'Parliamo del vostro progetto SUP per club',
    },
    {
      slug: 'school-sup',
      navLabel: 'Programma SUP per scuole',
      metaTitle: "Attrezzatura SUP per scuole | Paddle board personalizzate per l’istruzione",
      metaDescription:
        'Soluzioni di attrezzatura SUP sicure e affidabili per scuole, campi e organizzazioni, con supporto alla produzione personalizzata da parte di iSupfactory.',
      kicker: 'Programma SUP per scuole',
      serviceType: 'Attrezzatura SUP per scuole e programmi',
      answer:
        'Per scuole e programmi educativi forniamo tavole stabili e adatte ai principianti, con indicazioni di sicurezza stampate, pagaie imbottite e accessori protettivi, calibrate sulle dimensioni delle vostre classi e sullo stoccaggio. La partita standard in volume è di 90–100+ pz per rotolo da 150 m, con produzioni pilota da 20–50 unità; i lead time seguono il ciclo di approvvigionamento delle scuole.',
      h1: 'Soluzioni SUP sicure e affidabili per scuole e programmi',
      intro: [
        "Le scuole affrontano il paddling in modo diverso: classi numerose, livelli di abilità misti, requisiti di sicurezza stringenti e budget dell’istruzione. Il nostro programma scuola offre tavole stabili e adatte ai principianti, opzioni di pacchetto in linea con la dimensione delle classi e consulenza con la prospettiva degli istruttori.",
        "La fornitura in volume e il supporto per i riordini mantengono l’attrezzatura disponibile anno dopo anno per le nuove classi di studenti.",
      ],
      scenario: {
        title: 'Insegnate il paddling agli studenti',
        body: 'Le classi sono numerose e i livelli di abilità variano. Vi servono tavole stabili e sicure per i principianti, quantità in linea con la dimensione delle classi e un programma di fornitura adatto al budget scolastico e al ciclo di approvvigionamento.',
      },
      pairs: [
        {
          problem: 'Gli studenti hanno bisogno della massima stabilità sull’acqua.',
          solution: 'Tavole da principianti larghe e voluminose e tavole multi-posto, progettate per essere tolleranti con i principianti.',
        },
        {
          problem: 'Le dimensioni delle classi richiedono attrezzatura coerente in grandi quantità.',
          solution: 'Prezzi da programma per le quantità di classe, con qualità identica su ogni tavola.',
        },
        {
          problem: 'Gli istruttori gestiscono la sicurezza con un supporto limitato.',
          solution: 'Le tavole sono fornite con chiare istruzioni d’uso e vi consigliamo su quantità e disposizione per la vostra area acquatica.',
        },
        {
          problem: 'L’attrezzatura deve resistere a più classi di studenti.',
          solution: 'Costruzione rinforzata, oltre a ricambi e supporto per i riordini, per una lunga durata del programma.',
        },
      ],
      steps: [
        { title: 'Condividete il programma', body: 'Dimensioni delle classi, area acquatica, organizzazione degli istruttori e ciclo di budget.' },
        { title: 'Costruite il pacchetto', body: 'Tipi di tavola e quantità scelti per l’insegnamento, non a stima.' },
        { title: 'Approvazione del campione', body: 'Verificare stabilità, costruzione e finitura su una tavola fisica.' },
        { title: 'Consegna e rinnovo', body: 'Fornitura in volume, ricambi e riordini per le nuove classi.' },
      ],
      caseStudy: {
        title: 'Programma di sport acquatici scolastico',
        body: "Una scuola ha avviato un corso opzionale di paddling con una flotta di 15 tavole per principianti e tavole multi-posto per le prime lezioni. Gli istruttori hanno segnalato progressi più rapidi già dalla prima sessione grazie alle piattaforme stabili, e il programma ha rinnovato l’attrezzatura l’anno successivo con un riordino identico.",
        tags: ['Flotta per principianti', 'Avvio del programma', 'Ordini di rinnovo'],
      },
      faqs: [
        {
          q: 'Quale attrezzatura SUP è adatta alle scuole?',
          a: "La scelta dipende dall’età degli utenti, dall’ambiente di utilizzo e dai requisiti del programma — le tavole larghe e stabili sono la scelta standard per l’insegnamento.",
        },
        {
          q: 'Le scuole possono personalizzare l’attrezzatura SUP?',
          a: 'Sì. Le scuole possono personalizzare grafiche, colori e pacchetti di attrezzatura in base al loro programma.',
        },
        {
          q: 'Quali tavole sono più adatte alle lezioni SUP scolastiche?',
          a: 'Le tavole da principianti larghe e stabili e le tavole multi-posto sono ideali: il loro volume le rende adatte ai principianti e stabili anche con più rider.',
        },
        {
          q: 'Le quantità possono essere adattate alle dimensioni delle nostre classi?',
          a: 'Sì: le condizioni del programma sono costruite sulle quantità di classe e consigliamo i numeri in base alla vostra area acquatica e alla rotazione.',
        },
        {
          q: 'Lavorate con i calendari di approvvigionamento delle scuole?',
          a: 'Sì. Pianifichiamo i tempi di campionatura e produzione intorno ai cicli di budget e di stagione delle scuole.',
        },
      ],
      ctaLevel: 'cold',
      ctaLabel: 'Parliamo del vostro programma SUP per la scuola',
    },
  ],
  pt: [
    {
      slug: 'custom-sup',
      navLabel: 'Produção SUP personalizada',
      metaTitle: 'Desenvolvimento SUP personalizado | Soluções para paddle boards personalizadas',
      metaDescription:
        'Desenvolva produtos SUP personalizados com a iSupfactory. Apoiamos requisitos de produto, personalização, protótipos e produção para empresas e organizações.',
      kicker: 'Fabricante de SUP personalizado',
      serviceType: 'Desenvolvimento de produtos SUP personalizados',
      answer:
        'Desenvolvemos SUP insufláveis, pranchas rígidas e acessórios de acordo com os teus requisitos — forma, gráficas, materiais e embalagem — desde o design até às amostras e à produção. Os projetos personalizados partem de 90–100+ peças por rolo de 150 m (volume); enviamos as amostras em 7–12 dias e a produção requer 25–35 dias após confirmação do pedido e do depósito.',
      h1: 'Produtos SUP personalizados de acordo com os teus requisitos',
      intro: [
        'Precisas de paddle boards construídas segundo as tuas especificações — forma, gráficas, materiais, embalagem — sem ter de gerir uma fábrica. Somos o parceiro de produção que recebe a tua necessidade e te entrega um produto pronto.',
        'Cada projeto é acompanhado por um especialista dedicado que gere o design, as amostras, a produção e a entrega, para saberes sempre em que ponto está o teu pedido.',
      ],
      scenario: {
        title: 'Precisas de pranchas segundo as tuas especificações',
        body: 'Um requisito de produto — não um produto de catálogo. As tuas preferências de forma, as tuas gráficas, o teu nível de qualidade, a tua embalagem. Projetamos, produzimos as amostras e fabricamos em plataformas comprovadas, com flexibilidade desde o primeiro lote pequeno.',
      },
      pairs: [
        {
          problem: 'Os catálogos das fábricas oferecem apenas designs padrão que não podes alterar.',
          solution: 'Produzimos pranchas personalizadas com as tuas formas, gráficas e especificações — desde a primeira amostra até à produção em série completa.',
        },
        {
          problem: 'Ordens mínimas altas obrigam-te a ter stock antes de o mercado estar validado.',
          solution: 'A produção personalizada em volume parte de 90–100+ peças por design, enquanto as produções piloto em plataformas existentes partem de 20–50 peças — os primeiros lotes continuam pequenos e o preço unitário continua justo.',
        },
        {
          problem: 'Não tens uma equipa de design ou engenharia ao teu lado.',
          solution: 'A nossa equipa interna de design e engenharia transforma uma ideia, um esboço ou uma prancha de referência em desenhos prontos para produção.',
        },
        {
          problem: 'Qualidade de fábrica desconhecida e comunicação lenta.',
          solution: 'Um especialista do projeto acompanha as amostras, as etapas de controlo de qualidade e os prazos de entrega do início ao fim — um único interlocutor e atualizações claras.',
        },
      ],
      steps: [
        { title: 'Envia o projeto', body: 'Comunica os teus requisitos ou envia esboços e imagens de referência.' },
        { title: 'Design e amostra', body: 'Desenvolvemos os desenhos e enviamos uma amostra física em 7–12 dias.' },
        { title: 'Aprovação e produção', body: 'Após a tua aprovação, a produção requer 25–35 dias com controlo de qualidade em vários pontos.' },
        { title: 'Entrega e reencomenda', body: 'Exportação mundial com embalagem profissional, além de apoio nas reencomendas com qualidade constante.' },
      ],
      caseStudy: {
        title: 'Extensão de gama de uma marca outdoor',
        body: 'Uma marca de equipamento outdoor entrou no mundo do paddling com uma prancha touring com a marca. Desenvolvemos a prancha a partir de um esboço aproximado, obtivemos a aprovação da amostra em 15 dias e produzimos a primeira série em 25–35 dias.',
        tags: ['Desenvolvimento da prancha', 'Gráficas com a marca', 'Primeira produção em série'],
      },
      faqs: [
        {
          q: 'Podem desenvolver um produto SUP a partir da minha ideia?',
          a: 'Sim. Ajudamos-te a avaliar os teus requisitos e a desenvolver uma solução pronta para produção — desde o conceito e os desenhos até à amostra física.',
        },
        {
          q: 'Posso personalizar as gráficas e as cores do SUP?',
          a: 'Sim. Gráficas, cores e elementos de branding personalizados podem ser desenvolvidos de acordo com os requisitos do projeto.',
        },
        {
          q: 'Qual é a quantidade mínima de encomenda para a produção SUP personalizada?',
          a: 'A produção personalizada em volume parte de 90–100+ peças por design, com produções piloto de 20–50 peças em plataformas existentes. Quantidades maiores garantem melhores preços unitários e as reencomendas mantêm os teus moldes e designs.',
        },
        {
          q: 'O que se pode personalizar numa prancha?',
          a: 'Forma e dimensões, construção e materiais, gráficas e logótipos, layout do pad EVA, acessórios (pá, bomba, bolsa) e embalagem.',
        },
        {
          q: 'Fornecem amostras antes da produção?',
          a: 'Sim: antes de cada série é produzida e aprovada uma amostra física. O tempo de amostragem é normalmente de 7–12 dias.',
        },
        {
          q: 'Podem trabalhar apenas com os meus ativos de marca, sem uma equipa de design completa?',
          a: 'Sim. A nossa equipa de design desenvolve gráficas prontas para produção a partir do teu logótipo, das cores da marca ou de um conceito aproximado.',
        },
      ],
      ctaLevel: 'hot',
      ctaLabel: 'Fala connosco do teu projeto SUP personalizado',
    },
    {
      slug: 'private-label-sup',
      navLabel: 'Paddle boards private label',
      metaTitle: 'Produção SUP private label | Produção SUP personalizada',
      metaDescription:
        'A iSupfactory apoia a produção SUP private label para marcas existentes, ajudando a desenvolver produtos SUP personalizados das especificações até à produção.',
      kicker: 'Paddle boards private label',
      serviceType: 'Produção SUP private label',
      answer:
        'O private label coloca a tua marca em plataformas SUP comprovadas e prontas para produção, sem novos moldes. Escolhe um modelo base, aplica o logótipo, as cores, a embalagem e os acessórios e encomenda a partir de 90–100+ peças por rolo de 150 m (volume). É a forma mais rápida e de menor risco para arrancar; as amostras requerem 7–12 dias e a produção 25–35 dias após o pedido.',
      h1: 'Produção SUP private label para a tua marca',
      intro: [
        'A produção private label permite-te lançar uma linha de paddle boards com a tua marca sem investir em moldes ou numa fábrica. Logótipo, cores e embalagem são aplicados em plataformas certificadas pela qualidade, com quantidades que crescem com a procura.',
        'Nós tratamos do lado do produto, para te focares na marca: design, embalagem e gestão das reencomendas ficam a nosso cargo.',
      ],
      scenario: {
        title: 'Tens uma marca — e precisas de um produto que a represente',
        body: 'Uma identidade de marca sem armazém. Queres uma linha de paddle boards vendável em teu nome, numa quantidade adequada à tua fase — do primeiro lote de validação até às frotas recorrentes.',
      },
      pairs: [
        {
          problem: 'O branding só num autocolante — o produto continua a parecer genérico.',
          solution: 'Integração completa da marca: gráficas na prancha, logótipo, layout do pad EVA, pá com a marca, bomba, bolsa e embalagem.',
        },
        {
          problem: 'As primeiras encomendas obrigam-te a comprar centenas de unidades que talvez não vendas.',
          solution: 'Começa com um lote piloto de 20–50 unidades numa plataforma padrão e depois escala para a produção padrão em volume a partir de 90–100+ peças — valida o mercado antes de encomendas grandes.',
        },
        {
          problem: 'A criação de design e embalagem parece fora do teu alcance.',
          solution: 'Os teus ativos de marca são transformados pela nossa equipa de design em gráficas para a prancha e embalagem prontas para produção.',
        },
        {
          problem: 'As reencomendas variam em qualidade ou disponibilidade.',
          solution: 'Os moldes e os designs continuam a ser teus, e as reencomendas são produzidas nas mesmas plataformas certificadas com qualidade constante.',
        },
      ],
      steps: [
        { title: 'Partilha a marca', body: 'Envia o teu logótipo, as cores e os ativos de marca existentes.' },
        { title: 'Desenvolvimento das gráficas', body: 'Projetamos as gráficas da prancha, o layout EVA e a embalagem em torno da tua marca.' },
        { title: 'Aprovação da amostra', body: 'Uma amostra física confirma as cores, o acabamento e a embalagem.' },
        { title: 'Produção e entrega', body: 'A produção segue as tuas quantidades, com controlo de qualidade e exportação totalmente geridos por nós.' },
      ],
      caseStudy: {
        title: 'Nova marca, primeira encomenda de produção',
        body: 'Um retalhista de desporto lançou a sua linha de paddle boards partindo apenas de um logótipo. Desenvolvemos todas as gráficas da prancha e da embalagem, produzimos uma primeira partida de 50 peças para o teste de mercado e escalámos até a uma encomenda de produção completa dentro de uma época.',
        tags: ['Desenvolvimento da marca', 'Design da embalagem', 'Produção escalada'],
      },
      faqs: [
        {
          q: 'O que é a produção SUP private label?',
          a: 'A produção SUP private label permite às empresas vender produtos SUP com a sua própria marca, com especificações personalizadas e apoio à produção.',
        },
        {
          q: 'As marcas existentes podem desenvolver novos produtos SUP?',
          a: 'Sim. A iSupfactory apoia marcas que querem entrar no segmento SUP — seleção do produto, adequação das especificações, gráficas personalizadas e produção.',
        },
        {
          q: 'O que inclui um programa SUP private label?',
          a: 'A tua marca na própria prancha — gráficas, logótipo, pad EVA — mais pá, bomba, mochila e embalagem com a marca, tudo opcional: um produto completo e vendável em teu nome.',
        },
        {
          q: 'O design pode ser alterado entre encomendas?',
          a: 'Sim. Assim que os ativos de marca estão prontos para produção, as reencomendas podem atualizar gráficas, cores ou embalagem em qualquer altura.',
        },
        {
          q: 'Temos apenas um logótipo. Podem ajudar-nos à mesma?',
          a: 'Sim. A nossa equipa de design desenvolve todas as gráficas da prancha e da embalagem a partir do teu logótipo e das cores da marca.',
        },
      ],
      ctaLevel: 'warm',
      ctaLabel: 'Fala connosco do teu projeto private label',
    },
    {
      slug: 'resort-sup',
      navLabel: 'Paddle boards para resorts',
      metaTitle: 'Equipamento SUP para resorts | Pranchas com a marca',
      metaDescription:
        'Cria equipamento SUP personalizado para resorts e hotéis com pranchas com a marca, acessórios e apoio à produção da iSupfactory.',
      kicker: 'Paddle boards para resorts',
      serviceType: 'Equipamento SUP para resorts e hotéis',
      answer:
        'Fornecemos SUP insufláveis com a marca para resorts e hotéis, concebidos para o uso diário dos hóspedes: construção drop-stitch de alta pressão, costuras reforçadas e MOQ escalonados de 20–50 unidades piloto até 90–100+ para o lançamento das frotas. As pranchas levam o teu logótipo e as tuas cores, e aconselhamos sobre armazenamento, manutenção e planeamento das reencomendas.',
      h1: 'Soluções SUP personalizadas para resorts e hotéis',
      intro: [
        'As frotas de paddle boards num resort têm de aguentar o uso diário dos hóspedes, ser fáceis de armazenar entre épocas e levar a tua marca. Construímos pranchas robustas e adequadas aos hóspedes nas tuas cores e estruturamos o programa de frota em função da tua atividade.',
        'As quantidades são definidas com base nos padrões reais de utilização, não por estimativa — e os programas de reencomenda mantêm a frota atualizada época após época.',
      ],
      scenario: {
        title: 'Geris atividades aquáticas para os hóspedes',
        body: 'Os hóspedes esperam uma experiência inesquecível na água e o equipamento representa o teu espaço. Precisas de pranchas suficientemente robustas para o aluguer diário, fáceis de armazenar e em sintonia com a imagem do resort.',
      },
      pairs: [
        {
          problem: 'As frotas para os hóspedes desgastam-se depressa com o aluguer diário.',
          solution: 'Construção adequada ao aluguer, com rails reforçados e materiais resistentes aos raios UV, concebida para o uso repetido.',
        },
        {
          problem: 'O espaço de armazenamento fora de época é limitado.',
          solution: 'Opções insufláveis fáceis de guardar, que no fim da época cabem num armário.',
        },
        {
          problem: 'O equipamento parece genérico, não representa o teu espaço.',
          solution: 'Gráficas de toda a cobertura, logótipos e branding EVA nas cores do teu resort — incluindo acessórios com a marca.',
        },
        {
          problem: 'A substituição e a renovação da frota acontecem sem coordenação.',
          solution: 'Um programa de reencomenda da frota com qualidade constante, apoio nas peças sobresselentes e aconselhamento honesto sobre as quantidades.',
        },
      ],
      steps: [
        { title: 'Descreve a tua atividade', body: 'Volume de hóspedes, zona costeira, armazenamento e duração da época.' },
        { title: 'Recebe um plano de frota', body: 'Aconselhamos sobre tipos de prancha e quantidades com base nos padrões de utilização.' },
        { title: 'Aprovação da amostra com a marca', body: 'As tuas cores e o teu logótipo confirmados numa prancha física.' },
        { title: 'Receção e manutenção', body: 'Entrega, peças sobresselentes e um programa de reencomenda para as épocas futuras.' },
      ],
      caseStudy: {
        title: 'Frota para hóspedes de um resort costeiro',
        body: 'Um resort costeiro equipou o seu programa de praia com 40 pranchas insufláveis com a marca e as cores do resort, incluindo pás e bombas com a marca. Fora de época, as pranchas cabem num único armário e a frota foi renovada após a segunda época com qualidade constante.',
        tags: ['Frota com a marca para os hóspedes', 'Armazenamento de pranchas insufláveis', 'Renovação sazonal'],
      },
      faqs: [
        {
          q: 'Os resorts podem personalizar o equipamento SUP com o seu logótipo?',
          a: 'Sim. Os resorts podem personalizar gráficas, cores e acessórios de acordo com os requisitos do projeto — branding de toda a cobertura nas cores do teu espaço.',
        },
        {
          q: 'Podem fornecer várias unidades SUP para a atividade de um resort?',
          a: 'Sim. Podemos desenvolver soluções de produção de acordo com as necessidades da frota — desde a frota inicial até aos programas de renovação sazonal.',
        },
        {
          q: 'De quantas pranchas precisa um resort?',
          a: 'A maioria dos resorts começa com 20–50 pranchas e escala com base na procura. Aconselhamos as quantidades com base no volume de hóspedes e na zona costeira, não em sensações.',
        },
        {
          q: 'As pranchas insufláveis são adequadas ao uso num resort?',
          a: 'Sim. Os SUP insufláveis modernos são extremamente duráveis e muito mais fáceis de armazenar e transportar: a escolha mais comum para resorts com espaço de armazenamento limitado.',
        },
        {
          q: 'A frota pode levar o nosso logótipo e as nossas cores?',
          a: 'Sim: gráficas de toda a cobertura, impressão do logótipo, branding do pad EVA e acessórios com a marca fazem parte do programa de resort.',
        },
      ],
      ctaLevel: 'warm',
      ctaLabel: 'Pede uma solução SUP para o teu resort',
    },
    {
      slug: 'club-sup',
      navLabel: 'Pranchas de equipa personalizadas para clubes',
      metaTitle: 'Equipamento SUP para clubes e equipas',
      metaDescription:
        'A iSupfactory oferece soluções de equipamento SUP personalizado para clubes, equipas e eventos — incluindo gráficas, especificações e apoio à produção.',
      kicker: 'Pranchas de equipa personalizadas para clubes',
      serviceType: 'Equipamento SUP para clubes e equipas',
      answer:
        'Os clubes e as equipas obtêm frotas duradouras e coerentes nas suas cores: posicionamento do logótipo, comprimentos de pá personalizados e pacotes de acessórios sobre uma especificação de prancha padronizada, para que as reparações e as peças sobresselentes continuem simples também nas reencomendas. O MOQ parte de 90–100+ peças (volume); estão disponíveis produções piloto de 20–50 unidades para validar primeiro a especificação.',
      h1: 'Equipamento SUP personalizado para clubes e equipas',
      intro: [
        'Os clubes de paddling precisam de pranchas que aguentem o treino diário, tenham o aspeto da equipa e continuem coerentes entre reencomendas. Produzimos pranchas de equipa personalizadas com o nome e as cores do teu clube em condições vantajosas para as frotas.',
        'Os programas para clubes incluem também o lado prático: peças sobresselentes, indicações para as reparações e apoio nas reencomendas com a mesma qualidade.',
      ],
      scenario: {
        title: 'O teu clube organiza treinos e sessões de equipa',
        body: 'As pranchas são usadas todos os dias pelos sócios e representam o clube em eventos e regatas. Queres equipamento de equipa duradouro com o branding do clube, sem ter de gerir tu próprio a relação com a fábrica.',
      },
      pairs: [
        {
          problem: 'As pranchas de treino são usadas muito e repetidamente.',
          solution: 'Construção reforçada para o uso profissional diário, com indicações para as reparações e apoio nas peças sobresselentes.',
        },
        {
          problem: 'As frotas parecem díspares e sem branding.',
          solution: 'Nome do clube, cores e logótipo em cada prancha para uma frota de equipa uniforme.',
        },
        {
          problem: 'Expandir a frota significa procurar stock compatível.',
          solution: 'As reencomendas são produzidas nas mesmas plataformas certificadas, para que as novas pranchas correspondam às existentes.',
        },
        {
          problem: 'Os orçamentos para as frotas são limitados.',
          solution: 'Preços de frota e um interlocutor dedicado para reencomendas, peças sobresselentes e questões de manutenção.',
        },
      ],
      steps: [
        { title: 'Fala-nos do clube', body: 'Número de sócios, tipos de sessões e equipamento atual.' },
        { title: 'Escolhe os tipos de prancha', body: 'Formas de treino, para principiantes e de equipa, em sintonia com o teu programa.' },
        { title: 'Adiciona o branding do clube', body: 'Nome, cores e logótipo nas pranchas e nos acessórios.' },
        { title: 'Encomenda e cresce', body: 'Fornecimento da frota, peças sobresselentes e reencomendas coerentes.' },
      ],
      caseStudy: {
        title: 'Renovação da frota de um clube',
        body: 'Um clube de paddling renovou a sua imagem com 25 pranchas de treino com a marca e peças sobresselentes. Os sócios treinam em equipamento uniforme e o clube expandiu a frota na época seguinte com uma reencomenda idêntica.',
        tags: ['Branding do clube', 'Renovação da frota', 'Apoio em peças sobresselentes'],
      },
      faqs: [
        {
          q: 'Os clubes de SUP podem personalizar as pranchas de equipa?',
          a: 'Sim. Os clubes podem personalizar gráficas, cores e configurações do produto — nome do clube, cores e logótipo em cada prancha.',
        },
        {
          q: 'Apoiam a produção SUP ligada a eventos?',
          a: 'Sim. O planeamento da produção pode ser desenvolvido de acordo com as necessidades do evento, incluindo pranchas de edição do evento e acessórios.',
        },
        {
          q: 'Que pranchas são mais adequadas ao treino de um clube?',
          a: 'Pranchas estáveis e duradouras, adequadas ao nível dos teus sócios — formas largas para principiantes nas aulas e formas touring para o treino de distância.',
        },
        {
          q: 'Oferecem preços de frota para clubes?',
          a: 'Sim: descontos de volume para as frotas dos clubes, com um interlocutor dedicado para reencomendas, peças sobresselentes e questões de manutenção.',
        },
        {
          q: 'As pranchas danificadas podem ser reparadas ou substituídas?',
          a: 'Fornecemos peças sobresselentes, indicações para as reparações e apoio nas reencomendas, para que a frota se mantenha coerente.',
        },
      ],
      ctaLevel: 'cold',
      ctaLabel: 'Fala connosco do teu projeto SUP para clube',
    },
    {
      slug: 'school-sup',
      navLabel: 'Programa SUP para escolas',
      metaTitle: 'Equipamento SUP para escolas | Paddle boards personalizadas para o ensino',
      metaDescription:
        'Soluções de equipamento SUP seguras e fiáveis para escolas, campos e organizações, com apoio à produção personalizada da iSupfactory.',
      kicker: 'Programa SUP para escolas',
      serviceType: 'Equipamento SUP para escolas e programas',
      answer:
        'Para escolas e programas educativos fornecemos pranchas estáveis e adequadas a principiantes, com indicações de segurança impressas, pás almofadadas e acessórios de proteção, calibradas para as dimensões das tuas turmas e para o armazenamento. A partida padrão em volume é de 90–100+ peças por rolo de 150 m, com produções piloto de 20–50 unidades; os prazos seguem o ciclo de aquisição das escolas.',
      h1: 'Soluções SUP seguras e fiáveis para escolas e programas',
      intro: [
        'As escolas abordam o paddling de forma diferente: turmas numerosas, níveis de aptidão mistos, requisitos de segurança rigorosos e orçamentos do ensino. O nosso programa escolar oferece pranchas estáveis e adequadas a principiantes, opções de pacote em linha com a dimensão das turmas e aconselhamento com a perspetiva dos instrutores.',
        'O fornecimento em volume e o apoio nas reencomendas mantêm o equipamento disponível ano após ano para as novas turmas de estudantes.',
      ],
      scenario: {
        title: 'Ensinas paddling aos estudantes',
        body: 'As turmas são numerosas e os níveis de aptidão variam. Precisas de pranchas estáveis e seguras para principiantes, quantidades em linha com a dimensão das turmas e um programa de fornecimento adequado ao orçamento escolar e ao ciclo de aquisição.',
      },
      pairs: [
        {
          problem: 'Os estudantes precisam do máximo de estabilidade na água.',
          solution: 'Pranchas de principiante largas e volumosas e pranchas multi-lugar, concebidas para serem tolerantes com os principiantes.',
        },
        {
          problem: 'A dimensão das turmas exige equipamento coerente em grandes quantidades.',
          solution: 'Preços de programa para as quantidades das turmas, com qualidade idêntica em cada prancha.',
        },
        {
          problem: 'Os instrutores gerem a segurança com apoio limitado.',
          solution: 'As pranchas são fornecidas com instruções de utilização claras e aconselhamos-te sobre quantidades e disposição para a tua zona aquática.',
        },
        {
          problem: 'O equipamento tem de aguentar várias turmas de estudantes.',
          solution: 'Construção reforçada, além de peças sobresselentes e apoio nas reencomendas, para uma longa duração do programa.',
        },
      ],
      steps: [
        { title: 'Partilha o programa', body: 'Dimensões das turmas, zona aquática, organização dos instrutores e ciclo de orçamento.' },
        { title: 'Constrói o pacote', body: 'Tipos de prancha e quantidades escolhidos para o ensino, não por estimativa.' },
        { title: 'Aprovação da amostra', body: 'Verifica a estabilidade, a construção e o acabamento numa prancha física.' },
        { title: 'Entrega e renovação', body: 'Fornecimento em volume, peças sobresselentes e reencomendas para as novas turmas.' },
      ],
      caseStudy: {
        title: 'Programa escolar de desportos aquáticos',
        body: 'Uma escola lançou um curso opcional de paddling com uma frota de 15 pranchas para principiantes e pranchas multi-lugar para as primeiras aulas. Os instrutores registaram progressos mais rápidos logo na primeira sessão graças às plataformas estáveis, e o programa renovou o equipamento no ano seguinte com uma reencomenda idêntica.',
        tags: ['Frota para principiantes', 'Arranque do programa', 'Encomendas de renovação'],
      },
      faqs: [
        {
          q: 'Qual é o equipamento SUP adequado às escolas?',
          a: 'A escolha depende da idade dos utilizadores, do ambiente de utilização e dos requisitos do programa — as pranchas largas e estáveis são a escolha padrão para o ensino.',
        },
        {
          q: 'As escolas podem personalizar o equipamento SUP?',
          a: 'Sim. As escolas podem personalizar gráficas, cores e pacotes de equipamento de acordo com o seu programa.',
        },
        {
          q: 'Que pranchas são mais adequadas às aulas de SUP escolares?',
          a: 'As pranchas largas e estáveis para principiantes e as pranchas multi-lugar são ideais: o volume torna-as adequadas aos principiantes e estáveis mesmo com vários riders.',
        },
        {
          q: 'As quantidades podem ser adaptadas às dimensões das nossas turmas?',
          a: 'Sim: as condições do programa são construídas sobre as quantidades das turmas e aconselhamos os números com base na tua zona aquática e na rotação.',
        },
        {
          q: 'Trabalham com os calendários de aquisição das escolas?',
          a: 'Sim. Planeamos os tempos de amostragem e de produção em torno dos ciclos de orçamento e de época das escolas.',
        },
      ],
      ctaLevel: 'cold',
      ctaLabel: 'Fala connosco do teu programa SUP para a escola',
    },
  ],
  nl: [
    {
      slug: 'custom-sup',
      navLabel: 'Aangepaste SUP-productie',
      metaTitle: 'Aangepaste SUP-ontwikkeling | Oplossingen voor gepersonaliseerde paddle boards',
      metaDescription:
        'Ontwikkel aangepaste SUP-producten met iSupfactory. Wij ondersteunen productvereisten, personalisatie, prototypen en productie voor bedrijven en organisaties.',
      kicker: 'Producent van aangepaste SUP-producten',
      serviceType: 'Aangepaste SUP-productontwikkeling',
      answer:
        'Wij ontwikkelen opblaasbare SUPs, hardboards en accessoires op basis van jouw eisen — vorm, opdruk, materialen en verpakking — van ontwerp via monstering tot productie. Aangepaste projecten starten bij 90–100+ stuks per rol van 150 m (volume); monsters worden binnen 7–12 dagen verzonden en de productie duurt 25–35 dagen na bevestiging van de PO en de aanbetaling.',
      h1: 'Aangepaste SUP-producten op basis van jouw eisen',
      intro: [
        'Je hebt paddle boards nodig die volgens jouw specificaties zijn gebouwd — vorm, opdruk, materialen, verpakking — zonder zelf een fabriek te runnen. Wij zijn de productiepartner die jouw eisen oppakt en een afgewerkt product oplevert.',
        'Elk project wordt begeleid door een toegewijde specialist die het ontwerp, de monsters, de productie en de levering beheert, zodat je altijd weet waar jouw bestelling staat.',
      ],
      scenario: {
        title: 'Je hebt planken nodig die volgens jouw specificaties zijn gebouwd',
        body: 'Een producteis — geen catalogusproduct. Jouw vormvoorkeuren, jouw opdruk, jouw kwaliteitsniveau, jouw verpakking. Wij ontwerpen, monsteren en produceren op bewezen platforms, met flexibiliteit vanaf de eerste kleine batch.',
      },
      pairs: [
        {
          problem: 'De catalogi van fabrieken bevatten alleen standaardontwerpen die je niet kunt wijzigen.',
          solution: 'Wij produceren aangepaste planken met jouw vormen, opdruk en specificaties — van het eerste monster tot de volledige serieproductie.',
        },
        {
          problem: 'Hoge minimale afnames dwingen je tot voorraad voordat de markt gevalideerd is.',
          solution: 'Productie op maat in volume start vanaf 90–100+ stuks per ontwerp, terwijl pilot series op bestaande platforms starten vanaf 20–50 stuks — zo blijven eerste series klein terwijl de stukprijs eerlijk blijft.',
        },
        {
          problem: 'Je hebt geen eigen ontwerp- of engineeringteam.',
          solution: 'Ons interne ontwerp- en engineeringteam maakt van een idee, schets of referentieplank productieklare tekeningen.',
        },
        {
          problem: 'Onbekende fabriekskwaliteit en trage communicatie.',
          solution: 'Een projectspecialist begeleidt monsters, kwaliteitscontroles en levertijden van begin tot eind — één aanspreekpunt en duidelijke updates.',
        },
      ],
      steps: [
        { title: 'Dien je project in', body: 'Vermeld je eisen of stuur schetsen en referentiebeelden.' },
        { title: 'Ontwerp en monster', body: 'Wij ontwikkelen de tekeningen en sturen binnen 7–12 dagen een fysiek monster.' },
        { title: 'Goedkeuring en productie', body: 'Na jouw goedkeuring duurt de productie 25–35 dagen met kwaliteitscontrole op meerdere punten.' },
        { title: 'Levering en nabestelling', body: 'Wereldwijde export met professionele verpakking, plus ondersteuning bij nabestellingen met constante kwaliteit.' },
      ],
      caseStudy: {
        title: 'Productuitbreiding van een outdoormerk',
        body: 'Een outdoormerk stapte met een touringplank onder de eigen naam de paddlewereld in. Wij ontwikkelden de plank op basis van een ruwe schets, bereikten in 15 dagen goedkeuring van het monster en produceerden de eerste serie in 25–35 dagen.',
        tags: ['Plankontwikkeling', 'Opdruk met jouw merk', 'Eerste serieproductie'],
      },
      faqs: [
        {
          q: 'Kunnen jullie een SUP-product ontwikkelen op basis van mijn idee?',
          a: 'Ja. Wij helpen je bij het beoordelen van je eisen en het ontwikkelen van een productieklaar resultaat — van concept en tekeningen tot een fysiek monster.',
        },
        {
          q: 'Kan ik de opdruk en kleuren van de SUP personaliseren?',
          a: 'Ja. Aangepaste opdruk, kleuren en branding-elementen kunnen worden ontwikkeld volgens de eisen van het project.',
        },
        {
          q: 'Wat is de minimale afname voor aangepaste SUP-productie?',
          a: 'Productie op maat in volume start vanaf 90–100+ stuks per ontwerp, met pilot series van 20–50 stuks op bestaande platforms. Grotere hoeveelheden leveren een betere stukprijs op, en nabestellingen behouden jouw matrijzen en ontwerpen.',
        },
        {
          q: 'Wat kan er aan een plank worden gepersonaliseerd?',
          a: 'Vorm en afmetingen, constructie en materialen, opdruk en logo\'s, de indeling van de EVA-pad, accessoires (peddel, pomp, tas) en verpakking.',
        },
        {
          q: 'Sturen jullie monsters voordat de productie begint?',
          a: 'Ja: vóór elke serie wordt een fysiek monster geproduceerd en goedgekeurd. De monstertijd is doorgaans 7–12 dagen.',
        },
        {
          q: 'Kunnen jullie alleen met mijn merkassets werken, zonder volledig designteam?',
          a: 'Ja. Ons designteam ontwikkelt productieklaar artwork op basis van je logo, je merkkeuren of een ruw concept.',
        },
      ],
      ctaLevel: 'hot',
      ctaLabel: 'Bespreek je aangepaste SUP-project',
    },
    {
      slug: 'private-label-sup',
      navLabel: 'Paddle boards onder privaat label',
      metaTitle: 'SUP-productie onder privaat label | Aangepaste SUP-productie',
      metaDescription:
        'iSupfactory ondersteunt SUP-productie onder privaat label voor bestaande merken en helpt bij het ontwikkelen van aangepaste SUP-producten, van specificatie tot productie.',
      kicker: 'Paddle boards onder privaat label',
      serviceType: 'SUP-productie onder privaat label',
      answer:
        'Private label plaatst jouw merk op bewezen, productieklaar SUP-platforms zonder nieuwe matrijzen. Kies een basismodel, breng je logo, kleuren, verpakking en accessoires aan en bestel vanaf 90–100+ stuks per rol van 150 m (volume). Dit is de snelste en minst risicovolle manier om te starten; monsters duren 7–12 dagen en productie 25–35 dagen na de PO.',
      h1: 'SUP-productie onder privaat label voor jouw merk',
      intro: [
        'Private-label productie stelt je in staat een lijn paddle boards onder je eigen merk te lanceren zonder te investeren in matrijzen of een fabriek. Logo, kleuren en verpakking worden toegepast op kwalitatief gecertificeerde platforms, met hoeveelheden die meegroeien met de vraag.',
        'Wij regelen de productkant, zodat jij je op het merk kunt richten: ontwerp, verpakking en het beheer van nabestellingen nemen wij voor onze rekening.',
      ],
      scenario: {
        title: 'Je hebt een merk — en je hebt een product nodig dat het vertegenwoordigt',
        body: 'Een merkidentiteit zonder voorraad. Je wilt een verkoopbare lijn paddle boards onder jouw naam, in een hoeveelheid die past bij jouw fase — van de eerste validatiebatch tot terugkerende vloten.',
      },
      pairs: [
        {
          problem: 'Branding alleen als sticker — het product blijft er generiek uitzien.',
          solution: 'Volledige merkintegratie: opdruk op de plank, logo, indeling van de EVA-pad, peddel met jouw merk, pomp, tas en verpakking.',
        },
        {
          problem: 'Eerste bestellingen dwingen je om honderden stuks te kopen die je misschien niet verkoopt.',
          solution: 'Start met een pilotbatch van 20–50 stuks op een standaard platform en schaal daarna op naar standaard productie in volume vanaf 90–100+ stuks — valideer de markt vóór grote bestellingen.',
        },
        {
          problem: 'Het opzetten van ontwerp en verpakking lijkt buiten je bereik.',
          solution: 'Ons designteam zet jouw merkassets om in productieklaar artwork voor de plank en de verpakking.',
        },
        {
          problem: 'Nabestellingen wisselen in kwaliteit of beschikbaarheid.',
          solution: 'De matrijzen en ontwerpen blijven van jou, en nabestellingen worden geproduceerd op dezelfde gecertificeerde platforms met constante kwaliteit.',
        },
      ],
      steps: [
        { title: 'Deel je merk', body: 'Stuur je logo, jouw kleuren en bestaande merkassets.' },
        { title: 'Ontwikkel de opdruk', body: 'Wij ontwerpen de opdruk van de plank, de EVA-indeling en de verpakking rondom jouw merk.' },
        { title: 'Goedkeuring van het monster', body: 'Een fysiek monster bevestigt kleuren, afwerking en verpakking.' },
        { title: 'Productie en levering', body: 'De productie volgt jouw hoeveelheden, met kwaliteitscontrole en export volledig door ons beheerd.' },
      ],
      caseStudy: {
        title: 'Nieuw merk, eerste productiebestelling',
        body: 'Een sportretailer lanceerde een lijn paddle boards onder eigen naam, uitgaande van alleen een logo. Wij ontwikkelden al het artwork voor plank en verpakking, produceerden een eerste serie van 50 stuks voor de markttest en schaalden binnen één seizoen op naar een volledige productiebestelling.',
        tags: ['Merkontwikkeling', 'Verpakkingsontwerp', 'Opschaling van productie'],
      },
      faqs: [
        {
          q: 'Wat is SUP-productie onder privaat label?',
          a: 'SUP-productie onder privaat label stelt bedrijven in staat SUP-producten onder hun eigen merk te verkopen, met aangepaste specificaties en productieondersteuning.',
        },
        {
          q: 'Kunnen bestaande merken nieuwe SUP-producten ontwikkelen?',
          a: 'Ja. iSupfactory ondersteunt merken die het SUP-segment willen betreden — productselectie, aanpassing van specificaties, aangepaste opdruk en productie.',
        },
        {
          q: 'Wat omvat een SUP-private-labelprogramma?',
          a: 'Jouw merk op de plank zelf — opdruk, logo, EVA-pad — plus optioneel peddel, pomp, rugtas en verpakking met jouw merk: een compleet verkoopbaar product onder jouw naam.',
        },
        {
          q: 'Kan het ontwerp tussen bestellingen worden gewijzigd?',
          a: 'Ja. Zodra de merkassets productieklaar zijn, kunnen nabestellingen op elk moment de opdruk, kleuren of verpakking bijwerken.',
        },
        {
          q: 'We hebben alleen een logo. Kunnen jullie ons toch helpen?',
          a: 'Ja. Ons designteam ontwikkelt al het artwork voor plank en verpakking op basis van je logo en je merkkeuren.',
        },
      ],
      ctaLevel: 'warm',
      ctaLabel: 'Bespreek je private-labelproject',
    },
    {
      slug: 'resort-sup',
      navLabel: 'Paddle boards voor resorts',
      metaTitle: 'SUP-materiaal voor resorts | Planken met jouw merk',
      metaDescription:
        'Ontwerp aangepast SUP-materiaal voor resorts en hotels met planken onder jouw merk, accessoires en productieondersteuning van iSupfactory.',
      kicker: 'Paddle boards voor resorts',
      serviceType: 'SUP-materiaal voor resorts en hotels',
      answer:
        'Wij leveren opblaasbare SUPs met jouw merk voor resorts en hotels, ontworpen voor dagelijks gebruik door gasten: drop-stitch constructie onder hoge druk, versterkte naden en oplopende MOQ\'s van 20–50 pilotstuks tot 90–100+ voor de uitrol van vloten. De planken dragen jouw logo en kleuren, en wij adviseren over opslag, onderhoud en het plannen van nabestellingen.',
      h1: 'Aangepaste SUP-oplossingen voor resorts en hotels',
      intro: [
        'Paddle-boardvloten in een resort moeten dagelijks gastgebruik aankunnen, tussen de seizoenen eenvoudig op te slaan zijn en jouw merk dragen. Wij bouwen duurzame, gastvriendelijke planken in jouw kleuren en structureren het vlootprogramma rondom jouw activiteiten.',
        'Hoeveelheden worden bepaald op basis van daadwerkelijk gebruik, niet op basis van giswerk — en nabestelprogramma\'s houden de vloot seizoen na seizoen actueel.',
      ],
      scenario: {
        title: 'Je organiseert wateractiviteiten voor gasten',
        body: 'Gasten verwachten een onvergetelijke waterervaring en het materiaal vertegenwoordigt jouw vestiging. Je hebt planken nodig die robuust genoeg zijn voor dagelijkse verhuur, eenvoudig op te slaan en passend bij de uitstraling van het resort.',
      },
      pairs: [
        {
          problem: 'Gastenvloten slijten snel bij dagelijkse verhuur.',
          solution: 'Robuuste constructie voor verhuur met versterkte rails en uv-bestendige materialen, ontworpen voor herhaald gebruik.',
        },
        {
          problem: 'De opslagruimte buiten het seizoen is beperkt.',
          solution: 'Opslagvriendelijke opblaasbare opties die aan het einde van het seizoen in een kast passen.',
        },
        {
          problem: 'Het materiaal ziet er generiek uit en vertegenwoordigt jouw vestiging niet.',
          solution: 'Full-deck opdruk, logo\'s en EVA-branding in de kleuren van jouw resort — inclusief accessoires met jouw merk.',
        },
        {
          problem: 'Vervanging en vernieuwing van de vloot verlopen ongecoördineerd.',
          solution: 'Een nabestelprogramma voor de vloot met constante kwaliteit, ondersteuning voor reserveonderdelen en eerlijk advies over hoeveelheden.',
        },
      ],
      steps: [
        { title: 'Beschrijf je activiteiten', body: 'Gastenvolume, kuststrook, opslag en duur van het seizoen.' },
        { title: 'Ontvang een vlootplan', body: 'Wij adviseren over planktypen en hoeveelheden op basis van gebruikspatronen.' },
        { title: 'Goedkeuring van het brandmonster', body: 'Jouw kleuren en logo bevestigd op een fysieke plank.' },
        { title: 'Ontvangst en onderhoud', body: 'Levering, reserveonderdelen en een nabestelprogramma voor komende seizoenen.' },
      ],
      caseStudy: {
        title: 'Gastenvloot van een kustresort',
        body: 'Een kustresort voorzag zijn strandprogramma van 40 opblaasbare planken in resortkleuren, inclusief peddels en pompen met het resortmerk. Buiten het seizoen passen de planken in één kast en na het tweede seizoen werd de vloot vernieuwd met constante kwaliteit.',
        tags: ['Gastenvloot met jouw merk', 'Opslag van opblaasbare planken', 'Seizoensvernieuwing'],
      },
      faqs: [
        {
          q: 'Kunnen resorts het SUP-materiaal met hun logo personaliseren?',
          a: 'Ja. Resorts kunnen opdruk, kleuren en accessoires personaliseren volgens de eisen van het project — full-deck branding in de kleuren van jouw vestiging.',
        },
        {
          q: 'Kunnen jullie meerdere SUP\'s leveren voor de activiteiten van een resort?',
          a: 'Ja. Wij kunnen productieoplossingen ontwikkelen op basis van de vlootbehoeften — van een startvloot tot seizoensgebonden vernieuwingsprogramma\'s.',
        },
        {
          q: 'Hoeveel planken heeft een resort nodig?',
          a: 'De meeste resorts starten met 20–50 planken en schalen op naar behoefte. Wij adviseren over hoeveelheden op basis van je gastenvolume en kuststrook, niet op basis van giswerk.',
        },
        {
          q: 'Zijn opblaasbare planken geschikt voor gebruik in een resort?',
          a: 'Ja. Moderne opblaasbare SUP\'s zijn zeer duurzaam en veel eenvoudiger op te slaan en te vervoeren: de populaire keuze voor resorts met beperkte opslagruimte.',
        },
        {
          q: 'Kan de vloot ons logo en onze kleuren dragen?',
          a: 'Ja: full-deck opdruk, logoprint, branding van de EVA-pad en accessoires met jouw merk maken allemaal deel uit van het resortprogramma.',
        },
      ],
      ctaLevel: 'warm',
      ctaLabel: 'Vraag een SUP-oplossing voor je resort aan',
    },
    {
      slug: 'club-sup',
      navLabel: 'Aangepaste teamplanken voor clubs',
      metaTitle: 'SUP-materiaal voor clubs en teams',
      metaDescription:
        'iSupfactory biedt aangepaste SUP-materiaaloplossingen voor clubs, teams en evenementen — inclusief opdruk, specificaties en productieondersteuning.',
      kicker: 'Aangepaste teamplanken voor clubs',
      serviceType: 'SUP-materiaal voor clubs en teams',
      answer:
        'Clubs en teams krijgen duurzame, consistente vloten in hun kleuren: logoplaatsing, aangepaste peddellengtes en accessoirepakketten op één gestandaardiseerde plankspecificatie, zodat reparaties en reserveonderdelen ook bij nabestellingen eenvoudig blijven. De MOQ start bij 90–100+ stuks (volume); pilot series van 20–50 stuks zijn beschikbaar om de specificatie eerst te valideren.',
      h1: 'Aangepast SUP-materiaal voor clubs en teams',
      intro: [
        'Paddleclubs hebben planken nodig die dagelijkse training aankunnen, eruitzien als team en consistent blijven bij nabestellingen. Wij produceren aangepaste teamplanken met de naam en kleuren van jouw club tegen gunstige vlootvoorwaarden.',
        'Clubprogramma\'s omvatten ook de praktische kant: reserveonderdelen, reparatieadvies en ondersteuning bij nabestellingen met dezelfde kwaliteit.',
      ],
      scenario: {
        title: 'Jouw club organiseert trainingen en teamsessies',
        body: 'De planken worden dagelijks door leden gebruikt en vertegenwoordigen de club bij evenementen en regatta\'s. Je wilt duurzaam teammateriaal met de club branding, zonder zelf de relatie met een fabriek te beheren.',
      },
      pairs: [
        {
          problem: 'Trainingsplanken krijgen intensief en herhaald gebruik.',
          solution: 'Versterkte constructie voor dagelijks professioneel gebruik, met reparatieadvies en ondersteuning voor reserveonderdelen.',
        },
        {
          problem: 'Vloten zien er onsamenhangend uit en zonder branding.',
          solution: 'Naam, kleuren en logo van de club op elke plank, voor een uniforme teamvloot.',
        },
        {
          problem: 'Bij uitbreiding van de vloot moet je op zoek naar bijpassende voorraad.',
          solution: 'Nabestellingen worden geproduceerd op dezelfde gecertificeerde platforms, zodat nieuwe planken aansluiten op bestaande.',
        },
        {
          problem: 'De budgetten voor vloten zijn beperkt.',
          solution: 'Vlootprijzen en een vast aanspreekpunt voor nabestellingen, reserveonderdelen en onderhoudsvragen.',
        },
      ],
      steps: [
        { title: 'Vertel ons over de club', body: 'Aantal leden, soorten sessies en het huidige materiaal.' },
        { title: 'Kies de planktypen', body: 'Training-, beginner- en teamvormen die aansluiten bij jouw programma.' },
        { title: 'Voeg de club branding toe', body: 'Naam, kleuren en logo op planken en accessoires.' },
        { title: 'Bestel en groei', body: 'Vlootlevering, reserveonderdelen en consistente nabestellingen.' },
      ],
      caseStudy: {
        title: 'Vlootvernieuwing van een club',
        body: 'Een paddleclub vernieuwde haar uitstraling met 25 branded trainingsplanken en reserveonderdelen. Leden trainen op uniform materiaal en het volgende seizoen breidde de club de vloot uit met een identieke nabestelling.',
        tags: ['Club branding', 'Vlootvernieuwing', 'Ondersteuning voor reserveonderdelen'],
      },
      faqs: [
        {
          q: 'Kunnen SUP-clubs teamplanken personaliseren?',
          a: 'Ja. Clubs kunnen opdruk, kleuren en productconfiguraties personaliseren — naam, kleuren en logo van de club op elke plank.',
        },
        {
          q: 'Ondersteunen jullie SUP-productie rondom evenementen?',
          a: 'Ja. De productieplanning kan worden ontwikkeld volgens de eisen van het evenement, inclusief event-editieplanken en accessoires.',
        },
        {
          q: 'Welke planken zijn het meest geschikt voor training bij een club?',
          a: 'Stabiele, duurzame planken die passen bij het niveau van jouw leden — brede beginnervormen voor de lessen en touring-vormen voor duurtraining.',
        },
        {
          q: 'Bieden jullie vlootprijzen voor clubs?',
          a: 'Ja: volumekortingen voor clubvloten, met een vast aanspreekpunt voor nabestellingen, reserveonderdelen en onderhoudsvragen.',
        },
        {
          q: 'Kunnen beschadigde planken worden gerepareerd of vervangen?',
          a: 'Wij leveren reserveonderdelen, reparatieadvies en ondersteuning bij nabestellingen, zodat de vloot consistent blijft.',
        },
      ],
      ctaLevel: 'cold',
      ctaLabel: 'Bespreek je SUP-project voor je club',
    },
    {
      slug: 'school-sup',
      navLabel: 'SUP-programma voor scholen',
      metaTitle: 'SUP-materiaal voor scholen | Aangepaste paddle boards voor het onderwijs',
      metaDescription:
        'Veilige en betrouwbare SUP-materiaaloplossingen voor scholen, kampen en organisaties, met aangepaste productieondersteuning van iSupfactory.',
      kicker: 'SUP-programma voor scholen',
      serviceType: 'SUP-materiaal voor scholen en programma\'s',
      answer:
        'Voor scholen en onderwijsprogramma\'s leveren wij stabiele, beginnersvriendelijke planken met opgedrukte veiligheidsinstructies, gevoerde peddels en beschermende accessoires, afgestemd op jouw klassenomvang en opslagsituatie. De standaard volume batch is 90–100+ stuks per rol van 150 m, met pilot series van 20–50 stuks; levertijden volgen de inkoopcyclus van scholen.',
      h1: 'Veilige en betrouwbare SUP-oplossingen voor scholen en programma\'s',
      intro: [
        'Scholen pakken paddling anders aan: grote klassen, gemengde niveaus, strikte veiligheidseisen en onderwijsbudgetten. Ons schoolprogramma biedt stabiele, beginnersvriendelijke planken, pakketopties die aansluiten bij de klassenomvang en advies vanuit het perspectief van instructeurs.',
        'Levering in volume en ondersteuning bij nabestellingen houden het materiaal jaar na jaar beschikbaar voor nieuwe leerlingengroepen.',
      ],
      scenario: {
        title: 'Je geeft paddlingles aan studenten',
        body: 'De klassen zijn groot en de niveaus lopen uiteen. Je hebt stabiele, veilige planken nodig voor beginners, hoeveelheden die aansluiten bij de klassenomvang en een leveringsprogramma dat past bij het schoolbudget en de inkoopcyclus.',
      },
      pairs: [
        {
          problem: 'Studenten hebben maximale stabiliteit op het water nodig.',
          solution: 'Brede, volumineuze beginnersplanken en multi-persoonsplanken, ontworpen om beginners te vergeven.',
        },
        {
          problem: 'De klassenomvang vereist consistent materiaal op schaal.',
          solution: 'Programmaprijzen voor klasgrootte hoeveelheden, met identieke kwaliteit op elke plank.',
        },
        {
          problem: 'Instructeurs beheren de veiligheid met beperkte ondersteuning.',
          solution: 'De planken worden geleverd met duidelijke gebruiksaanwijzingen en wij adviseren je over hoeveelheden en opstelling voor jouw vaargebied.',
        },
        {
          problem: 'Het materiaal moet meerdere leerlingengroepen aankunnen.',
          solution: 'Versterkte constructie, plus reserveonderdelen en ondersteuning bij nabestellingen, voor een lange levensduur van het programma.',
        },
      ],
      steps: [
        { title: 'Deel je programma', body: 'Klassenomvang, vaargebied, instructeursorganisatie en begrotingscyclus.' },
        { title: 'Stel het pakket samen', body: 'Planktypen en hoeveelheden afgestemd op het onderwijs, niet op giswerk.' },
        { title: 'Goedkeuring van het monster', body: 'Controleer stabiliteit, constructie en afwerking op een fysieke plank.' },
        { title: 'Levering en vernieuwing', body: 'Levering in volume, reserveonderdelen en nabestellingen voor nieuwe groepen.' },
      ],
      caseStudy: {
        title: 'Schoolprogramma voor watersport',
        body: 'Een school lanceerde een keuzevak paddling met een vloot van 15 beginnersplanken en multi-persoonsplanken voor de eerste lessen. Instructeurs zagen al in de eerste sessie snellere vooruitgang dankzij de stabiele platforms, en het jaar daarop vernieuwde het programma het materiaal met een identieke nabestelling.',
        tags: ['Beginnervloot', 'Programmastart', 'Vernieuwingsbestellingen'],
      },
      faqs: [
        {
          q: 'Welk SUP-materiaal is geschikt voor scholen?',
          a: 'De keuze hangt af van de leeftijd van de gebruikers, de toepassingsomgeving en de programma-eisen — brede, stabiele planken zijn de standaardkeuze voor het onderwijs.',
        },
        {
          q: 'Kunnen scholen het SUP-materiaal personaliseren?',
          a: 'Ja. Scholen kunnen opdruk, kleuren en materiaalpakketten personaliseren volgens hun programma.',
        },
        {
          q: 'Welke planken zijn het meest geschikt voor SUP-lessen op school?',
          a: 'Brede, stabiele beginnersplanken en multi-persoonsplanken zijn ideaal: hun volume maakt ze vergevingsgezind voor beginners en stabiel met meerdere paddlers.',
        },
        {
          q: 'Kunnen de hoeveelheden worden afgestemd op onze klassenomvang?',
          a: 'Ja: de programmavoorwaarden zijn gebouwd op klasgrootte hoeveelheden en wij adviseren over aantallen op basis van je vaargebied en het rooster.',
        },
        {
          q: 'Werken jullie met de inkoopkalenders van scholen?',
          a: 'Ja. Wij plannen monstering- en productietermijnen rondom de begrotings- en seizoencycli van scholen.',
        },
      ],
      ctaLevel: 'cold',
      ctaLabel: 'Bespreek je SUP-programma voor je school',
    },
  ],
  sv: [
    {
      slug: 'custom-sup',
      navLabel: 'Skräddarsydd SUP-tillverkning',
      metaTitle: 'Utveckling av skräddarsydda SUP-produkter | Anpassade lösningar för SUP-brädor',
      metaDescription:
        'Utveckla skräddarsydda SUP-produkter med iSupfactory. Vi stödjer produktkrav, anpassning, prototyper och tillverkning för företag och organisationer.',
      kicker: 'Tillverkare av skräddarsydda SUP',
      serviceType: 'Utveckling av skräddarsydda SUP-produkter',
      answer:
        'Vi utvecklar skräddarsydda uppblåsbara SUPar, hårda brädor och tillbehör från dina krav — form, grafik, material och förpackning — genom konstruktion, prover och produktion. Skräddarsydda projekt startar vid 90–100+ st per 150 m rulle (volym); prover skickas inom 7–12 dagar och produktionen tar 25–35 dagar efter bekräftad order och deposition.',
      h1: 'Skräddarsydda SUP-produkter byggda kring dina krav',
      intro: [
        'Du behöver SUP-brädor byggda enligt din specifikation — form, grafik, material, förpackning — utan att själv driva en fabrik. Vi är tillverkningspartnern som tar dina krav och levererar en färdig produkt.',
        'Varje projekt hanteras av en dedikerad specialist som sköter design, prover, produktion och leverans, så att du alltid vet var din order står.',
      ],
      scenario: {
        title: 'Du behöver brädor byggda enligt din specifikation',
        body: 'Ett produktkrav — inte ett katalogval. Dina formpreferenser, din grafik, din kvalitetsnivå, din förpackning. Vi konstruerar, provar och producerar på beprövade plattformar, med flexibilitet från den första lilla serien.',
      },
      pairs: [
        {
          problem: 'Fabrikens kataloger erbjuder bara standarddesigns som du inte kan ändra.',
          solution: 'Vi producerar skräddarsydda brädor med dina former, din grafik och dina specifikationer — från första prov till full produktionsserie.',
        },
        {
          problem: 'Stora minimikvantiteter låser in dig i lager innan marknaden är validerad.',
          solution: 'Skräddarsydd volymproduktion startar från 90–100+ st per design, medan pilotserier på befintliga plattformar startar från 20–50 st — första serierna hålls små samtidigt som enhetspriset förblir rimligt.',
        },
        {
          problem: 'Du har inget design- eller konstruktionsteam på din sida.',
          solution: 'Vårt interna design- och konstruktionsteam förvandlar en idé, skiss eller referensbräda till produktionsfärdiga ritningar.',
        },
        {
          problem: 'Okänd fabrikskvalitet och långsam kommunikation.',
          solution: 'En projektspecialist ansvarar för prover, kvalitetskontrollmilstolpar och leveranstider från början till slut — en kontaktpunkt, tydliga uppdateringar.',
        },
      ],
      steps: [
        { title: 'Skicka in ditt projekt', body: 'Berätta om dina krav, eller dela skisser och referensbilder.' },
        { title: 'Design & prov', body: 'Vi tar fram ritningar och skickar ett fysiskt prov inom 7–12 dagar.' },
        { title: 'Godkänn & producera', body: 'Efter ditt godkännande tar produktionen 25–35 dagar med kvalitetskontroll på flera punkter.' },
        { title: 'Leverera & beställ om', body: 'Världsomspännande export med professionell packning, plus ombeställningsstöd med jämn kvalitet.' },
      ],
      caseStudy: {
        title: 'Varumärkesutvidgning för outdoor-varumärke',
        body: 'Ett outdoor-varumärke satsade på paddelsport med en märkt touringbräda. Vi utvecklade brädan från en grov skiss, nådde provgodkännande på 15 dagar och producerade den första serien på 25–35 dagar.',
        tags: ['Brädutveckling', 'Varumärkesgrafik', 'Första produktionsserien'],
      },
      faqs: [
        {
          q: 'Kan ni utveckla en SUP-produkt från min idé?',
          a: 'Ja. Vi hjälper dig utvärdera kraven och utveckla en produktionsfärdig lösning — från koncept och ritningar till ett fysiskt prov.',
        },
        {
          q: 'Kan jag anpassa SUP-grafik och färger?',
          a: 'Ja. Anpassad grafik, färger och varumärkeselement kan utvecklas enligt projektets krav.',
        },
        {
          q: 'Vad är minimikvantiteten för skräddarsydd SUP-tillverkning?',
          a: 'Skräddarsydd volymproduktion startar från 90–100+ st per design, med pilotserier från 20–50 st på befintliga plattformar. Större kvantiteter ger bättre enhetspris, och ombeställningar behåller dina verktyg och designer.',
        },
        {
          q: 'Vad kan anpassas på en bräda?',
          a: 'Form och mått, konstruktion och material, grafik och logotyper, EVA-padlayout, tillbehör (paddel, pump, väska) och förpackning.',
        },
        {
          q: 'Tillhandahåller ni prover före produktion?',
          a: 'Ja — ett fysiskt prov tas fram och godkänns före varje produktionsserie. Provtiden är vanligtvis 7–12 dagar.',
        },
        {
          q: 'Kan ni hantera bara mina varumärkestillgångar, utan ett komplett designteam?',
          a: 'Ja. Vårt designteam utvecklar produktionsfärdig grafik från din logotyp, dina varumärkesfärger eller en grov konceptidé.',
        },
      ],
      ctaLevel: 'hot',
      ctaLabel: 'Diskutera ditt skräddarsydda SUP-projekt',
    },
    {
      slug: 'private-label-sup',
      navLabel: 'Privatmärkta SUP-brädor',
      metaTitle: 'Private label-tillverkning av SUP | Skräddarsydd SUP-produktion',
      metaDescription:
        'iSupfactory erbjuder stöd för private label-tillverkning av SUP för befintliga varumärken och hjälper till att utveckla skräddarsydda SUP-produkter från specifikation till produktion.',
      kicker: 'Privatmärkta SUP-brädor',
      serviceType: 'Private label-tillverkning av SUP',
      answer:
        'Private label sätter ditt varumärke på beprövade, produktionsfärdiga SUP-plattformar utan nya verktyg. Välj en basmodell, lägg på din logotyp, dina färger, förpackning och tillbehör och beställ från 90–100+ st per 150 m rulle (volym). Det är det snabbaste och säkraste sättet att lansera; prover tar 7–12 dagar och produktionen 25–35 dagar efter order.',
      h1: 'Private label-tillverkningsstöd för SUP åt ditt varumärke',
      intro: [
        'Private label-produktion låter dig lansera en SUP-brädlinje under ditt eget varumärke utan att investera i verktyg eller en fabrik. Din logotyp, dina färger och din förpackning läggs på kvalitetskontrollerade plattformar, med kvantiteter som växer med efterfrågan.',
        'Vi sköter produktsidan så att du kan fokusera på varumärkessidan: design, förpackning och ombeställningshantering sköts av oss.',
      ],
      scenario: {
        title: 'Du har ett varumärke — och behöver en produkt under det',
        body: 'En varumärkesidentitet utan lager. Du vill ha en säljbar SUP-brädlinje med ditt namn, i en kvantitet som matchar din fas — från en första valideringssats till återkommande flottor.',
      },
      pairs: [
        {
          problem: 'Varumärket lever bara på en etikett — produkten ser fortfarande generisk ut.',
          solution: 'Full varumärkesintegrering: brädgrafik, logotyp, EVA-padlayout, märkt paddel, pump, väska och förpackning.',
        },
        {
          problem: 'Första ordern tvingar dig att köpa hundratals enheter du kanske inte säljer.',
          solution: 'Börja med en pilotsats på 20–50 enheter på en standardplattform och skala sedan upp till en standardvolymserie från 90–100+ st — validera marknaden före stora satser.',
        },
        {
          problem: 'Utveckling av design och förpackning känns ouppnåelig.',
          solution: 'Dina varumärkestillgångar förvandlas till produktionsfärdig bräd- och förpackningsgrafik av vårt designteam.',
        },
        {
          problem: 'Ombeställningar tappar i kvalitet eller tillgänglighet.',
          solution: 'Verktyg och designer förblir dina, och ombeställningar körs på samma verifierade plattformar med jämn kvalitet.',
        },
      ],
      steps: [
        { title: 'Dela ditt varumärke', body: 'Skicka din logotyp, dina färger och eventuella befintliga varumärkestillgångar.' },
        { title: 'Utveckla grafiken', body: 'Vi designar brädgrafik, EVA-layout och förpackning kring ditt varumärke.' },
        { title: 'Godkänn provet', body: 'Ett fysiskt prov bekräftar färger, finish och förpackning.' },
        { title: 'Producera & leverera', body: 'Produktionen körs i din kvantitet, med kvalitetskontroll och export skött från början till slut.' },
      ],
      caseStudy: {
        title: 'Nytt varumärke, första produktionsorder',
        body: 'En sportåterförsäljare lanserade sin egen SUP-brädlinje utifrån bara en logotyp. Vi utvecklade hela bräd- och förpackningsgrafiken, producerade en första serie på 50 st för marknadstest och skalerade sedan upp till en full produktionsorder inom en säsong.',
        tags: ['Varumärkesutveckling', 'Förpackningsdesign', 'Skalad produktion'],
      },
      faqs: [
        {
          q: 'Vad är private label-tillverkning av SUP?',
          a: 'Private label-tillverkning av SUP gör det möjligt för företag att sälja SUP-produkter under eget varumärke med anpassade specifikationer och produktionsstöd.',
        },
        {
          q: 'Kan befintliga varumärken utveckla nya SUP-produkter?',
          a: 'Ja. iSupfactory stödjer varumärken som vill expandera till SUP-produkter — produktval, specifikationsjustering, anpassad grafik och tillverkning.',
        },
        {
          q: 'Vad ingår i ett private label SUP-program?',
          a: 'Ditt varumärke på själva brädan — grafik, logotyp, EVA-pad — plus valfria märkta paddel, pump, ryggsäck och förpackning: en komplett säljbar produkt under ditt namn.',
        },
        {
          q: 'Kan designen ändras mellan beställningar?',
          a: 'Ja. När varumärkestillgångarna är produktionsfärdiga kan ombeställningar uppdatera grafik, färger eller förpackning när som helst.',
        },
        {
          q: 'Vi har bara en logotyp. Kan ni ändå hjälpa oss?',
          a: 'Ja. Vårt designteam utvecklar hela bräd- och förpackningsgrafiken utifrån din logotyp och dina varumärkesfärger.',
        },
      ],
      ctaLevel: 'warm',
      ctaLabel: 'Diskutera ditt private label-projekt',
    },
    {
      slug: 'resort-sup',
      navLabel: 'Resort SUP-brädor',
      metaTitle: 'Anpassad SUP-utrustning för resorter | Märkta brädor',
      metaDescription:
        'Skapa anpassad SUP-utrustning för resorter och hotell med märkta brädor, tillbehör och produktionsstöd från iSupfactory.',
      kicker: 'Resort SUP-brädor',
      serviceType: 'SUP-utrustning för resorter och hotell',
      answer:
        'Vi levererar märkta uppblåsbara SUPar till resorter och hotell, byggda för daglig gästanvändning: högtryckskonstruktion i drop-stitch, förstärkta sömmar och stegade minimikvantiteter från 20–50 pilotenheter upp till 90–100+ för flottutrullning. Brädorna bär din logotyp och dina färger, och vi ger råd om förvaring, underhåll och ombeställningsplaner.',
      h1: 'Anpassade SUP-utrustningslösningar för resorter och hotell',
      intro: [
        'Resortflottor av SUP-brädor måste klara daglig gästanvändning, förvaras enkelt mellan säsongerna och bära ditt varumärke. Vi bygger hållbara, gästvänliga brädor i dina färger och utformar flottprogrammet kring din verksamhet.',
        'Kvantiteter rekommenderas utifrån användningsmönster, inte gissningar — och ombeställningsprogram håller flottan fräsch säsong efter säsong.',
      ],
      scenario: {
        title: 'Du driver vattenaktiviteter för gäster',
        body: 'Gäster förväntar sig en minnesvärd vattenupplevelse, och utrustningen representerar din anläggning. Du behöver brädor som är hållbara nog för daglig uthyrning, lätta att förvara och märkta så att de matchar resorten.',
      },
      pairs: [
        {
          problem: 'Gästflottor slits snabbt vid daglig uthyrning.',
          solution: 'Konstruktion i uthyrningsklass med förstärkta fat och UV-beständiga material byggda för upprepade pass.',
        },
        {
          problem: 'Förvaringsutrymmet är begränsat utanför säsongen.',
          solution: 'Uppblåsbara alternativ som är lätta att förvara och som packas i ett skåp när säsongen är slut.',
        },
        {
          problem: 'Utrustningen ser generisk ut, inte som din anläggning.',
          solution: 'Helbrädesgrafik, logotyper och EVA-märkning i dina resortfärger — inklusive märkta tillbehör.',
        },
        {
          problem: 'Att byta ut och fräscha upp flottan är okoordinerat.',
          solution: 'Ett ombeställningsprogram för flottan med jämn kvalitet, reservdelsstöd och ärlig kvantitetsvägledning.',
        },
      ],
      steps: [
        { title: 'Beskriv din verksamhet', body: 'Gästvolym, strandlinje, förvaring och säsongslängd.' },
        { title: 'Få en flottplan', body: 'Vi rekommenderar brädtyper och kvantiteter utifrån användningsmönster.' },
        { title: 'Godkänn märkt prov', body: 'Dina färger och din logotyp bekräftade på en fysisk bräda.' },
        { title: 'Ta emot och underhåll', body: 'Leverans, reservdelar och ett ombeställningsprogram för kommande säsonger.' },
      ],
      caseStudy: {
        title: 'Gästflotta på kustresort',
        body: 'En kustresort utrustade sitt strandprogram med 40 märkta uppblåsbara brädor i resortfärger, inklusive märkta paddlar och pumpar. Brädorna förvaras i ett enda skåp utanför säsongen, och flottan fräschades upp efter andra säsongen med jämn kvalitet.',
        tags: ['Märkt gästflotta', 'Uppblåsbar förvaring', 'Säsongsförnyelse'],
      },
      faqs: [
        {
          q: 'Kan resorter anpassa SUP-utrustning med sin logotyp?',
          a: 'Ja. Resorter kan anpassa grafik, färger och tillbehör enligt projektkraven — märkning på hela brädan i anläggningens färger.',
        },
        {
          q: 'Kan ni leverera flera SUP-enheter för resortverksamhet?',
          a: 'Ja. Produktionslösningar kan utvecklas utifrån flottbehov, från en startflotta till säsongsvisa förnyelseprogram.',
        },
        {
          q: 'Hur många brädor behöver en resort?',
          a: 'De flesta resorter börjar med 20–50 brädor och skalerar med efterfrågan. Vi rekommenderar kvantiteter utifrån din gästvolym och strandlinje, inte gissningar.',
        },
        {
          q: 'Är uppblåsbara brädor lämpliga för resortanvändning?',
          a: 'Ja. Moderna uppblåsbara SUP-brädor är extremt hållbara och mycket lättare att förvara och transportera — det populära valet för resorter med begränsat förvaringsutrymme.',
        },
        {
          q: 'Kan flottan bära vår logotyp och våra färger?',
          a: 'Ja — helbrädesgrafik, logotypstryck, EVA-padmärkning och märkta tillbehör ingår alla i resortprogrammet.',
        },
      ],
      ctaLevel: 'warm',
      ctaLabel: 'Begär en SUP-lösning för din resort',
    },
    {
      slug: 'club-sup',
      navLabel: 'Anpassade SUP-teambrädor',
      metaTitle: 'Anpassad SUP-utrustning för klubbar och lag',
      metaDescription:
        'iSupfactory erbjuder anpassade SUP-utrustningslösningar för klubbar, lag och evenemang, inklusive grafik, specifikationer och produktionsstöd.',
      kicker: 'Anpassade SUP-teambrädor',
      serviceType: 'SUP-utrustning för klubbar och lag',
      answer:
        'Klubbar och lag får hållbara, enhetliga flottor i sina färger: logoplacering, anpassade paddellängder och tillbehörspaket på en standardiserad brädspecifikation, så att reparationer och reservdelar förblir enkla över ombeställningar. Minimikvantiteten startar vid 90–100+ st (volym); pilotserier från 20–50 enheter finns för att först validera specifikationen.',
      h1: 'Anpassad SUP-utrustning för klubbar och lag',
      intro: [
        'Paddlingsklubbar behöver brädor som klarar daglig träning, ser ut som laget och håller jämn kvalitet över ombeställningar. Vi producerar anpassade lagbrädor med ditt klubbnamn och dina färger, till förmånliga flottpriser.',
        'Klubbprogrammen inkluderar också den praktiska sidan: reservdelar, reparationsvägledning och ombeställningsstöd med samma kvalitet.',
      ],
      scenario: {
        title: 'Din klubb driver träning och lagsessioner',
        body: 'Brädorna används av medlemmarna dagligen och representerar klubben vid evenemang och regattor. Du vill ha hållbar lagutrustning med klubbmärkning, utan att själv hantera fabriksrelationer.',
      },
      pairs: [
        {
          problem: 'Träningsbrädor utsätts för tungt, upprepat bruk.',
          solution: 'Förstärkt konstruktion byggd för daglig professionell användning, med reparationsvägledning och reservdelsstöd.',
        },
        {
          problem: 'Flottor ser oenhetliga ut och saknar märkning.',
          solution: 'Klubbnamn, färger och logotyp tryckta på varje bräda för en enhetlig lagflotta.',
        },
        {
          problem: 'Att växa flottan innebär att leta efter matchande lager.',
          solution: 'Ombeställningar körs på samma verifierade plattformar, så nya brädor matchar de befintliga.',
        },
        {
          problem: 'Flottbudgetarna är strama.',
          solution: 'Flottpriser och en dedikerad kontakt för ombeställningar, delar och underhållsfrågor.',
        },
      ],
      steps: [
        { title: 'Berätta om klubben', body: 'Antal medlemmar, sessionstyper och nuvarande utrustning.' },
        { title: 'Välj brädtyper', body: 'Tränings-, nybörjar- och lagformer matchade till ditt program.' },
        { title: 'Lägg till klubbmärkning', body: 'Ditt namn, dina färger och din logotyp på brädor och tillbehör.' },
        { title: 'Beställ & väx', body: 'Flottleverans, reservdelar och jämna ombeställningar.' },
      ],
      caseStudy: {
        title: 'Klubbflotta förnyad',
        body: 'En paddlingsklubb lanserade en ny profil och fräschade upp sin flotta med 25 märkta träningsbrädor och reservdelar. Medlemmarna tränar på matchande utrustning, och klubben utökade flottan nästa säsong med en identisk ombeställning.',
        tags: ['Klubbmärkning', 'Flottförnyelse', 'Reservdelsstöd'],
      },
      faqs: [
        {
          q: 'Kan SUP-klubbar anpassa lagbrädor?',
          a: 'Ja. Klubbar kan anpassa grafik, färger och produktkonfigurationer — klubbnamn, färger och logotyp på varje bräda.',
        },
        {
          q: 'Kan ni stödja evenemangsbaserad SUP-produktion?',
          a: 'Ja. Produktionsplanering kan utvecklas enligt evenemangets krav, inklusive evenemangsupplagor av brädor och tillbehör.',
        },
        {
          q: 'Vilka brädor är bäst för klubbträning?',
          a: 'Stabila, hållbara brädor anpassade till dina medlemmars nivå — breda nybörjarformer för lektioner, touringformer för distansträning.',
        },
        {
          q: 'Erbjuder ni flottpriser för klubbar?',
          a: 'Ja — volympriser gäller för klubbflottor, med en dedikerad kontakt för ombeställningar, delar och underhållsfrågor.',
        },
        {
          q: 'Kan skadade brädor repareras eller ersättas?',
          a: 'Vi tillhandahåller reservdelar, reparationsvägledning och ombeställningsstöd så att flottan håller sig enhetlig.',
        },
      ],
      ctaLevel: 'cold',
      ctaLabel: 'Diskutera ditt klubb-SUP-projekt',
    },
    {
      slug: 'school-sup',
      navLabel: 'Skolprogram för SUP-brädor',
      metaTitle: 'SUP-utrustning för skolor | Anpassade SUP-brädor för utbildning',
      metaDescription:
        'Tillhandahåll säkra och tillförlitliga SUP-utrustningslösningar för skolor, läger och organisationer med anpassat produktionsstöd från iSupfactory.',
      kicker: 'Skolprogram för SUP-brädor',
      serviceType: 'SUP-utrustning för skolor och program',
      answer:
        'För skolor och utbildningsprogram levererar vi stabila, nybörjarvänliga brädor med tryckt säkerhetsvägledning, vadderade paddlar och skyddande tillbehör, anpassade till ditt klassantal och din förvaringslösning. Standardvolymsats är 90–100+ st per 150 m rulle med pilotserier från 20–50 enheter; leveranstiderna stödjer skolans upphandlingscykel.',
      h1: 'Säkra och tillförlitliga SUP-lösningar för skolor och program',
      intro: [
        'Skolorna bedriver paddelsport på ett annat sätt: stora klasser, blandade nivåer, strikta säkerhetskrav och utbildningsbudgetar. Vårt skolprogram erbjuder stabila, nybörjarvänliga brädor, paketalternativ som passar klassstorlekarna och vägledning ur ett instruktörsperspektiv.',
        'Bulkleverans och ombeställningsstöd håller utrustningen tillgänglig år efter år för nya elevkullar.',
      ],
      scenario: {
        title: 'Du undervisar i paddelsport för studenter',
        body: 'Klasserna är stora och nivåerna varierar. Du behöver brädor som är stabila och säkra för nybörjare, kvantiteter som matchar klassstorlekarna och ett utrustningsprogram som passar en skolas budget och upphandlingscykel.',
      },
      pairs: [
        {
          problem: 'Eleverna behöver maximal stabilitet på vattnet.',
          solution: 'Breda, högvolymiga nybörjarbrädor och flerpersonsbrädor utformade för att vara förlåtande för nybörjare.',
        },
        {
          problem: 'Klassstorlekar kräver enhetlig utrustning i stor skala.',
          solution: 'Bulkprogramspriser för klasskvantiteter, med samma kvalitet på varje bräda.',
        },
        {
          problem: 'Instruktörer hanterar säkerhet med begränsad hjälp.',
          solution: 'Brädorna levereras med tydlig användarvägledning, och vi rådger om kvantiteter och upplägg för ditt vattenområde.',
        },
        {
          problem: 'Utrustningen måste klara många elevkullar.',
          solution: 'Förstärkt konstruktion plus reservdelar och ombeställningsstöd för lång programlivslängd.',
        },
      ],
      steps: [
        { title: 'Dela ditt program', body: 'Klassstorlekar, vattenområde, instruktörsupplägg och budgetcykel.' },
        { title: 'Bygg paketet', body: 'Brädtyper och kvantiteter matchade till undervisningen, inte gissningar.' },
        { title: 'Godkänn provet', body: 'Verifiera stabilitet, konstruktion och finish på en fysisk bräda.' },
        { title: 'Leverera & förnya', body: 'Bulkleverans, reservdelar och ombeställningar för nya kullar.' },
      ],
      caseStudy: {
        title: 'Skolidrottsprogram för vattensporter',
        body: 'En skola lanserade en paddelsportvalbar kurs med en nybörjarflotta på 15 brädor och flerpersonsbrädor för första lektionerna. Instruktörerna rapporterade snabbare framsteg under första passet på de stabila plattformarna, och programmet förnyade utrustningen med en matchande ombeställning året därpå.',
        tags: ['Nybörjarflotta', 'Programlansering', 'Förnyelseombeställningar'],
      },
      faqs: [
        {
          q: 'Vilken SUP-utrustning är lämplig för skolor?',
          a: 'Valet av SUP-utrustning beror på användarnas ålder, användningsmiljö och programkrav — breda, stabila brädor är standardvalet för undervisning.',
        },
        {
          q: 'Kan skolor anpassa SUP-utrustning?',
          a: 'Ja. Skolor kan anpassa grafik, färger och utrustningspaket enligt sitt program.',
        },
        {
          q: 'Vilka brädor är bäst för skolSUP-lektioner?',
          a: 'Breda, stabila nybörjarbrädor och flerpersonsbrädor är idealiska — deras volym gör dem förlåtande för nybörjare och stabila med flera paddlare.',
        },
        {
          q: 'Kan kvantiteterna matcha våra klassstorlekar?',
          a: 'Ja — programpriser byggs kring klasskvantiteter, och vi rekommenderar antal utifrån ditt vattenområde och rotationsschema.',
        },
        {
          q: 'Arbetar ni med skolors upphandlingstider?',
          a: 'Ja. Vi planerar prov- och produktionstider kring skolans budget- och säsongscykler.',
        },
      ],
      ctaLevel: 'cold',
      ctaLabel: 'Diskutera ditt skolSUP-program',
    },
  ],
  no: [
    {
      slug: 'custom-sup',
      navLabel: 'Skreddersydd SUP-produksjon',
      metaTitle: 'Utvikling av skreddersydde SUP-produkter | Tilpassede løsninger for SUP-brett',
      metaDescription:
        'Utvikle skreddersydde SUP-produkter med iSupfactory. Vi støtter produktkrav, tilpasning, prototyper og produksjon for bedrifter og organisasjoner.',
      kicker: 'Produsent av skreddersydde SUP-brett',
      serviceType: 'Utvikling av skreddersydde SUP-produkter',
      answer:
        'Vi utvikler skreddersydde oppblåsbare SUPar, harde brett og tilbehør ut fra kravspesifikasjonen din — form, grafikk, materialer og emballasje — gjennom konstruksjon, prøver og produksjon. Skreddersydde prosjekter starter på 90–100+ stk per 150 m rulle (volum); prøver sendes innen 7–12 dager, og produksjonen tar 25–35 dager etter bekreftet bestilling og depositum.',
      h1: 'Skreddersydde SUP-produkter bygget rundt kravspesifikasjonen din',
      intro: [
        'Du trenger SUP-brett bygget etter din spesifikasjon — form, grafikk, materialer, emballasje — uten selv å drive en fabrikk. Vi er produksjonspartneren som tar imot kravspesifikasjonen din og leverer et ferdig produkt.',
        'Hvert prosjekt håndteres av en dedikert spesialist som følger design, prøver, produksjon og levering, slik at du alltid vet hvor bestillingen din står.',
      ],
      scenario: {
        title: 'Du trenger brett bygget etter din spesifikasjon',
        body: 'En produktspesifikasjon — ikke et katalogvalg. Dine formpreferanser, din grafikk, ditt kvalitetsnivå, din emballasje. Vi konstruerer, prøver og produserer på utprøvde plattformer, med fleksibilitet fra den første lille serien.',
      },
      pairs: [
        {
          problem: 'Fabrikkens kataloger tilbyr bare standarddesign som du ikke kan endre.',
          solution: 'Vi produserer skreddersydde brett med formene, grafikken og spesifikasjonene dine — fra første prøve til full produksjonsserie.',
        },
        {
          problem: 'Store minimumskvantum låser deg til lager før markedet er validert.',
          solution: 'Skreddersydd volumproduksjon starter fra 90–100+ stk per design, mens pilotserier på eksisterende plattformer starter fra 20–50 stk — de første seriene holdes små samtidig som enhetsprisen forblir rimelig.',
        },
        {
          problem: 'Du har ikke et design- eller konstruksjonsteam på din side.',
          solution: 'Vårt interne design- og konstruksjonsteam gjør om en idé, skisse eller referansebrett til produksjonsklare tegninger.',
        },
        {
          problem: 'Ukjent fabrikkkvalitet og treg kommunikasjon.',
          solution: 'En prosjektspesialist har ansvar for prøver, kvalitetskontrollpunkter og leveringstider fra start til slutt — ett kontaktpunkt, tydelige oppdateringer.',
        },
      ],
      steps: [
        { title: 'Send inn prosjektet ditt', body: 'Fortell om kravspesifikasjonen din, eller del skisser og referansebilder.' },
        { title: 'Design og prøve', body: 'Vi lager tegninger og sender en fysisk prøve innen 7–12 dager.' },
        { title: 'Godkjenn og produser', body: 'Etter din godkjenning tar produksjonen 25–35 dager med kvalitetskontroll på flere punkter.' },
        { title: 'Lever og bestill igjen', body: 'Eksport til hele verden med profesjonell pakking, pluss gjenbestillingsstøtte med jevn kvalitet.' },
      ],
      caseStudy: {
        title: 'Merkeutvidelse for et friluftsmarke',
        body: 'Et friluftsmarke satte spon på padlesport med et touringbrett i eget design. Vi utviklet brettet fra en grov skisse, nådde prøvegodkjenning på 15 dager og produserte den første serien på 25–35 dager.',
        tags: ['Brettutvikling', 'Merkegrafikk', 'Første produksjonsserie'],
      },
      faqs: [
        {
          q: 'Kan dere utvikle et SUP-produkt ut fra min idé?',
          a: 'Ja. Vi hjelper deg med å vurdere kravene og utvikle en produksjonsklar løsning — fra konsept og tegninger til en fysisk prøve.',
        },
        {
          q: 'Kan jeg tilpasse SUP-grafikk og farger?',
          a: 'Ja. Tilpasset grafikk, farger og merkeelementer kan utvikles etter prosjektets krav.',
        },
        {
          q: 'Hva er minste bestillingskvantum for skreddersydd SUP-produksjon?',
          a: 'Skreddersydd volumproduksjon starter fra 90–100+ stk per design, med pilotserier fra 20–50 stk på eksisterende plattformer. Større kvantum gir bedre enhetspris, og gjenbestillinger beholder verktøyene og designene dine.',
        },
        {
          q: 'Hva kan tilpasses på et brett?',
          a: 'Form og mål, konstruksjon og materialer, grafikk og logoer, EVA-puteutforming, tilbehør (paddle, pumpe, sekk) og emballasje.',
        },
        {
          q: 'Leverer dere prøver før produksjon?',
          a: 'Ja — en fysisk prøve lages og godkjennes før hver produksjonsserie. Prøvetiden er vanligvis 7–12 dager.',
        },
        {
          q: 'Kan dere håndtere bare merkevarets mine ressurser, uten et komplett designteam?',
          a: 'Ja. Vårt designteam utvikler produksjonsklar grafikk ut fra logoen din, merkefargene dine eller en enkel konseptidé.',
        },
      ],
      ctaLevel: 'hot',
      ctaLabel: 'Diskuter prosjektet ditt for skreddersydde SUP-brett',
    },
    {
      slug: 'private-label-sup',
      navLabel: 'Private label SUP-brett',
      metaTitle: 'Private label-produksjon av SUP | Skreddersydd SUP-produksjon',
      metaDescription:
        'iSupfactory tilbyr støtte til private label-produksjon av SUP for eksisterende merker og hjelper til med å utvikle skreddersydde SUP-produkter fra spesifikasjon til produksjon.',
      kicker: 'Private label SUP-brett',
      serviceType: 'Private label-produksjon av SUP',
      answer:
        'Private label setter ditt merkenavn på utprøvde, produksjonsklare SUP-plattformer uten nye verktøy. Velg en basemodell, legg på logoen, fargene, emballasjen og tilbehøret dine, og bestill fra 90–100+ stk per 150 m rulle (volum). Det er den raskeste og tryggeste måten å lansere på; prøver tar 7–12 dager og produksjonen 25–35 dager etter bestilling.',
      h1: 'Private label-produksjonsstøtte for SUP under ditt merkenavn',
      intro: [
        'Private label-produksjon lar deg lansere en SUP-brettlinje under ditt eget merkenavn uten å investere i verktøy eller en fabrikk. Logoen, fargene og emballasjen din legges på kvalitetskontrollerte plattformer, med kvantum som vokser med etterspørselen.',
        'Vi håndterer produktsiden slik at du kan fokusere på merkesiden: design, emballasje og gjenbestillingshåndtering tar vi seg av.',
      ],
      scenario: {
        title: 'Du har et merke — og trenger et produkt under det',
        body: 'En merkeidentitet uten lager. Du vil ha en salgbar SUP-brettlinje med ditt navn, i et kvantum som passer fasen din — fra en første valideringsserie til gjentakende flåter.',
      },
      pairs: [
        {
          problem: 'Merket lever bare på en etikett — produktet ser fortsatt generisk ut.',
          solution: 'Full merkeintegrasjon: brettgrafikk, logo, EVA-uteutforming, merkede padler, pumper, sekker og emballasje.',
        },
        {
          problem: 'Den første bestillingen tvinger deg til å kjøpe hundrevis av enheter du kanskje ikke selger.',
          solution: 'Start med en pilotserie på 20–50 enheter på en standardplattform, og skaler deretter til en standardvolumserie fra 90–100+ stk — valider markedet før store partier.',
        },
        {
          problem: 'Utvikling av design og emballasje føles uoppnåelig.',
          solution: 'Merkevarets dine ressurser gjøres om til produksjonsklar brett- og emballasjegrafikk av vårt designteam.',
        },
        {
          problem: 'Gjenbestillinger taper kvalitet eller tilgjengelighet.',
          solution: 'Verktøy og design forblir dine, og gjenbestillinger kjøres på de samme verifiserte plattformene med jevn kvalitet.',
        },
      ],
      steps: [
        { title: 'Del merkevaret ditt', body: 'Send logoen, fargene og eventuelle eksisterende merkevareressurser.' },
        { title: 'Utvikle grafikken', body: 'Vi designer brettgrafikk, EVA-utforming og emballasje rundt merket ditt.' },
        { title: 'Godkjenn prøven', body: 'En fysisk prøve bekrefter farger, overflatebehandling og emballasje.' },
        { title: 'Produser og lever', body: 'Produksjonen kjøres i ditt kvantum, med kvalitetskontroll og eksport håndtert fra start til slutt.' },
      ],
      caseStudy: {
        title: 'Nytt merke, første produksjonsbestilling',
        body: 'En sportsforhandler lanserte sin egen SUP-brettlinje basert på bare en logo. Vi utviklet all brett- og emballasjegrafikken, produserte en første serie på 50 stk for marktesting, og skalerte deretter til en full produksjonsbestilling innen én sesong.',
        tags: ['Merkeutvikling', 'Emballasjedesign', 'Skalert produksjon'],
      },
      faqs: [
        {
          q: 'Hva er private label-produksjon av SUP?',
          a: 'Private label-produksjon av SUP gjør det mulig for bedrifter å selge SUP-produkter under eget merkenavn med tilpassede spesifikasjoner og produksjonsstøtte.',
        },
        {
          q: 'Kan eksisterende merker utvikle nye SUP-produkter?',
          a: 'Ja. iSupfactory støtter merker som vil utvide seg til SUP-produkter — produktutvalg, spesifikasjonstilpasning, tilpasset grafikk og produksjon.',
        },
        {
          q: 'Hva inngår i et private label-SUP-program?',
          a: 'Merket ditt på selve brettet — grafikk, logo, EVA-pute — pluss valgfrie merkede padler, pumper, ryggsekker og emballasje: en komplett salgbar produkt under ditt navn.',
        },
        {
          q: 'Kan designen endres mellom bestillinger?',
          a: 'Ja. Når merkevarets ressurser er produksjonsklare, kan gjenbestillinger oppdatere grafikk, farger eller emballasje når som helst.',
        },
        {
          q: 'Vi har bare en logo. Kan dere likevel hjelpe oss?',
          a: 'Ja. Vårt designteam utvikler all brett- og emballasjegrafikk ut fra logoen din og merkefargene dine.',
        },
      ],
      ctaLevel: 'warm',
      ctaLabel: 'Diskuter private label-prosjektet ditt',
    },
    {
      slug: 'resort-sup',
      navLabel: 'Resort-SUP',
      metaTitle: 'Tilpasset SUP-utstyr for resorts | merkede brett',
      metaDescription:
        'Skap tilpasset SUP-utstyr for resorts og hoteller med merkede brett, tilbehør og produksjonsstøtte fra iSupfactory.',
      kicker: 'Resort-SUP',
      serviceType: 'SUP-utstyr for resorts og hoteller',
      answer:
        'Vi leverer merkede oppblåsbare SUPar til resorts og hoteller, bygget for daglig gjestebruk: høytrykkskonstruksjon i drop-stitch, forsterkede sømmer og trinnvise minimums fra 20–50 pilotenheter opp til 90–100+ for flåteutrulling. Brettet bærer logoen og fargene dine, og vi gir råd om oppbevaring, vedlikehold og gjenbestillingsplaner.',
      h1: 'Tilpassede SUP-utstyrsløsninger for resorts og hoteller',
      intro: [
        'Resortflåter med SUP-brett må tåle daglig gjestebruk, være enkle å oppbevare mellom sesongene og bære merkenavnet ditt. Vi bygger holdbare, gjestevennlige brett i fargene dine og utformer flåteprogrammet rundt driften din.',
        'Kvantum anbefales ut fra bruksmønster, ikke gjettings — og gjenbestillingsprogrammer holder flåten fersk sesong etter sesong.',
      ],
      scenario: {
        title: 'Du driver vannaktiviteter for gjester',
        body: 'Gjester forventer en minneverdig vannopplevelse, og utstyret representerer anlegget ditt. Du trenger brett som er holdbare nok for daglig utleie, enkle å oppbevare og merkede slik at de passer til resortet.',
      },
      pairs: [
        {
          problem: 'Gjesteflåter slites raskt ved daglig utleie.',
          solution: 'Konstruksjon i utleieklasse med forsterkede finner og UV-bestandige materialer bygget for gjentatte turer.',
        },
        {
          problem: 'Lagringsplassen er begrenset utenfor sesongen.',
          solution: 'Oppblåsbare alternativer som er enkle å oppbevare og som pakkes i ett skap når sesongen er over.',
        },
        {
          problem: 'Utstyret ser generisk ut, ikke som anlegget ditt.',
          solution: 'Heldekksgrafikk, logoer og EVA-merking i resortets farger — inkludert merkede tilbehør.',
        },
        {
          problem: 'Å bytte ut og fornye flåten er ukoordinert.',
          solution: 'Et gjenbestillingsprogram for flåten med jevn kvalitet, reservedelsstøtte og ærlig kvantumsveiledning.',
        },
      ],
      steps: [
        { title: 'Beskriv driften din', body: 'Gjestevolum, strandlinje, oppbevaring og sesonglengde.' },
        { title: 'Få en flåteplan', body: 'Vi anbefaler bretttyper og kvantum ut fra bruksmønsteret.' },
        { title: 'Godkjenn merkets prøve', body: 'Fargene og logoen din bekreftet på et fysisk brett.' },
        { title: 'Mott og vedlikehold', body: 'Levering, reservedeler og et gjenbestillingsprogram for kommende sesonger.' },
      ],
      caseStudy: {
        title: 'Gjesteflåte på kystresort',
        body: 'Et kystresort utstyrte strandprogrammet med 40 merkede oppblåsbare brett i resortets farger, inkludert merkede padler og pumper. Brettene oppbevares i ett skap utenfor sesongen, og flåten ble fornyet etter den andre sesongen med jevn kvalitet.',
        tags: ['Merket gjesteflåte', 'Oppblåsbar oppbevaring', 'Sesongfornyelse'],
      },
      faqs: [
        {
          q: 'Kan resorts tilpasse SUP-utstyr med logoen sin?',
          a: 'Ja. Resorts kan tilpasse grafikk, farger og tilbehør etter prosjektkravene — merking på hele brettet i anleggets farger.',
        },
        {
          q: 'Kan dere levere flere SUP-enheter til resortvirksomhet?',
          a: 'Ja. Produksjonsløsninger kan utvikles ut fra flåtebehov, fra en startflåte til sesongvise fornyingsprogrammer.',
        },
        {
          q: 'Hvor mange brett trenger et resort?',
          a: 'De fleste resorts starter med 20–50 brett og skalerer med etterspørselen. Vi anbefaler kvantum ut fra gjestedvolum og strandlinje, ikke gjettings.',
        },
        {
          q: 'Er oppblåsbare brett egnet for resortbruk?',
          a: 'Ja. Moderne oppblåsbare SUP-brett er svært holdbare og mye enklere å oppbevare og frakte — det populære valget for resorts med begrenset lagerplass.',
        },
        {
          q: 'Kan flåten bære logoen og fargene våre?',
          a: 'Ja — heldekksgrafikk, logotrykk, EVA-merking og merkede tilbehør inngår alle i resortprogrammet.',
        },
      ],
      ctaLevel: 'warm',
      ctaLabel: 'Be om en SUP-løsning for resortet ditt',
    },
    {
      slug: 'club-sup',
      navLabel: 'Tilpassede SUP-lagbrett',
      metaTitle: 'Tilpasset SUP-utstyr for klubber og lag',
      metaDescription:
        'iSupfactory tilbyr tilpassede SUP-utstyrsløsninger for klubber, lag og arrangementer, inkludert grafikk, spesifikasjoner og produksjonsstøtte.',
      kicker: 'Tilpassede SUP-lagbrett',
      serviceType: 'SUP-utstyr for klubber og lag',
      answer:
        'Klubber og lag får holdbare, ensartede flåter i egne farger: logoplassering, tilpassede paddellengder og tilbehørspakker på en standardisert brettspesifikasjon, slik at reparasjoner og reservedeler forblir enkle på tvers av gjenbestillinger. Minimumskvantumet starter på 90–100+ stk (volum); pilotserier fra 20–50 enheter finnes for å validere spesifikasjonen først.',
      h1: 'Tilpasset SUP-utstyr for klubber og lag',
      intro: [
        'Padleklubber trenger brett som tåler daglig trening, ser ut som laget og holder jevn kvalitet over gjenbestillinger. Vi produserer tilpassede lagbrett med klubbnavnet og fargene dine, til fordelaktige flåtepriser.',
        'Klubbprogrammene inkluderer også den praktiske siden: reservedeler, reparasjonsveiledning og gjenbestillingsstøtte med samme kvalitet.',
      ],
      scenario: {
        title: 'Klubben din driver trening og lagøkter',
        body: 'Brettet brukes av medlemmene daglig og representerer klubben på arrangementer og regattaer. Du vil ha holdbart lagutstyr med klubbmerking, uten selv å håndtere fabrikkrelasjoner.',
      },
      pairs: [
        {
          problem: 'Treningsbrett utsettes for tung, gjentatt bruk.',
          solution: 'Forsterket konstruksjon bygget for daglig profesjonell bruk, med reparasjonsveiledning og reservedelsstøtte.',
        },
        {
          problem: 'Flåtene ser uensartede ut og mangler merking.',
          solution: 'Klubbnavn, farger og logo trykt på hvert brett for en enhetlig lagflåte.',
        },
        {
          problem: 'Å vokse flåten betyr å lete etter matchende lager.',
          solution: 'Gjenbestillinger kjøres på de samme verifiserte plattformene, slik at nye brett matcher de eksisterende.',
        },
        {
          problem: 'Flåtebudsjettene er stramme.',
          solution: 'Flåtepriser og en dedikert kontakt for gjenbestillinger, deler og vedlikeholdsspørsmål.',
        },
      ],
      steps: [
        { title: 'Fortell om klubben', body: 'Antall medlemmer, øktetyper og eksisterende utstyr.' },
        { title: 'Velg bretttyper', body: 'Trenings-, nybegynner- og lagformer tilpasset programmet ditt.' },
        { title: 'Legg til klubbmerking', body: 'Navnet, fargene og logoen din på brett og tilbehør.' },
        { title: 'Bestill og voks', body: 'Flåtelevering, reservedeler og jevne gjenbestillinger.' },
      ],
      caseStudy: {
        title: 'Fornyet klubbflåte',
        body: 'En padleklubb lanserte en ny profil og fornyet flåten med 25 merkede treningsbrett og reservedeler. Medlemmene trener på matchende utstyr, og klubben utvidet flåten neste sesong med en identisk gjenbestilling.',
        tags: ['Klubbmerking', 'Flåtefornyelse', 'Reservedelsstøtte'],
      },
      faqs: [
        {
          q: 'Kan SUP-klubber tilpasse lagbrett?',
          a: 'Ja. Klubber kan tilpasse grafikk, farger og produktkonfigurasjoner — klubbnavn, farger og logo på hvert brett.',
        },
        {
          q: 'Kan dere støtte arrangementbasert SUP-produksjon?',
          a: 'Ja. Produksjonsplanlegging kan utvikles etter arrangementets krav, inkludert arrangementseksemplarer av brett og tilbehør.',
        },
        {
          q: 'Hvilke brett er best for klubbtrening?',
          a: 'Stabile, holdbare brett tilpasset medlemmenes nivå — brede nybegynnerformer for leksjoner, touringformer for distansetrening.',
        },
        {
          q: 'Tilbyr dere flåtepriser for klubber?',
          a: 'Ja — volumpriser gjelder for klubbflåter, med en dedikert kontakt for gjenbestillinger, deler og vedlikeholdsspørsmål.',
        },
        {
          q: 'Kan skadede brett repareres eller erstattes?',
          a: 'Vi leverer reservedeler, reparasjonsveiledning og gjenbestillingsstøtte slik at flåten forblir enhetlig.',
        },
      ],
      ctaLevel: 'cold',
      ctaLabel: 'Diskuter klubb-SUP-prosjektet ditt',
    },
    {
      slug: 'school-sup',
      navLabel: 'Skoleprogrammer for SUP',
      metaTitle: 'SUP-utstyr for skoler | Tilpassede SUP-brett for undervisning',
      metaDescription:
        'Lever trygge og pålitelige SUP-utstyrsløsninger for skoler, leire og organisasjoner med tilpasset produksjonsstøtte fra iSupfactory.',
      kicker: 'Skoleprogrammer for SUP',
      serviceType: 'SUP-utstyr for skoler og programmer',
      answer:
        'For skoler og undervisningsprogrammer leverer vi stabile, nybegynnervennlige brett med trykt sikkerhetsveiledning, polstrede padler og beskyttende tilbehør, tilpasset klassestørrelsen og løsningen din for oppbevaring. Standardvolumserie er 90–100+ stk per 150 m rulle med pilotserier fra 20–50 enheter; leveringstidene støtter skolens innkjøpssyklus.',
      h1: 'Trygge og pålitelige SUP-løsninger for skoler og programmer',
      intro: [
        'Skoler driver padlesport på en annen måte: store klasser, blandede nivåer, strenge sikkerhetskrav og undervisningsbudsjetter. Skoleprogrammet vårt tilbyr stabile, nybegynnervennlige brett, pakkealternativer som passer klassestørrelsene og veiledning fra et instruktørperspektiv.',
        'Bulklevering og gjenbestillingsstøtte holder utstyret tilgjengelig år etter år for nye elevkuller.',
      ],
      scenario: {
        title: 'Du underviser i padlesport for studenter',
        body: 'Klassene er store, og nivåene varierer. Du trenger brett som er stabile og trygge for nybegynnere, kvantum som matcher klassestørrelsene og et utstyrsprogram som passer en skoles budsjett og innkjøpssyklus.',
      },
      pairs: [
        {
          problem: 'Elevene trenger maksimal stabilitet på vannet.',
          solution: 'Brede nybegynnerbrett med høyt volum og flerpersonbrett utformet for å være tilgivende for nybegynnere.',
        },
        {
          problem: 'Klassestørrelser krever ensartet utstyr i stor skala.',
          solution: 'Bulkprogrampriser for klassekvantum, med samme kvalitet på hvert brett.',
        },
        {
          problem: 'Instruktører håndterer sikkerhet med begrenset hjelp.',
          solution: 'Brettet leveres med tydelig brukerveiledning, og vi rådgir om kvantum og oppsett for ditt vannområde.',
        },
        {
          problem: 'Utstyret må tåle mange elevkuller.',
          solution: 'Forsterket konstruksjon pluss reservedeler og gjenbestillingsstøtte for lang programlevetid.',
        },
      ],
      steps: [
        { title: 'Del programmet ditt', body: 'Klassestørrelser, vannområde, instruktøroppsett og budsjettsyklus.' },
        { title: 'Bygg pakken', body: 'Bretttyper og kvantum tilpasset undervisningen, ikke gjettings.' },
        { title: 'Godkjenn prøven', body: 'Verifiser stabilitet, konstruksjon og overflatebehandling på et fysisk brett.' },
        { title: 'Lever og forny', body: 'Bulklevering, reservedeler og gjenbestillinger for nye kuller.' },
      ],
      caseStudy: {
        title: 'Idrettsprogram for vannsport på skole',
        body: 'En skole lanserte et valgfag i padlesport med en nybegynnerflåte på 15 brett og flerpersonbrett for de første leksjonene. Instruktørene rapporterte raskere fremdrift i første time på de stabile plattformene, og programmet fornyet utstyret med en matchende gjenbestilling året etter.',
        tags: ['Nybegynnerflåte', 'Programlansering', 'Fornyelsesbestillinger'],
      },
      faqs: [
        {
          q: 'Hvilket SUP-utstyr passer for skoler?',
          a: 'Valg av SUP-utstyr avhenger av brukernes alder, bruksmiljø og programkrav — brede, stabile brett er standardvalget for undervisning.',
        },
        {
          q: 'Kan skoler tilpasse SUP-utstyr?',
          a: 'Ja. Skoler kan tilpasse grafikk, farger og utstyrspakker etter programmet sitt.',
        },
        {
          q: 'Hvilke brett er best for SUP-undervisning i skolen?',
          a: 'Brede, stabile nybegynnerbrett og flerpersonbrett er ideelle — volumet gjør dem tilgivende for nybegynnere og stabile med flere padlere.',
        },
        {
          q: 'Kan kvantumet matche klassestørrelsene våre?',
          a: 'Ja — programpriser bygges rundt klassekvantum, og vi anbefaler antall ut fra vannområdet ditt og rotasjonsplanen.',
        },
        {
          q: 'Jobber dere med skolenes innkjøpstider?',
          a: 'Ja. Vi planlegger prøve- og produksjonstider rundt skolens budsjett- og sesongssykluser.',
        },
      ],
      ctaLevel: 'cold',
      ctaLabel: 'Diskuter skole-SUP-programmet ditt',
    },
  ],
  pl: [
    {
      slug: 'custom-sup',
      navLabel: 'Produkcja desek SUP na zamówienie',
      metaTitle: 'Rozwój desek SUP na zamówienie | Indywidualne rozwiązania SUP',
      metaDescription:
        'Rozwijaj produkty SUP na zamówienie z iSupfactory. Wspieramy wymagania produktowe, personalizację, prototypy i produkcję dla firm i organizacji.',
      kicker: 'Producent desek SUP na zamówienie',
      serviceType: 'Rozwój produktów SUP na zamówienie',
      answer:
        'Tworzymy nadmuchiwane deski SUP, deski twarde i akcesoria na zamówienie zgodnie z Twoimi wymaganiami — kształt, grafika, materiały i opakowanie — na etapie projektowania, próbek i produkcji. Projekty na zamówienie zaczynają się od 90–100+ szt. na rolkę 150 m (wolumen); próbki wysyłamy w 7–12 dni, a produkcja trwa 25–35 dni od potwierdzonego zamówienia i zaliczki.',
      h1: 'Produkty SUP na zamówienie zbudowane wokół Twoich wymagań',
      intro: [
        'Potrzebujesz desek SUP zbudowanych zgodnie z Twoją specyfikacją — kształt, grafika, materiały, opakowanie — bez prowadzenia własnej fabryki. Jesteśmy partnerem produkcyjnym, który przyjmuje Twoje wymaganie i zwraca gotowy produkt.',
        'Każdy projekt prowadzi dedykowany specjalista, który zarządza projektem, próbkami, produkcją i dostawą, dzięki czemu zawsze wiesz, na jakim etapie jest Twoje zamówienie.',
      ],
      scenario: {
        title: 'Potrzebujesz desek zbudowanych według Twojej specyfikacji',
        body: 'To wymaganie produktowe, a nie wybór z katalogu. Twoje preferencje kształtu, Twoja grafika, Twój poziom jakości, Twoje opakowanie. Projektujemy, wykonujemy próbki i produkujemy na sprawdzonych platformach, z elastycznością już od pierwszej małej serii.',
      },
      pairs: [
        {
          problem: 'Katalogi fabryk oferują tylko gotowe projekty, których nie możesz zmienić.',
          solution: 'Produkujemy deski na zamówienie z Twoimi kształtami, grafiką i specyfikacją — od pierwszej próbki po pełne serie produkcyjne.',
        },
        {
          problem: 'Duże minimalne ilości zamówienia (MOQ) wiążą Cię z zapasami, zanim zweryfikujesz rynek.',
          solution: 'Produkcja seryjna projektów na zamówienie zaczyna się od 90–100+ szt. na projekt, a serie pilotażowe na istniejących platformach od 20–50 szt. — pierwsze partie pozostają małe, a cena jednostkowa uczciwa.',
        },
        {
          problem: 'Nie masz po swojej stronie zespołu projektowego ani konstrukcyjnego.',
          solution: 'Nasz wewnętrzny zespół projektowo-konstrukcyjny zamienia pomysł, szkic lub deskę wzorcową w rysunki gotowe do produkcji.',
        },
        {
          problem: 'Nieznana jakość fabryki i powolna komunikacja.',
          solution: 'Specjalista ds. projektu odpowiada za próbki, punkty kontroli jakości i terminy dostawy od początku do końca — jeden punkt kontaktu, jasne aktualizacje.',
        },
      ],
      steps: [
        { title: 'Prześlij swój projekt', body: 'Opowiedz o swoich wymaganiach lub udostępnij szkice i zdjęcia referencyjne.' },
        { title: 'Projekt i próbka', body: 'Opracowujemy rysunki i wysyłamy fizyczną próbkę w 7–12 dni.' },
        { title: 'Zatwierdź i produkuj', body: 'Po zatwierdzeniu produkcja trwa 25–35 dni z kontrolą jakości w wielu punktach.' },
        { title: 'Dostarcz i zamów ponownie', body: 'Eksport na cały świat z profesjonalnym pakowaniem oraz wsparcie przy zamówieniach powtórnych ze stałą jakością.' },
      ],
      caseStudy: {
        title: 'Rozszerzenie oferty marki outdoorowej',
        body: 'Marka sprzętu outdoorowego weszła w sporty wodne z markową deską touringową. Opracowaliśmy deskę na podstawie szkicu, uzyskaliśmy akceptację próbki w 15 dni i wyprodukowaliśmy pierwszą serię w 25–35 dni.',
        tags: ['Rozwój deski', 'Grafika marki', 'Pierwsza seria produkcyjna'],
      },
      faqs: [
        {
          q: 'Czy możecie opracować produkt SUP na podstawie mojego pomysłu?',
          a: 'Tak. Pomagamy ocenić wymagania i opracować rozwiązanie gotowe do produkcji — od koncepcji i rysunków po fizyczną próbkę.',
        },
        {
          q: 'Czy mogę spersonalizować grafikę i kolory SUP?',
          a: 'Tak. Grafika, kolory i elementy identyfikacji wizualnej mogą być opracowane zgodnie z wymaganiami projektu.',
        },
        {
          q: 'Jaka jest minimalna ilość zamówienia (MOQ) w produkcji desek SUP na zamówienie?',
          a: 'Produkcja seryjna projektów na zamówienie zaczyna się od 90–100+ szt. na projekt, a serie pilotażowe na istniejących platformach od 20–50 szt. Większe wolumeny dają lepszą cenę jednostkową, a przy zamówieniach powtórnych zostają zachowane Twoje narzędzia i projekty.',
        },
        {
          q: 'Co można dostosować na desce?',
          a: 'Kształt i wymiary, konstrukcję i materiały, grafikę i logotypy, kształt dywanu EVA, akcesoria (wiosło, pompka, torba) oraz opakowanie.',
        },
        {
          q: 'Czy dostarczacie próbki przed produkcją?',
          a: 'Tak — fizyczna próbka jest wykonana i zatwierdzana przed każdą serią produkcyjną. Wykonanie próbki zajmuje zwykle 7–12 dni.',
        },
        {
          q: 'Czy możecie poprowadzić projekt, mając tylko zasoby marki, bez pełnego zespołu projektowego?',
          a: 'Tak. Nasz zespół projektowy opracowuje gotową do produkcji grafikę na podstawie Twojego logo, kolorów marki lub prostego pomysłu koncepcyjnego.',
        },
      ],
      ctaLevel: 'hot',
      ctaLabel: 'Omów swój projekt desek SUP na zamówienie',
    },
    {
      slug: 'private-label-sup',
      navLabel: 'SUP pod własną marką',
      metaTitle: 'Produkcja SUP pod własną marką | Deski SUP na zamówienie',
      metaDescription:
        'iSupfactory wspiera produkcję desek SUP pod własną marką i pomaga opracować produkty SUP na zamówienie — od specyfikacji po produkcję.',
      kicker: 'Deski SUP pod własną marką',
      serviceType: 'Produkcja SUP pod własną marką',
      answer:
        'Własna marka oznacza umieszczenie Twojej nazwy na sprawdzonych, gotowych do produkcji platformach SUP bez nowych narzędzi. Wybierz model bazowy, dodaj logo, kolory, opakowanie i akcesoria, a następnie zamów od 90–100+ szt. na rolkę 150 m (wolumen). To najszybszy i najbezpieczniejszy sposób wejścia na rynek; próbki zajmują 7–12 dni, a produkcja 25–35 dni od zamówienia.',
      h1: 'Wsparcie produkcji SUP pod własną marką',
      intro: [
        'Produkcja pod własną marką pozwala uruchomić linię desek SUP pod Twoją nazwą bez inwestowania w narzędzia ani fabrykę. Twoje logo, kolory i opakowanie trafiają na platformy poddane kontroli jakości, a wolumen rośnie wraz z popytem.',
        'Bierzemy na siebie część produktową, żebyś mógł skupić się na marce: projekt, opakowanie i obsługę zamówień powtórnych bierzemy na siebie.',
      ],
      scenario: {
        title: 'Masz markę — i potrzebujesz produktu pod jej szyldą',
        body: 'Identyfikacja marki bez produktu w magazynie. Chcesz sprzedawalną linię desek SUP z własną nazwą, w wolumenie dopasowanym do etapu rozwoju — od pierwszej serii walidacyjnej po powtarzalne floty.',
      },
      pairs: [
        {
          problem: 'Marka żyje tylko na etykiecie — produkt wciąż wygląda generycznie.',
          solution: 'Pełna integracja marki: grafika deski, logo, kształt EVA, markowane wiosła, pompki, torby i opakowanie.',
        },
        {
          problem: 'Pierwsze zamówienie zmusza Cię do kupienia setek sztuk, których może nie sprzedać.',
          solution: 'Zacznij od serii pilotażowej 20–50 sztuk na platformie standardowej, a następnie skaluj do serii standardowej od 90–100+ szt. — zwaliduj rynek przed dużymi wolumenami.',
        },
        {
          problem: 'Opracowanie projektu i opakowania wydaje się nieosiągalne.',
          solution: 'Twoje materiały marki nasz zespół projektowy zamienia w gotową do produkcji grafikę deski i opakowania.',
        },
        {
          problem: 'Zamówienia powtórne tracą jakość lub dostępność.',
          solution: 'Narzędzia i projekt pozostają Twoje, a zamówienia powtórne realizujemy na tych samych zweryfikowanych platformach ze stałą jakością.',
        },
      ],
      steps: [
        { title: 'Prześlij materiały marki', body: 'Wyślij logo, kolory i ewentualne istniejące zasoby marki.' },
        { title: 'Opracuj grafikę', body: 'Projektujemy grafikę deski, kształt EVA i opakowanie wokół Twojej marki.' },
        { title: 'Zatwierdź próbkę', body: 'Fizyczna próbka potwierdza kolory, wykończenie powierzchni i opakowanie.' },
        { title: 'Produkuj i dostarczaj', body: 'Produkcja w Twoim wolumenie, z kontrolą jakości i obsługą eksportu od początku do końca.' },
      ],
      caseStudy: {
        title: 'Nowa marka, pierwsze zamówienie produkcyjne',
        body: 'Sklep sportowy uruchomił własną linię desek SUP opartą tylko na logo. Opracowaliśmy całą grafikę deski i opakowania, wyprodukowaliśmy pierwszą serię 50 sztuk do testów rynkowych, a następnie w ciągu jednego sezonu skalowaliśmy do pełnego zamówienia produkcyjnego.',
        tags: ['Rozwój marki', 'Projekt opakowania', 'Skalowana produkcja'],
      },
      faqs: [
        {
          q: 'Czym jest produkcja SUP pod własną marką?',
          a: 'Produkcja SUP pod własną marką umożliwia firmom sprzedaż produktów SUP pod własną nazwą, z dostosowaną specyfikacją i wsparciem produkcyjnym.',
        },
        {
          q: 'Czy istniejące marki mogą opracować nowe produkty SUP?',
          a: 'Tak. iSupfactory wspiera marki, które chcą wejść w produkty SUP — asortyment, dostosowanie specyfikacji, spersonalizowaną grafikę i produkcję.',
        },
        {
          q: 'Co obejmuje program SUP pod własną marką?',
          a: 'Twoją markę na samej desce — grafikę, logo, dywan EVA — a opcjonalnie także markowane wiosła, pompki, plecaki i opakowanie: kompletny produkt gotowy do sprzedaży pod Twoją nazwą.',
        },
        {
          q: 'Czy projekt można zmieniać między zamówieniami?',
          a: 'Tak. Gdy zasoby marki są gotowe do produkcji, zamówienia powtórne mogą w dowolnym momencie zaktualizować grafikę, kolory lub opakowanie.',
        },
        {
          q: 'Mamy tylko logo. Czy mimo to pomożecie?',
          a: 'Tak. Nasz zespół projektowy opracowuje całą grafikę deski i opakowania na podstawie Twojego logo i kolorów marki.',
        },
      ],
      ctaLevel: 'warm',
      ctaLabel: 'Omów swój projekt SUP pod własną marką',
    },
    {
      slug: 'resort-sup',
      navLabel: 'SUP dla resortów',
      metaTitle: 'Dedykowane wyposażenie SUP dla resortów | Markowane deski',
      metaDescription:
        'Twórz dedykowane wyposażenie SUP dla resortów i hoteli: markowane deski, akcesoria i wsparcie produkcyjne od iSupfactory.',
      kicker: 'SUP dla resortów',
      serviceType: 'Wyposażenie SUP dla resortów i hoteli',
      answer:
        'Dostarczamy markowane nadmuchiwane deski SUP resortom i hotelom, zbudowane na codzienne użytkowanie przez gości: wysokociśnieniowa konstrukcja drop-stitch, wzmocnione szwy i stopniowe progi minimalne od 20–50 sztuk pilotażowo do 90–100+ sztuk przy wdrażaniu floty. Deska nosi Twoje logo i kolory, a my doradzamy w sprawie przechowywania, konserwacji i planów zamówień powtórnych.',
      h1: 'Rozwiązania w zakresie dedykowanego wyposażenia SUP dla resortów i hoteli',
      intro: [
        'Floty SUP w resortach muszą wytrzymać codzienne użytkowanie przez gości, być łatwe do przechowywania między sezonami i nieść nazwę Twojej marki. Budujemy trwałe, przyjazne gościom deski w Twoich kolorach i układamy program floty wokół Twojej działalności.',
        'Wolumeny zalecamy na podstawie wzorca użytkowania, a nie zgadywanka — a programy zamówień powtórnych utrzymują flotę świeżą sezon po sezonie.',
      ],
      scenario: {
        title: 'Prowadzisz aktywności na wodzie dla gości',
        body: 'Goście oczekują niezapomnianego doświadczenia na wodzie, a wyposażenie reprezentuje Twój obiekt. Potrzebujesz desek wystarczająco trwałych do codziennej wypożyczalni, łatwych w przechowywaniu i markowanych, żeby pasowały do resortu.',
      },
      pairs: [
        {
          problem: 'Floty dla gości zużywają się szybko przy codziennym wynajmie.',
          solution: 'Konstrukcja klasy wypożyczalni ze wzmocnionymi płetwami i materiałami odpornymi na UV, zbudowana na powtarzające się wyprawy.',
        },
        {
          problem: 'Poza sezonem miejsce do przechowywania jest ograniczone.',
          solution: 'Warianty nadmuchiwane, które łatwo przechowywać i które po sezonie mieszczą się w jednej szafie.',
        },
        {
          problem: 'Wyposażenie wygląda generycznie, a nie jak element Twojego obiektu.',
          solution: 'Grafika na całej desce, logotypy i oznaczenia EVA w kolorach resortu — wraz z markowanymi akcesoriami.',
        },
        {
          problem: 'Wymiana i odświeżanie floty jest nieskoordynowana.',
          solution: 'Program zamówień powtórnych dla floty ze stałą jakością, wsparciem częściami zamiennymi i uczciwymi rekomendacjami wolumenu.',
        },
      ],
      steps: [
        { title: 'Opisz swoją działalność', body: 'Liczba gości, linia brzegowa, przechowywanie i długość sezonu.' },
        { title: 'Otrzymaj plan floty', body: 'Zalecamy rodzaje desek i wolumeny na podstawie wzorca użytkowania.' },
        { title: 'Zatwierdź próbkę marki', body: 'Twoje kolory i logo potwierdzone na fizycznej desce.' },
        { title: 'Odbierz i utrzymuj', body: 'Dostawa, części zamienne i program zamówień powtórnych na kolejne sezony.' },
      ],
      caseStudy: {
        title: 'Flota dla gości w nadmorskim resorcie',
        body: 'Nadmorski resort wyposażył program plażowy w 40 markowanych nadmuchiwanych desek w kolorach obiektu, w tym markowane wiosła i pompki. Deski przechowuje się w jednej szafie poza sezonem, a po drugim sezonie flotę odświeżono powtórnym zamówieniem ze stałą jakością.',
        tags: ['Markowana flota dla gości', 'Przechowywanie nadmuchiwane', 'Odświeżenie sezonowe'],
      },
      faqs: [
        {
          q: 'Czy resorty mogą dostosować wyposażenie SUP z własnym logo?',
          a: 'Tak. Resorty mogą dostosować grafikę, kolory i akcesoria do wymagań projektu — oznaczenie na całej desce w kolorach obiektu.',
        },
        {
          q: 'Czy dostarczacie kolejne partie desek SUP dla resortów?',
          a: 'Tak. Rozwiązania produkcyjne można rozwijać zależnie od potrzeb floty — od pierwszej floty po sezonowe programy odświeżania.',
        },
        {
          q: 'Ile desek potrzebuje resort?',
          a: 'Większość resortów zaczyna od 20–50 desek i skaluje wraz z popytem. Wolumeny zalecamy na podstawie liczby gości i linii brzegowej, a nie zgadywanki.',
        },
        {
          q: 'Czy nadmuchiwane deski nadają się do użytku w resortach?',
          a: 'Tak. Nowoczesne nadmuchiwane deski SUP są bardzo trwałe i znacznie łatwiejsze w przechowywaniu i transporcie — to popularny wybór dla resortów z ograniczoną przestrzenią magazynową.',
        },
        {
          q: 'Czy flota może nieść nasze logo i kolory?',
          a: 'Tak — grafika na całej desce, nadruk logo, oznaczenia EVA i markowane akcesoria są częścią programu dla resortów.',
        },
      ],
      ctaLevel: 'warm',
      ctaLabel: 'Poproś o rozwiązanie SUP dla swojego resortu',
    },
    {
      slug: 'club-sup',
      navLabel: 'Dedykowane deski SUP dla drużyn',
      metaTitle: 'Dedykowane wyposażenie SUP dla klubów i drużyn',
      metaDescription:
        'iSupfactory oferuje dedykowane rozwiązania w zakresie wyposażenia SUP dla klubów, drużyn i wydarzeń, w tym grafikę, specyfikacje i wsparcie produkcyjne.',
      kicker: 'Dedykowane deski SUP dla drużyn',
      serviceType: 'Wyposażenie SUP dla klubów i drużyn',
      answer:
        'Kluby i drużyny otrzymują trwałe, jednolite floty we własnych kolorach: rozmieszczenie logotypu, dostosowane długości wiosła i zestawy akcesoriów na standaryzowanej specyfikacji deski, dzięki czemu naprawy i części zamienne pozostają proste przy kolejnych zamówieniach. Minimalna ilość zamówienia (MOQ) zaczyna się od 90–100+ szt. (wolumen); serie pilotażowe od 20–50 szt. pozwalają najpierw zweryfikować specyfikację.',
      h1: 'Dedykowane wyposażenie SUP dla klubów i drużyn',
      intro: [
        'Kluby pływackie potrzebują desek, które wytrzymają codzienne treningi, wyglądają jak drużyna i utrzymują stałą jakość przy zamówieniach powtórnych. Produkujemy dedykowane deski drużynowe z nazwą klubu i Twoimi kolorami, w korzystnych cenach flotowych.',
        'Programy klubowe obejmują także praktyczną stronę: części zamienne, instrukcje napraw i wsparcie przy zamówieniach powtórnych ze stałą jakością.',
      ],
      scenario: {
        title: 'Twój klub prowadzi treningi i zawody drużynowe',
        body: 'Deska jest używana codziennie przez członków i reprezentuje klub na wydarzeniach i regatach. Chcesz trwałego wyposażenia drużynowego z oznaczeniem klubu, bez samodzielnego zarządzania relacjami z fabryką.',
      },
      pairs: [
        {
          problem: 'Deski treningowe są narażone na intensywne, powtarzalne użytkowanie.',
          solution: 'Wzmocniona konstrukcja zbudowana do codziennego użytku profesjonalnego, wraz z instrukcjami napraw i wsparciem częściami zamiennymi.',
        },
        {
          problem: 'Floty wyglądają niejednorodnie i pozbawione są oznaczeń.',
          solution: 'Nazwa klubu, kolory i logotyp nadrukowane na każdej desce, tworzące jednolitą flotę drużynową.',
        },
        {
          problem: 'Rozbudowa floty oznacza szukanie pasujących zapasów.',
          solution: 'Zamówienia powtórne realizujemy na tych samych zweryfikowanych platformach, dzięki czemu nowe deski pasują do istniejących.',
        },
        {
          problem: 'Budżety flotowe są napięte.',
          solution: 'Ceny flotowe i dedykowany kontakt do spraw zamówień powtórnych, części oraz konserwacji.',
        },
      ],
      steps: [
        { title: 'Opisz swój klub', body: 'Liczba członków, rodzaje zajęć i istniejące wyposażenie.' },
        { title: 'Wybierz rodzaje desek', body: 'Kształty treningowe, dla początkujących i drużynowe dopasowane do Twojego programu.' },
        { title: 'Dodaj oznaczenia klubu', body: 'Nazwa, kolory i logotyp na deskach i akcesoriami.' },
        { title: 'Zamów i rozrastaj się', body: 'Dostawa floty, części zamienne i równe pod względem jakości zamówienia powtórne.' },
      ],
      caseStudy: {
        title: 'Odświeżona flota klubu',
        body: 'Klub pływacki wprowadził nową linię produktową i odświeżył flotę o 25 markowanych desek treningowych wraz z częściami zamiennymi. Członkowie trenują na jednolitym sprzęcie, a klub w kolejnym sezonie powiększył flotę o identyczne zamówienie powtórne.',
        tags: ['Oznaczenia klubu', 'Odświeżenie floty', 'Wsparcie częściami zamiennymi'],
      },
      faqs: [
        {
          q: 'Czy kluby SUP mogą dostosować deski drużynowe?',
          a: 'Tak. Kluby mogą dostosować grafikę, kolory i konfigurację produktu — nazwa klubu, kolory i logotyp na każdej desce.',
        },
        {
          q: 'Czy wspieracie produkcję SUP na potrzeby wydarzeń?',
          a: 'Tak. Planowanie produkcji można opracować zgodnie z wymaganiami wydarzenia, w tym egzemplarzami desek i akcesoriów dla uczestników.',
        },
        {
          q: 'Jakie deski są najlepsze do treningów klubowych?',
          a: 'Stabilne, trwałe deski dopasowane do poziomu członków — szerokie kształty dla początkujących na lekcje, kształty touring do treningu dystansowego.',
        },
        {
          q: 'Czy oferujecie ceny flotowe dla klubów?',
          a: 'Tak — ceny wolumenowe obowiązują dla flot klubowych, z dedykowanym kontaktem do spraw zamówień powtórnych, części i konserwacji.',
        },
        {
          q: 'Czy uszkodzone deski można naprawić lub wymienić?',
          a: 'Dostarczamy części zamienne, instrukcje napraw i wsparcie przy zamówieniach powtórnych, aby flota pozostała jednolita.',
        },
      ],
      ctaLevel: 'cold',
      ctaLabel: 'Omów swój projekt SUP dla klubu',
    },
    {
      slug: 'school-sup',
      navLabel: 'Programy SUP dla szkół',
      metaTitle: 'Wyposażenie SUP dla szkół | Dedykowane deski SUP do nauki',
      metaDescription:
        'Bezpieczne i niezawodne rozwiązania w zakresie wyposażenia SUP dla szkół, obozów i organizacji, z dedykowanym wsparciem produkcyjnym od iSupfactory.',
      kicker: 'Programy SUP dla szkół',
      serviceType: 'Wyposażenie SUP dla szkół i programów',
      answer:
        'Szkołom i programom edukacyjnym dostarczamy stabilne deski przyjazne początkującym z nadrukowaną instrukcją bezpieczeństwa, wiosłami z miękkimi uchwytami i akcesoriami ochronnymi, dopasowanymi do wielkości klasy i wybranego rozwiązania do przechowywania. Standardowa seria to 90–100+ szt. na rolkę 150 m, a serie pilotażowe od 20–50 szt.; terminy dostawy wspierają cykl zakupowy szkoły.',
      h1: 'Bezpieczne i niezawodne rozwiązania SUP dla szkół i programów',
      intro: [
        'Szkoły uczą sportu wodnego inaczej: duże klasy, zróżnicowane poziomy, rygorystyczne wymagania bezpieczeństwa i budżety dydaktyczne. Nasz program dla szkół oferuje stabilne deski przyjazne początkującym, warianty zestawów dopasowane do wielkości klasy i doradztwo z perspektywy instruktora.',
        'Dostawy hurtowe i wsparcie przy zamówieniach powtórnych utrzymują wyposażenie dostępne rok po roku dla kolejnych roczników uczniów.',
      ],
      scenario: {
        title: 'Prowadzisz zajęcia ze sportu wodnego dla uczniów',
        body: 'Klasy są duże, a poziomy się różnią. Potrzebujesz desek stabilnych i bezpiecznych dla początkujących, wolumenu dopasowanego do wielkości klasy oraz programu wyposażenia mieszczącego się w budżecie i cyklu zakupowym szkoły.',
      },
      pairs: [
        {
          problem: 'Uczniowie potrzebują maksymalnej stabilności na wodzie.',
          solution: 'Szerokie deski dla początkujących o dużej objętości oraz deski wieloosobowe zaprojektowane tak, by wybaczały błędy początkujących.',
        },
        {
          problem: 'Wielkość klas wymaga jednolitego wyposażenia w dużej skali.',
          solution: 'Hurtowe ceny programowe dla wolumenów klasowych, z tą samą jakością na każdej desce.',
        },
        {
          problem: 'Instruktorzy zajmują się bezpieczeństwem z ograniczonym wsparciem.',
          solution: 'Deska jest dostarczana z jasną instrukcją użycia, a my doradzamy w sprawie wolumenu i ustawienia dla Twojego akwenu.',
        },
        {
          problem: 'Wyposażenie musi przetrwać wiele roczników uczniów.',
          solution: 'Wzmocniona konstrukcja plus części zamienne i wsparcie przy zamówieniach powtórnych zapewniają długą żywotność programu.',
        },
      ],
      steps: [
        { title: 'Przedstaw swój program', body: 'Wielkość klas, akwen, ustawienie instruktora i cykl budżetowy.' },
        { title: 'Zbuduj zestaw', body: 'Rodzaje desek i wolumeny dopasowane do nauczania, a nie zgadywanki.' },
        { title: 'Zatwierdź próbkę', body: 'Sprawdź stabilność, konstrukcję i wykończenie powierzchni na fizycznej desce.' },
        { title: 'Dostarcz i odśwież', body: 'Dostawy hurtowe, części zamienne i zamówienia powtórne dla kolejnych roczników.' },
      ],
      caseStudy: {
        title: 'Szkolny program sportów wodnych',
        body: 'Szkoła wprowadziła nieobowiązkowe zajęcia ze sportu wodnego z flotą 15 desek dla początkujących i deskami wieloosobowymi na pierwsze lekcje. Instruktorzy odnotowali szybszy postęp na pierwszej lekcji dzięki stabilnym platformom, a program odświeżył wyposażenie odpowiadającym zamówieniem powtórnym rok później.',
        tags: ['Flota dla początkujących', 'Uruchomienie programu', 'Zamówienia odświeżające'],
      },
      faqs: [
        {
          q: 'Jakie wyposażenie SUP sprawdza się w szkołach?',
          a: 'Wybór wyposażenia SUP zależy od wieku użytkowników, środowiska użytkowania i wymagań programu — szerokie, stabilne deski to standardowy wybór do nauczania.',
        },
        {
          q: 'Czy szkoły mogą dostosować wyposażenie SUP?',
          a: 'Tak. Szkoły mogą dostosować grafikę, kolory i zestawy wyposażenia do swojego programu.',
        },
        {
          q: 'Jakie deski są najlepsze do nauki SUP w szkole?',
          a: 'Szerokie, stabilne deski dla początkujących oraz deski wieloosobowe są idealne — objętość sprawia, że wybaczają błędy początkujących i pozostają stabilne przy kilku wiosłujących.',
        },
        {
          q: 'Czy wolumeny można dopasować do wielkości naszych klas?',
          a: 'Tak — ceny programowe budujemy wokół wolumenów klasowych, a liczbę zalecamy na podstawie Twojego akwenu i planu rotacji.',
        },
        {
          q: 'Czy współpracujecie z terminami zakupowymi szkół?',
          a: 'Tak. Planujemy terminy próbek i produkcji wokół budżetowych i sezonowych cykli szkoły.',
        },
      ],
      ctaLevel: 'cold',
      ctaLabel: 'Omów swój program SUP dla szkoły',
    },
  ],
  da: [
    {
      slug: 'custom-sup',
      navLabel: 'Specialfremstilling af SUP-bræt',
      metaTitle: 'Udvikling af specialfremstillede SUP-bræt | Tilpassede paddleboard-løsninger',
      metaDescription:
        'Udvikl specialfremstillede SUP-produkter med iSupfactory. Vi understøtter produktkrav, tilpasning, prototyper og produktion for virksomheder og organisationer.',
      kicker: 'Producent af specialfremstillede SUP-bræt',
      serviceType: 'Udvikling af specialfremstillede SUP-produkter',
      answer:
        'Vi udvikler specialfremstillede oppustelige SUP-bræt, hårde bræt og tilbehør ud fra dit krav — form, grafik, materialer og emballage — gennem konstruktion, prøve og produktion. Specialprojekter starter ved 90–100+ stk pr. 150 m rulle (volumen); prøver sendes på 7–12 dage, og produktionen kører 25–35 dage fra bekræftet ordre og depositum.',
      h1: 'Specialfremstillede SUP-produkter bygget omkring dine krav',
      intro: [
        'Du har brug for paddleboards bygget efter din specifikation — form, grafik, materialer, emballage — uden selv at drive en fabrik. Vi er den produktionspartner, der tager dit krav og leverer et færdigt produkt.',
        'Hvert projekt varetages af en dedikeret specialist, der styrer design, prøver, produktion og levering, så du altid ved, hvor din ordre står.',
      ],
      scenario: {
        title: 'Du har brug for bræt bygget efter din specifikation',
        body: 'Et produktkrav — ikke et katalogvalg. Dine formpræferencer, din grafik, dit kvalitetsniveau, din emballage. Vi konstruerer, fremstiller prøve og producerer på afprøvede platforme med fleksibilitet allerede fra den første lille batch.',
      },
      pairs: [
        {
          problem: 'Fabrikkernes kataloger tilbyder kun lagerdesign, du ikke kan ændre.',
          solution: 'Vi producerer bræt med dine forme, din grafik og dine specifikationer — fra den første prøve til fulde produktionsserier.',
        },
        {
          problem: 'Store minimumsordrer låser dig til lager, før markedet er valideret.',
          solution: 'Specialproduktion i volumen starter fra 90–100+ stk pr. design, mens pilotpartier på eksisterende platforme starter fra 20–50 stk — så de første runder forbliver små, mens enhedsprisen forbliver fair.',
        },
        {
          problem: 'Du har intet design- eller konstruktionsteam på din side.',
          solution: 'Vores interne design- og konstruktionsteam gør en ide, skitse eller referencebræt om til produktionsklare tegninger.',
        },
        {
          problem: 'Ukendt fabrikkvalitet og langsom kommunikation.',
          solution: 'En projektspecialist ejer prøver, QC-milestæpene og leveringstidslinjerne fra start til slut — et kontaktpunkt, klare opdateringer.',
        },
      ],
      steps: [
        { title: 'Indsend dit projekt', body: 'Fortæl os om dine krav, eller del skitser og referencebilleder.' },
        { title: 'Design og prøve', body: 'Vi udvikler tegninger og sender en fysisk prøve inden for 7–12 dage.' },
        { title: 'Godkend og producer', body: 'Efter din godkendelse kører produktionen i 25–35 dage med QC i flere punkter.' },
        { title: 'Lever og genbestil', body: 'Eksport til hele verden med professionel pakning samt genbestillingssupport i ensartet kvalitet.' },
      ],
      caseStudy: {
        title: 'Udvidelse af et outdoormærkes sortiment',
        body: 'Et outdoormærke gik ind i padlesport med et brandet touring-bræt. Vi udviklede brættet ud fra en grov skitse, opnåede prøvegodkendelse på 15 dage og producerede den første serie på 25–35 dage.',
        tags: ['Udvikling af bræt', 'Brandet grafik', 'Første produktionsserie'],
      },
      faqs: [
        {
          q: 'Kan I udvikle et SUP-produkt ud fra min ide?',
          a: 'Ja. Vi hjælper med at vurdere dine krav og udvikle en produktionsklar løsning — fra koncept og tegninger til en fysisk prøve.',
        },
        {
          q: 'Kan jeg tilpasse SUP-grafik og farver?',
          a: 'Ja. Specialgrafik, farver og brandelementer kan udvikles efter projektets krav.',
        },
        {
          q: 'Hvad er minimumsordren for specialfremstilling af SUP-bræt?',
          a: 'Specialproduktion i volumen starter fra 90–100+ stk pr. design, med pilotpartier fra 20–50 stk på eksisterende platforme. Større mængder giver bedre enhedspris, og ved genbestillinger bevares dit værktøj og dine designs.',
        },
        {
          q: 'Hvad kan tilpasses på et bræt?',
          a: 'Form og mål, konstruktion og materialer, grafik og logo, EVA-måttens udskæring, tilbehør (pagaj, pumpe, taske) og emballage.',
        },
        {
          q: 'Leverer I prøver før produktionen?',
          a: 'Ja — en fysisk prøve fremstilles og godkendes før enhver produktionsserie. Prøvetiden er normalt 7–12 dage.',
        },
        {
          q: 'Kan I klare det med kun mine brandmaterialer, uden et fuldt designteam?',
          a: 'Ja. Vores designteam udvikler produktionsklar grafik ud fra dit logo, dine brandfarver eller en grov ide.',
        },
      ],
      ctaLevel: 'hot',
      ctaLabel: 'Drøft dit projekt for specialfremstillede SUP-bræt',
    },
    {
      slug: 'private-label-sup',
      navLabel: 'SUP under eget mærke',
      metaTitle: 'Produktion af SUP under eget mærke | Specialfremstillet SUP-produktion',
      metaDescription:
        'iSupfactory understøtter produktion af SUP under eget mærke for eksisterende mærker og hjælper med at udvikle tilpassede SUP-produkter fra specifikation til produktion.',
      kicker: 'SUP under eget mærke',
      serviceType: 'Produktion af SUP under eget mærke',
      answer:
        'Eget mærke sætter dit brand på afprøvede, produktionsklare SUP-platforme uden nyt værktøj. Vælg en basemodel, anvend dit logo, dine farver, din emballage og dit tilbehør, og bestil fra 90–100+ stk pr. 150 m rulle (volumen). Det er den hurtigste og mindst risikofyldte vej at lancere; prøver tager 7–12 dage og produktion 25–35 dage efter ordren.',
      h1: 'Produktionsstøtte til SUP under eget mærke',
      intro: [
        'Produktion under eget mærke lader dig lancere en paddleboard-linje under dit eget brand uden at investere i værktøj eller en fabrik. Dit logo, dine farver og din emballage placeres på kvalitetsverificerede platforme, med mængder der vokser med efterspørgslen.',
        'Vi varetager produktsiden, så du kan fokusere på brandsiden: design, emballage og genbestillingsstyring håndteres af os.',
      ],
      scenario: {
        title: 'Du har et brand — og skal bruge et produkt under det',
        body: 'En brandidentitet uden lager. Du vil have en salgbar paddleboard-linje med dit navn, i en mængde der passer til dit stadie — fra en første valideringsbatch til gentagne flåder.',
      },
      pairs: [
        {
          problem: 'Branding kun på en klister — produktet ligner stadig generisk.',
          solution: 'Fuld brandintegration: brætgrafik, logo, EVA-måttens udskæring, brandet pagaj, pumpe, taske og emballage.',
        },
        {
          problem: 'De første ordrer tvinger dig til at købe hundredvis af enheder, du måske ikke sælger.',
          solution: 'Start med et pilotparti på 20–50 stk på en standardplatform, og skaler derefter til et serieparti fra 90–100+ stk — valider markedet, før du bestiller store batche.',
        },
        {
          problem: 'Udvikling af design og emballage føles uopnåelig.',
          solution: 'Vores designteam gør dine brandmaterialer om til produktionsklare bræt- og emballagefiler.',
        },
        {
          problem: 'Genbestillinger driver i kvalitet eller tilgængelighed.',
          solution: 'Værktøj og designs forbliver dine, og genbestillinger kører på de samme verificerede platforme i ensartet kvalitet.',
        },
      ],
      steps: [
        { title: 'Del dit brand', body: 'Send dit logo, dine farver og eventuelt eksisterende brandmateriale.' },
        { title: 'Udvikl grafik', body: 'Vi designer brætgrafik, EVA-udskæring og emballage omkring dit brand.' },
        { title: 'Godkend prøve', body: 'En fysisk prøve bekræfter farver, finish og emballage.' },
        { title: 'Producer og lever', body: 'Produktionen kører i din mængde, med QC og eksport håndteret ende til ende.' },
      ],
      caseStudy: {
        title: 'Nyt mærke, første produktionsordre',
        body: 'En sportsforhandler lancerede sin egen paddleboard-linje ud fra blot et logo. Vi udviklede det komplette bræt og emballagemateriale, producerede et første parti på 50 stk til markedstest og skalerede derefter til en fuld produktionsordre inden for en sæson.',
        tags: ['Brandudvikling', 'Emballagedesign', 'Skaleret produktion'],
      },
      faqs: [
        {
          q: 'Hvad er produktion af SUP under eget mærke?',
          a: 'Produktion af SUP under eget mærke giver virksomheder mulighed for at sælge SUP-produkter under eget brand med tilpassede specifikationer og produktionsstøtte.',
        },
        {
          q: 'Kan eksisterende mærker udvikle nye SUP-produkter?',
          a: 'Ja. iSupfactory understøtter mærker, der vil udvide sortimentet med SUP-produkter — produktselection, justering af specifikationer, specialgrafik og produktion.',
        },
        {
          q: 'Hvad er indeholdt i et program for SUP under eget mærke?',
          a: 'Dit brand på selve brættet — grafik, logo, EVA-måtte — samt valgfrit brandet pagaj, pumpe, rygsæk og emballage: et komplet salgbart produkt under dit navn.',
        },
        {
          q: 'Kan designet ændres mellem ordrer?',
          a: 'Ja. Når brandmaterialet er produktionsklart, kan genbestillinger opdatere grafik, farver eller emballage når som helst.',
        },
        {
          q: 'Vi har kun et logo. Kan I stadig hjælpe?',
          a: 'Ja. Vores designteam udvikler det komplette bræt- og emballagemateriale ud fra dit logo og dine brandfarver.',
        },
      ],
      ctaLevel: 'warm',
      ctaLabel: 'Drøft dit projekt for SUP under eget mærke',
    },
    {
      slug: 'resort-sup',
      navLabel: 'SUP til resorter',
      metaTitle: 'Specialfremstillet SUP-udstyr til resorter | Brandede bræt',
      metaDescription:
        'Skab specialfremstillet SUP-udstyr til resorter og hoteller med brandede bræt, tilbehør og produktionsstøtte fra iSupfactory.',
      kicker: 'SUP til resorter',
      serviceType: 'SUP-udstyr til resorter og hoteller',
      answer:
        'Vi leverer brandede oppustelige SUP-bræt til resorter og hoteller, bygget til dagligt gæstebrug: drop-stitch-konstruktion i højt tryk, forstærkede sømme og trinstyrede minimumsordrer fra 20–50 pilotstk op til 90–100+ til flåderullet. Brættene bærer dit logo og dine farver, og vi rådgiver om opbevaring, vedligeholdelse og genbestillingsplaner.',
      h1: 'Løsninger med specialfremstillet SUP-udstyr til resorter og hoteller',
      intro: [
        'Resortflåder af paddleboards skal klare dagligt gæstebrug, være nemme at opbevare mellem sæsoner og bære dit brand. Vi bygger holdbare, gæstvenlige bræt i dine farver og strukturerer flådeprogrammet omkring din drift.',
        'Mængder anbefales ud fra brugsmønstre, ikke gæt — og genbestillingsprogrammer holder flåden frisk sæson efter sæson.',
      ],
      scenario: {
        title: 'Du driver vandaktiviteter for gæster',
        body: 'Gæster forventer en mindeværdig oplevelse på vandet, og udstyret repræsenterer din ejendom. Du har brug for bræt, der er holdbare nok til daglig udlejning, nemme at opbevare og brandede, så de passer til resortet.',
      },
      pairs: [
        {
          problem: 'Gæsteflåder slides hurtigt ved daglig udlejning.',
          solution: 'Udlejningskvalitet med forstærkede kantlister og UV-resistente materialer bygget til gentagne sessioner.',
        },
        {
          problem: 'Opbevaringspladsen er begrænset uden for sæsonen.',
          solution: 'Opbevaringsvenlige oppustelige løsninger, der pakkes sammen i et skab, når sæsonen er slut.',
        },
        {
          problem: 'Udstyret ser generisk ud og ikke som din ejendom.',
          solution: 'Grafik på hele brættet, logoer og EVA-branding i resortets farver — inklusive brandet tilbehør.',
        },
        {
          problem: 'Udskiftning og fornyelse af flåden er ukoordineret.',
          solution: 'Et flåde-genbestillingsprogram med ensartet kvalitet, reservedelssupport og ærlig mængderådgivning.',
        },
      ],
      steps: [
        { title: 'Beskriv din drift', body: 'Gæstevolumen, strandlinje, opbevaring og sæsonens længde.' },
        { title: 'Få en flådeplan', body: 'Vi anbefaler brætstyper og mængder ud fra brugsmønstre.' },
        { title: 'Godkend brandet prøve', body: 'Dine farver og dit logo bekræftet på et fysisk bræt.' },
        { title: 'Modtag og vedligehold', body: 'Levering, reservedele og et genbestillingsprogram til fremtidige sæsoner.' },
      ],
      caseStudy: {
        title: 'Brandet gæsteflåde i kystresort',
        body: 'Et kystresort udstyrede sit strandprogram med 40 brandede oppustelige bræt i resortets farver, inklusive brandede pagaj og pumper. Brættene opbevares i et skab uden for sæsonen, og flåden blev fornyet efter den anden sæson i ensartet kvalitet.',
        tags: ['Brandet gæsteflåde', 'Opbevaring af oppustelige', 'Sæsonfornyelse'],
      },
      faqs: [
        {
          q: 'Kan resorter tilpasse SUP-udstyr med eget logo?',
          a: 'Ja. Resorter kan tilpasse grafik, farver og tilbehør efter projektets krav — fuld branding i ejendommens farvepalette.',
        },
        {
          q: 'Kan I levere flere SUP-enheder til resortdrift?',
          a: 'Ja. Produktionsløsninger kan udvikles ud fra flådens krav, fra en startflåde til sæsonbaserede fornyelsesprogrammer.',
        },
        {
          q: 'Hvor mange bræt har et resort brug for?',
          a: 'De fleste resorter starter med 20–50 bræt og skalerer med efterspørgslen. Vi anbefaler mængder ud fra dit gæstevolumen og din strandlinje, ikke gæt.',
        },
        {
          q: 'Er oppustelige bræt egnede til resortbrug?',
          a: 'Ja. Moderne oppustelige SUP-bræt er utroligt holdbare og meget nemmere at opbevare og transportere — det populære valg for resorter med begrænset opbevaringsplads.',
        },
        {
          q: 'Kan flåden bære vores logo og farver?',
          a: 'Ja — grafik på hele brættet, logotryk, EVA-branding og brandet tilbehør er alle en del af resortprogrammet.',
        },
      ],
      ctaLevel: 'warm',
      ctaLabel: 'Anmod om en SUP-løsning til dit resort',
    },
    {
      slug: 'club-sup',
      navLabel: 'Specialfremstillede holdbræt',
      metaTitle: 'Specialfremstillet SUP-udstyr til klubber og hold',
      metaDescription:
        'iSupfactory leverer løsninger til specialfremstillet SUP-udstyr for klubber, hold og arrangementer, inklusive grafik, specifikationer og produktionsstøtte.',
      kicker: 'Specialfremstillede holdbræt',
      serviceType: 'SUP-udstyr til klubber og hold',
      answer:
        'Klubber og hold får holdbare, ensartede flåder i deres farver: logoplacering, specialpagajlængder og tilbehørspakker på en standardiseret brætspecifikation, så reparationer og reservedele forbliver enkle på tværs af genbestillinger. Minimumsordren starter ved 90–100+ stk (volumen); pilotpartier fra 20–50 stk er tilgængelige for først at validere specifikationen.',
      h1: 'Specialfremstillet SUP-udstyr til klubber og hold',
      intro: [
        'Padleklubber har brug for bræt, der overlever daglig træning, ligner holdet og er ensartede på tværs af genbestillinger. Vi producerer specialfremstillede holdbræt med din klubnavn og dine farver, til flådevenlige priser.',
        'Klubprogrammer omfatter også den praktiske side: reservedele, reparationsvejledning og genbestillingssupport i samme kvalitet.',
      ],
      scenario: {
        title: 'Din klub driver træning og holdsessioner',
        body: 'Brættene bruges dagligt af medlemmer og repræsenterer klubben ved arrangementer og regattaer. Du vil have holdbart udstyr med klubbranding uden selv at håndtere fabriksrelationer.',
      },
      pairs: [
        {
          problem: 'Træningsbræt slides hurtigt ved gentagen brug.',
          solution: 'Forstærket konstruktion bygget til daglig professionel brug, med reparationsvejledning og reservedelssupport.',
        },
        {
          problem: 'Flåder ser uensartede ud og mangler branding.',
          solution: 'Klubnavn, farver og logo trykt på hvert bræt for en samlet holdflåde.',
        },
        {
          problem: 'Vækst i flåden betyder jagt på matchende lager.',
          solution: 'Genbestillinger kører på de samme verificerede platforme, så nye bræt matcher de eksisterende.',
        },
        {
          problem: 'Flådens budget er stramt.',
          solution: 'Flådepriser og et dedikeret kontaktpunkt til genbestillinger, dele og vedligeholdelsesspørgsmål.',
        },
      ],
      steps: [
        { title: 'Fortæl os om klubben', body: 'Antal medlemmer, sessionstyper og nuværende udstyr.' },
        { title: 'Vælg brætstyper', body: 'Trænings-, begynder- og holdformer tilpasset dit program.' },
        { title: 'Tilføj klubbranding', body: 'Dit navn, dine farver og dit logo på bræt og tilbehør.' },
        { title: 'Bestil og voks', body: 'Flådeleverance, reservedele og ensartede genbestillinger.' },
      ],
      caseStudy: {
        title: 'Fornyelse af klubflåde',
        body: 'En padleklub genpositionerede sit brand og fornyede sin flåde med 25 brandede træningsbræt og reservedele. Medlemmerne træner på ensartet udstyr, og klubben udvidede flåden den følgende sæson med en identisk genbestilling.',
        tags: ['Klubbranding', 'Flådefornyelse', 'Delesupport'],
      },
      faqs: [
        {
          q: 'Kan SUP-klubber tilpasse holdbræt?',
          a: 'Ja. Klubber kan tilpasse grafik, farver og produktkonfigurationer — klubnavn, farver og logo på hvert bræt.',
        },
        {
          q: 'Kan I understøtte arrangementbaseret SUP-produktion?',
          a: 'Ja. Produktionsplanlægning kan udvikles efter arrangementets krav, herunder særskilte udgaver af bræt og tilbehør.',
        },
        {
          q: 'Hvilke bræt er bedst til klubtræning?',
          a: 'Stabile, holdbare bræt tilpasset medlemmernes niveau — brede begynderformer til undervisning, touringformer til distancetræning.',
        },
        {
          q: 'Tilbyder I flådepriser til klubber?',
          a: 'Ja — volumenpriser gælder for klubflåder, med et dedikeret kontaktpunkt til genbestillinger, dele og vedligeholdelsesspørgsmål.',
        },
        {
          q: 'Kan beskadigede bræt repareres eller udskiftes?',
          a: 'Vi leverer reservedele, reparationsvejledning og genbestillingssupport, så flåden forbliver ensartet.',
        },
      ],
      ctaLevel: 'cold',
      ctaLabel: 'Drøft dit klubprojekt for SUP',
    },
    {
      slug: 'school-sup',
      navLabel: 'SUP-program for skoler',
      metaTitle: 'SUP-udstyr til skoler | Specialfremstillede paddleboards til undervisning',
      metaDescription:
        'Sikr dig sikre og pålidelige løsninger til SUP-udstyr for skoler, lejre og organisationer med specialfremstillet produktionsstøtte fra iSupfactory.',
      kicker: 'SUP-program for skoler',
      serviceType: 'SUP-udstyr til skoler og programmer',
      answer:
        'Til skoler og undervisningsprogrammer leverer vi stabile, begyndervenlige bræt med trykt sikkerhedsvejledning, polstrede pagaj og beskyttende tilbehør, dimensioneret efter dit klassetal og din opbevaring. Standardbatchen er 90–100+ stk pr. 150 m rulle med pilotpartier fra 20–50 stk; leveringstiderne understøtter skolens indkøbscyklus.',
      h1: 'Sikre og pålidelige SUP-løsninger til skoler og programmer',
      intro: [
        'Skoler driver padlesport på en anden måde: store hold, blandede niveauer, strenge sikkerhedskrav og undervisningsbudgetter. Vores skoleprogram tilbyder stabile, begyndervenlige bræt, pakker der passer til holdstørrelserne og rådgivning set fra instruktørens synsvinkel.',
        'Bulkleverance og genbestillingssupport holder udstyret til rådighed år efter år for nye elevhold.',
      ],
      scenario: {
        title: 'Du underviser elever i padlesport',
        body: 'Holdene er store, og niveauerne varierer. Du har brug for bræt, der er stabile og sikre for førstgangsgængere, mængder der matcher holdstørrelserne, og et udstyrsprogram, der passer ind i et skolebudget og en indkøbscyklus.',
      },
      pairs: [
        {
          problem: 'Eleverne har brug for maksimal stabilitet på vandet.',
          solution: 'Brede begynderbræt med høj volumen og flerspersonsbræt, der er tilgivende for førstgangsgængere.',
        },
        {
          problem: 'Holdstørrelserne kræver ensartet udstyr i skala.',
          solution: 'Programpriser til holdenes antal, med samme kvalitet på hvert eneste bræt.',
        },
        {
          problem: 'Instruktører varetager sikkerheden med begrænset hjælp.',
          solution: 'Brættene kommer med tydelig brugervejledning, og vi rådgiver om mængder og opstilling til dit vandområde.',
        },
        {
          problem: 'Udstyret skal holde gennem flere elevhold.',
          solution: 'Forstærket konstruktion samt reservedele og genbestillingssupport for et langt programliv.',
        },
      ],
      steps: [
        { title: 'Del dit program', body: 'Holdstørrelser, vandområde, instruktøropstilling og budgetcyklus.' },
        { title: 'Sammensæt pakken', body: 'Brætstyper og mængder matcher undervisningen, ikke gæt.' },
        { title: 'Godkend prøve', body: 'Kontroller stabilitet, konstruktion og finish på et fysisk bræt.' },
        { title: 'Lever og fornyt', body: 'Bulkleverance, reservedele og genbestillinger til nye elevhold.' },
      ],
      caseStudy: {
        title: 'Skolens vandsportsprogram',
        body: 'En skole lancerede et valgfag i padlesport med en begynderflåde på 15 bræt og flerspersonsbræt til de første lektioner. Instruktørerne rapporterede hurtigere fremgang i den første session på de stabile platforme, og programmet fornyede udstyret med en matchende genbestilling året efter.',
        tags: ['Begynderflåde', 'Programlancering', 'Fornyelsesordrer'],
      },
      faqs: [
        {
          q: 'Hvilket SUP-udstyr er egnet til skoler?',
          a: 'Valget af SUP-udstyr afhænger af brugernes alder, anvendelsesmiljø og programmets krav — brede, stabile bræt er standardvalget til undervisning.',
        },
        {
          q: 'Kan skoler tilpasse SUP-udstyr?',
          a: 'Ja. Skoler kan tilpasse grafik, farver og udstyrspakker efter deres program.',
        },
        {
          q: 'Hvilke bræt er bedst til SUP-undervisning i skoler?',
          a: 'Brede, stabile begynderbræt og flerspersonsbræt er ideelle — deres volumen gør dem tilgivende for førstgangsgængere og stabile med flere ryttere.',
        },
        {
          q: 'Kan mængderne matche vores holdstørrelser?',
          a: 'Ja — programpriser er bygget op omkring holdenes antal, og vi anbefaler antal ud fra dit vandområde og din rotation.',
        },
        {
          q: 'Arbejder I med skolernes indkøbsplaner?',
          a: 'Ja. Vi planlægger prøve- og produktionsleveringstider omkring skolens budget- og sæsoncyklusser.',
        },
      ],
      ctaLevel: 'cold',
      ctaLabel: 'Drøft dit SUP-program for skolen',
    },
  ],
  fi: [
    {
      slug: 'custom-sup',
      navLabel: 'Räätälöidyt SUP-laudat',
      metaTitle: 'Räätälöityjen SUP-lautojen kehittely | Mukautetut melontalaudat',
      metaDescription:
        'Kehitä räätälöityjä SUP-tuotteita iSupfactoryn kanssa. Tuemme tuotevaatimuksia, räätälöintiä, prototyyppejä ja tuotantoa yrityksille ja järjestöille.',
      kicker: 'Räätälöityjen SUP-lautojen valmistaja',
      serviceType: 'Räätälöityjen SUP-tuotteiden kehittely',
      answer:
        'Kehitämme räätälöityjä puhallettavia SUP-lautoja, kovalautoja ja lisävarusteita vaatimustesi mukaan — muoto, grafiikka, materiaalit ja pakkaus — suunnittelun, näytteen ja tuotannon kautta. Räätälöidut projektit alkavat 90–100+ kpl:stä 150 m rullaa kohti (vakiomäärä); näytteet lähetetään 7–12 päivässä ja tuotanto kestää 25–35 päivää vahvistetusta tilauksesta ja käsirahasta.',
      h1: 'Räätälöidyt SUP-tuotteet rakennettu vaatimustesi ympärille',
      intro: [
        'Tarvitset melontalaudoja, jotka on rakennettu spesifikaatiosi mukaan — muoto, grafiikka, materiaalit, pakkaus — ilman että ylläpidät omaa tehdasta. Olemme tuotantokumppani, joka ottaa vaatimuksesi vastaan ja palauttaa valmiin tuotteen.',
        'Jokaisesta projektista vastaa oma asiantuntija, joka johtaa suunnittelua, näytteitä, tuotantoa ja toimitusta, joten tiedät aina tilauksesi tilan.',
      ],
      scenario: {
        title: 'Tarvitset vaatimustesi mukaan rakennettuja lautoja',
        body: 'Tuotevaatimus — ei luettelon tuote. Sinun muotosi, sinun grafiikkasi, sinun laatutasoni, sinun pakkauksesi. Suunnittelemme, valmistamme näytteen ja tuotemme vakiintuneilla alustoilla joustavasti jo ensimmäisestä pienestä erästä alkaen.',
      },
      pairs: [
        {
          problem: 'Tehtaiden luettelot tarjoavat vain varastosuunnitelmia, joita ei voi muuttaa.',
          solution: 'Valmistamme lautoja sinun muodoillasi, grafiikkasi ja spesifikaatioillasi — ensimmäisestä näytteestä täysiin tuotantoeriin.',
        },
        {
          problem: 'Suuret vähimmäistilausmäärät sitovat varastoon ennen kuin markkina on validoitu.',
          solution: 'Räätälöity tuotanto alkaa 90–100+ kpl:stä mallia kohti, kun taas pilottierät olemassa olevilla alustoilla alkavat 20–50 kpl:stä — ensimmäiset erät pysyvät pieninä ja yksikköhinta reiluna.',
        },
        {
          problem: 'Sinulla ei ole omaa suunnittelu- tai tuotekehitystiimiä.',
          solution: 'Sisäinen suunnittelu- ja tuotekehitystiimimme muuntaa idean, piirroksen tai referenssilaudan tuotantovalmiiksi piirustuksiksi.',
        },
        {
          problem: 'Tuntematon tehtaan laatu ja hidas viestintä.',
          solution: 'Projektiasiantuntija omistaa näytteet, laadunvalvontavaiheet ja toimitusaikataulut alusta loppuun — yksi yhteyspiste, selkeät päivitykset.',
        },
      ],
      steps: [
        { title: 'Lähetä projektisi', body: 'Kerro vaatimuksistasi tai jaa piirroksia ja referenssikuvia.' },
        { title: 'Suunnittelu ja näyte', body: 'Kehitämme piirustukset ja lähetämme fyysisen näytteen 7–12 päivässä.' },
        { title: 'Hyväksy ja tuota', body: 'Hyväksynnän jälkeen tuotanto kestää 25–35 päivää ja laadunvalvonta tehdään useissa vaiheissa.' },
        { title: 'Toimita ja uuda tilaukset', body: 'Vienti kaikkialle maailmalle ammatillisin pakkauksin sekä uudelleentilaustuki yhtenäisellä laadulla.' },
      ],
      caseStudy: {
        title: 'Ulkoilubrändin valikoiman laajentaminen',
        body: 'Ulkoilubrändi astui melontailumaailmaan brändätyllä touring-laudalla. Kehitimme laudan alustavasta piirroksesta, saimme näytteen hyväksynnän 15 päivässä ja valmistimme ensimmäisen tuotantoerän 25–35 päivässä.',
        tags: ['Laudan kehittely', 'Brändätty grafiikka', 'Ensimmäinen tuotantoerä'],
      },
      faqs: [
        {
          q: 'Voitteko kehittää SUP-tuotteen minun ideastani?',
          a: 'Kyllä. Autamme arvioimaan vaatimuksiasi ja kehittämään tuotantovalmiin ratkaisun — konseptista ja piirustuksista fyysiseen näytteeseen.',
        },
        {
          q: 'Voinko räätälöidä SUP-grafiikkaa ja värejä?',
          a: 'Kyllä. Räätälöityä grafiikkaa, värejä ja brändielementtejä voidaan kehittää projektin vaatimusten mukaan.',
        },
        {
          q: 'Mikä on räätälöityjen SUP-lautojen vähimmäistilaus (MOQ)?',
          a: 'Räätälöity tuotanto alkaa 90–100+ kpl:stä mallia kohti, ja pilottierät olemassa olevilla alustoilla 20–50 kpl:stä. Suuremmat määrät antavat paremman yksikköhinnan, ja uusissa tilauksissa työkalusi ja mallisi säilyvät.',
        },
        {
          q: 'Mitä laudassa voidaan räätälöidä?',
          a: 'Muoto ja mitat, rakenne ja materiaalit, grafiikka ja logo, EVA-maton leikkaus, lisävarusteet (mela, pumppu, laukku) ja pakkaus.',
        },
        {
          q: 'Toimitatteko näytteitä ennen tuotantoa?',
          a: 'Kyllä — fyysinen näyte valmistetaan ja hyväksytään ennen mitään tuotantoerää. Näyteaika on normaalisti 7–12 päivää.',
        },
        {
          q: 'Voitteko tehdä sen pelkillä brändimateriaaleillani ilman omaa suunnittelutiimiä?',
          a: 'Kyllä. Suunnittelutiimimme kehittää tuotantovalmiin grafiikan logostasi, brändiväreistäsi tai alustavasta ideasta.',
        },
      ],
      ctaLevel: 'hot',
      ctaLabel: 'Keskustele räätälöityjen SUP-lautojen projektistasi',
    },
    {
      slug: 'private-label-sup',
      navLabel: 'SUP omalla brändillä',
      metaTitle: 'SUP-tuotanto omalla brändillä | Räätälöity SUP-valmistus',
      metaDescription:
        'iSupfactory tukee SUP-tuotantoa omalla brändillä nykyisille brändeille ja auttaa kehittämään räätälöidyt SUP-tuotteet spesifikaatiosta tuotantoon.',
      kicker: 'SUP omalla brändillä',
      serviceType: 'SUP-tuotanto omalla brändillä',
      answer:
        'Tuotanto omalla brändillä siirtää brändisi vakiintuneille, tuotantovalmiille SUP-alustoille ilman uusia työkaluja. Valitse perusmalli, sovella logosi, värisi, pakkaussi ja lisävarusteesi ja tilaa 90–100+ kpl:stä 150 m rullaa kohti (vakiomäärä). Nopein ja vähäriskisin tapa julkaista; näytteet 7–12 päivää ja tuotanto 25–35 päivää tilauksesta.',
      h1: 'Tuotantotuki SUP:lle omalla brändillä',
      intro: [
        'Tuotanto omalla brändillä antaa sinulle julkaista melontalaudasarjan omalla brändilläsi ilman investointia työkaluihin tai tehtaaseen. Logosi, värisi ja pakkauksesi sijoitetaan laadulla todennettuille alustoille, ja määrät kasvavat kysynnän mukaan.',
        'Hoidamme tuotepuolen, jotta voit keskittyä brändipuolelle: suunnittelun, pakkauksen ja uudelleentilausten hallinnan hoidamme me.',
      ],
      scenario: {
        title: 'Sinulla on brändi — ja tarvitset tuotteen sen alle',
        body: 'Brändi-identiteetti ilman valmista tuotevalikoimaa. Haluat myydä oman nimesi alla olevia melontalautoja määrässä, joka sopii vaiheeseesi — ensimmäisestä validointierästä toistuviin laivastoihin.',
      },
      pairs: [
        {
          problem: 'Brändäys on vain tarra — tuote näyttää yhä geneeriseltä.',
          solution: 'Täysi brändintegrointi: laudan grafiikka, logo, EVA-maton leikkaus, brändätty mela, pumppu, laukku ja pakkaus.',
        },
        {
          problem: 'Ensimmäiset tilaukset pakottavat ostamaan satoja yksiköitä, joita et välttämättä myy.',
          solution: 'Aloita 20–50 kpl:n pilottierällä vakiomallilla ja skaalaa sitten 90–100+ kpl:n tuotantoerään — validoi markkina ennen suuria eriä.',
        },
        {
          problem: 'Suunnittelun ja pakkauksen kehittäminen tuntuu saavuttamattomalta.',
          solution: 'Suunnittelutiimimme muuntaa brändimateriaalisi tuotantovalmiiksi lauta- ja pakkaustiedostoiksi.',
        },
        {
          problem: 'Uudelleentilaukset ajautuvat laadun tai saatavuuden suhteen.',
          solution: 'Työkalut ja mallit pysyvät sinulla, ja uudelleentilaukset ajetaan samoilla todennetuilla alustoilla yhtenäisellä laadulla.',
        },
      ],
      steps: [
        { title: 'Jaa brändisi', body: 'Lähetä logosi, värisi ja mahdolliset olemassa olevat brändimateriaalit.' },
        { title: 'Kehitä grafiikka', body: 'Suunnittelemme laudan grafiikan, EVA-leikkauksen ja pakkauksen brändisi ympärille.' },
        { title: 'Hyväksy näyte', body: 'Fyysinen näyte vahvistaa värit, viimeistelyn ja pakkauksen.' },
        { title: 'Tuota ja toimita', body: 'Tuotanto ajetaan määrääsi, ja laadunvalvonta sekä vienti hoidetaan alusta loppuun.' },
      ],
      caseStudy: {
        title: 'Uusi brändi, ensimmäinen tuotantotilaus',
        body: 'Urheilukauppa julkaisi oman melontalaudasarjansa ainoastaan logosta. Kehitimme koko laudan ja pakkausmateriaalin, valmistimme markkinatestiä varten 50 kpl:n ensimmäisen erän ja skaalasimme sitten täyteen tuotantotilaukseen yhden kauden aikana.',
        tags: ['Brändin kehittäminen', 'Pakkauksen suunnittelu', 'Skaalautunut tuotanto'],
      },
      faqs: [
        {
          q: 'Mitä on SUP-tuotanto omalla brändillä?',
          a: 'SUP-tuotanto omalla brändillä antaa yrityksille mahdollisuuden myydä SUP-tuotteita omalla brändillään räätälöityjin spesifikaatioin ja tuotantotukineen.',
        },
        {
          q: 'Voivat nykyiset brändit kehittää uusia SUP-tuotteita?',
          a: 'Kyllä. iSupfactory tukee brändejä, jotka haluavat laajentaa valikoimaansa SUP-tuotteilla — tuotevalikoima, spesifikaatioiden hienosäätö, räätälöity grafiikka ja tuotanto.',
        },
        {
          q: 'Mitä ohjelma omalla brändillä sisältää?',
          a: 'Brändisi itse laudassa — grafiikka, logo, EVA-matto — sekä valinnaisesti brändätty mela, pumppu, reppute ja pakkaus: valmis myytävä tuote nimelläsi.',
        },
        {
          q: 'Voiko suunnittelua muuttaa tilausten välillä?',
          a: 'Kyllä. Kun brändimateriaali on tuotantovalmis, uudelleentilauksissa voi päivittää grafiikkaa, värejä tai pakkausta milloin tahansa.',
        },
        {
          q: 'Meillä on vain logo. Voitteko silti auttaa?',
          a: 'Kyllä. Suunnittelutiimimme kehittää koko lauta- ja pakkausmateriaalin logostasi ja brändiväreistäsi.',
        },
      ],
      ctaLevel: 'warm',
      ctaLabel: 'Keskustele omalla brändillä tehtävästä SUP-projektistasi',
    },
    {
      slug: 'resort-sup',
      navLabel: 'SUP-resorteille',
      metaTitle: 'Räätälöity SUP-varusteet resorteille | Brändätyt laudat',
      metaDescription:
        'Luo räätälöityjä SUP-varusteita resorteille ja hotelleille iSupfactoryn brändätyillä laudoilla, lisävarusteilla ja tuotantotuella.',
      kicker: 'SUP-resorteille',
      serviceType: 'SUP-varusteet resorteille ja hotelleille',
      answer:
        'Toimitamme brändättyjä puhallettavia SUP-lautoja resorteille ja hotelleille päivittäiseen asiakaskäyttöön rakennettuina: korkean paineen drop-stitch-rakenne, vahvistetut saumat ja porrastetut vähimmäistilausmäärät 20–50 pilottikpl:stä 90–100+ kpl:een laivastorullaa kohti. Lautoissa on logosi ja värisi, ja neuvomme säilytyksestä, kunnossapidosta ja uudelleentilausohjelmista.',
      h1: 'Räätälöityjen SUP-varusteiden ratkaisut resorteille ja hotelleille',
      intro: [
        'Resorttien melontalaivastojen on kestettävä päivittäistä asiakaskäyttöä, oltava helppoja säilyttää kausien välillä ja kantaa brändisi. Rakennamme kestäviä, asiakaskuntaan sopivia lautoja väreissäsi ja järjestämme laivasto-ohjelman toimintasi ympärille.',
        'Määrät suositellaan käyttömallien perusteella, ei arvattelemalla — ja uudelleentilausohjelmat pitävät laivaston tuoreena kausi toisensa jälkeen.',
      ],
      scenario: {
        title: 'Tarjoat asiakkaille vesiliikuntaa',
        body: 'Asiakkaat odottavat muistettavaa kokemusta vedellä, ja varusteet edustavat kiinteistöäsi. Tarvitset lautoja, jotka kestävät päivittäistä vuokrausta, ovat helposti säilytettävissä ja brändättyjä, jotta ne sopivat resorttiin.',
      },
      pairs: [
        {
          problem: 'Asiakaslaivastot kuluvat nopeasti päivittäisessä vuokrauksessa.',
          solution: 'Vuokrauslaatuinen rakenne vahvistetuilla reunalistoilla ja UV-kestävillä materiaaleilla, jotka on suunniteltu toistuviin käyttökerroksiin.',
        },
        {
          problem: 'Säilytystila on rajallinen kausien ulkopuolella.',
          solution: 'Säilytysystävälliset puhallettavat ratkaisut, jotka pakataan kausikauteen loputtua yhteen kaappiin.',
        },
        {
          problem: 'Varusteet näyttävät geneerisiltä eivätkä edusta kiinteistöäsi.',
          solution: 'Grafiikka koko laudan pinnassa, logot ja EVA-brändäys resortin väreissä — brändätyt lisävarusteet mukaan lukien.',
        },
        {
          problem: 'Laivaston vaihto ja uudistus ovat koordinoimattomia.',
          solution: 'Laivaston uudelleentilausohjelma yhtenäisellä laadulla, varaosatuki ja rehellinen määräsuositus.',
        },
      ],
      steps: [
        { title: 'Kuvaile toimintasi', body: 'Asiakasmäärät, ranta, säilytys ja kauden pituus.' },
        { title: 'Hanki laivastosuunnitelma', body: 'Suosittelemme laudatyyppejä ja määriä käyttömallien perusteella.' },
        { title: 'Hyväksy brändätty näyte', body: 'Värit ja logosi vahvistettuna fyysisellä laudalla.' },
        { title: 'Vastaanota ja ylläpidä', body: 'Toimitus, varaosat ja uudelleentilausohjelma tulevia kausia varten.' },
      ],
      caseStudy: {
        title: 'Brändätty asiakaslaivasto rannikkoresortissa',
        body: 'Rannikkoresortti varusti rantaohjelmansa 40 brändätyllä puhallettavalla laudalla resortin väreissä, mukaan lukien brändätyt melat ja pumput. Laudat säilytetään kaapissa kausien ulkopuolella, ja laivasto uudistettiin toisen kauden jälkeen yhtenäisellä laadulla.',
        tags: ['Brändätty asiakaslaivasto', 'Puhallettavien säilytys', 'Kausiuudistus'],
      },
      faqs: [
        {
          q: 'Voivat resortit räätälöidä SUP-varusteita omalla logollaan?',
          a: 'Kyllä. Resortit voivat räätälöidä grafiikkaa, värejä ja lisävarusteita projektin vaatimusten mukaan — täysi brändäys kiinteistön värivalikoimassa.',
        },
        {
          q: 'Voitteko toimittaa useita SUP-yksiköitä resortin toimintaan?',
          a: 'Kyllä. Tuotantoratkaisut voidaan kehittää laivaston vaatimusten mukaan aina alkulaivastosta kausipohjaisiin uudistusohjelmiin.',
        },
        {
          q: 'Kuinka monta lautaa resortti tarvitsee?',
          a: 'Useimmat resortit aloittavat 20–50 laudalla ja skaalaavat kysynnän mukaan. Suosittelemme määriä asiakasmäärän ja rantan pituuden perusteella, emme arvattelemalla.',
        },
        {
          q: 'Sopivatko puhallettavat laudat resorttikäyttöön?',
          a: 'Kyllä. Modernit puhallettavat SUP-laudat ovat äärimmäisen kestäviä ja huomattavasti helpommin säilytettävissä ja kuljettavissa — suosittu valinta resorteille, joilla on rajallinen säilytystila.',
        },
        {
          q: 'Voiko laivasto kantaa logomme ja värimme?',
          a: 'Kyllä — koko laudan grafiikka, logopainatus, EVA-brändäys ja brändätyt lisävarusteet kuuluvat kaikki resorttiohjelmaan.',
        },
      ],
      ctaLevel: 'warm',
      ctaLabel: 'Pyydä resortillesi SUP-ratkaisu',
    },
    {
      slug: 'club-sup',
      navLabel: 'Räätälöidyt joukkuelaudat',
      metaTitle: 'Räätälöidyt SUP-varusteet seuroille ja joukkueille',
      metaDescription:
        'iSupfactory toimittaa räätälöityjä SUP-varusteratkaisuja seuroille, joukkueille ja tapahtumille, mukaan lukien grafiikka, spesifikaatiot ja tuotantotuen.',
      kicker: 'Räätälöidyt joukkuelaudat',
      serviceType: 'SUP-varusteet seuroille ja joukkueille',
      answer:
        'Seurat ja joukkueet saavat kestävät, yhtenäiset laivastot omissa väreissään: logon sijainti, räätälöidut melojen pituudet ja lisävarustepaketit vakiintuneella lautaspesifikaatiolla, joten korjaukset ja varaosat pysyvät yksinkertaisina myös uudelleentilauksissa. Vähimmäistilaus alkaa 90–100+ kpl:stä (vakiomäärä); erittelyä varten on saatavilla 20–50 kpl:n pilottierät.',
      h1: 'Räätälöidyt SUP-varusteet seuroille ja joukkueille',
      intro: [
        'Melontaseuroilla on laudat, jotka kestävät päivittäistä harjoittelua, näyttävät joukkueelta ja ovat yhtenäisiä uudelleentilausten yli. Valmistamme räätälöityjä joukkuelaudoja seurasi nimellä ja väreilläsi laivastoystävällisin hinnoin.',
        'Seuraohjelmat sisältävät myös käytännön puolen: varaosat, korjausohjeet ja uudelleentilaustuki yhtenäisellä laadulla.',
      ],
      scenario: {
        title: 'Seura järjestää harjoituksia ja joukkueita',
        body: 'Laudat ovat jäsenten päivittäisessä käytössä ja edustavat seuraa tapahtumissa ja regatassa. Haluat kestävää ja seurabrändättyä varustetta ilman että hoidat itse tehtassuhteita.',
      },
      pairs: [
        {
          problem: 'Harjoituslaudat kuluvat nopeasti toistuvassa käytössä.',
          solution: 'Vahvistettu rakenne päivittäiseen ammattikäyttöön sekä korjausohjeet ja varaosatuki.',
        },
        {
          problem: 'Laivastot näyttävät epäyhtenäisiltä ja vailla brändäystä.',
          solution: 'Seuran nimi, värit ja logo painetaan jokaiselle laudalle, jotta joukkueen laivasto näyttää yhtenäiseltä.',
        },
        {
          problem: 'Laivaston kasvu tarkoittaa sopivan varaston metsästystä.',
          solution: 'Uudelleentilaukset ajetaan samoilla todennetuilla alustoilla, joten uudet laudat vastaavat vanhoja.',
        },
        {
          problem: 'Laivaston budjetti on tiukka.',
          solution: 'Laivastohinnat sekä oma yhteyspiste uudelleentilauksia, osia ja ylläpitoa varten.',
        },
      ],
      steps: [
        { title: 'Kerro seurasta', body: 'Jäsenmäärä, harjoitustyypit ja nykyiset varusteet.' },
        { title: 'Valitse laudatyypit', body: 'Harjoitus-, aloittelijan ja joukkuelaudat ohjelmaasi mukaan.' },
        { title: 'Lisää seurabrändäys', body: 'Nimesi, värit ja logosi laudalla ja lisävarusteissa.' },
        { title: 'Tilaa ja kasva', body: 'Laivastotoimitus, varaosat ja yhtenäiset uudelleentilaukset.' },
      ],
      caseStudy: {
        title: 'Seuralaivaston uudistus',
        body: 'Melontaseura uudisti brändinsä ja vaihtoi laivastonsa 25 brändättyyn harjoituslautaan sekä varaosiin. Jäsenet harjoittelevat yhtenäisellä varusteella, ja seura laajensi laivastoaan seuraavana kautena identtisellä uudelleentilauksella.',
        tags: ['Seurabrändäys', 'Laivaston uudistus', 'Osatuki'],
      },
      faqs: [
        {
          q: 'Voivat SUP-seurat räätälöidä joukkuelaudoja?',
          a: 'Kyllä. Seurat voivat räätälöidä grafiikkaa, värejä ja tuotekokoonpanoja — seuran nimi, värit ja logo jokaiselle laudalle.',
        },
        {
          q: 'Voitteko tukea tapahtumakohtaista SUP-tuotantoa?',
          a: 'Kyllä. Tuotannon suunnittelua voidaan kehittää tapahtuman vaatimusten mukaan, mukaan lukien erilliset lauta- ja lisävarusteversiot.',
        },
        {
          q: 'Mitkä laudat sopivat parhaiten seuraharjoitteluun?',
          a: 'Vakaat, kestävät laudat jäsenten tason mukaan — leveät aloittelijamallit opetukseen ja touring-mallit matkatreeniin.',
        },
        {
          q: 'Tarjoatteko seuroille laivastohintoja?',
          a: 'Kyllä — volyymihinnat koskevat seuralaivastoja, ja tarjoamme oman yhteyspisteen uudelleentilauksia, osia ja ylläpitoa varten.',
        },
        {
          q: 'Voiko vahingoittuneita lautoja korjata tai vaihtaa?',
          a: 'Toimitamme varaosia, korjausohjeita ja uudelleentilaustukea, jotta laivasto pysyy yhtenäisenä.',
        },
      ],
      ctaLevel: 'cold',
      ctaLabel: 'Keskustele seuran SUP-projektistasi',
    },
    {
      slug: 'school-sup',
      navLabel: 'SUP-ohjelma kouluille',
      metaTitle: 'SUP-varusteet kouluille | Räätälöidyt opetusmelontalaudat',
      metaDescription:
        'Hanki turvallisia ja luotettavia SUP-varusteratkaisuja kouluille, leireille ja järjestöille iSupfactoryn räätälöidyllä tuotantotuella.',
      kicker: 'SUP-ohjelma kouluille',
      serviceType: 'SUP-varusteet kouluille ja ohjelmille',
      answer:
        'Kouluille ja opetusohjelmille toimitamme vakaat, aloittelijaystävälliset laudat painetulla turvaoppaalla, pehmustetuilla meloilla ja suojaavilla lisävarusteilla, mitoitettuina luokkakoon ja säilytyksesi mukaan. Vakiomääräerä on 90–100+ kpl 150 m rullaa kohti ja pilottierät 20–50 kpl:stä; toimitusajat tukevat koulun hankintasykliä.',
      h1: 'Turvalliset ja luotettavat SUP-ratkaisut kouluille ja ohjelmille',
      intro: [
        'Koulut harjoittelevat melontaa eri tavalla: suuret ryhmät, vaihtelevat tasot, tiukat turvallisuusvaatimukset ja opetusbudjetit. Kouluohjelmamme tarjoaa vakaat, aloittelijaystävälliset laudat, ryhmäkokoihin sopivat paketit ja neuvottelu ohjaajan näkökulmasta.',
        'Erätilaus ja uudelleentilaustuki pitävät varusteet käytettävissä vuosi toisensa jälkeen uusille oppilasryhmille.',
      ],
      scenario: {
        title: 'Opetat oppilaita melonnassa',
        body: 'Ryhmät ovat suuria ja tasot vaihtelevat. Tarvitset vakaita ja turvallisia lautoja ensimmäistä kertaa meloaville, määriä, jotka vastaavat ryhmien kokoa, ja varusteohjelman, joka mahtuu koulun budjettiin ja hankintasykliin.',
      },
      pairs: [
        {
          problem: 'Oppilaat tarvitsevat vedellä maksimaalista vakautta.',
          solution: 'Leveät, suuren tilavuuden aloittelijalaudat ja monihenkilölaudat, jotka ovat anteeksiantavia aloittelijalle.',
        },
        {
          problem: 'Ryhmäkoot vaativat yhtenäistä varustetta samassa mittakaavassa.',
          solution: 'Ohjelmahinnat ryhmien määrän mukaan, ja laatu sama jokaisella laudalla.',
        },
        {
          problem: 'Ohjaajat huolehtivat turvallisuudesta vähäisin keinoin.',
          solution: 'Lautoihin toimitetaan selkeä käyttöopas, ja neuvomme määristä ja järjestelyistä alueellesi.',
        },
        {
          problem: 'Varusteiden on kestettävä useiden oppilasryhmien läpi.',
          solution: 'Vahvistettu rakenne sekä varaosat ja uudelleentilaustuki pitkälle ohjelman eliniälle.',
        },
      ],
      steps: [
        { title: 'Kerro ohjelmastasi', body: 'Ryhmäkoot, vesialue, ohjaajien määrä ja budjettisykli.' },
        { title: 'Kokoa paketti', body: 'Laudatyypit ja määrät valitaan opetukseen, ei arvattelemalla.' },
        { title: 'Hyväksy näyte', body: 'Tarkista vakaus, rakenne ja viimeistely fyysisellä laudalla.' },
        { title: 'Toimita ja uuda', body: 'Erätilaus, varaosat ja uudelleentilaukset uusille oppilasryhmille.' },
      ],
      caseStudy: {
        title: 'Koulun vesiliikuntaohjelma',
        body: 'Koulu lanseerasi melontailun valinnaisena aineena 15 aloittelijalaudan ja ensimmäisiin oppitunteihin monihenkilölaudan avulla. Ohjaajat raportoivat nopeamman edistymisen ensimmäisellä oppitunnilla vakaiden alustojen ansiosta, ja ohjelma uudisti varusteensa sopivalla uudelleentilauksella seuraavana vuonna.',
        tags: ['Aloittelijalaivasto', 'Ohjelman lanseeraus', 'Uudelleentilaukset'],
      },
      faqs: [
        {
          q: 'Millainen SUP-varuste sopii kouluille?',
          a: 'SUP-varusteen valinta riippuu käyttäjien iästä, käyttöympäristöstä ja ohjelman vaatimuksista — leveät, vakaat laudat ovat opetukseen vakiintunut valinta.',
        },
        {
          q: 'Voivatko koulut räätälöidä SUP-varusteita?',
          a: 'Kyllä. Koulut voivat räätälöidä grafiikkaa, värejä ja varustepaketteja ohjelmansa mukaan.',
        },
        {
          q: 'Mitkä laudat sopivat parhaiten SUP-opetukseen kouluissa?',
          a: 'Leveät, vakaat aloittelijalaudat ja monihenkilölaudat ovat ihanteellisia — niiden tilavuus tekee niistä anteeksiantavia aloittelijalle ja vakaita useille melojille.',
        },
        {
          q: 'Voivatko määrät vastata ryhmiemme kokoa?',
          a: 'Kyllä — ohjelmahinnat rakentuvat ryhmien määrän ympärille, ja suosittelemme määrää alueesi ja vaihtosi mukaan.',
        },
        {
          q: 'Työskentelettekö koulujen hankintasuunnitelmien kanssa?',
          a: 'Kyllä. Suunnittelemme näyte- ja tuotantotoimituksen ajankohdat koulun budjetti- ja kausisykleihin.',
        },
      ],
      ctaLevel: 'cold',
      ctaLabel: 'Keskustele koulun SUP-ohjelmastasi',
    },
  ],
  ru: [
    {
      slug: 'custom-sup',
      navLabel: 'Индивидуальные SUP-доски',
      metaTitle: 'Разработка индивидуальных SUP-досок | Производство досок на заказ',
      metaDescription:
        'Разработайте индивидуальные SUP-продукты вместе с iSupfactory. Мы поддерживаем требования к продукту, кастомизацию, прототипы и производство для компаний и организаций.',
      kicker: 'Производитель индивидуальных SUP-досок',
      serviceType: 'Разработка индивидуальных SUP-продуктов',
      answer:
        'Мы производим индивидуальные надувные SUP-доски, жёсткие доски и аксессуары по вашим требованиям — форму, графику, материалы и упаковку, — от проектирования до образца и серийного производства. Индивидуальные проекты начинаются с 90–100+ шт на 150 м рулона (стандартный объём); образцы отправляются за 7–12 дней, а производство занимает 25–35 дней после подтверждения заказа и аванса.',
      h1: 'Индивидуальные SUP-продукты, построенные вокруг ваших требований',
      intro: [
        'Вам нужны гребные доски, построенные по вашей спецификации — форма, графика, материалы, упаковка, — без необходимости содержать собственный завод. Мы выступаем производственным партнёром, который принимает ваши требования и возвращает готовый продукт.',
        'За каждый проект отвечает собственный специалист, который ведёт проектирование, образцы, производство и отгрузку, поэтому вы всегда знаете статус вашего заказа.',
      ],
      scenario: {
        title: 'Вам нужны доски, построенные по вашим требованиям',
        body: 'Требование к продукту, а не позиция из каталога. Ваша форма, ваша графика, ваш уровень качества, ваша упаковка. Мы проектируем, изготавливаем образец и производим продукцию на устоявшихся платформах гибко, начиная уже с первой небольшой партии.',
      },
      pairs: [
        {
          problem: 'Заводские каталоги предлагают только складские конструкции, которые невозможно изменить.',
          solution: 'Мы производим доски по вашим форме, графике и спецификации — от первого образца до полной серии.',
        },
        {
          problem: 'Крупные минимальные заказы привязывают оборотные средства до того, как рынок подтверждён.',
          solution: 'Индивидуальное производство начинается с 90–100+ шт на форму, тогда как пилотные партии на существующих платформах — с 20–50 шт, — поэтому первые партии остаются небольшими, а цена за единицу разумной.',
        },
        {
          problem: 'У вас нет собственной команды проектирования или разработки продукта.',
          solution: 'Наша внутренняя команда проектирования и разработки превращает идею, эскиз или доску-референс в готовые к производству чертежи.',
        },
        {
          problem: 'Неизвестное качество завода и медленная коммуникация.',
          solution: 'Специалист по проекту отвечает за образцы, этапы контроля качества и сроки поставки от начала до конца — одна точка контакта и понятные обновления.',
        },
      ],
      steps: [
        { title: 'Пришлите ваш проект', body: 'Опишите требования или поделитесь чертежами и референсными изображениями.' },
        { title: 'Проектирование и образец', body: 'Мы разрабатываем чертежи и отправляем физический образец за 7–12 дней.' },
        { title: 'Утверждение и производство', body: 'После утверждения производство занимает 25–35 дней, а контроль качества проводится в несколько этапов.' },
        { title: 'Поставка и повторные заказы', body: 'Экспорт в любую страну с профессиональной упаковкой и поддержка повторных заказов при неизменном качестве.' },
      ],
      caseStudy: {
        title: 'Расширение ассортимента бренда активного отдыха',
        body: 'Бренд активного отдыха вышел на рынок гребного спорта с туринговой доской под своим брендом. Мы разработали доску по исходному эскизу, получили утверждение образца за 15 дней и изготовили первую серию за 25–35 дней.',
        tags: ['Разработка доски', 'Брендированная графика', 'Первая серия'],
      },
      faqs: [
        {
          q: 'Можете ли вы разработать SUP-продукт по моей идее?',
          a: 'Да. Мы поможем оценить ваши требования и разработать готовое к производству решение — от концепции и чертежей до физического образца.',
        },
        {
          q: 'Могу ли я кастомизировать графику и цвета SUP?',
          a: 'Да. Индивидуальную графику, цвета и элементы бренда можно разработать под требования вашего проекта.',
        },
        {
          q: 'Каков минимальный заказ (MOQ) индивидуальных SUP-досок?',
          a: 'Индивидуальное производство начинается с 90–100+ шт на форму, а пилотные партии на существующих платформах — с 20–50 шт. Большие объёмы дают лучшую цену за единицу, а при повторных заказах ваши инструменты и формы сохраняются.',
        },
        {
          q: 'Что можно кастомизировать в доске?',
          a: 'Форму и размеры, конструкцию и материалы, графику и логотип, раскрой настила EVA, аксессуары (весло, насос, сумка) и упаковку.',
        },
        {
          q: 'Поставляете ли вы образцы до производства?',
          a: 'Да — физический образец изготавливается и утверждается до любой серии. Срок изготовления образца обычно составляет 7–12 дней.',
        },
        {
          q: 'Можете ли вы сделать это только по моим бренд-материалам, без собственной команды дизайнеров?',
          a: 'Да. Наша команда дизайна разработает готовую к производству графику на основе вашего логотипа, фирменных цветов или предварительной идеи.',
        },
      ],
      ctaLevel: 'hot',
      ctaLabel: 'Обсудите проект индивидуальных SUP-досок',
    },
    {
      slug: 'private-label-sup',
      navLabel: 'SUP под собственной маркой',
      metaTitle: 'Производство SUP под собственной маркой | Индивидуальное производство SUP',
      metaDescription:
        'iSupfactory поддерживает производство SUP под собственной маркой для действующих брендов и помогает разработать индивидуальные SUP-продукты — от спецификации до производства.',
      kicker: 'SUP под собственной маркой',
      serviceType: 'Производство SUP под собственной маркой',
      answer:
        'Производство под собственной маркой переносит ваш бренд на устоявшиеся, готовые к производству SUP-платформы без новых инструментов. Выберите базовую модель, адаптируйте логотип, цвета, упаковку и аксессуары и закажите от 90–100+ шт на 150 м рулона (стандартный объём). Это самый быстрый и наименее затратный способ выхода на рынок; образцы — 7–12 дней, производство — 25–35 дней с момента заказа.',
      h1: 'Производственная поддержка SUP под собственной маркой',
      intro: [
        'Производство под собственной маркой позволяет вам выпускать серию гребных досок под своим именем, не вкладываясь в инструменты и производство. Ваш логотип, цвета и упаковка наносятся на платформы с подтверждённым качеством, а объёмы растут вместе со спросом.',
        'Продуктовую часть берём на себя, чтобы вы могли сосредоточиться на бренде: проектирование, упаковку и управление повторными заказами ведём мы.',
      ],
      scenario: {
        title: 'У вас есть бренд — и вам нужен продукт под ним',
        body: 'Идентичность бренда без готового продуктового ассортимента. Вы хотите продавать гребные доски под собственным именем в объёме, подходящем вашему этапу, — от первой валидационной партии до повторяющихся поставок.',
      },
      pairs: [
        {
          problem: 'Брендинг — это только наклейка: продукт по-прежнему выглядит типовым.',
          solution: 'Полная интеграция бренда: графика на доске, логотип, раскрой настила EVA, брендированные весло, насос, сумка и упаковка.',
        },
        {
          problem: 'Первые заказы вынуждают покупать сотни единиц, которые вы можете не продать.',
          solution: 'Начните с пилотной партии 20–50 шт на стандартной модели, затем масштабируйтесь до серии 90–100+ шт, — подтвердите рынок до крупных партий.',
        },
        {
          problem: 'Разработка дизайна и упаковки кажется недостижимой задачей.',
          solution: 'Наша команда дизайна превращает бренд-материалы в готовые к производству файлы доски и упаковки.',
        },
        {
          problem: 'Повторные заказы расходятся по качеству или доступности.',
          solution: 'Инструменты и формы остаются у вас, а повторные заказы идут на тех же подтверждённых платформах с неизменным качеством.',
        },
      ],
      steps: [
        { title: 'Передайте свой бренд', body: 'Пришлите логотип, цвета и имеющиеся бренд-материалы.' },
        { title: 'Разработайте графику', body: 'Мы разрабатываем графику доски, раскрой EVA и упаковку вокруг вашего бренда.' },
        { title: 'Утвердите образец', body: 'Физический образец подтверждает цвета, отделку и упаковку.' },
        { title: 'Произведите и отгрузите', body: 'Производство идёт в вашем объёме, а контроль качества и экспорт ведутся от начала до конца.' },
      ],
      caseStudy: {
        title: 'Новый бренд, первый производственный заказ',
        body: 'Магазин спортивных товаров выпустил собственную серию гребных досок на основе одного только логотипа. Мы разработали всю доску и упаковку, изготовили первую партию 50 шт для теста рынка и затем за один сезон масштабировались до полного производственного заказа.',
        tags: ['Разработка бренда', 'Дизайн упаковки', 'Масштабирование производства'],
      },
      faqs: [
        {
          q: 'Что такое производство SUP под собственной маркой?',
          a: 'Производство SUP под собственной маркой позволяет компаниям продавать SUP-продукцию под своим брендом с индивидуальными спецификациями и производственной поддержкой.',
        },
        {
          q: 'Могут ли действующие бренды выпускать новые SUP-продукты?',
          a: 'Да. iSupfactory поддерживает бренды, которые хотят расширить ассортимент продуктами SUP: продуктовую линейку, точную подгонку спецификаций, индивидуальную графику и производство.',
        },
        {
          q: 'Что входит в программу под собственной маркой?',
          a: 'Ваш бренд на самой доске — графика, логотип, настил EVA, — а также опционально брендированные весло, насос, сумка и упаковка: готовый к продаже продукт под вашим именем.',
        },
        {
          q: 'Можно ли менять дизайн между заказами?',
          a: 'Да. Когда бренд-материалы готовы к производству, при повторных заказах графику, цвета или упаковку можно обновлять в любой момент.',
        },
        {
          q: 'У нас есть только логотип. Вы всё равно сможете помочь?',
          a: 'Да. Наша команда дизайна разработает весь комплект материалов доски и упаковки на основе вашего логотипа и фирменных цветов.',
        },
      ],
      ctaLevel: 'warm',
      ctaLabel: 'Обсудите проект SUP под собственной маркой',
    },
    {
      slug: 'resort-sup',
      navLabel: 'SUP для курортов',
      metaTitle: 'Индивидуальное SUP-оснащение для курортов | Брендированные доски',
      metaDescription:
        'Создайте индивидуальное SUP-оснащение для курортов и отелей с брендированными досками, аксессуарами и производственной поддержкой iSupfactory.',
      kicker: 'SUP для курортов',
      serviceType: 'SUP-оснащение для курортов и отелей',
      answer:
        'Мы поставляем брендированные надувные SUP-доски курортам и отелям для ежедневной эксплуатации гостями: высокодавленные конструкции drop-stitch, усиленные швы и ступенчатые минимальные заказы от 20–50 пилотных шт до 90–100+ шт на парковую партию. На досках размещаются ваш логотип и ваши цвета, а мы консультируем по хранению, обслуживанию и программам повторных заказов.',
      h1: 'Решения по индивидуальному SUP-оснащению для курортов и отелей',
      intro: [
        'Гребные парки курортов должны выдерживать ежедневную эксплуатацию гостями, легко храниться между сезонами и нести ваш бренд. Мы производим прочные доски, подходящие гостям, в ваших цветах и выстраиваем программу поставки парка вокруг вашей работы.',
        'Объёмы рекомендуются на основе модели использования, а не на глаз, — а программы повторных заказов сохраняют парк свежим сезон за сезоном.',
      ],
      scenario: {
        title: 'Вы предлагаете гостям активный отдых на воде',
        body: 'Гости ждут запоминающегося впечатления на воде, а оснащение представляет ваш объект. Вам нужны доски, выдерживающие ежедневную аренду, удобные в хранении и брендированные, чтобы соответствовать стилю курорта.',
      },
      pairs: [
        {
          problem: 'Гостевые парки быстро изнашиваются при ежедневной аренде.',
          solution: 'Прокатная конструкция с усиленной кромкой и УФ-стойкими материалами, рассчитанная на многократные циклы эксплуатации.',
        },
        {
          problem: 'Место для хранения между сезонами ограничено.',
          solution: 'Надувные решения, удобные для хранения: после завершения сезона парк складывается в один шкаф.',
        },
        {
          problem: 'Оснащение выглядит типовым и не представляет ваш объект.',
          solution: 'Графика по всей поверхности доски, логотипы и брендирование EVA в цветах курорта, включая брендированные аксессуары.',
        },
        {
          problem: 'Замена и обновление парка никак не координируются.',
          solution: 'Программа повторных заказов парка с неизменным качеством, поддержка запасных частей и честная рекомендация по объёмам.',
        },
      ],
      steps: [
        { title: 'Опишите свою работу', body: 'Количество гостей, пляж, хранение и длительность сезона.' },
        { title: 'Получите план парка', body: 'Мы рекомендуем типы досок и объёмы на основе модели использования.' },
        { title: 'Утвердите брендированный образец', body: 'Цвета и логотип подтверждаются на физической доске.' },
        { title: 'Примите и поддерживайте', body: 'Поставка, запасные части и программа повторных заказов для будущих сезонов.' },
      ],
      caseStudy: {
        title: 'Брендированный гостевой парк в приморском курорте',
        body: 'Приморский курорт оснастил пляжную программу 40 брендированными надувными досками в цветах курорта, включая брендированные весла и насосы. Доски хранятся в шкафу между сезонами, а парк был обновлён после второго сезона с неизменным качеством.',
        tags: ['Брендированный гостевой парк', 'Хранение надувных досок', 'Сезонное обновление'],
      },
      faqs: [
        {
          q: 'Могут ли курорты кастомизировать SUP-оснащение своим логотипом?',
          a: 'Да. Курорты могут кастомизировать графику, цвета и аксессуары по требованиям проекта — вплоть до полного брендирования в цветовой палитре объекта.',
        },
        {
          q: 'Можете ли вы поставить несколько единиц для работы курорта?',
          a: 'Да. Производственные решения можно разрабатывать под потребности парка — от стартовой партии до сезонных программ обновления.',
        },
        {
          q: 'Сколько досок нужно курорту?',
          a: 'Большинство курортов начинают с 20–50 досок и масштабируются по спросу. Мы рекомендуем объёмы на основе количества гостей и длины пляжа, а не на глаз.',
        },
        {
          q: 'Подходят ли надувные доски для работы в курорте?',
          a: 'Да. Современные надувные SUP-доски исключительно долговечны и заметно удобнее в хранении и перевозке, — популярный выбор для курортов с ограниченным местом.',
        },
        {
          q: 'Может ли парк нести наш логотип и наши цвета?',
          a: 'Да — графика по всей доске, печать логотипа, брендирование EVA и брендированные аксессуары полностью входят в программу курорта.',
        },
      ],
      ctaLevel: 'warm',
      ctaLabel: 'Запросите SUP-решение для вашего курорта',
    },
    {
      slug: 'club-sup',
      navLabel: 'Индивидуальные командные доски',
      metaTitle: 'Индивидуальное SUP-оснащение для клубов и команд',
      metaDescription:
        'iSupfactory поставляет индивидуальные SUP-решения для клубов, команд и мероприятий, включая графику, спецификации и производственную поддержку.',
      kicker: 'Индивидуальные командные доски',
      serviceType: 'SUP-оснащение для клубов и команд',
      answer:
        'Клубы и команды получают прочные единообразные парки в своих цветах: расположение логотипа, индивидуальные длины весел и комплекты аксессуаров на устоявшейся спецификации доски, поэтому ремонт и запасные части остаются простыми и при повторных заказах. Минимальный заказ начинается с 90–100+ шт (стандартный объём); для тестовых запусков доступны пилотные партии 20–50 шт.',
      h1: 'Индивидуальное SUP-оснащение для клубов и команд',
      intro: [
        'У гребных клубов есть доски, которые выдерживают ежедневные тренировки, выглядят как команда и остаются единообразными от заказа к заказу. Мы производим индивидуальные командные доски с названием вашего клуба и вашими цветами по парковым ценам.',
        'Клубные программы включают и практическую часть: запасные части, инструкции по ремонту и поддержку повторных заказов с неизменным качеством.',
      ],
      scenario: {
        title: 'Клуб проводит тренировки и формирует команды',
        body: 'Доски находятся в ежедневном использовании членов клуба и представляют клуб на мероприятиях и регатах. Вам нужно прочное оснащение с брендом клуба, не ввязываясь в собственные отношения с заводами.',
      },
      pairs: [
        {
          problem: 'Тренировочные доски быстро изнашиваются при интенсивном использовании.',
          solution: 'Усиленная конструкция для ежедневного профессионального использования, а также инструкции по ремонту и поддержка запасных частей.',
        },
        {
          problem: 'Парки выглядят неоднородно и без брендирования.',
          solution: 'Название клуба, цвета и логотип печатаются на каждой доске, поэтому парк команды выглядит единообразным.',
        },
        {
          problem: 'Рост парка означает поиск подходящего склада.',
          solution: 'Повторные заказы идут на тех же подтверждённых платформах, поэтому новые доски соответствуют старым.',
        },
        {
          problem: 'Бюджет парка ограничен.',
          solution: 'Парковые цены, а также единая точка контакта по повторным заказам, запчастям и обслуживанию.',
        },
      ],
      steps: [
        { title: 'Расскажите о клубе', body: 'Число членов, типы тренировок и текущее оснащение.' },
        { title: 'Выберите типы досок', body: 'Тренировочные, начальные и командные доски в соответствии с вашей программой.' },
        { title: 'Добавьте брендирование клуба', body: 'Название, цвета и логотип на доске и аксессуарах.' },
        { title: 'Закажите и развивайте парк', body: 'Поставка парка, запасные части и единообразные повторные заказы.' },
      ],
      caseStudy: {
        title: 'Обновление парка клуба',
        body: 'Гребный клуб обновил бренд и заменил парк на 25 брендированных тренировочных досок вместе с запасными частями. Члены тренируются на единообразном оснащении, а в следующем сезоне клуб расширил парок идентичным повторным заказом.',
        tags: ['Брендирование клуба', 'Обновление парка', 'Поддержка запчастями'],
      },
      faqs: [
        {
          q: 'Могут ли гребные клубы кастомизировать командные доски?',
          a: 'Да. Клубы могут кастомизировать графику, цвета и комплектацию: название клуба, цвета и логотип на каждой доске.',
        },
        {
          q: 'Можете ли вы поддержать производство для конкретного мероприятия?',
          a: 'Да. Планирование производства можно разработать под требования мероприятия, включая отдельные версии досок и аксессуаров.',
        },
        {
          q: 'Какие доски лучше всего подходят для тренировок клуба?',
          a: 'Стабильные, долговечные доски с учётом уровня членов: широкие начальные модели для обучения и туринговые модели для подготовки в походах.',
        },
        {
          q: 'Предоставляете ли вы клубам парковые цены?',
          a: 'Да — объёмные цены действуют для парков клубов, а также мы предоставляем единую точку контакта по повторным заказам, запчастям и обслуживанию.',
        },
        {
          q: 'Можно ли отремонтировать или заменить повреждённые доски?',
          a: 'Мы поставляем запасные части, инструкции по ремонту и поддержку повторных заказов, чтобы парк оставался единообразным.',
        },
      ],
      ctaLevel: 'cold',
      ctaLabel: 'Обсудите SUP-проект вашего клуба',
    },
    {
      slug: 'school-sup',
      navLabel: 'SUP-программа для школ',
      metaTitle: 'SUP-оснащение для школ | Индивидуальные учебные гребные доски',
      metaDescription:
        'Получите безопасные и надёжные SUP-решения для школ, лагерей и организаций с индивидуальной производственной поддержкой iSupfactory.',
      kicker: 'SUP-программа для школ',
      serviceType: 'SUP-оснащение для школ и программ',
      answer:
        'Школам и учебным программам мы поставляем стабильные, дружелюбные к начинающим доски с печатным руководством по безопасности, мягкими веслами и защитными аксессуарами, рассчитанные на размер класса и ваши условия хранения. Стандартная партия — 90–100+ шт на 150 м рулона, пилотные партии — от 20–50 шт; сроки поставки учитывают цикл закупок школы.',
      h1: 'Безопасные и надёжные SUP-решения для школ и программ',
      intro: [
        'Школы занимаются гребным спортом по-разному: большие группы, разный уровень, строгие требования безопасности и учебные бюджеты. Наша школьная программа предлагает стабильные, подходящие новичкам доски, комплекты под размер группы и консультации с точки зрения инструктора.',
        'Партийные заказы и поддержка повторных заказов сохраняют оснащение пригодным год за годом для новых ученических групп.',
      ],
      scenario: {
        title: 'Вы обучаете учеников гребному спорту',
        body: 'Группы большие, а уровень разный. Вам нужны стабильные и безопасные доски для первого выхода на воду, объёмы, соответствующие размеру групп, и программа оснащения, укладывающаяся в бюджет и цикл закупок школы.',
      },
      pairs: [
        {
          problem: 'Ученикам нужна максимальная стабильность на воде.',
          solution: 'Широкие начальные доски большого объёма и доски на несколько человек, прощающие новичку ошибки.',
        },
        {
          problem: 'Размер групп требует единообразного оснащения в одном масштабе.',
          solution: 'Программные цены в зависимости от количества групп, при этом качество одинаково на каждой доске.',
        },
        {
          problem: 'Инструкторы отвечают за безопасность минимальными средствами.',
          solution: 'Доски поставляются с понятным руководством по эксплуатации, а мы консультируем по объёмам и организации занятий в вашем регионе.',
        },
        {
          problem: 'Оснащение должно выдержать несколько ученических групп.',
          solution: 'Усиленная конструкция, а также запасные части и поддержка повторных заказов на весь срок программы.',
        },
      ],
      steps: [
        { title: 'Расскажите о программе', body: 'Размер групп, водная зона, количество инструкторов и бюджетный цикл.' },
        { title: 'Соберите комплект', body: 'Типы досок и объёмы выбираются под задачи обучения, а не на глаз.' },
        { title: 'Утвердите образец', body: 'Проверьте стабильность, конструкцию и отделку на физической доске.' },
        { title: 'Поставьте и обновляйте', body: 'Партийные заказы, запасные части и повторные заказы для новых ученических групп.' },
      ],
      caseStudy: {
        title: 'Школьная программа активного отдыха на воде',
        body: 'Школа ввела гребный спорт как факультативный предмет с 15 начальными досками и досками на несколько человек для первых занятий. Инструкторы отметили более быстрый прогресс на первом уроке благодаря стабильным платформам, а на следующий год программа обновила оснащение подходящим повторным заказом.',
        tags: ['Начальный парк', 'Запуск программы', 'Повторные заказы'],
      },
      faqs: [
        {
          q: 'Какое SUP-оснащение подходит для школ?',
          a: 'Выбор SUP-оснащения зависит от возраста пользователей, условий эксплуатации и требований программы: широкие стабильные доски — устоявшийся выбор для обучения.',
        },
        {
          q: 'Могут ли школы кастомизировать SUP-оснащение?',
          a: 'Да. Школы могут кастомизировать графику, цвета и комплекты оснащения в соответствии со своей программой.',
        },
        {
          q: 'Какие доски лучше всего подходят для обучения гребному спорту в школе?',
          a: 'Широкие стабильные начальные доски и доски на несколько человек: их объём делает их прощающими к новичку и стабильными для нескольких гребцов.',
        },
        {
          q: 'Могут ли объёмы соответствовать размеру наших групп?',
          a: 'Да — программные цены строятся исходя из количества групп, а объём мы рекомендуем с учётом вашего региона и сезона.',
        },
        {
          q: 'Работаете ли вы с планами закупок школ?',
          a: 'Да. Мы планируем сроки поставки образцов и серии под бюджетный и сезонный цикл школы.',
        },
      ],
      ctaLevel: 'cold',
      ctaLabel: 'Обсудите SUP-программу вашей школы',
    },
  ],
  cs: [
    {
      slug: 'custom-sup',
      navLabel: 'Individuální SUP desky',
      metaTitle: 'Vývoj individuálních SUP desek | Výroba desek na zakázku',
      metaDescription:
        'Vyvinuite individuální SUP produkty s iSupfactory. Podporujeme požadavky na produkt, úpravy, prototypy a výrobu pro firmy i organizace.',
      kicker: 'Výrobce individuálních SUP desek',
      serviceType: 'Vývoj individuálních SUP produktů',
      answer:
        'Vyrábíme individuální nafukovací SUP desky, pevné desky i příslušenství podle vašich požadavků — tvaru, grafiky, materiálů a balení — od návrhu přes vzorek až po sériovou výrobu. Individuální projekty začínají na 90–100+ ks na 150 m roli (standardní objem); vzorky odesíláme za 7–12 dní a výroba trvá 25–35 dní po potvrzení objednávky a zálohy.',
      h1: 'Individuální SUP produkty postavené kolem vašich požadavků',
      intro: [
        'Potřebujete paddle desky postavené podle vaší specifikace — tvar, grafika, materiály, balení — bez toho, abyste museli udržovat vlastní továrnu. Jsme výrobním partnerem, který přijme vaše požadavky a vrátí hotový produkt.',
        'Každý projekt vede vlastní specialista, který vede návrh, vzorky, výrobu a expedici, takže vždy víte, v jakém stavu je vaše objednávka.',
      ],
      scenario: {
        title: 'Potřebujete desky postavené podle svých požadavků',
        body: 'Požadavek na produkt, ne položka z katalogu. Váš tvar, vaše grafika, vaše úroveň kvality, vaše balení. Navrhujeme, vyrobíme vzorek a vyrobíme produkt na osvědčených platformách flexibilně, a to už od první malé dávky.',
      },
      pairs: [
        {
          problem: 'Tovární katalogy nabízejí jen skladové konstrukce, které nelze změnit.',
          solution: 'Vyrábíme desky podle vašeho tvaru, grafiky a specifikace — od prvního vzorku až po celou sérii.',
        },
        {
          problem: 'Velké minimální objednávky svazují oběžný kapitál dřív, než se potvrdí trh.',
          solution: 'Individuální výroba začíná na 90–100+ ks na jednu formu, zatímco pilotní dávky na stávajících platformách na 20–50 ks — první dávky tedy zůstávají malé a cena za kus rozumná.',
        },
        {
          problem: 'Nemáte vlastní projektový ani produktový tým.',
          solution: 'Náš interní projektový a vývojový tým přemění nápad, náčrt nebo referenční desku na výkresy připravené k výrobě.',
        },
        {
          problem: 'Neznámá kvalita továrny a pomalá komunikace.',
          solution: 'Specialista na projekt zodpovídá za vzorky, etapy kontroly kvality a dodací lhůty od začátku do konce — jedno kontaktní místo a přehledné aktualizace.',
        },
      ],
      steps: [
        { title: 'Pošlete nám svůj projekt', body: 'Popište požadavky nebo sdílejte výkresy a referenční obrázky.' },
        { title: 'Návrh a vzorek', body: 'Vypracujeme výkresy a odešleme fyzický vzorek za 7–12 dní.' },
        { title: 'Schválení a výroba', body: 'Po schválení trvá výroba 25–35 dní a kontrola kvality probíhá v několika etapách.' },
        { title: 'Dodání a opakované objednávky', body: 'Export do jakékoli země s profesionálním balením a podpora opakovaných objednávek při neměnné kvalitě.' },
      ],
      caseStudy: {
        title: 'Rozšíření sortimentu značky outdoorových aktivit',
        body: 'Značka outdoorových aktivit vstoupila na trh paddle sportu touringovou deskou pod vlastní značkou. Vyvinuli jsme desku podle původního náčrtu, schválení vzorku trvalo 15 dní a první sérii jsme vyrobili za 25–35 dní.',
        tags: ['Vývoj desky', 'Značková grafika', 'První série'],
      },
      faqs: [
        {
          q: 'Můžete vyvinout SUP produkt podle mého nápadu?',
          a: 'Ano. Pomůžeme vám posoudit požadavky a vyvinout řešení připravené k výrobě — od konceptu a výkresů až po fyzický vzorek.',
        },
        {
          q: 'Mohu si přizpůsobit grafiku a barvy SUP?',
          a: 'Ano. Individuální grafiku, barvy a prvky značky lze navrhnout podle požadavků vašeho projektu.',
        },
        {
          q: 'Jaké je minimální množství objednávky (MOQ) individuálních SUP desek?',
          a: 'Individuální výroba začíná na 90–100+ ks na jednu formu a pilotní dávky na stávajících platformách na 20–50 ks. Větší objemy dávají lepší cenu za kus a při opakovaných objednávkách se vaše nástroje a formy zachovávají.',
        },
        {
          q: 'Co lze na desce přizpůsobit?',
          a: 'Tvar a rozměry, konstrukci a materiály, grafiku a logo, rozřez podložky EVA, příslušenství (veslo, pumpička, taška) a balení.',
        },
        {
          q: 'Dodáváte vzorky před sériovou výrobou?',
          a: 'Ano — fyzický vzorek se vyrobí a schválí před jakoukoli sérií. Doba výroby vzorku bývá 7–12 dní.',
        },
        {
          q: 'Můžete to udělat jen z mých značkových materiálů, bez vlastního týmu designérů?',
          a: 'Ano. Náš designérský tým vypracuje grafiku připravenou k výrobě na základě vašeho loga, firemních barev nebo předběžného nápadu.',
        },
      ],
      ctaLevel: 'hot',
      ctaLabel: 'Proberte projekt individuálních SUP desek',
    },
    {
      slug: 'private-label-sup',
      navLabel: 'SUP pod vlastní značkou',
      metaTitle: 'Výroba SUP pod vlastní značkou | Individuální výroba SUP',
      metaDescription:
        'iSupfactory podporuje výrobu SUP pod vlastní značkou pro zavedené značky a pomáhá vyvinout individuální SUP produkty — od specifikace po výrobu.',
      kicker: 'SUP pod vlastní značkou',
      serviceType: 'Výroba SUP pod vlastní značkou',
      answer:
        'Výroba pod vlastní značkou přenese vaši značku na osvědčené SUP platformy připravené k výrobě bez nových nástrojů. Vyberte základní model, upravte logo, barvy, balení a příslušenství a objednejte 90–100+ ks na 150 m roli (standardní objem). Je to nejrychlejší a nejnáročnější způsob, jak vstoupit na trh; vzorky 7–12 dní, výroba 25–35 dní od objednávky.',
      h1: 'Výrobní podpora pro SUP pod vlastní značkou',
      intro: [
        'Výroba pod vlastní značkou vám umožní prodávat sérii paddle desek pod vlastním jménem, aniž byste investovali do nástrojů a výroby. Vaše logo, barvy a balení se nanesou na platformy s potvrzenou kvalitou a objemy rostou spolu s poptávkou.',
        'Produktovou část přebíráme my, abyste se mohli soustředit na značku: návrh, balení a řízení opakovaných objednávek vedeme my.',
      ],
      scenario: {
        title: 'Máte značku — a potřebujete pod ní produkt',
        body: 'Identita značky bez hotového produktového sortimentu. Chcete prodávat paddle desky pod vlastním jménem v objemu odpovídajícím vaší fázi — od první ověřovací dávky po opakované dodávky.',
      },
      pairs: [
        {
          problem: 'Branding je jen nálepka: produkt stále vypadá jako generický.',
          solution: 'Úplná integrace značky: grafika na desce, logo, rozřez podložky EVA, značkové veslo, pumpička, taška a balení.',
        },
        {
          problem: 'První objednávky vás nutí nakoupit stovky kusů, které nemusíte prodat.',
          solution: 'Začněte pilotní dávkou 20–50 ks na standardním modelu a poté se rozšiřujte na sérii 90–100+ ks — trh potvrďte před velkými dávkami.',
        },
        {
          problem: 'Vývoj designu a balení se jeví jako nedosažitelný úkol.',
          solution: 'Náš designérský tým přemění značkové materiály na soubory desky a balení připravené k výrobě.',
        },
        {
          problem: 'Opakované objednávky se liší kvalitou nebo dostupností.',
          solution: 'Nástroje a formy zůstávají u vás a opakované objednávky jdou na stejných potvrzených platformách s neměnnou kvalitou.',
        },
      ],
      steps: [
        { title: 'Předejte svou značku', body: 'Pošlete nám logo, barvy a existující značkové materiály.' },
        { title: 'Vyvineme grafiku', body: 'Navrhneme grafiku desky, rozřez EVA a balení kolem vaší značky.' },
        { title: 'Schválte vzorek', body: 'Fyzický vzorek potvrdí barvy, povrch a balení.' },
        { title: 'Vyrobte a odešlete', body: 'Výroba běží ve vašem objemu a kontrola kvality i export probíhají od začátku do konce.' },
      ],
      caseStudy: {
        title: 'Nová značka, první výrobní objednávka',
        body: 'Obchod se sportovním zbožím vydal vlastní sérii paddle desek na základě samotného loga. Vyvinuli jsme celou desku i balení, vyrobili první dávku 50 ks k testu trhu a během jedné sezóny jsme se rozšířili na plnou výrobní objednávku.',
        tags: ['Vývoj značky', 'Design balení', 'Škálování výroby'],
      },
      faqs: [
        {
          q: 'Co je výroba SUP pod vlastní značkou?',
          a: 'Výroba SUP pod vlastní značkou umožňuje firmám prodávat SUP produkty pod svou značkou s individuálními specifikacemi a výrobní podporou.',
        },
        {
          q: 'Můžou zavedené značky uvádět nové SUP produkty?',
          a: 'Ano. iSupfactory podporuje značky, které chtějí rozšířit sortiment o SUP produkty: produktovou řadu, přesné přizpůsobení specifikací, individuální grafiku a výrobu.',
        },
        {
          q: 'Co zahrnuje program pod vlastní značkou?',
          a: 'Vaši značku přímo na desce — grafika, logo, podložka EVA — a volitelně značkové veslo, pumpička, taška a balení: produkt připravený k prodeji pod vaším jménem.',
        },
        {
          q: 'Lze design měnit mezi objednávkami?',
          a: 'Ano. Jakmile jsou značkové materiály připravené k výrobě, lze při opakovaných objednávkách grafiku, barvy nebo balení kdykoli aktualizovat.',
        },
        {
          q: 'Máme jen logo. Stejně pomůžete?',
          a: 'Ano. Náš designérský tým vypracuje kompletní sadu materiálů desky a balení na základě vašeho loga a firemních barev.',
        },
      ],
      ctaLevel: 'warm',
      ctaLabel: 'Proberte projekt SUP pod vlastní značkou',
    },
    {
      slug: 'resort-sup',
      navLabel: 'SUP pro resorty',
      metaTitle: 'Individuální SUP vybavení pro resorty | Značkové desky',
      metaDescription:
        'Vytvořte individuální SUP vybavení pro resorty a hotely se značkovými deskami, příslušenstvím a výrobní podporou iSupfactory.',
      kicker: 'SUP pro resorty',
      serviceType: 'SUP vybavení pro resorty a hotely',
      answer:
        'Dodáváme značkové nafukovací SUP desky resortům a hotelům pro každodenní provoz hosty: vysokotlakové drop-stitch konstrukce, zesílené švy a postupné minimální objednávky od 20–50 pilotních kusů po 90–100+ ks na dávku pro flotu. Na deskách bude vaše logo a vaše barvy a poradíme vám s uskladněním, údržbou a programy opakovaných objednávek.',
      h1: 'Řešení individuálního SUP vybavení pro resorty a hotely',
      intro: [
        'Paddle floty resortů musí zvládnout každodenní provoz hosty, snadno se skladují mezi sezónami a nesou vaši značku. Vyrábíme odolné desky vhodné pro hosty v vašich barvách a dodávací program floty přizpůsobíme vašemu provozu.',
        'Objemy doporučujeme na základě modelu použití, ne od boku — a programy opakovaných objednávek udržují flotu čerstvou sezónu za sezónou.',
      ],
      scenario: {
        title: 'Nabízíte hostům outdoorové aktivity na vodě',
        body: 'Hosté čekají nezapomenutelný zážitek na vodě a vybavení reprezentuje váš objekt. Potřebujete desky, které vydrží každodenní pronájem, snadno se skladují a jsou značkové, aby ladily se stylem resortu.',
      },
      pairs: [
        {
          problem: 'Floty pro hosty se rychle opotřebovávají při každodenním pronájmu.',
          solution: 'Pronajímací konstrukce se zesílenou hranou a UV odolnými materiály, dimenzovaná na opakované cykly provozu.',
        },
        {
          problem: 'Místo pro uskladnění mezi sezónami je omezené.',
          solution: 'Nafukovací řešení snadno skladovatelná: po skončení sezóny se celá flota složí do jedné skříňě.',
        },
        {
          problem: 'Vybavení vypadá genericky a nereprezentuje váš objekt.',
          solution: 'Grafika po celé desce, loga a značkové EVA podložky v barvách resortu včetně značkového příslušenství.',
        },
        {
          problem: 'Výměna a obnova floty se nijak nesoznačují.',
          solution: 'Program opakovaných objednávek floty s neměnnou kvalitou, podpora náhradních dílů a upřímné doporučení ohledně objemů.',
        },
      ],
      steps: [
        { title: 'Popište svůj provoz', body: 'Počet hostů, pláž, skladování a délka sezóny.' },
        { title: 'Získejte plán floty', body: 'Doporučíme typy desek a objemy na základě modelu použití.' },
        { title: 'Schválte značkový vzorek', body: 'Barvy a logo se potvrzují na fyzické desce.' },
        { title: 'Přijměte a podporujte', body: 'Dodání, náhradní díly a program opakovaných objednávek pro budoucí sezóny.' },
      ],
      caseStudy: {
        title: 'Značková flota pro hosty v přímořském resortu',
        body: 'Přímořský resort vybavil plážový program 40 značkovými nafukovacími deskami v barvách resortu včetně značkových vesel a pumpiček. Desky se mezi sezónami skladují v jedné skříňce a flota byla po druhé sezóně obnovena s neměnnou kvalitou.',
        tags: ['Značková flota pro hosty', 'Uskladnění nafukovacích desek', 'Sezónní obnova'],
      },
      faqs: [
        {
          q: 'Mohou resorty přizpůsobit SUP vybavení svým logem?',
          a: 'Ano. Resorty mohou přizpůsobit grafiku, barvy a příslušenství podle požadavků projektu — až po úplné značkové provedení v barevné paletě objektu.',
        },
        {
          q: 'Dodáte několik kusů pro provoz resortu?',
          a: 'Ano. Výrobní řešení lze vyvinout podle potřeb floty — od úvodní dávky po sezónní programy obnovy.',
        },
        {
          q: 'Kolik desek resort potřebuje?',
          a: 'Většina resortů začíná s 20–50 deskami a podle poptávky se rozšiřuje. Objem doporučujeme na základě počtu hostů a délky pláže, ne od boku.',
        },
        {
          q: 'Jsou nafukovací desky pro provoz v resortu vhodné?',
          a: 'Ano. Současné nafukovací SUP desky jsou mimořádně trvanlivé a výrazně pohodlnější pro skladování a převoz — populární volba pro resorty s omezeným místem.',
        },
        {
          q: 'Může flota nést naše logo a naše barvy?',
          a: 'Ano — grafika po celé desce, tisk loga, značkové EVA a značkové příslušenství jsou plně součástí programu pro resort.',
        },
      ],
      ctaLevel: 'warm',
      ctaLabel: 'Vyžádejte si SUP řešení pro váš resort',
    },
    {
      slug: 'club-sup',
      navLabel: 'Individuální týmové desky',
      metaTitle: 'Individuální SUP vybavení pro kluby a týmy',
      metaDescription:
        'iSupfactory dodává individuální SUP řešení pro kluby, týmy a akce včetně grafiky, specifikací a výrobní podpory.',
      kicker: 'Individuální týmové desky',
      serviceType: 'SUP vybavení pro kluby a týmy',
      answer:
        'Kluby a týmy dostávají odolné jednotné floty ve svých barvách: umístění loga, individuální délky vesel a sady příslušenství na osvědčené specifikaci desky, takže opravy a náhradní díly zůstávají jednoduché i při opakovaných objednávkách. Minimální objednávka začíná na 90–100+ ks (standardní objem); pro testovací spuštění jsou dostupné pilotní dávky 20–50 ks.',
      h1: 'Individuální SUP vybavení pro kluby a týmy',
      intro: [
        'Paddle kluby potřebují desky, které vydrží každodenní trénink, vypadají jako tým a zůstávají jednotné od objednávky k objednávce. Vyrábíme individuální týmové desky s názvem vašeho klubu a vašimi barvami za flotové ceny.',
        'Klubové programy zahrnují i praktickou část: náhradní díly, návody k opravám a podporu opakovaných objednávek s neměnnou kvalitou.',
      ],
      scenario: {
        title: 'Klub trénuje a skládá týmy',
        body: 'Desky jsou v každodenním používání členů klubu a reprezentují klub na akcích a závodech. Potřebujete odolné značkové vybavení, aniž byste se dostali do vlastních vztahů s továrnami.',
      },
      pairs: [
        {
          problem: 'Tréninkové desky se rychle opotřebovávají při intenzivním používání.',
          solution: 'Zesílená konstrukce pro každodenní profesionální použití plus návody k opravám a podpora náhradních dílů.',
        },
        {
          problem: 'Floty působí nejednotně a bez značkového provedení.',
          solution: 'Název klubu, barvy a logo se tisknou na každou desku, takže týmová flota vypadá jednotně.',
        },
        {
          problem: 'Růst floty znamená hledat vhodné skladiště.',
          solution: 'Opakované objednávky jdou na stejných potvrzených platformách, takže nové desky odpovídají starým.',
        },
        {
          problem: 'Rozpočet floty je omezený.',
          solution: 'Flotové ceny a jediné kontaktní místo pro opakované objednávky, náhradní díly a údržbu.',
        },
      ],
      steps: [
        { title: 'Představte klub', body: 'Počet členů, typy tréninku a současné vybavení.' },
        { title: 'Vyberte typy desek', body: 'Tréninkové, začátečnické a týmové desky podle vašeho programu.' },
        { title: 'Přidejte značku klubu', body: 'Název, barvy a logo na desce a příslušenství.' },
        { title: 'Objednejte a flotu rozšiřujte', body: 'Dodání floty, náhradní díly a jednotné opakované objednávky.' },
      ],
      caseStudy: {
        title: 'Obnova klubové floty',
        body: 'Paddle klub obnovil značku a nahradil flotu 25 značkovými tréninkovými deskami včetně náhradních dílů. Členové trénují na jednotném vybavení a v další sezóně klub flotu rozšířil identickou opakovanou objednávkou.',
        tags: ['Značkování klubu', 'Obnova floty', 'Podpora náhradními díly'],
      },
      faqs: [
        {
          q: 'Mohou paddle kluby přizpůsobit týmové desky?',
          a: 'Ano. Kluby mohou přizpůsobit grafiku, barvy a výbavu: název klubu, barvy a logo na každé desce.',
        },
        {
          q: 'Můžete podpořit výrobu pro konkrétní akci?',
          a: 'Ano. Výrobní plán lze přizpůsobit požadavkům akce včetně samostatných verzí desek a příslušenství.',
        },
        {
          q: 'Jaké desky se nejlépe hodí pro klubový trénink?',
          a: 'Stabilní a odolné desky odpovídající úrovni členů: široké začátečnické modely pro výuku a touringové modely pro přípravu na výlety.',
        },
        {
          q: 'Poskytujete klubům flotové ceny?',
          a: 'Ano — objemové ceny platí pro klubové floty a zároveň poskytujeme jedno kontaktní místo pro opakované objednávky, náhradní díly a údržbu.',
        },
        {
          q: 'Dají se poškozené desky opravit nebo vyměnit?',
          a: 'Dodáváme náhradní díly, návody k opravám a podporu opakovaných objednávek, aby flota zůstala jednotná.',
        },
      ],
      ctaLevel: 'cold',
      ctaLabel: 'Proberte SUP projekt vašeho klubu',
    },
    {
      slug: 'school-sup',
      navLabel: 'SUP program pro školy',
      metaTitle: 'SUP vybavení pro školy | Individuální výcvikové paddle desky',
      metaDescription:
        'Získejte bezpečná a spolehlivá SUP řešení pro školy, tábory a organizace s individuální výrobní podporou iSupfactory.',
      kicker: 'SUP program pro školy',
      serviceType: 'SUP vybavení pro školy a programy',
      answer:
        'Školám a výcvikovým programům dodáváme stabilní, začátečníkům přátelské desky s vytištěným bezpečnostním návodem, měkkými vesly a ochranným příslušenstvím, dimenzované na velikost třídy a vaše podmínky skladování. Standardní dávka je 90–100+ ks na 150 m roli, pilotní dávky od 20–50 ks; dodací lhůty zohledňují nákupní cyklus školy.',
      h1: 'Bezpečná a spolehlivá SUP řešení pro školy a programy',
      intro: [
        'Školy se paddle sportu věnují různě: velké skupiny, různá úroveň, přísné bezpečnostní požadavky a omezené vzdělávací rozpočty. Náš školní program nabízí stabilní desky vhodné pro začátečníky, sady pro velikost skupiny a konzultace z pohledu instruktora.',
        'Dávkové objednávky a podpora opakovaných objednávek udržují vybavení použitelné rok za rokem pro nové žákovské skupiny.',
      ],
      scenario: {
        title: 'Učíte žáky paddle sportu',
        body: 'Skupiny jsou velké a úroveň je různá. Potřebujete stabilní a bezpečné desky pro první výjezd na vodu, objemy odpovídající velikosti skupin a vybavení, které se vejde do rozpočtu a nákupního cyklu školy.',
      },
      pairs: [
        {
          problem: 'Žáci potřebují maximální stabilitu na vodě.',
          solution: 'Široké začátečnické desky s velkým objemem a víceosobové desky, které začátečníkovi odpouštějí chyby.',
        },
        {
          problem: 'Velikost skupin vyžaduje jednotné vybavení v jednom měřítku.',
          solution: 'Programové ceny podle počtu skupin při stejné kvalitě každé desky.',
        },
        {
          problem: 'Instruktoři odpovídají za bezpečnost s minimálními prostředky.',
          solution: 'Desky dodáváme s přehledným návodem k použití a poradíme vám s objemy a organizací výcviku ve vašem regionu.',
        },
        {
          problem: 'Vybavení musí vydržet několik žákovských skupin.',
          solution: 'Zesílená konstrukce plus náhradní díly a podpora opakovaných objednávek po celou dobu programu.',
        },
      ],
      steps: [
        { title: 'Představte program', body: 'Velikost skupin, vodní plocha, počet instruktorů a rozpočtový cyklus.' },
        { title: 'Sestavte sadu', body: 'Typy desek a objemy se volí podle výcvikových úkolů, ne od boku.' },
        { title: 'Schválte vzorek', body: 'Na fyzické desce ověřte stabilitu, konstrukci a povrch.' },
        { title: 'Dodávejte a obnovujte', body: 'Dávkové objednávky, náhradní díly a opakované objednávky pro nové žákovské skupiny.' },
      ],
      caseStudy: {
        title: 'Školní program outdoorových aktivit na vodě',
        body: 'Škola zavedla paddle sport jako volitelný předmět s 15 začátečnickými deskami a víceosobovými deskami pro první hodiny. Instruktoři si všimli rychlejšího posunu už na první lekci díky stabilním platformám a následující rok program vybavení obnovil vhodnou opakovanou objednávkou.',
        tags: ['Začátečnická flota', 'Spuštění programu', 'Opakované objednávky'],
      },
      faqs: [
        {
          q: 'Jaké SUP vybavení je vhodné pro školy?',
          a: 'Volba SUP vybavení závisí na věku uživatelů, podmínkách použití a požadavcích programu: široké stabilní desky jsou osvědčenou volbou pro výuku.',
        },
        {
          q: 'Mohou školy přizpůsobit SUP vybavení?',
          a: 'Ano. Školy mohou přizpůsobit grafiku, barvy a sady vybavení podle svého programu.',
        },
        {
          q: 'Jaké desky se nejlépe hodí pro výuku paddle sportu ve škole?',
          a: 'Široké stabilní začátečnické desky a víceosobové desky: jejich objem je odpouští začátečníkovi chyby a stabilní pro více paddleářů.',
        },
        {
          q: 'Mohou objemy odpovídat velikosti našich skupin?',
          a: 'Ano — programové ceny se stanoví podle počtu skupin a objem doporučujeme s ohledem na váš region a sezónu.',
        },
        {
          q: 'Pracujete s nákupními plány škol?',
          a: 'Ano. Termíny dodání vzorků i série plánujeme podle rozpočtového a sezónního cyklu školy.',
        },
      ],
      ctaLevel: 'cold',
      ctaLabel: 'Proberte SUP program vaší školy',
    },
  ],
  tr: [
    {
      slug: 'custom-sup',
      navLabel: 'Özel SUP Üretimi',
      metaTitle: 'Özel SUP Geliştirme | Özelleştirilmiş Kürek Tahtası Çözümleri',
      metaDescription:
        'iSupfactory ile özel SUP ürünlerinizi geliştirin. İşletmeler ve kurumlar için ürün gereksinimlerini, özelleştirmeyi, prototipleri ve üretimi destekliyoruz.',
      kicker: 'Özel SUP Üreticisi',
      serviceType: 'Özel SUP Ürün Geliştirme',
      answer:
        'Özel şişirilebilir SUP tahtalarını, sert tahtaları ve aksesuarları gereksiniminize göre geliştiriyoruz — şekil, grafik, malzeme ve ambalajdan tasarıma, numune üretimine ve seri üretime kadar. Özel projeler 150 m rulo başına 90–100+ adetten (hacim) başlar; numuneler 7–12 günde gönderilir ve üretim, sipariş ile depozitonun onaylanmasından sonra 25–35 gün sürer.',
      h1: 'Gereksiniminize Göre Üretilmiş Özel SUP Ürünleri',
      intro: [
        'Kendi şartnameinize göre üretilmiş kürek tahtalarına ihtiyacınız var — şekil, grafik, malzeme, ambalaj — ve bunun için kendi fabrikanızı işletmek istemiyorsunuz. Gereksiniminizi alıp teslim edilebilir bir ürünle geri dönen üretim ortağıyız.',
        'Her proje, tasarımı, numuneleri, üretimi ve sevkiyatı yöneten ayrı bir uzman tarafından yürütülür; böylece siparişinizin hangi aşamada olduğunu her zaman bilirsiniz.',
      ],
      scenario: {
        title: 'Tahtaların kendi şartnamenize göre üretilmesini istiyorsunuz',
        body: 'Katalogdan seçilen bir ürün değil, bir ürün gereksinimi. Sizin şekil tercihiniz, sizin grafikleriniz, sizin kalite seviyeniz, sizin ambalajınız. Kanıtlanmış platformlar üzerinde esnek bir şekilde tasarlar, numune üretir ve ürünü üretiriz; bu esneklik ilk küçük seriden itibaren geçerlidir.',
      },
      pairs: [
        {
          problem: 'Fabrika katalogları yalnızca değiştirilemeyen standart tasarımlar sunar.',
          solution: 'Şeklinizi, grafiklerinizi ve şartnamenizi uygulayarak özel tahtalar üretiyoruz — ilk numuneden tam seri üretime kadar.',
        },
        {
          problem: 'Büyük minimum siparişler, pazar doğrulanmadan stok yatırımına zorlar.',
          solution: 'Özel hacimli üretim tasarım başına 90–100+ adetten başlar; mevcut platformlarda pilot seriler ise 20–50 adetten başlar — böylece ilk seriler küçük kalırken birim fiyatlar adil seviyede korunur.',
        },
        {
          problem: 'Yanınızda tasarım veya mühendislik ekibi yok.',
          solution: 'Kendi tasarım ve mühendislik ekibimiz bir fikri, çizimi ya da referans tahtayı üretime hazır teknik çizimlere dönüştürür.',
        },
        {
          problem: 'Fabrika kalitesi bilinmiyor ve iletişim yavaş.',
          solution: 'Bir proje uzmanı numuneleri, kalite kontrol aşamalarını ve teslim tarihlerini baştan sona üstlenir — tek temas noktası ve şeffaf güncellemeler.',
        },
      ],
      steps: [
        { title: 'Projenizi iletin', body: 'Gereksinimlerinizi anlatın ya da çizim ve referans görseller paylaşın.' },
        { title: 'Tasarım ve numune', body: 'Çizimleri geliştirir ve 7–12 gün içinde fiziksel bir numune göndeririz.' },
        { title: 'Onay ve üretim', body: 'Onayınızdan sonra üretim 25–35 gün sürer ve kalite kontrolü çok noktalıdır.' },
        { title: 'Teslim ve tekrar sipariş', body: 'Profesyonel ambalajla dünya çapına ihracat ve tutarlı kaliteyle tekrar sipariş desteği.' },
      ],
      caseStudy: {
        title: 'Outdoor markasında ürün hattı genişletme',
        body: 'Bir outdoor ekipman markası, kendi markasıyla bir touring tahtasıyla kürek sporlarına adım attı. Tahtayı kaba bir çizimden geliştirdik, numune onayını 15 günde tamamladık ve ilk seri üretimi 25–35 günde gerçekleştirdik.',
        tags: ['Tahta geliştirme', 'Markalı grafik', 'İlk seri üretim'],
      },
      faqs: [
        {
          q: 'Fikrimden bir SUP ürünü geliştirebilir misiniz?',
          a: 'Evet. Gereksinimlerinizi değerlendirmenize ve üretime hazır bir çözüm geliştirmenize yardımcı oluruz — konsept ve çizimlerden fiziksel numuneye kadar.',
        },
        {
          q: 'SUP grafiklerini ve renklerini özelleştirebilir miyim?',
          a: 'Evet. Özel grafikler, renkler ve marka öğeleri proje gereksinimlerine göre geliştirilebilir.',
        },
        {
          q: 'Özel SUP üretiminde minimum sipariş miktarı nedir?',
          a: 'Özel hacimli üretim tasarım başına 90–100+ adetten başlar, mevcut platformlarda pilot seriler ise 20–50 adetten başlar. Daha yüksek miktarlar daha iyi birim fiyat sağlar ve tekrar siparişlerde kalıplarınız ile tasarımlarınız korunur.',
        },
        {
          q: 'Bir tahtada hangi unsurlar özelleştirilebilir?',
          a: 'Şekil ve ölçüler, yapı ve malzemeler, grafikler ve logo, EVA ped düzeni, aksesuarlar (kürek, pompa, çanta) ve ambalaj.',
        },
        {
          q: 'Üretimden önce numune sağlıyor musunuz?',
          a: 'Evet — herhangi bir seri üretimden önce fiziksel bir numune üretilir ve onaylanır. Numune süresi genellikle 7–12 gündür.',
        },
        {
          q: 'Kendi tasarım ekibim olmadan yalnızca marka varlıklarımı kullanabilir miyim?',
          a: 'Evet. Tasarım ekibimiz logo, marka renkleri veya kaba bir konseptten yola çıkarak üretime hazır çizimleri geliştirir.',
        },
      ],
      ctaLevel: 'hot',
      ctaLabel: 'Özel SUP Projenizi Görüşelim',
    },
    {
      slug: 'private-label-sup',
      navLabel: 'Özel Markalı Kürek Tahtaları',
      metaTitle: 'Özel Markalı SUP Üretimi | Özel Markalı SUP Üretimi',
      metaDescription:
        'iSupfactory, mevcut markalar için özel markalı SUP üretim desteği sağlar ve özelleştirilmiş SUP ürünlerinin şartnameden üretime kadar geliştirilmesine yardımcı olur.',
      kicker: 'Özel Markalı Kürek Tahtaları',
      serviceType: 'Özel Markalı SUP Üretimi',
      answer:
        'Özel marka üretim, yeni kalıp yatırımı olmadan markanızı kanıtlanmış, üretime hazır SUP platformlarına taşır. Bir temel model seçin, logonuzu, renklerinizi, ambalajınızı ve aksesuarlarınızı uygulayın ve 150 m rulo başına 90–100+ adetten (hacim) sipariş verin. Bu, pazara girmenin en hızlı ve en düşük riskli yoludur; numuneler 7–12 gün, üretim ise siparişten sonra 25–35 gün sürer.',
      h1: 'Markanız İçin Özel Markalı SUP Üretim Desteği',
      intro: [
        'Özel marka üretim, kalıplara veya bir fabrikaya yatırım yapmadan kendi markanız altında bir kürek tahtası hattı piyasaya sürmenizi sağlar. Logonuz, renkleriniz ve ambalajınız kalitesi doğrulanmış platformlara uygulanır; miktarlar taleple birlikte büyür.',
        'Ürün tarafını biz üstleniyoruz ki siz marka tarafına odaklanabilsiniz: tasarım, ambalaj ve tekrar sipariş yönetimi tarafımızca yürütülür.',
      ],
      scenario: {
        title: 'Markanız var — ve altında ürün gerekiyor',
        body: 'Stok ürün olmadan bir marka kimliği. Kendi adınızı taşıyan, satılabilir bir kürek tahtası hattı istiyorsunuz ve miktar aşamanıza uygun olmalı — ilk doğrulama partisinden tekrarlanan filolara kadar.',
      },
      pairs: [
        {
          problem: 'Marka yalnızca etikette kalıyor; ürün hala jenerik görünüyor.',
          solution: 'Eksiksiz marka entegrasyonu: tahta grafikleri, logo, EVA ped düzeni, markalı kürek, pompa, çanta ve ambalaj.',
        },
        {
          problem: 'İlk siparişler, satamayacağınız yüzlerce adet almaya zorluyor.',
          solution: 'Standart bir platformda 20–50 adetlik pilot partiyle başlayın, ardından 90–100+ adetlik standart hacimli seriye ölçekleyin — büyük partilerden önce pazarı doğrulayın.',
        },
        {
          problem: 'Tasarım ve ambalaj geliştirmek ulaşılmaz görünüyor.',
          solution: 'Marka varlıklarınız, tasarım ekibimiz tarafından üretime hazır tahta ve ambalaj çizimlerine dönüştürülür.',
        },
        {
          problem: 'Tekrar siparişlerde kalite veya bulunabilirlik kayıyor.',
          solution: 'Kalıplar ve tasarımlar sizin kalır, tekrar siparişler aynı doğrulanmış platformlarda tutarlı kaliteyle karşılanır.',
        },
      ],
      steps: [
        { title: 'Markanızı paylaşın', body: 'Logonuzu, renklerinizi ve mevcut marka varlıklarınızı gönderin.' },
        { title: 'Çizimleri geliştirin', body: 'Tahta grafiklerini, EVA düzenini ve ambalajı markanıza göre tasarlarız.' },
        { title: 'Numuneyi onaylayın', body: 'Fiziksel numune renkleri, yüzeyi ve ambalajı doğrular.' },
        { title: 'Üretin ve teslim edin', body: 'Üretim sizin miktarınıza göre yapılır, kalite kontrolü ve ihracat baştan sona yürütülür.' },
      ],
      caseStudy: {
        title: 'Yeni marka, ilk üretim siparişi',
        body: 'Bir spor perakendecisi yalnızca bir logoyla kendi kürek tahtası hattını piyasaya sürdü. Tahtanın ve ambalajın tamamını geliştirdik, pazar testi için ilk 50 adetlik partiyi ürettik ve bir sezon içinde tam üretim siparişine ölçekledik.',
        tags: ['Marka geliştirme', 'Ambalaj tasarımı', 'Ölçeklenen üretim'],
      },
      faqs: [
        {
          q: 'Özel markalı SUP üretimi nedir?',
          a: 'Özel markalı SUP üretimi, işletmelerin özelleştirilmiş şartnameler ve üretim desteğiyle kendi markaları altında SUP ürünleri satmasına imkan verir.',
        },
        {
          q: 'Mevcut markalar yeni SUP ürünleri geliştirebilir mi?',
          a: 'Evet. iSupfactory, ürün gamını SUP ürünleriyle genişletmek isteyen markaları destekler — ürün seçimi, şartname uyarlaması, özel grafikler ve üretim.',
        },
        {
          q: 'Özel markalı SUP programına neler dahildir?',
          a: 'Markanız doğrudan tahtanın üzerinde — grafikler, logo, EVA ped — artı isteğe bağlı markalı kürek, pompa, sırt çantası ve ambalaj: kendi adınızla satılabilir eksiksiz bir ürün.',
        },
        {
          q: 'Tasarım siparişler arasında değiştirilebilir mi?',
          a: 'Evet. Marka varlıkları üretime hazır hale geldikten sonra tekrar siparişlerde grafikler, renkler veya ambalaj istendiği zaman yenilenebilir.',
        },
        {
          q: 'Elimizde yalnızca bir logo var. Yine de yardımcı olur musunuz?',
          a: 'Evet. Tasarım ekibimiz, logonuz ve marka renklerinizden yola çıkarak tahtanın ve ambalajın eksiksiz çizimlerini geliştirir.',
        },
      ],
      ctaLevel: 'warm',
      ctaLabel: 'Özel Marka Projenizi Görüşelim',
    },
    {
      slug: 'resort-sup',
      navLabel: 'Resort Kürek Tahtaları',
      metaTitle: 'Resortlar İçin Özel SUP Ekipmanı | Markalı Tahtalar',
      metaDescription:
        'iSupfactory desteğiyle markalı tahtalar, aksesuarlar ve üretim desteğiyle resortlar ve oteller için özelleştirilmiş SUP ekipmanı oluşturun.',
      kicker: 'Resort Kürek Tahtaları',
      serviceType: 'Resort ve Otel SUP Ekipmanı',
      answer:
        'Resortlar ve oteller için markalı, günlük misafir kullanımına uygun şişirilebilir SUP tahtaları tedarik ediyoruz: yüksek basınçlı drop-stitch yapı, takviyeli dikişler ve 20–50 pilot adetten 90–100+ adede kadar uzanan kademeli minimum sipariş miktarları. Tahtalarda logonuz ve renkleriniz yer alır; depolama, bakım ve tekrar sipariş programları konusunda yönlendirme sağlar.',
      h1: 'Resortlar ve Oteller İçin Özel SUP Ekipmanı Çözümleri',
      intro: [
        'Resort kürek tahtası filoları günlük misafir kullanımına dayanmalı, sezonlar arasında kolay saklanmalı ve markanızı taşımalıdır. Dayanıklı, misafir dostu tahtaları renklerinizde üretir ve filo programını işletmenize göre kurarız.',
        'Miktarları tahmine değil, kullanım modeline göre öneririz — tekrar sipariş programları ise filoyu sezon sezon taze tutar.',
      ],
      scenario: {
        title: 'Misafirleriniz için su etkinlikleri düzenliyorsunuz',
        body: 'Misafirler hatırlanacak bir su deneyimi bekler ve ekipman tesisinizi temsil eder. Günlük kiralamaya dayanacak kadar dayanıklı, kolayca saklanabilen ve resortun tarzıyla uyumlu markalı tahtalara ihtiyacınız var.',
      },
      pairs: [
        {
          problem: 'Misafir filoları günlük kiralamada hızla yıpranıyor.',
          solution: 'Takviyeli kenarlar ve UV dayanımlı malzemelerle, tekrarlanan seanslara dayanacak kiralama sınıfı yapı.',
        },
        {
          problem: 'Sezon dışında depolama alanı sınırlı.',
          solution: 'Sezon sonunda tüm filoyu tek bir dolaba sığdıran, kolayca saklanabilen şişirilebilir seçenekler.',
        },
        {
          problem: 'Ekipman jenerik görünüyor, tesisinizi yansıtmıyor.',
          solution: 'Resort renklerinizde tüm tahta grafikleri, logolar ve EVA uygulaması — markalı aksesuarlar dahil.',
        },
        {
          problem: 'Filo değişimi ve yenilemesi koordine edilmiyor.',
          solution: 'Tutarlı kalite, yedek parça desteği ve dürüst miktar yönlendirmesi sunan filo tekrar sipariş programı.',
        },
      ],
      steps: [
        { title: 'İşletmenizi anlatın', body: 'Misafir sayısı, kıyı yapısı, depolama ve sezon uzunluğu.' },
        { title: 'Filo planı alın', body: 'Kullanım modeline göre tahta tiplerini ve miktarları öneririz.' },
        { title: 'Markalı numuneyi onaylayın', body: 'Renkleriniz ve logonuz fiziksel bir tahtada doğrulanır.' },
        { title: 'Teslim alın ve bakım yapın', body: 'Teslimat, yedek parçalar ve gelecek sezonlar için tekrar sipariş programı.' },
      ],
      caseStudy: {
        title: 'Kıyı resortunda misafir filosu',
        body: 'Bir kıyı resortu, plaj programını resort renklerinde 40 markalı şişirilebilir tahta ile donattı; buna markalı kürekler ve pompalar da dahildi. Tahtalar sezon dışında tek dolapta saklanıyor ve filo ikinci sezonun ardından tutarlı kaliteyle yenilendi.',
        tags: ['Markalı misafir filosu', 'Şişirilebilir depolama', 'Sezonluk yenileme'],
      },
      faqs: [
        {
          q: 'Resortlar SUP ekipmanını logolarıyla özelleştirebilir mi?',
          a: 'Evet. Resortlar proje gereksinimlerine göre grafikleri, renkleri ve aksesuarları özelleştirebilir — tesis renklerinde eksiksiz marka uygulaması dahil.',
        },
        {
          q: 'Resort operasyonları için birden fazla SUP adedi sağlayabilir misiniz?',
          a: 'Evet. Üretim çözümleri filo gereksinimlerine göre geliştirilebilir; başlangıç filosundan sezonluk yenileme programlarına kadar.',
        },
        {
          q: 'Bir resortun kaç tahtaya ihtiyacı var?',
          a: 'Çoğu resort 20–50 tahtayla başlar ve talebe göre büyür. Miktarları tahmin etmek yerine misafir sayınıza ve kıyı yapınıza göre öneririz.',
        },
        {
          q: 'Şişirilebilir tahtalar resort kullanımı için uygun mu?',
          a: 'Evet. Modern şişirilebilir SUP tahtaları son derece dayanıklıdır ve saklamak ile taşımak çok daha kolaydır — depolama alanı sınırlı resortlar için popüler tercihtir.',
        },
        {
          q: 'Filo logomuzu ve renklerimizi taşıyabilir mi?',
          a: 'Evet — tüm tahta grafikleri, logo baskısı, EVA uygulaması ve markalı aksesuarlar resort programının tamamıdır.',
        },
      ],
      ctaLevel: 'warm',
      ctaLabel: 'Resortunuz İçin SUP Çözümü Talep Edin',
    },
    {
      slug: 'club-sup',
      navLabel: 'Özel SUP Takım Tahtaları',
      metaTitle: 'Kulüpler ve Takımlar İçin Özel SUP Ekipmanı',
      metaDescription:
        'iSupfactory, kulüpler, takımlar ve etkinlikler için grafikler, şartnameler ve üretim desteği dahil özelleştirilmiş SUP ekipmanı çözümleri sağlar.',
      kicker: 'Özel SUP Takım Tahtaları',
      serviceType: 'Kulüp ve Takım SUP Ekipmanı',
      answer:
        'Kulüpler ve takımlar kendi renklerinde dayanıklı, tutarlı filolar elde eder: logo yerleşimi, özel kürek boyları ve tek bir standart tahta şartnamesi üzerinde aksesuar setleri. Böylece onarımlar ve yedek parçalar, tekrar siparişler boyunca basit kalır. Minimum sipariş 90–100+ adetten (hacim) başlar; şartnameyi önce doğrulamak için 20–50 adetlik pilot seriler de sunulur.',
      h1: 'Kulüpler ve Takımlar İçin Özel SUP Ekipmanı',
      intro: [
        'Kürek kulüpleri, günlük antrenmana dayanan, takımı yansıtan ve tekrar siparişlerde tutarlı kalan tahtalara ihtiyaç duyar. Kulüp adınızı ve renklerinizi taşıyan özel takım tahtalarını filo dostu fiyatlarla üretiyoruz.',
        'Kulüp programları pratik tarafı da kapsar: yedek parçalar, onarım rehberliği ve aynı kaliteyle tekrar sipariş desteği.',
      ],
      scenario: {
        title: 'Kulübünüz antrenman ve takım seansları düzenliyor',
        body: 'Tahtalar kulüp üyeleri tarafından günlük olarak kullanılır ve etkinliklerde kulübü temsil eder. Fabrika ilişkilerini kendiniz yönetmeden, kulüp kimliği taşıyan dayanıklı takım ekipmanı istiyorsunuz.',
      },
      pairs: [
        {
          problem: 'Antrenman tahtaları yoğun kullanımda ağırlaşıyor.',
          solution: 'Günlük profesyonel kullanıma yönelik takviyeli yapı, onarım rehberliği ve yedek parça desteği.',
        },
        {
          problem: 'Filo birbirinden farklı ve markasız görünüyor.',
          solution: 'Birim bir takım filosu için kulüp adı, renkler ve logo her tahtaya basılır.',
        },
        {
          problem: 'Filoyu büyütmek eşleşen stok aramak demek.',
          solution: 'Tekrar siparişler aynı doğrulanmış platformlarda yapılır, böylece yeni tahtalar mevcut olanlarla eşleşir.',
        },
        {
          problem: 'Filo bütçesi sınırlı.',
          solution: 'Filo fiyatları ve tekrar siparişler, parçalar ile bakım soruları için ayrı bir temas noktası.',
        },
      ],
      steps: [
        { title: 'Kulübünüzü anlatın', body: 'Üye sayısı, seans türleri ve mevcut ekipman.' },
        { title: 'Tahta tiplerini seçin', body: 'Programınıza uygun antrenman, başlangıç ve takım şekilleri.' },
        { title: 'Kulüp kimliğini ekleyin', body: 'Tahtalar ve aksesuarlarda adınız, renkleriniz ve logonuz.' },
        { title: 'Sipariş verin ve büyütün', body: 'Filo tedariki, yedek parçalar ve tutarlı tekrar siparişler.' },
      ],
      caseStudy: {
        title: 'Kulüp filosunun yenilenmesi',
        body: 'Bir kürek kulübü kimliğini yenileyip filosunu 25 markalı antrenman tahtası ve yedek parçalarla değiştirdi. Üyeler eşleşen ekipmanla antrenman yapıyor ve kulüp, sonraki sezonda aynı siparişi tekrarlayarak filoyu genişletti.',
        tags: ['Kulüp kimliği', 'Filo yenileme', 'Parça desteği'],
      },
      faqs: [
        {
          q: 'SUP kulüpleri takım tahtalarını özelleştirebilir mi?',
          a: 'Evet. Kulüpler grafikleri, renkleri ve ürün yapılandırmasını özelleştirebilir — her tahtada kulüp adı, renkler ve logo.',
        },
        {
          q: 'Etkinlik bazlı SUP üretimini destekleyebilir misiniz?',
          a: 'Evet. Üretim planı, etkinlik versiyonu tahtalar ve aksesuarlar dahil etkinlik gereksinimlerine göre hazırlanabilir.',
        },
        {
          q: 'Kulüp antrenmanı için hangi tahtalar en uygundur?',
          a: 'Üyelerinizin seviyesine uygun kararlı ve dayanıklı tahtalar — dersler için geniş başlangıç şekilleri, mesafe antrenmanı için touring şekilleri.',
        },
        {
          q: 'Kulüplere filo fiyatı veriyor musunuz?',
          a: 'Evet — kulüp filoları için hacim fiyatları geçerlidir ve tekrar siparişler, parçalar ile bakım soruları için ayrı bir temas noktası sunulur.',
        },
        {
          q: 'Hasarlı tahtalar onarılabilir veya değiştirilebilir mi?',
          a: 'Yedek parça, onarım rehberliği ve tekrar sipariş desteği sağlıyoruz; böylece filo tutarlı kalır.',
        },
      ],
      ctaLevel: 'cold',
      ctaLabel: 'Kulüp SUP Projenizi Görüşelim',
    },
    {
      slug: 'school-sup',
      navLabel: 'Okul Kürek Tahtası Programı',
      metaTitle: 'Okul SUP Ekipmanı | Eğitim İçin Özel Kürek Tahtaları',
      metaDescription:
        'iSupfactory özelleştirilmiş üretim desteğiyle okullar, kamplar ve kurumlar için güvenli ve güvenilir SUP ekipmanı çözümleri sağlayın.',
      kicker: 'Okul Kürek Tahtası Programı',
      serviceType: 'Okul ve Program SUP Ekipmanı',
      answer:
        'Okullar ve eğitim programları için, basılı güvenlik rehberi, kaplamalı kürekler ve koruyucu aksesuarlarla birlikte kararlı, başlangıç dostu tahtalar tedarik ediyoruz; ölçüler sınıf mevcudunuza ve depolama düzeninize göre belirlenir. Standart hacimli parti 150 m rulo başına 90–100+ adettir ve pilot seriler 20–50 adetten başlar; teslim süreleri okulun satın alma döngüsüne uyacak şekilde planlanır.',
      h1: 'Okullar ve Programlar İçin Güvenli ve Güvenilir SUP Çözümleri',
      intro: [
        'Okullar kürek sporlarını farklı yürütür: büyük sınıflar, farklı yetenek düzeyleri, katı güvenlik ihtiyaçları ve eğitim bütçeleri. Okul programımız, kararlı ve başlangıç dostu tahtaları, sınıf mevcutlarına uyan paket seçeneklerini ve eğitmen perspektifinden rehberliği sunar.',
        'Toplu tedarik ve tekrar sipariş desteği, ekipmanın yeni öğrenci grupları için yıllar boyunca hazır kalmasını sağlar.',
      ],
      scenario: {
        title: 'Öğrencilere kürek sporları öğretiyorsunuz',
        body: 'Sınıflar büyük ve yetenek düzeyleri değişkendir. İlk kez suda çıkacaklar için kararlı ve güvenli tahtalara, sınıf mevcutlarına uygun miktarlara ve okul bütçesine ve satın alma döngüsüne sığan bir ekipman programına ihtiyacınız var.',
      },
      pairs: [
        {
          problem: 'Öğrenciler suda en yüksek kararlılığa ihtiyaç duyuyor.',
          solution: 'Geniş, yüksek hacimli başlangıç tahtaları ve ilk kez deneyenlere hata affeden çok kişilik tahtalar.',
        },
        {
          problem: 'Sınıf mevcutları ölçekte tutarlı ekipman gerektiriyor.',
          solution: 'Sınıf miktarları için toplu program fiyatları ve her tahtada aynı kalite.',
        },
        {
          problem: 'Eğitmenler sınırlı destekle güvenliği yönetiyor.',
          solution: 'Tahtalar açık kullanım rehberiyle gelir ve su alanınıza göre miktar ile yerleşim konusunda yönlendirme sağlarız.',
        },
        {
          problem: 'Ekipman birden fazla öğrenci grubuna dayanmalı.',
          solution: 'Takviyeli yapı ve program ömrü boyunca yedek parça ile tekrar sipariş desteği.',
        },
      ],
      steps: [
        { title: 'Programınızı paylaşın', body: 'Sınıf mevcudu, su alanı, eğitmen düzeni ve bütçe döngüsü.' },
        { title: 'Paketi oluşturun', body: 'Tahminle değil, öğretimle eşleşen tahta tipleri ve miktarlar.' },
        { title: 'Numuneyi onaylayın', body: 'Kararlılığı, yapıyı ve yüzeyi fiziksel bir tahtada doğrulayın.' },
        { title: 'Teslim edin ve yenileyin', body: 'Toplu tedarik, yedek parçalar ve yeni gruplar için tekrar siparişler.' },
      ],
      caseStudy: {
        title: 'Okul su sporları programı',
        body: 'Bir okul, 15 tahtalık başlangıç filosu ve ilk dersler için çok kişilik tahtalarla kürek sporunu seçmeli ders olarak başlattı. Eğitmenler, kararlı platformlar sayesinde ilk seansta daha hızlı ilerleme bildirdi ve program ertesi yıl uygun bir tekrar siparişle ekipmanını yeniledi.',
        tags: ['Başlangıç filosu', 'Program başlangıcı', 'Yenileme siparişleri'],
      },
      faqs: [
        {
          q: 'Okullar için hangi SUP ekipmanı uygundur?',
          a: 'SUP ekipmanı seçimi kullanıcı yaşına, uygulama ortamına ve program gereksinimlerine bağlıdır — geniş ve kararlı tahtalar öğretim için standart tercihtir.',
        },
        {
          q: 'Okullar SUP ekipmanını özelleştirebilir mi?',
          a: 'Evet. Okullar programlarına göre grafikleri, renkleri ve ekipman paketlerini özelleştirebilir.',
        },
        {
          q: 'Okul SUP dersleri için hangi tahtalar en iyidir?',
          a: 'Geniş ve kararlı başlangıç tahtaları ile çok kişilik tahtalar idealdir — hacimleri ilk kez deneyenlere hata affeder ve birkaç kullanıcı altında kararlıdır.',
        },
        {
          q: 'Miktarlar sınıf mevcudumuza uygun olabilir mi?',
          a: 'Evet — program fiyatları sınıf miktarları üzerine kurulur ve sayıları su alanınıza ve kullanım sırasına göre öneririz.',
        },
        {
          q: 'Okul satın alma takvimleriyle çalışıyor musunuz?',
          a: 'Evet. Numune ve seri üretim teslim sürelerini okul bütçe ve sezon döngülerine göre planlarız.',
        },
      ],
      ctaLevel: 'cold',
      ctaLabel: 'Okulunuzun SUP Programını Görüşelim',
    },
  ],
  ro: [
    {
      slug: 'custom-sup',
      navLabel: 'Fabricare SUP personalizate',
      metaTitle: 'Dezvoltare SUP personalizate | Soluții dedicate pentru plăci de vâslit',
      metaDescription:
        'Dezvoltați produse SUP personalizate cu iSupfactory. Sprijinim companiile și organizațiile cu cerințe de produs, personalizare, mostre și producție.',
      kicker: 'Producător de SUP personalizate',
      serviceType: 'Dezvoltare de produse SUP personalizate',
      answer:
        'Dezvoltăm SUP-uri umflabile, plăci rigide și accesorii personalizate conform cerinței dumneavoastră — formă, grafică, materiale și ambalaj — de la inginerie și mostre până la producție. Proiectele personalizate pornesc de la 90–100+ buc. per rolă de 150 m (volum); mostrele se expediază în 7–12 zile, iar producția durează 25–35 de zile după confirmarea comenzii și a avansului.',
      h1: 'Produse SUP personalizate, construite conform cerințelor dumneavoastră',
      intro: [
        'Aveți nevoie de plăci de vâslit construite conform specificațiilor proprii — formă, grafică, materiale, ambalaj — fără să operați o fabrică proprie. Suntem partenerul de producție care preia cerința dumneavoastră și livrează un produs gata de predare.',
        'Fiecare proiect este coordonat de un specialist dedicat care gestionează designul, mostrele, producția și livrările, astfel încât să știți întotdeauna în ce stadiu se află comanda.',
      ],
      scenario: {
        title: 'Doriți plăci construite conform specificațiilor proprii',
        body: 'Nu o alegere din catalog, ci o cerință de produs. Forma preferată, grafica, nivelul de calitate, ambalajul. Proiectăm, realizăm mostre și producem pe platforme dovedite, cu flexibilitate încă de la prima serie mică.',
      },
      pairs: [
        {
          problem: 'Catalogele fabricilor oferă doar modele standard, pe care nu le puteți modifica.',
          solution: 'Producem plăci personalizate cu formele, graficele și specificațiile dumneavoastră — de la prima mostră până la seriile complete de producție.',
        },
        {
          problem: 'Cantitățile minime mari vă blochează în stoc înainte de validarea pieței.',
          solution: 'Producția personalizată în volum pornește de la 90–100+ buc. pe model, iar seriile pilot pe platforme existente pornesc de la 20–50 buc. — astfel, primele serii rămân mici, iar prețul unitar rămâne corect.',
        },
        {
          problem: 'Nu aveți în echipă un departament de design sau de inginerie.',
          solution: 'Echipa noastră proprie de design și inginerie transformă o idee, o schiță sau o placă de referință în desene tehnice gata de producție.',
        },
        {
          problem: 'Calitatea fabricii este necunoscută, iar comunicarea este lentă.',
          solution: 'Un specialist de proiect preia de la început până la sfârșit mostrele, etapele de control al calității și termenele de livrare — un singur punct de contact și actualizări clare.',
        },
      ],
      steps: [
        { title: 'Trimiteți proiectul', body: 'Descrieți-ne cerințele sau trimiteți schițe și imagini de referință.' },
        { title: 'Design și mostră', body: 'Dezvoltăm desenele tehnice și expediem o mostră fizică în 7–12 zile.' },
        { title: 'Aprobare și producție', body: 'După aprobarea dumneavoastră, producția durează 25–35 de zile, cu control al calității în mai multe puncte.' },
        { title: 'Livrare și recomandări', body: 'Export global cu ambalaj profesional și suport pentru comenzile repetate, la o calitate constantă.' },
      ],
      caseStudy: {
        title: 'Extinderea gamei de produse a unei mărci outdoor',
        body: 'O marcă de echipament outdoor a intrat în sporturile de vâslit cu o placă de crocieră proprie. Am dezvoltat placa pornind de la o schiță preliminară, am obținut aprobarea mostrei în 15 zile și am realizat prima serie de producție în 25–35 de zile.',
        tags: ['Dezvoltare placă', 'Grafică de marcă', 'Prima serie de producție'],
      },
      faqs: [
        {
          q: 'Puteți dezvolta un produs SUP pornind de la ideea mea?',
          a: 'Da. Vă ajutăm să evaluăm cerințele și să dezvoltăm o soluție gata de producție — de la concept și desene tehnice până la o mostră fizică.',
        },
        {
          q: 'Pot personaliza grafica și culorile SUP?',
          a: 'Da. Graficele, culorile și elementele de marcă pot fi dezvoltate conform cerințelor proiectului.',
        },
        {
          q: 'Care este comanda minimă pentru fabricarea SUP personalizate?',
          a: 'Producția personalizată în volum pornește de la 90–100+ buc. pe model, iar seriile pilot pe platforme existente pornesc de la 20–50 buc. Cantitățile mai mari permit un preț unitar mai bun, iar comenzile repetate păstrează matrițele și desenele.',
        },
        {
          q: 'Ce elemente ale unei plăci pot fi personalizate?',
          a: 'Forma și dimensiunile, construcția și materialele, grafica și logo-ul, dispunerea suprafeței EVA, accesoriile (vâslă, pompă, husă) și ambalajul.',
        },
        {
          q: 'Oferiți mostre înainte de producție?',
          a: 'Da — o mostră fizică este produsă și aprobată înainte de orice serie de producție. Termenul pentru realizarea mostrei este, de regulă, de 7–12 zile.',
        },
        {
          q: 'Pot folosi doar materialele de marcă, fără o echipă de design proprie?',
          a: 'Da. Echipa noastră de design dezvoltă grafică gata de producție pornind de la logo-ul, culorile de marcă sau un concept preliminar.',
        },
      ],
      ctaLevel: 'hot',
      ctaLabel: 'Discutați proiectul dumneavoastră de SUP personalizate',
    },
    {
      slug: 'private-label-sup',
      navLabel: 'Plăci SUP cu marcă proprie',
      metaTitle: 'Producție SUP cu marcă proprie | Fabricare personalizată',
      metaDescription:
        'iSupfactory oferă suport pentru producția SUP cu marcă proprie către brandurile existente, ajutând la dezvoltarea produselor SUP personalizate de la specificații până la producție.',
      kicker: 'Plăci SUP cu marcă proprie',
      serviceType: 'Producție SUP cu marcă proprie',
      answer:
        'Producția cu marcă proprie așază marca dumneavoastră pe platforme SUP dovedite și gata de producție, fără matrițe noi. Alegeți un model de bază, aplicați logo-ul, culorile, ambalajul și accesoriile și comandați de la 90–100+ buc. per rolă de 150 m (volum). Este cea mai rapidă și cea mai puțin riscantă cale de lansare; mostrele durează 7–12 zile, iar producția 25–35 de zile după comandă.',
      h1: 'Suport pentru producția SUP cu marcă proprie, pentru marca dumneavoastră',
      intro: [
        'Producția cu marcă proprie vă permite să lansați o gamă de plăci de vâslit sub marca dumneavoastră, fără investiții în matrițe sau într-o fabrică. Logo-ul, culorile și ambalajul sunt aplicate pe platforme verificate calitativ, iar cantitățile cresc odată cu cererea.',
        'Ne asumăm partea de produs pentru ca dumneavoastră să vă concentrați pe partea de marcă: designul, ambalajul și gestionarea comenzilor repetate sunt în sarcina noastră.',
      ],
      scenario: {
        title: 'Aveți o marcă și aveți nevoie de un produs sub ea',
        body: 'O identitate de marcă fără stoc. Doriți o gamă de plăci de vâslit vândabilă, care să poarte numele dumneavoastră, în cantități care corespund etapei afacerii — de la primul lot de validare până la flotele reordonate.',
      },
      pairs: [
        {
          problem: 'Marca apare doar pe etichetă, iar produsul pare în continuare generic.',
          solution: 'Integrare completă de marcă: grafică pe placă, logo, dispunerea suprafeței EVA, vâslă, pompă, husă și ambalaj de marcă.',
        },
        {
          problem: 'Primele comenzi vă obligă să achiziționați sute de bucăți pe care s-ar putea să nu le vindeți.',
          solution: 'Începeți cu un lot pilot de 20–50 bucăți pe o platformă standard, apoi scalați la seria standard de volum de la 90–100+ bucăți — validați piața înaintea loturilor mari.',
        },
        {
          problem: 'Dezvoltarea designului și a ambalajului pare inaccesibilă.',
          solution: 'Materialele dumneavoastră de marcă sunt transformate de echipa noastră de design în grafică de placă și ambalaj gata de producție.',
        },
        {
          problem: 'Comenziile repetate oscilează din punct de vedere al calității sau al disponibilității.',
          solution: 'Matrițele și desenele rămân ale dumneavoastră, iar comenzile repetate se realizează pe aceleași platforme verificate, la o calitate constantă.',
        },
      ],
      steps: [
        { title: 'Prezentați-ne marca', body: 'Trimiteți logo-ul, culorile și orice material de marcă existent.' },
        { title: 'Dezvoltăm grafica', body: 'Proiectăm grafica plăcii, dispunerea EVA și ambalajul în jurul mărcii dumneavoastră.' },
        { title: 'Aprobați mostra', body: 'O mostră fizică confirmă culorile, finisajele și ambalajul.' },
        { title: 'Producere și livrare', body: 'Producția se realizează în cantitatea cerută, iar controlul calității și exportul sunt gestionate de la un capăt la altul.' },
      ],
      caseStudy: {
        title: 'Marcă nouă, prima comandă de producție',
        body: 'Un retailer de articole sportive a lansat propria gamă de plăci de vâslit pornind doar de la un logo. Am dezvoltat grafica completă a plăcii și a ambalajului, am produs un prim lot de 50 bucăți pentru testarea pieței, apoi am scalat către o comandă completă de producție într-un singur sezon.',
        tags: ['Dezvoltare de marcă', 'Design de ambalaj', 'Producție scalată'],
      },
      faqs: [
        {
          q: 'Ce este producția SUP cu marcă proprie?',
          a: 'Producția SUP cu marcă proprie permite companiilor să vândă produse SUP sub propria marcă, cu specificații personalizate și suport de producție.',
        },
        {
          q: 'Pot brandurile existente să dezvolte produse SUP noi?',
          a: 'Da. iSupfactory sprijină brandurile care vor să se extindă către produsele SUP — selecția produselor, ajustarea specificațiilor, grafică personalizată și producție.',
        },
        {
          q: 'Ce include un program SUP cu marcă proprie?',
          a: 'Marca dumneavoastră pe placa propriu-zisă — grafică, logo, suprafață EVA — plus, opțional, vâslă, pompă, rucsac și ambalaj de marcă: un produs complet, vândabil sub numele dumneavoastră.',
        },
        {
          q: 'Se poate modifica designul între comenzi?',
          a: 'Da. După ce materialele de marcă sunt gata de producție, comenzile repetate pot reînnoi grafica, culorile sau ambalajul în orice moment.',
        },
        {
          q: 'Avem doar un logo. Ne puteți ajuta totuși?',
          a: 'Da. Echipa noastră de design dezvoltă grafica completă a plăcii și a ambalajului pornind de la logo-ul și culorile mărcii dumneavoastră.',
        },
      ],
      ctaLevel: 'warm',
      ctaLabel: 'Discutați proiectul cu marcă proprie',
    },
    {
      slug: 'resort-sup',
      navLabel: 'Plăci de vâslit pentru resorturi',
      metaTitle: 'Echipament SUP personalizat pentru resorturi | Plăci cu marcă',
      metaDescription:
        'Creați echipament SUP personalizat pentru resorturi și hoteluri cu plăci cu marcă, accesorii și suport de producție de la iSupfactory.',
      kicker: 'Plăci de vâslit pentru resorturi',
      serviceType: 'Echipament SUP pentru resorturi și hoteluri',
      answer:
        'Furnizăm SUP-uri umflabile cu marcă pentru resorturi și hoteluri, construite pentru utilizare zilnică de către oaspeți: construcție drop-stitch de înaltă presiune, suduri sudate RF întărite și cantități minime eșalonate de la 20–50 bucăți pilot până la 90–100+ pentru lansarea flotelor. Plăcile poartă logo-ul și culorile dumneavoastră, iar vă sfătuim privind depozitarea, întreținerea și programele de comenzi repetate.',
      h1: 'Soluții de echipament SUP personalizat pentru resorturi și hoteluri',
      intro: [
        'Flotele de plăci de vâslit pentru resorturi trebuie să reziste utilizării zilnice de către oaspeți, să fie ușor de depozitat între sezone și să poarte marca dumneavoastră. Construim plăci rezistente și prietenoase pentru oaspeți, în culorile dumneavoastră, și structurăm programul de flotă în funcție de operațiunile dumneavoastră.',
        'Cantitățile sunt recomandate pe baza tiparelor de utilizare, nu a presupunerilor — iar programele de comenzi repetate mențin flota proaspătă de la un sezon la altul.',
      ],
      scenario: {
        title: 'Organizați activități pe apă pentru oaspeți',
        body: 'Oaspeții așteaptă o experiență memorabilă pe apă, iar echipamentul reprezintă proprietatea dumneavoastră. Aveți nevoie de plăci suficient de rezistente pentru închirierea zilnică, ușor de depozitat și marcate pentru a se potrivi resortului.',
      },
      pairs: [
        {
          problem: 'Flotele pentru oaspeți se uzează rapid la închirierea zilnică.',
          solution: 'Construcție pentru grad de închiriere, cu marginile întărite și materiale rezistente la radiațiile UV, concepută pentru sesiuni repetate.',
        },
        {
          problem: 'Spațiul de depozitare este limitat în afara sezonului.',
          solution: 'Variante umflabile ușor de depozitat, care încap într-un dulap la finalul sezonului.',
        },
        {
          problem: 'Echipamentul pare generic și nu reflectă proprietatea dumneavoastră.',
          solution: 'Grafică pe întreaga placă, logo și marcaj EVA în culorile resortului — inclusiv accesorii cu marcă.',
        },
        {
          problem: 'Înlocuirea și reînnoirea flotei nu sunt coordonate.',
          solution: 'Un program de comenzi repetate pentru flotă, cu calitate constantă, suport pentru piese de schimb și recomandări realiste privind cantitățile.',
        },
      ],
      steps: [
        { title: 'Descrieți operațiunile', body: 'Numărul de oaspeți, linia de țărm, condițiile de depozitare și durata sezonului.' },
        { title: 'Obțineți un plan de flotă', body: 'Recomandăm tipurile de plăci și cantitățile pe baza tiparelor de utilizare.' },
        { title: 'Aprobați mostra cu marcă', body: 'Culorile și logo-ul dumneavoastră sunt confirmate pe o placă fizică.' },
        { title: 'Primiți și întrețineți', body: 'Livrare, piese de schimb și un program de comenzi repetate pentru sezoanele viitoare.' },
      ],
      caseStudy: {
        title: 'Flotă pentru oaspeți la un resort de coastă',
        body: 'Un resort de coastă a dotat programul său de plajă cu 40 de plăci umflabile cu marcă, în culorile resortului, inclusiv vâsle și pompe cu marcă. Plăcile se depozitează într-un singur dulap în afara sezonului, iar flota a fost reînnoită după al doilea sezon, la aceeași calitate.',
        tags: ['Flotă cu marcă pentru oaspeți', 'Depozitare umflabilă', 'Reînnoire sezonieră'],
      },
      faqs: [
        {
          q: 'Pot resorturile personaliza echipamentul SUP cu logo-ul lor?',
          a: 'Da. Resorturile pot personaliza grafica, culorile și accesoriile conform cerințelor proiectului — aplicarea identității de marcă pe întreaga placă, în culorile proprietății.',
        },
        {
          q: 'Puteți furniza mai multe unități SUP pentru operațiunile unui resort?',
          a: 'Da. Soluțiile de producție pot fi dezvoltate în funcție de cerințele flotei, de la flotă inițială până la programe de reînnoire sezonieră.',
        },
        {
          q: 'De câte plăci are nevoie un resort?',
          a: 'Majoritatea resorturilor încep cu 20–50 de plăci și cresc odată cu cererea. Recomandăm cantități pe baza numărului de oaspeți și a liniei de țărm, nu a presupunerilor.',
        },
        {
          q: 'Sunt plăcile umflabile potrivite pentru utilizare în resorturi?',
          a: 'Da. Plăcile SUP umflabile moderne sunt extrem de rezistente și mult mai ușor de depozitat și transportat — alegerea preferată pentru resorturile cu spațiu de depozitare redus.',
        },
        {
          q: 'Poate flota să poarte logo-ul și culorile noastre?',
          a: 'Da — grafica pe întreaga placă, imprimarea logo-ului, marcajul suprafeței EVA și accesoriile cu marcă fac parte din programul pentru resorturi.',
        },
      ],
      ctaLevel: 'warm',
      ctaLabel: 'Solicitați o soluție SUP pentru resortul dumneavoastră',
    },
    {
      slug: 'club-sup',
      navLabel: 'Plăci de echipă personalizate pentru cluburi',
      metaTitle: 'Echipament SUP personalizat pentru cluburi și echipe',
      metaDescription:
        'iSupfactory oferă soluții de echipament SUP personalizat pentru cluburi, echipe și evenimente, inclusiv grafică, specificații și suport de producție.',
      kicker: 'Plăci de echipă personalizate pentru cluburi',
      serviceType: 'Echipament SUP pentru cluburi și echipe',
      answer:
        'Cluburile și echipele primesc flotă rezistente și constante, în culorile lor: poziționarea logo-ului, lungimi personalizate ale vâsli și seturi de accesorii pe o singură specificație standardizată a plăcii, astfel încât reparațiile și piesele de schimb să rămână simple la comenzile repetate. Cantitatea minimă pornește de la 90–100+ buc. (volum); sunt disponibile și serii pilot de la 20–50 bucăți pentru validarea inițială a specificației.',
      h1: 'Echipament SUP personalizat pentru cluburi și echipe',
      intro: [
        'Cluburile de vâslit au nevoie de plăci care rezistă antrenamentului zilnic, care arată ca echipa și care rămân constante la comenzile repetate. Producem plăci de echipă personalizate cu denumirea și culorile clubului dumneavoastră, la prețuri potrivite pentru flote.',
        'Programele pentru cluburi includ și partea practică: piese de schimb, îndrumări privind reparațiile și suport pentru comenzile repetate, la aceeași calitate.',
      ],
      scenario: {
        title: 'Clubul dumneavoastră organizează antrenamente și sesiuni de echipă',
        body: 'Plăcile sunt folosite zilnic de membri și reprezintă clubul la evenimente și regate. Doriți echipament de echipă durabil, cu identitatea clubului, fără să gestionați singuri relația cu fabrica.',
      },
      pairs: [
        {
          problem: 'Plăcile de antrenament se degradează sub utilizare intensă și repetată.',
          solution: 'Construcție întărită, concepută pentru utilizare profesională zilnică, cu îndrumări privind reparațiile și suport pentru piese de schimb.',
        },
        {
          problem: 'Flota arată neuniformă și fără marcă.',
          solution: 'Denumirea, culorile și logo-ul clubului sunt imprimate pe fiecare placă, pentru o flotă de echipă unitară.',
        },
        {
          problem: 'Extinderea flotei presupune căutarea unor stocuri potrivite.',
          solution: 'Comenziile repetate se realizează pe aceleași platforme verificate, astfel încât plăcile noi să corespundă celor existente.',
        },
        {
          problem: 'Bugetul flotei este limitat.',
          solution: 'Prețuri de flotă și un punct de contact dedicat pentru comenzile repetate, piesele de schimb și întrebările de întreținere.',
        },
      ],
      steps: [
        { title: 'Prezentați clubul', body: 'Numărul de membri, tipurile de sesiuni și echipamentul actual.' },
        { title: 'Alegeți tipurile de plăci', body: 'Forme de antrenament, pentru începători și de echipă, adaptate programului dumneavoastră.' },
        { title: 'Adăugați identitatea clubului', body: 'Denumirea, culorile și logo-ul pe plăci și accesorii.' },
        { title: 'Comandați și extindeți', body: 'Aprovizionarea flotei, piese de schimb și comenzi repetate constante.' },
      ],
      caseStudy: {
        title: 'Reînnoirea flotei unui club',
        body: 'Un club de vâslit și-a reîmprospătat identitatea și și-a înlocuit flota cu 25 de plăci de antrenament cu marcă și piese de schimb. Membrii se antrenează pe echipament identic, iar clubul a extins flota în sezonul următor printr-o comandă repetată identică.',
        tags: ['Identitatea clubului', 'Reînnoirea flotei', 'Suport piese de schimb'],
      },
      faqs: [
        {
          q: 'Pot cluburile de SUP personaliza plăcile de echipă?',
          a: 'Da. Cluburile pot personaliza grafica, culorile și configurația produsului — denumirea, culorile și logo-ul clubului pe fiecare placă.',
        },
        {
          q: 'Puteți susține producția SUP pentru evenimente?',
          a: 'Da. Planul de producție poate fi elaborat conform cerințelor evenimentului, inclusiv plăci și accesorii în ediția evenimentului.',
        },
        {
          q: 'Ce plăci sunt cele mai potrivite pentru antrenamentul de club?',
          a: 'Plăci stabile și rezistente, adaptate nivelului membrilor — forme late pentru începători, folosite la lecții, și forme de crocieră pentru antrenamentul de rezistență.',
        },
        {
          q: 'Oferiți prețuri de flotă pentru cluburi?',
          a: 'Da — prețurile de volum se aplică flotelor de club, cu un punct de contact dedicat pentru comenzile repetate, piesele de schimb și întrebările de întreținere.',
        },
        {
          q: 'Pot fi reparate sau înlocuite plăcile deteriorate?',
          a: 'Furnizăm piese de schimb, îndrumări privind reparațiile și suport pentru comenzile repetate, astfel încât flota să rămână constantă.',
        },
      ],
      ctaLevel: 'cold',
      ctaLabel: 'Discutați proiectul SUP al clubului',
    },
    {
      slug: 'school-sup',
      navLabel: 'Program de plăci de vâslit pentru școli',
      metaTitle: 'Echipament SUP pentru școli | Plăci de vâslit personalizate pentru învățământ',
      metaDescription:
        'Oferiți soluții sigure și fiabile de echipament SUP pentru școli, tabere și organizații, cu suport de producție personalizat de la iSupfactory.',
      kicker: 'Program de plăci de vâslit pentru școli',
      serviceType: 'Echipament SUP pentru școli și programe',
      answer:
        'Pentru școli și programe educaționale furnizăm plăci stabile, prietenoase pentru începători, cu indicații de siguranță tipărite, vâsle cu mânere căptușite și accesorii de protecție, dimensionate în funcție de numărul de elevi și de sistemul de depozitare. Lotul de volum standard este de 90–100+ buc. pe rolă de 150 m, cu serii pilot de la 20–50 bucăți; termenele de livrare susțin ciclul de achiziții al școlii.',
      h1: 'Soluții SUP sigure și fiabile pentru școli și programe',
      intro: [
        'Școlile desfășoară sporturile de apă altfel: clase mari, niveluri mixte, cerințe stricte de siguranță și bugete educaționale. Programul nostru pentru școli oferă plăci stabile, prietenoase pentru începători, opțiuni de pachet adaptate dimensiunii claselor și consultanță din perspectiva instructorului.',
        'Aprovizionarea în vrac și suportul pentru comenzile repetate mențin echipamentul disponibil de la un an la altul pentru noile promoții de elevi.',
      ],
      scenario: {
        title: 'Predați sporturi de apă elevilor',
        body: 'Clasele sunt mari, iar nivelurile de pregătire diferă. Aveți nevoie de plăci stabile și sigure pentru cei care practică pentru prima dată, de cantități care corespund dimensiunii claselor și de un program de echipament care să se încadreze în bugetul școlii și în ciclul de achiziții.',
      },
      pairs: [
        {
          problem: 'Elevii au nevoie de stabilitate maximă pe apă.',
          solution: 'Plăci late, cu volum mare, pentru începători și plăci multipersoane, concepute să fie iertătoare pentru cei care practică pentru prima dată.',
        },
        {
          problem: 'Dimensiunile claselor cer echipament constant la scară largă.',
          solution: 'Prețuri de program în vrac pentru cantitățile necesare claselor, cu aceeași calitate pe fiecare placă.',
        },
        {
          problem: 'Instructorii gestionează siguranța cu ajutor limitat.',
          solution: 'Plăcile vin cu instrucțiuni clare de utilizare, iar vă recomandăm cantități și amplasarea în funcție de zona de apă.',
        },
        {
          problem: 'Echipamentul trebuie să reziste mai multor promoții de elevi.',
          solution: 'Construcție întărită, plus piese de schimb și suport pentru comenzile repetate pe durata vieții programului.',
        },
      ],
      steps: [
        { title: 'Prezentați programul', body: 'Dimensiunile claselor, zona de apă, organizarea instructorilor și ciclul bugetar.' },
        { title: 'Construiți pachetul', body: 'Tipuri și cantități de plăci alese pe baza predării, nu a presupunerilor.' },
        { title: 'Aprobați mostra', body: 'Verificați stabilitatea, construcția și finisajele pe o placă fizică.' },
        { title: 'Livrați și reînnoiți', body: 'Aprovizionare în vrac, piese de schimb și comenzi repetate pentru noile promoții.' },
      ],
      caseStudy: {
        title: 'Program școlar de sporturi de apă',
        body: 'O școală a lansat o disciplină opțională de sporturi de apă cu o flotă de 15 plăci pentru începători și plăci multipersoane pentru primele lecții. Instructorii au raportat un progres mai rapid în prima ședință datorită platformelor stabile, iar programul a reînnoit echipamentul în anul următor printr-o comandă repetată identică.',
        tags: ['Flotă pentru începători', 'Lansarea programului', 'Comenzi de reînnoire'],
      },
      faqs: [
        {
          q: 'Ce echipament SUP este potrivit pentru școli?',
          a: 'Alegerea echipamentului SUP depinde de vârsta utilizatorilor, de mediul de utilizare și de cerințele programului — plăcile late și stabile reprezintă alegerea standard pentru predare.',
        },
        {
          q: 'Pot școlile personaliza echipamentul SUP?',
          a: 'Da. Școlile pot personaliza grafica, culorile și pachetele de echipament conform programului propriu.',
        },
        {
          q: 'Ce plăci sunt cele mai bune pentru lecțiile de SUP în școli?',
          a: 'Plăcile late și stabile pentru începători și plăcile multipersoane sunt ideale — volumul lor le face iertătoare pentru cei care practică pentru prima dată și stabile cu mai mulți vâslași.',
        },
        {
          q: 'Pot cantitățile să corespundă dimensiunii claselor noastre?',
          a: 'Da — prețurile de program se construiesc în jurul cantităților necesare claselor, iar numerele sunt recomandate în funcție de zona de apă și de rotația elevilor.',
        },
        {
          q: 'Lucrați conform termenelor de achiziție din învățământ?',
          a: 'Da. Planificăm termenele pentru mostre și producție în jurul ciclurilor bugetare și sezoniere din învățământ.',
        },
      ],
      ctaLevel: 'cold',
      ctaLabel: 'Discutați programul SUP al școlii',
    },
  ],
  hu: [
    {
      slug: 'custom-sup',
      navLabel: 'Egyedi SUP gyártás',
      metaTitle: 'Egyedi SUP fejlesztés | Dedikált megoldások eződeszkákhoz',
      metaDescription:
        'Fejlesztsön egyedi SUP termékeket az iSupfactoryval. Támogatjuk a vállalatokat és szervezeteket a termékigény, a testreszabás, a minták és a gyártás terén.',
      kicker: 'Egyedi SUP gyártó',
      serviceType: 'Egyedi SUP termékfejlesztés',
      answer:
        'Egyedi felfújható SUP-ket, merev deszkákat és tartozékokat fejlesztünk az Ön igénye szerint — alak, grafika, anyagok és csomagolás — a mérnöki tervezéstől és a mintáktól a gyártásig. Az egyedi projektek 150 m-es tekercsenként 90–100+ darabbal (volumen) indulnak; a mintákat 7–12 napon belül szállítjuk ki, a gyártás pedig a rendelés és az előleg megerősítése után 25–35 napot vesz igénybe.',
      h1: 'Egyedi SUP termékek, az Ön igényei szerinti kialakításban',
      intro: [
        'Olyan eződeszkákra van szüksége, amelyeket a saját specifikációi szerint építünk meg — alak, grafika, anyagok, csomagolás — saját gyár üzemeltetése nélkül. Mi vagyunk az a gyártási partner, aki átveszi az Ön igényét, és átadásra kész terméket szállít.',
        'Minden projektet egy dedikált szakember irányít, aki a dizájnt, a mintákat, a gyártást és a szállításokat kezeli, így Ön mindig tudja, hol tart a rendelés.',
      ],
      scenario: {
        title: 'Saját specifikáció szerint épített deszkákra van szüksége',
        body: 'Nem egy katalógusból választott opcióról van szó, hanem egy termékigényről. A kívánt alak, a grafika, a minőségi szint, a csomagolás. Megtervezünk, mintát készítünk, és bevált platformokon gyártunk, rugalmasságot biztosítva már az első kis sorozattól kezdve.',
      },
      pairs: [
        {
          problem: 'A gyári katalógusok csak standard modelleket kínálnak, amelyeket nem módosíthat.',
          solution: 'Egyedi deszkákat gyártunk az Ön formáival, grafikáival és specifikációival — az első mintától a teljes gyártási sorozatokig.',
        },
        {
          problem: 'A nagy minimális mennyiségek a piac validálása előtt készletbe kényszerítik.',
          solution: 'A volumenű egyedi gyártás modellenként 90–100+ darabbal indul, a meglévő platformokon futó pilot sorok pedig 20–50 darabbal — így az első sorozatok kicsik maradnak, az egységár pedig helyes.',
        },
        {
          problem: 'Nincs csapatában design- vagy mérnöki osztály.',
          solution: 'Saját design- és mérnöki csapatunk egy ötletből, egy vázlatból vagy egy referencia deszkából gyártásra kész műszaki rajzot készít.',
        },
        {
          problem: 'A gyár minősége ismeretlen, a kommunikáció pedig lassú.',
          solution: 'Egy projektspecialista a kezdetektől a végéig átvállalja a mintákat, a minőség-ellenőrzési lépéseket és a szállítási határidőket — egyetlen kapcsolattartási ponttal és egyértelmű tájékoztatással.',
        },
      ],
      steps: [
        { title: 'Küldje el a projektet', body: 'Írja le az igényeit, vagy küldjön vázlatokat és referenciaképeket.' },
        { title: 'Tervezés és minta', body: 'Elkészítjük a műszaki rajzokat, és 7–12 napon belül fizikai mintát küldünk.' },
        { title: 'Jóváhagyás és gyártás', body: 'Az Ön jóváhagyása után a gyártás 25–35 napot vesz igénybe, több ponton végzett minőség-ellenőrzéssel.' },
        { title: 'Szállítás és ajánlások', body: 'Globális export professzionális csomagolással, és ismételt rendelések támogatásával, állandó minőség mellett.' },
      ],
      caseStudy: {
        title: 'Egy szabadidőmárka termékkínálatának bővítése',
        body: 'Egy szabadidő-felszerelést gyártó márka a kajakos sportokkal együtt saját kajakdeszkával lépett piacra. Egy előzetes vázlatból fejlesztettük ki a deszkát, a minta jóváhagyását 15 nap alatt kaptuk meg, az első gyártási sorozatot pedig 25–35 nap alatt valósítottuk meg.',
        tags: ['Deszkafejlesztés', 'Márkagrafika', 'Első gyártási sorozat'],
      },
      faqs: [
        {
          q: 'Az Ötletem alapján fejleszthetnek egy SUP terméket?',
          a: 'Igen. Segítünk értékelni az igényeket és kifejleszteni egy gyártásra kész megoldást — a koncepttől és a műszaki rajzoktól a fizikai mintáig.',
        },
        {
          q: 'Testreszabható a SUP grafikája és a színe?',
          a: 'Igen. A grafikák, a színek és a márkaelemek a projekt igényei szerint fejleszthetők.',
        },
        {
          q: 'Mi az egyedi SUP gyártás minimális rendelési mennyisége?',
          a: 'A volumenű egyedi gyártás modellenként 90–100+ darabbal indul, a meglévő platformokon futó pilot sorok pedig 20–50 darabbal. A nagyobb mennyiségek jobb egységárat tesznek lehetővé, az ismételt rendelések pedig megőrzik a formákat és a rajzokat.',
        },
        {
          q: 'A deszka mely elemei testreszabhatók?',
          a: 'Az alak és a méretek, a kialakítás és az anyagok, a grafika és a logó, az EVA felület elrendezése, a tartozékok (lapát, szivattyú, hüvely) és a csomagolás.',
        },
        {
          q: 'Kínálnak mintát a gyártás előtt?',
          a: 'Igen — bármely gyártási sorozat előtt fizikai mintát készítünk és hagyunk jóvá. A minta elkészítésének határideje általában 7–12 nap.',
        },
        {
          q: 'Használhatom csak a márkaanyagokat, saját designcsapat nélkül?',
          a: 'Igen. Designcsapatunk a logóból, a márkaszínekből vagy egy előzetes konceptből gyártásra kész grafikát fejleszt.',
        },
      ],
      ctaLevel: 'hot',
      ctaLabel: 'Megbeszéljük az Ön egyedi SUP projektjét',
    },
    {
      slug: 'private-label-sup',
      navLabel: 'Saját márkás SUP deszkák',
      metaTitle: 'Saját márkás SUP gyártás | Egyedi gyártás',
      metaDescription:
        'Az iSupfactory támogatja a saját márkás SUP gyártását a meglévő márkák számára, a specifikációktól a gyártásig segítve az egyedi SUP termékek fejlesztését.',
      kicker: 'Saját márkás SUP deszkák',
      serviceType: 'Saját márkás SUP gyártás',
      answer:
        'A saját márkás gyártás az Ön márkáját bevált, gyártásra kész SUP platformokra helyezi, új formák nélkül. Válasszon alapmodellt, alkalmazza a logót, a színeket, a csomagolást és a tartozékokat, és rendeljen 150 m-es tekercsenként 90–100+ darabtól (volumen). Ez a leggyorsabb és a legkisebb kockázatú bevezetési út; a minták 7–12 napot, a gyártás a rendelés után 25–35 napot vesz igénybe.',
      h1: 'Saját márkás SUP gyártás támogatása az Ön márkájához',
      intro: [
        'A saját márkás gyártás lehetővé teszi, hogy saját márkájával induljon eződeszka-kínálat, formákba vagy gyárba való befektetés nélkül. A logó, a színek és a csomagolás minőségileg ellenőrzött platformokra kerülnek, a mennyiségek pedig a kereslettel együtt nőnek.',
        'A termékoldalt mi vállaljuk, hogy Ön a márkaoldalra koncentrálhasson: a dizájn, a csomagolás és az ismételt rendelések kezelése nálunk van.',
      ],
      scenario: {
        title: 'Van márkája, és szüksége van egy rá épülő termékre',
        body: 'Márkaidentitás készlet nélkül. Olyan értékesíthető eződeszka-kínálatot szeretne, amely az Ön nevét viseli, az üzlet szakaszának megfelelő mennyiségekben — az első validáló tételtől az újratáborított flottákig.',
      },
      pairs: [
        {
          problem: 'A márka csak a címkén jelenik meg, a termék viszont továbbra is általánosnak tűnik.',
          solution: 'Teljes márkaintegráció: deszkagra és logó, EVA felület, lapát, szivattyú, hüvely és márkás csomagolás.',
        },
        {
          problem: 'Az első rendelések arra kényszerítik, hogy száz darabot vásároljanak, amelyeket esetleg nem adnak el.',
          solution: 'Kezdjen 20–50 darabos pilot tétellel egy standard platformon, majd lépjen át a 90–100+ darabos szabványos volumenű sorozatra — a nagy tételek előtt validálja a piacot.',
        },
        {
          problem: 'A design és a csomagolás fejlesztése elérhetetlennek tűnik.',
          solution: 'Az Ön márkaanyagait designcsapatunk deszkagra való grafikává és gyártásra kész csomagolássá alakítja.',
        },
        {
          problem: 'Az ismételt rendelések minőség vagy rendelkezésre állás tekintetében ingadoznak.',
          solution: 'A formák és a rajzok az Öné maradnak, az ismételt rendelések pedig ugyanazon ellenőrzött platformokon, állandó minőséggel készülnek.',
        },
      ],
      steps: [
        { title: 'Mutassa be a márkát', body: 'Küldje el a logót, a színeket és a meglévő márkaanyagokat.' },
        { title: 'Fejlesztjük a grafikát', body: 'Megtervezzük a deszka grafikáját, az EVA elrendezését és a csomagolást az Ön márkájához igazítva.' },
        { title: 'Hagyja jóvá a mintát', body: 'Egy fizikai minta erősíti meg a színeket, a felületeket és a csomagolást.' },
        { title: 'Gyártás és szállítás', body: 'A gyártás a kívánt mennyiségben történik, a minőség-ellenőrzést és az exportot végig kezeljük.' },
      ],
      caseStudy: {
        title: 'Új márka, első gyártási rendelés',
        body: 'Egy sportáru-kereskedő saját eződeszka-kínálatot indított, kizárólag egy logóból kiindulva. Elkészítettük a deszka és a csomagolás teljes grafikáját, legyártottunk egy 50 darabos első tételt a piaci teszteléshez, majd egyetlen szezonon belül teljes gyártási rendelésre scale-eltünk.',
        tags: ['Márkafejlesztés', 'Csomagolásdizajn', 'Felfuttatott gyártás'],
      },
      faqs: [
        {
          q: 'Mi a saját márkás SUP gyártás?',
          a: 'A saját márkás SUP gyártás lehetővé teszi a vállalatok számára, hogy saját márkájuk alatt adjanak el SUP termékeket, egyedi specifikációkkal és gyártási támogatással.',
        },
        {
          q: 'A meglévő márkák fejleszthetnek új SUP termékeket?',
          a: 'Igen. Az iSupfactory támogatja azokat a márkákat, amelyek az SUP termékek felé szeretnének bővülni — a termékkiválasztás, a specifikációk igazítása, az egyedi grafika és a gyártás terén.',
        },
        {
          q: 'Mit tartalmaz a saját márkás SUP program?',
          a: 'Az Ön márkája magán a deszkán — grafika, logó, EVA felület — plusz opcionálisan lapát, szivattyú, hátizsák és márkás csomagolás: egy teljes termék, amely az Ön nevével értékesíthető.',
        },
        {
          q: 'Módosítható a design a rendelések között?',
          a: 'Igen. Miután a márkaanyagok gyártásra készen állnak, az ismételt rendelések bármikor megújíthatják a grafikát, a színeket vagy a csomagolást.',
        },
        {
          q: 'Csak egy logónk van. Ebben mégis tud segíteni?',
          a: 'Igen. Designcsapatunk a logóból és a márka színeiből kiindulva elkészíti a deszka és a csomagolás teljes grafikáját.',
        },
      ],
      ctaLevel: 'warm',
      ctaLabel: 'Megbeszéljük a saját márkás projektet',
    },
    {
      slug: 'resort-sup',
      navLabel: 'Eződeszkák resortokhoz',
      metaTitle: 'Egyedi SUP felszerelés resortokhoz | Saját márkás deszkák',
      metaDescription:
        'Hozzon létre egyedi SUP felszerelést resortokhoz és szállodákhoz saját márkás deszkákkal, tartozékokkal és gyártási támogatással az iSupfactorytól.',
      kicker: 'Eződeszkák resortokhoz',
      serviceType: 'SUP felszerelés resortokhoz és szállodákhoz',
      answer:
        'Saját márkás felfújható SUP-ket szállítunk resortokhoz és szállodákhoz, a vendégek napi használatára tervezve: nagy nyomású drop-stitch kialakítás, megerősített RF hegesztések, lépcsőzetes mennyiségek a 20–50 darabos pilot sortól a 90–100+ darabos flottaindításig. A deszkák az Ön logóját és színeit viselik, és tanácsot adunk a tárolásról, a karbantartásról és az ismételt rendelések ütemezéséről.',
      h1: 'Egyedi SUP felszerelési megoldások resortokhoz és szállodákhoz',
      intro: [
        'A resortok eződeszka flottáinak ki kell bírniuk a vendégek napi használatát, könnyen tárolhatónak kell lenniük a szezonok között, és viselniük kell az Ön márkáját. Tartós, vendégbarát deszkákat építünk az Ön színeiben, a flottatervet pedig az Ön működéséhez igazítjuk.',
        'A mennyiségeket a használati minták alapján ajánljuk, nem feltételezésekből — az ismételt rendelések programja pedig szezonról szezonra frissen tartja a flottát.',
      ],
      scenario: {
        title: 'Vízi programot szervez a vendégeknek',
        body: 'A vendégek emlékezetesebb vízi élményt várnak, a felszerelés pedig az Ön tulajdona. Önnél tartós, napi kölcsönzésre alkalmas, könnyen tárolható és a resort arculatához igazított deszkákra van szükség.',
      },
      pairs: [
        {
          problem: 'A vendégflották gyorsan elhasználódnak a napi kölcsönzésben.',
          solution: 'Kölcsönzési igénybevételre tervezett kialakítás, megerősített szélekkel és UV-álló anyagokkal, ismételt ülésekhez.',
        },
        {
          problem: 'A szezonon kívül korlátozott a tárolási tér.',
          solution: 'Könnyen tárolható felfújható változatok, amelyek a szezon végén egy szekrénybe elférnek.',
        },
        {
          problem: 'A felszerelés általánosnak tűnik, és nem tükrözi az Ön tulajdonjogát.',
          solution: 'Teljes deszkára kiterjedő grafika, logó és EVA jelölés a resort színeiben — a saját márkás tartozékokkal együtt.',
        },
        {
          problem: 'A flotta cseréje és megújítása nincs összehangolva.',
          solution: 'Flottára vonatkozó ismételt rendelési program, állandó minőséggel, alkatrésztámogatással és a mennyiségekre vonatkozó reális ajánlásokkal.',
        },
      ],
      steps: [
        { title: 'Írja le a működést', body: 'A vendégek száma, a partszakasz hossza, a tárolási körülmények és a szezon hossza.' },
        { title: 'Kapjon flotta-tervet', body: 'A használati minták alapján ajánljuk a deszkatípusokat és a mennyiségeket.' },
        { title: 'Hagyja jóvá a mintát', body: 'Az Ön színei és logója egy fizikai deszkán erősülnek meg.' },
        { title: 'Fogadja el és tartsa karban', body: 'Szállítás, alkatrészek és ismételt rendelési program a jövőbeli szezonokra.' },
      ],
      caseStudy: {
        title: 'Vendégflotta egy tengerparti resortban',
        body: 'Egy tengerparti resort 40 saját márkás felfújható deszkával bővítette a strandprogramját, a resort színeiben, saját márkás lapátokkal és szivattyúkkal. A deszkákat a szezonon kívül egyetlen szekrényben tárolják, a flottát pedig a második szezon után azonos minőséggel újították meg.',
        tags: ['Saját márkás vendégflotta', 'Felfújható tárolás', 'Szezonális megújítás'],
      },
      faqs: [
        {
          q: 'Testreszabhatják a resortok a SUP felszerelést a saját logójukkal?',
          a: 'Igen. A resortok a projekt igényei szerint testreszabhatják a grafikát, a színeket és a tartozékokat — a teljes deszkára kiterjedő márkaidentitással, az üzemeltető saját színeiben.',
        },
        {
          q: 'Tudnak több SUP eszközt szállítani egy resort működéséhez?',
          a: 'Igen. A gyártási megoldások a flotta igényeihez igazíthatók, az induló flottától a szezonális megújítási programokig.',
        },
        {
          q: 'Hány deszkára van szüksége egy resortnak?',
          a: 'A legtöbb resort 20–50 deszkával indul, és a kereslettel együtt növekszik. A mennyiségeket a vendégek száma és a partszakasz hossza alapján ajánljuk, nem feltételezésekből.',
        },
        {
          q: 'Alkalmasak-e a felfújható deszkák resortokban való használatra?',
          a: 'Igen. A modern felfújható SUP deszkák rendkívül tartósak, és sokkal könnyebben tárolhatók és szállíthatók — az ezzel járó előnyök különösen a korlátozott tárolási térrel rendelkező resortok számára érvényesek.',
        },
        {
          q: 'Hordozhatja a flotta a logónkat és a színeinket?',
          a: 'Igen — a teljes deszkára kiterjedő grafika, a logó nyomtatása, az EVA felület jelölése és a saját márkás tartozékok a resort programjának részei.',
        },
      ],
      ctaLevel: 'warm',
      ctaLabel: 'Kérjen SUP megoldást az Ön resortjához',
    },
    {
      slug: 'club-sup',
      navLabel: 'Egyedi csapatdeszkák klubokhoz',
      metaTitle: 'Egyedi SUP felszerelés klubokhoz és csapatokhoz',
      metaDescription:
        'Az iSupfactory egyedi SUP felszerelési megoldásokat kínál kluboknak, csapatoknak és rendezvényeknek, beleértve a grafikát, a specifikációkat és a gyártási támogatást.',
      kicker: 'Egyedi csapatdeszkák klubokhoz',
      serviceType: 'SUP felszerelés klubokhoz és csapatokhoz',
      answer:
        'A klubok és a csapatok tartós, egységes flottát kapnak a saját színeikben: a logó elhelyezését, a lapátok egyedi hosszát és a tartozékkészleteket egyetlen szabványosított deszkaspecifikációba foglaljuk, hogy az ismételt rendelések mellett a javítások és az alkatrészek egyszerűek maradjanak. A minimális mennyiség 90–100+ darabtól (volumen) indul; a specifikáció kezdeti validálásához 20–50 darabos pilot sorok is rendelkezésre állnak.',
      h1: 'Egyedi SUP felszerelés klubokhoz és csapatokhoz',
      intro: [
        'A kajakos kluboknak olyan deszkákra van szükségük, amelyek bírják a napi edzést, a csapatot reprezentálják, és az ismételt rendelések mellett is egységesek maradnak. Egyedi csapatdeszkákat gyártunk a klub nevével és színeivel, flottaárakhoz igazított árakon.',
        'A klubprogramok része a gyakorlati oldal is: alkatrészek, javítási útmutatók és támogatás az ismételt rendelésekhez, azonos minőséggel.',
      ],
      scenario: {
        title: 'A klub edzéseket és csapatfoglalkozásokat szervez',
        body: 'A deszkákat a tagok naponta használják, és a klubot képviselik rendezvényeken és versenyeken. Tartós, a klub identitását viselő csapatfelszerelést szeretnének, anélkül, hogy a gyárral való kapcsolatot egyedül kellene kezelniük.',
      },
      pairs: [
        {
          problem: 'Az edződeszkák intenzív, ismételt használat mellett romlanak.',
          solution: 'Megerősített kialakítás, napi professzionális használatra tervezve, javítási útmutatókkal és alkatrésztámogatással.',
        },
        {
          problem: 'A flotta egyenletlennek és márkátlannak tűnik.',
          solution: 'A klub neve, színei és logója minden deszkára kerül, így egységes csapatflottát kap.',
        },
        {
          problem: 'A flotta bővítése megfelelő készlet keresését jelenti.',
          solution: 'Az ismételt rendelések ugyanazon ellenőrzött platformokon készülnek, hogy az új deszkák illeszkedjenek a meglévőkhöz.',
        },
        {
          problem: 'Korlátozott a flotta költségvetése.',
          solution: 'Flottaárak és egy dedikált kapcsolattartási pont az ismételt rendelésekhez, az alkatrészekhez és a karbantartási kérdésekhez.',
        },
      ],
      steps: [
        { title: 'Mutassa be a klubot', body: 'A tagok száma, a foglalkozások típusai és a jelenlegi felszerelés.' },
        { title: 'Válassza ki a deszkatípusokat', body: 'Edző-, kezdő- és csapatformák, amelyek az Ön programjához igazodnak.' },
        { title: 'Adja hozzá a klub identitását', body: 'A klub neve, színei és logója a deszkákon és a tartozékokon.' },
        { title: 'Rendeljen és bővítse', body: 'A flotta ellátása, az alkatrészek és az állandó ismételt rendelések.' },
      ],
      caseStudy: {
        title: 'Egy klub flottájának megújítása',
        body: 'Egy kajakos klub megújította az identitását, és 25 saját márkás edződeszkával, valamint alkatrészekkel cserélte le a flottáját. A tagok azonos felszerelésen edzenek, a klub pedig a következő szezonban azonos ismételt rendeléssel bővítette a flottát.',
        tags: ['A klub identitása', 'Flotta-megújítás', 'Alkatrésztámogatás'],
      },
      faqs: [
        {
          q: 'Testreszabhatják a SUP klubok a csapatdeszkákat?',
          a: 'Igen. A klubok testreszabhatják a grafikát, a színeket és a termék konfigurációját — a klub neve, színei és logója minden deszkán.',
        },
        {
          q: 'Támogatják-e az eseményekhez szükséges SUP gyártását?',
          a: 'Igen. A gyártási terv az esemény igényei szerint készíthető el, beleértve az eseménykiadásban deszkákat és tartozékokat.',
        },
        {
          q: 'Mely deszkák a legalkalmasabbak a klub edzéséhez?',
          a: 'Stabil, tartós deszkák, amelyek a tagok szintjéhez igazodnak — széles formák a kezdők és az órák részére, valamint kajakformák a kitartásedzéshez.',
        },
        {
          q: 'Kínálnak flottaárat a kluboknak?',
          a: 'Igen — a volumenárak a klubflottákra vonatkoznak, egy dedikált kapcsolattartási ponttal az ismételt rendelésekhez, az alkatrészekhez és a karbantartási kérdésekhez.',
        },
        {
          q: 'Javíthatók vagy cserélhetők-e a sérült deszkák?',
          a: 'Alkatrészeket, javítási útmutatókat és támogatást nyújtunk az ismételt rendelésekhez, hogy a flotta egységes maradjon.',
        },
      ],
      ctaLevel: 'cold',
      ctaLabel: 'Megbeszéljük a klub SUP projektjét',
    },
    {
      slug: 'school-sup',
      navLabel: 'Eződeszka program iskoláknak',
      metaTitle: 'SUP felszerelés iskoláknak | Testreszabott eződeszkák oktatáshoz',
      metaDescription:
        'Kínáljon biztonságos és megbízható SUP felszerelési megoldásokat iskoláknak, táboroknak és szervezeteknek, egyedi gyártási támogatással az iSupfactorytól.',
      kicker: 'Eződeszka program iskoláknak',
      serviceType: 'SUP felszerelés iskolákhoz és programokhoz',
      answer:
        'Iskoláknak és oktatási programoknak stabil, kezdőbarát deszkákat szállítunk, kinyomtatott biztonsági útmutatókkal, bélésett fogantyús lapátokkal és védő tartozékokkal, a tanulók számához és a tárolási rendszerhez igazítva. A szabványos volumenű tétel 150 m-es tekercsenként 90–100+ darab, 20–50 darabos pilot sorokkal; a szállítási határidők támogatják az iskola beszerzési ciklusát.',
      h1: 'Biztonságos és megbízható SUP megoldások iskolákhoz és programokhoz',
      intro: [
        'Az iskolák másképp működtetik a vizes sportokat: nagyobb osztályok, vegyes szintek, szigorú biztonsági elvárások és oktatási költségvetések. Iskolai programunk stabil, kezdőbarát deszkákat, az osztálylétszámhoz igazított csomaglehetőségeket és oktatói szemléletű tanácsadást kínál.',
        'A tömeges beszerelés és az ismételt rendelések támogatása évről évre biztosítja a felszerelés elérhetőségét az új évfolyamok számára.',
      ],
      scenario: {
        title: 'Vizes sportot tanít a tanulóknak',
        body: 'Az osztályok nagyok, az előképzettség szintjei eltérnek. Stabil és biztonságos deszkákra van szükségük azoknak, akik először próbálkoznak, mennyiségekre, amelyek megfelelnek az osztálylétszámnak, és egy felszerelési programra, amely belefér az iskola költségvetésébe és beszerzési ciklusába.',
      },
      pairs: [
        {
          problem: 'A tanulóknak maximális stabilitásra van szükségük a vízen.',
          solution: 'Széles, nagy térfogatú deszkák a kezdőknek, valamint többfős deszkák, amelyek megkímélik azokat, akik először próbálkoznak.',
        },
        {
          problem: 'Az osztálylétszám nagy mennyiségben, egységes felszerelést igényel.',
          solution: 'Programonkénti tömeges árak az osztályoknak szükséges mennyiségekre, minden deszkán azonos minőséggel.',
        },
        {
          problem: 'Az oktatók korlátozott eszközökkel kezelik a biztonságot.',
          solution: 'A deszkákhoz egyértelmű használati útmutató jár, és a vízterület alapján ajánlunk mennyiségeket és elhelyezést.',
        },
        {
          problem: 'A felszerelésnek több tanévet kell kibírnia.',
          solution: 'Megerősített kialakítás, valamint alkatrészek és ismételt rendelések támogatása a program teljes élettartama alatt.',
        },
      ],
      steps: [
        { title: 'Mutassa be a programot', body: 'Az osztálylétszám, a vízterület, az oktatók szervezete és a költségvetési ciklus.' },
        { title: 'Építse fel a csomagot', body: 'A deszkák típusai és mennyiségei az oktatás, nem pedig a feltételezések alapján.' },
        { title: 'Hagyja jóvá a mintát', body: 'Ellenőrizze a stabilitást, a kialakítást és a felületeket egy fizikai deszkán.' },
        { title: 'Szállíttasson és újíttasson', body: 'Tömeges beszerelés, alkatrészek és ismételt rendelések az új évfolyamokhoz.' },
      ],
      caseStudy: {
        title: 'Iskolai vizes sport program',
        body: 'Egy iskola választható vizes sport szakot indított 15 kezdődeszkából álló flottával, valamint az első órákhoz többfős deszkákkal. Az oktatók a stabilabb platformok miatt az első alkalmas gyorsabb haladást jelentettek, a program pedig a következő évben azonos ismételt rendeléssel újította a felszerelést.',
        tags: ['Kezdőflotta', 'Programindítás', 'Megújítási rendelések'],
      },
      faqs: [
        {
          q: 'Milyen SUP felszerelés alkalmas iskolákhoz?',
          a: 'A SUP felszerelés kiválasztása függ a felhasználók életkorától, a használati környezettől és a program elvárásaitól — a széles, stabil deszkák az oktatás szokásos választásai.',
        },
        {
          q: 'Testreszabhatják az iskolák a SUP felszerelést?',
          a: 'Igen. Az iskolák a saját programjuknak megfelelően testreszabhatják a grafikát, a színeket és a felszerelési csomagokat.',
        },
        {
          q: 'Mely deszkák a legjobbak az iskolai SUP órákhoz?',
          a: 'A széles, stabil kezdődeszkák és a többfős deszkák ideálisak — térfogatuk miatt megkímélik azokat, akik először próbálkoznak, és stabilak több evezővel.',
        },
        {
          q: 'Igazíthatók-e a mennyiségek az osztálylétszámunkhoz?',
          a: 'Igen — a programárak az osztályoknak szükséges mennyiségekre épülnek, a számokat pedig a vízterület és a tanulók rotációja alapján ajánljuk.',
        },
        {
          q: 'Az oktatási beszerzési határidők szerint dolgoznak?',
          a: 'Igen. A minták és a gyártás határidejét az oktatási költségvetési és szezonális ciklusokhoz igazítjuk.',
        },
      ],
      ctaLevel: 'cold',
      ctaLabel: 'Megbeszéljük az iskola SUP programját',
    },
  ],
}

export function getSolutionPage(locale: Locale, slug: string): SolutionPageData | undefined {
  return pick(solutionPages, locale).find((p) => p.slug === slug)
}
