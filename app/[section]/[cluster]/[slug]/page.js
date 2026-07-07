import { notFound } from "next/navigation";
import Link from "next/link";
import { getAllArticles, getArticleBySlug, getRelatedArticles } from "@/lib/content";
import { getSection, getCluster } from "@/lib/categories";
import Breadcrumbs from "@/components/Breadcrumbs";
import StepList from "@/components/StepList";
import TableOfContents from "@/components/TableOfContents";
import RelatedArticles from "@/components/RelatedArticles";
import AdSlot from "@/components/AdSlot";
import { SITE_URL, SITE_NAME } from "@/lib/site";

export function generateStaticParams() {
  return getAllArticles().map((a) => ({
    section: a.section,
    cluster: a.cluster,
    slug: a.slug,
  }));
}

export function generateMetadata({ params }) {
  const article = getArticleBySlug(params.slug);
  if (!article) return {};
  const url = `/${article.section}/${article.cluster}/${article.slug}`;
  return {
    title: article.title,
    description: article.description,
    alternates: { canonical: url },
    openGraph: {
      title: article.title,
      description: article.description,
      url,
      type: "article",
      modifiedTime: article.updated,
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.description,
    },
  };
}

export default function ArticlePage({ params }) {
  const article = getArticleBySlug(params.slug);
  if (!article || article.section !== params.section || article.cluster !== params.cluster) {
    return notFound();
  }

  const section = getSection(article.section);
  const cluster = getCluster(article.cluster);
  const related = getRelatedArticles(article);
  const url = `${SITE_URL}/${article.section}/${article.cluster}/${article.slug}`;

  const howToJsonLd = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: article.title,
    description: article.description,
    dateModified: article.updated,
    step: article.steps.map((step, i) => ({
      "@type": "HowToStep",
      position: i + 1,
      name: step.title,
      text: step.body,
    })),
  };

  const faqJsonLd = article.faq?.length
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: article.faq.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      }
    : null;

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 md:px-6">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }} />
      {faqJsonLd && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      )}

      <Breadcrumbs
        items={[
          { name: "Home", href: "/" },
          { name: section?.name || article.section, href: `/${article.section}` },
          { name: cluster?.name || article.cluster, href: `/${article.section}/${article.cluster}` },
          { name: article.title },
        ]}
      />

      <div className="mt-6 grid gap-10 lg:grid-cols-[1fr_280px]">
        <article className="min-w-0">
          <p className="font-mono text-xs uppercase tracking-wide text-stamp-dark">
            {cluster?.name || article.cluster}
          </p>
          <h1 className="mt-2 font-display text-3xl font-bold leading-tight text-forest md:text-4xl">
            {article.title}
          </h1>
          <p className="mt-3 text-lg leading-relaxed text-ink/70">{article.description}</p>
          <p className="mt-3 text-xs text-ink/40">
            Last updated{" "}
            {new Date(article.updated).toLocaleDateString("en-NG", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>

          {article.requirements?.length > 0 && (
            <div id="requirements" className="mt-8 rounded-card border border-line bg-white p-6 scroll-mt-24">
              <h2 className="font-display text-lg font-bold text-forest">What you'll need</h2>
              <ul className="mt-3 space-y-2 text-sm text-ink/75">
                {article.requirements.map((r, i) => (
                  <li key={i} className="flex gap-2">
                    <span aria-hidden="true" className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-stamp" />
                    {r}
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="mt-6 lg:hidden">
            <AdSlot variant="in-article" />
          </div>

          <StepList steps={article.steps} />

          <div className="mt-8">
            <AdSlot variant="in-article" />
          </div>

          {article.faq?.length > 0 && (
            <section id="faq" className="mt-12 scroll-mt-24">
              <h2 className="font-display text-xl font-bold text-forest">Frequently asked questions</h2>
              <div className="mt-4 space-y-3">
                {article.faq.map((f, i) => (
                  <details key={i} className="group rounded-card border border-line bg-white p-5">
                    <summary className="cursor-pointer list-none font-display text-base font-semibold text-forest marker:content-none">
                      <span className="flex items-center justify-between gap-4">
                        {f.q}
                        <span className="shrink-0 text-stamp-dark transition group-open:rotate-45">+</span>
                      </span>
                    </summary>
                    <p className="mt-3 text-sm leading-relaxed text-ink/75">{f.a}</p>
                  </details>
                ))}
              </div>
            </section>
          )}

          <p className="mt-10 rounded-card border border-dashed border-line bg-white/60 p-4 text-xs text-ink/50">
            {SITE_NAME} guides are written for general information. Fees, portals and requirements can change —
            always confirm current details on the official website before making a payment.
          </p>

          <RelatedArticles articles={related} />
        </article>

        <aside className="hidden lg:block">
          <div className="sticky top-24 space-y-6">
            <TableOfContents steps={article.steps} hasFaq={article.faq?.length > 0} />
            <AdSlot variant="sidebar" />
          </div>
        </aside>
      </div>
    </div>
  );
}
