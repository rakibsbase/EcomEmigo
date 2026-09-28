import * as React from "react";
import { Rocket, Users, Settings, TrendingUp } from "lucide-react";
import { cn } from "@/lib/utils";

interface FeaturesStripProps {
  className?: string;
}

export function FeaturesStrip({ className }: FeaturesStripProps) {
  return (
    <section
      className={cn(
        "w-full bg-surface py-20 lg:py-28 border-y border-border-subtle",
        className,
      )}
      aria-label="Key E-Commerce Advantages"
    >
      <div className="w-11/12 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {/* Item 1 */}
          <div className="flex gap-4 items-start lg:justify-center">
            <div className="mt-0.5 shrink-0">
              <Rocket className="w-8 h-8 text-accent" />
            </div>
            <div>
              <h3 className="font-bold text-ink text-[16px] mb-1 font-heading">
                Proven Experience
              </h3>
              <p className="text-ink-muted text-[14px] leading-snug">
                Real brands. Real results.
              </p>
            </div>
          </div>

          {/* Item 2 */}
          <div className="flex gap-4 items-start lg:justify-center">
            <div className="mt-0.5 shrink-0">
              <Users className="w-8 h-8 text-accent" />
            </div>
            <div>
              <h3 className="font-bold text-ink text-[16px] mb-1 font-heading">
                Multi-Platform Expertise
              </h3>
              <p className="text-ink-muted text-[14px] leading-snug">
                Shopify, Amazon, TikTok Shop, Walmart, eBay
              </p>
            </div>
          </div>

          {/* Item 3 */}
          <div className="flex gap-4 items-start lg:justify-center">
            <div className="mt-0.5 shrink-0">
              <Settings className="w-8 h-8 text-accent" />
            </div>
            <div>
              <h3 className="font-bold text-ink text-[16px] mb-1 font-heading">
                End-to-End Management
              </h3>
              <p className="text-ink-muted text-[14px] leading-snug">
                From product listings to fulfillment
              </p>
            </div>
          </div>

          {/* Item 4 */}
          <div className="flex gap-4 items-start lg:justify-center">
            <div className="mt-0.5 shrink-0">
              <TrendingUp className="w-8 h-8 text-accent" />
            </div>
            <div>
              <h3 className="font-bold text-ink text-[16px] mb-1 font-heading">
                Growth Focused
              </h3>
              <p className="text-ink-muted text-[14px] leading-snug">
                Increase sales and improve operations
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
