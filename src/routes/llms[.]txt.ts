import { createFileRoute } from '@tanstack/react-router'
import { llms } from 'fumadocs-core/source'
import { source } from '@/features/docs/source'
import { llmProductsIndex, llmLandingsIndex, llmSolutionsIndex, llmAfarerIndex } from '@/features/site/llm'

// `/llms.txt` — an LLM-friendly index of the docs (title + description + link
// per page, grouped by the sidebar tree). See https://llmstxt.org.
const handler = () =>
  new Response(
    llms(source).index() + llmProductsIndex() + llmLandingsIndex() + llmSolutionsIndex() + llmAfarerIndex(),
    {
      headers: { 'content-type': 'text/markdown; charset=utf-8' },
    },
  )

export const Route = createFileRoute('/llms.txt')({
  server: { handlers: { GET: handler } },
})
