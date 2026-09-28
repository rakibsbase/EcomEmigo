export interface NavItem {
  label: string;
  href: string;
  children?: {
    label: string;
    href: string;
    description?: string;
  }[];
}

export interface SocialLinkItem {
  platform: "linkedin" | "instagram" | "facebook";
  label: string;
  url: string;
}

export interface CompanyInfo {
  name: string;
  legalName: string;
  tagline: string;
  subheadline: string;
  location: string;
  fullAddress: string;
  phone: string;
  email: string;
  auditEmail: string;
  calLink: string;
  calUsername: string;
  calEventSlug: string;
  siteUrl: string;
  logo: string;
  socialLinks: SocialLinkItem[];
}

export interface ProcessStep {
  step: number;
  title: string;
  summary: string;
  details: string[];
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  isPlaceholder: boolean;
}

export interface FormActionResult {
  success: boolean;
  message: string;
  errors?: Record<string, string[]>;
}

export interface PricingTier {
  id: string;
  name: string;
  price: string;
  period: string;
  positioning: string;
  popular?: boolean;
  featuresPlaceholder: string[];
  ctaText: string;
  ctaHref: string;
}
