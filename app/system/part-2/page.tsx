import type { Metadata } from "next";
import Link from "next/link";

import Footer from "../../components/Footer";
import FinalCTA from "../../components/FinalCTA";
import Header from "../../components/Header";
import YouTubeEmbed from "../../components/system/YouTubeEmbed";
import { BOOKING_URL } from "../../lib/links";

export const metadata: Metadata = {
  title: "The 5 Stages of Rental Growth Systems — Part 2",
  description:
    "A behind-the-scenes look at how Rental Growth Systems helps rental companies automate operations, streamline communication, and maximize profit from existing customers.",
  robots: {
    index: false,
    follow: true,
  },
};

const STAGES = [
  {
    number: "Stage 4",
    title: "Build Systems & Efficiency",
    description:
      "See how we streamline the rental process with CRM pipelines, quote preparation, automated follow-ups, rental agreements, electronic signatures, invoicing, booking confirmations, and customer communication workflows.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 011.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.559.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.893.149c-.425.07-.765.383-.93.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 01-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.397.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 01-.12-1.45l.527-.737c.25-.35.273-.806.108-1.204-.165-.397-.505-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.11v-1.094c0-.55.398-1.019.94-1.11l.894-.148c.424-.071.765-.384.93-.78.165-.399.143-.855-.108-1.205l-.527-.738a1.125 1.125 0 01.12-1.45l.773-.773a1.125 1.125 0 011.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894z"
        />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    number: "Stage 5",
    title: "Generate Repeat Revenue & Maximize Customer Value",
    description:
      "Discover how automated review requests, customer reactivation, referral campaigns, and repeat rental systems can help rental companies generate more revenue from existing customer relationships.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 00-3.7-3.7 48.678 48.678 0 00-7.324 0 4.006 4.006 0 00-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3l-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 003.7 3.7 48.656 48.656 0 007.324 0 4.006 4.006 0 003.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3l-3 3"
        />
      </svg>
    ),
  },
];

export default function SystemPartTwoPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero + video */}
        <section className="bg-white pt-14 pb-16 sm:pt-20 sm:pb-20">
          <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
            <p className="text-sm font-semibold uppercase tracking-wider text-orange-500">
              The 5 Stages of Rental Growth Systems — Part 2 of 2
            </p>
            <h1 className="mt-3 text-4xl font-extrabold leading-tight tracking-tight text-navy-900 sm:text-5xl">
              How We Help Rental Companies Automate Operations &amp; Maximize Profits
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-gray-500">
              Discover how we help rental business owners streamline their operations, automate
              customer communications, and generate more revenue from their existing customers.
            </p>
          </div>

          <div className="mx-auto mt-10 max-w-5xl px-4 sm:px-6 lg:px-8">
            <YouTubeEmbed
              videoId="uIE3PlkAHoU"
              title="How We Help Rental Companies Automate Operations & Maximize Profits"
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
              Ready to spend less time managing your rental business and more time growing it?
              Let&apos;s explore how these systems could work for you.
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
                Two Stages Covered in This Video
              </h2>
            </div>

            <div className="mx-auto mt-14 grid max-w-3xl gap-8 sm:grid-cols-2">
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

        {/* Part 1 navigation */}
        <section className="bg-white py-20 sm:py-24">
          <div className="mx-auto max-w-2xl px-4 text-center sm:px-6 lg:px-8">
            <h2 className="text-3xl font-extrabold tracking-tight text-navy-900 sm:text-4xl">
              Missed Part 1?
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-gray-500">
              See how we help rental companies attract more customers, build trust, and convert
              more inquiries into booked rental jobs.
            </p>
            <div className="mt-8">
              <Link
                href="/system/part-1"
                className="inline-flex items-center justify-center rounded-lg bg-orange-500 px-7 py-3.5 text-base font-semibold text-white shadow-sm transition-all hover:bg-orange-600 hover:shadow-md active:scale-[0.98]"
              >
                Watch Part 1: Attract &amp; Convert More Rental Customers
              </Link>
            </div>
          </div>
        </section>

        <FinalCTA
          headline="Ready to Build a More Profitable Rental Business?"
          copy="Let's identify opportunities to attract more customers, automate your operations, and maximize the value of every rental client."
          buttonText="Book Your Rental Growth Strategy Call"
        />
      </main>
      <Footer />
    </>
  );
}
