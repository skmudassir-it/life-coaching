// ──────────────────────────────────────────────
// NorthStar Life Coaching — Site Constants
// ──────────────────────────────────────────────

import type { NavLink } from "@/lib/types";

export const SITE_NAME = "NorthStar Life Coaching";

export const SITE_DESCRIPTION =
  "Transform your life with professional coaching that guides you toward clarity, purpose, and fulfillment. NorthStar Life Coaching helps you navigate life's crossroads with confidence.";

export const SITE_URL = "https://northstarlifecoaching.com";

export const CONTACT_EMAIL = "hello@northstarlifecoaching.com";

export const CONTACT_PHONE = "+1 (555) 123-4567";

export const CONTACT_ADDRESS = {
  street: "742 Evergreen Terrace",
  city: "Portland",
  state: "OR",
  zip: "97201",
  country: "United States",
};

export const SOCIAL_LINKS = {
  facebook: "https://facebook.com/northstarlifecoaching",
  instagram: "https://instagram.com/northstarlifecoaching",
  linkedin: "https://linkedin.com/company/northstarlifecoaching",
  twitter: "https://twitter.com/northstarlife",
  youtube: "https://youtube.com/@northstarlifecoaching",
};

export const BUSINESS_HOURS = {
  monday: "9:00 AM – 6:00 PM",
  tuesday: "9:00 AM – 6:00 PM",
  wednesday: "9:00 AM – 6:00 PM",
  thursday: "9:00 AM – 6:00 PM",
  friday: "9:00 AM – 4:00 PM",
  saturday: "10:00 AM – 2:00 PM",
  sunday: "Closed",
};

export const MAIN_NAV_LINKS: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export const FOOTER_NAV_LINKS: NavLink[] = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
  { label: "FAQ", href: "/faq" },
  { label: "Book a Session", href: "/contact" },
];

export const COMPANY_NAME = "NorthStar Life Coaching LLC";

export const COPYRIGHT_YEAR = 2026;
