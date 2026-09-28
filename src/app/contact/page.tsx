import { constructMetadata } from "@/lib/seo";
import { COMPANY } from "@/lib/constants";
import { AuditForm } from "./_components/audit-form";
import { CalBooker } from "@/components/shared/cal-booker";
import { SectionHeading } from "@/components/shared/section-heading";
import { FAQAccordion } from "@/components/shared/faq-accordion";
import { Check, Calendar, Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import { SocialIcon } from "@/components/ui/social-icons";
import { FAQItem } from "@/types";

export const metadata = constructMetadata({
  title: "Contact | Free E-Commerce Store Audit",
  description:
    "Request a confidential, comprehensive store audit across Amazon, TikTok Shop, Walmart, or Shopify. We diagnose catalog health, PPC leakage, and channel growth opportunities.",
  path: "/contact",
});

const AUDIT_FAQS: FAQItem[] = [
  {
    id: "audit-turnaround",
    question: "How long does the free store audit take to deliver?",
    answer:
      "Our senior team reviews your store and compiles the forensic diagnostic report within 24 to 48 business hours. We then send you the full breakdown and offer a 20-minute executive debrief call to walk through high-priority findings.",
    isPlaceholder: false,
  },
  {
    id: "audit-access",
    question:
      "Do you require full admin access to our Seller Central or store?",
    answer:
      "No. For the initial diagnostic audit, you do not need to provide admin credentials. We can perform substantial forensic analysis using read-only secondary user permissions or simply by reviewing your public storefronts, catalog ASINs, and competitor Buy Box dynamics.",
    isPlaceholder: false,
  },
  {
    id: "audit-confidentiality",
    question: "Is our sales data and brand information kept confidential?",
    answer:
      "Yes, 100%. All revenue figures, SKU lists, supplier data, and advertising metrics provided are strictly confidential and protected under our standard mutual non-disclosure policy. We never share, sell, or disclose brand data to third parties.",
    isPlaceholder: false,
  },
  {
    id: "audit-obligation",
    question: "Is there any sales pressure or obligation to sign a contract?",
    answer:
      "None whatsoever. Our store audit is a diagnostic evaluation designed to demonstrate our operator methodology and highlight clear revenue leaks. If you choose to partner with us on a monthly retainer, we welcome it; if you prefer to implement our recommendations internally, the report is entirely yours to keep.",
    isPlaceholder: false,
  },
];

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* ─────────────────────────────────────────────
          1. MAIN AUDIT SECTION (FORM + RESPONSIVE SIDEBAR)
      ───────────────────────────────────────────── */}
      <section className="pt-6 sm:pt-8 md:pt-10 lg:pt-12 pb-10 sm:pb-14 lg:pb-16 bg-surface border-b border-border">
        <div className="w-full lg:max-w-11/12 mx-auto px-4 sm:px-6 lg:px-8">
          {/* Top Heading + Subcopy */}
          <div className="text-center max-w-2xl mx-auto mb-6 sm:mb-8">
            <h1
              className="text-xl sm:text-2xl lg:text-[32px] font-bold text-ink font-heading leading-tight tracking-tight isolate"
              aria-label="Book Your Confidential Free Store Audit"
            >
              <span>Book Your Confidential </span>
              <span className="relative inline-block whitespace-nowrap">
                <span className="text-accent">Free Store Audit</span>
              </span>
            </h1>
            <p className="text-xs sm:text-sm text-ink-muted mt-1.5 sm:mt-2 max-w-xl mx-auto leading-normal sm:leading-relaxed">
              Find out exactly where your listings are suppressed, where ad
              dollars are leaking, and which new channels can drive immediate
              incremental sales. No sales pressure, zero obligation.
            </p>
          </div>

          {/* Form & Sidebar Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start relative z-10">
            {/* Left Column (Wide Form, col-span-8) */}
            <div className="lg:col-span-8 w-full">
              <AuditForm />
            </div>

            {/* Right Column: 1-col on mobile (<md), 3-col on tablet (md), sticky vertical column on desktop (lg+) */}
            <div className="lg:col-span-4 w-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-1 gap-4 sm:gap-5 lg:gap-3 lg:sticky lg:top-21 lg:max-h-[calc(100vh-96px)] lg:overflow-y-auto pt-1.5 -mt-1.5 pr-0 lg:pr-1 scrollbar-thin relative z-10">
              {/* Card 1: Immediate Call (Cal.com) */}
              <div className="bg-paper rounded-2xl border border-border p-4 sm:p-5 shadow-xs hover:border-accent/40 hover:shadow-xs transition-all duration-200 ease-out motion-safe:hover:-translate-y-0.5 group flex flex-col justify-between relative z-1 hover:z-10">
                <div>
                  <div className="flex items-center gap-2.5 mb-2.5">
                    <div className="w-8 h-8 rounded-lg bg-accent-subtle text-accent border border-accent/20 flex items-center justify-center shrink-0 shadow-2xs group-hover:scale-105 group-hover:bg-accent group-hover:text-white transition-all duration-200">
                      <Calendar className="w-4 h-4 stroke-current" />
                    </div>
                    <div>
                      <h3 className="text-xs sm:text-sm font-bold text-ink font-heading group-hover:text-accent transition-colors duration-200 leading-snug">
                        Prefer an immediate call?
                      </h3>
                      <span className="text-[10px] font-semibold text-accent uppercase tracking-wider block">
                        15-Minute Intro Session
                      </span>
                    </div>
                  </div>
                  <p className="text-xs text-ink-muted leading-relaxed mb-3.5">
                    Skip the form and reserve an introductory discovery session
                    directly with our California operations lead on Cal.com.
                  </p>
                </div>
                <div className="flex flex-col gap-2">
                  <a
                    href="#schedule"
                    className="w-full h-10 sm:h-11 rounded-xl bg-ink text-paper hover:bg-accent dark:hover:bg-accent text-xs font-semibold flex items-center justify-center gap-2 transition-all shadow-xs hover:shadow-md hover:shadow-accent/25 group/btn"
                  >
                    <Calendar className="w-3.5 h-3.5" />
                    <span>Instant Booking Calendar</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                  </a>
                  <a
                    href={COMPANY.calLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] text-center text-ink-subtle hover:text-accent underline underline-offset-2 transition-colors py-0.5"
                  >
                    Or open directly on Cal.com &rarr;
                  </a>
                </div>
              </div>

              {/* Card 2: What Your Audit Includes */}
              <div className="bg-paper rounded-2xl border border-border p-4 sm:p-5 shadow-xs hover:border-accent/40 hover:shadow-xs transition-all duration-200 ease-out motion-safe:hover:-translate-y-0.5 flex flex-col justify-between relative z-1 hover:z-10">
                <div>
                  <div className="flex items-center justify-between mb-3 pb-2 border-b border-border-subtle">
                    <h3 className="text-xs font-bold text-ink uppercase tracking-wider font-heading">
                      What Your Audit Includes:
                    </h3>
                    <span className="text-[10px] font-semibold text-accent">
                      Forensic Scope
                    </span>
                  </div>

                  <ul className="space-y-2 text-xs text-ink-muted">
                    <li className="flex items-start gap-2 leading-snug">
                      <div className="w-3.5 h-3.5 rounded-full bg-accent-subtle text-accent flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-2 h-2 stroke-3" />
                      </div>
                      <span>
                        <strong className="text-ink font-semibold">
                          Catalog &amp; SEO:
                        </strong>{" "}
                        Algorithmic check on titles, search terms, and
                        suppressed variations.
                      </span>
                    </li>
                    <li className="flex items-start gap-2 leading-snug">
                      <div className="w-3.5 h-3.5 rounded-full bg-accent-subtle text-accent flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-2 h-2 stroke-3" />
                      </div>
                      <span>
                        <strong className="text-ink font-semibold">
                          TACoS Efficiency:
                        </strong>{" "}
                        Diagnosis of wasteful broad bids and negative keyword
                        gaps.
                      </span>
                    </li>
                    <li className="flex items-start gap-2 leading-snug">
                      <div className="w-3.5 h-3.5 rounded-full bg-accent-subtle text-accent flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-2 h-2 stroke-3" />
                      </div>
                      <span>
                        <strong className="text-ink font-semibold">
                          Buy Box &amp; Parity:
                        </strong>{" "}
                        Cross-channel price conflict and suppression analysis.
                      </span>
                    </li>
                    <li className="flex items-start gap-2 leading-snug">
                      <div className="w-3.5 h-3.5 rounded-full bg-accent-subtle text-accent flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-2 h-2 stroke-3" />
                      </div>
                      <span>
                        <strong className="text-ink font-semibold">
                          90-Day Plan:
                        </strong>{" "}
                        Prioritized execution checklist ready for immediate
                        rollout.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Card 3: Operations Office */}
              <div className="bg-paper rounded-2xl border border-border p-4 sm:p-5 shadow-xs hover:border-accent/40 hover:shadow-xs transition-all duration-200 ease-out motion-safe:hover:-translate-y-0.5 flex flex-col justify-between relative z-1 hover:z-10">
                <div>
                  <div className="mb-3 pb-2 border-b border-border-subtle">
                    <span className="text-xs font-bold text-ink uppercase tracking-wider block font-heading">
                      Operations Office
                    </span>
                  </div>
                  <div className="space-y-2.5 text-xs text-ink-muted">
                    <div className="flex items-start gap-2.5">
                      <div className="w-6 h-6 rounded-md bg-accent-subtle text-accent flex items-center justify-center shrink-0 mt-0.5">
                        <MapPin className="w-3.5 h-3.5" />
                      </div>
                      <div className="leading-snug">
                        <span className="font-semibold text-ink block text-xs mb-0.5">
                          San Diego Headquarters
                        </span>
                        <span className="text-[11px]">
                          {COMPANY.fullAddress}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <div className="w-6 h-6 rounded-md bg-accent-subtle text-accent flex items-center justify-center shrink-0">
                        <Mail className="w-3.5 h-3.5" />
                      </div>
                      <a
                        href={`mailto:${COMPANY.email}`}
                        className="hover:text-accent transition-colors font-medium text-xs"
                      >
                        {COMPANY.email}
                      </a>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <div className="w-6 h-6 rounded-md bg-accent-subtle text-accent flex items-center justify-center shrink-0">
                        <Phone className="w-3.5 h-3.5" />
                      </div>
                      <a
                        href={`tel:${COMPANY.phone.replace(/[^+\d]/g, "")}`}
                        className="hover:text-accent transition-colors font-medium text-xs"
                      >
                        {COMPANY.phone}
                      </a>
                    </div>
                  </div>

                  {/* Social Media Channels */}
                  <div className="pt-3 border-t border-border-subtle mt-3">
                    <span className="text-[11px] font-semibold text-ink uppercase tracking-wider block font-heading mb-2">
                      Connect Online
                    </span>
                    <div className="flex items-center gap-2">
                      {COMPANY.socialLinks.map((social) => (
                        <a
                          key={social.platform}
                          href={social.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${COMPANY.name} on ${social.label}`}
                          title={`${COMPANY.name} on ${social.label}`}
                          className="w-7 h-7 rounded-full bg-surface hover:bg-accent-subtle text-ink-muted hover:text-accent flex items-center justify-center border border-border hover:border-accent/30 transition-all shadow-2xs group"
                        >
                          <SocialIcon
                            platform={social.platform}
                            className="w-3.5 h-3.5 transition-transform group-hover:scale-110"
                          />
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────
          1.5. LIVE CAL.COM SCHEDULING EMBED
      ───────────────────────────────────────────── */}
      <section
        id="schedule"
        className="py-12 sm:py-16 bg-surface border-t border-border scroll-mt-28"
      >
        <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            centered
            tagline="Live Operations Calendar"
            title="Book an Executive Discovery Call"
            description="Prefer an immediate conversation? Select an open 15-minute slot directly with our California operations lead. Instant automated calendar confirmation."
            className="mb-8 sm:mb-10"
          />

          <div className="max-w-4xl mx-auto">
            <CalBooker view="MONTH_VIEW" />
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────
          2. FREQUENTLY ASKED QUESTIONS
      ───────────────────────────────────────────── */}
      <section className="py-12 sm:py-16 lg:py-20 bg-background">
        <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            centered
            tagline="Audit Details & FAQ"
            title="Common Questions About Our Store Audit"
            description="Transparent details about access requirements, turnaround times, and confidentiality standards."
            className="mb-8 sm:mb-10"
          />

          <FAQAccordion items={AUDIT_FAQS} defaultOpenId="audit-turnaround" />
        </div>
      </section>
    </div>
  );
}
