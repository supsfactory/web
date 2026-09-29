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

/** Swedish variants of the guides (same slugs, translated copy). */
export const GUIDES_SV: Guide[] = [
  {
    slug: 'how-to-choose-your-sup',
    title: 'Så väljer du din SUP',
    intro: [
      'Ditt val av första uppblåsbara SUP handlar om brädans storlek, bredd, konstruktion och vad som ingår i paketet. Här är vad som spelar roll, i klartext.',
    ],
    sections: [
      {
        title: 'Längd och volym',
        body: 'Längre brädor (11–12 ft) glider längre per paddeltag och håller kursen bättre — idealiska för turer och långdistanspaddling. Kortare brädor svänger lättare. För de flesta förare är en allroundbräda på 10\'6"–11\'0" den bästa balansen.',
      },
      {
        title: 'Bredd och stabilitet',
        body: 'Bredden bestämmer stabiliteten mer än något annat. Ett 32-tums däck är förlåtande för nybörjare och stabilt nog för yoga; 30-tums brädor passar lättare eller mer erfarna paddlare som vill ha fart och smidighet.',
      },
      {
        title: 'Konstruktionskvalitet',
        body: 'Titta efter en drop-stitch-kärna i militärklassad PVC med ett nominellt tryck på minst 15 PSI, dubbelskiktad PVC-laminering och förstärkta railband. Det avgör hur styv brädan känns och hur länge den håller vid daglig användning.',
      },
      {
        title: 'Vad som bör ingå i paketet',
        body: 'Ett komplett paket sparar pengar och besvär: bräda, justerbar 3-delad paddel, dubbelverkande pump med manometer, spiralformad leash, fena/fenor, resebackpack och reparationssats.',
      },
    ],
    faqs: [
      { q: 'Vilken storlek på SUP-bräda behöver jag?', a: 'De flesta nybörjare väljer en allroundbräda på ungefär 11\'0" × 32" × 6" — stabil, mångsidig och lätt att transportera. Tyngre förare eller de som paddlar längre sträckor bör välja en storlek upp.' },
      { q: 'Är en uppblåsbar SUP lika styv som en hård bräda?', a: 'En modern uppblåsbar drop-stitch-bräda på 15–20 PSI närmar sig en hård nybörjarbräda i styvhet — med fördelen att den får plats i en ryggsäck.' },
    ],
    related: [
      { label: 'Utforska våra SUP-plattformar', href: '/products' },
      { label: 'Uppblåsbar vs. hård bräda', href: '/inflatable-vs-hardboard' },
      { label: 'OEM-tillverkning', href: '/oem-manufacturing' },
    ],
  },
  {
    slug: 'beginner-guide',
    title: 'Paddelguide för nybörjare',
    intro: [
      'Allt du behöver för dina första pass på vattnet: uppblåsning, första gången i stående, grundpaddeltaget och hur du håller dig trygg medan du bygger upp vana.',
    ],
    sections: [
      {
        title: 'Pumpa till angivet tryck, inte på känn',
        body: 'Pumpa till det angivna trycket (vanligtvis 15 PSI) med pumpens manometer. En bräda på 10 PSI känns bra på gräset men viker sig rejält på vattnet. Kontrollera trycket på varma dagar — solen värmer luften inuti och trycket stiger.',
      },
      {
        title: 'Första stegen på brädan',
        body: 'Lägg i från stranden eller vid ett grunt insteg: knästå först, ställ dig sedan upp en fot i taget över mittlinjen. Håll fötterna axelbrett, knäna mjuka och blicken mot horisonten — brädan följer din blick.',
      },
      {
        title: 'Grundpaddeltaget',
        body: 'Sträck dig framåt med paddeln, fäll ner bladet helt och dra det längs brädans sida samtidigt som du roterar bålen. Växla sida med några tag mellanrum för att paddla rakt; några breda tag på ena sidan svänger brädan.',
      },
      {
        title: 'Öva på att ramla i först',
        body: 'Att ramla i är en del av inlärningen. Öva på att komma upp igen på grunt vatten: simma till handtaget i mitten, sparka benen mot ytan och dra dig upp på brädan i en enda rörelse.',
      },
    ],
    faqs: [
      { q: 'Hur lång tid tar det att lära sig SUP?', a: 'De flesta kan paddla bekvämt på lugnt vatten redan under sitt första pass på en timme. Säkerhet i svängar, vind och distans byggs upp över några pass.' },
      { q: 'Behöver jag vara vältränad?', a: 'Nej — SUP är mycket tillgängligt. Balans, bålstyrka och flås byggs naturligt av regelbunden paddling.' },
    ],
  },
  {
    slug: 'inflatable-vs-hard',
    title: 'Uppblåsbar vs. hård bräda',
    intro: [
      'De två konstruktionsfamiljerna vinner i olika scenarier. Här är den ärliga jämförelsen för fritidspaddlare, klubbar och uthyrningsverksamheter.',
    ],
    sections: [
      {
        title: 'Bärbarhet och förvaring',
        body: 'Uppblåsbara brädor viks ihop till en ryggsäck som får plats i bilbagaget, husvagnen eller garderoben — och är standardvalet för resor. Hårda brädor kräver takräcken, förvaringsutrymme och varsammare hantering.',
      },
      {
        title: 'Styvhet och prestanda',
        body: 'Premium-hårda brädor är styvare och svarar bättre på hög prestandanivå. Vid fritidstempo presterar en välbyggd uppblåsbar drop-stitch-bräda på 15–20 PSI jämförbart — för en bråkdel av förvaringskostnaden.',
      },
      {
        title: 'Hållbarhet',
        body: 'Uppblåsbara PVC-brädor tål skrap mot bryggor och stötar mot stranden som skulle knäcka ett hårt skal — en viktig anledning till att uthyrningsflottor och resorter väljer uppblåsbart för daglig gästanvändning.',
      },
      {
        title: 'Total ägandekostnad',
        body: 'Uppblåsbara brädor kostar mindre att frakta, förvara och underhålla, och klarar rufsigare hantering. För de flesta användare och flottor är en uppblåsbar bräda det bättre helhetspaketet.',
      },
    ],
    faqs: [
      { q: 'Vilken är bäst för nybörjare?', a: 'Uppblåsbara brädor — stabila, förlåtande, lätta att förvara och hållbara nog för de repor nybörjare orsakar.' },
      { q: 'Kan en uppblåsbar SUP vara lika snabb som en hård bräda?', a: 'Vid fritidstempo är skillnaden liten. Hårda brädor vinner bara tydligt i tävling och högprestandascenarier.' },
    ],
  },
  {
    slug: 'safety-tips',
    title: 'Säkerhetstips på vattnet',
    intro: [
      'En säker session är en rolig session. Dessa grunder gäller lika för sjöar, floder och kustpaddling.',
    ],
    sections: [
      {
        title: 'Kolla vind och väderprognos',
        body: 'Landvind är den klassiska SUP-fällan: den för dig bort från stranden snabbare än du kan paddla tillbaka. Kolla prognosen och håll dig, vid tveksamhet, i skyddat vatten.',
      },
      {
        title: 'Ha alltid leash på',
        body: 'En spiralformad leash håller brädan inom räckhåll om du ramlar i — brädan är din flytutrustning. Välj en leash efter förhållandena: spiral för lugnt vatten, rak för surf.',
      },
      {
        title: 'Flytväst och personlig säkerhet',
        body: 'Använd en flythjälpsanordning när omständigheterna kräver det, eller när reglerna kräver det. Ha med dig en visselpipa, berätta för någon om din rutt och beräknade återkomsttid, och överväg en telefon i vattentätt fodral.',
      },
      {
        title: 'Känn dina gränser',
        body: 'Skaffa erfarenhet på lugnt vatten innan du ger dig på vind eller ström. Respektera kallt vatten — det tär snabbt på krafterna. Och paddla aldrig ensam på avlägsna platser eller i öppet vatten utan en plan.',
      },
    ],
    faqs: [
      { q: 'Behöver jag en flytväst på en SUP?', a: 'Reglerna varierar mellan länder och vattenområden. Även där det är frivilligt är leash plus flythjälpsanordning den ansvarsfulla grunden, och barn ska alltid ha en rätt passande flytväst.' },
      { q: 'Är det säkert att paddla SUP på en sjö?', a: 'Ja — lugna sjöar är idealiska för inlärning. Kolla vindriktningen, håll dig synlig för båttrafiken och undvik hårt trafikerade farleder.' },
    ],
    related: [
      { label: 'Säkerhetsutrustning på våra plattformar', href: '/products' },
      { label: 'Kvalitetskontroll i produktionen', href: '/quality' },
      { label: 'Välj din första bräda', href: '/guides/how-to-choose-your-sup' },
    ],
  },
  {
    slug: 'choosing-a-sup-oem-factory',
    title: 'Så väljer du en OEM-fabrik för skräddarsydda SUPar',
    intro: [
      'Att köpa uppblåsbara paddleboards under eget varumärke handlar om ett beslut: vilken fabrik du litar på med din första batch. Så här utvärderar du en tillverkare av skräddarsydda SUPar innan du lägger en beställning (PO).',
    ],
    sections: [
      {
        title: 'Börja med en provbeställning, inte en MOQ-diskussion',
        body: 'En fabrik som bara pratar om minimikvantiteter är tecknet på ett handelskontor, inte en äkta tillverkare. Riktiga tillverkare erbjuder stegvisa minimum — co-branding från 5–10 enheter, pilotpartier från 20–50 enheter, standardproduktion från 90–100+ per rulle på 150 m och projekt med helt egen form på volymnivån. Beställ en liten batch först: den testar kommunikation, specdisciplin och provkvalitet utan att sätta hela lanseringen på spel.',
      },
      {
        title: 'Kolla vad som faktiskt sker internt',
        body: 'Produktionen av en drop-stitch-SUP omfattar fyra kärnsteg: materiallaminering, svetsning, tryck och montering. En äkta fabrik gör allt under samma tak och låter dig granska lokalerna. Om säljaren inte kan visa en produktionslinje köper du troligen genom en mellanhand utan kontroll över kvalitet eller ledtider.',
      },
      {
        title: 'Prov måste matcha serieproduktionen',
        body: 'Ett handfärdigt prov är lätt; en konsekvent serieproduktion är svår. Fråga hur fabriken säkrar repeterbarheten: journaler för materialpartier, svetsparametrar och en QC-checklista som tillämpas på varje enskild bräda — inte bara den du godkänner.',
      },
      {
        title: 'Känn dina kostnader innan PO',
        body: 'Få hela kostnadsbilden skriftligen: enhetspris per kvantitet, verktygs- eller formkostnader om du vill ha en ny form, artwork- och tryckuppsättning samt förpackning.',
      },
      {
        title: 'Begär inspektion av tredje part',
        body: 'Seriösa OEM-SUP-fabriker välkomnar inspektioner före leverans — många varumärken bokar ett oberoende QC-besök per container. Bekräfta att fabriken kan ordna inspektioner av prov- och produktionsserier, och att avvisade enheter (till exempel brädor som tappar mer än 5 % tryck) tas bort från partiet.',
      },
      {
        title: 'Ledtider som håller',
        body: 'För uppblåsbara SUPar: räkna med prov inom 7–12 dagar och serieproduktion inom 25–35 dagar efter bekräftad PO och handpenning, plus verktygstid om du beställer en ny form. En fabrik som anger betydligt kortare tider än alla andra citerar från en broschyr, inte från en plan.',
      },
    ],
    faqs: [
      { q: 'Vilken är minimibeställningen för skräddarsydda SUP-brädor?', a: 'Stegvisa minimum är standard: 1–2 enheter för prov, 5–10 enheter för co-branding, 20–50 enheter för ett pilotparti och 90–100+ enheter per rulle på 150 m för standardvolym; projekt med helt egen form ligger på volymnivån.' },
      { q: 'Kan jag se ett prov före serieproduktionen?', a: 'Ja — prov är klara inom 7–12 dagar. De flesta fabriker kvittar prov- och formkostnader mot din första produktionsbeställning när den är bekräftad.' },
      { q: 'Hur verifierar jag att en SUP-fabrik är äkta?', a: 'Be om en live-videovisning av produktionslokalen, kontrollera fabrikens aktiva adress i Qingdao eller ett annat tillverkningscentrum och begär dokumentation av tidigare exportordrar. Provbeställningar är det slutgiltiga beviset.' },
      { q: 'Vad ska en offert från en SUP-fabrik innehålla?', a: 'Enhetspris per bräda, verktygs- eller formkostnader, artwork-uppsättning, förpackning, villkor för QC och inspektion samt betalningsvillkor.' },
    ],
    related: [
      { label: 'Vår OEM/ODM-tillverkning', href: '/oem-manufacturing' },
      { label: 'SUP-produktutvecklingsprocess', href: '/product-development' },
      { label: 'Fabrikskapacitet och anläggning', href: '/factory' },
      { label: 'Så kontrollerar vi kvalitet — 7 inspektionsgrindar', href: '/quality' },
      { label: 'Guide för MOQ och flexibel branding (PDF)', href: '/oem-moq-guide' },
      { label: 'Förtroende och fabriksgaranti', href: '/oem-trust-assurance' },
      { label: 'Starta ditt skräddarsydda SUP-projekt', href: '/contact' },
    ],
  },
  {
    slug: 'private-label-sup-guide',
    title: 'Privat etikett SUP: vad du faktiskt får från en fabrik',
    intro: [
      'Privat etikett är den snabbaste vägen att lansera ett SUP-märke: din logotyp på en beprövad plattform, utan kostnader och risk för att designa en bräda från grunden. Så här ser samarbetet med en tillverkare av skräddarsydda SUPar faktiskt ut.',
    ],
    sections: [
      {
        title: 'Privat etikett innebär beprövade plattformar',
        body: 'Du utgår från plattformar som fabriken redan bygger och testar — allround, touring, yoga, race och mer. Fabriken anpassar branding, grafik och utrustning, vilket håller kostnaderna nere och ledtiderna korta. Minimum är stegvisa: co-branding från 5–10 enheter, pilotpartier från 20–50 enheter och 90–100+ enheter per rulle på 150 m för standardvolym i privat etikett.',
      },
      {
        title: 'Branding går utöver logotypen',
        body: 'Privat etikett omfattar tryck av din logotyp (digital eller screentryck), anpassade färgscheman, EVA-däckpad skurna med din logotyp, branding av tillbehör (paddel, pump, leash), design av försäljningslåda och till och med butiksdisplays. Skicka ditt artwork och fabriken tar fram ett visuellt underlag före produktion.',
      },
      {
        title: 'Vad fabriken sköter åt dig',
        body: 'En full-service SUP-fabrik sköter artwork-uppsättning, materialinköp, provproduktion, en montage-QC-checklista med 100 punkter, trycktest och exportdokumentation (faktura, packlista, ursprungsintyg). Du granskar underlagen och godkänner provet — fabriken sköter allt annat.',
      },
      {
        title: 'Det du äger: varumärke, marknad, kund',
        body: 'I ett privat etikett-avtal bygger fabriken brädorna och du äger varumärket. Seriösa tillverkare säljer inte sina egna brädor på din marknad och delar heller inte din skräddarsydda design med andra. Fråga efter marknadsexklusivitet i din offert.',
      },
      {
        title: 'Kostnader: prov, form, artwork-uppsättning',
        body: 'Räkna med tre typer av avgifter: provavgifter (7–12 dagar), verktygskostnader när en ny form krävs (minimum på volymnivån) och artwork-uppsättning för tryck. De flesta fabriker kvittar prov- och formkostnader mot din första produktionsbeställning.',
      },
      {
        title: 'Från PO till färdig batch',
        body: 'Ett typiskt privat etikett-förlopp: en handpenning på 30 % startar produktionen, serieproduktionen är klar inom 25–35 dagar efter bekräftad PO och handpenning, och saldot regleras mot den godkända batchen. Räkna med hela partiet redan i din första beställning.',
      },
    ],
    faqs: [
      { q: 'Vilken är minimibeställningen för SUP-brädor i privat etikett?', a: 'Co-branding börjar vid 5–10 enheter, pilotpartier vid 20–50 enheter och standardvolym i privat etikett vid 90–100+ enheter per rulle på 150 m; projekt med helt egen form ligger på volymnivån.' },
      { q: 'Kan jag skicka min egen logotyp och mitt artwork?', a: 'Ja — skicka din logotyp och ditt artwork; fabriken tar fram ett visuellt underlag före produktion så att du godkänner färger, placering och ytbehandling.' },
      { q: 'Är min skräddarsydda SUP-design exklusiv för mitt varumärke?', a: 'Ja, enligt standardvillkoren för privat etikett. Begär en exklusivitetsklausul i ditt köpeavtal; fabriker som vår säljer inte vidare din design med ditt varumärke.' },
      { q: 'Hur lång tid tar en privat etikett-beställning?', a: 'Prov skickas inom 7–12 dagar; serieproduktionen är klar inom 25–35 dagar efter bekräftad PO och handpenning. Räkna med 8–12 veckor för det första fulla partiet.' },
    ],
    related: [
      { label: 'Lösningar för privat etikett', href: '/solutions/private-label-sup' },
      { label: 'Beprövade plattformar', href: '/products/all-around' },
      { label: 'OEM/ODM-tillverkning', href: '/oem-manufacturing' },
      { label: 'Starta ditt skräddarsydda SUP-projekt', href: '/contact' },
    ],
  },
  {
    slug: 'sup-fleet-guide',
    title: 'Att köpa SUP-flottor för uthyrning, resorter och klubbar',
    intro: [
      'Flottköpare behöver andra svar än slutkunder: hållbarhet per pass, standardiserade reservdelar, kvantiteter på volymnivå och en leverantör som levererar säsong efter säsong. Så här planerar du innan du beställer din första flotta.',
    ],
    sections: [
      {
        title: 'Standardisera på en eller två specifikationer',
        body: 'Flottverksamhet bygger på standardisering: en brädstorlek (vanligtvis 10\'6"–11\'0" × 32") för de flesta gäster, ett tåligt paket och en reservdelsats. Det förenklar reparationer, personalutbildning, förvaring och återbeställningar. Motstå frestelsen att köpa tio olika modeller.',
      },
      {
        title: 'Högt belastade brädor är en annan produkt',
        body: 'En uthyrningsbräda tål dussintals pass per säsong. Specificera tjockare PVC-lager, förstärkta railband och kraftigare tillbehör än för konsumentversionen. Fråga fabriken hur flottspecifikationen skiljer sig från konsumentversionen — äkta anläggningar har båda.',
      },
      {
        title: 'Anpassa kvantiteterna till efterfrågan',
        body: 'Beräkna flottstorleken mot daglig rotation och säsongslängd: 20–30 brädor räcker för en liten verksamhet, 100+ för en välbesökt resort eller klubb. Be fabriken om kvantitetsrekommendationer som matchar ditt efterfrågemönster.',
      },
      {
        title: 'Beställ reservdelar tillsammans med flottan',
        body: 'Beställ reservventiler, reparationssatser, pumpar, leashes och paddlar i samma PO — de kostar lite per enhet nu och är svåra att få tag på mitt under säsongen. Be fabriken om en rekommenderad reservdelsandel (vanligtvis 5–10 % av flottstorleken för förbrukningsartiklar).',
      },
      {
        title: 'Beställ inför säsongen, inte under',
        body: 'Produktionen tar 25–35 dagar efter bekräftad PO och handpenning. För att ha brädor på stranden i vår, bekräfta beställningarna sent på hösten så att produktionen landar före säsongen.',
      },
      {
        title: 'Branda flottan för andrahandsvärde',
        body: 'Flottbrädor kan bära din logotyp, ett numreringssystem för uthyrningen och färgkodning per storlek. Screentryckta logotyper på serier om 200+ enheter är kostnadseffektiva, och en brandad flotta fungerar även som marknadsföring på vattnet.',
      },
    ],
    faqs: [
      { q: 'Vilken är den bästa SUP-brädan för en uthyrningsflotta?', a: 'En allroundbräda på 10\'6"–11\'0" × 32" med förstärkt konstruktion är industristandarden — stabil för nybörjare, hållbar för dagligt bruk och lätt att sköta.' },
      { q: 'Hur många brädor behöver en uthyrningsverksamhet?', a: 'Räkna med 20–30 brädor för en liten verksamhet, skalat efter rotation: 100+ enheter för välbesökta resorter och klubbar. Reservdelar bör vara 5–10 % av flottstorleken.' },
      { q: 'Kan flottbrädorna bära vår logotyp?', a: 'Ja — screentryckta logotyper, uthyrningsnummer och färgkodade däck är standardanpassningar, särskilt kostnadseffektiva från 200 enheter.' },
      { q: 'Hur lång tid tar en flottbeställning?', a: 'Prov inom 7–12 dagar, produktion inom 25–35 dagar efter bekräftad PO och handpenning — beställ därför flottan i god tid före säsongsstarten.' },
    ],
    related: [
      { label: 'Lösningar för resorter och klubbar', href: '/solutions/resort-sup' },
      { label: 'Fallstudie: uthyrningsflotta på flera platser', href: '/projects/rental-fleet-multi-site' },
      { label: 'Plattformar för flottor', href: '/products/all-around' },
      { label: 'Prata med en projektspecialist', href: '/contact' },
    ],
  },
]

export const GUIDES_NO: Guide[] = [
  {
    slug: 'how-to-choose-your-sup',
    title: 'Hvordan velge din SUP',
    intro: [
      'Valget av din første oppblåsbare SUP handler om brettets størrelse, bredde, konstruksjon og hva som følger med i esken. Her er det som betyr noe, i klartekst.',
    ],
    sections: [
      {
        title: 'Lengde og volum',
        body: 'Lengre brett (11–12 ft) glir lengre per padletak og holder kursen bedre — ideelle for turer og langdistanspadling. Kortere brett svinger lettere. For de fleste padlere er et allroundbrett på 10\'6"–11\'0" den beste balansen.',
      },
      {
        title: 'Bredde og stabilitet',
        body: 'Bredden avgjør stabiliteten mer enn noe annet. Et 32-tommers dek er tilgivende for nybegynnere og stabilt nok til yoga; 30-tommers brett passer lettere eller mer erfarne padlere som vil ha fart og smidighet.',
      },
      {
        title: 'Konstruksjonskvalitet',
        body: 'Se etter en drop-stitch-kjerne i PVC av militærkvalitet med et nominelt trykk på minst 15 PSI, tosidig PVC-laminering og forsterkede railbånd. Det avgjør hvor stivt brettet føles og hvor lenge det holder ved daglig bruk.',
      },
      {
        title: 'Hva som bør være med i pakken',
        body: 'En komplett pakke sparer penger og boks: brett, justerbar 3-delt paddle, dobbelvirkende pumpe med manometer, spiralformet leash, finne/finner, reiseveske og reparasjonssett.',
      },
    ],
    faqs: [
      { q: 'Hvilken størrelse på SUP-brett trenger jeg?', a: 'De fleste nybegynnere velger et allroundbrett på rundt 11\'0" × 32" × 6" — stabilt, allsidig og lett å transportere. Tyngre padlere eller dem som padler lengre distanser bør velge en størrelse opp.' },
      { q: 'Er en oppblåsbar SUP like stiv som et hardt brett?', a: 'En moderne oppblåsbar drop-stitch på 15–20 PSI er nesten like stiv som et hardt nybegynnerbrett — med fordelen at den får plass i en ryggsekk.' },
    ],
    related: [
      { label: 'Utforsk våre SUP-plattformer', href: '/products' },
      { label: 'Oppblåsbar vs. hardt brett', href: '/inflatable-vs-hardboard' },
      { label: 'OEM-produksjon', href: '/oem-manufacturing' },
    ],
  },
  {
    slug: 'beginner-guide',
    title: 'Padleguide for nybegynnere',
    intro: [
      'Alt du trenger for de første turene på vannet: oppblåsing, din første stående tur, grunnslaget i padling og hvordan du holder deg trygg mens du bygger opp ferdigheter.',
    ],
    sections: [
      {
        title: 'Pump til angitt trykk, ikke på følelse',
        body: 'Pump til angitt trykk (vanligvis 15 PSI) ved hjelp av pumpens manometer. Et brett på 10 PSI føles bra på gresset men bøyer seg kraftig på vannet. Kontroller trykket på varme dager — solen varmer luften inni, og trykket stiger.',
      },
      {
        title: 'De første stegene på brettet',
        body: 'Legg ut fra stranden eller ved et grunt inngang: knærstå først, og reis deg så én fot i gang på tvers av midtlinjen. Hold føttene skulderbrede, knærne myke og blikket mot horisonten — brettet følger blikket ditt.',
      },
      {
        title: 'Grunntaket i padling',
        body: 'Stikk deg fremover med padlen, senk bladet helt ned og dra det langs brettets side mens du roterer overkroppen. Bytt side etter noen tak for å padle rett; noen brede tak på én side svinger brettet.',
      },
      {
        title: 'Øv på å falle i først',
        body: 'Å falle i er en del av læringen. Øv på å komme opp igjen på grunt vann: svøm til håndtaket midt på brettet, spark bena mot overflaten og dra deg opp i én bevegelse.',
      },
    ],
    faqs: [
      { q: 'Hvor lang tid tar det å lære SUP?', a: 'De fleste kan padle behagelig på rolig vann allerede på den første turen, etter en time. Trygghet i svinger, vind og distanse bygges opp over noen turer.' },
      { q: 'Må jeg være i god form?', a: 'Nei — SUP er svært tilgjengelig. Balanse, styrke i kroppssjakten og pust bygges naturlig opp av regelmessig padling.' },
    ],
  },
  {
    slug: 'inflatable-vs-hard',
    title: 'Oppblåsbar vs. hardt brett',
    intro: [
      'De to konstruksjonsfamiliene vinner i ulike scenarier. Her er den ærlige sammenligningen for fritidspadlere, klubber og utleievirksomheter.',
    ],
    sections: [
      {
        title: 'Bærbarhet og oppbevaring',
        body: 'Oppblåsbare brett folder sammen til en ryggsekk som får plass i bagasjen, campingvogna eller garderoben — og er standardvalet for reiser. Harde brett krever takstativ, lagerplass og mer varsom håndtering.',
      },
      {
        title: 'Stivhet og ytelse',
        body: 'Premium-harde brett er stivere og reagerer bedre på høy ytelse. I fritidstempo presterer en godt bygd oppblåsbar drop-stitch på 15–20 PSI sammenlignbart — til en brøkdel av lagringskostnaden.',
      },
      {
        title: 'Holdbarhet',
        body: 'Oppblåsbare PVC-brett tåler skrap mot brygger og støt mot stranden som ville knekket et hardt skall — en viktig grunn til at utleieflåter og resorts velger oppblåsbart til daglig gjesteutleie.',
      },
      {
        title: 'Totale eierskapskostnader',
        body: 'Oppblåsbare brett koster mindre å frakte, lagre og vedlikeholde, og tåler mer slitasje. For de fleste brukere og flåter er et oppblåsbart brett det bedre totalpakket.',
      },
    ],
    faqs: [
      { q: 'Hvilken er best for nybegynnere?', a: 'Oppblåsbare brett — stabile, tilgivende, enkle å lagre og holdbare nok for skadene nybegynnere påfører.' },
      { q: 'Kan en oppblåsbar SUP være like rask som et hardt brett?', a: 'I fritidstempo er forskjellen liten. Harde brett vinner bare tydelig i konkurranse og høyytelsesscenarier.' },
    ],
  },
  {
    slug: 'safety-tips',
    title: 'Sikkerhetstips på vannet',
    intro: [
      'En trygg tur er en morsom tur. Disse grunnpillene gjelder like godt for innsjøer, elver og kystpadling.',
    ],
    sections: [
      {
        title: 'Sjekk vind og værvarsel',
        body: 'Landvind er den klassiske SUP-fellen: den frakter deg raskere bort fra stranden enn du kan padle tilbake. Sjekk varselet, og hold deg i beskyttet vann når du er i tvil.',
      },
      {
        title: 'Bruk alltid leash',
        body: 'Et spiralformet leash holder brettet innen rekkevidde hvis du faller i — brettet er flyteutstyret ditt. Velg leash etter forholdene: spiral for rolig vann, rett for surf.',
      },
      {
        title: 'Redningsvest og personlig sikkerhet',
        body: 'Bruk en redningsanordning når forholdene krever det, eller når reglene krever det. Ha med deg en fløyte, fortell noen om ruten din og beregnet tidspunkt for retur, og vurder en telefon i vanntett etui.',
      },
      {
        title: 'Kjenn grensene dine',
        body: 'Skaff deg erfaring på rolig vann før du gir deg i gang med vind eller strøm. Respekter kaldt vann — det tærer raskt på kreftene. Og padle aldri alene på avsides steder eller i åpent vann uten en plan.',
      },
    ],
    faqs: [
      { q: 'Trenger jeg redningsvest på en SUP?', a: 'Reglene varierer mellom land og vannområder. Selv der det er frivillig, er leash pluss redningsanordning det ansvarlige grunnlaget, og barn skal alltid ha en redningsvest som passer.' },
      { q: 'Er det trygt å padle SUP på en innsjø?', a: 'Ja — rolige innsjøer er ideelle for læring. Sjekk vindretningen, hold deg synlig for båttrafikken og unngå tungt trafikkerte leder.' },
    ],
    related: [
      { label: 'Sikkerhetsutstyr på plattformene våre', href: '/products' },
      { label: 'Kvalitetskontroll i produksjonen', href: '/quality' },
      { label: 'Velg ditt første brett', href: '/guides/how-to-choose-your-sup' },
    ],
  },
  {
    slug: 'choosing-a-sup-oem-factory',
    title: 'Hvordan velge en OEM-fabrikk for skreddersydde SUPar',
    intro: [
      'Å kjøpe oppblåsbare paddleboards under eget merkenavn handler om én beslutning: hvilken fabrikk du stoler på med din første batch. Slik vurderer du en produsent av skreddersydde SUPar før du legger inn en bestilling (PO).',
    ],
    sections: [
      {
        title: 'Start med en prøvebestilling, ikke en MOQ-diskusjon',
        body: 'En fabrikk som bare snakker om minimumskvantum, er tegnet på et handelskontor, ikke en ekte produsent. Ekte produsenter tilbyr trinnvise minimum — co-branding fra 5–10 enheter, pilotpartier fra 20–50 enheter, standardproduksjon fra 90–100+ per rulle på 150 m og prosjekter med helt egen form på volumnivå. Bestill en liten batch først: den tester kommunikasjon, spesifikasjonsdisiplin og prøvekvalitet uten å sette hele lanseringen på spill.',
      },
      {
        title: 'Sjekk hva som faktisk skjer internt',
        body: 'Produksjonen av en drop-stitch-SUP består av fire kjernetopp: laminering av material, sveising, trykk og montering. En ekte fabrikk gjør alt under samme tak og lar deg inspisere lokalene. Hvis selgeren ikke kan vise en produksjonslinje, kjøper du trolig gjennom et mellomledd uten kontroll over kvalitet eller ledetider.',
      },
      {
        title: 'Prøver må matche serieproduksjonen',
        body: 'En håndlaget prøve er lett; en konsistent serieproduksjon er vanskelig. Spør hvordan fabrikken sikrer repeterbarhet: logger for materialpartier, sveiseparametere og en QC-sjekkliste som brukes på hvert enkelt brett — ikke bare det du godkjenner.',
      },
      {
        title: 'Kjenn kostnadene før PO',
        body: 'Få helheten i kostnadene skriftlig: enhetspris per kvantitet, verktøy- eller formkostnader dersom du vil ha en ny form, artwork- og trykkoppsett samt emballasje.',
      },
      {
        title: 'Be om inspeksjon fra tredjepart',
        body: 'Seriøse OEM-SUP-fabrikker ønsker inspeksjoner før levering velkommen — mange merker bestiller et uavhengig QC-besøk per container. Bekreft at fabrikken kan ordne inspeksjoner av prøve- og produksjonsserier, og at avviste enheter (for eksempel brett som mister mer enn 5 % trykk) fjernes fra partiet.',
      },
      {
        title: 'Ledetider som holder',
        body: 'For oppblåsbare SUPar: regn med prøver innen 7–12 dager og serieproduksjon innen 25–35 dager etter bekreftet PO og depositum, pluss verktøytid dersom du bestiller en ny form. En fabrikk som oppgir langt kortere tider enn alle andre siterer fra en brosjyre, ikke fra en plan.',
      },
    ],
    faqs: [
      { q: 'Hva er minste bestilling for skreddersydde SUP-brett?', a: 'Trinnvise minimum er standard: 1–2 enheter for prøver, 5–10 enheter for co-branding, 20–50 enheter for et pilotparti og 90–100+ enheter per rulle på 150 m for standardvolum; prosjekter med helt egen form ligger på volumnivå.' },
      { q: 'Kan jeg se et prøve før serieproduksjonen?', a: 'Ja — prøver er klare innen 7–12 dager. De fleste fabrikker trekker prøve- og formkostnader fra din første produksjonsbestilling når den er bekreftet.' },
      { q: 'Hvordan verifiserer jeg at en SUP-fabrikk er ekte?', a: 'Be om en direkte videovisning av produksjonslokalet, sjekk fabrikkens aktive adresse i Qingdao eller et annet produksjonssenter, og be om dokumentasjon på tidligere eksportordrer. Prøvebestillinger er det endelige beviset.' },
      { q: 'Hva bør et tilbud fra en SUP-fabrikk inneholde?', a: 'Enhetspris per brett, verktøy- eller formkostnader, artwork-oppsett, emballasje, vilkår for QC og inspeksjon samt betalingsvilkår.' },
    ],
    related: [
      { label: 'Vår OEM/ODM-produksjon', href: '/oem-manufacturing' },
      { label: 'Prosessen for produktutvikling av SUP', href: '/product-development' },
      { label: 'Fabrikkkapasitet og anlegg', href: '/factory' },
      { label: 'Slik kontrollerer vi kvalitet — 7 inspeksjonsporter', href: '/quality' },
      { label: 'Guide til MOQ og fleksibel branding (PDF)', href: '/oem-moq-guide' },
      { label: 'Tillit og fabrikkgaranti', href: '/oem-trust-assurance' },
      { label: 'Start ditt skreddersydde SUP-prosjekt', href: '/contact' },
    ],
  },
  {
    slug: 'private-label-sup-guide',
    title: 'Private label SUP: hva du faktisk får fra en fabrikk',
    intro: [
      'Private label er den raskeste veien til å lansere et SUP-merke: din logo på en utprøvd plattform, uten kostnader og risiko for å designe et brett fra bunnen av. Slik ser samarbeidet med en produsent av skreddersydde SUPar faktisk ut.',
    ],
    sections: [
      {
        title: 'Private label innebærer utprøvde plattformer',
        body: 'Du tar utgangspunkt i plattformer som fabrikken allerede bygger og tester — allround, touring, yoga, race og mer. Fabrikken tilpasser branding, grafikk og utstyr, noe som holder kostnadene nede og ledetidene korte. Minimum er trinnvis: co-branding fra 5–10 enheter, pilotpartier fra 20–50 enheter og 90–100+ enheter per rulle på 150 m for standardvolum i private label.',
      },
      {
        title: 'Branding går utover logoen',
        body: 'Private label omfatter trykk av logoen din (digitalt eller silketrykk), tilpassede fargeskjemaer, EVA-dekkputer skåret med logoen din, branding av tilbehør (paddle, pumpe, leash), design av salgsbokser og til og med butikkdisplayer. Send inn artworket ditt, og fabrikken lager et visuelt underlag før produksjonen.',
      },
      {
        title: 'Hva fabrikken tar seg av for deg',
        body: 'En fullservice-SUP-fabrikk tar seg av artwork-oppsett, materialinnkjøp, prøveproduksjon, en monterings-QC-sjekkliste med 100 punkter, trykktesting og eksportdokumentasjon (faktura, pakkeliste, opprinnelseserklæring). Du vurderer underlagene og godkjenner prøven — fabrikken tar seg av alt annet.',
      },
      {
        title: 'Det du eier: merke, marked, kunde',
        body: 'I en private label-avtale bygger fabrikken brettene, og du eier merkenavnet. Seriøse produsenter selger ikke sine egne brett i ditt marked og deler heller ikke den skreddersydde designen din med andre. Be om markedseksklusivitet i tilbudet ditt.',
      },
      {
        title: 'Kostnader: prøver, form, artwork-oppsett',
        body: 'Regn med tre typer gebyrer: prøvegebyrer (7–12 dager), verktøykostnader når en ny form kreves (minimum på volumnivå) og artwork-oppsett for trykk. De fleste fabrikker trekker prøve- og formkostnader fra din første produksjonsbestilling.',
      },
      {
        title: 'Fra PO til ferdig batch',
        body: 'Et typisk private label-forløp: et depositum på 30 % starter produksjonen, serieproduksjonen er ferdig innen 25–35 dager etter bekreftet PO og depositum, og restbeløpet avregnes mot den godkjente batchen. Regn med hele partiet allerede i din første bestilling.',
      },
    ],
    faqs: [
      { q: 'Hva er minste bestilling for private label SUP-brett?', a: 'Co-branding starter ved 5–10 enheter, pilotpartier ved 20–50 enheter og standardvolum i private label ved 90–100+ enheter per rulle på 150 m; prosjekter med helt egen form ligger på volumnivå.' },
      { q: 'Kan jeg sende inn min egen logo og mitt artwork?', a: 'Ja — send inn logoen og artworket ditt; fabrikken lager et visuelt underlag før produksjonen, slik at du godkjenner farger, plassering og overflatebehandling.' },
      { q: 'Er den skreddersydde SUP-designen min eksklusiv for mitt merke?', a: 'Ja, i henhold til standardvilkårene for private label. Be om en eksklusivitetsklausul i kjøpsavtalen; fabrikker som vår selger ikke videre designen din med ditt merkenavn.' },
      { q: 'Hvor lang tid tar en private label-bestilling?', a: 'Prøver sendes innen 7–12 dager; serieproduksjonen er ferdig innen 25–35 dager etter bekreftet PO og depositum. Regn med 8–12 uker for det første fulle partiet.' },
    ],
    related: [
      { label: 'Løsninger for private label', href: '/solutions/private-label-sup' },
      { label: 'Utprøvde plattformer', href: '/products/all-around' },
      { label: 'OEM/ODM-produksjon', href: '/oem-manufacturing' },
      { label: 'Start ditt skreddersydde SUP-prosjekt', href: '/contact' },
    ],
  },
  {
    slug: 'sup-fleet-guide',
    title: 'Å kjøpe SUP-flåter for utleie, resorts og klubber',
    intro: [
      'Flåtekjøpere trenger andre svar enn sluttkunder: holdbarhet per tur, standardiserte reservedeler, kvantiteter på volumnivå og en leverandør som leverer sesong etter sesong. Slik planlegger du før du bestiller din første flåte.',
    ],
    sections: [
      {
        title: 'Standardiser på én eller to spesifikasjoner',
        body: 'Utleievirksomhet bygger på standardisering: én brettstørrelse (vanligvis 10\'6"–11\'0" × 32") for de fleste gjester, en holdbar pakke og et reservedelssett. Det forenkler reparasjoner, opplæring av personale, lagring og gjenbestillinger. Motstå fristelsen til å kjøpe ti ulike modeller.',
      },
      {
        title: 'Brett med høy belastning er et annet produkt',
        body: 'Et utleiebrett tåler dusinvis av turer per sesong. Spesifiser tykkere PVC-lag, forsterkede railbånd og kraftigere tilbehør enn for forbrukermodellen. Spør fabrikken hvordan flåtespesifikasjonen skiller seg fra forbrukermodellen — ekte anlegg har begge deler.',
      },
      {
        title: 'Tilpass kvantitetene til etterspørselen',
        body: 'Beregn flåtestørrelsen ut fra daglig rotasjon og sesonglengde: 20–30 brett holder for en liten virksomhet, 100+ for et godt besøkt resort eller klubb. Be fabrikken om kvantitetsanbefalinger som passer etterspørselmønsteret ditt.',
      },
      {
        title: 'Bestill reservedeler sammen med flåten',
        body: 'Bestill reserveventiler, reparasjonssett, pumper, leashes og padler i samme PO — de koster lite per enhet nå, og er vanskelige å få tak på i løpet av sesongen. Be fabrikken om en anbefalt andel reservedeler (vanligvis 5–10 % av flåtestørrelsen for forbruksvarer).',
      },
      {
        title: 'Bestill før sesongen, ikke under',
        body: 'Produksjonen tar 25–35 dager etter bekreftet PO og depositum. For å ha brett på stranden til våren, bekreft bestillingene sent på høsten, slik at produksjonen er ferdig før sesongen.',
      },
      {
        title: 'Brand flåten for merverdi ved videresalg',
        body: 'Flåtebrett kan bære logoen din, et nummereringssystem for utleien og fargekoding per størrelse. Silketrykkede logoer på serier på 200+ enheter er kostnadseffektive, og en brandet flåte fungerer også som markedsføring på vannet.',
      },
    ],
    faqs: [
      { q: 'Hvilket er det beste SUP-brettet for en utleieflåte?', a: 'Et allroundbrett på 10\'6"–11\'0" × 32" med forsterket konstruksjon er bransjestandarden — stabilt for nybegynnere, holdbart til daglig bruk og lett å stelle.' },
      { q: 'Hvor mange brett trenger en utleievirksomhet?', a: 'Regn med 20–30 brett for en liten virksomhet, skalert etter rotasjon: 100+ enheter for godt besøkte resorts og klubber. Reservedeler bør være 5–10 % av flåtestørrelsen.' },
      { q: 'Kan flåtebrettene bære logoen vår?', a: 'Ja — silketrykkede logoer, utleienummer og fargekodedekk er standardtilpasninger, spesielt kostnadseffektive fra 200 enheter.' },
      { q: 'Hvor lang tid tar en flåtebestilling?', a: 'Prøver innen 7–12 dager, produksjon innen 25–35 dager etter bekreftet PO og depositum — bestill derfor flåten i god tid før sesongen starter.' },
    ],
    related: [
      { label: 'Løsninger for resorts og klubber', href: '/solutions/resort-sup' },
      { label: 'Case study: utleieflåte på flere steder', href: '/projects/rental-fleet-multi-site' },
      { label: 'Plattformer for flåter', href: '/products/all-around' },
      { label: 'Snakk med en prosjektspesialist', href: '/contact' },
    ],
  },
]

export const GUIDES_PL: Guide[] = [
  {
    slug: 'how-to-choose-your-sup',
    title: 'Jak wybrać deskę SUP',
    intro: [
      'Wybór pierwszej nadmuchiwanej deski SUP zależy od rozmiaru deski, szerokości, konstrukcji i tego, co znajduje się w zestawie. Oto, co naprawdę ma znaczenie — po prostu.',
    ],
    sections: [
      {
        title: 'Długość i objętość',
        body: 'Dłuższe deski (11–12 ft) przemieszczają się dalej na jedno uderzenie wiosła i lepiej utrzymują kurs — idealne do tur i wiosłowania na dalszych dystansach. Krótsze deski łatwiej skręcają. Dla większości osób najlepszym wyborem jest deska allround o długości 10\'6"–11\'0".',
      },
      {
        title: 'Szerokość i stabilność',
        body: 'Szerokość ma większy wpływ na stabilność niż cokolwiek innego. Pokład o szerokości 32 cali jest wyrozumiały dla początkujących i wystarczająco stabilny do jogi; deski 30-calowe sprawdzą się lżejszym lub bardziej doświadczonym wiosłującym, którzy cenią prędkość i zwinność.',
      },
      {
        title: 'Jakość konstrukcji',
        body: 'Szukaj rdzenia drop-stitch z PVC w klasie wojskowej o ciśnieniu roboczym co najmniej 15 PSI, laminowania PVC w dwóch warstwach oraz wzmocnionych listew krawędziowych. To one decydują o sztywności deski i o tym, jak długo wytrzyma przy codziennym użytkowaniu.',
      },
      {
        title: 'Co powinno być w zestawie',
        body: 'Kompletny zestaw oszczędza pieniądze i kłopot: deska, 3-częściowe regulowane wiosło, dwukierunkowa pompka z manometrem, spiralna smycz, płetwa lub płetwy, plecak podróżny i zestaw naprawczy.',
      },
    ],
    faqs: [
      { q: 'Jaki rozmiar deski SUP potrzebuję?', a: 'Większość początkujących wybiera deskę allround o wymiarach około 11\'0" × 32" × 6" — stabilną, wszechstronną i łatwą w transporcie. Ciężsi użytkownicy lub osoby planujące dalsze wyprawy powinny wybrać rozmiar większy.' },
      { q: 'Czy nadmuchiwana deska SUP jest tak sztywna jak deska twarda?', a: 'Nowoczesna nadmuchiwana deska drop-stitch przy 15–20 PSI jest niemal tak sztywna jak twarda deska dla początkujących — z tą zaletą, że mieści się w plecaku.' },
    ],
    related: [
      { label: 'Poznaj nasze platformy SUP', href: '/products' },
      { label: 'Nadmuchiwana vs deska twarda', href: '/inflatable-vs-hardboard' },
      { label: 'Produkcja OEM', href: '/oem-manufacturing' },
    ],
  },
  {
    slug: 'beginner-guide',
    title: 'Przewodnik początkującego',
    intro: [
      'Wszystko, czego potrzebujesz na pierwsze wypady na wodzie: pompowanie, pierwsze wstanie na deskę, podstawowy styl wiosłowania i jak zachować bezpieczeństwo, budując pewność siebie.',
    ],
    sections: [
      {
        title: 'Pompuj do wartości zadanej, nie na wyczucie',
        body: 'Pompuj do zadanego ciśnienia (zwykle 15 PSI), korzystając z manometru przy pompce. Deska przy 10 PSI dobrze wygląda na trawie, ale mocno się ugina na wodzie. W ciepłe dni sprawdzaj ciśnienie — słońce ogrzewa powietrze w środku i ciśnienie rośnie.',
      },
      {
        title: 'Pierwsze kroki na desce',
        body: 'Wyrusz z plaży lub płycizny: zacznij od klęku, a potem wstań, stawiając razem po jednej stopie po obu stronach osi deski. Stopy ustaw na szerokość barków, kolana trzymaj miękko i patrz na horyzont — deska podąża za Twoim wzrokiem.',
      },
      {
        title: 'Podstawowy ruch wiosła',
        body: 'Sięgnij wiosłem do przodu, całkowicie zanurz łopatkę i przeciągnij ją wzdłuż deski, jednocześnie obracając tułów. Co kilka uderzeń zmieniaj stronę, żeby płynąć prosto; kilka pociągnięć po jednej stronie pozwala skręcić.',
      },
      {
        title: 'Najpierw ćwicz upadek',
        body: 'Wpadnięcie do wody jest częścią nauki. Ćwicz wsiadanie na płytkiej wodzie: dopłyń do uchwytu w środku deski, kopnij nogami do powierzchni i jednym ruchem wciągnij się na deskę.',
      },
    ],
    faqs: [
      { q: 'Ile czasu zajmuje nauka SUP?', a: 'Większość osób wiosłuje komfortowo już podczas pierwszej godzinnej sesji. Pewność siebie w zakrętach, przy wietrze i na dalszych dystansach buduje się przez kilka wypraw.' },
      { q: 'Czy muszę być w dobrej formie?', a: 'Nie — SUP jest bardzo dostępny. Równowagę, siłę mięśniową i wytrzymałość budujesz naturalnie podczas regularnego wiosłowania.' },
    ],
  },
  {
    slug: 'inflatable-vs-hard',
    title: 'Nadmuchiwana vs deska twarda',
    intro: [
      'Te dwie rodziny konstrukcji wygrywają w różnych scenariuszach. Oto uczciwe porównanie dla osób pływających rekreacyjnie, klubów i wypożyczalni.',
    ],
    sections: [
      {
        title: 'Przenośność i przechowywanie',
        body: 'Deski nadmuchiwane schodzą do plecaka, który zmieści się w bagażniku samochodu, kamperze lub szafie w mieszkaniu — i są domyślnym wyborem na podróże. Deski twarde wymagają bagażnika dachowego, miejsca do przechowywania i ostrożniejszego obchodzenia się.',
      },
      {
        title: 'Sztywność i osiągi',
        body: 'Deski twarde klasy premium są sztywniejsze i bardziej responsywne przy wysokich osiągach. Przy rekreacyjnych prędkościach dobrze wykonana nadmuchiwana deska drop-stitch przy 15–20 PSI daje porównywalne wyniki przy ułamku kosztów przechowywania.',
      },
      {
        title: 'Trwałość',
        body: 'Nadmuchiwane deski z PVC zniosą otarcia o pomosty i uderzenia o brzeg, które pęknęłyby twardą powłokę — to jeden z głównych powodów, dla których wypożyczalnie i resorty wybierają deski nadmuchiwane do codziennego użytku przez gości.',
      },
      {
        title: 'Całkowity koszt posiadania',
        body: 'Deski nadmuchiwane są tańsze w transporcie, przechowywaniu i serwisowaniu oraz znoszą trudniejsze warunki. Dla większości użytkowników i flot deska nadmuchiwana jest lepszym wyborem w każdym aspekcie.',
      },
    ],
    faqs: [
      { q: 'Która jest lepsza dla początkujących?', a: 'Deski nadmuchiwane — stabilne, wyrozumiałe, łatwe w przechowywaniu i wystarczająco trwałe na otarcia, które generują początkujący.' },
      { q: 'Czy nadmuchiwana deska SUP może być tak szybka jak deska twarda?', a: 'Przy prędkościach rekreacyjnych różnica jest niewielka. Deski twarde wyraźnie przeważają tylko w wyścigach i scenariuszach maksymalnych osiągów.' },
    ],
  },
  {
    slug: 'safety-tips',
    title: 'Bezpieczeństwo na wodzie',
    intro: [
      'Bezpieczny wypad to udany wypad. Te podstawowe zasady dotyczą tak samo jezior, rzek, jak i wiosłowania przybrzeżnego.',
    ],
    sections: [
      {
        title: 'Sprawdź wiatr i prognozę',
        body: 'Wiatr od lądu to klasyczna pułapka na SUP: znosi Cię od brzegu szybciej, niż jesteś w stanie wiosłować z powrotem. Sprawdź prognozę, a w razie wątpliwości zostań na wodzie osłoniętej.',
      },
      {
        title: 'Zawsze noś smycz',
        body: 'Spiralna smycz trzyma deskę w zasięgu, gdy wpadniesz do wody — deska jest Twoim sprzętem ratunkowym. Dobierz smycz do warunków: spiralna na spokojną wodę, prosta na surfing.',
      },
      {
        title: 'Kamizelka i bezpieczeństwo osobiste',
        body: 'Noś kamizelkę ratowniczą, gdy warunki tego wymagają lub gdy nakazują to przepisy. Zabierz gwizdek, poinformuj kogoś o trasie i planowanym czasie powrotu oraz rozważ telefon w wodoodpornym etui.',
      },
      {
        title: 'Znaj swoje możliwości',
        body: 'Nabierz doświadczenia na spokojnej wodzie, zanim wyruszysz na wiatr albo prąd. Szanuj zimną wodę — szybko odbiera siły. I nigdy nie wiosłuj sam w odległych lub otwartych akwenach bez planu.',
      },
    ],
    faqs: [
      { q: 'Czy na desce SUP potrzebuję kamizelki ratowniczej?', a: 'Wymagania różnią się w zależności od kraju i akwenów wodnych. Nawet tam, gdzie jest opcjonalna, smycz wraz z kamizelką to odpowiedzialne minimum, a dzieci zawsze powinny mieć poprawnie dopasowaną kamizelkę.' },
      { q: 'Czy wiosłowanie na SUP na jeziorze jest bezpieczne?', a: 'Tak — spokojne jeziora są idealne do nauki. Sprawdź kierunek wiatru, bądź widoczny dla łodzi i omijaj zatłoczone szlaki żeglugowe.' },
    ],
    related: [
      { label: 'Wyposażenie bezpieczeństwa na naszych platformach', href: '/products' },
      { label: 'Kontrola jakości w produkcji', href: '/quality' },
      { label: 'Wybierz swoją pierwszą deskę', href: '/guides/how-to-choose-your-sup' },
    ],
  },
  {
    slug: 'choosing-a-sup-oem-factory',
    title: 'Jak wybrać fabrykę OEM desek SUP na zamówienie',
    intro: [
      'Zakup nadmuchiwanych desek SUP pod własną marką sprowadza się do jednej decyzji: którą fabryce powierzysz pierwszą partię. Oto jak ocenić producenta desek SUP na zamówienie, zanim wyślesz zamówienie (PO).',
    ],
    sections: [
      {
        title: 'Zacznij od zamówienia próbnego, a nie od rozmów o MOQ',
        body: 'Fabryka, która mówi tylko o wielkościach minimalnych, to znak biura handlowego, a nie zakładu. Prawdziwi producenci oferują progi minimalne — współbranding od 5–10 sztuk, serie pilotażowe od 20–50 sztuk, produkcję seryjną od 90–100+ sztuk na rolce 150 m, a projekty z w pełni własną formą realizowane są w wolumenie seryjnym. Najpierw zamów małą partię: sprawdzi komunikację, rygorystyczność specyfikacji i jakość próbek, nie stawiając na szansę całego debiutu.',
      },
      {
        title: 'Sprawdź, co naprawdę dzieje się na miejscu',
        body: 'Produkcja drop-stitch SUP ma cztery rdzenione etapy: laminowanie materiału, zgrzewanie, nadruk i montaż. Prawdziwa fabryka robi wszystko pod jednym dachem i pozwala Ci zajrzeć na halę. Jeśli handlowiec nie potrafi pokazać linii produkcyjnej, z dużym prawdopodobieństwem kupujesz przez pośrednika bez kontroli nad jakością ani terminami.',
      },
      {
        title: 'Próbka musi odpowiadać produkcji seryjnej',
        body: 'Ręcznie wykończona próbka to łatwość; powtarzalna produkcja seryjna to trudność. Zapytaj, jak fabryka kontroluje powtarzalność: zapisy partii materiałowych, parametry zgrzewania i listę kontrolną QC stosowaną przy każdej pojedynczej desce — nie tylko przy tej, którą zatwierdzasz.',
      },
      {
        title: 'Poznaj koszty przed wysłaniem PO',
        body: 'Uzyskaj pełny obraz kosztów na piśmie: cenę jednostkową zależną od ilości, koszty narzędzi lub formy, jeśli chcesz nowy kształt, przygotowanie plików graficznych i nadruku oraz opakowanie.',
      },
      {
        title: 'Poproś o inspekcję zewnętrzną',
        body: 'Porządne fabryki OEM SUP z zadowoleniem przyjmują inspekcje przedwysyłkowe — wiele marek rezerwuje niezależną inspekcję QC na każdy kontener. Potwierdź, że fabryka może zorganizować inspekcje próbek i serii produkcyjnych oraz że jednostki odrzucone (na przykład deski tracące ponad 5% ciśnienia) są wyłączane z partii.',
      },
      {
        title: 'Terminy, które się dotrzymują',
        body: 'W przypadku nadmuchiwanych desek SUP planuj próbki w 7–12 dni, a produkcję seryjną w 25–35 dni od potwierdzonego PO i zaliczki, plus czas na narzędzia przy zamawianiu nowej formy. Fabryka podająca znacznie krótsze terminy niż wszyscy inni cytuje z broszury, a nie z harmonogramu.',
      },
    ],
    faqs: [
      { q: 'Jaka jest minimalna ilość zamówienia desek SUP na zamówienie?', a: 'Progi minimalne są standardem: 1–2 szt. na próbki, 5–10 szt. przy współbrandingu, 20–50 szt. na serię pilotażową oraz 90–100+ szt. na rolce 150 m dla standardowego wolumenu; projekty z w pełni własną formą realizowane są w wolumenie seryjnym.' },
      { q: 'Czy mogę zobaczyć próbkę przed produkcją seryjną?', a: 'Tak — próbki są gotowe w 7–12 dni. Większość fabryk zalicza koszty próbek i formy na poczet pierwszego zamówienia produkcyjnego, gdy zostanie ono potwierdzone.' },
      { q: 'Jak zweryfikować, że fabryka SUP jest prawdziwa?', a: 'Poproś o transmisję na żywo z hali produkcyjnej, sprawdź, czy fabryka ma czynny adres w Qingdao lub innym centrum przemysłowym, i poproś o dokumentację wcześniejszych zamówień eksportowych. Zamówienie próbne jest ostatecznym dowodem.' },
      { q: 'Co powinna zawierać wycena od fabryki SUP?', a: 'Cenę jednostkową za deskę, koszty narzędzi lub formy, przygotowanie plików graficznych, opakowanie, warunki QC i inspekcji oraz warunki płatności.' },
    ],
    related: [
      { label: 'Nasza produkcja OEM / ODM', href: '/oem-manufacturing' },
      { label: 'Proces rozwoju produktu SUP', href: '/product-development' },
      { label: 'Możliwości fabryki i zakład', href: '/factory' },
      { label: 'Jak kontrolujemy jakość — 7 punktów kontroli', href: '/quality' },
      { label: 'Przewodnik po MOQ i elastycznym brandingu (PDF)', href: '/oem-moq-guide' },
      { label: 'Zweryfikuj nas: zaufanie i gwarancje fabryki', href: '/oem-trust-assurance' },
      { label: 'Rozpocznij projekt SUP na zamówienie', href: '/contact' },
    ],
  },
  {
    slug: 'private-label-sup-guide',
    title: 'SUP pod własną marką: co naprawdę dostajesz od fabryki',
    intro: [
      'Własna marka to najszybsza droga do uruchomienia marki SUP: Twoje logo na sprawdzonej platformie, bez kosztów i ryzyka projektowania deski od zera. Oto, co naprawdę obejmuje współpraca z producentem desek SUP na zamówienie.',
    ],
    sections: [
      {
        title: 'Własna marka oznacza sprawdzone platformy',
        body: 'Wychodzisz z platform, które fabryka już buduje i testuje — allround, touring, yoga, wyścigowe i inne. Fabryka dostosowuje branding, grafikę i wykończenie, co utrzymuje koszty niskie, a terminy krótkie. Progi minimalne są stopniowe: współbranding od 5–10 sztuk, serie pilotażowe od 20–50 sztuk oraz 90–100+ sztuk na rolce 150 m dla standardowego wolumenu pod własną marką.',
      },
      {
        title: 'Branding wykracza poza logo',
        body: 'Własna marka obejmuje nadruk Twojego logo (cyfrowy lub sitowy), dedykowane kolory, dywany EVA o wykroju z Twoim logo, branding akcesoriów (wiosło, pompka, smycz), projekt opakowań detalicznych, a nawet ekspozytory punktów sprzedaży. Prześlij pliki, a fabryka przygotuje próbę wizualną przed produkcją.',
      },
      {
        title: 'Co robi fabryka za Ciebie',
        body: 'Fabryka SUP oferująca pełny zakres obsługuje przygotowanie plików graficznych, zakup materiałów, produkcję próbek, 100-punktową listę kontrolną QC montażu, próby ciśnieniowe i dokumentację eksportową (faktura, lista pakunkowa, świadectwo pochodzenia). Ty oceniasz wzory i zatwierdzasz próbkę — resztą zajmuje się fabryka.',
      },
      {
        title: 'Co jest Twoje: marka, rynek, klient',
        body: 'W modelu pod własną marką fabryka buduje deski, a marka należy do Ciebie. Poważni producenci nie sprzedają własnych desk na Twoim rynku ani nie odsprzedają Twojego projektu innym. Poproś o wyłączność rynkową w wycenie.',
      },
      {
        title: 'Koszty: próbka, forma, przygotowanie plików',
        body: 'Licz się z trzema rodzajami opłat: opłatą za próbkę (7–12 dni), kosztem narzędzi, gdy potrzebna jest nowa forma (próg minimalny zależny od wolumenu), oraz przygotowaniem plików graficznych do druku. Większość fabryk zalicza koszty próbek i formy na poczet pierwszego zamówienia produkcyjnego.',
      },
      {
        title: 'Od PO do gotowej partii',
        body: 'Typowy przebieg produkcji pod własną marką: 30% zaliczki uruchamia produkcję, produkcja partii trwa 25–35 dni od potwierdzonego PO i zaliczki, a rozliczenie salda następuje po odbiorze zatwierdzonej partii. Zaplanuj budżet na cały przebieg już w pierwszym zamówieniu.',
      },
    ],
    faqs: [
      { q: 'Jaka jest minimalna ilość zamówienia desek SUP pod własną marką?', a: 'Współbranding zaczyna się od 5–10 sztuk, serie pilotażowe od 20–50 sztuk, a standardowy wolumen pod własną marką od 90–100+ sztuk na rolce 150 m; projekty z w pełni własną formą realizowane są w wolumenie seryjnym.' },
      { q: 'Czy mogę przesłać własne logo i pliki graficzne?', a: 'Tak — prześlij logo i pliki; fabryka przygotuje próbę wizualną przed produkcją, abyś zatwierdził kolory, rozmieszczenie i wykończenie.' },
      { q: 'Czy mój projekt SUP na zamówienie jest wyłączny dla mojej marki?', a: 'Tak, przy standardowych warunkach własnej marki. Poproś o klauzulę wyłączności w umowie zakupu; fabryki takie jak nasza nie odsprzedają projektu z Twoją marką.' },
      { q: 'Ile trwa zamówienie desek SUP pod własną marką?', a: 'Próbki wysyłane są w 7–12 dni; produkcja partii trwa 25–35 dni od potwierdzonego PO i zaliczki. Zaplanuj 8–12 tygodni na pierwszy pełny przebieg.' },
    ],
    related: [
      { label: 'Rozwiązania SUP pod własną marką', href: '/solutions/private-label-sup' },
      { label: 'Poznaj sprawdzone platformy', href: '/products/all-around' },
      { label: 'Produkcja OEM / ODM', href: '/oem-manufacturing' },
      { label: 'Rozpocznij projekt SUP na zamówienie', href: '/contact' },
    ],
  },
  {
    slug: 'sup-fleet-guide',
    title: 'Zakup flot desek SUP dla wypożyczalni, resortów i klubów',
    intro: [
      'Nabywcy flot potrzebują innych odpowiedzi niż użytkownicy końcowi: trwałości na jeden wypad, standaryzowanych części zamiennych, ilości w skali wolumenowej i dostawcy, który realizuje dostawy sezon po sezonie. Oto, co zaplanować przed zamówieniem pierwszej floty.',
    ],
    sections: [
      {
        title: 'Standaryzuj na jedną lub dwie specyfikacje',
        body: 'Floty działają dzięki standaryzacji: jeden rozmiar deski (zwykle 10\'6"–11\'0" × 32") dla większości gości, jeden trwały pakiet wyposażenia i jeden zestaw części zamiennych. Upraszcza to naprawy, szkolenie personelu, przechowywanie i zamówienia uzupełniające. Powstrzymaj się przed kupowaniem dziesięciu różnych modeli.',
      },
      {
        title: 'Deski o podwyższonym obciążeniu to inny produkt',
        body: 'Deska do wypożyczalni pracuje przez dziesiątki wypraw w sezonie. Określ grubsze warstwy PVC, wzmocnione listwy krawędziowe i cięższe akcesoria w porównaniu z deskami detalicznymi. Zapytaj fabrykę, jak specyfikacja flotowa różni się od wersji konsumenckiej — prawdziwe zakłady mają obie.',
      },
      {
        title: 'Dostosuj ilości do popytu',
        body: 'Oblicz wielkość floty na podstawie dziennej rotacji i długości sezonu: 20–30 desek obsługuje małą wypożyczalnię, ponad 100 — zajęty resort lub klub. Poproś fabrykę o zalecenia ilościowe dopasowane do Twojego wzorca popytu.',
      },
      {
        title: 'Kup części zamienne razem z flotą',
        body: 'Zamów zawory zapasowe, zestawy naprawcze, pompki, smycze i wiosła w ramach tego samego PO — teraz kosztują niewiele za sztukę, a w trakcie sezonu trudno je zdobyć. Poproś fabrykę o zalecany udział części zamiennych (zwykle 5–10% wielkości floty przy materiałach eksploatacyjnych).',
      },
      {
        title: 'Zamawiaj przed sezonem, nie w jego trakcie',
        body: 'Produkcja trwa 25–35 dni od potwierdzonego PO i zaliczki. Aby deski znalazły się na plaży do wiosny, potwierdź zamówienia późną jesienią, tak aby produkcja zakończyła się przed sezonem.',
      },
      {
        title: 'Oznacz flotę pod kątem wartości odsprzedaży',
        body: 'Deski flotowe mogą nieść Twoje logo, system numeracji wynajmów i kodowanie kolorami ze względu na rozmiar. Sitowe nadruki logo przy seriach od 200+ sztuk są opłacalne, a oznakowana flota działa jednocześnie jako marketing na wodzie.',
      },
    ],
    faqs: [
      { q: 'Jaka jest najlepsza deska SUP do floty wypożyczalni?', a: 'Deska allround 10\'6"–11\'0" × 32" o wzmocnionej konstrukcji to branżowy standard — stabilna dla początkujących, trwała przy codziennym użytkowaniu i łatwa w serwisie.' },
      { q: 'Ile desek potrzebuje wypożyczalnia?', a: 'Dla małej wypożyczalni planuj 20–30 desek, skalując zależnie od rotacji: ponad 100 sztuk dla zajętych resortów i klubów. Części zamienne powinny stanowić 5–10% wielkości floty.' },
      { q: 'Czy deski flotowe mogą mieć nasze logo?', a: 'Tak — nadruki sitowe logo, numeracja wynajmów i pokłady w różnych kolorach to standardowe opcje dostosowania, szczególnie opłacalne od 200 sztuk.' },
      { q: 'Ile trwa zamówienie floty?', a: 'Próbki w 7–12 dni, produkcja w 25–35 dni od potwierdzonego PO i zaliczki — dlatego zamówienia flotowe składaj znacznie przed rozpoczęciem sezonu.' },
    ],
    related: [
      { label: 'Rozwiązania dla resortów i klubów', href: '/solutions/resort-sup' },
      { label: 'Studium przypadku: flota wypożyczalni w wielu lokalizacjach', href: '/projects/rental-fleet-multi-site' },
      { label: 'Platformy dla flot', href: '/products/all-around' },
      { label: 'Porozmawiaj ze specjalistą ds. projektów', href: '/contact' },
    ],
  },
]

export const GUIDES_DA: Guide[] = [
  {
    slug: 'how-to-choose-your-sup',
    title: 'Sådan vælger du dit SUP-bræt',
    intro: [
      'Valget af dit første oppustelige SUP-bræt handler om størrelse, bredde, konstruktion og hvad der er i kassen. Her er det, der betyder noget, i klare ord.',
    ],
    sections: [
      {
        title: 'Længde og volumen',
        body: 'Længere bræt (11–12 ft) glider længere pr. tag og holder kursen bedre — ideelle til touring og padling over længere distancer. Kortere bræt er nemmere at dreje. For de fleste ryttere er et allround-bræt på 10\'6"–11\'0" det bedste valg.',
      },
      {
        title: 'Bredde og stabilitet',
        body: 'Bredden påvirker stabiliteten mere end alt andet. Et dæk på 32 tommer er tilgivende for begyndere og stabilt nok til yoga; 30-tommers bræt passer til lettere eller mere erfarne pagajere, der værdsætter fart og smidighed.',
      },
      {
        title: 'Konstruktionskvalitet',
        body: 'Se efter en drop-stitch-kerne i PVC i militærkvalitet med et arbejdstryk på mindst 15 PSI, dobbeltlamineret PVC og forstærkede kantlister. Det er dem, der afgør brættets stivhed, og hvor længe det holder ved daglig brug.',
      },
      {
        title: 'Hvad der skal være med i kassen',
        body: 'Et komplet sæt sparer både penge og besvær: bræt, 3-delt justerbart pagaj, tovejs pumpe med manometer, spiral-leash, finne eller finner, rygsæk og reparationssæt.',
      },
    ],
    faqs: [
      { q: 'Hvilken størrelse SUP-bræt har jeg brug for?', a: 'De fleste begyndere vælger et allround-bræt på cirka 11\'0" × 32" × 6" — stabilt, alsidigt og nemt at transportere. Tungere brugere eller planer om længere ture bør vælge en større størrelse.' },
      { q: 'Er et oppusteligt SUP-bræt lige så stift som et hårdt bræt?', a: 'Et moderne drop-stitch-bræt ved 15–20 PSI er næsten lige så stift som et hårdt bræt på begynderniveau — med den fordel, at det passer i en rygsæk.' },
    ],
    related: [
      { label: 'Se vores SUP-platforme', href: '/products' },
      { label: 'Oppusteligt vs. hårdt bræt', href: '/inflatable-vs-hardboard' },
      { label: 'OEM-produktion', href: '/oem-manufacturing' },
    ],
  },
  {
    slug: 'beginner-guide',
    title: 'Begynderguide i padling',
    intro: [
      'Alt du skal bruge til dine første ture på vandet: oppustning, den første gang du står op, det grundlæggende pagajtag, og hvordan du holder dig sikker, mens du bliver tryg.',
    ],
    sections: [
      {
        title: 'Pump til den angivne værdi, ikke til følelsen',
        body: 'Pump til det angivne tryk (normalt 15 PSI) med manometeret på pumpen. Et bræt på 10 PSI føles fint på græsset, men bøjer kraftigt på vandet. Tjek trykket på varme dage — solen opvarmer luften indeni, og trykket stiger.',
      },
      {
        title: 'De første skridt på brættet',
        body: 'Start fra stranden eller et lavt indgangspunkt: begiv med at knæle og rejst dig så med en fod ad gangen over brættets midtlinje. Sæt fødderne i skulderbredde, hold knæene bløde, og se mod horisonten — brættet følger dit blik.',
      },
      {
        title: 'Det grundlæggende pagajtag',
        body: 'Ræk pagajet frem, sænk bladet helt under og træk det langs brættets kant, mens du roterer overkroppen. Skift side efter nogle få tag for at holde kursen; nogle få tag på en side får dig til at dreje.',
      },
      {
        title: 'Træn på at falde først',
        body: 'At lande i vandet er en del af indlæringen. Øv dig i at komme op på brættet i lavt vand: svøm til håndtaget midt på brættet, spark med fødderne til overfladen, og træk dig op med et greb.',
      },
    ],
    faqs: [
      { q: 'Hvor lang tid tager det at lære SUP?', a: 'De fleste kan pagaje komfortabelt på fladt vand inden for den første time. Tryghed i sving, vind og på længere distancer bygger du op gennem flere ture.' },
      { q: 'Skal jeg være i god form?', a: 'Nej — SUP er meget tilgængeligt. Balance, kernekræfter og udholdenhed bygger du naturligt gennem regelmæssig padling.' },
    ],
  },
  {
    slug: 'inflatable-vs-hard',
    title: 'Oppusteligt vs. hårdt bræt',
    intro: [
      'De to konstruktionsfamilier vinder i hver deres situation. Her er den ærlige sammenligning til rekreative pagajere, klubber og udlejningsvirksomheder.',
    ],
    sections: [
      {
        title: 'Portabilitet og opbevaring',
        body: 'Oppustelige bræt tømmes for luft og pakkes i en rygsæk, der passer i bilens bagagekurv, en campingvogn eller et skab derhjemme — og er standardvalget på rejser. Hårde bræt kræver tagboks, opbevaringsplads og forsigtigere håndtering.',
      },
      {
        title: 'Stivhed og ydeevne',
        body: 'Premium-hårde bræt er stivere og mere responsive på højt ydeevneniveau. Ved rekreative hastigheder giver et velbygget drop-stitch-bræt ved 15–20 PSI sammenlignelige resultater til en brøkdel af opbevaringsomkostningerne.',
      },
      {
        title: 'Holdbarhed',
        body: 'Oppustelige PVC-bræt tåler skrab mod broer og stød mod kanten, der ville sprænge en hård overflade — en vigtig grund til, at udlejningsflåder og resorter vælger oppustelige bræt til dagligt gæstebrug.',
      },
      {
        title: 'Samlet ejeromkostning',
        body: 'Oppustelige bræt er billigere at sende, opbevare og vedligeholde, og de tåler hårdere håndtering. For de fleste brugere og flåder er et oppusteligt bræt det bedre allround-valg.',
      },
    ],
    faqs: [
      { q: 'Hvad er bedst til begyndere?', a: 'Oppustelige bræt — stabile, tilgivende, nemme at opbevare og holdbare nok til de skrab, begyndere får.' },
      { q: 'Kan et oppusteligt SUP være lige så hurtigt som et hårdt bræt?', a: 'Ved rekreative hastigheder er forskellen lille. Hårde bræt vinder tydeligt kun i kap og krævende ydeevnescenarier.' },
    ],
  },
  {
    slug: 'safety-tips',
    title: 'Sikkerhed på vandet',
    intro: [
      'En sikker tur er en god tur. Denne grundviden gælder lige så vel søer, åer som kystpadling.',
    ],
    sections: [
      {
        title: 'Tjek vind og vejrudsigt',
        body: 'Vind fra land er den klassiske SUP-fælde: den fører dig hurtigere væk fra kysten, end du kan ro tilbage. Tjek vejrudsigten, og bliv på vandet i læ, når du er i tvivl.',
      },
      {
        title: 'Bær altid leash',
        body: 'En spiral-leash holder brættet inden for rækkevidde, hvis du falder i vandet — brættet er din redningsflåde. Vælg leash efter forholdene: spiral på stille vand, lige leash til surfing.',
      },
      {
        title: 'Redningsvest og personlig sikkerhed',
        body: 'Bær redningsvest, når forholdene kræver det, eller når reglerne påbyder det. Tag en fløjte med, fortæl nogen din rute og planlagte hjemkomsttid, og overvej en telefon i en vandtæt holder.',
      },
      {
        title: 'Kend dine evner',
        body: 'Få erfaring på fladt vand, inden du sejler ud i vind eller strøm. Respekter koldt vand — det tager hurtigt kræfter. Og pagaj aldrig alene i afsides eller åbent vand uden en plan.',
      },
    ],
    faqs: [
      { q: 'Skal jeg have redningsvest på et SUP-bræt?', a: 'Kravene varierer fra land til land og fra vandområde til vandområde. Selv hvor vesten er valgfri, er leash plus vest det ansvarlige minimum, og børn bør altid have en korrekt tilpasset vest.' },
      { q: 'Er det sikkert at pagaje på en sø?', a: 'Ja — stille søer er ideelle til at lære. Tjek vindretningen, vær synlig for bådtrafik, og undgå trafikerede sejlruter.' },
    ],
    related: [
      { label: 'Sikkerhedsudstyr på vores platforme', href: '/products' },
      { label: 'Kvalitetskontrol i fabrikken', href: '/quality' },
      { label: 'Vælg dit første bræt', href: '/guides/how-to-choose-your-sup' },
    ],
  },
  {
    slug: 'choosing-a-sup-oem-factory',
    title: 'Sådan vælger du en OEM-fabrik til specialfremstillede SUP-bræt',
    intro: [
      'At købe oppustelige SUP-bræt under dit eget mærke handler om en beslutning: hvilken fabrik betror du din første batch til. Her er vurderingen af en leverandør af specialfremstillede SUP-bræt, før du sender din ordre.',
    ],
    sections: [
      {
        title: 'Start med en prøveordre, ikke med en diskussion om minimumsordre',
        body: 'En fabrik, der kun taler om minimumsordrer, er et tegn på et salgskontor, ikke en fabrik. Reelle producenter arbejder med trinstyrede minimumsordrer — co-branding fra 5–10 stk, pilotpartier fra 20–50 stk, standardvolumen fra 90–100+ stk pr. 150 m rulle, og projekter med en helt egen form kører i serieproduktion. Bestil en lille batch først: den afprøver kommunikation, specifikationstolerancer og prøvekvalitet, uden at du satser hele din lancering.',
      },
      {
        title: 'Se, hvad der faktisk sker på stedet',
        body: 'Drop-stitch-produktion af SUP har fire kernetrin: laminering af materialet, højfrekvenssvejsning, tryk og montering. En rigtig fabrik laverer det hele under et tag og giver dig adgang til hallen. Hvis sælgeren ikke kan vise produktionslinjen, køber du med stor sandsynlighed gennem en mellemand uden kontrol over kvalitet eller leveringstid.',
      },
      {
        title: 'Prøven skal svare til serieproduktionen',
        body: 'En håndlavet prøve er let; ensartet serieproduktion er svært. Spørg, hvordan fabrikken sikrer repeterbarhed: registrering af materialebatcher, svejseparametre og den QC-kontrolliste, der kører på hvert enkelt bræt — ikke kun på det, du godkender.',
      },
      {
        title: 'Kend omkostningerne, før du sender ordren',
        body: 'Få det fulde omkostningsbillede skriftligt: enhedspris afhængigt af antal, værktøjs- eller formomkostninger, hvis du vil have en ny form, klargøring af grafiske filer og tryk samt emballage.',
      },
      {
        title: 'Bed om en tredjepartsinspektion',
        body: 'Seriøse OEM-fabrikker for SUP modtager gerne inspektion før afsendelse — mange mærker reserverer en uafhængig QC-inspektion pr. container. Bekræft, at fabrikken kan arrangere inspektion af prøver og serier, og at kasserede enheder (for eksempel bræt, der mister over 5 % af trykket) sorteres fra partiet.',
      },
      {
        title: 'Leveringstider, der holder',
        body: 'Planlæg prøver på 7–12 dage og serieproduktion på 25–35 dage fra bekræftet ordre og depositum, plus værktøjstid ved bestilling af en ny form. En fabrik, der oplyser markant kortere leveringstider end alle andre, citerer en brochure og ikke en tidsplan.',
      },
    ],
    faqs: [
      { q: 'Hvad er minimumsordren for specialfremstillede SUP-bræt?', a: 'Trinstyrede minimumsordrer er standarden: 1–2 stk til prøver, 5–10 stk ved co-branding, 20–50 stk til et pilotparti og 90–100+ stk pr. 150 m rulle til standardvolumen; projekter med en helt egen form kører i serieproduktion.' },
      { q: 'Kan jeg se en prøve før serieproduktionen?', a: 'Ja — prøver er klar på 7–12 dage. De fleste fabrikker trækker prøve- og formomkostningerne fra din første produktionsordre, når den bekræftes.' },
      { q: 'Hvordan verificerer jeg, at en SUP-fabrik er reel?', a: 'Bed om en live-visning af produktionshallen, kontroller, at fabrikken har en aktiv adresse i Qingdao eller et andet industrielt centrum, og bed om dokumentation fra tidligere eksportordrer. En prøveordre er det endelige bevis.' },
      { q: 'Hvad skal et tilbud fra en SUP-fabrik indeholde?', a: 'Enhedspris pr. bræt, værktøjs- eller formomkostninger, klargøring af grafiske filer, emballage, vilkår for QC og inspektion samt betalingsbetingelser.' },
    ],
    related: [
      { label: 'Vores OEM-/ODM-produktion', href: '/oem-manufacturing' },
      { label: 'Processen for udvikling af SUP-produkter', href: '/product-development' },
      { label: 'Fabrikkens kapacitet og faciliteter', href: '/factory' },
      { label: 'Sådan kontrollerer vi kvaliteten — 7 kontrolpunkter', href: '/quality' },
      { label: 'Guide til minimumsordre og fleksibelt branding (PDF)', href: '/oem-moq-guide' },
      { label: 'Verificer os: tillid og fabrikgarantier', href: '/oem-trust-assurance' },
      { label: 'Start et specialfremstillet SUP-projekt', href: '/contact' },
    ],
  },
  {
    slug: 'private-label-sup-guide',
    title: 'SUP under eget mærke: hvad du reelt får hos fabrikken',
    intro: [
      'Eget mærke er den hurtigste vej til at lancere et SUP-mærke: dit logo på en afprøvet platform, uden omkostningerne og risikoen ved at designe et bræt fra bunden. Her er, hvad et samarbejde med en leverandør af specialfremstillede SUP-bræt reelt indebærer.',
    ],
    sections: [
      {
        title: 'Eget mærke betyder afprøvede platforme',
        body: 'Du bygger videre på platforme, som fabrikken allerede bygger og tester — allround, touring, yoga, racing med mere. Fabrikken tilpasser branding, grafik og finish, hvilket holder omkostningerne lave og leveringstiderne korte. Minimumsordrerne er trinstyrede: co-branding fra 5–10 stk, pilotpartier fra 20–50 stk og 90–100+ stk pr. 150 m rulle til standardvolumen under eget mærke.',
      },
      {
        title: 'Branding går længere end logoet',
        body: 'Eget mærke omfatter tryk af dit logo (digitalt eller silketryk), egne farver, EVA-måtter i dit logo, branding af tilbehør (pagaj, pumpe, leash), design af detailemballage og endda salgsstånd. Send filerne, så udarbejder fabrikken en visuel korrektur før produktionen.',
      },
      {
        title: 'Hvad fabrikken håndterer for dig',
        body: 'En fuldservice-SUP-fabrik står for klargøring af grafiske filer, materialindkøb, prøveproduktion, en QC-kontrolliste på 100 punkter for montagen, trykprøvninger og eksportdokumentation (faktura, pakliste, oprindelsesbevis). Du vurderer korrekturerne og godkender prøven — resten kører fabrikken.',
      },
      {
        title: 'Hvad der er dit: mærke, marked, kunde',
        body: 'I modellen med eget mærke bygger fabrikken brættet, men mærket er dit. Seriøse producenter sælger ikke deres egne bræt på dit marked eller videresælger dit design til andre. Bed om markeds eksklusivitet i tilbuddet.',
      },
      {
        title: 'Omkostninger: prøve, form, klargøring af filer',
        body: 'Regn med tre typer gebyrer: prøvegebyret (7–12 dage), værktøjsomkostningen, når der skal bruges en ny form (minimumsordren afhænger af volumen), samt klargøring af grafiske filer til tryk. De fleste fabrikker trækker prøve- og formomkostningerne fra den første produktionsordre.',
      },
      {
        title: 'Fra ordre til færdig batch',
        body: 'Det typiske forløb under eget mærke: 30 % depositum sætter produktionen i gang, batchproduktionen afsluttes på 25–35 dage fra bekræftet ordre og depositum, og restbeløbet afregnes, når den godkendte batch er modtaget. Budgetter hele forløbet allerede ved din første ordre.',
      },
    ],
    faqs: [
      { q: 'Hvad er minimumsordren for SUP-bræt under eget mærke?', a: 'Co-branding kører fra 5–10 stk, pilotpartier fra 20–50 stk og standardvolumen under eget mærke fra 90–100+ stk pr. 150 m rulle; projekter med en helt egen form kører i serieproduktion.' },
      { q: 'Kan jeg sende mit eget logo og mine egne grafiske filer?', a: 'Ja — send logo og filer; fabrikken udarbejder en visuel korrektur før produktionen, så du kan godkende farver, placering og finish.' },
      { q: 'Er mit specialfremstillede SUP-design eksklusivt for mit mærke?', a: 'Ja, under standardbetingelser for eget mærke. Bed om en eksklusivitetsklausul i din købsaftale; fabrikker som vores videresælger ikke et design med dit mærke.' },
      { q: 'Hvor lang tid tager en ordre af SUP-bræt under eget mærke?', a: 'Prøver sendes på 7–12 dage; batchproduktionen afsluttes på 25–35 dage fra bekræftet ordre og depositum. Budgetter 8–12 uger til det første fulde forløb.' },
    ],
    related: [
      { label: 'Løsninger for SUP under eget mærke', href: '/solutions/private-label-sup' },
      { label: 'Se de afprøvede platforme', href: '/products/all-around' },
      { label: 'OEM-/ODM-produktion', href: '/oem-manufacturing' },
      { label: 'Start et specialfremstillet SUP-projekt', href: '/contact' },
    ],
  },
  {
    slug: 'sup-fleet-guide',
    title: 'Køb af SUP-flåder til udlejning, resorter og klubber',
    intro: [
      'Flådekøbere har brug for andre svar end slutbrugere: holdbarhed pr. tur, standardiserede reservedele, mængder i størrelsesordenen og en leverandør, der leverer sæson efter sæson. Her er, hvad du skal planlægge, før du bestiller din første flåde.',
    ],
    sections: [
      {
        title: 'Standardiser på en eller to specifikationer',
        body: 'Flådedrift bygger på standardisering: en brætstørrelse (normalt 10\'6"–11\'0" × 32") til de fleste gæster, en holdbar udstyrspakke og et sæt reservedele. Det gør reparationer, oplæring af personale, opbevaring og genbestilling enklere. Hold dig fra at købe ti forskellige modeller.',
      },
      {
        title: 'Bræt til tungt brug er et andet produkt',
        body: 'Et udlejringsbræt arbejder gennem snesevis af ture pr. sæson. Angiv tykkere PVC-lag, forstærkede kantlister og tungere tilbehør sammenlignet med detailbræt. Spørg fabrikken, hvordan flådespecifikationen adskiller sig fra forbrugerudgaven — en reel fabrik har begge dele.',
      },
      {
        title: 'Tilpas antallet til efterspørgslen',
        body: 'Beregn flådens størrelse ud fra den daglige omsætning og sæsonens længde: 20–30 bræt dækker en mindre udlejning, over 100 et travlt resort eller en klub. Bed fabrikken om anbefalinger tilpasset dit efterspørgselsmønster.',
      },
      {
        title: 'Køb reservedele sammen med flåden',
        body: 'Bestil reserveventiler, reparationssæt, pumper, leash og pagaj inden for samme ordre — nu koster de næsten intet pr. stk, og i løbet af sæsonen er de svære at få fat i. Bed fabrikken om en anbefalet andel reservedele (normalt 5–10 % af flådens størrelse til forbrugsvarer).',
      },
      {
        title: 'Bestil mod sæsonen, ikke under den',
        body: 'Produktionen kører 25–35 dage fra bekræftet ordre og depositum. For at brættene skal ligge på stranden til foråret, bekræfter du ordrerne i det sene efterår, så produktionen lander før sæsonen.',
      },
      {
        title: 'Mærk flåden for værdi ved videresalg',
        body: 'Flådebræt kan bære dit logo, et nummereringssystem til udlejning og farvekode efter størrelse. Silketryk af logo på serier fra 200+ stk er omkostningseffektivt, og en mærket flåde er samtidig markedsføring på vandet.',
      },
    ],
    faqs: [
      { q: 'Hvad er det bedste SUP til en udlejningsflåde?', a: 'Et forstærket allround-bræt på 10\'6"–11\'0" × 32" er branchestandarden — stabilt for begyndere, holdbart ved daglig brug og let at servicere.' },
      { q: 'Hvor mange bræt har en udlejningsvirksomhed brug for?', a: 'Planlæg 20–30 bræt til en mindre udlejning, og skaler efter omsætningen: over 100 stk til travle resorter og klubber. Reservedele bør udgøre 5–10 % af flådens størrelse.' },
      { q: 'Kan flådebræt have vores logo?', a: 'Ja — silketryk af logo, udlejningsnumre og farvekodede dæk er almindelige tilpasninger, især omkostningseffektive fra 200 stk.' },
      { q: 'Hvor lang tid tager en flådeordre?', a: 'Prøver på 7–12 dage, produktion på 25–35 dage fra bekræftet ordre og depositum — derfor skal flådeordrer afgives lang tid før sæsonen starter.' },
    ],
    related: [
      { label: 'Løsninger til resorter og klubber', href: '/solutions/resort-sup' },
      { label: 'Case study: udlejningsflåde på flere lokationer', href: '/projects/rental-fleet-multi-site' },
      { label: 'Platforme til flåder', href: '/products/all-around' },
      { label: 'Tal med en projektspecialist', href: '/contact' },
    ],
  },
]

export const GUIDES_FI: Guide[] = [
  {
    slug: 'how-to-choose-your-sup',
    title: 'Näin valitset SUP-lautasi',
    intro: [
      'Ensimmäisen puhallettavan SUP-lautasi valinta ratkeaa laudan koon, leveyden, rakenteen ja pakkaussisällön kautta. Tässä on, millä on oikeasti merkitystä — selkein sanoin.',
    ],
    sections: [
      {
        title: 'Pituus ja tilavuus',
        body: 'Pidemmät laudat (11–12 jalkaa) liukuvat kauemmas yhdellä veto-iskulla ja kulkevat suoremmin — ihanteellisia touring-melontaan ja pitkille matkoille. Lyhyemmät laudat kääntyvät helpommin. Useimmille melojille paras valinta on allround-lauta noin 10′6″–11′0″.',
      },
      {
        title: 'Leveys ja vakaus',
        body: 'Leveys vaikuttaa vakauteen enemmän kuin mikään muu tekijä. 32 tuuman kansi on anteeksiantava aloittelijalle ja tarpeeksi vakaa joogaan; 30 tuuman laudat sopivat kevyemmille tai kokeneemmille melojille, jotka arvostavat nopeutta ja ketteryyttä.',
      },
      {
        title: 'Rakenteen laatu',
        body: 'Etsi sotilaskäyttöön tarkoitettua drop-stitch-PVC-ydintä, jonka työpaine on vähintään 15 PSI, kaksoislaminoitua PVC:tä ja vahvistettuja kantisapsoja. Nämä määrittävät laudan jäykkyyden tunteen ja sen, kuinka kauan se kestää päivittäisessä käytössä.',
      },
      {
        title: 'Mitä laatikossa pitää olla',
        body: 'Täydellinen paketti säästää sekä rahaa että vaivaa: lauta, 3-osainen säädettävä mela, kaksitoiminen painemittarilla varustettu pumppu, kela-hihna, evä tai evät, reppute ja korjaussarja.',
      },
    ],
    faqs: [
      { q: 'Minkä kokoinen SUP-lauta minä tarvitsen?', a: 'Useimmat aloittelijat valitsevat allround-laudan, joka on noin 11′0″ × 32″ × 6″ — vakaa, monikäyttöinen ja helppo kuljettaa. Raskaammat melojat tai pidemmän matkan tavoittelijat kannattaa valita isompi koko.' },
      { q: 'Onko puhallettava SUP-lauta yhtä jäykkä kuin kovalauta?', a: 'Moderni drop-stitch-lauta 15–20 PSI:n paineella on lähes yhtä jäykkä kuin aloittelutason kovalauta — ja se mahtuu repputeun.' },
    ],
    related: [
      { label: 'Selaa SUP-alustojamme', href: '/fi/products' },
      { label: 'Puhallettava vai kovalauta', href: '/fi/inflatable-vs-hardboard' },
      { label: 'OEM-tuotanto', href: '/fi/oem-manufacturing' },
    ],
  },
  {
    slug: 'beginner-guide',
    title: 'Aloittelijan opas melontaan',
    intro: [
      'Kaikki, mitä tarvitset ensimmäisiin vetoihisi vedellä: täyttäminen, ensimmäinen koho kantaan, perusmelontateko ja se, miten pidät huolta turvallisuudesta rohentuessasi.',
    ],
    sections: [
      {
        title: 'Täytä ilma paineeseen, ei tunteeseen',
        body: 'Täytä lauta ilmoitettuun paineeseen (normaalisti 15 PSI) pumpun painemittarilla. 10 PSI:n paineessa lauta tuntuu hyvältä nurmikolla, mutta taipuu voimakkaasti vedellä. Tarkista paine lämpiminä päivinä — aurinko lämmittää sisällä olevaa ilmaa ja paine nousee.',
      },
      {
        title: 'Ensimmäiset askeleet laudalla',
        body: 'Lähde liikkeelle rannalta tai matalasta lähtöpaikasta: aloita polvistuen ja nouse jalat toinen kerrallaan laudan keskilinjan yli. Pidä jalat hartian levyisinä, polvet rentoina ja katso horisonttiin — lauta seuraa katsetasi.',
      },
      {
        title: 'Perusmelontateko',
        body: 'Ojenna mela eteenpäin, upota kärki kokonaan veteen ja vedä se laudan reunaa pitkin samalla kun käännät vartaloasi. Vaihda puolta muutaman vedon välein, jotta kulkusuunta säilyy; muutama veto yhdellä puolella kääntää suuntaa.',
      },
      {
        title: 'Harjoittele putoamista ensin',
        body: 'Veteen kaatuminen kuuluu oppimiseen. Harjoittele uudelleen nousua matalassa vedessä: uinu keskikkahvaan, potkaise jalkasi pinnalle ja vedä itsesi laudalle yhdellä liikkeellä.',
      },
    ],
    faqs: [
      { q: 'Minkä kauan SUP-melonnan opiskelu kestää?', a: 'Useimmat voivat meloa miellyttävästi tasaisella vedellä jo ensimmäisen tunnin aikana. Varmuus käänteissä, tuulessa ja pitemmillä matkoilla syntyy muutaman harjoittelukerran myötä.' },
      { q: 'Täytyykö minun olla hyväkuntoinen?', a: 'Ei — SUP on erittäin helposti lähestettävä laji. Tasapaino, keskivartalon voima ja kestävyys kehittyvät luonnostaan säännöllisen melonnan myötä.' },
    ],
  },
  {
    slug: 'inflatable-vs-hard',
    title: 'Puhallettava vai kovalauta',
    intro: [
      'Nämä kaksi rakennetyyppää voittavat kummallakin omassa tilanteessaan. Tässä on rehellinen vertailu virkistymelajille, seuroille ja vuokrausyrityksille.',
    ],
    sections: [
      {
        title: 'Kuljetettavuus ja säilytys',
        body: 'Puhallettavat laudat tyhjennetään ilmasta ja pakataan repputeun, joka sopii auton tavaratilaan, matkailuautoon tai kotikaappiin — ja ne ovat oletusvalinta matkailuun. Kovalaudat vaativat kattotelineen, säilytystilaa ja huolellisempaa käsittelyä.',
      },
      {
        title: 'Jäykkyys ja suorituskyky',
        body: 'Premium-kovalaudat ovat jäykempiä ja reagoivampia korkealla suorituskykytasolla. Virkistysnopeuksilla hyvin valmistettu drop-stitch-lauta 15–20 PSI:n paineella antaa vastaavan tuloksen murto-osalla säilytyskustannuksista.',
      },
      {
        title: 'Kestävyys',
        body: 'Puhallettavat PVC-laudat sietävät laiturin aiheuttamia naarmuja ja rantaan iskeytymiä, jotka halkaisisivat kovan kuoren — tärkeä syy sille, että vuokrauslaivat ja resortit valitsevat puhallettavat laudat päivittäiseen asiakaskäyttöön.',
      },
      {
        title: 'Omistamisen kokonaiskustannus',
        body: 'Puhallettavien lautojen lähetys, säilytys ja ylläpito maksavat vähemmän, ja ne kestävät kovempaa käsittelyä. Useimmille käyttäjille ja laivoille puhallettava lauta on parempi allround-valinta.',
      },
    ],
    faqs: [
      { q: 'Mikä on parempi aloittelijalle?', a: 'Puhallettavat laudat — vakaita, anteeksiantavia, helposti säilytettäviä ja tarpeeksi kestäviä aloittelijoiden aiheuttamiin naarmuihin.' },
      { q: 'Ollako puhallettava SUP yhtä nopea kuin kovalauta?', a: 'Virkistysnopeuksilla ero on pieni. Kovalaudat voittavat selvästi vain kilpailu- ja suorituskykytilanteissa.' },
    ],
  },
  {
    slug: 'safety-tips',
    title: 'Turvallisuus vedellä',
    intro: [
      'Turvallinen veto on hauska veto. Nämä perusjutut koskevat yhtä hyvin järviä, jokia kuin rannikkovesiäkin.',
    ],
    sections: [
      {
        title: 'Tarkista tuuli ja sääennuste',
        body: 'Tuuli mereltä on klassinen SUP-ansa: se vie sinut kauemmas rannasta kuin pystyt meloen päälle takaisin. Tarkista sääennuste, ja kun olet epävarma, jää suojattuihin vesiin.',
      },
      {
        title: 'Käytä aina hihnaa',
        body: 'Kela-hihna pitää laudan ulottuvilla, jos putoat veteen — lauta on kelluvuusvälineesi. Valitse olosuhteisiin sopiva hihna: kela tyynelle vedelle, suora hihna aalloille.',
      },
      {
        title: 'Pelastusliive ja henkilökohtainen turvallisuus',
        body: 'Käytä kelluntavälinettä, kun olosuhteet tai sääntö sitä vaativat. Ota mukaan puhallin, kerro jollekin reittisi ja suunnittelemaasi paluuaika sekä harkitse puhelinta vedenpitävässä pussissa.',
      },
      {
        title: 'Tunne rajoitteesi',
        body: 'Kerää kokemusta tasaisella vedellä ennen tuulta tai virtaa. Kunnioita kylmää vettä — se syö voimat nopeasti. Älä koskaan melo yksin syrjäisillä tai avoimilla vesialueilla ilman suunnitelmaa.',
      },
    ],
    faqs: [
      { q: 'Tarvitseeko SUP-laudalle pelastusliivin?', a: 'Vaatimukset vaihtelevat maan ja vesialueen mukaan. Vaikka liivi olisi vapaaehtoinen, hihna liivin kanssa on vastuullinen vähimmäisvarustus, ja lasten on aina käytettävä oikean kokoinen liivi.' },
      { q: 'Onko järvellä turvallista meloa SUP:lla?', a: 'On — tyynet järvet ovat ihanteellisia oppimiseen. Tarkista tuulen suunta, pysy näkyvissä veneliikenteelle ja vältä vilkkaita laivaväyliä.' },
    ],
    related: [
      { label: 'Turvallisuusvälineet alustoillamme', href: '/fi/products' },
      { label: 'Laadunvalvonta tehtaalla', href: '/fi/quality' },
      { label: 'Valitse ensimmäinen lauttasi', href: '/fi/guides/how-to-choose-your-sup' },
    ],
  },
  {
    slug: 'choosing-a-sup-oem-factory',
    title: 'Näin valitset räätälöityjen SUP-lautojen OEM-tehtaan',
    intro: [
      'Puhallettavien SUP-lautojen ostaminen omalla merkilläsi on yksi päätös: mille tehtaalle luotat ensimmäisen eräsi. Tässä on, miten arvioit räätälöityjen SUP-lautojen valmistajan ennen kuin lähetät tilauksen.',
    ],
    sections: [
      {
        title: 'Aloita koetilauksella, älä MOQ-keskustelulla',
        body: 'Tehdas, joka puhuu vain minimitilauksista, on merkki kauppapisteestä, ei tehtaasta. Todelliset valmistajat tarjoavat porrastetut minimimäärät — yhteisbrändiys 5–10 kpl:stä, pilottierät 20–50 kpl:stä, vakiomäärät 90–100+ kpl 150 m rullaa kohti, ja täysin oman muodon projektit vakiomäärissä. Tilaa ensin pieni erä: se testaa viestinnän, spesifikaation noudattamisen ja näytteen laadun ilman että panostat koko lanseeraukseesi.',
      },
      {
        title: 'Katso, mitä oikeasti tehdään omassa talossa',
        body: 'Drop-stitch-SUP-tuotannossa on neljä ydintä vaihetta: materiaalin laminointi, hitsaus, painatus ja kokoonpano. Aito tehdas tekee kaiken saman katon alla ja antaa sinun tarkastaa tuotantohallin. Jos myyjä ei voi näyttää tuotantolinjaa, ostat todennäköisesti välittäjän kautta ilman laatua tai toimitusaikaa koskevaa kontrollia.',
      },
      {
        title: 'Näytteen on vastattava massatuotantoa',
        body: 'Käsin viimeistelty näyte on helppo; yhdenmukainen massatuotanto on vaikeaa. Kysy, miten tehdas varmistaa toistettavuuden: materiaalierien kirjaukset, hitsausparametrit ja QC-tarkistuslista, joka ajetaan jokaiselle yksittäiselle laudalle — ei vain hyväksymillesi näytteelle.',
      },
      {
        title: 'Tiedä kustannukset ennen tilausta',
        body: 'Pyydä koko kustannuskuva kirjallisesti: yksikköhinta määrän mukaan, työkalukustannukset tai muotin kustannukset, jos haluat uuden muodon, grafiikan valmistelu ja painatus sekä pakkaus.',
      },
      {
        title: 'Pyydä kolmannen osapuolen tarkastus',
        body: 'Hyvämaineiset OEM-SUP-tehtaat suostuvat ennen lähetystä tehtäviin tarkastuksiin — monet merkit varaavat riippumattoman QC-käynnin per kontti. Varmista, että tehdas voi järjestää tarkastukset näyte- ja tuotantoerille ja että hylätyt yksiköt (esimerkiksi laudat, jotka menettävät yli 5 % paineesta) poistetaan erästä.',
      },
      {
        title: 'Toimitusajat, jotka pitävät',
        body: 'Puhallettavissa SUP-lautoissa odota näytteet 7–12 päivään ja erätuotanto 25–35 päivää vahvistetun tilauksen ja käsirahan jälkeen, plus työkaluaika, kun tilaat uuden muodon. Tehdas, joka lupaa selvästi lyhyemmät ajat kuin kaikki muut, lukee arvot esitteestä eikä aikataulusta.',
      },
    ],
    faqs: [
      { q: 'Mikä on räätälöityjen SUP-lautojen minimitilaus (MOQ)?', a: 'Porrastetut minimimäärät ovat standardi: 1–2 kpl näytteisiin, 5–10 kpl yhteisbrändiykseen, 20–50 kpl pilottierään ja 90–100+ kpl 150 m rullaa kohti vakiomääriä; täysin oman muodon projektit ajetaan vakiomäärissä.' },
      { q: 'Voinko nähdä näytteen ennen massatuotantoa?', a: 'Kyllä — näytteet ovat valmiit 7–12 päivässä. Useimmat tehtaat hyvittävät näyte- ja muottikustannukset ensimmäisestä tuotantotilauksestasi, kun se on vahvistettu.' },
      { q: 'Miten varmistan, että SUP-tehdas on aito?', a: 'Pyydä reaaliaikainen videokatsaus tuotantohallista, tarkista että tehtaalla on toimiva osoite Qingdaossa tai muussa teollisuuskeskuksessa, ja pyydä dokumentteja aiemmista vientitilauksista. Koetilaus on lopullinen todiste.' },
      { q: 'Mitä SUP-tehtaan tarjouksen pitää sisältää?', a: 'Yksikköhinta laudalta, työkalukustannukset tai muottikustannukset, grafiikan valmistelu, pakkaus, QC- ja tarkastusehdot sekä maksuehdot.' },
    ],
    related: [
      { label: 'OEM-/ODM-tuotantomme', href: '/fi/oem-manufacturing' },
      { label: 'SUP-tuotteen kehitysprosessi', href: '/fi/product-development' },
      { label: 'Tehtaan kapasiteetti ja laitos', href: '/fi/factory' },
      { label: 'Näin valvomme laatua — 7 tarkastusporttia', href: '/fi/quality' },
      { label: 'Minimitilaus (MOQ) ja joustava brändäys -opas (PDF)', href: '/fi/oem-moq-guide' },
      { label: 'Varmista meidät: luottamus ja tehtaan takeet', href: '/fi/oem-trust-assurance' },
      { label: 'Käynnistä räätälöity SUP-projekti', href: '/fi/contact' },
    ],
  },
  {
    slug: 'private-label-sup-guide',
    title: 'Oma brändi SUP: mitä tehtaalta oikeasti saat',
    intro: [
      'Oma brändi on nopein tie SUP-merkin lanseeraukseen: logosi todennetulla alustalla, ilman laudan suunnittelusta aiheutuvia kustannuksia ja riskejä. Tässä on, mitä yhteistyö räätälöityjen SUP-lautojen valmistajan kanssa oikeasti sisältää.',
    ],
    sections: [
      {
        title: 'Oma brändi tarkoittaa todennettuja alustoja',
        body: 'Aloitat alustoista, joita tehdas jo valmistaa ja testaa — allround, touring, yoga, race ja niin edelleen. Tehdas räätälöi brändäyksen, grafiikat ja viimeistelyn, mikä pitää kustannukset alhaisina ja toimitusajat lyhyinä. Minimimäärät ovat porrastettuja: yhteisbrändiys 5–10 kpl:stä, pilottierät 20–50 kpl:stä ja 90–100+ kpl 150 m rullaa kohti oman brändin vakiomääriä.',
      },
      {
        title: 'Brändäys ulottuu logon ulkopuolelle',
        body: 'Oma brändi kattaa logosi painatuksen (digitaalisesti tai silkkipainona), omat väriryhmät, muotoon leikatut EVA-liukumatot logollasi, lisävarusteiden brändäyksen (mela, pumppu, hihna), vähittäispakkauksen suunnittelun ja jopa myyntipisteiden näyttelypisteet. Lähetä aineistosi, niin tehdas tekee visuaalisen vedoksen ennen tuotantoa.',
      },
      {
        title: 'Mitä tehdas hoitaa puolestasi',
        body: 'Täyden palvelun SUP-tehdas hoitaa grafiikan valmistelun, materiaalien hankinnan, näytetuotannon, 100 pisteen kokoonpanon QC-tarkistuslistan, painetestin ja vienti-asiakirjat (lasku, pakkausluettelo, alkuperätodistus). Sinä tarkastat vedokset ja hyväksyt näytteen — tehdas hoitaa kaiken muun.',
      },
      {
        title: 'Mitä sinulle kuuluu: brändi, markkina, asiakas',
        body: 'Oman brändin mallissa tehdas valmistaa laudat ja brändi on sinun. Vakavaraiset valmistajat eivät myy omia lautojaan markkinoillesi eivätkä myy räätälöityä suunnittelua muille. Pyydä tarjoukseen markkinaeksklusiivisuus.',
      },
      {
        title: 'Kustannukset: näyte, muotti, grafiikan valmistelu',
        body: 'Odota kolmenlaisia maksuja: näytemaksu (7–12 päivää tuotantoon), työkalukustannukset, kun tarvitaan uusi muotti (vakiomäärän minimitilaus), sekä painatuksen grafiikan valmistelu. Useimmat tehtaat hyvittävät näyte- ja muottikustannukset ensimmäisestä tuotantotilauksestasi.',
      },
      {
        title: 'Tilauksesta valmiiseen erään',
        body: 'Tyypillinen oman brändin tuotanto: 30 % käsiraha käynnistää tuotannon, erätuotanto valmistuu 25–35 päivää vahvistetun tilauksen ja käsirahan jälkeen, ja loppusumma selvitetaan hyväksytyn erän vastaanottamista vastaan. Budettoi koko prosessi jo ensimmäiseen tilaukseesi.',
      },
    ],
    faqs: [
      { q: 'Mikä on oman brändin SUP-lautojen minimitilaus (MOQ)?', a: 'Yhteisbrändiys alkaa 5–10 kpl:stä, pilottierät 20–50 kpl:stä ja oman brändin vakiomäärät 90–100+ kpl 150 m rullaa kohti; täysin oman muodon projektit ajetaan vakiomäärissä.' },
      { q: 'Voinko lähettää oman logoni ja omat grafiikkani?', a: 'Kyllä — lähetä logo ja aineistot; tehdas tekee visuaalisen vedoksen ennen tuotantoa, joten voit hyväksyä värit, sijainnin ja viimeistelyn.' },
      { q: 'Onko räätälöity SUP-suunnitelmani yksinomainen brändilleni?', a: 'Kyllä, oman brändin vakioehtojen mukaisesti. Pyydä ostosopimukseen eksklusiivisuuslause; meidän kaltaisemme tehtaat eivät myy brändattua suunnittelua eteenpäin.' },
      { q: 'Minkä kauan oman brändin SUP-tilaus kestää?', a: 'Näytteet lähetetään 7–12 päivässä; erätuotanto valmistuu 25–35 päivää vahvistetun tilauksen ja käsirahan jälkeen. Budettoi ensimmäiseen täyteen tuotantoon 8–12 viikkoa.' },
    ],
    related: [
      { label: 'Oman brändin SUP-ratkaisut', href: '/fi/solutions/private-label-sup' },
      { label: 'Selaa todennettuja alustoja', href: '/fi/products/all-around' },
      { label: 'OEM-/ODM-tuotanto', href: '/fi/oem-manufacturing' },
      { label: 'Käynnistä räätälöity SUP-projekti', href: '/fi/contact' },
    ],
  },
  {
    slug: 'sup-fleet-guide',
    title: 'SUP-laivojen hankinta vuokraukseen, resorteille ja seuroille',
    intro: [
      'Laivaston ostajat tarvitsevat erilaiset vastaukset kuin loppukäyttäjät: kestävyys vetoa kohden, standardoidut varaosat, volyymimäärät ja toimittaja, joka toimittaa kausi kauden jälkeen. Tässä on, mitä suunnitella ennen ensimmäisen laivaston tilaamista.',
    ],
    sections: [
      {
        title: 'Standardoi yhteen tai kahteen spesifikaatioon',
        body: 'Laivastotoiminta perustuu standardointiin: yksi lauta koko (yleensä 10′6″–11′0″ × 32″) useimmille asiakkaille, yksi kulutuskestävä paketti ja yksi varaosasetti. Se yksinkertaistaa korjaukset, henkilökunnan koulutuksen, säilytyksen ja uudelleentilaukset. Vältä kymmenen eri mallin ostamista.',
      },
      {
        title: 'Raskaan käytön laudat ovat eri tuote',
        body: 'Vuokrauslaudan kestää kymmeniä vetoja kaudessa. Määrittele paksummat PVC-kerrokset, vahvistetut kantisapsot ja raskaammat lisävarusteet verrattuna vähittäislautaan. Kysy tehtaalta, miten laivastospesifikaatio eroaa kuluttajaversiosta — aidolla tehtaalla on molemmat.',
      },
      {
        title: 'Sovelluta määrät kysyntään',
        body: 'Laske laivaston koko päivittäisen vaihtuvuuden ja kauden pituuden perusteella: 20–30 lautaa riittää pieneen pisteeseen, yli 100 vilkkaaseen resortiin tai seuraan. Pyydä tehtaalta määräsuositus, joka vastaa kysymänttäsi.',
      },
      {
        title: 'Osta varaosat laivaston mukana',
        body: 'Tilaa varaventtiilit, korjaussarjat, pumput, hihnat ja melat samassa tilauksessa — ne maksavat nyt vähän per kpl, mutta niiden hankinta kauden aikana on hankalaa. Pyydä tehtaalta suositeltu varaosasuhde (kulutustavaroissa yleensä 5–10 % laivaston koosta).',
      },
      {
        title: 'Tilaa ennen kautta, ei sen aikana',
        body: 'Tuotanto kestää 25–35 päivää vahvistetun tilauksen ja käsirahan jälkeen. Jotta laudat olisivat rannalla keväällä, vahvista tilaukset myöhään syksyllä, niin tuotanto valmistuu ennen kautta.',
      },
      {
        title: 'Brändää laivasto jälleenmyynnin arvoa varten',
        body: 'Laivastolaudat voivat kantaa logosi, vuokrausnumeroinnin ja värikoodauksen koon mukaan. Silkkipainetut logot 200+ kpl:n erissä ovat kustannustehokkaita, ja brändätty laivasto toimii samalla markkinointina vedellä.',
      },
    ],
    faqs: [
      { q: 'Mikä on paras SUP vuokrauslaivastoon?', a: 'Vahvistetun rakenteen allround-lauta 10′6″–11′0″ × 32″ on alan standardi — vakaa aloittelijalle, kestävä päivittäiseen käyttöön ja helppo huollettavaksi.' },
      { q: 'Kuinka monta lautaa vuokrausyritys tarvitsee?', a: 'Suunnittele pieneen vuokrauspisteeseen 20–30 lautaa ja skaalaa vaihtuvuuden mukaan: yli 100 kpl vilkkaisiin resorteihin ja seuroihin. Varaosien osuuden tulisi olla 5–10 % laivaston koosta.' },
      { q: 'Voiko laivastolaudoissa olla logomme?', a: 'Kyllä — silkkipainetut logot, vuokrausnumerointi ja värikoodatut kannet ovat tavallisia räätälöintejä ja erityisen kustannustehokkaita 200 kpl:stä alkaen.' },
      { q: 'Minkä kauan laivastotilaus kestää?', a: 'Näytteet 7–12 päivässä, tuotanto 25–35 päivää vahvistetun tilauksen ja käsirahan jälkeen — joten tee laivastotilaukset hyvissä ajoin ennen kauden alkua.' },
    ],
    related: [
      { label: 'Ratkaisut resorteille ja seuroille', href: '/fi/solutions/resort-sup' },
      { label: 'Tapaus: vuokrauslaivasto useilla paikoilla', href: '/fi/projects/rental-fleet-multi-site' },
      { label: 'Laivastoluokan alustat', href: '/fi/products/all-around' },
      { label: 'Puhu projektispecialistille', href: '/fi/contact' },
    ],
  },
]

export const GUIDES_RU: Guide[] = [
  {
    slug: 'how-to-choose-your-sup',
    title: 'Как выбрать SUP-доску',
    intro: [
      'Выбор первой надувной SUP-доски сводится к размеру доски, ширине, конструкции и комплектации. Вот что действительно важно — простым языком.',
    ],
    sections: [
      {
        title: 'Длина и объём',
        body: 'Более длинные доски (11–12 ft) уходят дальше с одного гребка весла и держат курс — идеальны для туринга и дальних переходов. Короткие доски легче поворачивают. Для большинства гребцов оптимальна универсальная доска примерно 10′6″–11′0″.',
      },
      {
        title: 'Ширина и устойчивость',
        body: 'Ширина влияет на устойчивость сильнее любого другого фактора. Палуба шириной 32 дюйма прощает ошибки новичку и достаточно устойчива для йоги; доски шириной 30 дюймов подходят более лёгким или опытным гребцам, которым нужны скорость и манёвренность.',
      },
      {
        title: 'Качество конструкции',
        body: 'Ищите сердцевину из ПВХ-ткани drop-stitch военного класса с рабочим давлением не менее 15 PSI, двойное ламинирование ПВХ и усиленную кромку. Именно они определяют жёсткость доски и срок её службы при ежедневной эксплуатации.',
      },
      {
        title: 'Что должно быть в комплекте',
        body: 'Полный комплект экономит деньги и нервы: доска, разборное весло с регулировкой, двусторонний насос с манометром, спиральный поводок, плавник(и), дорожный рюкзак и ремонтный комплект.',
      },
    ],
    faqs: [
      { q: 'Какого размера SUP-доска мне нужна?', a: 'Большинство новичков выбирают универсальную доску примерно 11′0″ × 32″ × 6″ — стабильную, универсальную и лёгкую в перевозке. Более тяжёлым гребцам или тем, кто идёт в дальние переходы, стоит взять размер больше.' },
      { q: 'Надувная SUP-доска такая же жёсткая, как жёсткая доска?', a: 'Современная надувная доска drop-stitch при 15–20 PSI по жёсткости близка к жёсткой доске начального уровня — и при этом складывается в рюкзак.' },
    ],
    related: [
      { label: 'Наши SUP-платформы', href: '/ru/products' },
      { label: 'Надувная или жёсткая доска', href: '/ru/inflatable-vs-hardboard' },
      { label: 'OEM-производство', href: '/ru/oem-manufacturing' },
    ],
  },
  {
    slug: 'beginner-guide',
    title: 'Руководство по гребле для начинающих',
    intro: [
      'Всё, что нужно для первых выходов на воду: накачивание, первое вставание на доску, базовый гребок и правила безопасности, пока вы набираете уверенность.',
    ],
    sections: [
      {
        title: 'Накачивайте по спецификации, а не «на глаз»',
        body: 'Накачивайте доску до указанного рабочего давления (обычно 15 PSI) по манометру насоса. При 10 PSI доска кажется хорошей на траве, но на воде сильно прогибается. В тёплые дни проверяйте давление: солнце нагревает воздух внутри, и давление растёт.',
      },
      {
        title: 'Первые шаги на доске',
        body: 'Выходите на воду с берега или из мелководья: сначала встаньте на колени, затем поднимайтесь по одной ноге вдоль центральной линии доски. Стопы — на ширине плеч, колени слегка согнуты, взгляд — на горизонт: доска следует за глазами.',
      },
      {
        title: 'Базовый гребок',
        body: 'Протяните весло вперёд, полностью опустите лопасть в воду и проведите его вдоль борта, одновременно поворачивая корпус. Меняйте сторону каждые несколько гребков, чтобы плыть прямо; несколько гребков с одной стороны — чтобы повернуть.',
      },
      {
        title: 'Сначала отработайте падение',
        body: 'Падение в воду — часть обучения. Отработайте повторное высаживание на мелководье: доплывите до центральной ручки, оттолкнитесь ногами от поверхности и за одно движение втяните себя на доску.',
      },
    ],
    faqs: [
      { q: 'Сколько времени нужно, чтобы научиться грести на SUP?', a: 'Большинство людей уверенно гребут на спокойной воде уже во время первого часового занятия. Уверенность в поворотах, при ветре и на длинных дистанциях накапливается за несколько занятий.' },
      { q: 'Нужно ли мне быть в хорошей форме?', a: 'Нет — SUP очень доступен. При регулярной гребе вы естественным образом развиваете баланс, силу корпуса и выносливость.' },
    ],
  },
  {
    slug: 'inflatable-vs-hard',
    title: 'Надувная доска или жёсткая',
    intro: [
      'У каждого из двух типов конструкции есть свои преимущества. Вот честное сравнение для отдыхающих гребцов, клубов и прокатных операторов.',
    ],
    sections: [
      {
        title: 'Переносимость и хранение',
        body: 'Надувные доски сдуваются и складываются в рюкзак, который помещается в багажник автомобиля, автодом или шкаф в квартире, и по умолчанию используются для поездок. Жёстким доскам нужны багажные рейлинги, место для хранения и более бережное обращение.',
      },
      {
        title: 'Жёсткость и характеристики',
        body: 'Премиальные жёсткие доски жёстче и отзывчивее на высоких скоростях. На прогулочных скоростях хорошо собранная надувная доска drop-stitch при 15–20 PSI даёт сопоставимый результат при несравнимо меньших затратах на хранение.',
      },
      {
        title: 'Долговечность',
        body: 'Надувные доски из ПВХ выдерживают удары о причалы и берег, которые треснули бы жёсткий корпус, — именно поэтому прокатные парки и курорты выбирают надувные доски для ежедневной эксплуатации гостями.',
      },
      {
        title: 'Совокупная стоимость владения',
        body: 'Надувные доски дешевле в доставке, хранении и обслуживании и выдерживают более грубое обращение. Для большинства пользователей и парков надувная доска — более выгодный универсальный вариант.',
      },
    ],
    faqs: [
      { q: 'Что лучше для начинающих?', a: 'Надувные доски — стабильные, прощающие ошибки, легко хранимые и достаточно прочные для тех повреждений, которые возникают у новичков.' },
      { q: 'Может ли надувная SUP быть такой же быстрой, как жёсткая доска?', a: 'На прогулочных скоростях разница невелика. Жёсткие доски заметно выигрывают только в гоночных и высокопроизводительных сценариях.' },
    ],
  },
  {
    slug: 'safety-tips',
    title: 'Техника безопасности на воде',
    intro: [
      'Безопасный выход — это удачный выход. Эти базовые правила одинаково применимы к озёрам, рекам и прибрежным маршрутам.',
    ],
    sections: [
      {
        title: 'Проверяйте ветер и прогноз',
        body: 'Наветренный ветер — классическая ловушка на SUP: он сносит вас от берега быстрее, чем вы успеваете грести обратно. Проверяйте прогноз, а если сомневаетесь, оставайтесь в защищённой воде.',
      },
      {
        title: 'Всегда используйте поводок',
        body: 'Спиральный поводок удерживает доску на расстоянии вытянутой руки, если вы упали, — доска служит вашим плавучим средством. Выбирайте поводок под условия: спиральный для спокойной воды, прямой для серфинга.',
      },
      {
        title: 'Спасательный жилет и личная безопасность',
        body: 'Используйте плавучий страховочный жилет, когда этого требуют условия или правила. Возьмите свисток, сообщите кому-нибудь свой маршрут и время возвращения и подумайте о телефоне в водонепроницаемом чехле.',
      },
      {
        title: 'Знайте свои пределы',
        body: 'Набирайте опыт на спокойной воде, прежде чем выходить на ветер или течение. Уважайте холодную воду — она быстро забирает силы. И никогда не гребдите в одиночку в удалённых или открытых акваториях без плана.',
      },
    ],
    faqs: [
      { q: 'Нужен ли спасательный жилет на SUP?', a: 'Требования различаются по странам и водным объектам. Даже там, где жилет необязателен, поводок вместе с плавучим жилетом — ответственный минимум, а дети всегда должны быть в правильно подогнанном спасательном жилете.' },
      { q: 'Безопасно ли гребсти на SUP на озере?', a: 'Да — спокойные озёра идеальны для обучения. Проверьте направление ветра, оставайтесь заметными для судоходства и избегайте оживлённых судовых путей.' },
    ],
    related: [
      { label: 'Средства безопасности на наших платформах', href: '/ru/products' },
      { label: 'Контроль качества на фабрике', href: '/ru/quality' },
      { label: 'Выберите свою первую доску', href: '/ru/guides/how-to-choose-your-sup' },
    ],
  },
  {
    slug: 'choosing-a-sup-oem-factory',
    title: 'Как выбрать OEM-фабрику индивидуальных SUP-досок',
    intro: [
      'Покупка надувных SUP-досок под собственной маркой сводится к одному решению: какой фабрике вы доверите первую партию. Вот как оценить производителя индивидуальных SUP-досок до отправки заказа.',
    ],
    sections: [
      {
        title: 'Начните с пробного заказа, а не с разговора о MOQ',
        body: 'Фабрика, которая говорит только о минимальных партиях, — признак торгового офиса, а не производства. Настоящие производители предлагают ступенчатые минимальные объёмы: совместное брендирование от 5–10 шт, пилотные партии от 20–50 шт, стандартные объёмы от 90–100+ шт на 150 м рулона, а проекты с полностью индивидуальной пресс-формой — на объёмном уровне. Сначала закажите небольшую партию: это проверяет коммуникацию, дисциплину по спецификации и качество образца, не ставя на карту весь запуск.',
      },
      {
        title: 'Посмотрите, что действительно делается внутри',
        body: 'Производство SUP-досок drop-stitch включает четыре ключевых этапа: ламинирование материала, сварку, печать и сборку. Настоящая фабрика выполняет их все под одной крышей и позволяет вам проверить цех. Если продавец не может показать производственную линию, вы, скорее всего, покупаете через посредника без контроля над качеством и сроками поставки.',
      },
      {
        title: 'Образец должен совпадать с серийным производством',
        body: 'Образец, доведённый вручную, изготовить легко; стабильное серийное производство — сложно. Спросите, как фабрика обеспечивает повторяемость: журналы партий материалов, параметры сварки и контрольный лист контроля качества, который проходит по каждой отдельной доске, а не только по одобренному вами образцу.',
      },
      {
        title: 'Узнайте стоимость до отправки заказа',
        body: 'Получите полную картину затрат в письменном виде: цена за единицу в зависимости от количества, стоимость оснастки или пресс-формы, если нужна новая форма, подготовка графики и печать, а также упаковка.',
      },
      {
        title: 'Требуйте инспекцию третьей стороны',
        body: 'Надёжные OEM-фабрики SUP приветствуют предотгрузочные инспекции — многие бренды заказывают независимую проверку контроля качества на каждый контейнер. Убедитесь, что фабрика может организовать инспекцию образцов и серийных партий и что забракованные изделия (например, доски, теряющие более 5 % давления) исключаются из партии.',
      },
      {
        title: 'Сроки поставки, которые держатся',
        body: 'Для надувных SUP образцы готовы за 7–12 дней, а серийное производство занимает 25–35 дней после подтверждения заказа и аванса, плюс время на оснастку, если вы заказываете новую пресс-форму. Фабрика, которая называет заметно более короткие сроки, чем все остальные, берёт цифры из брошюры, а не из графика.',
      },
    ],
    faqs: [
      { q: 'Каков минимальный заказ (MOQ) индивидуальных SUP-досок?', a: 'Ступенчатые минимальные объёмы — стандарт: 1–2 шт для образцов, 5–10 шт для совместного брендирования, 20–50 шт для пилотной партии и 90–100+ шт на 150 м рулона для стандартных объёмов; проекты с полностью индивидуальной пресс-формой выполняются на объёмном уровне.' },
      { q: 'Можно ли увидеть образец до серийного производства?', a: 'Да — образцы готовы за 7–12 дней. Большинство фабрик засчитывают стоимость образца и пресс-формы в счёт первого производственного заказа после его подтверждения.' },
      { q: 'Как проверить, что SUP-фабрика настоящая?', a: 'Запросите видеообзор производственной площадки в реальном времени, проверьте наличие действующего адреса производства в Циндао или другом промышленном центре и запросите документы по предыдущим экспортным заказам. Пробный заказ — окончательное доказательство.' },
      { q: 'Что должно входить в оферту SUP-фабрики?', a: 'Цена за доску, стоимость оснастки или пресс-формы, подготовка графики, упаковка, условия контроля качества и инспекции, а также условия оплаты.' },
    ],
    related: [
      { label: 'Наше OEM / ODM производство', href: '/ru/oem-manufacturing' },
      { label: 'Процесс разработки продукта SUP', href: '/ru/product-development' },
      { label: 'Мощности и производственная площадка фабрики', href: '/ru/factory' },
      { label: 'Как мы контролируем качество — 7 контрольных точек', href: '/ru/quality' },
      { label: 'Руководство по MOQ и гибкому брендированию (PDF)', href: '/ru/oem-moq-guide' },
      { label: 'Проверьте нас: доверие и гарантии фабрики', href: '/ru/oem-trust-assurance' },
      { label: 'Запустите индивидуальный проект SUP', href: '/ru/contact' },
    ],
  },
  {
    slug: 'private-label-sup-guide',
    title: 'SUP под собственной маркой: что вы реально получаете от фабрики',
    intro: [
      'Private label — самый быстрый путь к запуску бренда SUP: ваш логотип на проверенной платформе, без затрат и рисков разработки доски с нуля. Вот что на самом деле включает работа с производителем индивидуальных SUP-досок.',
    ],
    sections: [
      {
        title: 'Private label — это проверенные платформы',
        body: 'Вы начинаете с платформ, которые фабрика уже производит и тестирует: универсальные, туринговые, для йоги, гонки и другие. Фабрика адаптирует брендирование, графику и отделку, что удерживает затраты на низком уровне и сокращает сроки. Минимальные объёмы ступенчатые: совместное брендирование от 5–10 шт, пилотные партии от 20–50 шт и 90–100+ шт на 150 м рулона для стандартного объёма под собственной маркой.',
      },
      {
        title: 'Брендирование не ограничивается логотипом',
        body: 'Private label включает нанесение вашего логотипа (цифровая или трафаретная печать), собственные цветовые сочетания, EVA-коврики, вырезанные по форме доски и с вашим логотипом, брендирование аксессуаров (весло, насос, поводок), дизайн розничной коробки и даже стенды для точек продаж. Пришлите макеты, и фабрика изготовит визуальный образец до начала производства.',
      },
      {
        title: 'Что фабрика берёт на себя',
        body: 'Фабрика полного цикла берёт на себя подготовку графики, закупку материалов, изготовление образцов, контрольный лист проверки сборки из 100 пунктов, испытание под давлением и экспортную документацию (счёт, упаковочный лист, сертификат происхождения). Вы согласуете макеты и утверждаете образец — всё остальное делает фабрика.',
      },
      {
        title: 'Что принадлежит вам: бренд, рынок, клиент',
        body: 'При схеме private label фабрика производит доски, а бренд принадлежит вам. Надёжные производители не продают собственные доски на вашем рынке и не передают ваш индивидуальный дизайн другим. Запросите в оферте эксклюзивность по рынку.',
      },
      {
        title: 'Затраты: образец, пресс-форма, подготовка графики',
        body: 'Предусмотрите три вида платежей: стоимость образца (7–12 дней на изготовление), стоимость оснастки, когда требуется новая пресс-форма (минимальный заказ объёмного уровня), и подготовка графики к печати. Большинство фабрик засчитывают стоимость образца и пресс-формы в счёт первого производственного заказа.',
      },
      {
        title: 'От заказа до готовой партии',
        body: 'Типичный запуск под собственной маркой: аванс 30 % запускает производство, серийная партия готова через 25–35 дней после подтверждения заказа и аванса, а остаток оплачивается по приёмке одобренной партии. Заложите бюджет на весь цикл уже в первый заказ.',
      },
    ],
    faqs: [
      { q: 'Каков минимальный заказ (MOQ) SUP-досок под собственной маркой?', a: 'Совместное брендирование начинается с 5–10 шт, пилотные партии — с 20–50 шт, стандартный объём под собственной маркой — 90–100+ шт на 150 м рулона; проекты с полностью индивидуальной пресс-формой выполняются на объёмном уровне.' },
      { q: 'Можно ли прислать свой логотип и свою графику?', a: 'Да — пришлите логотип и макеты; фабрика делает визуальный образец до производства, чтобы вы утвердили цвета, расположение и отделку.' },
      { q: 'Эксклюзивен ли мой индивидуальный дизайн SUP для моего бренда?', a: 'Да, в рамках стандартных условий private label. Попросите включить пункт об эксклюзивности в договор купли-продажи; такие фабрики, как наша, не перепродают брендированный дизайн.' },
      { q: 'Сколько занимает заказ SUP под собственной маркой?', a: 'Образцы отправляются за 7–12 дней; серийное производство завершается через 25–35 дней после подтверждения заказа и аванса. На первый полный цикл заложите 8–12 недель.' },
    ],
    related: [
      { label: 'Решения для SUP под собственной маркой', href: '/ru/solutions/private-label-sup' },
      { label: 'Посмотрите проверенные платформы', href: '/ru/products/all-around' },
      { label: 'OEM / ODM производство', href: '/ru/oem-manufacturing' },
      { label: 'Запустите индивидуальный проект SUP', href: '/ru/contact' },
    ],
  },
  {
    slug: 'sup-fleet-guide',
    title: 'Закупка парка SUP-досок для проката, курортов и клубов',
    intro: [
      'Покупателям парков нужны другие ответы, чем конечным пользователям: ресурс доски на одну сессию, стандартизированные запчасти, объёмные количества и поставщик, который работает сезон за сезоном. Вот что нужно спланировать до заказа первого парка.',
    ],
    sections: [
      {
        title: 'Стандартизируйте на одну-две спецификации',
        body: 'Парковая работа строится на стандартизации: один размер доски (обычно 10′6″–11′0″ × 32″) для большинства гостей, один износостойкий комплект и один набор запчастей. Это упрощает ремонт, обучение персонала, хранение и повторные заказы. Не поддавайтесь соблазну купить десять разных моделей.',
      },
      {
        title: 'Доски для интенсивной эксплуатации — другой продукт',
        body: 'Прокатная доска выдерживает десятки сессий за сезон. Задайте более толстые слои ПВХ, усиленную кромку и более надёжные аксессуары по сравнению с розничными досками. Спросите у фабрики, чем парковая спецификация отличается от потребительской версии: у настоящего производства есть обе.',
      },
      {
        title: 'Рассчитывайте количество под спрос',
        body: 'Определите размер парка по ежедневной ротации и длительности сезона: 20–30 досок достаточно небольшой точке проката, более 100 — загруженному курорту или клубу. Запросите у фабрики рекомендации по количеству под ваш профиль спроса.',
      },
      {
        title: 'Покупайте запчасти вместе с парком',
        body: 'Заказывайте запасные клапаны, ремонтные комплекты, насосы, поводки и весла в том же заказе — сейчас они стоят немного за штуку, а в середине сезона их заказать сложно. Запросите у фабрики рекомендуемую долю запчастей (обычно 5–10 % от размера парка для расходных материалов).',
      },
      {
        title: 'Заказывайте до сезона, а не во время',
        body: 'Производство занимает 25–35 дней после подтверждения заказа и аванса. Чтобы к весне доски были на пляже, подтверждайте заказы поздней осенью, чтобы производство завершилось до начала сезона.',
      },
      {
        title: 'Брендируйте парк для остаточной стоимости',
        body: 'На парковых досках могут быть ваш логотип, сквозная нумерация проката и цветовая кодировка по размерам. Логотипы трафаретной печатью в тиражах от 200+ шт экономически выгодны, а брендированный парк служит ещё и рекламой на воде.',
      },
    ],
    faqs: [
      { q: 'Какая SUP-доска лучше всего подходит для прокатного парка?', a: 'Универсальная доска усиленной конструкции 10′6″–11′0″ × 32″ — отраслевой стандарт: стабильна для новичков, долговечна для ежедневной эксплуатации и проста в обслуживании.' },
      { q: 'Сколько досок нужно прокатной компании?', a: 'Запланируйте 20–30 досок для небольшой точки проката и масштабируйте по ротации: более 100 шт для загруженных курортов и клубов. Доля запчастей должна составлять 5–10 % от размера парка.' },
      { q: 'Могут ли на парковых досках быть наш логотип?', a: 'Да — логотипы трафаретной печатью, нумерация проката и цветовые коды на палубе — стандартные индивидуальные опции, особенно экономичные от 200 шт.' },
      { q: 'Сколько занимает заказ парка досок?', a: 'Образцы — 7–12 дней, производство — 25–35 дней после подтверждения заказа и аванса, поэтому размещайте заказы парка задолго до начала сезона.' },
    ],
    related: [
      { label: 'Решения для курортов и клубов', href: '/ru/solutions/resort-sup' },
      { label: 'Пример: прокатный парк на нескольких площадках', href: '/ru/projects/rental-fleet-multi-site' },
      { label: 'Платформы паркового класса', href: '/ru/products/all-around' },
      { label: 'Поговорите со специалистом по проектам', href: '/ru/contact' },
    ],
  },
]

export const GUIDES_CS: Guide[] = [
  {
    slug: 'how-to-choose-your-sup',
    title: 'Jak vybrat správnou SUP desku',
    intro: [
      'Výběr první nafukovací SUP desky se odvíjí od velikosti desky, šířky, konstrukce a vybavení v balíku. Zde je jednoduchým jazykem to, na čem opravdu záleží.',
    ],
    sections: [
      {
        title: 'Délka a objem',
        body: 'Delší desky (11–12 ft) ujedou na jeden záběr pádla dále a lépe drží směr — jsou ideální pro turistické plavby a dlouhé přeplutí. Kratší desky se snáze otočí. Pro většinu pádlářů je optimální univerzální deska přibližně 10′6″–11′0″.',
      },
      {
        title: 'Šířka a stabilita',
        body: 'Šířka ovlivňuje stabilitu víc než cokoliv jiného. Paluba o šířce 32 palců odpouští začátečníkovi chyby a je dostatečně stabilní i pro jógu; desky o šířce 30 palců vyhovují lehčím nebo zkušenějším pádlářům, kteří chtějí rychlost a hbitost.',
      },
      {
        title: 'Kvalita konstrukce',
        body: 'Hledejte jádro z PVC tkaniny typu drop-stitch vojenské třídy s pracovním tlakem nejméně 15 PSI, dvojité laminování PVC a zpevněný okraj. Právě tyto parametry určují tuhost desky a její životnost při každodenním používání.',
      },
      {
        title: 'Co má být v balíku',
        body: 'Kompletní sestava šetří peníze i nervy: deska, rozložitelné pádlo s nastavením délky, oboustranná pumpa s manometrem, vinuté vodítko, ploutev (ploutve), cestovní batoh a opravná sada.',
      },
    ],
    faqs: [
      { q: 'Jakou velikost SUP desky potřebuji?', a: 'Většina začátečníků volí univerzální desku přibližně 11′0″ × 32″ × 6″ — stabilní, univerzální a snadno přenosnou. Těžším pádlářům nebo těm, kdo plánují dlouhé přeplutí, doporučujeme o kus větší.' },
      { q: 'Je nafukovací SUP deska stejně tuhá jako pevná deska?', a: 'Současná nafukovací deska drop-stitch při 15–20 PSI je tuhostí blízká začáteční pevné desce — a přitom se složí do batohu.' },
    ],
    related: [
      { label: 'Naše SUP platformy', href: '/cs/products' },
      { label: 'Nafukovací nebo pevná deska', href: '/cs/inflatable-vs-hardboard' },
      { label: 'OEM výroba', href: '/cs/oem-manufacturing' },
    ],
  },
  {
    slug: 'beginner-guide',
    title: 'Průvodce pádlováním pro začátečníky',
    intro: [
      'Vše, co potřebujete pro první výjezdy na vodu: nafouknutí, první nasednutí na desku, základní záběr pádla a pravidla bezpečnosti, dokud si budujete jistotu.',
    ],
    sections: [
      {
        title: 'Dofukujte podle specifikace, ne „na oko“',
        body: 'Nafoďte desku na předepsaný pracovní tlak (obvykle 15 PSI) podle manometru pumpy. Při 10 PSI se deska na trávníku jeví dobrá, ale na vodě se výrazně prohýbá. V teplých dnech tlak kontrolujte: slunce zahřívá vzduch uvnitř a tlak roste.',
      },
      {
        title: 'První kroky na desce',
        body: 'Na vodu vstupujte z břehu nebo z mělké vody: nejprve klekněte na jedno koleno, potom vstávejte nohu po noze podél středové osy desky. Chodidla na šířku ramen, kolena mírně pokrčená, pohled na obzoru — deska sleduje Vaše oči.',
      },
      {
        title: 'Základní záběr pádla',
        body: 'Pádlo vysuňte dopředu, list celý ponořte do vody a přetáhněte ho podél boku desky, přitom otáčejte trupem. Každých pár záběrů přehodte stranu, abyste pluli rovně; několik záběrů pouze na jedné straně vás otočí.',
      },
      {
        title: 'Nejdřív nacvičte pád do vody',
        body: 'Pád do vody je součástí učení. Na mělké vodě nacvičte opětovné nasednutí: doplavte k centrálnímu madlu, odrazte se nohama od hladiny a jedním pohybem se vytáhněte na desku.',
      },
    ],
    faqs: [
      { q: 'Jak dlouho trvá naučit se pádlovat na SUP?', a: 'Většina lidí pádluje na klidné vodě sebevědomě už při první hodinové lekci. Sebevědomí v zatáčení, proti větru a na dlouhých vzdálenostech se získává během několika lekcí.' },
      { q: 'Musím být v dobré kondici?', a: 'Ne — SUP je dostupný pro každého. Při pravidelném pádlování přirozeně rozvíjíte rovnováhu, sílu trupu a vytrvalost.' },
    ],
  },
  {
    slug: 'inflatable-vs-hard',
    title: 'Nafukovací nebo pevná deska',
    intro: [
      'Každý z obou typů konstrukce má své výhody — zde je čestné porovnání pro rekreační pádláře, kluby a půjčovny.',
    ],
    sections: [
      {
        title: 'Přenosnost a skladování',
        body: 'Nafukovací desky se vyfukují a složí do batohu, který se vejde do zavazadlového prostoru auta, do obytného vozu nebo do skříně v bytě, a pro cestování jsou proto volbou předem. Pevné desky potřebují střešní nosič, místo pro skladování a šetrnější zacházení.',
      },
      {
        title: 'Tuhost a vlastnosti',
        body: 'Prémiové pevné desky jsou tuhší a citlivější ve vysokých rychlostech. Při rekreačních rychlostech dává dobře sestavená nafukovací deska drop-stitch při 15–20 PSI srovnatelný výsledek při nesrovnatelně nižších nákladech na skladování.',
      },
      {
        title: 'Životnost',
        body: 'Nafukovací desky z PVC vydrží nárazy o přístaviště a břeh, které by pevný korpus praskl — právě proto půjčovny a letoviska volí nafukovací desky pro každodenní používání hosty.',
      },
      {
        title: 'Celkové náklady na vlastnictví',
        body: 'Nafukovací desky jsou levnější z hlediska dopravy, skladování i údržby a snese hrubší zacházení. Pro většinu uživatelů i flot je nafukovací deska výhodnější univerzální volbou.',
      },
    ],
    faqs: [
      { q: 'Co je lepší pro začátečníky?', a: 'Nafukovací desky jsou stabilní, odpouštějí chyby, snadno se skladují a jsou dostatečně odolné proti poškozením, ke kterým dochází u začátečníků.' },
      { q: 'Může být nafukovací SUP stejně rychlá jako pevná deska?', a: 'Při rekreačních rychlostech je rozdíl malý. Pevné desky výrazně vyhrávají pouze v závodních a výkonnostních scénářích.' },
    ],
  },
  {
    slug: 'safety-tips',
    title: 'Bezpečnost na vodě',
    intro: [
      'Bezpečný výjezd je dobrý výjezd — tato základní pravidla platí stejně pro jezera, řeky i pobřežní trasy.',
    ],
    sections: [
      {
        title: 'Kontrolujte vítr a předpověď',
        body: 'Protivítr je klasická past na SUP: odnáší Vás od břehu rychleji, než stíháte pádlovat zpět. Předpověď si ověřte a pokud si nejste jisti, zůstaňte na chráněné vodě.',
      },
      {
        title: 'Vždy používejte vodítko',
        body: 'Vinuté vodítko vás po pádu drží na délku natažené ruky — deska se stane vaším plovoucím prostředkem. Vodítko vybírejte podle podmínek: vinuté pro klidnou vodu, přímé pro surfování.',
      },
      {
        title: 'Zachraňovací vesta a osobní bezpečnost',
        body: 'Používejte plovoucí záchrannou vestu, když to vyžadují podmínky nebo pravidla. Vezměte si píšťalku, sdělte někomu svou trasu a čas návratu a uvažujte telefon ve vodotěsném obalu.',
      },
      {
        title: 'Znáte své meze',
        body: 'Získávejte zkušenosti na klidné vodě, teprve potom vyrazte do větru nebo do proudu. Respektujte studenou vodu — rychle Vám odebírá síly. A nikdy nepadlujte sami na odlehlých nebo otevřených vodách bez plánu.',
      },
    ],
    faqs: [
      { q: 'Je na SUP povinná záchranná vesta?', a: 'Požadavky se liší podle zemí a vodních ploch. I tam, kde vesta není povinná, je vodítko společně s plovoucí vestou zodpovědným minimem, a děti by vždy měly být v řádně padnoucí záchranné vestě.' },
      { q: 'Je bezpečné pádlovat na SUP na jezeře?', a: 'Ano — klidná jezera jsou ideální pro výcvik. Zkontrolujte směr větru, zůstaňte viditelní pro plavební provoz a vyhýbejte se frekventovaným lodním trasám.' },
    ],
    related: [
      { label: 'Bezpečnostní vybavení na našich platformách', href: '/cs/products' },
      { label: 'Kontrola kvality v továrně', href: '/cs/quality' },
      { label: 'Vyberte si svou první desku', href: '/cs/guides/how-to-choose-your-sup' },
    ],
  },
  {
    slug: 'choosing-a-sup-oem-factory',
    title: 'Jak vybrat OEM továrnu pro SUP desky na míru',
    intro: [
      'Nákup nafukovacích SUP desek pod vlastní značkou se scvrká na jedno rozhodnutí: které továrně svěříte první dávku. Zde je postup, jak posoudit výrobce SUP desek na míru před odesláním objednávky.',
    ],
    sections: [
      {
        title: 'Začněte zkušební objednávkou, ne hovorem o MOQ',
        body: 'Továrna, která mluví pouze o minimálních dávkách, je znamení obchodní kanceláře, ne výroby. Skuteční výrobci nabízejí stupňovité minimální objemy: společné značení od 5–10 ks, pilotní dávky od 20–50 ks, standardní objemy od 90–100+ ks na 150 m role a projekty se zcela vlastní lisovací formou až na objemovém stupni. Nejprve objednejte malou dávku: tím ověříte komunikaci, disciplínu dodržování specifikace a kvalitu vzorku, aniž byste vsadili celý start.',
      },
      {
        title: 'Podívejte se, co se opravdu dělá uvnitř',
        body: 'Výroba SUP desek drop-stitch zahrnuje čtyři zásadní kroky: laminování materiálu, svařování, potisk a montáž. Skutečná továrna zvládne všechny pod jednou střechou a nechá vás si výrobní linku projít. Pokud prodejce neukáže výrobní linku, nejspíš nakupujete přes zprostředkovatele bez kontroly nad kvalitou a dodacími lhůtami.',
      },
      {
        title: 'Vzorek musí odpovídat sériové výrobě',
        body: 'Ručně doladěný vzorek vyrobíte snadno, stabilní sériovou výrobu už obtížně. Zeptejte se, jak továrna zajišťuje opakovatelnost: záznamy o šaržích materiálu, parametry svařování a kontrolní list kontroly kvality, který projde každou jednotlivou deskou, ne jen Vaším schváleným vzorkem.',
      },
      {
        title: 'Zjistěte náklady před odesláním objednávky',
        body: 'Získejte úplný přehled nákladů písemně: cena za kus podle množství, cena nástrojů či lisovací formy, pokud je potřeba nová forma, příprava grafiky a potisk a také balení.',
      },
      {
        title: 'Vyžadujte inspekci třetí strany',
        body: 'Spolehlivé OEM továrny na SUP inspekce před odesláním přivítají — řada značek objednává nezávislou kontrolu kvality pro každý kontejner. Ujistěte se, že továrna dokáže zorganizovat inspekci vzorků i sériových dávek a že vyřazené výrobky (například desky, které ztrácejí více než 5 % tlaku) se do dávky nedostanou.',
      },
      {
        title: 'Dodací lhůty, které se drží',
        body: 'U nafukovacích SUP jsou vzorky hotové za 7–12 dní a sériová výroba trvá 25–35 dní po potvrzení objednávky a záloze, plus čas na nástroje, pokud objednáváte novou lisovací formu. Továrna, která uvádí výrazně kratší lhůty než všichni ostatní, bere čísla z brožury, ne z výrobního plánu.',
      },
    ],
    faqs: [
      { q: 'Jaké je minimální objednací množství (MOQ) SUP desek na míru?', a: 'Stupňovité minimální objemy jsou standardem: 1–2 ks na vzorky, 5–10 ks na společné značení, 20–50 ks na pilotní dávku a 90–100+ ks na 150 m role pro standardní objemy; projekty se zcela vlastní lisovací formou se realizují na objemovém stupni.' },
      { q: 'Lze vidět vzorek před sériovou výrobou?', a: 'Ano — vzorky jsou hotové za 7–12 dní. Většina továren započítává cenu vzorku a lisovací formy do první výrobní objednávky po jejím potvrzení.' },
      { q: 'Jak ověřit, že je SUP továrna skutečná?', a: 'Vyžádejte si živý video přenos z výrobního areálu, ověřte existující výrobní adresu v Čching-tseu nebo v jiném průmyslovém centru a vyžádejte si dokumentaci k předchozím exportním objednávkám. Zkušební objednávka je konečným důkazem.' },
      { q: 'Co musí obsahovat cenová nabídka SUP továrny?', a: 'Cena za desku, náklady na nástroje nebo lisovací formu, příprava grafiky, balení, podmínky kontroly kvality a inspekce a také platební podmínky.' },
    ],
    related: [
      { label: 'Naše výroba OEM / ODM', href: '/cs/oem-manufacturing' },
      { label: 'Proces vývoje produktu SUP', href: '/cs/product-development' },
      { label: 'Kapacity a výrobní areál továrny', href: '/cs/factory' },
      { label: 'Jak kontrolujeme kvalitu — 7 kontrolních bodů', href: '/cs/quality' },
      { label: 'Průvodce MOQ a flexibilním značením (PDF)', href: '/cs/oem-moq-guide' },
      { label: 'Ověřte nás: důvěra a záruky továrny', href: '/cs/oem-trust-assurance' },
      { label: 'Spusťte vlastní projekt SUP', href: '/cs/contact' },
    ],
  },
  {
    slug: 'private-label-sup-guide',
    title: 'SUP pod vlastní značkou: co vám továrna opravdu poskytne',
    intro: [
      'Private label je nejrychlejší cesta k uvedení značky SUP na trh: Vaše logo na ověřené platformě, bez nákladů a rizik vývoje desky od nuly. Zde je to, co skutečně zahrnuje spolupráce s výrobcem SUP desek na míru.',
    ],
    sections: [
      {
        title: 'Private label znamená ověřené platformy',
        body: 'Začínáte na platformách, které továrna už vyrábí a testuje: univerzální, turistické, pro jógu, závodní a další. Továrna upraví značení, grafiku a povrchové zpracování, což drží náklady nízko a zkracuje lhůty. Minimální objemy jsou stupňovité: společné značení od 5–10 ks, pilotní dávky od 20–50 ks a 90–100+ ks na 150 m role pro standardní objem pod vlastní značkou.',
      },
      {
        title: 'Značení se neomezuje na logo',
        body: 'Private label zahrnuje aplikaci Vašeho loga (digitální tisk nebo sítotisk), vlastní barevné kombinace, EVA podložky vystřižené podle tvaru desky a s Vašim logem, značení příslušenství (pádlo, pumpa, vodítko), design prodejní krabice a dokonce stojany pro prodejní místa. Pošlete podklady a továrna vyrobí vizuální vzorek před zahájením výroby.',
      },
      {
        title: 'Co přebírá továrna',
        body: 'Továrna s kompletním cyklem přebírá přípravu grafiky, nákup materiálu, výrobu vzorků, 100bodový kontrolní list kontroly montáže, tlakovou zkoušku a vývozní dokumentaci (fakturu, balicí list a certifikát původu). Vy schvalujete podklady a vzorek — vše ostatní dělá továrna.',
      },
      {
        title: 'Co patří Vám: značka, trh, zákazník',
        body: 'U modelu private label továrna vyrábí desky, ale značka patří Vám. Spolehliví výrobci neprodávají vlastní desky na Vašem trhu ani nepředávají Vaše individuální řešení dalším. Vyžádejte si v cenové nabídce výslovnou exkluzivitu pro daný trh.',
      },
      {
        title: 'Náklady: vzorek, lisovací forma, příprava grafiky',
        body: 'Počítejte se třemi položkami: cenou vzorku (výroba 7–12 dní), cenou nástrojů, pokud je potřeba nová lisovací forma (minimální objednací množství na objemovém stupni), a přípravou grafiky pro tisk. Většina továren započítává cenu vzorku a lisovací formy do první výrobní objednávky.',
      },
      {
        title: 'Od objednávky po hotovou dávku',
        body: 'Typický start pod vlastní značkou: záloha 30 % spustí výrobu, sériová dávka je hotová za 25–35 dní po potvrzení objednávky a záloze a zbytek se platí po převzetí schválené dávky. Rozpočet na celý cyklus zahrňte už do první objednávky.',
      },
    ],
    faqs: [
      { q: 'Jaké je minimální objednací množství (MOQ) SUP desek pod vlastní značkou?', a: 'Společné značení začíná na 5–10 ks, pilotní dávky na 20–50 ks a standardní objem pod vlastní značkou představuje 90–100+ ks na 150 m role; projekty se zcela vlastní lisovací formou se realizují na objemovém stupni.' },
      { q: 'Mohu poslat vlastní logo a grafiku?', a: 'Ano — pošlete logo a podklady; továrna před výrobou připraví vizuální vzorek, abyste schválili barvy, umístění a povrchové zpracování.' },
      { q: 'Je můj individuální design SUP exkluzivní pro moji značku?', a: 'Ano, v rámci standardních podmínek private label. Požádejte o zahrnutí bodu o exkluzivitě do kupní smlouvy; továrny jako naše nepřeprodávají značené řešení jiným.' },
      { q: 'Jak dlouho trvá objednávka SUP pod vlastní značkou?', a: 'Vzorky se zhotoví za 7–12 dní; sériová výroba dokončí za 25–35 dní po potvrzení objednávky a záloze. Na první kompletní cyklus počítejte 8–12 týdnů.' },
    ],
    related: [
      { label: 'Řešení pro SUP pod vlastní značkou', href: '/cs/solutions/private-label-sup' },
      { label: 'Prohlédněte si ověřené platformy', href: '/cs/products/all-around' },
      { label: 'Výroba OEM / ODM', href: '/cs/oem-manufacturing' },
      { label: 'Spusťte vlastní projekt SUP', href: '/cs/contact' },
    ],
  },
  {
    slug: 'sup-fleet-guide',
    title: 'Nákup SUP floty pro půjčovny, letoviska a kluby',
    intro: [
      'Nákupčím flot jsou potřeba jiné odpovědi než koncovým uživatelům: jak dlouho deska vydrží jednu sezi, standardizované náhradní díly, velkoobjemová množství a dodavatel, který pracuje sezónu po sezóně. Zde je to, co je nutné naplánovat před objednáním první floty.',
    ],
    sections: [
      {
        title: 'Standardizujte na jednu až dvě specifikace',
        body: 'Provoz floty stojí na standardizaci: jedna velikost desky (obvykle 10′6″–11′0″ × 32″) pro většinu hostů, jedna odolná sestava a jedna sada náhradních dílů. To zjednodušuje opravy, školení personálu, skladování a opakované objednávky. Nechte se přesvědčit a koupit deset různých modelů.',
      },
      {
        title: 'Desky pro intenzivní provoz jsou jiný produkt',
        body: 'Deska do půjčovny vydrží desítky sezení za sezónu. Nastavte silnější vrstvy PVC, zpevněný okraj a spolehlivější příslušenství oproti maloobchodním deskám. Zeptejte se továrny, čím se flotová specifikace liší od spotřebitelské verze: skutečná výroba má obě.',
      },
      {
        title: 'Počítejte množství podle poptávky',
        body: 'Velikost floty určete podle denní rotace a délky sezóny: 20–30 desek stačí malému půjčovacímu místu, více než 100 obslouží vytížené letovisko nebo klub. Vyžádejte si od továrny doporučení na množství odpovídající Vašemu profilu poptávky.',
      },
      {
        title: 'Náhradní díly kupujte spolu s flotou',
        body: 'Náhradní ventily, opravné sady, pumpy, vodítka a paddle objednejte v téže objednávce — teď vás stojí pár korun za kus, uprostřed sezóny je objednat obtížné. Vyžádejte si od továrny doporučený podíl náhradních dílů (u spotřebního materiálu obvykle 5–10 % velikosti floty).',
      },
      {
        title: 'Objednávejte před sezónou, ne během ní',
        body: 'Výroba trvá 25–35 dní po potvrzení objednávky a záloze. Aby byly desky na pláži na jaře, potvrzujte objednávky na konci podzimu, aby výroba skončila před startem sezóny.',
      },
      {
        title: 'Označte flotu pro výtěžek z dalšího prodeje',
        body: 'Na deskách floty může být Vaše logo, průběžné číslování výpůjček a barevné kódování podle velikostí. Loga tištěná sítotiskem jsou od sérií 200+ ks ekonomicky výhodná a označená flota je zároveň reklamou na vodě.',
      },
    ],
    faqs: [
      { q: 'Jaká SUP deska nejlépe vyhovuje pro půjčovací flotu?', a: 'Univerzální deska se zesílenou konstrukcí 10′6″–11′0″ × 32″ je oborovým standardem: stabilní pro začátečníky, odolná pro každodenní provoz a snadno se udržuje.' },
      { q: 'Kolik desek potřebuje půjčovací společnost?', a: 'Pro malé půjčovací místo naplánujte 20–30 desek a roste podle rotace: více než 100 ks pro vytížená letoviska a kluby. Podíl náhradních dílů má činit 5–10 % velikosti floty.' },
      { q: 'Mohou být na deskách floty naše loga?', a: 'Ano — loga tištěná sítotiskem, číslování výpůjček a barevné kódy na palubě jsou standardní možnosti přizpůsobení, zvlášť hospodárné od 200 ks.' },
      { q: 'Jak dlouho trvá objednávka floty desek?', a: 'Vzorky 7–12 dní, výroba 25–35 dní po potvrzení objednávky a záloze, proto flotu objednávejte dlouho před startem sezóny.' },
    ],
    related: [
      { label: 'Řešení pro letoviska a kluby', href: '/cs/solutions/resort-sup' },
      { label: 'Příklad: půjčovací flota na více místech', href: '/cs/projects/rental-fleet-multi-site' },
      { label: 'Platformy pro provozní floty', href: '/cs/products/all-around' },
      { label: 'Promluvte si s projektovým specialistou', href: '/cs/contact' },
    ],
  },
]

export const GUIDES_TR: Guide[] = [
  {
    slug: 'how-to-choose-your-sup',
    title: "SUP'nizi Nasıl Seçmelisiniz",
    intro: [
      "İlk şişirilebilir SUP'nizi seçerken belirleyici olan levha boyutu, genişliği, yapısı ve kutunun içinde ne olduğudur. Gerçekten önemli olanları sade bir dille anlatıyoruz.",
    ],
    sections: [
      {
        title: 'Uzunluk ve Hacim',
        body: 'Daha uzun levhalar (11–12 ft) her kürek vuruşunda daha uzağa gider ve daha düz ilerler; tur ve uzun mesafe için idealdir. Kısa levhalar daha kolay döner. Çoğu kullanıcı için 10\'6"–11\'0" arası her yönlü bir levha ideal denge noktasıdır.',
      },
      {
        title: 'Genişlik ve Dengelilik',
        body: "Dengeliği en çok belirleyen etken genişliktir. 32 inç genişliğindeki bir güverte başlangıç için cömerttir ve yoga için yeterince dengelidir; 30 inç levhalar ise hız ve çeviklik isteyen daha hafif ya da daha deneyimli paddle'çılara uygundur.",
      },
      {
        title: 'Yapı Kalitesi',
        body: 'En az 15 PSI basınç dayanımına sahip, askeri sınıf drop-stitch PVC çekirdek, çift katmanlı PVC laminasyon ve takviyeli kenar bantları arayın. Bunlar levhanın ne kadar sert hissedildiğini ve günlük kullanımda ne kadar dayandığını belirler.',
      },
      {
        title: 'Kutuda Neler Olmalı',
        body: 'Tam bir paket hem para hem de uğraş tasarrufu sağlar: levha, 3 parçalı ayarlanabilir paddle, göstergeli çift yönlü pompa, kangal halat, finler, taşıma sırt çantası ve onarım kiti.',
      },
    ],
    faqs: [
      { q: 'Hangi boyutta SUP levhasına ihtiyacım var?', a: 'Çoğu başlangıççı yaklaşık 11\'0" × 32" × 6" ölçülerinde bir her yönlü levha seçer: dengeli, çok yönlü ve kolay taşınır. Daha ağır kullanıcılar ya da uzun mesafe hedefleyenler daha büyük ölçüyü tercih etmelidir.' },
      { q: 'Şişirilebilir bir SUP, sert levha kadar sert mi?', a: 'Modern bir drop-stitch şişirilebilir levha 15–20 PSI basınçta sertlik açısından giriş seviyesi sert levhalara yakın sonuç verir; üstelik sırt çantasına sığma avantajı sunar.' },
    ],
    related: [
      { label: 'SUP platformlarımıza göz atın', href: '/tr/products' },
      { label: 'Şişirilebilir mi, sert mi?', href: '/tr/inflatable-vs-hardboard' },
      { label: 'OEM üretim', href: '/tr/oem-manufacturing' },
    ],
  },
  {
    slug: 'beginner-guide',
    title: 'Paddle Etmeye Başlangıç Rehberi',
    intro: [
      'Sudaki ilk seanslarınız için gereken her şey: şişirme, ilk kez ayakta kalkma, temel kürek tekniği ve güveniniz oluşana kadar kendinizi nasıl koruyacağınız.',
    ],
    sections: [
      {
        title: 'Hissiye Göre Değil, Ölçüye Göre Şişirin',
        body: 'Pompanızdaki göstergeyi kullanarak levhayı belirtilen basınca (genellikle 15 PSI) şişirin. 10 PSI basınçtaki bir levha çimende gayet iyi görünür, ama suda fazla esner. Sıcak günlerde basıncı kontrol edin: güneş levha içindeki havayı ısıtır ve basıncı yükseltir.',
      },
      {
        title: 'Levhada İlk Adımlar',
        body: 'Sahilden ya da sığ bir noktadan kalkın: önce diz çömelin, sonra orta eksen üzerinde birer ayağa kalkın. Ayaklarınızı omuz genişliğinde tutun, dizleri hafif bükülü bırakın ve ufka bakın; levha gözünüzü takip eder.',
      },
      {
        title: 'Temel Kürek Tekniği',
        body: "Paddle'ı öne uzatın, küreği tamamen suya batırın ve gövdenizi döndürerek paddle'ı levhanın yanından çekin. Düz gitmek için her birkaç kürekte taraf değiştirin; dönmek için aynı tarafta birkaç çekiş yapın.",
      },
      {
        title: 'Önce Düşmeyi Pratik Edin',
        body: 'Suyun içine düşmek öğrenmenin bir parçasıdır. Sığ suda tekrar kalkmayı pratik yapın: ortadaki tutamağa kadar yüzün, ayaklarınızla yüzeye çıkın ve tek bir hareketle kendinizi levhanın üzerine çekin.',
      },
    ],
    faqs: [
      { q: 'SUP öğrenmek ne kadar sürer?', a: 'Çoğu kişi ilk bir saatlik seansında sakin suda rahatlıkla paddle edebilir. Dönüşlerde, rüzgarda ve uzun mesafede güven birkaç seans boyunca gelişir.' },
      { q: 'Fit olmam gerekir mi?', a: 'Hayır; SUP herkesin kolayca erişebildiği bir aktivitedir. Düzenli paddle ettiğinizde doğal olarak denge, gövde gücü ve dayanıklılık kazanırsınız.' },
    ],
  },
  {
    slug: 'inflatable-vs-hard',
    title: 'Şişirilebilir mi, Sert mi?',
    intro: [
      "İki farklı yapı ailesi farklı senaryolarda öne çıkar. Rekreasyonel paddle'çılar, kulüpler ve kiralama işletmeleri için dürüst karşılaştırma burada.",
    ],
    sections: [
      {
        title: 'Taşınabilirlik ve Saklama',
        body: 'Şişirilebilir levhalar sönüp bir sırt çantasına sığar; arabanın bagajına, karavana ya da apartman dolabına rahat sığar ve seyahat için varsayılan seçimdir. Sert levhalar ise bagaj taşıyıcı, depolama alanı ve daha özenli taşıma gerektirir.',
      },
      {
        title: 'Sertlik ve Performans',
        body: 'Üst segment sert levhalar daha rijit ve yüksek performans seviyelerinde daha duyarlıdır. Rekreasyonel hızlarda, iyi üretilmiş bir drop-stitch şişirilebilir levha 15–20 PSI basınçta çok daha düşük depolama maliyetiyle benzer bir performans verir.',
      },
      {
        title: 'Dayanıklılık',
        body: 'Şişirilebilir PVC levhalar, sert gövdeyi çatlatabilecek iskele çiziklerine ve kıyı darbelerine kolayca dayanır; kiralama filolarının ve resortların misafirler için günlük kullanımda şişirilebilir levhaları tercih etmesinin başlıca nedeni de budur.',
      },
      {
        title: 'Toplam Sahip Olma Maliyeti',
        body: 'Şişirilebilir levhaların taşıma, depolama ve bakım maliyeti daha düşüktür, ayrıca daha sert kullanımlara dayanır. Çoğu kullanıcı ve çoğu filo için şişirilebilir levha daha avantajlı bir genel tercihtir.',
      },
    ],
    faqs: [
      { q: 'Başlangıççılar için hangisi daha iyi?', a: 'Şişirilebilir levhalar: dengeli, hata affedici, kolayca saklanır ve başlangıççıların oluşturduğu çizik ve darbelere yeterince dayanıklıdır.' },
      { q: 'Şişirilebilir bir SUP, sert levha kadar hızlı olabilir mi?', a: 'Rekreasyonel hızlarda fark küçüktür. Sert levhalar yalnızca yarışma ve yüksek performans senaryolarında açıkça öne çıkar.' },
    ],
  },
  {
    slug: 'safety-tips',
    title: 'Sudaki Güvenlik Önerileri',
    intro: [
      'Güvenli bir seans, aynı zamanda eğlenceli bir seanstır. Bu temel kurallar göllerde, nehirlerde ve kıyı bölgelerinde de aynı şekilde geçerlidir.',
    ],
    sections: [
      {
        title: 'Rüzgarı ve Hava Durumunu Kontrol Edin',
        body: 'Kara yönünden esen rüzgar, SUP için klasik bir tuzaktır: sizi kıyıdan geri dönebildiğinizden daha hızlı uzaklaştırır. Hava durumunu kontrol edin ve emin değilseniz korunaklı suların içinde kalın.',
      },
      {
        title: 'Her Zaman Halatı Kullanın',
        body: 'Kangal halat, düşme durumunda levhanın ulaşabildiğiniz mesafede kalmasını sağlar; levha aynı zamanda yüzdürme aracınızdır. Koşullarınıza uygun halat seçin: sakin suda kangal, sörfte düz halat.',
      },
      {
        title: 'Can Yeleği ve Kişisel Güvenlik',
        body: 'Koşullar gerektirdiğinde ya da yönetmelikler öyle şart koştuğunda yüzdürme yeleği kullanın. Düdük taşıyın, rotanızı ve dönüş saatinizi birine bildirin ve su geçirmez kılıf içinde bir telefon bulundurun.',
      },
      {
        title: 'Sınırlarınızı Bilin',
        body: 'Deneyimi önce sakin suda kazanın; rüzgar ya da akıntı için acele etmeyin. Soğuk suya saygı gösterin, çünkü gücü hızla tüketir. Ve hiçbir zaman uzak ya da açık su alanlarında, bir plan olmadan tek başına paddle etmeyin.',
      },
    ],
    faqs: [
      { q: 'SUP için can yeleği gerekli mi?', a: 'Gereklilikler ülkeye ve su alanına göre değişir. Yeleğin zorunlu olmadığı yerlerde bile, halat ve yüzdürme yeleği sorumlu bir asgari standarttır; çocuklar her zaman doğru oturan bir can yeleği takmalıdır.' },
      { q: 'Gölde SUP yapmak güvenli mi?', a: 'Evet; sakin göllar öğrenmek için idealdir. Rüzgarın yönünü kontrol edin, tekne trafiğine görünür kalın ve yoğun geçiş hatlarından kaçının.' },
    ],
    related: [
      { label: 'Platformlarımızdaki güvenlik ekipmanları', href: '/tr/products' },
      { label: 'Fabrika kalite kontrolü', href: '/tr/quality' },
      { label: 'İlk levhanızı seçin', href: '/tr/guides/how-to-choose-your-sup' },
    ],
  },
  {
    slug: 'choosing-a-sup-oem-factory',
    title: 'Özel Üretim SUP Fabrikası Nasıl Seçilir',
    intro: [
      'Kendi markanız altında şişirilebilir paddle tahtası satın almak tek bir karara dayanır: ilk partiyi hangi fabrikaya emanet edeceksiniz. Bir sipariş formu göndermeden önce özel üretim SUP üreticisini nasıl değerlendireceğiniz burada.',
    ],
    sections: [
      {
        title: 'Asgari Adet Tartışmasıyla Değil, Deneme Siparişiyle Başlayın',
        body: 'Yalnızca asgari adetlerden söz eden fabrika, üretim tesisi değil, ticari ofis işaretidir. Gerçek üreticiler kademeli asgari adetler sunar: eş marka çalışmaları 5–10 adetten, pilot partiler 20–50 adetten, standart hacimli üretim 150 m rulo başına 90–100+ adetten başlar; tamamen özel kalıp projeleri ise hacim kademesinde yürür. Önce küçük bir parti sipariş edin: bu, tüm lansmanınızı riske atmadan iletişimi, şartnameye uyumu ve numune kalitesini test eder.',
      },
      {
        title: 'Nelerin Gerçekten Fabrika İçinde Olduğunu Kontrol Edin',
        body: 'Drop-stitch SUP üretiminin dört temel aşaması vardır: malzeme laminasyonu, kaynak, baskı ve montaj. Gerçek bir fabrika bunların hepsini tek çatı altında yapar ve üretim alanını gezmenize izin verir. Satış temsilcisi size bir üretim hattı gösteremiyorsa, büyük olasılıkla kalite ve teslim süresi üzerinde hiçbir kontrolü olmayan bir aracıdan satın alıyorsunuzdur.',
      },
      {
        title: 'Numuneler Seri Üretimle Örtüşmek Zorundadır',
        body: 'Elle tamamlanmış bir numune kolaydır; tutarlı seri üretim zordur. Fabrikaya tekrar edilebilirliği nasıl kontrol ettiğini sorun: malzeme parti kayıtları, kaynak parametreleri ve yalnızca onayladığınız numune için değil, her tek levhada uygulanan bir kalite kontrol listesi.',
      },
      {
        title: 'Sipariş Formundan Önce Maliyetleri Öğrenin',
        body: 'Maliyet tablosunu yazılı olarak isteyin: miktara göre birim fiyat, yeni bir şekil istiyorsanız kalıp maliyetleri, tasarım ve baskı hazırlığı ile ambalajlama.',
      },
      {
        title: 'Üçüncü Taraf Denetimi İsteyin',
        body: "Saygın OEM SUP fabrikaları sevkiyat öncesi denetimleri memnuniyetle karşılar; birçok marka her konteyner için bağımsız bir kalite kontrol ziyareti organize eder. Fabrikanın hem numune hem de seri üretim partileri için denetim organize edebildiğinden ve reddedilen ünitelerin (örneğin basıncın yüzde 5'inden fazlasını kaybeden levhalar gibi) partiden çıkarıldığından emin olun.",
      },
      {
        title: 'Gerçekçi ve Tutan Teslim Süreleri',
        body: 'Şişirilebilir SUP\'lerde numuneler 7–12 günde, seri üretim ise sipariş formu ve depozito onaylandıktan sonra 25–35 günde tamamlanır; yeni kalıp sipariş ettiğinizde kalıp süresi eklenir. Herkesten belirgin şekilde daha kısa süreler veren fabrika, üretim programından değil, broşürden fiyat vermektedir.',
      },
    ],
    faqs: [
      { q: 'Özel üretim SUP levhaları için asgari sipariş nedir?', a: 'Kademeli asgari adetler standarttır: numuneler için 1–2 adet, eş marka için 5–10 adet, pilot parti için 20–50 adet ve standart hacim için 150 m rulo başına 90–100+ adet; tamamen özel kalıp projeleri hacim kademesinde yürür.' },
      { q: 'Seri üretimden önce numune görebilir miyim?', a: 'Evet; numuneler 7–12 günde hazır olur. Çoğu fabrika, ilk üretim siparişi onaylandıktan sonra numune ve kalıp maliyetlerini bu siparişten mahsup eder.' },
      { q: 'Bir SUP fabrikasının gerçek olduğunu nasıl doğrularım?', a: 'Üretim alanının canlı video turu isteyin, Qingdao ya da başka bir üretim merkezinde faal bir tesis adresini doğrulayın ve önceki ihracat siparişlerine ilişkin belgeleri talep edin. Deneme siparişi nihai kanıttır.' },
      { q: 'Bir SUP fabrikasının teklifi neleri içermelidir?', a: 'Levha başına birim fiyat, kalıp maliyetleri, tasarım hazırlığı, ambalajlama, kalite kontrol ve denetim koşulları ile ödeme koşulları.' },
    ],
    related: [
      { label: 'OEM / ODM üretimimiz', href: '/tr/oem-manufacturing' },
      { label: 'SUP ürün geliştirme süreci', href: '/tr/product-development' },
      { label: 'Fabrika kapasitesi ve üretim tesisi', href: '/tr/factory' },
      { label: 'Kaliteyi nasıl kontrol ediyoruz — 7 kontrol noktası', href: '/tr/quality' },
      { label: 'MOQ ve esnek markalama rehberi (PDF)', href: '/tr/oem-moq-guide' },
      { label: 'Bizi doğrulayın: güven ve fabrika garantileri', href: '/tr/oem-trust-assurance' },
      { label: 'Özel SUP projenizi başlatın', href: '/tr/contact' },
    ],
  },
  {
    slug: 'private-label-sup-guide',
    title: 'Özel Markalı SUP: Fabrikadan Gerçekte Ne Alırsınız',
    intro: [
      'Özel marka, bir SUP markasını piyasaya çıkarmanın en hızlı yoludur: sıfırdan levha tasarlamanın maliyeti ve riski olmadan, kendi logonuzu kanıtlanmış bir platforma koyarsınız. Özel üretim SUP üreticisiyle çalışmanın gerçekte neler içerdiğini burada bulabilirsiniz.',
    ],
    sections: [
      {
        title: 'Özel Marka, Kanıtlanmış Platformlar Anlamına Gelir',
        body: 'Fabrikanın zaten üretip test ettiği platformlarla başlarsınız: her yönlü, tur, yoga, yarış ve daha fazlası. Fabrika markalama, grafik ve kaplama detaylarını özelleştirir; bu da maliyetleri düşük, teslim sürelerini kısa tutar. Asgari adetler kademelidir: eş marka çalışmaları 5–10 adetten, pilot partiler 20–50 adetten, standart özel marka hacmi ise 150 m rulo başına 90–100+ adetten başlar.',
      },
      {
        title: 'Markalama Logodan Fazlasıdır',
        body: 'Özel marka çalışması; logonuzun basılmasını (dijital veya serigrafi baskı), özel renk kombinasyonlarını, levha formuna göre kesilmiş ve logonuzlu EVA kaymaz padleri, aksesuar markalamasını (paddle, pompa, halat), perakende kutu tasarımını ve hatta satış noktası standlarını kapsar. Tasarım dosyanızı gönderin; fabrika üretim öncesi bir görsel numara hazırlar.',
      },
      {
        title: 'Fabrika Sizin Adınıza Neleri Yapar',
        body: 'Tam donanımlı bir SUP fabrikası tasarım hazırlığını, malzeme tedariki, numune üretimini, 100 maddelik montaj kalite kontrol listesini, basınç testini ve ihracat belgelerini (fatura, paketleme listesi, menşe şahadetnamesi) yönetir. Siz numuneleri inceler ve onaylarsınız; geri kalan her şeyi fabrika yürütür.',
      },
      {
        title: 'Sizin Sahip Olduklarınız: Marka, Pazar, Müşteri',
        body: 'Özel marka modelinde levhaları fabrika üretir, marka ise sizindir. Güvenilir üreticiler kendi levhalarını sizin pazarınızda perakende olarak satmaz ve sizin özel tasarımınızı başkalarına satmaz. Teklifinizde pazar münhasırlığı isteyin.',
      },
      {
        title: 'Maliyetler: Numune, Kalıp, Tasarım Hazırlığı',
        body: 'Üç tür ücret bekleyin: numune ücretleri (üretimi 7–12 gün), yeni kalıp gerektiğinde kalıp maliyetleri (hacim kademesinde asgari adet) ve baskı için tasarım hazırlığı. Çoğu fabrika numune ve kalıp maliyetlerini ilk üretim siparişinize mahsup eder.',
      },
      {
        title: 'Sipariş Formundan Tamamlanan Partiye',
        body: 'Tipik bir özel marka üretimi: %30 depoziton üretimi başlatır, seri üretim sipariş formu ve depozito onaylandıktan sonra 25–35 günde tamamlanır ve bakiye onaylanan partinin kabulüne karşı ödenir. İlk siparişinizde tüm süreci kapsayan bir bütçe ayırın.',
      },
    ],
    faqs: [
      { q: 'Özel markalı SUP levhaları için asgari sipariş nedir?', a: 'Eş marka çalışmaları 5–10 adetten, pilot partiler 20–50 adetten, standart özel marka hacmi ise 150 m rulo başına 90–100+ adetten başlar; tamamen özel kalıp projeleri hacim kademesinde yürür.' },
      { q: 'Kendi logomu ve tasarım dosyamı gönderebilir miyim?', a: 'Evet; logonuzu ve tasarım dosyanızı gönderin. Fabrika üretim öncesi bir görsel numara hazırlar, böylece renkleri, yerleşimi ve kaplama detaylarını onaylarsınız.' },
      { q: 'Özel SUP tasarımım yalnızca kendi markama mı ait?', a: 'Standart özel marka koşullarıyla evet. Satın alma sözleşmenize münhasırlık maddesi ekletilmesini isteyin; bizim gibi fabrikalar markalı tasarımınızı yeniden satmaz.' },
      { q: 'Özel markalı bir SUP siparişi ne kadar sürer?', a: 'Numuneler 7–12 günde kargolanır; seri üretim sipariş formu ve depozito onaylandıktan sonra 25–35 günde tamamlanır. İlk tam üretim için 8–12 hafta ayırın.' },
    ],
    related: [
      { label: 'Özel marka SUP çözümleri', href: '/tr/solutions/private-label-sup' },
      { label: 'Kanıtlanmış platformlara göz atın', href: '/tr/products/all-around' },
      { label: 'OEM / ODM üretim', href: '/tr/oem-manufacturing' },
      { label: 'Özel SUP projenizi başlatın', href: '/tr/contact' },
    ],
  },
  {
    slug: 'sup-fleet-guide',
    title: 'Kiralama, Resort ve Kulüpler için SUP Filosu Satın Alma',
    intro: [
      'Filo alıcılarının nihai kullanıcılardan farklı soruları vardır: bir seansta ne kadar dayandığı, standartlaştırılmış yedek parçalar, hacim seviyesinde miktarlar ve sezon sezon teslimat yapan bir tedarikçi. İlk filonuzu sipariş etmeden önce planlamanız gerekenler burada.',
    ],
    sections: [
      {
        title: 'Bir veya İki Şartnameye Standardize Edin',
        body: 'Filo operasyonu standardizasyonla yürür: çoğu misafir için tek levha boyutu (genellikle 10\'6"–11\'0" × 32"), dayanıklı tek bir paket ve tek bir yedek parça kiti. Bu, onarımları, personel eğitimini, depolamayı ve yeniden siparişleri kolaylaştırır. On farklı model satın alma dürtüsüne karşı koyun.',
      },
      {
        title: 'Ağır Kullanım Levhaları Farklı Bir Üründür',
        body: 'Kiralama levhası sezon başına onlarca seansa dayanır. Perakende levhalara kıyasla daha kalın PVC katmanları, takviyeli kenar bantları ve daha sağlam aksesuarlar belirtin. Fabrikadan filo şartnamesinin tüketici sürümünden nasıl farklılaştığını sorun; gerçek tesislerde her ikisi de vardır.',
      },
      {
        title: 'Miktarları Talebe Göre Belirleyin',
        body: 'Filo büyüklüğünüzü günlük devir ve sezon uzunluğuna göre hesaplayın: 20–30 levha küçük bir kiralama noktasına yeter, 100+ levka ise yoğun bir resort ya da kulüp. Fabrikadan talep profilinize uygun miktar önerisi isteyin.',
      },
      {
        title: 'Yedek Parçaları Filo ile Birlikte Alın',
        body: "Yedek supapları, onarım kitlerini, pompaları, halatları ve paddle'ları aynı sipariş formunda verin; şimdi birim başına maliyetleri düşüktür, ama sezon ortasında temin etmek zordur. Fabrikadan önerilen yedek parça oranını isteyin (sarf malzemelerinde tipik olarak filo büyüklüğünün %5–10'u kadar).",
      },
      {
        title: 'Sezon Sırasında Değil, Sezon Öncesinde Sipariş Verin',
        body: 'Üretim sipariş formu ve depozito onaylandıktan sonra 25–35 gün sürer. Levhaların ilkbaharda sahilde hazır olması için siparişleri sonbaharın sonunda onaylayın; böylece üretim sezon başlamadan tamamlanır.',
      },
      {
        title: 'Filoyu Yeniden Satış Değeri İçin Markalayın',
        body: 'Filo levhalarına logonuz, kiralama numaralandırma sistemi ve boyuta göre renk kodlaması eklenebilir. 200+ adetlik üretimlerde serigrafi baskı logolar maliyet açısından avantajlıdır ve markalı filo aynı zamanda su üzerinde bir pazarlama aracı olur.',
      },
    ],
    faqs: [
      { q: 'Kiralama filosu için en iyi SUP nedir?', a: 'Takviyeli yapıya sahip 10\'6"–11\'0" × 32" her yönlü levha sektör standardıdır: başlangıççılar için dengeli, günlük kullanıma dayanıklı ve bakımı kolay.' },
      { q: 'Bir kiralama işletmesi kaç levhaya ihtiyaç duyar?', a: 'Küçük bir kiralama noktası için 20–30 levha planlayın ve devir oranına göre büyütün: yoğun resortlar ve kulüpler için 100+ adet. Yedek parçalar filo büyüklüğünün %5–10 kadarı olmalıdır.' },
      { q: 'Filo levhaları logomuzla markalanabilir mi?', a: 'Evet; serigrafi baskı logolar, kiralama numaralandırması ve renk kodlu güverteler standart özelleştirmelerdir ve özellikle 200 adetten itibaren maliyet avantajı sağlar.' },
      { q: 'Filo siparişi ne kadar sürer?', a: 'Numuneler 7–12 gün, üretim sipariş formu ve depozito onaylandıktan sonra 25–35 gün sürer; bu nedenle filo siparişlerini sezon başlamadan epey önce verin.' },
    ],
    related: [
      { label: 'Resort ve kulüp çözümleri', href: '/tr/solutions/resort-sup' },
      { label: 'Örnek: çok noktalı kiralama filosu', href: '/tr/projects/rental-fleet-multi-site' },
      { label: 'Filo sınıfı platformlar', href: '/tr/products/all-around' },
      { label: 'Proje uzmanıyla görüşün', href: '/tr/contact' },
    ],
  },
]

/** Romanian variants of the guides (same slugs and ordering as GUIDES, translated copy). */
export const GUIDES_RO: Guide[] = [
  {
    slug: 'how-to-choose-your-sup',
    title: 'Cum să vă alegeți SUP-ul',
    intro: [
      'Alegerea primului SUP umflabil ține de dimensiunea plăcii, lățime, construcție și de conținutul cutiei. Iată ce contează cu adevărat, în cuvinte simple.',
    ],
    sections: [
      {
        title: 'Lungime și volum',
        body: 'Plăcile mai lungi (11–12 ft) parcurg mai mult la fiecare lovitură de vâslă și își păstrează direcția mai bine — ideale pentru croaziere și pentru vâslit pe distanțe lungi. Plăcile mai scurte virează mai ușor. Pentru majoritatea utilizatorilor, o placă all-around de 10\'6"–11\'0" este alegerea optimă.',
      },
      {
        title: 'Lățime și stabilitate',
        body: 'Lățimea influențează stabilitatea mai mult decât orice alt factor. O platformă de 32 de inch este tolerantă pentru începători și suficient de stabilă pentru yoga; plăcile de 30 de inch se potrivesc utilizatorilor mai ușori sau mai expertenți care caută viteză și agilitate.',
      },
      {
        title: 'Calitatea construcției',
        body: 'Căutați un miez drop-stitch din PVC de grad militar, rezistent la cel puțin 15 PSI, laminare PVC în strat dublu și benzi de bordură întărite. Acestea determină cât de rigidă pare placa și cât rezistă la utilizare zilnică.',
      },
      {
        title: 'Ce ar trebui să conțină cutia',
        body: 'Un pachet complet economisește bani și efort: placă, vâslă reglabilă din 3 părți, pompă bidirecțională cu manometru, leash în spirală, aripioară, rucsac de transport și kit de reparații.',
      },
    ],
    faqs: [
      { q: 'De ce dimensiune de placă SUP am nevoie?', a: 'Majoritatea începătorilor aleg o placă all-around de aproximativ 11\'0" × 32" × 6" — stabilă, versatilă și ușor de transportat. Utilizatorii mai grei sau cei care vor să parcurgă distanțe mari ar trebui să aleagă o dimensiune mai mare.' },
      { q: 'Un SUP umflabil este la fel de rigid ca o placă rigidă?', a: 'Un drop-stitch umflabil modern, umflat la 15–20 PSI, este apropiat ca rigiditate de o placă rigidă de nivel începător, cu avantajul că încape într-un rucsac.' },
    ],
    related: [
      { label: 'Vizitați platformele noastre SUP', href: '/ro/products' },
      { label: 'Umflabil sau placă rigidă', href: '/ro/inflatable-vs-hardboard' },
      { label: 'Producție OEM', href: '/ro/oem-manufacturing' },
    ],
  },
  {
    slug: 'beginner-guide',
    title: 'Ghid pentru începători la vâslit',
    intro: [
      'Tot ce aveți nevoie pentru primele sesiuni pe apă: umflarea, prima ridicare în picioare, trăsătura de bază a vâslei și cum să rămâneți în siguranță cât vă formați încredere.',
    ],
    sections: [
      {
        title: 'Umflați conform specificației, nu după senzații',
        body: 'Umflați la presiunea nominală (de regulă 15 PSI) folosind manometrul pompei. O placă umflată la 10 PSI pare corespunzătoare pe iarbă, dar se îndoaie mult pe apă. Verificați presiunea în zilele calde — soarele încălzește aerul din interior și crește presiunea.',
      },
      {
        title: 'Primii pași pe placă',
        body: 'Porniți de pe o plajă sau dintr-un punct cu apă mică: îngenuncheați mai întâi, apoi ridicați-vă câte un picior pe rând, pe centrul plăcii. Păstrați picioarele la lățimea umerilor, genunchii flexați și priviți spre orizont — placa urmează direcția în care privești.',
      },
      {
        title: 'Trăsătura de bază a vâslei',
        body: 'Întindeți vâsla în față, ancorați complet paleta în apă și trageți lama de o parte a plăcii, rotind simultan trunchiul. Schimbați partea la fiecare câteva lovituri pentru a merge drept; pentru viraj, executați câteva lovituri succesive de aceeași parte.',
      },
      {
        title: 'Practicați mai întâi căderea',
        body: 'Căderea în apă face parte din învățare. Exersați remontarea în apă mică: înotați până la mânerul central, împingeți picioarele spre suprafață și trageți-vă pe placă într-o singură mișcare.',
      },
    ],
    faqs: [
      { q: 'Cât durează până învăț să vâslesc pe SUP?', a: 'Majoritatea persoanelor pot vâsli confortabil pe ape liniștite încă din prima ședință de o oră. Încrederea în viraje, în vânt și pe distanțe se construiește pe parcursul mai multor ședințe.' },
      { q: 'Trebuie să fiu în formă?', a: 'Nu — SUP-ul este o activitate foarte accesibilă. Vâslind regulat, veți dobândi în mod natural echilibru, forță a corpului și rezistență.' },
    ],
  },
  {
    slug: 'inflatable-vs-hard',
    title: 'Umflabil sau placă rigidă',
    intro: [
      'Cele două familii de construcție câștigă în scenarii diferite. Iată comparația onestă pentru utilizatorii de recreație, cluburile și operatorii de închiriere.',
    ],
    sections: [
      {
        title: 'Portabilitate și depozitare',
        body: 'Plăcile umflabile se dezumflă și încap într-un rucsac, care încape în portbagajul unei mașini, într-o rulotă sau în dulapul unui apartament — și reprezintă alegerea implicită pentru călătorii. Plăcile rigide necesită suporturi de bagaje, spațiu de depozitare și o manipulare mai atentă.',
      },
      {
        title: 'Rigiditate și performanță',
        body: 'Plăcile rigide premium sunt mai rigide și mai receptive la niveluri de performanță ridicate. La vitezele de recreație, o placă umflabilă drop-stitch bine construită, umflată la 15–20 PSI, oferă o performanță comparabilă la o fracție din costul de depozitare.',
      },
      {
        title: 'Durabilitate',
        body: 'Plăcile umflabile din PVC rezistă la zgârieturi de la pontoane și la loviturile de mal care ar fisura un înveliș rigid — unul dintre motivele principale pentru care flotele de închiriere și resorturile aleg plăci umflabile pentru utilizarea zilnică de către oaspeți.',
      },
      {
        title: 'Cost total de proprietate',
        body: 'Plăcile umflabile costă mai puțin la transport, depozitare și întreținere și rezistă mai bine la o manipulare dură. Pentru majoritatea utilizatorilor și a flotelor, o placă umflabilă oferă cea mai bună valoare generală.',
      },
    ],
    faqs: [
      { q: 'Ce este mai bun pentru începători?', a: 'Plăcile umflabile — stabile, tolerante, ușor de depozitat și suficient de durabile pentru zgârieturile pe care le produc începătorii.' },
      { q: 'Poate un SUP umflabil să fie la fel de rapid ca o placă rigidă?', a: 'La vitezele de recreație diferența este mică. Plăcile rigide câștigă clar doar în scenariile de competiție și de înaltă performanță.' },
    ],
  },
  {
    slug: 'safety-tips',
    title: 'Recomandări de siguranță pe apă',
    intro: [
      'O ședință sigură este o ședință plăcută. Aceste noțiuni de bază se aplică la fel pe lacuri, râuri și în paddlingul de coastă.',
    ],
    sections: [
      {
        title: 'Verificați vântul și prognoza',
        body: 'Vântul dinspre uscat este capcana clasică a SUP-ului: vă îndepărtează de țărm mai repede decât puteți vâsli înapoi. Verificați prognoza și, la îndoială, rămâneți în ape adăpostite.',
      },
      {
        title: 'Purtați întotdeauna leash-ul',
        body: 'Un leash în spirală ține placa la îndemână dacă cădeți — placa este chiar dispozitivul dumneavoastră de flotabilitate. Alegeți un leash potrivit condițiilor: în spirală pentru ape liniștite, drept pentru surf.',
      },
      {
        title: 'Vesta de salvare și siguranța personală',
        body: 'Purtați un mijloc de flotabilitate atunci când condițiile o impun sau când reglementările o cer. Aveți la îndemână un fluier, anunțați pe cineva traseul și ora de întoarcere și aveți în vedere un telefon într-un compartiment impermeabil.',
      },
      {
        title: 'Cunoașteți-vă limitele',
        body: 'Câștigați experiență pe ape liniștite înainte de a vă expune vântului sau curentului. Respectați apa rece — vă golește rapid de putere. Și nu vâsliți niciodată singuri în zone izolate sau în larg, fără un plan.',
      },
    ],
    faqs: [
      { q: 'Am nevoie de vestă de salvare pe un SUP?', a: 'Cerințele variază în funcție de țară și de cursul apei. Chiar și acolo unde este opțională, un leash și un mijloc de flotabilitate reprezintă baza responsabilă, iar copiii trebuie să poarte mereu o vestă de salvare corect dimensionată.' },
      { q: 'Este sigur să vâslesc pe un lac?', a: 'Da — lacurile liniștite sunt ideale pentru învățare. Verificați direcția vântului, păstrați-vă vizibil pentru traficul de ambarcațiuni și evitați benzile de circulație aglomerate.' },
    ],
    related: [
      { label: 'Echipament de siguranță pe platformele noastre', href: '/ro/products' },
      { label: 'Controlul calității în fabrică', href: '/ro/quality' },
      { label: 'Alegeți-vă prima placă', href: '/ro/guides/how-to-choose-your-sup' },
    ],
  },
  {
    slug: 'choosing-a-sup-oem-factory',
    title: 'Cum să alegeți o fabrică OEM de SUP personalizate',
    intro: [
      'Achiziția de plăci SUP umflabile sub marca dumneavoastră se reduce la o singură decizie: cui îi încredințați primul lot. Iată cum evaluați un producător de SUP personalizate înainte de a trimite o PO.',
    ],
    sections: [
      {
        title: 'Începeți cu o comandă de probă, nu cu o discuție despre MOQ',
        body: 'O fabrică care vorbește doar despre cantități minime este semn că este un birou de comerț, nu o uzină. Producătorii reali oferă minime pe niveluri — co-branding de la 5–10 bucăți, loturi pilot de la 20–50 bucăți, serii standard de la 90–100+ bucăți pe rolă de 150 m, iar proiectele cu matriță complet personalizată la nivelul de volum. Comandați mai întâi un lot mic: acesta verifică comunicarea, disciplina specificațiilor și calitatea mostrelor fără a vă pune în joc toată lansarea.',
      },
      {
        title: 'Verificați ce se produce efectiv în fabrică',
        body: 'Producția de SUP drop-stitch are patru etape de bază: laminarea materialelor, sudarea, imprimarea și asamblarea. O fabrică autentică le realizează pe toate sub același acoperiș și vă permite să vizitați sala de producție. Dacă reprezentantul de vânzări nu vă poate arăta o linie de producție, cel mai probabil cumpărați printr-un intermediar, fără niciun control asupra calității sau al termenelor.',
      },
      {
        title: 'Mostrele trebuie să corespundă producției de serie',
        body: 'O mostră finisată manual este ușoară; producția de serie constantă este grea. Întrebați cum controlează fabrica repetabilitatea: înregistrări de lot de material, parametri de sudare și o listă de control al calității aplicată fiecărei plăci, nu doar celei pe care o aprobați.',
      },
      {
        title: 'Cunoașteți costurile înainte de PO',
        body: 'Solicitați în scris imaginea completă a costurilor: preț unitar în funcție de cantitate, costuri de unelte sau de matriță dacă doriți o formă nouă, pregătirea graficii și a imprimării și ambalajul.',
      },
      {
        title: 'Solicitați inspecție terță parte',
        body: 'Fabricile OEM de SUP de reputație acceptă inspecțiile înainte de livrare — multe mărci rezervă o vizită de control al calității terț pentru fiecare container. Confirmați că fabrica poate organiza inspecții atât pentru mostre, cât și pentru serii și că unitățile respinse (de exemplu plăcile care pierd mai mult de 5% din presiune) sunt excluse din lot.',
      },
      {
        title: 'Termene de livrare respectate',
        body: 'Pentru SUP-urile umflabile, așteptați mostre în 7–12 zile și producție de serie în 25–35 de zile după confirmarea PO-ului și a avansului, plus timpul de execuție al matriței atunci când comandați o formă nouă. O fabrică care oferă termene semnificativ mai scurte decât restul pieței citește dintr-o broșură, nu dintr-un grafic de producție.',
      },
    ],
    faqs: [
      { q: 'Care este comanda minimă pentru plăci SUP personalizate?', a: 'Minimele pe niveluri sunt standard: 1–2 bucăți pentru mostre, 5–10 bucăți pentru co-branding, 20–50 bucăți pentru un lot pilot și 90–100+ bucăți pe rolă de 150 m pentru volumul standard; proiectele cu matriță complet personalizată se rulează la nivelul de volum.' },
      { q: 'Pot vedea o mostră înainte de producția de serie?', a: 'Da — mostrele sunt gata în 7–12 zile. Majoritatea fabricilor scad costurile mostrelor și ale matriței din prima comandă de producție, după confirmarea acesteia.' },
      { q: 'Cum verific dacă o fabrică de SUP este reală?', a: 'Solicitați un tur video live al halei de producție, verificați existența unei adrese de uzină în funcțiune la Qingdao sau într-un alt centru industrial și cereți documentația comenzilor anterioare de export. Comanda de probă rămâne dovada finală.' },
      { q: 'Ce ar trebui să conțină oferta unei fabrici de SUP?', a: 'Prețul unitar pe placă, costurile de unelte sau de matriță, pregătirea graficii, ambalajul, condițiile de control al calității și de inspecție și condițiile de plată.' },
    ],
    related: [
      { label: 'Producția noastră OEM / ODM', href: '/ro/oem-manufacturing' },
      { label: 'Procesul de dezvoltare a produsului SUP', href: '/ro/product-development' },
      { label: 'Capacitatea fabricii și unitatea de producție', href: '/ro/factory' },
      { label: 'Cum controlăm calitatea — 7 etape de inspecție', href: '/ro/quality' },
      { label: 'Ghid MOQ și branding flexibil (PDF)', href: '/ro/oem-moq-guide' },
      { label: 'Verificați-ne: încredere și garanții de fabrică', href: '/ro/oem-trust-assurance' },
      { label: 'Începeți un proiect SUP personalizat', href: '/ro/contact' },
    ],
  },
  {
    slug: 'private-label-sup-guide',
    title: 'SUP cu marca proprie: ce primiți cu adevărat de la o fabrică',
    intro: [
      'Marca proprie este cel mai rapid mod de a lansa un brand de SUP: logo-ul dumneavoastră pe o platformă dovedită, fără costul și riscul proiectării unei plăci de la zero. Iată ce presupune în realitate lucrul cu un producător de SUP personalizate.',
    ],
    sections: [
      {
        title: 'Marca proprie înseamnă platforme dovedite',
        body: 'Porniți de la platforme pe care fabrica le construiește și le testează deja — all-around, touring, yoga, race și altele. Fabrica personalizează brandingul, grafica și detaliile de finisare, ceea ce menține costurile mici și termenele scurte. Minimele sunt pe niveluri: co-branding de la 5–10 bucăți, loturi pilot de la 20–50 bucăți și 90–100+ bucăți pe rolă de 150 m pentru volumul standard de marcă proprie.',
      },
      {
        title: 'Brandingul depășește logo-ul',
        body: 'Marca proprie include tipărirea logo-ului (digitală sau serigrafică), scheme de culori proprii, tampoane de tracțiune EVA tăiate la forma plăcii, cu logo-ul dumneavoastră, brandingul accesoriilor (vâslă, pompă, leash), designul cutiei de retail și chiar rafturile de expunere din punctele de vânzare. Trimiteți fișierele grafice, iar fabrica produce o dovadă vizuală înainte de producție.',
      },
      {
        title: 'Ce gestionează fabrica pentru dumneavoastră',
        body: 'O fabrică de SUP cu servicii complete se ocupă de pregătirea graficii, de achiziția materialelor, de producerea mostrelor, de lista de control a calității de asamblare în 100 de puncte, de testul de presiune și de documentația de export (factură, listă de ambalare, certificat de origine). Dumneavoastră verificați mostrele și le aprobați — fabrica conduce tot restul.',
      },
      {
        title: 'Ce dețineți: marca, piața, clientul',
        body: 'Într-un acord de marcă proprie, fabrica construiește plăcile, iar marca vă aparține. Producătorii serioși nu își vând propriile plăci cu amănuntul pe piața dumneavoastră și nu vând altora designul personalizat făcut pentru voi. Cereți în ofertă o clauză de exclusivitate teritorială.',
      },
      {
        title: 'Costuri: mostră, matriță, pregătirea graficii',
        body: 'Așteptați trei tipuri de costuri: taxa pentru mostre (7–12 zile până la producere), costurile matriței atunci când este necesară o formă nouă (minim la nivelul de volum) și pregătirea graficii pentru imprimare. Majoritatea fabricilor scad costurile mostrelor și ale matriței din prima comandă de producție.',
      },
      {
        title: 'De la PO la lotul finalizat',
        body: 'O serie tipică de marcă proprie: un avans de 30% declanșează producția, seria se finalizează în 25–35 de zile după confirmarea PO-ului și a avansului, iar soldul se reglează la acceptarea lotului aprobat. Bugetați întreaga serie în prima comandă.',
      },
    ],
    faqs: [
      { q: 'Care este comanda minimă pentru plăci SUP cu marcă proprie?', a: 'Co-branding de la 5–10 bucăți, loturi pilot de la 20–50 bucăți și volum standard de marcă proprie de la 90–100+ bucăți pe rolă de 150 m; proiectele cu matriță complet personalizată se rulează la nivelul de volum.' },
      { q: 'Pot trimite propriul logo și propria grafică?', a: 'Da — trimiteți logo-ul și fișierele grafice; fabrica produce o dovadă vizuală înainte de producție, astfel încât să aprobați culorile, poziționarea și finisajele.' },
      { q: 'Designul meu personalizat de SUP este exclusiv pentru marca mea?', a: 'Da, în condițiile standard de marcă proprie. Cereți o clauză de exclusivitate în contractul de achiziție; fabricile precum a noastră nu revând designul cu marca dumneavoastră.' },
      { q: 'Cât durează o comandă de SUP cu marcă proprie?', a: 'Mostrele se expediază în 7–12 zile; producția de serie se finalizează în 25–35 de zile după confirmarea PO-ului și a avansului. Bugetați 8–12 săptămâni pentru prima serie completă.' },
    ],
    related: [
      { label: 'Soluții SUP cu marcă proprie', href: '/ro/solutions/private-label-sup' },
      { label: 'Vizitați platformele dovedite', href: '/ro/products/all-around' },
      { label: 'Producție OEM / ODM', href: '/ro/oem-manufacturing' },
      { label: 'Începeți un proiect SUP personalizat', href: '/ro/contact' },
    ],
  },
  {
    slug: 'sup-fleet-guide',
    title: 'Achiziția flotelor de SUP pentru închirieri, resorturi și cluburi',
    intro: [
      'Cumpărătorii de flote au nevoie de alte răspunsuri decât utilizatorii finali: durabilitatea la o ședință, piesele de rezervă standardizate, cantitățile la nivel de volum și un furnizor care livrează sezon după sezon. Iată ce trebuie să planificați înainte de a comanda prima flotă.',
    ],
    sections: [
      {
        title: 'Standardizați pe una sau două specificații',
        body: 'Operațiunile de flotă se bazează pe standardizare: o singură dimensiune de placă (de regulă 10\'6"–11\'0" × 32") pentru majoritatea oaspeților, un singur pachet rezistent la uzură și un singur kit de rezervă. Astfel se simplifică reparațiile, trainingul personalului, depozitarea și re-comandarea. Rezistați tentației de a cumpăra zece modele diferite.',
      },
      {
        title: 'Plăcile pentru utilizare intensă sunt un alt produs',
        body: 'O placă de închiriere rezistă la zeci de ședințe pe sezon. Specificați straturi PVC mai groase, benzi de bordură întărite și accesorii mai rezistente decât la plăcile de retail. Întrebați fabrica cum diferă specificația de flotă față de versiunea de consum — uzinele reale au ambele variante.',
      },
      {
        title: 'Dimensionați cantitățile în funcție de cerere',
        body: 'Calculați dimensiunea flotei raportat la rotația zilnică și la durata sezonului: 20–30 de plăci deservesc un punct mic de închiriere, iar 100+ un resort sau un club aglomerat. Cereți fabricii o recomandare de cantitate potrivită tipului dumneavoastră de cerere.',
      },
      {
        title: 'Comandați piesele de rezervă împreună cu flota',
        body: 'Includeți supape de rezervă, kituri de reparații, pompe, leash-uri și vâsle în aceeași PO — acum costă puțin pe bucată, iar la mijlocul sezonului sunt greu de procurat. Cereți fabricii raportul recomandat de rezervă (de regulă 5–10% din dimensiunea flotei pentru consumabile).',
      },
      {
        title: 'Comandați înainte de sezon, nu în timpul lui',
        body: 'Producția durează 25–35 de zile după confirmarea PO-ului și a avansului. Pentru a avea plăcile pe plajă până în primăvară, confirmați comenzile la sfârșitul toamnei, astfel încât producția să se încheie înainte de începerea sezonului.',
      },
      {
        title: 'Branded flotă pentru valoare de revânzare',
        body: 'Plăcile de flotă pot purta logo-ul dumneavoastră, un sistem de numerotare pentru închirieri și o codificare cromatică după dimensiune. Logo-urile serigrafice sunt rentabile la serii de 200+ bucăți, iar o flotă cu marcă face, în același timp, și rol de marketing pe apă.',
      },
    ],
    faqs: [
      { q: 'Care este cel mai bun SUP pentru o flotă de închiriere?', a: 'O placă all-around de 10\'6"–11\'0" × 32", cu construcție întărită, este standardul industriei — stabilă pentru începători, rezistentă la utilizare zilnică și ușor de întreținut.' },
      { q: 'Câte plăci are nevoie de o operațiune de închiriere?', a: 'Planificați 20–30 de plăci pentru un punct mic de închiriere și scalați în funcție de rotație: 100+ bucăți pentru resorturi și cluburi aglomerate. Piesele de rezervă ar trebui să reprezinte 5–10% din dimensiunea flotei.' },
      { q: 'Pot fi marcată plăcile de flotă cu logo-ul nostru?', a: 'Da — logo-urile serigrafice, numerotarea pentru închirieri și deck-urile cu cod cromatic sunt personalizări standard, deosebit de rentabile începând de la 200 de bucăți.' },
      { q: 'Cât durează o comandă de flotă?', a: 'Mostre în 7–12 zile și producție în 25–35 de zile după confirmarea PO-ului și a avansului — așadar, plasați comenzile de flotă cu mult înainte de începerea sezonului.' },
    ],
    related: [
      { label: 'Soluții pentru resorturi și cluburi', href: '/ro/solutions/resort-sup' },
      { label: 'Studiu de caz: flotă de închiriere multi-site', href: '/ro/projects/rental-fleet-multi-site' },
      { label: 'Platforme pentru flote', href: '/ro/products/all-around' },
      { label: 'Vorbiți cu un specialist de proiect', href: '/ro/contact' },
    ],
  },
]

const GUIDES_BY_LOCALE: Record<string, Guide[]> = { en: GUIDES, es: GUIDES_ES, fr: GUIDES_FR, de: GUIDES_DE, it: GUIDES_IT, pt: GUIDES_PT, nl: GUIDES_NL, sv: GUIDES_SV, no: GUIDES_NO, pl: GUIDES_PL, da: GUIDES_DA, fi: GUIDES_FI, ru: GUIDES_RU, cs: GUIDES_CS, tr: GUIDES_TR, ro: GUIDES_RO }

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
  sv: [
    {
      slug: 'how-to-choose-your-sup',
      title: 'Så väljer du din SUP',
      intro:
        'Ditt val av första uppblåsbara SUP handlar om brädans storlek, bredd, konstruktion och vad som ingår i paketet. Här är vad som spelar roll, i klartext.',
    },
    {
      slug: 'beginner-guide',
      title: 'Paddelguide för nybörjare',
      intro:
        'Allt du behöver för dina första pass på vattnet: uppblåsning, första gången i stående, grundpaddeltaget och hur du håller dig trygg.',
    },
    {
      slug: 'inflatable-vs-hard',
      title: 'Uppblåsbar vs. hård bräda',
      intro:
        'De två konstruktionsfamiljerna vinner i olika scenarier. Här är den ärliga jämförelsen för fritidspaddlare, klubbar och uthyrningsverksamheter.',
    },
    {
      slug: 'safety-tips',
      title: 'Säkerhetstips på vattnet',
      intro:
        'En säker session är en rolig session. Dessa grunder gäller lika för sjöar, floder och kustpaddling.',
    },
    {
      slug: 'choosing-a-sup-oem-factory',
      title: 'Så väljer du en OEM-fabrik för skräddarsydda SUPar',
      intro:
        'Så här utvärderar du en tillverkare av skräddarsydda SUPar innan du lägger en beställning: provbeställning, egen produktion, prov, kostnader och inspektion.',
    },
    {
      slug: 'private-label-sup-guide',
      title: 'Privat etikett SUP',
      intro:
        'Vad ett privat etikett-avtal faktiskt innebär: beprövade plattformar, komplett branding, kostnader, exklusivitet och ledtider.',
    },
    {
      slug: 'sup-fleet-guide',
      title: 'Att köpa SUP-flottor',
      intro:
        'Flottplanering för uthyrning, resorter och klubbar: robust specifikation, kvantiteter per container, reservdelar och säsongsvariation.',
    },
  ],
  no: [
    {
      slug: 'how-to-choose-your-sup',
      title: 'Så velger du din SUP',
      intro:
        'Valget av din første oppblåsbare SUP handler om brettets størrelse, bredde, konstruksjon og hva som følger med i esken. Her er det som betyr noe, i klartekst.',
    },
    {
      slug: 'beginner-guide',
      title: 'Padleguide for nybegynnere',
      intro:
        'Alt du trenger for de første turene på vannet: oppblåsing, din første stående tur, grunnslaget i padling og hvordan du holder deg trygg.',
    },
    {
      slug: 'inflatable-vs-hard',
      title: 'Oppblåsbar vs. hardt brett',
      intro:
        'De to konstruksjonsfamiliene vinner i ulike scenarier. Her er den ærlige sammenligningen for fritidspadlere, klubber og utleievirksomheter.',
    },
    {
      slug: 'safety-tips',
      title: 'Sikkerhetstips på vannet',
      intro:
        'En trygg tur er en morsom tur. Disse grunnpillene gjelder like godt for innsjøer, elver og kystpadling.',
    },
    {
      slug: 'choosing-a-sup-oem-factory',
      title: 'Så velger du en OEM-fabrikk for skreddersydde SUPar',
      intro:
        'Så vurderer du en produsent av skreddersydde SUPar før du legger inn en bestilling: prøvebestilling, egen produksjon, prøver, kostnader og inspeksjon.',
    },
    {
      slug: 'private-label-sup-guide',
      title: 'Private label SUP',
      intro:
        'Hva et private label-samarbeid faktisk innebærer: utprøvde plattformer, komplett branding, kostnader, eksklusivitet og leveringstider.',
    },
    {
      slug: 'sup-fleet-guide',
      title: 'Å kjøpe SUP-flåter',
      intro:
        'Flåteplanlegging for utleie, resorts og klubber: robust spesifikasjon, kvantiteter per container, reservedeler og sesongvariasjon.',
    },
  ],
  pl: [
    {
      slug: 'how-to-choose-your-sup',
      title: 'Jak wybrać deskę SUP',
      intro:
        'Wybór pierwszej nadmuchiwanej deski SUP zależy od rozmiaru deski, szerokości, konstrukcji i tego, co znajduje się w zestawie. Oto, co naprawdę ma znaczenie — po prostu.',
    },
    {
      slug: 'beginner-guide',
      title: 'Przewodnik początkującego',
      intro:
        'Wszystko, czego potrzebujesz na pierwsze wypady na wodzie: pompowanie, pierwsze wstanie na deskę, podstawowy styl wiosłowania i bezpieczeństwo.',
    },
    {
      slug: 'inflatable-vs-hard',
      title: 'Nadmuchiwana vs deska twarda',
      intro:
        'Te dwie rodziny konstrukcji wygrywają w różnych scenariuszach. Oto uczciwe porównanie dla osób pływających rekreacyjnie, klubów i wypożyczalni.',
    },
    {
      slug: 'safety-tips',
      title: 'Bezpieczeństwo na wodzie',
      intro:
        'Bezpieczny wypad to udany wypad. Te podstawowe zasady dotyczą tak samo jezior, rzek, jak i wiosłowania przybrzeżnego.',
    },
    {
      slug: 'choosing-a-sup-oem-factory',
      title: 'Jak wybrać fabrykę OEM desek SUP na zamówienie',
      intro:
        'Jak ocenić producenta desek SUP na zamówienie przed wysłaniem zamówienia: zamówienie próbne, własna produkcja, próbki, koszty i inspekcja.',
    },
    {
      slug: 'private-label-sup-guide',
      title: 'SUP pod własną marką',
      intro:
        'Co naprawdę obejmuje współpraca pod własną marką: sprawdzone platformy, pełny branding, koszty, wyłączność i terminy.',
    },
    {
      slug: 'sup-fleet-guide',
      title: 'Zakup flot desek SUP',
      intro:
        'Planowanie floty dla wypożyczalni, resortów i klubów: wytrzymała specyfikacja, ilości na kontener, części zamienne i sezonowość.',
    },
  ],
  da: [
    {
      slug: 'how-to-choose-your-sup',
      title: 'Sådan vælger du dit SUP-bræt',
      intro:
        'Valget af dit første oppustelige SUP-bræt handler om størrelse, bredde, konstruktion og hvad der er i kassen. Her er det, der betyder noget, i klare ord.',
    },
    {
      slug: 'beginner-guide',
      title: 'Begynderguide i padling',
      intro:
        'Alt du skal bruge til dine første ture på vandet: oppustning, den første gang du står op, det grundlæggende pagajtag, og hvordan du holder dig sikker.',
    },
    {
      slug: 'inflatable-vs-hard',
      title: 'Oppusteligt vs. hårdt bræt',
      intro:
        'De to konstruktionsfamilier vinder i hver deres situation. Her er den ærlige sammenligning til rekreative pagajere, klubber og udlejningsvirksomheder.',
    },
    {
      slug: 'safety-tips',
      title: 'Sikkerhed på vandet',
      intro:
        'En sikker tur er en god tur. Denne grundviden gælder lige så vel søer, åer som kystpadling.',
    },
    {
      slug: 'choosing-a-sup-oem-factory',
      title: 'Sådan vælger du en OEM-fabrik til specialfremstillede SUP-bræt',
      intro:
        'Sådan vurderer du en leverandør af specialfremstillede SUP-bræt, før du sender ordren: prøveordre, egen produktion, prøver, omkostninger og inspektion.',
    },
    {
      slug: 'private-label-sup-guide',
      title: 'SUP under eget mærke',
      intro:
        'Hvad et samarbejde om eget mærke reelt indebærer: afprøvede platforme, komplet branding, omkostninger, eksklusivitet og leveringstider.',
    },
    {
      slug: 'sup-fleet-guide',
      title: 'Køb af SUP-flåder',
      intro:
        'Flådeplanlægning til udlejning, resorter og klubber: holdbar specifikation, mængder pr. container, reservedele og sæsonudsving.',
    },
  ],
  fi: [
    {
      slug: 'how-to-choose-your-sup',
      title: 'Näin valitset SUP-lautasi',
      intro:
        'Ensimmäisen puhallettavan SUP-lautasi valinta ratkeaa laudan koon, leveyden, rakenteen ja pakkaussisällön kautta. Tässä on, millä on oikeasti merkitystä — selkein sanoin.',
    },
    {
      slug: 'beginner-guide',
      title: 'Aloittelijan opas melontaan',
      intro:
        'Kaikki, mitä tarvitset ensimmäisiin vetoihisi vedellä: täyttäminen, ensimmäinen koho kantaan, perusmelontateko ja se, miten pysyt turvassa.',
    },
    {
      slug: 'inflatable-vs-hard',
      title: 'Puhallettava vai kovalauta',
      intro:
        'Nämä kaksi rakennetyyppää voittavat kummallakin omassa tilanteessaan. Tässä on rehellinen vertailu virkistymelajille, seuroille ja vuokrausyrityksille.',
    },
    {
      slug: 'safety-tips',
      title: 'Turvallisuus vedellä',
      intro:
        'Turvallinen veto on hauska veto. Nämä perusjutut koskevat yhtä hyvin järviä, jokia kuin rannikkovesiäkin.',
    },
    {
      slug: 'choosing-a-sup-oem-factory',
      title: 'Näin valitset räätälöityjen SUP-lautojen OEM-tehtaan',
      intro:
        'Näin arvioit räätälöityjen SUP-lautojen valmistajan ennen tilauksen lähettämistä: koetilaus, oma tuotanto, näytteet, kustannukset ja tarkastus.',
    },
    {
      slug: 'private-label-sup-guide',
      title: 'SUP omalla brändillä',
      intro:
        'Mitä oman brändin yhteistyö oikeasti sisältää: todennetut alustat, täydellinen brändäys, kustannukset, eksklusiivisuus ja toimitusajat.',
    },
    {
      slug: 'sup-fleet-guide',
      title: 'SUP-laivojen hankinta',
      intro:
        'Laivaston suunnittelu vuokraukseen, resorteille ja seuroille: kestävä spesifikaatio, määrät konttia kohti, varaosat ja kausivaihtelut.',
    },
  ],
  ru: [
    {
      slug: 'how-to-choose-your-sup',
      title: 'Как выбрать SUP-доску',
      intro:
        'Выбор первой надувной SUP-доски сводится к размеру доски, ширине, конструкции и комплектации. Вот что действительно важно — простым языком.',
    },
    {
      slug: 'beginner-guide',
      title: 'Руководство по гребле для начинающих',
      intro:
        'Всё, что нужно для первых выходов на воду: накачивание, первое вставание на доску, базовый гребок и как оставаться в безопасности, набирая уверенность.',
    },
    {
      slug: 'inflatable-vs-hard',
      title: 'Надувная доска или жёсткая',
      intro:
        'У каждого из двух типов конструкции есть свои преимущества. Вот честное сравнение для отдыхающих гребцов, клубов и прокатных операторов.',
    },
    {
      slug: 'safety-tips',
      title: 'Техника безопасности на воде',
      intro:
        'Безопасный выход — это удачный выход. Эти базовые правила одинаково применимы к озёрам, рекам и прибрежным маршрутам.',
    },
    {
      slug: 'choosing-a-sup-oem-factory',
      title: 'Как выбрать OEM-фабрику индивидуальных SUP-досок',
      intro:
        'Как оценить производителя индивидуальных SUP-досок до отправки заказа: пробный заказ, собственное производство, образцы, затраты и инспекция.',
    },
    {
      slug: 'private-label-sup-guide',
      title: 'SUP под собственной маркой',
      intro:
        'Что на самом деле включает работа под собственной маркой: проверенные платформы, полное брендирование, затраты, эксклюзивность и сроки поставки.',
    },
    {
      slug: 'sup-fleet-guide',
      title: 'Закупка парка SUP-досок',
      intro:
        'Планирование парка для проката, курортов и клубов: износостойкая спецификация, объёмы на контейнер, запчасти и сезонные колебания.',
    },
  ],
  cs: [
    {
      slug: 'how-to-choose-your-sup',
      title: 'Jak vybrat správnou SUP desku',
      intro:
        'Výběr první nafukovací SUP desky se odvíjí od velikosti desky, šířky, konstrukce a vybavení v balíku.',
    },
    {
      slug: 'beginner-guide',
      title: 'Průvodce pádlováním pro začátečníky',
      intro:
        'Vše, co potřebujete pro první výjezdy na vodu: nafouknutí, první nasednutí na desku, základní záběr pádla a pravidla bezpečnosti, dokud si budujete jistotu.',
    },
    {
      slug: 'inflatable-vs-hard',
      title: 'Nafukovací nebo pevná deska',
      intro:
        'Každý z obou typů konstrukce má své výhody — zde je čestné porovnání pro rekreační pádláře, kluby a půjčovny.',
    },
    {
      slug: 'safety-tips',
      title: 'Bezpečnost na vodě',
      intro:
        'Bezpečný výjezd je dobrý výjezd — tato základní pravidla platí stejně pro jezera, řeky i pobřežní trasy.',
    },
    {
      slug: 'choosing-a-sup-oem-factory',
      title: 'Jak vybrat OEM továrnu pro SUP desky na míru',
      intro:
        'Nákup nafukovacích SUP desek pod vlastní značkou se scvrká na jedno rozhodnutí: které továrně svěříte první dávku.',
    },
    {
      slug: 'private-label-sup-guide',
      title: 'SUP pod vlastní značkou: co vám továrna opravdu poskytne',
      intro:
        'Private label je nejrychlejší cesta k uvedení značky SUP na trh: Vaše logo na ověřené platformě, bez nákladů a rizik vývoje desky od nuly.',
    },
    {
      slug: 'sup-fleet-guide',
      title: 'Nákup SUP floty pro půjčovny, letoviska a kluby',
      intro:
        'Nákupčím flot jsou potřeba jiné odpovědi než koncovým uživatelům: jak dlouho deska vydrží jednu sezi, standardizované náhradní díly, velkoobjemová množství a dodavatel, který pracuje sezónu po sezóně.',
    },
  ],
  tr: [
    {
      slug: 'how-to-choose-your-sup',
      title: "SUP'nizi Nasıl Seçmelisiniz",
      intro:
        "İlk şişirilebilir SUP'nizi seçerken belirleyici olan levha boyutu, genişliği, yapısı ve kutunun içinde ne olduğudur.",
    },
    {
      slug: 'beginner-guide',
      title: 'Paddle Etmeye Başlangıç Rehberi',
      intro:
        'Sudaki ilk seanslarınız için gereken her şey: şişirme, ilk kez ayakta kalkma, temel kürek tekniği ve güvenli kalmak.',
    },
    {
      slug: 'inflatable-vs-hard',
      title: 'Şişirilebilir mi, Sert mi?',
      intro:
        "İki farklı yapı ailesi farklı senaryolarda öne çıkar; rekreasyonel paddle'çılar, kulüpler ve kiralama işletmeleri için dürüst karşılaştırma.",
    },
    {
      slug: 'safety-tips',
      title: 'Sudaki Güvenlik Önerileri',
      intro:
        'Güvenli bir seans, aynı zamanda eğlenceli bir seanstır; bu temel kurallar göllerde, nehirlerde ve kıyı bölgelerinde de geçerlidir.',
    },
    {
      slug: 'choosing-a-sup-oem-factory',
      title: 'Özel Üretim SUP Fabrikası Nasıl Seçilir',
      intro:
        'Kendi markanız için üreticiyi sipariş formu göndermeden önce nasıl değerlendireceğiniz: deneme siparişi, üretim tesisi, numune, maliyet ve denetim.',
    },
    {
      slug: 'private-label-sup-guide',
      title: 'Özel Markalı SUP',
      intro:
        'Özel marka çalışmasının gerçekte kapsadıkları: kanıtlanmış platformlar, tam markalama, maliyetler, münhasırlık ve teslim süreleri.',
    },
    {
      slug: 'sup-fleet-guide',
      title: 'SUP Filosu Satın Alma',
      intro:
        'Kiralama, resort ve kulüpler için filo planlaması: dayanıklı şartname, konteyner başına miktarlar, yedek parçalar ve sezonluluk.',
    },
  ],
  ro: [
    {
      slug: 'how-to-choose-your-sup',
      title: 'Cum să vă alegeți SUP-ul',
      intro:
        'Alegerea primului SUP umflabil ține de dimensiunea plăcii, lățime, construcție și de conținutul cutiei. Iată ce contează cu adevărat, în cuvinte simple.',
    },
    {
      slug: 'beginner-guide',
      title: 'Ghid pentru începători la vâslit',
      intro:
        'Tot ce aveți nevoie pentru primele sesiuni pe apă: umflarea, prima ridicare în picioare, trăsătura de bază a vâslei și cum să vă păstrați în siguranță.',
    },
    {
      slug: 'inflatable-vs-hard',
      title: 'Umflabil sau placă rigidă',
      intro:
        'Cele două familii de construcție câștigă în scenarii diferite. Iată comparația onestă pentru utilizatorii de recreație, cluburi și operatori de închiriere.',
    },
    {
      slug: 'safety-tips',
      title: 'Recomandări de siguranță pe apă',
      intro:
        'O ședință sigură este o ședință plăcută. Aceste noțiuni de bază se aplică la fel pe lacuri, râuri și în paddlingul de coastă.',
    },
    {
      slug: 'choosing-a-sup-oem-factory',
      title: 'Cum să alegeți o fabrică OEM de SUP personalizate',
      intro:
        'Cum evaluați un producător de SUP personalizate înainte de a trimite o PO: comandă de probă, producție internă, mostre, costuri și inspecție.',
    },
    {
      slug: 'private-label-sup-guide',
      title: 'SUP cu marca proprie',
      intro:
        'Ce include cu adevărat un acord de marcă proprie: platforme dovedite, branding complet, costuri, exclusivitate și termene de livrare.',
    },
    {
      slug: 'sup-fleet-guide',
      title: 'Achiziția flotelor de SUP',
      intro:
        'Planificarea flotelor pentru închirieri, resorturi și cluburi: specificație rezistentă, cantități pe container, piese de rezervă și sezonalitate.',
    },
  ],
}

export function guideCard(locale: 'en' | 'es' | string, slug: string): GuideCard | undefined {
  return (GUIDE_CARDS[locale] ?? GUIDE_CARDS.en).find((c) => c.slug === slug)
}
