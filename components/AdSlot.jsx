"use client";

import { useEffect, useRef } from "react";
import { ADSENSE_CLIENT_ID } from "@/lib/site";

/**
 * Drop this anywhere you want an ad. It renders a real AdSense unit once
 * ADSENSE_CLIENT_ID + slot are configured in lib/site.js; until then it
 * shows a labelled placeholder so your layout doesn't jump around once
 * ads go live.
 *
 * Placement guidance baked in via the `variant` prop:
 * - "in-article": use between step 3–4 of a guide and again near the FAQ.
 *   Never place inside the numbered step list itself — that hurts UX and
 *   can violate ad-placement policies around accidental clicks.
 * - "sidebar": sticky unit next to the article on desktop, hidden on mobile.
 * - "leaderboard": below the header, above the fold.
 */
export default function AdSlot({ variant = "in-article", slot = "" }) {
  const ref = useRef(null);
  const configured = Boolean(ADSENSE_CLIENT_ID) && Boolean(slot);

  useEffect(() => {
    if (!configured) return;
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {
      // Fails silently in dev / when blocked by an ad blocker
    }
  }, [configured]);

  const sizing =
    variant === "sidebar"
      ? "h-[600px] w-full max-w-[300px] hidden lg:block"
      : variant === "leaderboard"
      ? "h-[90px] w-full max-w-[728px] mx-auto hidden md:block"
      : "min-h-[100px] w-full";

  if (!configured) {
    return (
      <div
        aria-hidden="true"
        className={`${sizing} flex items-center justify-center rounded-card border border-dashed border-line bg-white/60 text-xs uppercase tracking-wide text-ink/30`}
        data-ad-placeholder={variant}
      >
        Ad space — {variant}
      </div>
    );
  }

  return (
    <div ref={ref} className={sizing}>
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client={ADSENSE_CLIENT_ID}
        data-ad-slot={slot}
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </div>
  );
}
