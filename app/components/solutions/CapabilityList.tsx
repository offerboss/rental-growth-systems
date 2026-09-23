import type { Capability } from "../../../content/solutions";
import { renderInlineText } from "../content/ContentBlocks";

export default function CapabilityList({ capabilities }: { capabilities: Capability[] }) {
  return (
    <div className="grid gap-6 sm:grid-cols-2">
      {capabilities.map((capability) => (
        <div key={capability.title} className="rounded-2xl border border-gray-200 bg-gray-50 p-6">
          <h3 className="text-lg font-bold text-navy-900">{capability.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-gray-500">
            {renderInlineText(capability.description)}
          </p>
        </div>
      ))}
    </div>
  );
}
