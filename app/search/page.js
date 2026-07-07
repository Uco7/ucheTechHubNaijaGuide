import { searchArticles } from "@/lib/content";
import ArticleCard from "@/components/ArticleCard";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata = {
  title: "Search guides",
  robots: { index: false, follow: true }, // internal search results shouldn't compete in the index
};

export default function SearchPage({ searchParams }) {
  const q = searchParams?.q || "";
  const results = q ? searchArticles(q) : [];

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 md:px-6">
      <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Search" }]} />

      <h1 className="mt-4 font-display text-3xl font-bold text-forest">Search guides</h1>

      <form action="/search" className="mt-6 flex max-w-lg gap-2">
        <input
          type="search"
          name="q"
          defaultValue={q}
          placeholder="e.g. reset GTBank PIN"
          className="w-full rounded-full border border-line px-5 py-3 text-sm focus:border-forest-bright"
        />
        <button
          type="submit"
          className="rounded-full bg-forest px-5 py-3 text-sm font-semibold text-paper transition hover:bg-forest-light"
        >
          Search
        </button>
      </form>

      <div className="mt-8">
        {q && (
          <p className="mb-4 text-sm text-ink/60">
            {results.length} result{results.length === 1 ? "" : "s"} for “{q}”
          </p>
        )}
        {q && results.length === 0 && (
          <p className="text-ink/60">
            No guide found yet for that search. Try a simpler term, or browse topics from the homepage.
          </p>
        )}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {results.map((a) => (
            <ArticleCard key={a.slug} article={a} />
          ))}
        </div>
      </div>
    </div>
  );
}
