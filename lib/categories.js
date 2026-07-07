// Master taxonomy for HowFar.
// Each entry is a "topic cluster" (a pillar page + N linked how-to guides).
// This is the backbone of the site's SEO strategy: every cluster becomes
// its own URL section (/education/jamb, /banking/gtbank, etc.) so search
// engines see clear topical authority instead of scattered, unrelated pages.
//
// `planned` is the target article count for that cluster (per the content
// roadmap). Articles that already exist live in /data/articles/<slug>.js
// and are wired up automatically — you don't need to touch this file to
// publish a new article, only to add a brand-new cluster.
//
// `country` ties a cluster to an entry in lib/countries.js. Nigeria is the
// default/primary market, so its clusters keep the plain URLs you already
// have (/telecom/mtn, /government/nin, etc.) — no migration needed. Every
// new country is added the same way: a cluster with a distinct slug (so it
// never collides with a Nigerian one) and a `country` field, which is all
// that's needed for it to show up grouped correctly on listing pages.

export const SECTIONS = [
  { slug: "education", name: "Education", blurb: "Exams, university admissions and certificates — starting with Nigeria's JAMB/WAEC/NECO/NYSC, now expanding across Africa, Europe and beyond." },
  { slug: "government", name: "Government Services", blurb: "National ID, passports and civil documents across 28 countries — Africa, Europe, North America and Oceania." },
  { slug: "banking", name: "Banking & Money", blurb: "Every major Nigerian bank and fintech, plus mobile money services like M-Pesa." },
  { slug: "telecom", name: "Telecom", blurb: "Mobile networks in Nigeria, across Africa, and internationally — data, airtime, SIM and account help." },
  { slug: "jobs", name: "Jobs & Careers", blurb: "CVs, cover letters, interviews and where to apply." },
  { slug: "technology", name: "Technology", blurb: "Email, apps, devices and everyday tech troubleshooting." },
  { slug: "business", name: "Business", blurb: "Registering and running a small business in Nigeria." },
  { slug: "health", name: "Health", blurb: "Insurance, hospitals, records and everyday health admin." },
  { slug: "travel", name: "Travel & Visas", blurb: "Visas, passports and flights for Nigerians travelling abroad." },
  { slug: "everyday-life", name: "Everyday Life", blurb: "Letters, calculators, documents and the small tasks everyone runs into." },
];

export const CLUSTERS = [
  // ---------------- EDUCATION (Nigeria; WAEC also serves Ghana, Sierra Leone, Liberia, The Gambia) ----------------
  { slug: "jamb", section: "education", country: "nigeria", name: "JAMB", planned: 45, blurb: "UTME registration, corrections, admission and CAPS." },
  { slug: "waec", section: "education", country: "nigeria", name: "WAEC", planned: 32, blurb: "Result checking, certificate collection and private candidate registration. Covers the shared West African exam used across Nigeria, Ghana, Sierra Leone, Liberia and The Gambia." },
  { slug: "neco", section: "education", country: "nigeria", name: "NECO", planned: 22, blurb: "Registration, results and certificate matters." },
  { slug: "nabteb", section: "education", country: "nigeria", name: "NABTEB", planned: 20, blurb: "Technical and vocational exam guides." },
  { slug: "nysc", section: "education", country: "nigeria", name: "NYSC", planned: 42, blurb: "Mobilisation, camp, PPA, relocation and clearance." },

  // ---------------- EDUCATION — OTHER COUNTRIES ----------------
  { slug: "uganda-education", section: "education", country: "uganda", name: "Uganda Education", planned: 12, blurb: "University applications and admissions in Uganda." },
  { slug: "tanzania-education", section: "education", country: "tanzania", name: "Tanzania Education", planned: 12, blurb: "University applications and admissions in Tanzania." },
  { slug: "rwanda-education", section: "education", country: "rwanda", name: "Rwanda Education", planned: 12, blurb: "University applications and admissions in Rwanda." },
  { slug: "ethiopia-education", section: "education", country: "ethiopia", name: "Ethiopia Education", planned: 10, blurb: "University applications and admissions in Ethiopia." },
  { slug: "zambia-education", section: "education", country: "zambia", name: "Zambia Education", planned: 10, blurb: "University applications and student loans in Zambia." },
  { slug: "zimbabwe-education", section: "education", country: "zimbabwe", name: "Zimbabwe Education", planned: 10, blurb: "University applications and admissions in Zimbabwe." },
  { slug: "botswana-education", section: "education", country: "botswana", name: "Botswana Education", planned: 10, blurb: "University applications and admissions in Botswana." },
  { slug: "namibia-education", section: "education", country: "namibia", name: "Namibia Education", planned: 10, blurb: "University applications and admissions in Namibia." },
  { slug: "sierra-leone-education", section: "education", country: "sierra-leone", name: "Sierra Leone Education", planned: 10, blurb: "University applications and admissions in Sierra Leone." },
  { slug: "liberia-education", section: "education", country: "liberia", name: "Liberia Education", planned: 10, blurb: "University applications and admissions in Liberia." },
  { slug: "cameroon-education", section: "education", country: "cameroon", name: "Cameroon Education", planned: 10, blurb: "University applications and admissions in Cameroon." },
  { slug: "senegal-education", section: "education", country: "senegal", name: "Senegal Education", planned: 10, blurb: "University applications and admissions in Senegal." },
  { slug: "cote-divoire-education", section: "education", country: "cote-divoire", name: "Côte d'Ivoire Education", planned: 10, blurb: "University applications and admissions in Côte d'Ivoire." },
  { slug: "germany-education", section: "education", country: "germany", name: "Germany Education", planned: 12, blurb: "University applications, visas for students, and admissions in Germany." },
  { slug: "france-education", section: "education", country: "france", name: "France Education", planned: 12, blurb: "University applications (Parcoursup/Campus France) and admissions in France." },
  { slug: "netherlands-education", section: "education", country: "netherlands", name: "Netherlands Education", planned: 10, blurb: "University applications and admissions in the Netherlands." },
  { slug: "sweden-education", section: "education", country: "sweden", name: "Sweden Education", planned: 10, blurb: "University applications and admissions in Sweden." },
  { slug: "norway-education", section: "education", country: "norway", name: "Norway Education", planned: 10, blurb: "University applications and admissions in Norway." },
  { slug: "new-zealand-education", section: "education", country: "new-zealand", name: "New Zealand Education", planned: 10, blurb: "University applications and student loans in New Zealand." },

  // ---------------- GOVERNMENT — NIGERIA ----------------
  { slug: "nin", section: "government", country: "nigeria", name: "NIN", planned: 38, blurb: "Enrolment, correction, linking and verification." },
  { slug: "passport", section: "government", country: "nigeria", name: "International Passport", planned: 24, blurb: "New application, renewal and tracking." },
  { slug: "drivers-license", section: "government", country: "nigeria", name: "Driver's Licence", planned: 20, blurb: "FRSC application, renewal and replacement." },
  { slug: "voter-card", section: "government", country: "nigeria", name: "Voter Card (PVC)", planned: 16, blurb: "INEC registration, transfer and collection." },
  { slug: "birth-certificate", section: "government", country: "nigeria", name: "Birth Certificate", planned: 14, blurb: "NPC registration and late registration." },
  { slug: "marriage-certificate", section: "government", country: "nigeria", name: "Marriage Certificate", planned: 12, blurb: "Registry marriage and certified copies." },
  { slug: "tax", section: "government", country: "nigeria", name: "Tax & TIN", planned: 20, blurb: "FIRS/State IRS registration and filing." },
  { slug: "pension", section: "government", country: "nigeria", name: "Pension (RSA)", planned: 16, blurb: "PenCom, PFA and retirement savings account matters." },
  { slug: "police-clearance", section: "government", country: "nigeria", name: "Police Clearance", planned: 10, blurb: "Character certificates for jobs and visas." },
  { slug: "business-registration", section: "government", country: "nigeria", name: "CAC Business Registration", planned: 18, blurb: "Registering with the Corporate Affairs Commission." },
  { slug: "immigration", section: "government", country: "nigeria", name: "Immigration", planned: 14, blurb: "NIS services beyond the passport." },

  // ---------------- GOVERNMENT — OTHER COUNTRIES (first wave of international expansion) ----------------
  { slug: "ghana-card", section: "government", country: "ghana", name: "Ghana Card", planned: 16, blurb: "Ghana's national ID — enrolment, correction and verification (Ghana's equivalent of Nigeria's NIN)." },
  { slug: "ghana-government-services", section: "government", country: "ghana", name: "Ghana Government Services", planned: 22, blurb: "Passport, business registration, TIN, SSNIT and voter registration." },
  { slug: "kenya-civic-services", section: "government", country: "kenya", name: "Kenya Civic Services", planned: 24, blurb: "eCitizen, national ID, passport, driving licence, birth certificate, HELB loans, NHIF and KRA PIN." },
  { slug: "south-africa-civic-services", section: "government", country: "south-africa", name: "South Africa Civic Services", planned: 24, blurb: "Smart ID, passport, driver's licence, voter registration, UIF, SASSA grants, birth and marriage certificates." },
  { slug: "us-ssn", section: "government", country: "united-states", name: "Social Security Number (SSN)", planned: 14, blurb: "Applying for, replacing and verifying a US Social Security Number." },
  { slug: "us-benefits-and-everyday-government", section: "government", country: "united-states", name: "US Benefits & Everyday Government", planned: 26, blurb: "Passport, REAL ID, Medicare/Medicaid, unemployment benefits, voter registration, driver's licence, vehicle registration, and marriage/birth records." },
  { slug: "uk-national-insurance", section: "government", country: "united-kingdom", name: "National Insurance Number", planned: 12, blurb: "Applying for and finding a lost UK National Insurance number." },
  { slug: "uk-benefits-and-everyday-government", section: "government", country: "united-kingdom", name: "UK Benefits & Everyday Government", planned: 22, blurb: "Universal Credit, GP registration, provisional driving licence, council tax, voter registration and student finance." },
  { slug: "canada-sin", section: "government", country: "canada", name: "Social Insurance Number (SIN)", planned: 12, blurb: "Applying for and replacing a Canadian SIN." },
  { slug: "uganda-government-services", section: "government", country: "uganda", name: "Uganda Government Services", planned: 22, blurb: "National ID, passport, SIM registration, business registration, driving permit and taxes." },
  { slug: "tanzania-government-services", section: "government", country: "tanzania", name: "Tanzania Government Services", planned: 20, blurb: "NIDA number, passport, business registration and driving licence." },
  { slug: "rwanda-government-services", section: "government", country: "rwanda", name: "Rwanda Government Services", planned: 22, blurb: "Irembo services, passport, birth certificate, business registration, taxes and driving licence." },
  { slug: "ethiopia-government-services", section: "government", country: "ethiopia", name: "Ethiopia Government Services", planned: 18, blurb: "National ID, passport, business registration and taxes." },
  { slug: "zambia-government-services", section: "government", country: "zambia", name: "Zambia Government Services", planned: 18, blurb: "NRC, passport, business registration and driving licence." },
  { slug: "zimbabwe-government-services", section: "government", country: "zimbabwe", name: "Zimbabwe Government Services", planned: 16, blurb: "National ID, passport, business registration and driver's licence." },
  { slug: "botswana-government-services", section: "government", country: "botswana", name: "Botswana Government Services", planned: 16, blurb: "Omang ID, passport, company registration and driver's licence." },
  { slug: "namibia-government-services", section: "government", country: "namibia", name: "Namibia Government Services", planned: 14, blurb: "National ID, passport and business registration." },
  { slug: "sierra-leone-government-services", section: "government", country: "sierra-leone", name: "Sierra Leone Government Services", planned: 12, blurb: "National ID and business registration." },
  { slug: "liberia-government-services", section: "government", country: "liberia", name: "Liberia Government Services", planned: 12, blurb: "National ID, passport and business registration." },
  { slug: "cameroon-government-services", section: "government", country: "cameroon", name: "Cameroon Government Services", planned: 12, blurb: "National ID, passport and business registration." },
  { slug: "senegal-government-services", section: "government", country: "senegal", name: "Senegal Government Services", planned: 12, blurb: "National ID, passport and business registration." },
  { slug: "cote-divoire-government-services", section: "government", country: "cote-divoire", name: "Côte d'Ivoire Government Services", planned: 12, blurb: "National identity card, passport and business registration." },
  { slug: "germany-government-services", section: "government", country: "germany", name: "Germany Government Services", planned: 20, blurb: "Residence registration (Anmeldung), passport, tax ID and driving licence." },
  { slug: "france-government-services", section: "government", country: "france", name: "France Government Services", planned: 20, blurb: "Residence permits, passport, tax number and driving licence." },
  { slug: "netherlands-government-services", section: "government", country: "netherlands", name: "Netherlands Government Services", planned: 16, blurb: "BSN number, passport, tax and driving licence." },
  { slug: "sweden-government-services", section: "government", country: "sweden", name: "Sweden Government Services", planned: 16, blurb: "Personnummer, passport, tax and driving licence." },
  { slug: "norway-government-services", section: "government", country: "norway", name: "Norway Government Services", planned: 16, blurb: "National ID number, passport, tax and driving licence." },
  { slug: "new-zealand-government-services", section: "government", country: "new-zealand", name: "New Zealand Government Services", planned: 18, blurb: "IRD number, passport, driver's licence and business registration." },

  // ---------------- BANKING (per institution) ----------------
  { slug: "access-bank", section: "banking", country: "nigeria", name: "Access Bank", planned: 16 },
  { slug: "gtbank", section: "banking", country: "nigeria", name: "Guaranty Trust Bank (GTBank)", planned: 16 },
  { slug: "first-bank", section: "banking", country: "nigeria", name: "First Bank of Nigeria", planned: 16 },
  { slug: "zenith-bank", section: "banking", country: "nigeria", name: "Zenith Bank", planned: 16 },
  { slug: "uba", section: "banking", country: "nigeria", name: "United Bank for Africa (UBA)", planned: 16 },
  { slug: "fidelity-bank", section: "banking", country: "nigeria", name: "Fidelity Bank", planned: 14 },
  { slug: "sterling-bank", section: "banking", country: "nigeria", name: "Sterling Bank", planned: 14 },
  { slug: "wema-bank", section: "banking", country: "nigeria", name: "Wema Bank / ALAT", planned: 14 },
  { slug: "moniepoint", section: "banking", country: "nigeria", name: "Moniepoint", planned: 14 },
  { slug: "opay", section: "banking", country: "nigeria", name: "OPay", planned: 14 },
  { slug: "palmpay", section: "banking", country: "nigeria", name: "PalmPay", planned: 14 },
  { slug: "kuda", section: "banking", country: "nigeria", name: "Kuda Bank", planned: 14 },
  { slug: "mpesa", section: "banking", country: "kenya", name: "M-Pesa", planned: 18, blurb: "Kenya's mobile money service — sending, withdrawing, and paying bills with M-Pesa." },

  // ---------------- TELECOM — NIGERIA ----------------
  { slug: "mtn", section: "telecom", country: "nigeria", name: "MTN Nigeria", planned: 22 },
  { slug: "airtel", section: "telecom", country: "nigeria", name: "Airtel Nigeria", planned: 22 },
  { slug: "glo", section: "telecom", country: "nigeria", name: "Globacom (Glo)", planned: 18 },
  { slug: "9mobile", section: "telecom", country: "nigeria", name: "9mobile", planned: 18 },

  // ---------------- TELECOM — GHANA ----------------
  { slug: "mtn-ghana", section: "telecom", country: "ghana", name: "MTN Ghana", planned: 18, blurb: "Airtime, MTN Mobile Money (MoMo), data bundles and SIM registration." },
  { slug: "telecel-ghana", section: "telecom", country: "ghana", name: "Telecel Ghana", planned: 14, blurb: "Formerly Vodafone Ghana — Telecel Cash, data and SIM services." },
  { slug: "airteltigo-ghana", section: "telecom", country: "ghana", name: "AirtelTigo Ghana", planned: 14 },

  // ---------------- TELECOM — KENYA ----------------
  { slug: "safaricom", section: "telecom", country: "kenya", name: "Safaricom", planned: 20, blurb: "Data bundles, Okoa Jahazi credit, and Safaricom-side M-Pesa basics." },
  { slug: "airtel-kenya", section: "telecom", country: "kenya", name: "Airtel Kenya", planned: 14 },
  { slug: "telkom-kenya", section: "telecom", country: "kenya", name: "Telkom Kenya", planned: 12 },

  // ---------------- TELECOM — SOUTH AFRICA ----------------
  { slug: "vodacom", section: "telecom", country: "south-africa", name: "Vodacom", planned: 16 },
  { slug: "mtn-south-africa", section: "telecom", country: "south-africa", name: "MTN South Africa", planned: 16 },
  { slug: "cell-c", section: "telecom", country: "south-africa", name: "Cell C", planned: 12 },
  { slug: "telkom-south-africa", section: "telecom", country: "south-africa", name: "Telkom", planned: 12 },

  // ---------------- TELECOM — EGYPT ----------------
  { slug: "vodafone-egypt", section: "telecom", country: "egypt", name: "Vodafone Egypt", planned: 14 },
  { slug: "orange-egypt", section: "telecom", country: "egypt", name: "Orange Egypt", planned: 14 },
  { slug: "we-egypt", section: "telecom", country: "egypt", name: "WE (Telecom Egypt)", planned: 12 },

  // ---------------- TELECOM — UNITED STATES ----------------
  { slug: "verizon", section: "telecom", country: "united-states", name: "Verizon", planned: 16, blurb: "Plans, billing, eSIM activation and international roaming." },
  { slug: "att", section: "telecom", country: "united-states", name: "AT&T", planned: 16 },
  { slug: "t-mobile", section: "telecom", country: "united-states", name: "T-Mobile", planned: 16 },

  // ---------------- TELECOM — UNITED KINGDOM ----------------
  { slug: "ee", section: "telecom", country: "united-kingdom", name: "EE", planned: 14 },
  { slug: "o2", section: "telecom", country: "united-kingdom", name: "O2", planned: 14 },
  { slug: "vodafone-uk", section: "telecom", country: "united-kingdom", name: "Vodafone UK", planned: 14 },
  { slug: "three-uk", section: "telecom", country: "united-kingdom", name: "Three", planned: 12 },

  // ---------------- TELECOM — CANADA ----------------
  { slug: "rogers", section: "telecom", country: "canada", name: "Rogers", planned: 14 },
  { slug: "bell", section: "telecom", country: "canada", name: "Bell", planned: 14 },
  { slug: "telus", section: "telecom", country: "canada", name: "Telus", planned: 14 },

  // ---------------- TELECOM — AUSTRALIA ----------------
  { slug: "telstra", section: "telecom", country: "australia", name: "Telstra", planned: 14 },
  { slug: "optus", section: "telecom", country: "australia", name: "Optus", planned: 14 },
  { slug: "vodafone-australia", section: "telecom", country: "australia", name: "Vodafone Australia (TPG)", planned: 12 },

  // ---------------- TELECOM — OTHER AFRICAN COUNTRIES (generic, network-agnostic) ----------------
  // These cover SIM registration, airtime and data in general terms rather
  // than naming specific carriers, since carrier lineups/market share shift
  // often in these markets — split into per-carrier clusters once you've
  // confirmed the current dominant networks for each country.
  { slug: "uganda-sim-and-mobile", section: "telecom", country: "uganda", name: "Uganda SIM & Mobile", planned: 12, blurb: "SIM registration, airtime and data bundles on Uganda's mobile networks." },
  { slug: "tanzania-sim-and-mobile", section: "telecom", country: "tanzania", name: "Tanzania SIM & Mobile", planned: 12, blurb: "SIM registration, airtime and data bundles on Tanzania's mobile networks." },
  { slug: "rwanda-sim-and-mobile", section: "telecom", country: "rwanda", name: "Rwanda SIM & Mobile", planned: 10, blurb: "SIM registration, airtime and data bundles on Rwanda's mobile networks." },
  { slug: "ethiopia-sim-and-mobile", section: "telecom", country: "ethiopia", name: "Ethiopia SIM & Mobile", planned: 10, blurb: "SIM registration, airtime and data bundles on Ethiopia's mobile networks." },
  { slug: "zambia-sim-and-mobile", section: "telecom", country: "zambia", name: "Zambia SIM & Mobile", planned: 10, blurb: "SIM registration, airtime and data bundles on Zambia's mobile networks." },
  { slug: "zimbabwe-sim-and-mobile", section: "telecom", country: "zimbabwe", name: "Zimbabwe SIM & Mobile", planned: 10, blurb: "SIM registration, airtime and data bundles on Zimbabwe's mobile networks." },
  { slug: "botswana-sim-and-mobile", section: "telecom", country: "botswana", name: "Botswana SIM & Mobile", planned: 10, blurb: "SIM registration, airtime and data bundles on Botswana's mobile networks." },
  { slug: "namibia-sim-and-mobile", section: "telecom", country: "namibia", name: "Namibia SIM & Mobile", planned: 10, blurb: "SIM registration, airtime and data bundles on Namibia's mobile networks." },
  { slug: "sierra-leone-sim-and-mobile", section: "telecom", country: "sierra-leone", name: "Sierra Leone SIM & Mobile", planned: 10, blurb: "SIM registration, airtime and data bundles on Sierra Leone's mobile networks." },
  { slug: "liberia-sim-and-mobile", section: "telecom", country: "liberia", name: "Liberia SIM & Mobile", planned: 10, blurb: "SIM registration, airtime and data bundles on Liberia's mobile networks." },
  { slug: "cameroon-sim-and-mobile", section: "telecom", country: "cameroon", name: "Cameroon SIM & Mobile", planned: 10, blurb: "SIM registration, airtime and data bundles on Cameroon's mobile networks." },
  { slug: "senegal-sim-and-mobile", section: "telecom", country: "senegal", name: "Senegal SIM & Mobile", planned: 10, blurb: "SIM registration, airtime and data bundles on Senegal's mobile networks." },
  { slug: "cote-divoire-sim-and-mobile", section: "telecom", country: "cote-divoire", name: "Côte d'Ivoire SIM & Mobile", planned: 10, blurb: "SIM registration, airtime and data bundles on Côte d'Ivoire's mobile networks." },

  // ---------------- JOBS ----------------
  { slug: "job-applications", section: "jobs", country: "nigeria", name: "Job Applications", planned: 20 },
  { slug: "cvs-and-cover-letters", section: "jobs", country: "nigeria", name: "CVs & Cover Letters", planned: 18 },
  { slug: "interviews", section: "jobs", country: "nigeria", name: "Interviews", planned: 14 },
  { slug: "remote-work", section: "jobs", country: "nigeria", name: "Remote & Freelance Work", planned: 18 },

  // ---------------- TECHNOLOGY ----------------
  { slug: "email-and-accounts", section: "technology", country: "nigeria", name: "Email & Online Accounts", planned: 22 },
  { slug: "social-and-messaging", section: "technology", country: "nigeria", name: "WhatsApp, Social & Messaging", planned: 24 },
  { slug: "ai-tools", section: "technology", country: "nigeria", name: "AI Tools (ChatGPT & more)", planned: 18 },
  { slug: "devices-and-os", section: "technology", country: "nigeria", name: "Phones, PCs & Operating Systems", planned: 26 },

  // ---------------- BUSINESS ----------------
  { slug: "starting-a-business", section: "business", country: "nigeria", name: "Starting a Business", planned: 26 },
  { slug: "small-business-ideas", section: "business", country: "nigeria", name: "Small Business Ideas (POS, farming, e-commerce)", planned: 30 },
  { slug: "business-admin", section: "business", country: "nigeria", name: "Business Admin & Compliance", planned: 22 },

  // ---------------- HEALTH ----------------
  { slug: "health-insurance", section: "health", country: "nigeria", name: "Health Insurance (NHIS/HMO)", planned: 18 },
  { slug: "hospitals-and-appointments", section: "health", country: "nigeria", name: "Hospitals & Appointments", planned: 18 },
  { slug: "personal-health-admin", section: "health", country: "nigeria", name: "Personal Health Records", planned: 20 },
  { slug: "wellness-basics", section: "health", country: "nigeria", name: "Everyday Wellness", planned: 20 },

  // ---------------- TRAVEL ----------------
  { slug: "uk-visa", section: "travel", country: "nigeria", name: "UK Visa", planned: 18 },
  { slug: "us-visa", section: "travel", country: "nigeria", name: "US Visa", planned: 18 },
  { slug: "schengen-visa", section: "travel", country: "nigeria", name: "Schengen / Europe Visas", planned: 16 },
  { slug: "flights-and-booking", section: "travel", country: "nigeria", name: "Flights & Booking", planned: 16 },

  // ---------------- EVERYDAY LIFE ----------------
  { slug: "letters-and-documents", section: "everyday-life", country: "nigeria", name: "Letters & Official Documents", planned: 26 },
  { slug: "calculators-and-conversions", section: "everyday-life", country: "nigeria", name: "Calculators & Conversions", planned: 24 },
  { slug: "files-and-office", section: "everyday-life", country: "nigeria", name: "Files, Printing & Office Tasks", planned: 24 },
  { slug: "home-and-style", section: "everyday-life", country: "nigeria", name: "Home & Personal Style", planned: 20 },
];

export function getSection(slug) {
  return SECTIONS.find((s) => s.slug === slug);
}

export function getCluster(slug) {
  return CLUSTERS.find((c) => c.slug === slug);
}

export function getClustersForSection(sectionSlug) {
  return CLUSTERS.filter((c) => c.section === sectionSlug);
}

export function getClustersForSectionAndCountry(sectionSlug, countrySlug) {
  return CLUSTERS.filter((c) => c.section === sectionSlug && c.country === countrySlug);
}

export function getCountrySlugsForSection(sectionSlug) {
  const slugs = CLUSTERS.filter((c) => c.section === sectionSlug).map((c) => c.country);
  return [...new Set(slugs)];
}

export function totalPlanned() {
  return CLUSTERS.reduce((sum, c) => sum + c.planned, 0);
}