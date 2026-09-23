import Link from "next/link";

import { PILLARS } from "./pillars";

export default function ThreeSystems() {
  return (
    <section className="bg-gray-50 py-20 sm:py-28" id="what-we-build">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-orange-500">
            What We Build
          </p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-navy-900 sm:text-4xl">
            Three Systems. One Goal: A More Profitable Rental Business.
          </h2>
        </div>

        {/* Cards */}
        <div className="mx-auto mt-14 grid max-w-xl gap-8 lg:max-w-none lg:grid-cols-3">
          {PILLARS.map((pillar) => (
            <article
              key={pillar.key}
              className="group flex flex-col rounded-3xl border border-gray-200/70 bg-white p-8 shadow-[0_12px_32px_-16px_rgba(15,27,45,0.18)] transition-shadow hover:shadow-[0_16px_40px_-16px_rgba(15,27,45,0.26)] sm:p-10 lg:p-8 xl:p-10"
            >
              {/* Icon circle + category label */}
              <div className="flex items-end gap-4">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-orange-100/80">
                  {pillar.icon}
                </div>
                <p className="min-w-0 pb-1 text-[15px] font-medium leading-snug text-orange-500">
                  {pillar.label}
                </p>
              </div>

              {/* Headline */}
              <h3 className="mt-6 text-2xl font-bold leading-tight tracking-tight text-navy-900 lg:min-h-[3.75rem]">
                {pillar.headline}
              </h3>

              {/* Body */}
              <p className="mt-4 flex-1 text-base leading-relaxed text-gray-500">
                {pillar.copy}
              </p>

              <Link
                href={`/solutions/${pillar.solutionSlug}`}
                className="mt-8 inline-flex items-center gap-2 text-base font-semibold text-orange-500 transition-colors hover:text-orange-600"
              >
                Learn More
                <svg
                  className="h-5 w-5 transition-transform group-hover:translate-x-0.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
