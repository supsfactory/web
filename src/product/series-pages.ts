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
      metaTitle: 'Custom All-Around SUP Boards — Inflatable OEM Manufacturer | iSupfactory',
      metaDescription:
        'Custom all-around inflatable SUP boards manufactured under your brand — wide-body stability, OEM/ODM volume from 90–100+ pcs, samples in 7–12 days. Factory direct from Qingdao, China.',
      kicker: 'Series · All-Around',
      h1: 'Custom All-Around SUP Boards — The Default Starting Platform For New Brands',
      intro: [
        'The all-around board is the workhorse of the SUP category: wide enough to feel stable for beginners, agile enough to keep intermediates interested, and light enough to carry anywhere. Most new brands and most rental fleets start here.',
        'We manufacture all-around platforms under your brand from 90–100+ pcs per 150 m roll (volume), with pilot runs from 20–50 pcs. Shape, rails, layup, colors, full-board graphics and packaging are specified per project.',
      ],
      faqs: [
        {
          q: 'Can I customize an all-around SUP board for my brand?',
          a: 'Yes. Every all-around platform is a manufacturing base — you specify dimensions (commonly 10′6″ to 11′6″), width, thickness, layup (single/dual-layer or fusion), rail configuration, EVA pad, full-board graphics and packaging. Custom-mould shapes start at 90–100+ pcs per shape; standard volume production from 90–100+ pcs per 150 m roll.',
        },
        {
          q: 'What is the MOQ for all-around SUP boards?',
          a: 'Standard volume batches start at 90–100+ pcs per 150 m roll; pilot runs on standard platforms start at 20–50 pcs; full custom-moulding runs from 90–100+ pcs per shape. Samples ship in 7–12 days and bulk production runs 25–35 days after confirmed PO and deposit.',
        },
        {
          q: 'What does the retail-ready package include?',
          a: 'The complete package: inflatable board with drop-stitch core, adjustable paddle, hand pump (or electric dual-stage), repair kit, carry backpack and printed carton. Accessories can be swapped or upgraded per your target market.',
        },
        {
          q: 'What EVA deck hardness do you manufacture?',
          a: 'Deck traction pads run 45–55 Shore C — medium-soft, grip-friendly underfoot without hardening in the sun. Thickness, grooves, cutouts and logo placement are specified per project.',
        },
      ],
    },
    {
      slug: 'race',
      navLabel: 'Race Platforms',
      metaTitle: 'Custom Race SUP Boards — Inflatable Racing Platforms OEM | iSupfactory',
      metaDescription:
        'Custom inflatable race SUP boards for clubs, events and brands — drop-stitch racing hulls, OEM volume from 90–100+ pcs, CE-certified production. Factory direct.',
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
          a: 'Yes. Club and team programs order from 90–100+ pcs (volume) with club graphics, and can mix race and training platforms in one order. Fleet pricing applies to combined volumes.',
        },
      ],
    },
    {
      slug: 'surf',
      navLabel: 'Surf Platforms',
      metaTitle: 'Custom Surf SUP Boards — Inflatable Hybrid Surf Platforms OEM | iSupfactory',
      metaDescription:
        'Custom inflatable surf SUP boards — hybrid surf profiles with rounded rails and raised rocker, manufactured under your brand from 90–100+ pcs in Qingdao, China.',
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
      metaTitle: 'Custom Touring SUP Boards — Long-Distance Platforms OEM | iSupfactory',
      metaDescription:
        'Custom inflatable touring SUP boards for long-distance paddling — 12′6″+ displacement hulls, multi-day trip capability, OEM volume from 90–100+ pcs, factory direct.',
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
          a: 'Yes. Outfitters and operators can run dedicated touring fleets from 20–50 pcs (pilot) with fleet pricing, replacement parts and a defined seasonal refresh cycle.',
        },
      ],
    },
    {
      slug: 'yoga',
      navLabel: 'Yoga Platforms',
      metaTitle: 'Custom Yoga SUP Boards — Wide Stable Platforms OEM | iSupfactory',
      metaDescription:
        'Custom inflatable yoga SUP boards — extra-wide stable platforms with soft decks for studios, resorts and instructors. OEM volume from 90–100+ pcs, factory direct.',
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
      metaTitle: 'Custom Whitewater SUP Boards — River & Rapid Platforms OEM | iSupfactory',
      metaDescription:
        'Custom inflatable whitewater SUP boards for rivers and rapids — short maneuverable hulls with reinforced impact construction. OEM volume from 90–100+ pcs in Qingdao, China.',
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
          a: 'Yes. Outfitters and guide schools run whitewater fleets from 20–50 pcs (pilot) with fleet pricing, heavy-duty repair kits and spare fin/valve components — typical for high-utilization river programs.',
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
      metaTitle: 'Custom Fishing SUP Boards — OEM & Private Label | iSupfactory',
      metaDescription:
        'Custom inflatable fishing SUP boards with stability, weight capacity and accessory mounts — OEM/private label volume from 90–100+ pcs, factory-direct from Qingdao, China.',
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
          a: 'Standard volume batches start at 90–100+ pcs per 150 m roll; pilot runs from 20–50 pcs on standard platforms; custom tooling runs from 90–100+ pcs per shape. Samples ship in 7–12 days; production runs 25–35 days after confirmed PO and deposit.',
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
      metaTitle: 'Custom Kids SUP Boards — Small Light Platforms OEM | iSupfactory',
      metaDescription:
        'Custom kids inflatable SUP boards — shorter, lighter platforms with child-friendly decks designed for safety and fun. OEM volume from 90–100+ pcs, factory direct.',
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
      metaTitle: 'Custom Multi-Person SUP Boards — Tandem & Family OEM | iSupfactory',
      metaDescription:
        'Custom multi-person inflatable SUP boards for family recreation and group lessons — tandem, yard and party platforms. OEM volume from 90–100+ pcs, factory direct.',
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
      metaTitle: 'Tablas SUP polivalentes personalizadas — Fabricante OEM inflable | iSupfactory',
      metaDescription:
        'Tablas SUP hinchables polivalentes personalizadas bajo tu marca: estabilidad de tabla ancha, OEM/ODM en volumen desde 90–100+ uds., muestras en 7–12 días. Directo de fábrica en Qingdao, China.',
      kicker: 'Serie · Polivalente',
      h1: 'Tablas SUP polivalentes personalizadas — la plataforma de partida para nuevas marcas',
      intro: [
        'La tabla polivalente es la base de la categoría SUP: ancha para dar estabilidad a principiantes, ágil para mantener el interés de nivel intermedio y ligera para llevarla donde sea. La mayoría de las marcas nuevas y de las flotas de alquiler empiezan aquí.',
        'Fabricamos plataformas polivalentes bajo tu marca desde 90–100+ uds. por rollo de 150 m (volumen), con pedidos piloto desde 20–50 uds. Forma, rails, capas, colores, gráficos a toda cubierta y embalaje se especifican por proyecto.',
      ],
      faqs: [
        {
          q: '¿Puedo personalizar una tabla SUP polivalente para mi marca?',
          a: 'Sí. Cada plataforma polivalente es una base de fabricación: especificas dimensiones (habitualmente 10\'6" a 11\'6"), ancho, grosor, capas (una/doble o fusión), configuración de rails, piso EVA, gráficos a toda cubierta y embalaje. Los diseños con molde a medida parten de 90–100+ uds. por diseño; la producción de volumen estándar, de 90–100+ uds. por rollo de 150 m.',
        },
        {
          q: '¿Cuál es el pedido mínimo para tablas SUP polivalentes?',
          a: 'Los lotes de volumen estándar parten de 90–100+ uds. por rollo de 150 m; los pedidos piloto sobre plataformas estándar, de 20–50 uds.; el moldeo a medida se produce desde 90–100+ uds. por diseño. Las muestras salen en 7–12 días y la producción, en 25–35 días tras PO y depósito confirmados.',
        },
        {
          q: '¿Qué incluye el paquete completo listo para retail?',
          a: 'El paquete completo: tabla hinchable con núcleo drop-stitch, remo ajustable, bomba manual (o doble etapa eléctrica), kit de reparación, bolsa de transporte y caja impresa. Los accesorios se cambian o mejoran según tu mercado objetivo.',
        },
        {
          q: '¿Qué dureza de piso EVA fabricáis?',
          a: 'Las alfombrillas van de 45–55 Shore C: dureza media-blanda, con buen agarre sin endurecerse con el sol. Grosor, ranuras, recortes y colocación del logo se especifican por proyecto.',
        },
      ],
    },
    {
      slug: 'race',
      navLabel: 'Plataformas de competición',
      metaTitle: 'Tablas SUP de competición personalizadas — Plataformas de carrera OEM | iSupfactory',
      metaDescription:
        'Tablas SUP hinchables de competición personalizadas para clubs, eventos y marcas — cascos de carrera drop-stitch, OEM en volumen desde 90–100+ uds., producción certificada CE. Directo de fábrica.',
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
          a: 'Sí. Los programas de clubs y equipos piden desde 90–100+ uds. (volumen) con gráficos del club y pueden mezclar tablas de competición y entrenamiento en un mismo pedido. El precio de flota se aplica al volumen combinado.',
        },
      ],
    },
    {
      slug: 'surf',
      navLabel: 'Plataformas de surf',
      metaTitle: 'Tablas SUP de surf personalizadas — Plataformas híbridas inflables OEM | iSupfactory',
      metaDescription:
        'Tablas SUP hinchables de surf personalizadas — perfiles de surf híbridos con rails redondeados y rocker elevado, fabricadas bajo tu marca desde 90–100+ uds. en Qingdao, China.',
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
      metaTitle: 'Tablas SUP de travesía personalizadas — Plataformas de larga distancia OEM | iSupfactory',
      metaDescription:
        'Tablas SUP hinchables de travesía personalizadas para pagayadas de larga distancia — cascos de desplazamiento de 12\'6"+, capacidad para equipo, OEM en volumen desde 90–100+ uds.',
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
          a: 'Sí. Outfitters y operadores pueden gestionar flotas de travesía desde 20–50 uds. (piloto) con precio de flota, recambios y un ciclo definido de renovación estacional.',
        },
      ],
    },
    {
      slug: 'yoga',
      navLabel: 'Plataformas de yoga',
      metaTitle: 'Tablas SUP de yoga personalizadas — Plataformas anchas y estables OEM | iSupfactory',
      metaDescription:
        'Tablas SUP hinchables de yoga personalizadas — plataformas extra anchas con cubiertas blandas para estudios, resorts e instructores. OEM en volumen desde 90–100+ uds.',
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
      metaTitle: 'Tablas SUP de aguas bravas personalizadas — Plataformas de río OEM | iSupfactory',
      metaDescription:
        'Tablas SUP hinchables de aguas bravas personalizadas para ríos y rápidos — cascos cortos y maniobrables con construcción de impacto reforzada. OEM en volumen desde 90–100+ uds.',
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
          a: 'Sí. Outfitters y escuelas gestionan flotas de aguas bravas desde 20–50 uds. (piloto) con precio de flota, kits de reparación reforzados y componentes de repuesto (quillas, válvulas), habituales en programas de río de alto uso.',
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
      metaTitle: 'Tablas SUP de pesca personalizadas — OEM y marca privada | iSupfactory',
      metaDescription:
        'Tablas SUP hinchables de pesca personalizadas con estabilidad, capacidad de carga y soportes — OEM/marca privada en volumen desde 90–100+ uds., directo de fábrica en Qingdao, China.',
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
          a: 'Los lotes de volumen estándar parten de 90–100+ uds. por rollo de 150 m; los pedidos piloto, de 20–50 uds. sobre plataformas estándar; el utillaje a medida se produce desde 90–100+ uds. por diseño. Las muestras salen en 7–12 días y la producción en 25–35 días tras PO y depósito.',
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
      metaTitle: 'Tablas SUP infantiles personalizadas — Plataformas pequeñas y ligeras OEM | iSupfactory',
      metaDescription:
        'Tablas SUP hinchables infantiles personalizadas — cascos más cortos y ligeros con cubiertas pensadas para niños, seguridad y diversión. OEM en volumen desde 90–100+ uds.',
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
      metaTitle: 'Tablas SUP multipersona personalizadas — Tándem y familia OEM | iSupfactory',
      metaDescription:
        'Tablas SUP hinchables multipersona personalizadas para recreo familiar y clases en grupo — plataformas tándem, yard y party. OEM en volumen desde 90–100+ uds.',
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
  fr: [
    {
      slug: 'all-around',
      navLabel: 'Plateformes polyvalentes',
      metaTitle: 'Tableaux SUP polyvalents personnalisés — Fabricant OEM gonflable | iSupfactory',
      metaDescription:
        'Tableaux SUP gonflables polyvalents personnalisés sous votre marque — stabilité large, OEM/ODM en volume dès 90–100+ pcs, échantillons en 7–12 jours. Usine directe de Qingdao, Chine.',
      kicker: 'Série · Polyvalent',
      h1: 'Tableaux SUP polyvalents personnalisés — la plateforme de départ par défaut pour les nouvelles marques',
      intro: [
        'Le tableau polyvalent est le cheval de bataille de la catégorie SUP : assez large pour offrir une stabilité aux débutants, assez agile pour garder les intermédiaires intéressés, et assez léger pour être transporté partout. La plupart des nouvelles marques et des flottes de location commencent ici.',
        'Nous fabriquons des plateformes polyvalentes sous votre marque à partir de 90–100+ pcs par rouleau de 150 m (volume), avec des séries pilotes à partir de 20–50 pcs. Forme, rails, couches, couleurs, graphiques pleine surface et emballage sont spécifiés par projet.',
      ],
      faqs: [
        {
          q: 'Puis-je personnaliser un tableau SUP polyvalent pour ma marque ?',
          a: 'Oui. Chaque plateforme polyvalente est une base de fabrication — vous spécifiez les dimensions (généralement de 10′6″ à 11′6″), la largeur, l\'épaisseur, le laminage (simple/double couche ou fusion), la configuration des rails, le tapis EVA, les graphiques pleine surface et l\'emballage. Les formes sur mesure à moule commencent à 90–100+ pcs par forme ; la production standard en volume à partir de 90–100+ pcs par rouleau de 150 m.',
        },
        {
          q: 'Quel est le MOQ pour les tableaux SUP polyvalents ?',
          a: 'Les lots standard en volume commencent à 90–100+ pcs par rouleau de 150 m ; les séries pilotes sur plateformes standard à partir de 20–50 pcs ; les séries de moulage complet à partir de 90–100+ pcs par forme. Les échantillons sont expédiés en 7–12 jours et la production en série prend 25–35 jours après confirmation du bon de commande et de l\'acompte.',
        },
        {
          q: 'Que comprend le package prêt pour la vente au détail ?',
          a: 'Le package complet : tableau gonflable avec noyau drop-stitch, pagaie réglable, pompe manuelle (ou pompe électrique double étage), kit de réparation, sac à dos de transport et carton imprimé. Les accessoires peuvent être modifiés ou améliorés selon votre marché cible.',
        },
        {
          q: 'Quelle dureté de sol EVA fabriquez-vous ?',
          a: 'Les tapis de traction vont de 45–55 Shore C — dureté moyenne souple, adhérence confortable sous le pied sans durcir au soleil. L\'épaisseur, les rainures, les découpes et le positionnement du logo sont spécifiés par projet.',
        },
      ],
    },
    {
      slug: 'race',
      navLabel: 'Plateformes de course',
      metaTitle: 'Tableaux SUP de course personnalisés — Plateformes de racing OEM | iSupfactory',
      metaDescription:
        'Tableaux SUP gonflables de course personnalisés pour clubs, événements et marques — coques de racing drop-stitch, OEM en volume dès 90–100+ pcs, production certifiée CE. Usine directe.',
      kicker: 'Série · Course',
      h1: 'Tableaux SUP de course personnalisés — coques de racing fabriquées pour votre marque',
      intro: [
        'Les tableaux de course privilégient la vitesse à la stabilité : profils plus longs et plus étroits, formes de proue affinées et faible rocker, conçus pour le pagayage en déplacement. Les versions gonflables égalent les performances des planches rigides dans une plateforme transportable.',
        'Nous produisons des plateformes de course pour marques, clubs et organisateurs d\'événements avec des noyaux drop-stitch de précision, des couches spécifiques à la course et des formes de coque orientées vitesse — testées en bassin hydrodynamique.',
      ],
      faqs: [
        {
          q: 'Quelles dimensions de SUP de course pouvez-vous fabriquer ?',
          a: 'Les plateformes de course vont généralement de 12′6″ × 28″ pour les classes 12′6 à 14′ × 23″–25″ pour les formats Unlimited/Touring race. La largeur, le rocker et le profil de proue sont adaptés au groupe de rameurs cible et vérifiés sur un échantillon physique.',
        },
        {
          q: 'Les tableaux de course nécessitent-ils une construction spéciale ?',
          a: 'Oui — les tableaux de course utilisent un noyau drop-stitch plus léger et à tissage serré, des pressions plus élevées (18–20 PSI) et un renforcement de rail plus rigide pour maintenir la forme de la coque en vitesse. Le choix des couches (simple vs double) équilibre poids et rigidité, ce que nous définissons avec vous pour chaque projet.',
        },
        {
          q: 'Les clubs peuvent-ils commander des tableaux de course pour leur équipe ?',
          a: 'Oui. Les programmes clubs et équipes commandent à partir de 90–100+ pcs (volume) avec les graphiques du club, et peuvent mélanger tableaux de course et d\'entraînement dans une même commande. Le tarif flotte s\'applique aux volumes combinés.',
        },
      ],
    },
    {
      slug: 'surf',
      navLabel: 'Plateformes de surf',
      metaTitle: 'Tableaux SUP de surf personnalisés — Plateformes hybrides gonflables OEM | iSupfactory',
      metaDescription:
        'Tableaux SUP gonflables de surf personnalisés — profils hybrides avec rails arrondis et rocker relevé, fabriqués sous votre marque dès 90–100+ pcs à Qingdao, Chine.',
      kicker: 'Série · Surf',
      h1: 'Tableaux SUP de surf personnalisés — plateformes hybrides pour chevaucher les vagues',
      intro: [
        'Les tableaux SUP de surf apportent les performances vagues dans une plateforme transportable : longueurs réduites, rocker accru, rails arrondis et proues concaves qui maintiennent la ligne sur la face de la vague. Les formes de surf gonflables sont la manière la plus accessible de s\'initier au surf avec pagaie.',
        'Nous fabriquons des plateformes de surf sous votre marque avec des formes et des détails de construction spécifiques aux vagues — des packages complets type soft-top aux laminages performance.',
      ],
      faqs: [
        {
          q: 'Quelles tailles sont disponibles pour les tableaux SUP de surf ?',
          a: 'Les plateformes de surf courantes vont de 8′6″ à 10′6″ avec des largeurs autour de 30″–34″. La longueur, le rocker et le profil de rails sont spécifiés en fonction du poids du rameur et du type de vague, et vérifiés sur un échantillon physique avant production.',
        },
        {
          q: 'Les tableaux de surf gonflables sont-ils suffisamment durables pour la location ?',
          a: 'Avec des rails renforcés et du PVC résistant aux UV, nos plateformes de surf supportent l\'usage en location et en formation dans les écoles de surf. Les flottes de location combinent généralement des formes polyvalentes et des formes de surf — le tarif flotte s\'applique au volume mixte.',
        },
        {
          q: 'Pouvez-vous reproduire les graphiques de notre marque sur les tableaux de surf ?',
          a: 'Oui. Les graphiques pleine surface, l\'illustration de fond, les tapis de traction EVA et l\'emballage sont produits à partir de vos fichiers graphiques ou développés par notre équipe design à partir des éléments de votre marque.',
        },
      ],
    },
    {
      slug: 'touring',
      navLabel: 'Plateformes de randonnée',
      metaTitle: 'Tableaux SUP de randonnée personnalisés — Plateformes longue distance OEM | iSupfactory',
      metaDescription:
        'Tableaux SUP gonflables de randonnée pour pagayage longue distance — coques de déplacement 12′6″+, capacité multi-jours, OEM en volume dès 90–100+ pcs, usine directe.',
      kicker: 'Série · Randonnée',
      h1: 'Tableaux SUP de randonnée personnalisés — conçus pour la distance, le chargement et le terrain',
      intro: [
        'Les tableaux de randonnée sont longs et efficaces : proues effilées pour le déplacement, volume modéré pour la stabilité en eau libre, et une longueur de coque suffisante pour transporter du matériel lors de sorties multi-jours. Ils sont la plateforme privilégiée des rameurs de distance et des outfitters d\'expédition.',
        'Nous produisons des plateformes de randonnée sous votre marque avec un profilage de déplacement, des points d\'ancrage et un espace de pont pour le fret, ainsi qu\'un écosystème d\'accessoires compatibles (filets élastiques, D-rings, supports).',
      ],
      faqs: [
        {
          q: 'Quelles tailles de SUP de randonnée fabriquez-vous ?',
          a: 'Les plateformes de randonnée vont généralement de 12′6″ à 14′ avec des largeurs de 28″–32″. Les coques de 14′ privilégient le glissement ; les versions plus larges ajoutent de la stabilité au chargement. Les spécifications sont confirmées sur un échantillon physique avant production en série.',
        },
        {
          q: 'Les tableaux de randonnée comportent-ils des options de chargement et d\'ancrage ?',
          a: 'Oui — filets élastiques de chargement, grilles D-rings, supports pour cannes et rails d\'accessoires sont spécifiés par projet. Les packages de randonnée s\'associent couramment à des sacs à dos et des pompes haute pression.',
        },
        {
          q: 'Fournissez-vous des tableaux de randonnée aux outfitters et opérateurs de location ?',
          a: 'Oui. Les outfitters et opérateurs peuvent constituer des flottes de randonnée dédiées à partir de 20–50 pcs (pilote) avec tarif flotte, pièces de rechange et cycle de renouvellement saisonnier défini.',
        },
      ],
    },
    {
      slug: 'yoga',
      navLabel: 'Plateformes de yoga',
      metaTitle: 'Tableaux SUP de yoga personnalisés — Plateformes larges et stables OEM | iSupfactory',
      metaDescription:
        'Tableaux SUP gonflables de yoga personnalisés — plateformes extra larges avec ponts moelleux pour studios, resorts et instructeurs. OEM en volume dès 90–100+ pcs, usine directe.',
      kicker: 'Série · Yoga',
      h1: 'Tableaux SUP de yoga personnalisés — plateformes extra larges pour pratiquer sur l\'eau',
      intro: [
        'Les tableaux de yoga sont conçus pour l\'immobilité : largeur et volume supplémentaires pour une plateforme stable, revêtements moelleux pour les mains et les pieds, et profils bas qui maintiennent le tableau au plus près de l\'eau. Ils servent les studios, resorts et instructeurs de programmes de yoga aquatique.',
        'Nous fabriquons des plateformes de yoga sous votre marque avec les profils stables les plus larges, des revêtements EVA premium et des options à l\'échelle des programmes pour studios et flottes de resorts.',
      ],
      faqs: [
        {
          q: 'Qu\'est-ce qui fait un bon tableau SUP pour le yoga ?',
          a: 'La stabilité avant tout : une largeur accrue (33″–36″) et un volume important maintiennent le tableau plat et ferme. Un revêtement EVA doux au toucher protège les mains, les genoux et les pieds, et un rail à faible profil réduit les oscillations lors de la montée et de la descente.',
        },
        {
          q: 'Les resorts peuvent-ils commander des tableaux de yoga dans le cadre d\'une flotte ?',
          a: 'Oui. Les resorts associent couramment des plateformes de yoga aux tableaux polyvalents pour les clients. Les volumes de flotte combinés ouvrent droit au tarif flotte, et les graphiques de marque dans la charte de l\'établissement s\'appliquent à l\'ensemble de la commande.',
        },
        {
          q: 'Les tableaux de yoga incluent-ils des packages complets ?',
          a: 'Oui — tableau gonflable, pagaie, pompe, sac à dos et kit de réparation, ou un kit allégé pour le stockage sur place (tableau + pagaie + pompe électrique), selon les besoins de votre programme.',
        },
      ],
    },
    {
      slug: 'whitewater',
      navLabel: 'Plateformes de eaux vives',
      metaTitle: 'Tableaux SUP de eaux vives personnalisés — Plateformes de rivière OEM | iSupfactory',
      metaDescription:
        'Tableaux SUP gonflables de eaux vives pour rivières et rapides — coques courtes et maniables avec construction de choc renforcée. OEM en volume dès 90–100+ pcs, usine directe de Qingdao, Chine.',
      kicker: 'Série · Eaux vives',
      h1: 'Tableaux SUP de eaux vives personnalisés — coques de rivière conçues pour encaisser les chocs',
      intro: [
        'Les tableaux de eaux vives sont courts, larges et robustes : coques maniables qui pivotent à la demande, grande résistance aux impacts sur les rails et construction lourde pour les fonds peu profonds et les mises à l\'eau rocheuses.',
        'Nous fabriquons des plateformes de eaux vives sous votre marque avec des coutures renforcées, des rails de choc et des formes spécifiques à la rivière — conçues pour les écoles, les guides et les outfitters qui animent des cours et des excursions quotidiennes.',
      ],
      faqs: [
        {
          q: 'Quelle construction les tableaux de eaux vives nécessitent-ils ?',
          a: 'Des rails renforcés et des coutures surpiqûées absorbent les impacts contre les rochers ; un PVC épais et des couches multicouches résistent aux crevaisons du lit de rivière. Les designs à double chambre ajoutent une réserve de flottaison pour les rivières isolées.',
        },
        {
          q: 'Fournissez-vous aux outfitters de rivière et aux écoles de guides ?',
          a: 'Oui. Les outfitters et les écoles de guides constituent des flottes de eaux vives à partir de 20–50 pcs (pilote) avec tarif flotte, kits de réparation renforcés et pièces de rechange (dérives, vannes) — typiques pour les programmes à usage intensif en rivière.',
        },
        {
          q: 'Les tableaux de eaux vives peuvent-ils porter les graphiques de marque ?',
          a: 'Oui — graphiques pleine surface, positionnement du logo et couleurs d\'équipe sont produits à partir de vos fichiers graphiques. Les couches d\'impression anti-déchirure préservent l\'identité de marque même sous usage intense.',
        },
      ],
    },
    {
      slug: 'fishing',
      navLabel: 'Plateformes de pêche',
      metaTitle: 'Tableaux SUP de pêche personnalisés — OEM et marque privée | iSupfactory',
      metaDescription:
        'Tableaux SUP gonflables de pêche personnalisés avec stabilité, capacité de charge et supports d\'accessoires — OEM/marque privée en volume dès 90–100+ pcs, usine directe de Qingdao, Chine.',
      kicker: 'Série · Pêche',
      h1: 'Tableaux SUP de pêche personnalisés — conçus pour les pêcheurs',
      intro: [
        'Les tableaux de pêche sont des plateformes de lancer stables : larges et à haut volume pour transporter le pêcheur et son équipement, avec des systèmes de fixation pour porte-cannes, glacières et tackle box, et une construction silencieuse pour les approches discrètes.',
        'Nous fabriquons des plateformes de pêche sous votre marque avec des fonctionnalités spécifiques aux pêcheurs, spécifiées par projet — des packages week-end aux montages complets de tournoi.',
      ],
      faqs: [
        {
          q: 'Quelles fonctionnalités de pêche peuvent être spécifiées ?',
          a: 'Grilles de fixation pour porte-cannes et accessoires, rails d\'équipement, sangles de glacière, points d\'amarrage et tableaux haute capacité jusqu\'à 500 lbs pour le pêcheur plus l\'équipement. Les packages peuvent inclure des pagaies, pompes et sacs avec votre marque.',
        },
        {
          q: 'Quel est le MOQ pour les commandes OEM de tableaux de pêche ?',
          a: 'Les lots standard en volume commencent à 90–100+ pcs par rouleau de 150 m ; les séries pilotes à partir de 20–50 pcs sur plateformes standard ; l\'outillage sur mesure à partir de 90–100+ pcs par forme. Les échantillons sont expédiés en 7–12 jours et la production en série prend 25–35 jours après confirmation du bon de commande et de l\'acompte.',
        },
        {
          q: 'Produisez-vous des tableaux de pêche pour la location et les activités de guide ?',
          a: 'Oui. Les activités de guide et de location gèrent des flottes de pêche avec tarif flotte, pièces de rechange et kits de réparation adaptés aux programmes d\'usage quotidien.',
        },
      ],
    },
    {
      slug: 'kids',
      navLabel: 'Plateformes enfants',
      metaTitle: 'Tableaux SUP enfants personnalisés — Plateformes légères et compactes OEM | iSupfactory',
      metaDescription:
        'Tableaux SUP gonflables enfants personnalisés — plateformes plus courtes et plus légères avec ponts adaptés aux enfants, conçus pour la sécurité et le plaisir. OEM en volume dès 90–100+ pcs, usine directe.',
      kicker: 'Série · Enfants',
      h1: 'Tableaux SUP enfants personnalisés — compacts, légers et conçus pour les premières pagaies',
      intro: [
        'Les tableaux enfants sont proportionnés pour les jeunes rameurs : coques plus courtes, poids réduits, largeurs adaptées aux petits gabarits, et ponts moelleux qui pardonnent les chutes. Ils constituent le point d\'entrée pour les marques familiales, les écoles et les flottes de location destinées aux enfants.',
        'Nous fabriquons des plateformes enfants sous votre marque en tailles standard et junior, avec des options de package adaptées aux familles.',
      ],
      faqs: [
        {
          q: 'Quelles tailles de tableaux SUP enfants proposez-vous ?',
          a: 'Les plateformes enfants vont généralement de 7′ à 9′6″ avec des largeurs de 26″ à 30″ et des poids d\'environ 7–9 kg (15–20 lbs). La taille est adaptée à l\'âge et au poids du rameur, et vérifiée sur un échantillon physique avant production.',
        },
        {
          q: 'Fournissez-vous aux écoles et programmes jeunesse ?',
          a: 'Oui — nos plateformes enfants sont un composant courant des flottes scolaires et de programmes jeunesse, commandées avec des pagaies junior et des accessoires de débutant au tarif programme.',
        },
        {
          q: 'Les tableaux enfants peuvent-ils porter les graphiques de marque et de personnages ?',
          a: 'Oui. Les déclinaisons couleur pleine surface, les illustrations de personnages et le positionnement du logo sont développés à partir de vos fichiers graphiques ou de la direction de marque — imprimés avec les mêmes couches anti-déchirure que les tableaux adultes.',
        },
      ],
    },
    {
      slug: 'multi',
      navLabel: 'Plateformes multiplièges',
      metaTitle: 'Tableaux SUP multiplièges personnalisés — Tandem et famille OEM | iSupfactory',
      metaDescription:
        'Tableaux SUP gonflables multiplièges pour loisirs familiaux et cours en groupe — plateformes tandem, yard et party. OEM en volume dès 90–100+ pcs, usine directe.',
      kicker: 'Série · Multiplièges',
      h1: 'Tableaux SUP multiplièges personnalisés — tandems, yard et plateformes party',
      intro: [
        'Les tableaux multiplièges ouvrent le SUP aux groupes : tandems avec positions de pagaie supplémentaires, tableaux yard pour se détendre et plateformes party pour plusieurs rameurs. Ils soutiennent les revenus de location dans les resorts, les plages et les bases nautiques.',
        'Nous fabriquons des plateformes multiplièges sous votre marque avec les profils de stabilité et de volume adaptés à chaque usage.',
      ],
      faqs: [
        {
          q: 'Quels types de tableaux multiplièges fabriquez-vous ?',
          a: 'Tandems (deux rameurs, ~13′–14′), tableaux yard (plateformes courtes et larges pour se détendre) et plateformes party à haut volume pour 3–6 rameurs. Chaque type est spécifié en fonction de la capacité, du poids et de l\'usage prévu.',
        },
        {
          q: 'Les tableaux multiplièges sont-ils un bon investissement pour la location ?',
          a: 'Oui — ils permettent des tarifs horaires premium avec un coût d\'équipement réduit par rameur, et maintiennent les groupes ensemble au lieu de les disperser sur des tableaux individuels. Les opérateurs de location associent généralement les tableaux multiplièges aux flottes polyvalentes.',
        },
        {
          q: 'Quelle est la capacité d\'une plateforme party ?',
          a: 'La capacité dépend des dimensions et du volume : les plateformes yard et party courantes supportent 400–700 lbs et transportent 3–6 rameurs selon la taille et la configuration. Les spécifications sont confirmées sur un échantillon physique avant la production en volume.',
        },
      ],
    },
  ],
  de: [
    {
      slug: 'all-around',
      navLabel: 'Allround-Plattformen',
      metaTitle: 'Maßgefertigte Allround-SUP-Boards — Aufblasbarer OEM-Hersteller | iSupfactory',
      metaDescription:
        'Aufblasbare Allround-SUP-Boards in Ihrem Branding — breite, stabile Boards, OEM/ODM ab 90–100+ Stück, Muster in 7–12 Tagen. Direkt ab Werk aus Qingdao, China.',
      kicker: 'Serie · Allround',
      h1: 'Maßgefertigte Allround-SUP-Boards — die Standard-Plattform für neue Marken',
      intro: [
        'Das Allround-Board ist das Arbeitstier der SUP-Kategorie: breit genug, um sich für Anfänger stabil anzufühlen, agil genug, um Fortgeschrittene bei Laune zu halten, und leicht genug, um es überallhin mitzunehmen. Die meisten neuen Marken und die meisten Verleihflotten starten hier.',
        'Wir fertigen Allround-Plattformen unter Ihrer Marke ab 90–100+ Stück pro 150-m-Rolle (Menge), mit Pilotproduktionen ab 20–50 Stück. Form, Rails, Layup, Farben, vollflächige Grafiken und Verpackung werden pro Projekt spezifiziert.',
      ],
      faqs: [
        {
          q: 'Kann ich ein Allround-SUP-Board für meine Marke individualisieren?',
          a: 'Ja. Jede Allround-Plattform ist eine Fertigungsbasis — Sie legen Maße (üblicherweise 10′6″ bis 11′6″), Breite, Dicke, Layup (ein-/zweilagig oder Fusion), Rail-Konfiguration, EVA-Pad, vollflächige Grafiken und Verpackung fest. Formen mit eigenem Werkzeug starten ab 90–100+ Stück pro Form; die Standard-Mengenproduktion ab 90–100+ Stück pro 150-m-Rolle.',
        },
        {
          q: 'Wie hoch ist das MOQ für Allround-SUP-Boards?',
          a: 'Standard-Mengenchargen starten bei 90–100+ Stück pro 150-m-Rolle; Pilotproduktionen auf Standardplattformen ab 20–50 Stück; volle Eigenfertigung mit neuem Werkzeug ab 90–100+ Stück pro Form. Muster versenden wir in 7–12 Tagen, die Serienproduktion dauert 25–35 Tage nach bestätigter Bestellung und Anzahlung.',
        },
        {
          q: 'Was umfasst das retailfertige Paket?',
          a: 'Das Komplettpaket: aufblasbares Board mit Drop-Stitch-Kern, verstellbares Paddel, Handpumpe (oder elektrische Zweistufenpumpe), Reparaturset, Transportrucksack und bedruckter Karton. Zubehör kann je nach Zielmarkt getauscht oder aufgewertet werden.',
        },
        {
          q: 'Welche EVA-Deckhärte fertigen Sie?',
          a: 'Deck-Traktionspads laufen meist von 45–55 Shore C — mittelweich, griffig unter den Füßen und verhärten auch in der Sonne nicht. Dicke, Rillen, Ausschnitte und Logo-Positionierung werden pro Projekt spezifiziert.',
        },
      ],
    },
    {
      slug: 'race',
      navLabel: 'Racing-Plattformen',
      metaTitle: 'Maßgefertigte Race-SUP-Boards — Aufblasbare Racing-Plattformen OEM | iSupfactory',
      metaDescription:
        'Maßgefertigte aufblasbare Race-SUP-Boards für Clubs, Events und Marken — Drop-Stitch-Racing-Rümpfe, OEM ab 90–100+ Stück, CE-zertifizierte Produktion. Direkt ab Werk.',
      kicker: 'Serie · Race',
      h1: 'Maßgefertigte Race-SUP-Boards — Racing-Rümpfe für Ihre Marke gefertigt',
      intro: [
        'Race-Boards tauschen Stabilität gegen Geschwindigkeit: längere, schmalere Profile mit fein ausgearbeiteten Bugformen und wenig Rocker, gebaut für das Verdrängungspaddeln. Die aufblasbaren Versionen erreichen die Leistung von Hardboards in einer tragbaren Plattform.',
        'Wir produzieren Race-Plattformen für Marken, Clubs und Eventveranstalter mit präzisen Drop-Stitch-Kernen, Race-Layups und geschwindigkeitsorientierten Rumpfformen — statistisch getestet in unserem hydrodynamischen Versuchsbecken.',
      ],
      faqs: [
        {
          q: 'Welche Race-SUP-Maße können Sie fertigen?',
          a: 'Typische Race-Plattformen reichen von 12′6″ × 28″ für die Klasse 12′6 bis 14′ × 23″–25″ für die Formate Unlimited/Touring Race. Breite, Rocker und Bugprofil werden auf die Ziel-Ridergruppe abgestimmt und an einem physischen Muster verifiziert.',
        },
        {
          q: 'Erfordern Race-Boards einen besonderen Aufbau?',
          a: 'Ja — Race-Boards nutzen einen leichteren, eng gewebten Drop-Stitch-Kern mit höherem Druck (18–20 PSI) und steiferer Rail-Verstärkung, damit die Rumpfform bei Tempo erhalten bleibt. Die Layup-Wahl (ein- vs. zweilagig) balanciert Gewicht und Steifigkeit aus, was wir mit Ihnen pro Projekt festlegen.',
        },
        {
          q: 'Können Clubs Race-Boards für ihr Team bestellen?',
          a: 'Ja. Club- und Teamprogramme bestellen ab 90–100+ Stück (Menge) mit Clubgrafiken und können Race- und Trainingsplattformen in einem Auftrag mischen. Für kombinierte Mengen gelten Flottenpreise.',
        },
      ],
    },
    {
      slug: 'surf',
      navLabel: 'Surf-Plattformen',
      metaTitle: 'Maßgefertigte Surf-SUP-Boards — Hybride aufblasbare Surf-Plattformen OEM | iSupfactory',
      metaDescription:
        'Maßgefertigte aufblasbare Surf-SUP-Boards — hybride Surfprofile mit abgerundeten Rails und erhöhtem Rocker, unter Ihrer Marke ab 90–100+ Stück in Qingdao, China gefertigt.',
      kicker: 'Serie · Surf',
      h1: 'Maßgefertigte Surf-SUP-Boards — hybride Surf-Plattformen zum Wellenreiten',
      intro: [
        'Surf-SUP-Boards bringen Wellenperformance in eine tragbare Plattform: kürzere Längen, mehr Rocker, abgerundete Rails und konkave Bugformen, die auf der Wellenflanke die Linie halten. Aufblasbare Surf-Formen sind der zugänglichste Einstieg ins Paddelsurfen.',
        'Wir fertigen Surf-Plattformen unter Ihrer Marke mit wellenspezifischem Shaping und Konstruktionsdetails — vom Soft-Top-Komplettpaket bis zum Performance-Layup.',
      ],
      faqs: [
        {
          q: 'Welche Größen sind für Surf-SUP-Boards verfügbar?',
          a: 'Übliche Surf-Plattformen laufen von 8′6″ bis 10′6″ mit Breiten um 30″–34″. Länge, Rocker und Rail-Profil werden je nach Ridergewicht und Wellentyp spezifiziert und vor der Produktion an einem physischen Muster verifiziert.',
        },
        {
          q: 'Sind aufblasbare Surf-Boards robust genug für die Vermietung?',
          a: 'Mit verstärkten Rails und UV-beständigem PVC meistern unsere Surf-Plattformen Vermietungs- und Unterrichtsbetrieb in Surfschulen. Verleihflotten kombinieren typischerweise Allround- und Surf-Formen — der Flottenpreis gilt über die gemischte Menge.',
        },
        {
          q: 'Können Sie unsere Markengrafiken auf Surf-Boards umsetzen?',
          a: 'Ja. Vollflächige Deck-Grafiken, Boden-Artwork, EVA-Traktionspads und Verpackung werden aus Ihren Dateien gefertigt oder von unserem Designteam auf Basis Ihrer Marken-Assets entwickelt.',
        },
      ],
    },
    {
      slug: 'touring',
      navLabel: 'Touring-Plattformen',
      metaTitle: 'Maßgefertigte Touring-SUP-Boards — Langstrecken-Plattformen OEM | iSupfactory',
      metaDescription:
        'Aufblasbare Touring-SUP-Boards für Langstrecken — Verdrängungsrümpfe ab 12′6″+, tauglich für Mehrtagestouren, OEM ab 90–100+ Stück, direkt ab Werk.',
      kicker: 'Serie · Touring',
      h1: 'Maßgefertigte Touring-SUP-Boards — gebaut für Distanz, Ladung und Strecke',
      intro: [
        'Touring-Boards sind lang und effizient: spitze Buge für Gleitfahrt, moderates Volumen für Stabilität auf offenem Wasser und genug Rumpflänge, um Ausrüstung auf Mehrtagestouren mitzunehmen. Sie sind die Plattform der Wahl für Distanz-Paddler und Expeditions-Outfitter.',
        'Wir produzieren Touring-Plattformen unter Ihrer Marke mit Verdrängungsshaping, Befestigungspunkten und Deckfläche für Ladung sowie mit carbon-kompatiblen Zubehörsystemen (Bungees, D-Ringe, Halterungen).',
      ],
      faqs: [
        {
          q: 'Welche Touring-SUP-Größen fertigen Sie?',
          a: 'Touring-Plattformen liegen typischerweise bei 12′6″ bis 14′ mit Breiten von 28″–32″. Längere 14′-Rümpfe priorisieren Gleitfahrt; breitere Versionen bieten mehr Ladestabilität. Die Spezifikationen werden vor der Serienproduktion mit einem physischen Muster bestätigt.',
        },
        {
          q: 'Haben Touring-Boards Lade- und Befestigungsoptionen?',
          a: 'Ja — Lade-Netzbungees, D-Ring-Raster, Rutenhalter und Zubehörschienen werden pro Projekt spezifiziert. Touring-Pakete kombinieren in der Regel Boards mit Rucksacktaschen und Hochdruckpumpen.',
        },
        {
          q: 'Liefern Sie Touring-Boards an Outfitter und Verleihbetreiber?',
          a: 'Ja. Outfitter und Betreiber können eigene Touring-Flotten ab 20–50 Stück (Pilot) mit Flottenpreisen, Ersatzteilen und einem definierten saisonalen Erneuerungszyklus betreiben.',
        },
      ],
    },
    {
      slug: 'yoga',
      navLabel: 'Yoga-Plattformen',
      metaTitle: 'Maßgefertigte Yoga-SUP-Boards — Breite stabile Plattformen OEM | iSupfactory',
      metaDescription:
        'Maßgefertigte aufblasbare Yoga-SUP-Boards — extra breite, stabile Plattformen mit weichen Decks für Studios, Resorts und Instruktoren. OEM ab 90–100+ Stück, direkt ab Werk.',
      kicker: 'Serie · Yoga',
      h1: 'Maßgefertigte Yoga-SUP-Boards — extra breite Plattformen für Praxis auf dem Wasser',
      intro: [
        'Yoga-Boards sind für Ruhe gebaut: extra Breite und Volumen für eine stabile Plattform, weiche Soft-Tops für Hände und Füße und niedrige Profile, die das Board nah am Wasser halten. Sie bedienen Studios, Resorts und Instruktoren, die Wasser-Yoga-Programme anbieten.',
        'Wir fertigen Yoga-Plattformen unter Ihrer Marke mit den breitesten stabilen Profilen, Premium-EVA-Deck und Optionen für Studio- und Resort-Flotten.',
      ],
      faqs: [
        {
          q: 'Was macht ein SUP-Board besonders gut für Yoga?',
          a: 'Stabilität zuerst: extra Breite (33″–36″) und Volumen halten das Board flach und ruhig. Ein weiches EVA-Deck schützt Hände, Knie und Füße, und ein niedriges Rail-Profil reduziert das Wackeln beim Auf- und Absteigen.',
        },
        {
          q: 'Können Resorts Yoga-Boards als Teil einer Flotte bestellen?',
          a: 'Ja. Resorts kombinieren Yoga-Plattformen häufig mit Allround-Gäste-Boards. Kombinierte Flottenmengen qualifizieren für Flottenpreise, und die Markengrafik in der Farbwelt des Hauses gilt für den gesamten Auftrag.',
        },
        {
          q: 'Sind Yoga-Boards als Komplettpaket erhältlich?',
          a: 'Ja — aufblasbares Board, Paddel, Pumpe, Rucksack und Reparaturset oder ein reduziertes Kit für die Lagerung vor Ort (Board + Paddel + elektrische Pumpe), je nach Anforderung Ihres Programms.',
        },
      ],
    },
    {
      slug: 'whitewater',
      navLabel: 'Wildwasser-Plattformen',
      metaTitle: 'Maßgefertigte Wildwasser-SUP-Boards — Fluss- und Schnellgewässer-Plattformen OEM | iSupfactory',
      metaDescription:
        'Maßgefertigte aufblasbare Wildwasser-SUP-Boards für Flüsse und Stromschnellen — kurze wendige Rümpfe mit verstärkter Stoßkonstruktion. OEM ab 90–100+ Stück in Qingdao, China.',
      kicker: 'Serie · Wildwasser',
      h1: 'Maßgefertigte Wildwasser-SUP-Boards — Flussrümpfe, gebaut für Stöße',
      intro: [
        'Wildwasser-Boards sind kurz, breit und robust: wendige Rümpfe, die auf Zuruf drehen, hohe Stoßfestigkeit für Rail-Aufpralle und eine schwere Bauweise für flache Flussbetten und steinige Einsetzstellen.',
        'Wir fertigen Wildwasser-Plattformen unter Ihrer Marke mit verstärkten Nähten, Stoß-Rails und flussspezifischen Formen — gebaut für Schulen, Guides und Fluss-Outfitter, die tägliche Kurse und Touren anbieten.',
      ],
      faqs: [
        {
          q: 'Welche Konstruktion brauchen Wildwasser-Boards?',
          a: 'Verstärkte Rails und übernahte Konstruktion absorbieren Rail-Aufpralle; dickes PVC und mehrlagige Layups widerstehen Durchstichen von Flussbetten. Doppelkammer-Konstruktionen erhöhen die Auftriebsreserve für abgelegene Flüsse.',
        },
        {
          q: 'Liefern Sie an Fluss-Outfitter und Guideschulen?',
          a: 'Ja. Outfitter und Guideschulen betreiben Wildwasser-Flotten ab 20–50 Stück (Pilot) mit Flottenpreisen, robusten Reparatursets und Ersatzfinnen/-ventilen — typisch für stark genutzte Flussprogramme.',
        },
        {
          q: 'Können Wildwasser-Boards Markengrafiken tragen?',
          a: 'Ja — vollflächige Grafiken, Logo-Positionierung und Teamfarben werden aus Ihren Dateien gefertigt. Reißfeste Druckschichten halten das Branding auch bei hartem Einsatz intakt.',
        },
      ],
    },
    {
      slug: 'fishing',
      navLabel: 'Angel-Plattformen',
      metaTitle: 'Maßgefertigte Angel-SUP-Boards — OEM und Private Label | iSupfactory',
      metaDescription:
        'Maßgefertigte aufblasbare Angel-SUP-Boards mit Stabilität, Tragkraft und Zubehörhalterungen — OEM/Private Label ab 90–100+ Stück, direkt ab Werk aus Qingdao, China.',
      kicker: 'Serie · Angeln',
      h1: 'Maßgefertigte Angel-SUP-Boards — im Hinblick auf Angler gebaut',
      intro: [
        'Angel-Boards sind stabile Wurfplattformen: breit und voluminös, um Angler plus Ausrüstung zu tragen, mit Halterungssystemen für Rutenhalter, Kühlboxen und Tackle sowie ruhiger Bauweise für lautlose Annäherungen.',
        'Wir fertigen Angel-Plattformen unter Ihrer Marke mit projektspezifisch festgelegten Funktionen für Angler — vom Wochenendpaket bis zum kompletten Turnier-Setup.',
      ],
      faqs: [
        {
          q: 'Welche Angel-Funktionen können spezifiziert werden?',
          a: 'Halterungsraster für Rutenhalter und Zubehör, Ausrüstungsschienen, Kühlbox-Riemen, Ankerpunkte und Hochlast-Boards bis 500 lbs für Angler plus Ausrüstung. Pakete können Paddel, Pumpen und Taschen im Markenlabel umfassen.',
        },
        {
          q: 'Wie hoch ist das MOQ für Angel-SUP-OEM-Aufträge?',
          a: 'Standard-Mengenchargen starten bei 90–100+ Stück pro 150-m-Rolle; Pilotproduktionen ab 20–50 Stück auf Standardplattformen; Produktion mit eigenem Werkzeug ab 90–100+ Stück pro Form. Muster versenden wir in 7–12 Tagen; die Produktion dauert 25–35 Tage nach bestätigter Bestellung und Anzahlung.',
        },
        {
          q: 'Produzieren Sie Angel-Boards für Verleih- und Guiding-Betriebe?',
          a: 'Ja. Guide- und Verleihbetriebe betreiben Angel-Flotten mit Flottenpreisen, Ersatzteilen und auf den Tageseinsatz zugeschnittenen Reparatursets.',
        },
      ],
    },
    {
      slug: 'kids',
      navLabel: 'Kinder-Plattformen',
      metaTitle: 'Maßgefertigte Kinder-SUP-Boards — Kleine, leichte Plattformen OEM | iSupfactory',
      metaDescription:
        'Maßgefertigte aufblasbare Kinder-SUP-Boards — kürzere, leichtere Plattformen mit kindgerechten Decks, ausgelegt für Sicherheit und Spaß. OEM ab 90–100+ Stück, direkt ab Werk.',
      kicker: 'Serie · Kinder',
      h1: 'Maßgefertigte Kinder-SUP-Boards — klein, leicht und gebaut für die ersten Paddelschläge',
      intro: [
        'Kinder-Boards sind auf junge Rider zugeschnitten: kürzere Rümpfe, geringeres Gewicht, schmalere Breiten für kleine Körper und weiche Decks, die Stürze verzeihen. Sie sind der Einstieg für Familienmarken, Schulen und Verleihflotten für Kinder.',
        'Wir fertigen Kinder-Plattformen unter Ihrer Marke in Standard- und Juniorgrößen mit familienfreundlichen Paketoptionen.',
      ],
      faqs: [
        {
          q: 'In welchen Größen sind Kinder-SUP-Boards erhältlich?',
          a: 'Typische Kinder-Plattformen reichen von 7′ bis 9′6″ mit Breiten von 26″ bis 30″ und Gewichten um 7–9 kg (15–20 lbs). Die Größe wird auf Alter und Gewicht des Riders abgestimmt und vor der Produktion an einem physischen Muster verifiziert.',
        },
        {
          q: 'Liefern Sie an Schulen und Jugendprogramme?',
          a: 'Ja — unsere Kinder-Plattformen sind ein häufiger Bestandteil von Schul- und Jugendprogramm-Flotten, bestellt zusammen mit Junior-Paddeln und Einsteigerzubehör zu Programmkonditionen.',
        },
        {
          q: 'Können Kinder-Boards Marken- und Charaktergrafiken tragen?',
          a: 'Ja. Vollflächige Farbvarianten, Charakter-Artwork und Logo-Positionierung werden aus Ihren Dateien oder Ihrer Markendirektion entwickelt — gedruckt mit denselben reißfesten Schichten wie bei Erwachsenen-Boards.',
        },
      ],
    },
    {
      slug: 'multi',
      navLabel: 'Mehrpersonen-Plattformen',
      metaTitle: 'Maßgefertigte Mehrpersonen-SUP-Boards — Tandem & Familie OEM | iSupfactory',
      metaDescription:
        'Aufblasbare Mehrpersonen-SUP-Boards für Familien-Freizeit und Gruppenunterricht — Tandem-, Yard- und Party-Plattformen. OEM ab 90–100+ Stück, direkt ab Werk.',
      kicker: 'Serie · Mehrpersonen',
      h1: 'Maßgefertigte Mehrpersonen-SUP-Boards — Tandems, Yard- und Party-Plattformen',
      intro: [
        'Mehrpersonen-Boards erschließen das SUP für Gruppen: Tandems mit zusätzlichen Paddelpositionen, Yard-Boards zum Entspannen und Party-Plattformen, die mehrere Rider tragen. Sie stützen die Verleihumsätze in Resorts, an Stränden und in See-Betrieben.',
        'Wir fertigen Mehrpersonen-Plattformen unter Ihrer Marke mit den Stabilitäts- und Volumenprofilen, die jedes Einsatzszenario verlangt.',
      ],
      faqs: [
        {
          q: 'Welche Arten von Mehrpersonen-Boards stellen Sie her?',
          a: 'Tandems (zwei Paddler, ca. 13′–14′), Yard-Boards (kurze, breite Lounge-Plattformen) und Party-Plattformen mit hohem Volumen für 3–6 Rider. Jeder Typ wird nach Kapazität, Gewicht und vorgesehenem Einsatz spezifiziert.',
        },
        {
          q: 'Sind Mehrpersonen-Boards eine gute Verleih-Investition?',
          a: 'Ja — sie erzielen höhere Stundensätze bei geringeren Ausrüstungskosten pro Rider und halten Gruppen zusammen, statt sie auf einzelne Boards zu verteilen. Verleihbetreiber kombinieren Mehrpersonen-Boards typischerweise mit Allround-Flotten.',
        },
        {
          q: 'Wie hoch ist die Kapazität einer Party-Plattform?',
          a: 'Die Kapazität hängt von Maßen und Volumen ab: Typische Yard- und Party-Plattformen tragen 400–700 lbs und 3–6 Rider je nach Größe und Konfiguration. Die Spezifikationen werden vor der Serienproduktion an einem physischen Muster bestätigt.',
        },
      ],
    },
  ],
  it: [
    {
      slug: 'all-around',
      navLabel: 'Piattaforme all-round',
      metaTitle: 'Tavole SUP all-round personalizzate — Produttore OEM gonfiabile | iSupfactory',
      metaDescription:
        'Tavole SUP gonfiabili all-round personalizzate con il vostro branding — tavole larghe e stabili, OEM/ODM da 90–100+ pz, campioni in 7–12 giorni. Direttamente dalla fabbrica di Qingdao, Cina.',
      kicker: 'Serie · All-round',
      h1: 'Tavole SUP all-round personalizzate — la piattaforma di partenza per i nuovi brand',
      intro: [
        "La tavola all-round è il cavallo di battaglia della categoria SUP: abbastanza larga da risultare stabile per i principianti, abbastanza agile da mantenere l’interesse di chi ha più esperienza e abbastanza leggera da portarla ovunque. La maggior parte dei nuovi brand e delle flotte da noleggio parte da qui.",
        'Produciamo piattaforme all-round con il vostro marchio da 90–100+ pz per rotolo da 150 m (volume), con produzioni pilota da 20–50 pz. Forma, rail, layup, colori, grafiche a tutta coperta e imballaggio vengono specificati progetto per progetto.',
      ],
      faqs: [
        {
          q: 'Posso personalizzare una tavola SUP all-round per il mio brand?',
          a: 'Sì. Ogni piattaforma all-round è una base di produzione: voi definite dimensioni (solitamente da 10′6″ a 11′6″), larghezza, spessore, layup (mono/doppio strato o fusione), configurazione dei rail, pad EVA, grafiche a tutta coperta e imballaggio. Le forme con stampo dedicato partono da 90–100+ pz per forma; la produzione standard in volume da 90–100+ pz per rotolo da 150 m.',
        },
        {
          q: 'Qual è il MOQ per le tavole SUP all-round?',
          a: "Le partite standard in volume partono da 90–100+ pz per rotolo da 150 m; le produzioni pilota su piattaforme standard da 20–50 pz; la produzione completa con stampo dedicato da 90–100+ pz per forma. Inviamo i campioni in 7–12 giorni e la produzione in serie richiede 25–35 giorni dopo conferma dell’ordine e acconto.",
        },
        {
          q: 'Cosa comprende il pacchetto pronto per la vendita al dettaglio?',
          a: 'Il pacchetto completo: tavola gonfiabile con anima drop-stitch, pagaia regolabile, pompa a mano (o pompa elettrica a doppio stadio), kit di riparazione, zaino da trasporto e cartone stampato. Gli accessori possono essere sostituiti o aggiornati in base al vostro mercato di riferimento.',
        },
        {
          q: 'Quale durezza del deck EVA producete?',
          a: 'I pad di trazione per il deck vanno solitamente da 45–55 Shore C — una durezza medio-bassa, con buon grip sotto i piedi e senza indurirsi al sole. Spessore, scanalature, ritagli e posizionamento del logo vengono specificati progetto per progetto.',
        },
      ],
    },
    {
      slug: 'race',
      navLabel: 'Piattaforme race',
      metaTitle: 'Tavole SUP race personalizzate — Piattaforme racing gonfiabili OEM | iSupfactory',
      metaDescription:
        'Tavole SUP race gonfiabili personalizzate per club, eventi e brand — scafi racing drop-stitch, OEM da 90–100+ pz, produzione certificata CE. Direttamente dalla fabbrica.',
      kicker: 'Serie · Race',
      h1: 'Tavole SUP race personalizzate — scafi racing prodotti per il vostro brand',
      intro: [
        'Le tavole race scambiano la stabilità con la velocità: profili più lunghi e stretti, con forme di prua rifinite e rocker contenuto, progettati per la pagaiata in corsa. Le versioni gonfiabili raggiungono le prestazioni delle tavole rigide in una piattaforma trasportabile.',
        'Produciamo piattaforme race per brand, club e organizzatori di eventi con anime drop-stitch di precisione, layup race e forme di scafo orientate alla velocità — testate statisticamente nella nostra vasca di prova idrodinamica.',
      ],
      faqs: [
        {
          q: 'Quali dimensioni per SUP race potete produrre?',
          a: 'Le piattaforme race tipiche vanno da 12′6″ × 28″ per la classe 12′6 a 14′ × 23″–25″ per i formati Unlimited/Touring race. Larghezza, rocker e profilo di prua vengono calibrati sul gruppo di rider di riferimento e verificati su un campione fisico.',
        },
        {
          q: 'Le tavole race richiedono una costruzione speciale?',
          a: "Sì: le tavole race usano un’anima drop-stitch più leggera e a trama fitta, con pressione più alta (18–20 PSI) e rail rinforzati più rigidi per mantenere la forma dello scafo ad alta velocità. La scelta del layup (mono o doppio strato) bilancia peso e rigidità, e la definiamo insieme a voi progetto per progetto.",
        },
        {
          q: 'I club possono ordinare tavole race per la loro squadra?',
          a: 'Sì. I programmi per club e squadre ordinano da 90–100+ pz (volume) con le grafiche del club e possono mescolare piattaforme race e da allenamento in un unico ordine. Per i volumi combinati si applicano i prezzi da flotta.',
        },
      ],
    },
    {
      slug: 'surf',
      navLabel: 'Piattaforme surf',
      metaTitle: 'Tavole SUP surf personalizzate — Piattaforme surf ibride gonfiabili OEM | iSupfactory',
      metaDescription:
        'Tavole SUP surf gonfiabili personalizzate — profili surf ibridi con rail arrotondati e rocker elevato, prodotte con il vostro marchio da 90–100+ pz a Qingdao, Cina.',
      kicker: 'Serie · Surf',
      h1: 'Tavole SUP surf personalizzate — piattaforme surf ibride per cavalcare le onde',
      intro: [
        "Le tavole SUP surf portano la performance da onda in una piattaforma trasportabile: lunghezze più corte, più rocker, rail arrotondati e forme di prua concave che tengono la linea sulla facciata dell’onda. Le forme surf gonfiabili sono il modo più accessibile per avvicinarsi al surf con la pagaia.",
        'Produciamo piattaforme surf con il vostro marchio, con shaping e dettagli costruttivi specifici per le onde — dal pacchetto completo soft-top al layup performance.',
      ],
      faqs: [
        {
          q: 'Quali taglie sono disponibili per le tavole SUP surf?',
          a: 'Le piattaforme surf più comuni vanno da 8′6″ a 10′6″ con larghezze intorno ai 30″–34″. Lunghezza, rocker e profilo dei rail vengono specificati in base al peso del rider e al tipo di onda, e verificati su un campione fisico prima della produzione.',
        },
        {
          q: 'Le tavole surf gonfiabili sono abbastanza resistenti per il noleggio?',
          a: "Con rail rinforzati e PVC resistente ai raggi UV, le nostre piattaforme surf reggono l’uso da noleggio e da lezione nelle surf school. Le flotte da noleggio combinano tipicamente forme all-round e surf — il prezzo da flotta si applica sul volume misto.",
        },
        {
          q: 'Potete applicare le nostre grafiche di marca sulle tavole surf?',
          a: 'Sì. Grafiche a tutta coperta, artwork del fondo, pad di trazione EVA e imballaggio vengono realizzati dai vostri file o sviluppati dal nostro team di design sulla base degli asset del vostro brand.',
        },
      ],
    },
    {
      slug: 'touring',
      navLabel: 'Piattaforme touring',
      metaTitle: 'Tavole SUP touring personalizzate — Piattaforme per lunghe distanze OEM | iSupfactory',
      metaDescription:
        'Tavole SUP touring gonfiabili per lunghe distanze — scafi a dislocamento da 12′6″+, adatti a escursioni di più giorni, OEM da 90–100+ pz, direttamente dalla fabbrica.',
      kicker: 'Serie · Touring',
      h1: 'Tavole SUP touring personalizzate — costruite per la distanza, il carico e la navigazione',
      intro: [
        "Le tavole touring sono lunghe ed efficienti: prue affusolate per lo scivolamento, volume moderato per la stabilità in acque aperte e lunghezza dello scafo sufficiente per trasportare l’attrezzatura nelle escursioni di più giorni. Sono la piattaforma scelta da chi fa lunghe distanze e dagli outfitter di spedizioni.",
        'Produciamo piattaforme touring con il vostro marchio, con shaping a dislocamento, punti di fissaggio e spazio sul deck per il carico, oltre a sistemi di accessori compatibili con il carbonio (bungee, D-ring, supporti).',
      ],
      faqs: [
        {
          q: 'Quali misure di SUP touring producete?',
          a: 'Le piattaforme touring sono tipicamente da 12′6″ a 14′, con larghezze da 28″–32″. Gli scafi da 14′ più lunghi privilegiano lo scivolamento; le versioni più larghe aggiungono stabilità con il carico. Le specifiche vengono confermate con un campione fisico prima della produzione in serie.',
        },
        {
          q: 'Le tavole touring hanno opzioni di carico e fissaggio?',
          a: 'Sì: reti bungee per il carico, griglie di D-ring, portacanne e guide per accessori vengono specificate progetto per progetto. I pacchetti touring combinano di solito le tavole con borse a zaino e pompe ad alta pressione.',
        },
        {
          q: 'Fornite tavole touring a outfitter e gestori di noleggio?',
          a: 'Sì. Outfitter e gestori possono allestire flotte touring dedicate da 20–50 pz (pilota) con prezzi da flotta, ricambi e un ciclo definito di rinnovo stagionale.',
        },
      ],
    },
    {
      slug: 'yoga',
      navLabel: 'Piattaforme yoga',
      metaTitle: 'Tavole SUP yoga personalizzate — Piattaforme larghe e stabili OEM | iSupfactory',
      metaDescription:
        'Tavole SUP yoga gonfiabili personalizzate — piattaforme extra larghe e stabili con deck morbidi per studi, resort e istruttori. OEM da 90–100+ pz, direttamente dalla fabbrica.',
      kicker: 'Serie · Yoga',
      h1: "Tavole SUP yoga personalizzate — piattaforme extra larghe per la pratica sull’acqua",
      intro: [
        "Le tavole yoga sono costruite per la quiete: larghezza e volume extra per una piattaforma stabile, soft-top morbidi per mani e piedi e profili bassi che tengono la tavola vicino all’acqua. Servono studi, resort e istruttori che propongono programmi di yoga sull’acqua.",
        'Produciamo piattaforme yoga con il vostro marchio, con i profili stabili più larghi, deck EVA premium e opzioni su scala per flotte di studi e resort.',
      ],
      faqs: [
        {
          q: 'Cosa rende una tavola SUP particolarmente adatta allo yoga?',
          a: 'La stabilità prima di tutto: larghezza extra (33″–36″) e volume mantengono la tavola piatta e ferma. Un deck EVA morbido protegge mani, ginocchia e piedi, e un profilo del rail basso riduce le oscillazioni quando si sale e si scende.',
        },
        {
          q: 'I resort possono ordinare tavole yoga come parte di una flotta?',
          a: "Sì. I resort combinano spesso piattaforme yoga con tavole all-round per gli ospiti. I volumi di flotta combinati danno accesso ai prezzi da flotta e la grafica di marca con i colori della struttura si applica all’intero ordine.",
        },
        {
          q: 'Le tavole yoga sono disponibili come pacchetto completo?',
          a: 'Sì: tavola gonfiabile, pagaia, pompa, zaino e kit di riparazione, oppure un kit ridotto per lo stoccaggio in loco (tavola + pagaia + pompa elettrica), a seconda delle esigenze del vostro programma.',
        },
      ],
    },
    {
      slug: 'whitewater',
      navLabel: 'Piattaforme whitewater',
      metaTitle: 'Tavole SUP whitewater personalizzate — Piattaforme per fiumi e rapide OEM | iSupfactory',
      metaDescription:
        'Tavole SUP whitewater gonfiabili personalizzate per fiumi e rapide — scafi corti e maneggevoli con costruzione rinforzata contro gli impatti. OEM da 90–100+ pz a Qingdao, Cina.',
      kicker: 'Serie · Whitewater',
      h1: 'Tavole SUP whitewater personalizzate — scafi da fiume costruiti per gli impatti',
      intro: [
        'Le tavole whitewater sono corte, larghe e robuste: scafi maneggevoli che girano al comando, elevata resistenza agli impatti sui rail e una costruzione robusta per i letti dei fiumi bassi e i punti di calata rocciosi.',
        'Produciamo piattaforme whitewater con il vostro marchio, con cuciture rinforzate, rail anti-impatto e forme specifiche per i fiumi — pensate per scuole, guide e outfitter fluviali che offrono corsi ed escursioni quotidiani.',
      ],
      faqs: [
        {
          q: 'Quale costruzione serve per le tavole whitewater?',
          a: 'Rail rinforzati e cuciture sovrapposte assorbono gli impatti sui rail; PVC spesso e layup a più strati resistono alle forature dei letti dei fiumi. Le costruzioni a doppia camera aggiungono riserva di galleggiamento per i fiumi remoti.',
        },
        {
          q: 'Fornite outfitter fluviali e scuole per guide?',
          a: 'Sì. Outfitter e scuole per guide gestiscono flotte whitewater da 20–50 pz (pilota) con prezzi da flotta, kit di riparazione robusti e pinne/valvole di ricambio — tipici per i programmi fluviali ad alto utilizzo.',
        },
        {
          q: 'Le tavole whitewater possono portare grafiche di marca?',
          a: 'Sì: grafiche a tutta coperta, posizionamento del logo e colori della squadra vengono realizzati dai vostri file. Gli strati di stampa anti-strappo mantengono il branding intatto anche con un uso intenso.',
        },
      ],
    },
    {
      slug: 'fishing',
      navLabel: 'Piattaforme fishing',
      metaTitle: 'Tavole SUP fishing personalizzate — OEM e private label | iSupfactory',
      metaDescription:
        'Tavole SUP fishing gonfiabili personalizzate con stabilità, capacità di carico e supporti per accessori — OEM/private label da 90–100+ pz, direttamente dalla fabbrica di Qingdao, Cina.',
      kicker: 'Serie · Fishing',
      h1: 'Tavole SUP fishing personalizzate — costruite pensando ai pescatori',
      intro: [
        "Le tavole fishing sono piattaforme di lancio stabili: larghe e voluminose per trasportare il pescatore più l’attrezzatura, con sistemi di fissaggio per portacanne, borse termiche e tackle, e una costruzione silenziosa per gli avvicinamenti discreti.",
        'Produciamo piattaforme fishing con il vostro marchio, con funzioni per i pescatori definite progetto per progetto — dal pacchetto per il weekend fino al setup completo da torneo.',
      ],
      faqs: [
        {
          q: 'Quali funzioni per la pesca possono essere specificate?',
          a: "Griglie di fissaggio per portacanne e accessori, guide per l’attrezzatura, cinghie per la borsa termica, punti di ancora e tavole ad alta capacità fino a 500 lbs per pescatore più attrezzatura. I pacchetti possono includere pagaie, pompe e borse con etichetta del marchio.",
        },
        {
          q: 'Qual è il MOQ per gli ordini OEM di SUP fishing?',
          a: "Le partite standard in volume partono da 90–100+ pz per rotolo da 150 m; le produzioni pilota da 20–50 pz su piattaforme standard; la produzione con stampo dedicato da 90–100+ pz per forma. Inviamo i campioni in 7–12 giorni; la produzione richiede 25–35 giorni dopo conferma dell’ordine e acconto.",
        },
        {
          q: 'Producete tavole fishing per noleggio e attività di guida?',
          a: "Sì. Le attività di guida e noleggio gestiscono flotte fishing con prezzi da flotta, ricambi e kit di riparazione calibrati per l’uso quotidiano.",
        },
      ],
    },
    {
      slug: 'kids',
      navLabel: 'Piattaforme kids',
      metaTitle: 'Tavole SUP kids personalizzate — Piattaforme piccole e leggere OEM | iSupfactory',
      metaDescription:
        'Tavole SUP kids gonfiabili personalizzate — piattaforme più corte e leggere con deck adatti ai bambini, progettate per sicurezza e divertimento. OEM da 90–100+ pz, direttamente dalla fabbrica.',
      kicker: 'Serie · Kids',
      h1: 'Tavole SUP kids personalizzate — piccole, leggere e costruite per le prime pagaiate',
      intro: [
        'Le tavole kids sono proporzionate per i rider più giovani: scafi più corti, peso inferiore, larghezze ridotte per corpi piccoli e deck morbidi che perdonano le cadute. Sono il punto di ingresso per brand family, scuole e flotte da noleggio per bambini.',
        'Produciamo piattaforme kids con il vostro marchio in misure standard e junior, con opzioni di pacchetto adatte alle famiglie.',
      ],
      faqs: [
        {
          q: 'In quali misure sono disponibili le tavole SUP kids?',
          a: 'Le piattaforme kids tipiche vanno da 7′ a 9′6″ con larghezze da 26″ a 30″ e pesi intorno ai 7–9 kg (15–20 lbs). La misura viene calibrata su età e peso del rider e verificata su un campione fisico prima della produzione.',
        },
        {
          q: 'Fornite scuole e programmi giovanili?',
          a: 'Sì: le nostre piattaforme kids sono un componente frequente delle flotte per scuole e programmi giovanili, ordinate insieme a pagaie junior e accessori per principianti a condizioni da programma.',
        },
        {
          q: 'Le tavole kids possono portare grafiche di marca e dei personaggi?',
          a: 'Sì. Varianti di colore a tutta coperta, artwork dei personaggi e posizionamento del logo vengono sviluppati dai vostri file o dalle indicazioni del marchio — stampati con gli stessi strati anti-strappo delle tavole per adulti.',
        },
      ],
    },
    {
      slug: 'multi',
      navLabel: 'Piattaforme multi-posto',
      metaTitle: 'Tavole SUP multi-posto personalizzate — Tandem e famiglia OEM | iSupfactory',
      metaDescription:
        'Tavole SUP multi-posto gonfiabili per il tempo libero in famiglia e le lezioni di gruppo — piattaforme tandem, yard e party. OEM da 90–100+ pz, direttamente dalla fabbrica.',
      kicker: 'Serie · Multi-posto',
      h1: 'Tavole SUP multi-posto personalizzate — tandem, piattaforme yard e party',
      intro: [
        'Le tavole multi-posto aprono il SUP ai gruppi: tandem con postazioni di pagaiata aggiuntive, tavole yard per rilassarsi e piattaforme party che trasportano più rider. Sostengono i ricavi del noleggio in resort, spiagge e attività lacustri.',
        'Produciamo piattaforme multi-posto con il vostro marchio, con i profili di stabilità e volume richiesti da ogni scenario di utilizzo.',
      ],
      faqs: [
        {
          q: 'Quali tipi di tavole multi-posto producete?',
          a: 'Tandem (due pagaiatori, circa 13′–14′), tavole yard (piattaforme lounge corte e larghe) e piattaforme party ad alto volume per 3–6 rider. Ogni tipo viene specificato in base a capacità, peso e uso previsto.',
        },
        {
          q: 'Le tavole multi-posto sono un buon investimento per il noleggio?',
          a: 'Sì: consentono tariffe orarie più alte con costi di attrezzatura inferiori per rider e tengono i gruppi uniti invece di dividerli su tavole singole. I gestori di noleggio combinano tipicamente le tavole multi-posto con flotte all-round.',
        },
        {
          q: 'Qual è la capacità di una piattaforma party?',
          a: 'La capacità dipende da misure e volume: le piattaforme yard e party tipiche sopportano 400–700 lbs e trasportano 3–6 rider a seconda di dimensioni e configurazione. Le specifiche vengono confermate su un campione fisico prima della produzione in serie.',
        },
      ],
    },
  ],
  pt: [
    {
      slug: 'all-around',
      navLabel: 'Plataformas all-round',
      metaTitle: 'Pranchas SUP all-round personalizadas — Fabricante OEM de insufláveis | iSupfactory',
      metaDescription:
        'Pranchas SUP insufláveis all-round personalizadas com a tua marca — pranchas largas e estáveis, OEM/ODM desde 90–100+ peças, amostras em 7–12 dias. Diretamente da fábrica em Qingdao, China.',
      kicker: 'Série · All-round',
      h1: 'Pranchas SUP all-round personalizadas — a plataforma de arranque para novas marcas',
      intro: [
        'A prancha all-round é o cavalo de batalha da categoria SUP: suficientemente larga para ser estável para iniciantes, suficientemente ágil para manter interessados os mais experientes e suficientemente leve para a levares para qualquer lado. A maioria das novas marcas e das frotas de aluguer começa aqui.',
        'Produzimos plataformas all-round com a tua marca desde 90–100+ peças por rolo de 150 m (volume), com produções piloto de 20–50 peças. Forma, rails, layup, cores, gráficas de toda a cobertura e embalagem são especificados projeto a projeto.',
      ],
      faqs: [
        {
          q: 'Posso personalizar uma prancha SUP all-round para a minha marca?',
          a: 'Sim. Cada plataforma all-round é uma base de produção: defines dimensões (normalmente de 10′6″ a 11′6″), largura, espessura, layup (mono/dupla camada ou fusão), configuração dos rails, pad EVA, gráficas de toda a cobertura e embalagem. As formas com molde dedicado começam em 90–100+ peças por forma; a produção padrão em volume desde 90–100+ peças por rolo de 150 m.',
        },
        {
          q: 'Qual é o MOQ para pranchas SUP all-round?',
          a: 'As partidas padrão em volume começam em 90–100+ peças por rolo de 150 m; as produções piloto em plataformas padrão desde 20–50 peças; a produção completa com molde dedicado desde 90–100+ peças por forma. Enviamos as amostras em 7–12 dias e a produção em série requer 25–35 dias após confirmação do pedido e do depósito.',
        },
        {
          q: 'O que inclui o pacote pronto para a venda a retalho?',
          a: 'O pacote completo: prancha insuflável com alma drop-stitch, pá ajustável, bomba manual (ou bomba elétrica de duplo estágio), kit de reparação, mochila de transporte e cartão impresso. Os acessórios podem ser substituídos ou atualizados em função do teu mercado-alvo.',
        },
        {
          q: 'Que dureza de deck EVA produzem?',
          a: 'Os pads de tração para o deck vão normalmente de 45–55 Shore C — uma dureza médio-baixa, com boa aderência sob os pés e sem endurecer ao sol. Espessura, ranhuras, recortes e posicionamento do logótipo são especificados projeto a projeto.',
        },
      ],
    },
    {
      slug: 'race',
      navLabel: 'Plataformas race',
      metaTitle: 'Pranchas SUP race personalizadas — Plataformas racing insufláveis OEM | iSupfactory',
      metaDescription:
        'Pranchas SUP race insufláveis personalizadas para clubes, eventos e marcas — cascos racing drop-stitch, OEM desde 90–100+ peças, produção certificada CE. Diretamente da fábrica.',
      kicker: 'Série · Race',
      h1: 'Pranchas SUP race personalizadas — cascos racing produzidos para a tua marca',
      intro: [
        'As pranchas race trocam a estabilidade pela velocidade: perfis mais longos e estreitos, com formas de proa afinadas e rocker contido, desenhados para a remada em corrida. As versões insufláveis alcançam as prestações das pranchas rígidas numa plataforma transportável.',
        'Produzimos plataformas race para marcas, clubes e organizadores de eventos com almas drop-stitch de precisão, layup race e formas de casco orientadas para a velocidade — testadas estatisticamente no nosso tanque de teste hidrodinâmico.',
      ],
      faqs: [
        {
          q: 'Que dimensões para SUP race podem produzir?',
          a: 'As plataformas race típicas vão de 12′6″ × 28″ para a classe 12′6 a 14′ × 23″–25″ para os formatos Unlimited/Touring race. Largura, rocker e perfil de proa são calibrados para o grupo de praticantes-alvo e verificados numa amostra física.',
        },
        {
          q: 'As pranchas race requerem uma construção especial?',
          a: 'Sim: as pranchas race usam uma alma drop-stitch mais leve e de trama densa, com pressão mais alta (18–20 PSI) e rails reforçados mais rígidos para manter a forma do casco a alta velocidade. A escolha do layup (mono ou dupla camada) equilibra peso e rigidez, e definemo-la contigo projeto a projeto.',
        },
        {
          q: 'Os clubes podem encomendar pranchas race para a sua equipa?',
          a: 'Sim. Os programas para clubes e equipas encomendam desde 90–100+ peças (volume) com as gráficas do clube e podem misturar plataformas race e de treino num único pedido. Aplicam-se preços de frota para volumes combinados.',
        },
      ],
    },
    {
      slug: 'surf',
      navLabel: 'Plataformas surf',
      metaTitle: 'Pranchas SUP surf personalizadas — Plataformas surf híbridas insufláveis OEM | iSupfactory',
      metaDescription:
        'Pranchas SUP surf insufláveis personalizadas — perfis surf híbridos com rails arredondados e rocker elevado, produzidas com a tua marca desde 90–100+ peças em Qingdao, China.',
      kicker: 'Série · Surf',
      h1: 'Pranchas SUP surf personalizadas — plataformas surf híbridas para cavalgar as ondas',
      intro: [
        'As pranchas SUP surf trazem a performance de onda para uma plataforma transportável: comprimentos mais curtos, mais rocker, rails arredondados e formas de proa côncavas que seguram a linha na face da onda. As formas surf insufláveis são a forma mais acessível de entrar no surf com a pá.',
        'Produzimos plataformas surf com a tua marca, com shaping e detalhes construtivos específicos para ondas — do pacote completo soft-top ao layup performance.',
      ],
      faqs: [
        {
          q: 'Que tamanhos estão disponíveis para pranchas SUP surf?',
          a: 'As plataformas surf mais comuns vão de 8′6″ a 10′6″ com larguras à volta dos 30″–34″. Comprimento, rocker e perfil dos rails são especificados em função do peso do praticante e do tipo de onda, e verificados numa amostra física antes da produção.',
        },
        {
          q: 'As pranchas surf insufláveis são suficientemente resistentes para o aluguer?',
          a: 'Com rails reforçados e PVC resistente aos raios UV, as nossas plataformas surf aguentam o uso de aluguer e de aulas nas surf schools. As frotas de aluguer combinam tipicamente formas all-round e surf — o preço de frota aplica-se ao volume misto.',
        },
        {
          q: 'Podem aplicar as nossas gráficas de marca nas pranchas surf?',
          a: 'Sim. Gráficas de toda a cobertura, arte do fundo, pads de tração EVA e embalagem são realizados a partir dos teus ficheiros ou desenvolvidos pela nossa equipa de design com base nos ativos da tua marca.',
        },
      ],
    },
    {
      slug: 'touring',
      navLabel: 'Plataformas touring',
      metaTitle: 'Pranchas SUP touring personalizadas — Plataformas de longa distância OEM | iSupfactory',
      metaDescription:
        'Pranchas SUP touring insufláveis para longas distâncias — cascos de deslocamento desde 12′6″+, adequados a expedições de vários dias, OEM desde 90–100+ peças, diretamente da fábrica.',
      kicker: 'Série · Touring',
      h1: 'Pranchas SUP touring personalizadas — feitas para a distância, a carga e a navegação',
      intro: [
        'As pranchas touring são longas e eficientes: proas afiladas para deslizar, volume moderado para estabilidade em águas abertas e comprimento de casco suficiente para transportar o equipamento em expedições de vários dias. É a plataforma escolhida por quem faz longas distâncias e pelos outfitters de expedições.',
        'Produzimos plataformas touring com a tua marca, com shaping de deslocamento, pontos de fixação e espaço no deck para a carga, além de sistemas de acessórios compatíveis com carga (bungees, anéis em D, suportes).',
      ],
      faqs: [
        {
          q: 'Que medidas de SUP touring produzem?',
          a: 'As plataformas touring são tipicamente de 12′6″ a 14′, com larguras de 28″–32″. Os cascos de 14′ mais longos privilegiam o deslize; as versões mais largas acrescentam estabilidade com carga. As especificações são confirmadas com uma amostra física antes da produção em série.',
        },
        {
          q: 'As pranchas touring têm opções de carga e fixação?',
          a: 'Sim: redes bungee para a carga, grelhas de anéis em D, suportes para canas de pesca e guias para acessórios são especificadas projeto a projeto. Os pacotes touring combinam normalmente as pranchas com mochilas e bombas de alta pressão.',
        },
        {
          q: 'Fornecem pranchas touring a outfitters e gestores de aluguer?',
          a: 'Sim. Outfitters e gestores podem montar frotas touring dedicadas de 20–50 peças (piloto) com preços de frota, peças sobresselentes e um ciclo definido de renovação sazonal.',
        },
      ],
    },
    {
      slug: 'yoga',
      navLabel: 'Plataformas yoga',
      metaTitle: 'Pranchas SUP yoga personalizadas — Plataformas largas e estáveis OEM | iSupfactory',
      metaDescription:
        'Pranchas SUP yoga insufláveis personalizadas — plataformas extra largas e estáveis com decks macios para estúdios, resorts e instrutores. OEM desde 90–100+ peças, diretamente da fábrica.',
      kicker: 'Série · Yoga',
      h1: 'Pranchas SUP yoga personalizadas — plataformas extra largas para a prática na água',
      intro: [
        'As pranchas yoga são feitas para a calma: largura e volume extra para uma plataforma estável, soft-tops macios para mãos e pés e perfis baixos que mantêm a prancha junto à água. Servem estúdios, resorts e instrutores que propõem programas de yoga na água.',
        'Produzimos plataformas yoga com a tua marca, com os perfis estáveis mais largos, decks EVA premium e opções à escala para frotas de estúdios e resorts.',
      ],
      faqs: [
        {
          q: 'O que torna uma prancha SUP particularmente adequada ao yoga?',
          a: 'A estabilidade antes de tudo: largura extra (33″–36″) e volume mantêm a prancha plana e firme. Um deck EVA macio protege mãos, joelhos e pés, e um perfil de rail baixo reduz as oscilações ao subir e descer.',
        },
        {
          q: 'Os resorts podem encomendar pranchas yoga como parte de uma frota?',
          a: 'Sim. Os resorts combinam frequentemente plataformas yoga com pranchas all-round para os hóspedes. Os volumes de frota combinados dão acesso a preços de frota e a gráfica de marca com as cores da unidade aplica-se a todo o pedido.',
        },
        {
          q: 'As pranchas yoga estão disponíveis como pacote completo?',
          a: 'Sim: prancha insuflável, pá, bomba, mochila e kit de reparação, ou um kit reduzido para arrumação no local (prancha + pá + bomba elétrica), consoante as necessidades do teu programa.',
        },
      ],
    },
    {
      slug: 'whitewater',
      navLabel: 'Plataformas whitewater',
      metaTitle: 'Pranchas SUP whitewater personalizadas — Plataformas para rios e corredeiras OEM | iSupfactory',
      metaDescription:
        'Pranchas SUP whitewater insufláveis personalizadas para rios e corredeiras — cascos curtos e manobráveis com construção reforçada contra impactos. OEM desde 90–100+ peças em Qingdao, China.',
      kicker: 'Série · Whitewater',
      h1: 'Pranchas SUP whitewater personalizadas — cascos de rio construídos para impactos',
      intro: [
        'As pranchas whitewater são curtas, largas e robustas: cascos manobráveis que viram ao comando, elevada resistência a impactos nos rails e uma construção robusta para leitos de rio baixos e pontos de descida rochosos.',
        'Produzimos plataformas whitewater com a tua marca, com costuras reforçadas, rails anti-impacto e formas específicas para rios — concebidas para escolas, guias e outfitters fluviais que oferecem cursos e expedições diários.',
      ],
      faqs: [
        {
          q: 'Que construção é necessária para as pranchas whitewater?',
          a: 'Rails reforçados e costuras sobrepostas absorvem os impactos nos rails; PVC grosso e layup de várias camadas resistem às perfurações dos leitos de rio. As construções de dupla câmara acrescentam reserva de flutuabilidade para rios remotos.',
        },
        {
          q: 'Fornecem outfitters fluviais e escolas de guias?',
          a: 'Sim. Outfitters e escolas de guias gerem frotas whitewater de 20–50 peças (piloto) com preços de frota, kits de reparação robustos e aletas/válvulas de substituição — típicos para programas fluviais de elevado uso.',
        },
        {
          q: 'As pranchas whitewater podem levar gráficas de marca?',
          a: 'Sim: gráficas de toda a cobertura, posicionamento do logótipo e cores de equipa são realizados a partir dos teus ficheiros. As camadas de impressão anti-rotura mantêm a marca intacta mesmo com uso intenso.',
        },
      ],
    },
    {
      slug: 'fishing',
      navLabel: 'Plataformas fishing',
      metaTitle: 'Pranchas SUP fishing personalizadas — OEM e marca própria | iSupfactory',
      metaDescription:
        'Pranchas SUP fishing insufláveis personalizadas com estabilidade, capacidade de carga e suportes para acessórios — OEM/marca própria desde 90–100+ peças, diretamente da fábrica em Qingdao, China.',
      kicker: 'Série · Fishing',
      h1: 'Pranchas SUP fishing personalizadas — construídas a pensar nos pescadores',
      intro: [
        'As pranchas fishing são plataformas de lançamento estáveis: largas e volumosas para transportar o pescador mais o equipamento, com sistemas de fixação para suportes de canas, bolsas térmicas e tackle, e uma construção silenciosa para aproximações discretas.',
        'Produzimos plataformas fishing com a tua marca, com funcionalidades para pescadores definidas projeto a projeto — do pacote de fim de semana ao setup completo de torneio.',
      ],
      faqs: [
        {
          q: 'Que funcionalidades de pesca podem ser especificadas?',
          a: 'Grelhas de fixação para suportes de canas e acessórios, guias para o equipamento, correias para a bolsa térmica, pontos de ancoragem e pranchas de alta capacidade até 500 lbs por pescador mais equipamento. Os pacotes podem incluir pás, bombas e bolsas com etiqueta da marca.',
        },
        {
          q: 'Qual é o MOQ para pedidos OEM de SUP fishing?',
          a: 'As partidas padrão em volume começam em 90–100+ peças por rolo de 150 m; as produções piloto de 20–50 peças em plataformas padrão; a produção com molde dedicado desde 90–100+ peças por forma. Enviamos as amostras em 7–12 dias; a produção requer 25–35 dias após confirmação do pedido e do depósito.',
        },
        {
          q: 'Produzem pranchas fishing para aluguer e atividades com guia?',
          a: 'Sim. As atividades com guia e os alugueres gerem frotas fishing com preços de frota, peças sobresselentes e kits de reparação calibrados para o uso diário.',
        },
      ],
    },
    {
      slug: 'kids',
      navLabel: 'Plataformas kids',
      metaTitle: 'Pranchas SUP kids personalizadas — Plataformas pequenas e leves OEM | iSupfactory',
      metaDescription:
        'Pranchas SUP kids insufláveis personalizadas — plataformas mais curtas e leves com decks adequados a crianças, concebidas para segurança e diversão. OEM desde 90–100+ peças, diretamente da fábrica.',
      kicker: 'Série · Kids',
      h1: 'Pranchas SUP kids personalizadas — pequenas, leves e feitas para as primeiras remadas',
      intro: [
        'As pranchas kids são proporcionadas para os praticantes mais jovens: cascos mais curtos, peso inferior, larguras reduzidas para corpos pequenos e decks macios que perdoam as quedas. São o ponto de entrada para marcas familiares, escolas e frotas de aluguer para crianças.',
        'Produzimos plataformas kids com a tua marca em medidas padrão e junior, com opções de pacote adequadas a famílias.',
      ],
      faqs: [
        {
          q: 'Em que medidas estão disponíveis as pranchas SUP kids?',
          a: 'As plataformas kids típicas vão de 7′ a 9′6″ com larguras de 26″ a 30″ e pesos à volta dos 7–9 kg (15–20 lbs). A medida é calibrada para a idade e o peso do praticante e verificada numa amostra física antes da produção.',
        },
        {
          q: 'Fornecem escolas e programas juvenis?',
          a: 'Sim: as nossas plataformas kids são um componente frequente das frotas para escolas e programas juvenis, encomendadas juntamente com pás júnior e acessórios para iniciantes em condições de programa.',
        },
        {
          q: 'As pranchas kids podem levar gráficas de marca e de personagens?',
          a: 'Sim. Variantes de cor de toda a cobertura, arte de personagens e posicionamento do logótipo são desenvolvidos a partir dos teus ficheiros ou das indicações da marca — impressos com as mesmas camadas anti-rotura das pranchas para adultos.',
        },
      ],
    },
    {
      slug: 'multi',
      navLabel: 'Plataformas multi-lugar',
      metaTitle: 'Pranchas SUP multi-lugar personalizadas — Tandem e família OEM | iSupfactory',
      metaDescription:
        'Pranchas SUP multi-lugar insufláveis para o lazer em família e as aulas de grupo — plataformas tandem, yard e party. OEM desde 90–100+ peças, diretamente da fábrica.',
      kicker: 'Série · Multi-lugar',
      h1: 'Pranchas SUP multi-lugar personalizadas — tandem, plataformas yard e party',
      intro: [
        'As pranchas multi-lugar abrem o SUP aos grupos: tandem com postos de remada adicionais, pranchas yard para relaxar e plataformas party que transportam vários praticantes. Sustentam as receitas do aluguer em resorts, praias e atividades lacustres.',
        'Produzimos plataformas multi-lugar com a tua marca, com os perfis de estabilidade e volume exigidos por cada cenário de utilização.',
      ],
      faqs: [
        {
          q: 'Que tipos de pranchas multi-lugar produzem?',
          a: 'Tandem (dois remadores, cerca de 13′–14′), pranchas yard (plataformas lounge curtas e largas) e plataformas party de alto volume para 3–6 praticantes. Cada tipo é especificado em função da capacidade, do peso e da utilização prevista.',
        },
        {
          q: 'As pranchas multi-lugar são um bom investimento para o aluguer?',
          a: 'Sim: permitem tarifas horárias mais altas com custos de equipamento inferiores por praticante e mantêm os grupos unidos em vez de os dividir por pranchas individuais. Os gestores de aluguer combinam tipicamente pranchas multi-lugar com frotas all-round.',
        },
        {
          q: 'Qual é a capacidade de uma plataforma party?',
          a: 'A capacidade depende das medidas e do volume: as plataformas yard e party típicas suportam 400–700 lbs e transportam 3–6 praticantes consoante dimensões e configuração. As especificações são confirmadas numa amostra física antes da produção em série.',
        },
      ],
    },
  ],
  nl: [
    {
      slug: 'all-around',
      navLabel: 'All-round platforms',
      metaTitle: 'Op maat gemaakte all-round SUP-planken — OEM-fabrikant van opblaasbare SUPs | iSupfactory',
      metaDescription:
        'Op maat gemaakte opblaasbare all-round SUP-planken onder jouw merk — brede en stabiele planken, OEM/ODM vanaf 90–100+ stuks, monsters in 7–12 dagen. Rechtstreeks uit de fabriek in Qingdao, China.',
      kicker: 'Serie · All-round',
      h1: 'Op maat gemaakte all-round SUP-planken — het startplatform voor nieuwe merken',
      intro: [
        "De all-round plank is het werkpaard van de SUP-categorie: breed genoeg om stabiel te zijn voor beginners, wendbaar genoeg om ervaren paddelaars bij de les te houden en licht genoeg om overal mee naartoe te nemen. De meeste nieuwe merken en verhuurvloten beginnen hier.",
        'We produceren all-round platforms onder jouw merk vanaf 90–100+ stuks per rol van 150 m (volume), met proefproducties van 20–50 stuks. Vorm, rails, layup, kleuren, opdruk over het volledige deck en verpakking worden project per project gespecificeerd.',
      ],
      faqs: [
        {
          q: 'Kan ik een all-round SUP-plank voor mijn merk aanpassen?',
          a: 'Ja. Elk all-round platform is een productiebasis: jij bepaalt afmetingen (meestal van 10′6″ tot 11′6″), breedte, dikte, layup (enkel/dubbellaags of fusie), railconfiguratie, EVA-pad, opdruk over het volledige deck en verpakking. Vormen met een eigen mal starten vanaf 90–100+ stuks per vorm; standaard volumeproductie vanaf 90–100+ stuks per rol van 150 m.',
        },
        {
          q: 'Wat is de MOQ voor all-round SUP-planken?',
          a: 'Standaard volumepartijen starten vanaf 90–100+ stuks per rol van 150 m; proefproducties op standaard platforms vanaf 20–50 stuks; volledige productie met eigen mal vanaf 90–100+ stuks per vorm. We versturen monsters in 7–12 dagen en de serieproductie vereist 25–35 dagen na bevestiging van de order en aanbetaling.',
        },
        {
          q: 'Wat omvat het winkelklaar pakket?',
          a: 'Het complete pakket: opblaasbare plank met drop-stitch kern, verstelbare peddel, handpomp (of elektrische tweestadiumpomp), reparatieset, transportruksak en bedrukte doos. De accessoires kunnen worden vervangen of geüpgraded op basis van jouw doelmarkt.',
        },
        {
          q: 'Welke EVA-deckhardheid produceren jullie?',
          a: 'De antislip pads voor het deck gaan meestal van 45–55 Shore C — een gemiddeld-lage hardheid, met goede grip onder de voeten en zonder hard te worden in de zon. Dikte, groeven, uitsnijdingen en logopositie worden project per project gespecificeerd.',
        },
      ],
    },
    {
      slug: 'race',
      navLabel: 'Raceplatforms',
      metaTitle: 'Op maat gemaakte race SUP-planken — Opblaasbare racing platforms OEM | iSupfactory',
      metaDescription:
        'Op maat gemaakte opblaasbare race SUP-planken voor clubs, evenementen en merken — drop-stitch race rompen, OEM vanaf 90–100+ stuks, CE-gecertificeerde productie. Rechtstreeks uit de fabriek.',
      kicker: 'Serie · Race',
      h1: 'Op maat gemaakte race SUP-planken — race rompen geproduceerd voor jouw merk',
      intro: [
        'Raceplanken ruilen stabiliteit in voor snelheid: langere en smallere profielen, met gestroomlijnde boegvormen en beperkte rocker, ontworpen voor het racepeddelwerk. De opblaasbare versies halen de prestaties van harde planken in een transportbaar platform.',
        'We produceren race platforms voor merken, clubs en evenementorganisatoren met nauwkeurige drop-stitch kernen, race layup en op snelheid gerichte rompvormen — statistisch getest in ons hydrodynamische testbassin.',
      ],
      faqs: [
        {
          q: 'Welke afmetingen voor race SUP-planken kunnen jullie produceren?',
          a: 'Typische race platforms gaan van 12′6″ × 28″ voor de 12′6-klasse tot 14′ × 23″–25″ voor de Unlimited/Touring race formats. Breedte, rocker en boegprofiel worden gekalibreerd op de doelgroep van rijsers en geverifieerd op een fysiek monster.',
        },
        {
          q: 'Vereisen raceplanken een speciale constructie?',
          a: 'Ja: raceplanken gebruiken een lichtere drop-stitch kern met dicht weefsel, een hogere druk (18–20 PSI) en verstijfdere, stijvere rails om de rompvorm op hoge snelheid te behouden. De keuze van de layup (enkel- of dubbellaags) balanceert gewicht en stijfheid, en die bepalen we samen met jou project per project.',
        },
        {
          q: 'Kunnen clubs raceplanken voor hun team bestellen?',
          a: 'Ja. Programma\'s voor clubs en teams bestellen vanaf 90–100+ stuks (volume) met de clubopdruk en kunnen race- en trainingsplatforms in één order mengen. Voor gecombineerde volumes gelden vlootprijzen.',
        },
      ],
    },
    {
      slug: 'surf',
      navLabel: 'Surfplatforms',
      metaTitle: 'Op maat gemaakte surf SUP-planken — Hybride opblaasbare surf platforms OEM | iSupfactory',
      metaDescription:
        'Op maat gemaakte opblaasbare surf SUP-planken — hybride surfprofielen met afgeronde rails en verhoogde rocker, geproduceerd onder jouw merk vanaf 90–100+ stuks in Qingdao, China.',
      kicker: 'Serie · Surf',
      h1: 'Op maat gemaakte surf SUP-planken — hybride surf platforms om op de golven te rijden',
      intro: [
        'Surf SUP-planken brengen golfperformance naar een transportbaar platform: kortere lengtes, meer rocker, afgeronde rails en concave boegvormen die de lijn op de golfwand vasthouden. Opblaasbare surfvormen zijn de meest toegankelijke manier om met de peddel te gaan surfen.',
        'We produceren surf platforms onder jouw merk, met shaping en constructiedetails specifiek voor golven — van het complete soft-top pakket tot performance layup.',
      ],
      faqs: [
        {
          q: 'Welke maten zijn beschikbaar voor surf SUP-planken?',
          a: 'De meest voorkomende surf platforms gaan van 8′6″ tot 10′6″ met breedtes rond de 30″–34″. Lengte, rocker en railprofiel worden gespecificeerd op basis van het gewicht van de rijsers en het golftype, en geverifieerd op een fysiek monster vóór de productie.',
        },
        {
          q: 'Zijn opblaasbare surfplanken sterk genoeg voor verhuur?',
          a: 'Met versterkte rails en UV-bestendig PVC houden onze surf platforms stand bij verhuur en lessen in surfschools. Verhuurvloten combineren doorgaans all-round en surfvormen — de vlootprijs geldt voor het gemengde volume.',
        },
        {
          q: 'Kunnen jullie onze merkgraphics op surfplanken aanbrengen?',
          a: 'Ja. Opdruk over het volledige deck, bodemdesign, EVA antislip pads en verpakking worden gemaakt op basis van jouw bestanden of ontwikkeld door ons designteam aan de hand van de assets van jouw merk.',
        },
      ],
    },
    {
      slug: 'touring',
      navLabel: 'Touringplatforms',
      metaTitle: 'Op maat gemaakte touring SUP-planken — Langeafstandsplatforms OEM | iSupfactory',
      metaDescription:
        'Opblaasbare touring SUP-planken voor lange afstanden — displacement rompen vanaf 12′6″+, geschikt voor meerdaagse expedities, OEM vanaf 90–100+ stuks, rechtstreeks uit de fabriek.',
      kicker: 'Serie · Touring',
      h1: 'Op maat gemaakte touring SUP-planken — gemaakt voor afstand, lading en navigatie',
      intro: [
        'Touringplanken zijn lang en efficiënt: slanke boegen om te glijden, gematigd volume voor stabiliteit in open water en genoeg romplengte om uitrusting mee te nemen op meerdaagse expedities. Het is het platform van keuze voor langeafstandspaddelaars en expeditie-outfitters.',
        'We produceren touring platforms onder jouw merk, met displacement shaping, bevestigingspunten en deckruimte voor de lading, plus accessoiresystemen die compatibel zijn met de lading (bungees, D-ringen, houders).',
      ],
      faqs: [
        {
          q: 'Welke touringmaten produceren jullie?',
          a: 'Touring platforms zijn typisch van 12′6″ tot 14′, met breedtes van 28″–32″. De langere 14′-rompen geven voorrang aan glijden; de bredere versies voegen stabiliteit toe met lading. De specificaties worden bevestigd met een fysiek monster vóór de serieproductie.',
        },
        {
          q: 'Hebben touringplanken laad- en bevestigingsopties?',
          a: 'Ja: bungeenetten voor de lading, roosters met D-ringen, hengelhouders en accessoiregeleiders worden project per project gespecificeerd. Touringpakketten combineren gewoonlijk de planken met ruksakken en hogedrukpompen.',
        },
        {
          q: 'Leveren jullie touringplanken aan outfitters en verhuurbeheerders?',
          a: 'Ja. Outfitters en beheerders kunnen dedicated touringvloten van 20–50 stuks (proef) opzetten met vlootprijzen, reserveonderdelen en een vast vervangingsschema per seizoen.',
        },
      ],
    },
    {
      slug: 'yoga',
      navLabel: 'Yogaplatforms',
      metaTitle: 'Op maat gemaakte yoga SUP-planken — Brede en stabiele platforms OEM | iSupfactory',
      metaDescription:
        'Op maat gemaakte opblaasbare yoga SUP-planken — extra brede en stabiele platforms met zachte decks voor studio\'s, resorts en instructeurs. OEM vanaf 90–100+ stuks, rechtstreeks uit de fabriek.',
      kicker: 'Serie · Yoga',
      h1: 'Op maat gemaakte yoga SUP-planken — extra brede platforms voor de beoefening op het water',
      intro: [
        'Yogaplanken zijn gemaakt voor rust: extra breedte en volume voor een stabiel platform, zachte soft-tops voor handen en voeten en lage profielen die de plank dicht bij het water houden. Ze dienen studio\'s, resorts en instructeurs die yoga-programma\'s op het water aanbieden.',
        'We produceren yoga platforms onder jouw merk, met de breedste stabiele profielen, premium EVA-decks en opschalingsopties voor studio- en resortvloten.',
      ],
      faqs: [
        {
          q: 'Wat maakt een SUP-plank bijzonder geschikt voor yoga?',
          a: 'Stabiliteit staat voorop: extra breedte (33″–36″) en volume houden de plank vlak en stabiel. Een zacht EVA-deck beschermt handen, knieën en voeten, en een laag railprofiel vermindert het slingeren bij het op- en afstappen.',
        },
        {
          q: 'Kunnen resorts yogaplanken als onderdeel van een vloot bestellen?',
          a: 'Ja. Resorts combineren vaak yoga platforms met all-round planken voor de gasten. Gecombineerde vlootvolumes geven toegang tot vlootprijzen en de merkgraphics met de kleuren van de accommodatie gelden voor de hele order.',
        },
        {
          q: 'Zijn yogaplanken beschikbaar als compleet pakket?',
          a: 'Ja: opblaasbare plank, peddel, pomp, ruksak en reparatieset, of een beknopte kit voor opslag ter plaatse (plank + peddel + elektrische pomp), afhankelijk van de behoeften van jouw programma.',
        },
      ],
    },
    {
      slug: 'whitewater',
      navLabel: 'Whitewaterplatforms',
      metaTitle: 'Op maat gemaakte whitewater SUP-planken — Platforms voor rivieren en stroomversnellingen OEM | iSupfactory',
      metaDescription:
        'Op maat gemaakte opblaasbare whitewater SUP-planken voor rivieren en stroomversnellingen — korte en wendbare rompen met impactbestendige constructie. OEM vanaf 90–100+ stuks in Qingdao, China.',
      kicker: 'Serie · Whitewater',
      h1: 'Op maat gemaakte whitewater SUP-planken — rivierrompen gebouwd voor impacts',
      intro: [
        'Whitewaterplanken zijn kort, breed en robuust: wendbare rompen die op commando draaien, grote impactbestendigheid op de rails en een stevige constructie voor lage rivierbeddingen en rotsachtige afvaarten.',
        'We produceren whitewater platforms onder jouw merk, met versterkte naden, impactbestendige rails en rivierspecifieke vormen — ontworpen voor scholen, gidsen en rivier-outfitters die dagelijkse cursussen en expedities aanbieden.',
      ],
      faqs: [
        {
          q: 'Welke constructie is nodig voor whitewaterplanken?',
          a: 'Versterkte rails en overlappende naden absorberen impacts op de rails; dik PVC en meerlaagse layup weerstaan doorboringen op rivierbeddingen. Constructies met dubbele luchtkamers voegen reserve-drijfvermogen toe voor afgelegen rivieren.',
        },
        {
          q: 'Leveren jullie aan rivier-outfitters en gidsscholen?',
          a: 'Ja. Outfitters en gidsscholen beheren whitewatervloten van 20–50 stuks (proef) met vlootprijzen, stevige reparatiesets en reservevinnen/-kleppen — typisch voor rivierprogramma\'s met intensief gebruik.',
        },
        {
          q: 'Kunnen whitewaterplanken merkgraphics dragen?',
          a: 'Ja: opdruk over het volledige deck, logopositie en teamkleuren worden gemaakt op basis van jouw bestanden. De scheurbestendige druklaag houdt de branding intact, zelfs bij intensief gebruik.',
        },
      ],
    },
    {
      slug: 'fishing',
      navLabel: 'Fishingplatforms',
      metaTitle: 'Op maat gemaakte fishing SUP-planken — OEM en privaat label | iSupfactory',
      metaDescription:
        'Op maat gemaakte opblaasbare fishing SUP-planken met stabiliteit, laadvermogen en accessoirehouders — OEM/privaat label vanaf 90–100+ stuks, rechtstreeks uit de fabriek in Qingdao, China.',
      kicker: 'Serie · Fishing',
      h1: 'Op maat gemaakte fishing SUP-planken — gebouwd met vissers in gedachten',
      intro: [
        'Fishingplanken zijn stabiele lanceerplatforms: breed en volumineus om de visser plus uitrusting te dragen, met bevestigingssystemen voor hengelhouders, koelboxen en tackle, en een stille constructie voor een discrete nadering.',
        'We produceren fishing platforms onder jouw merk, met visspecifieke functies die project per project worden bepaald — van het weekendpakket tot een complete toernooisetup.',
      ],
      faqs: [
        {
          q: 'Welke visfuncties kunnen worden gespecificeerd?',
          a: 'Bevestigingsroosters voor hengelhouders en accessoires, geleiders voor de uitrusting, riemen voor de koelbox, ankerpunten en planken met hoog draagvermogen tot 500 lbs per visser plus uitrusting. De pakketten kunnen peddels, pompen en tassen met merklabel omvatten.',
        },
        {
          q: 'Wat is de MOQ voor OEM-orders van fishing SUP-planken?',
          a: 'Standaard volumepartijen starten vanaf 90–100+ stuks per rol van 150 m; proefproducties van 20–50 stuks op standaard platforms; productie met eigen mal vanaf 90–100+ stuks per vorm. We versturen monsters in 7–12 dagen; de productie vereist 25–35 dagen na bevestiging van de order en aanbetaling.',
        },
        {
          q: 'Produceren jullie fishingplanken voor verhuur en begeleide activiteiten?',
          a: 'Ja. Begeleide activiteiten en verhuur beheren fishingvloten met vlootprijzen, reserveonderdelen en reparatiesets afgestemd op dagelijks gebruik.',
        },
      ],
    },
    {
      slug: 'kids',
      navLabel: 'Kidsplatforms',
      metaTitle: 'Op maat gemaakte kids SUP-planken — Kleine en lichte platforms OEM | iSupfactory',
      metaDescription:
        'Op maat gemaakte opblaasbare kids SUP-planken — kortere en lichtere platforms met decks geschikt voor kinderen, ontworpen voor veiligheid en plezier. OEM vanaf 90–100+ stuks, rechtstreeks uit de fabriek.',
      kicker: 'Serie · Kids',
      h1: 'Op maat gemaakte kids SUP-planken — klein, licht en gemaakt voor de eerste peddelslagen',
      intro: [
        'Kidsplanken zijn geproportioneerd voor de jongste paddelaars: kortere rompen, lager gewicht, smallere breedtes voor kleine lichamen en zachte decks die vallen vergeven. Ze zijn het instapunt voor familiemerken, scholen en verhuurvloten voor kinderen.',
        'We produceren kids platforms onder jouw merk in standaard- en juniormaten, met pakketopties die geschikt zijn voor gezinnen.',
      ],
      faqs: [
        {
          q: 'In welke maten zijn kids SUP-planken beschikbaar?',
          a: 'Typische kids platforms gaan van 7′ tot 9′6″ met breedtes van 26″ tot 30″ en gewichten rond de 7–9 kg (15–20 lbs). De maat wordt gekalibreerd op leeftijd en gewicht van de rijsers en geverifieerd op een fysiek monster vóór de productie.',
        },
        {
          q: 'Leveren jullie aan scholen en jeugdprogramma\'s?',
          a: 'Ja: onze kids platforms zijn een veelvoorkomend onderdeel van vloten voor scholen en jeugdprogramma\'s, besteld samen met juniorpeddels en startersaccessoires onder programmavoorwaarden.',
        },
        {
          q: 'Kunnen kidsplanken merk- en personageopdruk dragen?',
          a: 'Ja. Kleurvarianten over het volledige deck, personage-opdruk en logopositie worden ontwikkeld aan de hand van jouw bestanden of merkrichtlijnen — bedrukt met dezelfde scheurbestendige lagen als de planken voor volwassenen.',
        },
      ],
    },
    {
      slug: 'multi',
      navLabel: 'Multi-persoonsplatforms',
      metaTitle: 'Op maat gemaakte multi-persoons SUP-planken — Tandem en familie OEM | iSupfactory',
      metaDescription:
        'Opblaasbare multi-persoons SUP-planken voor familieplezier en groepslessen — tandem-, yard- en partyplatforms. OEM vanaf 90–100+ stuks, rechtstreeks uit de fabriek.',
      kicker: 'Serie · Multi-persoons',
      h1: 'Op maat gemaakte multi-persoons SUP-planken — tandem-, yard- en partyplatforms',
      intro: [
        'Multi-persoonsplanken openen SUP voor groepen: tandems met extra peddelposities, yardplanken om te relaxen en partyplatforms die meerdere paddelaars vervoeren. Ze ondersteunen de verhuurinkomsten in resorts, op stranden en bij activiteiten op meren.',
        'We produceren multi-persoons platforms onder jouw merk, met de stabiliteits- en volumeprofielen die elk gebruiksscenario vereist.',
      ],
      faqs: [
        {
          q: 'Welke soorten multi-persoonsplanken produceren jullie?',
          a: 'Tandems (twee paddelaars, circa 13′–14′), yardplanken (korte, brede loungeplatforms) en partyplatforms met hoog volume voor 3–6 paddelaars. Elk type wordt gespecificeerd op basis van capaciteit, gewicht en beoogd gebruik.',
        },
        {
          q: 'Zijn multi-persoonsplanken een goede investering voor verhuur?',
          a: 'Ja: ze maken hogere uurtarieven mogelijk met lagere uitrustingskosten per paddelaar en houden groepen bij elkaar in plaats van ze te verdelen over individuele planken. Verhuurbeheerders combineren typisch multi-persoonsplanken met all-round vloten.',
        },
        {
          q: 'Wat is de capaciteit van een partyplatform?',
          a: 'De capaciteit hangt af van maten en volume: typische yard- en partyplatforms dragen 400–700 lbs en vervoeren 3–6 paddelaars, afhankelijk van afmetingen en configuratie. De specificaties worden bevestigd op een fysiek monster vóór de serieproductie.',
        },
      ],
    },
  ],
  sv: [
    {
      slug: 'all-around',
      navLabel: 'Allround',
      metaTitle: 'Skräddarsydda allround-SUP-brädor — tillverkare av uppblåsbara OEM | iSupfactory',
      metaDescription:
        'Skräddarsydda uppblåsbara allround-SUP-brädor tillverkade under ditt varumärke — bred kroppsstabilitet, OEM/ODM-volymer från 90–100+ st, prover på 7–12 dagar. Direkt från fabriken i Qingdao, Kina.',
      kicker: 'Serie · Allround',
      h1: 'Skräddarsydda allround-SUP-brädor — standardplattformen för nya varumärken',
      intro: [
        'Allroundbrädan är SUP-kategorins arbetshäst: tillräckligt bred för att kännas stabil för nybörjare, tillräckligt kvick för att hålla medelnivån intresserad och tillräckligt lätt att bära med sig överallt. De flesta nya varumärken och de flesta uthyrningsflottor börjar här.',
        'Vi tillverkar allroundplattformar under ditt varumärke från 90–100+ st per 150 m rulle (volym), med pilotserier från 20–50 st. Form, fat, uppbyggnad, färger, helbrädagrafik och förpackning specificeras per projekt.',
      ],
      faqs: [
        {
          q: 'Kan jag skräddarsy en allround-SUP-bräda för mitt varumärke?',
          a: 'Ja. Varje allroundplattform är en tillverkningsbas — du specificerar mått (vanligen 10′6″ till 11′6″), bredd, tjocklek, uppbyggnad (enkel/dubbel lager eller fusion), fatkonfiguration, EVA-pad, helbrädagrafik och förpackning. Former med specialformade formar startar vid 90–100+ st per form; standardvolymproduktion från 90–100+ st per 150 m rulle.',
        },
        {
          q: 'Vad är minimikvantiteten (MOQ) för allround-SUP-brädor?',
          a: 'Standardvolympartier startar vid 90–100+ st per 150 m rulle; pilotserier på standardplattformar startar vid 20–50 st; helt specialgjorda formar kräver från 90–100+ st per form. Prover skickas inom 7–12 dagar och serieproduktionen tar 25–35 dagar efter bekräftad order och deposition.',
        },
        {
          q: 'Vad ingår i det butiksredo paketet?',
          a: 'Hela paketet: uppblåsbar bräda med drop-stitch-kärna, justerbar paddel, handpump (eller elektrisk tvåstegs), reparationskit, ryggsäck och tryckt kartong. Tillbehör kan bytas eller uppgraderas efter din målgrupp.',
        },
        {
          q: 'Vilken hårdhet på EVA-däck tillverkar ni?',
          a: 'Däckens greppmattor går i 45–55 Shore C — medelhårt, greppvänligt under fötterna utan att hårdna i solen. Tjocklek, spår, utskärningar och logoplacering specificeras per projekt.',
        },
      ],
    },
    {
      slug: 'race',
      navLabel: 'Racing',
      metaTitle: 'Skräddarsydda tävlings-SUP-brädor — uppblåsbara racingsplattformar OEM | iSupfactory',
      metaDescription:
        'Skräddarsydda uppblåsbara tävlings-SUP-brädor för klubbar, evenemang och varumärken — drop-stitch-racingskrov, OEM-volymer från 90–100+ st, CE-certifierad produktion. Direkt från fabriken.',
      kicker: 'Serie · Racing',
      h1: 'Skräddarsydda tävlings-SUP-brädor — racingskrov tillverkade för ditt varumärke',
      intro: [
        'Tävlingsbrädor byter stabilitet mot fart: längre, smalare profiler med raffinerade bogformer och låg rocker, byggda för displacement-paddling. De uppblåsbara versionerna matchar hårda tävlingsbrädors prestanda inom en portabel plattform.',
        'Vi producerar tävlingsplattformar för varumärken, klubbar och arrangörer med precisionskärnor i drop-stitch, tävlingsspecifika uppbyggnader och farthungriga skrovformer — testade i vår hydrodynamiska testtank.',
      ],
      faqs: [
        {
          q: 'Vilka tävlings-SUP-mått kan ni tillverka?',
          a: 'Typiska tävlingsplattformar går från 12′6″ × 28″ för 12′6-klasser till 14′ × 23″–25″ för unlimited/touring-format. Bredd, rocker och bogprofiler specificeras för målgruppen och verifieras på ett fysiskt prov.',
        },
        {
          q: 'Kräver tävlingsbrädor särskild konstruktion?',
          a: 'Ja — tävlingsbrädor använder en lättare, tätt vävd drop-stitch-kärna med högre psi (18–20 PSI) och styvare fatförstärkning för att hålla skrovformen i fart. Valet av uppbyggnad (enkel eller dubbel lager) väger vikt mot styvhet, vilket vi specificerar tillsammans med dig per projekt.',
        },
        {
          q: 'Kan klubbar beställa tävlingsbrädor till sitt lag?',
          a: 'Ja. Klubb- och lagprogram beställer från 90–100+ st (volym) med klubbgrafik och kan blanda tävlings- och träningsplattformar i samma order. Flottpris gäller för kombinerade volymer.',
        },
      ],
    },
    {
      slug: 'surf',
      navLabel: 'Surf',
      metaTitle: 'Skräddarsydda surf-SUP-brädor — uppblåsbara hybrid-surfplattformar OEM | iSupfactory',
      metaDescription:
        'Skräddarsydda uppblåsbara surf-SUP-brädor — hybrid-surfprofiler med rundade fat och höjd rocker, tillverkade under ditt varumärke från 90–100+ st i Qingdao, Kina.',
      kicker: 'Serie · Surf',
      h1: 'Skräddarsydda surf-SUP-brädor — hybrid-surfplattformar för vågsurfing',
      intro: [
        'Surf-SUP-brädor ger vågprestanda i en portabel plattform: kortare längder, högre rocker, rundade fat och konkava bogar som håller linjen på vågens framsida. Uppblåsbara surfformer är den mest förlåtande vägen in i surfpaddling.',
        'Vi tillverkar surfplattformar under ditt varumärke med vågspecifika former och konstruktionsdetaljer — från soft-top-komplettpaket till prestandauppbyggnader.',
      ],
      faqs: [
        {
          q: 'Vilka storlekar finns tillgängliga för surf-SUP-brädor?',
          a: 'Vanliga surfplattformar går från 8′6″ till 10′6″ med bredder runt 30″–34″. Längd, rocker och fatprofil specificeras utifrån paddlarens vikt och vågtyp och verifieras på ett fysiskt prov före produktion.',
        },
        {
          q: 'Är uppblåsbara surfbrädor hållbara nog för uthyrning?',
          a: 'Med förstärkta fat och UV-beständig PVC klarar våra surfplattformar uthyrning och undervisning på surfläskolor. Uthyrningsflottor kombinerar typiskt allround- och surfformer — flottpris gäller för den blandade volymen.',
        },
        {
          q: 'Kan ni matcha vår varumärkesgrafik på surfbrädor?',
          a: 'Ja. Helbrädesgrafik, bottenkonst, EVA-greppmattor och förpackning produceras från ditt konstverk eller utvecklas från dina varumärkestillgångar av vår designteam.',
        },
      ],
    },
    {
      slug: 'touring',
      navLabel: 'Touring',
      metaTitle: 'Skräddarsydda touring-SUP-brädor — långdistansplattformar OEM | iSupfactory',
      metaDescription:
        'Skräddarsydda uppblåsbara touring-SUP-brädor för långdistanspaddling — displacement-skrov från 12′6″, kapacitet för flerdagsturer, OEM-volymer från 90–100+ st, direkt från fabriken.',
      kicker: 'Serie · Touring',
      h1: 'Skräddarsydda touring-SUP-brädor — byggda för avstånd, last och långa sträckor',
      intro: [
        'Touringbrädor är långa och effektiva: spetsiga bogar för glid, måttlig volym för stabilitet på öppet vatten och tillräckligt med skrovlängd för att bära utrustning på flerdagsturer. De är den självklara plattformen för distanspaddlare och expeditionsutrustare.',
        'Vi producerar touringplattformar under ditt varumärke med displacement-formgivning, fästpunkter och däckyta för last samt tillbehörssystem kompatibla med kol (bungees, D-ringar, fästen).',
      ],
      faqs: [
        {
          q: 'Vilka touring-SUP-storlekar tillverkar ni?',
          a: 'Touringplattformar går typiskt från 12′6″ till 14′ med bredder på 28″–32″. Längre 14′-skrov prioriterar glid; bredare versioner ger laststabilitet. Specifikationerna bekräftas med ett fysiskt prov före serieproduktion.',
        },
        {
          q: 'Kommer touringbrädor med last- och fästalternativ?',
          a: 'Ja — bungee-lastnät, D-ringsgrids, spöhållare och tillbehörsskenor specificeras per projekt. Touringpaket kombinerar vanligen brädorna med ryggsäcksväskor och högtryckspumpar.',
        },
        {
          q: 'Levererar ni touringbrädor till outfitters och uthyrningsoperatörer?',
          a: 'Ja. Outfitters och operatörer kan driva dedikerade touringflottor från 20–50 st (pilot) med flottpris, reservdelar och en definierad säsongscykel för förnyelse.',
        },
      ],
    },
    {
      slug: 'yoga',
      navLabel: 'Yoga',
      metaTitle: 'Skräddarsydda yoga-SUP-brädor — breda stabila plattformar OEM | iSupfactory',
      metaDescription:
        'Skräddarsydda uppblåsbara yoga-SUP-brädor — extra breda stabila plattformar med mjuka däck för studior, resorter och instruktörer. OEM-volymer från 90–100+ st, direkt från fabriken.',
      kicker: 'Serie · Yoga',
      h1: 'Skräddarsydda yoga-SUP-brädor — extra breda plattformar för utövande på vattnet',
      intro: [
        'Yogabrädor är byggda för stillhet: extra bredd och volym för en stabil plattform, mjuka toppar för händer och fötter och låga profiler som håller brädan nära vattnet. De tjänar studior, resorter och instruktörer som driver vattenyogaprogram.',
        'Vi tillverkar yogaplattformar under ditt varumärke med de bredaste stabila profilerna, premium-EVA-däck och alternativ i programskala för studior och resortflottor.',
      ],
      faqs: [
        {
          q: 'Vad gör en SUP-bräda bra för yoga?',
          a: 'Stabilitet först: extra bredd (33″–36″) och volym håller brädan platt och stadig. Ett mjukt EVA-däck skyddar händer, knän och fötter, och ett lågprofilfat minskar vingligheten när man stiger på och av.',
        },
        {
          q: 'Kan resorter beställa yogabrädor som en del av en flotta?',
          a: 'Ja. Resorter blandar vanligen yogaplattformar med allround-brädor för gäster. Kombinerade flottvolymer kvalificerar för flottpris, och varumärkesgrafik i anläggningens färgpalett gäller för hela ordern.',
        },
        {
          q: 'Ingår kompletta paket i yogabrädorna?',
          a: 'Ja — uppblåsbar bräda, paddel, pump, ryggsäck och reparationskit, eller ett reducerat kit för förvaring på plats (bräda + paddel + elektrisk pump), beroende på vad ditt program kräver.',
        },
      ],
    },
    {
      slug: 'whitewater',
      navLabel: 'Vitt vatten',
      metaTitle: 'Skräddarsydda vildvatten-SUP-brädor — plattformar för älv och fors OEM | iSupfactory',
      metaDescription:
        'Skräddarsydda uppblåsbara vildvatten-SUP-brädor för älvar och forsar — korta manövrerbara skrov med förstärkt slagkonstruktion. OEM-volymer från 90–100+ st i Qingdao, Kina.',
      kicker: 'Serie · Vitt vatten',
      h1: 'Skräddarsydda vildvatten-SUP-brädor — älvskrov byggda för att tåla smällar',
      intro: [
        'Vildvattenbrädor är korta, breda och tåliga: manövrerbara skrov som vänder på kommando, hög slagstyrka för fat-träffar och robust konstruktion för grunda älvbottnar och steniga ihopp.',
        'Vi tillverkar vildvattenplattformar under ditt varumärke med förstärkta sömmar, slagfat och älvspecifika former — byggda för skolor, guider och älvoutfitters som kör dagliga lektioner och turer.',
      ],
      faqs: [
        {
          q: 'Vilken konstruktion behöver vildvattenbrädor?',
          a: 'Förstärkta fat och dubbelsömmad konstruktion absorberar slag mot faten; tjock PVC och flerlagersuppbyggnad står emot punkteringar från älvbottnar. Dubbelkammardesign ger extra flytreserv för avlägsna älvar.',
        },
        {
          q: 'Levererar ni till älvoutfitters och guideskolor?',
          a: 'Ja. Outfitters och guideskolor driver vildvattenflottor från 20–50 st (pilot) med flottpris, robusta reparationskit och reservfena/ventilkomponenter — typiskt för älvprogram med hög användning.',
        },
        {
          q: 'Kan vildvattenbrädor bära varumärkesgrafik?',
          a: 'Ja — helbrädesgrafik, logoplacering och lagfärger produceras från ditt konstverk. Rivtåliga trycklager håller varumärket intakt vid hård användning.',
        },
      ],
    },
    {
      slug: 'fishing',
      navLabel: 'Fiske',
      metaTitle: 'Skräddarsydda fiske-SUP-brädor — OEM & privat märkning | iSupfactory',
      metaDescription:
        'Skräddarsydda uppblåsbara fiske-SUP-brädor med stabilitet, viktkapacitet och tillbehörsfästen — OEM/privata märkesvolymer från 90–100+ st, direkt från fabriken i Qingdao, Kina.',
      kicker: 'Serie · Fiske',
      h1: 'Skräddarsydda fiske-SUP-brädor — byggda med fiskare i åtanke',
      intro: [
        'Fiskebrädor är stabila kastplattformar: breda och med hög volym för att bära fiskaren plus utrustning, med fästsystem för spöhållare, kylboxar och tackel samt tyst konstruktion för diskret inflygning.',
        'Vi tillverkar fiskeplattformar under ditt varumärke med fiskarspecifika funktioner specificerade per projekt — från helgpaket till fullständiga tävlingsuppsättningar.',
      ],
      faqs: [
        {
          q: 'Vilka fiske-SUP-funktioner kan specificeras?',
          a: 'Fästgrids för spöhållare och tillbehör, utrustningsskenor, kylväskerepar, förankringspunkter och högkapacitetsbrädor upp till 500 lbs för fiskare plus utrustning. Paketen kan inkludera paddlar, pumpar och väskor med ditt märke.',
        },
        {
          q: 'Vad är minimikvantiteten (MOQ) för OEM-beställningar av fiske-SUP?',
          a: 'Standardvolympartier startar vid 90–100+ st per 150 m rulle; pilotserier från 20–50 st på standardplattformar; specialverktyg från 90–100+ st per form. Prover skickas inom 7–12 dagar; produktionen tar 25–35 dagar efter bekräftad order och deposition.',
        },
        {
          q: 'Producerar ni fiskebrädor för uthyrning och guideverksamhet?',
          a: 'Ja. Guide- och uthyrningsverksamheter driver fiskeflottor med flottpris, reservdelar och reparationskit anpassade till dagliga program.',
        },
      ],
    },
    {
      slug: 'kids',
      navLabel: 'Barn',
      metaTitle: 'Skräddarsydda barn-SUP-brädor — små lätta plattformar OEM | iSupfactory',
      metaDescription:
        'Skräddarsydda uppblåsbara barn-SUP-brädor — kortare, lättare plattformar med barnvänliga däck utformade för säkerhet och kul. OEM-volymer från 90–100+ st, direkt från fabriken.',
      kicker: 'Serie · Barn',
      h1: 'Skräddarsydda barn-SUP-brädor — små, lätta och byggda för de första paddeltaken',
      intro: [
        'Barnbrädor är proportionerade för unga paddlare: kortare skrov, lättare vikt, smalare bredder anpassade till små kroppar och mjuka däck som förlåter fall. De är ingångspunkten för familjevarumärken, skolor och uthyrningsflottor som vänder sig till barn.',
        'Vi tillverkar barnplattformar under ditt varumärke i standard- och juniorstorlekar, med familjevänliga paketalternativ.',
      ],
      faqs: [
        {
          q: 'Vilka storlekar finns barn-SUP-brädor i?',
          a: 'Typiska barnplattformar går från 7′ till 9′6″ med bredder från 26″ till 30″ och vikter runt 7–9 kg (15–20 lbs). Storleken matchas mot paddlarens ålder och vikt och verifieras på ett fysiskt prov före produktion.',
        },
        {
          q: 'Levererar ni till skolor och ungdomsprogram?',
          a: 'Ja — våra barnplattformar är en vanlig komponent i skol- och ungdomsprogramflottor, beställda tillsammans med juniorpaddlar och nybörjartillbehör med programpris.',
        },
        {
          q: 'Kan barnbrädor bära varumärkes- och karaktärsgrafik?',
          a: 'Ja. Helbrädesfärgsättningar, karaktärskonst och logoplacering utvecklas från ditt konstverk eller varumärkesriktning — tryckta med samma rivtåliga lager som vuxenbrädorna.',
        },
      ],
    },
    {
      slug: 'multi',
      navLabel: 'Flerpersoners',
      metaTitle: 'Skräddarsydda multiperson-SUP-brädor — tandem & familj OEM | iSupfactory',
      metaDescription:
        'Skräddarsydda uppblåsbara multiperson-SUP-brädor för familjerekreation och grupplektioner — tandem-, yard- och partyplattformar. OEM-volymer från 90–100+ st, direkt från fabriken.',
      kicker: 'Serie · Flerpersoners',
      h1: 'Skräddarsydda multiperson-SUP-brädor — tandems, yards och partyplattformar',
      intro: [
        'Multipersonbrädor öppnar SUP för grupper: tandems med extra paddelpositioner, yardbrädor för avkoppling och partyplattformar som bär flera paddlare. De förankrar uthyrningsintäkterna på resorter, stränder och sjöanläggningar.',
        'Vi tillverkar multipersonplattformar under ditt varumärke med de stabilitets- och volymprofiler som varje användningsfall kräver.',
      ],
      faqs: [
        {
          q: 'Vilka typer av multipersonbrädor gör ni?',
          a: 'Tandems (två paddlare, ~13′–14′), yardbrädor (korta, breda avkopplingsplattformar) och partyplattformar med hög volym för 3–6 paddlare. Varje typ specificeras efter kapacitet, vikt och tänkt användning.',
        },
        {
          q: 'Är multipersonbrädor en bra uthyrningsinvestering?',
          a: 'Ja — de ger premiumtimpriser med lägre utrustningskostnad per paddlare och håller grupperna samlade istället för att splittra dem på enskilda brädor. Uthyrningsoperatörer kombinerar typiskt multipersonbrädor med allroundflottor.',
        },
        {
          q: 'Vad är kapaciteten hos en partyplattform?',
          a: 'Kapaciteten beror på mått och volym: typiska yard- och partyplattformar klarar 400–700 lbs och bär 3–6 paddlare beroende på storlek och konfiguration. Specifikationerna bekräftas på ett fysiskt prov före serieproduktion.',
        },
      ],
    },
  ],
  no: [
    {
      slug: 'all-around',
      navLabel: 'Allround',
      metaTitle: 'Skreddersydde allround-SUP-brett — produsent av oppblåsbare OEM-brett | iSupfactory',
      metaDescription:
        'Skreddersydde oppblåsbare allround-SUP-brett produsert under ditt merkenavn — bred stabilitet, OEM/ODM-volumer fra 90–100+ stk, prøver på 7–12 dager. Direkte fra fabrikken i Qingdao, Kina.',
      kicker: 'Serie · Allround',
      h1: 'Skreddersydde allround-SUP-brett — standardplattformen for nye merker',
      intro: [
        'Allroundbrettet er SUP-kategoriens arbeidshest: bredt nok til å føles stabilt for nybegynnere, smidig nok til å holde interesserte padlere engasjert og lett nok til å bære overalt. De fleste nye merker og de fleste utleieflåter starter her.',
        'Vi produserer allround-plattformer under ditt merkenavn fra 90–100+ stk per 150 m rulle (volum), med pilotpartier fra 20–50 stk. Form, finner, oppbygging, farger, helt dektrykk og emballasje spesifiseres per prosjekt.',
      ],
      faqs: [
        {
          q: 'Kan jeg få en allround-SUP skreddersydd til mitt merke?',
          a: 'Ja. Hver allround-plattform er en produksjonsbase — du spesifiserer mål (vanligvis 10′6″ til 11′6″), bredde, tykkelse, oppbygging (ettlag eller tolag, eller fusion), finnekonfigurasjon, EVA-pute, helt dektrykk og emballasje. Former med egen form starter på 90–100+ stk per form; standardvolumproduksjon fra 90–100+ stk per 150 m rulle.',
        },
        {
          q: 'Hva er minste bestillingskvantum (MOQ) for allround-SUP-brett?',
          a: 'Standardvolumpartier starter på 90–100+ stk per 150 m rulle; pilotserier på standardplattformer starter på 20–50 stk; helt egne former krever fra 90–100+ stk per form. Prøver sendes innen 7–12 dager, og serieproduksjonen tar 25–35 dager etter bekreftet bestilling og depositum.',
        },
        {
          q: 'Hva inngår i butikkklart-pakken?',
          a: 'Hele pakken: oppblåsbart brett med drop-stitch-kjerne, justerbar paddle, håndpumpe (eller elektrisk totrinns), reparasjonssett, ryggsekk og trykt boks. Tilbehør kan byttes eller oppgraderes etter målgruppen din.',
        },
        {
          q: 'Hvilken hardhet på EVA-dekk produserer dere?',
          a: 'Dekkenes greppmatter ligger på 45–55 Shore C — middels hardt, greppsikkert under føttene uten å bli hardt i solen. Tykkelse, spor, utskjæringer og logoplassering spesifiseres per prosjekt.',
        },
      ],
    },
    {
      slug: 'race',
      navLabel: 'Racing',
      metaTitle: 'Skreddersydde racing-SUP-brett — oppblåsbare racingplattformer, OEM | iSupfactory',
      metaDescription:
        'Skreddersydde oppblåsbare racing-SUP-brett for klubber, arrangementer og merker — drop-stitch-racing-skrog, OEM-volumer fra 90–100+ stk, CE-sertifisert produksjon. Direkte fra fabrikken.',
      kicker: 'Serie · Racing',
      h1: 'Skreddersydde racing-SUP-brett — racing-skrog bygget for ditt merke',
      intro: [
        'Racingbrett bytter stabilitet mot fart: lengre og smalere profiler med avanserte bueformer og lav rocker, bygget for forskyvningspadling. De oppblåsbare versjonene matcher harde racingbrett på ytelse, i en portabel plattform.',
        'Vi produserer racing-plattformer for merker, klubber og arrangører med presisjonskjerner i drop-stitch, racing-spesifikk oppbygging og fartshungrige skrogformer — testet i vår hydrodynamiske testtank.',
      ],
      faqs: [
        {
          q: 'Hvilke racing-SUP-mål kan dere produsere?',
          a: 'Typiske racing-plattformer går fra 12′6″ × 28″ for 12′6-klasser til 14′ × 23″–25″ for unlimited/touring-formater. Bredde, rocker og bueprofiler spesifiseres for målgruppen og verifiseres på en fysisk prøve.',
        },
        {
          q: 'Krever racingbrett en spesiell konstruksjon?',
          a: 'Ja — racingbrett bruker en lettere, tettvevd drop-stitch-kjerne med høyere psi (18–20 PSI) og stivere forsterkning langs kantene for å holde skrogformen i fart. Valg av oppbygging (ettlag eller tolag) avveier vekt mot stivhet, og vi spesifiserer dette sammen med deg per prosjekt.',
        },
        {
          q: 'Kan klubber bestille racingbrett til laget sitt?',
          a: 'Ja. Klubb- og lagprogram bestiller fra 90–100+ stk (volum) med klubbgrafikk og kan kombinere racing- og treningsplattformer i samme bestilling. Flåtepriser gjelder for kombinerte volumer.',
        },
      ],
    },
    {
      slug: 'surf',
      navLabel: 'Surf',
      metaTitle: 'Skreddersydde surf-SUP-brett — oppblåsbare hybrid-surfplattformer, OEM | iSupfactory',
      metaDescription:
        'Skreddersydde oppblåsbare surf-SUP-brett — hybrid-surfprofiler med avrundede finner og høy rocker, produsert under ditt merkenavn fra 90–100+ stk i Qingdao, Kina.',
      kicker: 'Serie · Surf',
      h1: 'Skreddersydde surf-SUP-brett — hybrid-surfplattformer for bøllesurfing',
      intro: [
        'Surf-SUP-brett gir bølleytelse i en portabel plattform: kortere lengder, høyere rocker, avrundede finner og konkave buer som holder linjen på bølgens front. Oppblåsbare surfformer er den mest tilgivende veien inn i surfpadling.',
        'Vi produserer surfplattformer under ditt merkenavn med bøllespesifikke former og konstruksjonsdetaljer — fra komplette soft-top-pakker til ytelseskonsepter.',
      ],
      faqs: [
        {
          q: 'Hvilke størrelser finnes for surf-SUP-brett?',
          a: 'Vanlige surfplattformer går fra 8′6″ til 10′6″ med bredder rundt 30″–34″. Lengde, rocker og finneprofil spesifiseres ut fra padlerens vekt og bølletype og verifiseres på en fysisk prøve før produksjon.',
        },
        {
          q: 'Er oppblåsbare surfbrett holdbare nok for utleie?',
          a: 'Med forsterkede finner og UV-bestandig PVC tåler våre surfplattformer utleie og undervisning på surfskoler. Utleieflåter kombinerer vanligvis allround- og surfformer — flåtepriser gjelder for det kombinerte volumet.',
        },
        {
          q: 'Kan dere matche vår merkegrafikk på surfbrett?',
          a: 'Ja. Heldekksgrafikk, bunnkunst, EVA-greppmatter og emballasje produseres fra ditt artwork eller utvikles av vårt designteam ut fra merkevarets dine ressurser.',
        },
      ],
    },
    {
      slug: 'touring',
      navLabel: 'Touring',
      metaTitle: 'Skreddersydde touring-SUP-brett — langdistsplattformer, OEM | iSupfactory',
      metaDescription:
        'Skreddersydde oppblåsbare touring-SUP-brett for langdistspadling — forskyvningsskrog fra 12′6″, kapasitet for flerdagsturer, OEM-volumer fra 90–100+ stk, direkte fra fabrikken.',
      kicker: 'Serie · Touring',
      h1: 'Skreddersydde touring-SUP-brett — bygget for avstand, last og lange strekninger',
      intro: [
        'Touringbrett er lange og effektive: spisse buer for glid, moderat volum for stabilitet på åpent vann og nok skroglengde til å bære utstyr på flerdagsturer. De er den naturlige plattformen for distansepadlere og ekspedisjonsutstyr.',
        'Vi produserer touringplattformer under ditt merkenavn med forskyvningsform, festepunkter og dekksflate for last samt tilbehørssystemer kompatible med karbon (bungees, D-ringer, fester).',
      ],
      faqs: [
        {
          q: 'Hvilke touring-SUP-størrelser produserer dere?',
          a: 'Touringplattformer går vanligvis fra 12′6″ til 14′ med bredder på 28″–32″. Lengre 14′-skrog prioriterer glid; bredere versjoner gir laststabilitet. Spesifikasjonene bekreftes med en fysisk prøve før serieproduksjon.',
        },
        {
          q: 'Leverer touringbrett med last- og festemuligheter?',
          a: 'Ja — bungee-lastnett, D-ringnett, stangholdere og tilbehørsskinner spesifiseres per prosjekt. Touringpakker kombinerer vanligvis brettene med ryggsekker og høytrykkspumper.',
        },
        {
          q: 'Leverer dere touringbrett til utfittere og utleieoperatører?',
          a: 'Ja. Utfittere og operatører kan drive dedikerte touringflåter fra 20–50 stk (pilot) med flåtepriser, reservedeler og en definert sesongsyklus for fornying.',
        },
      ],
    },
    {
      slug: 'yoga',
      navLabel: 'Yoga',
      metaTitle: 'Skreddersydde yoga-SUP-brett — brede, stabile plattformer, OEM | iSupfactory',
      metaDescription:
        'Skreddersydde oppblåsbare yoga-SUP-brett — ekstra brede, stabile plattformer med mykt dek for studios, resorts og instruktører. OEM-volumer fra 90–100+ stk, direkte fra fabrikken.',
      kicker: 'Serie · Yoga',
      h1: 'Skreddersydde yoga-SUP-brett — ekstra brede plattformer for utøvere på vannet',
      intro: [
        'Yogabrett er bygget for ro: ekstra bredde og volum for en stabil plattform, myk topp for hender og føtter og lave profiler som holder brettet nær vannet. De tjener studios, resorts og instruktører som driver vann-yogaprogrammer.',
        'Vi produserer yogaplattformer under ditt merkenavn med de bredeste stabile profilene, premium-EVA-dekk og alternativ i programmeringsskala for studio- og resortflåter.',
      ],
      faqs: [
        {
          q: 'Hva gjør et SUP-brett godt for yoga?',
          a: 'Stabilitet først: ekstra bredde (33″–36″) og volum holder brettet flatt og stødig. Et mykt EVA-dekk beskytter hender, knær og føtter, og en lavprofilkant reduserer vagging når man går av og på.',
        },
        {
          q: 'Kan resorts bestille yogabrett som en del av en flåte?',
          a: 'Ja. Resorts kombinerer vanligvis yogaplattformer med allround-brett for gjester. Kombinerte flåtevolumer kvalifiserer til flåtepriser, og merkegrafikk i anleggets fargepalett gjelder for hele bestillingen.',
        },
        {
          q: 'Inngår komplette pakker i yogabrettene?',
          a: 'Ja — oppblåsbart brett, paddle, pumpe, ryggsekk og reparasjonssett, eller en redusert sett for oppbevaring på stedet (brett + paddle + elektrisk pumpe), avhengig av hva programmet krever.',
        },
      ],
    },
    {
      slug: 'whitewater',
      navLabel: 'Hvitevann',
      metaTitle: 'Skreddersydde hvitevann-SUP-brett — plattformer for elv og stryk, OEM | iSupfactory',
      metaDescription:
        'Skreddersydde oppblåsbare hvitevann-SUP-brett for elver og stryk — korte, manøvrerbare skrog med forsterket slåkonstruksjon. OEM-volumer fra 90–100+ stk i Qingdao, Kina.',
      kicker: 'Serie · Hvitevann',
      h1: 'Skreddersydde hvitevann-SUP-brett — elveskrog bygget for å tåle støt',
      intro: [
        'Hvitevannsbrett er korte, brede og tålige: manøvrerbare skrog som svinger på kommando, høy slåstyrke for treff mot kantene og robust konstruksjon for grunne elvebunn og steinsamlinger.',
        'Vi produserer hvitevannsplattformer under ditt merkenavn med forsterkede sømmer, slåfinner og elvespesifikke former — bygget for skoler, guider og elveutfittere som kjører daglige leksjoner og turer.',
      ],
      faqs: [
        {
          q: 'Hvilken konstruksjon trenger hvitevannsbrett?',
          a: 'Forsterkede finner og dobbeltsydd konstruksjon absorberer slag mot kantene; tykk PVC og flerlagsoppbygging motstår punkteringer fra elvebunn. Dobbeltkammerdesign gir ekstra flytereserve på avsides elver.',
        },
        {
          q: 'Leverer dere til elveutfittere og guideskoler?',
          a: 'Ja. Utfittere og guideskoler driver hvitevannsflåter fra 20–50 stk (pilot) med flåtepriser, robuste reparasjonssett og reservedelskomponenter til finner og ventiler — typisk for elveprogrammer med høy bruksintensitet.',
        },
        {
          q: 'Kan hvitevannsbrett bære merkegrafikk?',
          a: 'Ja — heldekksgrafikk, logoplassering og lagfarger produseres fra ditt artwork. Rivbestandige trykklag holder merket intakt ved hard bruk.',
        },
      ],
    },
    {
      slug: 'fishing',
      navLabel: 'Fiske',
      metaTitle: 'Skreddersydde fiskes-SUP-brett — OEM og private label | iSupfactory',
      metaDescription:
        'Skreddersydde oppblåsbare fiskes-SUP-brett med stabilitet, vektkapasitet og tilbehørsfester — OEM/private label-volumer fra 90–100+ stk, direkte fra fabrikken i Qingdao, Kina.',
      kicker: 'Serie · Fiske',
      h1: 'Skreddersydde fiskes-SUP-brett — bygget med fiskere i tankene',
      intro: [
        'Fiskebrett er stabile kastplattformer: brede og med høyt volum for å bære fiskeren pluss utstyr, med festesystemer for stangholdere, kjølebokser og terminaler samt stille konstruksjon for diskret innslag.',
        'Vi produserer fiskeplattformer under ditt merkenavn med fiskerespesifikke funksjoner spesifisert per prosjekt — fra helgepakker til komplette konkurranseoppsett.',
      ],
      faqs: [
        {
          q: 'Hvilke fiskes-SUP-funksjoner kan spesifiseres?',
          a: 'Festnett for stangholdere og tilbehør, utstyrsskinner, kjølebokslommer, forankringspunkter og brett med høy kapasitet opptil 500 lbs for fisker pluss utstyr. Pakkene kan inkludere padler, pumper og vesker med ditt merke.',
        },
        {
          q: 'Hva er minste bestillingskvantum (MOQ) for OEM-bestillinger av fiskes-SUP?',
          a: 'Standardvolumpartier starter på 90–100+ stk per 150 m rulle; pilotserier fra 20–50 stk på standardplattformer; egne former fra 90–100+ stk per form. Prøver sendes innen 7–12 dager; produksjonen tar 25–35 dager etter bekreftet bestilling og depositum.',
        },
        {
          q: 'Produserer dere fiskebrett for utleie og guidet virksomhet?',
          a: 'Ja. Guide- og utleievirksomheter driver fiskeflåter med flåtepriser, reservedeler og reparasjonssett tilpasset daglige programmer.',
        },
      ],
    },
    {
      slug: 'kids',
      navLabel: 'Barn',
      metaTitle: 'Skreddersydde barne-SUP-brett — små, lette plattformer, OEM | iSupfactory',
      metaDescription:
        'Skreddersydde oppblåsbare barne-SUP-brett — kortere, lettere plattformer med barnevennlige dekk utformet for sikkerhet og moro. OEM-volumer fra 90–100+ stk, direkte fra fabrikken.',
      kicker: 'Serie · Barn',
      h1: 'Skreddersydde barne-SUP-brett — små, lette og bygget for de første paddletakkene',
      intro: [
        'Barnebrett er proporsjonert for unge padlere: kortere skrog, lavere vekt, smalere bredder tilpasset små kropper og myke dekk som tilgir fall. De er inngangsporten for familiemerker, skoler og utleieflåter som retter seg mot barn.',
        'Vi produserer barneplattformer under ditt merkenavn i standard- og juniorstørrelser, med familjevennlige pakkealternativer.',
      ],
      faqs: [
        {
          q: 'Hvilke størrelser finnes barne-SUP-brett i?',
          a: 'Typiske barneplattformer går fra 7′ til 9′6″ med bredder fra 26″ til 30″ og vekter rundt 7–9 kg (15–20 lbs). Størrelsen matches mot padlerens alder og vekt og verifiseres på en fysisk prøve før produksjon.',
        },
        {
          q: 'Leverer dere til skoler og ungdomsprogrammer?',
          a: 'Ja — våre barneplattformer er en vanlig del av skole- og ungdomsflåter, bestilt sammen med juniorpadler og nybeginnertilbehør med programpriser.',
        },
        {
          q: 'Kan barnebrett bære merke- og tegneseriegrafikk?',
          a: 'Ja. Heldekksfargesett, tegneseriekunst og logoplassering utvikles fra ditt artwork eller merkretningen — trykt med de samme rivbestandige lagene som voksne brett.',
        },
      ],
    },
    {
      slug: 'multi',
      navLabel: 'Flerperson',
      metaTitle: 'Skreddersydde flerperson-SUP-brett — tandem og familie, OEM | iSupfactory',
      metaDescription:
        'Skreddersydde oppblåsbare flerperson-SUP-brett for familierekreasjon og gruppeleksjoner — tandem-, yard- og partyplattformer. OEM-volumer fra 90–100+ stk, direkte fra fabrikken.',
      kicker: 'Serie · Flerperson',
      h1: 'Skreddersydde flerperson-SUP-brett — tandem-, yard- og partyplattformer',
      intro: [
        'Flerpersonbrett åpner SUP for grupper: tandem med ekstra padleplasser, yardbrett for avslapning og partyplattformer som bærer flere padlere. De forankrer utleieinntektene på resorts, strender og sjøanlegg.',
        'Vi produserer flerpersonplattformer under ditt merkenavn med de stabilitets- og volumprofilene hvert brukstilfelle krever.',
      ],
      faqs: [
        {
          q: 'Hvilke typer flerpersonbrett lager dere?',
          a: 'Tandem (to padlere, ~13′–14′), yardbrett (korte, brede avslapningsplattformer) og partyplattformer med høyt volum for 3–6 padlere. Hver type spesifiseres etter kapasitet, vekt og tiltenkt bruk.',
        },
        {
          q: 'Er flerpersonbrett en god utleieinvestering?',
          a: 'Ja — de gir premiumtimepriser med lavere utstyrskostnad per padler og holder grupper samlet i stedet for å spre dem på enkelte brett. Utleieoperatører kombinerer vanligvis flerpersonbrett med allroundflåter.',
        },
        {
          q: 'Hva er kapasiteten til en partyplattform?',
          a: 'Kapasiteten avhenger av mål og volum: typiske yard- og partyplattformer tåler 400–700 lbs og bærer 3–6 padlere, avhengig av størrelse og konfigurasjon. Spesifikasjonene bekreftes på en fysisk prøve før serieproduksjon.',
        },
      ],
    },
  ],
}

export function getSeriesPage(locale: Locale, slug: string): SeriesPageData | undefined {
  return (seriesPages[locale] ?? seriesPages.en).find((s) => s.slug === slug)
}
