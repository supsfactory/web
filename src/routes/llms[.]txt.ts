import { createFileRoute } from '@tanstack/react-router'
import { LLMS_TXT } from '@/features/site/llms-content'
import {
  llmAfarierIndex,
  llmProductsIndex,
  llmSolutionsIndex,
  llmProjectsIndex,
  llmKnowledgeIndex,
} from '@/features/site/llm'

// `/llms.txt` — LLM-friendly company facts card plus a full navigation index
// to every live page (see https://llmstxt.org). Derived sections share the
// sitemap rule: edge/legacy-301'd paths never appear as canonical URLs.
const handler = () =>
  new Response(
    LLMS_TXT +
      llmAfarierIndex() +
      llmProductsIndex() +
      llmSolutionsIndex() +
      llmProjectsIndex() +
      llmKnowledgeIndex(),
    { headers: { 'content-type': 'text/plain; charset=utf-8' } },
  )

export const Route = createFileRoute('/llms.txt')({
  server: { handlers: { GET: handler } },
})
