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
        'Develop custom SUP products with Supsfactory. We support product requirements, customization, prototypes and manufacturing for businesses and organizations.',
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
        { title: 'Design & sample', body: 'We develop drawings and ship a physical sample within 7–12 days.' },
        { title: 'Approve & produce', body: 'After your approval, production runs 25–35 days with multi-point QC.' },
        { title: 'Deliver & reorder', body: 'Worldwide export with professional packing, plus reorder support at consistent quality.' },
      ],
      caseStudy: {
        title: 'Outdoor brand product extension',
        body: 'An outdoor gear brand moved into paddle sports with a branded touring board. We developed the board from a rough sketch, reached sample approval in 15 days and produced the first production run 40 days later.',
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
          a: 'Custom production starts from 50pcs per design. Larger quantities unlock better unit pricing, and reorders keep your tooling and designs.',
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
        'Supsfactory provides private label SUP manufacturing support for existing brands, helping develop customized SUP products from specifications to production.',
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
          a: 'Yes. Supsfactory supports brands looking to expand into SUP products — product selection, specification adjustment, custom graphics and manufacturing.',
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
        'Create customized SUP equipment for resorts and hotels with branded boards, accessories and production support from Supsfactory.',
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
        'Supsfactory provides customized SUP equipment solutions for clubs, teams and events including graphics, specifications and production support.',
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
        'Provide safe and reliable SUP equipment solutions for schools, camps and organizations with customized production support from Supsfactory.',
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
        'Desarrolla productos SUP personalizados con Supsfactory. Ofrecemos apoyo de requisitos, personalización, muestras y fabricación para empresas y organizaciones.',
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
        body: 'Una marca de equipamiento outdoor entró en el remo con una tabla de viaje con marca. Desarrollamos la tabla desde un boceto bruto: aprobación de muestra en 15 días y primera producción entregada 40 días después.',
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
        'Supsfactory ofrece soporte de fabricación SUP de marca privada para marcas existentes, del desarrollo a la producción de productos SUP personalizados.',
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
          a: 'Sí. Supsfactory apoya a marcas que quieren ampliarse al SUP: selección de productos, ajuste de especificaciones, arte personalizado y fabricación.',
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
        'Crea equipamiento SUP personalizado para resorts y hoteles con Supsfactory: tablas con marca, accesorios y soporte de producción.',
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
        'Supsfactory ofrece soluciones de equipamiento SUP personalizado para clubes, equipos y eventos, incluidos arte, especificaciones y soporte de producción.',
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
        'Soluciones de equipamiento SUP seguras y fiables para escuelas, campamentos e instituciones, con soporte de producción personalizada de Supsfactory.',
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
}

export function getSolutionPage(locale: Locale, slug: string): SolutionPageData | undefined {
  return pick(solutionPages, locale).find((p) => p.slug === slug)
}
