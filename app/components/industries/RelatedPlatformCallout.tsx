import { EXTERNAL_LINK_PROPS } from "../../lib/links";
import type { RelatedPlatform } from "../../../content/industries";

// Pill colors match PlatformEcosystem.tsx's LIVE/COMING SOON treatment.
const LIVE_STYLE = "bg-emerald-100 text-emerald-700";
const SOON_STYLE = "bg-gray-100 text-navy-600";

export default function RelatedPlatformCallout({ platform }: { platform: RelatedPlatform }) {
  const isLive = platform.status === "live";

  return (
    <div className="rounded-3xl border border-gray-200/70 bg-gray-50 p-8">
      <span
        className={`inline-flex items-center rounded-full px-4 py-1 text-xs font-bold uppercase tracking-wider ${
          isLive ? LIVE_STYLE : SOON_STYLE
        }`}
      >
        {isLive ? "Live" : "Coming Soon"}
      </span>
      <h3 className="mt-4 text-xl font-bold text-navy-900">{platform.name}</h3>
      <p className="mt-3 text-base leading-relaxed text-gray-600">{platform.description}</p>
      {isLive && platform.url && (
        <a
          href={platform.url}
          {...EXTERNAL_LINK_PROPS}
          className="mt-5 inline-flex items-center gap-2 text-base font-semibold text-orange-500 transition-colors hover:text-orange-600"
        >
          Visit {platform.name}
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
        </a>
      )}
    </div>
  );
}
