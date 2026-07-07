import Link from "next/link";
import { SECTIONS, CLUSTERS, totalPlanned } from "@/lib/categories";
import { getAllArticles, getClustersWithCounts } from "@/lib/content";
import ArticleCard from "@/components/ArticleCard";
import CategoryCard from "@/components/CategoryCard";
import HomeSearch from "@/components/HomeSearch";
import AdSlot from "@/components/AdSlot";
import { SITE_URL, SITE_NAME, SITE_DESCRIPTION } from "@/lib/site";
import { COUNTRIES, getCountriesByRegion } from "@/lib/countries";

export const metadata = {
  alternates: { canonical: "/" },
};

export default function HomePage() {
  const articles = getAllArticles();
  const counts = getClustersWithCounts();
  const featured = articles.slice(0, 6);

 const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: SITE_NAME,
  url: SITE_URL,
  description: SITE_DESCRIPTION,
};
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
      />

      {/* Hero */}
      <section className="border-b border-line bg-forest text-paper">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 md:grid-cols-[1.2fr_1fr] md:px-6 md:py-24">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-stamp">
              {getAllArticles().length}+ guides and counting
            </p>
            <h1 className="mt-4 font-display text-4xl font-bold leading-[1.1] md:text-5xl">
              How far with your NIN, JAMB, or bank issue?
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-paper/80">
              {SITE_NAME} breaks down the exact steps for Nigeria's most-searched government, education,
              banking and everyday tasks — the same way a knowledgeable friend would explain it, minus the
              wahala.
            </p>
          <HomeSearch />
          </div>

          {/* Signature "slip" visual */}
          <div className="hidden md:block">
            <div className="slip-edge rounded-card border border-paper/20 bg-slip p-6 text-ink shadow-xl">
              <p className="font-mono text-[0.65rem] uppercase tracking-widest text-forest/50">
                Guide slip · No. 0247
              </p>
              <p className="mt-2 font-display text-lg font-bold text-forest">
                How to link NIN to MTN
              </p>
              <ul className="mt-4 space-y-2 text-sm text-ink/70">
                <li className="flex gap-2"><span className="font-mono text-forest/50">01</span> Dial *785#</li>
                <li className="flex gap-2"><span className="font-mono text-forest/50">02</span> Enter your NIN</li>
                <li className="flex gap-2"><span className="font-mono text-forest/50">03</span> Confirm with OTP</li>
              </ul>
              <div className="mt-5 border-t border-dashed border-line pt-3 font-mono text-[0.65rem] text-forest/40">
                VALID FOR ALL NETWORKS
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-4 pt-8 md:px-6">
        <AdSlot variant="leaderboard" />
      </div>

      {/* Sections grid */}
      <section className="mx-auto max-w-6xl px-4 py-14 md:px-6">
        <h2 className="font-display text-2xl font-bold text-forest">Browse by topic</h2>
        <p className="mt-2 text-ink/60">Every topic is organised into focused guides — no digging required.</p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SECTIONS.map((s) => {
            const clusterCount = CLUSTERS.filter((c) => c.section === s.slug).reduce(
              (sum, c) => sum + (counts[c.slug] || 0),
              0
            );
            return (
              <CategoryCard
                key={s.slug}
                href={`/${s.slug}`}
                name={s.name}
                blurb={s.blurb}
                count={clusterCount}
              />
            );
          })}
        </div>
      </section>

      {/* Popular guides */}
      <section className="mx-auto max-w-6xl px-4 pb-14 md:px-6">
        <h2 className="font-display text-2xl font-bold text-forest">Popular guides right now</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((a) => (
            <ArticleCard key={a.slug} article={a} />
          ))}
        </div>
      </section>

      {/* International coverage teaser */}
      <section className="border-t border-line bg-slip/40">
        <div className="mx-auto max-w-6xl px-4 py-12 md:px-6">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-stamp-dark">Now expanding beyond Nigeria</p>
          <h2 className="mt-2 font-display text-2xl font-bold text-forest">
            Government, education and telecom guides across {COUNTRIES.length} countries
          </h2>
          <p className="mt-2 max-w-2xl text-ink/65">
            Nigeria remains our deepest, most complete coverage — but {SITE_NAME} is steadily building out
            national ID, education and mobile network guides across Africa, and into Europe, North America
            and Oceania.
          </p>
          <div className="mt-6 space-y-4">
            {getCountriesByRegion().map(({ region, countries }) => (
              <div key={region}>
                <p className="font-mono text-[0.65rem] uppercase tracking-widest text-ink/40">{region}</p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {countries.map((c) => (
                    <span
                      key={c.slug}
                      className="rounded-full border border-line bg-white px-3 py-1.5 text-sm text-ink/70"
                    >
                      {c.flag} {c.name}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <Link href="/telecom" className="mt-6 inline-block text-sm font-semibold text-forest-bright underline">
            Browse all telecom guides →
          </Link>
        </div>
      </section>

      {/* Trust strip */}
      <section className="border-t border-line bg-white">
        <div className="mx-auto max-w-6xl px-4 py-12 text-center md:px-6">
          <p className="font-display text-lg font-semibold text-forest">
            Building toward {totalPlanned()}+ guides across {CLUSTERS.length} topics
          </p>
          <p className="mx-auto mt-2 max-w-2xl text-sm text-ink/60">
            We're steadily working through JAMB, WAEC, NIN, every major bank and telecom network, and the
            everyday admin tasks that come up again and again. Can't find what you need yet?{" "}
            <Link href="/contact" className="font-medium text-forest-bright underline">
              Tell us what to write next.
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}
