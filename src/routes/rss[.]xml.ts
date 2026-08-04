import { createFileRoute } from '@tanstack/react-router'
import { env } from '@/lib/env'
import { getNewsPosts } from '@/features/content/loader'

// `/rss.xml` — RSS 2.0 feed of the ported afarer news posts (see /news).
const escape = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')

const rfc822 = (iso: string): string => {
  const d = new Date(iso)
  return Number.isNaN(d.getTime()) ? '' : d.toUTCString()
}

const handler = () => {
  const origin = new URL(env.BETTER_AUTH_URL).origin
  const posts = getNewsPosts()
  const items = posts.map((p) => {
    const url = `${origin}/news/${p.slug}`
    const pubDate = rfc822(p.date)
    return [
      '  <item>',
      `    <title>${escape(p.title)}</title>`,
      `    <link>${url}</link>`,
      `    <guid isPermaLink="true">${url}</guid>`,
      pubDate ? `    <pubDate>${pubDate}</pubDate>` : '',
      p.category ? `    <category>${escape(p.category)}</category>` : '',
      p.author ? `    <author>${escape(p.author)}</author>` : '',
      p.excerpt ? `    <description>${escape(p.excerpt)}</description>` : '',
      '  </item>',
    ]
      .filter(Boolean)
      .join('\n')
  })
  const xml = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">',
    '  <channel>',
    '    <title>SUPsfactory News</title>',
    `    <link>${origin}/news</link>`,
    '    <description>Latest news from SUPsfactory & afarer — factory updates, new inflatable SUP models, certifications and nautical industry announcements.</description>',
    `    <atom:link href="${origin}/rss.xml" rel="self" type="application/rss+xml"/>`,
    posts.length > 0 ? `    <lastBuildDate>${rfc822(posts[0].date)}</lastBuildDate>` : '',
    ...items,
    '  </channel>',
    '</rss>',
    '',
  ]
    .filter(Boolean)
    .join('\n')
  return new Response(xml, {
    headers: { 'content-type': 'application/rss+xml; charset=utf-8' },
  })
}

export const Route = createFileRoute('/rss.xml')({
  server: { handlers: { GET: handler } },
})
