"use client";

import * as React from "react";
import Link from "next/link";
import { PricingTier } from "@/types";
import { Check, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface PricingCardsCarouselProps {
  tiers: PricingTier[];
}

export function PricingCardsCarousel({ tiers }: PricingCardsCarouselProps) {
  // Default to the popular tier index (Growth is index 1)
  const defaultIndex = tiers.findIndex((t) => t.popular);
  const [activeIndex, setActiveIndex] = React.useState(
    defaultIndex !== -1 ? defaultIndex : 1,
  );

  // Touch swipe gesture handlers
  const [touchStart, setTouchStart] = React.useState<number | null>(null);
  const [touchEnd, setTouchEnd] = React.useState<number | null>(null);
  const minSwipeDistance = 45;

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe && activeIndex < tiers.length - 1) {
      setActiveIndex((prev) => prev + 1);
    }
    if (isRightSwipe && activeIndex > 0) {
      setActiveIndex((prev) => prev - 1);
    }
  };

  return (
    <div className="w-full">
      {/* ========================================================
          MOBILE / TABLET CAROUSEL (< lg screens): 1 CARD AT A TIME
          ======================================================== */}
      <div className="block lg:hidden max-w-sm sm:max-w-md mx-auto w-full">
        {/* Swipeable Single Card Track */}
        <div
          className="overflow-hidden w-full relative touch-pan-y"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div
            className="flex transition-transform duration-300 ease-out items-stretch"
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          >
            {tiers.map((tier) => {
              const isPopular = tier.popular;
              return (
                <div key={tier.id} className="w-full shrink-0 px-1 pt-3 pb-1">
                  <article
                    className={cn(
                      "bg-paper rounded-2xl sm:rounded-3xl p-4.5 sm:p-6 flex flex-col justify-between transition-all duration-300 relative shadow-xs",
                      isPopular
                        ? "border-2 border-accent shadow-lg shadow-accent/10"
                        : "border border-border",
                    )}
                  >
                    {/* Most Popular Badge (Left-Aligned) */}
                    {isPopular && (
                      <div className="absolute -top-3 left-5 sm:left-6">
                        <span className="inline-flex items-center px-3 py-0.5 rounded-full bg-accent text-white text-[10px] font-bold uppercase tracking-wider shadow-xs font-heading">
                          Most Popular
                        </span>
                      </div>
                    )}

                    <div>
                      {/* Header */}
                      <div className="mb-2 sm:mb-2.5">
                        <h2 className="text-lg sm:text-xl font-bold text-ink font-heading">
                          {tier.name}
                        </h2>
                        <p className="text-[11px] sm:text-xs text-ink-muted mt-0.5 line-clamp-1">
                          {tier.positioning}
                        </p>
                      </div>

                      {/* Price */}
                      <div className="flex items-baseline gap-1 mb-3 pb-2.5 sm:mb-4 sm:pb-3 border-b border-border-subtle">
                        <span className="text-2xl sm:text-3xl font-bold font-heading text-ink tracking-tight">
                          {tier.price}
                        </span>
                        <span className="text-[11px] sm:text-xs text-ink-subtle font-medium">
                          /{tier.period.replace("per ", "")}
                        </span>
                      </div>

                      {/* Features List */}
                      <div className="space-y-1.5 sm:space-y-2 mb-3 sm:mb-4">
                        <p className="text-[10px] sm:text-[11px] font-bold text-ink uppercase tracking-wider font-heading">
                          What&apos;s Included:
                        </p>
                        <ul className="space-y-1.5 sm:space-y-2">
                          {tier.featuresPlaceholder.map((feature, idx) => (
                            <li
                              key={idx}
                              className="flex items-start gap-2 text-left"
                            >
                              <div className="mt-0.5 w-3.5 h-3.5 rounded-full bg-[#22C55E] text-white flex items-center justify-center shrink-0 shadow-2xs">
                                <Check className="w-2 h-2" strokeWidth={3.5} />
                              </div>
                              <span className="text-[11px] sm:text-xs text-ink-muted leading-tight">
                                {feature}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* CTA Button at Bottom */}
                    <div className="pt-2.5 sm:pt-3 border-t border-border-subtle mt-auto">
                      <Link
                        href={tier.ctaHref}
                        className={cn(
                          "inline-flex items-center justify-center gap-1.5 w-full py-2.5 sm:py-3 px-5 rounded-full font-bold text-xs sm:text-sm transition-all duration-300 ease-out active:scale-[0.98] text-center group",
                          isPopular
                            ? "bg-accent hover:bg-accent-deep text-white shadow-xs hover:shadow-md hover:shadow-accent/25 border border-transparent"
                            : "bg-paper text-accent border border-accent/40 hover:bg-accent hover:text-white hover:border-accent shadow-2xs hover:shadow-xs dark:bg-surface dark:text-accent dark:border-accent/40 dark:hover:bg-accent dark:hover:text-white",
                        )}
                      >
                        <span>{tier.ctaText}</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-300 ease-out" />
                      </Link>
                    </div>
                  </article>
                </div>
              );
            })}
          </div>
        </div>

        {/* Carousel Bottom Controls & Dot Indicators */}
        <div className="flex items-center justify-between mt-2.5 sm:mt-3 px-1">
          <button
            type="button"
            onClick={() => setActiveIndex((prev) => Math.max(0, prev - 1))}
            disabled={activeIndex === 0}
            className="inline-flex items-center gap-1 text-[11px] sm:text-xs font-semibold text-accent disabled:opacity-25 disabled:pointer-events-none p-1.5 rounded-full hover:bg-surface transition-all cursor-pointer"
            aria-label="Previous plan"
          >
            <ChevronLeft className="w-3.5 h-3.5" />
            <span className="hidden xs:inline">
              {activeIndex > 0 ? tiers[activeIndex - 1].name : "Prev"}
            </span>
          </button>

          {/* Dots Indicator */}
          <div
            className="flex items-center gap-1.5"
            role="tablist"
            aria-label="Pricing plans"
          >
            {tiers.map((_, idx) => (
              <button
                key={idx}
                type="button"
                role="tab"
                aria-selected={activeIndex === idx}
                onClick={() => setActiveIndex(idx)}
                aria-label={`Go to ${tiers[idx].name} plan`}
                className={cn(
                  "h-1.5 sm:h-2 rounded-full transition-all duration-300 cursor-pointer",
                  activeIndex === idx
                    ? "w-5 sm:w-6 bg-accent"
                    : "w-1.5 sm:w-2 bg-border-subtle hover:bg-ink-subtle dark:bg-border",
                )}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={() =>
              setActiveIndex((prev) => Math.min(tiers.length - 1, prev + 1))
            }
            disabled={activeIndex === tiers.length - 1}
            className="inline-flex items-center gap-1 text-[11px] sm:text-xs font-semibold text-accent disabled:opacity-25 disabled:pointer-events-none p-1.5 rounded-full hover:bg-surface transition-all cursor-pointer"
            aria-label="Next plan"
          >
            <span className="hidden xs:inline">
              {activeIndex < tiers.length - 1
                ? tiers[activeIndex + 1].name
                : "Next"}
            </span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* ========================================================
          DESKTOP 3-COLUMN GRID (≥ lg screens)
          ======================================================== */}
      <div className="hidden lg:grid lg:grid-cols-3 gap-4 xl:gap-6 max-w-6xl mx-auto items-stretch">
        {tiers.map((tier) => {
          const isPopular = tier.popular;
          return (
            <article
              key={tier.id}
              className={cn(
                "bg-paper rounded-2xl xl:rounded-3xl p-4.5 xl:p-5.5 flex flex-col justify-between transition-all duration-300 relative",
                isPopular
                  ? "border-2 border-accent shadow-lg shadow-accent/10 lg:-translate-y-0.5"
                  : "border border-border shadow-xs hover:border-accent/40 hover:shadow-md",
              )}
            >
              {/* Most Popular Badge (Left-Aligned) */}
              {isPopular && (
                <div className="absolute -top-3 left-6">
                  <span className="inline-flex items-center px-3 py-0.5 rounded-full bg-accent text-white text-[10px] xl:text-[11px] font-bold uppercase tracking-wider shadow-xs font-heading">
                    Most Popular
                  </span>
                </div>
              )}

              <div>
                {/* Header */}
                <div className="mb-2">
                  <h2 className="text-xl xl:text-2xl font-bold text-ink font-heading">
                    {tier.name}
                  </h2>
                  <p className="text-[11px] xl:text-xs text-ink-muted mt-0.5 line-clamp-1">
                    {tier.positioning}
                  </p>
                </div>

                {/* Price */}
                <div className="flex items-baseline gap-1 mb-3 pb-2 xl:mb-3.5 xl:pb-2.5 border-b border-border-subtle">
                  <span className="text-3xl xl:text-4xl font-bold font-heading text-ink tracking-tight">
                    {tier.price}
                  </span>
                  <span className="text-xs text-ink-subtle font-medium">
                    /{tier.period.replace("per ", "")}
                  </span>
                </div>

                {/* Features List */}
                <div className="space-y-1.5 xl:space-y-2 mb-3.5 xl:mb-4">
                  <p className="text-[10px] xl:text-[11px] font-bold text-ink uppercase tracking-wider font-heading">
                    What&apos;s Included:
                  </p>
                  <ul className="space-y-1.5 xl:space-y-2">
                    {tier.featuresPlaceholder.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2 text-left"
                      >
                        <div className="mt-0.5 w-3.5 h-3.5 rounded-full bg-[#22C55E] text-white flex items-center justify-center shrink-0 shadow-2xs">
                          <Check className="w-2 h-2" strokeWidth={3.5} />
                        </div>
                        <span className="text-xs xl:text-[13px] text-ink-muted leading-tight">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* CTA Button at Bottom */}
              <div className="pt-2.5 xl:pt-3 border-t border-border-subtle mt-auto">
                <Link
                  href={tier.ctaHref}
                  className={cn(
                    "inline-flex items-center justify-center gap-1.5 w-full py-2.5 xl:py-3 px-5 rounded-full font-bold text-xs xl:text-sm transition-all duration-300 ease-out active:scale-[0.98] text-center group",
                    isPopular
                      ? "bg-accent hover:bg-accent-deep text-white shadow-xs hover:shadow-md hover:shadow-accent/25 border border-transparent"
                      : "bg-paper text-accent border border-accent/40 hover:bg-accent hover:text-white hover:border-accent shadow-2xs hover:shadow-xs dark:bg-surface dark:text-accent dark:border-accent/40 dark:hover:bg-accent dark:hover:text-white",
                  )}
                >
                  <span>{tier.ctaText}</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-300 ease-out" />
                </Link>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}
