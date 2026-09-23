// Renders one or more JSON-LD objects (see app/lib/seo/json-ld.ts) as a
// <script type="application/ld+json"> tag. `<` is escaped to its unicode
// equivalent so a value containing "</script>" can't break out of the tag.

type JsonLdData = Record<string, unknown> | Record<string, unknown>[];

export default function JsonLd({ data }: { data: JsonLdData }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}
