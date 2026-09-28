import * as React from "react";
import Link from "next/link";
import { constructMetadata } from "@/lib/seo";
import { COMPANY } from "@/lib/constants";
import { LegalToc } from "@/components/shared/legal-toc";
import { FeaturesStrip } from "@/components/home/features-strip";
import {
  ShieldCheck,
  Lock,
  Mail,
  Phone,
  MapPin,
  ChevronRight,
  ArrowRight,
  FileText,
} from "lucide-react";

export const metadata = constructMetadata({
  title: "Privacy Policy | EcomAmigo",
  description:
    "Learn how EcomAmigo LLC collects, uses, protects, and handles confidential client store information, marketplace credentials, and personal data.",
  path: "/privacy-policy",
});

const PRIVACY_SECTIONS = [
  { id: "introduction", label: "Introduction & Corporate Scope", number: "01" },
  {
    id: "information-collected",
    label: "Information We Collect",
    number: "02",
  },
  {
    id: "how-we-use-information",
    label: "How We Use Information",
    number: "03",
  },
  {
    id: "confidentiality-nda",
    label: "Confidentiality & Non-Disclosure",
    number: "04",
  },
  {
    id: "third-party-subprocessors",
    label: "Subprocessors & Platforms",
    number: "05",
  },
  {
    id: "security-retention",
    label: "Data Security & Retention",
    number: "06",
  },
  {
    id: "privacy-rights",
    label: "Your Privacy Rights (CCPA/GDPR)",
    number: "07",
  },
  { id: "contact-officer", label: "Contact Information", number: "08" },
];

export default function PrivacyPolicyPage() {
  return (
    <div className="relative bg-background text-ink">
      {/* ========================================================
          1. HERO HEADER SECTION
          ======================================================== */}
      <section
        className="relative pt-12 sm:pt-16 pb-12 sm:pb-16 border-b border-border-subtle"
        aria-label="Privacy Policy Header"
      >
        <div
          className="absolute inset-0 -z-10 overflow-hidden"
          aria-hidden="true"
        >
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_20%,var(--accent-subtle)_0%,transparent_100%)] opacity-70" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/50 to-background" />
        </div>

        <div className="max-w-11/12 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb Navigation */}
          <nav
            aria-label="Breadcrumbs"
            className="flex items-center gap-2 text-xs text-ink-subtle mb-6 font-medium"
          >
            <Link href="/" className="hover:text-accent transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-ink font-semibold truncate">
              Privacy Policy
            </span>
          </nav>

          {/* Hero Header Content */}
          <div className="max-w-4xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-accent-subtle border border-accent/20 text-accent text-xs font-bold uppercase tracking-wider font-heading">
              <ShieldCheck className="w-4 h-4" />
              <span>Data Protection &amp; Confidentiality</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-ink tracking-tight leading-[1.15]">
              Privacy Policy
            </h1>

            <p className="text-sm sm:text-base lg:text-lg text-ink-muted leading-relaxed">
              At {COMPANY.legalName} (&quot;{COMPANY.name}&quot;,
              &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;), we treat your
              business data, marketplace revenue statistics, and proprietary
              catalog assets with absolute institutional discretion.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4 text-xs text-ink-muted">
              <span>
                <strong>Effective Date:</strong> January 1, 2026
              </span>
              <span>•</span>
              <span>
                <strong>Last Updated:</strong> September 2026
              </span>
              <span>•</span>
              <span>
                <strong>Entity:</strong> {COMPANY.legalName} ({COMPANY.location}
                )
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          2. TWO-COLUMN EDITORIAL LEGAL LAYOUT
          (Sticky Left TOC + Scrolling Right Policy Body)
          ======================================================== */}
      <section className="py-16 sm:py-20 bg-background">
        <div className="max-w-11/12 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            {/* Left Sticky Sidebar: Table of Contents & Quick Contact */}
            <aside className="lg:col-span-4 lg:sticky lg:top-28 space-y-6 self-start">
              <LegalToc items={PRIVACY_SECTIONS} title="Policy Sections" />

              {/* Data Security Summary Card */}
              <div className="p-6 rounded-2xl bg-gradient-to-br from-[#0B1528] to-[#040810] border border-[#162744] text-white space-y-3.5 shadow-lg">
                <div className="flex items-center gap-2 text-accent">
                  <Lock className="w-4 h-4" />
                  <span className="text-xs font-mono uppercase tracking-wider font-bold">
                    Zero Data Selling
                  </span>
                </div>
                <h4 className="text-base font-bold font-heading">
                  100% Confidential Guarantee
                </h4>
                <p className="text-xs text-white/80 leading-relaxed">
                  We never sell, rent, or monetize your store data, SKU margins,
                  supplier identities, or revenue metrics. All store audits are
                  conducted under strict non-disclosure obligations.
                </p>
                <div className="pt-2 border-t border-white/10">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-accent hover:text-white transition-colors"
                  >
                    <span>Contact Privacy Team</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

              {/* Legal Address & Quick Contact */}
              <div className="p-5 rounded-2xl bg-paper border border-border space-y-3 shadow-2xs text-xs text-ink-muted">
                <div className="flex items-center gap-2 text-ink font-bold font-heading pb-1 border-b border-border-subtle">
                  <FileText className="w-4 h-4 text-accent" />
                  <span>Corporate Inquiries</span>
                </div>
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <MapPin className="w-3.5 h-3.5 text-ink-subtle shrink-0 mt-0.5" />
                    <span>
                      {COMPANY.fullAddress}, {COMPANY.location}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="w-3.5 h-3.5 text-ink-subtle shrink-0" />
                    <a
                      href={`mailto:${COMPANY.email}`}
                      className="hover:text-accent underline"
                    >
                      {COMPANY.email}
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-3.5 h-3.5 text-ink-subtle shrink-0" />
                    <a
                      href={`tel:${COMPANY.phone}`}
                      className="hover:text-accent"
                    >
                      {COMPANY.phone}
                    </a>
                  </div>
                </div>
              </div>
            </aside>

            {/* Right Column: Detailed Policy Clauses */}
            <main className="lg:col-span-8 space-y-12 sm:space-y-16 min-w-0">
              {/* SECTION 1 */}
              <section id="introduction" className="scroll-mt-28 space-y-4">
                <div className="flex items-center gap-2 pb-2 border-b border-border-subtle">
                  <span className="font-mono text-xs font-bold text-accent px-2 py-0.5 rounded bg-accent-subtle">
                    Section 01
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold font-heading text-ink">
                    Introduction &amp; Corporate Scope
                  </h2>
                </div>
                <div className="prose prose-sm max-w-none text-xs sm:text-sm text-ink-muted leading-relaxed space-y-3">
                  <p>
                    {COMPANY.legalName} (&quot;{COMPANY.name}&quot;,
                    &quot;Company&quot;, &quot;we&quot;, &quot;our&quot;, or
                    &quot;us&quot;) operates the website located at{" "}
                    <a
                      href={COMPANY.siteUrl}
                      className="text-accent font-semibold underline"
                    >
                      {COMPANY.siteUrl}
                    </a>{" "}
                    and delivers dedicated e-commerce store management,
                    diagnostic auditing, listing optimization, advertising
                    coordination, and operational fulfillment support across
                    third-party marketplaces including Amazon, TikTok Shop,
                    Walmart Marketplace, and Shopify.
                  </p>
                  <p>
                    This Privacy Policy details the types of information we
                    collect from prospective brand partners, active clients, and
                    website visitors; how that data is utilized and secured; and
                    the choices you hold regarding your personal and proprietary
                    business information. By accessing our website, requesting a
                    free store audit, or engaging our management services, you
                    acknowledge the terms described in this policy.
                  </p>
                </div>
              </section>

              {/* SECTION 2 */}
              <section
                id="information-collected"
                className="scroll-mt-28 space-y-4"
              >
                <div className="flex items-center gap-2 pb-2 border-b border-border-subtle">
                  <span className="font-mono text-xs font-bold text-accent px-2 py-0.5 rounded bg-accent-subtle">
                    Section 02
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold font-heading text-ink">
                    Information We Collect
                  </h2>
                </div>
                <div className="space-y-4 text-xs sm:text-sm text-ink-muted leading-relaxed">
                  <p>
                    We collect information directly from you when you submit our
                    store audit request form, schedule an introductory
                    conference via our calendar scheduling tool, contact our
                    team via email or telephone, or grant operational
                    permissions to our agency.
                  </p>

                  <div className="p-5 rounded-2xl bg-surface border border-border space-y-2.5">
                    <h3 className="font-bold text-sm text-ink font-heading">
                      A. Store Diagnostic &amp; Business Information
                    </h3>
                    <ul className="space-y-1.5 list-disc pl-5">
                      <li>
                        Store and storefront URLs (Amazon storefront links,
                        TikTok Shop handles, Walmart seller URLs, Shopify
                        domains).
                      </li>
                      <li>
                        Estimated monthly sales volume brackets and historical
                        marketplace performance figures.
                      </li>
                      <li>
                        Active marketplace channels, catalog SKU counts, and
                        category classifications.
                      </li>
                      <li>
                        Primary business contact name, corporate email address,
                        telephone number, and brand name.
                      </li>
                    </ul>
                  </div>

                  <div className="p-5 rounded-2xl bg-surface border border-border space-y-2.5">
                    <h3 className="font-bold text-sm text-ink font-heading">
                      B. Delegated Secondary Operational Access
                    </h3>
                    <p>
                      For clients who engage our ongoing management retainers,
                      we receive delegated, role-restricted secondary user
                      permissions inside Seller Central, TikTok Shop Seller
                      Center, or Walmart Seller Center.{" "}
                      <strong>
                        We never request, store, or receive your root master
                        administrative passwords or banking disbursement
                        credentials.
                      </strong>
                    </p>
                  </div>

                  <div className="p-5 rounded-2xl bg-surface border border-border space-y-2.5">
                    <h3 className="font-bold text-sm text-ink font-heading">
                      C. Automated Device &amp; Browsing Telemetry
                    </h3>
                    <p>
                      When you navigate our website, our hosting infrastructure
                      automatically collects standard non-identifying telemetry
                      including your Internet Protocol (IP) address, browser
                      family, operating system, referring URLs, and interaction
                      timestamps. We use this telemetry strictly to diagnose
                      server stability, optimize performance, and prevent spam
                      or malicious bot activity.
                    </p>
                  </div>
                </div>
              </section>

              {/* SECTION 3 */}
              <section
                id="how-we-use-information"
                className="scroll-mt-28 space-y-4"
              >
                <div className="flex items-center gap-2 pb-2 border-b border-border-subtle">
                  <span className="font-mono text-xs font-bold text-accent px-2 py-0.5 rounded bg-accent-subtle">
                    Section 03
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold font-heading text-ink">
                    How We Use Your Information
                  </h2>
                </div>
                <div className="space-y-3 text-xs sm:text-sm text-ink-muted leading-relaxed">
                  <p>
                    We process collected information solely for legitimate
                    operational, commercial, and technical purposes directly
                    related to our e-commerce management engagements:
                  </p>
                  <ul className="space-y-2 list-disc pl-5">
                    <li>
                      <strong>Forensic Store Diagnostic Reports:</strong>{" "}
                      Compiling custom, comprehensive analyses of keyword
                      indexation, Buy Box retention, advertising TACoS
                      efficiency, and account health standing.
                    </li>
                    <li>
                      <strong>Day-to-Day Channel Operations:</strong> Executing
                      catalog optimization, inbound shipment planning, customer
                      inquiry resolution, and ad campaign adjustments on agreed
                      marketplaces.
                    </li>
                    <li>
                      <strong>Partner Communications:</strong> Dispatching audit
                      findings, weekly KPI summaries, bi-weekly strategic
                      agendas, and emergency policy alerts.
                    </li>
                    <li>
                      <strong>Security &amp; Fraud Prevention:</strong>{" "}
                      Identifying bot submissions on our forms, preventing
                      honeypot spam, and maintaining the technical integrity of
                      our services.
                    </li>
                    <li>
                      <strong>Legal &amp; Regulatory Compliance:</strong>{" "}
                      Fulfilling applicable state, federal, and international
                      corporate recordkeeping requirements.
                    </li>
                  </ul>
                </div>
              </section>

              {/* SECTION 4 */}
              <section
                id="confidentiality-nda"
                className="scroll-mt-28 space-y-4"
              >
                <div className="flex items-center gap-2 pb-2 border-b border-border-subtle">
                  <span className="font-mono text-xs font-bold text-accent px-2 py-0.5 rounded bg-accent-subtle">
                    Section 04
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold font-heading text-ink">
                    Confidentiality &amp; Non-Disclosure (NDA)
                  </h2>
                </div>
                <div className="p-6 rounded-2xl bg-surface border border-border space-y-3 text-xs sm:text-sm text-ink-muted leading-relaxed">
                  <div className="flex items-center gap-2 text-ink font-bold text-sm font-heading">
                    <ShieldCheck className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                    <span>Proprietary Brand Information Protection</span>
                  </div>
                  <p>
                    We recognize that e-commerce data—including wholesale
                    manufacturing costs, SKU profit margins, advertising target
                    keywords, manufacturer relationships, and unreleased product
                    roadmaps—is critical intellectual property.
                  </p>
                  <p>
                    {COMPANY.legalName} treats all client information as
                    strictly confidential. We execute standard mutual
                    Non-Disclosure Agreements (NDAs) prior to onboarding. We
                    never publish case studies, revenue screenshots, or brand
                    names without formal, written authorization from brand
                    executives. All performance data featured in public
                    materials is either anonymized or explicitly authorized.
                  </p>
                </div>
              </section>

              {/* SECTION 5 */}
              <section
                id="third-party-subprocessors"
                className="scroll-mt-28 space-y-4"
              >
                <div className="flex items-center gap-2 pb-2 border-b border-border-subtle">
                  <span className="font-mono text-xs font-bold text-accent px-2 py-0.5 rounded bg-accent-subtle">
                    Section 05
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold font-heading text-ink">
                    Subprocessors &amp; Platform Integrations
                  </h2>
                </div>
                <div className="space-y-3 text-xs sm:text-sm text-ink-muted leading-relaxed">
                  <p>
                    We do not sell, rent, or lease your personal or business
                    data. We transfer information exclusively to trusted
                    third-party infrastructure providers who assist in operating
                    our services, each bound by strict data processing
                    agreements:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                    <div className="p-4 rounded-xl bg-paper border border-border space-y-1">
                      <h4 className="font-bold text-xs text-ink">
                        Cloud Infrastructure
                      </h4>
                      <p className="text-[11px] text-ink-muted">
                        Vercel Inc. and Amazon Web Services for edge compute,
                        secure database hosting, and TLS-encrypted delivery.
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-paper border border-border space-y-1">
                      <h4 className="font-bold text-xs text-ink">
                        Transactional Email
                      </h4>
                      <p className="text-[11px] text-ink-muted">
                        Resend Technologies for programmatic delivery of audit
                        submissions, confirmation receipts, and operational
                        alerts.
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-paper border border-border space-y-1">
                      <h4 className="font-bold text-xs text-ink">
                        Meeting Scheduling
                      </h4>
                      <p className="text-[11px] text-ink-muted">
                        Cal.com, Inc. for direct calendar synchronization, video
                        conferencing dispatch, and consultation intake.
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-paper border border-border space-y-1">
                      <h4 className="font-bold text-xs text-ink">
                        Marketplace APIs
                      </h4>
                      <p className="text-[11px] text-ink-muted">
                        Official Amazon Selling Partner (SP) API, TikTok Shop
                        Open API, and Walmart Developer APIs for authorized
                        catalog sync.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* SECTION 6 */}
              <section
                id="security-retention"
                className="scroll-mt-28 space-y-4"
              >
                <div className="flex items-center gap-2 pb-2 border-b border-border-subtle">
                  <span className="font-mono text-xs font-bold text-accent px-2 py-0.5 rounded bg-accent-subtle">
                    Section 06
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold font-heading text-ink">
                    Data Security &amp; Retention Schedules
                  </h2>
                </div>
                <div className="space-y-3 text-xs sm:text-sm text-ink-muted leading-relaxed">
                  <p>
                    We deploy multi-layered organizational and technical
                    safeguards designed to protect personal and business
                    information against accidental loss, unauthorized access,
                    alteration, and disclosure:
                  </p>
                  <ul className="space-y-1.5 list-disc pl-5">
                    <li>
                      End-to-end transport encryption via modern Transport Layer
                      Security (TLS 1.3).
                    </li>
                    <li>
                      Mandatory multi-factor authentication (MFA/2FA) on all
                      internal operator workstations and communication portals.
                    </li>
                    <li>
                      Least-privilege operational access: team members are
                      granted access strictly to accounts relevant to their
                      operational role.
                    </li>
                  </ul>
                  <p>
                    We retain business contact details and store audit records
                    only as long as necessary to fulfill the engagement or
                    comply with legal requirements. Prospective partner store
                    audit reports are permanently purged after 12 months if no
                    commercial engagement ensues. Active client records are
                    maintained throughout the engagement and deleted within 30
                    days of written contract termination.
                  </p>
                </div>
              </section>

              {/* SECTION 7 */}
              <section id="privacy-rights" className="scroll-mt-28 space-y-4">
                <div className="flex items-center gap-2 pb-2 border-b border-border-subtle">
                  <span className="font-mono text-xs font-bold text-accent px-2 py-0.5 rounded bg-accent-subtle">
                    Section 07
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold font-heading text-ink">
                    Your Privacy Rights (California CCPA &amp; International)
                  </h2>
                </div>
                <div className="space-y-3 text-xs sm:text-sm text-ink-muted leading-relaxed">
                  <p>
                    Depending on your jurisdiction, you maintain specific rights
                    under privacy legislation such as the California Consumer
                    Privacy Act (CCPA), as amended by the California Privacy
                    Rights Act (CPRA), and the European Union General Data
                    Protection Regulation (GDPR):
                  </p>
                  <div className="space-y-2">
                    <div className="p-3.5 rounded-xl bg-surface border border-border-subtle">
                      <strong className="text-ink block mb-0.5">
                        Right to Know &amp; Access:
                      </strong>
                      You may request a disclosure of the categories and
                      specific pieces of personal information we have collected
                      about you.
                    </div>
                    <div className="p-3.5 rounded-xl bg-surface border border-border-subtle">
                      <strong className="text-ink block mb-0.5">
                        Right to Deletion:
                      </strong>
                      You may request that we delete personal or business
                      information collected from you, subject to legal record
                      retention requirements.
                    </div>
                    <div className="p-3.5 rounded-xl bg-surface border border-border-subtle">
                      <strong className="text-ink block mb-0.5">
                        Right to Non-Discrimination:
                      </strong>
                      We will never discriminate against you, alter service
                      retainers, or deny consultation access for exercising any
                      of your privacy rights.
                    </div>
                  </div>
                  <p>
                    To submit a formal request to know or delete, please email
                    our Privacy Compliance Officer at{" "}
                    <a
                      href={`mailto:${COMPANY.email}`}
                      className="text-accent font-semibold underline"
                    >
                      {COMPANY.email}
                    </a>{" "}
                    with the subject line &quot;Privacy Rights Request&quot;. We
                    verify all inquiries and respond within 30 calendar days.
                  </p>
                </div>
              </section>

              {/* SECTION 8 */}
              <section id="contact-officer" className="scroll-mt-28 space-y-4">
                <div className="flex items-center gap-2 pb-2 border-b border-border-subtle">
                  <span className="font-mono text-xs font-bold text-accent px-2 py-0.5 rounded bg-accent-subtle">
                    Section 08
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold font-heading text-ink">
                    Contact Our Privacy Officer
                  </h2>
                </div>
                <div className="p-6 rounded-2xl bg-paper border border-border space-y-3 text-xs sm:text-sm text-ink-muted leading-relaxed">
                  <p>
                    If you hold any inquiries, comments, or concerns regarding
                    this Privacy Policy or our operational data practices,
                    please contact our legal department:
                  </p>
                  <div className="space-y-1 font-medium text-ink pt-1">
                    <p className="font-bold">{COMPANY.legalName}</p>
                    <p>Attn: Privacy &amp; Data Compliance</p>
                    <p>{COMPANY.fullAddress}</p>
                    <p>{COMPANY.location}</p>
                    <p>
                      Email:{" "}
                      <a
                        href={`mailto:${COMPANY.email}`}
                        className="text-accent underline"
                      >
                        {COMPANY.email}
                      </a>
                    </p>
                    <p>
                      Telephone:{" "}
                      <a href={`tel:${COMPANY.phone}`} className="text-accent">
                        {COMPANY.phone}
                      </a>
                    </p>
                  </div>
                </div>
              </section>
            </main>
          </div>
        </div>
      </section>

      {/* Reusable Strip */}
      <FeaturesStrip />
    </div>
  );
}
