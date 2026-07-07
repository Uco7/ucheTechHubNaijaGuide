import Link from "next/link";
import { getCluster } from "@/lib/categories";

export default function ArticleCard({ article }) {
  const cluster = getCluster(article.cluster);
  return (
    <Link
      href={`/${article.section}/${article.cluster}/${article.slug}`}
      className="group block rounded-card border border-line bg-white p-5 transition hover:border-forest-bright hover:shadow-md"
    >
      <p className="font-mono text-[0.7rem] uppercase tracking-wide text-stamp-dark">
        {cluster?.name || article.cluster}
      </p>
      <h3 className="mt-1.5 font-display text-base font-semibold text-forest group-hover:text-forest-bright md:text-lg">
        {article.title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-ink/65">{article.description}</p>
    </Link>
  );
}
