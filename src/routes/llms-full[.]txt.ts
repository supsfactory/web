import { createFileRoute } from '@tanstack/react-router'

// `/llms-full.txt` — the whole marketing site as plain Markdown (company facts
// card + every page body), so an LLM can ingest the full site in one request.
//
// `llm.ts` loads the full product corpus, so it stays out of the client bundle
// via dynamic import — this route only ever executes server-side.
const handler = async () => {
  const llm = await import('@/features/site/llm')
  return new Response(
    llm.llmSiteHeader() +
      llm.llmProductsFull() +
      llm.llmSolutionsFull() +
      llm.llmProjectsFull() +
      llm.llmKnowledgeFull() +
      llm.llmsAfarerFull() +
      llm.llmsAfarerSpanishFull(),
    {
      headers: { 'content-type': 'text/markdown; charset=utf-8' },
    },
  )
}

export const Route = createFileRoute('/llms-full.txt')({
  server: { handlers: { GET: handler } },
})