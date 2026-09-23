// Centralized solution-page content for /solutions and /solutions/[slug].
//
// Follows the same pattern as content/industries.ts and content/resources.ts:
// a page is a plain data object appended to SOLUTIONS below. Reuses
// ContentBlock (and its "[label](url)" inline-link syntax) from
// content/resources.ts, and cross-references industries/resources by slug
// rather than duplicating their data.

import { PLATFORM_URLS } from "../app/lib/links";
import { getIndustryBySlug, type Industry } from "./industries";
import { getResourceBySlug, type ContentBlock, type Resource } from "./resources";

export type Capability = {
  title: string;
  /** May include one or more "[label](url)" inline links, same as ContentBlock text. */
  description: string;
};

export type SolutionUseCase = {
  /** Slug into content/industries.ts. */
  industrySlug: string;
  scenario: string;
};

export type SolutionFaqItem = {
  question: string;
  answer: string;
};

export type Solution = {
  slug: string;
  name: string;
  metaTitle: string;
  metaDescription: string;
  heroHeadline: string;
  heroSubheadline: string;
  /** Answer-first opening, rendered right under the hero. */
  intro: ContentBlock[];
  /** Why rental companies struggle here — kept specific to the industry, not generic marketing copy. */
  problems: ContentBlock[];
  /** What RGS builds — a handful of named systems, not a feature dump. */
  capabilities: Capability[];
  /** Short outcome phrases, not guarantees. */
  outcomes: string[];
  useCases: SolutionUseCase[];
  /** Industry slugs, resolved via getRelatedIndustriesForSolution(). */
  relatedIndustries: string[];
  /** Resource slugs, resolved via getRelatedResourcesForSolution(). */
  relatedResources: string[];
  /** Only genuinely likely objections/questions — omit rather than pad. */
  faq?: SolutionFaqItem[];
  ctaHeadline: string;
  ctaCopy: string;
};

const link = (label: string, href: string) => `[${label}](${href})`;

const ALL_INDUSTRY_SLUGS = [
  "dumpster-rental",
  "portable-toilet-rental",
  "restroom-trailer-rental",
  "event-rental",
  "equipment-rental",
];

const SOLUTIONS: Solution[] = [
  {
    slug: "customer-acquisition",
    name: "Customer Acquisition",
    metaTitle: "Customer Acquisition Systems for Rental Companies",
    metaDescription:
      "Rental Growth Systems helps rental companies get discovered, capture more demand, and convert local search activity into real rental opportunities.",
    heroHeadline: "Customer Acquisition Systems for Rental Companies",
    heroSubheadline:
      "Rental Growth Systems helps rental companies get discovered, capture more demand, and convert more local search activity into real rental opportunities.",
    intro: [
      {
        type: "paragraph",
        text: "Customer acquisition systems are the websites, local search presence, directory listings, and lead-capture tools that help a rental company get discovered, capture demand, and turn local search activity into qualified rental opportunities.",
      },
      {
        type: "paragraph",
        text: "Most rental companies don't have a demand problem industry-wide — they have a visibility problem in their specific service area. Customer acquisition systems are what put a rental company in front of the people already searching for what it rents, and make it easy for those people to become a lead instead of clicking through to a competitor.",
      },
    ],
    problems: [
      {
        type: "paragraph",
        text: "Rental demand is almost always hyper-local and highly comparative. A customer searching for a dumpster, a portable toilet, or event equipment usually isn't loyal to a brand — they're choosing from whichever handful of companies show up in that moment, in that city, for that category.",
      },
      {
        type: "paragraph",
        text: "That creates two common failure points. The first is simply not showing up: an incomplete Google Business Profile, a website that doesn't rank for the terms customers actually search, or no presence on the directories customers already compare options through. The second is showing up but losing the lead anyway — a site with no clear way to request a quote, pricing hidden behind a phone call, or a contact form that goes nowhere fast.",
      },
      {
        type: "paragraph",
        text: "Rental companies that rely on a single channel — one directory, one ad account, one referral source — are also exposed every time that channel gets more competitive or more expensive.",
      },
    ],
    capabilities: [
      {
        title: "Websites and Landing Pages Built to Convert",
        description:
          "A site structured around how customers actually search and decide — clear service areas, a visible path to pricing or a quote, and pages built for the specific categories you rent, not a generic template.",
      },
      {
        title: "Local Search and SEO",
        description:
          "Positioning your business to show up for the searches that matter in your service area, from Google Business Profile optimization to content built around the categories and cities you serve.",
      },
      {
        title: "Directory Exposure on RGS-Operated Platforms",
        description: `Listings on the category-specific rental directories Rental Growth Systems operates — ${link("Rolloff Dumpster Finder", PLATFORM_URLS.rolloffDumpsterFinder)}, ${link("Portable Toilet Finder", PLATFORM_URLS.portableToiletFinder)}, and ${link("Event Rental Finder", PLATFORM_URLS.eventRentalFinder)} — put your business in front of customers who are already comparing rental options in your category.`,
      },
      {
        title: "Lead Capture That Doesn't Leak",
        description:
          "Quote forms, click-to-call, and follow-up paths designed so a visitor who's ready to rent has an obvious next step, instead of leaving to compare a competitor's site instead.",
      },
      {
        title: "Paid Demand Generation, Where It Makes Sense",
        description:
          "For categories or service areas where organic visibility alone isn't enough, targeted paid campaigns can fill the gap — used as a complement to owned search presence, not a replacement for it.",
      },
    ],
    outcomes: [
      "Stronger local visibility in the searches your customers actually run",
      "More qualified inquiries, not just more traffic",
      "Better lead capture from the visitors you already get",
      "Reduced dependence on any single acquisition source",
    ],
    useCases: [
      {
        industrySlug: "dumpster-rental",
        scenario:
          "A dumpster rental company that used to rely entirely on repeat contractor word-of-mouth adds local search visibility and a directory listing, so new customers searching for a hauler in their city can find and quote them directly.",
      },
      {
        industrySlug: "portable-toilet-rental",
        scenario:
          "A portable toilet company separates its event and construction messaging on one site, so both types of customers find the specific information that matters to them instead of a one-size-fits-all pitch.",
      },
      {
        industrySlug: "restroom-trailer-rental",
        scenario:
          "A restroom trailer company invests in stronger photography and a clearer quote path, since buyers in this category compare presentation and detail more closely before ever picking up the phone.",
      },
      {
        industrySlug: "event-rental",
        scenario:
          "An event rental company shows up earlier in a planner's research process through local search and directory presence, instead of only being found once a planner is already deep into requesting quotes.",
      },
      {
        industrySlug: "equipment-rental",
        scenario:
          "An equipment rental company makes sure its site covers both specific machine searches and broader category searches, so it shows up whether a contractor knows exactly what they need or is still comparing options.",
      },
    ],
    relatedIndustries: ALL_INDUSTRY_SLUGS,
    relatedResources: [
      "how-to-get-more-dumpster-rental-leads",
      "how-to-get-more-portable-toilet-rental-leads",
    ],
    faq: [
      {
        question: "How long does it take to see results from customer acquisition systems?",
        answer:
          "It depends on the channel. Directory listings and paid demand generation can produce inquiries within days, while local search and SEO improvements typically build over months. Most rental companies run both at once for that reason — faster channels for near-term leads, organic visibility for compounding growth.",
      },
      {
        question: "Do I need a big marketing budget to get started?",
        answer:
          "No. A complete Google Business Profile, a clear website, and a directory listing don't require significant ad spend. Paid demand generation is one capability among several, used where it makes sense rather than as the default starting point.",
      },
      {
        question: "Will this replace my existing website?",
        answer:
          "Not necessarily. Depending on what you already have, this can mean rebuilding your site, improving specific pages, or adding the pieces that are missing — like a clear quote path or directory presence — without starting over.",
      },
    ],
    ctaHeadline: "Build the Systems Behind Your Next Stage of Growth",
    ctaCopy:
      "Let's talk about how Rental Growth Systems can help you get discovered by more of the right customers.",
  },
  {
    slug: "digital-infrastructure",
    name: "Digital Infrastructure",
    metaTitle: "Digital Infrastructure Systems for Rental Companies",
    metaDescription:
      "Rental Growth Systems helps rental companies build the systems behind the business, so inquiries, quotes, bookings, and follow-up move faster and more reliably.",
    heroHeadline: "Digital Infrastructure Systems for Rental Companies",
    heroSubheadline:
      "Rental Growth Systems helps rental companies build the systems behind the business so inquiries, quotes, bookings, follow-up, and customer communication move more efficiently.",
    intro: [
      {
        type: "paragraph",
        text: "Digital infrastructure systems are the digital processes and tools — CRM, quoting, booking, and follow-up — that help rental companies manage inquiries, quotes, bookings, and customer communication without relying on manual coordination.",
      },
      {
        type: "paragraph",
        text: "Winning the lead is only half the job. What happens in the minutes and hours after an inquiry comes in — how fast someone responds, how clearly a quote gets assembled, whether a follow-up actually happens — often decides whether that lead becomes a booking. Digital infrastructure is the set of systems that make that process reliable instead of dependent on whoever happens to be free.",
      },
    ],
    problems: [
      {
        type: "paragraph",
        text: "Most rental companies didn't set out to build software — they built a service business, and the tools accumulated around it. A phone number here, a shared inbox there, pricing that lives in someone's head or an old spreadsheet. That works at a small scale, but it breaks down exactly when volume increases, which is usually when it matters most.",
      },
      {
        type: "paragraph",
        text: "The common failure points are consistent across categories: leads that sit unanswered because one person is out on a delivery, quotes that take too long to assemble because pricing isn't standardized anywhere, and follow-up that depends entirely on someone remembering to do it. None of these are visibility problems — they're operational ones, and they cost bookings just as directly as a weak website does.",
      },
    ],
    capabilities: [
      {
        title: "CRM and Pipeline Visibility",
        description:
          "A single place where every inquiry is logged, assigned, and tracked from first contact through booking, so leads don't live in a shared inbox where it's unclear who's responsible for replying.",
      },
      {
        title: "Quote Request and Booking Flows",
        description:
          "Structured forms and, where pricing allows it, instant quote tools built around how your rentals are actually priced — by size, unit type, or rental length — instead of a generic \"contact us\" page.",
      },
      {
        title: "SMS and Email Follow-Up",
        description:
          "Automated acknowledgment the moment a request comes in, plus a follow-up sequence that catches the leads who don't respond to the first message, without requiring someone to manually track who's been contacted.",
      },
      {
        title: "AI Chat and Voice Reception",
        description:
          "AI-assisted chat and phone coverage that can answer common questions and capture lead details after hours or when your team is already on another call, handing off to a person for anything that needs one.",
      },
      {
        title: "Automation Across the Workflow",
        description:
          "Connecting the pieces — CRM, quoting, follow-up, and scheduling — so information entered once shows up everywhere it's needed, instead of being re-typed across separate tools.",
      },
    ],
    outcomes: [
      "Faster response to new inquiries",
      "Fewer missed follow-ups",
      "Clearer pipeline visibility",
      "Less manual coordination across tools and team members",
    ],
    useCases: [
      {
        industrySlug: "dumpster-rental",
        scenario:
          "A dumpster rental company adds instant quote confirmation and call overflow coverage, so inquiries that come in while a driver is mid-delivery don't go straight to voicemail.",
      },
      {
        industrySlug: "portable-toilet-rental",
        scenario:
          "A portable toilet company uses a CRM to track servicing schedules alongside new quote requests, so recurring construction accounts and one-time event bookings aren't managed out of the same messy inbox.",
      },
      {
        industrySlug: "restroom-trailer-rental",
        scenario:
          "A restroom trailer company builds a booking calendar that reflects real trailer availability, so a lead isn't quoted a date that's already reserved.",
      },
      {
        industrySlug: "event-rental",
        scenario:
          "An event rental company standardizes quoting for common package combinations, so assembling a bundled tent-and-tables quote doesn't require manually re-pricing everything from scratch each time.",
      },
      {
        industrySlug: "equipment-rental",
        scenario:
          "An equipment rental company connects availability tracking to its quoting process, so a contractor asking about a specific date range gets a fast, accurate answer instead of a callback the next day.",
      },
    ],
    relatedIndustries: ALL_INDUSTRY_SLUGS,
    relatedResources: ["rental-company-speed-to-lead"],
    faq: [
      {
        question: "Does this replace my staff or dispatcher?",
        answer:
          "No. These systems are built to remove the delays that come from manual coordination — like a form sitting unanswered or a quote taking too long to assemble — not to replace the people handling customers. AI chat and voice coverage, for example, hands off to a person for anything that needs one.",
      },
      {
        question: "Do I need to replace my whole tech stack at once?",
        answer:
          "No. Most rental companies start with the specific gap costing them the most leads — often after-hours coverage or a single overloaded phone line — and add systems from there, rather than replacing everything at once.",
      },
      {
        question: "Can this work if I don't have a dedicated office staff?",
        answer:
          "Yes. Automated acknowledgment, online quoting, and AI-assisted chat or voice coverage are specifically useful for teams without a full-time person available to answer every inquiry as it comes in.",
      },
    ],
    ctaHeadline: "Build the Systems Behind Your Next Stage of Growth",
    ctaCopy:
      "Let's talk about how Rental Growth Systems can help your team respond faster and coordinate less manually.",
  },
  {
    slug: "customer-value",
    name: "Customer Value",
    metaTitle: "Customer Value Systems for Rental Companies",
    metaDescription:
      "Rental Growth Systems helps rental companies generate more revenue from customers they've already acquired through retention, reviews, referrals, and reactivation.",
    heroHeadline: "Customer Value Systems for Rental Companies",
    heroSubheadline:
      "Rental Growth Systems helps rental companies generate more revenue from customers they have already acquired through retention, reviews, referrals, and reactivation.",
    intro: [
      {
        type: "paragraph",
        text: "Customer value systems are the retention, review, referral, and reactivation tools that help rental companies increase the value of customer relationships they've already earned.",
      },
      {
        type: "paragraph",
        text: "Acquiring a customer is usually the most expensive part of growth — which makes what happens after the first rental one of the highest-leverage places to focus. Customer value systems are built to get more out of the relationships a rental company already has, instead of only chasing new ones.",
      },
    ],
    problems: [
      {
        type: "paragraph",
        text: "Rental businesses are full of natural repeat and referral opportunities that go untapped simply because there's no system for capturing them. A contractor who rents a dumpster once is a strong candidate for the next job site, but only if someone follows up before he calls a competitor out of habit. A happy event customer will often leave a review or refer a friend, but usually only if they're asked at the right moment.",
      },
      {
        type: "paragraph",
        text: "Without a system, this work falls to whoever remembers to do it, which in practice means it mostly doesn't happen. Past customers go quiet, reviews trickle in inconsistently, and referral relationships with contractors, venues, or planners fade instead of compounding.",
      },
    ],
    capabilities: [
      {
        title: "Review Generation",
        description:
          "Timed requests sent while the experience is still fresh — right after a pickup, a completed event, or a finished job — instead of leaving reviews to happen sporadically or not at all.",
      },
      {
        title: "Referral Systems",
        description:
          "A simple, repeatable way to ask satisfied customers, contractors, and partners for referrals, and to track which relationships are actually producing new business.",
      },
      {
        title: "Reactivation Campaigns",
        description:
          "Outreach to past customers timed around likely reorder cycles — seasonal cleanup, recurring servicing, or a new project — so a rental company stays top of mind instead of relying on the customer to remember to call back.",
      },
      {
        title: "Retention and Lifetime Value Tracking",
        description:
          "Simple tracking of repeat customers so they're treated like the relationship they are, not re-processed as a new lead every time they reach out.",
      },
      {
        title: "A Broader Rental Ecosystem (In Development)",
        description:
          "Rental Growth Systems is building toward a broader rental ecosystem, including a future consumer-facing rental app and cross-category referral opportunities between platforms like Rolloff Dumpster Finder, Portable Toilet Finder, and Event Rental Finder. This infrastructure is not live today — current customer value systems are the retention, review, referral, and reactivation work described above.",
      },
    ],
    outcomes: [
      "More repeat rental opportunities",
      "More reviews from happy customers",
      "More referrals from past customers and partners",
      "Better reactivation of customers who haven't rented in a while",
    ],
    useCases: [
      {
        industrySlug: "dumpster-rental",
        scenario:
          "A dumpster rental company sets up a simple check-in message after each job, timed to when a contractor is likely to need another container, instead of waiting for them to remember to call.",
      },
      {
        industrySlug: "portable-toilet-rental",
        scenario:
          "A portable toilet company reaches out to construction accounts before a recurring servicing contract lapses, and asks event customers for a review right after pickup while the experience is fresh.",
      },
      {
        industrySlug: "restroom-trailer-rental",
        scenario:
          "A restroom trailer company follows up with planners and venues after an event, since those relationships tend to produce repeat referrals when they're actively maintained.",
      },
      {
        industrySlug: "event-rental",
        scenario:
          "An event rental company tracks which venues and planners have referred business before, and keeps that relationship active with occasional outreach between events.",
      },
      {
        industrySlug: "equipment-rental",
        scenario:
          "An equipment rental company tracks which contractor accounts rent recurring vs. one-time equipment, and times outreach to typical project cycles for its best repeat customers.",
      },
    ],
    relatedIndustries: ALL_INDUSTRY_SLUGS,
    relatedResources: [],
    faq: [
      {
        question: "Is the rental app or cross-category referral marketplace live yet?",
        answer:
          "No. Rental Growth Systems is building toward that broader ecosystem, but it isn't live today. The customer value systems available now are the retention, review, referral, and reactivation work described above.",
      },
      {
        question: "How is this different from just asking customers for reviews myself?",
        answer:
          "It's the same underlying idea, made consistent — timed requests sent right after the experience, tracked so the same customer isn't asked twice, instead of depending on someone remembering to ask on a case-by-case basis.",
      },
      {
        question: "Does this work if I don't have many repeat customers yet?",
        answer:
          "Review and referral systems still apply to one-time customers. Reactivation and retention tracking become more valuable as your repeat customer base grows, so this tends to compound over time rather than requiring a large existing base to start.",
      },
    ],
    ctaHeadline: "Build the Systems Behind Your Next Stage of Growth",
    ctaCopy:
      "Let's talk about how Rental Growth Systems can help you get more value out of the customers you've already earned.",
  },
];

export const solutions: Solution[] = SOLUTIONS;

export function getSolutionBySlug(slug: string): Solution | undefined {
  return solutions.find((solution) => solution.slug === slug);
}

export function getAllSolutionSlugs(): string[] {
  return solutions.map((solution) => solution.slug);
}

export function getRelatedResourcesForSolution(solution: Solution): Resource[] {
  return solution.relatedResources
    .map((slug) => getResourceBySlug(slug))
    .filter((resource): resource is Resource => Boolean(resource));
}

export function getRelatedIndustriesForSolution(solution: Solution): Industry[] {
  return solution.relatedIndustries
    .map((slug) => getIndustryBySlug(slug))
    .filter((industry): industry is Industry => Boolean(industry));
}
