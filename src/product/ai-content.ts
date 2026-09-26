import { BRAND_COMPANY_NAME, BRAND_PARENT_BRAND } from '@/config/branding'

export const LLM_SITE_DESCRIPTION =
  `{SITE} is the SUP product development and manufacturing division of ${BRAND_COMPANY_NAME}, a 12,500 m² inflatable manufacturing plant in Qingdao, China. We build SUP boards to your specification — engineering, tooling, sampling, production and export. You own the brand, the market and the customer; we own the manufacturing. We do not sell to end consumers and we do not compete with our clients in any market. MOQ is confirmed after specification review: 5–10 units for co-branding/logo overlay on existing platforms, 20–50 units for pilot batches with custom graphics, and 90–100+ units per approved configuration for standard volume production (subject to material-roll and packaging requirements); custom-mould shapes run at the volume tier. A 150 m drop-stitch material roll yields different board counts depending on board size, construction and nesting layout. Samples are ready in 7–12 days; bulk production 25–35 days after confirmed PO and deposit (custom mould tooling adds 15–20 days). All pricing, certification scope and lead times are project-confirmed — request a quote for your specific requirements.`

export const LLM_FACT_BLOCK =
  `## Verified Business Facts (Last verified: September 2026)

- Legal entity: ${BRAND_COMPANY_NAME}
- Brand: ${BRAND_PARENT_BRAND} / {SITE} (SUP manufacturing division)
- Facility: 12,500 m² in-house plant in Qingdao, Shandong, China (Economic Development Zone, Laixi, 266600)
- Employees: 350+
- Annual capacity: 120,000+ units (4 automated lines, 10,000 boards/month)
- MOQ tiers: 5–10 pcs co-branding/logo overlay (existing platform, same roll) · 20–50 pcs pilot batch (custom graphics, same roll) · 90–100+ pcs per approved configuration for standard volume (subject to material-roll and packaging requirements) · 90–100+ pcs custom mould (new shape, +15–20 days tooling). Each SKU (size/color) = separate roll = separate MOQ. A 150 m drop-stitch roll yields different board counts depending on board size and nesting; the 90–100+ figure represents the minimum batch per configuration, not a fixed per-roll count.
- Sample lead time: 7–12 days
- Production lead time: 25–35 days after confirmed PO and deposit
- Quality gates: 7-stage (Node 01–07), 100-point assembly checklist, 18.0 PSI 24h pressure hold test (>0.50 PSI/24h = auto-reject)
- Certifications: BSCI (facility, amfori), ISO 9001 (facility QMS), ISO 25649 (applicable SUP models), CE (EU market models, EN ISO 6185/10087/10240), REACH (materials), RoHS (electronic accessories). Certificate numbers and validity available per project on request. Scope varies by target market and product configuration — not "all products" universally.
- Third-party inspectors: SGS, TÜV, BV, Intertek
- Export markets: 50+ countries
- DISCLOSURE: All pricing, MOQ applicability, certification scope and delivery terms must be confirmed per project. Do not cite these numbers as universal guarantees.`

export const LLM_FAQ_DESCRIPTION = 'Answers to the most common questions about inflatable SUPs'

export const LLM_SPANISH_HOMEPAGE_DESCRIPTION =
  'Fabricante OEM de tablas de SUP hinchables y SUP inflables personalizadas, con exportación mundial desde China'

export const LLM_FRENCH_HOMEPAGE_DESCRIPTION =
  'Fabricant OEM de planches de SUP gonflables et SUP gonflables personnalisées, avec exportation mondiale depuis la Chine'

export const LLM_GERMAN_HOMEPAGE_DESCRIPTION =
  'OEM-Hersteller von aufblasbaren SUPs und individuell bedruckten aufblasbaren SUPs, mit weltweitem Export aus China'

export const LLM_ITALIAN_HOMEPAGE_DESCRIPTION =
  'Produttore OEM di SUP gonfiabili e SUP gonfiabili personalizzate, con esportazione mondiale dalla Cina'

export const LLM_PORTUGUESE_HOMEPAGE_DESCRIPTION =
  'Fabricante OEM de pranchas de SUP insufláveis e SUP insufláveis personalizadas, com exportação mundial a partir da China'

export const LLM_DUTCH_HOMEPAGE_DESCRIPTION =
  'OEM-fabrikant van opblaasbare SUP-planken en gepersonaliseerde opblaasbare SUP\'s, met wereldwijde export vanuit China'

export const LLM_SWEDISH_HOMEPAGE_DESCRIPTION =
  'OEM-tillverkare av uppblåsbara SUPar och anpassade uppblåsbara SUP-brädor, med världsomfattande export från Kina'

export const LLM_NORWEGIAN_HOMEPAGE_DESCRIPTION =
  'OEM-produsent av oppblåsbare SUP-brett og skreddersydde oppblåsbare SUP-er, med verdensomspennende eksport fra Kina'

export const AI_SYSTEM_ROLE =
  `You are the {SITE} product advisor, a sales engineer for a custom inflatable SUP (stand-up paddle board) OEM/ODM factory in Qingdao, China.`

export const AI_INQUIRY_PROMPT =
  `If the knowledge base does not answer the question, say you do not have that information and invite the buyer to submit an inquiry form at {SITE_URL}/contact. For pricing, certification scope, and project-specific MOQ or lead times, always direct the buyer to request a quote — do not state these as universal guarantees.`

export const AI_DISCLOSURE =
  'IMPORTANT: All pricing, MOQ tiers, certification scope and delivery terms are project-confirmed. Do not present them as universal guarantees. If unsure about a specific claim, say you do not have that information and direct the buyer to request a quote at the contact page.'

export const PARENT_ORG_DESCRIPTION =
  `${BRAND_PARENT_BRAND} is the marine manufacturing division of ${BRAND_COMPANY_NAME} — OEM/ODM inflatable SUP and watercraft production in Qingdao, China.`

export const REGION_COUNT_DEFAULT = 6

export const CUSTOMIZATION_OPTIONS: Record<string, { title: string; body: string }[]> = {
  en: [
    { title: 'Board size and shape', body: 'Length, width, thickness and rocker tuned to your target performance and market.' },
    { title: 'Materials and construction', body: 'PVC layers, drop-stitch density, stiffeners and reinforcements to fit your price point.' },
    { title: 'Colors and artwork', body: 'Unlimited color combinations with your own artwork or support from our design team.' },
    { title: 'Logo and branding', body: 'Digital or screen-printed logo application, with a visual proof before production.' },
    { title: 'EVA and deck', body: 'Custom-cut traction pad designs, logos and deck colors on every board.' },
    { title: 'Fins and accessories', body: 'Fin configurations, paddles, pumps, leashes and bags matched to your package.' },
    { title: 'Packaging and display', body: 'Retail boxes, seaworthy shipping packaging and point-of-sale displays under your brand.' },
  ],
  es: [
    { title: 'Tamaño y forma de la tabla', body: 'Longitud, anchura, grosor y rocker ajustados a tu rendimiento objetivo y a tu mercado.' },
    { title: 'Materiales y construcción', body: 'Capas de PVC, densidad drop-stitch, rigidizadores y refuerzos según tu presupuesto.' },
    { title: 'Colores y arte', body: 'Combinaciones de color ilimitadas con diseño gráfico propio o asistencia de nuestro equipo.' },
    { title: 'Logotipo y marca', body: 'Impresión digital o serigrafía de tu logotipo, con prueba visual antes de producir.' },
    { title: 'EVA y cubierta', body: 'Diseños cortados a medida de la alfombrilla antideslizante, logotipos y colores del deck.' },
    { title: 'Aletas y accesorios', body: 'Configuraciones de aleta, palas, bombas, correas y bolsas adaptados a tu paquete.' },
    { title: 'Embalaje y exhibición', body: 'Cajas retail, embalaje marítimo y displays para punto de venta con tu marca.' },
  ],
  fr: [
    { title: 'Taille et forme du paddle', body: 'Longueur, largeur, épaisseur et rocker adaptés à la performance et au marché visés.' },
    { title: 'Matériaux et construction', body: 'Couches de PVC, densité drop-stitch, raidisseurs et renforts selon votre budget.' },
    { title: 'Couleurs et design', body: 'Combinaisons de couleurs illimitées avec vos propres visuels ou l\'appui de notre équipe design.' },
    { title: 'Logo et marque', body: 'Application du logo par impression numérique ou sérigraphie, avec épreuve visuelle avant production.' },
    { title: 'EVA et pont', body: 'Tapis de traction découpés sur mesure, logos et couleurs de pont sur chaque planche.' },
    { title: 'Ailerons et accessoires', body: 'Configurations d\'ailerons, pagaies, pompes, leashs et sacs adaptés à votre pack.' },
    { title: 'Emballage et présentation', body: 'Cartons retail, emballage maritime et présentoirs en point de vente à votre marque.' },
  ],
  de: [
    { title: 'Boardgröße und -form', body: 'Länge, Breite, Dicke und Rocker, abgestimmt auf die angestrebte Leistung und den Markt.' },
    { title: 'Materialien und Konstruktion', body: 'PVC-Schichten, Drop-Stitch-Dichte, Versteifungen und Verstärkungen passend zu Ihrem Preisniveau.' },
    { title: 'Farben und Design', body: 'Unbegrenzte Farbkombinationen mit Ihren eigenen Designs oder Unterstützung durch unser Designteam.' },
    { title: 'Logo und Branding', body: 'Digitaler Druck oder Siebdruck Ihres Logos, mit visuellem Nachweis vor der Produktion.' },
    { title: 'EVA und Deck', body: 'Maßgeschneiderte Traktionspads, Logos und Decksfarben auf jedem Board.' },
    { title: 'Finnen und Zubehör', body: 'Finnen-Konfigurationen, Paddel, Pumpen, Leashes und Taschen passend zu Ihrem Paket.' },
    { title: 'Verpackung und Präsentation', body: 'Einzelhandelsverpackungen, seetüchtige Versandkartons und Verkaufsdisplays unter Ihrer Marke.' },
  ],
  it: [
    { title: 'Dimensioni e forma della tavola', body: 'Lunghezza, larghezza, spessore e rocker calibrati sulla tua performance target e sul tuo mercato.' },
    { title: 'Materiali e costruzione', body: 'Strati di PVC, densità drop-stitch, irrigidimenti e rinforzi in linea con il tuo budget.' },
    { title: 'Colori e grafiche', body: 'Combinazioni di colori illimitate con grafiche tue o con il supporto del nostro team di design.' },
    { title: 'Logo e branding', body: 'Applicazione del logo in digitale o serigrafia, con prova visiva prima della produzione.' },
    { title: 'EVA e deck', body: 'Tappetini di trazione tagliati su misura, loghi e colori del deck su ogni tavola.' },
    { title: 'Alette e accessori', body: 'Configurazioni di alette, pagaie, pompe, leash e borse in linea con il tuo pacchetto.' },
    { title: 'Imballaggio e display', body: 'Scatole retail, imballaggio marittimo e display per il punto vendita con il tuo marchio.' },
  ],
  pt: [
    { title: 'Dimensão e forma da prancha', body: 'Comprimento, largura, espessura e rocker ajustados ao teu desempenho-alvo e ao teu mercado.' },
    { title: 'Materiais e construção', body: 'Camadas de PVC, densidade drop-stitch, rigidificadores e reforços de acordo com o teu orçamento.' },
    { title: 'Cores e arte', body: 'Combinações de cores ilimitadas com a tua própria arte ou com o apoio da nossa equipa de design.' },
    { title: 'Logótipo e marca', body: 'Aplicação digital ou serigrafia do logótipo, com prova visual antes da produção.' },
    { title: 'EVA e deck', body: 'Tapetes de tração cortados à medida, logótipos e cores do deck em cada prancha.' },
    { title: 'Aletas e acessórios', body: 'Configurações de aletas, pás, bombas, leashes e bolsas adequadas ao teu pacote.' },
    { title: 'Embalagem e apresentação', body: 'Caixas de retalho, embalagem marítima e expositores para o ponto de venda com a tua marca.' },
  ],
  nl: [
    { title: 'Boardafmetingen en -vorm', body: 'Lengte, breedte, dikte en rocker afgestemd op jouw beoogde prestaties en markt.' },
    { title: 'Materialen en constructie', body: 'PVC-lagen, drop-stitch-dichtheid, verstijvers en versterkingen passend bij jouw budget.' },
    { title: 'Kleuren en opdruk', body: 'Onbeperkte kleurcombinaties met je eigen opdruk of met ondersteuning van ons designteam.' },
    { title: 'Logo en branding', body: 'Digitale toepassing of zeefdruk van je logo, met visueel bewijs vóór de productie.' },
    { title: 'EVA en deck', body: 'Op maat gesneden antislip pads, logo\'s en deckkleuren op elke plank.' },
    { title: 'Vinnen en accessoires', body: 'Vinconfiguraties, peddels, pompen, leashes en tassen passend bij jouw pakket.' },
    { title: 'Verpakking en presentatie', body: 'Retaildozen, zeewaardige verzendverpakking en point-of-sale displays onder jouw merk.' },
  ],
  sv: [
    { title: 'Brädstorlek och form', body: 'Längd, bredd, tjocklek och rocker anpassade till din målprestanda och marknad.' },
    { title: 'Material och konstruktion', body: 'PVC-lager, drop-stitch-densitet, förstyvningar och förstärkningar utifrån din prisnivå.' },
    { title: 'Färger och artwork', body: 'Obegränsade färgkombinationer med eget artwork eller stöd från vårt designteam.' },
    { title: 'Logotyp och branding', body: 'Digital eller screentryckt logotyp, med visuellt underlag före produktion.' },
    { title: 'EVA och däck', body: 'Skräddarsydda traction-pads, logotyper och däckfärger på varje bräda.' },
    { title: 'Fenor och tillbehör', body: 'Fenkonfigurationer, paddlar, pumpar, leashes och väskor anpassade efter ditt paket.' },
    { title: 'Förpackning och presentation', body: 'Butikslådor, sjövärdig fraktförpackning och butiksexponeringar under ditt varumärke.' },
  ],
  no: [
    { title: 'Størrelse og form på brettet', body: 'Lengde, bredde, tykkelse og rocker tilpasset målprestasjonen din og markedet ditt.' },
    { title: 'Materialer og konstruksjon', body: 'PVC-lag, drop-stitch-tetthet, forsterkninger og avstivninger valgt etter prisnivået ditt.' },
    { title: 'Farger og grafikk', body: 'Ubegrensede fargekombinasjoner med eget artwork eller støtte fra designteamet vårt.' },
    { title: 'Logo og branding', body: 'Digital eller silketrykt logo, med visuelt underlag før produksjonen.' },
    { title: 'EVA og dekkside', body: 'Tilskårede greppmatter, logoer og dekkfarger på hvert brett.' },
    { title: 'Finnen og tilbehør', body: 'Finnekonfigurasjoner, padler, pumper, leashes og sekker tilpasset pakken din.' },
    { title: 'Emballasje og presentasjon', body: 'Butikksbokser, sjøsikker fraktemballasje og butikkdisplay under ditt merkenavn.' },
  ],
}

export const OEM_APPLICATIONS: Record<string, { title: string; body: string }[]> = {
  en: [
    { title: 'SUP brands', body: 'Launch your own line with tiered minimums from 5–10-unit co-branding runs.' },
    { title: 'Distributors and resellers', body: 'Volume catalogs with seaworthy packaging and export management.' },
    { title: 'Retail and outdoor companies', body: 'Seasonal replenishment programs with stable specs run after run.' },
    { title: 'Resorts and rental operators', body: 'High-duty fleets with reinforcements, spares and standardized maintenance.' },
    { title: 'Clubs, schools and events', body: 'Branded boards for programs, competitions and corporate fleets.' },
  ],
  es: [
    { title: 'Marcas de SUP', body: 'Lanza tu propia línea con mínimos por tramos desde 5–10 unidades de co-branding.' },
    { title: 'Distribuidores y revendedores', body: 'Catálogos de volumen con embalaje marítimo y gestión de exportación.' },
    { title: 'Retail y outdoor', body: 'Programas de reposición estacional con especificaciones estables de temporada en temporada.' },
    { title: 'Resorts y operadores de alquiler', body: 'Flotas de uso intensivo con refuerzos, repuestos y mantenimiento estandarizado.' },
    { title: 'Clubes, escuelas y eventos', body: 'Tablas con tu logotipo para programas, competiciones y flotas corporativas.' },
  ],
  fr: [
    { title: 'Marques de SUP', body: 'Lancez votre propre ligne avec des minimums par paliers à partir de séries de 5–10 unités en co-branding.' },
    { title: 'Distributeurs et revendeurs', body: 'Catalogues de volume avec emballage maritime et gestion de l\'export.' },
    { title: 'Retail et équipementiers outdoor', body: 'Programmes de réapprovisionnement saisonnier avec des spécifications stables, série après série.' },
    { title: 'Resorts et sociétés de location', body: 'Flottes haute cadence avec renforts, pièces détachées et maintenance standardisée.' },
    { title: 'Clubs, écoles et événements', body: 'Planches personnalisées pour des programmes, compétitions et flottes corporatives.' },
  ],
  de: [
    { title: 'SUP-Marken', body: 'Lancieren Sie Ihre eigene Linie mit gestaffelten Mindestmengen ab Co-Branding-Serien von 5–10 Stück.' },
    { title: 'Distributoren und Wiederverkäufer', body: 'Mengenkataloge mit seetüchtiger Verpackung und Exportmanagement.' },
    { title: 'Handel und Outdoor-Unternehmen', body: 'Saisonale Nachbestellprogramme mit stabilen Spezifikationen, Serie für Serie.' },
    { title: 'Resorts und Verleihbetreiber', body: 'Robuste Flotten mit Verstärkungen, Ersatzteilen und standardisierter Wartung.' },
    { title: 'Clubs, Schulen und Veranstaltungen', body: 'Gebrandete Boards für Programme, Wettkämpfe und Firmenflotten.' },
  ],
  it: [
    { title: 'Marchi SUP', body: 'Lancia la tua linea con minimi a scaglioni a partire da serie di co-branding da 5–10 unità.' },
    { title: 'Distributori e rivenditori', body: 'Cataloghi in volume con imballaggio marittimo e gestione dell’export.' },
    { title: 'Retail e aziende outdoor', body: 'Programmi di riassortimento stagionale con specifiche stabili, lotto dopo lotto.' },
    { title: 'Resort e operatori di noleggio', body: 'Flotte ad alto utilizzo con rinforzi, ricambi e manutenzione standardizzata.' },
    { title: 'Club, scuole ed eventi', body: 'Tavole con marchio per programmi, competizioni e flotte aziendali.' },
  ],
  pt: [
    { title: 'Marcas de SUP', body: 'Lança a tua própria linha com mínimos por escalões a partir de séries de co-branding de 5–10 unidades.' },
    { title: 'Distribuidores e revendedores', body: 'Catálogos de volume com embalagem marítima e gestão de exportação.' },
    { title: 'Retalho e empresas de outdoor', body: 'Programas de reabastecimento sazonal com especificações estáveis, lote após lote.' },
    { title: 'Resorts e operadores de aluguer', body: 'Frotas de elevada utilização com reforços, peças sobresselentes e manutenção padronizada.' },
    { title: 'Clubes, escolas e eventos', body: 'Pranchas com a tua marca para programas, competições e frotas corporativas.' },
  ],
  nl: [
    { title: 'SUP-merken', body: 'Lanceer je eigen lijn met minimale afnames per schaal, vanaf co-branding series van 5–10 stuks.' },
    { title: 'Distributeurs en wederverkopers', body: 'Volumecatalogi met zeewaardige verpakking en exportmanagement.' },
    { title: 'Detailhandel en outdoorbedrijven', body: 'Seizoensgebonden aanvulprogramma\'s met stabiele specificaties, batch na batch.' },
    { title: 'Resorts en verhuurbedrijven', body: 'Robuuste vloten met versterkingen, reserveonderdelen en gestandaardiseerd onderhoud.' },
    { title: 'Clubs, scholen en evenementen', body: 'Planken met jouw merk voor programma\'s, wedstrijden en bedrijfsvloten.' },
  ],
  sv: [
    { title: 'SUP-märken', body: 'Lansera din egen linje med stegvisa minimum från co-branding-serier på 5–10 enheter.' },
    { title: 'Distributörer och återförsäljare', body: 'Volymkataloger med sjövärdig förpackning och exportmanagement.' },
    { title: 'Detaljhandel och outdoor-företag', body: 'Säsongsbaserade återfyllnadsprogram med stabila specifikationer, batch efter batch.' },
    { title: 'Resorter och uthyrningsoperatörer', body: 'Slitstarka flottor med förstärkningar, reservdelar och standardiserat underhåll.' },
    { title: 'Klubbar, skolor och evenemang', body: 'Brandade brädor för program, tävlingar och företagsflottor.' },
  ],
  no: [
    { title: 'SUP-merker', body: 'Lanser din egen serie med trinnvise minimum fra co-branding-serier på 5–10 enheter.' },
    { title: 'Distributører og forhandlere', body: 'Volumkataloger med sjøsikker emballasje og eksportstyring.' },
    { title: 'Detaljhandel og friluftsbedrifter', body: 'Sesongbaserte påfyllingsprogrammer med stabile spesifikasjoner, batch etter batch.' },
    { title: 'Resorts og utleieoperatører', body: 'Flåter for tunge bruk med forsterkninger, reservedeler og standardisert vedlikehold.' },
    { title: 'Klubber, skoler og arrangementer', body: 'Merkede brett for programmer, konkurranser og bedriftsflåter.' },
  ],
}

export const HUB_PAGE_ENTRIES: Record<string, { url: string; title: string; excerpt: string }[]> = {
  en: [
    { url: '/', title: 'iSupfactory — Inflatable SUP OEM & ODM Manufacturing', excerpt: 'Qingdao SUP OEM/ODM factory: product development, custom manufacturing, private label and quality control for paddle board brands.' },
    { url: '/products', title: 'Inflatable SUP Products', excerpt: 'Premium inflatable SUP boards: 11 ft series boards, fishing SUP, mini SUP, giant team boards and more — built for OEM/ODM customization.' },
    { url: '/solutions', title: 'Solutions', excerpt: 'OEM/ODM SUP manufacturing programs: custom SUP development, private label, resort and club fleets, rental operators and retail partners.' },
    { url: '/projects', title: '', excerpt: '' },
    { url: '/knowledge', title: '', excerpt: '' },
    { url: '/gallery', title: 'Gallery', excerpt: 'iSupfactory factory and product gallery: workshops, quality labs, fabric testing and SUP boards in production.' },
  ],
  es: [
    { url: '/es', title: 'iSupfactory — Fabricación OEM y ODM de SUP hinchables', excerpt: 'Fábrica OEM/ODM de SUP hinchables en Qingdao: desarrollo de producto, producción a medida, marca privada y control de calidad.' },
    { url: '/es/products', title: 'Productos de SUP hinchables', excerpt: 'Tablas de SUP hinchables premium: series de 11 ft, SUP de pesca, mini SUP, tablas gigantes para equipo y más — fabricación OEM/ODM a medida.' },
    { url: '/es/solutions', title: 'Soluciones', excerpt: 'Programas de fabricación OEM/ODM de SUP: desarrollo de SUP a medida, marca privada, flotas de resorts y clubes, alquiler y minoristas.' },
    { url: '/es/projects', title: '', excerpt: '' },
    { url: '/es/knowledge', title: '', excerpt: '' },
    { url: '/es/gallery', title: 'Galería', excerpt: 'Fábrica y galería de productos iSupfactory: talleres, laboratorios de calidad, ensayos de tejido y tablas de SUP en producción.' },
  ],
  fr: [
    { url: '/fr', title: 'iSupfactory — Fabrication OEM et ODM de SUP gonflables', excerpt: 'Usine OEM/ODM de SUP gonflables à Qingdao : développement de produit, fabrication sur mesure, marque privée et contrôle qualité.' },
    { url: '/fr/products', title: 'Produits de SUP gonflables', excerpt: 'SUP gonflables premium : séries 11 ft, SUP de pêche, mini SUP, planches géantes pour équipes et plus encore — une fabrication OEM/ODM sur mesure.' },
    { url: '/fr/solutions', title: 'Solutions', excerpt: 'Programmes de fabrication OEM/ODM de SUP : développement de SUP sur mesure, marque privée, flottes de resorts et de clubs, location et partenaires retail.' },
    { url: '/fr/projects', title: '', excerpt: '' },
    { url: '/fr/knowledge', title: '', excerpt: '' },
    { url: '/fr/gallery', title: 'Galerie', excerpt: 'Usine et galerie de produits iSupfactory : ateliers, laboratoires qualité, tests de tissu et planches de SUP en production.' },
  ],
  de: [
    { url: '/de', title: 'iSupfactory — OEM- und ODM-Herstellung von aufblasbaren SUPs', excerpt: 'OEM/ODM-Fabrik für aufblasbare SUPs in Qingdao: Produktentwicklung, Fertigung nach Maß, Private Label und Qualitätskontrolle.' },
    { url: '/de/products', title: 'Aufblasbare SUP-Boards', excerpt: 'Premium-Aufblas-SUPs: 11-ft-Serien, Fishing-SUP, Mini-SUP, riesige Team-Boards und mehr — maßgeschneiderte OEM/ODM-Fertigung.' },
    { url: '/de/solutions', title: 'Lösungen', excerpt: 'OEM/ODM-SUP-Fertigungsprogramme: SUP-Entwicklung nach Maß, Private Label, Flotten für Resorts und Clubs, Vermietung und Einzelhandelspartner.' },
    { url: '/de/projects', title: '', excerpt: '' },
    { url: '/de/knowledge', title: '', excerpt: '' },
    { url: '/de/gallery', title: 'Galerie', excerpt: 'iSupfactory-Werks- und Produktgalerie: Werkstätten, Qualitätslabore, Stofftests und SUP-Boards in Produktion.' },
  ],
  it: [
    { url: '/it', title: 'iSupfactory — Produzione OEM e ODM di SUP gonfiabili', excerpt: 'Fabbrica OEM/ODM di SUP gonfiabili a Qingdao: sviluppo prodotto, produzione su misura, private label e controllo qualità.' },
    { url: '/it/products', title: 'Prodotti SUP gonfiabili', excerpt: 'SUP gonfiabili premium: serie da 11 ft, SUP da pesca, mini SUP, tavole giganti per squadre e altro — produzione OEM/ODM su misura.' },
    { url: '/it/solutions', title: 'Soluzioni', excerpt: 'Programmi di produzione OEM/ODM di SUP: sviluppo SUP su misura, private label, flotte per resort e club, noleggio e partner retail.' },
    { url: '/it/projects', title: '', excerpt: '' },
    { url: '/it/knowledge', title: '', excerpt: '' },
    { url: '/it/gallery', title: 'Galleria', excerpt: 'Fabbrica e galleria prodotti iSupfactory: officine, laboratori di qualità, test dei tessuti e tavole SUP in produzione.' },
  ],
  pt: [
    { url: '/pt', title: 'iSupfactory — Produção OEM e ODM de SUP insufláveis', excerpt: 'Fábrica OEM/ODM de SUP insufláveis em Qingdao: desenvolvimento de produto, produção à medida, marca própria e controlo de qualidade.' },
    { url: '/pt/products', title: 'Produtos de SUP insufláveis', excerpt: 'SUP insufláveis premium: séries de 11 ft, SUP de pesca, mini SUP, pranchas gigantes para equipas e mais — produção OEM/ODM à medida.' },
    { url: '/pt/solutions', title: 'Soluções', excerpt: 'Programas de produção OEM/ODM de SUP: desenvolvimento de SUP à medida, marca própria, frotas para resorts e clubes, aluguer e parceiros de retalho.' },
    { url: '/pt/projects', title: '', excerpt: '' },
    { url: '/pt/knowledge', title: '', excerpt: '' },
    { url: '/pt/gallery', title: 'Galeria', excerpt: 'Fábrica e galeria de produtos iSupfactory: oficinas, laboratórios de qualidade, testes de tecidos e pranchas de SUP em produção.' },
  ],
  nl: [
    { url: '/nl', title: 'iSupfactory — OEM- en ODM-productie van opblaasbare SUPs', excerpt: 'OEM/ODM-fabriek voor opblaasbare SUPs in Qingdao: productontwikkeling, productie op maat, privaat label en kwaliteitscontrole.' },
    { url: '/nl/products', title: 'Opblaasbare SUP-producten', excerpt: 'Premium opblaasbare SUP-planken: 11 ft series, vis-SUP, mini SUP, gigantische teamborden en meer — voor OEM/ODM-productie op maat.' },
    { url: '/nl/solutions', title: 'Oplossingen', excerpt: 'OEM/ODM-productieprogramma\'s voor SUP: SUP-ontwikkeling op maat, privaat label, vloten voor resorts en clubs, verhuur en retailpartners.' },
    { url: '/nl/projects', title: '', excerpt: '' },
    { url: '/nl/knowledge', title: '', excerpt: '' },
    { url: '/nl/gallery', title: 'Galerij', excerpt: 'Fabriek en productgalerij van iSupfactory: werkplaatsen, kwaliteitslaboratoria, stofproeven en SUP-planken in productie.' },
  ],
  sv: [
    { url: '/sv', title: 'iSupfactory — Tillverkning av uppblåsbara SUPar (OEM & ODM)', excerpt: 'OEM/ODM-fabrik för uppblåsbara SUPar i Qingdao: produktutveckling, skräddarsydd tillverkning, privat etikett och kvalitetskontroll för SUP-varumärken.' },
    { url: '/sv/products', title: 'Uppblåsbara SUP-produkter', excerpt: 'Premium-uppblåsbara SUP-brädor: 11 ft-seriebrädor, fiskesupboard, minisup, gigantiska teambrädor och mer — byggda för OEM/ODM-anpassning.' },
    { url: '/sv/solutions', title: 'Lösningar', excerpt: 'OEM/ODM-tillverkningsprogram för SUP: skräddarsydd SUP-utveckling, privat etikett, flottor för resorter och klubbar, uthyrning och återförsäljare.' },
    { url: '/sv/projects', title: '', excerpt: '' },
    { url: '/sv/knowledge', title: '', excerpt: '' },
    { url: '/sv/gallery', title: 'Galleri', excerpt: 'iSupfactorys fabriks- och produktgalleri: verkstäder, kvalitetslaboratorier, tygprovningar och SUP-brädor i produktion.' },
  ],
  no: [
    { url: '/no', title: 'iSupfactory — OEM- og ODM-produksjon av oppblåsbare SUP-brett', excerpt: 'OEM/ODM-fabrikk for oppblåsbare SUP-brett i Qingdao: produktutvikling, skreddersydd produksjon, private label og kvalitetskontroll for SUP-merker.' },
    { url: '/no/products', title: 'Oppblåsbare SUP-produkter', excerpt: 'Premium oppblåsbare SUP-brett: 11 ft-serien, fiske-SUP, mini-SUP, gigantiske lagebrett og mer — bygget for OEM/ODM-tilpasning.' },
    { url: '/no/solutions', title: 'Løsninger', excerpt: 'OEM/ODM-produksjonsprogrammer for SUP: skreddersydd SUP-utvikling, private label, flåter for resorts og klubber, utleie og detaljhandelspartnere.' },
    { url: '/no/projects', title: '', excerpt: '' },
    { url: '/no/knowledge', title: '', excerpt: '' },
    { url: '/no/gallery', title: 'Galleri', excerpt: 'Fabrikk- og produktgalleri fra iSupfactory: verksteder, kvalitetslaboratorier, stoffprøvinger og SUP-brett i produksjon.' },
  ],
}

export const CASE_STUDY_STATS = {
  boardWidth: '32"',
  factoryTested: '100%',
}

export const FAQ_EXCERPTS: Record<string, string> = {
  en: 'Frequently asked questions about inflatable SUP OEM/ODM manufacturing — materials, certifications, minimum order quantities and wholesale supply.',
  es: 'Preguntas frecuentes sobre fabricación OEM/ODM de SUP hinchables — materiales, certificaciones, cantidades mínimas de pedido y suministro al por mayor.',
  fr: 'Questions fréquentes sur la fabrication OEM/ODM de SUP gonflables — matériaux, certifications, quantités minimales de commande et approvisionnement en gros.',
  de: 'Häufig gestellte Fragen zur OEM/ODM-Fertigung aufblasbarer SUPs — Materialien, Zertifizierungen, Mindestbestellmengen und Großhandelsbelieferung.',
  it: 'Domande frequenti sulla produzione OEM/ODM di SUP gonfiabili — materiali, certificazioni, quantità minime d’ordine e fornitura all’ingrosso.',
  pt: 'Perguntas frequentes sobre a produção OEM/ODM de SUP insufláveis — materiais, certificações, quantidades mínimas de encomenda e fornecimento por grosso.',
  nl: 'Veelgestelde vragen over OEM/ODM-productie van opblaasbare SUPs — materialen, certificeringen, minimum bestelhoeveelheden en groothandelslevering.',
  sv: 'Vanliga frågor om OEM/ODM-tillverkning av uppblåsbara SUPar — material, certifieringar, minsta beställningskvantitet och partihandel.',
  no: 'Ofte stilte spørsmål om OEM/ODM-produksjon av oppblåsbare SUP-brett — materialer, sertifiseringer, minste bestillingskvantum og engros.',
}

export const STATIC_PAGE_CORPUS_TEXT =
  ' provides custom inflatable SUP manufacturing solutions.'

export const JSONLD_KEYWORDS: Record<string, { keywords: string[]; articleTitle?: string }> = {
  '/factory/quality-change-control': {
    keywords: ['SUP Manufacturing', 'Quality Management System', 'ISO 9001 Change Control', 'Airtightness Testing and Validation'],
    articleTitle: 'Stand-Up Paddleboard (SUP) Rework Process Parameter Change Control & Validation Standard',
  },
  '/factory/non-conforming-control': {
    keywords: ['SUP Manufacturing', 'Quality Management System', 'ISO 9001 Non-Conforming Output Control', 'Rework Re-Inspection and Scrap Disposition'],
  },
  '/oem-moq-guide': {
    keywords: ['SUP Manufacturing', 'Minimum Order Quantity', 'Drop-Stitch Fabric Roll Yields', 'Co-Branding and Flexible Branding'],
    articleTitle: 'Flexible Branding & Co-Branding MOQ Guide for Inflatable SUP Manufacturing',
  },
  '/oem-trust-assurance': {
    keywords: ['SUP Manufacturing', 'Factory Audit', 'OEM Trust and Supplier Verification', 'Third-Party Inspection (SGS, TUV, BV, Intertek)'],
    articleTitle: 'OEM Buyer Trust & Factory Assurance Guide for Inflatable SUP Manufacturing',
  },
  '/proof-center': {
    keywords: ['SUP Manufacturing', 'Factory Evidence and Certificate Scope', 'Entity Relationship (iSupfactory, content, Vatrad)', 'Batch Traceability and Record Keeping'],
    articleTitle: 'SUP Factory Proof Center: Evidence Behind Manufacturing Claims',
  },
}
