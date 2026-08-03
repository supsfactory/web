import { test, expect, type BrowserContext } from '@playwright/test'
import { execSync } from 'node:child_process'

/**
 * Capture the authenticated pages used in the README "Preview" section.
 *
 * Produces dark-theme (default), 1440-wide full-page shots of the admin stats
 * dashboard, the admin user table, and the app dashboard. Written
 * to e2e/screenshots/readme/ (git-ignored); the good ones are copied into
 * .github/assets/ for the README.
 *
 *   npx playwright install chromium
 *   pnpm exec playwright test e2e/readme-shots.spec.ts
 *
 * Auth mirrors admin-users.spec.ts: sign up admin@example.com (in ADMIN_EMAILS
 * → admin role), mark it verified in the local D1, sign in.
 */

const ADMIN = { email: 'admin@example.com', password: 'password12345', name: 'Admin' }
const OUT = 'e2e/screenshots/readme'

function d1(command: string) {
  execSync(`npx wrangler d1 execute supsfactory-db --local --command "${command}"`, {
    stdio: 'ignore',
  })
}

async function loginAsAdmin(context: BrowserContext, baseURL: string) {
  const origin = baseURL.replace(/\/$/, '')
  await context.request.post(`${origin}/api/auth/sign-up/email`, { headers: { origin }, data: ADMIN })
  d1(`UPDATE user SET email_verified = 1 WHERE email = '${ADMIN.email}'`)
  const res = await context.request.post(`${origin}/api/auth/sign-in/email`, {
    headers: { origin },
    data: { email: ADMIN.email, password: ADMIN.password },
  })
  expect(res.ok(), 'admin sign-in should succeed').toBeTruthy()
}

test('README preview shots (dark, full page)', async ({ page, context, baseURL }) => {
  const base = baseURL ?? 'http://localhost:3000'
  await loginAsAdmin(context, base)

  await page.setViewportSize({ width: 1440, height: 900 })

  const shots: Array<[string, string]> = [
    ['/admin', `${OUT}/admin.png`],
    ['/admin/users', `${OUT}/admin-users.png`],
    ['/app', `${OUT}/app-dashboard.png`],
  ]

  for (const [path, file] of shots) {
    // 'networkidle' never settles under the vite dev HMR websocket — use load
    // + a fixed pause for entrance motion instead.
    await page.goto(path, { waitUntil: 'domcontentloaded' })
    await expect(page.locator('html')).toHaveClass(/dark/)
    await page.waitForTimeout(1500)
    await page.screenshot({ path: file, fullPage: true })
  }
})
