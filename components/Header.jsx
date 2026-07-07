"use client";

import { useState } from "react";
import Link from "next/link";
import { SECTIONS } from "@/lib/categories";
import { SITE_NAME } from "@/lib/site";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-forest text-paper">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-6">
        <Link href="/" className="flex items-center gap-2 font-display text-xl font-bold tracking-tight">
          <span
            aria-hidden="true"
            className="grid h-8 w-8 place-items-center rounded-full bg-stamp text-sm font-black text-forest"
          >
            HF
          </span>
          {SITE_NAME}
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {SECTIONS.slice(0, 6).map((s) => (
            <Link
              key={s.slug}
              href={`/${s.slug}`}
              className="text-sm font-medium text-paper/85 transition hover:text-stamp"
            >
              {s.name}
            </Link>
          ))}
          <Link
            href="/search"
            className="rounded-full border border-paper/30 px-3 py-1.5 text-sm font-medium transition hover:border-stamp hover:text-stamp"
          >
            Search
          </Link>
        </nav>

        <button
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label="Toggle menu"
          className="grid h-9 w-9 place-items-center rounded-md border border-paper/30 lg:hidden"
        >
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
            <path d="M2 4.5h14M2 9h14M2 13.5h14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          </svg>
        </button>
      </div>

      {open && (
        <nav id="mobile-nav" className="border-t border-paper/10 bg-forest lg:hidden">
          <ul className="mx-auto max-w-6xl divide-y divide-paper/10 px-4">
            {SECTIONS.map((s) => (
              <li key={s.slug}>
                <Link
                  href={`/${s.slug}`}
                  onClick={() => setOpen(false)}
                  className="block py-3 text-sm font-medium text-paper/90"
                >
                  {s.name}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/search"
                onClick={() => setOpen(false)}
                className="block py-3 text-sm font-medium text-stamp"
              >
                Search all guides
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
