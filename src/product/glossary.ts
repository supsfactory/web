export interface GlossaryEntry {
  term: string
  short: string
  locale: string
}

export const GLOSSARY: GlossaryEntry[] = [
  { term: 'OEM', short: 'Original Equipment Manufacturer — we build your board to your specification; you own the design and brand.', locale: 'en' },
  { term: 'ODM', short: 'Original Design Manufacturer — we adapt a proven platform we engineer; you add your brand, colors and artwork without owning the design.', locale: 'en' },
  { term: 'Private label', short: 'A product manufactured by one company and sold under another company\'s brand name. In SUP, this means your logo, colors and packaging on our platform.', locale: 'en' },
  { term: 'Co-branding', short: 'Small-batch production (5–10 pcs) applying your logo to an existing platform with minimal customization.', locale: 'en' },
  { term: 'Drop-stitch', short: 'The internal structure connecting the top and bottom PVC layers with thousands of polyester threads, allowing an inflatable board to become rigid under pressure (12–15 PSI).', locale: 'en' },
  { term: 'Fusion', short: 'A construction method where the drop-stitch core and outer PVC layer are heat-fused without glue, reducing weight and improving durability.', locale: 'en' },
  { term: 'RF welding', short: 'Radio-frequency welding — the primary seam-sealing method for PVC/Hypalon inflatable products. Uses electromagnetic energy to create molecular bonds.', locale: 'en' },
  { term: 'PSI hold test', short: 'Pressure hold test — inflating the board to 18.0 PSI and monitoring for 24 hours. A pressure drop >0.50 PSI means auto-reject.', locale: 'en' },
  { term: 'Golden sample', short: 'The approved reference sample that sets the standard for mass production. All subsequent boards are compared to this benchmark.', locale: 'en' },
  { term: 'BSCI', short: 'Business Social Compliance Initiative — a social responsibility audit standard by amfori, covering labor rights, safety and ethics at the manufacturing facility.', locale: 'en' },
  { term: 'MOQ', short: 'Minimum Order Quantity — the smallest number of units accepted per production run. For SUPsfactory: tiered by customization level (5–10 co-branding, 20–50 pilot, 90–100+ volume).', locale: 'en' },
  { term: 'Material roll', short: 'A 150-meter roll of drop-stitch fabric. One roll yields approximately 180–220 boards depending on size. MOQ is typically quoted per roll.', locale: 'en' },
  { term: 'EVA deck pad', short: 'Ethylene-vinyl acetate foam traction pad on the board deck. Custom-cut to your design with logo, color blocks and texture patterns.', locale: 'en' },
  { term: '150 m roll', short: 'Standard drop-stitch fabric roll length. One roll produces ~180–220 boards depending on board dimensions. Each SKU/colorway requires a separate roll.', locale: 'en' },

  { term: 'OEM', short: 'Fabricante de Equipo Original — fabricamos tu tabla según tu especificación; tú eres dueño del diseño y la marca.', locale: 'es' },
  { term: 'ODM', short: 'Fabricante de Diseño Original — adaptamos una plataforma probada que ingeniamos; tú añades tu marca, colores y arte sin ser dueño del diseño.', locale: 'es' },
  { term: 'Marca privada', short: 'Un producto fabricado por una empresa y vendido bajo la marca de otra. En SUP, esto significa tu logotipo, colores y empaque en nuestra plataforma.', locale: 'es' },
  { term: 'Drop-stitch', short: 'Estructura interna que conecta las capas superior e inferior de PVC con miles de hilos de poliéster, permitiendo que una tabla inflable se vuelva rígida bajo presión (12–15 PSI).', locale: 'es' },
  { term: 'Fusión', short: 'Método de construcción donde el núcleo drop-stitch y la capa exterior de PVC se fusionan por calor sin pegamento, reduciendo peso y mejorando durabilidad.', locale: 'es' },
  { term: 'Soldadura RF', short: 'Soldadura por radiofrecuencia — el método principal de sellado de costuras para productos inflables de PVC/Hypalon.', locale: 'es' },
  { term: 'Prueba de presión', short: 'Prueba de retención de presión — inflar la tabla a 18.0 PSI y monitorear 24 horas. Una caída >0.50 PSI significa rechazo automático.', locale: 'es' },
  { term: 'MOQ', short: 'Cantidad Mínima de Pedido — el menor número de unidades aceptadas por tirada de producción. Escalonado: 5–10 co-branding, 20–50 piloto, 90–100+ volumen.', locale: 'es' },
]
