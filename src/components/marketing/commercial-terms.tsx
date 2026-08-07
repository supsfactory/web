import { useTranslation } from '@/features/i18n/provider'
import { pick, commercial } from '@/features/site/content'
import { SectionHead } from './section-head'
import { Reveal } from './reveal'

/** Home: "Commercial Terms, Stated Upfront" — MOQ / lead time / sampling / trade terms + certifications line. */
export function CommercialTerms() {
  const { locale } = useTranslation()
  const c = pick(commercial, locale)

  return (
    <section className="mx-auto max-w-6xl px-5 py-20 md:px-7 md:py-24">
      <SectionHead kicker={c.kicker} title={c.title} sub={c.sub} />
      <div className="mt-12 grid gap-5 md:grid-cols-2">
        {c.cells.map((cell, i) => (
          <Reveal key={cell.label} delay={i * 70}>
            <div className="marine-card h-full p-7">
              <h3 className="font-display text-[17px] font-bold text-primary">{cell.label}</h3>
              <ul className="mt-4 space-y-2.5">
                {cell.lines.map((line) => (
                  <li key={line} className="flex items-start gap-2.5 text-[14px] leading-relaxed text-fg-2">
                    <span className="mt-0.5 text-primary">✓</span> {line}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
      <Reveal className="mt-8">
        <p className="rounded-2xl border border-primary/25 bg-bg-alt px-5 py-4 text-center text-[13.5px] font-semibold leading-relaxed text-fg-2">
          {c.certs}
        </p>
      </Reveal>
    </section>
  )
}