import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared'

export function baseOptions(): BaseLayoutProps {
  return {
    nav: { title: 'SUPsfactory 文档' },
    links: [{ text: '首页', url: '/' }],
  }
}
