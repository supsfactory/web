/**
 * Feature flags — toggle individual features on/off per product deployment.
 *
 * Every feature module checks its flag here before rendering UI or
 * enabling server-side behavior. When a flag is false, the feature is
 * completely disabled (no routes, no UI, no API endpoints).
 *
 * To deploy a new product: set features that the product needs to true,
 * and the rest to false. No code deletion is required.
 */

export const features = {
  auth: true,
  search: true,
  ai: true,
  inquiry: true,
  waitlist: true,
  feedback: true,
  changelog: true,
  docs: true,
  analytics: true,
  audience: true,
  storage: true,
  email: true,
  maintenance: true,
  theme: true,
  seo: true,
} as const

export type FeatureFlags = typeof features

export function isFeatureEnabled<K extends keyof FeatureFlags>(key: K): boolean {
  return features[key]
}
