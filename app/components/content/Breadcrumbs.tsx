import Link from "next/link";

export type BreadcrumbTrailItem = {
  name: string;
  /** Omit on the last item — it renders as the current page, not a link. */
  href?: string;
};

export default function Breadcrumbs({ items }: { items: BreadcrumbTrailItem[] }) {
  return (
    <nav aria-label="Breadcrumb" className="text-sm text-gray-500">
      <ol className="flex flex-wrap items-center gap-1.5">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={item.name} className="flex items-center gap-1.5">
              {index > 0 && (
                <span aria-hidden="true" className="text-gray-300">
                  /
                </span>
              )}
              {item.href && !isLast ? (
                <Link href={item.href} className="transition-colors hover:text-navy-900">
                  {item.name}
                </Link>
              ) : (
                <span
                  className={isLast ? "font-medium text-navy-900" : undefined}
                  aria-current={isLast ? "page" : undefined}
                >
                  {item.name}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
