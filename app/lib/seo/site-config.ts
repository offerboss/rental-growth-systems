// Central place for the values that show up across metadata, robots.txt,
// sitemap.xml and JSON-LD. Update here rather than editing individual files.

export const SITE_URL = "https://rentalgrowthsystems.com";
export const SITE_NAME = "Rental Growth Systems";

export const DEFAULT_TITLE =
  "Rental Growth Systems | Growth Systems for Rental Companies";

export const TITLE_TEMPLATE = `%s | ${SITE_NAME}`;

// Leads with a plain entity definition (what RGS is) before the benefit
// framing, so it reads clearly out of context — in a search snippet, a
// social share, or an AI answer citing it.
export const DEFAULT_DESCRIPTION =
  "Rental Growth Systems builds customer acquisition, digital infrastructure, and customer value systems for rental companies — helping them get discovered, run smarter operations, and grow revenue from existing customers.";

// Used as the default social share image until a dedicated OG asset exists.
export const DEFAULT_OG_IMAGE = {
  url: "/images/hero-dashboard.png",
  width: 1448,
  height: 1086,
  alt: "Rental Growth Systems dashboard showing inquiries, bookings and revenue, beside a mobile directory listing rental companies",
};
