import Link from "next/link";

export default function CategoryCard({ href, name, blurb, count }) {
  return (
    <Link
      href={href}
      className="group relative flex flex-col justify-between rounded-card border border-line bg-white p-6 transition hover:-translate-y-0.5 hover:border-forest-bright hover:shadow-md"
    >
      <div>
        <h3 className="font-display text-lg font-bold text-forest group-hover:text-forest-bright">{name}</h3>
        {blurb && <p className="mt-2 text-sm leading-relaxed text-ink/65">{blurb}</p>}
      </div>
      {typeof count === "number" && (
        <p className="mt-4 font-mono text-xs uppercase tracking-wide text-stamp-dark">
          {count} {count === 1 ? "guide" : "guides"}
        </p>
      )}
    </Link>
  );
}
