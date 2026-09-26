import type { Locale } from '@/features/i18n/locale'
import { FACTS, MOQ_SHORT, COLLABORATION_MODES } from './facts'

/**
 * Marketing content for the iSupfactory site, localized en/es/fr/de/it.
 *
 * Content (headlines, body copy, products, FAQ, landings) lives here rather
 * than in the i18n dictionaries, which stay reserved for structural UI strings
 * (nav, buttons, form labels). Every entry is available in five locales
 * (en/es/fr/de/it) so all locale routes render the same structure.
 */

export interface Localized<T> extends Record<string, T> {
  en: T
  es: T
  fr: T
  de: T
  it: T
  pt: T
  nl: T
  sv: T
  no: T
  pl: T
}

export function pick<T>(d: Localized<T>, locale: Locale): T {
  if (locale in d) return d[locale as keyof Localized<T>]
  return d.en
}

/* ─────────────────────────── home: hero ─────────────────────────── */

export interface HeroContent {
  kicker: string
  titlePre: string
  titleAccent: string
  titlePost: string
  sub: string
  ctaPrimary: string
  ctaSecondary: string
  ctaTertiary: string
  ctaQuartiary: string
  ctaMicro: string
  stats: { value: string; label: string }[]
  mockupLabel: string
  mockupBrand: string
  mockupHint: string
  heroNote: string
  float1: { value: string; label: string }
  float2: { value: string; label: string }
}

export const hero: Localized<HeroContent> = {
  en: {
    kicker: 'Custom SUP OEM / ODM Manufacturer — Qingdao, China',
    titlePre: 'Inflatable SUP Manufacturer &',
    titleAccent: 'OEM/ODM Factory',
    titlePost: '',
    sub: 'Custom inflatable paddle boards engineered, prototyped and manufactured in our Qingdao, China factory.',
    ctaPrimary: 'Request an OEM Quote',
    ctaSecondary: 'Develop Your SUP Product',
    ctaTertiary: 'Explore Our Factory',
    ctaQuartiary: '',
    ctaMicro: 'OEM · ODM · Private Label · Product Development · Prototyping · Mass Production',
    stats: [
      { value: '12,500 m²', label: 'In-house factory — Qingdao, China' },
      { value: '120,000+', label: 'Boards produced annually' },
      { value: '50+', label: 'Export countries served' },
      { value: FACTS.ndaWindow, label: 'NDA response window' },
    ],
    mockupLabel: 'Signature Platform',
    mockupBrand: "SUP Explorer 11'",
    mockupHint: 'Your graphics · your colors · your packaging',
    heroNote: 'Factory-direct manufacturing · Prototype development · Quality-controlled production · Export support',
    float1: { value: '1–2 units', label: 'Sample & approval (before volume commitment)' },
    float2: { value: FACTS.leadTime, label: 'Production lead time (after PO)' },
  },
  es: {
    kicker: 'Fabricante OEM / ODM de SUP a medida — Qingdao, China',
    titlePre: 'Fabricante de SUP hinchables y',
    titleAccent: 'fábrica OEM/ODM',
    titlePost: '',
    sub: 'SUP hinchables a medida diseñados, prototipados y fabricados en nuestra fábrica de Qingdao, China.',
    ctaPrimary: 'Solicita un presupuesto OEM',
    ctaSecondary: 'Desarrolla tu producto SUP',
    ctaTertiary: 'Visita nuestra fábrica',
    ctaQuartiary: '',
    ctaMicro: 'OEM · ODM · Marca privada · Desarrollo de producto · Prototipos · Producción en serie',
    stats: [
      { value: '12.500 m²', label: 'Fábrica propia — Qingdao, China' },
      { value: '120.000+', label: 'Tablas producidas anualmente' },
      { value: '50+', label: 'Países de exportación' },
      { value: FACTS.ndaWindow, label: 'Plazo de respuesta NDA' },
    ],
    mockupLabel: 'Plataforma insignia',
    mockupBrand: 'SUP Explorer 11\'',
    mockupHint: 'Tus gráficos · tus colores · tu packaging',
    heroNote: 'Fabricación directa en fábrica · Desarrollo de prototipos · Producción con control de calidad · Soporte de exportación',
    float1: { value: '1–2 uds.', label: 'Muestra y aprobación (antes de compromiso de volumen)' },
    float2: { value: FACTS.leadTime, label: 'Plazo de producción (tras PO)' },
  },
  fr: {
    kicker: 'Fabricant OEM / ODM de SUP sur mesure — Qingdao, Chine',
    titlePre: 'Fabricant de SUP gonflables et',
    titleAccent: 'usine OEM/ODM',
    titlePost: '',
    sub: 'Paddleboards gonflables sur mesure conçus, prototypés et fabriqués dans notre usine de Qingdao, en Chine.',
    ctaPrimary: 'Demander un devis OEM',
    ctaSecondary: 'Développez votre produit SUP',
    ctaTertiary: 'Visitez notre usine',
    ctaQuartiary: '',
    ctaMicro: 'OEM · ODM · Marque privée · Développement de produit · Prototypage · Production en série',
    stats: [
      { value: '12 500 m²', label: 'Usine intégrée — Qingdao, Chine' },
      { value: '120 000+', label: 'Planches produites chaque année' },
      { value: '50+', label: 'Pays de destination à l’export' },
      { value: FACTS.ndaWindow, label: 'Délai de réponse NDA' },
    ],
    mockupLabel: 'Plateforme signature',
    mockupBrand: 'SUP Explorer 11\'',
    mockupHint: 'Vos graphismes · vos couleurs · votre emballage',
    heroNote: 'Fabrication directe en usine · Développement de prototypes · Production sous contrôle qualité · Support à l’export',
    float1: { value: '1–2 units', label: 'Échantillon et approbation (avant tout engagement de volume)' },
    float2: { value: FACTS.leadTime, label: 'Délai de production (après PO)' },
  },
  de: {
    kicker: 'Individueller SUP-OEM-/ODM-Hersteller — Qingdao, China',
    titlePre: 'Hersteller aufblasbarer SUPs &',
    titleAccent: 'OEM/ODM-Fabrik',
    titlePost: '',
    sub: 'Individuelle aufblasbare Paddelbretter werden in unserer Fabrik in Qingdao, China, konstruiert, prototypisiert und gefertigt.',
    ctaPrimary: 'OEM-Angebot anfordern',
    ctaSecondary: 'Entwickeln Sie Ihr SUP-Produkt',
    ctaTertiary: 'Unsere Fabrik entdecken',
    ctaQuartiary: '',
    ctaMicro: 'OEM · ODM · Private Label · Produktentwicklung · Prototypenfertigung · Serienproduktion',
    stats: [
      { value: '12,500 m²', label: 'Eigene Fabrik — Qingdao, China' },
      { value: '120,000+', label: 'Boards pro Jahr produziert' },
      { value: '50+', label: 'Bediente Exportländer' },
      { value: FACTS.ndaWindow, label: 'NDA-Antwortzeitfenster' },
    ],
    mockupLabel: 'Signature-Plattform',
    mockupBrand: "SUP Explorer 11'",
    mockupHint: 'Ihre Grafiken · Ihre Farben · Ihre Verpackung',
    heroNote: 'Fabrikdirekte Fertigung · Prototypenentwicklung · Qualitätsgeprüfte Produktion · Exportunterstützung',
    float1: { value: '1–2 units', label: 'Muster & Freigabe (vor größerer Mengenbindung)' },
    float2: { value: FACTS.leadTime, label: 'Produktionslieferzeit (nach PO)' },
  },
  it: {
    kicker: 'Produttore SUP OEM / ODM su misura — Qingdao, Cina',
    titlePre: 'Produttore di SUP gonfiabili &',
    titleAccent: 'fabbrica OEM/ODM',
    titlePost: '',
    sub: 'Tavole paddle gonfiabili su misura progettate, prototipate e prodotte nella nostra fabbrica a Qingdao, in Cina.',
    ctaPrimary: 'Richiedi un preventivo OEM',
    ctaSecondary: 'Sviluppa il tuo prodotto SUP',
    ctaTertiary: 'Scopri la nostra fabbrica',
    ctaQuartiary: '',
    ctaMicro: 'OEM · ODM · Private Label · Sviluppo prodotto · Produzione di prototipi · Produzione in serie',
    stats: [
      { value: '12,500 m²', label: 'Fabbrica di proprietà — Qingdao, Cina' },
      { value: '120,000+', label: 'Tavole prodotte ogni anno' },
      { value: '50+', label: 'Paesi di esportazione serviti' },
      { value: FACTS.ndaWindow, label: 'Finestra di risposta NDA' },
    ],
    mockupLabel: 'Piattaforma Signature',
    mockupBrand: "SUP Explorer 11'",
    mockupHint: 'Le tue grafiche · i tuoi colori · il tuo imballaggio',
    heroNote: 'Produzione diretta in fabbrica · Sviluppo di prototipi · Produzione con controllo qualità · Supporto export',
    float1: { value: '1–2 units', label: 'Campione & approvazione (prima di impegni di produzione)' },
    float2: { value: FACTS.leadTime, label: 'Tempi di produzione (dopo PO)' },
  },
  pt: {
    kicker: 'Fabricante OEM / ODM de SUP à medida — Qingdao, China',
    titlePre: 'Fabricante de SUP insufláveis &',
    titleAccent: 'fábrica OEM/ODM',
    titlePost: '',
    sub: 'Pranchas de paddle insufláveis à medida, projetadas, prototipadas e produzidas na nossa fábrica em Qingdao, na China.',
    ctaPrimary: 'Pedir um orçamento OEM',
    ctaSecondary: 'Desenvolve o teu produto SUP',
    ctaTertiary: 'Conhece a nossa fábrica',
    ctaQuartiary: '',
    ctaMicro: 'OEM · ODM · Marca própria · Desenvolvimento de produto · Protótipos · Produção em série',
    stats: [
      { value: '12,500 m²', label: 'Fábrica própria — Qingdao, China' },
      { value: '120,000+', label: 'Pranchas produzidas por ano' },
      { value: '50+', label: 'Países de exportação servidos' },
      { value: FACTS.ndaWindow, label: 'Janela de resposta NDA' },
    ],
    mockupLabel: 'Plataforma Signature',
    mockupBrand: "SUP Explorer 11'",
    mockupHint: 'Os teus gráficos · as tuas cores · a tua embalagem',
    heroNote: 'Fabricação direta na fábrica · Desenvolvimento de protótipos · Produção com controlo de qualidade · Apoio à exportação',
    float1: { value: '1–2 units', label: 'Amostra e aprovação (antes de compromissos de volume)' },
    float2: { value: FACTS.leadTime, label: 'Prazo de produção (após PO)' },
  },
  nl: {
    kicker: 'Fabrikant van op maat gemaakte SUP OEM / ODM — Qingdao, China',
    titlePre: 'Fabrikant van opblaasbare SUPs &',
    titleAccent: 'OEM/ODM-fabriek',
    titlePost: '',
    sub: 'Opblaasbare paddle boards op maat, ontworpen, geprototypeerd en geproduceerd in onze fabriek in Qingdao, China.',
    ctaPrimary: 'Een OEM-offerte aanvragen',
    ctaSecondary: 'Ontwikkel jouw SUP-product',
    ctaTertiary: 'Ontdek onze fabriek',
    ctaQuartiary: '',
    ctaMicro: 'OEM · ODM · Privaat label · Productontwikkeling · Prototypes · Seriële productie',
    stats: [
      { value: '12,500 m²', label: 'Eigen fabriek — Qingdao, China' },
      { value: '120,000+', label: 'Planken per jaar geproduceerd' },
      { value: '50+', label: 'Bedien exportlanden' },
      { value: FACTS.ndaWindow, label: 'NDA-responsvenster' },
    ],
    mockupLabel: 'Signature-platform',
    mockupBrand: "SUP Explorer 11'",
    mockupHint: 'Jouw graphics · jouw kleuren · jouw verpakking',
    heroNote: 'Directe fabrieksproductie · Prototypeontwikkeling · Productie met kwaliteitscontrole · Exportondersteuning',
    float1: { value: '1–2 units', label: 'Monster en goedkeuring (vóór volumeverplichtingen)' },
    float2: { value: FACTS.leadTime, label: 'Productielevertijd (na PO)' },
  },
  sv: {
    kicker: 'Tillverkare av anpassade SUP:er (OEM / ODM) — Qingdao, Kina',
    titlePre: 'Tillverkare av uppblåsbara SUP:er &',
    titleAccent: 'OEM/ODM-fabrik',
    titlePost: '',
    sub: 'Anpassade uppblåsbara paddleboards designade, prototypade och tillverkade i vår fabrik i Qingdao, Kina.',
    ctaPrimary: 'Begär en OEM-offert',
    ctaSecondary: 'Utveckla din SUP-produkt',
    ctaTertiary: 'Utforska vår fabrik',
    ctaQuartiary: '',
    ctaMicro: 'OEM · ODM · Privat etikett · Produktutveckling · Prototyper · Serietillverkning',
    stats: [
      { value: '12 500 m²', label: 'Egen fabrik — Qingdao, Kina' },
      { value: '120 000+', label: 'Brädor tillverkade årligen' },
      { value: '50+', label: 'Exportländer vi betjänar' },
      { value: FACTS.ndaWindow, label: 'NDA-svarstid' },
    ],
    mockupLabel: 'Signature-plattform',
    mockupBrand: "SUP Explorer 11'",
    mockupHint: 'Din grafik · dina färger · din förpackning',
    heroNote: 'Direkt tillverkning i fabrik · Prototyputveckling · Kvalitetskontrollerad produktion · Exportstöd',
    float1: { value: '1–2 units', label: 'Prov & godkännande (innan volymåtagande)' },
    float2: { value: FACTS.leadTime, label: 'Produktionstid (efter PO)' },
  },
  no: {
    kicker: 'Produsent av skreddersydde SUP-er (OEM / ODM) — Qingdao, Kina',
    titlePre: 'Produsent av oppblåsbare SUP-er og',
    titleAccent: 'OEM/ODM-fabrikk',
    titlePost: '',
    sub: 'Skreddersydde oppblåsbare paddleboards designet, prototypet og produsert i fabrikken vår i Qingdao, Kina.',
    ctaPrimary: 'Be om et OEM-tilbud',
    ctaSecondary: 'Utvikle SUP-produktet ditt',
    ctaTertiary: 'Utforsk fabrikken vår',
    ctaQuartiary: '',
    ctaMicro: 'OEM · ODM · Private label · Produktutvikling · Prototyper · Serietillverkning',
    stats: [
      { value: '12 500 m²', label: 'Egen fabrikk — Qingdao, Kina' },
      { value: '120 000+', label: 'Brett produsert årlig' },
      { value: '50+', label: 'Eksportland vi betjener' },
      { value: FACTS.ndaWindow, label: 'NDA-svartid' },
    ],
    mockupLabel: 'Signaturplattform',
    mockupBrand: "SUP Explorer 11'",
    mockupHint: 'Din grafikk · dine farger · din emballasje',
    heroNote: 'Direkte produksjon i fabrikk · Prototypeutvikling · Kvalitetskontrollert produksjon · Eksportstøtte',
    float1: { value: '1–2 stk', label: 'Prøve og godkjenning (før volumforpliktelse)' },
    float2: { value: FACTS.leadTime, label: 'Produksjonstid (etter PO)' },
  },
  pl: {
    kicker: 'Producent skreddersytych desek SUP (OEM / ODM) — Qingdao, Chiny',
    titlePre: 'Producent nadmuchiwanych desek SUP i',
    titleAccent: 'fabryce OEM/ODM',
    titlePost: '',
    sub: 'Nadmuchiwane deski SUP na zamówienie — projektowane, wykonywane jako prototypy i produkowane w naszej fabryce w Qingdao, w Chinach.',
    ctaPrimary: 'Poproś o ofertę OEM',
    ctaSecondary: 'Opracuj swój produkt SUP',
    ctaTertiary: 'Poznaj naszą fabrykę',
    ctaQuartiary: '',
    ctaMicro: 'OEM · ODM · Marka własna · Rozwój produktu · Prototypy · Produkcja seryjna',
    stats: [
      { value: '12 500 m²', label: 'Własna fabryka — Qingdao, Chiny' },
      { value: '120 000+', label: 'Desek SUP produkowanych rocznie' },
      { value: '50+', label: 'Kraje eksportowe, które obsługujemy' },
      { value: FACTS.ndaWindow, label: 'Czas odpowiedzi na NDA' },
    ],
    mockupLabel: 'Platforma flagowa',
    mockupBrand: "SUP Explorer 11'",
    mockupHint: 'Twoja grafika · Twoje kolory · Twoje opakowanie',
    heroNote: 'Produkcja bezpośrednio w fabryce · Prace nad prototypem · Produkcja z kontrolą jakości · Wsparcie eksportu',
    float1: { value: '1–2 szt', label: 'Próbka i akceptacja (przed zobowiązaniem produkcyjnym)' },
    float2: { value: FACTS.leadTime, label: 'Czas realizacji produkcji (po zamówieniu)' },
  },
}

/* ─────────────────────────── home: manufacturer pledge ─────────────────────────── */

export interface ManufacturerPledgeItem {
  title: string
  body: string
}

export interface ManufacturerPledgeContent {
  kicker: string
  title: string
  sub: string
  items: ManufacturerPledgeItem[]
  verifyLabel: string
  verifyHref: string
}

export const manufacturerPledge: Localized<ManufacturerPledgeContent> = {
  en: {
    kicker: 'Manufacturer, Not a Trading Company',
    title: 'We Own the Factory Behind Your Order',
    sub: 'A trading company resells other factories\u2019 output. We operate the plant. There is no broker margin, no third-party warehouse and no intermediary between your order and the production floor.',
    items: [
      { title: 'Registered legal entity', body: 'Qingdao Vatrad Group Co., Ltd. is the contracting entity on every order and every export document.' },
      { title: 'One factory, one team', body: 'Engineering, QC, production scheduling and export documentation are all managed in-house at the Laixi, Qingdao plant.' },
      { title: 'Your brand, never ours', body: 'We manufacture exclusively under our clients\u2019 brands and never compete with them in any market.' },
    ],
    verifyLabel: 'Verify Who We Are',
    verifyHref: '/about/identity',
  },
  es: {
    kicker: 'Fabricante, no empresa comercializadora',
    title: 'Somos Dueños de la Fábrica Detrás de Tu Pedido',
    sub: 'Una empresa comercializadora revende la producción de otras fábricas. Nosotros operamos la planta. No hay margen de intermediario, ni almacenes de terceros, ni intermediarios entre tu pedido y la línea de producción.',
    items: [
      { title: 'Entidad legal registrada', body: 'Qingdao Vatrad Group Co., Ltd. es la entidad contratante en cada pedido y en cada documento de exportación.' },
      { title: 'Una fábrica, un equipo', body: 'Ingeniería, control de calidad, programación de producción y documentación de exportación, todo gestionado internamente en la planta de Laixi, Qingdao.' },
      { title: 'Tu marca, nunca la nuestra', body: 'Fabricamos exclusivamente bajo las marcas de nuestros clientes y nunca competimos con ellos en ningún mercado.' },
    ],
    verifyLabel: 'Verifica Quiénes Somos',
    verifyHref: '/about/identity',
  },
  fr: {
    kicker: 'Fabricant, pas une société de négoce',
    title: 'Nous Possédons l\'Usine Derrière Votre Commande',
    sub: 'Une société de négoce revend la production d\'autres usines. Nous exploitons la nôtre. Aucune marge d\'intermédiaire, aucun entrepôt tiers, aucun intermédiaire entre votre commande et l\'atelier de production.',
    items: [
      { title: 'Entité légale enregistrée', body: 'Qingdao Vatrad Group Co., Ltd. est l\'entité contractante sur chaque commande et chaque document d\'exportation.' },
      { title: 'Une seule usine, une seule équipe', body: 'Ingénierie, contrôle qualité, planification de production et documentation d\'exportation : tout est géré en interne à l\'usine de Laixi, Qingdao.' },
      { title: 'Votre marque, jamais la nôtre', body: 'Nous fabriquons exclusivement sous les marques de nos clients et ne les concurrençons jamais sur aucun marché.' },
    ],
    verifyLabel: 'Vérifier Qui Nous Sommes',
    verifyHref: '/about/identity',
  },
  de: {
    kicker: 'Hersteller, kein Handelsunternehmen',
    title: 'Wir sind Eigentümer der Fabrik hinter Ihrer Bestellung',
    sub: 'Ein Handelsunternehmen verkauft die Produktion anderer Fabriken weiter. Wir betreiben die Anlage. Es gibt keine Vermittlermarge, kein Lager eines Dritten und keinen Zwischenhändler zwischen Ihrer Bestellung und der Fertigung.',
    items: [
      { title: 'Registrierte juristische Person', body: 'Qingdao Vatrad Group Co., Ltd. ist auf jeder Bestellung und jedem Exportdokument die vertragschließende Einheit.' },
      { title: 'Eine Fabrik, ein Team', body: 'Engineering, Qualitätskontrolle, Produktionsplanung und Exportdokumentation werden vollständig intern im Werk Laixi, Qingdao, abgewickelt.' },
      { title: 'Ihre Marke, nie unsere', body: 'Wir fertigen ausschließlich unter den Marken unserer Kunden und treten in keinem Markt in Wettbewerb zu ihnen.' },
    ],
    verifyLabel: 'Verifizieren Sie, wer wir sind',
    verifyHref: '/about/identity',
  },
  it: {
    kicker: "Produttore, non un’azienda di trading",
    title: 'Siamo proprietari della fabbrica dietro il tuo ordine',
    sub: "Un’azienda di trading rivende la produzione di altre fabbriche. Noi gestiamo lo stabilimento. Non ci sono margini d’intermediario, né magazzini di terzi, né intermediari tra il tuo ordine e la linea di produzione.",
    items: [
      { title: 'Entità legale registrata', body: "Qingdao Vatrad Group Co., Ltd. è l’entità contraente su ogni ordine e ogni documento di esportazione." },
      { title: 'Una fabbrica, un team', body: "Ingegneria, controllo qualità, programmazione della produzione e documentazione di esportazione sono gestiti interamente in sede nello stabilimento di Laixi, Qingdao." },
      { title: 'Il tuo marchio, mai il nostro', body: 'Produciamo esclusivamente con i marchi dei nostri clienti e non entriamo mai in concorrenza con loro in alcun mercato.' },
    ],
    verifyLabel: 'Verifica chi siamo',
    verifyHref: '/about/identity',
  },
  pt: {
    kicker: 'Fabricante, não uma trading',
    title: 'Somos donos da fábrica por trás do teu pedido',
    sub: "Uma trading revende a produção de outras fábricas. Nós gerimos a fábrica. Sem margens de intermediário, sem armazéns de terceiros, sem intermediários entre o teu pedido e a linha de produção.",
    items: [
      { title: 'Entidade legal registada', body: 'Qingdao Vatrad Group Co., Ltd. é a entidade contratante em todos os pedidos e todos os documentos de exportação.' },
      { title: 'Uma fábrica, uma equipa', body: "Engenharia, controlo de qualidade, planeamento de produção e documentação de exportação são geridos internamente na fábrica de Laixi, Qingdao." },
      { title: 'A tua marca, nunca a nossa', body: 'Produzimos exclusivamente com as marcas dos nossos clientes e não competimos nunca com eles em nenhum mercado.' },
    ],
    verifyLabel: 'Verifica quem somos',
    verifyHref: '/about/identity',
  },
  nl: {
    kicker: 'Fabrikant, geen handelsmaatschappij',
    title: 'Wij zijn eigenaar van de fabriek achter jouw bestelling',
    sub: 'Een handelsmaatschappij verkoopt de productie van andere fabrieken door. Wij beheren onze eigen fabriek. Er is geen intermediaire marge, geen extern magazijn en geen tussenpersoon tussen jouw bestelling en de productielijn.',
    items: [
      { title: 'Geregistreerde rechtspersoon', body: 'Qingdao Vatrad Group Co., Ltd. is de contracterende entiteit bij elke bestelling en ieder exportdocument.' },
      { title: 'Eén fabriek, één team', body: 'Engineering, kwaliteitscontrole, productieplanning en exportdocumentatie worden volledig intern beheerd in onze fabriek in Laixi, Qingdao.' },
      { title: 'Jouw merk, nooit het onze', body: 'Wij produceren uitsluitend onder de merken van onze klanten en concurreren nooit met hen op welke markt dan ook.' },
    ],
    verifyLabel: 'Verifieer wie wij zijn',
    verifyHref: '/about/identity',
  },
  sv: {
    kicker: 'Tillverkare, inget handelsbolag',
    title: 'Vi äger fabriken bakom din order',
    sub: 'Ett handelsbolag säljer vidare andra faktorers produktion. Vi driver anläggningen själva. Det finns ingen mellanhänds marginal, inget tredjepartslager och ingen mellanhand mellan din order och produktionsgolvet.',
    items: [
      { title: 'Registrerad juridisk enhet', body: 'Qingdao Vatrad Group Co., Ltd. är den avtalsslutande enheten på varje order och i varje exportdokument.' },
      { title: 'En fabrik, ett team', body: 'Konstruktion, kvalitetssäkring, produktionsplanering och exportdokumentation hanteras helt internt på anläggningen i Laixi, Qingdao.' },
      { title: 'Ditt varumärke, aldrig vårt', body: 'Vi tillverkar uteslutande under våra kunders varumärken och konkurrerar aldrig med dem på någon marknad.' },
    ],
    verifyLabel: 'Verifiera vilka vi är',
    verifyHref: '/about/identity',
  },
  no: {
    kicker: 'Produsent, ikke handelsselskap',
    title: 'Vi eier fabrikken bak bestillingen din',
    sub: 'Et handelsselskap videresaler andres produksjon. Vi driver anlegget selv. Det finnes ingen mellomhåndsmargin, ingen tredjepartslager og ingen mellomledd mellom bestillingen din og produksjonsgulvet.',
    items: [
      { title: 'Registrert juridisk enhet', body: 'Qingdao Vatrad Group Co., Ltd. er den kontraktssluttende enheten på hver bestilling og i alle eksportdokumenter.' },
      { title: 'Én fabrikk, ett team', body: 'Konstruksjon, kvalitetssikring, produksjonsplanlegging og eksportdokumentasjon håndteres fullstendig internt på anlegget i Laixi, Qingdao.' },
      { title: 'Ditt merke, aldri vårt', body: 'Vi produserer utelukkende under kundenes merker og konkurrerer aldri med dem på noe marked.' },
    ],
    verifyLabel: 'Verifiser hvem vi er',
    verifyHref: '/about/identity',
  },
  pl: {
    kicker: 'Producent, nie firma handlowa',
    title: 'To my posiadamy fabrykę stojącą za Twoim zamówieniem',
    sub: 'Firma handlowa odsprzedaje produkcję innych fabryk. My prowadzimy zakład sami. Nie ma marży pośrednika, magazynu zewnętrznego ani żadnego pośrednika między Twoim zamówieniem a halą produkcyjną.',
    items: [
      { title: 'Zarejestrowana osoba prawna', body: 'Qingdao Vatrad Group Co., Ltd. jest stroną umowy przy każdym zamówieniu i w każdym dokumencie eksportowym.' },
      { title: 'Jedna fabryka, jeden zespół', body: 'Projektowanie, kontrola jakości, planowanie produkcji i dokumentacja eksportowa są realizowane wewnętrznie w zakładzie w Laixi, Qingdao.' },
      { title: 'Twoja marka, nigdy nasza', body: 'Produkujemy wyłącznie pod markami naszych klientów i nigdy nie konkurujemy z nimi na żadnym rynku.' },
    ],
    verifyLabel: 'Sprawdź, kim jesteśmy',
    verifyHref: '/about/identity',
  },
}

/* ─────────────────────────── home: factory proof (verifiable stats, every number linked) ─────────────────────────── */

export interface FactoryProofStat {
  value: string
  label: string
  href: string
}

export interface FactoryProofContent {
  kicker: string
  title: string
  sub: string
  cta: string
  stats: FactoryProofStat[]
  links: { label: string; href: string }[]
  note: string
}

export const factoryProof: Localized<FactoryProofContent> = {
  en: {
    kicker: 'Factory Proof',
    title: 'A Real Factory, Documented',
    sub: 'Verifiable numbers from our Qingdao, China plant — each figure links to the page where it is documented.',
    cta: 'Verify this figure',
    stats: [
      { value: FACTS.warehouseM2, label: 'In-house manufacturing facility', href: '/factory' },
      { value: FACTS.workers, label: 'Factory workforce, in-house', href: '/manufacturing-capabilities' },
      { value: '120,000+', label: 'Boards produced annually', href: '/factory/capacity' },
      { value: FACTS.exportCountries, label: 'Export countries served', href: '/proof-center' },
    ],
    links: [
      { label: 'MOQ & Lead Time', href: '/sup-oem-moq-lead-time' },
      { label: 'Quality Control', href: '/quality' },
      { label: 'Factory Audit Checklist', href: '/factory-audit-checklist' },
    ],
    note: FACTS.moqNote,
  },
  es: {
    kicker: 'Prueba de fábrica',
    title: 'Una fábrica real, documentada',
    sub: 'Cifras verificables de nuestra planta de Qingdao, China — cada dato enlaza con la página donde está documentado.',
    cta: 'Verifica esta cifra',
    stats: [
      { value: FACTS.warehouseM2, label: 'Instalación de fabricación propia', href: '/factory' },
      { value: FACTS.workers, label: 'Plantilla de la fábrica, propia', href: '/manufacturing-capabilities' },
      { value: '120.000+', label: 'Tablas producidas anualmente', href: '/factory/capacity' },
      { value: FACTS.exportCountries, label: 'Países de exportación', href: '/proof-center' },
    ],
    links: [
      { label: 'MOQ y plazo de entrega', href: '/sup-oem-moq-lead-time' },
      { label: 'Control de calidad', href: '/quality' },
      { label: 'Checklist de auditoría de fábrica', href: '/factory-audit-checklist' },
    ],
    note: FACTS.moqNoteEs,
  },
  fr: {
    kicker: 'Preuves d’usine',
    title: 'Une vraie usine, documentée',
    sub: 'Des chiffres vérifiables de notre usine de Qingdao, en Chine — chaque donnée renvoie à la page où elle est documentée.',
    cta: 'Vérifiez ce chiffre',
    stats: [
      { value: FACTS.warehouseM2, label: 'Installation de fabrication intégrée', href: '/factory' },
      { value: FACTS.workers, label: 'Effectif de l’usine, en interne', href: '/manufacturing-capabilities' },
      { value: '120 000+', label: 'Planches produites chaque année', href: '/factory/capacity' },
      { value: FACTS.exportCountries, label: 'Pays de destination à l’export', href: '/proof-center' },
    ],
    links: [
      { label: 'MOQ et délais', href: '/sup-oem-moq-lead-time' },
      { label: 'Contrôle qualité', href: '/quality' },
      { label: 'Check-list d’audit d’usine', href: '/factory-audit-checklist' },
    ],
    note: 'Le MOQ est confirmé après examen des spécifications, car la construction, la taille de la planche, la structure du PVC, le graphisme, l’emballage et les accessoires influent sur la consommation de matériau.',
  },
  de: {
    kicker: 'Fabriknachweis',
    title: 'Eine echte Fabrik, dokumentiert',
    sub: 'Überprüfbare Zahlen aus unserem Werk in Qingdao, China — jede Zahl verlinkt auf die Seite, auf der sie dokumentiert ist.',
    cta: 'Diese Zahl prüfen',
    stats: [
      { value: FACTS.warehouseM2, label: 'Eigene Fertigungsstätte', href: '/factory' },
      { value: FACTS.workers, label: 'Fabrikbelegschaft, intern', href: '/manufacturing-capabilities' },
      { value: '120,000+', label: 'Boards pro Jahr produziert', href: '/factory/capacity' },
      { value: FACTS.exportCountries, label: 'Bediente Exportländer', href: '/proof-center' },
    ],
    links: [
      { label: 'MOQ & Lieferzeit', href: '/sup-oem-moq-lead-time' },
      { label: 'Qualitätskontrolle', href: '/quality' },
      { label: 'Checkliste für das Fabrikaudit', href: '/factory-audit-checklist' },
    ],
    note: 'Der MOQ wird nach Prüfung der Spezifikation bestätigt, da Konstruktion, Boardgröße, PVC-Aufbau, Grafik, Verpackung und Zubehör den Materialverbrauch beeinflussen.',
  },
  it: {
    kicker: 'Prova di fabbrica',
    title: 'Una vera fabbrica, documentata',
    sub: "Cifre verificabili dal nostro stabilimento di Qingdao, Cina — ogni numero rimanda alla pagina in cui è documentato.",
    cta: 'Verifica questa cifra',
    stats: [
      { value: FACTS.warehouseM2, label: 'Stabilimento di produzione di proprietà', href: '/factory' },
      { value: FACTS.workers, label: 'Personale di fabbrica, interno', href: '/manufacturing-capabilities' },
      { value: '120,000+', label: 'Tavole prodotte ogni anno', href: '/factory/capacity' },
      { value: FACTS.exportCountries, label: 'Paesi di esportazione serviti', href: '/proof-center' },
    ],
    links: [
      { label: 'MOQ e tempi di consegna', href: '/sup-oem-moq-lead-time' },
      { label: 'Controllo qualità', href: '/quality' },
      { label: "Checklist per l’audit di fabbrica", href: '/factory-audit-checklist' },
    ],
    note: "Il MOQ viene confermato dopo l’esame delle specifiche, poiché costruzione, dimensioni della tavola, struttura del PVC, grafica, imballaggio e accessori influiscono sul consumo di materiale.",
  },
  pt: {
    kicker: 'Prova de fábrica',
    title: 'Uma fábrica real, documentada',
    sub: "Números verificáveis da nossa fábrica em Qingdao, China — cada número remete para a página onde está documentado.",
    cta: 'Verifica este número',
    stats: [
      { value: FACTS.warehouseM2, label: 'Instalação de produção própria', href: '/factory' },
      { value: FACTS.workers, label: 'Equipa da fábrica, internamente', href: '/manufacturing-capabilities' },
      { value: '120,000+', label: 'Tábuas produzidas por ano', href: '/factory/capacity' },
      { value: FACTS.exportCountries, label: 'Países de exportação servidos', href: '/proof-center' },
    ],
    links: [
      { label: 'MOQ e prazos de entrega', href: '/sup-oem-moq-lead-time' },
      { label: 'Controlo de qualidade', href: '/quality' },
      { label: 'Checklist de auditoria à fábrica', href: '/factory-audit-checklist' },
    ],
    note: "O MOQ é confirmado após a análise das especificações, porque a construção, as dimensões da tábua, a estrutura do PVC, a gráfica, a embalagem e os acessórios influenciam o consumo de material.",
  },
  nl: {
    kicker: 'Fabrieksbewijs',
    title: 'Een echte fabriek, gedocumenteerd',
    sub: 'Verifieerbare cijfers van onze fabriek in Qingdao, China — elk cijfer verwijst naar de pagina waarop het is gedocumenteerd.',
    cta: 'Verifieer dit cijfer',
    stats: [
      { value: FACTS.warehouseM2, label: 'Eigen productiefaciliteit', href: '/factory' },
      { value: FACTS.workers, label: 'Fabriekspersoneel, intern', href: '/manufacturing-capabilities' },
      { value: '120,000+', label: 'Planken per jaar geproduceerd', href: '/factory/capacity' },
      { value: FACTS.exportCountries, label: 'Bedien exportlanden', href: '/proof-center' },
    ],
    links: [
      { label: 'MOQ en levertijd', href: '/sup-oem-moq-lead-time' },
      { label: 'Kwaliteitscontrole', href: '/quality' },
      { label: 'Controlelijst fabrieksaudit', href: '/factory-audit-checklist' },
    ],
    note: 'De MOQ wordt bevestigd na beoordeling van de specificaties, omdat constructie, bordafmetingen, PVC-opbouw, grafische vormgeving, verpakking en accessoires het materiaalverbruik beïnvloeden.',
  },
  sv: {
    kicker: 'Factory Proof',
    title: 'En Äkta Fabrik, Dokumenterad',
    sub: 'Verifierbara siffror från vår anläggning i Qingdao, Kina — varje siffra länkar till sidan där den dokumenteras.',
    cta: 'Verifiera denna siffra',
    stats: [
      { value: FACTS.warehouseM2, label: 'Egen tillverkningsanläggning', href: '/factory' },
      { value: FACTS.workers, label: 'Fabrikens personal, internt', href: '/manufacturing-capabilities' },
      { value: '120,000+', label: 'Brädor tillverkade årligen', href: '/factory/capacity' },
      { value: FACTS.exportCountries, label: 'Exportländer vi betjänar', href: '/proof-center' },
    ],
    links: [
      { label: 'MOQ & ledtid', href: '/sup-oem-moq-lead-time' },
      { label: 'Kvalitetskontroll', href: '/quality' },
      { label: 'Checklista för fabriksrevision', href: '/factory-audit-checklist' },
    ],
    note: 'MOQ bekräftas efter granskning av specifikationerna, eftersom konstruktion, brädstorlek, PVC-uppbyggnad, grafik, förpackning och tillbehör påverkar materialåtgången.',
  },
  no: {
    kicker: 'Factory Proof',
    title: 'En ekte fabrikk, dokumentert',
    sub: 'Verifiserbare tall fra anlegget vårt i Qingdao, Kina — hvert tall lenker til siden der det er dokumentert.',
    cta: 'Verifiser dette tallet',
    stats: [
      { value: FACTS.warehouseM2, label: 'Eget produksjonsanlegg', href: '/factory' },
      { value: FACTS.workers, label: 'Fabrikkens personell, internt', href: '/manufacturing-capabilities' },
      { value: '120,000+', label: 'Brett produsert årlig', href: '/factory/capacity' },
      { value: FACTS.exportCountries, label: 'Eksportland vi betjener', href: '/proof-center' },
    ],
    links: [
      { label: 'MOQ og leveringstid', href: '/sup-oem-moq-lead-time' },
      { label: 'Kvalitetskontroll', href: '/quality' },
      { label: 'Sjekkliste for fabrikkrevision', href: '/factory-audit-checklist' },
    ],
    note: 'MOQ bekreftes etter gjennomgang av spesifikasjonene, fordi konstruksjon, brettstørrelse, PVC-oppbygning, grafikk, emballasje og tilbehør påvirker materialbruken.',
  },
  pl: {
    kicker: 'Factory Proof',
    title: 'Prawdziwa fabryka, udokumentowana',
    sub: 'Weryfikowalne liczby z naszego zakładu w Qingdao, w Chinach — każda liczba odsyła do strony, na której jest udokumentowana.',
    cta: 'Zweryfikuj tę liczbę',
    stats: [
      { value: FACTS.warehouseM2, label: 'Własny zakład produkcyjny', href: '/factory' },
      { value: FACTS.workers, label: 'Pracownicy fabryki, wewnętrznie', href: '/manufacturing-capabilities' },
      { value: '120,000+', label: 'Desek SUP produkowanych rocznie', href: '/factory/capacity' },
      { value: FACTS.exportCountries, label: 'Kraje eksportowe, które obsługujemy', href: '/proof-center' },
    ],
    links: [
      { label: 'MOQ i czas realizacji', href: '/sup-oem-moq-lead-time' },
      { label: 'Kontrola jakości', href: '/quality' },
      { label: 'Lista kontrolna audytu fabryki', href: '/factory-audit-checklist' },
    ],
    note: 'MOQ jest potwierdzane po przeglądzie specyfikacji, ponieważ konstrukcja, rozmiar deski, budowa PVC, grafika, opakowanie i akcesoria wpływają na zużycie materiału.',
  },
}

/* ─────────────────────────── home: factory evidence (verification band) ─────────────────────────── */

export interface FactoryEvidenceItem {
  title: string
  body: string
  href: string
}

export interface FactoryEvidenceContent {
  kicker: string
  title: string
  sub: string
  cta: string
  items: FactoryEvidenceItem[]
}

export const factoryEvidence: Localized<FactoryEvidenceContent> = {
  en: {
    kicker: 'Verify Us Before You Order',
    title: 'Factory Evidence & Verification',
    sub: 'Independent proof that our facility, equipment, quality system and export records are real — review and verify before any commitment.',
    cta: 'View evidence',
    items: [
      { title: 'Proof Center', body: 'Certificates, third-party inspection reports, audit records and delivered-project evidence in one place.', href: '/proof-center' },
      { title: 'Verify the Factory', body: 'Cross-check our public business records, certifications and verification guidance before you commit.', href: '/verify-factory' },
      { title: 'Factory Audit Checklist', body: 'Download the buyer checklist used when auditing an inflatable SUP factory — facility, equipment and process.', href: '/factory-audit-checklist' },
    ],
  },
  es: {
    kicker: 'Verifícanos antes de pedir',
    title: 'Evidencia de fábrica y verificación',
    sub: 'Pruebas independientes de que nuestras instalaciones, equipos, sistema de calidad y registros de exportación son reales — revisa y verifica antes de cualquier compromiso.',
    cta: 'Ver pruebas',
    items: [
      { title: 'Centro de pruebas', body: 'Certificados, informes de inspección de terceros, registros de auditoría y evidencia de proyectos entregados en un solo lugar.', href: '/proof-center' },
      { title: 'Verifica la fábrica', body: 'Contrasta nuestros registros públicos de empresa, certificaciones y guía de verificación antes de comprometerte.', href: '/verify-factory' },
      { title: 'Checklist de auditoría de fábrica', body: 'Descarga la checklist que los compradores usan para auditar una fábrica de SUP hinchables — instalaciones, equipo y proceso.', href: '/factory-audit-checklist' },
    ],
  },
  fr: {
    kicker: 'Vérifiez avant de commander',
    title: 'Preuves d’usine et vérification',
    sub: 'Des preuves indépendantes que nos installations, nos équipements, notre système qualité et nos registres d’export sont réels — à examiner et à vérifier avant tout engagement.',
    cta: 'Voir les preuves',
    items: [
      { title: 'Centre de preuves', body: 'Certificats, rapports d’inspection par tiers, enregistrements d’audit et preuves de projets livrés, rassemblés au même endroit.', href: '/proof-center' },
      { title: 'Vérifier l’usine', body: 'Recoupez nos registres publics d’entreprise, nos certifications et notre guide de vérification avant de vous engager.', href: '/verify-factory' },
      { title: 'Check-list d’audit d’usine', body: 'Téléchargez la check-list utilisée par les acheteurs pour auditer une usine de SUP gonflables — installations, équipements et processus.', href: '/factory-audit-checklist' },
    ],
  },
  de: {
    kicker: 'Prüfen Sie uns, bevor Sie bestellen',
    title: 'Fabriknachweise & Verifikation',
    sub: 'Unabhängige Nachweise, dass unsere Anlage, Ausrüstung, unser Qualitätssystem und unsere Exportunterlagen real sind — prüfen und verifizieren Sie, bevor Sie sich binden.',
    cta: 'Nachweise ansehen',
    items: [
      { title: 'Nachweiszentrum', body: 'Zertifikate, Prüfberichte Dritter, Auditaufzeichnungen und Nachweise gelieferter Projekte an einem Ort.', href: '/proof-center' },
      { title: 'Die Fabrik verifizieren', body: 'Gleichen Sie unsere öffentlichen Geschäftsunterlagen, Zertifizierungen und Verifikationshinweise ab, bevor Sie sich festlegen.', href: '/verify-factory' },
      { title: 'Checkliste für das Fabrikaudit', body: 'Laden Sie die Checkliste herunter, die Käufer bei der Auditierung einer Fabrik für aufblasbare SUPs verwenden — Anlage, Ausrüstung und Prozess.', href: '/factory-audit-checklist' },
    ],
  },
  it: {
    kicker: "Verificateci prima di ordinare",
    title: 'Certificati di fabbrica e verifica',
    sub: "Prove indipendenti che il nostro impianto, le attrezzature, il sistema qualità e i documenti di esportazione siano reali — verificate e controllate prima di impegnarvi.",
    cta: 'Vedi i documenti',
    items: [
      { title: 'Centro di certificazione', body: 'Certificati, rapporti di ispezione di terzi, registrazioni degli audit e prove dei progetti consegnati in un unico posto.', href: '/proof-center' },
      { title: 'Verifica la fabbrica', body: "Controllate i nostri documenti aziendali pubblici, le certificazioni e le istruzioni di verifica prima di impegnarvi.", href: '/verify-factory' },
      { title: "Checklist per l’audit di fabbrica", body: "Scarica la checklist che gli acquirenti usano per auditare una fabbrica di SUP gonfiabili — impianto, attrezzature e processo.", href: '/factory-audit-checklist' },
    ],
  },
  pt: {
    kicker: 'Verifica-nos antes de encomendar',
    title: 'Provas de fábrica e verificação',
    sub: "Provas independentes de que as nossas instalações, equipamento, sistema de qualidade e registos de exportação são reais — verifica e confirma antes de qualquer compromisso.",
    cta: 'Ver as provas',
    items: [
      { title: 'Centro de provas', body: 'Certificados, relatórios de inspeção por terceiros, registos de auditoria e provas de projetos entregues num único lugar.', href: '/proof-center' },
      { title: 'Verifica a fábrica', body: 'Cruza os nossos registos públicos da empresa, certificações e orientações de verificação antes de te comprometeres.', href: '/verify-factory' },
      { title: 'Checklist de auditoria à fábrica', body: 'Descarrega a checklist que os compradores usam para auditar uma fábrica de SUP insufláveis — instalações, equipamento e processo.', href: '/factory-audit-checklist' },
    ],
  },
  nl: {
    kicker: 'Verifieer ons voordat je bestelt',
    title: 'Fabrieksbewijs & verificatie',
    sub: 'Onafhankelijk bewijs dat onze faciliteiten, apparatuur, kwaliteitssysteem en exportdocumentatie echt zijn — controleer en verifieer vóór enige toezegging.',
    cta: 'Bekijk het bewijs',
    items: [
      { title: 'Bewijscentrum', body: 'Certificaten, inspectierapporten van derden, auditregistraties en bewijs van opgeleverde projecten op één plek.', href: '/proof-center' },
      { title: 'Verifieer de fabriek', body: 'Controleer onze openbare bedrijfsdocumenten, certificeringen en verificatierichtlijnen voordat je je vastlegt.', href: '/verify-factory' },
      { title: 'Controlelijst fabrieksaudit', body: 'Download de checklist die kopers gebruiken bij een audit van een fabriek voor opblaasbare SUPs — faciliteiten, uitrusting en proces.', href: '/factory-audit-checklist' },
    ],
  },
  sv: {
    kicker: 'Verifiera oss innan du beställer',
    title: 'Fabriksbevis & Verifiering',
    sub: 'Oberoende bevis för att vår anläggning, utrustning, kvalitetssystem och exportjournaler är verkliga — granska och verifiera före alla åtaganden.',
    cta: 'Se bevisen',
    items: [
      { title: 'Beviscenter', body: 'Certifikat, tredjepartsinspektionsrapporter, revisionsjournaler och bevis från levererade projekt på ett ställe.', href: '/proof-center' },
      { title: 'Verifiera fabriken', body: 'Kontrollera våra offentliga företagsjournaler, certifieringar och verifieringsvägledning innan du förbinder dig.', href: '/verify-factory' },
      { title: 'Checklista för fabriksrevision', body: 'Ladda ned checklistan köpare använder vid revision av en fabrik för uppblåsbara SUP:er — anläggning, utrustning och process.', href: '/factory-audit-checklist' },
    ],
  },
  no: {
    kicker: 'Verifiser oss før du bestiller',
    title: 'Fabrikkbevis og verifisering',
    sub: 'Uavhengige bevis på at anlegget, utstyret, kvalitetssystemet og eksportregistrene våre er reelle — gjennomgå og verifiser før du inngår forpliktelser.',
    cta: 'Se bevisene',
    items: [
      { title: 'Bevissenter', body: 'Sertifikater, tredjepartsinspeksjonsrapporter, revisjonsregistre og bevis fra leverte prosjekter på ett sted.', href: '/proof-center' },
      { title: 'Verifiser fabrikken', body: 'Sjekk våre offentlige selskapsregistre, sertifiseringer og veiledning for verifisering før du binder deg.', href: '/verify-factory' },
      { title: 'Sjekkliste for fabrikkrevision', body: 'Last ned sjekklisten kjøpere bruker ved revisjon av en fabrikk for oppblåsbare SUP-er — anlegg, utstyr og prosess.', href: '/factory-audit-checklist' },
    ],
  },
  pl: {
    kicker: 'Zweryfikuj nas przed zamówieniem',
    title: 'Dowody z fabryki i weryfikacja',
    sub: 'Niezależne dowody, że nasze obiekty, urządzenia, system jakości i dokumentacja eksportowa są rzeczywiste — przejrzyj i zweryfikuj przed jakimkolwiek zobowiązaniem.',
    cta: 'Zobacz dowody',
    items: [
      { title: 'Centrum dowodów', body: 'Certyfikaty, raporty z inspekcji zewnętrznych, rejestry audytów i dowody ze zrealizowanych projektów w jednym miejscu.', href: '/proof-center' },
      { title: 'Zweryfikuj fabrykę', body: 'Sprawdź nasze publiczne dokumenty firmy, certyfikaty i instrukcje weryfikacji, zanim się zobowiążesz.', href: '/verify-factory' },
      { title: 'Lista kontrolna audytu fabryki', body: 'Pobierz listę kontrolną, której używają kupujący podczas audytu fabryki nadmuchiwanych desek SUP — obiekty, urządzenia i proces.', href: '/factory-audit-checklist' },
    ],
  },
}

/* ─────────────────────────── home: why us (Vatrad advantage) ─────────────────────────── */

export interface WhyBullet {
  title: string
  body: string
}

export interface WhyContent {
  kicker: string
  title: string
  sub: string
  image: string
  imageCaption: string
  bullets: WhyBullet[]
}

export const why: Localized<WhyContent> = {
  en: {
    kicker: 'The Manufacturing Brand',
    title: 'Powered by Vatrad',
    sub: 'iSupfactory is the SUP product development and manufacturing division of Qingdao Vatrad Group Co., Ltd. Our 12,500 m² plant in Laixi, Qingdao has produced inflatable products since 2012, with 25+ engineers across R&D, mold design, materials lab and production engineering averaging 7+ years in inflatable manufacturing, running two production shifts daily.',
    image: 'https://assets.isupfactory.com/images/sups/factory/isupfactory-production-department.webp',
    imageCaption: 'Vatrad manufacturing facility, Qingdao, China',
    bullets: [
      {
        title: '12,500 m² plant',
        body: 'In-house from raw PVC to finished board, in Laixi, Qingdao.',
      },
      {
        title: 'Producing since 2012',
        body: 'Two production shifts daily across SUP and inflatables.',
      },
      {
        title: '25+ engineers',
        body: 'Across R&D, mold design, materials lab and production engineering.',
      },
      {
        title: '7+ years average',
        body: 'Inflatable manufacturing experience per engineer.',
      },
    ],
  },
  es: {
    kicker: 'La marca de fabricación',
    title: 'Con el respaldo de Vatrad',
    sub: 'iSupfactory es la división de desarrollo y fabricación de productos SUP de Qingdao Vatrad Group Co., Ltd. Nuestra planta de 12.500 m² en Laixi, Qingdao produce productos inflables desde 2012, con más de 25 ingenieros entre I+D, diseño de moldes, laboratorio de materiales e ingeniería de producción, con una media de más de 7 años en fabricación de inflables y dos turnos de producción diarios.',
    image: 'https://assets.isupfactory.com/images/sups/factory/isupfactory-production-department.webp',
    imageCaption: 'Instalaciones de fabricación de Vatrad, Qingdao, China',
    bullets: [
      {
        title: 'Planta de 12,500 m²',
        body: 'Del PVC en bruto a la tabla terminada, en Laixi, Qingdao.',
      },
      {
        title: 'Produciendo desde 2012',
        body: 'Dos turnos de producción diarios entre SUP e inflables.',
      },
      {
        title: '+25 ingenieros',
        body: 'Entre I+D, diseño de moldes, laboratorio de materiales e ingeniería de producción.',
      },
      {
        title: '+7 años de media',
        body: 'De experiencia en fabricación de inflables por ingeniero.',
      },
    ],
  },
  fr: {
    kicker: 'La marque de fabrication',
    title: 'Propulsé par Vatrad',
    sub: 'iSupfactory est la division développement produit et fabrication de SUP de Qingdao Vatrad Group Co., Ltd. Notre usine de 12 500 m² à Laixi, Qingdao produit des articles gonflables depuis 2012, avec plus de 25 ingénieurs répartis entre la R&D, la conception de moules, le laboratoire des matériaux et l’ingénierie de production, forts d’une moyenne de plus de 7 ans d’expérience dans la fabrication d’articles gonflables, et fonctionne sur deux postes de production quotidiens.',
    image: 'https://assets.isupfactory.com/images/sups/factory/isupfactory-production-department.webp',
    imageCaption: 'Installations de fabrication de Vatrad, Qingdao, Chine',
    bullets: [
      {
        title: 'Usine de 12 500 m²',
        body: 'De la matière PVC brute à la planche finie, à Laixi, Qingdao.',
      },
      {
        title: 'Production depuis 2012',
        body: 'Deux postes de production quotidiens pour le SUP et les gonflables.',
      },
      {
        title: 'Plus de 25 ingénieurs',
        body: 'R&D, conception de moules, laboratoire des matériaux et ingénierie de production.',
      },
      {
        title: '7 ans de moyenne',
        body: 'd’expérience en fabrication de gonflables par ingénieur.',
      },
    ],
  },
  de: {
    kicker: 'Die Fertigungsmarke',
    title: 'Angetrieben von Vatrad',
    sub: 'iSupfactory ist die Abteilung für SUP-Produktentwicklung und -Fertigung der Qingdao Vatrad Group Co., Ltd. Unser Werk mit 12,500 m² in Laixi, Qingdao stellt seit 2012 aufblasbare Produkte her; mehr als 25 Ingenieure arbeiten in Forschung & Entwicklung, Formenkonstruktion, Materiallabor und Fertigungsplanung und bringen im Durchschnitt über 7 Jahre Erfahrung in der Fertigung aufblasbarer Produkte mit. Es laufen täglich zwei Produktionsschichten.',
    image: 'https://assets.isupfactory.com/images/sups/factory/isupfactory-production-department.webp',
    imageCaption: 'Vatrad-Fertigungsstätte, Qingdao, China',
    bullets: [
      {
        title: '12,500 m² Werk',
        body: 'Vom Roh-PVC bis zum fertigen Board vollständig intern, in Laixi, Qingdao.',
      },
      {
        title: 'Seit 2012 in Produktion',
        body: 'Zwei Produktionsschichten täglich bei SUP und aufblasbaren Produkten.',
      },
      {
        title: 'Mehr als 25 Ingenieure',
        body: 'In Forschung & Entwicklung, Formenkonstruktion, Materiallabor und Fertigungsplanung.',
      },
      {
        title: 'Im Schnitt über 7 Jahre',
        body: 'Erfahrung in der Fertigung aufblasbarer Produkte pro Ingenieur.',
      },
    ],
  },
  it: {
    kicker: 'Il marchio di produzione',
    title: 'Alimentato da Vatrad',
    sub: "iSupfactory è la divisione di sviluppo e produzione dei prodotti SUP di Qingdao Vatrad Group Co., Ltd. Il nostro stabilimento di 12,500 m² a Laixi, Qingdao, produce articoli gonfiabili dal 2012; oltre 25 ingegneri lavorano in ricerca e sviluppo, progettazione degli stampi, laboratorio materiali e pianificazione della produzione, con una media di oltre 7 anni di esperienza nella produzione di articoli gonfiabili. Ogni giorno sono attivi due turni di produzione.",
    image: 'https://assets.isupfactory.com/images/sups/factory/isupfactory-production-department.webp',
    imageCaption: 'Stabilimento di produzione Vatrad, Qingdao, Cina',
    bullets: [
      {
        title: 'Stabilimento di 12,500 m²',
        body: 'Dal PVC grezzo alla tavola finita completamente in sede, a Laixi, Qingdao.',
      },
      {
        title: 'In produzione dal 2012',
        body: 'Due turni di produzione al giorno per SUP e articoli gonfiabili.',
      },
      {
        title: 'Oltre 25 ingegneri',
        body: 'In ricerca e sviluppo, progettazione degli stampi, laboratorio materiali e pianificazione della produzione.',
      },
      {
        title: 'In media oltre 7 anni',
        body: 'Esperienza nella produzione di articoli gonfiabili per ingegnere.',
      },
    ],
  },
  pt: {
    kicker: 'A marca de produção',
    title: 'Alimentado pela Vatrad',
    sub: "iSupfactory é a divisão de desenvolvimento e produção de produtos SUP da Qingdao Vatrad Group Co., Ltd. A nossa fábrica de 12,500 m² em Laixi, Qingdao, produz artigos insufláveis desde 2012; mais de 25 engenheiros trabalham em investigação e desenvolvimento, design de moldes, laboratório de materiais e planeamento de produção, com uma média de mais de 7 anos de experiência na produção de artigos insufláveis. Funcionam dois turnos de produção por dia.",
    image: 'https://assets.isupfactory.com/images/sups/factory/isupfactory-production-department.webp',
    imageCaption: 'Instalação de produção da Vatrad, Qingdao, China',
    bullets: [
      {
        title: 'Fábrica de 12,500 m²',
        body: 'Do PVC bruto à tábua acabada, tudo internamente, em Laixi, Qingdao.',
      },
      {
        title: 'Em produção desde 2012',
        body: 'Dois turnos de produção por dia para SUP e artigos insufláveis.',
      },
      {
        title: 'Mais de 25 engenheiros',
        body: 'Em investigação e desenvolvimento, design de moldes, laboratório de materiais e planeamento de produção.',
      },
      {
        title: 'Em média mais de 7 anos',
        body: 'Experiência na produção de artigos insufláveis por engenheiro.',
      },
    ],
  },
  nl: {
    kicker: 'Het productiemerk',
    title: 'Aangedreven door Vatrad',
    sub: 'iSupfactory is de SUP-productontwikkeling- en productiedivisie van Qingdao Vatrad Group Co., Ltd. Onze fabriek van 12,500 m² in Laixi, Qingdao produceert sinds 2012 opblaasbare artikelen; meer dan 25 ingenieurs werken aan R&D, matrijsontwerp, materiaallaboratorium en productieplanning, met gemiddeld meer dan 7 jaar ervaring in de productie van opblaasbare artikelen. Dagelijks draaien er twee productieploegen.',
    image: 'https://assets.isupfactory.com/images/sups/factory/isupfactory-production-department.webp',
    imageCaption: 'Vatrad-productiefaciliteit, Qingdao, China',
    bullets: [
      {
        title: 'Fabriek van 12,500 m²',
        body: 'Van ruw PVC tot afgewerkte plank, volledig intern, in Laixi, Qingdao.',
      },
      {
        title: 'In productie sinds 2012',
        body: 'Twee productieploegen per dag voor SUP en opblaasbare artikelen.',
      },
      {
        title: 'Meer dan 25 ingenieurs',
        body: 'In R&D, matrijsontwerp, materiaallaboratorium en productieplanning.',
      },
      {
        title: 'Gemiddeld meer dan 7 jaar',
        body: 'Ervaring in de productie van opblaasbare artikelen per ingenieur.',
      },
    ],
  },
  sv: {
    kicker: 'Tillverkningsvarumärket',
    title: 'Drivs av Vatrad',
    sub: 'iSupfactory är SUP-produktutvecklings- och tillverkningsdivisionen inom Qingdao Vatrad Group Co., Ltd. Vår anläggning på 12 500 m² i Laixi, Qingdao, har producerat uppblåsbara produkter sedan 2012; över 25 ingenjörer arbetar med FoU, formdesign, materiallaboratorium och produktionsplanering med i genomsnitt mer än 7 års erfarenhet av tillverkning av uppblåsbara produkter. Två produktionsskift körs dagligen.',
    image: 'https://assets.isupfactory.com/images/sups/factory/isupfactory-production-department.webp',
    imageCaption: 'Vatrads tillverkningsanläggning, Qingdao, Kina',
    bullets: [
      {
        title: '12 500 m² anläggning',
        body: 'Från rå PVC till färdig bräda, helt internt, i Laixi, Qingdao.',
      },
      {
        title: 'I produktion sedan 2012',
        body: 'Två produktionsskift dagligen för SUP och uppblåsbara produkter.',
      },
      {
        title: 'Över 25 ingenjörer',
        body: 'Inom FoU, formdesign, materiallaboratorium och produktionsplanering.',
      },
      {
        title: 'I genomsnitt över 7 år',
        body: 'Erfarenhet av tillverkning av uppblåsbara produkter per ingenjör.',
      },
    ],
  },
  no: {
    kicker: 'Produksjonsmerket',
    title: 'Drevet av Vatrad',
    sub: 'iSupfactory er produktutviklings- og produksjonsdivisjonen i Qingdao Vatrad Group Co., Ltd. Anlegget vårt på 12 500 m² i Laixi, Qingdao, har produsert oppblåsbare produkter siden 2012; over 25 ingeniører jobber med FoU, formdesign, materiallaboratorium og produksjonsplanlegging med i gjennomsnitt mer enn 7 års erfaring med produksjon av oppblåsbare produkter. To produksjonsskift kjøres daglig.',
    image: 'https://assets.isupfactory.com/images/sups/factory/isupfactory-production-department.webp',
    imageCaption: 'Vatrads produksjonsanlegg, Qingdao, Kina',
    bullets: [
      {
        title: '12 500 m² anlegg',
        body: 'Fra rå PVC til ferdig brett, helt internt, i Laixi, Qingdao.',
      },
      {
        title: 'I produksjon siden 2012',
        body: 'To produksjonsskift daglig for SUP-er og oppblåsbare produkter.',
      },
      {
        title: 'Over 25 ingeniører',
        body: 'Innen FoU, formdesign, materiallaboratorium og produksjonsplanlegging.',
      },
      {
        title: 'I gjennomsnitt over 7 år',
        body: 'Erfaring med produksjon av oppblåsbare produkter per ingeniør.',
      },
    ],
  },
  pl: {
    kicker: 'Znak produkcji',
    title: 'Napędzane przez Vatrad',
    sub: 'iSupfactory to dział rozwoju i produkcji firmy Qingdao Vatrad Group Co., Ltd. Nasz zakład o powierzchni 12 500 m² w Laixi, w Qingdao, produkuje nadmuchiwane produkty od 2012 roku; ponad 25 inżynierów pracuje nad rozwojem produktu, projektowaniem form, laboratorium materiałowym i planowaniem produkcji, a średnio mają ponad 7 lat doświadczenia w produkcji nadmuchiwanych produktów. Codziennie pracują dwa zmiany produkcyjne.',
    image: 'https://assets.isupfactory.com/images/sups/factory/isupfactory-production-department.webp',
    imageCaption: 'Zakład produkcyjny Vatrad, Qingdao, Chiny',
    bullets: [
      {
        title: 'Zakład 12 500 m²',
        body: 'Od surowego PVC po gotową deskę, w całości u nas, w Laixi, Qingdao.',
      },
      {
        title: 'W produkcji od 2012 roku',
        body: 'Dwie zmiany produkcyjne dziennie na deski SUP i inne produkty nadmuchiwane.',
      },
      {
        title: 'Ponad 25 inżynierów',
        body: 'W obszarze badań i rozwoju, projektowania form, laboratorium materiałowego i planowania produkcji.',
      },
      {
        title: 'Średnio ponad 7 lat',
        body: 'Doświadczenia w produkcji nadmuchiwanych produktów w przeliczeniu na inżyniera.',
      },
    ],
  },
}

/* ─────────────────────────── capability strip ─────────────────────────── */

export const strip: Localized<string[]> = {
  en: ['OEM & ODM', 'Private Label', 'Sample Service', 'Design & Artwork', 'QC on every run', 'Worldwide export'],
  es: ['OEM & ODM', 'Marca privada', 'Servicio de muestras', 'Diseño y arte', 'QC en cada lote', 'Exportación mundial'],
  fr: ['OEM & ODM', 'Marque privée', 'Service d’échantillons', 'Conception & graphismes', 'QC sur chaque lot', 'Exportation mondiale'],
  de: ['OEM & ODM', 'Private Label', 'Musterservice', 'Design & Artwork', 'QC bei jeder Charge', 'Weltweiter Export'],
  it: ['OEM & ODM', 'Private Label', 'Servizio campioni', 'Design & Artwork', 'QC su ogni partita', 'Esportazione mondiale'],
  pt: ['OEM & ODM', 'Private Label', 'Serviço de amostras', 'Design & Artwork', 'QC em cada remessa', 'Exportação mundial'],
  nl: ['OEM & ODM', 'Private Label', 'Monsterservice', 'Design & Artwork', 'QC bij elke partij', 'Wereldwijde export'],
  sv: ['OEM & ODM', 'Privat etikett', 'Provservice', 'Design & Artwork', 'QC vid varje batch', 'Export över hela världen'],
  no: ['OEM & ODM', 'Private Label', 'Prøvetjeneste', 'Design & Artwork', 'QC ved hver batch', 'Eksport globalt'],
  pl: ['OEM & ODM', 'Private Label', 'Usługa próbek', 'Projekt i grafika', 'QC przy każdej partii', 'Eksport na cały świat'],
}

/* ─────────────────────────── home: trust bar ─────────────────────────── */

export interface TrustStat {
  value: string
  label: string
}

export interface TrustBarContent {
  stats: TrustStat[]
}

export const trustBar: Localized<TrustBarContent> = {
  en: {
    stats: [
      { value: `MOQ ${MOQ_SHORT.standardRun}`, label: 'for volume production; pilot runs from 20–50 pcs' },
      { value: FACTS.sampleTime, label: 'samples to your desk after artwork confirmation' },
      { value: FACTS.leadTime, label: 'batch production after confirmed PO and deposit' },
      { value: FACTS.annualCapacity, label: 'annual in-house capacity at the Qingdao plant' },
      { value: FACTS.warehouseM2, label: 'owned plant, from raw PVC to finished board' },
      { value: FACTS.workers, label: 'factory workers and engineers on site' },
      { value: 'ISO 9001 · CE · BSCI', label: 'certified; REACH/RoHS compliant materials' },
      { value: FACTS.exportCountries, label: 'export markets across the EU, US, AU and Asia' },
      { value: '18 PSI / 24 h', label: '100% inflation & leakage test on every board before packing' },
      { value: 'MSL Fusion', label: 'multi-layer fusion welding with woven drop-stitch constructions' },
    ],
  },
  es: {
    stats: [
      { value: `MOQ ${MOQ_SHORT.standardRun}`, label: 'para volumen; piloto desde 20–50 uds.' },
      { value: FACTS.sampleTime, label: 'muestras en tu escritorio tras confirmar el arte' },
      { value: FACTS.leadTime, label: 'producción en serie tras PO y depósito confirmados' },
      { value: FACTS.annualCapacity, label: 'capacidad anual interna en la planta de Qingdao' },
      { value: FACTS.warehouseM2, label: 'planta propia, del PVC en bruto a la tabla terminada' },
      { value: FACTS.workers, label: 'operarios e ingenieros de planta' },
      { value: 'ISO 9001 · CE · BSCI', label: 'certificada; materiales conformes a REACH/RoHS' },
      { value: FACTS.exportCountries, label: 'mercados de exportación en la UE, EE. UU., Australia y Asia' },
      { value: '18 PSI / 24 h', label: 'prueba de inflado y estanqueidad al 100% en cada tabla antes del embalaje' },
      { value: 'MSL Fusion', label: 'soldadura de fusión multicapa con construcciones de drop-stitch tejido' },
    ],
  },
  fr: {
    stats: [
      { value: `MOQ ${MOQ_SHORT.standardRun}`, label: 'pour la production en volume ; lots pilotes à partir de 20–50 pcs' },
      { value: FACTS.sampleTime, label: 'échantillons livrés après confirmation du graphisme' },
      { value: FACTS.leadTime, label: 'production en série après PO et acompte confirmés' },
      { value: FACTS.annualCapacity, label: 'de capacité annuelle intégrée à l’usine de Qingdao' },
      { value: FACTS.warehouseM2, label: 'd’usine intégrée, de la matière PVC brute à la planche finie' },
      { value: FACTS.workers, label: 'd’ouvriers et d’ingénieurs sur site' },
      { value: 'ISO 9001 · CE · BSCI', label: 'certifiés ; matériaux conformes REACH/RoHS' },
      { value: FACTS.exportCountries, label: 'marchés d’exportation en UE, USA, Australie et Asie' },
      { value: '18 PSI / 24 h', label: 'test de gonflage et d’étanchéité à 100 % sur chaque planche avant emballage' },
      { value: 'MSL Fusion', label: 'soudure par fusion multicouche avec constructions drop-stitch tissées' },
    ],
  },
  de: {
    stats: [
      { value: `MOQ ${MOQ_SHORT.standardRun}`, label: 'für Serienproduktion; Pilotserien ab 20–50 Stück' },
      { value: FACTS.sampleTime, label: 'Muster auf Ihrem Schreibtisch nach Grafikbestätigung' },
      { value: FACTS.leadTime, label: 'Serienfertigung nach bestätigter PO und Anzahlung' },
      { value: FACTS.annualCapacity, label: 'jährliche Eigenkapazität im Werk Qingdao' },
      { value: FACTS.warehouseM2, label: 'eigenes Werk, vom Roh-PVC bis zum fertigen Board' },
      { value: FACTS.workers, label: 'Werksmitarbeiter und Ingenieure vor Ort' },
      { value: 'ISO 9001 · CE · BSCI', label: 'zertifiziert; REACH/RoHS-konforme Materialien' },
      { value: FACTS.exportCountries, label: 'Exportmärkte in der EU, den USA, Australien und Asien' },
      { value: '18 PSI / 24 h', label: '100%-Druck- und Dichtigkeitstest bei jedem Board vor dem Verpacken' },
      { value: 'MSL Fusion', label: 'mehrschichtiges Fusionsschweißen mit gewebten Drop-Stitch-Konstruktionen' },
    ],
  },
  it: {
    stats: [
      { value: `MOQ ${MOQ_SHORT.standardRun}`, label: 'per la produzione in serie; lotti pilota da 20–50 pezzi' },
      { value: FACTS.sampleTime, label: 'campioni sulla tua scrivania dopo la conferma della grafica' },
      { value: FACTS.leadTime, label: 'produzione in serie dopo PO e acconto confermati' },
      { value: FACTS.annualCapacity, label: 'capacità annuale interna nello stabilimento di Qingdao' },
      { value: FACTS.warehouseM2, label: 'stabilimento di proprietà, dal PVC grezzo alla tavola finita' },
      { value: FACTS.workers, label: 'operai e ingegneri di stabilimento sul posto' },
      { value: 'ISO 9001 · CE · BSCI', label: 'certificati; materiali conformi a REACH/RoHS' },
      { value: FACTS.exportCountries, label: 'mercati di esportazione in UE, USA, Australia e Asia' },
      { value: '18 PSI / 24 h', label: "test di gonfiaggio e tenuta al 100% su ogni tavola prima dell’imballaggio" },
      { value: 'MSL Fusion', label: 'saldatura a fusione multistrato con costruzioni drop-stitch intrecciate' },
    ],
  },
  pt: {
    stats: [
      { value: `MOQ ${MOQ_SHORT.standardRun}`, label: 'para produção em série; lotes piloto a partir de 20–50 unidades' },
      { value: FACTS.sampleTime, label: 'amostras na tua secretária após a confirmação da gráfica' },
      { value: FACTS.leadTime, label: 'produção em série após PO e sinal confirmados' },
      { value: FACTS.annualCapacity, label: 'capacidade anual interna na fábrica de Qingdao' },
      { value: FACTS.warehouseM2, label: 'fábrica própria, do PVC bruto à tábua acabada' },
      { value: FACTS.workers, label: 'operários e engenheiros da fábrica no local' },
      { value: 'ISO 9001 · CE · BSCI', label: 'certificados; materiais conformes com REACH/RoHS' },
      { value: FACTS.exportCountries, label: 'mercados de exportação na UE, EUA, Austrália e Ásia' },
      { value: '18 PSI / 24 h', label: 'teste de insuflagem e estanquicidade a 100% em cada tábua antes da embalagem' },
      { value: 'MSL Fusion', label: 'soldadura por fusão multicamada com construções drop-stitch tecidas' },
    ],
  },
  nl: {
    stats: [
      { value: `MOQ ${MOQ_SHORT.standardRun}`, label: 'voor serieproductie; pilotseries vanaf 20–50 stuks' },
      { value: FACTS.sampleTime, label: 'monsters op je bureau na bevestiging van de grafische vormgeving' },
      { value: FACTS.leadTime, label: 'serieproductie na bevestigde PO en aanbetaling' },
      { value: FACTS.annualCapacity, label: 'jaarlijkse interne capaciteit in de fabriek in Qingdao' },
      { value: FACTS.warehouseM2, label: 'eigen fabriek, van ruw PVC tot afgewerkte plank' },
      { value: FACTS.workers, label: 'fabrieksarbeiders en ingenieurs ter plaatse' },
      { value: 'ISO 9001 · CE · BSCI', label: 'gecertificeerd; REACH/RoHS-conforme materialen' },
      { value: FACTS.exportCountries, label: 'exportmarkten in de EU, VS, Australië en Azië' },
      { value: '18 PSI / 24 h', label: '100% opblaas- en dichtheidstest op elke plank vóór het verpakken' },
      { value: 'MSL Fusion', label: 'meerlaags fusielassen met geweven drop-stitch-constructies' },
    ],
  },
  sv: {
    stats: [
      { value: `MOQ ${MOQ_SHORT.standardRun}`, label: 'för serietillverkning; pilotkörningar från 20–50 st' },
      { value: FACTS.sampleTime, label: 'prover på ditt bord efter bekräftad grafik' },
      { value: FACTS.leadTime, label: 'serietillverkning efter bekräftad PO och insättning' },
      { value: FACTS.annualCapacity, label: 'årlig intern kapacitet vid Qingdao-anläggningen' },
      { value: FACTS.warehouseM2, label: 'egen anläggning, från rå PVC till färdig bräda' },
      { value: FACTS.workers, label: 'fabriksarbetare och ingenjörer på plats' },
      { value: 'ISO 9001 · CE · BSCI', label: 'certifierade; REACH/RoHS-kompatibla material' },
      { value: FACTS.exportCountries, label: 'exportmarknader i EU, USA, Australien och Asien' },
      { value: '18 PSI / 24 h', label: '100 % inflations- & läckagetest på varje bräda före packning' },
      { value: 'MSL Fusion', label: 'flerskiktsfusionssvetsning med vävda drop-stitch-konstruktioner' },
    ],
  },
  no: {
    stats: [
      { value: `MOQ ${MOQ_SHORT.standardRun}`, label: 'for serietillverkning; pilotserier fra 20–50 stk' },
      { value: FACTS.sampleTime, label: 'prøver på ditt brett etter godkjent grafikk' },
      { value: FACTS.leadTime, label: 'serietillverkning etter bekreftet PO og depositum' },
      { value: FACTS.annualCapacity, label: 'årlig intern kapasitet ved anlegget i Qingdao' },
      { value: FACTS.warehouseM2, label: 'egen fabrikk, fra rå PVC til ferdig brett' },
      { value: FACTS.workers, label: 'fabrikkansatte og ingeniører på stedet' },
      { value: 'ISO 9001 · CE · BSCI', label: 'sertifisert; REACH/RoHS-kompatible materialer' },
      { value: FACTS.exportCountries, label: 'eksportmarkeder i EU, USA, Australia og Asia' },
      { value: '18 PSI / 24 t', label: '100 % inflaterings- og lekkasjetest på hvert brett før pakking' },
      { value: 'MSL Fusion', label: 'flerlagssveising med vevde drop-stitch-konstruksjoner' },
    ],
  },
  pl: {
    stats: [
      { value: `MOQ ${MOQ_SHORT.standardRun}`, label: 'dla produkcji seryjnej; serie pilotażowe od 20–50 szt' },
      { value: FACTS.sampleTime, label: 'próbki Twojej deski po zatwierdzeniu grafiki' },
      { value: FACTS.leadTime, label: 'produkcja seryjna po potwierdzeniu zamówienia i zaliczki' },
      { value: FACTS.annualCapacity, label: 'roczna wydajność zakładu w Qingdao' },
      { value: FACTS.warehouseM2, label: 'własna fabryka, od surowego PVC po gotową deskę' },
      { value: FACTS.workers, label: 'pracownicy fabryki i inżynierowie na miejscu' },
      { value: 'ISO 9001 · CE · BSCI', label: 'certyfikowane; materiały zgodne z REACH/RoHS' },
      { value: FACTS.exportCountries, label: 'rynki eksportowe w UE, USA, Australii i Azji' },
      { value: '18 PSI / 24 godz.', label: '100 % test nadmuchiwania i szczelności każdej deski przed pakowaniem' },
      { value: 'MSL Fusion', label: 'wielowarstwowe zgrzewanie HF z tkaninami drop-stitch' },
    ],
  },
}

/* ─────────────────────────── home: Manufacturing Scope (OEM/ODM/Private Label/Volume) ─────────────────────────── */

export interface ScopeCard {
  title: string
  body: string
}

export interface SolveContent {
  kicker: string
  title: string
  sub: string
  cta: string
  items: ScopeCard[]
}

export const solve: Localized<SolveContent> = {
  en: {
    kicker: 'OEM & ODM Manufacturing',
    title: 'Two Ways to Build Your SUP Product',
    sub: 'OEM when you bring the specification, ODM when you bring the idea — plus private label and volume supply for brands who want a proven platform.',
    cta: 'Request an OEM Quote',
    items: [
      {
        title: 'OEM — Build to Your Specification',
        body: COLLABORATION_MODES.oem.full,
      },
      {
        title: 'ODM — Develop the Board with Our Engineering Team',
        body: COLLABORATION_MODES.odm.full,
      },
      {
        title: 'Private Label — Your Brand on a Proven Platform',
        body: COLLABORATION_MODES.privateLabel.full,
      },
      {
        title: 'Volume Supply — Repeat and Fleet Orders',
        body: 'Large-run production for distributors, rental operators and resort groups, with locked specifications, batch traceability and consistent construction across reorders.',
      },
    ],
  },
  es: {
    kicker: 'Fabricación OEM y ODM',
    title: 'Dos formas de desarrollar tu producto SUP',
    sub: 'OEM si traes la especificación, ODM si traes la idea — además de marca privada y suministro por volumen para marcas que quieren una plataforma probada.',
    cta: 'Solicita un presupuesto OEM',
    items: [
      {
        title: 'OEM — Fabrica según tu especificación',
        body: 'Fabricamos según tu especificación aprobada: planos, dimensiones, materiales, construcción y embalaje. Tú eres propietario del diseño, los moldes y la propiedad intelectual.',
      },
      {
        title: 'ODM — Desarrolla la tabla con nuestro equipo de ingeniería',
        body: 'Nuestro equipo de ingeniería desarrolla la estructura, construcción, gráficos y embalaje a partir de tu brief — ya sea un concepto de mercado, un objetivo de rendimiento o la adaptación de una plataforma probada. La fábrica propone el diseño; el comprador lo aprueba antes de la producción.',
      },
      {
        title: 'Marca privada — Tu marca en una plataforma probada',
        body: 'Tu marca, gráficos y embalaje sobre una plataforma validada existente — sin desarrollo de molde, sin cambios estructurales. La vía más rápida del concepto a la entrega.',
      },
      {
        title: 'Suministro por volumen — pedidos repetidos y de flota',
        body: 'Producción en volumen para distribuidores, operadores de alquiler y grupos hoteleros, con especificaciones fijadas, trazabilidad por lote y construcción homogénea entre reposiciones.',
      },
    ],
  },
  fr: {
    kicker: 'Fabrication OEM et ODM',
    title: 'Deux façons de développer votre produit SUP',
    sub: 'L’OEM quand vous apportez la spécification, l’ODM quand vous apportez l’idée — plus la marque privée et le volume pour les marques qui veulent une plateforme éprouvée.',
    cta: 'Demander un devis OEM',
    items: [
      {
        title: 'OEM — Fabriquez selon votre spécification',
        body: 'OEM (fabrication selon la spécification du client) : nous fabriquons selon votre spécification approuvée — vos plans, vos dimensions, vos matériaux, votre construction et votre emballage. Vous êtes propriétaire du design, des moules et de la propriété intellectuelle.',
      },
      {
        title: 'ODM — Développez la planche avec notre équipe d’ingénierie',
        body: 'ODM : notre équipe d’ingénierie développe la structure de la planche, sa construction, son graphisme et son emballage à partir de votre cahier des charges — qu’il s’agisse d’un concept de marché, d’un objectif de performance ou de l’adaptation d’une plateforme éprouvée. L’usine propose le design ; l’acheteur l’approuve avant la production.',
      },
      {
        title: 'Marque privée — Votre marque sur une plateforme éprouvée',
        body: 'Marque privée : votre marque, vos graphismes et votre emballage sur une plateforme existante validée — sans développement de moule ni modification structurelle. La voie la plus rapide du concept à la livraison.',
      },
      {
        title: 'Fourniture en volume — Commandes récurrentes et de flotte',
        body: 'Production en grandes séries pour les distributeurs, les opérateurs de location et les groupes hôteliers, avec spécifications figées, traçabilité par lot et construction homogène d’une commande récurrente à l’autre.',
      },
    ],
  },
  de: {
    kicker: 'OEM- & ODM-Fertigung',
    title: 'Zwei Wege, Ihr SUP-Produkt aufzubauen',
    sub: 'OEM, wenn Sie die Spezifikation mitbringen, ODM, wenn Sie die Idee mitbringen — zusätzlich Private Label und Mengenversorgung für Marken, die eine bewährte Plattform nutzen möchten.',
    cta: 'OEM-Angebot anfordern',
    items: [
      {
        title: 'OEM — Fertigung nach Ihrer Spezifikation',
        body: 'OEM (Original Equipment Manufacturing): Wir fertigen nach Ihrer freigegebenen Spezifikation — Ihre Zeichnungen, Maße, Materialien, Konstruktion und Verpackung. Sie besitzen das Design, die Formen und das geistige Eigentum.',
      },
      {
        title: 'ODM — Entwickeln Sie das Board mit unserem Ingenieurteam',
        body: 'ODM (Original Design Manufacturing): Unser Ingenieurteam entwickelt Boardstruktur, Konstruktion, Grafik und Verpackung auf Basis Ihres Briefings — sei es ein Marktkonzept, ein Leistungsziel oder die Adaption einer bewährten Plattform. Die Fabrik schlägt das Design vor; der Käufer gibt es vor der Produktion frei.',
      },
      {
        title: 'Private Label — Ihre Marke auf einer bewährten Plattform',
        body: 'Private Label: Ihre Marke, Ihre Grafik und Ihre Verpackung auf einer bestehenden validierten Plattform — ohne Formenentwicklung, ohne strukturelle Änderungen. Der schnellste Weg vom Konzept zur Auslieferung.',
      },
      {
        title: 'Mengenversorgung — Folge- und Flottenaufträge',
        body: 'Großserienproduktion für Distributoren, Verleihbetriebe und Resort-Gruppen, mit festgeschriebenen Spezifikationen, Chargenrückverfolgbarkeit und gleichbleibender Konstruktion über Nachbestellungen hinweg.',
      },
    ],
  },
  it: {
    kicker: 'Produzione OEM & ODM',
    title: 'Due modi per costruire il tuo prodotto SUP',
    sub: "OEM quando porti tu la specifica, ODM quando porti tu l’idea — più private label e fornitura in volume per i marchi che vogliono una piattaforma collaudata.",
    cta: 'Richiedi un preventivo OEM',
    items: [
      {
        title: 'OEM — Produzione secondo la tua specifica',
        body: "OEM (produzione su specifica del cliente): produciamo secondo la tua specifica approvata — i tuoi disegni, dimensioni, materiali, costruzione e imballaggio. Possiedi il design, gli stampi e la proprietà intellettuale.",
      },
      {
        title: 'ODM — Sviluppa la tavola con il nostro team di ingegneri',
        body: "ODM (produzione su design originale): il nostro team di ingegneri sviluppa struttura, costruzione, grafica e imballaggio della tavola in base al tuo briefing — sia un concetto di mercato, un obiettivo di prestazione o l’adattamento di una piattaforma collaudata. La fabbrica propone il design; l’acquirente lo approva prima della produzione.",
      },
      {
        title: 'Private Label — Il tuo marchio su una piattaforma collaudata',
        body: "Private Label: il tuo marchio, la tua grafica e il tuo imballaggio su una piattaforma esistente e validata — senza sviluppo di stampi, senza modifiche strutturali. La strada più rapida dal concept alla consegna.",
      },
      {
        title: 'Fornitura in volume — ordini ricorrenti e flotte',
        body: "Produzione in grandi serie per distributori, noleggiatori e gruppi resort, con specifiche vincolanti, tracciabilità dei lotti e costruzione costante tra un riordino e l’altro.",
      },
    ],
  },
  pt: {
    kicker: 'Produção OEM & ODM',
    title: 'Duas formas de construir o teu produto SUP',
    sub: "OEM quando trazes tu a especificação, ODM quando trazes tu a ideia — mais private label e fornecimento em volume para marcas que querem uma plataforma comprovada.",
    cta: 'Solicita um orçamento OEM',
    items: [
      {
        title: 'OEM — Produção segundo a tua especificação',
        body: "OEM (produção segundo a especificação do cliente): produzimos de acordo com a tua especificação aprovada — os teus desenhos, dimensões, materiais, construção e embalagem. És dono do design, dos moldes e da propriedade intelectual.",
      },
      {
        title: 'ODM — Desenvolve a tábua com a nossa equipa de engenharia',
        body: "ODM (produção segundo design original): a nossa equipa de engenharia desenvolve a estrutura, construção, gráfica e embalagem da tábua com base no teu briefing — seja um conceito de mercado, um objetivo de desempenho ou a adaptação de uma plataforma comprovada. A fábrica propõe o design; o comprador aprova antes da produção.",
      },
      {
        title: 'Private Label — A tua marca numa plataforma comprovada',
        body: "Private Label: a tua marca, a tua gráfica e a tua embalagem numa plataforma existente e validada — sem desenvolvimento de moldes, sem alterações estruturais. O caminho mais rápido do conceito à entrega.",
      },
      {
        title: 'Fornecimento em volume — encomendas recorrentes e frotas',
        body: "Produção em grande série para distribuidores, alugueres e grupos hoteleiros, com especificações vinculativas, rastreabilidade dos lotes e construção constante entre reencomendas.",
      },
    ],
  },
  nl: {
    kicker: 'OEM & ODM-productie',
    title: 'Twee manieren om jouw SUP-product te bouwen',
    sub: 'OEM wanneer jij de specificatie aanlevert, ODM wanneer jij het idee aanlevert — plus private label en volumelevering voor merken die een bewezen platform willen.',
    cta: 'Een OEM-offerte aanvragen',
    items: [
      {
        title: 'OEM — Productie volgens jouw specificatie',
        body: 'OEM (productie volgens klantspecificatie): wij produceren volgens jouw goedgekeurde specificatie — jouw tekeningen, afmetingen, materialen, constructie en verpakking. Jij bent eigenaar van het design, de matrijzen en het intellectueel eigendom.',
      },
      {
        title: 'ODM — Ontwikkel de plank met ons engineeringteam',
        body: 'ODM (productie op basis van origineel design): ons engineeringteam ontwikkelt de structuur, constructie, grafische vormgeving en verpakking van de plank op basis van jouw briefing — of het nu een marktconcept, een prestatiedoel of de aanpassing van een bewezen platform is. De fabriek stelt het design voor; de koper keurt het goed vóór de productie.',
      },
      {
        title: 'Private Label — Jouw merk op een bewezen platform',
        body: 'Private Label: jouw merk, jouw grafische vormgeving en jouw verpakking op een bestaand gevalideerd platform — zonder matrijsontwikkeling, zonder structurele wijzigingen. De snelste weg van concept tot levering.',
      },
      {
        title: 'Volumelevering — herhalings- en vlootorders',
        body: 'Productie in grote series voor distributeurs, verhuurbedrijven en resortgroepen, met bindende specificaties, traceerbaarheid van batches en constante constructie bij elke nabestelling.',
      },
    ],
  },
  sv: {
    kicker: 'OEM & ODM-tillverkning',
    title: 'Två Sätt Att Bygga Din SUP-produkt',
    sub: 'OEM när du har specifikationen, ODM när du har idén — plus privat etikett och volymleverans för varumärken som vill ha en beprövad plattform.',
    cta: 'Begär en OEM-offert',
    items: [
      {
        title: 'OEM — Bygg enligt din specifikation',
        body: 'OEM (produktion enligt kundspecifikation): vi producerar enligt din godkända specifikation — dina ritningar, mått, material, konstruktion och förpackning. Du äger designen, formarna och den immateriella egendomen.',
      },
      {
        title: 'ODM — Utveckla brädan med vårt ingenjörsteam',
        body: 'ODM (produktion enligt originaldesign): vårt ingenjörsteam utvecklar brädans struktur, konstruktion, grafik och förpackning utifrån din brief — oavsett om det är ett marknadskoncept, ett prestationsmål eller en anpassning av en beprövad plattform. Fabriken föreslår designen; köparen godkänner den innan produktionen.',
      },
      {
        title: 'Privat etikett — Ditt varumärke på en beprövad plattform',
        body: 'Privat etikett: ditt varumärke, din grafik och din förpackning på en befintlig, validerad plattform — utan formutveckling, utan strukturella förändringar. Den snabbaste vägen från koncept till leverans.',
      },
      {
        title: 'Volymleverans — återkommande och flottorder',
        body: 'Storskalig produktion för distributörer, uthyrningsoperatörer och resortgrupper, med bindande specifikationer, batchspårbarhet och konsekvent konstruktion vid varje återbeställning.',
      },
    ],
  },
  no: {
    kicker: 'OEM- og ODM-produksjon',
    title: 'To måter å bygge SUP-produktet ditt',
    sub: 'OEM når du har spesifikasjonen, ODM når du har ideen — i tillegg til private label og volumleveranser for merker som vil ha en testet plattform.',
    cta: 'Be om et OEM-tilbud',
    items: [
      {
        title: 'OEM — bygg etter din spesifikasjon',
        body: 'OEM (produksjon etter kundespesifikasjon): vi produserer etter din godkjente spesifikasjon — dine tegninger, mål, materialer, konstruksjon og emballasje. Du eier designet, formene og den immaterielle eiendommen.',
      },
      {
        title: 'ODM — utvikle brettet med ingeniørteamet vårt',
        body: 'ODM (produksjon etter originaldesign): ingeniørteamet vårt utvikler brettets struktur, konstruksjon, grafikk og emballasje ut fra briefen din — enten det er et marknadskonsept, et ytelsesmål eller en tilpasning av en testet plattform. Fabrikken foreslår designet; kjøperen godkjenner det før produksjon.',
      },
      {
        title: 'Private label — merket ditt på en testet plattform',
        body: 'Private label: merket ditt, grafikken din og emballasjen din på en eksisterende, validert plattform — uten formutvikling, uten strukturelle endringer. Den raskeste veien fra konsept til levering.',
      },
      {
        title: 'Volumleveranse — gjentakende bestillinger og flåteordrer',
        body: 'Storskalaproduksjon for distributører, utleieoperatører og resortgrupper, med bindende spesifikasjoner, batchspårbarhet og konsistent konstruksjon ved hver gjentakende bestilling.',
      },
    ],
  },
  pl: {
    kicker: 'Produkcja OEM i ODM',
    title: 'Dwa sposoby na zbudowanie Twojego produktu SUP',
    sub: 'OEM, gdy masz specyfikację, ODM, gdy masz pomysł — a także marka własna i dostawy seryjne dla marek, które chcą sprawdzonej platformy.',
    cta: 'Poproś o ofertę OEM',
    items: [
      {
        title: 'OEM — produkcja według Twojej specyfikacji',
        body: 'OEM (produkcja według specyfikacji klienta): produkujemy zgodnie z Twoją zatwierdzoną specyfikacją — Twoje rysunki, wymiary, materiały, konstrukcja i opakowanie. To Ty jesteś właścicielem projektu, form i własności intelektualnej.',
      },
      {
        title: 'ODM — rozwój deski z naszym zespołem inżynierów',
        body: 'ODM (produkcja według oryginalnego projektu): nasz zespół inżynierów opracowuje strukturę deski, konstrukcję, grafikę i opakowanie na podstawie Twojego briefu — niezależnie od tego, czy jest to koncepcja rynkowa, cel wydajnościowy, czy adaptacja sprawdzonej platformy. Fabryka proponuje projekt, kupujący zatwierdza go przed produkcją.',
      },
      {
        title: 'Marka własna — Twoja marka na sprawdzonej platformie',
        body: 'Marka własna: Twoja marka, grafika i opakowanie na istniejącej, zwalidowanej platformie — bez rozwoju formy, bez zmian konstrukcyjnych. Najszybsza droga od koncepcji do dostawy.',
      },
      {
        title: 'Dostawy seryjne — powtarzalne zamówienia i floty',
        body: 'Produkcja dużych wolumenów dla dystrybutorów, wypożyczalni i grup hotelowych, z wiążącymi specyfikacjami, identyfikowalnością partii i stałą konstrukcją przy każdym powtórnym zamówieniu.',
      },
    ],
  },
}

/* ─────────────────────────── home: Inside the Plant (manufacturing capability) ─────────────────────────── */

export interface CapabilityBlock {
  name: string
  body: string
}

export interface CapabilityContent {
  kicker: string
  title: string
  sub: string
  items: CapabilityBlock[]
}

export const capability: Localized<CapabilityContent> = {
  en: {
    kicker: 'Manufacturing Capabilities',
    title: 'Six In-House Manufacturing Capabilities',
    sub: 'Every process below runs in-house. Nothing critical is subcontracted.',
    items: [
      {
        name: 'CNC Cutting',
        body: 'Automatic CNC machines cut PVC, Hypalon and drop-stitch fabric to 0.1 mm positional accuracy, with computer-optimised nesting to control material waste.',
      },
      {
        name: 'RF Dielectric Welding',
        body: '15 kW welding presses produce airtight seams. Rail bands are triple-layer fusion bonded for edge strength and impact resistance.',
      },
      {
        name: 'Drop-Stitch Core Lamination',
        body: 'Thousands of internal polyester threads hold the top and bottom laminates parallel, producing a rigid platform at 12–15 PSI. Cores laminated up to 14 ft.',
      },
      {
        name: 'Deck Graphics',
        body: 'Full-colour digital printing and multi-colour screen printing, produced from your brand files. EVA deck pads in your colors with custom logos, cutouts and textures.',
      },
      {
        name: 'Assembly and Rigging',
        body: 'Each board follows a 100-point assembly checklist signed off by the line lead — hardware, D-rings, valves, leash points and accessory fitment.',
      },
      {
        name: 'Export Packing',
        body: 'Vacuum-packed, boxed and export-grade packed, with printed retail cartons available.',
      },
    ],
  },
  es: {
    kicker: 'Capacidades de fabricación',
    title: 'Seis capacidades de fabricación propias',
    sub: 'Todos los procesos siguientes se realizan en casa. Nada crítico se subcontrata.',
    items: [
      {
        name: 'Corte CNC',
        body: 'Las máquinas CNC automáticas cortan PVC, Hypalon y panel drop-stitch con una precisión posicional de 0,1 mm y anidado optimizado por ordenador para controlar el desperdicio de material.',
      },
      {
        name: 'Soldadura dieléctrica RF',
        body: 'Las prensas de soldadura de 15 kW producen juntas herméticas. Las cotas de los rails se fusionan en tres capas para máxima resistencia de borde y contra impactos.',
      },
      {
        name: 'Laminación del núcleo drop-stitch',
        body: 'Miles de hilos internos de poliéster mantienen paralelos el laminado inferior y superior, produciendo una plataforma rígida a 12–15 PSI. Núcleos laminados de hasta 14 pies.',
      },
      {
        name: 'Gráficos de cubierta',
        body: 'Impresión digital a todo color y serigrafía multicolor, producidas a partir de tus archivos de marca. Pavimentos EVA en tus colores con tu logo, recortes y texturas.',
      },
      {
        name: 'Ensamblado y aprestado',
        body: 'Cada tabla sigue un checklist de ensamblado de 100 puntos firmado por el responsable de línea: herrajes, puntos de fijación, válvulas, leash y accesorios.',
      },
      {
        name: 'Embalaje de exportación',
        body: 'Envasado al vacío, encajado y embalado para exportación, con impresión de cartoncines minoristas disponible.',
      },
    ],
  },
  fr: {
    kicker: 'Capacités de fabrication',
    title: 'Six capacités de fabrication internes',
    sub: 'Tous les processus ci-dessous sont réalisés en interne. Aucun élément critique n’est sous-traité.',
    items: [
      {
        name: 'Découpe CNC',
        body: 'Des machines CNC automatiques découpent le PVC, l’Hypalon et le tissu drop-stitch avec une précision de positionnement de 0,1 mm et un nesting optimisé par ordinateur pour maîtriser les pertes de matière.',
      },
      {
        name: 'Soudure diélectrique RF',
        body: 'Des presses de soudage de 15 kW produisent des joints hermétiques. Les lés de rail sont fusionnés en triple couche pour la résistance des bords et aux impacts.',
      },
      {
        name: 'Lamination du noyau drop-stitch',
        body: 'Des milliers de fils de polyester internes maintiennent les stratifiés supérieur et inférieur parallèles, produisant une plateforme rigide à 12–15 PSI. Noyaux laminés jusqu’à 14 ft.',
      },
      {
        name: 'Graphismes de pont',
        body: 'Impression numérique pleine couleur et sérigraphie multicolore réalisées à partir de vos fichiers de marque. Pads de pont en EVA à vos couleurs avec logos, découpes et textures personnalisés.',
      },
      {
        name: 'Assemblage et gréement',
        body: 'Chaque planche suit une check-list d’assemblage de 100 points validée par le chef de ligne — quincaillerie, anneaux en D, valves, points de leash et pose des accessoires.',
      },
      {
        name: 'Emballage export',
        body: 'Sous vide, encartonnées et emballées au standard export, avec cartons de vente imprimés disponibles.',
      },
    ],
  },
  de: {
    kicker: 'Fertigungskapazitäten',
    title: 'Sechs interne Fertigungskapazitäten',
    sub: 'Alle folgenden Prozesse laufen intern. Nichts Kritisches ist ausgelagert.',
    items: [
      {
        name: 'CNC-Zuschnitt',
        body: 'Automatische CNC-Maschinen schneiden PVC, Hypalon und Drop-Stitch-Gewebe mit einer Positionsgenauigkeit von 0.1 mm und computergestützt optimiertem Nesting zur Minimierung des Materialabfalls.',
      },
      {
        name: 'RF-Dielektrisches Schweißen',
        body: 'Schweißpressen mit 15 kW erzeugen luftdichte Nähte. Die Railbänder werden dreilagig fusioniert für Kantenfestigkeit und Schlagfestigkeit.',
      },
      {
        name: 'Drop-Stitch-Kernlamination',
        body: 'Tausende interne Polyesterfäden halten die obere und untere Lage parallel und erzeugen so eine starre Plattform bei 12–15 PSI. Kerne werden bis 14 ft laminiert.',
      },
      {
        name: 'Deck-Grafik',
        body: 'Vierfarb-Digitaldruck und mehrfarbiger Siebdruck auf Basis Ihrer Markendateien. EVA-Deckpads in Ihren Farben mit individuellen Logos, Ausstanzungen und Texturen.',
      },
      {
        name: 'Montage und Rigging',
        body: 'Jedes Board durchläuft eine 100-Punkte-Montagecheckliste, die der Linienleiter abzeichnet — Beschläge, D-Ringe, Ventile, Leash-Punkte und Accessoires.',
      },
      {
        name: 'Exportverpackung',
        body: 'Vakuumiert, verpackt und exporttauglich versandfertig, auf Wunsch mit bedruckten Verkaufskartons.',
      },
    ],
  },
  it: {
    kicker: 'Capacità produttive',
    title: 'Sei capacità produttive interne',
    sub: 'Tutti i processi seguenti si svolgono internamente. Nulla di critico è esternalizzato.',
    items: [
      {
        name: 'Taglio CNC',
        body: 'Le macchine CNC automatiche tagliano PVC, Hypalon e tessuto drop-stitch con una precisione di posizionamento di 0.1 mm e un nesting ottimizzato al computer per ridurre al minimo lo spreco di materiale.',
      },
      {
        name: 'Saldatura dielettrica RF',
        body: 'Presse di saldatura da 15 kW producono giunzioni ermetiche. I nastri dei rail vengono fusi in tre strati per la resistenza dei bordi e agli urti.',
      },
      {
        name: 'Laminazione del nucleo drop-stitch',
        body: 'Migliaia di fili interni in poliestere tengono paralleli gli strati superiore e inferiore, creando una piattaforma rigida a 12–15 PSI. I nuclei vengono laminati fino a 14 ft.',
      },
      {
        name: 'Grafica del deck',
        body: 'Stampa digitale a quattro colori e serigrafia multicolore a partire dai tuoi file del marchio. Deck pad in EVA nei tuoi colori con loghi personalizzati, fustellature e texture.',
      },
      {
        name: 'Assemblaggio e rigging',
        body: 'Ogni tavola segue una checklist di assemblaggio di 100 punti firmata dal capolinea — ferramenta, anelli a D, valvole, punti del leash e accessori.',
      },
      {
        name: "Imballaggio per l’export",
        body: 'Sottovuoto, imballate e pronte per la spedizione secondo lo standard export, con cartoni di vendita stampati su richiesta.',
      },
    ],
  },
  pt: {
    kicker: 'Capacidades de produção',
    title: 'Seis capacidades de produção internas',
    sub: 'Todos os processos seguintes são realizados internamente. Nada crítico é subcontratado.',
    items: [
      {
        name: 'Corte CNC',
        body: 'As máquinas CNC automáticas cortam PVC, Hypalon e tecido drop-stitch com uma precisão de posicionamento de 0.1 mm e aninhamento otimizado por computador para reduzir ao mínimo o desperdício de material.',
      },
      {
        name: 'Soldadura dielétrica RF',
        body: 'Prensas de soldadura de 15 kW produzem juntas herméticas. As fitas dos rails são fundidas em três camadas para resistência dos bordos e aos impactos.',
      },
      {
        name: 'Laminação do núcleo drop-stitch',
        body: 'Milhares de fios internos de poliéster mantêm paralelas as camadas superior e inferior, criando uma plataforma rígida a 12–15 PSI. Os núcleos são laminados até 14 ft.',
      },
      {
        name: 'Gráfica do deck',
        body: 'Impressão digital a quatro cores e serigrafia multicolor a partir dos teus ficheiros de marca. Deck pad em EVA nas tuas cores com logótipos personalizados, recortes e texturas.',
      },
      {
        name: 'Montagem e rigging',
        body: 'Cada tábua segue uma checklist de montagem de 100 pontos assinada pelo chefe de linha — ferragens, anéis em D, válvulas, pontos do leash e acessórios.',
      },
      {
        name: 'Embalagem para exportação',
        body: 'A vácuo, embaladas e prontas para envio segundo o padrão de exportação, com cartões de venda impressos sob pedido.',
      },
    ],
  },
  nl: {
    kicker: 'Productiecapaciteiten',
    title: 'Zes interne productiecapaciteiten',
    sub: 'Alle volgende processen verlopen intern. Niets kritiek wordt uitbesteed.',
    items: [
      {
        name: 'CNC-snijden',
        body: 'Automatische CNC-machines snijden PVC, Hypalon en drop-stitch-weefsel met een positioneringsnauwkeurigheid van 0.1 mm en computergeoptimaliseerde nesting om materiaalverspilling te beperken.',
      },
      {
        name: 'RF-diëlektrisch lassen',
        body: 'Laspersen van 15 kW produceren luchtdichte naden. De raillinten worden in drie lagen gefuseerd voor de sterkte van de randen en tegen stoten.',
      },
      {
        name: 'Lamineren van de drop-stitch-kern',
        body: 'Duizenden interne polyesterdraden houden de bovenste en onderste laag parallel, waardoor een stijf platform ontstaat bij 12–15 PSI. De kernen worden gelamineerd tot 14 ft.',
      },
      {
        name: 'Graphics van het deck',
        body: "Vierkleuren digitaal drukwerk en meerkleuren zeefdruk op basis van jouw merkbestanden. EVA-deckpads in jouw kleuren met gepersonaliseerde logo's, uitsnijdingen en texturen.",
      },
      {
        name: 'Montage en rigging',
        body: 'Elke plank volgt een checklist van 100 punten die wordt afgetekend door de lijnleider — beslag, D-ringen, ventielen, leash-punten en accessoires.',
      },
      {
        name: 'Verpakking voor export',
        body: 'Vacuüm verpakt, ingedoosd en verzendklaar volgens de exportstandaard, met bedrukte verkoopdozen op verzoek.',
      },
    ],
  },
  sv: {
    kicker: 'Tillverkningskapacitet',
    title: 'Sex Interna Tillverkningsförmågor',
    sub: 'Alla processer nedan körs internt. Ingenting kritiskt läggs ut.',
    items: [
      {
        name: 'CNC-skärning',
        body: 'Automatiska CNC-maskiner skär PVC, Hypalon och drop-stitch-tyg med 0,1 mm positionsnoggrannhet och datoroptimerad nesting för att minimera materialsvinn.',
      },
      {
        name: 'RF-dielektrisk svetsning',
        body: '15 kW svetspressar producerar lufttäta sömmar. Skeppsbanden är treskiktsfusionsförband för kantstyrka och stöttålighet.',
      },
      {
        name: 'Drop-stitch-kärnlaminering',
        body: 'Tusentals interna polyestertrådar håller över- och underlaminaten parallella, vilket ger en styv plattform vid 12–15 PSI. Kärnor laminerade upp till 14 ft.',
      },
      {
        name: 'Däckgrafik',
        body: 'Fyrfärgs digitaltryck och flerfärgsscreentryck från dina varumärkesfiler. EVA-däckpadden i dina färger med anpassade logotyper, utskärningar och texturer.',
      },
      {
        name: 'Montering och riggning',
        body: 'Varje bräda följer en 100-punkts monteringschecklista signerad av linjeledaren — beslag, D-ringar, ventiler, leashpunkter och tillbehörsmontering.',
      },
      {
        name: 'Exportförpackning',
        body: 'Vakuumförpackad, kartonglagd och exportförpackad, med tryckta butikskartonger som tillval.',
      },
    ],
  },
  no: {
    kicker: 'Produksjonskapasitet',
    title: 'Seks interne produksjonsmuligheter',
    sub: 'Alle prosessene nedenfor kjøres internt. Ingenting viktig settes ut til tredjepart.',
    items: [
      {
        name: 'CNC-kutting',
        body: 'Automatiske CNC-maskiner kutter PVC, Hypalon og drop-stitch-stoff med 0,1 mm plasseringsnøyaktighet og datamaskinoptimalisert nesting for å minimere materialtap.',
      },
      {
        name: 'RF-dielektrisk sveising',
        body: '15 kW sveispresser produserer lufttette sømmer. Skinnene er trelags sveiste forband for kantstyrke og støtstyrke.',
      },
      {
        name: 'Drop-stitch-kjernelaminering',
        body: 'Tusenvis av interne polyestertråder holder over- og underlaminatet parallelt, noe som gir en stiv plattform ved 12–15 PSI. Kjerner laminert opp til 14 ft.',
      },
      {
        name: 'Dekkgrafikk',
        body: 'Firfarge digitaltrykk og flerfargers sildetrykk fra merkefilene dine. EVA-dekklute i fargene dine med tilpassede logotyper, utskjæringer og teksturer.',
      },
      {
        name: 'Montering og rigging',
        body: 'Hvert brett følger en 100-punkts monteringssjekkliste signert av linjelederen — beslag, D-ringer, ventiler, leashpunkter og montering av tilbehør.',
      },
      {
        name: 'Eksportemballasje',
        body: 'Vakuumpakket, kartonglagt og eksportpakket, med trykte butikkesker som tillegg.',
      },
    ],
  },
  pl: {
    kicker: 'Możliwości produkcyjne',
    title: 'Sześć wewnętrznych możliwości produkcyjnych',
    sub: 'Wszystkie poniższe procesy realizujemy wewnętrznie. Nic istotnego nie zlecamy na zewnątrz.',
    items: [
      {
        name: 'Cięcie CNC',
        body: 'Automatyczne maszyny CNC tną PVC, Hypalon i tkaniny drop-stitch z dokładnością położenia 0.1 mm oraz z nestingiem optymalizowanym komputerowo, aby zminimalizować straty materiału.',
      },
      {
        name: 'Zgrzewanie dielektryczne HF',
        body: 'Prasy zgrzewające 15 kW tworzą szczelne szwy. Listwy krawędziowe są zgrzewane z trójwarstwowego materiału dla wytrzymałości na krawędzie i uderzenia.',
      },
      {
        name: ' Laminowanie rdzenia drop-stitch',
        body: 'Tysiące wewnętrznych nici poliestrowych utrzymują laminat górny i dolny równolegle, co daje sztywną platformę przy 12–15 PSI. Rdzenie laminowane do 14 ft.',
      },
      {
        name: 'Grafika pokładu',
        body: 'Druk cyfrowy czterokolorowy i wielokolorowy sitodruk z plików Twojej marki. Nakładki EVA na pokład w Twoich kolorach, z indywidualnymi logotypami, wycięciami i teksturami.',
      },
      {
        name: 'Montaż i osprzęt',
        body: 'Każda deska przechodzi 100-punktową listę kontrolną montażu podpisaną przez kierownika zmiany — okucia, pierścienie D, zawory, punkty mocowania smyczy i montaż akcesoriów.',
      },
      {
        name: 'Opakowanie eksportowe',
        body: 'Pakowanie próżniowe, w kartony i na potrzeby eksportu, z opcjonalnymi nadrukowanymi pudełkami sklepowymi.',
      },
    ],
  },
}

/* ─────────────────────────── home: quality control (How Every Board Is Verified) ─────────────────────────── */

export interface QualityStep {
  title: string
  body: string
}

export interface QualityContent {
  kicker: string
  title: string
  sub: string
  steps: QualityStep[]
}

export const quality: Localized<QualityContent> = {
  en: {
    kicker: 'Quality Control',
    title: 'How Every Board Is Verified',
    sub: 'Quality is a documented process, not a promise. Here is what happens to your order before it ships.',
    steps: [
      {
        title: 'Incoming Material QC',
        body: 'PVC rolls, drop-stitch cores, valves, adhesives and hardware are quarantined until QC sign-off. Fabrics undergo tensile, tear-propagation and UV-resistance testing before any batch enters the line.',
      },
      {
        title: 'In-Process Checkpoints',
        body: 'QC checkpoints at every production stage, with weld samples pulled and peel-tested against the batch standard.',
      },
      {
        title: 'Pressure Hold Test',
        body: 'Every chamber is inflated to 18.0 PSI and held for 24 hours with continuous sensor logging. Any chamber exceeding 0.50 PSI of pressure drop over 24 hours is rejected and returned for seam re-inspection.',
      },
      {
        title: 'Structural Verification',
        body: 'Deflection under rated load, D-ring pull strength (≥150 kgf per D-ring), deck pad adhesion peel (≥3.5 N/cm) and valve seating are verified against the specification before final inspection.',
      },
      {
        title: 'Final Inspection',
        body: '100-point checklist per board, plus dimensional and weight verification against the approved sample.',
      },
      {
        title: 'Batch Traceability',
        body: 'Every material lot receives a unique ERP number. Each board’s bill of materials links back to the original supplier batch. Records retained 10 years, per CE 2013/53/EU.',
      },
    ],
  },
  es: {
    kicker: 'Control de calidad',
    title: 'Cómo se verifica cada tabla',
    sub: 'La calidad es un proceso documentado, no una promesa. Esto es lo que le ocurre a tu pedido antes de enviarlo.',
    steps: [
      {
        title: 'Control de calidad de entrada',
        body: 'Los rollos de PVC, núcleos drop-stitch, válvulas, adhesivos y herrerjes quedan en cuarentena hasta la validación. Los tejidos pasan ensayos de tracción, propagación del desgarro y resistencia UV antes de entrar en la línea.',
      },
      {
        title: 'Puntos de control en proceso',
        body: 'Puntos de control en cada etapa de producción, con muestras de soldadura retiradas y ensayadas en pelado contra el estándar del lote.',
      },
      {
        title: 'Ensayo de retención de presión',
        body: 'Cada cámara se infla a 18,0 PSI y se mantiene durante 24 horas con registro de sensores continuo. Cualquier cámara que supere una caída de presión de 0,50 PSI en 24 horas se rechaza y vuelve a revisar las costuras.',
      },
      {
        title: 'Verificación estructural',
        body: 'La flecha bajo carga nominal, la resistencia de los D-rings, la adherencia del pavlo de cubierta y el asiento de las válvulas se verifican contra la especificación antes de la inspección final.',
      },
      {
        title: 'Inspección final',
        body: 'Checklist de 100 puntos por tabla, además de verificación dimensional y de peso contra la muestra aprobada.',
      },
      {
        title: 'Trazabilidad de lote',
        body: 'Cada lote de material recibe un número ERP único. La lista de materiales de cada tabla enlaza con el lote del proveedor original. Registros conservados 10 años, según CE 2013/53/EU.',
      },
    ],
  },
  fr: {
    kicker: 'Contrôle qualité',
    title: 'Comment chaque planche est vérifiée',
    sub: 'La qualité est un processus documenté, pas une promesse. Voici ce qui arrive à votre commande avant son expédition.',
    steps: [
      {
        title: 'Contrôle qualité des matières entrantes',
        body: 'Les rouleaux de PVC, les noyaux drop-stitch, les valves, les adhésifs et la quincaillerie sont mis en quarantaine jusqu’à la validation par le QC. Les tissus subissent des tests de traction, de propagation de déchirure et de résistance aux UV avant l’entrée de tout lot en ligne.',
      },
      {
        title: 'Points de contrôle en cours de production',
        body: 'Des points de contrôle qualité à chaque étape de production, avec prélèvement d’échantillons de soudure et test de pelage par rapport au standard du lot.',
      },
      {
        title: 'Test de maintien de pression',
        body: 'Chaque chambre est gonflée à 18,0 PSI et maintenue pendant 24 heures avec enregistrement continu des capteurs. Toute chambre présentant une chute de pression supérieure à 0,50 PSI sur 24 heures est rejetée et renvoyée pour ré-inspection des soudures.',
      },
      {
        title: 'Vérification structurelle',
        body: 'La flèche sous charge nominale, la résistance à l’arrachement des anneaux en D (≥150 kgf par anneau en D), le pelage d’adhérence du pad de pont (≥3,5 N/cm) et la portée des valves sont vérifiés conformément à la spécification avant l’inspection finale.',
      },
      {
        title: 'Inspection finale',
        body: 'Check-list de 100 points par planche, plus vérification des dimensions et du poids par rapport à l’échantillon approuvé.',
      },
      {
        title: 'Traçabilité des lots',
        body: 'Chaque lot de matière reçoit un numéro ERP unique. La nomenclature de chaque planche renvoie au lot d’origine du fournisseur. Les registres sont conservés 10 ans, conformément à la norme CE 2013/53/UE.',
      },
    ],
  },
  de: {
    kicker: 'Qualitätskontrolle',
    title: 'So wird jedes Board verifiziert',
    sub: 'Qualität ist ein dokumentierter Prozess, kein Versprechen. So läuft Ihre Bestellung ab, bevor sie versendet wird.',
    steps: [
      {
        title: 'Wareneingangskontrolle',
        body: 'PVC-Rollen, Drop-Stitch-Kerne, Ventile, Klebstoffe und Beschläge werden bis zur QC-Freigabe gesperrt. Gewebe werden vor jedem Chargenstart auf Zugfestigkeit, Weiterreißfestigkeit und UV-Beständigkeit geprüft.',
      },
      {
        title: 'Kontrollpunkte in der Fertigung',
        body: 'QC-Kontrollpunkte in jeder Fertigungsstufe, mit Schweißproben, die gezogen und gegen den Chargenstandard auf Schälfestigkeit geprüft werden.',
      },
      {
        title: 'Dichtigkeitstest',
        body: 'Jede Kammer wird auf 18.0 PSI aufgepumpt und 24 Stunden unter kontinuierlicher Sensoraufzeichnung gehalten. Jede Kammer mit einem Druckabfall von über 0.50 PSI in 24 Stunden wird ausgemustert und zur erneuten Nahtprüfung zurückgeführt.',
      },
      {
        title: 'Strukturelle Verifikation',
        body: 'Durchbiegung unter Nennlast, D-Ring-Abrufzugfestigkeit (≥150 kgf pro D-Ring), Schälfestigkeit des Deckpads (≥3.5 N/cm) und Dichtsitz der Ventile werden vor der Endprüfung gegen die Spezifikation verifiziert.',
      },
      {
        title: 'Endprüfung',
        body: '100-Punkte-Checkliste pro Board sowie Dimensions- und Gewichtsprüfung gegen das freigegebene Muster.',
      },
      {
        title: 'Chargenrückverfolgbarkeit',
        body: 'Jede Materialcharge erhält eine eindeutige ERP-Nummer. Die Stückliste jedes Boards verweist auf die ursprüngliche Lieferantencharge. Aufzeichnungen werden gemäß CE 2013/53/EU zehn Jahre aufbewahrt.',
      },
    ],
  },
  it: {
    kicker: 'Controllo qualità',
    title: 'Ecco come viene verificata ogni tavola',
    sub: 'La qualità è un processo documentato, non una promessa. Ecco come procede il tuo ordine prima della spedizione.',
    steps: [
      {
        title: 'Controllo in entrata materiali',
        body: "I rotoli di PVC, i nuclei drop-stitch, le valvole, gli adesivi e la ferramenta vengono bloccati fino al rilascio del QC. I tessuti vengono testati prima dell’avvio di ogni lotto per resistenza alla trazione, alla lacerazione e ai raggi UV.",
      },
      {
        title: 'Punti di controllo in produzione',
        body: 'Punti di controllo QC in ogni fase di produzione, con campioni di saldatura che vengono tirati e testati per la resistenza alla pelatura rispetto allo standard del lotto.',
      },
      {
        title: 'Test di tenuta',
        body: 'Ogni camera viene gonfiata a 18.0 PSI e mantenuta per 24 ore con registrazione continua tramite sensori. Ogni camera con una perdita di pressione superiore a 0.50 PSI in 24 ore viene scartata e rimessa in lavorazione per un nuovo controllo delle cuciture.',
      },
      {
        title: 'Verifica strutturale',
        body: 'Flessione sotto carico nominale, resistenza allo strappo degli anelli a D (≥150 kgf per anello), resistenza alla pelatura del deck pad (≥3.5 N/cm) e tenuta delle valvole vengono verificate rispetto alla specifica prima del controllo finale.',
      },
      {
        title: 'Controllo finale',
        body: 'Checklist di 100 punti per ogni tavola, più controllo di dimensioni e peso rispetto al campione approvato.',
      },
      {
        title: 'Tracciabilità dei lotti',
        body: 'Ogni lotto di materiale riceve un numero ERP univoco. La distinta base di ogni tavola rimanda al lotto del fornitore originario. I registri vengono conservati per dieci anni ai sensi della CE 2013/53/EU.',
      },
    ],
  },
  pt: {
    kicker: 'Controlo de qualidade',
    title: 'É assim que cada tábua é verificada',
    sub: 'A qualidade é um processo documentado, não uma promessa. É assim que o teu pedido avança antes da expedição.',
    steps: [
      {
        title: 'Controlo de entrada de materiais',
        body: "Os rolos de PVC, os núcleos drop-stitch, as válvulas, os adesivos e as ferragens ficam bloqueados até à liberação do QC. Os tecidos são testados antes do início de cada lote para resistência à tração, ao laceração e aos raios UV.",
      },
      {
        title: 'Pontos de controlo em produção',
        body: 'Pontos de controlo QC em cada fase de produção, com amostras de soldadura retiradas e testadas quanto à resistência ao descascamento face ao padrão do lote.',
      },
      {
        title: 'Teste de estanquicidade',
        body: 'Cada câmara é insuflada a 18.0 PSI e mantida durante 24 horas com registo contínuo por sensores. Qualquer câmara com uma perda de pressão superior a 0.50 PSI em 24 horas é rejeitada e recolocada em processo para uma nova verificação das costuras.',
      },
      {
        title: 'Verificação estrutural',
        body: 'Flexão sob carga nominal, resistência ao arrancamento dos anéis em D (≥150 kgf por anel), resistência ao descascamento do deck pad (≥3.5 N/cm) e vedação das válvulas são verificadas em relação à especificação antes do controlo final.',
      },
      {
        title: 'Controlo final',
        body: 'Checklist de 100 pontos para cada tábua, mais controlo de dimensões e peso em relação à amostra aprovada.',
      },
      {
        title: 'Rastreabilidade dos lotes',
        body: 'Cada lote de material recebe um número ERP único. A lista de materiais (BOM) de cada tábua remete para o lote do fornecedor original. Os registos são conservados durante dez anos nos termos da CE 2013/53/EU.',
      },
    ],
  },
  nl: {
    kicker: 'Kwaliteitscontrole',
    title: 'Zo wordt elke plank gecontroleerd',
    sub: 'Kwaliteit is een gedocumenteerd proces, geen belofte. Zo verloopt jouw bestelling vóór de verzending.',
    steps: [
      {
        title: 'Controle bij binnenkomst materialen',
        body: 'De PVC-rollen, drop-stitch-kernen, ventielen, lijmen en het beslag worden geblokkeerd tot vrijgave door de QC. De stoffen worden vóór de start van elke batch getest op treksterkte, scheurweerstand en UV-bestendigheid.',
      },
      {
        title: 'Controlepunten in de productie',
        body: 'QC-controlepunten in elke productiefase, met lasmonsters die worden getrokken en getest op pelweerstand ten opzichte van de batchstandaard.',
      },
      {
        title: 'Dichtheidstest',
        body: 'Elke kamer wordt opgeblazen tot 18.0 PSI en gedurende 24 uur op druk gehouden met continue sensorregistratie. Elke kamer met een drukverlies van meer dan 0.50 PSI in 24 uur wordt afgekeurd en teruggevoerd voor een nieuwe controle van de naden.',
      },
      {
        title: 'Structurele verificatie',
        body: 'Doorbuiging onder nominale belasting, uittreksterkte van de D-ringen (≥150 kgf per ring), pelweerstand van het deckpad (≥3.5 N/cm) en het sluiten van de ventielen worden vóór de eindcontrole geverifieerd volgens de specificatie.',
      },
      {
        title: 'Eindcontrole',
        body: 'Checklist van 100 punten per plank, plus controle van afmetingen en gewicht ten opzichte van het goedgekeurde monster.',
      },
      {
        title: 'Traceerbaarheid van batches',
        body: 'Elke materiaalbatch krijgt een uniek ERP-nummer. De materiaallijst (BOM) van elke plank verwijst naar het oorspronkelijke lot van de leverancier. De registers worden tien jaar bewaard conform CE 2013/53/EU.',
      },
    ],
  },
  sv: {
    kicker: 'Kvalitetskontroll',
    title: 'Så Verifieras Varje Bräda',
    sub: 'Kvalitet är en dokumenterad process, inte ett löfte. Så här går din order tillväga innan den skickas.',
    steps: [
      {
        title: 'Inkommande materialkontroll',
        body: 'PVC-rullar, drop-stitch-kärnor, ventiler, lim och beslag hålls i karantän tills QC-godkännande. Tyger genomgår tester för draghållfasthet, rivspridning och UV-beständighet innan någon batch går in i produktionen.',
      },
      {
        title: 'Checkpoints under produktion',
        body: 'QC-checkpoints vid varje produktionssteg, med svetsprover som dras och peel-testas mot batchstandarden.',
      },
      {
        title: 'Trycktäthetstest',
        body: 'Varje kammare blåses till 18,0 PSI och hålls i 24 timmar med kontinuerlig sensorloggning. Varje kammare som överskrider 0,50 PSI tryckfall på 24 timmar underkänns och återförs för sömnreinspektion.',
      },
      {
        title: 'Strukturverifiering',
        body: 'Nedböjning vid nominell last, D-ringens avdragskraft (≥150 kgf per D-ring), däckpaddenheftning peel (≥3,5 N/cm) och ventilens tätning verifieras mot specifikationen före slutinspektion.',
      },
      {
        title: 'Slutinspektion',
        body: '100-punkts checklista per bräda, plus dimension- och viktkontroll mot det godkända provet.',
      },
      {
        title: 'Batchspårbarhet',
        body: 'Varje materialbatch får ett unikt ERP-nummer. Varje brädas produktionslista (BOM) återgår till ursprungsleverantörens batch. Journaler sparas i 10 år, enligt CE 2013/53/EU.',
      },
    ],
  },
  no: {
    kicker: 'Kvalitetskontroll',
    title: 'Slik verifiseres hvert brett',
    sub: 'Kvalitet er en dokumentert prosess, ikke et løfte. Slik forløper bestillingen din før den sendes.',
    steps: [
      {
        title: 'Innkommende materialkontroll',
        body: 'PVC-ruller, drop-stitch-kjerner, ventiler, lim og beslag holdes i karantene til QC-godkjenning. Stoffer testes for strekkstyrke, rifftest og UV-bestandighet før noen batch går i produksjon.',
      },
      {
        title: 'Kontrollpunkter under produksjon',
        body: 'QC-kontrollpunkter ved hvert produksjonstrinn, med sveisprøver som trekkes og peel-testes mot batchstandarden.',
      },
      {
        title: 'Trykktetthetstest',
        body: 'Hvert kammer blåses opp til 18,0 PSI og holdes i 24 timer med kontinuerlig sensorlogging. Ethvert kammer som overskrider 0,50 PSI trykkfall over 24 timer, underkastes og returneres for sømrengjøring.',
      },
      {
        title: 'Strukturverifisering',
        body: 'Bøyning ved nominell last, avdragskraft for D-ringen (≥150 kgf per D-ring), peel for festing av dekkluten (≥3,5 N/cm) og ventiltetting verifiseres mot spesifikasjonen før sluttinspeksjon.',
      },
      {
        title: 'Sluttinspeksjon',
        body: '100-punkts sjekkliste per brett, pluss mål- og vektkontroll mot den godkjente prøven.',
      },
      {
        title: 'Batchspårbarhet',
        body: 'Hver materialbatch får et unikt ERP-nummer. Produksjonslisten (BOM) for hvert brett knyttes tilbake til leverandørens batch. Registre lagres i 10 år, i henhold til CE 2013/53/EU.',
      },
    ],
  },
  pl: {
    kicker: 'Kontrola jakości',
    title: 'Jak weryfikowana jest każda deska',
    sub: 'Jakość to udokumentowany proces, a nie obietnica. Oto, co dzieje się z Twoim zamówieniem, zanim wyjedzie.',
    steps: [
      {
        title: 'Kontrola materiałów wejściowych',
        body: 'Rolki PVC, rdzenie drop-stitch, zawory, kleje i elementy okuć są poddane kwarantannie do czasu zatwierdzenia przez QC. Tkaniny przechodzą badania wytrzymałości na rozciąganie, propagacji rozdarcia i odporności na UV, zanim jakakolwiek partia trafi na linię.',
      },
      {
        title: 'Punkty kontrolne w trakcie produkcji',
        body: 'Punkty kontroli QC na każdym etapie produkcji, z pobieraniem próbek spoin i badaniem wytrzymałości na odwarstwienie względem normy partii.',
      },
      {
        title: 'Test utrzymania ciśnienia',
        body: 'Każda komora jest nadmuchiwana do 18.0 PSI i utrzymywana przez 24 godziny z ciągłym zapisem danych z czujników. Każda komora, która wykaże spadek ciśnienia większy niż 0.50 PSI w ciągu 24 godzin, jest odrzucana i kierowana do ponownej inspekcji szwów.',
      },
      {
        title: 'Weryfikacja konstrukcji',
        body: 'Ugięcie pod znamionowym obciążeniem, siła wyrywania pierścieni D (≥150 kgf na pierścień D), wytrzymałość na odwarstwienie nakładki pokładowej (≥3.5 N/cm) oraz osadzenie zaworów są weryfikowane względem specyfikacji przed inspekcją końcową.',
      },
      {
        title: 'Inspekcja końcowa',
        body: '100-punktowa lista kontrolna dla każdej deski, plus kontrola wymiarów i masy względem zatwierdzonej próbki.',
      },
      {
        title: 'Identyfikowalność partii',
        body: 'Każda partia materiału otrzymuje unikatowy numer ERP. Lista materiałowa (BOM) każdej deski odsyła do partii dostawcy. Rejestry przechowujemy przez 10 lat, zgodnie z CE 2013/53/UE.',
      },
    ],
  },
}

/* ─────────────────────────── home: commercial terms ─────────────────────────── */

export interface CommercialCell {
  label: string
  lines: string[]
}

export interface MoqTier {
  stage: string
  quantity: string
  purpose: string
  note: string
}

export interface CommercialContent {
  kicker: string
  title: string
  sub: string
  cells: CommercialCell[]
  moqTiers: MoqTier[]
  certs: string
}

export const commercial: Localized<CommercialContent> = {
  en: {
    kicker: 'Commercial Terms',
    title: 'Commercial Terms, Stated Upfront',
    sub: 'Standard MOQ, sampling, production and delivery terms are listed below. Projects involving new tooling, specialized materials, compliance testing or custom packaging are quoted separately.',
    cells: [
      {
        label: 'Minimum order',
        lines: [
          FACTS.moqExplanation.coBrand,
          FACTS.moqExplanation.pilot,
          FACTS.moqExplanation.standard,
        ],
      },
      {
        label: 'Lead time',
        lines: [
          '25–35 days from confirmed PO and deposit',
          'Custom mold development: +15–20 days for tooling',
          'Expedited production available for seasonal rush',
        ],
      },
      {
        label: 'Sampling',
        lines: [
          'Prototype samples ship in 7–12 days',
          'Sample cost credited against bulk order',
        ],
      },
      {
        label: 'Export & documentation',
        lines: [
          'Export documentation handled in-house',
          'Export-grade packing; printed retail cartons available',
        ],
      },
    ],
    certs:
      `ISO 9001 quality management · CE certification for models destined for EU markets (scope confirmed per project) · BSCI social compliance (audit report available on request) · REACH and RoHS documentation with every order.`,
    moqTiers: [
      {
        stage: 'Sample & approval',
        quantity: FACTS.moqExplanation.sample,
        purpose: 'Confirm shape, colors, printing and packaging before any production run',
        note: '7–12 days; physical board, not a rendering',
      },
      {
        stage: 'Co-branding small bulk',
        quantity: FACTS.moqExplanation.coBrand,
        purpose: 'Test a design on a proven platform with logo over-printing',
        note: 'Fastest way to validate a new graphic',
      },
      {
        stage: 'Pilot batch / initial stock',
        quantity: FACTS.moqExplanation.pilot,
        purpose: 'Validate the market or open your store with real inventory',
        note: 'Lowest volume on existing platforms',
      },
      {
        stage: 'Standard volume production',
        quantity: FACTS.moqExplanation.standard,
        purpose: 'Regular production runs at the best unit price',
        note: FACTS.moqExplanation.customMould,
      },
    ],
  },
  es: {
    kicker: 'Condiciones comerciales',
    title: 'Condiciones comerciales, expresadas por adelantado',
    sub: 'Los términos estándar de MOQ, muestreo, producción y entrega se indican a continuación. Los proyectos con utillaje nuevo, materiales especiales, ensayos de cumplimiento o packaging a medida se presupuestan por separado.',
    cells: [
      {
        label: 'Pedido mínimo',
        lines: [
          `Co-branding: ${FACTS.moqExplanationEs.coBrand}`,
          `Lote piloto: ${FACTS.moqExplanationEs.pilot}`,
          `Volumen estándar: ${FACTS.moqExplanationEs.standard}`,
        ],
      },
      {
        label: 'Plazo de entrega',
        lines: [
          '25–35 días desde el PO confirmado y el depósito',
          'Desarrollo de molde a medida: +15–20 días para utillaje',
          'Producción acelerada disponible para la temporada',
        ],
      },
      {
        label: 'Muestras',
        lines: [
          'Las muestras de prototipo salen en 7–12 días',
          'El coste de la muestra se descuenta del pedido de volumen',
        ],
      },
      {
        label: 'Exportación y documentación',
        lines: [
          'Documentación de exportación gestionada en casa',
          'Embalaje de exportación; cartoncines minoristas impresos disponibles',
        ],
      },
    ],
    certs:
      'ISO 9001 · Certificación CE para modelos destinados al mercado de la UE (alcance confirmado por proyecto) · BSCI (informe de auditoría disponible) · Documentación REACH y RoHS con cada pedido.',
    moqTiers: [
      {
        stage: 'Muestra y aprobación',
        quantity: FACTS.moqExplanationEs.sample,
        purpose: 'Confirmar forma, colores, impresión y packaging antes de cualquier producción',
        note: '7–12 días; tabla física, no un render',
      },
      {
        stage: 'Co-branding en pequeño lote',
        quantity: FACTS.moqExplanationEs.coBrand,
        purpose: 'Probar un diseño sobre una plataforma probada con impresión de logo',
        note: 'La vía más rápida para validar un gráfico',
      },
      {
        stage: 'Lote piloto / stock inicial',
        quantity: FACTS.moqExplanationEs.pilot,
        purpose: 'Validar el mercado o abrir tu tienda con inventario real',
        note: 'El volumen más bajo sobre plataformas existentes',
      },
      {
        stage: 'Producción de volumen estándar',
        quantity: FACTS.moqExplanationEs.standard,
        purpose: 'Producción regular al mejor precio unitario',
        note: FACTS.moqExplanationEs.customMould,
      },
    ],
  },
  fr: {
    kicker: 'Conditions commerciales',
    title: 'Conditions commerciales, énoncées en toute transparence',
    sub: 'Les conditions standard de MOQ, d’échantillonnage, de production et de livraison sont indiquées ci-dessous. Les projets impliquant de nouveaux outillages, des matériaux spécialisés, des essais de conformité ou un emballage sur mesure font l’objet d’une offre séparée.',
    cells: [
      {
        label: 'Commande minimale',
        lines: [
          `Co-branding : ${FACTS.moqExplanationFr.coBrand}`,
          `Lot pilote : ${FACTS.moqExplanationFr.pilot}`,
          `Volume standard : ${FACTS.moqExplanationFr.standard}`,
        ],
      },
      {
        label: 'Délai de livraison',
        lines: [
          '25–35 jours à compter du PO confirmé et du dépôt',
          'Développement de moule sur mesure : +15–20 jours pour l’outillage',
          'Production accélérée disponible en période de pointe saisonnière',
        ],
      },
      {
        label: 'Échantillonnage',
        lines: [
          'Les échantillons prototype partent en 7–12 jours',
          'Le coût de l’échantillon est déduit de la commande en volume',
        ],
      },
      {
        label: 'Export & documentation',
        lines: [
          'Documentation d’exportation gérée en interne',
          'Emballage standard export ; cartons de vente imprimés disponibles',
        ],
      },
    ],
    certs: 'ISO 9001 gestion de la qualité · Certification CE pour les modèles destinés au marché de l’UE (périmètre confirmé par projet) · BSCI conformité sociale (rapport d’audit disponible sur demande) · Documentation REACH et RoHS avec chaque commande.',
    moqTiers: [
      {
        stage: 'Échantillon & approbation',
        quantity: FACTS.moqExplanationFr.sample,
        purpose: 'Confirmer la forme, les couleurs, l’impression et l’emballage avant toute production',
        note: '7–12 jours ; planche physique, pas un rendu',
      },
      {
        stage: 'Co-branding en petit volume',
        quantity: FACTS.moqExplanationFr.coBrand,
        purpose: 'Tester un design sur une plateforme éprouvée avec surimpression du logo',
        note: 'La voie la plus rapide pour valider un nouveau graphisme',
      },
      {
        stage: 'Lot pilote / stock initial',
        quantity: FACTS.moqExplanationFr.pilot,
        purpose: 'Valider le marché ou ouvrir votre boutique avec un stock réel',
        note: 'Le volume le plus faible sur les plateformes existantes',
      },
      {
        stage: 'Production en volume standard',
        quantity: FACTS.moqExplanationFr.standard,
        purpose: 'Production régulière au meilleur prix unitaire',
        note: FACTS.moqExplanationFr.customMould,
      },
    ],
  },
  de: {
    kicker: 'Handelskonditionen',
    title: 'Handelskonditionen, transparent von Anfang an',
    sub: 'Standard-MOQ, Bemusterung, Produktions- und Lieferkonditionen sind unten aufgeführt. Projekte mit neuer Werkzeugauslegung, Spezialmaterialien, Konformitätsprüfungen oder individueller Verpackung werden separat angeboten.',
    cells: [
      {
        label: 'Mindestbestellung',
        lines: [
          'Co-Branding: ab 5–10 Stück auf ausgewählten bestehenden Plattformen',
          'Pilotcharge: 20–50 Stück auf bestehenden Plattformen',
          'Standardvolumen: 90–100+ Stück pro freigegebener Konfiguration, abhängig von Materialrolle und Verpackungsanforderungen',
        ],
      },
      {
        label: 'Lieferzeit',
        lines: [
          '25–35 Tage ab bestätigter PO und Anzahlung',
          'Individuelle Formenentwicklung: +15–20 Tage für den Werkzeugbau',
          'Expressproduktion für saisonale Spitzenzeiten verfügbar',
        ],
      },
      {
        label: 'Bemusterung',
        lines: [
          'Prototypenmuster werden in 7–12 Tagen versandt',
          'Die Musterkosten werden bei der Serienbestellung angerechnet',
        ],
      },
      {
        label: 'Export & Dokumentation',
        lines: [
          'Exportdokumentation intern erledigt',
          'Exportgerechte Verpackung; bedruckte Verkaufskartons verfügbar',
        ],
      },
    ],
    certs: 'ISO 9001 Qualitätsmanagement · CE-Zertifizierung für Modelle für den EU-Markt (Geltungsbereich pro Projekt bestätigt) · BSCI Sozialkonformität (Prüfbericht auf Anfrage) · REACH- und RoHS-Dokumentation bei jeder Bestellung.',
    moqTiers: [
      {
        stage: 'Muster & Freigabe',
        quantity: '1–2 Stück zur Freigabe',
        purpose: 'Form, Farben, Druck und Verpackung vor jeder Produktion bestätigen',
        note: '7–12 Tage; physisches Board, keine Renderdarstellung',
      },
      {
        stage: 'Co-Branding in kleiner Stückzahl',
        quantity: 'ab 5–10 Stück auf ausgewählten bestehenden Plattformen',
        purpose: 'Ein Design auf einer bewährten Plattform mit Logo-Überdruck testen',
        note: 'Der schnellste Weg, eine neue Grafik zu validieren',
      },
      {
        stage: 'Pilotcharge / Erstbestand',
        quantity: '20–50 Stück auf bestehenden Plattformen',
        purpose: 'Den Markt validieren oder Ihren Store mit realem Bestand eröffnen',
        note: 'Niedrigstes Volumen auf bestehenden Plattformen',
      },
      {
        stage: 'Standard-Serienproduktion',
        quantity: '90–100+ Stück pro freigegebener Konfiguration, abhängig von Materialrolle und Verpackungsanforderungen',
        purpose: 'Regelmäßige Serienproduktion zum besten Stückpreis',
        note: '90–100+ Stück; neue Formen erfordern eine eigene Form (+15–20 Tage Werkzeugbau)',
      },
    ],
  },
  it: {
    kicker: 'Condizioni commerciali',
    title: "Condizioni commerciali, trasparenti fin dall’inizio",
    sub: 'MOQ standard, campionatura, condizioni di produzione e consegna sono elencate qui sotto. I progetti che richiedono nuovi stampi, materiali speciali, prove di conformità o imballaggi personalizzati vengono quotati separatamente.',
    cells: [
      {
        label: 'Ordine minimo',
        lines: [
          'Co-branding: da 5–10 pezzi su piattaforme esistenti selezionate',
          'Lotto pilota: 20–50 pezzi su piattaforme esistenti',
          'Volume standard: 90–100+ pezzi per configurazione approvata, in base al rotolo di materiale e ai requisiti di imballaggio',
        ],
      },
      {
        label: 'Tempi di consegna',
        lines: [
          "25–35 giorni dalla PO confermata e dall’acconto",
          'Sviluppo di stampi personalizzati: +15–20 giorni per la produzione degli stampi',
          'Produzione express disponibile per i picchi stagionali',
        ],
      },
      {
        label: 'Campionatura',
        lines: [
          'I campioni prototipo vengono spediti in 7–12 giorni',
          "Il costo del campione viene scalato dall’ordine in serie",
        ],
      },
      {
        label: 'Export e documentazione',
        lines: [
          'Documentazione di esportazione gestita internamente',
          'Imballaggio standard export; cartoni di vendita stampati disponibili',
        ],
      },
    ],
    certs: 'ISO 9001 gestione della qualità · Certificazione CE per i modelli destinati al mercato UE (ambito confermato per progetto) · Conformità sociale BSCI (rapporto di audit su richiesta) · Documentazione REACH e RoHS a ogni ordine.',
    moqTiers: [
      {
        stage: 'Campione e approvazione',
        quantity: "1–2 pezzi per l’approvazione",
        purpose: 'Confermare forma, colori, stampa e imballaggio prima di ogni produzione',
        note: '7–12 giorni; tavola fisica, non un render',
      },
      {
        stage: 'Co-branding in piccole quantità',
        quantity: 'da 5–10 pezzi su piattaforme esistenti selezionate',
        purpose: 'Testare un design su una piattaforma collaudata con sovrastampa del logo',
        note: 'Il modo più rapido per validare una nuova grafica',
      },
      {
        stage: 'Lotto pilota / scorta iniziale',
        quantity: '20–50 pezzi su piattaforme esistenti',
        purpose: 'Validare il mercato o aprire il tuo store con scorta reale',
        note: 'Il volume più basso su piattaforme esistenti',
      },
      {
        stage: 'Produzione in serie standard',
        quantity: '90–100+ pezzi per configurazione approvata, in base al rotolo di materiale e ai requisiti di imballaggio',
        purpose: 'Produzione in serie regolare al miglior prezzo unitario',
        note: '90–100+ pezzi; i nuovi stampi richiedono una forma dedicata (+15–20 giorni per la produzione degli stampi)',
      },
    ],
  },
  pt: {
    kicker: 'Condições comerciais',
    title: "Condições comerciais, transparentes desde o início",
    sub: 'MOQ padrão, amostragem, condições de produção e entrega estão listadas abaixo. Projetos que exigem novos moldes, materiais especiais, ensaios de conformidade ou embalagem personalizada são orçamentados separadamente.',
    cells: [
      {
        label: 'Encomenda mínima',
        lines: [
          'Co-branding: a partir de 5–10 unidades em plataformas existentes selecionadas',
          'Lote piloto: 20–50 unidades em plataformas existentes',
          'Volume padrão: 90–100+ unidades por configuração aprovada, dependendo do rolo de material e dos requisitos de embalagem',
        ],
      },
      {
        label: 'Prazo de entrega',
        lines: [
          "25–35 dias após PO confirmado e sinal",
          'Desenvolvimento de moldes personalizados: +15–20 dias para a produção dos moldes',
          'Produção expressa disponível para picos sazonais',
        ],
      },
      {
        label: 'Amostragem',
        lines: [
          'As amostras de protótipo são enviadas em 7–12 dias',
          "O custo da amostra é deduzido da encomenda em série",
        ],
      },
      {
        label: 'Exportação e documentação',
        lines: [
          'Documentação de exportação tratada internamente',
          'Embalagem padrão de exportação; cartões de venda impressos disponíveis',
        ],
      },
    ],
    certs: 'ISO 9001 gestão da qualidade · Certificação CE para os modelos destinados ao mercado da UE (âmbito confirmado por projeto) · Conformidade social BSCI (relatório de auditoria sob pedido) · Documentação REACH e RoHS em cada encomenda.',
    moqTiers: [
      {
        stage: 'Amostra e aprovação',
        quantity: "1–2 unidades para aprovação",
        purpose: 'Confirmar forma, cores, impressão e embalagem antes de qualquer produção',
        note: '7–12 dias; tábua física, não um render',
      },
      {
        stage: 'Co-branding em pequenas quantidades',
        quantity: 'a partir de 5–10 unidades em plataformas existentes selecionadas',
        purpose: 'Testar um design numa plataforma comprovada com sobreimpressão do logótipo',
        note: 'A forma mais rápida de validar uma nova gráfica',
      },
      {
        stage: 'Lote piloto / stock inicial',
        quantity: '20–50 unidades em plataformas existentes',
        purpose: 'Validar o mercado ou abrir a tua loja com stock real',
        note: 'O volume mais baixo em plataformas existentes',
      },
      {
        stage: 'Produção em série padrão',
        quantity: '90–100+ unidades por configuração aprovada, dependendo do rolo de material e dos requisitos de embalagem',
        purpose: 'Produção em série regular ao melhor preço unitário',
        note: '90–100+ unidades; novos moldes exigem uma forma dedicada (+15–20 dias para a produção dos moldes)',
      },
    ],
  },
  nl: {
    kicker: 'Commerciële voorwaarden',
    title: 'Commerciële voorwaarden, vanaf het begin transparant',
    sub: 'Standaard MOQ, monstername, productie- en leveringsvoorwaarden staan hieronder. Projecten die nieuwe matrijzen, speciale materialen, conformiteitstesten of gepersonaliseerde verpakkingen vereisen, worden apart geoffreerd.',
    cells: [
      {
        label: 'Minimumbestelling',
        lines: [
          'Co-branding: vanaf 5–10 stuks op geselecteerde bestaande platforms',
          'Pilotbatch: 20–50 stuks op bestaande platforms',
          'Standaardvolume: 90–100+ stuks per goedgekeurde configuratie, afhankelijk van de materiaalrol en de verpakkingsvereisten',
        ],
      },
      {
        label: 'Levertijd',
        lines: [
          '25–35 dagen na bevestigde PO en aanbetaling',
          'Ontwikkeling van gepersonaliseerde matrijzen: +15–20 dagen voor de productie van de matrijzen',
          'Expressproductie beschikbaar voor seizoenspieken',
        ],
      },
      {
        label: 'Monstername',
        lines: [
          'Prototypemonsters worden binnen 7–12 dagen verzonden',
          'De monstercost wordt verrekend met de serieorder',
        ],
      },
      {
        label: 'Export en documentatie',
        lines: [
          'Exportdocumentatie intern afgehandeld',
          'Standaard exportverpakking; bedrukte verkoopdozen beschikbaar',
        ],
      },
    ],
    certs: 'ISO 9001 kwaliteitsbeheer · CE-certificering voor modellen bestemd voor de EU-markt (reikwijdte bevestigd per project) · Sociale conformiteit BSCI (auditrapport op verzoek) · REACH- en RoHS-documentatie bij elke bestelling.',
    moqTiers: [
      {
        stage: 'Monster en goedkeuring',
        quantity: '1–2 stuks ter goedkeuring',
        purpose: 'Vorm, kleuren, drukwerk en verpakking bevestigen vóór elke productie',
        note: '7–12 dagen; fysieke plank, geen render',
      },
      {
        stage: 'Co-branding in kleine hoeveelheden',
        quantity: 'vanaf 5–10 stuks op geselecteerde bestaande platforms',
        purpose: 'Een design testen op een bewezen platform met logo-overdruk',
        note: 'De snelste manier om nieuwe graphics te valideren',
      },
      {
        stage: 'Pilotbatch / beginvoorraad',
        quantity: '20–50 stuks op bestaande platforms',
        purpose: 'De markt valideren of je store openen met echte voorraad',
        note: 'Het laagste volume op bestaande platforms',
      },
      {
        stage: 'Standaard serieproductie',
        quantity: '90–100+ stuks per goedgekeurde configuratie, afhankelijk van de materiaalrol en de verpakkingsvereisten',
        purpose: 'Regelmatige serieproductie tegen de beste eenheidsprijs',
        note: '90–100+ stuks; nieuwe matrijzen vereisen een specifieke vorm (+15–20 dagen voor de productie van de matrijzen)',
      },
    ],
  },
  sv: {
    kicker: 'Kommersiella villkor',
    title: 'Kommersiella Villkor, Förmedlade i Förväg',
    sub: 'Standard-MOQ, provtagning, produktions- och leveransvillkor listas nedan. Projekt som kräver nya formar, specialmaterial, efterlevnadstester eller anpassad förpackning offereras separat.',
    cells: [
      {
        label: 'Minimibeställning',
        lines: [
          'Co-branding: från 5–10 st på utvalda befintliga plattformar',
          'Pilotbatch: 20–50 st på befintliga plattformar',
          'Standardvolym: 90–100+ st per godkänd konfiguration, beroende på materialrulle och packningskrav',
        ],
      },
      {
        label: 'Leveranstid',
        lines: [
          '25–35 dagar från bekräftad PO och insättning',
          'Anpassad formutveckling: +15–20 dagar för formtillverkning',
          'Expressproduktion tillgänglig för säsongstoppar',
        ],
      },
      {
        label: 'Provtagning',
        lines: [
          'Prototypprover skickas inom 7–12 dagar',
          'Provkostnad krediteras serieordern',
        ],
      },
      {
        label: 'Export & dokumentation',
        lines: [
          'Exportdokumentation hanteras internt',
          'Exportförpackning i standard; tryckta butikskartonger tillgängliga',
        ],
      },
    ],
    certs: 'ISO 9001 kvalitetsledning · CE-certifiering för modeller avsedda för EU-marknaden (omfattning bekräftas per projekt) · BSCI social regelefterlevnad (revisionsrapport på begäran) · REACH- och RoHS-dokumentation vid varje beställning.',
    moqTiers: [
      {
        stage: 'Prov & godkännande',
        quantity: '1–2 st för godkännande',
        purpose: 'Bekräfta form, färger, tryck och förpackning innan all produktion',
        note: '7–12 dagar; fysisk bräda, ingen rendering',
      },
      {
        stage: 'Co-branding i liten kvantitet',
        quantity: 'från 5–10 st på utvalda befintliga plattformar',
        purpose: 'Testa en design på en beprövad plattform med logotypoverlay',
        note: 'Den snabbaste vägen att validera ny grafik',
      },
      {
        stage: 'Pilotbatch / startlager',
        quantity: '20–50 st på befintliga plattformar',
        purpose: 'Validera marknaden eller öppna din butik med riktigt lager',
        note: 'Lägsta volymen på befintliga plattformar',
      },
      {
        stage: 'Standardserietillverkning',
        quantity: '90–100+ st per godkänd konfiguration, beroende på materialrulle och packningskrav',
        purpose: 'Regelbunden serietillverkning till bästa enhetspris',
        note: '90–100+ st; nya formar kräver en specifik form (+15–20 dagars formtillverkning)',
      },
    ],
  },
  no: {
    kicker: 'Kommersielle vilkår',
    title: 'Kommersielle vilkår, formidlet på forhånd',
    sub: 'Standard-MOQ, prøvetaking, produksjons- og leveringsvilkår står oppført nedenfor. Prosjekter som krever nye former, spesialmaterialer, etterlevelsesprøving eller tilpasset emballasje, tilbys separat.',
    cells: [
      {
        label: 'Minste bestilling',
        lines: [
          'Co-branding: fra 5–10 stk på utvalgte eksisterende plattformer',
          'Pilotbatch: 20–50 stk på eksisterende plattformer',
          'Standardvolum: 90–100+ stk per godkjent konfigurasjon, avhengig av materialrull og emballasjekrav',
        ],
      },
      {
        label: 'Leveringstid',
        lines: [
          '25–35 dager fra bekreftet PO og depositum',
          'Egen formutvikling: +15–20 dager for formproduksjon',
          'Ekspressproduksjon tilgjengelig for sesongtopper',
        ],
      },
      {
        label: 'Prøvetaking',
        lines: [
          'Prototypeprøver sendes innen 7–12 dager',
          'Prøvekostnad krediteres seriebestillingen',
        ],
      },
      {
        label: 'Eksport og dokumentasjon',
        lines: [
          'Eksportdokumentasjon håndteres internt',
          'Eksportemballasje som standard; trykte butikkesker tilgjengelig',
        ],
      },
    ],
    certs: 'ISO 9001 kvalitetsstyring · CE-sertifisering for modeller beregnet på EU-markedet (omfang bekreftes per prosjekt) · BSCI sosial etterlevelse (revisjonsrapport på forespørsel) · REACH- og RoHS-dokumentasjon ved hver bestilling.',
    moqTiers: [
      {
        stage: 'Prøve og godkjenning',
        quantity: '1–2 stk for godkjenning',
        purpose: 'Bekreft form, farger, trykk og emballasje før all produksjon',
        note: '7–12 dager; fysisk brett, ingen rendering',
      },
      {
        stage: 'Co-branding i liten kvantitet',
        quantity: 'fra 5–10 stk på utvalgte eksisterende plattformer',
        purpose: 'Test en design på en testet plattform med logotypeoverlegg',
        note: 'Den raskeste veien til å validere ny grafikk',
      },
      {
        stage: 'Pilotbatch / startlager',
        quantity: '20–50 stk på eksisterende plattformer',
        purpose: 'Validere markedet eller åpne butikken med ekte lager',
        note: 'Laveste volum på eksisterende plattformer',
      },
      {
        stage: 'Standard serietillverkning',
        quantity: '90–100+ stk per godkjent konfigurasjon, avhengig av materialrull og emballasjekrav',
        purpose: 'Regelmessig serietillverkning til beste enhetspris',
        note: '90–100+ stk; nye former krever en egen form (+15–20 dagers formproduksjon)',
      },
    ],
  },
  pl: {
    kicker: 'Warunki handlowe',
    title: 'Warunki handlowe przedstawione wprost',
    sub: 'Standardowe MOQ, próbki oraz warunki produkcji i dostawy znajdziesz poniżej. Projekty wymagające nowych form, specjalnych materiałów, badań zgodności lub indywidualnego opakowania wyceniamy osobno.',
    cells: [
      {
        label: 'Minimalne zamówienie',
        lines: [
          'Co-branding: od 5–10 szt na wybranych istniejących platformach',
          'Partia pilotażowa: 20–50 szt na istniejących platformach',
          'Wolumen standardowy: 90–100+ szt na zatwierdzoną konfigurację, zależnie od rolki materiału i wymagań opakowania',
        ],
      },
      {
        label: 'Czas realizacji',
        lines: [
          '25–35 dni od potwierdzenia zamówienia i zaliczki',
          'Rozwój własnej formy: +15–20 dni na wykonanie formy',
          'Produkcja ekspresowa dostępna w szczytach sezonu',
        ],
      },
      {
        label: 'Próbki',
        lines: [
          'Próbki prototypu wysyłamy w ciągu 7–12 dni',
          'Koszt próbki odliczamy od zamówienia seryjnego',
        ],
      },
      {
        label: 'Eksport i dokumentacja',
        lines: [
          'Dokumentację eksportową obsługujemy wewnętrznie',
          'Opakowanie eksportowe w standardzie; nadrukowane pudełka sklepowe na życzenie',
        ],
      },
    ],
    certs: 'ISO 9001 system zarządzania jakością · Certyfikacja CE dla modeli przeznaczonych na rynek UE (zakres potwierdzany dla każdego projektu) · Społeczna odpowiedzialność BSCI (raport z audytu na życzenie) · Dokumentacja REACH i RoHS do każdego zamówienia.',
    moqTiers: [
      {
        stage: 'Próbka i akceptacja',
        quantity: '1–2 szt do akceptacji',
        purpose: 'Potwierdź kształt, kolory, nadruk i opakowanie przed całą produkcją',
        note: '7–12 dni; fizyczna deska, bez renderu',
      },
      {
        stage: 'Co-branding w małej ilości',
        quantity: 'od 5–10 szt na wybranych istniejących platformach',
        purpose: 'Przetestuj projekt na sprawdzonej platformie z nakładką logo',
        note: 'Najszybsza droga do walidacji nowej grafiki',
      },
      {
        stage: 'Partia pilotażowa / zapas startowy',
        quantity: '20–50 szt na istniejących platformach',
        purpose: 'Zwaliduj rynek lub otwórz sklep z prawdziwym stanem magazynowym',
        note: 'Najmniejszy wolumen na istniejących platformach',
      },
      {
        stage: 'Standardowa produkcja seryjna',
        quantity: '90–100+ szt na zatwierdzoną konfigurację, zależnie od rolki materiału i wymagań opakowania',
        purpose: 'Regularna produkcja seryjna w najlepszej cenie jednostkowej',
        note: '90–100+ szt; nowe kształty wymagają własnej formy (+15–20 dni na jej wykonanie)',
      },
    ],
  },
}

/* ─────────────────────────── who we serve / customer needs ─────────────────────────── */

export interface Segment {
  slug: string
  title: string
  body: string
  points: string[]
  cta: string
  href: string
}

export interface ServeContent {
  kicker: string
  title: string
  sub: string
  segments: Segment[]
}

export const serve: Localized<ServeContent> = {
  en: {
    kicker: 'Who We Serve',
    title: 'Built for Businesses Creating Their Own SUP Products',
    sub: 'Whether you are launching a new paddle board brand or expanding an existing outdoor product line, our manufacturing solutions can be adapted to your business.',
    segments: [
      {
        slug: 'sup-brands',
        title: 'SUP Brands',
        body: 'Develop custom paddle boards that match your brand positioning, target market and product strategy.',
        points: ['Custom designs', 'Brand graphics', 'Product development', 'Private label'],
        cta: 'Explore Custom SUP',
        href: '/product-development',
      },
      {
        slug: 'outdoor-companies',
        title: 'Outdoor & Water Sports Companies',
        body: 'Expand your product portfolio with customized SUP products designed for your market.',
        points: ['Product customization', 'Multiple models', 'OEM production'],
        cta: 'View Custom SUP',
        href: '/solutions/custom-sup',
      },
      {
        slug: 'distributors-retailers',
        title: 'Distributors & Retailers',
        body: 'Create differentiated paddle board collections instead of competing on the same standard products.',
        points: ['Private label', 'Custom packaging', 'Retail-ready products'],
        cta: 'Learn More',
        href: '/solutions/private-label-sup',
      },
      {
        slug: 'resorts-clubs',
        title: 'Resorts, Clubs & Organizations',
        body: 'Develop SUP products and equipment tailored to your operating environment and users.',
        points: ['Custom specifications', 'Branding', 'Bulk production'],
        cta: 'View Solutions',
        href: '/solutions/resort-sup',
      },
    ],
  },
  es: {
    kicker: 'A quién servimos',
    title: 'Hecho para empresas que crean sus propios productos SUP',
    sub: 'Ya sea que estés lanzando una nueva marca de tablas de pádel o ampliando una línea de productos outdoor existente, nuestras soluciones de fabricación se adaptan a tu negocio.',
    segments: [
      {
        slug: 'sup-brands',
        title: 'Marcas de SUP',
        body: 'Desarrolla tablas de pádel personalizadas que coincidan con el posicionamiento de tu marca, tu mercado objetivo y tu estrategia de producto.',
        points: ['Diseños personalizados', 'Gráficos de marca', 'Desarrollo de producto', 'Marca privada'],
        cta: 'Explorar SUP personalizado',
        href: '/product-development',
      },
      {
        slug: 'outdoor-companies',
        title: 'Empresas outdoor y de deportes acuáticos',
        body: 'Amplía tu cartera de productos con SUP personalizados diseñados para tu mercado.',
        points: ['Personalización de producto', 'Varios modelos', 'Producción OEM'],
        cta: 'Ver SUP personalizado',
        href: '/solutions/custom-sup',
      },
      {
        slug: 'distributors-retailers',
        title: 'Distribuidores y minoristas',
        body: 'Crea colecciones de tablas de pádel diferenciadas en lugar de competir con los mismos productos estándar.',
        points: ['Marca privada', 'Embalaje personalizado', 'Productos listos para retail'],
        cta: 'Saber más',
        href: '/solutions/private-label-sup',
      },
      {
        slug: 'resorts-clubs',
        title: 'Resorts, clubes y organizaciones',
        body: 'Desarrolla productos y equipamiento SUP adaptados a tu entorno operativo y a tus usuarios.',
        points: ['Especificaciones personalizadas', 'Marca', 'Producción por volumen'],
        cta: 'Ver soluciones',
        href: '/solutions/resort-sup',
      },
    ],
  },
  fr: {
    kicker: 'Qui nous servons',
    title: 'Conçu pour les entreprises qui créent leurs propres produits SUP',
    sub: 'Que vous lanciez une nouvelle marque de paddles ou que vous étendiez une gamme de produits outdoor existante, nos solutions de fabrication s’adaptent à votre entreprise.',
    segments: [
      {
        slug: 'sup-brands',
        title: 'Marques de SUP',
        body: 'Développez des planches de paddles personnalisées qui correspondent au positionnement de votre marque, à votre marché cible et à votre stratégie produit.',
        points: ['Designs personnalisés', 'Graphismes de marque', 'Développement produit', 'Marque privée'],
        cta: 'Explorer le SUP sur mesure',
        href: '/product-development',
      },
      {
        slug: 'outdoor-companies',
        title: 'Entreprises outdoor et de sports nautiques',
        body: 'Élargissez votre portefeuille de produits avec des SUP personnalisés conçus pour votre marché.',
        points: ['Personnalisation produit', 'Plusieurs modèles', 'Production OEM'],
        cta: 'Voir le SUP sur mesure',
        href: '/solutions/custom-sup',
      },
      {
        slug: 'distributors-retailers',
        title: 'Distributeurs & détaillants',
        body: 'Créez des collections de planches de paddles différenciées plutôt que de concurrencer les mêmes produits standard.',
        points: ['Marque privée', 'Emballage sur mesure', 'Produits prêts pour la vente au détail'],
        cta: 'En savoir plus',
        href: '/solutions/private-label-sup',
      },
      {
        slug: 'resorts-clubs',
        title: 'Resorts, clubs & organisations',
        body: 'Développez des produits et équipements SUP adaptés à votre environnement d’exploitation et à vos utilisateurs.',
        points: ['Spécifications sur mesure', 'Image de marque', 'Production en volume'],
        cta: 'Voir les solutions',
        href: '/solutions/resort-sup',
      },
    ],
  },
  de: {
    kicker: 'Wen wir bedienen',
    title: 'Konzipiert für Unternehmen, die eigene SUP-Produkte entwickeln',
    sub: 'Ob Sie eine neue Paddelboard-Marke lancieren oder eine bestehende Outdoor-Produktlinie erweitern — unsere Fertigungslösungen lassen sich an Ihr Geschäft anpassen.',
    segments: [
      {
        slug: 'sup-brands',
        title: 'SUP-Marken',
        body: 'Entwickeln Sie individuelle Paddelbretter, die zu Ihrer Markenpositionierung, Ihrem Zielmarkt und Ihrer Produktstrategie passen.',
        points: ['Individuelle Designs', 'Markengrafiken', 'Produktentwicklung', 'Private Label'],
        cta: 'Individuelles SUP entdecken',
        href: '/product-development',
      },
      {
        slug: 'outdoor-companies',
        title: 'Outdoor- & Wassersportunternehmen',
        body: 'Erweitern Sie Ihr Produktportfolio mit individuell gefertigten SUP-Produkten für Ihren Markt.',
        points: ['Produktindividualisierung', 'Mehrere Modelle', 'OEM-Produktion'],
        cta: 'Individuelles SUP ansehen',
        href: '/solutions/custom-sup',
      },
      {
        slug: 'distributors-retailers',
        title: 'Distributoren & Händler',
        body: 'Schaffen Sie differenzierte Paddelboard-Kollektionen, statt über dieselben Standardprodukte zu konkurrieren.',
        points: ['Private Label', 'Individuelle Verpackung', 'Handelsfertige Produkte'],
        cta: 'Mehr erfahren',
        href: '/solutions/private-label-sup',
      },
      {
        slug: 'resorts-clubs',
        title: 'Resorts, Clubs & Organisationen',
        body: 'Entwickeln Sie SUP-Produkte und -Ausstattung, die auf Ihr Betriebsumfeld und Ihre Nutzer zugeschnitten sind.',
        points: ['Individuelle Spezifikationen', 'Branding', 'Serienproduktion'],
        cta: 'Lösungen ansehen',
        href: '/solutions/resort-sup',
      },
    ],
  },
  it: {
    kicker: 'Chi serviamo',
    title: 'Pensato per aziende che sviluppano i propri prodotti SUP',
    sub: 'Che tu stia lanciando un nuovo marchio di paddle board o ampliando una linea di prodotti outdoor esistente, le nostre soluzioni di produzione si adattano alla tua attività.',
    segments: [
      {
        slug: 'sup-brands',
        title: 'Marchi SUP',
        body: 'Sviluppa paddle board personalizzate in linea con il tuo posizionamento di marca, il tuo mercato di riferimento e la tua strategia di prodotto.',
        points: ['Design personalizzati', 'Grafiche del marchio', 'Sviluppo prodotto', 'Private label'],
        cta: 'Scopri il SUP personalizzato',
        href: '/product-development',
      },
      {
        slug: 'outdoor-companies',
        title: 'Aziende outdoor e sport acquatici',
        body: 'Amplia il tuo portafoglio prodotti con SUP prodotte su misura per il tuo mercato.',
        points: ['Personalizzazione del prodotto', 'Più modelli', 'Produzione OEM'],
        cta: 'Vedi il SUP personalizzato',
        href: '/solutions/custom-sup',
      },
      {
        slug: 'distributors-retailers',
        title: 'Distributori e rivenditori',
        body: 'Crea collezioni di paddle board differenziate, invece di competere sugli stessi prodotti standard.',
        points: ['Private label', 'Imballaggio personalizzato', 'Prodotti pronti per la vendita'],
        cta: 'Scopri di più',
        href: '/solutions/private-label-sup',
      },
      {
        slug: 'resorts-clubs',
        title: 'Resort, club e organizzazioni',
        body: 'Sviluppa prodotti e attrezzature SUP su misura per il tuo ambiente operativo e i tuoi utenti.',
        points: ['Specifiche personalizzate', 'Branding', 'Produzione in serie'],
        cta: 'Vedi le soluzioni',
        href: '/solutions/resort-sup',
      },
    ],
  },
  pt: {
    kicker: 'Quem servimos',
    title: 'Pensado para empresas que desenvolvem os seus próprios produtos SUP',
    sub: 'Estejas a lançar uma nova marca de paddle board ou a expandir uma linha de produtos outdoor existente, as nossas soluções de produção adaptam-se ao teu negócio.',
    segments: [
      {
        slug: 'sup-brands',
        title: 'Marcas SUP',
        body: 'Desenvolve paddle boards personalizadas em linha com o teu posicionamento de marca, o teu mercado-alvo e a tua estratégia de produto.',
        points: ['Designs personalizados', 'Gráficas da marca', 'Desenvolvimento de produto', 'Private label'],
        cta: 'Descobre o SUP personalizado',
        href: '/product-development',
      },
      {
        slug: 'outdoor-companies',
        title: 'Empresas outdoor e desportos aquáticos',
        body: 'Expande o teu portefólio de produtos com SUP produzidas à medida para o teu mercado.',
        points: ['Personalização do produto', 'Mais modelos', 'Produção OEM'],
        cta: 'Ver o SUP personalizado',
        href: '/solutions/custom-sup',
      },
      {
        slug: 'distributors-retailers',
        title: 'Distribuidores e retalhistas',
        body: 'Cria coleções de paddle board diferenciadas, em vez de competir nos mesmos produtos padrão.',
        points: ['Private label', 'Embalagem personalizada', 'Produtos prontos para venda'],
        cta: 'Saber mais',
        href: '/solutions/private-label-sup',
      },
      {
        slug: 'resorts-clubs',
        title: 'Resorts, clubes e organizações',
        body: 'Desenvolve produtos e equipamentos SUP à medida do teu ambiente operacional e dos teus utilizadores.',
        points: ['Especificações personalizadas', 'Branding', 'Produção em série'],
        cta: 'Ver as soluções',
        href: '/solutions/resort-sup',
      },
    ],
  },
  nl: {
    kicker: 'Wie wij bedienen',
    title: 'Ontworpen voor bedrijven die hun eigen SUP-producten ontwikkelen',
    sub: 'Of je nu een nieuw paddleboard-merk lanceert of een bestaande outdoor-productlijn uitbreidt, onze productieoplossingen passen zich aan jouw bedrijf aan.',
    segments: [
      {
        slug: 'sup-brands',
        title: 'SUP-merken',
        body: 'Ontwikkel gepersonaliseerde paddle boards in lijn met jouw merkpositionering, doelmarkt en productstrategie.',
        points: ['Aangepaste designs', 'Merkgraphics', 'Productontwikkeling', 'Private label'],
        cta: 'Ontdek de gepersonaliseerde SUP',
        href: '/product-development',
      },
      {
        slug: 'outdoor-companies',
        title: 'Outdoor- en watersportbedrijven',
        body: 'Breid je productportfolio uit met op maat gemaakte SUP-producten voor jouw markt.',
        points: ['Productpersonalisatie', 'Meerdere modellen', 'OEM-productie'],
        cta: 'Bekijk de gepersonaliseerde SUP',
        href: '/solutions/custom-sup',
      },
      {
        slug: 'distributors-retailers',
        title: 'Distributeurs en retailers',
        body: 'Creëer gedifferentieerde paddleboard-collecties in plaats van te concurreren op dezelfde standaardproducten.',
        points: ['Private label', 'Gepersonaliseerde verpakking', 'Winkelklare producten'],
        cta: 'Meer weten',
        href: '/solutions/private-label-sup',
      },
      {
        slug: 'resorts-clubs',
        title: 'Resorts, clubs en organisaties',
        body: 'Ontwikkel SUP-producten en -uitrusting op maat van jouw operationele omgeving en gebruikers.',
        points: ['Gepersonaliseerde specificaties', 'Branding', 'Serieproductie'],
        cta: 'Bekijk de oplossingen',
        href: '/solutions/resort-sup',
      },
    ],
  },
  sv: {
    kicker: 'Vilka Vi Betjänar',
    title: 'Byggt för Företag Som Skapar Egna SUP-produkter',
    sub: 'Oavsett om du lanserar ett nytt paddleboard-varumärke eller utökar en befintlig utomhusproduktlinje, så kan våra tillverkningslösningar anpassas till ditt företag.',
    segments: [
      {
        slug: 'sup-brands',
        title: 'SUP-varumärken',
        body: 'Utveckla anpassade paddleboards som matchar din varumärkespositionering, målmarknad och produktstrategi.',
        points: ['Anpassad design', 'Varumärkesgrafik', 'Produktutveckling', 'Privat etikett'],
        cta: 'Utforska anpassade SUP:er',
        href: '/product-development',
      },
      {
        slug: 'outdoor-companies',
        title: 'Outdoor- & vattensportföretag',
        body: 'Utöka din produktportfölj med anpassade SUP-produkter designade för din marknad.',
        points: ['Produktanpassning', 'Flera modeller', 'OEM-produktion'],
        cta: 'Se anpassade SUP:er',
        href: '/solutions/custom-sup',
      },
      {
        slug: 'distributors-retailers',
        title: 'Distributörer & återförsäljare',
        body: 'Skapa differentierade paddleboard-kollektioner i stället för att konkurrera med samma standardprodukter.',
        points: ['Privat etikett', 'Anpassad förpackning', 'Butiksfärdiga produkter'],
        cta: 'Läs mer',
        href: '/solutions/private-label-sup',
      },
      {
        slug: 'resorts-clubs',
        title: 'Resorter, klubbar & organisationer',
        body: 'Utveckla SUP-produkter och utrustning anpassade till din operativa miljö och dina användare.',
        points: ['Anpassade specifikationer', 'Varumärkning', 'Serietillverkning'],
        cta: 'Se lösningarna',
        href: '/solutions/resort-sup',
      },
    ],
  },
  no: {
    kicker: 'Hvem vi betjener',
    title: 'Bygget for bedrifter som lager egne SUP-produkter',
    sub: 'Enten du lanserer et nytt paddleboard-merke eller utvider en eksisterende friluftsproduktlinje, kan våre produksjonsløsninger tilpasses bedriften din.',
    segments: [
      {
        slug: 'sup-brands',
        title: 'SUP-merker',
        body: 'Utvikle skreddersydde paddleboards som passer til merkeposisjoneringen, målmarkedet og produktstrategien din.',
        points: ['Tilpasset design', 'Merkgrafikk', 'Produktutvikling', 'Private label'],
        cta: 'Utforsk skreddersydde SUP-er',
        href: '/product-development',
      },
      {
        slug: 'outdoor-companies',
        title: 'Outdoor- og vannsportsbedrifter',
        body: 'Utvid produktporteføljen med skreddersydde SUP-produkter designet for markedet ditt.',
        points: ['Produkttilpasning', 'Flere modeller', 'OEM-produksjon'],
        cta: 'Se skreddersydde SUP-er',
        href: '/solutions/custom-sup',
      },
      {
        slug: 'distributors-retailers',
        title: 'Distributører og forhandlere',
        body: 'Skap differensierte paddleboard-kolleksjoner i stedet for å konkurrere med de samme standardproduktene.',
        points: ['Private label', 'Tilpasset emballasje', 'Butikkklare produkter'],
        cta: 'Les mer',
        href: '/solutions/private-label-sup',
      },
      {
        slug: 'resorts-clubs',
        title: 'Resorter, klubber og organisasjoner',
        body: 'Utvikle SUP-produkter og utstyr tilpasset driftsmiljøet og brukerne dine.',
        points: ['Tilpassede spesifikasjoner', 'Merking', 'Serietillverkning'],
        cta: 'Se løsningene',
        href: '/solutions/resort-sup',
      },
    ],
  },
  pl: {
    kicker: 'Kogo obsługujemy',
    title: 'Dla firm, które wytwarzają własne produkty SUP',
    sub: 'Niezależnie od tego, czy wprowadzasz na rynek nową markę desek SUP, czy rozszerzasz istniejącą linię produktów outdoorowych, nasze rozwiązania produkcyjne możemy dopasować do Twojej firmy.',
    segments: [
      {
        slug: 'sup-brands',
        title: 'Marki SUP',
        body: 'Opracuj deski SUP na zamówienie, które odpowiadają pozycjonowaniu marki, rynkowi docelowemu i Twojej strategii produktowej.',
        points: ['Projekt na zamówienie', 'Grafika marki', 'Rozwój produktu', 'Marka własna'],
        cta: 'Poznaj deski SUP na zamówienie',
        href: '/product-development',
      },
      {
        slug: 'outdoor-companies',
        title: 'Firmy outdoorowe i sportów wodnych',
        body: 'Rozszerz portfolio produktowe o deski SUP na zamówienie, zaprojektowane dla Twojego rynku.',
        points: ['Dostosowanie produktu', 'Wiele modeli', 'Produkcja OEM'],
        cta: 'Zobacz deski SUP na zamówienie',
        href: '/solutions/custom-sup',
      },
      {
        slug: 'distributors-retailers',
        title: 'Dystrybutorzy i sprzedawcy detaliczni',
        body: 'Twórz wyróżnione kolekcje desek SUP, zamiast konkurować tymi samymi produktami masowymi.',
        points: ['Marka własna', 'Indywidualne opakowanie', 'Produkty gotowe do sprzedaży'],
        cta: 'Dowiedz się więcej',
        href: '/solutions/private-label-sup',
      },
      {
        slug: 'resorts-clubs',
        title: 'Ośrodki wypoczynkowe, kluby i organizacje',
        body: 'Opracuj produkty i akcesoria SUP dopasowane do Twojego środowiska operacyjnego i użytkowników.',
        points: ['Specyfikacje na zamówienie', 'Znakowanie', 'Produkcja seryjna'],
        cta: 'Zobacz rozwiązania',
        href: '/solutions/resort-sup',
      },
    ],
  },
}

/* ─────────────────────────── solutions ─────────────────────────── */

export interface SolutionPillar {
  title: string
  body: string
  points: string[]
}

export interface SolutionsContent {
  kicker: string
  title: string
  sub: string
  pillars: SolutionPillar[]
}

export const solutions: Localized<SolutionsContent> = {
  en: {
    kicker: 'Customization Capability',
    title: 'Custom SUP Product Solutions For Your Business',
    sub: 'From OEM/ODM programs for brands to private-label lines for distributors and sourcing teams — every requirement turns into a manufacturable product.',
    pillars: [
      {
        title: 'Board Design',
        body: 'Define the board as your product requires.',
        points: ['Shape', 'Size', 'Thickness', 'Construction'],
      },
      {
        title: 'Graphics & Branding',
        body: 'Put your identity on every board.',
        points: ['Logo', 'Colors', 'Artwork', 'Printing'],
      },
      {
        title: 'Accessories',
        body: 'Complete the product with matched parts.',
        points: ['Paddle', 'Bag', 'Fin', 'Packaging'],
      },
      {
        title: 'Production Requirements',
        body: 'Tailor how your project is produced.',
        points: ['Quantity', 'Specification', 'Application'],
      },
    ],
  },
  es: {
    kicker: 'Capacidad de personalización',
    title: 'Soluciones de productos SUP personalizados para tu negocio',
    sub: 'De los programas OEM/ODM para marcas a las líneas de marca privada para distribuidores y equipos de compra — cada requisito se convierte en un producto fabricable.',
    pillars: [
      {
        title: 'Diseño de la tabla',
        body: 'Define la tabla según lo que requiere tu producto.',
        points: ['Forma', 'Tamaño', 'Grosor', 'Construcción'],
      },
      {
        title: 'Gráficos y marca',
        body: 'Pon tu identidad en cada tabla.',
        points: ['Logo', 'Colores', 'Arte', 'Impresión'],
      },
      {
        title: 'Accesorios',
        body: 'Completa el producto con piezas a juego.',
        points: ['Remo', 'Bolsa', 'Quilla', 'Embalaje'],
      },
      {
        title: 'Requisitos de producción',
        body: 'Adapta cómo se produce tu proyecto.',
        points: ['Cantidad', 'Especificación', 'Aplicación'],
      },
    ],
  },
  fr: {
    kicker: 'Capacité de personnalisation',
    title: 'Solutions de produits SUP sur mesure pour votre entreprise',
    sub: 'Des programmes OEM/ODM pour les marques aux gammes en marque privée pour les distributeurs et les équipes d’approvisionnement — chaque exigence devient un produit manufacturable.',
    pillars: [
      {
        title: 'Conception de la planche',
        body: 'Définissez la planche selon les exigences de votre produit.',
        points: ['Forme', 'Taille', 'Épaisseur', 'Construction'],
      },
      {
        title: 'Graphismes & marque',
        body: 'Apposez votre identité sur chaque planche.',
        points: ['Logo', 'Couleurs', 'Arts graphiques', 'Impression'],
      },
      {
        title: 'Accessoires',
        body: 'Complétez le produit avec des pièces assorties.',
        points: ['Pagaie', 'Sac', 'Dérive', 'Emballage'],
      },
      {
        title: 'Exigences de production',
        body: 'Adaptez la manière dont votre projet est produit.',
        points: ['Quantité', 'Spécification', 'Application'],
      },
    ],
  },
  de: {
    kicker: 'Individualisierungskompetenz',
    title: 'Individuelle SUP-Produktlösungen für Ihr Unternehmen',
    sub: 'Von OEM-/ODM-Programmen für Marken bis zu Private-Label-Linien für Distributoren und Einkaufsteams — jede Anforderung wird zu einem fertigbaren Produkt.',
    pillars: [
      {
        title: 'Borddesign',
        body: 'Definieren Sie das Board nach den Anforderungen Ihres Produkts.',
        points: ['Form', 'Größe', 'Dicke', 'Konstruktion'],
      },
      {
        title: 'Grafik & Branding',
        body: 'Bringen Sie Ihre Identität auf jedes Board.',
        points: ['Logo', 'Farben', 'Artwork', 'Druck'],
      },
      {
        title: 'Zubehör',
        body: 'Vervollständigen Sie das Produkt mit passenden Teilen.',
        points: ['Paddel', 'Tasche', 'Finne', 'Verpackung'],
      },
      {
        title: 'Produktionsanforderungen',
        body: 'Passen Sie an, wie Ihr Projekt produziert wird.',
        points: ['Menge', 'Spezifikation', 'Anwendung'],
      },
    ],
  },
  it: {
    kicker: 'Capacità di personalizzazione',
    title: 'Soluzioni SUP personalizzate per la tua azienda',
    sub: 'Dai programmi OEM/ODM per i marchi alle linee private label per distributori e team di acquisto — ogni requisito diventa un prodotto producibile.',
    pillars: [
      {
        title: 'Design della tavola',
        body: 'Definisci la tavola secondo i requisiti del tuo prodotto.',
        points: ['Forma', 'Misure', 'Spessore', 'Costruzione'],
      },
      {
        title: 'Grafica e branding',
        body: 'Applica la tua identità su ogni tavola.',
        points: ['Logo', 'Colori', 'Artwork', 'Stampa'],
      },
      {
        title: 'Accessori',
        body: 'Completa il prodotto con componenti abbinati.',
        points: ['Pagaia', 'Borsa', 'Pinna', 'Imballaggio'],
      },
      {
        title: 'Requisiti di produzione',
        body: 'Personalizza il modo in cui il tuo progetto viene prodotto.',
        points: ['Quantità', 'Specifica', 'Applicazione'],
      },
    ],
  },
  pt: {
    kicker: 'Capacidade de personalização',
    title: 'Soluções SUP personalizadas para a tua empresa',
    sub: 'Dos programas OEM/ODM para as marcas às linhas private label para distribuidores e equipas de compras — cada requisito torna-se um produto fabricável.',
    pillars: [
      {
        title: 'Design da tábua',
        body: 'Define a tábua de acordo com os requisitos do teu produto.',
        points: ['Forma', 'Dimensões', 'Espessura', 'Construção'],
      },
      {
        title: 'Gráfica e branding',
        body: 'Aplica a tua identidade em cada tábua.',
        points: ['Logótipo', 'Cores', 'Artwork', 'Impressão'],
      },
      {
        title: 'Acessórios',
        body: 'Completa o produto com componentes combinados.',
        points: ['Pagaia', 'Bolsa', 'Barbatana', 'Embalagem'],
      },
      {
        title: 'Requisitos de produção',
        body: 'Personaliza a forma como o teu projeto é produzido.',
        points: ['Quantidade', 'Especificação', 'Aplicação'],
      },
    ],
  },
  nl: {
    kicker: 'Personalisatiecapaciteit',
    title: 'Gepersonaliseerde SUP-productoplossingen voor jouw bedrijf',
    sub: "Van OEM/ODM-programma's voor merken tot private label-lijnen voor distributeurs en inkoopteams — elke vereiste wordt een produceerbaar product.",
    pillars: [
      {
        title: 'Design van de plank',
        body: 'Definieer de plank volgens de vereisten van jouw product.',
        points: ['Vorm', 'Afmetingen', 'Dikte', 'Constructie'],
      },
      {
        title: 'Graphics en branding',
        body: 'Breng jouw identiteit aan op elke plank.',
        points: ['Logo', 'Kleuren', 'Artwork', 'Drukwerk'],
      },
      {
        title: 'Accessoires',
        body: 'Volledig product met bijpassende onderdelen.',
        points: ['Peddel', 'Tas', 'Vin', 'Verpakking'],
      },
      {
        title: 'Productievereisten',
        body: 'Personaliseer hoe jouw project wordt geproduceerd.',
        points: ['Hoeveelheid', 'Specificatie', 'Toepassing'],
      },
    ],
  },
  sv: {
    kicker: 'Anpassningskapacitet',
    title: 'Anpassade SUP-produktlösningar För Ditt Företag',
    sub: 'Från OEM/ODM-program för varumärken till privat etikett-linjer för distributörer och inköpsteam — varje krav blir en tillverkningsbar produkt.',
    pillars: [
      {
        title: 'Bräddesign',
        body: 'Definiera brädan enligt din produkts behov.',
        points: ['Form', 'Mått', 'Tjocklek', 'Konstruktion'],
      },
      {
        title: 'Grafik & varumärkning',
        body: 'Sätt din identitet på varje bräda.',
        points: ['Logotyp', 'Färger', 'Artwork', 'Tryck'],
      },
      {
        title: 'Tillbehör',
        body: 'Komplettera produkten med matchande delar.',
        points: ['Paddel', 'Väska', 'Fena', 'Förpackning'],
      },
      {
        title: 'Produktionskrav',
        body: 'Anpassa hur ditt projekt produceras.',
        points: ['Kvantitet', 'Specifikation', 'Tillämpning'],
      },
    ],
  },
  no: {
    kicker: 'Tilpassningsevne',
    title: 'Skreddersydde SUP-produktløsninger for bedriften din',
    sub: 'Fra OEM/ODM-programmer for merker til private label-linjer for distributører og innkjøpsgrupper — hvert krav blir et produksjonsklart produkt.',
    pillars: [
      {
        title: 'Brettdesign',
        body: 'Definer brettet etter behovene til produktet ditt.',
        points: ['Form', 'Mål', 'Tykkelse', 'Konstruksjon'],
      },
      {
        title: 'Grafikk og merking',
        body: 'Sett identiteten din på hvert brett.',
        points: ['Logotype', 'Farger', 'Grafikk', 'Trykk'],
      },
      {
        title: 'Tilbehør',
        body: 'Kompletter produktet med matchende deler.',
        points: ['Padle', 'Veske', 'Finne', 'Emballasje'],
      },
      {
        title: 'Produksjonskrav',
        body: 'Tilpass hvordan prosjektet ditt produseres.',
        points: ['Mengde', 'Spesifikasjon', 'Bruksområde'],
      },
    ],
  },
  pl: {
    kicker: 'Możliwości personalizacji',
    title: 'Rozwiązania produktowe SUP na zamówienie dla Twojej firmy',
    sub: 'Od programów OEM/ODM dla marek po linie marek własnych dla dystrybutorów i zespołów zakupowych — każde wymaganie staje się produktem możliwym do wyprodukowania.',
    pillars: [
      {
        title: 'Projekt deski',
        body: 'Zdefiniuj deskę zgodnie z wymaganiami Twojego produktu.',
        points: ['Kształt', 'Wymiary', 'Grubość', 'Konstrukcja'],
      },
      {
        title: 'Grafika i znakowanie',
        body: 'Umieść swoją tożsamość na każdej desce.',
        points: ['Logo', 'Kolory', 'Grafika', 'Druk'],
      },
      {
        title: 'Akcesoria',
        body: 'Uzupełnij produkt o pasujące elementy.',
        points: ['Wiosło', 'Torba', 'Płetwa', 'Opakowanie'],
      },
      {
        title: 'Wymagania produkcyjne',
        body: 'Dostosuj sposób produkcji swojego projektu.',
        points: ['Ilość', 'Specyfikacja', 'Zastosowanie'],
      },
    ],
  },
}

/* ─────────────────────────── custom sup studio ─────────────────────────── */

export interface StudioStep {
  title: string
  body: string
}

export interface StudioContent {
  kicker: string
  title: string
  sub: string
  scrollHint: string
  steps: StudioStep[]
}

export const studio: Localized<StudioContent> = {
  en: {
    kicker: 'Configurator',
    title: 'Specification Builder',
    sub: 'Scroll the build — from the board shape to the carton it ships in, every layer is specified by you.',
    scrollHint: 'Scroll to explore',
    steps: [
      {
        title: 'Shape and Size',
        body: 'Choose a proven platform or specify a custom outline — length, width, thickness, rail profile and rocker.',
      },
      {
        title: 'Construction',
        body: 'Single-layer, dual-layer or fusion layup. Rail band count and reinforcement zones specified per use case.',
      },
      {
        title: 'Deck Graphics',
        body: 'Full-deck artwork in your colors, printed from your brand files. Our prepress team converts rough concepts into production-ready data.',
      },
      {
        title: 'Deck Pad',
        body: 'EVA in your brand colors, with custom logos, groove patterns, cutouts and textures.',
      },
      {
        title: 'Accessories and Packaging',
        body: 'Paddles, pumps, bags, fins and leashes — customised and bundled. Printed cartons and retail sleeves to your spec.',
      },
    ],
  },
  es: {
    kicker: 'Configurador',
    title: 'Constructor de especificaciones',
    sub: 'Desliza por todo el proceso — de la forma de la tabla a la caja en la que se envía, cada capa es especificada por ti.',
    scrollHint: 'Desliza para explorar',
    steps: [
      {
        title: 'Forma y tamaño',
        body: 'Elige una plataforma probada o especifica un contorno propio: eslora, manga, grosor, perfil de rails y rocker.',
      },
      {
        title: 'Construcción',
        body: 'Layupl de una capa, doble o de fusión. Número de cintas de rail y zonas de refuerzo según el uso.',
      },
      {
        title: 'Gráficos de cubierta',
        body: 'Arte a toda cubierta en tus colores, impreso desde tus archivos de marca. Nuestro equipo de preimpresión convierte ideas en bruto en datos listos para producción.',
      },
      {
        title: 'Piso de cubierta',
        body: 'EVA en los colores de tu marca, con logos, muescas de agarre, recortes y texturas.',
      },
      {
        title: 'Accesorios y embalaje',
        body: 'Remos, bombas, bolsas, quillas y correas — personalizados y empaquetados. Cajas impresas y fundas de retail según tu especificación.',
      },
    ],
  },
  fr: {
    kicker: 'Configurateur',
    title: 'Constructeur de spécifications',
    sub: 'Faites défiler la construction — de la forme de la planche au carton dans lequel elle est expédiée, chaque couche est spécifiée par vous.',
    scrollHint: 'Faites défiler pour explorer',
    steps: [
      {
        title: 'Forme et taille',
        body: 'Choisissez une plateforme éprouvée ou spécifiez un contour personnalisé : longueur, largeur, épaisseur, profil des rails et rocker.',
      },
      {
        title: 'Construction',
        body: 'Stratification monocouche, bicouche ou par fusion. Nombre de bandes de rail et zones de renfort spécifiés selon l’usage.',
      },
      {
        title: 'Graphismes de pont',
        body: 'Arts graphiques sur toute la surface en vos couleurs, imprimés à partir de vos fichiers de marque. Notre équipe de prépresse transforme les concepts bruts en données prêtes pour la production.',
      },
      {
        title: 'Pad de pont',
        body: 'EVA aux couleurs de votre marque, avec logos personnalisés, rainures, découpes et textures.',
      },
      {
        title: 'Accessoires et emballage',
        body: 'Pagaies, pompes, sacs, dérives et leashes — personnalisés et regroupés. Cartons imprimés et manchons de vente au détail selon votre spécification.',
      },
    ],
  },
  de: {
    kicker: 'Konfigurator',
    title: 'Spezifikations-Builder',
    sub: 'Scrollen Sie durch den Aufbau — von der Boardform bis zum Versandkarton, jede Ebene legen Sie selbst fest.',
    scrollHint: 'Scrollen, um zu entdecken',
    steps: [
      {
        title: 'Form und Größe',
        body: 'Wählen Sie eine bewährte Plattform oder legen Sie eine eigene Kontur fest — Länge, Breite, Dicke, Railprofil und Rocker.',
      },
      {
        title: 'Konstruktion',
        body: 'Einlagiger, zweilagiger oder Fusionsaufbau. Anzahl der Railbänder und Verstärkungszonen je nach Einsatzzweck.',
      },
      {
        title: 'Deck-Grafik',
        body: 'Artwork über die gesamte Deckfläche in Ihren Farben, gedruckt aus Ihren Markendateien. Unser Prepress-Team wandelt grobe Konzepte in produktionsreife Daten.',
      },
      {
        title: 'Deckpad',
        body: 'EVA in Ihren Markenfarben, mit individuellen Logos, Profilrillen, Ausstanzungen und Texturen.',
      },
      {
        title: 'Zubehör und Verpackung',
        body: 'Paddel, Pumpen, Taschen, Finnen und Leashes — individualisiert und als Bundle. Bedruckte Kartons und Handelseinschläge nach Ihrer Spezifikation.',
      },
    ],
  },
  it: {
    kicker: 'Configuratore',
    title: 'Builder di specifiche',
    sub: 'Scorri la struttura — dalla forma della tavola al cartone di spedizione, ogni livello è definito da te.',
    scrollHint: 'Scorri per esplorare',
    steps: [
      {
        title: 'Forma e misure',
        body: 'Scegli una piattaforma collaudata o definisci un contorno personalizzato — lunghezza, larghezza, spessore, profilo dei rail e rocker.',
      },
      {
        title: 'Costruzione',
        body: "Costruzione monostrato, doppio strato o a fusione. Numero di bande dei rail e zone di rinforzo in base all’uso.",
      },
      {
        title: 'Grafica del deck',
        body: 'Artwork su tutta la superficie del deck nei tuoi colori, stampato dai tuoi file del marchio. Il nostro team di prepress trasforma i concetti grezzi in dati pronti per la produzione.',
      },
      {
        title: 'Deck pad',
        body: 'EVA nei colori del tuo marchio, con loghi personalizzati, scanalature, fustellature e texture.',
      },
      {
        title: 'Accessori e imballaggio',
        body: 'Pagaie, pompe, borse, pinne e leash — personalizzati e in bundle. Cartoni stampati e maniche retail secondo la tua specifica.',
      },
    ],
  },
  pt: {
    kicker: 'Configurador',
    title: 'Builder de especificações',
    sub: 'Percorre a estrutura — desde a forma da tábua à caixa de expedição, cada nível é definido por ti.',
    scrollHint: 'Percorre para explorar',
    steps: [
      {
        title: 'Forma e dimensões',
        body: 'Escolhe uma plataforma comprovada ou define um contorno personalizado — comprimento, largura, espessura, perfil dos rails e rocker.',
      },
      {
        title: 'Construção',
        body: "Construção de camada única, dupla ou por fusão. Número de fitas dos rails e zonas de reforço consoante o uso.",
      },
      {
        title: 'Gráfica do deck',
        body: 'Artwork em toda a superfície do deck nas tuas cores, impresso a partir dos teus ficheiros de marca. A nossa equipa de pré-impressão transforma conceitos em bruto em dados prontos para produção.',
      },
      {
        title: 'Deck pad',
        body: 'EVA nas cores da tua marca, com logótipos personalizados, canais, recortes e texturas.',
      },
      {
        title: 'Acessórios e embalagem',
        body: 'Pagaias, bombas, bolsas, barbatanas e leashes — personalizados e em bundle. Caixas impressas e mangas de retalho segundo a tua especificação.',
      },
    ],
  },
  nl: {
    kicker: 'Configurator',
    title: 'Specificatie-builder',
    sub: 'Doorloop de opbouw — van de vorm van de plank tot de verzenddoos, elk niveau bepaal jij.',
    scrollHint: 'Scroll om te verkennen',
    steps: [
      {
        title: 'Vorm en afmetingen',
        body: 'Kies een bewezen platform of definieer een gepersonaliseerde contour — lengte, breedte, dikte, railprofiel en rocker.',
      },
      {
        title: 'Constructie',
        body: 'Constructie in één laag, dubbele laag of door fusie. Aantal raillinten en verstevigingszones afhankelijk van het gebruik.',
      },
      {
        title: 'Graphics van het deck',
        body: 'Artwork over het volledige deck in jouw kleuren, gedrukt vanuit jouw merkbestanden. Ons prepress-team zet ruwe concepten om in productieklaar data.',
      },
      {
        title: 'Deckpad',
        body: "EVA in de kleuren van jouw merk, met gepersonaliseerde logo's, groeven, uitsparingen en texturen.",
      },
      {
        title: 'Accessoires en verpakking',
        body: 'Peddel, pompen, tassen, vinnen en leashes — gepersonaliseerd en gebundeld. Bedrukte dozen en retailhoezen volgens jouw specificatie.',
      },
    ],
  },
  sv: {
    kicker: 'Konfigurator',
    title: 'Specifikationsbyggare',
    sub: 'Scrolla igenom uppbyggnaden — från brädans form till kartongen den skickas i, varje lager specificeras av dig.',
    scrollHint: 'Scrolla för att utforska',
    steps: [
      {
        title: 'Form och storlek',
        body: 'Välj en beprövad plattform eller specificera en egen kontur — längd, bredd, tjocklek, railsprofil och rocker.',
      },
      {
        title: 'Konstruktion',
        body: 'Enskikts-, dubbelskikts- eller fusionsuppbyggnad. Antal skeppsband och förstärkningszoner specificeras per användningsområde.',
      },
      {
        title: 'Däckgrafik',
        body: 'Fullständigt däckartwork i dina färger, tryckt från dina varumärkesfiler. Vårt prepress-team omvandlar grova koncept till produktionsklara data.',
      },
      {
        title: 'Däckpad',
        body: 'EVA i dina varumärkesfärger, med anpassade logotyper, spårmönster, utskärningar och texturer.',
      },
      {
        title: 'Tillbehör och förpackning',
        body: 'Paddlar, pumpar, väskor, fenor och leashes — anpassade och paketerade. Tryckta kartonger och butikshylsor enligt din spec.',
      },
    ],
  },
  no: {
    kicker: 'Konfigurator',
    title: 'Spesifikasjonsbygger',
    sub: 'Rull gjennom oppbyggingen — fra brettets form til esken det sendes i, der hvert lag er spesifisert av deg.',
    scrollHint: 'Rull for å utforske',
    steps: [
      {
        title: 'Form og størrelse',
        body: 'Velg en testet plattform eller spesifiser en egen kontur — lengde, bredde, tykkelse, railsprofil og rocker.',
      },
      {
        title: 'Konstruksjon',
        body: 'Ettlags-, tolags- eller sveiset oppbygning. Antall skinner og forsterkningssoner spesifiseres per bruksområde.',
      },
      {
        title: 'Dekkgrafikk',
        body: 'Full dekkgrafikk i fargene dine, trykt fra merkefilene dine. Prepress-teamet vårt gjør om grove konsepter til produksjonsklare data.',
      },
      {
        title: 'Dekkpute',
        body: 'EVA i merkefargene dine, med tilpassede logotyper, spormønstre, utskjæringer og teksturer.',
      },
      {
        title: 'Tilbehør og emballasje',
        body: 'Padler, pumper, vesker, finner og leashes — tilpasset og pakket. Trykte esker og butikkhyller etter spesifikasjonen din.',
      },
    ],
  },
  pl: {
    kicker: 'Konfigurator',
    title: 'Konstruktor specyfikacji',
    sub: 'Przewiń konstrukcję — od kształtu deski po pudełko, w którym zostanie wysłana; każdą warstwę określasz sam.',
    scrollHint: 'Przewiń, aby poznać szczegóły',
    steps: [
      {
        title: 'Kształt i wymiary',
        body: 'Wybierz sprawdzoną platformę lub zdefiniuj własny kontur — długość, szerokość, grubość, profil listwy krawędziowej i rocker.',
      },
      {
        title: 'Konstrukcja',
        body: 'Konstrukcja jednowarstwowa, dwuwarstwowa lub zgrzewana. Liczba listew i stref wzmocnień dobierana do zastosowania.',
      },
      {
        title: 'Grafika pokładu',
        body: 'Grafika na całym pokładzie w Twoich kolorach, drukowana z plików Twojej marki. Nasz zespół przygotowania do druku zamienia surowe koncepcje w dane gotowe do produkcji.',
      },
      {
        title: 'Nakładka na pokład',
        body: 'EVA w kolorach Twojej marki, z indywidualnymi logotypami, rowkami, wycięciami i teksturami.',
      },
      {
        title: 'Akcesoria i opakowanie',
        body: 'Wiosła, pompki, torby, płetwy i smycze — spersonalizowane i w zestawie. Nadrukowane pudełka i zawieszki sklepowe zgodnie z Twoją specyfikacją.',
      },
    ],
  },
}

/* ─────────────────────────── products ─────────────────────────── */

export interface Product {
  slug: string
  series: string
  sku: string
  name: string
  tagline: string
  desc: string
  uses: string[]
  for: string[]
  specs: string
  artwork: string
  image: string
  hue: number
}

export interface ProductsContent {
  kicker: string
  title: string
  sub: string
  items: Product[]
}

export interface ProductFilterGroup {
  key: string
  label: string
}

export const productFilters: Localized<{ all: string; groups: ProductFilterGroup[] }> = {
  en: {
    all: 'All Platforms',
    groups: [
      { key: 'all-around', label: 'All-Around' },
      { key: 'race', label: 'Race' },
      { key: 'surf', label: 'Surf' },
      { key: 'touring', label: 'Touring' },
      { key: 'yoga', label: 'Yoga' },
      { key: 'whitewater', label: 'Whitewater' },
      { key: 'fishing', label: 'Fishing' },
      { key: 'kids', label: 'Kids' },
      { key: 'multi', label: 'Multi-Person' },
    ],
  },
  es: {
    all: 'Todas las plataformas',
    groups: [
      { key: 'all-around', label: 'Polivalente' },
      { key: 'race', label: 'Competición' },
      { key: 'surf', label: 'Surf' },
      { key: 'touring', label: 'Travesía' },
      { key: 'yoga', label: 'Yoga' },
      { key: 'whitewater', label: 'Aguas bravas' },
      { key: 'fishing', label: 'Pesca' },
      { key: 'kids', label: 'Infantil' },
      { key: 'multi', label: 'Multipersona' },
    ],
  },
  fr: {
    all: 'Toutes les plateformes',
    groups: [
      { key: 'all-around', label: 'Polyvalent' },
      { key: 'race', label: 'Course' },
      { key: 'surf', label: 'Surf' },
      { key: 'touring', label: 'Randonnée' },
      { key: 'yoga', label: 'Yoga' },
      { key: 'whitewater', label: 'Eaux vives' },
      { key: 'fishing', label: 'Pêche' },
      { key: 'kids', label: 'Enfants' },
      { key: 'multi', label: 'Multipersonnes' },
    ],
  },
  de: {
    all: 'Alle Plattformen',
    groups: [
      { key: 'all-around', label: 'Allround' },
      { key: 'race', label: 'Rennen' },
      { key: 'surf', label: 'Surf' },
      { key: 'touring', label: 'Touren' },
      { key: 'yoga', label: 'Yoga' },
      { key: 'whitewater', label: 'Wildwasser' },
      { key: 'fishing', label: 'Angeln' },
      { key: 'kids', label: 'Kinder' },
      { key: 'multi', label: 'Multipersonen' },
    ],
  },
  it: {
    all: 'Tutte le piattaforme',
    groups: [
      { key: 'all-around', label: 'All-round' },
      { key: 'race', label: 'Gara' },
      { key: 'surf', label: 'Surf' },
      { key: 'touring', label: 'Touring' },
      { key: 'yoga', label: 'Yoga' },
      { key: 'whitewater', label: 'Acque bianche' },
      { key: 'fishing', label: 'Pesca' },
      { key: 'kids', label: 'Bambini' },
      { key: 'multi', label: 'Multi persona' },
    ],
  },
  pt: {
    all: 'Todas as plataformas',
    groups: [
      { key: 'all-around', label: 'All-round' },
      { key: 'race', label: 'Corrida' },
      { key: 'surf', label: 'Surf' },
      { key: 'touring', label: 'Touring' },
      { key: 'yoga', label: 'Ioga' },
      { key: 'whitewater', label: 'Águas bravas' },
      { key: 'fishing', label: 'Pesca' },
      { key: 'kids', label: 'Crianças' },
      { key: 'multi', label: 'Multi pessoa' },
    ],
  },
  nl: {
    all: 'Alle platforms',
    groups: [
      { key: 'all-around', label: 'Allround' },
      { key: 'race', label: 'Races' },
      { key: 'surf', label: 'Surf' },
      { key: 'touring', label: 'Touring' },
      { key: 'yoga', label: 'Yoga' },
      { key: 'whitewater', label: 'Wildwater' },
      { key: 'fishing', label: 'Vissen' },
      { key: 'kids', label: 'Kinderen' },
      { key: 'multi', label: 'Meerdere personen' },
    ],
  },
  sv: {
    all: 'Alla plattformar',
    groups: [
      { key: 'all-around', label: 'Allround' },
      { key: 'race', label: 'Racing' },
      { key: 'surf', label: 'Surf' },
      { key: 'touring', label: 'Touring' },
      { key: 'yoga', label: 'Yoga' },
      { key: 'whitewater', label: 'Vitt vatten' },
      { key: 'fishing', label: 'Fiske' },
      { key: 'kids', label: 'Barn' },
      { key: 'multi', label: 'Flerpersoners' },
    ],
  },
  no: {
    all: 'Alle plattformer',
    groups: [
      { key: 'all-around', label: 'Allround' },
      { key: 'race', label: 'Racing' },
      { key: 'surf', label: 'Surf' },
      { key: 'touring', label: 'Touring' },
      { key: 'yoga', label: 'Yoga' },
      { key: 'whitewater', label: 'Hvitevann' },
      { key: 'fishing', label: 'Fiske' },
      { key: 'kids', label: 'Barn' },
      { key: 'multi', label: 'Flerpersoners' },
    ],
  },
  pl: {
    all: 'Wszystkie platformy',
    groups: [
      { key: 'all-around', label: 'Allround' },
      { key: 'race', label: 'Wyścig' },
      { key: 'surf', label: 'Surf' },
      { key: 'touring', label: 'Touring' },
      { key: 'yoga', label: 'Joga' },
      { key: 'whitewater', label: 'Spływ' },
      { key: 'fishing', label: 'Wędkarstwo' },
      { key: 'kids', label: 'Dzieci' },
      { key: 'multi', label: 'Wieloosobowe' },
    ],
  },
}

export const products: Localized<ProductsContent> = {
  en: {
    kicker: 'Product Platforms',
    title: 'SUP Platforms Available For Customization',
    sub: 'Each series is a manufacturing platform — choose a starting point and we adapt the shape, graphics and specs to your product.',
    items: [
      {
        slug: 'sup-explorer-11',
        series: 'all-around',
        sku: 'SUP-EX11',
        name: "SUP Explorer 11'",
        tagline: 'The all-around classic',
        desc: 'Our most popular all-around board — wide-body stability for beginners, agility for intermediates, and portability for any adventure. The default starting point for most new brands.',
        uses: ['Beginner', 'All-Around', 'Family'],
        for: ['Startups', 'Rental fleets'],
        specs: "11'0\" × 32\" × 6\" · drop-stitch PVC · 15 PSI · 19 lbs (8.6 kg)",
        artwork: 'Military-grade drop-stitch core · reinforced rails · 2+1 fins · complete package',
        image: 'https://assets.isupfactory.com/site/products/2026/all-around/all-around-03.avif',
        hue: 195,
      },
      {
        slug: 'sup-ocean-pulse',
        series: 'whitewater',
        sku: 'SUP-OP11',
        name: 'Ocean Pulse Series',
        tagline: 'Topographic wave designer edition',
        desc: 'Ocean waves transformed into Tiffany Blue topographic contours with high-precision mechanical embossing and a unified color-matched accessory kit.',
        uses: ['Lifestyle', 'Flatwater', 'Designer'],
        for: ['Lifestyle brands', 'Boutique travel'],
        specs: "11'0\" × 32\" × 6\" · drop-stitch PVC · 15 PSI · 20 lbs (9.1 kg)",
        artwork: 'UV digital printing + mechanical heat-embossing · coordinated accessories',
        image: 'https://assets.isupfactory.com/site/products/2026/whitewater/whitewater-01.avif',
        hue: 210,
      },
      {
        slug: 'sup-cheetah-surge',
        series: 'surf',
        sku: 'SUP-CS11',
        name: 'Cheetah Surge Edition',
        tagline: 'Wild-inspired premium edition',
        desc: 'Raw wild power meets artistic elegance — a cheetah motif in pastel pink, teal and coral, built with zero-fade multi-color EVA block piecing.',
        uses: ['Lifestyle', 'Flatwater', 'Designer'],
        for: ['Lifestyle brands', 'Social-first brands'],
        specs: "11'0\" × 32\" × 6\" · drop-stitch PVC · 15 PSI · 20 lbs (9.1 kg)",
        artwork: 'Multi-color EVA block piecing + UV printing · anti-delamination build',
        image: 'https://assets.isupfactory.com/site/products/2026/surf/surf-01.avif',
        hue: 28,
      },
      {
        slug: 'sup-medusa-glow',
        series: 'yoga',
        sku: 'SUP-MG11',
        name: 'Medusa Glow Series',
        tagline: 'The jellyfish edition',
        desc: 'An underwater dreamscape — vibrant jellyfish, sea stars and coral reefs in refreshing mint green, with zero-fade EVA artwork and exceptional lateral stability for yoga.',
        uses: ['Yoga', 'Tropical', 'Lifestyle'],
        for: ['Yoga studios', 'Tropical brands'],
        specs: "11'0\" × 32\" × 6\" · drop-stitch PVC · 15 PSI · 20 lbs (9.1 kg)",
        artwork: 'Multi-color EVA block piecing + UV printing · handle anchored to PVC hull',
        image: 'https://assets.isupfactory.com/site/products/2026/kids-teens/kids-teens-05.avif',
        hue: 260,
      },
      {
        slug: 'sup-dolphin-wave',
        series: 'touring',
        sku: 'SUP-DW11',
        name: 'Dolphin Wave Series',
        tagline: 'Marine 360° edition',
        desc: 'Leaping dolphins and layered medieval blue waves with CNC puzzle-cut EVA splicing and screen-printed continuous rail art that wraps the deck 360°.',
        uses: ['Marine', 'Flatwater', 'Designer'],
        for: ['Marine brands', 'Resorts'],
        specs: "11'0\" × 32\" × 6\" · drop-stitch PVC · 15 PSI · 20 lbs (9.1 kg)",
        artwork: 'CNC-cut EVA color-block splicing + screen-printed rails · PANTONE TPG color matching',
        image: 'https://assets.isupfactory.com/site/products/2026/touring/touring-02.avif',
        hue: 210,
      },
      {
        slug: 'sup-flowing-lotus',
        series: 'yoga',
        sku: 'SUP-FL11',
        name: 'Flowing Lotus Series',
        tagline: 'Eastern art wellness edition',
        desc: 'Traditional Eastern brushwork with lotus, koi and dragonfly motifs — laser-engraved into the traction pad so it never wears out or fades. Built for tranquil paddling and yoga.',
        uses: ['Yoga', 'Meditation', 'Flatwater'],
        for: ['Yoga studios', 'Wellness brands'],
        specs: "11'0\" × 32\" × 6\" · drop-stitch PVC · 15 PSI · 20 lbs (9.1 kg)",
        artwork: 'Dual-layer laser-engraved EVA + gradient UV printing · dynamic color-blocked fins',
        image: 'https://assets.isupfactory.com/site/products/2026/yoga/yoga-01.avif',
        hue: 150,
      },
      {
        slug: 'sup-jungle-mandala',
        series: 'all-around',
        sku: 'SUP-JM11',
        name: 'Jungle Mandala Series',
        tagline: 'Tropical sacred geometry',
        desc: 'Tropical vitality meets sacred geometry — hibiscus, hummingbirds and mandala totems in Tiffany Blue and Coral Orange, engineered to stay perfectly symmetrical at full pressure.',
        uses: ['Tropical', 'Coastal', 'Designer'],
        for: ['Tropical brands', 'Travel'],
        specs: "11'0\" × 32\" × 6\" · drop-stitch PVC · 15 PSI · 20 lbs (9.1 kg)",
        artwork: 'Dual-layer laser-engraved EVA + UV printing + screen-printed rails · anti-distortion geometry',
        image: 'https://assets.isupfactory.com/site/products/2026/all-around/all-around-10.avif',
        hue: 28,
      },
      {
        slug: 'sup-leviathan-wake',
        series: 'race',
        sku: 'SUP-LW11',
        name: 'Leviathan Wake Series',
        tagline: 'The whale edition',
        desc: 'A majestic blue whale totem with geometric tribal patterns and minimalist black-white swell lines — for paddlers who connect with the ocean.',
        uses: ['Ocean', 'All-Around', 'Designer'],
        for: ['Ocean brands', 'Outdoor brands'],
        specs: "11'0\" × 32\" × 6\" · drop-stitch PVC · 15 PSI · 20 lbs (9.1 kg)",
        artwork: 'UV digital printing + mechanical embossing · stretchable PVC inks on bottom logo',
        image: 'https://assets.isupfactory.com/site/products/2026/race/race-01.avif',
        hue: 195,
      },
      {
        slug: 'sup-ocean-voyager',
        series: 'all-around',
        sku: 'SUP-OV11',
        name: 'Ocean Voyager Series',
        tagline: 'The sea turtle edition',
        desc: 'A tribute to the ocean’s ultimate wanderer — geometric sea turtle artwork in deep teal, turquoise and coral orange, with an end-to-end coordinated accessory kit.',
        uses: ['Touring', 'Ocean', 'All-Around'],
        for: ['Touring brands', 'Outdoor brands'],
        specs: "11'0\" × 32\" × 6\" · drop-stitch PVC · 15 PSI · 20 lbs (9.1 kg)",
        artwork: 'Multi-color EVA block piecing + UV printing · color-matched backpack, pump & leash',
        image: 'https://assets.isupfactory.com/site/products/2026/all-around/all-around-12.avif',
        hue: 170,
      },
      {
        slug: 'sup-tropical-breeze',
        series: 'all-around',
        sku: 'SUP-TB11',
        name: 'Tropical Breeze Series',
        tagline: 'Island escape edition',
        desc: 'A complete island vacation canvas — sunshine, coconut groves and beach scenes flowing from a micro-illustrated nose into abstract EVA color-blocking toward the tail.',
        uses: ['Vacation', 'Lifestyle', 'Coastal'],
        for: ['Travel brands', 'Resorts'],
        specs: "11'0\" × 32\" × 6\" · drop-stitch PVC · 15 PSI · 20 lbs (9.1 kg)",
        artwork: 'UV digital printing + die-cut EVA patchwork · illustrated nose landscape',
        image: 'https://assets.isupfactory.com/site/products/2026/all-around/all-around-17.avif',
        hue: 330,
      },
      {
        slug: 'sup-rheo-race',
        series: 'race',
        sku: 'SUP-RHEO01',
        name: 'RHEO Race Series',
        tagline: 'Carbon hybrid race edition',
        desc: 'Elite-tier inflatable race board with carbon hybrid construction and an aggressive glide rocker — built for competitive racing, sprint training and technical courses where rigidity and speed decide the result.',
        uses: ['Racing', 'Speed', 'Training'],
        for: ['Race teams', 'Coaching'],
        specs: 'Carbon hybrid matrix · glide rocker · streamlined high-speed profile',
        artwork: 'Carbon hybrid inflatable construction · performance glide rocker',
        image: 'https://assets.isupfactory.com/site/products/2026/race/race-11.avif',
        hue: 195,
      },
      {
        slug: 'sup-fishing',
        series: 'fishing',
        sku: 'SUP-FSH01',
        name: 'Inflatable Fishing SUP',
        tagline: 'Catamaran-stability fishing edition',
        desc: 'Fishing-dedicated inflatable SUP with a double-sided air chamber (catamaran style) for exceptional secondary stability, rod holder mounts, an on-deck fish ruler and a reinforced utility hull.',
        uses: ['Fishing', 'Stability', 'Utility'],
        for: ['Fishing brands', 'Guides'],
        specs: 'Double-sided air chamber · 10–80 cm fish ruler · rod holder mounts',
        artwork: 'Reinforced utility hull · multi-point metal D-rings',
        image: 'https://assets.isupfactory.com/site/products/2026/fishing/fishing-01.avif',
        hue: 210,
      },
      {
        slug: 'sup-mini',
        series: 'kids',
        sku: 'SUP-MINI01',
        name: 'Mini SUP Series',
        tagline: '3-in-1 kids / surf / bodyboard',
        desc: 'Ultra-portable hybrid board that switches between a kids SUP, an inflatable surfboard and a bodyboard — with a short, wide, highly stable profile and a puncture-resistant deck.',
        uses: ['Kids', 'Surf', 'Travel'],
        for: ['Kids brands', 'Resorts'],
        specs: 'Hybrid SUP / surf / bodyboard geometry · short wide hull · puncture-resistant deck',
        artwork: 'Multi-purpose hybrid geometry · heavy-duty deck material',
        image: 'https://assets.isupfactory.com/site/products/2026/mini/mini-01.avif',
        hue: 28,
      },
      {
        slug: 'sup-giant',
        series: 'multi',
        sku: 'SUP-GNT01',
        name: 'Giant SUP — Multi-Person Team Board',
        tagline: '6–8 rider team platform',
        desc: 'Large-format multi-person SUP for 6–8 riders: 16.4–17 ft hull, 59–60 inch width, 8-inch thickness and dual-valve inflation, with 8–12 grab handles and a 4+1 fin system.',
        uses: ['Group', 'Team', 'Leisure'],
        for: ['Resorts', 'Rental fleets'],
        specs: "16'4\"–17'0\" × 59\"–60\" × 8\" · 1200–1400 L · 11–15 PSI · 4+1 fins",
        artwork: 'Dual-valve inflation · 8–12 neoprene grab handles · 4+1 fin system',
        image: 'https://assets.isupfactory.com/site/products/2026/giant/giant-03.avif',
        hue: 195,
      },
      {
        slug: 'sup-lure-skiff',
        series: 'fishing',
        sku: 'SUP-LSK01',
        name: 'Utility SUP — Lure Skiff',
        tagline: 'Ultra-wide 120 cm lure fishing',
        desc: 'Ultra-wide 120 cm lure-fishing board with a central cutout compartment and underwater viewing window, 400 kg payload and a pontoon-like hull for rock-solid casting and seated angling.',
        uses: ['Fishing', 'Utility', 'Stability'],
        for: ['Fishing brands', 'Anglers'],
        specs: '350 × 120 × 15 cm · 400 kg load · tri-fin · viewing window',
        artwork: 'Central cutout compartment · transparent underwater viewing window · pontoon hull',
        image: 'https://assets.isupfactory.com/site/products/2026/utility-lure/utility-lure-01.avif',
        hue: 170,
      },
    ],
  },
  es: {
    kicker: 'Plataformas de producto',
    title: 'Plataformas SUP disponibles para personalización',
    sub: 'Cada serie es una plataforma de fabricación: elige un punto de partida y adaptamos la forma, los gráficos y las especificaciones a tu producto.',
    items: [
      {
        slug: 'sup-explorer-11',
        series: 'all-around',
        sku: 'SUP-EX11',
        name: 'SUP Explorer 11\'',
        tagline: 'El clásico polivalente',
        desc: 'Nuestra tabla polivalente más popular: estabilidad de cuerpo ancho para principiantes, agilidad para intermedios y portabilidad para cualquier aventura. El punto de partida por defecto para la mayoría de las marcas nuevas.',
        uses: ['Principiante', 'Polivalente', 'Familia'],
        for: ['Marcas emergentes', 'Flotas de alquiler'],
        specs: "11'0\" × 32\" × 6\" · PVC drop-stitch · 15 PSI · 19 lb (8.6 kg)",
        artwork: 'Núcleo drop-stitch de grado militar · rails reforzados · quillas 2+1 · paquete completo',
        image: 'https://assets.isupfactory.com/site/products/2026/all-around/all-around-03.avif',
        hue: 195,
      },
      {
        slug: 'sup-ocean-pulse',
        series: 'whitewater',
        sku: 'SUP-OP11',
        name: 'Serie Ocean Pulse',
        tagline: 'Edición de diseñador de olas topográficas',
        desc: 'Olas del océano transformadas en contornos topográficos azul Tiffany con gofrado mecánico de alta precisión y un kit de accesorios a juego.',
        uses: ['Estilo de vida', 'Aguas tranquilas', 'Diseñador'],
        for: ['Marcas lifestyle', 'Turismo boutique'],
        specs: "11'0\" × 32\" × 6\" · PVC drop-stitch · 15 PSI · 20 lb (9.1 kg)",
        artwork: 'Impresión UV digital + gofrado térmico mecánico · accesorios coordinados',
        image: 'https://assets.isupfactory.com/site/products/2026/whitewater/whitewater-01.avif',
        hue: 210,
      },
      {
        slug: 'sup-cheetah-surge',
        series: 'surf',
        sku: 'SUP-CS11',
        name: 'Edición Cheetah Surge',
        tagline: 'Edición premium de inspiración salvaje',
        desc: 'Poder salvaje bruto con elegancia artística: un motivo de guepardo en rosa pastel, azul verdoso y coral, construido con mosaicos EVA multicolor que no destiñen.',
        uses: ['Estilo de vida', 'Aguas tranquilas', 'Diseñador'],
        for: ['Marcas lifestyle', 'Marcas social-first'],
        specs: "11'0\" × 32\" × 6\" · PVC drop-stitch · 15 PSI · 20 lb (9.1 kg)",
        artwork: 'Mosaicos EVA multicolor + impresión UV · construcción antidelaminación',
        image: 'https://assets.isupfactory.com/site/products/2026/surf/surf-01.avif',
        hue: 28,
      },
      {
        slug: 'sup-medusa-glow',
        series: 'yoga',
        sku: 'SUP-MG11',
        name: 'Serie Medusa Glow',
        tagline: 'La edición medusa',
        desc: 'Un paisaje submarino de ensueño: medusas vibrantes, estrellas de mar y arrecifes de coral en refrescante verde menta, con arte EVA sin decoloración y excepcional estabilidad lateral para yoga.',
        uses: ['Yoga', 'Tropical', 'Estilo de vida'],
        for: ['Estudios de yoga', 'Marcas tropicales'],
        specs: "11'0\" × 32\" × 6\" · PVC drop-stitch · 15 PSI · 20 lb (9.1 kg)",
        artwork: 'Mosaicos EVA multicolor + impresión UV · asa anclada al casco de PVC',
        image: 'https://assets.isupfactory.com/site/products/2026/kids-teens/kids-teens-05.avif',
        hue: 260,
      },
      {
        slug: 'sup-dolphin-wave',
        series: 'touring',
        sku: 'SUP-DW11',
        name: 'Serie Dolphin Wave',
        tagline: 'Edición marina 360°',
        desc: 'Delfines saltando y capas de olas azul medieval con splicado EVA cortado por CNC e impresión serigráfica de arte continuo en los rails que envuelve la tabla 360°.',
        uses: ['Marino', 'Aguas tranquilas', 'Diseñador'],
        for: ['Marcas marinas', 'Resorts'],
        specs: "11'0\" × 32\" × 6\" · PVC drop-stitch · 15 PSI · 20 lb (9.1 kg)",
        artwork: 'Splicado de bloques de color EVA por CNC + rails serigrafiados · ajuste de color PANTONE TPG',
        image: 'https://assets.isupfactory.com/site/products/2026/touring/touring-02.avif',
        hue: 210,
      },
      {
        slug: 'sup-flowing-lotus',
        series: 'yoga',
        sku: 'SUP-FL11',
        name: 'Serie Flowing Lotus',
        tagline: 'Edición de bienestar artístico oriental',
        desc: 'Pinceladas orientales tradicionales con motivos de loto, carpas y libélulas, grabadas con láser en el piso antideslizante para que nunca se desgasten ni destiñan. Diseñada para remar con calma y practicar yoga.',
        uses: ['Yoga', 'Meditación', 'Aguas tranquilas'],
        for: ['Estudios de yoga', 'Marcas de bienestar'],
        specs: "11'0\" × 32\" × 6\" · PVC drop-stitch · 15 PSI · 20 lb (9.1 kg)",
        artwork: 'EVA grabada con láser de doble capa + impresión UV degradada · quillas dinámicas en bloques de color',
        image: 'https://assets.isupfactory.com/site/products/2026/yoga/yoga-01.avif',
        hue: 150,
      },
      {
        slug: 'sup-jungle-mandala',
        series: 'all-around',
        sku: 'SUP-JM11',
        name: 'Serie Jungle Mandala',
        tagline: 'Geometría sagrada tropical',
        desc: 'Vitalidad tropical con geometría sagrada: hibiscos, colibríes y tótems mandala en azul Tiffany y naranja coral, diseñados para mantenerse perfectamente simétricos a máxima presión.',
        uses: ['Tropical', 'Costero', 'Diseñador'],
        for: ['Marcas tropicales', 'Viajes'],
        specs: "11'0\" × 32\" × 6\" · PVC drop-stitch · 15 PSI · 20 lb (9.1 kg)",
        artwork: 'EVA grabada con láser de doble capa + impresión UV + rails serigrafiados · geometría antideformación',
        image: 'https://assets.isupfactory.com/site/products/2026/all-around/all-around-10.avif',
        hue: 28,
      },
      {
        slug: 'sup-leviathan-wake',
        series: 'race',
        sku: 'SUP-LW11',
        name: 'Serie Leviathan Wake',
        tagline: 'La edición ballena',
        desc: 'Un majestuoso tótem de ballena azul con patrones tribales geométricos y líneas de oleaje minimalistas en blanco y negro, para remeros que conectan con el océano.',
        uses: ['Océano', 'Polivalente', 'Diseñador'],
        for: ['Marcas oceánicas', 'Marcas outdoor'],
        specs: "11'0\" × 32\" × 6\" · PVC drop-stitch · 15 PSI · 20 lb (9.1 kg)",
        artwork: 'Impresión UV digital + gofrado mecánico · tintas PVC estirables en el logo inferior',
        image: 'https://assets.isupfactory.com/site/products/2026/race/race-01.avif',
        hue: 195,
      },
      {
        slug: 'sup-ocean-voyager',
        series: 'all-around',
        sku: 'SUP-OV11',
        name: 'Serie Ocean Voyager',
        tagline: 'La edición tortuga marina',
        desc: 'Un homenaje al vagabundo supremo del océano: arte geométrico de tortuga marina en azul profundo, turquesa y naranja coral, con un kit de accesorios coordinados de principio a fin.',
        uses: ['Travesía', 'Océano', 'Polivalente'],
        for: ['Marcas de travesía', 'Marcas outdoor'],
        specs: "11'0\" × 32\" × 6\" · PVC drop-stitch · 15 PSI · 20 lb (9.1 kg)",
        artwork: 'Mosaicos EVA multicolor + impresión UV · mochila, bomba y leash a juego',
        image: 'https://assets.isupfactory.com/site/products/2026/all-around/all-around-12.avif',
        hue: 170,
      },
      {
        slug: 'sup-tropical-breeze',
        series: 'all-around',
        sku: 'SUP-TB11',
        name: 'Serie Tropical Breeze',
        tagline: 'Edición escapada isleña',
        desc: 'Un lienzo completo de vacaciones en la isla: sol, cocoteros y escenas de playa que fluyen desde una proa con micro ilustraciones hacia bloques de color EVA abstractos en la cola.',
        uses: ['Vacaciones', 'Estilo de vida', 'Costero'],
        for: ['Marcas de viajes', 'Resorts'],
        specs: "11'0\" × 32\" × 6\" · PVC drop-stitch · 15 PSI · 20 lb (9.1 kg)",
        artwork: 'Impresión UV digital + patchwork EVA troquelado · paisaje ilustrado en la proa',
        image: 'https://assets.isupfactory.com/site/products/2026/all-around/all-around-17.avif',
        hue: 330,
      },
      {
        slug: 'sup-rheo-race',
        series: 'race',
        sku: 'SUP-RHEO01',
        name: 'Serie RHEO Race',
        tagline: 'Edición de competición híbrida de carbono',
        desc: 'Tabla de SUP hinchable de élite para competición, con construcción híbrida de carbono y rocker de deslizamiento agresivo — diseñada para carreras, entrenamientos de velocidad y cursos técnicos donde la rigidez decide el resultado.',
        uses: ['Competición', 'Velocidad', 'Entrenamiento'],
        for: ['Equipos de competición', 'Coaching'],
        specs: 'Matriz híbrida de carbono · rocker de deslizamiento · perfil aerodinámico de alta velocidad',
        artwork: 'Construcción hinchable híbrida de carbono · rocker de deslizamiento de alto rendimiento',
        image: 'https://assets.isupfactory.com/site/products/2026/race/race-11.avif',
        hue: 195,
      },
      {
        slug: 'sup-fishing',
        series: 'fishing',
        sku: 'SUP-FSH01',
        name: 'SUP de Pesca Hinchable',
        tagline: 'Edición de pesca con estabilidad de catamarán',
        desc: 'SUP hinchable dedicado a la pesca con cámara de aire doble (estilo catamarán) para una estabilidad secundaria excepcional, soportes para cañeros, regla de peces sobre la cubierta y casco utilitario reforzado.',
        uses: ['Pesca', 'Estabilidad', 'Utilidad'],
        for: ['Marcas de pesca', 'Guías'],
        specs: 'Cámara de aire doble · regla de peces de 10–80 cm · soportes para cañeros',
        artwork: 'Casco utilitario reforzado · anillos en D metálicos multipunto',
        image: 'https://assets.isupfactory.com/site/products/2026/fishing/fishing-01.avif',
        hue: 210,
      },
      {
        slug: 'sup-mini',
        series: 'kids',
        sku: 'SUP-MINI01',
        name: 'Serie Mini SUP',
        tagline: '3 en 1: infantil / surf / bodyboard',
        desc: 'Tabla híbrida ultratransportable que se convierte en SUP infantil, tabla de surf hinchable y bodyboard — con perfil corto, ancho y muy estable, y cubierta resistente a la perforación.',
        uses: ['Infantil', 'Surf', 'Viajes'],
        for: ['Marcas infantiles', 'Resorts'],
        specs: 'Geometría híbrida SUP / surf / bodyboard · casco corto y ancho · cubierta resistente a la perforación',
        artwork: 'Geometría híbrida multipropósito · material de cubierta de alta resistencia',
        image: 'https://assets.isupfactory.com/site/products/2026/mini/mini-01.avif',
        hue: 28,
      },
      {
        slug: 'sup-giant',
        series: 'multi',
        sku: 'SUP-GNT01',
        name: 'Giant SUP — Tabla de equipo multipersona',
        tagline: 'Plataforma de equipo para 6–8 remeros',
        desc: 'Tabla multipersona de gran formato para 6–8 remeros: casco de 16,4–17 pies, 59–60 pulgadas de ancho, 8 pulgadas de espesor e inflado de doble válvula, con 8–12 asas y sistema de quillas 4+1.',
        uses: ['Grupo', 'Equipo', 'Ocio'],
        for: ['Resorts', 'Flotas de alquiler'],
        specs: "16'4\"–17'0\" × 59\"–60\" × 8\" · 1200–1400 L · 11–15 PSI · quillas 4+1",
        artwork: 'Inflado de doble válvula · 8–12 asas de neopreno · sistema de quillas 4+1',
        image: 'https://assets.isupfactory.com/site/products/2026/giant/giant-03.avif',
        hue: 195,
      },
      {
        slug: 'sup-lure-skiff',
        series: 'fishing',
        sku: 'SUP-LSK01',
        name: 'Utility SUP — Lure Skiff',
        tagline: 'Pesca a señuelo ultrancha de 120 cm',
        desc: 'Tabla de pesca a señuelo ultrancha de 120 cm con compartimento central recortado y ventana de observación subacuática, carga útil de 400 kg y casco tipo pontón para lanzar y pescar sentado con total firmeza.',
        uses: ['Pesca', 'Utilidad', 'Estabilidad'],
        for: ['Marcas de pesca', 'Pescadores'],
        specs: '350 × 120 × 15 cm · carga de 400 kg · tri-quilla · ventana de observación',
        artwork: 'Compartimento central recortado · ventana transparente de observación subacuática · casco tipo pontón',
        image: 'https://assets.isupfactory.com/site/products/2026/utility-lure/utility-lure-01.avif',
        hue: 170,
      },
    ],
  },
  fr: {
    kicker: 'Plateformes de produit',
    title: 'Plateformes SUP disponibles pour la personnalisation',
    sub: 'Chaque série est une plateforme de fabrication — choisissez un point de départ et nous adaptons la forme, les graphismes et les spécifications à votre produit.',
    items: [
      {
        slug: 'sup-explorer-11',
        series: 'all-around',
        sku: 'SUP-EX11',
        name: 'SUP Explorer 11\'',
        tagline: 'Le classique polyvalent',
        desc: 'Notre planche polyvalente la plus populaire — stabilité de corps large pour les débutants, agilité pour les intermédiaires et portabilité pour toutes les aventures. Le point de départ par défaut de la plupart des nouvelles marques.',
        uses: ['Débutant', 'Polyvalent', 'Famille'],
        for: ['Startups', 'Flottes de location'],
        specs: "11'0\" × 32\" × 6\" · PVC drop-stitch · 15 PSI · 19 lb (8.6 kg)",
        artwork: 'Núcleo drop-stitch de grado militar · rails reforzados · quillas 2+1 · paquete completo',
        image: 'https://assets.isupfactory.com/site/products/2026/all-around/all-around-03.avif',
        hue: 195,
      },
      {
        slug: 'sup-ocean-pulse',
        series: 'whitewater',
        sku: 'SUP-OP11',
        name: 'Serie Ocean Pulse',
        tagline: 'Édition designer de vagues topographiques',
        desc: 'Des vagues océaniques transformées en contours topographiques bleu Tiffany grâce à un gaufrage mécanique de haute précision et à un kit d’accessoires coordonnés.',
        uses: ['Style de vie', 'Eaux calmes', 'Designer'],
        for: ['Marques lifestyle', 'Tourisme haut de gamme'],
        specs: "11'0\" × 32\" × 6\" · PVC drop-stitch · 15 PSI · 20 lb (9.1 kg)",
        artwork: 'Impresión UV digital + gofrado térmico mecánico · accesorios coordinados',
        image: 'https://assets.isupfactory.com/site/products/2026/whitewater/whitewater-01.avif',
        hue: 210,
      },
      {
        slug: 'sup-cheetah-surge',
        series: 'surf',
        sku: 'SUP-CS11',
        name: 'Edición Cheetah Surge',
        tagline: 'Édition premium inspirée de la faune sauvage',
        desc: 'La puissance brute de la faune sauvage rencontre l’élégance artistique — un motif de guépard en rose pastel, bleu sarcelle et corail, réalisé avec un assemblage de blocs EVA multicolores sans décoloration.',
        uses: ['Style de vie', 'Eaux calmes', 'Designer'],
        for: ['Marques lifestyle', 'Marques orientées réseaux sociaux'],
        specs: "11'0\" × 32\" × 6\" · PVC drop-stitch · 15 PSI · 20 lb (9.1 kg)",
        artwork: 'Mosaicos EVA multicolor + impresión UV · construcción antidelaminación',
        image: 'https://assets.isupfactory.com/site/products/2026/surf/surf-01.avif',
        hue: 28,
      },
      {
        slug: 'sup-medusa-glow',
        series: 'yoga',
        sku: 'SUP-MG11',
        name: 'Serie Medusa Glow',
        tagline: 'L’édition méduse',
        desc: 'Un paysage marin de rêve — méduses éclatantes, étoiles de mer et récifs coralliens dans un vert menthe rafraîchissant, avec un décor EVA sans décoloration et une stabilité latérale exceptionnelle pour le yoga.',
        uses: ['Yoga', 'Tropical', 'Style de vie'],
        for: ['Studios de yoga', 'Marques tropicales'],
        specs: "11'0\" × 32\" × 6\" · PVC drop-stitch · 15 PSI · 20 lb (9.1 kg)",
        artwork: 'Mosaicos EVA multicolor + impresión UV · asa anclada al casco de PVC',
        image: 'https://assets.isupfactory.com/site/products/2026/kids-teens/kids-teens-05.avif',
        hue: 260,
      },
      {
        slug: 'sup-dolphin-wave',
        series: 'touring',
        sku: 'SUP-DW11',
        name: 'Serie Dolphin Wave',
        tagline: 'Édition marine 360°',
        desc: 'Dauphins bondissants et vagues bleu médiéval en couches, avec assemblage EVA découpé au CNC façon puzzle et un décor continu sérigraphié sur les rails qui enveloppe le pont à 360°.',
        uses: ['Marine', 'Eaux calmes', 'Designer'],
        for: ['Marques marines', 'Resorts'],
        specs: "11'0\" × 32\" × 6\" · PVC drop-stitch · 15 PSI · 20 lb (9.1 kg)",
        artwork: 'Splicado de bloques de color EVA por CNC + rails serigrafiados · ajuste de color PANTONE TPG',
        image: 'https://assets.isupfactory.com/site/products/2026/touring/touring-02.avif',
        hue: 210,
      },
      {
        slug: 'sup-flowing-lotus',
        series: 'yoga',
        sku: 'SUP-FL11',
        name: 'Serie Flowing Lotus',
        tagline: 'Édition bien-être d’art oriental',
        desc: 'Peinture orientale traditionnelle avec motifs de lotus, de carpes koï et de libellules — gravée au laser dans le pad de traction pour ne jamais s’user ni se décolorer. Conçue pour une navigation sereine et le yoga.',
        uses: ['Yoga', 'Méditation', 'Eaux calmes'],
        for: ['Studios de yoga', 'Marques de bien-être'],
        specs: "11'0\" × 32\" × 6\" · PVC drop-stitch · 15 PSI · 20 lb (9.1 kg)",
        artwork: 'EVA grabada con láser de doble capa + impresión UV degradada · quillas dinámicas en bloques de color',
        image: 'https://assets.isupfactory.com/site/products/2026/yoga/yoga-01.avif',
        hue: 150,
      },
      {
        slug: 'sup-jungle-mandala',
        series: 'all-around',
        sku: 'SUP-JM11',
        name: 'Serie Jungle Mandala',
        tagline: 'Géométrie sacrée tropicale',
        desc: 'La vitalité tropicale rencontre la géométrie sacrée — hibiscus, colibris et totems mandala en bleu Tiffany et orange corail, conçus pour rester parfaitement symétriques à pleine pression.',
        uses: ['Tropical', 'Côtier', 'Designer'],
        for: ['Marques tropicales', 'Voyages'],
        specs: "11'0\" × 32\" × 6\" · PVC drop-stitch · 15 PSI · 20 lb (9.1 kg)",
        artwork: 'EVA grabada con láser de doble capa + impresión UV + rails serigrafiados · geometría antideformación',
        image: 'https://assets.isupfactory.com/site/products/2026/all-around/all-around-10.avif',
        hue: 28,
      },
      {
        slug: 'sup-leviathan-wake',
        series: 'race',
        sku: 'SUP-LW11',
        name: 'Serie Leviathan Wake',
        tagline: 'L’édition baleine',
        desc: 'Un majestueux totem de baleine bleue aux motifs tribaux géométriques et aux lignes de houle minimalistes en noir et blanc — pour les pagayeurs qui se connectent à l’océan.',
        uses: ['Océan', 'Polyvalent', 'Designer'],
        for: ['Marques océaniques', 'Marques outdoor'],
        specs: "11'0\" × 32\" × 6\" · PVC drop-stitch · 15 PSI · 20 lb (9.1 kg)",
        artwork: 'Impresión UV digital + gofrado mecánico · tintas PVC estirables en el logo inferior',
        image: 'https://assets.isupfactory.com/site/products/2026/race/race-01.avif',
        hue: 195,
      },
      {
        slug: 'sup-ocean-voyager',
        series: 'all-around',
        sku: 'SUP-OV11',
        name: 'Serie Ocean Voyager',
        tagline: 'L’édition tortue de mer',
        desc: 'Un hommage au plus grand vagabond de l’océan — un décor géométrique de tortue marine en bleu sarcelle profond, turquoise et orange corail, avec un kit d’accessoires coordonné de bout en bout.',
        uses: ['Randonnée', 'Océan', 'Polyvalent'],
        for: ['Marques de randonnée', 'Marques outdoor'],
        specs: "11'0\" × 32\" × 6\" · PVC drop-stitch · 15 PSI · 20 lb (9.1 kg)",
        artwork: 'Mosaicos EVA multicolor + impresión UV · mochila, bomba y leash a juego',
        image: 'https://assets.isupfactory.com/site/products/2026/all-around/all-around-12.avif',
        hue: 170,
      },
      {
        slug: 'sup-tropical-breeze',
        series: 'all-around',
        sku: 'SUP-TB11',
        name: 'Serie Tropical Breeze',
        tagline: 'Édition évasion insulaire',
        desc: 'Une toile de vacances insulaire complète — soleil, cocoteraies et scènes de plage qui s’écoulent d’une proue micro-illustrée vers des blocs de couleur EVA abstraits à la poupe.',
        uses: ['Vacances', 'Style de vie', 'Côtier'],
        for: ['Marques de voyage', 'Resorts'],
        specs: "11'0\" × 32\" × 6\" · PVC drop-stitch · 15 PSI · 20 lb (9.1 kg)",
        artwork: 'Impresión UV digital + patchwork EVA troquelado · paisaje ilustrado en la proa',
        image: 'https://assets.isupfactory.com/site/products/2026/all-around/all-around-17.avif',
        hue: 330,
      },
      {
        slug: 'sup-rheo-race',
        series: 'race',
        sku: 'SUP-RHEO01',
        name: 'Serie RHEO Race',
        tagline: 'Édition course hybride carbone',
        desc: 'Planche de course gonflable de niveau élite avec construction hybride en carbone et un rocker de glisse agressif — conçue pour la course, l’entraînement au sprint et les parcours techniques où la rigidité et la vitesse font la différence.',
        uses: ['Course', 'Vitesse', 'Entraînement'],
        for: ['Équipes de course', 'Coaching'],
        specs: 'Matriz híbrida de carbono · rocker de deslizamiento · perfil aerodinámico de alta velocidad',
        artwork: 'Construcción hinchable híbrida de carbono · rocker de deslizamiento de alto rendimiento',
        image: 'https://assets.isupfactory.com/site/products/2026/race/race-11.avif',
        hue: 195,
      },
      {
        slug: 'sup-fishing',
        series: 'fishing',
        sku: 'SUP-FSH01',
        name: 'SUP de Pesca Hinchable',
        tagline: 'Édition pêche à stabilité de catamaran',
        desc: 'SUP gonflable dédié à la pêche avec double chambre à air (style catamaran) pour une stabilité secondaire exceptionnelle, supports de canne, règle de mensuration à bord et coque utilitaire renforcée.',
        uses: ['Pêche', 'Stabilité', 'Utilitaire'],
        for: ['Marques de pêche', 'Guides'],
        specs: 'Cámara de aire doble · regla de peces de 10–80 cm · soportes para cañeros',
        artwork: 'Casco utilitario reforzado · anillos en D metálicos multipunto',
        image: 'https://assets.isupfactory.com/site/products/2026/fishing/fishing-01.avif',
        hue: 210,
      },
      {
        slug: 'sup-mini',
        series: 'kids',
        sku: 'SUP-MINI01',
        name: 'Serie Mini SUP',
        tagline: '3-en-1 enfant / surf / bodyboard',
        desc: 'Planche hybride ultratransportable qui se transforme en SUP enfant, en planche de surf gonflable et en bodyboard — avec un profil court, large et très stable, et un pont résistant aux perforations.',
        uses: ['Enfants', 'Surf', 'Voyages'],
        for: ['Marques pour enfants', 'Resorts'],
        specs: 'Geometría híbrida SUP / surf / bodyboard · casco corto y ancho · cubierta resistente a la perforación',
        artwork: 'Geometría híbrida multipropósito · material de cubierta de alta resistencia',
        image: 'https://assets.isupfactory.com/site/products/2026/mini/mini-01.avif',
        hue: 28,
      },
      {
        slug: 'sup-giant',
        series: 'multi',
        sku: 'SUP-GNT01',
        name: 'Giant SUP — Tabla de equipo multipersona',
        tagline: 'Plateforme d’équipe pour 6–8 pagayeurs',
        desc: 'SUP multipersonnes grand format pour 6–8 pagayeurs : coque de 16,4–17 pieds, largeur de 59–60 pouces, épaisseur de 8 pouces et gonflage à double valve, avec 8–12 poignées et un système de dérives 4+1.',
        uses: ['Groupe', 'Équipe', 'Loisirs'],
        for: ['Resorts', 'Flottes de location'],
        specs: "16'4\"–17'0\" × 59\"–60\" × 8\" · 1200–1400 L · 11–15 PSI · quillas 4+1",
        artwork: 'Inflado de doble válvula · 8–12 asas de neopreno · sistema de quillas 4+1',
        image: 'https://assets.isupfactory.com/site/products/2026/giant/giant-03.avif',
        hue: 195,
      },
      {
        slug: 'sup-lure-skiff',
        series: 'fishing',
        sku: 'SUP-LSK01',
        name: 'Utility SUP — Lure Skiff',
        tagline: 'Pêche au leurre ultralarge de 120 cm',
        desc: 'Planche de pêche au leurre ultralarge de 120 cm avec compartiment central découpé et fenêtre d’observation sous-marine, charge utile de 400 kg et coque de type ponton pour un lancer et une pêche assise d’une stabilité à toute épreuve.',
        uses: ['Pêche', 'Utilitaire', 'Stabilité'],
        for: ['Marques de pêche', 'Pêcheurs'],
        specs: '350 × 120 × 15 cm · carga de 400 kg · tri-quilla · ventana de observación',
        artwork: 'Compartimento central recortado · ventana transparente de observación subacuática · casco tipo pontón',
        image: 'https://assets.isupfactory.com/site/products/2026/utility-lure/utility-lure-01.avif',
        hue: 170,
      },
    ],
  },
  de: {
    kicker: 'Produktplattformen',
    title: 'SUP-Plattformen für die Individualisierung verfügbar',
    sub: 'Jede Serie ist eine Fertigungsplattform — wählen Sie einen Ausgangspunkt, und wir passen Form, Grafiken und Spezifikationen an Ihr Produkt an.',
    items: [
      {
        slug: 'sup-explorer-11',
        series: 'all-around',
        sku: 'SUP-EX11',
        name: "SUP Explorer 11'",
        tagline: 'Der Allround-Klassiker',
        desc: 'Unser beliebtestes Allround-Board — breite Bauform für Stabilität bei Anfängern, Agilität für Fortgeschrittene und Mobilität für jedes Abenteuer. Der Standardausgangspunkt für die meisten neuen Marken.',
        uses: ['Anfänger', 'Allround', 'Familie'],
        for: ['Start-ups', 'Verleihflotten'],
        specs: "11'0\" × 32\" × 6\" · drop-stitch PVC · 15 PSI · 19 lbs (8.6 kg)",
        artwork: 'Drop-Stitch-Kern in Militärqualität · verstärkte Rails · 2+1-Finnen · Komplettpaket',
        image: 'https://assets.isupfactory.com/site/products/2026/all-around/all-around-03.avif',
        hue: 195,
      },
      {
        slug: 'sup-ocean-pulse',
        series: 'whitewater',
        sku: 'SUP-OP11',
        name: 'Ocean Pulse Series',
        tagline: 'Designer-Edition mit topografischem Wellenmuster',
        desc: 'Meereswellen, verwandelt in topografische Konturen in Tiffany-Blau, mit hochpräzisem mechanischem Prägen und einem durchgängig farblich abgestimmten Accessoire-Kit.',
        uses: ['Lifestyle', 'Flachwasser', 'Designer'],
        for: ['Lifestyle-Marken', 'Boutique-Reisen'],
        specs: "11'0\" × 32\" × 6\" · drop-stitch PVC · 15 PSI · 20 lbs (9.1 kg)",
        artwork: 'UV-Digitaldruck + mechanisches Heißprägen · abgestimmtes Zubehör',
        image: 'https://assets.isupfactory.com/site/products/2026/whitewater/whitewater-01.avif',
        hue: 210,
      },
      {
        slug: 'sup-cheetah-surge',
        series: 'surf',
        sku: 'SUP-CS11',
        name: 'Cheetah Surge Edition',
        tagline: 'Von der Wildnis inspirierte Premium-Edition',
        desc: 'Rohle Wildkraft trifft auf künstlerische Eleganz — ein Gepardenmotiv in Pastellrosa, Petrol und Koralle, gefertigt mit farbechter, mehrfarbiger EVA-Blockverklebung.',
        uses: ['Lifestyle', 'Flachwasser', 'Designer'],
        for: ['Lifestyle-Marken', 'Social-First-Marken'],
        specs: "11'0\" × 32\" × 6\" · drop-stitch PVC · 15 PSI · 20 lbs (9.1 kg)",
        artwork: 'Mehrfarbige EVA-Blockverklebung + UV-Druck · delaminationsresistenter Aufbau',
        image: 'https://assets.isupfactory.com/site/products/2026/surf/surf-01.avif',
        hue: 28,
      },
      {
        slug: 'sup-medusa-glow',
        series: 'yoga',
        sku: 'SUP-MG11',
        name: 'Medusa Glow Series',
        tagline: 'Die Quallen-Edition',
        desc: 'Eine traumhafte Unterwasserwelt — leuchtende Quallen, Seesterne und Korallenriffe in erfrischendem Mintgrün, mit farbechtem EVA-Artwork und herausragender Seitenstabilität für Yoga.',
        uses: ['Yoga', 'Tropical', 'Lifestyle'],
        for: ['Yoga-Studios', 'Tropische Marken'],
        specs: "11'0\" × 32\" × 6\" · drop-stitch PVC · 15 PSI · 20 lbs (9.1 kg)",
        artwork: 'Mehrfarbige EVA-Blockverklebung + UV-Druck · Griff im PVC-Rumpf verankert',
        image: 'https://assets.isupfactory.com/site/products/2026/kids-teens/kids-teens-05.avif',
        hue: 260,
      },
      {
        slug: 'sup-dolphin-wave',
        series: 'touring',
        sku: 'SUP-DW11',
        name: 'Dolphin Wave Series',
        tagline: 'Marine 360°-Edition',
        desc: 'Springende Delfine und geschichtete Blautöne im Stil mittelalterlicher Wellen mit CNC-präzise geschnittener EVA-Splicing-Verbindung und siebbedruckter durchgehender Railgrafik, die das Deck 360° umschließt.',
        uses: ['Marine', 'Flachwasser', 'Designer'],
        for: ['Marine-Marken', 'Resorts'],
        specs: "11'0\" × 32\" × 6\" · drop-stitch PVC · 15 PSI · 20 lbs (9.1 kg)",
        artwork: 'CNC-geschnittenes EVA-Farbblock-Splicing + siebbedruckte Rails · PANTONE-TPG-Farbabstimmung',
        image: 'https://assets.isupfactory.com/site/products/2026/touring/touring-02.avif',
        hue: 210,
      },
      {
        slug: 'sup-flowing-lotus',
        series: 'yoga',
        sku: 'SUP-FL11',
        name: 'Flowing Lotus Series',
        tagline: 'Wellness-Edition mit orientalischer Kunst',
        desc: 'Traditionelle orientalische Pinselkunst mit Lotus-, Koi- und Libellenmotiven — lasergeätzt in das Antirutschpad, damit es sich nie abnutzt oder verblasst. Konzipiert für ruhiges Paddeln und Yoga.',
        uses: ['Yoga', 'Meditation', 'Flachwasser'],
        for: ['Yoga-Studios', 'Wellness-Marken'],
        specs: "11'0\" × 32\" × 6\" · drop-stitch PVC · 15 PSI · 20 lbs (9.1 kg)",
        artwork: 'Zweischichtig lasergraviertes EVA + UV-Druck mit Farbverlauf · dynamische Farbblock-Finnen',
        image: 'https://assets.isupfactory.com/site/products/2026/yoga/yoga-01.avif',
        hue: 150,
      },
      {
        slug: 'sup-jungle-mandala',
        series: 'all-around',
        sku: 'SUP-JM11',
        name: 'Jungle Mandala Series',
        tagline: 'Tropische sakrale Geometrie',
        desc: 'Tropische Vitalität trifft auf sakrale Geometrie — Hibiskus, Kolibris und Mandala-Totems in Tiffany-Blau und Korallenorange, konstruiert für perfekte Symmetrie bei vollem Druck.',
        uses: ['Tropisch', 'Küste', 'Designer'],
        for: ['Tropische Marken', 'Reise'],
        specs: "11'0\" × 32\" × 6\" · drop-stitch PVC · 15 PSI · 20 lbs (9.1 kg)",
        artwork: 'Zweischichtig lasergraviertes EVA + UV-Druck + siebbedruckte Rails · verzerrungsfreie Geometrie',
        image: 'https://assets.isupfactory.com/site/products/2026/all-around/all-around-10.avif',
        hue: 28,
      },
      {
        slug: 'sup-leviathan-wake',
        series: 'race',
        sku: 'SUP-LW11',
        name: 'Leviathan Wake Series',
        tagline: 'Die Wal-Edition',
        desc: 'Ein majestätisches Blauwal-Totem mit geometrischen Stammesmustern und minimalistischen Schwarz-Weiß-Dünungslinien — für Paddler, die sich mit dem Ozean verbunden fühlen.',
        uses: ['Ozean', 'Allround', 'Designer'],
        for: ['Ozean-Marken', 'Outdoor-Marken'],
        specs: "11'0\" × 32\" × 6\" · drop-stitch PVC · 15 PSI · 20 lbs (9.1 kg)",
        artwork: 'UV-Digitaldruck + mechanisches Prägen · dehnbare PVC-Farben im Bodenlogo',
        image: 'https://assets.isupfactory.com/site/products/2026/race/race-01.avif',
        hue: 195,
      },
      {
        slug: 'sup-ocean-voyager',
        series: 'all-around',
        sku: 'SUP-OV11',
        name: 'Ocean Voyager Series',
        tagline: 'Die Meeresschildkröten-Edition',
        desc: 'Eine Hommage an den größten Wanderer des Ozeans — geometrisches Meeresschildkröten-Artwork in Tiefpetrol, Türkis und Korallenorange, mit einem durchgängig abgestimmten Accessoire-Kit.',
        uses: ['Touren', 'Ozean', 'Allround'],
        for: ['Touren-Marken', 'Outdoor-Marken'],
        specs: "11'0\" × 32\" × 6\" · drop-stitch PVC · 15 PSI · 20 lbs (9.1 kg)",
        artwork: 'Mehrfarbige EVA-Blockverklebung + UV-Druck · farblich abgestimmter Rucksack, Pumpe & Leash',
        image: 'https://assets.isupfactory.com/site/products/2026/all-around/all-around-12.avif',
        hue: 170,
      },
      {
        slug: 'sup-tropical-breeze',
        series: 'all-around',
        sku: 'SUP-TB11',
        name: 'Tropical Breeze Series',
        tagline: 'Inselauszeit-Edition',
        desc: 'Eine komplette Urlaubsinsel-Leinwand — Sonnenschein, Kokospalmen und Strandszenen, die von einer fein illustrierten Nase in abstrakte EVA-Farbblöcke Richtung Heck übergehen.',
        uses: ['Urlaub', 'Lifestyle', 'Küste'],
        for: ['Reisemarken', 'Resorts'],
        specs: "11'0\" × 32\" × 6\" · drop-stitch PVC · 15 PSI · 20 lbs (9.1 kg)",
        artwork: 'UV-Digitaldruck + gestanztes EVA-Patchwork · illustrierte Nasenlandschaft',
        image: 'https://assets.isupfactory.com/site/products/2026/all-around/all-around-17.avif',
        hue: 330,
      },
      {
        slug: 'sup-rheo-race',
        series: 'race',
        sku: 'SUP-RHEO01',
        name: 'RHEO Race Series',
        tagline: 'Carbon-Hybrid-Renn-Edition',
        desc: 'Aufblasbares Rennboard der Eliteklasse mit Carbon-Hybridkonstruktion und aggressivem Gleitrocker — gebaut für Wettkampfrennen, Sprinttraining und technische Kurse, in denen Steifigkeit und Geschwindigkeit über das Ergebnis entscheiden.',
        uses: ['Rennsport', 'Geschwindigkeit', 'Training'],
        for: ['Renn-Teams', 'Coaching'],
        specs: 'Carbon-Hybrid-Matrix · Gleitrocker · stromlinienförmiges Hochgeschwindigkeitsprofil',
        artwork: 'Carbon-Hybrid-Aufblaskonstruktion · leistungsstarker Gleitrocker',
        image: 'https://assets.isupfactory.com/site/products/2026/race/race-11.avif',
        hue: 195,
      },
      {
        slug: 'sup-fishing',
        series: 'fishing',
        sku: 'SUP-FSH01',
        name: 'Aufblasbares Angel-SUP',
        tagline: 'Angel-Edition mit Katamaran-Stabilität',
        desc: 'Aufblasbares SUP speziell fürs Angeln mit doppelseitiger Luftkammer (im Katamaranstil) für herausragende Sekundärstabilität, Rutenhalter-Befestigungen, einer Fischmessskala auf dem Deck und einem verstärkten Nutzrumpf.',
        uses: ['Angeln', 'Stabilität', 'Nutzung'],
        for: ['Angelmarken', 'Guides'],
        specs: 'Doppelseitige Luftkammer · 10–80-cm-Fischskala · Rutenhalter-Befestigungen',
        artwork: 'Verstärkter Nutzrumpf · mehrpunktige Metall-D-Ringe',
        image: 'https://assets.isupfactory.com/site/products/2026/fishing/fishing-01.avif',
        hue: 210,
      },
      {
        slug: 'sup-mini',
        series: 'kids',
        sku: 'SUP-MINI01',
        name: 'Mini SUP Series',
        tagline: '3-in-1: Kinder / Surf / Bodyboard',
        desc: 'Ultratransportables Hybrid-Board, das zwischen Kinder-SUP, aufblasbarem Surfbrett und Bodyboard wechselt — mit einem kurzen, breiten, äußerst stabilen Profil und einer stichfesten Deckfläche.',
        uses: ['Kinder', 'Surf', 'Reise'],
        for: ['Kindermarken', 'Resorts'],
        specs: 'Hybride SUP-/Surf-/Bodyboard-Geometrie · kurzer breiter Rumpf · stichfestes Deck',
        artwork: 'Multifunktions-Hybridgeometrie · hochbelastbares Deckmaterial',
        image: 'https://assets.isupfactory.com/site/products/2026/mini/mini-01.avif',
        hue: 28,
      },
      {
        slug: 'sup-giant',
        series: 'multi',
        sku: 'SUP-GNT01',
        name: 'Giant SUP — Multipersonen-Teamboard',
        tagline: 'Teamplattform für 6–8 Personen',
        desc: 'Multipersonen-SUP im Großformat für 6–8 Personen: Rumpf 16.4–17 ft, Breite 59–60 Zoll, Dicke 8 Zoll und Zwei-Ventil-Aufpumpsystem, mit 8–12 Tragegriffen und einem 4+1-Fin-System.',
        uses: ['Gruppe', 'Team', 'Freizeit'],
        for: ['Resorts', 'Verleihflotten'],
        specs: "16'4\"–17'0\" × 59\"–60\" × 8\" · 1200–1400 L · 11–15 PSI · 4+1 fins",
        artwork: 'Zwei-Ventil-Aufpumpsystem · 8–12 Neopren-Tragegriffe · 4+1-Fin-System',
        image: 'https://assets.isupfactory.com/site/products/2026/giant/giant-03.avif',
        hue: 195,
      },
      {
        slug: 'sup-lure-skiff',
        series: 'fishing',
        sku: 'SUP-LSK01',
        name: 'Utility SUP — Lure Skiff',
        tagline: 'Kunstköderangeln auf ultradurchbreitem 120-cm-Board',
        desc: 'Ultradurchbreites 120-cm-Board zum Kunstköderangeln mit zentralem Einschnappfach und Unterwasser-Sichtfenster, 400 kg Zuladung und pontonartigem Rumpf für bombenfestes Auswerfen und sitzendes Angeln.',
        uses: ['Angeln', 'Nutzung', 'Stabilität'],
        for: ['Angelmarken', 'Angler'],
        specs: '350 × 120 × 15 cm · 400-kg-Zuladung · Tri-Fin · Sichtfenster',
        artwork: 'Zentrales Einschnappfach · transparentes Unterwasser-Sichtfenster · Pontonrumpf',
        image: 'https://assets.isupfactory.com/site/products/2026/utility-lure/utility-lure-01.avif',
        hue: 170,
      },
    ],
  },
  it: {
    kicker: 'Piattaforme prodotto',
    title: 'Piattaforme SUP disponibili per la personalizzazione',
    sub: 'Ogni serie è una piattaforma di produzione — scegli un punto di partenza e noi adattiamo forma, grafiche e specifiche al tuo prodotto.',
    items: [
      {
        slug: 'sup-explorer-11',
        series: 'all-around',
        sku: 'SUP-EX11',
        name: "SUP Explorer 11'",
        tagline: 'Il classico all-round',
        desc: "Il nostro all-round più popolare — costruzione ampia per la stabilità dei principianti, agilità per i più esperti e portabilità per ogni avventura. Il punto di partenza standard per la maggior parte dei nuovi marchi.",
        uses: ['Principianti', 'All-round', 'Famiglia'],
        for: ['Startup', 'Flotte da noleggio'],
        specs: "11'0\" × 32\" × 6\" · drop-stitch PVC · 15 PSI · 19 lbs (8.6 kg)",
        artwork: 'Nucleo drop-stitch di qualità militare · rail rinforzati · 2+1 pinne · pacchetto completo',
        image: 'https://assets.isupfactory.com/site/products/2026/all-around/all-around-03.avif',
        hue: 195,
      },
      {
        slug: 'sup-ocean-pulse',
        series: 'whitewater',
        sku: 'SUP-OP11',
        name: 'Ocean Pulse Series',
        tagline: 'Edizione designer con motivo topografico a onde',
        desc: 'Onde oceaniche trasformate in contorni topografici blu Tiffany, con embossing meccanico ad alta precisione e un kit di accessori coordinato sui colori.',
        uses: ['Lifestyle', 'Acqua calma', 'Designer'],
        for: ['Marchi lifestyle', 'Viaggi boutique'],
        specs: "11'0\" × 32\" × 6\" · drop-stitch PVC · 15 PSI · 20 lbs (9.1 kg)",
        artwork: 'Stampa digitale UV + embossing meccanico a caldo · accessori coordinati',
        image: 'https://assets.isupfactory.com/site/products/2026/whitewater/whitewater-01.avif',
        hue: 210,
      },
      {
        slug: 'sup-cheetah-surge',
        series: 'surf',
        sku: 'SUP-CS11',
        name: 'Cheetah Surge Edition',
        tagline: 'Edizione premium ispirata alla natura selvaggia',
        desc: "La forza grezza della natura incontra l’eleganza artistica — un motivo a ghepardo in rosa pastello, petrolio e corallo, realizzato con giunzione a blocchi EVA multicolore a prova di scolorimento.",
        uses: ['Lifestyle', 'Acqua calma', 'Designer'],
        for: ['Marchi lifestyle', 'Marchi social-first'],
        specs: "11'0\" × 32\" × 6\" · drop-stitch PVC · 15 PSI · 20 lbs (9.1 kg)",
        artwork: 'Giunzione a blocchi EVA multicolore + stampa UV · costruzione resistente alla delaminazione',
        image: 'https://assets.isupfactory.com/site/products/2026/surf/surf-01.avif',
        hue: 28,
      },
      {
        slug: 'sup-medusa-glow',
        series: 'yoga',
        sku: 'SUP-MG11',
        name: 'Medusa Glow Series',
        tagline: "L’edizione meduse",
        desc: 'Un sogno subacqueo — meduse luminose, stelle marine e barriere coralline in un verde menta rinfrescante, con artwork EVA a prova di scolorimento ed eccezionale stabilità laterale per lo yoga.',
        uses: ['Yoga', 'Tropicale', 'Lifestyle'],
        for: ['Studi yoga', 'Marchi tropicali'],
        specs: "11'0\" × 32\" × 6\" · drop-stitch PVC · 15 PSI · 20 lbs (9.1 kg)",
        artwork: 'Giunzione a blocchi EVA multicolore + stampa UV · maniglia ancorata allo scafo in PVC',
        image: 'https://assets.isupfactory.com/site/products/2026/kids-teens/kids-teens-05.avif',
        hue: 260,
      },
      {
        slug: 'sup-dolphin-wave',
        series: 'touring',
        sku: 'SUP-DW11',
        name: 'Dolphin Wave Series',
        tagline: 'Edizione marina 360°',
        desc: 'Delfini che saltano e blu a strati in stile onde medievali, con giunzione EVA tagliata con precisione CNC e grafica sui rail serigrafata a tutta lunghezza che avvolge il deck a 360°.',
        uses: ['Marino', 'Acqua calma', 'Designer'],
        for: ['Marchi marini', 'Resort'],
        specs: "11'0\" × 32\" × 6\" · drop-stitch PVC · 15 PSI · 20 lbs (9.1 kg)",
        artwork: 'Splicing a blocchi di colore EVA tagliato CNC + rail serigrafati · corrispondenza colore PANTONE-TPG',
        image: 'https://assets.isupfactory.com/site/products/2026/touring/touring-02.avif',
        hue: 210,
      },
      {
        slug: 'sup-flowing-lotus',
        series: 'yoga',
        sku: 'SUP-FL11',
        name: 'Flowing Lotus Series',
        tagline: 'Edizione wellness con arte orientale',
        desc: 'Arte orientale tradizionale a pennello con motivi di loto, carpe koi e libellule — incisa al laser nel pad antiscivolo, così non si consuma né scolorisce mai. Pensata per la pagaiata tranquilla e lo yoga.',
        uses: ['Yoga', 'Meditazione', 'Acqua calma'],
        for: ['Studi yoga', 'Marchi wellness'],
        specs: "11'0\" × 32\" × 6\" · drop-stitch PVC · 15 PSI · 20 lbs (9.1 kg)",
        artwork: 'EVA a doppio strato inciso al laser + stampa UV con sfumature di colore · pinne dinamiche a blocchi di colore',
        image: 'https://assets.isupfactory.com/site/products/2026/yoga/yoga-01.avif',
        hue: 150,
      },
      {
        slug: 'sup-jungle-mandala',
        series: 'all-around',
        sku: 'SUP-JM11',
        name: 'Jungle Mandala Series',
        tagline: 'Geometria sacra tropicale',
        desc: 'Vitalità tropicale e geometria sacra — ibischi, colibrì e totem mandala in blu Tiffany e arancione corallo, costruiti per una simmetria perfetta a piena pressione.',
        uses: ['Tropicale', 'Costa', 'Designer'],
        for: ['Marchi tropicali', 'Viaggio'],
        specs: "11'0\" × 32\" × 6\" · drop-stitch PVC · 15 PSI · 20 lbs (9.1 kg)",
        artwork: 'EVA a doppio strato inciso al laser + stampa UV + rail serigrafati · geometria senza distorsioni',
        image: 'https://assets.isupfactory.com/site/products/2026/all-around/all-around-10.avif',
        hue: 28,
      },
      {
        slug: 'sup-leviathan-wake',
        series: 'race',
        sku: 'SUP-LW11',
        name: 'Leviathan Wake Series',
        tagline: "L’edizione balena",
        desc: "Un maestoso totem di balenottera azzurra con motivi tribali geometrici e linee minimaliste di mareggiate in bianco e nero — per i paddler che si sentono legati all’oceano.",
        uses: ['Oceano', 'All-round', 'Designer'],
        for: ['Marchi oceanici', 'Marchi outdoor'],
        specs: "11'0\" × 32\" × 6\" · drop-stitch PVC · 15 PSI · 20 lbs (9.1 kg)",
        artwork: 'Stampa digitale UV + embossing meccanico · colori PVC estensibili nel logo del fondo',
        image: 'https://assets.isupfactory.com/site/products/2026/race/race-01.avif',
        hue: 195,
      },
      {
        slug: 'sup-ocean-voyager',
        series: 'all-around',
        sku: 'SUP-OV11',
        name: 'Ocean Voyager Series',
        tagline: "L’edizione tartaruga marina",
        desc: "Un omaggio al più grande viaggiatore dell’oceano — artwork geometrico di tartaruga marina in petrolio intenso, turchese e arancione corallo, con un kit di accessori coordinato sui colori.",
        uses: ['Touring', 'Oceano', 'All-round'],
        for: ['Marchi touring', 'Marchi outdoor'],
        specs: "11'0\" × 32\" × 6\" · drop-stitch PVC · 15 PSI · 20 lbs (9.1 kg)",
        artwork: 'Giunzione a blocchi EVA multicolore + stampa UV · zaino, pompa e leash coordinati sui colori',
        image: 'https://assets.isupfactory.com/site/products/2026/all-around/all-around-12.avif',
        hue: 170,
      },
      {
        slug: 'sup-tropical-breeze',
        series: 'all-around',
        sku: 'SUP-TB11',
        name: 'Tropical Breeze Series',
        tagline: 'Edizione pausa tropicale',
        desc: 'Una tela completa di isola da sogno — sole, palme da cocco e scene di spiaggia che dal nose finemente illustrato sfumano in blocchi di colore EVA astratti verso poppa.',
        uses: ['Vacanza', 'Lifestyle', 'Costa'],
        for: ['Marchi di viaggio', 'Resort'],
        specs: "11'0\" × 32\" × 6\" · drop-stitch PVC · 15 PSI · 20 lbs (9.1 kg)",
        artwork: 'Stampa digitale UV + patchwork EVA fustellato · paesaggio del nose illustrato',
        image: 'https://assets.isupfactory.com/site/products/2026/all-around/all-around-17.avif',
        hue: 330,
      },
      {
        slug: 'sup-rheo-race',
        series: 'race',
        sku: 'SUP-RHEO01',
        name: 'RHEO Race Series',
        tagline: 'Edizione racing ibrida in carbonio',
        desc: "Race board gonfiabile di livello elite con costruzione ibrida in carbonio e rocker di planata aggressivo — costruito per le gare, l’allenamento sprint e i percorsi tecnici dove rigidità e velocità decidono il risultato.",
        uses: ['Gara', 'Velocità', 'Allenamento'],
        for: ['Team racing', 'Coaching'],
        specs: 'Matrice ibrida in carbonio · rocker di planata · profilo aerodinamico ad alta velocità',
        artwork: 'Costruzione gonfiabile ibrida in carbonio · rocker di planata ad alte prestazioni',
        image: 'https://assets.isupfactory.com/site/products/2026/race/race-11.avif',
        hue: 195,
      },
      {
        slug: 'sup-fishing',
        series: 'fishing',
        sku: 'SUP-FSH01',
        name: 'SUP da pesca gonfiabile',
        tagline: 'Edizione pesca con stabilità da catamarano',
        desc: "SUP gonfiabile pensato per la pesca, con camera d’aria a doppio lato (stile catamarano) per un’eccezionale stabilità secondaria, attacchi per i portacanne, una scala di misurazione del pescato sul deck e uno scafo rinforzato da lavoro.",
        uses: ['Pesca', 'Stabilità', 'Lavoro'],
        for: ['Marchi di pesca', 'Guide'],
        specs: "Camera d’aria a doppio lato · scala pesce da 10–80 cm · attacchi per portacanne",
        artwork: 'Scafo da lavoro rinforzato · anelli a D metallici multipunto',
        image: 'https://assets.isupfactory.com/site/products/2026/fishing/fishing-01.avif',
        hue: 210,
      },
      {
        slug: 'sup-mini',
        series: 'kids',
        sku: 'SUP-MINI01',
        name: 'Mini SUP Series',
        tagline: '3-in-1: bambini / surf / bodyboard',
        desc: 'Hybrid board ultraportatile che si trasforma tra SUP per bambini, tavola da surf gonfiabile e bodyboard — con un profilo corto, largo ed estremamente stabile e un deck a prova di foratura.',
        uses: ['Bambini', 'Surf', 'Viaggio'],
        for: ['Marchi per bambini', 'Resort'],
        specs: 'Geometria ibrida SUP/surf/bodyboard · scafo corto e largo · deck a prova di foratura',
        artwork: 'Geometria ibrida multifunzionale · materiale del deck ad alta resistenza',
        image: 'https://assets.isupfactory.com/site/products/2026/mini/mini-01.avif',
        hue: 28,
      },
      {
        slug: 'sup-giant',
        series: 'multi',
        sku: 'SUP-GNT01',
        name: 'Giant SUP — team board multi persona',
        tagline: 'Piattaforma di squadra per 6–8 persone',
        desc: 'SUP multi persona in grande formato per 6–8 persone: scafo 16.4–17 ft, larghezza 59–60 pollici, spessore 8 pollici e sistema di gonfiaggio a due valvole, con 8–12 maniglie di trasporto e sistema 4+1 pinne.',
        uses: ['Gruppo', 'Team', 'Tempo libero'],
        for: ['Resort', 'Flotte da noleggio'],
        specs: "16'4\"–17'0\" × 59\"–60\" × 8\" · 1200–1400 L · 11–15 PSI · 4+1 fins",
        artwork: 'Sistema di gonfiaggio a due valvole · 8–12 maniglie in neoprene · sistema 4+1 pinne',
        image: 'https://assets.isupfactory.com/site/products/2026/giant/giant-03.avif',
        hue: 195,
      },
      {
        slug: 'sup-lure-skiff',
        series: 'fishing',
        sku: 'SUP-LSK01',
        name: 'Utility SUP — Lure Skiff',
        tagline: 'Pesca a esche artificiali su board extralargo da 120 cm',
        desc: 'Board extralargo da 120 cm per la pesca a esche artificiali, con vano centrale a scatto e finestra subacquea, portata di 400 kg e scafo tipo pontone per lanci stabili e pesca da seduti.',
        uses: ['Pesca', 'Lavoro', 'Stabilità'],
        for: ['Marchi di pesca', 'Pescatori'],
        specs: '350 × 120 × 15 cm · portata 400 kg · Tri-Fin · finestra subacquea',
        artwork: 'Vano centrale a scatto · finestra subacquea trasparente · scafo a pontone',
        image: 'https://assets.isupfactory.com/site/products/2026/utility-lure/utility-lure-01.avif',
        hue: 170,
      },
    ],
  },
  pt: {
    kicker: 'Plataformas de produto',
    title: 'Plataformas SUP disponíveis para personalização',
    sub: 'Cada série é uma plataforma de produção — escolhe um ponto de partida e nós adaptamos forma, gráficas e especificações ao teu produto.',
    items: [
      {
        slug: 'sup-explorer-11',
        series: 'all-around',
        sku: 'SUP-EX11',
        name: "SUP Explorer 11'",
        tagline: 'O clássico all-round',
        desc: "O nosso all-round mais popular — construção ampla para a estabilidade dos principiantes, agilidade para os mais experientes e portabilidade para todas as aventuras. O ponto de partida padrão para a maioria das novas marcas.",
        uses: ['Principiantes', 'All-round', 'Família'],
        for: ['Startups', 'Frotas de aluguer'],
        specs: "11'0\" × 32\" × 6\" · drop-stitch PVC · 15 PSI · 19 lbs (8.6 kg)",
        artwork: 'Núcleo drop-stitch de qualidade militar · rails reforçados · barbatanas 2+1 · pacote completo',
        image: 'https://assets.isupfactory.com/site/products/2026/all-around/all-around-03.avif',
        hue: 195,
      },
      {
        slug: 'sup-ocean-pulse',
        series: 'whitewater',
        sku: 'SUP-OP11',
        name: 'Série Ocean Pulse',
        tagline: 'Edição de designer com motivo topográfico de ondas',
        desc: 'Ondas do oceano transformadas em contornos topográficos azul Tiffany, com embossing mecânico de alta precisão e um kit de acessórios coordenado nas cores.',
        uses: ['Lifestyle', 'Águas calmas', 'Designer'],
        for: ['Marcas lifestyle', 'Viagens boutique'],
        specs: "11'0\" × 32\" × 6\" · drop-stitch PVC · 15 PSI · 20 lbs (9.1 kg)",
        artwork: 'Impressão digital UV + embossing mecânico a quente · acessórios coordenados',
        image: 'https://assets.isupfactory.com/site/products/2026/whitewater/whitewater-01.avif',
        hue: 210,
      },
      {
        slug: 'sup-cheetah-surge',
        series: 'surf',
        sku: 'SUP-CS11',
        name: 'Edição Cheetah Surge',
        tagline: 'Edição premium inspirada na natureza selvagem',
        desc: "A força bruta da natureza encontra a elegância artística — um motivo de chita em rosa pastel, petrol e coral, realizado com junção de blocos EVA multicolor à prova de desbotamento.",
        uses: ['Lifestyle', 'Águas calmas', 'Designer'],
        for: ['Marcas lifestyle', 'Marcas social-first'],
        specs: "11'0\" × 32\" × 6\" · drop-stitch PVC · 15 PSI · 20 lbs (9.1 kg)",
        artwork: 'Junção de blocos EVA multicolor + impressão UV · construção resistente à delaminação',
        image: 'https://assets.isupfactory.com/site/products/2026/surf/surf-01.avif',
        hue: 28,
      },
      {
        slug: 'sup-medusa-glow',
        series: 'yoga',
        sku: 'SUP-MG11',
        name: 'Série Medusa Glow',
        tagline: 'A edição medusas',
        desc: 'Um sonho subaquático — medusas luminosas, estrelas-do-mar e recifes de coral num verde-menta refrescante, com artwork EVA à prova de desbotamento e estabilidade lateral excecional para ioga.',
        uses: ['Ioga', 'Tropical', 'Lifestyle'],
        for: ['Estúdios de ioga', 'Marcas tropicais'],
        specs: "11'0\" × 32\" × 6\" · drop-stitch PVC · 15 PSI · 20 lbs (9.1 kg)",
        artwork: 'Junção de blocos EVA multicolor + impressão UV · pega ancorada ao casco em PVC',
        image: 'https://assets.isupfactory.com/site/products/2026/kids-teens/kids-teens-05.avif',
        hue: 260,
      },
      {
        slug: 'sup-dolphin-wave',
        series: 'touring',
        sku: 'SUP-DW11',
        name: 'Série Dolphin Wave',
        tagline: 'Edição marinha 360°',
        desc: 'Golfinhos a saltar e azuis em camadas ao estilo de ondas medievais, com junção EVA cortada com precisão CNC e gráfica nos rails serigrafada a todo o comprimento que envolve o deck a 360°.',
        uses: ['Marinho', 'Águas calmas', 'Designer'],
        for: ['Marcas marinhas', 'Resorts'],
        specs: "11'0\" × 32\" × 6\" · drop-stitch PVC · 15 PSI · 20 lbs (9.1 kg)",
        artwork: 'Splicing de blocos de cor EVA cortado a CNC + rails serigrafados · correspondência de cores PANTONE-TPG',
        image: 'https://assets.isupfactory.com/site/products/2026/touring/touring-02.avif',
        hue: 210,
      },
      {
        slug: 'sup-flowing-lotus',
        series: 'yoga',
        sku: 'SUP-FL11',
        name: 'Série Flowing Lotus',
        tagline: 'Edição wellness com arte oriental',
        desc: 'Arte oriental tradicional a pincel com motivos de lótus, carpas koi e libélulas — gravada a laser no pad antiderrapante, para nunca se desgastar nem desbotar. Pensada para a pagaiada tranquila e a ioga.',
        uses: ['Ioga', 'Meditação', 'Águas calmas'],
        for: ['Estúdios de ioga', 'Marcas wellness'],
        specs: "11'0\" × 32\" × 6\" · drop-stitch PVC · 15 PSI · 20 lbs (9.1 kg)",
        artwork: 'EVA de dupla camada gravado a laser + impressão UV com gradientes de cor · barbatanas dinâmicas em blocos de cor',
        image: 'https://assets.isupfactory.com/site/products/2026/yoga/yoga-01.avif',
        hue: 150,
      },
      {
        slug: 'sup-jungle-mandala',
        series: 'all-around',
        sku: 'SUP-JM11',
        name: 'Série Jungle Mandala',
        tagline: 'Geometria sagrada tropical',
        desc: 'Vitalidade tropical e geometria sagrada — hibiscos, beija-flores e totens mandala em azul Tiffany e laranja coral, construídos para uma simetria perfeita em plena pressão.',
        uses: ['Tropical', 'Costa', 'Designer'],
        for: ['Marcas tropicais', 'Viagem'],
        specs: "11'0\" × 32\" × 6\" · drop-stitch PVC · 15 PSI · 20 lbs (9.1 kg)",
        artwork: 'EVA de dupla camada gravado a laser + impressão UV + rails serigrafados · geometria sem distorções',
        image: 'https://assets.isupfactory.com/site/products/2026/all-around/all-around-10.avif',
        hue: 28,
      },
      {
        slug: 'sup-leviathan-wake',
        series: 'race',
        sku: 'SUP-LW11',
        name: 'Série Leviathan Wake',
        tagline: 'A edição baleia',
        desc: "Um majestoso totem de baleia-azul com motivos tribais geométricos e linhas minimalistas de ondulação a preto e branco — para os paddlers que se sentem ligados ao oceano.",
        uses: ['Oceano', 'All-round', 'Designer'],
        for: ['Marcas oceânicas', 'Marcas outdoor'],
        specs: "11'0\" × 32\" × 6\" · drop-stitch PVC · 15 PSI · 20 lbs (9.1 kg)",
        artwork: 'Impressão digital UV + embossing mecânico · tintas PVC extensíveis no logótipo do fundo',
        image: 'https://assets.isupfactory.com/site/products/2026/race/race-01.avif',
        hue: 195,
      },
      {
        slug: 'sup-ocean-voyager',
        series: 'all-around',
        sku: 'SUP-OV11',
        name: 'Série Ocean Voyager',
        tagline: 'A edição tartaruga marinha',
        desc: "Uma homenagem ao maior viajante do oceano — artwork geométrico de tartaruga marinha em petrol intenso, turquesa e laranja coral, com um kit de acessórios coordenado nas cores.",
        uses: ['Touring', 'Oceano', 'All-round'],
        for: ['Marcas touring', 'Marcas outdoor'],
        specs: "11'0\" × 32\" × 6\" · drop-stitch PVC · 15 PSI · 20 lbs (9.1 kg)",
        artwork: 'Junção de blocos EVA multicolor + impressão UV · mochila, bomba e leash coordenados nas cores',
        image: 'https://assets.isupfactory.com/site/products/2026/all-around/all-around-12.avif',
        hue: 170,
      },
      {
        slug: 'sup-tropical-breeze',
        series: 'all-around',
        sku: 'SUP-TB11',
        name: 'Série Tropical Breeze',
        tagline: 'Edição pausa tropical',
        desc: 'Uma tela completa de ilha de sonho — sol, palmeiras de coco e cenas de praia que do nose finamente ilustrado desvanecem para blocos de cor EVA abstratos em direção à popa.',
        uses: ['Férias', 'Lifestyle', 'Costa'],
        for: ['Marcas de viagem', 'Resorts'],
        specs: "11'0\" × 32\" × 6\" · drop-stitch PVC · 15 PSI · 20 lbs (9.1 kg)",
        artwork: 'Impressão digital UV + patchwork EVA recortado · paisagem do nose ilustrada',
        image: 'https://assets.isupfactory.com/site/products/2026/all-around/all-around-17.avif',
        hue: 330,
      },
      {
        slug: 'sup-rheo-race',
        series: 'race',
        sku: 'SUP-RHEO01',
        name: 'Série RHEO Race',
        tagline: 'Edição racing híbrida em carbono',
        desc: "Board de corrida insuflável de nível elite com construção híbrida em carbono e rocker de deslize agressivo — construído para as corridas, treino de sprint e percursos técnicos onde rigidez e velocidade decidem o resultado.",
        uses: ['Corrida', 'Velocidade', 'Treino'],
        for: ['Equipas de corrida', 'Coaching'],
        specs: 'Matriz híbrida em carbono · rocker de deslize · perfil aerodinâmico de alta velocidade',
        artwork: 'Construção insuflável híbrida em carbono · rocker de deslize de alto desempenho',
        image: 'https://assets.isupfactory.com/site/products/2026/race/race-11.avif',
        hue: 195,
      },
      {
        slug: 'sup-fishing',
        series: 'fishing',
        sku: 'SUP-FSH01',
        name: 'SUP de pesca insuflável',
        tagline: 'Edição pesca com estabilidade de catamarã',
        desc: "SUP insuflável pensado para a pesca, com câmara de ar de dupla face (estilo catamarã) para uma estabilidade secundária excecional, acessórios para varões, uma escala de medição do pescado no deck e um casco reforçado de trabalho.",
        uses: ['Pesca', 'Estabilidade', 'Trabalho'],
        for: ['Marcas de pesca', 'Guias'],
        specs: 'Câmara de ar de dupla face · escala de peixe de 10–80 cm · acessórios para varões',
        artwork: 'Casco de trabalho reforçado · anéis em D metálicos multiponto',
        image: 'https://assets.isupfactory.com/site/products/2026/fishing/fishing-01.avif',
        hue: 210,
      },
      {
        slug: 'sup-mini',
        series: 'kids',
        sku: 'SUP-MINI01',
        name: 'Série Mini SUP',
        tagline: '3-em-1: crianças / surf / bodyboard',
        desc: 'Board híbrido ultraportátil que se transforma entre SUP para crianças, prancha de surf insuflável e bodyboard — com um perfil curto, largo e extremamente estável e um deck à prova de perfuração.',
        uses: ['Crianças', 'Surf', 'Viagem'],
        for: ['Marcas para crianças', 'Resorts'],
        specs: 'Geometria híbrida SUP/surf/bodyboard · casco curto e largo · deck à prova de perfuração',
        artwork: 'Geometria híbrida multifuncional · material do deck de alta resistência',
        image: 'https://assets.isupfactory.com/site/products/2026/mini/mini-01.avif',
        hue: 28,
      },
      {
        slug: 'sup-giant',
        series: 'multi',
        sku: 'SUP-GNT01',
        name: 'Giant SUP — team board multi pessoa',
        tagline: 'Plataforma de equipa para 6–8 pessoas',
        desc: 'SUP multi pessoa em grande formato para 6–8 pessoas: casco de 16.4–17 ft, largura de 59–60 polegadas, espessura de 8 polegadas e sistema de insuflagem de duas válvulas, com 8–12 pegas de transporte e sistema de 4+1 barbatanas.',
        uses: ['Grupo', 'Equipa', 'Tempo livre'],
        for: ['Resorts', 'Frotas de aluguer'],
        specs: "16'4\"–17'0\" × 59\"–60\" × 8\" · 1200–1400 L · 11–15 PSI · 4+1 fins",
        artwork: 'Sistema de insuflagem de duas válvulas · 8–12 pegas em neoprene · sistema de 4+1 barbatanas',
        image: 'https://assets.isupfactory.com/site/products/2026/giant/giant-03.avif',
        hue: 195,
      },
      {
        slug: 'sup-lure-skiff',
        series: 'fishing',
        sku: 'SUP-LSK01',
        name: 'Utility SUP — Lure Skiff',
        tagline: 'Pesca com iscos artificiais em board extralargo de 120 cm',
        desc: 'Board extralargo de 120 cm para pesca com iscos artificiais, com compartimento central de encaixe e janela subaquática, capacidade de 400 kg e casco tipo pontão para lançamentos estáveis e pesca sentado.',
        uses: ['Pesca', 'Trabalho', 'Estabilidade'],
        for: ['Marcas de pesca', 'Pescadores'],
        specs: '350 × 120 × 15 cm · capacidade 400 kg · Tri-Fin · janela subaquática',
        artwork: 'Compartimento central de encaixe · janela subaquática transparente · casco a pontão',
        image: 'https://assets.isupfactory.com/site/products/2026/utility-lure/utility-lure-01.avif',
        hue: 170,
      },
    ],
  },
  nl: {
    kicker: 'Productplatforms',
    title: 'SUP-platforms beschikbaar voor personalisatie',
    sub: 'Elke serie is een productieplatform — kies een startpunt en wij passen vorm, graphics en specificaties aan jouw product aan.',
    items: [
      {
        slug: 'sup-explorer-11',
        series: 'all-around',
        sku: 'SUP-EX11',
        name: "SUP Explorer 11'",
        tagline: 'De allround-klassieker',
        desc: 'Ons populairste allround board — brede opbouw voor de stabiliteit van beginners, wendbaarheid voor gevorderden en draagbaarheid voor elk avontuur. Het standaard startpunt voor de meeste nieuwe merken.',
        uses: ['Beginner', 'Allround', 'Familie'],
        for: ['Startups', 'Verhuurvloten'],
        specs: "11'0\" × 32\" × 6\" · drop-stitch PVC · 15 PSI · 19 lbs (8.6 kg)",
        artwork: 'Drop-stitch-kern van militaire kwaliteit · versterkte rails · 2+1 vinnen · compleet pakket',
        image: 'https://assets.isupfactory.com/site/products/2026/all-around/all-around-03.avif',
        hue: 195,
      },
      {
        slug: 'sup-ocean-pulse',
        series: 'whitewater',
        sku: 'SUP-OP11',
        name: 'Serie Ocean Pulse',
        tagline: 'Designer-editie met topografisch golfmotief',
        desc: 'Oceaangolven omgezet in topografische contouren in Tiffany-blauw, met uiterst precieze mechanische embossing en een accessoirekit in bijpassende kleuren.',
        uses: ['Lifestyle', 'Kalme wateren', 'Designer'],
        for: ['Lifestyle-merken', 'Boutique-reizen'],
        specs: "11'0\" × 32\" × 6\" · drop-stitch PVC · 15 PSI · 20 lbs (9.1 kg)",
        artwork: 'UV-digitaal printen + mechanische warmte-embossing · gecoördineerde accessoires',
        image: 'https://assets.isupfactory.com/site/products/2026/whitewater/whitewater-01.avif',
        hue: 210,
      },
      {
        slug: 'sup-cheetah-surge',
        series: 'surf',
        sku: 'SUP-CS11',
        name: 'Cheetah Surge-editie',
        tagline: 'Premium-editie geïnspireerd op de wildernis',
        desc: 'Rauwe wilde kracht ontmoet artistieke elegantie — een cheetah-motief in pastelroze, petrol en koraal, gerealiseerd met verkleurvrij meerkleurig EVA-blokwerk.',
        uses: ['Lifestyle', 'Kalme wateren', 'Designer'],
        for: ['Lifestyle-merken', 'Social-first-merken'],
        specs: "11'0\" × 32\" × 6\" · drop-stitch PVC · 15 PSI · 20 lbs (9.1 kg)",
        artwork: 'Meerkleurig EVA-blokwerk + UV-printen · constructie bestand tegen delaminatie',
        image: 'https://assets.isupfactory.com/site/products/2026/surf/surf-01.avif',
        hue: 28,
      },
      {
        slug: 'sup-medusa-glow',
        series: 'yoga',
        sku: 'SUP-MG11',
        name: 'Serie Medusa Glow',
        tagline: 'De kwal-editie',
        desc: 'Een onderwaterdroomwereld — gloeiende kwallen, zeesterren en koraalriffen in verfrissend muntgroen, met verkleurvrij EVA-artwork en uitzonderlijke zijdelingse stabiliteit voor yoga.',
        uses: ['Yoga', 'Tropisch', 'Lifestyle'],
        for: ["Yogastudio's", 'Tropische merken'],
        specs: "11'0\" × 32\" × 6\" · drop-stitch PVC · 15 PSI · 20 lbs (9.1 kg)",
        artwork: 'Meerkleurig EVA-blokwerk + UV-printen · handvat verankerd aan de PVC-romp',
        image: 'https://assets.isupfactory.com/site/products/2026/kids-teens/kids-teens-05.avif',
        hue: 260,
      },
      {
        slug: 'sup-dolphin-wave',
        series: 'touring',
        sku: 'SUP-DW11',
        name: 'Serie Dolphin Wave',
        tagline: 'Marine 360°-editie',
        desc: 'Springende dolfijnen en gelaagd middeleeuws blauw in golfstijl, met CNC-precisie gesneden EVA-blokwerk en over de volle lengte zeefgedrukte railart die het deck 360° omhult.',
        uses: ['Marine', 'Kalme wateren', 'Designer'],
        for: ['Marine-merken', 'Resorts'],
        specs: "11'0\" × 32\" × 6\" · drop-stitch PVC · 15 PSI · 20 lbs (9.1 kg)",
        artwork: 'CNC-gesneden EVA-kleurenblokken + zeefgedrukte rails · PANTONE-TPG-kleurkoppeling',
        image: 'https://assets.isupfactory.com/site/products/2026/touring/touring-02.avif',
        hue: 210,
      },
      {
        slug: 'sup-flowing-lotus',
        series: 'yoga',
        sku: 'SUP-FL11',
        name: 'Serie Flowing Lotus',
        tagline: 'Wellness-editie met oosterse kunst',
        desc: 'Traditionele oosterse penseelkunst met lotus-, koi- en libellemotieven — lasergegraveerd in de antislipmat, zodat het nooit verslijt of verkleurt. Ontworpen voor rustig peddelen en yoga.',
        uses: ['Yoga', 'Meditatie', 'Kalme wateren'],
        for: ["Yogastudio's", 'Wellness-merken'],
        specs: "11'0\" × 32\" × 6\" · drop-stitch PVC · 15 PSI · 20 lbs (9.1 kg)",
        artwork: 'Dubbellaags lasergegraveerd EVA + UV-printen met kleurverlopen · dynamische vinnen in kleurblokken',
        image: 'https://assets.isupfactory.com/site/products/2026/yoga/yoga-01.avif',
        hue: 150,
      },
      {
        slug: 'sup-jungle-mandala',
        series: 'all-around',
        sku: 'SUP-JM11',
        name: 'Serie Jungle Mandala',
        tagline: 'Heilige tropische geometrie',
        desc: 'Tropische vitaliteit en heilige geometrie — hibiscus, kolibries en mandala-totems in Tiffany-blauw en koraaloranje, ontworpen voor een perfecte symmetrie bij volledige druk.',
        uses: ['Tropisch', 'Kust', 'Designer'],
        for: ['Tropische merken', 'Reizen'],
        specs: "11'0\" × 32\" × 6\" · drop-stitch PVC · 15 PSI · 20 lbs (9.1 kg)",
        artwork: 'Dubbellaags lasergegraveerd EVA + UV-printen + zeefgedrukte rails · geometrie zonder vervorming',
        image: 'https://assets.isupfactory.com/site/products/2026/all-around/all-around-10.avif',
        hue: 28,
      },
      {
        slug: 'sup-leviathan-wake',
        series: 'race',
        sku: 'SUP-LW11',
        name: 'Serie Leviathan Wake',
        tagline: 'De walvis-editie',
        desc: 'Een majestueuze blauwe vinvis-totem met geometrische tribale motieven en minimalistische zwart-wit-golfijnen — voor peddelaars die zich verbonden voelen met de oceaan.',
        uses: ['Oceaan', 'Allround', 'Designer'],
        for: ['Ocean-merken', 'Outdoor-merken'],
        specs: "11'0\" × 32\" × 6\" · drop-stitch PVC · 15 PSI · 20 lbs (9.1 kg)",
        artwork: 'UV-digitaal printen + mechanische embossing · rekbare PVC-inkten op het logo aan de onderkant',
        image: 'https://assets.isupfactory.com/site/products/2026/race/race-01.avif',
        hue: 195,
      },
      {
        slug: 'sup-ocean-voyager',
        series: 'all-around',
        sku: 'SUP-OV11',
        name: 'Serie Ocean Voyager',
        tagline: 'De zeeschildpad-editie',
        desc: 'Een eerbetoon aan de grootste reiziger van de oceaan — geometrisch zeeschildpad-artwork in diep petrol, turkoois en koraaloranje, met een accessoirekit in bijpassende kleuren.',
        uses: ['Touring', 'Oceaan', 'Allround'],
        for: ['Touring-merken', 'Outdoor-merken'],
        specs: "11'0\" × 32\" × 6\" · drop-stitch PVC · 15 PSI · 20 lbs (9.1 kg)",
        artwork: 'Meerkleurig EVA-blokwerk + UV-printen · rugzak, pomp en leash in bijpassende kleuren',
        image: 'https://assets.isupfactory.com/site/products/2026/all-around/all-around-12.avif',
        hue: 170,
      },
      {
        slug: 'sup-tropical-breeze',
        series: 'all-around',
        sku: 'SUP-TB11',
        name: 'Serie Tropical Breeze',
        tagline: 'Tropische vakantie-editie',
        desc: 'Een compleet droom-eilandcanvas — zon, kokospalmen en strandtaferelen die van de fijn geïllustreerde neus overvloeien naar abstract EVA-kleurenblokwerk richting de staart.',
        uses: ['Vakantie', 'Lifestyle', 'Kust'],
        for: ['Reismerken', 'Resorts'],
        specs: "11'0\" × 32\" × 6\" · drop-stitch PVC · 15 PSI · 20 lbs (9.1 kg)",
        artwork: 'UV-digitaal printen + uitgestanst EVA-lapwerk · geïllustreerd neuslandschap',
        image: 'https://assets.isupfactory.com/site/products/2026/all-around/all-around-17.avif',
        hue: 330,
      },
      {
        slug: 'sup-rheo-race',
        series: 'race',
        sku: 'SUP-RHEO01',
        name: 'Serie RHEO Race',
        tagline: 'Hybride carbon race-editie',
        desc: 'Opblaasbaar raceboard van elite-niveau met hybride carbonconstructie en een agressieve glijrocker — gebouwd voor wedstrijden, sprinttrainingen en technische banen waar stijfheid en snelheid de uitslag bepalen.',
        uses: ['Wedstrijd', 'Snelheid', 'Training'],
        for: ['Race-teams', 'Coaching'],
        specs: 'Hybride carbonmatrix · glijrocker · gestroomlijnd profiel voor hoge snelheid',
        artwork: 'Hybride opblaasbare carbonconstructie · glijrocker voor hoge prestaties',
        image: 'https://assets.isupfactory.com/site/products/2026/race/race-11.avif',
        hue: 195,
      },
      {
        slug: 'sup-fishing',
        series: 'fishing',
        sku: 'SUP-FSH01',
        name: 'Opblaasbare vis-SUP',
        tagline: 'Vis-editie met catamaranstabiliteit',
        desc: 'Opblaasbare SUP voor de visserij, met een dubbelzijdige luchtkamer (catamaranstijl) voor uitzonderlijke secundaire stabiliteit, hengeldragers, een vismaat op het deck en een versterkte werkromp.',
        uses: ['Vissen', 'Stabiliteit', 'Werk'],
        for: ['Visserijmerken', 'Gidsen'],
        specs: 'Dubbelzijdige luchtkamer · vismaat 10–80 cm · hengeldragers',
        artwork: 'Versterkte werkromp · metalen D-ringen op meerdere punten',
        image: 'https://assets.isupfactory.com/site/products/2026/fishing/fishing-01.avif',
        hue: 210,
      },
      {
        slug: 'sup-mini',
        series: 'kids',
        sku: 'SUP-MINI01',
        name: 'Serie Mini SUP',
        tagline: '3-in-1: kinderen / surf / bodyboard',
        desc: 'Uiterst draagbaar hybride board dat omschakelt tussen een kind-SUP, een opblaasbare golfplank en een bodyboard — met een kort, breed en zeer stabiel profiel en een lekbestendig deck.',
        uses: ['Kinderen', 'Surf', 'Reizen'],
        for: ['Kindermerken', 'Resorts'],
        specs: 'Hybride SUP/surf/bodyboard-geometrie · korte brede romp · lekbestendig deck',
        artwork: 'Multifunctionele hybride geometrie · zeer sterke deklaag',
        image: 'https://assets.isupfactory.com/site/products/2026/mini/mini-01.avif',
        hue: 28,
      },
      {
        slug: 'sup-giant',
        series: 'multi',
        sku: 'SUP-GNT01',
        name: 'Giant SUP — team board voor meerdere personen',
        tagline: 'Teamplatform voor 6–8 personen',
        desc: 'Multipersoons-SUP in groot formaat voor 6–8 personen: romp van 16.4–17 ft, breedte 59–60 inch, dikte 8 inch en een opblaassysteem met twee ventielen, met 8–12 draaghandvatten en een 4+1 vin-systeem.',
        uses: ['Groep', 'Team', 'Vrije tijd'],
        for: ['Resorts', 'Verhuurvloten'],
        specs: "16'4\"–17'0\" × 59\"–60\" × 8\" · 1200–1400 L · 11–15 PSI · 4+1 fins",
        artwork: 'Opblaassysteem met twee ventielen · 8–12 neopreen draaghandvatten · 4+1 vin-systeem',
        image: 'https://assets.isupfactory.com/site/products/2026/giant/giant-03.avif',
        hue: 195,
      },
      {
        slug: 'sup-lure-skiff',
        series: 'fishing',
        sku: 'SUP-LSK01',
        name: 'Utility SUP — Lure Skiff',
        tagline: 'Kunstaasvissen op een extrabreed board van 120 cm',
        desc: 'Extrabreed board van 120 cm voor kunstaasvissen, met een centraal uitsnijvak en onderwatervenster, een draagvermogen van 400 kg en een pontonachtige romp voor stabiel werpen en zittend vissen.',
        uses: ['Vissen', 'Werk', 'Stabiliteit'],
        for: ['Visserijmerken', 'Sportvissers'],
        specs: '350 × 120 × 15 cm · draagvermogen 400 kg · Tri-Fin · onderwatervenster',
        artwork: 'Centraal uitsnijvak · transparant onderwatervenster · pontonromp',
        image: 'https://assets.isupfactory.com/site/products/2026/utility-lure/utility-lure-01.avif',
        hue: 170,
      },
    ],
  },
  sv: {
    kicker: 'Produktplattformar',
    title: 'SUP-plattformar Tillgängliga För Anpassning',
    sub: 'Varje serie är en tillverkningsplattform — välj en utgångspunkt så anpassar vi form, grafik och specifikationer efter din produkt.',
    items: [
      {
        slug: 'sup-explorer-11',
        series: 'all-around',
        sku: 'SUP-EX11',
        name: "SUP Explorer 11'",
        tagline: 'Den klassiska allroundbrädan',
        desc: 'Vår mest populära allroundbräda — bred stabilt skrov för nybörjare, smidighet för medelgoda paddlare och portabilitet för alla äventyr. Standardstartpunkt för de flesta nya varumärken.',
        uses: ['Nybörjare', 'Allround', 'Familj'],
        for: ['Nystartade varumärken', 'Uthyrningsflottor'],
        specs: "11'0\" × 32\" × 6\" · drop-stitch PVC · 15 PSI · 19 lbs (8.6 kg)",
        artwork: 'Drop-stitch-kärna i militärklass · förstärkta rails · 2+1 fenor · komplett paket',
        image: 'https://assets.isupfactory.com/site/products/2026/all-around/all-around-03.avif',
        hue: 195,
      },
      {
        slug: 'sup-ocean-pulse',
        series: 'whitewater',
        sku: 'SUP-OP11',
        name: 'Ocean Pulse Series',
        tagline: 'Topografisk vågdesignerupplaga',
        desc: 'Havsvågor förvandlade till topografiska konturer i Tiffanyblått med högprecisions mekanisk prägling och en enhetlig färgmatchad tillbehörsserie.',
        uses: ['Lifestyle', 'Plattvatten', 'Designer'],
        for: ['Lifestyle-varumärken', 'Boutique-resor'],
        specs: "11'0\" × 32\" × 6\" · drop-stitch PVC · 15 PSI · 20 lbs (9.1 kg)",
        artwork: 'UV-digitaltryck + mekanisk värmeprägling · koordinerade tillbehör',
        image: 'https://assets.isupfactory.com/site/products/2026/whitewater/whitewater-01.avif',
        hue: 210,
      },
      {
        slug: 'sup-cheetah-surge',
        series: 'surf',
        sku: 'SUP-CS11',
        name: 'Cheetah Surge Edition',
        tagline: 'Premiumupplaga inspirerad av det vilda',
        desc: 'Rå vild kraft möter konstnärlig elegans — ett gepardmotiv i pastellrosa, teal och korall, byggt med färgbeständig flerfärgs EVA-blockläggning.',
        uses: ['Lifestyle', 'Plattvatten', 'Designer'],
        for: ['Lifestyle-varumärken', 'Social-first-varumärken'],
        specs: "11'0\" × 32\" × 6\" · drop-stitch PVC · 15 PSI · 20 lbs (9.1 kg)",
        artwork: 'Flerfärgs EVA-blockläggning + UV-tryck · delamineringsbeständig uppbyggnad',
        image: 'https://assets.isupfactory.com/site/products/2026/surf/surf-01.avif',
        hue: 28,
      },
      {
        slug: 'sup-medusa-glow',
        series: 'yoga',
        sku: 'SUP-MG11',
        name: 'Medusa Glow Series',
        tagline: 'Manetupplagan',
        desc: 'En undervattensdrömvärld — glödande maneter, sjöstjärnor och korallrev i uppfriskande mintgrönt, med färgbeständig EVA-artwork och exceptionell sidostabilitet för yoga.',
        uses: ['Yoga', 'Tropiskt', 'Lifestyle'],
        for: ['Yogastudior', 'Tropiska varumärken'],
        specs: "11'0\" × 32\" × 6\" · drop-stitch PVC · 15 PSI · 20 lbs (9.1 kg)",
        artwork: 'Flerfärgs EVA-blockläggning + UV-tryck · handtag förankrat i PVC-skalet',
        image: 'https://assets.isupfactory.com/site/products/2026/kids-teens/kids-teens-05.avif',
        hue: 260,
      },
      {
        slug: 'sup-dolphin-wave',
        series: 'touring',
        sku: 'SUP-DW11',
        name: 'Dolphin Wave Series',
        tagline: 'Marin 360°-upplaga',
        desc: 'Lekande delfiner och skiktade marinblåa vågor med CNC-pusselskuren EVA-fogning och screentryckt kontinuerlig railkonst som sveper runt däcket 360°.',
        uses: ['Marint', 'Plattvatten', 'Designer'],
        for: ['Marina varumärken', 'Resorter'],
        specs: "11'0\" × 32\" × 6\" · drop-stitch PVC · 15 PSI · 20 lbs (9.1 kg)",
        artwork: 'CNC-skuren EVA-färgblocksfogning + screentryckta rails · PANTONE TPG-färgmatchning',
        image: 'https://assets.isupfactory.com/site/products/2026/touring/touring-02.avif',
        hue: 210,
      },
      {
        slug: 'sup-flowing-lotus',
        series: 'yoga',
        sku: 'SUP-FL11',
        name: 'Flowing Lotus Series',
        tagline: 'Wellnessupplaga med österländsk konst',
        desc: 'Traditionell österländsk penselföring med lotus-, koi- och trollsländemotiv — laseretsade i tractionpaden så att de aldrig slits ut eller bleknar. Byggd för rofylld paddling och yoga.',
        uses: ['Yoga', 'Meditation', 'Plattvatten'],
        for: ['Yogastudior', 'Wellness-varumärken'],
        specs: "11'0\" × 32\" × 6\" · drop-stitch PVC · 15 PSI · 20 lbs (9.1 kg)",
        artwork: 'Dubbelskikts laseretsad EVA + gradient-UV-tryck · dynamiska färgblockerade fenor',
        image: 'https://assets.isupfactory.com/site/products/2026/yoga/yoga-01.avif',
        hue: 150,
      },
      {
        slug: 'sup-jungle-mandala',
        series: 'all-around',
        sku: 'SUP-JM11',
        name: 'Jungle Mandala Series',
        tagline: 'Tropisk helig geometri',
        desc: 'Tropisk vitalitet möter helig geometri — hibiskus, kolibrier och mandalatotem i Tiffanyblått och korallorange, konstruerade för att vara perfekt symmetriska vid fullt tryck.',
        uses: ['Tropiskt', 'Kust', 'Designer'],
        for: ['Tropiska varumärken', 'Resor'],
        specs: "11'0\" × 32\" × 6\" · drop-stitch PVC · 15 PSI · 20 lbs (9.1 kg)",
        artwork: 'Dubbelskikts laseretsad EVA + UV-tryck + screentryckta rails · förvrängningsfri geometri',
        image: 'https://assets.isupfactory.com/site/products/2026/all-around/all-around-10.avif',
        hue: 28,
      },
      {
        slug: 'sup-leviathan-wake',
        series: 'race',
        sku: 'SUP-LW11',
        name: 'Leviathan Wake Series',
        tagline: 'Valupplagan',
        desc: 'En majestätisk blåval-totem med geometriska stammotiv och minimalistiska svart-vita svalllinjer — för paddlare som känner samhörighet med havet.',
        uses: ['Hav', 'Allround', 'Designer'],
        for: ['Havsvarumärken', 'Outdoor-varumärken'],
        specs: "11'0\" × 32\" × 6\" · drop-stitch PVC · 15 PSI · 20 lbs (9.1 kg)",
        artwork: 'UV-digitaltryck + mekanisk prägling · töjbara PVC-färger på undersidans logotyp',
        image: 'https://assets.isupfactory.com/site/products/2026/race/race-01.avif',
        hue: 195,
      },
      {
        slug: 'sup-ocean-voyager',
        series: 'all-around',
        sku: 'SUP-OV11',
        name: 'Ocean Voyager Series',
        tagline: 'Havssköldpaddans upplaga',
        desc: 'En hyllning till havets yttersta vandrare — geometrisk sköldpadda-artwork i djupt teal, turkos och korallorange, med ett helt koordinerat tillbehörspaket.',
        uses: ['Touring', 'Hav', 'Allround'],
        for: ['Touring-varumärken', 'Outdoor-varumärken'],
        specs: "11'0\" × 32\" × 6\" · drop-stitch PVC · 15 PSI · 20 lbs (9.1 kg)",
        artwork: 'Flerfärgs EVA-blockläggning + UV-tryck · färgmatchad ryggsäck, pump & leash',
        image: 'https://assets.isupfactory.com/site/products/2026/all-around/all-around-12.avif',
        hue: 170,
      },
      {
        slug: 'sup-tropical-breeze',
        series: 'all-around',
        sku: 'SUP-TB11',
        name: 'Tropical Breeze Series',
        tagline: 'Öflyktsupplagan',
        desc: 'En komplett semesterduk — solsken, kokoslundar och strandscener som flyter från en mikroillustrerad nos till abstrakt EVA-färgblockering mot stjärten.',
        uses: ['Semester', 'Lifestyle', 'Kust'],
        for: ['Resevarumärken', 'Resorter'],
        specs: "11'0\" × 32\" × 6\" · drop-stitch PVC · 15 PSI · 20 lbs (9.1 kg)",
        artwork: 'UV-digitaltryck + die-cut EVA-lappverk · illustrerat noslandskap',
        image: 'https://assets.isupfactory.com/site/products/2026/all-around/all-around-17.avif',
        hue: 330,
      },
      {
        slug: 'sup-rheo-race',
        series: 'race',
        sku: 'SUP-RHEO01',
        name: 'RHEO Race Series',
        tagline: 'Raceupplaga i kolhybrid',
        desc: 'Uppblåsbart raceboard i elitklass med kolhybridkonstruktion och en aggressiv gliderocker — byggt för tävling, sprintträning och tekniska banor där styvhet och hastighet avgör resultatet.',
        uses: ['Racing', 'Hastighet', 'Träning'],
        for: ['Racelag', 'Coaching'],
        specs: 'Kolhybridmatris · gliderocker · strömlinjeformad höghastighetsprofil',
        artwork: 'Uppblåsbar kolhybridkonstruktion · prestandagliderocker',
        image: 'https://assets.isupfactory.com/site/products/2026/race/race-11.avif',
        hue: 195,
      },
      {
        slug: 'sup-fishing',
        series: 'fishing',
        sku: 'SUP-FSH01',
        name: 'Uppblåsbar fiske-SUP',
        tagline: 'Fiskeupplaga med katamaranstabilitet',
        desc: 'Fiskeanpassad uppblåsbar SUP med dubbelsidig luftkammare (katamaranstil) för exceptionell sekundärstabilitet, spöhållarfästen, en fisklinjal på däcket och ett förstärkt arbetskal.',
        uses: ['Fiske', 'Stabilitet', 'Arbete'],
        for: ['Fiskevarumärken', 'Guider'],
        specs: 'Dubbelsidig luftkammare · fisklinjal 10–80 cm · spöhållarfästen',
        artwork: 'Förstärkt arbetskal · D-ringar i metall på flera punkter',
        image: 'https://assets.isupfactory.com/site/products/2026/fishing/fishing-01.avif',
        hue: 210,
      },
      {
        slug: 'sup-mini',
        series: 'kids',
        sku: 'SUP-MINI01',
        name: 'Mini SUP Series',
        tagline: '3-i-1: barn / surf / bodyboard',
        desc: 'Ultraportabel hybridbräda som växlar mellan en barn-SUP, en uppblåsbar surfbräda och en bodyboard — med en kort, bred och mycket stabil profil och ett punkteringsbeständigt däck.',
        uses: ['Barn', 'Surf', 'Resor'],
        for: ['Barnvarumärken', 'Resorter'],
        specs: 'Hybridgeometri SUP / surf / bodyboard · kort brett skrov · punkteringsbeständigt däck',
        artwork: 'Mångfunktionell hybridgeometri · tåligt däckmaterial',
        image: 'https://assets.isupfactory.com/site/products/2026/mini/mini-01.avif',
        hue: 28,
      },
      {
        slug: 'sup-giant',
        series: 'multi',
        sku: 'SUP-GNT01',
        name: 'Giant SUP — Flerpersoners team board',
        tagline: 'Teamplattform för 6–8 deltagare',
        desc: 'Flerpersoners-SUP i storformat för 6–8 deltagare: skrov på 16,4–17 fot, 59–60 tum brett och 8 tum tjockt, med uppblåsning via dubbla ventiler, 8–12 bärhandtag och ett 4+1-fensystem.',
        uses: ['Grupp', 'Team', 'Fritid'],
        for: ['Resorter', 'Uthyrningsflottor'],
        specs: "16'4\"–17'0\" × 59\"–60\" × 8\" · 1200–1400 L · 11–15 PSI · 4+1 fenor",
        artwork: 'Uppblåsning via dubbla ventiler · 8–12 bärhandtag i neopren · 4+1-fensystem',
        image: 'https://assets.isupfactory.com/site/products/2026/giant/giant-03.avif',
        hue: 195,
      },
      {
        slug: 'sup-lure-skiff',
        series: 'fishing',
        sku: 'SUP-LSK01',
        name: 'Utility SUP — Lure Skiff',
        tagline: 'Spinnfiske på ultrabreda 120 cm',
        desc: 'Ultrabred spinnfiskebräda på 120 cm med ett centralt urtagningsfack och undervattensfönster, 400 kg lastkapacitet och ett pontonliknande skrov för stensäkert kast och sittande fiske.',
        uses: ['Fiske', 'Arbete', 'Stabilitet'],
        for: ['Fiskevarumärken', 'Sportfiskare'],
        specs: '350 × 120 × 15 cm · 400 kg last · tri-fen · undervattensfönster',
        artwork: 'Centralt urtagningsfack · transparent undervattensfönster · pontonskrov',
        image: 'https://assets.isupfactory.com/site/products/2026/utility-lure/utility-lure-01.avif',
        hue: 170,
      },
    ],
  },
  no: {
    kicker: 'Produktplattformer',
    title: 'SUP-plattformer tilgjengelig for tilpasning',
    sub: 'Hver serie er en produksjonsplattform — velg en utgångspunkt så tilpasser vi form, grafikk og spesifikasjoner til produktet ditt.',
    items: [
      {
        slug: 'sup-explorer-11',
        series: 'all-around',
        sku: 'SUP-EX11',
        name: "SUP Explorer 11'",
        tagline: 'Den klassiske allround-plattformen',
        desc: 'Vår mest populære allround-brett — bredt og stabilt skrov for nybegynnere, smidighet for middels padlere og portabilitet for alle eventyr. Standardstartpunkt for de fleste nye merkene.',
        uses: ['Nybegynnere', 'Allround', 'Familie'],
        for: ['Nye merker', 'Utleieflåter'],
        specs: "11'0\" × 32\" × 6\" · drop-stitch PVC · 15 PSI · 19 lbs (8.6 kg)",
        artwork: 'Drop-stitch-kjerne i militærklasse · forsterkede rails · 2+1 finner · komplett pakke',
        image: 'https://assets.isupfactory.com/site/products/2026/all-around/all-around-03.avif',
        hue: 195,
      },
      {
        slug: 'sup-ocean-pulse',
        series: 'whitewater',
        sku: 'SUP-OP11',
        name: 'Ocean Pulse Series',
        tagline: 'Topografisk bølgedesignutgave',
        desc: 'Havbølger omskapt til topografiske konturer i Tiffanyblått, med høypresisjons mekanisk preging og et enhetlig, fargetilpasset tilbehørssortiment.',
        uses: ['Lifestyle', 'Flatt vann', 'Design'],
        for: ['Lifestyle-merker', 'Boutique-resorter'],
        specs: "11'0\" × 32\" × 6\" · drop-stitch PVC · 15 PSI · 20 lbs (9.1 kg)",
        artwork: 'UV-digitaltrykk + mekanisk varmepreging · koordinerte tilbehør',
        image: 'https://assets.isupfactory.com/site/products/2026/whitewater/whitewater-01.avif',
        hue: 210,
      },
      {
        slug: 'sup-cheetah-surge',
        series: 'surf',
        sku: 'SUP-CS11',
        name: 'Cheetah Surge Edition',
        tagline: 'Premiumutgave inspirert av ville natur',
        desc: 'Rå kraft møter kunstnerisk eleganse — et gepardmotiv i pastellrosa, teal og korall, bygget med fargeklar flerfargers EVA-blokklegning.',
        uses: ['Lifestyle', 'Flatt vann', 'Design'],
        for: ['Lifestyle-merker', 'Social-first-merker'],
        specs: "11'0\" × 32\" × 6\" · drop-stitch PVC · 15 PSI · 20 lbs (9.1 kg)",
        artwork: 'Flerfargers EVA-blokklegning + UV-trykk · delamineringsbestandig oppbygning',
        image: 'https://assets.isupfactory.com/site/products/2026/surf/surf-01.avif',
        hue: 28,
      },
      {
        slug: 'sup-medusa-glow',
        series: 'yoga',
        sku: 'SUP-MG11',
        name: 'Medusa Glow Series',
        tagline: 'Manetutgaven',
        desc: 'En undervannsdrømverden — lysende maneter, sjøstjerner og korallrev i forfriskende mintgrønn, med fargeklar EVA-grafikk og eksepsjonell sidestabilitet for yoga.',
        uses: ['Yoga', 'Tropisk', 'Lifestyle'],
        for: ['Yogastudioer', 'Tropiske merker'],
        specs: "11'0\" × 32\" × 6\" · drop-stitch PVC · 15 PSI · 20 lbs (9.1 kg)",
        artwork: 'Flerfargers EVA-blokklegning + UV-trykk · håndtak forankret i PVC-skallet',
        image: 'https://assets.isupfactory.com/site/products/2026/kids-teens/kids-teens-05.avif',
        hue: 260,
      },
      {
        slug: 'sup-dolphin-wave',
        series: 'touring',
        sku: 'SUP-DW11',
        name: 'Dolphin Wave Series',
        tagline: 'Marin 360°-utgave',
        desc: 'Lekende delfiner og lagdelte marineblå bølger med CNC-frest EVA-sveis og sildetrykt kontinuerlig railkunst som strekker seg 360° rundt dekket.',
        uses: ['Marint', 'Flatt vann', 'Design'],
        for: ['Marinemerker', 'Resorter'],
        specs: "11'0\" × 32\" × 6\" · drop-stitch PVC · 15 PSI · 20 lbs (9.1 kg)",
        artwork: 'CNC-frest EVA-fargeblokksveis + sildetrykte rails · PANTONE TPG-fargematching',
        image: 'https://assets.isupfactory.com/site/products/2026/touring/touring-02.avif',
        hue: 210,
      },
      {
        slug: 'sup-flowing-lotus',
        series: 'yoga',
        sku: 'SUP-FL11',
        name: 'Flowing Lotus Series',
        tagline: 'Wellnessutgave med østlig kunst',
        desc: 'Tradisjonell østlig penselstrøk med lotus-, koï- og trollvingemotiv — laseretset inn i traction-puten slik at de aldri slites ut eller falmer. Bygget for rolig padling og yoga.',
        uses: ['Yoga', 'Meditasjon', 'Flatt vann'],
        for: ['Yogastudioer', 'Wellness-merker'],
        specs: "11'0\" × 32\" × 6\" · drop-stitch PVC · 15 PSI · 20 lbs (9.1 kg)",
        artwork: 'Dobbeltlags laseretset EVA + gradient-UV-trykk · dynamiske fargeblokkerte finner',
        image: 'https://assets.isupfactory.com/site/products/2026/yoga/yoga-01.avif',
        hue: 150,
      },
      {
        slug: 'sup-jungle-mandala',
        series: 'all-around',
        sku: 'SUP-JM11',
        name: 'Jungle Mandala Series',
        tagline: 'Tropisk hellig geometri',
        desc: 'Tropisk vitalitet møter hellig geometri — hibiskus, kolibrier og mandala-totem i Tiffanyblått og koralloransje, konstruert for å være perfekt symmetriske ved fullt trykk.',
        uses: ['Tropisk', 'Kyst', 'Design'],
        for: ['Tropiske merker', 'Reisemål'],
        specs: "11'0\" × 32\" × 6\" · drop-stitch PVC · 15 PSI · 20 lbs (9.1 kg)",
        artwork: 'Dobbeltlags laseretset EVA + UV-trykk + sildetrykte rails · forvrengningsfri geometri',
        image: 'https://assets.isupfactory.com/site/products/2026/all-around/all-around-10.avif',
        hue: 28,
      },
      {
        slug: 'sup-leviathan-wake',
        series: 'race',
        sku: 'SUP-LW11',
        name: 'Leviathan Wake Series',
        tagline: 'Hvalutgaven',
        desc: 'Et majestetisk blåhval-totem med geometriske stammemotiv og minimalistiske svarthvite bølgelinjer — for padlere som føler tilhørighet til havet.',
        uses: ['Hav', 'Allround', 'Design'],
        for: ['Havemerker', 'Outdoor-merker'],
        specs: "11'0\" × 32\" × 6\" · drop-stitch PVC · 15 PSI · 20 lbs (9.1 kg)",
        artwork: 'UV-digitaltrykk + mekanisk preging · strekkbare PVC-farger på logotypen på undersiden',
        image: 'https://assets.isupfactory.com/site/products/2026/race/race-01.avif',
        hue: 195,
      },
      {
        slug: 'sup-ocean-voyager',
        series: 'all-around',
        sku: 'SUP-OV11',
        name: 'Ocean Voyager Series',
        tagline: 'Havskildepaddens utgave',
        desc: 'En hyllest til havets ytterste vandrere — geometrisk skøytdadde-grafikk i dypt teal, turkist og koralloransje, med et fullt koordinert tilbehørspakke.',
        uses: ['Touring', 'Hav', 'Allround'],
        for: ['Touring-merker', 'Outdoor-merker'],
        specs: "11'0\" × 32\" × 6\" · drop-stitch PVC · 15 PSI · 20 lbs (9.1 kg)",
        artwork: 'Flerfargers EVA-blokklegning + UV-trykk · fargetilpasset ryggsekk, pumpe og leash',
        image: 'https://assets.isupfactory.com/site/products/2026/all-around/all-around-12.avif',
        hue: 170,
      },
      {
        slug: 'sup-tropical-breeze',
        series: 'all-around',
        sku: 'SUP-TB11',
        name: 'Tropical Breeze Series',
        tagline: 'Øyutgaven',
        desc: 'En komplett ferieduk — solskinn, kokospalmer og strandscener som flyter fra en mikroillustrert nese til abstrakt EVA-fargeblokkering mot stjerten.',
        uses: ['Ferie', 'Lifestyle', 'Kyst'],
        for: ['Reisemerker', 'Resorter'],
        specs: "11'0\" × 32\" × 6\" · drop-stitch PVC · 15 PSI · 20 lbs (9.1 kg)",
        artwork: 'UV-digitaltrykk + die-cut EVA-lapper · illustrert neslandskap',
        image: 'https://assets.isupfactory.com/site/products/2026/all-around/all-around-17.avif',
        hue: 330,
      },
      {
        slug: 'sup-rheo-race',
        series: 'race',
        sku: 'SUP-RHEO01',
        name: 'RHEO Race Series',
        tagline: 'Raceutgave i karbonhybrid',
        desc: 'Oppblåsbart raceboard i eliteklasse med karbonhybridkonstruksjon og en aggressiv gliderocker — bygget for konkurranse, sprinttrening og tekniske baner der stivhet og hastighet avgjør resultatet.',
        uses: ['Racing', 'Fart', 'Trening'],
        for: ['Racelag', 'Coaching'],
        specs: 'Karbonhybridmatrise · gliderocker · strømlinjeformet høyhastighetsprofil',
        artwork: 'Oppblåsbar karbonhybridkonstruksjon · prestasjonsgliderocker',
        image: 'https://assets.isupfactory.com/site/products/2026/race/race-11.avif',
        hue: 195,
      },
      {
        slug: 'sup-fishing',
        series: 'fishing',
        sku: 'SUP-FSH01',
        name: 'Oppblåsbar fiskes-SUP',
        tagline: 'Fiskeutgave med katamaranstabilitet',
        desc: 'Fisketilpasset oppblåsbar SUP med tosidig luftkammer (katamaranstil) for eksepsjonell sekundærstabilitet, stangholderfester, en fiskelinjal på dekket og en forsterket arbeidsbøtte.',
        uses: ['Fiske', 'Stabilitet', 'Arbeid'],
        for: ['Fiskemerker', 'Guider'],
        specs: 'Tosidig luftkammer · fiskelinjal 10–80 cm · stangholderfester',
        artwork: 'Forsterket arbeidsbøtte · metall-D-ringer på flere punkter',
        image: 'https://assets.isupfactory.com/site/products/2026/fishing/fishing-01.avif',
        hue: 210,
      },
      {
        slug: 'sup-mini',
        series: 'kids',
        sku: 'SUP-MINI01',
        name: 'Mini SUP Series',
        tagline: '3-i-1: barn / surf / bodyboard',
        desc: 'Ultraportabelt hybridbrett som veksler mellom en barn-SUP, en oppblåsbar surfebrett og en bodyboard — med en kort, bred og svært stabil profil og et punkteringsbestandig dekk.',
        uses: ['Barn', 'Surf', 'Reiser'],
        for: ['Barnemerker', 'Resorter'],
        specs: 'Hybridgeometri SUP / surf / bodyboard · kort bredt skrov · punkteringsbestandig dekk',
        artwork: 'Flerfunksjonell hybridgeometri · slitesterkt dekkmateriale',
        image: 'https://assets.isupfactory.com/site/products/2026/mini/mini-01.avif',
        hue: 28,
      },
      {
        slug: 'sup-giant',
        series: 'multi',
        sku: 'SUP-GNT01',
        name: 'Giant SUP — flerpersoners teambrett',
        tagline: 'Teamplattform for 6–8 deltakere',
        desc: 'Flerpersoners-SUP i stort format for 6–8 deltakere: skrov på 16,4–17 fot, 59–60 tommer bredt og 8 tommer tykt, med oppblåsing via doble ventiler, 8–12 bærehåndtak og et 4+1-finnersystem.',
        uses: ['Gruppe', 'Team', 'Fritid'],
        for: ['Resorter', 'Utleieflåter'],
        specs: "16'4\"–17'0\" × 59\"–60\" × 8\" · 1200–1400 L · 11–15 PSI · 4+1 finner",
        artwork: 'Oppblåsing via doble ventiler · 8–12 bærehåndtak i neopren · 4+1-finnersystem',
        image: 'https://assets.isupfactory.com/site/products/2026/giant/giant-03.avif',
        hue: 195,
      },
      {
        slug: 'sup-lure-skiff',
        series: 'fishing',
        sku: 'SUP-LSK01',
        name: 'Utility SUP — Lure Skiff',
        tagline: 'Spinnfiske på ultrabredt 120 cm',
        desc: 'Ultrabredt spinnfiskebrett på 120 cm med sentralt opptaksrom og undervannsvindu, 400 kg bæreevne og et pontonglignende skrov for kastsikker kasting og sittende fiske.',
        uses: ['Fiske', 'Arbeid', 'Stabilitet'],
        for: ['Fiskemerker', 'Sportfiskere'],
        specs: '350 × 120 × 15 cm · 400 kg last · tri-finne · undervannsvindu',
        artwork: 'Sentralt opptaksrom · transparent undervannsvindu · pontongskrov',
        image: 'https://assets.isupfactory.com/site/products/2026/utility-lure/utility-lure-01.avif',
        hue: 170,
      },
    ],
  },
  pl: {
    kicker: 'Platformy produktowe',
    title: 'Platformy SUP dostępne do personalizacji',
    sub: 'Każda seria to platforma produkcyjna — wybierz punkt wyjścia, a my dostosujemy kształt, grafikę i specyfikację do Twojego produktu.',
    items: [
      {
        slug: 'sup-explorer-11',
        series: 'all-around',
        sku: 'SUP-EX11',
        name: "SUP Explorer 11'",
        tagline: 'Klasyczna platforma allround',
        desc: 'Nasza najpopularniejsza deska allround — szeroki i stabilny kadłub dla początkujących, zwrotność dla osób średnio zaawansowanych i łatwy transport na każdą przygodę. Domyślny punkt wyjścia dla większości nowych marek.',
        uses: ['Początkujący', 'Allround', 'Rodzina'],
        for: ['Nowe marki', 'Floty wynajmu'],
        specs: "11'0\" × 32\" × 6\" · drop-stitch PVC · 15 PSI · 19 lbs (8.6 kg)",
        artwork: 'Rdzeń drop-stitch w klasie wojskowej · wzmocnione listwy krawędziowe · płetwy 2+1 · kompletny zestaw',
        image: 'https://assets.isupfactory.com/site/products/2026/all-around/all-around-03.avif',
        hue: 195,
      },
      {
        slug: 'sup-ocean-pulse',
        series: 'whitewater',
        sku: 'SUP-OP11',
        name: 'Ocean Pulse Series',
        tagline: 'Edycja z topograficznymi falami',
        desc: 'Fale oceanu zamienione w topograficzne kontury w błękicie Tiffany, z precyzyjnym tłoczeniem mechanicznym i spójnym, dopasowanym kolorystycznie zestawem akcesoriów.',
        uses: ['Lifestyle', 'Spokojne wody', 'Design'],
        for: ['Marki lifestyle', 'Kurorty butikowe'],
        specs: "11'0\" × 32\" × 6\" · drop-stitch PVC · 15 PSI · 20 lbs (9.1 kg)",
        artwork: 'Cyfrowy druk UV + mechaniczne tłoczenie termiczne · skoordynowane akcesoria',
        image: 'https://assets.isupfactory.com/site/products/2026/whitewater/whitewater-01.avif',
        hue: 210,
      },
      {
        slug: 'sup-cheetah-surge',
        series: 'surf',
        sku: 'SUP-CS11',
        name: 'Cheetah Surge Edition',
        tagline: 'Edycja premium inspirowana dziką naturą',
        desc: 'Surowa moc dzikiego świata spotyka artystyczną elegancję — motyw geparda w pastelowym różu, turkusie i koralu, wykonany z odpornej na blaknięcie wielokolorowej mozaiki EVA.',
        uses: ['Lifestyle', 'Spokojne wody', 'Design'],
        for: ['Marki lifestyle', 'Marky nastawione na social media'],
        specs: "11'0\" × 32\" × 6\" · drop-stitch PVC · 15 PSI · 20 lbs (9.1 kg)",
        artwork: 'Wielokolorowa mozaika EVA + druk UV · konstrukcja odporna na rozwarstwianie',
        image: 'https://assets.isupfactory.com/site/products/2026/surf/surf-01.avif',
        hue: 28,
      },
      {
        slug: 'sup-medusa-glow',
        series: 'yoga',
        sku: 'SUP-MG11',
        name: 'Medusa Glow Series',
        tagline: 'Edycja meduza',
        desc: 'Podwodny krajobraz marzeń — świecące meduzy, rozgwiazdy i rafy koralowe w orzeźwiającej zieleni miętowej, z grafiką EVA odporną na blaknięcie i wyjątkową stabilnością boczną do jogi.',
        uses: ['Joga', 'Tropiki', 'Lifestyle'],
        for: ['Studia jogi', 'Marki tropikalne'],
        specs: "11'0\" × 32\" × 6\" · drop-stitch PVC · 15 PSI · 20 lbs (9.1 kg)",
        artwork: 'Wielokolorowa mozaika EVA + druk UV · uchwyt zakotwiczony w kadłubie z PVC',
        image: 'https://assets.isupfactory.com/site/products/2026/kids-teens/kids-teens-05.avif',
        hue: 260,
      },
      {
        slug: 'sup-dolphin-wave',
        series: 'touring',
        sku: 'SUP-DW11',
        name: 'Dolphin Wave Series',
        tagline: 'Edycja morska 360°',
        desc: 'Bawiące się delfiny i warstwowe fale w głębokim błękicie morskim, z wycinanym CNC spawem EVA i sitodrukiem na listwach krawędziowych biegnącym 360° wokół pokładu.',
        uses: ['Morskie', 'Spokojne wody', 'Design'],
        for: ['Marki morskie', 'Ośrodki wypoczynkowe'],
        specs: "11'0\" × 32\" × 6\" · drop-stitch PVC · 15 PSI · 20 lbs (9.1 kg)",
        artwork: 'Spaw EVA w kolorowe bloki wycinany CNC + sitodruk na listwach krawędziowych · dopasowanie kolorów PANTONE TPG',
        image: 'https://assets.isupfactory.com/site/products/2026/touring/touring-02.avif',
        hue: 210,
      },
      {
        slug: 'sup-flowing-lotus',
        series: 'yoga',
        sku: 'SUP-FL11',
        name: 'Flowing Lotus Series',
        tagline: 'Edycja wellness z motywem wschodnim',
        desc: 'Tradycyjne wschodnie pociągnięcia pędzla z motywami lotosu, koi i ważki — laserowo wytłoczone w nakładce antypoślizgowej, dzięki czemu nigdy się nie zużyją ani nie wyblakną. Zaprojektowana do spokojnego wiosłowania i jogi.',
        uses: ['Joga', 'Medytacja', 'Spokojne wody'],
        for: ['Studia jogi', 'Marki wellness'],
        specs: "11'0\" × 32\" × 6\" · drop-stitch PVC · 15 PSI · 20 lbs (9.1 kg)",
        artwork: 'Podwójna warstwa EVA wytłoczona laserowo + gradientowy druk UV · dynamiczne płetwy w kolorowe bloki',
        image: 'https://assets.isupfactory.com/site/products/2026/yoga/yoga-01.avif',
        hue: 150,
      },
      {
        slug: 'sup-jungle-mandala',
        series: 'all-around',
        sku: 'SUP-JM11',
        name: 'Jungle Mandala Series',
        tagline: 'Tropikalna święta geometria',
        desc: 'Tropikalna witalność spotyka świętą geometrię — hibiskusy, kolibry i mandale w błękicie Tiffany i pomarańczu koralowym, skonstruowane tak, by przy pełnym nadruku pozostawały idealnie symetryczne.',
        uses: ['Tropiki', 'Wybrzeże', 'Design'],
        for: ['Marki tropikalne', 'Podróże'],
        specs: "11'0\" × 32\" × 6\" · drop-stitch PVC · 15 PSI · 20 lbs (9.1 kg)",
        artwork: 'Podwójna warstwa EVA wytłoczona laserowo + druk UV + sitodruk na listwach krawędziowych · geometria bez zniekształceń',
        image: 'https://assets.isupfactory.com/site/products/2026/all-around/all-around-10.avif',
        hue: 28,
      },
      {
        slug: 'sup-leviathan-wake',
        series: 'race',
        sku: 'SUP-LW11',
        name: 'Leviathan Wake Series',
        tagline: 'Edycja wieloryb',
        desc: 'Majestatyczny totem błękitnego wieloryba z geometrycznymi motywami klanowymi i minimalistycznymi czarno-białymi liniami fal — dla osób, które czują przynależność do morza.',
        uses: ['Morze', 'Allround', 'Design'],
        for: ['Marki morskie', 'Marki outdoor'],
        specs: "11'0\" × 32\" × 6\" · drop-stitch PVC · 15 PSI · 20 lbs (9.1 kg)",
        artwork: 'Cyfrowy druk UV + tłoczenie mechaniczne · rozciągliwe farby PVC w logo na spodzie',
        image: 'https://assets.isupfactory.com/site/products/2026/race/race-01.avif',
        hue: 195,
      },
      {
        slug: 'sup-ocean-voyager',
        series: 'all-around',
        sku: 'SUP-OV11',
        name: 'Ocean Voyager Series',
        tagline: 'Edycja żółwia morskiego',
        desc: 'Hołd dla najdalszego wędrowca oceanu — geometryczna grafika żółwia morskiego w głębokim turkusie, błękicie tureckim i pomarańczu koralowym, z w pełni skoordynowanym pakietem akcesoriów.',
        uses: ['Touring', 'Morze', 'Allround'],
        for: ['Marki touringowe', 'Marki outdoor'],
        specs: "11'0\" × 32\" × 6\" · drop-stitch PVC · 15 PSI · 20 lbs (9.1 kg)",
        artwork: 'Wielokolorowa mozaika EVA + druk UV · plecak, pompka i smycz w kolorach marki',
        image: 'https://assets.isupfactory.com/site/products/2026/all-around/all-around-12.avif',
        hue: 170,
      },
      {
        slug: 'sup-tropical-breeze',
        series: 'all-around',
        sku: 'SUP-TB11',
        name: 'Tropical Breeze Series',
        tagline: 'Edycja wyspy',
        desc: 'Kompletny wzór wakacyjny — słońce, palmy kokosowe i plażowe scenerie, przechodzące od mikroilustracji dziobu w abstrakcyjne mozaiki EVA przy ogonie.',
        uses: ['Wakacje', 'Lifestyle', 'Wybrzeże'],
        for: ['Marki podróżnicze', 'Ośrodki wypoczynkowe'],
        specs: "11'0\" × 32\" × 6\" · drop-stitch PVC · 15 PSI · 20 lbs (9.1 kg)",
        artwork: 'Cyfrowy druk UV + wycinane nakładki EVA · ilustrowany krajobraz na dziobie',
        image: 'https://assets.isupfactory.com/site/products/2026/all-around/all-around-17.avif',
        hue: 330,
      },
      {
        slug: 'sup-rheo-race',
        series: 'race',
        sku: 'SUP-RHEO01',
        name: 'RHEO Race Series',
        tagline: 'Edycja wyścigowa w hybrydzie karbonowej',
        desc: 'Nadmuchiwana deska wyścigowa klasy elitarniej z konstrukcją hybrydową z karbonu i agresywnym glide rockerem — zbudowana do rywalizacji, treningu sprintu i technicznych torów, gdzie sztywność i prędkość decydują o wyniku.',
        uses: ['Wyścigi', 'Prędkość', 'Trening'],
        for: ['Zespoły wyścigowe', 'Trenerzy'],
        specs: 'Matryca hybrydowa z karbonu · glide rocker · opływowy profil wysokoobrotowy',
        artwork: 'Nadmuchiwana konstrukcja hybrydowa z karbonu · wyścigowy glide rocker',
        image: 'https://assets.isupfactory.com/site/products/2026/race/race-11.avif',
        hue: 195,
      },
      {
        slug: 'sup-fishing',
        series: 'fishing',
        sku: 'SUP-FSH01',
        name: 'Nadmuchiwana deska SUP do wędkowania',
        tagline: 'Edycja wędkarska ze stabilnością katamarana',
        desc: 'Dedykowana nadmuchiwana SUP do wędkowania z dwustronną komorą powietrzną (w stylu katamarana) dla wyjątkowej stabilności wtórnej, uchwytami na wędki, linijką rybną na pokładzie i wzmocnionym kadłubem roboczym.',
        uses: ['Wędkarstwo', 'Stabilność', 'Praca'],
        for: ['Marki wędkarskie', 'Przewodnicy'],
        specs: 'Dwustronna komora powietrzna · linijka rybia 10–80 cm · uchwyty na wędki',
        artwork: 'Wzmocniony kadłub roboczy · metalowe pierścienie D w wielu punktach',
        image: 'https://assets.isupfactory.com/site/products/2026/fishing/fishing-01.avif',
        hue: 210,
      },
      {
        slug: 'sup-mini',
        series: 'kids',
        sku: 'SUP-MINI01',
        name: 'Mini SUP Series',
        tagline: '3 w 1: dzieci / surf / bodyboard',
        desc: 'Ultraportabilna deska hybrydowa, która zmienia się w deskę SUP dla dzieci, nadmuchiwany surfboard i bodyboard — z krótkim, szerokim i bardzo stabilnym profilem oraz pokładem odpornym na przebicia.',
        uses: ['Dzieci', 'Surf', 'Podróże'],
        for: ['Marki dziecięce', 'Ośrodki wypoczynkowe'],
        specs: 'Geometria hybrydowa SUP / surf / bodyboard · krótki szeroki kadłub · pokład odporny na przebicia',
        artwork: 'Wielofunkcyjna geometria hybrydowa · wytrzymały materiał pokładu',
        image: 'https://assets.isupfactory.com/site/products/2026/mini/mini-01.avif',
        hue: 28,
      },
      {
        slug: 'sup-giant',
        series: 'multi',
        sku: 'SUP-GNT01',
        name: 'Giant SUP — deska zespołowa dla wielu osób',
        tagline: 'Platforma zespołowa dla 6–8 osób',
        desc: 'Nadmuchiwana SUP dużego formatu dla 6–8 osób: kadłub 16.4–17 stóp, szerokość 59–60 cali, grubość 8 cali i nadmuchiwanie przez dwa zawory, z 8–12 uchwytami do przenoszenia i systemem płetw 4+1.',
        uses: ['Grupa', 'Zespół', 'Wypoczynek'],
        for: ['Ośrodki wypoczynkowe', 'Floty wynajmu'],
        specs: "16'4\"–17'0\" × 59\"–60\" × 8\" · 1200–1400 L · 11–15 PSI · 4+1 fins",
        artwork: 'Nadmuchiwanie przez dwa zawory · 8–12 uchwytów do przenosienia z neoprenu · system płetw 4+1',
        image: 'https://assets.isupfactory.com/site/products/2026/giant/giant-03.avif',
        hue: 195,
      },
      {
        slug: 'sup-lure-skiff',
        series: 'fishing',
        sku: 'SUP-LSK01',
        name: 'Utility SUP — Lure Skiff',
        tagline: 'Spinning na ultraszerokiej desce 120 cm',
        desc: 'Ultraszeroka deska do spiningu o szerokości 120 cm z centralnym schowkiem i podwodnym oknem obserwacyjnym, nośnością 400 kg i kadłubem przypominającym ponton, zapewniającą pewne zarzucanie i wędkowanie w pozycji siedzącej.',
        uses: ['Wędkarstwo', 'Praca', 'Stabilność'],
        for: ['Marki wędkarskie', 'Wędkarze'],
        specs: '350 × 120 × 15 cm · ładunek 400 kg · trzy płetwy · okno obserwacyjne',
        artwork: 'Centralny schowek · przezroczyste podwodne okno obserwacyjne · kadłub pontonowy',
        image: 'https://assets.isupfactory.com/site/products/2026/utility-lure/utility-lure-01.avif',
        hue: 170,
      },
    ],
  },
}

/* ─────────────────────────── video showcases ─────────────────────────── */

export interface VideoStep {
  t: string
  d?: string
}

export interface VideoShowcaseContent {
  badge: string
  title: string
  sub: string
  points: VideoStep[]
}

export const videoShowcase: Localized<{
  launch: VideoShowcaseContent
  process: VideoShowcaseContent
}> = {
  en: {
    launch: {
      badge: 'Brand Launch',
      title: 'Dreaming of launching your own SUP brand?',
      sub: 'You don\'t need your own factory to launch a SUP brand. We are the manufacturing partner behind your line: specification, engineering, sampling, QC, packaging and export-ready production — all under one contract with one accountable team.',
      points: [
        { t: 'Full OEM/ODM Concept-to-Production', d: 'Custom board graphics, logo integration, deck pads, and custom packaging.' },
        { t: 'Low MOQ Flexible Launch', d: 'Small-batch support so you can test the market without tying up massive capital.' },
        { t: 'Complete Accessory Bundles', d: 'High-performance paddles, pumps, leashes, and travel bags ready to go.' },
        { t: 'Enterprise-Grade Quality & Certification', d: 'Strict QA/QC protocols, pressure testing, and global export compliance.' },
      ],
    },
    process: {
      badge: 'Inside the Factory',
      title: 'How an inflatable SUP is born',
      sub: 'Ever wondered how a soft board turns rock hard? Five steps inside our plant.',
      points: [
        { t: 'Precision Cutting & UV Printing' },
        { t: '100% Air-Tight Heat Welding' },
        { t: 'Non-Slip Deck Pad' },
        { t: 'Hardware & Bungee Cords' },
        { t: 'Deflate, Fold & Pack' },
      ],
    },
  },
  es: {
    launch: {
      badge: 'Lanzamiento de marca',
      title: '¿Sueñas con lanzar tu propia marca de SUP?',
      sub: 'No necesitas tu propia fábrica para lanzar una marca de SUP. Somos el socio de fabricación detrás de tu línea: especificación, ingeniería, muestras, control de calidad, packaging y producción lista para exportar — todo bajo un solo contrato y un solo equipo responsable.',
      points: [
        { t: 'OEM/ODM completo del concepto a la producción', d: 'Gráficos personalizados, integración de logotipo, pads de cubierta y embalaje a medida.' },
        { t: 'Lanzamiento flexible con MOQ bajo', d: 'Producción de pequeños lotes para testear el mercado sin inmovilizar capital.' },
        { t: 'Paquetes de accesorios completos', d: 'Palas, bombas, correas y bolsas de viaje de alto rendimiento listas para enviar.' },
        { t: 'Calidad y certificación de nivel empresarial', d: 'Protocolos estrictos de QA/QC, pruebas de presión y cumplimiento de exportación global.' },
      ],
    },
    process: {
      badge: 'Dentro de la fábrica',
      title: 'Cómo nace un SUP hinchable',
      sub: '¿Alguna vez te preguntaste cómo una tabla blanda se vuelve rígida? Cinco pasos en nuestra planta.',
      points: [
        { t: 'Corte de precisión e impresión UV' },
        { t: 'Soldadura térmica 100% hermética' },
        { t: 'Pad de cubierta antideslizante' },
        { t: 'Hardware y cuerdas elásticas' },
        { t: 'Desinflar, plegar y empacar' },
      ],
    },
  },
  fr: {
    launch: {
      badge: 'Lancement de marque',
      title: 'Vous rêvez de lancer votre propre marque de SUP ?',
      sub: 'Pas besoin de posséder votre propre usine pour lancer une marque de SUP. Nous sommes le partenaire de fabrication derrière votre gamme : spécification, ingénierie, échantillonnage, contrôle qualité, packaging et production prête pour l\'export — le tout sous un seul contrat et une seule équipe responsable.',
      points: [
        { t: 'OEM/ODM complet, du concept à la production', d: 'Graphismes personnalisés, intégration du logo, pads de pont et packaging sur mesure.' },
        { t: 'Lancement flexible avec MOQ réduit', d: 'Soutien aux petits lots afin de tester le marché sans immobiliser de capitaux importants.' },
        { t: 'Packs d\'accessoires complets', d: 'Pagaies, pompes, leashs et sacs de voyage haute performance, prêts à expédier.' },
        { t: 'Qualité et certification de niveau entreprise', d: 'Protocoles stricts de QA/QC, tests de pression et conformité à l\'export mondial.' },
      ],
    },
    process: {
      badge: 'Au cœur de l\'usine',
      title: 'Comment naît un SUP gonflable',
      sub: 'Vous êtes-vous déjà demandé comment une planche souple devient rigide ? Cinq étapes au sein de notre usine.',
      points: [
        { t: 'Découpe de précision et impression UV' },
        { t: 'Soudure thermique 100 % étanche' },
        { t: 'Pad de pont antidérapant' },
        { t: 'Quincaillerie et cordons élastiques' },
        { t: 'Dégonflage, pliage et emballage' },
      ],
    },
  },
  de: {
    launch: {
      badge: 'Markenlaunch',
      title: 'Träumen Sie davon, Ihre eigene SUP-Marke auf den Markt zu bringen?',
      sub: 'Sie brauchen keine eigene Fabrik, um eine SUP-Marke aufzubauen. Wir sind der Fertigungspartner hinter Ihrer Linie: Spezifikation, Engineering, Bemusterung, Qualitätskontrolle, Verpackung und exportfertige Produktion — alles unter einem Vertrag mit einem verantwortlichen Team.',
      points: [
        { t: 'Vollständiger OEM/ODM-Weg vom Konzept zur Produktion', d: 'Individuelle Boardgrafiken, Logo-Integration, Deckpads und individuelle Verpackung.' },
        { t: 'Flexibler Launch mit niedrigem MOQ', d: 'Kleinserien-Unterstützung, damit Sie den Markt testen können, ohne großes Kapital zu binden.' },
        { t: 'Komplette Accessoire-Bundles', d: 'Leistungsstarke Paddel, Pumpen, Leashes und Reisetaschen, versandfertig gepackt.' },
        { t: 'Qualität & Zertifizierung auf Unternehmensniveau', d: 'Strenge QA/QC-Protokolle, Dichtigkeitstests und globale Exportkonformität.' },
      ],
    },
    process: {
      badge: 'In der Fabrik',
      title: 'Wie ein aufblasbares SUP entsteht',
      sub: 'Haben Sie sich je gefragt, wie aus einem weichen Board ein hartes wird? Fünf Schritte in unserem Werk.',
      points: [
        { t: 'Präzisionszuschnitt & UV-Druck' },
        { t: 'Zu 100 % luftdichtes Heißschweißen' },
        { t: 'Antirutsch-Deckpad' },
        { t: 'Beschläge & Bungee-Seile' },
        { t: 'Entlüften, Falten & Verpacken' },
      ],
    },
  },
  it: {
    launch: {
      badge: 'Lancio del marchio',
      title: 'Sogni di lanciare il tuo marchio SUP?',
      sub: "Non ti serve una fabbrica tutta tua per costruire un marchio SUP. Noi siamo il partner di produzione dietro la tua linea: specifica, ingegneria, campionatura, controllo qualità, imballaggio e produzione pronta per l’export — tutto sotto un unico contratto con un team dedicato.",
      points: [
        { t: 'Percorso OEM/ODM completo dal concept alla produzione', d: 'Grafiche personalizzate, integrazione del logo, deck pad e imballaggio personalizzato.' },
        { t: 'Lancio flessibile con MOQ ridotto', d: 'Supporto ai piccoli lotti per testare il mercato senza immobilizzare capitali importanti.' },
        { t: 'Bundle di accessori completi', d: 'Pagaie, pompe, leash e borse da viaggio ad alte prestazioni, pronti da spedire.' },
        { t: 'Qualità e certificazione di livello aziendale', d: 'Protocolli QA/QC severi, test di tenuta e conformità all’export mondiale.' },
      ],
    },
    process: {
      badge: 'In fabbrica',
      title: 'Come nasce un SUP gonfiabile',
      sub: "Ti sei mai chiesto come una tavola morbida diventa rigida? Cinque passaggi nel nostro stabilimento.",
      points: [
        { t: 'Taglio di precisione e stampa UV' },
        { t: 'Saldatura a caldo ermetica al 100%' },
        { t: 'Deck pad antiscivolo' },
        { t: 'Ferramenta e corde elastiche' },
        { t: 'Sgonfio, piegatura e imballaggio' },
      ],
    },
  },
  pt: {
    launch: {
      badge: 'Lançamento de marca',
      title: 'Sonhas em lançar a tua própria marca SUP?',
      sub: "Não precisas de uma fábrica tua para lançar uma marca SUP. Somos o parceiro de produção por trás da tua linha: especificação, engenharia, amostragem, controlo de qualidade, embalagem e produção pronta para exportação — tudo sob um único contrato com uma equipa responsável.",
      points: [
        { t: 'Percurso OEM/ODM completo do conceito à produção', d: 'Gráficas personalizadas, integração do logótipo, deck pads e embalagem personalizada.' },
        { t: 'Lançamento flexível com MOQ reduzido', d: 'Suporte a pequenos lotes para testares o mercado sem imobilizar capitais importantes.' },
        { t: 'Bundles completos de acessórios', d: 'Pagaias, bombas, leashes e bolsas de viagem de alto desempenho, prontos a enviar.' },
        { t: 'Qualidade e certificação de nível empresarial', d: 'Protocolos QA/QC rigorosos, testes de pressão e conformidade com a exportação mundial.' },
      ],
    },
    process: {
      badge: 'Dentro da fábrica',
      title: 'Como nasce um SUP insuflável',
      sub: "Já te perguntaste como uma tábua mole fica dura como pedra? Cinco passos no nosso estabelecimento.",
      points: [
        { t: 'Corte de precisão e impressão UV' },
        { t: 'Soldadura a calor 100% hermética' },
        { t: 'Deck pad antiderrapante' },
        { t: 'Ferragens e cordas elásticas' },
        { t: 'Sgonfar, dobrar e embalar' },
      ],
    },
  },
  nl: {
    launch: {
      badge: 'Merk-lancering',
      title: 'Droom jij ervan je eigen SUP-merk te lanceren?',
      sub: "Je hebt geen eigen fabriek nodig om een SUP-merk te lanceren. Wij zijn de productiepartner achter jouw lijn: specificatie, engineering, monstername, kwaliteitscontrole, verpakking en exportklare productie — allemaal onder één contract met één verantwoordelijk team.",
      points: [
        { t: 'Volledig OEM/ODM-traject van concept tot productie', d: 'Aangepaste boardgraphics, logo-integratie, deckpads en gepersonaliseerde verpakking.' },
        { t: 'Flexibele lancering met lagere MOQ', d: 'Ondersteuning voor kleine batches om de markt te testen zonder groot kapitaal vast te leggen.' },
        { t: 'Complete accessoirebundels', d: 'Hoogwaardige peddels, pompen, leashes en reistassen, klaar om te verzenden.' },
        { t: 'Kwaliteit en certificering op bedrijfsniveau', d: 'Strenge QA/QC-protocollen, druktests en naleving van de mondiale exportnormen.' },
      ],
    },
    process: {
      badge: 'In de fabriek',
      title: 'Hoe een opblaasbare SUP ontstaat',
      sub: 'Heb je je ooit afgevraagd hoe een zacht board keihard wordt? Vijf stappen in onze fabriek.',
      points: [
        { t: 'Precisiesnijden en UV-printen' },
        { t: '100% luchtdicht warmlassen' },
        { t: 'Antislip deckpad' },
        { t: 'Beslag en bungeekoorden' },
        { t: 'Laten leeglopen, vouwen en verpakken' },
      ],
    },
  },
  sv: {
    launch: {
      badge: 'Varumärkeslansering',
      title: 'Drömmer du om att lansera ditt eget SUP-varumärke?',
      sub: 'Du behöver ingen egen fabrik för att lansera ett SUP-varumärke. Vi är tillverkningspartnern bakom din linje: specifikation, konstruktion, provtagning, kvalitetssäkring, förpackning och exportfärdig produktion — allt under ett enda kontrakt med ett ansvarigt team.',
      points: [
        { t: 'Komplett OEM/ODM från koncept till produktion', d: 'Anpassad brädgrafik, logotypintegrering, däckpaddar och anpassad förpackning.' },
        { t: 'Flexibel lansering med lågt MOQ', d: 'Stöd för små serier så att du kan testa marknaden utan att binda stort kapital.' },
        { t: 'Kompletta tillbehörspaket', d: 'Högt presterande paddlar, pumpar, leashes och reseväskor redo att skickas.' },
        { t: 'Kvalitet och certifiering på företagsnivå', d: 'Strikta QA/QC-protokoll, trycktester och global exportkompatibilitet.' },
      ],
    },
    process: {
      badge: 'Inuti fabriken',
      title: 'Hur en uppblåsbar SUP föds',
      sub: 'Har du någonsin undrat hur en mjuk bräda blir stenhård? Fem steg i vår anläggning.',
      points: [
        { t: 'Precisionsskärning & UV-tryck' },
        { t: '100 % lufttät värmesvetsning' },
        { t: 'Halkfri däckpad' },
        { t: 'Beslag & elastiska snören' },
        { t: 'Tömma, vika & packa' },
      ],
    },
  },
  no: {
    launch: {
      badge: 'Merkelansering',
      title: 'Drømmer du om å lansere ditt eget SUP-merke?',
      sub: 'Du trenger ikke egen fabrikk for å lansere et SUP-merke. Vi er produksjonspartneren bak linjen din: spesifikasjon, konstruksjon, prøvetaking, kvalitetssikring, emballasje og eksportklart produksjon — alt under én kontrakt med ett ansvarlig team.',
      points: [
        { t: 'Komplett OEM/ODM fra konsept til produksjon', d: 'Skreddersydd brettgrafikk, logointegrasjon, dekputer og tilpasset emballasje.' },
        { t: 'Fleksibel lansering med lav MOQ', d: 'Støtte for små serier, slik at du kan teste markedet uten å binde opp mye kapital.' },
        { t: 'Komplette tilbehørspakker', d: 'Ytelsessterke padler, pumper, leashes og reisevesker, klare til utsending.' },
        { t: 'Kvalitet og sertifisering på bedriftsnivå', d: 'Strenge QA/QC-protokoller, trykktesting og global eksportkompatibilitet.' },
      ],
    },
    process: {
      badge: 'Inne i fabrikken',
      title: 'Hvordan en oppblåsbar SUP blir født',
      sub: 'Har du noen gang lurt på hvordan et mykt brett blir steinhardt? Fem trinn i anlegget vårt.',
      points: [
        { t: 'Presisjonskutting og UV-trykk' },
        { t: '100 % lufttett varmesveising' },
        { t: 'Sklisikkert dekpute' },
        { t: 'Beslag og elastiske bånd' },
        { t: 'Tømme, folde og pakke' },
      ],
    },
  },
  pl: {
    launch: {
      badge: 'Premiera marki',
      title: 'Marzysz o wypuszczeniu własnej marki SUP?',
      sub: 'Nie musisz mieć własnej fabryki, aby wypuścić markę SUP. Jesteśmy partnerem produkcyjnym stojącym za Twoją linią: specyfikacja, konstrukcja, próbki, kontrola jakości, opakowanie i produkt gotowy do eksportu — wszystko w ramach jednej umowy i jednego odpowiedzialnego zespołu.',
      points: [
        { t: 'Kompleksowa usługa OEM/ODM od koncepcji do produkcji', d: 'Indywidualna grafika deski, integracja logo, nakładki na pokład i dedykowane opakowanie.' },
        { t: 'Elastyczny start przy niskim MOQ', d: 'Wsparcie małych serii, dzięki czemu możesz sprawdzić rynek bez angażowania dużego kapitału.' },
        { t: 'Kompletne pakiety akcesoriów', d: 'Wytrzymałe wiosła, pompki, smycze i torby podróżne, gotowe do wysyłki.' },
        { t: 'Jakość i certyfikacja na poziomie firmy', d: 'Rygorystyczne procedury QA/QC, testy nadruku i zgodność z wymaganiami eksportu na całym świecie.' },
      ],
    },
    process: {
      badge: 'W środku fabryki',
      title: 'Jak rodzi się nadmuchiwana deska SUP',
      sub: 'Zastanawiałeś się kiedyś, jak miękka deska staje się twarda jak kamień? Pięć etapów w naszym zakładzie.',
      points: [
        { t: 'Precyzyjne cięcie i druk UV' },
        { t: 'Zgrzewanie termiczne szczelne w 100 %' },
        { t: 'Antypoślizgowa nakładka na pokład' },
        { t: 'Okucia i elastyczne taśmy' },
        { t: 'Spuszczanie, składanie i pakowanie' },
      ],
    },
  },
}

/* ─────────────────────────── how it works ─────────────────────────── */

export interface Step {
  title: string
  body: string
}

export interface WorksContent {
  kicker: string
  title: string
  sub: string
  steps: Step[]
  note: string
}

export const works: Localized<WorksContent> = {
  en: {
    kicker: 'SUP Product Development',
    title: 'From Brief to Batch — Product Development Inside Our Plant',
    sub: 'Requirement intake through finished goods — every step inside our own plant.',
    steps: [
      {
        title: 'Requirement Intake',
        body: 'We collect your specification, target market, compliance requirements and volume forecast. NDA signed before any file exchange.',
      },
      {
        title: 'Engineering Review',
        body: 'Board type, dimensions, layup, materials and hardware are assessed for manufacturability. You receive a written report with cost drivers identified.',
      },
      {
        title: 'Artwork Prepress',
        body: 'Your brand files are converted to production-ready print data. Colors are matched and proofed before printing.',
      },
      {
        title: 'Prototype',
        body: 'A physical prototype confirms shape, stiffness, weight and finish. Ships in 7–12 days.',
      },
      {
        title: 'Sample Approval',
        body: 'You sign off on the physical sample. Nothing enters production until the golden sample is approved and archived as the batch reference.',
      },
      {
        title: 'Batch Production',
        body: 'Manufactured in our own plant under the QC process above, with batch traceability to material lot level.',
      },
      {
        title: 'Export-Ready Delivery',
        body: 'Vacuum-packed, boxed, documented and handed over ready for export.',
      },
    ],
    note: 'The approved sample is the contract. Every board in the batch is measured against it.',
  },
  es: {
    kicker: 'Desarrollo de producto SUP',
    title: 'Del briefing al lote — desarrollo de producto en nuestra planta',
    sub: 'Desde la recepción de requisitos hasta el producto terminado — cada paso dentro de nuestra propia planta.',
    steps: [
      {
        title: 'Recepción de requisitos',
        body: 'Recopilamos tu especificación, mercado objetivo, requisitos de cumplimiento y previsión de volumen. NDA firmado antes de cualquier intercambio de archivos.',
      },
      {
        title: 'Revisión de ingeniería',
        body: 'El tipo de tabla, dimensiones, layup, materiales y herrajes se evalúan en cuanto a fabricabilidad. Recibes un informe escrito con los factores de coste identificados.',
      },
      {
        title: 'Preimpresión de arte',
        body: 'Tus archivos de marca se convierten en datos de impresión listos para producción. Los colores se gestionan y contratan antes de imprimir.',
      },
      {
        title: 'Prototipo',
        body: 'Un prototipo físico confirma forma, rigidez, peso y acabado. Se envía en 7–12 días.',
      },
      {
        title: 'Aprobación de la muestra',
        body: 'Validas la muestra física. Nada entra en producción hasta que la muestra dorada esté aprobada y archivada como referencia del lote.',
      },
      {
        title: 'Producción en serie',
        body: 'Fabricado en nuestra propia planta bajo el proceso de control de calidad descrito, con trazabilidad por lote hasta el nivel de material.',
      },
      {
        title: 'Entrega lista para exportación',
        body: 'Envasado al vacío, encajado, documentado y entregado listo para la exportación.',
      },
    ],
    note: 'La muestra aprobada es el punto de referencia. Cada tabla del lote se mide contra ella.',
  },
  fr: {
    kicker: 'Développement de produit SUP',
    title: 'Du cahier des charges au lot — développement de produit dans notre usine',
    sub: 'De la collecte des exigences au produit fini — chaque étape au sein de notre propre usine.',
    steps: [
      {
        title: 'Collecte des exigences',
        body: 'Nous recueillons votre spécification, votre marché cible, vos exigences de conformité et vos prévisions de volume. NDA signé avant tout échange de fichiers.',
      },
      {
        title: 'Revue d\'ingénierie',
        body: 'Le type de planche, les dimensions, le layup, les matériaux et la quincaillerie sont évalués en termes de fabricabilité. Vous recevez un rapport écrit identifiant les facteurs de coût.',
      },
      {
        title: 'Prépresse des visuels',
        body: 'Vos fichiers de marque sont convertis en données d\'impression prêtes pour la production. Les couleurs sont assorties et validées avant l\'impression.',
      },
      {
        title: 'Prototype',
        body: 'Un prototype physique confirme la forme, la rigidité, le poids et la finition. Expédié sous 7–12 jours.',
      },
      {
        title: 'Approbation de l\'échantillon',
        body: 'Vous validez l\'échantillon physique. Rien n\'entre en production tant que l\'échantillon de référence n\'est pas approuvé et archivé comme référence du lot.',
      },
      {
        title: 'Production en série',
        body: 'Fabriqué dans notre propre usine selon le processus de contrôle qualité décrit ci-dessus, avec traçabilité du lot jusqu\'au niveau du lot de matière.',
      },
      {
        title: 'Livraison prête pour l\'export',
        body: 'Sous vide, cartonné, documenté et remis prêt pour l\'export.',
      },
    ],
    note: 'L\'échantillon approuvé fait office de contrat. Chaque planche du lot est mesurée par rapport à lui.',
  },
  de: {
    kicker: 'SUP-Produktentwicklung',
    title: 'Vom Briefing bis zur Charge — Produktentwicklung in unserem Werk',
    sub: 'Von der Anforderungsaufnahme bis zum Fertigprodukt — jeder Schritt in unserem eigenen Werk.',
    steps: [
      {
        title: 'Anforderungsaufnahme',
        body: 'Wir erfassen Ihre Spezifikation, Ihren Zielmarkt, Ihre Konformitätsanforderungen und Ihre Mengenprognose. Vor jedem Dateiaustausch wird eine NDA unterzeichnet.',
      },
      {
        title: 'Engineering-Prüfung',
        body: 'Boardtyp, Maße, Aufbau, Materialien und Beschläge werden auf Fertigbarkeit geprüft. Sie erhalten einen schriftlichen Bericht mit identifizierten Kostentreibern.',
      },
      {
        title: 'Artwork-Prepress',
        body: 'Ihre Markendateien werden in produktionsreife Druckdaten überführt. Farben werden vor dem Druck abgestimmt und geprüft.',
      },
      {
        title: 'Prototyp',
        body: 'Ein physischer Prototyp bestätigt Form, Steifigkeit, Gewicht und Finish. Versand in 7–12 Tagen.',
      },
      {
        title: 'Musterfreigabe',
        body: 'Sie geben das physische Muster frei. Nichts geht in Produktion, bis das Goldmuster freigegeben und als Chargenreferenz archiviert ist.',
      },
      {
        title: 'Serienproduktion',
        body: 'Fertigung in unserem eigenen Werk gemäß dem oben beschriebenen Qualitätsprozess, mit Chargenrückverfolgbarkeit bis auf Materialcharchebene.',
      },
      {
        title: 'Exportfertige Auslieferung',
        body: 'Vakuumiert, verpackt, dokumentiert und exportfertig übergeben.',
      },
    ],
    note: 'Das freigegebene Muster ist der Vertrag. Jedes Board der Charge wird daran gemessen.',
  },
  it: {
    kicker: 'Sviluppo prodotto SUP',
    title: 'Dal brief al lotto di produzione — sviluppo prodotto nel nostro stabilimento',
    sub: 'Dalla raccolta dei requisiti al prodotto finito — ogni passaggio nel nostro stabilimento.',
    steps: [
      {
        title: 'Raccolta dei requisiti',
        body: 'Raccogliamo la tua specifica, il tuo mercato di riferimento, i requisiti di conformità e la previsione di volumi. Prima di qualsiasi scambio di file viene firmata un NDA.',
      },
      {
        title: 'Verifica ingegneristica',
        body: 'Tipo di tavola, misure, stratificazione, materiali e ferramenta vengono verificati per la producibilità. Ricevi un report scritto con i driver di costo individuati.',
      },
      {
        title: 'Prepress artwork',
        body: 'I tuoi file del marchio vengono convertiti in dati di stampa pronti per la produzione. I colori vengono coordinati e verificati prima della stampa.',
      },
      {
        title: 'Prototipo',
        body: 'Un prototipo fisico conferma forma, rigidità, peso e finitura. Spedizione in 7–12 giorni.',
      },
      {
        title: 'Approvazione del campione',
        body: 'Approve il campione fisico. Nulla entra in produzione finché il golden sample non viene approvato e archiviato come riferimento di lotto.',
      },
      {
        title: 'Produzione in serie',
        body: 'Produzione nel nostro stabilimento secondo il processo di qualità descritto sopra, con tracciabilità dei lotti fino al livello della partita di materiale.',
      },
      {
        title: "Consegna pronta per l’export",
        body: 'Sottovuoto, imballate, documentate e consegnate pronte per l’export.',
      },
    ],
    note: 'Il campione approvato è il contratto. Ogni tavola del lotto viene misurata su quel riferimento.',
  },
  pt: {
    kicker: 'Desenvolvimento de produto SUP',
    title: 'Do briefing ao lote de produção — desenvolvimento de produto no nosso estabelecimento',
    sub: 'Da recolha de requisitos ao produto acabado — cada passo no nosso próprio estabelecimento.',
    steps: [
      {
        title: 'Recolha de requisitos',
        body: 'Recolhemos a tua especificação, o teu mercado de referência, os requisitos de conformidade e a previsão de volumes. É assinado um NDA antes de qualquer troca de ficheiros.',
      },
      {
        title: 'Verificação de engenharia',
        body: 'Tipo de tábua, dimensões, estratificação, materiais e ferragens são verificados quanto à fabricabilidade. Recebes um relatório escrito com os fatores de custo identificados.',
      },
      {
        title: 'Pré-impressão de artwork',
        body: 'Os teus ficheiros de marca são convertidos em dados de impressão prontos para produção. As cores são coordenadas e verificadas antes da impressão.',
      },
      {
        title: 'Protótipo',
        body: 'Um protótipo físico confirma forma, rigidez, peso e acabamento. Envio em 7–12 dias.',
      },
      {
        title: 'Aprovação da amostra',
        body: 'Aprovas a amostra física. Nada entra em produção enquanto a amostra-padrão não for aprovada e arquivada como referência de lote.',
      },
      {
        title: 'Produção em série',
        body: 'Produzido no nosso estabelecimento segundo o processo de qualidade descrito acima, com rastreabilidade dos lotes até ao nível da partida de material.',
      },
      {
        title: "Entrega pronta para exportação",
        body: 'A vácuo, embaladas, documentadas e entregues prontas para a exportação.',
      },
    ],
    note: 'A amostra aprovada é o contrato. Cada tábua do lote é medida em relação a ela.',
  },
  nl: {
    kicker: 'SUP-productontwikkeling',
    title: 'Van briefing tot productiebatch — productontwikkeling in onze fabriek',
    sub: 'Van het verzamelen van vereisten tot het eindproduct — elke stap in onze eigen fabriek.',
    steps: [
      {
        title: 'Verzamelen van vereisten',
        body: 'We verzamelen jouw specificatie, jouw doelmarkt, de conformiteitsvereisten en de volumeprognose. Vóór elke bestandsuitwisseling wordt een NDA ondertekend.',
      },
      {
        title: 'Engineeringbeoordeling',
        body: 'Boardtype, afmetingen, opbouw, materialen en beslag worden beoordeeld op produceerbaarheid. Je ontvangt een schriftelijk rapport met de geïdentificeerde kostendrijvers.',
      },
      {
        title: 'Artwork prepress',
        body: 'Jouw merkbestanden worden omgezet in productieklaar drukdata. De kleuren worden vóór het drukken gecoördineerd en gecontroleerd.',
      },
      {
        title: 'Prototype',
        body: 'Een fysiek prototype bevestigt vorm, stijfheid, gewicht en afwerking. Verzending binnen 7–12 dagen.',
      },
      {
        title: 'Goedkeuring van het monster',
        body: 'Je keurt het fysieke monster goed. Niets gaat in productie totdat het referentiemonster is goedgekeurd en gearchiveerd als batchreferentie.',
      },
      {
        title: 'Serieproductie',
        body: 'Productie in onze fabriek volgens het hierboven beschreven kwaliteitsproces, met traceerbaarheid van batches tot op het niveau van de materiaalpartij.',
      },
      {
        title: 'Exportklare levering',
        body: 'Vacuüm verpakt, ingedoosd, gedocumenteerd en afgeleverd, klaar voor export.',
      },
    ],
    note: 'Het goedgekeurde monster is het contract. Elke plank in de batch wordt hiermee vergeleken.',
  },
  sv: {
    kicker: 'SUP-produktutveckling',
    title: 'Från Brief till Batch — Produktutveckling Inuti Vår Anläggning',
    sub: 'Från kravinsamling till färdiga produkter — varje steg i vår egen anläggning.',
    steps: [
      {
        title: 'Kravinsamling',
        body: 'Vi samlar in din specifikation, målmarknad, efterlevnadskrav och volymprognos. NDA signeras före allt filutbyte.',
      },
      {
        title: 'Konstruktionsgranskning',
        body: 'Brädtyp, mått, uppbyggnad, material och beslag bedöms avseende tillverkningsbarhet. Du får en skriftlig rapport med identifierade kostnadsdrivare.',
      },
      {
        title: 'Artwork-prepress',
        body: 'Dina varumärkesfiler omvandlas till produktionsklara tryckdata. Färger matchas och provtrycks före tryckning.',
      },
      {
        title: 'Prototyp',
        body: 'En fysisk prototyp bekräftar form, styvhet, vikt och finish. Skickas inom 7–12 dagar.',
      },
      {
        title: 'Provgodkännande',
        body: 'Du signerar det fysiska provet. Ingenting går in i produktion förrän referensprovet (golden sample) är godkänt och arkiverat som batchreferens.',
      },
      {
        title: 'Serietillverkning',
        body: 'Tillverkas i vår egen anläggning enligt kvalitetsprocessen ovan, med batchspårbarhet ner till materialpartinivå.',
      },
      {
        title: 'Exportfärdig leverans',
        body: 'Vakuumförpackade, kartonglagda, dokumenterade och överlämnade redo för export.',
      },
    ],
    note: 'Det godkända provet är kontraktet. Varje bräda i batchen mäts mot det.',
  },
  no: {
    kicker: 'SUP-produktutvikling',
    title: 'Fra brief til batch — produktutvikling inne i anlegget vårt',
    sub: 'Fra innsamling av krav til ferdige produkter — hvert trinn i vår egen fabrikk.',
    steps: [
      {
        title: 'Innsamling av krav',
        body: 'Vi samler inn spesifikasjonen, målmarkedet, etterlevelseskravene og volumprognosen din. NDA signeres før all filutveksling.',
      },
      {
        title: 'Konstruksjonsgjennomgang',
        body: 'Brettype, mål, oppbygning, materialer og beslag vurderes med hensyn til produksjonsevne. Du får en skriftlig rapport med identifiserte kostnadsdrivere.',
      },
      {
        title: 'Prepress av grafikk',
        body: 'Merkefilene dine konverteres til produksjonsklare trykkdata. Farger matches og prøvetrykkes før trykking.',
      },
      {
        title: 'Prototype',
        body: 'En fysisk prototype bekrefter form, stivhet, vekt og finish. Sendes innen 7–12 dager.',
      },
      {
        title: 'Prøvegodkjenning',
        body: 'Du signerer den fysiske prøven. Ingenting går i produksjon før referanseprøven (golden sample) er godkjent og arkivert som batchreferanse.',
      },
      {
        title: 'Serietillverkning',
        body: 'Produseres i vår egen fabrikk etter kvalitetsprosessen over, med batchspårbarhet ned til materialpartinivå.',
      },
      {
        title: 'Eksportklart leveranse',
        body: 'Vakuumpakket, kartonglagt, dokumentert og levert, klart for eksport.',
      },
    ],
    note: 'Den godkjente prøven er kontrakten. Hvert brett i batchen måles mot den.',
  },
  pl: {
    kicker: 'Rozwój produktu SUP',
    title: 'Od briefu do partii — rozwój produktu w naszym zakładzie',
    sub: 'Od zebrania wymagań do gotowego produktu — każdy etap w naszej własnej fabryce.',
    steps: [
      {
        title: 'Zbieranie wymagań',
        body: 'Zbieramy Twoją specyfikację, rynek docelowy, wymagania zgodności i prognozę wolumenu. NDA podpisujemy przed jakąkolwiek wymianą plików.',
      },
      {
        title: 'Przegląd konstrukcji',
        body: 'Oceniamy typ deski, wymiary, budowę, materiały i okucia pod kątem możliwości produkcji. Otrzymujesz pisemny raport z wskazanymi czynnikami wpływającymi na koszt.',
      },
      {
        title: 'Przygotowanie grafiki do druku',
        body: 'Pliki Twojej marki konwertujemy do danych gotowych do druku. Kolory są dopasowywane i drukowane próbne przed właściwym drukiem.',
      },
      {
        title: 'Prototyp',
        body: 'Fizyczny prototyp potwierdza kształt, sztywność, wagę i wykończenie. Wysyłamy go w ciągu 7–12 dni.',
      },
      {
        title: 'Akceptacja próbki',
        body: 'Podpisujesz fizyczną próbkę. Nic nie trafia do produkcji, zanim próbka referencyjna (golden sample) nie zostanie zatwierdzona i zarchiwizowana jako wzorzec partii.',
      },
      {
        title: 'Produkcja seryjna',
        body: 'Produkujemy we własnej fabryce zgodnie z opisanym wyżej procesem jakości, z identyfikowalnością partii sięgającą poziomu partii materiału.',
      },
      {
        title: 'Dostawa gotowa do eksportu',
        body: 'Pakowanie próżniowe, ułożenie w kartony, dokumentacja i przekazanie produktu gotowego do eksportu.',
      },
    ],
    note: 'Zatwierdzona próbka to umowa. Każda deska w partii jest do niej mierzona.',
  },
}

/* ─────────────────────────── home: board categories ─────────────────────────── */

export interface BoardCategory {
  id: string
  label: string
  desc: string
  image: string
  href: string
}

export interface BoardCategoriesContent {
  kicker: string
  title: string
  sub: string
  viewLabel: string
  items: BoardCategory[]
}

export const boardCategories: Localized<BoardCategoriesContent> = {
  en: {
    kicker: 'Our Boards',
    title: 'From Product Concept to Production-Ready SUP',
    sub: 'Every board category is a manufacturing platform — choose your starting point and we customize the shape, graphics and specs to your product.',
    viewLabel: 'View',
    items: [
      { id: 'all-around', label: 'All-Around', desc: 'Versatile SUP boards for paddlers of all skill levels.', image: 'https://assets.isupfactory.com/site/products/2026/all-around/all-around-03.avif', href: '/products/sup-explorer-11' },
      { id: 'touring', label: 'Touring SUP', desc: 'Long-distance boards for exploration and adventure.', image: 'https://assets.isupfactory.com/site/products/2026/touring/touring-02.avif', href: '/products/sup-dolphin-wave' },
      { id: 'race', label: 'Race', desc: 'Performance boards for racing and athletic paddling.', image: 'https://assets.isupfactory.com/site/products/2026/race/race-01.avif', href: '/products/sup-leviathan-wake' },
      { id: 'whitewater', label: 'Whitewater', desc: 'Rugged boards engineered for river rapids and lifestyle.', image: 'https://assets.isupfactory.com/site/products/2026/whitewater/whitewater-01.avif', href: '/products/sup-ocean-pulse' },
      { id: 'yoga', label: 'Yoga', desc: 'Spacious decks designed for yoga and fitness.', image: 'https://assets.isupfactory.com/site/products/2026/yoga/yoga-01.avif', href: '/products/sup-flowing-lotus' },
      { id: 'surf', label: 'Surf', desc: 'Agile boards for catching waves and surf riding.', image: 'https://assets.isupfactory.com/site/products/2026/surf/surf-01.avif', href: '/products/sup-cheetah-surge' },
      { id: 'fishing', label: 'Fishing', desc: 'Stable platforms with rod holders and utility hulls for angling.', image: 'https://assets.isupfactory.com/site/products/2026/fishing/fishing-01.avif', href: '/products/sup-fishing' },
      { id: 'kids', label: 'Kids SUPs', desc: 'Smaller, lighter boards designed for children.', image: 'https://assets.isupfactory.com/site/products/2026/kids-teens/kids-teens-05.avif', href: '/products/sup-mini' },
      { id: 'multi', label: 'Multi-Person', desc: 'Large-format team boards for 6–8 riders.', image: 'https://assets.isupfactory.com/site/products/2026/giant/giant-03.avif', href: '/products/sup-giant' },
    ],
  },
  es: {
    kicker: 'Nuestras Tablas',
    title: 'Del Concepto de Producto al SUP Listo para Producir',
    sub: 'Cada categoría es una plataforma de fabricación: elige tu punto de partida y adaptamos la forma, los gráficos y las especificaciones a tu producto.',
    viewLabel: 'Ver',
    items: [
      { id: 'all-around', label: 'Polivalente', desc: 'Tablas SUP versátiles para remeros de todos los niveles.', image: 'https://assets.isupfactory.com/site/products/2026/all-around/all-around-03.avif', href: '/products/sup-explorer-11' },
      { id: 'touring', label: 'SUP de Travesía', desc: 'Tablas de larga distancia para exploración y aventura.', image: 'https://assets.isupfactory.com/site/products/2026/touring/touring-02.avif', href: '/products/sup-dolphin-wave' },
      { id: 'race', label: 'Competición', desc: 'Tablas de rendimiento para carreras y remo deportivo.', image: 'https://assets.isupfactory.com/site/products/2026/race/race-01.avif', href: '/products/sup-leviathan-wake' },
      { id: 'whitewater', label: 'Aguas Bravas', desc: 'Tablas resistentes diseñadas para rápidos de río y estilo de vida.', image: 'https://assets.isupfactory.com/site/products/2026/whitewater/whitewater-01.avif', href: '/products/sup-ocean-pulse' },
      { id: 'yoga', label: 'Yoga', desc: 'Cubiertas amplias diseñadas para yoga y fitness.', image: 'https://assets.isupfactory.com/site/products/2026/yoga/yoga-01.avif', href: '/products/sup-flowing-lotus' },
      { id: 'surf', label: 'Surf', desc: 'Tablas ágiles para cazar olas y surfear.', image: 'https://assets.isupfactory.com/site/products/2026/surf/surf-01.avif', href: '/products/sup-cheetah-surge' },
      { id: 'fishing', label: 'Pesca', desc: 'Plataformas estables con portacañas y casco utilitario para la pesca.', image: 'https://assets.isupfactory.com/site/products/2026/fishing/fishing-01.avif', href: '/products/sup-fishing' },
      { id: 'kids', label: 'SUP Infantil', desc: 'Tablas más pequeñas y ligeras diseñadas para niños.', image: 'https://assets.isupfactory.com/site/products/2026/kids-teens/kids-teens-05.avif', href: '/products/sup-mini' },
      { id: 'multi', label: 'Multipersona', desc: 'Tablas de equipo de gran formato para 6–8 remeros.', image: 'https://assets.isupfactory.com/site/products/2026/giant/giant-03.avif', href: '/products/sup-giant' },
    ],
  },
  fr: {
    kicker: 'Nos Planches',
    title: 'Du Concept Produit au SUP Prêt pour la Production',
    sub: 'Chaque catégorie de planches est une plateforme de fabrication : choisissez votre point de départ et nous adaptons la forme, les graphismes et les spécifications à votre produit.',
    viewLabel: 'Voir',
    items: [
      { id: 'all-around', label: 'Polyvalent', desc: 'Planches de SUP polyvalentes pour tous les niveaux de pagayeurs.', image: 'https://assets.isupfactory.com/site/products/2026/all-around/all-around-03.avif', href: '/products/sup-explorer-11' },
      { id: 'touring', label: 'SUP de randonnée', desc: 'Planches longue distance pour l\'exploration et l\'aventure.', image: 'https://assets.isupfactory.com/site/products/2026/touring/touring-02.avif', href: '/products/sup-dolphin-wave' },
      { id: 'race', label: 'Course', desc: 'Planches de performance pour la course et la pratique sportive.', image: 'https://assets.isupfactory.com/site/products/2026/race/race-01.avif', href: '/products/sup-leviathan-wake' },
      { id: 'whitewater', label: 'Eaux vives', desc: 'Planches robustes conçues pour les rapides de rivière et le lifestyle.', image: 'https://assets.isupfactory.com/site/products/2026/whitewater/whitewater-01.avif', href: '/products/sup-ocean-pulse' },
      { id: 'yoga', label: 'Yoga', desc: 'Ponts spacieux conçus pour le yoga et le fitness.', image: 'https://assets.isupfactory.com/site/products/2026/yoga/yoga-01.avif', href: '/products/sup-flowing-lotus' },
      { id: 'surf', label: 'Surf', desc: 'Planches agiles pour attraper les vagues et rider le surf.', image: 'https://assets.isupfactory.com/site/products/2026/surf/surf-01.avif', href: '/products/sup-cheetah-surge' },
      { id: 'fishing', label: 'Pêche', desc: 'Plateformes stables avec porte-cannes et coque utilitaire pour la pêche.', image: 'https://assets.isupfactory.com/site/products/2026/fishing/fishing-01.avif', href: '/products/sup-fishing' },
      { id: 'kids', label: 'SUP pour enfants', desc: 'Planches plus petites et plus légères, conçues pour les enfants.', image: 'https://assets.isupfactory.com/site/products/2026/kids-teens/kids-teens-05.avif', href: '/products/sup-mini' },
      { id: 'multi', label: 'Multi-personnes', desc: 'Planches d\'équipe de grand format pour 6–8 pagayeurs.', image: 'https://assets.isupfactory.com/site/products/2026/giant/giant-03.avif', href: '/products/sup-giant' },
    ],
  },
  de: {
    kicker: 'Unsere Boards',
    title: 'Vom Produktkonzept zum produktionsreifen SUP',
    sub: 'Jede Boardkategorie ist eine Fertigungsplattform — wählen Sie Ihren Ausgangspunkt, und wir passen Form, Grafiken und Spezifikationen an Ihr Produkt an.',
    viewLabel: 'Ansehen',
    items: [
      { id: 'all-around', label: 'Allround', desc: 'Vielseitige SUP-Boards für Paddler aller Könnensstufen.', image: 'https://assets.isupfactory.com/site/products/2026/all-around/all-around-03.avif', href: '/products/sup-explorer-11' },
      { id: 'touring', label: 'Touring-SUP', desc: 'Langstrecken-Boards für Entdeckungen und Abenteuer.', image: 'https://assets.isupfactory.com/site/products/2026/touring/touring-02.avif', href: '/products/sup-dolphin-wave' },
      { id: 'race', label: 'Rennen', desc: 'Leistungsboards für Wettkämpfe und sportliches Paddeln.', image: 'https://assets.isupfactory.com/site/products/2026/race/race-01.avif', href: '/products/sup-leviathan-wake' },
      { id: 'whitewater', label: 'Wildwasser', desc: 'Robuste Boards für Fluss-Stromschnellen und Lifestyle.', image: 'https://assets.isupfactory.com/site/products/2026/whitewater/whitewater-01.avif', href: '/products/sup-ocean-pulse' },
      { id: 'yoga', label: 'Yoga', desc: 'Geräumige Decks für Yoga und Fitness.', image: 'https://assets.isupfactory.com/site/products/2026/yoga/yoga-01.avif', href: '/products/sup-flowing-lotus' },
      { id: 'surf', label: 'Surf', desc: 'Agile Boards fürs Wellenreiten und Surfen.', image: 'https://assets.isupfactory.com/site/products/2026/surf/surf-01.avif', href: '/products/sup-cheetah-surge' },
      { id: 'fishing', label: 'Angeln', desc: 'Stabile Plattformen mit Rutenhaltern und Nutzrumpf.', image: 'https://assets.isupfactory.com/site/products/2026/fishing/fishing-01.avif', href: '/products/sup-fishing' },
      { id: 'kids', label: 'Kinder-SUPs', desc: 'Kleinere, leichtere Boards für Kinder.', image: 'https://assets.isupfactory.com/site/products/2026/kids-teens/kids-teens-05.avif', href: '/products/sup-mini' },
      { id: 'multi', label: 'Multipersonen', desc: 'Team-Boards im Großformat für 6–8 Personen.', image: 'https://assets.isupfactory.com/site/products/2026/giant/giant-03.avif', href: '/products/sup-giant' },
    ],
  },
  it: {
    kicker: 'Le nostre tavole',
    title: 'Dal concept di prodotto al SUP pronto per la produzione',
    sub: 'Ogni categoria di tavole è una piattaforma di produzione — scegli il tuo punto di partenza e noi adattiamo forma, grafiche e specifiche al tuo prodotto.',
    viewLabel: 'Vedi',
    items: [
      { id: 'all-around', label: 'All-round', desc: 'SUP versatili per paddler di tutti i livelli.', image: 'https://assets.isupfactory.com/site/products/2026/all-around/all-around-03.avif', href: '/products/sup-explorer-11' },
      { id: 'touring', label: 'SUP touring', desc: 'Tavole per lunghe distanze, esplorazione e avventura.', image: 'https://assets.isupfactory.com/site/products/2026/touring/touring-02.avif', href: '/products/sup-dolphin-wave' },
      { id: 'race', label: 'Gara', desc: 'Tavole ad alte prestazioni per gare e pagaiata sportiva.', image: 'https://assets.isupfactory.com/site/products/2026/race/race-01.avif', href: '/products/sup-leviathan-wake' },
      { id: 'whitewater', label: 'Acque bianche', desc: 'Tavole robuste progettate per rapide di fiume e lifestyle.', image: 'https://assets.isupfactory.com/site/products/2026/whitewater/whitewater-01.avif', href: '/products/sup-ocean-pulse' },
      { id: 'yoga', label: 'Yoga', desc: 'Deck spaziosi progettati per yoga e fitness.', image: 'https://assets.isupfactory.com/site/products/2026/yoga/yoga-01.avif', href: '/products/sup-flowing-lotus' },
      { id: 'surf', label: 'Surf', desc: 'Tavole agili per cavalcare le onde.', image: 'https://assets.isupfactory.com/site/products/2026/surf/surf-01.avif', href: '/products/sup-cheetah-surge' },
      { id: 'fishing', label: 'Pesca', desc: 'Piattaforme stabili con portacanne e scafo da lavoro per la pesca.', image: 'https://assets.isupfactory.com/site/products/2026/fishing/fishing-01.avif', href: '/products/sup-fishing' },
      { id: 'kids', label: 'SUP per bambini', desc: 'Tavole più piccole e leggere progettate per i bambini.', image: 'https://assets.isupfactory.com/site/products/2026/kids-teens/kids-teens-05.avif', href: '/products/sup-mini' },
      { id: 'multi', label: 'Multi persona', desc: 'Team board in grande formato per 6–8 persone.', image: 'https://assets.isupfactory.com/site/products/2026/giant/giant-03.avif', href: '/products/sup-giant' },
    ],
  },
  pt: {
    kicker: 'As nossas tábuas',
    title: 'Do conceito de produto ao SUP pronto para produção',
    sub: 'Cada categoria de tábuas é uma plataforma de produção — escolhe o teu ponto de partida e nós personalizamos forma, gráficas e especificações ao teu produto.',
    viewLabel: 'Ver',
    items: [
      { id: 'all-around', label: 'All-round', desc: 'SUP versáteis para paddlers de todos os níveis.', image: 'https://assets.isupfactory.com/site/products/2026/all-around/all-around-03.avif', href: '/products/sup-explorer-11' },
      { id: 'touring', label: 'SUP touring', desc: 'Tábuas de longa distância para exploração e aventura.', image: 'https://assets.isupfactory.com/site/products/2026/touring/touring-02.avif', href: '/products/sup-dolphin-wave' },
      { id: 'race', label: 'Corrida', desc: 'Tábuas de alto desempenho para corridas e pagaiada desportiva.', image: 'https://assets.isupfactory.com/site/products/2026/race/race-01.avif', href: '/products/sup-leviathan-wake' },
      { id: 'whitewater', label: 'Águas bravas', desc: 'Tábuas robustas concebidas para rápidos de rio e lifestyle.', image: 'https://assets.isupfactory.com/site/products/2026/whitewater/whitewater-01.avif', href: '/products/sup-ocean-pulse' },
      { id: 'yoga', label: 'Ioga', desc: 'Decks espaçosos concebidos para ioga e fitness.', image: 'https://assets.isupfactory.com/site/products/2026/yoga/yoga-01.avif', href: '/products/sup-flowing-lotus' },
      { id: 'surf', label: 'Surf', desc: 'Tábuas ágeis para apanhar ondas e andar de surf.', image: 'https://assets.isupfactory.com/site/products/2026/surf/surf-01.avif', href: '/products/sup-cheetah-surge' },
      { id: 'fishing', label: 'Pesca', desc: 'Plataformas estáveis com suportes de varão e casco de trabalho para pescaria.', image: 'https://assets.isupfactory.com/site/products/2026/fishing/fishing-01.avif', href: '/products/sup-fishing' },
      { id: 'kids', label: 'SUP para crianças', desc: 'Tábuas mais pequenas e leves concebidas para crianças.', image: 'https://assets.isupfactory.com/site/products/2026/kids-teens/kids-teens-05.avif', href: '/products/sup-mini' },
      { id: 'multi', label: 'Multi pessoa', desc: 'Team boards em grande formato para 6–8 paddlers.', image: 'https://assets.isupfactory.com/site/products/2026/giant/giant-03.avif', href: '/products/sup-giant' },
    ],
  },
  nl: {
    kicker: 'Onze planken',
    title: 'Van productconcept tot productieklaar SUP',
    sub: 'Elke plankencategorie is een productieplatform — kies je startpunt en wij personaliseren vorm, graphics en specificaties aan jouw product.',
    viewLabel: 'Bekijk',
    items: [
      { id: 'all-around', label: 'Allround', desc: 'Veelzijdige SUP-planken voor peddelaars van alle niveaus.', image: 'https://assets.isupfactory.com/site/products/2026/all-around/all-around-03.avif', href: '/products/sup-explorer-11' },
      { id: 'touring', label: 'Touring-SUP', desc: 'Planken voor lange afstanden, verkenning en avontuur.', image: 'https://assets.isupfactory.com/site/products/2026/touring/touring-02.avif', href: '/products/sup-dolphin-wave' },
      { id: 'race', label: 'Wedstrijd', desc: 'High-performance planken voor wedstrijden en sportief peddelen.', image: 'https://assets.isupfactory.com/site/products/2026/race/race-01.avif', href: '/products/sup-leviathan-wake' },
      { id: 'whitewater', label: 'Wildwater', desc: 'Robuuste planken ontworpen voor rivierstroomversnellingen en lifestyle.', image: 'https://assets.isupfactory.com/site/products/2026/whitewater/whitewater-01.avif', href: '/products/sup-ocean-pulse' },
      { id: 'yoga', label: 'Yoga', desc: 'Ruime decks ontworpen voor yoga en fitness.', image: 'https://assets.isupfactory.com/site/products/2026/yoga/yoga-01.avif', href: '/products/sup-flowing-lotus' },
      { id: 'surf', label: 'Surf', desc: 'Wendbare planken om golven te pakken en te surfen.', image: 'https://assets.isupfactory.com/site/products/2026/surf/surf-01.avif', href: '/products/sup-cheetah-surge' },
      { id: 'fishing', label: 'Vissen', desc: 'Stabiele platforms met hengeldragers en een werkromp voor de visserij.', image: 'https://assets.isupfactory.com/site/products/2026/fishing/fishing-01.avif', href: '/products/sup-fishing' },
      { id: 'kids', label: 'SUP voor kinderen', desc: 'Kleinere, lichtere planken ontworpen voor kinderen.', image: 'https://assets.isupfactory.com/site/products/2026/kids-teens/kids-teens-05.avif', href: '/products/sup-mini' },
      { id: 'multi', label: 'Meerdere personen', desc: 'Team boards in groot formaat voor 6–8 personen.', image: 'https://assets.isupfactory.com/site/products/2026/giant/giant-03.avif', href: '/products/sup-giant' },
    ],
  },
  sv: {
    kicker: 'Våra Brädor',
    title: 'Från Produktkoncept till Produktionsredo SUP',
    sub: 'Varje brädkategori är en tillverkningsplattform — välj din utgångspunkt så anpassar vi form, grafik och specifikationer efter din produkt.',
    viewLabel: 'Visa',
    items: [
      { id: 'all-around', label: 'Allround', desc: 'Mångsidiga SUP-brädor för paddlare på alla nivåer.', image: 'https://assets.isupfactory.com/site/products/2026/all-around/all-around-03.avif', href: '/products/sup-explorer-11' },
      { id: 'touring', label: 'Touring-SUP', desc: 'Långdistansbrädor för utforskning och äventyr.', image: 'https://assets.isupfactory.com/site/products/2026/touring/touring-02.avif', href: '/products/sup-dolphin-wave' },
      { id: 'race', label: 'Racing', desc: 'Prestandabrädor för tävling och atletisk paddling.', image: 'https://assets.isupfactory.com/site/products/2026/race/race-01.avif', href: '/products/sup-leviathan-wake' },
      { id: 'whitewater', label: 'Vitt vatten', desc: 'Tåliga brädor konstruerade för forsränning och livsstil.', image: 'https://assets.isupfactory.com/site/products/2026/whitewater/whitewater-01.avif', href: '/products/sup-ocean-pulse' },
      { id: 'yoga', label: 'Yoga', desc: 'Rymliga däck designade för yoga och träning.', image: 'https://assets.isupfactory.com/site/products/2026/yoga/yoga-01.avif', href: '/products/sup-flowing-lotus' },
      { id: 'surf', label: 'Surf', desc: 'Smidiga brädor för att fånga vågor och surfa.', image: 'https://assets.isupfactory.com/site/products/2026/surf/surf-01.avif', href: '/products/sup-cheetah-surge' },
      { id: 'fishing', label: 'Fiske', desc: 'Stabila plattformar med spöhållare och arbetskal för fiske.', image: 'https://assets.isupfactory.com/site/products/2026/fishing/fishing-01.avif', href: '/products/sup-fishing' },
      { id: 'kids', label: 'Kids-SUP:er', desc: 'Mindre, lättare brädor designade för barn.', image: 'https://assets.isupfactory.com/site/products/2026/kids-teens/kids-teens-05.avif', href: '/products/sup-mini' },
      { id: 'multi', label: 'Flerpersoners', desc: 'Team-brädor i storformat för 6–8 deltagare.', image: 'https://assets.isupfactory.com/site/products/2026/giant/giant-03.avif', href: '/products/sup-giant' },
    ],
  },
  no: {
    kicker: 'Brettene våre',
    title: 'Fra produktkonsept til produksjonsklare SUP-er',
    sub: 'Hver brettkategori er en produksjonsplattform — velg utgangspunktet ditt, så tilpasser vi form, grafikk og spesifikasjoner til produktet ditt.',
    viewLabel: 'Se',
    items: [
      { id: 'all-around', label: 'Allround', desc: 'Allsidige SUP-brett for padlere på alle nivåer.', image: 'https://assets.isupfactory.com/site/products/2026/all-around/all-around-03.avif', href: '/products/sup-explorer-11' },
      { id: 'touring', label: 'Touring-SUP', desc: 'Langdistan-brett for utforskning og eventyr.', image: 'https://assets.isupfactory.com/site/products/2026/touring/touring-02.avif', href: '/products/sup-dolphin-wave' },
      { id: 'race', label: 'Racing', desc: 'Ytelsesbrett for konkurranse og atletisk padling.', image: 'https://assets.isupfactory.com/site/products/2026/race/race-01.avif', href: '/products/sup-leviathan-wake' },
      { id: 'whitewater', label: 'Hvitevann', desc: 'Slitesterke brett bygget for elvekjøring og livsstil.', image: 'https://assets.isupfactory.com/site/products/2026/whitewater/whitewater-01.avif', href: '/products/sup-ocean-pulse' },
      { id: 'yoga', label: 'Yoga', desc: 'Romslige dekk designet for yoga og trening.', image: 'https://assets.isupfactory.com/site/products/2026/yoga/yoga-01.avif', href: '/products/sup-flowing-lotus' },
      { id: 'surf', label: 'Surf', desc: 'Wende brett for å ta bølger og surfe.', image: 'https://assets.isupfactory.com/site/products/2026/surf/surf-01.avif', href: '/products/sup-cheetah-surge' },
      { id: 'fishing', label: 'Fiske', desc: 'Stabile plattformer med stangholdere og arbeidsbøtte for fiske.', image: 'https://assets.isupfactory.com/site/products/2026/fishing/fishing-01.avif', href: '/products/sup-fishing' },
      { id: 'kids', label: 'Kids-SUP-er', desc: 'Mindre, lettere brett designet for barn.', image: 'https://assets.isupfactory.com/site/products/2026/kids-teens/kids-teens-05.avif', href: '/products/sup-mini' },
      { id: 'multi', label: 'Flerpersoners', desc: 'Storformat teambrett for 6–8 deltakere.', image: 'https://assets.isupfactory.com/site/products/2026/giant/giant-03.avif', href: '/products/sup-giant' },
    ],
  },
  pl: {
    kicker: 'Nasze deski',
    title: 'Od koncepcji produktu do desek SUP gotowych do produkcji',
    sub: 'Każda kategoria desek to platforma produkcyjna — wybierz punkt wyjścia, a my dostosujemy kształt, grafikę i specyfikację do Twojego produktu.',
    viewLabel: 'Zobacz',
    items: [
      { id: 'all-around', label: 'Allround', desc: 'Uniwersalne deski SUP dla osób na każdym poziomie.', image: 'https://assets.isupfactory.com/site/products/2026/all-around/all-around-03.avif', href: '/products/sup-explorer-11' },
      { id: 'touring', label: 'Touring-SUP', desc: 'Deski na długie wyprawy, odkrywanie i przygody.', image: 'https://assets.isupfactory.com/site/products/2026/touring/touring-02.avif', href: '/products/sup-dolphin-wave' },
      { id: 'race', label: 'Wyścigi', desc: 'Deski wyczynowe do rywalizacji i sportowego wiosłowania.', image: 'https://assets.isupfactory.com/site/products/2026/race/race-01.avif', href: '/products/sup-leviathan-wake' },
      { id: 'whitewater', label: 'Spływ', desc: 'Wytrzymałe deski do spływów i stylu życia.', image: 'https://assets.isupfactory.com/site/products/2026/whitewater/whitewater-01.avif', href: '/products/sup-ocean-pulse' },
      { id: 'yoga', label: 'Joga', desc: 'Przestronne pokłady zaprojektowane do jogi i treningu.', image: 'https://assets.isupfactory.com/site/products/2026/yoga/yoga-01.avif', href: '/products/sup-flowing-lotus' },
      { id: 'surf', label: 'Surf', desc: 'Zwrotne deski do łapania fal i surfowania.', image: 'https://assets.isupfactory.com/site/products/2026/surf/surf-01.avif', href: '/products/sup-cheetah-surge' },
      { id: 'fishing', label: 'Wędkarstwo', desc: 'Stabilne platformy z uchwytami na wędki i kieszenią roboczą.', image: 'https://assets.isupfactory.com/site/products/2026/fishing/fishing-01.avif', href: '/products/sup-fishing' },
      { id: 'kids', label: 'SUP dla dzieci', desc: 'Mniejsze, lżejsze deski zaprojektowane dla dzieci.', image: 'https://assets.isupfactory.com/site/products/2026/kids-teens/kids-teens-05.avif', href: '/products/sup-mini' },
      { id: 'multi', label: 'Wieloosobowe', desc: 'Duże deski zespołowe dla 6–8 osób.', image: 'https://assets.isupfactory.com/site/products/2026/giant/giant-03.avif', href: '/products/sup-giant' },
    ],
  },
}

/* ─────────────────────────── home: product platforms ─────────────────────────── */

export interface PlatformItem {
  title: string
  body: string
  uses: string[]
  cta: string
  href: string
}

export interface PlatformsContent {
  kicker: string
  title: string
  sub: string
  items: PlatformItem[]
}

export const platforms: Localized<PlatformsContent> = {
  en: {
    kicker: 'Product Platforms',
    title: 'Base Platforms',
    sub: 'Base platforms, not catalog products. Every dimension, layup and graphic is specified per project.',
    items: [
      {
        title: 'All-Around',
        body: 'Classic recreational platforms for retail lines, rental fleets and outdoor programs.',
        uses: ['Retail lines', 'Rental fleets', 'Outdoor programs'],
        cta: 'Request This Platform',
        href: '/contact',
      },
      {
        title: 'Touring',
        body: 'Longer waterlines built for distance, tracking and expedition use.',
        uses: ['Distance', 'Tracking', 'Expedition'],
        cta: 'Request This Platform',
        href: '/contact',
      },
      {
        title: 'Race',
        body: 'Performance shapes for clubs, events and competition teams.',
        uses: ['Clubs', 'Events', 'Competition teams'],
        cta: 'Request This Platform',
        href: '/contact',
      },
      {
        title: 'Multi-Purpose',
        body: 'Durable, high-cycle boards for schools, rental operations and institutional buyers.',
        uses: ['Schools', 'Rental operations', 'Institutional buyers'],
        cta: 'Request This Platform',
        href: '/contact',
      },
    ],
  },
  es: {
    kicker: 'Plataformas de producto',
    title: 'Plataformas base',
    sub: 'Plataformas base, no productos de catálogo. Cada dimensión, construcción y diseño se especifica por proyecto.',
    items: [
      {
        title: 'Polivalente',
        body: 'Plataformas recreativas clásicas para líneas de retail, flotas de alquiler y programas al aire libre.',
        uses: ['Líneas de retail', 'Flotas de alquiler', 'Programas outdoor'],
        cta: 'Solicita esta plataforma',
        href: '/contact',
      },
      {
        title: 'Travesía',
        body: 'Líneas de agua más largas para distancia, derrota y expediciones.',
        uses: ['Distancia', 'Derrota', 'Expediciones'],
        cta: 'Solicita esta plataforma',
        href: '/contact',
      },
      {
        title: 'Competición',
        body: 'Formas de rendimiento para clubes, eventos y equipos de competición.',
        uses: ['Clubes', 'Eventos', 'Equipos de competición'],
        cta: 'Solicita esta plataforma',
        href: '/contact',
      },
      {
        title: 'Multiusos',
        body: 'Tablas duraderas de alto ciclo para escuelas, operaciones de alquiler y compradores institucionales.',
        uses: ['Escuelas', 'Operaciones de alquiler', 'Compradores institucionales'],
        cta: 'Solicita esta plataforma',
        href: '/contact',
      },
    ],
  },
  fr: {
    kicker: 'Plateformes produit',
    title: 'Plateformes de base',
    sub: 'Des plateformes de base, pas des produits de catalogue. Chaque dimension, layup et graphisme est spécifié par projet.',
    items: [
      {
        title: 'Polyvalent',
        body: 'Plateformes récréatives classiques pour les gammes retail, les flottes de location et les programmes outdoor.',
        uses: ['Gammes retail', 'Flottes de location', 'Programmes outdoor'],
        cta: 'Demander cette plateforme',
        href: '/contact',
      },
      {
        title: 'Randonnée',
        body: 'Lignes d\'eau plus longues conçues pour la distance, le cap et les expéditions.',
        uses: ['Distance', 'Cap', 'Expéditions'],
        cta: 'Demander cette plateforme',
        href: '/contact',
      },
      {
        title: 'Course',
        body: 'Formes de performance pour les clubs, les événements et les équipes de compétition.',
        uses: ['Clubs', 'Événements', 'Équipes de compétition'],
        cta: 'Demander cette plateforme',
        href: '/contact',
      },
      {
        title: 'Multi-usages',
        body: 'Planches durables à fort cycle d\'utilisation pour les écoles, les opérations de location et les acheteurs institutionnels.',
        uses: ['Écoles', 'Opérations de location', 'Acheteurs institutionnels'],
        cta: 'Demander cette plateforme',
        href: '/contact',
      },
    ],
  },
  de: {
    kicker: 'Produktplattformen',
    title: 'Basisplattformen',
    sub: 'Basisplattformen, keine Katalogprodukte. Jede Dimension, jeder Aufbau und jede Grafik wird pro Projekt spezifiziert.',
    items: [
      {
        title: 'Allround',
        body: 'Klassische Freizeitplattformen für Handelssortimente, Verleihflotten und Outdoor-Programme.',
        uses: ['Handelssortimente', 'Verleihflotten', 'Outdoor-Programme'],
        cta: 'Diese Plattform anfragen',
        href: '/contact',
      },
      {
        title: 'Touring',
        body: 'Längere Wasserlinien für Distanz, Spurhaltung und Expeditionszwecke.',
        uses: ['Distanz', 'Spurhaltung', 'Expedition'],
        cta: 'Diese Plattform anfragen',
        href: '/contact',
      },
      {
        title: 'Rennen',
        body: 'Leistungsformen für Clubs, Events und Wettkampfteams.',
        uses: ['Clubs', 'Events', 'Wettkampfteams'],
        cta: 'Diese Plattform anfragen',
        href: '/contact',
      },
      {
        title: 'Mehrzweck',
        body: 'Langlebige Boards mit hoher Nutzungsfrequenz für Schulen, Verleihbetriebe und institutionelle Käufer.',
        uses: ['Schulen', 'Verleihbetriebe', 'Institutionelle Käufer'],
        cta: 'Diese Plattform anfragen',
        href: '/contact',
      },
    ],
  },
  it: {
    kicker: 'Piattaforme prodotto',
    title: 'Piattaforme base',
    sub: 'Piattaforme base, non prodotti da catalogo. Ogni dimensione, stratificazione e grafica è specificata per progetto.',
    items: [
      {
        title: 'All-round',
        body: 'Piattaforme ricreative classiche per linee retail, flotte da noleggio e programmi outdoor.',
        uses: ['Linee retail', 'Flotte da noleggio', 'Programmi outdoor'],
        cta: 'Richiedi questa piattaforma',
        href: '/contact',
      },
      {
        title: 'Touring',
        body: 'Waterline più lunghe progettate per distanza, stabilità di rotta e spedizioni.',
        uses: ['Distanza', 'Rotta', 'Spedizioni'],
        cta: 'Richiedi questa piattaforma',
        href: '/contact',
      },
      {
        title: 'Gara',
        body: 'Forme ad alte prestazioni per club, eventi e team di competizione.',
        uses: ['Club', 'Eventi', 'Team di competizione'],
        cta: 'Richiedi questa piattaforma',
        href: '/contact',
      },
      {
        title: 'Multiuso',
        body: 'Tavole durevoli ad alto ciclo di utilizzo per scuole, noleggi e acquirenti istituzionali.',
        uses: ['Scuole', 'Noleggi', 'Acquirenti istituzionali'],
        cta: 'Richiedi questa piattaforma',
        href: '/contact',
      },
    ],
  },
  pt: {
    kicker: 'Plataformas de produto',
    title: 'Plataformas base',
    sub: 'Plataformas base, não produtos de catálogo. Cada dimensão, estratificação e gráfica é especificada por projeto.',
    items: [
      {
        title: 'All-round',
        body: 'Plataformas recreativas clássicas para linhas de retalho, frotas de aluguer e programas outdoor.',
        uses: ['Linhas de retalho', 'Frotas de aluguer', 'Programas outdoor'],
        cta: 'Pede esta plataforma',
        href: '/contact',
      },
      {
        title: 'Touring',
        body: 'Linhas de água mais longas concebidas para distância, manutenção de rota e expedições.',
        uses: ['Distância', 'Rota', 'Expedições'],
        cta: 'Pede esta plataforma',
        href: '/contact',
      },
      {
        title: 'Corrida',
        body: 'Formas de alto desempenho para clubes, eventos e equipas de competição.',
        uses: ['Clubes', 'Eventos', 'Equipas de competição'],
        cta: 'Pede esta plataforma',
        href: '/contact',
      },
      {
        title: 'Multiuso',
        body: 'Tábuas duráveis de alto ciclo para escolas, operações de aluguer e compradores institucionais.',
        uses: ['Escolas', 'Operações de aluguer', 'Compradores institucionais'],
        cta: 'Pede esta plataforma',
        href: '/contact',
      },
    ],
  },
  nl: {
    kicker: 'Productplatforms',
    title: 'Basisplatforms',
    sub: 'Basisplatforms, geen catalogusproducten. Elke afmeting, opbouw en graphics wordt per project gespecificeerd.',
    items: [
      {
        title: 'Allround',
        body: "Klassieke recreatieve platforms voor retail-lijnen, verhuurvloten en outdoor-programma's.",
        uses: ['Retail-lijnen', 'Verhuurvloten', "Outdoor-programma's"],
        cta: 'Vraag dit platform aan',
        href: '/contact',
      },
      {
        title: 'Touring',
        body: 'Langere waterlijnen ontworpen voor afstand, koersstabiliteit en expedities.',
        uses: ['Afstand', 'Koers', 'Expedities'],
        cta: 'Vraag dit platform aan',
        href: '/contact',
      },
      {
        title: 'Wedstrijd',
        body: 'High-performance vormen voor clubs, evenementen en wedstrijdteams.',
        uses: ['Clubs', 'Evenementen', 'Wedstrijdteams'],
        cta: 'Vraag dit platform aan',
        href: '/contact',
      },
      {
        title: 'Multifunctioneel',
        body: 'Duurzame planken met hoge gebruiksfrequentie voor scholen, verhuurbedrijven en institutionele kopers.',
        uses: ['Scholen', 'Verhuurbedrijven', 'Institutionele kopers'],
        cta: 'Vraag dit platform aan',
        href: '/contact',
      },
    ],
  },
  sv: {
    kicker: 'Produktplattformar',
    title: 'Basplattformar',
    sub: 'Basplattformar, inte katalogprodukter. Varje dimension, uppbyggnad och grafik specificeras per projekt.',
    items: [
      {
        title: 'Allround',
        body: 'Klassiska rekreationsplattformar för detaljhandelslinjer, uthyrningsflottor och utomhusprogram.',
        uses: ['Detaljhandelslinjer', 'Uthyrningsflottor', 'Utomhusprogram'],
        cta: 'Begär denna plattform',
        href: '/contact',
      },
      {
        title: 'Touring',
        body: 'Längre vattenlinjer konstruerade för distans, kursstabilitet och expeditioner.',
        uses: ['Distans', 'Kurs', 'Expeditioner'],
        cta: 'Begär denna plattform',
        href: '/contact',
      },
      {
        title: 'Racing',
        body: 'Prestandaformer för klubbar, evenemang och tävlingslag.',
        uses: ['Klubbar', 'Evenemang', 'Tävlingslag'],
        cta: 'Begär denna plattform',
        href: '/contact',
      },
      {
        title: 'Multifunktionell',
        body: 'Hållbara brädor med hög användningsfrekvens för skolor, uthyrningsverksamheter och institutionella köpare.',
        uses: ['Skolor', 'Uthyrningsverksamheter', 'Institutionella köpare'],
        cta: 'Begär denna plattform',
        href: '/contact',
      },
    ],
  },
  no: {
    kicker: 'Produktplattformer',
    title: 'Basisplattformer',
    sub: 'Basisplattformer, ikke katalogprodukter. Hvert mål, hver konstruksjon og all grafikk spesifiseres per prosjekt.',
    items: [
      {
        title: 'Allround',
        body: 'Klassiske rekreasjonsplattformer for detaljhandelslinjer, utleieflåter og friluftsprogrammer.',
        uses: ['Detaljhandelslinjer', 'Utleieflåter', 'Friluftsprogrammer'],
        cta: 'Be om denne plattformen',
        href: '/contact',
      },
      {
        title: 'Touring',
        body: 'Lengre vannlinjer bygget for distanse, linjekontroll og ekspedisjoner.',
        uses: ['Distanse', 'Linjekontroll', 'Ekspedisjoner'],
        cta: 'Be om denne plattformen',
        href: '/contact',
      },
      {
        title: 'Racing',
        body: 'Ytelsesformer for klubber, arrangementer og konkurranselag.',
        uses: ['Klubber', 'Arrangementer', 'Konkurranselag'],
        cta: 'Be om denne plattformen',
        href: '/contact',
      },
      {
        title: 'Multifunksjonell',
        body: 'Slitesterke brett med høy bruksfrekvens for skoler, utleievirksomheter og institusjonelle innkjøpere.',
        uses: ['Skoler', 'Utleievirksomheter', 'Institusjonelle innkjøpere'],
        cta: 'Be om denne plattformen',
        href: '/contact',
      },
    ],
  },
  pl: {
    kicker: 'Platformy produktowe',
    title: 'Platformy bazowe',
    sub: 'Platformy bazowe, nie produkty katalogowe. Każdy wymiar, każda konstrukcja i cała grafika są ustalane indywidualnie dla projektu.',
    items: [
      {
        title: 'Allround',
        body: 'Klasyczne platformy rekreacyjne dla linii detalicznych, flot wynajmu i programów outdoorowych.',
        uses: ['Linie detaliczne', 'Floty wynajmu', 'Programy outdoorowe'],
        cta: 'Poproś o tę platformę',
        href: '/contact',
      },
      {
        title: 'Touring',
        body: 'Dłuższe linie wodne zbudowane na dystans, kontrolę kierunku i wyprawy.',
        uses: ['Dystans', 'Kontrola kierunku', 'Wyprawy'],
        cta: 'Poproś o tę platformę',
        href: '/contact',
      },
      {
        title: 'Wyścigi',
        body: 'Wyczynowe kształty dla klubów, wydarzeń i zespołów wyścigowych.',
        uses: ['Kluby', 'Wydarzenia', 'Zespoły wyścigowe'],
        cta: 'Poproś o tę platformę',
        href: '/contact',
      },
      {
        title: 'Uniwersalna',
        body: 'Wytrzymałe deski o wysokiej częstotliwości użytkowania dla szkół, wypożyczalni i nabywców instytucjonalnych.',
        uses: ['Szkoły', 'Wypożyczalnie', 'Nabywcy instytucjonalni'],
        cta: 'Poproś o tę platformę',
        href: '/contact',
      },
    ],
  },
}

/* ─────────────────────────── gallery ─────────────────────────── */

export interface Project {
  tag: string
  title: string
  body: string
  hue: number
  image: string
}

export interface GalleryContent {
  kicker: string
  title: string
  sub: string
  projects: Project[]
}

export const gallery: Localized<GalleryContent> = {
  en: {
    kicker: 'Production Projects',
    title: 'Recent Production',
    sub: 'Manufacturing projects delivered from our plant — with the numbers buyers actually ask about.',
    projects: [
      {
        tag: 'Batch Traceability',
        title: 'Shipment Release & Traceability Handover',
        body: 'Every batch ships with its quality handover — inspection records, per-board serial numbers and the signed release transfer, filed under 10-year ERP traceability. The photo shows the actual release & traceability handover record at the plant.',
        hue: 195,
        image: '/出货放行与批次追溯记录交接.jpg',
      },
      {
        tag: 'Club Team',
        title: 'Club Team Boards — Race Platform',
        body: 'Race platform with specification adjustments and club graphics locked at the sample stage, tooling reused across two seasons so the expansion reorder matched the original fleet exactly.',
        hue: 28,
        image: 'https://assets.isupfactory.com/site/products/2026/surf/surf-01.avif',
      },
      {
        tag: 'Brand Line Extension',
        title: 'Brand Line Extension — Inflatable SUP',
        body: 'An established watersports brand added an inflatable SUP line: engineering review, custom mold, three sizes, and a 50 pcs first production run with artwork-match and air-tightness verification before scale-up — designs and tooling owned by the brand.',
        hue: 210,
        image: 'https://assets.isupfactory.com/site/products/2026/all-around/all-around-03.avif',
      },
    ],
  },
  es: {
    kicker: 'Proyectos de producción',
    title: 'Producción reciente',
    sub: 'Proyectos de fabricación entregados desde la planta — con las cifras que de verdad pregunta un comprador.',
    projects: [
      {
        tag: 'Trazabilidad de lotes',
        title: 'Liberación de embarque y traspaso de trazabilidad',
        body: 'Cada lote sale con su traspaso de calidad: registros de inspección, número de serie por tabla y el acta de liberación firmada, archivados con trazabilidad ERP de 10 años. La foto muestra el acta real de liberación y trazabilidad en planta.',
        hue: 195,
        image: '/出货放行与批次追溯记录交接.jpg',
      },
      {
        tag: 'Equipo de club',
        title: 'Tablas de equipo — plataforma de competición',
        body: 'Plataforma de competición con ajustes de especificación y gráficos del club fijados en la fase de muestra; el utillaje se reutilizó dos temporadas para que la ampliación coincidiera exactamente con la flota original.',
        hue: 28,
        image: 'https://assets.isupfactory.com/site/products/2026/surf/surf-01.avif',
      },
      {
        tag: 'Extensión de marca',
        title: 'Extensión de línea — SUP hinchable',
        body: 'Una marca de deportes acuáticos consolidada añadió una línea de SUP hinchable: revisión de ingeniería, molde a medida, tres tallas y una primera tirada de 50 unidades verificada en arte y estanqueidad antes del escalado — con diseños y utillaje en propiedad de la marca.',
        hue: 210,
        image: 'https://assets.isupfactory.com/site/products/2026/all-around/all-around-03.avif',
      },
    ],
  },
  fr: {
    kicker: 'Projets de production',
    title: 'Production récente',
    sub: 'Des projets de fabrication livrés depuis notre usine — avec les chiffres que les acheteurs demandent réellement.',
    projects: [
      {
        tag: 'Traçabilité des lots',
        title: 'Libération d\'expédition et transfert de traçabilité',
        body: 'Chaque lot part avec son transfert qualité — registres d\'inspection, numéros de série par planche et acte de libération signé, archivés sous 10 ans de traçabilité ERP. La photo montre le registre réel de libération et de traçabilité à l\'usine.',
        hue: 195,
        image: '/出货放行与批次追溯记录交接.jpg',
      },
      {
        tag: 'Équipe de club',
        title: 'Planches d\'équipe — plateforme de course',
        body: 'Plateforme de course avec ajustements de spécification et graphismes du club figés au stade de l\'échantillon, outillage réutilisé sur deux saisons afin que la réitération corresponde exactement à la flotte d\'origine.',
        hue: 28,
        image: 'https://assets.isupfactory.com/site/products/2026/surf/surf-01.avif',
      },
      {
        tag: 'Extension de gamme',
        title: 'Extension de gamme — SUP gonflable',
        body: 'Une marque de sports nautiques établie a ajouté une gamme de SUP gonflables : revue d\'ingénierie, moule sur mesure, trois tailles et une première production de 50 pièces vérifiée en graphisme et en étanchéité avant la montée en série — les designs et l\'outillage restant la propriété de la marque.',
        hue: 210,
        image: 'https://assets.isupfactory.com/site/products/2026/all-around/all-around-03.avif',
      },
    ],
  },
  de: {
    kicker: 'Produktionsprojekte',
    title: 'Aktuelle Produktion',
    sub: 'Fertigungsprojekte aus unserem Werk — mit den Zahlen, die Käufer tatsächlich interessieren.',
    projects: [
      {
        tag: 'Chargenrückverfolgbarkeit',
        title: 'Versandfreigabe & Übergabe der Rückverfolgbarkeit',
        body: 'Jede Charge wird mit ihrer Qualitätsübergabe versandt — Prüfprotokolle, Seriennummern pro Board und das unterschriebene Freigabeprotokoll, archiviert im Rahmen der 10-jährigen ERP-Rückverfolgbarkeit. Das Foto zeigt das tatsächliche Protokoll zur Freigabe- und Rückverfolgbarkeitsübergabe im Werk.',
        hue: 195,
        image: '/出货放行与批次追溯记录交接.jpg',
      },
      {
        tag: 'Club-Team',
        title: 'Club-Team-Boards — Rennplattform',
        body: 'Rennplattform mit Spezifikationsanpassungen und Clubgrafik, im Musterstadium festgelegt; das Werkzeug wurde über zwei Saisons wiederverwendet, sodass die Nachbestellung exakt der ursprünglichen Flotte entsprach.',
        hue: 28,
        image: 'https://assets.isupfactory.com/site/products/2026/surf/surf-01.avif',
      },
      {
        tag: 'Markenlinienerweiterung',
        title: 'Markenlinienerweiterung — aufblasbares SUP',
        body: 'Eine etablierte Wassersportmarke ergänzte eine Linie aufblasbarer SUPs: Engineering-Prüfung, individuelle Form, drei Größen und eine Erstproduktion von 50 Stück mit Grafik- und Dichtheitsprüfung vor dem Hochskalieren — Design und Werkzeug gehören der Marke.',
        hue: 210,
        image: 'https://assets.isupfactory.com/site/products/2026/all-around/all-around-03.avif',
      },
    ],
  },
  it: {
    kicker: 'Progetti di produzione',
    title: 'Produzione recente',
    sub: 'Progetti di produzione consegnati dal nostro stabilimento — con i numeri che gli acquirenti chiedono davvero.',
    projects: [
      {
        tag: 'Tracciabilità dei lotti',
        title: 'Rilascio della spedizione e passaggio di tracciabilità',
        body: 'Ogni lotto parte con il suo passaggio di qualità: registri di ispezione, numeri di serie per tavola e il verbale di rilascio firmato, archiviati nella tracciabilità ERP a 10 anni. La foto mostra il registro reale di rilascio e tracciabilità nello stabilimento.',
        hue: 195,
        image: '/出货放行与批次追溯记录交接.jpg',
      },
      {
        tag: 'Team club',
        title: 'Team board da club — piattaforma gara',
        body: "Piattaforma da gara con aggiustamenti di specifica e grafica del club fissati in fase di campione; lo stampo è stato riutilizzato per due stagioni, così l’ampliamento corrispondeva esattamente alla flotta originale.",
        hue: 28,
        image: 'https://assets.isupfactory.com/site/products/2026/surf/surf-01.avif',
      },
      {
        tag: 'Estensione di linea',
        title: 'Estensione di linea — SUP gonfiabile',
        body: 'Un affermato marchio di sport acquatici ha aggiunto una linea di SUP gonfiabili: verifica ingegneristica, forma personalizzata, tre misure e una prima produzione di 50 pezzi con verifica grafica e di tenuta prima di scalare — design e stampo sono di proprietà del marchio.',
        hue: 210,
        image: 'https://assets.isupfactory.com/site/products/2026/all-around/all-around-03.avif',
      },
    ],
  },
  pt: {
    kicker: 'Projetos de produção',
    title: 'Produção recente',
    sub: 'Projetos de produção entregues pelo nosso estabelecimento — com os números que os compradores realmente pedem.',
    projects: [
      {
        tag: 'Rastreabilidade dos lotes',
        title: 'Liberação da expedição e transferência de rastreabilidade',
        body: 'Cada lote parte com a sua transferência de qualidade: registos de inspeção, números de série por tábua e o termo de liberação assinado, arquivados na rastreabilidade ERP de 10 anos. A foto mostra o registo real de liberação e rastreabilidade no estabelecimento.',
        hue: 195,
        image: '/出货放行与批次追溯记录交接.jpg',
      },
      {
        tag: 'Equipa de clube',
        title: 'Team boards de clube — plataforma de corrida',
        body: "Plataforma de corrida com ajustes de especificação e gráfica do clube fixados na fase de amostra; o molde foi reutilizado durante duas temporadas, para que a ampliação correspondesse exatamente à frota original.",
        hue: 28,
        image: 'https://assets.isupfactory.com/site/products/2026/surf/surf-01.avif',
      },
      {
        tag: 'Extensão de linha',
        title: 'Extensão de linha — SUP insuflável',
        body: 'Uma marca consolidada de desportos aquáticos adicionou uma linha de SUP insufláveis: verificação de engenharia, forma personalizada, três tamanhos e uma primeira produção de 50 unidades com verificação de gráfica e estanquicidade antes de escalar — design e molde são propriedade da marca.',
        hue: 210,
        image: 'https://assets.isupfactory.com/site/products/2026/all-around/all-around-03.avif',
      },
    ],
  },
  nl: {
    kicker: 'Productieprojecten',
    title: 'Recente productie',
    sub: 'Productieprojecten opgeleverd vanuit onze fabriek — met de cijfers waar kopers écht om vragen.',
    projects: [
      {
        tag: 'Traceerbaarheid van batches',
        title: 'Vrijgave van de zending en overdracht van traceerbaarheid',
        body: 'Elke batch vertrekt met de kwaliteitsoverdracht: inspectieregisters, serienummers per plank en het ondertekende vrijgaveprotocol, gearchiveerd in de 10-jarige ERP-traceerbaarheid. De foto toont het echte vrijgave- en traceerbaarheidsregister in de fabriek.',
        hue: 195,
        image: '/出货放行与批次追溯记录交接.jpg',
      },
      {
        tag: 'Clubteam',
        title: 'Clubteam boards — wedstrijdplatform',
        body: 'Wedstrijdplatform met specificatieaanpassingen en clubgraphics vastgelegd in de monsterfase; de matrijs werd twee seizoenen hergebruikt, zodat de uitbreiding exact overeenkwam met de oorspronkelijke vloot.',
        hue: 28,
        image: 'https://assets.isupfactory.com/site/products/2026/surf/surf-01.avif',
      },
      {
        tag: 'Lijnuitbreiding',
        title: 'Lijnuitbreiding — opblaasbare SUP',
        body: 'Een gevestigd watersportmerk voegde een lijn opblaasbare SUPs toe: engineeringbeoordeling, op maat gemaakte vorm, drie maten en een eerste productie van 50 stuks met controle van graphics en dichtheid vóór het opschalen — design en matrijs blijven eigendom van het merk.',
        hue: 210,
        image: 'https://assets.isupfactory.com/site/products/2026/all-around/all-around-03.avif',
      },
    ],
  },
  sv: {
    kicker: 'Produktionsprojekt',
    title: 'Senaste Produktionen',
    sub: 'Tillverkningsprojekt levererade från vår anläggning — med de siffror köpare faktiskt frågar efter.',
    projects: [
      {
        tag: 'Batchspårbarhet',
        title: 'Fraktfrigivning & Överlämning av Spårbarhet',
        body: 'Varje batch skickas med sin kvalitetsöverlämning — inspektionsregister, serienummer per bräda och det signerade frigivningsprotokollet, arkiverade under 10 års ERP-spårbarhet. Fotot visar det verkliga frigivnings- och spårbarhetsregistret i anläggningen.',
        hue: 195,
        image: '/出货放行与批次追溯记录交接.jpg',
      },
      {
        tag: 'Klubblag',
        title: 'Klubblagsbrädor — Racingplattform',
        body: 'Racingplattform med specifikationsjusteringar och klubbgrafik låst i provstadiet; verktyget återanvändes över två säsonger så att expansionsbeställningen matchade den ursprungliga flottan exakt.',
        hue: 28,
        image: 'https://assets.isupfactory.com/site/products/2026/surf/surf-01.avif',
      },
      {
        tag: 'Varumärkeslinjeutveckling',
        title: 'Varumärkeslinjeutveckling — Uppblåsbart SUP',
        body: 'Ett etablerat vattensportmärke lade till en uppblåsbar SUP-linje: konstruktionsgranskning, anpassad form, tre storlekar och en första produktionsserie på 50 styck med grafik- och lufttäthetsverifiering före uppskalning — design och verktyg ägs av varumärket.',
        hue: 210,
        image: 'https://assets.isupfactory.com/site/products/2026/all-around/all-around-03.avif',
      },
    ],
  },
  no: {
    kicker: 'Produksjonsprosjekter',
    title: 'Nyeste produksjon',
    sub: 'Produksjonsprosjekter levert fra anlegget vårt — med tallene kjøpere faktisk spør om.',
    projects: [
      {
        tag: 'Batchspårbarhet',
        title: 'Fraktfritakelse og overlevering av spårbarhet',
        body: 'Hver batch sendes med sin kvalitetsoverlevering — inspeksjonsregistre, serienummer per brett og det signerte frigjøringsprotokollet, arkivert med 10 års ERP-sporbarhet. Fotoet viser det faktiske frigjørings- og sporbarhetsregisteret i anlegget.',
        hue: 195,
        image: '/出货放行与批次追溯记录交接.jpg',
      },
      {
        tag: 'Klubblag',
        title: 'Klubblagsbrett — racing-plattform',
        body: 'Racing-plattform med spesifikasjonstilpasninger og klubbgrafikk låst på prøvestadiet; verktøyet ble gjenbrukt over to sesonger, slik at utvidelsesbestillingen matchet den opprinnelige flåten nøyaktig.',
        hue: 28,
        image: 'https://assets.isupfactory.com/site/products/2026/surf/surf-01.avif',
      },
      {
        tag: 'Utvikling av merkelinje',
        title: 'Merkelinjeutvikling — oppblåsbar SUP',
        body: 'En etablert vannsportsmerk la til en linje med oppblåsbare SUP-er: konstruksjonsgjennomgang, tilpasset form, tre størrelser og en første produksjonsserie på 50 styk med grafikk- og lufttetthetskontroll før oppskalering — design og verktøy eies av merket.',
        hue: 210,
        image: 'https://assets.isupfactory.com/site/products/2026/all-around/all-around-03.avif',
      },
    ],
  },
  pl: {
    kicker: 'Projekty produkcyjne',
    title: 'Najnowsza produkcja',
    sub: 'Projekty produkcyjne zrealizowane w naszym zakładzie — z liczbami, o które kupujący naprawdę pytają.',
    projects: [
      {
        tag: 'Identyfikowalność partii',
        title: 'Zwalnianie wysyłki i przekazanie dokumentacji identyfikowalności',
        body: 'Każda partia wysyłana jest z pełnym przekazaniem jakości — rejestrami inspekcji, numerami seryjnymi każdej deski i podpisanym protokołem zwalniania, archiwizowanym w 10-letniej identyfikowalności ERP. Zdjęcie przedstawia rzeczywisty rejestr zwalniania i identyfikowalności w zakładzie.',
        hue: 195,
        image: '/出货放行与批次追溯记录交接.jpg',
      },
      {
        tag: 'Klub drużynowy',
        title: 'Deski klubu drużynowego — platforma wyścigowa',
        body: 'Platforma wyścigowa z dostosowanymi specyfikacjami i grafiką klubu, zatwierdzona na etapie próbki; forma została wykorzystana ponownie przez dwa sezony, dzięki czemu zamówienie uzupełniające idealnie pasowało do pierwotnej floty.',
        hue: 28,
        image: 'https://assets.isupfactory.com/site/products/2026/surf/surf-01.avif',
      },
      {
        tag: 'Rozwój linii marki',
        title: 'Rozwój linii marki — nadmuchiwana SUP',
        body: 'Ugruntowana marka sportów wodnych rozszerzyła linię o nadmuchiwane deski SUP: przegląd konstrukcji, indywidualny kształt, trzy rozmiary i pierwsza seria 50 sztuk z kontrolą grafiki i szczelności przed skalowaniem — projekt i forma pozostają własnością marki.',
        hue: 210,
        image: 'https://assets.isupfactory.com/site/products/2026/all-around/all-around-03.avif',
      },
    ],
  },
}

/* ─────────────────────────── buyer's guides (home) ─────────────────────────── */

export interface GuideLink {
  title: string
  body: string
  href: string
}

export interface GuidesContent {
  kicker: string
  title: string
  sub: string
  guides: GuideLink[]
}

export const guides: Localized<GuidesContent> = {
  en: {
    kicker: "Buyer's Guides",
    title: 'Manufacturing Guides',
    sub: 'The questions every SUP brand asks before ordering — answered in plain language, with our real terms.',
    guides: [
      {
        title: 'Private Label: The Complete Step-by-Step Guide',
        body: 'From choosing a factory to production — the full six-step journey for new brands.',
        href: '/news/private-label-sup-guide',
      },
      {
        title: 'SUP OEM MOQ and Pricing',
        body: 'MOQ tiers from 1–2 samples to 90–100+ unit volume runs, the six cost drivers, and five ways to cut cost without cutting quality.',
        href: '/news/sup-oem-moq-pricing',
      },
      {
        title: 'CE Certification for Inflatable SUP',
        body: 'What CE really covers, the five documents to demand, and how to verify a certificate names your model.',
        href: '/news/ce-certification-inflatable-sup',
      },
    ],
  },
  es: {
    kicker: 'Guías del comprador',
    title: 'Guías de fabricación',
    sub: 'Las preguntas que toda marca de SUP hace antes de pedir — respondidas con claridad y con nuestras condiciones reales.',
    guides: [
      {
        title: 'SUP de marca privada: la guía completa paso a paso',
        body: 'De elegir fábrica a producción — el recorrido completo en seis pasos para nuevas marcas.',
        href: '/news/private-label-sup-guide',
      },
      {
        title: 'MOQ y precios OEM de SUP',
        body: 'Niveles de MOQ desde 1–2 muestras hasta 90–100+ unidades de volumen, los seis factores de coste y cinco formas de reducir coste sin bajar calidad.',
        href: '/news/sup-oem-moq-pricing',
      },
      {
        title: 'Certificación CE para SUP hinchables',
        body: 'Qué cubre realmente el CE, los cinco documentos que debes exigir y cómo verificar que un certificado nombra tu modelo.',
        href: '/news/ce-certification-inflatable-sup',
      },
    ],
  },
  fr: {
    kicker: 'Guides de l\'acheteur',
    title: 'Guides de fabrication',
    sub: 'Les questions que toute marque de SUP se pose avant de commander — réponses en langage clair, avec nos conditions réelles.',
    guides: [
      {
        title: 'Marque blanche : le guide complet, étape par étape',
        body: 'Du choix de l\'usine à la production — le parcours complet en six étapes pour les nouvelles marques.',
        href: '/news/private-label-sup-guide',
      },
      {
        title: 'MOQ et tarifs OEM de SUP',
        body: 'Niveaux de MOQ allant de 1–2 échantillons à des séries de 90–100+ unités, les six facteurs de coût, et cinq façons de réduire les coûts sans sacrifier la qualité.',
        href: '/news/sup-oem-moq-pricing',
      },
      {
        title: 'Certification CE pour SUP gonflables',
        body: 'Ce que couvre réellement le CE, les cinq documents à exiger, et comment vérifier qu\'un certificat nomme bien votre modèle.',
        href: '/news/ce-certification-inflatable-sup',
      },
    ],
  },
  de: {
    kicker: 'Ratgeber für Käufer',
    title: 'Fertigungsleitfäden',
    sub: 'Die Fragen, die jede SUP-Marke vor der Bestellung stellt — verständlich beantwortet, mit unseren realen Konditionen.',
    guides: [
      {
        title: 'Private Label: Der vollständige Schritt-für-Schritt-Leitfaden',
        body: 'Von der Fabrikwahl bis zur Produktion — der komplette Weg in sechs Schritten für neue Marken.',
        href: '/news/private-label-sup-guide',
      },
      {
        title: 'SUP-OEM-MOQ und Preisgestaltung',
        body: 'MOQ-Stufen von 1–2 Mustern bis zu Serien mit 90–100+ Stück, die sechs Kostentreiber und fünf Wege, Kosten zu senken, ohne an Qualität zu sparen.',
        href: '/news/sup-oem-moq-pricing',
      },
      {
        title: 'CE-Zertifizierung für aufblasbare SUPs',
        body: 'Was die CE wirklich abdeckt, die fünf Dokumente, die Sie verlangen sollten, und wie Sie prüfen, ob ein Zertifikat Ihr Modell benennt.',
        href: '/news/ce-certification-inflatable-sup',
      },
    ],
  },
  it: {
    kicker: 'Guide per gli acquirenti',
    title: 'Guide di produzione',
    sub: 'Le domande che ogni marchio SUP si pone prima di ordinare — risposte chiare, con le nostre condizioni reali.',
    guides: [
      {
        title: 'Private label: la guida completa passo dopo passo',
        body: 'Dalla scelta della fabbrica alla produzione — il percorso completo in sei passaggi per i nuovi marchi.',
        href: '/news/private-label-sup-guide',
      },
      {
        title: 'MOQ OEM SUP e prezzi',
        body: 'Livelli di MOQ da 1–2 campioni fino a serie da 90–100+ pezzi, i sei fattori di costo e cinque modi per ridurre i costi senza sacrificare la qualità.',
        href: '/news/sup-oem-moq-pricing',
      },
      {
        title: 'Certificazione CE per i SUP gonfiabili',
        body: 'Cosa copre davvero la CE, i cinque documenti da richiedere e come verificare che un certificato menzioni il tuo modello.',
        href: '/news/ce-certification-inflatable-sup',
      },
    ],
  },
  pt: {
    kicker: 'Guias para compradores',
    title: 'Guias de produção',
    sub: 'As perguntas que todas as marcas SUP fazem antes de encomendar — respostas claras, com as nossas condições reais.',
    guides: [
      {
        title: 'Private label: o guia completo passo a passo',
        body: 'Da escolha da fábrica à produção — o percurso completo em seis passos para novas marcas.',
        href: '/news/private-label-sup-guide',
      },
      {
        title: 'MOQ OEM SUP e preços',
        body: 'Níveis de MOQ de 1–2 amostras até séries de 90–100+ unidades, os seis fatores de custo e cinco formas de reduzir os custos sem sacrificar a qualidade.',
        href: '/news/sup-oem-moq-pricing',
      },
      {
        title: 'Certificação CE para SUP insufláveis',
        body: 'O que a CE cobre realmente, os cinco documentos a exigir e como verificar que um certificado menciona o teu modelo.',
        href: '/news/ce-certification-inflatable-sup',
      },
    ],
  },
  nl: {
    kicker: 'Gidsen voor kopers',
    title: 'Productiegidsen',
    sub: 'De vragen die elk SUP-merk zich stelt vóór de bestelling — heldere antwoorden, met onze echte voorwaarden.',
    guides: [
      {
        title: 'Private label: de complete stapsgewijze gids',
        body: 'Van de keuze van de fabriek tot de productie — het volledige traject in zes stappen voor nieuwe merken.',
        href: '/news/private-label-sup-guide',
      },
      {
        title: 'OEM-MOQ voor SUP en prijzen',
        body: 'MOQ-niveaus van 1–2 monsters tot series van 90–100+ stuks, de zes kostendrijvers en vijf manieren om kosten te besparen zonder kwaliteitsverlies.',
        href: '/news/sup-oem-moq-pricing',
      },
      {
        title: 'CE-certificering voor opblaasbare SUPs',
        body: 'Wat de CE echt dekt, de vijf documenten die je moet opvragen en hoe je controleert dat een certificaat jouw model vermeldt.',
        href: '/news/ce-certification-inflatable-sup',
      },
    ],
  },
  sv: {
    kicker: 'Köpguider',
    title: 'Tillverkningsguider',
    sub: 'Frågorna varje SUP-varumärke ställer innan beställning — besvarade på ett enkelt språk, med våra verkliga villkor.',
    guides: [
      {
        title: 'Private label: den kompletta steg-för-steg-guiden',
        body: 'Från fabriksval till produktion — hela vägen i sex steg för nya varumärken.',
        href: '/news/private-label-sup-guide',
      },
      {
        title: 'SUP OEM-MOQ och prissättning',
        body: 'MOQ-nivåer från 1–2 prover till serier på 90–100+ enheter, de sex kostnadsdrivarna och fem sätt att sänka kostnaderna utan att offra kvalitet.',
        href: '/news/sup-oem-moq-pricing',
      },
      {
        title: 'CE-certifiering för uppblåsbara SUP:er',
        body: 'Vad CE verkligen omfattar, de fem dokument du bör kräva och hur du kontrollerar att ett certifikat namnger din modell.',
        href: '/news/ce-certification-inflatable-sup',
      },
    ],
  },
  no: {
    kicker: 'Kjøpsguider',
    title: 'Produksjonsguider',
    sub: 'Spørsmålene ethvert SUP-merke stiller før bestilling — besvart på enkelt vis, med våre reelle vilkår.',
    guides: [
      {
        title: 'Private label: den komplette trinn-for-trinn-guiden',
        body: 'Fra valg av fabrikk til produksjon — hele veien i seks trinn for nye merker.',
        href: '/news/private-label-sup-guide',
      },
      {
        title: 'SUP OEM-MOQ og prising',
        body: 'MOQ-nivåer fra 1–2 prøver til serier på 90–100+ enheter, de seks kostnadsdriverne og fem måter å redusere kostnadene uten å gå på kompromiss med kvaliteten.',
        href: '/news/sup-oem-moq-pricing',
      },
      {
        title: 'CE-sertifisering for oppblåsbare SUP-er',
        body: 'Hva CE faktisk dekker, de fem dokumentene du bør kreve, og hvordan du sjekker at et sertifikat nevner modellen din.',
        href: '/news/ce-certification-inflatable-sup',
      },
    ],
  },
  pl: {
    kicker: 'Przewodnik zakupowy',
    title: 'Przewodniki produkcyjne',
    sub: 'Pytania, które zadaje każda marka SUP przed zamówieniem — odpowiedziane wprost, na podstawie naszych rzeczywistych warunków.',
    guides: [
      {
        title: 'Marka własna: kompletny przewodnik krok po kroku',
        body: 'Od wyboru fabryki po produkcję — cała droga w sześciu krokach dla nowych marek.',
        href: '/news/private-label-sup-guide',
      },
      {
        title: 'MOQ i wycena OEM desek SUP',
        body: 'Poziomy MOQ od 1–2 próbek po serie 90–100+ sztuk, sześć czynników wpływających na koszt i pięć sposobów obniżenia kosztów bez kompromisów w jakości.',
        href: '/news/sup-oem-moq-pricing',
      },
      {
        title: 'Certyfikacja CE nadmuchiwanych desek SUP',
        body: 'Co obejmuje certyfikacja CE, których pięć dokumentów warto żądać i jak sprawdzić, czy certyfikat wymienia Twój model.',
        href: '/news/ce-certification-inflatable-sup',
      },
    ],
  },
}

/* ─────────────────────── manufacturing guides (knowledge) ─────────────────────── */

export const manufacturingGuides: Localized<GuidesContent> = {
  en: {
    kicker: 'Manufacturing Guides',
    title: 'From Factory to Finished Product',
    sub: 'The complete sourcing library — every stage of a custom SUP project with our real lead times, terms and documentation.',
    guides: [
      {
        title: 'How to Choose a SUP OEM Manufacturer',
        body: 'The audit questions that separate a real factory from a trader: certifications, QC, samples and ownership.',
        href: '/news/how-to-choose-sup-oem-manufacturer',
      },
      {
        title: 'SUP Product Development Timeline',
        body: 'Sample in 7–12 days, production in 25–35 days, tooling plus 15–20 — the full calendar, stage by stage.',
        href: '/news/custom-sup-development-timeline',
      },
      {
        title: 'Information to Prepare Before Ordering',
        body: 'The five details that let a factory quote accurately on the first pass — and avoid spec rework.',
        href: '/news/info-needed-before-sup-production',
      },
      {
        title: 'Private Label: The Complete Step-by-Step Guide',
        body: 'From choosing a factory to production — the full six-step journey for new brands.',
        href: '/news/private-label-sup-guide',
      },
      {
        title: 'SUP OEM MOQ and Pricing',
        body: 'MOQ tiers from 1–2 samples to 90–100+ unit volume runs, the six cost drivers, and five ways to cut cost without cutting quality.',
        href: '/news/sup-oem-moq-pricing',
      },
      {
        title: 'CE Certification for Inflatable SUP',
        body: 'What CE really covers, the five documents to demand, and how to verify a certificate names your model.',
        href: '/news/ce-certification-inflatable-sup',
      },
    ],
  },
  es: {
    kicker: 'Guías de fabricación',
    title: 'De la fábrica al producto terminado',
    sub: 'La biblioteca completa de abastecimiento — cada etapa de un proyecto SUP a medida con nuestros plazos, condiciones y documentación reales.',
    guides: [
      {
        title: 'Cómo elegir un fabricante OEM de SUP',
        body: 'Las preguntas de auditoría que separan una fábrica real de un intermediario: certificaciones, control de calidad, muestras y propiedad.',
        href: '/news/how-to-choose-sup-oem-manufacturer',
      },
      {
        title: 'Calendario de desarrollo de producto SUP',
        body: 'Muestra en 7–12 días, producción en 25–35 días, utillaje más 15–20 — el calendario completo, etapa por etapa.',
        href: '/news/custom-sup-development-timeline',
      },
      {
        title: 'Información para preparar antes de pedir',
        body: 'Los cinco detalles que permiten a una fábrica cotizar con precisión a la primera — y evitar rehacer la especificación.',
        href: '/news/info-needed-before-sup-production',
      },
      {
        title: 'SUP de marca privada: la guía completa paso a paso',
        body: 'De elegir fábrica a producción — el recorrido completo en seis pasos para nuevas marcas.',
        href: '/news/private-label-sup-guide',
      },
      {
        title: 'MOQ y precios OEM de SUP',
        body: 'Niveles de MOQ desde 1–2 muestras hasta 90–100+ unidades de volumen, los seis factores de coste y cinco formas de reducir coste sin bajar calidad.',
        href: '/news/sup-oem-moq-pricing',
      },
      {
        title: 'Certificación CE para SUP hinchables',
        body: 'Qué cubre realmente el CE, los cinco documentos que debes exigir y cómo verificar que un certificado nombra tu modelo.',
        href: '/news/ce-certification-inflatable-sup',
      },
    ],
  },
  fr: {
    kicker: 'Guides de fabrication',
    title: 'De l\'usine au produit fini',
    sub: 'La bibliothèque complète d\'approvisionnement — chaque étape d\'un projet SUP sur mesure avec nos délais, conditions et documentation réels.',
    guides: [
      {
        title: 'Comment choisir un fabricant OEM de SUP',
        body: 'Les questions d\'audit qui distinguent une vraie usine d\'un intermédiaire : certifications, contrôle qualité, échantillons et propriété.',
        href: '/news/how-to-choose-sup-oem-manufacturer',
      },
      {
        title: 'Calendrier de développement produit SUP',
        body: 'Échantillon sous 7–12 jours, production sous 25–35 jours, outillage plus 15–20 — le calendrier complet, étape par étape.',
        href: '/news/custom-sup-development-timeline',
      },
      {
        title: 'Informations à préparer avant de commander',
        body: 'Les cinq détails qui permettent à une usine de chiffrer précisément du premier coup — et d\'éviter de refaire la spécification.',
        href: '/news/info-needed-before-sup-production',
      },
      {
        title: 'Marque blanche : le guide complet, étape par étape',
        body: 'Du choix de l\'usine à la production — le parcours complet en six étapes pour les nouvelles marques.',
        href: '/news/private-label-sup-guide',
      },
      {
        title: 'MOQ et tarifs OEM de SUP',
        body: 'Niveaux de MOQ allant de 1–2 échantillons à des séries de 90–100+ unités, les six facteurs de coût, et cinq façons de réduire les coûts sans sacrifier la qualité.',
        href: '/news/sup-oem-moq-pricing',
      },
      {
        title: 'Certification CE pour SUP gonflables',
        body: 'Ce que couvre réellement le CE, les cinq documents à exiger, et comment vérifier qu\'un certificat nomme bien votre modèle.',
        href: '/news/ce-certification-inflatable-sup',
      },
    ],
  },
  de: {
    kicker: 'Fertigungsleitfäden',
    title: 'Von der Fabrik zum Fertigprodukt',
    sub: 'Die vollständige Sourcing-Bibliothek — jede Phase eines individuellen SUP-Projekts mit unseren realen Lieferzeiten, Konditionen und Dokumenten.',
    guides: [
      {
        title: 'So wählen Sie einen SUP-OEM-Hersteller',
        body: 'Die Audit-Fragen, die eine echte Fabrik von einem Händler unterscheiden: Zertifizierungen, Qualitätskontrolle, Muster und Eigentum.',
        href: '/news/how-to-choose-sup-oem-manufacturer',
      },
      {
        title: 'Zeitplan der SUP-Produktentwicklung',
        body: 'Muster in 7–12 Tagen, Produktion in 25–35 Tagen, Werkzeug plus 15–20 — der vollständige Kalender, Stufe für Stufe.',
        href: '/news/custom-sup-development-timeline',
      },
      {
        title: 'Informationen, die Sie vor der Bestellung vorbereiten',
        body: 'Die fünf Angaben, mit denen eine Fabrik beim ersten Anlauf präzise kalkulieren kann — und Spezifikationsnacharbeit vermeidet.',
        href: '/news/info-needed-before-sup-production',
      },
      {
        title: 'Private Label: Der vollständige Schritt-für-Schritt-Leitfaden',
        body: 'Von der Fabrikwahl bis zur Produktion — der komplette Weg in sechs Schritten für neue Marken.',
        href: '/news/private-label-sup-guide',
      },
      {
        title: 'SUP-OEM-MOQ und Preisgestaltung',
        body: 'MOQ-Stufen von 1–2 Mustern bis zu Serien mit 90–100+ Stück, die sechs Kostentreiber und fünf Wege, Kosten zu senken, ohne an Qualität zu sparen.',
        href: '/news/sup-oem-moq-pricing',
      },
      {
        title: 'CE-Zertifizierung für aufblasbare SUPs',
        body: 'Was die CE wirklich abdeckt, die fünf Dokumente, die Sie verlangen sollten, und wie Sie prüfen, ob ein Zertifikat Ihr Modell benennt.',
        href: '/news/ce-certification-inflatable-sup',
      },
    ],
  },
  it: {
    kicker: 'Guide di produzione',
    title: 'Dalla fabbrica al prodotto finito',
    sub: "La libreria di sourcing completa — ogni fase di un progetto SUP personalizzato con i nostri tempi di consegna, condizioni e documenti reali.",
    guides: [
      {
        title: 'Come scegliere un produttore OEM di SUP',
        body: 'Le domande di audit che distinguono una vera fabbrica da un intermediario: certificazioni, controllo qualità, campioni e proprietà.',
        href: '/news/how-to-choose-sup-oem-manufacturer',
      },
      {
        title: 'Tempi dello sviluppo prodotto SUP',
        body: 'Campione in 7–12 giorni, produzione in 25–35 giorni, stampi più 15–20 — il calendario completo, fase per fase.',
        href: '/news/custom-sup-development-timeline',
      },
      {
        title: 'Informazioni da preparare prima di ordinare',
        body: 'I cinque dettagli che permettono a una fabbrica di quotare con precisione al primo colpo — evitando rilavorazioni della specifica.',
        href: '/news/info-needed-before-sup-production',
      },
      {
        title: 'Private label: la guida completa passo dopo passo',
        body: 'Dalla scelta della fabbrica alla produzione — il percorso completo in sei passaggi per i nuovi marchi.',
        href: '/news/private-label-sup-guide',
      },
      {
        title: 'MOQ OEM SUP e prezzi',
        body: 'Livelli di MOQ da 1–2 campioni fino a serie da 90–100+ pezzi, i sei fattori di costo e cinque modi per ridurre i costi senza sacrificare la qualità.',
        href: '/news/sup-oem-moq-pricing',
      },
      {
        title: 'Certificazione CE per i SUP gonfiabili',
        body: 'Cosa copre davvero la CE, i cinque documenti da richiedere e come verificare che un certificato menzioni il tuo modello.',
        href: '/news/ce-certification-inflatable-sup',
      },
    ],
  },
  pt: {
    kicker: 'Guias de produção',
    title: 'Da fábrica ao produto acabado',
    sub: "A biblioteca de sourcing completa — cada fase de um projeto SUP personalizado com os nossos prazos de entrega, condições e documentos reais.",
    guides: [
      {
        title: 'Como escolher um fabricante OEM de SUP',
        body: 'As perguntas de auditoria que distinguem uma fábrica real de um intermediário: certificações, controlo de qualidade, amostras e propriedade.',
        href: '/news/how-to-choose-sup-oem-manufacturer',
      },
      {
        title: 'Prazos de desenvolvimento de produto SUP',
        body: 'Amostra em 7–12 dias, produção em 25–35 dias, moldes mais 15–20 — o calendário completo, fase a fase.',
        href: '/news/custom-sup-development-timeline',
      },
      {
        title: 'Informações a preparar antes de encomendar',
        body: 'Os cinco detalhes que permitem a uma fábrica quotar com precisão à primeira — evitando retrabalhos na especificação.',
        href: '/news/info-needed-before-sup-production',
      },
      {
        title: 'Private label: o guia completo passo a passo',
        body: 'Da escolha da fábrica à produção — o percurso completo em seis passos para novas marcas.',
        href: '/news/private-label-sup-guide',
      },
      {
        title: 'MOQ OEM SUP e preços',
        body: 'Níveis de MOQ de 1–2 amostras até séries de 90–100+ unidades, os seis fatores de custo e cinco formas de reduzir os custos sem sacrificar a qualidade.',
        href: '/news/sup-oem-moq-pricing',
      },
      {
        title: 'Certificação CE para SUP insufláveis',
        body: 'O que a CE cobre realmente, os cinco documentos a exigir e como verificar que um certificado menciona o teu modelo.',
        href: '/news/ce-certification-inflatable-sup',
      },
    ],
  },
  nl: {
    kicker: 'Productiegidsen',
    title: 'Van fabriek tot eindproduct',
    sub: 'De volledige sourcing-bibliotheek — elke fase van een op maat gemaakt SUP-project met onze echte levertijden, voorwaarden en documenten.',
    guides: [
      {
        title: 'Hoe kies je een OEM-fabrikant voor SUP',
        body: 'De auditvragen die een echte fabriek onderscheiden van een tussenpersoon: certificeringen, kwaliteitscontrole, monsters en eigendom.',
        href: '/news/how-to-choose-sup-oem-manufacturer',
      },
      {
        title: 'Tijdlijn van SUP-productontwikkeling',
        body: 'Monster binnen 7–12 dagen, productie binnen 25–35 dagen, matrijzen plus 15–20 — de volledige kalender, fase per fase.',
        href: '/news/custom-sup-development-timeline',
      },
      {
        title: 'Informatie om voor te bereiden vóór de bestelling',
        body: 'De vijf gegevens waarmee een fabriek bij de eerste poging nauwkeurig kan offreren — en herwerk van de specificatie vermijdt.',
        href: '/news/info-needed-before-sup-production',
      },
      {
        title: 'Private label: de complete stapsgewijze gids',
        body: 'Van de keuze van de fabriek tot de productie — het volledige traject in zes stappen voor nieuwe merken.',
        href: '/news/private-label-sup-guide',
      },
      {
        title: 'OEM-MOQ voor SUP en prijzen',
        body: 'MOQ-niveaus van 1–2 monsters tot series van 90–100+ stuks, de zes kostendrijvers en vijf manieren om kosten te besparen zonder kwaliteitsverlies.',
        href: '/news/sup-oem-moq-pricing',
      },
      {
        title: 'CE-certificering voor opblaasbare SUPs',
        body: 'Wat de CE echt dekt, de vijf documenten die je moet opvragen en hoe je controleert dat een certificaat jouw model vermeldt.',
        href: '/news/ce-certification-inflatable-sup',
      },
    ],
  },
  sv: {
    kicker: 'Tillverkningsguider',
    title: 'Från Fabrik till Färdig Produkt',
    sub: 'Det kompletta sourcing-biblioteket — varje fas i ett anpassat SUP-projekt med våra verkliga ledtider, villkor och dokumentation.',
    guides: [
      {
        title: 'Så väljer du en SUP-OEM-tillverkare',
        body: 'Auditfrågorna som skiljer en riktig fabrik från en mellanhand: certifieringar, kvalitetssäkring, prover och ägarskap.',
        href: '/news/how-to-choose-sup-oem-manufacturer',
      },
      {
        title: 'Tidsplan för SUP-produktutveckling',
        body: 'Prov inom 7–12 dagar, produktion inom 25–35 dagar, verktyg plus 15–20 — hela kalendern, steg för steg.',
        href: '/news/custom-sup-development-timeline',
      },
      {
        title: 'Information att förbereda före beställning',
        body: 'De fem uppgifterna som gör att en fabrik kan offerera korrekt på första försöket — och undvika omarbete av specifikationen.',
        href: '/news/info-needed-before-sup-production',
      },
      {
        title: 'Private label: den kompletta steg-för-steg-guiden',
        body: 'Från fabriksval till produktion — hela vägen i sex steg för nya varumärken.',
        href: '/news/private-label-sup-guide',
      },
      {
        title: 'SUP OEM-MOQ och prissättning',
        body: 'MOQ-nivåer från 1–2 prover till serier på 90–100+ enheter, de sex kostnadsdrivarna och fem sätt att sänka kostnaderna utan att offra kvalitet.',
        href: '/news/sup-oem-moq-pricing',
      },
      {
        title: 'CE-certifiering för uppblåsbara SUP:er',
        body: 'Vad CE verkligen omfattar, de fem dokument du bör kräva och hur du kontrollerar att ett certifikat namnger din modell.',
        href: '/news/ce-certification-inflatable-sup',
      },
    ],
  },
  no: {
    kicker: 'Produksjonsguider',
    title: 'Fra fabrikk til ferdig produkt',
    sub: 'Det komplette innkjøpsbiblioteket — hver fase i et skreddersydd SUP-prosjekt med våre reelle leveringstider, vilkår og dokumentasjon.',
    guides: [
      {
        title: 'Slik velger du en SUP-OEM-produsent',
        body: 'Revisjonsspørsmålene som skiller en ekte fabrikk fra et mellomledd: sertifiseringer, kvalitetssikring, prøver og eierskap.',
        href: '/news/how-to-choose-sup-oem-manufacturer',
      },
      {
        title: 'Tidsplan for SUP-produktutvikling',
        body: 'Prøver innen 7–12 dager, produksjon innen 25–35 dager, verktøy plus 15–20 — hele kalenderen, trinn for trinn.',
        href: '/news/custom-sup-development-timeline',
      },
      {
        title: 'Informasjon du bør forberede før bestilling',
        body: 'De fem opplysningene som gjør at en fabrikk kan gi et korrekt tilbud på første forsøk — og unngå omarbeid av spesifikasjonen.',
        href: '/news/info-needed-before-sup-production',
      },
      {
        title: 'Private label: den komplette trinn-for-trinn-guiden',
        body: 'Fra valg av fabrikk til produksjon — hele veien i seks trinn for nye merker.',
        href: '/news/private-label-sup-guide',
      },
      {
        title: 'SUP OEM-MOQ og prising',
        body: 'MOQ-nivåer fra 1–2 prøver til serier på 90–100+ enheter, de seks kostnadsdriverne og fem måter å redusere kostnadene uten å gå på kompromiss med kvaliteten.',
        href: '/news/sup-oem-moq-pricing',
      },
      {
        title: 'CE-sertifisering for oppblåsbare SUP-er',
        body: 'Hva CE faktisk dekker, de fem dokumentene du bør kreve, og hvordan du sjekker at et sertifikat nevner modellen din.',
        href: '/news/ce-certification-inflatable-sup',
      },
    ],
  },
  pl: {
    kicker: 'Przewodniki produkcyjne',
    title: 'Od fabryki do gotowego produktu',
    sub: 'Kompletna biblioteka zakupowa — każdy etap projektu deski SUP na zamówienie wraz z naszymi rzeczywistymi czasami realizacji, warunkami i dokumentacją.',
    guides: [
      {
        title: 'Jak wybrać producenta OEM desek SUP',
        body: 'Pytania podczas audytu, które odróżniają prawdziwą fabrykę od pośrednika: certyfikaty, kontrola jakości, próbki i struktura własności.',
        href: '/news/how-to-choose-sup-oem-manufacturer',
      },
      {
        title: 'Harmonogram rozwoju produktu SUP',
        body: 'Próbka w 7–12 dni, produkcja w 25–35 dni, forma plus 15–20 — pełny kalendarz, etap po etapie.',
        href: '/news/custom-sup-development-timeline',
      },
      {
        title: 'Informacje do przygotowania przed zamówieniem',
        body: 'Pięć danych, dzięki którym fabryka przygotuje trafną wycenę za pierwszym razem — i uniknie poprawek w specyfikacji.',
        href: '/news/info-needed-before-sup-production',
      },
      {
        title: 'Marka własna: kompletny przewodnik krok po kroku',
        body: 'Od wyboru fabryki po produkcję — cała droga w sześciu krokach dla nowych marek.',
        href: '/news/private-label-sup-guide',
      },
      {
        title: 'MOQ i wycena OEM desek SUP',
        body: 'Poziomy MOQ od 1–2 próbek po serie 90–100+ sztuk, sześć czynników wpływających na koszt i pięć sposobów obniżenia kosztów bez kompromisów w jakości.',
        href: '/news/sup-oem-moq-pricing',
      },
      {
        title: 'Certyfikacja CE nadmuchiwanych desek SUP',
        body: 'Co obejmuje certyfikacja CE, których pięć dokumentów warto żądać i jak sprawdzić, czy certyfikat wymienia Twój model.',
        href: '/news/ce-certification-inflatable-sup',
      },
    ],
  },
}

/* ─────────────────────────── FAQ ─────────────────────────── */

export interface FaqItem {
  q: string
  a: string
}

export interface FaqContent {
  kicker: string
  title: string
  sub: string
  items: FaqItem[]
}

export const faq: Localized<FaqContent> = {
  en: {
    kicker: 'FAQ',
    title: 'Manufacturing FAQ',
    sub: 'Questions buyers ask before placing an order — answered with our actual terms.',
    items: [
      {
        q: 'What does iSupfactory manufacture?',
        a: 'iSupfactory is a professional SUP manufacturing factory specializing in customized inflatable SUP boards and related water sports products for global brands and businesses — engineered, sampled and produced in our own 12,500 m² plant in Qingdao, China.',
      },
      {
        q: 'What is the difference between OEM and ODM?',
        a: `OEM: we manufacture to your approved specification — your drawings, dimensions, materials and packaging. You own the design and intellectual property. ODM: our engineering team develops the board from your brief — whether a market concept, performance target or adaptation of a proven platform — and you approve before production. Private label puts your brand on an existing validated platform with no structural changes. Both OEM and ODM routes run through the same plant, QC system and export team; ODM is the fastest route to a branded board, starting at ${MOQ_SHORT.standardRun} with samples in ${FACTS.sampleTime}.`,
      },
      {
        q: 'What is your minimum order quantity?',
        a: `Co-branding small bulk starts at 5–10 pcs; pilot batches from 20–50 pcs. Standard volume production starts at ${MOQ_SHORT.standardRun}. Custom-mould shapes run at the volume tier, depending on complexity.`,
      },
      {
        q: 'How long does production take?',
        a: '25–35 days from confirmed PO and deposit. Custom tooling adds 15–20 days for mold development. Expedited production is available for seasonal rush orders.',
      },
      {
        q: 'How fast can I get a sample?',
        a: 'Prototype samples typically ship within 7–12 days of approved artwork and specification.',
      },
      {
        q: 'What certifications do you hold?',
        a: 'ISO 9001 for quality management, CE certification for models destined for EU markets (scope confirmed per project), and valid BSCI social compliance certification with the audit report available on request. REACH and RoHS documentation is provided with every order.',
      },
      {
        q: 'Do you handle export documentation?',
        a: 'Yes. Export documentation and export-grade packing are handled in-house, and we supply brands in 50+ countries across the EU, US, AU and Asia.',
      },
      {
        q: 'Will my design be shown to other clients?',
        a: 'No. Artwork, tooling and specification files remain your property. We sign an NDA before any file exchange and we never reuse or resell client tooling or designs.',
      },
      {
        q: 'Do you sell your own SUP brand?',
        a: 'No. We manufacture exclusively under our clients’ brands. We do not sell to end consumers and we do not compete with our clients in any market.',
      },
      {
        q: 'Can you match a board I already sell?',
        a: 'Yes. Send a physical sample or full specification and our engineering team will return a manufacturability report with materials, layup, tolerances and cost drivers.',
      },
      {
        q: 'Can you manufacture SUP boards with our logo?',
        a: 'Yes. Custom branding — logos, colors, graphics and surface artwork — is incorporated into the product design and production according to the agreed specifications. You own all brand and artwork files.',
      },
      {
        q: 'Can you develop a completely new SUP product?',
        a: 'Yes. Custom product development starts from your concept, sketches, specifications or market requirements. We work through specification review, structural engineering, prototype sampling and approval before mass production.',
      },
      {
        q: 'What materials do you use for inflatable SUP boards?',
        a: `Inflatable SUPs are built with drop-stitch construction and a choice of PVC layers and densities to match weight, stiffness and price targets, with REACH/RoHS-compliant materials and quality certification (ISO 9001, CE, BSCI).`,
      },
      {
        q: 'Do you work with new or startup SUP brands?',
        a: `Yes. OEM/ODM projects are developed according to your product requirements, target market and volume — pilot runs start at 20–50 pcs and standard volume production at ${MOQ_SHORT.standardRun}.`,
      },
      {
        q: 'What information should I provide for an OEM SUP inquiry?',
        a: 'The most useful information: product type, target market, board size or specifications, desired construction, branding requirements, estimated quantity, packaging requirements and target launch schedule. Our team returns an engineering assessment and quotation within one business day.',
      },
    ],
  },
  es: {
    kicker: 'Preguntas frecuentes',
    title: 'Preguntas sobre fabricación',
    sub: 'Estas son las preguntas que un comprador plantea antes de encargar — respondidas con nuestras condiciones reales.',
    items: [
      {
        q: '¿Qué fabrica iSupfactory?',
        a: 'iSupfactory es una fábrica profesional de fabricación de SUP especializada en tablas hinchables personalizadas y productos acuáticos relacionados para marcas y empresas globales — diseñadas, muestreadas y producidas en nuestra propia planta de 12,500 m² en Qingdao, China.',
      },
      {
        q: '¿Cuál es la diferencia entre OEM y ODM?',
        a: `OEM: fabricamos según tu especificación aprobada — planos, dimensiones, materiales y embalaje. Tú eres propietario del diseño y la propiedad intelectual. ODM: nuestro equipo de ingeniería desarrolla la tabla a partir de tu brief — ya sea un concepto de mercado, un objetivo de rendimiento o la adaptación de una plataforma probada — y tú apruebas antes de la producción. Marca privada pone tu marca en una plataforma validada existente sin cambios estructurales. Ambas rutas pasan por la misma planta, el mismo sistema de QC y el mismo equipo de exportación; ODM es la vía más rápida hacia una tabla con tu marca, desde ${MOQ_SHORT.standardRun} y con muestras en ${FACTS.sampleTime}.`,
      },
      {
        q: '¿Cuál es la cantidad mínima de pedido?',
        a: `El pequeño lote de co-branding parte de 5–10 uds.; los lotes piloto, de 20–50 uds. La producción de volumen estándar parte de ${MOQ_SHORT.standardRun}. Los diseños con molde a medida se producen en el tramo de volumen, según la complejidad.`,
      },
      {
        q: '¿Cuánto tarda la producción?',
        a: '25–35 días desde el PO confirmado y el depósito. El utillaje añade 15–20 días de desarrollo de molde. Se dispone de producción acelerada para los picos de temporada.',
      },
      {
        q: '¿Qué rapidez tengo para recibir una muestra?',
        a: 'Las muestras de prototipo salen en 7–12 días tras la aprobación del arte y la especificación.',
      },
      {
        q: '¿Qué certificaciones tenéis?',
        a: 'ISO 9001 para la gestión de calidad, certificación CE para modelos destinados al mercado de la UE (alcance confirmado por proyecto) y certificación BSCI válida con informe de auditoría disponible. La documentación REACH y RoHS se entrega con cada pedido.',
      },
      {
        q: '¿Gestionáis la documentación de exportación?',
        a: 'Sí. La documentación de exportación y el embalaje de exportación se gestionan en casa, y suministramos a marcas en más de 50 países de la UE, EE. UU., Australia y Asia.',
      },
      {
        q: '¿Mostraréis mi diseño a otros clientes?',
        a: 'No. Los archivos de arte, utillaje y especificaciones siguen siendo de tu propiedad. Firmamos un NDA antes de cualquier intercambio y nunca reutilizamos ni vendemos moldes o diseños de clientes.',
      },
      {
        q: '¿Vendéis vuestra propia marca de SUP?',
        a: 'No. Fabricamos exclusivamente bajo las marcas de nuestros clientes. No vendemos a consumidores finales y no competimos con nuestros clientes en ningún mercado.',
      },
      {
        q: '¿Podéis replicar una tabla que ya vendo?',
        a: 'Sí. Envíanos una muestra física o una especificación completa y nuestro equipo de ingeniería te devolverá un informe de fabricabilidad con materiales, capas de construcción, tolerancias y factores de coste.',
      },
      {
        q: '¿Podéis fabricar tablas SUP con nuestro logotipo?',
        a: 'Sí. La personalización de marca — logotipos, colores, gráficos y arte de superficie — se incorpora al diseño y a la producción según las especificaciones acordadas. Todos los archivos de marca y arte son de tu propiedad.',
      },
      {
        q: '¿Podéis desarrollar un producto SUP completamente nuevo?',
        a: 'Sí. El desarrollo de productos personalizados parte de tu concepto, bocetos, especificaciones o requisitos de mercado. Trabajamos en revisión de especificaciones, ingeniería estructural, muestras de prototipo y aprobación antes de la producción en masa.',
      },
      {
        q: '¿Qué materiales usáis para las tablas SUP hinchables?',
        a: 'Los SUP hinchables se fabrican con construcción drop-stitch y una selección de capas y densidades de PVC para ajustar peso, rigidez y precio, con materiales conformes a REACH/RoHS y certificación de calidad (ISO 9001, CE, BSCI).',
      },
      {
        q: '¿Trabajáis con marcas de SUP nuevas o emergentes?',
        a: `Sí. Los proyectos OEM/ODM se desarrollan según tus requisitos de producto, mercado objetivo y volumen — los pilotos parten de 20–50 uds. y la producción de volumen estándar, de ${MOQ_SHORT.standardRun}.`,
      },
      {
        q: '¿Qué información debo dar en una consulta OEM de SUP?',
        a: 'La información más útil: tipo de producto, mercado objetivo, tamaño o especificaciones de la tabla, construcción deseada, requisitos de marca, cantidad estimada, requisitos de embalaje y fecha de lanzamiento prevista. Nuestro equipo responde con una evaluación de ingeniería y un presupuesto en un día laborable.',
      },
    ],
  },
  fr: {
    kicker: 'FAQ',
    title: 'Questions fréquentes sur la fabrication',
    sub: 'Les questions que les acheteurs posent avant de passer commande — réponses avec nos conditions réelles.',
    items: [
      {
        q: 'Que fabrique iSupfactory ?',
        a: 'iSupfactory est une usine professionnelle de fabrication de SUP, spécialisée dans les planches de SUP gonflables personnalisées et les produits de sports nautiques associés pour les marques et entreprises du monde entier — conçues, échantillonnées et produites dans notre propre usine de 12 500 m² à Qingdao, en Chine.',
      },
      {
        q: 'Quelle est la différence entre OEM et ODM ?',
        a: `OEM : nous fabriquons selon votre spécification approuvée — vos plans, dimensions, matériaux et packaging. Vous possédez la conception et la propriété intellectuelle. ODM : notre équipe d'ingénierie développe la planche à partir de votre brief — qu'il s'agisse d'un concept de marché, d'un objectif de performance ou de l'adaptation d'une plateforme éprouvée — et vous approuvez avant la production. La marque blanche appose votre marque sur une plateforme validée existante, sans modification structurelle. Les deux filières passent par la même usine, le même système de contrôle qualité et la même équipe d'export ; l'ODM est la voie la plus rapide vers une planche à votre marque, à partir de ${MOQ_SHORT.standardRun} avec des échantillons en ${FACTS.sampleTime}.`,
      },
      {
        q: 'Quelle est votre quantité minimale de commande ?',
        a: `Le petit lot en co-branding part de 5–10 pièces ; les lots pilotes de 20–50 pièces. La production en volume standard part de ${MOQ_SHORT.standardRun}. Les formes à moule sur mesure se situent dans le palier de volume, selon la complexité.`,
      },
      {
        q: 'Combien de temps prend la production ?',
        a: '25–35 jours à compter du bon de commande confirmé et de l\'acompte. L\'outillage sur mesure ajoute 15–20 jours de développement de moule. Une production accélérée est disponible pour les commandes urgentes de saison.',
      },
      {
        q: 'En combien de temps puis-je recevoir un échantillon ?',
        a: 'Les échantillons de prototype partent généralement sous 7–12 jours après approbation du graphisme et de la spécification.',
      },
      {
        q: 'Quelles certifications détenez-vous ?',
        a: 'ISO 9001 pour le management de la qualité, certification CE pour les modèles destinés aux marchés de l\'UE (périmètre confirmé par projet), et certification BSCI de conformité sociale en cours de validité, le rapport d\'audit étant disponible sur demande. La documentation REACH et RoHS est fournie avec chaque commande.',
      },
      {
        q: 'Gérez-vous la documentation à l\'export ?',
        a: 'Oui. La documentation à l\'export et l\'emballage adapté à l\'export sont pris en charge en interne, et nous approvisionnons des marques dans plus de 50 pays de l\'UE, des États-Unis, d\'Australie et d\'Asie.',
      },
      {
        q: 'Mon design sera-t-il montré à d\'autres clients ?',
        a: 'Non. Les fichiers de graphisme, l\'outillage et les spécifications restent votre propriété. Nous signons un NDA avant tout échange de fichiers et ne réutilisons ni ne revendons jamais l\'outillage ou les designs de nos clients.',
      },
      {
        q: 'Vendez-vous votre propre marque de SUP ?',
        a: 'Non. Nous fabriquons exclusivement sous les marques de nos clients. Nous ne vendons pas aux consommateurs finaux et ne sommes en concurrence avec aucun de nos clients sur quelque marché que ce soit.',
      },
      {
        q: 'Pouvez-vous reproduire une planche que je vends déjà ?',
        a: 'Oui. Envoyez un échantillon physique ou une spécification complète et notre équipe d\'ingénierie vous retournera un rapport de fabricabilité avec les matériaux, le layup, les tolérances et les facteurs de coût.',
      },
      {
        q: 'Pouvez-vous fabriquer des SUP avec notre logo ?',
        a: 'Oui. La personnalisation de marque — logos, couleurs, graphismes et visuels de surface — est intégrée à la conception et à la production selon les spécifications convenues. Vous détenez l\'ensemble des fichiers de marque et de graphisme.',
      },
      {
        q: 'Pouvez-vous développer un produit SUP entièrement nouveau ?',
        a: 'Oui. Le développement de produit sur mesure part de votre concept, de vos croquis, de vos spécifications ou de vos exigences de marché. Nous travaillons à travers la revue de spécification, l\'ingénierie structurelle, l\'échantillonnage de prototype et l\'approbation avant la production de masse.',
      },
      {
        q: 'Quels matériaux utilisez-vous pour les SUP gonflables ?',
        a: 'Les SUP gonflables sont construits en structure drop-stitch avec un choix de couches et de densités de PVC pour atteindre les objectifs de poids, de rigidité et de prix, avec des matériaux conformes REACH/RoHS et une certification qualité (ISO 9001, CE, BSCI).',
      },
      {
        q: 'Travaillez-vous avec des marques de SUP nouvelles ou en démarrage ?',
        a: `Oui. Les projets OEM/ODM sont développés selon vos exigences produit, votre marché cible et votre volume — les séries pilotes partent de 20–50 pièces et la production en volume standard de ${MOQ_SHORT.standardRun}.`,
      },
      {
        q: 'Quelles informations dois-je fournir pour une demande OEM de SUP ?',
        a: 'Les informations les plus utiles : le type de produit, le marché cible, la taille ou les spécifications de la planche, la construction souhaitée, les exigences de marque, la quantité estimée, les exigences d\'emballage et le calendrier de lancement visé. Notre équipe renvoie une évaluation d\'ingénierie et un devis sous un jour ouvrable.',
      },
    ],
  },
  de: {
    kicker: 'FAQ',
    title: 'Häufige Fragen zur Fertigung',
    sub: 'Fragen, die Käufer vor einer Bestellung stellen — beantwortet mit unseren tatsächlichen Konditionen.',
    items: [
      {
        q: 'Was stellt iSupfactory her?',
        a: 'iSupfactory ist eine professionelle SUP-Fertigungsfabrik, spezialisiert auf individuelle aufblasbare SUP-Boards und verwandte Wassersportprodukte für globale Marken und Unternehmen — konstruiert, bemustert und produziert in unserem eigenen Werk mit 12,500 m² in Qingdao, China.',
      },
      {
        q: 'Was ist der Unterschied zwischen OEM und ODM?',
        a: `OEM: Wir fertigen nach Ihrer freigegebenen Spezifikation — Ihre Zeichnungen, Maße, Materialien und Verpackung. Sie besitzen das Design und das geistige Eigentum. ODM: Unser Ingenieurteam entwickelt das Board auf Basis Ihres Briefings — ob Marktkonzept, Leistungsziel oder Adaption einer bewährten Plattform —, und Sie geben es vor der Produktion frei. Private Label bringt Ihre Marke ohne strukturelle Änderungen auf eine bestehende validierte Plattform. Beide Wege, OEM und ODM, laufen durch dasselbe Werk, dasselbe Qualitätssystem und dasselbe Exportteam; ODM ist der schnellste Weg zu einem Board mit Ihrer Marke, ab ${MOQ_SHORT.standardRun} mit Mustern in ${FACTS.sampleTime}.`,
      },
      {
        q: 'Wie hoch ist Ihre Mindestbestellmenge?',
        a: `Co-Branding in kleiner Stückzahl startet ab 5–10 Stück; Pilotchargen ab 20–50 Stück. Die Standard-Serienproduktion startet ab ${MOQ_SHORT.standardRun}. Formen mit individueller Werkzeugauslegung werden je nach Komplexität auf der Mengenstufe gefertigt.`,
      },
      {
        q: 'Wie lange dauert die Produktion?',
        a: '25–35 Tage ab bestätigter PO und Anzahlung. Individuelles Werkzeug verlängert die Formenentwicklung um 15–20 Tage. Für saisonale Eilaufträge ist eine Expressproduktion verfügbar.',
      },
      {
        q: 'Wie schnell erhalte ich ein Muster?',
        a: 'Prototypenmuster werden in der Regel innerhalb von 7–12 Tagen nach Freigabe von Artwork und Spezifikation versendet.',
      },
      {
        q: 'Welche Zertifizierungen besitzen Sie?',
        a: 'ISO 9001 für Qualitätsmanagement, CE-Zertifizierung für Modelle für den EU-Markt (Geltungsbereich pro Projekt bestätigt) und eine gültige BSCI-Zertifizierung für soziale Konformität, Prüfbericht auf Anfrage. REACH- und RoHS-Dokumentation wird mit jeder Bestellung geliefert.',
      },
      {
        q: 'Übernehmen Sie die Exportdokumentation?',
        a: 'Ja. Exportdokumentation und exportgerechte Verpackung werden intern abgewickelt, und wir beliefern Marken in über 50 Ländern in der EU, den USA, Australien und Asien.',
      },
      {
        q: 'Wird mein Design weiteren Kunden gezeigt?',
        a: 'Nein. Artwork, Werkzeug und Spezifikationsdateien bleiben Ihr Eigentum. Wir unterzeichnen vor jedem Dateiaustausch eine NDA und verwenden Werkzeuge oder Designs von Kunden nie weiter und verkaufen sie nicht.',
      },
      {
        q: 'Verkaufen Sie eine eigene SUP-Marke?',
        a: 'Nein. Wir fertigen ausschließlich unter den Marken unserer Kunden. Wir verkaufen nicht an Endverbraucher und treten in keinem Markt in Wettbewerb zu unseren Kunden.',
      },
      {
        q: 'Können Sie ein Board, das ich bereits verkaufe, nachbauen?',
        a: 'Ja. Senden Sie ein physisches Muster oder eine vollständige Spezifikation, und unser Ingenieurteam erstellt einen Fertigbarkeitsbericht mit Materialien, Aufbau, Toleranzen und Kostentreibern.',
      },
      {
        q: 'Können Sie SUP-Boards mit unserem Logo herstellen?',
        a: 'Ja. Individuelles Branding — Logos, Farben, Grafiken und Oberflächen-Artwork — wird gemäß den vereinbarten Spezifikationen in Design und Produktion integriert. Alle Marken- und Artwork-Dateien gehören Ihnen.',
      },
      {
        q: 'Können Sie ein völlig neues SUP-Produkt entwickeln?',
        a: 'Ja. Die individuelle Produktentwicklung startet bei Ihrem Konzept, Ihren Skizzen, Spezifikationen oder Marktanforderungen. Wir arbeiten über Spezifikationsprüfung, strukturelles Engineering, Prototypenmuster und Freigabe, bevor es in die Serienproduktion geht.',
      },
      {
        q: 'Welche Materialien verwenden Sie für aufblasbare SUP-Boards?',
        a: 'Aufblasbare SUPs werden in Drop-Stitch-Konstruktion mit wählbaren PVC-Lagen und -Dichten gebaut, um Gewichts-, Steifigkeits- und Preisziele zu treffen, mit REACH/RoHS-konformen Materialien und Qualitätszertifizierung (ISO 9001, CE, BSCI).',
      },
      {
        q: 'Arbeiten Sie mit neuen oder Start-up-SUP-Marken zusammen?',
        a: `Ja. OEM/ODM-Projekte werden nach Ihren Produktanforderungen, Ihrem Zielmarkt und Ihrem Volumen entwickelt — Pilotserien starten ab 20–50 Stück und die Standard-Serienproduktion ab ${MOQ_SHORT.standardRun}.`,
      },
      {
        q: 'Welche Informationen sollte ich für eine OEM-SUP-Anfrage bereitstellen?',
        a: 'Am hilfreichsten: Produkttyp, Zielmarkt, Boardgröße oder Spezifikationen, gewünschte Konstruktion, Branding-Anforderungen, geschätzte Menge, Verpackungsanforderungen und angestrebter Launch-Termin. Unser Team sendet innerhalb eines Werktags eine technische Bewertung und ein Angebot.',
      },
    ],
  },
  it: {
    kicker: 'FAQ',
    title: 'Domande frequenti sulla produzione',
    sub: 'Le domande che gli acquirenti pongono prima di ordinare — risposte con le nostre condizioni reali.',
    items: [
      {
        q: 'Cosa produce iSupfactory?',
        a: "iSupfactory è una fabbrica professionale specializzata in tavole SUP gonfiabili personalizzate e prodotti per sport acquatici correlati, per marchi e aziende globali — progettate, campionate e prodotte nel nostro stabilimento di 12,500 m² a Qingdao, Cina.",
      },
      {
        q: 'Qual è la differenza tra OEM e ODM?',
        a: `OEM: produciamo secondo la tua specifica approvata — i tuoi disegni, misure, materiali e imballaggio. Possiedi il design e la proprietà intellettuale. ODM: il nostro team di ingegneri sviluppa la tavola in base al tuo briefing — sia un concetto di mercato, un obiettivo di prestazione o l'adattamento di una piattaforma collaudata — e tu la approvi prima della produzione. Il private label mette il tuo marchio su una piattaforma esistente e validata senza modifiche strutturali. Entrambi i percorsi, OEM e ODM, passano dallo stesso stabilimento, lo stesso sistema qualità e lo stesso team export; ODM è la via più rapida per una tavola con il tuo marchio, a partire da ${MOQ_SHORT.standardRun} con campioni in ${FACTS.sampleTime}.`,
      },
      {
        q: 'Qual è la vostra quantità minima di ordine?',
        a: `Il co-branding in piccole quantità parte da 5–10 pezzi; i lotti pilota da 20–50 pezzi. La produzione standard in serie parte da ${MOQ_SHORT.standardRun}. Le forme con stampi personalizzati vengono prodotte sul livello di volume, in base alla complessità.`,
      },
      {
        q: 'Quanto dura la produzione?',
        a: "25–35 giorni dalla PO confermata e dall’acconto. Gli stampi personalizzati aggiungono 15–20 giorni per lo sviluppo della forma. Per gli ordini stagionali urgenti è disponibile la produzione express.",
      },
      {
        q: 'Quanto velocemente ricevo un campione?',
        a: 'I campioni prototipo vengono in genere spediti entro 7–12 giorni dall’approvazione di artwork e specifica.',
      },
      {
        q: 'Quali certificazioni avete?',
        a: 'ISO 9001 per la gestione della qualità, certificazione CE per i modelli destinati al mercato UE (ambito confermato per progetto) e una valida certificazione BSCI di conformità sociale, rapporto di audit su richiesta. La documentazione REACH e RoHS viene fornita a ogni ordine.',
      },
      {
        q: 'Gestite la documentazione di esportazione?',
        a: "Sì. Documentazione di esportazione e imballaggio standard export vengono gestiti internamente e forniamo marchi in oltre 50 Paesi dell’UE, USA, Australia e Asia.",
      },
      {
        q: 'Il mio design verrà mostrato ad altri clienti?',
        a: 'No. Artwork, stampi e file di specifica restano di tua proprietà. Firmiamo un NDA prima di qualsiasi scambio di file e non riutilizziamo né rivendiamo mai stampi o design dei clienti.',
      },
      {
        q: 'Vendete un vostro marchio SUP?',
        a: 'No. Produciamo esclusivamente sotto i marchi dei nostri clienti. Non vendiamo ai consumatori finali e non entriamo in concorrenza con i nostri clienti in alcun mercato.',
      },
      {
        q: 'Potete replicare una tavola che già vendo?',
        a: 'Sì. Invia un campione fisico o una specifica completa e il nostro team di ingegneri restituirà un report di producibilità con materiali, stratificazione, tolleranze e driver di costo.',
      },
      {
        q: 'Potete produrre tavole SUP con il nostro logo?',
        a: 'Sì. Il branding personalizzato — loghi, colori, grafiche e artwork di superficie — viene integrato nel design e nella produzione secondo le specifiche concordate. Tutti i file del marchio e dell’artwork sono tuoi.',
      },
      {
        q: 'Potete sviluppare un prodotto SUP completamente nuovo?',
        a: "Lo sviluppo prodotto personalizzato parte dal tuo concept, dai tuoi schizzi, dalle specifiche o dai requisiti di mercato. Lavoriamo attraverso revisione della specifica, ingegneria strutturale, campione prototipo e approvazione, prima della produzione in serie.",
      },
      {
        q: 'Quali materiali usate per le tavole SUP gonfiabili?',
        a: "I SUP gonfiabili sono costruiti in costruzione drop-stitch con strati e densità di PVC selezionabili per rispettare gli obiettivi di peso, rigidità e prezzo, con materiali conformi a REACH/RoHS e certificazione di qualità (ISO 9001, CE, BSCI).",
      },
      {
        q: 'Lavorate con nuovi marchi SUP o startup?',
        a: `Sì. I progetti OEM/ODM vengono sviluppati in base ai tuoi requisiti di prodotto, al tuo mercato di riferimento e ai tuoi volumi — le serie pilota partono da 20–50 pezzi e la produzione standard in serie da ${MOQ_SHORT.standardRun}.`,
      },
      {
        q: 'Quali informazioni devo fornire per una richiesta OEM di SUP?',
        a: 'Le informazioni più utili: tipo di prodotto, mercato di riferimento, dimensioni o specifiche della tavola, costruzione desiderata, requisiti di branding, quantità stimata, requisiti di imballaggio e data di lancio prevista. Il nostro team invia entro un giorno lavorativo una valutazione tecnica e un preventivo.',
      },
    ],
  },
  pt: {
    kicker: 'FAQ',
    title: 'Perguntas frequentes sobre produção',
    sub: 'As perguntas que os compradores fazem antes de encomendar — respondidas com as nossas condições reais.',
    items: [
      {
        q: 'O que é que a iSupfactory produz?',
        a: 'A iSupfactory é uma fábrica profissional especializada em pranchas SUP insufláveis personalizadas e produtos relacionados com desportos aquáticos, para marcas e empresas globais — concebidas, amostradas e produzidas na nossa fábrica de 12,500 m² em Qingdao, China.',
      },
      {
        q: 'Qual é a diferença entre OEM e ODM?',
        a: `OEM: produzimos de acordo com a tua especificação aprovada — os teus desenhos, medidas, materiais e embalagem. Tu és o dono do design e da propriedade intelectual. ODM: a nossa equipa de engenheiros desenvolve a prancha a partir do teu briefing — seja um conceito de mercado, um objetivo de desempenho ou a adaptação de uma plataforma comprovada — e tu aprovas antes da produção. O private label coloca a tua marca numa plataforma existente e validada, sem alterações estruturais. Ambos os percursos, OEM e ODM, passam pela mesma fábrica, pelo mesmo sistema de qualidade e pela mesma equipa de exportação; o ODM é a via mais rápida para uma prancha com a tua marca, a partir de ${MOQ_SHORT.standardRun} com amostras em ${FACTS.sampleTime}.`,
      },
      {
        q: 'Qual é a vossa quantidade mínima de encomenda?',
        a: `O co-branding em pequenas quantidades começa nas 5–10 unidades; os lotes piloto em 20–50 unidades. A produção padrão em série começa em ${MOQ_SHORT.standardRun}. As formas com moldes personalizados são produzidas no nível de volume, consoante a complexidade.`,
      },
      {
        q: 'Quanto tempo demora a produção?',
        a: '25–35 dias a partir da PO confirmada e do sinal. Os moldes personalizados acrescentam 15–20 dias para o desenvolvimento da forma. Para encomendas sazonais urgentes está disponível produção express.',
      },
      {
        q: 'Com que rapidez recebo uma amostra?',
        a: 'As amostras de protótipo são normalmente enviadas em 7–12 dias após a aprovação do artwork e da especificação.',
      },
      {
        q: 'Que certificações têm?',
        a: 'ISO 9001 para gestão da qualidade, certificação CE para os modelos destinados ao mercado da UE (âmbito confirmado por projeto) e uma certificação BSCI de conformidade social válida, relatório de auditoria mediante pedido. A documentação REACH e RoHS é fornecida em cada encomenda.',
      },
      {
        q: 'Tratam da documentação de exportação?',
        a: 'Sim. A documentação de exportação e a embalagem padrão de exportação são geridas internamente e fornecemos marcas em mais de 50 países da UE, EUA, Austrália e Ásia.',
      },
      {
        q: 'O meu design vai ser mostrado a outros clientes?',
        a: 'Não. Artwork, moldes e ficheiros de especificação continuam a ser propriedade tua. Assinamos um NDA antes de qualquer partilha de ficheiros e nunca reutilizamos nem revendemos moldes ou designs de clientes.',
      },
      {
        q: 'Vendem uma marca própria de SUP?',
        a: 'Não. Produzimos exclusivamente sob as marcas dos nossos clientes. Não vendemos a consumidores finais e não entramos em concorrência com os nossos clientes em nenhum mercado.',
      },
      {
        q: 'Conseguem replicar uma prancha que já vendo?',
        a: 'Sim. Envia uma amostra física ou uma especificação completa e a nossa equipa de engenheiros responde com um relatório de producibilidade com materiais, estratificação, tolerâncias e fatores de custo.',
      },
      {
        q: 'Conseguem produzir pranchas de SUP com o nosso logo?',
        a: 'Sim. A personalização da marca — logos, cores, grafismos e artwork de superfície — é integrada no design e na produção de acordo com as especificações acordadas. Todos os ficheiros da marca e do artwork são teus.',
      },
      {
        q: 'Conseguem desenvolver um produto de SUP completamente novo?',
        a: 'O desenvolvimento de produto personalizado parte do teu conceito, dos teus esboços, das especificações ou dos requisitos de mercado. Trabalhamos através da revisão da especificação, engenharia estrutural, amostra de protótipo e aprovação, antes da produção em série.',
      },
      {
        q: 'Que materiais usam nas pranchas de SUP insufláveis?',
        a: 'Os SUP insufláveis são construídos em construção drop-stitch com camadas e densidades de PVC selecionáveis para alcançar os objetivos de peso, rigidez e preço, com materiais em conformidade REACH/RoHS e certificação de qualidade (ISO 9001, CE, BSCI).',
      },
      {
        q: 'Trabalham com marcas novas ou em fase de arranque?',
        a: `Sim. Os projetos OEM/ODM são desenvolvidos de acordo com os teus requisitos de produto, o teu mercado-alvo e o teu volume — as séries piloto partem das 20–50 unidades e a produção padrão em série de ${MOQ_SHORT.standardRun}.`,
      },
      {
        q: 'Que informações devo fornecer para um pedido OEM de SUP?',
        a: 'As informações mais úteis: tipo de produto, mercado-alvo, tamanho ou especificações da prancha, construção pretendida, requisitos de marca, quantidade estimada, requisitos de embalagem e data de lançamento prevista. A nossa equipa responde com uma avaliação de engenharia e um orçamento num dia útil.',
      },
    ],
  },
  nl: {
    kicker: 'FAQ',
    title: 'Veelgestelde vragen over productie',
    sub: 'De vragen die kopers stellen vóór een bestelling — beantwoord met onze echte voorwaarden.',
    items: [
      {
        q: 'Wat produceert iSupfactory?',
        a: 'iSupfactory is een professionele fabriek gespecialiseerd in gepersonaliseerde opblaasbare SUP-planken en gerelateerde watersportproducten, voor wereldwijde merken en bedrijven — ontworpen, bemonsterd en geproduceerd in onze eigen fabriek van 12,500 m² in Qingdao, China.',
      },
      {
        q: 'Wat is het verschil tussen OEM en ODM?',
        a: `OEM: we produceren volgens jouw goedgekeurde specificatie — jouw tekeningen, afmetingen, materialen en verpakking. Jij bezit het design en het intellectueel eigendom. ODM: ons team van ingenieurs ontwikkelt de plank op basis van jouw briefing — of het nu een marktconcept, een prestatiedoel of de aanpassing van een bewezen platform is — en jij keurt het goed vóór de productie. Bij private label komt jouw merk op een bestaand gevalideerd platform zonder structurele wijzigingen. Beide trajecten, OEM en ODM, lopen door dezelfde fabriek, hetzelfde kwaliteitssysteem en hetzelfde exportteam; ODM is de snelste weg naar een plank met jouw merk, vanaf ${MOQ_SHORT.standardRun} met monsters binnen ${FACTS.sampleTime}.`,
      },
      {
        q: 'Wat is jullie minimum bestelhoeveelheid?',
        a: `Co-branding in kleine hoeveelheden start vanaf 5–10 stuks; pilotbatches vanaf 20–50 stuks. De standaard serieproductie start vanaf ${MOQ_SHORT.standardRun}. Vormen met gepersonaliseerde matrijzen worden op het volumeniveau geproduceerd, afhankelijk van de complexiteit.`,
      },
      {
        q: 'Hoe lang duurt de productie?',
        a: '25–35 dagen na bevestigde PO en aanbetaling. Gepersonaliseerde matrijzen voegen 15–20 dagen toe voor de ontwikkeling van de vorm. Voor dringende seizoensbestellingen is expressproductie beschikbaar.',
      },
      {
        q: 'Hoe snel ontvang ik een monster?',
        a: 'Prototypemonsters worden doorgaans binnen 7–12 dagen na goedkeuring van artwork en specificatie verzonden.',
      },
      {
        q: 'Welke certificeringen hebben jullie?',
        a: 'ISO 9001 voor kwaliteitsbeheer, CE-certificering voor modellen bestemd voor de EU-markt (reikwijdte bevestigd per project) en een geldige BSCI-certificering voor sociale conformiteit, met auditrapport op verzoek. De REACH- en RoHS-documentatie wordt bij elke bestelling verstrekt.',
      },
      {
        q: 'Handelen jullie de exportdocumentatie af?',
        a: 'Ja. De exportdocumentatie en de exportklare verpakking worden intern afgehandeld en wij leveren aan merken in meer dan 50 landen in de EU, VS, Australië en Azië.',
      },
      {
        q: 'Wordt mijn design aan andere klanten getoond?',
        a: 'Nee. Artwork, matrijzen en specificatiebestanden blijven jouw eigendom. We ondertekenen een NDA vóór elke bestandsuitwisseling en we hergebruiken of verkopen nooit matrijzen of designs van klanten.',
      },
      {
        q: 'Verkopen jullie een eigen SUP-merk?',
        a: 'Nee. We produceren uitsluitend onder de merken van onze klanten. We verkopen niet aan eindconsumenten en concurreren niet met onze klanten op welke markt dan ook.',
      },
      {
        q: 'Kunnen jullie een plank repliceren die ik al verkoop?',
        a: 'Ja. Stuur een fysiek monster of een volledige specificatie en ons team van ingenieurs beantwoordt met een produceerbaarheidsrapport met materialen, opbouw, toleranties en kostendrijvers.',
      },
      {
        q: 'Kunnen jullie SUP-planken produceren met ons logo?',
        a: "Ja. De personalisatie van het merk — logo's, kleuren, graphics en oppervlakte-artwork — wordt volgens de overeengekomen specificaties in het design en de productie geïntegreerd. Alle bestanden van het merk en het artwork zijn van jou.",
      },
      {
        q: 'Kunnen jullie een volledig nieuw SUP-product ontwikkelen?',
        a: 'De gepersonaliseerde productontwikkeling start bij jouw concept, tekeningen, specificaties of marktvereisten. We werken via beoordeling van de specificatie, structurele engineering, prototypemonster en goedkeuring, vóór de serieproductie.',
      },
      {
        q: 'Welke materialen gebruiken jullie voor opblaasbare SUP-planken?',
        a: 'Opblaasbare SUPs worden gebouwd in drop-stitch-constructie met selecteerbare PVC-lagen en -dichtheden om de doelstellingen voor gewicht, stijfheid en prijs te halen, met REACH/RoHS-conforme materialen en kwaliteitscertificering (ISO 9001, CE, BSCI).',
      },
      {
        q: 'Werken jullie met nieuwe of startende SUP-merken?',
        a: `Ja. De OEM/ODM-projecten worden ontwikkeld op basis van jouw productvereisten, je doelmarkt en jouw volume — pilotseries starten vanaf 20–50 stuks en de standaard serieproductie vanaf ${MOQ_SHORT.standardRun}.`,
      },
      {
        q: 'Welke informatie moet ik aanleveren voor een OEM-SUP-aanvraag?',
        a: 'De meest bruikbare informatie: producttype, doelmarkt, afmetingen of specificaties van de plank, gewenste constructie, brandingvereisten, geschatte hoeveelheid, verpakkingsvereisten en de beoogde lanceringsdatum. Ons team beantwoordt met een technische beoordeling en een offerte binnen één werkdag.',
      },
    ],
  },
  sv: {
    kicker: 'FAQ',
    title: 'Vanliga frågor om tillverkning',
    sub: 'Frågor köpare ställer innan de lägger en beställning — besvarade med våra verkliga villkor.',
    items: [
      {
        q: 'Vad tillverkar iSupfactory?',
        a: 'iSupfactory är en professionell tillverkningsfabrik specialiserad på skräddarsydda uppblåsbara SUP-brädor och relaterade vattensportprodukter för globala varumärken och företag — konstruerade, provtagna och producerade i vår egen anläggning på 12 500 m² i Qingdao, Kina.',
      },
      {
        q: 'Vad är skillnaden mellan OEM och ODM?',
        a: `OEM: vi tillverkar enligt din godkända specifikation — dina ritningar, mått, material och förpackning. Du äger designen och den immateriella egendomen. ODM: vårt konstruktionsteam utvecklar brädan utifrån din brief — vare sig det är ett marknadskoncept, ett prestandamål eller en anpassning av en beprövad plattform — och du godkänner före produktion. Private label lägger ditt varumärke på en befintlig validerad plattform utan strukturella förändringar. Både OEM- och ODM-vägen går genom samma anläggning, samma kvalitetssystem och samma exportteam; ODM är den snabbaste vägen till en varumärkt bräda, från ${MOQ_SHORT.standardRun} med prover inom ${FACTS.sampleTime}.`,
      },
      {
        q: 'Vilken är er minsta beställningskvantitet?',
        a: `Co-branding i liten kvantitet startar från 5–10 st.; pilotpartier från 20–50 st. Standardproduktion i volym startar från ${MOQ_SHORT.standardRun}. Former med anpassat verktyg tillverkas på volymnivån, beroende på komplexitet.`,
      },
      {
        q: 'Hur lång tid tar produktionen?',
        a: '25–35 dagar från bekräftad order och deposition. Anpassat verktyg tillkommer med 15–20 dagar för formutveckling. Expressproduktion finns för säsongsbrådskande beställningar.',
      },
      {
        q: 'Hur snabbt får jag ett prov?',
        a: 'Prototypprov skickas vanligtvis inom 7–12 dagar efter godkännande av artwork och specifikation.',
      },
      {
        q: 'Vilka certifieringar har ni?',
        a: 'ISO 9001 för kvalitetsledning, CE-certifiering för modeller avsedda för EU-marknaden (omfattning bekräftad per projekt) och en giltig BSCI-certifiering för social regelefterlevnad, med revisionsrapport på begäran. REACH- och RoHS-dokumentation levereras med varje beställning.',
      },
      {
        q: 'Sköter ni exportdokumentationen?',
        a: 'Ja. Exportdokumentation och exportanpassad förpackning hanteras internt, och vi levererar till varumärken i över 50 länder i EU, USA, Australien och Asien.',
      },
      {
        q: 'Kommer min design att visas för andra kunder?',
        a: 'Nej. Artwork, verktyg och specifikationsfiler förblir din egendom. Vi signerar en NDA före allt filutbyte och återanvänder eller säljer aldrig kunders verktyg eller designer.',
      },
      {
        q: 'Säljer ni ett eget SUP-varumärke?',
        a: 'Nej. Vi tillverkar uteslutande under våra kunders varumärken. Vi säljer inte till slutkonsumenter och konkurrerar inte med våra kunder på någon marknad.',
      },
      {
        q: 'Kan ni replikera en bräda som jag redan säljer?',
        a: 'Ja. Skicka ett fysiskt prov eller en komplett specifikation så svarar vårt konstruktionsteam med en tillverkningsbarhetsrapport som täcker material, uppbyggnad, toleranser och kostnadsdrivare.',
      },
      {
        q: 'Kan ni tillverka SUP-brädor med vår logotyp?',
        a: 'Ja. Varumärkesanpassning — logotyper, färger, grafik och ytartwork — integreras i design och produktion enligt överenskomna specifikationer. Alla varumärkes- och artworkfiler tillhör dig.',
      },
      {
        q: 'Kan ni utveckla en helt ny SUP-produkt?',
        a: 'Ja. Den skräddarsydda produktutvecklingen utgår från ditt koncept, dina skisser, specifikationer eller marknadskrav. Vi arbetar genom specifikationsgranskning, strukturell konstruktion, prototypprov och godkännande före serietillverkning.',
      },
      {
        q: 'Vilka material använder ni för uppblåsbara SUP-brädor?',
        a: 'Uppblåsbara SUP:er byggs i drop-stitch-konstruktion med valbara PVC-lager och -densiteter för att nå mål för vikt, styvhet och pris, med REACH/RoHS-kompatibla material och kvalitetscertifiering (ISO 9001, CE, BSCI).',
      },
      {
        q: 'Samarbetar ni med nya eller nystartade SUP-varumärken?',
        a: `Ja. OEM/ODM-projekt utvecklas utifrån dina produktkrav, målmarknad och volym — pilotpartier startar från 20–50 st. och standardproduktion i volym från ${MOQ_SHORT.standardRun}.`,
      },
      {
        q: 'Vilken information bör jag lämna vid en OEM-förfrågan om SUP?',
        a: 'Den mest användbara informationen: produkttyp, målmarknad, brädans mått eller specifikationer, önskad konstruktion, varumärkeskrav, beräknad kvantitet, förpackningskrav och planerad lanseringsdatum. Vårt team svarar med en teknisk bedömning och offert inom en arbetsdag.',
      },
    ],
  },
  no: {
    kicker: 'FAQ',
    title: 'Vanlige spørsmål om produksjon',
    sub: 'Spørsmål kjøpere stiller før de legger inn en bestilling — besvart med våre reelle vilkår.',
    items: [
      {
        q: 'Hva produserer iSupfactory?',
        a: 'iSupfactory er en profesjonell produksjonsfabrikk spesialisert på skreddersydde oppblåsbare SUP-brett og tilhørende vannsportsprodukter for globale merker og bedrifter — konstruert, prøvd og produsert i vår egen fabrikk på 12 500 m² i Qingdao, Kina.',
      },
      {
        q: 'Hva er forskjellen mellom OEM og ODM?',
        a: `OEM: vi produserer etter din godkjente spesifikasjon — dine tegninger, mål, materialer og emballasje. Du eier designet og den immaterielle eiendommen. ODM: konstruksjonsteamet vårt utvikler brettet ut fra briefen din — enten det er et marknadskonsept, et ytelsesmål eller en tilpasning av en testet plattform — og du godkjenner før produksjon. Private label legger merket ditt på en eksisterende, validert plattform uten strukturelle endringer. Både OEM- og ODM-veien går gjennom samme fabrikk, samme kvalitetssystem og samme eksportteam; ODM er den raskeste veien til et merket brett, fra ${MOQ_SHORT.standardRun} med prøver innen ${FACTS.sampleTime}.`,
      },
      {
        q: 'Hva er dere minste bestillingskvantum?',
        a: `Co-branding i små kvantiteter starter fra 5–10 stk; pilotpartier fra 20–50 stk. Standard produksjon i volum starter fra ${MOQ_SHORT.standardRun}. Former med eget verktøy produseres på volumnivå, avhengig av kompleksitet.`,
      },
      {
        q: 'Hvor lang tid tar produksjonen?',
        a: '25–35 dager fra bekreftet bestilling og depositum. Eget verktøy kommer i tillegg med 15–20 dager for formutvikling. Ekspressproduksjon finnes for sesongbestillinger med korte frister.',
      },
      {
        q: 'Hvor raskt får jeg en prøve?',
        a: 'Prototypeprøver sendes vanligvis innen 7–12 dager etter godkjenning av grafikk og spesifikasjon.',
      },
      {
        q: 'Hvilke sertifiseringer har dere?',
        a: 'ISO 9001 for kvalitetsstyring, CE-sertifisering for modeller beregnet på EU-markedet (omfang bekreftet per prosjekt) og en gyldig BSCI-sertifisering for sosial etterlevelse, med revisjonsrapport på forespørsel. REACH- og RoHS-dokumentasjon følger med hver bestilling.',
      },
      {
        q: 'Håndterer dere eksportdokumentasjonen?',
        a: 'Ja. Eksportdokumentasjon og eksporttilpasset emballasje håndteres internt, og vi leverer til merker i over 50 land i EU, USA, Australia og Asia.',
      },
      {
        q: 'Vil designet mitt bli vist for andre kunder?',
        a: 'Nei. Grafikk, verktøy og spesifikasjonsfiler forblir din eiendom. Vi underskriver en NDA før all filutveksling og gjenbruker eller selger aldri kunders verktøy eller design.',
      },
      {
        q: 'Selger dere et eget SUP-merke?',
        a: 'Nei. Vi produserer utelukkende under våre kunders merker. Vi selger ikke til sluttkunder og konkurrerer ikke med kundene våre på noe marked.',
      },
      {
        q: 'Kan dere replikere et brett jeg allerede selger?',
        a: 'Ja. Send en fysisk prøve eller en komplett spesifikasjon, så svarer konstruksjonsteamet vårt med en rapport om produksjonsmuligheter som dekker materiale, konstruksjon, toleranser og kostnadsdrivere.',
      },
      {
        q: 'Kan dere produsere SUP-brett med logotypen vår?',
        a: 'Ja. Merketilpasning — logotyper, farger, grafikk og overflategrafikk — integreres i design og produksjon iht. avtalte spesifikasjoner. Alle merke- og grafikkfiler tilhører deg.',
      },
      {
        q: 'Kan dere utvikle et helt nytt SUP-produkt?',
        a: 'Ja. Den skreddersydde produktutviklingen tar utgangspunkt i konseptet, skissene, spesifikasjonene eller markedskravene dine. Vi jobber gjennom spesifikasjonsgjennomgang, strukturell konstruksjon, prototypeprøver og godkjenning før serietillverkning.',
      },
      {
        q: 'Hvilke materialer bruker dere i oppblåsbare SUP-brett?',
        a: 'Oppblåsbare SUP-er bygges i drop-stitch-konstruksjon med valgbare PVC-lag og tettheter for å nå mål for vekt, stivhet og pris, med REACH/RoHS-kompatible materialer og kvalitetssertifisering (ISO 9001, CE, BSCI).',
      },
      {
        q: 'Samarbeider dere med nye eller nystartede SUP-merker?',
        a: `Ja. OEM/ODM-prosjekter utvikles ut fra dine produktkrav, målmarked og volum — pilotpartier starter fra 20–50 stk, og standard produksjon i volum fra ${MOQ_SHORT.standardRun}.`,
      },
      {
        q: 'Hvilken informasjon bør jeg gi ved en OEM-forespørsel om SUP?',
        a: 'Den mest nyttige informasjonen: produkttype, målmarked, brettets mål eller spesifikasjoner, ønsket konstruksjon, merkekrav, beregnet mengde, emballasjekrav og planlagt lanseringsdato. Teamet vårt svarer med en teknisk vurdering og et tilbud innen én arbeidsdag.',
      },
    ],
  },
  pl: {
    kicker: 'FAQ',
    title: 'Częste pytania o produkcji',
    sub: 'Pytania, które kupujący zadają przed złożeniem zamówienia — odpowiedziane na podstawie naszych rzeczywistych warunków.',
    items: [
      {
        q: 'Co produkuje iSupfactory?',
        a: 'iSupfactory to profesjonalna fabryka produkcyjna specjalizująca się w nadmuchiwanych deskach SUP na zamówienie i powiązanym sprzęcie sportów wodnych dla globalnych marek i firm — projektowanych, prototypowanych i produkowanych w naszej własnej fabryce o powierzchni 12 500 m² w Qingdao, w Chinach.',
      },
      {
        q: 'Czym różni się OEM od ODM?',
        a: `OEM: produkujemy zgodnie z Twoją zatwierdzoną specyfikacją — Twoimi rysunkami, wymiarami, materiałami i opakowaniem. To Ty jesteś właścicielem projektu i własności intelektualnej. ODM: nasz zespół konstrukcyjny opracowuje deskę na podstawie Twojego briefu — niezależnie od tego, czy jest to koncepcja rynkowa, cel wydajnościowy, czy adaptacja sprawdzonej platformy — a Ty zatwierdzasz projekt przed produkcją. Marka własna oznacza Twoją markę na istniejącej, zwalidowanej platformie bez zmian konstrukcyjnych. Ścieżki OEM i ODM prowadzą przez tę samą fabrykę, ten sam system jakości i ten sam zespół eksportowy; ODM to najszybsza droga do deski z własną marką, od ${MOQ_SHORT.standardRun} przy próbkach w ${FACTS.sampleTime}.`,
      },
      {
        q: 'Jakie jest minimalne zamówienie (MOQ)?',
        a: `Co-branding w małych ilościach zaczyna się od 5–10 szt; partie pilotażowe od 20–50 szt. Standardowa produkcja seryjna zaczyna się od ${MOQ_SHORT.standardRun}. Formy wykonywane narzędziowo powstają w wolumenie produkcyjnym, zależnie od złożoności.`,
      },
      {
        q: 'Ile trwa produkcja?',
        a: '25–35 dni od potwierdzenia zamówienia i zaliczki. Forma wykonywana narzędziowo to dodatkowe 15–20 dni na jej opracowanie. Dla zamówień sezonowych o krótkim terminie dostępna jest produkcja ekspresowa.',
      },
      {
        q: 'Jak szybko otrzymam próbkę?',
        a: 'Próbki prototypu wysyłamy zwykle w ciągu 7–12 dni od zatwierdzenia grafiki i specyfikacji.',
      },
      {
        q: 'Jakie certyfikaty posiadacie?',
        a: 'ISO 9001 dla zarządzania jakością, certyfikacja CE dla modeli przeznaczonych na rynek UE (zakres potwierdzany dla każdego projektu) oraz ważny certyfikat BSCI dotyczący odpowiedzialności społecznej, z raportem z audytu na życzenie. Dokumentacja REACH i RoHS dołącza do każdego zamówienia.',
      },
      {
        q: 'Czy zajmujecie się dokumentacją eksportową?',
        a: 'Tak. Dokumentację eksportową i opakowanie pod eksport obsługujemy wewnętrznie, a dostarczamy do marek w ponad 50 krajach w UE, USA, Australii i Azji.',
      },
      {
        q: 'Czy mój projekt będzie pokazywany innym klientom?',
        a: 'Nie. Grafika, formy i pliki specyfikacji pozostają Twoją własnością. Podpisujemy NDA przed jakąkolwiek wymianą plików i nigdy nie wykorzystujemy ani nie sprzedajemy narzędzi czy projektów klienta.',
      },
      {
        q: 'Czy sprzedajecie własną markę SUP?',
        a: 'Nie. Produkujemy wyłącznie pod markami naszych klientów. Nie sprzedajemy bezpośrednio odbiorcom końcowym i nie konkurujemy z klientami na żadnym rynku.',
      },
      {
        q: 'Czy możecie powielić deskę, którą już sprzedaję?',
        a: 'Tak. Wyślij próbkę fizyczną lub pełną specyfikację, a nasz zespół konstrukcyjny odpowie raportem o możliwościach produkcji obejmującym materiał, konstrukcję, tolerancje i czynniki wpływające na koszt.',
      },
      {
        q: 'Czy możecie produkować deski SUP z naszym logo?',
        a: 'Tak. Dostosowanie marki — logotypy, kolory, grafika i nadruki powierzchniowe — jest wplatane w projekt i produkcję zgodnie z uzgodnioną specyfikacją. Wszystkie pliki marki i grafiki należą do Ciebie.',
      },
      {
        q: 'Czy możecie opracować całkowicie nowy produkt SUP?',
        a: 'Tak. Indywidualny rozwój produktu wychodzi od Twojej koncepcji, szkiców, specyfikacji lub wymagań rynkowych. Przechodzimy przez przegląd specyfikacji, projekt konstrukcji, próbki prototypu i akceptację przed produkcją seryjną.',
      },
      {
        q: 'Z jakich materiałów wykonuje się nadmuchiwane deski SUP?',
        a: 'Nadmuchiwane deski SUP powstają w konstrukcji drop-stitch z możliwością doboru warstw PVC i gęstości, aby osiągnąć cele wagowe, sztywnościowe i cenowe, z materiałami zgodnymi z REACH/RoHS oraz certyfikacją jakości (ISO 9001, CE, BSCI).',
      },
      {
        q: 'Czy współpracujecie z nowymi lub startującymi markami SUP?',
        a: `Tak. Projekty OEM/ODM rozwijamy na podstawie Twoich wymagań produktowych, rynku docelowego i wolumenu — partie pilotażowe zaczynają się od 20–50 szt, a standardowa produkcja seryjna od ${MOQ_SHORT.standardRun}.`,
      },
      {
        q: 'Jakie informacje powinienem podać w zapytaniu o OEM desek SUP?',
        a: 'Najbardziej przydatne informacje: typ produktu, rynek docelowy, wymiary lub specyfikacja deski, oczekiwana konstrukcja, wymagania dotyczące marki, planowana ilość, wymagania opakowania i planowana data premiery. Nasz zespół odpowiada oceną techniczną i ofertą w ciągu jednego dnia roboczego.',
      },
    ],
  },
}

export const homeFaq: Localized<FaqContent> = {
  en: {
    kicker: faq.en.kicker,
    title: faq.en.title,
    sub: faq.en.sub,
    items: [
      {
        q: 'Who is iSupfactory?',
        a: 'iSupfactory is a SUP OEM and ODM manufacturer in Qingdao, China, providing product development, prototyping, manufacturing, quality control and export production for brands, distributors and outdoor businesses.',
      },
      {
        q: 'Is iSupfactory an OEM manufacturer?',
        a: 'Yes. iSupfactory manufactures inflatable SUPs to customer-approved specifications, including dimensions, materials, construction, artwork, accessories and packaging. ODM product development is also available for brands that want to develop a SUP from a brief.',
      },
      faq.en.items[1],
      faq.en.items[2],
      faq.en.items[3],
      faq.en.items[5],
      {
        q: 'Can buyers audit the factory or use third-party inspection?',
        a: 'Yes. We welcome buyer audits and work regularly with SGS, TÜV, BV and Intertek. Third-party inspection can be arranged at any production stage — incoming material, in-process or final inspection — and inspection reports are provided on request.',
      },
    ],
  },
  es: {
    kicker: faq.es.kicker,
    title: faq.es.title,
    sub: faq.es.sub,
    items: [
      {
        q: '¿Quién es iSupfactory?',
        a: 'iSupfactory es un fabricante OEM y ODM de SUP en Qingdao, China, que ofrece desarrollo de producto, prototipado, fabricación, control de calidad y producción para exportación a marcas, distribuidores y empresas de actividades al aire libre.',
      },
      {
        q: '¿Es iSupfactory un fabricante OEM?',
        a: 'Sí. iSupfactory fabrica SUP hinchables según las especificaciones aprobadas por el cliente: dimensiones, materiales, construcción, arte, accesorios y embalaje. El desarrollo de producto ODM también está disponible para marcas que quieran desarrollar un SUP a partir de un brief.',
      },
      faq.es.items[1],
      faq.es.items[2],
      faq.es.items[3],
      faq.es.items[5],
      {
        q: '¿Pueden los compradores auditar la fábrica o usar inspección de terceros?',
        a: 'Sí. Aceptamos auditorías de compradores y trabajamos regularmente con SGS, TÜV, BV e Intertek. La inspección de terceros puede organizarse en cualquier etapa de producción — material entrante, en proceso o inspección final — y los informes de inspección se proporcionan a petición.',
      },
    ],
  },
  fr: {
    kicker: faq.fr.kicker,
    title: faq.fr.title,
    sub: faq.fr.sub,
    items: [
      {
        q: 'Qui est iSupfactory ?',
        a: 'iSupfactory est un fabricant OEM et ODM de SUP à Qingdao, en Chine, qui fournit développement de produit, prototypage, fabrication, contrôle qualité et production destinée à l\'exportation aux marques, distributeurs et entreprises d\'activités de plein air.',
      },
      {
        q: 'iSupfactory est-il un fabricant OEM ?',
        a: 'Oui. iSupfactory fabrique des SUP gonflables selon les spécifications approuvées par le client : dimensions, matériaux, construction, décor, accessoires et emballage. Le développement de produit ODM est également disponible pour les marques qui souhaitent développer un SUP à partir d\'un brief.',
      },
      faq.fr.items[1],
      faq.fr.items[2],
      faq.fr.items[3],
      faq.fr.items[5],
      {
        q: 'Les acheteurs peuvent-ils auditer l\'usine ou recourir à une inspection tierce ?',
        a: 'Oui. Nous accueillons volontiers les audits d\'acheteurs et travaillons régulièrement avec SGS, TÜV, BV et Intertek. Une inspection tierce peut être organisée à n\'importe quel stade de la production — matière entrante, contrôle en cours ou inspection finale — et les rapports d\'inspection sont fournis sur demande.',
      },
    ],
  },
  de: {
    kicker: faq.de.kicker,
    title: faq.de.title,
    sub: faq.de.sub,
    items: [
      {
        q: 'Wer ist iSupfactory?',
        a: 'iSupfactory ist ein OEM- und ODM-Hersteller für aufblasbare SUPs in Qingdao, China, der Marken, Distributoren und Outdoor-Unternehmen Produktentwicklung, Prototypenbau, Fertigung, Qualitätskontrolle und Exportproduktion anbietet.',
      },
      {
        q: 'Ist iSupfactory ein OEM-Hersteller?',
        a: 'Ja. iSupfactory fertigt aufblasbare SUPs nach den vom Kunden freigegebenen Spezifikationen, einschließlich Abmessungen, Materialien, Konstruktion, Grafik, Zubehör und Verpackung. ODM-Produktentwicklung ist ebenfalls für Marken verfügbar, die ein SUP auf Basis eines Briefings entwickeln möchten.',
      },
      faq.de.items[1],
      faq.de.items[2],
      faq.de.items[3],
      faq.de.items[5],
      {
        q: 'Können Käufer das Werk auditen oder eine Drittprüfung in Anspruch nehmen?',
        a: 'Ja. Wir heißen Käufer-Audits willkommen und arbeiten regelmäßig mit SGS, TÜV, BV und Intertek zusammen. Eine Drittprüfung kann in jeder Produktionsphase vereinbart werden — Wareneingang, In-Prozess-Kontrolle oder Endkontrolle — und die Prüfberichte werden auf Anfrage bereitgestellt.',
      },
    ],
  },
  it: {
    kicker: faq.it.kicker,
    title: faq.it.title,
    sub: faq.it.sub,
    items: [
      {
        q: 'Chi è iSupfactory?',
        a: "iSupfactory è un produttore OEM e ODM di SUP a Qingdao, Cina, che offre sviluppo prodotto, prototipazione, produzione, controllo qualità e produzione per l’export a marchi, distributori e aziende outdoor.",
      },
      {
        q: 'iSupfactory è un produttore OEM?',
        a: 'Sì. iSupfactory produce SUP gonfiabili secondo le specifiche approvate dal cliente, incluse dimensioni, materiali, costruzione, artwork, accessori e imballaggio. Lo sviluppo prodotto ODM è disponibile anche per i marchi che vogliono sviluppare un SUP da un brief.',
      },
      faq.it.items[1],
      faq.it.items[2],
      faq.it.items[3],
      faq.it.items[5],
      {
        q: 'Gli acquirenti possono auditare la fabbrica o usare ispezioni di terzi?',
        a: "Sì. Accogliamo volentieri gli audit dei clienti e lavoriamo regolarmente con SGS, TÜV, BV e Intertek. L’ispezione di terzi può essere organizzata in qualsiasi fase della produzione — materiale in entrata, in lavorazione o ispezione finale — e i report di ispezione vengono forniti su richiesta.",
      },
    ],
  },
  pt: {
    kicker: faq.pt.kicker,
    title: faq.pt.title,
    sub: faq.pt.sub,
    items: [
      {
        q: 'Quem é a iSupfactory?',
        a: 'A iSupfactory é um fabricante OEM e ODM de SUP em Qingdao, China, que fornece desenvolvimento de produto, prototipagem, produção, controlo de qualidade e produção para exportação a marcas, distribuidores e empresas outdoor.',
      },
      {
        q: 'A iSupfactory é um fabricante OEM?',
        a: 'Sim. A iSupfactory produz SUP insufláveis de acordo com as especificações aprovadas pelo cliente, incluindo dimensões, materiais, construção, artwork, acessórios e embalagem. O desenvolvimento de produto ODM também está disponível para marcas que queiram desenvolver um SUP a partir de um briefing.',
      },
      faq.pt.items[1],
      faq.pt.items[2],
      faq.pt.items[3],
      faq.pt.items[5],
      {
        q: 'Os compradores podem auditar a fábrica ou usar inspeção de terceiros?',
        a: 'Sim. Aceitamos auditorias de compradores e trabalhamos regularmente com SGS, TÜV, BV e Intertek. A inspeção de terceiros pode ser organizada em qualquer fase da produção — material recebido, em processo ou inspeção final — e os relatórios de inspeção são fornecidos mediante pedido.',
      },
    ],
  },
  nl: {
    kicker: faq.nl.kicker,
    title: faq.nl.title,
    sub: faq.nl.sub,
    items: [
      {
        q: 'Wie is iSupfactory?',
        a: 'iSupfactory is een OEM- en ODM-fabrikant van SUP in Qingdao, China, die productontwikkeling, prototyping, productie, kwaliteitscontrole en exportproductie levert aan merken, distributeurs en outdoor-bedrijven.',
      },
      {
        q: 'Is iSupfactory een OEM-fabrikant?',
        a: 'Ja. iSupfactory produceert opblaasbare SUPs volgens de door de klant goedgekeurde specificaties, inclusief afmetingen, materialen, constructie, artwork, accessoires en verpakking. ODM-productontwikkeling is ook beschikbaar voor merken die een SUP willen ontwikkelen op basis van een briefing.',
      },
      faq.nl.items[1],
      faq.nl.items[2],
      faq.nl.items[3],
      faq.nl.items[5],
      {
        q: 'Kunnen kopers de fabriek auditen of gebruikmaken van inspectie door derden?',
        a: 'Ja. We verwelkomen audits van kopers en werken regelmatig samen met SGS, TÜV, BV en Intertek. Inspectie door derden kan in elke productiefase worden ingezet — inkomend materiaal, tijdens de productie of eindinspectie — en de inspectierapporten worden op verzoek verstrekt.',
      },
    ],
  },
  sv: {
    kicker: faq.sv.kicker,
    title: faq.sv.title,
    sub: faq.sv.sub,
    items: [
      {
        q: 'Vilka är iSupfactory?',
        a: 'iSupfactory är en SUP-OEM- och ODM-tillverkare i Qingdao, Kina, som erbjuder produktutveckling, prototyptillverkning, produktion, kvalitetssäkring och exportproduktion för varumärken, distributörer och utomhusföretag.',
      },
      {
        q: 'Är iSupfactory en OEM-tillverkare?',
        a: 'Ja. iSupfactory tillverkar uppblåsbara SUP:er enligt kundgodkända specifikationer, inklusive mått, material, konstruktion, artwork, tillbehör och förpackning. ODM-produktutveckling finns också för varumärken som vill utveckla en SUP utifrån en brief.',
      },
      faq.sv.items[1],
      faq.sv.items[2],
      faq.sv.items[3],
      faq.sv.items[5],
      {
        q: 'Kan köpare göra revision av fabriken eller anlita tredjepartsinspektion?',
        a: 'Ja. Vi välkomnar köparrevisioner och arbetar regelbundet med SGS, TÜV, BV och Intertek. Tredjepartsinspektion kan ordnas i vilket produktionssteg som helst — inkommande material, under produktion eller slutinspektion — och inspektionsrapporter tillhandahålls på begäran.',
      },
    ],
  },
  no: {
    kicker: faq.no.kicker,
    title: faq.no.title,
    sub: faq.no.sub,
    items: [
      {
        q: 'Hvem er iSupfactory?',
        a: 'iSupfactory er en SUP-OEM- og ODM-produsent i Qingdao, Kina, som tilbyr produktutvikling, prototyping, produksjon, kvalitetssikring og eksportproduksjon for merker, distributører og friluftsbedrifter.',
      },
      {
        q: 'Er iSupfactory en OEM-produsent?',
        a: 'Ja. iSupfactory produserer oppblåsbare SUP-er ihtell kundegodkjente spesifikasjoner, inkludert mål, materialer, konstruksjon, grafikk, tilbehør og emballasje. ODM-produktutvikling er også tilgjengelig for merker som ønsker å utvikle en SUP ut fra en brief.',
      },
      faq.no.items[1],
      faq.no.items[2],
      faq.no.items[3],
      faq.no.items[5],
      {
        q: 'Kan kjøpere gjennomføre fabrikkrevision eller bruke tredjepartsinspeksjon?',
        a: 'Ja. Vi ønsker velkommen kjøperrevisioner og samarbeider regelmessig med SGS, TÜV, BV og Intertek. Tredjepartsinspeksjon kan arrangeres i ethvert produksjonstrinn — innkommende materiale, under produksjon eller sluttinspeksjon — og inspeksjonsrapporter stilles til disposisjon på forespørsel.',
      },
    ],
  },
  pl: {
    kicker: faq.pl.kicker,
    title: faq.pl.title,
    sub: faq.pl.sub,
    items: [
      {
        q: 'Kim jest iSupfactory?',
        a: 'iSupfactory to producent OEM i ODM desek SUP z siedzibą w Qingdao, w Chinach, który oferuje rozwój produktu, prototypowanie, produkcję, kontrolę jakości i produkcję eksportową dla marek, dystrybutorów i firm outdoorowych.',
      },
      {
        q: 'Czy iSupfactory jest producentem OEM?',
        a: 'Tak. iSupfactory produkuje nadmuchiwane deski SUP zgodnie ze specyfikacjami zatwierdzonymi przez klienta, w tym wymiarami, materiałami, konstrukcją, grafiką, akcesoriami i opakowaniem. Rozwój produktu w modelu ODM jest również dostępny dla marek, które chcą opracować deskę SUP na podstawie briefu.',
      },
      faq.pl.items[1],
      faq.pl.items[2],
      faq.pl.items[3],
      faq.pl.items[5],
      {
        q: 'Czy kupujący mogą przeprowadzić audyt fabryki lub skorzystać z inspekcji zewnętrznej?',
        a: 'Tak. Zapraszamy audyty kupujących i regularnie współpracujemy z SGS, TÜV, BV oraz Intertek. Inspekcję zewnętrzną można zorganizować na każdym etapie produkcji — materiał wejściowy, produkcja w toku lub inspekcja końcowa — a raporty z inspekcji udostępniamy na życzenie.',
      },
    ],
  },
}

/* ─────────────────────────── CTA band ─────────────────────────── */

export interface CtaContent {
  title: string
  body: string
  button: string
  note: string
}

export const cta: Localized<CtaContent> = {
  en: {
    title: 'Ready to Develop Your SUP Product?',
    body: "Whether you already have a complete product specification or are still developing your concept, our team can help you evaluate the next step. Tell us what you want to build — we'll review your requirements and discuss the most practical path from concept to production.",
    button: 'Start Your SUP Project',
    note: 'Reply within 1 business day · NDA on request before file exchange · info@isupfactory.com · +86-13305324192',
  },
  es: {
    title: '¿Listo para desarrollar tu producto de SUP?',
    body: 'Ya sea que tengas una especificación de producto completa o estés todavía desarrollando tu concepto, nuestro equipo puede ayudarte a evaluar el siguiente paso. Cuéntanos qué quieres construir — revisaremos tus requisitos y plantearemos la vía más práctica del concepto a la producción.',
    button: 'Inicia tu proyecto de SUP',
    note: 'Respuesta en 1 día laborable · NDA disponible antes del intercambio de archivos · info@isupfactory.com · +86-13305324192',
  },
  fr: {
    title: 'Prêt à développer votre produit SUP ?',
    body: 'Que vous disposiez déjà d\'une spécification produit complète ou que vous développiez encore votre concept, notre équipe peut vous aider à évaluer la suite. Dites-nous ce que vous souhaitez construire — nous examinerons vos exigences et évoquerons la voie la plus pratique, du concept à la production.',
    button: 'Lancer votre projet de SUP',
    note: 'Réponse sous 1 jour ouvrable · NDA sur demande avant l\'échange de fichiers · info@isupfactory.com · +86-13305324192',
  },
  de: {
    title: 'Bereit, Ihr SUP-Produkt zu entwickeln?',
    body: 'Ob Sie bereits eine vollständige Produktspezifikation haben oder Ihr Konzept noch entwickeln, unser Team kann Ihnen helfen, den nächsten Schritt zu bewerten. Teilen Sie uns mit, was Sie bauen möchten — wir prüfen Ihre Anforderungen und besprechen den praktischsten Weg vom Konzept bis zur Produktion.',
    button: 'Ihr SUP-Projekt starten',
    note: 'Antwort innerhalb eines Werktags · NDA auf Anfrage vor dem Dateiaustausch · info@isupfactory.com · +86-13305324192',
  },
  it: {
    title: 'Pronto a sviluppare il tuo prodotto SUP?',
    body: 'Che tu abbia già una specifica di prodotto completa o stia ancora sviluppando il tuo concept, il nostro team può aiutarti a valutare il passo successivo. Dicci cosa vuoi costruire — esamineremo i tuoi requisiti e discuteremo la via più pratica dal concept alla produzione.',
    button: 'Avvia il tuo progetto SUP',
    note: 'Risposta entro un giorno lavorativo · NDA su richiesta prima dello scambio di file · info@isupfactory.com · +86-13305324192',
  },
  pt: {
    title: 'Pronto a desenvolver o teu produto de SUP?',
    body: 'Quer já tenhas uma especificação de produto completa ou estejas ainda a desenvolver o teu conceito, a nossa equipa pode ajudar-te a avaliar o passo seguinte. Diz-nos o que queres construir — vamos analisar os teus requisitos e discutir o caminho mais prático do conceito à produção.',
    button: 'Inicia o teu projeto de SUP',
    note: 'Resposta num dia útil · NDA mediante pedido antes da partilha de ficheiros · info@isupfactory.com · +86-13305324192',
  },
  nl: {
    title: 'Klaar om jouw SUP-product te ontwikkelen?',
    body: 'Of je nu al een volledige productspecificatie hebt of je concept nog aan het ontwikkelen bent, ons team kan je helpen de volgende stap te evalueren. Vertel ons wat je wilt bouwen — we beoordelen jouw vereisten en bespreken de meest praktische weg van concept tot productie.',
    button: 'Start je SUP-project',
    note: 'Antwoord binnen 1 werkdag · NDA op verzoek vóór bestandsuitwisseling · info@isupfactory.com · +86-13305324192',
  },
  sv: {
    title: 'Redo att utveckla din SUP-produkt?',
    body: 'Oavsett om du redan har en komplett produktspecifikation eller fortfarande utvecklar ditt koncept kan vårt team hjälpa dig att utvärdera nästa steg. Berätta vad du vill bygga — vi granskar dina krav och diskuterar den mest praktiska vägen från koncept till produktion.',
    button: 'Starta ditt SUP-projekt',
    note: 'Svar inom 1 arbetsdag · NDA på begäran före filutbyte · info@isupfactory.com · +86-13305324192',
  },
  no: {
    title: 'Klar til å utvikle SUP-produktet ditt?',
    body: 'Enten du allerede har en komplett produktspesifikasjon eller fortsatt utvikler konseptet ditt, kan teamet vårt hjelpe deg med å vurdere neste trinn. Fortell oss hva du vil bygge — vi gjennomgår kravene dine og diskuterer den mest praktiske veien fra konsept til produksjon.',
    button: 'Start SUP-prosjektet ditt',
    note: 'Svar innen 1 arbeidsdag · NDA på forespørsel før filutveksling · info@isupfactory.com · +86-13305324192',
  },
  pl: {
    title: 'Gotowy na rozwój swojego produktu SUP?',
    body: 'Niezależnie od tego, czy masz już kompletną specyfikację produktu, czy wciąż rozwijasz koncepcję, nasz zespół pomoże Ci ocenić kolejny krok. Napisz, co chcesz zbudować — przeanalizujemy Twoje wymagania i omówimy najbardziej praktyczną drogę od koncepcji do produkcji.',
    button: 'Rozpocznij swój projekt SUP',
    note: 'Odpowiedź w 1 dzień roboczy · NDA na życzenie przed wymianą plików · info@isupfactory.com · +86-13305324192',
  },
}

/* ─────────────────────────── home: value proposition (More Than a SUP Factory) ─────────────────────────── */

export interface ValuePropCard {
  title: string
  body: string
}

export interface ValuePropContent {
  kicker: string
  title: string
  sub: string
  cards: ValuePropCard[]
}

export const valueProp: Localized<ValuePropContent> = {
  en: {
    kicker: 'Our Role',
    title: 'More Than a SUP Factory',
    sub: 'Many manufacturers can produce a standard paddle board. Our role is different. iSupfactory is a custom SUP product development and manufacturing partner, helping businesses move from an initial idea to a production-ready product.',
    cards: [
      {
        title: 'Product Development',
        body: 'Turn your concept, sketches, specifications or market requirements into a manufacturable SUP product.',
      },
      {
        title: 'Custom Manufacturing',
        body: 'Customize product construction, dimensions, graphics, colors, accessories and packaging according to your requirements.',
      },
      {
        title: 'Prototype Development',
        body: 'Evaluate the product before committing to mass production through sample development and testing.',
      },
      {
        title: 'Production Support',
        body: 'Once the design is approved, we manage the transition from prototype to repeatable mass production.',
      },
      {
        title: 'Quality Control',
        body: 'Quality checks throughout production help ensure that finished products meet the agreed specifications.',
      },
      {
        title: 'Global Supply',
        body: 'Support with packaging and export documentation helps simplify the sourcing process.',
      },
    ],
  },
  es: {
    kicker: 'Nuestro papel',
    title: 'Más que una fábrica de SUP',
    sub: 'Muchos fabricantes pueden producir una tabla de pádel estándar. Nuestro papel es distinto. iSupfactory es un socio de desarrollo de productos y fabricación de SUP personalizados que ayuda a las empresas a pasar de la idea inicial a un producto listo para producir.',
    cards: [
      {
        title: 'Desarrollo de producto',
        body: 'Convierte tu concepto, bocetos, especificaciones o requisitos de mercado en un producto SUP fabricable.',
      },
      {
        title: 'Fabricación personalizada',
        body: 'Personaliza construcción, dimensiones, gráficos, colores, accesorios y embalaje según tus requisitos.',
      },
      {
        title: 'Desarrollo de prototipos',
        body: 'Evalúa el producto antes de comprometerte con la producción en masa mediante muestras y pruebas.',
      },
      {
        title: 'Soporte de producción',
        body: 'Una vez aprobado el diseño, gestionamos la transición del prototipo a la producción en serie repetible.',
      },
      {
        title: 'Control de calidad',
        body: 'Los controles de calidad a lo largo de la producción aseguran que el producto final cumpla las especificaciones acordadas.',
      },
      {
        title: 'Suministro global',
        body: 'Apoyo con embalaje y documentación de exportación para simplificar el proceso de abastecimiento.',
      },
    ],
  },
  fr: {
    kicker: 'Notre rôle',
    title: 'Plus qu\'une usine de SUP',
    sub: 'De nombreux fabricants savent produire une planche de paddle standard. Notre rôle est différent. iSupfactory est un partenaire de développement produit et de fabrication de SUP sur mesure qui aide les entreprises à passer de l\'idée initiale à un produit prêt pour la production.',
    cards: [
      {
        title: 'Développement produit',
        body: 'Transformez votre concept, vos croquis, vos spécifications ou vos exigences de marché en un produit SUP fabricable.',
      },
      {
        title: 'Fabrication sur mesure',
        body: 'Personnalisez la construction du produit, ses dimensions, ses graphismes, ses couleurs, ses accessoires et son packaging selon vos exigences.',
      },
      {
        title: 'Développement de prototypes',
        body: 'Évaluez le produit avant de vous engager dans la production de masse grâce à l\'échantillonnage et aux tests.',
      },
      {
        title: 'Soutien à la production',
        body: 'Une fois le design approuvé, nous gérons la transition du prototype vers une production de masse reproductible.',
      },
      {
        title: 'Contrôle qualité',
        body: 'Des contrôles qualité tout au long de la production garantissent que les produits finis répondent aux spécifications convenues.',
      },
      {
        title: 'Approvisionnement mondial',
        body: 'Un soutien pour le packaging et la documentation à l\'export simplifie le processus d\'approvisionnement.',
      },
    ],
  },
  de: {
    kicker: 'Unsere Rolle',
    title: 'Mehr als eine SUP-Fabrik',
    sub: 'Viele Hersteller können ein Standard-SUP herstellen. Unsere Rolle ist anders: iSupfactory ist ein Partner für Produktentwicklung und kundenspezifische Fertigung, der Unternehmen hilft, von der ersten Idee zum produktionsreifen Produkt zu gelangen.',
    cards: [
      {
        title: 'Produktentwicklung',
        body: 'Verwandeln Sie Ihr Konzept, Ihre Skizzen, Spezifikationen oder Marktanforderungen in ein herstellbares SUP-Produkt.',
      },
      {
        title: 'Kundenspezifische Fertigung',
        body: 'Passen Sie Konstruktion, Abmessungen, Grafiken, Farben, Zubehör und Verpackung an Ihre Anforderungen an.',
      },
      {
        title: 'Prototypenentwicklung',
        body: 'Bewerten Sie das Produkt vor der Serienproduktion anhand von Musterentwicklung und Tests.',
      },
      {
        title: 'Produktionsunterstützung',
        body: 'Nach Freigabe des Designs übernehmen wir den Übergang vom Prototyp zur reproduzierbaren Serienproduktion.',
      },
      {
        title: 'Qualitätskontrolle',
        body: 'Qualitätsprüfungen während der gesamten Produktion stellen sicher, dass die Fertigprodukte den vereinbarten Spezifikationen entsprechen.',
      },
      {
        title: 'Globale Lieferung',
        body: 'Unterstützung bei Verpackung und Exportdokumentation vereinfacht den Beschaffungsprozess.',
      },
    ],
  },
  it: {
    kicker: 'Il nostro ruolo',
    title: 'Più di una fabbrica di SUP',
    sub: "Molti produttori sanno realizzare un SUP standard. Il nostro ruolo è diverso: iSupfactory è un partner di sviluppo prodotto e produzione personalizzata che aiuta le aziende a passare dall’idea iniziale a un prodotto pronto per la produzione.",
    cards: [
      {
        title: 'Sviluppo prodotto',
        body: 'Trasforma il tuo concept, i tuoi schizzi, le specifiche o i requisiti di mercato in un prodotto SUP producibile.',
      },
      {
        title: 'Produzione personalizzata',
        body: 'Personalizza costruzione, dimensioni, grafiche, colori, accessori e imballaggio in base ai tuoi requisiti.',
      },
      {
        title: 'Sviluppo prototipi',
        body: 'Valuta il prodotto prima della produzione in serie tramite sviluppo del campione e test.',
      },
      {
        title: 'Supporto alla produzione',
        body: "Dopo l’approvazione del design, gestiamo la transizione dal prototipo alla produzione in serie ripetibile.",
      },
      {
        title: 'Controllo qualità',
        body: 'I controlli qualità durante tutta la produzione garantiscono che i prodotti finiti rispettino le specifiche concordate.',
      },
      {
        title: 'Fornitura globale',
        body: 'Il supporto su imballaggio e documentazione di esportazione semplifica il processo di approvvigionamento.',
      },
    ],
  },
  pt: {
    kicker: 'O nosso papel',
    title: 'Mais do que uma fábrica de SUP',
    sub: 'Muitos fabricantes sabem produzir um SUP padrão. O nosso papel é diferente: a iSupfactory é uma parceira de desenvolvimento de produto e produção personalizada que ajuda as empresas a passar de uma ideia inicial a um produto pronto para a produção.',
    cards: [
      {
        title: 'Desenvolvimento de produto',
        body: 'Transforma o teu conceito, os teus esboços, as especificações ou os requisitos de mercado num produto SUP producível.',
      },
      {
        title: 'Produção personalizada',
        body: 'Personaliza construção, dimensões, grafismos, cores, acessórios e embalagem de acordo com os teus requisitos.',
      },
      {
        title: 'Desenvolvimento de protótipos',
        body: 'Avalia o produto antes da produção em série através do desenvolvimento de amostras e testes.',
      },
      {
        title: 'Apoio à produção',
        body: 'Após a aprovação do design, gerimos a transição do protótipo para a produção em série repetível.',
      },
      {
        title: 'Controlo de qualidade',
        body: 'Os controlos de qualidade ao longo de toda a produção garantem que os produtos finais respeitam as especificações acordadas.',
      },
      {
        title: 'Fornecimento global',
        body: 'O apoio em embalagem e documentação de exportação simplifica o processo de aprovisionamento.',
      },
    ],
  },
  nl: {
    kicker: 'Onze rol',
    title: 'Meer dan een SUP-fabriek',
    sub: 'Veel fabrikanten kunnen een standaard SUP produceren. Onze rol is anders: iSupfactory is een partner voor productontwikkeling en maatwerkproductie die bedrijven helpt om van een eerste idee naar een product dat klaar is voor productie te gaan.',
    cards: [
      {
        title: 'Productontwikkeling',
        body: 'Transformeer jouw concept, tekeningen, specificaties of marktvereisten naar een produceerbaar SUP-product.',
      },
      {
        title: 'Maatwerkproductie',
        body: 'Personaliseer constructie, afmetingen, graphics, kleuren, accessoires en verpakking op basis van jouw vereisten.',
      },
      {
        title: 'Prototypeontwikkeling',
        body: 'Evalueer het product vóór de serieproductie via monstermontwikkeling en tests.',
      },
      {
        title: 'Ondersteuning bij productie',
        body: 'Na goedkeuring van het design beheren wij de overgang van prototype naar herhaalbare serieproductie.',
      },
      {
        title: 'Kwaliteitscontrole',
        body: 'Kwaliteitscontroles gedurende de hele productie garanderen dat de eindproducten voldoen aan de overeengekomen specificaties.',
      },
      {
        title: 'Wereldwijde levering',
        body: 'Ondersteuning bij verpakking en exportdocumentatie vereenvoudigt het inkoopproces.',
      },
    ],
  },
  sv: {
    kicker: 'Vår roll',
    title: 'Mer än en SUP-fabrik',
    sub: 'Många tillverkare kan producera en standard paddleboard. Vår roll är annorlunda. iSupfactory är en partner för produktutveckling och skräddarsydd tillverkning av SUP som hjälper företag att gå från en första idé till en produktionsredo produkt.',
    cards: [
      {
        title: 'Produktutveckling',
        body: 'Förvandla ditt koncept, dina skisser, specifikationer eller marknadskrav till en tillverkningsbar SUP-produkt.',
      },
      {
        title: 'Skräddarsydd tillverkning',
        body: 'Anpassa konstruktion, mått, grafik, färger, tillbehör och förpackning efter dina krav.',
      },
      {
        title: 'Prototyputveckling',
        body: 'Utvärdera produkten före serietillverkning genom provutveckling och tester.',
      },
      {
        title: 'Produktionsstöd',
        body: 'Efter godkänd design hanterar vi övergången från prototyp till repeterbar serieproduktion.',
      },
      {
        title: 'Kvalitetssäkring',
        body: 'Kvalitetskontroller genom hela produktionen säkerställer att färdiga produkter uppfyller de överenskomna specifikationerna.',
      },
      {
        title: 'Global leverans',
        body: 'Stöd med förpackning och exportdokumentation förenklar inköpsprocessen.',
      },
    ],
  },
  no: {
    kicker: 'Vår rolle',
    title: 'Mer enn en SUP-fabrikk',
    sub: 'Mange produsenter kan produsere et standard paddleboard. Vår rolle er annerledes. iSupfactory er en partner for produktutvikling og skreddersydd SUP-produksjon som hjelper bedrifter med å gå fra en første idé til en produksjonsklar produkt.',
    cards: [
      {
        title: 'Produktutvikling',
        body: 'Gjør konseptet, skissene, spesifikasjonene eller marknadskravene dine om til en produksjonsklar SUP-produkt.',
      },
      {
        title: 'Skreddersydd produksjon',
        body: 'Tilpass konstruksjon, mål, grafikk, farger, tilbehør og emballasje etter kravene dine.',
      },
      {
        title: 'Prototypeutvikling',
        body: 'Vurder produktet før serietillverkning gjennom prøveutvikling og testing.',
      },
      {
        title: 'Produksjonsstøtte',
        body: 'Etter godkjent design håndterer vi overgangen fra prototype til repeterbar serieproduksjon.',
      },
      {
        title: 'Kvalitetssikring',
        body: 'Kvalitetskontroll gjennom hele produksjonen sikrer at ferdige produkter oppfyller de avtalte spesifikasjonene.',
      },
      {
        title: 'Global levering',
        body: 'Støtte med emballasje og eksportdokumentasjon forenkler innkjøpsprosessen.',
      },
    ],
  },
  pl: {
    kicker: 'Nasza rola',
    title: 'Więcej niż fabryka desek SUP',
    sub: 'Wielu producentów potrafi wyprodukować standardową deskę paddle. Nasza rola jest inna. iSupfactory to partner w rozwoju produktu i produkcji desek SUP na zamówienie, który pomaga firmom przejść od pierwszego pomysłu do produktu gotowego do produkcji.',
    cards: [
      {
        title: 'Rozwój produktu',
        body: 'Zamieniamy Twoją koncepcję, szkice, specyfikacje lub wymagania rynkowe w deskę SUP gotową do produkcji.',
      },
      {
        title: 'Produkcja na zamówienie',
        body: 'Dostosowujemy konstrukcję, wymiary, grafikę, kolory, akcesoria i opakowanie do Twoich wymagań.',
      },
      {
        title: 'Prace nad prototypem',
        body: 'Oceniamy produkt przed produkcją seryjną za pomocą prac na próbkach i testów.',
      },
      {
        title: 'Wsparcie produkcji',
        body: 'Po zatwierdzeniu projektu zajmujemy się przejściem od prototypu do powtarzalnej produkcji seryjnej.',
      },
      {
        title: 'Zapewnienie jakości',
        body: 'Kontrola jakości w całym procesie produkcyjnym zapewnia, że gotowe produkty spełniają uzgodnione specyfikacje.',
      },
      {
        title: 'Dostawa na cały świat',
        body: 'Wsparcie przy opakowaniu i dokumentacji eksportowej upraszcza proces zakupowy.',
      },
    ],
  },
}

/* ─────────────────────────── home: role boundary (Where We Stop, You Start) ─────────────────────────── */

export interface BoundaryRow {
  ours: string
  theirs: string
}

export interface BoundaryContent {
  kicker: string
  title: string
  sub: string
  oursTitle: string
  theirsTitle: string
  rows: BoundaryRow[]
  footer: string
}

export const boundary: Localized<BoundaryContent> = {
  en: {
    kicker: 'Who We Are',
    title: 'Built by a SUP Factory, Not a Trading Platform',
    sub: 'We are a manufacturing partner, not a marketplace. Our role is to help customers turn ideas, designs and product requirements into manufacturable SUP products. You own your brand. You control your market. We support production execution.',
    oursTitle: 'We handle',
    theirsTitle: 'You keep',
    rows: [
      { ours: 'Specification review and manufacturability assessment', theirs: 'Brand name, identity and positioning' },
      { ours: 'Structural engineering, materials selection, mold development', theirs: 'Pricing, channels and sales' },
      { ours: 'Deck artwork prepress and print production from your brand files', theirs: 'Ownership of all brand and artwork files' },
      { ours: 'Prototyping, sampling and sample approval documentation', theirs: 'Final approval on every sample' },
      { ours: 'Batch production, in-process QC and final inspection', theirs: 'Your market, your customers, your data' },
      { ours: 'Certification documentation and export-grade packing', theirs: 'End-customer relationships and after-sales' },
    ],
    footer:
      'Your artwork, tooling and specification files remain your property and are never reused, resold or shown to another client.',
  },
  es: {
    kicker: 'Quiénes somos',
    title: 'Construido por una fábrica de SUP, no por una plataforma comercial',
    sub: 'Somos un socio de fabricación, no un marketplace. Nuestro papel es ayudar a los clientes a convertir ideas, diseños y requisitos de producto en productos SUP fabricables. Tú eres dueño de tu marca. Tú controlas tu mercado. Nosotros ejecutamos la producción.',
    oursTitle: 'Nosotros nos encargamos',
    theirsTitle: 'Tú conservas',
    rows: [
      { ours: 'Revisión de especificaciones y evaluación de fabricabilidad', theirs: 'Nombre, identidad y posicionamiento de marca' },
      { ours: 'Ingeniería estructural, selección de materiales y desarrollo de moldes', theirs: 'Precios, canales y ventas' },
      { ours: 'Preimpresión de arte de cubierta e impresión desde tus archivos de marca', theirs: 'Propiedad de todos los archivos de marca y arte' },
      { ours: 'Prototipado, muestreo y documentación de aprobación de muestras', theirs: 'Aprobación final de cada muestra' },
      { ours: 'Producción por lotes, QC en proceso e inspección final', theirs: 'Tu mercado, tus clientes, tus datos' },
      { ours: 'Documentación de certificación y embalaje de exportación', theirs: 'Relaciones con el cliente final y posventa' },
    ],
    footer:
      'Tus archivos de arte, utillaje y especificación siguen siendo de tu propiedad y nunca se reutilizan, revenden ni muestran a otro cliente.',
  },
  fr: {
    kicker: 'Qui nous sommes',
    title: 'Construit par une usine de SUP, pas par une plateforme commerciale',
    sub: 'Nous sommes un partenaire de fabrication, pas une marketplace. Notre rôle est d\'aider les clients à transformer leurs idées, designs et exigences produit en produits SUP fabricables. Vous détenez votre marque. Vous contrôlez votre marché. Nous assurons l\'exécution de la production.',
    oursTitle: 'Nous nous chargeons',
    theirsTitle: 'Vous conservez',
    rows: [
      { ours: 'Revue de spécification et évaluation de fabricabilité', theirs: 'Nom, identité et positionnement de marque' },
      { ours: 'Ingénierie structurelle, sélection des matériaux, développement du moule', theirs: 'Tarifs, canaux et ventes' },
      { ours: 'Prépresse des visuels de pont et impression à partir de vos fichiers de marque', theirs: 'Propriété de tous les fichiers de marque et de graphisme' },
      { ours: 'Prototypage, échantillonnage et documentation d\'approbation des échantillons', theirs: 'Approbation finale de chaque échantillon' },
      { ours: 'Production par lots, contrôle qualité en cours et inspection finale', theirs: 'Votre marché, vos clients, vos données' },
      { ours: 'Documentation de certification et emballage adapté à l\'export', theirs: 'Relations clients finaux et après-vente' },
    ],
    footer:
      'Vos fichiers de graphisme, d\'outillage et de spécification restent votre propriété et ne sont jamais réutilisés, revendus ni montrés à un autre client.',
  },
  de: {
    kicker: 'Wer wir sind',
    title: 'Gebaut von einer SUP-Fabrik, nicht von einer Handelsplattform',
    sub: 'Wir sind ein Fertigungspartner, kein Marktplatz. Unsere Aufgabe ist es, Kunden zu helfen, Ideen, Designs und Produktanforderungen in herstellbare SUP-Produkte zu verwandeln. Ihre Marke gehört Ihnen. Ihren Markt steuern Sie. Wir kümmern uns um die Produktionsumsetzung.',
    oursTitle: 'Wir übernehmen',
    theirsTitle: 'Sie behalten',
    rows: [
      { ours: 'Prüfung der Spezifikation und Bewertung der Herstellbarkeit', theirs: 'Markenname, Identität und Positionierung' },
      { ours: 'Konstruktionstechnik, Materialauswahl, Formenbau', theirs: 'Preise, Vertriebskanäle und Verkauf' },
      { ours: 'Druckvorbereitung des Deck-Artworks und Produktion aus Ihren Markendateien', theirs: 'Eigentum an allen Marken- und Artwork-Dateien' },
      { ours: 'Prototyping, Bemusterung und Dokumentation der Musterfreigabe', theirs: 'Endgültige Freigabe jedes Musters' },
      { ours: 'Serienproduktion, Qualitätskontrolle während der Produktion und Endkontrolle', theirs: 'Ihr Markt, Ihre Kunden, Ihre Daten' },
      { ours: 'Zertifizierungsdokumentation und exportgerechte Verpackung', theirs: 'Beziehungen zum Endkunden und After-Sales' },
    ],
    footer:
      'Ihre Artwork-, Werkzeug- und Spezifikationsdateien bleiben Ihr Eigentum und werden niemals wiederverwendet, weiterverkauft oder einem anderen Kunden gezeigt.',
  },
  it: {
    kicker: 'Chi siamo',
    title: 'Costruito da una fabbrica di SUP, non da una piattaforma commerciale',
    sub: 'Siamo un partner di produzione, non un marketplace. Il nostro compito è aiutare i clienti a trasformare idee, design e requisiti di prodotto in SUP producibili. Il tuo marchio resta tuo. Il tuo mercato lo controlli tu. Noi ci occupiamo della realizzazione in produzione.',
    oursTitle: 'Ci occupiamo noi',
    theirsTitle: 'Restano a te',
    rows: [
      { ours: 'Verifica della specifica e valutazione della producibilità', theirs: 'Nome del marchio, identità e posizionamento' },
      { ours: 'Ingegneria costruttiva, selezione dei materiali, sviluppo degli stampi', theirs: 'Prezzi, canali di vendita e vendite' },
      { ours: "Prepress dell’artwork del deck e produzione dai tuoi file del marchio", theirs: "Proprietà di tutti i file del marchio e dell’artwork" },
      { ours: "Prototipazione, campionatura e documentazione dell’approvazione dei campioni", theirs: 'Approvazione finale di ogni campione' },
      { ours: 'Produzione in serie, controllo qualità in produzione e controllo finale', theirs: 'Il tuo mercato, i tuoi clienti, i tuoi dati' },
      { ours: 'Documentazione di certificazione e imballaggio standard export', theirs: 'Relazioni con i clienti finali e post-vendita' },
    ],
    footer: 'I tuoi file di artwork, stampi e specifiche restano di tua proprietà e non vengono mai riutilizzati, rivenduti o mostrati ad altri clienti.',
  },
  pt: {
    kicker: 'Quem somos',
    title: 'Construído por uma fábrica de SUP, não por uma plataforma comercial',
    sub: 'Somos um parceiro de produção, não um marketplace. O nosso papel é ajudar os clientes a transformar ideias, designs e requisitos de produto em SUP producíveis. A tua marca continua a ser tua. O teu mercado controlas tu. Nós tratamos da produção.',
    oursTitle: 'Tratamos nós',
    theirsTitle: 'Fica contigo',
    rows: [
      { ours: 'Verificação da especificação e avaliação da producibilidade', theirs: 'Nome da marca, identidade e posicionamento' },
      { ours: 'Engenharia construtiva, seleção de materiais, desenvolvimento de moldes', theirs: 'Preços, canais de venda e vendas' },
      { ours: 'Pré-impressão do artwork do deck e produção a partir dos teus ficheiros da marca', theirs: 'Propriedade de todos os ficheiros da marca e do artwork' },
      { ours: 'Prototipagem, amostragem e documentação da aprovação de amostras', theirs: 'Aprovação final de cada amostra' },
      { ours: 'Produção em série, controlo de qualidade em produção e controlo final', theirs: 'O teu mercado, os teus clientes, os teus dados' },
      { ours: 'Documentação de certificação e embalagem padrão de exportação', theirs: 'Relações com os clientes finais e pós-venda' },
    ],
    footer: 'Os teus ficheiros de artwork, moldes e especificações continuam a ser propriedade tua e nunca são reutilizados, revendidos ou mostrados a outros clientes.',
  },
  nl: {
    kicker: 'Wie we zijn',
    title: 'Gebouwd door een SUP-fabriek, geen handelsplatform',
    sub: 'Wij zijn een productiepartner, geen marketplace. Onze rol is om klanten te helpen ideeën, designs en productvereisten om te zetten in produceerbare SUP-producten. Jouw merk blijft van jou. Jouw markt bestuur jij. Wij verzorgen de productie.',
    oursTitle: 'Wij verzorgen',
    theirsTitle: 'Blijft bij jou',
    rows: [
      { ours: 'Beoordeling van de specificatie en evaluatie van de produceerbaarheid', theirs: 'Naam van het merk, identiteit en positionering' },
      { ours: 'Constructieve engineering, materiaalkeuze, ontwikkeling van matrijzen', theirs: 'Prijzen, verkoopkanalen en verkopen' },
      { ours: 'Drukvoorbereiding van het deck-artwork en productie vanuit jouw merkbestanden', theirs: 'Eigendom van alle merk- en artworkbestanden' },
      { ours: 'Prototyping, bemonstering en documentatie van de monstergoedkeuring', theirs: 'Eindgoedkeuring van elk monster' },
      { ours: 'Serieproductie, kwaliteitscontrole in productie en eindcontrole', theirs: 'Jouw markt, jouw klanten, jouw gegevens' },
      { ours: 'Certificeringsdocumentatie en exportklare verpakking', theirs: 'Relaties met eindklanten en after-sales' },
    ],
    footer: 'Jouw artwork-, matrijs- en specificatiebestanden blijven jouw eigendom en worden nooit hergebruikt, doorverkocht of getoond aan andere klanten.',
  },
  sv: {
    kicker: 'Vilka vi är',
    title: 'Byggt av en SUP-fabrik, inte en handelsplattform',
    sub: 'Vi är en tillverkningspartner, inte en marknadsplats. Vår roll är att hjälpa kunder att förvandla idéer, designer och produktkrav till tillverkningsbara SUP-produkter. Du äger ditt varumärke. Du styr din marknad. Vi sköter produktionsutförandet.',
    oursTitle: 'Vi sköter',
    theirsTitle: 'Du behåller',
    rows: [
      { ours: 'Specifikationsgranskning och bedömning av tillverkningsbarhet', theirs: 'Varumärkesnamn, identitet och positionering' },
      { ours: 'Konstruktionsteknik, materialval, formutveckling', theirs: 'Priser, kanaler och försäljning' },
      { ours: 'Tryckförberedelse av däckartwork och produktion från dina varumärkesfiler', theirs: 'Ägarskap av alla varumärkes- och artworkfiler' },
      { ours: 'Prototyptillverkning, provtagning och dokumentation av provgodkännande', theirs: 'Slutgiltigt godkännande av varje prov' },
      { ours: 'Serietillverkning, kvalitetskontroll under produktion och slutkontroll', theirs: 'Din marknad, dina kunder, din data' },
      { ours: 'Certifieringsdokumentation och exportanpassad förpackning', theirs: 'Slutkundsrelationer och eftermarknad' },
    ],
    footer: 'Dina artwork-, verktygs- och specifikationsfiler förblir din egendom och återanvänds, säljs eller visas aldrig för någon annan kund.',
  },
  no: {
    kicker: 'Hvem vi er',
    title: 'Bygget av en SUP-fabrikk, ikke en handelsplattform',
    sub: 'Vi er en produksjonspartner, ikke en markedsplass. Vår rolle er å hjelpe kunder med å gjøre ideer, design og produktkrav om til produksjonsklare SUP-produkter. Du eier merket ditt. Du styrer markedet ditt. Vi står for produksjonen.',
    oursTitle: 'Vi tar ansvar for',
    theirsTitle: 'Du beholder',
    rows: [
      { ours: 'Spesifikasjonsgjennomgang og vurdering av produksjonsmuligheter', theirs: 'Merkenavn, identitet og posisjonering' },
      { ours: 'Konstruksjonsteknologi, materialvalg, formutvikling', theirs: 'Priser, kanaler og salg' },
      { ours: 'Trykkforberedelse av dekgrafikk og produksjon fra merkefilene dine', theirs: 'Eierskap til alle merke- og grafikkfiler' },
      { ours: 'Prototyping, prøvetaking og dokumentasjon av prøvegodkjenning', theirs: 'Endelig godkjenning av hver prøve' },
      { ours: 'Serietillverkning, kvalitetskontroll under produksjon og sluttkontroll', theirs: 'Markedet ditt, kundene dine, dataene dine' },
      { ours: 'Sertifiseringsdokumentasjon og eksporttilpasset emballasje', theirs: 'Kundeforhold og ettersalg' },
    ],
    footer: 'Grafikk-, verktøy- og spesifikasjonsfilene dine forblir din eiendom og gjenbrukes, selges eller vises aldri for noen annen kunde.',
  },
  pl: {
    kicker: 'Kim jesteśmy',
    title: 'Zbudowane przez fabrykę desek SUP, a nie platformę handlową',
    sub: 'Jesteśmy partnerem produkcyjnym, nie marketplace. Naszą rolą jest pomóc klientom zamienić pomysły, projekty i wymagania produktowe w deski SUP gotowe do produkcji. To Ty posiadasz swoją markę. To Ty kontrolujesz swój rynek. My odpowiadamy za produkcję.',
    oursTitle: 'Bierzemy na siebie',
    theirsTitle: 'Zostaje u Ciebie',
    rows: [
      { ours: 'Przegląd specyfikacji i ocena możliwości produkcyjnych', theirs: 'Nazwa marki, identyfikacja i pozycjonowanie' },
      { ours: 'Technologia konstrukcji, dobór materiałów, opracowywanie form', theirs: 'Ceny, kanały i sprzedaż' },
      { ours: 'Przygotowanie grafiki pokładu do druku i produkcja z plików Twojej marki', theirs: 'Własność wszystkich plików marki i grafiki' },
      { ours: 'Prototypowanie, pobieranie próbek i dokumentowanie akceptacji próbki', theirs: 'Ostateczna akceptacja każdej próbki' },
      { ours: 'Produkcja seryjna, kontrola jakości w trakcie produkcji i kontrola końcowa', theirs: 'Twój rynek, Twoi klienci, Twoje dane' },
      { ours: 'Dokumentacja certyfikacyjna i opakowanie gotowe do eksportu', theirs: 'Relacje z klientami końcowymi i obsługa posprzedażowa' },
    ],
    footer: 'Twoje pliki grafiki, form i specyfikacji pozostają Twoją własnością i nigdy nie są wykorzystywane ponownie, odsprzedawane ani pokazywane innym klientom.',
  },
}

/* ─────────────────────────── about page ─────────────────────────── */

export interface AboutContent {
  kicker: string
  title: string
  sub: string
  story: string[]
  values: { title: string; body: string }[]
  capabilities: string[]
  stats: { value: string; label: string }[]
  strength: { title: string; body: string }[]
  partnering: { title: string; body: string[] }
}

export const about: Localized<AboutContent> = {
  en: {
    kicker: 'About Us',
    title: 'About iSupfactory',
    sub: 'Your Custom SUP Manufacturing Partner',
    story: [
      'We are an inflatable SUP OEM/ODM factory that has spent years building boards for brands, distributors and sourcing teams around the world. Along the way, we kept meeting the same kind of customer — brands and buyers with a clear product vision but no in-house plant to build it.',
      'So we built iSupfactory around them. Tiered minimums from 5–10-unit co-branding runs, complete engineering and design support, and a manufacturing team that treats your first order as seriously as your hundredth. You bring the brand; we run the factory.',
    ],
    values: [
      {
        title: 'Quality First',
        body: 'Every board passes multi-point QC — materials, welding, printing, assembly and packaging are checked at every stage of production.',
      },
      {
        title: 'Manufacturer, Not Middleman',
        body: 'Design, mould engineering, prototype, production and testing all happen under one roof — no trading-desk gap between you and the plant.',
      },
      {
        title: 'Flexible by Design',
        body: 'Tiered MOQs, modular options and honest lead times let brands grow from trial orders to volume runs.',
      },
    ],
    capabilities: ['OEM / ODM / private label', 'Custom moulds', 'Sample service', 'Design & artwork', 'Multi-point QC', 'Export documentation'],
    stats: [
      { value: '90–100+ pcs', label: 'Standard volume MOQ (per approved configuration)' },
      { value: '7–12 days', label: 'Sample lead time' },
      { value: '25–35 days', label: 'Production lead time' },
      { value: '20–50 pcs', label: 'Pilot order MOQ' },
    ],
    strength: [
      {
        title: 'Product Development',
        body: 'From concept sketches to production drawings — our engineers refine shape, rocker, thickness and drop-stitch construction to hit your target performance and price.',
      },
      {
        title: 'OEM Manufacturing',
        body: 'Build your exact specification: materials, colors, logo placement, accessories and packaging, in standard volume batches from 90–100+ pcs per approved configuration.',
      },
      {
        title: 'ODM Solutions',
        body: 'Start from our proven in-house platforms — all-around, touring, race, yoga and more — and customize branding, graphics and trim for a fast, low-risk launch.',
      },
      {
        title: 'Engineering Support',
        body: 'Mould engineering, prototyping and sample iteration under one roof, with visual proofs and artwork approvals at every milestone before mass production.',
      },
      {
        title: 'Quality Management',
        body: 'Multi-point QC across materials, welding, printing, assembly and packaging, plus on-sample and pre-shipment inspections you can book as a third party.',
      },
      {
        title: 'Global Delivery',
        body: 'Export documentation, export-grade packing and in-house documentation support for brands in 50+ markets.',
      },
    ],
    partnering: {
      title: 'Partnering With Global Businesses',
      body: [
        'iSupfactory works with SUP brands, distributors, resorts, schools and outdoor companies that need a reliable inflatable paddle board factory — from a first trial order to container-scale programs.',
        'Tell us your market and target price, and we respond with a spec sheet, MOQ and lead times for your specific business model.',
      ],
    },
  },
  es: {
    kicker: 'Sobre nosotros',
    title: 'Sobre iSupfactory',
    sub: 'Tu socio de fabricación de SUP a medida',
    story: [
      'Somos una fábrica OEM/ODM de SUP hinchables que lleva años fabricando tablas para marcas, distribuidores y equipos de compra de todo el mundo. En el camino, nos encontrábamos una y otra vez con el mismo tipo de cliente: marcas y compradores con un plan de producto claro pero sin planta productiva propia.',
      'Por eso construimos iSupfactory a su alrededor. Pedidos mínimos por tramos desde 5–10 unidades de co-branding, soporte de ingeniería y diseño completo, y un equipo de fabricación que trata tu primer pedido con la misma seriedad que el centésimo. Tú traes la marca; nosotros dirigimos la fábrica.',
    ],
    values: [
      {
        title: 'Calidad primero',
        body: 'Cada tabla supera un control de calidad multipunto: material, soldadura, impresión, montaje y embalaje se revisan en cada etapa de la producción.',
      },
      {
        title: 'Fabricante, no intermediario',
        body: 'Ingeniería, moldes, prototipos, producción y ensayos ocurren bajo el mismo techo: sin mesas de negociación entre tú y la planta.',
      },
      {
        title: 'Flexibles por diseño',
        body: 'MOQ por tramos, opciones modulares y plazos reales permiten crecer del pedido de prueba a la serie por volumen.',
      },
    ],
    capabilities: ['OEM / ODM y marca privada', 'Moldes a medida', 'Servicio de muestras', 'Diseño e ingeniería', 'QC multipunto', 'Documentación de exportación'],
    stats: [
      { value: '90–100+ uds.', label: 'MOQ de volumen estándar (por configuración aprobada)' },
      { value: '7–12 días', label: 'Plazo de muestras' },
      { value: '25–35 días', label: 'Plazo de producción' },
      { value: '20–50 uds.', label: 'MOQ de pedido piloto' },
    ],
    strength: [
      {
        title: 'Desarrollo de producto',
        body: 'Del boceto al plano de producción — nuestros ingenieros afinan forma, rocker, grosor y construcción drop-stitch para alcanzar tu rendimiento y precio objetivo.',
      },
      {
        title: 'Fabricación OEM',
        body: 'Construimos tu especificación exacta: materiales, colores, colocación del logotipo, accesorios y embalaje, en lotes de volumen estándar a partir de 90–100+ uds. por configuración aprobada.',
      },
      {
        title: 'Soluciones ODM',
        body: 'Parte de nuestras plataformas probadas — all-around, touring, race, yoga y más — y personaliza marca, gráficos y acabados para un lanzamiento rápido y de bajo riesgo.',
      },
      {
        title: 'Soporte de ingeniería',
        body: 'Ingeniería de moldes, prototipos e iteración de muestras bajo el mismo techo, con pruebas visuales y aprobaciones de arte en cada hito antes de la producción en serie.',
      },
      {
        title: 'Gestión de calidad',
        body: 'QC multipunto en materiales, soldadura, impresión, montaje y embalaje, más inspecciones sobre muestra y previas al envío que puedes contratar como tercero.',
      },
      {
        title: 'Entrega global',
        body: 'Documentación de exportación, embalaje de exportación y soporte documental interno para marcas en más de 50 mercados.',
      },
    ],
    partnering: {
      title: 'Colaboramos con empresas de todo el mundo',
      body: [
        'iSupfactory trabaja con marcas de SUP, distribuidores, resorts, escuelas y empresas de actividades al aire libre que necesitan una fábrica de tablas hinchables fiable — desde el primer pedido de prueba hasta programas de producción por volumen.',
        'Cuéntanos tu mercado y tu precio objetivo, y te responderemos con una ficha de especificaciones, MOQ y plazos para tu modelo de negocio.',
      ],
    },
  },
  fr: {
    kicker: 'À propos de nous',
    title: 'À propos de iSupfactory',
    sub: 'Votre partenaire de fabrication de SUP sur mesure',
    story: [
      'Nous sommes une usine OEM/ODM de SUP gonflables qui, depuis des années, fabrique des planches pour des marques, des distributeurs et des équipes d\'approvisionnement du monde entier. Chemin faisant, nous rencontrions sans cesse le même type de client : des marques et des acheteurs avec une vision produit claire, mais sans usine en propre pour la réaliser.',
      'Nous avons donc bâti iSupfactory autour d\'eux. Des minimums par paliers à partir de séries de co-branding de 5–10 unités, un soutien complet en ingénierie et en design, et une équipe de fabrication qui traite votre première commande avec autant de sérieux que la centième. Vous apportez la marque ; nous faisons tourner l\'usine.',
    ],
    values: [
      {
        title: 'La qualité d\'abord',
        body: 'Chaque planche passe par un contrôle qualité multipoint — matériaux, soudure, impression, assemblage et emballage sont vérifiés à chaque étape de la production.',
      },
      {
        title: 'Fabricant, pas intermédiaire',
        body: 'Design, ingénierie de moule, prototype, production et tests ont lieu sous le même toit — aucun intermédiaire commercial entre vous et l\'usine.',
      },
      {
        title: 'Flexibles par conception',
        body: 'Des MOQ par paliers, des options modulaires et des délais honnêtes permettent aux marques de passer de la commande d\'essai à la production en volume.',
      },
    ],
    capabilities: ['OEM / ODM / marque blanche', 'Moules sur mesure', 'Service d\'échantillonnage', 'Design & graphisme', 'QC multipoint', 'Documentation à l\'export'],
    stats: [
      { value: '90–100+ pièces', label: 'MOQ de volume standard (par configuration approuvée)' },
      { value: '7–12 jours', label: 'Délai d\'échantillonnage' },
      { value: '25–35 jours', label: 'Délai de production' },
      { value: '20–50 pièces', label: 'MOQ de commande pilote' },
    ],
    strength: [
      {
        title: 'Développement produit',
        body: 'Du croquis de concept aux plans de production — nos ingénieurs affinent la forme, le rocker, l\'épaisseur et la construction drop-stitch pour atteindre vos objectifs de performance et de prix.',
      },
      {
        title: 'Fabrication OEM',
        body: 'Construisez votre spécification exacte : matériaux, couleurs, placement du logo, accessoires et packaging, en lots de volume standard à partir de 90–100+ pièces par configuration approuvée.',
      },
      {
        title: 'Solutions ODM',
        body: 'Partez de nos plateformes internes éprouvées — all-around, touring, race, yoga et plus — et personnalisez la marque, les graphismes et les finitions pour un lancement rapide et à faible risque.',
      },
      {
        title: 'Soutien d\'ingénierie',
        body: 'Ingénierie de moule, prototypage et itération d\'échantillons sous un même toit, avec épreuves visuelles et approbations de graphisme à chaque étape avant la production de masse.',
      },
      {
        title: 'Gestion de la qualité',
        body: 'Contrôle qualité multipoint sur les matériaux, la soudure, l\'impression, l\'assemblage et le packaging, plus des inspections sur échantillon et avant expédition que vous pouvez réserver en tant que tiers.',
      },
      {
        title: 'Livraison mondiale',
        body: 'Documentation à l\'export, emballage adapté à l\'export et soutien documentaire interne pour des marques présentes dans plus de 50 marchés.',
      },
    ],
    partnering: {
      title: 'Partenaire d\'entreprises du monde entier',
      body: [
        'iSupfactory travaille avec des marques de SUP, des distributeurs, des resorts, des écoles et des entreprises outdoor qui ont besoin d\'une usine de planches de paddle gonflables fiable — de la première commande d\'essai aux programmes à l\'échelle de conteneurs.',
        'Dites-nous quel est votre marché et votre prix cible, et nous vous répondrons avec une fiche de spécifications, le MOQ et les délais adaptés à votre modèle économique.',
      ],
    },
  },
  de: {
    kicker: 'Über uns',
    title: 'Über iSupfactory',
    sub: 'Ihr Partner für kundenspezifische SUP-Fertigung',
    story: [
      'Wir sind eine OEM/ODM-Fabrik für aufblasbare SUPs, die seit Jahren Boards für Marken, Händler und Einkaufsteams auf der ganzen Welt herstellt. Dabei begegneten wir immer wieder demselben Kundentyp — Marken und Käufer mit einer klaren Produktvision, aber ohne eigene Produktionsstätte, um sie zu realisieren.',
      'Also haben wir iSupfactory um sie herum aufgebaut. Abgestufte Mindestmengen ab Co-Branding-Läufen von 5–10 Einheiten, vollständige Engineering- und Design-Unterstützung und ein Fertigungsteam, das Ihre erste Bestellung so ernst nimmt wie Ihre hundertste. Sie bringen die Marke; wir betreiben die Fabrik.',
    ],
    values: [
      { title: 'Qualität zuerst', body: 'Jede Board durchläuft eine mehrstufige Qualitätskontrolle — Material, Schweißnähte, Druck, Montage und Verpackung werden in jeder Produktionsphase geprüft.' },
      { title: 'Hersteller, kein Zwischenhändler', body: 'Design, Formenbau, Prototyp, Produktion und Tests finden unter einem Dach statt — ohne Handelsebene zwischen Ihnen und dem Werk.' },
      { title: 'Flexibel durch Design', body: 'Abgestufte Mindestmengen, modulare Optionen und realistische Lieferzeiten erlauben es Marken, vom Musterauftrag zu Serienaufträgen zu wachsen.' },
    ],
    capabilities: ['OEM / ODM / Private Label', 'Kundenspezifische Formen', 'Musterservice', 'Design & Artwork', 'Mehrstufige Qualitätskontrolle', 'Exportdokumentation'],
    stats: [
      { value: '90–100+ Stk.', label: 'Standard-MOQ für Serienmenge (je freigegebener Konfiguration)' },
      { value: '7–12 Tage', label: 'Musterlieferzeit' },
      { value: '25–35 Tage', label: 'Produktionsvorlaufzeit' },
      { value: '20–50 Stk.', label: 'MOQ für Pilotaufträge' },
    ],
    strength: [
      { title: 'Produktentwicklung', body: 'Von der Konzeptskizze bis zur Produktionszeichnung — unsere Ingenieure verfeinern Form, Rocker, Dicke und Drop-Stitch-Konstruktion, um Ihre Leistungs- und Preisziele zu erreichen.' },
      { title: 'OEM-Fertigung', body: 'Bauen Sie nach Ihrer exakten Spezifikation: Materialien, Farben, Logo-Platzierung, Zubehör und Verpackung, in Serienmengen ab 90–100+ Stück je freigegebener Konfiguration.' },
      { title: 'ODM-Lösungen', body: 'Start auf unseren bewährten Plattformen — Allround, Touring, Race, Yoga und mehr — mit individueller Markierung, Grafik und Ausstattung für einen schnellen, risikoarmen Start.' },
      { title: 'Engineering-Support', body: 'Formenbau, Prototyping und Musterentwicklung unter einem Dach, mit Druckmustern und Grafikfreigaben bei jedem Meilenstein vor der Serienproduktion.' },
      { title: 'Qualitätsmanagement', body: 'Multipunkt-QC über Materialien, Schweißnähte, Druck, Montage und Verpackung, plus Stichproben- und Vorversand-Inspektionen, die Sie als Dritter buchen können.' },
      { title: 'Globale Lieferung', body: 'Exportdokumentation, exportgerechte Verpackung und interne Dokumentationsunterstützung für Marken in über 50 Märkten.' },
    ],
    partnering: {
      title: 'Zusammenarbeit mit Unternehmen weltweit',
      body: [
        'iSupfactory arbeitet mit SUP-Marken, Händlern, Resorts, Schulen und Outdoor-Unternehmen zusammen, die eine zuverlässige Fabrik für aufblasbare SUP-Boards benötigen — vom ersten Musterauftrag bis zu Container-Programmen.',
        'Teilen Sie uns Ihren Markt und Ihren Zielpreis mit, und wir antworten mit einem Spezifikationsblatt, MOQ und Lieferzeiten passend zu Ihrem Geschäftsmodell.',
      ],
    },
  },
  it: {
    kicker: 'Chi siamo',
    title: 'Chi è iSupfactory',
    sub: 'Il tuo partner per la produzione SUP personalizzata',
    story: [
      'Siamo una fabbrica OEM/ODM di SUP gonfiabili che da anni produce tavole per marchi, distributori e team di sourcing in tutto il mondo. Lungo il percorso continuavamo a incontrare lo stesso tipo di cliente — marchi e acquirenti con una visione di prodotto chiara ma senza uno stabilimento proprio per realizzarla.',
      'Così abbiamo costruito iSupfactory intorno a loro. Quantità minime a scaglioni a partire da lanci co-branding di 5–10 unità, pieno supporto di ingegneria e design, e un team di produzione che prende il tuo primo ordine seriamente quanto il centesimo. Tu porti il marchio; noi gestiamo la fabbrica.',
    ],
    values: [
      { title: 'La qualità al primo posto', body: 'Ogni tavola passa un controllo qualità a più stadi — materiali, saldature, stampa, assemblaggio e imballaggio vengono verificati in ogni fase della produzione.' },
      { title: 'Produttore, non intermediario', body: 'Design, sviluppo degli stampi, prototipo, produzione e test avvengono sotto lo stesso tetto — senza livelli intermedi tra te e lo stabilimento.' },
      { title: 'Flessibili per design', body: 'MOQ a scaglioni, opzioni modulari e tempi di consegna onesti permettono ai marchi di crescere dagli ordini di prova ai lotti in serie.' },
    ],
    capabilities: ['OEM / ODM / private label', 'Stampi personalizzati', 'Servizio campioni', 'Design & artwork', 'Controllo qualità multi-stadio', 'Documentazione di esportazione'],
    stats: [
      { value: '90–100+ pz.', label: 'MOQ di volume standard (per configurazione approvata)' },
      { value: '7–12 giorni', label: 'Tempi di consegna del campione' },
      { value: '25–35 giorni', label: 'Tempi di produzione' },
      { value: '20–50 pz.', label: 'MOQ per ordini pilota' },
    ],
    strength: [
      { title: 'Sviluppo prodotto', body: 'Dagli schizzi di concept ai disegni di produzione — i nostri ingegneri raffinano forma, rocker, spessore e costruzione drop-stitch per raggiungere i tuoi target di prestazione e prezzo.' },
      { title: 'Produzione OEM', body: 'Produci secondo la tua specifica esatta: materiali, colori, posizionamento del logo, accessori e imballaggio, in volumi di serie da 90–100+ pezzi per configurazione approvata.' },
      { title: 'Soluzioni ODM', body: 'Parti dalle nostre piattaforme collaudate — all-round, touring, gara, yoga e altro — e personalizza branding, grafiche e dotazioni per un lancio rapido e a basso rischio.' },
      { title: 'Supporto ingegneristico', body: 'Sviluppo stampi, prototipazione e iterazione dei campioni sotto lo stesso tetto, con prove di stampa e approvazioni grafiche a ogni tappa prima della produzione in serie.' },
      { title: 'Gestione qualità', body: 'QC multi-punto su materiali, saldature, stampa, assemblaggio e imballaggio, più ispezioni su campione e pre-spedizione che puoi prenotare come terza parte.' },
      { title: 'Consegna globale', body: 'Documentazione di esportazione, imballaggio standard export e supporto documentale interno per marchi in oltre 50 mercati.' },
    ],
    partnering: {
      title: 'Collaborazione con aziende globali',
      body: [
        'iSupfactory collabora con marchi SUP, distributori, resort, scuole e aziende outdoor che hanno bisogno di una fabbrica affidabile di tavole SUP gonfiabili — dal primo ordine di prova a programmi su scala container.',
        'Comunicaci il tuo mercato e il tuo prezzo target, e risponderemo con una scheda tecnica, MOQ e tempi di consegna adatti al tuo modello di business.',
      ],
    },
  },
  pt: {
    kicker: 'Quem somos',
    title: 'Quem é a iSupfactory',
    sub: 'O teu parceiro para produção de SUP personalizada',
    story: [
      'Somos uma fábrica OEM/ODM de SUP insufláveis que há anos produz pranchas para marcas, distribuidores e equipas de sourcing em todo o mundo. Ao longo do caminho continuámos a encontrar o mesmo tipo de cliente — marcas e compradores com uma visão de produto clara mas sem uma fábrica própria para a concretizar.',
      'Por isso construímos a iSupfactory à volta deles. Quantidades mínimas escalonadas a partir de lançamentos de co-branding de 5–10 unidades, apoio completo de engenharia e design, e uma equipa de produção que leva a tua primeira encomenda tão a sério como a centésima. Tu trazes a marca; nós tratamos da fábrica.',
    ],
    values: [
      { title: 'Qualidade em primeiro lugar', body: 'Cada prancha passa por um controlo de qualidade em várias fases — materiais, soldaduras, impressão, montagem e embalagem são verificados em cada etapa da produção.' },
      { title: 'Produtor, não intermediário', body: 'Design, desenvolvimento de moldes, protótipo, produção e testes acontecem debaixo do mesmo teto — sem intermediários entre ti e a fábrica.' },
      { title: 'Flexíveis no design', body: 'MOQ escalonados, opções modulares e prazos honestos permitem que as marcas cresçam das encomendas de teste aos lotes em série.' },
    ],
    capabilities: ['OEM / ODM / private label', 'Moldes personalizados', 'Serviço de amostras', 'Design & artwork', 'Controlo de qualidade em várias fases', 'Documentação de exportação'],
    stats: [
      { value: '90–100+ pç.', label: 'MOQ de volume padrão (por configuração aprovada)' },
      { value: '7–12 dias', label: 'Prazo de entrega de amostras' },
      { value: '25–35 dias', label: 'Prazo de produção' },
      { value: '20–50 pç.', label: 'MOQ para encomendas piloto' },
    ],
    strength: [
      { title: 'Desenvolvimento de produto', body: 'Dos esboços de conceito aos desenhos de produção — os nossos engenheiros refinam forma, rocker, espessura e construção drop-stitch para alcançar os teus objetivos de desempenho e preço.' },
      { title: 'Produção OEM', body: 'Produzimos de acordo com a tua especificação exata: materiais, cores, posicionamento do logo, acessórios e embalagem, em volumes de série a partir de 90–100+ peças por configuração aprovada.' },
      { title: 'Soluções ODM', body: 'Parte das nossas plataformas comprovadas — all-round, touring, corrida, yoga e outras — e personaliza branding, grafismos e equipamento para um lançamento rápido e de baixo risco.' },
      { title: 'Apoio de engenharia', body: 'Desenvolvimento de moldes, prototipagem e iteração de amostras debaixo do mesmo teto, com provas de impressão e aprovações de grafismo em cada etapa antes da produção em série.' },
      { title: 'Gestão de qualidade', body: 'QC multiponto em materiais, soldaduras, impressão, montagem e embalagem, mais inspeções por amostragem e pré-envio que podes reservar como terceira parte.' },
      { title: 'Entrega global', body: 'Documentação de exportação, embalagem padrão de exportação e apoio documental interno para marcas em mais de 50 mercados.' },
    ],
    partnering: {
      title: 'Colaboração com empresas globais',
      body: [
        'A iSupfactory colabora com marcas de SUP, distribuidores, resorts, escolas e empresas outdoor que precisam de uma fábrica fiável de pranchas de SUP insufláveis — desde a primeira encomenda de amostras a programas à escala de contentor.',
        'Diz-nos qual é o teu mercado e o teu preço-alvo, e responderemos com uma ficha técnica, MOQ e prazos de entrega adequados ao teu modelo de negócio.',
      ],
    },
  },
  nl: {
    kicker: 'Wie we zijn',
    title: 'Wie is iSupfactory',
    sub: 'Jouw partner voor gepersonaliseerde SUP-productie',
    story: [
      "Wij zijn een OEM/ODM-fabriek van opblaasbare SUP's die al jaren planken produceert voor merken, distributeurs en sourcingteams over de hele wereld. Onderweg bleven we hetzelfde type klant tegenkomen — merken en kopers met een duidelijke productvisie maar zonder eigen fabriek om die te realiseren.",
      'Daarom hebben we iSupfactory rond hen opgebouwd. Gedifferentieerde minimale afnames vanaf co-branding-runs van 5–10 stuks, volledige ondersteuning op engineering en design, en een productieteam dat jouw eerste bestelling net zo serieus neemt als je honderdste. Jij brengt het merk; wij runnen de fabriek.',
    ],
    values: [
      { title: 'Kwaliteit voorop', body: 'Elke plank doorloopt een kwaliteitscontrole in meerdere fases — materialen, lassen, bedrukking, montage en verpakking worden in elke productiefase gecontroleerd.' },
      { title: 'Producent, geen tussenpersoon', body: 'Design, ontwikkeling van matrijzen, prototype, productie en testen gebeuren allemaal onder één dak — geen handelsniveau tussen jou en de fabriek.' },
      { title: 'Flexibel door design', body: "Gedifferentieerde MOQ's, modulaire opties en eerlijke levertijden laten merken groeien van proefbestellingen naar seriebatches." },
    ],
    capabilities: ['OEM / ODM / private label', 'Gepersonaliseerde matrijzen', 'Monsterservice', 'Design & artwork', 'Kwaliteitscontrole in meerdere fases', 'Exportdocumentatie'],
    stats: [
      { value: '90–100+ st.', label: 'Standaard volume-MOQ (per goedgekeurde configuratie)' },
      { value: '7–12 dagen', label: 'Levertijd monster' },
      { value: '25–35 dagen', label: 'Productietijd' },
      { value: '20–50 st.', label: 'MOQ voor pilotorders' },
    ],
    strength: [
      { title: 'Productontwikkeling', body: 'Van conceptschetsen tot productietekeningen — onze ingenieurs verfijnen vorm, rocker, dikte en drop-stitch-constructie om jouw prestatie- en prijsdoelen te halen.' },
      { title: 'OEM-productie', body: 'Produceer volgens jouw exacte specificatie: materialen, kleuren, logo-plaatsing, accessoires en verpakking, in serievolumes vanaf 90–100+ stuks per goedgekeurde configuratie.' },
      { title: 'ODM-oplossingen', body: 'Start vanaf onze beproefde interne platforms — all-round, touring, race, yoga en meer — en personaliseer branding, graphics en uitrusting voor een snelle lancering met laag risico.' },
      { title: 'Engineeringondersteuning', body: 'Matrijsontwikkeling, prototyping en monstervarianten onder één dak, met drukproeven en grafische goedkeuringen bij elke mijlpaal vóór de serieproductie.' },
      { title: 'Kwaliteitsmanagement', body: 'Multipoint-QC op materialen, lassen, bedrukking, montage en verpakking, plus steekproef- en voorverzendingsinspecties die je als derde partij kunt boeken.' },
      { title: 'Wereldwijde levering', body: 'Exportdocumentatie, exportklare verpakking en interne documentaire ondersteuning voor merken in meer dan 50 markten.' },
    ],
    partnering: {
      title: 'Samenwerking met wereldwijde bedrijven',
      body: [
        "iSupfactory werkt samen met SUP-merken, distributeurs, resorts, scholen en outdoor-bedrijven die een betrouwbare fabriek voor opblaasbare paddleboard-planken nodig hebben — van de eerste proefbestelling tot programma's op container-schaal.",
        'Vertel ons jouw markt en jouw doelprijs, en we antwoorden met een specificatieblad, MOQ en levertijden die passen bij jouw bedrijfsmodel.',
      ],
    },
  },
  sv: {
    kicker: 'Om oss',
    title: 'Om iSupfactory',
    sub: 'Din partner för skräddarsydd tillverkning av SUP',
    story: [
      'Vi är en OEM/ODM-fabrik för uppblåsbara SUP:er som i flera år har tillverkat brädor för varumärken, distributörer och inköpsteam runt om i världen. Längs vägen mötte vi gång på gång samma typ av kund — varumärken och köpare med en tydlig produktvision men utan egen fabrik att förverkliga den i.',
      'Därför byggde vi iSupfactory kring dem. Trappade minimikvantiteter från co-branding-serier om 5–10 enheter, fullt stöd inom konstruktion och design, och ett produktionsteam som tar din första beställning lika allvarligt som din hundrade. Du tar med varumärket; vi driver fabriken.',
    ],
    values: [
      { title: 'Kvalitet först', body: 'Varje bräda genomgår en kvalitetskontroll i flera steg — material, svetsfogar, tryck, montering och förpackning granskas i varje produktionssteg.' },
      { title: 'Tillverkare, inte mellanhand', body: 'Design, formutveckling, prototyp, produktion och tester sker under samma tak — inga handelsled mellan dig och fabriken.' },
      { title: 'Flexibla i grunden', body: 'Trappade MOQ:er, modulära alternativ och ärliga ledtider gör att varumärken kan växa från provbeställningar till seriebatcher.' },
    ],
    capabilities: ['OEM / ODM / private label', 'Anpassade formar', 'Provtjänst', 'Design & artwork', 'Kvalitetskontroll i flera steg', 'Exportdokumentation'],
    stats: [
      { value: '90–100+ st.', label: 'Standard MOQ volym (per godkänd konfiguration)' },
      { value: '7–12 dagar', label: 'Provleveranstid' },
      { value: '25–35 dagar', label: 'Produktionstid' },
      { value: '20–50 st.', label: 'MOQ för pilotorders' },
    ],
    strength: [
      { title: 'Produktutveckling', body: 'Från konceptskisser till produktionsritningar — våra ingenjörer finslipar form, rocker, tjocklek och drop-stitch-konstruktion för att nå dina prestanda- och prismål.' },
      { title: 'OEM-tillverkning', body: 'Bygg enligt din exakta specifikation: material, färger, logoplacering, tillbehör och förpackning, i serievolymer från 90–100+ styck per godkänd konfiguration.' },
      { title: 'ODM-lösningar', body: 'Utgå från våra beprövade plattformar — allround, touring, race, yoga och mer — och anpassa varumärke, grafik och utrustning för en snabb och riskfri lansering.' },
      { title: 'Konstruktionsstöd', body: 'Formutveckling, prototypframtagning och proviteration under samma tak, med tryckprover och grafikgodkännanden vid varje milstolpe före serietillverkning.' },
      { title: 'Kvalitetsledning', body: 'Multi-punkt QC på material, svetsfogar, tryck, montering och förpackning, plus stickprovs- och före-avsändningsinspektioner du kan boka som tredje part.' },
      { title: 'Global leverans', body: 'Exportdokumentation, exportanpassad förpackning och internt dokumentstöd för varumärken på över 50 marknader.' },
    ],
    partnering: {
      title: 'Samarbete med företag över hela världen',
      body: [
        'iSupfactory samarbetar med SUP-varumärken, distributörer, resorter, skolor och utomhusföretag som behöver en pålitlig fabrik för uppblåsbara paddleboards — från första provbeställning till program i containerskala.',
        'Berätta om din marknad och din målprisnivå, så svarar vi med ett specifikationsblad, MOQ och ledtider anpassade till din affärsmodell.',
      ],
    },
  },
  no: {
    kicker: 'Om oss',
    title: 'Om iSupfactory',
    sub: 'Din partner for skreddersydd SUP-produksjon',
    story: [
      'Vi er en OEM/ODM-fabrikk for oppblåsbare SUP-er som i årevis har produsert brett for merker, distributører og innkjøpsgrupper over hele verden. Underveis møtte vi gang etter gang den samme typen kunde — merker og innkjøpere med et tydelig produktkonsept, men uten egen fabrikk til å realisere det i.',
      'Derfor bygde vi iSupfactory rundt dem. Trinnvise minstekvantiteter fra co-branding-serier på 5–10 enheter, full støtte innen konstruksjon og design, og et produksjonsteam som tar den første bestillingen på like alvor som den hundrede. Du tar med merket; vi driver fabrikken.',
    ],
    values: [
      { title: 'Kvalitet først', body: 'Hvert brett går gjennom en kvalitetskontroll i flere trinn — materiale, sømmer, trykk, montering og emballasje kontrolleres i hvert produksjonstrinn.' },
      { title: 'Produsent, ikke mellomledd', body: 'Design, formutvikling, prototyping, produksjon og testing skjer under samme tak — ingen handelsledd mellom deg og fabrikken.' },
      { title: 'Fleksibelt i grunnen', body: 'Trinnvise MOQ-er, modulære alternativer og ærlige leveringstider gjør at merker kan vokse fra prøvebestillinger til seriemengder.' },
    ],
    capabilities: ['OEM / ODM / private label', 'Skreddersydde former', 'Prøvetjeneste', 'Design og grafikk', 'Kvalitetskontroll i flere trinn', 'Eksportdokumentasjon'],
    stats: [
      { value: '90–100+ stk', label: 'Standard MOQ-mengde (per godkjent konfigurasjon)' },
      { value: '7–12 dager', label: 'Leveringstid for prøver' },
      { value: '25–35 dager', label: 'Produksjonstid' },
      { value: '20–50 stk', label: 'MOQ for pilotbestillinger' },
    ],
    strength: [
      { title: 'Produktutvikling', body: 'Fra konseptskisser til produksjonstegninger — ingeniørene våre finjusterer form, rocker, tykkelse og drop-stitch-konstruksjon for å nå målene dine for ytelse og pris.' },
      { title: 'OEM-produksjon', body: 'Bygg etter din spesifikasjon: materiale, farger, logoplassering, tilbehør og emballasje, i seriemengder fra 90–100+ stk per godkjent konfigurasjon.' },
      { title: 'ODM-løsninger', body: 'Bygg på våre testede plattformer — allround, touring, race, yoga og mer — og tilpass merke, grafikk og utstyr for en rask og risikofri lansering.' },
      { title: 'Konstruksjonsstøtte', body: 'Formutvikling, prototyping og prøveiterasjon under samme tak, med trykksprøver og grafikkgodkjenning ved hvert milepål før serietillverkning.' },
      { title: 'Kvalitetsstyring', body: 'Flerspunkts-QC på materiale, sømmer, trykk, montering og emballasje, pluss stikkprøve- og inspeksjon før avsending som du kan bestille som tredjepart.' },
      { title: 'Global levering', body: 'Eksportdokumentasjon, eksporttilpasset emballasje og intern dokumentstøtte for merker i over 50 markeder.' },
    ],
    partnering: {
      title: 'Samarbeid med bedrifter over hele verden',
      body: [
        'iSupfactory samarbeider med SUP-merker, distributører, resorts, skoler og friluftsbedrifter som trenger en pålitelig fabrikk for oppblåsbare paddleboards — fra den første prøvebestillingen til programmer i containermengder.',
        'Fortell oss om markedet ditt og ønsket prisnivå, så svarer vi med et spesifikasjonsark, MOQ og leveringstider tilpasset forretningsmodellen din.',
      ],
    },
  },
  pl: {
    kicker: 'O nas',
    title: 'O iSupfactory',
    sub: 'Twój partner w produkcji desek SUP na zamówienie',
    story: [
      'Jesteśmy fabryką OEM/ODM nadmuchiwanych desek SUP, która od lat produkuje deski dla marek, dystrybutorów i zespołów zakupowych na całym świecie. Po drodze wielokrotnie spotykaliśmy ten sam typ klienta — marki i kupujących z wyraźną koncepcją produktu, ale bez własnej fabryki, która mogłaby ją zrealizować.',
      'Dlatego zbudowaliśmy wok nich iSupfactory. Etapowe minimalne ilości od serii co-branding 5–10 sztuk, pełne wsparcie na etapie konstrukcji i projektu oraz zespół produkcyjny, który traktuje pierwsze zamówienie równie poważnie jak setne. Wnosisz markę, my prowadzimy fabrykę.',
    ],
    values: [
      { title: 'Jakość na pierwszym miejscu', body: 'Każda deska przechodzi wielostopniową kontrolę jakości — materiał, szwy, nadruk, montaż i opakowanie są sprawdzane na każdym etapie produkcji.' },
      { title: 'Producent, nie pośrednik', body: 'Projekt, opracowywanie form, prototypowanie, produkcja i testy odbywają się pod jednym dachem — bez żadnego ogniwa handlowego między Tobą a fabryką.' },
      { title: 'Elastyczność u źródła', body: 'Etapowe MOQ, opcje modułowe i uczciwe czasy realizacji pozwalają markom rosnąć od zamówień próbnych po serie produkcyjne.' },
    ],
    capabilities: ['OEM / ODM / marka własna', 'Formy na zamówienie', 'Usługa próbek', 'Projekt i grafika', 'Wielostopniowa kontrola jakości', 'Dokumentacja eksportowa'],
    stats: [
      { value: '90–100+ szt', label: 'Standardowa wielkość MOQ (na zatwierdzoną konfigurację)' },
      { value: '7–12 dni', label: 'Czas realizacji próbek' },
      { value: '25–35 dni', label: 'Czas realizacji produkcji' },
      { value: '20–50 szt', label: 'MOQ dla zamówień pilotażowych' },
    ],
    strength: [
      { title: 'Rozwój produktu', body: 'Od szkiców koncepcji po rysunki produkcyjne — nasi inżynierowi dostrajają kształt, rocker, grubość i konstrukcję drop-stitch, aby osiągnąć Twoje cele wydajnościowe i cenowe.' },
      { title: 'Produkcja OEM', body: 'Budowa według Twojej specyfikacji: materiał, kolory, umiejscowienie logo, akcesoria i opakowanie, w wolumenie od 90–100+ szt na zatwierdzoną konfigurację.' },
      { title: 'Rozwiązania ODM', body: 'Budowa na naszych sprawdzonych platformach — allround, touring, race, yoga i inne — z dostosowaniem marki, grafiki i akcesoriów, aby premiera była szybka i bezpieczna.' },
      { title: 'Wsparcie konstrukcyjne', body: 'Opracowywanie form, prototypowanie i iteracje na próbkach pod jednym dachem, z próbnymi nadrukami i akceptacją grafiki na każdym kamieniu milowym przed produkcją seryjną.' },
      { title: 'Zarządzanie jakością', body: 'Kontrola jakości w wielu punktach: materiał, szwy, nadruk, montaż i opakowanie, a dodatkowo kontrola wyrywkowa i inspekcja przed wysyłką, które możesz zlecić stronie trzeciej.' },
      { title: 'Dostawa na cały świat', body: 'Dokumentacja eksportowa, opakowanie dostosowane do eksportu i wewnętrzne wsparcie dokumentacyjne dla marek w ponad 50 rynkach.' },
    ],
    partnering: {
      title: 'Współpracujemy z firmami na całym świecie',
      body: [
        'iSupfactory współpracuje z markami SUP, dystrybutorami, ośrodkami wypoczynkowymi, szkołami i firmami outdoorowymi, które potrzebują sprawdzonej fabryki nadmuchiwanych desek paddle — od pierwszego zamówienia próbnego po programy w ilościach kontenerowych.',
        'Opowiedz nam o swoim rynku i oczekiwanym poziomie cenowym, a my odpowiemy arkuszem specyfikacji, MOQ i czasami realizacji dopasowanymi do Twojego modelu biznesowego.',
      ],
    },
  },
}

/* ─────────────────────────── customizer page ─────────────────────────── */

export interface CustomizerContent {
  kicker: string
  title: string
  sub: string
  status: string
  statusBody: string
  steps: { title: string; body: string }[]
  mockupLabel: string
  mockupBrand: string
  stepLabel: string
  boardLabel: string
  cta: string
}

export const customizer: Localized<CustomizerContent> = {
  en: {
    kicker: 'Design Your SUP',
    title: 'Visualize Your SUP Concept Before Production',
    sub: 'Preview how your brand will look on a real board — pick a color, watch the mockup update live, then send us your logo for a full design.',
    status: 'Interactive Preview',
    statusBody: 'Try the palette now, then send us your idea — our team will create a free mockup of your full design.',
    steps: [
      { title: 'Choose board model', body: 'From all-around platforms to touring and yoga shapes — each with realistic proportions.' },
      { title: 'Select colors', body: 'Pick your brand palette and watch the board change instantly.' },
      { title: 'Upload logo', body: 'Place your logo and artwork on the deck — adjust size and position.' },
      { title: 'Generate mockup', body: 'Export a preview of your custom SUP to share with your team.' },
    ],
    mockupLabel: 'Live mockup preview',
    mockupBrand: "SUP Explorer 11'",
    stepLabel: 'Step',
    boardLabel: 'YOUR BRAND',
    cta: 'Create Your Design',
  },
  es: {
    kicker: 'Diseña tu SUP',
    title: 'Visualiza tu concepto SUP antes de la producción',
    sub: 'Previsualiza cómo se verá tu marca en una tabla real: elige un color, observa cómo se actualiza el mockup en vivo y envíanos tu logo para un diseño completo.',
    status: 'Vista previa interactiva',
    statusBody: 'Prueba la paleta ahora y luego envíanos tu idea: nuestro equipo creará un mockup gratuito de tu diseño completo.',
    steps: [
      { title: 'Elige el modelo de tabla', body: 'De plataformas polivalentes a formas de travesía y yoga, cada una con proporciones realistas.' },
      { title: 'Selecciona colores', body: 'Elige tu paleta de marca y observa cómo la tabla cambia al instante.' },
      { title: 'Sube tu logo', body: 'Coloca tu logo y tu arte en la cubierta: ajusta el tamaño y la posición.' },
      { title: 'Genera el mockup', body: 'Exporta una vista previa de tu SUP personalizado para compartirla con tu equipo.' },
    ],
    mockupLabel: 'Vista previa del mockup en vivo',
    mockupBrand: "SUP Explorer 11'",
    stepLabel: 'Paso',
    boardLabel: 'TU MARCA',
    cta: 'Crea tu diseño',
  },
  fr: {
    kicker: 'Concevez votre SUP',
    title: 'Visualisez votre concept de SUP avant la production',
    sub: 'Aperçu de l\'aspect de votre marque sur une planche réelle — choisissez une couleur, regardez le mockup se mettre à jour en direct, puis envoyez-nous votre logo pour un design complet.',
    status: 'Aperçu interactif',
    statusBody: 'Essayez la palette dès maintenant, puis envoyez-nous votre idée — notre équipe créera un mockup gratuit de votre design complet.',
    steps: [
      { title: 'Choisir le modèle de planche', body: 'Des plateformes polyvalentes aux formes de randonnée et de yoga — chacune avec des proportions réalistes.' },
      { title: 'Sélectionner les couleurs', body: 'Choisissez la palette de votre marque et regardez la planche changer instantanément.' },
      { title: 'Téléverser le logo', body: 'Placez votre logo et vos visuels sur le pont — ajustez la taille et la position.' },
      { title: 'Générer le mockup', body: 'Exportez un aperçu de votre SUP personnalisé à partager avec votre équipe.' },
    ],
    mockupLabel: 'Aperçu du mockup en direct',
    mockupBrand: "SUP Explorer 11'",
    stepLabel: 'Étape',
    boardLabel: 'VOTRE MARQUE',
    cta: 'Créer votre design',
  },
  de: {
    kicker: 'Gestalten Sie Ihr SUP',
    title: 'Visualisieren Sie Ihr SUP-Konzept vor der Produktion',
    sub: 'Sehen Sie vorab, wie Ihre Marke auf einem echten Board aussieht — wählen Sie eine Farbe, beobachten Sie, wie sich der Mockup live aktualisiert, und senden Sie uns anschließend Ihr Logo für ein vollständiges Design.',
    status: 'Interaktive Vorschau',
    statusBody: 'Testen Sie jetzt die Palette und senden Sie uns dann Ihre Idee — unser Team erstellt einen kostenlosen Mockup Ihres vollständigen Designs.',
    steps: [
      { title: 'Board-Modell wählen', body: 'Von Allround-Plattformen bis zu Touring- und Yoga-Formen — jeweils mit realistischen Proportionen.' },
      { title: 'Farben auswählen', body: 'Wählen Sie Ihre Markenpalette und sehen Sie, wie sich das Board sofort verändert.' },
      { title: 'Logo hochladen', body: 'Platzieren Sie Ihr Logo und Artwork auf dem Deck — Größe und Position anpassen.' },
      { title: 'Mockup erzeugen', body: 'Exportieren Sie eine Vorschau Ihres individuellen SUP zum Teilen mit Ihrem Team.' },
    ],
    mockupLabel: 'Live-Mockup-Vorschau',
    mockupBrand: "SUP Explorer 11'",
    stepLabel: 'Schritt',
    boardLabel: 'IHRE MARKE',
    cta: 'Design erstellen',
  },
  it: {
    kicker: 'Progetta il tuo SUP',
    title: 'Visualizza il tuo concept SUP prima della produzione',
    sub: "Guarda in anteprima come apparirà il tuo marchio su una tavola reale — scegli un colore, osserva il mockup aggiornarsi in tempo reale e inviaci il tuo logo per un design completo.",
    status: 'Anteprima interattiva',
    statusBody: 'Prova subito la palette e poi inviaci la tua idea — il nostro team creerà un mockup gratuito del tuo design completo.',
    steps: [
      { title: 'Scegli il modello di tavola', body: 'Dalle piattaforme all-round alle forme touring e yoga — ognuna con proporzioni realistiche.' },
      { title: 'Seleziona i colori', body: "Scegli la palette del tuo marchio e osserva la tavola cambiare all’istante." },
      { title: 'Carica il logo', body: 'Posiziona logo e artwork sul deck — regola dimensione e posizione.' },
      { title: 'Genera il mockup', body: "Esporta un’anteprima del tuo SUP personalizzato da condividere con il tuo team." },
    ],
    mockupLabel: 'Anteprima mockup in tempo reale',
    mockupBrand: "SUP Explorer 11'",
    stepLabel: 'Passo',
    boardLabel: 'IL TUO MARCHIO',
    cta: 'Crea il tuo design',
  },
  pt: {
    kicker: 'Desenha o teu SUP',
    title: 'Visualiza o teu conceito de SUP antes da produção',
    sub: 'Pré-visualiza como a tua marca vai aparecer numa prancha real — escolhe uma cor, observa o mockup a atualizar-se em tempo real e envia-nos o teu logo para um design completo.',
    status: 'Pré-visualização interativa',
    statusBody: 'Experimenta já a paleta e depois envia-nos a tua ideia — a nossa equipa vai criar um mockup gratuito do teu design completo.',
    steps: [
      { title: 'Escolhe o modelo de prancha', body: 'De plataformas all-round a formas touring e yoga — cada uma com proporções realistas.' },
      { title: 'Seleciona as cores', body: 'Escolhe a paleta da tua marca e observa a prancha a mudar instantaneamente.' },
      { title: 'Carrega o logo', body: 'Coloca o teu logo e artwork no deck — ajusta o tamanho e a posição.' },
      { title: 'Gera o mockup', body: 'Exporta uma pré-visualização do teu SUP personalizado para partilhar com a tua equipa.' },
    ],
    mockupLabel: 'Pré-visualização do mockup em tempo real',
    mockupBrand: "SUP Explorer 11'",
    stepLabel: 'Passo',
    boardLabel: 'A TUA MARCA',
    cta: 'Cria o teu design',
  },
  nl: {
    kicker: 'Ontwerp je SUP',
    title: 'Visualiseer je SUP-concept vóór de productie',
    sub: 'Bekijk hoe jouw merk eruitziet op een echte plank — kies een kleur, zie de mockup live bijwerken en stuur ons daarna je logo voor een volledig design.',
    status: 'Interactieve voorvertoning',
    statusBody: 'Probeer nu het palet en stuur ons daarna je idee — ons team maakt een gratis mockup van jouw volledige design.',
    steps: [
      { title: 'Kies het plankenmodel', body: 'Van all-round platforms tot touring- en yogavormen — elk met realistische verhoudingen.' },
      { title: 'Selecteer kleuren', body: 'Kies je merkpalet en zie de plank direct veranderen.' },
      { title: 'Upload een logo', body: 'Plaats je logo en artwork op het deck — pas de grootte en positie aan.' },
      { title: 'Genereer de mockup', body: 'Exporteer een voorvertoning van jouw gepersonaliseerde SUP om te delen met je team.' },
    ],
    mockupLabel: 'Live mockup-voorvertoning',
    mockupBrand: "SUP Explorer 11'",
    stepLabel: 'Stap',
    boardLabel: 'JOUW MERK',
    cta: 'Maak je design',
  },
  sv: {
    kicker: 'Designa din SUP',
    title: 'Visualisera ditt SUP-koncept före produktion',
    sub: 'Förhandsvisa hur ditt varumärke kommer att se ut på en riktig bräda — välj en färg, se mockupen uppdateras live och skicka sedan din logotyp för en komplett design.',
    status: 'Interaktiv förhandsvisning',
    statusBody: 'Prova paletten nu och skicka sedan din idé — vårt team skapar en gratis mockup av din fullständiga design.',
    steps: [
      { title: 'Välj brädmodell', body: 'Från allround-plattformar till touring- och yogaformer — var och en med realistiska proportioner.' },
      { title: 'Välj färger', body: 'Välj din varumärkespalett och se brädan förändras direkt.' },
      { title: 'Ladda upp logotyp', body: 'Placera din logotyp och artwork på däcket — justera storlek och position.' },
      { title: 'Generera mockup', body: 'Exportera en förhandsvisning av ditt anpassade SUP att dela med ditt team.' },
    ],
    mockupLabel: 'Live-förhandsvisning av mockup',
    mockupBrand: "SUP Explorer 11'",
    stepLabel: 'Steg',
    boardLabel: 'DITT VARUMÄRKE',
    cta: 'Skapa din design',
  },
  no: {
    kicker: 'Design din SUP',
    title: 'Visualiser SUP-konseptet ditt før produksjon',
    sub: 'Forhåndsvis hvordan merket ditt vil se ut på en ekte brett — velg en farge, se mockupen oppdateres live, og send oss deretter logotypen din for et komplett design.',
    status: 'Interaktiv forhåndsvisning',
    statusBody: 'Prøv paletten nå og send oss deretter ideen din — teamet vårt lager en gratis mockup av det komplette designet ditt.',
    steps: [
      { title: 'Velg brettmodell', body: 'Fra allround-plattformer til touring- og yogaformer — hver med realistiske proporsjoner.' },
      { title: 'Velg farger', body: 'Velg merkepaletten din og se brettet endre seg umiddelbart.' },
      { title: 'Last opp logotyp', body: 'Plasser logotypen og grafikken din på dekket — juster størrelse og plassering.' },
      { title: 'Generer mockup', body: 'Eksporter en forhåndsvisning av din tilpassede SUP for å dele med teamet ditt.' },
    ],
    mockupLabel: 'Live-forhåndsvisning av mockup',
    mockupBrand: "SUP Explorer 11'",
    stepLabel: 'Trinn',
    boardLabel: 'MERKET DITT',
    cta: 'Lag designet ditt',
  },
  pl: {
    kicker: 'Zaprojektuj swoją SUP',
    title: 'Zobacz swoją koncepcję SUP przed produkcją',
    sub: 'Zobacz, jak Twoja marka będzie wyglądać na prawdziwej desce — wybierz kolor, obserwuj podgląd aktualizowany na żywo, a następnie wyślij nam logo, aby przygotować pełny projekt.',
    status: 'Interaktywny podgląd',
    statusBody: 'Wypróbuj paletę barw, a potem wyślij nam swój pomysł — nasz zespół przygotuje bezpłatny podgląd Twojego pełnego projektu.',
    steps: [
      { title: 'Wybierz model deski', body: 'Od platform allround po kształty touring i yoga — każda z realistycznymi proporcjami.' },
      { title: 'Wybierz kolory', body: 'Wybierz paletę swojej marki i zobacz natychmiastową zmianę deski.' },
      { title: 'Wgraj logo', body: 'Umieść logo i grafikę na pokładzie — dostosuj wielkość i położenie.' },
      { title: 'Wygeneruj podgląd', body: 'Wyeksportuj podgląd swojej indywidualnej deski SUP, aby udostępnić go zespołowi.' },
    ],
    mockupLabel: 'Podgląd projektu na żywo',
    mockupBrand: "SUP Explorer 11'",
    stepLabel: 'Krok',
    boardLabel: 'TWOJA MARKA',
    cta: 'Stwórz swój projekt',
  },
}

/* ─────────────────────────── products page extras ─────────────────────────── */

export interface ProductsPageContent {
  kicker: string
  title: string
  sub: string
  customTitle: string
  customBody: string
  customPoints: string[]
}

export const productsPage: Localized<ProductsPageContent> = {
  en: {
    kicker: 'Product Platforms',
    title: 'SUP Platforms Available For Customization',
    sub: 'Each model below is a manufacturing platform. Choose one as your starting point and we’ll adapt the shape, graphics, colors and specs to your product.',
    customTitle: 'Every Product Can Be Customized',
    customBody: 'Nothing ships off-the-shelf. Each board is built for you with your choices at every layer.',
    customPoints: ['Shape & size', 'Colors & full-board graphics', 'Logo & EVA pad design', 'Accessories & packaging'],
  },
  es: {
    kicker: 'Plataformas de producto',
    title: 'Plataformas SUP disponibles para personalización',
    sub: 'Cada modelo de abajo es una plataforma de fabricación. Elige uno como punto de partida y adaptaremos la forma, los gráficos, los colores y las especificaciones a tu producto.',
    customTitle: 'Cada producto se puede personalizar',
    customBody: 'Nada sale de fábrica en serie. Cada tabla se construye para ti con tus elecciones en cada capa.',
    customPoints: ['Forma y tamaño', 'Colores y gráficos a toda cubierta', 'Diseño de logo y piso EVA', 'Accesorios y embalaje'],
  },
  fr: {
    kicker: 'Plateformes produit',
    title: 'Plateformes de SUP disponibles pour la personnalisation',
    sub: 'Chaque modèle ci-dessous est une plateforme de fabrication. Choisissez-en un comme point de départ et nous adapterons la forme, les graphismes, les couleurs et les spécifications à votre produit.',
    customTitle: 'Chaque produit peut être personnalisé',
    customBody: 'Rien ne part tel quel en l\'état. Chaque planche est construite pour vous avec vos choix à chaque couche.',
    customPoints: ['Forme et taille', 'Couleurs et graphismes pleine planche', 'Logo et design du pad EVA', 'Accessoires et packaging'],
  },
  de: {
    kicker: 'Produktplattformen',
    title: 'SUP-Plattformen zur Individualisierung',
    sub: 'Jedes Modell unten ist eine Fertigungsplattform. Wählen Sie eines als Ausgangspunkt, und wir passen Form, Grafiken, Farben und Spezifikationen an Ihr Produkt an.',
    customTitle: 'Jedes Produkt kann individualisiert werden',
    customBody: 'Nichts verlässt das Werk als Standardware. Jede Board wird mit Ihren Entscheidungen auf jeder Ebene für Sie gebaut.',
    customPoints: ['Form & Größe', 'Farben & komplette Board-Grafiken', 'Logo- & EVA-Pad-Design', 'Zubehör & Verpackung'],
  },
  it: {
    kicker: 'Piattaforme prodotto',
    title: 'Piattaforme SUP per la personalizzazione',
    sub: 'Ogni modello qui sotto è una piattaforma di produzione. Scegliene uno come punto di partenza e noi adatteremo forma, grafiche, colori e specifiche al tuo prodotto.',
    customTitle: 'Ogni prodotto può essere personalizzato',
    customBody: 'Niente esce dallo stabilimento come prodotto standard. Ogni tavola è costruita per te con le tue scelte a ogni livello.',
    customPoints: ['Forma e misure', 'Colori e grafiche a tutta tavola', 'Design del logo e del pad EVA', 'Accessori e imballaggio'],
  },
  pt: {
    kicker: 'Plataformas de produto',
    title: 'Plataformas de SUP para personalização',
    sub: 'Cada modelo abaixo é uma plataforma de produção. Escolhe um como ponto de partida e vamos adaptar forma, grafismos, cores e especificações ao teu produto.',
    customTitle: 'Cada produto pode ser personalizado',
    customBody: 'Nada sai da fábrica como produto padrão. Cada prancha é construída para ti com as tuas escolhas em cada nível.',
    customPoints: ['Forma e medidas', 'Cores e grafismos por toda a prancha', 'Design do logo e do pad EVA', 'Acessórios e embalagem'],
  },
  nl: {
    kicker: 'Productplatforms',
    title: 'SUP-platforms beschikbaar voor personalisatie',
    sub: 'Elk model hieronder is een productieplatform. Kies er één als startpunt en wij passen vorm, graphics, kleuren en specificaties aan jouw product aan.',
    customTitle: 'Elk product kan worden gepersonaliseerd',
    customBody: 'Niets verlaat de fabriek als standaardproduct. Elke plank wordt voor jou gebouwd met jouw keuzes op elk niveau.',
    customPoints: ['Vorm en afmetingen', 'Kleuren en graphics over de hele plank', 'Design van het logo en EVA-pad', 'Accessoires en verpakking'],
  },
  sv: {
    kicker: 'Produktplattformar',
    title: 'SUP-plattformar tillgängliga för anpassning',
    sub: 'Varje modell nedan är en tillverkningsplattform. Välj en som utgångspunkt så anpassar vi form, grafik, färger och specifikationer efter din produkt.',
    customTitle: 'Varje produkt kan anpassas',
    customBody: 'Ingenting levereras från hyllan. Varje bräda byggs för dig med dina val på varje nivå.',
    customPoints: ['Form & storlek', 'Färger & helbrädesgrafik', 'Logotyp- & EVA-paddesign', 'Tillbehör & förpackning'],
  },
  no: {
    kicker: 'Produktplattformer',
    title: 'SUP-plattformer tilgjengelig for tilpasning',
    sub: 'Hver modell nedenfor er en produksjonsplattform. Velg en som utgangspunkt, så tilpasser vi form, grafikk, farger og spesifikasjoner til produktet ditt.',
    customTitle: 'Hvert produkt kan tilpasses',
    customBody: 'Ingenting sendes ferdig fra hyllen. Hvert brett bygges for deg med valgene dine i hvert lag.',
    customPoints: ['Form og størrelse', 'Farger og grafikk på hele brettet', 'Logo- og EVA-padedesign', 'Tilbehør og emballasje'],
  },
  pl: {
    kicker: 'Platformy produktowe',
    title: 'Platformy SUP dostępne do personalizacji',
    sub: 'Każdy model poniżej to platforma produkcyjna. Wybierz jeden jako punkt wyjścia, a my dostosujemy kształt, grafikę, kolory i specyfikację do Twojego produktu.',
    customTitle: 'Każdy produkt można dostosować',
    customBody: 'Nic nie schodzi z magazynu gotowe. Każda deska jest budowana dla Ciebie, zgodnie z Twoimi wyborami na każdym poziomie.',
    customPoints: ['Kształt i wymiary', 'Kolory i grafika na całej desce', 'Projekt logo i nakładki EVA', 'Akcesoria i opakowanie'],
  },
}

/* ─────────────────────────── catalog download (email capture) ─────────────────────────── */

export interface CatalogContent {
  kicker: string
  title: string
  body: string
  emailLabel: string
  emailPlaceholder: string
  submit: string
  secure: string
  successTitle: string
  successBody: string
}

export const catalogDownload: Localized<CatalogContent> = {
  en: {
    kicker: 'Product Catalog',
    title: 'Get the full catalog and MOQ sheet',
    body: 'All ten platforms with specs, artwork options, MOQ tiers, sample timing and packaging — sent to your inbox by our sales team within one business day.',
    emailLabel: 'Work email',
    emailPlaceholder: 'you@yourcompany.com',
    submit: 'Request the Catalog',
    secure: 'No spam. Only the catalog and answers to your project.',
    successTitle: 'Request received',
    successBody: 'Our sales team will send the full product catalog and MOQ sheet to {email} within one business day.',
  },
  es: {
    kicker: 'Catálogo de productos',
    title: 'Recibe el catálogo completo y la ficha de MOQ',
    body: 'Las diez plataformas con especificaciones, opciones de arte, MOQ escalonados, tiempos de muestreo y embalaje — enviados a tu correo por nuestro equipo comercial en un día laborable.',
    emailLabel: 'Correo de trabajo',
    emailPlaceholder: 'tu@tuempresa.com',
    submit: 'Solicitar el catálogo',
    secure: 'Sin spam. Solo el catálogo y respuestas sobre tu proyecto.',
    successTitle: 'Solicitud recibida',
    successBody: 'Nuestro equipo comercial enviará el catálogo completo y la ficha de MOQ a {email} en un día laborable.',
  },
  fr: {
    kicker: 'Catalogue produits',
    title: 'Recevez le catalogue complet et la fiche de MOQ',
    body: 'Les dix plateformes avec spécifications, options de graphisme, paliers de MOQ, délais d\'échantillonnage et packaging — envoyés dans votre boîte mail par notre équipe commerciale sous un jour ouvrable.',
    emailLabel: 'E-mail professionnel',
    emailPlaceholder: 'vous@votreentreprise.com',
    submit: 'Demander le catalogue',
    secure: 'Pas de spam. Uniquement le catalogue et les réponses concernant votre projet.',
    successTitle: 'Demande reçue',
    successBody: 'Notre équipe commerciale enverra le catalogue produit complet et la fiche de MOQ à {email} sous un jour ouvrable.',
  },
  de: {
    kicker: 'Produktkatalog',
    title: 'Erhalten Sie den vollständigen Katalog und die MOQ-Übersicht',
    body: 'Alle zehn Plattformen mit Spezifikationen, Artwork-Optionen, abgestuften MOQs, Musterzeiten und Verpackung — von unserem Vertriebsteam innerhalb eines Werktags an Ihr Postfach gesendet.',
    emailLabel: 'Geschäftliche E-Mail',
    emailPlaceholder: 'sie@ihrfirma.com',
    submit: 'Katalog anfordern',
    secure: 'Kein Spam. Nur der Katalog und Antworten zu Ihrem Projekt.',
    successTitle: 'Anfrage erhalten',
    successBody: 'Unser Vertriebsteam sendet den vollständigen Produktkatalog und die MOQ-Übersicht innerhalb eines Werktags an {email}.',
  },
  it: {
    kicker: 'Catalogo prodotti',
    title: 'Ricevi il catalogo completo e il foglio MOQ',
    body: "Tutte le piattaforme con specifiche, opzioni di artwork, MOQ a scaglioni, tempi di campionatura e imballaggio — inviati alla tua casella dal nostro team commerciale entro un giorno lavorativo.",
    emailLabel: 'E-mail di lavoro',
    emailPlaceholder: 'tu@tuazienda.com',
    submit: 'Richiedi il catalogo',
    secure: 'Niente spam. Solo il catalogo e le risposte sul tuo progetto.',
    successTitle: 'Richiesta ricevuta',
    successBody: 'Il nostro team commerciale invierà il catalogo prodotti completo e il foglio MOQ a {email} entro un giorno lavorativo.',
  },
  pt: {
    kicker: 'Catálogo de produtos',
    title: 'Recebe o catálogo completo e a folha de MOQ',
    body: 'Todas as dez plataformas com especificações, opções de artwork, MOQ escalonados, tempos de amostragem e embalagem — enviados para a tua caixa de correio pela nossa equipa comercial num dia útil.',
    emailLabel: 'E-mail de trabalho',
    emailPlaceholder: 'tu@atuempresa.com',
    submit: 'Pedir o catálogo',
    secure: 'Sem spam. Apenas o catálogo e respostas sobre o teu projeto.',
    successTitle: 'Pedido recebido',
    successBody: 'A nossa equipa comercial vai enviar o catálogo de produtos completo e a folha de MOQ para {email} num dia útil.',
  },
  nl: {
    kicker: 'Productcatalogus',
    title: 'Ontvang de volledige catalogus en het MOQ-blad',
    body: "Alle tien platforms met specificaties, artworkopties, gedifferentieerde MOQ's, samplingtijden en verpakking — door ons verkoopteam binnen één werkdag naar jouw inbox gestuurd.",
    emailLabel: 'Zakelijke e-mail',
    emailPlaceholder: 'jij@jouwbedrijf.com',
    submit: 'Catalogus aanvragen',
    secure: 'Geen spam. Alleen de catalogus en antwoorden over jouw project.',
    successTitle: 'Aanvraag ontvangen',
    successBody: 'Ons verkoopteam stuurt de volledige productcatalogus en het MOQ-blad binnen één werkdag naar {email}.',
  },
  sv: {
    kicker: 'Produktkatalog',
    title: 'Få den fullständiga katalogen och MOQ-bladet',
    body: 'Alla plattformar med specifikationer, artworkalternativ, MOQ-nivåer, provtider och förpackning — skickade till din inkorg av vårt säljteam inom en arbetsdag.',
    emailLabel: 'Arbetsmejl',
    emailPlaceholder: 'du@dittföretag.com',
    submit: 'Begär katalogen',
    secure: 'Ingen spam. Bara katalogen och svar om ditt projekt.',
    successTitle: 'Begäran mottagen',
    successBody: 'Vårt säljteam skickar den fullständiga produktkatalogen och MOQ-bladet till {email} inom en arbetsdag.',
  },
  no: {
    kicker: 'Produktkatalog',
    title: 'Få hele katalogen og MOQ-arket',
    body: 'Alle plattformene med spesifikasjoner, grafikkalternativer, MOQ-nivåer, prøvetider og emballasje — sendt til postkassen din av salgsteamet vårt innen én arbeidsdag.',
    emailLabel: 'Jobb-e-post',
    emailPlaceholder: 'du@dinbedrift.com',
    submit: 'Be om katalogen',
    secure: 'Ingen spam. Bare katalogen og svar om prosjektet ditt.',
    successTitle: 'Forespørsel mottatt',
    successBody: 'Salgsteamet vårt sender hele produktkatalogen og MOQ-arket til {email} innen én arbeidsdag.',
  },
  pl: {
    kicker: 'Katalog produktowy',
    title: 'Otrzymaj pełny katalog i arkusz MOQ',
    body: 'Wszystkie platformy wraz ze specyfikacjami, opcjami grafiki, poziomami MOQ, czasami próbek i opakowaniem — wysłane przez nasz zespół sprzedaży na Twój adres w ciągu jednego dnia roboczego.',
    emailLabel: 'Służbowy e-mail',
    emailPlaceholder: 'ty@twojafirma.pl',
    submit: 'Poproś o katalog',
    secure: 'Żadnego spamu. Tylko katalog i odpowiedzi dotyczące Twojego projektu.',
    successTitle: 'Zapytanie przyjęte',
    successBody: 'Nasz zespół sprzedaży wyśle pełny katalog produktowy i arkusz MOQ na adres {email} w ciągu jednego dnia roboczego.',
  },
}

/* ─────────────────────────── gallery page extras ─────────────────────────── */

export interface GalleryPageContent {
  kicker: string
  title: string
  sub: string
  note: string
}

export const galleryPage: Localized<GalleryPageContent> = {
  en: {
    kicker: 'Customized SUP Projects',
    title: 'Customized SUP Projects',
    sub: 'A look at how SUP products come to life — from client requirements to finished boards.',
    note: 'Want your project featured here? Start a conversation and let’s design it together.',
  },
  es: {
    kicker: 'Proyectos SUP personalizados',
    title: 'Proyectos SUP personalizados',
    sub: 'Una mirada a cómo los productos SUP cobran vida: de los requisitos del cliente a las tablas terminadas.',
    note: '¿Quieres que tu proyecto aparezca aquí? Inicia una conversación y diseñémoslo juntos.',
  },
  fr: {
    kicker: 'Projets SUP personnalisés',
    title: 'Projets SUP personnalisés',
    sub: 'Un aperçu de la façon dont les produits SUP prennent vie — des exigences des clients aux planches finies.',
    note: 'Vous souhaitez voir votre projet mis en avant ici ? Engagez la conversation et concevons-le ensemble.',
  },
  de: {
    kicker: 'Individuelle SUP-Projekte',
    title: 'Individuelle SUP-Projekte',
    sub: 'Ein Einblick, wie SUP-Produkte entstehen — von den Anforderungen der Kunden bis zu den fertigen Boards.',
    note: 'Möchten Sie Ihr Projekt hier vorgestellt sehen? Sprechen Sie uns an und wir gestalten es gemeinsam.',
  },
  it: {
    kicker: 'Progetti SUP personalizzati',
    title: 'Progetti SUP personalizzati',
    sub: "Uno sguardo a come prendono vita i prodotti SUP — dai requisiti dei clienti alle tavole finite.",
    note: 'Vuoi vedere il tuo progetto qui in evidenza? Avvia una conversazione e progettiamolo insieme.',
  },
  pt: {
    kicker: 'Projetos de SUP personalizados',
    title: 'Projetos de SUP personalizados',
    sub: 'Um olhar sobre como os produtos SUP ganham vida — dos requisitos dos clientes às pranchas concluídas.',
    note: 'Queres ver o teu projeto em destaque aqui? Inicia uma conversa e vamos desenhá-lo em conjunto.',
  },
  nl: {
    kicker: 'Aangepaste SUP-projecten',
    title: 'Aangepaste SUP-projecten',
    sub: 'Een blik op hoe SUP-producten tot leven komen — van de vereisten van de klant tot afgewerkte planken.',
    note: 'Wil je jouw project hier in de schijnwerpers? Start een gesprek en laten we het samen ontwerpen.',
  },
  sv: {
    kicker: 'Anpassade SUP-projekt',
    title: 'Anpassade SUP-projekt',
    sub: 'En inblick i hur SUP-produkter väcks till liv — från kundkrav till färdiga brädor.',
    note: 'Vill du att ditt projekt visas här? Inled ett samtal och låt oss designa det tillsammans.',
  },
  no: {
    kicker: 'Skreddersydde SUP-prosjekter',
    title: 'Skreddersydde SUP-prosjekter',
    sub: 'Et innblikk i hvordan SUP-produkter blir til — fra kundekrav til ferdige brett.',
    note: 'Vil du at prosjektet ditt skal vises her? Start en samtale, så designer vi det sammen.',
  },
  pl: {
    kicker: 'Projekty desek SUP na zamówienie',
    title: 'Projekty desek SUP na zamówienie',
    sub: 'Wgląd w to, jak powstają produkty SUP — od wymagań klienta po gotowe deski.',
    note: 'Chcesz, aby Twój projekt znalazł się tutaj? Porozmawiajmy i zaprojektujmy go razem.',
  },
}

/* ─────────────────────────── who-we-serve page extras ─────────────────────────── */

export interface ServePageContent {
  kicker: string
  title: string
  sub: string
}

export const servePage: Localized<ServePageContent> = {
  en: {
    kicker: 'Customer Needs',
    title: 'Custom SUP Solutions For Your Business',
    sub: 'Whether you need branded boards for your organization or customized SUP products for your business, we help turn requirements into finished products.',
  },
  es: {
    kicker: 'Necesidades del cliente',
    title: 'Soluciones SUP personalizadas para tu negocio',
    sub: 'Ya sea que necesites tablas con marca para tu organización o productos SUP personalizados para tu negocio, te ayudamos a convertir los requisitos en productos terminados.',
  },
  fr: {
    kicker: 'Pour qui nous travaillons',
    title: 'Personnalisées pour votre activité SUP',
    sub: 'Que vous ayez besoin de planches à votre marque pour votre organisation ou de produits SUP personnalisés pour votre entreprise, nous vous aidons à transformer vos exigences en produits finis.',
  },
  de: {
    kicker: 'Für wen wir arbeiten',
    title: 'SUP-Lösungen nach Maß für Ihr Unternehmen',
    sub: 'Ob Sie Boards unter eigener Marke für Ihre Organisation oder maßgeschneiderte SUP-Produkte für Ihr Unternehmen benötigen — wir helfen Ihnen, aus Ihren Anforderungen fertige Produkte zu machen.',
  },
  it: {
    kicker: 'Per chi lavoriamo',
    title: 'Soluzioni SUP su misura per la tua azienda',
    sub: 'Che tu abbia bisogno di tavole con il tuo marchio per la tua organizzazione o di prodotti SUP personalizzati per la tua azienda, ti aiutiamo a trasformare i requisiti in prodotti finiti.',
  },
  pt: {
    kicker: 'Para quem trabalhamos',
    title: 'Soluções de SUP à medida para a tua empresa',
    sub: 'Quer precises de pranchas com a tua marca para a tua organização ou de produtos de SUP personalizados para a tua empresa, ajudamos-te a transformar requisitos em produtos acabados.',
  },
  nl: {
    kicker: 'Voor wie we werken',
    title: 'SUP-oplossingen op maat voor jouw bedrijf',
    sub: 'Of je nu planken onder jouw merk nodig hebt voor je organisatie of gepersonaliseerde SUP-producten voor je bedrijf, wij helpen je om vereisten om te zetten in afgewerkte producten.',
  },
  sv: {
    kicker: 'För vem vi arbetar',
    title: 'Skräddarsydda SUP-lösningar för ditt företag',
    sub: 'Oavsett om du behöver varumärkta brädor för din organisation eller anpassade SUP-produkter för ditt företag, hjälper vi dig att förvandla krav till färdiga produkter.',
  },
  no: {
    kicker: 'Hvem vi jobber for',
    title: 'Skreddersydde SUP-løsninger for bedriften din',
    sub: 'Enten du trenger merkebrett for organisasjonen din eller skreddersydde SUP-produkter for virksomheten din, hjelper vi deg med å gjøre krav om til ferdige produkter.',
  },
  pl: {
    kicker: 'Dla kogo pracujemy',
    title: 'Rozwiązania SUP na zamówienie dla Twojej firmy',
    sub: 'Niezależnie od tego, czy potrzebujesz desek z własną marką dla swojej organizacji, czy indywidualnych produktów SUP dla swojej firmy, pomożemy zamienić wymagania w gotowe produkty.',
  },
}


/* ─────────────────────────── how-it-works page extras ─────────────────────────── */

export interface WorksPageContent {
  kicker: string
  title: string
  sub: string
  consultTitle: string
  consultBody: string
}

export const worksPage: Localized<WorksPageContent> = {
  en: {
    kicker: 'Development Process',
    title: 'From Specification to Finished Product',
    sub: 'Requirement intake, engineering review, sampling, production and export — every step inside our own plant.',
    consultTitle: 'Start With a Specification Review',
    consultBody: 'Send us your spec, reference board or drawings. We return a manufacturability assessment and a quotation — no obligation.',
  },
  es: {
    kicker: 'Proceso de desarrollo',
    title: 'De la especificación al producto terminado',
    sub: 'Recepción de requisitos, revisión de ingeniería, muestras, producción en serie y exportación — cada paso dentro de nuestra propia planta.',
    consultTitle: 'Empieza con una revisión de especificación',
    consultBody: 'Envíanos tu especificación, una tabla de referencia o planos. Te devolvemos una evaluación de fabricabilidad y un presupuesto, sin compromiso.',
  },
  fr: {
    kicker: 'Notre processus de développement',
    title: 'De la spécification au produit fini',
    sub: 'Collecte des exigences, revue d\'ingénierie, échantillonnage, production et export — chaque étape au sein de notre propre usine.',
    consultTitle: 'Commencez par une revue de spécification',
    consultBody: 'Envoyez-nous votre spécification, une planche de référence ou des plans. Nous vous retournons une évaluation de fabricabilité et un devis, sans engagement.',
  },
  de: {
    kicker: 'Unser Entwicklungsprozess',
    title: 'Von der Spezifikation zum fertigen Produkt',
    sub: 'Anforderungsaufnahme, technische Prüfung, Muster, Produktion und Export — jeder Schritt in unserem eigenen Werk.',
    consultTitle: 'Beginnen Sie mit einer Spezifikationsprüfung',
    consultBody: 'Senden Sie uns Ihre Spezifikation, ein Referenzboard oder Zeichnungen. Sie erhalten eine Machbarkeitsbewertung und ein Angebot zurück — ganz unverbindlich.',
  },
  it: {
    kicker: 'Il nostro processo di sviluppo',
    title: 'Dalla specifica al prodotto finito',
    sub: 'Raccolta dei requisiti, verifica tecnica, campioni, produzione ed export — ogni passaggio nel nostro stabilimento.',
    consultTitle: 'Inizia con una verifica della specifica',
    consultBody: 'Inviaci la tua specifica, una tavola di riferimento o dei disegni. Riceverai una valutazione di fattibilità e un preventivo — senza alcun impegno.',
  },
  pt: {
    kicker: 'O nosso processo de desenvolvimento',
    title: 'Da especificação ao produto acabado',
    sub: 'Recolha de requisitos, verificação técnica, amostras, produção e exportação — cada etapa na nossa própria fábrica.',
    consultTitle: 'Começa com uma verificação da especificação',
    consultBody: 'Envia-nos a tua especificação, uma prancha de referência ou desenhos. Recebes uma avaliação de viabilidade e um orçamento — sem qualquer compromisso.',
  },
  nl: {
    kicker: 'Ons ontwikkelingsproces',
    title: 'Van specificatie naar afgewerkt product',
    sub: 'Het verzamelen van vereisten, technische controle, monsters, productie en export — elke stap in onze eigen fabriek.',
    consultTitle: 'Start met een controle van de specificatie',
    consultBody: 'Stuur ons jouw specificatie, een referentieplank of tekeningen. Je ontvangt een haalbaarheidsbeoordeling en een offerte — geheel vrijblijvend.',
  },
  sv: {
    kicker: 'Utvecklingsprocess',
    title: 'Från specifikation till färdig produkt',
    sub: 'Kravinsamling, konstruktionsgranskning, provtagning, produktion och export — varje steg i vår egen anläggning.',
    consultTitle: 'Börja med en specifikationsgranskning',
    consultBody: 'Skicka din specifikation, referensbräda eller ritningar. Vi återkommer med en tillverkningsbarhetsbedömning och en offert — helt utan förpliktelser.',
  },
  no: {
    kicker: 'Utviklingsprosess',
    title: 'Fra spesifikasjon til ferdig produkt',
    sub: 'Innsamling av krav, konstruksjonsgjennomgang, prøvetaking, produksjon og eksport — hvert trinn i vår egen fabrikk.',
    consultTitle: 'Start med en spesifikasjonsgjennomgang',
    consultBody: 'Send oss spesifikasjonen din, et referansebrett eller tegninger. Vi returnerer en produksjonsvurdering og et tilbud — helt uten forpliktelser.',
  },
  pl: {
    kicker: 'Proces rozwoju produktu',
    title: 'Od specyfikacji do gotowego produktu',
    sub: 'Zbieranie wymagań, przegląd konstrukcji, próbki, produkcja i eksport — każdy etap odbywa się w naszej własnej fabryce.',
    consultTitle: 'Zacznij od przeglądu specyfikacji',
    consultBody: 'Wyślij nam specyfikację, wzorcową deskę lub rysunki techniczne. Otrzymasz ocenę możliwości produkcji oraz ofertę — bez żadnych zobowiązań.',
  },
}


/* ─────────────────────────── signature series (home) ─────────────────────────── */

export interface SeriesItem {
  title: string
  sku: string
  body: string
  image: string
  href: string
}

export interface SeriesContent {
  kicker: string
  title: string
  sub: string
  items: SeriesItem[]
}

export const series: Localized<SeriesContent> = {
  en: {
    kicker: 'Signature Series',
    title: 'Themed Edition Boards',
    sub: 'Ocean-inspired themed editions ready for your private label — drop-in designs with UV digital printing and mechanical embossing.',
    items: [
      {
        title: 'Leviathan Wake Series (The Whale Edition)',
        sku: 'SUP-LW11',
        body: 'A majestic blue whale totem with geometric and tribal patterns, paired with minimalist black-white swell lines. All-around 11 ft hull for lakes, rivers and coastal waters.',
        image: 'https://assets.isupfactory.com/site/products/2026/editions/leviathan-whale-edition.avif',
        href: '/products/sup-leviathan-wake',
      },
      {
        title: 'Medusa Glow Series (The Jellyfish Edition)',
        sku: 'SUP-MG11',
        body: 'Vibrant jellyfish, sea stars and coral reefs with zero-fade EVA block piecing in refreshing mint green. All-around 11 ft hull for tropical and coastal adventures.',
        image: 'https://assets.isupfactory.com/site/products/2026/editions/medusa-jellyfish-edition.avif',
        href: '/products/sup-medusa-glow',
      },
    ],
  },
  es: {
    kicker: 'Serie insignia',
    title: 'Tablas de ediciones temáticas',
    sub: 'Ediciones temáticas inspiradas en el océano listas para tu marca propia: diseños llave en mano con impresión digital UV y termograbado mecánico.',
    items: [
      {
        title: 'Serie Leviathan Wake (La Edición de la Ballena)',
        sku: 'SUP-LW11',
        body: 'Un majestuoso tótem de ballena azul con patrones geométricos y tribales, junto a líneas minimalistas de oleaje en blanco y negro. Casco polivalente de 11 ft para lagos, ríos y aguas costeras.',
        image: 'https://assets.isupfactory.com/site/products/2026/editions/leviathan-whale-edition.avif',
        href: '/products/sup-leviathan-wake',
      },
      {
        title: 'Serie Medusa Glow (La Edición de las Medusas)',
        sku: 'SUP-MG11',
        body: 'Medusas vibrantes, estrellas de mar y arrecifes de coral con bloques de EVA que no se decoloran, en un refrescante verde menta. Casco polivalente de 11 ft para aventuras tropicales y costeras.',
        image: 'https://assets.isupfactory.com/site/products/2026/editions/medusa-jellyfish-edition.avif',
        href: '/products/sup-medusa-glow',
      },
    ],
  },
  fr: {
    kicker: 'Série signature',
    title: 'Planches en éditions thématiques',
    sub: 'Des éditions thématiques inspirées de l\'océan, prêtes pour votre marque blanche — des designs clé en main avec impression numérique UV et gaufrage mécanique.',
    items: [
      {
        title: 'Série Leviathan Wake (L\'édition Baleine)',
        sku: 'SUP-LW11',
        body: 'Un majestueux totem de baleine bleue aux motifs géométriques et tribaux, associé à des lignes de houle minimalistes noir et blanc. Coque polyvalente de 11 ft pour les lacs, rivières et eaux côtières.',
        image: 'https://assets.isupfactory.com/site/products/2026/editions/leviathan-whale-edition.avif',
        href: '/products/sup-leviathan-wake',
      },
      {
        title: 'Série Medusa Glow (L\'édition Méduses)',
        sku: 'SUP-MG11',
        body: 'Des méduses éclatantes, étoiles de mer et récifs coralliens avec un assemblage de blocs EVA résistant à la décoloration, dans un vert menthe rafraîchissant. Coque polyvalente de 11 ft pour les aventures tropicales et côtières.',
        image: 'https://assets.isupfactory.com/site/products/2026/editions/medusa-jellyfish-edition.avif',
        href: '/products/sup-medusa-glow',
      },
    ],
  },
  de: {
    kicker: 'Signature-Serie',
    title: 'Themen-Editionen',
    sub: 'Vom Ozean inspirierte Themen-Editionen, bereit für Ihre Eigenmarke — einbaufertige Designs mit UV-Digitaldruck und mechanischer Prägung.',
    items: [
      {
        title: 'Leviathan-Wake-Serie (Die Wal-Edition)',
        sku: 'SUP-LW11',
        body: 'Ein majestätisches Blauwal-Totem mit geometrischen und tribalen Mustern, kombiniert mit minimalistischen schwarz-weißen Wellenlinien. Allround-Rumpf mit 11 ft für Seen, Flüsse und Küstengewässer.',
        image: 'https://assets.isupfactory.com/site/products/2026/editions/leviathan-whale-edition.avif',
        href: '/products/sup-leviathan-wake',
      },
      {
        title: 'Medusa-Glow-Serie (Die Quallen-Edition)',
        sku: 'SUP-MG11',
        body: 'Leuchtende Quallen, Seesterne und Korallenriffe mit farbechten EVA-Blockmotiven in erfrischendem Mintgrün. Allround-Rumpf mit 11 ft für tropische und Küstenabenteuer.',
        image: 'https://assets.isupfactory.com/site/products/2026/editions/medusa-jellyfish-edition.avif',
        href: '/products/sup-medusa-glow',
      },
    ],
  },
  it: {
    kicker: 'Serie signature',
    title: 'Edizioni a tema',
    sub: "Edizioni a tema ispirate all’oceano, pronte per il tuo private label — design plug-and-play con stampa digitale UV ed embossing meccanico.",
    items: [
      {
        title: 'Serie Leviathan Wake (L’edizione balena)',
        sku: 'SUP-LW11',
        body: 'Un maestoso totem di balenottera azzurra con motivi geometrici e tribali, abbinato a linee minimaliste di mareggiate in bianco e nero. Scafo all-round da 11 ft per laghi, fiumi e acque costiere.',
        image: 'https://assets.isupfactory.com/site/products/2026/editions/leviathan-whale-edition.avif',
        href: '/products/sup-leviathan-wake',
      },
      {
        title: 'Serie Medusa Glow (L’edizione meduse)',
        sku: 'SUP-MG11',
        body: 'Meduse luminose, stelle marine e barriere coralline con motivi EVA a blocchi a prova di scolorimento in un verde menta rinfrescante. Scafo all-round da 11 ft per avventure tropicali e costiere.',
        image: 'https://assets.isupfactory.com/site/products/2026/editions/medusa-jellyfish-edition.avif',
        href: '/products/sup-medusa-glow',
      },
    ],
  },
  pt: {
    kicker: 'Série signature',
    title: 'Edições temáticas',
    sub: 'Edições temáticas inspiradas no oceano, prontas para o teu private label — designs plug-and-play com impressão digital UV e gravação mecânica.',
    items: [
      {
        title: 'Série Leviathan Wake (A edição baleia)',
        sku: 'SUP-LW11',
        body: 'Um majestoso totem de baleia-azul com motivos geométricos e tribais, combinado com linhas minimalistas de ondulação em preto e branco. Casco all-round de 11 ft para lagos, rios e águas costeiras.',
        image: 'https://assets.isupfactory.com/site/products/2026/editions/leviathan-whale-edition.avif',
        href: '/products/sup-leviathan-wake',
      },
      {
        title: 'Série Medusa Glow (A edição medusas)',
        sku: 'SUP-MG11',
        body: 'Medusas luminosas, estrelas-do-mar e recifes de coral com motivos EVA em blocos à prova de desvanecimento num verde-menta refrescante. Casco all-round de 11 ft para aventuras tropicais e costeiras.',
        image: 'https://assets.isupfactory.com/site/products/2026/editions/medusa-jellyfish-edition.avif',
        href: '/products/sup-medusa-glow',
      },
    ],
  },
  nl: {
    kicker: 'Signature-serie',
    title: 'Thema-edities',
    sub: 'Op de oceaan geïnspireerde thema-edities, klaar voor jouw private label — plug-and-play designs met UV-digitaalprint en mechanische embossing.',
    items: [
      {
        title: 'Serie Leviathan Wake (De walvizeditie)',
        sku: 'SUP-LW11',
        body: 'Een majestueus totem van een blauwe vinvis met geometrische en tribale motieven, gecombineerd met minimalistische zwart-witte deininglijnen. All-round romp van 11 ft voor meren, rivieren en kustwateren.',
        image: 'https://assets.isupfactory.com/site/products/2026/editions/leviathan-whale-edition.avif',
        href: '/products/sup-leviathan-wake',
      },
      {
        title: 'Serie Medusa Glow (De kwalleneditie)',
        sku: 'SUP-MG11',
        body: 'Lichtgevende kwallen, zeesterren en koraalriffen met kleurvaste EVA-blokmotieven in een verfrissend mintgroen. All-round romp van 11 ft voor tropische en kustavonturen.',
        image: 'https://assets.isupfactory.com/site/products/2026/editions/medusa-jellyfish-edition.avif',
        href: '/products/sup-medusa-glow',
      },
    ],
  },
  sv: {
    kicker: 'Signaturserie',
    title: 'Tematiska editioner för SUP',
    sub: 'Havsinspirerade tematiska editioner redo för ditt private label — färdiga designer med UV-digitaltryck och mekanisk prägling.',
    items: [
      {
        title: 'Leviathan Wake-serien (Valaeditionen)',
        sku: 'SUP-LW11',
        body: 'En majestätisk blåvalstotem med geometriska och tribala mönster, kombinerad med minimalistiska svartvita dyninglinjer. Allroundskrov på 11 ft för sjöar, floder och kustvatten.',
        image: 'https://assets.isupfactory.com/site/products/2026/editions/leviathan-whale-edition.avif',
        href: '/products/sup-leviathan-wake',
      },
      {
        title: 'Medusa Glow-serien (Maneteditionen)',
        sku: 'SUP-MG11',
        body: 'Levande maneter, sjöstjärnor och korallrev med färgäkta EVA-blockmotiv i uppfriskande mintgrön. Allroundskrov på 11 ft för tropiska och kustnära äventyr.',
        image: 'https://assets.isupfactory.com/site/products/2026/editions/medusa-jellyfish-edition.avif',
        href: '/products/sup-medusa-glow',
      },
    ],
  },
  no: {
    kicker: 'Signaturserien',
    title: 'Tematiske SUP-edisjoner',
    sub: 'Havinspirerte tematiske edisjoner klare for ditt private label — ferdig designede løsninger med UV-digitaltrykk og mekanisk preging.',
    items: [
      {
        title: 'Leviathan Wake-serien (Hvalutgaven)',
        sku: 'SUP-LW11',
        body: 'Et majestetisk blåhval-totem med geometriske og tribale mønstre, kombinert med minimalistiske svarthvite bølgelinjer. Allround-skrov på 11 ft for innsjøer, elver og kystfarvann.',
        image: 'https://assets.isupfactory.com/site/products/2026/editions/leviathan-whale-edition.avif',
        href: '/products/sup-leviathan-wake',
      },
      {
        title: 'Medusa Glow-serien (Manetutgaven)',
        sku: 'SUP-MG11',
        body: 'Levende maneter, sjøstjerner og korallrev med fargeklarte EVA-blokkmotiv i forfriskende mintgrønn. Allround-skrov på 11 ft for tropiske og kystnære eventyr.',
        image: 'https://assets.isupfactory.com/site/products/2026/editions/medusa-jellyfish-edition.avif',
        href: '/products/sup-medusa-glow',
      },
    ],
  },
  pl: {
    kicker: 'Seria autorska',
    title: 'Tematyczne edycje desek SUP',
    sub: 'Morskie, tematyczne edycje gotowe do oznaczenia własną marką — gotowe wzory z cyfrowym drukiem UV i tłoczeniem mechanicznym.',
    items: [
      {
        title: 'Seria Leviathan Wake (edycja Wieloryb)',
        sku: 'SUP-LW11',
        body: 'Majestatyczny totem błękitnego wieloryba z geometrycznymi i plemiennymi wzorami, połączony z minimalistycznymi czarno-białymi liniami fal. Wszystroundowa deska 11 ft do jezior, rzek i wód przybrzeżnych.',
        image: 'https://assets.isupfactory.com/site/products/2026/editions/leviathan-whale-edition.avif',
        href: '/products/sup-leviathan-wake',
      },
      {
        title: 'Seria Medusa Glow (edycja Meduza)',
        sku: 'SUP-MG11',
        body: 'Żywe meduzy, rozgwiazdy i rafy koralowe z realistycznymi motywami blokowymi EVA w odświeżającym kolorze mięty. Wszystroundowa deska 11 ft do tropikalnych i nadmorskich przygód.',
        image: 'https://assets.isupfactory.com/site/products/2026/editions/medusa-jellyfish-edition.avif',
        href: '/products/sup-medusa-glow',
      },
    ],
  },
}
