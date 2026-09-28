import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { constructMetadata } from "@/lib/seo";
import { COMPANY } from "@/lib/constants";
import { getAllCaseStudies } from "@/lib/case-studies-data";
import { HeroMarketplaceLogos } from "@/components/home/hero-marketplace-logos";
import { FeaturesStrip } from "@/components/home/features-strip";
import { CtaBanner } from "@/components/home/cta-banner";
import {
  BarChart3,
  ShoppingCart,
  Package,
  Check,
  Calendar,
  ArrowRight,
} from "lucide-react";

export const metadata = constructMetadata({
  title: "Case Studies & Client Results | EcomAmigo",
  description:
    "Explore how EcomAmigo helps e-commerce brands scale across Amazon, Shopify, TikTok Shop, and Walmart through full-funnel operations and catalog optimization.",
  path: "/case-studies",
});

export default function CaseStudiesPage() {
  const caseStudies = getAllCaseStudies();

  return (
    <div className="relative overflow-hidden bg-background text-ink">
      {/* ========================================================
          1. HERO HEADER SECTION
          ======================================================== */}
      <section
        className="relative py-20 sm:py-24 lg:py-28 border-b border-border-subtle"
        aria-label="Case Studies Hero"
      >
        <div
          className="absolute inset-0 -z-10 overflow-hidden"
          aria-hidden="true"
        >
          <Image
            src="/images/hero-bg-flipped.webp"
            alt="EcomAmigo marketplace client case studies backdrop"
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
            <p className="text-[11px] sm:text-xs font-bold tracking-wider text-ink-muted uppercase mb-3 font-heading">
              Proven Results • Client Case Studies
            </p>

            <h1 className="text-3xl sm:text-5xl lg:text-[3.25rem] font-bold text-ink tracking-tight leading-[1.12] mb-4 font-heading">
              Trusted E-Commerce Experience
            </h1>

            <p className="text-sm sm:text-lg text-ink-muted leading-relaxed max-w-2xl mb-8">
              We&apos;ve helped e-commerce businesses manage, optimize, and grow
              their online operations across storefront management, product
              listings, marketplace operations, and fulfillment.
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
          2. THE 2 CASE STUDY CARDS GRID
          ======================================================== */}
      <section className="py-20 sm:py-24 lg:py-28 border-b border-border-subtle">
        <div className="w-11/12 mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 w-full max-w-7xl mx-auto">
            {caseStudies.map((study) => (
              <article
                key={study.slug}
                className="bg-paper border border-border rounded-[20px] p-5 sm:p-7 flex flex-col shadow-xs transition-all duration-200 hover:border-accent/40 hover:shadow-md"
              >
                {/* Top Row: Logo/Text + Mockup Image */}
                <div className="flex flex-col sm:flex-row gap-5 mb-5 items-start">
                  {/* Left Column: Logo & Text */}
                  <div className="w-full sm:w-[48%] flex flex-col justify-start pt-1">
                    <div className="flex flex-col items-start mb-2.5">
                      <div className="relative w-35 sm:w-40 h-16.25 sm:h-18.75 mb-1.5">
                        <Image
                          src={study.logoSrc}
                          alt={study.clientName}
                          fill
                          className="object-contain object-left"
                        />
                      </div>
                      <a
                        href={study.websiteUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[14px] sm:text-[15px] font-bold text-accent hover:text-accent-deep hover:underline text-left"
                      >
                        {study.websiteDisplay}
                      </a>
                    </div>
                    <p className="text-[12px] sm:text-[13px] text-ink-muted leading-relaxed text-left">
                      {study.heroSubtitle}
                    </p>
                  </div>

                  {/* Right Column: Device Mockup */}
                  <div className="w-full sm:w-[52%] relative flex items-center justify-center sm:justify-end mt-2 sm:mt-0">
                    <div className="relative w-full max-w-75 sm:max-w-none sm:w-[115%] aspect-[1.35/1] sm:-mr-4">
                      <Image
                        src={study.mockupSrc}
                        alt={`${study.clientName} website shown on laptop and phone`}
                        fill
                        className="object-contain object-center sm:object-right"
                        sizes="(max-width: 639px) 100vw, 300px"
                      />
                    </div>
                  </div>
                </div>

                {/* Stat Boxes Grid */}
                <div className="grid grid-cols-3 gap-2 sm:gap-3 mb-5">
                  {study.metrics.map((metric, idx) => {
                    const Icon =
                      metric.iconType === "chart"
                        ? BarChart3
                        : metric.iconType === "cart"
                          ? ShoppingCart
                          : Package;

                    return (
                      <div
                        key={idx}
                        className="bg-surface rounded-xl p-2.5 sm:p-4 flex flex-col justify-center items-start border border-border-subtle"
                      >
                        <div className="flex items-center gap-1.5 sm:gap-2 mb-1">
                          <Icon
                            className="w-4 h-4 sm:w-5 sm:h-5 text-accent shrink-0"
                            strokeWidth={2.5}
                          />
                          <span className="text-[15px] xs:text-[17px] sm:text-[22px] font-bold text-ink font-heading leading-none">
                            {metric.value}
                          </span>
                        </div>
                        <span className="text-[10px] sm:text-[11px] text-ink-muted font-medium leading-tight">
                          {metric.label}
                          {metric.subtext && (
                            <>
                              <br />
                              {metric.subtext}
                            </>
                          )}
                        </span>
                      </div>
                    );
                  })}
                </div>

                {/* Services Checklist */}
                <div className="mb-6">
                  <p className="text-[13px] font-bold text-ink mb-2.5 font-heading">
                    Services Provided:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-2">
                    {study.servicesProvided.map((service, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <div className="mt-0.5 bg-[#22C55E] rounded-full p-0.5 shrink-0">
                          <Check
                            className="w-2.5 h-2.5 text-white"
                            strokeWidth={3.5}
                          />
                        </div>
                        <span className="text-[11px] sm:text-[12px] text-ink-muted leading-tight">
                          {service}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                <div className="mt-auto pt-2 w-full">
                  <Link
                    href={`/case-studies/${study.slug}`}
                    className="inline-flex items-center justify-center gap-2 w-full py-3.5 px-6 rounded-full bg-paper text-accent border border-accent/40 hover:bg-accent hover:text-white hover:border-accent font-bold text-xs sm:text-sm transition-all duration-300 ease-out text-center group shadow-2xs hover:shadow-xs active:scale-[0.98] dark:bg-surface dark:text-accent dark:border-accent/40 dark:hover:bg-accent dark:hover:text-white"
                  >
                    <span>View {study.clientName} Case Study</span>
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300 ease-out" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================
          3. 4-PILLAR FEATURES STRIP
          ======================================================== */}
      <FeaturesStrip className="py-20 sm:py-24 lg:py-28" />

      {/* ========================================================
          4. SIGNATURE BOTTOM CTA BANNER
          ======================================================== */}
      <CtaBanner className="py-20 sm:py-24 lg:py-28" />
    </div>
  );
}
