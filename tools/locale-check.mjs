// Localization coverage check for the isupfactory production site.
//
// Usage:
//   node tools/locale-check.mjs [BASE]
//   BASE=https://staging.example.com node tools/locale-check.mjs
//   LOCALES=es,fr,ar node tools/locale-check.mjs
//
// For every locale in LOCALES, derives the /<loc> twin of every English
// sitemap URL and verifies each serves 200 with a genuine translation (title
// differs from the en page, i.e. no English fallback). Also checks that every
// derived path is actually present in that locale's sitemap
// (discoverability). Output: ./out/locale-check.json under tools/out.
//
// LOCALES defaults to the locales with a dedicated sitemap file. Override it
// to check a locale that shares a sitemap, or to narrow a long run.
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const OUT_DIR = path.join(scriptDir, "out");
const BASE = process.env.BASE || process.argv[2] || "https://isupfactory.com";
const CF_UA = "LocalizationCheck/1.0";
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

const LOCALES = (process.env.LOCALES || "es,fr")
  .split(",")
  .map((l) => l.trim())
  .filter(Boolean);

// Every locale the site knows about, not just the ones under test. The English
// page set is "every sitemap URL that is not a localized twin", so the
// exclusion has to span all locales — otherwise a /fr/ URL leaks into the
// English set and derives a nonsense twin like /es/fr/solutions. Sourced from
// ACTIVE_LOCALES in src/config/locales.ts, unioned with any sitemap-<loc>.xml
// found in the sitemap index, so the two can never drift apart silently.
function knownLocales() {
  const set = new Set(LOCALES);
  try {
    const src = fs.readFileSync(path.join(scriptDir, "..", "src", "config", "locales.ts"), "utf8");
    const m = src.match(/ACTIVE_LOCALES[^=]*=\s*\[([^\]]*)\]/);
    if (m) for (const q of m[1].matchAll(/['"]([a-z]{2}(?:-[A-Z]{2})?)['"]/g)) set.add(q[1]);
  } catch {
    // locales.ts not readable (e.g. running from a checkout copy) — fall back
    // to whatever the sitemap index reveals below.
  }
  return set;
}

async function fetchText(url, timeoutMs = 22000, tries = 3) {
  for (let t = 1; t <= tries; t++) {
    const ctl = new AbortController();
    const to = setTimeout(() => ctl.abort(), timeoutMs);
    try {
      const res = await fetch(url, { headers: { "user-agent": CF_UA }, signal: ctl.signal, redirect: "manual" });
      const body = await res.text();
      return { status: res.status, body };
    } catch {
      if (t === tries) return { status: -1, body: "" };
      await sleep(1200 * t);
    } finally { clearTimeout(to); }
  }
  return { status: -1, body: "" };
}

const grab = (html, re) => { const m = re.exec(html); return m ? m[1].trim() : ""; };
const locPaths = (body, prefix) => {
  const out = new Set();
  const re = /<loc>\s*([^<\s]+)\s*<\/loc>/gi;
  let m;
  while ((m = re.exec(body))) {
    const p = new URL(m[1]).pathname;
    if (p.startsWith(prefix)) out.add(p);
  }
  return out;
};

async function main() {
  fs.mkdirSync(OUT_DIR, { recursive: true });
  const root = await fetchText(`${BASE}/sitemap.xml`);
  const subs = [];
  const sre = /<loc>\s*([^<\s]+)\s*<\/loc>/gi;
  let m;
  while ((m = sre.exec(root.body))) if (m[1].includes("sitemap")) subs.push(m[1]);
  if (subs.length === 0) subs.push(`${BASE}/sitemap.xml`);

  const en = new Set();
  const inSitemap = Object.fromEntries(LOCALES.map((l) => [l, new Set()]));
  const sitemapCounts = {};
  const allLocales = knownLocales();
  for (const s of subs) {
    const r = await fetchText(s);
    const p = new URL(s).pathname;
    const fname = p.split("/").pop();
    // any sitemap-<loc>.xml teaches us a locale even if not under test
    const discovered = fname && fname.match(/^sitemap-([a-z]{2}(?:-[A-Z]{2})?)\.xml$/);
    if (discovered) allLocales.add(discovered[1]);
    const loc = LOCALES.find((l) => fname === `sitemap-${l}.xml`);
    if (loc) {
      inSitemap[loc] = new Set([
        ...inSitemap[loc],
        ...locPaths(r.body, `/${loc}/`),
        // the bare locale root, e.g. <loc>https://host/es</loc>
        ...(new RegExp(`<loc>\\s*[^<]*/${loc}\\b(?![a-z-])`).test(r.body) ? [`/${loc}`] : []),
      ]);
    } else {
      const urls = locPaths(r.body, "/");
      for (const u of urls) {
        // skip every localized twin across every locale, not just LOCALES
        if ([...allLocales].some((l) => u === `/${l}` || u.startsWith(`/${l}/`))) continue;
        en.add(u);
      }
    }
  }
  for (const l of LOCALES) sitemapCounts[l] = inSitemap[l].size;

  const derive = (p, loc) => (p === "/" ? `/${loc}` : `/${loc}${p}`);
  const targets = [];
  for (const p of en) {
    const t = { p };
    for (const l of LOCALES) t[l] = derive(p, l);
    targets.push(t);
  }
  console.log(
    `EN_PAGES=${en.size} targets=${targets.length} knownLocales=${allLocales.size} ` +
      LOCALES.map((l) => `${l}InSitemap=${sitemapCounts[l]}`).join(" "),
  );

  const rows = [];
  const seen = new Set();
  const allUrls = [];
  for (const ts of targets) for (const loc of ["en", ...LOCALES]) allUrls.push({ p: loc === "en" ? ts.p : ts[loc], kind: loc });
  let idx = 0;
  async function worker() {
    while (true) {
      const i = idx++;
      if (i >= allUrls.length) return;
      const { p, kind } = allUrls[i];
      if (seen.has(kind + p)) continue;
      seen.add(kind + p);
      const r = await fetchText(`${BASE}${p}`);
      if (r.status !== 200) { rows.push({ p, kind, status: r.status }); continue; }
      const lang = grab(r.body, /<html[^>]+lang=["']([^"']+)["']/i);
      const title = grab(r.body, /<title[^>]*>\s*([^<]+?)\s*<\/title>/i);
      const h1 = grab(r.body, /<h1[^>]*>([\s\S]*?)<\/h1>/i).replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
      rows.push({ p, kind, status: 200, lang, title, h1 });
    }
  }
  await Promise.all([...Array(8)].map(() => worker()));

  const byKind = { en: {} };
  for (const l of LOCALES) byKind[l] = {};
  for (const r of rows) if (r.status === 200) byKind[r.kind][r.p] = r;

  const report = Object.fromEntries(LOCALES.map((l) => [l, []]));
  const missingFromSitemap = Object.fromEntries(LOCALES.map((l) => [l, []]));
  for (const ts of targets) {
    const e = byKind.en[ts.p];
    if (!e) {
      for (const loc of LOCALES) report[loc].push({ p: ts.p, note: "en-missing" });
      continue;
    }
    for (const loc of LOCALES) {
      if (!inSitemap[loc].has(ts[loc])) missingFromSitemap[loc].push(ts[loc]);
      const r = byKind[loc][ts[loc]];
      if (!r) { report[loc].push({ p: ts.p, url: ts[loc], status: r ? r.status : "-", note: "no-fetch/404" }); continue; }
      if (r.status !== 200) { report[loc].push({ p: ts.p, url: ts[loc], status: r.status, note: "non-200" }); continue; }
      const sameTitle = r.title === e.title;
      const bothH1 = Boolean(r.h1) && Boolean(e.h1);
      const sameH1 = bothH1 && r.h1 === e.h1;
      if (!sameTitle && !sameH1) { /* genuinely localized (or H1 client-rendered) */ }
      else {
        report[loc].push({
          p: ts.p, url: ts[loc], status: 200, lang: r.lang, enLang: e.lang,
          ln: loc.toUpperCase(),
          sameTitle, sameH1,
          title: r.title, enTitle: e.title,
        });
      }
    }
  }
  const out = {
    base: BASE,
    locales: LOCALES,
    sitemaps: sitemapCounts,
    targets: targets.length,
    localized: Object.fromEntries(LOCALES.map((l) => [l, targets.length - report[l].length])),
    missingFromSitemap,
    report,
  };
  fs.writeFileSync(path.join(OUT_DIR, "locale-check.json"), JSON.stringify(out, null, 2));
  console.log(
    LOCALES.map((l) => `${l.toUpperCase()} localized: ${out.localized[l]}/${targets.length}`).join("; "),
  );
  console.log(
    "\nlocalized URLs missing from their locale sitemap: " +
      LOCALES.map((l) => `${l}=${missingFromSitemap[l].length}`).join(" "),
  );
  for (const loc of LOCALES) {
    for (const p of missingFromSitemap[loc].slice(0, 15)) console.log(`  MISSING sitemap-${loc}.xml: ${p}`);
  }
  for (const loc of LOCALES) {
    const recs = report[loc];
    console.log(`\n==== ${loc.toUpperCase()} fallback/missing (${recs.length}) ====`);
    for (const r of recs) {
      console.log(`${loc.toUpperCase()} ${r.status ?? "?"} ${r.url} sameTitle=${r.sameTitle} sameH1=${r.sameH1} lang=${r.lang ?? "-"} "${String(r.title ?? "").slice(0, 60)}"`);
    }
  }
}
main().catch((e) => { console.error(e); process.exit(1); });