import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { constructMetadata } from "@/lib/seo";
import { PRICING_TIERS, COMPANY } from "@/lib/constants";
import { PricingCardsCarousel } from "./_components/pricing-cards-carousel";

export const metadata = constructMetadata({
  title: "Pricing & Retainers | EcomAmigo Store Operations",
  description:
    "Transparent monthly retainer pricing for e-commerce marketplace management. Launch ($799), Growth ($1,499), and Scale ($2,999). No percentage-of-revenue cuts and zero long-term lock-in.",
  path: "/pricing",
});

export default function PricingPage() {
  return (
    <div className="relative overflow-hidden bg-background text-ink min-h-[calc(100dvh-4.25rem)] flex flex-col justify-center">
      {/* Soft depth backdrop */}
      <div
        className="absolute inset-0 -z-10 overflow-hidden pointer-events-none"
        aria-hidden="true"
      >
        <Image
          src="/images/hero-bg-flipped.jpg"
          alt="EcomAmigo predictable monthly retainer pricing backdrop"
          fill
          priority
          className="object-cover object-center scale-105 opacity-15 dark:opacity-10"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_20%,var(--accent-subtle)_0%,transparent_100%)] opacity-70" />
        <div className="absolute inset-0 bg-linear-to-b from-background/80 via-background/40 to-background/95" />
        <div className="absolute inset-0 backdrop-blur-[1px]" />
      </div>

      {/* Main Pricing Container */}
      <section
        className="w-full py-4 sm:py-6 lg:py-4 xl:py-6 flex flex-col items-center justify-center my-auto"
        aria-label="Pricing and Plans"
      >
        <div className="max-w-11/12 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          {/* Header */}
          <div className="max-w-2xl mx-auto text-center mb-3 sm:mb-5 lg:mb-4 xl:mb-6 animate-hero-entrance">
            <p className="text-[11px] font-bold text-accent uppercase tracking-wider mb-1 font-heading">
              Transparent Retainers • Zero Commission
            </p>

            <h1 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-ink tracking-tight leading-tight mb-1.5 font-heading">
              Simple, Predictable Pricing
            </h1>

            <p className="text-xs sm:text-sm text-ink-muted leading-relaxed max-w-lg mx-auto">
              Fixed monthly retainers based on your channel footprint. No
              percentage-of-revenue cuts, no long-term contracts, and zero
              hidden fees.
            </p>
          </div>

          {/* Pricing Cards Component (Single swipeable card starting on Growth on mobile/tablet, 3-column grid on desktop) */}
          <PricingCardsCarousel tiers={PRICING_TIERS} />

          {/* Micro Enterprise Note */}
          <div className="mt-3 sm:mt-4 lg:mt-3 xl:mt-4 text-center">
            <p className="text-[11px] sm:text-xs text-ink-muted">
              Doing over $250,000/month or need custom multi-channel SLAs?{" "}
              <Link
                href="/contact"
                className="text-accent hover:text-accent-deep font-semibold underline underline-offset-2 ml-1"
              >
                Contact us for Custom Pods →
              </Link>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
