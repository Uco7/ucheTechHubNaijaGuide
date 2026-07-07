// Country registry. Every cluster in lib/categories.js carries a `country`
// slug pointing back to one of these. `region` groups countries on listing
// pages the way a "Home > Africa > Nigeria / Ghana / Kenya..." structure
// would — it has no bearing on routing, only display order and grouping.
//
// Nigeria is marked `primary: true` since it's the founding market with the
// deepest content — listing pages always show it first within its region.

export const COUNTRIES = [
  // ---------------- AFRICA ----------------
  { slug: "nigeria", name: "Nigeria", flag: "🇳🇬", region: "Africa", primary: true },
  { slug: "ghana", name: "Ghana", flag: "🇬🇭", region: "Africa" },
  { slug: "kenya", name: "Kenya", flag: "🇰🇪", region: "Africa" },
  { slug: "south-africa", name: "South Africa", flag: "🇿🇦", region: "Africa" },
  { slug: "egypt", name: "Egypt", flag: "🇪🇬", region: "Africa" },
  { slug: "uganda", name: "Uganda", flag: "🇺🇬", region: "Africa" },
  { slug: "tanzania", name: "Tanzania", flag: "🇹🇿", region: "Africa" },
  { slug: "rwanda", name: "Rwanda", flag: "🇷🇼", region: "Africa" },
  { slug: "ethiopia", name: "Ethiopia", flag: "🇪🇹", region: "Africa" },
  { slug: "zambia", name: "Zambia", flag: "🇿🇲", region: "Africa" },
  { slug: "zimbabwe", name: "Zimbabwe", flag: "🇿🇼", region: "Africa" },
  { slug: "botswana", name: "Botswana", flag: "🇧🇼", region: "Africa" },
  { slug: "namibia", name: "Namibia", flag: "🇳🇦", region: "Africa" },
  { slug: "sierra-leone", name: "Sierra Leone", flag: "🇸🇱", region: "Africa" },
  { slug: "liberia", name: "Liberia", flag: "🇱🇷", region: "Africa" },
  { slug: "cameroon", name: "Cameroon", flag: "🇨🇲", region: "Africa" },
  { slug: "senegal", name: "Senegal", flag: "🇸🇳", region: "Africa" },
  { slug: "cote-divoire", name: "Côte d'Ivoire", flag: "🇨🇮", region: "Africa" },

  // ---------------- EUROPE ----------------
  { slug: "united-kingdom", name: "United Kingdom", flag: "🇬🇧", region: "Europe" },
  { slug: "germany", name: "Germany", flag: "🇩🇪", region: "Europe" },
  { slug: "france", name: "France", flag: "🇫🇷", region: "Europe" },
  { slug: "netherlands", name: "Netherlands", flag: "🇳🇱", region: "Europe" },
  { slug: "sweden", name: "Sweden", flag: "🇸🇪", region: "Europe" },
  { slug: "norway", name: "Norway", flag: "🇳🇴", region: "Europe" },

  // ---------------- NORTH AMERICA ----------------
  { slug: "united-states", name: "United States", flag: "🇺🇸", region: "North America" },
  { slug: "canada", name: "Canada", flag: "🇨🇦", region: "North America" },

  // ---------------- OCEANIA ----------------
  { slug: "australia", name: "Australia", flag: "🇦🇺", region: "Oceania" },
  { slug: "new-zealand", name: "New Zealand", flag: "🇳🇿", region: "Oceania" },
];

export const REGIONS = ["Africa", "Europe", "North America", "Oceania"];

export function getCountry(slug) {
  return COUNTRIES.find((c) => c.slug === slug);
}

export function getCountriesByRegion() {
  return REGIONS.map((region) => ({
    region,
    countries: COUNTRIES.filter((c) => c.region === region).sort(
      (a, b) => (b.primary ? 1 : 0) - (a.primary ? 1 : 0)
    ),
  }));
}
