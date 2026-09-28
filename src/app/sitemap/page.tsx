import * as React from "react";
import Link from "next/link";
import { constructMetadata, getBreadcrumbJsonLd } from "@/lib/seo";
import { getAllServices } from "@/lib/services-data";
import { getAllCaseStudies } from "@/lib/case-studies-data";
import { COMPANY } from "@/lib/constants";
import {
  ChevronRight,
  Layers,
  Briefcase,
  FileText,
  Shield,
  HelpCircle,
  Building,
  ArrowUpRight,
} from "lucide-react";

export const metadata = constructMetadata({
  title: "HTML Sitemap | EcomAmigo Marketplace Operations",
  description:
    "Complete directory and index of all pages, marketplace services, case studies, operational guides, and legal policies on EcomAmigo.",
  path: "/sitemap",
});

export default function HtmlSitemapPage() {
  const services = getAllServices();
  const caseStudies = getAllCaseStudies();

  const breadcrumbsJsonLd = getBreadcrumbJsonLd([
    { name: "Home", url: "/" },
    { name: "HTML Sitemap", url: "/sitemap" },
  ]);

  return (
    <div className="relative bg-background text-ink">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbsJsonLd) }}
      />

      {/* Hero Header */}
      <section className="py-12 sm:py-16 lg:py-20 border-b border-border-subtle bg-surface">
        <div className="max-w-11/12 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav
            aria-label="Breadcrumb"
            className="flex items-center gap-2 text-xs text-ink-subtle mb-4"
          >
            <Link href="/" className="hover:text-accent transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-ink font-semibold">HTML Sitemap</span>
          </nav>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-ink tracking-tight mb-3">
            HTML Site Directory
          </h1>
          <p className="text-sm sm:text-base text-ink-muted max-w-2xl leading-relaxed">
            A comprehensive index of all public web pages, marketplace service
            offerings, client case studies, and compliance policies across{" "}
            {COMPANY.name}.
          </p>
        </div>
      </section>

      {/* Main Sitemap Index Grid */}
      <main className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-11/12 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* 1. Core Pages */}
            <div className="bg-paper p-6 rounded-2xl border border-border shadow-xs space-y-4">
              <div className="flex items-center gap-2.5 text-accent font-bold text-sm uppercase tracking-wider font-heading pb-2 border-b border-border-subtle">
                <Building className="w-4 h-4" />
                <span>Primary Navigation</span>
              </div>
              <ul className="space-y-2.5 text-xs sm:text-sm">
                <li>
                  <Link
                    href="/"
                    className="text-ink-muted hover:text-accent font-medium transition-colors"
                  >
                    Home Page
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="text-ink-muted hover:text-accent font-medium transition-colors"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/how-it-works"
                    className="text-ink-muted hover:text-accent font-medium transition-colors"
                  >
                    How It Works (5 Stages)
                  </Link>
                </li>
                <li>
                  <Link
                    href="/pricing"
                    className="text-ink-muted hover:text-accent font-medium transition-colors"
                  >
                    Pricing &amp; Retainers
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-ink-muted hover:text-accent font-medium transition-colors"
                  >
                    Free Store Audit Request
                  </Link>
                </li>
              </ul>
            </div>

            {/* 2. Specialized Services */}
            <div className="bg-paper p-6 rounded-2xl border border-border shadow-xs space-y-4">
              <div className="flex items-center gap-2.5 text-accent font-bold text-sm uppercase tracking-wider font-heading pb-2 border-b border-border-subtle">
                <Layers className="w-4 h-4" />
                <span>Marketplace Services</span>
              </div>
              <ul className="space-y-2.5 text-xs sm:text-sm">
                <li>
                  <Link
                    href="/services"
                    className="text-ink font-semibold hover:text-accent transition-colors block"
                  >
                    All Services Directory
                  </Link>
                </li>
                {services.map((service) => (
                  <li key={service.id}>
                    <Link
                      href={`/services/${service.slug}`}
                      className="text-ink-muted hover:text-accent transition-colors block"
                    >
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* 3. Case Studies */}
            <div className="bg-paper p-6 rounded-2xl border border-border shadow-xs space-y-4">
              <div className="flex items-center gap-2.5 text-accent font-bold text-sm uppercase tracking-wider font-heading pb-2 border-b border-border-subtle">
                <Briefcase className="w-4 h-4" />
                <span>Client Case Studies</span>
              </div>
              <ul className="space-y-2.5 text-xs sm:text-sm">
                <li>
                  <Link
                    href="/case-studies"
                    className="text-ink font-semibold hover:text-accent transition-colors block"
                  >
                    All Case Studies
                  </Link>
                </li>
                {caseStudies.map((study) => (
                  <li key={study.slug}>
                    <Link
                      href={`/case-studies/${study.slug}`}
                      className="text-ink-muted hover:text-accent transition-colors block"
                    >
                      {study.clientName} ({study.industry})
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* 4. Support & FAQs */}
            <div className="bg-paper p-6 rounded-2xl border border-border shadow-xs space-y-4">
              <div className="flex items-center gap-2.5 text-accent font-bold text-sm uppercase tracking-wider font-heading pb-2 border-b border-border-subtle">
                <HelpCircle className="w-4 h-4" />
                <span>Support &amp; Inquiries</span>
              </div>
              <ul className="space-y-2.5 text-xs sm:text-sm">
                <li>
                  <Link
                    href="/faq"
                    className="text-ink-muted hover:text-accent transition-colors"
                  >
                    Frequently Asked Questions (FAQ)
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-ink-muted hover:text-accent transition-colors"
                  >
                    Confidential Store Audit Form
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact#schedule"
                    className="text-ink-muted hover:text-accent transition-colors"
                  >
                    Cal.com 15-Min Executive Scheduler
                  </Link>
                </li>
                {COMPANY.socialLinks.map((social) => (
                  <li key={social.platform}>
                    <a
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-ink-muted hover:text-accent transition-colors inline-flex items-center gap-1"
                    >
                      <span>{social.label} Profile</span>
                      <ArrowUpRight className="w-3 h-3 text-accent" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* 5. Legal & Policies */}
            <div className="bg-paper p-6 rounded-2xl border border-border shadow-xs space-y-4">
              <div className="flex items-center gap-2.5 text-accent font-bold text-sm uppercase tracking-wider font-heading pb-2 border-b border-border-subtle">
                <Shield className="w-4 h-4" />
                <span>Legal &amp; Compliance</span>
              </div>
              <ul className="space-y-2.5 text-xs sm:text-sm">
                <li>
                  <Link
                    href="/privacy-policy"
                    className="text-ink-muted hover:text-accent transition-colors"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/terms-of-service"
                    className="text-ink-muted hover:text-accent transition-colors"
                  >
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="/sitemap" className="text-accent font-semibold">
                    HTML Sitemap (Current)
                  </Link>
                </li>
              </ul>
            </div>

            {/* 6. Machine XML Feed */}
            <div className="bg-paper p-6 rounded-2xl border border-border shadow-xs space-y-4">
              <div className="flex items-center gap-2.5 text-accent font-bold text-sm uppercase tracking-wider font-heading pb-2 border-b border-border-subtle">
                <FileText className="w-4 h-4" />
                <span>Search Engine Feeds</span>
              </div>
              <ul className="space-y-2.5 text-xs sm:text-sm">
                <li>
                  <a
                    href="/sitemap.xml"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-ink-muted hover:text-accent transition-colors"
                  >
                    XML Sitemap (Google Index Feed)
                  </a>
                </li>
                <li>
                  <a
                    href="/robots.txt"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-ink-muted hover:text-accent transition-colors"
                  >
                    Robots.txt Configuration
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
