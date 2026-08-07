import { useTranslation } from '@/features/i18n/provider'
import { pick, trustBar } from '@/features/site/content'

/** Home: trust bar — four proof stats (plant size, years, countries, certifications) right under the hero. */
export function TrustBar() {
  const { locale } = useTranslation()
  const c = pick(trustBar, locale)

  return (
    <section className="border-b border-border bg-bg-alt">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-x-7 gap-y-8 px-5 py-10 md:grid-cols-4 md:px-7 md:py-12">
        {c.stats.map((s) => (
          <div key={s.value} className="text-center md:text-left">
            <p className="font-display text-[22px] font-extrabold leading-tight tracking-tight text-primary md:text-[26px]">
              {s.value}
            </p>
            <p className="mt-1.5 text-[12.5px] font-medium leading-snug text-fg-2">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}