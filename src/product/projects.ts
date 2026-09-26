import type { Locale } from '@/features/i18n/locale'
import type { Localized } from './content'

/**
 * Project case studies (/projects/*). Real-project stories are the strongest
 * B2B manufacturing SEO content — each project carries industry → challenge →
 * solution → product → process → result, which search engines and AI answer
 * engines cite well.
 */

export interface ProjectData {
  slug: string
  navLabel: string
  metaTitle: string
  metaDescription: string
  kicker: string
  h1: string
  intro: string[]
  /** Project snapshot fields — standardized across all cases so buyers can compare. */
  customerType: string
  region: string
  productCategory: string
  projectStage: string
  manufacturingScope: string
  keyRequirements: string
  qualityFocus: string
  industry: string
  requirement: string
  challenge: string
  solution: string
  product: string
  process: { title: string; body: string }[]
  result: string
  outcome: string
  /** 5–8 concrete customization items — buyer-verifiable scope of what changed. */
  customizations: string[]
  /** Project-specific inspection focus — 4–6 checks matched to the project type. */
  inspectionFocus: string[]
  /** Anonymized testimonial / confidentiality statement for the quote block. */
  confidentiality: string
  tags: string[]
  /** Headline numbers rendered as a metrics strip — flagship cases only. */
  metrics?: { value: string; label: string }[]
  /** Key takeaways rendered before the final CTA — flagship cases only. */
  takeaways?: string[]
}

export const projects: Localized<ProjectData[]> = {
  en: [
    {
      slug: 'coastal-rental-fleet',
      customerType: 'Rental Fleet Operators',
      region: 'Mediterranean — Spain, Italy, Greece',
      productCategory: 'Rental-grade Inflatable SUP (10′6″ + 11′0″)',
      projectStage: 'Fleet evaluation → Sample approval → 3-batch phased delivery',
      manufacturingScope: 'Fleet specification, reinforced construction, phased production, parts supply',
      keyRequirements: 'Durable rental boards, phased delivery across stations, lower early-replacement rate',
      qualityFocus: 'Reinforced construction, air-tightness, fleet artwork, kit completeness',
      navLabel: 'Coastal Rental Fleet',
      metaTitle: 'Coastal Rental Fleet | 320 Boards in 120 Days — iSupfactory',
      metaDescription:
        'How a Mediterranean rental operator built a 320-board coastal fleet across Spain, Italy and Greece — three phased batches in 120 days, with an estimated 20–25% cut in early replacements.',
      kicker: 'Coastal Rental Project',
      h1: 'How a Mediterranean Rental Operator Built a 320-Board Coastal Fleet in 120 Days',
      intro: [
        'A coastal rental operator running stations across Spain, Italy and Greece needed a durable fleet for the high-rotation summer season — delivered in three batches, in time for each station\'s opening.',
      ],
      industry: 'Rental Fleet Operators',
      requirement: '320 rental boards in two sizes — 10′6″ and 11′0″ — across coastal stations in three countries, delivered in three phased batches within 120 days.',
      challenge:
        'Daily rental rotation wears boards fast, and the operator\'s early-replacement rate was running at 20–25%. Stations opened on different dates across three countries, so a single delivery would not work — and neither would a one-size fleet.',
      solution:
        'Two durable rental platforms in the sizes that cover most renters, reinforced construction for high-rotation abuse, and three production batches scheduled to land at each station\'s opening — with per-station parts packs and repair guidance.',
      product: 'Rental-grade inflatable SUP — 10′6″ and 11′0″ platforms with reinforced rails and UV-stable materials, per-station kits.',
      process: [
        { title: 'Fleet evaluation', body: 'Station openings and rotation volumes set the two sizes and batch allocation.' },
        { title: 'Board selection', body: '10′6″ and 11′0″ rental platforms chosen for renter coverage and durability.' },
        { title: 'Phased production', body: 'Three batches scheduled against each station\'s opening date.' },
        { title: 'Delivery & support', body: 'Fleet shipped per batch with parts packs and repair guidance per station.' },
      ],
      result:
        'All three batches landed within 120 days, timed to each station\'s opening. The reinforced platforms are expected to cut the early-replacement rate by an estimated 20–25%, with parts packs covering field repairs between seasons.',
      outcome: '320 boards · 120 days · 3 batches · est. −20–25% early replacements.',
      metrics: [
        { value: '320', label: 'boards in two sizes' },
        { value: '120', label: 'days from order to final batch' },
        { value: '3', label: 'phased deliveries, one per station opening' },
        { value: '−20–25%', label: 'estimated early-replacement rate' },
      ],
      takeaways: [
        'Phased batches let a fleet land exactly when each station opens — no idle inventory, no late start.',
        'Two sizes (10′6″ and 11′0″) covered most renters without fragmenting the fleet.',
        'Reinforced construction is what moves the early-replacement number, not price alone.',
        'Per-station parts packs kept boards in service between full seasons.',
      ],
      customizations: [
        '10′6″ and 11′0″ rental platforms matched to renter profiles',
        'Reinforced rails and UV-stable materials for high-rotation use',
        'Fleet artwork and numbering per station',
        'Three-batch production schedule aligned to station openings',
        'Per-station parts packs and repair guidance',
        'Split-site packing and delivery verification per batch',
      ],
      inspectionFocus: [
        'Reinforced construction verification per board',
        'Inflation and air-tightness on every board',
        'Fleet artwork and station numbering accuracy',
        'Accessory and parts-pack completeness per station',
        'Packing checks for split-site, multi-batch delivery',
      ],
      confidentiality:
        'By agreement, the operator\'s name and station locations are not disclosed. This project is presented anonymously to protect commercial confidentiality.',
      tags: ['Phased fleet delivery', 'Rental-grade construction', 'Lower replacement rate'],
    },
    {
      slug: 'eu-distributor-private-label',
      customerType: 'Distributors & Wholesalers',
      region: 'Europe',
      productCategory: 'Private Label Inflatable SUP (2 SKUs)',
      projectStage: 'Range planning → Sample approval → 90-day volume delivery',
      manufacturingScope: 'Private-label branding, retail packaging, volume production, reorder support',
      keyRequirements: 'Two market-proven SKUs under the distributor\'s own brand, EU retail packaging, season-date alignment',
      qualityFocus: 'Artwork accuracy, barcode and label per market, kit completeness, air-tightness',
      navLabel: 'Distributor Private Label',
      metaTitle: 'EU Distributor Private Label | 1,200 Boards in 90 Days — iSupfactory',
      metaDescription:
        'How a European distributor launched a 1,200-board private-label SUP line in 90 days — two SKUs, EU retail packaging, and a Q4 repeat order on the same locked specification.',
      kicker: 'Private Label Project',
      h1: 'How a European Distributor Launched a 1,200-Board Private-Label SUP Line in 90 Days',
      intro: [
        'A European distributor wanted its own branded SUP line on the shelf for the summer season — two market-proven SKUs, complete retail packaging, and no factory relationships of its own.',
      ],
      industry: 'Distributors & Wholesalers',
      requirement: '1,200 branded boards across two SKUs — 10′6″ all-around and 12′6″ touring — with EU retail packaging, delivered in 90 days.',
      challenge:
        'The summer shelf window is fixed, so all 1,200 boards and their packaging had to land together on time. Private-label packaging — barcodes, labels, manuals — had to match EU retail requirements, and the distributor had no SUP factory experience to draw on.',
      solution:
        'Two market-proven platforms chosen for the retail range, full private-label artwork and EU retail packaging handled in one program, and production scheduled so both SKUs shipped together inside the 90-day window — with the specification locked for a clean repeat order.',
      product: 'Private label inflatable SUP — 10′6″ all-around and 12′6″ touring, with branded paddle, pump, backpack and printed retail cartons.',
      process: [
        { title: 'Range planning', body: 'Two SKUs selected — 10′6″ all-around and 12′6″ touring — for retail coverage.' },
        { title: 'Sample approval', body: 'Artwork, packaging and finish confirmed on physical boards.' },
        { title: '90-day production', body: 'Volume scheduled so both SKUs ship together for the season window.' },
        { title: 'Q4 reorder', body: 'Repeat order placed on the same locked specification.' },
      ],
      result:
        'All 1,200 boards with complete retail packaging shipped within 90 days, in time for the summer shelf window. The line sold through and the distributor returned in Q4 with a repeat order on the same locked specification.',
      outcome: '1,200 boards · 90 days · 2 SKUs · Q4 repeat order.',
      metrics: [
        { value: '1,200', label: 'boards in one launch' },
        { value: '90', label: 'days to full delivery' },
        { value: '2', label: 'retail SKUs, both in time for the window' },
        { value: 'Q4', label: 'repeat order on the same spec' },
      ],
      takeaways: [
        'Starting with two proven SKUs keeps inventory risk low while still filling a retail range.',
        'One program covering boards, accessories and packaging removes a common launch failure point.',
        'A fixed season date forces the schedule — production planning must treat it as non-negotiable.',
        'Locking the specification at launch makes repeat orders clean and consistent.',
      ],
      customizations: [
        '10′6″ all-around and 12′6″ touring platforms for the retail range',
        'Private-label deck, bottom and packaging artwork',
        'Branded paddle, pump and backpack per SKU',
        'Printed retail cartons, barcodes, labels and user manual for EU retail',
        'BOM and specification locked for repeat-order consistency',
        'Batched delivery aligned to the retail launch window',
      ],
      inspectionFocus: [
        'Artwork accuracy against approved private-label files',
        'Barcode, label and manual verification per market',
        'Kit completeness per SKU across the 1,200-board run',
        'Air-tightness spot checks during production',
        'Carton and packing verification per SKU',
      ],
      confidentiality:
        'By agreement, the distributor\'s name and retail customers are not disclosed. This project is presented anonymously to protect commercial confidentiality.',
      tags: ['Private label', '2-SKU retail range', 'Season-window delivery'],
    },
    {
      slug: 'resort-sup-fleet',
      customerType: 'Resort & Hospitality',
      region: 'Europe / North America',
      productCategory: 'All-Around Inflatable SUP',
      projectStage: 'Sample approval → Volume production → Fleet refresh',
      manufacturingScope: 'Graphics, accessories, packing and fleet production',
      keyRequirements: 'Rental durability, compact storage, full property branding',
      qualityFocus: 'Air-tightness, artwork accuracy, accessory completeness, carton marking',
      navLabel: 'Luxury Resort SUP Fleet',
      metaTitle: 'Luxury Resort SUP Fleet | 100 Branded Boards — iSupfactory',
      metaDescription:
        'How a luxury resort equipped its beach program with 100 branded SUP boards — custom graphics, rental-grade construction and seasonal fleet management.',
      kicker: 'Resort Project',
      h1: 'How a Luxury Resort Standardized a 100-Board Branded SUP Fleet',
      intro: [
        'A luxury resort wanted its beach program to feel like part of the property — branded boards in the resort palette, durable enough for daily guest use and easy to store between seasons.',
      ],
      industry: 'Resort & Hospitality',
      requirement: '100 branded SUP boards for guest rental, in the property palette.',
      challenge:
        'Daily rental use wears out generic fleets fast, and off-season storage is limited. The resort needed boards that survive heavy use, store compactly and carry full property branding.',
      solution:
        'Rental-grade inflatable construction with reinforced rails and UV-resistant materials, full-board graphics in the resort colors, and branded paddles and pumps as part of the fleet package.',
      product: 'Custom inflatable SUP — 11′ all-around platform, branded deck graphics and accessories.',
      process: [
        { title: 'Fleet consultation', body: 'Guest volume, shoreline and season length defined the fleet size and board mix.' },
        { title: 'Branded sample', body: 'Colors and logo approved on a physical board before production.' },
        { title: 'Production & QC', body: '100 boards produced with multi-point QC across the run.' },
        { title: 'Delivery & refresh', body: 'Seasonal delivery, spare parts and a refresh program for later seasons.' },
      ],
      result:
        'The fleet launched on time for the season, boards store in a single room off-season, and guest feedback on the branded equipment drove a fleet expansion the following year.',
      outcome: 'On-time season launch, 100% branded fleet, expansion the next season.',
      customizations: [
        'Board platform, size and construction selected for daily rental use',
        'Full-board deck graphics in the property palette',
        'Rail branding and logo placement approved on a physical sample',
        'Branded paddle, pump and accessory set for every board',
        'Fleet numbering and color-coding across the run',
        'Compact storage configuration and seasonal refresh scope',
      ],
      inspectionFocus: [
        'Inflation and air-tightness on every board',
        'Valve and reinforced-rail condition',
        'Artwork accuracy and color match to the approved sample',
        'Accessory and kit completeness per board',
        'Carton marking and fleet labels before shipment release',
      ],
      confidentiality:
        'By agreement, the resort\'s name and brand assets are not disclosed. This project is presented anonymously to protect commercial confidentiality.',
      tags: ['Branded guest fleet', 'Rental-grade construction', 'Seasonal refresh'],
    },
    {
      slug: 'private-label-launch',
      customerType: 'Retail & Outdoor Brands',
      region: 'Europe',
      productCategory: 'All-Around Inflatable SUP (private label)',
      projectStage: 'Sample approval → Validation run → Scale',
      manufacturingScope: 'Product and packaging artwork, sampling, production, tooling retention',
      keyRequirements: 'Sellable line without in-house SUP design or manufacturing',
      qualityFocus: 'Artwork version control, packaging accuracy, kit completeness',
      navLabel: 'Private Label Brand Launch',
      metaTitle: 'Private Label SUP Launch | Brand Extension — iSupfactory',
      metaDescription:
        'How an existing outdoor brand extended into SUP with a private label product line — from logo to first container, with scalable MOQ.',
      kicker: 'Private Label Project',
      h1: 'How an Outdoor Brand Launched a Private-Label SUP Line from Logo to First Container',
      intro: [
        'A sports retailer with an established brand wanted to extend into paddle sports without building factory relationships — a sellable SUP line under its own name.',
      ],
      industry: 'Retail & Outdoor Brands',
      requirement: 'A private label SUP line — logo, colors and packaging on proven platforms, first run at 50pcs.',
      challenge:
        'No in-house SUP design team, no manufacturing experience, and a first order small enough to test the market before scaling.',
      solution:
        'Full product and packaging artwork developed from the brand assets, a 50pcs validation run, then scaling on the same verified platforms with tooling kept for the brand.',
      product: 'Private label inflatable SUP — branded deck, paddle, pump, backpack and printed cartons.',
      process: [
        { title: 'Brand intake', body: 'Logo, colors and brand guidelines turned into board and packaging artwork.' },
        { title: 'Sample approval', body: 'Physical sample confirmed finish, colors and packaging.' },
        { title: 'Validation run', body: '50pcs first run sold through before scaling.' },
        { title: 'Scale', body: 'Container-order production at consistent quality, designs owned by the brand.' },
      ],
      result:
        'The line sold through its validation run within one season and scaled to a container order — with the brand owning all designs and tooling.',
      outcome: 'Validated in one season, scaled to container orders.',
      customizations: [
        'Board platforms, sizes and colors mapped to the brand line',
        'Deck, bottom and packaging artwork built from brand assets',
        'Branded paddle, pump, backpack and accessory kit',
        'Printed retail cartons and label layout',
        'Barcode and user-manual version for the target market',
        'Tooling and artwork ownership retained for the brand',
      ],
      inspectionFocus: [
        'Artwork version match to the approved files',
        'Color and finish accuracy on the physical sample',
        'Packaging, barcode and manual verification',
        'Kit completeness across the validation run',
        'Air-tightness spot checks during production',
      ],
      confidentiality:
        'By agreement, the brand name and commercial details are not disclosed. This project is presented anonymously to protect commercial confidentiality.',
      tags: ['Brand extension', 'Packaging design', 'Scalable MOQ'],
    },
    {
      slug: 'club-team-boards',
      customerType: 'Paddle Clubs & Teams',
      region: 'North America',
      productCategory: 'Training Inflatable SUP',
      projectStage: 'Sample approval → Fleet production → Expansion reorder',
      manufacturingScope: 'Club branding, fleet production, spare parts support',
      keyRequirements: 'Uniform team look, tight budget, identical future expansion',
      qualityFocus: 'Artwork accuracy, air-tightness, kit completeness, reorder consistency',
      navLabel: 'Club Team Boards',
      metaTitle: 'Club Team SUP Boards | Branded Fleet Refresh — iSupfactory',
      metaDescription:
        'How a paddling club rebranded and refreshed its fleet with 25 branded training boards — team graphics, parts support and consistent reorders.',
      kicker: 'Club Project',
      h1: 'How a Paddling Club Rebranded a 25-Board Training Fleet',
      intro: [
        'A paddling club rebranded and needed its equipment to match — a unified team fleet for training and regattas, without mismatched stock.',
      ],
      industry: 'Paddle Clubs & Teams',
      requirement: '25 branded training boards with club name, colors and logo, plus replacement parts.',
      challenge:
        'Existing fleet was mismatched and unbranded; budgets were tight and future expansion needed identical matching stock.',
      solution:
        'Club branding on every board, fleet pricing for the volume, and spare parts + repair guidance to extend board life.',
      product: 'Custom team SUP — training shape with club graphics, plus replacement fins and repair kits.',
      process: [
        { title: 'Club intake', body: 'Membership, session types and current equipment reviewed.' },
        { title: 'Board selection', body: 'Training and beginner shapes matched to the club program.' },
        { title: 'Branding', body: 'Club name, colors and logo printed across the fleet.' },
        { title: 'Delivery & grow', body: 'Fleet delivered with parts; identical reorder for expansion.' },
      ],
      result:
        'Members train on matching branded equipment, and the club extended the fleet the following season with an identical reorder at the same quality.',
      outcome: 'Unified fleet, identical expansion reorder.',
      customizations: [
        'Training and beginner platforms matched to the club program',
        'Club name, colors and logo printed across the fleet',
        'Board numbering and size grouping per training group',
        'Replacement fins and repair kits as fleet accessories',
        'Reorder specification locked for identical future expansion',
      ],
      inspectionFocus: [
        'Artwork accuracy of club name, colors and logo',
        'Inflation and air-tightness verification',
        'Accessory and repair-kit completeness',
        'Color consistency across the 25-board run',
      ],
      confidentiality:
        'By agreement, the club name and location are not disclosed. This project is presented anonymously to protect commercial confidentiality.',
      tags: ['Club branding', 'Fleet pricing', 'Parts support'],
    },
    {
      slug: 'school-program-fleet',
      customerType: 'Education & Youth Programs',
      region: 'Europe',
      productCategory: 'Beginner & Multi-Person Inflatable SUP',
      projectStage: 'Program review → Sample approval → Fleet delivery',
      manufacturingScope: 'Package design, production, spare parts and renewal support',
      keyRequirements: 'Safety-first equipment, class-size quantities, limited staff management',
      qualityFocus: 'Stability, air-tightness, accessory completeness, user guidance',
      navLabel: 'School Program Fleet',
      metaTitle: 'School SUP Program | Beginner Fleet — iSupfactory',
      metaDescription:
        'How a school launched a paddle sports elective with a 15-board beginner fleet and multi-person boards — safety-first equipment for instruction.',
      kicker: 'School Project',
      h1: 'How a School Launched a 15-Board Beginner Fleet for Paddle Sports Instruction',
      intro: [
        'A school launching a paddle sports elective needed equipment that is stable and safe for first-timers, sized to classes, and easy to manage with limited staff.',
      ],
      industry: 'Education & Youth Programs',
      requirement: 'A beginner fleet for class sizes, including multi-person boards for first lessons.',
      challenge:
        'Mixed ability levels, strict safety needs, school procurement cycles and a budget that must cover future cohorts.',
      solution:
        'Wide high-volume beginner boards and multi-person boards, program pricing matched to class quantities, and clear user guidance for instructors.',
      product: 'Beginner SUP fleet — stable platforms with reinforced construction for long program life.',
      process: [
        { title: 'Program review', body: 'Class sizes, water area and instructor setup defined the package.' },
        { title: 'Package build', body: 'Board types and quantities matched to instruction.' },
        { title: 'Sample approval', body: 'Stability and construction verified on a physical board.' },
        { title: 'Deliver & renew', body: 'Bulk supply, spare parts and reorders for new cohorts.' },
      ],
      result:
        'Instructors reported faster first-session progress on the stable platforms, and the program renewed equipment with a matching reorder the next year.',
      outcome: 'Faster learning curve, renewed equipment next year.',
      customizations: [
        'Wide, high-volume beginner platforms for first sessions',
        'Multi-person boards included for group lessons',
        'Board size and quantity matched to class sizes',
        'Clear user guidance and instruction labels',
        'Reinforced construction for long program life',
        'Bulk supply and renewal reorder specification',
      ],
      inspectionFocus: [
        'Stability and deck configuration verification',
        'Inflation and air-tightness on every board',
        'Accessory completeness per board and class kit',
        'User guidance and labeling accuracy',
        'Carton marking and class-kit packing checks',
      ],
      confidentiality:
        'By agreement, the school name and region are not disclosed. This project is presented anonymously to protect commercial confidentiality.',
      tags: ['Beginner fleet', 'Program launch', 'Renewal orders'],
    },
    {
      slug: 'distributor-line-expansion',
      customerType: 'Distributors & Wholesalers',
      region: 'Two export regions',
      productCategory: 'Mid-range Inflatable SUP (6 SKUs)',
      projectStage: 'Range planning → Sample approval → Multi-market supply',
      manufacturingScope: 'Boards, accessories and retail packaging under one program',
      keyRequirements: 'One quality owner, consistent branding, reduced per-SKU inventory',
      qualityFocus: 'Air-tightness, artwork accuracy, barcode and label accuracy, BOM match',
      navLabel: 'Distributor Line Expansion',
      metaTitle: 'Distributor SUP Line Expansion | 6-SKU Program — iSupfactory',
      metaDescription:
        'How a water-sports distributor added a full mid-market SUP range across six SKUs — one factory, one program, exported to multiple markets.',
      kicker: 'Distributor Project',
      h1: 'How a Distributor Launched a 6-SKU SUP Range Across Two Markets',
      intro: [
        'A water-sports distributor carrying kayaks and accessories wanted its own inflatable SUP range — without fragmenting supply across several factories for boards, paddles and pumps.',
      ],
      industry: 'Distributors & Wholesalers',
      requirement: 'A six-SKU mid-market SUP range (10′6″ to 12′6″ plus accessory kits), with export to two regions.',
      challenge:
        'Separate factories for boards, paddles and pumps meant inconsistent branding, three separate supply points and no single quality owner for warranty claims.',
      solution:
        'One program covering boards, accessories and retail packaging; shared accessory kits to cut per-SKU inventory; and supply options matched to each market\'s setup.',
      product: 'Six branded retail SKUs — inflatable SUP platforms with divider-packed complete kits in printed cartons.',
      process: [
        { title: 'Range planning', body: 'Market gaps and price points defined the six SKUs and bundle contents.' },
        { title: 'Unified branding', body: 'One design system applied across boards, paddles, pumps and cartons.' },
        { title: 'Program pricing', body: 'Volume pricing across the full program, not per SKU.' },
        { title: 'Split-market supply', body: 'Standard export terms for the home region, full-service terms for the second market.' },
      ],
      result:
        'The range launched across both markets in one season; shared accessory kits cut landed inventory, and warranty issues were resolved through a single factory contact.',
      outcome: 'One-season multi-market launch, lower landed inventory, single point of warranty.',
      customizations: [
        'Six SKUs from 10′6″ to 12′6″ plus accessory kit bundles',
        'One design system applied to boards, paddles, pumps and cartons',
        'Shared accessory kits to reduce per-SKU inventory',
        'Divider-packed complete kits in printed retail cartons',
        'Barcode, label and manual versions per target market',
        'Supply terms and packaging setup matched to each market',
      ],
      inspectionFocus: [
        'BOM match per SKU configuration',
        'Artwork and branding accuracy across the six SKUs',
        'Barcode and label accuracy per market',
        'Accessory kit completeness and divider packing',
        'Air-tightness verification across the run',
      ],
      confidentiality:
        'By agreement, the distributor name and customer list are not disclosed. This project is presented anonymously to protect commercial confidentiality.',
      tags: ['Multi-SKU program', 'Complete retail kits'],
    },
    {
      slug: 'startup-brand-zero-to-one',
      customerType: 'Startup SUP Brands',
      region: 'North America',
      productCategory: 'ODM All-Around Inflatable SUP',
      projectStage: 'Concept → Trial run → Launch order',
      manufacturingScope: 'ODM development, graphics, packaging, production',
      keyRequirements: 'Low-MOQ first run, launch-date alignment, tooling retained for the brand',
      qualityFocus: 'Air-tightness, artwork accuracy, packaging verification',
      navLabel: 'Startup Brand 0→1 Launch',
      metaTitle: 'Startup SUP Brand Launch | Concept to First Batch — iSupfactory',
      metaDescription:
        'How a SUP startup went from concept to a sold-out first batch — ODM development, a 10-piece trial run, then a 200-piece branded launch order.',
      kicker: 'Startup Project',
      h1: 'From Concept to a Sold-Out 200-Board Launch for a Startup SUP Brand',
      intro: [
        'Two founders with an audience but no factory wanted to sell their own SUP — an ODM board developed to their spec, with a launch-size order that would not sink them.',
      ],
      industry: 'Startup SUP Brands',
      requirement: 'ODM development at low MOQ: a 10 pcs trial run to validate, then 200 pcs for launch.',
      challenge:
        'No design team, no import experience and a first order too small for most factories — plus a launch date tied to the northern-hemisphere season.',
      solution:
        'ODM development from their concept on a proven platform, a 10 pcs trial run covering samples and supply verification, then a 200 pcs branded launch order with tooling kept for the brand.',
      product: 'Branded ODM inflatable SUP — custom deck graphics, packaging, and retail-ready carton sizing.',
      process: [
        { title: 'Concept call', body: 'Target rider, price point and launch date set the base platform.' },
        { title: 'Trial run', body: '10 pcs proved the product and packaging end to end.' },
        { title: 'Launch order', body: '200 pcs produced with the verified artwork and carton spec.' },
        { title: 'Scale path', body: 'Tooling retained for the brand; reorders at improved pricing.' },
      ],
      result:
        'The first batch sold out within weeks of season start; feedback from the trial run fixed a packaging issue before the big order went into production.',
      outcome: 'Sold-out launch batch, packaging fixed pre-scale, reorder path in place.',
      customizations: [
        'ODM board developed from the brand concept on a proven platform',
        'Custom deck graphics and brand packaging',
        'Retail-ready carton sizing for the launch order',
        'Accessory set and kit configuration matched to the target rider',
        'Tooling and artwork retained for the brand',
        'Launch-date-aligned production scheduling',
      ],
      inspectionFocus: [
        'Artwork accuracy against the approved files',
        'Air-tightness verification on the trial run and launch order',
        'Packaging and carton verification — including the trial-run fix',
        'Accessory and kit completeness',
      ],
      confidentiality:
        'By agreement, the brand name and launch details are not disclosed. This project is presented anonymously to protect commercial confidentiality.',
      tags: ['ODM development', 'Low-MOQ trial run', 'Season-date planning'],
    },
    {
      slug: 'rental-fleet-multi-site',
      customerType: 'Rental Fleet Operators',
      region: 'North America',
      productCategory: 'Rental-grade All-Around Inflatable SUP',
      projectStage: 'Fleet audit → Uniform production → Seasonal refresh',
      manufacturingScope: 'Fleet specification, production, parts packs, refresh program',
      keyRequirements: 'One uniform board across sites, rental-abuse durability',
      qualityFocus: 'Reinforced construction verification, air-tightness, kit completeness',
      navLabel: 'Multi-Site Rental Fleet',
      metaTitle: 'Rental Fleet Expansion | 200 Boards, 3 Sites — iSupfactory',
      metaDescription:
        'How a multi-site rental operator replaced mixed stock with 200 uniform boards across three locations — fleet pricing, seasonal refresh and parts supply.',
      kicker: 'Rental Project',
      h1: 'Standardizing a 200-Board Rental Fleet Across Three Sites for a Fleet Operator',
      intro: [
        'A rental operator running three waterfront locations needed one uniform fleet instead of mixed stock — same board on every site, priced for fleet volume.',
      ],
      industry: 'Rental Fleet Operators',
      requirement: '200 rental-grade boards across three sites, with seasonal refresh and field-repairable parts.',
      challenge:
        'Mixed aging stock complicated repairs and pricing; rental abuse demands reinforced construction, and off-season storage is split across three sites.',
      solution:
        'One rental-grade platform across all sites with reinforced rails and UV-stable materials, fleet-level pricing on the 200-board volume, and a parts pack with repair guidance per site.',
      product: 'Rental-grade inflatable SUP — 11′ all-around platform with reinforced construction and repair kits.',
      process: [
        { title: 'Fleet audit', body: 'Site volume and utilization charts set the allocation across locations.' },
        { title: 'Uniform spec', body: 'One board everywhere — simpler repairs, pricing and training.' },
        { title: 'Fleet pricing', body: 'Volume discount across the combined 200-board order.' },
        { title: 'Parts & refresh', body: 'Per-site parts packs, plus a defined seasonal replacement cycle.' },
      ],
      result:
        'The uniform fleet cut per-site repair confusion, combined ordering unlocked fleet pricing, and the 200-board program became the baseline for seasonal renewal.',
      outcome: 'Uniform operations, lower per-unit cost, repeatable seasonal cycle.',
      customizations: [
        'One rental-grade platform across all three sites',
        'Reinforced rails and UV-stable materials for rental abuse',
        'Site allocation and fleet numbering per location',
        'Per-site parts packs with repair guidance',
        'Defined seasonal replacement cycle',
      ],
      inspectionFocus: [
        'Reinforced construction verification per board',
        'Inflation and air-tightness on every board',
        'Accessory and repair-kit completeness per site',
        'Fleet numbering and site labeling accuracy',
        'Packing checks for split-site delivery',
      ],
      confidentiality:
        'By agreement, the operator name and site locations are not disclosed. This project is presented anonymously to protect commercial confidentiality.',
      tags: ['Multi-site fleet', 'Rental-grade construction', 'Seasonal renewal'],
    },
    {
      slug: 'touring-sup-range',
      customerType: 'Outdoor & Water-Sports Distributors',
      region: 'Europe',
      productCategory: 'Touring Inflatable SUP',
      projectStage: 'Product brief → Sample approval → Volume production',
      manufacturingScope: 'Platform review, graphics, accessory configuration, retail packaging and production',
      keyRequirements: 'Touring performance, project-specific graphics, complete retail kit',
      qualityFocus: 'Air-tightness, artwork accuracy, accessory completeness, carton marking',
      navLabel: 'Touring SUP Range',
      metaTitle: 'Touring SUP Range Development | Outdoor Distributor — iSupfactory',
      metaDescription:
        'How iSupfactory supported a touring SUP range for a European outdoor distributor — platform review, project-specific graphics, accessory configuration and retail packaging.',
      kicker: 'Touring Project',
      h1: 'Developing a Touring SUP Range for a European Outdoor Distributor',
      intro: [
        'A custom inflatable SUP project covering platform review, project-specific graphics, accessory configuration, retail packaging and quality planning — from sample approval to shipment preparation.',
      ],
      industry: 'Distributors & Wholesalers',
      requirement: 'A touring SUP range with project-specific graphics, accessory configuration and retail packaging, controlled from sample approval to shipment.',
      challenge:
        'Touring paddlers expect stability at speed and predictable glide, so the platform, dimensions and volume had to be reviewed before production. Artwork had to work around rails, EVA and valve positions, and every retail kit had to arrive complete across the range.',
      solution:
        'Platform and dimension review for touring performance, project-specific graphics aligned to board features, an accessory configuration covering paddle, leash and bag, retail packaging planning and controlled volume production with defined quality checkpoints.',
      product: 'Touring inflatable SUP range — performance platform with custom graphics, a complete accessory kit and retail-ready packaging.',
      process: [
        { title: 'Platform review', body: 'Touring dimensions, volume and rail profile matched to the target rider and market.' },
        { title: 'Specification & artwork', body: 'Technical spec, artwork alignment and customer approval BOM prepared.' },
        { title: 'Sample approval', body: 'Construction, graphics and kit confirmed on a physical board.' },
        { title: 'Production & inspection', body: 'Volume production with quality checkpoints, packing verification and shipment release.' },
      ],
      result:
        'The range progressed from sample approval to shipment preparation under controlled product, artwork, BOM and packing documentation — the approved sample served as the reference for production and final inspection.',
      outcome: 'Controlled sample-to-production path; graphics and packing locked before production.',
      customizations: [
        'Touring platform, dimensions and volume configuration',
        'Project-specific top, bottom and rail graphics',
        'EVA pad layout and color configuration',
        'Fin system, bungee layout and accessory set',
        'Branded bag, user-manual version and retail packaging',
        'Carton marking and barcode requirements for the target market',
      ],
      inspectionFocus: [
        'Inflation and air-tightness verification',
        'Valve, rail and seam inspection',
        'Artwork accuracy to the approved files',
        'Accessory and kit completeness',
        'Retail packaging, barcode and carton-marking verification',
      ],
      confidentiality:
        'By agreement, the distributor name and customer list are not disclosed. This project is presented anonymously to protect commercial confidentiality.',
      tags: ['Touring SUP range', 'Custom graphics', 'Retail packaging'],
    },
    {
      slug: 'fishing-sup-program',
      customerType: 'Outdoor Retailers',
      region: 'North America',
      productCategory: 'Fishing Inflatable SUP',
      projectStage: 'Concept review → Sample approval → Program production',
      manufacturingScope: 'Platform configuration, accessory layout, packaging and production',
      keyRequirements: 'Fishing accessory integration, stable platform, organized pack',
      qualityFocus: 'Air-tightness, accessory anchoring, artwork accuracy, pack completeness',
      navLabel: 'Fishing SUP Program',
      metaTitle: 'Fishing SUP Development | Accessory Layout & Pack — iSupfactory',
      metaDescription:
        'How iSupfactory developed a fishing SUP configuration for an outdoor retailer — accessory layout, organized pack and retail-ready packing under one controlled program.',
      kicker: 'Fishing Project',
      h1: 'Fishing SUP Development for an Outdoor Retailer — Accessory Layout and Pack Configuration',
      intro: [
        'A fishing-specific SUP project: a stable platform configured with fishing accessory zones, an organized pack and retail-ready packing — from concept review to program production.',
      ],
      industry: 'Retail & Outdoor Brands',
      requirement: 'A fishing SUP configuration with accessory anchoring, organized pack and retail packaging, from concept review to program production.',
      challenge:
        'Fishing boards need accessory anchoring — rod holders, D-rings and crate zones — without compromising stability. The pack had to stay organized on board, and the packaging had to present the category clearly at retail.',
      solution:
        'A wide, stable platform with defined accessory zones, D-ring and bungee positioning for fishing gear, an organized pack with repair kit, and retail packaging developed under a single controlled program.',
      product: 'Fishing inflatable SUP — stable platform with fishing accessory zones, organized pack and retail-ready packaging.',
      process: [
        { title: 'Concept review', body: 'Target use, gear carried and pack structure defined the configuration.' },
        { title: 'Accessory layout', body: 'D-rings, bungees and storage zones positioned on the deck.' },
        { title: 'Sample approval', body: 'Stability and accessory anchoring verified on a physical board.' },
        { title: 'Program production', body: 'Defined quality checkpoints, pack verification and shipment release.' },
      ],
      result:
        'The configuration was confirmed on the approved sample — accessory anchoring, pack structure and packaging all aligned before production — and the program shipped with verified kits.',
      outcome: 'Accessory layout and pack locked at sample stage; verified kits shipped.',
      customizations: [
        'Stable wide platform with fishing accessory zones',
        'Rod holder, D-ring and bungee positioning',
        'Deck layout for crate and tackle placement',
        'Paddle, fin and leash selection for fishing use',
        'Organized accessory pack and repair kit',
        'Retail packaging for the fishing SUP category',
        'Barcode and carton marking for the target market',
      ],
      inspectionFocus: [
        'Accessory anchoring and D-ring placement verification',
        'Inflation and air-tightness verification',
        'Artwork and deck layout accuracy',
        'Pack completeness and accessory configuration',
        'Retail packaging and carton-marking verification',
      ],
      confidentiality:
        'By agreement, the retailer name and channel details are not disclosed. This project is presented anonymously to protect commercial confidentiality.',
      tags: ['Fishing configuration', 'Accessory layout', 'Pack organization'],
    },
    {
      slug: 'yoga-sup-program',
      customerType: 'Water-Sports Schools & Programs',
      region: 'Europe',
      productCategory: 'Yoga Inflatable SUP',
      projectStage: 'Program review → Sample approval → Fleet delivery',
      manufacturingScope: 'Stable platform configuration, deck coverage, production and program packaging',
      keyRequirements: 'Stability for group practice, full EVA deck coverage, consistent fleet',
      qualityFocus: 'Deck coverage, air-tightness, artwork accuracy, kit completeness',
      navLabel: 'Yoga SUP Program',
      metaTitle: 'Yoga SUP Development | Training Program — iSupfactory',
      metaDescription:
        'How iSupfactory developed a stable yoga SUP configuration for a water-sports training program — full deck coverage and a consistent program fleet.',
      kicker: 'Yoga Project',
      h1: 'Developing a Stable Yoga SUP Configuration for a Water-Sports Training Program',
      intro: [
        'A yoga SUP configuration for a training program: a wide, high-volume platform with full EVA deck coverage, produced as a consistent fleet for group practice.',
      ],
      industry: 'Education & Youth Programs',
      requirement: 'A stable yoga SUP configuration with full deck coverage for group practice, in program quantities.',
      challenge:
        'Yoga practice demands a wide, high-volume platform that stays rock-solid in the water. Groups need consistent boards, and instructors need clear guidance plus manageable storage between sessions.',
      solution:
        'A wide, high-volume platform with full EVA deck coverage, a consistent fleet configuration across the program, and instructor guidance and program labels included.',
      product: 'Yoga inflatable SUP — stable platform with full deck pad coverage and a consistent program fleet.',
      process: [
        { title: 'Program review', body: 'Practice style, group size and storage defined the configuration.' },
        { title: 'Configuration', body: 'Platform, deck coverage and finish set across the fleet.' },
        { title: 'Sample approval', body: 'Stability and deck coverage verified on a physical board.' },
        { title: 'Fleet delivery', body: 'Program quantities produced with kit and packaging verification.' },
      ],
      result:
        'The fleet shipped as one consistent configuration — every board matching the approved sample in stability, deck coverage and finish — with guidance included for instructors.',
      outcome: 'Consistent fleet matched to the approved sample; program packaging verified.',
      customizations: [
        'Wide, high-volume platform for standing stability',
        'Full EVA deck coverage across the usable area',
        'Deck layout and strap positioning for practice',
        'Consistent color and finish across the fleet',
        'Instructor guidance and program labels',
        'Storage and program packaging configuration',
      ],
      inspectionFocus: [
        'Deck coverage and EVA adhesion inspection',
        'Inflation and air-tightness verification',
        'Stability verification on the approved sample',
        'Artwork and finish consistency across the run',
        'Kit completeness and program packaging checks',
      ],
      confidentiality:
        'By agreement, the program name and location are not disclosed. This project is presented anonymously to protect commercial confidentiality.',
      tags: ['Yoga configuration', 'Full deck coverage', 'Program fleet'],
    },
  ],
  es: [
    {
      slug: 'coastal-rental-fleet',
      customerType: 'Operadores de flotas de alquiler',
      region: 'Mediterráneo — España, Italia, Grecia',
      productCategory: 'SUP hinchable de grado alquiler (10′6″ + 11′0″)',
      projectStage: 'Evaluación de flota → Aprobación de muestra → Entrega en 3 fases',
      manufacturingScope: 'Especificación de flota, construcción reforzada, producción por fases, suministro de repuestos',
      keyRequirements: 'Tablas duraderas para alquiler, entrega por fases, menor tasa de reemplazo temprano',
      qualityFocus: 'Construcción reforzada, estanqueidad, arte de flota, integridad del kit',
      navLabel: 'Flota de alquiler costera',
      metaTitle: 'Flota de alquiler costera | 320 tablas en 120 días — iSupfactory',
      metaDescription:
        'Cómo un operador de alquiler del Mediterráneo construyó una flota costera de 320 tablas en España, Italia y Grecia — tres fases en 120 días, con una reducción estimada del 20–25 % en reemplazos tempranos.',
      kicker: 'Proyecto de alquiler costero',
      h1: 'Cómo un operador de alquiler del Mediterráneo construyó una flota costera de 320 tablas en 120 días',
      intro: [
        'Un operador con estaciones costeras en España, Italia y Grecia necesitaba una flota duradera para la temporada alta — entregada en tres fases, a tiempo para la apertura de cada estación.',
      ],
      industry: 'Operadores de flotas de alquiler',
      requirement: '320 tablas de alquiler en dos tamaños — 10′6″ y 11′0″ — para estaciones costeras en tres países, entregadas en tres fases dentro de 120 días.',
      challenge:
        'La rotación diaria desgasta rápido las tablas, y la tasa de reemplazo temprano del operador rondaba el 20–25 %. Las estaciones abrían en fechas distintas en tres países: una entrega única no funcionaba, ni tampoco una flota de un solo tamaño.',
      solution:
        'Dos plataformas de alquiler duraderas en los tamaños que cubren a la mayoría de los usuarios, construcción reforzada para el uso intensivo y tres lotes de producción programados para llegar a la apertura de cada estación — con paquetes de repuestos y guía de reparación por estación.',
      product: 'SUP hinchable de grado alquiler — plataformas de 10′6″ y 11′0″ con raíles reforzados y materiales estables a los rayos UV, kits por estación.',
      process: [
        { title: 'Evaluación de flota', body: 'Aperturas de estación y volumen de rotación definieron los dos tamaños y la asignación por lote.' },
        { title: 'Selección de tablas', body: 'Plataformas de alquiler 10′6″ y 11′0″ elegidas por cobertura de usuarios y durabilidad.' },
        { title: 'Producción por fases', body: 'Tres lotes programados contra la fecha de apertura de cada estación.' },
        { title: 'Entrega y soporte', body: 'Flota enviada por fases con paquetes de repuestos y guía por estación.' },
      ],
      result:
        'Las tres fases llegaron dentro de 120 días, sincronizadas con la apertura de cada estación. Se estima que las plataformas reforzadas reducirán la tasa de reemplazo temprano entre un 20–25 %, con repuestos para reparaciones de campo entre temporadas.',
      outcome: '320 tablas · 120 días · 3 fases · −20–25 % de reemplazos tempranos (est.).',
      metrics: [
        { value: '320', label: 'tablas en dos tamaños' },
        { value: '120', label: 'días del pedido a la última fase' },
        { value: '3', label: 'entregas por fases, una por apertura' },
        { value: '−20–25 %', label: 'reemplazos tempranos estimados' },
      ],
      takeaways: [
        'Las fases permiten que la flota llegue justo cuando abre cada estación — sin inventario ocioso ni arranques tardíos.',
        'Dos tamaños (10′6″ y 11′0″) cubrieron a la mayoría de los usuarios sin fragmentar la flota.',
        'La construcción reforzada es lo que mueve la cifra de reemplazos, no solo el precio.',
        'Los paquetes de repuestos por estación mantuvieron las tablas en servicio entre temporadas.',
      ],
      customizations: [
        'Plataformas de alquiler 10′6″ y 11′0″ ajustadas a los perfiles de usuario',
        'Raíles reforzados y materiales estables a los rayos UV para uso intensivo',
        'Arte de flota y numeración por estación',
        'Programa de producción en tres fases alineado a las aperturas',
        'Paquetes de repuestos y guía de reparación por estación',
        'Embalaje y verificación de entrega por fases y ubicaciones',
      ],
      inspectionFocus: [
        'Verificación de construcción reforzada por tabla',
        'Inflado y estanqueidad en cada tabla',
        'Precisión del arte de flota y numeración de estación',
        'Integridad de accesorios y repuestos por estación',
        'Controles de embalaje para entrega multi-ubicación por fases',
      ],
      confidentiality:
        'Por acuerdo, no se revelan el nombre del operador ni las ubicaciones de las estaciones. Este proyecto se presenta de forma anónima para proteger la confidencialidad comercial.',
      tags: ['Entrega por fases', 'Construcción de grado alquiler', 'Menor tasa de reemplazo'],
    },
    {
      slug: 'eu-distributor-private-label',
      customerType: 'Distribuidores y mayoristas',
      region: 'Europa',
      productCategory: 'SUP hinchable de marca privada (2 SKU)',
      projectStage: 'Planificación de gama → Aprobación de muestra → Entrega en 90 días',
      manufacturingScope: 'Marca privada, embalaje retail, producción en volumen, soporte de reorders',
      keyRequirements: 'Dos SKU probados en el mercado bajo la marca propia, embalaje retail UE, alineación con la temporada',
      qualityFocus: 'Precisión del arte, código de barras y etiquetas por mercado, integridad del kit, estanqueidad',
      navLabel: 'Marca privada para distribuidor',
      metaTitle: 'Marca privada para distribuidor UE | 1.200 tablas en 90 días — iSupfactory',
      metaDescription:
        'Cómo un distribuidor europeo lanzó una línea de SUP de marca privada de 1.200 tablas en 90 días — dos SKU, embalaje retail UE y un reorder en el Q4 con la misma especificación bloqueada.',
      kicker: 'Proyecto de marca privada',
      h1: 'Cómo un distribuidor europeo lanzó una línea de SUP de marca privada de 1.200 tablas en 90 días',
      intro: [
        'Un distribuidor europeo quería su propia línea de SUP de marca en el lineal para la temporada de verano — dos SKU probados, embalaje retail completo y ninguna relación directa con fábricas.',
      ],
      industry: 'Distribuidores y mayoristas',
      requirement: '1.200 tablas de marca en dos SKU — 10′6″ polivalente y 12′6″ touring — con embalaje retail UE, entregadas en 90 días.',
      challenge:
        'La ventana de temporada es fija: las 1.200 tablas y su embalaje tenían que llegar juntas y a tiempo. El embalaje de marca privada — códigos de barras, etiquetas, manuales — debía cumplir los requisitos retail de la UE, y el distribuidor no tenía experiencia con fábricas de SUP.',
      solution:
        'Dos plataformas probadas para la gama retail, todo el arte de marca privada y el embalaje retail UE gestionados en un único programa, y producción programada para que ambos SKU se embarcaran juntos dentro de la ventana de 90 días — con la especificación bloqueada para un reorder limpio.',
      product: 'SUP hinchable de marca privada — 10′6″ polivalente y 12′6″ touring, con pala, bomba, mochila y cajas retail impresas.',
      process: [
        { title: 'Planificación de gama', body: 'Dos SKU seleccionados — 10′6″ polivalente y 12′6″ touring — para cobertura retail.' },
        { title: 'Aprobación de muestra', body: 'Arte, embalaje y acabado confirmados en tablas físicas.' },
        { title: 'Producción en 90 días', body: 'Volumen programado para que ambos SKU se embarquen juntos en la ventana de temporada.' },
        { title: 'Reorder Q4', body: 'Pedido repetido sobre la misma especificación bloqueada.' },
      ],
      result:
        'Las 1.200 tablas con embalaje retail completo se embarcaron dentro de 90 días, a tiempo para el lineal de verano. La línea se vendió y el distribuidor volvió en el Q4 con un reorder sobre la misma especificación bloqueada.',
      outcome: '1.200 tablas · 90 días · 2 SKU · reorder en Q4.',
      metrics: [
        { value: '1.200', label: 'tablas en un solo lanzamiento' },
        { value: '90', label: 'días hasta la entrega completa' },
        { value: '2', label: 'SKU retail, ambos a tiempo para la ventana' },
        { value: 'Q4', label: 'reorder con la misma especificación' },
      ],
      takeaways: [
        'Empezar con dos SKU probados mantiene bajo el riesgo de inventario y completa una gama retail.',
        'Un único programa que cubre tablas, accesorios y embalaje elimina un punto habitual de fallo en lanzamientos.',
        'Una fecha de temporada fija condiciona el calendario — la planificación debe tratarla como innegociable.',
        'Bloquear la especificación en el lanzamiento hace que los reorders sean limpios y coherentes.',
      ],
      customizations: [
        'Plataformas 10′6″ polivalente y 12′6″ touring para la gama retail',
        'Arte de cubierta, fondo y embalaje de marca privada',
        'Pala, bomba y mochila de marca por SKU',
        'Cajas retail impresas, códigos de barras, etiquetas y manual para retail UE',
        'BOM y especificación bloqueados para la coherencia del reorder',
        'Entrega por lotes alineada a la ventana de lanzamiento',
      ],
      inspectionFocus: [
        'Precisión del arte frente a los archivos de marca privada aprobados',
        'Verificación de código de barras, etiqueta y manual por mercado',
        'Integridad del kit por SKU en la tirada de 1.200 tablas',
        'Controles puntuales de estanqueidad durante la producción',
        'Verificación de cajas y embalaje por SKU',
      ],
      confidentiality:
        'Por acuerdo, no se revelan el nombre del distribuidor ni sus clientes retail. Este proyecto se presenta de forma anónima para proteger la confidencialidad comercial.',
      tags: ['Marca privada', 'Gama retail de 2 SKU', 'Entrega en ventana de temporada'],
    },
    {
      slug: 'resort-sup-fleet',
      customerType: 'Resorts y hotelería',
      region: 'Europa / Norteamérica',
      productCategory: 'SUP hinchable polivalente',
      projectStage: 'Aprobación de muestra → Producción en volumen → Renovación de flota',
      manufacturingScope: 'Arte, accesorios, embalaje y producción de flota',
      keyRequirements: 'Durabilidad de alquiler, almacenaje compacto, marca completa de la propiedad',
      qualityFocus: 'Estanqueidad al aire, precisión del arte, integridad de accesorios, marcado de cajas',
      navLabel: 'Flota SUP para resort de lujo',
      metaTitle: 'Flota SUP en resort de lujo | 100 tablas — iSupfactory',
      metaDescription:
        'Cómo un resort de lujo equipó su programa de playa con 100 tablas SUP de marca: arte personalizado, construcción de grado alquiler y gestión de flota por temporada.',
      kicker: 'Proyecto de resort',
      h1: 'Cómo un resort de lujo estandarizó una flota de 100 tablas SUP de marca',
      intro: [
        'Un resort de lujo quería que su programa de playa formara parte de la imagen de la propiedad: tablas de marca en los colores del resort, capaces de soportar el uso diario de los huéspedes y fáciles de guardar fuera de temporada.',
      ],
      industry: 'Resorts y hotelería',
      requirement: '100 tablas SUP de marca para alquiler de huéspedes, en los colores de la propiedad.',
      challenge:
        'El uso diario de alquiler desgasta rápido las flotas genéricas, y el espacio de almacenamiento fuera de temporada es limitado. El resort necesitaba tablas duraderas, compactas de guardar y con la marca completa de la propiedad.',
      solution:
        'Construcción hinchable de grado alquiler con rails reforzados y materiales anti-UV, arte a toda cubierta en los colores del resort y remos y bombas de marca incluidos en el paquete de flota.',
      product: 'SUP hinchables personalizados: plataforma polivalente de 11\' con arte de cubierta de marca y accesorios.',
      process: [
        { title: 'Consultoría de flota', body: 'Afluencia, zona acuática y duración de la temporada definieron el tamaño y la combinación de la flota.' },
        { title: 'Muestra de marca', body: 'Colores y logo confirmados en una tabla física antes de la producción.' },
        { title: 'Producción y QC', body: '100 tablas producidas con control de calidad multipunto.' },
        { title: 'Entrega y renovación', body: 'Entrega por temporada, accesorios y plan de renovación para las siguientes temporadas.' },
      ],
      result:
        'La flota se entregó a tiempo para el inicio de la temporada y se guardó entera en un cuarto de almacenamiento fuera de temporada; los comentarios positivos de los huéspedes sobre el equipamiento de marca impulsaron la ampliación de la flota al año siguiente.',
      outcome: 'Temporada iniciada a tiempo, flota 100% de marca, ampliada al año siguiente.',
      customizations: [
        'Plataforma, tamaño y construcción seleccionados para uso diario de alquiler',
        'Arte de cubierta a toda tabla en los colores de la propiedad',
        'Marca en los rails y colocación del logo aprobados en una muestra física',
        'Remo, bomba y accesorios de marca para cada tabla',
        'Numeración y codificación por colores de la flota',
        'Configuración de almacenaje compacto y alcance de renovación estacional',
      ],
      inspectionFocus: [
        'Inflado y estanqueidad al aire en cada tabla',
        'Estado de válvulas y rails reforzados',
        'Precisión del arte y fidelidad de color frente a la muestra aprobada',
        'Integridad de accesorios y kit por tabla',
        'Marcado de cajas y etiquetas de flota antes del embarque',
      ],
      confidentiality:
        'Por acuerdo, no se revelan el nombre ni los activos de marca del resort. Este proyecto se presenta de forma anónima para proteger la confidencialidad comercial.',
      tags: ['Flota con marca para huéspedes', 'Construcción de grado alquiler', 'Renovación por temporada'],
    },
    {
      slug: 'private-label-launch',
      customerType: 'Retail y marcas outdoor',
      region: 'Europa',
      productCategory: 'SUP hinchable polivalente (marca privada)',
      projectStage: 'Aprobación de muestra → Lote de validación → Escalado',
      manufacturingScope: 'Planos de cubierta y embalaje, muestras, producción y moldes en propiedad',
      keyRequirements: 'Línea vendible sin diseño ni fabricación SUP propios',
      qualityFocus: 'Control de versión del arte, precisión del embalaje, integridad del kit',
      navLabel: 'Lanzamiento de marca privada',
      metaTitle: 'Lanzamiento SUP de marca privada | iSupfactory',
      metaDescription:
        'Cómo una marca outdoor existente entró en el SUP con una línea de marca privada: del logo al primer pedido, con pedidos mínimos escalables.',
      kicker: 'Proyecto de marca privada',
      h1: 'Cómo una marca outdoor lanzó una línea SUP de marca privada, del logo al primer contenedor',
      intro: [
        'Un minorista deportivo con una marca consolidada quiso ampliarse al remo sin gestionar él mismo la relación con la fábrica: lanzar una línea de SUP vendible con su propia marca.',
      ],
      industry: 'Retail y marcas outdoor',
      requirement: 'Una línea de SUP de marca privada: logo, colores y embalaje sobre plataformas probadas, con 50 unidades de primer pedido.',
      challenge:
        'Sin equipo propio de diseño SUP, sin experiencia de fabricación, y un primer pedido lo bastante pequeño como para validar el mercado antes de escalar.',
      solution:
        'Desarrollo de planos completos de cubierta y embalaje a partir del material de marca, validación con 50 unidades y posterior escalado sobre las mismas plataformas verificadas, con moldes y diseños en propiedad de la marca.',
      product: 'SUP hinchable de marca privada: cubierta de marca, remo, bomba, bolsa y caja impresa.',
      process: [
        { title: 'Incorporación de la marca', body: 'Logo, colores y guía de marca convertidos en planos de cubierta y embalaje.' },
        { title: 'Aprobación de la muestra', body: 'La muestra física confirma acabado, colores y embalaje.' },
        { title: 'Lote de validación', body: 'Primer pedido de 50 unidades para vender y validar el mercado.' },
        { title: 'Escalado', body: 'Pedidos de mayor volumen con calidad constante; todos los diseños son de la marca.' },
      ],
      result: 'La línea agotó el lote de validación en un trimestre y escaló a pedidos de mayor volumen: la marca posee todos los diseños y moldes.',
      outcome: 'Validación en un trimestre, escalado a pedidos de mayor volumen.',
      customizations: [
        'Plataformas, tamaños y colores alineados con la línea de la marca',
        'Arte de cubierta, fondo y embalaje creados a partir de los activos de la marca',
        'Remo, bomba, bolsa y kit de accesorios de marca',
        'Cajas de retail impresas y maquetación de etiquetas',
        'Código de barras y versión del manual para el mercado objetivo',
        'Moldes y arte en propiedad de la marca',
      ],
      inspectionFocus: [
        'Coincidencia de la versión del arte con los archivos aprobados',
        'Precisión de color y acabado en la muestra física',
        'Verificación de embalaje, código de barras y manual',
        'Integridad del kit en el lote de validación',
        'Controles puntuales de estanqueidad durante la producción',
      ],
      confidentiality:
        'Por acuerdo, no se revelan el nombre de la marca ni los datos comerciales. Este proyecto se presenta de forma anónima para proteger la confidencialidad comercial.',
      tags: ['Extensión de marca', 'Diseño de embalaje', 'Pedidos mínimos escalables'],
    },
    {
      slug: 'club-team-boards',
      customerType: 'Clubes y equipos de remo',
      region: 'Norteamérica',
      productCategory: 'SUP hinchable de entrenamiento',
      projectStage: 'Aprobación de muestra → Producción de flota → Reorden de ampliación',
      manufacturingScope: 'Marca del club, producción de flota y soporte de recambios',
      keyRequirements: 'Imagen de equipo uniforme, presupuesto ajustado, ampliación idéntica',
      qualityFocus: 'Precisión del arte, estanqueidad, integridad del kit, coherencia en reordenes',
      navLabel: 'Tablas de equipo para club',
      metaTitle: 'Tablas SUP de equipo de club | iSupfactory',
      metaDescription:
        'Cómo un club de remo renovó su flota con 25 tablas de entrenamiento de marca: arte de equipo, soporte de accesorios y reordenes consistentes.',
      kicker: 'Proyecto de club',
      h1: 'Cómo un club de remo renovó su flota de 25 tablas con una imagen unificada',
      intro: [
        'Un club de remo renovó su imagen y quiso actualizar el equipamiento a la vez: una flota de equipo unificada para entrenamiento y competición, sin piezas sueltas de existencias que no coinciden.',
      ],
      industry: 'Clubes y equipos de remo',
      requirement: '25 tablas de entrenamiento de marca con el nombre, los colores y el logo del club, más accesorios de repuesto.',
      challenge:
        'La flota existente era desigual y sin marca; el presupuesto era limitado y el crecimiento futuro necesitaba existencias que coincidieran perfectamente.',
      solution:
        'Cada tabla lleva la marca del club, precios de flota por volumen, y accesorios y guía de reparación para prolongar la vida de las tablas.',
      product: 'SUP de equipo personalizados: plataformas de entrenamiento con arte del club, quillas de repuesto y kit de reparación.',
      process: [
        { title: 'Incorporación del club', body: 'Número de miembros, tipos de actividad y equipamiento actual.' },
        { title: 'Selección de tablas', body: 'Plataformas de entrenamiento e iniciación ajustadas al programa del club.' },
        { title: 'Impresión de marca', body: 'Nombre, colores y logo del club en toda la flota.' },
        { title: 'Entrega y crecimiento', body: 'Flota y accesorios entregados; ampliación con reordenes idénticos.' },
      ],
      result: 'Los miembros entrenaron con equipamiento de marca uniforme y el club amplió la flota al año siguiente con un reorden de calidad idéntica.',
      outcome: 'Flota unificada, expansión coherente con reordenes.',
      customizations: [
        'Plataformas de entrenamiento e iniciación ajustadas al programa del club',
        'Nombre, colores y logo del club en toda la flota',
        'Numeración de tablas y agrupación por tamaño para cada grupo',
        'Quillas de repuesto y kits de reparación como accesorios de flota',
        'Especificación de reorden bloqueada para una ampliación idéntica',
      ],
      inspectionFocus: [
        'Precisión del arte del nombre, colores y logo del club',
        'Verificación de inflado y estanqueidad',
        'Integridad de accesorios y kits de reparación',
        'Coherencia de color en la tirada de 25 tablas',
      ],
      confidentiality:
        'Por acuerdo, no se revelan el nombre ni la ubicación del club. Este proyecto se presenta de forma anónima para proteger la confidencialidad comercial.',
      tags: ['Marca del club', 'Precio por volumen de flota', 'Soporte de accesorios'],
    },
    {
      slug: 'school-program-fleet',
      customerType: 'Educación y programas juveniles',
      region: 'Europa',
      productCategory: 'SUP hinchable de iniciación y multiusuario',
      projectStage: 'Revisión del programa → Aprobación de muestra → Entrega de flota',
      manufacturingScope: 'Diseño del paquete, producción, recambios y soporte de renovación',
      keyRequirements: 'Equipamiento con prioridad en seguridad, cantidades para clase, gestión con poco personal',
      qualityFocus: 'Estabilidad, estanqueidad, integridad de accesorios, orientación de uso',
      navLabel: 'Flota para programa escolar',
      metaTitle: 'Programa de SUP escolar | Flota de iniciación — iSupfactory',
      metaDescription:
        'Cómo una escuela lanzó una optativa de remo con 15 tablas de iniciación y multiusuario: un equipamiento priorizado por la seguridad, pensado para la enseñanza.',
      kicker: 'Proyecto escolar',
      h1: 'Cómo una escuela lanzó una flota de iniciación de 15 tablas para la enseñanza del remo',
      intro: [
        'Una escuela abrió una optativa de remo y necesitaba equipamiento estable y seguro para principiantes, cantidades que encajaran con el tamaño de las clases y una gestión sencilla con poco personal.',
      ],
      industry: 'Educación y programas juveniles',
      requirement: 'Una flota de iniciación para el tamaño de las clases, con tablas multiusuario para las primeras lecciones.',
      challenge:
        'Niveles de habilidad mixtos, necesidades de seguridad estrictas, ciclos de compra escolares largos y un presupuesto que debe cubrir las futuras promociones.',
      solution:
        'Tablas de iniciación anchas, de alto volumen, y tablas multiusuario; precios de programa ajustados a las cantidades de clase y orientación de uso clara para los instructores.',
      product: 'Flota de SUP de iniciación: plataformas estables con construcción reforzada para una larga vida de programa.',
      process: [
        { title: 'Revisión del programa', body: 'Tamaño de las clases, zona acuática y configuración de instructores definieron el paquete.' },
        { title: 'Construcción del paquete', body: 'Tipos y cantidades de tabla ajustados a la enseñanza.' },
        { title: 'Aprobación de la muestra', body: 'Estabilidad y construcción verificadas en una tabla física.' },
        { title: 'Entrega y renovación', body: 'Entrega por volumen, accesorios y reordenes para las nuevas promociones.' },
      ],
      result: 'Los instructores reportaron un progreso más rápido en la primera sesión sobre las plataformas estables, y el programa renovó el equipamiento con un reorden idéntico al año siguiente.',
      outcome: 'Curva de aprendizaje más rápida, equipamiento renovado al año siguiente.',
      customizations: [
        'Plataformas de iniciación anchas y de alto volumen para las primeras sesiones',
        'Tablas multiusuario para clases en grupo',
        'Tamaño y cantidad de tablas ajustados al tamaño de las clases',
        'Orientación de uso clara y etiquetas de instrucción',
        'Construcción reforzada para una larga vida de programa',
        'Especificación de entrega por volumen y reorden de renovación',
      ],
      inspectionFocus: [
        'Verificación de estabilidad y configuración de cubierta',
        'Inflado y estanqueidad en cada tabla',
        'Integridad de accesorios por tabla y kit de clase',
        'Precisión de la orientación de uso y las etiquetas',
        'Marcado de cajas y controles del kit de clase',
      ],
      confidentiality:
        'Por acuerdo, no se revelan el nombre ni la región de la escuela. Este proyecto se presenta de forma anónima para proteger la confidencialidad comercial.',
      tags: ['Flota de iniciación', 'Lanzamiento del programa', 'Pedidos de renovación'],
    },
    {
      slug: 'distributor-line-expansion',
      customerType: 'Distribuidores y mayoristas',
      region: 'Dos regiones de exportación',
      productCategory: 'SUP hinchable de gama media (6 SKU)',
      projectStage: 'Planificación de gama → Aprobación de muestra → Suministro multimercado',
      manufacturingScope: 'Tablas, accesorios y embalaje de retail bajo un solo programa',
      keyRequirements: 'Un único responsable de calidad, branding consistente, menor inventario por SKU',
      qualityFocus: 'Estanqueidad, precisión del arte, precisión de códigos de barras y etiquetas, coincidencia con BOM',
      navLabel: 'Ampliación de línea para distribuidor',
      metaTitle: 'Ampliación de línea SUP para distribuidor | 6 SKU — iSupfactory',
      metaDescription:
        'Cómo un distribuidor de deportes acuáticos añadió una gama completa de SUP de gama media con seis SKU: una sola fábrica, un programa, exportado a varios mercados.',
      kicker: 'Proyecto de distribuidor',
      h1: 'Cómo un distribuidor lanzó una gama SUP de 6 SKU en dos mercados',
      intro: [
        'Un distribuidor de deportes acuáticos que vendía kayaks y accesorios quiso lanzar su propia gama de SUP hinchables, sin fragmentar el suministro entre varias fábricas de tablas, remos y bombas.',
      ],
      industry: 'Distribuidores y mayoristas',
      requirement: 'Una gama de seis SKU de gama media (10\'6" a 12\'6" más kits de accesorios), con exportación a dos regiones.',
      challenge:
        'Fábricas separadas para tablas, remos y bombas implicaban branding inconsistente, tres puntos de suministro separados y ningún responsable único de calidad para las reclamaciones de garantía.',
      solution:
        'Un solo programa que cubre tablas, accesorios y embalaje de retail; kits de accesorios compartidos para reducir el inventario por SKU; y opciones de suministro ajustadas a cada mercado.',
      product: 'Seis SKU de retail de marca: plataformas SUP hinchables con kits completos en cajas impresas.',
      process: [
        { title: 'Planificación de la gama', body: 'Huecos de mercado y puntos de precio definieron los seis SKU y el contenido de los kits.' },
        { title: 'Marca unificada', body: 'Un sistema de diseño aplicado a tablas, remos, bombas y cajas.' },
        { title: 'Precio de programa', body: 'Precio por volumen sobre todo el programa, no por SKU.' },
        { title: 'Suministro a dos mercados', body: 'Condiciones de exportación estándar para la región principal y condiciones de servicio completo para el segundo mercado.' },
      ],
      result:
        'La gama se lanzó en ambos mercados en una temporada; los kits compartidos redujeron el inventario final y la garantía se gestionó a través de un único contacto de fábrica.',
      outcome: 'Lanzamiento multi-mercado en una temporada, menos inventario, garantía unificada.',
      customizations: [
        'Seis SKU de 10\'6" a 12\'6" más kits de accesorios',
        'Un sistema de diseño aplicado a tablas, remos, bombas y cajas',
        'Kits de accesorios compartidos para reducir el inventario por SKU',
        'Kits completos con separadores en cajas de retail impresas',
        'Versiones de código de barras, etiqueta y manual por mercado',
        'Condiciones de suministro y embalaje ajustados a cada mercado',
      ],
      inspectionFocus: [
        'Coincidencia con el BOM por configuración de SKU',
        'Precisión del arte y la marca en los seis SKU',
        'Precisión de códigos de barras y etiquetas por mercado',
        'Integridad del kit de accesorios y los separadores',
        'Verificación de estanqueidad en la tirada',
      ],
      confidentiality:
        'Por acuerdo, no se revelan el nombre del distribuidor ni su cartera de clientes. Este proyecto se presenta de forma anónima para proteger la confidencialidad comercial.',
      tags: ['Programa multi-SKU', 'Kits de retail completos'],
    },
    {
      slug: 'startup-brand-zero-to-one',
      customerType: 'Startup de SUP',
      region: 'Norteamérica',
      productCategory: 'SUP hinchable ODM polivalente',
      projectStage: 'Concepto → Pedido de prueba → Pedido de lanzamiento',
      manufacturingScope: 'Desarrollo ODM, gráficos, embalaje y producción',
      keyRequirements: 'Primera tirada con MOQ bajo, alineación con la fecha de lanzamiento, moldes en propiedad',
      qualityFocus: 'Estanqueidad, precisión del arte, verificación del embalaje',
      navLabel: 'Lanzamiento 0→1 de marca startup',
      metaTitle: 'Lanzamiento de marca SUP startup | Del concepto al primer lote — iSupfactory',
      metaDescription:
        'Cómo una startup de SUP pasó del concepto a un primer lote agotado: desarrollo ODM, pedido de prueba de 10 unidades y lote de lanzamiento de 200 unidades de marca.',
      kicker: 'Proyecto de startup',
      h1: 'Del concepto a un lanzamiento de 200 tablas agotado para una marca SUP emergente',
      intro: [
        'Dos fundadores con audiencia pero sin fábrica querían vender su propio SUP: una tabla ODM desarrollada según su especificación, con un pedido de lanzamiento que no les hundiera.',
      ],
      industry: 'Marcas SUP emergentes',
      requirement: 'Desarrollo ODM con MOQ bajo: pedido de prueba de 10 unidades para validar y 200 unidades para el lanzamiento.',
      challenge:
        'Sin equipo de diseño, sin experiencia de importación y con un primer pedido demasiado pequeño para la mayoría de las fábricas, además de una fecha de lanzamiento ligada a la temporada del hemisferio norte.',
      solution:
        'Desarrollo ODM desde su concepto sobre una plataforma probada, pedido de prueba de 10 unidades que validó producto y embalaje de punta a punta, y pedido de lanzamiento de 200 unidades con moldes en propiedad de la marca.',
      product: 'SUP hinchable ODM de marca: arte de cubierta personalizado, embalaje y caja lista para retail.',
      process: [
        { title: 'Llamada de concepto', body: 'Rider objetivo, punto de precio y fecha de lanzamiento fijaron la plataforma base.' },
        { title: 'Pedido de prueba', body: '10 unidades validaron producto y embalaje.' },
        { title: 'Pedido de lanzamiento', body: '200 unidades producidas con el arte y la caja verificados.' },
        { title: 'Camino de escalado', body: 'Moldes en propiedad de la marca; reordenes con mejor precio.' },
      ],
      result:
        'El primer lote se agotó a las pocas semanas de empezar la temporada; los comentarios del pedido de prueba corrigieron un problema de embalaje antes de la gran producción.',
      outcome: 'Lote de lanzamiento agotado, embalaje corregido antes del escalado, reorden previsto.',
      customizations: [
        'Tabla ODM desarrollada desde el concepto de la marca sobre una plataforma probada',
        'Arte de cubierta personalizado y embalaje de marca',
        'Caja lista para retail ajustada al pedido de lanzamiento',
        'Kit y configuración de accesorios ajustados al rider objetivo',
        'Moldes y arte en propiedad de la marca',
        'Planificación de producción alineada con la fecha de lanzamiento',
      ],
      inspectionFocus: [
        'Precisión del arte frente a los archivos aprobados',
        'Verificación de estanqueidad en el pedido de prueba y el de lanzamiento',
        'Verificación de embalaje y caja, incluida la corrección del pedido de prueba',
        'Integridad de accesorios y kit',
      ],
      confidentiality:
        'Por acuerdo, no se revelan el nombre de la marca ni los detalles de lanzamiento. Este proyecto se presenta de forma anónima para proteger la confidencialidad comercial.',
      tags: ['Desarrollo ODM', 'Prueba con MOQ bajo', 'Planificación de temporada'],
    },
    {
      slug: 'rental-fleet-multi-site',
      customerType: 'Operadores de flotas de alquiler',
      region: 'Norteamérica',
      productCategory: 'SUP hinchable polivalente de grado alquiler',
      projectStage: 'Auditoría de flota → Producción uniforme → Renovación por temporada',
      manufacturingScope: 'Especificación de flota, producción, kits de recambios y renovación',
      keyRequirements: 'Una misma tabla en todos los sitios, durabilidad ante uso de alquiler',
      qualityFocus: 'Verificación de construcción reforzada, estanqueidad, integridad del kit',
      navLabel: 'Flota de alquiler multi-ubicación',
      metaTitle: 'Expansión de flota de alquiler | 200 tablas, 3 sedes — iSupfactory',
      metaDescription:
        'Cómo un operador de alquiler multi-ubicación sustituyó stock mixto por 200 tablas uniformes en tres sedes: precio de flota, renovación por temporada y suministro de recambios.',
      kicker: 'Proyecto de alquiler',
      h1: 'Estandarización de una flota de alquiler de 200 tablas en tres sedes para un operador',
      intro: [
        'Un operador de alquiler con tres puntos junto al agua necesitaba una flota uniforme en lugar de stock mixto: la misma tabla en cada sede, con precio por volumen de flota.',
      ],
      industry: 'Operadores de flotas de alquiler',
      requirement: '200 tablas de grado alquiler repartidas en tres sedes, con renovación por temporada y recambios reparables en campo.',
      challenge:
        'El stock mixto y envejecido complicaba reparaciones y precios; el uso intensivo exige construcción reforzada y el almacenamiento fuera de temporada está dividido en tres sedes.',
      solution:
        'Una única plataforma de grado alquiler en todas las sedes con rails reforzados y materiales anti-UV, precio de flota sobre las 200 unidades y kit de recambios con guía de reparación por sede.',
      product: 'SUP hinchable de grado alquiler: plataforma polivalente de 11\' con construcción reforzada y kits de reparación.',
      process: [
        { title: 'Auditoría de flota', body: 'Volumen por sede y curvas de uso definieron el reparto entre ubicaciones.' },
        { title: 'Especificación uniforme', body: 'Una misma tabla en todas partes: reparaciones, precios y formación más simples.' },
        { title: 'Precio de flota', body: 'Descuento por volumen sobre el pedido combinado de 200 tablas.' },
        { title: 'Recambios y renovación', body: 'Kits de recambios por sede y un ciclo de renovación estacional definido.' },
      ],
      result:
        'La flota uniforme eliminó la confusión de reparaciones por sede, el pedido combinado desbloqueó el precio de flota y el programa de 200 tablas se convirtió en la base de la renovación estacional.',
      outcome: 'Operaciones uniformes, menor coste unitario, ciclo estacional repetible.',
      customizations: [
        'Una única plataforma de grado alquiler en las tres sedes',
        'Rails reforzados y materiales anti-UV para el uso intensivo de alquiler',
        'Reparto por sede y numeración de flota por ubicación',
        'Kits de recambios por sede con guía de reparación',
        'Ciclo de renovación estacional definido',
      ],
      inspectionFocus: [
        'Verificación de construcción reforzada por tabla',
        'Inflado y estanqueidad en cada tabla',
        'Integridad de accesorios y kits de reparación por sede',
        'Precisión de numeración y etiquetas de sede',
        'Controles de embalaje para entrega en varias sedes',
      ],
      confidentiality:
        'Por acuerdo, no se revelan el nombre del operador ni las ubicaciones de las sedes. Este proyecto se presenta de forma anónima para proteger la confidencialidad comercial.',
      tags: ['Flota multi-sede', 'Construcción de grado alquiler', 'Renovación estacional'],
    },
    {
      slug: 'touring-sup-range',
      customerType: 'Distribuidores outdoor y de deportes acuáticos',
      region: 'Europa',
      productCategory: 'SUP hinchable de travesía (touring)',
      projectStage: 'Brief de producto → Aprobación de muestra → Producción en volumen',
      manufacturingScope: 'Revisión de plataforma, arte, configuración de accesorios, embalaje de retail y producción',
      keyRequirements: 'Rendimiento touring, arte específico del proyecto, kit de retail completo',
      qualityFocus: 'Estanqueidad, precisión del arte, integridad de accesorios, marcado de cajas',
      navLabel: 'Gama de SUP touring',
      metaTitle: 'Desarrollo de gama SUP touring | Distribuidor outdoor — iSupfactory',
      metaDescription:
        'Cómo iSupfactory respaldó una gama de SUP touring para un distribuidor outdoor europeo: revisión de plataforma, arte específico, configuración de accesorios y embalaje de retail.',
      kicker: 'Proyecto touring',
      h1: 'Desarrollo de una gama de SUP touring para un distribuidor outdoor europeo',
      intro: [
        'Un proyecto personalizado de SUP hinchable que cubre revisión de plataforma, arte específico del proyecto, configuración de accesorios, embalaje de retail y planificación de calidad: desde la aprobación de la muestra hasta la preparación del envío.',
      ],
      industry: 'Distribuidores y mayoristas',
      requirement: 'Una gama de SUP touring con arte específico del proyecto, configuración de accesorios y embalaje de retail, controlada desde la aprobación de la muestra hasta el envío.',
      challenge:
        'Los palistas de travesía esperan estabilidad a velocidad y un deslizamiento predecible, por lo que la plataforma, las dimensiones y el volumen debían revisarse antes de la producción. El arte debía adaptarse a los rails, la EVA y las posiciones de las válvulas, y cada kit de retail debía llegar completo en toda la gama.',
      solution:
        'Revisión de plataforma y dimensiones para rendimiento touring, arte específico alineado con los elementos de la tabla, configuración de accesorios con remo, leash y bolsa, planificación del embalaje de retail y producción en volumen controlada con puntos de control de calidad definidos.',
      product: 'Gama de SUP hinchables de travesía: plataforma de rendimiento con arte personalizado, kit de accesorios completo y embalaje listo para retail.',
      process: [
        { title: 'Revisión de plataforma', body: 'Dimensiones touring, volumen y perfil de rails ajustados al rider objetivo y al mercado.' },
        { title: 'Especificación y arte', body: 'Se prepararon especificación técnica, alineación del arte y BOM aprobado por el cliente.' },
        { title: 'Aprobación de muestra', body: 'Construcción, arte y kit confirmados en una tabla física.' },
        { title: 'Producción e inspección', body: 'Producción en volumen con puntos de control de calidad, verificación de embalaje y liberación de envío.' },
      ],
      result:
        'La gama avanzó de la aprobación de muestra a la preparación de envío bajo documentación controlada de producto, arte, BOM y embalaje: la muestra aprobada sirvió de referencia para la producción y la inspección final.',
      outcome: 'Recorrido controlado de muestra a producción; arte y embalaje bloqueados antes de producir.',
      customizations: [
        'Plataforma touring, dimensiones y configuración de volumen',
        'Arte específico del proyecto en cubierta, fondo y rails',
        'Diseño y color de la EVA',
        'Sistema de quillas, disposición de bungees y set de accesorios',
        'Bolsa de marca, versión del manual y embalaje de retail',
        'Marcado de cajas y códigos de barras para el mercado objetivo',
      ],
      inspectionFocus: [
        'Verificación de inflado y estanqueidad',
        'Inspección de válvulas, rails y costuras',
        'Precisión del arte frente a los archivos aprobados',
        'Integridad de accesorios y kit',
        'Verificación de embalaje de retail, código de barras y marcado de cajas',
      ],
      confidentiality:
        'Por acuerdo, no se revelan el nombre del distribuidor ni su cartera de clientes. Este proyecto se presenta de forma anónima para proteger la confidencialidad comercial.',
      tags: ['Gama touring', 'Arte personalizado', 'Embalaje de retail'],
    },
    {
      slug: 'fishing-sup-program',
      customerType: 'Minoristas outdoor',
      region: 'Norteamérica',
      productCategory: 'SUP hinchable de pesca',
      projectStage: 'Revisión de concepto → Aprobación de muestra → Producción del programa',
      manufacturingScope: 'Configuración de plataforma, disposición de accesorios, embalaje y producción',
      keyRequirements: 'Integración de accesorios de pesca, plataforma estable, pack organizado',
      qualityFocus: 'Estanqueidad, anclaje de accesorios, precisión del arte, integridad del pack',
      navLabel: 'Programa de SUP de pesca',
      metaTitle: 'Desarrollo de SUP de pesca | Disposición de accesorios — iSupfactory',
      metaDescription:
        'Cómo iSupfactory desarrolló una configuración de SUP de pesca para un minorista outdoor: disposición de accesorios, pack organizado y embalaje listo para retail bajo un programa controlado.',
      kicker: 'Proyecto de pesca',
      h1: 'Desarrollo de SUP de pesca para un minorista outdoor — disposición de accesorios y configuración del pack',
      intro: [
        'Un proyecto de SUP específico para pesca: una plataforma estable con zonas para accesorios de pesca, un pack organizado y embalaje listo para retail, desde la revisión de concepto hasta la producción del programa.',
      ],
      industry: 'Retail y marcas outdoor',
      requirement: 'Una configuración de SUP de pesca con anclaje de accesorios, pack organizado y embalaje de retail, desde la revisión de concepto hasta la producción del programa.',
      challenge:
        'Las tablas de pesca necesitan anclaje de accesorios — porta cañas, D-rings y zonas para cajas — sin comprometer la estabilidad. El pack debía mantenerse organizado a bordo y el embalaje presentar la categoría con claridad en el punto de venta.',
      solution:
        'Una plataforma ancha y estable con zonas de accesorios definidas, D-rings y bungees colocados para el equipo de pesca, un pack organizado con kit de reparación y embalaje de retail desarrollado bajo un único programa controlado.',
      product: 'SUP hinchable de pesca: plataforma estable con zonas para accesorios de pesca, pack organizado y embalaje listo para retail.',
      process: [
        { title: 'Revisión de concepto', body: 'Uso objetivo, equipo transportado y estructura del pack definieron la configuración.' },
        { title: 'Disposición de accesorios', body: 'D-rings, bungees y zonas de almacenaje colocados en la cubierta.' },
        { title: 'Aprobación de muestra', body: 'Estabilidad y anclaje de accesorios verificados en una tabla física.' },
        { title: 'Producción del programa', body: 'Puntos de control de calidad definidos, verificación del pack y liberación de envío.' },
      ],
      result:
        'La configuración se confirmó en la muestra aprobada — anclaje de accesorios, estructura del pack y embalaje alineados antes de la producción — y el programa se envió con kits verificados.',
      outcome: 'Disposición de accesorios y pack bloqueados en la fase de muestra; kits verificados enviados.',
      customizations: [
        'Plataforma ancha y estable con zonas para accesorios de pesca',
        'Posición de porta cañas, D-rings y bungees',
        'Diseño de cubierta para cajas y equipo de pesca',
        'Selección de remo, quilla y leash para uso de pesca',
        'Pack de accesorios organizado y kit de reparación',
        'Embalaje de retail para la categoría de SUP de pesca',
        'Código de barras y marcado de cajas para el mercado objetivo',
      ],
      inspectionFocus: [
        'Verificación del anclaje de accesorios y la posición de D-rings',
        'Verificación de inflado y estanqueidad',
        'Precisión del arte y del diseño de cubierta',
        'Integridad del pack y configuración de accesorios',
        'Verificación del embalaje de retail y del marcado de cajas',
      ],
      confidentiality:
        'Por acuerdo, no se revelan el nombre del minorista ni los detalles de canal. Este proyecto se presenta de forma anónima para proteger la confidencialidad comercial.',
      tags: ['Configuración de pesca', 'Disposición de accesorios', 'Organización del pack'],
    },
    {
      slug: 'yoga-sup-program',
      customerType: 'Escuelas y programas de deportes acuáticos',
      region: 'Europa',
      productCategory: 'SUP hinchable de yoga',
      projectStage: 'Revisión del programa → Aprobación de muestra → Entrega de flota',
      manufacturingScope: 'Configuración de plataforma estable, cobertura de cubierta, producción y embalaje de programa',
      keyRequirements: 'Estabilidad para práctica en grupo, cobertura total de EVA, flota coherente',
      qualityFocus: 'Cobertura de cubierta, estanqueidad, precisión del arte, integridad del kit',
      navLabel: 'Programa de SUP de yoga',
      metaTitle: 'Desarrollo de SUP de yoga | Programa de entrenamiento — iSupfactory',
      metaDescription:
        'Cómo iSupfactory desarrolló una configuración estable de SUP de yoga para un programa de entrenamiento de deportes acuáticos: cobertura total de cubierta y una flota de programa coherente.',
      kicker: 'Proyecto de yoga',
      h1: 'Desarrollo de una configuración estable de SUP de yoga para un programa de entrenamiento de deportes acuáticos',
      intro: [
        'Una configuración de SUP de yoga para un programa de entrenamiento: una plataforma ancha y de alto volumen con cobertura total de EVA, producida como una flota coherente para la práctica en grupo.',
      ],
      industry: 'Educación y programas juveniles',
      requirement: 'Una configuración estable de SUP de yoga con cobertura total de cubierta para la práctica en grupo, en cantidades de programa.',
      challenge:
        'La práctica de yoga exige una plataforma ancha y de alto volumen que permanezca sólida en el agua. Los grupos necesitan tablas coherentes y los instructores, una guía clara además de un almacenaje manejable entre sesiones.',
      solution:
        'Una plataforma ancha y de alto volumen con cobertura total de EVA, una configuración de flota coherente en todo el programa e instrucciones para instructores y etiquetas de programa incluidas.',
      product: 'SUP hinchable de yoga: plataforma estable con cobertura total de cubierta y una flota de programa coherente.',
      process: [
        { title: 'Revisión del programa', body: 'Estilo de práctica, tamaño del grupo y almacenaje definieron la configuración.' },
        { title: 'Configuración', body: 'Plataforma, cobertura de cubierta y acabado fijados en toda la flota.' },
        { title: 'Aprobación de muestra', body: 'Estabilidad y cobertura de cubierta verificadas en una tabla física.' },
        { title: 'Entrega de flota', body: 'Cantidades de programa producidas con verificación de kit y embalaje.' },
      ],
      result:
        'La flota se envió como una única configuración coherente — cada tabla idéntica a la muestra aprobada en estabilidad, cobertura de cubierta y acabado — con guía incluida para los instructores.',
      outcome: 'Flota coherente acorde a la muestra aprobada; embalaje de programa verificado.',
      customizations: [
        'Plataforma ancha y de alto volumen para estabilidad de pie',
        'Cobertura total de EVA en toda la zona útil',
        'Diseño de cubierta y posición de correas para la práctica',
        'Color y acabado coherentes en toda la flota',
        'Guía para instructores y etiquetas de programa',
        'Configuración de almacenaje y embalaje de programa',
      ],
      inspectionFocus: [
        'Inspección de cobertura de cubierta y adhesión de la EVA',
        'Verificación de inflado y estanqueidad',
        'Verificación de estabilidad en la muestra aprobada',
        'Coherencia de arte y acabado en toda la tirada',
        'Integridad del kit y controles del embalaje de programa',
      ],
      confidentiality:
        'Por acuerdo, no se revelan el nombre del programa ni su ubicación. Este proyecto se presenta de forma anónima para proteger la confidencialidad comercial.',
      tags: ['Configuración de yoga', 'Cobertura total de cubierta', 'Flota de programa'],
    },
  ],
  fr: [
    {
      slug: 'coastal-rental-fleet',
      customerType: 'Opérateurs de flottes de location',
      region: 'Méditerranée — Espagne, Italie, Grèce',
      productCategory: 'SUP gonflable de location (10′6″ + 11′0″)',
      projectStage: 'Évaluation de flotte → Approbation d\'échantillon → Livraison en 3 lots échelonnés',
      manufacturingScope: 'Spécification de flotte, construction renforcée, production par lots, fourniture de pièces',
      keyRequirements: 'Planches durables pour la location, livraison par lots aux stations, réduction du taux de remplacement prématuré',
      qualityFocus: 'Construction renforcée, étanchéité, visuels de flotte, intégralité du kit',
      navLabel: 'Flotte de location côtière',
      metaTitle: 'Flotte de location côtière | 320 planches en 120 jours — iSupfactory',
      metaDescription:
        'Comment un opérateur de location méditerranéen a constitué une flotte côtière de 320 planches en Espagne, en Italie et en Grèce — trois lots échelonnés en 120 jours, avec une réduction estimée de 20 à 25 % des remplacements prématurés.',
      kicker: 'Projet de location côtière',
      h1: 'Comment un opérateur de location méditerranéen a constitué une flotte côtière de 320 planches en 120 jours',
      intro: [
        'Un opérateur de location gérant des stations en Espagne, en Italie et en Grèce avait besoin d\'une flotte durable pour la saison estivale à forte rotation — livrée en trois lots, à temps pour l\'ouverture de chaque station.',
      ],
      industry: 'Opérateurs de flottes de location',
      requirement: '320 planches de location en deux tailles — 10′6″ et 11′0″ — réparties sur des stations côtières dans trois pays, livrées en trois lots échelonnés dans un délai de 120 jours.',
      challenge:
        'La rotation quotidienne de location use rapidement les planches, et le taux de remplacement prématuré de l\'opérateur atteignait 20 à 25 %. Les stations ouvraient à des dates différentes dans trois pays : une livraison unique ne convenait pas, pas plus qu\'une flotte de taille unique.',
      solution:
        'Deux plateformes de location durables dans les tailles qui couvrent la plupart des locataires, une construction renforcée pour résister à une rotation intensive, et trois lots de production programmés pour arriver à l\'ouverture de chaque station — avec des packs de pièces et des conseils de réparation par station.',
      product: 'SUP gonflable de location — plateformes de 10′6″ et 11′0″ avec boudins renforcés et matériaux stables aux UV, kits par station.',
      process: [
        { title: 'Évaluation de la flotte', body: 'Les ouvertures de stations et les volumes de rotation ont défini les deux tailles et la répartition des lots.' },
        { title: 'Sélection des planches', body: 'Plateformes de location 10′6″ et 11′0″ choisies pour la couverture des locataires et la durabilité.' },
        { title: 'Production par lots', body: 'Trois lots programmés en fonction de la date d\'ouverture de chaque station.' },
        { title: 'Livraison et support', body: 'Flotte expédiée par lot avec packs de pièces et conseils de réparation par station.' },
      ],
      result:
        'Les trois lots ont été livrés dans les 120 jours, synchronisés avec l\'ouverture de chaque station. Les plateformes renforcées devraient réduire le taux de remplacement prématuré d\'environ 20 à 25 %, les packs de pièces couvrant les réparations sur le terrain entre les saisons.',
      outcome: '320 planches · 120 jours · 3 lots · env. −20 à 25 % de remplacements prématurés.',
      metrics: [
        { value: '320', label: 'planches en deux tailles' },
        { value: '120', label: 'jours de la commande au dernier lot' },
        { value: '3', label: 'livraisons échelonnées, une par ouverture de station' },
        { value: '−20–25%', label: 'taux de remplacement prématuré estimé' },
      ],
      takeaways: [
        'Les lots échelonnés permettent à une flotte d\'arriver exactement à l\'ouverture de chaque station — ni stock dormant, ni démarrage tardif.',
        'Deux tailles (10′6″ et 11′0″) ont couvert la plupart des locataires sans fragmenter la flotte.',
        'C\'est la construction renforcée qui fait baisser le nombre de remplacements, pas seulement le prix.',
        'Les packs de pièces par station ont maintenu les planches en service entre deux saisons complètes.',
      ],
      customizations: [
        'Plateformes de location 10′6″ et 11′0″ adaptées aux profils des locataires',
        'Boudins renforcés et matériaux stables aux UV pour une rotation intensive',
        'Visuels de flotte et numérotation par station',
        'Calendrier de production en trois lots aligné sur les ouvertures',
        'Packs de pièces et conseils de réparation par station',
        'Emballage et vérification de livraison par site et par lot',
      ],
      inspectionFocus: [
        'Vérification de la construction renforcée sur chaque planche',
        'Gonflage et étanchéité de chaque planche',
        'Précision des visuels de flotte et de la numérotation par station',
        'Intégralité des accessoires et des packs de pièces par station',
        'Contrôles d\'emballage pour les livraisons multi-sites par lots',
      ],
      confidentiality:
        'D\'un commun accord, le nom de l\'opérateur et les emplacements des stations ne sont pas divulgués. Ce projet est présenté de manière anonyme pour protéger la confidentialité commerciale.',
      tags: ['Livraison de flotte échelonnée', 'Construction de gamme location', 'Taux de remplacement réduit'],
    },
    {
      slug: 'eu-distributor-private-label',
      customerType: 'Distributeurs et grossistes',
      region: 'Europe',
      productCategory: 'SUP gonflable de marque privée (2 références)',
      projectStage: 'Planification de gamme → Approbation d\'échantillon → Livraison en volume sous 90 jours',
      manufacturingScope: 'Marque privée, emballage de détail, production en volume, support des réassorts',
      keyRequirements: 'Deux références éprouvées sous la propre marque du distributeur, emballage de détail UE, alignement sur les dates de saison',
      qualityFocus: 'Précision des visuels, code-barres et étiquettes par marché, intégralité du kit, étanchéité',
      navLabel: 'Marque privée pour distributeur',
      metaTitle: 'Marque privée distributeur UE | 1 200 planches en 90 jours — iSupfactory',
      metaDescription:
        'Comment un distributeur européen a lancé une ligne de SUP de marque privée de 1 200 planches en 90 jours — deux références, emballage de détail UE et une réassort au T4 sur la même spécification figée.',
      kicker: 'Projet de marque privée',
      h1: 'Comment un distributeur européen a lancé une ligne de SUP de marque privée de 1 200 planches en 90 jours',
      intro: [
        'Un distributeur européen souhaitait disposer de sa propre ligne de SUP de marque pour la saison estivale — deux références éprouvées, un emballage de détail complet et aucune relation directe avec des usines.',
      ],
      industry: 'Distributeurs et grossistes',
      requirement: '1 200 planches de marque réparties sur deux références — 10′6″ polyvalent et 12′6″ de croisière — avec un emballage de détail UE, livrées en 90 jours.',
      challenge:
        'La fenêtre de vente estivale est fixe : les 1 200 planches et leur emballage devaient arriver ensemble et à temps. L\'emballage de marque privée — code-barres, étiquettes, manuels — devait respecter les exigences du détail européen, et le distributeur ne disposait d\'aucune expérience en fabrication de SUP.',
      solution:
        'Deux plateformes éprouvées choisies pour la gamme de détail, l\'intégralité des visuels de marque privée et l\'emballage de détail UE gérés dans un seul programme, et une production planifiée pour que les deux références soient expédiées ensemble dans la fenêtre de 90 jours — avec la spécification figée pour une réassort propre.',
      product: 'SUP gonflable de marque privée — 10′6″ polyvalent et 12′6″ de croisière, avec pagaie, pompe, sac à dos et cartons de détail imprimés de la marque.',
      process: [
        { title: 'Planification de gamme', body: 'Deux références sélectionnées — 10′6″ polyvalent et 12′6″ de croisière — pour la couverture du détail.' },
        { title: 'Approbation d\'échantillon', body: 'Visuels, emballage et finition confirmés sur des planches physiques.' },
        { title: 'Production en 90 jours', body: 'Volume planifié pour que les deux références partent ensemble dans la fenêtre de saison.' },
        { title: 'Réassort au T4', body: 'Commande répétée sur la même spécification figée.' },
      ],
      result:
        'Toutes les 1 200 planches, avec un emballage de détail complet, ont été expédiées dans les 90 jours, à temps pour la fenêtre de vente estivale. La ligne s\'est écoulée et le distributeur est revenu au T4 avec une réassort sur la même spécification figée.',
      outcome: '1 200 planches · 90 jours · 2 références · réassort au T4.',
      metrics: [
        { value: '1,200', label: 'planches en un lancement' },
        { value: '90', label: 'jours jusqu\'à la livraison complète' },
        { value: '2', label: 'références de détail, toutes à temps pour la fenêtre' },
        { value: 'T4', label: 'réassort sur la même spécification' },
      ],
      takeaways: [
        'Commencer avec deux références éprouvées maintient un risque de stock faible tout en remplissant une gamme de détail.',
        'Un programme unique couvrant planches, accessoires et emballage élimine un point de défaillance fréquent des lancements.',
        'Une date de saison fixe impose le calendrier — la planification de production doit la considérer comme non négociable.',
        'Figer la spécification au lancement rend les réassorts propres et cohérents.',
      ],
      customizations: [
        'Plateformes 10′6″ polyvalent et 12′6″ de croisière pour la gamme de détail',
        'Visuels de pont, de coque et d\'emballage de marque privée',
        'Pagaie, pompe et sac à dos de marque par référence',
        'Cartons de détail imprimés, code-barres, étiquettes et manuel pour le détail UE',
        'Nomenclature et spécification figées pour la cohérence des réassorts',
        'Livraison par lots alignée sur la fenêtre de lancement',
      ],
      inspectionFocus: [
        'Précision des visuels par rapport aux fichiers de marque privée approuvés',
        'Vérification du code-barres, de l\'étiquette et du manuel par marché',
        'Intégralité du kit par référence sur les 1 200 planches',
        'Contrôles ponctuels d\'étanchéité pendant la production',
        'Vérification des cartons et de l\'emballage par référence',
      ],
      confidentiality:
        'D\'un commun accord, le nom du distributeur et ses clients de détail ne sont pas divulgués. Ce projet est présenté de manière anonyme pour protéger la confidentialité commerciale.',
      tags: ['Marque privée', 'Gamme de détail de 2 références', 'Livraison en fenêtre de saison'],
    },
    {
      slug: 'resort-sup-fleet',
      customerType: 'Resorts et hôtellerie',
      region: 'Europe / Amérique du Nord',
      productCategory: 'SUP gonflable polyvalent',
      projectStage: 'Approbation d\'échantillon → Production en volume → Renouvellement de flotte',
      manufacturingScope: 'Visuels, accessoires, emballage et production de flotte',
      keyRequirements: 'Durabilité pour la location, stockage compact, image de marque complète de l\'établissement',
      qualityFocus: 'Étanchéité, précision des visuels, intégralité des accessoires, marquage des cartons',
      navLabel: 'Flotte SUP pour resort de luxe',
      metaTitle: 'Flotte SUP pour resort de luxe | 100 planches de marque — iSupfactory',
      metaDescription:
        'Comment un resort de luxe a équipé son programme de plage avec 100 planches SUP de marque — visuels personnalisés, construction de gamme location et gestion saisonnière de la flotte.',
      kicker: 'Projet resort',
      h1: 'Comment un resort de luxe a standardisé une flotte SUP de 100 planches de marque',
      intro: [
        'Un resort de luxe souhaitait que son programme de plage fasse partie intégrante de l\'établissement — des planches de marque aux couleurs du resort, assez durables pour l\'usage quotidien des clients et faciles à stocker entre les saisons.',
      ],
      industry: 'Resorts et hôtellerie',
      requirement: '100 planches SUP de marque pour la location aux clients, aux couleurs de l\'établissement.',
      challenge:
        'L\'usage quotidien de location use rapidement les flottes génériques, et l\'espace de stockage hors saison est limité. Le resort avait besoin de planches qui résistent à un usage intensif, se stockent de manière compacte et portent l\'image complète de l\'établissement.',
      solution:
        'Une construction gonflable de gamme location avec boudins renforcés et matériaux résistants aux UV, des visuels à toute la planche aux couleurs du resort, ainsi que des pagaies et pompes de marque incluses dans le package de flotte.',
      product: 'SUP gonflable personnalisé — plateforme polyvalente de 11′, visuels de pont de marque et accessoires.',
      process: [
        { title: 'Consultation de flotte', body: 'Affluence, zone de bord de l\'eau et durée de saison ont défini la taille de la flotte et son mix.' },
        { title: 'Échantillon de marque', body: 'Couleurs et logo approuvés sur une planche physique avant la production.' },
        { title: 'Production et contrôle qualité', body: '100 planches produites avec un contrôle qualité multi-points sur toute la série.' },
        { title: 'Livraison et renouvellement', body: 'Livraison saisonnière, pièces de rechange et programme de renouvellement pour les saisons suivantes.' },
      ],
      result:
        'La flotte a été lancée à temps pour la saison, les planches se stockent dans une seule pièce hors saison, et les retours positifs des clients sur l\'équipement de marque ont conduit à une extension de la flotte l\'année suivante.',
      outcome: 'Lancement de saison à temps, flotte 100 % de marque, extension la saison suivante.',
      customizations: [
        'Plateforme, taille et construction choisies pour l\'usage quotidien de location',
        'Visuels de pont à toute la planche aux couleurs de l\'établissement',
        'Marquage des boudins et emplacement du logo approuvés sur un échantillon physique',
        'Pagaie, pompe et accessoires de marque pour chaque planche',
        'Numérotation de flotte et code couleur sur toute la série',
        'Configuration de stockage compact et périmètre de renouvellement saisonnier',
      ],
      inspectionFocus: [
        'Gonflage et étanchéité de chaque planche',
        'État des valves et des boudins renforcés',
        'Précision des visuels et fidélité des couleurs par rapport à l\'échantillon approuvé',
        'Intégralité des accessoires et du kit par planche',
        'Marquage des cartons et étiquettes de flotte avant libération d\'expédition',
      ],
      confidentiality:
        'D\'un commun accord, le nom du resort et ses actifs de marque ne sont pas divulgués. Ce projet est présenté de manière anonyme pour protéger la confidentialité commerciale.',
      tags: ['Flotte de marque pour clients', 'Construction de gamme location', 'Renouvellement saisonnier'],
    },
    {
      slug: 'private-label-launch',
      customerType: 'Marques de détail et outdoor',
      region: 'Europe',
      productCategory: 'SUP gonflable polyvalent (marque privée)',
      projectStage: 'Approbation d\'échantillon → Lot de validation → Passage à l\'échelle',
      manufacturingScope: 'Visuels de produit et d\'emballage, échantillonnage, production, conservation des outillages',
      keyRequirements: 'Ligne commercialisable sans conception ni fabrication SUP en interne',
      qualityFocus: 'Contrôle de version des visuels, exactitude de l\'emballage, intégralité du kit',
      navLabel: 'Lancement de marque privée',
      metaTitle: 'Lancement SUP de marque privée | Extension de marque — iSupfactory',
      metaDescription:
        'Comment une marque outdoor établie s\'est étendue au SUP avec une gamme de marque privée — du logo au premier conteneur, avec un MOQ évolutif.',
      kicker: 'Projet de marque privée',
      h1: 'Comment une marque outdoor a lancé une gamme SUP de marque privée, du logo au premier conteneur',
      intro: [
        'Un détaillant de sport à la marque établie souhaitait s\'étendre au paddle sans nouer de relations d\'usine — une gamme de SUP commercialisable sous son propre nom.',
      ],
      industry: 'Marques de détail et outdoor',
      requirement: 'Une gamme de SUP de marque privée — logo, couleurs et emballage sur des plateformes éprouvées, première série de 50 pièces.',
      challenge:
        'Aucune équipe de conception SUP en interne, aucune expérience de fabrication, et une première commande suffisamment petite pour tester le marché avant de passer à l\'échelle.',
      solution:
        'Développement complet des visuels de produit et d\'emballage à partir des actifs de la marque, un lot de validation de 50 pièces, puis passage à l\'échelle sur les mêmes plateformes vérifiées, avec les outillages conservés pour la marque.',
      product: 'SUP gonflable de marque privée — pont de marque, pagaie, pompe, sac à dos et cartons imprimés.',
      process: [
        { title: 'Prise en charge de la marque', body: 'Logo, couleurs et charte de marque transformés en visuels de planche et d\'emballage.' },
        { title: 'Approbation d\'échantillon', body: 'Un échantillon physique a confirmé finition, couleurs et emballage.' },
        { title: 'Lot de validation', body: 'Première série de 50 pièces écoulée avant le passage à l\'échelle.' },
        { title: 'Passage à l\'échelle', body: 'Production en conteneur à qualité constante, designs appartenant à la marque.' },
      ],
      result:
        'La gamme a écoulé son lot de validation en une saison puis est passée à l\'échelle d\'une commande en conteneur — la marque possédant tous les designs et les outillages.',
      outcome: 'Validée en une saison, passée à l\'échelle des commandes en conteneur.',
      customizations: [
        'Plateformes, tailles et couleurs mappées sur la gamme de la marque',
        'Visuels de pont, de coque et d\'emballage construits à partir des actifs de marque',
        'Pagaie, pompe, sac à dos et kit d\'accessoires de marque',
        'Cartons de détail imprimés et maquette des étiquettes',
        'Version code-barres et manuel pour le marché cible',
        'Propriété des outillages et des visuels conservée pour la marque',
      ],
      inspectionFocus: [
        'Correspondance de version des visuels avec les fichiers approuvés',
        'Exactitude des couleurs et de la finition sur l\'échantillon physique',
        'Vérification de l\'emballage, du code-barres et du manuel',
        'Intégralité du kit sur le lot de validation',
        'Contrôles ponctuels d\'étanchéité pendant la production',
      ],
      confidentiality:
        'D\'un commun accord, le nom de la marque et les détails commerciaux ne sont pas divulgués. Ce projet est présenté de manière anonyme pour protéger la confidentialité commerciale.',
      tags: ['Extension de marque', 'Conception d\'emballage', 'MOQ évolutif'],
    },
    {
      slug: 'club-team-boards',
      customerType: 'Clubs de paddle et équipes',
      region: 'Amérique du Nord',
      productCategory: 'SUP gonflable d\'entraînement',
      projectStage: 'Approbation d\'échantillon → Production de flotte → Réassort d\'extension',
      manufacturingScope: 'Image de marque du club, production de flotte, support de pièces de rechange',
      keyRequirements: 'Look d\'équipe uniforme, budget serré, extension future identique',
      qualityFocus: 'Précision des visuels, étanchéité, intégralité du kit, cohérence des réassorts',
      navLabel: 'Planches d\'équipe pour club',
      metaTitle: 'Planches SUP d\'équipe de club | Renouvellement de flotte de marque — iSupfactory',
      metaDescription:
        'Comment un club de paddle a renouvelé sa flotte avec 25 planches d\'entraînement de marque — visuels d\'équipe, support de pièces et réassorts cohérents.',
      kicker: 'Projet club',
      h1: 'Comment un club de paddle a renommé son image sur une flotte de 25 planches d\'entraînement',
      intro: [
        'Un club de paddle a renouvelé son image et avait besoin d\'un équipement assorti — une flotte d\'équipe unifiée pour l\'entraînement et les régates, sans matériel dépareillé.',
      ],
      industry: 'Clubs de paddle et équipes',
      requirement: '25 planches d\'entraînement de marque avec le nom, les couleurs et le logo du club, plus des pièces de rechange.',
      challenge:
        'La flotte existante était dépareillée et sans marque ; les budgets étaient serrés et l\'extension future nécessitait un matériel parfaitement identique.',
      solution:
        'Image de marque du club sur chaque planche, tarif de flotte pour le volume, et pièces de rechange + conseils de réparation pour prolonger la durée de vie des planches.',
      product: 'SUP d\'équipe personnalisé — forme d\'entraînement avec visuels du club, plus ailerons de rechange et kits de réparation.',
      process: [
        { title: 'Prise en charge du club', body: 'Effectif, types de séances et équipement actuel examinés.' },
        { title: 'Sélection des planches', body: 'Formes d\'entraînement et d\'initiation adaptées au programme du club.' },
        { title: 'Image de marque', body: 'Nom, couleurs et logo du club imprimés sur toute la flotte.' },
        { title: 'Livraison et croissance', body: 'Flotte livrée avec pièces ; réassort identique pour l\'extension.' },
      ],
      result:
        'Les membres s\'entraînent sur un équipement de marque assorti, et le club a étendu sa flotte la saison suivante avec un réassort identique à qualité égale.',
      outcome: 'Flotte unifiée, réassort d\'extension identique.',
      customizations: [
        'Plateformes d\'entraînement et d\'initiation adaptées au programme du club',
        'Nom, couleurs et logo du club imprimés sur toute la flotte',
        'Numérotation des planches et regroupement par taille pour chaque groupe d\'entraînement',
        'Ailerons de rechange et kits de réparation comme accessoires de flotte',
        'Spécification de réassort figée pour une extension future identique',
      ],
      inspectionFocus: [
        'Précision des visuels du nom, des couleurs et du logo du club',
        'Vérification du gonflage et de l\'étanchéité',
        'Intégralité des accessoires et des kits de réparation',
        'Cohérence des couleurs sur la série de 25 planches',
      ],
      confidentiality:
        'D\'un commun accord, le nom et l\'emplacement du club ne sont pas divulgués. Ce projet est présenté de manière anonyme pour protéger la confidentialité commerciale.',
      tags: ['Image de marque du club', 'Tarif de flotte', 'Support de pièces'],
    },
    {
      slug: 'school-program-fleet',
      customerType: 'Éducation et programmes jeunesse',
      region: 'Europe',
      productCategory: 'SUP gonflable débutant et multi-utilisateurs',
      projectStage: 'Revue du programme → Approbation d\'échantillon → Livraison de flotte',
      manufacturingScope: 'Conception de package, production, pièces de rechange et support de renouvellement',
      keyRequirements: 'Équipement axé sur la sécurité, quantités adaptées aux classes, gestion avec un personnel limité',
      qualityFocus: 'Stabilité, étanchéité, intégralité des accessoires, conseils d\'utilisation',
      navLabel: 'Flotte pour programme scolaire',
      metaTitle: 'Programme de SUP scolaire | Flotte débutant — iSupfactory',
      metaDescription:
        'Comment une école a lancé une option paddle avec une flotte débutant de 15 planches et des planches multi-utilisateurs — un équipement axé sur la sécurité pour l\'enseignement.',
      kicker: 'Projet scolaire',
      h1: 'Comment une école a lancé une flotte débutant de 15 planches pour l\'enseignement du paddle',
      intro: [
        'Une école lançant une option paddle avait besoin d\'un équipement stable et sûr pour les débutants, dimensionné pour les classes et facile à gérer avec un personnel limité.',
      ],
      industry: 'Éducation et programmes jeunesse',
      requirement: 'Une flotte débutant adaptée aux effectifs des classes, incluant des planches multi-utilisateurs pour les premières leçons.',
      challenge:
        'Niveaux de compétence hétérogènes, exigences de sécurité strictes, cycles d\'achat scolaires et un budget devant couvrir les promotions futures.',
      solution:
        'Planches débutant larges à haut volume et planches multi-utilisateurs, tarif de programme adapté aux quantités de classe, et conseils d\'utilisation clairs pour les instructeurs.',
      product: 'Flotte de SUP débutant — plateformes stables avec construction renforcée pour une longue durée de vie du programme.',
      process: [
        { title: 'Revue du programme', body: 'Effectifs de classe, zone d\'eau et dispositif d\'instructeurs ont défini le package.' },
        { title: 'Constitution du package', body: 'Types et quantités de planches adaptés à l\'enseignement.' },
        { title: 'Approbation d\'échantillon', body: 'Stabilité et construction vérifiées sur une planche physique.' },
        { title: 'Livraison et renouvellement', body: 'Fourniture en volume, pièces de rechange et réassorts pour les nouvelles promotions.' },
      ],
      result:
        'Les instructeurs ont constaté une progression plus rapide dès la première séance sur les plateformes stables, et le programme a renouvelé son équipement avec un réassort identique l\'année suivante.',
      outcome: 'Courbe d\'apprentissage plus rapide, équipement renouvelé l\'année suivante.',
      customizations: [
        'Plateformes débutant larges et à haut volume pour les premières séances',
        'Planches multi-utilisateurs incluses pour les leçons en groupe',
        'Taille et quantité des planches adaptées aux effectifs de classe',
        'Conseils d\'utilisation clairs et étiquettes d\'instruction',
        'Construction renforcée pour une longue durée de vie du programme',
        'Spécification de fourniture en volume et de réassort de renouvellement',
      ],
      inspectionFocus: [
        'Vérification de la stabilité et de la configuration du pont',
        'Gonflage et étanchéité de chaque planche',
        'Intégralité des accessoires par planche et par kit de classe',
        'Exactitude des conseils d\'utilisation et des étiquettes',
        'Marquage des cartons et contrôles des kits de classe',
      ],
      confidentiality:
        'D\'un commun accord, le nom et la région de l\'école ne sont pas divulgués. Ce projet est présenté de manière anonyme pour protéger la confidentialité commerciale.',
      tags: ['Flotte débutant', 'Lancement de programme', 'Commandes de renouvellement'],
    },
    {
      slug: 'distributor-line-expansion',
      customerType: 'Distributeurs et grossistes',
      region: 'Deux régions d\'exportation',
      productCategory: 'SUP gonflable de gamme moyenne (6 références)',
      projectStage: 'Planification de gamme → Approbation d\'échantillon → Approvisionnement multi-marchés',
      manufacturingScope: 'Planches, accessoires et emballage de détail dans un programme unique',
      keyRequirements: 'Un seul responsable qualité, image de marque cohérente, réduction du stock par référence',
      qualityFocus: 'Étanchéité, précision des visuels, exactitude des code-barres et étiquettes, conformité à la nomenclature',
      navLabel: 'Extension de gamme pour distributeur',
      metaTitle: 'Extension de gamme SUP pour distributeur | Programme 6 références — iSupfactory',
      metaDescription:
        'Comment un distributeur de sports nautiques a ajouté une gamme complète de SUP de gamme moyenne sur six références — une seule usine, un seul programme, exportée vers plusieurs marchés.',
      kicker: 'Projet distributeur',
      h1: 'Comment un distributeur a lancé une gamme de SUP sur 6 références sur deux marchés',
      intro: [
        'Un distributeur de sports nautiques distribuant kayaks et accessoires souhaitait sa propre gamme de SUP gonflables — sans fragmenter l\'approvisionnement entre plusieurs usines pour les planches, les pagaies et les pompes.',
      ],
      industry: 'Distributeurs et grossistes',
      requirement: 'Une gamme de SUP de gamme moyenne en six références (10′6″ à 12′6″ plus kits d\'accessoires), avec export vers deux régions.',
      challenge:
        'Des usines séparées pour les planches, les pagaies et les pompes signifiaient une image de marque incohérente, trois points d\'approvisionnement distincts et aucun responsable qualité unique pour les réclamations de garantie.',
      solution:
        'Un programme unique couvrant planches, accessoires et emballage de détail ; des kits d\'accessoires partagés pour réduire le stock par référence ; et des options d\'approvisionnement adaptées à la configuration de chaque marché.',
      product: 'Six références de détail de marque — plateformes SUP gonflables avec kits complets à compartiments dans des cartons imprimés.',
      process: [
        { title: 'Planification de gamme', body: 'Les écarts de marché et les points de prix ont défini les six références et le contenu des bundles.' },
        { title: 'Image de marque unifiée', body: 'Un système de design unique appliqué aux planches, pagaies, pompes et cartons.' },
        { title: 'Tarif de programme', body: 'Tarification en volume sur l\'ensemble du programme, pas par référence.' },
        { title: 'Approvisionnement deux marchés', body: 'Conditions d\'exportation standard pour la région d\'origine, conditions de service complet pour le second marché.' },
      ],
      result:
        'La gamme a été lancée sur les deux marchés en une saison ; les kits d\'accessoires partagés ont réduit le stock dédouané, et les problèmes de garantie ont été résolus via un interlocuteur usine unique.',
      outcome: 'Lancement multi-marchés en une saison, stock dédouané réduit, interlocuteur de garantie unique.',
      customizations: [
        'Six références de 10′6″ à 12′6″ plus bundles de kits d\'accessoires',
        'Un système de design unique appliqué aux planches, pagaies, pompes et cartons',
        'Kits d\'accessoires partagés pour réduire le stock par référence',
        'Kits complets à compartiments dans des cartons de détail imprimés',
        'Versions code-barres, étiquette et manuel par marché cible',
        'Conditions d\'approvisionnement et configuration d\'emballage adaptées à chaque marché',
      ],
      inspectionFocus: [
        'Conformité à la nomenclature par configuration de référence',
        'Exactitude des visuels et de l\'image de marque sur les six références',
        'Exactitude des code-barres et des étiquettes par marché',
        'Intégralité des kits d\'accessoires et des compartiments',
        'Vérification de l\'étanchéité sur toute la série',
      ],
      confidentiality:
        'D\'un commun accord, le nom du distributeur et sa liste de clients ne sont pas divulgués. Ce projet est présenté de manière anonyme pour protéger la confidentialité commerciale.',
      tags: ['Programme multi-références', 'Kits de détail complets'],
    },
    {
      slug: 'startup-brand-zero-to-one',
      customerType: 'Marques SUP en démarrage',
      region: 'Amérique du Nord',
      productCategory: 'SUP gonflable polyvalent ODM',
      projectStage: 'Concept → Lot d\'essai → Commande de lancement',
      manufacturingScope: 'Développement ODM, graphismes, emballage, production',
      keyRequirements: 'Première série à MOQ réduit, alignement sur la date de lancement, outillages conservés pour la marque',
      qualityFocus: 'Étanchéité, précision des visuels, vérification de l\'emballage',
      navLabel: 'Lancement 0→1 de marque startup',
      metaTitle: 'Lancement de marque SUP startup | Du concept au premier lot — iSupfactory',
      metaDescription:
        'Comment une startup de SUP est passée du concept à un premier lot écoulé — développement ODM, lot d\'essai de 10 pièces, puis commande de lancement de 200 pièces de marque.',
      kicker: 'Projet startup',
      h1: 'Du concept à un lancement de 200 planches écoulé pour une marque SUP startup',
      intro: [
        'Deux fondateurs avec une audience mais sans usine voulaient vendre leur propre SUP — une planche ODM développée selon leur cahier des charges, avec une commande de lancement qui ne les mettrait pas en péril.',
      ],
      industry: 'Marques SUP en démarrage',
      requirement: 'Développement ODM à MOQ réduit : un lot d\'essai de 10 pièces pour valider, puis 200 pièces pour le lancement.',
      challenge:
        'Pas d\'équipe de conception, pas d\'expérience d\'importation et une première commande trop petite pour la plupart des usines — en plus d\'une date de lancement liée à la saison de l\'hémisphère nord.',
      solution:
        'Développement ODM à partir de leur concept sur une plateforme éprouvée, un lot d\'essai de 10 pièces couvrant échantillons et vérification d\'approvisionnement, puis une commande de lancement de 200 pièces de marque avec les outillages conservés pour la marque.',
      product: 'SUP gonflable ODM de marque — visuels de pont personnalisés, emballage et format de carton prêt pour le détail.',
      process: [
        { title: 'Appel de concept', body: 'Rider cible, point de prix et date de lancement ont défini la plateforme de base.' },
        { title: 'Lot d\'essai', body: '10 pièces ont validé le produit et l\'emballage de bout en bout.' },
        { title: 'Commande de lancement', body: '200 pièces produites avec les visuels et le format de carton vérifiés.' },
        { title: 'Voie de passage à l\'échelle', body: 'Outillages conservés pour la marque ; réassorts à tarif amélioré.' },
      ],
      result:
        'Le premier lot a été écoulé en quelques semaines après le début de la saison ; les retours du lot d\'essai ont corrigé un problème d\'emballage avant la mise en production de la grande commande.',
      outcome: 'Lot de lancement écoulé, emballage corrigé avant le passage à l\'échelle, voie de réassort en place.',
      customizations: [
        'Planche ODM développée à partir du concept de la marque sur une plateforme éprouvée',
        'Visuels de pont personnalisés et emballage de marque',
        'Format de carton prêt pour le détail adapté à la commande de lancement',
        'Set d\'accessoires et configuration du kit adaptés au rider cible',
        'Outillages et visuels conservés pour la marque',
        'Planification de production alignée sur la date de lancement',
      ],
      inspectionFocus: [
        'Précision des visuels par rapport aux fichiers approuvés',
        'Vérification de l\'étanchéité sur le lot d\'essai et la commande de lancement',
        'Vérification de l\'emballage et du carton — y compris la correction du lot d\'essai',
        'Intégralité des accessoires et du kit',
      ],
      confidentiality:
        'D\'un commun accord, le nom de la marque et les détails du lancement ne sont pas divulgués. Ce projet est présenté de manière anonyme pour protéger la confidentialité commerciale.',
      tags: ['Développement ODM', 'Lot d\'essai à MOQ réduit', 'Planification saisonnière'],
    },
    {
      slug: 'rental-fleet-multi-site',
      customerType: 'Opérateurs de flottes de location',
      region: 'Amérique du Nord',
      productCategory: 'SUP gonflable polyvalent de gamme location',
      projectStage: 'Audit de flotte → Production uniforme → Renouvellement saisonnier',
      manufacturingScope: 'Spécification de flotte, production, packs de pièces, programme de renouvellement',
      keyRequirements: 'Une seule planche uniforme sur tous les sites, durabilité face à l\'usage intensif de location',
      qualityFocus: 'Vérification de la construction renforcée, étanchéité, intégralité du kit',
      navLabel: 'Flotte de location multi-sites',
      metaTitle: 'Extension de flotte de location | 200 planches, 3 sites — iSupfactory',
      metaDescription:
        'Comment un opérateur de location multi-sites a remplacé un stock hétérogène par 200 planches uniformes sur trois sites — tarif de flotte, renouvellement saisonnier et fourniture de pièces.',
      kicker: 'Projet location',
      h1: 'Standardisation d\'une flotte de location de 200 planches sur trois sites pour un opérateur de flotte',
      intro: [
        'Un opérateur de location gérant trois sites en bord de l\'eau avait besoin d\'une flotte unique au lieu d\'un stock hétérogène — la même planche sur chaque site, tarifée selon le volume de la flotte.',
      ],
      industry: 'Opérateurs de flottes de location',
      requirement: '200 planches de gamme location réparties sur trois sites, avec renouvellement saisonnier et pièces réparables sur le terrain.',
      challenge:
        'Un stock hétérogène vieillissant compliquait réparations et tarification ; l\'usage intensif de location exige une construction renforcée, et le stockage hors saison est réparti sur trois sites.',
      solution:
        'Une seule plateforme de gamme location sur tous les sites, avec boudins renforcés et matériaux résistants aux UV, un tarif de flotte sur le volume de 200 planches et un pack de pièces avec conseils de réparation par site.',
      product: 'SUP gonflable de gamme location — plateforme polyvalente de 11′ avec construction renforcée et kits de réparation.',
      process: [
        { title: 'Audit de flotte', body: 'Volume par site et courbes d\'utilisation ont défini la répartition entre les sites.' },
        { title: 'Spécification uniforme', body: 'Une planche partout — réparations, tarifs et formation plus simples.' },
        { title: 'Tarif de flotte', body: 'Remise en volume sur la commande combinée de 200 planches.' },
        { title: 'Pièces et renouvellement', body: 'Packs de pièces par site, plus un cycle de remplacement saisonnier défini.' },
      ],
      result:
        'La flotte uniforme a éliminé la confusion de réparations par site, la commande groupée a débloqué le tarif de flotte, et le programme de 200 planches est devenu la référence du renouvellement saisonnier.',
      outcome: 'Opérations uniformes, coût unitaire réduit, cycle saisonnier reproductible.',
      customizations: [
        'Une seule plateforme de gamme location sur les trois sites',
        'Boudins renforcés et matériaux résistants aux UV pour l\'usage intensif de location',
        'Répartition par site et numérotation de flotte par emplacement',
        'Packs de pièces par site avec conseils de réparation',
        'Cycle de remplacement saisonnier défini',
      ],
      inspectionFocus: [
        'Vérification de la construction renforcée sur chaque planche',
        'Gonflage et étanchéité de chaque planche',
        'Intégralité des accessoires et des kits de réparation par site',
        'Exactitude de la numérotation de flotte et des étiquettes de site',
        'Contrôles d\'emballage pour la livraison multi-sites',
      ],
      confidentiality:
        'D\'un commun accord, le nom de l\'opérateur et les emplacements des sites ne sont pas divulgués. Ce projet est présenté de manière anonyme pour protéger la confidentialité commerciale.',
      tags: ['Flotte multi-sites', 'Construction de gamme location', 'Renouvellement saisonnier'],
    },
    {
      slug: 'touring-sup-range',
      customerType: 'Distributeurs outdoor et de sports nautiques',
      region: 'Europe',
      productCategory: 'SUP gonflable de croisière (touring)',
      projectStage: 'Brief produit → Approbation d\'échantillon → Production en volume',
      manufacturingScope: 'Revue de plateforme, graphismes, configuration des accessoires, emballage de détail et production',
      keyRequirements: 'Performance en croisière, graphismes spécifiques au projet, kit de détail complet',
      qualityFocus: 'Étanchéité, précision des visuels, intégralité des accessoires, marquage des cartons',
      navLabel: 'Gamme de SUP touring',
      metaTitle: 'Développement de gamme de SUP touring | Distributeur outdoor — iSupfactory',
      metaDescription:
        'Comment iSupfactory a accompagné une gamme de SUP touring pour un distributeur outdoor européen — revue de plateforme, graphismes spécifiques, configuration des accessoires et emballage de détail.',
      kicker: 'Projet touring',
      h1: 'Développer une gamme de SUP touring pour un distributeur outdoor européen',
      intro: [
        'Un projet de SUP gonflable sur mesure couvrant la revue de plateforme, les graphismes spécifiques, la configuration des accessoires, l\'emballage de détail et la planification qualité — de l\'approbation d\'échantillon à la préparation de l\'expédition.',
      ],
      industry: 'Distributeurs et grossistes',
      requirement: 'Une gamme de SUP touring avec graphismes spécifiques, configuration des accessoires et emballage de détail, contrôlée de l\'approbation d\'échantillon à l\'expédition.',
      challenge:
        'Les pratiquants de la croisière attendent stabilité à vitesse et glisse prévisible, aussi la plateforme, les dimensions et le volume ont-ils dû être revus avant la production. Les visuels devaient s\'adapter aux boudins, à l\'EVA et aux positions des valves, et chaque kit de détail devait arriver complet sur toute la gamme.',
      solution:
        'Revue de plateforme et de dimensions pour la performance touring, graphismes spécifiques alignés sur les caractéristiques de la planche, configuration des accessoires couvrant pagaie, leash et sac, planification de l\'emballage de détail et production en volume contrôlée avec des points de contrôle qualité définis.',
      product: 'Gamme de SUP gonflables touring — plateforme de performance avec graphismes personnalisés, kit d\'accessoires complet et emballage prêt pour le détail.',
      process: [
        { title: 'Revue de plateforme', body: 'Dimensions touring, volume et profil de boudins adaptés au rider et au marché cibles.' },
        { title: 'Spécification et visuels', body: 'Spécification technique, alignement des visuels et nomenclature approuvée par le client préparés.' },
        { title: 'Approbation d\'échantillon', body: 'Construction, graphismes et kit confirmés sur une planche physique.' },
        { title: 'Production et inspection', body: 'Production en volume avec points de contrôle qualité, vérification de l\'emballage et libération d\'expédition.' },
      ],
      result:
        'La gamme a progressé de l\'approbation d\'échantillon à la préparation de l\'expédition sous une documentation contrôlée de produit, de visuels, de nomenclature et d\'emballage — l\'échantillon approuvé ayant servi de référence pour la production et l\'inspection finale.',
      outcome: 'Chemin contrôlé de l\'échantillon à la production ; graphismes et emballage figés avant production.',
      customizations: [
        'Configuration de plateforme touring, de dimensions et de volume',
        'Graphismes de pont, de coque et de boudins spécifiques au projet',
        'Disposition et couleur de la mousse EVA',
        'Système d\'ailerons, disposition des élastiques et set d\'accessoires',
        'Sac de marque, version du manuel et emballage de détail',
        'Marquage des cartons et exigences de code-barres pour le marché cible',
      ],
      inspectionFocus: [
        'Vérification du gonflage et de l\'étanchéité',
        'Inspection des valves, des boudins et des soudures',
        'Précision des visuels par rapport aux fichiers approuvés',
        'Intégralité des accessoires et du kit',
        'Vérification de l\'emballage de détail, du code-barres et du marquage des cartons',
      ],
      confidentiality:
        'D\'un commun accord, le nom du distributeur et sa liste de clients ne sont pas divulgués. Ce projet est présenté de manière anonyme pour protéger la confidentialité commerciale.',
      tags: ['Gamme de SUP touring', 'Graphismes personnalisés', 'Emballage de détail'],
    },
    {
      slug: 'fishing-sup-program',
      customerType: 'Détaillants outdoor',
      region: 'Amérique du Nord',
      productCategory: 'SUP gonflable de pêche',
      projectStage: 'Revue de concept → Approbation d\'échantillon → Production du programme',
      manufacturingScope: 'Configuration de plateforme, disposition des accessoires, emballage et production',
      keyRequirements: 'Intégration des accessoires de pêche, plateforme stable, pack organisé',
      qualityFocus: 'Étanchéité, ancrage des accessoires, précision des visuels, intégralité du pack',
      navLabel: 'Programme de SUP de pêche',
      metaTitle: 'Développement de SUP de pêche | Disposition des accessoires et pack — iSupfactory',
      metaDescription:
        'Comment iSupfactory a développé une configuration de SUP de pêche pour un détaillant outdoor — disposition des accessoires, pack organisé et emballage prêt pour le détail sous un programme contrôlé.',
      kicker: 'Projet pêche',
      h1: 'Développement d\'un SUP de pêche pour un détaillant outdoor — disposition des accessoires et configuration du pack',
      intro: [
        'Un projet de SUP spécifique à la pêche : une plateforme stable configurée avec des zones d\'accessoires de pêche, un pack organisé et un emballage prêt pour le détail — de la revue de concept à la production du programme.',
      ],
      industry: 'Marques de détail et outdoor',
      requirement: 'Une configuration de SUP de pêche avec ancrage des accessoires, pack organisé et emballage de détail, de la revue de concept à la production du programme.',
      challenge:
        'Les planches de pêche nécessitent un ancrage des accessoires — porte-cannes, anneaux en D et zones pour caisses — sans compromettre la stabilité. Le pack devait rester organisé à bord, et l\'emballage présenter la catégorie clairement en point de vente.',
      solution:
        'Une plateforme large et stable avec des zones d\'accessoires définies, un positionnement des anneaux en D et des élastiques pour le matériel de pêche, un pack organisé avec kit de réparation, et un emballage de détail développé sous un programme contrôlé unique.',
      product: 'SUP gonflable de pêche — plateforme stable avec zones d\'accessoires de pêche, pack organisé et emballage prêt pour le détail.',
      process: [
        { title: 'Revue de concept', body: 'Usage cible, matériel transporté et structure du pack ont défini la configuration.' },
        { title: 'Disposition des accessoires', body: 'Anneaux en D, élastiques et zones de rangement positionnés sur le pont.' },
        { title: 'Approbation d\'échantillon', body: 'Stabilité et ancrage des accessoires vérifiés sur une planche physique.' },
        { title: 'Production du programme', body: 'Points de contrôle qualité définis, vérification du pack et libération d\'expédition.' },
      ],
      result:
        'La configuration a été confirmée sur l\'échantillon approuvé — ancrage des accessoires, structure du pack et emballage alignés avant la production — et le programme a été expédié avec des kits vérifiés.',
      outcome: 'Disposition des accessoires et pack figés au stade de l\'échantillon ; kits vérifiés expédiés.',
      customizations: [
        'Plateforme large et stable avec zones d\'accessoires de pêche',
        'Positionnement du porte-cannes, des anneaux en D et des élastiques',
        'Disposition du pont pour caisse et rangement du matériel',
        'Sélection pagaie, aileron et leash pour l\'usage pêche',
        'Pack d\'accessoires organisé et kit de réparation',
        'Emballage de détail pour la catégorie SUP de pêche',
        'Code-barres et marquage des cartons pour le marché cible',
      ],
      inspectionFocus: [
        'Vérification de l\'ancrage des accessoires et du positionnement des anneaux en D',
        'Vérification du gonflage et de l\'étanchéité',
        'Exactitude des visuels et de la disposition du pont',
        'Intégralité du pack et configuration des accessoires',
        'Vérification de l\'emballage de détail et du marquage des cartons',
      ],
      confidentiality:
        'D\'un commun accord, le nom du détaillant et les détails de canal ne sont pas divulgués. Ce projet est présenté de manière anonyme pour protéger la confidentialité commerciale.',
      tags: ['Configuration pêche', 'Disposition des accessoires', 'Organisation du pack'],
    },
    {
      slug: 'yoga-sup-program',
      customerType: 'Écoles et programmes de sports nautiques',
      region: 'Europe',
      productCategory: 'SUP gonflable de yoga',
      projectStage: 'Revue du programme → Approbation d\'échantillon → Livraison de flotte',
      manufacturingScope: 'Configuration de plateforme stable, couverture du pont, production et emballage de programme',
      keyRequirements: 'Stabilité pour la pratique en groupe, couverture EVA complète du pont, flotte cohérente',
      qualityFocus: 'Couverture du pont, étanchéité, précision des visuels, intégralité du kit',
      navLabel: 'Programme de SUP de yoga',
      metaTitle: 'Développement de SUP de yoga | Programme d\'entraînement — iSupfactory',
      metaDescription:
        'Comment iSupfactory a développé une configuration stable de SUP de yoga pour un programme d\'entraînement de sports nautiques — couverture complète du pont et flotte de programme cohérente.',
      kicker: 'Projet yoga',
      h1: 'Développement d\'une configuration stable de SUP de yoga pour un programme d\'entraînement de sports nautiques',
      intro: [
        'Une configuration de SUP de yoga pour un programme d\'entraînement : une plateforme large et à haut volume avec une couverture EVA complète du pont, produite comme une flotte cohérente pour la pratique en groupe.',
      ],
      industry: 'Éducation et programmes jeunesse',
      requirement: 'Une configuration stable de SUP de yoga avec couverture complète du pont pour la pratique en groupe, en quantités de programme.',
      challenge:
        'La pratique du yoga exige une plateforme large et à haut volume, parfaitement stable sur l\'eau. Les groupes ont besoin de planches cohérentes, et les instructeurs d\'une orientation claire ainsi que d\'un stockage gérable entre les séances.',
      solution:
        'Une plateforme large et à haut volume avec une couverture EVA complète du pont, une configuration de flotte cohérente sur tout le programme, ainsi que des conseils aux instructeurs et des étiquettes de programme inclus.',
      product: 'SUP gonflable de yoga — plateforme stable avec couverture complète du pont et flotte de programme cohérente.',
      process: [
        { title: 'Revue du programme', body: 'Style de pratique, taille du groupe et stockage ont défini la configuration.' },
        { title: 'Configuration', body: 'Plateforme, couverture du pont et finition définies sur toute la flotte.' },
        { title: 'Approbation d\'échantillon', body: 'Stabilité et couverture du pont vérifiées sur une planche physique.' },
        { title: 'Livraison de flotte', body: 'Quantités de programme produites avec vérification du kit et de l\'emballage.' },
      ],
      result:
        'La flotte a été expédiée comme une seule configuration cohérente — chaque planche identique à l\'échantillon approuvé en stabilité, couverture du pont et finition — avec une orientation incluse pour les instructeurs.',
      outcome: 'Flotte cohérente conforme à l\'échantillon approuvé ; emballage de programme vérifié.',
      customizations: [
        'Plateforme large et à haut volume pour la stabilité debout',
        'Couverture EVA complète du pont sur toute la zone utile',
        'Disposition du pont et positionnement des sangles pour la pratique',
        'Couleur et finition cohérentes sur toute la flotte',
        'Orientation des instructeurs et étiquettes de programme',
        'Configuration de stockage et d\'emballage de programme',
      ],
      inspectionFocus: [
        'Inspection de la couverture du pont et de l\'adhérence de l\'EVA',
        'Vérification du gonflage et de l\'étanchéité',
        'Vérification de la stabilité sur l\'échantillon approuvé',
        'Cohérence des visuels et de la finition sur toute la série',
        'Intégralité du kit et contrôles de l\'emballage de programme',
      ],
      confidentiality:
        'D\'un commun accord, le nom et l\'emplacement du programme ne sont pas divulgués. Ce projet est présenté de manière anonyme pour protéger la confidentialité commerciale.',
      tags: ['Configuration yoga', 'Couverture complète du pont', 'Flotte de programme'],
    },
  ],
  de: [
    {
      slug: 'coastal-rental-fleet',
      customerType: 'Verleihflotten-Betreiber',
      region: 'Mittelmeer — Spanien, Italien, Griechenland',
      productCategory: 'Aufblasbares SUP in Verleihqualität (10′6″ + 11′0″)',
      projectStage: 'Flottenbewertung → Musterfreigabe → gestaffelte Lieferung in 3 Chargen',
      manufacturingScope: 'Flottenspezifikation, verstärkte Konstruktion, gestaffelte Produktion, Ersatzteilversorgung',
      keyRequirements: 'Langlebige Verleihboards, gestaffelte Lieferung an alle Stationen, geringere Quote der Frühausfälle',
      qualityFocus: 'Verstärkte Konstruktion, Luftdichtheit, Flotten-Design, vollständige Ausstattung',
      navLabel: 'Küsten-Verleihflotte',
      metaTitle: 'Küsten-Verleihflotte | 320 Boards in 120 Tagen — iSupfactory',
      metaDescription:
        'Wie ein Verleihbetreiber im Mittelmeerraum eine Küstenflotte mit 320 Boards in Spanien, Italien und Griechenland aufbaute — drei gestaffelte Chargen in 120 Tagen und eine geschätzte Verringerung der Frühausfälle um 20–25 %.',
      kicker: 'Küstenverleih-Projekt',
      h1: 'Wie ein Verleihbetreiber im Mittelmeerraum in 120 Tagen eine Küstenflotte mit 320 Boards aufbaute',
      intro: [
        'Ein Verleihbetreiber mit Stationen in Spanien, Italien und Griechenland benötigte eine langlebige Flotte für die hochfrequentierte Sommersaison — geliefert in drei Chargen, rechtzeitig zur Eröffnung jeder Station.',
      ],
      industry: 'Verleihflotten-Betreiber',
      requirement: '320 Verleihboards in zwei Größen — 10′6″ und 11′0″ — für Küstenstationen in drei Ländern, geliefert in drei gestaffelten Chargen innerhalb von 120 Tagen.',
      challenge:
        'Die tägliche Rotation im Verleih nutzt die Boards schnell ab, und die Frühausfallquote des Betreibers lag bei 20–25 %. Die Stationen eröffneten in drei Ländern an unterschiedlichen Terminen, daher war eine einzelne Lieferung keine Option — und ebenso wenig eine Flotte in nur einer Größe.',
      solution:
        'Zwei langlebige Verleihplattformen in den Größen, die die meisten Mieter abdecken, eine verstärkte Konstruktion für die hohe Beanspruchung sowie drei Produktionschargen, die pünktlich zur Eröffnung jeder Station eintreffen — mit Ersatzteilpaketen und Reparaturanleitung je Station.',
      product: 'Aufblasbares SUP in Verleihqualität — Plattformen in 10′6″ und 11′0″ mit verstärkten Rails und UV-beständigen Materialien, Ausstattung je Station.',
      process: [
        { title: 'Flottenbewertung', body: 'Eröffnungstermine und Auslastungsvolumen legten die beiden Größen und die Chargenverteilung fest.' },
        { title: 'Board-Auswahl', body: 'Verleihplattformen in 10′6″ und 11′0″ gewählt für eine breite Abdeckung der Mieter und Langlebigkeit.' },
        { title: 'Gestaffelte Produktion', body: 'Drei Chargen abgestimmt auf den Eröffnungstermin jeder Station.' },
        { title: 'Lieferung & Support', body: 'Flotte je Charge versandt, inklusive Ersatzteilpaketen und Reparaturanleitung je Station.' },
      ],
      result:
        'Alle drei Chargen trafen innerhalb von 120 Tagen ein, abgestimmt auf die Eröffnung jeder Station. Die verstärkten Plattformen sollen die Frühausfallquote voraussichtlich um geschätzte 20–25 % senken; Ersatzteilpakete decken Reparaturen vor Ort zwischen den Saisons ab.',
      outcome: '320 Boards · 120 Tage · 3 Chargen · ca. −20–25 % Frühausfälle.',
      metrics: [
        { value: '320', label: 'Boards in zwei Größen' },
        { value: '120', label: 'Tage von der Bestellung bis zur letzten Charge' },
        { value: '3', label: 'gestaffelte Lieferungen, eine je Stationseröffnung' },
        { value: '−20–25%', label: 'geschätzte Frühausfallquote' },
      ],
      takeaways: [
        'Gestaffelte Chargen bringen die Flotte exakt zur Eröffnung jeder Station vor Ort — kein ungenutztes Inventar, kein verspäteter Start.',
        'Zwei Größen (10′6″ und 11′0″) deckten die meisten Mieter ab, ohne die Flotte zu zersplittern.',
        'Für die Senkung der Frühausfallquote ist die verstärkte Konstruktion entscheidend — nicht allein der Preis.',
        'Ersatzteilpakete je Station hielten die Boards zwischen den Saisons einsatzbereit.',
      ],
      customizations: [
        'Verleihplattformen in 10′6″ und 11′0″ abgestimmt auf die Mieterprofile',
        'Verstärkte Rails und UV-beständige Materialien für den hochfrequentierten Verleih',
        'Flotten-Design und Nummerierung je Station',
        'Produktionsplan in drei Chargen abgestimmt auf die Stationseröffnungen',
        'Ersatzteilpakete und Reparaturanleitung je Station',
        'Verpackung für getrennte Standorte und Lieferprüfung je Charge',
      ],
      inspectionFocus: [
        'Prüfung der verstärkten Konstruktion je Board',
        'Aufpumpen und Luftdichtheit bei jedem Board',
        'Genauigkeit von Flotten-Design und Stationsnummerierung',
        'Vollständigkeit von Zubehör und Ersatzteilpaketen je Station',
        'Verpackungskontrollen für Sendungen an getrennte Standorte in mehreren Chargen',
      ],
      confidentiality:
        'Vereinbarungsgemäß werden der Name des Betreibers und die Standorte der Stationen nicht veröffentlicht. Dieses Projekt wird anonym dargestellt, um die Vertraulichkeit geschäftlicher Informationen zu wahren.',
      tags: ['Gestaffelte Flottenlieferung', 'Konstruktion in Verleihqualität', 'Geringere Austauschquote'],
    },
    {
      slug: 'eu-distributor-private-label',
      customerType: 'Distributoren & Großhändler',
      region: 'Europa',
      productCategory: 'Aufblasbares SUP im Private Label (2 SKUs)',
      projectStage: 'Sortimentsplanung → Musterfreigabe → Mengenlieferung in 90 Tagen',
      manufacturingScope: 'Private-Label-Branding, Einzelhandelsverpackung, Serienproduktion, Support für Nachbestellungen',
      keyRequirements: 'Zwei markterprobte SKUs unter der eigenen Marke des Distributors, EU-Einzelhandelsverpackung, Abstimmung auf die Saisontermine',
      qualityFocus: 'Designgenauigkeit, Barcode und Etikett je Markt, vollständige Ausstattung, Luftdichtheit',
      navLabel: 'Private Label für Distributoren',
      metaTitle: 'EU-Distributor Private Label | 1,200 Boards in 90 Tagen — iSupfactory',
      metaDescription:
        'Wie ein europäischer Distributor in 90 Tagen eine Private-Label-SUP-Linie mit 1,200 Boards lancierte — zwei SKUs, EU-Einzelhandelsverpackung und im Q4 eine Folgeauftrag zur gleichen fixierten Spezifikation.',
      kicker: 'Private-Label-Projekt',
      h1: 'Wie ein europäischer Distributor in 90 Tagen eine Private-Label-SUP-Linie mit 1,200 Boards lancierte',
      intro: [
        'Ein europäischer Distributor wollte für die Sommersaison eine eigene SUP-Linie im Regal — zwei markterprobte SKUs, vollständige Einzelhandelsverpackung und ohne eigene Werksbeziehungen.',
      ],
      industry: 'Distributoren & Großhändler',
      requirement: '1,200 gebrandete Boards in zwei SKUs — 10′6″ Allround und 12′6″ Touring — mit EU-Einzelhandelsverpackung, geliefert in 90 Tagen.',
      challenge:
        'Das Verkaufsfenster im Sommer steht fest, daher mussten alle 1,200 Boards samt Verpackung pünktlich eintreffen. Die Private-Label-Verpackung — Barcodes, Etiketten, Handbücher — musste den Anforderungen des EU-Einzelhandels entsprechen, und der Distributor konnte auf keine SUP-Fabrikerfahrung zurückgreifen.',
      solution:
        'Zwei markterprobte Plattformen für das Einzelhandelssortiment, das komplette Private-Label-Design und die EU-Einzelhandelsverpackung in einem Programm, und eine Produktionsplanung, sodass beide SKUs innerhalb des 90-Tage-Fensters gemeinsam verschifft werden — mit fixierter Spezifikation für eine saubere Nachbestellung.',
      product: 'Aufblasbares SUP im Private Label — 10′6″ Allround und 12′6″ Touring, mit gebrandetem Paddel, Pumpe, Rucksack und bedruckten Einzelhandelskartons.',
      process: [
        { title: 'Sortimentsplanung', body: 'Zwei SKUs ausgewählt — 10′6″ Allround und 12′6″ Touring — für die Abdeckung im Einzelhandel.' },
        { title: 'Musterfreigabe', body: 'Design, Verpackung und Ausführung an physischen Boards bestätigt.' },
        { title: 'Produktion in 90 Tagen', body: 'Volumenproduktion so geplant, dass beide SKUs gemeinsam für das Saisonfenster verschifft werden.' },
        { title: 'Q4-Nachbestellung', body: 'Nachbestellung zur gleichen fixierten Spezifikation aufgegeben.' },
      ],
      result:
        'Alle 1,200 Boards mit kompletter Einzelhandelsverpackung wurden innerhalb von 90 Tagen verschifft — rechtzeitig zum Verkaufsfenster im Sommer. Die Linie verkaufte sich vollständig, und der Distributor kam im Q4 mit einer Nachbestellung zur gleichen fixierten Spezifikation zurück.',
      outcome: '1,200 Boards · 90 Tage · 2 SKUs · Q4-Nachbestellung.',
      metrics: [
        { value: '1,200', label: 'Boards in einem Launch' },
        { value: '90', label: 'Tage bis zur vollständigen Lieferung' },
        { value: '2', label: 'Einzelhandels-SKUs, beide rechtzeitig zum Fenster' },
        { value: 'Q4', label: 'Nachbestellung zur gleichen Spezifikation' },
      ],
      takeaways: [
        'Der Start mit zwei bewährten SKUs hält das Lagerrisiko gering und füllt dennoch das Einzelhandelssortiment.',
        'Ein einziges Programm für Boards, Zubehör und Verpackung beseitigt eine häufige Fehlerquelle beim Launch.',
        'Ein fixiertes Saisondatum gibt den Zeitplan vor — die Produktionsplanung muss es als nicht verhandelbar behandeln.',
        'Die Fixierung der Spezifikation beim Launch macht Nachbestellungen sauber und konsistent.',
      ],
      customizations: [
        'Allround-Plattformen in 10′6″ und Touring-Plattformen in 12′6″ für das Einzelhandelssortiment',
        'Private-Label-Design für Deck, Unterseite und Verpackung',
        'Gebrandetes Paddel, Pumpe und Rucksack je SKU',
        'Bedruckte Einzelhandelskartons, Barcodes, Etiketten und Bedienungsanleitung für den EU-Einzelhandel',
        'Stückliste und Spezifikation fixiert für konsistente Nachbestellungen',
        'Gestaffelte Lieferung abgestimmt auf das Launch-Fenster im Einzelhandel',
      ],
      inspectionFocus: [
        'Designgenauigkeit gegenüber den freigegebenen Private-Label-Vorlagen',
        'Prüfung von Barcode, Etikett und Anleitung je Markt',
        'Vollständige Ausstattung je SKU über die Serie von 1,200 Boards',
        'Stichproben der Luftdichtheit während der Produktion',
        'Prüfung von Karton und Verpackung je SKU',
      ],
      confidentiality:
        'Vereinbarungsgemäß werden der Name des Distributors und seine Einzelhandelskunden nicht veröffentlicht. Dieses Projekt wird anonym dargestellt, um die Vertraulichkeit geschäftlicher Informationen zu wahren.',
      tags: ['Private Label', '2-SKU-Einzelhandelssortiment', 'Lieferung im Saisonfenster'],
    },
    {
      slug: 'resort-sup-fleet',
      customerType: 'Resort & Hotellerie',
      region: 'Europa / Nordamerika',
      productCategory: 'Aufblasbares Allround-SUP',
      projectStage: 'Musterfreigabe → Serienproduktion → Flotten-Refresh',
      manufacturingScope: 'Design, Zubehör, Verpackung und Flottenproduktion',
      keyRequirements: 'Verleih-Langlebigkeit, kompakte Lagerung, vollständiges Branding der Anlage',
      qualityFocus: 'Luftdichtheit, Designgenauigkeit, vollständiges Zubehör, Kartonkennzeichnung',
      navLabel: 'SUP-Flotte für ein Luxusresort',
      metaTitle: 'SUP-Flotte für ein Luxusresort | 100 gebrandete Boards — iSupfactory',
      metaDescription:
        'Wie ein Luxusresort sein Strandprogramm mit 100 gebrandeten SUP-Boards ausstattete — individuelles Design, Konstruktion in Verleihqualität und saisonales Flottenmanagement.',
      kicker: 'Resort-Projekt',
      h1: 'Wie ein Luxusresort eine gebrandete SUP-Flotte mit 100 Boards standardisierte',
      intro: [
        'Ein Luxusresort wollte, dass sich sein Strandprogramm wie ein Teil der Anlage anfühlt — gebrandete Boards in den Resortfarben, robust genug für den täglichen Gästeeinsatz und zwischen den Saisons einfach zu lagern.',
      ],
      industry: 'Resort & Hotellerie',
      requirement: '100 gebrandete SUP-Boards für den Gästeverleih in den Farben der Anlage.',
      challenge:
        'Der tägliche Verleih nutzt Standardflotten schnell ab, und die Lagerfläche außerhalb der Saison ist begrenzt. Das Resort benötigte Boards, die intensiver Nutzung standhalten, platzsparend lagern und das vollständige Branding der Anlage tragen.',
      solution:
        'Aufblasbare Konstruktion in Verleihqualität mit verstärkten Rails und UV-beständigen Materialien, vollflächiges Design in den Resortfarben sowie gebrandete Paddel und Pumpen als Teil des Flottenpakets.',
      product: 'Individuelles aufblasbares SUP — 11′-Allround-Plattform mit gebrandetem Deck-Design und Zubehör.',
      process: [
        { title: 'Flottenberatung', body: 'Gästeaufkommen, Uferbereich und Saisonlänge definierten Flottengröße und Board-Mix.' },
        { title: 'Gebrandetes Muster', body: 'Farben und Logo vor der Produktion an einem physischen Board freigegeben.' },
        { title: 'Produktion & Qualitätskontrolle', body: '100 Boards mit mehrstufiger Qualitätskontrolle über die gesamte Serie.' },
        { title: 'Lieferung & Refresh', body: 'Saisonale Lieferung, Ersatzteile und ein Refresh-Programm für spätere Saisons.' },
      ],
      result:
        'Die Flotte startete pünktlich zur Saison, die Boards lagern außerhalb der Saison in einem einzigen Raum, und das Gästefeedback zum gebrandeten Equipment trieb im Folgejahr eine Flottenerweiterung voran.',
      outcome: 'Pünktlicher Saisonstart, 100 % gebrandete Flotte, Erweiterung in der Folgesaison.',
      customizations: [
        'Plattform, Größe und Konstruktion der Boards für den täglichen Verleih ausgewählt',
        'Vollflächiges Deck-Design in den Farben der Anlage',
        'Rail-Branding und Logo-Platzierung an einem physischen Muster freigegeben',
        'Gebrandetes Paddel, Pumpe und Zubehörset für jedes Board',
        'Flottennummerierung und Farbcodierung über die gesamte Serie',
        'Platzsparende Lagerungskonfiguration und Umfang des saisonalen Refresh',
      ],
      inspectionFocus: [
        'Aufpumpen und Luftdichtheit bei jedem Board',
        'Zustand von Ventil und verstärkten Rails',
        'Designgenauigkeit und Farbabstimmung gegenüber dem freigegebenen Muster',
        'Vollständigkeit von Zubehör und Ausstattung je Board',
        'Kartonkennzeichnung und Flottenetiketten vor Versandfreigabe',
      ],
      confidentiality:
        'Vereinbarungsgemäß werden der Name des Resorts und seine Markenassets nicht veröffentlicht. Dieses Projekt wird anonym dargestellt, um die Vertraulichkeit geschäftlicher Informationen zu wahren.',
      tags: ['Gebrandete Gästeflotte', 'Konstruktion in Verleihqualität', 'Saisonaler Refresh'],
    },
    {
      slug: 'private-label-launch',
      customerType: 'Einzelhandels- & Outdoor-Marken',
      region: 'Europa',
      productCategory: 'Aufblasbares Allround-SUP (Private Label)',
      projectStage: 'Musterfreigabe → Validierungsserie → Skalierung',
      manufacturingScope: 'Produkt- und Verpackungsdesign, Bemusterung, Produktion, Werkzeugverbleib',
      keyRequirements: 'Verkaufsfähige Linie ohne eigenes SUP-Design oder eigene Fertigung',
      qualityFocus: 'Versionskontrolle des Designs, Verpackungsgenauigkeit, vollständige Ausstattung',
      navLabel: 'Private-Label-Markenlaunch',
      metaTitle: 'Private-Label-SUP-Launch | Markenerweiterung — iSupfactory',
      metaDescription:
        'Wie eine bestehende Outdoor-Marke mit einer Private-Label-Produktlinie ins SUP-Geschäft expandierte — vom Logo bis zum ersten Container, mit skalierbarer MOQ.',
      kicker: 'Private-Label-Projekt',
      h1: 'Wie eine Outdoor-Marke eine Private-Label-SUP-Linie vom Logo bis zum ersten Container lancierte',
      intro: [
        'Ein Sporteinzelhändler mit etablierter Marke wollte ohne Werksbeziehungen ins Paddelsportgeschäft expandieren — eine verkaufsfähige SUP-Linie unter eigenem Namen.',
      ],
      industry: 'Einzelhandels- & Outdoor-Marken',
      requirement: 'Eine Private-Label-SUP-Linie — Logo, Farben und Verpackung auf bewährten Plattformen, erste Serie mit 50 Stück.',
      challenge:
        'Kein eigenes SUP-Designteam, keine Fertigungserfahrung und eine erste Bestellung, die klein genug ist, um den Markt vor der Skalierung zu testen.',
      solution:
        'Komplettes Produkt- und Verpackungsdesign auf Basis der Markenassets, eine Validierungsserie mit 50 Stück und anschließend Skalierung auf denselben verifizierten Plattformen — das Werkzeug bleibt bei der Marke.',
      product: 'Aufblasbares SUP im Private Label — gebrandetes Deck, Paddel, Pumpe, Rucksack und bedruckte Kartons.',
      process: [
        { title: 'Marken-Anforderung', body: 'Logo, Farben und Markenrichtlinien in Board- und Verpackungsdesign umgesetzt.' },
        { title: 'Musterfreigabe', body: 'Das physische Muster bestätigte Ausführung, Farben und Verpackung.' },
        { title: 'Validierungsserie', body: 'Erste Serie mit 50 Stück vor der Skalierung komplett verkauft.' },
        { title: 'Skalierung', body: 'Produktion in Container-Bestellmenge bei gleichbleibender Qualität; Designs im Eigentum der Marke.' },
      ],
      result:
        'Die Linie verkaufte ihre Validierungsserie innerhalb einer Saison und skalierte auf Container-Bestellungen — die Marke besitzt alle Designs und Werkzeuge.',
      outcome: 'In einer Saison validiert, auf Container-Bestellungen skaliert.',
      customizations: [
        'Board-Plattformen, Größen und Farben auf die Markenlinie abgestimmt',
        'Deck-, Unterseiten- und Verpackungsdesign auf Basis der Markenassets',
        'Gebrandetes Paddel, Pumpe, Rucksack und Zubehörset',
        'Bedruckte Einzelhandelskartons und Etiketten-Layout',
        'Barcode- und Bedienungsanleitungsversion für den Zielmarkt',
        'Werkzeug- und Designeigentum verbleibt bei der Marke',
      ],
      inspectionFocus: [
        'Übereinstimmung der Designversion mit den freigegebenen Vorlagen',
        'Farb- und Ausführungsgenauigkeit am physischen Muster',
        'Prüfung von Verpackung, Barcode und Anleitung',
        'Vollständige Ausstattung über die Validierungsserie',
        'Stichproben der Luftdichtheit während der Produktion',
      ],
      confidentiality:
        'Vereinbarungsgemäß werden der Markenname und die geschäftlichen Details nicht veröffentlicht. Dieses Projekt wird anonym dargestellt, um die Vertraulichkeit geschäftlicher Informationen zu wahren.',
      tags: ['Markenerweiterung', 'Verpackungsdesign', 'Skalierbare MOQ'],
    },
    {
      slug: 'club-team-boards',
      customerType: 'Paddelclubs & Teams',
      region: 'Nordamerika',
      productCategory: 'Aufblasbares Trainings-SUP',
      projectStage: 'Musterfreigabe → Flottenproduktion → Nachbestellung zur Erweiterung',
      manufacturingScope: 'Club-Branding, Flottenproduktion, Ersatzteil-Support',
      keyRequirements: 'Einheitlicher Team-Look, knappes Budget, identische künftige Erweiterung',
      qualityFocus: 'Designgenauigkeit, Luftdichtheit, vollständige Ausstattung, konsistente Nachbestellungen',
      navLabel: 'Team-Boards für den Club',
      metaTitle: 'Club Team SUP Boards | Gebrandeter Flotten-Refresh — iSupfactory',
      metaDescription:
        'Wie ein Paddelclub seine Flotte mit 25 gebrandeten Trainings-Boards neu aufstellte und auffrischte — Team-Design, Ersatzteil-Support und konsistente Nachbestellungen.',
      kicker: 'Club-Projekt',
      h1: 'Wie ein Paddelclub eine Trainingsflotte mit 25 Boards neu brandete',
      intro: [
        'Ein Paddelclub relaunchte seine Marke und benötigte passendes Equipment — eine einheitliche Teamflotte für Training und Regatten, ohne zusammengewürfelte Bestände.',
      ],
      industry: 'Paddelclubs & Teams',
      requirement: '25 gebrandete Trainings-Boards mit Clubname, Farben und Logo sowie Ersatzteilen.',
      challenge:
        'Die bestehende Flotte war uneinheitlich und ungebrandet; das Budget war knapp, und für die künftige Erweiterung waren identische, passende Bestände erforderlich.',
      solution:
        'Club-Branding auf jedem Board, Flottenkonditionen für die Menge sowie Ersatzteile und Reparaturanleitungen zur Verlängerung der Board-Lebensdauer.',
      product: 'Individuelles Team-SUP — Trainingsform mit Club-Design sowie Ersatzfinnen und Reparatursets.',
      process: [
        { title: 'Club-Anforderung', body: 'Mitgliederzahl, Trainingsarten und aktuelles Equipment geprüft.' },
        { title: 'Board-Auswahl', body: 'Trainings- und Anfängerformen auf das Clubprogramm abgestimmt.' },
        { title: 'Branding', body: 'Clubname, Farben und Logo auf der gesamten Flotte aufgebracht.' },
        { title: 'Lieferung & Wachstum', body: 'Flotte mit Ersatzteilen geliefert; identische Nachbestellung für die Erweiterung.' },
      ],
      result:
        'Die Mitglieder trainieren auf passendem gebrandetem Equipment, und der Club erweiterte die Flotte in der Folgesaison mit einer identischen Nachbestellung in gleicher Qualität.',
      outcome: 'Einheitliche Flotte, identische Erweiterungs-Nachbestellung.',
      customizations: [
        'Trainings- und Anfängerplattformen auf das Clubprogramm abgestimmt',
        'Clubname, Farben und Logo auf der gesamten Flotte',
        'Board-Nummerierung und Größenordnung je Trainingsgruppe',
        'Ersatzfinnen und Reparatursets als Flottenzubehör',
        'Nachbestellspezifikation fixiert für eine identische künftige Erweiterung',
      ],
      inspectionFocus: [
        'Designgenauigkeit von Clubname, Farben und Logo',
        'Prüfung von Aufpumpen und Luftdichtheit',
        'Vollständigkeit von Zubehör und Reparatursets',
        'Farbkonsistenz über die Serie von 25 Boards',
      ],
      confidentiality:
        'Vereinbarungsgemäß werden der Clubname und der Standort nicht veröffentlicht. Dieses Projekt wird anonym dargestellt, um die Vertraulichkeit geschäftlicher Informationen zu wahren.',
      tags: ['Club-Branding', 'Flottenkonditionen', 'Ersatzteil-Support'],
    },
    {
      slug: 'school-program-fleet',
      customerType: 'Bildung & Jugendprogramme',
      region: 'Europa',
      productCategory: 'Aufblasbares SUP für Anfänger & Mehrpersonen',
      projectStage: 'Programmüberprüfung → Musterfreigabe → Flottenlieferung',
      manufacturingScope: 'Paketdesign, Produktion, Ersatzteile und Support für die Erneuerung',
      keyRequirements: 'Sicherheitsorientiertes Equipment, Mengen für Klassengrößen, Verwaltung mit begrenztem Personal',
      qualityFocus: 'Stabilität, Luftdichtheit, vollständiges Zubehör, Nutzeranleitung',
      navLabel: 'Flotte für Schulprogramme',
      metaTitle: 'SUP-Programm für Schulen | Anfängerflotte — iSupfactory',
      metaDescription:
        'Wie eine Schule mit einer Anfängerflotte aus 15 Boards und Mehrpersonen-Boards einen Paddelsport-Wahlkurs startete — sicherheitsorientiertes Equipment für den Unterricht.',
      kicker: 'Schulprojekt',
      h1: 'Wie eine Schule eine Anfängerflotte mit 15 Boards für den Paddelsportunterricht aufbaute',
      intro: [
        'Eine Schule, die einen Paddelsport-Wahlkurs startete, benötigte Equipment, das für Einsteiger stabil und sicher ist, auf Klassen ausgelegt und mit begrenztem Personal leicht zu verwalten.',
      ],
      industry: 'Bildung & Jugendprogramme',
      requirement: 'Eine Anfängerflotte für Klassengrößen, einschließlich Mehrpersonen-Boards für die ersten Unterrichtseinheiten.',
      challenge:
        'Gemischte Leistungsniveaus, strenge Sicherheitsanforderungen, schulische Beschaffungszyklen und ein Budget, das auch künftige Jahrgänge abdecken muss.',
      solution:
        'Breite, voluminöse Anfänger-Boards und Mehrpersonen-Boards, Programmkonditionen passend zu den Klassengrößen sowie eine klare Nutzeranleitung für die Übungsleiter.',
      product: 'Anfänger-SUP-Flotte — stabile Plattformen mit verstärkter Konstruktion für eine lange Programmlaufzeit.',
      process: [
        { title: 'Programmüberprüfung', body: 'Klassengrößen, Wasserfläche und Übungsleiter-Aufbau definierten das Paket.' },
        { title: 'Paketaufbau', body: 'Board-Typen und -Mengen auf den Unterricht abgestimmt.' },
        { title: 'Musterfreigabe', body: 'Stabilität und Konstruktion an einem physischen Board verifiziert.' },
        { title: 'Lieferung & Erneuerung', body: 'Mengenbelieferung, Ersatzteile und Nachbestellungen für neue Jahrgänge.' },
      ],
      result:
        'Die Übungsleiter meldeten schnellere Fortschritte in der ersten Einheit auf den stabilen Plattformen, und das Programm erneuerte das Equipment im Folgejahr mit einer passenden Nachbestellung.',
      outcome: 'Schnellere Lernkurve, erneuertes Equipment im Folgejahr.',
      customizations: [
        'Breite, voluminöse Anfängerplattformen für die ersten Einheiten',
        'Mehrpersonen-Boards für den Gruppenunterricht',
        'Board-Größe und -Menge auf die Klassengrößen abgestimmt',
        'Klare Nutzeranleitung und Unterrichtsbeschriftungen',
        'Verstärkte Konstruktion für eine lange Programmlaufzeit',
        'Spezifikation für Mengenbelieferung und Erneuerungs-Nachbestellungen',
      ],
      inspectionFocus: [
        'Prüfung von Stabilität und Deck-Konfiguration',
        'Aufpumpen und Luftdichtheit bei jedem Board',
        'Vollständiges Zubehör je Board und Klassenausstattung',
        'Genauigkeit von Nutzeranleitung und Beschriftung',
        'Kartonkennzeichnung und Kontrolle der Klassenausstattung',
      ],
      confidentiality:
        'Vereinbarungsgemäß werden der Schulname und die Region nicht veröffentlicht. Dieses Projekt wird anonym dargestellt, um die Vertraulichkeit geschäftlicher Informationen zu wahren.',
      tags: ['Anfängerflotte', 'Programmstart', 'Erneuerungsbestellungen'],
    },
    {
      slug: 'distributor-line-expansion',
      customerType: 'Distributoren & Großhändler',
      region: 'Zwei Exportregionen',
      productCategory: 'Aufblasbares Mid-Range-SUP (6 SKUs)',
      projectStage: 'Sortimentsplanung → Musterfreigabe → Belieferung mehrerer Märkte',
      manufacturingScope: 'Boards, Zubehör und Einzelhandelsverpackung in einem Programm',
      keyRequirements: 'Ein Qualitätsverantwortlicher, konsistentes Branding, geringere Lagerbestände pro SKU',
      qualityFocus: 'Luftdichtheit, Designgenauigkeit, Barcode- und Etikettgenauigkeit, Stücklisten-Abgleich',
      navLabel: 'Sortimentserweiterung für Distributoren',
      metaTitle: 'Distributor SUP-Sortimentserweiterung | 6-SKU-Programm — iSupfactory',
      metaDescription:
        'Wie ein Wassersport-Distributor eine vollständige Mid-Market-SUP-Linie mit sechs SKUs aufbaute — eine Fabrik, ein Programm, exportiert in mehrere Märkte.',
      kicker: 'Distributor-Projekt',
      h1: 'Wie ein Distributor eine 6-SKU-SUP-Linie in zwei Märkten lancierte',
      intro: [
        'Ein Wassersport-Distributor mit Kayaks und Zubehör im Programm wollte eine eigene aufblasbare SUP-Linie — ohne die Versorgung für Boards, Paddel und Pumpen auf mehrere Fabriken aufzuteilen.',
      ],
      industry: 'Distributoren & Großhändler',
      requirement: 'Eine 6-SKU-Mid-Market-SUP-Linie (10′6″ bis 12′6″ plus Zubehörsets) mit Export in zwei Regionen.',
      challenge:
        'Getrennte Fabriken für Boards, Paddel und Pumpen bedeuteten inkonsistentes Branding, drei getrennte Versorgungspunkte und keinen einheitlichen Qualitätsverantwortlichen für Garantiefälle.',
      solution:
        'Ein Programm für Boards, Zubehör und Einzelhandelsverpackung; gemeinsame Zubehörsets zur Senkung der Lagerbestände pro SKU; und Versorgungsoptionen passend zur Aufstellung jedes Markts.',
      product: 'Sechs gebrandete Einzelhandels-SKUs — aufblasbare SUP-Plattformen mit vollständigen, in Fächern verpackten Sets in bedruckten Kartons.',
      process: [
        { title: 'Sortimentsplanung', body: 'Marktlücken und Preispositionen definierten die sechs SKUs und die Bundle-Inhalte.' },
        { title: 'Einheitliches Branding', body: 'Ein Designsystem, angewandt auf Boards, Paddel, Pumpen und Kartons.' },
        { title: 'Programmkonditionen', body: 'Mengenpreise über das gesamte Programm, nicht pro SKU.' },
        { title: 'Versorgung nach Märkten', body: 'Standard-Exportkonditionen für die Heimatregion, Full-Service-Konditionen für den zweiten Markt.' },
      ],
      result:
        'Die Linie wurde in einer Saison in beiden Märkten eingeführt; gemeinsame Zubehörsets senkten die Lagerbestände, und Garantiefälle wurden über einen einzigen Werkskontakt gelöst.',
      outcome: 'Multi-Markt-Launch in einer Saison, geringere Lagerbestände, ein Garantie-Ansprechpartner.',
      customizations: [
        'Sechs SKUs von 10′6″ bis 12′6″ plus Zubehör-Bundles',
        'Ein Designsystem für Boards, Paddel, Pumpen und Kartons',
        'Gemeinsame Zubehörsets zur Senkung der Lagerbestände pro SKU',
        'Vollständige, in Fächern verpackte Sets in bedruckten Einzelhandelskartons',
        'Barcode-, Etikett- und Anleitungsversionen je Zielmarkt',
        'Versorgungskonditionen und Verpackung auf jeden Markt abgestimmt',
      ],
      inspectionFocus: [
        'Stücklisten-Abgleich je SKU-Konfiguration',
        'Design- und Brandinggenauigkeit über die sechs SKUs',
        'Barcode- und Etikettgenauigkeit je Markt',
        'Vollständigkeit der Zubehörsets und Fächerverpackung',
        'Luftdichtheitsprüfung über die Serie',
      ],
      confidentiality:
        'Vereinbarungsgemäß werden der Name des Distributors und seine Kundenliste nicht veröffentlicht. Dieses Projekt wird anonym dargestellt, um die Vertraulichkeit geschäftlicher Informationen zu wahren.',
      tags: ['Multi-SKU-Programm', 'Komplette Einzelhandelssets'],
    },
    {
      slug: 'startup-brand-zero-to-one',
      customerType: 'Startup-SUP-Marken',
      region: 'Nordamerika',
      productCategory: 'Aufblasbares ODM-Allround-SUP',
      projectStage: 'Konzept → Probeproduktion → Launch-Bestellung',
      manufacturingScope: 'ODM-Entwicklung, Design, Verpackung, Produktion',
      keyRequirements: 'Erste Serie mit niedriger MOQ, Abstimmung auf den Launch-Zeitpunkt, Werkzeug bleibt bei der Marke',
      qualityFocus: 'Luftdichtheit, Designgenauigkeit, Verpackungsprüfung',
      navLabel: 'Startup-Markenlaunch 0→1',
      metaTitle: 'Startup-SUP-Markenlaunch | Vom Konzept zur ersten Serie — iSupfactory',
      metaDescription:
        'Wie ein SUP-Startup vom Konzept zu einer ausverkauften ersten Serie gelangte — ODM-Entwicklung, eine Probeproduktion mit 10 Stück und anschließend eine gebrandete Launch-Bestellung mit 200 Stück.',
      kicker: 'Startup-Projekt',
      h1: 'Vom Konzept zum ausverkauften Launch mit 200 Boards für eine Startup-SUP-Marke',
      intro: [
        'Zwei Gründer mit Reichweite, aber ohne Fabrik wollten ihr eigenes SUP verkaufen — ein ODM-Board nach ihrer Spezifikation, mit einer Launch-Bestellung, die sie nicht überfordert.',
      ],
      industry: 'Startup-SUP-Marken',
      requirement: 'ODM-Entwicklung mit niedriger MOQ: Probeproduktion mit 10 Stück zur Validierung, danach 200 Stück für den Launch.',
      challenge:
        'Kein Designteam, keine Import-Erfahrung und eine erste Bestellung, die für die meisten Fabriken zu klein ist — dazu ein Launch-Termin, der an die Saison der Nordhalbkugel gebunden ist.',
      solution:
        'ODM-Entwicklung auf Basis ihres Konzepts auf einer bewährten Plattform, eine Probeproduktion mit 10 Stück inklusive Muster- und Versorgungsprüfung, dann eine gebrandete Launch-Bestellung mit 200 Stück — das Werkzeug bleibt bei der Marke.',
      product: 'Gebrandetes aufblasbares ODM-SUP — individuelles Deck-Design, Verpackung und handelsfertige Kartonmaße.',
      process: [
        { title: 'Konzeptgespräch', body: 'Zielgruppe, Preisposition und Launch-Termin legten die Basisplattform fest.' },
        { title: 'Probeproduktion', body: '10 Stück validierten das Produkt und die Verpackung durchgängig.' },
        { title: 'Launch-Bestellung', body: '200 Stück mit verifiziertem Design und Karton-Spezifikation produziert.' },
        { title: 'Skalierungspfad', body: 'Werkzeug bleibt bei der Marke; Nachbestellungen zu verbesserten Konditionen.' },
      ],
      result:
        'Die erste Serie war innerhalb weniger Wochen nach Saisonstart ausverkauft; das Feedback aus der Probeproduktion behob ein Verpackungsproblem, bevor die große Bestellung in Produktion ging.',
      outcome: 'Ausverkaufte Launch-Serie, Verpackung vor der Skalierung behoben, Nachbestellweg etabliert.',
      customizations: [
        'ODM-Board auf Basis des Markenkonzepts auf einer bewährten Plattform entwickelt',
        'Individuelles Deck-Design und Markenverpackung',
        'Handelsfertige Kartonmaße für die Launch-Bestellung',
        'Zubehörset und Ausstattung auf die Zielgruppe abgestimmt',
        'Werkzeug und Design bleiben bei der Marke',
        'Produktionsplanung abgestimmt auf den Launch-Termin',
      ],
      inspectionFocus: [
        'Designgenauigkeit gegenüber den freigegebenen Vorlagen',
        'Luftdichtheitsprüfung bei Probeproduktion und Launch-Bestellung',
        'Verpackungs- und Kartonprüfung — einschließlich des Fix aus der Probeproduktion',
        'Vollständigkeit von Zubehör und Ausstattung',
      ],
      confidentiality:
        'Vereinbarungsgemäß werden der Markenname und die Launch-Details nicht veröffentlicht. Dieses Projekt wird anonym dargestellt, um die Vertraulichkeit geschäftlicher Informationen zu wahren.',
      tags: ['ODM-Entwicklung', 'Probeproduktion mit niedriger MOQ', 'Planung nach Saisontermin'],
    },
    {
      slug: 'rental-fleet-multi-site',
      customerType: 'Verleihflotten-Betreiber',
      region: 'Nordamerika',
      productCategory: 'Aufblasbares Allround-SUP in Verleihqualität',
      projectStage: 'Flottenaudit → Einheitliche Produktion → Saisonaler Refresh',
      manufacturingScope: 'Flottenspezifikation, Produktion, Ersatzteilpakete, Refresh-Programm',
      keyRequirements: 'Ein einheitliches Board an allen Standorten, Langlebigkeit bei Verleihbelastung',
      qualityFocus: 'Prüfung der verstärkten Konstruktion, Luftdichtheit, vollständige Ausstattung',
      navLabel: 'Verleihflotte für mehrere Standorte',
      metaTitle: 'Verleihflotten-Erweiterung | 200 Boards, 3 Standorte — iSupfactory',
      metaDescription:
        'Wie ein Verleihbetreiber mit mehreren Standorten gemischte Bestände durch 200 einheitliche Boards an drei Standorten ersetzte — Flottenkonditionen, saisonaler Refresh und Ersatzteilversorgung.',
      kicker: 'Verleih-Projekt',
      h1: 'Standardisierung einer Verleihflotte mit 200 Boards an drei Standorten für einen Flottenbetreiber',
      intro: [
        'Ein Verleihbetreiber mit drei Wasserstandorten benötigte eine einheitliche Flotte statt gemischter Bestände — dasselbe Board an jedem Standort, bepreist nach Flottenvolumen.',
      ],
      industry: 'Verleihflotten-Betreiber',
      requirement: '200 Boards in Verleihqualität an drei Standorten, mit saisonalem Refresh und vor Ort reparierbaren Ersatzteilen.',
      challenge:
        'Gemischte, gealterte Bestände erschwerten Reparaturen und Preisbildung; Verleihbelastung erfordert eine verstärkte Konstruktion, und die Lagerung außerhalb der Saison verteilt sich auf drei Standorte.',
      solution:
        'Eine Plattform in Verleihqualität an allen Standorten mit verstärkten Rails und UV-beständigen Materialien, Flottenkonditionen für das Volumen von 200 Boards sowie ein Ersatzteilpaket mit Reparaturanleitung je Standort.',
      product: 'Aufblasbares SUP in Verleihqualität — 11′-Allround-Plattform mit verstärkter Konstruktion und Reparatursets.',
      process: [
        { title: 'Flottenaudit', body: 'Volumen- und Auslastungszahlen pro Standort legten die Verteilung fest.' },
        { title: 'Einheitliche Spezifikation', body: 'Ein Board überall — einfachere Reparaturen, Preise und Einarbeitung.' },
        { title: 'Flottenkonditionen', body: 'Mengenrabatt über die kombinierte Bestellung mit 200 Boards.' },
        { title: 'Ersatzteile & Refresh', body: 'Ersatzteilpakete je Standort plus ein definierter saisonaler Austauschzyklus.' },
      ],
      result:
        'Die einheitliche Flotte beseitigte die Reparatur-Unsicherheit je Standort, kombinierte Bestellungen ermöglichten Flottenkonditionen, und das 200-Boards-Programm wurde zur Basis der saisonalen Erneuerung.',
      outcome: 'Einheitlicher Betrieb, geringere Stückkosten, wiederholbarer Saisonzyklus.',
      customizations: [
        'Eine Plattform in Verleihqualität an allen drei Standorten',
        'Verstärkte Rails und UV-beständige Materialien für die Verleihbelastung',
        'Standortverteilung und Flottennummerierung je Standort',
        'Ersatzteilpakete je Standort mit Reparaturanleitung',
        'Definierter saisonaler Austauschzyklus',
      ],
      inspectionFocus: [
        'Prüfung der verstärkten Konstruktion je Board',
        'Aufpumpen und Luftdichtheit bei jedem Board',
        'Vollständigkeit von Zubehör und Reparatursets je Standort',
        'Genauigkeit von Flottennummerierung und Standortbeschriftung',
        'Verpackungskontrollen für Sendungen an mehrere Standorte',
      ],
      confidentiality:
        'Vereinbarungsgemäß werden der Name des Betreibers und die Standorte nicht veröffentlicht. Dieses Projekt wird anonym dargestellt, um die Vertraulichkeit geschäftlicher Informationen zu wahren.',
      tags: ['Flotte mit mehreren Standorten', 'Konstruktion in Verleihqualität', 'Saisonale Erneuerung'],
    },
    {
      slug: 'touring-sup-range',
      customerType: 'Outdoor- & Wassersport-Distributoren',
      region: 'Europa',
      productCategory: 'Aufblasbares Touring-SUP',
      projectStage: 'Produktanforderung → Musterfreigabe → Serienproduktion',
      manufacturingScope: 'Plattform-Review, Design, Zubehörkonfiguration, Einzelhandelsverpackung und Produktion',
      keyRequirements: 'Touring-Performance, projektspezifisches Design, komplettes Einzelhandelsset',
      qualityFocus: 'Luftdichtheit, Designgenauigkeit, vollständiges Zubehör, Kartonkennzeichnung',
      navLabel: 'Touring-SUP-Linie',
      metaTitle: 'Entwicklung einer Touring-SUP-Linie | Outdoor-Distributor — iSupfactory',
      metaDescription:
        'Wie iSupfactory eine Touring-SUP-Linie für einen europäischen Outdoor-Distributor unterstützte — Plattform-Review, projektspezifisches Design, Zubehörkonfiguration und Einzelhandelsverpackung.',
      kicker: 'Touring-Projekt',
      h1: 'Entwicklung einer Touring-SUP-Linie für einen europäischen Outdoor-Distributor',
      intro: [
        'Ein individuelles Projekt für aufblasbare SUPs mit Plattform-Review, projektspezifischem Design, Zubehörkonfiguration, Einzelhandelsverpackung und Qualitätsplanung — von der Musterfreigabe bis zur Versandvorbereitung.',
      ],
      industry: 'Distributoren & Großhändler',
      requirement: 'Eine Touring-SUP-Linie mit projektspezifischem Design, Zubehörkonfiguration und Einzelhandelsverpackung, gesteuert von der Musterfreigabe bis zum Versand.',
      challenge:
        'Touring-Paddler erwarten Stabilität bei Tempo und ein vorhersehbares Gleitverhalten, daher mussten Plattform, Maße und Volumen vor der Produktion geprüft werden. Das Design musste Rails, EVA und Ventile berücksichtigen, und jedes Einzelhandelsset musste über die gesamte Linie vollständig ankommen.',
      solution:
        'Plattform- und Maßprüfung für die Touring-Performance, projektspezifisches Design abgestimmt auf die Board-Eigenschaften, eine Zubehörkonfiguration mit Paddel, Leash und Tasche, Planung der Einzelhandelsverpackung sowie kontrollierte Serienproduktion mit definierten Qualitätsprüfungen.',
      product: 'Aufblasbare Touring-SUP-Linie — Performance-Plattform mit individuellem Design, komplettem Zubehörset und handelsfertiger Verpackung.',
      process: [
        { title: 'Plattform-Review', body: 'Touring-Maße, Volumen und Rail-Profil auf Zielgruppe und Markt abgestimmt.' },
        { title: 'Spezifikation & Design', body: 'Technische Spezifikation, Designabstimmung und freigegebene Stückliste vorbereitet.' },
        { title: 'Musterfreigabe', body: 'Konstruktion, Design und Set an einem physischen Board bestätigt.' },
        { title: 'Produktion & Prüfung', body: 'Serienproduktion mit Qualitätsprüfungen, Verpackungsprüfung und Versandfreigabe.' },
      ],
      result:
        'Die Linie durchlief von der Musterfreigabe bis zur Versandvorbereitung eine kontrollierte Dokumentation von Produkt, Design, Stückliste und Verpackung — das freigegebene Muster diente als Referenz für Produktion und Endkontrolle.',
      outcome: 'Kontrollierter Weg vom Muster zur Produktion; Design und Verpackung vor der Produktion fixiert.',
      customizations: [
        'Touring-Plattform, Maße und Volumenkonfiguration',
        'Projektspezifisches Design für Deck, Unterseite und Rails',
        'EVA-Pad-Layout und Farbkonfiguration',
        'Finnen-System, Bungee-Layout und Zubehörset',
        'Gebrandete Tasche, Anleitungsversion und Einzelhandelsverpackung',
        'Kartonkennzeichnung und Barcode-Anforderungen für den Zielmarkt',
      ],
      inspectionFocus: [
        'Prüfung von Aufpumpen und Luftdichtheit',
        'Prüfung von Ventil, Rails und Nähten',
        'Designgenauigkeit gegenüber den freigegebenen Vorlagen',
        'Vollständigkeit von Zubehör und Ausstattung',
        'Prüfung von Einzelhandelsverpackung, Barcode und Kartonkennzeichnung',
      ],
      confidentiality:
        'Vereinbarungsgemäß werden der Name des Distributors und seine Kundenliste nicht veröffentlicht. Dieses Projekt wird anonym dargestellt, um die Vertraulichkeit geschäftlicher Informationen zu wahren.',
      tags: ['Touring-SUP-Linie', 'Individuelles Design', 'Einzelhandelsverpackung'],
    },
    {
      slug: 'fishing-sup-program',
      customerType: 'Outdoor-Einzelhändler',
      region: 'Nordamerika',
      productCategory: 'Aufblasbares Angler-SUP',
      projectStage: 'Konzeptprüfung → Musterfreigabe → Programmproduktion',
      manufacturingScope: 'Plattformkonfiguration, Zubehöranordnung, Verpackung und Produktion',
      keyRequirements: 'Integration von Angelzubehör, stabile Plattform, geordnetes Paket',
      qualityFocus: 'Luftdichtheit, Verankerung des Zubehörs, Designgenauigkeit, vollständiges Paket',
      navLabel: 'Angler-SUP-Programm',
      metaTitle: 'Angler-SUP-Entwicklung | Zubehöranordnung & Paket — iSupfactory',
      metaDescription:
        'Wie iSupfactory für einen Outdoor-Einzelhändler eine Angler-SUP-Konfiguration entwickelte — Zubehöranordnung, geordnetes Paket und handelsfertige Verpackung in einem kontrollierten Programm.',
      kicker: 'Angeln-Projekt',
      h1: 'Entwicklung eines Angler-SUPs für einen Outdoor-Einzelhändler — Zubehöranordnung und Paketkonfiguration',
      intro: [
        'Ein angel-spezifisches SUP-Projekt: eine stabile Plattform mit Zonen für Angelzubehör, ein geordnetes Paket und handelsfertige Verpackung — von der Konzeptprüfung bis zur Programmproduktion.',
      ],
      industry: 'Einzelhandels- & Outdoor-Marken',
      requirement: 'Eine Angler-SUP-Konfiguration mit verankertem Zubehör, geordnetem Paket und Einzelhandelsverpackung, von der Konzeptprüfung bis zur Programmproduktion.',
      challenge:
        'Angler-Boards brauchen verankertes Zubehör — Rutenhalter, D-Ringe und Kisten-Zonen — ohne Kompromisse bei der Stabilität. Das Paket musste an Bord geordnet bleiben, und die Verpackung musste die Kategorie im Einzelhandel klar präsentieren.',
      solution:
        'Eine breite, stabile Plattform mit definierten Zubehörzonen, D-Ringen und Bungee-Positionen für Angelausrüstung, ein geordnetes Paket mit Reparaturset sowie eine in einem einzigen kontrollierten Programm entwickelte Einzelhandelsverpackung.',
      product: 'Aufblasbares Angler-SUP — stabile Plattform mit Zonen für Angelzubehör, geordnetem Paket und handelsfertiger Verpackung.',
      process: [
        { title: 'Konzeptprüfung', body: 'Verwendungszweck, mitgeführtes Equipment und Paketstruktur definierten die Konfiguration.' },
        { title: 'Zubehöranordnung', body: 'D-Ringe, Bungees und Stauzonen auf dem Deck positioniert.' },
        { title: 'Musterfreigabe', body: 'Stabilität und Verankerung des Zubehörs an einem physischen Board verifiziert.' },
        { title: 'Programmproduktion', body: 'Definierte Qualitätsprüfungen, Paketprüfung und Versandfreigabe.' },
      ],
      result:
        'Die Konfiguration wurde am freigegebenen Muster bestätigt — Verankerung des Zubehörs, Paketstruktur und Verpackung vor der Produktion ausgerichtet — und das Programm wurde mit verifizierten Sets versandt.',
      outcome: 'Zubehöranordnung und Paket im Musterstadium fixiert; verifizierte Sets versandt.',
      customizations: [
        'Stabile, breite Plattform mit Zonen für Angelzubehör',
        'Positionierung von Rutenhalter, D-Ring und Bungee',
        'Deck-Layout für Kisten und Tackle-Ablage',
        'Auswahl von Paddel, Finnen und Leash für den Angeleinsatz',
        'Geordnetes Zubehörpaket und Reparaturset',
        'Einzelhandelsverpackung für die Angler-SUP-Kategorie',
        'Barcode und Kartonkennzeichnung für den Zielmarkt',
      ],
      inspectionFocus: [
        'Prüfung der Verankerung des Zubehörs und der D-Ring-Platzierung',
        'Prüfung von Aufpumpen und Luftdichtheit',
        'Genauigkeit von Design und Deck-Layout',
        'Vollständigkeit des Pakets und Zubehörkonfiguration',
        'Prüfung von Einzelhandelsverpackung und Kartonkennzeichnung',
      ],
      confidentiality:
        'Vereinbarungsgemäß werden der Name des Einzelhändlers und die Vertriebsdetails nicht veröffentlicht. Dieses Projekt wird anonym dargestellt, um die Vertraulichkeit geschäftlicher Informationen zu wahren.',
      tags: ['Angler-Konfiguration', 'Zubehöranordnung', 'Paketorganisation'],
    },
    {
      slug: 'yoga-sup-program',
      customerType: 'Wassersportschulen & -programme',
      region: 'Europa',
      productCategory: 'Aufblasbares Yoga-SUP',
      projectStage: 'Programmprüfung → Musterfreigabe → Flottenlieferung',
      manufacturingScope: 'Konfiguration der stabilen Plattform, Deck-Abdeckung, Produktion und Programmverpackung',
      keyRequirements: 'Stabilität für Gruppenpraxis, vollständige EVA-Deckabdeckung, konsistente Flotte',
      qualityFocus: 'Deckabdeckung, Luftdichtheit, Designgenauigkeit, vollständige Ausstattung',
      navLabel: 'Yoga-SUP-Programm',
      metaTitle: 'Yoga-SUP-Entwicklung | Trainingsprogramm — iSupfactory',
      metaDescription:
        'Wie iSupfactory für ein Wassersport-Trainingsprogramm eine stabile Yoga-SUP-Konfiguration entwickelte — vollständige Deckabdeckung und eine konsistente Programmflotte.',
      kicker: 'Yoga-Projekt',
      h1: 'Entwicklung einer stabilen Yoga-SUP-Konfiguration für ein Wassersport-Trainingsprogramm',
      intro: [
        'Eine Yoga-SUP-Konfiguration für ein Trainingsprogramm: eine breite, voluminöse Plattform mit vollständiger EVA-Deckabdeckung, produziert als konsistente Flotte für die Gruppenpraxis.',
      ],
      industry: 'Bildung & Jugendprogramme',
      requirement: 'Eine stabile Yoga-SUP-Konfiguration mit vollständiger Deckabdeckung für die Gruppenpraxis, in Programm-Mengen.',
      challenge:
        'Yoga-Praxis erfordert eine breite, voluminöse Plattform, die im Wasser absolut stabil bleibt. Gruppen brauchen konsistente Boards, und Übungsleiter brauchen klare Anleitungen sowie gut handhabbare Lagerung zwischen den Einheiten.',
      solution:
        'Eine breite, voluminöse Plattform mit vollständiger EVA-Deckabdeckung, eine konsistente Flottenkonfiguration über das gesamte Programm sowie Übungsleiter-Anleitung und Programmbeschriftung.',
      product: 'Aufblasbares Yoga-SUP — stabile Plattform mit vollständiger Deckpad-Abdeckung und konsistenter Programmflotte.',
      process: [
        { title: 'Programmprüfung', body: 'Übungsstil, Gruppengröße und Lagerung definierten die Konfiguration.' },
        { title: 'Konfiguration', body: 'Plattform, Deckabdeckung und Ausführung über die gesamte Flotte festgelegt.' },
        { title: 'Musterfreigabe', body: 'Stabilität und Deckabdeckung an einem physischen Board verifiziert.' },
        { title: 'Flottenlieferung', body: 'Programm-Mengen mit Prüfung von Set und Verpackung produziert.' },
      ],
      result:
        'Die Flotte wurde als eine konsistente Konfiguration versandt — jedes Board in Stabilität, Deckabdeckung und Ausführung passend zum freigegebenen Muster — inklusive Anleitung für die Übungsleiter.',
      outcome: 'Konsistente Flotte passend zum freigegebenen Muster; Programmverpackung verifiziert.',
      customizations: [
        'Breite, voluminöse Plattform für Stabilität im Stehen',
        'Vollständige EVA-Deckabdeckung über die nutzbare Fläche',
        'Deck-Layout und Riemenpositionierung für die Praxis',
        'Konsistente Farbe und Ausführung über die gesamte Flotte',
        'Übungsleiter-Anleitung und Programmbeschriftung',
        'Konfiguration von Lagerung und Programmverpackung',
      ],
      inspectionFocus: [
        'Prüfung der Deckabdeckung und der EVA-Haftung',
        'Prüfung von Aufpumpen und Luftdichtheit',
        'Stabilitätsprüfung am freigegebenen Muster',
        'Konsistenz von Design und Ausführung über die Serie',
        'Vollständigkeit der Ausstattung und Prüfung der Programmverpackung',
      ],
      confidentiality:
        'Vereinbarungsgemäß werden der Programmname und der Standort nicht veröffentlicht. Dieses Projekt wird anonym dargestellt, um die Vertraulichkeit geschäftlicher Informationen zu wahren.',
      tags: ['Yoga-Konfiguration', 'Vollständige Deckabdeckung', 'Programmflotte'],
    },
  ],
  it: [
    {
      slug: 'coastal-rental-fleet',
      customerType: 'Operatori di flotte di noleggio',
      region: 'Mediterraneo — Spagna, Italia, Grecia',
      productCategory: 'SUP gonfiabile per noleggio (10′6″ + 11′0″)',
      projectStage: 'Valutazione della flotta → Approvazione del campione → Consegna scaglionata in 3 lotti',
      manufacturingScope: 'Specifica della flotta, costruzione rinforzata, produzione scaglionata, fornitura di ricambi',
      keyRequirements: 'Tavole da noleggio durevoli, consegna scaglionata a tutte le stazioni, minore tasso di sostituzioni anticipate',
      qualityFocus: "Costruzione rinforzata, tenuta all’aria, grafiche di flotta, dotazione completa",
      navLabel: 'Flotta di noleggio costiera',
      metaTitle: 'Flotta di noleggio costiera | 320 tavole in 120 giorni — iSupfactory',
      metaDescription:
        'Come un operatore di noleggio nel Mediterraneo ha allestito una flotta costiera di 320 tavole tra Spagna, Italia e Grecia — tre lotti scaglionati in 120 giorni e una riduzione stimata delle sostituzioni anticipate del 20–25 %.',
      kicker: 'Progetto di noleggio costiero',
      h1: 'Come un operatore di noleggio nel Mediterraneo ha allestito una flotta costiera di 320 tavole in 120 giorni',
      intro: [
        "Un operatore di noleggio con stazioni in Spagna, Italia e Grecia aveva bisogno di una flotta durevole per l’estate ad alta rotazione — consegnata in tre lotti, in tempo per l’apertura di ogni stazione.",
      ],
      industry: 'Operatori di flotte di noleggio',
      requirement: '320 tavole da noleggio in due misure — 10′6″ e 11′0″ — per stazioni costiere in tre Paesi, consegnate in tre lotti scaglionati entro 120 giorni.',
      challenge:
        "La rotazione quotidiana del noleggio usura rapidamente le tavole e il tasso di sostituzioni anticipate dell’operatore si attestava al 20–25 %. Le stazioni aprivano in tre Paesi in date diverse: una consegna unica non era un’opzione, né lo era una flotta di un’unica misura.",
      solution:
        "Due piattaforme da noleggio durevoli nelle misure che coprono la maggior parte dei noleggi, una costruzione rinforzata per l’uso intensivo e tre lotti di produzione programmati in tempo per l’apertura di ogni stazione — con kit di ricambi e guida alla riparazione per stazione.",
      product: 'SUP gonfiabile per noleggio — piattaforme da 10′6″ e 11′0″ con rail rinforzati e materiali resistenti ai raggi UV, kit per stazione.',
      process: [
        { title: 'Valutazione della flotta', body: 'Le date di apertura e i volumi di rotazione hanno definito le due misure e la ripartizione dei lotti.' },
        { title: 'Selezione delle tavole', body: 'Piattaforme da noleggio da 10′6″ e 11′0″ scelte per la copertura dei noleggi e la durabilità.' },
        { title: 'Produzione scaglionata', body: 'Tre lotti sincronizzati con la data di apertura di ogni stazione.' },
        { title: 'Consegna e supporto', body: 'Flotta spedita per lotto con kit di ricambi e guida alla riparazione per stazione.' },
      ],
      result:
        "Tutti e tre i lotti sono arrivati entro 120 giorni, in sincronia con l’apertura di ogni stazione. Le piattaforme rinforzate dovrebbero ridurre il tasso di sostituzioni anticipate di circa il 20–25 % e i kit di ricambi coprono le riparazioni sul campo tra una stagione e l’altra.",
      outcome: '320 tavole · 120 giorni · 3 lotti · ca. −20–25 % di sostituzioni anticipate.',
      metrics: [
        { value: '320', label: 'tavole in due misure' },
        { value: '120', label: "giorni dall’ordine all’ultimo lotto" },
        { value: '3', label: 'consegne scaglionate, una per apertura di stazione' },
        { value: '−20–25%', label: 'tasso di sostituzioni anticipate stimato' },
      ],
      takeaways: [
        "I lotti scaglionati portano la flotta esattamente all’apertura di ogni stazione — nessun inventario inattivo, nessun avvio tardivo.",
        'Due misure (10′6″ e 11′0″) hanno coperto la maggior parte dei noleggi senza frammentare la flotta.',
        'Per abbassare il tasso di sostituzioni anticipate è decisiva la costruzione rinforzata — non solo il prezzo.',
        "I kit di ricambi per stazione hanno mantenuto le tavole operative tra una stagione e l’altra.",
      ],
      customizations: [
        'Piattaforme da noleggio da 10′6″ e 11′0″ calibrate sui profili dei noleggi',
        "Rail rinforzati e materiali resistenti ai raggi UV per l’uso intensivo del noleggio",
        'Grafiche di flotta e numerazione per stazione',
        'Piano di produzione in tre lotti sincronizzato con le aperture delle stazioni',
        'Kit di ricambi e guida alla riparazione per stazione',
        'Imballaggio per sedi separate e verifica della consegna per lotto',
      ],
      inspectionFocus: [
        'Verifica della costruzione rinforzata per tavola',
        "Gonfiaggio e tenuta all’aria su ogni tavola",
        'Accuratezza delle grafiche di flotta e della numerazione delle stazioni',
        'Completezza di accessori e kit di ricambi per stazione',
        "Controlli dell’imballaggio per spedizioni a sedi separate in più lotti",
      ],
      confidentiality:
        "Per accordo, il nome dell’operatore e le ubicazioni delle stazioni non vengono divulgati. Questo progetto è presentato in forma anonima per tutelare la riservatezza commerciale.",
      tags: ['Consegna scaglionata della flotta', 'Costruzione di qualità da noleggio', 'Tasso di sostituzione ridotto'],
    },
    {
      slug: 'eu-distributor-private-label',
      customerType: 'Distributori e grossisti',
      region: 'Europa',
      productCategory: 'SUP gonfiabile a marchio privato (2 SKU)',
      projectStage: 'Pianificazione della gamma → Approvazione del campione → Consegna in volume in 90 giorni',
      manufacturingScope: 'Branding a marchio privato, imballaggio retail, produzione in serie, supporto per i riordini',
      keyRequirements: 'Due SKU collaudate sul mercato sotto il marchio del distributore, imballaggio retail UE, allineamento con le date di stagione',
      qualityFocus: "Accuratezza delle grafiche, codice a barre ed etichetta per mercato, dotazione completa, tenuta all’aria",
      navLabel: 'Marchio privato per distributori',
      metaTitle: 'Marchio privato per distributore UE | 1,200 tavole in 90 giorni — iSupfactory',
      metaDescription:
        'Come un distributore europeo ha lanciato in 90 giorni una linea SUP a marchio privato con 1,200 tavole — due SKU, imballaggio retail UE e un riordino nel Q4 sulla stessa specifica bloccata.',
      kicker: 'Progetto a marchio privato',
      h1: 'Come un distributore europeo ha lanciato una linea SUP a marchio privato con 1,200 tavole in 90 giorni',
      intro: [
        "Un distributore europeo voleva una propria linea SUP sugli scaffali per la stagione estiva — due SKU collaudate sul mercato, imballaggio retail completo e nessun rapporto diretto con i produttori.",
      ],
      industry: 'Distributori e grossisti',
      requirement: '1,200 tavole brandizzate in due SKU — 10′6″ Allround e 12′6″ Touring — con imballaggio retail UE, consegnate in 90 giorni.',
      challenge:
        "La finestra di vendita estiva è fissa: tutte le 1,200 tavole con il relativo imballaggio dovevano arrivare in tempo. L’imballaggio a marchio privato — codici a barre, etichette, manuali — doveva rispettare i requisiti del retail UE e il distributore non poteva contare su alcuna esperienza con fabbriche di SUP.",
      solution:
        "Due piattaforme collaudate sul mercato per la gamma retail, l’intero design a marchio privato e l’imballaggio retail UE gestiti in un unico programma e una pianificazione della produzione che consenta la spedizione congiunta di entrambe le SKU entro la finestra dei 90 giorni — con specifica bloccata per un riordino pulito.",
      product: 'SUP gonfiabile a marchio privato — 10′6″ Allround e 12′6″ Touring, con pagaia, pompa, zaino e cartoni retail stampati brandizzati.',
      process: [
        { title: 'Pianificazione della gamma', body: 'Selezionate due SKU — 10′6″ Allround e 12′6″ Touring — per la copertura nel retail.' },
        { title: 'Approvazione del campione', body: 'Grafiche, imballaggio e finiture confermati su tavole fisiche.' },
        { title: 'Produzione in 90 giorni', body: 'Produzione in volumi pianificata per spedire congiuntamente entrambe le SKU per la finestra di stagione.' },
        { title: 'Riordino nel Q4', body: 'Riordino effettuato sulla stessa specifica bloccata.' },
      ],
      result:
        "Tutte le 1,200 tavole con imballaggio retail completo sono state spedite entro 90 giorni, in tempo per la finestra di vendita estiva. La linea ha venduto l’intero stock e il distributore è tornato nel Q4 con un riordino sulla stessa specifica bloccata.",
      outcome: '1,200 tavole · 90 giorni · 2 SKU · riordino nel Q4.',
      metrics: [
        { value: '1,200', label: 'tavole in un unico lancio' },
        { value: '90', label: 'giorni alla consegna completa' },
        { value: '2', label: 'SKU retail, entrambe in tempo per la finestra' },
        { value: 'Q4', label: 'riordino sulla stessa specifica' },
      ],
      takeaways: [
        'Partire con due SKU collaudate mantiene basso il rischio di magazzino e riempie comunque la gamma retail.',
        'Un unico programma per tavole, accessori e imballaggio elimina una causa frequente di errore nei lanci.',
        'Una data di stagione fissa determina il calendario — la pianificazione della produzione deve trattarla come non negoziabile.',
        'Bloccare la specifica al lancio rende i riordini puliti e coerenti.',
      ],
      customizations: [
        'Piattaforme Allround da 10′6″ e piattaforme Touring da 12′6″ per la gamma retail',
        'Design a marchio privato per deck, fondo e imballaggio',
        'Pagaia, pompa e zaino brandizzati per SKU',
        "Cartoni retail stampati, codici a barre, etichette e manuale d’uso per il retail UE",
        'Distinta base e specifica bloccate per riordini coerenti',
        'Consegna scaglionata sincronizzata con la finestra di lancio nel retail',
      ],
      inspectionFocus: [
        'Accuratezza delle grafiche rispetto ai file a marchio privato approvati',
        'Verifica di codice a barre, etichetta e manuale per mercato',
        'Dotazione completa per SKU su tutta la serie di 1,200 tavole',
        "Verifiche a campione della tenuta all’aria durante la produzione",
        'Verifica di cartone e imballaggio per SKU',
      ],
      confidentiality:
        "Per accordo, il nome del distributore e i suoi clienti retail non vengono divulgati. Questo progetto è presentato in forma anonima per tutelare la riservatezza commerciale.",
      tags: ['Marchio privato', 'Gamma retail di 2 SKU', 'Consegna nella finestra di stagione'],
    },
    {
      slug: 'resort-sup-fleet',
      customerType: 'Resort e strutture alberghiere',
      region: 'Europa / Nordamerica',
      productCategory: 'SUP gonfiabile Allround',
      projectStage: 'Approvazione del campione → Produzione in serie → Aggiornamento della flotta',
      manufacturingScope: 'Grafiche, accessori, imballaggio e produzione della flotta',
      keyRequirements: 'Durabilità per il noleggio, stoccaggio compatto, branding completo della struttura',
      qualityFocus: "Tenuta all’aria, accuratezza delle grafiche, accessori completi, marcatura dei cartoni",
      navLabel: 'Flotta SUP per un resort di lusso',
      metaTitle: 'Flotta SUP per un resort di lusso | 100 tavole brandizzate — iSupfactory',
      metaDescription:
        'Come un resort di lusso ha dotato il proprio programma balneare di 100 tavole SUP brandizzate — design personalizzato, costruzione di qualità da noleggio e gestione stagionale della flotta.',
      kicker: 'Progetto resort',
      h1: 'Come un resort di lusso ha standardizzato una flotta SUP brandizzata con 100 tavole',
      intro: [
        "Un resort di lusso voleva che il proprio programma balneare si integrasse con la struttura — tavole brandizzate nei colori del resort, abbastanza robuste per l’uso quotidiano degli ospiti e facili da stoccare tra una stagione e l’altra.",
      ],
      industry: 'Resort e strutture alberghiere',
      requirement: '100 tavole SUP brandizzate per il noleggio agli ospiti, nei colori della struttura.',
      challenge:
        "Il noleggio quotidiano usura rapidamente le flotte standard e lo spazio di stoccaggio fuori stagione è limitato. Il resort aveva bisogno di tavole in grado di resistere all’uso intensivo, stoccabili in poco spazio e con il branding completo della struttura.",
      solution:
        "Costruzione gonfiabile di qualità da noleggio con rail rinforzati e materiali resistenti ai raggi UV, grafiche a tutta superficie nei colori del resort e pagaie e pompe brandizzate incluse nel pacchetto flotta.",
      product: "SUP gonfiabile personalizzato — piattaforma Allround da 11′ con design del deck brandizzato e accessori.",
      process: [
        { title: 'Consulenza sulla flotta', body: 'Afflusso degli ospiti, zona costiera e durata della stagione hanno definito dimensione e mix della flotta.' },
        { title: 'Campione brandizzato', body: 'Colori e logo approvati su una tavola fisica prima della produzione.' },
        { title: 'Produzione e controllo qualità', body: '100 tavole prodotte con controllo qualità a più punti su tutta la serie.' },
        { title: 'Consegna e aggiornamento', body: 'Consegna stagionale, ricambi e un programma di aggiornamento per le stagioni successive.' },
      ],
      result:
        "La flotta è partita in tempo per la stagione, le tavole si stoccano fuori stagione in un’unica stanza e il feedback degli ospiti sulle attrezzature brandizzate ha portato a un ampliamento della flotta l’anno successivo.",
      outcome: 'Avvio di stagione puntuale, flotta brandizzata al 100%, ampliamento nella stagione successiva.',
      customizations: [
        'Piattaforma, misura e costruzione delle tavole selezionate per il noleggio quotidiano',
        'Design a tutta superficie del deck nei colori della struttura',
        'Branding sui rail e posizionamento del logo approvati su un campione fisico',
        'Pagaia, pompa e set di accessori brandizzati per ogni tavola',
        'Numerazione della flotta e codifica a colori su tutta la serie',
        "Configurazione di stoccaggio compatto e ambito dell’aggiornamento stagionale",
      ],
      inspectionFocus: [
        "Gonfiaggio e tenuta all’aria su ogni tavola",
        'Stato della valvola e dei rail rinforzati',
        'Accuratezza delle grafiche e corrispondenza cromatica rispetto al campione approvato',
        'Completezza di accessori e dotazione per tavola',
        'Marcatura dei cartoni ed etichette di flotta prima del rilascio della spedizione',
      ],
      confidentiality:
        "Per accordo, il nome del resort e i suoi asset di marca non vengono divulgati. Questo progetto è presentato in forma anonima per tutelare la riservatezza commerciale.",
      tags: ['Flotta brandizzata per gli ospiti', 'Costruzione di qualità da noleggio', 'Aggiornamento stagionale'],
    },
    {
      slug: 'private-label-launch',
      customerType: 'Marchi retail e outdoor',
      region: 'Europa',
      productCategory: 'SUP gonfiabile Allround (a marchio privato)',
      projectStage: 'Approvazione del campione → Serie di validazione → Scalabilità',
      manufacturingScope: 'Design di prodotto e imballaggio, campionatura, produzione, mantenimento degli stampi',
      keyRequirements: 'Linea vendibile senza design o produzione SUP interni',
      qualityFocus: "Controllo delle versioni delle grafiche, accuratezza dell’imballaggio, dotazione completa",
      navLabel: 'Lancio del marchio private label',
      metaTitle: 'Lancio SUP private label | Estensione di marca — iSupfactory',
      metaDescription:
        'Come un marchio outdoor esistente si è espanso nel business SUP con una linea di prodotto a marchio privato — dal logo al primo container, con MOQ scalabile.',
      kicker: 'Progetto private label',
      h1: 'Come un marchio outdoor ha lanciato una linea SUP a marchio privato, dal logo al primo container',
      intro: [
        'Un rivenditore sportivo con una marca affermata voleva espandersi negli sport di pagaiata senza rapporti diretti con i produttori — una linea SUP vendibile a proprio nome.',
      ],
      industry: 'Marchi retail e outdoor',
      requirement: 'Una linea SUP a marchio privato — logo, colori e imballaggio su piattaforme collaudate, con una prima serie da 50 pezzi.',
      challenge:
        'Nessun team di design SUP interno, nessuna esperienza produttiva e un primo ordine abbastanza piccolo per testare il mercato prima di scalare.',
      solution:
        'Design completo di prodotto e imballaggio basato sugli asset della marca, una serie di validazione da 50 pezzi e successiva scalatura sulle stesse piattaforme verificate — gli stampi restano alla marca.',
      product: 'SUP gonfiabile a marchio privato — deck brandizzato, pagaia, pompa, zaino e cartoni stampati.',
      process: [
        { title: 'Acquisizione della marca', body: 'Logo, colori e linee guida di marca trasformati in design di tavole e imballaggio.' },
        { title: 'Approvazione del campione', body: 'Il campione fisico ha confermato finiture, colori e imballaggio.' },
        { title: 'Serie di validazione', body: 'Prima serie da 50 pezzi venduta completamente prima della scalatura.' },
        { title: 'Scalabilità', body: 'Produzione in quantità da container con qualità costante; design di proprietà della marca.' },
      ],
      result:
        'La linea ha venduto la propria serie di validazione entro una stagione ed è scalata agli ordini da container — la marca possiede tutti i design e gli stampi.',
      outcome: 'Validata in una stagione, scalata agli ordini da container.',
      customizations: [
        'Piattaforme, misure e colori delle tavole allineati alla linea della marca',
        'Design di deck, fondo e imballaggio basati sugli asset della marca',
        'Pagaia, pompa, zaino e set di accessori brandizzati',
        'Cartoni retail stampati e impaginazione delle etichette',
        "Codice a barre e versione del manuale d’uso per il mercato di riferimento",
        'Proprietà di stampi e design mantenuta dalla marca',
      ],
      inspectionFocus: [
        'Corrispondenza della versione delle grafiche con i file approvati',
        'Accuratezza di colori e finiture sul campione fisico',
        'Verifica di imballaggio, codice a barre e manuale',
        'Dotazione completa su tutta la serie di validazione',
        "Verifiche a campione della tenuta all’aria durante la produzione",
      ],
      confidentiality:
        "Per accordo, il nome della marca e i dettagli commerciali non vengono divulgati. Questo progetto è presentato in forma anonima per tutelare la riservatezza commerciale.",
      tags: ['Estensione di marca', "Design dell’imballaggio", 'MOQ scalabile'],
    },
    {
      slug: 'club-team-boards',
      customerType: 'Club e squadre di paddle',
      region: 'Nordamerica',
      productCategory: 'SUP gonfiabile da allenamento',
      projectStage: "Approvazione del campione → Produzione della flotta → Riordino per l’ampliamento",
      manufacturingScope: 'Branding del club, produzione della flotta, supporto ricambi',
      keyRequirements: 'Look di squadra uniforme, budget limitato, ampliamento futuro identico',
      qualityFocus: "Accuratezza delle grafiche, tenuta all’aria, dotazione completa, riordini coerenti",
      navLabel: 'Tavole di squadra per il club',
      metaTitle: 'Tavole SUP di squadra per club | Rinnovamento della flotta brandizzato — iSupfactory',
      metaDescription:
        'Come un club di paddle ha rinnovato e aggiornato la propria flotta con 25 tavole da allenamento brandizzate — grafiche di squadra, supporto ricambi e riordini coerenti.',
      kicker: 'Progetto club',
      h1: 'Come un club di paddle ha rinnovato il brand di una flotta da allenamento con 25 tavole',
      intro: [
        'Un club di paddle ha rilanciato la propria marca e aveva bisogno di attrezzature coerenti — una flotta di squadra uniforme per allenamenti e regate, senza stock eterogenei.',
      ],
      industry: 'Club e squadre di paddle',
      requirement: '25 tavole da allenamento brandizzate con nome, colori e logo del club, oltre a ricambi.',
      challenge:
        "La flotta esistente era disomogenea e senza brand; il budget era limitato e per l’ampliamento futuro servivano stock identici e coerenti.",
      solution:
        'Branding del club su ogni tavola, condizioni di flotta per il volume e ricambi con guide alla riparazione per prolungare la vita delle tavole.',
      product: 'SUP di squadra personalizzato — forma da allenamento con grafiche del club, pinne di ricambio e kit di riparazione.',
      process: [
        { title: 'Acquisizione del club', body: 'Numero di membri, tipi di allenamento e attrezzature attuali verificati.' },
        { title: 'Selezione delle tavole', body: 'Forme da allenamento e da principianti calibrate sul programma del club.' },
        { title: 'Branding', body: 'Nome, colori e logo del club applicati su tutta la flotta.' },
        { title: 'Consegna e crescita', body: "Flotta consegnata con i ricambi; riordino identico per l’ampliamento." },
      ],
      result:
        "I membri si allenano con attrezzature brandizzate coerenti e il club ha ampliato la flotta nella stagione successiva con un riordino identico e della stessa qualità.",
      outcome: 'Flotta uniforme, riordino di ampliamento identico.',
      customizations: [
        'Piattaforme da allenamento e da principianti calibrate sul programma del club',
        'Nome, colori e logo del club su tutta la flotta',
        'Numerazione delle tavole e raggruppamento per misura in base al gruppo di allenamento',
        'Pinne di ricambio e kit di riparazione come accessori di flotta',
        'Specifica di riordino bloccata per un ampliamento futuro identico',
      ],
      inspectionFocus: [
        'Accuratezza delle grafiche di nome, colori e logo del club',
        "Verifica di gonfiaggio e tenuta all’aria",
        'Completezza di accessori e kit di riparazione',
        'Coerenza cromatica su tutta la serie di 25 tavole',
      ],
      confidentiality:
        "Per accordo, il nome del club e la sua ubicazione non vengono divulgati. Questo progetto è presentato in forma anonima per tutelare la riservatezza commerciale.",
      tags: ['Branding del club', 'Condizioni di flotta', 'Supporto ricambi'],
    },
    {
      slug: 'school-program-fleet',
      customerType: 'Istruzione e programmi giovanili',
      region: 'Europa',
      productCategory: 'SUP gonfiabile per principianti e multi-posto',
      projectStage: 'Revisione del programma → Approvazione del campione → Consegna della flotta',
      manufacturingScope: 'Design del pacchetto, produzione, ricambi e supporto al rinnovo',
      keyRequirements: 'Attrezzature orientate alla sicurezza, quantità per dimensioni di classe, gestione con personale limitato',
      qualityFocus: "Stabilità, tenuta all’aria, accessori completi, guida per l’utente",
      navLabel: 'Flotta per programmi scolastici',
      metaTitle: 'Programma SUP per scuole | Flotta per principianti — iSupfactory',
      metaDescription:
        "Come una scuola ha avviato un corso opzionale di paddle sport con una flotta di 15 tavole per principianti e tavole multi-posto — attrezzature orientate alla sicurezza per l’insegnamento.",
      kicker: 'Progetto scolastico',
      h1: "Come una scuola ha allestito una flotta per principianti con 15 tavole per l’insegnamento del paddle sport",
      intro: [
        'Una scuola che avviava un corso opzionale di paddle sport aveva bisogno di attrezzature stabili e sicure per i principianti, dimensionate sulle classi e facili da gestire con un personale limitato.',
      ],
      industry: 'Istruzione e programmi giovanili',
      requirement: 'Una flotta per principianti adatta alle dimensioni delle classi, incluse tavole multi-posto per le prime lezioni.',
      challenge:
        'Livelli di abilità misti, requisiti di sicurezza severi, cicli di acquisto scolastici e un budget che deve coprire anche le future coorti.',
      solution:
        "Tavole per principianti larghe e di grande volume e tavole multi-posto, condizioni di programma allineate alle dimensioni delle classi e una guida per l’utente chiara per gli istruttori.",
      product: 'Flotta di SUP per principianti — piattaforme stabili con costruzione rinforzata per una lunga durata del programma.',
      process: [
        { title: 'Revisione del programma', body: 'Dimensioni delle classi, area acquatica e organizzazione degli istruttori hanno definito il pacchetto.' },
        { title: 'Costruzione del pacchetto', body: "Tipi e quantità di tavole calibrati sull’insegnamento." },
        { title: 'Approvazione del campione', body: 'Stabilità e costruzione verificate su una tavola fisica.' },
        { title: 'Consegna e rinnovo', body: 'Fornitura in volumi, ricambi e riordini per le nuove coorti.' },
      ],
      result:
        "Gli istruttori hanno segnalato progressi più rapidi nella prima lezione sulle piattaforme stabili e il programma ha rinnovato le attrezzature l’anno successivo con un riordino corrispondente.",
      outcome: "Curva di apprendimento più rapida, attrezzature rinnovate l’anno successivo.",
      customizations: [
        'Piattaforme per principianti larghe e di grande volume per le prime lezioni',
        'Tavole multi-posto per lezioni di gruppo',
        'Misura e quantità delle tavole calibrate sulle dimensioni delle classi',
        "Guida per l’utente chiara ed etichette didattiche",
        'Costruzione rinforzata per una lunga durata del programma',
        'Specifica per la fornitura in volumi e i riordini di rinnovo',
      ],
      inspectionFocus: [
        'Verifica di stabilità e configurazione del deck',
        "Gonfiaggio e tenuta all’aria su ogni tavola",
        'Accessori completi per tavola e kit di classe',
        "Accuratezza di guida per l’utente ed etichette",
        'Marcatura dei cartoni e controlli del kit di classe',
      ],
      confidentiality:
        "Per accordo, il nome della scuola e la regione non vengono divulgati. Questo progetto è presentato in forma anonima per tutelare la riservatezza commerciale.",
      tags: ['Flotta per principianti', 'Avvio del programma', 'Ordini di rinnovo'],
    },
    {
      slug: 'distributor-line-expansion',
      customerType: 'Distributori e grossisti',
      region: 'Due regioni di esportazione',
      productCategory: 'SUP gonfiabile di fascia media (6 SKU)',
      projectStage: 'Pianificazione della gamma → Approvazione del campione → Fornitura a più mercati',
      manufacturingScope: 'Tavole, accessori e imballaggio retail in un unico programma',
      keyRequirements: 'Un unico responsabile della qualità, branding coerente, scorte ridotte per SKU',
      qualityFocus: "Tenuta all’aria, accuratezza delle grafiche, accuratezza di codici a barre ed etichette, rispondenza con la distinta base",
      navLabel: 'Ampliamento della gamma per distributori',
      metaTitle: 'Ampliamento della gamma SUP per distributori | Programma da 6 SKU — iSupfactory',
      metaDescription:
        'Come un distributore di sport acquatici ha costruito una linea SUP completa di fascia media con sei SKU — una fabbrica, un programma, esportata in più mercati.',
      kicker: 'Progetto distributore',
      h1: 'Come un distributore ha lanciato una linea SUP da 6 SKU in due mercati',
      intro: [
        'Un distributore di sport acquatici con kayak e accessori a catalogo voleva una propria linea di SUP gonfiabili — senza frammentare la fornitura di tavole, pagaie e pompe tra più fabbriche.',
      ],
      industry: 'Distributori e grossisti',
      requirement: 'Una linea SUP di fascia media da 6 SKU (da 10′6″ a 12′6″ più set di accessori) con esportazione in due regioni.',
      challenge:
        'Fabbriche separate per tavole, pagaie e pompe significavano branding incoerente, tre punti di fornitura distinti e nessun responsabile unico della qualità per i casi di garanzia.',
      solution:
        'Un unico programma per tavole, accessori e imballaggio retail; set di accessori condivisi per ridurre le scorte per SKU; e opzioni di fornitura calibrate sulla struttura di ogni mercato.',
      product: 'Sei SKU retail brandizzate — piattaforme SUP gonfiabili con set completi, imballati in scomparti, in cartoni stampati.',
      process: [
        { title: 'Pianificazione della gamma', body: 'Gap di mercato e posizionamenti di prezzo hanno definito le sei SKU e i contenuti dei bundle.' },
        { title: 'Branding unificato', body: 'Un unico sistema di design applicato a tavole, pagaie, pompe e cartoni.' },
        { title: 'Condizioni di programma', body: "Prezzi in volume sull’intero programma, non per singola SKU." },
        { title: 'Fornitura per mercati', body: 'Condizioni di esportazione standard per la regione principale, condizioni full-service per il secondo mercato.' },
      ],
      result:
        'La linea è stata lanciata in entrambi i mercati in una sola stagione; i set di accessori condivisi hanno ridotto le scorte e i casi di garanzia sono stati risolti tramite un unico referente in fabbrica.',
      outcome: 'Lancio multi-mercato in una stagione, scorte ridotte, un unico referente per la garanzia.',
      customizations: [
        'Sei SKU da 10′6″ a 12′6″ più bundle di accessori',
        'Un unico sistema di design per tavole, pagaie, pompe e cartoni',
        'Set di accessori condivisi per ridurre le scorte per SKU',
        'Set completi imballati in scomparti in cartoni retail stampati',
        'Versioni di codice a barre, etichetta e manuale per ogni mercato di riferimento',
        'Condizioni di fornitura e imballaggio calibrati su ogni mercato',
      ],
      inspectionFocus: [
        'Rispondenza con la distinta base per configurazione SKU',
        'Accuratezza di design e branding sulle sei SKU',
        'Accuratezza di codici a barre ed etichette per mercato',
        "Completezza dei set di accessori e dell’imballaggio in scomparti",
        "Verifica della tenuta all’aria su tutta la serie",
      ],
      confidentiality:
        "Per accordo, il nome del distributore e il suo elenco clienti non vengono divulgati. Questo progetto è presentato in forma anonima per tutelare la riservatezza commerciale.",
      tags: ['Programma multi-SKU', 'Set retail completi'],
    },
    {
      slug: 'startup-brand-zero-to-one',
      customerType: 'Marchi SUP startup',
      region: 'Nordamerica',
      productCategory: 'SUP gonfiabile ODM Allround',
      projectStage: 'Concept → Produzione di prova → Ordine di lancio',
      manufacturingScope: 'Sviluppo ODM, grafiche, imballaggio, produzione',
      keyRequirements: 'Prima serie con MOQ bassa, allineamento con la data di lancio, stampi mantenuti dalla marca',
      qualityFocus: "Tenuta all’aria, accuratezza delle grafiche, verifica dell’imballaggio",
      navLabel: 'Lancio startup 0→1',
      metaTitle: 'Lancio di una marca SUP startup | Dal concept alla prima serie — iSupfactory',
      metaDescription:
        'Come una startup SUP è passata dal concept a una prima serie esaurita — sviluppo ODM, una produzione di prova da 10 pezzi e poi un ordine di lancio brandizzato da 200 pezzi.',
      kicker: 'Progetto startup',
      h1: 'Dal concept a un lancio esaurito con 200 tavole per una marca SUP startup',
      intro: [
        'Due fondatori con grande visibilità ma senza fabbrica volevano vendere il proprio SUP — una tavola ODM sviluppata secondo la loro specifica, con un ordine di lancio che non li mettesse in difficoltà.',
      ],
      industry: 'Marchi SUP startup',
      requirement: 'Sviluppo ODM con MOQ bassa: produzione di prova da 10 pezzi per la validazione, poi 200 pezzi per il lancio.',
      challenge:
        "Nessun team di design, nessuna esperienza di importazione e un primo ordine troppo piccolo per la maggior parte delle fabbriche — oltre a una data di lancio legata alla stagione dell’emisfero settentrionale.",
      solution:
        "Sviluppo ODM basato sul loro concept su una piattaforma collaudata, una produzione di prova da 10 pezzi che ha coperto la verifica di campioni e fornitura, poi un ordine di lancio brandizzato da 200 pezzi — gli stampi restano alla marca.",
      product: 'SUP ODM gonfiabile brandizzato — design del deck personalizzato, imballaggio e misure dei cartoni pronte per il retail.',
      process: [
        { title: 'Colloquio di concept', body: 'Target del rider, posizionamento di prezzo e data di lancio hanno definito la piattaforma base.' },
        { title: 'Produzione di prova', body: "10 pezzi hanno validato prodotto e imballaggio dall’inizio alla fine." },
        { title: 'Ordine di lancio', body: '200 pezzi prodotti con grafiche e specifica dei cartoni verificate.' },
        { title: 'Percorso di scalabilità', body: 'Stampi mantenuti dalla marca; riordini a condizioni migliori.' },
      ],
      result:
        "La prima serie si è esaurita entro poche settimane dall’inizio della stagione; il feedback della produzione di prova ha corretto un problema di imballaggio prima che il grande ordine entrasse in produzione.",
      outcome: 'Serie di lancio esaurita, imballaggio corretto prima della scalatura, percorso di riordino consolidato.',
      customizations: [
        'Tavola ODM sviluppata dal concept della marca su una piattaforma collaudata',
        'Design del deck personalizzato e imballaggio di marca',
        "Misure dei cartoni pronte per il retail per l’ordine di lancio",
        'Set di accessori e configurazione calibrati sul target del rider',
        'Gli stampi e il design rimangono alla marca',
        'Pianificazione della produzione allineata alla data di lancio',
      ],
      inspectionFocus: [
        'Accuratezza delle grafiche rispetto ai file approvati',
        "Verifica della tenuta all’aria su produzione di prova e ordine di lancio",
        'Verifica di imballaggio e cartoni — inclusa la correzione emersa nella produzione di prova',
        'Completezza di accessori e dotazione',
      ],
      confidentiality:
        "Per accordo, il nome della marca e i dettagli del lancio non vengono divulgati. Questo progetto è presentato in forma anonima per tutelare la riservatezza commerciale.",
      tags: ['Sviluppo ODM', 'Produzione di prova con MOQ bassa', 'Pianificazione in base alla data di stagione'],
    },
    {
      slug: 'rental-fleet-multi-site',
      customerType: 'Operatori di flotte di noleggio',
      region: 'Nordamerica',
      productCategory: 'SUP gonfiabile Allround di qualità da noleggio',
      projectStage: 'Audit della flotta → Produzione uniforme → Aggiornamento stagionale',
      manufacturingScope: 'Specifica della flotta, produzione, kit di ricambi, programma di aggiornamento',
      keyRequirements: 'Una tavola uniforme in tutte le sedi, durabilità sotto stress da noleggio',
      qualityFocus: "Verifica della costruzione rinforzata, tenuta all’aria, dotazione completa",
      navLabel: 'Flotta di noleggio multi-sede',
      metaTitle: 'Ampliamento della flotta di noleggio | 200 tavole, 3 sedi — iSupfactory',
      metaDescription:
        'Come un operatore di noleggio multi-sede ha sostituito stock eterogenei con 200 tavole uniformi in tre sedi — condizioni di flotta, aggiornamento stagionale e fornitura di ricambi.',
      kicker: 'Progetto di noleggio',
      h1: 'Standardizzazione di una flotta di noleggio da 200 tavole in tre sedi per un operatore di flotte',
      intro: [
        'Un operatore di noleggio con tre sedi acquatiche aveva bisogno di una flotta uniforme invece di stock eterogenei — la stessa tavola in ogni sede, con prezzi in base al volume della flotta.',
      ],
      industry: 'Operatori di flotte di noleggio',
      requirement: '200 tavole di qualità da noleggio in tre sedi, con aggiornamento stagionale e ricambi riparabili sul campo.',
      challenge:
        'Stock eterogenei e invecchiati complicavano riparazioni e prezzi; lo stress del noleggio richiede una costruzione rinforzata e lo stoccaggio fuori stagione è distribuito su tre sedi.',
      solution:
        "Un’unica piattaforma di qualità da noleggio in tutte le sedi con rail rinforzati e materiali resistenti ai raggi UV, condizioni di flotta sul volume di 200 tavole e un kit di ricambi con guida alla riparazione per sede.",
      product: "SUP gonfiabile di qualità da noleggio — piattaforma Allround da 11′ con costruzione rinforzata e kit di riparazione.",
      process: [
        { title: 'Audit della flotta', body: 'Volumi e curve di utilizzo per sede hanno definito la distribuzione tra le sedi.' },
        { title: 'Specifica uniforme', body: 'Una tavola ovunque — riparazioni, prezzi e formazione più semplici.' },
        { title: 'Condizioni di flotta', body: "Sconto in volume sull’ordine combinato di 200 tavole." },
        { title: 'Ricambi e aggiornamento', body: 'Kit di ricambi per sede oltre a un ciclo di sostituzione stagionale definito.' },
      ],
      result:
        "La flotta uniforme ha eliminato l’incertezza sulle riparazioni per sede, gli ordini combinati hanno sbloccato le condizioni di flotta e il programma di 200 tavole è diventato la base del rinnovo stagionale.",
      outcome: 'Operatività uniforme, costi unitari ridotti, ciclo stagionale ripetibile.',
      customizations: [
        "Un’unica piattaforma di qualità da noleggio in tutte e tre le sedi",
        'Rail rinforzati e materiali resistenti ai raggi UV per lo stress del noleggio',
        'Ripartizione per sede e numerazione della flotta per ubicazione',
        'Kit di ricambi per sede con guida alla riparazione',
        'Ciclo di sostituzione stagionale definito',
      ],
      inspectionFocus: [
        'Verifica della costruzione rinforzata per tavola',
        "Gonfiaggio e tenuta all’aria su ogni tavola",
        'Completezza di accessori e kit di riparazione per sede',
        'Accuratezza di numerazione della flotta ed etichette delle sedi',
        "Controlli dell’imballaggio per spedizioni a più sedi",
      ],
      confidentiality:
        "Per accordo, il nome dell’operatore e le ubicazioni non vengono divulgati. Questo progetto è presentato in forma anonima per tutelare la riservatezza commerciale.",
      tags: ['Flotta multi-sede', 'Costruzione di qualità da noleggio', 'Rinnovo stagionale'],
    },
    {
      slug: 'touring-sup-range',
      customerType: 'Distributori outdoor e di sport acquatici',
      region: 'Europa',
      productCategory: 'SUP gonfiabile touring',
      projectStage: 'Brief di prodotto → Approvazione del campione → Produzione in serie',
      manufacturingScope: 'Revisione della piattaforma, grafiche, configurazione degli accessori, imballaggio retail e produzione',
      keyRequirements: 'Prestazioni touring, grafiche specifiche del progetto, kit retail completo',
      qualityFocus: "Tenuta all’aria, accuratezza delle grafiche, accessori completi, marcatura dei cartoni",
      navLabel: 'Linea SUP touring',
      metaTitle: 'Sviluppo di una linea SUP touring | Distributore outdoor — iSupfactory',
      metaDescription:
        "Come iSupfactory ha supportato una linea SUP touring per un distributore outdoor europeo — revisione della piattaforma, grafiche specifiche del progetto, configurazione degli accessori e imballaggio retail.",
      kicker: 'Progetto touring',
      h1: 'Sviluppo di una linea SUP touring per un distributore outdoor europeo',
      intro: [
        "Un progetto personalizzato di SUP gonfiabili con revisione della piattaforma, grafiche specifiche del progetto, configurazione degli accessori, imballaggio retail e pianificazione della qualità — dall’approvazione del campione alla preparazione della spedizione.",
      ],
      industry: 'Distributori e grossisti',
      requirement: "Una linea SUP touring con grafiche specifiche del progetto, configurazione degli accessori e imballaggio retail, gestita dall’approvazione del campione alla spedizione.",
      challenge:
        "I pagaiatori touring si aspettano stabilità a velocità elevate e una planata prevedibile, quindi piattaforma, misure e volume dovevano essere verificati prima della produzione. Le grafiche dovevano tenere conto di rail, EVA e valvole, e ogni kit retail doveva arrivare completo su tutta la linea.",
      solution:
        "Verifica di piattaforma e misure per le prestazioni touring, grafiche specifiche del progetto allineate alle caratteristiche della tavola, una configurazione di accessori con pagaia, leash e borsa, pianificazione dell’imballaggio retail e produzione in serie controllata con punti di controllo qualità definiti.",
      product: 'Linea di SUP gonfiabili touring — piattaforma ad alte prestazioni con design personalizzato, kit di accessori completo e imballaggio pronto per il retail.',
      process: [
        { title: 'Revisione della piattaforma', body: 'Misure touring, volume e profilo dei rail calibrati sul target e sul mercato.' },
        { title: 'Specifica e grafiche', body: 'Preparati specifica tecnica, allineamento delle grafiche e distinta base approvata dal cliente.' },
        { title: 'Approvazione del campione', body: 'Costruzione, grafiche e kit confermati su una tavola fisica.' },
        { title: 'Produzione e ispezione', body: "Produzione in serie con punti di controllo qualità, verifica dell’imballaggio e rilascio della spedizione." },
      ],
      result:
        "La linea è avanzata dall’approvazione del campione alla preparazione della spedizione con una documentazione controllata di prodotto, grafiche, distinta base e imballaggio — il campione approvato ha fatto da riferimento per produzione e controllo finale.",
      outcome: 'Percorso controllato dal campione alla produzione; grafiche e imballaggio bloccati prima della produzione.',
      customizations: [
        'Piattaforma touring, misure e configurazione del volume',
        'Grafiche specifiche del progetto per deck, fondo e rail',
        'Layout del pad EVA e configurazione dei colori',
        'Sistema di pinne, disposizione dei bungee e set di accessori',
        'Borsa brandizzata, versione del manuale e imballaggio retail',
        'Marcatura dei cartoni e requisiti dei codici a barre per il mercato di riferimento',
      ],
      inspectionFocus: [
        "Verifica di gonfiaggio e tenuta all’aria",
        'Ispezione di valvola, rail e cuciture',
        'Accuratezza delle grafiche rispetto ai file approvati',
        'Completezza di accessori e dotazione',
        'Verifica di imballaggio retail, codice a barre e marcatura dei cartoni',
      ],
      confidentiality:
        "Per accordo, il nome del distributore e il suo elenco clienti non vengono divulgati. Questo progetto è presentato in forma anonima per tutelare la riservatezza commerciale.",
      tags: ['Linea SUP touring', 'Grafiche personalizzate', 'Imballaggio retail'],
    },
    {
      slug: 'fishing-sup-program',
      customerType: 'Rivenditori outdoor',
      region: 'Nordamerica',
      productCategory: 'SUP gonfiabile da pesca',
      projectStage: 'Revisione del concept → Approvazione del campione → Produzione del programma',
      manufacturingScope: 'Configurazione della piattaforma, disposizione degli accessori, imballaggio e produzione',
      keyRequirements: 'Integrazione degli accessori da pesca, piattaforma stabile, kit ordinato',
      qualityFocus: "Tenuta all’aria, ancoraggio degli accessori, accuratezza delle grafiche, kit completo",
      navLabel: 'Programma SUP da pesca',
      metaTitle: 'Sviluppo SUP da pesca | Disposizione degli accessori e kit — iSupfactory',
      metaDescription:
        "Come iSupfactory ha sviluppato una configurazione SUP da pesca per un rivenditore outdoor — disposizione degli accessori, kit ordinato e imballaggio pronto per il retail in un programma controllato.",
      kicker: 'Progetto pesca',
      h1: 'Sviluppo di un SUP da pesca per un rivenditore outdoor — disposizione degli accessori e configurazione del kit',
      intro: [
        "Un progetto SUP specifico per la pesca: una piattaforma stabile con zone per gli accessori da pesca, un kit ordinato e un imballaggio pronto per il retail — dalla revisione del concept alla produzione del programma.",
      ],
      industry: 'Marchi retail e outdoor',
      requirement: 'Una configurazione SUP da pesca con accessori ancorati, kit ordinato e imballaggio retail, dalla revisione del concept alla produzione del programma.',
      challenge:
        "Le tavole da pesca richiedono accessori ancorati — portacanne, anelli a D e zone per le cassette — senza compromettere la stabilità. Il kit doveva restare ordinato a bordo e l’imballaggio doveva presentare chiaramente la categoria nel retail.",
      solution:
        "Una piattaforma larga e stabile con zone accessori definite, anelli a D e bungee posizionati per l’attrezzatura da pesca, un kit ordinato con kit di riparazione e un imballaggio retail sviluppato in un unico programma controllato.",
      product: 'SUP gonfiabile da pesca — piattaforma stabile con zone per gli accessori da pesca, kit ordinato e imballaggio pronto per il retail.',
      process: [
        { title: 'Revisione del concept', body: 'Uso previsto, attrezzature trasportate e struttura del kit hanno definito la configurazione.' },
        { title: 'Disposizione degli accessori', body: 'Anelli a D, bungee e zone di stivaggio posizionati sul deck.' },
        { title: 'Approvazione del campione', body: 'Stabilità e ancoraggio degli accessori verificati su una tavola fisica.' },
        { title: 'Produzione del programma', body: 'Punti di controllo qualità definiti, verifica del kit e rilascio della spedizione.' },
      ],
      result:
        "La configurazione è stata confermata sul campione approvato — ancoraggio degli accessori, struttura del kit e imballaggio allineati prima della produzione — e il programma è stato spedito con kit verificati.",
      outcome: 'Disposizione degli accessori e kit bloccati in fase di campione; kit verificati spediti.',
      customizations: [
        'Piattaforma stabile e larga con zone per gli accessori da pesca',
        'Posizionamento di portacanne, anelli a D e bungee',
        'Layout del deck per cassette e attrezzatura',
        "Selezione di pagaia, pinne e leash per l’uso da pesca",
        'Kit di accessori ordinato e kit di riparazione',
        'Imballaggio retail per la categoria SUP da pesca',
        'Codice a barre e marcatura dei cartoni per il mercato di riferimento',
      ],
      inspectionFocus: [
        "Verifica dell’ancoraggio degli accessori e del posizionamento degli anelli a D",
        "Verifica di gonfiaggio e tenuta all’aria",
        'Accuratezza di grafiche e layout del deck',
        'Completezza del kit e configurazione degli accessori',
        'Verifica di imballaggio retail e marcatura dei cartoni',
      ],
      confidentiality:
        "Per accordo, il nome del rivenditore e i dettagli di canale non vengono divulgati. Questo progetto è presentato in forma anonima per tutelare la riservatezza commerciale.",
      tags: ['Configurazione da pesca', 'Disposizione degli accessori', 'Organizzazione del kit'],
    },
    {
      slug: 'yoga-sup-program',
      customerType: 'Scuole e programmi di sport acquatici',
      region: 'Europa',
      productCategory: 'SUP gonfiabile da yoga',
      projectStage: 'Revisione del programma → Approvazione del campione → Consegna della flotta',
      manufacturingScope: 'Configurazione della piattaforma stabile, copertura del deck, produzione e imballaggio del programma',
      keyRequirements: 'Stabilità per la pratica di gruppo, copertura completa del deck in EVA, flotta coerente',
      qualityFocus: "Copertura del deck, tenuta all’aria, accuratezza delle grafiche, dotazione completa",
      navLabel: 'Programma SUP yoga',
      metaTitle: 'Sviluppo SUP yoga | Programma di allenamento — iSupfactory',
      metaDescription:
        "Come iSupfactory ha sviluppato una configurazione yoga SUP stabile per un programma di allenamento di sport acquatici — copertura completa del deck e una flotta di programma coerente.",
      kicker: 'Progetto yoga',
      h1: 'Sviluppo di una configurazione yoga SUP stabile per un programma di allenamento di sport acquatici',
      intro: [
        'Una configurazione yoga SUP per un programma di allenamento: una piattaforma larga e di grande volume con copertura completa del deck in EVA, prodotta come flotta coerente per la pratica di gruppo.',
      ],
      industry: 'Istruzione e programmi giovanili',
      requirement: 'Una configurazione yoga SUP stabile con copertura completa del deck per la pratica di gruppo, in quantità di programma.',
      challenge:
        "La pratica dello yoga richiede una piattaforma larga e di grande volume che resti assolutamente stabile in acqua. I gruppi hanno bisogno di tavole coerenti e gli istruttori di istruzioni chiare e di uno stoccaggio gestibile tra una sessione e l’altra.",
      solution:
        "Una piattaforma larga e di grande volume con copertura completa del deck in EVA, una configurazione di flotta coerente sull’intero programma e istruzioni per gli istruttori ed etichette del programma incluse.",
      product: 'SUP gonfiabile da yoga — piattaforma stabile con copertura completa del pad del deck e flotta di programma coerente.',
      process: [
        { title: 'Revisione del programma', body: 'Stile di pratica, dimensione del gruppo e stoccaggio hanno definito la configurazione.' },
        { title: 'Configurazione', body: 'Piattaforma, copertura del deck e finiture definite su tutta la flotta.' },
        { title: 'Approvazione del campione', body: 'Stabilità e copertura del deck verificate su una tavola fisica.' },
        { title: 'Consegna della flotta', body: 'Quantità di programma prodotte con verifica di kit e imballaggio.' },
      ],
      result:
        "La flotta è stata spedita come un’unica configurazione coerente — ogni tavola conforme al campione approvato in termini di stabilità, copertura del deck e finiture — con le istruzioni incluse per gli istruttori.",
      outcome: 'Flotta coerente conforme al campione approvato; imballaggio del programma verificato.',
      customizations: [
        'Piattaforma larga e di grande volume per la stabilità in piedi',
        "Copertura completa del deck in EVA su tutta l’area utilizzabile",
        'Layout del deck e posizionamento delle cinghie per la pratica',
        'Colore e finiture coerenti su tutta la flotta',
        'Istruzioni per gli istruttori ed etichette del programma',
        'Configurazione di stoccaggio e imballaggio del programma',
      ],
      inspectionFocus: [
        "Ispezione della copertura del deck e dell’adesione dell’EVA",
        "Verifica di gonfiaggio e tenuta all’aria",
        'Verifica della stabilità sul campione approvato',
        'Coerenza di grafiche e finiture su tutta la serie',
        "Completezza della dotazione e controlli dell’imballaggio del programma",
      ],
      confidentiality:
        "Per accordo, il nome del programma e la sua ubicazione non vengono divulgati. Questo progetto è presentato in forma anonima per tutelare la riservatezza commerciale.",
      tags: ['Configurazione yoga', 'Copertura completa del deck', 'Flotta di programma'],
    },
  ],
  pt: [
    {
      slug: 'coastal-rental-fleet',
      customerType: 'Operadores de frotas de aluguer',
      region: 'Mediterrâneo — Espanha, Itália, Grécia',
      productCategory: 'SUP insuflável para aluguer (10′6″ + 11′0″)',
      projectStage: 'Avaliação da frota → Aprovação da amostra → Entrega faseada em 3 lotes',
      manufacturingScope: 'Especificação da frota, construção reforçada, produção faseada, fornecimento de peças sobresselentes',
      keyRequirements: 'Pranchas de aluguer duráveis, entrega faseada em todas as estações, menor taxa de substituições antecipadas',
      qualityFocus: 'Construção reforçada, estanquidade, gráficas de frota, kit completo',
      navLabel: 'Frota de aluguer costeira',
      metaTitle: 'Frota de aluguer costeira | 320 pranchas em 120 dias — iSupfactory',
      metaDescription:
        'Como um operador de aluguer no Mediterrâneo montou uma frota costeira de 320 pranchas entre Espanha, Itália e Grécia — três lotes faseados em 120 dias e uma redução estimada das substituições antecipadas de 20–25 %.',
      kicker: 'Projeto de aluguer costeiro',
      h1: 'Como um operador de aluguer no Mediterrâneo montou uma frota costeira de 320 pranchas em 120 dias',
      intro: [
        'Um operador de aluguer com estações em Espanha, Itália e Grécia precisava de uma frota durável para o verão de elevada rotação — entregue em três lotes, a tempo da abertura de cada estação.',
      ],
      industry: 'Operadores de frotas de aluguer',
      requirement: '320 pranchas de aluguer em dois tamanhos — 10′6″ e 11′0″ — para estações costeiras em três países, entregues em três lotes faseados no prazo de 120 dias.',
      challenge:
        'A rotação diária do aluguer desgasta rapidamente as pranchas e a taxa de substituições antecipadas do operador rondava os 20–25 %. As estações abriam em três países em datas diferentes: uma única entrega não era opção, nem uma frota de um único tamanho.',
      solution:
        'Duas plataformas de aluguer duráveis nos tamanhos que cobrem a maioria dos alugueres, construção reforçada para o uso intensivo e três lotes de produção programados a tempo da abertura de cada estação — com kits de peças sobresselentes e guia de reparação por estação.',
      product: 'SUP insuflável para aluguer — plataformas de 10′6″ e 11′0″ com rails reforçados e materiais resistentes aos raios UV, kits por estação.',
      process: [
        { title: 'Avaliação da frota', body: 'As datas de abertura e os volumes de rotação definiram os dois tamanhos e a repartição dos lotes.' },
        { title: 'Seleção das pranchas', body: 'Plataformas de aluguer de 10′6″ e 11′0″ escolhidas pela cobertura dos alugueres e pela durabilidade.' },
        { title: 'Produção faseada', body: 'Três lotes sincronizados com a data de abertura de cada estação.' },
        { title: 'Entrega e apoio', body: 'Frota enviada por lote com kits de peças sobresselentes e guia de reparação por estação.' },
      ],
      result:
        'Os três lotes chegaram dentro de 120 dias, em sincronia com a abertura de cada estação. As plataformas reforçadas deverão reduzir a taxa de substituições antecipadas em cerca de 20–25 %, e os kits de peças sobresselentes cobrem as reparações no terreno entre temporadas.',
      outcome: '320 pranchas · 120 dias · 3 lotes · ca. −20–25 % de substituições antecipadas.',
      metrics: [
        { value: '320', label: 'pranchas em dois tamanhos' },
        { value: '120', label: 'dias da encomenda ao último lote' },
        { value: '3', label: 'entregas faseadas, uma por abertura de estação' },
        { value: '−20–25%', label: 'taxa de substituições antecipadas estimada' },
      ],
      takeaways: [
        'Os lotes faseados levam a frota exatamente à abertura de cada estação — sem inventário parado, sem arranques tardios.',
        'Dois tamanhos (10′6″ e 11′0″) cobriram a maioria dos alugueres sem fragmentar a frota.',
        'Para baixar a taxa de substituições antecipadas é decisiva a construção reforçada — não apenas o preço.',
        'Os kits de peças sobresselentes por estação mantiveram as pranchas operacionais entre temporadas.',
      ],
      customizations: [
        'Plataformas de aluguer de 10′6″ e 11′0″ calibradas para os perfis dos alugueres',
        'Rails reforçados e materiais resistentes aos raios UV para o uso intensivo do aluguer',
        'Gráficas de frota e numeração por estação',
        'Plano de produção em três lotes sincronizado com as aberturas das estações',
        'Kits de peças sobresselentes e guia de reparação por estação',
        'Embalagem para locais separados e verificação da entrega por lote',
      ],
      inspectionFocus: [
        'Verificação da construção reforçada por prancha',
        'Insuflação e estanquidade em cada prancha',
        'Precisão das gráficas de frota e da numeração das estações',
        'Completude de acessórios e kits de peças sobresselentes por estação',
        'Controlos da embalagem para envios a locais separados em vários lotes',
      ],
      confidentiality:
        'Por acordo, o nome do operador e as localizações das estações não são divulgados. Este projeto é apresentado de forma anónima para proteger a confidencialidade comercial.',
      tags: ['Entrega faseada da frota', 'Construção de qualidade para aluguer', 'Taxa de substituição reduzida'],
    },
    {
      slug: 'eu-distributor-private-label',
      customerType: 'Distribuidores e grossistas',
      region: 'Europa',
      productCategory: 'SUP insuflável de marca própria (2 SKU)',
      projectStage: 'Planeamento da gama → Aprovação da amostra → Entrega em volume em 90 dias',
      manufacturingScope: 'Marca própria, embalagem de retalho, produção em série, apoio a reencomendas',
      keyRequirements: 'Dois SKU comprovados no mercado sob a marca do distribuidor, embalagem de retalho UE, alinhamento com as datas de época',
      qualityFocus: 'Precisão das gráficas, código de barras e etiqueta por mercado, kit completo, estanquidade',
      navLabel: 'Marca própria para distribuidores',
      metaTitle: 'Marca própria para distribuidor UE | 1,200 pranchas em 90 dias — iSupfactory',
      metaDescription:
        'Como um distribuidor europeu lançou em 90 dias uma linha SUP de marca própria com 1,200 pranchas — dois SKU, embalagem de retalho UE e uma reencomenda no Q4 com a mesma especificação bloqueada.',
      kicker: 'Projeto de marca própria',
      h1: 'Como um distribuidor europeu lançou uma linha SUP de marca própria com 1,200 pranchas em 90 dias',
      intro: [
        'Um distribuidor europeu queria uma linha SUP própria nas prateleiras para a época de verão — dois SKU comprovados no mercado, embalagem de retalho completa e nenhuma relação direta com fabricantes.',
      ],
      industry: 'Distribuidores e grossistas',
      requirement: '1,200 pranchas com a própria marca em dois SKU — 10′6″ All-round e 12′6″ Touring — com embalagem de retalho UE, entregues em 90 dias.',
      challenge:
        'A janela de venda de verão é fixa: todas as 1,200 pranchas com a respetiva embalagem tinham de chegar a tempo. A embalagem de marca própria — códigos de barras, etiquetas, manuais — tinha de cumprir os requisitos do retalho UE e o distribuidor não tinha qualquer experiência com fábricas de SUP.',
      solution:
        'Duas plataformas comprovadas no mercado para a gama de retalho, todo o design de marca própria e a embalagem de retalho UE geridos num único programa e um planeamento de produção que permita o envio conjunto de ambos os SKU dentro da janela de 90 dias — com especificação bloqueada para uma reencomenda limpa.',
      product: 'SUP insuflável de marca própria — 10′6″ All-round e 12′6″ Touring, com pá, bomba, mochila e cartões de retalho impressos com a marca.',
      process: [
        { title: 'Planeamento da gama', body: 'Selecionados dois SKU — 10′6″ All-round e 12′6″ Touring — para a cobertura no retalho.' },
        { title: 'Aprovação da amostra', body: 'Gráficas, embalagem e acabamentos confirmados em pranchas físicas.' },
        { title: 'Produção em 90 dias', body: 'Produção em volume planeada para enviar conjuntamente ambos os SKU para a janela de época.' },
        { title: 'Reencomenda no Q4', body: 'Reencomenda efetuada com a mesma especificação bloqueada.' },
      ],
      result:
        'Todas as 1,200 pranchas com embalagem de retalho completa foram enviadas dentro de 90 dias, a tempo da janela de venda de verão. A linha vendeu todo o stock e o distribuidor voltou no Q4 com uma reencomenda com a mesma especificação bloqueada.',
      outcome: '1,200 pranchas · 90 dias · 2 SKU · reencomenda no Q4.',
      metrics: [
        { value: '1,200', label: 'pranchas num único lançamento' },
        { value: '90', label: 'dias até à entrega completa' },
        { value: '2', label: 'SKU de retalho, ambos a tempo da janela' },
        { value: 'Q4', label: 'reencomenda com a mesma especificação' },
      ],
      takeaways: [
        'Começar com dois SKU comprovados mantém o risco de stock baixo e preenche igualmente a gama de retalho.',
        'Um único programa para pranchas, acessórios e embalagem elimina uma causa frequente de erros nos lançamentos.',
        'Uma data de época fixa determina o calendário — o planeamento da produção deve tratá-la como não negociável.',
        'Bloquear a especificação no lançamento torna as reencomendas limpas e coerentes.',
      ],
      customizations: [
        'Plataformas All-round de 10′6″ e plataformas Touring de 12′6″ para a gama de retalho',
        'Design de marca própria para deck, fundo e embalagem',
        'Pá, bomba e mochila com a marca por SKU',
        'Cartões de retalho impressos, códigos de barras, etiquetas e manual de utilização para o retalho UE',
        'Lista de materiais (BOM) e especificação bloqueadas para reencomendas coerentes',
        'Entrega faseada sincronizada com a janela de lançamento no retalho',
      ],
      inspectionFocus: [
        'Precisão das gráficas face aos ficheiros de marca própria aprovados',
        'Verificação de código de barras, etiqueta e manual por mercado',
        'Kit completo por SKU em toda a série de 1,200 pranchas',
        'Verificações de amostragem da estanquidade durante a produção',
        'Verificação de cartão e embalagem por SKU',
      ],
      confidentiality:
        'Por acordo, o nome do distribuidor e os seus clientes de retalho não são divulgados. Este projeto é apresentado de forma anónima para proteger a confidencialidade comercial.',
      tags: ['Marca própria', 'Gama de retalho de 2 SKU', 'Entrega na janela de época'],
    },
    {
      slug: 'resort-sup-fleet',
      customerType: 'Resort e unidades hoteleiras',
      region: 'Europa / América do Norte',
      productCategory: 'SUP insuflável All-round',
      projectStage: 'Aprovação da amostra → Produção em série → Atualização da frota',
      manufacturingScope: 'Gráficas, acessórios, embalagem e produção da frota',
      keyRequirements: 'Durabilidade para o aluguer, arrumação compacta, marca completa da unidade',
      qualityFocus: 'Estanquidade, precisão das gráficas, acessórios completos, marcação dos cartões',
      navLabel: 'Frota SUP para um resort de luxo',
      metaTitle: 'Frota SUP para um resort de luxo | 100 pranchas com marca — iSupfactory',
      metaDescription:
        'Como um resort de luxo equipou o seu programa de praia com 100 pranchas SUP com a sua marca — gráficas personalizadas, construção de qualidade para aluguer e gestão sazonal da frota.',
      kicker: 'Projeto resort',
      h1: 'Como um resort de luxo padronizou uma frota SUP com marca de 100 pranchas',
      intro: [
        'Um resort de luxo queria que o seu programa de praia se integrasse com a propriedade — pranchas com a marca nas cores do resort, suficientemente robustas para o uso diário dos hóspedes e fáceis de arrumar entre temporadas.',
      ],
      industry: 'Resort e unidades hoteleiras',
      requirement: '100 pranchas SUP com a marca para aluguer aos hóspedes, nas cores da unidade.',
      challenge:
        'O aluguer diário desgasta rapidamente as frotas genéricas e o espaço de arrumação fora de época é limitado. O resort precisava de pranchas que resistam ao uso intensivo, que se arrumem de forma compacta e que tenham a marca completa da unidade.',
      solution:
        'Construção insuflável de qualidade para aluguer com rails reforçados e materiais resistentes aos raios UV, gráficas de toda a superfície nas cores do resort e pás e bombas com a marca incluídas no pacote da frota.',
      product: 'SUP insuflável personalizado — plataforma All-round de 11′ com design de deck com a marca e acessórios.',
      process: [
        { title: 'Consulta sobre a frota', body: 'Afluência de hóspedes, zona costeira e duração da época definiram a dimensão e o mix da frota.' },
        { title: 'Amostra com a marca', body: 'Cores e logótipo aprovados numa prancha física antes da produção.' },
        { title: 'Produção e controlo de qualidade', body: '100 pranchas produzidas com controlo de qualidade em múltiplos pontos em toda a série.' },
        { title: 'Entrega e atualização', body: 'Entrega sazonal, peças sobresselentes e um programa de atualização para as épocas seguintes.' },
      ],
      result:
        'A frota arrancou a tempo da época, as pranchas arrumam-se fora de época numa única sala e o feedback dos hóspedes sobre o equipamento com a marca levou a uma expansão da frota no ano seguinte.',
      outcome: 'Arranque de época pontual, frota 100% com a marca, expansão na época seguinte.',
      customizations: [
        'Plataforma, medida e construção das pranchas selecionadas para o aluguer diário',
        'Design de toda a superfície do deck nas cores da unidade',
        'Marca nos rails e posicionamento do logótipo aprovados numa amostra física',
        'Pá, bomba e conjunto de acessórios com a marca para cada prancha',
        'Numeração da frota e codificação por cores em toda a série',
        'Configuração de arrumação compacta e âmbito da atualização sazonal',
      ],
      inspectionFocus: [
        'Insuflação e estanquidade em cada prancha',
        'Estado da válvula e dos rails reforçados',
        'Precisão das gráficas e correspondência de cores face à amostra aprovada',
        'Completude de acessórios e kit por prancha',
        'Marcação dos cartões e etiquetas de frota antes do lançamento do envio',
      ],
      confidentiality:
        'Por acordo, o nome do resort e os seus ativos de marca não são divulgados. Este projeto é apresentado de forma anónima para proteger a confidencialidade comercial.',
      tags: ['Frota com a marca para os hóspedes', 'Construção de qualidade para aluguer', 'Atualização sazonal'],
    },
    {
      slug: 'private-label-launch',
      customerType: 'Marcas de retalho e outdoor',
      region: 'Europa',
      productCategory: 'SUP insuflável All-round (marca própria)',
      projectStage: 'Aprovação da amostra → Série de validação → Escalabilidade',
      manufacturingScope: 'Design de produto e embalagem, amostragem, produção, manutenção dos moldes',
      keyRequirements: 'Linha vendável sem design ou produção SUP internos',
      qualityFocus: 'Controlo de versões das gráficas, precisão da embalagem, kit completo',
      navLabel: 'Lançamento de marca própria',
      metaTitle: 'Lançamento SUP de marca própria | Extensão de marca — iSupfactory',
      metaDescription:
        'Como uma marca outdoor existente se expandiu no setor SUP com uma linha de produto de marca própria — do logótipo ao primeiro contentor, com MOQ escalável.',
      kicker: 'Projeto de marca própria',
      h1: 'Como uma marca outdoor lançou uma linha SUP de marca própria, do logótipo ao primeiro contentor',
      intro: [
        'Um retalhista desportivo com uma marca estabelecida queria expandir-se para os desportos de remo sem criar relações com fábricas — uma linha SUP vendável com o seu próprio nome.',
      ],
      industry: 'Marcas de retalho e outdoor',
      requirement: 'Uma linha SUP de marca própria — logótipo, cores e embalagem em plataformas comprovadas, com uma primeira série de 50 peças.',
      challenge:
        'Sem equipa interna de design SUP, sem experiência de produção e um primeiro pedido suficientemente pequeno para testar o mercado antes de escalar.',
      solution:
        'Design completo de produto e embalagem baseado nos ativos da marca, uma série de validação de 50 peças e depois escalabilidade nas mesmas plataformas verificadas — os moldes ficam para a marca.',
      product: 'SUP insuflável de marca própria — deck com a marca, pá, bomba, mochila e cartões impressos.',
      process: [
        { title: 'Aquisição da marca', body: 'Logótipo, cores e diretrizes da marca transformados em design de pranchas e embalagem.' },
        { title: 'Aprovação da amostra', body: 'A amostra física confirmou acabamentos, cores e embalagem.' },
        { title: 'Série de validação', body: 'Primeira série de 50 peças totalmente vendida antes da escalabilidade.' },
        { title: 'Escalabilidade', body: 'Produção em quantidades de contentor com qualidade constante; design propriedade da marca.' },
      ],
      result:
        'A linha vendeu a sua série de validação dentro de uma época e escalou para pedidos de contentor — a marca é proprietária de todos os designs e moldes.',
      outcome: 'Validada numa época, escalada para pedidos de contentor.',
      customizations: [
        'Plataformas, medidas e cores das pranchas alinhadas com a linha da marca',
        'Design de deck, fundo e embalagem baseados nos ativos da marca',
        'Pá, bomba, mochila e conjunto de acessórios com a marca',
        'Cartões de retalho impressos e paginação das etiquetas',
        'Código de barras e versão do manual de utilização para o mercado-alvo',
        'Propriedade de moldes e design mantida pela marca',
      ],
      inspectionFocus: [
        'Correspondência da versão das gráficas com os ficheiros aprovados',
        'Precisão de cores e acabamentos na amostra física',
        'Verificação de embalagem, código de barras e manual',
        'Kit completo em toda a série de validação',
        'Verificações de amostragem da estanquidade durante a produção',
      ],
      confidentiality:
        'Por acordo, o nome da marca e os detalhes comerciais não são divulgados. Este projeto é apresentado de forma anónima para proteger a confidencialidade comercial.',
      tags: ['Extensão de marca', 'Design da embalagem', 'MOQ escalável'],
    },
    {
      slug: 'club-team-boards',
      customerType: 'Clubes e equipas de paddle',
      region: 'América do Norte',
      productCategory: 'SUP insuflável de treino',
      projectStage: 'Aprovação da amostra → Produção da frota → Reencomenda para expansão',
      manufacturingScope: 'Marca do clube, produção da frota, apoio a peças sobresselentes',
      keyRequirements: 'Aspecto de equipa uniforme, orçamento limitado, expansão futura idêntica',
      qualityFocus: 'Precisão das gráficas, estanquidade, kit completo, reencomendas coerentes',
      navLabel: 'Pranchas de equipa para o clube',
      metaTitle: 'Pranchas SUP de equipa para clubes | Renovação da frota com a marca — iSupfactory',
      metaDescription:
        'Como um clube de paddle renovou e atualizou a sua frota com 25 pranchas de treino com a marca — gráficas de equipa, apoio a peças sobresselentes e reencomendas coerentes.',
      kicker: 'Projeto clube',
      h1: 'Como um clube de paddle renovou a marca de uma frota de treino com 25 pranchas',
      intro: [
        'Um clube de paddle relançou a sua marca e precisava de equipamento coerente — uma frota de equipa uniforme para treinos e regatas, sem stock heterogéneo.',
      ],
      industry: 'Clubes e equipas de paddle',
      requirement: '25 pranchas de treino com a marca, com nome, cores e logótipo do clube, além de peças sobresselentes.',
      challenge:
        'A frota existente era heterogénea e sem marca; o orçamento era limitado e para a expansão futura era preciso stock idêntico e coerente.',
      solution:
        'Marca do clube em cada prancha, condições de frota para o volume e peças sobresselentes com guias de reparação para prolongar a vida das pranchas.',
      product: 'SUP de equipa personalizado — forma de treino com gráficas do clube, aletas de substituição e kits de reparação.',
      process: [
        { title: 'Aquisição do clube', body: 'Número de membros, tipos de treino e equipamento atual verificados.' },
        { title: 'Seleção das pranchas', body: 'Formas de treino e de iniciação calibradas para o programa do clube.' },
        { title: 'Marca', body: 'Nome, cores e logótipo do clube aplicados em toda a frota.' },
        { title: 'Entrega e crescimento', body: 'Frota entregue com as peças sobresselentes; reencomenda idêntica para a expansão.' },
      ],
      result:
        'Os membros treinam com equipamento com a marca e coerente, e o clube expandiu a frota na época seguinte com uma reencomenda idêntica e da mesma qualidade.',
      outcome: 'Frota uniforme, reencomenda de expansão idêntica.',
      customizations: [
        'Plataformas de treino e de iniciação calibradas para o programa do clube',
        'Nome, cores e logótipo do clube em toda a frota',
        'Numeração das pranchas e agrupamento por medida conforme o grupo de treino',
        'Aletas de substituição e kits de reparação como acessórios de frota',
        'Especificação de reencomenda bloqueada para uma expansão futura idêntica',
      ],
      inspectionFocus: [
        'Precisão das gráficas de nome, cores e logótipo do clube',
        'Verificação de insuflação e estanquidade',
        'Completude de acessórios e kits de reparação',
        'Coerência cromática em toda a série de 25 pranchas',
      ],
      confidentiality:
        'Por acordo, o nome do clube e a sua localização não são divulgados. Este projeto é apresentado de forma anónima para proteger a confidencialidade comercial.',
      tags: ['Marca do clube', 'Condições de frota', 'Apoio a peças sobresselentes'],
    },
    {
      slug: 'school-program-fleet',
      customerType: 'Educação e programas juvenis',
      region: 'Europa',
      productCategory: 'SUP insuflável para iniciantes e multi-lugar',
      projectStage: 'Revisão do programa → Aprovação da amostra → Entrega da frota',
      manufacturingScope: 'Design do pacote, produção, peças sobresselentes e apoio à renovação',
      keyRequirements: 'Equipamento orientado para a segurança, quantidades para dimensões de turma, gestão com pouco pessoal',
      qualityFocus: 'Estabilidade, estanquidade, acessórios completos, guia do utilizador',
      navLabel: 'Frota para programas escolares',
      metaTitle: 'Programa SUP para escolas | Frota para iniciantes — iSupfactory',
      metaDescription:
        'Como uma escola lançou uma disciplina opcional de desportos de remo com uma frota de 15 pranchas para iniciantes e pranchas multi-lugar — equipamento orientado para a segurança no ensino.',
      kicker: 'Projeto escolar',
      h1: 'Como uma escola montou uma frota para iniciantes com 15 pranchas para o ensino de desportos de remo',
      intro: [
        'Uma escola que lançava uma disciplina opcional de desportos de remo precisava de equipamento estável e seguro para iniciantes, dimensionado para as turmas e fácil de gerir com pouco pessoal.',
      ],
      industry: 'Educação e programas juvenis',
      requirement: 'Uma frota para iniciantes adequada às dimensões das turmas, incluindo pranchas multi-lugar para as primeiras aulas.',
      challenge:
        'Níveis de aptidão mistos, requisitos de segurança rigorosos, ciclos de compra escolares e um orçamento que tem de cobrir também as futuras turmas.',
      solution:
        'Pranchas para iniciantes largas e de grande volume e pranchas multi-lugar, condições de programa alinhadas com as dimensões das turmas e uma guia do utilizador clara para os instrutores.',
      product: 'Frota de SUP para iniciantes — plataformas estáveis com construção reforçada para uma longa vida útil do programa.',
      process: [
        { title: 'Revisão do programa', body: 'Dimensões das turmas, área aquática e organização dos instrutores definiram o pacote.' },
        { title: 'Construção do pacote', body: 'Tipos e quantidades de pranchas calibrados para o ensino.' },
        { title: 'Aprovação da amostra', body: 'Estabilidade e construção verificadas numa prancha física.' },
        { title: 'Entrega e renovação', body: 'Fornecimento em volume, peças sobresselentes e reencomendas para as novas turmas.' },
      ],
      result:
        'Os instrutores reportaram progressos mais rápidos na primeira aula nas plataformas estáveis, e o programa renovou o equipamento no ano seguinte com uma reencomenda correspondente.',
      outcome: 'Curva de aprendizagem mais rápida, equipamento renovado no ano seguinte.',
      customizations: [
        'Plataformas para iniciantes largas e de grande volume para as primeiras aulas',
        'Pranchas multi-lugar para aulas de grupo',
        'Medida e quantidade das pranchas calibradas para as dimensões das turmas',
        'Guia do utilizador clara e etiquetas didáticas',
        'Construção reforçada para uma longa vida útil do programa',
        'Especificação para o fornecimento em volume e as reencomendas de renovação',
      ],
      inspectionFocus: [
        'Verificação de estabilidade e configuração do deck',
        'Insuflação e estanquidade em cada prancha',
        'Acessórios completos por prancha e kit de turma',
        'Precisão da guia do utilizador e das etiquetas',
        'Marcação dos cartões e controlos do kit de turma',
      ],
      confidentiality:
        'Por acordo, o nome da escola e a região não são divulgados. Este projeto é apresentado de forma anónima para proteger a confidencialidade comercial.',
      tags: ['Frota para iniciantes', 'Arranque do programa', 'Pedidos de renovação'],
    },
    {
      slug: 'distributor-line-expansion',
      customerType: 'Distribuidores e grossistas',
      region: 'Duas regiões de exportação',
      productCategory: 'SUP insuflável de gama média (6 SKU)',
      projectStage: 'Planeamento da gama → Aprovação da amostra → Fornecimento a vários mercados',
      manufacturingScope: 'Pranchas, acessórios e embalagem de retalho num único programa',
      keyRequirements: 'Um único responsável pela qualidade, marca coerente, stock reduzido por SKU',
      qualityFocus: 'Estanquidade, precisão das gráficas, precisão de códigos de barras e etiquetas, conformidade com a lista de materiais',
      navLabel: 'Expansão da gama para distribuidores',
      metaTitle: 'Expansão da gama SUP para distribuidores | Programa de 6 SKU — iSupfactory',
      metaDescription:
        'Como um distribuidor de desportos aquáticos montou uma linha SUP completa de gama média com seis SKU — uma fábrica, um programa, exportada para vários mercados.',
      kicker: 'Projeto distribuidor',
      h1: 'Como um distribuidor lançou uma linha SUP de 6 SKU em dois mercados',
      intro: [
        'Um distribuidor de desportos aquáticos com caiaques e acessórios no catálogo queria uma linha própria de SUP insufláveis — sem fragmentar o fornecimento de pranchas, pás e bombas por várias fábricas.',
      ],
      industry: 'Distribuidores e grossistas',
      requirement: 'Uma linha SUP de gama média de 6 SKU (de 10′6″ a 12′6″ mais conjuntos de acessórios), com exportação para duas regiões.',
      challenge:
        'Fábricas separadas para pranchas, pás e bombas significavam marca incoerente, três pontos de fornecimento distintos e nenhum responsável único pela qualidade nos casos de garantia.',
      solution:
        'Um único programa para pranchas, acessórios e embalagem de retalho; conjuntos de acessórios partilhados para reduzir o stock por SKU; e opções de fornecimento calibradas para a estrutura de cada mercado.',
      product: 'Seis SKU de retalho com marca — plataformas SUP insufláveis com kits completos, embalados com divisórias, em cartões impressos.',
      process: [
        { title: 'Planeamento da gama', body: 'Lacunas de mercado e posicionamentos de preço definiram os seis SKU e os conteúdos dos pacotes.' },
        { title: 'Marca unificada', body: 'Um único sistema de design aplicado a pranchas, pás, bombas e cartões.' },
        { title: 'Condições de programa', body: 'Preços em volume em todo o programa, não por SKU individual.' },
        { title: 'Fornecimento por mercados', body: 'Condições de exportação padrão para a região principal, condições de serviço completo para o segundo mercado.' },
      ],
      result:
        'A linha foi lançada em ambos os mercados numa única época; os conjuntos de acessórios partilhados reduziram o stock e os casos de garantia foram resolvidos através de um único interlocutor na fábrica.',
      outcome: 'Lançamento multimercado numa época, stock reduzido, um único interlocutor para a garantia.',
      customizations: [
        'Seis SKU de 10′6″ a 12′6″ mais pacotes de acessórios',
        'Um único sistema de design para pranchas, pás, bombas e cartões',
        'Conjuntos de acessórios partilhados para reduzir o stock por SKU',
        'Kits completos com divisórias em cartões de retalho impressos',
        'Versões de código de barras, etiqueta e manual por mercado-alvo',
        'Condições de fornecimento e embalagem calibradas para cada mercado',
      ],
      inspectionFocus: [
        'Conformidade com a lista de materiais por configuração de SKU',
        'Precisão de design e marca nos seis SKU',
        'Precisão de códigos de barras e etiquetas por mercado',
        'Completude dos conjuntos de acessórios e da embalagem com divisórias',
        'Verificação da estanquidade em toda a série',
      ],
      confidentiality:
        'Por acordo, o nome do distribuidor e a sua lista de clientes não são divulgados. Este projeto é apresentado de forma anónima para proteger a confidencialidade comercial.',
      tags: ['Programa multi-SKU', 'Kits de retalho completos'],
    },
    {
      slug: 'startup-brand-zero-to-one',
      customerType: 'Marcas SUP em fase de arranque',
      region: 'América do Norte',
      productCategory: 'SUP insuflável ODM All-round',
      projectStage: 'Concept → Produção experimental → Pedido de lançamento',
      manufacturingScope: 'Desenvolvimento ODM, gráficas, embalagem, produção',
      keyRequirements: 'Primeira série com MOQ baixo, alinhamento com a data de lançamento, moldes mantidos pela marca',
      qualityFocus: 'Estanquidade, precisão das gráficas, verificação da embalagem',
      navLabel: 'Lançamento de arranque 0→1',
      metaTitle: 'Lançamento de uma marca SUP em fase de arranque | Do concept à primeira série — iSupfactory',
      metaDescription:
        'Como uma startup SUP passou do concept a uma primeira série esgotada — desenvolvimento ODM, uma produção experimental de 10 peças e depois um pedido de lançamento com marca de 200 peças.',
      kicker: 'Projeto de arranque',
      h1: 'Do concept a um lançamento esgotado com 200 pranchas para uma marca SUP em fase de arranque',
      intro: [
        'Dois fundadores com grande visibilidade mas sem fábrica queriam vender o seu próprio SUP — uma prancha ODM desenvolvida segundo a sua especificação, com um pedido de lançamento que não os pusesse em risco.',
      ],
      industry: 'Marcas SUP em fase de arranque',
      requirement: 'Desenvolvimento ODM com MOQ baixo: produção experimental de 10 peças para validação, depois 200 peças para o lançamento.',
      challenge:
        'Sem equipa de design, sem experiência de importação e um primeiro pedido demasiado pequeno para a maioria das fábricas — além de uma data de lançamento ligada à época do hemisfério norte.',
      solution:
        'Desenvolvimento ODM baseado no seu concept numa plataforma comprovada, uma produção experimental de 10 peças que cobriu a verificação de amostras e fornecimento, depois um pedido de lançamento com marca de 200 peças — os moldes ficam para a marca.',
      product: 'SUP ODM insuflável com marca — design do deck personalizado, embalagem e medidas de cartão prontas para o retalho.',
      process: [
        { title: 'Conversa sobre o concept', body: 'Público-alvo, posicionamento de preço e data de lançamento definiram a plataforma base.' },
        { title: 'Produção experimental', body: '10 peças validaram produto e embalagem de ponta a ponta.' },
        { title: 'Pedido de lançamento', body: '200 peças produzidas com gráficas e especificação de cartões verificadas.' },
        { title: 'Caminho de escala', body: 'Moldes mantidos pela marca; reencomendas em melhores condições.' },
      ],
      result:
        'A primeira série esgotou em poucas semanas após o início da época; o feedback da produção experimental corrigiu um problema de embalagem antes de o grande pedido entrar em produção.',
      outcome: 'Série de lançamento esgotada, embalagem corrigida antes da escala, caminho de reencomenda consolidado.',
      customizations: [
        'Prancha ODM desenvolvida a partir do concept da marca numa plataforma comprovada',
        'Design do deck personalizado e embalagem com a marca',
        'Medidas de cartão prontas para o retalho para o pedido de lançamento',
        'Conjunto de acessórios e configuração calibrados para o público-alvo',
        'Os moldes e o design permanecem com a marca',
        'Planeamento da produção alinhado com a data de lançamento',
      ],
      inspectionFocus: [
        'Precisão das gráficas face aos ficheiros aprovados',
        'Verificação da estanquidade na produção experimental e no pedido de lançamento',
        'Verificação de embalagem e cartões — incluindo a correção detetada na produção experimental',
        'Completude de acessórios e kit',
      ],
      confidentiality:
        'Por acordo, o nome da marca e os detalhes do lançamento não são divulgados. Este projeto é apresentado de forma anónima para proteger a confidencialidade comercial.',
      tags: ['Desenvolvimento ODM', 'Produção experimental com MOQ baixo', 'Planeamento consoante a data de época'],
    },
    {
      slug: 'rental-fleet-multi-site',
      customerType: 'Operadores de frotas de aluguer',
      region: 'América do Norte',
      productCategory: 'SUP insuflável All-round de qualidade para aluguer',
      projectStage: 'Auditoria da frota → Produção uniforme → Atualização sazonal',
      manufacturingScope: 'Especificação da frota, produção, kits de peças sobresselentes, programa de atualização',
      keyRequirements: 'Uma prancha uniforme em todos os locais, durabilidade sob o esforço do aluguer',
      qualityFocus: 'Verificação da construção reforçada, estanquidade, kit completo',
      navLabel: 'Frota de aluguer multi-local',
      metaTitle: 'Expansão da frota de aluguer | 200 pranchas, 3 locais — iSupfactory',
      metaDescription:
        'Como um operador de aluguer multi-local substituiu stock heterogéneo por 200 pranchas uniformes em três locais — condições de frota, atualização sazonal e fornecimento de peças sobresselentes.',
      kicker: 'Projeto de aluguer',
      h1: 'Padronização de uma frota de aluguer de 200 pranchas em três locais para um operador de frotas',
      intro: [
        'Um operador de aluguer com três locais junto à água precisava de uma frota uniforme em vez de stock heterogéneo — a mesma prancha em cada local, com preço em função do volume da frota.',
      ],
      industry: 'Operadores de frotas de aluguer',
      requirement: '200 pranchas de qualidade para aluguer em três locais, com atualização sazonal e peças sobresselentes reparáveis no terreno.',
      challenge:
        'Stock heterogéneo e envelhecido complicava reparações e preços; o esforço do aluguer exige construção reforçada e a arrumação fora de época está distribuída por três locais.',
      solution:
        'Uma única plataforma de qualidade para aluguer em todos os locais com rails reforçados e materiais resistentes aos raios UV, condições de frota no volume de 200 pranchas e um kit de peças sobresselentes com guia de reparação por local.',
      product: 'SUP insuflável de qualidade para aluguer — plataforma All-round de 11′ com construção reforçada e kits de reparação.',
      process: [
        { title: 'Auditoria da frota', body: 'Volumes e curvas de utilização por local definiram a distribuição entre os locais.' },
        { title: 'Especificação uniforme', body: 'Uma prancha em todo o lado — reparações, preços e formação mais simples.' },
        { title: 'Condições de frota', body: 'Desconto em volume no pedido combinado de 200 pranchas.' },
        { title: 'Peças e atualização', body: 'Kits de peças sobresselentes por local, além de um ciclo de substituição sazonal definido.' },
      ],
      result:
        'A frota uniforme eliminou a incerteza das reparações por local, os pedidos combinados desbloquearam as condições de frota e o programa de 200 pranchas tornou-se a base da renovação sazonal.',
      outcome: 'Operação uniforme, custo unitário mais baixo, ciclo sazonal repetível.',
      customizations: [
        'Uma única plataforma de qualidade para aluguer nos três locais',
        'Rails reforçados e materiais resistentes aos raios UV para o esforço do aluguer',
        'Repartição por local e numeração da frota por localização',
        'Kits de peças sobresselentes por local com guia de reparação',
        'Ciclo de substituição sazonal definido',
      ],
      inspectionFocus: [
        'Verificação da construção reforçada por prancha',
        'Insuflação e estanquidade em cada prancha',
        'Completude de acessórios e kits de reparação por local',
        'Precisão da numeração da frota e das etiquetas dos locais',
        'Controlos da embalagem para envios a vários locais',
      ],
      confidentiality:
        'Por acordo, o nome do operador e as localizações não são divulgados. Este projeto é apresentado de forma anónima para proteger a confidencialidade comercial.',
      tags: ['Frota multi-local', 'Construção de qualidade para aluguer', 'Renovação sazonal'],
    },
    {
      slug: 'touring-sup-range',
      customerType: 'Distribuidores outdoor e de desportos aquáticos',
      region: 'Europa',
      productCategory: 'SUP insuflável touring',
      projectStage: 'Briefing de produto → Aprovação da amostra → Produção em série',
      manufacturingScope: 'Revisão da plataforma, gráficas, configuração de acessórios, embalagem de retalho e produção',
      keyRequirements: 'Prestações touring, gráficas específicas do projeto, kit de retalho completo',
      qualityFocus: 'Estanquidade, precisão das gráficas, acessórios completos, marcação dos cartões',
      navLabel: 'Linha SUP touring',
      metaTitle: 'Desenvolvimento de uma linha SUP touring | Distribuidor outdoor — iSupfactory',
      metaDescription:
        'Como a iSupfactory apoiou uma linha SUP touring para um distribuidor outdoor europeu — revisão da plataforma, gráficas específicas do projeto, configuração de acessórios e embalagem de retalho.',
      kicker: 'Projeto touring',
      h1: 'Desenvolvimento de uma linha SUP touring para um distribuidor outdoor europeu',
      intro: [
        'Um projeto personalizado de SUP insufláveis com revisão da plataforma, gráficas específicas do projeto, configuração de acessórios, embalagem de retalho e planeamento da qualidade — da aprovação da amostra à preparação do envio.',
      ],
      industry: 'Distribuidores e grossistas',
      requirement: 'Uma linha SUP touring com gráficas específicas do projeto, configuração de acessórios e embalagem de retalho, gerida da aprovação da amostra ao envio.',
      challenge:
        'Os praticantes de touring esperam estabilidade a alta velocidade e um deslize previsível, pelo que plataforma, medidas e volume tinham de ser verificados antes da produção. As gráficas tinham de ter em conta rails, EVA e válvulas, e cada kit de retalho tinha de chegar completo em toda a linha.',
      solution:
        'Verificação de plataforma e medidas para as prestações touring, gráficas específicas do projeto alinhadas com as características da prancha, uma configuração de acessórios com pá, leash e bolsa, planeamento da embalagem de retalho e produção em série controlada com pontos de controlo de qualidade definidos.',
      product: 'Linha de SUP insufláveis touring — plataforma de alta prestação com design personalizado, kit de acessórios completo e embalagem pronta para o retalho.',
      process: [
        { title: 'Revisão da plataforma', body: 'Medidas touring, volume e perfil dos rails calibrados para o público-alvo e o mercado.' },
        { title: 'Especificação e gráficas', body: 'Preparados especificação técnica, alinhamento das gráficas e lista de materiais aprovada pelo cliente.' },
        { title: 'Aprovação da amostra', body: 'Construção, gráficas e kit confirmados numa prancha física.' },
        { title: 'Produção e inspeção', body: 'Produção em série com pontos de controlo de qualidade, verificação da embalagem e lançamento do envio.' },
      ],
      result:
        'A linha avançou da aprovação da amostra à preparação do envio com documentação controlada de produto, gráficas, lista de materiais e embalagem — a amostra aprovada serviu de referência para a produção e o controlo final.',
      outcome: 'Percurso controlado da amostra à produção; gráficas e embalagem bloqueadas antes da produção.',
      customizations: [
        'Plataforma touring, medidas e configuração de volume',
        'Gráficas específicas do projeto para deck, fundo e rails',
        'Layout do pad EVA e configuração de cores',
        'Sistema de aletas, disposição dos bungees e conjunto de acessórios',
        'Bolsa com a marca, versão do manual e embalagem de retalho',
        'Marcação dos cartões e requisitos de código de barras para o mercado-alvo',
      ],
      inspectionFocus: [
        'Verificação de insuflação e estanquidade',
        'Inspeção de válvula, rails e costuras',
        'Precisão das gráficas face aos ficheiros aprovados',
        'Completude de acessórios e kit',
        'Verificação de embalagem de retalho, código de barras e marcação dos cartões',
      ],
      confidentiality:
        'Por acordo, o nome do distribuidor e a sua lista de clientes não são divulgados. Este projeto é apresentado de forma anónima para proteger a confidencialidade comercial.',
      tags: ['Linha SUP touring', 'Gráficas personalizadas', 'Embalagem de retalho'],
    },
    {
      slug: 'fishing-sup-program',
      customerType: 'Retalhistas outdoor',
      region: 'América do Norte',
      productCategory: 'SUP insuflável de pesca',
      projectStage: 'Revisão do concept → Aprovação da amostra → Produção do programa',
      manufacturingScope: 'Configuração da plataforma, disposição dos acessórios, embalagem e produção',
      keyRequirements: 'Integração de acessórios de pesca, plataforma estável, kit organizado',
      qualityFocus: 'Estanquidade, ancoragem dos acessórios, precisão das gráficas, kit completo',
      navLabel: 'Programa SUP de pesca',
      metaTitle: 'Desenvolvimento SUP de pesca | Disposição dos acessórios e kit — iSupfactory',
      metaDescription:
        'Como a iSupfactory desenvolveu uma configuração SUP de pesca para um retalhista outdoor — disposição dos acessórios, kit organizado e embalagem pronta para o retalho num programa controlado.',
      kicker: 'Projeto pesca',
      h1: 'Desenvolvimento de um SUP de pesca para um retalhista outdoor — disposição dos acessórios e configuração do kit',
      intro: [
        'Um projeto SUP específico para a pesca: uma plataforma estável com zonas para acessórios de pesca, um kit organizado e uma embalagem pronta para o retalho — da revisão do concept à produção do programa.',
      ],
      industry: 'Marcas de retalho e outdoor',
      requirement: 'Uma configuração SUP de pesca com acessórios ancorados, kit organizado e embalagem de retalho, da revisão do concept à produção do programa.',
      challenge:
        'As pranchas de pesca exigem acessórios ancorados — suportes para canas de pesca, anéis em D e zonas para caixas — sem comprometer a estabilidade. O kit tinha de permanecer organizado a bordo e a embalagem tinha de apresentar claramente a categoria no retalho.',
      solution:
        'Uma plataforma larga e estável com zonas de acessórios definidas, anéis em D e bungees posicionados para o equipamento de pesca, um kit organizado com kit de reparação e uma embalagem de retalho desenvolvida num único programa controlado.',
      product: 'SUP insuflável de pesca — plataforma estável com zonas para acessórios de pesca, kit organizado e embalagem pronta para o retalho.',
      process: [
        { title: 'Revisão do concept', body: 'Utilização prevista, equipamento transportado e estrutura do kit definiram a configuração.' },
        { title: 'Disposição dos acessórios', body: 'Anéis em D, bungees e zonas de armazenamento posicionados no deck.' },
        { title: 'Aprovação da amostra', body: 'Estabilidade e ancoragem dos acessórios verificadas numa prancha física.' },
        { title: 'Produção do programa', body: 'Pontos de controlo de qualidade definidos, verificação do kit e lançamento do envio.' },
      ],
      result:
        'A configuração foi confirmada na amostra aprovada — ancoragem dos acessórios, estrutura do kit e embalagem alinhadas antes da produção — e o programa foi enviado com kits verificados.',
      outcome: 'Disposição dos acessórios e kit bloqueados na fase de amostra; kits verificados enviados.',
      customizations: [
        'Plataforma estável e larga com zonas para acessórios de pesca',
        'Posicionamento de suportes para canas, anéis em D e bungees',
        'Layout do deck para caixas e equipamento',
        'Seleção de pá, aletas e leash para o uso na pesca',
        'Kit de acessórios organizado e kit de reparação',
        'Embalagem de retalho para a categoria de SUP de pesca',
        'Código de barras e marcação dos cartões para o mercado-alvo',
      ],
      inspectionFocus: [
        'Verificação da ancoragem dos acessórios e do posicionamento dos anéis em D',
        'Verificação de insuflação e estanquidade',
        'Precisão de gráficas e layout do deck',
        'Completude do kit e configuração dos acessórios',
        'Verificação de embalagem de retalho e marcação dos cartões',
      ],
      confidentiality:
        'Por acordo, o nome do retalhista e os detalhes do canal não são divulgados. Este projeto é apresentado de forma anónima para proteger a confidencialidade comercial.',
      tags: ['Configuração de pesca', 'Disposição dos acessórios', 'Organização do kit'],
    },
    {
      slug: 'yoga-sup-program',
      customerType: 'Escolas e programas de desportos aquáticos',
      region: 'Europa',
      productCategory: 'SUP insuflável de yoga',
      projectStage: 'Revisão do programa → Aprovação da amostra → Entrega da frota',
      manufacturingScope: 'Configuração da plataforma estável, cobertura do deck, produção e embalagem do programa',
      keyRequirements: 'Estabilidade para a prática em grupo, cobertura completa do deck em EVA, frota coerente',
      qualityFocus: 'Cobertura do deck, estanquidade, precisão das gráficas, kit completo',
      navLabel: 'Programa SUP yoga',
      metaTitle: 'Desenvolvimento SUP yoga | Programa de treino — iSupfactory',
      metaDescription:
        'Como a iSupfactory desenvolveu uma configuração de SUP yoga estável para um programa de treino de desportos aquáticos — cobertura completa do deck e uma frota de programa coerente.',
      kicker: 'Projeto yoga',
      h1: 'Desenvolvimento de uma configuração de SUP yoga estável para um programa de treino de desportos aquáticos',
      intro: [
        'Uma configuração de SUP yoga para um programa de treino: uma plataforma larga e de grande volume com cobertura completa do deck em EVA, produzida como frota coerente para a prática em grupo.',
      ],
      industry: 'Educação e programas juvenis',
      requirement: 'Uma configuração de SUP yoga estável com cobertura completa do deck para a prática em grupo, em quantidades de programa.',
      challenge:
        'A prática de yoga exige uma plataforma larga e de grande volume que permaneça absolutamente estável na água. Os grupos precisam de pranchas coerentes e os instrutores de instruções claras e de uma arrumação gerível entre sessões.',
      solution:
        'Uma plataforma larga e de grande volume com cobertura completa do deck em EVA, uma configuração de frota coerente em todo o programa e instruções para os instrutores e etiquetas do programa incluídas.',
      product: 'SUP insuflável de yoga — plataforma estável com cobertura completa do pad do deck e frota de programa coerente.',
      process: [
        { title: 'Revisão do programa', body: 'Estilo de prática, dimensão do grupo e arrumação definiram a configuração.' },
        { title: 'Configuração', body: 'Plataforma, cobertura do deck e acabamentos definidos em toda a frota.' },
        { title: 'Aprovação da amostra', body: 'Estabilidade e cobertura do deck verificadas numa prancha física.' },
        { title: 'Entrega da frota', body: 'Quantidades de programa produzidas com verificação de kit e embalagem.' },
      ],
      result:
        'A frota foi enviada como uma única configuração coerente — cada prancha conforme a amostra aprovada em estabilidade, cobertura do deck e acabamentos — com as instruções incluídas para os instrutores.',
      outcome: 'Frota coerente conforme a amostra aprovada; embalagem do programa verificada.',
      customizations: [
        'Plataforma larga e de grande volume para estabilidade em pé',
        'Cobertura completa do deck em EVA em toda a área utilizável',
        'Layout do deck e posicionamento das correias para a prática',
        'Cor e acabamentos coerentes em toda a frota',
        'Instruções para os instrutores e etiquetas do programa',
        'Configuração de arrumação e embalagem do programa',
      ],
      inspectionFocus: [
        'Inspeção da cobertura do deck e da adesão do EVA',
        'Verificação de insuflação e estanquidade',
        'Verificação da estabilidade na amostra aprovada',
        'Coerência de gráficas e acabamentos em toda a série',
        'Completude do kit e controlos da embalagem do programa',
      ],
      confidentiality:
        'Por acordo, o nome do programa e a sua localização não são divulgados. Este projeto é apresentado de forma anónima para proteger a confidencialidade comercial.',
      tags: ['Configuração de yoga', 'Cobertura completa do deck', 'Frota de programa'],
    },
  ],
  nl: [
    {
      slug: 'coastal-rental-fleet',
      customerType: 'Verhuurvloot-exploitanten',
      region: 'Middellandse Zee — Spanje, Italië, Griekenland',
      productCategory: 'Opblaasbare SUP voor verhuur (10′6″ + 11′0″)',
      projectStage: 'Vlootevaluatie → Goedkeuring van het monster → Gefaseerde levering in 3 partijen',
      manufacturingScope: 'Vlootspecificatie, versterkte constructie, gefaseerde productie, levering van reserveonderdelen',
      keyRequirements: 'Duurzame verhuurborden, gefaseerde levering aan alle stations, lager percentage vroegtijdige vervanging',
      qualityFocus: 'Versterkte constructie, luchtdichtheid, vlootgraphics, complete uitrusting',
      navLabel: 'Kustverhuurvloot',
      metaTitle: 'Kustverhuurvloot | 320 planken in 120 dagen — iSupfactory',
      metaDescription:
        'Hoe een verhuurexploitant in de Middellandse Zee een kustvloot van 320 planken opbouwde in Spanje, Italië en Griekenland — drie gefaseerde partijen in 120 dagen en een geschatte vermindering van 20–25 % op vroegtijdige vervanging.',
      kicker: 'Kustverhuurproject',
      h1: 'Hoe een verhuurexploitant in de Middellandse Zee een kustvloot van 320 planken opbouwde in 120 dagen',
      intro: [
        'Een verhuurexploitant met stations in Spanje, Italië en Griekenland had een duurzame vloot nodig voor de zomer met hoge rotatie — geleverd in drie partijen, op tijd voor de opening van elk station.',
      ],
      industry: 'Verhuurvloot-exploitanten',
      requirement: '320 verhuurborden in twee maten — 10′6″ en 11′0″ — voor kuststations in drie landen, geleverd in drie gefaseerde partijen binnen 120 dagen.',
      challenge:
        'De dagelijkse verhuurrotatie slijt de planken snel en het percentage vroegtijdige vervanging van de exploitant lag rond de 20–25 %. De stations openden in drie landen op verschillende data: één enkele levering was geen optie, en een vloot in één maat ook niet.',
      solution:
        'Twee duurzame verhuurplatforms in de maten die de meeste verhuur afdekken, een versterkte constructie voor intensief gebruik en drie productiepartijen die op tijd bij de opening van elk station aankomen — met reserveonderdeelkits en een reparatiehandleiding per station.',
      product: 'Opblaasbare SUP voor verhuur — platforms van 10′6″ en 11′0″ met versterkte rails en UV-bestendige materialen, kits per station.',
      process: [
        { title: 'Vlootevaluatie', body: 'De openingsdata en het rotatievolume bepaalden de twee maten en de verdeling over de partijen.' },
        { title: 'Keuze van de planken', body: 'Verhuurplatforms van 10′6″ en 11′0″ gekozen voor dekkingsgraad van de verhuur en duurzaamheid.' },
        { title: 'Gefaseerde productie', body: 'Drie partijen afgestemd op de openingsdatum van elk station.' },
        { title: 'Levering en ondersteuning', body: 'Vloot per partij verzonden met reserveonderdeelkits en reparatiehandleiding per station.' },
      ],
      result:
        'Alle drie de partijen arriveerden binnen 120 dagen, in lijn met de opening van elk station. De versterkte platforms zouden het percentage vroegtijdige vervanging met circa 20–25 % moeten verlagen, en de reserveonderdeelkits dekken reparaties op locatie tussen de seizoenen.',
      outcome: '320 planken · 120 dagen · 3 partijen · ca. −20–25 % vroegtijdige vervanging.',
      metrics: [
        { value: '320', label: 'planken in twee maten' },
        { value: '120', label: 'dagen van bestelling tot laatste partij' },
        { value: '3', label: 'gefaseerde leveringen, één per stationsopening' },
        { value: '−20–25%', label: 'geschat percentage vroegtijdige vervanging' },
      ],
      takeaways: [
        'Gefaseerde partijen brengen de vloot precies op tijd bij de opening van elk station — geen inactieve voorraad, geen late start.',
        'Twee maten (10′6″ en 11′0″) dekten de meeste verhuur af zonder de vloot te fragmenteren.',
        'Voor het verlagen van vroegtijdige vervanging is de versterkte constructie doorslaggevend — niet alleen de prijs.',
        'De reserveonderdeelkits per station hielden de planken tussen de seizoenen operationeel.',
      ],
      customizations: [
        'Verhuurplatforms van 10′6″ en 11′0″ afgestemd op de verhuurprofielen',
        'Versterkte rails en UV-bestendige materialen voor intensief verhuurgebruik',
        'Vlootgraphics en nummering per station',
        'Productieplan in drie partijen afgestemd op de openingsdata van de stations',
        'Reserveonderdeelkits en reparatiehandleiding per station',
        'Verpakking voor gescheiden locaties en leveringsverificatie per partij',
      ],
      inspectionFocus: [
        'Controle van de versterkte constructie per plank',
        'Oppompen en luchtdichtheid van elke plank',
        'Nauwkeurigheid van vlootgraphics en stationsnummering',
        'Complete accessoires en reserveonderdeelkits per station',
        'Verpakkingscontroles voor zendingen naar gescheiden locaties in meerdere partijen',
      ],
      confidentiality:
        'In overleg worden de naam van de exploitant en de stationslocaties niet openbaar gemaakt. Dit project wordt anoniem gepresenteerd om de commerciële vertrouwelijkheid te beschermen.',
      tags: ['Gefaseerde vlootlevering', 'Constructie van verhuurkwaliteit', 'Lager vervangingspercentage'],
    },
    {
      slug: 'eu-distributor-private-label',
      customerType: 'Distributeurs en groothandels',
      region: 'Europa',
      productCategory: 'Opblaasbare SUP met private label (2 SKU)',
      projectStage: 'Assortimentsplanning → Goedkeuring van het monster → Volumevering binnen 90 dagen',
      manufacturingScope: 'Private-label branding, retailverpakking, serieproductie, ondersteuning bij herbestellingen',
      keyRequirements: 'Twee marktbewezen SKU\'s onder het merk van de distributeur, EU-retailverpakking, afstemming op de seizoensdata',
      qualityFocus: 'Nauwkeurigheid van de graphics, barcode en etiket per markt, complete uitrusting, luchtdichtheid',
      navLabel: 'Private label voor distributeurs',
      metaTitle: 'Private label voor EU-distributeur | 1,200 planken in 90 dagen — iSupfactory',
      metaDescription:
        'Hoe een Europese distributeur in 90 dagen een private-label SUP-lijn lanceerde met 1,200 planken — twee SKU\'s, EU-retailverpakking en een herbestelling in Q4 op dezelfde vastgelegde specificatie.',
      kicker: 'Private label project',
      h1: 'Hoe een Europese distributeur een private-label SUP-lijn lanceerde met 1,200 planken in 90 dagen',
      intro: [
        'Een Europese distributeur wilde een eigen SUP-lijn in de schappen voor het zomerseizoen — twee marktbewezen SKU\'s, complete retailverpakking en geen directe relaties met fabrikanten.',
      ],
      industry: 'Distributeurs en groothandels',
      requirement: '1,200 planken met eigen merk in twee SKU\'s — 10′6″ Allround en 12′6″ Touring — met EU-retailverpakking, geleverd binnen 90 dagen.',
      challenge:
        'Het zomerse verkoopvenster staat vast: alle 1,200 planken met bijbehorende verpakking moesten op tijd aankomen. De private-labelverpakking — barcodes, etiketten, handleidingen — moest voldoen aan de EU-retailvereisten en de distributeur kon niet rekenen op enige ervaring met SUP-fabrieken.',
      solution:
        'Twee marktbewezen platforms voor het retailassortiment, het volledige private-labelontwerp en de EU-retailverpakking beheerd in één programma, en een productieplanning die gezamenlijke verzending van beide SKU\'s binnen het venster van 90 dagen mogelijk maakt — met een vastgelegde specificatie voor een nette herbestelling.',
      product: 'Opblaasbare SUP met private label — 10′6″ Allround en 12′6″ Touring, met gemerkte peddel, pomp, rugzak en bedrukte retaildozen.',
      process: [
        { title: 'Assortimentsplanning', body: 'Twee SKU\'s geselecteerd — 10′6″ Allround en 12′6″ Touring — voor de retaildekking.' },
        { title: 'Goedkeuring van het monster', body: 'Graphics, verpakking en afwerking bevestigd op fysieke planken.' },
        { title: 'Productie binnen 90 dagen', body: 'Volumeproductie gepland om beide SKU\'s samen te verzenden voor het seizoensvenster.' },
        { title: 'Herbestelling in Q4', body: 'Herbestelling geplaatst op dezelfde vastgelegde specificatie.' },
      ],
      result:
        'Alle 1,200 planken met complete retailverpakking werden binnen 90 dagen verzonden, op tijd voor het zomerse verkoopvenster. De lijn verkocht volledig uit en de distributeur kwam in Q4 terug met een herbestelling op dezelfde vastgelegde specificatie.',
      outcome: '1,200 planken · 90 dagen · 2 SKU · herbestelling in Q4.',
      metrics: [
        { value: '1,200', label: 'planken in één lancering' },
        { value: '90', label: 'dagen tot volledige levering' },
        { value: '2', label: 'retail-SKU\'s, beide op tijd voor het venster' },
        { value: 'Q4', label: 'herbestelling op dezelfde specificatie' },
      ],
      takeaways: [
        'Starten met twee bewezen SKU\'s houdt het voorraadrisico laag en vult toch het retailassortiment.',
        'Eén programma voor planken, accessoires en verpakking elimineert een veelvoorkomende oorzaak van mislukte lanceringen.',
        'Een vaste seizoensdatum bepaalt de planning — de productieplanning moet dit als niet-onderhandelbaar behandelen.',
        'De specificatie bij de lancering vastleggen maakt herbestellingen netjes en consistent.',
      ],
      customizations: [
        'Allround-platforms van 10′6″ en touring-platforms van 12′6″ voor het retailassortiment',
        'Private-labelontwerp voor dek, onderkant en verpakking',
        'Gemerkte peddel, pomp en rugzak per SKU',
        'Bedrukte retaildozen, barcodes, etiketten en gebruikershandleiding voor de EU-retail',
        'Stuklijst en specificatie vastgelegd voor consistente herbestellingen',
        'Gefaseerde levering afgestemd op het lanceringvenster in de retail',
      ],
      inspectionFocus: [
        'Nauwkeurigheid van de graphics ten opzichte van de goedgekeurde private-labelbestanden',
        'Controle van barcode, etiket en handleiding per markt',
        'Complete uitrusting per SKU over de hele serie van 1,200 planken',
        'Steekproefsgewijze controles van de luchtdichtheid tijdens de productie',
        'Controle van doos en verpakking per SKU',
      ],
      confidentiality:
        'In overleg worden de naam van de distributeur en zijn retailklanten niet openbaar gemaakt. Dit project wordt anoniem gepresenteerd om de commerciële vertrouwelijkheid te beschermen.',
      tags: ['Private label', 'Retailassortiment van 2 SKU', 'Levering binnen het seizoensvenster'],
    },
    {
      slug: 'resort-sup-fleet',
      customerType: 'Resorts en horeca',
      region: 'Europa / Noord-Amerika',
      productCategory: 'Opblaasbare Allround-SUP',
      projectStage: 'Goedkeuring van het monster → Serieproductie → Vlootvernieuwing',
      manufacturingScope: 'Graphics, accessoires, verpakking en vlootproductie',
      keyRequirements: 'Duurzaamheid voor verhuur, compacte opslag, volledige branding van de accommodatie',
      qualityFocus: 'Luchtdichtheid, nauwkeurige graphics, complete accessoires, markering van de dozen',
      navLabel: 'SUP-vloot voor een luxe resort',
      metaTitle: 'SUP-vloot voor een luxe resort | 100 gemerkte planken — iSupfactory',
      metaDescription:
        'Hoe een luxe resort zijn strandprogramma uitrustte met 100 gemerkte SUP-planken — gepersonaliseerd ontwerp, constructie van verhuurkwaliteit en seizoensmatig vlootbeheer.',
      kicker: 'Resortproject',
      h1: 'Hoe een luxe resort een gemerkte SUP-vloot van 100 planken standaardiseerde',
      intro: [
        'Een luxe resort wilde dat het strandprogramma naadloos aansloot bij de accommodatie — gemerkte planken in de kleuren van het resort, robuust genoeg voor dagelijks gebruik door gasten en makkelijk op te slaan tussen de seizoenen.',
      ],
      industry: 'Resorts en horeca',
      requirement: '100 gemerkte SUP-planken voor verhuur aan gasten, in de kleuren van de accommodatie.',
      challenge:
        'De dagelijkse verhuur slijt standaardvloten snel en de opslagruimte buiten het seizoen is beperkt. Het resort had planken nodig die intensief gebruik aankunnen, compact op te slaan zijn en volledig de branding van de accommodatie dragen.',
      solution:
        'Opblaasbare constructie van verhuurkwaliteit met versterkte rails en UV-bestendige materialen, graphics over het volledige oppervlak in de kleuren van het resort en gemerkte peddels en pompen in het vlootpakket.',
      product: 'Gepersonaliseerde opblaasbare SUP — allroundplatform van 11′ met gemerkt dekontwerp en accessoires.',
      process: [
        { title: 'Vlootconsult', body: 'Gastenstromen, kustzone en seizoensduur bepaalden de omvang en samenstelling van de vloot.' },
        { title: 'Gemerkte monster', body: 'Kleuren en logo goedgekeurd op een fysieke plank vóór de productie.' },
        { title: 'Productie en kwaliteitscontrole', body: '100 planken geproduceerd met kwaliteitscontrole op meerdere punten over de hele serie.' },
        { title: 'Levering en vernieuwing', body: 'Seizoenslevering, reserveonderdelen en een vernieuwingsprogramma voor de volgende seizoenen.' },
      ],
      result:
        'De vloot ging op tijd van start voor het seizoen, de planken worden buiten het seizoen in één ruimte opgeslagen en de feedback van gasten over de gemerkte uitrusting leidde het jaar daarop tot uitbreiding van de vloot.',
      outcome: 'Stipte seizoenstart, 100% gemerkte vloot, uitbreiding in het volgende seizoen.',
      customizations: [
        'Plankplatform, maat en constructie geselecteerd voor dagelijks verhuurgebruik',
        'Ontwerp over het volledige dekoppervlak in de kleuren van de accommodatie',
        'Branding op de rails en logopositionering goedgekeurd op een fysiek monster',
        'Gemerkte peddel, pomp en accessoireset voor elke plank',
        'Vlootnummering en kleurcodering over de hele serie',
        'Compacte opslagconfiguratie en omvang van de seizoensvernieuwing',
      ],
      inspectionFocus: [
        'Oppompen en luchtdichtheid van elke plank',
        'Staat van het ventiel en de versterkte rails',
        'Nauwkeurigheid van de graphics en kleurovereenkomst met het goedgekeurde monster',
        'Complete accessoires en uitrusting per plank',
        'Doosmarkering en vlootetiketten vóór vrijgave van de zending',
      ],
      confidentiality:
        'In overleg worden de naam van het resort en de merkassets niet openbaar gemaakt. Dit project wordt anoniem gepresenteerd om de commerciële vertrouwelijkheid te beschermen.',
      tags: ['Gemerkte gastenvloot', 'Constructie van verhuurkwaliteit', 'Seizoensvernieuwing'],
    },
    {
      slug: 'private-label-launch',
      customerType: 'Retail- en outdoormerken',
      region: 'Europa',
      productCategory: 'Opblaasbare Allround-SUP (private label)',
      projectStage: 'Goedkeuring van het monster → Validatieserie → Opschaling',
      manufacturingScope: 'Product- en verpakkingsontwerp, monstername, productie, behoud van de matrijzen',
      keyRequirements: 'Verkoopbare lijn zonder intern SUP-ontwerp of -productie',
      qualityFocus: 'Versiebeheer van de graphics, nauwkeurige verpakking, complete uitrusting',
      navLabel: 'Lancering van het private-labelmerk',
      metaTitle: 'Private-label SUP-lancering | Merkextensie — iSupfactory',
      metaDescription:
        'Hoe een bestaand outdoormerk uitbreidde naar SUP met een private-label productlijn — van logo tot eerste container, met schaalbare MOQ.',
      kicker: 'Private label project',
      h1: 'Hoe een outdoormerk een private-label SUP-lijn lanceerde, van logo tot eerste container',
      intro: [
        'Een sportretailer met een gevestigd merk wilde uitbreiden naar peddelsporten zonder directe relaties met fabrikanten — een verkoopbare SUP-lijn onder eigen naam.',
      ],
      industry: 'Retail- en outdoormerken',
      requirement: 'Een private-label SUP-lijn — logo, kleuren en verpakking op beproefde platforms, met een eerste serie van 50 stuks.',
      challenge:
        'Geen intern SUP-ontwerpteam, geen productie-ervaring en een eerste bestelling die klein genoeg is om de markt te testen vóór opschaling.',
      solution:
        'Volledig product- en verpakkingsontwerp op basis van de merkassets, een validatieserie van 50 stuks en vervolgens opschaling op dezelfde gecontroleerde platforms — de matrijzen blijven van het merk.',
      product: 'Opblaasbare SUP met private label — gemerkt dek, peddel, pomp, rugzak en bedrukte dozen.',
      process: [
        { title: 'Merktopname', body: 'Logo, kleuren en merkrichtlijnen omgezet in board- en verpakkingsontwerp.' },
        { title: 'Goedkeuring van het monster', body: 'Het fysieke monster bevestigde de afwerking, kleuren en verpakking.' },
        { title: 'Validatieserie', body: 'Eerste serie van 50 stuks volledig verkocht vóór opschaling.' },
        { title: 'Opschaling', body: 'Productie in containervolumes met constante kwaliteit; het ontwerp is eigendom van het merk.' },
      ],
      result:
        'De lijn verkocht de validatieserie binnen één seizoen uit en schaalde op naar containervolumes — het merk bezit alle ontwerpen en matrijzen.',
      outcome: 'Gevalideerd in één seizoen, opgeschaald naar containervolumes.',
      customizations: [
        'Platforms, maten en kleuren van de planken afgestemd op de merklijn',
        'Ontwerp van dek, onderkant en verpakking op basis van de merkassets',
        'Gemerkte peddel, pomp, rugzak en accessoireset',
        'Bedrukte retaildozen en etiketlay-out',
        'Barcode en gebruikershandleiding voor de doelmarkt',
        'Eigendom van matrijzen en ontwerp blijft bij het merk',
      ],
      inspectionFocus: [
        'Overeenkomst van de graphicsversie met de goedgekeurde bestanden',
        'Nauwkeurigheid van kleuren en afwerking op het fysieke monster',
        'Controle van verpakking, barcode en handleiding',
        'Complete uitrusting over de hele validatieserie',
        'Steekproefsgewijze controles van de luchtdichtheid tijdens de productie',
      ],
      confidentiality:
        'In overleg worden de merknaam en commerciële details niet openbaar gemaakt. Dit project wordt anoniem gepresenteerd om de commerciële vertrouwelijkheid te beschermen.',
      tags: ['Merkextensie', 'Verpakkingsontwerp', 'Schaalbare MOQ'],
    },
    {
      slug: 'club-team-boards',
      customerType: 'Paddleclubs en -teams',
      region: 'Noord-Amerika',
      productCategory: 'Opblaasbare SUP voor training',
      projectStage: 'Goedkeuring van het monster → Vlootproductie → Herbestelling voor uitbreiding',
      manufacturingScope: 'Clubbranding, vlootproductie, ondersteuning bij reserveonderdelen',
      keyRequirements: 'Uniforme teamlook, beperkt budget, identieke toekomstige uitbreiding',
      qualityFocus: 'Nauwkeurige graphics, luchtdichtheid, complete uitrusting, consistente herbestellingen',
      navLabel: 'Teamboard voor de club',
      metaTitle: 'Club-SUP-teamboards | Gemerkte vlootvernieuwing — iSupfactory',
      metaDescription:
        'Hoe een paddleclub zijn vloot vernieuwde en actualiseerde met 25 gemerkte trainingsplanken — teamgraphics, ondersteuning bij reserveonderdelen en consistente herbestellingen.',
      kicker: 'Clubproject',
      h1: 'Hoe een paddleclub de branding van een trainingsvloot met 25 planken vernieuwde',
      intro: [
        'Een paddleclub vernieuwde zijn merk en had behoefte aan consistente uitrusting — een uniforme teamvloot voor trainingen en wedstrijden, zonder gemengde voorraad.',
      ],
      industry: 'Paddleclubs en -teams',
      requirement: '25 gemerkte trainingsplanken met naam, kleuren en logo van de club, plus reserveonderdelen.',
      challenge:
        'De bestaande vloot was gemengd en zonder merk; het budget was beperkt en voor toekomstige uitbreiding waren identieke, consistente planken nodig.',
      solution:
        'Clubbranding op elke plank, vlootvoorwaarden voor het volume en reserveonderdelen met reparatiehandleidingen om de levensduur van de planken te verlengen.',
      product: 'Gepersonaliseerde team-SUP — trainingsvorm met clubgraphics, reservevinnen en reparatiekit.',
      process: [
        { title: 'Clubscan', body: 'Ledenaantal, trainingstypes en huidige uitrusting gecontroleerd.' },
        { title: 'Keuze van de planken', body: 'Training- en beginnervormen afgestemd op het programma van de club.' },
        { title: 'Branding', body: 'Naam, kleuren en logo van de club toegepast op de hele vloot.' },
        { title: 'Levering en groei', body: 'Vloot geleverd met reserveonderdelen; identieke herbestelling voor uitbreiding.' },
      ],
      result:
        'De leden trainen met consistente gemerkte uitrusting en de club breidde de vloot in het volgende seizoen uit met een identieke herbestelling van dezelfde kwaliteit.',
      outcome: 'Uniforme vloot, identieke uitbreidingsherbestelling.',
      customizations: [
        'Training- en beginnerplatforms afgestemd op het programma van de club',
        'Naam, kleuren en logo van de club op de hele vloot',
        'Bordnummering en indeling op maat per trainingsgroep',
        'Reservevinnen en reparatiekits als vlootaccessoires',
        'Herbestelspecificatie vastgelegd voor identieke toekomstige uitbreiding',
      ],
      inspectionFocus: [
        'Nauwkeurigheid van de graphics van naam, kleuren en logo van de club',
        'Controle van oppompen en luchtdichtheid',
        'Complete accessoires en reparatiekits',
        'Kleurconsistentie over de hele serie van 25 planken',
      ],
      confidentiality:
        'In overleg worden de clubnaam en locatie niet openbaar gemaakt. Dit project wordt anoniem gepresenteerd om de commerciële vertrouwelijkheid te beschermen.',
      tags: ['Clubbranding', 'Vlootvoorwaarden', 'Ondersteuning bij reserveonderdelen'],
    },
    {
      slug: 'school-program-fleet',
      customerType: 'Onderwijs en jeugdprogramma\'s',
      region: 'Europa',
      productCategory: 'Opblaasbare SUP voor beginners en voor meerdere personen',
      projectStage: 'Programmaherziening → Goedkeuring van het monster → Vlootlevering',
      manufacturingScope: 'Pakketontwerp, productie, reserveonderdelen en ondersteuning bij vernieuwing',
      keyRequirements: 'Veiligheidsgerichte uitrusting, aantallen voor klassengroottes, beheer met beperkt personeel',
      qualityFocus: 'Stabiliteit, luchtdichtheid, complete accessoires, gebruikershandleiding',
      navLabel: 'Vloot voor schoolprogramma\'s',
      metaTitle: 'SUP-programma voor scholen | Beginervloot — iSupfactory',
      metaDescription:
        'Hoe een school een keuzevak peddelsport startte met een beginervloot van 15 planken en boards voor meerdere personen — veiligheidsgerichte uitrusting voor het onderwijs.',
      kicker: 'Schoolproject',
      h1: 'Hoe een school een beginervloot van 15 planken opzette voor het geven van peddelsport',
      intro: [
        'Een school die een keuzevak peddelsport startte, had behoefte aan stabiele, veilige uitrusting voor beginners, afgestemd op de klassen en makkelijk te beheren met beperkt personeel.',
      ],
      industry: 'Onderwijs en jeugdprogramma\'s',
      requirement: 'Een beginervloot geschikt voor klassengroottes, inclusief boards voor meerdere personen voor de eerste lessen.',
      challenge:
        'Gemengde vaardigheidsniveaus, strenge veiligheidseisen, schoolse inkoopcycli en een budget dat ook toekomstige cohorten moet dekken.',
      solution:
        'Brede, hoogvolumineuze beginnerboards en boards voor meerdere personen, programmavoorwaarden afgestemd op de klassengroottes en een duidelijke gebruikershandleiding voor de instructeurs.',
      product: 'Beginer-SUP-vloot — stabiele platforms met versterkte constructie voor een lange levensduur van het programma.',
      process: [
        { title: 'Programmaherziening', body: 'Klassengroottes, watergebied en instructeursopzet bepaalden het pakket.' },
        { title: 'Samenstellen van het pakket', body: 'Typen en aantallen planken afgestemd op het onderwijs.' },
        { title: 'Goedkeuring van het monster', body: 'Stabiliteit en constructie gecontroleerd op een fysieke plank.' },
        { title: 'Levering en vernieuwing', body: 'Bulklevering, reserveonderdelen en herbestellingen voor nieuwe cohorten.' },
      ],
      result:
        'Instructeurs meldden snellere vooruitgang in de eerste lessen op de stabiele platforms en het programma vernieuwde de uitrusting het jaar daarop met een passende herbestelling.',
      outcome: 'Snellere leercurve, uitrusting vernieuwd het jaar daarop.',
      customizations: [
        'Brede, hoogvolumineuze beginnerplatforms voor de eerste lessen',
        'Boards voor meerdere personen voor groepslessen',
        'Maat en aantal van de planken afgestemd op de klassengroottes',
        'Duidelijke gebruikershandleiding en leslabels',
        'Versterkte constructie voor een lange levensduur van het programma',
        'Specificatie voor bulklevering en herbestellingen ter vernieuwing',
      ],
      inspectionFocus: [
        'Controle van stabiliteit en dekconfiguratie',
        'Oppompen en luchtdichtheid van elke plank',
        'Complete accessoires per plank en klassenset',
        'Nauwkeurigheid van gebruikershandleiding en labels',
        'Doosmarkering en controles van de klassenset',
      ],
      confidentiality:
        'In overleg worden de schoolnaam en de regio niet openbaar gemaakt. Dit project wordt anoniem gepresenteerd om de commerciële vertrouwelijkheid te beschermen.',
      tags: ['Beginervloot', 'Programmastart', 'Herbestellingen'],
    },
    {
      slug: 'distributor-line-expansion',
      customerType: 'Distributeurs en groothandels',
      region: 'Twee exportregio\'s',
      productCategory: 'Opblaasbare SUP uit het middensegment (6 SKU)',
      projectStage: 'Assortimentsplanning → Goedkeuring van het monster → Levering aan meerdere markten',
      manufacturingScope: 'Planken, accessoires en retailverpakking in één programma',
      keyRequirements: 'Eén kwaliteitsverantwoordelijke, consistente branding, lagere voorraad per SKU',
      qualityFocus: 'Luchtdichtheid, nauwkeurige graphics, nauwkeurige barcodes en etiketten, conformiteit met de stuklijst',
      navLabel: 'Assortimentsuitbreiding voor distributeurs',
      metaTitle: 'SUP-assortimentsuitbreiding voor distributeurs | Programma van 6 SKU — iSupfactory',
      metaDescription:
        'Hoe een distributeur van watersporten een complete middenklasse SUP-lijn opbouwde met zes SKU\'s — één fabriek, één programma, geëxporteerd naar meerdere markten.',
      kicker: 'Distributeurproject',
      h1: 'Hoe een distributeur een SUP-lijn van 6 SKU lanceerde in twee markten',
      intro: [
        'Een distributeur van watersporten met kajaks en accessoires in het assortiment wilde een eigen lijn opblaasbare SUP\'s — zonder de levering van planken, peddels en pompen over meerdere fabrieken te verspreiden.',
      ],
      industry: 'Distributeurs en groothandels',
      requirement: 'Een middenklasse SUP-lijn van 6 SKU (van 10′6″ tot 12′6″ plus accessoiresets) met export naar twee regio\'s.',
      challenge:
        'Aparte fabrieken voor planken, peddels en pompen betekenden inconsistente branding, drie afzonderlijke leveringspunten en geen enkele kwaliteitsverantwoordelijke voor garantiegevallen.',
      solution:
        'Eén programma voor planken, accessoires en retailverpakking; gedeelde accessoiresets om de voorraad per SKU te verlagen; en leveringsopties afgestemd op de opzet van elke markt.',
      product: 'Zes gemerkte retail-SKU\'s — opblaasbare SUP-platforms met complete sets, in vakken verpakt in bedrukte dozen.',
      process: [
        { title: 'Assortimentsplanning', body: 'Marktgaten en prijspositioneringen bepaalden de zes SKU\'s en de inhoud van de bundels.' },
        { title: 'Uniforme branding', body: 'Eén ontwerpsysteem toegepast op planken, peddels, pompen en dozen.' },
        { title: 'Programmavoorwaarden', body: 'Volumeprijzen op het hele programma, niet per afzonderlijke SKU.' },
        { title: 'Levering per markt', body: 'Standaard exportvoorwaarden voor de thuismarkt, full-service voorwaarden voor de tweede markt.' },
      ],
      result:
        'De lijn werd in één seizoen in beide markten gelanceerd; de gedeelde accessoiresets verlaagden de voorraad en garantiegevallen werden opgelost via één aanspreekpunt in de fabriek.',
      outcome: 'Multi-markt lancering in één seizoen, lagere voorraad, één aanspreekpunt voor garantie.',
      customizations: [
        'Zes SKU\'s van 10′6″ tot 12′6″ plus accessoirebundels',
        'Eén ontwerpsysteem voor planken, peddels, pompen en dozen',
        'Gedeelde accessoiresets om de voorraad per SKU te verlagen',
        'Complete sets in vakken, verpakt in bedrukte retaildozen',
        'Barcode-, etiket- en handleidingversies voor elke doelmarkt',
        'Leveringsvoorwaarden en verpakking afgestemd op elke markt',
      ],
      inspectionFocus: [
        'Conformiteit met de stuklijst per SKU-configuratie',
        'Nauwkeurigheid van ontwerp en branding op de zes SKU\'s',
        'Nauwkeurigheid van barcodes en etiketten per markt',
        'Complete accessoiresets en verpakking in vakken',
        'Controle van de luchtdichtheid over de hele serie',
      ],
      confidentiality:
        'In overleg worden de distributeurnaam en het klantenbestand niet openbaar gemaakt. Dit project wordt anoniem gepresenteerd om de commerciële vertrouwelijkheid te beschermen.',
      tags: ['Multi-SKU-programma', 'Complete retailsets'],
    },
    {
      slug: 'startup-brand-zero-to-one',
      customerType: 'Startup-SUP-merken',
      region: 'Noord-Amerika',
      productCategory: 'Opblaasbare ODM Allround-SUP',
      projectStage: 'Concept → Proefproductie → Lanceringbestelling',
      manufacturingScope: 'ODM-ontwikkeling, graphics, verpakking, productie',
      keyRequirements: 'Eerste serie met lage MOQ, afstemming op de lanceringsdatum, matrijzen behouden door het merk',
      qualityFocus: 'Luchtdichtheid, nauwkeurige graphics, controle van de verpakking',
      navLabel: 'Startup-lancering 0→1',
      metaTitle: 'Lancering van een startup-SUP-merk | Van concept tot eerste serie — iSupfactory',
      metaDescription:
        'Hoe een SUP-startup van concept naar een uitverkochte eerste serie ging — ODM-ontwikkeling, een proefproductie van 10 stuks en vervolgens een gemerkte lanceringbestelling van 200 stuks.',
      kicker: 'Startupproject',
      h1: 'Van concept naar een uitverkochte lancering met 200 planken voor een startup-SUP-merk',
      intro: [
        'Twee oprichters met grote zichtbaarheid maar zonder fabriek wilden hun eigen SUP verkopen — een ODM-plank ontwikkeld volgens hun specificatie, met een lanceringbestelling die hen niet in de problemen zou brengen.',
      ],
      industry: 'Startup-SUP-merken',
      requirement: 'ODM-ontwikkeling met lage MOQ: proefproductie van 10 stuks ter validatie, daarna 200 stuks voor de lancering.',
      challenge:
        'Geen ontwerpteam, geen importervaring en een eerste bestelling die voor de meeste fabrieken te klein is — plus een lanceringsdatum die gekoppeld is aan het seizoen op het noordelijk halfrond.',
      solution:
        'ODM-ontwikkeling op basis van hun concept op een beproefd platform, een proefproductie van 10 stuks die monsters en levering controleerde, en vervolgens een gemerkte lanceringbestelling van 200 stuks — de matrijzen blijven van het merk.',
      product: 'Gemerkte opblaasbare ODM-SUP — gepersonaliseerd dekontwerp, verpakking en retailklare doosmaten.',
      process: [
        { title: 'Conceptgesprek', body: 'De doelgroep van de rider, prijspositionering en lanceringsdatum bepaalden het basisplatform.' },
        { title: 'Proefproductie', body: '10 stuks valideerden product en verpakking van begin tot einde.' },
        { title: 'Lanceringbestelling', body: '200 stuks geproduceerd met gecontroleerde graphics en doosspecificatie.' },
        { title: 'Opschalingspad', body: 'Matrijzen behouden door het merk; herbestellingen tegen betere voorwaarden.' },
      ],
      result:
        'De eerste serie was binnen enkele weken na het begin van het seizoen uitverkocht; de feedback van de proefproductie verholp een verpakkingsprobleem voordat de grote bestelling in productie ging.',
      outcome: 'Uitverkochte lancering, verpakking gecorrigeerd vóór opschaling, herbestelpad opgebouwd.',
      customizations: [
        'ODM-plank ontwikkeld vanuit het merkconcept op een beproefd platform',
        'Gepersonaliseerd dekontwerp en merkverpakking',
        'Retailklare doosmaten voor de lanceringbestelling',
        'Accessoireset en configuratie afgestemd op de doelgroep van de rider',
        'De matrijzen en het ontwerp blijven van het merk',
        'Productieplanning afgestemd op de lanceringsdatum',
      ],
      inspectionFocus: [
        'Nauwkeurigheid van de graphics ten opzichte van de goedgekeurde bestanden',
        'Controle van de luchtdichtheid op proefproductie en lanceringbestelling',
        'Controle van verpakking en dozen — inclusief de correctie uit de proefproductie',
        'Complete accessoires en uitrusting',
      ],
      confidentiality:
        'In overleg worden de merknaam en de lanceringsdetails niet openbaar gemaakt. Dit project wordt anoniem gepresenteerd om de commerciële vertrouwelijkheid te beschermen.',
      tags: ['ODM-ontwikkeling', 'Proefproductie met lage MOQ', 'Planning op basis van de seizoensdatum'],
    },
    {
      slug: 'rental-fleet-multi-site',
      customerType: 'Verhuurvloot-exploitanten',
      region: 'Noord-Amerika',
      productCategory: 'Opblaasbare Allround-SUP van verhuurkwaliteit',
      projectStage: 'Vlootaudit → Uniforme productie → Seizoensvernieuwing',
      manufacturingScope: 'Vlootspecificatie, productie, reserveonderdeelkits, vernieuwingsprogramma',
      keyRequirements: 'Eén uniforme plank op alle locaties, duurzaamheid onder verhuurbelasting',
      qualityFocus: 'Controle van de versterkte constructie, luchtdichtheid, complete uitrusting',
      navLabel: 'Verhuurvloot voor meerdere locaties',
      metaTitle: 'Uitbreiding van de verhuurvloot | 200 planken, 3 locaties — iSupfactory',
      metaDescription:
        'Hoe een verhuurvloot-exploitant met meerdere locaties gemengde voorraad verving door 200 uniforme planken op drie locaties — vlootvoorwaarden, seizoensvernieuwing en levering van reserveonderdelen.',
      kicker: 'Verhuurproject',
      h1: 'Standaardiseren van een verhuurvloot van 200 planken op drie locaties voor een vlootexploitant',
      intro: [
        'Een verhuurvloot-exploitant met drie waterlocaties had één uniforme vloot nodig in plaats van gemengde voorraad — dezelfde plank op elke locatie, met prijzen op basis van het vlootvolume.',
      ],
      industry: 'Verhuurvloot-exploitanten',
      requirement: '200 planken van verhuurkwaliteit op drie locaties, met seizoensvernieuwing en op locatie te repareren reserveonderdelen.',
      challenge:
        'Gemengde, verouderde voorraad bemoeilijkte reparaties en prijzen; verhuurbelasting vereist een versterkte constructie en buiten het seizoen is de opslag verspreid over drie locaties.',
      solution:
        'Eén platform van verhuurkwaliteit op alle locaties met versterkte rails en UV-bestendige materialen, vlootvoorwaarden op het volume van 200 planken en een reserveonderdeelkit met reparatiehandleiding per locatie.',
      product: 'Opblaasbare SUP van verhuurkwaliteit — allroundplatform van 11′ met versterkte constructie en reparatiekit.',
      process: [
        { title: 'Vlootaudit', body: 'Volumes en gebruiksprofielen per locatie bepaalden de verdeling over de locaties.' },
        { title: 'Uniforme specificatie', body: 'Eén plank overal — eenvoudigere reparaties, prijzen en training.' },
        { title: 'Vlootvoorwaarden', body: 'Volumekorting op de gecombineerde bestelling van 200 planken.' },
        { title: 'Reserveonderdelen en vernieuwing', body: 'Reserveonderdeelkits per locatie plus een gedefinieerde seizoensgebonden vervangingscyclus.' },
      ],
      result:
        'De uniforme vloot nam de onzekerheid over reparaties per locatie weg, de gecombineerde bestellingen ontgrendelden de vlootvoorwaarden en het programma van 200 planken werd de basis voor de seizoensvernieuwing.',
      outcome: 'Uniforme werking, lagere eenheidskosten, herhaalbare seizoenscyclus.',
      customizations: [
        'Eén platform van verhuurkwaliteit op alle drie de locaties',
        'Versterkte rails en UV-bestendige materialen voor verhuurbelasting',
        'Verdeling per locatie en vlootnummering per vestiging',
        'Reserveonderdeelkits per locatie met reparatiehandleiding',
        'Gedefinieerde seizoensgebonden vervangingscyclus',
      ],
      inspectionFocus: [
        'Controle van de versterkte constructie per plank',
        'Oppompen en luchtdichtheid van elke plank',
        'Complete accessoires en reparatiekits per locatie',
        'Nauwkeurigheid van vlootnummering en locatielabels',
        'Verpakkingscontroles voor zendingen naar meerdere locaties',
      ],
      confidentiality:
        'In overleg worden de naam van de exploitant en de locaties niet openbaar gemaakt. Dit project wordt anoniem gepresenteerd om de commerciële vertrouwelijkheid te beschermen.',
      tags: ['Vloot voor meerdere locaties', 'Constructie van verhuurkwaliteit', 'Seizoensvernieuwing'],
    },
    {
      slug: 'touring-sup-range',
      customerType: 'Outdoor- en watersportdistributeurs',
      region: 'Europa',
      productCategory: 'Opblaasbare touring-SUP',
      projectStage: 'Productbrief → Goedkeuring van het monster → Serieproductie',
      manufacturingScope: 'Platformreview, graphics, configuratie van de accessoires, retailverpakking en productie',
      keyRequirements: 'Touringprestaties, projectspecifieke graphics, complete retailkit',
      qualityFocus: 'Luchtdichtheid, nauwkeurige graphics, complete accessoires, markering van de dozen',
      navLabel: 'Touring-SUP-lijn',
      metaTitle: 'Ontwikkeling van een touring-SUP-lijn | Outdoordistributeur — iSupfactory',
      metaDescription:
        'Hoe iSupfactory een touring-SUP-lijn ondersteunde voor een Europese outdoordistributeur — platformreview, projectspecifieke graphics, configuratie van de accessoires en retailverpakking.',
      kicker: 'Touringproject',
      h1: 'Ontwikkeling van een touring-SUP-lijn voor een Europese outdoordistributeur',
      intro: [
        'Een gepersonaliseerd project voor opblaasbare SUP\'s met platformreview, projectspecifieke graphics, configuratie van de accessoires, retailverpakking en kwaliteitsplanning — van de goedkeuring van het monster tot de voorbereiding van de verzending.',
      ],
      industry: 'Distributeurs en groothandels',
      requirement: 'Een touring-SUP-lijn met projectspecifieke graphics, configuratie van de accessoires en retailverpakking, beheerd van de goedkeuring van het monster tot de verzending.',
      challenge:
        'Touringpeddelaars verwachten stabiliteit bij hoge snelheid en een voorspelbare glij, dus platform, maten en volume moesten vóór de productie worden gecontroleerd. De graphics moesten rekening houden met rails, EVA en ventielen, en elke retailkit moest volledig aankomen over de hele lijn.',
      solution:
        'Controle van platform en maten voor touringprestaties, projectspecifieke graphics afgestemd op de kenmerken van de plank, een accessoireconfiguratie met peddel, leash en tas, planning van de retailverpakking en gecontroleerde serieproductie met gedefinieerde kwaliteitscontrolepunten.',
      product: 'Touring-lijn van opblaasbare SUP\'s — platform met hoge prestaties met gepersonaliseerd ontwerp, complete accessoirekit en retailklare verpakking.',
      process: [
        { title: 'Platformreview', body: 'Touringmaten, volume en railprofiel afgestemd op de doelgroep en de markt.' },
        { title: 'Specificatie en graphics', body: 'Technische specificatie, afstemming van de graphics en door de klant goedgekeurde stuklijst voorbereid.' },
        { title: 'Goedkeuring van het monster', body: 'Constructie, graphics en kit bevestigd op een fysieke plank.' },
        { title: 'Productie en inspectie', body: 'Serieproductie met kwaliteitscontrolepunten, controle van de verpakking en vrijgave van de zending.' },
      ],
      result:
        'De lijn ging van de goedkeuring van het monster naar de voorbereiding van de verzending met gecontroleerde documentatie van product, graphics, stuklijst en verpakking — het goedgekeurde monster diende als referentie voor productie en eindcontrole.',
      outcome: 'Gecontroleerd pad van monster naar productie; graphics en verpakking vastgelegd vóór de productie.',
      customizations: [
        'Touringplatform, maten en volumeconfiguratie',
        'Projectspecifieke graphics voor dek, onderkant en rails',
        'Lay-out van het EVA-pad en kleurconfiguratie',
        'Vinsysteem, bungee-indeling en accessoireset',
        'Gemerkte tas, handleidingversie en retailverpakking',
        'Doosmarkering en barcodevereisten voor de doelmarkt',
      ],
      inspectionFocus: [
        'Controle van oppompen en luchtdichtheid',
        'Inspectie van ventiel, rails en naden',
        'Nauwkeurigheid van de graphics ten opzichte van de goedgekeurde bestanden',
        'Complete accessoires en uitrusting',
        'Controle van retailverpakking, barcode en doosmarkering',
      ],
      confidentiality:
        'In overleg worden de distributeurnaam en het klantenbestand niet openbaar gemaakt. Dit project wordt anoniem gepresenteerd om de commerciële vertrouwelijkheid te beschermen.',
      tags: ['Touring-SUP-lijn', 'Gepersonaliseerde graphics', 'Retailverpakking'],
    },
    {
      slug: 'fishing-sup-program',
      customerType: 'Outdoorretailers',
      region: 'Noord-Amerika',
      productCategory: 'Opblaasbare vis-SUP',
      projectStage: 'Conceptherziening → Goedkeuring van het monster → Programmeproductie',
      manufacturingScope: 'Configuratie van het platform, indeling van de accessoires, verpakking en productie',
      keyRequirements: 'Integratie van visaccessoires, stabiel platform, georganiseerde kit',
      qualityFocus: 'Luchtdichtheid, verankering van de accessoires, nauwkeurige graphics, complete kit',
      navLabel: 'Vis-SUP-programma',
      metaTitle: 'Ontwikkeling van een vis-SUP | Indeling van de accessoires en kit — iSupfactory',
      metaDescription:
        'Hoe iSupfactory een vis-SUP-configuratie ontwikkelde voor een outdoorretailer — indeling van de accessoires, georganiseerde kit en retailklare verpakking in één gecontroleerd programma.',
      kicker: 'Visproject',
      h1: 'Ontwikkeling van een vis-SUP voor een outdoorretailer — indeling van de accessoires en kitconfiguratie',
      intro: [
        'Een project voor een visspecifieke SUP: een stabiel platform met zones voor visaccessoires, een georganiseerde kit en retailklare verpakking — van conceptherziening tot programmeproductie.',
      ],
      industry: 'Retail- en outdoormerken',
      requirement: 'Een vis-SUP-configuratie met verankerde accessoires, georganiseerde kit en retailverpakking, van conceptherziening tot programmeproductie.',
      challenge:
        'Visboards vereisen verankerde accessoires — hengelhouders, D-ringen en zones voor kratten — zonder de stabiliteit in gevaar te brengen. De kit moest aan boord georganiseerd blijven en de verpakking moest de categorie in de retail duidelijk presenteren.',
      solution:
        'Een breed, stabiel platform met gedefinieerde accessoirezones, D-ringen en bungees gepositioneerd voor visuitrusting, een georganiseerde kit met reparatiekit en een retailverpakking ontwikkeld in één gecontroleerd programma.',
      product: 'Opblaasbare vis-SUP — stabiel platform met zones voor visaccessoires, georganiseerde kit en retailklare verpakking.',
      process: [
        { title: 'Conceptherziening', body: 'Beoogd gebruik, meegevoerde uitrusting en kitstructuur bepaalden de configuratie.' },
        { title: 'Indeling van de accessoires', body: 'D-ringen, bungees en opbergzones gepositioneerd op het dek.' },
        { title: 'Goedkeuring van het monster', body: 'Stabiliteit en verankering van de accessoires gecontroleerd op een fysieke plank.' },
        { title: 'Programmeproductie', body: 'Gedefinieerde kwaliteitscontrolepunten, controle van de kit en vrijgave van de zending.' },
      ],
      result:
        'De configuratie werd bevestigd op het goedgekeurde monster — verankering van de accessoires, kitstructuur en verpakking afgestemd vóór de productie — en het programma werd verzonden met gecontroleerde kits.',
      outcome: 'Indeling van de accessoires en kit vastgelegd in de monsterfase; gecontroleerde kits verzonden.',
      customizations: [
        'Stabiel, breed platform met zones voor visaccessoires',
        'Positionering van hengelhouders, D-ringen en bungees',
        'Decklay-out voor kratten en uitrusting',
        'Selectie van peddel, vinnen en leash voor vissen',
        'Georganiseerde accessoirekit en reparatiekit',
        'Retailverpakking voor de categorie vis-SUP',
        'Barcode en doosmarkering voor de doelmarkt',
      ],
      inspectionFocus: [
        'Controle van de verankering van de accessoires en de positionering van de D-ringen',
        'Controle van oppompen en luchtdichtheid',
        'Nauwkeurigheid van graphics en decklay-out',
        'Complete kit en configuratie van de accessoires',
        'Controle van retailverpakking en doosmarkering',
      ],
      confidentiality:
        'In overleg worden de naam van de retailer en de kanaaldetails niet openbaar gemaakt. Dit project wordt anoniem gepresenteerd om de commerciële vertrouwelijkheid te beschermen.',
      tags: ['Visconfiguratie', 'Indeling van de accessoires', 'Georganiseerde kit'],
    },
    {
      slug: 'yoga-sup-program',
      customerType: 'Watersportscholen en -programma\'s',
      region: 'Europa',
      productCategory: 'Opblaasbare yoga-SUP',
      projectStage: 'Programmaherziening → Goedkeuring van het monster → Vlootlevering',
      manufacturingScope: 'Configuratie van het stabiele platform, dekbekleding, productie en programmavenpakking',
      keyRequirements: 'Stabiliteit voor groepsbeoefening, volledige EVA-dekbekleding, consistente vloot',
      qualityFocus: 'Dekbekleding, luchtdichtheid, nauwkeurige graphics, complete uitrusting',
      navLabel: 'Yoga-SUP-programma',
      metaTitle: 'Yoga-SUP-ontwikkeling | Trainingsprogramma — iSupfactory',
      metaDescription:
        'Hoe iSupfactory een stabiele yoga-SUP-configuratie ontwikkelde voor een watersporttrainingsprogramma — volledige dekbekleding en een consistente programmavloot.',
      kicker: 'Yogaproject',
      h1: 'Ontwikkeling van een stabiele yoga-SUP-configuratie voor een watersporttrainingsprogramma',
      intro: [
        'Een yoga-SUP-configuratie voor een trainingsprogramma: een breed, hoogvolumineus platform met volledige EVA-dekbekleding, geproduceerd als een consistente vloot voor groepsbeoefening.',
      ],
      industry: 'Onderwijs en jeugdprogramma\'s',
      requirement: 'Een stabiele yoga-SUP-configuratie met volledige dekbekleding voor groepsbeoefening, in programmawantallen.',
      challenge:
        'De yogabeoefening vereist een breed, hoogvolumineus platform dat absoluut stabiel blijft in het water. Groepen hebben consistente planken nodig en instructeurs duidelijke instructies en beheersbare opslag tussen de sessies.',
      solution:
        'Een breed, hoogvolumineus platform met volledige EVA-dekbekleding, een consistente vlootconfiguratie voor het hele programma en instructies voor de instructeurs plus programmalabels inbegrepen.',
      product: 'Opblaasbare yoga-SUP — stabiel platform met volledige bedekking van het dekpad en een consistente programmavloot.',
      process: [
        { title: 'Programmaherziening', body: 'Praktijkstijl, groepsomvang en opslag bepaalden de configuratie.' },
        { title: 'Configuratie', body: 'Platform, dekbekleding en afwerking vastgesteld over de hele vloot.' },
        { title: 'Goedkeuring van het monster', body: 'Stabiliteit en dekbekleding gecontroleerd op een fysieke plank.' },
        { title: 'Vlootlevering', body: 'Programmawantallen geproduceerd met controle van kit en verpakking.' },
      ],
      result:
        'De vloot werd verzonden als één consistente configuratie — elke plank conform het goedgekeurde monster op het gebied van stabiliteit, dekbekleding en afwerking — met de instructies voor de instructeurs inbegrepen.',
      outcome: 'Consistente vloot conform het goedgekeurde monster; programmavenpakking gecontroleerd.',
      customizations: [
        'Breed, hoogvolumineus platform voor stabiliteit in staande houding',
        'Volledige EVA-dekbekleding over het gehele bruikbare oppervlak',
        'Decklay-out en positionering van de banden voor de beoefening',
        'Consistente kleur en afwerking over de hele vloot',
        'Instructies voor de instructeurs en programmalabels',
        'Opslagconfiguratie en programmavenpakking',
      ],
      inspectionFocus: [
        'Inspectie van de dekbekleding en de EVA-hechting',
        'Controle van oppompen en luchtdichtheid',
        'Controle van de stabiliteit op het goedgekeurde monster',
        'Consistentie van graphics en afwerking over de hele serie',
        'Complete uitrusting en controles van de programmavenpakking',
      ],
      confidentiality:
        'In overleg worden de naam van het programma en de locatie niet openbaar gemaakt. Dit project wordt anoniem gepresenteerd om de commerciële vertrouwelijkheid te beschermen.',
      tags: ['Yogaconfiguratie', 'Volledige dekbekleding', 'Programmavloot'],
    },
  ],
  sv: [
    {
      slug: 'coastal-rental-fleet',
      customerType: 'Uthyrningsflottoperatörer',
      region: 'Medelhavet — Spanien, Italien, Grekland',
      productCategory: 'Uthyrningsklass uppblåsbart SUP (10′6″ + 11′0″)',
      projectStage: 'Flottutvärdering → Provgodkännande → Fasad leverans i 3 partier',
      manufacturingScope: 'Flottspecifikation, förstärkt konstruktion, fasad produktion, reservdelsförsörjning',
      keyRequirements: 'Hållbara uthyrningsbrädor, fasad leverans till stationerna, lägre tidig utbytesfrekvens',
      qualityFocus: 'Förstärkt konstruktion, lufttäthet, flottgrafik, komplett kit',
      navLabel: 'Kustuthyrningsflotta',
      metaTitle: 'Kustuthyrningsflotta | 320 brädor på 120 dagar — iSupfactory',
      metaDescription:
        'Hur en medelhavsuthyrningsoperatör byggde en kustflotta på 320 brädor i Spanien, Italien och Grekland — tre faserade partier på 120 dagar, med en beräknad minskning av tidiga utbyten på 20–25 %.',
      kicker: 'Kustuthyrningsprojekt',
      h1: 'Så byggde en medelhavsuthyrningsoperatör en kustflotta på 320 brädor på 120 dagar',
      intro: [
        'En kustuthyrningsoperatör med stationer i Spanien, Italien och Grekland behövde en hållbar flotta för högsäsongen på sommaren — levererad i tre partier, i tid för varje stations öppning.',
      ],
      industry: 'Uthyrningsflottoperatörer',
      requirement: '320 uthyrningsbrädor i två storlekar — 10′6″ och 11′0″ — till kuststationer i tre länder, levererade i tre faserade partier inom 120 dagar.',
      challenge:
        'Daglig uthyrningsrotation sliter snabbt på brädorna, och operatörens tidiga utbytesfrekvens låg på 20–25 %. Stationerna öppnade på olika datum i tre länder, så en enda leverans funkade inte — och inte heller en flotta i en enda storlek.',
      solution:
        'Två hållbara uthyrningsplattformar i storlekar som täcker de flesta hyresgäster, förstärkt konstruktion för hög rotationspåfrestning och tre produktionspartier schemalagda att anlända vid varje stations öppning — med reservdelspaket och reparationsvägledning per station.',
      product: 'Uthyrningsklass uppblåsbart SUP — 10′6″- och 11′0″-plattformar med förstärkta fat och UV-stabila material, kit per station.',
      process: [
        { title: 'Flottutvärdering', body: 'Stationernas öppningar och rotationsvolymer bestämde de två storlekarna och partifördelningen.' },
        { title: 'Brädval', body: '10′6″- och 11′0″-uthyrningsplattformar valda för täckning och hållbarhet.' },
        { title: 'Fasad produktion', body: 'Tre partier schemalagda mot varje stations öppningsdatum.' },
        { title: 'Leverans & support', body: 'Flottan skickades per parti med reservdelspaket och reparationsvägledning per station.' },
      ],
      result:
        'Alla tre partier anlände inom 120 dagar, tajmade mot varje stations öppning. De förstärkta plattformarna förväntas minska den tidiga utbytesfrekvensen med beräknat 20–25 %, med reservdelspaket som täcker fältreparationer mellan säsongerna.',
      outcome: '320 brädor · 120 dagar · 3 partier · beräknat −20–25 % tidiga utbyten.',
      metrics: [
        { value: '320', label: 'brädor i två storlekar' },
        { value: '120', label: 'dagar från order till sista parti' },
        { value: '3', label: 'faserade leveranser, en per stationsöppning' },
        { value: '−20–25%', label: 'beräknad tidig utbytesfrekvens' },
      ],
      takeaways: [
        'Faserade partier låter en flotta anlända exakt när varje station öppnar — inget outnyttjat lager, ingen sen start.',
        'Två storlekar (10′6″ och 11′0″) täckte de flesta hyresgäster utan att fragmentera flottan.',
        'Det är den förstärkta konstruktionen som påverkar tidigt utbyte, inte bara priset.',
        'Reservdelspaket per station höll brädorna i drift mellan hela säsonger.',
      ],
      customizations: [
        '10′6″- och 11′0″-uthyrningsplattformar anpassade till hyresgästprofiler',
        'Förstärkta fat och UV-stabila material för hög rotationsanvändning',
        'Flottgrafik och numrering per station',
        'Produktionsschema i tre partier anpassat till stationsöppningar',
        'Reservdelspaket och reparationsvägledning per station',
        'Paketering vid flera anläggningar och leveransverifiering per parti',
      ],
      inspectionFocus: [
        'Verifiering av förstärkt konstruktion per bräda',
        'Uppblåsning och lufttäthet på varje bräda',
        'Flottgrafik och korrekt stationsnumrering',
        'Kompletta tillbehör och reservdelspaket per station',
        'Paketeringskontroller för fleranläggnings- och flerpartileverans',
      ],
      confidentiality:
        'Efter överenskommelse offentliggörs inte operatörens namn och stationernas lägen. Detta projekt presenteras anonymt för att skydda kommersiell sekretess.',
      tags: ['Fasad flottleverans', 'Uthyrningsklass konstruktion', 'Lägre utbytesfrekvens'],
    },
    {
      slug: 'eu-distributor-private-label',
      customerType: 'Distributörer & grossister',
      region: 'Europa',
      productCategory: 'Private label uppblåsbart SUP (2 SKU)',
      projectStage: 'Sortimentsplanering → Provgodkännande → Volymleverans på 90 dagar',
      manufacturingScope: 'Private label-märkning, detaljhandelsförpackning, volymproduktion, ombeställningsstöd',
      keyRequirements: 'Två marknadsbeprövade SKU under distributörens eget varumärke, EU-detaljhandelsförpackning, anpassning till säsongsdatum',
      qualityFocus: 'Grafisk precision, streckkod och etikett per marknad, komplett kit, lufttäthet',
      navLabel: 'Distributör private label',
      metaTitle: 'EU-distributör private label | 1 200 brädor på 90 dagar — iSupfactory',
      metaDescription:
        'Hur en europeisk distributör lanserade en private label-SUP-linje på 1 200 brädor på 90 dagar — två SKU, EU-detaljhandelsförpackning och en upprepad Q4-order på samma låsta specifikation.',
      kicker: 'Private label-projekt',
      h1: 'Så lanserade en europeisk distributör en private label-SUP-linje på 1 200 brädor på 90 dagar',
      intro: [
        'En europeisk distributör ville ha en egen märkt SUP-linje i butikshyllan till sommarsäsongen — två marknadsbeprövade SKU, komplett detaljhandelsförpackning och inga egna fabriksrelationer.',
      ],
      industry: 'Distributörer & grossister',
      requirement: '1 200 märkta brädor i två SKU — 10′6″ allround och 12′6″ touring — med EU-detaljhandelsförpackning, levererade på 90 dagar.',
      challenge:
        'Sommarsäsongens butiksfönster är fast, så alla 1 200 brädor och deras förpackningar måste anlända tillsammans i tid. Private label-förpackningar — streckkoder, etiketter, manualer — måste matcha EU:s detaljhandelskrav, och distributören hade ingen erfarenhet av SUP-fabriker att luta sig mot.',
      solution:
        'Två marknadsbeprövade plattformar valda för sortimentet, komplett private label-grafik och EU-detaljhandelsförpackning hanterade i ett program, och produktionen schemalagd så att båda SKU levererades tillsammans inom 90-dagarsfönstret — med specifikationen låst för en snygg upprepad order.',
      product: 'Private label uppblåsbart SUP — 10′6″ allround och 12′6″ touring, med märkt paddel, pump, ryggsäck och tryckta detaljhandelskartonger.',
      process: [
        { title: 'Sortimentsplanering', body: 'Två SKU valda — 10′6″ allround och 12′6″ touring — för detaljhandelstäckning.' },
        { title: 'Provgodkännande', body: 'Grafik, förpackning och finish bekräftade på fysiska brädor.' },
        { title: 'Produktion på 90 dagar', body: 'Volymen schemalagd så att båda SKU levererades tillsammans för säsongsfönstret.' },
        { title: 'Q4-ombeställning', body: 'Upprepad order lagd på samma låsta specifikation.' },
      ],
      result:
        'Alla 1 200 brädor med komplett detaljhandelsförpackning levererades inom 90 dagar, i tid för sommarens butiksfönster. Linjen sålde slut och distributören återkom i Q4 med en upprepad order på samma låsta specifikation.',
      outcome: '1 200 brädor · 90 dagar · 2 SKU · upprepad Q4-order.',
      metrics: [
        { value: '1,200', label: 'brädor i en lansering' },
        { value: '90', label: 'dagar till full leverans' },
        { value: '2', label: 'detaljhandels-SKU, båda i tid för fönstret' },
        { value: 'Q4', label: 'upprepad order på samma spec' },
      ],
      takeaways: [
        'Att börja med två beprövade SKU håller lagerrisken låg samtidigt som sortimentet fyller hyllan.',
        'Ett program som täcker brädor, tillbehör och förpackning eliminerar en vanlig lanseringsfälla.',
        'Ett fast säsongsdatum styr schemat — produktionsplaneringen måste behandla det som icke förhandlingsbart.',
        'Att låsa specifikationen vid lansering gör upprepade ordrar rena och konsekventa.',
      ],
      customizations: [
        '10′6″ allround- och 12′6″ touringplattformar för sortimentet',
        'Private label-grafik för däck, botten och förpackning',
        'Märkt paddel, pump och ryggsäck per SKU',
        'Tryckta detaljhandelskartonger, streckkoder, etiketter och bruksanvisning för EU-detaljhandel',
        'BOM och specifikation låsta för konsekventa upprepade ordrar',
        'Batchleverans anpassad till lanseringsfönstret',
      ],
      inspectionFocus: [
        'Grafisk precision mot godkända private label-filer',
        'Streckkods-, etikett- och manualverifiering per marknad',
        'Komplett kit per SKU genom hela 1 200-brädserieserien',
        'Stickprovskontroller av lufttäthet under produktionen',
        'Kartong- och paketeringsverifiering per SKU',
      ],
      confidentiality:
        'Efter överenskommelse offentliggörs inte distributörens namn och detaljhandelskunder. Detta projekt presenteras anonymt för att skydda kommersiell sekretess.',
      tags: ['Private label', 'Sortiment med 2 SKU', 'Leverans inom säsongsfönstret'],
    },
    {
      slug: 'resort-sup-fleet',
      customerType: 'Resort & hotellverksamhet',
      region: 'Europa / Nordamerika',
      productCategory: 'Allround uppblåsbart SUP',
      projectStage: 'Provgodkännande → Volymproduktion → Flottuppfräschning',
      manufacturingScope: 'Grafik, tillbehör, paketering och flottproduktion',
      keyRequirements: 'Uthyrningshållbarhet, kompakt förvaring, full märkning av anläggningen',
      qualityFocus: 'Lufttäthet, grafisk precision, kompletta tillbehör, kartongmärkning',
      navLabel: 'SUP-flotta för lyxresort',
      metaTitle: 'SUP-flotta för lyxresort | 100 märkta brädor — iSupfactory',
      metaDescription:
        'Hur en lyxresort utrustade sitt strandprogram med 100 märkta SUP-brädor — anpassad grafik, uthyrningsklass konstruktion och säsongsbaserad flotthantering.',
      kicker: 'Resortprojekt',
      h1: 'Så standardiserade en lyxresort en märkt SUP-flotta på 100 brädor',
      intro: [
        'En lyxresort ville att strandprogrammet skulle kännas som en del av anläggningen — märkta brädor i resortens färgpalett, hållbara nog för daglig gästanvändning och lätta att förvara mellan säsongerna.',
      ],
      industry: 'Resort & hotellverksamhet',
      requirement: '100 märkta SUP-brädor för gästuthyrning, i anläggningens färgpalett.',
      challenge:
        'Daglig uthyrning sliter snabbt på generiska flottor, och förvaringsutrymmet utanför säsongen är begränsat. Resorten behövde brädor som klarar hård användning, förvaras kompakt och bär full märkning av anläggningen.',
      solution:
        'Uppblåsbar konstruktion i uthyrningsklass med förstärkta fat och UV-beständiga material, helbrädesgrafik i resortens färger samt märkta paddlar och pumpar som en del av flottpaketet.',
      product: 'Anpassat uppblåsbart SUP — 11′ allroundplattform, märkt däckgrafik och tillbehör.',
      process: [
        { title: 'Flottkonsultation', body: 'Gästvolym, strandlinje och säsongslängd bestämde flottstorlek och brädblandning.' },
        { title: 'Märkt prov', body: 'Färger och logotyp godkända på en fysisk bräda före produktion.' },
        { title: 'Produktion & kvalitetskontroll', body: '100 brädor producerade med kvalitetskontroll på flera punkter genom hela serien.' },
        { title: 'Leverans & uppfräschning', body: 'Säsongsleverans, reservdelar och ett uppfräschningsprogram för kommande säsonger.' },
      ],
      result:
        'Flottan lanserades i tid för säsongen, brädorna förvaras i ett enda rum utanför säsongen, och gästernas feedback på den märkta utrustningen ledde till en flottutökning året därpå.',
      outcome: 'Lansering i tid, 100 % märkt flotta, utökning nästa säsong.',
      customizations: [
        'Bräpplattform, storlek och konstruktion valda för daglig uthyrning',
        'Helbrädesgrafik i anläggningens färgpalett',
        'Fat-märkning och logoplacering godkända på ett fysiskt prov',
        'Märkt paddel, pump och tillbehörsset till varje bräda',
        'Flottnumrering och färgkodning genom hela serien',
        'Kompakt förvaringskonfiguration och säsongsvis uppfräschning',
      ],
      inspectionFocus: [
        'Uppblåsning och lufttäthet på varje bräda',
        'Ventil- och förstärkt fat-skick',
        'Grafisk precision och färgmatchning mot godkänt prov',
        'Kompletta tillbehör och kit per bräda',
        'Kartongmärkning och flottetiketter före leveransgodkännande',
      ],
      confidentiality:
        'Efter överenskommelse offentliggörs inte resortens namn och varumärkestillgångar. Detta projekt presenteras anonymt för att skydda kommersiell sekretess.',
      tags: ['Märkt gästflotta', 'Uthyrningsklass konstruktion', 'Säsongsvis uppfräschning'],
    },
    {
      slug: 'private-label-launch',
      customerType: 'Detaljhandel- & outdoorvarumärken',
      region: 'Europa',
      productCategory: 'Allround uppblåsbart SUP (private label)',
      projectStage: 'Provgodkännande → Valideringsserie → Skalning',
      manufacturingScope: 'Produkt- och förpackningsgrafik, provning, produktion, verktygsbevarande',
      keyRequirements: 'Säljbar linje utan egen SUP-design eller tillverkning',
      qualityFocus: 'Versionskontroll av grafik, förpackningsprecision, komplett kit',
      navLabel: 'Private label-varumärkeslansering',
      metaTitle: 'Private label-SUP-lansering | Varumärkesutvidgning — iSupfactory',
      metaDescription:
        'Hur ett befintligt outdoorvarumärke utvidgade till SUP med en private label-produktlinje — från logotyp till första container, med skalbart MOQ.',
      kicker: 'Private label-projekt',
      h1: 'Så lanserade ett outdoorvarumärke en private label-SUP-linje från logotyp till första container',
      intro: [
        'En sportåterförsäljare med ett etablerat varumärke ville utvidga till paddelsport utan att bygga fabriksrelationer — en säljbar SUP-linje under eget namn.',
      ],
      industry: 'Detaljhandel- & outdoorvarumärken',
      requirement: 'En private label-SUP-linje — logotyp, färger och förpackning på beprövade plattformar, första serie på 50 st.',
      challenge:
        'Inget internt SUP-designteam, ingen tillverkningserfarenhet och en första order tillräckligt liten för att testa marknaden innan skalning.',
      solution:
        'Komplett produkt- och förpackningsgrafik utvecklad från varumärkets tillgångar, en valideringsserie på 50 st och sedan skalning på samma verifierade plattformar med verktyg bevarade för varumärket.',
      product: 'Private label uppblåsbart SUP — märkt däck, paddel, pump, ryggsäck och tryckta kartonger.',
      process: [
        { title: 'Varumärkesinläsning', body: 'Logotyp, färger och varumärkesriktlinjer förvandlades till bräd- och förpackningsgrafik.' },
        { title: 'Provgodkännande', body: 'Fysiskt prov bekräftade finish, färger och förpackning.' },
        { title: 'Valideringsserie', body: 'Första serie på 50 st såldes slut innan skalning.' },
        { title: 'Skalning', body: 'Produktion i containerorder med jämn kvalitet, designer ägda av varumärket.' },
      ],
      result:
        'Linjen sålde slut genom sin valideringsserie inom en säsong och skalerade till en containerorder — med varumärket som ägare av alla designer och verktyg.',
      outcome: 'Validerad på en säsong, skalad till containerordrar.',
      customizations: [
        'Bräpplattformar, storlekar och färger kartlagda mot varumärkeslinjen',
        'Däck-, botten- och förpackningsgrafik byggd från varumärkestillgångar',
        'Märkt paddel, pump, ryggsäck och tillbehörskit',
        'Tryckta detaljhandelskartonger och etikettlayout',
        'Streckkods- och bruksanvisningsversion för målmarknaden',
        'Verktygs- och grafikägande bevarat för varumärket',
      ],
      inspectionFocus: [
        'Grafikversion matchar de godkända filerna',
        'Färg- och finishprecision på det fysiska provet',
        'Förpacknings-, streckkods- och manualverifiering',
        'Komplett kit genom hela valideringsserien',
        'Stickprovskontroller av lufttäthet under produktionen',
      ],
      confidentiality:
        'Efter överenskommelse offentliggörs inte varumärkesnamnet och kommersiella detaljer. Detta projekt presenteras anonymt för att skydda kommersiell sekretess.',
      tags: ['Varumärkesutvidgning', 'Förpackningsdesign', 'Skalbart MOQ'],
    },
    {
      slug: 'club-team-boards',
      customerType: 'Paddlingsklubbar & lag',
      region: 'Nordamerika',
      productCategory: 'Tränings-uppblåsbart SUP',
      projectStage: 'Provgodkännande → Flottproduktion → Utökningsombeställning',
      manufacturingScope: 'Klubbmärkning, flottproduktion, reservdelsstöd',
      keyRequirements: 'Enhetlig lagprofil, stram budget, identisk framtida utökning',
      qualityFocus: 'Grafisk precision, lufttäthet, komplett kit, ombeställningskonsistens',
      navLabel: 'Klubblagets brädor',
      metaTitle: 'Klubblagets SUP-brädor | Uppfräschning av märkt flotta — iSupfactory',
      metaDescription:
        'Hur en paddlingsklubb lanserade ny profil och fräschade upp sin flotta med 25 märkta träningsbrädor — laggrafik, reservdelsstöd och jämna ombeställningar.',
      kicker: 'Klubbprojekt',
      h1: 'Så lanserade en paddlingsklubb ny profil för en träningsflotta på 25 brädor',
      intro: [
        'En paddlingsklubb lanserade en ny profil och behövde utrustning som matchade — en enhetlig lagflotta för träning och regattor, utan oenhetligt lager.',
      ],
      industry: 'Paddlingsklubbar & lag',
      requirement: '25 märkta träningsbrädor med klubbnamn, färger och logotyp, plus reservdelar.',
      challenge:
        'Den befintliga flottan var oenhetlig och omärkt; budgetarna var strama och framtida utökning krävde identiskt matchande lager.',
      solution:
        'Klubbmärkning på varje bräda, flottpris för volymen samt reservdelar + reparationsvägledning för att förlänga brädornas livslängd.',
      product: 'Anpassat lag-SUP — träningsform med klubbgrafik, plus reservfenor och reparationskit.',
      process: [
        { title: 'Klubbinläsning', body: 'Medlemskap, sessionstyper och nuvarande utrustning granskade.' },
        { title: 'Brädval', body: 'Tränings- och nybörjarformer matchade mot klubbprogrammet.' },
        { title: 'Märkning', body: 'Klubbnamn, färger och logotyp tryckta på hela flottan.' },
        { title: 'Leverans & tillväxt', body: 'Flotta levererad med delar; identisk ombeställning för utökning.' },
      ],
      result:
        'Medlemmarna tränar på matchande märkt utrustning, och klubben utökade flottan nästa säsong med en identisk ombeställning i samma kvalitet.',
      outcome: 'Enhetlig flotta, identisk utökningsombeställning.',
      customizations: [
        'Tränings- och nybörjarplattformar matchade mot klubbprogrammet',
        'Klubbnamn, färger och logotyp tryckta på hela flottan',
        'Brädnumrering och storleksgruppering per träningsgrupp',
        'Reservfenor och reparationskit som flotttillbehör',
        'Ombeställningsspecifikation låst för identisk framtida utökning',
      ],
      inspectionFocus: [
        'Grafisk precision för klubbnamn, färger och logotyp',
        'Verifiering av uppblåsning och lufttäthet',
        'Kompletta tillbehör och reparationskit',
        'Färgkonsistens genom hela 25-brädserieserien',
      ],
      confidentiality:
        'Efter överenskommelse offentliggörs inte klubbens namn och läge. Detta projekt presenteras anonymt för att skydda kommersiell sekretess.',
      tags: ['Klubbmärkning', 'Flottpris', 'Reservdelsstöd'],
    },
    {
      slug: 'school-program-fleet',
      customerType: 'Utbildning & ungdomsprogram',
      region: 'Europa',
      productCategory: 'Nybörjar- & flerpersons-uppblåsbart SUP',
      projectStage: 'Programgranskning → Provgodkännande → Flottleverans',
      manufacturingScope: 'Paketdesign, produktion, reservdelar och förnyelsestöd',
      keyRequirements: 'Säkerhetsfokuserad utrustning, kvantiteter för klassstorlekar, begränsad personalhantering',
      qualityFocus: 'Stabilitet, lufttäthet, kompletta tillbehör, användarvägledning',
      navLabel: 'Skolprogramflotta',
      metaTitle: 'SkolSUP-program | Nybörjarflotta — iSupfactory',
      metaDescription:
        'Hur en skola lanserade en paddelsportvalbar kurs med en nybörjarflotta på 15 brädor och flerpersonsbrädor — säkerhetsfokuserad utrustning för undervisning.',
      kicker: 'Skolprojekt',
      h1: 'Så lanserade en skola en nybörjarflotta på 15 brädor för paddelsportsundervisning',
      intro: [
        'En skola som lanserade en paddelsportvalbar kurs behövde utrustning som är stabil och säker för nybörjare, anpassad till klassernas storlek och lätt att hantera med begränsad personal.',
      ],
      industry: 'Utbildning & ungdomsprogram',
      requirement: 'En nybörjarflotta för klassstorlekar, inklusive flerpersonsbrädor för första lektionerna.',
      challenge:
        'Blandade nivåer, strikta säkerhetskrav, skolans upphandlingscykler och en budget som måste täcka framtida kullar.',
      solution:
        'Breda högvolymiga nybörjarbrädor och flerpersonsbrädor, programpriser matchade mot klasskvantiteterna och tydlig användarvägledning för instruktörer.',
      product: 'Nybörjar-SUP-flotta — stabila plattformar med förstärkt konstruktion för lång programlivslängd.',
      process: [
        { title: 'Programgranskning', body: 'Klassstorlekar, vattenområde och instruktörsupplägg bestämde paketet.' },
        { title: 'Paketbyggnad', body: 'Brädtyper och kvantiteter anpassade till undervisningen.' },
        { title: 'Provgodkännande', body: 'Stabilitet och konstruktion verifierade på en fysisk bräda.' },
        { title: 'Leverera & förnya', body: 'Bulkleverans, reservdelar och ombeställningar för nya kullar.' },
      ],
      result:
        'Instruktörerna rapporterade snabbare framsteg under första passet på de stabila plattformarna, och programmet förnyade utrustningen med en matchande ombeställning året därpå.',
      outcome: 'Snabbare inlärningskurva, förnyad utrustning året därpå.',
      customizations: [
        'Breda, högvolymiga nybörjarplattformar för första passen',
        'Flerpersonsbrädor inkluderade för grupplektioner',
        'Brädstorlek och kvantitet anpassade till klassstorlekarna',
        'Tydlig användarvägledning och instruktionsetiketter',
        'Förstärkt konstruktion för lång programlivslängd',
        'Bulkleverans- och förnyelseombeställningsspecifikation',
      ],
      inspectionFocus: [
        'Verifiering av stabilitet och däckkonfiguration',
        'Uppblåsning och lufttäthet på varje bräda',
        'Kompletta tillbehör per bräda och klasskit',
        'Användarvägledning och korrekt märkning',
        'Kartongmärkning och paketeringskontroller av klasskit',
      ],
      confidentiality:
        'Efter överenskommelse offentliggörs inte skolans namn och region. Detta projekt presenteras anonymt för att skydda kommersiell sekretess.',
      tags: ['Nybörjarflotta', 'Programlansering', 'Förnyelseordrar'],
    },
    {
      slug: 'distributor-line-expansion',
      customerType: 'Distributörer & grossister',
      region: 'Två exportregioner',
      productCategory: 'Mellanklass uppblåsbart SUP (6 SKU)',
      projectStage: 'Sortimentsplanering → Provgodkännande → Leverans till flera marknader',
      manufacturingScope: 'Brädor, tillbehör och detaljhandelsförpackning i ett program',
      keyRequirements: 'En kvalitetsägare, konsekvent märkning, minskat lager per SKU',
      qualityFocus: 'Lufttäthet, grafisk precision, streckkods- och etikettprecision, BOM-matchning',
      navLabel: 'Distributörens linjeutökning',
      metaTitle: 'Distributörens SUP-linjeutökning | 6-SKU-program — iSupfactory',
      metaDescription:
        'Hur en vattensportdistributör lade till ett komplett mellanklass-SUP-sortiment i sex SKU — en fabrik, ett program, exporterat till flera marknader.',
      kicker: 'Distributörsprojekt',
      h1: 'Så lanserade en distributör ett 6-SKU-SUP-sortiment på två marknader',
      intro: [
        'En vattensportdistributör som förde kajaker och tillbehör ville ha ett eget uppblåsbart SUP-sortiment — utan att fragmentera leveransen över flera fabriker för brädor, paddlar och pumpar.',
      ],
      industry: 'Distributörer & grossister',
      requirement: 'Ett mellanklass-SUP-sortiment i sex SKU (10′6″ till 12′6″ plus tillbehörskit), med export till två regioner.',
      challenge:
        'Separerade fabriker för brädor, paddlar och pumpar innebar oenhetlig märkning, tre separata leveranspunkter och ingen enskild kvalitetsägare för garantiärenden.',
      solution:
        'Ett program som täcker brädor, tillbehör och detaljhandelsförpackning; delade tillbehörskit för att minska lagret per SKU; och leveransalternativ anpassade till varje marknads upplägg.',
      product: 'Sex märkta detaljhandels-SKU — uppblåsbara SUP-plattformar med kompletta kit i fackpaketerade tryckta kartonger.',
      process: [
        { title: 'Sortimentsplanering', body: 'Marknadsluckor och prispunkter bestämde de sex SKU och paketens innehåll.' },
        { title: 'Enhetlig märkning', body: 'Ett designsystem tillämpat på brädor, paddlar, pumpar och kartonger.' },
        { title: 'Programpris', body: 'Volympris över hela programmet, inte per SKU.' },
        { title: 'Leverans till flera marknader', body: 'Standardexportvillkor för hemregionen, fullservicevillkor för den andra marknaden.' },
      ],
      result:
        'Sortimentet lanserades på båda marknaderna på en säsong; delade tillbehörskit minskade anlänt lager, och garantiärenden löstes genom en enda fabrikskontakt.',
      outcome: 'Flermarknadslansering på en säsong, lägre anlänt lager, en enda garantipunkt.',
      customizations: [
        'Sex SKU från 10′6″ till 12′6″ plus tillbehörskitpaket',
        'Ett designsystem tillämpat på brädor, paddlar, pumpar och kartonger',
        'Delade tillbehörskit för att minska lagret per SKU',
        'Kompletta kit i fackpaketerade tryckta detaljhandelskartonger',
        'Streckkods-, etikett- och manualversioner per målmarknad',
        'Leveransvillkor och förpackningsupplägg anpassade till varje marknad',
      ],
      inspectionFocus: [
        'BOM-matchning per SKU-konfiguration',
        'Grafisk och märkningsprecision över de sex SKU',
        'Streckkods- och etikettprecision per marknad',
        'Kompletta tillbehörskit och fackpaketering',
        'Lufttäthetsverifiering genom hela serien',
      ],
      confidentiality:
        'Efter överenskommelse offentliggörs inte distributörens namn och kundlista. Detta projekt presenteras anonymt för att skydda kommersiell sekretess.',
      tags: ['FlersKU-program', 'Kompletta detaljhandelskit'],
    },
    {
      slug: 'startup-brand-zero-to-one',
      customerType: 'Startup-SUP-varumärken',
      region: 'Nordamerika',
      productCategory: 'ODM allround uppblåsbart SUP',
      projectStage: 'Koncept → Provserie → Lanseringorder',
      manufacturingScope: 'ODM-utveckling, grafik, förpackning, produktion',
      keyRequirements: 'Första serie med lågt MOQ, anpassning till lanseringsdatum, verktyg bevarade för varumärket',
      qualityFocus: 'Lufttäthet, grafisk precision, förpackningsverifiering',
      navLabel: 'Startup-varumärke 0→1 lansering',
      metaTitle: 'Lansering av startup-SUP-varumärke | Från koncept till första sats — iSupfactory',
      metaDescription:
        'Hur ett SUP-startup gick från koncept till en utsåld första sats — ODM-utveckling, en provserie på 10 brädor och sedan en märkt lanseringorder på 200 brädor.',
      kicker: 'Startupprojekt',
      h1: 'Från koncept till en utsåld lansering på 200 brädor för ett startup-SUP-varumärke',
      intro: [
        'Två grundare med en publik men ingen fabrik ville sälja ett eget SUP — en ODM-bräda utvecklad efter deras specifikation, med en lanseringsorder som inte skulle sänka dem.',
      ],
      industry: 'Startup-SUP-varumärken',
      requirement: 'ODM-utveckling med lågt MOQ: en provserie på 10 st för validering, sedan 200 st för lansering.',
      challenge:
        'Inget designteam, ingen importerfarenhet och en första order för liten för de flesta fabriker — plus ett lanseringsdatum kopplat till säsongen på norra halvklotet.',
      solution:
        'ODM-utveckling från deras koncept på en beprövad plattform, en provserie på 10 st som täcker prover och leveransverifiering, och sedan en märkt lanseringorder på 200 st med verktyg bevarade för varumärket.',
      product: 'Märkt ODM-uppblåsbart SUP — anpassad däckgrafik, förpackning och butiksredo kartongstorlekar.',
      process: [
        { title: 'Konceptsamtal', body: 'Målpaddlaren, prispunkten och lanseringsdatumet bestämde basplattformen.' },
        { title: 'Provserie', body: '10 st bevisade produkt och förpackning från början till slut.' },
        { title: 'Lanseringorder', body: '200 st producerade med verifierad grafik och kartongspec.' },
        { title: 'Skalningsväg', body: 'Verktyg bevarade för varumärket; ombeställningar till förbättrade priser.' },
      ],
      result:
        'Den första satsen sålde slut inom några veckor efter säsongstarten; feedback från provserien åtgärdade ett förpackningsproblem innan den stora ordern gick i produktion.',
      outcome: 'Utsåld lanseringssats, förpackning åtgärdad före skalning, ombeställningsväg på plats.',
      customizations: [
        'ODM-bräda utvecklad från varumärkeskonceptet på en beprövad plattform',
        'Anpassad däckgrafik och varumärkesförpackning',
        'Butiksredo kartongstorlekar för lanseringordern',
        'Tillbehörsset och kitkonfiguration anpassade till målpaddlaren',
        'Verktyg och grafik bevarade för varumärket',
        'Produktionsschema anpassat till lanseringsdatumet',
      ],
      inspectionFocus: [
        'Grafisk precision mot de godkända filerna',
        'Lufttäthetsverifiering på provserien och lanseringordern',
        'Förpacknings- och kartongverifiering — inklusive åtgärden från provserien',
        'Kompletta tillbehör och kit',
      ],
      confidentiality:
        'Efter överenskommelse offentliggörs inte varumärkesnamnet och lanseringsdetaljerna. Detta projekt presenteras anonymt för att skydda kommersiell sekretess.',
      tags: ['ODM-utveckling', 'Provserie med lågt MOQ', 'Säsongsdatumplanering'],
    },
    {
      slug: 'rental-fleet-multi-site',
      customerType: 'Uthyrningsflottoperatörer',
      region: 'Nordamerika',
      productCategory: 'Uthyrningsklass allround uppblåsbart SUP',
      projectStage: 'Flottgranskning → Enhetlig produktion → Säsongsvis uppfräschning',
      manufacturingScope: 'Flottspecifikation, produktion, reservdelspaket, uppfräschningsprogram',
      keyRequirements: 'En enhetlig bräda på alla anläggningar, hållbarhet för uthyrningsslitage',
      qualityFocus: 'Verifiering av förstärkt konstruktion, lufttäthet, komplett kit',
      navLabel: 'Uthyrningsflotta på flera anläggningar',
      metaTitle: 'Utökning av uthyrningsflotta | 200 brädor, 3 anläggningar — iSupfactory',
      metaDescription:
        'Hur en fleranläggningsuthyrningsoperatör ersatte oenhetligt lager med 200 enhetliga brädor på tre platser — flottpris, säsongsvis uppfräschning och reservdelsförsörjning.',
      kicker: 'Uthyrningsprojekt',
      h1: 'Standardisering av en uthyrningsflotta på 200 brädor över tre anläggningar för en flottoperatör',
      intro: [
        'En uthyrningsoperatör som driver tre vattennära platser behövde en enhetlig flotta istället för oenhetligt lager — samma bräda på alla anläggningar, prissatt för flottvolym.',
      ],
      industry: 'Uthyrningsflottoperatörer',
      requirement: '200 uthyrningsbrädor i klass på tre anläggningar, med säsongsvis uppfräschning och fältreparerbara delar.',
      challenge:
        'Oenhetligt åldrande lager komplicerade reparationer och prissättning; uthyrningsslitage kräver förstärkt konstruktion, och förvaringen utanför säsongen är uppdelad på tre anläggningar.',
      solution:
        'En uthyrningsklassplattform på alla anläggningar med förstärkta fat och UV-stabila material, flottpris på 200-brädvolymen och ett reservdelspaket med reparationsvägledning per anläggning.',
      product: 'Uthyrningsklass uppblåsbart SUP — 11′ allroundplattform med förstärkt konstruktion och reparationskit.',
      process: [
        { title: 'Flottgranskning', body: 'Platsvolym och utnyttjandediagram bestämde fördelningen mellan platserna.' },
        { title: 'Enhetlig spec', body: 'En bräda överallt — enklare reparationer, prissättning och utbildning.' },
        { title: 'Flottpris', body: 'Volymrabatt över den kombinerade 200-brädordern.' },
        { title: 'Delar & uppfräschning', body: 'Reservdelspaket per anläggning, plus en definierad säsongscykel för utbyte.' },
      ],
      result:
        'Den enhetliga flottan minskade reparationsförvirringen per anläggning, kombinerad beställning låste upp flottpriset, och 200-brädprogrammet blev baslinjen för säsongsvis förnyelse.',
      outcome: 'Enhetlig drift, lägre kostnad per enhet, repeterbar säsongscykel.',
      customizations: [
        'En uthyrningsklassplattform på alla tre anläggningarna',
        'Förstärkta fat och UV-stabila material för uthyrningsslitage',
        'Platsfördelning och flottnumrering per plats',
        'Reservdelspaket per anläggning med reparationsvägledning',
        'Definierad säsongscykel för utbyte',
      ],
      inspectionFocus: [
        'Verifiering av förstärkt konstruktion per bräda',
        'Uppblåsning och lufttäthet på varje bräda',
        'Kompletta tillbehör och reparationskit per anläggning',
        'Flottnumrering och korrekt märkning per anläggning',
        'Paketeringskontroller för leverans till flera anläggningar',
      ],
      confidentiality:
        'Efter överenskommelse offentliggörs inte operatörens namn och platser. Detta projekt presenteras anonymt för att skydda kommersiell sekretess.',
      tags: ['Flotta på flera anläggningar', 'Uthyrningsklass konstruktion', 'Säsongsvis förnyelse'],
    },
    {
      slug: 'touring-sup-range',
      customerType: 'Outdoor- & vattensportdistributörer',
      region: 'Europa',
      productCategory: 'Touring uppblåsbart SUP',
      projectStage: 'Produktbrief → Provgodkännande → Volymproduktion',
      manufacturingScope: 'Plattformsgranskning, grafik, tillbehörskonfiguration, detaljhandelsförpackning och produktion',
      keyRequirements: 'Touringprestanda, projektspecifik grafik, komplett detaljhandelskit',
      qualityFocus: 'Lufttäthet, grafisk precision, kompletta tillbehör, kartongmärkning',
      navLabel: 'Touring-SUP-sortiment',
      metaTitle: 'Utveckling av touring-SUP-sortiment | Outdoor-distributör — iSupfactory',
      metaDescription:
        'Hur iSupfactory stödde ett touring-SUP-sortiment för en europeisk outdoor-distributör — plattformsgranskning, projektspecifik grafik, tillbehörskonfiguration och detaljhandelsförpackning.',
      kicker: 'Touringprojekt',
      h1: 'Utveckling av ett touring-SUP-sortiment för en europeisk outdoor-distributör',
      intro: [
        'Ett skräddarsytt uppblåsbart SUP-projekt som täcker plattformsgranskning, projektspecifik grafik, tillbehörskonfiguration, detaljhandelsförpackning och kvalitetsplanering — från provgodkännande till leveransförberedelse.',
      ],
      industry: 'Distributörer & grossister',
      requirement: 'Ett touring-SUP-sortiment med projektspecifik grafik, tillbehörskonfiguration och detaljhandelsförpackning, kontrollerat från provgodkännande till leverans.',
      challenge:
        'Touringpaddlare förväntar sig stabilitet i fart och förutsägbar glid, så plattformen, måtten och volymen måste granskas före produktion. Grafiken måste anpassas kring fat, EVA och ventiler, och varje detaljhandelskit måste komma komplett genom hela sortimentet.',
      solution:
        'Plattforms- och måttgranskning för touringprestanda, projektspecifik grafik anpassad till brädans funktioner, en tillbehörskonfiguration som täcker paddel, lina och väska, planering av detaljhandelsförpackning och kontrollerad volymproduktion med definierade kvalitetskontrollpunkter.',
      product: 'Touring-SUP-sortiment — prestandaplattform med anpassad grafik, komplett tillbehörskit och butiksredo förpackning.',
      process: [
        { title: 'Plattformsgranskning', body: 'Touringmått, volym och fatprofil matchade mot målpaddlaren och marknaden.' },
        { title: 'Specifikation & grafik', body: 'Teknisk spec, grafikanpassning och kundgodkänd BOM förberedda.' },
        { title: 'Provgodkännande', body: 'Konstruktion, grafik och kit bekräftade på en fysisk bräda.' },
        { title: 'Produktion & inspektion', body: 'Volymproduktion med kvalitetskontrollpunkter, paketeringsverifiering och leveransgodkännande.' },
      ],
      result:
        'Sortimentet gick från provgodkännande till leveransförberedelse under kontrollerad produkt-, grafik-, BOM- och paketeringsdokumentation — det godkända provet tjänade som referens för produktion och slutinspektion.',
      outcome: 'Kontrollerad väg från prov till produktion; grafik och paketering låsta före produktion.',
      customizations: [
        'Touringplattform, mått och volymkonfiguration',
        'Projektspecifik topp-, botten- och fatgrafik',
        'EVA-padlayout och färgkonfiguration',
        'Fensystem, bungeelayout och tillbehörsset',
        'Märkt väska, bruksanvisningsversion och detaljhandelsförpackning',
        'Kartongmärkning och streckkodskrav för målmarknaden',
      ],
      inspectionFocus: [
        'Verifiering av uppblåsning och lufttäthet',
        'Inspektion av ventil, fat och sömmar',
        'Grafisk precision mot de godkända filerna',
        'Kompletta tillbehör och kit',
        'Verifiering av detaljhandelsförpackning, streckkod och kartongmärkning',
      ],
      confidentiality:
        'Efter överenskommelse offentliggörs inte distributörens namn och kundlista. Detta projekt presenteras anonymt för att skydda kommersiell sekretess.',
      tags: ['Touring-SUP-sortiment', 'Anpassad grafik', 'Detaljhandelsförpackning'],
    },
    {
      slug: 'fishing-sup-program',
      customerType: 'Outdoor-återförsäljare',
      region: 'Nordamerika',
      productCategory: 'Fiske uppblåsbart SUP',
      projectStage: 'Konceptgranskning → Provgodkännande → Programproduktion',
      manufacturingScope: 'Plattformskonfiguration, tillbehörslayout, förpackning och produktion',
      keyRequirements: 'Integrering av fisketillbehör, stabil plattform, organiserat paket',
      qualityFocus: 'Lufttäthet, förankring av tillbehör, grafisk precision, komplett paket',
      navLabel: 'Fiske-SUP-program',
      metaTitle: 'Fiske-SUP-utveckling | Tillbehörslayout & paket — iSupfactory',
      metaDescription:
        'Hur iSupfactory utvecklade en fiske-SUP-konfiguration för en outdoor-återförsäljare — tillbehörslayout, organiserat paket och butiksredo packning i ett kontrollerat program.',
      kicker: 'Fiskeprojekt',
      h1: 'Fiske-SUP-utveckling för en outdoor-återförsäljare — tillbehörslayout och paketkonfiguration',
      intro: [
        'Ett fiskeinriktat SUP-projekt: en stabil plattform konfigurerad med zoner för fisketillbehör, ett organiserat paket och butiksredo packning — från konceptgranskning till programproduktion.',
      ],
      industry: 'Detaljhandel- & outdoorvarumärken',
      requirement: 'En fiske-SUP-konfiguration med förankring av tillbehör, organiserat paket och detaljhandelsförpackning, från konceptgranskning till programproduktion.',
      challenge:
        'Fiskebrädor behöver förankring för tillbehör — spöhållare, D-ringar och lådzoner — utan att äventyra stabiliteten. Paketet behövde hålla sig organiserat på brädan, och förpackningen måste presentera kategorin tydligt i detaljhandeln.',
      solution:
        'En bred, stabil plattform med definierade tillbehörszoner, D-ring- och bungeeplacering för fiskeutrustning, ett organiserat paket med reparationskit och detaljhandelsförpackning utvecklad i ett enda kontrollerat program.',
      product: 'Fiske uppblåsbart SUP — stabil plattform med zoner för fisketillbehör, organiserat paket och butiksredo förpackning.',
      process: [
        { title: 'Konceptgranskning', body: 'Målanvändning, utrustning som bärs och paketstruktur bestämde konfigurationen.' },
        { title: 'Tillbehörslayout', body: 'D-ringar, bungees och förvaringszoner placerade på däcket.' },
        { title: 'Provgodkännande', body: 'Stabilitet och förankring av tillbehör verifierade på en fysisk bräda.' },
        { title: 'Programproduktion', body: 'Definierade kvalitetskontrollpunkter, paketverifiering och leveransgodkännande.' },
      ],
      result:
        'Konfigurationen bekräftades på det godkända provet — förankring av tillbehör, paketstruktur och förpackning alla anpassade före produktion — och programmet levererades med verifierade kit.',
      outcome: 'Tillbehörslayout och paket låsta vid provstadiet; verifierade kit levererade.',
      customizations: [
        'Stabil bred plattform med zoner för fisketillbehör',
        'Spöhållare, D-ring- och bungeeplacering',
        'Däcklayout för lådor och tackelplacering',
        'Val av paddel, fena och lina för fiskeanvändning',
        'Organiserat tillbehörspaket och reparationskit',
        'Detaljhandelsförpackning för fiskekategorin',
        'Streckkod och kartongmärkning för målmarknaden',
      ],
      inspectionFocus: [
        'Verifiering av förankring av tillbehör och D-ringplacering',
        'Verifiering av uppblåsning och lufttäthet',
        'Grafisk precision och korrekt däcklayout',
        'Komplett paket och tillbehörskonfiguration',
        'Verifiering av detaljhandelsförpackning och kartongmärkning',
      ],
      confidentiality:
        'Efter överenskommelse offentliggörs inte återförsäljarens namn och kanaldetaljer. Detta projekt presenteras anonymt för att skydda kommersiell sekretess.',
      tags: ['Fiskekonfiguration', 'Tillbehörslayout', 'Paketorganisering'],
    },
    {
      slug: 'yoga-sup-program',
      customerType: 'Vattensportskolor & -program',
      region: 'Europa',
      productCategory: 'Yoga uppblåsbart SUP',
      projectStage: 'Programgranskning → Provgodkännande → Flottleverans',
      manufacturingScope: 'Konfiguration av stabil plattform, däcktäckning, produktion och programförpackning',
      keyRequirements: 'Stabilitet för gruppövning, full EVA-däcktäckning, enhetlig flotta',
      qualityFocus: 'Däcktäckning, lufttäthet, grafisk precision, komplett kit',
      navLabel: 'Yoga-SUP-program',
      metaTitle: 'Yoga-SUP-utveckling | Träningsprogram — iSupfactory',
      metaDescription:
        'Hur iSupfactory utvecklade en stabil yoga-SUP-konfiguration för ett vattensportsträningsprogram — full däcktäckning och en enhetlig programflotta.',
      kicker: 'Yogaprojekt',
      h1: 'Utveckling av en stabil yoga-SUP-konfiguration för ett vattensportsträningsprogram',
      intro: [
        'En yoga-SUP-konfiguration för ett träningsprogram: en bred, högvolymig plattform med full EVA-däcktäckning, producerad som en enhetlig flotta för gruppövning.',
      ],
      industry: 'Utbildning & ungdomsprogram',
      requirement: 'En stabil yoga-SUP-konfiguration med full däcktäckning för gruppövning, i programkvantiteter.',
      challenge:
        'Yogautövning kräver en bred, högvolymig plattform som förblir klippfast i vattnet. Grupper behöver enhetliga brädor, och instruktörer behöver tydlig vägledning och hanterbar förvaring mellan passen.',
      solution:
        'En bred, högvolymig plattform med full EVA-däcktäckning, en enhetlig flottkonfiguration genom hela programmet samt instruktörsvägledning och programetiketter inkluderade.',
      product: 'Yoga uppblåsbart SUP — stabil plattform med full däckpadstäckning och en enhetlig programflotta.',
      process: [
        { title: 'Programgranskning', body: 'Övningsstil, gruppstorlek och förvaring bestämde konfigurationen.' },
        { title: 'Konfiguration', body: 'Plattform, däcktäckning och finish satta på hela flottan.' },
        { title: 'Provgodkännande', body: 'Stabilitet och däcktäckning verifierade på en fysisk bräda.' },
        { title: 'Flottleverans', body: 'Programkvantiteter producerade med kit- och förpackningsverifiering.' },
      ],
      result:
        'Flottan levererades som en enhetlig konfiguration — varje bräda matchade det godkända provet i stabilitet, däcktäckning och finish — med vägledning inkluderad för instruktörer.',
      outcome: 'Enhetlig flotta matchad mot det godkända provet; programförpackning verifierad.',
      customizations: [
        'Bred, högvolymig plattform för stabilitet stående',
        'Full EVA-däcktäckning över det användbara området',
        'Däcklayout och remplacering för övning',
        'Konsekvent färg och finish på hela flottan',
        'Instruktörsvägledning och programetiketter',
        'Förvarings- och programförpackningskonfiguration',
      ],
      inspectionFocus: [
        'Inspektion av däcktäckning och EVA-fäste',
        'Verifiering av uppblåsning och lufttäthet',
        'Stabilitetsverifiering på det godkända provet',
        'Grafisk och finishmässig konsistens genom hela serien',
        'Komplett kit och kontroller av programförpackning',
      ],
      confidentiality:
        'Efter överenskommelse offentliggörs inte programmets namn och läge. Detta projekt presenteras anonymt för att skydda kommersiell sekretess.',
      tags: ['Yogakonfiguration', 'Full däcktäckning', 'Programflotta'],
    },
  ],
  no: [
    {
      slug: 'coastal-rental-fleet',
      customerType: 'Utleieflåteoperatører',
      region: 'Middelhavet — Spania, Italia, Hellas',
      productCategory: 'Oppblåsbart SUP i utleieklasse (10′6″ + 11′0″)',
      projectStage: 'Flåteevaluering → Prøvegodkjenning → Fasadert levering i 3 partier',
      manufacturingScope: 'Flåtespesifikasjon, forsterket konstruksjon, fasert produksjon, reservedelsforsyning',
      keyRequirements: 'Holdbare utleiebrett, fasert levering til stedene, lavere hyppighet for tidlig utskifting',
      qualityFocus: 'Forsterket konstruksjon, lufttetthet, flåtegrafikk, komplett sett',
      navLabel: 'Kystutleieflåte',
      metaTitle: 'Kystutleieflåte | 320 brett på 120 dager — iSupfactory',
      metaDescription:
        'Hvordan en middelhavsutleieoperatør bygget en kystflåte på 320 brett i Spania, Italia og Hellas — tre fasede partier på 120 dager, med beregnet reduksjon i tidlige utskiftinger på 20–25 %.',
      kicker: 'Kystutleieprosjekt',
      h1: 'Så bygde en middelhavsutleieoperatør en kystflåte på 320 brett på 120 dager',
      intro: [
        'En kystutleieoperatør med stasjoner i Spania, Italia og Hellas trengte en holdbar flåte til høysesongen om sommeren — levert i tre partier, i tide til hver stasjons åpning.',
      ],
      industry: 'Utleieflåteoperatører',
      requirement: '320 utleiebrett i to størrelser — 10′6″ og 11′0″ — til kyststasjoner i tre land, levert i tre fasede partier innen 120 dager.',
      challenge:
        'Daglig utleierotasjon sliter raskt på brettene, og operatørens hyppighet for tidlig utskifting lå på 20–25 %. Stasjonene åpnet på ulike datoer i tre land, så én leveranse fungerte ikke — og like lite gjorde det en flåte i én enkelt størrelse.',
      solution:
        'To holdbare utleieplattformer i størrelser som dekker de fleste leietakere, forsterket konstruksjon for høy rotasjonsbelastning og tre produksjonspartier planlagt for å ankomme ved hver stasjons åpning — med reservedelspakke og reparasjonsveiledning per stasjon.',
      product: 'Oppblåsbart SUP i utleieklasse — 10′6″- og 11′0″-plattformer med forsterkede finner og UV-stabile materialer, sett per stasjon.',
      process: [
        { title: 'Flåteevaluering', body: 'Stasjonenes åpningstidspunkt og rotasjonsvolum bestemte de to størrelsene og partifordelingen.' },
        { title: 'Valg av brett', body: '10′6″- og 11′0″-utleieplattformer valgt for dekning og holdbarhet.' },
        { title: 'Fasert produksjon', body: 'Tre partier planlagt mot hver stasjons åpningsdato.' },
        { title: 'Levering og støtte', body: 'Flåten sendt per parti med reservedelspakke og reparasjonsveiledning per stasjon.' },
      ],
      result:
        'Alle tre partiene ankom innen 120 dager, tidsmessig tilpasset hver stasjons åpning. De forsterkede plattformene ventes å redusere hyppigheten for tidlig utskifting med beregnede 20–25 %, med reservedelspakker som dekker feltreparasjoner mellom sesongene.',
      outcome: '320 brett · 120 dager · 3 partier · beregnet −20–25 % tidlige utskiftinger.',
      metrics: [
        { value: '320', label: 'brett i to størrelser' },
        { value: '120', label: 'dager fra bestilling til siste parti' },
        { value: '3', label: 'fasede leveringer, én per stasjonsåpning' },
        { value: '−20–25 %', label: 'beregnet hyppighet for tidlig utskifting' },
      ],
      takeaways: [
        'Fasede partier lar en flåte ankomme akkurat når hver stasjon åpner — ingen ubrukt lager, ingen sen start.',
        'To størrelser (10′6″ og 11′0″) dekket de fleste leietakere uten å fragmentere flåten.',
        'Det er den forsterkede konstruksjonen som påvirker tidlig utskifting, ikke bare prisen.',
        'Reservedelspakker per stasjon holdt brettene i drift gjennom hele sesongene.',
      ],
      customizations: [
        '10′6″- og 11′0″-utleieplattformer tilpasset leietakerprofilene',
        'Forsterkede finner og UV-stabile materialer for høy rotasjonsbruk',
        'Flåtegrafikk og nummerering per stasjon',
        'Produksjonsplan i tre partier tilpasset stasjonsåpninger',
        'Reservedelspakke og reparasjonsveiledning per stasjon',
        'Pakking på flere anlegg og leveranseverifisering per parti',
      ],
      inspectionFocus: [
        'Verifisering av forsterket konstruksjon per brett',
        'Oppblåsing og lufttetthet på hvert brett',
        'Flåtegrafikk og korrekt stasjonsnummerering',
        'Komplett tilbehør og reservedelspakke per stasjon',
        'Pakkekontroller for levering til flere anlegg og flere partier',
      ],
      confidentiality:
        'Etter avtale offentliggjøres ikke operatørens navn og stasjonenes beliggenhet. Dette prosjektet presenteres anonymt for å beskytte kommersiell taushetsplikt.',
      tags: ['Fasert flåtelevering', 'Konstruksjon i utleieklasse', 'Lavere utskiftingshyppighet'],
    },
    {
      slug: 'eu-distributor-private-label',
      customerType: 'Distributører og grossister',
      region: 'Europa',
      productCategory: 'Oppblåsbart SUP med private label (2 SKU-er)',
      projectStage: 'Sortimentsplanlegging → Prøvegodkjenning → Volumlevering på 90 dager',
      manufacturingScope: 'Private label-merking, detaljhandelsemballasje, volumproduksjon, gjenbestillingsstøtte',
      keyRequirements: 'To markedstestede SKU-er under distributørens eget merkenavn, EU-detaljhandelsemballasje, tilpasning til sesongvinduer',
      qualityFocus: 'Grafisk presisjon, strekkode og etikett per marked, komplett sett, lufttetthet',
      navLabel: 'Distributør med private label',
      metaTitle: 'EU-distributør med private label | 1 200 brett på 90 dager — iSupfactory',
      metaDescription:
        'Hvordan en europeisk distributør lanserte en private label-SUP-linje på 1 200 brett på 90 dager — to SKU-er, EU-detaljhandelsemballasje og en gjentakende Q4-bestilling på samme låste spesifikasjon.',
      kicker: 'Private label-prosjekt',
      h1: 'Så lanserte en europeisk distributør en private label-SUP-linje på 1 200 brett på 90 dager',
      intro: [
        'En europeisk distributør ville ha en egen merket SUP-linje i butikkhyllen til sommersesongen — to markedstestede SKU-er, komplett detaljhandelsemballasje og ingen egne fabrikkrelasjoner.',
      ],
      industry: 'Distributører og grossister',
      requirement: '1 200 merkede brett i to SKU-er — 10′6″ allround og 12′6″ touring — med EU-detaljhandelsemballasje, levert på 90 dager.',
      challenge:
        'Butikkvinduet i sommersesongen er fast, så alle 1 200 brett og emballasjen måtte ankomme samlet i tide. Private label-emballasje — strekkoder, etiketter, manualer — måtte møte EUs detaljhandelskrav, og distributøren hadde ingen erfaring med SUP-fabrikker å lene seg på.',
      solution:
        'To markedstestede plattformer valgt for sortimentet, komplett private label-grafikk og EU-detaljhandelsemballasje håndtert i ett program, og produksjonen planlagt slik at begge SKU-ene ble levert samlet innen 90-dagersvinduet — med spesifikasjonen låst for en ren gjentakende bestilling.',
      product: 'Oppblåsbart SUP med private label — 10′6″ allround og 12′6″ touring, med merkede padler, pumper, ryggsekker og trykte detaljhandelskartonger.',
      process: [
        { title: 'Sortimentsplanlegging', body: 'To SKU-er valgt — 10′6″ allround og 12′6″ touring — for detaljhandelsdekning.' },
        { title: 'Prøvegodkjenning', body: 'Grafikk, emballasje og overflatebehandling bekreftet på fysiske brett.' },
        { title: 'Produksjon på 90 dager', body: 'Volumet planlagt slik at begge SKU-ene ble levert samlet til sesongvinduet.' },
        { title: 'Q4-gjenbestilling', body: 'Gjentakende bestilling lagt på samme låste spesifikasjon.' },
      ],
      result:
        'Alle 1 200 brett med komplett detaljhandelsemballasje ble levert innen 90 dager, i tide til sommerens butikkvindu. Linjen ble utsolgt, og distributøren returnerte i Q4 med en gjentakende bestilling på samme låste spesifikasjon.',
      outcome: '1 200 brett · 90 dager · 2 SKU-er · gjentakende Q4-bestilling.',
      metrics: [
        { value: '1 200', label: 'brett i én lansering' },
        { value: '90', label: 'dager til full levering' },
        { value: '2', label: 'detaljhandels-SKU-er, begge i tide til vinduet' },
        { value: 'Q4', label: 'gjentakende bestilling på samme spesifikasjon' },
      ],
      takeaways: [
        'Å starte med to utprøvde SKU-er holder lager risikoen lav samtidig som sortimentet fyller hyllen.',
        'Ett program som dekker brett, tilbehør og emballasje fjerner en vanlig lanseringsfelle.',
        'En fast sesongdato styrer timeplanen — produksjonsplanleggingen må behandle den som ikke-forhandlbar.',
        'Å låse spesifikasjonen ved lansering gjør gjentakende bestillinger rene og konsistente.',
      ],
      customizations: [
        '10′6″ allround- og 12′6″ touring-plattformer for sortimentet',
        'Private label-grafikk for dekkside, bunn og emballasje',
        'Merket paddle, pumpe og ryggsekk per SKU',
        'Trykte detaljhandelskartonger, strekkoder, etiketter og brukerhåndbok for EU-detaljhandel',
        'Stykkliste og spesifikasjon låst for konsistente gjentakende bestillinger',
        'Batchlevering tilpasset lanseringsvinduet',
      ],
      inspectionFocus: [
        'Grafisk presisjon mot godkjente private label-filer',
        'Strekkode-, etikett- og manualverifisering per marked',
        'Komplett sett per SKU gjennom hele 1 200-brettserien',
        'Stikkprøver av lufttetthet under produksjonen',
        'Kartong- og emballasjevifisering per SKU',
      ],
      confidentiality:
        'Etter avtale offentliggjøres ikke distributørens navn og detaljhandelskunder. Dette prosjektet presenteres anonymt for å beskytte kommersiell taushetsplikt.',
      tags: ['Private label', 'Sortiment med 2 SKU-er', 'Levering innen sesongvinduet'],
    },
    {
      slug: 'resort-sup-fleet',
      customerType: 'Resort- og hotellvirksomhet',
      region: 'Europa / Nord-Amerika',
      productCategory: 'Oppblåsbart SUP allround',
      projectStage: 'Prøvegodkjenning → Volumproduksjon → Flåtefornyelse',
      manufacturingScope: 'Grafikk, tilbehør, emballasje og flåteproduksjon',
      keyRequirements: 'Holdbarhet for utleie, kompakt oppbevaring, full merking av anlegget',
      qualityFocus: 'Lufttetthet, grafisk presisjon, komplett tilbehør, kartongmerking',
      navLabel: 'SUP-flåte for luksusresort',
      metaTitle: 'SUP-flåte for luksusresort | 100 merkede brett — iSupfactory',
      metaDescription:
        'Hvordan et luksusresort utstyrte strandprogrammet med 100 merkede SUP-brett — tilpasset grafikk, konstruksjon i utleieklasse og sesongbasert flåtestyring.',
      kicker: 'Resortprosjekt',
      h1: 'Så standardiserte et luksusresort en merket SUP-flåte på 100 brett',
      intro: [
        'Et luksusresort ønsket at strandprogrammet skulle føles som en del av anlegget — merkede brett i anleggets fargepalett, holdbare nok for daglig gjestebruk og enkle å oppbevare mellom sesongene.',
      ],
      industry: 'Resort- og hotellvirksomhet',
      requirement: '100 merkede SUP-brett for gjesteutleie, i anleggets fargepalett.',
      challenge:
        'Daglig utleie sliter raskt på generiske flåter, og lagringsplassen utenfor sesongen er begrenset. Resortet trengte brett som tåler hard bruk, kan pakkes kompakt og bærer full merking av anlegget.',
      solution:
        'Oppblåsbar konstruksjon i utleieklasse med forsterkede finner og UV-bestandige materialer, heldekksgrafikk i resortets farger samt merkede padler og pumper som en del av flåtesettet.',
      product: 'Tilpasset oppblåsbart SUP — 11′ allround-plattform, merket dekktrykk og tilbehør.',
      process: [
        { title: 'Flåteråd', body: 'Gjestevolum, strandlinje og sesonglengde bestemte flåtestørrelse og brettblanding.' },
        { title: 'Merket prøve', body: 'Farger og logo godkjent på et fysisk brett før produksjon.' },
        { title: 'Produksjon og kvalitetskontroll', body: '100 brett produsert med kvalitetskontroll på flere punkter gjennom hele serien.' },
        { title: 'Levering og fornyelse', body: 'Sesonglevering, reservedeler og et fornyelsesprogram for kommende sesonger.' },
      ],
      result:
        'Flåten ble lansert i tide til sesongen, brettene oppbevares i ett rom utenfor sesongen, og gjestehenvendelsene på det merkede utstyret førte til at flåten ble utvidet året etter.',
      outcome: 'Lansering i tide, 100 % merket flåte, utvidelse neste sesong.',
      customizations: [
        'Brettplattform, størrelse og konstruksjon valgt for daglig utleie',
        'Heldekksgrafikk i anleggets fargepalett',
        'Finne- og logoplassering godkjent på en fysisk prøve',
        'Merket paddle, pumpe og tilbehørssett til hvert brett',
        'Flåtenummerering og fargekoding gjennom hele serien',
        'Kompakt oppbevaringskonfigurasjon og sesongvis fornyelse',
      ],
      inspectionFocus: [
        'Oppblåsing og lufttetthet på hvert brett',
        'Ventil- og forsterket finnetilstand',
        'Grafisk presisjon og fargetilpasning mot godkjent prøve',
        'Komplett tilbehør og sett per brett',
        'Kartongmerking og flåteetiketter før leveransegodkjenning',
      ],
      confidentiality:
        'Etter avtale offentliggjøres ikke resortets navn og merkevareressurser. Dette prosjektet presenteres anonymt for å beskytte kommersiell taushetsplikt.',
      tags: ['Merket gjesteflåte', 'Konstruksjon i utleieklasse', 'Sesongvis fornyelse'],
    },
    {
      slug: 'private-label-launch',
      customerType: 'Detaljhandels- og friluftsmarker',
      region: 'Europa',
      productCategory: 'Oppblåsbart SUP allround (private label)',
      projectStage: 'Prøvegodkjenning → Valideringsserie → Skalering',
      manufacturingScope: 'Produkt- og emballasjegrafikk, prøving, produksjon, verktøyfasthold',
      keyRequirements: 'Salgbar linje uten egen SUP-design eller produksjon',
      qualityFocus: 'Versjonskontroll av grafikk, emballasjepresisjon, komplett sett',
      navLabel: 'Private label-merkelansering',
      metaTitle: 'Private label-SUP-lansering | Merkeutvidelse — iSupfactory',
      metaDescription:
        'Hvordan et eksisterende friluftsmarke utvidet seg til SUP med en private label-produktlinje — fra logo til første container, med skalerbart MOQ.',
      kicker: 'Private label-prosjekt',
      h1: 'Så lanserte et friluftsmarke en private label-SUP-linje fra logo til første container',
      intro: [
        'En sportsforhandler med etablert merke ville utvide seg til padlesport uten å bygge fabrikkrelasjoner — en salgbar SUP-linje under eget navn.',
      ],
      industry: 'Detaljhandels- og friluftsmarker',
      requirement: 'En private label-SUP-linje — logo, farger og emballasje på utprøvde plattformer, første serie på 50 stk.',
      challenge:
        'Ingen intern SUP-designteam, ingen produksjonserfaring og en første bestilling liten nok til å teste markedet før skalering.',
      solution:
        'Komplett produkt- og emballasjegrafikk utviklet fra merkevarets ressurser, en valideringsserie på 50 stk og deretter skalering på de samme verifiserte plattformene med verktøy fastholdt for merket.',
      product: 'Oppblåsbart SUP med private label — merket dekkside, paddle, pumpe, ryggsekk og trykte kartonger.',
      process: [
        { title: 'Merkeprosess', body: 'Logo, farger og merkeretningslinjer ble omsatt til brett- og emballasjegrafikk.' },
        { title: 'Prøvegodkjenning', body: 'Fysisk prøve bekreftet overflatebehandling, farger og emballasje.' },
        { title: 'Valideringsserie', body: 'Første serie på 50 stk ble utsolgt før skalering.' },
        { title: 'Skalering', body: 'Produksjon i containerbestillinger med jevn kvalitet, design eid av merket.' },
      ],
      result:
        'Linjen ble utsolgt gjennom valideringsserien innen én sesong og skalert til en containerbestilling — med merket som eier av alle design og verktøy.',
      outcome: 'Validert på én sesong, skalert til containerbestillinger.',
      customizations: [
        'Brettplattformer, størrelser og farger kartlagt mot merkelinjen',
        'Dekks-, bunn- og emballasjegrafikk bygget fra merkevarets ressurser',
        'Merket paddle, pumpe, ryggsekk og tilbehørssett',
        'Trykte detaljhandelskartonger og etikettlayout',
        'Strekkode- og brukerhåndbokversjon for målmarkedet',
        'Verktøy- og grafikkeierskap fastholdt for merket',
      ],
      inspectionFocus: [
        'Grafikkversjon samsvarer med de godkjente filene',
        'Farge- og overflatepresisjon på den fysiske prøven',
        'Emballasje-, strekkode- og manualverifisering',
        'Komplett sett gjennom hele valideringsserien',
        'Stikkprøver av lufttetthet under produksjonen',
      ],
      confidentiality:
        'Etter avtale offentliggjøres ikke merkenavnet og kommersielle detaljer. Dette prosjektet presenteres anonymt for å beskytte kommersiell taushetsplikt.',
      tags: ['Merkeutvidelse', 'Emballasjedesign', 'Skalerbart MOQ'],
    },
    {
      slug: 'club-team-boards',
      customerType: 'Padleklubber og lag',
      region: 'Nord-Amerika',
      productCategory: 'Oppblåsbart SUP for trening',
      projectStage: 'Prøvegodkjenning → Flåteproduksjon → Utvidelsesbestilling',
      manufacturingScope: 'Klubbmerking, flåteproduksjon, reservedelsstøtte',
      keyRequirements: 'Ensartet lagprofil, stramt budsjett, identisk fremtidig utvidelse',
      qualityFocus: 'Grafisk presisjon, lufttetthet, komplett sett, konsistens ved gjenbestilling',
      navLabel: 'Klubblagets brett',
      metaTitle: 'Klubblagets SUP-brett | Fornyelse av merket flåte — iSupfactory',
      metaDescription:
        'Hvordan en padleklubb lanserte en ny profil og fornyet flåten med 25 merkede treningsbrett — laggrafikk, reservedelsstøtte og jevne gjenbestillinger.',
      kicker: 'Klubbprosjekt',
      h1: 'Så lanserte en padleklubb en ny profil for en treningsflåte på 25 brett',
      intro: [
        'En padleklubb lanserte en ny profil og trengte utstyr som matchet — en ensartet lagflåte for trening og regattaer, uten uensartet lager.',
      ],
      industry: 'Padleklubber og lag',
      requirement: '25 merkede treningsbrett med klubbnavn, farger og logo, pluss reservedeler.',
      challenge:
        'Den eksisterende flåten var uensartet og umerket; budsjettene var stramme og en fremtidig utvidelse krevde identisk matchende lager.',
      solution:
        'Klubbmerking på hvert brett, flåtepris for volumet samt reservedeler og reparasjonsveiledning for å forlenge brettenes levetid.',
      product: 'Tilpasset lag-SUP — treningsform med klubbgrafikk, pluss reservefinnen og reparasjonssett.',
      process: [
        { title: 'Kartlegging av klubben', body: 'Medlemskap, øktetyper og eksisterende utstyr gjennomgått.' },
        { title: 'Valg av brett', body: 'Trenings- og nybegynnerformer tilpasset klubbprogrammet.' },
        { title: 'Merking', body: 'Klubbnavn, farger og logo trykt på hele flåten.' },
        { title: 'Levering og vekst', body: 'Flåte levert med deler; identisk gjenbestilling for utvidelse.' },
      ],
      result:
        'Medlemmene trener på matchende merket utstyr, og klubben utvidet flåten neste sesong med en identisk gjenbestilling i samme kvalitet.',
      outcome: 'Ensartet flåte, identisk utvidelsesbestilling.',
      customizations: [
        'Trenings- og nybegynnerplattformer tilpasset klubbprogrammet',
        'Klubbnavn, farger og logo trykt på hele flåten',
        'Brettnummerering og størrelsesgruppering per treningsgruppe',
        'Reservefinnen og reparasjonssett som flåtetilbehør',
        'Gjenbestillingsspesifikasjon låst for identisk fremtidig utvidelse',
      ],
      inspectionFocus: [
        'Grafisk presisjon for klubbnavn, farger og logo',
        'Verifisering av oppblåsing og lufttetthet',
        'Komplett tilbehør og reparasjonssett',
        'Fargekonsistens gjennom hele 25-brettserien',
      ],
      confidentiality:
        'Etter avtale offentliggjøres ikke klubbens navn og beliggenhet. Dette prosjektet presenteres anonymt for å beskytte kommersiell taushetsplikt.',
      tags: ['Klubbmerking', 'Flåtepris', 'Reservedelsstøtte'],
    },
    {
      slug: 'school-program-fleet',
      customerType: 'Utdanning og ungdomsprogrammer',
      region: 'Europa',
      productCategory: 'Oppblåsbart SUP for nybegynnere og flerpersonbruk',
      projectStage: 'Programgjennomgang → Prøvegodkjenning → Flåtelevering',
      manufacturingScope: 'Settdesign, produksjon, reservedeler og fornyelsesstøtte',
      keyRequirements: 'Sikkerhetsfokusert utstyr, kvantum tilpasset klassestørrelser, begrenset personalhåndtering',
      qualityFocus: 'Stabilitet, lufttetthet, komplett tilbehør, brukerveiledning',
      navLabel: 'Skoleprogramflåte',
      metaTitle: 'Skole-SUP-program | Nybegynnerflåte — iSupfactory',
      metaDescription:
        'Hvordan en skole lanserte et padlesportvalgfag med en nybegynnerflåte på 15 brett og flerpersonbrett — sikkerhetsfokusert utstyr for undervisning.',
      kicker: 'Skoleprosjekt',
      h1: 'Så lanserte en skole en nybegynnerflåte på 15 brett for padlesportundervisning',
      intro: [
        'En skole som lanserte et valgfag i padlesport trengte utstyr som var stabilt og trygt for nybegynnere, tilpasset klassestørrelsene og enkelt å håndtere med begrenset personal.',
      ],
      industry: 'Utdanning og ungdomsprogrammer',
      requirement: 'En nybegynnerflåte for klassestørrelser, inkludert flerpersonbrett for de første timene.',
      challenge:
        'Blandde nivåer, strenge sikkerhetskrav, skolens innkjøpssykluser og et budsjett som måtte dekke fremtidige kuller.',
      solution:
        'Brede nybegynnerbrett med høyt volum og flerpersonbrett, programpriser tilpasset klassekvantum og tydelig brukerveiledning for instruktører.',
      product: 'Nybegynner-SUP-flåte — stabile plattformer med forsterket konstruksjon for lang programlevetid.',
      process: [
        { title: 'Programgjennomgang', body: 'Klassestørrelser, vannområde og instruktøroppsett bestemte settet.' },
        { title: 'Settbygging', body: 'Bretttyper og kvantum tilpasset undervisningen.' },
        { title: 'Prøvegodkjenning', body: 'Stabilitet og konstruksjon verifisert på et fysisk brett.' },
        { title: 'Levere og fornye', body: 'Bulklevering, reservedeler og gjenbestillinger for nye kuller.' },
      ],
      result:
        'Instruktørene rapporterte raskere fremdrift i første time på de stabile plattformene, og programmet fornyet utstyret med en matchende gjenbestilling året etter.',
      outcome: 'Raskere læringskurve, fornyet utstyr året etter.',
      customizations: [
        'Brede nybegynnerplattformer med høyt volum for de første timene',
        'Flerpersonbrett inkludert for gruppetimer',
        'Brettstørrelse og kvantum tilpasset klassestørrelsene',
        'Tydelig brukerveiledning og instruksjonsetiketter',
        'Forsterket konstruksjon for lang programlevetid',
        'Spesifikasjon for bulklevering og fornyelsesbestillinger',
      ],
      inspectionFocus: [
        'Verifisering av stabilitet og dekkskonfigurasjon',
        'Oppblåsing og lufttetthet på hvert brett',
        'Komplett tilbehør per brett og klassesett',
        'Brukerveiledning og korrekt merking',
        'Kartongmerking og emballasjekontroller for klassesett',
      ],
      confidentiality:
        'Etter avtale offentliggjøres ikke skolens navn og region. Dette prosjektet presenteres anonymt for å beskytte kommersiell taushetsplikt.',
      tags: ['Nybegynnerflåte', 'Programlansering', 'Fornyelsesbestillinger'],
    },
    {
      slug: 'distributor-line-expansion',
      customerType: 'Distributører og grossister',
      region: 'To eksportregioner',
      productCategory: 'Oppblåsbart SUP i mellomklasse (6 SKU-er)',
      projectStage: 'Sortimentsplanlegging → Prøvegodkjenning → Levering til flere markeder',
      manufacturingScope: 'Brett, tilbehør og detaljhandelsemballasje i ett program',
      keyRequirements: 'Én kvalitetsansvarlig, konsistent merking, redusert lager per SKU',
      qualityFocus: 'Lufttetthet, grafisk presisjon, strekkode- og etikettpresisjon, BOM-match',
      navLabel: 'Distributørens linjeutvidelse',
      metaTitle: 'Distributørens SUP-linjeutvidelse | 6-SKU-program — iSupfactory',
      metaDescription:
        'Hvordan en vannsportdistributør la til et komplett mellomklasse-SUP-sortiment i seks SKU-er — én fabrikk, ett program, eksportert til flere markeder.',
      kicker: 'Distributørprosjekt',
      h1: 'Så lanserte en distributør et 6-SKU-SUP-sortiment på to markeder',
      intro: [
        'En vannsportdistributør som solgte kajakker og tilbehør ville ha sitt eget oppblåsbare SUP-sortiment — uten å fragmentere leveransen over flere fabrikker for brett, padler og pumper.',
      ],
      industry: 'Distributører og grossister',
      requirement: 'Et mellomklasse-SUP-sortiment i seks SKU-er (10′6″ til 12′6″ pluss tilbehørssett), med eksport til to regioner.',
      challenge:
        'Adskilte fabrikker for brett, padler og pumper betydde uensartet merking, tre separate leveringspunkter og ingen enkelt kvalitetsansvarlig for garantisaker.',
      solution:
        'Ett program som dekker brett, tilbehør og detaljhandelsemballasje; delte tilbehørssett for å redusere lageret per SKU; og leveringsalternativer tilpasset hvert markeds oppsett.',
      product: 'Seks merkede detaljhandels-SKU-er — oppblåsbare SUP-plattformer med komplette sett i trykte, boksede kartonger.',
      process: [
        { title: 'Sortimentsplanlegging', body: 'Markedshull og prispunkter bestemte de seks SKU-ene og innholdet i pakkene.' },
        { title: 'Ensartet merking', body: 'Ett designsystem brukt på brett, padler, pumper og kartonger.' },
        { title: 'Programpris', body: 'Volumpris for hele programmet, ikke per SKU.' },
        { title: 'Levering til flere markeder', body: 'Standardeksportvilkår for hjemregionen, fullservicevilkår for det andre markedet.' },
      ],
      result:
        'Sortimentet ble lansert på begge markedene innen én sesong; delte tilbehørssett reduserte lageret ved ankomst, og garantisaker ble løst gjennom én fabrikkontakt.',
      outcome: 'Lansering på flere markeder innen én sesong, mindre lager ved ankomst, ett garantipunkt.',
      customizations: [
        'Seks SKU-er fra 10′6″ til 12′6″ pluss tilbehørspakker',
        'Ett designsystem brukt på brett, padler, pumper og kartonger',
        'Delte tilbehørssett for å redusere lageret per SKU',
        'Komplette sett i trykte, boksede detaljhandelskartonger',
        'Strekkode-, etikett- og manualversjoner per målmarked',
        'Leveringsvilkår og emballasjeoppsett tilpasset hvert marked',
      ],
      inspectionFocus: [
        'BOM-match per SKU-konfigurasjon',
        'Grafisk og merkepresisjon på de seks SKU-ene',
        'Strekkode- og etikettpresisjon per marked',
        'Komplette tilbehørssett og boksing',
        'Verifisering av lufttetthet gjennom hele serien',
      ],
      confidentiality:
        'Etter avtale offentliggjøres ikke distributørens navn og kundeliste. Dette prosjektet presenteres anonymt for å beskytte kommersiell taushetsplikt.',
      tags: ['Multi-SKU-program', 'Komplette detaljhandelssett'],
    },
    {
      slug: 'startup-brand-zero-to-one',
      customerType: 'OPP-start-SUParker',
      region: 'Nord-Amerika',
      productCategory: 'ODM oppblåsbart SUP allround',
      projectStage: 'Konsept → Prøveserie → Lanseringsbestilling',
      manufacturingScope: 'ODM-utvikling, grafikk, emballasje, produksjon',
      keyRequirements: 'Første serie med lavt MOQ, tilpasning til lanseringsdato, verktøy fastholdt for merket',
      qualityFocus: 'Lufttetthet, grafisk presisjon, emballasjevifisering',
      navLabel: 'OPP-start 0→1-lansering',
      metaTitle: 'Lansering av OPP-start-SUP-merke | Fra konsept til første serie — iSupfactory',
      metaDescription:
        'Hvordan en OPP-start innen SUP gikk fra konsept til en utsolgt første serie — ODM-utvikling, en prøveserie på 10 brett og deretter en merket lanseringsbestilling på 200 brett.',
      kicker: 'OPP-startprosjekt',
      h1: 'Fra konsept til en utsolgt lansering på 200 brett for et OPP-start-SUP-merke',
      intro: [
        'To grunnleggere med et publikum men ingen fabrikk ville selge sitt eget SUP — et ODM-brett utviklet etter deres spesifikasjon, med en lanseringsbestilling som ikke skulle velte dem.',
      ],
      industry: 'OPP-start-SUParker',
      requirement: 'ODM-utvikling med lavt MOQ: en prøveserie på 10 stk for validering, deretter 200 stk for lansering.',
      challenge:
        'Ingen designteam, ingen importerfaring og en første bestilling for liten for de fleste fabrikker — pluss en lanseringsdato knyttet til sesongen på nordhalvkløet.',
      solution:
        'ODM-utvikling fra deres konsept på en utprøvd plattform, en prøveserie på 10 stk som dekker prøver og leveranseverifisering, og deretter en merket lanseringsbestilling på 200 stk med verktøy fastholdt for merket.',
      product: 'Merket ODM-oppblåsbart SUP — tilpasset dekktrykk, emballasje og butikkklare kartongstørrelser.',
      process: [
        { title: 'Konseptsamtale', body: 'Målpadleren, prispunktet og lanseringsdatoen bestemte basisplattformen.' },
        { title: 'Prøveserie', body: '10 stk beviste produkt og emballasje fra start til slutt.' },
        { title: 'Lanseringsbestilling', body: '200 stk produsert med verifisert grafikk og kartongspesifikasjon.' },
        { title: 'Skaleringsvei', body: 'Verktøy fastholdt for merket; gjenbestillinger til forbedrede priser.' },
      ],
      result:
        'Den første serien ble utsolgt i løpet av noen uker etter sesongstarten; tilbakemeldinger fra prøveserien rettet et emballasjeproblem før den store bestillingen gikk i produksjon.',
      outcome: 'Utsolgt lanseringsserie, emballasje rettet før skalering, gjenbestillingsvei på plass.',
      customizations: [
        'ODM-brett utviklet fra merkets konsept på en utprøvd plattform',
        'Tilpasset dekktrykk og merkemballasje',
        'Butikkklare kartongstørrelser for lanseringsbestillingen',
        'Tilbehørssett og settkonfigurasjon tilpasset målpadleren',
        'Verktøy og grafikk fastholdt for merket',
        'Produksjonsplan tilpasset lanseringsdatoen',
      ],
      inspectionFocus: [
        'Grafisk presisjon mot de godkjente filene',
        'Verifisering av lufttetthet på prøveserien og lanseringsbestillingen',
        'Emballasje- og kartongverifisering — inkludert tiltaket fra prøveserien',
        'Komplett tilbehør og sett',
      ],
      confidentiality:
        'Etter avtale offentliggjøres ikke merkenavnet og lanseringsdetaljene. Dette prosjektet presenteres anonymt for å beskytte kommersiell taushetsplikt.',
      tags: ['ODM-utvikling', 'Prøveserie med lavt MOQ', 'Sesongbasert planlegging'],
    },
    {
      slug: 'rental-fleet-multi-site',
      customerType: 'Utleieflåteoperatører',
      region: 'Nord-Amerika',
      productCategory: 'Oppblåsbart SUP i utleieklasse, allround',
      projectStage: 'Flåtegjennomgang → Ensartet produksjon → Sesongvis fornyelse',
      manufacturingScope: 'Flåtespesifikasjon, produksjon, reservedelspakker, fornyelsesprogram',
      keyRequirements: 'Ett ensartet brett på alle anlegg, holdbarhet for utleieslitasje',
      qualityFocus: 'Verifisering av forsterket konstruksjon, lufttetthet, komplett sett',
      navLabel: 'Utleieflåte på flere anlegg',
      metaTitle: 'Utvidelse av utleieflåte | 200 brett, 3 anlegg — iSupfactory',
      metaDescription:
        'Hvordan en fleranleggsutleieoperatør erstattet uensartet lager med 200 ensartede brett på tre steder — flåtepris, sesongvis fornyelse og reservedelsforsyning.',
      kicker: 'Utleieprosjekt',
      h1: 'Standardisering av en utleieflåte på 200 brett på tre anlegg for en flåteoperatør',
      intro: [
        'En utleieoperatør med tre steder nær vann trengte en ensartet flåte i stedet for uensartet lager — samme brett på alle anlegg, priset for flåtevolum.',
      ],
      industry: 'Utleieflåteoperatører',
      requirement: '200 utleiebrett i utleieklasse på tre anlegg, med sesongvis fornyelse og deler som kan repareres i felt.',
      challenge:
        'Uensartet aldrende lager kompliserte reparasjoner og prising; utleieslitasje krever forsterket konstruksjon, og oppbevaringen utenfor sesongen er fordelt på tre anlegg.',
      solution:
        'Én plattform i utleieklasse på alle anlegg med forsterkede finner og UV-stabile materialer, flåtepris på 200-brettsvolumet og en reservedelspakke med reparasjonsveiledning per anlegg.',
      product: 'Oppblåsbart SUP i utleieklasse — 11′ allround-plattform med forsterket konstruksjon og reparasjonssett.',
      process: [
        { title: 'Flåtegjennomgang', body: 'Stedsvolum og utnyttelsesdiagrammer bestemte fordelingen mellom stedene.' },
        { title: 'Ensartet spesifikasjon', body: 'Ett brett overalt — enklere reparasjoner, prising og opplæring.' },
        { title: 'Flåtepris', body: 'Volumrabatt på den kombinerte 200-brettsbestillingen.' },
        { title: 'Deler og fornyelse', body: 'Reservedelspakke per anlegg, pluss en definert sesongsyklus for utskifting.' },
      ],
      result:
        'Den ensartede flåten reduserte reparasjonsforvirringen per anlegg, den kombinerte bestillingen låste opp flåteprisen, og 200-brettsprogrammet ble standarden for sesongvis fornyelse.',
      outcome: 'Ensartet drift, lavere kostnad per enhet, repeterbar sesongsyklus.',
      customizations: [
        'Én plattform i utleieklasse på alle tre anleggene',
        'Forsterkede finner og UV-stabile materialer for utleieslitasje',
        'Stedsfordeling og flåtenummerering per sted',
        'Reservedelspakke per anlegg med reparasjonsveiledning',
        'Definert sesongsyklus for utskifting',
      ],
      inspectionFocus: [
        'Verifisering av forsterket konstruksjon per brett',
        'Oppblåsing og lufttetthet på hvert brett',
        'Komplett tilbehør og reparasjonssett per anlegg',
        'Flåtenummerering og korrekt merking per anlegg',
        'Pakkekontroller for levering til flere anlegg',
      ],
      confidentiality:
        'Etter avtale offentliggjøres ikke operatørens navn og steder. Dette prosjektet presenteres anonymt for å beskytte kommersiell taushetsplikt.',
      tags: ['Flåte på flere anlegg', 'Konstruksjon i utleieklasse', 'Sesongvis fornyelse'],
    },
    {
      slug: 'touring-sup-range',
      customerType: 'Frilufts- og vannsportdistributører',
      region: 'Europa',
      productCategory: 'Oppblåsbart SUP touring',
      projectStage: 'Produktbrief → Prøvegodkjenning → Volumproduksjon',
      manufacturingScope: 'Plattformgjennomgang, grafikk, tilbehørskonfigurasjon, detaljhandelsemballasje og produksjon',
      keyRequirements: 'Touringytelse, prosjektspesifikk grafikk, komplett detaljhandelssett',
      qualityFocus: 'Lufttetthet, grafisk presisjon, komplett tilbehør, kartongmerking',
      navLabel: 'Touring-SUP-sortiment',
      metaTitle: 'Utvikling av touring-SUP-sortiment | Friluftsdistributør — iSupfactory',
      metaDescription:
        'Hvordan iSupfactory støttet et touring-SUP-sortiment for en europeisk friluftsdistributør — plattformgjennomgang, prosjektspesifikk grafikk, tilbehørskonfigurasjon og detaljhandelsemballasje.',
      kicker: 'Touringprosjekt',
      h1: 'Utvikling av et touring-SUP-sortiment for en europeisk friluftsdistributør',
      intro: [
        'Et skreddersydd oppblåsbart SUP-prosjekt som dekker plattformgjennomgang, prosjektspesifikk grafikk, tilbehørskonfigurasjon, detaljhandelsemballasje og kvalitetsplanlegging — fra prøvegodkjenning til leveranseforberedelse.',
      ],
      industry: 'Distributører og grossister',
      requirement: 'Et touring-SUP-sortiment med prosjektspesifikk grafikk, tilbehørskonfigurasjon og detaljhandelsemballasje, kontrollert fra prøvegodkjenning til levering.',
      challenge:
        'Touringpadlere forventer stabilitet i fart og forutsigbar glid, så plattformen, målene og volumet må vurderes før produksjon. Grafikken må tilpasses rundt finner, EVA og ventiler, og hvert detaljhandelssett må komme komplett gjennom hele sortimentet.',
      solution:
        'Plattform- og målgjennomgang for touringytelse, prosjektspesifikk grafikk tilpasset brettets funksjoner, en tilbehørskonfigurasjon som dekker paddle, line og sekk, planlegging av detaljhandelsemballasje og kontrollert volumproduksjon med definerte kvalitetskontrollpunkter.',
      product: 'Touring-SUP-sortiment — ytelsesplattform med tilpasset grafikk, komplett tilbehørssett og butikkklart emballasje.',
      process: [
        { title: 'Plattformgjennomgang', body: 'Touringmål, volum og finneprofil tilpasset målpadleren og markedet.' },
        { title: 'Spesifikasjon og grafikk', body: 'Teknisk spesifikasjon, grafikktilpasning og kundegodkjent BOM klargjort.' },
        { title: 'Prøvegodkjenning', body: 'Konstruksjon, grafikk og sett bekreftet på et fysisk brett.' },
        { title: 'Produksjon og inspeksjon', body: 'Volumproduksjon med kvalitetskontrollpunkter, emballasjevifisering og leveransegodkjenning.' },
      ],
      result:
        'Sortimentet gikk fra prøvegodkjenning til leveranseforberedelse under kontrollert produkt-, grafikk-, BOM- og emballasjedokumentasjon — den godkjente prøven fungerte som referanse for produksjon og sluttinspeksjon.',
      outcome: 'Kontrollert vei fra prøve til produksjon; grafikk og emballasje låst før produksjon.',
      customizations: [
        'Touringplattform, mål og volumkonfigurasjon',
        'Prosjektspesifikk topp-, bunn- og finnegrafikk',
        'EVA-puteutforming og fargekonfigurasjon',
        'Finnesystem, bungee-layout og tilbehørssett',
        'Merket sekk, brukerhåndbokversjon og detaljhandelsemballasje',
        'Kartongmerking og strekkodekrav for målmarkedet',
      ],
      inspectionFocus: [
        'Verifisering av oppblåsing og lufttetthet',
        'Inspeksjon av ventil, finner og sømmer',
        'Grafisk presisjon mot de godkjente filene',
        'Komplett tilbehør og sett',
        'Verifisering av detaljhandelsemballasje, strekkode og kartongmerking',
      ],
      confidentiality:
        'Etter avtale offentliggjøres ikke distributørens navn og kundeliste. Dette prosjektet presenteres anonymt for å beskytte kommersiell taushetsplikt.',
      tags: ['Touring-SUP-sortiment', 'Tilpasset grafikk', 'Detaljhandelsemballasje'],
    },
    {
      slug: 'fishing-sup-program',
      customerType: 'Friluftsforhandlere',
      region: 'Nord-Amerika',
      productCategory: 'Oppblåsbart SUP for fiske',
      projectStage: 'Konseptgjennomgang → Prøvegodkjenning → Programproduksjon',
      manufacturingScope: 'Plattformkonfigurasjon, tilbehørsoppsett, emballasje og produksjon',
      keyRequirements: 'Integrering av fisketilbehør, stabil plattform, organisert sett',
      qualityFocus: 'Lufttetthet, forankring av tilbehør, grafisk presisjon, komplett sett',
      navLabel: 'Fiske-SUP-program',
      metaTitle: 'Fiske-SUP-utvikling | Tilbehørsoppsett & sett — iSupfactory',
      metaDescription:
        'Hvordan iSupfactory utviklet en fiskes-SUP-konfigurasjon for en friluftsforhandler — tilbehørsoppsett, organisert sett og butikkklart emballasje i ett kontrollert program.',
      kicker: 'Fiskeprosjekt',
      h1: 'Fiske-SUP-utvikling for en friluftsforhandler — tilbehørsoppsett og settkonfigurasjon',
      intro: [
        'Et fiskepreget SUP-prosjekt: en stabil plattform konfigurert med soner for fisketilbehør, et organisert sett og butikkklart emballasje — fra konseptgjennomgang til programproduksjon.',
      ],
      industry: 'Detaljhandels- og friluftsmarker',
      requirement: 'En fiskes-SUP-konfigurasjon med forankring av tilbehør, organisert sett og detaljhandelsemballasje, fra konseptgjennomgang til programproduksjon.',
      challenge:
        'Fiskebrett trenger forankring for tilbehør — stangholdere, D-ringer og bokssoner — uten å gå på kompromisset med stabiliteten. Settet måtte holdes organisert på brettet, og emballasjen måtte presentere kategorien tydelig i detaljhandelen.',
      solution:
        'En bred, stabil plattform med definerte tilbehørsoner, D-ringe- og bungeeplassering for fiskeutstyr, et organisert sett med reparasjonssett og detaljhandelsemballasje utviklet i ett kontrollert program.',
      product: 'Oppblåsbart SUP for fiske — stabil plattform med soner for fisketilbehør, organisert sett og butikkklart emballasje.',
      process: [
        { title: 'Konseptgjennomgang', body: 'Tiltent bruk, utstyr som bæres og oppbygging av settet bestemte konfigurasjonen.' },
        { title: 'Tilbehørsoppsett', body: 'D-ringer, bungees og oppbevaringssoner plassert på dekket.' },
        { title: 'Prøvegodkjenning', body: 'Stabilitet og forankring av tilbehør verifisert på et fysisk brett.' },
        { title: 'Programproduksjon', body: 'Definerte kvalitetskontrollpunkter, settverifisering og leveransegodkjenning.' },
      ],
      result:
        'Konfigurasjonen ble bekreftet på den godkjente prøven — forankring av tilbehør, settoppbygging og emballasje alle tilpasset før produksjon — og programmet ble levert med verifiserte sett.',
      outcome: 'Tilbehørsoppsett og sett låst på prøvestadiet; verifiserte sett levert.',
      customizations: [
        'Stabil bred plattform med soner for fisketilbehør',
        'Stangholdere, D-ringe- og bungeeplassering',
        'Dekkslayout for bokser og terminaler',
        'Valg av paddle, finne og line for fiske',
        'Organisert tilbehørspakke og reparasjonssett',
        'Detaljhandelsemballasje for fiskekategorien',
        'Strekkode og kartongmerking for målmarkedet',
      ],
      inspectionFocus: [
        'Verifisering av tilbehørsforankring og D-ringplassering',
        'Verifisering av oppblåsing og lufttetthet',
        'Grafisk presisjon og korrekt dekkslayout',
        'Komplett sett og tilbehørskonfigurasjon',
        'Verifisering av detaljhandelsemballasje og kartongmerking',
      ],
      confidentiality:
        'Etter avtale offentliggjøres ikke forhandlerens navn og kanaldetaljer. Dette prosjektet presenteres anonymt for å beskytte kommersiell taushetsplikt.',
      tags: ['Fiskekonfigurasjon', 'Tilbehørsoppsett', 'Settorganisering'],
    },
    {
      slug: 'yoga-sup-program',
      customerType: 'Vannsportskoler og -programmer',
      region: 'Europa',
      productCategory: 'Oppblåsbart SUP for yoga',
      projectStage: 'Programgjennomgang → Prøvegodkjenning → Flåtelevering',
      manufacturingScope: 'Konfigurasjon av stabil plattform, dekksdekke, produksjon og programemballasje',
      keyRequirements: 'Stabilitet for gruppeøvelser, fullt EVA-dekksdekke, ensartet flåte',
      qualityFocus: 'Dekksdekke, lufttetthet, grafisk presisjon, komplett sett',
      navLabel: 'Yoga-SUP-program',
      metaTitle: 'Yoga-SUP-utvikling | Treningsprogram — iSupfactory',
      metaDescription:
        'Hvordan iSupfactory utviklet en stabil yoga-SUP-konfigurasjon for et vannsport treningsprogram — fullt dekksdekke og en ensartet programflåte.',
      kicker: 'Yogaprosjekt',
      h1: 'Utvikling av en stabil yoga-SUP-konfigurasjon for et vannsport treningsprogram',
      intro: [
        'En yoga-SUP-konfigurasjon for et treningsprogram: en bred plattform med høyt volum og fullt EVA-dekksdekke, produsert som en ensartet flåte for gruppeøvelser.',
      ],
      industry: 'Utdanning og ungdomsprogrammer',
      requirement: 'En stabil yoga-SUP-konfigurasjon med fullt dekksdekke for gruppeøvelser, i programkvantum.',
      challenge:
        'Yoga krever en bred plattform med høyt volum som holder seg stabil i vannet. Grupper trenger ensartede brett, og instruktører trenger tydelig veiledning og håndterbar oppbevaring mellom øktene.',
      solution:
        'En bred plattform med høyt volum og fullt EVA-dekksdekke, en ensartet flåtekonfigurasjon gjennom hele programmet samt instruktørveiledning og programetiketter inkludert.',
      product: 'Oppblåsbart SUP for yoga — stabil plattform med full dekkspute-dekning og en ensartet programflåte.',
      process: [
        { title: 'Programgjennomgang', body: 'Øvelsesstil, gruppestørrelse og oppbevaring bestemte konfigurasjonen.' },
        { title: 'Konfigurasjon', body: 'Plattform, dekksdekke og overflatebehandling satt på hele flåten.' },
        { title: 'Prøvegodkjenning', body: 'Stabilitet og dekksdekke verifisert på et fysisk brett.' },
        { title: 'Flåtelevering', body: 'Programkvantum produsert med sett- og emballasjevifisering.' },
      ],
      result:
        'Flåten ble levert som én ensartet konfigurasjon — hvert brett matchet den godkjente prøven i stabilitet, dekksdekke og overflatebehandling — med veiledning inkludert for instruktører.',
      outcome: 'Ensartet flåte matchet mot den godkjente prøven; programemballasje verifisert.',
      customizations: [
        'Bred plattform med høyt volum for stabilitet stående',
        'Fullt EVA-dekksdekke over det brukbare området',
        'Dekkslayout og justeringer for øvelse',
        'Konsekvent farge og overflatebehandling på hele flåten',
        'Instruktørveiledning og programetiketter',
        'Oppbevarings- og programemballasjekonfigurasjon',
      ],
      inspectionFocus: [
        'Inspeksjon av dekksdekke og EVA-feste',
        'Verifisering av oppblåsing og lufttetthet',
        'Stabilitetsverifisering på den godkjente prøven',
        'Konsistens i grafikk og overflatebehandling gjennom hele serien',
        'Komplett sett og kontroller av programemballasjen',
      ],
      confidentiality:
        'Etter avtale offentliggjøres ikke programnavnet og beliggenheten. Dette prosjektet presenteres anonymt for å beskytte kommersiell taushetsplikt.',
      tags: ['Yogakonfigurasjon', 'Fullt dekksdekke', 'Programflåte'],
    },
  ],
}

export function getProject(locale: Locale, slug: string): ProjectData | undefined {
  return (projects[locale] ?? projects.en).find((p) => p.slug === slug)
}

export interface ProjectsMeta {
  metaTitle: string
  metaDescription: string
  h1: string
}

export const projectsMeta: Localized<ProjectsMeta> = {
  en: {
    metaTitle: 'SUP Development Projects & Case Studies | iSupfactory',
    metaDescription:
      'Real SUP manufacturing projects: how resorts, brands, clubs and schools turned product requirements into finished paddle boards with iSupfactory.',
    h1: 'Projects — How We Develop SUP Products With Clients',
  },
  es: {
    metaTitle: 'Proyectos y casos de desarrollo de producto SUP | iSupfactory',
    metaDescription:
      'Proyectos reales de fabricación SUP: cómo resorts, marcas, clubes y escuelas convirtieron requisitos de producto en tablas de remo terminadas con iSupfactory.',
    h1: 'Proyectos — cómo desarrollamos productos SUP con los clientes',
  },
  fr: {
    metaTitle: 'Projets et études de cas de développement de produits SUP | iSupfactory',
    metaDescription:
      'De vrais projets de fabrication SUP : comment resorts, marques, clubs et écoles ont transformé des exigences produit en paddleboards finis avec iSupfactory.',
    h1: 'Projets — comment nous développons des produits SUP avec nos clients',
  },
  de: {
    metaTitle: 'SUP-Entwicklungsprojekte & Fallstudien | iSupfactory',
    metaDescription:
      'Reale SUP-Fertigungsprojekte: Wie Resorts, Marken, Clubs und Schulen mit iSupfactory aus Produktanforderungen fertige SUP-Boards gemacht haben.',
    h1: 'Projekte — so entwickeln wir SUP-Produkte mit Kunden',
  },
  it: {
    metaTitle: 'Progetti e casi di sviluppo di prodotti SUP | iSupfactory',
    metaDescription:
      'Progetti reali di produzione SUP: come resort, marchi, club e scuole hanno trasformato i requisiti di prodotto in paddle board finite con iSupfactory.',
    h1: 'Progetti — come sviluppiamo prodotti SUP con i clienti',
  },
  pt: {
    metaTitle: 'Projetos e casos de desenvolvimento de produtos SUP | iSupfactory',
    metaDescription:
      'Projetos reais de produção SUP: como resorts, marcas, clubes e escolas transformaram os requisitos de produto em pranchas acabadas com a iSupfactory.',
    h1: 'Projetos — como desenvolvemos produtos SUP com os clientes',
  },
  nl: {
    metaTitle: 'SUP-ontwikkelprojecten en casestudies | iSupfactory',
    metaDescription:
      'Echte SUP-productieprojecten: hoe resorts, merken, clubs en scholen met iSupfactory productvereisten omzetten in afgewerkte paddleboards.',
    h1: 'Projecten — hoe we SUP-producten met klanten ontwikkelen',
  },
  sv: {
    metaTitle: 'Våra SUP-utvecklingsprojekt & fallstudier | iSupfactory',
    metaDescription:
      'Riktiga SUP-tillverkningsprojekt: hur resorter, varumärken, klubbar och skolor med iSupfactory förvandlade produktkrav till färdiga SUP-brädor.',
    h1: 'Projekt — så utvecklar vi SUP-produkter tillsammans med kunder',
  },
  no: {
    metaTitle: 'Våre SUP-utviklingsprosjekter og casestudier | iSupfactory',
    metaDescription:
      'Reelle SUP-produksjonsprosjekter: hvordan resorts, merker, klubber og skoler sammen med iSupfactory gjorde om produktkrav til ferdige SUP-brett.',
    h1: 'Prosjekter — slik utvikler vi SUP-produkter sammen med kundene våre',
  },
}

export interface ProjectRelated {
  slug: string
  h1: string
  industry: string
}

/**
 * Top-3 related cases (shared industry / category / tags), computed from the
 * data source so the client bundle never has to carry the projects list just
 * to pick related-case links.
 */
export function relatedProjects(page: ProjectData, locale: Locale): ProjectRelated[] {
  return (projects[locale] ?? projects.en)
    .filter((p) => p.slug !== page.slug)
    .map((p) => ({
      p,
      score:
        (p.industry === page.industry ? 2 : 0) +
        (p.productCategory === page.productCategory ? 1 : 0) +
        (p.tags.some((tag) => page.tags.includes(tag)) ? 1 : 0),
    }))
    .filter((x) => x.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 3)
    .map((x) => ({ slug: x.p.slug, h1: x.p.h1, industry: x.p.industry }))
}
