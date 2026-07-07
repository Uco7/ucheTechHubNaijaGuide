# HowFar — Step-by-step guides for Nigeria

A Next.js (React) site for publishing hundreds of "how-to" guides —
government services, education, banking, telecom, jobs and everyday tasks —
built for SEO from the ground up and ready to monetise with display ads.

> **Why Next.js and not plain React?** You asked for React with strong SEO
> and ad monetisation. Plain client-side React (a single-page app) ships an
> empty HTML shell that search engines have to execute JavaScript to see —
> risky for a content site that lives or dies by Google traffic. Next.js
> **is** React (same components, hooks, JSX) but pre-renders every guide to
> real HTML at build time, so crawlers, social previews, and ad viewability
> all work immediately. This is the standard choice for content/ad-driven
> sites in the React ecosystem.

## What's included

- **142 topic clusters** (`lib/categories.js`) across **28 countries and 4
  regions** (Africa, Europe, North America, Oceania), targeting **2,305
  planned articles** — see `CONTENT-ROADMAP.md` for the full breakdown by
  section and country.
- **International from day one, region by region**: Nigeria is fully built
  out as the primary market. Section pages (`/government`, `/telecom`,
  `/education`) automatically group clusters by **region → country**
  ("Home > Africa > Nigeria / Ghana / Kenya...") the moment a section has
  more than one country — currently covering 18 African countries, 6
  European countries, the US and Canada, and Australia and New Zealand.
  `lib/countries.js` is the country registry; adding a new country is a
  two-line change (see the roadmap doc's "Adding a new country from
  scratch" section).
- **~63 fully written starter articles** across NIN, JAMB, WAEC, NYSC,
  GTBank, OPay, MTN, Jobs, Everyday Life, Safaricom, M-Pesa, MTN Ghana,
  Verizon, EE, Uganda's National ID/SIM registration, South Africa's SASSA/
  Smart ID, and US REAL ID/voter registration — so the site is real and
  navigable, across multiple regions, on day one.
- **Three-level URL structure**: `/section` → `/section/cluster` →
  `/section/cluster/article-slug` — the topic-cluster architecture your
  outline described, so Google sees clear topical authority instead of
  scattered pages.
- **SEO baked in**: per-page metadata, canonical URLs, Open Graph/Twitter
  cards, an auto-generated `sitemap.xml` and `robots.txt`, and **HowTo +
  FAQPage structured data (JSON-LD)** on every article — this is what makes
  guides eligible for rich results (step snippets, FAQ dropdowns) in Google.
- **Ad slots** (`components/AdSlot.jsx`) already placed in the layout —
  leaderboard under the header, in-article units around the steps, and a
  sticky sidebar unit on desktop — wired for Google AdSense with a single
  config change.
- **Responsive, distinctive design**: a "service slip" visual motif (dashed
  perforation edges, numbered stubs) that mirrors the NIN slips, JAMB slips
  and bank receipts this content is actually about, in a deep green / paper
  / amber palette — not a generic template look.
- **Fully static-friendly**: every guide is pre-rendered, so hosting is
  cheap (Vercel free tier, or any static/Node host) and pages load fast,
  which matters both for SEO ranking and ad viewability/RPM.

## Project structure

```
app/
  layout.js                 Root layout: fonts, global metadata, header/footer
  page.js                   Homepage
  sitemap.js                Auto-generated sitemap.xml
  robots.js                 Auto-generated robots.txt
  not-found.js               Custom 404
  search/page.js            Simple built-in search
  about/, contact/, privacy/page.js
  [section]/page.js                    e.g. /government
  [section]/[cluster]/page.js          e.g. /government/nin
  [section]/[cluster]/[slug]/page.js   e.g. /government/nin/how-to-enroll-for-nin
components/                 Header, Footer, AdSlot, StepList, ArticleCard, ...
lib/
  categories.js              The 142-cluster taxonomy across 28 countries + planned counts (edit this to restructure the site)
  countries.js               Country registry (flag, name, region) powering the international expansion
  content.js                 Loads all article data, provides lookup/search helpers
  site.js                    Site name, URL, AdSense IDs — central config
data/articles/*.js           Article content, grouped by cluster
CONTENT-ROADMAP.md           The full 2,305-article, 28-country plan, section by section
```

## Running locally

This environment couldn't install packages or run a dev server for you (no
network access in the sandbox that built this), so you'll need Node.js 18+
on your own machine:

```bash
npm install
npm run dev
# open http://localhost:3000
```

To build the fully static/production version:

```bash
npm run build
npm run start
```

## Deploying

The easiest path is **Vercel** (made by the Next.js team, generous free
tier, zero-config):

1. Push this project to a GitHub repository.
2. Go to vercel.com → New Project → import the repo.
3. Leave the default build settings (Vercel detects Next.js automatically).
4. Add your custom domain under Project → Settings → Domains.

Netlify, Cloudflare Pages, and any Node-capable host also work fine.

## Before you launch: things to change

1. **`lib/site.js`** — set `SITE_URL` to your real domain. This feeds every
   canonical URL, sitemap entry, and structured-data block.
2. **`public/ads.txt`** — replace the placeholder with the exact line your
   AdSense account gives you (Google won't serve ads reliably without it).
3. **Fonts/branding** — the palette and type are defined as CSS variables
   in `tailwind.config.js` and loaded in `app/layout.js`; change the "HowFar"
   name in `lib/site.js` if you rename the brand.
4. Add a real logo/favicon to `/public` and reference it from `app/layout.js`
   `metadata.icons` once you have one.

## Setting up Google AdSense

1. Apply at adsense.google.com with your live domain (Google needs to crawl
   real content, so publish your starter articles and wait for indexing
   first — a placeholder site with no content is a common rejection reason).
2. Once approved, paste your publisher ID (`ca-pub-xxxxxxxxxxxxxxxx`) into
   `ADSENSE_CLIENT_ID` in `lib/site.js`.
3. Create ad units in your AdSense dashboard and paste their slot IDs into
   `AD_SLOTS` in the same file, then pass them to the `<AdSlot slot="..." />`
   calls in `app/[section]/[cluster]/[slug]/page.js` and `app/page.js`.
4. Update `public/ads.txt` with the exact line AdSense provides.
5. Until you complete steps 2–4, every `<AdSlot />` renders a clearly
   labelled placeholder box instead of breaking your layout — so you can
   develop and preview the full site before approval comes through.

**Traffic-to-revenue reality check**: display ad income scales with
pageviews, and pageviews come from search rankings, which take months to
build even with excellent content. The fastest lever here is the one your
original plan already identified — publish the highest-search-volume
clusters first (NIN, JAMB, WAEC, the big banks, all four telecoms) so the
site earns topical authority and starts ranking sooner.

## SEO checklist already handled

- Unique `<title>` and meta description per page (`generateMetadata`)
- Canonical URLs on every page
- `HowTo` structured data on every article (step snippets in search)
- `FAQPage` structured data where an article has FAQs (FAQ rich results)
- `BreadcrumbList` structured data (breadcrumb rich results)
- `WebSite` + `SearchAction` structured data on the homepage (sitelinks
  search box eligibility)
- Auto-generated `sitemap.xml` and `robots.txt`
- Semantic HTML (`<article>`, `<nav>`, `<h1>`–`<h3>` hierarchy, `<details>`
  for FAQs so they're crawlable without JS)
- Mobile-first responsive layout, visible focus states, reduced-motion
  support

## What's intentionally left for you

- Real content for the remaining ~2,242 planned articles across 28
  countries and 4 regions (see
  `CONTENT-ROADMAP.md`) — I can write these in batches with you directly in
  this chat; just tell me which cluster to do next.
- Analytics (Google Analytics / Plausible) — add the script tag in
  `app/layout.js` once you have a property ID.
- A real contact form backend (currently a `mailto:` link).
- A proper logo/favicon and Open Graph share image.
