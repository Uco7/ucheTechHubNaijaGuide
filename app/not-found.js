import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-xl px-4 py-24 text-center md:px-6">
      <p className="font-mono text-sm uppercase tracking-widest text-stamp-dark">404</p>
      <h1 className="mt-3 font-display text-3xl font-bold text-forest">We haven't written that one yet</h1>
      <p className="mt-3 text-ink/65">
        The guide you're looking for doesn't exist, or its link may have changed. Try searching instead.
      </p>
      <Link
        href="/search"
        className="mt-6 inline-block rounded-full bg-forest px-6 py-3 text-sm font-semibold text-paper hover:bg-forest-light"
      >
        Search guides
      </Link>
    </div>
  );
}
