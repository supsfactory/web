// Localization coverage check for the isupfactory production site.
//
// Usage:
//   node tools/locale-check.mjs [BASE]
//   BASE=https://staging.example.com node tools/locale-check.mjs
//
// Derives the /es and /fr twins of every English sitemap URL and verifies each
// serves 200 with a genuine translation (title differs from the en page, i.e.
// no English fallback). Also checks that every derived /es and /fr path is
// actually present in sitemap-es.xml / sitemap-fr.xml (discoverability).
// Output: ./out/locale-check.json under the script's tools/out folder.
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const OUT_DIR = path.join(scriptDir, "out");
const BASE = process.env.BASE || process.argv[2] || "https://isupfactory.com";
const CF_UA = "LocalizationCheck/1.0";
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

const LOCALES = ["es", "fr"];
const SITEMAP_FILE = { es: "sitemap-es.xml", fr: "sitemap-fr.xml" };

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
  const inSitemap = { es: new Set(), fr: new Set() };
  const esFrInSitemaps = {};
  for (const s of subs) {
    const r = await fetchText(s);
    const p = new URL(s).pathname;
    const fname = p.split("/").pop();
    if (fname === "sitemap-es.xml" || fname === "sitemap-fr.xml") {
      const loc = fname === "sitemap-es.xml" ? "es" : "fr";
      inSitemap[loc] = new Set([...inSitemap[loc], ...locPaths(r.body, `/${loc}/`), ...(/<loc>\s*[^<]*\/es\b(?![a-z-])/.test(r.body) && fname === "sitemap-es.xml" ? [`/${loc}`] : []), ...(/<loc>\s*[^<]*\/fr\b(?![a-z-])/.test(r.body) && fname === "sitemap-fr.xml" ? [`/${loc}`] : [])]);
    } else {
      const urls = locPaths(r.body, "/");
      for (const u of urls) {
        if (u.startsWith("/es/") || u === "/es" || u.startsWith("/fr/") || u === "/fr") continue;
        en.add(u);
      }
    }
  }
  esFrInSitemaps.es = inSitemap.es.size;
  esFrInSitemaps.fr = inSitemap.fr.size;

  const derive = (p, loc) => (p === "/" ? `/${loc}` : `/${loc}${p}`);
  const targets = [];
  for (const p of en) targets.push({ p, es: derive(p, "es"), fr: derive(p, "fr") });
  console.log(`EN_PAGES=${en.size} targets=${targets.length} esInSitemap=${inSitemap.es.size} frInSitemap=${inSitemap.fr.size}`);

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

  const byKind = { en: {}, es: {}, fr: {} };
  for (const r of rows) if (r.status === 200) byKind[r.kind][r.p] = r;

  const report = { es: [], fr: [] };
  const missingFromSitemap = { es: [], fr: [] };
  for (const ts of targets) {
    const e = byKind.en[ts.p];
    if (!e) { report.es.push({ p: ts.p, note: "en-missing" }); report.fr.push({ p: ts.p, note: "en-missing" }); continue; }
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
  const out = { base: BASE, sitemaps: esFrInSitemaps, targets: targets.length, esLocalized: targets.length - report.es.length, frLocalized: targets.length - report.fr.length, missingFromSitemap, report };
  fs.writeFileSync(path.join(OUT_DIR, "locale-check.json"), JSON.stringify(out, null, 2));
  console.log(`ES localized: ${out.esLocalized}/${targets.length}; FR localized: ${out.frLocalized}/${targets.length}`);
  console.log(`\nlocalized URLs missing from their locale sitemap: es=${missingFromSitemap.es.length} fr=${missingFromSitemap.fr.length}`);
  for (const loc of LOCALES) {
    for (const p of missingFromSitemap[loc].slice(0, 15)) console.log(`  MISSING ${SITEMAP_FILE[loc]}: ${p}`);
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