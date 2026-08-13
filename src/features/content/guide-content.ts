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
        body: 'A factory that only talks minimums is a sign of a trading desk, not a plant. Real manufacturers offer tiered minimums — trial runs from 5–10 units, standard OEM batches from 50 per design, and full custom-mould projects from 200. Order a small batch first: it tests communication, spec discipline and sample quality without betting your whole launch.',
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
        body: 'Get the full cost picture in writing: unit price by container, tooling or mould costs if you want a new shape, artwork and printing setup, packaging, and freight to your port. Clarify whether pricing is FOB, CIF or DDP — the difference can be 10–15% of landed cost.',
      },
      {
        title: 'Ask for Third-Party Inspection',
        body: 'Reputable OEM SUP factories welcome pre-shipment inspections — many brands book a third-party QC visit per container. Confirm the factory can arrange inspections on sample and production runs, and that rejected units (for example, boards that lose more than 5% pressure) are excluded from the batch.',
      },
      {
        title: 'Lead Times That Hold',
        body: 'For inflatable SUPs, expect samples in 15–20 days and batch production in 30–45 days after confirmed PO and deposit, plus tooling time when you order a new mould. A factory that quotes dramatically shorter times than everyone else is quoting from a brochure, not a schedule.',
      },
    ],
    faqs: [
      { q: 'What is the minimum order for custom SUP boards?', a: 'Tiered minimums are standard: 5–10 units for a trial run, 50 units per design for a standard OEM batch, and 200 units for a fully custom-mould or private-label project.' },
      { q: 'Can I see a sample before mass production?', a: 'Yes — samples ship in 15–20 days. Most factories credit sample and mould costs toward your first production order once it is confirmed.' },
      { q: 'How do I verify a SUP factory is real?', a: 'Ask for a live video walkthrough of the production floor, check for an operating plant address in Qingdao or another manufacturing hub, and request documentation of prior export orders. Trial orders are the ultimate proof.' },
      { q: 'What should a SUP factory quote include?', a: 'Unit price per board, tooling or mould costs, artwork setup, packaging, QC and inspection terms, and the freight term (FOB, CIF or DDP) with an estimated landed cost.' },
    ],
  },
  {
    slug: 'sup-import-guide',
    title: 'Importing Inflatable SUPs from China: Shipping & Incoterms',
    intro: [
      'The boards are ready, the factory is confirmed — now comes the part importers underestimate: freight, Incoterms and paperwork. Here is what to settle before your first container.',
    ],
    sections: [
      {
        title: 'FOB, CIF or DDP — Who Pays for What',
        body: 'FOB Qingdao means you take ownership at the port: the factory covers inland transport and loading, you arrange the ship. CIF adds insurance and freight to your port. DDP delivers the boards to your door, duties included — the most convenient option and the one where you pay the most per unit. Choose based on your freight experience; factories like ours quote all three.',
      },
      {
        title: 'Sea Freight and Consolidation',
        body: 'A 40-foot high-cube container holds roughly 1,000–1,200 inflatable SUP packages depending on box size. For smaller orders, share a container: consolidators pack your cartons with other cargo, and you pay only for the space you use. Book early — freight rates move with the season.',
      },
      {
        title: 'Packaging That Survives the Voyage',
        body: 'Seaworthy export packaging matters: 5-layer cartons, palletized or loose-loaded with proper blocking, and container desiccant in humid seasons. Insist the factory specs the packaging before you confirm the PO — damaged cartons are the most common import complaint.',
      },
      {
        title: 'HS Code, Duties and Documents',
        body: 'Inflatable paddle boards typically fall under HS 9506.29 (fitness and sporting equipment), with duty rates that vary by destination. Your customs broker needs the commercial invoice, packing list, bill of lading and certificate of origin — ask the factory for all four before sailing.',
      },
      {
        title: 'Payment: Deposit, Balance, Documents',
        body: 'The standard model is a 30% deposit to start production and 70% against shipping documents (usually a copy of the bill of lading). It protects both sides: the factory builds nothing without a deposit, and you see the shipment before the balance clears.',
      },
    ],
    faqs: [
      { q: 'How many inflatable SUPs fit in a 40HQ container?', a: 'Around 1,000–1,200 complete SUP packages (board, paddle, pump, leash, backpack) in a 40-foot high-cube, depending on carton dimensions and whether the boxes are palletized.' },
      { q: 'What are the main Incoterms for SUP imports?', a: 'FOB (ownership transfers at the port of departure), CIF (insurance and freight added to your port) and DDP (delivered to your door with duties paid).' },
      { q: 'What documents do I need to import SUPs?', a: 'Commercial invoice, packing list, bill of lading and a certificate of origin — most destinations also need an HS code classification (inflatable paddle boards usually sit under 9506.29).' },
      { q: 'Is a deposit normal when ordering from a SUP factory?', a: 'Yes — 30% deposit with production start, 70% against shipping documents is the industry standard and protects both importer and factory.' },
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
        body: 'You start from platforms the factory already builds and tests — all-around, touring, yoga, race and more. The factory customizes branding, graphics and trim, which keeps costs low and lead times short. Minimums are tiered: 50 units per design for a standard private-label batch, with trial runs from 5–10 units to validate the market first.',
      },
      {
        title: 'Branding Goes Beyond the Logo',
        body: 'Private label covers your logo printing (digital or screen), custom color schemes, cut-to-shape EVA traction pads with your logo, accessory branding (paddle, pump, leash), retail box design and even point-of-sale displays. Send your artwork and the factory produces a visual proof before production.',
      },
      {
        title: 'What the Factory Handles for You',
        body: 'A full-service SUP factory manages artwork setup, material sourcing, sample production, a 100-point assembly QC checklist, pressure testing and export documentation (invoice, packing list, bill of lading, certificate of origin). You review proofs and approve the sample — the factory runs everything else.',
      },
      {
        title: 'What You Own: Brand, Market, Customer',
        body: 'In a private-label arrangement the factory builds the boards and you own the brand. Reputable manufacturers do not retail their own boards in your market or sell your custom design to others. Ask about market exclusivity in your quote.',
      },
      {
        title: 'Costs: Sample, Mould, Artwork Setup',
        body: 'Expect three types of charges: sample fees (15–20 days to produce), tooling costs when a new mould is required (200-unit minimum), and artwork setup for printing. Most factories credit sample and mould costs toward your first production order.',
      },
      {
        title: 'From PO to Container',
        body: 'A typical private-label run: 30% deposit starts production, batch production completes in 30–45 days after confirmed PO and deposit, and the 70% balance settles against shipping documents. Plan 8–12 weeks total from order to your port in the first run.',
      },
    ],
    faqs: [
      { q: 'What is the minimum order for private label SUP boards?', a: '50 units per design for a standard private-label batch, with trial runs from 5–10 units and 200 units for fully custom-mould projects.' },
      { q: 'Can I send my own logo and artwork?', a: 'Yes — send your logo and artwork; the factory produces a visual proof before production so you approve colors, placement and finishing.' },
      { q: 'Is my custom SUP design exclusive to my brand?', a: 'Yes with standard private-label terms. Ask for an exclusivity clause in your purchase agreement; factories like ours do not resell your branded design.' },
      { q: 'How long does a private label SUP order take?', a: 'Samples ship in 15–20 days; batch production completes in 30–45 days after confirmed PO and deposit. Budget 8–12 weeks for the first full run.' },
    ],
  },
  {
    slug: 'sup-fleet-guide',
    title: 'Buying SUP Fleets for Rentals, Resorts & Clubs',
    intro: [
      'Fleet buyers need different answers than end users: durability per session, standardized spares, container-level quantities and a supplier that delivers season after season. Here is what to plan before ordering your first fleet.',
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
        title: 'Plan Quantities by Container',
        body: 'A 40-foot high-cube holds roughly 1,000–1,200 complete SUP packages. Compute your fleet size against daily rotation and season length: 20–30 boards serve a small stand, 100+ a busy resort or club. Consolidation options exist for sub-container orders.',
      },
      {
        title: 'Buy Spares With the Fleet',
        body: 'Order spare valves, repair kits, pumps, leashes and paddles in the same PO — they cost little per unit now and are painful to source mid-season. Ask the factory for a recommended spares ratio (typically 5–10% of fleet size for consumables).',
      },
      {
        title: 'Order Against the Season, Not During It',
        body: 'Production runs 30–45 days after PO plus sea freight to your port. To have boards on the beach by spring, confirm orders in late autumn and bank the deposit price before peak-season rate hikes on freight.',
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
      { q: 'How long does a fleet order take?', a: 'Samples in 15–20 days, production in 30–45 days after confirmed PO and deposit, plus sea freight. Order 8–12 weeks before your season starts.' },
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
        body: 'Una fábrica que solo habla de mínimos es señal de mesa comercial, no de planta. Los fabricantes reales ofrecen mínimos por tramos — pruebas desde 5–10 unidades, lotes OEM estándar desde 50 por diseño y proyectos de molde a medida desde 200. Pide primero un lote pequeño: prueba la comunicación, la disciplina de especificación y la calidad de la muestra sin arriesgar todo tu lanzamiento.',
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
        body: 'Consigue el panorama completo de costes por escrito: precio unitario por contenedor, costes de utillaje o molde si quieres una forma nueva, prepresión de arte e impresión, embalaje y flete hasta tu puerto. Aclara si el precio es FOB, CIF o DDP — la diferencia puede ser del 10–15% del coste a destino.',
      },
      {
        title: 'Pide inspección de terceros',
        body: 'Las fábricas OEM de SUP de reputación aceptan inspecciones previas al envío — muchas marcas contratan la visita de un inspector por contenedor. Confirma que la fábrica puede organizar inspecciones sobre muestras y sobre producción, y que las unidades rechazadas (por ejemplo, tablas que pierden más del 5% de presión) se excluyen del lote.',
      },
      {
        title: 'Plazos que se cumplen',
        body: 'Para SUP hinchables, espera muestras en 15–20 días y producción en serie en 30–45 días tras PO confirmado y depósito, más el tiempo de utillaje cuando pides un molde nuevo. Una fábrica que cotiza plazos mucho más cortos que el resto está cotizando desde un folleto, no desde un calendario.',
      },
    ],
    faqs: [
      { q: '¿Cuál es el pedido mínimo para tablas SUP personalizadas?', a: 'Los mínimos por tramos son el estándar: 5–10 unidades para una prueba, 50 unidades por diseño para un lote OEM estándar y 200 unidades para un proyecto de molde a medida o marca privada.' },
      { q: '¿Puedo ver una muestra antes de la producción?', a: 'Sí — las muestras se envían en 15–20 días. La mayoría de fábricas descuenta el coste de la muestra y del molde del primer pedido de producción una vez confirmado.' },
      { q: '¿Cómo verifico que una fábrica de SUP es real?', a: 'Pide una visita por vídeo en directo a la planta, comprueba una dirección de fábrica operativa en Qingdao u otro polo de fabricación y solicita documentación de pedidos de exportación anteriores. El pedido de prueba es la prueba definitiva.' },
      { q: '¿Qué debe incluir una cotización de fábrica de SUP?', a: 'Precio unitario por tabla, costes de utillaje o molde, preparación de arte, embalaje, condiciones de QC e inspección y el término de flete (FOB, CIF o DDP) con un coste estimado a destino.' },
    ],
  },
  {
    slug: 'sup-import-guide',
    title: 'Importar SUP hinchables desde China: flete e Incoterms',
    intro: [
      'Las tablas están listas y la fábrica confirmada — ahora llega la parte que los importadores subestiman: flete, Incoterms y papeleo. Esto es lo que hay que cerrar antes del primer contenedor.',
    ],
    sections: [
      {
        title: 'FOB, CIF o DDP — quién paga qué',
        body: 'FOB Qingdao significa que la propiedad pasa a ti en el puerto: la fábrica cubre el transporte interior y la carga, y tú contratas el barco. CIF añade seguro y flete hasta tu puerto. DDP entrega las tablas en tu puerta, con aranceles incluidos — la opción más cómoda y la que más pagas por unidad. Elige según tu experiencia en flete; fábricas como la nuestra cotizan las tres modalidades.',
      },
      {
        title: 'Flete marítimo y consolidación',
        body: 'Un contenedor de 40 pies high-cube alberga entre 1.000 y 1.200 paquetes de SUP hinchable según el tamaño de caja. Para pedidos menores, comparte contenedor: los consolidadores empaquetan tus cartones con otra carga y pagas solo el espacio que usas. Reserva pronto — las tarifas se mueven con la temporada.',
      },
      {
        title: 'Un embalaje que sobreviva a la travesía',
        body: 'El embalaje de exportación marítimo importa: cartones de 5 capas, paletizados o a granel con bloqueo adecuado y desecante en temporada húmeda. Exige que la fábrica especifique el embalaje antes de confirmar el PO — los cartones dañados son la queja de importación más común.',
      },
      {
        title: 'Código HS, aranceles y documentos',
        body: 'Las tablas de paddle sur hinchables suelen clasificarse en el código HS 9506.29 (equipamiento deportivo), con aranceles que varían según destino. Tu agente de aduanas necesita la factura comercial, el packing list, el conocimiento de embarque y el certificado de origen — pide los cuatro a la fábrica antes de zarpar.',
      },
      {
        title: 'Pago: depósito, saldo y documentos',
        body: 'El modelo estándar es un 30% de depósito para iniciar la producción y un 70% contra documentos de embarque (normalmente copia del conocimiento de embarque). Protege a ambas partes: la fábrica no fabrica nada sin depósito y tú ves el barco antes de que el saldo se liquide.',
      },
    ],
    faqs: [
      { q: '¿Cuántos SUP hinchables caben en un contenedor 40HQ?', a: 'Entre 1.000 y 1.200 paquetes completos (tabla, pala, bomba, leash y mochila) en un high-cube de 40 pies, según las dimensiones del cartón y si las cajas van paletizadas.' },
      { q: '¿Cuáles son los Incoterms principales para importar SUP?', a: 'FOB (la propiedad se transfiere en el puerto de salida), CIF (seguro y flete añadidos hasta tu puerto) y DDP (entrega en tu puerta con aranceles pagados).' },
      { q: '¿Qué documentos necesito para importar SUP?', a: 'Factura comercial, packing list, conocimiento de embarque y certificado de origen — la mayoría de destinos también piden clasificación HS (las tablas hinchables suelen ubicarse en 9506.29).' },
      { q: '¿Es normal pagar un depósito a una fábrica de SUP?', a: 'Sí — 30% de depósito al inicio de la producción y 70% contra documentos de embarque es el estándar del sector y protege tanto al importador como a la fábrica.' },
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
        body: 'Partes de plataformas que la fábrica ya construye y prueba — all-around, touring, yoga, race y más. La fábrica personaliza marca, gráficos y acabados, lo que mantiene costes bajos y plazos cortos. Los mínimos son por tramos: 50 unidades por diseño para un lote estándar, con pruebas desde 5–10 unidades para validar el mercado primero.',
      },
      {
        title: 'La marca va más allá del logotipo',
        body: 'La marca privada incluye tu impresión de logotipo (digital o serigrafía), esquemas de color personalizados, alfombrillas EVA troqueladas con tu logotipo, accesorios con marca (pala, bomba, leash), diseño de caja retail e incluso expositores para punto de venta. Envía tu arte y la fábrica produce una prueba visual antes de la producción.',
      },
      {
        title: 'Qué gestiona la fábrica por ti',
        body: 'Una fábrica de servicio completo gestiona la preparación de arte, el abastecimiento de materiales, la producción de muestras, la lista de verificación de montaje de 100 puntos, las pruebas de presión y la documentación de exportación (factura, packing list, conocimiento de embarque, certificado de origen). Tú revisas las pruebas y apruebas la muestra — la fábrica se encarga del resto.',
      },
      {
        title: 'Lo que tú posees: marca, mercado y cliente',
        body: 'En un acuerdo de marca privada, la fábrica construye las tablas y tú posees la marca. Los fabricantes de reputación no venden tablas con su propio nombre en tu mercado ni venden tu diseño a otros. Pregunta por la exclusividad de mercado en tu cotización.',
      },
      {
        title: 'Costes: muestra, molde y preparación de arte',
        body: 'Espera tres tipos de cargos: tarifas de muestra (15–20 días), costes de utillaje cuando se requiere un molde nuevo (mínimo de 200 unidades) y preparación de arte para la impresión. La mayoría de fábricas descuenta la muestra y el molde del primer pedido de producción.',
      },
      {
        title: 'Del PO al contenedor',
        body: 'Una tirada típica de marca privada: el 30% de depósito inicia la producción, la producción en serie se completa en 30–45 días tras PO confirmado y depósito, y el 70% restante se liquida contra los documentos de embarque. Calcula de 8 a 12 semanas desde el pedido hasta tu puerto en la primera tirada.',
      },
    ],
    faqs: [
      { q: '¿Cuál es el pedido mínimo para tablas SUP de marca privada?', a: '50 unidades por diseño para un lote estándar de marca privada, con pruebas desde 5–10 unidades y 200 unidades para proyectos de molde totalmente a medida.' },
      { q: '¿Puedo enviar mi propio logotipo y arte?', a: 'Sí — envía tu logotipo y arte; la fábrica produce una prueba visual antes de la producción para que apruebes colores, colocación y acabado.' },
      { q: '¿Mi diseño de SUP personalizado es exclusivo de mi marca?', a: 'Sí, con condiciones estándar de marca privada. Pide una cláusula de exclusividad en tu contrato; fábricas como la nuestra no revenden diseños con tu marca.' },
      { q: '¿Cuánto tarda un pedido de SUP de marca privada?', a: 'Las muestras se envían en 15–20 días; la producción en serie se completa en 30–45 días tras PO confirmado y depósito. Calcula de 8 a 12 semanas para la primera tirada completa.' },
    ],
  },
  {
    slug: 'sup-fleet-guide',
    title: 'Comprar flotas de SUP para alquiler, resorts y clubes',
    intro: [
      'Los compradores de flotas necesitan respuestas distintas a las de los usuarios finales: durabilidad por sesión, repuestos estandarizados, cantidades a nivel de contenedor y un proveedor que entregue temporada tras temporada. Esto es lo que hay que planificar antes de pedir tu primera flota.',
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
        title: 'Planifica cantidades por contenedor',
        body: 'Un contenedor de 40 pies high-cube alberga entre 1.000 y 1.200 paquetes completos de SUP. Calcula el tamaño de tu flota contra la rotación diaria y la duración de la temporada: 20–30 tablas sirven a un pequeño negocio, 100+ a un resort o club con actividad. Hay opciones de consolidación para pedidos inferiores al contenedor.',
      },
      {
        title: 'Compra repuestos con la flota',
        body: 'Pide válvulas de repuesto, kits de reparación, bombas, leashes y palas en el mismo PO — cuestan poco por unidad ahora y son difíciles de conseguir a mitad de temporada. Pide a la fábrica una proporción de repuestos recomendada (normalmente 5–10% de la flota en consumibles).',
      },
      {
        title: 'Pide contra la temporada, no durante ella',
        body: 'La producción tarda 30–45 días tras el PO más el flete marítimo hasta tu puerto. Para tener tablas en la playa en primavera, confirma los pedidos a finales de otoño y asegura el precio del depósito antes de las subidas de tarifas de flete en temporada alta.',
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
      { q: '¿Cuánto tarda un pedido de flota?', a: 'Muestras en 15–20 días, producción en 30–45 días tras PO confirmado y depósito, más flete marítimo. Pide de 8 a 12 semanas antes de que empiece tu temporada.' },
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
      slug: 'sup-import-guide',
      title: 'Importar SUP hinchables desde China',
      intro:
        'FOB, CIF o DDP, flete y consolidación, embalaje marítimo, HS code y el modelo de pago antes de tu primer contenedor.',
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
