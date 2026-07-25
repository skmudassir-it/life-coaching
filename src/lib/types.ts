// ──────────────────────────────────────────────
// NorthStar Life Coaching — Shared TypeScript Types
// ──────────────────────────────────────────────

export interface NavLink {
  label: string;
  href: string;
  isExternal?: boolean;
  children?: NavLink[];
}

export interface ServiceItem {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  icon: string;
  features: string[];
  price: string;
  cta: string;
  href: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company?: string;
  avatar: string;
  text: string;
  rating: number;
}

export interface TeamMember {
  id: string;
  name: string;
  title: string;
  bio: string;
  avatar: string;
  credentials: string[];
  socialLinks: {
    linkedin?: string;
    twitter?: string;
    email?: string;
  };
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  authorAvatar: string;
  category: string;
  tags: string[];
  publishedAt: string;
  readingTime: number;
  featuredImage: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  description: string;
  price: string;
  interval: string;
  features: string[];
  highlighted: boolean;
  cta: string;
  href: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  service: string;
  message: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface StatItem {
  label: string;
  value: string;
  suffix?: string;
  icon?: string;
}
