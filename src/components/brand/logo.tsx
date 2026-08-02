/** SUPsfactory wordmark — dual-wave mark on an ocean gradient + "SUP" (bold) + "sfactory" (62%). `compact` renders the mark only. */
export function Logo({ size = 18, compact = false }: { size?: number; compact?: boolean }) {
  return (
    <span
      className="inline-flex items-center gap-[9px] font-display font-semibold tracking-[-0.3px] text-foreground"
      style={{ fontSize: size }}
    >
      <span
        className="inline-flex shrink-0 items-center justify-center rounded-lg"
        style={{
          width: 28,
          height: 28,
          background: 'var(--ocean-grad)',
          color: '#fff',
        }}
      >
        <svg
          width="17"
          height="17"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.4"
          strokeLinecap="round"
          aria-hidden="true"
        >
          <path d="M3 8.5c2-2 4-2 6 0s4 2 6 0 4-2 6 0" />
          <path d="M3 15.5c2-2 4-2 6 0s4 2 6 0 4-2 6 0" />
        </svg>
      </span>
      {!compact && (
        <span>
          SUP<span className="font-medium opacity-[0.62]">sfactory</span>
        </span>
      )}
    </span>
  )
}
