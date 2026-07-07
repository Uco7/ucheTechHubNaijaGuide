# HowFar Content Roadmap

This is the working plan for getting from today's starter set (~63 articles)
to **2,305 planned guides across 142 topic clusters and 28 countries** —
Nigeria first and deepest, now expanding across Africa (Ghana, Kenya, South
Africa, Egypt, Uganda, Tanzania, Rwanda, Ethiopia, Zambia, Zimbabwe,
Botswana, Namibia, Sierra Leone, Liberia, Cameroon, Senegal, Côte d'Ivoire),
Europe (UK, Germany, France, Netherlands, Sweden, Norway), North America
(US, Canada) and Oceania (Australia, New Zealand) — organised the same
topic-cluster way you sketched it, region by region.

`lib/categories.js` is the single source of truth, and `lib/countries.js`
holds the country registry (flag, name, region grouping). This file is just
a readable snapshot — if you change a planned count or add a cluster/country
in code, update it here too (or regenerate this file by running the totals
script at the bottom).

## Totals by section

| Section | Clusters | Planned articles | Countries covered |
|---|---|---|---|
| Government Services | 39 | 686 | Nigeria + 17 more African countries + UK, US, Canada, Germany, France, Netherlands, Sweden, Norway, New Zealand |
| Telecom | 43 | 586 | Nigeria + 17 more African countries + US, UK, Canada, Australia |
| Education | 24 | 361 | Nigeria + 12 more African countries + Germany, France, Netherlands, Sweden, Norway, New Zealand |
| Banking & Money | 13 | 196 | Nigeria, Kenya (M-Pesa) |
| Everyday Life | 4 | 94 | Nigeria |
| Technology | 4 | 90 | Nigeria |
| Business | 3 | 78 | Nigeria |
| Health | 4 | 76 | Nigeria |
| Jobs & Careers | 4 | 70 | Nigeria |
| Travel & Visas | 4 | 68 | Nigeria |
| **Total** | **142** | **2,305** | **28 countries, 4 regions** |

At the country-count level this now matches the scale the "10,000+ guides
across Africa" model pointed at: 20 countries × ~200 guides gets you to
~4,000, and 28 countries at this cluster density gets you to the 2,305
already planned in code — the remaining growth from here is adding more
countries (see "Adding a new country from scratch" below) and, within
existing countries, splitting the consolidated "Government Services" and
"SIM & Mobile" clusters into more granular ones (per-institution, the way
Nigeria and the top 4–5 markets already are) as each country's traffic
justifies the extra depth.

## Region structure

Section pages (e.g. `/government`, `/telecom`) now render **region → country
→ clusters**, matching the "Home > Africa > Nigeria / Ghana / Kenya..."
structure: Africa, Europe, North America, and Oceania each get their own
grouping, with Nigeria always shown first within Africa since it's the
primary market. This is fully automatic — `lib/countries.js` holds the
region for each country, and the section page (`app/[section]/page.js`)
groups by it; adding a new country to the registry is enough for it to
appear correctly grouped everywhere.

## International expansion: how it works

Telecom and Government Services are the two fully international
categories now. Government content in most new countries is intentionally
**consolidated into one "Government Services" cluster per country**
(covering national ID, passport, business registration, driving licence
and tax together) rather than split into a dozen tiny clusters — this
keeps the taxonomy manageable while a country is new, and it's easy to
split a consolidated cluster into per-topic clusters later once you know
which specific guides get the most search traffic in that country (Ghana,
Kenya, South Africa and the US already show this pattern: they started
consolidated and grew a dedicated cluster — Ghana Card, M-Pesa, US SSN —
once the topic proved important enough on its own).

Telecom clusters for the newer African additions (Uganda, Tanzania,
Rwanda, Ethiopia, Zambia, Zimbabwe, Botswana, Namibia, Sierra Leone,
Liberia, Cameroon, Senegal, Côte d'Ivoire) are deliberately
**network-agnostic** ("Uganda SIM & Mobile" rather than naming a specific
carrier) since carrier market share and branding shift often in these
markets and getting a carrier name wrong is worse than staying generic —
split these into named-carrier clusters once you've confirmed the current
dominant networks for each country.

**Nigeria keeps its current plain URLs** (`/telecom/mtn`, `/government/nin`)
since it's the primary market. Every other country's clusters use a
distinct slug that can never collide with a Nigerian one (`/telecom/safaricom`,
`/telecom/verizon`, `/government/ghana-card`) and carry a `country` field
that the section pages use to group carriers/services under a flag and
country name automatically — no routing changes needed as more countries
are added.


## How to read a cluster

Each cluster becomes one URL section, e.g. `/banking/gtbank`, and every
article under it becomes `/banking/gtbank/how-to-open-a-gtbank-account`. This
is the "topic cluster" SEO structure: a pillar page (the cluster listing)
links out to every article in the cluster, and every article links back to
its siblings via "Related guides" — so Google sees a tightly-linked topic
instead of an isolated page.

## Cluster-by-cluster targets

### Education (361)
- JAMB — 45 (registration, corrections, admission/CAPS, printing)
- WAEC — 32 (results, certificates, private candidates)
- NECO — 22
- NABTEB — 20
- NYSC — 42 (mobilisation, camp, relocation, exclusion, PPA)
- **Uganda, Tanzania, Rwanda Education** — 12 each (university applications and admissions)
- **Ethiopia, Zambia, Zimbabwe, Botswana, Namibia, Sierra Leone, Liberia, Cameroon, Senegal, Côte d'Ivoire Education** — 10 each
- **Germany, France Education** — 12 each (incl. Parcoursup/Campus France, student visas)
- **Netherlands, Sweden, Norway, New Zealand Education** — 10 each

### Government Services (686)
- NIN — 38
- International Passport — 24
- Driver's Licence — 20
- Voter Card (PVC) — 16
- Birth Certificate — 14
- Marriage Certificate — 12
- Tax & TIN — 20
- Pension (RSA) — 16
- Police Clearance — 10
- CAC Business Registration — 18
- Immigration — 14
- **Ghana Card** (Ghana) — 16
- **Ghana Government Services** (Ghana) — 22 (passport, business registration, TIN, SSNIT, voting)
- **Kenya Civic Services** (Kenya) — 24 (eCitizen, national ID, passport, driving licence, HELB, NHIF, KRA PIN)
- **South Africa Civic Services** (South Africa) — 24 (Smart ID, passport, driver's licence, SASSA, UIF, CAO, NSFAS)
- **US Social Security Number** (United States) — 14
- **US Benefits & Everyday Government** (United States) — 26 (REAL ID, Medicare/Medicaid, unemployment, voting, driver's licence, vehicle registration, marriage/birth records)
- **UK National Insurance Number** (United Kingdom) — 12
- **UK Benefits & Everyday Government** (United Kingdom) — 22 (Universal Credit, GP registration, provisional licence, council tax, voting, student finance)
- **Canadian SIN** (Canada) — 12
- **Uganda Government Services** — 22 (national ID, passport, SIM registration, business registration, driving permit, tax)
- **Tanzania Government Services** — 20 (NIDA, passport, business registration, driving licence)
- **Rwanda Government Services** — 22 (Irembo, passport, birth certificate, business registration, tax, driving licence)
- **Ethiopia Government Services** — 18
- **Zambia Government Services** — 18 (NRC, passport, business registration, driving licence)
- **Zimbabwe Government Services** — 16
- **Botswana Government Services** — 16 (Omang ID, passport, company registration, driver's licence)
- **Namibia Government Services** — 14
- **Sierra Leone, Liberia, Cameroon, Senegal Government Services** — 12 each
- **Côte d'Ivoire Government Services** — 12
- **Germany, France Government Services** — 20 each (residence registration/permit, passport, tax ID, driving licence)
- **Netherlands, Sweden, Norway Government Services** — 16 each
- **New Zealand Government Services** — 18 (IRD number, passport, driver's licence, business registration)

### Banking & Money (196) — 10–16 articles per institution
- Access Bank, GTBank, First Bank, Zenith, UBA — 16 each
- Fidelity, Sterling, Wema/ALAT, Moniepoint, OPay, PalmPay, Kuda — 14 each
- **M-Pesa** (Kenya) — 18 (registration, sending money, balance, Lipa na M-Pesa bill pay)

Each bank cluster follows the same repeatable article template:
open account · reset PIN · transfer money · block ATM card · unblock account
· update phone number · change email · activate USSD · request statement ·
apply for ATM card · check balance · set up standing order · dispute a
transaction · close an account.

### Telecom (586) — per network, adapted to prepaid vs. postpaid markets

**Nigeria** — MTN (22), Airtel (22), Glo (18), 9mobile (18)

**Ghana** — MTN Ghana (18, incl. MoMo), Telecel Ghana (14, formerly Vodafone Ghana), AirtelTigo Ghana (14)

**Kenya** — Safaricom (20, incl. Okoa Jahazi credit), Airtel Kenya (14), Telkom Kenya (12)

**South Africa** — Vodacom (16), MTN South Africa (16), Cell C (12), Telkom (12)

**Egypt** — Vodafone Egypt (14), Orange Egypt (14), WE/Telecom Egypt (12)

**Uganda, Tanzania** — SIM & Mobile, network-agnostic (12 each)

**Rwanda, Ethiopia, Zambia, Zimbabwe, Botswana, Namibia, Sierra Leone, Liberia, Cameroon, Senegal, Côte d'Ivoire** — SIM & Mobile, network-agnostic (10 each)

**United States** — Verizon (16), AT&T (16), T-Mobile (16)

**United Kingdom** — EE (14), O2 (14), Vodafone UK (14), Three (12)

**Canada** — Rogers (14), Bell (14), Telus (14)

**Australia** — Telstra (14), Optus (14), Vodafone Australia/TPG (12)

Prepaid-market template (Nigeria, Ghana, Kenya, South Africa, Egypt, and
the network-agnostic African clusters): borrow airtime · borrow data ·
transfer airtime · check balance · check your own number · block SIM ·
replace lost SIM · link national ID · buy data · mobile money
registration/use where applicable (MoMo, M-Pesa) · activate roaming · stop
caller tunes · migrate tariff plan · port your number.

Postpaid-market template (US, UK, Canada, Australia): activate SIM/eSIM ·
check data usage · pay your bill · set up autopay · add a line to your plan
· port in your number · unlock a phone · set up international roaming ·
dispute a bill · switch/cancel a plan · check network coverage · set up a
family or business account.

### Jobs & Careers (70)
- Job Applications — 20
- CVs & Cover Letters — 18
- Interviews — 14
- Remote & Freelance Work — 18

### Technology (90)
- Email & Online Accounts — 22
- WhatsApp, Social & Messaging — 24
- AI Tools (ChatGPT & more) — 18
- Phones, PCs & Operating Systems — 26

### Business (78)
- Starting a Business — 26
- Small Business Ideas (POS, farming, e-commerce) — 30
- Business Admin & Compliance — 22

### Health (76)
- Health Insurance (NHIS/HMO) — 18
- Hospitals & Appointments — 18
- Personal Health Records — 20
- Everyday Wellness — 20

### Travel & Visas (68)
- UK Visa — 18
- US Visa — 18
- Schengen/Europe Visas — 16
- Flights & Booking — 16

### Everyday Life (94)
- Letters & Official Documents — 26
- Calculators & Conversions — 24
- Files, Printing & Office Tasks — 24
- Home & Personal Style — 20

## What's already written (starter content)

~63 fully written sample articles ship with this template so the site looks
and behaves like a real product on day one:

- **Nigeria**: NIN (6), JAMB (7), WAEC (4), NYSC (4), GTBank (4), OPay (3),
  MTN (5), Everyday Life (6), Jobs (3)
- **Kenya**: Safaricom (3), M-Pesa (3)
- **Ghana**: MTN Ghana / MoMo (3)
- **Uganda**: National ID + SIM registration (2)
- **South Africa**: SASSA grant + Smart ID (2)
- **United States**: Verizon (4), REAL ID + voter registration (2)
- **United Kingdom**: EE (3)

## Recommended writing order

1. **NIN, JAMB, WAEC, NYSC** — highest search volume, seasonal traffic spikes
   you can plan content pushes around (JAMB registration opens, WAEC results
   day, NYSC mobilisation batches).
2. **Top 4 banks + top 3 fintechs** (GTBank, Access, Zenith, UBA, OPay,
   Moniepoint, PalmPay) — high commercial intent, good for future affiliate
   or lead-gen opportunities alongside display ads.
3. **All 4 Nigerian telecom networks** — very high search volume for simple,
   fast answers (great for ad RPM due to high page-view-per-session).
4. **Kenya (Safaricom + M-Pesa + Civic Services) and Ghana (MTN Ghana/MoMo +
   Ghana Card + Government Services)** — the two African markets with the
   deepest, most search-heavy mobile-money culture; likely the
   fastest-growing traffic outside Nigeria.
5. **South Africa telecom + Civic Services (SASSA, Smart ID, UIF)** — SASSA
   grant status is one of the single highest-volume "how to" searches in
   South Africa specifically, so this cluster punches above its weight.
6. **Egypt telecom** — the fourth of Africa's largest mobile markets,
   rounding out the top-tier African coverage.
7. **US/UK/Canada/Australia telecom + Benefits & Everyday Government** —
   different search behaviour (people search for "unlock", "port", "REAL
   ID", "Universal Credit" more than "borrow airtime"), but very high-value
   ad markets (CPMs are typically much higher than Nigeria/Africa traffic),
   so even modest traffic here can be disproportionately valuable.
8. **Uganda, Tanzania, Rwanda, Ethiopia** — the next tier of large East/
   Central African mobile and civic markets.
9. **Zambia, Zimbabwe, Botswana, Namibia, Sierra Leone, Liberia, Cameroon,
   Senegal, Côte d'Ivoire** — smaller markets, still worth covering once
   the above are solid; the consolidated "Government Services" and "SIM &
   Mobile" clusters mean each only needs a modest first pass to go live.
10. **Germany, France, Netherlands, Sweden, Norway, New Zealand** —
    rounds out full Europe/Oceania coverage; high CPM markets similar to
    the US/UK/Canada/Australia tier.
11. **Everyday Life + Technology** — evergreen, less seasonal, good for
    steady baseline traffic, and mostly country-agnostic content you can
    reuse with light localisation later.
12. Remaining clusters, prioritising whichever your analytics show people
    are already searching for once the first batch is indexed.

## Adding a new country from scratch

1. Add the country to `lib/countries.js` (slug, name, flag, and one of the
   four regions: Africa, Europe, North America, Oceania). Mark it
   `primary: true` only for Nigeria.
2. Add one or more clusters to `lib/categories.js` with `country: "<slug>"`
   — use a slug that can't collide with an existing one (e.g. suffix the
   country if the brand name repeats, like `mtn-ghana` vs. `mtn`). For a
   brand-new country, the fastest path is one consolidated "<Country>
   Government Services" cluster and one network-agnostic "<Country> SIM &
   Mobile" cluster (see the 13 newest African countries for the pattern) —
   split them into per-topic or per-carrier clusters later once you
   confirm which specific guides are worth their own page.
3. Optionally add articles in a new `/data/articles/<cluster>.js` file and
   register it in `lib/content.js` (see below) — or leave the cluster
   empty for now; its pillar page will show a "still writing this" state
   automatically, and the section page will still group it correctly under
   its region and country heading.
4. Nothing else needs to change — `app/[section]/page.js` groups by region
   and country automatically from what's in `lib/countries.js` and
   `lib/categories.js`, and the sitemap, breadcrumbs, and structured data
   all pick up new countries the same way they pick up new articles.

## Adding a new article (mechanical steps)

1. Open (or create) `/data/articles/<cluster>.js`.
2. Add an object to the exported array with this shape:

```js
{
  slug: "how-to-example-task",
  section: "government",     // must match a slug in lib/categories.js SECTIONS
  cluster: "nin",            // must match a slug in lib/categories.js CLUSTERS
  title: "How to Example Task",
  description: "One or two sentences — this becomes the meta description.",
  updated: "2026-07-01",
  requirements: ["Thing you need 1", "Thing you need 2"],
  steps: [
    { title: "First step name", body: "What to actually do." }
  ],
  faq: [
    { q: "Common question?", a: "Clear answer." }
  ],
  relatedSlugs: ["how-to-another-article-slug"],
}
```

3. Register the file in `lib/content.js` if it's a brand-new file (import +
   spread into `ALL_ARTICLES`).
4. That's it — the route, sitemap entry, HowTo/FAQ structured data, and
   related-article links are all generated automatically from this object.

## Adding a brand-new cluster (e.g. a new bank)

Add one object to the `CLUSTERS` array in `lib/categories.js` with a `slug`,
`section`, `name`, and `planned` count. The cluster's pillar page
(`/section/cluster`) will start working immediately, showing a "still
writing this cluster" placeholder until you add articles.
