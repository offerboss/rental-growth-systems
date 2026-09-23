import type { Metadata } from "next";
import { notFound } from "next/navigation";

import Breadcrumbs from "../../components/content/Breadcrumbs";
import ContentBlocks from "../../components/content/ContentBlocks";
import FaqList from "../../components/content/FaqList";
import FinalCTA from "../../components/FinalCTA";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import IndustryCard from "../../components/industries/IndustryCard";
import JsonLd from "../../components/JsonLd";
import { getPillarBySolutionSlug } from "../../components/pillars";
import RelatedResources from "../../components/resources/RelatedResources";
import CapabilityList from "../../components/solutions/CapabilityList";
import OutcomeList from "../../components/solutions/OutcomeList";
import UseCaseList from "../../components/solutions/UseCaseList";
import { BOOKING_URL } from "../../lib/links";
import { breadcrumbJsonLd, faqJsonLd } from "../../lib/seo/json-ld";
import { DEFAULT_OG_IMAGE, SITE_NAME } from "../../lib/seo/site-config";
import {
  getAllSolutionSlugs,
  getRelatedIndustriesForSolution,
  getRelatedResourcesForSolution,
  getSolutionBySlug,
} from "../../../content/solutions";

export async function generateStaticParams() {
  return getAllSolutionSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata(
  props: PageProps<"/solutions/[slug]">
): Promise<Metadata> {
  const { slug } = await props.params;
  const solution = getSolutionBySlug(slug);
  if (!solution) return {};

  const canonical = `/solutions/${solution.slug}`;

  return {
    title: solution.metaTitle,
    description: solution.metaDescription,
    alternates: { canonical },
    openGraph: {
      type: "website",
      title: `${solution.metaTitle} | ${SITE_NAME}`,
      description: solution.metaDescription,
      url: canonical,
      images: [DEFAULT_OG_IMAGE],
    },
    twitter: {
      card: "summary_large_image",
      title: `${solution.metaTitle} | ${SITE_NAME}`,
      description: solution.metaDescription,
      images: [DEFAULT_OG_IMAGE.url],
    },
  };
}

export default async function SolutionPage(props: PageProps<"/solutions/[slug]">) {
  const { slug } = await props.params;
  const solution = getSolutionBySlug(slug);

  if (!solution) {
    notFound();
  }

  const pillar = getPillarBySolutionSlug(solution.slug);
  const relatedIndustries = getRelatedIndustriesForSolution(solution);
  const relatedResources = getRelatedResourcesForSolution(solution);
  const canonical = `/solutions/${solution.slug}`;

  return (
    <>
      <Header />
      <main>
        <JsonLd
          data={[
            breadcrumbJsonLd([
              { name: "Home", url: "/" },
              { name: "Solutions", url: "/solutions" },
              { name: solution.name, url: canonical },
            ]),
            // Only added when the FAQ is actually rendered below, and built
            // from the exact same items — schema must match visible content.
            ...(solution.faq && solution.faq.length > 0 ? [faqJsonLd(solution.faq)] : []),
          ]}
        />

        {/* Hero */}
        <section className="bg-white pt-16 pb-12 sm:pt-24 sm:pb-16">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <Breadcrumbs
              items={[
                { name: "Home", href: "/" },
                { name: "Solutions", href: "/solutions" },
                { name: solution.name },
              ]}
            />
            <p className="mt-6 text-sm font-semibold uppercase tracking-wider text-orange-500">
              {pillar?.label ?? solution.name}
            </p>
            <h1 className="mt-3 text-4xl font-extrabold leading-tight tracking-tight text-navy-900 sm:text-5xl">
              {solution.heroHeadline}
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-gray-500">
              {solution.heroSubheadline}
            </p>
            <div className="mt-8">
              <a
                href={BOOKING_URL}
                className="inline-flex items-center justify-center rounded-lg bg-orange-500 px-6 py-3 text-base font-semibold text-white shadow-sm transition-all hover:bg-orange-600 hover:shadow-md active:scale-[0.98]"
              >
                Book a Quick Fit Call
              </a>
            </div>
            <div className="mt-8 border-l-2 border-orange-200 pl-5">
              <ContentBlocks blocks={solution.intro} />
            </div>
          </div>
        </section>

        {/* The problem */}
        <section className="bg-gray-50 py-16 sm:py-20">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold tracking-tight text-navy-900 sm:text-3xl">
              The {solution.name} Problem
            </h2>
            <div className="mt-6">
              <ContentBlocks blocks={solution.problems} />
            </div>
          </div>
        </section>

        {/* What RGS builds */}
        <section className="bg-white py-16 sm:py-20">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold tracking-tight text-navy-900 sm:text-3xl">
              What Rental Growth Systems Builds for {solution.name}
            </h2>
            <div className="mt-8">
              <CapabilityList capabilities={solution.capabilities} />
            </div>
          </div>
        </section>

        {/* Outcomes */}
        <section className="bg-gray-50 py-16 sm:py-20">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold tracking-tight text-navy-900 sm:text-3xl">
              {solution.name} Outcomes
            </h2>
            <p className="mt-3 max-w-2xl text-base leading-relaxed text-gray-500">
              These are the results this system is designed to support — how much of an impact
              it makes depends on your market, your team, and how consistently the systems get
              used.
            </p>
            <div className="mt-8">
              <OutcomeList outcomes={solution.outcomes} />
            </div>
          </div>
        </section>

        {/* Use cases */}
        <section className="bg-white py-16 sm:py-20">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold tracking-tight text-navy-900 sm:text-3xl">
              Use Cases Across Rental Categories
            </h2>
            <div className="mt-8">
              <UseCaseList useCases={solution.useCases} />
            </div>

            <FaqList items={solution.faq ?? []} />
          </div>
        </section>

        {/* Related industries + related resources */}
        {(relatedIndustries.length > 0 || relatedResources.length > 0) && (
          <section className="bg-gray-50 py-16 sm:py-20">
            <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
              {relatedIndustries.length > 0 && (
                <div className={relatedResources.length > 0 ? "mb-16" : undefined}>
                  <h2 className="text-2xl font-bold tracking-tight text-navy-900 sm:text-3xl">
                    Related Industries
                  </h2>
                  <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {relatedIndustries.map((industry) => (
                      <IndustryCard key={industry.slug} industry={industry} />
                    ))}
                  </div>
                </div>
              )}
              {relatedResources.length > 0 && (
                <RelatedResources resources={relatedResources} />
              )}
            </div>
          </section>
        )}

        <FinalCTA headline={solution.ctaHeadline} copy={solution.ctaCopy} />
      </main>
      <Footer />
    </>
  );
}
