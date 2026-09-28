import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { constructMetadata } from "@/lib/seo";
import { COMPANY } from "@/lib/constants";
import { getAllServices } from "@/lib/services-data";
import { HeroMarketplaceLogos } from "@/components/home/hero-marketplace-logos";
import { FeaturesStrip } from "@/components/home/features-strip";
import { CtaBanner } from "@/components/home/cta-banner";
import {
  TrendingUp,
  Target,
  Layers,
  ShieldCheck,
  BarChart3,
  Zap,
  Check,
  Calendar,
  ArrowRight,
} from "lucide-react";

export const metadata = constructMetadata({
  title: "E-Commerce Marketplace Services | EcomAmigo",
  description:
    "Comprehensive e-commerce management across Amazon, TikTok Shop, Walmart Marketplace, and multi-channel fulfillment. Fixed monthly retainers with zero revenue cuts.",
  path: "/services",
});

const ICON_MAP = {
  TrendingUp,
  Target,
  Layers,
  ShieldCheck,
  BarChart3,
  Zap,
};

export default function ServicesPage() {
  const services = getAllServices();

  return (
    <div className="relative overflow-hidden bg-background text-ink">
      {/* ========================================================
          1. HERO HEADER SECTION
          ======================================================== */}
      <section
        className="relative py-20 sm:py-24 lg:py-28 border-b border-border-subtle"
        aria-label="Services Hero"
      >
        <div
          className="absolute inset-0 -z-10 overflow-hidden"
          aria-hidden="true"
        >
          <Image
            src="/images/hero-bg-flipped.webp"
            alt="EcomAmigo marketplace operations and management services backdrop"
            fill
            priority
            className="object-cover object-center scale-105 opacity-20 dark:opacity-10"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_25%,var(--accent-subtle)_0%,transparent_100%)] opacity-70" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/85 via-background/45 to-background/95" />
          <div className="absolute inset-0 backdrop-blur-[2px]" />
        </div>

        <div className="max-w-11/12 mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto flex flex-col items-center animate-hero-entrance">
            <p className="text-xs font-semibold text-accent uppercase tracking-wider mb-3 font-heading">
              End-to-End Capabilities • Specialized Operations
            </p>

            <h1 className="text-3xl sm:text-5xl lg:text-[3.25rem] font-bold text-ink tracking-tight leading-[1.12] mb-4 font-heading">
              Marketplace Management Services
            </h1>

            <p className="text-sm sm:text-lg text-ink-muted leading-relaxed max-w-2xl mb-8">
              We assume full operational responsibility for your e-commerce
              channels: from listing SEO and advertising TACoS control to
              autonomous FBA logistics, creator affiliate pipelines, and unified
              multi-channel syndication.
            </p>

            <div className="mb-8">
              <HeroMarketplaceLogos />
            </div>

            <div
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full sm:w-auto"
              role="group"
              aria-label="Call to action"
            >
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-accent hover:bg-accent-deep text-white font-semibold text-sm sm:text-base shadow-xs hover:shadow-md hover:shadow-accent/25 transition-all duration-300 ease-out active:scale-[0.98] text-center"
              >
                <span>Book a Free Store Audit</span>
                <span aria-hidden="true" className="text-base leading-none">
                  →
                </span>
              </Link>

              <a
                href={COMPANY.calLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-paper hover:bg-accent hover:text-white text-accent border border-accent/40 hover:border-accent font-semibold text-sm sm:text-base transition-all duration-300 ease-out shadow-2xs hover:shadow-xs active:scale-[0.98] dark:bg-surface dark:text-accent dark:border-accent/40 dark:hover:bg-accent dark:hover:text-white text-center"
              >
                <Calendar className="w-4 h-4" />
                <span>Schedule 15-Min Intro Call</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          2. CORE SERVICES SHOWCASE (MATCHING CASE STUDIES CARDS)
          ======================================================== */}
      <section
        className="py-14 sm:py-16 lg:py-20 border-b border-border-subtle"
        aria-label="Core Services List"
      >
        <div className="max-w-11/12 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
            <p className="text-[11px] sm:text-xs font-bold tracking-wider text-accent uppercase mb-2.5 font-heading">
              Specialized Service Pillars
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold font-heading text-ink tracking-tight">
              Operational Handling Tailored to Each Channel
            </h2>
            <p className="text-xs sm:text-sm text-ink-muted mt-2 leading-relaxed">
              Every marketplace functions with unique algorithms, compliance
              rules, and customer acquisition mechanics. Explore our specialized
              services below.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-6 lg:gap-7">
            {services.map((service, index) => {
              return (
                <article
                  key={service.id}
                  className="group flex flex-col bg-paper rounded-2xl border border-border overflow-hidden shadow-xs hover:shadow-lg hover:border-accent/30 transition-all duration-300"
                >
                  {/* Card Header - Compact & Clean */}
                  <div className="px-5 py-4 sm:px-6 sm:py-4.5 border-b border-border-subtle flex items-start justify-between gap-3">
                    <div className="min-w-0 flex-1">
                      <p className="text-[11px] sm:text-xs font-bold tracking-wider text-ink-muted uppercase mb-1 font-heading">
                        {service.badge}
                      </p>
                      <h3 className="text-lg sm:text-xl font-bold font-heading text-ink group-hover:text-accent transition-colors">
                        {service.name}
                      </h3>
                      <p className="text-xs sm:text-[13px] text-ink-muted mt-1 line-clamp-2 leading-relaxed">
                        {service.heroSubtitle}
                      </p>
                    </div>

                    <span className="text-lg sm:text-xl font-bold font-heading text-ink-subtle opacity-35 shrink-0 select-none pt-0.5">
                      0{index + 1}
                    </span>
                  </div>

                  {/* Service Visual Preview - Framed in natural 16:10 aspect ratio */}
                  <div className="px-4 sm:px-5 pt-3 pb-1">
                    <div className="relative aspect-16/10 w-full rounded-xl overflow-hidden bg-surface-hover border border-border-subtle shadow-2xs">
                      <Image
                        src={service.imageSrc}
                        alt={service.imageAlt}
                        fill
                        className="object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                        sizes="(max-width: 1024px) 100vw, 560px"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-ink/20 via-transparent to-transparent opacity-60" />
                    </div>
                  </div>

                  {/* Body Content - Proportional Spacing & Hierarchy */}
                  <div className="p-4 sm:p-5 flex flex-col flex-1 justify-between gap-3.5 sm:gap-4">
                    {/* Key Metrics / Highlights */}
                    <div className="grid grid-cols-2 gap-2.5">
                      {service.stats.slice(0, 2).map((stat) => {
                        const IconComponent =
                          ICON_MAP[stat.iconName as keyof typeof ICON_MAP] ||
                          TrendingUp;
                        return (
                          <div
                            key={stat.label}
                            className="bg-surface px-3 py-2.5 rounded-xl border border-border-subtle"
                          >
                            <div className="flex items-center gap-1.5 text-[11px] sm:text-xs text-ink-muted font-medium mb-0.5">
                              <IconComponent className="w-3.5 h-3.5 text-accent shrink-0" />
                              <span className="line-clamp-1 leading-snug">
                                {stat.label}
                              </span>
                            </div>
                            <div className="text-base sm:text-lg font-bold font-heading text-ink whitespace-nowrap">
                              {stat.value}
                            </div>
                          </div>
                        );
                      })}
                    </div>

                    {/* Key Capabilities Checklist */}
                    <div className="space-y-1.5">
                      <h4 className="text-[11px] font-bold uppercase tracking-wider text-ink-subtle font-heading">
                        Key Capabilities Included:
                      </h4>
                      <ul className="space-y-1 text-xs text-ink-muted">
                        {service.narrative.solutionSection.pillars
                          .slice(0, 3)
                          .map((pillar) => (
                            <li
                              key={pillar.title}
                              className="flex items-start gap-2"
                            >
                              <div className="mt-0.5 rounded-full p-0.5 bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 shrink-0">
                                <Check className="w-2.5 h-2.5 stroke-[3.5]" />
                              </div>
                              <span className="line-clamp-1">
                                {pillar.title}
                              </span>
                            </li>
                          ))}
                      </ul>
                    </div>

                    {/* Card Action Footer */}
                    <div className="pt-3 border-t border-border-subtle flex items-center justify-between gap-3">
                      <div className="min-w-0">
                        <span className="text-[10px] sm:text-[11px] uppercase tracking-wider text-ink-subtle font-heading block font-semibold leading-none mb-1">
                          Retainer
                        </span>
                        <div className="text-xs sm:text-sm font-bold font-heading text-ink whitespace-nowrap">
                          {service.recommendedTier.price}
                        </div>
                      </div>

                      <Link
                        href={`/services/${service.slug}`}
                        className="inline-flex items-center justify-center gap-1.5 px-3.5 sm:px-4 py-2 rounded-full bg-paper hover:bg-accent hover:text-white text-accent border border-border hover:border-accent text-[11px] sm:text-xs font-semibold transition-all duration-300 ease-out shadow-2xs hover:shadow-xs group-hover:border-accent/40 shrink-0 whitespace-nowrap dark:bg-surface dark:text-accent dark:border-border dark:hover:bg-accent dark:hover:text-white"
                      >
                        <span>Explore Scope</span>
                        <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1 shrink-0" />
                      </Link>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================================
          3. HOW OUR SERVICES WORK TOGETHER (INTEGRATION)
          ======================================================== */}
      <section className="py-20 sm:py-24 border-b border-border-subtle bg-background">
        <div className="max-w-11/12 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            <div className="space-y-6">
              <p className="text-[11px] sm:text-xs font-bold tracking-wider text-accent uppercase font-heading">
                Predictable Retainer Model
              </p>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-heading text-ink tracking-tight leading-tight">
                One Dedicated Operations Team. Zero Revenue Surcharges.
              </h2>

              <p className="text-sm sm:text-base text-ink-muted leading-relaxed">
                Most agencies take 2% to 4% of your gross sales on top of large
                base fees, eating away at your margin when you succeed. We
                operate exclusively on fixed, transparent monthly retainers
                tailored to the number of channels and complexity you need
                managed.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-surface border border-border">
                  <h4 className="font-bold text-sm text-ink mb-1">
                    Month-to-Month Flexibility
                  </h4>
                  <p className="text-xs text-ink-muted leading-relaxed">
                    No 6-month or 12-month lock-in agreements. We earn your
                    partnership every 30 days.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-surface border border-border">
                  <h4 className="font-bold text-sm text-ink mb-1">
                    Direct Senior Specialists
                  </h4>
                  <p className="text-xs text-ink-muted leading-relaxed">
                    Direct access via dedicated Slack channels and bi-weekly
                    strategic executive syncs.
                  </p>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  href="/pricing"
                  className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-accent hover:text-accent-deep transition-colors underline underline-offset-4"
                >
                  <span>Compare our Launch, Growth, and Scale Retainers</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Visual Box */}
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden bg-gradient-to-br from-[#0B1528] to-[#040810] p-8 sm:p-10 border border-[#162744] text-white space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-mono text-accent uppercase tracking-wider">
                  Operational Standard
                </span>
                <h3 className="text-xl sm:text-2xl font-bold font-heading">
                  What&apos;s Included In Every Service
                </h3>
              </div>

              <div className="space-y-3.5 text-xs sm:text-sm text-slate-300">
                <div className="flex items-start gap-3">
                  <div className="p-1 rounded-full bg-emerald-500/20 text-emerald-400 shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span>
                    <strong>24/7 Account Health Surveillance:</strong> Rapid
                    resolution of policy flags, review alerts, and IP notices.
                  </span>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-1 rounded-full bg-emerald-500/20 text-emerald-400 shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span>
                    <strong>Disciplined Ad Spend Guardrails:</strong> Strict
                    TACoS limits with weekly negative keyword pruning.
                  </span>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-1 rounded-full bg-emerald-500/20 text-emerald-400 shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span>
                    <strong>Inbound Logistics Forecasting:</strong> FBA &amp;
                    WFS shipment creation with zero stockout tolerance.
                  </span>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-1 rounded-full bg-emerald-500/20 text-emerald-400 shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span>
                    <strong>Real-Time Net Profit Reporting:</strong> Margin
                    visibility after all referral, shipping, and storage fees.
                  </span>
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <span className="text-xs text-slate-400">
                  Ready to diagnose your store?
                </span>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-accent hover:bg-accent-deep text-white text-xs font-semibold shadow-xs hover:shadow-md hover:shadow-accent/25 transition-all duration-300 ease-out active:scale-[0.98]"
                >
                  <span>Request Free Audit</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          4. REUSABLE SITE MODULES
          ======================================================== */}
      <FeaturesStrip />
      <CtaBanner />
    </div>
  );
}
