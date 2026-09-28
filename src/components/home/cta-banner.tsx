import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface CtaBannerProps {
  className?: string;
}

export function CtaBanner({ className }: CtaBannerProps = {}) {
  return (
    <section
      className={cn(
        "w-full bg-background py-20 lg:py-28 flex flex-col items-center border-t border-border-subtle",
        className,
      )}
      aria-label="Call to Action Banner"
    >
      <div className="w-11/12 mx-auto px-2 sm:px-6 lg:px-8 flex flex-col items-center">
        {/* Main Blue Banner Container */}
        <div className="w-full bg-[#051124] rounded-2xl sm:rounded-3xl p-6 sm:p-10 lg:p-12 xl:p-14 flex flex-col lg:flex-row items-center justify-between overflow-hidden relative shadow-xl border border-[#102444]">
          {/* Left / Top Copy Block */}
          <div className="w-full lg:w-[38%] xl:w-[36%] flex flex-col items-start z-10 mb-8 lg:mb-0">
            <h2 className="text-white text-2xl sm:text-3xl lg:text-[38px] xl:text-[40px] font-bold font-heading mb-3 sm:mb-4 leading-[1.15] text-left">
              Your Brand Could Be Next
            </h2>
            <p className="text-slate-300 text-[13px] sm:text-[15px] lg:text-[16px] mb-6 sm:mb-8 leading-relaxed max-w-[440px] text-left">
              From day-to-day store management to marketplace growth, EcomAmigo
              gives brands the e-commerce support they need without building an
              entire in-house team.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center w-full sm:w-auto px-6 py-3.5 rounded-full bg-white text-accent font-bold text-[13px] sm:text-[14px] hover:bg-accent-subtle hover:text-accent-deep transition-all duration-300 ease-out shadow-xs hover:shadow-md active:scale-[0.98] text-center"
            >
              Get Your Free E-Commerce Audit{" "}
              <span className="ml-1.5 font-normal">→</span>
            </Link>
          </div>

          {/* Right / Bottom Visual Block (Mockup on left, Checklist Card on right nestled closely) */}
          <div className="w-full lg:w-[62%] xl:w-[64%] flex items-center justify-center lg:justify-end z-10">
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-end gap-3.5 sm:gap-3 lg:gap-3.5 xl:gap-4 w-full sm:w-auto">
              {/* Prominent Store Mockup Container */}
              <div className="relative w-[280px] xs:w-[310px] sm:w-[330px] md:w-[360px] lg:w-[375px] xl:w-[420px] aspect-[1.38/1] drop-shadow-[0_20px_35px_rgba(0,0,0,0.45)] shrink-0">
                <Image
                  src="/images/case-study-3.webp"
                  alt="E-Commerce Store Example on laptop and mobile"
                  fill
                  className="object-contain object-center"
                  sizes="(max-width: 639px) 310px, (max-width: 767px) 330px, (max-width: 1023px) 360px, (max-width: 1279px) 375px, 420px"
                />
              </div>

              {/* Anchored Checklist Card (Placed directly beside phone with snug gap, zero overlap) */}
              <div className="w-full sm:w-auto min-w-[215px] sm:min-w-[225px] lg:min-w-[240px] xl:min-w-[255px] bg-[#08152e]/85 border border-white/15 rounded-2xl p-4 sm:p-5 lg:p-5.5 shadow-2xl backdrop-blur-md shrink-0">
                <ul className="flex flex-col gap-2.5 sm:gap-3 lg:gap-3.5">
                  {[
                    "Store Review",
                    "Growth Opportunities",
                    "Listing Optimization",
                    "Operational Improvements",
                    "Custom Recommendations",
                  ].map((item, idx) => (
                    <li
                      key={idx}
                      className="flex items-center gap-2.5 sm:gap-3"
                    >
                      <div className="w-5 h-5 rounded-full bg-[#22C55E] flex items-center justify-center shrink-0 shadow-xs">
                        <svg
                          width="11"
                          height="11"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="white"
                          strokeWidth="3.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                      </div>
                      <span className="text-[12px] sm:text-[13px] text-white font-medium text-left whitespace-nowrap">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
