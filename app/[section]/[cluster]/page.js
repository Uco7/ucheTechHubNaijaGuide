import { notFound } from "next/navigation";
import { CLUSTERS, getSection, getCluster } from "@/lib/categories";
import { getArticlesByCluster } from "@/lib/content";
import { getCountry } from "@/lib/countries";
import ArticleCard from "@/components/ArticleCard";
import Breadcrumbs from "@/components/Breadcrumbs";
import AdSlot from "@/components/AdSlot";

export function generateStaticParams() {
  return CLUSTERS.map((c) => ({ section: c.section, cluster: c.slug }));
}

export function generateMetadata({ params }) {
  const cluster = getCluster(params.cluster);
  if (!cluster) return {};
  const country = getCountry(cluster.country);
  const title = country && country.slug !== "nigeria"
    ? `${cluster.name} (${country.name}) — How-To Guides`
    : `${cluster.name} — How-To Guides`;
  return {
    title,
    description: cluster.blurb || `Step-by-step ${cluster.name} guides.`,
    alternates: { canonical: `/${params.section}/${cluster.slug}` },
  };
}

export default function ClusterPage({ params }) {
  const section = getSection(params.section);
  const cluster = getCluster(params.cluster);
  if (!section || !cluster || cluster.section !== section.slug) return notFound();

  const articles = getArticlesByCluster(cluster.slug);
  const country = getCountry(cluster.country);

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 md:px-6">
      <Breadcrumbs
        items={[
          { name: "Home", href: "/" },
          { name: section.name, href: `/${section.slug}` },
          { name: cluster.name },
        ]}
      />

      <div className="mt-4 flex items-center gap-3">
        {country && country.slug !== "nigeria" && (
          <span
            aria-hidden="true"
            className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-line bg-white text-lg"
          >
            {country.flag}
          </span>
        )}
        <h1 className="font-display text-3xl font-bold text-forest md:text-4xl">{cluster.name} Guides</h1>
      </div>
      {country && country.slug !== "nigeria" && (
        <p className="mt-1 font-mono text-xs uppercase tracking-wide text-stamp-dark">{country.name}</p>
      )}
      {cluster.blurb && <p className="mt-2 max-w-2xl text-ink/65">{cluster.blurb}</p>}

      <div className="mt-4">
        <AdSlot variant="leaderboard" />
      </div>

      {articles.length > 0 ? (
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {articles.map((a) => (
            <ArticleCard key={a.slug} article={a} />
          ))}
        </div>
      ) : (
        <div className="mt-10 rounded-card border border-dashed border-line bg-white p-8 text-center text-ink/60">
          <p>
            We're still writing this cluster — {cluster.planned}+ guides are planned here. Check back soon,
            or browse other {section.name} topics.
          </p>
        </div>
      )}
    </div>
  );
}
