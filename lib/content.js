import { nin } from "@/data/articles/nin";
import { jamb } from "@/data/articles/jamb";
import { waec } from "@/data/articles/waec";
import { nysc } from "@/data/articles/nysc";
import { gtbank } from "@/data/articles/gtbank";
import { opay } from "@/data/articles/opay";
import { mtn } from "@/data/articles/mtn";
import { everyday } from "@/data/articles/everyday";
import { jobs } from "@/data/articles/jobs";
import { safaricom } from "@/data/articles/safaricom";
import { mpesa } from "@/data/articles/mpesa";
import { mtnGhana } from "@/data/articles/mtn-ghana";
import { verizon } from "@/data/articles/verizon";
import { ee } from "@/data/articles/ee";
import { uganda } from "@/data/articles/uganda";
import { southAfricaCivic } from "@/data/articles/south-africa-civic";
import { usBenefits } from "@/data/articles/us-benefits";

// ---------------------------------------------------------------------------
// This is the single place new article files need to be registered.
// To publish a new cluster: create /data/articles/<name>.js exporting an
// array of article objects (see any existing file for the shape), then add
// it to this list. Nothing else in the app needs to change — routes,
// sitemap, related-article links and search all read from here.
// ---------------------------------------------------------------------------
const ALL_ARTICLES = [
  ...nin,
  ...jamb,
  ...waec,
  ...nysc,
  ...gtbank,
  ...opay,
  ...mtn,
  ...everyday,
  ...jobs,
  ...safaricom,
  ...mpesa,
  ...mtnGhana,
  ...verizon,
  ...ee,
  ...uganda,
  ...southAfricaCivic,
  ...usBenefits,
];

export function getAllArticles() {
  return ALL_ARTICLES;
}

export function getArticleBySlug(slug) {
  return ALL_ARTICLES.find((a) => a.slug === slug) || null;
}

export function getArticlesByCluster(clusterSlug) {
  return ALL_ARTICLES.filter((a) => a.cluster === clusterSlug);
}

export function getArticlesBySection(sectionSlug) {
  return ALL_ARTICLES.filter((a) => a.section === sectionSlug);
}

export function getRelatedArticles(article) {
  if (!article?.relatedSlugs) return [];
  return article.relatedSlugs
    .map((slug) => getArticleBySlug(slug))
    .filter(Boolean);
}

export function searchArticles(query) {
  const q = query.trim().toLowerCase();
  if (!q) return [];
  return ALL_ARTICLES.filter(
    (a) =>
      a.title.toLowerCase().includes(q) ||
      a.description?.toLowerCase().includes(q)
  ).slice(0, 20);
}

export function getClustersWithCounts() {
  const map = {};
  for (const a of ALL_ARTICLES) {
    map[a.cluster] = (map[a.cluster] || 0) + 1;
  }
  return map;
}
