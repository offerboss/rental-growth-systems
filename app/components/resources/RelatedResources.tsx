import type { Resource } from "../../../content/resources";
import ResourceCard from "./ResourceCard";

export default function RelatedResources({ resources }: { resources: Resource[] }) {
  if (resources.length === 0) return null;

  return (
    <div className="mt-16 border-t border-gray-200 pt-12">
      <h2 className="text-2xl font-bold tracking-tight text-navy-900">Related Resources</h2>
      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        {resources.map((resource) => (
          <ResourceCard key={resource.slug} resource={resource} />
        ))}
      </div>
    </div>
  );
}
