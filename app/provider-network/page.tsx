import type { Metadata } from "next";
import Link from "next/link";

import Breadcrumbs from "../components/content/Breadcrumbs";
import FaqList, { type FaqEntry } from "../components/content/FaqList";
import Footer from "../components/Footer";
import Header from "../components/Header";
import JsonLd from "../components/JsonLd";
import ProviderNetworkSurveyEmbed from "../components/provider-network/ProviderNetworkSurveyEmbed";
import { breadcrumbJsonLd, faqJsonLd } from "../lib/seo/json-ld";
import { DEFAULT_OG_IMAGE, SITE_NAME } from "../lib/seo/site-config";

const PAGE_TITLE = "Provider Network";
const PAGE_DESCRIPTION =
  "Join the Rental Growth Systems Provider Network and get notified when customers near you are looking for dumpsters, portable toilets, restroom trailers, and other rental services.";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  alternates: { canonical: "/provider-network" },
  openGraph: {
    type: "website",
    title: `${PAGE_TITLE} | ${SITE_NAME}`,
    description: PAGE_DESCRIPTION,
    url: "/provider-network",
    images: [DEFAULT_OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: `${PAGE_TITLE} | ${SITE_NAME}`,
    description: PAGE_DESCRIPTION,
    images: [DEFAULT_OG_IMAGE.url],
  },
};

const BENEFITS = ["Free to join", "No monthly commitment", "Only pay for leads you choose to claim"];

const STEPS = [
  {
    title: "Join the Network",
    description: "Tell us what you rent and where you operate.",
  },
  {
    title: "Get Lead Alerts",
    description:
      "Receive notifications when qualified rental opportunities become available in your service area.",
  },
  {
    title: "Claim the Leads You Want",
    description: "Review available opportunities and purchase leads individually. No obligation to buy.",
  },
];

const PRICING_POINTS = [
  "Joining the Provider Network is free.",
  "Standard qualified leads start at $25.",
  "You only pay for leads you choose to claim — there's no subscription or minimum spend.",
  "Each lead is sold to only one provider through the RGS Provider Network.",
  "RGS members get priority access and preferred pricing on leads in their area.",
  "Lead availability depends on current demand and coverage in your service area.",
];

const FAQ_ITEMS: FaqEntry[] = [
  {
    question: "Is joining free?",
    answer:
      "Yes. There's no cost to join the Provider Network and no monthly commitment. You only ever pay for the individual leads you choose to claim.",
  },
  {
    question: "Do I have to purchase every lead?",
    answer:
      "No. You'll receive alerts as opportunities become available in your service area, and you decide which ones to claim. There's no obligation to buy.",
  },
  {
    question: "What qualifies as a rental lead?",
    answer:
      "A qualified lead is a genuine rental inquiry from a customer in your service area — not a guaranteed booking. It means a real prospect with a specific rental need, not simply a page view or a visitor.",
  },
  {
    question: "Are leads exclusive?",
    answer:
      "Yes. Leads are intended to be exclusive to the one provider who claims them, so you're not competing with other providers for the same customer after you purchase it.",
  },
  {
    question: "How will I receive lead alerts?",
    answer:
      "You'll be notified using the contact details you provide when you join — including SMS alerts if you've opted in. You can choose how you'd like to stay informed.",
  },
  {
    question: "Can I choose areas and categories?",
    answer:
      "Yes. You tell us your service area and radius and which rental categories you offer, and you'll only be alerted to opportunities that match what you actually rent and where you operate.",
  },
  {
    question: "How is Provider Network different from RGS membership?",
    answer:
      "The Provider Network is a pay-as-you-go way to pick up individual leads with no commitment. RGS membership is a deeper partnership that includes priority access and preferred lead pricing along with broader marketing and growth systems for your business.",
  },
];

export default function ProviderNetworkPage() {
  return (
    <>
      <Header />
      <main>
        <JsonLd
          data={breadcrumbJsonLd([
            { name: "Home", url: "/" },
            { name: "Provider Network", url: "/provider-network" },
          ])}
        />
        <JsonLd data={faqJsonLd(FAQ_ITEMS)} />

        {/* Hero */}
        <section className="bg-white pt-10 pb-16 sm:pt-14 sm:pb-20">
          <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
            <div className="flex justify-center">
              <Breadcrumbs
                items={[{ name: "Home", href: "/" }, { name: "Provider Network" }]}
              />
            </div>

            <div className="mt-6 flex justify-center">
              <span className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-50 px-4 py-1.5 text-sm font-medium text-orange-700">
                <span className="h-1.5 w-1.5 rounded-full bg-orange-500" aria-hidden="true" />
                Now Accepting Denver-Area Rental Providers
              </span>
            </div>

            <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-navy-900 sm:text-5xl">
              Get Rental Leads From Customers in Your Service Area.
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-gray-500">
              Join the Rental Growth Systems Provider Network and get notified when customers near
              you are looking for dumpsters, portable toilets, restroom trailers, and other rental
              services.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-2">
              {BENEFITS.map((benefit) => (
                <span key={benefit} className="flex items-center gap-2 text-sm font-medium text-gray-600">
                  <svg
                    className="h-4 w-4 shrink-0 text-emerald-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2.5}
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  {benefit}
                </span>
              ))}
            </div>

            <div className="mt-9">
              <a
                href="#provider-form"
                className="inline-flex items-center justify-center rounded-lg bg-orange-500 px-7 py-3.5 text-base font-semibold text-white shadow-sm transition-all hover:bg-orange-600 hover:shadow-md active:scale-[0.98]"
              >
                Join the Free Provider Network
              </a>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="bg-gray-50 py-20 sm:py-24" id="how-it-works">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-sm font-semibold uppercase tracking-wider text-orange-500">
                How It Works
              </p>
              <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-navy-900 sm:text-4xl">
                Three Steps to Your First Lead
              </h2>
            </div>

            <div className="mx-auto mt-14 grid max-w-xl gap-8 sm:max-w-none sm:grid-cols-3">
              {STEPS.map((step, index) => (
                <div
                  key={step.title}
                  className="rounded-3xl border border-gray-200/70 bg-white p-8 shadow-[0_12px_32px_-16px_rgba(15,27,45,0.18)]"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-50 text-sm font-bold text-orange-600">
                    {index + 1}
                  </span>
                  <h3 className="mt-5 text-lg font-bold text-navy-900">{step.title}</h3>
                  <p className="mt-2 text-base leading-relaxed text-gray-600">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Registration form */}
        <section className="bg-white py-20 sm:py-24" id="provider-form">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <p className="text-sm font-semibold uppercase tracking-wider text-orange-500">
                Join the Network
              </p>
              <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-navy-900 sm:text-4xl">
                Register Your Rental Business
              </h2>
              <p className="mt-4 text-lg text-gray-500">
                Registration takes just a couple of minutes. Tell us what you rent and where you
                operate so we can notify you about relevant rental opportunities.
              </p>
            </div>

            <div className="mt-12">
              <ProviderNetworkSurveyEmbed />
            </div>

            <p className="mt-6 text-center text-xs leading-relaxed text-gray-400">
              By joining the Provider Network, you agree to our{" "}
              <Link href="/privacy-policy" className="underline hover:text-gray-600">
                Privacy Policy
              </Link>{" "}
              and{" "}
              <Link href="/terms-of-service" className="underline hover:text-gray-600">
                Terms of Service
              </Link>
              .
            </p>
          </div>
        </section>

        {/* Pricing */}
        <section className="bg-gray-50 py-20 sm:py-24" id="pricing">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-sm font-semibold uppercase tracking-wider text-orange-500">
                Pricing
              </p>
              <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-navy-900 sm:text-4xl">
                Simple, Pay-As-You-Go Rental Leads
              </h2>
            </div>

            <div className="mx-auto mt-12 rounded-3xl border border-gray-200/70 bg-white p-8 shadow-[0_12px_32px_-16px_rgba(15,27,45,0.18)] sm:p-10">
              <ul className="space-y-4">
                {PRICING_POINTS.map((point) => (
                  <li key={point} className="flex items-start gap-3">
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
                    <span className="text-base leading-relaxed text-gray-600">{point}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 border-t border-gray-200 pt-6 text-sm leading-relaxed text-gray-400">
                Lead pricing varies by rental category and market. You&apos;ll always see the
                price before choosing to purchase a lead.
              </p>
            </div>
          </div>
        </section>

        {/* Membership upsell */}
        <section className="bg-white py-20 sm:py-24">
          <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
            <h2 className="text-3xl font-extrabold tracking-tight text-navy-900 sm:text-4xl">
              Want First Access to Rental Leads?
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-gray-500">
              Rental Growth Systems members get preferred pricing and priority access to leads in
              their area, plus the broader marketing and growth systems RGS builds for rental
              companies.
            </p>
            <div className="mt-8">
              <Link
                href="/#pricing"
                className="inline-flex items-center justify-center rounded-lg border border-gray-300 px-6 py-3 text-base font-semibold text-navy-900 transition-colors hover:border-orange-300 hover:bg-orange-50"
              >
                See RGS Member Benefits
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-gray-50 py-20 sm:py-24">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <FaqList items={FAQ_ITEMS} />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
