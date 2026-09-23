// Small builder functions for the JSON-LD payloads the site uses.
// Each returns a plain object matching schema.org; render it with the
// <JsonLd /> component (app/components/JsonLd.tsx). Keeping these as
// data builders (rather than components) makes them reusable from both
// Server Components and plain functions like generateMetadata.

import { DEFAULT_DESCRIPTION, SITE_NAME, SITE_URL } from "./site-config";

type JsonLdValue =
  | string
  | number
  | boolean
  | undefined
  | JsonLdObject
  | JsonLdValue[];
type JsonLdObject = { [key: string]: JsonLdValue };

export function organizationJsonLd(): JsonLdObject {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
    // States the entity relationship plainly: RGS builds these three kinds
    // of systems, specifically for rental companies.
    description: DEFAULT_DESCRIPTION,
  };
}

export function websiteJsonLd(): JsonLdObject {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
  };
}

export type BreadcrumbItem = {
  name: string;
  /** Absolute or site-relative ("/foo") URL. */
  url: string;
};

/** Build a BreadcrumbList for any page — pass its ancestor chain in order. */
export function breadcrumbJsonLd(items: BreadcrumbItem[]): JsonLdObject {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url.startsWith("http") ? item.url : `${SITE_URL}${item.url}`,
    })),
  };
}

export type ArticleJsonLdInput = {
  headline: string;
  description?: string;
  /** Absolute or site-relative ("/resources/foo") URL of the article. */
  url: string;
  /** ISO date string. */
  datePublished: string;
  /** ISO date string; defaults to datePublished. */
  dateModified?: string;
  /** Absolute or site-relative image URL. */
  image?: string;
  /** Byline; rendered as an Organization author (no individual is named). */
  authorName?: string;
};

/** Build an Article schema for future resource/blog pages. */
export function articleJsonLd(input: ArticleJsonLdInput): JsonLdObject {
  const url = input.url.startsWith("http") ? input.url : `${SITE_URL}${input.url}`;
  const image = input.image
    ? input.image.startsWith("http")
      ? input.image
      : `${SITE_URL}${input.image}`
    : undefined;

  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: input.headline,
    description: input.description,
    url,
    mainEntityOfPage: url,
    image,
    datePublished: input.datePublished,
    dateModified: input.dateModified ?? input.datePublished,
    author: input.authorName
      ? { "@type": "Organization", name: input.authorName }
      : undefined,
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
  };
}

export type FaqItem = {
  question: string;
  answer: string;
};

/**
 * Build FAQPage schema. Only call this where the same questions and answers
 * are also rendered as visible page content — the schema must mirror what a
 * visitor actually sees, not a superset of it.
 */
export function faqJsonLd(items: FaqItem[]): JsonLdObject {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}
