import { BRAND_SOCIAL, BRAND_CONTACT, BRAND_BOILERPLATE, BRAND_BUILD_LINE, BRAND_NOT_ROB } from '@/config/branding'

export const FACTS_VERIFIED = 'September 2026' as const

export type VerifiedSource = 'factory-record' | 'qc-procedure' | 'certificate' | 'project-record' | 'audit-report'

export const FACTS = {
  warehouseM2: '12,500 m²',
  workers: '350+',
  annualCapacity: '120,000+ units',
  moq: {
    existingPlatform: '5–10 pcs (logo-only on existing shape, same material roll)',
    pilotBatch: '20–50 pcs (custom graphics or minor spec change, same material roll)',
    standardRun: '90–100+ pcs per approved configuration, subject to material-roll and packaging requirements',
    customMould: '90–100+ pcs (new shape requires dedicated mould; tooling adds 15–20 days)',
    multiSku: 'Each SKU (size/color combo) on a separate material roll has its own MOQ',
  },
  moqNote: 'MOQ is confirmed after specification review, because construction, board size, PVC structure, artwork, packaging and accessories affect material usage.',
  moqNoteEs: 'El MOQ se confirma tras la revisión de especificaciones, ya que la construcción, tamaño de tabla, estructura de PVC, arte, embalaje y accesorios afectan el uso de material.',
  moqExplanation: {
    sample: '1–2 units for approval',
    coBrand: 'from 5–10 units on selected existing platforms',
    pilot: '20–50 units on existing platforms',
    standard: '90–100+ units per approved configuration, subject to material-roll and packaging requirements',
    customMould: '90–100+ units; new shape requires dedicated mould (+15–20 days tooling)',
  },
  moqExplanationEs: {
    sample: '1–2 unidades para aprobación',
    coBrand: 'desde 5–10 unidades en determinadas plataformas existentes',
    pilot: '20–50 unidades en plataformas existentes',
    standard: '90–100+ unidades por configuración aprobada, según los requisitos de material y embalaje',
    customMould: '90–100+ unidades; las formas nuevas requieren molde dedicado (+15–20 días de utillaje)',
  },
  moqExplanationFr: {
    sample: '1–2 unités pour approbation',
    coBrand: 'à partir de 5–10 unités sur certaines plateformes existantes',
    pilot: '20–50 unités sur plateformes existantes',
    standard: '90–100+ unités par configuration approuvée, selon les exigences d’emballage et de rouleau de matériau',
    customMould: '90–100+ unités ; une nouvelle forme nécessite un moule dédié (+15–20 jours d’outillage)',
  },
  materialRollNote: 'A 150 m drop-stitch material roll yields different board counts depending on board size, construction and nesting layout. The 90–100+ MOQ represents the minimum batch per configuration, not a fixed per-roll count.',
  moqDecisionTree: [
    { scenario: 'Existing platform, logo overlay only', min: '5–10 pcs', unit: 'per design', condition: 'Same shape, same material roll, same colorway' },
    { scenario: 'Custom graphics / EVA / packaging on existing platform', min: '20–50 pcs', unit: 'pilot batch', condition: 'Same shape; new artwork requires visual proof approval' },
    { scenario: 'Standard volume production (any platform)', min: '90–100+ pcs', unit: 'per approved configuration', condition: 'Per material roll; multiple SKUs = separate rolls' },
    { scenario: 'New shape / custom mould', min: '90–100+ pcs', unit: 'production run', condition: 'Mould tooling 15–20 extra days; one-time mould fee applies' },
  ] as const,
  leadTime: '25–35 days',
  leadTimeDetail: '25–35 days from confirmed PO and deposit; custom mould development adds 15–20 days for tooling.',
  sampleTime: '7–12 days',
  cncAccuracy: '0.1 mm',
  rfPower: '15 kW',
  dropStitchPsi: '12–15 PSI',
  evaHardness: '45–55 Shore C',
  assemblyChecklist: '100-point',
  pressureTest: '18.0 PSI · 24h hold',
  pressureReject: '>0.50 PSI/24h pressure drop (auto-reject)',
  traceabilityRet: '10 years',
  certifications: [
    { name: 'BSCI', scope: 'Social responsibility audit', authority: 'amfori BSCI', appliesTo: 'Manufacturing facility', verifiedSource: 'audit-report' as VerifiedSource },
    { name: 'ISO 9001', scope: 'Quality management system', authority: 'Certifying body (available on request)', appliesTo: 'Manufacturing facility', verifiedSource: 'certificate' as VerifiedSource },
    { name: 'ISO 25649', scope: 'Inflatable water craft safety', authority: 'ISO', appliesTo: 'Applicable SUP models per market', verifiedSource: 'certificate' as VerifiedSource },
    { name: 'CE', scope: 'EU market conformity (EN ISO 6185 / EN ISO 10087 / EN ISO 10240)', authority: 'EU notified body', appliesTo: 'Models destined for EU market', verifiedSource: 'certificate' as VerifiedSource },
    { name: 'REACH', scope: 'EU chemical safety', authority: 'ECHA', appliesTo: 'Materials used in production', verifiedSource: 'certificate' as VerifiedSource },
    { name: 'RoHS', scope: 'Restriction of hazardous substances', authority: 'EU directive', appliesTo: 'Electronic accessories (pumps)', verifiedSource: 'certificate' as VerifiedSource },
  ] as const,
  certificationNote: 'Certificate numbers, validity periods and issuing authorities are available per project on request. CE certification applies to models destined for EU markets; scope varies by target market and product configuration. Not all products carry CE marking universally — scope is confirmed per project.',
  exportCountries: '50+',
  workshops: '4 specialized workshops',
  productionLines: '4 automated lines',
  monthlyCapacity: '10,000 boards/month',
  ndaWindow: '4 business hours',
  qualityGates: '7-stage (Node 01–07)',
  thirdPartyInspectors: ['SGS', 'TÜV', 'BV', 'Intertek'],
  samplingStandard: 'ISO 2859-1 Level II',
  peakSeason: 'October–April',
  social: BRAND_SOCIAL,
  contact: BRAND_CONTACT,
  boilerplate: BRAND_BOILERPLATE,
  buildLine: BRAND_BUILD_LINE,
  notRob: BRAND_NOT_ROB,
  tagline:
    'Engineering, tooling, sampling and production for SUP brands, distributors and sourcing teams. You bring the brand — we build the boards.',
  taglineEs:
    'Ingeniería, utillaje, muestras y producción para marcas de SUP, distribuidores y equipos de compra. Tú traes la marca — nosotros fabricamos las tablas.',
} as const

export type FactLiteral = (typeof FACTS)[keyof typeof FACTS]

export const CERTIFICATION_NAMES = FACTS.certifications.map((c) => c.name) as readonly string[]

export const MOQ_SHORT = {
  trialStandard: FACTS.moq.pilotBatch,
  standardRun: FACTS.moq.standardRun,
  customMould: FACTS.moq.customMould,
  existingPlatform: FACTS.moq.existingPlatform,
} as const

/** Rendering shorthands for facts interpolated into localized UI strings. */
export interface FactShorthands {
  moq: {
    existingPlatform: string
    trialStandard: string
    standardRun: string
    customMould: string
  }
  leadTime: string
  leadTimeDetail: string
  sampleTime: string
  assemblyChecklist: string
  pressureTest: string
  pressureReject: string
}

export const FACTS_LOCALE: Record<'en' | 'es' | 'fr' | 'de' | 'it' | 'pt' | 'nl' | 'sv' | 'no' | 'pl' | 'da' | 'fi' | 'ru' | 'cs' | 'ar' | 'tr' | 'ro' | 'hu', FactShorthands> = {
  en: {
    moq: {
      existingPlatform: FACTS.moq.existingPlatform,
      trialStandard: FACTS.moq.pilotBatch,
      standardRun: FACTS.moq.standardRun,
      customMould: FACTS.moq.customMould,
    },
    leadTime: FACTS.leadTime,
    leadTimeDetail: FACTS.leadTimeDetail,
    sampleTime: FACTS.sampleTime,
    assemblyChecklist: FACTS.assemblyChecklist,
    pressureTest: FACTS.pressureTest,
    pressureReject: FACTS.pressureReject,
  },
  es: {
    moq: {
      existingPlatform: '5–10 uds. (solo logotipo en forma existente, mismo rollo de material)',
      trialStandard: '20–50 uds. (gráficos personalizados o cambio menor de especificación, mismo rollo de material)',
      standardRun: '90–100+ uds. por configuración aprobada, según los requisitos de material y embalaje',
      customMould: '90–100+ uds. (las formas nuevas requieren molde dedicado; el utillaje añade 15–20 días)',
    },
    leadTime: '25–35 días',
    leadTimeDetail: '25–35 días desde el PO y el depósito confirmados; el desarrollo de un molde a medida añade 15–20 días de utillaje.',
    sampleTime: '7–12 días',
    assemblyChecklist: '100 puntos',
    pressureTest: '18.0 PSI · 24 h de mantenimiento',
    pressureReject: 'caída de presión >0,50 PSI/24 h (rechazo automático)',
  },
  fr: {
    moq: {
      existingPlatform: '5–10 unités (logo seul sur forme existante, même rouleau de matériau)',
      trialStandard: '20–50 unités (visuels personnalisés ou légère modification de spécification, même rouleau de matériau)',
      standardRun: '90–100+ unités par configuration approuvée, selon les exigences d’emballage et de rouleau de matériau',
      customMould: '90–100+ unités (une nouvelle forme nécessite un moule dédié ; l’outillage ajoute 15–20 jours)',
    },
    leadTime: '25–35 jours',
    leadTimeDetail: '25–35 jours à compter de la confirmation du bon de commande et de l’acompte ; le développement d’un moule sur mesure ajoute 15–20 jours d’outillage.',
    sampleTime: '7–12 jours',
    assemblyChecklist: '100 points',
    pressureTest: '18,0 PSI · maintien 24 h',
    pressureReject: 'chute de pression >0,50 PSI/24 h (rejet automatique)',
  },
  de: {
    moq: {
      existingPlatform: '5–10 Stück (nur Logo auf bestehender Form, gleiche Materialrolle)',
      trialStandard: '20–50 Stück (individuelle Grafik oder geringe Spezifikationsänderung, gleiche Materialrolle)',
      standardRun: '90–100+ Stück pro freigegebener Konfiguration, abhängig von Materialrolle und Verpackungsanforderungen',
      customMould: '90–100+ Stück (neue Form erfordert Maßform; Werkzeugbau zusätzlich 15–20 Tage)',
    },
    leadTime: '25–35 Tage',
    leadTimeDetail: '25–35 Tage nach bestätigter Bestellung und Anzahlung; die Entwicklung einer Maßform dauert 15–20 Tage zusätzlich für den Werkzeugbau.',
    sampleTime: '7–12 Tage',
    assemblyChecklist: '100',
    pressureTest: '18,0 PSI über 24 h',
    pressureReject: 'Druckabfall >0,50 PSI/24 h (automatische Aussortierung)',
  },
  it: {
    moq: {
      existingPlatform: '5–10 pezzi (solo logo su forma esistente, stesso rotolo di materiale)',
      trialStandard: '20–50 pezzi (grafiche personalizzate o modifica minore di specifica, stesso rotolo di materiale)',
      standardRun: '90–100+ pezzi per configurazione approvata, soggetto ai requisiti di rotolo di materiale e imballaggio',
      customMould: '90–100+ pezzi (una nuova forma richiede stampo dedicato; l’utillaggio aggiunge 15–20 giorni)',
    },
    leadTime: '25–35 giorni',
    leadTimeDetail: '25–35 giorni da PO e acconto confermati; lo sviluppo di uno stampo su misura aggiunge 15–20 giorni di utillaggio.',
    sampleTime: '7–12 giorni',
    assemblyChecklist: '100',
    pressureTest: '18.0 PSI · 24 ore di tenuta',
    pressureReject: 'calo di pressione >0,50 PSI/24 h (scarto automatico)',
  },
  pt: {
    moq: {
      existingPlatform: '5–10 unidades (apenas logótipo em plataforma existente, mesmo rolo de material)',
      trialStandard: '20–50 unidades (gráficos personalizados ou alteração menor de especificação, mesmo rolo de material)',
      standardRun: '90–100+ unidades por configuração aprovada, sujeito aos requisitos de rolo de material e embalagem',
      customMould: '90–100+ unidades (uma nova forma exige molde dedicado; o ferramental acrescenta 15–20 dias)',
    },
    leadTime: '25–35 dias',
    leadTimeDetail: '25–35 dias a partir do PO e do depósito confirmados; o desenvolvimento de um molde à medida acrescenta 15–20 dias de ferramental.',
    sampleTime: '7–12 dias',
    assemblyChecklist: '100',
    pressureTest: '18.0 PSI · retenção de 24 h',
    pressureReject: 'queda de pressão >0,50 PSI/24 h (rejeição automática)',
  },
  nl: {
    moq: {
      existingPlatform: '5–10 stuks (alleen logo op bestaand platform, zelfde materiaalrol)',
      trialStandard: '20–50 stuks (eigen opdruk of kleine specificatiewijziging, zelfde materiaalrol)',
      standardRun: '90–100+ stuks per goedgekeurde configuratie, onder voorbehoud van materiaalrol- en verpakkingsvereisten',
      customMould: '90–100+ stuks (een nieuwe vorm vereist een aparte matrijs; tooling voegt 15–20 dagen toe)',
    },
    leadTime: '25–35 dagen',
    leadTimeDetail: '25–35 dagen vanaf bevestigde PO en aanbetaling; de ontwikkeling van een matrijs op maat voegt 15–20 dagen tooling toe.',
    sampleTime: '7–12 dagen',
    assemblyChecklist: '100',
    pressureTest: '18.0 PSI · 24 uur vasthouden',
    pressureReject: 'drukval >0,50 PSI/24 uur (automatische afkeur)',
  },
  sv: {
    moq: {
      existingPlatform: '5–10 st (endast logotyp på befintlig form, samma materialrulle)',
      trialStandard: '20–50 st (anpassad grafik eller mindre spec-ändring, samma materialrulle)',
      standardRun: '90–100+ st per godkänd konfiguration, med förbehåll för krav på materialrulle och förpackning',
      customMould: '90–100+ st (ny form kräver specialform; verktygstillverkning tillkommer med 15–20 dagar)',
    },
    leadTime: '25–35 dagar',
    leadTimeDetail: '25–35 dagar från bekräftad PO och handpenning; utveckling av specialform tillkommer med 15–20 dagars verktygstid.',
    sampleTime: '7–12 dagar',
    assemblyChecklist: '100',
    pressureTest: '18.0 PSI · 24 timmars tryckhållning',
    pressureReject: 'tryckfall >0,50 PSI/24 h (automatisk avvisning)',
  },
  no: {
    moq: {
      existingPlatform: '5–10 stk (kun logo på eksisterende form, samme materialrull)',
      trialStandard: '20–50 stk (tilpasset grafikk eller mindre endring i spesifikasjon, samme materialrull)',
      standardRun: '90–100+ stk per godkjent konfigurasjon, med forbehold om krav til materialrull og emballasje',
      customMould: '90–100+ stk (ny form krever egen form; verktøyfabrikkering gir 15–20 dager ekstra)',
    },
    leadTime: '25–35 dager',
    leadTimeDetail: '25–35 dager fra bekreftet PO og depositum; utvikling av egen form gir 15–20 dager ekstra til verktøyfabrikkering.',
    sampleTime: '7–12 dager',
    assemblyChecklist: '100',
    pressureTest: '18.0 PSI · 24 timers trykkholder',
    pressureReject: 'trykkfall >0.50 PSI/24 t (automatisk avvisning)',
  },
  pl: {
    moq: {
      existingPlatform: '5–10 szt (tylko logo na istniejącym kształcie, ta sama rolka materiałowa)',
      trialStandard: '20–50 szt (dedykowana grafika lub niewielka zmiana specyfikacji, ta sama rolka materiałowa)',
      standardRun: '90–100+ szt na zatwierdzoną konfigurację, z zastrzeżeniem wymogów dotyczących rolki materiałowej i opakowania',
      customMould: '90–100+ szt (nowy kształt wymaga własnej formy; wykonanie narzędzi dodaje 15–20 dni)',
    },
    leadTime: '25–35 dni',
    leadTimeDetail: '25–35 dni od potwierdzonego zamówienia (PO) i wpłaty zaliczki; opracowanie własnej formy wymaga dodatkowo 15–20 dni na narzędzia.',
    sampleTime: '7–12 dni',
    assemblyChecklist: '100',
    pressureTest: '18.0 PSI · 24 godziny utrzymania ciśnienia',
    pressureReject: 'spadek ciśnienia >0.50 PSI/24 godz. (automatyczne odrzucenie)',
  },
  da: {
    moq: {
      existingPlatform: '5–10 stk (kun logo på eksisterende form, samme materialerulle)',
      trialStandard: '20–50 stk (tilpasset grafik eller mindre ændring af specifikation, samme materialerulle)',
      standardRun: '90–100+ stk pr. godkendt konfiguration, med forbehold for krav til materialerulle og emballage',
      customMould: '90–100+ stk (ny form kræver egen form; værktøjsfremstilling tager yderligere 15–20 dage)',
    },
    leadTime: '25–35 dage',
    leadTimeDetail: '25–35 dage fra bekræftet PO og depositum; udvikling af egen form kræver yderligere 15–20 dage til værktøjsfremstilling.',
    sampleTime: '7–12 dage',
    assemblyChecklist: '100',
    pressureTest: '18.0 PSI · 24 timers trykholdning',
    pressureReject: 'trykfald >0.50 PSI/24 t (automatisk kassering)',
  },
  fi: {
    moq: {
      existingPlatform: '5–10 kpl (vain logo olemassa olevaan muotoon, sama materiaalirulla)',
      trialStandard: '20–50 kpl (räätälöity grafiikka tai pieni spesifikaatiomuutos, sama materiaalirulla)',
      standardRun: '90–100+ kpl hyväksytyn konfiguraation mukaan, materiaalirullaa ja pakkausvaatimuksia koskevin ehdoin',
      customMould: '90–100+ kpl (uusi muoto vaatii oman muotin; muotin valmistus lisää 15–20 päivää)',
    },
    leadTime: '25–35 päivää',
    leadTimeDetail: '25–35 päivää vahvistetusta tilauksesta (PO) ja käsirahas; oman muotin kehittäminen lisää 15–20 päivää muotin valmistukseen.',
    sampleTime: '7–12 päivää',
    assemblyChecklist: '100',
    pressureTest: '18.0 PSI · 24 tunnin paineenpito',
    pressureReject: 'paineen alenema >0.50 PSI/24 t (automaattinen hylkäys)',
  },
  ru: {
    moq: {
      existingPlatform: '5–10 шт (только логотип на существующей форме, тот же рулон материала)',
      trialStandard: '20–50 шт (индивидуальная графика или небольшое изменение спецификации, тот же рулон материала)',
      standardRun: '90–100+ шт на каждую согласованную конфигурацию, с учётом требований к рулону материала и упаковке',
      customMould: '90–100+ шт (новая форма требует отдельной пресс-формы; изготовление оснастки добавляет 15–20 дн)',
    },
    leadTime: '25–35 дн',
    leadTimeDetail: '25–35 дн с момента подтверждения заказа (PO) и предоплаты; разработка собственной пресс-формы добавляет 15–20 дн на изготовление оснастки.',
    sampleTime: '7–12 дн',
    assemblyChecklist: '100',
    pressureTest: '18.0 PSI · 24 ч выдержки давления',
    pressureReject: 'падение давления >0.50 PSI/24 ч (автоматический брак)',
  },
  cs: {
    moq: {
      existingPlatform: '5–10 ks (pouze logo na existujícím tvaru, stejná role materiálu)',
      trialStandard: '20–50 ks (vlastní grafika nebo drobná změna specifikace, stejná role materiálu)',
      standardRun: '90–100+ ks na každou schválenou konfiguraci, s ohledem na požadavky na roli materiálu a obal',
      customMould: '90–100+ ks (nový tvar vyžaduje vlastní formu; výroba nástrojů přidává 15–20 dní)',
    },
    leadTime: '25–35 dní',
    leadTimeDetail: '25–35 dní od potvrzení objednávky (PO) a zálohy; vývoj vlastní formy přidává 15–20 dní na výrobu nástrojů.',
    sampleTime: '7–12 dní',
    assemblyChecklist: '100',
    pressureTest: '18.0 PSI · 24 h udržení tlaku',
    pressureReject: 'pokles tlaku >0,50 PSI/24 h (automatická reklamace)',
  },
  ar: {
    moq: {
      existingPlatform: '5–10 قطع (شعار فقط على التصميم القائم، ولفة المواد نفسها)',
      trialStandard: '20–50 قطعة (رسومات مخصصة أو تعديل طفيف في المواصفة، ولفة المواد نفسها)',
      standardRun: '90–100+ قطعة لكل تكوين معتمد، مع مراعاة متطلبات لفة المواد والتغليف',
      customMould: '90–100+ قطعة (الشكل الجديد يتطلب قالبًا مخصصًا؛ وتصنيع القالب يضيف 15–20 يومًا)',
    },
    leadTime: '25–35 يومًا',
    leadTimeDetail: '25–35 يومًا من تأكيد أمر الشراء (PO) والعربون؛ وتطوير القالب المخصص يضيف 15–20 يومًا لتصنيع القوالب.',
    sampleTime: '7–12 يومًا',
    assemblyChecklist: '100',
    pressureTest: '18.0 PSI · ضغط مُحافظ عليه 24 ساعة',
    pressureReject: 'انخفاض الضغط >0.50 PSI/24 ساعة (رفض تلقائي)',
  },
  tr: {
    moq: {
      existingPlatform: '5–10 adet (yalnızca mevcut şekle logo, aynı malzeme rulosu)',
      trialStandard: '20–50 adet (özel grafik veya küçük özellik değişikliği, aynı malzeme rulosu)',
      standardRun: 'onaylı yapılandırma başına 90–100+ adet; malzeme rulosu ve paketleme gereksinimlerine tabidir',
      customMould: '90–100+ adet (yeni şekil özel kalıp gerektirir; kalıp üretimi 15–20 gün ekler)',
    },
    leadTime: '25–35 gün',
    leadTimeDetail: 'Onaylı PO ve depozitodan itibaren 25–35 gün; özel kalıp geliştirme, kalıp üretimine 15–20 gün ekler.',
    sampleTime: '7–12 gün',
    assemblyChecklist: '100',
    pressureTest: '18.0 PSI · 24 saat basınç tutma',
    pressureReject: '>0,50 PSI/24 sa basınç düşüşü (otomatik ret)',
  },
  ro: {
    moq: {
      existingPlatform: '5–10 buc. (doar logo pe forma existentă, aceeași rolă de material)',
      trialStandard: '20–50 buc. (grafică personalizată sau modificare minoră a specificațiilor, aceeași rolă de material)',
      standardRun: '90–100+ buc. pe configurația aprobată, sub rezerva cerințelor privind rola de material și ambalajul',
      customMould: '90–100+ buc. (forma nouă necesită o matriță dedicată; execuția uneltelor adaugă 15–20 de zile)',
    },
    leadTime: '25–35 zile',
    leadTimeDetail: '25–35 de zile de la confirmarea comenzii (PO) și a avansului; dezvoltarea unei matrițe dedicate adaugă încă 15–20 de zile pentru unelte.',
    sampleTime: '7–12 zile',
    assemblyChecklist: '100',
    pressureTest: '18.0 PSI · menținerea presiunii 24 de ore',
    pressureReject: 'cădere de presiune >0,50 PSI/24 h (respins automat)',
  },
  hu: {
    moq: {
      existingPlatform: '5–10 db. (csak logó a meglévő formára, ugyanaz az anyaghenger)',
      trialStandard: '20–50 db. (egyéni grafika vagy kisebb specifikációs módosítás, ugyanaz az anyaghenger)',
      standardRun: '90–100+ db. jóváhagyott konfigurációnként, az anyaghengerre és a csomagolásra vonatkozó követelmények függvényében',
      customMould: '90–100+ db. (az új forma saját gyártószerszámot igényel; a szerszám elkészítése további 15–20 napot ad hozzá)',
    },
    leadTime: '25–35 nap',
    leadTimeDetail: '25–35 nap a megrendelés (PO) és az előleg megerősítésétől; a saját gyártószerszám fejlesztése és kivitelezése további 15–20 napot ad hozzá.',
    sampleTime: '7–12 nap',
    assemblyChecklist: '100',
    pressureTest: '18.0 PSI · 24 órás nyomásfenntartás',
    pressureReject: '>0,50 PSI/24 h nyomáscsökkenés (automatikus elutasítás)',
  },
}

export function getFacts(locale: string): FactShorthands {
  return FACTS_LOCALE[locale as keyof typeof FACTS_LOCALE] ?? FACTS_LOCALE.en
}

export const COLLABORATION_MODES = {
  oem: {
    short: 'Manufacture to your approved specification',
    full: 'OEM (Original Equipment Manufacturing): We manufacture to your approved specification — your drawings, dimensions, materials, construction and packaging. You own the design, moulds and intellectual property.',
    bestFor: 'Buyers with existing designs, reference boards or detailed specifications',
  },
  odm: {
    short: 'Develop the board with our engineering team',
    full: 'ODM (Original Design Manufacturing): Our engineering team develops the board structure, construction, graphics and packaging from your brief — whether that is a market concept, performance target or adaptation of a proven platform. Factory proposes the design; buyer approves before production.',
    bestFor: 'Buyers with product ideas, market requirements or performance targets but no detailed specification',
  },
  privateLabel: {
    short: 'Brand a proven SUP platform with your graphics',
    full: 'Private Label: Your brand, graphics and packaging on an existing validated platform — no mould development, no structural changes. Fastest route from concept to delivery.',
    bestFor: 'Buyers who need branded boards quickly without product development',
  },
  commercial: {
    short: 'Configure durable fleet packages',
    full: 'Commercial Fleet Program: High-frequency-use SUP packages for rental operators, resorts, clubs and schools — with durability specs, spare parts, color management and batch consistency.',
    bestFor: 'Resort, rental, club and school operators',
  },
} as const

// Arabic counterpart of COLLABORATION_MODES.
//
// Kept as a separate additive export rather than a locale-keyed rewrite so
// COLLABORATION_MODES keeps its `as const` shape and its existing consumers
// (site-config.ts, llm.ts) are untouched. Without this, content blocks that
// reference COLLABORATION_MODES.*.full would render English paragraphs inside
// an Arabic page.
export const COLLABORATION_MODES_AR = {
  oem: {
    short: 'التصنيع وفق مواصفتك المعتمدة',
    full: 'OEM (تصنيع المعدات الأصلية): نُصنّع وفق المواصفة التي اعتمدتها — رسوماتك وأبعادك وخاماتك وبنية لوحك وتغليفه. أنت تملك التصميم والقوالب والملكية الفكرية.',
    bestFor: 'المشترون الذين لديهم تصاميم أو ألواح مرجعية أو مواصفات تفصيلية',
  },
  odm: {
    short: 'تطوير اللوح مع فريقنا الهندسي',
    full: 'ODM (التصميم والتصنيع الأصلي): يطوير فريقنا الهندسي بنية اللوح والبناء والرسومات والتغليف انطلاقًا من موجزك — سواء كانت فكرة سوقية أو هدف أداء أو تطويرًا لمنصة مثبتة. يقترح المصنع التصميم ويعتمده المشتري قبل بدء الإنتاج.',
    bestFor: 'المشترون لديهم أفكار منتجات أو متطلبات سوقية أو أهداف أداء لكن دون مواصفات تفصيلية',
  },
  privateLabel: {
    short: 'ضع علامتك التجارية على منصة SUP مثبتة',
    full: 'علامة تجارية خاصة: علامتك التجارية ورسوماتك وتغليفك على منصة قائمة مُتحقَّق منها — دون تطوير قوالب ودون تغييرات بنيوية. أسرع طريق من الفكرة إلى التسليم.',
    bestFor: 'المشترون الذين يحتاجون ألواحًا بعلامتهم التجارية بسرعة دون تطوير منتج',
  },
  commercial: {
    short: 'تكوين باقات أساطيل متينة',
    full: 'برنامج الأساطيل التجارية: حزم SUP مخصّصة للاستخدام المكثف لدى شركات التأجير والمنتجعات والأندية والمدارس — مع مواصفات متانة وقطع غيار وإدارة ألوان واتساق بين الدفعات.',
    bestFor: 'مشغّلو المنتجعات والتأجير والأندية والمدارس',
  },
} as const