import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";

import FinalCTA from "../../components/FinalCTA";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import JsonLd from "../../components/JsonLd";
import Breadcrumbs from "../../components/content/Breadcrumbs";
import ContentBlocks from "../../components/content/ContentBlocks";
import FaqList from "../../components/content/FaqList";
import RelatedIndustryCallout from "../../components/resources/RelatedIndustryCallout";
import RelatedResources from "../../components/resources/RelatedResources";
import { articleJsonLd, breadcrumbJsonLd, faqJsonLd } from "../../lib/seo/json-ld";
import { DEFAULT_OG_IMAGE, SITE_NAME } from "../../lib/seo/site-config";
import { getIndustryBySlug } from "../../../content/industries";
import {
  getAllResourceSlugs,
  getRelatedResources,
  getResourceBySlug,
} from "../../../content/resources";

function formatDate(iso: string) {
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}

export async function generateStaticParams() {
  return getAllResourceSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata(
  props: PageProps<"/resources/[slug]">
): Promise<Metadata> {
  const { slug } = await props.params;
  const resource = getResourceBySlug(slug);
  if (!resource) return {};

  const title = resource.metaTitle ?? resource.title;
  const canonical = `/resources/${resource.slug}`;
  const ogImage = resource.heroImage
    ? {
        url: resource.heroImage.src,
        width: resource.heroImage.width,
        height: resource.heroImage.height,
        alt: resource.heroImage.alt,
      }
    : DEFAULT_OG_IMAGE;

  return {
    title,
    description: resource.metaDescription,
    alternates: { canonical },
    openGraph: {
      type: "article",
      title: `${title} | ${SITE_NAME}`,
      description: resource.metaDescription,
      url: canonical,
      publishedTime: resource.publishedDate,
      modifiedTime: resource.updatedDate ?? resource.publishedDate,
      authors: [resource.author],
      images: [ogImage],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${SITE_NAME}`,
      description: resource.metaDescription,
      images: [ogImage.url],
    },
  };
}

export default async function ResourceArticlePage(
  props: PageProps<"/resources/[slug]">
) {
  const { slug } = await props.params;
  const resource = getResourceBySlug(slug);

  if (!resource) {
    notFound();
  }

  const related = getRelatedResources(resource);
  const relatedIndustry = resource.relatedIndustry
    ? getIndustryBySlug(resource.relatedIndustry)
    : undefined;
  const canonical = `/resources/${resource.slug}`;
  const hasUpdate = Boolean(resource.updatedDate && resource.updatedDate !== resource.publishedDate);

  return (
    <>
      <Header />
      <main>
        <JsonLd
          data={[
            breadcrumbJsonLd([
              { name: "Home", url: "/" },
              { name: "Resources", url: "/resources" },
              { name: resource.title, url: canonical },
            ]),
            articleJsonLd({
              headline: resource.title,
              description: resource.metaDescription,
              url: canonical,
              datePublished: resource.publishedDate,
              dateModified: resource.updatedDate,
              authorName: resource.author,
              image: resource.heroImage?.src ?? DEFAULT_OG_IMAGE.url,
            }),
            // Only added when the FAQ is actually rendered below, and built
            // from the exact same items — schema must match visible content.
            ...(resource.faq && resource.faq.length > 0 ? [faqJsonLd(resource.faq)] : []),
          ]}
        />

        <article className="bg-white py-16 sm:py-20">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <Breadcrumbs
              items={[
                { name: "Home", href: "/" },
                { name: "Resources", href: "/resources" },
                { name: resource.title },
              ]}
            />

            <p className="mt-6 text-sm font-semibold uppercase tracking-wider text-orange-500">
              {resource.category}
            </p>
            <h1 className="mt-3 text-3xl font-extrabold leading-tight tracking-tight text-navy-900 sm:text-4xl">
              {resource.title}
            </h1>

            <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-gray-500">
              <span>By {resource.author}</span>
              <span aria-hidden="true">•</span>
              <span>
                Published <time dateTime={resource.publishedDate}>{formatDate(resource.publishedDate)}</time>
              </span>
              {hasUpdate && (
                <>
                  <span aria-hidden="true">•</span>
                  <span>
                    Updated{" "}
                    <time dateTime={resource.updatedDate}>{formatDate(resource.updatedDate as string)}</time>
                  </span>
                </>
              )}
              <span aria-hidden="true">•</span>
              <span>{resource.readingTime}</span>
            </div>

            {/* Answer-first intro */}
            <div className="mt-8 border-l-2 border-orange-200 pl-5">
              <ContentBlocks blocks={resource.intro} />
            </div>

            {resource.heroImage && (
              <div className="relative mt-10 aspect-[16/9] w-full overflow-hidden rounded-2xl border border-gray-200 bg-gray-100">
                <Image
                  src={resource.heroImage.src}
                  alt={resource.heroImage.alt}
                  fill
                  priority
                  sizes="(min-width: 1024px) 740px, 100vw"
                  className="object-cover"
                />
              </div>
            )}

            <div className="mt-10 space-y-10">
              {resource.sections.map((section) => (
                <section key={section.heading}>
                  <h2 className="text-2xl font-bold tracking-tight text-navy-900">
                    {section.heading}
                  </h2>
                  <div className="mt-4">
                    <ContentBlocks blocks={section.blocks} />
                  </div>
                </section>
              ))}
            </div>

            <FaqList items={resource.faq ?? []} />

            {relatedIndustry && <RelatedIndustryCallout industry={relatedIndustry} />}

            <RelatedResources resources={related} />
          </div>
        </article>

        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
