// Centralized registry of content-driven routes.
//
// The sitemap (see app/sitemap.ts) reads from these arrays instead of
// hardcoding URLs, so publishing a new industry or resource page is a
// one-line addition in its own content file rather than an edit to the
// sitemap itself.

import { industries } from "../../../content/industries";
import { resources } from "../../../content/resources";
import { solutions } from "../../../content/solutions";

export type ContentPage = {
  /** URL segment, e.g. "porta-potty-rental-companies" */
  slug: string;
  /** ISO date string for <lastmod>; omit to fall back to build time. */
  updatedAt?: string;
};

// Industry-specific landing pages, e.g. /industries/[slug]. Derived from the
// industry content registry (content/industries.ts) so this never drifts out
// of sync with what's actually published. Industries don't carry a date
// field, so <lastmod> falls back to build time.
export const industryPages: ContentPage[] = industries.map((industry) => ({
  slug: industry.slug,
}));

// Resource / article pages, e.g. /resources/[slug]. Derived from the resource
// content registry (content/resources.ts) so this never drifts out of sync
// with what's actually published.
export const resourcePages: ContentPage[] = resources.map((resource) => ({
  slug: resource.slug,
  updatedAt: resource.updatedDate ?? resource.publishedDate,
}));

// Solution pages, e.g. /solutions/[slug]. Derived from the solution content
// registry (content/solutions.ts); no date field, so <lastmod> falls back to
// build time.
export const solutionPages: ContentPage[] = solutions.map((solution) => ({
  slug: solution.slug,
}));
