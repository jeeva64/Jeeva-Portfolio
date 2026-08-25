# SEO Practices — Post-Deployment Guide

Checklist for everything to do **after** `firebase deploy --only hosting:jeeva-dev` ships `dist/` to https://jeeval.dev.

The in-repo SEO foundation (meta tags, Open Graph, Twitter cards, JSON-LD `Person` schema, canonical URL, semantic headings, alt text, `robots.txt`, `sitemap.xml`, `llms.txt`, favicon set) is already handled — this file covers what happens once the site is live.

---

## 1. Immediately after every deploy

- [ ] Visit https://jeeval.dev and hard-refresh (Ctrl+Shift+R) — confirm the new build is live
- [ ] Spot-check the contact form (send a test message; confirm it arrives)
- [ ] Confirm static files resolve directly (no SPA HTML fallback):
  - `/robots.txt`, `/sitemap.xml`, `/llms.txt`, `/resume.pdf`
  - one image, e.g. `/Images/Projects/automl.webp`
- [ ] Check both themes + mobile width render correctly

## 2. Search engine setup (one-time)

### Google Search Console
1. Add property for `https://jeeval.dev` (Domain or URL-prefix). Domain property is preferred — verify via DNS TXT record.
2. Submit sitemap: `https://jeeval.dev/sitemap.xml` (Search Console → Sitemaps).
3. After each meaningful content change: use **URL Inspection → Request Indexing** on `https://jeeval.dev/`.
4. Monitor **Core Web Vitals** and **Page indexing** reports monthly.

### Bing Webmaster Tools
1. Sign in and **import from Google Search Console**.
2. Submit the same sitemap.

> Only submit after a real deploy — never point tools at an empty site.

## 3. Structured data & rich results

- Test JSON-LD with [Rich Results Test](https://search.google.com/test/rich-results) on `https://jeeval.dev/` (expect a valid `Person` result).
- Re-test whenever `sameAs`, `knowsAbout`, or job title data changes in `index.html`.
- Keep `image` (`/profile.png`) valid — that file must always exist.

## 4. Social preview validation

Validate whenever the OG tags or `og-image.png` change:

| Platform | Tool |
|---|---|
| Facebook / LinkedIn / general | https://www.metatags.io |
| X / Twitter | https://cards-dev.twitter.com/validator (or post the link privately) |

Requirements already met by the repo: 1200×630 PNG under ~200 KB (`og-image.png` ≈ 190 KB), `og:title/description/image/alt`, Twitter `summary_large_image`.

## 5. Performance = ranking factor

- **Measure production only**: `npm run build && npm run preview` → audit `http://localhost:4173/`. Dev server (`:8080`) numbers are meaningless (unminified, HMR, no compression).
- Audit in incognito with extensions off.
- Firebase Hosting serves gzip/brotli automatically — don't disable it.
- Current budget (keep it): main JS ≤ ~130 KB gz, Three.js chunk lazy (~230 KB gz), og-image < 200 KB, all section images ≤ 130 KB WebP.
- Track field data via PageSpeed Insights (CrUX) once traffic exists.

## 6. Content & freshness

- The site is client-rendered; Google renders JS, but keep critical copy in the components' initial render (it is — no skeletons gating content).
- Update `public/sitemap.xml` `<lastmod>` when you make real content changes (new project, updated experience).
- Single-page anchors (`/#about`) are not indexed as separate URLs — don't create duplicate meta for them.
- When adding a new project/certification: update the component data **and** (if notable) the JSON-LD `knowsAbout` list.

## 7. AI crawler policy (keep these three in sync)

| File | Role |
|---|---|
| `public/robots.txt` | `Content-Signal: search=yes, ai-input=yes, ai-train=no`; blocks GPTBot/ClaudeBot/CCBot/etc. |
| `public/llms.txt` | Human/LLM-readable summary mirroring that policy, with key links |
| `index.html` | Meta description used by llms-style summaries |

If any policy changes, update **both** files in the same commit.

## 8. Backlinks (biggest lever for a personal site)

Link the portfolio from:
- GitHub profile bio + repo READMEs
- LinkedIn headline/about + featured section
- LeetCode profile, X bio
- Resume PDF footer ("jeeval.dev")

## 9. Recurring cadence

| Frequency | Task |
|---|---|
| Every deploy | Section 1 checklist |
| Monthly | GSC coverage + Core Web Vitals review; PageSpeed check |
| Quarterly | Rich Results re-test; validate social previews if images changed; refresh sitemap `lastmod` if content changed |
| On content change | Request re-indexing in GSC; consider a "what's new" note in About |

## 10. Optional next steps (not yet in repo)

- Privacy-friendly analytics (e.g., Plausible, Umami) — none installed today; add only with consent-friendly config
- `firebase.json` cache headers for hashed assets (`/assets/*` → `cache-control: public,max-age=31536000,immutable`)
- Prerendering (e.g., `vite-plugin-prerender`) only if crawl/index issues appear — currently unnecessary
