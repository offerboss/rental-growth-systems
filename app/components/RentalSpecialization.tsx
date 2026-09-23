const POINTS = [
  {
    title: "Rental-Focused Strategy",
    description:
      "Every system is built around how rental companies actually operate — from quoting and scheduling to seasonal demand shifts.",
    icon: (
      <svg className="h-7 w-7 text-orange-500" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
      </svg>
    ),
  },
  {
    title: "Search Visibility",
    description:
      "We put your business where high-intent customers are already searching — through SEO, directories, and local digital strategies.",
    icon: (
      <svg className="h-7 w-7 text-orange-500" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: "Automation & Follow-Up",
    description:
      "Automated quoting, SMS/email sequences, and AI-powered responses keep your pipeline moving without manual effort.",
    icon: (
      <svg className="h-7 w-7 text-orange-500" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
  },
  {
    title: "Retention & Referrals",
    description:
      "Review generation, reactivation campaigns, and referral systems turn one-time renters into long-term revenue.",
    icon: (
      <svg className="h-7 w-7 text-orange-500" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
      </svg>
    ),
  },
];

export default function RentalSpecialization() {
  return (
    <section className="bg-white py-20 sm:py-28" id="about">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-orange-500">
            Why Rental Growth Systems
          </p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-navy-900 sm:text-4xl">
            Built Specifically for Rental Companies
          </h2>
        </div>

        {/* Grid */}
        <div className="mt-14 grid gap-8 sm:grid-cols-2">
          {POINTS.map((point) => (
            <div
              key={point.title}
              className="flex gap-5 rounded-2xl border border-gray-200 bg-gray-50 p-6 transition-all hover:bg-white hover:shadow-md hover:border-gray-300"
            >
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-orange-50">
                {point.icon}
              </div>
              <div>
                <h3 className="text-lg font-bold text-navy-900">{point.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-500">
                  {point.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
