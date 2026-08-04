import { createFileRoute } from '@tanstack/react-router'
import { solutionRoute } from '@/components/marketing/solution-route'

export const Route = createFileRoute('/{-$locale}/solutions/custom-sup')(solutionRoute('custom-sup'))
