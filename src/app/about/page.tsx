import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { constructMetadata } from "@/lib/seo";
import { COMPANY } from "@/lib/constants";
import { HeroMarketplaceLogos } from "@/components/home/hero-marketplace-logos";
import { FeaturesStrip } from "@/components/home/features-strip";
import { CtaBanner } from "@/components/home/cta-banner";
import {
  Users,
  ShieldCheck,
  CheckCircle2,
  Zap,
  MapPin,
  Clock,
  MessageSquare,
  Calendar,
  Check,
} from "lucide-react";

export const metadata = constructMetadata({
  title: "About Us | EcomAmigo E-Commerce Operations",
  description:
    "Learn about EcomAmigo: dedicated marketplace operators helping brands manage, optimize, and scale across Amazon, Shopify, TikTok Shop, Walmart, and eBay.",
  path: "/about",
});

const OPERATING_PILLARS = [
  {
    number: "01",
    title: "Operator-First Mindset",
    badge: "Real Brand Experience",
    description:
      "Every strategist on your account has managed high-volume seller portals in-house, not just studied theory. We understand inventory risk and margin reality.",
    icon: Users,
  },
  {
    number: "02",
    title: "Aligned Incentives",
    badge: "Zero Commission Claws",
    description:
      "Predictable flat monthly retainers mean we never profit from bloated ad budgets. As your revenue scales, our fee stays the same — you keep 100% of your margins.",
    icon: ShieldCheck,
  },
  {
    number: "03",
    title: "Proactive Defense",
    badge: "24/7 Account Surveillance",
    description:
      "Buy Box leaks, listing suppressions, and account health indicators are monitored around the clock. We resolve policy notices before they turn into emergencies.",
    icon: Zap,
  },
  {
    number: "04",
    title: "Named Accountability",
    badge: "California-Based Team",
    description:
      "A named senior operations lead is directly accountable for your account actions. No mystery automated bid swings, and zero junior handoffs.",
    icon: CheckCircle2,
  },
];

export default function AboutPage() {
  return (
    <div className="relative overflow-hidden bg-background text-ink">
      {/* ========================================================
          1. HERO HEADER SECTION
          ======================================================== */}
      <section
        className="relative py-20 sm:py-24 lg:py-28 border-b border-border-subtle"
        aria-label="About Us Hero"
      >
        {/* Soft depth backdrop matching site aesthetic */}
        <div
          className="absolute inset-0 -z-10 overflow-hidden pointer-events-none"
          aria-hidden="true"
        >
          <Image
            src="/images/hero-bg-flipped.webp"
            alt="EcomAmigo marketplace management operations office"
            fill
            priority
            className="object-cover object-center scale-105 opacity-20 dark:opacity-10"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_25%,var(--accent-subtle)_0%,transparent_100%)] opacity-70" />
          <div className="absolute inset-0 bg-linear-to-b from-background/85 via-background/45 to-background/95" />
          <div className="absolute inset-0 backdrop-blur-[2px]" />
        </div>

        <div className="max-w-11/12 mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto flex flex-col items-center animate-hero-entrance">
            {/* Eyebrow Label */}
            <p className="text-[11px] sm:text-xs font-bold tracking-wider text-ink-muted uppercase mb-3 font-heading">
              About EcomAmigo • Operator-Led Management
            </p>

            {/* Semantic H1 */}
            <h1 className="text-3xl sm:text-5xl lg:text-[3.25rem] font-bold text-ink tracking-tight leading-[1.12] mb-4 font-heading">
              Built by Operators. Driven by Real Results.
            </h1>

            {/* Subtitle */}
            <p className="text-sm sm:text-lg text-ink-muted leading-relaxed max-w-2xl mb-8">
              We founded EcomAmigo to offer what traditional agencies never
              could: experienced, hands-on marketplace operators who manage your
              catalog, protect your margins, and treat your store like our own.
            </p>

            {/* Marketplace Logos */}
            <div className="mb-8">
              <HeroMarketplaceLogos />
            </div>

            {/* Action Buttons */}
            <div
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full sm:w-auto"
              role="group"
              aria-label="Call to action"
            >
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-accent hover:bg-accent-deep text-white font-semibold text-sm sm:text-base shadow-xs hover:shadow-md hover:shadow-accent/25 transition-all duration-300 ease-out active:scale-[0.98] text-center"
              >
                <span>Get Your Free Store Audit</span>
                <span aria-hidden="true" className="text-base leading-none">
                  →
                </span>
              </Link>

              <a
                href={COMPANY.calLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-paper hover:bg-accent text-accent hover:text-white border border-accent/40 hover:border-accent font-semibold text-sm sm:text-base transition-all duration-300 ease-out shadow-2xs hover:shadow-xs active:scale-[0.98] text-center"
              >
                <Calendar className="w-4 h-4 transition-colors" />
                <span>Schedule 15-Min Intro Call</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          2. THE ORIGIN STORY
          ======================================================== */}
      <section className="py-20 sm:py-24 lg:py-28 bg-surface border-b border-border-subtle">
        <div className="max-w-11/12 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: Narrative Copy */}
            <div className="lg:col-span-7 space-y-5">
              <p className="text-[11px] sm:text-xs font-bold tracking-wider text-accent uppercase font-heading">
                The Origin Story
              </p>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-ink font-heading tracking-tight leading-tight">
                We ran marketplace stores in-house. We saw where traditional
                agencies failed.
              </h2>

              <div className="space-y-4 text-xs sm:text-sm lg:text-[15px] text-ink-muted leading-relaxed">
                <p>
                  Before founding {COMPANY.name}, our operators spent years
                  managing high-velocity brands from the inside. We coordinated
                  multi-channel FBA and WFS freight inbounds, structured
                  parent-child catalog variations, and defended Buy Box share
                  under real margin pressures.
                </p>
                <p>
                  We saw marketing agencies charge aggressive percentages of
                  top-line revenue while ad spend was recklessly inflated to hit
                  vanity metrics. They didn&apos;t reconcile lost FBA inventory,
                  they ignored stranded ASINs, and they were nowhere to be found
                  when an urgent weekend policy suppression occurred.
                </p>
                <p className="font-semibold text-ink">
                  We established {COMPANY.name} to deliver the partner we always
                  wished we had: disciplined, senior marketplace operators who
                  manage your catalog, inventory, and profit margins with the
                  exact same diligence as if they owned the business.
                </p>
              </div>

              {/* Side-by-Side Comparison Snippets */}
              <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div className="p-4 sm:p-5 rounded-2xl bg-paper border border-border shadow-xs space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-ink font-heading">
                      Traditional Agencies
                    </span>
                    <span className="w-2 h-2 rounded-full bg-red-400" />
                  </div>
                  <p className="text-xs text-ink-muted leading-relaxed">
                    Percentage-of-sales fees, inflated ad budgets, high client
                    churn, and anonymous junior handoffs.
                  </p>
                </div>

                <div className="p-4 sm:p-5 rounded-2xl bg-accent-subtle border border-accent/25 shadow-xs space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-accent font-heading">
                      The EcomAmigo Standard
                    </span>
                    <span className="w-2 h-2 rounded-full bg-[#22C55E]" />
                  </div>
                  <p className="text-xs text-ink-muted leading-relaxed">
                    Predictable flat monthly retainers, daily catalog health
                    audits, and direct California operator ownership.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: Operations Visual Card */}
            <div className="lg:col-span-5 w-full">
              <div className="bg-paper rounded-2xl sm:rounded-3xl border border-border p-3 sm:p-4 shadow-xs">
                <div className="relative aspect-16/11 w-full overflow-hidden rounded-xl sm:rounded-2xl bg-surface">
                  <Image
                    src="/images/operations-story.webp"
                    alt="EcomAmigo California operations team collaborating on marketplace dashboard"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 42vw"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/75 via-transparent to-transparent pointer-events-none" />

                  {/* Overlay Badge */}
                  <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 flex items-center justify-between gap-2">
                    <div className="inline-flex items-center gap-1.5 rounded-lg bg-black/85 backdrop-blur-md px-3 py-1.5 text-xs font-semibold text-white border border-white/15">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#22C55E] animate-pulse shrink-0" />
                      <span>{COMPANY.location} Operations Desk</span>
                    </div>
                  </div>
                </div>

                {/* Subtext info */}
                <div className="pt-3 px-1 flex items-center justify-between text-xs text-ink-subtle">
                  <span>{COMPANY.fullAddress}</span>
                  <span className="font-semibold text-accent">
                    Live SLA Monitoring
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          3. CORE OPERATING PRINCIPLES (4 Modern Cards)
          ======================================================== */}
      <section className="py-20 sm:py-24 lg:py-28 bg-background border-b border-border-subtle">
        <div className="max-w-11/12 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
            <p className="text-[11px] sm:text-xs font-bold tracking-wider text-accent uppercase mb-2.5 font-heading">
              Our Philosophy &amp; Standards
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-ink font-heading tracking-tight leading-tight mb-3">
              How We Operate Differently
            </h2>
            <p className="text-xs sm:text-sm lg:text-base text-ink-muted leading-relaxed">
              Built by former marketplace operators for established brands that
              need operational predictability, margin protection, and
              disciplined execution.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            {OPERATING_PILLARS.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <article
                  key={pillar.number}
                  className="bg-paper border border-border rounded-2xl p-5 sm:p-6 shadow-xs flex flex-col justify-between transition-all duration-200 hover:border-accent/40 hover:shadow-md"
                >
                  <div>
                    {/* Header: Icon + Number */}
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <div className="w-10 h-10 rounded-xl bg-accent-subtle text-accent flex items-center justify-center shrink-0">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-2xl font-bold font-mono text-ink/15 select-none">
                        {pillar.number}
                      </span>
                    </div>

                    <h3 className="text-base sm:text-lg font-bold text-ink font-heading mb-1.5 leading-snug">
                      {pillar.title}
                    </h3>
                    <p className="text-xs sm:text-[13px] text-ink-muted leading-relaxed mb-4">
                      {pillar.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-border-subtle flex items-center gap-1.5 text-xs font-semibold text-accent">
                    <div className="mt-0.5 bg-[#22C55E] rounded-full p-0.5 shrink-0">
                      <Check
                        className="w-2.5 h-2.5 text-white"
                        strokeWidth={3.5}
                      />
                    </div>
                    <span>{pillar.badge}</span>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================================
          4. CALIFORNIA HEADQUARTERS & SLA CARD
          ======================================================== */}
      <section className="py-20 sm:py-24 lg:py-28 bg-background border-b border-border-subtle">
        <div className="max-w-11/12 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl sm:rounded-3xl bg-paper border border-border p-6 sm:p-8 lg:p-10 shadow-xs">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 items-center">
              {/* Location Summary */}
              <div className="md:col-span-7 space-y-3.5 sm:space-y-4 text-left">
                <div className="flex items-center gap-1.5 text-[11px] sm:text-xs font-bold tracking-wider text-accent uppercase font-heading">
                  <MapPin className="w-3.5 h-3.5 text-accent" />
                  <span>Headquarters &amp; Direct Availability</span>
                </div>

                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-ink font-heading tracking-tight leading-tight">
                  California-Based. Always Reachable.
                </h3>

                <p className="text-xs sm:text-sm text-ink-muted leading-relaxed">
                  Our operations hub is headquartered at {COMPANY.fullAddress},
                  California. We operate during standard US business hours with
                  direct Slack channel collaboration, ensuring sub-2 hour
                  response times for day-to-day questions and instant
                  intervention for urgent listing suppressions.
                </p>

                <div className="pt-1 sm:pt-2 flex flex-col sm:flex-row sm:items-center gap-2.5 sm:gap-4 text-xs text-ink font-semibold">
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-4 h-4 text-accent" />
                    <span>8:00 AM – 6:00 PM PST</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <MessageSquare className="w-4 h-4 text-[#22C55E]" />
                    <span>Direct Slack Channel Access</span>
                  </div>
                </div>
              </div>

              {/* Quick Details Box */}
              <div className="md:col-span-5 bg-surface rounded-xl sm:rounded-2xl border border-border-subtle p-5 sm:p-6 space-y-3">
                <div className="text-xs font-bold text-ink uppercase tracking-wider font-heading pb-2 border-b border-border-subtle">
                  Operations SLA Standards
                </div>
                <div className="space-y-2.5 text-xs text-ink-muted">
                  <div className="flex items-center justify-between gap-2">
                    <span>Slack Response SLA:</span>
                    <span className="font-semibold text-ink shrink-0">
                      &lt; 2 Hours
                    </span>
                  </div>
                  <div className="flex items-center justify-between gap-2">
                    <span>Buyer Message SLA:</span>
                    <span className="font-semibold text-ink shrink-0">
                      &lt; 24 Hours
                    </span>
                  </div>
                  <div className="flex items-center justify-between gap-2">
                    <span>Urgent Policy Triage:</span>
                    <span className="font-semibold text-ink shrink-0">
                      Same-Day POAs
                    </span>
                  </div>
                  <div className="flex items-center justify-between gap-2">
                    <span>Margin Review Cadence:</span>
                    <span className="font-semibold text-ink shrink-0">
                      Bi-Weekly Reviews
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          5. 4-PILLAR FEATURES STRIP
          ======================================================== */}
      <FeaturesStrip />

      {/* ========================================================
          6. SIGNATURE BOTTOM CTA BANNER
          ======================================================== */}
      <CtaBanner />
    </div>
  );
}
