import type { Metadata } from "next";

import Breadcrumbs from "../components/content/Breadcrumbs";
import LegalDocument from "../components/legal/LegalDocument";
import Footer from "../components/Footer";
import Header from "../components/Header";
import JsonLd from "../components/JsonLd";
import { breadcrumbJsonLd } from "../lib/seo/json-ld";
import { DEFAULT_OG_IMAGE, SITE_NAME } from "../lib/seo/site-config";
import { PRIVACY_POLICY_EFFECTIVE_DATE, privacyPolicyBlocks } from "../../content/legal";

const PAGE_TITLE = "Privacy Policy";
const PAGE_DESCRIPTION =
  "How Rental Growth Systems collects, uses, shares, and protects information from visitors, customers, and provider-network members.";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  alternates: { canonical: "/privacy-policy" },
  openGraph: {
    type: "website",
    title: `${PAGE_TITLE} | ${SITE_NAME}`,
    description: PAGE_DESCRIPTION,
    url: "/privacy-policy",
    images: [DEFAULT_OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: `${PAGE_TITLE} | ${SITE_NAME}`,
    description: PAGE_DESCRIPTION,
    images: [DEFAULT_OG_IMAGE.url],
  },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <Header />
      <main>
        <JsonLd
          data={breadcrumbJsonLd([
            { name: "Home", url: "/" },
            { name: "Privacy Policy", url: "/privacy-policy" },
          ])}
        />

        <section className="bg-white pt-16 pb-6 sm:pt-24 sm:pb-8">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Privacy Policy" }]} />
            <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-navy-900 sm:text-5xl">
              {PAGE_TITLE}
            </h1>
            <p className="mt-3 text-sm font-medium text-gray-500">
              Effective Date: {PRIVACY_POLICY_EFFECTIVE_DATE}
            </p>
          </div>
        </section>

        <section className="bg-white pb-20 sm:pb-28">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <LegalDocument blocks={privacyPolicyBlocks} />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
