/**
 * Beginner SUP guides (/guides/{slug}).
 *
 * The legacy source renders these as dedicated Astro pages with embedded copy
 * (no YAML), so we ship a small structured dataset here instead. The slugs are
 * the ones referenced by the learning-center.yaml cards.
 */

export interface GuideSection {
  title: string
  body: string
}

export interface Guide {
  slug: string
  title: string
  intro: string[]
  sections: GuideSection[]
  faqs: { q: string; a: string }[]
  related?: { label: string; href: string }[]
}

export const GUIDES: Guide[] = [
  {
    slug: 'how-to-choose-your-sup',
    title: 'How to Choose Your SUP',
    intro: [
      'Choosing your first inflatable SUP comes down to board size, width, construction and what is in the box. Here is what matters, in plain language.',
    ],
    sections: [
      {
        title: 'Length and Volume',
        body: 'Longer boards (11–12 ft) glide farther per stroke and track straighter — ideal for touring and distance paddling. Shorter boards turn more easily. For most riders, an all-around 10\'6"–11\'0" board is the sweet spot.',
      },
      {
        title: 'Width and Stability',
        body: 'Width drives stability more than anything else. A 32-inch deck is forgiving for beginners and stable enough for yoga; 30-inch boards suit lighter or more experienced paddlers who want speed and agility.',
      },
      {
        title: 'Construction Quality',
        body: 'Look for a military-grade drop-stitch PVC core rated to at least 15 PSI, double-layer PVC lamination and reinforced rail bands. These determine how rigid the board feels and how long it lasts under daily use.',
      },
      {
        title: 'What Should Be in the Box',
        body: 'A complete package saves money and hassle: board, 3-piece adjustable paddle, dual-action pump with gauge, coiled leash, fin(s), travel backpack and a repair kit.',
      },
    ],
    faqs: [
      { q: 'What size SUP board do I need?', a: 'Most beginners choose an all-around board around 11\'0" × 32" × 6" — stable, versatile and easy to transport. Heavier riders or paddlers who want distance should size up.' },
      { q: 'Is an inflatable SUP as rigid as a hard board?', a: 'A modern drop-stitch inflatable at 15–20 PSI is close to an entry-level hard board in rigidity, with the advantage of packing into a backpack.' },
    ],
    related: [
      { label: 'Browse our SUP platforms', href: '/products' },
      { label: 'Inflatable vs hardboard', href: '/inflatable-vs-hardboard' },
      { label: 'OEM manufacturing', href: '/oem-manufacturing' },
    ],
  },
  {
    slug: 'beginner-guide',
    title: "Beginner's Guide to Paddling",
    intro: [
      'Everything you need for your first sessions on the water: inflation, the first stand-up, the basic stroke, and how to stay safe while you build confidence.',
    ],
    sections: [
      {
        title: 'Inflate to Spec, Not to Feel',
        body: 'Inflate to the rated pressure (typically 15 PSI) using the gauge on your pump. A board at 10 PSI feels fine on grass but flexes badly on the water. Check the pressure on warm days — sun heats the air inside and raises pressure.',
      },
      {
        title: 'First Steps On Board',
        body: 'Launch from a beach or shallow entry, kneel first, then stand one foot at a time over the center line. Keep your feet shoulder-width, knees soft, and look at the horizon — your board follows your eyes.',
      },
      {
        title: 'The Basic Stroke',
        body: 'Reach forward with the paddle, plant the blade fully, and pull it alongside the board while rotating your torso. Switch sides every few strokes to go straight; use a few sweeps on one side to turn.',
      },
      {
        title: 'Practice the Fall First',
        body: 'Falling in is part of learning. Practice remounting in shallow water: swim to the center handle, kick your legs to the surface, and pull yourself onto the board in one motion.',
      },
    ],
    faqs: [
      { q: 'How long does it take to learn SUP?', a: 'Most people can paddle comfortably on flat water within their first hour-long session. Confidence with turns, wind and distance builds over a few sessions.' },
      { q: 'Do I need to be fit?', a: 'No — SUP is very accessible. You will naturally build balance, core strength and stamina with regular paddling.' },
    ],
  },
  {
    slug: 'inflatable-vs-hard',
    title: 'Inflatable vs Hard Board',
    intro: [
      'The two construction families each win in different scenarios. Here is the honest comparison for recreational paddlers, clubs and rental operators.',
    ],
    sections: [
      {
        title: 'Portability and Storage',
        body: 'Inflatable boards deflate into a backpack that fits in a car trunk, RV or apartment closet — and they are the default choice for travel. Hard boards need roof racks, storage space and more careful handling.',
      },
      {
        title: 'Rigidity and Performance',
        body: 'Premium hard boards are stiffer and more responsive at high performance levels. At recreational speeds, a well-built drop-stitch inflatable at 15–20 PSI performs comparably for a fraction of the storage cost.',
      },
      {
        title: 'Durability',
        body: 'Inflatable PVC boards shrug off dock scrapes and shore impacts that would crack a hard shell — a key reason rental fleets and resorts choose inflatables for daily guest use.',
      },
      {
        title: 'Total Cost of Ownership',
        body: 'Inflatable boards cost less to ship, store and maintain, and they survive rougher handling. For most users and most fleets, an inflatable is the better all-around value.',
      },
    ],
    faqs: [
      { q: 'Which is better for beginners?', a: 'Inflatable boards — stable, forgiving, easy to store, and durable enough for the scrapes beginners create.' },
      { q: 'Can an inflatable SUP be as fast as a hard board?', a: 'At recreational speeds the difference is small. Hard boards only clearly win in racing and high-performance scenarios.' },
    ],
  },
  {
    slug: 'safety-tips',
    title: 'Water Safety Tips',
    intro: [
      'A safe session is a fun session. These basics apply to lakes, rivers and coastal paddling alike.',
    ],
    sections: [
      {
        title: 'Check Wind and Forecast',
        body: 'Offshore wind is the classic SUP trap: it pushes you away from shore faster than you can paddle back. Check the forecast, and when in doubt, stay within sheltered water.',
      },
      {
        title: 'Always Wear the Leash',
        body: 'A coiled leash keeps your board within reach if you fall — the board is your flotation device. Choose a leash matched to your conditions: coiled for flat water, straight for surf.',
      },
      {
        title: 'PFD and Personal Safety',
        body: 'Wear a buoyancy aid when conditions warrant it, or when regulations require it. Carry a whistle, tell someone your route and return time, and consider a phone in a waterproof pouch.',
      },
      {
        title: 'Know Your Limits',
        body: 'Build experience in flat water before wind or current. Respect cold water — it saps strength quickly. And never paddle alone in remote or open-water areas without a plan.',
      },
    ],
    faqs: [
      { q: 'Do I need a life jacket on a SUP?', a: 'Requirements vary by country and waterway. Even where it is optional, a leash plus a buoyancy aid is the responsible baseline, and children should always wear a properly fitted PFD.' },
      { q: 'Is it safe to SUP in a lake?', a: 'Yes — flat lakes are ideal for learning. Check wind direction, stay visible to boat traffic, and avoid busy boating lanes.' },
    ],
    related: [
      { label: 'Safety equipment on our platforms', href: '/products' },
      { label: 'Factory quality control', href: '/quality' },
      { label: 'Choose your first board', href: '/guides/how-to-choose-your-sup' },
    ],
  },
  {
    slug: 'choosing-a-sup-oem-factory',
    title: 'How to Choose a Custom SUP OEM Factory',
    intro: [
      'Buying inflatable paddle boards under your own brand comes down to one decision: which factory you trust with your first batch. Here is how to evaluate a custom SUP manufacturer before you send a PO.',
    ],
    sections: [
      {
        title: 'Start With a Trial Order, Not a MOQ Discussion',
        body: 'A factory that only talks minimums is a sign of a trading desk, not a plant. Real manufacturers offer tiered minimums — co-branding runs from 5–10 units, pilot batches from 20–50 units, standard volume runs from 90–100+ per 150 m roll, and full custom-mould projects at the volume tier. Order a small batch first: it tests communication, spec discipline and sample quality without betting your whole launch.',
      },
      {
        title: 'Check What Is Actually In-House',
        body: 'Drop-stitch SUP production has four core stages: material lamination, welding, printing and assembly. A true factory does all of them under one roof and lets you audit the floor. If the salesperson cannot show you a production line, you are likely buying through a middleman with no control over quality or lead time.',
      },
      {
        title: 'Samples Must Match Mass Production',
        body: 'A hand-finished sample is easy; consistent mass production is hard. Ask how the factory controls repeatability: material batch records, welding parameters, and a QC checklist that runs on every single board — not just the one you approve.',
      },
      {
        title: 'Know Your Costs Before the PO',
        body: 'Get the full cost picture in writing: unit price by quantity, tooling or mould costs if you want a new shape, artwork and printing setup, and packaging.',
      },
      {
        title: 'Ask for Third-Party Inspection',
        body: 'Reputable OEM SUP factories welcome pre-shipment inspections — many brands book a third-party QC visit per container. Confirm the factory can arrange inspections on sample and production runs, and that rejected units (for example, boards that lose more than 5% pressure) are excluded from the batch.',
      },
      {
        title: 'Lead Times That Hold',
        body: 'For inflatable SUPs, expect samples in 7–12 days and batch production in 25–35 days after confirmed PO and deposit, plus tooling time when you order a new mould. A factory that quotes dramatically shorter times than everyone else is quoting from a brochure, not a schedule.',
      },
    ],
    faqs: [
      { q: 'What is the minimum order for custom SUP boards?', a: 'Tiered minimums are standard: 1–2 units for samples, 5–10 units for co-branding, 20–50 units for a pilot batch, and 90–100+ units per 150 m roll for standard volume; fully custom-mould projects run at the volume tier.' },
      { q: 'Can I see a sample before mass production?', a: 'Yes — samples are ready in 7–12 days. Most factories credit sample and mould costs toward your first production order once it is confirmed.' },
      { q: 'How do I verify a SUP factory is real?', a: 'Ask for a live video walkthrough of the production floor, check for an operating plant address in Qingdao or another manufacturing hub, and request documentation of prior export orders. Trial orders are the ultimate proof.' },
      { q: 'What should a SUP factory quote include?', a: 'Unit price per board, tooling or mould costs, artwork setup, packaging, QC and inspection terms, and payment terms.' },
    ],
    related: [
      { label: 'Our OEM / ODM manufacturing', href: '/oem-manufacturing' },
      { label: 'SUP product development process', href: '/product-development' },
      { label: 'Factory capacity and plant', href: '/factory' },
      { label: 'How we control quality — 7 inspection gates', href: '/quality' },
      { label: 'MOQ & flexible branding guide (PDF)', href: '/oem-moq-guide' },
      { label: 'Verify us: trust & factory assurance', href: '/oem-trust-assurance' },
      { label: 'Start a custom SUP project', href: '/contact' },
    ],
  },
  {
    slug: 'private-label-sup-guide',
    title: 'Private Label SUP: What You Actually Get From a Factory',
    intro: [
      'Private label is the fastest way to launch a SUP brand: your logo on a proven platform, without the cost and risk of designing a board from scratch. Here is what working with a custom SUP manufacturer actually includes.',
    ],
    sections: [
      {
        title: 'Private Label Means Proven Platforms',
        body: 'You start from platforms the factory already builds and tests — all-around, touring, yoga, race and more. The factory customizes branding, graphics and trim, which keeps costs low and lead times short. Minimums are tiered: co-branding from 5–10 units, pilot batches from 20–50 units, and 90–100+ units per 150 m roll for standard private-label volume.',
      },
      {
        title: 'Branding Goes Beyond the Logo',
        body: 'Private label covers your logo printing (digital or screen), custom color schemes, cut-to-shape EVA traction pads with your logo, accessory branding (paddle, pump, leash), retail box design and even point-of-sale displays. Send your artwork and the factory produces a visual proof before production.',
      },
      {
        title: 'What the Factory Handles for You',
        body: 'A full-service SUP factory manages artwork setup, material sourcing, sample production, a 100-point assembly QC checklist, pressure testing and export documentation (invoice, packing list, certificate of origin). You review proofs and approve the sample — the factory runs everything else.',
      },
      {
        title: 'What You Own: Brand, Market, Customer',
        body: 'In a private-label arrangement the factory builds the boards and you own the brand. Reputable manufacturers do not retail their own boards in your market or sell your custom design to others. Ask about market exclusivity in your quote.',
      },
      {
        title: 'Costs: Sample, Mould, Artwork Setup',
        body: 'Expect three types of charges: sample fees (7–12 days to produce), tooling costs when a new mould is required (volume-tier minimum), and artwork setup for printing. Most factories credit sample and mould costs toward your first production order.',
      },
      {
        title: 'From PO to Finished Batch',
        body: 'A typical private-label run: 30% deposit starts production, batch production completes in 25–35 days after confirmed PO and deposit, with the balance settled against the approved batch. Budget for the full run in your first order.',
      },
    ],
    faqs: [
      { q: 'What is the minimum order for private label SUP boards?', a: 'Co-branding runs from 5–10 units, pilot batches from 20–50 units, and standard private-label volume from 90–100+ units per 150 m roll; fully custom-mould projects run at the volume tier.' },
      { q: 'Can I send my own logo and artwork?', a: 'Yes — send your logo and artwork; the factory produces a visual proof before production so you approve colors, placement and finishing.' },
      { q: 'Is my custom SUP design exclusive to my brand?', a: 'Yes with standard private-label terms. Ask for an exclusivity clause in your purchase agreement; factories like ours do not resell your branded design.' },
      { q: 'How long does a private label SUP order take?', a: 'Samples ship in 7–12 days; batch production completes in 25–35 days after confirmed PO and deposit. Budget 8–12 weeks for the first full run.' },
    ],
    related: [
      { label: 'Private label SUP solutions', href: '/solutions/private-label-sup' },
      { label: 'Browse proven platforms', href: '/products/all-around' },
      { label: 'OEM / ODM manufacturing', href: '/oem-manufacturing' },
      { label: 'Start a custom SUP project', href: '/contact' },
    ],
  },
  {
    slug: 'sup-fleet-guide',
    title: 'Buying SUP Fleets for Rentals, Resorts & Clubs',
    intro: [
      'Fleet buyers need different answers than end users: durability per session, standardized spares, volume-level quantities and a supplier that delivers season after season. Here is what to plan before ordering your first fleet.',
    ],
    sections: [
      {
        title: 'Standardize on One or Two Specifications',
        body: 'Fleet operations run on standardization: one board size (usually 10\'6"–11\'0" × 32") for most guests, one hard-wearing package, one spares kit. It simplifies repairs, staff training, storage and reordering. Resist the temptation to buy ten different models.',
      },
      {
        title: 'High-Duty Boards Are a Different Product',
        body: 'A rental board takes dozens of sessions per season. Specify thicker PVC layers, reinforced rail bands and heavier-duty accessories compared with retail boards. Ask the factory how the fleet spec differs from the consumer version — real plants have both.',
      },
      {
        title: 'Size Quantities to Demand',
        body: 'Compute your fleet size against daily rotation and season length: 20–30 boards serve a small stand, 100+ a busy resort or club. Ask the factory for quantity guidance matched to your demand pattern.',
      },
      {
        title: 'Buy Spares With the Fleet',
        body: 'Order spare valves, repair kits, pumps, leashes and paddles in the same PO — they cost little per unit now and are painful to source mid-season. Ask the factory for a recommended spares ratio (typically 5–10% of fleet size for consumables).',
      },
      {
        title: 'Order Against the Season, Not During It',
        body: 'Production runs 25–35 days after confirmed PO and deposit. To have boards on the beach by spring, confirm orders in late autumn so production lands ahead of the season.',
      },
      {
        title: 'Brand the Fleet for Resale Value',
        body: 'Fleet boards can carry your logo, a rental numbering system and color coding by size. Screen-printed logos on 200+ unit runs are cost-effective, and a branded fleet doubles as marketing on the water.',
      },
    ],
    faqs: [
      { q: 'What is the best SUP for a rental fleet?', a: 'A 10\'6"–11\'0" × 32" all-around board with reinforced construction is the industry standard — stable for beginners, durable for daily use and easy to service.' },
      { q: 'How many boards does a rental operation need?', a: 'Plan for 20–30 boards for a small stand, scaling with rotation: 100+ units for busy resorts and clubs. Spares should be 5–10% of fleet size.' },
      { q: 'Can fleet boards be branded with our logo?', a: 'Yes — screen-printed logos, rental numbering and color-coded decks are standard customizations, particularly cost-effective from 200 units.' },
      { q: 'How long does a fleet order take?', a: 'Samples in 7–12 days, production in 25–35 days after confirmed PO and deposit — so place fleet orders well before your season starts.' },
    ],
    related: [
      { label: 'Resort and club solutions', href: '/solutions/resort-sup' },
      { label: 'Rental fleet case study', href: '/projects/rental-fleet-multi-site' },
      { label: 'Fleet-grade platforms', href: '/products/all-around' },
      { label: 'Talk to a project specialist', href: '/contact' },
    ],
  },
]

/** Spanish variants of the four beginner guides (same slugs, translated copy). */
export const GUIDES_ES: Guide[] = [
  {
    slug: 'how-to-choose-your-sup',
    title: 'Cómo elegir tu SUP',
    intro: [
      'Elegir tu primer SUP hinchable se resume a tamaño, ancho, construcción y qué incluye la caja. Aquí está lo que importa, en lenguaje claro.',
    ],
    sections: [
      {
        title: 'Longitud y volumen',
        body: 'Las tablas más largas (11–12 pies) planean más por remada y mantienen mejor la línea — ideales para travesía y distancia. Las más cortas giran con más facilidad. Para la mayoría, una tabla polivalente de 10\'6"–11\'0" es el punto óptimo.',
      },
      {
        title: 'Ancho y estabilidad',
        body: 'El ancho manda en la estabilidad por encima de todo. Una cubierta de 32 pulgadas es indulgente con los principiantes y estable para yoga; las de 30 pulgadas convienen a remeros más ligeros o con más experiencia que buscan velocidad y agilidad.',
      },
      {
        title: 'Calidad de construcción',
        body: 'Busca un núcleo de PVC drop-stitch de grado militar con presión nominal de al menos 15 PSI, laminado de PVC de doble capa y cintas de canto reforzadas. Eso determina cómo de rígida se siente la tabla y cuánto dura con uso diario.',
      },
      {
        title: 'Qué debe incluir la caja',
        body: 'Un paquete completo ahorra dinero y molestias: tabla, pala regulable de 3 piezas, bomba de doble acción con manómetro, leash espiral, quilla(s), mochila de viaje y kit de reparación.',
      },
    ],
    faqs: [
      { q: '¿Qué tamaño de tabla SUP necesito?', a: 'La mayoría de los principiantes elige una tabla polivalente de unos 11\'0" × 32" × 6" — estable, versátil y fácil de transportar. Los remeros más pesados o que quieren distancia deben subir de tamaño.' },
      { q: '¿Un SUP hinchable es tan rígido como uno rígido?', a: 'Un hinchable drop-stitch moderno a 15–20 PSI se acerca a una tabla rígida de entrada en rigidez, con la ventaja de que se guarda en una mochila.' },
    ],
    related: [
      { label: 'Nuestras plataformas de SUP', href: '/products' },
      { label: 'Hinchable vs tabla rígida', href: '/inflatable-vs-hardboard' },
      { label: 'Fabricación OEM', href: '/oem-manufacturing' },
    ],
  },
  {
    slug: 'beginner-guide',
    title: 'Guía para empezar a remar',
    intro: [
      'Todo lo que necesitas para tus primeras sesiones en el agua: inflado, la primera vez de pie, la remada básica y cómo mantenerte seguro mientras ganas confianza.',
    ],
    sections: [
      {
        title: 'Infla según la especificación, no según la sensación',
        body: 'Infla hasta la presión nominal (normalmente 15 PSI) usando el manómetro de tu bomba. Una tabla a 10 PSI se siente bien en el césped, pero se flexiona mal en el agua. Comprueba la presión en días calurosos — el sol calienta el aire interior y sube la presión.',
      },
      {
        title: 'Primeros pasos a bordo',
        body: 'Entra desde la orilla o por aguas poco profundas, arrodíllate primero y luego ponte de pie un pie a la vez sobre la línea central. Mantén los pies a la anchura de los hombros, las rodillas suaves y la mirada en el horizonte — tu tabla sigue a tus ojos.',
      },
      {
        title: 'La remada básica',
        body: 'Alcanza hacia delante con la pala, hunde la pala por completo y tira de ella junto a la tabla girando el torso. Cambia de lado cada pocas remadas para ir recto; usa algunas barridas de un lado para girar.',
      },
    ],
    faqs: [
      { q: '¿Cuánto se tarda en aprender SUP?', a: 'La mayoría puede remar con comodidad en aguas tranquilas dentro de su primera sesión de una hora. La confianza con giros, viento y distancia se construye en unas pocas sesiones.' },
      { q: '¿Necesito estar en forma?', a: 'No — el SUP es muy accesible. Desarrollarás equilibrio, fuerza de core y resistencia de forma natural con la práctica regular.' },
    ],
  },
  {
    slug: 'inflatable-vs-hard',
    title: 'Hinchable vs tabla rígida',
    intro: [
      'Las dos familias de construcción ganan en escenarios distintos. Aquí tienes la comparación honesta para remeros, clubes y operadores de alquiler.',
    ],
    sections: [
      {
        title: 'Rendimiento',
        body: 'Las tablas rígidas premium son más firmes y responden mejor a altas prestaciones. A velocidades recreativas, un hinchable drop-stitch bien construido a 15–20 PSI rinde de forma comparable por una fracción del coste de almacenamiento.',
      },
      {
        title: 'Durabilidad',
        body: 'Las tablas de PVC hinchable soportan roces contra embarcaderos e impactos en la orilla que agrietarían una carcasa rígida — una razón clave por la que las flotas de alquiler y los resorts eligen hinchables para el uso diario.',
      },
      {
        title: 'Coste y almacenamiento',
        body: 'Las hinchables cuestan menos de enviar, almacenar y mantener, y aguantan un trato más brusco. Para la mayoría de usuarios y flotas, una hinchable es la mejor relación calidad-precio global.',
      },
    ],
    faqs: [
      { q: '¿Cuál es mejor para principiantes?', a: 'Las hinchables — estables, indulgentes, fáciles de guardar y duraderas para los roces que generan los principiantes.' },
    ],
  },
  {
    slug: 'safety-tips',
    title: 'Consejos de seguridad en el agua',
    intro: [
      'Una sesión segura es una sesión divertida. Estos básicos valen para lagos, ríos y remo costero por igual.',
    ],
    sections: [
      {
        title: 'Viento y corrientes',
        body: 'El viento de tierra es la trampa clásica del SUP: te aleja de la costa más rápido de lo que puedes remar de vuelta. Revisa el pronóstico y, si hay dudas, quédate en aguas resguardadas.',
      },
      {
        title: 'Lleva siempre el leash',
        body: 'Un leash espiral mantiene tu tabla a mano si te caes — la tabla es tu dispositivo de flotación. Elige un leash según las condiciones: espiral para aguas tranquilas, recto para surf.',
      },
      {
        title: 'PFD y seguridad personal',
        body: 'Usa un dispositivo de flotación cuando las condiciones lo aconsejen o las normas lo exijan. Lleva un silbato, avisa de tu ruta y hora de vuelta, y considera un teléfono en bolsa impermeable.',
      },
      {
        title: 'Conoce tus límites',
        body: 'Gana experiencia en aguas tranquilas antes de viento o corriente. Respeta el agua fría — debilita rápido. Y nunca remes solo en zonas remotas o aguas abiertas sin un plan.',
      },
    ],
    faqs: [
      { q: '¿Necesito un chaleco salvavidas en un SUP?', a: 'Los requisitos varían por país y vía navegable. Aunque sea opcional, un leash más un dispositivo de flotación es la base responsable, y los niños siempre deben llevar un PFD bien ajustado.' },
      { q: '¿Es seguro remar en un lago?', a: 'Sí — los lagos tranquilos son ideales para aprender. Revisa la dirección del viento, mantente visible para el tráfico náutico y evita los canales de navegación concurridos.' },
    ],
    related: [
      { label: 'Equipo de seguridad en nuestras plataformas', href: '/products' },
      { label: 'Control de calidad de fábrica', href: '/quality' },
      { label: 'Elige tu primera tabla', href: '/guides/how-to-choose-your-sup' },
    ],
  },
  {
    slug: 'choosing-a-sup-oem-factory',
    title: 'Cómo elegir una fábrica OEM de SUP a medida',
    intro: [
      'Comprar tablas de paddle surf hinchables bajo tu propia marca se resume a una decisión: en qué fábrica confías tu primer lote. Así se evalúa a un fabricante de SUP personalizados antes de enviar tu PO.',
    ],
    sections: [
      {
        title: 'Empieza con un pedido de prueba, no con una conversación de MOQ',
        body: 'Una fábrica que solo habla de mínimos es señal de mesa comercial, no de planta. Los fabricantes reales ofrecen mínimos por tramos — co-branding desde 5–10 unidades, lotes piloto desde 20–50 unidades, producción de volumen estándar desde 90–100+ por rollo de 150 m y proyectos de molde a medida en el tramo de volumen. Pide primero un lote pequeño: prueba la comunicación, la disciplina de especificación y la calidad de la muestra sin arriesgar todo tu lanzamiento.',
      },
      {
        title: 'Comprueba qué hay realmente en casa',
        body: 'La producción de SUP drop-stitch tiene cuatro etapas centrales: laminado de material, soldadura, impresión y montaje. Una fábrica real las hace todas bajo el mismo techo y te deja auditar la planta. Si el vendedor no puede enseñarte una línea de producción, probablemente estás comprando a través de un intermediario sin control sobre la calidad ni los plazos.',
      },
      {
        title: 'Las muestras deben coincidir con la producción en serie',
        body: 'Una muestra acabada a mano es fácil; la producción en serie consistente es difícil. Pregunta cómo controla la fábrica la repetibilidad: registros de lotes de material, parámetros de soldadura y una lista de control de calidad que se aplique a cada tabla — no solo a la que apruebas.',
      },
      {
        title: 'Conoce tus costes antes del PO',
        body: 'Consigue el panorama completo de costes por escrito: precio unitario por cantidad, costes de utillaje o molde si quieres una forma nueva, preparación de arte e impresión y embalaje.',
      },
      {
        title: 'Pide inspección de terceros',
        body: 'Las fábricas OEM de SUP de reputación aceptan inspecciones previas al envío — muchas marcas contratan la visita de un inspector por contenedor. Confirma que la fábrica puede organizar inspecciones sobre muestras y sobre producción, y que las unidades rechazadas (por ejemplo, tablas que pierden más del 5% de presión) se excluyen del lote.',
      },
      {
        title: 'Plazos que se cumplen',
        body: 'Para SUP hinchables, espera muestras en 7–12 días y producción en serie en 25–35 días tras PO confirmado y depósito, más el tiempo de utillaje cuando pides un molde nuevo. Una fábrica que cotiza plazos mucho más cortos que el resto está cotizando desde un folleto, no desde un calendario.',
      },
    ],
    faqs: [
      { q: '¿Cuál es el pedido mínimo para tablas SUP personalizadas?', a: 'Los mínimos por tramos son el estándar: 1–2 unidades para muestras, 5–10 unidades para co-branding, 20–50 unidades para un lote piloto y 90–100+ unidades por rollo de 150 m para volumen estándar; los moldes a medida se producen en el tramo de volumen.' },
      { q: '¿Puedo ver una muestra antes de la producción?', a: 'Sí — las muestras están listas en 7–12 días. La mayoría de fábricas descuenta el coste de la muestra y del molde del primer pedido de producción una vez confirmado.' },
      { q: '¿Cómo verifico que una fábrica de SUP es real?', a: 'Pide una visita por vídeo en directo a la planta, comprueba una dirección de fábrica operativa en Qingdao u otro polo de fabricación y solicita documentación de pedidos de exportación anteriores. El pedido de prueba es la prueba definitiva.' },
      { q: '¿Qué debe incluir una cotización de fábrica de SUP?', a: 'Precio unitario por tabla, costes de utillaje o molde, preparación de arte, embalaje, condiciones de QC e inspección y condiciones de pago.' },
    ],
    related: [
      { label: 'Nuestra fabricación OEM / ODM', href: '/oem-manufacturing' },
      { label: 'Proceso de desarrollo de producto SUP', href: '/product-development' },
      { label: 'Capacidad de fábrica y planta', href: '/factory' },
      { label: 'Cómo controlamos la calidad — 7 puertas de inspección', href: '/quality' },
      { label: 'Guía de MOQ y marca flexible (PDF)', href: '/oem-moq-guide' },
      { label: 'Verifícanos: confianza y garantía de fábrica', href: '/oem-trust-assurance' },
      { label: 'Inicia tu proyecto SUP a medida', href: '/contact' },
    ],
  },
  {
    slug: 'private-label-sup-guide',
    title: 'SUP de marca privada: qué incluye de verdad una fábrica',
    intro: [
      'La marca privada es la vía más rápida para lanzar una marca de SUP: tu logotipo sobre una plataforma probada, sin el coste ni el riesgo de diseñar una tabla desde cero. Esto es lo que incluye trabajar con un fabricante de SUP personalizados.',
    ],
    sections: [
      {
        title: 'Marca privada significa plataformas probadas',
        body: 'Partes de plataformas que la fábrica ya construye y prueba — all-around, touring, yoga, race y más. La fábrica personaliza marca, gráficos y acabados, lo que mantiene costes bajos y plazos cortos. Los mínimos son por tramos: co-branding desde 5–10 unidades, lotes piloto desde 20–50 unidades y 90–100+ unidades por rollo de 150 m para el volumen estándar de marca privada.',
      },
      {
        title: 'La marca va más allá del logotipo',
        body: 'La marca privada incluye tu impresión de logotipo (digital o serigrafía), esquemas de color personalizados, alfombrillas EVA troqueladas con tu logotipo, accesorios con marca (pala, bomba, leash), diseño de caja retail e incluso expositores para punto de venta. Envía tu arte y la fábrica produce una prueba visual antes de la producción.',
      },
      {
        title: 'Qué gestiona la fábrica por ti',
        body: 'Una fábrica de servicio completo gestiona la preparación de arte, el abastecimiento de materiales, la producción de muestras, la lista de verificación de montaje de 100 puntos, las pruebas de presión y la documentación de exportación (factura, packing list, certificado de origen). Tú revisas las pruebas y apruebas la muestra — la fábrica se encarga del resto.',
      },
      {
        title: 'Lo que tú posees: marca, mercado y cliente',
        body: 'En un acuerdo de marca privada, la fábrica construye las tablas y tú posees la marca. Los fabricantes de reputación no venden tablas con su propio nombre en tu mercado ni venden tu diseño a otros. Pregunta por la exclusividad de mercado en tu cotización.',
      },
      {
        title: 'Costes: muestra, molde y preparación de arte',
        body: 'Espera tres tipos de cargos: tarifas de muestra (7–12 días), costes de utillaje cuando se requiere un molde nuevo (mínimo del tramo de volumen) y preparación de arte para la impresión. La mayoría de fábricas descuenta la muestra y el molde del primer pedido de producción.',
      },
      {
        title: 'Del PO a la tirada terminada',
        body: 'Una tirada típica de marca privada: el 30% de depósito inicia la producción, la producción en serie se completa en 25–35 días tras PO confirmado y depósito, y el saldo se liquida contra el lote aprobado. Ten en cuenta el ciclo completo en tu primer pedido.',
      },
    ],
    faqs: [
      { q: '¿Cuál es el pedido mínimo para tablas SUP de marca privada?', a: 'El co-branding va de 5–10 unidades, los lotes piloto de 20–50 unidades y el volumen estándar de marca privada de 90–100+ unidades por rollo de 150 m; los proyectos de molde totalmente a medida se producen en el tramo de volumen.' },
      { q: '¿Puedo enviar mi propio logotipo y arte?', a: 'Sí — envía tu logotipo y arte; la fábrica produce una prueba visual antes de la producción para que apruebes colores, colocación y acabado.' },
      { q: '¿Mi diseño de SUP personalizado es exclusivo de mi marca?', a: 'Sí, con condiciones estándar de marca privada. Pide una cláusula de exclusividad en tu contrato; fábricas como la nuestra no revenden diseños con tu marca.' },
      { q: '¿Cuánto tarda un pedido de SUP de marca privada?', a: 'Las muestras se envían en 7–12 días; la producción en serie se completa en 25–35 días tras PO confirmado y depósito. Calcula de 8 a 12 semanas para la primera tirada completa.' },
    ],
    related: [
      { label: 'Soluciones de marca privada', href: '/solutions/private-label-sup' },
      { label: 'Plataformas probadas', href: '/products/all-around' },
      { label: 'Fabricación OEM / ODM', href: '/oem-manufacturing' },
      { label: 'Inicia tu proyecto SUP a medida', href: '/contact' },
    ],
  },
  {
    slug: 'sup-fleet-guide',
    title: 'Comprar flotas de SUP para alquiler, resorts y clubes',
    intro: [
      'Los compradores de flotas necesitan respuestas distintas a las de los usuarios finales: durabilidad por sesión, repuestos estandarizados, cantidades a gran escala y un proveedor que entregue temporada tras temporada. Esto es lo que hay que planificar antes de pedir tu primera flota.',
    ],
    sections: [
      {
        title: 'Estandariza una o dos especificaciones',
        body: 'Las operaciones de flota viven de la estandarización: un tamaño de tabla (normalmente 10\'6"–11\'0" × 32") para la mayoría de los huéspedes, un paquete resistente y un kit de repuestos. Simplifica reparaciones, formación del personal, almacenamiento y reposición. Resiste la tentación de comprar diez modelos distintos.',
      },
      {
        title: 'Las tablas de alto uso son un producto distinto',
        body: 'Una tabla de alquiler soporta decenas de sesiones por temporada. Especifica capas de PVC más gruesas, refuerzos de canto y accesorios de mayor resistencia que la versión retail. Pregunta a la fábrica cómo difiere la especificación de flota de la de consumo — las plantas reales tienen ambas.',
      },
      {
        title: 'Planifica cantidades según la demanda',
        body: 'Calcula el tamaño de tu flota contra la rotación diaria y la duración de la temporada: 20–30 tablas sirven a un pequeño negocio, 100+ a un resort o club con actividad. Pide a la fábrica orientación de cantidades ajustada a tu patrón de demanda.',
      },
      {
        title: 'Compra repuestos con la flota',
        body: 'Pide válvulas de repuesto, kits de reparación, bombas, leashes y palas en el mismo PO — cuestan poco por unidad ahora y son difíciles de conseguir a mitad de temporada. Pide a la fábrica una proporción de repuestos recomendada (normalmente 5–10% de la flota en consumibles).',
      },
      {
        title: 'Pide contra la temporada, no durante ella',
        body: 'La producción tarda 25–35 días tras PO confirmado y depósito. Para tener tablas en la playa en primavera, confirma los pedidos a finales de otoño para que la producción llegue antes de la temporada.',
      },
      {
        title: 'Marca la flota para valor de reventa',
        body: 'Las tablas de flota pueden llevar tu logotipo, un sistema de numeración de alquiler y códigos de color por talla. La serigrafía en tiradas de 200+ unidades es rentable, y una flota con marca funciona como publicidad en el agua.',
      },
    ],
    faqs: [
      { q: '¿Cuál es el mejor SUP para una flota de alquiler?', a: 'Una tabla polivalente de 10\'6"–11\'0" × 32" con construcción reforzada es el estándar del sector: estable para principiantes, duradera para uso diario y fácil de mantener.' },
      { q: '¿Cuántas tablas necesita una operación de alquiler?', a: 'Calcula 20–30 tablas para un negocio pequeño, escalando con la rotación: 100+ unidades para resorts y clubes con mucha actividad. Los repuestos deben ser el 5–10% del tamaño de la flota.' },
      { q: '¿Pueden las tablas de flota llevar nuestro logotipo?', a: 'Sí — serigrafía, numeración de alquiler y cubiertas con códigos de color son personalizaciones estándar, especialmente rentables desde 200 unidades.' },
      { q: '¿Cuánto tarda un pedido de flota?', a: 'Muestras en 7–12 días, producción en 25–35 días tras PO confirmado y depósito — por eso conviene pedir las flotas con mucha antelación a la temporada.' },
    ],
    related: [
      { label: 'Soluciones para resorts y clubes', href: '/solutions/resort-sup' },
      { label: 'Caso de éxito de flota de alquiler', href: '/projects/rental-fleet-multi-site' },
      { label: 'Plataformas para flotas', href: '/products/all-around' },
      { label: 'Habla con un especialista de proyectos', href: '/contact' },
    ],
  },
]

/** French variants of the guides (same slugs, translated copy). */
export const GUIDES_FR: Guide[] = [
  {
    slug: 'how-to-choose-your-sup',
    title: 'Comment choisir votre SUP',
    intro: [
      'Choisir son premier SUP gonflable dépend de la taille de la planche, de sa largeur, de sa construction et de ce qui est inclus dans la boîte. Voici ce qui compte, en termes clairs.',
    ],
    sections: [
      {
        title: 'Longueur et volume',
        body: 'Les planches plus longues (11–12 pieds) glissent davantage par coup de pagaie et maintiennent mieux la trajectoire — idéales pour le touring et la navigation longue distance. Les plus courtes manœuvrent plus facilement. Pour la plupart des pratiquants, une planche polyvalente de 10\'6"–11\'0" est le compromis idéal.',
      },
      {
        title: 'Largeur et stabilité',
        body: 'La largeur commande la stabilité plus que tout autre facteur. Un pont de 32 pouces est indulgent pour les débutants et suffisamment stable pour le yoga ; les planches de 30 pouces conviennent aux pratiquants plus légers ou plus expérimentés qui recherchent vitesse et agilité.',
      },
      {
        title: 'Qualité de construction',
        body: 'Recherchez un noyau PVC drop-stitch de grade militaire avec une pression nominale d\'au moins 15 PSI, un laminage PVC double couche et des bandes de rive renforcées. Ce sont ces éléments qui déterminent la rigidité de la planche et sa durée de vie en utilisation quotidienne.',
      },
      {
        title: 'Ce qui doit figurer dans la boîte',
        body: 'Un pack complet fait gagner temps et argent : planche, pagaie réglable en 3 pièces, pompe double action avec manomètre, leash en ressort, dérive(s), sac à dos de voyage et kit de réparation.',
      },
    ],
    faqs: [
      { q: 'Quelle taille de planche SUP me faut-il ?', a: 'La plupart des débutants choisissent une planche polyvalente d\'environ 11\'0" × 32" × 6" — stable, polyvalente et facile à transporter. Les pratiquants plus lourds ou ceux qui veulent couvrir de longues distances devraient opter pour une taille supérieure.' },
      { q: 'Un SUP gonflable est-il aussi rigide qu\'une planche rigide ?', a: 'Un gonflable drop-stitch moderne gonflé à 15–20 PSI offre une rigidité proche d\'une planche rigide d\'entrée de gamme, avec l\'avantage de se ranger dans un sac à dos.' },
    ],
    related: [
      { label: 'Découvrez nos plateformes SUP', href: '/products' },
      { label: 'Gonflable vs planche rigide', href: '/inflatable-vs-hardboard' },
      { label: 'Fabrication OEM', href: '/oem-manufacturing' },
    ],
  },
  {
    slug: 'beginner-guide',
    title: 'Guide du débutant en paddle',
    intro: [
      'Tout ce dont vous avez besoin pour vos premières sessions sur l\'eau : gonflage, première mise debout, le coup de pagaie de base et comment rester en sécurité tout en gagnant en confiance.',
    ],
    sections: [
      {
        title: 'Gonflez selon la spécification, pas selon le ressenti',
        body: 'Gonflez à la pression nominale (généralement 15 PSI) en utilisant le manomètre de votre pompe. Une planche à 10 PSI paraît correcte sur l\'herbe mais se déforme fortement sur l\'eau. Vérifiez la pression les jours chauds — le soleil chauffe l\'air intérieur et augmente la pression.',
      },
      {
        title: 'Premiers pas sur la planche',
        body: 'Lancez depuis la plage ou une entrée d\'eau peu profonde, genoux d\'abord, puis debout un pied à la fois sur la ligne centrale. Gardez les pieds à la largeur des épaules, les genoux souples et le regard à l\'horizon — votre planche suit vos yeux.',
      },
      {
        title: 'Le coup de pagaie de base',
        body: 'Poussez la pagaie vers l\'avant, plantez la pale entièrement et tirez-la le long de la planche en tournant le torse. Changez de côté toutes les quelques brasses pour avancer en ligne droite ; utilisez quelques coups balayés d\'un seul côté pour tourner.',
      },
      {
        title: 'Entraînez-vous à tomber d\'abord',
        body: 'Tomber à l\'eau fait partie de l\'apprentissage. Entraînez-vous à remonter sur la planche en eau peu profonde : nagez jusqu\'à la poignée centrale, donnez des coups de jambes pour remonter à la surface et hissez-vous sur la planche en un seul mouvement.',
      },
    ],
    faqs: [
      { q: 'Combien de temps faut-il pour apprendre le SUP ?', a: 'La plupart des gens peuvent naviguer confortablement en eau calme dès leur première session d\'une heure. La maîtrise des virages, du vent et des longues distances se développe en quelques sessions.' },
      { q: 'Faut-il être en forme ?', a: 'Non — le SUP est très accessible. Vous développerez naturellement l\'équilibre, la force du tronc et l\'endurance avec une pratique régulière.' },
    ],
  },
  {
    slug: 'inflatable-vs-hard',
    title: 'SUP gonflable vs planche rigide',
    intro: [
      'Les deux familles de construction l\'emportent chacune dans des scénarios différents. Voici la comparaison honnête pour les pratiquants récréatifs, les clubs et les opérateurs de location.',
    ],
    sections: [
      {
        title: 'Portabilité et stockage',
        body: 'Les planches gonflables se dégonflent dans un sac à dos qui tient dans le coffre d\'une voiture, un camping-car ou un placard d\'appartement — et elles sont le choix par défaut pour le voyage. Les planches rigides nécessitent des porte-bagages, de l\'espace de stockage et une manipulation plus soigneuse.',
      },
      {
        title: 'Rigidité et performances',
        body: 'Les planches rigides haut de gamme sont plus rigides et plus réactives à haut niveau de performance. À des vitesses récréatives, un gonflable drop-stitch bien conçu gonflé à 15–20 PSI offre des performances comparables pour une fraction du coût de stockage.',
      },
      {
        title: 'Durabilité',
        body: 'Les planches gonflables en PVC résistent aux frottements contre les quais et aux impacts sur le rivage qui fendraient une coque rigide — une raison majeure pour laquelle les flottes de location et les resorts optent pour le gonflable en usage quotidien.',
      },
      {
        title: 'Coût total de possession',
        body: 'Les planches gonflables coûtent moins cher à expédier, stocker et entretenir, et supportent un usage plus intense. Pour la plupart des utilisateurs et des flottes, le gonflable représente le meilleur rapport qualité-prix global.',
      },
    ],
    faqs: [
      { q: 'Lequel est le meilleur pour les débutants ?', a: 'Le gonflable — stable, indulgent, facile à ranger et suffisamment durable pour les chocs que les débutants infligent.' },
      { q: 'Un SUP gonflable peut-il être aussi rapide qu\'une planche rigide ?', a: 'À des vitesses récréatives, la différence est faible. Les planches rigides ne l\'emportent clairement que dans les courses et les scénarios haute performance.' },
    ],
  },
  {
    slug: 'safety-tips',
    title: 'Conseils de sécurité sur l\'eau',
    intro: [
      'Une session sûre est une session agréable. Ces bases s\'appliquent à la navigation sur lacs, rivières et en milieu côtier.',
    ],
    sections: [
      {
        title: 'Vérifiez le vent et les prévisions',
        body: 'Le vent offshore est le piège classique du SUP : il vous éloigne du rivage plus vite que vous ne pouvez pagayer pour revenir. Consultez les prévisions et, en cas de doute, restez dans les eaux abritées.',
      },
      {
        title: 'Portez toujours le leash',
        body: 'Un leash en ressort maintient votre planche à portée de main en cas de chute — la planche est votre flotteur. Choisissez un leash adapté à vos conditions : ressort pour eau calme, droit pour le surf.',
      },
      {
        title: 'Gilet de sauvetage et sécurité personnelle',
        body: 'Portez un gilet de sauvetage quand les conditions l\'exigent ou que la réglementation l\'impose. Emportez un sifflet, prévenez quelqu\'un de votre itinéraire et de votre heure de retour, et envisagez de garder un téléphone dans une pochette étanche.',
      },
      {
        title: 'Connaissez vos limites',
        body: 'Gagnez de l\'expérience en eau calme avant d\'affronter le vent ou les courants. Méfiez-vous de l\'eau froide — elle affaiblit rapidement. Et ne naviguez jamais seul dans des zones isolées ou en eau ouverte sans un plan.',
      },
    ],
    faqs: [
      { q: 'Ai-je besoin d\'un gilet de sauvetage sur un SUP ?', a: 'Les exigences varient selon le pays et la voie navigable. Même là où c\'est optionnel, un leash plus un gilet de sauvetage constituent la base responsable, et les enfants devraient toujours porter un gilet adapté.' },
      { q: 'Est-il sûr de faire du SUP sur un lac ?', a: 'Oui — les lacs calmes sont idéaux pour apprendre. Vérifiez la direction du vent, restez visible pour la navigation et évitez les chalands fréquentés.' },
    ],
    related: [
      { label: 'Équipement de sécurité sur nos plateformes', href: '/products' },
      { label: 'Contrôle qualité en usine', href: '/quality' },
      { label: 'Choisissez votre première planche', href: '/guides/how-to-choose-your-sup' },
    ],
  },
  {
    slug: 'choosing-a-sup-oem-factory',
    title: 'Comment choisir une usine OEM de SUP sur mesure',
    intro: [
      'Acheter des planches de paddle gonflables sous votre propre marque se résume à une décision : quelle usine de confiance pour votre premier lot. Voici comment évaluer un fabricant de SUP personnalisés avant d\'envoyer un PO.',
    ],
    sections: [
      {
        title: 'Commencez par une commande d\'essai, pas par une discussion sur le MOQ',
        body: 'Une usine qui ne parle que de minimums est le signe d\'un intermédiaire commercial, pas d\'une véritable usine. Les vrais fabricants proposent des minimums par paliers — co-branding à partir de 5–10 unités, lots pilotes de 20–50 unités, production en volume standard à partir de 90–100+ par rouleau de 150 m, et projets de moulage sur mesure au palier volume. Commandez d\'abord un petit lot : cela teste la communication, la rigueur des spécifications et la qualité de l\'échantillon sans miser sur l\'ensemble du lancement.',
      },
      {
        title: 'Vérifiez ce qui est réellement fait en interne',
        body: 'La production de SUP drop-stitch comprend quatre étapes clés : laminage des matériaux, soudage, impression et assemblage. Une véritable usine les réalise toutes sous le même toit et vous permet d\'auditer l\'atelier. Si le commercial ne peut pas vous montrer une ligne de production, vous achetez probablement via un intermédiaire sans contrôle sur la qualité ni les délais.',
      },
      {
        title: 'Les échantillons doivent correspondre à la production en série',
        body: 'Un échantillon fini à la main est facile ; une production en série constante est difficile. Demandez comment l\'usine contrôle la reproductibilité : registres de lots de matériaux, paramètres de soudage et une checklist de contrôle qualité appliquée à chaque planche — pas seulement à celle que vous approuvez.',
      },
      {
        title: 'Connaissez vos coûts avant le PO',
        body: 'Obtenez le tableau complet des coûts par écrit : prix unitaire par quantité, coûts d\'outillage ou de moule si vous souhaitez une nouvelle forme, préparation des fichiers graphiques et impression, et emballage.',
      },
      {
        title: 'Demandez une inspection par un tiers',
        body: 'Les usines OEM de SUP de bonne réputation acceptent les inspections avant expédition — de nombreuses marques réservent une visite QC par conteneur. Confirmez que l\'usine peut organiser des inspections sur échantillons et en production, et que les unités rejetées (par exemple, les planches qui perdent plus de 5 % de pression) sont exclues du lot.',
      },
      {
        title: 'Des délais qui tiennent',
        body: 'Pour les SUP gonflables, comptez 7–12 jours pour les échantillons et 25–35 jours de production en série après PO confirmé et acompte, plus le temps d\'outillage lors de la commande d\'un nouveau moule. Une usine qui propose des délais nettement plus courts que les autres cite d\'un catalogue, pas d\'un calendrier.',
      },
    ],
    faqs: [
      { q: 'Quel est le minimum de commande pour des planches SUP personnalisées ?', a: 'Les minimums par paliers sont la norme : 1–2 unités pour les échantillons, 5–10 unités pour le co-branding, 20–50 unités pour un lot pilote, et 90–100+ unités par rouleau de 150 m pour le volume standard ; les projets de moulage totalement sur mesure sont au palier volume.' },
      { q: 'Puis-je voir un échantillon avant la production en série ?', a: 'Oui — les échantillons sont prêts en 7–12 jours. La plupart des usines déduisent le coût de l\'échantillon et du moule de votre première commande de production une fois celle-ci confirmée.' },
      { q: 'Comment vérifier qu\'une usine de SUP est réelle ?', a: 'Demandez une visite vidéo en direct de l\'atelier de production, vérifiez l\'adresse opérationnelle de l\'usine à Qingdao ou dans un autre pôle industriel, et demandez la documentation de commandes d\'exportation précédentes. La commande d\'essai est la preuve ultime.' },
      { q: 'Que doit inclure un devis d\'usine de SUP ?', a: 'Prix unitaire par planche, coûts d\'outillage ou de moule, préparation des fichiers graphiques, emballage, conditions de QC et d\'inspection, et conditions de paiement.' },
    ],
    related: [
      { label: 'Notre fabrication OEM / ODM', href: '/oem-manufacturing' },
      { label: 'Processus de développement de produit SUP', href: '/product-development' },
      { label: 'Capacité et site de production', href: '/factory' },
      { label: 'Notre contrôle qualité — 7 portes d\'inspection', href: '/quality' },
      { label: 'Guide MOQ et marque flexible (PDF)', href: '/oem-moq-guide' },
      { label: 'Vérifiez-nous : confiance et garantie usine', href: '/oem-trust-assurance' },
      { label: 'Lancez votre projet SUP sur mesure', href: '/contact' },
    ],
  },
  {
    slug: 'private-label-sup-guide',
    title: 'SUP en marque privée : ce que vous obtenez réellement d\'une usine',
    intro: [
      'La marque privée est la voie la plus rapide pour lancer une marque de SUP : votre logo sur une plateforme éprouvée, sans le coût ni le risque de concevoir une planche de zéro. Voici ce que comprend réellement la collaboration avec un fabricant de SUP personnalisés.',
    ],
    sections: [
      {
        title: 'La marque privée, c\'est des plateformes éprouvées',
        body: 'Vous partez de plateformes que l\'usine construit et teste déjà — polyvalente, touring, yoga, course et plus encore. L\'usine personnalise le branding, les graphiques et les finitions, ce qui maintient les coûts bas et les délais courts. Les minimums sont par paliers : co-branding à partir de 5–10 unités, lots pilotes de 20–50 unités et 90–100+ unités par rouleau de 150 m pour le volume standard en marque privée.',
      },
      {
        title: 'Le branding va au-delà du logo',
        body: 'La marque privée couvre l\'impression de votre logo (numérique ou sérigraphie), les combinaisons de couleurs personnalisées, les tapis de traction EVA découpés à votre logo, les accessoires brandés (pagaie, pompe, leash), la conception du coffret de vente et même les présentoirs point de vente. Envoyez vos fichiers graphiques et l\'usine produit un aperçu visuel avant la production.',
      },
      {
        title: 'Ce que l\'usine gère pour vous',
        body: 'Une usine full-service gère la préparation des fichiers graphiques, l\'approvisionnement en matériaux, la production d\'échantillons, une checklist de montage en 100 points, les tests de pression et la documentation d\'exportation (facture, liste de colisage, certificat d\'origine). Vous validez les visuels et approuvez l\'échantillon — l\'usine gère tout le reste.',
      },
      {
        title: 'Ce que vous possédez : la marque, le marché, le client',
        body: 'Dans le cadre d\'un accord de marque privée, l\'usine construit les planches et vous possédez la marque. Les fabricants de bonne réputation ne revendent pas de planches sous leur propre nom sur votre marché ni ne cèdent votre design à des tiers. Demandez l\'exclusivité territoriale dans votre devis.',
      },
      {
        title: 'Les coûts : échantillon, moule, préparation des fichiers',
        body: 'Comptez trois types de frais : frais d\'échantillon (7–12 jours de production), coûts d\'outillage lorsqu\'un nouveau moule est nécessaire (au palier volume minimum) et préparation des fichiers pour l\'impression. La plupart des usines déduisent les frais d\'échantillon et de moule de votre première commande de production.',
      },
      {
        title: 'Du PO au lot terminé',
        body: 'Une série typique en marque privée : 30 % d\'acompte lance la production, la production en série est terminée en 25–35 jours après PO confirmé et acompte, et le solde est réglé contre le lot approuvé. Prévoyez le cycle complet dès votre première commande.',
      },
    ],
    faqs: [
      { q: 'Quel est le minimum de commande pour des planches SUP en marque privée ?', a: 'Le co-branding va de 5–10 unités, les lots pilotes de 20–50 unités et le volume standard en marque privée de 90–100+ unités par rouleau de 150 m ; les projets de moulage totalement sur mesure sont au palier volume.' },
      { q: 'Puis-je envoyer mon propre logo et mes fichiers graphiques ?', a: 'Oui — envoyez votre logo et vos fichiers ; l\'usine produit un aperçu visuel avant la production afin que vous approuviez les couleurs, le positionnement et la finition.' },
      { q: 'Mon design de SUP personnalisé est-il exclusif à ma marque ?', a: 'Oui avec les conditions standard de marque privée. Demandez une clause d\'exclusivité dans votre contrat ; des usines comme la nôtre ne revendent pas votre design avec votre marque.' },
      { q: 'Combien de temps prend une commande de SUP en marque privée ?', a: 'Les échantillons sont expédiés en 7–12 jours ; la production en série est terminée en 25–35 jours après PO confirmé et acompte. Prévoyez 8 à 12 semaines pour la première série complète.' },
    ],
    related: [
      { label: 'Solutions en marque privée', href: '/solutions/private-label-sup' },
      { label: 'Plateformes éprouvées', href: '/products/all-around' },
      { label: 'Fabrication OEM / ODM', href: '/oem-manufacturing' },
      { label: 'Lancez votre projet SUP sur mesure', href: '/contact' },
    ],
  },
  {
    slug: 'sup-fleet-guide',
    title: 'Acheter des flottes de SUP pour locations, resorts et clubs',
    intro: [
      'Les acheteurs de flottes ont besoin de réponses différentes de celles des utilisateurs finaux : durabilité par session, pièces de rechange standardisées, quantités à grande échelle et un fournisseur qui livre saison après saison. Voici ce qu\'il faut planifier avant de commander votre première flotte.',
    ],
    sections: [
      {
        title: 'Standardisez sur une ou deux spécifications',
        body: 'Les opérations de flotte vivent de la standardisation : une taille de planche (généralement 10\'6"–11\'0" × 32") pour la majorité des clients, un package résistant et un kit de pièces de rechange. Cela simplifie les réparations, la formation du personnel, le stockage et les réapprovisionnements. Résistez à la tentation d\'acheter dix modèles différents.',
      },
      {
        title: 'Les planches à usage intensif sont un produit différent',
        body: 'Une planche de location supporte des dizaines de sessions par saison. Spécifiez des couches de PVC plus épaisses, des bandes de rive renforcées et des accessoires plus résistants que pour les versions grand public. Demandez à l\'usine comment la spécification flotte diffère de la version grand public — les véritables usines ont les deux.',
      },
      {
        title: 'Adaptez les quantités à la demande',
        body: 'Calculez la taille de votre flotte en fonction de la rotation quotidienne et de la durée de la saison : 20–30 planches suffisent pour un petit stand, 100+ pour un resort ou club très fréquenté. Demandez à l\'usine des recommandations de quantités adaptées à votre volume de demande.',
      },
      {
        title: 'Commandez des pièces de rechange avec la flotte',
        body: 'Ajoutez des valves de rechange, des kits de réparation, des pompes, des leashes et des pagaies dans le même PO — le coût unitaire est faible et il est difficile de se les procurer en cours de saison. Demandez à l\'usine une proportion de pièces de rechange recommandée (généralement 5–10 % de la taille de la flotte pour les consommables).',
      },
      {
        title: 'Commandez en dehors de la saison, pas pendant',
        body: 'La production prend 25–35 jours après PO confirmé et acompte. Pour avoir des planches sur la plage au printemps, confirmez les commandes en fin d\'automne afin que la production soit livrée avant le début de la saison.',
      },
      {
        title: 'Marquez la flotte pour la valeur de revente',
        body: 'Les planches de flotte peuvent porter votre logo, un système de numérotation de location et un code couleur par taille. La sérigraphie sur des séries de 200+ unités est rentable, et une flotte brandée sert également de publicité sur l\'eau.',
      },
    ],
    faqs: [
      { q: 'Quel est le meilleur SUP pour une flotte de location ?', a: 'Une planche polyvalente de 10\'6"–11\'0" × 32" à construction renforcée est la norme du secteur : stable pour les débutants, durable en usage quotidien et facile à entretenir.' },
      { q: 'Combien de planches une opération de location nécessite-t-elle ?', a: 'Prévoyez 20–30 planches pour un petit stand, en adaptant à la rotation : 100+ unités pour les resorts et clubs à forte fréquentation. Les pièces de rechange devraient représenter 5–10 % de la taille de la flotte.' },
      { q: 'Les planches de flotte peuvent-elles porter notre logo ?', a: 'Oui — la sérigraphie, la numérotation de location et les ponts à code couleur sont des personnalisations standard, particulièrement rentables à partir de 200 unités.' },
      { q: 'Combien de temps prend une commande de flotte ?', a: 'Échantillons en 7–12 jours, production en 25–35 jours après PO confirmé et acompte — passez donc vos commandes de flotte bien avant le début de la saison.' },
    ],
    related: [
      { label: 'Solutions pour resorts et clubs', href: '/solutions/resort-sup' },
      { label: 'Étude de cas : flotte de location multi-sites', href: '/projects/rental-fleet-multi-site' },
      { label: 'Plateformes pour flottes', href: '/products/all-around' },
      { label: 'Parlez à un spécialiste projet', href: '/contact' },
    ],
  },
]

/** German variants of the guides (same slugs, translated copy). */
export const GUIDES_DE: Guide[] = [
  {
    slug: 'how-to-choose-your-sup',
    title: 'So wählen Sie Ihr SUP',
    intro: [
      'Die Wahl Ihres ersten aufblasbaren SUP hängt von Boardgröße, Breite, Konstruktion und Lieferumfang ab. Hier erfahren Sie, worauf es ankommt – in klarer Sprache.',
    ],
    sections: [
      {
        title: 'Länge und Volumen',
        body: 'Längere Boards (11–12 ft) gleiten pro Paddelzug weiter und halten die Spur besser – ideal für Touren und Distanzpaddeln. Kürzere Boards wenden leichter. Für die meisten Fahrer ist ein Allround-Board von 10\'6"–11\'0" der beste Kompromiss.',
      },
      {
        title: 'Breite und Stabilität',
        body: 'Die Breite bestimmt die Stabilität mehr als alles andere. Ein 32-inch Deck ist verzeihend für Anfänger und stabil genug für Yoga; 30-inch-Boards eignen sich für leichtere oder erfahrenere Paddler, die Geschwindigkeit und Wendigkeit suchen.',
      },
      {
        title: 'Konstruktionsqualität',
        body: 'Achten Sie auf einen militärtauglichen drop-stitch PVC-Kern mit einer Nenndruckfestigkeit von mindestens 15 PSI, doppellagiger PVC-Laminierung und verstärkten Rail-Bändern. Sie bestimmen, wie steif sich das Board anfühlt und wie lange es bei täglicher Nutzung hält.',
      },
      {
        title: 'Was im Lieferumfang sein sollte',
        body: 'Ein komplettes Paket spart Geld und Ärger: Board, verstellbares 3-teiliges Paddel, Doppelhub-Pumpe mit Manometer, Spiralleash, Finne(n), Reiserucksack und Reparaturset.',
      },
    ],
    faqs: [
      { q: 'Welche SUP-Boardgröße brauche ich?', a: 'Die meisten Anfänger wählen ein Allround-Board von etwa 11\'0" × 32" × 6" – stabil, vielseitig und leicht zu transportieren. Schwerere Fahrer oder Paddler mit Distanzzielen sollten eine Nummer größer wählen.' },
      { q: 'Ist ein aufblasbares SUP genauso steif wie ein hartes Board?', a: 'Ein modernes drop-stitch Aufblasboard mit 15–20 PSI kommt einem Einstiegs-Hardboard in der Steifigkeit nahe – mit dem Vorteil, dass es in einen Rucksack passt.' },
    ],
    related: [
      { label: 'Unsere SUP-Plattformen', href: '/products' },
      { label: 'Aufblasbar vs. Hartschalen-Board', href: '/inflatable-vs-hardboard' },
      { label: 'OEM-Fertigung', href: '/oem-manufacturing' },
    ],
  },
  {
    slug: 'beginner-guide',
    title: 'Paddel-Guide für Anfänger',
    intro: [
      'Alles, was Sie für Ihre ersten Sessions auf dem Wasser brauchen: Aufpumpen, das erste Aufstehen, der Grundschlag und wie Sie sicher bleiben, während Sie Sicherheit gewinnen.',
    ],
    sections: [
      {
        title: 'Auf den Sollwert aufpumpen, nicht nach Gefühl',
        body: 'Pumpen Sie mit dem Manometer Ihrer Pumpe auf den angegebenen Druck (in der Regel 15 PSI). Ein Board mit 10 PSI fühlt sich auf dem Rasen gut an, verformt sich auf dem Wasser aber stark. Prüfen Sie den Druck an warmen Tagen – die Sonne erhitzt die Luft im Inneren und erhöht den Druck.',
      },
      {
        title: 'Die ersten Schritte auf dem Board',
        body: 'Starten Sie vom Strand oder an einem flachen Einstieg: knien Sie zuerst, dann stellen Sie sich einen Fuß nach dem anderen über die Mittellinie. Halten Sie die Füße schulterbreit, die Knie weich und den Blick zum Horizont – Ihr Board folgt Ihren Augen.',
      },
      {
        title: 'Der Grundschlag',
        body: 'Greifen Sie mit dem Paddel weit nach vorn, tauchen Sie das Blatt vollständig ein und ziehen Sie es am Board entlang, während Sie den Oberkörper mitdrehen. Wechseln Sie alle paar Züge die Seite, um geradeaus zu fahren; zum Wenden dienen ein paar weite Züge auf einer Seite.',
      },
      {
        title: 'Üben Sie zuerst den Sturz',
        body: 'Das Hineinfallen gehört zum Lernen dazu. Üben Sie den Wiederaufstieg im flachen Wasser: schwimmen Sie zum Mittelgriff, stoßen Sie die Beine an die Oberfläche und ziehen Sie sich in einer Bewegung auf das Board.',
      },
    ],
    faqs: [
      { q: 'Wie lange dauert es, SUP zu lernen?', a: 'Die meisten Menschen können innerhalb ihrer ersten einstündigen Session bequem auf flachem Wasser paddeln. Sicherheit bei Wendungen, Wind und Distanz wächst über ein paar Sessions hinweg.' },
      { q: 'Muss ich fit sein?', a: 'Nein – SUP ist sehr zugänglich. Gleichgewicht, Rumpfkraft und Ausdauer bauen sich mit regelmäßigem Paddeln ganz natürlich auf.' },
    ],
  },
  {
    slug: 'inflatable-vs-hard',
    title: 'Aufblasbar vs. Hartschalen-Board',
    intro: [
      'Die beiden Konstruktionsfamilien gewinnen jeweils in unterschiedlichen Szenarien. Hier ist der ehrliche Vergleich für Freizeitpaddler, Clubs und Verleihbetreiber.',
    ],
    sections: [
      {
        title: 'Portabilität und Lagerung',
        body: 'Aufblasbare Boards werden zu einem Rucksack zusammengelegt, der in einen Kofferraum, ein Wohnmobil oder einen Apartmentschrank passt – und sind bei Reisen die Standardwahl. Hartschalen-Boards benötigen Dachträger, Stauraum und eine sorgfältigere Handhabung.',
      },
      {
        title: 'Steifigkeit und Leistung',
        body: 'Premium-Hardboards sind bei hohem Leistungsniveau steifer und reagieren direkter. Bei Freizeitgeschwindigkeit leistet ein gut gebautes drop-stitch Aufblasboard mit 15–20 PSI Vergleichbares – für einen Bruchteil der Lagerkosten.',
      },
      {
        title: 'Langlebigkeit',
        body: 'Aufblasbare PVC-Boards stecken Stegkratzer und Stöße an Land weg, die eine Hartschale brechen würden – ein Hauptgrund, warum Verleihflotten und Resorts für den täglichen Gästeeinsatz aufblasbare Boards wählen.',
      },
      {
        title: 'Gesamtkosten',
        body: 'Aufblasbare Boards kosten weniger in Versand, Lagerung und Wartung und überstehen rauere Behandlung. Für die meisten Nutzer und Flotten ist ein aufblasbares Board das bessere Gesamtpaket.',
      },
    ],
    faqs: [
      { q: 'Welches ist besser für Anfänger?', a: 'Aufblasbare Boards – stabil, verzeihend, leicht zu lagern und haltbar genug für die Kratzer, die Anfänger verursachen.' },
      { q: 'Kann ein aufblasbares SUP so schnell sein wie ein Hartschalen-Board?', a: 'Bei Freizeitgeschwindigkeit ist der Unterschied gering. Hartschalen-Boards gewinnen nur im Renn- und Hochleistungsbereich eindeutig.' },
    ],
  },
  {
    slug: 'safety-tips',
    title: 'Sicherheitstipps auf dem Wasser',
    intro: [
      'Eine sichere Session ist eine schöne Session. Diese Grundlagen gelten für Seen, Flüsse und Küstenpaddeln gleichermaßen.',
    ],
    sections: [
      {
        title: 'Wind und Vorhersage prüfen',
        body: 'Offshore-Wind ist die klassische SUP-Falle: Er treibt Sie schneller vom Ufer weg, als Sie zurückpaddeln können. Prüfen Sie die Vorhersage und bleiben Sie im Zweifel in geschützten Gewässern.',
      },
      {
        title: 'Immer die Leash tragen',
        body: 'Eine Spiralleash hält Ihr Board bei einem Sturz in Reichweite – das Board ist Ihr Schwimmgerät. Wählen Sie eine Leash passend zu Ihren Bedingungen: Spirale für Flachwasser, gerade für Brandung.',
      },
      {
        title: 'PFD und persönliche Sicherheit',
        body: 'Tragen Sie eine Schwimmhilfe, wenn es die Bedingungen nahelegen oder Vorschriften es verlangen. Nehmen Sie eine Trillerpfeife mit, teilen Sie jemandem Ihre Route und Rückkehrzeit mit und erwägen Sie ein Telefon in einer wasserdichten Hülle.',
      },
      {
        title: 'Kennen Sie Ihre Grenzen',
        body: 'Sammeln Sie Erfahrung auf flachem Wasser, bevor Sie Wind oder Strömung angehen. Respektieren Sie kaltes Wasser – es entzieht schnell Kraft. Und paddeln Sie in abgelegenen oder offenen Gewässern nie ohne Plan allein.',
      },
    ],
    faqs: [
      { q: 'Brauche ich auf einem SUP eine Schwimmweste?', a: 'Die Anforderungen variieren je nach Land und Gewässer. Auch wo sie optional ist, sind Leash plus Schwimmhilfe die verantwortungsvolle Basis, und Kinder sollten immer eine richtig sitzende Schwimmweste tragen.' },
      { q: 'Ist SUP auf einem See sicher?', a: 'Ja – flache Seen sind ideal zum Lernen. Prüfen Sie die Windrichtung, bleiben Sie für den Bootsverkehr sichtbar und meiden Sie stark befahrene Schifffahrtslinien.' },
    ],
    related: [
      { label: 'Sicherheitsausstattung auf unseren Plattformen', href: '/products' },
      { label: 'Fertigungs-Qualitätskontrolle', href: '/quality' },
      { label: 'Wählen Sie Ihr erstes Board', href: '/guides/how-to-choose-your-sup' },
    ],
  },
  {
    slug: 'choosing-a-sup-oem-factory',
    title: 'So wählen Sie eine kundenspezifische SUP-OEM-Fabrik',
    intro: [
      'Eigene aufblasbare Paddleboards unter eigener Marke zu kaufen, läuft auf eine Entscheidung hinaus: welcher Fabrik Sie Ihre erste Charge anvertrauen. So bewerten Sie einen kundenspezifischen SUP-Hersteller, bevor Sie eine Bestellung (PO) aufgeben.',
    ],
    sections: [
      {
        title: 'Beginnen Sie mit einer Probebestellung, nicht mit einer MOQ-Diskussion',
        body: 'Eine Fabrik, die nur über Mindestmengen spricht, ist ein Anzeichen für einen Handelstisch, nicht für einen echten Hersteller. Echte Fabriken bieten abgestufte Mindestmengen – Co-Branding ab 5–10 Einheiten, Pilotchargen ab 20–50 Einheiten, Standard-Volumenläufe ab 90–100+ pro 150-m-Rolle und komplette eigene Formprojekte auf der Volumenstufe. Bestellen Sie zuerst eine kleine Charge: Sie testet Kommunikation, Spezifikationsdisziplin und Musterqualität, ohne Ihr ganzes Launch zu riskieren.',
      },
      {
        title: 'Prüfen Sie, was tatsächlich im Haus ist',
        body: 'Die drop-stitch SUP-Produktion umfasst vier Kernstufen: Materiallaminierung, Schweißen, Druck und Montage. Eine echte Fabrik erledigt alle unter einem Dach und lässt Sie die Fertigung auditieren. Wenn der Verkäufer Ihnen keine Fertigungsstraße zeigen kann, kaufen Sie wahrscheinlich über einen Zwischenhändler ohne Kontrolle über Qualität oder Lieferzeit.',
      },
      {
        title: 'Muster müssen der Serienproduktion entsprechen',
        body: 'Ein von Hand fertiggestelltes Muster ist einfach; konsistente Serienproduktion ist schwer. Fragen Sie, wie die Fabrik die Wiederholbarkeit kontrolliert: Materialchargen-Protokolle, Schweißparameter und eine QC-Checkliste, die bei jedem einzelnen Board durchläuft – nicht nur bei dem, das Sie freigeben.',
      },
      {
        title: 'Kennen Sie Ihre Kosten vor der PO',
        body: 'Holen Sie sich das vollständige Kostenbild schriftlich: Stückpreis nach Menge, Werkzeug- oder Formkosten, wenn Sie eine neue Form wünschen, Artwork- und Druckeinrichtung sowie Verpackung.',
      },
      {
        title: 'Fragen Sie nach einer Drittinspektion',
        body: 'Seriöse OEM-SUP-Fabriken begrüßen Vorab-Inspektionen vor dem Versand – viele Marken buchen einen unabhängigen QC-Besuch pro Container. Bestätigen Sie, dass die Fabrik Inspektionen bei Muster- und Produktionsläufen organisieren kann und dass abgelehnte Einheiten (z. B. Boards, die mehr als 5 % Druck verlieren) aus der Charge ausgeschlossen werden.',
      },
      {
        title: 'Lieferzeiten, die halten',
        body: 'Bei aufblasbaren SUPs rechnen Sie mit Mustern in 7–12 Tagen und Serienproduktion in 25–35 Tagen nach bestätigter PO und Anzahlung, plus Werkzeugzeit, wenn Sie eine neue Form bestellen. Eine Fabrik, die deutlich kürzere Zeiten nennt als alle anderen, zitiert aus einem Prospekt, nicht aus einem Zeitplan.',
      },
    ],
    faqs: [
      { q: 'Wie hoch ist die Mindestbestellmenge für kundenspezifische SUP-Boards?', a: 'Abgestufte Mindestmengen sind Standard: 1–2 Einheiten für Muster, 5–10 Einheiten für Co-Branding, 20–50 Einheiten für eine Pilotcharge und 90–100+ Einheiten pro 150-m-Rolle für Standard-Volumen; komplett eigene Formprojekte laufen auf der Volumenstufe.' },
      { q: 'Kann ich vor der Serienproduktion ein Muster sehen?', a: 'Ja – Muster sind in 7–12 Tagen fertig. Die meisten Fabriken verrechnen Muster- und Formkosten mit Ihrer ersten Produktionsbestellung, sobald sie bestätigt ist.' },
      { q: 'Wie verifiziere ich, dass eine SUP-Fabrik echt ist?', a: 'Fragen Sie nach einem Live-Videorundgang durch die Fertigung, prüfen Sie eine aktive Werksadresse in Qingdao oder einem anderen Fertigungsstandort und fordern Sie Dokumentation früherer Exportaufträge an. Probebestellungen sind der ultimative Beweis.' },
      { q: 'Was sollte ein Angebot einer SUP-Fabrik enthalten?', a: 'Stückpreis pro Board, Werkzeug- oder Formkosten, Artwork-Einrichtung, Verpackung, QC- und Inspektionsbedingungen sowie Zahlungsbedingungen.' },
    ],
    related: [
      { label: 'Unsere OEM-/ODM-Fertigung', href: '/oem-manufacturing' },
      { label: 'SUP-Produktentwicklungsprozess', href: '/product-development' },
      { label: 'Fabrikkapazität und Werk', href: '/factory' },
      { label: 'So kontrollieren wir Qualität – 7 Inspektionsgates', href: '/quality' },
      { label: 'MOQ- und Flexible-Branding-Leitfaden (PDF)', href: '/oem-moq-guide' },
      { label: 'Vertrauen und Werksgarantie', href: '/oem-trust-assurance' },
      { label: 'Starten Sie Ihr kundenspezifisches SUP-Projekt', href: '/contact' },
    ],
  },
  {
    slug: 'private-label-sup-guide',
    title: 'Private Label SUP: Was Sie von einer Fabrik tatsächlich bekommen',
    intro: [
      'Private Label ist der schnellste Weg, eine SUP-Marke zu launchen: Ihr Logo auf einer bewährten Plattform – ohne Kosten und Risiko, ein Board von Grund auf zu entwickeln. Hier sehen Sie, was die Zusammenarbeit mit einem kundenspezifischen SUP-Hersteller tatsächlich beinhaltet.',
    ],
    sections: [
      {
        title: 'Private Label bedeutet bewährte Plattformen',
        body: 'Sie starten von Plattformen, die die Fabrik bereits baut und testet – Allround, Touring, Yoga, Race und mehr. Die Fabrik individualisiert Branding, Grafiken und Ausstattung, was Kosten niedrig und Lieferzeiten kurz hält. Die Mindestmengen sind abgestuft: Co-Branding ab 5–10 Einheiten, Pilotchargen ab 20–50 Einheiten und 90–100+ Einheiten pro 150-m-Rolle für Standard-Private-Label-Volumen.',
      },
      {
        title: 'Branding geht über das Logo hinaus',
        body: 'Private Label umfasst Ihren Logodruck (digital oder Siebdruck), individuelle Farbschemata, passgenau zugeschnittene EVA-Traction-Pads mit Ihrem Logo, Accessoire-Branding (Paddel, Pumpe, Leash), Retail-Box-Design und sogar Point-of-Sale-Displays. Senden Sie Ihre Artworks, und die Fabrik erstellt vor der Produktion einen visuellen Nachweis.',
      },
      {
        title: 'Was die Fabrik für Sie übernimmt',
        body: 'Eine Full-Service-SUP-Fabrik übernimmt Artwork-Einrichtung, Materialbeschaffung, Musterproduktion, eine 100-Punkte-Montage-QC-Checkliste, Drucktests und Exportdokumentation (Rechnung, Packliste, Ursprungszeugnis). Sie prüfen die Nachweise und geben das Muster frei – die Fabrik erledigt alles Weitere.',
      },
      {
        title: 'Was Ihnen gehört: Marke, Markt, Kunde',
        body: 'In einer Private-Label-Vereinbarung baut die Fabrik die Boards, und Ihnen gehört die Marke. Seriöse Hersteller verkaufen ihre Boards nicht unter eigenem Namen in Ihrem Markt und geben Ihr individuelles Design nicht an andere weiter. Fragen Sie in Ihrem Angebot nach Marktexklusivität.',
      },
      {
        title: 'Kosten: Muster, Form, Artwork-Einrichtung',
        body: 'Rechnen Sie mit drei Arten von Kosten: Mustergebühren (7–12 Tage Produktionszeit), Werkzeugkosten, wenn eine neue Form erforderlich ist (auf der Volumenstufe), und Artwork-Einrichtung für den Druck. Die meisten Fabriken verrechnen Muster- und Formkosten mit Ihrer ersten Produktionsbestellung.',
      },
      {
        title: 'Von der PO zur fertigen Charge',
        body: 'Ein typischer Private-Label-Lauf: 30 % Anzahlung starten die Produktion, die Serienproduktion ist in 25–35 Tagen nach bestätigter PO und Anzahlung abgeschlossen, der Restbetrag wird gegen die freigegebene Charge verrechnet. Planen Sie den kompletten Lauf in Ihre erste Bestellung ein.',
      },
    ],
    faqs: [
      { q: 'Wie hoch ist die Mindestbestellmenge für Private-Label-SUP-Boards?', a: 'Co-Branding läuft ab 5–10 Einheiten, Pilotchargen ab 20–50 Einheiten und Standard-Private-Label-Volumen ab 90–100+ Einheiten pro 150-m-Rolle; komplett eigene Formprojekte laufen auf der Volumenstufe.' },
      { q: 'Kann ich mein eigenes Logo und Artwork senden?', a: 'Ja – senden Sie Ihr Logo und Ihre Artworks; die Fabrik erstellt vor der Produktion einen visuellen Nachweis, damit Sie Farben, Platzierung und Verarbeitung freigeben.' },
      { q: 'Ist mein kundenspezifisches SUP-Design exklusiv für meine Marke?', a: 'Ja, bei standardmäßigen Private-Label-Bedingungen. Fordern Sie eine Exklusivitätsklausel in Ihrem Kaufvertrag; Fabriken wie unsere verkaufen Ihr markiertes Design nicht weiter.' },
      { q: 'Wie lange dauert eine Private-Label-SUP-Bestellung?', a: 'Muster werden in 7–12 Tagen versendet; die Serienproduktion ist in 25–35 Tagen nach bestätigter PO und Anzahlung abgeschlossen. Planen Sie für den ersten kompletten Lauf 8–12 Wochen ein.' },
    ],
    related: [
      { label: 'Private-Label-SUP-Lösungen', href: '/solutions/private-label-sup' },
      { label: 'Bewährte Plattformen', href: '/products/all-around' },
      { label: 'OEM-/ODM-Fertigung', href: '/oem-manufacturing' },
      { label: 'Starten Sie Ihr kundenspezifisches SUP-Projekt', href: '/contact' },
    ],
  },
  {
    slug: 'sup-fleet-guide',
    title: 'SUP-Flotten kaufen für Verleih, Resorts und Clubs',
    intro: [
      'Flottenkäufer brauchen andere Antworten als Endnutzer: Haltbarkeit pro Session, standardisierte Ersatzteile, Mengen auf Volumenebene und einen Lieferanten, der Saison für Saison liefert. Hier erfahren Sie, was Sie vor der Bestellung Ihrer ersten Flotte planen sollten.',
    ],
    sections: [
      {
        title: 'Auf eine oder zwei Spezifikationen standardisieren',
        body: 'Flottenbetrieb läuft über Standardisierung: eine Boardgröße (in der Regel 10\'6"–11\'0" × 32") für die meisten Gäste, ein strapazierfähiges Paket, ein Ersatzteil-Kit. Das vereinfacht Reparaturen, Personalschulung, Lagerung und Nachbestellung. Widerstehen Sie der Versuchung, zehn verschiedene Modelle zu kaufen.',
      },
      {
        title: 'Hochbelastete Boards sind ein anderes Produkt',
        body: 'Ein Verleihboard hält dutzende Sessions pro Saison aus. Spezifizieren Sie dickere PVC-Schichten, verstärkte Rail-Bänder und robustere Accessoires als bei Retail-Boards. Fragen Sie die Fabrik, wie sich die Flottenspezifikation von der Verbraucherversion unterscheidet – echte Werke haben beide.',
      },
      {
        title: 'Mengen an die Nachfrage anpassen',
        body: 'Berechnen Sie Ihre Flottengröße anhand der täglichen Rotation und der Saisonlänge: 20–30 Boards bedienen einen kleinen Stand, 100+ ein stark frequentiertes Resort oder einen Club. Bitten Sie die Fabrik um eine Mengenempfehlung passend zu Ihrem Nachfragemuster.',
      },
      {
        title: 'Ersatzteile gleich mit der Flotte bestellen',
        body: 'Bestellen Sie Ersatzventile, Reparatursets, Pumpen, Leashes und Paddel in derselben PO – sie kosten jetzt wenig pro Einheit und sind mitten in der Saison schwer zu beschaffen. Fragen Sie die Fabrik nach einer empfohlenen Ersatzteilquote (in der Regel 5–10 % der Flottengröße für Verbrauchsmaterial).',
      },
      {
        title: 'Gegen die Saison bestellen, nicht während',
        body: 'Die Produktion dauert 25–35 Tage nach bestätigter PO und Anzahlung. Damit die Boards im Frühjahr am Strand liegen, bestätigen Sie Bestellungen im Spätherbst, sodass die Produktion vor der Saison ankommt.',
      },
      {
        title: 'Die Flotte für den Wiederverkaufswert markieren',
        body: 'Flottenboards können Ihr Logo, ein Verleih-Nummernsystem und eine Farbcodierung nach Größe tragen. Siebdruck-Logos bei Läufen ab 200+ Einheiten sind kosteneffektiv, und eine markierte Flotte wirkt auf dem Wasser zugleich als Marketing.',
      },
    ],
    faqs: [
      { q: 'Welches ist das beste SUP für eine Verleihflotte?', a: 'Ein Allround-Board in 10\'6"–11\'0" × 32" mit verstärkter Konstruktion ist der Industriestandard – stabil für Anfänger, haltbar für den täglichen Einsatz und leicht zu warten.' },
      { q: 'Wie viele Boards braucht ein Verleihbetrieb?', a: 'Planen Sie für einen kleinen Stand 20–30 Boards, skalierend mit der Rotation: 100+ Einheiten für stark frequentierte Resorts und Clubs. Ersatzteile sollten 5–10 % der Flottengröße betragen.' },
      { q: 'Können Flottenboards mit unserem Logo versehen werden?', a: 'Ja – Siebdruck-Logos, Verleih-Nummerierung und farbcodierte Decks sind Standard-Individualisierungen, besonders kosteneffektiv ab 200 Einheiten.' },
      { q: 'Wie lange dauert eine Flottenbestellung?', a: 'Muster in 7–12 Tagen, Produktion in 25–35 Tagen nach bestätigter PO und Anzahlung – deshalb bestellen Sie Flotten deutlich vor Saisonbeginn.' },
    ],
    related: [
      { label: 'Resort- und Club-Lösungen', href: '/solutions/resort-sup' },
      { label: 'Fallstudie: Verleihflotte an mehreren Standorten', href: '/projects/rental-fleet-multi-site' },
      { label: 'Flotten-Plattformen', href: '/products/all-around' },
      { label: 'Sprechen Sie mit einem Projektspezialisten', href: '/contact' },
    ],
  },
]

/** Italian variants of the guides (same slugs, translated copy). */
export const GUIDES_IT: Guide[] = [
  {
    slug: 'how-to-choose-your-sup',
    title: 'Come scegliere il tuo SUP',
    intro: [
      'La scelta del tuo primo SUP gonfiabile dipende da dimensioni, larghezza, costruzione e contenuto della confezione. Ecco cosa conta, in parole semplici.',
    ],
    sections: [
      {
        title: 'Lunghezza e volume',
        body: 'Le tavole più lunghe (11–12 ft) scorrono di più a ogni colpo di pagaia e mantengono meglio la rotta — ideali per tour e pagaiate di distanza. Le tavole più corte virano più facilmente. Per la maggior parte dei rider, una tavola all-around di 10\'6"–11\'0" è il compromesso migliore.',
      },
      {
        title: 'Larghezza e stabilità',
        body: 'La larghezza determina la stabilità più di qualsiasi altro fattore. Un deck da 32 inch è indulgente con i principianti e abbastanza stabile per lo yoga; le tavole da 30 inch si adattano a pagaiatori più leggeri o più esperti che cercano velocità e agilità.',
      },
      {
        title: 'Qualità costruttiva',
        body: "Cerca un nucleo in PVC drop-stitch di grado militare con una pressione nominale di almeno 15 PSI, una laminazione in PVC a doppio strato e fasce rail rinforzate. Sono questi gli elementi che determinano quanto la tavola risulti rigida e quanto duri con l\u2019uso quotidiano.",
      },
      {
        title: 'Cosa dovrebbe essere incluso',
        body: 'Un pacchetto completo fa risparmiare denaro e fastidi: tavola, pagaia regolabile in 3 pezzi, pompa a doppia azione con manometro, leash a spirale, pinna/e, zaino da viaggio e kit di riparazione.',
      },
    ],
    faqs: [
      { q: 'Quanto deve essere grande una tavola SUP?', a: 'La maggior parte dei principianti sceglie una tavola all-around di circa 11\'0" × 32" × 6" — stabile, versatile e facile da trasportare. I rider più pesanti o chi punta alle distanze dovrebbe scegliere una taglia in più.' },
      { q: 'Un SUP gonfiabile è rigido come una tavola rigida?', a: 'Un drop-stitch gonfiabile moderno a 15–20 PSI si avvicina a una tavola rigida entry-level in termini di rigidità — con il vantaggio di stare in uno zaino.' },
    ],
    related: [
      { label: 'Le nostre piattaforme SUP', href: '/products' },
      { label: 'Gonfiabile vs tavola rigida', href: '/inflatable-vs-hardboard' },
      { label: 'Produzione OEM', href: '/oem-manufacturing' },
    ],
  },
  {
    slug: 'beginner-guide',
    title: 'Guida alla pagaiata per principianti',
    intro: [
      'Tutto ciò che ti serve per le tue prime sessioni in acqua: gonfiaggio, il primo passo in piedi, la pagaiata di base e come restare al sicuro mentre acquisisci sicurezza.',
    ],
    sections: [
      {
        title: 'Gonfiare al valore nominale, non a sensazione',
        body: "Gonfia alla pressione indicata (di norma 15 PSI) usando il manometro della tua pompa. Una tavola a 10 PSI sembra a posto sull\u2019erba, ma si deforma parecchio in acqua. Controlla la pressione nelle giornate calde — il sole riscalda l\u2019aria all\u2019interno e fa salire la pressione.",
      },
      {
        title: 'I primi passi sulla tavola',
        body: "Parti dalla spiaggia o da un accesso poco profondo: prima in ginocchio, poi in piedi un piede alla volta sopra la linea centrale. Tieni i piedi alla larghezza delle spalle, le ginocchia morbide e lo sguardo sull\u2019orizzonte — la tua tavola segue i tuoi occhi.",
      },
      {
        title: 'La pagaiata di base',
        body: 'Allunga la pagaia ben in avanti, immergi completamente la pala e tira lungo la tavola ruotando il busto. Cambia lato ogni pochi colpi per andare dritto; per virare bastano un paio di ampie pagaiate su un lato.',
      },
      {
        title: 'Esercitati prima di tutto a cadere',
        body: "Cadere in acqua fa parte dell\u2019apprendimento. Esercita la risalita in acque basse: nuota fino alla maniglia centrale, spingi le gambe verso la superficie e tirati su sulla tavola in un solo movimento.",
      },
    ],
    faqs: [
      { q: 'Quanto tempo ci vuole per imparare il SUP?', a: "La maggior parte delle persone riesce a pagaiare comodamente su acqua calma già nella prima sessione di un\u2019ora. La sicurezza nelle virate, col vento e nella distanza cresce nel corso di poche sessioni." },
      { q: 'Devo essere in forma?', a: 'No — il SUP è molto accessibile. Equilibrio, forza del core e resistenza si sviluppano in modo del tutto naturale con la pagaiata regolare.' },
    ],
  },
  {
    slug: 'inflatable-vs-hard',
    title: 'Gonfiabile vs tavola rigida',
    intro: [
      'Le due famiglie di costruzione vincono ognuna in scenari diversi. Ecco il confronto onesto per pagaiatori ricreativi, club e operatori di noleggio.',
    ],
    sections: [
      {
        title: 'Portabilità e stoccaggio',
        body: "Le tavole gonfiabili si piegano in uno zaino che sta nel bagagliaio, nel camper o nell\u2019armadio di casa — e sono la scelta standard per i viaggi. Le tavole rigide richiedono portapacchi, spazio di stoccaggio e una gestione più accurata.",
      },
      {
        title: 'Rigidità e prestazioni',
        body: 'Le hardboard premium sono più rigide e reagiscono in modo più diretto ad alti livelli di prestazione. A velocità ricreative, un drop-stitch gonfiabile ben costruito a 15–20 PSI offre prestazioni comparabili — a una frazione dei costi di stoccaggio.',
      },
      {
        title: 'Durata',
        body: "Le tavole gonfiabili in PVC sopportano graffi da pontile e urti sulla riva che spaccherebbero un guscio rigido — un motivo centrale per cui le flotte di noleggio e i resort scelgono i gonfiabili per l\u2019uso quotidiano degli ospiti.",
      },
      {
        title: 'Costo totale di proprietà',
        body: 'Le tavole gonfiabili costano meno in spedizione, stoccaggio e manutenzione e sopravvivono a un trattamento più rude. Per la maggior parte degli utenti e delle flotte, una tavola gonfiabile è il miglior rapporto qualità-prezzo complessivo.',
      },
    ],
    faqs: [
      { q: "Qual è il migliore per i principianti?", a: 'Le tavole gonfiabili — stabili, indulgenti, facili da stoccare e abbastanza durature per i graffi che causano i principianti.' },
      { q: 'Un SUP gonfiabile può essere veloce come una tavola rigida?', a: 'A velocità ricreative la differenza è minima. Le tavole rigide vincono chiaramente solo in gara e negli scenari ad alte prestazioni.' },
    ],
  },
  {
    slug: 'safety-tips',
    title: 'Consigli di sicurezza in acqua',
    intro: [
      'Una sessione sicura è una sessione piacevole. Queste basi valgono allo stesso modo per laghi, fiumi e pagaiata costiera.',
    ],
    sections: [
      {
        title: 'Controllare vento e previsioni',
        body: 'Il vento offshore è la classica trappola del SUP: ti spinge lontano dalla riva più velocemente di quanto tu possa pagaiare per tornare indietro. Controlla le previsioni e, in caso di dubbio, resta in acque riparate.',
      },
      {
        title: 'Indossare sempre il leash',
        body: 'Un leash a spirale tiene la tua tavola a portata di mano in caso di caduta — la tavola è il tuo dispositivo di galleggiamento. Scegli un leash adatto alle tue condizioni: a spirale per le acque calme, dritto per il surf.',
      },
      {
        title: 'PFD e sicurezza personale',
        body: "Indossa un dispositivo di galleggiamento quando le condizioni lo richiedono o le normative lo impongono. Porta con te un fischietto, comunica a qualcuno il tuo percorso e l\u2019orario di ritorno e valuta di tenere un telefono in una custodia impermeabile.",
      },
      {
        title: 'Conosci i tuoi limiti',
        body: "Fai esperienza su acque calme prima di affrontare vento o corrente. Rispetta l\u2019acqua fredda — sottrae forze rapidamente. E non pagaiare mai da solo in zone remote o in acque aperte senza un piano.",
      },
    ],
    faqs: [
      { q: 'Devo indossare un giubbotto di salvataggio su un SUP?', a: "I requisiti variano da paese a paese e da via d\u2019acqua a via d\u2019acqua. Anche dove è facoltativo, leash più dispositivo di galleggiamento rappresentano la base responsabile, e i bambini dovrebbero sempre indossare un giubbotto di salvataggio ben aderente." },
      { q: 'È sicuro fare SUP in un lago?', a: 'Sì — i laghi calmi sono ideali per imparare. Controlla la direzione del vento, resta visibile al traffico di barche ed evita le rotte di navigazione molto frequentate.' },
    ],
    related: [
      { label: 'Equipaggiamento di sicurezza sulle nostre piattaforme', href: '/products' },
      { label: 'Controllo qualità in produzione', href: '/quality' },
      { label: 'Scegli la tua prima tavola', href: '/guides/how-to-choose-your-sup' },
    ],
  },
  {
    slug: 'choosing-a-sup-oem-factory',
    title: 'Come scegliere una fabbrica OEM di SUP personalizzati',
    intro: [
      'Acquistare paddleboard gonfiabili con il proprio marchio si riduce a una decisione: a quale fabbrica affidare la tua prima partita. Ecco come valutare un produttore di SUP personalizzati prima di emettere un ordine (PO).',
    ],
    sections: [
      {
        title: 'Inizia con un ordine di prova, non con una discussione sul MOQ',
        body: 'Una fabbrica che parla solo di quantità minime è un segnale di una scrivania commerciale, non di una vera azienda. Le vere fabbriche offrono minimi a scaglioni — co-branding da 5–10 unità, partite pilota da 20–50 unità, run di volume standard da 90–100+ per rotolo da 150 m e progetti con stampo completamente personalizzato allo scaglione volume. Ordina per prima una piccola partita: testa comunicazione, disciplina delle specifiche e qualità dei campioni senza rischiare tutto il tuo lancio.',
      },
      {
        title: 'Verifica cosa è realmente in-house',
        body: 'La produzione di un SUP drop-stitch comprende quattro fasi centrali: laminazione del materiale, saldatura, stampa e assemblaggio. Una vera fabbrica le esegue tutte sotto lo stesso tetto e ti consente di verificare il reparto. Se il venditore non può mostrarti una linea di produzione, probabilmente stai acquistando tramite un intermediario senza controllo sulla qualità o sui tempi di consegna.',
      },
      {
        title: 'I campioni devono corrispondere alla produzione di serie',
        body: 'Un campione rifinito a mano è facile; una produzione di serie costante è difficile. Chiedi come la fabbrica controlla la ripetibilità: protocolli dei lotti di materiale, parametri di saldatura e una checklist di QC che venga applicata a ogni singola tavola — non solo a quella che approvi.',
      },
      {
        title: 'Conosci i tuoi costi prima del PO',
        body: 'Ottieni per iscritto il quadro completo dei costi: prezzo unitario per quantità, costi di attrezzaggio o stampo se desideri una nuova forma, predisposizione di artwork e stampa, e imballaggio.',
      },
      {
        title: "Chiedi un\u2019ispezione di terze parti",
        body: 'Le fabbriche OEM di SUP affidabili accolgono favorevolmente le ispezioni pre-spedizione — molti marchi prenotano una visita QC indipendente per ogni container. Conferma che la fabbrica possa organizzare ispezioni su campioni e run di produzione e che le unità respinte (ad esempio tavole che perdono più del 5 % di pressione) vengano escluse dal lotto.',
      },
      {
        title: 'Tempi di consegna che reggono',
        body: 'Per i SUP gonfiabili, calcola campioni in 7–12 giorni e produzione di serie in 25–35 giorni dopo PO confermata e acconto, più il tempo di attrezzaggio quando ordini un nuovo stampo. Una fabbrica che dichiara tempi nettamente più brevi di tutti gli altri cita da un catalogo, non da una pianificazione.',
      },
    ],
    faqs: [
      { q: "Qual è la quantità minima d\u2019ordine per le tavole SUP personalizzate?", a: 'I minimi a scaglioni sono lo standard: 1–2 unità per i campioni, 5–10 unità per il co-branding, 20–50 unità per una partita pilota e 90–100+ unità per rotolo da 150 m per il volume standard; i progetti con stampo completamente personalizzato sono allo scaglione volume.' },
      { q: 'Posso vedere un campione prima della produzione di serie?', a: 'Sì — i campioni sono pronti in 7–12 giorni. La maggior parte delle fabbriche accredita i costi di campione e stampo sul tuo primo ordine di produzione, una volta confermato.' },
      { q: 'Come verifico che una fabbrica di SUP sia reale?', a: 'Chiedi una video-visita in diretta del reparto produttivo, verifica un indirizzo di stabilimento operativo a Qingdao o in un altro polo manifatturiero e richiedi la documentazione dei precedenti ordini di esportazione. Gli ordini di prova sono la prova definitiva.' },
      { q: 'Cosa deve includere un preventivo di una fabbrica di SUP?', a: "Prezzo unitario per tavola, costi di attrezzaggio o stampo, predisposizione dell\u2019artwork, imballaggio, condizioni di QC e ispezione e condizioni di pagamento." },
    ],
    related: [
      { label: 'La nostra produzione OEM / ODM', href: '/oem-manufacturing' },
      { label: 'Processo di sviluppo del prodotto SUP', href: '/product-development' },
      { label: 'Capacità e stabilimento', href: '/factory' },
      { label: 'Come controlliamo la qualità — 7 gate di ispezione', href: '/quality' },
      { label: 'Guida a MOQ e branding flessibile (PDF)', href: '/oem-moq-guide' },
      { label: 'Fiducia e garanzia dello stabilimento', href: '/oem-trust-assurance' },
      { label: 'Avvia il tuo progetto SUP personalizzato', href: '/contact' },
    ],
  },
  {
    slug: 'private-label-sup-guide',
    title: 'SUP a marchio privato: cosa ottieni realmente da una fabbrica',
    intro: [
      'Il private label è il modo più rapido per lanciare un marchio SUP: il tuo logo su una piattaforma collaudata, senza i costi e i rischi di progettare una tavola da zero. Ecco cosa comprende realmente la collaborazione con un produttore di SUP personalizzati.',
    ],
    sections: [
      {
        title: 'Private label significa piattaforme collaudate',
        body: 'Si parte da piattaforme che la fabbrica costruisce e collauda già — all-around, touring, yoga, race e altro. La fabbrica personalizza branding, grafiche e finiture, mantenendo bassi i costi e brevi i tempi di consegna. I minimi sono a scaglioni: co-branding da 5–10 unità, partite pilota da 20–50 unità e 90–100+ unità per rotolo da 150 m per il volume standard di private label.',
      },
      {
        title: 'Il branding va oltre il logo',
        body: 'Il private label comprende la stampa del tuo logo (digitale o serigrafia), schemi di colore personalizzati, tappetini EVA tagliati su misura con il tuo logo, branding degli accessori (pagaia, pompa, leash), design della scatola retail e persino espositori da punto vendita. Invia le tue grafiche e la fabbrica prepara una prova visiva prima della produzione.',
      },
      {
        title: 'Cosa gestisce la fabbrica per te',
        body: "Una fabbrica SUP full-service gestisce la predisposizione dell\u2019artwork, l\u2019approvvigionamento dei materiali, la produzione dei campioni, una checklist di QC di assemblaggio a 100 punti, i test di pressione e la documentazione di esportazione (fattura, packing list, certificato di origine). Tu verifichi le prove e approvi il campione — la fabbrica fa tutto il resto.",
      },
      {
        title: 'Ciò che ti appartiene: marchio, mercato, cliente',
        body: "In un accordo di private label la fabbrica costruisce le tavole e a te appartiene il marchio. I produttori affidabili non vendono le loro tavole con il proprio nome nel tuo mercato né cedono il tuo design personalizzato ad altri. Chiedi l\u2019esclusiva di mercato nel tuo preventivo.",
      },
      {
        title: "Costi: campione, stampo, predisposizione dell\u2019artwork",
        body: "Conta su tre tipi di costi: spese per il campione (7–12 giorni di produzione), costi di attrezzaggio quando serve un nuovo stampo (minimo allo scaglione volume) e predisposizione dell\u2019artwork per la stampa. La maggior parte delle fabbriche accredita i costi di campione e stampo sul tuo primo ordine di produzione.",
      },
      {
        title: 'Dalla PO alla partita finita',
        body: "Un run di private label tipico: un acconto del 30 % avvia la produzione, la produzione di serie viene completata in 25–35 giorni dopo PO confermata e acconto e il saldo viene compensato con la partita approvata. Includi l\u2019intero run nel tuo primo ordine.",
      },
    ],
    faqs: [
      { q: "Qual è la quantità minima d\u2019ordine per tavole SUP a marchio privato?", a: 'Il co-branding parte da 5–10 unità, le partite pilota da 20–50 unità e il volume standard di private label da 90–100+ unità per rotolo da 150 m; i progetti con stampo completamente personalizzato sono allo scaglione volume.' },
      { q: 'Posso inviare il mio logo e le mie grafiche?', a: 'Sì — invia il tuo logo e le tue grafiche; la fabbrica prepara una prova visiva prima della produzione, così approvi colori, posizionamento e finitura.' },
      { q: 'Il mio design SUP personalizzato è esclusivo del mio marchio?', a: 'Sì, alle condizioni standard di private label. Richiedi una clausola di esclusività nel tuo contratto di acquisto; fabbriche come la nostra non rivendono il tuo design con il tuo marchio.' },
      { q: 'Quanto tempo richiede un ordine SUP a marchio privato?', a: 'I campioni vengono spediti in 7–12 giorni; la produzione di serie si completa in 25–35 giorni dopo PO confermata e acconto. Prevedi 8–12 settimane per il primo run completo.' },
    ],
    related: [
      { label: 'Soluzioni SUP a marchio privato', href: '/solutions/private-label-sup' },
      { label: 'Piattaforme collaudate', href: '/products/all-around' },
      { label: 'Produzione OEM / ODM', href: '/oem-manufacturing' },
      { label: 'Avvia il tuo progetto SUP personalizzato', href: '/contact' },
    ],
  },
  {
    slug: 'sup-fleet-guide',
    title: 'Acquistare flotte SUP per il noleggio, resort e club',
    intro: [
      'Chi acquista flotte ha bisogno di risposte diverse dagli utenti finali: durata per sessione, ricambi standardizzati, quantità a livello volume e un fornitore che consegni stagione dopo stagione. Ecco cosa pianificare prima di ordinare la tua prima flotta.',
    ],
    sections: [
      {
        title: 'Standardizzare su una o due specifiche',
        body: 'Il business delle flotte si basa sulla standardizzazione: una dimensione di tavola (di norma 10\'6"–11\'0" × 32") per la maggior parte degli ospiti, un pacchetto robusto, un kit di ricambi. Semplifica riparazioni, formazione del personale, stoccaggio e riordini. Resisti alla tentazione di comprare dieci modelli diversi.',
      },
      {
        title: 'Le tavole ad alto utilizzo sono un prodotto diverso',
        body: 'Una tavola da noleggio regge decine di sessioni a stagione. Specifica strati di PVC più spessi, fasce rail rinforzate e accessori più robusti rispetto alle tavole retail. Chiedi alla fabbrica come la specifica da flotta differisce dalla versione consumer — i veri impianti hanno entrambe.',
      },
      {
        title: 'Adattare le quantità alla domanda',
        body: 'Calcola la dimensione della tua flotta in base alla rotazione giornaliera e alla durata della stagione: 20–30 tavole servono un piccolo punto vendita, 100+ un resort o un club molto frequentato. Chiedi alla fabbrica una raccomandazione sulle quantità adatta al tuo modello di domanda.',
      },
      {
        title: 'Ordinare i ricambi insieme alla flotta',
        body: 'Ordina valvole di ricambio, kit di riparazione, pompe, leash e pagaie nello stesso PO — costano poco a unità adesso e sono difficili da reperire a metà stagione. Chiedi alla fabbrica una quota di ricambi consigliata (di norma il 5–10 % della dimensione della flotta per i materiali di consumo).',
      },
      {
        title: 'Ordinare per la stagione, non durante',
        body: 'La produzione richiede 25–35 giorni dopo PO confermata e acconto. Per avere le tavole in spiaggia in primavera, conferma gli ordini nel tardo autunno, così la produzione arriva prima della stagione.',
      },
      {
        title: 'Brandizzare la flotta per il valore di rivendita',
        body: "Le tavole da flotta possono portare il tuo logo, un sistema di numerazione per il noleggio e un codice colore per dimensione. I loghi serigrafati su run da 200+ unità sono convenienti, e una flotta brandizzata funziona anche come marketing sull\u2019acqua.",
      },
    ],
    faqs: [
      { q: "Qual è il miglior SUP per una flotta di noleggio?", a: "Una tavola all-around da 10\'6\"–11\'0\" × 32\" con costruzione rinforzata è lo standard del settore — stabile per i principianti, duratura per l\u2019uso quotidiano e facile da manutenere." },
      { q: "Di quante tavole ha bisogno un\u2019attività di noleggio?", a: 'Prevedi 20–30 tavole per un piccolo punto vendita, scalando con la rotazione: 100+ unità per resort e club molto frequentati. I ricambi dovrebbero corrispondere al 5–10 % della dimensione della flotta.' },
      { q: 'Le tavole della flotta possono avere il nostro logo?', a: 'Sì — loghi serigrafati, numerazione del noleggio e deck con codici colore sono personalizzazioni standard, particolarmente convenienti da 200 unità in su.' },
      { q: 'Quanto tempo richiede un ordine di flotta?', a: "Campioni in 7–12 giorni, produzione in 25–35 giorni dopo PO confermata e acconto — quindi ordina le flotte ben prima dell\u2019inizio della stagione." },
    ],
    related: [
      { label: 'Soluzioni per resort e club', href: '/solutions/resort-sup' },
      { label: 'Case study: flotta di noleggio in più sedi', href: '/projects/rental-fleet-multi-site' },
      { label: 'Piattaforme per flotte', href: '/products/all-around' },
      { label: 'Parla con uno specialista di progetto', href: '/contact' },
    ],
  },
]

/** Portuguese variants of the guides (same slugs, translated copy). */
export const GUIDES_PT: Guide[] = [
  {
    slug: 'how-to-choose-your-sup',
    title: 'Como escolher o teu SUP',
    intro: [
      'A escolha da tua primeira prancha de SUP insuflável depende do tamanho, da largura, da construção e do conteúdo da embalagem. Eis o que importa, em palavras simples.',
    ],
    sections: [
      {
        title: 'Comprimento e volume',
        body: 'As pranchas mais compridas (11–12 ft) deslizam mais em cada pagaiada e mantêm melhor o rumo — ideais para passeios e pagaiadas de longa distância. As pranchas mais curtas viram com mais facilidade. Para a maioria dos praticantes, uma prancha all-round de 10\'6"–11\'0" é o melhor compromisso.',
      },
      {
        title: 'Largura e estabilidade',
        body: 'A largura determina a estabilidade mais do que qualquer outro fator. Um deck de 32 polegadas é tolerante para principiantes e suficientemente estável para ioga; as pranchas de 30 polegadas ajustam-se a pagaiadores mais leves ou mais experientes que procuram velocidade e agilidade.',
      },
      {
        title: 'Qualidade de construção',
        body: 'Procura um núcleo drop-stitch de PVC de grau militar com uma pressão nominal de pelo menos 15 PSI, uma laminação de PVC de dupla camada e fitas de borda reforçadas. São estes os elementos que determinam o quão rígida é a prancha e quanto dura com o uso diário.',
      },
      {
        title: 'O que deve estar incluído',
        body: 'Um pacote completo poupa dinheiro e chatices: prancha, pagaia ajustável em 3 peças, bomba de dupla ação com manómetro, leash em espiral, barbatanas, mochila de viagem e kit de reparação.',
      },
    ],
    faqs: [
      { q: 'De que tamanho deve ser uma prancha de SUP?', a: 'A maioria dos principiantes escolhe uma prancha all-round de cerca de 11\'0" × 32" × 6" — estável, versátil e fácil de transportar. Praticantes mais pesados ou quem aposta nas distâncias deve optar por um tamanho acima.' },
      { q: 'Um SUP insuflável é tão rígido como uma prancha rígida?', a: 'Um drop-stitch insuflável moderno a 15–20 PSI aproxima-se de uma prancha rígida de entrada em termos de rigidez — com a vantagem de caber numa mochila.' },
    ],
    related: [
      { label: 'As nossas plataformas de SUP', href: '/products' },
      { label: 'Insuflável vs prancha rígida', href: '/inflatable-vs-hardboard' },
      { label: 'Produção OEM', href: '/oem-manufacturing' },
    ],
  },
  {
    slug: 'beginner-guide',
    title: 'Guia de pagaiada para principiantes',
    intro: [
      'Tudo o que precisas para as tuas primeiras sessões na água: insuflar, o primeiro passo em pé, a pagaiada básica e como manteres-te em segurança enquanto ganhas confiança.',
    ],
    sections: [
      {
        title: 'Insuflar até ao valor nominal, não por sensação',
        body: 'Enche até à pressão indicada (normalmente 15 PSI) usando o manómetro da tua bomba. Uma prancha a 10 PSI parece bem na relva, mas deforma-se bastante na água. Verifica a pressão em dias quentes — o sol aquece o ar no interior e faz subir a pressão.',
      },
      {
        title: 'Os primeiros passos na prancha',
        body: 'Começa na praia ou num acesso de água pouco profunda: primeiro de joelhos, depois em pé, um pé de cada vez, sobre a linha central. Mantém os pés à largura dos ombros, os joelhos soltos e o olhar no horizonte — a tua prancha segue os teus olhos.',
      },
      {
        title: 'A pagaiada básica',
        body: 'Estica a pagaia bem para a frente, mergulha a lâmina por completo e puxa ao longo da prancha rodando o tronco. Muda de lado a cada poucas pagaiadas para seguires em frente; para virar bastam duas ou três pagaiadas largas de um lado.',
      },
      {
        title: 'Pratica primeiro a cair',
        body: 'Cair à água faz parte da aprendizagem. Pratica a subida em águas baixas: nada até à pega central, empurra as pernas para a superfície e puxa-te para cima da prancha num único movimento.',
      },
    ],
    faqs: [
      { q: 'Quanto tempo demora a aprender SUP?', a: 'A maioria das pessoas consegue pagaiar confortavelmente em águas calmas já na primeira sessão de uma hora. A segurança nas viragens, com vento e nas distâncias cresce ao longo de algumas sessões.' },
      { q: 'Preciso de estar em forma?', a: 'Não — o SUP é bastante acessível. O equilíbrio, a força do core e a resistência desenvolvem-se de forma natural com a pagaiada regular.' },
    ],
  },
  {
    slug: 'inflatable-vs-hard',
    title: 'Insuflável vs prancha rígida',
    intro: [
      'As duas famílias de construção ganham cada uma em cenários diferentes. Eis a comparação honesta para pagaiadores recreativos, clubes e operadores de aluguer.',
    ],
    sections: [
      {
        title: 'Portabilidade e armazenamento',
        body: 'As pranchas insufláveis dobram-se numa mochila que cabe na bagageira, na autocaravana ou no armário de casa — e são a escolha padrão para viagens. As pranchas rígidas exigem suportes de tejadilho, espaço de armazenamento e um cuidado maior.',
      },
      {
        title: 'Rigidez e desempenho',
        body: 'As pranchas rígidas premium são mais rígidas e reagem de forma mais direta em níveis de desempenho elevados. A velocidades recreativas, um drop-stitch insuflável bem construído a 15–20 PSI oferece um desempenho comparável — a uma fração dos custos de armazenamento.',
      },
      {
        title: 'Durabilidade',
        body: 'As pranchas insufláveis de PVC aguentam arranhões de pontão e impactos na margem que partiriam um casco rígido — uma razão central para as frotas de aluguer e os resorts escolherem insufláveis para o uso diário dos hóspedes.',
      },
      {
        title: 'Custo total de propriedade',
        body: 'As pranchas insufláveis custam menos em envio, armazenamento e manutenção e sobrevivem a um tratamento mais rude. Para a maioria dos utilizadores e frotas, uma prancha insuflável é a melhor relação qualidade-preço global.',
      },
    ],
    faqs: [
      { q: 'Qual é a melhor para principiantes?', a: 'As pranchas insufláveis — estáveis, tolerantes, fáceis de armazenar e suficientemente duráveis para os arranhões que os principiantes causam.' },
      { q: 'Um SUP insuflável pode ser tão rápido como uma prancha rígida?', a: 'A velocidades recreativas a diferença é mínima. As pranchas rígidas ganham claramente apenas em competição e em cenários de alto desempenho.' },
    ],
  },
  {
    slug: 'safety-tips',
    title: 'Conselhos de segurança na água',
    intro: [
      'Uma sessão segura é uma sessão agradável. Estas bases valem igualmente para lagos, rios e pagaiada costeira.',
    ],
    sections: [
      {
        title: 'Verifica o vento e a previsão',
        body: 'O vento de terra é a armadilha clássica do SUP: empurra-te para longe da margem mais depressa do que consegues pagaiar para voltar. Verifica a previsão e, em caso de dúvida, fica em águas abrigadas.',
      },
      {
        title: 'Usa sempre o leash',
        body: 'Um leash em espiral mantém a tua prancha ao alcance da mão em caso de queda — a prancha é o teu dispositivo de flutuação. Escolhe um leash adequado às tuas condições: em espiral para águas calmas, reto para o surf.',
      },
      {
        title: 'PFD e segurança pessoal',
        body: 'Usa um dispositivo de flutuação quando as condições o exigirem ou as normas o impuserem. Leva um apito, comunica a alguém o teu percurso e a hora prevista de regresso e considera levar um telemóvel numa capa estanque.',
      },
      {
        title: 'Conhece os teus limites',
        body: 'Ganha experiência em águas calmas antes de enfrentar o vento ou a corrente. Respeita a água fria — rouba forças rapidamente. E nunca pagaias sozinho em zonas remotas ou em águas abertas sem um plano.',
      },
    ],
    faqs: [
      { q: 'Preciso de usar um colete salva-vidas num SUP?', a: 'Os requisitos variam de país para país e de via navegável para via navegável. Mesmo onde é opcional, o leash mais um dispositivo de flutuação são a base responsável, e as crianças devem usar sempre um colete salva-vidas bem ajustado.' },
      { q: 'É seguro praticar SUP num lago?', a: 'Sim — os lagos calmos são ideais para aprender. Verifica a direção do vento, mantém-te visível para o tráfego de barcos e evita rotas de navegação muito movimentadas.' },
    ],
    related: [
      { label: 'Equipamento de segurança nas nossas plataformas', href: '/products' },
      { label: 'Controlo de qualidade na produção', href: '/quality' },
      { label: 'Escolhe a tua primeira prancha', href: '/guides/how-to-choose-your-sup' },
    ],
  },
  {
    slug: 'choosing-a-sup-oem-factory',
    title: 'Como escolher uma fábrica OEM de SUP personalizados',
    intro: [
      'Comprar paddleboards insufláveis com a tua própria marca resume-se a uma decisão: a qual fábrica confiar o teu primeiro lote. Eis como avaliar um fabricante de SUP personalizados antes de emitir uma encomenda (PO).',
    ],
    sections: [
      {
        title: 'Começa com uma encomenda de teste, não com uma discussão sobre MOQ',
        body: 'Uma fábrica que só fala de quantidades mínimas é sinal de uma secretária comercial, não de uma verdadeira empresa. As verdadeiras fábricas oferecem mínimos escalonados — co-branding de 5–10 unidades, lotes piloto de 20–50 unidades, produção padrão de volume de 90–100+ por rolo de 150 m e projetos com molde totalmente personalizado no escalão de volume. Encomenda primeiro um lote pequeno: testa a comunicação, a disciplina das especificações e a qualidade das amostras sem arriscar todo o teu lançamento.',
      },
      {
        title: 'Verifica o que é verdadeiramente interno',
        body: 'A produção de um SUP drop-stitch compreende quatro fases centrais: laminação do material, soldadura, impressão e montagem. Uma verdadeira fábrica executa-as todas debaixo do mesmo teto e permite-te visitar o departamento. Se o vendedor não consegue mostrar-te uma linha de produção, provavelmente estás a comprar através de um intermediário sem controlo sobre a qualidade ou os prazos.',
      },
      {
        title: 'As amostras devem corresponder à produção em série',
        body: 'Uma amostra acabada à mão é fácil; uma produção em série consistente é difícil. Pergunta como a fábrica controla a repetibilidade: protocolos dos lotes de material, parâmetros de soldadura e uma checklist de QC aplicada a cada prancha individual — não apenas àquela que aprovas.',
      },
      {
        title: 'Conhece os teus custos antes do PO',
        body: 'Obtém por escrito o quadro completo de custos: preço unitário por quantidade, custos de afinação ou molde se quiseres uma nova forma, preparação de artwork e impressão, e embalagem.',
      },
      {
        title: 'Pede uma inspeção de terceiros',
        body: 'As fábricas OEM de SUP fiáveis acolhem bem as inspeções pré-envio — muitas marcas reservam uma visita de QC independente para cada contentor. Confirma que a fábrica pode organizar inspeções de amostras e de produções e que as unidades rejeitadas (por exemplo pranchas que perdem mais de 5% de pressão) sejam excluídas do lote.',
      },
      {
        title: 'Prazos que se cumprem',
        body: 'Para SUP insufláveis, conta com amostras em 7–12 dias e produção em série em 25–35 dias após PO confirmada e sinal, mais o tempo de afinação quando encomendares um molde novo. Uma fábrica que anuncia prazos bem mais curtos do que todos os outros cita de um catálogo, não de um planeamento.',
      },
    ],
    faqs: [
      { q: 'Qual é a quantidade mínima de encomenda para pranchas de SUP personalizadas?', a: 'Os mínimos escalonados são o padrão: 1–2 unidades para amostras, 5–10 unidades para co-branding, 20–50 unidades para um lote piloto e 90–100+ unidades por rolo de 150 m para volume padrão; os projetos com molde totalmente personalizado estão no escalão de volume.' },
      { q: 'Posso ver uma amostra antes da produção em série?', a: 'Sim — as amostras ficam prontas em 7–12 dias. A maioria das fábricas credita os custos de amostra e molde na tua primeira encomenda de produção, depois de confirmada.' },
      { q: 'Como verifico que uma fábrica de SUP é real?', a: 'Pede uma visita por vídeo em direto ao departamento de produção, verifica o endereço de uma fábrica operacional em Qingdao ou noutro polo industrial e pede documentação de encomendas de exportação anteriores. As encomendas de teste são a prova definitiva.' },
      { q: 'O que deve incluir um orçamento de uma fábrica de SUP?', a: 'Preço unitário por prancha, custos de afinação ou molde, preparação do artwork, embalagem, condições de QC e inspeção e condições de pagamento.' },
    ],
    related: [
      { label: 'A nossa produção OEM / ODM', href: '/oem-manufacturing' },
      { label: 'Processo de desenvolvimento de produto de SUP', href: '/product-development' },
      { label: 'Capacidade e fábrica', href: '/factory' },
      { label: 'Como controlamos a qualidade — 7 portões de inspeção', href: '/quality' },
      { label: 'Guia de MOQ e branding flexível (PDF)', href: '/oem-moq-guide' },
      { label: 'Confiança e garantia da fábrica', href: '/oem-trust-assurance' },
      { label: 'Inicia o teu projeto de SUP personalizado', href: '/contact' },
    ],
  },
  {
    slug: 'private-label-sup-guide',
    title: 'SUP de marca própria: o que recebes realmente de uma fábrica',
    intro: [
      'O private label é a forma mais rápida de lançar uma marca de SUP: o teu logo numa plataforma comprovada, sem os custos e riscos de desenhar uma prancha de raiz. Eis o que inclui realmente a colaboração com um fabricante de SUP personalizados.',
    ],
    sections: [
      {
        title: 'Private label significa plataformas comprovadas',
        body: 'Parte-se de plataformas que a fábrica já constrói e testa — all-round, touring, ioga, corrida e outras. A fábrica personaliza branding, grafismos e acabamentos, mantendo os custos baixos e os prazos curtos. Os mínimos são escalonados: co-branding de 5–10 unidades, lotes piloto de 20–50 unidades e 90–100+ unidades por rolo de 150 m para o volume padrão de private label.',
      },
      {
        title: 'O branding vai além do logo',
        body: 'O private label inclui a impressão do teu logo (digital ou serigrafia), esquemas de cor personalizados, deck pads de EVA cortados à medida com o teu logo, branding dos acessórios (pagaia, bomba, leash), design da caixa de retalho e até expositores de ponto de venda. Envia as tuas gráficas e a fábrica prepara uma prova visual antes da produção.',
      },
      {
        title: 'O que a fábrica trata por ti',
        body: 'Uma fábrica de SUP full-service trata da preparação do artwork, da obtenção de materiais, da produção de amostras, da checklist de QC de montagem com 100 pontos, dos testes de pressão e da documentação de exportação (fatura, packing list, certificado de origem). Tu verificas as provas e aprovas a amostra — a fábrica faz todo o resto.',
      },
      {
        title: 'O que é teu: marca, mercado, cliente',
        body: 'Num acordo de private label a fábrica constrói as pranchas e a marca é tua. Os fabricantes fiáveis não vendem as tábuas com o próprio nome no teu mercado nem cedem o teu design personalizado a outros. Pede exclusividade de mercado no teu orçamento.',
      },
      {
        title: 'Custos: amostra, molde, preparação do artwork',
        body: 'Conta com três tipos de custos: despesas de amostra (7–12 dias de produção), custos de afinação quando for preciso um molde novo (mínimo no escalão de volume) e preparação do artwork para impressão. A maioria das fábricas credita os custos de amostra e molde na tua primeira encomenda de produção.',
      },
      {
        title: 'Da PO ao lote acabado',
        body: 'Uma produção típica de private label: um sinal de 30% começa a produção, a produção em série fica pronta em 25–35 dias após PO confirmada e sinal e o saldo é compensado com o lote aprovado. Inclui o lote completo na tua primeira encomenda.',
      },
    ],
    faqs: [
      { q: 'Qual é a quantidade mínima de encomenda para pranchas de SUP de marca própria?', a: 'O co-branding começa nas 5–10 unidades, os lotes piloto nas 20–50 unidades e o volume padrão de private label nas 90–100+ unidades por rolo de 150 m; os projetos com molde totalmente personalizado estão no escalão de volume.' },
      { q: 'Posso enviar o meu logo e as minhas gráficas?', a: 'Sim — envia o teu logo e as tuas gráficas; a fábrica prepara uma prova visual antes da produção, para aprovares cores, posicionamento e acabamento.' },
      { q: 'O meu design de SUP personalizado é exclusivo da minha marca?', a: 'Sim, nas condições padrão de private label. Pede uma cláusula de exclusividade no teu contrato de compra; fábricas como a nossa não revendem o teu design com a tua marca.' },
      { q: 'Quanto tempo demora uma encomenda de SUP de marca própria?', a: 'As amostras são enviadas em 7–12 dias; a produção em série fica pronta em 25–35 dias após PO confirmada e sinal. Conta com 8–12 semanas para o primeiro lote completo.' },
    ],
    related: [
      { label: 'Soluções de SUP de marca própria', href: '/solutions/private-label-sup' },
      { label: 'Plataformas comprovadas', href: '/products/all-around' },
      { label: 'Produção OEM / ODM', href: '/oem-manufacturing' },
      { label: 'Inicia o teu projeto de SUP personalizado', href: '/contact' },
    ],
  },
  {
    slug: 'sup-fleet-guide',
    title: 'Comprar frotas de SUP para aluguer, resorts e clubes',
    intro: [
      'Quem compra frotas precisa de respostas diferentes dos utilizadores finais: durabilidade por sessão, peças de reposição padronizadas, quantidades ao nível do volume e um fornecedor que entregue temporada após temporada. Eis o que planear antes de encomendar a tua primeira frota.',
    ],
    sections: [
      {
        title: 'Padroniza numa ou duas especificações',
        body: 'O negócio das frotas assenta na padronização: um tamanho de prancha (normalmente 10\'6"–11\'0" × 32") para a maioria dos hóspedes, um pacote robusto, um kit de peças de reposição. Simplifica reparações, formação do pessoal, armazenamento e reencomendas. Resiste à tentação de comprar dez modelos diferentes.',
      },
      {
        title: 'As pranchas de alto uso são um produto diferente',
        body: 'Uma prancha de aluguer aguenta dezenas de sessões por temporada. Especifica camadas de PVC mais grossas, fitas de borda reforçadas e acessórios mais robustos do que as pranchas de retalho. Pergunta à fábrica como a especificação de frota difere da versão de consumo — as verdadeiras fábricas têm ambas.',
      },
      {
        title: 'Adequa as quantidades à procura',
        body: 'Calcula o tamanho da tua frota com base na rotação diária e na duração da temporada: 20–30 pranchas servem um pequeno ponto de venda, 100+ um resort ou clube muito frequentado. Pede à fábrica uma recomendação de quantidades adequada ao teu modelo de procura.',
      },
      {
        title: 'Encomenda as peças de reposição com a frota',
        body: 'Encomenda válvulas sobresselentes, kits de reparação, bombas, leashes e pagaias na mesma PO — custam pouco por unidade agora e são difíceis de encontrar a meio da temporada. Pede à fábrica uma quota de peças recomendada (normalmente 5–10% do tamanho da frota para consumíveis).',
      },
      {
        title: 'Encomenda para a temporada, não durante',
        body: 'A produção demora 25–35 dias após PO confirmada e sinal. Para teres as pranchas na praia na primavera, confirma as encomendas no fim do outono, para que a produção chegue antes da temporada.',
      },
      {
        title: 'Marca a frota para o valor de revenda',
        body: 'As pranchas de frota podem levar o teu logo, um sistema de numeração de aluguer e um código de cor por tamanho. Os logos em serigrafia em produções de 200+ unidades são económicos, e uma frota com marca funciona também como marketing na água.',
      },
    ],
    faqs: [
      { q: 'Qual é o melhor SUP para uma frota de aluguer?', a: 'Uma prancha all-round de 10\'6"–11\'0" × 32" com construção reforçada é o padrão do setor — estável para principiantes, durável para o uso diário e fácil de manter.' },
      { q: 'De quantas pranchas precisa um negócio de aluguer?', a: 'Conta com 20–30 pranchas para um pequeno ponto de venda, escalando com a rotação: 100+ unidades para resorts e clubes muito frequentados. As peças de reposição devem corresponder a 5–10% do tamanho da frota.' },
      { q: 'As pranchas da frota podem ter o nosso logo?', a: 'Sim — logos em serigrafia, numeração de aluguer e decks com códigos de cor são personalizações padrão, particularmente económicas a partir de 200 unidades.' },
      { q: 'Quanto tempo demora uma encomenda de frota?', a: 'Amostras em 7–12 dias, produção em 25–35 dias após PO confirmada e sinal — por isso encomenda as frotas bem antes do início da temporada.' },
    ],
    related: [
      { label: 'Soluções para resorts e clubes', href: '/solutions/resort-sup' },
      { label: 'Estudo de caso: frota de aluguer em vários locais', href: '/projects/rental-fleet-multi-site' },
      { label: 'Plataformas para frotas', href: '/products/all-around' },
      { label: 'Fala com um especialista de projeto', href: '/contact' },
    ],
  },
]

export const GUIDES_NL: Guide[] = [
  {
    slug: 'how-to-choose-your-sup',
    title: 'Hoe kies je jouw SUP',
    intro: [
      'De keuze van je eerste opblaasbare SUP-plank hangt af van de grootte, de breedte, de constructie en de inhoud van de verpakking. Dit is wat ertoe doet, in eenvoudige woorden.',
    ],
    sections: [
      {
        title: 'Lengte en volume',
        body: 'Langere planken (11–12 ft) glijden verder bij elke peddelslag en houden de koers beter vast — ideaal voor tochten en langere peddeltrips. Kortere planken zijn wendbaarder. Voor de meeste gebruikers is een allround-plank van 10\'6"–11\'0" het beste compromis.',
      },
      {
        title: 'Breedte en stabiliteit',
        body: 'De breedte bepaalt de stabiliteit meer dan welke andere factor dan ook. Een dek van 32 inch is vergevingsgezind voor beginners en stabiel genoeg voor yoga; planken van 30 inch passen bij lichtere of meer ervaren peddelaars die snelheid en wendbaarheid zoeken.',
      },
      {
        title: 'Constructiekwaliteit',
        body: 'Zoek een drop-stitch kern van militair PVC met een nominale druk van minimaal 15 PSI, een dubbellaagse PVC-laminateerlaag en verstevigde randbanden. Dit zijn de elementen die bepalen hoe stijf de plank is en hoe lang hij meegaat bij dagelijks gebruik.',
      },
      {
        title: 'Wat er in de set zit',
        body: 'Een complete set bespaart geld en gedoe: plank, verstelbare peddel in 3 delen, dubbelwerkende pomp met manometer, spiraalleash, vinnen, reistas en reparatieset.',
      },
    ],
    faqs: [
      { q: 'Welke maat moet een SUP-plank hebben?', a: 'De meeste beginners kiezen een allround-plank van ongeveer 11\'0" × 32" × 6" — stabiel, veelzijdig en makkelijk te vervoeren. Zwaardere gebruikers of wie zich richt op afstand, kiest beter een maat groter.' },
      { q: 'Is een opblaasbare SUP even stijf als een hardboard?', a: 'Een moderne opblaasbare drop-stitch op 15–20 PSI benadert qua stijfheid een instap-hardboard — met als voordeel dat hij in een tas past.' },
    ],
    related: [
      { label: 'Onze SUP-platforms', href: '/products' },
      { label: 'Opblaasbaar vs. hardboard', href: '/inflatable-vs-hardboard' },
      { label: 'OEM-productie', href: '/oem-manufacturing' },
    ],
  },
  {
    slug: 'beginner-guide',
    title: 'Peddelgids voor beginners',
    intro: [
      'Alles wat je nodig hebt voor je eerste sessies op het water: oppompen, de eerste keer rechtop staan, de basispeddelslag en hoe je veilig blijft terwijl je vertrouwen opbouwt.',
    ],
    sections: [
      {
        title: 'Pomp tot de opgegeven druk, niet op gevoel',
        body: 'Pomp tot de voorgeschreven druk (meestal 15 PSI) met de manometer van je pomp. Een plank op 10 PSI lijkt prima op het gras, maar zakt flink door in het water. Controleer de druk op warme dagen — de zon warmt de lucht binnenin op en laat de druk stijgen.',
      },
      {
        title: 'De eerste stappen op de plank',
        body: 'Begin op het strand of bij een ondiepe instapplaats: eerst op je knieën, daarna rechtop, één been tegelijk, op de hartlijn. Houd je voeten op schouderbreedte, je knieën ontspannen en je blik op de horizon — je plank volgt je ogen.',
      },
      {
        title: 'De basispeddelslag',
        body: 'Reik de peddel ver naar voren, steek het blad volledig in het water en trek langs de plank terwijl je je romp meedraait. Wissel om de paar slagen van kant om recht vooruit te blijven; om te draaien zijn twee tot drie brede slagen aan één kant genoeg.',
      },
      {
        title: 'Oefen eerst met vallen',
        body: 'In het water vallen hoort bij het leerproces. Oefen het weer opklimmen in ondiep water: zwem naar het handvat in het midden, duw je benen naar het oppervlak en trek jezelf in één beweging terug op de plank.',
      },
    ],
    faqs: [
      { q: 'Hoe lang duurt het om SUP te leren?', a: 'De meeste mensen kunnen al in hun eerste sessie van een uur comfortabel peddelen op kalmpjes water. Wendbaarheid, varen in de wind en over afstand verbeteren in de loop van een paar sessies.' },
      { q: 'Moet ik fit zijn?', a: 'Nee — SUP is goed toegankelijk. Balans, core-kracht en uithoudingsvermogen ontwikkelen zich vanzelf door regelmatig te peddelen.' },
    ],
  },
  {
    slug: 'inflatable-vs-hard',
    title: 'Opblaasbaar vs. hardboard',
    intro: [
      'Beide constructiefamilies winnen elk in andere scenario\'s. Dit is de eerlijke vergelijking voor recreatieve peddelaars, clubs en verhuurders.',
    ],
    sections: [
      {
        title: 'Draagbaarheid en opslag',
        body: 'Opblaasbare planken passen opgevouwen in een tas die in de kofferbak, de caravan of de huiskast past — en zijn de standaardkeuze voor op reis. Hardboards vragen dakdragers, opbergruimte en meer zorg.',
      },
      {
        title: 'Stijfheid en prestaties',
        body: 'Premium hardboards zijn stijver en reageren directer op hoog prestatieniveau. Bij recreatieve snelheid biedt een goed gebouwde opblaasbare drop-stitch op 15–20 PSI vergelijkbare prestaties — tegen een fractie van de opslagkosten.',
      },
      {
        title: 'Duurzaamheid',
        body: 'Opblaasbare PVC-planken verdragen krassen van steigers en stoten aan de oever waar een hardboard zou breken — een belangrijke reden waarom verhuurvloten en resorts voor opblaasbaar kiezen voor dagelijks gastgebruik.',
      },
      {
        title: 'Totale eigendomskosten',
        body: 'Opblaasbare planken kosten minder aan verzending, opslag en onderhoud en doorstaan een ruwere behandeling. Voor de meeste gebruikers en vloten is een opblaasbare plank over het geheel de beste prijs-kwaliteitverhouding.',
      },
    ],
    faqs: [
      { q: 'Welke is het beste voor beginners?', a: 'Opblaasbare planken — stabiel, vergevingsgezind, makkelijk op te bergen en duurzaam genoeg voor de krassen die beginners veroorzaken.' },
      { q: 'Kan een opblaasbare SUP net zo snel zijn als een hardboard?', a: 'Bij recreatieve snelheid is het verschil minimaal. Hardboards winnen pas duidelijk bij wedstrijden en in high-performance scenario\'s.' },
    ],
  },
  {
    slug: 'safety-tips',
    title: 'Veiligheidstips op het water',
    intro: [
      'Een veilige sessie is een leuke sessie. Deze basisregels gelden evenzeer voor meren, rivieren en kustpeddelen.',
    ],
    sections: [
      {
        title: 'Controleer de wind en de weersverwachting',
        body: 'Landwind is de klassieke SUP-valkuil: hij drijft je sneller van de oever af dan je kunt terugpeddelen. Controleer de weersverwachting en blijf bij twijfel in beschut water.',
      },
      {
        title: 'Gebruik altijd de leash',
        body: 'Een spiraalleash houdt je plank binnen handbereik als je eraf valt — de plank is je drijfmiddel. Kies een leash die past bij de omstandigheden: spiraal voor kalmpjes water, recht voor surfen.',
      },
      {
        title: 'Drijfmiddel en persoonlijke veiligheid',
        body: 'Draag een drijfmiddel wanneer de omstandigheden of de regels dat vereisen. Neem een fluitje mee, laat iemand je route en verwachte terugkomsttijd weten en overweeg een mobiele telefoon in een waterdichte hoes.',
      },
      {
        title: 'Ken je grenzen',
        body: 'Bouw ervaring op in kalmpjes water voordat je wind of stroming aangaat. Respecteer koud water — het kost je snel kracht. En peddel nooit alleen in afgelegen gebieden of open water zonder plan.',
      },
    ],
    faqs: [
      { q: 'Moet ik op een SUP een reddingsvest dragen?', a: 'De vereisten verschillen per land en per vaarwater. Zelfs waar het optioneel is, vormen leash plus drijfmiddel de verantwoorde basis, en kinderen dragen altijd een goed passend reddingsvest.' },
      { q: 'Is het veilig om op een meer te suppen?', a: 'Ja — rustige meren zijn ideaal om te leren. Controleer de windrichting, blijf zichtbaar voor het bootverkeer en vermijd drukke vaarroutes.' },
    ],
    related: [
      { label: 'Veiligheidsuitrusting op onze platforms', href: '/products' },
      { label: 'Kwaliteitscontrole in de productie', href: '/quality' },
      { label: 'Kies je eerste plank', href: '/guides/how-to-choose-your-sup' },
    ],
  },
  {
    slug: 'choosing-a-sup-oem-factory',
    title: 'Zo kies je een OEM-fabriek voor op maat gemaakte SUPs',
    intro: [
      'Het kopen van opblaasbare paddleboards onder je eigen merk draait om één beslissing: aan welke fabriek vertrouw je je eerste partij toe? Zo beoordeel je een fabrikant van op maat gemaakte SUPs voordat je een bestelling (PO) plaatst.',
    ],
    sections: [
      {
        title: 'Begin met een proefbestelling, niet met een discussie over MOQ',
        body: 'Een fabriek die alleen over minimumhoeveelheden praat, verraadt een verkoopkantoor, geen echte onderneming. Echte fabrieken werken met gefaseerde minima — co-branding vanaf 5–10 stuks, proefpartijen van 20–50 stuks, standaard productievolumes van 90–100+ per rol van 150 m en projecten met een volledig eigen mal op volumeschaal. Begin met een kleine partij: test de communicatie, de discipline rond specificaties en de kwaliteit van de monsters zonder je hele lancering op het spel te zetten.',
      },
      {
        title: 'Controleer wat echt intern gebeurt',
        body: 'De productie van een drop-stitch SUP omvat vier kernfasen: het lamineren van het materiaal, lassen, printen en de eindmontage. Een echte fabriek voert alles uit onder één dak en laat je de afdeling bezoeken. Als de verkoper je geen productielijn kan laten zien, koop je waarschijnlijk via een tussenhandelaar zonder controle over kwaliteit of levertijden.',
      },
      {
        title: 'Monsters moeten overeenkomen met de serieproductie',
        body: 'Een met de hand afgewerkt monster is makkelijk; een consistente serieproductie is moeilijk. Vraag hoe de fabriek de herhaalbaarheid bewaakt: protocollen voor materiaalpartijen, lasparameters en een QC-checklist die op elke individuele plank wordt toegepast — niet alleen op degene die jij goedkeurt.',
      },
      {
        title: 'Ken je kosten vóór de PO',
        body: 'Vraag het volledige kostenoverzicht op schrift: eenheidsprijs per hoeveelheid, tooling- of matrijskosten als je een nieuwe vorm wilt, voorbereiding van het artwork en druk, en de verpakking.',
      },
      {
        title: 'Vraag om een onafhankelijke inspectie',
        body: 'Betrouwbare SUP-OEM-fabrieken verwelkomen inspecties vóór verzending — veel merken plannen voor elke container een onafhankelijke QC-controle. Bevestig dat de fabriek monster- en productie-inspecties kan regelen en dat afgekeurde exemplaren (bijvoorbeeld planken die meer dan 5% druk verliezen) uit de partij worden gehaald.',
      },
      {
        title: 'Levertijden die kloppen',
        body: 'Reken voor opblaasbare SUPs op monsters binnen 7–12 dagen en de serieproductie binnen 25–35 dagen na bevestigde PO en aanbetaling, plus de toolingtijd wanneer je een nieuwe mal bestelt. Een fabriek die veel kortere levertijden belooft dan alle anderen, citeert uit een catalogus, niet uit een planning.',
      },
    ],
    faqs: [
      { q: 'Wat is de minimale bestelhoeveelheid voor op maat gemaakte SUP-planken?', a: 'Gefaseerde minima zijn de norm: 1–2 stuks voor monsters, 5–10 stuks voor co-branding, 20–50 stuks voor een proefpartij en 90–100+ stuks per rol van 150 m voor standaard volumes; projecten met een volledig eigen mal vallen onder volumeschalen.' },
      { q: 'Kan ik een monster zien vóór de serieproductie?', a: 'Ja — monsters zijn binnen 7–12 dagen klaar. De meeste fabrieken verrekenen de monster- en matrijskosten met je eerste productiebestelling, nadat deze is bevestigd.' },
      { q: 'Hoe controleer ik of een SUP-fabriek echt is?', a: 'Vraag om een live-videobezoek aan de productieafdeling, controleer het adres van een operationele fabriek in Qingdao of een ander industrieel centrum en vraag om documentatie van eerdere exportbestellingen. Proefbestellingen zijn het definitieve bewijs.' },
      { q: 'Wat moet een offerte van een SUP-fabriek bevatten?', a: 'Eenheidsprijs per plank, tooling- of matrijskosten, voorbereiding van het artwork, verpakking, voorwaarden rond QC en inspectie en de betalingsvoorwaarden.' },
    ],
    related: [
      { label: 'Onze OEM/ODM-productie', href: '/oem-manufacturing' },
      { label: 'Het productontwikkelingsproces van SUP', href: '/product-development' },
      { label: 'Capaciteit en fabriek', href: '/factory' },
      { label: 'Hoe wij kwaliteit bewaken — 7 inspectiepoorten', href: '/quality' },
      { label: 'Handleiding MOQ en flexibele branding (PDF)', href: '/oem-moq-guide' },
      { label: 'Vertrouwen en garantie van de fabriek', href: '/oem-trust-assurance' },
      { label: 'Start jouw project voor een op maat gemaakte SUP', href: '/contact' },
    ],
  },
  {
    slug: 'private-label-sup-guide',
    title: 'Eigen-merk SUP: wat je echt van een fabriek krijgt',
    intro: [
      'Private label is de snelste manier om een SUP-merk te lanceren: je logo op een bewezen platform, zonder de kosten en risico\'s van het ontwerpen van een plank vanaf nul. Dit is wat samenwerken met een fabrikant van op maat gemaakte SUPs echt inhoudt.',
    ],
    sections: [
      {
        title: 'Private label betekent bewezen platforms',
        body: 'Je vertrekt van platforms die de fabriek al bouwt en test — allround, touring, yoga, race en meer. De fabriek personaliseert branding, graphics en afwerking, met lage kosten en korte levertijden. De minima zijn gefaseerd: co-branding vanaf 5–10 stuks, proefpartijen van 20–50 stuks en 90–100+ stuks per rol van 150 m voor het standaard private-label-volume.',
      },
      {
        title: 'Branding gaat verder dan het logo',
        body: 'Private label omvat het printen van je logo (digitaal of zeefdruk), gepersonaliseerde kleurstellingen, op maat gesneden EVA-deckpads met je logo, branding van accessoires (peddel, pomp, leash), het design van de verpakkingsdoos en zelfs displays voor het verkooppunt. Stuur je artwork op en de fabriek maakt vóór de productie een visueel bewijs.',
      },
      {
        title: 'Wat de fabriek voor jou regelt',
        body: 'Een full-service SUP-fabriek regelt de voorbereiding van het artwork, de inkoop van materialen, de productie van monsters, de montage-QC-checklist met 100 punten, de druktests en de exportdocumentatie (factuur, paklijst, oorsprongscertificaat). Jij controleert de proeven en keurt het monster goed — de fabriek doet al het andere.',
      },
      {
        title: 'Wat van jou is: merk, markt, klant',
        body: 'Bij een private-label-overeenkomst bouwt de fabriek de planken en is het merk van jou. Betrouwbare fabrikanten verkopen de planken niet onder eigen naam in jouw markt en geven jouw op maat gemaakte design ook niet door aan anderen. Vraag bij je offerte om marktexclusiviteit.',
      },
      {
        title: 'Kosten: monster, mal, voorbereiding van het artwork',
        body: 'Reken op drie soorten kosten: monsterkosten (7–12 dagen productietijd), toolingkosten wanneer een nieuwe mal nodig is (minimaal op volumeschalen) en de voorbereiding van het artwork voor de druk. De meeste fabrieken verrekenen de monster- en matrijskosten met je eerste productiebestelling.',
      },
      {
        title: 'Van PO tot afgewerkte partij',
        body: 'Een typisch private-label-traject: een aanbetaling van 30% start de productie, de serieproductie is klaar binnen 25–35 dagen na bevestigde PO en aanbetaling en het saldo wordt betaald tegen de goedgekeurde partij. Neem de volledige partij op in je eerste bestelling.',
      },
    ],
    faqs: [
      { q: 'Wat is de minimale bestelhoeveelheid voor eigen-merk SUP-planken?', a: 'Co-branding begint bij 5–10 stuks, proefpartijen bij 20–50 stuks en het standaard private-label-volume bij 90–100+ stuks per rol van 150 m; projecten met een volledig eigen mal vallen onder volumeschalen.' },
      { q: 'Kan ik mijn logo en artwork opsturen?', a: 'Ja — stuur je logo en artwork op; de fabriek maakt vóór de productie een visueel bewijs, zodat je kleuren, plaatsing en afwerking kunt goedkeuren.' },
      { q: 'Is mijn op maat gemaakte SUP-design exclusief voor mijn merk?', a: 'Ja, onder de standaardvoorwaarden van private label. Vraag om een exclusiviteitsclausule in je inkoopcontract; fabrieken zoals de onze verkopen jouw design niet door met jouw merk.' },
      { q: 'Hoe lang duurt een eigen-merk SUP-bestelling?', a: 'Monsters worden binnen 7–12 dagen verzonden; de serieproductie is klaar binnen 25–35 dagen na bevestigde PO en aanbetaling. Reken op 8–12 weken voor de eerste volledige partij.' },
    ],
    related: [
      { label: 'Eigen-merk SUP-oplossingen', href: '/solutions/private-label-sup' },
      { label: 'Bewezen platforms', href: '/products/all-around' },
      { label: 'OEM/ODM-productie', href: '/oem-manufacturing' },
      { label: 'Start jouw project voor een op maat gemaakte SUP', href: '/contact' },
    ],
  },
  {
    slug: 'sup-fleet-guide',
    title: 'SUP-vloten kopen voor verhuur, resorts en clubs',
    intro: [
      'Wie vloten koopt, heeft andere antwoorden nodig dan eindgebruikers: duurzaamheid per sessie, gestandaardiseerde reserveonderdelen, hoeveelheden op volumeschalen en een leverancier die seizoen na seizoen levert. Dit plan je vóórdat je je eerste vloot bestelt.',
    ],
    sections: [
      {
        title: 'Standaardiseer op één of twee specificaties',
        body: 'De vlootbusiness draait om standaardisatie: één plankmaat (meestal 10\'6"–11\'0" × 32") voor het grootste deel van je gasten, een robuuste uitvoering en een set reserveonderdelen. Dat vereenvoudigt reparaties, personeelstraining, opslag en nabestellingen. Weersta de verleiding om tien verschillende modellen te kopen.',
      },
      {
        title: 'Planken voor intensief gebruik zijn een ander product',
        body: 'Een verhuurplank doorstaat tientallen sessies per seizoen. Specificeer dikkere PVC-lagen, verstevigde randbanden en stevigere accessoires dan bij retailplanken. Vraag de fabriek hoe de vlootspecificatie verschilt van de consumentenversie — echte fabrieken hebben beide.',
      },
      {
        title: 'Stem de aantallen af op de vraag',
        body: 'Bereken de omvang van je vloot op basis van de dagelijkse omlooptijd en de lengte van het seizoen: 20–30 planken zijn voldoende voor een klein verkooppunt, 100+ voor een druk bezocht resort of club. Vraag de fabriek om een aanbeveling voor het aantal stuks die past bij jouw vraagmodel.',
      },
      {
        title: 'Bestel reserveonderdelen mee met de vloot',
        body: 'Bestel reserveventielen, reparatiesets, pompen, leashes en peddels mee in dezelfde PO — ze kosten nu weinig per stuk en zijn midden in het seizoen moeilijk te vinden. Vraag de fabriek om een aanbevolen voorraad onderdelen (meestal 5–10% van de vlootomvang voor verbruiksartikelen).',
      },
      {
        title: 'Bestel vóór het seizoen, niet er middenin',
        body: 'De productie duurt 25–35 dagen na bevestigde PO en aanbetaling. Om de planken in het voorjaar op het strand te hebben, bevestig je de bestellingen aan het einde van de herfst, zodat de productie vóór het seizoen aankomt.',
      },
      {
        title: 'Bemark je vloot voor de restwaarde',
        body: 'Vlootplanken kunnen je logo, een nummeringssysteem voor de verhuur en een kleurcode per maat dragen. Zeefdruklabels op series van 200+ stuks zijn goedkoop en een bemerkte vloot werkt ook als marketing op het water.',
      },
    ],
    faqs: [
      { q: 'Wat is de beste SUP voor een verhuurvloot?', a: 'Een allround-plank van 10\'6"–11\'0" × 32" met verstevigde constructie is de industriestandaard — stabiel voor beginners, duurzaam voor dagelijks gebruik en makkelijk te onderhouden.' },
      { q: 'Hoeveel planken heeft een verhuurbedrijf nodig?', a: 'Reken op 20–30 planken voor een klein verkooppunt, op te schalen met de omlooptijd: 100+ stuks voor druk bezochte resorts en clubs. De reserveonderdelen moeten 5–10% van de vlootomvang bedragen.' },
      { q: 'Mogen de vlootplanken ons logo dragen?', a: 'Ja — zeefdruklabels, verhuurnummers en decks met kleurcodes zijn standaard personalisaties, die bijzonder voordelig worden vanaf 200 stuks.' },
      { q: 'Hoe lang duurt een vlootbestelling?', a: 'Monsters binnen 7–12 dagen, productie binnen 25–35 dagen na bevestigde PO en aanbetaling — bestel je vloot daarom ruim vóór het begin van het seizoen.' },
    ],
    related: [
      { label: 'Oplossingen voor resorts en clubs', href: '/solutions/resort-sup' },
      { label: 'Case study: verhuurvloot op meerdere locaties', href: '/projects/rental-fleet-multi-site' },
      { label: 'Platforms voor vloten', href: '/products/all-around' },
      { label: 'Praat met een projectspecialist', href: '/contact' },
    ],
  },
]

const GUIDES_BY_LOCALE: Record<string, Guide[]> = { en: GUIDES, es: GUIDES_ES, fr: GUIDES_FR, de: GUIDES_DE, it: GUIDES_IT, pt: GUIDES_PT, nl: GUIDES_NL }

export function localizedGuides(locale: string): Guide[] {
  return GUIDES_BY_LOCALE[locale] ?? GUIDES
}

export function getGuide(path: string, locale?: string): Guide | undefined {
  const slug = path.split('/').filter(Boolean).pop()
  return localizedGuides(locale ?? 'en').find((g) => g.slug === slug) ?? GUIDES.find((g) => g.slug === slug)
}

export function getGuideBySlug(slug: string, locale?: string): Guide | undefined {
  return localizedGuides(locale ?? 'en').find((g) => g.slug === slug) ?? GUIDES.find((g) => g.slug === slug)
}

/** Localized card copy for the /knowledge hub (guide pages stay English). */
export interface GuideCard {
  slug: string
  title: string
  intro: string
}

export const GUIDE_CARDS: Record<string, GuideCard[]> = {
  en: GUIDES.map((g) => ({ slug: g.slug, title: g.title, intro: g.intro[0] })),
  es: [
    {
      slug: 'how-to-choose-your-sup',
      title: 'Cómo elegir tu SUP',
      intro:
        'Elegir tu primer SUP hinchable se resume a tamaño, ancho, construcción y qué incluye la caja. Aquí está lo que importa, en lenguaje claro.',
    },
    {
      slug: 'beginner-guide',
      title: 'Guía para empezar a remar',
      intro:
        'Todo lo que necesitas para tus primeras sesiones en el agua: inflado, la primera vez de pie, la remada básica y cómo mantenerte seguro.',
    },
    {
      slug: 'inflatable-vs-hard',
      title: 'Hinchable vs tabla rígida',
      intro:
        'Las dos familias de construcción ganan en escenarios distintos. Aquí tienes la comparación honesta para remeros, clubes y operadores de alquiler.',
    },
    {
      slug: 'safety-tips',
      title: 'Consejos de seguridad en el agua',
      intro:
        'Una sesión segura es una sesión divertida. Estos básicos valen para lagos, ríos y remo costero por igual.',
    },
    {
      slug: 'choosing-a-sup-oem-factory',
      title: 'Cómo elegir una fábrica OEM de SUP a medida',
      intro:
        'Cómo evaluar a un fabricante de SUP personalizados antes de enviar tu PO: pruebas, planta propia, muestras, costes e inspección.',
    },
    {
      slug: 'private-label-sup-guide',
      title: 'SUP de marca privada',
      intro:
        'Qué incluye de verdad un acuerdo de marca privada: plataformas probadas, branding completo, costes, exclusividad y plazos.',
    },
    {
      slug: 'sup-fleet-guide',
      title: 'Comprar flotas de SUP',
      intro:
        'Planificación de flotas para alquiler, resorts y clubes: especificación resistente, cantidades por contenedor, repuestos y estacionalidad.',
    },
  ],
  fr: [
    {
      slug: 'how-to-choose-your-sup',
      title: 'Comment choisir votre SUP',
      intro:
        'Choisir son premier SUP gonflable dépend de la taille de la planche, de sa largeur, de sa construction et de ce qui est inclus dans la boîte. Voici ce qui compte, en termes clairs.',
    },
    {
      slug: 'beginner-guide',
      title: 'Guide du débutant en paddle',
      intro:
        'Tout ce qu\'il faut pour vos premières sessions sur l\'eau : gonflage, première mise debout, coup de pagaie de base et sécurité.',
    },
    {
      slug: 'inflatable-vs-hard',
      title: 'SUP gonflable vs planche rigide',
      intro:
        'Les deux familles de construction l\'emportent chacune dans des scénarios différents. Voici la comparaison honnête pour les pratiquants récréatifs, les clubs et les opérateurs de location.',
    },
    {
      slug: 'safety-tips',
      title: 'Conseils de sécurité sur l\'eau',
      intro:
        'Une session sûre est une session agréable. Ces bases s\'appliquent à la navigation sur lacs, rivières et en milieu côtier.',
    },
    {
      slug: 'choosing-a-sup-oem-factory',
      title: 'Comment choisir une usine OEM de SUP sur mesure',
      intro:
        'Comment évaluer un fabricant de SUP personnalisés avant d\'envoyer votre PO : essai, production interne, échantillons, coûts et inspection.',
    },
    {
      slug: 'private-label-sup-guide',
      title: 'SUP en marque privée',
      intro:
        'Ce que comprend réellement un accord de marque privée : plateformes éprouvées, branding complet, coûts, exclusivité et délais.',
    },
    {
      slug: 'sup-fleet-guide',
      title: 'Acheter des flottes de SUP',
      intro:
        'Planification de flottes pour locations, resorts et clubs : spécification résistante, quantités par conteneur, pièces de rechange et saisonnalité.',
    },
  ],
  de: [
    {
      slug: 'how-to-choose-your-sup',
      title: 'So wählen Sie Ihr SUP',
      intro:
        'Die Wahl Ihres ersten aufblasbaren SUP hängt von Boardgröße, Breite, Konstruktion und Lieferumfang ab. Hier erfahren Sie, worauf es ankommt – in klarer Sprache.',
    },
    {
      slug: 'beginner-guide',
      title: 'Paddel-Guide für Anfänger',
      intro:
        'Alles, was Sie für Ihre ersten Sessions auf dem Wasser brauchen: Aufpumpen, das erste Aufstehen, der Grundschlag und Sicherheit.',
    },
    {
      slug: 'inflatable-vs-hard',
      title: 'Aufblasbar vs. Hartschalen-Board',
      intro:
        'Die beiden Konstruktionsfamilien gewinnen jeweils in unterschiedlichen Szenarien. Hier ist der ehrliche Vergleich für Freizeitpaddler, Clubs und Verleihbetreiber.',
    },
    {
      slug: 'safety-tips',
      title: 'Sicherheitstipps auf dem Wasser',
      intro:
        'Eine sichere Session ist eine schöne Session. Diese Grundlagen gelten für Seen, Flüsse und Küstenpaddeln gleichermaßen.',
    },
    {
      slug: 'choosing-a-sup-oem-factory',
      title: 'So wählen Sie eine kundenspezifische SUP-OEM-Fabrik',
      intro:
        'So bewerten Sie einen kundenspezifischen SUP-Hersteller, bevor Sie eine Bestellung aufgeben: Probebestellung, eigene Fertigung, Muster, Kosten und Inspektion.',
    },
    {
      slug: 'private-label-sup-guide',
      title: 'Private Label SUP',
      intro:
        'Was ein Private-Label-Vertrag tatsächlich beinhaltet: bewährte Plattformen, vollständiges Branding, Kosten, Exklusivität und Lieferzeiten.',
    },
    {
      slug: 'sup-fleet-guide',
      title: 'SUP-Flotten kaufen',
      intro:
        'Flottenplanung für Verleih, Resorts und Clubs: strapazierfähige Spezifikation, Mengen pro Container, Ersatzteile und Saisonalität.',
    },
  ],
  it: [
    {
      slug: 'how-to-choose-your-sup',
      title: 'Come scegliere il tuo SUP',
      intro:
        'La scelta del tuo primo SUP gonfiabile dipende da dimensioni, larghezza, costruzione e contenuto della confezione. Ecco cosa conta, in parole semplici.',
    },
    {
      slug: 'beginner-guide',
      title: 'Guida alla pagaiata per principianti',
      intro:
        'Tutto ciò che ti serve per le tue prime sessioni in acqua: gonfiaggio, il primo passo in piedi, la pagaiata di base e sicurezza.',
    },
    {
      slug: 'inflatable-vs-hard',
      title: 'Gonfiabile vs tavola rigida',
      intro:
        'Le due famiglie di costruzione vincono ognuna in scenari diversi. Ecco il confronto onesto per pagaiatori ricreativi, club e operatori di noleggio.',
    },
    {
      slug: 'safety-tips',
      title: 'Consigli di sicurezza in acqua',
      intro:
        'Una sessione sicura è una sessione piacevole. Queste basi valgono allo stesso modo per laghi, fiumi e pagaiata costiera.',
    },
    {
      slug: 'choosing-a-sup-oem-factory',
      title: 'Come scegliere una fabbrica OEM di SUP personalizzati',
      intro:
        'Come valutare un produttore di SUP personalizzati prima di emettere un ordine: ordine di prova, produzione interna, campioni, costi e ispezione.',
    },
    {
      slug: 'private-label-sup-guide',
      title: 'SUP a marchio privato',
      intro:
        'Cosa comprende realmente un accordo di private label: piattaforme collaudate, branding completo, costi, esclusiva e tempi di consegna.',
    },
    {
      slug: 'sup-fleet-guide',
      title: 'Acquistare flotte SUP',
      intro:
        'Pianificazione di flotte per noleggio, resort e club: specifica robusta, quantità per container, ricambi e stagionalità.',
    },
  ],
  pt: [
    {
      slug: 'how-to-choose-your-sup',
      title: 'Como escolher o teu SUP',
      intro:
        'A escolha da tua primeira prancha de SUP insuflável depende do tamanho, da largura, da construção e do conteúdo da embalagem. Eis o que importa, em palavras simples.',
    },
    {
      slug: 'beginner-guide',
      title: 'Guia de pagaiada para principiantes',
      intro:
        'Tudo o que precisas para as tuas primeiras sessões na água: insuflar, o primeiro passo em pé, a pagaiada básica e como manteres-te em segurança.',
    },
    {
      slug: 'inflatable-vs-hard',
      title: 'Insuflável vs prancha rígida',
      intro:
        'As duas famílias de construção ganham cada uma em cenários diferentes. Eis a comparação honesta para pagaiadores recreativos, clubes e operadores de aluguer.',
    },
    {
      slug: 'safety-tips',
      title: 'Conselhos de segurança na água',
      intro:
        'Uma sessão segura é uma sessão agradável. Estas bases valem igualmente para lagos, rios e pagaiada costeira.',
    },
    {
      slug: 'choosing-a-sup-oem-factory',
      title: 'Como escolher uma fábrica OEM de SUP personalizados',
      intro:
        'Como avaliar um fabricante de SUP personalizados antes de emitir uma encomenda: encomenda de teste, produção interna, amostras, custos e inspeção.',
    },
    {
      slug: 'private-label-sup-guide',
      title: 'SUP de marca própria',
      intro:
        'O que inclui realmente um acordo de private label: plataformas comprovadas, branding completo, custos, exclusividade e prazos.',
    },
    {
      slug: 'sup-fleet-guide',
      title: 'Comprar frotas de SUP',
      intro:
        'Planeamento de frotas para aluguer, resorts e clubes: especificação robusta, quantidades por contentor, peças de reposição e sazonalidade.',
    },
  ],
  nl: [
    {
      slug: 'how-to-choose-your-sup',
      title: 'Hoe kies je jouw SUP',
      intro:
        'De keuze van je eerste opblaasbare SUP-plank hangt af van de grootte, de breedte, de constructie en de inhoud van de verpakking. Dit is wat ertoe doet, in eenvoudige woorden.',
    },
    {
      slug: 'beginner-guide',
      title: 'Peddelgids voor beginners',
      intro:
        'Alles wat je nodig hebt voor je eerste sessies op het water: oppompen, de eerste keer rechtop staan, de basispeddelslag en hoe je veilig blijft.',
    },
    {
      slug: 'inflatable-vs-hard',
      title: 'Opblaasbaar vs. hardboard',
      intro:
        'Beide constructiefamilies winnen elk in andere scenario\'s. Dit is de eerlijke vergelijking voor recreatieve peddelaars, clubs en verhuurders.',
    },
    {
      slug: 'safety-tips',
      title: 'Veiligheidstips op het water',
      intro:
        'Een veilige sessie is een leuke sessie. Deze basisregels gelden evenzeer voor meren, rivieren en kustpeddelen.',
    },
    {
      slug: 'choosing-a-sup-oem-factory',
      title: 'Zo kies je een OEM-fabriek voor op maat gemaakte SUPs',
      intro:
        'Hoe je een fabrikant van op maat gemaakte SUPs beoordeelt vóór je bestelt: proefbestelling, eigen productie, monsters, kosten en inspectie.',
    },
    {
      slug: 'private-label-sup-guide',
      title: 'Eigen-merk SUP',
      intro:
        'Wat een private-label-overeenkomst echt inhoudt: bewezen platforms, complete branding, kosten, exclusiviteit en levertijden.',
    },
    {
      slug: 'sup-fleet-guide',
      title: 'SUP-vloten kopen',
      intro:
        'Vlootplanning voor verhuur, resorts en clubs: robuuste specificatie, aantallen per container, reserveonderdelen en seizoensgebondenheid.',
    },
  ],
}

export function guideCard(locale: 'en' | 'es' | string, slug: string): GuideCard | undefined {
  return (GUIDE_CARDS[locale] ?? GUIDE_CARDS.en).find((c) => c.slug === slug)
}
