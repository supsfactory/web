// Facts
export { FACTS, type FactLiteral } from './facts'

// Content (types + data)
export {
  type Localized,
  pick,
  type HeroContent,
  hero,
  type WhyBullet,
  type WhyContent,
  why,
  strip,
  type TrustStat,
  type TrustBarContent,
  trustBar,
  type ScopeCard,
  type SolveContent,
  solve,
  type CapabilityBlock,
  type CapabilityContent,
  capability,
  type QualityStep,
  type QualityContent,
  quality,
  type CommercialCell,
  type MoqTier,
  type CommercialContent,
  commercial,
  type Segment,
  type ServeContent,
  serve,
  type SolutionPillar,
  type SolutionsContent,
  solutions,
  type StudioStep,
  type StudioContent,
  studio,
  type Product,
  type ProductsContent,
  type ProductFilterGroup,
  productFilters,
  products,
  type VideoStep,
  type VideoShowcaseContent,
  videoShowcase,
  type Step,
  type WorksContent,
  works,
  type PlatformItem,
  type PlatformsContent,
  platforms,
  type Project,
  type GalleryContent,
  gallery,
  type GuideLink,
  type GuidesContent,
  guides,
  manufacturingGuides,
  type FaqItem,
  type FaqContent,
  faq,
  type CtaContent,
  cta,
  type ValuePropCard,
  type ValuePropContent,
  valueProp,
  type BoundaryRow,
  type BoundaryContent,
  boundary,
  type AboutContent,
  about,
  type CustomizerContent,
  customizer,
  type ProductsPageContent,
  productsPage,
  type CatalogContent,
  catalogDownload,
  type GalleryPageContent,
  galleryPage,
  type ServePageContent,
  servePage,
  type WorksPageContent,
  worksPage,
  type SeriesItem,
  type SeriesContent,
  series,
} from './content'

// Projects
export {
  type ProjectData,
  projects,
  getProject,
  type ProjectsMeta,
  projectsMeta,
} from './projects'

// Series pages
export {
  type SeriesPageData,
  seriesPages,
  getSeriesPage,
} from './series-pages'

// Knowledge
export {
  type KnowledgeArticle,
  knowledge,
  getArticle,
  type KnowledgeMeta,
  knowledgeMeta,
} from './knowledge'

// Solution pages
export {
  type CtaLevel,
  type SolutionPageData,
  SOLUTION_PATHS,
  solutionPath,
  solutionPages,
  getSolutionPage,
} from './solution-pages'

// Procurement
export {
  type ProcurementRow,
  type ProcurementProfile,
  procurementProfiles,
  commercialRows,
} from './procurement'

// LLMS content
export { LLMS_TXT } from './llms-content'

// Site config
export {
  SITE_FACTS,
  HERO_CONTENT,
  siteConfig,
  type Locale,
} from './site-config'

// Guide content
export {
  type GuideSection,
  type Guide,
  GUIDES,
  GUIDES_ES,
  getGuide,
  getGuideBySlug,
  type GuideCard,
  GUIDE_CARDS,
  guideCard,
} from './guide-content'

// Hub pages
export { buildHubEntries } from './hub-pages'
