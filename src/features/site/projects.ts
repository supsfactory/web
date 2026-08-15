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
      metaTitle: 'Coastal Rental Fleet | 320 Boards in 120 Days — SUPsfactory',
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
      metaTitle: 'EU Distributor Private Label | 1,200 Boards in 90 Days — SUPsfactory',
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
      metaTitle: 'Luxury Resort SUP Fleet | 100 Branded Boards — SUPsfactory',
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
      metaTitle: 'Private Label SUP Launch | Brand Extension — SUPsfactory',
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
      metaTitle: 'Club Team SUP Boards | Branded Fleet Refresh — SUPsfactory',
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
      metaTitle: 'School SUP Program | Beginner Fleet — SUPsfactory',
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
      metaTitle: 'Distributor SUP Line Expansion | 6-SKU Program — SUPsfactory',
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
      metaTitle: 'Startup SUP Brand Launch | Concept to First Batch — SUPsfactory',
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
      metaTitle: 'Rental Fleet Expansion | 200 Boards, 3 Sites — SUPsfactory',
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
      metaTitle: 'Touring SUP Range Development | Outdoor Distributor — SUPsfactory',
      metaDescription:
        'How SUPsfactory supported a touring SUP range for a European outdoor distributor — platform review, project-specific graphics, accessory configuration and retail packaging.',
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
      metaTitle: 'Fishing SUP Development | Accessory Layout & Pack — SUPsfactory',
      metaDescription:
        'How SUPsfactory developed a fishing SUP configuration for an outdoor retailer — accessory layout, organized pack and retail-ready packing under one controlled program.',
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
      metaTitle: 'Yoga SUP Development | Training Program — SUPsfactory',
      metaDescription:
        'How SUPsfactory developed a stable yoga SUP configuration for a water-sports training program — full deck coverage and a consistent program fleet.',
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
      metaTitle: 'Flota de alquiler costera | 320 tablas en 120 días — SUPsfactory',
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
      metaTitle: 'Marca privada para distribuidor UE | 1.200 tablas en 90 días — SUPsfactory',
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
      metaTitle: 'Flota SUP en resort de lujo | 100 tablas — SUPsfactory',
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
      metaTitle: 'Lanzamiento SUP de marca privada | SUPsfactory',
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
      metaTitle: 'Tablas SUP de equipo de club | SUPsfactory',
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
      metaTitle: 'Programa de SUP escolar | Flota de iniciación — SUPsfactory',
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
      metaTitle: 'Ampliación de línea SUP para distribuidor | 6 SKU — SUPsfactory',
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
      metaTitle: 'Lanzamiento de marca SUP startup | Del concepto al primer lote — SUPsfactory',
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
      metaTitle: 'Expansión de flota de alquiler | 200 tablas, 3 sedes — SUPsfactory',
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
      metaTitle: 'Desarrollo de gama SUP touring | Distribuidor outdoor — SUPsfactory',
      metaDescription:
        'Cómo SUPsfactory respaldó una gama de SUP touring para un distribuidor outdoor europeo: revisión de plataforma, arte específico, configuración de accesorios y embalaje de retail.',
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
      metaTitle: 'Desarrollo de SUP de pesca | Disposición de accesorios — SUPsfactory',
      metaDescription:
        'Cómo SUPsfactory desarrolló una configuración de SUP de pesca para un minorista outdoor: disposición de accesorios, pack organizado y embalaje listo para retail bajo un programa controlado.',
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
      metaTitle: 'Desarrollo de SUP de yoga | Programa de entrenamiento — SUPsfactory',
      metaDescription:
        'Cómo SUPsfactory desarrolló una configuración estable de SUP de yoga para un programa de entrenamiento de deportes acuáticos: cobertura total de cubierta y una flota de programa coherente.',
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
}

export function getProject(locale: Locale, slug: string): ProjectData | undefined {
  return projects[locale].find((p) => p.slug === slug)
}

export interface ProjectsMeta {
  metaTitle: string
  metaDescription: string
  h1: string
}

export const projectsMeta: Localized<ProjectsMeta> = {
  en: {
    metaTitle: 'SUP Development Projects & Case Studies | SUPsfactory',
    metaDescription:
      'Real SUP manufacturing projects: how resorts, brands, clubs and schools turned product requirements into finished paddle boards with SUPsfactory.',
    h1: 'Projects — How We Develop SUP Products With Clients',
  },
  es: {
    metaTitle: 'Proyectos y casos de desarrollo de producto SUP | SUPsfactory',
    metaDescription:
      'Proyectos reales de fabricación SUP: cómo resorts, marcas, clubes y escuelas convirtieron requisitos de producto en tablas de remo terminadas con SUPsfactory.',
    h1: 'Proyectos — cómo desarrollamos productos SUP con los clientes',
  },
}
