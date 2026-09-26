import type { ContentProduct } from '@/features/content/types'
import type { Locale } from '@/features/i18n/locale'

export interface FaqEntry {
  q: string
  a: string
}

export const PRODUCT_FAQ_POOL: Record<'en' | 'es' | 'fr' | 'de' | 'it' | 'pt' | 'nl' | 'sv', FaqEntry[]> = {
  en: [
    {
      q: 'What is the minimum order to customize this board?',
      a: 'MOQ is 90–100+ pcs per approved configuration, subject to material-roll and packaging requirements, on one 150 m roll for standard volume production, with pilot runs from 20–50 pcs and 90–100+ pcs for a custom mould.',
    },
    {
      q: 'How long do samples and production take?',
      a: 'Samples are ready in 7–12 days; batch production completes in 25–35 days after confirmed PO and deposit.',
    },
    {
      q: 'Can I change colors, artwork and the logo?',
      a: 'Yes — graphics, colors, EVA traction, logo, packaging and accessories are all customizable on every platform. Share your logo and we produce a visual proof before production.',
    },
    {
      q: 'How is quality controlled before shipment?',
      a: 'Every board passes a 100-point assembly checklist and an 18.0 PSI · 24h hold pressure test before packing; units exceeding a 0.50 PSI/24h pressure drop are auto-rejected.',
    },
  ],
  es: [
    {
      q: '¿Cuál es el pedido mínimo para personalizar esta tabla?',
      a: 'El MOQ de volumen es de 90–100+ uds. por configuración aprobada, según los requisitos de material y embalaje, en un rollo de 150 m para la producción estándar, con pedidos piloto desde 20–50 uds. y 90–100+ uds. para un molde a medida.',
    },
    {
      q: '¿Cuánto tardan las muestras y la producción?',
      a: 'Las muestras están listas en 7–12 días; la producción en serie se completa en 25–35 días tras confirmar el pedido y el depósito.',
    },
    {
      q: '¿Puedo cambiar los colores, el arte y el logo?',
      a: 'Sí: gráficos, colores, EVA, logotipo, embalaje y accesorios se personalizan en cada plataforma. Comparte tu logo y te haremos una prueba visual antes de la producción.',
    },
    {
      q: '¿Cómo se controla la calidad antes del envío?',
      a: 'Cada tabla pasa por una lista de verificación de 100 puntos y una prueba de presión de 18.0 PSI durante 24 h antes de empaquetar; las unidades con una caída de presión superior a 0.50 PSI/24 h se rechazan automáticamente.',
    },
  ],
  fr: [
    {
      q: 'Quelle est la quantité minimale de commande pour personnaliser cette planche ?',
      a: 'Le MOQ de série est de 90–100+ unités par configuration approuvée, selon les exigences d’emballage et de rouleau de matériau, sur un rouleau de 150 m pour la production en volume, avec des lots pilotes dès 20–50 unités et 90–100+ unités pour un moule sur mesure.',
    },
    {
      q: 'Combien de temps prennent les échantillons et la production ?',
      a: 'Les échantillons sont prêts en 7–12 jours ; la production en série est réalisée en 25–35 jours après confirmation de la commande et de l’acompte.',
    },
    {
      q: 'Puis-je modifier les couleurs, les visuels et le logo ?',
      a: 'Oui : graphismes, couleurs, EVA, logo, emballage et accessoires sont personnalisables sur chaque plateforme. Partagez votre logo et nous réalisons une épreuve visuelle avant production.',
    },
    {
      q: 'Comment la qualité est-elle contrôlée avant l’expédition ?',
      a: 'Chaque planche passe une checklist d’assemblage de 100 points et un test de pression de 18,0 PSI pendant 24 h avant le conditionnement ; les unités qui dépassent une chute de pression de 0,50 PSI/24 h sont automatiquement écartées.',
    },
  ],
  de: [
    {
      q: 'Welche Mindestbestellmenge gilt für die Individualisierung dieses Boards?',
      a: 'Die Serien-Mindestbestellmenge beträgt 90–100+ Stück pro freigegebener Konfiguration, abhängig von Materialrolle und Verpackungsanforderungen, auf einer 150-m-Rolle; Pilotserien starten ab 20–50 Stück, für eine Maßform gelten 90–100+ Stück.',
    },
    {
      q: 'Wie lange dauern Muster und Produktion?',
      a: 'Muster sind in 7–12 Tagen fertig; die Serienproduktion wird 25–35 Tage nach bestätigter Bestellung und Anzahlung abgeschlossen.',
    },
    {
      q: 'Kann ich Farben, Design und Logo ändern?',
      a: 'Ja: Grafiken, Farben, EVA, Logo, Verpackung und Zubehör sind auf jeder Plattform anpassbar. Teilen Sie Ihr Logo mit uns — vor der Produktion erhalten Sie einen visuellen Entwurf.',
    },
    {
      q: 'Wie wird die Qualität vor dem Versand kontrolliert?',
      a: 'Jedes Board durchläuft eine 100-Punkte-Montagecheckliste und einen Drucktest (18,0 PSI über 24 h), bevor es verpackt wird; Boards mit einem Druckabfall über 0,50 PSI/24 h werden automatisch aussortiert.',
    },
  ],
  it: [
    {
      q: 'Qual è la quantità minima d’ordine per personalizzare questa tavola?',
      a: 'Il MOQ di volume è di 90–100+ pezzi per configurazione approvata, soggetto ai requisiti di rotolo di materiale e imballaggio, su un rotolo da 150 m per la produzione standard, con lotti pilota da 20–50 pezzi e 90–100+ pezzi per uno stampo su misura.',
    },
    {
      q: 'Quanto richiedono campioni e produzione?',
      a: 'I campioni sono pronti in 7–12 giorni; la produzione in serie si completa in 25–35 giorni dopo PO confermato e acconto.',
    },
    {
      q: 'Posso cambiare colori, grafiche e logo?',
      a: 'Sì: grafiche, colori, EVA, logo, imballaggio e accessori sono personalizzabili su ogni piattaforma. Condividi il tuo logo e produrremo una prova visiva prima della produzione.',
    },
    {
      q: 'Come viene controllata la qualità prima della spedizione?',
      a: 'Ogni tavola supera una checklist di assemblaggio a 100 punti e un test di pressione di 18.0 PSI per 24 ore prima dell’imballaggio; le unità con calo di pressione superiore a 0,50 PSI/24 h vengono scartate automaticamente.',
    },
  ],
  pt: [
    {
      q: 'Qual é a encomenda mínima para personalizar esta prancha?',
      a: 'O MOQ de volume é de 90–100+ unidades por configuração aprovada, sujeito aos requisitos de rolo de material e embalagem, num rolo de 150 m para a produção padrão, com lotes piloto desde 20–50 unidades e 90–100+ unidades para um molde à medida.',
    },
    {
      q: 'Quanto tempo demoram as amostras e a produção?',
      a: 'As amostras estão prontas em 7–12 dias; a produção em série fica concluída em 25–35 dias após PO confirmado e depósito.',
    },
    {
      q: 'Posso alterar cores, arte e logótipo?',
      a: 'Sim: gráficas, cores, EVA, logótipo, embalagem e acessórios são personalizáveis em todas as plataformas. Partilha o teu logótipo e faremos uma prova visual antes da produção.',
    },
    {
      q: 'Como é controlada a qualidade antes do envio?',
      a: 'Cada prancha passa por uma checklist de montagem de 100 pontos e por um teste de pressão de 18.0 PSI durante 24 horas antes da embalagem; as unidades com queda de pressão superior a 0,50 PSI/24 h são rejeitadas automaticamente.',
    },
  ],
  nl: [
    {
      q: 'Wat is de minimum bestelling om deze plank te personaliseren?',
      a: 'Het MOQ voor volume is 90–100+ stuks per goedgekeurde configuratie, onder voorbehoud van materiaalrol- en verpakkingsvereisten, op één rol van 150 m voor standaardproductie, met pilotreeksen vanaf 20–50 stuks en 90–100+ stuks voor een matrijs op maat.',
    },
    {
      q: 'Hoe lang duren monsters en productie?',
      a: 'Monsters zijn klaar in 7–12 dagen; de serieproductie is gereed in 25–35 dagen na bevestigde PO en aanbetaling.',
    },
    {
      q: 'Kan ik kleuren, opdruk en logo wijzigen?',
      a: 'Ja: opdruk, kleuren, EVA, logo, verpakking en accessoires zijn op elk platform aan te passen. Deel je logo en we maken een visueel bewijs vóór de productie.',
    },
    {
      q: 'Hoe wordt de kwaliteit gecontroleerd vóór verzending?',
      a: 'Elke plank doorloopt een montagechecklist van 100 punten en een druktest van 18.0 PSI gedurende 24 uur vóór het verpakken; units met een drukval van meer dan 0,50 PSI/24 uur worden automatisch afgekeurd.',
    },
  ],
  sv: [
    {
      q: 'Vad är minsta beställningskvantitet för att anpassa den här brädan?',
      a: 'Volym-MOQ:n är 90–100+ st per godkänd konfiguration, med förbehåll för krav på materialrulle och förpackning, på en rulle á 150 m för standardproduktion, med pilotpartier från 20–50 st och 90–100+ st för specialform.',
    },
    {
      q: 'Hur lång tid tar prov och produktion?',
      a: 'Prov är klara inom 7–12 dagar; serieproduktionen är klar inom 25–35 dagar efter bekräftad PO och handpenning.',
    },
    {
      q: 'Kan jag ändra färger, tryck och logotyp?',
      a: 'Ja: grafik, färger, EVA, logotyp, förpackning och tillbehör kan anpassas på alla plattformar. Dela din logotyp så tar vi fram ett visuellt bevis före produktion.',
    },
    {
      q: 'Hur kontrolleras kvaliteten före leverans?',
      a: 'Varje bräda genomgår en monteringschecklista på 100 punkter och ett trycktålighetstest på 18.0 PSI under 24 timmar före packning; enheter med tryckfall över 0,50 PSI/24 h avvisas automatiskt.',
    },
  ],
}

export function productFaqs(product: ContentProduct, locale: Locale): FaqEntry[] {
  const specific = product.faqs ?? []
  const pool = PRODUCT_FAQ_POOL[locale as keyof typeof PRODUCT_FAQ_POOL] ?? PRODUCT_FAQ_POOL.en
  return [...specific, ...pool]
}