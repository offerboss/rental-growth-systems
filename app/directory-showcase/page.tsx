import type { Metadata } from "next";

import Footer from "../components/Footer";
import FinalCTA from "../components/FinalCTA";
import Header from "../components/Header";
import PlatformEcosystem from "../components/PlatformEcosystem";
import YouTubeEmbed from "../components/system/YouTubeEmbed";
import { BOOKING_URL } from "../lib/links";

export const metadata: Metadata = {
  title: "Directory Network Showcase",
  description:
    "See how Rental Growth Systems features rental companies across its growing network of industry-specific directories, local city pages, and educational content.",
  robots: {
    index: false,
    follow: true,
  },
};

const BENEFITS = [
  {
    title: "Local & Regional Visibility",
    description:
      "Get featured on directory pages targeting your rental service area, helping customers discover your business when searching for rental services nearby.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
    ),
  },
  {
    title: "Industry-Specific Exposure",
    description:
      "Gain visibility through our rental directories and relevant educational articles focused on the equipment and services your business provides.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z"
        />
      </svg>
    ),
  },
  {
    title: "Direct Website Referrals",
    description:
      "Featured placements can link directly to your website, creating additional opportunities for potential customers to learn about your services and request a quote.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
      </svg>
    ),
  },
];

export default function DirectoryShowcasePage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero + video */}
        <section className="bg-white pt-14 pb-16 sm:pt-20 sm:pb-20">
          <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
            <p className="text-sm font-semibold uppercase tracking-wider text-orange-500">
              Rental Growth Systems — Directory Network
            </p>
            <h1 className="mt-3 text-4xl font-extrabold leading-tight tracking-tight text-navy-900 sm:text-5xl">
              Get Your Rental Business Featured Where Customers Are Searching
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-gray-500">
              Discover how we help rental companies increase their online visibility through our
              growing network of industry-specific directories, local city pages, and educational
              content.
            </p>
          </div>

          <div className="mx-auto mt-10 max-w-5xl px-4 sm:px-6 lg:px-8">
            <YouTubeEmbed
              videoId="WomapWGyDpw"
              title="Get Your Rental Business Featured Where Customers Are Searching"
            />
          </div>

          <div className="mx-auto mt-10 max-w-2xl px-4 text-center sm:px-6 lg:px-8">
            <h2 className="text-xl font-bold text-navy-900">
              See How It Works With a Real Rental Business
            </h2>
            <p className="mt-3 text-base leading-relaxed text-gray-600">
              In this walkthrough, we show how Old Pueblo Restroom Trailers, based in Tucson,
              Arizona, is featured across our Portable Toilet Finder network, including regional
              listings, local city pages, and search-focused articles.
            </p>
            <p className="mt-3 text-base leading-relaxed text-gray-600">
              These placements create additional opportunities for potential customers to
              discover Old Pueblo and visit their website.
            </p>
          </div>
        </section>

        {/* Three benefits */}
        <section className="bg-gray-50 py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto grid max-w-xl gap-8 sm:max-w-none sm:grid-cols-3">
              {BENEFITS.map((benefit) => (
                <div
                  key={benefit.title}
                  className="rounded-3xl border border-gray-200/70 bg-white p-8 shadow-[0_12px_32px_-16px_rgba(15,27,45,0.18)]"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-gray-200 bg-white text-navy-900">
                    {benefit.icon}
                  </div>
                  <h3 className="mt-5 text-lg font-bold text-navy-900">{benefit.title}</h3>
                  <p className="mt-2 text-base leading-relaxed text-gray-600">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Primary CTA */}
        <section className="bg-white py-20 sm:py-24">
          <div className="mx-auto max-w-2xl px-4 text-center sm:px-6 lg:px-8">
            <h2 className="text-3xl font-extrabold tracking-tight text-navy-900 sm:text-4xl">
              Interested in Getting Your Rental Business Featured?
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-gray-500">
              Let&apos;s explore opportunities to increase your rental company&apos;s visibility
              across our growing directory network.
            </p>
            <div className="mt-8">
              <a
                href={BOOKING_URL}
                className="inline-flex items-center justify-center rounded-lg bg-orange-500 px-7 py-3.5 text-base font-semibold text-white shadow-sm transition-all hover:bg-orange-600 hover:shadow-md active:scale-[0.98]"
              >
                Discuss Directory Placement
              </a>
            </div>
          </div>
        </section>

        {/* Our directory network — existing shared component */}
        <PlatformEcosystem />

        <FinalCTA
          headline="Let's Get Your Rental Business More Exposure"
          copy="See how our directory network could help potential customers discover your business in the markets you serve."
          buttonText="Get Featured in Our Directory Network"
        />
      </main>
      <Footer />
    </>
  );
}
