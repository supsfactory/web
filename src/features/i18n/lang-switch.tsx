import { useRouter } from '@tanstack/react-router'
import { Globe } from 'lucide-react'
import { defaultLocale, locales, type Locale } from './locale'
import { useTranslation } from './provider'

function switchLocaleTo(target: Locale) {
  const router = useRouter()
  const { pathname, search, hash } = window.location
  const stripped = pathname.replace(/^\/[a-z]{2}(?=\/|$)/, '') || '/'
  const newPath =
    target === defaultLocale ? stripped : `/${target}${stripped === '/' ? '' : stripped}`
  const href = newPath + search + hash
  document.cookie = `locale=${target}; path=/; max-age=31536000; samesite=lax`
  router.navigate({ href, replace: true } as never)
}

export function LangSwitch() {
  const { locale, t } = useTranslation()

  if (locales.length < 2) return null

  const next: Locale = locale === 'en' ? 'es' : 'en'

  function handleSwitch() {
    switchLocaleTo(next)
  }

  return (
    <button
      type="button"
      onClick={handleSwitch}
      aria-label={t('common.language')}
      className="inline-flex h-[38px] items-center gap-1.5 rounded-lg border border-transparent px-2.5 text-sm font-semibold text-fg-2 transition-colors hover:bg-bg-alt hover:text-foreground"
    >
      <Globe size={17} />
      <span>{locale === 'es' ? 'ES' : 'EN'}</span>
    </button>
  )
}
