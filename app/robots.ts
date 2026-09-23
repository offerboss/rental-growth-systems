import type { MetadataRoute } from "next";

import { SITE_URL } from "./lib/seo/site-config";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // Normal crawling for search engines, allowed across the public site.
      {
        userAgent: "*",
        allow: "/",
      },
      // Explicitly allowed — do not block AI retrieval from OpenAI's search crawler.
      {
        userAgent: "OAI-SearchBot",
        allow: "/",
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
