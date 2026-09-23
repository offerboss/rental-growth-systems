export default function OutcomeList({ outcomes }: { outcomes: string[] }) {
  return (
    <ul className="grid gap-4 sm:grid-cols-2">
      {outcomes.map((outcome) => (
        <li
          key={outcome}
          className="flex items-start gap-3 rounded-2xl border border-gray-200 bg-white p-5"
        >
          <svg
            className="mt-0.5 h-5 w-5 shrink-0 text-orange-500"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span className="text-base leading-relaxed text-gray-700">{outcome}</span>
        </li>
      ))}
    </ul>
  );
}
