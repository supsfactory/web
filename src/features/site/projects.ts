import type { Locale } from '@/features/i18n/locale'
import type { Localized } from './content'

/**
 * Project case studies (/projects/*). Real-project stories are the strongest
 * B2B manufacturing SEO content — each project carries industry → challenge →
 * solution → product → process → result, which search engines and AI answer
 * engines cite well.
 */

export interface ProjectData {
  slug: string
  navLabel: string
  metaTitle: string
  metaDescription: string
  kicker: string
  h1: string
  intro: string[]
  industry: string
  requirement: string
  challenge: string
  solution: string
  product: string
  process: { title: string; body: string }[]
  result: string
  outcome: string
  tags: string[]
}

export const projects: Localized<ProjectData[]> = {
  en: [
    {
      slug: 'resort-sup-fleet',
      navLabel: 'Luxury Resort SUP Fleet',
      metaTitle: 'Luxury Resort SUP Fleet | 100 Branded Boards — SUPsfactory',
      metaDescription:
        'How a luxury resort equipped its beach program with 100 branded SUP boards — custom graphics, rental-grade construction and seasonal fleet management.',
      kicker: 'Resort Project',
      h1: 'Luxury Resort SUP Fleet — 100 Branded Boards For Guest Experiences',
      intro: [
        'A luxury resort wanted its beach program to feel like part of the property — branded boards in the resort palette, durable enough for daily guest use and easy to store between seasons.',
      ],
      industry: 'Resort & Hospitality',
      requirement: '100 branded SUP boards for guest rental, in the property palette.',
      challenge:
        'Daily rental use wears out generic fleets fast, and off-season storage is limited. The resort needed boards that survive heavy use, store compactly and carry full property branding.',
      solution:
        'Rental-grade inflatable construction with reinforced rails and UV-resistant materials, full-board graphics in the resort colors, and branded paddles and pumps as part of the fleet package.',
      product: 'Custom inflatable SUP — 11′ all-around platform, branded deck graphics and accessories.',
      process: [
        { title: 'Fleet consultation', body: 'Guest volume, shoreline and season length defined the fleet size and board mix.' },
        { title: 'Branded sample', body: 'Colors and logo approved on a physical board before production.' },
        { title: 'Production & QC', body: '100 boards produced with multi-point QC across the run.' },
        { title: 'Delivery & refresh', body: 'Seasonal delivery, spare parts and a refresh program for later seasons.' },
      ],
      result:
        'The fleet launched on time for the season, boards store in a single room off-season, and guest feedback on the branded equipment drove a fleet expansion the following year.',
      outcome: 'On-time season launch, 100% branded fleet, expansion the next season.',
      tags: ['Branded guest fleet', 'Rental-grade construction', 'Seasonal refresh'],
    },
    {
      slug: 'private-label-launch',
      navLabel: 'Private Label Brand Launch',
      metaTitle: 'Private Label SUP Launch | Brand Extension — SUPsfactory',
      metaDescription:
        'How an existing outdoor brand extended into SUP with a private label product line — from logo to first container, with scalable MOQ.',
      kicker: 'Private Label Project',
      h1: 'Private Label Launch — An Existing Brand Enters SUP',
      intro: [
        'A sports retailer with an established brand wanted to extend into paddle sports without building factory relationships — a sellable SUP line under its own name.',
      ],
      industry: 'Retail & Outdoor Brands',
      requirement: 'A private label SUP line — logo, colors and packaging on proven platforms, first run at 50pcs.',
      challenge:
        'No in-house SUP design team, no manufacturing experience, and a first order small enough to test the market before scaling.',
      solution:
        'Full product and packaging artwork developed from the brand assets, a 50pcs validation run, then scaling on the same verified platforms with tooling kept for the brand.',
      product: 'Private label inflatable SUP — branded deck, paddle, pump, backpack and printed cartons.',
      process: [
        { title: 'Brand intake', body: 'Logo, colors and brand guidelines turned into board and packaging artwork.' },
        { title: 'Sample approval', body: 'Physical sample confirmed finish, colors and packaging.' },
        { title: 'Validation run', body: '50pcs first run sold through before scaling.' },
        { title: 'Scale', body: 'Container-order production at consistent quality, designs owned by the brand.' },
      ],
      result:
        'The line sold through its validation run within one season and scaled to a container order — with the brand owning all designs and tooling.',
      outcome: 'Validated in one season, scaled to container orders.',
      tags: ['Brand extension', 'Packaging design', 'Scalable MOQ'],
    },
    {
      slug: 'club-team-boards',
      navLabel: 'Club Team Boards',
      metaTitle: 'Club Team SUP Boards | Branded Fleet Refresh — SUPsfactory',
      metaDescription:
        'How a paddling club rebranded and refreshed its fleet with 25 branded training boards — team graphics, parts support and consistent reorders.',
      kicker: 'Club Project',
      h1: 'Club Fleet Refresh — One Look Across The Team',
      intro: [
        'A paddling club rebranded and needed its equipment to match — a unified team fleet for training and regattas, without mismatched stock.',
      ],
      industry: 'Paddle Clubs & Teams',
      requirement: '25 branded training boards with club name, colors and logo, plus replacement parts.',
      challenge:
        'Existing fleet was mismatched and unbranded; budgets were tight and future expansion needed identical matching stock.',
      solution:
        'Club branding on every board, fleet pricing for the volume, and spare parts + repair guidance to extend board life.',
      product: 'Custom team SUP — training shape with club graphics, plus replacement fins and repair kits.',
      process: [
        { title: 'Club intake', body: 'Membership, session types and current equipment reviewed.' },
        { title: 'Board selection', body: 'Training and beginner shapes matched to the club program.' },
        { title: 'Branding', body: 'Club name, colors and logo printed across the fleet.' },
        { title: 'Delivery & grow', body: 'Fleet delivered with parts; identical reorder for expansion.' },
      ],
      result:
        'Members train on matching branded equipment, and the club extended the fleet the following season with an identical reorder at the same quality.',
      outcome: 'Unified fleet, identical expansion reorder.',
      tags: ['Club branding', 'Fleet pricing', 'Parts support'],
    },
    {
      slug: 'school-program-fleet',
      navLabel: 'School Program Fleet',
      metaTitle: 'School SUP Program | Beginner Fleet — SUPsfactory',
      metaDescription:
        'How a school launched a paddle sports elective with a 15-board beginner fleet and multi-person boards — safety-first equipment for instruction.',
      kicker: 'School Project',
      h1: 'School Program Launch — A Fleet Built For Instruction',
      intro: [
        'A school launching a paddle sports elective needed equipment that is stable and safe for first-timers, sized to classes, and easy to manage with limited staff.',
      ],
      industry: 'Education & Youth Programs',
      requirement: 'A beginner fleet for class sizes, including multi-person boards for first lessons.',
      challenge:
        'Mixed ability levels, strict safety needs, school procurement cycles and a budget that must cover future cohorts.',
      solution:
        'Wide high-volume beginner boards and multi-person boards, program pricing matched to class quantities, and clear user guidance for instructors.',
      product: 'Beginner SUP fleet — stable platforms with reinforced construction for long program life.',
      process: [
        { title: 'Program review', body: 'Class sizes, water area and instructor setup defined the package.' },
        { title: 'Package build', body: 'Board types and quantities matched to instruction.' },
        { title: 'Sample approval', body: 'Stability and construction verified on a physical board.' },
        { title: 'Deliver & renew', body: 'Bulk supply, spare parts and reorders for new cohorts.' },
      ],
      result:
        'Instructors reported faster first-session progress on the stable platforms, and the program renewed equipment with a matching reorder the next year.',
      outcome: 'Faster learning curve, renewed equipment next year.',
      tags: ['Beginner fleet', 'Program launch', 'Renewal orders'],
    },
    {
      slug: 'distributor-line-expansion',
      navLabel: 'Distributor Line Expansion',
      metaTitle: 'Distributor SUP Line Expansion | 6-SKU Program — SUPsfactory',
      metaDescription:
        'How a water-sports distributor added a full mid-market SUP range across six SKUs — one factory, one program, exported to multiple markets.',
      kicker: 'Distributor Project',
      h1: 'Distributor Line Expansion — Six SKUs, One Factory, Multiple Markets',
      intro: [
        'A water-sports distributor carrying kayaks and accessories wanted its own inflatable SUP range — without fragmenting supply across several factories for boards, paddles and pumps.',
      ],
      industry: 'Distributors & Wholesalers',
      requirement: 'A six-SKU mid-market SUP range (10′6″ to 12′6″ plus accessory kits), with export to two regions.',
      challenge:
        'Separate factories for boards, paddles and pumps meant inconsistent branding, three separate supply points and no single quality owner for warranty claims.',
      solution:
        'One program covering boards, accessories and retail packaging; shared accessory kits to cut per-SKU inventory; and supply options matched to each market\'s setup.',
      product: 'Six branded retail SKUs — inflatable SUP platforms with divider-packed complete kits in printed cartons.',
      process: [
        { title: 'Range planning', body: 'Market gaps and price points defined the six SKUs and bundle contents.' },
        { title: 'Unified branding', body: 'One design system applied across boards, paddles, pumps and cartons.' },
        { title: 'Program pricing', body: 'Volume pricing across the full program, not per SKU.' },
        { title: 'Split-market supply', body: 'Standard export terms for the home region, full-service terms for the second market.' },
      ],
      result:
        'The range launched across both markets in one season; shared accessory kits cut landed inventory, and warranty issues were resolved through a single factory contact.',
      outcome: 'One-season multi-market launch, lower landed inventory, single point of warranty.',
      tags: ['Multi-SKU program', 'Complete retail kits'],
    },
    {
      slug: 'startup-brand-zero-to-one',
      navLabel: 'Startup Brand 0→1 Launch',
      metaTitle: 'Startup SUP Brand Launch | Concept to First Batch — SUPsfactory',
      metaDescription:
        'How a SUP startup went from concept to a sold-out first batch — ODM development, a 10-piece trial run, then a 200-piece branded launch order.',
      kicker: 'Startup Project',
      h1: 'Startup Brand Launch — From Concept To A Sold-Out First Batch',
      intro: [
        'Two founders with an audience but no factory wanted to sell their own SUP — an ODM board developed to their spec, with a launch-size order that would not sink them.',
      ],
      industry: 'Startup SUP Brands',
      requirement: 'ODM development at low MOQ: a 10 pcs trial run to validate, then 200 pcs for launch.',
      challenge:
        'No design team, no import experience and a first order too small for most factories — plus a launch date tied to the northern-hemisphere season.',
      solution:
        'ODM development from their concept on a proven platform, a 10 pcs trial run covering samples and supply verification, then a 200 pcs branded launch order with tooling kept for the brand.',
      product: 'Branded ODM inflatable SUP — custom deck graphics, packaging, and retail-ready carton sizing.',
      process: [
        { title: 'Concept call', body: 'Target rider, price point and launch date set the base platform.' },
        { title: 'Trial run', body: '10 pcs proved the product and packaging end to end.' },
        { title: 'Launch order', body: '200 pcs produced with the verified artwork and carton spec.' },
        { title: 'Scale path', body: 'Tooling retained for the brand; reorders at improved pricing.' },
      ],
      result:
        'The first batch sold out within weeks of season start; feedback from the trial run fixed a packaging issue before the big order went into production.',
      outcome: 'Sold-out launch batch, packaging fixed pre-scale, reorder path in place.',
      tags: ['ODM development', 'Low-MOQ trial run', 'Season-date planning'],
    },
    {
      slug: 'rental-fleet-multi-site',
      navLabel: 'Multi-Site Rental Fleet',
      metaTitle: 'Rental Fleet Expansion | 200 Boards, 3 Sites — SUPsfactory',
      metaDescription:
        'How a multi-site rental operator replaced mixed stock with 200 uniform boards across three locations — fleet pricing, seasonal refresh and parts supply.',
      kicker: 'Rental Project',
      h1: 'Rental Fleet Expansion — 200 Uniform Boards Across Three Sites',
      intro: [
        'A rental operator running three waterfront locations needed one uniform fleet instead of mixed stock — same board on every site, priced for fleet volume.',
      ],
      industry: 'Rental Fleet Operators',
      requirement: '200 rental-grade boards across three sites, with seasonal refresh and field-repairable parts.',
      challenge:
        'Mixed aging stock complicated repairs and pricing; rental abuse demands reinforced construction, and off-season storage is split across three sites.',
      solution:
        'One rental-grade platform across all sites with reinforced rails and UV-stable materials, fleet-level pricing on the 200-board volume, and a parts pack with repair guidance per site.',
      product: 'Rental-grade inflatable SUP — 11′ all-around platform with reinforced construction and repair kits.',
      process: [
        { title: 'Fleet audit', body: 'Site volume and utilization charts set the allocation across locations.' },
        { title: 'Uniform spec', body: 'One board everywhere — simpler repairs, pricing and training.' },
        { title: 'Fleet pricing', body: 'Volume discount across the combined 200-board order.' },
        { title: 'Parts & refresh', body: 'Per-site parts packs, plus a defined seasonal replacement cycle.' },
      ],
      result:
        'The uniform fleet cut per-site repair confusion, combined ordering unlocked fleet pricing, and the 200-board program became the baseline for seasonal renewal.',
      outcome: 'Uniform operations, lower per-unit cost, repeatable seasonal cycle.',
      tags: ['Multi-site fleet', 'Rental-grade construction', 'Seasonal renewal'],
    },
  ],
  es: [
    {
      slug: 'resort-sup-fleet',
      navLabel: 'Flota SUP para resort de lujo',
      metaTitle: 'Flota SUP en resort de lujo | 100 tablas — SUPsfactory',
      metaDescription:
        'Cómo un resort de lujo equipó su programa de playa con 100 tablas SUP de marca: arte personalizado, construcción de grado alquiler y gestión de flota por temporada.',
      kicker: 'Proyecto de resort',
      h1: 'Flota SUP de resort de lujo — 100 tablas de marca para elevar la experiencia del huésped',
      intro: [
        'Un resort de lujo quería que su programa de playa formara parte de la imagen de la propiedad: tablas de marca en los colores del resort, capaces de soportar el uso diario de los huéspedes y fáciles de guardar fuera de temporada.',
      ],
      industry: 'Resorts y hotelería',
      requirement: '100 tablas SUP de marca para alquiler de huéspedes, en los colores de la propiedad.',
      challenge:
        'El uso diario de alquiler desgasta rápido las flotas genéricas, y el espacio de almacenamiento fuera de temporada es limitado. El resort necesitaba tablas duraderas, compactas de guardar y con la marca completa de la propiedad.',
      solution:
        'Construcción hinchable de grado alquiler con rails reforzados y materiales anti-UV, arte a toda cubierta en los colores del resort y remos y bombas de marca incluidos en el paquete de flota.',
      product: 'SUP hinchables personalizados: plataforma polivalente de 11\' con arte de cubierta de marca y accesorios.',
      process: [
        { title: 'Consultoría de flota', body: 'Afluencia, zona acuática y duración de la temporada definieron el tamaño y la combinación de la flota.' },
        { title: 'Muestra de marca', body: 'Colores y logo confirmados en una tabla física antes de la producción.' },
        { title: 'Producción y QC', body: '100 tablas producidas con control de calidad multipunto.' },
        { title: 'Entrega y renovación', body: 'Entrega por temporada, accesorios y plan de renovación para las siguientes temporadas.' },
      ],
      result:
        'La flota se entregó a tiempo para el inicio de la temporada y se guardó entera en un cuarto de almacenamiento fuera de temporada; los comentarios positivos de los huéspedes sobre el equipamiento de marca impulsaron la ampliación de la flota al año siguiente.',
      outcome: 'Temporada iniciada a tiempo, flota 100% de marca, ampliada al año siguiente.',
      tags: ['Flota con marca para huéspedes', 'Construcción de grado alquiler', 'Renovación por temporada'],
    },
    {
      slug: 'private-label-launch',
      navLabel: 'Lanzamiento de marca privada',
      metaTitle: 'Lanzamiento SUP de marca privada | SUPsfactory',
      metaDescription:
        'Cómo una marca outdoor existente entró en el SUP con una línea de marca privada: del logo al primer pedido, con pedidos mínimos escalables.',
      kicker: 'Proyecto de marca privada',
      h1: 'Lanzamiento de marca privada — una marca existente entra en el SUP',
      intro: [
        'Un minorista deportivo con una marca consolidada quiso ampliarse al remo sin gestionar él mismo la relación con la fábrica: lanzar una línea de SUP vendible con su propia marca.',
      ],
      industry: 'Retail y marcas outdoor',
      requirement: 'Una línea de SUP de marca privada: logo, colores y embalaje sobre plataformas probadas, con 50 unidades de primer pedido.',
      challenge:
        'Sin equipo propio de diseño SUP, sin experiencia de fabricación, y un primer pedido lo bastante pequeño como para validar el mercado antes de escalar.',
      solution:
        'Desarrollo de planos completos de cubierta y embalaje a partir del material de marca, validación con 50 unidades y posterior escalado sobre las mismas plataformas verificadas, con moldes y diseños en propiedad de la marca.',
      product: 'SUP hinchable de marca privada: cubierta de marca, remo, bomba, bolsa y caja impresa.',
      process: [
        { title: 'Incorporación de la marca', body: 'Logo, colores y guía de marca convertidos en planos de cubierta y embalaje.' },
        { title: 'Aprobación de la muestra', body: 'La muestra física confirma acabado, colores y embalaje.' },
        { title: 'Lote de validación', body: 'Primer pedido de 50 unidades para vender y validar el mercado.' },
        { title: 'Escalado', body: 'Pedidos de mayor volumen con calidad constante; todos los diseños son de la marca.' },
      ],
      result: 'La línea agotó el lote de validación en un trimestre y escaló a pedidos de mayor volumen: la marca posee todos los diseños y moldes.',
      outcome: 'Validación en un trimestre, escalado a pedidos de mayor volumen.',
      tags: ['Extensión de marca', 'Diseño de embalaje', 'Pedidos mínimos escalables'],
    },
    {
      slug: 'club-team-boards',
      navLabel: 'Tablas de equipo para club',
      metaTitle: 'Tablas SUP de equipo de club | SUPsfactory',
      metaDescription:
        'Cómo un club de remo renovó su flota con 25 tablas de entrenamiento de marca: arte de equipo, soporte de accesorios y reordenes consistentes.',
      kicker: 'Proyecto de club',
      h1: 'Renovación de la flota de un club — una imagen unificada para todo el equipo',
      intro: [
        'Un club de remo renovó su imagen y quiso actualizar el equipamiento a la vez: una flota de equipo unificada para entrenamiento y competición, sin piezas sueltas de existencias que no coinciden.',
      ],
      industry: 'Clubes y equipos de remo',
      requirement: '25 tablas de entrenamiento de marca con el nombre, los colores y el logo del club, más accesorios de repuesto.',
      challenge:
        'La flota existente era desigual y sin marca; el presupuesto era limitado y el crecimiento futuro necesitaba existencias que coincidieran perfectamente.',
      solution:
        'Cada tabla lleva la marca del club, precios de flota por volumen, y accesorios y guía de reparación para prolongar la vida de las tablas.',
      product: 'SUP de equipo personalizados: plataformas de entrenamiento con arte del club, quillas de repuesto y kit de reparación.',
      process: [
        { title: 'Incorporación del club', body: 'Número de miembros, tipos de actividad y equipamiento actual.' },
        { title: 'Selección de tablas', body: 'Plataformas de entrenamiento e iniciación ajustadas al programa del club.' },
        { title: 'Impresión de marca', body: 'Nombre, colores y logo del club en toda la flota.' },
        { title: 'Entrega y crecimiento', body: 'Flota y accesorios entregados; ampliación con reordenes idénticos.' },
      ],
      result: 'Los miembros entrenaron con equipamiento de marca uniforme y el club amplió la flota al año siguiente con un reorden de calidad idéntica.',
      outcome: 'Flota unificada, expansión coherente con reordenes.',
      tags: ['Marca del club', 'Precio por volumen de flota', 'Soporte de accesorios'],
    },
    {
      slug: 'school-program-fleet',
      navLabel: 'Flota para programa escolar',
      metaTitle: 'Programa de SUP escolar | Flota de iniciación — SUPsfactory',
      metaDescription:
        'Cómo una escuela lanzó una optativa de remo con 15 tablas de iniciación y multiusuario: un equipamiento priorizado por la seguridad, pensado para la enseñanza.',
      kicker: 'Proyecto escolar',
      h1: 'Lanzamiento de programa escolar — una flota hecha para enseñar',
      intro: [
        'Una escuela abrió una optativa de remo y necesitaba equipamiento estable y seguro para principiantes, cantidades que encajaran con el tamaño de las clases y una gestión sencilla con poco personal.',
      ],
      industry: 'Educación y programas juveniles',
      requirement: 'Una flota de iniciación para el tamaño de las clases, con tablas multiusuario para las primeras lecciones.',
      challenge:
        'Niveles de habilidad mixtos, necesidades de seguridad estrictas, ciclos de compra escolares largos y un presupuesto que debe cubrir las futuras promociones.',
      solution:
        'Tablas de iniciación anchas, de alto volumen, y tablas multiusuario; precios de programa ajustados a las cantidades de clase y orientación de uso clara para los instructores.',
      product: 'Flota de SUP de iniciación: plataformas estables con construcción reforzada para una larga vida de programa.',
      process: [
        { title: 'Revisión del programa', body: 'Tamaño de las clases, zona acuática y configuración de instructores definieron el paquete.' },
        { title: 'Construcción del paquete', body: 'Tipos y cantidades de tabla ajustados a la enseñanza.' },
        { title: 'Aprobación de la muestra', body: 'Estabilidad y construcción verificadas en una tabla física.' },
        { title: 'Entrega y renovación', body: 'Entrega por volumen, accesorios y reordenes para las nuevas promociones.' },
      ],
      result: 'Los instructores reportaron un progreso más rápido en la primera sesión sobre las plataformas estables, y el programa renovó el equipamiento con un reorden idéntico al año siguiente.',
      outcome: 'Curva de aprendizaje más rápida, equipamiento renovado al año siguiente.',
      tags: ['Flota de iniciación', 'Lanzamiento del programa', 'Pedidos de renovación'],
    },
    {
      slug: 'distributor-line-expansion',
      navLabel: 'Ampliación de línea para distribuidor',
      metaTitle: 'Ampliación de línea SUP para distribuidor | 6 SKU — SUPsfactory',
      metaDescription:
        'Cómo un distribuidor de deportes acuáticos añadió una gama completa de SUP de gama media con seis SKU: una sola fábrica, un programa, exportado a varios mercados.',
      kicker: 'Proyecto de distribuidor',
      h1: 'Ampliación de línea para distribuidor — seis SKU, una fábrica, varios mercados',
      intro: [
        'Un distribuidor de deportes acuáticos que vendía kayaks y accesorios quiso lanzar su propia gama de SUP hinchables, sin fragmentar el suministro entre varias fábricas de tablas, remos y bombas.',
      ],
      industry: 'Distribuidores y mayoristas',
      requirement: 'Una gama de seis SKU de gama media (10\'6" a 12\'6" más kits de accesorios), con exportación a dos regiones.',
      challenge:
        'Fábricas separadas para tablas, remos y bombas implicaban branding inconsistente, tres puntos de suministro separados y ningún responsable único de calidad para las reclamaciones de garantía.',
      solution:
        'Un solo programa que cubre tablas, accesorios y embalaje de retail; kits de accesorios compartidos para reducir el inventario por SKU; y opciones de suministro ajustadas a cada mercado.',
      product: 'Seis SKU de retail de marca: plataformas SUP hinchables con kits completos en cajas impresas.',
      process: [
        { title: 'Planificación de la gama', body: 'Huecos de mercado y puntos de precio definieron los seis SKU y el contenido de los kits.' },
        { title: 'Marca unificada', body: 'Un sistema de diseño aplicado a tablas, remos, bombas y cajas.' },
        { title: 'Precio de programa', body: 'Precio por volumen sobre todo el programa, no por SKU.' },
        { title: 'Suministro a dos mercados', body: 'Condiciones de exportación estándar para la región principal y condiciones de servicio completo para el segundo mercado.' },
      ],
      result:
        'La gama se lanzó en ambos mercados en una temporada; los kits compartidos redujeron el inventario final y la garantía se gestionó a través de un único contacto de fábrica.',
      outcome: 'Lanzamiento multi-mercado en una temporada, menos inventario, garantía unificada.',
      tags: ['Programa multi-SKU', 'Kits de retail completos'],
    },
    {
      slug: 'startup-brand-zero-to-one',
      navLabel: 'Lanzamiento 0→1 de marca startup',
      metaTitle: 'Lanzamiento de marca SUP startup | Del concepto al primer lote — SUPsfactory',
      metaDescription:
        'Cómo una startup de SUP pasó del concepto a un primer lote agotado: desarrollo ODM, pedido de prueba de 10 unidades y lote de lanzamiento de 200 unidades de marca.',
      kicker: 'Proyecto de startup',
      h1: 'Lanzamiento de marca startup — del concepto a un primer lote agotado',
      intro: [
        'Dos fundadores con audiencia pero sin fábrica querían vender su propio SUP: una tabla ODM desarrollada según su especificación, con un pedido de lanzamiento que no les hundiera.',
      ],
      industry: 'Marcas SUP emergentes',
      requirement: 'Desarrollo ODM con MOQ bajo: pedido de prueba de 10 unidades para validar y 200 unidades para el lanzamiento.',
      challenge:
        'Sin equipo de diseño, sin experiencia de importación y con un primer pedido demasiado pequeño para la mayoría de las fábricas, además de una fecha de lanzamiento ligada a la temporada del hemisferio norte.',
      solution:
        'Desarrollo ODM desde su concepto sobre una plataforma probada, pedido de prueba de 10 unidades que validó producto y embalaje de punta a punta, y pedido de lanzamiento de 200 unidades con moldes en propiedad de la marca.',
      product: 'SUP hinchable ODM de marca: arte de cubierta personalizado, embalaje y caja lista para retail.',
      process: [
        { title: 'Llamada de concepto', body: 'Rider objetivo, punto de precio y fecha de lanzamiento fijaron la plataforma base.' },
        { title: 'Pedido de prueba', body: '10 unidades validaron producto y embalaje.' },
        { title: 'Pedido de lanzamiento', body: '200 unidades producidas con el arte y la caja verificados.' },
        { title: 'Camino de escalado', body: 'Moldes en propiedad de la marca; reordenes con mejor precio.' },
      ],
      result:
        'El primer lote se agotó a las pocas semanas de empezar la temporada; los comentarios del pedido de prueba corrigieron un problema de embalaje antes de la gran producción.',
      outcome: 'Lote de lanzamiento agotado, embalaje corregido antes del escalado, reorden previsto.',
      tags: ['Desarrollo ODM', 'Prueba con MOQ bajo', 'Planificación de temporada'],
    },
    {
      slug: 'rental-fleet-multi-site',
      navLabel: 'Flota de alquiler multi-ubicación',
      metaTitle: 'Expansión de flota de alquiler | 200 tablas, 3 sedes — SUPsfactory',
      metaDescription:
        'Cómo un operador de alquiler multi-ubicación sustituyó stock mixto por 200 tablas uniformes en tres sedes: precio de flota, renovación por temporada y suministro de recambios.',
      kicker: 'Proyecto de alquiler',
      h1: 'Expansión de flota de alquiler — 200 tablas uniformes en tres sedes',
      intro: [
        'Un operador de alquiler con tres puntos junto al agua necesitaba una flota uniforme en lugar de stock mixto: la misma tabla en cada sede, con precio por volumen de flota.',
      ],
      industry: 'Operadores de flotas de alquiler',
      requirement: '200 tablas de grado alquiler repartidas en tres sedes, con renovación por temporada y recambios reparables en campo.',
      challenge:
        'El stock mixto y envejecido complicaba reparaciones y precios; el uso intensivo exige construcción reforzada y el almacenamiento fuera de temporada está dividido en tres sedes.',
      solution:
        'Una única plataforma de grado alquiler en todas las sedes con rails reforzados y materiales anti-UV, precio de flota sobre las 200 unidades y kit de recambios con guía de reparación por sede.',
      product: 'SUP hinchable de grado alquiler: plataforma polivalente de 11\' con construcción reforzada y kits de reparación.',
      process: [
        { title: 'Auditoría de flota', body: 'Volumen por sede y curvas de uso definieron el reparto entre ubicaciones.' },
        { title: 'Especificación uniforme', body: 'Una misma tabla en todas partes: reparaciones, precios y formación más simples.' },
        { title: 'Precio de flota', body: 'Descuento por volumen sobre el pedido combinado de 200 tablas.' },
        { title: 'Recambios y renovación', body: 'Kits de recambios por sede y un ciclo de renovación estacional definido.' },
      ],
      result:
        'La flota uniforme eliminó la confusión de reparaciones por sede, el pedido combinado desbloqueó el precio de flota y el programa de 200 tablas se convirtió en la base de la renovación estacional.',
      outcome: 'Operaciones uniformes, menor coste unitario, ciclo estacional repetible.',
      tags: ['Flota multi-sede', 'Construcción de grado alquiler', 'Renovación estacional'],
    },
  ],
}

export function getProject(locale: Locale, slug: string): ProjectData | undefined {
  return projects[locale].find((p) => p.slug === slug)
}

export interface ProjectsMeta {
  metaTitle: string
  metaDescription: string
  h1: string
}

export const projectsMeta: Localized<ProjectsMeta> = {
  en: {
    metaTitle: 'SUP Development Projects & Case Studies | SUPsfactory',
    metaDescription:
      'Real SUP manufacturing projects: how resorts, brands, clubs and schools turned product requirements into finished paddle boards with SUPsfactory.',
    h1: 'Projects — How We Develop SUP Products With Clients',
  },
  es: {
    metaTitle: 'Proyectos y casos de desarrollo de producto SUP | SUPsfactory',
    metaDescription:
      'Proyectos reales de fabricación SUP: cómo resorts, marcas, clubes y escuelas convirtieron requisitos de producto en tablas de remo terminadas con SUPsfactory.',
    h1: 'Proyectos — cómo desarrollamos productos SUP con los clientes',
  },
}
