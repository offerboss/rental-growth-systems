import type { Metadata } from "next";

import Breadcrumbs from "../components/content/Breadcrumbs";
import LegalDocument from "../components/legal/LegalDocument";
import Footer from "../components/Footer";
import Header from "../components/Header";
import JsonLd from "../components/JsonLd";
import { breadcrumbJsonLd } from "../lib/seo/json-ld";
import { DEFAULT_OG_IMAGE, SITE_NAME } from "../lib/seo/site-config";
import { TERMS_OF_SERVICE_EFFECTIVE_DATE, termsOfServiceBlocks } from "../../content/legal";

const PAGE_TITLE = "Terms of Service";
const PAGE_DESCRIPTION =
  "The terms that govern use of the Rental Growth Systems website, forms, services, and provider-network program.";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  alternates: { canonical: "/terms-of-service" },
  openGraph: {
    type: "website",
    title: `${PAGE_TITLE} | ${SITE_NAME}`,
    description: PAGE_DESCRIPTION,
    url: "/terms-of-service",
    images: [DEFAULT_OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: `${PAGE_TITLE} | ${SITE_NAME}`,
    description: PAGE_DESCRIPTION,
    images: [DEFAULT_OG_IMAGE.url],
  },
};

export default function TermsOfServicePage() {
  return (
    <>
      <Header />
      <main>
        <JsonLd
          data={breadcrumbJsonLd([
            { name: "Home", url: "/" },
            { name: "Terms of Service", url: "/terms-of-service" },
          ])}
        />

        <section className="bg-white pt-16 pb-6 sm:pt-24 sm:pb-8">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Terms of Service" }]} />
            <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-navy-900 sm:text-5xl">
              {PAGE_TITLE}
            </h1>
            <p className="mt-3 text-sm font-medium text-gray-500">
              Effective Date: {TERMS_OF_SERVICE_EFFECTIVE_DATE}
            </p>
          </div>
        </section>

        <section className="bg-white pb-20 sm:pb-28">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <LegalDocument blocks={termsOfServiceBlocks} />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
