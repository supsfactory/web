/**
 * Product-specific route configuration for the content loader.
 *
 * SHADOWED_PATHS: route paths owned by static route handlers; registry
 * entries under these paths are never rendered from the content system.
 *
 * EXTRA_PATHS: dedicated-route pages served outside the registry,
 * mapping URL path → YAML slug.
 *
 * When deploying a new product, replace these with the new site's
 * route structure. The loader mechanism itself is framework-level.
 */

import { ENTITY_PAGE_PATH } from '@/config/navigation'

export const SHADOWED_PATHS: Set<string> = new Set([
  '/', '/solutions', '/products', '/who-we-serve', '/how-it-works', '/gallery', '/about',
  '/contact', '/customizer', '/waitlist', '/changelog',
  '/custom-sup-manufacturing', '/private-label-sup', '/sup-for-resorts', '/sup-for-clubs',
  '/sup-startup-brands', '/terms', '/privacy',
  '/custom-sup-development', '/solutions/private-label-sup', '/solutions/resort-sup',
  '/solutions/club-sup', '/solutions/school-sup', '/solutions/custom-sup',
  '/projects', '/projects/resort-sup-fleet', '/projects/private-label-launch',
  '/projects/club-team-boards', '/projects/school-program-fleet',
  '/knowledge', '/knowledge/how-custom-sup-boards-are-developed',
  '/knowledge/inflatable-sup-construction-explained',
  '/knowledge/how-organizations-choose-sup-equipment',
  '/oem-sup-moq',
  '/inflatable-sup-certification',
  ENTITY_PAGE_PATH,
])

export const EXTRA_PATHS: Record<string, string> = {
  '/research/drop-stitch-technology': 'research-drop-stitch',
  '/research/pvc-vs-hypalon': 'research-pvc-vs-hypalon',
  '/research/ce-certification-guide': 'research-ce-certification',
  '/research/sup-thickness-guide': 'research-sup-thickness',
  '/research/oem-buyer-guide': 'research-oem-buyer-guide',
  '/randdcenter/hull-engineering': 'hull-engineering',
  '/randdcenter/hydrodynamic-test-tank': 'hydrodynamic-test-tank',
  '/randdcenter/prototype-workshop': 'prototype-workshop',
  '/randdcenter/pvc-fabric-lab': 'pvc-fabric-lab',
  '/randdcenter/quality-inspection-lab': 'quality-inspection-lab',
  '/randdcenter/rf-welding': 'rf-welding',
  '/oem-odm': 'oem-manufacturing',
  '/oem-manufacturing': 'oem-manufacturing',
  '/odm-development': 'odm-development',
  '/product-development': 'product-development',
  '/oem/sup-oem-north-america': 'sup-oem-north-america',
  '/oem/sup-oem-europe': 'sup-oem-europe',
  '/oem/sup-oem-australia': 'sup-oem-australia',
  '/oem/sup-oem-canada': 'sup-oem-canada',
  '/oem-paddle': 'oem-paddle',
  '/solutions/rental-operators': 'solutions-rental-operators',
  '/solutions/retail-partners': 'solutions-retail-partners',
  '/solutions/distributors': 'solutions-distributors',
  '/b2b-solutions-matrix': 'b2b-solutions-matrix',
  '/oem-odm-private-label-comparison': 'oem-odm-private-label-comparison',
  '/start-sup-project': 'start-sup-project',
  '/oem-onboarding-guide': 'oem-onboarding-guide',
}
