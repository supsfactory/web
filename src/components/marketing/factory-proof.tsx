import { ArrowRight } from 'lucide-react'
import { useTranslation } from '@/features/i18n/provider'
import { useLocalizePath } from '@/features/i18n/use-localize-path'
import { pick, factoryProof } from '@/product/content'
import { SectionHead } from './section-head'
import { Reveal } from './reveal'

/** Home factory proof band: real plant numbers immediately below the hero, each linked to its evidence page. */
export function FactoryProof() {
  const { locale } = useTranslation()
  const c = pick(factoryProof, locale)
  const fl = useLocalizePath()

  return (
    <section className="border-b border-border bg-bg-alt">
      <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 lg:px-10 md:py-20">
        <SectionHead kicker={c.kicker} title={c.title} sub={c.sub} />
        <ul className="mt-12 grid list-none gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {c.stats.map((s, i) => (
            <Reveal as="li" key={s.label} delay={i * 80}>
              <a
                href={fl(s.href)}
                className="marine-card group flex h-full flex-col p-6 transition-transform hover:-translate-y-1"
              >
                <span className="font-display text-[2rem] font-extrabold leading-none text-primary">{s.value}</span>
                <span className="mt-2 flex-1 text-[12px] font-semibold uppercase tracking-wide text-fg-3">{s.label}</span>
                <span className="mt-4 inline-flex items-center gap-1.5 text-[13px] font-bold text-primary transition-colors group-hover:text-sun">
                  {c.cta} <ArrowRight size={14} />
                </span>
              </a>
            </Reveal>
          ))}
        </ul>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          {c.links.map((l) => (
            <a key={l.href} href={fl(l.href)} className="pill border-aqua/30! bg-aqua/10! text-primary!">
              {l.label} <ArrowRight size={14} />
            </a>
          ))}
        </div>
        <p className="mx-auto mt-6 max-w-2xl text-center text-[13px] leading-relaxed text-fg-2">{c.note}</p>
      </div>
    </section>
  )
}