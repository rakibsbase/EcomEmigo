import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { BarChart3, ShoppingCart, Package } from "lucide-react";

export function TrustedResults() {
  return (
    <section
      className="w-full bg-background py-8 lg:py-10 flex flex-col items-center justify-center"
      aria-labelledby="trusted-results-heading"
    >
      <div className="w-11/12 mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        {/* Header Block */}
        <header className="text-center max-w-3xl mb-5">
          <p className="text-[11px] sm:text-[12px] font-bold tracking-[0.15em] text-ink-subtle uppercase mb-2">
            Real Brands. Real Results.
          </p>
          <h2
            id="trusted-results-heading"
            className="text-3xl sm:text-[36px] lg:text-[40px] font-bold text-ink tracking-tight mb-2 font-heading leading-tight"
          >
            Trusted E-Commerce Experience
          </h2>
          <p className="text-[14px] sm:text-[15px] text-ink-muted leading-relaxed max-w-[800px] mx-auto">
            We&apos;ve helped e-commerce businesses manage, optimize, and grow
            their online operations across storefront management, product
            listings, marketplace operations, and fulfillment.
          </p>
        </header>

        {/* Results Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full">
          {/* Card 1: Oud Store */}
          <article className="bg-paper border border-border rounded-[20px] p-4 sm:p-6 flex flex-col shadow-xs">
            {/* Top Row: Logo/Text + Mockup Image */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 mb-5 items-start">
              {/* Left Column: Logo & Text */}
              <div className="w-full sm:w-[48%] flex flex-col justify-start pt-1">
                <div className="flex flex-col items-start mb-2.5">
                  <div className="relative w-[140px] sm:w-[160px] h-[65px] sm:h-[75px] mb-1.5">
                    <Image
                      src="/logos/oudh.jpg"
                      alt="OUD STORE"
                      fill
                      className="object-contain object-left"
                    />
                  </div>
                  <a
                    href="https://OudStore.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[14px] sm:text-[15px] font-bold text-accent hover:text-accent-deep hover:underline text-left"
                  >
                    OudStore.com
                  </a>
                </div>
                <p className="text-[12px] sm:text-[13px] text-ink-muted leading-relaxed text-left">
                  We helped Oud Store manage and optimize their e-commerce
                  operations, improve product listings, and streamline
                  marketplace management to drive more sales and a better
                  customer experience.
                </p>
              </div>

              {/* Right Column: Device Mockup */}
              <div className="w-full sm:w-[52%] relative flex items-center justify-center sm:justify-end mt-2 sm:mt-0">
                <div className="relative w-full max-w-[300px] sm:max-w-none sm:w-[115%] aspect-[1.35/1] sm:-mr-4">
                  <Image
                    src="/images/case-study-1.webp"
                    alt="Oud Store website shown on laptop and phone"
                    fill
                    className="object-contain object-center sm:object-right"
                    sizes="(max-width: 639px) 100vw, 300px"
                    priority
                  />
                </div>
              </div>
            </div>

            {/* Stat Boxes Grid */}
            <div className="grid grid-cols-3 gap-1.5 sm:gap-3 mb-5">
              <div className="bg-surface rounded-xl p-2 sm:p-4 flex flex-col justify-center items-start">
                <div className="flex items-center gap-1 sm:gap-2 mb-1">
                  <BarChart3
                    className="w-3.5 h-3.5 sm:w-5 sm:h-5 text-accent shrink-0"
                    strokeWidth={2.5}
                  />
                  <span className="text-[15px] xs:text-[17px] sm:text-[22px] font-bold text-ink font-heading leading-none">
                    +68%
                  </span>
                </div>
                <span className="text-[10px] sm:text-[11px] text-ink-muted font-medium leading-[1.25]">
                  Revenue Growth
                  <br />
                  (6 months)
                </span>
              </div>

              <div className="bg-surface rounded-xl p-2 sm:p-4 flex flex-col justify-center items-start">
                <div className="flex items-center gap-1 sm:gap-2 mb-1">
                  <ShoppingCart
                    className="w-3.5 h-3.5 sm:w-5 sm:h-5 text-accent shrink-0"
                    strokeWidth={2.5}
                  />
                  <span className="text-[15px] xs:text-[17px] sm:text-[22px] font-bold text-ink font-heading leading-none">
                    +42%
                  </span>
                </div>
                <span className="text-[10px] sm:text-[11px] text-ink-muted font-medium leading-[1.25]">
                  Conversion Rate
                  <br />
                  &nbsp;
                </span>
              </div>

              <div className="bg-surface rounded-xl p-2 sm:p-4 flex flex-col justify-center items-start">
                <div className="flex items-center gap-1 sm:gap-2 mb-1">
                  <Package
                    className="w-3.5 h-3.5 sm:w-5 sm:h-5 text-accent shrink-0"
                    strokeWidth={2.5}
                  />
                  <span className="text-[15px] xs:text-[17px] sm:text-[22px] font-bold text-ink font-heading leading-none">
                    200+
                  </span>
                </div>
                <span className="text-[10px] sm:text-[11px] text-ink-muted font-medium leading-[1.25]">
                  Products Optimized
                  <br />
                  &nbsp;
                </span>
              </div>
            </div>

            {/* Services Checklist */}
            <div className="mb-5">
              <p className="text-[13px] font-bold text-ink mb-2.5">
                Services Provided:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-2">
                {[
                  "Store Management (Shopify & Amazon)",
                  "Marketplace Operations",
                  "Product Listing Optimization",
                  "Fulfillment Support",
                  "Inventory & Order Management",
                  "Ongoing E-Commerce Management",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <div className="mt-[2px] bg-[#22C55E] rounded-full p-[2px] shrink-0">
                      <svg
                        width="10"
                        height="10"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="white"
                        strokeWidth="4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                    <span className="text-[11px] sm:text-[12px] text-ink-muted leading-tight">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <div className="mt-auto pt-1 w-full">
              <Link
                href="/case-studies/oud-store"
                className="flex items-center justify-center w-full py-3.5 rounded-xl border border-accent text-accent font-bold text-[13px] sm:text-[14px] hover:bg-accent-subtle transition-colors"
              >
                View Oud Store Case Study{" "}
                <span className="ml-1.5 font-normal">→</span>
              </Link>
            </div>
          </article>

          {/* Card 2: Thai Organic */}
          <article className="bg-paper border border-border rounded-[20px] p-4 sm:p-6 flex flex-col shadow-xs">
            {/* Top Row: Logo/Text + Mockup Image */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 mb-5 items-start">
              {/* Left Column: Logo & Text */}
              <div className="w-full sm:w-[48%] flex flex-col justify-start pt-1">
                <div className="flex flex-col items-start mb-2.5">
                  <div className="relative w-[140px] sm:w-[160px] h-[65px] sm:h-[75px] mb-1.5">
                    <Image
                      src="/logos/organic.png"
                      alt="Thai Organic"
                      fill
                      className="object-contain object-left"
                    />
                  </div>
                  <a
                    href="https://thai-organics.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[14px] sm:text-[15px] font-bold text-accent hover:text-accent-deep hover:underline text-left"
                  >
                    ThaiOrganic.com
                  </a>
                </div>
                <p className="text-[12px] sm:text-[13px] text-ink-muted leading-relaxed text-left">
                  We supported Thai Organic with their e-commerce operations,
                  product optimization, and online store management to improve
                  visibility, increase conversions, and support long-term
                  growth.
                </p>
              </div>

              {/* Right Column: Device Mockup */}
              <div className="w-full sm:w-[52%] relative flex items-center justify-center sm:justify-end mt-2 sm:mt-0">
                <div className="relative w-full max-w-[300px] sm:max-w-none sm:w-[115%] aspect-[1.35/1] sm:-mr-4">
                  <Image
                    src="/images/case-study-2.webp"
                    alt="Thai Organic website shown on laptop and phone"
                    fill
                    className="object-contain object-center sm:object-right"
                    sizes="(max-width: 639px) 100vw, 300px"
                    priority
                  />
                </div>
              </div>
            </div>

            {/* Stat Boxes Grid */}
            <div className="grid grid-cols-3 gap-1.5 sm:gap-3 mb-5">
              <div className="bg-surface rounded-xl p-2 sm:p-4 flex flex-col justify-center items-start">
                <div className="flex items-center gap-1 sm:gap-2 mb-1">
                  <BarChart3
                    className="w-3.5 h-3.5 sm:w-5 sm:h-5 text-accent shrink-0"
                    strokeWidth={2.5}
                  />
                  <span className="text-[15px] xs:text-[17px] sm:text-[22px] font-bold text-ink font-heading leading-none">
                    +120%
                  </span>
                </div>
                <span className="text-[10px] sm:text-[11px] text-ink-muted font-medium leading-[1.25]">
                  Online Sales
                  <br />
                  (12 months)
                </span>
              </div>

              <div className="bg-surface rounded-xl p-2 sm:p-4 flex flex-col justify-center items-start">
                <div className="flex items-center gap-1 sm:gap-2 mb-1">
                  <ShoppingCart
                    className="w-3.5 h-3.5 sm:w-5 sm:h-5 text-accent shrink-0"
                    strokeWidth={2.5}
                  />
                  <span className="text-[15px] xs:text-[17px] sm:text-[22px] font-bold text-ink font-heading leading-none">
                    +55%
                  </span>
                </div>
                <span className="text-[10px] sm:text-[11px] text-ink-muted font-medium leading-[1.25]">
                  Conversion Rate
                  <br />
                  &nbsp;
                </span>
              </div>

              <div className="bg-surface rounded-xl p-2 sm:p-4 flex flex-col justify-center items-start">
                <div className="flex items-center gap-1 sm:gap-2 mb-1">
                  <Package
                    className="w-3.5 h-3.5 sm:w-5 sm:h-5 text-accent shrink-0"
                    strokeWidth={2.5}
                  />
                  <span className="text-[15px] xs:text-[17px] sm:text-[22px] font-bold text-ink font-heading leading-none">
                    150+
                  </span>
                </div>
                <span className="text-[10px] sm:text-[11px] text-ink-muted font-medium leading-[1.25]">
                  Product Listings
                  <br />
                  Optimized
                </span>
              </div>
            </div>

            {/* Services Checklist */}
            <div className="mb-5">
              <p className="text-[13px] font-bold text-ink mb-3">
                Services Provided:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-2">
                {[
                  "Shopify Store Management",
                  "Marketplace Integration",
                  "Product Listing & SEO Optimization",
                  "Promotional Campaign Support",
                  "Inventory & Order Management",
                  "Ongoing E-Commerce Operations",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <div className="mt-[2px] bg-[#22C55E] rounded-full p-[2px] shrink-0">
                      <svg
                        width="10"
                        height="10"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="white"
                        strokeWidth="4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                    <span className="text-[11px] sm:text-[12px] text-ink-muted leading-tight">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <div className="mt-auto pt-1 w-full">
              <Link
                href="/case-studies/thai-organic"
                className="flex items-center justify-center w-full py-[14px] rounded-xl border border-accent text-accent font-bold text-[14px] hover:bg-accent-subtle transition-colors"
              >
                View Thai Organic Case Study{" "}
                <span className="ml-1.5 font-normal">→</span>
              </Link>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
