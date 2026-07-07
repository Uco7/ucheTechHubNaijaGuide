import Link from "next/link";
import { SITE_URL } from "@/lib/site";

export default function Breadcrumbs({ items }) {
  // items: [{ name, href }] — last item is the current page (no href needed)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.href ? `${SITE_URL}${item.href}` : undefined,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <nav aria-label="Breadcrumb" className="text-xs text-ink/50">
        <ol className="flex flex-wrap items-center gap-1.5">
          {items.map((item, i) => (
            <li key={i} className="flex items-center gap-1.5">
              {i > 0 && <span aria-hidden="true">/</span>}
              {item.href && i !== items.length - 1 ? (
                <Link href={item.href} className="hover:text-forest hover:underline">
                  {item.name}
                </Link>
              ) : (
                <span className={i === items.length - 1 ? "text-ink/80" : ""}>{item.name}</span>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}
