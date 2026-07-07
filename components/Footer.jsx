import Link from "next/link";
import { SECTIONS } from "@/lib/categories";
import { SITE_NAME, SITE_TAGLINE } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-line bg-white">
      <div className="mx-auto max-w-6xl px-4 py-12 md:px-6">
        <div className="grid gap-10 md:grid-cols-4">
          <div>
            <p className="font-display text-lg font-bold text-forest">{SITE_NAME}</p>
            <p className="mt-2 text-sm text-ink/60">{SITE_TAGLINE}</p>
          </div>

          <div className="md:col-span-3 grid grid-cols-2 gap-6 sm:grid-cols-3">
            {SECTIONS.map((s) => (
              <div key={s.slug}>
                <Link href={`/${s.slug}`} className="text-sm font-semibold text-forest hover:text-stamp-dark">
                  {s.name}
                </Link>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-line pt-6 text-xs text-ink/50 md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} {SITE_NAME}. Guides are for general information — always confirm current
            fees and procedures on the official platform before you pay.
          </p>
          <div className="flex gap-4">
            <Link href="/about" className="hover:text-forest">About</Link>
            <Link href="/contact" className="hover:text-forest">Contact</Link>
            <Link href="/privacy" className="hover:text-forest">Privacy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
