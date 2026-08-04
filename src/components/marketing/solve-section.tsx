import { Lightbulb, Layers, ShieldCheck, FlaskConical } from 'lucide-react'
import { Link } from '@tanstack/react-router'
import { useTranslation } from '@/features/i18n/provider'
import { pick, solve } from '@/features/site/content'
import { SectionHead } from './section-head'
import { Reveal } from './reveal'

const ICONS = [Lightbulb, Layers, ShieldCheck, FlaskConical]

/** Home: "What We Help You Solve" — customer concerns paired with our solutions. */
export function SolveSection() {
  const { locale } = useTranslation()
  const c = pick(solve, locale)

  return (
    <section className="mx-auto max-w-6xl px-5 py-20 md:px-7 md:py-24">
      <SectionHead kicker={c.kicker} title={c.title} sub={c.sub} />
      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {c.items.map((item, i) => {
          const Icon = ICONS[i % ICONS.length]
          return (
            <Reveal key={item.problem} delay={i * 80}>
              <div className="marine-card flex h-full flex-col p-7">
                <div className="flex items-start gap-4">
                  <span className="icon-tile shrink-0 bg-aqua/10! text-primary!">
                    <Icon size={20} />
                  </span>
                  <div>
                    <p className="text-[14.5px] font-semibold italic leading-relaxed text-fg-2">{item.problem}</p>
                    <h3 className="mt-3 font-display text-[17px] font-bold text-primary">{item.solution}</h3>
                    <p className="mt-1.5 text-[13.5px] leading-relaxed text-fg-2">{item.body}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          )
        })}
      </div>
      <div className="mt-10 text-center">
        <Link
          to="/{-$locale}/contact"
          className="sun-grad inline-flex h-[48px] items-center gap-2 rounded-full px-8 text-[15px] font-bold shadow-[0_14px_34px_-10px_rgba(255,138,61,0.75)] transition-transform hover:-translate-y-0.5"
        >
          {c.cta}
        </Link>
      </div>
    </section>
  )
}