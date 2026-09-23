import type { Metadata } from "next";

import Breadcrumbs from "../components/content/Breadcrumbs";
import Footer from "../components/Footer";
import Header from "../components/Header";
import JsonLd from "../components/JsonLd";
import ResourceCard from "../components/resources/ResourceCard";
import { breadcrumbJsonLd } from "../lib/seo/json-ld";
import { DEFAULT_OG_IMAGE, SITE_NAME } from "../lib/seo/site-config";
import {
  RESOURCE_CATEGORIES,
  getFeaturedResources,
  getResourcesByCategory,
} from "../../content/resources";

const PAGE_TITLE = "Rental Business Growth Resources";
const PAGE_DESCRIPTION =
  "Practical strategies, systems, and insights for rental companies looking to generate more demand, improve operations, and increase customer value.";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  alternates: { canonical: "/resources" },
  openGraph: {
    type: "website",
    title: `${PAGE_TITLE} | ${SITE_NAME}`,
    description: PAGE_DESCRIPTION,
    url: "/resources",
    images: [DEFAULT_OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: `${PAGE_TITLE} | ${SITE_NAME}`,
    description: PAGE_DESCRIPTION,
    images: [DEFAULT_OG_IMAGE.url],
  },
};

export default function ResourcesPage() {
  const featured = getFeaturedResources();
  const categoryGroups = RESOURCE_CATEGORIES.map((category) => ({
    category,
    items: getResourcesByCategory(category),
  })).filter((group) => group.items.length > 0);

  return (
    <>
      <Header />
      <main>
        <JsonLd
          data={breadcrumbJsonLd([
            { name: "Home", url: "/" },
            { name: "Resources", url: "/resources" },
          ])}
        />

        {/* Page intro */}
        <section className="bg-white pt-16 pb-4 sm:pt-24 sm:pb-6">
          <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
            <div className="flex justify-center">
              <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Resources" }]} />
            </div>
            <p className="mt-6 text-sm font-semibold uppercase tracking-wider text-orange-500">
              Resources
            </p>
            <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-navy-900 sm:text-5xl">
              {PAGE_TITLE}
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-gray-500">{PAGE_DESCRIPTION}</p>
          </div>
        </section>

        {/* Featured resources */}
        {featured.length > 0 && (
          <section className="bg-white py-12 sm:py-16">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <h2 className="text-2xl font-bold tracking-tight text-navy-900">Featured</h2>
              <div className="mt-6 grid gap-6 sm:grid-cols-2">
                {featured.map((resource) => (
                  <ResourceCard key={resource.slug} resource={resource} />
                ))}
              </div>
            </div>
          </section>
        )}

        {/* All resources, grouped by category */}
        <section className="bg-gray-50 py-16 sm:py-20">
          <div className="mx-auto max-w-7xl space-y-16 px-4 sm:px-6 lg:px-8">
            {categoryGroups.map((group) => (
              <div key={group.category}>
                <h2 className="text-2xl font-bold tracking-tight text-navy-900">
                  {group.category}
                </h2>
                <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {group.items.map((resource) => (
                    <ResourceCard key={resource.slug} resource={resource} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
