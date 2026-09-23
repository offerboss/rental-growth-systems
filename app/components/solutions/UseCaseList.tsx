import Link from "next/link";

import { getIndustryBySlug } from "../../../content/industries";
import type { SolutionUseCase } from "../../../content/solutions";

export default function UseCaseList({ useCases }: { useCases: SolutionUseCase[] }) {
  return (
    <div className="grid gap-6 sm:grid-cols-2">
      {useCases.map((useCase) => {
        const industry = getIndustryBySlug(useCase.industrySlug);
        return (
          <div key={useCase.industrySlug} className="rounded-2xl border border-gray-200 bg-gray-50 p-6">
            <p className="text-xs font-bold uppercase tracking-wider text-orange-500">
              {industry ? (
                <Link
                  href={`/industries/${industry.slug}`}
                  className="transition-colors hover:text-orange-600"
                >
                  {industry.name}
                </Link>
              ) : (
                useCase.industrySlug
              )}
            </p>
            <p className="mt-2 text-sm leading-relaxed text-gray-600">{useCase.scenario}</p>
          </div>
        );
      })}
    </div>
  );
}
