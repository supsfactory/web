import type { Locale } from '@/features/i18n/locale'
import type { Localized } from './content'

/**
 * Series-level platform pages (/products/{series}).
 *
 * Nine manufacturing-platform categories (all-around → multi-person), each
 * targeting a buyer-facing long-tail query ("custom fishing SUP boards",
 * "inflatable touring SUP manufacturer", …). The pages aggregate every
 * product of the series, add series-level B2B context (MOQ, lead time,
 * customization) and funnel to /contact with the series prefilled.
 *
 * Facts referenced in the FAQ answers stay in sync with FACTS (moq tiers,
 * sample/production lead times, QC points) — keep them identical.
 */

export interface SeriesPageData {
  /** Product-series key, must match productFilters groups. */
  slug: string
  navLabel: string
  metaTitle: string
  metaDescription: string
  kicker: string
  h1: string
  intro: string[]
  faqs: { q: string; a: string }[]
}

export const seriesPages: Localized<SeriesPageData[]> = {
  en: [
    {
      slug: 'all-around',
      navLabel: 'All-Around Platforms',
      metaTitle: 'Custom All-Around SUP Boards — Inflatable OEM Manufacturer | SUPsfactory',
      metaDescription:
        'Custom all-around inflatable SUP boards manufactured under your brand — wide-body stability, OEM/ODM from 50 pcs, samples in 15–20 days. Factory direct from Qingdao, China.',
      kicker: 'Series · All-Around',
      h1: 'Custom All-Around SUP Boards — The Default Starting Platform For New Brands',
      intro: [
        'The all-around board is the workhorse of the SUP category: wide enough to feel stable for beginners, agile enough to keep intermediates interested, and light enough to carry anywhere. Most new brands and most rental fleets start here.',
        'We manufacture all-around platforms under your brand from 50 pcs per design, with trial runs from 5–10 pcs. Shape, rails, layup, colors, full-board graphics and packaging are specified per project.',
      ],
      faqs: [
        {
          q: 'Can I customize an all-around SUP board for my brand?',
          a: 'Yes. Every all-around platform is a manufacturing base — you specify dimensions (commonly 10′6″ to 11′6″), width, thickness, layup (single/dual-layer or fusion), rail configuration, EVA pad, full-board graphics and packaging. Custom-mould projects start at 200 pcs; standard OEM production from 50 pcs per design.',
        },
        {
          q: 'What is the MOQ for all-around SUP boards?',
          a: 'Standard OEM batches start at 50 pcs per design; trial runs on standard platforms start at 5–10 pcs; full custom-moulding requires 200 pcs minimum. Samples ship in 15–20 days and bulk production runs 30–45 days after confirmed PO and deposit.',
        },
        {
          q: 'What does the retail-ready package include?',
          a: 'The complete package: inflatable board with drop-stitch core, adjustable paddle, hand pump (or electric dual-stage), repair kit, carry backpack and printed carton. Accessories can be swapped or upgraded per your target market.',
        },
      ],
    },
    {
      slug: 'race',
      navLabel: 'Race Platforms',
      metaTitle: 'Custom Race SUP Boards — Inflatable Racing Platforms OEM | SUPsfactory',
      metaDescription:
        'Custom inflatable race SUP boards for clubs, events and brands — drop-stitch racing hulls, OEM from 50 pcs, CE-certified production. Factory direct.',
      kicker: 'Series · Race',
      h1: 'Custom Race SUP Boards — Racing Hulls Manufactured For Your Brand',
      intro: [
        'Race boards trade stability for speed: longer, narrower profiles with refined nose shapes and low rocker, built for displacement paddling. The inflatable versions match hard-board race performance within a portable platform.',
        'We produce race platforms for brands, clubs and event organizers with precision drop-stitch cores, race-spec layups and speed-oriented hull shapes — statistic-tested in our hydrodynamic test tank.',
      ],
      faqs: [
        {
          q: 'What race SUP dimensions can you manufacture?',
          a: 'Typical race platforms range from 12′6″ × 28″ for 12′6 race classes to 14′ × 23″–25″ for unlimited/Touring race formats. Width, rocker and nose profiles are specified to the target racer group and verified on a physical sample.',
        },
        {
          q: 'Do race boards require special construction?',
          a: 'Yes — race boards use a lighter, tightly woven drop-stitch core with higher psi (18–20 PSI) and stiffer rail reinforcement to hold hull shape at speed. Layup choices (single vs double-layer) trade weight against stiffness, which we specify with you per project.',
        },
        {
          q: 'Can clubs order race boards for their team?',
          a: 'Yes. Club and team programs order from 50 pcs with club graphics, and can mix race and training platforms in one container. Fleet pricing applies to combined volumes.',
        },
      ],
    },
    {
      slug: 'surf',
      navLabel: 'Surf Platforms',
      metaTitle: 'Custom Surf SUP Boards — Inflatable Hybrid Surf Platforms OEM | SUPsfactory',
      metaDescription:
        'Custom inflatable surf SUP boards — hybrid surf profiles with rounded rails and raised rocker, manufactured under your brand from 50 pcs in Qingdao, China.',
      kicker: 'Series · Surf',
      h1: 'Custom Surf SUP Boards — Hybrid Surf Platforms For Wave Riding',
      intro: [
        'Surf SUP boards bring wave performance to a portable platform: shorter lengths, higher rocker, rounded rails and concave noses that hold a line on the face of a wave. Inflatable surf shapes are the most forgiving way to introduce surf paddling.',
        'We manufacture surf platforms under your brand with wave-specific shaping and construction details — from soft-top style complete packages to performance layups.',
      ],
      faqs: [
        {
          q: 'What sizes are available for surf SUP boards?',
          a: 'Common surf platforms run 8′6″ to 10′6″ with widths around 30″–34″. Length, rocker and rail profile are specified per rider weight and wave type, and verified on a physical sample before production.',
        },
        {
          q: 'Are inflatable surf boards durable enough for rental?',
          a: 'With reinforced rails and UV-resistant PVC, our surf platforms handle rental and instructional use at surf schools. Rental fleets typically combine all-around and surf shapes — fleet pricing applies across the mixed volume.',
        },
        {
          q: 'Can you match our brand graphics on surf boards?',
          a: 'Yes. Full-board deck graphics, bottom art, EVA traction pads and packaging are produced from your artwork or developed from your brand assets by our design team.',
        },
      ],
    },
    {
      slug: 'touring',
      navLabel: 'Touring Platforms',
      metaTitle: 'Custom Touring SUP Boards — Long-Distance Platforms OEM | SUPsfactory',
      metaDescription:
        'Custom inflatable touring SUP boards for long-distance paddling — 12′6″+ displacement hulls, multi-day trip capability, OEM from 50 pcs, factory direct.',
      kicker: 'Series · Touring',
      h1: 'Custom Touring SUP Boards — Built For Distance, Carrying Loads, Covering Ground',
      intro: [
        'Touring boards are long and efficient: pointed noses for glide, moderate volume for stability on open water, and enough hull length to carry gear on multi-day trips. They are the platform of choice for distance paddlers and expedition outfitters.',
        'We produce touring platforms under your brand with displacement shaping, attachment points and deck space for cargo, and carbon-compatible accessory ecosystems (bungees, D-rings, mounts).',
      ],
      faqs: [
        {
          q: 'What touring SUP sizes do you manufacture?',
          a: 'Touring platforms typically run 12′6″ to 14′ with widths of 28″–32″. Longer 14′ hulls prioritize glide; wider versions add cargo stability. Specs are confirmed with a physical sample before bulk production.',
        },
        {
          q: 'Do touring boards come with cargo and attachment options?',
          a: 'Yes — bungee cargo nets, D-ring grids, rod mounts and accessory track systems are specified per project. Touring packages commonly pair boards with backpack-style bags and high-pressure pumps.',
        },
        {
          q: 'Do you supply touring boards for outfitters and rental operators?',
          a: 'Yes. Outfitters and operators can run dedicated touring fleets from 50 pcs with fleet pricing, replacement parts and a defined seasonal refresh cycle.',
        },
      ],
    },
    {
      slug: 'yoga',
      navLabel: 'Yoga Platforms',
      metaTitle: 'Custom Yoga SUP Boards — Wide Stable Platforms OEM | SUPsfactory',
      metaDescription:
        'Custom inflatable yoga SUP boards — extra-wide stable platforms with soft decks for studios, resorts and instructors. OEM from 50 pcs, factory direct.',
      kicker: 'Series · Yoga',
      h1: 'Custom Yoga SUP Boards — Extra-Wide Platforms For Practice On Water',
      intro: [
        'Yoga boards are built for stillness: extra width and volume for a stable platform, plush soft-tops for hands and feet, and low profiles that keep the board close to the water. They serve studios, resorts and instructors running water-yoga programs.',
        'We manufacture yoga platforms under your brand with the widest stable profiles, premium EVA decking and program-scale options for studios and resort fleets.',
      ],
      faqs: [
        {
          q: 'What makes a SUP board good for yoga?',
          a: 'Stability first: extra width (33″–36″) and volume keep the board flat and steady. A soft-touch EVA deck protects hands, knees and feet, and a low-profile rail reduces wobble when stepping on and off.',
        },
        {
          q: 'Can resorts order yoga boards as part of a fleet?',
          a: 'Yes. Resorts commonly mix yoga platforms with all-around guest boards. Combined fleet volumes qualify for fleet pricing, and branded graphics in the property palette apply across the whole order.',
        },
        {
          q: 'Do yoga boards include complete packages?',
          a: 'Yes — inflatable board, paddle, pump, backpack and repair kit, or a pared-down kit for on-site storage (board + paddle + electric pump), as your program requires.',
        },
      ],
    },
    {
      slug: 'whitewater',
      navLabel: 'Whitewater Platforms',
      metaTitle: 'Custom Whitewater SUP Boards — River & Rapid Platforms OEM | SUPsfactory',
      metaDescription:
        'Custom inflatable whitewater SUP boards for rivers and rapids — short maneuverable hulls with reinforced impact construction. OEM from 50 pcs in Qingdao, China.',
      kicker: 'Series · Whitewater',
      h1: 'Custom Whitewater SUP Boards — River Hulls Built To Take Hits',
      intro: [
        'Whitewater boards are short, wide and tough: maneuverable hulls that turn on demand, high impact resistance for rail strikes, and heavy-duty construction for shallow riverbeds and rocky put-ins.',
        'We manufacture whitewater platforms under your brand with reinforced seams, impact rails and river-specific shapes — built for schools, guides and river outfitters that run daily lessons and tours.',
      ],
      faqs: [
        {
          q: 'What construction do whitewater boards need?',
          a: 'Reinforced rails and over-seamed construction absorb rail strikes; thick PVC and multi-layer layups resist punctures from riverbeds. Double-chamber designs add float redundancy for remote rivers.',
        },
        {
          q: 'Do you supply river outfitters and guide schools?',
          a: 'Yes. Outfitters and guide schools run whitewater fleets from 50 pcs with fleet pricing, heavy-duty repair kits and spare fin/valve components — typical for high-utilization river programs.',
        },
        {
          q: 'Can whitewater boards carry brand graphics?',
          a: 'Yes — full-board graphics, logo placement and team colors are produced from your artwork. Tear-resistant print layers keep branding intact under hard use.',
        },
      ],
    },
    {
      slug: 'fishing',
      navLabel: 'Fishing Platforms',
      metaTitle: 'Custom Fishing SUP Boards — OEM & Private Label | SUPsfactory',
      metaDescription:
        'Custom inflatable fishing SUP boards with stability, weight capacity and accessory mounts — OEM/private label from 50 pcs, factory-direct from Qingdao, China.',
      kicker: 'Series · Fishing',
      h1: 'Custom Fishing SUP Boards — Built With Anglers In Mind',
      intro: [
        'Fishing boards are stable casting platforms: wide and high-volume to carry the angler plus gear, with mounting systems for rod holders, coolers and tackle, and quiet construction for stealth approaches.',
        'We manufacture fishing platforms under your brand with angler-specific features specified per project — from weekend-guerilla packages to full tournament setups.',
      ],
      faqs: [
        {
          q: 'What fishing SUP features can be specified?',
          a: 'Mounting grids for rod holders and accessories, gear tracks, cooler straps, anchor points, and high-capacity boards up to 500 lbs for angler plus gear. Packages can include brand-label paddles, pumps and bags.',
        },
        {
          q: 'What is the MOQ for fishing SUP OEM orders?',
          a: 'Standard OEM batches start at 50 pcs per design; trial runs from 5–10 pcs on standard platforms; custom tooling requires 200 pcs minimum. Samples ship in 15–20 days; production runs 30–45 days after confirmed PO and deposit.',
        },
        {
          q: 'Do you produce fishing boards for rental and guide operations?',
          a: 'Yes. Guide and rental operations run fishing fleets with fleet pricing, replacement parts and repair kits sized to daily-use programs.',
        },
      ],
    },
    {
      slug: 'kids',
      navLabel: 'Kids Platforms',
      metaTitle: 'Custom Kids SUP Boards — Small Light Platforms OEM | SUPsfactory',
      metaDescription:
        'Custom kids inflatable SUP boards — shorter, lighter platforms with child-friendly decks designed for safety and fun. OEM from 50 pcs, factory direct.',
      kicker: 'Series · Kids',
      h1: 'Custom Kids SUP Boards — Small, Light And Built For First Paddles',
      intro: [
        'Kids boards are proportioned for young riders: shorter hulls, lighter weights, narrower widths sized to small bodies, and soft decks that forgive falls. They are the entry point for family brands, schools and rental fleets serving children.',
        'We manufacture kids platforms under your brand in standard and junior sizes, with family-friendly package options.',
      ],
      faqs: [
        {
          q: 'What sizes do kids SUP boards come in?',
          a: 'Typical kids platforms range from 7′ to 9′6″ with widths from 26″ to 30″ and weights around 7–9 kg (15–20 lbs). Size is matched to rider age and weight, verified on a physical sample before production.',
        },
        {
          q: 'Do you supply schools and youth programs?',
          a: 'Yes — our kids platforms are a common component of school and youth program fleets, ordered alongside junior paddles and beginner accessories with program pricing.',
        },
        {
          q: 'Can kids boards carry brand and character graphics?',
          a: 'Yes. Full-board colorways, character artwork and logo placement are developed from your artwork or brand direction — printed with the same tear-resistant layers as adult boards.',
        },
      ],
    },
    {
      slug: 'multi',
      navLabel: 'Multi-Person Platforms',
      metaTitle: 'Custom Multi-Person SUP Boards — Tandem & Family OEM | SUPsfactory',
      metaDescription:
        'Custom multi-person inflatable SUP boards for family recreation and group lessons — tandem, yard and party platforms. OEM from 50 pcs, factory direct.',
      kicker: 'Series · Multi-Person',
      h1: 'Custom Multi-Person SUP Boards — Tandems, Yards And Party Platforms',
      intro: [
        'Multi-person boards open SUP to groups: tandems with extra paddle positions, yard boards for lounging, and party platforms that carry several riders. They anchor rental revenue at resorts, beaches and lake operations.',
        'We manufacture multi-person platforms under your brand with the stability and volume profiles each use case demands.',
      ],
      faqs: [
        {
          q: 'What types of multi-person boards do you make?',
          a: 'Tandems (two paddlers, ~13′–14′), yard boards (short, wide lounging platforms) and party platforms with high volume for 3–6 riders. Each type is specified to capacity, weight and intended use.',
        },
        {
          q: 'Are multi-person boards a good rental investment?',
          a: 'Yes — they command premium hourly rates with lower per-rider equipment cost, and keep groups together instead of splitting them across singles. Rental operators typically pair multi-person boards with all-around fleets.',
        },
        {
          q: 'What is the capacity of a party platform?',
          a: 'Capacity depends on dimensions and volume: typical yard and party platforms support 400–700 lbs and carry 3–6 riders depending on size and configuration. Specifications are confirmed on a physical sample before volume production.',
        },
      ],
    },
  ],
  es: [
    {
      slug: 'all-around',
      navLabel: 'Plataformas polivalentes',
      metaTitle: 'Tablas SUP polivalentes personalizadas — Fabricante OEM inflable | SUPsfactory',
      metaDescription:
        'Tablas SUP hinchables polivalentes personalizadas bajo tu marca: estabilidad de tabla ancha, OEM/ODM desde 50 uds., muestras en 15–20 días. Directo de fábrica en Qingdao, China.',
      kicker: 'Serie · Polivalente',
      h1: 'Tablas SUP polivalentes personalizadas — la plataforma de partida para nuevas marcas',
      intro: [
        'La tabla polivalente es la base de la categoría SUP: ancha para dar estabilidad a principiantes, ágil para mantener el interés de nivel intermedio y ligera para llevarla donde sea. La mayoría de las marcas nuevas y de las flotas de alquiler empiezan aquí.',
        'Fabricamos plataformas polivalentes bajo tu marca desde 50 uds. por diseño, con pedidos de prueba desde 5–10 uds. Forma, rails, capas, colores, gráficos a toda cubierta y embalaje se especifican por proyecto.',
      ],
      faqs: [
        {
          q: '¿Puedo personalizar una tabla SUP polivalente para mi marca?',
          a: 'Sí. Cada plataforma polivalente es una base de fabricación: especificas dimensiones (habitualmente 10\'6" a 11\'6"), ancho, grosor, capas (una/doble o fusión), configuración de rails, piso EVA, gráficos a toda cubierta y embalaje. Los proyectos con molde a medida parten de 200 uds.; la producción OEM estándar, de 50 uds. por diseño.',
        },
        {
          q: '¿Cuál es el pedido mínimo para tablas SUP polivalentes?',
          a: 'Los lotes OEM estándar parten de 50 uds. por diseño; los pedidos de prueba sobre plataformas estándar, de 5–10 uds.; el moldeo a medida requiere un mínimo de 200 uds. Las muestras salen en 15–20 días y la producción, en 30–45 días tras PO y depósito confirmados.',
        },
        {
          q: '¿Qué incluye el paquete completo listo para retail?',
          a: 'El paquete completo: tabla hinchable con núcleo drop-stitch, remo ajustable, bomba manual (o doble etapa eléctrica), kit de reparación, bolsa de transporte y caja impresa. Los accesorios se cambian o mejoran según tu mercado objetivo.',
        },
      ],
    },
    {
      slug: 'race',
      navLabel: 'Plataformas de competición',
      metaTitle: 'Tablas SUP de competición personalizadas — Plataformas de carrera OEM | SUPsfactory',
      metaDescription:
        'Tablas SUP hinchables de competición personalizadas para clubs, eventos y marcas — cascos de carrera drop-stitch, OEM desde 50 uds., producción certificada CE. Directo de fábrica.',
      kicker: 'Serie · Competición',
      h1: 'Tablas SUP de competición personalizadas — cascos de carrera fabricados para tu marca',
      intro: [
        'Las tablas de competición cambian estabilidad por velocidad: perfiles más largos y estrechos, con formas de proa refinadas y poco rocker, construidas para la pagayada de desplazamiento. Las versiones hinchables igualan el rendimiento de las rígidas dentro de una plataforma transportable.',
        'Producimos plataformas de competición para marcas, clubs y organizadores de eventos con núcleos drop-stitch de precisión, capas de competición y formas de casco orientadas a la velocidad, probadas en nuestro canal hidrodinámico.',
      ],
      faqs: [
        {
          q: '¿Qué dimensiones de SUP de competición pueden fabricarse?',
          a: 'Las plataformas de competición van habitualmente de 12\'6" × 28" para la clase 12\'6 a 14\' × 23"–25" para los formatos Unlimited/Touring race. Ancho, rocker y perfil de proa se ajustan al grupo de remeros objetivo y se verifican en una muestra física.',
        },
        {
          q: '¿Las tablas de competición requieren construcción especial?',
          a: 'Sí: usan un núcleo drop-stitch más ligero y de tejido denso, mayores presiones (18–20 PSI) y refuerzos de rail más rígidos para mantener la forma del casco a velocidad. La elección de capas (una o doble) equilibra peso y rigidez, y la especificamos contigo en cada proyecto.',
        },
        {
          q: '¿Pueden los clubs pedir tablas de competición para su equipo?',
          a: 'Sí. Los programas de clubs y equipos piden desde 50 uds. con gráficos del club y pueden mezclar tablas de competición y entrenamiento en un mismo contenedor. El precio de flota se aplica al volumen combinado.',
        },
      ],
    },
    {
      slug: 'surf',
      navLabel: 'Plataformas de surf',
      metaTitle: 'Tablas SUP de surf personalizadas — Plataformas híbridas inflables OEM | SUPsfactory',
      metaDescription:
        'Tablas SUP hinchables de surf personalizadas — perfiles de surf híbridos con rails redondeados y rocker elevado, fabricadas bajo tu marca desde 50 uds. en Qingdao, China.',
      kicker: 'Serie · Surf',
      h1: 'Tablas SUP de surf personalizadas — plataformas híbridas para cabalgar olas',
      intro: [
        'Las tablas de surf SUP aportan rendimiento de ola a una plataforma transportable: longitudes más cortas, más rocker, rails redondeados y concavidades de proa que mantienen la línea en la cara de la ola. Las formas de surf hinchables son la forma más accesible de iniciarse al surf con remo.',
        'Fabricamos plataformas de surf bajo tu marca con formas y detalles de construcción específicos para olas, desde paquetes completos tipo soft-top hasta capas de rendimiento.',
      ],
      faqs: [
        {
          q: '¿Qué tamaños de SUP de surf están disponibles?',
          a: 'Las plataformas de surf habituales van de 8\'6" a 10\'6" con anchos de unos 30"–34". Longitud, rocker y perfil de rails se especifican según el peso del rider y el tipo de ola, y se verifican en una muestra física antes de producir.',
        },
        {
          q: '¿Las tablas de surf hinchables son duraderas para alquiler?',
          a: 'Con rails reforzados y PVC anti-UV, nuestras plataformas de surf soportan uso de alquiler y de clases en escuelas de surf. Las flotas de alquiler combinan normalmente formas polivalentes y de surf — el precio de flota se aplica al volumen mixto.',
        },
        {
          q: '¿Pueden llevar los gráficos de mi marca?',
          a: 'Sí. Gráficos a toda cubierta, arte de fondo, pisos EVA y embalaje se producen desde tu material gráfico o los desarrolla nuestro equipo de diseño a partir de los activos de tu marca.',
        },
      ],
    },
    {
      slug: 'touring',
      navLabel: 'Plataformas de travesía',
      metaTitle: 'Tablas SUP de travesía personalizadas — Plataformas de larga distancia OEM | SUPsfactory',
      metaDescription:
        'Tablas SUP hinchables de travesía personalizadas para pagayadas de larga distancia — cascos de desplazamiento de 12\'6"+, capacidad para equipo, OEM desde 50 uds.',
      kicker: 'Serie · Travesía',
      h1: 'Tablas SUP de travesía personalizadas — hechas para distancia, carga y terreno',
      intro: [
        'Las tablas de travesía son largas y eficientes: proas afiladas para el deslizamiento, volumen moderado para estabilidad en aguas abiertas y suficiente eslora para cargar equipo en salidas de varios días. Son la plataforma preferida de los remadores de distancia y los outfitters de expedición.',
        'Producimos plataformas de travesía bajo tu marca con formas de desplazamiento, puntos de amarre y espacio de cubierta para carga, y ecosistemas de accesorios compatibles (elásticos, D-rings, soportes).',
      ],
      faqs: [
        {
          q: '¿Qué tamaños de SUP de travesía fabricáis?',
          a: 'Las plataformas de travesía suelen ir de 12\'6" a 14\' con anchos de 28"–32". Los cascos de 14\' priorizan el deslizamiento; las versiones más anchas añaden estabilidad para la carga. Las especificaciones se confirman con una muestra física antes de la producción.',
        },
        {
          q: '¿Las tablas de travesía llevan opciones de carga y amarre?',
          a: 'Sí — redes elásticas de carga, rejillas de D-rings, soportes y raíles para accesorios se especifican por proyecto. Los paquetes de travesía suelen combinar con bolsas tipo mochila y bombas de alta presión.',
        },
        {
          q: '¿Suministráis tablas de travesía a outfitters y operadores de alquiler?',
          a: 'Sí. Outfitters y operadores pueden gestionar flotas de travesía desde 50 uds. con precio de flota, recambios y un ciclo definido de renovación estacional.',
        },
      ],
    },
    {
      slug: 'yoga',
      navLabel: 'Plataformas de yoga',
      metaTitle: 'Tablas SUP de yoga personalizadas — Plataformas anchas y estables OEM | SUPsfactory',
      metaDescription:
        'Tablas SUP hinchables de yoga personalizadas — plataformas extra anchas con cubiertas blandas para estudios, resorts e instructores. OEM desde 50 uds.',
      kicker: 'Serie · Yoga',
      h1: 'Tablas SUP de yoga personalizadas — plataformas extra anchas para practicar sobre el agua',
      intro: [
        'Las tablas de yoga están hechas para la quietud: ancho y volumen extra para una plataforma estable, cubiertas blandas para manos y pies, y perfiles bajos que mantienen la tabla pegada al agua. Sirven a estudios, resorts e instructores de programas de yoga acuático.',
        'Fabricamos plataformas de yoga bajo tu marca con los perfiles estables más anchos, decks de EVA premium y opciones de programa para estudios y flotas de resorts.',
      ],
      faqs: [
        {
          q: '¿Qué hace buena a una tabla SUP para yoga?',
          a: 'Estabilidad ante todo: ancho extra (33"–36") y volumen mantienen la tabla plana y firme. Un deck de EVA con tacto suave protege manos, rodillas y pies, y un rail de perfil bajo reduce el balanceo al subir y bajar.',
        },
        {
          q: '¿Los resorts pueden pedir tablas de yoga dentro de una flota?',
          a: 'Sí. Los resorts combinan habitualmente plataformas de yoga con tablas polivalentes para huéspedes. Los volúmenes de flota combinados acceden al precio de flota, y la gráfica de marca en la paleta de la propiedad se aplica a todo el pedido.',
        },
        {
          q: '¿Las tablas de yoga incluyen paquetes completos?',
          a: 'Sí — tabla hinchable, remo, bomba, bolsa y kit de reparación, o un kit reducido para almacenamiento en el resort (tabla + remo + bomba eléctrica), según lo que requiera tu programa.',
        },
      ],
    },
    {
      slug: 'whitewater',
      navLabel: 'Plataformas de aguas bravas',
      metaTitle: 'Tablas SUP de aguas bravas personalizadas — Plataformas de río OEM | SUPsfactory',
      metaDescription:
        'Tablas SUP hinchables de aguas bravas personalizadas para ríos y rápidos — cascos cortos y maniobrables con construcción de impacto reforzada. OEM desde 50 uds.',
      kicker: 'Serie · Aguas bravas',
      h1: 'Tablas SUP de aguas bravas personalizadas — cascos de río hechos para golpes',
      intro: [
        'Las tablas de aguas bravas son cortas, anchas y resistentes: cascos maniobrables que giran a demanda, alta resistencia al impacto para los golpes contra los rails y construcción reforzada para lechos poco profundos y embarques rocosos.',
        'Fabricamos plataformas de aguas bravas bajo tu marca con costuras reforzadas, rails de impacto y formas específicas de río, pensadas para escuelas, guías y outfitters que dan clases y tours a diario.',
      ],
      faqs: [
        {
          q: '¿Qué construcción necesitan las tablas de aguas bravas?',
          a: 'Rails reforzados y costuras sobremoldeadas absorben los impactos contra las rocas; PVC grueso y capas múltiples resisten los pinchazos del lecho del río. Los diseños de doble cámara añaden reserva de flotación para ríos remotos.',
        },
        {
          q: '¿Suministráis a outfitters de río y escuelas de guías?',
          a: 'Sí. Outfitters y escuelas gestionan flotas de aguas bravas desde 50 uds. con precio de flota, kits de reparación reforzados y componentes de repuesto (quillas, válvulas), habituales en programas de río de alto uso.',
        },
        {
          q: '¿Las tablas de aguas bravas pueden llevar gráficos de marca?',
          a: 'Sí — gráficos a toda cubierta, colocación de logo y colores de equipo se producen desde tu material gráfico. Las capas de impresión anti-desgarro mantienen la marca intacta bajo uso intenso.',
        },
      ],
    },
    {
      slug: 'fishing',
      navLabel: 'Plataformas de pesca',
      metaTitle: 'Tablas SUP de pesca personalizadas — OEM y marca privada | SUPsfactory',
      metaDescription:
        'Tablas SUP hinchables de pesca personalizadas con estabilidad, capacidad de carga y soportes — OEM/marca privada desde 50 uds., directo de fábrica en Qingdao, China.',
      kicker: 'Serie · Pesca',
      h1: 'Tablas SUP de pesca personalizadas — pensadas para pescadores',
      intro: [
        'Las tablas de pesca son plataformas de lanzado estables: anchas y de alto volumen para llevar al pescador más el equipo, con sistemas de fijación para porta-cañas, neveras y tack, y construcción silenciosa para accesos discretos.',
        'Fabricamos plataformas de pesca bajo tu marca con características específicas para pescadores especificadas por proyecto — desde paquetes de fin de semana hasta montajes de torneo.',
      ],
      faqs: [
        {
          q: '¿Qué características de pesca pueden especificarse?',
          a: 'Rejillas de fijación para porta-cañas y accesorios, raíles para equipo, correas de nevera, puntos de fondeo y tablas de alta capacidad hasta ~227 kg (500 lbs) para pescador más equipo. Los paquetes pueden incluir remos, bombas y bolsas con tu marca.',
        },
        {
          q: '¿Cuál es el pedido mínimo para OEM de tablas de pesca?',
          a: 'Los lotes OEM estándar parten de 50 uds. por diseño; los pedidos de prueba, de 5–10 uds. sobre plataformas estándar; el utillaje a medida requiere 200 uds. mínimo. Las muestras salen en 15–20 días y la producción en 30–45 días tras PO y depósito.',
        },
        {
          q: '¿Producís tablas de pesca para alquiler y operaciones de guía?',
          a: 'Sí. Las operaciones de guía y alquiler gestionan flotas de pesca con precio de flota, recambios y kits de reparación ajustados a programas de uso diario.',
        },
      ],
    },
    {
      slug: 'kids',
      navLabel: 'Plataformas infantiles',
      metaTitle: 'Tablas SUP infantiles personalizadas — Plataformas pequeñas y ligeras OEM | SUPsfactory',
      metaDescription:
        'Tablas SUP hinchables infantiles personalizadas — cascos más cortos y ligeros con cubiertas pensadas para niños, seguridad y diversión. OEM desde 50 uds.',
      kicker: 'Serie · Infantil',
      h1: 'Tablas SUP infantiles personalizadas — pequeñas, ligeras y hechas para las primeras pagayadas',
      intro: [
        'Las tablas infantiles están proporcionadas para riders jóvenes: cascos más cortos, pesos más ligeros, anchos ajustados a cuerpos pequeños y cubiertas blandas que perdonan las caídas. Son la puerta de entrada para marcas familiares, escuelas y flotas de alquiler infantiles.',
        'Fabricamos plataformas infantiles bajo tu marca en tamaños estándar y junior, con opciones de paquete adaptadas a la familia.',
      ],
      faqs: [
        {
          q: '¿Qué tamaños de SUP infantil hay?',
          a: 'Las plataformas infantiles van normalmente de 7\' a 9\'6" con anchos de 26" a 30" y pesos de unos 7–9 kg (15–20 lbs). El tamaño se ajusta a la edad y el peso del rider y se verifica con una muestra física antes de la producción.',
        },
        {
          q: '¿Suministráis a escuelas y programas juveniles?',
          a: 'Sí: nuestras plataformas infantiles son un componente habitual de las flotas de escuelas y programas juveniles, pedidas junto con remos junior y accesorios de iniciación con precio de programa.',
        },
        {
          q: '¿Las tablas infantiles pueden llevar gráficos de marca y personajes?',
          a: 'Sí. Colorways a toda cubierta, arte de personajes y colocación de logo se desarrollan desde tu material gráfico o dirección de marca, impresos con las mismas capas anti-desgarro que las tablas de adultos.',
        },
      ],
    },
    {
      slug: 'multi',
      navLabel: 'Plataformas multipersona',
      metaTitle: 'Tablas SUP multipersona personalizadas — Tándem y familia OEM | SUPsfactory',
      metaDescription:
        'Tablas SUP hinchables multipersona personalizadas para recreo familiar y clases en grupo — plataformas tándem, yard y party. OEM desde 50 uds.',
      kicker: 'Serie · Multipersona',
      h1: 'Tablas SUP multipersona personalizadas — tándems, yard y plataformas party',
      intro: [
        'Las tablas multipersona abren el SUP a los grupos: tándems con posiciones extra de pagayada, tablas yard para descansar y plataformas party para varios riders. Sostienen los ingresos de alquiler en resorts, playas y operaciones de lago.',
        'Fabricamos plataformas multipersona bajo tu marca con los perfiles de estabilidad y volumen que exige cada uso.',
      ],
      faqs: [
        {
          q: '¿Qué tipos de tablas multipersona fabricáis?',
          a: 'Tándems (dos remeros, ~13\'–14\'), tablas yard (plataformas cortas y anchas para descanso) y plataformas party de alto volumen para 3–6 riders. Cada tipo se especifica por capacidad, peso y uso previsto.',
        },
        {
          q: '¿Las tablas multipersona son buena inversión de alquiler?',
          a: 'Sí: permiten tarifas por hora superiores con menor coste por rider y mantienen a los grupos juntos en lugar de repartirlos entre tablas individuales. Los operadores suelen combinar tablas multipersona con flotas polivalentes.',
        },
        {
          q: '¿Cuál es la capacidad de una plataforma party?',
          a: 'La capacidad depende de dimensiones y volumen: las plataformas yard y party habituales soportan 180–320 kg (400–700 lbs) y llevan de 3 a 6 riders según tamaño y configuración. Las especificaciones se confirman con una muestra física antes de la producción en volumen.',
        },
      ],
    },
  ],
}

export function getSeriesPage(locale: Locale, slug: string): SeriesPageData | undefined {
  return seriesPages[locale].find((s) => s.slug === slug)
}