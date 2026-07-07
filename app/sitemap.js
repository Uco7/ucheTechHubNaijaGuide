import { SECTIONS, CLUSTERS } from "@/lib/categories";
import { getAllArticles } from "@/lib/content";
import { SITE_URL } from "@/lib/site";

export default function sitemap() {
  const staticPages = ["", "/about", "/contact", "/privacy"].map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: path === "" ? 1 : 0.4,
  }));

  const sectionPages = SECTIONS.map((s) => ({
    url: `${SITE_URL}/${s.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.7,
  }));

  const clusterPages = CLUSTERS.map((c) => ({
    url: `${SITE_URL}/${c.section}/${c.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.6,
  }));

  const articlePages = getAllArticles().map((a) => ({
    url: `${SITE_URL}/${a.section}/${a.cluster}/${a.slug}`,
    lastModified: new Date(a.updated),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...staticPages, ...sectionPages, ...clusterPages, ...articlePages];
}
