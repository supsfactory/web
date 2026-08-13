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
  ],
}

export function guideCard(locale: 'en' | 'es', slug: string): GuideCard | undefined {
  return GUIDE_CARDS[locale].find((c) => c.slug === slug)
}
