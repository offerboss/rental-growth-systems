import Link from "next/link";

import type { Solution } from "../../../content/solutions";
import { getPillarBySolutionSlug } from "../pillars";

export default function SolutionCard({ solution }: { solution: Solution }) {
  const pillar = getPillarBySolutionSlug(solution.slug);

  return (
    <article className="group flex flex-col rounded-3xl border border-gray-200/70 bg-white p-8 shadow-[0_12px_32px_-16px_rgba(15,27,45,0.18)] transition-shadow hover:shadow-[0_16px_40px_-16px_rgba(15,27,45,0.26)]">
      {pillar && (
        <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-orange-100/80">
          {pillar.icon}
        </div>
      )}
      <h3 className="mt-6 text-2xl font-bold leading-tight tracking-tight text-navy-900">
        <Link href={`/solutions/${solution.slug}`} className="transition-colors hover:text-orange-600">
          {solution.name}
        </Link>
      </h3>
      <p className="mt-4 flex-1 text-base leading-relaxed text-gray-500">
        {pillar?.copy ?? solution.heroSubheadline}
      </p>
      <Link
        href={`/solutions/${solution.slug}`}
        className="mt-8 inline-flex items-center gap-2 text-base font-semibold text-orange-500 transition-colors group-hover:text-orange-600"
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
  );
}
