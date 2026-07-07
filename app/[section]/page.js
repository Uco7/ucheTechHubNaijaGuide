import { notFound } from "next/navigation";
import { SECTIONS, getClustersForSection, getCountrySlugsForSection } from "@/lib/categories";
import { getClustersWithCounts } from "@/lib/content";
import { COUNTRIES, REGIONS, getCountry } from "@/lib/countries";
import CategoryCard from "@/components/CategoryCard";
import Breadcrumbs from "@/components/Breadcrumbs";
import AdSlot from "@/components/AdSlot";

export function generateStaticParams() {
  return SECTIONS.map((s) => ({ section: s.slug }));
}

export function generateMetadata({ params }) {
  const section = SECTIONS.find((s) => s.slug === params.section);
  if (!section) return {};
  return {
    title: `${section.name} Guides`,
    description: section.blurb,
    alternates: { canonical: `/${section.slug}` },
  };
}

// Groups this section's countries by region (Africa/Europe/North
// America/Oceania), in registry order, primary market first within Africa.
function groupCountriesByRegion(countrySlugs) {
  const slugSet = new Set(countrySlugs);
  const used = COUNTRIES.filter((c) => slugSet.has(c.slug));
  return REGIONS.map((region) => ({
    region,
    countries: used
      .filter((c) => c.region === region)
      .sort((a, b) => (b.primary ? 1 : 0) - (a.primary ? 1 : 0)),
  })).filter((g) => g.countries.length > 0);
}

export default function SectionPage({ params }) {
  const section = SECTIONS.find((s) => s.slug === params.section);
  if (!section) return notFound();

  const clusters = getClustersForSection(section.slug);
  const counts = getClustersWithCounts();
  const countrySlugs = getCountrySlugsForSection(section.slug);
  const isMultiCountry = countrySlugs.length > 1;
  const regionGroups = isMultiCountry ? groupCountriesByRegion(countrySlugs) : [];
  const spansMultipleRegions = regionGroups.length > 1;

  function renderClusterGrid(countrySlug) {
    const countryClusters = clusters.filter((c) => c.country === countrySlug);
    return (
      <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {countryClusters.map((c) => (
          <CategoryCard
            key={c.slug}
            href={`/${section.slug}/${c.slug}`}
            name={c.name}
            blurb={c.blurb || `${c.planned}+ step-by-step guides`}
            count={counts[c.slug] || 0}
          />
        ))}
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 md:px-6">
      <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: section.name }]} />

      <h1 className="mt-4 font-display text-3xl font-bold text-forest md:text-4xl">{section.name}</h1>
      <p className="mt-2 max-w-2xl text-ink/65">{section.blurb}</p>

      <div className="mt-4">
        <AdSlot variant="leaderboard" />
      </div>

      {!isMultiCountry && (
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {clusters.map((c) => (
            <CategoryCard
              key={c.slug}
              href={`/${section.slug}/${c.slug}`}
              name={c.name}
              blurb={c.blurb || `${c.planned}+ step-by-step guides`}
              count={counts[c.slug] || 0}
            />
          ))}
        </div>
      )}

      {isMultiCountry && !spansMultipleRegions && (
        <div className="mt-8 space-y-12">
          {regionGroups[0].countries.map((country) => (
            <div key={country.slug}>
              <h2 className="flex items-center gap-2 font-display text-xl font-bold text-forest">
                <span aria-hidden="true">{country.flag}</span>
                {country.name}
              </h2>
              {renderClusterGrid(country.slug)}
            </div>
          ))}
        </div>
      )}

      {isMultiCountry && spansMultipleRegions && (
        <div className="mt-8 space-y-16">
          {regionGroups.map((group) => (
            <div key={group.region}>
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-stamp-dark">{group.region}</p>
              <div className="mt-6 space-y-10">
                {group.countries.map((country) => (
                  <div key={country.slug}>
                    <h2 className="flex items-center gap-2 font-display text-lg font-bold text-forest">
                      <span aria-hidden="true">{country.flag}</span>
                      {country.name}
                    </h2>
                    {renderClusterGrid(country.slug)}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
