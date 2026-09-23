import Image from "next/image";
import { BOOKING_URL } from "../lib/links";

const TRUST_POINTS = [
  {
    icon: (
      <svg className="h-5 w-5 text-orange-500" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016A3.001 3.001 0 0020.25 9.35m-16.5 0c0-1.18.688-2.2 1.688-2.676L7.5 3h9l2.063 3.674A3.001 3.001 0 0120.25 9.35" />
      </svg>
    ),
    text: "Rental Industry Focused",
  },
  {
    icon: (
      <svg className="h-5 w-5 text-orange-500" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
      </svg>
    ),
    text: "Proven Systems",
  },
  {
    icon: (
      <svg className="h-5 w-5 text-orange-500" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
      </svg>
    ),
    text: "Real Growth Results",
  },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white" id="hero">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.15fr] lg:gap-12">
          {/* Left column — copy */}
          <div className="max-w-xl">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-50 px-4 py-1.5 text-sm font-medium text-orange-700">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-orange-500" />
              Growth Systems for Rental Companies
            </div>

            <h1 className="text-4xl font-extrabold leading-[1.15] tracking-tight text-navy-900 sm:text-5xl xl:text-[3.5rem]">
              Turn Your Rental Business Into a{" "}
              <span className="text-orange-500">Profit Machine</span>
            </h1>

            <p className="mt-6 text-lg leading-relaxed text-gray-500 sm:text-xl">
              Rental Growth Systems helps rental companies acquire more customers,
              build smarter digital systems, and create more revenue from every
              customer relationship.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-4">
              <a
                href={BOOKING_URL}
                className="inline-flex items-center justify-center rounded-lg bg-orange-500 px-6 py-3 text-base font-semibold text-white shadow-sm transition-all hover:bg-orange-600 hover:shadow-md active:scale-[0.98]"
              >
                Book a Quick Fit Call
              </a>
              <a
                href="#how-it-works"
                className="inline-flex items-center justify-center rounded-lg border border-gray-300 bg-white px-6 py-3 text-base font-semibold text-navy-900 transition-all hover:border-gray-400 hover:bg-gray-50 active:scale-[0.98]"
              >
                See How It Works
              </a>
            </div>

            {/* Trust points */}
            <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3">
              {TRUST_POINTS.map((point) => (
                <div key={point.text} className="flex items-center gap-2 text-sm font-medium text-gray-600">
                  {point.icon}
                  {point.text}
                </div>
              ))}
            </div>
          </div>

          {/* Right column — hero image */}
          <div className="flex items-center justify-center lg:justify-end">
            <Image
              src="/images/hero-dashboard.png"
              alt="Rental Growth Systems dashboard showing inquiries, bookings and revenue, beside a mobile directory listing rental companies"
              width={1448}
              height={1086}
              priority
              sizes="(min-width: 1280px) 700px, (min-width: 1024px) 55vw, 100vw"
              className="h-auto w-full max-w-xl lg:max-w-none xl:w-[112%] xl:-mr-[8%]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
