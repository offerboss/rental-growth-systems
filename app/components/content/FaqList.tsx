// Shared FAQ block for resource articles and solution pages. Whatever is
// rendered here should exactly match any FAQPage JSON-LD built from the same
// items (see app/lib/seo/json-ld.ts faqJsonLd) — the schema must mirror
// visible content, not a superset of it.

export type FaqEntry = {
  question: string;
  answer: string;
};

export default function FaqList({ items }: { items: FaqEntry[] }) {
  if (items.length === 0) return null;

  return (
    <div className="mt-12 border-t border-gray-200 pt-10">
      <h2 className="text-2xl font-bold tracking-tight text-navy-900">
        Frequently Asked Questions
      </h2>
      <div className="mt-6 space-y-6">
        {items.map((item) => (
          <div key={item.question}>
            <h3 className="text-lg font-bold text-navy-900">{item.question}</h3>
            <p className="mt-2 text-base leading-relaxed text-gray-600">{item.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
