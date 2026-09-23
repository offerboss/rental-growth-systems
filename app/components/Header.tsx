"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { BOOKING_URL } from "../lib/links";
import rgsLogo from "../../public/images/rental_growth_systems_logo_transparent.png";

const NAV_LINKS = [
  // Rooted at "/" so these still resolve to the homepage section when
  // clicked from any other route, not just a same-page hash jump.
  { label: "How It Works", href: "/#how-it-works" },
  { label: "What We Build", href: "/#what-we-build" },
  { label: "Directories", href: "/#directories" },
  { label: "About", href: "/#about" },
  { label: "Industries", href: "/industries" },
  { label: "Resources", href: "/resources" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/95 backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:h-[72px] sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex shrink-0 items-center" aria-label="Rental Growth Systems home">
          {/* Source file has generous transparent padding, so the box is taller than the visible mark */}
          <Image
            src={rgsLogo}
            // Decorative here — the parent Link already carries the accessible name via aria-label.
            alt=""
            priority
            sizes="(min-width: 640px) 160px, 144px"
            className="h-[72px] w-auto sm:h-20"
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main navigation">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-md px-3 py-2 text-sm font-medium text-gray-600 transition-colors hover:text-navy-900 hover:bg-gray-50"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:block">
          <a
            href={BOOKING_URL}
            className="inline-flex items-center rounded-lg bg-orange-500 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-orange-600 hover:shadow-md active:scale-[0.98]"
          >
            Book a Quick Fit Call
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md p-2 text-gray-600 hover:bg-gray-100 lg:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-expanded={mobileOpen}
          aria-label="Toggle navigation menu"
        >
          {mobileOpen ? (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-gray-200 bg-white lg:hidden">
          <nav className="flex flex-col px-4 py-3 space-y-1" aria-label="Mobile navigation">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-md px-3 py-2.5 text-sm font-medium text-gray-600 hover:text-navy-900 hover:bg-gray-50"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-2">
              <a
                href={BOOKING_URL}
                className="block w-full rounded-lg bg-orange-500 px-5 py-2.5 text-center text-sm font-semibold text-white transition-colors hover:bg-orange-600"
                onClick={() => setMobileOpen(false)}
              >
                Book a Quick Fit Call
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
