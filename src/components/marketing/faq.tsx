import { Plus } from 'lucide-react'
import { useTranslation } from '@/features/i18n/provider'
import { pick, faq } from '@/product/content'
import { SectionHead } from './section-head'

/** SEO-friendly FAQ accordion (native <details>, no JS needed). */
export function FaqSection({ heading }: { heading?: React.ReactNode }) {
  const { locale } = useTranslation()
  const c = pick(faq, locale)

  return (
    <section className="mx-auto max-w-3xl px-5 py-20 md:px-7 md:py-24">
      {heading ?? (
        <SectionHead
          kicker={c.kicker}
          title={c.title}
          sub={c.sub}
        />
      )}
      <div className="mt-12 flex flex-col gap-3">
        {c.items.map((item) => (
          <details key={item.q} className="faq-row">
            <summary>
              {item.q}
              <Plus size={17} className="faq-icon" />
            </summary>
            <div className="faq-body">{item.a}</div>
          </details>
        ))}
      </div>
    </section>
  )
}
