import type { ChallengeItem } from "../../../content/industries";

export default function ChallengeList({ challenges }: { challenges: ChallengeItem[] }) {
  return (
    <div className="grid gap-6 sm:grid-cols-2">
      {challenges.map((challenge, index) => (
        <div
          key={challenge.title}
          className="flex gap-5 rounded-2xl border border-gray-200 bg-gray-50 p-6"
        >
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-orange-100 text-sm font-bold text-orange-600">
            {String(index + 1).padStart(2, "0")}
          </span>
          <div>
            <h3 className="text-lg font-bold text-navy-900">{challenge.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-gray-500">{challenge.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
