"use client";

import { useMemo, useState } from "react";
import { searchArticles } from "@/lib/content";
import ArticleCard from "@/components/ArticleCard";

export default function HomeSearch() {
  const [query, setQuery] = useState("");

  const results = useMemo(() => {
    return searchArticles(query);
  }, [query]);

  return (
    <>
      <div className="mt-8 max-w-md">
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Try 'reset GTBank PIN' or 'JAMB slip'"
          className="w-full rounded-full border border-paper/25 bg-paper/10 px-5 py-3 text-sm text-paper placeholder:text-paper/50 focus:bg-paper focus:text-ink"
        />
      </div>

      {query.trim() !== "" && (
        <div className="mt-10 rounded-card bg-white p-6 shadow-xl">
          <h2 className="mb-6 font-display text-2xl font-bold text-forest">
            {results.length} result{results.length !== 1 ? "s" : ""}
          </h2>

          {results.length === 0 ? (
            <p className="text-ink/60">
              No guide found for <strong>{query}</strong>.
            </p>
          ) : (
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {results.map((article) => (
                <ArticleCard
                  key={article.slug}
                  article={article}
                />
              ))}
            </div>
          )}
        </div>
      )}
    </>
  );
}