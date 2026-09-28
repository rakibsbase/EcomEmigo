import * as React from "react";
import Link from "next/link";
import { constructMetadata } from "@/lib/seo";
import { COMPANY } from "@/lib/constants";
import { LegalToc } from "@/components/shared/legal-toc";
import { FeaturesStrip } from "@/components/home/features-strip";
import {
  FileCheck,
  Scale,
  Mail,
  Phone,
  MapPin,
  ChevronRight,
  ArrowRight,
  ShieldCheck,
  BadgeDollarSign,
} from "lucide-react";

export const metadata = constructMetadata({
  title: "Terms of Service | EcomAmigo",
  description:
    "Review the operational agreement, retainer terms, and service standards governing e-commerce marketplace management by EcomAmigo LLC.",
  path: "/terms-of-service",
});

const TERMS_SECTIONS = [
  { id: "agreement", label: "Agreement to Terms", number: "01" },
  { id: "services-scope", label: "Scope of Management Services", number: "02" },
  { id: "account-access", label: "Delegated Platform Access", number: "03" },
  { id: "retainers-billing", label: "Retainers & Billing Cycle", number: "04" },
  {
    id: "intellectual-property",
    label: "Intellectual Property Rights",
    number: "05",
  },
  {
    id: "platform-compliance",
    label: "Marketplace Policies & Disclaimers",
    number: "06",
  },
  {
    id: "liability-disclaimer",
    label: "Limitation of Liability",
    number: "07",
  },
  { id: "indemnification", label: "Mutual Indemnification", number: "08" },
  { id: "governing-law", label: "Governing Law & Arbitration", number: "09" },
  { id: "contact-info", label: "Corporate Legal Notices", number: "10" },
];

export default function TermsOfServicePage() {
  return (
    <div className="relative bg-background text-ink">
      {/* ========================================================
          1. HERO HEADER SECTION
          ======================================================== */}
      <section
        className="relative pt-12 sm:pt-16 pb-12 sm:pb-16 border-b border-border-subtle"
        aria-label="Terms of Service Header"
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
              Terms of Service
            </span>
          </nav>

          {/* Hero Header Content */}
          <div className="max-w-4xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-accent-subtle border border-accent/20 text-accent text-xs font-bold uppercase tracking-wider font-heading">
              <Scale className="w-4 h-4" />
              <span>Commercial Terms &amp; Retainer Agreement</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-ink tracking-tight leading-[1.15]">
              Terms of Service
            </h1>

            <p className="text-sm sm:text-base lg:text-lg text-ink-muted leading-relaxed">
              These Terms of Service govern your access to {COMPANY.siteUrl} and
              establish the legal framework for our monthly marketplace
              management retainers, confidential store audits, and growth
              consulting engagements.
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
                <strong>Governing Entity:</strong> {COMPANY.legalName} (
                {COMPANY.location})
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          2. TWO-COLUMN EDITORIAL LEGAL LAYOUT
          (Sticky Left TOC + Scrolling Right Terms Body)
          ======================================================== */}
      <section className="py-16 sm:py-20 bg-background">
        <div className="max-w-11/12 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            {/* Left Sticky Sidebar: Table of Contents & Retainer Model */}
            <aside className="lg:col-span-4 lg:sticky lg:top-28 space-y-6 self-start">
              <LegalToc items={TERMS_SECTIONS} title="Terms Sections" />

              {/* Predictable Retainer Model Card */}
              <div className="p-6 rounded-2xl bg-gradient-to-br from-[#0B1528] to-[#040810] border border-[#162744] text-white space-y-3.5 shadow-lg">
                <div className="flex items-center gap-2 text-accent">
                  <BadgeDollarSign className="w-4 h-4" />
                  <span className="text-xs font-mono uppercase tracking-wider font-bold">
                    Fair Agency Model
                  </span>
                </div>
                <h4 className="text-base font-bold font-heading">
                  Fixed Monthly Retainers
                </h4>
                <p className="text-xs text-white/80 leading-relaxed">
                  We charge predictable, fixed monthly retainers. We never take
                  a percentage of your gross sales, and we do not enforce annual
                  lock-in contracts.
                </p>
                <div className="pt-2 border-t border-white/10 flex items-center justify-between">
                  <Link
                    href="/pricing"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-accent hover:text-white transition-colors"
                  >
                    <span>View Pricing Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

              {/* Corporate Contact Card */}
              <div className="p-5 rounded-2xl bg-paper border border-border space-y-3 shadow-2xs text-xs text-ink-muted">
                <div className="flex items-center gap-2 text-ink font-bold font-heading pb-1 border-b border-border-subtle">
                  <FileCheck className="w-4 h-4 text-accent" />
                  <span>Corporate Legal Office</span>
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

            {/* Right Column: Detailed Terms Clauses */}
            <main className="lg:col-span-8 space-y-12 sm:space-y-16 min-w-0">
              {/* SECTION 1 */}
              <section id="agreement" className="scroll-mt-28 space-y-4">
                <div className="flex items-center gap-2 pb-2 border-b border-border-subtle">
                  <span className="font-mono text-xs font-bold text-accent px-2 py-0.5 rounded bg-accent-subtle">
                    Section 01
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold font-heading text-ink">
                    Agreement to Terms
                  </h2>
                </div>
                <div className="space-y-3 text-xs sm:text-sm text-ink-muted leading-relaxed">
                  <p>
                    These Terms of Service constitute a legally binding
                    agreement between you (whether individually or representing
                    a corporate brand or merchant entity, &quot;Client&quot;,
                    &quot;you&quot;, or &quot;your&quot;) and{" "}
                    {COMPANY.legalName} (&quot;{COMPANY.name}&quot;,
                    &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;).
                  </p>
                  <p>
                    By visiting our website, requesting a free forensic store
                    audit, booking a consultation call, or executing an
                    operational statement of work, you confirm that you have
                    read, understood, and agreed to be bound by all of these
                    Terms of Service. If you do not agree with all of these
                    terms, you must immediately discontinue use of our site and
                    services.
                  </p>
                </div>
              </section>

              {/* SECTION 2 */}
              <section id="services-scope" className="scroll-mt-28 space-y-4">
                <div className="flex items-center gap-2 pb-2 border-b border-border-subtle">
                  <span className="font-mono text-xs font-bold text-accent px-2 py-0.5 rounded bg-accent-subtle">
                    Section 02
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold font-heading text-ink">
                    Scope of E-Commerce Management Services
                  </h2>
                </div>
                <div className="space-y-3 text-xs sm:text-sm text-ink-muted leading-relaxed">
                  <p>
                    {COMPANY.name} provides professional, managed e-commerce
                    agency services across multi-channel retail ecosystems,
                    including:
                  </p>
                  <ul className="space-y-1.5 list-disc pl-5">
                    <li>
                      <strong>Marketplace Storefront Management:</strong>{" "}
                      Ongoing catalog hygiene, listing creation, variation
                      mapping, and backend attribute optimization on Amazon,
                      TikTok Shop, Walmart, and Shopify.
                    </li>
                    <li>
                      <strong>Advertising &amp; PPC Management:</strong>{" "}
                      Campaign architecture, negative keyword harvesting, bid
                      management, and Total Advertising Cost of Sale (TACoS)
                      monitoring.
                    </li>
                    <li>
                      <strong>Inventory &amp; Inbound Planning:</strong>{" "}
                      Replenishment forecasting, FBA and WFS shipment manifest
                      generation, and stranded inventory triage.
                    </li>
                    <li>
                      <strong>Brand Protection &amp; Customer Care:</strong>{" "}
                      Account health monitoring, Buy Box defense, IP
                      notification assistance, and buyer message SLAs.
                    </li>
                  </ul>
                  <p>
                    The specific deliverables, SKU counts, and managed channels
                    for any active engagement are defined in the Client&apos;s
                    applicable retainer tier (Launch, Growth, or Scale) and
                    confirmed in the mutual operational onboarding document.
                  </p>
                </div>
              </section>

              {/* SECTION 3 */}
              <section id="account-access" className="scroll-mt-28 space-y-4">
                <div className="flex items-center gap-2 pb-2 border-b border-border-subtle">
                  <span className="font-mono text-xs font-bold text-accent px-2 py-0.5 rounded bg-accent-subtle">
                    Section 03
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold font-heading text-ink">
                    Delegated Platform Credentials &amp; Access
                  </h2>
                </div>
                <div className="p-5 rounded-2xl bg-surface border border-border space-y-3 text-xs sm:text-sm text-ink-muted leading-relaxed">
                  <div className="flex items-center gap-2 text-ink font-bold text-sm font-heading">
                    <ShieldCheck className="w-5 h-5 text-accent" />
                    <span>Secondary User Permissions Model</span>
                  </div>
                  <p>
                    To execute operational services, Client grants{" "}
                    {COMPANY.name} delegated secondary user permissions within
                    Client&apos;s marketplace administrative portals (e.g.,
                    Amazon Seller Central Secondary User, TikTok Shop Seller
                    Center Staff Role, Walmart Delegated Access).
                  </p>
                  <p>
                    <strong>
                      Client retains 100% legal, financial, and administrative
                      ownership
                    </strong>{" "}
                    of all marketplace accounts, banking disbursement accounts,
                    tax registrations, and primary master credentials. Client
                    explicitly agrees <strong>never</strong> to share root
                    master passwords, two-factor authentication recovery codes,
                    or financial disbursement access with our agency.
                  </p>
                </div>
              </section>

              {/* SECTION 4 */}
              <section
                id="retainers-billing"
                className="scroll-mt-28 space-y-4"
              >
                <div className="flex items-center gap-2 pb-2 border-b border-border-subtle">
                  <span className="font-mono text-xs font-bold text-accent px-2 py-0.5 rounded bg-accent-subtle">
                    Section 04
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold font-heading text-ink">
                    Retainers, Billing Cycles &amp; Cancellation
                  </h2>
                </div>
                <div className="space-y-3 text-xs sm:text-sm text-ink-muted leading-relaxed">
                  <p>
                    Our engagements operate on straightforward, predictable
                    monthly retainers:
                  </p>
                  <div className="space-y-2">
                    <div className="p-3.5 rounded-xl bg-paper border border-border">
                      <strong className="text-ink block mb-0.5">
                        Fixed Monthly Invoicing:
                      </strong>
                      Retainers are billed in advance at the start of each
                      30-day operational service period via automated credit
                      card or corporate ACH transfer.
                    </div>
                    <div className="p-3.5 rounded-xl bg-paper border border-border">
                      <strong className="text-ink block mb-0.5">
                        Zero Percentage Surcharges:
                      </strong>
                      {COMPANY.name} does not charge commissions, percentage
                      fees on gross sales, or surprise performance cuts.
                    </div>
                    <div className="p-3.5 rounded-xl bg-paper border border-border">
                      <strong className="text-ink block mb-0.5">
                        Month-to-Month Flexibility:
                      </strong>
                      Engagements do not require multi-month or annual lock-ins.
                      Either party may terminate or pause the engagement by
                      providing a simple{" "}
                      <strong>30-day advance written notice</strong> prior to
                      the start of the next billing cycle.
                    </div>
                  </div>
                </div>
              </section>

              {/* SECTION 5 */}
              <section
                id="intellectual-property"
                className="scroll-mt-28 space-y-4"
              >
                <div className="flex items-center gap-2 pb-2 border-b border-border-subtle">
                  <span className="font-mono text-xs font-bold text-accent px-2 py-0.5 rounded bg-accent-subtle">
                    Section 05
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold font-heading text-ink">
                    Intellectual Property &amp; Asset Ownership
                  </h2>
                </div>
                <div className="space-y-3 text-xs sm:text-sm text-ink-muted leading-relaxed">
                  <p>
                    <strong>Client Ownership:</strong> Client retains sole and
                    exclusive ownership of all pre-existing trademarks, brand
                    assets, product photography, catalog data, customer reviews,
                    and sales data. Any A+ Content, Brand Story graphics, or
                    copy written by {COMPANY.name} for Client&apos;s storefronts
                    becomes the permanent property of Client upon payment of
                    applicable retainers.
                  </p>
                  <p>
                    <strong>Agency Intellectual Property:</strong>{" "}
                    {COMPANY.name} retains sole ownership of its proprietary
                    internal operating procedures, diagnostic software scripts,
                    analytical spreadsheet templates, forecasting models, and
                    agency workflows developed independently of Client
                    engagements.
                  </p>
                </div>
              </section>

              {/* SECTION 6 */}
              <section
                id="platform-compliance"
                className="scroll-mt-28 space-y-4"
              >
                <div className="flex items-center gap-2 pb-2 border-b border-border-subtle">
                  <span className="font-mono text-xs font-bold text-accent px-2 py-0.5 rounded bg-accent-subtle">
                    Section 06
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold font-heading text-ink">
                    Marketplace Policies &amp; Third-Party Platforms
                  </h2>
                </div>
                <div className="space-y-3 text-xs sm:text-sm text-ink-muted leading-relaxed">
                  <p>
                    Client acknowledges that third-party marketplaces
                    (Amazon.com, Inc., TikTok Inc., Walmart Inc., and Shopify
                    Inc.) operate independent, dynamic platforms governed by
                    their own proprietary terms, algorithmic rankings, and
                    policy enforcement mechanisms.
                  </p>
                  <p>
                    While {COMPANY.name} strictly adheres to all official
                    marketplace Terms of Service and exercises professional care
                    to safeguard account health:
                  </p>
                  <ul className="space-y-1.5 list-disc pl-5">
                    <li>
                      Client is solely responsible for product safety
                      certifications, regulatory compliance (e.g., FDA, FTC,
                      EPA), authentic manufacturer warranties, and IP
                      non-infringement.
                    </li>
                    <li>
                      Third-party marketplaces hold ultimate authority over
                      listing suppressions, Buy Box algorithms, inventory
                      storage limits, and account enforcement. {COMPANY.name}{" "}
                      cannot be held liable for unilateral platform decisions
                      made by third-party marketplace operators.
                    </li>
                  </ul>
                </div>
              </section>

              {/* SECTION 7 */}
              <section
                id="liability-disclaimer"
                className="scroll-mt-28 space-y-4"
              >
                <div className="flex items-center gap-2 pb-2 border-b border-border-subtle">
                  <span className="font-mono text-xs font-bold text-accent px-2 py-0.5 rounded bg-accent-subtle">
                    Section 07
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold font-heading text-ink">
                    Disclaimer of Warranties &amp; Limitation of Liability
                  </h2>
                </div>
                <div className="space-y-3 text-xs sm:text-sm text-ink-muted leading-relaxed">
                  <p className="uppercase text-[11px] font-bold text-ink-subtle tracking-wider">
                    Disclaimer of Specific Sales Guarantees
                  </p>
                  <p>
                    E-commerce sales velocity and advertising return on ad spend
                    (ROAS) are influenced by external market forces, supply
                    chain availability, competitor pricing, and macroeconomic
                    factors beyond any agency&apos;s control. Accordingly,{" "}
                    {COMPANY.name} provides services on an &quot;as-is&quot;
                    professional effort basis and does not guarantee specific
                    numerical revenue figures or profit margins.
                  </p>
                  <p className="uppercase text-[11px] font-bold text-ink-subtle tracking-wider pt-2">
                    Cap on Liability
                  </p>
                  <p>
                    To the maximum extent permitted by applicable law, neither{" "}
                    {COMPANY.legalName} nor its officers, employees, or
                    contractors shall be liable for indirect, incidental,
                    special, consequential, or punitive damages (including loss
                    of profits, data, or goodwill). In no event shall our total
                    aggregate liability arising out of or related to this
                    agreement exceed the total retainers paid by Client to{" "}
                    {COMPANY.name} in the three (3) months preceding the
                    incident giving rise to liability.
                  </p>
                </div>
              </section>

              {/* SECTION 8 */}
              <section id="indemnification" className="scroll-mt-28 space-y-4">
                <div className="flex items-center gap-2 pb-2 border-b border-border-subtle">
                  <span className="font-mono text-xs font-bold text-accent px-2 py-0.5 rounded bg-accent-subtle">
                    Section 08
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold font-heading text-ink">
                    Mutual Indemnification
                  </h2>
                </div>
                <div className="space-y-3 text-xs sm:text-sm text-ink-muted leading-relaxed">
                  <p>
                    Client agrees to defend, indemnify, and hold harmless{" "}
                    {COMPANY.legalName} against any third-party claims,
                    liabilities, damages, and expenses (including reasonable
                    attorneys&apos; fees) arising from: (a) defects or safety
                    claims concerning Client&apos;s physical products; (b)
                    Client&apos;s infringement of third-party intellectual
                    property or patents; or (c) Client&apos;s breach of
                    applicable laws.
                  </p>
                  <p>
                    {COMPANY.name} agrees to defend, indemnify, and hold
                    harmless Client against third-party claims resulting
                    directly from gross negligence, willful misconduct, or
                    unauthorized public disclosure of Client&apos;s confidential
                    proprietary data by our personnel.
                  </p>
                </div>
              </section>

              {/* SECTION 9 */}
              <section id="governing-law" className="scroll-mt-28 space-y-4">
                <div className="flex items-center gap-2 pb-2 border-b border-border-subtle">
                  <span className="font-mono text-xs font-bold text-accent px-2 py-0.5 rounded bg-accent-subtle">
                    Section 09
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold font-heading text-ink">
                    Governing Law &amp; Dispute Resolution
                  </h2>
                </div>
                <div className="space-y-3 text-xs sm:text-sm text-ink-muted leading-relaxed">
                  <p>
                    These Terms of Service and any commercial dispute arising
                    between Client and {COMPANY.name} shall be governed by and
                    construed in accordance with the laws of the{" "}
                    <strong>State of California</strong>, United States, without
                    regard to conflict of law principles.
                  </p>
                  <p>
                    The parties agree to attempt in good faith to resolve any
                    dispute through informal executive mediation before
                    initiating legal proceedings. If informal mediation fails
                    within thirty (30) days, the dispute shall be resolved
                    through confidential binding arbitration administered by the
                    American Arbitration Association (AAA) in the County of San
                    Diego, California.
                  </p>
                </div>
              </section>

              {/* SECTION 10 */}
              <section id="contact-info" className="scroll-mt-28 space-y-4">
                <div className="flex items-center gap-2 pb-2 border-b border-border-subtle">
                  <span className="font-mono text-xs font-bold text-accent px-2 py-0.5 rounded bg-accent-subtle">
                    Section 10
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold font-heading text-ink">
                    Corporate Legal Notices &amp; Inquiries
                  </h2>
                </div>
                <div className="p-6 rounded-2xl bg-paper border border-border space-y-3 text-xs sm:text-sm text-ink-muted leading-relaxed">
                  <p>
                    For formal contractual notices, amendments, or inquiries
                    regarding these Terms of Service, please contact our legal
                    counsel:
                  </p>
                  <div className="space-y-1 font-medium text-ink pt-1">
                    <p className="font-bold">{COMPANY.legalName}</p>
                    <p>Attn: Legal &amp; Client Contracts</p>
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
