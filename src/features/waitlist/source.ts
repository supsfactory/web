export type WaitlistSource = 'waitlist'

/** Server-side allowlist for the client-supplied attribution source. */
export function clampSource(_s: string | undefined): WaitlistSource {
  return 'waitlist'
}
