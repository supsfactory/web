import type { Localized } from './content'
import { FACTS, MOQ_SHORT } from './facts'

/**
 * B2B procurement profiles for the series platform pages (/products/{series}).
 *
 * Backed by the category engineering & sourcing matrix (Qingdao Vatrad Group,
 * SPEC-CAT-2026-V1): dimensions, construction, capacity/PSI and buyer fit per
 * platform. MOQ / lead-time figures stay aligned with FACTS (single source of
 * truth); commercial wording follows the site's RFQ triage guidance.
 */

export interface ProcurementRow {
  label: string
  value: string
}

export interface ProcurementProfile {
  bestFor: string
  sizes: string
  construction: string
  customization: string
  moq: string
  leadTime: string
  specRows: ProcurementRow[]
  keyQuestions: string[]
}

export const procurementProfiles: Localized<Record<string, ProcurementProfile>> = {
  en: {
    'all-around': {
      bestFor: 'Entry-level retail, resorts & rental programs',
      sizes: "10'0\"–11'6\" · 31\"–34\" wide · 120/150 mm",
      construction: 'Single-layer fusion or MSL double-layer drop-stitch',
      customization: 'Graphics, EVA, accessories & retail packaging',
      moq: `From ${MOQ_SHORT.standardRun} pcs per project — trial runs from ${MOQ_SHORT.trialStandard}`,
      leadTime: `Samples in ${FACTS.sampleTime} · production in ${FACTS.leadTime} after confirmed PO and deposit`,
      specRows: [
        { label: 'Use scenario', value: 'Entry-level retail lines, resort & rental programs, DTC e-commerce' },
        { label: 'Available sizes', value: "10'0\"–11'6\" × 31\"–34\" × 120/150 mm" },
        { label: 'Construction', value: 'Single-layer fusion / MSL double-layer drop-stitch' },
        { label: 'Rider weight', value: '60–110 kg optimal' },
        { label: 'Max payload', value: '140 kg' },
        { label: 'Recommended / max pressure', value: '15.0 / 18.0 PSI' },
        { label: 'Fin system', value: 'US box / slide-in options' },
        { label: 'Standard package', value: 'Pump, paddle, backpack, fin, leash, repair kit' },
      ],
      keyQuestions: [
        'Target retail level and rider profile',
        'Single-user or family/duo use',
        'Standard or full accessory kit',
      ],
    },
    race: {
      bestFor: 'Racing clubs, training academies & performance brands',
      sizes: "12'6\"–14'0\" · 24\"–27\" wide · 150 mm",
      construction: 'Ultra-stiff linear woven drop-stitch + carbon stringer',
      customization: 'Race layup, width, fin system & club graphics',
      moq: `From ${MOQ_SHORT.standardRun} pcs per project — trial runs from ${MOQ_SHORT.trialStandard}`,
      leadTime: `Samples in ${FACTS.sampleTime} · production in ${FACTS.leadTime} after confirmed PO and deposit`,
      specRows: [
        { label: 'Use scenario', value: 'Racing clubs, athletic training academies, performance brands' },
        { label: 'Available sizes', value: "12'6\"–14'0\" × 24\"–27\" × 150 mm" },
        { label: 'Construction', value: 'Ultra-stiff linear woven + carbon stringer reinforcement' },
        { label: 'Rider weight', value: '65–95 kg optimal' },
        { label: 'Max payload', value: '120 kg' },
        { label: 'Recommended / max pressure', value: '18.0 / 22.0 PSI' },
        { label: 'Fin system', value: 'Race fin / US box / click-fin options' },
        { label: 'Standard package', value: 'Pump, race paddle, backpack, fin, repair kit' },
      ],
      keyQuestions: [
        "12'6\" or 14' platform",
        'Target width and board weight',
        'Fin system and racing class',
        'Club, competition or retail use',
      ],
    },
    surf: {
      bestFor: 'Surf brands, surf schools & hybrid product lines',
      sizes: "8'6\"–10'6\" · 30\"–34\" wide",
      construction: 'Wave-specific shaping, reinforced rails & raised rocker',
      customization: 'Rocker, rails, deck graphics & soft-top options',
      moq: `From ${MOQ_SHORT.standardRun} pcs per project — trial runs from ${MOQ_SHORT.trialStandard}`,
      leadTime: `Samples in ${FACTS.sampleTime} · production in ${FACTS.leadTime} after confirmed PO and deposit`,
      specRows: [
        { label: 'Use scenario', value: 'Wave riding, surf schools, hybrid retail lines' },
        { label: 'Available sizes', value: "8'6\"–10'6\" × 30\"–34\" wide" },
        { label: 'Construction', value: 'Wave-specific shaping with reinforced rails' },
        { label: 'Fin system', value: 'US box / fixed fin options' },
        { label: 'Standard package', value: 'Pump, paddle, backpack, fin, repair kit' },
      ],
      keyQuestions: [
        'Target rider weight and wave type',
        'Soft-top style or performance layup',
        'Mixed fleet with other platforms',
      ],
    },
    touring: {
      bestFor: 'Expedition brands, touring fleets & premium retail lines',
      sizes: "11'6\"–12'6\" · 30\"–32\" wide · 150 mm",
      construction: 'Woven drop-stitch + reinforced double rail tape',
      customization: 'Cargo bungees, mounting points, graphics & accessories',
      moq: `From ${MOQ_SHORT.standardRun} pcs per project — trial runs from ${MOQ_SHORT.trialStandard}`,
      leadTime: `Samples in ${FACTS.sampleTime} · production in ${FACTS.leadTime} after confirmed PO and deposit`,
      specRows: [
        { label: 'Use scenario', value: 'Long-distance touring, expedition programs, premium retail' },
        { label: 'Available sizes', value: "11'6\"–12'6\" × 30\"–32\" × 150 mm" },
        { label: 'Construction', value: 'Woven drop-stitch + reinforced double rail tape' },
        { label: 'Rider weight', value: '75–130 kg optimal' },
        { label: 'Max payload', value: '160 kg' },
        { label: 'Recommended / max pressure', value: '15.0 / 20.0 PSI' },
        { label: 'Fin system', value: 'US box / slide-in options' },
        { label: 'Standard package', value: 'Pump, paddle, backpack, fin, leash, repair kit' },
      ],
      keyQuestions: [
        'Volume and cargo capacity needs',
        'Front/rear bungee and mounting points',
        'Long-distance cruise positioning and target board length',
      ],
    },
    yoga: {
      bestFor: 'Water fitness studios, resort wellness & SUP yoga fleets',
      sizes: "10'8\"–11'0\" · 34\"–36\" wide · 150 mm",
      construction: 'Wide stable platform + full-deck embossed EVA traction',
      customization: 'EVA coverage, artwork, anchors & accessory kit',
      moq: `From ${MOQ_SHORT.standardRun} pcs per project — trial runs from ${MOQ_SHORT.trialStandard}`,
      leadTime: `Samples in ${FACTS.sampleTime} · production in ${FACTS.leadTime} after confirmed PO and deposit`,
      specRows: [
        { label: 'Use scenario', value: 'Water fitness studios, resort wellness retreats, SUP yoga fleets' },
        { label: 'Available sizes', value: "10'8\"–11'0\" × 34\"–36\" × 150 mm" },
        { label: 'Construction', value: 'Wide stable platform + full-deck embossed EVA traction' },
        { label: 'Rider weight', value: '50–120 kg optimal' },
        { label: 'Max payload', value: '150 kg' },
        { label: 'Recommended / max pressure', value: '15.0 / 18.0 PSI' },
        { label: 'Standard package', value: 'Pump, paddle, backpack, fin, repair kit' },
      ],
      keyQuestions: [
        'EVA coverage and anchor points',
        'Group class quantity',
        'Commercial use frequency',
      ],
    },
    whitewater: {
      bestFor: 'Lifestyle & designer brands, boutique retail',
      sizes: "10'6\"–11'6\" · 32\"–34\" wide",
      construction: 'Project-specific drop-stitch & PVC with embossing options',
      customization: 'Full-board art, embossing, EVA piecing & coordinated accessories',
      moq: `From ${MOQ_SHORT.standardRun} pcs per project — trial runs from ${MOQ_SHORT.trialStandard}`,
      leadTime: `Samples in ${FACTS.sampleTime} · production in ${FACTS.leadTime} after confirmed PO and deposit`,
      specRows: [
        { label: 'Use scenario', value: 'Designer editions, lifestyle retail, boutique travel programs' },
        { label: 'Available sizes', value: "10'6\"–11'6\" × 32\"–34\" wide" },
        { label: 'Construction', value: 'Project-specific drop-stitch & PVC, mechanical embossing options' },
        { label: 'Fin system', value: 'US box / slide-in options' },
        { label: 'Standard package', value: 'Pump, paddle, backpack, fin, repair kit' },
      ],
      keyQuestions: [
        'Artwork complexity and printing method',
        'Coordinated accessory kit',
        'Retail packaging style',
      ],
    },
    fishing: {
      bestFor: 'Angling brands, fishing outfitters & sporting shops',
      sizes: "11'6\"–12'0\" · 34\"–38\" wide · 150 mm",
      construction: 'Heavy-duty dual-layer + multiple D-rings & accessory mounts',
      customization: 'Seat, cooler and rod-holder integration, D-ring layouts',
      moq: `From ${MOQ_SHORT.standardRun} pcs per project — trial runs from ${MOQ_SHORT.trialStandard}`,
      leadTime: `Samples in ${FACTS.sampleTime} · production in ${FACTS.leadTime} after confirmed PO and deposit`,
      specRows: [
        { label: 'Use scenario', value: 'Angling equipment brands, fishing outfitters, outdoor sporting shops' },
        { label: 'Available sizes', value: "11'6\"–12'0\" × 34\"–38\" × 150 mm" },
        { label: 'Construction', value: 'Heavy-duty dual-layer + multiple D-rings & accessory mounts' },
        { label: 'Rider weight', value: '80–150 kg optimal' },
        { label: 'Max payload', value: '200 kg' },
        { label: 'Recommended / max pressure', value: '15.0 / 18.0 PSI' },
        { label: 'Standard package', value: 'Pump, paddle, backpack, fin, repair kit' },
      ],
      keyQuestions: [
        'Seat, cooler and rod-holder integration',
        'D-ring / rail layout and payload needs',
        'Standing stability target',
      ],
    },
    kids: {
      bestFor: 'Youth paddling clubs, schools & family retail brands',
      sizes: "8'0\"–9'6\" · 26\"–28\" wide · 100/120 mm",
      construction: 'Lightweight drop-stitch + high-visibility safety graphics',
      customization: 'Age-specific sizing, visibility colorways & paddle length',
      moq: `From ${MOQ_SHORT.standardRun} pcs per project — trial runs from ${MOQ_SHORT.trialStandard}`,
      leadTime: `Samples in ${FACTS.sampleTime} · production in ${FACTS.leadTime} after confirmed PO and deposit`,
      specRows: [
        { label: 'Use scenario', value: 'Youth paddling clubs, school physical training, family retail' },
        { label: 'Available sizes', value: "8'0\"–9'6\" × 26\"–28\" × 100/120 mm" },
        { label: 'Construction', value: 'Lightweight drop-stitch + high-visibility safety graphics' },
        { label: 'Rider weight', value: '30–65 kg optimal' },
        { label: 'Max payload', value: '80 kg' },
        { label: 'Recommended / max pressure', value: '12.0 / 15.0 PSI' },
        { label: 'Standard package', value: 'Pump, kids paddle, backpack, fin, repair kit' },
      ],
      keyQuestions: [
        'Age range and board weight target',
        'Visibility colorway and matching paddle length',
        'School or club program volume',
      ],
    },
    multi: {
      bestFor: 'Team-building organizers, water parks & commercial tour operators',
      sizes: "15'0\"–18'0\" · 50\"–60\" wide · 200 mm",
      construction: 'Heavy-duty multi-chamber woven drop-stitch, dual valves',
      customization: 'Fleet numbering, logo placement, handles & D-ring layouts',
      moq: `From ${MOQ_SHORT.standardRun} pcs per project — trial runs from ${MOQ_SHORT.trialStandard}`,
      leadTime: `Samples in ${FACTS.sampleTime} · production in ${FACTS.leadTime} after confirmed PO and deposit`,
      specRows: [
        { label: 'Use scenario', value: 'Team-building organizers, water parks, commercial tour operators' },
        { label: 'Available sizes', value: "15'0\"–18'0\" × 50\"–60\" × 200 mm" },
        { label: 'Construction', value: 'Heavy-duty multi-chamber woven drop-stitch, dual valves' },
        { label: 'Crew size', value: '4–8 riders' },
        { label: 'Max payload', value: '650 kg' },
        { label: 'Recommended / max pressure', value: '15.0 / 18.0 PSI' },
        { label: 'Standard package', value: 'Pump(s), paddles, backpack(s), repair kit' },
      ],
      keyQuestions: [
        'Number of riders and total payload',
        'Operational scenario and storage conditions',
        'Fleet numbering and branding',
      ],
    },
  },
  es: {
    'all-around': {
      bestFor: 'Retail de entrada, resorts y programas de alquiler',
      sizes: "10'0\"–11'6\" · 31\"–34\" ancho · 120/150 mm",
      construction: 'Drop-stitch de capa única fusionada o MSL doble capa',
      customization: 'Gráficos, EVA, accesorios y embalaje minorista',
      moq: `Desde ${MOQ_SHORT.standardRun} uds. por proyecto — pedidos de prueba desde ${MOQ_SHORT.trialStandard}`,
      leadTime: `Muestras en ${FACTS.sampleTime} · producción en ${FACTS.leadTime} tras confirmar PO y depósito`,
      specRows: [
        { label: 'Escenario de uso', value: 'Líneas retail de entrada, programas de resort y alquiler, e-commerce DTC' },
        { label: 'Tamaños disponibles', value: "10'0\"–11'6\" × 31\"–34\" × 120/150 mm" },
        { label: 'Construcción', value: 'Drop-stitch de capa única fusionada / MSL doble capa' },
        { label: 'Peso del rider', value: '60–110 kg óptimo' },
        { label: 'Carga máxima', value: '140 kg' },
        { label: 'Presión recomendada / máxima', value: '15,0 / 18,0 PSI' },
        { label: 'Sistema de aletas', value: 'Caja US / opciones deslizantes' },
        { label: 'Paquete estándar', value: 'Bomba, pala, mochila, aleta, leash, kit de reparación' },
      ],
      keyQuestions: [
        'Nivel retail objetivo y perfil del rider',
        'Uso individual o familiar/de dos',
        'Kit de accesorios estándar o completo',
      ],
    },
    race: {
      bestFor: 'Clubes de competición, academias de entrenamiento y marcas de rendimiento',
      sizes: "12'6\"–14'0\" · 24\"–27\" ancho · 150 mm",
      construction: 'Drop-stitch woven lineal ultra rígido + refuerzo de carbono',
      customization: 'Layup de competición, ancho, sistema de aletas y gráficos de club',
      moq: `Desde ${MOQ_SHORT.standardRun} uds. por proyecto — pedidos de prueba desde ${MOQ_SHORT.trialStandard}`,
      leadTime: `Muestras en ${FACTS.sampleTime} · producción en ${FACTS.leadTime} tras confirmar PO y depósito`,
      specRows: [
        { label: 'Escenario de uso', value: 'Clubes de competición, academias de entrenamiento, marcas de rendimiento' },
        { label: 'Tamaños disponibles', value: "12'6\"–14'0\" × 24\"–27\" × 150 mm" },
        { label: 'Construcción', value: 'Woven lineal ultra rígido + refuerzo de stringer de carbono' },
        { label: 'Peso del rider', value: '65–95 kg óptimo' },
        { label: 'Carga máxima', value: '120 kg' },
        { label: 'Presión recomendada / máxima', value: '18,0 / 22,0 PSI' },
        { label: 'Sistema de aletas', value: 'Aleta de competición / caja US / click-fin' },
        { label: 'Paquete estándar', value: 'Bomba, pala de competición, mochila, aleta, kit de reparación' },
      ],
      keyQuestions: [
        'Plataforma 12′6″ o 14′',
        'Ancho y peso de tabla objetivo',
        'Sistema de aletas y clase de competición',
        'Uso en club, competición o retail',
      ],
    },
    surf: {
      bestFor: 'Marcas de surf, escuelas de surf y líneas híbridas',
      sizes: "8'6\"–10'6\" · 30\"–34\" ancho",
      construction: 'Formas específicas de ola, rails reforzados y rocker elevado',
      customization: 'Rocker, rails, gráficos de cubierta y opciones soft-top',
      moq: `Desde ${MOQ_SHORT.standardRun} uds. por proyecto — pedidos de prueba desde ${MOQ_SHORT.trialStandard}`,
      leadTime: `Muestras en ${FACTS.sampleTime} · producción en ${FACTS.leadTime} tras confirmar PO y depósito`,
      specRows: [
        { label: 'Escenario de uso', value: 'Surf de olas, escuelas de surf, líneas retail híbridas' },
        { label: 'Tamaños disponibles', value: "8'6\"–10'6\" × 30\"–34\" ancho" },
        { label: 'Construcción', value: 'Formas específicas de ola con rails reforzados' },
        { label: 'Sistema de aletas', value: 'Caja US / opciones de aleta fija' },
        { label: 'Paquete estándar', value: 'Bomba, pala, mochila, aleta, kit de reparación' },
      ],
      keyQuestions: [
        'Peso del rider objetivo y tipo de ola',
        'Estilo soft-top o layup de rendimiento',
        'Flota mixta con otras plataformas',
      ],
    },
    touring: {
      bestFor: 'Marcas de expedición, flotas de travesía y líneas retail premium',
      sizes: "11'6\"–12'6\" · 30\"–32\" ancho · 150 mm",
      construction: 'Drop-stitch woven + cinta de rail doble reforzada',
      customization: 'Bungees de carga, puntos de montaje, gráficos y accesorios',
      moq: `Desde ${MOQ_SHORT.standardRun} uds. por proyecto — pedidos de prueba desde ${MOQ_SHORT.trialStandard}`,
      leadTime: `Muestras en ${FACTS.sampleTime} · producción en ${FACTS.leadTime} tras confirmar PO y depósito`,
      specRows: [
        { label: 'Escenario de uso', value: 'Travesías de larga distancia, programas de expedición, retail premium' },
        { label: 'Tamaños disponibles', value: "11'6\"–12'6\" × 30\"–32\" × 150 mm" },
        { label: 'Construcción', value: 'Drop-stitch woven + cinta de rail doble reforzada' },
        { label: 'Peso del rider', value: '75–130 kg óptimo' },
        { label: 'Carga máxima', value: '160 kg' },
        { label: 'Presión recomendada / máxima', value: '15,0 / 20,0 PSI' },
        { label: 'Sistema de aletas', value: 'Caja US / opciones deslizantes' },
        { label: 'Paquete estándar', value: 'Bomba, pala, mochila, aleta, leash, kit de reparación' },
      ],
      keyQuestions: [
        'Necesidades de volumen y capacidad de carga',
        'Bungees delantero/trasero y puntos de montaje',
        'Posicionamiento de crucero de larga distancia y largo de tabla objetivo',
      ],
    },
    yoga: {
      bestFor: 'Estudios de fitness acuático, wellness de resort y flotas de SUP yoga',
      sizes: "10'8\"–11'0\" · 34\"–36\" ancho · 150 mm",
      construction: 'Plataforma estable ancha + tracción EVA grabada en toda la cubierta',
      customization: 'Cobertura EVA, arte, anclas y kit de accesorios',
      moq: `Desde ${MOQ_SHORT.standardRun} uds. por proyecto — pedidos de prueba desde ${MOQ_SHORT.trialStandard}`,
      leadTime: `Muestras en ${FACTS.sampleTime} · producción en ${FACTS.leadTime} tras confirmar PO y depósito`,
      specRows: [
        { label: 'Escenario de uso', value: 'Estudios de fitness acuático, wellness de resort, flotas de SUP yoga' },
        { label: 'Tamaños disponibles', value: "10'8\"–11'0\" × 34\"–36\" × 150 mm" },
        { label: 'Construcción', value: 'Plataforma estable ancha + tracción EVA grabada en toda la cubierta' },
        { label: 'Peso del rider', value: '50–120 kg óptimo' },
        { label: 'Carga máxima', value: '150 kg' },
        { label: 'Presión recomendada / máxima', value: '15,0 / 18,0 PSI' },
        { label: 'Paquete estándar', value: 'Bomba, pala, mochila, aleta, kit de reparación' },
      ],
      keyQuestions: [
        'Cobertura EVA y puntos de anclaje',
        'Cantidad de clases grupales',
        'Frecuencia de uso comercial',
      ],
    },
    whitewater: {
      bestFor: 'Marcas de estilo de vida y diseño, retail boutique',
      sizes: "10'6\"–11'6\" · 32\"–34\" ancho",
      construction: 'Drop-stitch y PVC específicos del proyecto con opciones de gofrado',
      customization: 'Arte de toda la tabla, gofrado, piezas EVA y accesorios coordinados',
      moq: `Desde ${MOQ_SHORT.standardRun} uds. por proyecto — pedidos de prueba desde ${MOQ_SHORT.trialStandard}`,
      leadTime: `Muestras en ${FACTS.sampleTime} · producción en ${FACTS.leadTime} tras confirmar PO y depósito`,
      specRows: [
        { label: 'Escenario de uso', value: 'Ediciones de diseño, retail de estilo de vida, programas boutique' },
        { label: 'Tamaños disponibles', value: "10'6\"–11'6\" × 32\"–34\" ancho" },
        { label: 'Construcción', value: 'Drop-stitch y PVC específicos del proyecto, opciones de gofrado mecánico' },
        { label: 'Sistema de aletas', value: 'Caja US / opciones deslizantes' },
        { label: 'Paquete estándar', value: 'Bomba, pala, mochila, aleta, kit de reparación' },
      ],
      keyQuestions: [
        'Complejidad del arte y método de impresión',
        'Kit de accesorios coordinados',
        'Estilo de embalaje minorista',
      ],
    },
    fishing: {
      bestFor: 'Marcas de pesca, outfitters y tiendas deportivas',
      sizes: "11'6\"–12'0\" · 34\"–38\" ancho · 150 mm",
      construction: 'Doble capa resistente + múltiples D-rings y montajes de accesorios',
      customization: 'Integración de asiento, nevera y portacañas, distribución de D-rings',
      moq: `Desde ${MOQ_SHORT.standardRun} uds. por proyecto — pedidos de prueba desde ${MOQ_SHORT.trialStandard}`,
      leadTime: `Muestras en ${FACTS.sampleTime} · producción en ${FACTS.leadTime} tras confirmar PO y depósito`,
      specRows: [
        { label: 'Escenario de uso', value: 'Marcas de equipos de pesca, outfitters, tiendas deportivas' },
        { label: 'Tamaños disponibles', value: "11'6\"–12'0\" × 34\"–38\" × 150 mm" },
        { label: 'Construcción', value: 'Doble capa resistente + múltiples D-rings y montajes de accesorios' },
        { label: 'Peso del rider', value: '80–150 kg óptimo' },
        { label: 'Carga máxima', value: '200 kg' },
        { label: 'Presión recomendada / máxima', value: '15,0 / 18,0 PSI' },
        { label: 'Paquete estándar', value: 'Bomba, pala, mochila, aleta, kit de reparación' },
      ],
      keyQuestions: [
        'Integración de asiento, nevera y portacañas',
        'Distribución de D-rings / rails y necesidades de carga',
        'Objetivo de estabilidad de pie',
      ],
    },
    kids: {
      bestFor: 'Clubes de remo juvenil, escuelas y marcas retail familiares',
      sizes: "8'0\"–9'6\" · 26\"–28\" ancho · 100/120 mm",
      construction: 'Drop-stitch ligero + gráficos de seguridad de alta visibilidad',
      customization: 'Tallas por edad, colorways visibles y longitud de pala',
      moq: `Desde ${MOQ_SHORT.standardRun} uds. por proyecto — pedidos de prueba desde ${MOQ_SHORT.trialStandard}`,
      leadTime: `Muestras en ${FACTS.sampleTime} · producción en ${FACTS.leadTime} tras confirmar PO y depósito`,
      specRows: [
        { label: 'Escenario de uso', value: 'Clubes de remo juvenil, educación física escolar, retail familiar' },
        { label: 'Tamaños disponibles', value: "8'0\"–9'6\" × 26\"–28\" × 100/120 mm" },
        { label: 'Construcción', value: 'Drop-stitch ligero + gráficos de seguridad de alta visibilidad' },
        { label: 'Peso del rider', value: '30–65 kg óptimo' },
        { label: 'Carga máxima', value: '80 kg' },
        { label: 'Presión recomendada / máxima', value: '12,0 / 15,0 PSI' },
        { label: 'Paquete estándar', value: 'Bomba, pala infantil, mochila, aleta, kit de reparación' },
      ],
      keyQuestions: [
        'Rango de edad y peso de tabla objetivo',
        'Colorway de visibilidad y longitud de pala',
        'Volumen del programa escolar o de club',
      ],
    },
    multi: {
      bestFor: 'Organizadores de team building, parques acuáticos y operadores turísticos',
      sizes: "15'0\"–18'0\" · 50\"–60\" ancho · 200 mm",
      construction: 'Drop-stitch woven multicámara resistente, válvulas dobles',
      customization: 'Numeración de flota, ubicación del logo, asas y distribución de D-rings',
      moq: `Desde ${MOQ_SHORT.standardRun} uds. por proyecto — pedidos de prueba desde ${MOQ_SHORT.trialStandard}`,
      leadTime: `Muestras en ${FACTS.sampleTime} · producción en ${FACTS.leadTime} tras confirmar PO y depósito`,
      specRows: [
        { label: 'Escenario de uso', value: 'Organizadores de team building, parques acuáticos, operadores turísticos' },
        { label: 'Tamaños disponibles', value: "15'0\"–18'0\" × 50\"–60\" × 200 mm" },
        { label: 'Construcción', value: 'Drop-stitch woven multicámara resistente, válvulas dobles' },
        { label: 'Tripulación', value: '4–8 riders' },
        { label: 'Carga máxima', value: '650 kg' },
        { label: 'Presión recomendada / máxima', value: '15,0 / 18,0 PSI' },
        { label: 'Paquete estándar', value: 'Bomba(s), palas, mochila(s), kit de reparación' },
      ],
      keyQuestions: [
        'Número de riders y carga total',
        'Escenario operativo y condiciones de almacenamiento',
        'Numeración de flota y branding',
      ],
    },
  },
}

/** Common commercial rows (MOQ / samples / pricing) for every category page. */
export const commercialRows: Localized<ProcurementRow[]> = {
  en: [
    { label: 'Sample path', value: 'Sample development available for qualified OEM/ODM projects.' },
    { label: 'Sample MOQ', value: 'Confirmed by board platform, artwork complexity and accessory set.' },
    { label: 'Volume MOQ', value: 'MOQ is confirmed per model, colorway, packaging configuration and order mix.' },
    { label: 'Pricing logic', value: 'Quotation is based on construction, size, accessory set, artwork, packaging, order quantity and delivery terms.' },
    { label: 'Sample timing', value: `Samples in ${FACTS.sampleTime} after specification, artwork and payment requirements are confirmed.` },
    { label: 'Production timing', value: `Production in ${FACTS.leadTime} after sample approval, final artwork, deposit and production scheduling are confirmed.` },
    { label: 'Packaging MOQ', value: 'Custom retail packaging may carry separate MOQ requirements.' },
    { label: 'Mixed orders', value: 'Mixed models or colorways are reviewed according to material, printing and packaging requirements.' },
    { label: 'Inspection', value: 'Third-party inspection and buyer-appointed inspection can be discussed before production release.' },
    { label: 'Commercial terms', value: 'Available terms are discussed during quotation based on project scope and order history.' },
  ],
  es: [
    { label: 'Ruta de muestras', value: 'Desarrollo de muestras disponible para proyectos OEM/ODM calificados.' },
    { label: 'MOQ de muestras', value: 'Confirmado según plataforma de tabla, complejidad del arte y conjunto de accesorios.' },
    { label: 'MOQ de volumen', value: 'El MOQ se confirma por modelo, colorway, configuración de embalaje y mezcla de pedidos.' },
    { label: 'Lógica de precios', value: 'El presupuesto se basa en construcción, tamaño, conjunto de accesorios, arte, embalaje, cantidad de pedido y condiciones comerciales.' },
    { label: 'Tiempo de muestras', value: `Muestras en ${FACTS.sampleTime} tras confirmar especificación, arte y requisitos de pago.` },
    { label: 'Tiempo de producción', value: `Producción en ${FACTS.leadTime} tras aprobación de muestra, arte final, depósito y programación de producción.` },
    { label: 'MOQ de embalaje', value: 'El embalaje minorista personalizado puede tener requisitos de MOQ independientes.' },
    { label: 'Pedidos mixtos', value: 'Modelos o colorways mixtos se revisan según requisitos de material, impresión y embalaje.' },
    { label: 'Inspección', value: 'La inspección de terceros y la inspección designada por el comprador pueden acordarse antes de la liberación de producción.' },
    { label: 'Condiciones comerciales', value: 'Las condiciones disponibles se analizan durante el presupuesto según el alcance del proyecto y el historial de pedidos.' },
  ],
}
