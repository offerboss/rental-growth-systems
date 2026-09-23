import Link from "next/link";

import type { Industry } from "../../../content/industries";

export default function RelatedIndustryCallout({ industry }: { industry: Industry }) {
  return (
    <div className="mt-16 rounded-3xl border border-gray-200/70 bg-gray-50 p-8">
      <p className="text-sm font-semibold uppercase tracking-wider text-orange-500">
        Related Industry
      </p>
      <h2 className="mt-2 text-xl font-bold text-navy-900">
        Growth Systems for {industry.name} Companies
      </h2>
      <p className="mt-3 text-base leading-relaxed text-gray-600">
        See how acquisition, infrastructure, and customer value systems come together
        specifically for {industry.name.toLowerCase()} businesses.
      </p>
      <Link
        href={`/industries/${industry.slug}`}
        className="mt-5 inline-flex items-center gap-2 text-base font-semibold text-orange-500 transition-colors hover:text-orange-600"
      >
        View the {industry.name} Page
        <svg
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
        </svg>
      </Link>
    </div>
  );
}
