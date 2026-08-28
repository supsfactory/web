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
      metaTitle: 'Flotte de location côtière | 320 planches en 120 jours — SUPsfactory',
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
      metaTitle: 'Marque privée distributeur UE | 1 200 planches en 90 jours — SUPsfactory',
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
      metaTitle: 'Flotte SUP pour resort de luxe | 100 planches de marque — SUPsfactory',
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
      metaTitle: 'Lancement SUP de marque privée | Extension de marque — SUPsfactory',
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
      metaTitle: 'Planches SUP d\'équipe de club | Renouvellement de flotte de marque — SUPsfactory',
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
      metaTitle: 'Programme de SUP scolaire | Flotte débutant — SUPsfactory',
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
      metaTitle: 'Extension de gamme SUP pour distributeur | Programme 6 références — SUPsfactory',
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
      metaTitle: 'Lancement de marque SUP startup | Du concept au premier lot — SUPsfactory',
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
      metaTitle: 'Extension de flotte de location | 200 planches, 3 sites — SUPsfactory',
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
      metaTitle: 'Développement de gamme de SUP touring | Distributeur outdoor — SUPsfactory',
      metaDescription:
        'Comment SUPsfactory a accompagné une gamme de SUP touring pour un distributeur outdoor européen — revue de plateforme, graphismes spécifiques, configuration des accessoires et emballage de détail.',
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
      metaTitle: 'Développement de SUP de pêche | Disposition des accessoires et pack — SUPsfactory',
      metaDescription:
        'Comment SUPsfactory a développé une configuration de SUP de pêche pour un détaillant outdoor — disposition des accessoires, pack organisé et emballage prêt pour le détail sous un programme contrôlé.',
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
      metaTitle: 'Développement de SUP de yoga | Programme d\'entraînement — SUPsfactory',
      metaDescription:
        'Comment SUPsfactory a développé une configuration stable de SUP de yoga pour un programme d\'entraînement de sports nautiques — couverture complète du pont et flotte de programme cohérente.',
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
  fr: {
    metaTitle: 'Projets et études de cas de développement de produits SUP | SUPsfactory',
    metaDescription:
      'De vrais projets de fabrication SUP : comment resorts, marques, clubs et écoles ont transformé des exigences produit en paddleboards finis avec SUPsfactory.',
    h1: 'Projets — comment nous développons des produits SUP avec nos clients',
  },
}
