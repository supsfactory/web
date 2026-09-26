import type { Locale } from '@/features/i18n/locale'
import type { Localized } from './content'

/**
 * Knowledge Center (/knowledge/*). Informational articles answer the
 * question-style queries around SUP product development and manufacturing —
 * the queries buyers research before ever reaching out.
 */

export interface KnowledgeArticle {
  slug: string
  navLabel: string
  metaTitle: string
  metaDescription: string
  kicker: string
  h1: string
  intro: string
  sections: { title: string; body: string[] }[]
}

export const knowledge: Localized<KnowledgeArticle[]> = {
  en: [
    {
      slug: 'how-custom-sup-boards-are-developed',
      navLabel: 'How Custom SUP Boards Are Developed',
      metaTitle: 'How Custom SUP Boards Are Developed | iSupfactory',
      metaDescription:
        'How a custom SUP moves from idea to factory: specification, design, prototyping, sampling and production — explained step by step.',
      kicker: 'Knowledge',
      h1: 'How Custom SUP Boards Are Developed',
      intro:
        'Before a custom paddle board ships to your customers, it travels a defined development path. Knowing each stage helps you brief the factory correctly, set realistic timelines, and avoid the classic mistakes first-time buyers make.',
      sections: [
        {
          title: 'Step 1: Define the Requirement',
          body: [
            'Every development project starts with the use case: who rides the board, where, and how often. A rental fleet board differs from a brand launch board or a school board — stability, durability and cost targets all shift with the answer.',
            'Write down quantity, target price, and must-have features before contacting a factory. Clear requirements produce better first quotes and shorter back-and-forth.',
          ],
        },
        {
          title: 'Step 2: Fix the Specification',
          body: [
            'The specification turns the requirement into measurable values: length, width, thickness, volume, materials (drop-stitch density, fabric weight), fin setup, weight limit, and packaging.',
            'This is the document that both sides quote against. Changes later in the process are slower and more expensive — a frozen spec is the cheapest thing you can control.',
          ],
        },
        {
          title: 'Step 3: Design and Graphics',
          body: [
            'With the spec fixed, design work begins: shape adjustments, color schemes, logo placement, deck pad graphics, and accessory matching (leash, paddle, fin, bag).',
            'Manufacturers can produce digital mockups so you approve the look before any physical sample is made — cheaper and faster than iterating on hardware.',
          ],
        },
        {
          title: 'Step 4: Prototype and Sample',
          body: [
            'The sample is the first physical proof. For inflatable boards this means a hand-built or pilot-run board that you can ride and test against the specification.',
            'Test the sample as your end user will: stability, stiffness, tracking, weight, and how the graphics hold up. One thorough sample round typically catches most issues before production.',
          ],
        },
        {
          title: 'Step 5: Production and Delivery',
          body: [
            'After sample approval, production runs in batches with QC checkpoints. Factory inspection before shipment — photos, videos or third-party inspection — protects the batch you receive.',
            'A good project schedule works backward from your launch date, not forward from the order.',
          ],
        },
      ],
    },
    {
      slug: 'inflatable-sup-construction-explained',
      navLabel: 'Inflatable SUP Construction Explained',
      metaTitle: 'Inflatable SUP Construction: Materials & Layers | iSupfactory',
      metaDescription:
        'What an inflatable SUP is made of — PVC layers, drop-stitch fabric, rails and quality indicators — to specify better boards for your project.',
      kicker: 'Knowledge',
      h1: 'Inflatable SUP Construction Explained',
      intro:
        'Most custom SUP projects today are inflatable boards. They are lighter, easier to store and ship, and more forgiving for beginners. This guide explains the construction so you can specify quality with confidence.',
      sections: [
        {
          title: 'The Core: Drop-Stitch Fabric',
          body: [
            'An inflatable board is built around drop-stitch fabric: thousands of polyester threads connecting the top and bottom PVC layers. When inflated, those threads keep the board at a fixed thickness — this is what gives an iSUP its shape and rigidity.',
            'Higher thread density (stitches per square inch) means a firmer, more stable board at the same pressure. Budget boards use lower densities; premium boards use higher ones.',
          ],
        },
        {
          title: 'PVC Layers and Rails',
          body: [
            'The fabric is sandwiched between PVC layers, which protect it from abrasion, UV and impacts. Heavier PVC (more mils or mm) resists punctures better but adds weight.',
            'The rails — the edges of the board — absorb the most impact in everyday use. Double- or triple-layer rail construction is a strong indicator of durability and rental suitability.',
          ],
        },
        {
          title: 'What Adds Weight vs. What Adds Strength',
          body: [
            'Weight is a trade-off: thicker PVC adds durability and weight; lighter layups suit riders who carry their boards far. This is one of the clearest ways a custom spec is tuned to the buyer\u2019s reality.',
            'Quality indicators to ask for: inflation pressure rating, seam construction, valve type, and the drop-stitch density. Reputable factories publish these numbers.',
          ],
        },
      ],
    },
    {
      slug: 'how-organizations-choose-sup-equipment',
      navLabel: 'How Organizations Choose SUP Equipment',
      metaTitle: 'How Resorts, Clubs and Schools Choose SUP Equipment',
      metaDescription:
        'How resorts, clubs and schools choose SUP equipment: fleet sizing, board types, durability, storage and budgeting for a program that lasts.',
      kicker: 'Knowledge',
      h1: 'How Organizations Choose SUP Equipment',
      intro:
        'Resorts, clubs and schools buy differently from consumer brands: equipment must survive daily use, serve mixed skill levels, and fit a program budget. This framework covers the decisions that matter.',
      sections: [
        {
          title: 'Size the Fleet Around Usage',
          body: [
            'Count how many riders will be on the water simultaneously, not how many guests you have. A resort renting in rotation needs fewer boards than a school running simultaneous classes — and more spares.',
            'A good rule of thumb: one board per simultaneous rider, plus 10–15% spare capacity for maintenance and growth.',
          ],
        },
        {
          title: 'Match Board Types to Skill Levels',
          body: [
            'Beginners benefit from wider, more voluminous boards that feel stable; experienced riders prefer narrower boards that paddle faster. A mixed fleet — mostly beginner-friendly with a few performance boards — serves most programs.',
            'Multi-person boards earn their place in schools and group experiences: they let instructors teach and can replace several single boards in class rotations.',
          ],
        },
        {
          title: 'Durability Is a Budget Decision',
          body: [
            'Rental-grade construction costs more upfront and saves money over two to three seasons. Ask about rail reinforcement, PVC thickness, and what warranty the factory provides on fleet orders.',
            'Also plan storage and inflation: compressors, racks, and packing routines set how much daily work the program is. Fleet-friendly suppliers include these in the package.',
          ],
        },
        {
          title: 'Plan the Program, Not Just the Order',
          body: [
            'The best equipment orders are part of a program plan: instructor training, maintenance routines, and a replacement cycle for worn boards. Organizations that plan the program renew equipment on schedule; those that don\u2019t buy emergency replacements at full price.',
          ],
        },
      ],
    },
  ],
  es: [
    {
      slug: 'how-custom-sup-boards-are-developed',
      navLabel: 'Cómo se desarrollan las tablas de SUP personalizadas',
      metaTitle: 'Cómo se desarrollan tablas de SUP personalizadas | iSupfactory',
      metaDescription:
        'Cómo pasa un producto SUP personalizado de la idea a la fábrica: requisitos, especificaciones, diseño, muestras y producción en serie — paso a paso.',
      kicker: 'Centro de conocimiento',
      h1: 'Cómo se desarrollan las tablas de SUP personalizadas',
      intro:
        'Antes de que tu tabla personalizada llegue a tu cliente, recorre una ruta de desarrollo clara. Comprender cada fase te permite comunicar bien tus requisitos a la fábrica, fijar plazos realistas y evitar los errores más comunes de las primeras compras.',
      sections: [
        {
          title: 'Paso 1: Define el requisito',
          body: [
            'Todo proyecto de desarrollo empieza por el caso de uso: quién usa la tabla, dónde y con qué frecuencia. Las flotas de alquiler, las tablas de lanzamiento de marca y las tablas escolares tienen requisitos distintos: la estabilidad, la durabilidad y el objetivo de coste cambian con cada uno.',
            'Antes de contactar con la fábrica, escribe la cantidad, el precio objetivo y las funciones imprescindibles. Un requisito claro consigue mejores cotizaciones en la primera ronda y ciclos de comunicación más cortos.',
          ],
        },
        {
          title: 'Paso 2: Fija las especificaciones',
          body: [
            'Las especificaciones convierten el requisito en números medibles: largo, ancho, grosor, volumen, materiales (densidad del tejido, gramaje de la lona), configuración de quillas, capacidad de peso y embalaje.',
            'Ambas partes cotizan sobre este documento. Cuanto más tarde cambies las especificaciones, más lento y caro será: congelar las especificaciones es tu palanca de ahorro más potente.',
          ],
        },
        {
          title: 'Paso 3: Diseño y arte',
          body: [
            'Con las especificaciones fijadas, llega el diseño: ajuste de la forma, colores, posición del logo, arte del piso y accesorios a juego (leash, remo, quillas, bolsa).',
            'La fábrica puede ofrecer renderizados digitales para confirmar el aspecto antes de fabricar la muestra física: más barato y rápido que iterar sobre el hardware.',
          ],
        },
        {
          title: 'Paso 4: Prototipo y muestra',
          body: [
            'La muestra es la primera prueba física. Las muestras de tablas hinchables suelen fabricarse a mano o en series pequeñas, así puedes probarlas en el agua y verificarlas contra las especificaciones.',
            'Prueba la muestra como lo haría un usuario final: estabilidad, rigidez, planeo en línea recta, peso y durabilidad del arte. Una buena ronda de aprobación de muestras descubre la mayoría de los problemas antes de la producción.',
          ],
        },
        {
          title: 'Paso 5: Producción y entrega',
          body: [
            'Con la muestra aprobada, la producción avanza por lotes con puntos de control de calidad. La inspección previa al envío — fotos, vídeo o verificación por terceros — protege la calidad del lote completo que recibes.',
            'Planifica la logística: la mayor parte del volumen viaja por mar; los pedidos urgentes y pequeños, por aire. Un buen plan de proyecto se calcula hacia atrás desde tu fecha de lanzamiento, no hacia delante desde la fecha del pedido.',
          ],
        },
      ],
    },
    {
      slug: 'inflatable-sup-construction-explained',
      navLabel: 'La estructura de los SUP hinchables, explicada',
      metaTitle: 'La estructura de los SUP hinchables: materiales y capas',
      metaDescription:
        'De qué está hecho un SUP hinchable: capas de PVC, tejido, rails e indicadores de calidad, para especificar mejores tablas en tu proyecto.',
      kicker: 'Centro de conocimiento',
      h1: 'La estructura de los SUP hinchables, explicada',
      intro:
        'La mayoría de los proyectos SUP personalizados actuales son hinchables. Son más ligeros, más fáciles de almacenar y transportar, y más amables con los principiantes. Este artículo desglosa su construcción para que especifiques calidad con confianza.',
      sections: [
        {
          title: 'El núcleo: la estructura de tejido',
          body: [
            'Los hinchables se construyen alrededor de una estructura de tejido: miles de hilos de poliéster unen las dos capas de PVC. Al inflar, esos hilos mantienen la tabla a un grosor fijo: así es como un iSUP gana su forma y su rigidez.',
            'Cuanto mayor es la densidad de hilos (puntadas por pulgada cuadrada), más rígida y estable es la tabla a la misma presión. Las tablas de entrada usan densidades más bajas; las premium, más altas.',
          ],
        },
        {
          title: 'Capas de PVC y rails',
          body: [
            'El tejido va intercalado entre capas de PVC que lo protegen de la abrasión, los rayos UV y los impactos. Un PVC más grueso resiste mejor los pinchazos, pero añade peso.',
            'Los rails son la zona que más impactos recibe en el uso diario. Una construcción de doble o triple capa en los rails es una señal fuerte de durabilidad y aptitud para alquiler.',
          ],
        },
        {
          title: 'Qué añade peso y qué añade resistencia',
          body: [
            'El peso es una compensación: un PVC más grueso aumenta la durabilidad y también el peso; las combinaciones ligeras sirven a quienes cargan la tabla durante largas distancias. Aquí es donde la especificación personalizada mejor se adapta a la realidad del comprador.',
            'Indicadores de calidad que vale la pena preguntar: presión de inflado nominal, construcción de las costuras, tipo de válvula y densidad del tejido. Las fábricas serias publican estas cifras.',
          ],
        },
      ],
    },
    {
      slug: 'how-organizations-choose-sup-equipment',
      navLabel: 'Cómo eligen las organizaciones el equipamiento SUP',
      metaTitle: 'Cómo eligen el equipamiento SUP resorts, clubes y escuelas',
      metaDescription:
        'Cómo elegir equipamiento SUP para resorts, clubes y escuelas: tamaño de la flota, tipos de tabla, durabilidad, almacenamiento y presupuesto.',
      kicker: 'Centro de conocimiento',
      h1: 'Cómo eligen las organizaciones el equipamiento SUP',
      intro:
        'Resorts, clubes y escuelas compran distinto a las marcas de consumo: el equipamiento debe aguantar el uso diario, servir a niveles mixtos y encajar en un presupuesto de programa. Este marco cubre las decisiones que importan.',
      sections: [
        {
          title: 'Dimensiona la flota según el uso',
          body: [
            'Cuenta cuántos remadores estarán en el agua a la vez, no cuántos huéspedes tienes. Un resort que alquila en rotación necesita menos tablas que una escuela con clases simultáneas — y más de repuesto.',
            'Una buena regla: una tabla por remador simultáneo, más un 10–15% de capacidad extra para mantenimiento y crecimiento.',
          ],
        },
        {
          title: 'Ajusta los tipos de tabla a los niveles',
          body: [
            'Los principiantes se benefician de tablas más anchas y voluminosas que resultan estables; los remadores experimentados prefieren tablas más estrechas que reman más rápido. Una flota mixta — sobre todo apta para principiantes, con unas pocas tablas de rendimiento — sirve a la mayoría de los programas.',
            'Las tablas multiusuario valen su lugar en escuelas y experiencias grupales: permiten enseñar y pueden sustituir a varias tablas individuales en las rotaciones de clase.',
          ],
        },
        {
          title: 'La durabilidad es una decisión de presupuesto',
          body: [
            'La construcción de grado alquiler cuesta más por adelantado y ahorra dinero a lo largo de dos o tres temporadas. Pregunta por el refuerzo de los rails, el grosor del PVC y la garantía que ofrece la fábrica en los pedidos de flota.',
            'También planifica almacenamiento e inflado: compresores, estanterías y rutinas de embalaje determinan el trabajo diario del programa. Los proveedores orientados a flotas incluyen esto en el paquete.',
          ],
        },
        {
          title: 'Planifica el programa, no solo el pedido',
          body: [
            'Los mejores pedidos de equipamiento forman parte de un plan de programa: formación de instructores, rutinas de mantenimiento y un ciclo de sustitución para las tablas desgastadas. Las organizaciones que planifican el programa renuevan el equipamiento según calendario; las que no, compran sustituciones de emergencia a precio completo.',
          ],
        },
      ],
    },
  ],
  fr: [
    {
      slug: 'how-custom-sup-boards-are-developed',
      navLabel: 'Comment les planches de SUP personnalisées sont développées',
      metaTitle: 'Comment les planches de SUP personnalisées sont développées | iSupfactory',
      metaDescription:
        "Comment un SUP personnalisé passe de l'idée à l'usine : spécifications, design, prototypage, échantillonnage et production — expliqué étape par étape.",
      kicker: 'Connaissances',
      h1: 'Comment les planches de SUP personnalisées sont développées',
      intro:
        "Avant qu'un paddle board personnalisé ne soit expédié à vos clients, il suit un parcours de développement bien défini. Connaître chaque étape permet de brief correctement l'usine, de fixer des délais réalistes et d'éviter les erreurs classiques des premiers acheteurs.",
      sections: [
        {
          title: 'Étape 1 : Définir le besoin',
          body: [
            "Chaque projet de développement commence par l'usage : qui utilise la planche, où et à quelle fréquence. Une planche pour parc de location diffère d'une planche de lancement de marque ou d'une planche scolaire — les objectifs de stabilité, de durabilité et de coût changent tous avec la réponse.",
            "Notez la quantité, le prix cible et les caractéristiques indispensables avant de contacter une usine. Des besoins clairs produisent de meilleurs premiers devis et réduisent les allers-retours.",
          ],
        },
        {
          title: 'Étape 2 : Fixer la spécification',
          body: [
            "La spécification transforme le besoin en valeurs mesurables : longueur, largeur, épaisseur, volume, matériaux (densité du tissu, grammage), configuration des ailerons, charge maximale et emballage.",
            "C'est le document sur lequel les deux parties font leur devis. Les modifications plus tard dans le processus sont plus lentes et plus coûteuses — une spécification figée est la chose la moins chère que vous puissiez contrôler.",
          ],
        },
        {
          title: 'Étape 3 : Design et graphismes',
          body: [
            "Une fois la spécification fixée, le travail de design commence : ajustements de forme, schémas de couleurs, placement du logo, graphismes du deck pad et choix des accessoires assortis (leash, pagaie, aileron, sac).",
            "Les fabricants peuvent produire des maquettes numériques pour que vous approuviez le rendu avant qu'aucun échantillon physique ne soit fabriqué — plus économique et plus rapide que d'itérer sur le matériel.",
          ],
        },
        {
          title: 'Étape 4 : Prototype et échantillon',
          body: [
            "L'échantillon est la première preuve physique. Pour les planches gonflables, cela signifie une planche fabriquée à la main ou issue d'un pilote que vous pouvez utiliser et tester par rapport à la spécification.",
            "Testez l'échantillon comme le ferait votre utilisateur final : stabilité, rigidité, tenue de cap, poids et résistance des graphismes. Un cycle d'échantillonnage approfondi permet généralement de détecter la plupart des problèmes avant la production.",
          ],
        },
        {
          title: 'Étape 5 : Production et livraison',
          body: [
            "Après approbation de l'échantillon, la production se déroule par lots avec des points de contrôle qualité. L'inspection en usine avant expédition — photos, vidéos ou inspection par un tiers — protège le lot que vous recevez.",
            "Un bon calendrier de projet se calcule à rebours depuis votre date de lancement, et non pas en avant depuis la commande.",
          ],
        },
      ],
    },
    {
      slug: 'inflatable-sup-construction-explained',
      navLabel: 'La construction des SUP gonflables, expliquée',
      metaTitle: 'Construction des SUP gonflables : matériaux et couches | iSupfactory',
      metaDescription:
        "De quoi est fait un SUP gonflable — couches de PVC, tissu drop-stitch, boudins et indicateurs de qualité — pour mieux spécifier vos planches de projet.",
      kicker: 'Connaissances',
      h1: 'La construction des SUP gonflables, expliquée',
      intro:
        "La plupart des projets SUP personnalisés actuels sont des planches gonflables. Elles sont plus légères, plus faciles à stocker et à expédier, et plus indulgentes pour les débutants. Ce guide explique leur construction afin que vous puissiez spécifier la qualité en toute confiance.",
      sections: [
        {
          title: 'Le cœur : le tissu drop-stitch',
          body: [
            "Une planche gonflable est construite autour d'un tissu drop-stitch : des milliers de fils de polyester relient les couches de PVC supérieure et inférieure. Une fois gonflés, ces fils maintiennent la planche à une épaisseur fixe — c'est ce qui donne à un iSUP sa forme et sa rigidité.",
            "Une densité de fils plus élevée (points par pouce carré) signifie une planche plus ferme et plus stable à pression égale. Les planches d'entrée de gamme utilisent des densités plus faibles ; les planches haut de gamme, des densités plus élevées.",
          ],
        },
        {
          title: 'Couches de PVC et boudins',
          body: [
            "Le tissu est pris en sandwich entre des couches de PVC, qui le protègent contre l'abrasion, les UV et les chocs. Un PVC plus épais (plus de mils ou de mm) résiste mieux aux perforations, mais ajoute du poids.",
            "Les boudins — les bords de la planche — absorbent le plus de chocs en usage quotidien. Une construction à double ou triple épaisseur des boudins est un indicateur fort de durabilité et de convenance à la location.",
          ],
        },
        {
          title: "Ce qui ajoute du poids contre ce qui ajoute de la résistance",
          body: [
            "Le poids est un compromis : un PVC plus épais ajoute de la durabilité et du poids ; les stratifications plus légères conviennent aux pratiquants qui transportent leur planche loin. C'est l'un des moyens les plus clairs par lesquels une spécification personnalisée est adaptée à la réalité de l'acheteur.",
            "Indicateurs de qualité à demander : pression d'inflation nominale, construction des coutures, type de valve et densité du drop-stitch. Les usines réputées publient ces chiffres.",
          ],
        },
      ],
    },
    {
      slug: 'how-organizations-choose-sup-equipment',
      navLabel: 'Comment les organisations choisissent leur équipement SUP',
      metaTitle: 'Comment les resorts, clubs et écoles choisissent leur équipement SUP',
      metaDescription:
        "Comment les resorts, clubs et écoles choisissent leur équipement SUP : dimensionnement de la flotte, types de planches, durabilité, stockage et budget pour un programme durable.",
      kicker: 'Connaissances',
      h1: 'Comment les organisations choisissent leur équipement SUP',
      intro:
        "Les resorts, clubs et écoles achètent différemment des marques grand public : l'équipement doit supporter un usage quotidien, convenir à des niveaux variés et s'adapter au budget du programme. Ce cadre couvre les décisions qui comptent.",
      sections: [
        {
          title: 'Dimensionner la flotte selon l\u2019usage',
          body: [
            "Comptez combien de pratiquants seront sur l'eau en même temps, et non combien de clients vous avez. Un resort qui loue en rotation a besoin de moins de planches qu'une école qui organise des cours simultanés — et plus de pièces de rechange.",
            "Une bonne règle empirique : une planche par pratiquant simultané, plus 10–15 % de capacité de réserve pour la maintenance et la croissance.",
          ],
        },
        {
          title: 'Adapter les types de planches aux niveaux',
          body: [
            "Les débutants profitent de planches plus larges et plus volumineuses qui paraissent stables ; les pratiquants expérimentés préfèrent des planches plus étroites qui pagayent plus vite. Une flotte mixte — principalement adaptée aux débutants, avec quelques planches de performance — convient à la plupart des programmes.",
            "Les planches multi-personnes ont toute leur place dans les écoles et les expériences de groupe : elles permettent aux instructeurs d'enseigner et peuvent remplacer plusieurs planches individuelles lors des rotations de cours.",
          ],
        },
        {
          title: 'La durabilité est une décision budgétaire',
          body: [
            "Une construction de qualité location coûte plus cher à l'achat mais permet d'économiser sur deux à trois saisons. Renseignez-vous sur le renforcement des boudins, l'épaisseur du PVC et la garantie que l'usine offre sur les commandes de flotte.",
            "Prévoyez aussi le stockage et le gonflage : compresseurs, râteliers et routines de rangement déterminent la charge de travail quotidienne du programme. Les fournisseurs orientés flotte incluent tout cela dans le package.",
          ],
        },
        {
          title: 'Planifier le programme, pas seulement la commande',
          body: [
            "Les meilleures commandes d'équipement s'inscrivent dans un plan de programme : formation des instructeurs, routines de maintenance et cycle de remplacement des planches usées. Les organisations qui planifient le programme renouvellent leur équipement selon le calendrier ; celles qui ne le font pas achètent des remplacements d'urgence à plein tarif.",
          ],
        },
      ],
    },
  ],
  de: [
    {
      slug: 'how-custom-sup-boards-are-developed',
      navLabel: 'Wie maßgefertigte SUP-Boards entwickelt werden',
      metaTitle: 'Wie maßgefertigte SUP-Boards entwickelt werden | iSupfactory',
      metaDescription:
        'So entsteht ein individuelles SUP von der Idee bis zur Fabrik: Spezifikation, Design, Prototyp, Muster und Produktion — Schritt für Schritt erklärt.',
      kicker: 'Wissen',
      h1: 'Wie maßgefertigte SUP-Boards entwickelt werden',
      intro:
        'Bevor ein individuelles Paddelboard zu Ihren Kunden ausgeliefert wird, durchläuft es einen klar definierten Entwicklungsprozess. Wer jede Phase kennt, brief die Fabrik richtig, setzt realistische Zeitpläne und vermeidet die klassischen Fehler von Erstkäufern.',
      sections: [
        {
          title: 'Schritt 1: Die Anforderung definieren',
          body: [
            'Jedes Entwicklungsprojekt beginnt mit dem Einsatzszenario: Wer fährt das Board, wo und wie häufig? Ein Board für eine Verleihflotte unterscheidet sich von einem Board für einen Marken-Launch oder für eine Schule — Stabilität, Langlebigkeit und Kostenvorgaben hängen direkt von der Antwort ab.',
            'Halten Sie Menge, Zielpreis und unverzichtbare Eigenschaften fest, bevor Sie eine Fabrik kontaktieren. Klare Anforderungen führen zu besseren ersten Angeboten und weniger Hin und Her.',
          ],
        },
        {
          title: 'Schritt 2: Die Spezifikation festlegen',
          body: [
            'Die Spezifikation überführt die Anforderung in messbare Werte: Länge, Breite, Dicke, Volumen, Materialien (Drop-Stitch-Dichte, Stoffgewicht), Finnen-Konfiguration, Gewichtslimit und Verpackung.',
            'Das ist das Dokument, auf dessen Basis beide Seiten kalkulieren. Spätere Änderungen sind langsamer und teurer — eine eingefrorene Spezifikation ist das günstigste Mittel, das Sie kontrollieren können.',
          ],
        },
        {
          title: 'Schritt 3: Design und Grafiken',
          body: [
            'Mit festgelegter Spezifikation beginnt die Designarbeit: Formanpassungen, Farbkonzepte, Logo-Platzierung, Deckpad-Grafiken und abgestimmtes Zubehör (Leash, Paddel, Finne, Tasche).',
            'Hersteller können digitale Mockups erstellen, damit Sie das Aussehen freigeben, bevor ein physisches Muster gefertigt wird — günstiger und schneller als mehrere Hardware-Runden.',
          ],
        },
        {
          title: 'Schritt 4: Prototyp und Muster',
          body: [
            'Das Muster ist der erste physische Nachweis. Bei aufblasbaren Boards bedeutet das ein handgefertigtes Board oder ein Board aus einer Pilot-Produktion, das Sie fahren und gegen die Spezifikation testen können.',
            'Testen Sie das Muster so, wie es Ihre Endkunden tun würden: Stabilität, Steifigkeit, Kurshaltung, Gewicht und Haltbarkeit der Grafiken. Eine gründliche Musterrunde deckt in der Regel die meisten Probleme vor der Produktion auf.',
          ],
        },
        {
          title: 'Schritt 5: Produktion und Lieferung',
          body: [
            'Nach der Musterfreigabe läuft die Produktion in Chargen mit Qualitätskontroll-Punkten. Eine Werksprüfung vor dem Versand — Fotos, Videos oder eine Prüfung durch Dritte — schützt die Charge, die Sie erhalten.',
            'Ein guter Projektplan wird von Ihrem Starttermin rückwärts gerechnet und nicht vom Auftrag aus vorwärts.',
          ],
        },
      ],
    },
    {
      slug: 'inflatable-sup-construction-explained',
      navLabel: 'Die Konstruktion aufblasbarer SUP-Boards erklärt',
      metaTitle: 'Konstruktion aufblasbarer SUP-Boards: Materialien und Schichten | iSupfactory',
      metaDescription:
        'Aus welchen Bestandteilen ein aufblasbares SUP besteht — PVC-Schichten, Drop-Stitch-Gewebe, Rails und Qualitätsmerkmale — um für Ihr Projekt bessere Boards zu spezifizieren.',
      kicker: 'Wissen',
      h1: 'Die Konstruktion aufblasbarer SUP-Boards erklärt',
      intro:
        'Die meisten aktuellen Custom-SUP-Projekte sind aufblasbare Boards. Sie sind leichter, einfacher zu lagern und zu versenden und verzeihen Anfängern mehr Fehler. Dieser Leitfaden erklärt die Konstruktion, damit Sie Qualität mit Sicherheit spezifizieren.',
      sections: [
        {
          title: 'Der Kern: Drop-Stitch-Gewebe',
          body: [
            'Ein aufblasbares Board ist um ein Drop-Stitch-Gewebe herum gebaut: Tausende Polyesterfäden verbinden die obere und die untere PVC-Schicht. Wenn das Board aufgepumpt ist, halten diese Fäden es auf einer festen Dicke — so erhält ein iSUP seine Form und Steifigkeit.',
            'Eine höhere Fadendichte (Stiche pro Quadratzoll) bedeutet bei gleichem Druck ein festeres, stabileres Board. Günstigere Boards verwenden geringere Dichten, Premium-Boards höhere.',
          ],
        },
        {
          title: 'PVC-Schichten und Rails',
          body: [
            'Das Gewebe liegt zwischen PVC-Schichten, die es vor Abrieb, UV-Strahlung und Stößen schützen. Schwereres PVC (mehr Mils oder mm) widersteht Stichen besser, erhöht aber das Gewicht.',
            'Die Rails — die Kanten des Boards — nehmen im Alltag die meisten Stöße auf. Eine Rail-Konstruktion in zwei oder drei Lagen ist ein starkes Zeichen für Langlebigkeit und Verleihtauglichkeit.',
          ],
        },
        {
          title: 'Was Gewicht hinzufügt — und was Festigkeit',
          body: [
            'Das Gewicht ist ein Kompromiss: Dickeres PVC erhöht Langlebigkeit und Gewicht; leichtere Layups eignen sich für Rider, die ihre Boards weit tragen. Das ist einer der deutlichsten Punkte, an denen eine individuelle Spezifikation auf die Realität des Käufers zugeschnitten wird.',
            'Qualitätsmerkmale, nach denen Sie fragen sollten: angegebener Fülldruck, Nahtkonstruktion, Ventiltyp und Drop-Stitch-Dichte. Seriöse Fabriken veröffentlichen diese Zahlen.',
          ],
        },
      ],
    },
    {
      slug: 'how-organizations-choose-sup-equipment',
      navLabel: 'Wie Organisationen SUP-Ausrüstung auswählen',
      metaTitle: 'Wie Resorts, Clubs und Schulen SUP-Ausrüstung auswählen',
      metaDescription:
        'Wie Resorts, Clubs und Schulen SUP-Ausrüstung auswählen: Flottengröße, Board-Typen, Langlebigkeit, Lagerung und Budget für ein nachhaltiges Programm.',
      kicker: 'Wissen',
      h1: 'Wie Organisationen SUP-Ausrüstung auswählen',
      intro:
        'Resorts, Clubs und Schulen kaufen anders ein als Konsummarken: Die Ausrüstung muss tägliche Nutzung überstehen, unterschiedliche Könnensstufen abdecken und in ein Programm-Budget passen. Dieser Rahmen behandelt die Entscheidungen, die zählen.',
      sections: [
        {
          title: 'Die Flotte am Einsatzzweck ausrichten',
          body: [
            'Zählen Sie, wie viele Rider gleichzeitig auf dem Wasser sind — nicht, wie viele Gäste Sie haben. Ein Resort, das im Rotationsprinzip verleiht, braucht weniger Boards als eine Schule mit parallelen Kursen — und mehr Reserven.',
            'Eine gute Faustregel: ein Board pro gleichzeitigem Rider plus 10–15 % Reserve für Wartung und Wachstum.',
          ],
        },
        {
          title: 'Board-Typen an die Könnensstufen anpassen',
          body: [
            'Anfänger profitieren von breiteren, voluminöseren Boards, die sich stabil anfühlen; erfahrene Rider bevorzugen schmalere Boards, die schneller paddeln. Eine Mischflotte — überwiegend anfängergeeignet mit einigen Performance-Boards — deckt die meisten Programme ab.',
            'Mehrpersonen-Boards haben in Schulen und Gruppenangeboten ihren festen Platz: Sie ermöglichen Unterricht durch Instruktoren und können in Kursrotationen mehrere Einzel-Boards ersetzen.',
          ],
        },
        {
          title: 'Langlebigkeit ist eine Budgetentscheidung',
          body: [
            'Eine verleihtaugliche Konstruktion kostet am Anfang mehr und spart über zwei bis drei Saisons Geld. Fragen Sie nach Rail-Verstärkung, PVC-Dicke und der Garantie, die die Fabrik für Flottenaufträge gewährt.',
            'Planen Sie auch Lagerung und Aufpumpen ein: Kompressoren, Gestelle und Verpackungsroutinen bestimmen den täglichen Arbeitsaufwand des Programms. Flottenorientierte Lieferanten beziehen dies in das Paket ein.',
          ],
        },
        {
          title: 'Das Programm planen, nicht nur den Auftrag',
          body: [
            'Die besten Ausrüstungsaufträge sind Teil eines Programmplans: Instruktorenschulung, Wartungsroutinen und ein Ersatzzyklus für abgenutzte Boards. Organisationen, die das Programm planen, erneuern ihre Ausrüstung planmäßig; die anderen kaufen Notfall-Ersatz zum vollen Preis.',
          ],
        },
      ],
    },
  ],
  it: [
    {
      slug: 'how-custom-sup-boards-are-developed',
      navLabel: 'Come vengono sviluppati i SUP personalizzati',
      metaTitle: 'Come vengono sviluppati i SUP personalizzati | iSupfactory',
      metaDescription:
        "Come un SUP personalizzato passa dall\u2019idea alla fabbrica: specifiche, design, prototipazione, campioni e produzione — spiegato passo dopo passo.",
      kicker: 'Conoscenza',
      h1: 'Come vengono sviluppati i SUP personalizzati',
      intro:
        'Prima che un paddleboard personalizzato venga spedito ai tuoi clienti, percorre un percorso di sviluppo ben definito. Conoscere ogni fase ti consente di impostare correttamente la richiesta in fabbrica, fissare tempi realistici ed evitare gli errori classici di chi acquista per la prima volta.',
      sections: [
        {
          title: 'Fase 1: definire il fabbisogno',
          body: [
            "Ogni progetto di sviluppo inizia dal caso d\u2019uso: chi usa la tavola, dove e con quale frequenza. Una tavola per una flotta di noleggio è diversa da una tavola per un lancio di marca o per una scuola: stabilità, durata e obiettivi di costo cambiano tutti in base alla risposta.",
            'Annota quantità, prezzo obiettivo e caratteristiche imprescindibili prima di contattare una fabbrica. Requisiti chiari producono preventivi migliori già al primo giro e meno andirivieni.',
          ],
        },
        {
          title: 'Fase 2: fissare le specifiche',
          body: [
            'Le specifiche trasformano i requisiti in valori misurabili: lunghezza, larghezza, spessore, volume, materiali (densità del drop-stitch, grammatura del tessuto), configurazione delle pinne, limite di peso e imballo.',
            'È il documento sulla base del quale entrambe le parti calcolano i costi. Le modifiche in un secondo momento sono più lente e più costose: una specifica congelata è lo strumento più economico che puoi controllare.',
          ],
        },
        {
          title: 'Fase 3: design e grafiche',
          body: [
            'A specifiche fissate, inizia il lavoro di design: regolazioni della forma, combinazioni di colori, posizionamento del logo, grafiche del deck pad e accessori coordinati (leash, pagaia, pinna, borsa).',
            "I produttori possono realizzare mockup digitali per farti approvare l\u2019aspetto prima di produrre un qualsiasi campione fisico: più economico e più rapido che iterare sull\u2019hardware.",
          ],
        },
        {
          title: 'Fase 4: prototipo e campione',
          body: [
            'Il campione è la prima prova fisica. Per le tavole gonfiabili significa una tavola realizzata a mano o proveniente da una produzione pilota, che puoi provare e testare rispetto alle specifiche.',
            'Testa il campione come farebbe il tuo utente finale: stabilità, rigidità, tenuta di rotta, peso e resa delle grafiche. Un ciclo di campionamento approfondito di norma individua la maggior parte dei problemi prima della produzione.',
          ],
        },
        {
          title: 'Fase 5: produzione e consegna',
          body: [
            "Dopo l\u2019approvazione del campione, la produzione procede a lotti con checkpoint di controllo qualità. L\u2019ispezione in fabbrica prima della spedizione — foto, video o ispezione di terze parti — protegge il lotto che ricevi.",
            "Un buon piano di progetto si calcola a ritroso dalla data di lancio, non in avanti dalla data dell\u2019ordine.",
          ],
        },
      ],
    },
    {
      slug: 'inflatable-sup-construction-explained',
      navLabel: 'La costruzione dei SUP gonfiabili, spiegata',
      metaTitle: 'Costruzione dei SUP gonfiabili: materiali e strati | iSupfactory',
      metaDescription:
        'Di cosa è fatto un SUP gonfiabile — strati di PVC, tessuto drop-stitch, rails e indicatori di qualità — per specificare tavole migliori per il tuo progetto.',
      kicker: 'Conoscenza',
      h1: 'La costruzione dei SUP gonfiabili, spiegata',
      intro:
        'La maggior parte dei progetti SUP personalizzati di oggi sono tavole gonfiabili. Sono più leggere, più facili da immagazzinare e spedire e più indulgenti con i principianti. Questa guida spiega la costruzione, così puoi specificare la qualità con sicurezza.',
      sections: [
        {
          title: 'Il cuore: il tessuto drop-stitch',
          body: [
            'Una tavola gonfiabile è costruita attorno a un tessuto drop-stitch: migliaia di fili di poliestere collegano lo strato di PVC superiore e quello inferiore. Quando è gonfiata, questi fili mantengono la tavola a uno spessore fisso — è ciò che dà a un iSUP forma e rigidità.',
            'Una densità di fili più elevata (punti per pollice quadrato) significa una tavola più rigida e stabile a parità di pressione. Le tavole economiche usano densità inferiori; quelle premium, densità superiori.',
          ],
        },
        {
          title: 'Strati di PVC e rails',
          body: [
            'Il tessuto è interposto tra strati di PVC, che lo proteggono da abrasioni, raggi UV e urti. Un PVC più pesante (più mils o mm) resiste meglio alle forature ma aumenta il peso.',
            "I rails — i bordi della tavola — assorbono il maggior numero di urti nell\u2019uso quotidiano. Una costruzione dei rails a doppio o triplo strato è un forte indicatore di durata e idoneità al noleggio.",
          ],
        },
        {
          title: 'Cosa aggiunge peso — e cosa aggiunge resistenza',
          body: [
            'Il peso è un compromesso: un PVC più spesso aumenta durata e peso; le stratificazioni più leggere si adattano ai rider che trasportano le tavole per lunghe distanze. È uno dei punti in cui una specifica personalizzata viene calibrata sulla realtà del compratore.',
            'Indicatori di qualità da richiedere: pressione di gonfiaggio nominale, costruzione delle cuciture, tipo di valvola e densità del drop-stitch. Le fabbriche serie pubblicano questi numeri.',
          ],
        },
      ],
    },
    {
      slug: 'how-organizations-choose-sup-equipment',
      navLabel: "Come le organizzazioni scelgono l\u2019attrezzatura SUP",
      metaTitle: "Come resort, club e scuole scelgono l\u2019attrezzatura SUP",
      metaDescription:
        "Come resort, club e scuole scelgono l\u2019attrezzatura SUP: dimensionamento della flotta, tipi di tavola, durata, stoccaggio e budget per un programma che duri nel tempo.",
      kicker: 'Conoscenza',
      h1: "Come le organizzazioni scelgono l\u2019attrezzatura SUP",
      intro:
        "Resort, club e scuole acquistano in modo diverso dai marchi di consumo: l\u2019attrezzatura deve reggere l\u2019uso quotidiano, servire diversi livelli di abilità e rientrare nel budget del programma. Questo quadro copre le decisioni che contano.",
      sections: [
        {
          title: "Dimensionare la flotta in base all\u2019utilizzo",
          body: [
            "Conta quanti rider saranno sull\u2019acqua contemporaneamente, non quanti ospiti hai. Un resort che noleggia a rotazione ha bisogno di meno tavole di una scuola con corsi simultanei — e di più ricambi.",
            'Una buona regola pratica: una tavola per ogni rider simultaneo, più una riserva del 10–15 % per manutenzione e crescita.',
          ],
        },
        {
          title: 'Abbinare i tipi di tavola ai livelli di abilità',
          body: [
            'I principianti traggono beneficio da tavole più larghe e voluminose che risultano stabili; i rider esperti preferiscono tavole più strette che pagaiano più velocemente. Una flotta mista — prevalentemente adatta ai principianti con alcune tavole performance — copre la maggior parte dei programmi.',
            'Le tavole multiposto hanno il loro posto nelle scuole e nelle esperienze di gruppo: consentono agli istruttori di insegnare e possono sostituire più tavole singole nelle rotazioni dei corsi.',
          ],
        },
        {
          title: 'La durata è una decisione di budget',
          body: [
            "Una costruzione adatta al noleggio costa di più all\u2019inizio e fa risparmiare nel corso di due o tre stagioni. Chiedi informazioni sul rinforzo dei rails, sullo spessore del PVC e sulla garanzia che la fabbrica offre per gli ordini di flotta.",
            'Prevedi anche stoccaggio e gonfiaggio: compressori, cavalletti e routine di imballaggio determinano il carico di lavoro quotidiano del programma. I fornitori orientati alle flotte includono tutto questo nel pacchetto.',
          ],
        },
        {
          title: "Pianificare il programma, non solo l\u2019ordine",
          body: [
            "I migliori ordini di attrezzatura fanno parte di un piano di programma: formazione degli istruttori, routine di manutenzione e un ciclo di sostituzione per le tavole usurate. Le organizzazioni che pianificano il programma rinnovano l\u2019attrezzatura secondo scadenze prestabilite; le altre comprano sostituzioni di emergenza a prezzo pieno.",
          ],
        },
      ],
    },
  ],
  pt: [
    {
      slug: 'how-custom-sup-boards-are-developed',
      navLabel: 'Como são desenvolvidos os SUP personalizados',
      metaTitle: 'Como são desenvolvidos os SUP personalizados | iSupfactory',
      metaDescription:
        'Como um SUP personalizado passa da ideia à fábrica: especificações, design, prototipagem, amostras e produção — explicado passo a passo.',
      kicker: 'Conhecimento',
      h1: 'Como são desenvolvidos os SUP personalizados',
      intro:
        'Antes de uma prancha personalizada ser enviada aos teus clientes, percorre um caminho de desenvolvimento bem definido. Conhecer cada fase permite-te enquadrar corretamente o pedido à fábrica, definir prazos realistas e evitar os erros clássicos de quem compra pela primeira vez.',
      sections: [
        {
          title: 'Fase 1: definir a necessidade',
          body: [
            'Cada projeto de desenvolvimento começa pelo caso de utilização: quem usa a prancha, onde e com que frequência. Uma prancha para uma frota de aluguer é diferente de uma prancha para um lançamento de marca ou para uma escola: estabilidade, durabilidade e objetivos de custo mudam todos consoante a resposta.',
            'Anota quantidades, preço-alvo e características indispensáveis antes de contactares uma fábrica. Requisitos claros produzem melhores orçamentos logo na primeira ronda e menos idas e vindas.',
          ],
        },
        {
          title: 'Fase 2: fixar as especificações',
          body: [
            'As especificações transformam os requisitos em valores mensuráveis: comprimento, largura, espessura, volume, materiais (densidade do drop-stitch, gramagem do tecido), configuração das aletas, limite de peso e embalagem.',
            'É o documento com base no qual ambas as partes calculam os custos. As alterações posteriores são mais lentas e mais caras: uma especificação congelada é a ferramenta mais económica que tens à tua disposição.',
          ],
        },
        {
          title: 'Fase 3: design e gráficas',
          body: [
            'Com as especificações definidas, começa o trabalho de design: ajustes de forma, combinações de cores, posicionamento do logótipo, gráficas do pad do deck e acessórios coordenados (leash, pá, aleta, bolsa).',
            'Os fabricantes podem criar mockups digitais para aprovares o aspeto antes de produzir qualquer amostra física: mais económico e mais rápido do que iterar sobre o hardware.',
          ],
        },
        {
          title: 'Fase 4: protótipo e amostra',
          body: [
            'A amostra é a primeira prova física. Para pranchas insufláveis significa uma prancha feita à mão ou proveniente de uma produção piloto, que podes experimentar e testar face às especificações.',
            'Testa a amostra como faria o teu utilizador final: estabilidade, rigidez, alinhamento, peso e resultado das gráficas. Um ciclo de amostragem aprofundado normalmente deteta a maioria dos problemas antes da produção.',
          ],
        },
        {
          title: 'Fase 5: produção e entrega',
          body: [
            'Após a aprovação da amostra, a produção avança em lotes com pontos de verificação de controlo de qualidade. A inspeção em fábrica antes do envio — fotos, vídeo ou inspeção por terceiros — protege o lote que recebes.',
            'Um bom plano de projeto calcula-se a partir da data de lançamento para trás, não para a frente a partir da data do pedido.',
          ],
        },
      ],
    },
    {
      slug: 'inflatable-sup-construction-explained',
      navLabel: 'A construção dos SUP insufláveis, explicada',
      metaTitle: 'Construção dos SUP insufláveis: materiais e camadas | iSupfactory',
      metaDescription:
        'Do que é feito um SUP insuflável — camadas de PVC, tecido drop-stitch, rails e indicadores de qualidade — para especificar melhores pranchas para o teu projeto.',
      kicker: 'Conhecimento',
      h1: 'A construção dos SUP insufláveis, explicada',
      intro:
        'A maioria dos projetos SUP personalizados de hoje são pranchas insufláveis. São mais leves, mais fáceis de arrumar e enviar e mais tolerantes para iniciantes. Este guia explica a construção, para que possas especificar a qualidade com confiança.',
      sections: [
        {
          title: 'O coração: o tecido drop-stitch',
          body: [
            'Uma prancha insuflável é construída em torno de um tecido drop-stitch: milhares de fios de poliéster ligam a camada de PVC superior e a inferior. Quando insuflada, esses fios mantêm a prancha a uma espessura fixa — é isso que dá a um iSUP forma e rigidez.',
            'Uma densidade de fios mais elevada (pontos por polegada quadrada) significa uma prancha mais rígida e estável à mesma pressão. As pranchas económicas usam densidades inferiores; as premium, densidades superiores.',
          ],
        },
        {
          title: 'Camadas de PVC e rails',
          body: [
            'O tecido é interposto entre camadas de PVC, que o protegem de abrasões, raios UV e impactos. Um PVC mais pesado (mais mils ou mm) resiste melhor a perfurações mas aumenta o peso.',
            'Os rails — os bordos da prancha — absorvem a maioria dos impactos no uso diário. Uma construção dos rails de dupla ou tripla camada é um forte indicador de durabilidade e de aptidão para o aluguer.',
          ],
        },
        {
          title: 'O que acrescenta peso — e o que acrescenta resistência',
          body: [
            'O peso é um compromisso: um PVC mais espesso aumenta durabilidade e peso; as laminações mais leves adequam-se a praticantes que transportam as pranchas por longas distâncias. É um dos pontos em que uma especificação personalizada se calibra com a realidade do comprador.',
            'Indicadores de qualidade a exigir: pressão de insuflação nominal, construção das costuras, tipo de válvula e densidade do drop-stitch. As fábricas sérias publicam estes números.',
          ],
        },
      ],
    },
    {
      slug: 'how-organizations-choose-sup-equipment',
      navLabel: 'Como as organizações escolhem o equipamento SUP',
      metaTitle: 'Como resorts, clubes e escolas escolhem o equipamento SUP',
      metaDescription:
        'Como resorts, clubes e escolas escolhem o equipamento SUP: dimensionamento da frota, tipos de prancha, durabilidade, arrumação e orçamento para um programa que dure no tempo.',
      kicker: 'Conhecimento',
      h1: 'Como as organizações escolhem o equipamento SUP',
      intro:
        'Resorts, clubes e escolas compram de forma diferente das marcas de consumo: o equipamento tem de aguentar o uso diário, servir vários níveis de aptidão e caber no orçamento do programa. Este panorama cobre as decisões que contam.',
      sections: [
        {
          title: 'Dimensionar a frota em função da utilização',
          body: [
            'Conta quantos praticantes estarão na água ao mesmo tempo, não quantos hóspedes tens. Um resort com aluguer por rotação precisa de menos pranchas do que uma escola com cursos simultâneos — e de mais peças sobresselentes.',
            'Uma boa regra prática: uma prancha por praticante simultâneo, mais uma reserva de 10–15 % para manutenção e crescimento.',
          ],
        },
        {
          title: 'Adequar os tipos de prancha aos níveis de aptidão',
          body: [
            'Os iniciantes beneficiam de pranchas mais largas e volumosas, que se revelam estáveis; os praticantes experientes preferem pranchas mais estreitas que remam mais depressa. Uma frota mista — maioritariamente adequada a iniciantes com algumas pranchas de performance — cobre a maioria dos programas.',
            'As pranchas multi-lugar têm o seu lugar nas escolas e nas experiências de grupo: permitem aos instrutores ensinar e podem substituir várias pranchas individuais nas rotações dos cursos.',
          ],
        },
        {
          title: 'A durabilidade é uma decisão de orçamento',
          body: [
            'Uma construção adequada ao aluguer custa mais no início e faz poupar ao longo de duas ou três épocas. Pede informações sobre o reforço dos rails, a espessura do PVC e a garantia que a fábrica oferece nos pedidos de frota.',
            'Prevê também arrumação e insuflação: compressores, cavaletes e rotinas de embalagem determinam a carga de trabalho diária do programa. Os fornecedores orientados para frotas incluem tudo isto no pacote.',
          ],
        },
        {
          title: 'Planear o programa, não apenas o pedido',
          body: [
            'Os melhores pedidos de equipamento fazem parte de um plano de programa: formação dos instrutores, rotinas de manutenção e um ciclo de substituição para as pranchas desgastadas. As organizações que planeiam o programa renovam o equipamento segundo prazos pré-definidos; as outras compram substituições de emergência a preço inteiro.',
          ],
        },
      ],
    },
  ],
  nl: [
    {
      slug: 'how-custom-sup-boards-are-developed',
      navLabel: 'Hoe gepersonaliseerde SUP\'s worden ontwikkeld',
      metaTitle: 'Hoe gepersonaliseerde SUP\'s worden ontwikkeld | iSupfactory',
      metaDescription:
        'Hoe een gepersonaliseerde SUP van idee naar fabriek gaat: specificaties, ontwerp, prototyping, monsters en productie — stap voor stap uitgelegd.',
      kicker: 'Kennis',
      h1: 'Hoe gepersonaliseerde SUP\'s worden ontwikkeld',
      intro:
        'Voordat een gepersonaliseerd paddleboard naar jouw klanten wordt verzonden, doorloopt het een duidelijk gedefinieerd ontwikkelingspad. Elke fase kennen stelt je in staat om de aanvraag correct bij de fabriek neer te leggen, realistische tijdslijnen vast te stellen en de klassieke fouten van eerste kopers te vermijden.',
      sections: [
        {
          title: 'Fase 1: de behoefte definiëren',
          body: [
            'Elk ontwikkelingsproject begint met het gebruiksscenario: wie gebruikt de plank, waar en hoe vaak. Een plank voor een verhuurvloot is anders dan een plank voor een merklancering of voor een school: stabiliteit, levensduur en kosten doelen verschuiven allemaal met het antwoord.',
            'Noteer aantallen, een doelprijs en onmisbare kenmerken voordat je contact opneemt met een fabriek. Duidelijke vereisten leveren al in de eerste ronde betere offertes op en minder heen-en-weer.',
          ],
        },
        {
          title: 'Fase 2: de specificaties vastleggen',
          body: [
            'De specificaties zetten de vereisten om in meetbare waarden: lengte, breedte, dikte, volume, materialen (drop-stitch-dichtheid, stofgewicht), vinconfiguratie, gewichtslimiet en verpakking.',
            'Dit is het document op basis waarvan beide partijen de kosten berekenen. Wijzigingen later in het proces zijn trager en duurder: een vastgelegde specificatie is het goedkoopste instrument dat je kunt beheersen.',
          ],
        },
        {
          title: 'Fase 3: ontwerp en graphics',
          body: [
            'Met de specificaties vastgelegd begint het ontwerpwerk: vormaanpassingen, kleurcombinaties, logopositionering, graphics van het dekpad en gecoördineerde accessoires (leash, peddel, vin, tas).',
            'Fabrikanten kunnen digitale mock-ups maken zodat je het uiterlijk goedkeurt voordat er een fysiek monster wordt geproduceerd: goedkoper en sneller dan itereren op de hardware.',
          ],
        },
        {
          title: 'Fase 4: prototype en monster',
          body: [
            'Het monster is het eerste fysieke bewijs. Voor opblaasbare planken betekent dat een met de hand gemaakte plank of een plank uit een pilotproductie, die je kunt uitproberen en testen tegen de specificaties.',
            'Test het monster zoals jouw eindgebruiker dat zou doen: stabiliteit, stijfheid, koersstabiliteit, gewicht en het resultaat van de graphics. Een grondige monsternamecyclus vindt normaal gesproken de meeste problemen vóór de productie.',
          ],
        },
        {
          title: 'Fase 5: productie en levering',
          body: [
            'Na de goedkeuring van het monster gaat de productie in partijen verder met kwaliteitscontrolecheckpoints. De fabrieksinspectie vóór de verzending — foto\'s, video of een inspectie door derden — beschermt de partij die je ontvangt.',
            'Een goed projectplan reken je terug vanaf de lanceringsdatum, niet vooruit vanaf de besteldatum.',
          ],
        },
      ],
    },
    {
      slug: 'inflatable-sup-construction-explained',
      navLabel: 'De constructie van opblaasbare SUP\'s, uitgelegd',
      metaTitle: 'Constructie van opblaasbare SUP\'s: materialen en lagen | iSupfactory',
      metaDescription:
        'Waar een opblaasbare SUP van gemaakt is — PVC-lagen, drop-stitch-weefsel, rails en kwaliteitsindicatoren — om betere planken te specificeren voor jouw project.',
      kicker: 'Kennis',
      h1: 'De constructie van opblaasbare SUP\'s, uitgelegd',
      intro:
        'De meeste gepersonaliseerde SUP-projecten van vandaag zijn opblaasbare planken. Ze zijn lichter, eenvoudiger op te slaan en te verzenden en vergevingsgezinder voor beginners. Deze gids legt de constructie uit, zodat je de kwaliteit met vertrouwen kunt specificeren.',
      sections: [
        {
          title: 'Het hart: het drop-stitch-weefsel',
          body: [
            'Een opblaasbare plank is opgebouwd rond een drop-stitch-weefsel: duizenden polyesterdraden verbinden de bovenste en onderste PVC-laag. Wanneer de plank is opgepompt, houden deze draden de plank op een vaste dikte — dat geeft een iSUP vorm en stijfheid.',
            'Een hogere draaddichtheid (punten per vierkante inch) betekent een stijvere, stabielere plank bij dezelfde druk. Goedkope planken gebruiken lagere dichtheden; premium planken hogere.',
          ],
        },
        {
          title: 'PVC-lagen en rails',
          body: [
            'Het weefsel zit tussen PVC-lagen, die het beschermen tegen slijtage, uv-straling en stoten. Zwaarder PVC (meer mils of mm) is beter bestand tegen doorboringen, maar verhoogt het gewicht.',
            'De rails — de randen van de plank — absorberen de meeste stoten bij dagelijks gebruik. Een railconstructie met dubbele of driedubbele laag is een sterke indicator van duurzaamheid en geschiktheid voor verhuur.',
          ],
        },
        {
          title: 'Wat gewicht toevoegt — en wat sterkte toevoegt',
          body: [
            'Gewicht is een compromis: dikker PVC verhoogt de levensduur en het gewicht; lichtere lamineringen passen bij riders die hun planken over lange afstanden dragen. Dit is een van de punten waarop een gepersonaliseerde specificatie wordt afgestemd op de realiteit van de koper.',
            'Kwaliteitsindicatoren om te eisen: nominale ophlaasdruk, constructie van de naden, type ventiel en drop-stitch-dichtheid. Serieuze fabrieken publiceren deze cijfers.',
          ],
        },
      ],
    },
    {
      slug: 'how-organizations-choose-sup-equipment',
      navLabel: 'Hoe organisaties SUP-uitrusting kiezen',
      metaTitle: 'Hoe resorts, clubs en scholen SUP-uitrusting kiezen',
      metaDescription:
        'Hoe resorts, clubs en scholen SUP-uitrusting kiezen: vlootomvang, boardtypen, levensduur, opslag en budget voor een programma dat standhoudt.',
      kicker: 'Kennis',
      h1: 'Hoe organisaties SUP-uitrusting kiezen',
      intro:
        'Resorts, clubs en scholen kopen anders dan consumentenmerken: de uitrusting moet dagelijks gebruik aankunnen, verschillende vaardigheidsniveaus bedienen en binnen het programmabudget blijven. Dit overzicht behandelt de beslissingen die ertoe doen.',
      sections: [
        {
          title: 'De vlootomvang afstemmen op het gebruik',
          body: [
            'Tel hoeveel riders er tegelijkertijd op het water zijn, niet hoeveel gasten je hebt. Een resort dat met rotatie verhuurt heeft minder planken nodig dan een school met gelijktijdige cursussen — en meer reserveonderdelen.',
            'Een goede vuistregel: één plank per gelijktijdige rider, plus een reserve van 10–15 % voor onderhoud en groei.',
          ],
        },
        {
          title: 'Boardtypen afstemmen op vaardigheidsniveaus',
          body: [
            'Beginners hebben baat bij bredere, volumineuzere planken die stabiel liggen; ervaren riders geven de voorkeur aan smallere planken die sneller peddelen. Een gemengde vloot — voornamelijk geschikt voor beginners met enkele performanceboards — dekt de meeste programma\'s.',
            'Boards voor meerdere personen hebben hun plek in scholen en bij groepsbelevenissen: ze stellen instructeurs in staat om les te geven en kunnen meerdere individuele boards vervangen in de cursusrotaties.',
          ],
        },
        {
          title: 'Levensduur is een budgetbeslissing',
          body: [
            'Een constructie die geschikt is voor verhuur kost in het begin meer en levert besparingen op over twee of drie seizoenen. Vraag naar de versterking van de rails, de dikte van het PVC en de garantie die de fabriek biedt op vlootbestellingen.',
            'Reken ook op opslag en oppompen: compressoren, schragen en verpakkingsroutines bepalen de dagelijkse werkbelasting van het programma. Op vloten gerichte leveranciers nemen dit alles in het pakket op.',
          ],
        },
        {
          title: 'Het programma plannen, niet alleen de bestelling',
          body: [
            'De beste uitrustingsbestellingen maken deel uit van een programmaplan: instructeurtraining, onderhoudsroutines en een vervangingscyclus voor versleten planken. Organisaties die het programma plannen, vernieuwen de uitrusting volgens vastgestelde termijnen; de andere kopen noodvervangingen tegen de volle prijs.',
          ],
        },
      ],
    },
  ],
  sv: [
    {
      slug: 'how-custom-sup-boards-are-developed',
      navLabel: 'Så utvecklas skräddarsydda SUP-brädor',
      metaTitle: 'Så utvecklas skräddarsydda SUP-brädor | iSupfactory',
      metaDescription:
        'Hur en skräddarsydd SUP går från idé till fabrik: specifikation, design, prototyp, prov och produktion — förklarat steg för steg.',
      kicker: 'Kunskap',
      h1: 'Så utvecklas skräddarsydda SUP-brädor',
      intro:
        'Innan en skräddarsydd SUP-bräda skickas till dina kunder genomgår den en tydlig utvecklingsprocess. Att känna till varje steg hjälper dig att briefa fabriken rätt, sätta realistiska tidsplaner och undvika de klassiska felen som förstagångsköpare gör.',
      sections: [
        {
          title: 'Steg 1: Definiera behovet',
          body: [
            'Varje utvecklingsprojekt börjar med användningsscenariot: vem rider brädan, var och hur ofta. En bräda för en uthyrningsflotta skiljer sig från en bräda för en varumärkeslansering eller en skolbräda — stabilitet, hållbarhet och kostnadsmål skiftar alla med svaret.',
            'Skriv ner kvantitet, målpris och oumbärliga funktioner innan du kontaktar en fabrik. Tydliga krav ger bättre första offerter och mindre fram och tillbaka.',
          ],
        },
        {
          title: 'Steg 2: Lås specifikationen',
          body: [
            'Specifikationen förvandlar behovet till mätbara värden: längd, bredd, tjocklek, volym, material (drop-stitch-densitet, tygvikt), fenuppsättning, viktgräns och förpackning.',
            'Detta är dokumentet som båda parter räknar offerter mot. Ändringar senare i processen är långsammare och dyrare — en fryst spec är det billigaste du kan styra över.',
          ],
        },
        {
          title: 'Steg 3: Design och grafik',
          body: [
            'Med specen låst börjar designarbetet: formjusteringar, färgscheman, logoplacering, däckpad-grafik och matchande tillbehör (leash, paddel, fena, väska).',
            'Tillverkare kan ta fram digitala mockups så att du godkänner utseendet innan något fysiskt prov görs — billigare och snabbare än att iterera på hårdvara.',
          ],
        },
        {
          title: 'Steg 4: Prototyp och prov',
          body: [
            'Provet är det första fysiska beviset. För uppblåsbara brädor innebär det en handbyggd bräda eller en bräda från en pilotproduktion som du kan rida och testa mot specifikationen.',
            'Testa provet som din slutkund skulle: stabilitet, styvhet, kursstabilitet, vikt och hur grafiken håller. En ordentlig provomgång hittar oftast de flesta problemen före produktion.',
          ],
        },
        {
          title: 'Steg 5: Produktion och leverans',
          body: [
            'Efter provgodkännande drivs produktionen i batcher med QC-kontrollpunkter. Fabriksinspektion före leverans — foton, videor eller tredjepartsinspektion — skyddar den batch du tar emot.',
            'En bra projekttidsplan räknas bakåt från ditt lanseringsdatum, inte framåt från beställningen.',
          ],
        },
      ],
    },
    {
      slug: 'inflatable-sup-construction-explained',
      navLabel: 'Uppblåsbar SUP-konstruktion, förklarad',
      metaTitle: 'Konstruktion av uppblåsbara SUP-brädor: material och lager | iSupfactory',
      metaDescription:
        'Vad en uppblåsbar SUP är gjord av — PVC-lager, drop-stitch-tyg, rails och kvalitetsindikatorer — för att specificera bättre brädor för ditt projekt.',
      kicker: 'Kunskap',
      h1: 'Uppblåsbar SUP-konstruktion, förklarad',
      intro:
        'De flesta skräddarsydda SUP-projekt idag är uppblåsbara brädor. De är lättare, lättare att lagra och frakta, och mer förlåtande för nybörjare. Den här guiden förklarar konstruktionen så att du kan specificera kvalitet med tillförsikt.',
      sections: [
        {
          title: 'Kärnan: drop-stitch-tyget',
          body: [
            'En uppblåsbar bräda är byggd kring drop-stitch-tyg: tusentals polyestertrådar förbinder topp- och bottenlagren av PVC. När brädan är uppblåst håller dessa trådar brädan på en fast tjocklek — det är det som ger en iSUP form och styvhet.',
            'Högre trådtäthet (stygn per kvadrattum) innebär en fastare, stabilare bräda vid samma tryck. Budgetbrädor använder lägre täthet; premiumbrädor högre.',
          ],
        },
        {
          title: 'PVC-lager och rails',
          body: [
            'Tyget är inbäddat mellan PVC-lager som skyddar mot nötning, UV och stötar. Tyngre PVC (fler mils eller mm) tål punkteringar bättre men väger mer.',
            'Railen — brädans kanter — tar emot mest stötar i daglig användning. Railkonstruktion i dubbel eller trippel lager är en stark indikator på hållbarhet och lämplighet för uthyrning.',
          ],
        },
        {
          title: 'Vad som tillför vikt vs. vad som tillför styrka',
          body: [
            'Vikt är en avvägning: tjockare PVC ökar hållbarheten och vikten; lättare uppbyggnad passar ridare som bär brädan långt. Detta är ett av de tydligaste sätten en skräddarsydd spec anpassas till köparens verklighet.',
            'Kvalitetsindikatorer att fråga efter: nominellt lufttryck, sömskonstruktion, typ av ventil och drop-stitch-densitet. Seriösa fabriker publicerar dessa siffror.',
          ],
        },
      ],
    },
    {
      slug: 'how-organizations-choose-sup-equipment',
      navLabel: 'Hur organisationer väljer SUP-utrustning',
      metaTitle: 'Så väljer resorter, klubbar och skolor SUP-utrustning',
      metaDescription:
        'Så väljer resorter, klubbar och skolor SUP-utrustning: flottstorlek, brädtyper, hållbarhet, förvaring och budget för ett program som håller.',
      kicker: 'Kunskap',
      h1: 'Hur organisationer väljer SUP-utrustning',
      intro:
        'Resorter, klubbar och skolor köper annorlunda än konsumentmärken: utrustningen måste tåla daglig användning, passa blandade färdighetsnivåer och rymmas inom en programbudget. Den här ramen täcker de beslut som spelar roll.',
      sections: [
        {
          title: 'Anpassa flottstorleken till användningen',
          body: [
            'Räkna hur många ridare som är på vattnet samtidigt, inte hur många gäster du har. En resort som hyr ut i rotation behöver färre brädor än en skola med parallella kurser — och fler reservdelar.',
            'En bra tumregel: en bräda per samtidig ridare, plus 10–15 % reservkapacitet för underhåll och tillväxt.',
          ],
        },
        {
          title: 'Matcha brädtyper mot färdighetsnivåer',
          body: [
            'Nybörjare gynnas av bredare, voluminösare brädor som känns stabila; erfarna ridare föredrar smalare brädor som paddlar snabbare. En blandad flotta — mestadels nybörjarvänlig med några prestationsbrädor — tjänar de flesta program.',
            'Flersitsbrädor förtjänar sin plats i skolor och gruppupplevelser: de låter instruktörer undervisa och kan ersätta flera enskilda brädor i klassrotationer.',
          ],
        },
        {
          title: 'Hållbarhet är ett budgetbeslut',
          body: [
            'Konstruktion i uthyrningsklass kostar mer i förväg och sparar pengar över två till tre säsonger. Fråga om railförstärkning, PVC-tjocklek och vilken garanti fabriken ger på flottbeställningar.',
            'Planera även förvaring och uppblåsning: kompressorer, ställ och packningsrutiner avgör programmets dagliga arbete. Flottorienterade leverantörer inkluderar detta i paketet.',
          ],
        },
        {
          title: 'Planera programmet, inte bara beställningen',
          body: [
            'De bästa utrustningsbeställningarna är en del av en programplan: instruktörsutbildning, underhållsrutiner och en ersättningscykel för slitna brädor. Organisationer som planerar programmet förnyar utrustning enligt schema; de som inte gör det köper akutersättningar till fullpris.',
          ],
        },
      ],
    },
  ],
  no: [
    {
      slug: 'how-custom-sup-boards-are-developed',
      navLabel: 'Så utvikles skreddersydde SUP-brett',
      metaTitle: 'Så utvikles skreddersydde SUP-brett | iSupfactory',
      metaDescription:
        'Hvordan et skreddersydt SUP-brett går fra idé til fabrikk: spesifikasjon, design, prototyp, prøver og produksjon — forklart steg for steg.',
      kicker: 'Kunnskap',
      h1: 'Så utvikles skreddersydde SUP-brett',
      intro:
        'Før et skreddersydt paddleboard sendes til kundene dine, gjennomgår det en definert utviklingsvei. Å kjenne hvert trinn hjelper deg med å briefe fabrikken riktig, sette realistiske tidsplaner og unngå de klassiske feilene førstegangsbestillere gjør.',
      sections: [
        {
          title: 'Trinn 1: Definer behovet',
          body: [
            'Hvert utviklingsprosjekt starter med brukssituasjonen: hvem skal bruke brettet, hvor og hvor ofte. Et brett til en utleieflåte skiller seg fra et brett til en merkelansering eller et skolebrett — stabilitet, holdbarhet og kostnadsmål flytter seg alle med svaret.',
            'Skriv ned kvantum, målpris og påkrevde funksjoner før du kontakterer en fabrikk. Tydelige krav gir bedre første tilbud og mindre frem og tilbake.',
          ],
        },
        {
          title: 'Trinn 2: Lås spesifikasjonen',
          body: [
            'Spesifikasjonen gjør behovet om til målbare verdier: lengde, bredde, tykkelse, volum, materialer (drop-stitch-tetthet, stoffvekt), finneoppsett, vektgrense og emballasje.',
            'Dette er dokumentet begge parter oppgir tilbud mot. Endringer senere i prosessen går langsommere og koster mer — en frosset spesifikasjon er det billigste du kan styre.',
          ],
        },
        {
          title: 'Trinn 3: Design og grafikk',
          body: [
            'Med spesifikasjonen låst starter designarbeidet: formjusteringer, fargeskjemaer, logoplassering, dekksputegrafikk og matchende tilbehør (leash, paddle, finne, sekk).',
            'Produsenter kan lage digitale mockups slik at du godkjenner utseendet før noe fysisk lages — billigere og raskere enn å iterere på maskinvare.',
          ],
        },
        {
          title: 'Trinn 4: Prototyp og prøve',
          body: [
            'Prøven er det første fysiske beviset. For oppblåsbare brett betyr det et håndbygd brett eller et brett fra en pilotproduksjon som du kan padle på og teste mot spesifikasjonen.',
            'Test prøven som sluttkunden din ville gjort: stabilitet, stivhet, kursstabilitet, vekt og hvordan grafikken holder. En ordentlig prøverunde finner vanligvis de fleste problemene før produksjon.',
          ],
        },
        {
          title: 'Trinn 5: Produksjon og levering',
          body: [
            'Etter prøvegodkjenning drives produksjonen i batcher med kvalitetskontrollpunkter. Fabrikkinspeksjon før levering — bilder, videoer eller tredjepartsinspeksjon — beskytter batchen du mottar.',
            'En god prosjekttidsplan regnes bakover fra lanseringsdatoen din, ikke framover fra bestillingen.',
          ],
        },
      ],
    },
    {
      slug: 'inflatable-sup-construction-explained',
      navLabel: 'Oppblåsbar SUP-konstruksjon, forklart',
      metaTitle: 'Konstruksjon av oppblåsbare SUP-brett: materialer og lag | iSupfactory',
      metaDescription:
        'Hva et oppblåsbart SUP-brett er laget av — PVC-lag, drop-stitch-stoff, kanter og kvalitetsindikatorer — slik at du kan spesifisere bedre brett for prosjektet ditt.',
      kicker: 'Kunnskap',
      h1: 'Oppblåsbar SUP-konstruksjon, forklart',
      intro:
        'De fleste skreddersydde SUP-prosjektene i dag er oppblåsbare brett. De er lettere, enklere å lagre og frakte, og mer tilgivende for nybegynnere. Denne guiden forklarer konstruksjonen slik at du kan spesifisere kvalitet med omhu.',
      sections: [
        {
          title: 'Kjernen: drop-stitch-stoffet',
          body: [
            'Et oppblåsbart brett er bygget rundt drop-stitch-stoff: tusenvis av polyestertråder forbinder topp- og bunnlagene av PVC. Når brettet er blåst opp, holder disse trådene brettet på en fast tykkelse — det er det som gir en SUP form og stivhet.',
            'Høyere trådtetthet (sømmer per kvadrattomme) gir et stivere og mer stabilt brett ved samme trykk. Budsjettbrett bruker lavere tetthet; premiumbrett høyere.',
          ],
        },
        {
          title: 'PVC-lag og kanter',
          body: [
            'Stoffet er innlemmet mellom PVC-lag som beskytter mot slitasje, UV og støt. Tykkere PVC (flere mils eller mm) tåler punkteringer bedre, men veier mer.',
            'Kanten — brettets sidekanter — tar opp de fleste støyene i daglig bruk. Kantkonstruksjon i dobbelt eller trippelt lag er en sterk indikator på holdbarhet og egnethet for utleie.',
          ],
        },
        {
          title: 'Hva som gir vekt vs. hva som gir styrke',
          body: [
            'Vekt er en avveining: tykkere PVC øker både holdbarheten og vekten; lettere oppbygging passer padlere som bærer brettet langt. Dette er ett av de tydeligste eksemplene på hvordan en skreddersydd spesifikasjon tilpasses kjøperens virkelighet.',
            'Kvalitetsindikatorer du bør be om: nominelt lufttrykk, sømkonstruksjon, ventiltype og drop-stitch-tetthet. Seriøse fabrikker offentliggjør disse tallene.',
          ],
        },
      ],
    },
    {
      slug: 'how-organizations-choose-sup-equipment',
      navLabel: 'Hvordan organisasjoner velger SUP-utstyr',
      metaTitle: 'Så velger resorts, klubber og skoler SUP-utstyr',
      metaDescription:
        'Så velger resorts, klubber og skoler SUP-utstyr: flåtestørrelse, bretttyper, holdbarhet, oppbevaring og budsjett for et program som varer.',
      kicker: 'Kunnskap',
      h1: 'Hvordan organisasjoner velger SUP-utstyr',
      intro:
        'Resorts, klubber og skoler kjøper annerledes enn forbrukermerker: utstyret må tåle daglig bruk, passe blandde nivåer og rommes innenfor et programbudsjett. Denne rammen dekker beslutningene som betyr noe.',
      sections: [
        {
          title: 'Tilpass flåtestørrelsen til bruken',
          body: [
            'Regn ut hvor mange padlere som er på vannet samtidig, ikke hvor mange gjester du har. Et resort som utleier på rotasjon trenger færre brett enn en skole med parallelle kurs — og flere reservedeler.',
            'En god tommelfingerregel: ett brett per samtidig padler, pluss 10–15 % reserstekapasitet for vedlikehold og vekst.',
          ],
        },
        {
          title: 'Match bretttypene til ferdighetsnivåene',
          body: [
            'Nybegynnere har nytte av bredere brett med mer volum som føles stabile; erfarne padlere foretrekker smalere brett som padler raskere. En blandet flåte — hovedsakelig nybegynnervennlig med noen ytelsesbrett — passer de fleste programmer.',
            'Flerpersonbrett fortjener sin plass i skoler og gruppeopplevelser: de lar instruktører undervise og kan erstatte flere enkelte brett i klasserotasjoner.',
          ],
        },
        {
          title: 'Holdbarhet er et budsjettvalg',
          body: [
            'Konstruksjon i utleieklasse koster mer på forhånd og sparer penger over to til tre sesonger. Spør om kantforsterkning, PVC-tykkelse og hvilken garanti fabrikken gir på flåtebestillinger.',
            'Planlegg også oppbevaring og oppblåsing: kompressorer, stativ og pakkerutiner avgjør programmets daglige arbeid. Flåteorienterte leverandører inkluderer dette i pakken.',
          ],
        },
        {
          title: 'Planlegg programmet, ikke bare bestillingen',
          body: [
            'De beste utstyrsbestillingene er en del av en programplan: instruktørtrening, vedlikeholdsrutiner og en erstatningssyklus for slitte brett. Organisasjoner som planlegger programmet, fornyer utstyret etter fastsatte frister; de andre kjøper nødreservedeler til full pris.',
          ],
        },
      ],
    },
  ],
}

export function getArticle(locale: Locale, slug: string): KnowledgeArticle | undefined {
  return (knowledge[locale] ?? knowledge.en).find((a) => a.slug === slug)
}

export interface KnowledgeMeta {
  metaTitle: string
  metaDescription: string
  h1: string
}

export const knowledgeMeta: Localized<KnowledgeMeta> = {
  en: {
    metaTitle: 'Knowledge Center: SUP Product Development Guides | iSupfactory',
    metaDescription:
      'Practical guides on custom SUP product development, inflatable board construction, and choosing SUP equipment for resorts, clubs and schools.',
    h1: 'Knowledge Center — Product Development, Explained',
  },
  es: {
    metaTitle: 'Centro de conocimiento — guías de productos | iSupfactory',
    metaDescription:
      'Guías prácticas sobre desarrollo de productos SUP personalizados y construcción de tablas hinchables.',
    h1: 'Centro de conocimiento — desarrollo de producto, explicado',
  },
  fr: {
    metaTitle: 'Centre de connaissances — guides de développement de produits | iSupfactory',
    metaDescription:
      "Guides pratiques sur le développement de produits SUP personnalisés, la construction de planches gonflables et le choix d'un équipement SUP pour les resorts, clubs et écoles.",
    h1: 'Centre de connaissances — développement de produit, expliqué',
  },
  de: {
    metaTitle: 'Wissenszentrum: Leitfäden zur SUP-Produktentwicklung | iSupfactory',
    metaDescription:
      'Praktische Leitfäden zur Entwicklung individueller SUP-Produkte, zur Konstruktion aufblasbarer Boards und zur Auswahl von SUP-Ausrüstung für Resorts, Clubs und Schulen.',
    h1: 'Wissenszentrum — Produktentwicklung, erklärt',
  },
  it: {
    metaTitle: 'Centro di conoscenza: guide allo sviluppo di prodotti SUP | iSupfactory',
    metaDescription:
      "Guide pratiche sullo sviluppo di prodotti SUP personalizzati, sulla costruzione delle tavole gonfiabili e sulla scelta dell\u2019attrezzatura SUP per resort, club e scuole.",
    h1: 'Centro di conoscenza — sviluppo di prodotto, spiegato',
  },
  pt: {
    metaTitle: 'Centro de conhecimento: guias de desenvolvimento de produtos SUP | iSupfactory',
    metaDescription:
      'Guias práticas sobre o desenvolvimento de produtos SUP personalizados, sobre a construção das pranchas insufláveis e sobre a escolha do equipamento SUP para resorts, clubes e escolas.',
    h1: 'Centro de conhecimento — desenvolvimento de produto, explicado',
  },
  nl: {
    metaTitle: 'Kennisdatabase: gidsen over SUP-productontwikkeling | iSupfactory',
    metaDescription:
      'Praktische gidsen over maatwerk SUP-productontwikkeling, de constructie van opblaasbare boards en het kiezen van SUP-uitrusting voor resorts, clubs en scholen.',
    h1: 'Kennisdatabase — productontwikkeling, uitgelegd',
  },
  sv: {
    metaTitle: 'Kunskapsenter: guider för SUP-produktutveckling | iSupfactory',
    metaDescription:
      'Praktiska guider om skräddarsydd SUP-produktutveckling, konstruktion av uppblåsbara brädor och val av SUP-utrustning för resorter, klubbar och skolor.',
    h1: 'Kunskapscenter — produktutveckling, förklarad',
  },
  no: {
    metaTitle: 'Kunnskapssenter: guider for SUP-produktutvikling | iSupfactory',
    metaDescription:
      'Praktiske guider om skreddersydd SUP-produktutvikling, konstruksjon av oppblåsbare brett og val av SUP-utstyr for resorts, klubber og skoler.',
    h1: 'Kunnskapssenter — produktutvikling, forklart',
  },
}
