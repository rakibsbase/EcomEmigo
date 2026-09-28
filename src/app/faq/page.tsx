import Link from "next/link";
import { constructMetadata, getFaqJsonLd } from "@/lib/seo";
import { FAQS, COMPANY } from "@/lib/constants";
import { FAQAccordion } from "@/components/shared/faq-accordion";
import {
  ArrowRight,
  ShieldCheck,
  Boxes,
  BadgePercent,
  Clock,
  Mail,
  Calendar,
  HelpCircle,
  CheckCircle2,
} from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const metadata = constructMetadata({
  title: "Frequently Asked Questions | EcomAmigo Store Operations",
  description:
    "Common questions about multi-marketplace management, onboarding speed, advertising TACoS control, FBA inventory reconciliation, and month-to-month pricing.",
  path: "/faq",
});

export default function FAQPage() {
  const faqJsonLd = getFaqJsonLd();

  return (
    <div className="flex flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* 1. TOP SECTION */}
      <section className="pt-8 sm:pt-10 lg:pt-12 pb-12 sm:pb-16 lg:pb-20 bg-surface">
        <div className="w-full lg:max-w-11/12 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6 sm:mb-8 lg:mb-10 text-center max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 sm:px-3.5 py-1 sm:py-1.5 rounded-full bg-accent-subtle border border-accent/20 text-accent text-[11px] sm:text-xs font-semibold mb-3">
              <span>Operational Intelligence &amp; FAQs</span>
            </div>
            <h1 className="text-2xl sm:text-3xl lg:text-[34px] font-bold text-ink font-heading leading-tight">
              Frequently Asked Questions
            </h1>
            <p className="text-xs sm:text-sm text-ink-muted mt-2 max-w-xl mx-auto leading-relaxed">
              Transparent, operator-level answers to common questions about
              account safety, multi-channel inventory logistics, advertising
              TACoS control, and monthly retainers.
            </p>
          </div>

          {/* Operational Domains / Trust Pillars Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-4 lg:gap-5 mb-8 sm:mb-12 lg:mb-16 max-w-6xl mx-auto">
            <div className="rounded-xl sm:rounded-2xl border border-border bg-paper p-4 sm:p-5 transition-all duration-200 hover:border-accent/40 hover:shadow-xs motion-safe:hover:-translate-y-1 flex flex-col justify-between">
              <div>
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-accent-subtle text-accent flex items-center justify-center mb-3 shadow-2xs">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h3 className="text-sm sm:text-base font-bold text-ink font-heading mb-1">
                  Account Safety
                </h3>
                <p className="text-xs sm:text-[13px] text-ink-muted leading-relaxed">
                  Strict least-privilege secondary access. We never touch root
                  credentials or banking accounts.
                </p>
              </div>
              <div className="mt-3.5 pt-2.5 sm:pt-3 border-t border-border-subtle flex items-center gap-1.5 text-[11px] font-medium text-accent">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                <span>Zero Credential Risk</span>
              </div>
            </div>

            <div className="rounded-xl sm:rounded-2xl border border-border bg-paper p-4 sm:p-5 transition-all duration-200 hover:border-accent/40 hover:shadow-xs motion-safe:hover:-translate-y-1 flex flex-col justify-between">
              <div>
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-accent-subtle text-accent flex items-center justify-center mb-3 shadow-2xs">
                  <Boxes className="w-5 h-5" />
                </div>
                <h3 className="text-sm sm:text-base font-bold text-ink font-heading mb-1">
                  Inventory &amp; Logistics
                </h3>
                <p className="text-xs sm:text-[13px] text-ink-muted leading-relaxed">
                  Cross-channel safety stock thresholds and FBA/WFS inbound
                  tracking to eliminate stockouts.
                </p>
              </div>
              <div className="mt-3.5 pt-2.5 sm:pt-3 border-t border-border-subtle flex items-center gap-1.5 text-[11px] font-medium text-accent">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                <span>Automated Buffers</span>
              </div>
            </div>

            <div className="rounded-xl sm:rounded-2xl border border-border bg-paper p-4 sm:p-5 transition-all duration-200 hover:border-accent/40 hover:shadow-xs motion-safe:hover:-translate-y-1 flex flex-col justify-between">
              <div>
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-accent-subtle text-accent flex items-center justify-center mb-3 shadow-2xs">
                  <BadgePercent className="w-5 h-5" />
                </div>
                <h3 className="text-sm sm:text-base font-bold text-ink font-heading mb-1">
                  Flat Retainers
                </h3>
                <p className="text-xs sm:text-[13px] text-ink-muted leading-relaxed">
                  Fixed monthly rates with zero commission cuts on gross
                  revenue. You keep 100% of your margins.
                </p>
              </div>
              <div className="mt-3.5 pt-2.5 sm:pt-3 border-t border-border-subtle flex items-center gap-1.5 text-[11px] font-medium text-accent">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                <span>Zero Commission Claws</span>
              </div>
            </div>

            <div className="rounded-xl sm:rounded-2xl border border-border bg-paper p-4 sm:p-5 transition-all duration-200 hover:border-accent/40 hover:shadow-xs motion-safe:hover:-translate-y-1 flex flex-col justify-between">
              <div>
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-accent-subtle text-accent flex items-center justify-center mb-3 shadow-2xs">
                  <Clock className="w-5 h-5" />
                </div>
                <h3 className="text-sm sm:text-base font-bold text-ink font-heading mb-1">
                  Rapid Onboarding
                </h3>
                <p className="text-xs sm:text-[13px] text-ink-muted leading-relaxed">
                  5 to 7 business day deployment cycle. Immediate 24/7 account
                  monitoring without sales downtime.
                </p>
              </div>
              <div className="mt-3.5 pt-2.5 sm:pt-3 border-t border-border-subtle flex items-center gap-1.5 text-[11px] font-medium text-accent">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                <span>5-7 Day SLA</span>
              </div>
            </div>
          </div>

          {/* 2. THE 12 ACCORDION QUESTIONS */}
          <div className="max-w-4xl mx-auto">
            {/* Note on operational answers */}
            <div className="mb-5 sm:mb-6 p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-paper border border-border shadow-2xs flex items-center justify-between gap-3 text-xs text-ink-subtle">
              <div className="flex items-center gap-2.5 min-w-0">
                <div className="w-7 h-7 rounded-lg bg-accent-subtle text-accent flex items-center justify-center shrink-0">
                  <HelpCircle className="w-4 h-4" />
                </div>
                <span className="text-ink-muted font-medium text-xs sm:text-[13px] leading-snug truncate sm:whitespace-normal">
                  Official operational guidelines for multi-marketplace store
                  owners
                </span>
              </div>
              <span className="font-mono text-[10px] bg-surface text-ink-muted px-2.5 py-1 rounded-full border border-border font-semibold shrink-0">
                12 Questions
              </span>
            </div>

            <FAQAccordion items={FAQS} defaultOpenId="faq-1" />

            {/* Additional Inquiries Card */}
            <div className="mt-8 sm:mt-10 lg:mt-12 bg-paper rounded-xl sm:rounded-2xl border border-border p-5 sm:p-7 lg:p-8 shadow-xs hover:border-accent/40 transition-all duration-200 flex flex-col md:flex-row items-start md:items-center justify-between gap-5 sm:gap-6 group">
              <div className="flex items-start gap-3.5 sm:gap-4 text-left">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-accent-subtle text-accent flex items-center justify-center shrink-0 shadow-2xs group-hover:scale-105 transition-transform duration-200">
                  <HelpCircle className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-sm sm:text-base font-bold text-ink font-heading group-hover:text-accent transition-colors duration-200 leading-snug">
                    Have a unique catalog or marketplace question?
                  </h3>
                  <p className="text-xs sm:text-sm text-ink-muted leading-relaxed">
                    Our California operations team can review your specific
                    channel footprint directly.
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-2.5 sm:gap-3 shrink-0 w-full md:w-auto">
                <a
                  href={`mailto:${COMPANY.email}`}
                  className={cn(
                    buttonVariants({ variant: "tertiary", size: "sm" }),
                    "w-full sm:w-auto",
                  )}
                >
                  <Mail className="w-3.5 h-3.5 shrink-0 text-ink-subtle group-hover:text-inherit transition-colors" />
                  <span>Email Operations</span>
                </a>
                <a
                  href={COMPANY.calLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    buttonVariants({ variant: "secondary", size: "sm" }),
                    "w-full sm:w-auto",
                  )}
                >
                  <Calendar className="w-3.5 h-3.5 shrink-0 text-inherit transition-colors" />
                  <span>Book Call</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SIGNATURE BOTTOM CTA SECTION */}
      <section className="py-10 sm:py-14 md:py-18 lg:py-24 bg-background relative overflow-hidden">
        <div className="w-full lg:max-w-11/12 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-[20px] sm:rounded-[28px] lg:rounded-[36px] bg-[#10151C] dark:bg-paper border border-[#242A35] dark:border-border p-6 sm:p-10 lg:p-16 shadow-2xl">
            {/* Ambient Background Glows */}
            <div
              className="pointer-events-none absolute -right-24 -top-24 w-72 sm:w-96 h-72 sm:h-96 bg-accent/25 rounded-full blur-3xl"
              aria-hidden="true"
            />
            <div
              className="pointer-events-none absolute -left-24 -bottom-24 w-64 sm:w-80 h-64 sm:h-80 bg-accent-deep/20 rounded-full blur-3xl"
              aria-hidden="true"
            />
            <div
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(#242A35_1px,transparent_1px)] dark:bg-[radial-gradient(#222C3C_1px,transparent_1px)] bg-size-[24px_24px] opacity-25"
              aria-hidden="true"
            />

            <div className="relative z-10 max-w-3xl mx-auto text-center space-y-4 sm:space-y-6">
              <div className="inline-flex items-center px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-accent/15 border border-accent/30 text-accent-subtle text-[11px] sm:text-xs font-semibold uppercase tracking-wider">
                <span>Free Diagnostic Evaluation</span>
              </div>
              <h2 className="text-xl sm:text-3xl lg:text-4xl font-bold font-heading text-white leading-tight">
                Ready to initiate your Free Store Audit?
              </h2>
              <p className="text-xs sm:text-sm lg:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
                Submit your store URL and primary channels. We will prepare an
                executive audit report diagnosing catalog errors, keyword
                opportunities, and ad spend efficiency with zero commitment.
              </p>
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
                <Link
                  href="/contact"
                  className={cn(
                    buttonVariants({ variant: "primary" }),
                    "shadow-lg shadow-accent/25 w-full sm:w-auto",
                  )}
                >
                  <span>Book a Free Store Audit</span>
                  <ArrowRight className="w-4 h-4 shrink-0 transition-transform duration-200 group-hover:translate-x-1" />
                </Link>
                <a
                  href={COMPANY.calLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    buttonVariants({ variant: "outline-white" }),
                    "w-full sm:w-auto",
                  )}
                >
                  <Calendar className="w-4 h-4 shrink-0 text-white/70 group-hover:text-white transition-colors" />
                  <span>Schedule 15-Min Intro Call</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
