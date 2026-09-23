import { BOOKING_URL } from "../lib/links";

const DEFAULT_HEADLINE = "Build the Systems Behind Your Next Stage of Growth";
const DEFAULT_COPY =
  "Let's talk about your goals and how Rental Growth Systems can help you get there.";

// Optional overrides let other pages (e.g. /industries/[slug]) adapt the
// supporting copy while keeping the same section — the homepage's prop-less
// <FinalCTA /> call renders the exact copy above, unchanged.
export default function FinalCTA({
  headline = DEFAULT_HEADLINE,
  copy = DEFAULT_COPY,
}: {
  headline?: string;
  copy?: string;
} = {}) {
  return (
    <section className="relative overflow-hidden bg-navy-900 py-20 sm:py-28" id="book-call">
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 right-0 h-[500px] w-[500px] rounded-full bg-orange-500/10 blur-3xl" />
        <div className="absolute -bottom-40 left-0 h-[400px] w-[400px] rounded-full bg-navy-700/50 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
          {headline}
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-lg text-gray-300">{copy}</p>
        <div className="mt-8">
          <a
            href={BOOKING_URL}
            className="inline-flex items-center rounded-lg bg-orange-500 px-8 py-3.5 text-base font-semibold text-white shadow-lg transition-all hover:bg-orange-600 hover:shadow-xl active:scale-[0.98]"
          >
            Book a Quick Fit Call
          </a>
        </div>
      </div>
    </section>
  );
}
