import { BRAND_COMPANY_NAME, BRAND_PARENT_BRAND } from '@/config/branding'

export const LLM_SITE_DESCRIPTION =
  `{SITE} is the SUP product development and manufacturing division of ${BRAND_COMPANY_NAME}, a 12,500 m² inflatable manufacturing plant in Qingdao, China. We build SUP boards to your specification — engineering, tooling, sampling, production and export. You own the brand, the market and the customer; we own the manufacturing. We do not sell to end consumers and we do not compete with our clients in any market. MOQ is confirmed after specification review: 5–10 units for co-branding/logo overlay on existing platforms, 20–50 units for pilot batches with custom graphics, and 90–100+ units per approved configuration for standard volume production (subject to material-roll and packaging requirements); custom-mould shapes run at the volume tier. A 150 m drop-stitch material roll yields different board counts depending on board size, construction and nesting layout. Samples are ready in 7–12 days; bulk production 25–35 days after confirmed PO and deposit (custom mould tooling adds 15–20 days). All pricing, certification scope and lead times are project-confirmed — request a quote for your specific requirements.`


/**
 * Locale-aware organization description for the JSON-LD `Organization` node.
 * `en` is the canonical source (`LLM_SITE_DESCRIPTION`); the rest mirror it
 * so the structured-data description matches the page language. The
 * `llms-full.txt` header keeps using the English constant — that document is
 * English-only.
 */
export const LLM_SITE_DESCRIPTION_BY_LOCALE: Record<string, string> = {
  en: LLM_SITE_DESCRIPTION,
  es: `{SITE} es la división de desarrollo de producto y fabricación de SUP de ${BRAND_COMPANY_NAME}, una planta de fabricación de productos hinchables de 12.500 m² en Qingdao, China. Construimos tablas de SUP según tu especificación: ingeniería, utillaje, muestras, producción y exportación. La marca, el mercado y el cliente son tuyos; la fabricación es nuestra. No vendemos a consumidores finales ni competimos con nuestros clientes en ningún mercado. El MOQ se confirma tras la revisión de especificaciones: 5–10 unidades para co-branding o solo logotipo sobre plataformas existentes, 20–50 unidades para lotes piloto con gráficos personalizados y 90–100+ unidades por configuración aprobada para producción de volumen estándar (según los requisitos de material y embalaje); las formas de molde a medida se fabrican en el tramo de volumen. Un rollo de material drop-stitch de 150 m rinde un número distinto de tablas según el tamaño de la tabla, la construcción y la disposición de corte. Las muestras están listas en 7–12 días; la producción en serie tarda 25–35 días tras la confirmación del PO y el depósito (el utillaje de molde a medida añade 15–20 días). Todos los precios, el alcance de la certificación y los plazos se confirman por proyecto: solicita un presupuesto para tus requisitos concretos.`,
  fr: `{SITE} est la division du développement de produits et de la fabrication de SUP de ${BRAND_COMPANY_NAME}, une usine de produits gonflables de 12 500 m² à Qingdao, en Chine. Nous construisons des planches SUP selon votre spécification : ingénierie, outillage, échantillons, production et export. La marque, le marché et le client sont les vôtres ; la fabrication est la nôtre. Nous ne vendons pas au grand public et ne concurrençons pas nos clients sur aucun marché. Le MOQ est confirmé après revue de spécification : 5–10 unités pour le co-branding ou le simple logo sur plateformes existantes, 20–50 unités pour les lots pilotes avec visuels personnalisés, et 90–100+ unités par configuration approuvée pour la production en volume standard (selon les exigences de matière et d'emballage) ; les formes sur moule dédié sont produites au palier volume. Un rouleau de matière drop-stitch de 150 m rend un nombre de planches variable selon la taille de la planche, la construction et l'implantation des pièces. Les échantillons sont prêts en 7–12 jours ; la production en série prend 25–35 jours après confirmation du PO et de l'acompte (l'outillage de moule dédié ajoute 15–20 jours). Tous les prix, le périmètre de certification et les délais sont confirmés par projet — demandez un devis pour vos besoins précis.`,
  de: `{SITE} ist die Produktentwicklungs- und Fertigungsabteilung für SUP der ${BRAND_COMPANY_NAME}, einem 12.500 m² großen Werk für aufblasbare Produkte in Qingdao, China. Wir bauen SUP-Boards nach Ihrer Spezifikation — Engineering, Werkzeugbau, Bemusterung, Produktion und Export. Die Marke, der Markt und der Kunde gehören Ihnen; die Fertigung gehört uns. Wir verkaufen nicht an Endverbraucher und treten unseren Kunden in keinem Markt entgegen. Die MOQ wird nach der Spezifikationsprüfung bestätigt: 5–10 Stück für Co-Branding bzw. reines Logo auf bestehenden Plattformen, 20–50 Stück für Pilotlose mit individuellen Grafiken und 90–100+ Stück je genehmigter Konfiguration für die Serienproduktion (abhängig von Materialrollen- und Verpackungsanforderungen); Formen mit Sonderwerkzeug laufen in der Volumenklasse. Eine 150-m-Drop-Stitch-Materialrolle ergibt je nach Boardgröße, Konstruktion und Nesting-Layout eine unterschiedliche Stückzahl. Muster stehen in 7–12 Tagen bereit; die Serienproduktion dauert 25–35 Tage nach bestätigter Bestellung und Anzahlung (Sonderwerkzeug kostet 15–20 Tage zusätzlich). Alle Preise, Zertifizierungsumfänge und Lieferzeiten werden projektabhängig bestätigt — fordern Sie ein Angebot für Ihre konkreten Anforderungen an.`,
  it: `{SITE} è la divisione di sviluppo prodotto e produzione di SUP di ${BRAND_COMPANY_NAME}, uno stabilimento di 12.500 m² per la produzione di prodotti gonfiabili a Qingdao, Cina. Costruiamo tavole SUP secondo la vostra specifica — ingegneria, stampi, campionatura, produzione ed export. Il brand, il mercato e il cliente sono vostri; la produzione è nostra. Non vendiamo al consumatore finale e non competiamo con i nostri clienti in nessun mercato. Il MOQ viene confermato dopo la revisione della specifica: 5–10 pezzi per co-branding o solo logo su piattaforme esistenti, 20–50 pezzi per lotti pilota con grafiche personalizzate e 90–100+ pezzi per configurazione approvata nella produzione di volume standard (secondo i requisiti di materiale e confezionamento); le forme con stampo dedicato vengono prodotte al livello volume. Un rotolo da 150 m di materiale drop-stitch rende un numero di tavole diverso a seconda di dimensione, costruzione e disposizione delle parti in tavola. I campioni sono pronti in 7–12 giorni; la produzione di serie richiede 25–35 giorni dopo conferma di PO e acconto (lo stampo dedicato aggiunge 15–20 giorni). Tutti i prezzi, gli ambiti di certificazione e i tempi di consegna sono confermati per progetto — richiedete un preventivo per le vostre esigenze specifiche.`,
  pt: `{SITE} é a divisão de desenvolvimento de produtos e fabricação de SUP da ${BRAND_COMPANY_NAME}, uma fábrica de produtos insufláveis de 12.500 m² em Qingdao, China. Construímos pranchas de SUP de acordo com a sua especificação — engenharia, moldes, amostras, produção e exportação. A marca, o mercado e o cliente são seus; a fabricação é nossa. Não vendemos ao consumidor final nem competimos com os nossos clientes em nenhum mercado. O MOQ é confirmado após a revisão da especificação: 5–10 unidades para co-branding ou apenas logótipo sobre plataformas existentes, 20–50 unidades para lotes piloto com gráficos personalizados e 90–100+ unidades por configuração aprovada na produção de volume padrão (conforme os requisitos de material e embalagem); formas com molde dedicado são produzidas na faixa de volume. Um rolo de 150 m de material drop-stitch rende um número diferente de pranchas conforme o tamanho, a construção e o assentamento das peças. As amostras ficam prontas em 7–12 dias; a produção em série demora 25–35 dias após a confirmação do PO e do depósito (o molde dedicado acrescenta 15–20 dias). Todos os preços, âmbitos de certificação e prazos são confirmados por projeto — peça uma cotação para os seus requisitos específicos.`,
  nl: `{SITE} is de productontwikkelings- en fabricagedivisie voor SUP van ${BRAND_COMPANY_NAME}, een fabriek voor opblaasbare producten van 12.500 m² in Qingdao, China. Wij bouwen SUP-borden volgens uw specificatie — engineering, gereedschap, monsters, productie en export. Het merk, de markt en de klant zijn van u; de fabricage is van ons. Wij verkopen niet aan eindgebruikers en concurreren met onze klanten in geen enkele markt. De MOQ wordt na de specificatiereview bevestigd: 5–10 stuks voor co-branding of alleen een logo op bestaande platforms, 20–50 stuks voor pilotpartijen met eigen artwork en 90–100+ stuks per goedgekeurde configuratie voor de standaardserieproductie (afhankelijk van materiaalrol- en verpakkingsvereisten); vormen met een eigen mal worden in de volumeklasse geproduceerd. Een materiaalrol van 150 m drop-stitch levert een verschillend aantal borden op, afhankelijk van bordformaat, constructie en nestingindeling. Monsters zijn binnen 7–12 dagen klaar; de serieproductie duurt 25–35 dagen na bevestigde PO en aanbetaling (een eigen mal kost 15–20 dagen extra). Alle prijzen, certificaatsscope en levertijden worden per project bevestigd — vraag een offerte aan voor uw specifieke wensen.`,
  sv: `{SITE} är SUP-produktutvecklings- och tillverkningsdivisionen inom ${BRAND_COMPANY_NAME}, en 12 500 m² stor fabrik för uppblåsbara produkter i Qingdao, Kina. Vi bygger SUP-bräddor enligt din specifikation — konstruktion, formverktyg, prov, tillverkning och export. Varumärket, marknaden och kunden är dina; tillverkningen är vår. Vi säljer inte till slutkonsumenter och konkurrerar inte med våra kunder på någon marknad. MOQ bekräftas efter specifikationsgranskning: 5–10 styck för co-branding eller endast logotyp på befintliga plattformar, 20–50 styck för pilotpartier med egen grafik och 90–100+ styck per godkänd konfiguration för standardvolymproduktion (beroende på krav på materialrulle och förpackning); former med specialform tillverkas i volymklassen. En 150 m drop-stitch-materialrulle ger ett olikt antal brädor beroende på brädstorlek, konstruktion och placering av utstick. Proven är klara på 7–12 dagar; serieproduktionen tar 25–35 dagar efter bekräftad PO och insättning (specialform tar ytterligare 15–20 dagar). Alla priser, certifieringsomfattning och leveranstider bekräftas per projekt — begär en offert för dina specifika krav.`,
  no: `{SITE} er SUP-produktutviklings- og produksjonsdivisjonen i ${BRAND_COMPANY_NAME}, en 12 500 m² stor fabrikk for oppblåsbare produkter i Qingdao, Kina. Vi bygger SUP-brett etter din spesifikasjon — konstruksjon, formverktøy, prøver, produksjon og eksport. Merkenavnet, markedet og kunden er dine; produksjonen er vår. Vi selger ikke til sluttbrukere og konkurrerer ikke med våre kunder i noe marked. MOQ bekreftes etter spesifikasjonsgjennomgang: 5–10 stk. for co-branding eller kun logo på eksisterende plattformer, 20–50 stk. for pilotpartier med egen grafikk og 90–100+ stk. per godkjent konfigurasjon for standardvolumproduksjon (avhengig av krav til materialrull og emballasje); former med spesialform produseres i volumklassen. En 150 m drop-stitch-materialrull gir et varierende antall brett avhengig av brettstørrelse, konstruksjon og plassering av utskjær. Prøvene er klare på 7–12 dager; serieproduksjonen tar 25–35 dager etter bekreftet PO og depositum (spesialform gir 15–20 dager ekstra). Alle priser, sertifiseringsomfang og leveringstider bekreftes per prosjekt — be om tilbud for dine spesifikke krav.`,
  pl: `{SITE} to dział rozwoju produktów i produkcji SUP w ${BRAND_COMPANY_NAME}, zakład produkujący produkty dmuchane o powierzchni 12 500 m² w Qingdao w Chinach. Budujemy deski SUP zgodnie z Twoją specyfikacją — inżynieria, oprzyrządowanie, próbki, produkcja i eksport. Marka, rynek i klient należą do Ciebie; produkcja należy do nas. Nie sprzedajemy konsumentom końcowym i nie konkurujemy z naszymi klientami na żadnym rynku. MOQ potwierdzamy po przeglądzie specyfikacji: 5–10 szt. dla co-brandingu lub samego logo na istniejących platformach, 20–50 szt. dla partii pilotażowych z własną grafiką oraz 90–100+ szt. na zatwierdzoną konfigurację w produkcji seryjnej (zależnie od wymagań dotyczących rolki materiału i opakowań); kształty wymagające dedykowanej formy powstają w klasie wolumenowej. Rolka drop-stitch 150 m daje różną liczbę desek zależnie od ich rozmiaru, konstrukcji i układu rozkroju. Próbki są gotowe w 7–12 dni; produkcja seryjna trwa 25–35 dni po potwierdzeniu zamówienia i zaliczki (dedykowana forma dolicza 15–20 dni). Wszystkie ceny, zakresy certyfikatów i terminy są potwierdzane dla każdego projektu — poproś o wycenę swoich konkretnych wymagań.`,
  da: `{SITE} er SUP-produktudviklings- og produktionsafdelingen i ${BRAND_COMPANY_NAME}, et 12.500 m² stort anlæg for oppustelige produkter i Qingdao, Kina. Vi bygger SUP-bredder efter din specifikation — konstruktion, formværktøj, prøver, produktion og eksport. Mærket, markedet og kunden er dine; produktionen er vores. Vi sælger ikke til slutbrugere og konkurrerer ikke med vores kunder på noget marked. MOQ bekræftes efter specifikationsgennemgang: 5–10 stk. til co-branding eller kun logo på eksisterende platforme, 20–50 stk. til pilotpartier med egen grafik og 90–100+ stk. pr. godkendt konfiguration til standardvolumenproduktion (afhængigt af krav til materialerulle og emballage); former med specialform fremstilles i voluminklassen. En 150 m drop-stitch-materialerulle giver et varierende antal bredder afhængigt af breddestørrelse, konstruktion og udskæring. Prøverne er klar på 7–12 dage; serieproduktionen tager 25–35 dage efter bekræftet PO og depositum (specialform giver 15–20 dage ekstra). Alle priser, certificeringsomfang og leveringstider bekræftes pr. projekt — anmod om et tilbud til dine konkrete krav.`,
  fi: `{SITE} on ${BRAND_COMPANY_NAME}:n SUP-tuotteen kehitys- ja tuotantoyksikkö, joka toimii Kiinassa Qingdaossa 12 500 m²:n kokoisella pompattavien tuotteiden tehtaalla. Rakennamme SUP-laudat teidän vaatimuksenne mukaan — suunnittelu, muotit, näytteet, tuotanto ja vienti. Brändi, markkina ja asiakas kuuluvat teille; tuotanto kuuluu meille. Emme myy kuluttajille emmekä kilpailemme asiakkaidemme kanssa millään markkinoilla. MOQ vahvistetaan vaatimusarvioinnin jälkeen: 5–10 kpl co-brandingiin tai pelkkään logoon olemassa oleville alustoille, 20–50 kpl pilottierään oman grafiikan kanssa ja 90–100+ kpl hyväksyttyä kokoonpanoa kohti vakiomassan tuotannossa (riippuen materiaalirullan ja pakkauksen vaatimuksista); erikoismuotoja valmistetaan volyymiluokassa. 150 metrin drop-stitch-materiaalirulla antaa erilaisen laudemäärän riippuen laudan koosta, rakenteesta ja leikkausjärjestyksestä. Näytteet ovat valmiina 7–12 päivässä; sarjatuotanto kestää 25–35 päivää vahvistetun tilauksen ja käsirahan jälkeen (erikoismuotti lisää 15–20 päivää). Kaikki hinnat, sertifiointikattavuudet ja toimitusajat vahvistetaan projektikohtaisesti — pyytäkää tarjous konkreettisista tarpeistanne.`,
  ru: `{SITE} — это подразделение разработки и производства SUP компании ${BRAND_COMPANY_NAME}, завода площадью 12 500 м² по производству надувной продукции в Циндао, Китай. Мы изготавливаем SUP-доски по вашей спецификации — проектирование, пресс-формы, образцы, производство и экспорт. Бренд, рынок и клиент принадлежат вам; производство — нам. Мы не продаём конечным потребителям и не конкурируем с нашими клиентами ни на одном рынке. MOQ подтверждается после проверки спецификации: 5–10 штук для кобрендинга или только логотипа на существующих платформах, 20–50 штук для пилотных партий с индивидуальной графикой и 90–100+ штук на каждую утверждённую конфигурацию при серийном производстве (в зависимости от требований к рулону материала и упаковке); формы под индивидуальную пресс-форму выпускаются в объёмном классе. Рулон drop-stitch 150 м даёт различное количество досок в зависимости от размера доски, конструкции и раскроя. Образцы готовы за 7–12 дней; серийное производство занимает 25–35 дней после подтверждения заказа (PO) и предоплаты (индивидуальная пресс-форма добавляет 15–20 дней). Все цены, области сертификации и сроки подтверждаются по каждому проекту — запросите расчёт по вашим конкретным требованиям.`,
  cs: `{SITE} je divize pro vývoj produktů a výrobu SUP společnosti ${BRAND_COMPANY_NAME}, závodu o rozloze 12 500 m² na výrobu nafukovacích výrobků v Čínsku, Qingdao. Vyrábíme SUP desky podle vaší specifikace — inženýrství, nástroje, vzorky, výroba a export. Značka, trh a zákazník patří vám; výroba patří nám. Neprodáváme koncovým zákazníkům a v žádném trhu nekonkurujeme se svými klienty. MOQ potvrzujeme po posouzení specifikace: 5–10 ks pro co-branding nebo pouze logo na stávajících platformách, 20–50 ks pro pilotní dávky s vlastní grafikou a 90–100+ ks na schválenou konfiguraci při sériové výrobě (podle požadavků na materiálový svitek a obal); tvar vyžadující dedikovanou formu se vyrábí v objemové třídě. 150m svitek drop-stich materiálu poskytne různý počet desek podle velikosti desky, konstrukce a rozložení rozstřihu. Vzorky jsou připraveny za 7–12 dní; sériová výroba trvá 25–35 dní po potvrzení objednávky a zálohy (dedikovaná forma přidává 15–20 dní). Všechny ceny, rozsahy certifikací a dodací lhůty se potvrzují pro každý projekt — vyžádejte si nabídku pro vaše konkrétní požadavky.`,
  tr: `{SITE}, Çin, Qingdao'da 12.500 m²'lik şişirilebilir ürün üretim tesisi olan ${BRAND_COMPANY_NAME} adlı şirketin SUP ürün geliştirme ve üretim bölümüdür. SUP tahtalarını sizin şartnamenize göre üretiyoruz — mühendislik, kalıp, numune, üretim ve ihracat. Marka, pazar ve müşteri sizindir; üretim bizimdir. Son tüketicilere satış yapmayız ve hiçbir pazarda müşterilerimizle rekabet etmeyiz. MOQ, şartname incelemesinden sonra kesinleşir: mevcut platformlarda ortak markalama veya yalnızca logo için 5–10 adet, özel grafikli pilot partiler için 20–50 adet ve standart hacim üretiminde onaylanan her konfigürasyon için 90–100+ adet (malzeme rulosu ve ambalaj gerekliliklerine bağlı olarak); özel kalıp gerektiren şekiller hacim sınıfında üretilir. 150 m'lik drop-stitch malzeme rulosu, tahta boyutu, yapısı ve yerleşim düzenine göre farklı sayıda tahta verir. Numuneler 7–12 günde hazırdır; sipariş (PO) ve depozito onaylandıktan sonra seri üretim 25–35 gün sürer (özel kalıp 15–20 gün ekler). Tüm fiyatlar, sertifikasyon kapsamı ve teslim süreleri proje bazında kesinleştirilir — somut ihtiyaçlarınız için teklif isteyin.`,
  ro: `{SITE} este divizia de dezvoltare de produs și producție SUP a ${BRAND_COMPANY_NAME}, o fabrică de produse gonflabile de 12.500 m² din Qingdao, China. Construim plăci SUP conform specificației dumneavoastră — inginerie, matrițe, mostre, producție și export. Marca, piața și clientul vă aparțin; producția ne aparține. Nu vândem consumatorilor finali și nu concurăm cu clienții noștri pe nicio piață. MOQ se confirmă după revizuirea specificației: 5–10 bucăți pentru co-branding sau doar logo pe platforme existente, 20–50 bucăți pentru loturi-pilot cu grafică proprie și 90–100+ bucăți pe configurație aprobată în producția de volum standard (în funcție de cerințele privind ruloul de material și ambalajele); formele care necesită matriță dedicată se produc la nivel de volum. Un rulou de 150 m de material drop-stitch rezultă un număr diferit de plăci în funcție de dimensiunea plăcii, construcție și așezarea pieselor. Mostrele sunt gata în 7–12 zile; producția de serie durează 25–35 de zile după confirmarea comenzii (PO) și a avansului (matrița dedicată adaugă 15–20 de zile). Toate prețurile, domeniile de certificare și termenele de livrare se confirmă pentru fiecare proiect — solicitați o ofertă pentru cerințele dumneavoastră concrete.`,
  hu: `A {SITE} a ${BRAND_COMPANY_NAME} SUP termékfejlesztő és gyártó részlege, amely a kínai Qingdao városában működő, 12 500 m²-es légmentes termékgyártó üzem. SUP deszkákat építünk az Ön specifikációja szerint — mérnöki fejlesztés, szerszámkészítés, mintagyártás, tömeggyártás és export. A márka, a piac és a vevő az Öné; a gyártás a miénk. Nem értékesítünk végfelhasználóknak, és egyetlen piacon sem versenyezünk az ügyfeleinkkel. A MOQ-t a specifikáció felülvizsgálata után igazoljuk: 5–10 darab együttműködő márkázáshoz vagy csak logóra meglévő platformokon, 20–50 darab saját grafikával készülő próbagyártáshoz, illetve 90–100+ darab jóváhagyott konfigurációnként szabványos tömeggyártásban (az anyaghengerre és a csomagolásra vonatkozó követelményektől függően); az egyedi gyártószerszamot igénylő formák a volumenes osztályban készülnek. A 150 m hosszú drop-stitch anyaghenger különböző darabszámot ad a deszka méretétől, felépítésétől és a kivágás elrendezésétől függően. A minták 7–12 nap alatt elkészülnek; a tömeggyártás a rendelés és az előleg visszaigazolása után 25–35 napot vesz igénybe (az egyedi gyártószerszám további 15–20 napot ad hozzá). Az minden ár, a tanúsítványok hatóköre és az átadási idők projektenként kerülnek megerősítésre — kérjen ajánlatot a konkrét igényeire.`,
}

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

export const LLM_POLISH_HOMEPAGE_DESCRIPTION =
  'Producent OEM nadmuchiwanych desek SUP oraz personalizowanych nadmuchiwanych desek SUP, z globalnym eksportem z Chin'

export const LLM_DANISH_HOMEPAGE_DESCRIPTION =
  'iSupfactory er en OEM/ODM-fabrik i Qingdao, Kina, der producerer oppustelige SUP-bræt til mærker, distributører og forhandlere. Vi udvikler og bygger bræt, pagaj, finne og pakning efter kundens specifikation, fra prøve og prototype til serieproduktion. Minimumsordre, certificeringer og leveringstider bekræftes altid projektspecifikt.'

export const LLM_FINNISH_HOMEPAGE_DESCRIPTION =
  'iSupfactory on Qingdaossa, Kiinassa sijaitseva OEM/ODM-tehdas, joka valmistaa puhallettavia SUP-lautoja brändeille, jakelijoille ja jälleenmyyjille. Kehitämme ja rakennamme laudat, melat, evät ja pakkaukset asiakkaan spesifikaation mukaan näytteestä ja prototyypistä sarjatuotantoon. Vähimmäiseräkoot, sertifioinnit ja toimitusajat vahvistetaan aina projektikohtaisesti.'

export const LLM_RUSSIAN_HOMEPAGE_DESCRIPTION =
  'iSupfactory — OEM/ODM-фабрика в Циндао, Китай, которая производит надувные SUP-доски для брендов, дистрибьюторов и реселлеров. Мы разрабатываем и производим доски, весла, плавники и упаковку по спецификации заказчика — от образца и прототипа до серийного производства. Минимальный заказ (MOQ), сертификация и сроки поставки всегда подтверждаются по конкретному проекту.'

export const LLM_CZECH_HOMEPAGE_DESCRIPTION =
  'iSupfactory je továrna OEM/ODM v Čching-tunu v Číně, která vyrábí nafukovací SUP desky pro značky, distributory a prodejce. Vyvíjíme a vyrábíme desky, vesla, žebra a obaly podle specifikace zákazníka — od vzorku a prototypu až po sériovou výrobu. Minimální objednávka (MOQ), certifikace a dodací lhůty se vždy potvrzují podle konkrétního projektu.'

export const LLM_TURKISH_HOMEPAGE_DESCRIPTION =
  'iSupfactory, Çin\'de Qingdao merkezinde yer alan ve markalar, distribütörler ve satıcılar için şişirilebilir SUP tahtaları üreten bir OEM/ODM fabrikasıdır. Müşteri şartnamesine göre tahta, kürek, fin ve ambalaj geliştirip üretiyoruz — numune ve prototipten seri üretime kadar. Minimum sipariş miktarı, sertifikalar ve teslim süreleri her zaman proje bazında teyit edilir.'

export const LLM_ROMANIAN_HOMEPAGE_DESCRIPTION =
  'iSupfactory este o fabrică OEM/ODM din Qingdao, China, care produce plăci de SUP gonflabile pentru branduri, distribuitori și comercianți. Dezvoltăm și producem plăci, vâsle, aripioare și ambalaje conform specificațiilor clientului — de la mostră și prototip la producția de serie. Cantitatea minimă de comandă (MOQ), certificările și termenele de livrare sunt întotdeauna confirmate în funcție de proiect.'

export const LLM_HUNGARIAN_HOMEPAGE_DESCRIPTION =
  'Az iSupfactory egy Qingdao (Kína) székhelyű OEM/ODM gyár, amely felfújható SUP deszkákat gyárt márkák, forgalmazók és kereskedők számára. Deszkákat, evezőket, uszonyokat és csomagolásokat fejlesztünk és gyártunk az Ön specifikációja szerint — a mintától és a prototípustól a sorozatgyártásig. A minimális rendelési mennyiségeket, tanúsítványokat és szállítási határidőket mindig projektenként erősítjük meg.'

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
  pl: [
    { title: 'Rozmiar i kształt deski', body: 'Długość, szerokość, grubość i rocker dopasowane do Twojej docelowej wydajności i rynku.' },
    { title: 'Materiały i konstrukcja', body: 'Warstwy PCV, gęstość drop-stitch, usztywnienia i wzmocnienia dopasowane do Twojego poziomu cenowego.' },
    { title: 'Kolory i grafika', body: 'Nieograniczone kombinacje kolorów z własną grafiką lub z pomocą naszego zespołu projektowego.' },
    { title: 'Logo i branding', body: 'Nadruk cyfrowy lub sitograficzny Twojego logo, z zatwierdzeniem wzoru przed produkcją.' },
    { title: 'EVA i pokład', body: 'Indywidualnie wycinane podkładki antypoślizgowe, logo i kolory pokładu na każdej desce.' },
    { title: 'Płetwy i akcesoria', body: 'Układy płetw, wiosła, pompki, smycze i torby dopasowane do Twojego zestawu.' },
    { title: 'Opakowanie i ekspozycja', body: 'Opakowania detaliczne, opakowanie transportowe na morze i ekspozytory POS pod Twoją marką.' },
  ],
  da: [
    { title: 'Brætets størrelse og form', body: 'Længde, bredde, tykkelse og rocker tilpasset din målpræstation og dit marked.' },
    { title: 'Materialer og konstruktion', body: 'PVC-lag, drop-stitch-tæthed, afstivninger og forstærkninger valgt efter dit prisniveau.' },
    { title: 'Farver og grafik', body: 'Ubegrænsede farvekombinationer med egen grafik eller hjælp fra vores designteam.' },
    { title: 'Logo og branding', body: 'Digitalt eller silkeret tryk af dit logo, med visuel korrektur før produktionen.' },
    { title: 'EVA og dæk', body: 'Specialskårede grebmåtter, logoer og dækfarger på hvert bræt.' },
    { title: 'Finne og tilbehør', body: 'Finnekonfigurationer, pagaj, pumper, leash og tasker tilpasset din pakke.' },
    { title: 'Emballage og præsentation', body: 'Detailkassetter, sødygtig transportemballage og butiksdisplays under dit mærke.' },
  ],
  fi: [
    { title: 'Laudan koko ja muoto', body: 'Pituus, leveys, paksuus ja kaari sovitetaan tavoitteesi suorituskykyyn ja markkinoihin.' },
    { title: 'Materiaalit ja rakenne', body: 'PVC-kerrokset, drop-stitch-tiheys, jäykistimet ja vahvistukset valitaan hintatasi mukaan.' },
    { title: 'Värit ja kuvitus', body: 'Rajattomat värriyhdistelmät omalla kuvituksellasi tai suunnittelutiimemme avustuksella.' },
    { title: 'Logo ja brändi', body: 'Logon siirtäminen digitaalisesti tai silkkipainolla, ja visuaalinen tarkastus ennen tuotantoa.' },
    { title: 'EVA-matto ja kansi', body: 'Leikattu liukumaton EVA-matto, logot ja kannen värit jokaisella laudalla.' },
    { title: 'Evät ja lisävarusteet', body: 'Eväasennukset, melat, pumput, hihnat ja laukut sovitettuina pakettisi.' },
    { title: 'Pakkaus ja näyttely', body: 'Vähittäispakkauslaatikot, merikelpoinen kuljetuspakkaus ja myyntipisteet omalla brändilläsi.' },
  ],
  ru: [
    { title: 'Размер и форма доски', body: 'Длина, ширина, толщина и rocker, настроенные под ваши целевые характеристики и рынок.' },
    { title: 'Материалы и конструкция', body: 'Слои ПВХ, плотность drop-stitch, жёсткие элементы и усиления под ваш ценовой уровень.' },
    { title: 'Цвета и графика', body: 'Неограниченные сочетания цветов с вашей собственной графикой или с помощью нашей команды дизайна.' },
    { title: 'Логотип и брендинг', body: 'Нанесение логотипа цифровым способом или шелкографией, с визуальным подтверждением до начала производства.' },
    { title: 'EVA и палуба', body: 'Вырезанные по размеру противоскользящие коврики, логотипы и цвета палубы на каждой доске.' },
    { title: 'Плавники и аксессуары', body: 'Конфигурации плавников, весла, насосы, поводки и сумки, подобранные под ваш комплект.' },
    { title: 'Упаковка и презентация', body: 'Розничные коробки, морская транспортная упаковка и POS-стенды под вашим брендом.' },
  ],
  cs: [
    { title: 'Velikost a tvar desky', body: 'Délka, šířka, tloušťka a rocker přizpůsobené vašim cílovým výkonům a trhu.' },
    { title: 'Materiály a konstrukce', body: 'Vrstvy PVC, hustota drop-stitch, výztuhy a zesílení podle vaší cenové úrovně.' },
    { title: 'Barvy a grafika', body: 'Neomezené kombinace barev s vlastní grafikou nebo s pomocí našeho designérského týmu.' },
    { title: 'Logo a značení', body: 'Digitální nebo sítotiskové zhotovení loga, s vizuálním potvrzením před výrobou.' },
    { title: 'EVA a paluba', body: 'Na míru řezané protiskluzové podložky, loga a barvy paluby na každé desce.' },
    { title: 'Žebra a příslušenství', body: 'Konfigurace žebra, vesla, pumpičky, kotevní řemínky a tašky přizpůsobené vašemu balíčku.' },
    { title: 'Obal a prezentace', body: 'Retailové krabice, námořní přepravní obaly a POS stojany pod vaší značkou.' },
  ],
  tr: [
    { title: 'Tahta ölçüsü ve şekli', body: 'Hedef performansınıza ve pazarınıza göre ayarlanan uzunluk, genişlik, kalınlık ve rocker.' },
    { title: 'Malzemeler ve yapı', body: 'Fiyat seviyenize göre uyarlanan PVC katmanları, drop-stitch yoğunluğu, takviye elemanları ve güçlendirmeler.' },
    { title: 'Renkler ve görsel tasarım', body: 'Kendi sanatınızla veya tasarım ekibimizin desteğiyle sınırsız renk kombinasyonu.' },
    { title: 'Logo ve kurumsal kimlik', body: 'Dijital veya serigrafik logo uygulaması, üretim öncesi görsel onay ile birlikte.' },
    { title: 'EVA ve güverte', body: 'Her tahtada ölçüye özel kesilmiş kaymaz pad tasarımları, logolar ve güverte renkleri.' },
    { title: 'Finler ve aksesuarlar', body: 'Paketinize uygun fin konfigürasyonları, kürekler, pompalar, emniyet ipleri ve çantalar.' },
    { title: 'Ambalaj ve sunum', body: 'Markanızla uyumlu perakende kutuları, deniz koşullarına dayanıklı nakliye ambalajı ve satış noktası standları.' },
  ],
  ro: [
    { title: 'Dimensiunea și forma plăcii', body: 'Lungime, lățime, grosime și rocker adaptate performanței și pieței țintă aleasă de dumneavoastră.' },
    { title: 'Materiale și construcție', body: 'Straturi de PVC, densitate drop-stitch, rigidizări și întăriri adaptate nivelului de preț dorit de dumneavoastră.' },
    { title: 'Culori și grafică', body: 'Combinații de culori nelimitate cu grafica proprie sau cu sprijinul echipei noastre de design.' },
    { title: 'Logo și identitate vizuală', body: 'Aplicarea logo-ului prin imprimare digitală sau serigrafie, cu probă vizuală înainte de producție.' },
    { title: 'EVA și puntea', body: 'Plăcuțe antiderapante tăiate la comandă, logo-uri și culori ale punții pe fiecare placă SUP.' },
    { title: 'Aripioare și accesorii', body: 'Configurații de aripioare, vâsle, pompe, lese și genți adaptate pachetului dumneavoastră.' },
    { title: 'Ambalaje și prezentare', body: 'Cutii de retail, ambalaje de transport maritim și afișaje la punctul de vânzare sub marca dumneavoastră.' },
  ],
  hu: [
    { title: 'A deszka mérete és formája', body: 'Hossz, szélesség, vastagság és rocker, amelyek a kiválasztott célpiachoz és célzott teljesítményhez igazodnak.' },
    { title: 'Anyagok és szerkezet', body: 'PVC-rétegek, drop-stitch sűrűség, merevítők és erősítések az Ön által célzott árkategóriához igazítva.' },
    { title: 'Színek és grafika', body: 'Korlátlan színkombinációk saját grafikával vagy designcsapatunk támogatásával.' },
    { title: 'Logó és arculat', body: 'A logó digitális vagy szitaosztékos felvitele, gyártás előtti vizuális próbával.' },
    { title: 'EVA és a fedélzet', body: 'Egyedi méretre vágott csúszásgátló szőnyegek, logók és fedélzeti színek minden SUP deszkán.' },
    { title: 'Uszonyok és tartozékok', body: 'Uszony-konfigurációk, evezők, pumpák, kötelek és táskák, amelyek az Ön csomagjához igazodnak.' },
    { title: 'Csomagolás és bemutató', body: 'Retaildobozok, tengeri szállításra alkalmas csomagolás és értékesítési pontokon megjelenő (POS) bemutatók az Ön márkájával.' },
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
  pl: [
    { title: 'Marki SUP', body: 'Wprowadź własną linię z minimalnymi ilościami w przedziałach, już od serii co-branding 5–10 szt.' },
    { title: 'Dystrybutorzy i odsprzedawcy', body: 'Katalogi hurtowe z opakowaniem transportowym na morze i obsługą eksportu.' },
    { title: 'Firmy detaliczne i outdoorowe', body: 'Sezonowe programy uzupełniania zapasów ze stabilnymi specyfikacjami, partia po partii.' },
    { title: 'Ośrodki i wypożyczalnie', body: 'Floty do intensywnej eksploatacji z wzmocnieniami, częściami zamiennymi i ustandaryzowaną konserwacją.' },
    { title: 'Kluby, szkoły i wydarzenia', body: 'Brandowane deski dla programów, zawodów i flot firmowych.' },
  ],
  da: [
    { title: 'SUP-mærker', body: 'Lancer din egen serie med trinstyrede minimumsantal fra co-branding-serier på 5–10 stk.' },
    { title: 'Distributører og forhandlere', body: 'Volumkataloger med sødygtig emballage og eksportstyring.' },
    { title: 'Detailhandel og outdoorvirksomheder', body: 'Sæsonbestemte genbestillingsprogrammer med stabile specifikationer, batch efter batch.' },
    { title: 'Resorter og udlejningsvirksomheder', body: 'Flåder til tungt brug med forstærkninger, reservedele og standardiseret vedligeholdelse.' },
    { title: 'Klubber, skoler og arrangementer', body: 'Mærkede bræt til programmer, konkurrencer og firmaflåter.' },
  ],
  fi: [
    { title: 'SUP-brändit', body: 'Lanseeraa oma tuotelinjasi porrastetuin vähimmäismäärin alkaen 5–10 kpl:n co-branding-sarjasta.' },
    { title: 'Jakelijat ja jälleenmyyjät', body: 'Tukkuvalikoimat merikelpoisella pakkauksella ja vientihallinnalla.' },
    { title: 'Vähittäiskauppa ja outdoor-yritykset', body: 'Kausikohtaiset täydennysohjelmat vakailla spesifikaatioilla, erä erältä.' },
    { title: 'Resortit ja vuokrausoperaattorit', body: 'Raskaan käytön laivueet vahvistuksin, varaosin ja standardoidulla ylläpidolla.' },
    { title: 'Kerhot, koulut ja tapahtumat', body: 'Brändätyt laudat ohjelmille, kilpailuille ja yrityslaivueille.' },
  ],
  ru: [
    { title: 'SUP-бренды', body: 'Запустите собственную линейку с минимальными заказами от 5–10 штук для co-branding.' },
    { title: 'Дистрибьюторы и реселлеры', body: 'Оптовые каталоги с морской упаковкой и управлением экспортом.' },
    { title: 'Розничные компании и outdoor-бренды', body: 'Сезонные программы пополнения запасов со стабильной спецификацией от партии к партии.' },
    { title: 'Курорты и прокатные операторы', body: 'Парки для интенсивной эксплуатации с усилениями, запасными частями и стандартизированным обслуживанием.' },
    { title: 'Клубы, школы и мероприятия', body: 'Брендированные доски для программ, соревнований и корпоративных парков.' },
  ],
  cs: [
    { title: 'Značky SUP', body: 'Spusťte vlastní řadu s odstupňovanými minimálními množstvími od sérií co-branding 5–10 ks.' },
    { title: 'Distributoři a prodejci', body: 'Velkoobchodní katalogy s námořním obalem a správou exportu.' },
    { title: 'Maloobchod a outdoorové firmy', body: 'Sezónní programy doplňování zásob se stabilními specifikacemi, dávku za dávkou.' },
    { title: 'Resorty a pronajímatelé', body: 'Floty pro intenzivní používání se zesíleními, náhradními díly a standardizovanou údržbou.' },
    { title: 'Kluby, školy a akce', body: 'Značkové desky pro programy, závody a firemní floty.' },
  ],
  tr: [
    { title: 'SUP markaları', body: 'Kendi ürün hattınızı, 5–10 adetlik ortak marka üretimlerinden başlayarak kademeli asgari sipariş miktarlarıyla başlatın.' },
    { title: 'Distribütörler ve satıcılar', body: 'Deniz koşullarına dayanıklı ambalaj ve ihracat yönetimiyle hacim katalogları.' },
    { title: 'Perakende ve outdoor şirketleri', body: 'Parti parti sabit özelliklerle sezonluk ikmal programları.' },
    { title: 'Resortlar ve kiralama operatörleri', body: 'Takviyeler, yedek parçalar ve standartlaştırılmış bakımla yoğun kullanıma uygun filolar.' },
    { title: 'Kulüpler, okullar ve etkinlikler', body: 'Programlar, yarışmalar ve kurumsal filolar için markalı tahtalar.' },
  ],
  ro: [
    { title: 'Branduri SUP', body: 'Lansați-vă propria gamă cu cantități minime eșalonate, începând cu serii de co-branding de 5–10 buc.' },
    { title: 'Distribuitori și revânzători', body: 'Cataloage de volum cu ambalaje rezistente la transportul maritim și gestionarea exportului.' },
    { title: 'Retail și companii outdoor', body: 'Programe sezoniere de reaprovizionare cu specificații stabile, lot cu lot.' },
    { title: 'Resorturi și operatori de închiriere', body: 'Flote pentru utilizare intensivă, cu întăriri, piese de schimb și mentenanță standardizată.' },
    { title: 'Cluburi, școli și evenimente', body: 'Plăci de marcă pentru programe, competiții și flote corporative.' },
  ],
  hu: [
    { title: 'SUP márkák', body: 'Indítsa el saját termékcsaládját lépcsőzetes minimumrendelésekkel, már 5–10 db-os co-branding szériáktól.' },
    { title: 'Forgalmazók és viszonteladók', body: 'Nagy volumenű katalógusok tengeri szállításra alkalmas csomagolással és exportkezeléssel.' },
    { title: 'Retail és outdoor cégek', body: 'Szezonális készletfeltöltési programok stabil specifikációkkal, tételenként azonos minőségben.' },
    { title: 'Resortok és bérbeadó üzemeltetők', body: 'Intenzív használatra tervezett flották megerősítésekkel, alkatrészekkel és szabványosított karbantartással.' },
    { title: 'Klubok, iskolák és rendezvények', body: 'Arculatot viselő deszkák programokhoz, versenyekhez és vállalati flottákhoz.' },
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
  pl: [
    { url: '/pl', title: 'iSupfactory — produkcja OEM i ODM nadmuchiwanych desek SUP', excerpt: 'Fabryka OEM/ODM nadmuchiwanych desek SUP w Qingdao: rozwój produktów, produkcja na zamówienie, marka własna i kontrola jakości.' },
    { url: '/pl/products', title: 'Produkty: nadmuchiwane deski SUP', excerpt: 'Nadmuchiwane deski SUP klasy premium: serie 11 ft, SUP do wędkowania, mini SUP, gigantyczne deski drużynowe i więcej — wykonane pod personalizację OEM/ODM.' },
    { url: '/pl/solutions', title: 'Rozwiązania', excerpt: 'Programy produkcji OEM/ODM desek SUP: rozwój desek na zamówienie, marka własna, floty dla ośrodków i klubów, wypożyczalnie i partnerzy detaliczni.' },
    { url: '/pl/projects', title: '', excerpt: '' },
    { url: '/pl/knowledge', title: '', excerpt: '' },
    { url: '/pl/gallery', title: 'Galeria', excerpt: 'Galeria fabryki i produktów iSupfactory: hale, laboratoria jakości, testy tkanin i deski SUP w produkcji.' },
  ],
  da: [
    { url: '/da', title: 'iSupfactory — OEM- og ODM-produktion af oppustelige SUP-bræt', excerpt: 'OEM/ODM-fabrik for oppustelige SUP-bræt i Qingdao: produktudvikling, specialfremstillet produktion, privat mærke og kvalitetskontrol.' },
    { url: '/da/products', title: 'Oppustelige SUP-produkter', excerpt: 'Premium oppustelige SUP-bræt: 11 ft-serien, fiske-SUP, mini-SUP, kæmpe teambræt og mere — bygget til OEM/ODM-tilpasning.' },
    { url: '/da/solutions', title: 'Løsninger', excerpt: 'OEM/ODM-produktionsprogrammer for SUP: specialudvikling af SUP-bræt, privat mærke, flåder til resorter og klubber, udlejning og detailhandelspartnere.' },
    { url: '/da/projects', title: '', excerpt: '' },
    { url: '/da/knowledge', title: '', excerpt: '' },
    { url: '/da/gallery', title: 'Galleri', excerpt: 'Fabriks- og produktgalleri fra iSupfactory: værksteder, kvalitetslaboratorier, stofprøvninger og SUP-bræt i produktion.' },
  ],
  fi: [
    { url: '/fi', title: 'iSupfactory — puhallettavien SUP-lautojen OEM- ja ODM-tuotanto', excerpt: 'Puhallettavien SUP-lautojen OEM/ODM-tehdas Qingdaossa: tuotekehitys, räätälöity tuotanto, oma brändi ja laadunvalvonta.' },
    { url: '/fi/products', title: 'Puhallettavat SUP-tuotteet', excerpt: 'Laadukkaat puhallettavat SUP-laudat: 11 ft -sarja, kalastus-SUP, minisup, jättilautajoukkueet ja muuta — valmistettu OEM/ODM-räätälöintiä varten.' },
    { url: '/fi/solutions', title: 'Ratkaisut', excerpt: 'SUP:n OEM/ODM-tuotantoohjelmat: räätälöity SUP-kehitys, oma brändi, resorttien ja kerhojen laivueet, vuokraus sekä vähittäiskauppakumppanit.' },
    { url: '/fi/projects', title: '', excerpt: '' },
    { url: '/fi/knowledge', title: '', excerpt: '' },
    { url: '/fi/gallery', title: 'Galleria', excerpt: 'iSupfactoryn tehdas- ja tuotegalleria: työpajat, laatulaboratoriot, kangaslaboratoriot ja SUP-laudat tuotannossa.' },
  ],
  ru: [
    { url: '/ru', title: 'iSupfactory — OEM- и ODM-производство надувных SUP-досок', excerpt: 'OEM/ODM-фабрика надувных SUP-досок в Циндао: разработка продукта, индивидуальное производство, собственная марка и контроль качества.' },
    { url: '/ru/products', title: 'Продукция: надувные SUP-доски', excerpt: 'Премиальные надувные SUP-доски: серии 11 ft, рыболовная SUP, mini SUP, гигантские командные доски и другое — изготовление по индивидуальному заказу OEM/ODM.' },
    { url: '/ru/solutions', title: 'Решения', excerpt: 'Программы OEM/ODM-производства SUP: индивидуальная разработка SUP, собственная марка, парки для курортов и клубов, прокат и розничные партнёры.' },
    { url: '/ru/projects', title: '', excerpt: '' },
    { url: '/ru/knowledge', title: '', excerpt: '' },
    { url: '/ru/gallery', title: 'Галерея', excerpt: 'Галерея фабрики и продукции iSupfactory: цеха, лаборатории качества, испытания тканей и SUP-доски в производстве.' },
  ],
  cs: [
    { url: '/cs', title: 'iSupfactory — OEM a ODM výroba nafukovacích SUP desek', excerpt: 'Továrna OEM/ODM nafukovacích SUP desek v Čching-tunu: vývoj produktu, výroba na míru, vlastní značka a kontrola kvality.' },
    { url: '/cs/products', title: 'Produkty: nafukovací SUP desky', excerpt: 'Prémiové nafukovací SUP desky: série 11 ft, rybářská SUP, mini SUP, obří týmové desky a další — výroba na míru v režimu OEM/ODM.' },
    { url: '/cs/solutions', title: 'Řešení', excerpt: 'Programy OEM/ODM výroby SUP: vývoj SUP na míru, vlastní značka, floty pro resorty a kluby, pronájem a maloobchodní partneři.' },
    { url: '/cs/projects', title: '', excerpt: '' },
    { url: '/cs/knowledge', title: '', excerpt: '' },
    { url: '/cs/gallery', title: 'Galerie', excerpt: 'Galerie továrny a produktů iSupfactory: dílny, laboratoře kvality, zkoušky tkanin a SUP desky ve výrobě.' },
  ],
  tr: [
    { url: '/tr', title: 'iSupfactory — Şişirilebilir SUP Üretimi (OEM ve ODM)', excerpt: 'Qingdao merkezinde şişirilebilir SUP tahtaları için OEM/ODM fabrikası: ürün geliştirme, özel üretim, özel marka ve kalite kontrolü.' },
    { url: '/tr/products', title: 'Ürünler: şişirilebilir SUP tahtaları', excerpt: 'Premium şişirilebilir SUP tahtaları: 11 ft seriler, balıkçılık SUP, mini SUP, dev takım tahtaları ve daha fazlası — OEM/ODM uyarlamasına hazır.' },
    { url: '/tr/solutions', title: 'Çözümler', excerpt: 'OEM/ODM SUP üretim programları: özel SUP geliştirme, özel marka, resort ve kulüp filoları, kiralama operatörleri ve perakende iş ortakları.' },
    { url: '/tr/projects', title: '', excerpt: '' },
    { url: '/tr/knowledge', title: '', excerpt: '' },
    { url: '/tr/gallery', title: 'Galeri', excerpt: 'iSupfactory fabrika ve ürün galerisi: atölyeler, kalite laboratuvarları, kumaş testleri ve üretimdeki SUP tahtaları.' },
  ],
  ro: [
    { url: '/ro', title: 'iSupfactory — Producție OEM și ODM de plăci SUP gonflabile', excerpt: 'Fabrică OEM/ODM de plăci SUP gonflabile în Qingdao: dezvoltare de produs, producție la comandă, marcă proprie și control al calității.' },
    { url: '/ro/products', title: 'Produse: plăci SUP gonflabile', excerpt: 'Plăci SUP gonflabile premium: seria 11 ft, SUP pentru pescuit, mini SUP, plăci gigante de echipă și multe altele — realizate pentru personalizare OEM/ODM.' },
    { url: '/ro/solutions', title: 'Soluții', excerpt: 'Programe de producție OEM/ODM de SUP: dezvoltare SUP la comandă, marcă proprie, flote pentru resorturi și cluburi, operatori de închiriere și parteneri de retail.' },
    { url: '/ro/projects', title: '', excerpt: '' },
    { url: '/ro/knowledge', title: '', excerpt: '' },
    { url: '/ro/gallery', title: 'Galerie', excerpt: 'Galeria fabricii și a produselor iSupfactory: ateliere, laboratoare de calitate, teste de materiale și plăci SUP în producție.' },
  ],
  hu: [
    { url: '/hu', title: 'iSupfactory — Felfújható SUP deszkák OEM és ODM gyártása', excerpt: 'Felfújható SUP deszkák OEM/ODM-gyártója Qingdaoban: termékfejlesztés, egyedi gyártás, saját márka és minőségbiztosítás.' },
    { url: '/hu/products', title: 'Termékek: felfújható SUP deszkák', excerpt: 'Prémium felfújható SUP deszkák: 11 ft sorozat, horgász SUP, mini SUP, óriás csapatdeszkák és még sok más — OEM/ODM testreszabásra készítve.' },
    { url: '/hu/solutions', title: 'Megoldások', excerpt: 'OEM/ODM SUP-gyártási programok: egyedi SUP-fejlesztés, saját márka, resortokhoz és klubokhoz való flották, bérbeadó üzemeltetők és retail partnerek.' },
    { url: '/hu/projects', title: '', excerpt: '' },
    { url: '/hu/knowledge', title: '', excerpt: '' },
    { url: '/hu/gallery', title: 'Galéria', excerpt: 'Az iSupfactory gyárának és termékeinek galériája: műhelyek, minőségi laboratóriumok, szövetvizsgálatok és gyártásban lévő SUP deszkák.' },
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
  pl: 'Najczęściej zadawane pytania o produkcję OEM/ODM nadmuchiwanych desek SUP — materiały, certyfikacje, minimalne ilości zamówienia (MOQ) i sprzedaż hurtowa.',
  da: 'Ofte stillede spørgsmål om OEM/ODM-produktion af oppustelige SUP-bræt — materialer, certificeringer, minimumsordre (MOQ) og engros.',
  fi: 'Usein kysytyt kysymykset puhallettavien SUP-lautojen OEM/ODM-tuotannosta — materiaalit, sertifioinnit, minimitilaus (MOQ) ja tukkukauppa.',
  ru: 'Часто задаваемые вопросы о OEM/ODM-производстве надувных SUP-досок — материалы, сертификация, минимальный заказ (MOQ) и оптовая поставка.',
  cs: 'Často kladené dotazy o OEM/ODM výrobě nafukovacích SUP desek — materiály, certifikace, minimální objednávka (MOQ) a velkoobchodní dodávky.',
  tr: 'Şişirilebilir SUP OEM/ODM üretimi hakkında sıkça sorulan sorular — malzemeler, sertifikalar, minimum sipariş miktarı (MOQ) ve toptan tedarik.',
  ro: 'Întrebări frecvente despre producția OEM/ODM de plăci SUP gonflabile — materiale, certificări, cantități minime de comandă (MOQ) și livrări en gros.',
  hu: 'Gyakori kérdések a felfújható SUP deszkák OEM/ODM-gyártásáról — anyagok, tanúsítványok, minimális rendelési mennyiség (MOQ) és nagykereskedelmi szállítás.',
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
