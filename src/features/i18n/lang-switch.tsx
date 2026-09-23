import { Check, Globe } from 'lucide-react'
import { useState } from 'react'
import { defaultLocale, type Locale } from './locale'
import { LOCALE_LABELS, SUPPORTED_LOCALES, ACTIVE_LOCALES } from '@/config/locales'
import { useTranslation } from './provider'
import { Popover, PopoverTrigger, PopoverContent } from '@/components/ui/popover'

function switchLocaleTo(target: Locale) {
  const { pathname, search, hash } = window.location
  const currentPrefix = pathname.match(/^\/([a-z]{2}(-[A-Z]{2})?)(?=\/|$)/)?.[1]
  const stripped = currentPrefix ? pathname.slice(currentPrefix.length + 1) : pathname
  const clean = stripped || '/'
  const newPath =
    target === defaultLocale ? clean : `/${target}${clean === '/' ? '' : clean}`
  const url = newPath + search + hash
  document.cookie = `locale=${target}; path=/; max-age=31536000; samesite=lax`
  window.location.href = url
}

export function LangSwitch() {
  const { locale, t } = useTranslation()
  const [open, setOpen] = useState(false)

  const currentLabel = LOCALE_LABELS[locale] ?? { native: locale, short: locale.toUpperCase() }

  const activeLocales = ACTIVE_LOCALES as readonly Locale[]

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger
        asChild
        aria-label={t('common.language')}
        className="inline-flex h-[38px] items-center gap-1.5 rounded-lg border border-transparent px-2.5 text-sm font-semibold text-fg-2 transition-colors hover:bg-bg-alt hover:text-foreground"
      >
        <button type="button">
          <Globe size={17} />
          <span>{currentLabel.short}</span>
        </button>
      </PopoverTrigger>
      <PopoverContent sideOffset={6} className="w-[240px]">
        <p className="mb-1.5 px-1 text-xs font-semibold uppercase tracking-wide text-fg-3">
          {t('common.language')}
        </p>
        <div className="grid grid-cols-1 gap-0.5">
          {SUPPORTED_LOCALES.map((code) => {
            const label = LOCALE_LABELS[code] ?? { native: code, short: code.toUpperCase() }
            const available = activeLocales.includes(code)
            const current = code === locale
            if (!available) {
              return (
                <div
                  key={code}
                  className="flex items-center gap-2 rounded-md px-2 py-1.5 opacity-45"
                  title={t('common.languageUnavailable')}
                >
                  <span className="min-w-0 flex-1 truncate text-[13px] text-fg-2">{label.native}</span>
                  <span className="text-[11px] font-medium text-fg-3">{label.short}</span>
                </div>
              )
            }
            return (
              <button
                key={code}
                type="button"
                onClick={() => {
                  setOpen(false)
                  if (code !== locale) switchLocaleTo(code)
                }}
                className={`flex items-center gap-2 rounded-md px-2 py-1.5 text-left text-[13px] transition-colors hover:bg-bg-alt ${
                  current ? 'font-semibold text-foreground' : 'text-fg-2 hover:text-foreground'
                }`}
              >
                <span className="min-w-0 flex-1 truncate">{label.native}</span>
                <span className="text-[11px] font-medium text-fg-3">{label.short}</span>
                {current && <Check size={14} className="shrink-0 text-primary" />}
              </button>
            )
          })}
        </div>
      </PopoverContent>
    </Popover>
  )
}
