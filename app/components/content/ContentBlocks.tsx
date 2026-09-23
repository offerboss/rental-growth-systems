// Renders the structured content blocks from content/resources.ts using the
// same typography already established on the homepage sections.
//
// A run of text may contain one or more "[label](url)" links — the only
// markup the content data uses — which get turned into real <a> tags here.
// External links (http/https) reuse the site's existing EXTERNAL_LINK_PROPS.

import type { ReactNode } from "react";

import { EXTERNAL_LINK_PROPS } from "../../lib/links";
import type { ContentBlock } from "../../../content/resources";

const INLINE_LINK = /\[([^\]]+)\]\(([^)]+)\)/g;

// Exported so other content types (e.g. content/solutions.ts capability
// descriptions) can reuse the same "[label](url)" inline-link parsing
// instead of a second implementation.
export function renderInlineText(text: string) {
  const nodes: ReactNode[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;
  let key = 0;

  INLINE_LINK.lastIndex = 0;
  while ((match = INLINE_LINK.exec(text)) !== null) {
    if (match.index > lastIndex) {
      nodes.push(text.slice(lastIndex, match.index));
    }
    const [, label, href] = match;
    const isExternal = href.startsWith("http");
    nodes.push(
      <a
        key={key++}
        href={href}
        className="font-semibold text-orange-600 underline underline-offset-2 transition-colors hover:text-orange-700"
        {...(isExternal ? EXTERNAL_LINK_PROPS : {})}
      >
        {label}
      </a>
    );
    lastIndex = match.index + match[0].length;
  }
  if (lastIndex < text.length) {
    nodes.push(text.slice(lastIndex));
  }
  return nodes;
}

function BlockNode({ block }: { block: ContentBlock }) {
  if (block.type === "subheading") {
    return (
      <h3 className="mt-2 text-xl font-bold text-navy-900">{renderInlineText(block.text)}</h3>
    );
  }

  if (block.type === "list") {
    const ListTag = block.style === "ordered" ? "ol" : "ul";
    return (
      <ListTag
        className={`space-y-2 pl-5 text-base leading-relaxed text-gray-600 ${
          block.style === "ordered" ? "list-decimal" : "list-disc"
        }`}
      >
        {block.items.map((item, index) => (
          <li key={index}>{renderInlineText(item)}</li>
        ))}
      </ListTag>
    );
  }

  return <p className="text-base leading-relaxed text-gray-600">{renderInlineText(block.text)}</p>;
}

export default function ContentBlocks({ blocks }: { blocks: ContentBlock[] }) {
  return (
    <div className="space-y-5">
      {blocks.map((block, index) => (
        <BlockNode key={index} block={block} />
      ))}
    </div>
  );
}
