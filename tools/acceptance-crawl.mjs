// Acceptance sweep for the isupfactory production site.
//
// Usage:
//   node tools/acceptance-crawl.mjs [BASE]
//   BASE=https://staging.example.com node tools/acceptance-crawl.mjs
//
// Crawls every URL listed in /sitemap.xml (sub-sitemaps discovered from the
// index), then checks each 200 page for: title/description presence, duplicate
// titles/descriptions, title>70 chars, description outside 80-170 chars, any
// leftover afarer brand strings, and broken <img> sources (HEAD + GET fallback).
// Output: ./out/acceptance-crawl.json under the script's tools/out folder.
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const OUT_DIR = path.join(scriptDir, "out");
const BASE = process.env.BASE || process.argv[2] || "https://isupfactory.com";
const CF_UA = "DailyMaintenanceCheck/1.0";
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function fetchText(url, timeoutMs = 25000, tries = 3) {
  for (let t = 1; t <= tries; t++) {
    const ctl = new AbortController();
    const to = setTimeout(() => ctl.abort(), timeoutMs);
    try {
      const res = await fetch(url, {
        headers: { "user-agent": CF_UA, "accept": "*/*" },
        signal: ctl.signal,
        redirect: "manual",
      });
      const body = await res.text();
      return { status: res.status, body, type: res.headers.get("content-type") || "" };
    } catch (e) {
      if (t === tries) return { status: -1, body: "", type: "", err: String(e && e.code || e) };
      await sleep(1200 * t);
    } finally {
      clearTimeout(to);
    }
  }
  return { status: -1, body: "" };
}

function extractTitle(html) {
  const m = /<title[^>]*>\s*([^<]+?)\s*<\/title>/i.exec(html);
  return m ? m[1].trim() : "";
}
function extractDesc(html) {
  const m = /<meta[^>]+name=["']description["'][^>]+content=["']([^"']*)["']/i.exec(html) ||
            /<meta[^>]+content=["']([^"']*)["'][^>]+name=["']description["']/i.exec(html);
  return m ? m[1].trim() : "";
}
function extractImgs(html) {
  const out = new Set();
  const re = /<img[^>]+src=["']([^"']+)["']/gi;
  let m;
  while ((m = re.exec(html))) out.add(m[1]);
  return [...out];
}

async function getSitemaps() {
  const root = await fetchText(`${BASE}/sitemap.xml`);
  const subs = [];
  const re = /<loc>\s*([^<\s]+)\s*<\/loc>/gi;
  let m;
  while ((m = re.exec(root.body))) {
    if (m[1].includes("sitemap")) subs.push(m[1]);
  }
  if (subs.length === 0) subs.push(`${BASE}/sitemap.xml`);
  return { subs, rootStatus: root.status };
}

async function crawl() {
  fs.mkdirSync(OUT_DIR, { recursive: true });
  const { subs, rootStatus } = await getSitemaps();
  const urls = new Set();
  for (const s of subs) {
    const r = await fetchText(s);
    const re = /<loc>\s*([^<\s]+)\s*<\/loc>/gi;
    let m;
    while ((m = re.exec(r.body))) {
      if (!m[1].includes("sitemap")) urls.add(m[1]);
    }
  }
  const list = [...urls];
  console.log(`ROOT_STATUS=${rootStatus} SUB_SITEMAPS=${subs.length} TOTAL_URLS=${list.length}`);
  const seen = new Set();
  const report = [];
  const queue = [...list];
  const WW = 6;
  let idx = 0;
  async function worker() {
    while (true) {
      const i = idx++;
      if (i >= queue.length) return;
      const u = queue[i];
      if (seen.has(u)) continue;
      seen.add(u);
      const r = await fetchText(u);
      const rec = { url: u, status: r.status, final: u };
      if (r.status >= 300 && r.status < 400) {
        const loc = /<location>\s*([^<\s]+)\s*<\/location>/i.exec(r.body) || /location:\s*(\S+)/i.exec(r.body);
        if (loc) rec.final = loc[1];
      }
      if (r.status === 200) {
        rec.title = extractTitle(r.body);
        rec.desc = extractDesc(r.body);
        rec.htmlLen = r.body.length;
        rec.images = extractImgs(r.body);
        rec.hasAfarer = /afarer/i.test(r.body);
      }
      report.push(rec);
    }
  }
  await Promise.all([...Array(WW)].map(() => worker()));
  const allImgs = new Set();
  report.forEach((r) => (r.images || []).forEach((s) => allImgs.add(s)));
  console.log(`CRAWLED=${report.length} UNIQUE_IMAGES=${allImgs.size}`);
  const imgStatus = {};
  const iq = [...allImgs];
  let ii = 0;
  async function iworker() {
    while (true) {
      const i = ii++;
      if (i >= iq.length) return;
      const s = iq[i];
      const abs = s.startsWith("http") ? s : new URL(s, BASE).href;
      const ctl = new AbortController();
      const to = setTimeout(() => ctl.abort(), 15000);
      try {
        const res = await fetch(abs, { method: "HEAD", redirect: "manual", headers: { "user-agent": CF_UA }, signal: ctl.signal });
        imgStatus[s] = res.status;
      } catch (e) {
        try {
          const r2 = await fetch(abs, { headers: { "user-agent": CF_UA }, redirect: "manual", signal: ctl.signal });
          imgStatus[s] = r2.status;
        } catch (e2) {
          imgStatus[s] = "ERR";
        }
      } finally {
        clearTimeout(to);
      }
    }
  }
  await Promise.all([...Array(WW)].map(() => iworker()));
  const out = { base: BASE, rootStatus, subs, report, imgStatus };
  fs.writeFileSync(path.join(OUT_DIR, "acceptance-crawl.json"), JSON.stringify(out, null, 2));
  const badStatus = report.filter((r) => r.status !== 200);
  const afarer = report.filter((r) => r.hasAfarer);
  const noTitle = report.filter((r) => r.status === 200 && !r.title);
  const noDesc = report.filter((r) => r.status === 200 && !r.desc);
  const titles = {};
  const descs = {};
  const titleLenOver = [];
  const descLenOff = [];
  for (const r of report) {
    if (r.status !== 200) continue;
    (titles[r.title] = titles[r.title] || []).push(r.url);
    (descs[r.desc] = descs[r.desc] || []).push(r.url);
    if (r.title.length > 70) titleLenOver.push({ url: r.url, len: r.title.length, title: r.title });
    if (r.desc && (r.desc.length < 80 || r.desc.length > 170)) descLenOff.push({ url: r.url, len: r.desc.length, desc: r.desc });
  }
  const dupTitles = Object.entries(titles).filter(([t, u]) => u.length > 1);
  const dupDescs = Object.entries(descs).filter(([d, u]) => u.length > 1);
  const brokenImgs = Object.entries(imgStatus).filter(([, s]) => s !== 200);
  console.log("==== SUMMARY ====");
  console.log(`non-200 routes: ${badStatus.length}`);
  badStatus.forEach((r) => console.log(`  ${r.status} ${r.url} -> ${r.final}`));
  console.log(`pages containing 'afarer': ${afarer.length}`);
  afarer.forEach((r) => console.log(`  ${r.url}`));
  console.log(`200 pages missing title: ${noTitle.length}; missing desc: ${noDesc.length}`);
  console.log(`dup titles: ${dupTitles.length}`);
  dupTitles.slice(0, 15).forEach(([t, u]) => console.log(`  [${u.length}] ${t} :: ${u.slice(0, 3).join(" | ")}`));
  console.log(`dup descs: ${dupDescs.length}`);
  dupDescs.slice(0, 15).forEach(([d, u]) => console.log(`  [${u.length}] ${d.slice(0, 90)} :: ${u.slice(0, 3).join(" | ")}`));
  console.log(`title len>70: ${titleLenOver.length}`);
  titleLenOver.slice(0, 15).forEach((r) => console.log(`  ${r.len} ${r.url}`));
  console.log(`desc len off[80..170]: ${descLenOff.length}`);
  descLenOff.slice(0, 15).forEach((r) => console.log(`  ${r.len} ${r.url}`));
  console.log(`broken images (non-200): ${brokenImgs.length}`);
  brokenImgs.slice(0, 30).forEach(([s, st]) => console.log(`  ${st} ${s}`));
}
crawl().catch((e) => { console.error(e); process.exit(1); });