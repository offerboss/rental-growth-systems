export const BOOKING_URL = "https://rentalgrowthsystems.com/booking-home";

export const PLATFORM_URLS = {
  portableToiletFinder: "https://portabletoiletfinder.com/",
  rolloffDumpsterFinder: "https://www.rolloffdumpsterfinder.com/",
  eventRentalFinder: "https://www.eventrentalfinder.com/",
  constructionRentalFinder: "https://www.constructionrentalfinder.com",
} as const;

// Founding Partner pricing checkout links (opened in the same tab — see
// PricingSection.tsx).
export const PRICING_URLS = {
  preferred: "https://checkout.rentalgrowthsystems.com/get-preferred",
  premium: "https://checkout.rentalgrowthsystems.com/get-premium",
  growth: "https://checkout.rentalgrowthsystems.com/get-growth",
} as const;

// Attributes for links that leave the RGS site.
export const EXTERNAL_LINK_PROPS = {
  target: "_blank",
  rel: "noopener noreferrer",
} as const;
