// The three RGS pillars — shared source of truth for the name/icon/copy
// treatment used on the homepage (ThreeSystems), industry pages
// (ThreeSystemsForIndustry), and the solutions hub (SolutionCard), so all
// three stay visually and textually in sync instead of drifting copies.

import type { ReactNode } from "react";

export type PillarKey = "acquisition" | "infrastructure" | "customerValue";

const ICON_CLASS = "h-9 w-9 text-orange-500";

export type Pillar = {
  key: PillarKey;
  label: string;
  headline: string;
  copy: string;
  /** Slug into content/solutions.ts — the page this pillar links to. */
  solutionSlug: string;
  icon: ReactNode;
};

export const PILLARS: Pillar[] = [
  {
    key: "acquisition",
    label: "Customer Acquisition Systems",
    headline: "Acquire More Customers",
    copy: "Increase your visibility, capture more leads, and put your business in front of high-intent customers through websites, directory exposure, SEO, and local demand strategies.",
    solutionSlug: "customer-acquisition",
    icon: (
      <svg className={ICON_CLASS} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <circle cx="12" cy="8" r="3.4" />
        <path d="M5.8 20v-1.4a6.2 6.2 0 0112.4 0V20z" />
        <circle cx="4.8" cy="10" r="2.2" />
        <path d="M0.8 19.2a4.2 4.2 0 014.8-4.1 7.9 7.9 0 00-1.7 4.1z" />
        <circle cx="19.2" cy="10" r="2.2" />
        <path d="M23.2 19.2a4.2 4.2 0 00-4.8-4.1 7.9 7.9 0 011.7 4.1z" />
      </svg>
    ),
  },
  {
    key: "infrastructure",
    label: "Digital Infrastructure Systems",
    headline: "Run a Smarter Operation",
    copy: "Streamline your business with CRM, booking flows, automated quotes, SMS & email follow-up, and AI support — so you can save time and close more business.",
    solutionSlug: "digital-infrastructure",
    icon: (
      <svg
        className={ICON_CLASS}
        viewBox="0 0 24 24"
        fill="currentColor"
        fillRule="evenodd"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M19.31 10.84 L21.95 10.98 L21.95 13.02 L19.31 13.16 L17.99 16.35 L19.75 18.31 L18.31 19.75 L16.35 17.99 L13.16 19.31 L13.02 21.95 L10.98 21.95 L10.84 19.31 L7.65 17.99 L5.69 19.75 L4.25 18.31 L6.01 16.35 L4.69 13.16 L2.05 13.02 L2.05 10.98 L4.69 10.84 L6.01 7.65 L4.25 5.69 L5.69 4.25 L7.65 6.01 L10.84 4.69 L10.98 2.05 L13.02 2.05 L13.16 4.69 L16.35 6.01 L18.31 4.25 L19.75 5.69 L17.99 7.65Z M15.6 12a3.6 3.6 0 10-7.2 0 3.6 3.6 0 007.2 0z" />
      </svg>
    ),
  },
  {
    key: "customerValue",
    label: "Customer Value Systems",
    headline: "Make Every Customer Worth More",
    copy: "Drive repeat business, generate more reviews and referrals, and reactivate past customers to increase long-term customer value.",
    solutionSlug: "customer-value",
    icon: (
      <svg className={ICON_CLASS} viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="12" cy="12" r="10" fill="currentColor" />
        <path
          d="M14.9 9.3c0-1.1-1.2-1.9-2.9-1.9s-2.9.8-2.9 1.9c0 2.9 5.8 1.4 5.8 4.4 0 1.1-1.2 1.9-2.9 1.9s-2.9-.8-2.9-1.9M12 5.8v12.4"
          fill="none"
          stroke="#fff"
          strokeWidth="1.7"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
];

export function getPillarBySolutionSlug(slug: string): Pillar | undefined {
  return PILLARS.find((pillar) => pillar.solutionSlug === slug);
}
