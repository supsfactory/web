export interface GlossaryEntry {
  term: string
  short: string
  locale: string
}

export const GLOSSARY: GlossaryEntry[] = [
  { term: 'OEM', short: 'Original Equipment Manufacturer — we manufacture to your approved specification; you own the design, moulds and intellectual property.', locale: 'en' },
  { term: 'ODM', short: 'Original Design Manufacturer — our engineering team develops the board from your brief (concept, performance target or platform adaptation); you approve before production.', locale: 'en' },
  { term: 'Private label', short: 'Your brand, graphics and packaging on an existing validated platform — no mould development, no structural changes. Fastest route from concept to delivery.', locale: 'en' },
  { term: 'Co-branding', short: 'Small-batch production (5–10 pcs) applying your logo to an existing platform with minimal customization.', locale: 'en' },
  { term: 'Drop-stitch', short: 'The internal structure connecting the top and bottom PVC layers with thousands of polyester threads, allowing an inflatable board to become rigid under pressure (12–15 PSI).', locale: 'en' },
  { term: 'Fusion', short: 'A construction method where the drop-stitch core and outer PVC layer are heat-fused without glue, reducing weight and improving durability.', locale: 'en' },
  { term: 'RF welding', short: 'Radio-frequency welding — the primary seam-sealing method for PVC/Hypalon inflatable products. Uses electromagnetic energy to create molecular bonds.', locale: 'en' },
  { term: 'PSI hold test', short: 'Pressure hold test — inflating the board to 18.0 PSI and monitoring for 24 hours. A pressure drop >0.50 PSI means auto-reject.', locale: 'en' },
  { term: 'Golden sample', short: 'The approved reference sample that sets the standard for mass production. All subsequent boards are compared to this benchmark.', locale: 'en' },
  { term: 'BSCI', short: 'Business Social Compliance Initiative — a social responsibility audit standard by amfori, covering labor rights, safety and ethics at the manufacturing facility.', locale: 'en' },
  { term: 'MOQ', short: 'Minimum Order Quantity — confirmed after specification review. Tiered: 5–10 co-branding, 20–50 pilot, 90–100+ standard volume per approved configuration.', locale: 'en' },
  { term: 'Material roll', short: 'A 150-meter roll of drop-stitch fabric. Board yield varies by size and nesting layout. MOQ is quoted per approved configuration, not per fixed roll count.', locale: 'en' },
  { term: 'EVA deck pad', short: 'Ethylene-vinyl acetate foam traction pad on the board deck. Custom-cut to your design with logo, color blocks and texture patterns.', locale: 'en' },
  { term: '150 m roll', short: 'Standard drop-stitch fabric roll length. Board yield varies by dimensions and nesting. Each SKU/colorway requires a separate roll.', locale: 'en' },

  { term: 'OEM', short: 'Fabricante de Equipo Original — fabricamos según tu especificación aprobada; tú eres propietario del diseño, los moldes y la propiedad intelectual.', locale: 'es' },
  { term: 'ODM', short: 'Fabricante de Diseño Original — nuestro equipo de ingeniería desarrolla la tabla a partir de tu brief (concepto, objetivo de rendimiento o adaptación de plataforma); tú apruebas antes de la producción.', locale: 'es' },
  { term: 'Marca privada', short: 'Tu marca, gráficos y embalaje sobre una plataforma validada existente — sin desarrollo de molde, sin cambios estructurales. La vía más rápida del concepto a la entrega.', locale: 'es' },
  { term: 'Drop-stitch', short: 'Estructura interna que conecta las capas superior e inferior de PVC con miles de hilos de poliéster, permitiendo que una tabla inflable se vuelva rígida bajo presión (12–15 PSI).', locale: 'es' },
  { term: 'Fusión', short: 'Método de construcción donde el núcleo drop-stitch y la capa exterior de PVC se fusionan por calor sin pegamento, reduciendo peso y mejorando durabilidad.', locale: 'es' },
  { term: 'Soldadura RF', short: 'Soldadura por radiofrecuencia — el método principal de sellado de costuras para productos inflables de PVC/Hypalon.', locale: 'es' },
  { term: 'Prueba de presión', short: 'Prueba de retención de presión — inflar la tabla a 18.0 PSI y monitorear 24 horas. Una caída >0.50 PSI significa rechazo automático.', locale: 'es' },
  { term: 'MOQ', short: 'Cantidad Mínima de Pedido — el menor número de unidades aceptadas por tirada de producción. Escalonado: 5–10 co-branding, 20–50 piloto, 90–100+ volumen.', locale: 'es' },
]
