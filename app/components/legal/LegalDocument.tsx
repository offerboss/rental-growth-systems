// Renders content/legal.ts blocks using the same typography as
// ContentBlocks.tsx (see app/components/content/ContentBlocks.tsx), reusing
// its inline-link parser for the one "[label](url)" reference in these
// policies. Kept separate from ContentBlocks/content/resources.ts since
// legal pages are not resources content.

import { renderInlineText } from "../content/ContentBlocks";
import type { LegalBlock } from "../../../content/legal";

function renderMultiline(text: string) {
  const lines = text.split("\n");
  return lines.map((line, index) => (
    <span key={index}>
      {renderInlineText(line)}
      {index < lines.length - 1 && <br />}
    </span>
  ));
}

function BlockNode({ block }: { block: LegalBlock }) {
  if (block.type === "subheading") {
    return <h3 className="mt-2 text-xl font-bold text-navy-900">{block.text}</h3>;
  }

  if (block.type === "list") {
    return (
      <ul className="list-disc space-y-2 pl-5 text-base leading-relaxed text-gray-600">
        {block.items.map((item) => (
          <li key={item}>{renderInlineText(item)}</li>
        ))}
      </ul>
    );
  }

  return (
    <p className="text-base leading-relaxed text-gray-600">{renderMultiline(block.text)}</p>
  );
}

export default function LegalDocument({ blocks }: { blocks: LegalBlock[] }) {
  return (
    <div className="space-y-5">
      {blocks.map((block, index) => (
        <BlockNode key={index} block={block} />
      ))}
    </div>
  );
}
