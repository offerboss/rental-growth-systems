import Link from "next/link";

import type { Resource } from "../../../content/resources";

export default function ResourceCard({ resource }: { resource: Resource }) {
  return (
    <article className="group flex flex-col rounded-3xl border border-gray-200/70 bg-white p-7 shadow-[0_12px_32px_-16px_rgba(15,27,45,0.18)] transition-shadow hover:shadow-[0_16px_40px_-16px_rgba(15,27,45,0.26)]">
      <p className="text-xs font-bold uppercase tracking-wider text-orange-500">
        {resource.category}
      </p>
      <h3 className="mt-3 text-xl font-bold leading-snug text-navy-900">
        <Link
          href={`/resources/${resource.slug}`}
          className="transition-colors hover:text-orange-600"
        >
          {resource.title}
        </Link>
      </h3>
      <p className="mt-3 flex-1 text-base leading-relaxed text-gray-500">{resource.excerpt}</p>
      <div className="mt-5 flex items-center justify-between">
        <span className="text-sm text-gray-400">{resource.readingTime}</span>
        <Link
          href={`/resources/${resource.slug}`}
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-orange-500 transition-colors group-hover:text-orange-600"
        >
          Read More
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
      </div>
    </article>
  );
}
