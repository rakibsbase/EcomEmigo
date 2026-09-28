import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { HeroMarketplaceLogos } from "@/components/home/hero-marketplace-logos";
import { HeroVisual } from "@/components/home/hero-visual";
import { TrustedResults } from "@/components/home/trusted-results";
import { FeaturesStrip } from "@/components/home/features-strip";
import { CtaBanner } from "@/components/home/cta-banner";

export default function Home() {
  return (
    <div className="relative overflow-hidden">
      {/* ========================================================
          HERO BANNER (92dvh height with softly-blurred background image)
          ======================================================== */}
      <section
        className="relative min-h-[calc(85dvh-4.25rem)] lg:min-h-[85dvh] flex items-center py-8 sm:py-10 lg:py-16"
        aria-label="Hero Banner"
      >
        {/* Soft office backdrop with calibrated light/dark blending */}
        <div
          className="absolute inset-0 -z-10 overflow-hidden pointer-events-none select-none"
          aria-hidden="true"
        >
          {/* Base background image with soft blur and theme-adaptive opacity/filters */}
          <Image
            src="/images/hero-bg-flipped.webp"
            alt="EcomAmigo e-commerce operations partner backdrop"
            fill
            priority
            sizes="100vw"
            className="object-cover object-top-right scale-105 blur-[2.5px] opacity-40 dark:opacity-15 dark:brightness-60 dark:contrast-125 dark:mix-blend-luminosity"
          />

          {/* Directional gradient overlay: solid behind left text content, gently revealing backdrop depth on right */}
          <div className="absolute inset-0 bg-linear-to-r from-background via-background/92 to-background/45 dark:from-background dark:via-background/90 dark:to-background/65" />

          {/* Theme atmospheric glow: royal blue ambiance behind devices */}
          <div className="absolute -top-24 right-0 w-[60vw] max-w-212.5 h-162.5 bg-[radial-gradient(ellipse_at_center,rgba(30,79,216,0.08),transparent_70%)] dark:bg-[radial-gradient(ellipse_at_center,rgba(30,79,216,0.22),transparent_70%)] blur-3xl" />
          <div className="absolute top-1/4 -left-20 w-[45vw] max-w-137.5 h-162.5 bg-[radial-gradient(ellipse_at_center,rgba(30,79,216,0.03),transparent_70%)] dark:bg-[radial-gradient(ellipse_at_center,rgba(30,79,216,0.08),transparent_70%)] blur-3xl" />

          {/* Seamless bottom fade to transition effortlessly into next section */}
          <div className="absolute bottom-0 inset-x-0 h-28 bg-linear-to-t from-background via-background/80 to-transparent" />
        </div>

        {/* Content Container constrained to max-w-11/12 mx-auto */}
        <div className="max-w-11/12 mx-auto w-full px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
            {/* Left Column: Semantic SEO Text Content & CTAs */}
            <header className="col-span-1 lg:col-span-6 xl:col-span-6 animate-hero-entrance">
              {/* Eyebrow Label */}
              <p className="text-xs sm:text-sm font-bold tracking-wider text-accent dark:text-blue-400 uppercase mb-2.5 sm:mb-4 font-heading">
                E-Commerce Management for Growing Brands
              </p>

              {/* Single Semantic H1 (Strict SEO Rule) */}
              <h1 className="text-3xl sm:text-5xl lg:text-[3.25rem] xl:text-[3.85rem] font-bold text-ink tracking-tight leading-[1.12] sm:leading-[1.08] mb-4 sm:mb-6 font-heading">
                Your E-Commerce <br className="hidden sm:inline" />
                Operations Partner
              </h1>

              {/* Supporting Description */}
              <p className="text-sm sm:text-lg text-ink-muted leading-relaxed max-w-xl mb-5 sm:mb-8 font-normal">
                We help brands manage, optimize, and grow their online stores
                across Shopify, Amazon, TikTok Shop, Walmart, and eBay.
              </p>

              {/* Modular Marketplace Platform Logos Component */}
              <HeroMarketplaceLogos />

              {/* Dual Action CTAs matching the design system */}
              <div
                className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full sm:w-auto pt-1"
                role="group"
                aria-label="Call to action"
              >
                {/* Primary CTA */}
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2.5 px-6 sm:px-7 py-3.5 rounded-full bg-accent hover:bg-accent-deep text-white font-semibold text-sm sm:text-base shadow-xs hover:shadow-md hover:shadow-accent/25 transition-all duration-300 ease-out active:scale-[0.98] text-center"
                >
                  <span>Get Your Free E-Commerce Audit</span>
                  <span aria-hidden="true" className="text-base leading-none">
                    →
                  </span>
                </Link>

                {/* Secondary CTA */}
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3.5 rounded-full bg-paper hover:bg-surface text-ink border border-border hover:border-ink/20 dark:border-border dark:hover:border-accent/40 font-semibold text-sm sm:text-base transition-all duration-300 ease-out shadow-2xs hover:shadow-xs active:scale-[0.98] text-center"
                >
                  <span>View Our Services</span>
                </Link>
              </div>
            </header>

            {/* Right Column: Premium operations visual (Only visible on lg screens and up) */}
            <div className="hidden lg:block lg:col-span-6 xl:col-span-6">
              <HeroVisual />
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          TRUSTED RESULTS SECTION (Post-Hero)
          ======================================================== */}
      <TrustedResults />

      {/* ========================================================
          FEATURES STRIP
          ======================================================== */}
      <FeaturesStrip />

      {/* ========================================================
          CTA BANNER
          ======================================================== */}
      <CtaBanner />
    </div>
  );
}
