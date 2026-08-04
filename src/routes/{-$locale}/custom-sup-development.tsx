import { createFileRoute } from '@tanstack/react-router'
import { solutionRoute } from '@/components/marketing/solution-route'

/**
 * Flagship custom-SUP solution page — the keyword-first business entry
 * ("custom SUP development"). /solutions/custom-sup 301s here.
 */
export const Route = createFileRoute('/{-$locale}/custom-sup-development')(solutionRoute('custom-sup'))
