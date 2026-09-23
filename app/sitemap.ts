import type { MetadataRoute } from "next";

import { industryPages, resourcePages, solutionPages } from "./lib/seo/content";
import { SITE_URL } from "./lib/seo/site-config";

// Static marketing routes that exist today. Add new ones here as they ship.
const STATIC_ROUTES: Array<{
  path: string;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
  priority: number;
}> = [
  { path: "/", changeFrequency: "weekly", priority: 1 },
  { path: "/solutions", changeFrequency: "monthly", priority: 0.9 },
  { path: "/industries", changeFrequency: "monthly", priority: 0.8 },
  { path: "/resources", changeFrequency: "weekly", priority: 0.7 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticEntries: MetadataRoute.Sitemap = STATIC_ROUTES.map((route) => ({
    url: `${SITE_URL}${route.path}`,
    lastModified: new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));

  const industryEntries: MetadataRoute.Sitemap = industryPages.map((page) => ({
    url: `${SITE_URL}/industries/${page.slug}`,
    lastModified: page.updatedAt ? new Date(page.updatedAt) : new Date(),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const resourceEntries: MetadataRoute.Sitemap = resourcePages.map((page) => ({
    url: `${SITE_URL}/resources/${page.slug}`,
    lastModified: page.updatedAt ? new Date(page.updatedAt) : new Date(),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  const solutionEntries: MetadataRoute.Sitemap = solutionPages.map((page) => ({
    url: `${SITE_URL}/solutions/${page.slug}`,
    lastModified: page.updatedAt ? new Date(page.updatedAt) : new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...staticEntries, ...industryEntries, ...resourceEntries, ...solutionEntries];
}
