import { PRICING_URLS } from "../lib/links";

type PricingPlan = {
  name: string;
  price: string;
  priceSuffix: string;
  billingNote: string;
  /** Growth Partner's "Google ad spend is not included." disclaimer. */
  secondaryNote?: string;
  description: string;
  features: string[];
  cta: string;
  href: string;
  featured?: boolean;
};

const PLANS: PricingPlan[] = [
  {
    name: "Preferred Partner",
    price: "$150",
    priceSuffix: "/ month",
    billingNote: "Billed at $450 / quarter",
    description:
      "Best for rental companies that want to claim featured visibility in one directory and install a simple follow-up system.",
    features: [
      "Featured listing on 1 directory",
      "Featured placement on relevant blogs and city pages",
      "CRM lead pipeline",
      "Speed-to-lead system",
      "Review request system",
      "Customer reactivation and referral campaign",
      "First right of refusal on qualified local leads",
    ],
    cta: "Secure Preferred Spot",
    href: PRICING_URLS.preferred,
  },
  {
    name: "Premium Partner",
    price: "$300",
    priceSuffix: "/ month",
    billingNote: "Billed at $900 / quarter",
    description:
      "Best for rental companies that want broader visibility across two category-specific rental directories and expanded lead opportunities.",
    features: [
      "Everything in Preferred",
      "Featured listing on 2 directories",
      "Featured placement across 2 sites",
      "SEO-friendly links to your website",
      "Priority lead routing from relevant pages",
      "Optional Smart Website with AI Agents",
      "Optional AI Voice Receptionist",
    ],
    cta: "Secure Premium Spot",
    href: PRICING_URLS.premium,
    featured: true,
  },
  {
    name: "Growth Partner",
    price: "$700",
    priceSuffix: "/ month",
    billingNote: "Billed at $2,100 / quarter",
    secondaryNote: "Google ad spend is not included.",
    description:
      "Best for rental companies that want directory visibility plus a managed Google Search lead engine.",
    features: [
      "Everything in Preferred and Premium",
      "Google Search campaign setup",
      "Monthly Google Ads management",
      "High-intent local keyword targeting",
      "Paid leads routed into the CRM",
      "Advanced contact management",
      "Lead reporting system",
    ],
    cta: "Secure Growth Spot",
    href: PRICING_URLS.growth,
  },
];

function CheckIcon() {
  return (
    <svg
      className="mt-0.5 h-5 w-5 shrink-0 text-emerald-500"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2.5}
      stroke="currentColor"
      aria-hidden="true"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
    </svg>
  );
}

export default function PricingSection() {
  return (
    <section className="bg-white py-20 sm:py-28" id="pricing">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-orange-500">
            Rental Growth Systems
          </p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-navy-900 sm:text-4xl">
            Choose Your Founding Partner Level
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-gray-500">
            All founding partner plans begin with a 90-day commitment. Your founding partner
            rate is locked in when you claim an available market spot.
          </p>
        </div>

        {/* Pricing cards */}
        <div className="mx-auto mt-16 grid max-w-xl items-stretch gap-8 lg:max-w-none lg:grid-cols-3">
          {PLANS.map((plan) => (
            <article
              key={plan.name}
              className={`relative flex h-full flex-col rounded-3xl bg-white p-8 shadow-[0_12px_32px_-16px_rgba(15,27,45,0.18)] transition-shadow hover:shadow-[0_16px_40px_-16px_rgba(15,27,45,0.26)] ${
                plan.featured
                  ? "border-2 border-orange-300"
                  : "border border-gray-200/70"
              }`}
            >
              {plan.featured && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-orange-500 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-white shadow-sm">
                  Most Popular
                </span>
              )}

              <h3 className="text-xl font-bold text-navy-900">{plan.name}</h3>

              <div className="mt-5 flex items-baseline gap-1.5">
                <span className="text-4xl font-extrabold tracking-tight text-navy-900">
                  {plan.price}
                </span>
                <span className="text-base font-medium text-gray-500">{plan.priceSuffix}</span>
              </div>
              <p className="mt-1.5 text-sm text-gray-500">{plan.billingNote}</p>
              {plan.secondaryNote && (
                <p className="mt-1 text-xs italic text-gray-400">{plan.secondaryNote}</p>
              )}

              <p className="mt-5 text-base leading-relaxed text-gray-600">{plan.description}</p>

              <ul className="mt-6 flex-1 space-y-3.5">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5">
                    <CheckIcon />
                    <span className="text-sm leading-relaxed text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href={plan.href}
                className="mt-8 inline-flex w-full items-center justify-center rounded-lg bg-orange-500 px-6 py-3 text-base font-semibold text-white shadow-sm transition-all hover:bg-orange-600 hover:shadow-md active:scale-[0.98]"
              >
                {plan.cta}
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
