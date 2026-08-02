import * as React from 'react'

/** Scroll-reveal wrapper: fades the block up once it enters the viewport. */
export function Reveal({
  children,
  className,
  delay = 0,
  as: Tag = 'div',
}: {
  children: React.ReactNode
  className?: string
  delay?: number
  as?: 'div' | 'section' | 'li' | 'article'
}) {
  const ref = React.useRef<HTMLElement | null>(null)

  React.useEffect(() => {
    const el = ref.current
    if (!el) return
    if (typeof IntersectionObserver === 'undefined') {
      el.classList.add('is-in')
      return
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            el.classList.add('is-in')
            io.disconnect()
          }
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -36px 0px' },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <Tag ref={ref as never} className={`reveal ${className ?? ''}`} style={delay ? { transitionDelay: `${delay}ms` } : undefined}>
      {children}
    </Tag>
  )
}
