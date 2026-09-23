import Image from "next/image";
import { BOOKING_URL, EXTERNAL_LINK_PROPS, PLATFORM_URLS } from "../lib/links";
import rgsLogo from "../../public/images/rental_growth_systems_logo_transparent.png";

const QUICK_LINKS = [
  { label: "How It Works", href: "#how-it-works" },
  { label: "What We Build", href: "#what-we-build" },
  { label: "About", href: "#about" },
  { label: "Solutions", href: "/solutions" },
  { label: "Book a Call", href: BOOKING_URL },
];

const PLATFORM_LINKS = [
  { label: "Portable Toilet Finder", href: PLATFORM_URLS.portableToiletFinder },
  { label: "Rolloff Dumpster Finder", href: PLATFORM_URLS.rolloffDumpsterFinder },
  { label: "Event Rental Finder", href: PLATFORM_URLS.eventRentalFinder },
  // No URL yet — renders unlinked.
  { label: "Construction Rental Finder" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            {/* Negative margins offset the transparent padding built into the logo file */}
            <Image
              src={rgsLogo}
              alt="Rental Growth Systems logo"
              sizes="160px"
              className="-mb-4 -mt-3 block h-20 w-auto"
            />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-gray-500">
              Helping rental companies acquire more customers, build smarter systems, and grow revenue from every relationship.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-navy-900">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-2.5">
              {QUICK_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-500 transition-colors hover:text-navy-900"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Platforms */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-navy-900">
              Our Platforms
            </h3>
            <ul className="mt-4 space-y-2.5">
              {PLATFORM_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    {...(link.href ? EXTERNAL_LINK_PROPS : {})}
                    className="text-sm text-gray-500 transition-colors hover:text-navy-900"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-navy-900">
              Contact
            </h3>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-gray-500">
              Ready to talk growth? Book a quick call and we&apos;ll map out where to start.
            </p>
            <ul className="mt-3 space-y-2.5">
              <li>
                <a
                  href={BOOKING_URL}
                  className="text-sm text-gray-500 transition-colors hover:text-navy-900"
                >
                  Book a Quick Fit Call
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 border-t border-gray-200 pt-6">
          <p className="text-center text-xs text-gray-400">
            &copy; {currentYear} Rental Growth Systems. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
