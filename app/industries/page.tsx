import type { Metadata } from "next";

import Breadcrumbs from "../components/content/Breadcrumbs";
import Footer from "../components/Footer";
import Header from "../components/Header";
import IndustryCard from "../components/industries/IndustryCard";
import JsonLd from "../components/JsonLd";
import { breadcrumbJsonLd } from "../lib/seo/json-ld";
import { DEFAULT_OG_IMAGE, SITE_NAME } from "../lib/seo/site-config";
import { industries } from "../../content/industries";

// Visible H1 — kept distinct from the <title> below so this page doesn't
// read as a near-duplicate of the homepage's own "Growth Systems for Rental
// Companies" title in search results.
const PAGE_TITLE = "Growth Systems Built for Rental Companies";
const META_TITLE = "Rental Industry Pages: Dumpster, Portable Toilet, Event & More";
const PAGE_DESCRIPTION =
  "Rental Growth Systems helps rental businesses build stronger customer acquisition, digital infrastructure, and customer value systems around the way their industry actually operates.";

export const metadata: Metadata = {
  title: META_TITLE,
  description: PAGE_DESCRIPTION,
  alternates: { canonical: "/industries" },
  openGraph: {
    type: "website",
    title: `${META_TITLE} | ${SITE_NAME}`,
    description: PAGE_DESCRIPTION,
    url: "/industries",
    images: [DEFAULT_OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: `${META_TITLE} | ${SITE_NAME}`,
    description: PAGE_DESCRIPTION,
    images: [DEFAULT_OG_IMAGE.url],
  },
};

export default function IndustriesPage() {
  return (
    <>
      <Header />
      <main>
        <JsonLd
          data={breadcrumbJsonLd([
            { name: "Home", url: "/" },
            { name: "Industries", url: "/industries" },
          ])}
        />

        {/* Page intro */}
        <section className="bg-white pt-16 pb-4 sm:pt-24 sm:pb-6">
          <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
            <div className="flex justify-center">
              <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Industries" }]} />
            </div>
            <p className="mt-6 text-sm font-semibold uppercase tracking-wider text-orange-500">
              Industries
            </p>
            <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-navy-900 sm:text-5xl">
              {PAGE_TITLE}
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-gray-500">{PAGE_DESCRIPTION}</p>
          </div>
        </section>

        {/* Industry cards */}
        <section className="bg-white py-12 sm:py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {industries.map((industry) => (
                <IndustryCard key={industry.slug} industry={industry} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
