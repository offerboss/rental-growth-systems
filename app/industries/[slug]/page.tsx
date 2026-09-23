import type { Metadata } from "next";
import { notFound } from "next/navigation";

import ChallengeList from "../../components/industries/ChallengeList";
import RelatedPlatformCallout from "../../components/industries/RelatedPlatformCallout";
import ThreeSystemsForIndustry from "../../components/industries/ThreeSystemsForIndustry";
import Breadcrumbs from "../../components/content/Breadcrumbs";
import ContentBlocks from "../../components/content/ContentBlocks";
import FinalCTA from "../../components/FinalCTA";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import JsonLd from "../../components/JsonLd";
import RelatedResources from "../../components/resources/RelatedResources";
import { breadcrumbJsonLd } from "../../lib/seo/json-ld";
import { DEFAULT_OG_IMAGE, SITE_NAME } from "../../lib/seo/site-config";
import {
  getAllIndustrySlugs,
  getIndustryBySlug,
  getRelatedResourcesForIndustry,
} from "../../../content/industries";

export async function generateStaticParams() {
  return getAllIndustrySlugs().map((slug) => ({ slug }));
}

export async function generateMetadata(
  props: PageProps<"/industries/[slug]">
): Promise<Metadata> {
  const { slug } = await props.params;
  const industry = getIndustryBySlug(slug);
  if (!industry) return {};

  const canonical = `/industries/${industry.slug}`;

  return {
    title: industry.metaTitle,
    description: industry.metaDescription,
    alternates: { canonical },
    openGraph: {
      type: "website",
      title: `${industry.metaTitle} | ${SITE_NAME}`,
      description: industry.metaDescription,
      url: canonical,
      images: [DEFAULT_OG_IMAGE],
    },
    twitter: {
      card: "summary_large_image",
      title: `${industry.metaTitle} | ${SITE_NAME}`,
      description: industry.metaDescription,
      images: [DEFAULT_OG_IMAGE.url],
    },
  };
}

export default async function IndustryPage(props: PageProps<"/industries/[slug]">) {
  const { slug } = await props.params;
  const industry = getIndustryBySlug(slug);

  if (!industry) {
    notFound();
  }

  const relatedResources = getRelatedResourcesForIndustry(industry);
  const canonical = `/industries/${industry.slug}`;

  return (
    <>
      <Header />
      <main>
        <JsonLd
          data={breadcrumbJsonLd([
            { name: "Home", url: "/" },
            { name: "Industries", url: "/industries" },
            { name: industry.name, url: canonical },
          ])}
        />

        {/* Hero */}
        <section className="bg-white pt-16 pb-12 sm:pt-24 sm:pb-16">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <Breadcrumbs
              items={[
                { name: "Home", href: "/" },
                { name: "Industries", href: "/industries" },
                { name: industry.name },
              ]}
            />
            <p className="mt-6 text-sm font-semibold uppercase tracking-wider text-orange-500">
              {industry.name}
            </p>
            <h1 className="mt-3 text-4xl font-extrabold leading-tight tracking-tight text-navy-900 sm:text-5xl">
              {industry.heroHeadline}
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-gray-500">
              {industry.heroSubheadline}
            </p>
            <div className="mt-8 border-l-2 border-orange-200 pl-5">
              <ContentBlocks blocks={industry.intro} />
            </div>
          </div>
        </section>

        {/* Industry realities / challenges */}
        <section className="bg-gray-50 py-16 sm:py-20" id="challenges">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold tracking-tight text-navy-900 sm:text-3xl">
              What Makes {industry.name} Different
            </h2>
            <div className="mt-8">
              <ChallengeList challenges={industry.challenges} />
            </div>
          </div>
        </section>

        {/* Three Systems, adapted to this industry */}
        <section className="bg-white py-16 sm:py-20" id="systems">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold tracking-tight text-navy-900 sm:text-3xl">
              Three Systems for {industry.name} Companies
            </h2>
            <div className="mt-8">
              <ThreeSystemsForIndustry
                acquisitionSystems={industry.acquisitionSystems}
                infrastructureSystems={industry.infrastructureSystems}
                customerValueSystems={industry.customerValueSystems}
              />
            </div>
          </div>
        </section>

        {/* Related RGS platform + related resources */}
        {(industry.relatedPlatform || relatedResources.length > 0) && (
          <section className="bg-gray-50 py-16 sm:py-20">
            <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
              {industry.relatedPlatform && (
                <div className={relatedResources.length > 0 ? "mb-12" : undefined}>
                  <h2 className="text-2xl font-bold tracking-tight text-navy-900 sm:text-3xl">
                    Part of the Rental Growth Systems Ecosystem
                  </h2>
                  <div className="mt-6">
                    <RelatedPlatformCallout platform={industry.relatedPlatform} />
                  </div>
                </div>
              )}
              {relatedResources.length > 0 && (
                <RelatedResources resources={relatedResources} />
              )}
            </div>
          </section>
        )}

        <FinalCTA headline={industry.ctaHeadline} copy={industry.ctaCopy} />
      </main>
      <Footer />
    </>
  );
}
