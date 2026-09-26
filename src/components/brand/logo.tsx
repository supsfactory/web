import React from 'react'
import { BRAND_LOGO_URL, SITE_NAME } from '@/config'

const MARK_STYLE: React.CSSProperties = { width: 28, height: 28, borderRadius: 8 }

/** Official iSupfactory brand mark (logo/logo192.png) + wordmark. `compact` renders the mark only. */
function LogoInner({ size = 18, compact = false }: { size?: number; compact?: boolean }) {
  return (
    <span
      className="inline-flex items-center gap-[9px] font-display font-semibold tracking-[-0.3px] text-foreground"
      style={{ fontSize: size }}
    >
      <img src={BRAND_LOGO_URL} alt={SITE_NAME} className="shrink-0" style={MARK_STYLE} />
      {!compact && <span>{SITE_NAME}</span>}
    </span>
  )
}
export const Logo = React.memo(LogoInner)