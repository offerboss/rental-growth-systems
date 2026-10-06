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

export type ResourceHeroImage = {
  /** Public-relative path, e.g. "/images/dumpster-rental-leads.png". */
  src: string;
  alt: string;
  /** Actual pixel dimensions — used for OG/Twitter image tags. Display is a fixed 16:9 box regardless. */
  width: number;
  height: number;
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
  /**
   * Article header image — shown near the top of the article and used as the
   * card thumbnail, OG/Twitter image, and Article JSON-LD image. Optional so
   * a new article can ship without one; falls back to the site default OG
   * image (see DEFAULT_OG_IMAGE) wherever an image is required.
   */
  heroImage?: ResourceHeroImage;
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
    heroImage: {
      src: "/images/dumpster-rental-leads.png",
      alt: "Roll-off dumpster rental lead generation workflow from local search to CRM",
      width: 1672,
      height: 941,
    },
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
    heroImage: {
      src: "/images/portable-toilet-rental-leads.png",
      alt: "Portable toilet rental lead generation workflow from local search to CRM",
      width: 1672,
      height: 941,
    },
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
    heroImage: {
      src: "/images/rental-speed-to-lead.png",
      alt: "Rental company speed-to-lead workflow from inquiry to call, text, and quote",
      width: 1672,
      height: 941,
    },
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
  {
    slug: "what-crm-should-a-rental-company-use",
    title:
      "What CRM Should a Rental Company Use? A Practical Guide to Leads, Quotes, Follow-Up, and Repeat Business",
    // Intentionally omits the "| Rental Growth Systems" suffix — the layout's
    // title template already appends it, so including it here would duplicate
    // the brand name in the rendered <title>.
    metaTitle: "Best CRM for Rental Companies",
    metaDescription:
      "Learn what rental companies should look for in a CRM, including lead capture, quote tracking, automated follow-up, customer pipelines, reviews, and reactivation.",
    excerpt:
      "What a CRM actually needs to do for a rental company — lead capture, pipeline visibility, follow-up automation, and reactivation — not which brand to buy.",
    category: "Digital Infrastructure",
    publishedDate: "2026-10-01",
    author: "Rental Growth Systems Team",
    heroImage: {
      src: "/images/rental-company-crm.png",
      alt: "Rental company CRM dashboard managing leads, quotes, and bookings across rental categories",
      width: 1672,
      height: 941,
    },
    relatedResources: ["rental-company-speed-to-lead"],
    intro: [
      {
        type: "paragraph",
        text: "A rental company doesn't need the most feature-heavy CRM on the market. It needs a system that reliably captures every inquiry, shows where every opportunity stands, triggers the right follow-up automatically, and keeps past customers easy to reach again when it's time for another rental.",
      },
      {
        type: "paragraph",
        text: "Which specific CRM is the best fit depends on how a company already works — its channels, team size, and existing tools. But the capabilities a rental company actually needs from that system are fairly consistent across dumpster, portable toilet, restroom trailer, event, and equipment rental businesses, and that's what this guide walks through.",
      },
      {
        type: "paragraph",
        text: "Most rental companies don't actually lack a system. They usually have several — a phone, a shared inbox, a notebook by the register — none of which talk to each other.",
      },
    ],
    sections: [
      {
        heading: "What Does a Rental Company Actually Need From a CRM?",
        blocks: [
          {
            type: "paragraph",
            text: "Before comparing specific products, it helps to separate what a CRM is actually responsible for from everything else a rental business runs on. At minimum, a CRM built for a rental company needs to handle the following.",
          },
          { type: "subheading", text: "Lead capture from every channel" },
          {
            type: "paragraph",
            text: "Rental inquiries come in by phone call, website form, text message, and sometimes a directory listing — often for the same business in the same week. A CRM needs to catch all of them in one place, not just the ones that happen to come through a contact form.",
          },
          { type: "subheading", text: "Ownership and assignment" },
          {
            type: "paragraph",
            text: "Once a lead comes in, someone specific needs to own it. Without clear assignment, a dumpster quote request or an event rental inquiry can sit in a shared inbox while everyone assumes someone else is handling it.",
          },
          { type: "subheading", text: "Quote status and pipeline visibility" },
          {
            type: "paragraph",
            text: "A CRM should make it obvious, at a glance, where every opportunity stands — new, quoted, following up, won, or lost — so a manager doesn't have to ask the team for a status update on every open quote. If the only person who knows where a quote stands is the person who sent it, that's not really a pipeline — it's a guess.",
          },
          { type: "subheading", text: "Follow-up that actually happens" },
          {
            type: "paragraph",
            text: "Most rental companies lose business not because a customer said no, but because nobody followed up a second or third time. A CRM should prompt that follow-up automatically instead of relying on someone remembering to do it. Everyone means to circle back. Not everyone does.",
          },
          { type: "subheading", text: "Customer history" },
          {
            type: "paragraph",
            text: "A contractor who rented a dumpster in March and an event planner who booked a tent last summer are both repeat-business candidates — but only if their rental history is easy to find instead of buried in old email threads.",
          },
        ],
      },
      {
        heading: "CRM vs. Rental Management Software: What's the Difference?",
        blocks: [
          {
            type: "paragraph",
            text: "These two categories get confused constantly, and the confusion leads some rental companies to buy the wrong tool, or to assume one system should do everything.",
          },
          { type: "subheading", text: "What a CRM manages" },
          {
            type: "paragraph",
            text: "A CRM is built around leads, sales conversations, follow-up, and customer relationships — the pipeline between first contact and a booked job, and everything that happens with that customer afterward.",
          },
          { type: "subheading", text: "What rental management software manages" },
          {
            type: "paragraph",
            text: "Rental management software is typically built around the operational side of the business: inventory and unit availability, scheduling and dispatch, contracts, and in some cases invoicing and route planning for pickups and swaps.",
          },
          {
            type: "paragraph",
            text: "Some rental companies need both — a CRM managing the sales and relationship side, and rental management software handling logistics. One system replacing the other usually means something important falls through the cracks, whether that's a lead that never gets a quote or a truck that gets double-booked.",
          },
        ],
      },
      {
        heading: "The 7 CRM Capabilities That Matter Most for Rental Companies",
        blocks: [
          {
            type: "paragraph",
            text: "Feature lists are easy to find and hard to compare. These seven capabilities are the ones that actually show up in day-to-day rental operations.",
          },
          { type: "subheading", text: "1. Centralized lead capture" },
          {
            type: "paragraph",
            text: "Every call, text, form submission, and directory lead should land in the same system, tagged with where it came from. A portable toilet company running both a construction-focused ad campaign and a directory listing needs to know which channel actually produces bookings, not just leads.",
          },
          { type: "subheading", text: "2. A clear sales pipeline" },
          {
            type: "paragraph",
            text: "Stages like new, quoted, following up, won, and lost should be visible for every open opportunity. For an equipment rental company juggling a dozen active quotes across different job sites, pipeline visibility is the difference between knowing exactly what needs attention and hoping nothing got missed.",
          },
          { type: "subheading", text: "3. Quote follow-up automation" },
          {
            type: "paragraph",
            text: "A quote that goes out and never gets followed up on is a lost job more often than a rejected one. Automated reminders — to the team, and sometimes to the customer — keep a restroom trailer quote for a wedding from going cold just because the first week got busy.",
          },
          { type: "subheading", text: "4. Missed-call and after-hours response" },
          {
            type: "paragraph",
            text: `Dumpster and portable toilet companies in particular get inquiries outside business hours, often from someone comparing two or three companies at once. A CRM that logs missed calls and triggers a text-back keeps that lead from defaulting to whoever answered first. See our guide on ${link("speed-to-lead for rental companies", "/resources/rental-company-speed-to-lead")} for more on why response time matters so much in these categories.`,
          },
          { type: "subheading", text: "5. SMS and email communication" },
          {
            type: "paragraph",
            text: "Text messages get read faster than emails, and phone calls get missed more easily than either. A CRM that sends and tracks both from inside the same record means a follow-up sequence doesn't depend on someone switching between four different apps.",
          },
          { type: "subheading", text: "6. Review and referral workflows" },
          {
            type: "paragraph",
            text: "An event rental customer who just had a great experience is a good candidate for a review, and a contractor who's used a dumpster company twice is a good candidate for a referral ask — but only if the CRM makes it easy to trigger that request at the right moment instead of depending on someone to remember.",
          },
          { type: "subheading", text: "7. Reactivation of past customers" },
          {
            type: "paragraph",
            text: "A property manager who rented equipment eight months ago, or a homeowner who used a dumpster company for a cleanout last year, are both warm leads for the next project — if their contact information and rental history are still easy to find and act on.",
          },
        ],
      },
      {
        heading: "What Should Happen After a New Rental Inquiry Comes In?",
        blocks: [
          {
            type: "paragraph",
            text: "The exact steps vary by company, but a reliable rental inquiry workflow generally follows the same shape, regardless of whether the inquiry is for a dumpster, a portable toilet, a restroom trailer, event equipment, or construction machinery.",
          },
          {
            type: "list",
            style: "ordered",
            items: [
              "The inquiry enters the CRM — from a call, text, form, or directory lead — and is logged automatically rather than depending on someone to enter it by hand.",
              "It's assigned to a specific team member, so there's no ambiguity about who's responsible for the next step.",
              "An immediate acknowledgment goes out, even if it's just a text confirming the request was received, while the full response is being prepared.",
              "A team member follows up by call or text with pricing and availability, moving the lead into a quoted stage.",
              "If there's no response, the CRM prompts a reminder — a second follow-up rather than letting the quote sit untouched.",
              "The opportunity gets marked won or lost, so the pipeline reflects reality instead of a growing list of stale quotes.",
              "After the rental or event, a review request goes out while the experience is still fresh.",
              "The customer's record stays in the system for future reactivation — the next cleanout, the next event, the next job site.",
            ],
          },
          {
            type: "paragraph",
            text: "For a dumpster rental company, that might mean a weekend inquiry gets an automatic text confirmation Saturday morning, a callback Monday with pricing, and a reminder Wednesday if the customer hasn't responded. For an event rental company, it might mean a quote for a wedding gets a confirmation call, a follow-up two weeks later if the date hasn't been booked, and a review request the Monday after the event. The channel and timing change; the structure doesn't.",
          },
        ],
      },
      {
        heading: "Should Rental Companies Use AI With Their CRM?",
        blocks: [
          {
            type: "paragraph",
            text: "AI tools built into or alongside a CRM are increasingly common, and used well, they can close some of the gaps described above without requiring a bigger team.",
          },
          { type: "subheading", text: "Where AI tends to help" },
          {
            type: "list",
            style: "unordered",
            items: [
              "Answering common questions and capturing lead details after hours or when the team is already on a call",
              "Sending the first acknowledgment the moment an inquiry comes in",
              "Qualifying basic details — rental type, location, timing — before a person gets involved",
              "Routing a lead to the right person or queue automatically",
              "Supporting follow-up sequences so a lead doesn't go cold just because no one got to it that day",
            ],
          },
          {
            type: "paragraph",
            text: "What AI isn't well-suited to replace is the judgment calls — negotiating a custom quote, handling an unusual site-access question, or managing a frustrated customer. The rental companies getting the most out of AI tend to use it to handle the repetitive, time-sensitive parts of the workflow and hand off to a person for anything that needs one, rather than trying to remove people from the process.",
          },
        ],
      },
      {
        heading: "Common CRM Mistakes Rental Companies Make",
        blocks: [
          {
            type: "paragraph",
            text: "Even companies that already have a CRM don't always get much value from it — sometimes it's just a more expensive way to store phone numbers. The same handful of mistakes come up across rental categories.",
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Treating the CRM like an address book — storing contact information without tracking where each opportunity actually stands.",
              "Never defining pipeline stages, so there's no consistent way to tell a new lead apart from one that's already been quoted.",
              "Collecting leads without automated follow-up, which turns the CRM into a list of inquiries nobody circles back to.",
              "Running too many disconnected tools, so a lead captured on the website doesn't show up in the same place as a lead that called in.",
              "Letting old customer data sit unused instead of mining it for repeat business and reactivation.",
              "Not tracking lead source, which makes it impossible to tell whether a directory listing, a paid ad, or word of mouth is actually producing bookings.",
            ],
          },
        ],
      },
      {
        heading: "How to Choose a CRM for Your Rental Business",
        blocks: [
          {
            type: "paragraph",
            text: "Rather than starting with a list of CRM products, it's more useful to start with a short list of questions and let those questions narrow the options.",
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Does it capture inquiries from every channel that matters — calls, forms, texts, and directory leads?",
              "Can the team see the status of every open opportunity without asking around?",
              "Can follow-up be automated without sounding like a form letter?",
              "Can texts, emails, and calls be tracked from inside the same record?",
              "Does it support review requests and reactivation outreach, not just the initial sale?",
              "Can it work alongside the rental management or scheduling software the business already uses?",
              "Is it simple enough that the team will actually use it day to day?",
            ],
          },
          {
            type: "paragraph",
            text: "A CRM that scores well on these questions tends to matter more than one with the longest feature list. The goal isn't the most powerful system — it's the one that gets used consistently. A CRM only works if somebody actually uses it, and the fanciest platform in the industry won't help a pipeline that still lives in a notebook by the phone.",
          },
        ],
      },
      {
        heading: "The Bottom Line",
        blocks: [
          {
            type: "paragraph",
            text: "The right CRM for a rental company isn't defined by brand name or feature count. It's whatever system reliably captures every inquiry, keeps the pipeline visible, automates the follow-up that would otherwise get missed, and makes it easy to bring past customers back for the next job.",
          },
          {
            type: "paragraph",
            text: `A CRM is one piece of that picture. The quoting flow, the follow-up sequence, the review requests, and the way all of it connects together matter just as much as the tool itself — which is the focus of Rental Growth Systems' ${link("digital infrastructure systems", "/solutions/digital-infrastructure")}, built around how dumpster, portable toilet, restroom trailer, event, and ${link("equipment rental companies", "/industries")} actually operate.`,
          },
        ],
      },
    ],
    faq: [
      {
        question: "What is the best CRM for a rental company?",
        answer:
          "There's no single best CRM for every rental company — the right choice depends on team size, channels, and existing tools. What matters more than the brand is whether it captures every inquiry, makes pipeline status visible, automates follow-up, and supports repeat business and reactivation.",
      },
      {
        question: "Does a rental business need both a CRM and rental management software?",
        answer:
          "Many do. A CRM manages leads, quotes, and customer relationships; rental management software manages inventory, scheduling, and logistics. Smaller companies sometimes get by with one system loosely covering both, but as volume grows, most rental businesses end up using both together.",
      },
      {
        question: "Can a CRM automate quote follow-up?",
        answer:
          "Yes. Most CRMs built for sales workflows can send automatic reminders when a quote hasn't been responded to, and some can send the first follow-up message automatically the moment a quote goes out, rather than waiting for a person to remember.",
      },
      {
        question: "Can a CRM help rental companies get more repeat business?",
        answer:
          "It can, primarily by making past customer history easy to find and by supporting timed outreach — a reminder before a recurring servicing contract lapses, a check-in after a seasonal cleanout, or a review and referral request right after a job finishes.",
      },
      {
        question: "Should small rental companies use a CRM?",
        answer:
          "Generally yes, even a simple one. The risk of losing track of leads and follow-up is often higher for a small team juggling multiple roles, not lower, since there's no one else to catch a dropped lead.",
      },
    ],
  },
  {
    slug: "how-to-grow-a-rental-business-without-spending-more-on-ads",
    title: "How to Grow a Rental Business Without Spending More on Ads",
    metaTitle: "How to Grow a Rental Business Without Spending More on Ads",
    metaDescription:
      "Learn how rental companies can grow by improving lead response, quote follow-up, reviews, reactivation, referrals, and customer lifetime value before increasing ad spend.",
    excerpt:
      "More ad spend isn't always the answer — here's how rental companies create growth from the leads and customers they already have.",
    category: "Customer Value",
    publishedDate: "2026-10-01",
    author: "Rental Growth Systems Team",
    heroImage: {
      src: "/images/grow-rental-business-without-more-ads.png",
      alt: "Rental business growth system using follow-up, reviews, repeat business, referrals, and reactivation",
      width: 1672,
      height: 941,
    },
    relatedResources: [
      "rental-company-speed-to-lead",
      "what-crm-should-a-rental-company-use",
    ],
    intro: [
      {
        type: "paragraph",
        text: "A rental company doesn't always need more traffic to grow. Before increasing ad spend, it's often worth looking at how well the business converts the inquiries it already gets — because a leak in lead response, follow-up, or retention costs just as much revenue as a weak marketing campaign, and it's usually cheaper to fix.",
      },
      {
        type: "paragraph",
        text: "Growth can come from converting more of the leads already coming in, reducing missed opportunities, following up more consistently, generating repeat business from past customers, and creating more reviews and referrals — all before a single additional dollar goes toward ads.",
      },
    ],
    sections: [
      {
        heading: "Why More Ad Spend Is Not Always the First Growth Lever",
        blocks: [
          {
            type: "paragraph",
            text: "Traffic is only one part of a growth system. A dumpster rental company that doubles its ad budget but still takes two days to respond to a quote request will likely see its cost per booked job rise, not fall — because the new leads run into the same bottlenecks the old ones did. It's tempting to treat every growth problem as a traffic problem. It rarely is.",
          },
          { type: "subheading", text: "More leads don't fix weak response or follow-up" },
          {
            type: "paragraph",
            text: "If a portable toilet company already lets half of its inbound quote requests go unanswered past the first day, spending more to generate additional requests just produces more unanswered requests. The leak gets bigger, not smaller.",
          },
          { type: "subheading", text: "Buying more traffic can amplify existing leaks" },
          {
            type: "paragraph",
            text: "This is the part that's easy to miss: a system that converts a fifth of its leads will convert roughly a fifth of whatever new leads ad spend brings in, too. If that conversion rate is being held down by missed calls or slow quotes, more traffic mostly means more missed calls and slow quotes. Buying more traffic while leads are already falling through the cracks is an expensive way to stay busy.",
          },
          { type: "subheading", text: "Fixing conversion and customer value makes future ad spend more productive" },
          {
            type: "paragraph",
            text: "None of this means advertising doesn't work — it means the return on that spend improves once the operational side is solid. An event rental company that fixes its follow-up process before increasing ad spend gets more out of every new lead that spend produces.",
          },
        ],
      },
      {
        heading: "Start With the Leads You Already Generate",
        blocks: [
          {
            type: "paragraph",
            text: "Most rental companies already have more usable leads than they realize — they're just scattered across channels that don't talk to each other. A lead that goes to voicemail doesn't feel like a missed opportunity. It just feels like Tuesday.",
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Website inquiries submitted through a contact or quote form",
              "Phone calls, including the ones that go to voicemail",
              "Text messages, for companies that list a mobile number",
              "Quote requests that were started but never finished",
              "Missed calls that never got a callback",
              "After-hours inquiries that came in outside business hours",
            ],
          },
          {
            type: "paragraph",
            text: "Getting visibility into all of these — in one place, instead of split across a phone log, an inbox, and a notepad — is usually the first step, because it's hard to fix a conversion problem that's hard to see in the first place.",
          },
        ],
      },
      {
        heading: "Improve Speed-to-Lead",
        blocks: [
          {
            type: "paragraph",
            text: `How fast a rental company responds to a new inquiry is one of the highest-leverage places to start, because it doesn't require a single additional lead — just a faster response to the ones already arriving. Our full guide on ${link("speed-to-lead for rental companies", "/resources/rental-company-speed-to-lead")} covers this in depth; the short version is below.`,
          },
          { type: "subheading", text: "Immediate acknowledgment" },
          {
            type: "paragraph",
            text: "A text or email confirming a request was received — sent automatically, the moment it comes in — keeps a customer from immediately calling the next company on their list.",
          },
          { type: "subheading", text: "Fast call or text follow-up" },
          {
            type: "paragraph",
            text: "For categories like dumpster and portable toilet rental, where customers often compare several companies at once, the business that follows up first with a clear answer has a real edge.",
          },
          { type: "subheading", text: "Clear ownership" },
          {
            type: "paragraph",
            text: "Every inquiry needs a specific person responsible for it. A lead with no clear owner is a lead it's easy to assume someone else is handling.",
          },
          { type: "subheading", text: "After-hours and missed-call coverage" },
          {
            type: "paragraph",
            text: "A missed call doesn't have to mean a lost lead if it triggers an automatic text-back, even if a full response has to wait until business hours.",
          },
        ],
      },
      {
        heading: "Follow Up on Quotes More Consistently",
        blocks: [
          {
            type: "paragraph",
            text: "A quote isn't the end of the sales process — it's usually the middle of it. Rental companies lose a meaningful share of quoted jobs not because the customer said no, but because nobody followed up a second time.",
          },
          { type: "subheading", text: "Build in reminders" },
          {
            type: "paragraph",
            text: "A restroom trailer quote for a wedding, an equipment rental quote for a job that hasn't started yet, or a dumpster quote for a cleanout that's still a few weeks out all need a scheduled follow-up, not a hope that the customer calls back.",
          },
          { type: "subheading", text: "Use SMS and email together" },
          {
            type: "paragraph",
            text: "Texts get read faster; email works better for anything with detail, like a formal quote. Using both, tracked in the same place, covers more ground than relying on one.",
          },
          { type: "subheading", text: "Track pipeline stages and outcomes" },
          {
            type: "paragraph",
            text: "Marking every quote as won or lost, instead of letting it sit in limbo, makes it possible to see where follow-up is actually breaking down instead of guessing.",
          },
        ],
      },
      {
        heading: "Turn Past Customers Into New Revenue",
        blocks: [
          {
            type: "paragraph",
            text: "Past customers are usually the least expensive source of new revenue a rental company has, because the relationship — and often the trust — already exists. They're also usually sitting untouched in a database somewhere, waiting for nobody to call.",
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "A contractor who rented a dumpster for one job is a strong candidate for the next one, especially with a reminder timed to typical project cycles.",
              "A property manager who rented equipment for one turnover is likely to need it again for the next one.",
              "An event planner who booked tents or a restroom trailer for one wedding season is a repeat booking candidate for the next.",
              "A homeowner who used a portable toilet or dumpster company for a renovation last year may be planning another project.",
            ],
          },
          {
            type: "paragraph",
            text: "The key is using that history without it feeling like spam — a well-timed, relevant check-in reads very differently than a generic blast with no context.",
          },
        ],
      },
      {
        heading: "Generate More Reviews From Completed Rentals",
        blocks: [
          {
            type: "paragraph",
            text: "Reviews influence both how a rental company ranks locally and how much a new customer trusts it enough to call. The companies that generate the most reviews usually aren't doing anything complicated — they're just asking consistently.",
          },
          { type: "subheading", text: "When and who to ask" },
          {
            type: "paragraph",
            text: "The best time to ask is right after the rental or event wraps, while the experience is still fresh — not weeks later in a batch email. By then, most customers have forgotten which company even showed up. Ask every customer who had a good experience, not just the ones who happen to mention it.",
          },
          { type: "subheading", text: "Keep it simple" },
          {
            type: "paragraph",
            text: "A short text or email with a direct link, sent at a consistent point in the process, outperforms an elaborate review campaign that depends on someone remembering to run it.",
          },
          { type: "subheading", text: "Avoid manipulative tactics" },
          {
            type: "paragraph",
            text: "Gating reviews — only asking customers who indicate they're happy first — or offering incentives for positive reviews violates most platforms' policies and tends to produce reviews that don't hold up to scrutiny. Asking everyone, consistently, is both the more durable and the more honest approach.",
          },
        ],
      },
      {
        heading: "Create a Referral System",
        blocks: [
          {
            type: "paragraph",
            text: "Referrals tend to produce some of the highest-quality leads a rental company gets, because they come with an implicit endorsement — but most companies leave them to chance instead of building a system around them.",
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Customer referrals — a simple ask after a good experience, not a one-time campaign",
              "Contractor relationships — repeat trade accounts who can refer other contractors on the same job sites",
              "Event and vendor relationships — planners, venues, and caterers who work with the same customers repeatedly",
            ],
          },
          {
            type: "paragraph",
            text: "A referral system doesn't need to be complicated: a consistent ask, at a consistent point in the relationship, with a simple way to track which relationships are actually producing new business. It won't guarantee a specific volume of referrals, but it will produce more than leaving it unasked.",
          },
        ],
      },
      {
        heading: "Increase Customer Lifetime Value",
        blocks: [
          {
            type: "paragraph",
            text: "Customer lifetime value is simply the total revenue a rental company can expect from a customer across every rental or job, not just the first one. For a rental business, that often means the difference between a single dumpster rental and the same contractor renting from the same company repeatedly over a couple of years.",
          },
          {
            type: "paragraph",
            text: "Repeat rentals, referrals, reactivation, and a smoother customer experience all push that number up. None of them require a new customer — they require getting more out of relationships that already exist, which is usually more efficient than acquiring a new customer from scratch.",
          },
        ],
      },
      {
        heading: "Make Your Existing Traffic Convert Better",
        blocks: [
          {
            type: "paragraph",
            text: "Some of the highest-leverage fixes have nothing to do with lead volume at all — they're about what happens when a visitor lands on the website.",
          },
          {
            type: "list",
            style: "unordered",
            items: [
              'A clear call to action — request a quote, call now — instead of a vague "contact us"',
              "A short quote form instead of one that asks for more detail than a first-time visitor is willing to give",
              "Click-to-call on mobile, since a large share of rental searches happen on a phone",
              "Clearly listed service areas, so a visitor doesn't have to guess whether the company covers their city",
              "Trust signals — reviews, photos of actual equipment, and a real phone number — visible without scrolling far",
              "A fast response once that visitor does reach out",
            ],
          },
          {
            type: "paragraph",
            text: "None of these require new traffic. They just make the traffic already arriving more likely to convert.",
          },
        ],
      },
      {
        heading: "When Does It Make Sense to Spend More on Ads?",
        blocks: [
          {
            type: "paragraph",
            text: "This isn't an argument against advertising — it's an argument for sequencing. Paid traffic tends to perform best once the operational side is solid enough to make the most of it. Increasing ad spend tends to make more sense when:",
          },
          {
            type: "list",
            style: "unordered",
            items: [
              "Lead handling is reliable — nothing is slipping through an unmonitored inbox or voicemail",
              "Follow-up is consistent, with quotes getting a second and third touch instead of going cold",
              "Conversion is being tracked, so it's possible to tell whether more leads are turning into more bookings",
              "The team can respond quickly, even during busy periods",
              "There's capacity to handle more jobs, not just more inquiries",
            ],
          },
          {
            type: "paragraph",
            text: `For a ${link("customer acquisition", "/solutions/customer-acquisition")} push to pay off, the ${link("digital infrastructure", "/solutions/digital-infrastructure")} underneath it — the response time, the follow-up, the pipeline — needs to be ready to handle what that spend produces.`,
          },
        ],
      },
      {
        heading: "The Bottom Line",
        blocks: [
          {
            type: "paragraph",
            text: "The fastest path to growth isn't always buying more traffic. Rental companies can often create more revenue by improving how they convert, follow up with, retain, and reactivate the customers they already have.",
          },
          {
            type: "paragraph",
            text: `Customer acquisition still matters — at some point, most rental companies do need more demand, not just better conversion of what they have. But acquisition, operations, and customer value work together. That's the idea behind how Rental Growth Systems approaches growth for ${link("rental companies", "/industries")} across dumpster, portable toilet, restroom trailer, event, and equipment rental: not just more traffic, but the acquisition, infrastructure, and ${link("customer value systems", "/solutions/customer-value")} that make that traffic worth generating in the first place.`,
          },
        ],
      },
    ],
    faq: [
      {
        question: "How can a rental business grow without spending more on ads?",
        answer:
          "By improving how it handles the leads and customers it already has — faster response to new inquiries, more consistent quote follow-up, review and referral requests after completed rentals, and reactivation outreach to past customers. These improvements often cost less than additional ad spend and compound over time.",
      },
      {
        question: "Should rental companies focus on new leads or repeat customers?",
        answer:
          "Both matter, but repeat customers are usually the more efficient place to start, since the relationship and trust already exist. A healthy growth approach uses new leads to keep expanding the customer base while using repeat business and reactivation to get more value from customers already acquired.",
      },
      {
        question: "How can a rental company reactivate old customers?",
        answer:
          "By keeping customer history easy to find and reaching out at relevant moments — a reminder before a recurring servicing contract lapses, a check-in timed to a typical project or event cycle, or outreach ahead of a seasonal demand window like spring cleanup or wedding season.",
      },
      {
        question: "Can better follow-up increase rental bookings?",
        answer:
          "Often, yes. A meaningful share of quoted jobs are lost not because the customer said no, but because no one followed up a second time. Structured reminders and a consistent follow-up sequence recover some of that business without requiring any new leads.",
      },
      {
        question: "When should a rental company increase its advertising budget?",
        answer:
          "Once lead handling, follow-up, and conversion tracking are reliable enough that new leads won't just run into the same gaps old ones did. Increasing ad spend before fixing those gaps usually just produces more missed opportunities at a higher cost.",
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
