import type { Metadata } from "next";

import Breadcrumbs from "../components/content/Breadcrumbs";
import Footer from "../components/Footer";
import Header from "../components/Header";
import JsonLd from "../components/JsonLd";
import SolutionCard from "../components/solutions/SolutionCard";
import { breadcrumbJsonLd } from "../lib/seo/json-ld";
import { DEFAULT_OG_IMAGE, SITE_NAME } from "../lib/seo/site-config";
import { solutions } from "../../content/solutions";

const PAGE_TITLE = "Three Systems. One Goal: A More Profitable Rental Business.";
const PAGE_DESCRIPTION =
  "Rental Growth Systems helps rental companies acquire more customers, run smarter digital operations, and create more value from every customer relationship.";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  alternates: { canonical: "/solutions" },
  openGraph: {
    type: "website",
    title: `${PAGE_TITLE} | ${SITE_NAME}`,
    description: PAGE_DESCRIPTION,
    url: "/solutions",
    images: [DEFAULT_OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: `${PAGE_TITLE} | ${SITE_NAME}`,
    description: PAGE_DESCRIPTION,
    images: [DEFAULT_OG_IMAGE.url],
  },
};

export default function SolutionsPage() {
  return (
    <>
      <Header />
      <main>
        <JsonLd
          data={breadcrumbJsonLd([
            { name: "Home", url: "/" },
            { name: "Solutions", url: "/solutions" },
          ])}
        />

        {/* Page intro */}
        <section className="bg-white pt-16 pb-4 sm:pt-24 sm:pb-6">
          <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
            <div className="flex justify-center">
              <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Solutions" }]} />
            </div>
            <p className="mt-6 text-sm font-semibold uppercase tracking-wider text-orange-500">
              Solutions
            </p>
            <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-navy-900 sm:text-5xl">
              {PAGE_TITLE}
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-gray-500">{PAGE_DESCRIPTION}</p>
          </div>
        </section>

        {/* Solution cards */}
        <section className="bg-white py-12 sm:py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto grid max-w-xl gap-8 lg:max-w-none lg:grid-cols-3">
              {solutions.map((solution) => (
                <SolutionCard key={solution.slug} solution={solution} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
