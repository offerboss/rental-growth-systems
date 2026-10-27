import type { Metadata } from "next";
import Link from "next/link";

import Footer from "../../components/Footer";
import FinalCTA from "../../components/FinalCTA";
import Header from "../../components/Header";
import YouTubeEmbed from "../../components/system/YouTubeEmbed";
import { BOOKING_URL } from "../../lib/links";

export const metadata: Metadata = {
  title: "The 5 Stages of Rental Growth Systems — Part 1",
  description:
    "A behind-the-scenes look at the marketing and automation systems Rental Growth Systems built for Old Pueblo Restroom Trailers, and the five-stage framework behind it.",
  robots: {
    index: false,
    follow: true,
  },
};

const STAGES = [
  {
    number: "Stage 1",
    title: "Get Found",
    description:
      "How we combine high-intent Google Ads, dedicated landing pages, and our rental directory network to help businesses attract more qualified prospects.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
      </svg>
    ),
  },
  {
    number: "Stage 2",
    title: "Build Trust",
    description:
      "How professional positioning, customer experience, and review generation help rental companies build credibility and win more customers.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
      </svg>
    ),
  },
  {
    number: "Stage 3",
    title: "Capture & Convert Leads",
    description:
      "How our Speed-to-Lead system, CRM, and automated follow-up help turn more rental inquiries into paying customers.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
];

export default function SystemPartOnePage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero + video */}
        <section className="bg-white pt-14 pb-16 sm:pt-20 sm:pb-20">
          <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
            <p className="text-sm font-semibold uppercase tracking-wider text-orange-500">
              The 5 Stages of Rental Growth Systems — Part 1 of 2
            </p>
            <h1 className="mt-3 text-4xl font-extrabold leading-tight tracking-tight text-navy-900 sm:text-5xl">
              How We Help Rental Companies Attract More Customers &amp; Book More Jobs
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-gray-500">
              Go behind the scenes of the marketing and automation systems we built for Old
              Pueblo Restroom Trailers in Tucson, Arizona, and discover how our five-stage
              framework helps rental businesses grow.
            </p>
          </div>

          <div className="mx-auto mt-10 max-w-5xl px-4 sm:px-6 lg:px-8">
            <YouTubeEmbed
              videoId="zPn4zdSV5rM"
              title="How We Help Rental Companies Attract More Customers & Book More Jobs"
            />
          </div>

          <div className="mx-auto mt-9 max-w-2xl px-4 text-center sm:px-6 lg:px-8">
            <a
              href={BOOKING_URL}
              className="inline-flex items-center justify-center rounded-lg bg-orange-500 px-7 py-3.5 text-base font-semibold text-white shadow-sm transition-all hover:bg-orange-600 hover:shadow-md active:scale-[0.98]"
            >
              Schedule Your Rental Growth Strategy Call
            </a>
            <p className="mt-4 text-base italic leading-relaxed text-gray-500">
              Let&apos;s explore how these systems could help your rental business attract more
              customers and convert more opportunities into booked jobs.
            </p>
          </div>
        </section>

        {/* What you'll discover */}
        <section className="bg-gray-50 py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-sm font-semibold uppercase tracking-wider text-orange-500">
                What You&apos;ll Discover
              </p>
              <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-navy-900 sm:text-4xl">
                Three Stages Covered in This Video
              </h2>
            </div>

            <div className="mx-auto mt-14 grid max-w-xl gap-8 sm:max-w-none sm:grid-cols-3">
              {STAGES.map((stage) => (
                <div
                  key={stage.title}
                  className="rounded-3xl border border-gray-200/70 bg-white p-8 shadow-[0_12px_32px_-16px_rgba(15,27,45,0.18)]"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-gray-200 bg-white text-navy-900">
                    {stage.icon}
                  </div>
                  <p className="mt-5 text-xs font-bold uppercase tracking-wider text-orange-500">
                    {stage.number}
                  </p>
                  <h3 className="mt-1 text-lg font-bold text-navy-900">{stage.title}</h3>
                  <p className="mt-2 text-base leading-relaxed text-gray-600">
                    {stage.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Part 2 navigation */}
        <section className="bg-white py-20 sm:py-24">
          <div className="mx-auto max-w-2xl px-4 text-center sm:px-6 lg:px-8">
            <h2 className="text-3xl font-extrabold tracking-tight text-navy-900 sm:text-4xl">
              Ready to See the Next Two Stages?
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-gray-500">
              Discover how we help rental companies streamline operations, automate customer
              communications, and generate more repeat revenue.
            </p>
            <div className="mt-8">
              <Link
                href="/system/part-2"
                className="inline-flex items-center justify-center rounded-lg bg-orange-500 px-7 py-3.5 text-base font-semibold text-white shadow-sm transition-all hover:bg-orange-600 hover:shadow-md active:scale-[0.98]"
              >
                Watch Part 2: Automate Operations &amp; Maximize Profits
              </Link>
            </div>
          </div>
        </section>

        <FinalCTA
          headline="Build the Systems Behind Your Next Stage of Growth"
          copy="Let's talk about your goals and how Rental Growth Systems can help you get there."
          buttonText="Book Your Rental Growth Strategy Call"
        />
      </main>
      <Footer />
    </>
  );
}
