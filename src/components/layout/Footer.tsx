// ──────────────────────────────────────────────
// NorthStar Life Coaching — Footer
// ──────────────────────────────────────────────

import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  SITE_NAME,
  SITE_DESCRIPTION,
  CONTACT_EMAIL,
  CONTACT_PHONE,
  CONTACT_ADDRESS,
  SOCIAL_LINKS,
  FOOTER_NAV_LINKS,
  MAIN_NAV_LINKS,
  COMPANY_NAME,
  COPYRIGHT_YEAR,
  BUSINESS_HOURS,
} from "@/lib/constants";

const serviceLinks = [
  { label: "One-on-One Coaching", href: "/services#one-on-one" },
  { label: "Group Coaching", href: "/services#group-coaching" },
  { label: "Career Transition", href: "/services#career-transition" },
  { label: "Leadership Development", href: "/services#leadership" },
  { label: "Wellness & Balance", href: "/services#wellness" },
  { label: "Relationship Coaching", href: "/services#relationship" },
];

const dayNames: Record<string, string> = {
  monday: "Monday",
  tuesday: "Tuesday",
  wednesday: "Wednesday",
  thursday: "Thursday",
  friday: "Friday",
  saturday: "Saturday",
  sunday: "Sunday",
};

export function Footer() {
  return (
    <footer className="bg-muted/30 border-t border-border">
      {/* Main Footer Content */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand Column */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link
              href="/"
              className="flex items-center gap-2 font-bold text-xl tracking-tight text-foreground mb-4"
            >
              <FontAwesomeIcon
                icon={["fas", "compass"]}
                className="size-5 text-primary"
              />
              {SITE_NAME}
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed mb-6">
              {SITE_DESCRIPTION}
            </p>
            <div className="flex items-center gap-3">
              <a
                href={SOCIAL_LINKS.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="inline-flex items-center justify-center size-9 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
              >
                <FontAwesomeIcon icon={["fab", "facebook"]} className="size-4" />
              </a>
              <a
                href={SOCIAL_LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="inline-flex items-center justify-center size-9 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
              >
                <FontAwesomeIcon icon={["fab", "instagram"]} className="size-4" />
              </a>
              <a
                href={SOCIAL_LINKS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="inline-flex items-center justify-center size-9 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
              >
                <FontAwesomeIcon icon={["fab", "linkedin"]} className="size-4" />
              </a>
              <a
                href={SOCIAL_LINKS.twitter}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="inline-flex items-center justify-center size-9 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
              >
                <FontAwesomeIcon icon={["fab", "twitter"]} className="size-4" />
              </a>
              <a
                href={SOCIAL_LINKS.youtube}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="inline-flex items-center justify-center size-9 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
              >
                <FontAwesomeIcon icon={["fab", "youtube"]} className="size-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              {MAIN_NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
              Services
            </h3>
            <ul className="space-y-2.5">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Hours */}
          <div>
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
              Get in Touch
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="flex items-start gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  <FontAwesomeIcon
                    icon={["fas", "envelope"]}
                    className="size-3.5 mt-0.5 shrink-0"
                  />
                  <span>{CONTACT_EMAIL}</span>
                </a>
              </li>
              <li>
                <a
                  href={`tel:${CONTACT_PHONE.replace(/\D/g, "")}`}
                  className="flex items-start gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  <FontAwesomeIcon
                    icon={["fas", "phone"]}
                    className="size-3.5 mt-0.5 shrink-0"
                  />
                  <span>{CONTACT_PHONE}</span>
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <FontAwesomeIcon
                  icon={["fas", "map-marker-alt"]}
                  className="size-3.5 mt-0.5 shrink-0"
                />
                <span>
                  {CONTACT_ADDRESS.street}
                  <br />
                  {CONTACT_ADDRESS.city}, {CONTACT_ADDRESS.state}{" "}
                  {CONTACT_ADDRESS.zip}
                </span>
              </li>
            </ul>

            <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider mt-6 mb-2">
              Business Hours
            </h4>
            <ul className="space-y-1">
              {Object.entries(BUSINESS_HOURS).map(([day, hours]) => (
                <li
                  key={day}
                  className="flex justify-between text-xs text-muted-foreground"
                >
                  <span>{dayNames[day] || day}</span>
                  <span>{hours}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <Separator />

      {/* Bottom Bar */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            &copy; {COPYRIGHT_YEAR} {COMPANY_NAME}. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            {FOOTER_NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
