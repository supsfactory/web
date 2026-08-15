/**
 * Beginner SUP guides (/guides/{slug}).
 *
 * The afarer source renders these as dedicated Astro pages with embedded copy
 * (no YAML), so we ship a small structured dataset here instead. The slugs are
 * the ones referenced by afarer's learning-center.yaml cards.
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
      { label: 'OEM manufacturing', href: '/oem-odm-manufacturer' },
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
      { label: 'Our OEM / ODM manufacturing', href: '/oem-odm-manufacturer' },
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
      { label: 'OEM / ODM manufacturing', href: '/oem-odm-manufacturer' },
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
      { label: 'Fabricación OEM', href: '/oem-odm-manufacturer' },
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
      { label: 'Nuestra fabricación OEM / ODM', href: '/oem-odm-manufacturer' },
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
      { label: 'Fabricación OEM / ODM', href: '/oem-odm-manufacturer' },
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

export function getGuide(path: string, locale?: string): Guide | undefined {
  const slug = path.split('/').filter(Boolean).pop()
  return (locale === 'es' ? GUIDES_ES.find((g) => g.slug === slug) : undefined) ?? GUIDES.find((g) => g.slug === slug)
}

export function getGuideBySlug(slug: string, locale?: string): Guide | undefined {
  return (locale === 'es' ? GUIDES_ES.find((g) => g.slug === slug) : undefined) ?? GUIDES.find((g) => g.slug === slug)
}

/** Localized card copy for the /knowledge hub (guide pages stay English). */
export interface GuideCard {
  slug: string
  title: string
  intro: string
}

export const GUIDE_CARDS: Record<'en' | 'es', GuideCard[]> = {
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
}

export function guideCard(locale: 'en' | 'es', slug: string): GuideCard | undefined {
  return GUIDE_CARDS[locale].find((c) => c.slug === slug)
}
