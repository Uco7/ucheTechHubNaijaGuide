import ArticleCard from "./ArticleCard";

export default function RelatedArticles({ articles }) {
  if (!articles?.length) return null;
  return (
    <section aria-labelledby="related-heading" className="mt-14">
      <h2 id="related-heading" className="font-display text-xl font-bold text-forest">
        Related guides
      </h2>
      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        {articles.map((a) => (
          <ArticleCard key={a.slug} article={a} />
        ))}
      </div>
    </section>
  );
}
