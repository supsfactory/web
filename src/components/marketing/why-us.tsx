import { useTranslation } from '@/features/i18n/provider'
import { pick, why } from '@/features/site/content'
import { SectionHead } from './section-head'
import { Reveal } from './reveal'
import { Layers, Palette, PenTool, ShieldCheck } from 'lucide-react'

const ICONS = [Layers, Palette, PenTool, ShieldCheck]

/** Home: "Why Brands Choose Us" — four large stat cards with gradient figures. */
export function WhyUs() {
  const { locale } = useTranslation()
  const c = pick(why, locale)

  return (
    <section className="mx-auto max-w-6xl px-5 py-20 md:px-7 md:py-24">
      <SectionHead kicker={c.kicker} title={c.title} sub={c.sub} />
      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {c.cards.map((card, i) => {
          const Icon = ICONS[i % ICONS.length]
          return (
            <Reveal key={card.title} delay={i * 90}>
              <div className="marine-card flex h-full flex-col p-7">
                <span className="icon-tile bg-aqua/10! text-primary!">
                  <Icon size={20} />
                </span>
                <p className="mt-5 font-display text-[2.6rem] font-extrabold leading-none tracking-tight">
                  <span className="bg-gradient-to-r from-primary via-aqua to-sun bg-clip-text text-transparent">
                    {card.value}
                  </span>
                </p>
                <p className="mt-1.5 text-[11.5px] font-bold uppercase tracking-[0.14em] text-fg-3">{card.valueLabel}</p>
                <h3 className="mt-4 font-display text-[16.5px] font-bold leading-snug">{card.title}</h3>
                <p className="mt-2 text-[13.5px] leading-relaxed text-fg-2">{card.body}</p>
              </div>
            </Reveal>
          )
        })}
      </div>
    </section>
  )
}
