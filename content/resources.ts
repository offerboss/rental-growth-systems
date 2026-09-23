// Centralized resource/article content for /resources and /resources/[slug].
//
// Article bodies are structured data (paragraphs, subheadings, lists) rather
// than JSX or raw HTML, so a new article is a plain object appended to
// RESOURCE_INPUTS below — no page-component code required. Rendering lives in
// app/components/resources/ContentBlocks.tsx.
//
// A paragraph or list item may contain one inline link using
// "[label](/relative-or-https://absolute-url)" — ContentBlocks turns that
// into a real <a>, external links opening in a new tab automatically.

import { PLATFORM_URLS } from "../app/lib/links";

export type ResourceCategory =
  | "Customer Acquisition"
  | "Digital Infrastructure"
  | "Customer Value";

export const RESOURCE_CATEGORIES: ResourceCategory[] = [
  "Customer Acquisition",
  "Digital Infrastructure",
  "Customer Value",
];

export type ContentBlock =
  | { type: "paragraph"; text: string }
  | { type: "subheading"; text: string }
  | { type: "list"; style: "unordered" | "ordered"; items: string[] };

export type ResourceSection = {
  heading: string;
  blocks: ContentBlock[];
};

export type ResourceFaqItem = {
  question: string;
  answer: string;
};

export type ResourceInput = {
  slug: string;
  /** Page H1 / display title. */
  title: string;
  /** Overrides `title` for <title> and social sharing; falls back to `title`. */
  metaTitle?: string;
  metaDescription: string;
  /** Short summary used on resource cards. */
  excerpt: string;
  category: ResourceCategory;
  /** ISO date (YYYY-MM-DD). */
  publishedDate: string;
  /** ISO date (YYYY-MM-DD); only shown when different from publishedDate. */
  updatedDate?: string;
  author: string;
  /** Surfaces the resource in the hub's Featured section. */
  featured?: boolean;
  /** Slugs of other resources to cross-link. */
  relatedResources?: string[];
  /** Slug of a future /industries/[slug] page; omit until that route exists. */
  relatedIndustry?: string;
  /** Answer-first opening — no heading, rendered right under the title/meta row. */
  intro: ContentBlock[];
  sections: ResourceSection[];
  faq?: ResourceFaqItem[];
};

export type Resource = ResourceInput & { readingTime: string };

// Small helper for building the "[label](url)" inline-link syntax above.
const link = (label: string, href: string) => `[${label}](${href})`;

const RESOURCE_INPUTS: ResourceInput[] = [
  {
    slug: "how-to-get-more-dumpster-rental-leads",
    title: "How to Get More Dumpster Rental Leads",
    metaTitle: "How to Get More Dumpster Rental Leads: A Practical Guide",
    metaDescription:
      "Practical ways rental companies can generate more dumpster rental leads through local search, directory listings, fast quoting, and follow-up systems.",
    excerpt:
      "Local search visibility, directory listings, and fast follow-up are what turn dumpster rental searches into booked jobs.",
    category: "Customer Acquisition",
    publishedDate: "2026-09-22",
    author: "Rental Growth Systems Team",
    featured: true,
    relatedResources: [
      "rental-company-speed-to-lead",
      "how-to-get-more-portable-toilet-rental-leads",
    ],
    relatedIndustry: "dumpster-rental",
    intro: [
      {
        type: "paragraph",
        text: "More dumpster rental leads come down to three things: showing up when someone searches for a hauler in your area, making it easy for that person to get a price and book, and following up before a competitor does. Most rental companies are already missing at least one of these.",
      },
      {
        type: "paragraph",
        text: "This guide walks through the specific channels and systems that move the needle for roll-off dumpster rental companies, in roughly the order they're worth setting up.",
      },
      {
        type: "paragraph",
        text: `For the full picture of how acquisition, infrastructure, and customer value systems fit together for this industry, see our ${link("Dumpster Rental Growth Systems", "/industries/dumpster-rental")} page.`,
      },
    ],
    sections: [
      {
        heading: "Show Up in Local Search Results",
        blocks: [
          {
            type: "paragraph",
            text: 'Dumpster rental is a hyper-local search category. Most customers search for something like "dumpster rental near me" or "[city] roll off dumpster" and choose from whichever companies show up in the map results and the list underneath them.',
          },
          { type: "subheading", text: "Claim and complete your Google Business Profile" },
          {
            type: "paragraph",
            text: "A complete, accurate Google Business Profile is the single highest-leverage asset a dumpster rental company can maintain. That means an accurate service area, current hours, the right phone number, the dumpster sizes you offer, and photos of your actual bins and trucks rather than generic stock images.",
          },
          { type: "subheading", text: "Make reviews part of the pickup process" },
          {
            type: "paragraph",
            text: "Review count and recency both influence how a listing ranks locally and how much a new customer trusts it. Building a habit of asking for a review right after the dumpster is picked up, while the job is still fresh in the customer's mind, keeps a profile active instead of stale.",
          },
        ],
      },
      {
        heading: "Get Listed on Dumpster Rental Directories",
        blocks: [
          {
            type: "paragraph",
            text: `In addition to Google, dedicated directories put your company in front of customers who are already comparing dumpster rental options by size, price, and availability. ${link("Rolloff Dumpster Finder", PLATFORM_URLS.rolloffDumpsterFinder)} is one example — customers search by location and dumpster size and see participating companies side by side.`,
          },
          {
            type: "paragraph",
            text: "Directory listings are worth prioritizing because the person searching has already decided they need a dumpster; the only question left is which company they call. That's a warmer lead than most other marketing channels produce.",
          },
          {
            type: "paragraph",
            text: `Directory listings are one piece of a broader ${link("customer acquisition system", "/solutions/customer-acquisition")} — search visibility, lead capture, and directory presence working together rather than in isolation.`,
          },
        ],
      },
      {
        heading: "Make It Easy to Request a Quote",
        blocks: [
          {
            type: "paragraph",
            text: 'Once someone finds you, the path to a quote needs to be short. A simple form asking for address, dumpster size, and rental length — with a phone number visible on every page — outperforms a "contact us for pricing" page that forces a phone call during business hours.',
          },
          { type: "subheading", text: "Publish your sizes and general pricing approach" },
          {
            type: "paragraph",
            text: "Customers comparing several companies often skip the ones that hide pricing entirely. You don't need to publish an exact rate for every situation, but listing your dumpster sizes (10, 15, 20, 30 yard, and so on) with a general price range or a simple online quote tool reduces the number of people who bounce to a competitor instead of calling.",
          },
        ],
      },
      {
        heading: "Follow Up Before Someone Else Does",
        blocks: [
          {
            type: "paragraph",
            text: `Dumpster rental is commonly a multi-quote category — a customer requests pricing from two or three companies at the same time and books with whichever one responds first with a clear answer. How fast and how well you follow up matters as much as how many leads you generate in the first place. See ${link("how rental companies can improve speed-to-lead", "/resources/rental-company-speed-to-lead")} for the systems that shorten response time.`,
          },
        ],
      },
      {
        heading: "Turn Every Rental Into the Next One",
        blocks: [
          {
            type: "paragraph",
            text: "Contractors, property managers, and remodelers who rent a dumpster once are likely to need another one. A simple way to capture that repeat demand is to log every customer and follow up — a check-in message after the job wraps, a reminder before a recurring cleanout, or seasonal outreach ahead of spring and fall cleanup season.",
          },
          {
            type: "paragraph",
            text: "Asking satisfied repeat customers for referrals costs nothing and tends to produce some of the highest-quality leads, since a contractor recommending you to another contractor is a much stronger endorsement than an online review.",
          },
        ],
      },
    ],
    faq: [
      {
        question: "Do I need a website to get more dumpster rental leads?",
        answer:
          "Yes. Even a simple one matters, since it's what your Google Business Profile and directory listings link to, and it's where a customer verifies pricing, service area, and legitimacy before calling. A page with no clear phone number or quote request option costs you leads that make it that far.",
      },
      {
        question: "How long does it take to see results from local SEO?",
        answer:
          "Local search rankings typically build over months rather than days, especially in competitive markets. Directory listings and paid channels tend to produce faster, more immediate results, which is why most rental companies run both at the same time — directories for near-term leads, local SEO for compounding growth.",
      },
      {
        question: "What dumpster sizes should I list online?",
        answer:
          "List whatever you actually rent, described the way customers search for it — most people search by yard size (10, 15, 20, 30) rather than by use case, so make sure those numbers appear clearly on your site and directory listings.",
      },
    ],
  },
  {
    slug: "how-to-get-more-portable-toilet-rental-leads",
    title: "How to Get More Portable Toilet Rental Leads",
    metaTitle: "How to Get More Portable Toilet Rental Leads: A Practical Guide",
    metaDescription:
      "How portable toilet rental companies can generate more leads from event planners and construction sites through local search, directories, and fast follow-up.",
    excerpt:
      "Event planners and construction site managers search differently — here's how to show up for both and turn inquiries into bookings.",
    category: "Customer Acquisition",
    publishedDate: "2026-09-22",
    author: "Rental Growth Systems Team",
    relatedResources: [
      "rental-company-speed-to-lead",
      "how-to-get-more-dumpster-rental-leads",
    ],
    relatedIndustry: "portable-toilet-rental",
    intro: [
      {
        type: "paragraph",
        text: "Portable toilet rental leads come from two very different kinds of customers — event planners booking for a wedding or festival, and construction site managers who need units for the length of a job. Getting more leads means showing up for both searches and making it obvious you can handle their specific situation.",
      },
      {
        type: "paragraph",
        text: "The channels are similar to other rental categories — local search, directories, and fast follow-up — but the details of what you show customers need to change depending on who's asking.",
      },
      {
        type: "paragraph",
        text: `For the full picture of how acquisition, infrastructure, and customer value systems fit together for this industry, see our ${link("Portable Toilet Rental Growth Systems", "/industries/portable-toilet-rental")} page.`,
      },
    ],
    sections: [
      {
        heading: 'Show Up When People Search for "Porta Potty Rental Near Me"',
        blocks: [
          {
            type: "paragraph",
            text: "As with any local rental category, a complete Google Business Profile is foundational: accurate service area, current hours, photos of your actual units (standard, deluxe, and ADA-compliant if you offer them), and a phone number that's answered during business hours.",
          },
          { type: "subheading", text: "Use the terms customers actually search" },
          {
            type: "paragraph",
            text: 'People search "porta potty rental," "portable toilet rental," and "restroom trailer rental" somewhat interchangeably depending on the event. Make sure your website and profile use all of these terms naturally rather than picking just one, so you show up regardless of which phrase someone types.',
          },
        ],
      },
      {
        heading: "Get Listed on Portable Toilet Directories",
        blocks: [
          {
            type: "paragraph",
            text: `${link("Portable Toilet Finder", PLATFORM_URLS.portableToiletFinder)} is a directory built specifically for this category — customers search by location and see participating rental companies rather than a generic list of contractors. A directory listing puts you in front of people who have already decided they need a unit and are choosing between providers.`,
          },
          {
            type: "paragraph",
            text: `Directory listings are one piece of a broader ${link("customer acquisition system", "/solutions/customer-acquisition")} — showing up in local search, capturing the lead, and following up quickly all work together.`,
          },
        ],
      },
      {
        heading: "Separate Your Event and Construction Offers",
        blocks: [
          {
            type: "paragraph",
            text: "Event planners and construction site managers are shopping for different things, even though they're renting the same basic product.",
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Event customers care about cleanliness, appearance, and delivery timing around a single-day or weekend event — they're often comparing standard units against deluxe or restroom trailer options.",
              "Construction customers care about weekly servicing, job-site delivery logistics, and reliability over a longer rental period, often measured in months.",
            ],
          },
          {
            type: "paragraph",
            text: "Structuring your website with separate sections — or at least separate language — for events and construction sites makes it easier for each type of customer to find what they need instead of wading through information meant for the other.",
          },
        ],
      },
      {
        heading: "Quote Fast and Confirm the Details",
        blocks: [
          {
            type: "paragraph",
            text: `Both event planners and construction managers frequently request quotes from more than one company. Whoever responds first with a clear price and delivery window has a real advantage. Our guide on ${link("speed-to-lead for rental companies", "/resources/rental-company-speed-to-lead")} covers the systems that shorten response time without requiring a full-time dispatcher.`,
          },
        ],
      },
      {
        heading: "Build Repeat Business with Contractors and Event Planners",
        blocks: [
          {
            type: "paragraph",
            text: "Construction site rentals are naturally recurring — a contractor who used you for one job site is a strong candidate for the next one. Keeping a simple record of past customers and their typical rental patterns makes it easy to reach out before they even start shopping around again.",
          },
          {
            type: "paragraph",
            text: "For event customers, timing outreach around predictable local demand — wedding season, county fairs, graduation season — keeps you visible right when planning typically starts.",
          },
        ],
      },
      {
        heading: "Answer the Questions Customers Don't Think to Ask",
        blocks: [
          {
            type: "paragraph",
            text: "Larger public events often come with venue or permit requirements around restroom placement and servicing frequency that a first-time event planner may not know to ask about. Offering that guidance upfront — how many units a given guest count typically needs, or what a venue usually requires — positions your company as the expert handling the details, not just a vendor dropping off equipment.",
          },
          {
            type: "paragraph",
            text: "The same applies on the construction side: being clear about who's responsible for servicing frequency, what happens if a site changes access points mid-project, and how billing works for extensions saves back-and-forth later and reads as more professional in the quote stage.",
          },
        ],
      },
    ],
    faq: [
      {
        question: "Do event and construction customers need different pricing pages?",
        answer:
          "Not necessarily different pages, but different framing. Event customers respond to appearance and delivery timing; construction customers respond to servicing schedules and length-of-rental pricing. Making both clear on the same page works, as long as neither buyer has to dig for the information that matters to them.",
      },
      {
        question: "How far in advance do people book portable toilet rentals?",
        answer:
          "It varies widely by use case — construction sites often book with only a few days' notice as a project starts, while larger events may book weeks or months ahead. Being responsive to short-notice requests matters just as much as being visible earlier in the planning process for events.",
      },
      {
        question: "Should I list ADA-compliant or deluxe units separately?",
        answer:
          "Yes, if you offer them. Customers who specifically need an ADA-compliant unit or a nicer option for a wedding are often filtering directories and search results for exactly that, so making it visible helps you get found for those higher-intent searches.",
      },
    ],
  },
  {
    slug: "rental-company-speed-to-lead",
    title: "How Rental Companies Can Improve Speed-to-Lead",
    metaTitle: "Speed-to-Lead for Rental Companies: Why Response Time Wins Jobs",
    metaDescription:
      "Why response time matters so much for dumpster, portable toilet, and event rental companies, and the systems that help you follow up faster.",
    excerpt:
      "In commoditized rental categories, the company that responds first often wins the job. Here's how to shorten your response time.",
    category: "Digital Infrastructure",
    publishedDate: "2026-09-22",
    author: "Rental Growth Systems Team",
    featured: true,
    relatedResources: [
      "how-to-get-more-dumpster-rental-leads",
      "how-to-get-more-portable-toilet-rental-leads",
    ],
    intro: [
      {
        type: "paragraph",
        text: "Speed-to-lead is how quickly a business responds to a new inquiry after it comes in. For rental companies — especially dumpster, portable toilet, and event rental businesses — it matters more than most other factors you can control, because customers frequently request quotes from several companies at once and go with whichever one gets back to them first with a clear answer.",
      },
      {
        type: "paragraph",
        text: "Improving speed-to-lead isn't about hiring a full-time dispatcher. It's about closing the specific gaps where leads sit unanswered, and using a few systems to shorten the time between a form being submitted and someone from your team actually responding.",
      },
    ],
    sections: [
      {
        heading: "What Speed-to-Lead Actually Means",
        blocks: [
          {
            type: "paragraph",
            text: "Speed-to-lead is measured from the moment a customer submits a form, sends a text, or leaves a voicemail, to the moment they get a real response from your business — not an automated confirmation, but an actual answer to their question or a quote.",
          },
          {
            type: "paragraph",
            text: "In categories like dumpster and portable toilet rental, where the product itself is fairly standardized, response time becomes one of the clearest ways a customer decides between otherwise similar companies.",
          },
        ],
      },
      {
        heading: "Where Rental Companies Lose Time",
        blocks: [
          {
            type: "paragraph",
            text: "Slow response times are rarely one big problem — they're usually a handful of small gaps that add up.",
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Leads that come in after hours and sit until the next business day",
              "A single phone line or inbox that one person checks between other tasks",
              "Quote requests that require manually looking up pricing or availability before replying",
              "Voicemails that get checked in batches instead of in real time",
            ],
          },
        ],
      },
      {
        heading: "Systems That Shorten Response Time",
        blocks: [
          {
            type: "paragraph",
            text: "A few systems, used together, close most of the gap without adding headcount.",
          },
          { type: "subheading", text: "Instant acknowledgment" },
          {
            type: "paragraph",
            text: "An automated text or email confirming that a quote request was received — sent the moment the form is submitted — buys time and reassures the customer while a real response is being prepared.",
          },
          { type: "subheading", text: "Online pricing or quote tools" },
          {
            type: "paragraph",
            text: "When pricing follows a predictable structure (by dumpster size, unit type, or rental length), an online quote tool can give a customer an instant estimate without waiting on a callback at all.",
          },
          { type: "subheading", text: "Call routing and overflow coverage" },
          {
            type: "paragraph",
            text: "Routing calls to more than one person, or to an answering service during busy periods, prevents inquiries from going straight to voicemail when your team is already on another call.",
          },
          { type: "subheading", text: "A CRM that logs and assigns every lead" },
          {
            type: "paragraph",
            text: "Even a simple CRM makes sure every inquiry is tracked and assigned to someone, instead of living in a shared inbox where it's unclear who's responsible for replying.",
          },
          {
            type: "paragraph",
            text: `These are the kind of systems covered in more depth on our ${link("digital infrastructure systems", "/solutions/digital-infrastructure")} page, including how CRM, quoting, and follow-up tie together.`,
          },
        ],
      },
      {
        heading: "What a Good Follow-Up Sequence Looks Like",
        blocks: [
          {
            type: "paragraph",
            text: "Once the first response goes out, a short follow-up sequence catches the leads that don't reply right away.",
          },
          {
            type: "list",
            style: "ordered",
            items: [
              "Immediate automated acknowledgment when the lead comes in",
              "A human follow-up — call or text — as soon as someone is available",
              "A second check-in if there's no response within a day",
              "A final follow-up a few days later before moving the lead to a longer-term list",
            ],
          },
        ],
      },
      {
        heading: "Measuring and Improving Your Response Time",
        blocks: [
          {
            type: "paragraph",
            text: "You can't improve what you don't track. Recording the time between when a lead comes in and when someone actually responds — even in a simple spreadsheet at first — makes it obvious where the gaps are, whether that's after-hours inquiries, a specific lead source, or a particular time of day.",
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Time from lead submission to first human response, by lead source",
              "Which hours or days response times consistently lag",
              "How many leads convert to booked jobs at each response-time range",
              "Which team member or channel handled each lead",
            ],
          },
          {
            type: "paragraph",
            text: "A few weeks of this data usually points to one or two clear fixes — most often after-hours coverage or a single overloaded phone line — rather than a vague sense that response times need to improve generally.",
          },
          {
            type: "paragraph",
            text: `Speed-to-lead works alongside the acquisition side of the business — it's what turns the leads generated through local search and directories like ${link("Rolloff Dumpster Finder", PLATFORM_URLS.rolloffDumpsterFinder)} and ${link("Portable Toilet Finder", PLATFORM_URLS.portableToiletFinder)} into booked jobs instead of missed opportunities. See our guides on ${link("dumpster rental leads", "/resources/how-to-get-more-dumpster-rental-leads")} and ${link("portable toilet rental leads", "/resources/how-to-get-more-portable-toilet-rental-leads")} for the acquisition side.`,
          },
          {
            type: "paragraph",
            text: `The systems above apply across every rental vertical we work with, though exactly how they play out differs by category — see our ${link("industry pages", "/industries")} for how acquisition, infrastructure, and customer value systems adapt to dumpster, portable toilet, event, and equipment rental specifically.`,
          },
        ],
      },
    ],
    faq: [
      {
        question: "What is speed-to-lead?",
        answer:
          "Speed-to-lead is the amount of time between when a customer submits an inquiry and when they receive a real response from your business. It's a common way local service businesses measure how well their follow-up process is working.",
      },
      {
        question: "Do I need full-time staff to improve speed-to-lead?",
        answer:
          "No. Automated acknowledgments, online quote tools, and call routing can close most of the gap on their own. The goal is to remove the delays that come from a single person manually handling every inquiry, not necessarily to add headcount.",
      },
      {
        question: "Does speed-to-lead matter more for some rental categories than others?",
        answer:
          "It tends to matter most in categories where the product is fairly standardized and price-comparable, like dumpster and portable toilet rental, since customers can evaluate several companies at once without much difference between them beyond price and responsiveness.",
      },
    ],
  },
];

function blockText(block: ContentBlock): string {
  if (block.type === "list") return block.items.join(" ");
  return block.text;
}

function countWords(resource: ResourceInput): number {
  const text = [
    ...resource.intro.map(blockText),
    ...resource.sections.flatMap((section) => [section.heading, ...section.blocks.map(blockText)]),
    ...(resource.faq ?? []).flatMap((item) => [item.question, item.answer]),
  ].join(" ");
  return text.trim().split(/\s+/).filter(Boolean).length;
}

function estimateReadingTime(resource: ResourceInput): string {
  const minutes = Math.max(1, Math.round(countWords(resource) / 200));
  return `${minutes} min read`;
}

export const resources: Resource[] = RESOURCE_INPUTS.map((input) => ({
  ...input,
  readingTime: estimateReadingTime(input),
}));

export function getResourceBySlug(slug: string): Resource | undefined {
  return resources.find((resource) => resource.slug === slug);
}

export function getAllResourceSlugs(): string[] {
  return resources.map((resource) => resource.slug);
}

export function getFeaturedResources(): Resource[] {
  return resources.filter((resource) => resource.featured);
}

export function getResourcesByCategory(category: ResourceCategory): Resource[] {
  return resources.filter((resource) => resource.category === category);
}

export function getRelatedResources(resource: Resource): Resource[] {
  if (!resource.relatedResources?.length) return [];
  return resource.relatedResources
    .map((slug) => getResourceBySlug(slug))
    .filter((related): related is Resource => Boolean(related));
}
