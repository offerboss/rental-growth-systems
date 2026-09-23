// Renders an industry's acquisitionSystems/infrastructureSystems/customerValueSystems
// content using the same three-pillar card chrome, icons, and labels as the
// homepage's ThreeSystems section (app/components/pillars.tsx), so the page
// reads as part of the same system rather than a new one. Each card also
// links to its full solution page.

import Link from "next/link";

import type { ContentBlock } from "../../../content/resources";
import ContentBlocks from "../content/ContentBlocks";
import { PILLARS, type PillarKey } from "../pillars";

export default function ThreeSystemsForIndustry({
  acquisitionSystems,
  infrastructureSystems,
  customerValueSystems,
}: {
  acquisitionSystems: ContentBlock[];
  infrastructureSystems: ContentBlock[];
  customerValueSystems: ContentBlock[];
}) {
  const content: Record<PillarKey, ContentBlock[]> = {
    acquisition: acquisitionSystems,
    infrastructure: infrastructureSystems,
    customerValue: customerValueSystems,
  };

  return (
    <div className="grid gap-8 lg:grid-cols-3">
      {PILLARS.map((pillar) => (
        <article
          key={pillar.key}
          className="group flex flex-col rounded-3xl border border-gray-200/70 bg-white p-8 shadow-[0_12px_32px_-16px_rgba(15,27,45,0.18)]"
        >
          <div className="flex items-end gap-4">
            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-orange-100/80">
              {pillar.icon}
            </div>
            <p className="min-w-0 pb-1 text-[15px] font-medium leading-snug text-orange-500">
              {pillar.label}
            </p>
          </div>
          <h3 className="mt-6 text-xl font-bold leading-tight tracking-tight text-navy-900">
            {pillar.headline}
          </h3>
          <div className="mt-4 flex-1">
            <ContentBlocks blocks={content[pillar.key]} />
          </div>
          <Link
            href={`/solutions/${pillar.solutionSlug}`}
            className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-orange-500 transition-colors hover:text-orange-600"
          >
            View the {pillar.label} Page
            <svg
              className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
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
  );
}
