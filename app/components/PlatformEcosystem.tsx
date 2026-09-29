import Image from "next/image";
import { EXTERNAL_LINK_PROPS, PLATFORM_URLS } from "../lib/links";
import ptfLogo from "../../public/images/PTF Logo.png";
import rdfLogo from "../../public/images/Rolloff Dumpster Finder Logo.png";
import erfLogo from "../../public/images/event-rental-finder-logo-square.png";
import crfLogo from "../../public/images/crf-logo.png";

const LIVE_STYLE = "bg-emerald-100 text-emerald-700";

// The logo files carry different amounts of built-in padding, so each gets a
// scale that evens out how large the visible artwork looks inside the fixed-height slot.
// The Rolloff file has an opaque near-white background, so it also gets a slight brightness lift.
const PLATFORMS = [
  {
    name: "Portable Toilet Finder",
    href: PLATFORM_URLS.portableToiletFinder,
    status: "LIVE" as const,
    description: "A dedicated directory for portable toilet rental companies.",
    cta: "Visit Site",
    color: LIVE_STYLE,
    logo: { src: ptfLogo, scale: "scale-[1.15]" },
  },
  {
    name: "Rolloff Dumpster Finder",
    href: PLATFORM_URLS.rolloffDumpsterFinder,
    status: "LIVE" as const,
    description: "Connects customers with rolloff dumpster rental companies.",
    cta: "Visit Site",
    color: LIVE_STYLE,
    logo: { src: rdfLogo, scale: "scale-[1.55] [filter:brightness(1.03)]" },
  },
  {
    name: "Event Rental Finder",
    href: PLATFORM_URLS.eventRentalFinder,
    status: "LIVE" as const,
    description: "A dedicated directory for event rental companies.",
    cta: "Visit Site",
    color: LIVE_STYLE,
    logo: { src: erfLogo, scale: "scale-[1.28]" },
  },
  {
    name: "Construction Rental Finder",
    href: PLATFORM_URLS.constructionRentalFinder,
    status: "LIVE" as const,
    description: "A dedicated directory for construction rental companies.",
    cta: "Visit Site",
    color: LIVE_STYLE,
    logo: { src: crfLogo, scale: "scale-[1.2]" },
  },
];

function PlatformMark({ name, logo }: { name: string; logo: (typeof PLATFORMS)[number]["logo"] }) {
  if (!logo) {
    return (
      <div className="flex flex-col items-center gap-3">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gray-50 ring-1 ring-gray-100">
          <svg className="h-8 w-8 text-navy-700" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75a4.5 4.5 0 01-4.884 4.484c-1.076-.091-2.264.071-2.95.904l-7.152 8.684a2.548 2.548 0 11-3.586-3.586l8.684-7.152c.833-.686.995-1.874.904-2.95a4.5 4.5 0 016.336-4.486l-3.276 3.276a3.004 3.004 0 002.25 2.25l3.276-3.276c.256.565.398 1.192.398 1.852z" />
          </svg>
        </div>
        <h3 className="text-lg font-bold leading-snug text-navy-900">{name}</h3>
      </div>
    );
  }

  return (
    <h3 className="relative h-full w-full">
      <Image
        src={logo.src}
        alt={name}
        fill
        sizes="(min-width: 1024px) 260px, (min-width: 640px) 45vw, 90vw"
        className={`object-contain mix-blend-multiply ${logo.scale}`}
      />
    </h3>
  );
}

export default function PlatformEcosystem() {
  return (
    <section className="bg-white py-20 sm:py-28" id="directories">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-orange-500">
            Our Platforms
          </p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-navy-900 sm:text-4xl">
            Powered by a Growing Rental Industry Ecosystem
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            Rental Growth Systems builds and operates these category-specific directories, connecting real customers with trusted rental companies.
          </p>
        </div>

        {/* Platform cards */}
        <div className="mx-auto mt-14 grid max-w-md gap-6 sm:max-w-none sm:grid-cols-2 lg:grid-cols-4">
          {PLATFORMS.map((platform) => (
            <article
              key={platform.name}
              className="group flex flex-col items-center rounded-3xl border border-gray-200/70 bg-white p-7 text-center shadow-[0_12px_32px_-16px_rgba(15,27,45,0.18)] transition-shadow hover:shadow-[0_16px_40px_-16px_rgba(15,27,45,0.26)]"
            >
              {/* Brand mark — fixed-height slot keeps pills and CTAs aligned across cards */}
              <div className="flex h-32 w-full items-center justify-center">
                <PlatformMark name={platform.name} logo={platform.logo} />
              </div>

              {/* Status pill */}
              <span className={`mt-4 inline-flex items-center rounded-full px-4 py-1 text-xs font-bold uppercase tracking-wider ${platform.color}`}>
                {platform.status}
              </span>

              {/* Description */}
              <p className="mt-4 flex-1 text-base leading-relaxed text-gray-500">
                {platform.description}
              </p>

              {/* CTA */}
              <a
                href={platform.href}
                {...(platform.href ? EXTERNAL_LINK_PROPS : {})}
                className="mt-6 inline-flex items-center gap-2 text-base font-semibold text-orange-500 transition-colors hover:text-orange-600"
              >
                {platform.cta}
                <svg className="h-5 w-5 transition-transform group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
