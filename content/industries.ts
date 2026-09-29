// Centralized industry-vertical content for /industries and /industries/[slug].
//
// Follows the same pattern as content/resources.ts: a page is a plain data
// object appended to INDUSTRIES below, rendered by app/industries pages and
// app/components/industries/*. Reuses ContentBlock (and its "[label](url)"
// inline-link syntax) from content/resources.ts instead of a second system.

import { PLATFORM_URLS } from "../app/lib/links";
import type { ContentBlock } from "./resources";
import { getResourceBySlug, type Resource } from "./resources";

export type ChallengeItem = {
  title: string;
  description: string;
};

export type RelatedPlatform = {
  name: string;
  description: string;
  status: "live" | "coming-soon";
  /** Present only when status is "live". */
  url?: string;
};

export type Industry = {
  slug: string;
  name: string;
  metaTitle: string;
  metaDescription: string;
  heroHeadline: string;
  heroSubheadline: string;
  /** Answer-first opening, rendered right under the hero. */
  intro: ContentBlock[];
  challenges: ChallengeItem[];
  /** Body content under the "Acquire More Customers" pillar. */
  acquisitionSystems: ContentBlock[];
  /** Body content under the "Run a Smarter Operation" pillar. */
  infrastructureSystems: ContentBlock[];
  /** Body content under the "Make Every Customer Worth More" pillar. */
  customerValueSystems: ContentBlock[];
  relatedPlatform?: RelatedPlatform;
  /** Resource slugs, resolved via getRelatedResourcesForIndustry(). */
  relatedResources: string[];
  ctaHeadline: string;
  ctaCopy: string;
};

const INDUSTRIES: Industry[] = [
  {
    slug: "dumpster-rental",
    name: "Dumpster Rental",
    metaTitle: "Growth Systems for Dumpster Rental Companies",
    metaDescription:
      "Rental Growth Systems helps dumpster rental companies acquire more customers, streamline quoting and follow-up, and build repeat contractor relationships.",
    heroHeadline: "Growth Systems for Dumpster Rental Companies",
    heroSubheadline:
      "Rental Growth Systems helps dumpster rental companies acquire more local customers, streamline quoting and dispatch, and turn one-time haulers into repeat contractor accounts.",
    intro: [
      {
        type: "paragraph",
        text: "Dumpster rental is one of the most local, most commoditized rental categories there is — which means the companies that win are usually the ones that are easiest to find, easiest to get a price from, and fastest to follow up. Rental Growth Systems builds the specific systems that make that possible, instead of generic marketing that doesn't account for how this business actually runs.",
      },
    ],
    challenges: [
      {
        title: "Hyper-Local, Multi-Quote Shopping",
        description:
          "Customers routinely compare two or three haulers in the same local service area and book with whichever one responds first with a clear price.",
      },
      {
        title: "Size and Pricing Confusion",
        description:
          "Customers don't always know what yard size they need, so quote pages have to make that decision easy instead of assuming prior knowledge.",
      },
      {
        title: "Missed Calls During Drop-Off and Pickup",
        description:
          "Drivers are on the road handling deliveries and swaps at exactly the times new inquiries come in, which makes those calls the hardest ones to answer live.",
      },
      {
        title: "Recurring Demand from Contractors",
        description:
          "A meaningful share of volume comes from repeat commercial and contractor accounts, but many companies have no system for staying in front of past customers between jobs.",
      },
      {
        title: "Seasonal Spikes Around Cleanup Season",
        description:
          "Spring and fall cleanup and moving season create short windows of high demand, where slow response times cost the most business.",
      },
    ],
    acquisitionSystems: [
      {
        type: "paragraph",
        text: "For dumpster rental, acquisition centers on showing up in local search results and dedicated directories at the exact moment someone needs a hauler, then making it fast to get a price by size and rental length.",
      },
      {
        type: "list",
        style: "unordered",
        items: [
          "Local search visibility by service area and dumpster size",
          "Directory presence on platforms customers already compare offers through",
          "Clear, fast online quoting instead of a \"call for pricing\" page",
        ],
      },
    ],
    infrastructureSystems: [
      {
        type: "paragraph",
        text: "Because drivers are often on the road during drop-off and pickup windows, the infrastructure that matters most is what happens when your team can't answer a call live.",
      },
      {
        type: "list",
        style: "unordered",
        items: [
          "Instant quote confirmation and follow-up when a form comes in",
          "Call routing or overflow coverage during busy delivery hours",
          "A simple system for tracking which leads have actually been followed up on",
        ],
      },
    ],
    customerValueSystems: [
      {
        type: "paragraph",
        text: "A meaningful share of dumpster rental volume comes from repeat contractor and property-management accounts, so the highest-leverage work is often staying in front of past customers rather than only chasing new ones.",
      },
      {
        type: "list",
        style: "unordered",
        items: [
          "Follow-up outreach after a rental wraps, timed to likely reorder cycles",
          "Review requests while the job is still fresh",
          "Simple tracking of repeat customers so they're not treated like first-time leads",
        ],
      },
    ],
    relatedPlatform: {
      name: "Rolloff Dumpster Finder",
      status: "live",
      url: PLATFORM_URLS.rolloffDumpsterFinder,
      description:
        "Rolloff Dumpster Finder is a dumpster rental directory operated by Rental Growth Systems. Listed companies show up in front of customers who are actively comparing dumpster rental options in their area — a complement to the acquisition systems above, not a replacement for them.",
    },
    relatedResources: ["how-to-get-more-dumpster-rental-leads", "rental-company-speed-to-lead"],
    ctaHeadline: "Build the Systems Behind Your Next Stage of Growth",
    ctaCopy:
      "Let's talk about your dumpster rental business and how Rental Growth Systems can help you book more jobs.",
  },
  {
    slug: "portable-toilet-rental",
    name: "Portable Toilet Rental",
    metaTitle: "Growth Systems for Portable Toilet Rental Companies",
    metaDescription:
      "Rental Growth Systems helps portable toilet rental companies acquire more event and construction customers and build smarter quoting, servicing, and follow-up systems.",
    heroHeadline: "Growth Systems for Portable Toilet Rental Companies",
    heroSubheadline:
      "Rental Growth Systems helps portable toilet rental companies acquire more event and construction customers, build smarter quoting and servicing systems, and turn one-time rentals into repeat accounts.",
    intro: [
      {
        type: "paragraph",
        text: "Portable toilet rental serves two distinct customer types under one business, and growth usually stalls when a company markets to both with the same generic message. Rental Growth Systems builds acquisition, quoting, and follow-up systems around how event and construction customers actually search and buy.",
      },
    ],
    challenges: [
      {
        title: "Two Very Different Buyers",
        description:
          "Event customers and construction site managers evaluate offers completely differently — appearance and delivery timing versus servicing schedule and reliability — and a single generic pitch doesn't work for both.",
      },
      {
        title: "Short Booking Windows for Construction",
        description:
          "Construction site rentals are often needed within days, so a slow quote process can lose the job before it even starts.",
      },
      {
        title: "Servicing Reliability Is Part of the Sale",
        description:
          "Unlike a one-time delivery, these rentals typically involve ongoing pump-outs, so customers are also evaluating whether a company will show up reliably for the life of the rental.",
      },
      {
        title: "Seasonal Demand Swings",
        description:
          "Event-driven demand concentrates heavily in spring and summer, while construction demand is comparatively steady, which changes how marketing and staffing should flex across the year.",
      },
      {
        title: "Standing Out in a Commoditized Category",
        description:
          "From a distance, most portable toilet companies look interchangeable online, so visibility and responsiveness often matter more than any single differentiator.",
      },
    ],
    acquisitionSystems: [
      {
        type: "paragraph",
        text: "Acquisition has to work for two different buyers at once — event planners comparing appearance and delivery timing, and construction managers comparing servicing schedules and reliability.",
      },
      {
        type: "list",
        style: "unordered",
        items: [
          "Local search and directory visibility for both event and construction-style searches",
          "Separate messaging for event vs. construction customers on the same site",
          "Fast quoting that accounts for unit type, quantity, and rental length",
        ],
      },
    ],
    infrastructureSystems: [
      {
        type: "paragraph",
        text: "Construction customers often need units within days, so the systems that matter most are the ones that shorten the time between a request coming in and a confirmed quote going out.",
      },
      {
        type: "list",
        style: "unordered",
        items: [
          "Instant acknowledgment of quote requests",
          "Simple online pricing by unit type where possible",
          "A shared system that tracks servicing schedules and rental terms, not just the initial sale",
        ],
      },
    ],
    customerValueSystems: [
      {
        type: "paragraph",
        text: "Because servicing is ongoing rather than one-and-done, customer value depends on renewing construction accounts project after project and staying visible to event customers ahead of next year's planning season.",
      },
      {
        type: "list",
        style: "unordered",
        items: [
          "Outreach timed to before a recurring servicing contract lapses",
          "Review generation after events and completed job-site rentals",
          "Referral outreach to contractors and event planners who've had a good experience",
        ],
      },
    ],
    relatedPlatform: {
      name: "Portable Toilet Finder",
      status: "live",
      url: PLATFORM_URLS.portableToiletFinder,
      description:
        "Portable Toilet Finder is a portable toilet rental directory operated by Rental Growth Systems. Listed companies show up in front of customers already comparing rental options by location — a complement to the acquisition systems above, not a replacement for them.",
    },
    relatedResources: [
      "how-to-get-more-portable-toilet-rental-leads",
      "rental-company-speed-to-lead",
    ],
    ctaHeadline: "Build the Systems Behind Your Next Stage of Growth",
    ctaCopy:
      "Let's talk about your portable toilet rental business and how Rental Growth Systems can help you book more jobs.",
  },
  {
    slug: "restroom-trailer-rental",
    name: "Restroom Trailer Rental",
    metaTitle: "Growth Systems for Restroom Trailer Companies",
    metaDescription:
      "Rental Growth Systems helps restroom trailer companies acquire more event customers, present their fleet effectively online, and build lasting referral relationships.",
    heroHeadline: "Growth Systems for Restroom Trailer Companies",
    heroSubheadline:
      "Rental Growth Systems helps restroom trailer companies acquire more event customers, present their fleet online the way high-consideration buyers expect, and build lasting relationships with planners and venues.",
    intro: [
      {
        type: "paragraph",
        text: "Restroom trailer rentals sit at the higher end of the portable sanitation category, where presentation and reliability matter as much as price. Rental Growth Systems helps trailer companies show their fleet the way buyers expect and follow up fast enough to win the booking.",
      },
    ],
    challenges: [
      {
        title: "A Higher-Consideration Purchase",
        description:
          "Restroom trailers cost more and get scrutinized more closely than a standard portable toilet, so customers spend more time comparing photos, amenities, and reviews before reaching out.",
      },
      {
        title: "Visual Presentation Matters More",
        description:
          "Because appearance is part of the pitch, weak photography or an unclear description of a trailer's interior and amenities can cost a booking that a phone call might otherwise have saved.",
      },
      {
        title: "Event-Driven, Calendar-Sensitive Demand",
        description:
          "Weddings and larger private events book trailers well in advance, so this business runs on a booking calendar more than a same-week dispatch model.",
      },
      {
        title: "Delivery Logistics and Site Access",
        description:
          "Trailers are larger and heavier than standard units, so site access, power, and leveling questions come up early in the sales conversation and need clear answers.",
      },
      {
        title: "Limited, Higher-Value Inventory",
        description:
          "With fewer units than standard portable toilets, each trailer booking represents a bigger share of available inventory, which makes fast, well-qualified follow-up more important per lead.",
      },
    ],
    acquisitionSystems: [
      {
        type: "paragraph",
        text: "Because restroom trailers are a higher-consideration purchase, acquisition depends more on strong visual presentation and clear amenity details than on price alone.",
      },
      {
        type: "list",
        style: "unordered",
        items: [
          "High-quality photos and clear descriptions of trailer interiors and amenities",
          "Visibility in the same searches and directories where portable toilet customers are already comparing options",
          "A quote process that captures event date, site access, and guest count upfront",
        ],
      },
    ],
    infrastructureSystems: [
      {
        type: "paragraph",
        text: "With a smaller, higher-value fleet than standard portable toilets, the systems that matter most are the ones that make sure every inquiry is followed up on well, since each trailer represents a larger share of available inventory.",
      },
      {
        type: "list",
        style: "unordered",
        items: [
          "A booking calendar that reflects real trailer availability",
          "Prompt follow-up that addresses delivery, power, and site-access questions early",
          "Clear confirmation and reminder communication ahead of the event date",
        ],
      },
    ],
    customerValueSystems: [
      {
        type: "paragraph",
        text: "Event-driven trailer rentals create natural opportunities for reviews and referrals, since weddings and larger events involve planners, venues, and vendors who can become repeat referral sources.",
      },
      {
        type: "list",
        style: "unordered",
        items: [
          "Review requests timed to right after the event",
          "Simple outreach to planners and venues who've booked before",
          "Tracking which referral sources are actually producing bookings",
        ],
      },
    ],
    relatedPlatform: {
      name: "Portable Toilet Finder",
      status: "live",
      url: PLATFORM_URLS.portableToiletFinder,
      description:
        "Restroom trailer companies can also be listed on Portable Toilet Finder, a portable sanitation rental directory operated by Rental Growth Systems. It puts your fleet in front of customers comparing options by location, alongside the acquisition systems above.",
    },
    relatedResources: ["rental-company-speed-to-lead"],
    ctaHeadline: "Build the Systems Behind Your Next Stage of Growth",
    ctaCopy:
      "Let's talk about your restroom trailer business and how Rental Growth Systems can help you book more events.",
  },
  {
    slug: "event-rental",
    name: "Event Rental",
    metaTitle: "Growth Systems for Event Rental Companies",
    metaDescription:
      "Rental Growth Systems helps event rental companies acquire more customers, streamline bundled quoting, and turn events into repeat referral relationships.",
    heroHeadline: "Growth Systems for Event Rental Companies",
    heroSubheadline:
      "Rental Growth Systems helps event rental companies acquire more customers during the busiest planning windows, streamline bundled quoting, and turn one event into a lasting referral relationship.",
    intro: [
      {
        type: "paragraph",
        text: "Event rental is a referral-and-repeat business built on top of a short, competitive quoting window. Rental Growth Systems helps event rental companies show up earlier in the planning process and respond fast enough to win the comparison-shopping moment.",
      },
    ],
    challenges: [
      {
        title: "Long Planning Cycles, Compressed Decision Windows",
        description:
          "Many event customers research for weeks but request quotes from several vendors in the same short window once they're ready to book.",
      },
      {
        title: "Highly Seasonal, Weather-Sensitive Demand",
        description:
          "Wedding and event season concentrates demand into a few months, and weather-driven last-minute requests add unpredictable spikes on top of that.",
      },
      {
        title: "Bundled, Custom Quotes",
        description:
          "Orders typically combine several product categories — tents, tables, linens, and more — so a generic single-item quote form often undersells what a company can actually provide.",
      },
      {
        title: "Vendor Comparison Is the Norm",
        description:
          "Event planners routinely request quotes from multiple rental companies for the same event, so the speed and clarity of the first response carries outsized weight.",
      },
      {
        title: "Referral-Driven Repeat Business",
        description:
          "Planners, venues, and caterers who have a good experience become repeat referral sources, but only if there's a system for staying in touch after the event.",
      },
    ],
    acquisitionSystems: [
      {
        type: "paragraph",
        text: "Event rental customers typically request quotes from several vendors in a short window once they're ready to book, so acquisition depends on being visible earlier in the planning process and responsive once the comparison shopping starts.",
      },
      {
        type: "list",
        style: "unordered",
        items: [
          "Local search and directory visibility for tents, tables, and other core categories",
          "Quote requests that can handle a bundled, multi-item order rather than a single-product form",
          "Clear presentation of package options for common event types",
        ],
      },
    ],
    infrastructureSystems: [
      {
        type: "paragraph",
        text: "Because orders are often custom and bundled, the infrastructure that matters most is what helps a team assemble an accurate quote quickly instead of manually pricing every combination from scratch.",
      },
      {
        type: "list",
        style: "unordered",
        items: [
          "Streamlined quoting for common package combinations",
          "Fast follow-up during the comparison-shopping window",
          "A shared system for tracking event dates, delivery windows, and setup requirements",
        ],
      },
    ],
    customerValueSystems: [
      {
        type: "paragraph",
        text: "Event rental businesses depend heavily on referrals from planners, venues, and caterers, so the highest-value system is often the one that keeps those relationships active between events.",
      },
      {
        type: "list",
        style: "unordered",
        items: [
          "Post-event review requests",
          "Ongoing outreach to venues and planners who've referred business before",
          "Simple tracking of which referral relationships are worth investing more time in",
        ],
      },
    ],
    relatedPlatform: {
      name: "Event Rental Finder",
      status: "live",
      url: PLATFORM_URLS.eventRentalFinder,
      description:
        "Event Rental Finder is an event rental directory operated by Rental Growth Systems. Listed companies show up in front of customers already comparing rental options for their event — a complement to the acquisition systems above, not a replacement for them.",
    },
    relatedResources: ["rental-company-speed-to-lead"],
    ctaHeadline: "Build the Systems Behind Your Next Stage of Growth",
    ctaCopy:
      "Let's talk about your event rental business and how Rental Growth Systems can help you book more events.",
  },
  {
    slug: "equipment-rental",
    name: "Equipment Rental",
    metaTitle: "Growth Systems for Equipment Rental Companies",
    metaDescription:
      "Rental Growth Systems helps equipment rental companies acquire more contractor and job-site customers and build faster quoting and follow-up systems.",
    heroHeadline: "Growth Systems for Equipment Rental Companies",
    heroSubheadline:
      "Rental Growth Systems helps equipment rental companies acquire more contractor and job-site customers, confirm availability and quotes faster, and build stronger repeat relationships with the accounts that drive the most volume.",
    intro: [
      {
        type: "paragraph",
        text: "Equipment rental runs on repeat contractor relationships and time-sensitive availability questions. Rental Growth Systems helps equipment rental companies stay visible for both specific and general searches, and follow up fast enough to keep job sites — and repeat accounts — on schedule.",
      },
    ],
    challenges: [
      {
        title: "Contractor Relationships Drive Volume",
        description:
          "A large share of demand comes from a relatively small number of repeat contractor and job-site accounts, making account-level relationships more important than one-off transactions.",
      },
      {
        title: "Availability and Scheduling Complexity",
        description:
          "Customers need to know what's available and when, often for specific date ranges tied to a project schedule, which a static price list doesn't answer.",
      },
      {
        title: "Higher-Stakes Quote Accuracy",
        description:
          "Equipment rentals often involve delivery logistics, operator requirements, and damage or insurance terms that need to be communicated clearly during the quote, not discovered after booking.",
      },
      {
        title: "Job-Site Timing Pressure",
        description:
          "Equipment is frequently needed to keep a project on schedule, so slow responses risk losing jobs to whichever company can confirm availability fastest.",
      },
      {
        title: "Broad, Fragmented Search Behavior",
        description:
          "Customers search by specific equipment type and by general category, so visibility depends on covering both specific machine names and broader category terms.",
      },
    ],
    acquisitionSystems: [
      {
        type: "paragraph",
        text: "Equipment rental customers search both by specific machine type and by broader category, and much of the highest-value demand comes from repeat contractor accounts rather than one-off searches.",
      },
      {
        type: "list",
        style: "unordered",
        items: [
          "Visibility for both specific equipment names and general category searches",
          "Clear presentation of availability by date range",
          "A quoting process that accounts for delivery, operator needs, and rental length",
        ],
      },
    ],
    infrastructureSystems: [
      {
        type: "paragraph",
        text: "Because equipment is often needed to keep a job site on schedule, the systems that matter most are the ones that confirm availability and terms quickly and clearly.",
      },
      {
        type: "list",
        style: "unordered",
        items: [
          "Fast confirmation of availability for specific date ranges",
          "Clear communication of delivery logistics and rental terms during the quote stage",
          "A system for tracking which accounts rent recurring vs. one-time equipment",
        ],
      },
    ],
    customerValueSystems: [
      {
        type: "paragraph",
        text: "With a relatively concentrated base of repeat contractor and job-site accounts, the biggest opportunity is usually deepening those existing relationships rather than only pursuing new customers.",
      },
      {
        type: "list",
        style: "unordered",
        items: [
          "Outreach timed to typical project cycles for repeat accounts",
          "Simple tracking of account history and equipment preferences",
          "Review and referral requests from contractors who rent regularly",
        ],
      },
    ],
    relatedPlatform: {
      name: "Construction Rental Finder",
      status: "live",
      url: PLATFORM_URLS.constructionRentalFinder,
      description:
        "Construction Rental Finder is an equipment and construction rental directory operated by Rental Growth Systems. Listed companies show up in front of customers who are actively comparing construction rental options in their area — a complement to the acquisition systems above, not a replacement for them.",
    },
    relatedResources: ["rental-company-speed-to-lead"],
    ctaHeadline: "Build the Systems Behind Your Next Stage of Growth",
    ctaCopy:
      "Let's talk about your equipment rental business and how Rental Growth Systems can help you book more jobs.",
  },
];

export const industries: Industry[] = INDUSTRIES;

export function getIndustryBySlug(slug: string): Industry | undefined {
  return industries.find((industry) => industry.slug === slug);
}

export function getAllIndustrySlugs(): string[] {
  return industries.map((industry) => industry.slug);
}

export function getRelatedResourcesForIndustry(industry: Industry): Resource[] {
  return industry.relatedResources
    .map((slug) => getResourceBySlug(slug))
    .filter((resource): resource is Resource => Boolean(resource));
}
