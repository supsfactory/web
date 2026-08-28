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
      metaTitle: 'How Custom SUP Boards Are Developed | SUPsfactory',
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
      metaTitle: 'Inflatable SUP Construction: Materials & Layers | SUPsfactory',
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
      metaTitle: 'Cómo se desarrollan tablas de SUP personalizadas | SUPsfactory',
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
      metaTitle: 'Comment les planches de SUP personnalisées sont développées | SUPsfactory',
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
      metaTitle: 'Construction des SUP gonflables : matériaux et couches | SUPsfactory',
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
    metaTitle: 'Knowledge Center: SUP Product Development Guides | SUPsfactory',
    metaDescription:
      'Practical guides on custom SUP product development, inflatable board construction, and choosing SUP equipment for resorts, clubs and schools.',
    h1: 'Knowledge Center — Product Development, Explained',
  },
  es: {
    metaTitle: 'Centro de conocimiento — guías de productos | SUPsfactory',
    metaDescription:
      'Guías prácticas sobre desarrollo de productos SUP personalizados y construcción de tablas hinchables.',
    h1: 'Centro de conocimiento — desarrollo de producto, explicado',
  },
  fr: {
    metaTitle: 'Centre de connaissances — guides de développement de produits | SUPsfactory',
    metaDescription:
      "Guides pratiques sur le développement de produits SUP personnalisés, la construction de planches gonflables et le choix d'un équipement SUP pour les resorts, clubs et écoles.",
    h1: 'Centre de connaissances — développement de produit, expliqué',
  },
}
