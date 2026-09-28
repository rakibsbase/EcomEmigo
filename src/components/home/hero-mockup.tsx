import * as React from "react";
import { LayoutDashboard, Package, Settings } from "lucide-react";

function AmberBottleIcon({
  className = "w-full h-full",
}: {
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 24 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Dropper Rubber Bulb */}
      <path
        d="M10 2C10 0.89543 10.8954 0 12 0C13.1046 0 14 0.89543 14 2V5H10V2Z"
        fill="#292524"
      />
      {/* Pipette / Gold Cap Collar */}
      <rect x="8.5" y="5" width="7" height="3" rx="0.5" fill="#D97706" />
      <rect x="9.5" y="5.5" width="5" height="2" fill="#FBBF24" />
      {/* Bottle Neck */}
      <rect x="9.5" y="8" width="5" height="2.5" fill="#B45309" />
      {/* Bottle Body - Amber glass gradient */}
      <rect
        x="6"
        y="10.5"
        width="12"
        height="24"
        rx="2"
        fill="url(#amber-glass-grad)"
      />
      {/* White Cosmetic Label */}
      <rect x="7.5" y="15" width="9" height="12" rx="0.5" fill="#FFFDF8" />
      <line x1="9" y1="18" x2="15" y2="18" stroke="#78716C" strokeWidth="0.8" />
      <line
        x1="9"
        y1="20.5"
        x2="13.5"
        y2="20.5"
        stroke="#A8A29E"
        strokeWidth="0.6"
      />
      <line
        x1="9"
        y1="23"
        x2="14.5"
        y2="23"
        stroke="#A8A29E"
        strokeWidth="0.6"
      />
      {/* Amber Glass Highlight / Reflection */}
      <path
        d="M7.5 11.5V33.5"
        stroke="rgba(255,255,255,0.45)"
        strokeWidth="0.8"
        strokeLinecap="round"
      />
      <defs>
        <linearGradient
          id="amber-glass-grad"
          x1="6"
          y1="10.5"
          x2="18"
          y2="34.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F59E0B" />
          <stop offset="0.4" stopColor="#D97706" />
          <stop offset="1" stopColor="#92400E" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function HeroMockup() {
  return (
    <div className="relative w-full max-w-xl lg:max-w-none mx-auto select-none">
      {/* Ambient warm daylight blur behind mockup */}
      <div
        className="pointer-events-none absolute -top-8 -right-8 w-72 h-72 sm:w-96 sm:h-96 bg-gradient-to-br from-accent/15 via-accent-subtle/20 to-transparent dark:from-accent/10 dark:via-accent-subtle/10 rounded-full blur-3xl -z-10"
        aria-hidden="true"
      />

      {/* Floating container with native CSS 9s GPU keyframe */}
      <div className="animate-hero-float-main relative">
        {/* ========================================================
            LAPTOP CONTAINER
            ======================================================== */}
        <div className="relative w-full max-w-[560px] mx-auto ml-auto">
          {/* Laptop Lid Screen Bezel */}
          <div className="bg-[#181A20] rounded-t-2xl p-2.5 sm:p-3.5 pb-0 shadow-[0_20px_50px_rgba(0,0,0,0.18)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.5)] ring-1 ring-black/20">
            {/* Top Webcam Dot */}
            <div className="w-1.5 h-1.5 rounded-full bg-[#353842] mx-auto mb-2" />

            {/* Laptop Screen Content */}
            <div className="bg-surface dark:bg-background rounded-t-lg border border-border flex overflow-hidden min-h-[300px] sm:min-h-[350px]">
              {/* Left Mini Sidebar */}
              <div className="w-9 sm:w-11 bg-paper border-r border-border py-4 flex flex-col items-center gap-4 shrink-0">
                <div className="w-6 h-6 rounded-md bg-accent-subtle text-accent flex items-center justify-center">
                  <LayoutDashboard className="w-3.5 h-3.5" />
                </div>
                <div className="w-6 h-6 rounded-md text-ink-subtle hover:text-ink flex items-center justify-center transition-colors">
                  <Package className="w-3.5 h-3.5" />
                </div>
                <div className="w-6 h-6 rounded-md text-ink-subtle hover:text-ink flex items-center justify-center transition-colors">
                  <Settings className="w-3.5 h-3.5" />
                </div>
              </div>

              {/* Main Screen Content Grid */}
              <div className="flex-1 p-3 sm:p-4 space-y-3 sm:space-y-3.5">
                {/* Top Row: Total Sales & Orders Cards */}
                <div className="grid grid-cols-2 gap-2.5 sm:gap-3">
                  {/* Card 1: Total Sales */}
                  <div className="bg-paper rounded-xl border border-border p-2.5 sm:p-3 shadow-2xs">
                    <span className="text-[11px] font-medium text-ink-subtle">
                      Total Sales
                    </span>
                    <div className="text-base sm:text-xl font-bold text-ink tracking-tight mt-0.5">
                      $125,430
                    </div>
                    <div className="inline-flex items-center gap-0.5 text-[10px] sm:text-xs font-semibold text-emerald-600 dark:text-emerald-400 mt-0.5 mb-1.5">
                      <span>↑</span>
                      <span>24%</span>
                    </div>

                    {/* Smooth Blue Sparkline Chart */}
                    <div className="w-full pt-1">
                      <svg
                        viewBox="0 0 160 45"
                        fill="none"
                        className="w-full h-7 sm:h-9 overflow-visible"
                        aria-hidden="true"
                      >
                        <path
                          d="M 5 36 C 25 36, 40 25, 65 27 C 90 29, 105 16, 130 19 C 142 20, 150 10, 158 5"
                          fill="none"
                          stroke="var(--accent)"
                          strokeWidth="2.4"
                          strokeLinecap="round"
                        />
                      </svg>
                    </div>
                  </div>

                  {/* Card 2: Orders */}
                  <div className="bg-paper rounded-xl border border-border p-2.5 sm:p-3 shadow-2xs">
                    <span className="text-[11px] font-medium text-ink-subtle">
                      Orders
                    </span>
                    <div className="text-base sm:text-xl font-bold text-ink tracking-tight mt-0.5">
                      3,245
                    </div>
                    <div className="inline-flex items-center gap-0.5 text-[10px] sm:text-xs font-semibold text-emerald-600 dark:text-emerald-400 mt-0.5 mb-1.5">
                      <span>↑</span>
                      <span>18%</span>
                    </div>

                    {/* Blue Vertical Bars */}
                    <div className="flex items-end justify-between sm:justify-start sm:gap-2 h-7 sm:h-9 pt-1 px-1">
                      <span className="w-2 sm:w-2.5 h-[22%] bg-accent rounded-t-xs" />
                      <span className="w-2 sm:w-2.5 h-[38%] bg-accent rounded-t-xs" />
                      <span className="w-2 sm:w-2.5 h-[50%] bg-accent rounded-t-xs" />
                      <span className="w-2 sm:w-2.5 h-[68%] bg-accent rounded-t-xs" />
                      <span className="w-2 sm:w-2.5 h-[84%] bg-accent rounded-t-xs" />
                      <span className="w-2 sm:w-2.5 h-[100%] bg-accent rounded-t-xs" />
                    </div>
                  </div>
                </div>

                {/* Bottom Card: Top Products */}
                <div className="bg-paper rounded-xl border border-border p-2.5 sm:p-3 shadow-2xs">
                  <div className="text-xs sm:text-sm font-bold text-ink mb-2.5">
                    Top Products
                  </div>

                  <div className="space-y-2.5">
                    {/* Product Row 1 */}
                    <div className="flex items-center justify-between gap-3">
                      <div className="flex items-center gap-2.5 min-w-0">
                        <div className="w-8 h-8 sm:w-9 sm:h-9 bg-amber-50 dark:bg-amber-950/40 border border-amber-200/60 dark:border-amber-800/40 rounded-lg flex items-center justify-center shrink-0 p-1">
                          <AmberBottleIcon />
                        </div>
                        <div className="space-y-1">
                          <div className="w-20 sm:w-28 h-2 bg-border rounded-full" />
                          <div className="w-12 sm:w-16 h-1.5 bg-border-subtle rounded-full" />
                        </div>
                      </div>

                      {/* Right horizontal progress bars in blue */}
                      <div className="flex flex-col items-end gap-1 shrink-0">
                        <div className="w-16 sm:w-24 h-1.5 bg-accent rounded-full" />
                        <div className="w-12 sm:w-16 h-1.5 bg-accent/75 rounded-full" />
                        <div className="w-8 sm:w-12 h-1.5 bg-accent/50 rounded-full" />
                      </div>
                    </div>

                    {/* Product Row 2 */}
                    <div className="flex items-center justify-between gap-3 pt-1 border-t border-border-subtle">
                      <div className="flex items-center gap-2.5 min-w-0">
                        <div className="w-8 h-8 sm:w-9 sm:h-9 bg-amber-50 dark:bg-amber-950/40 border border-amber-200/60 dark:border-amber-800/40 rounded-lg flex items-center justify-center shrink-0 p-1">
                          <AmberBottleIcon />
                        </div>
                        <div className="space-y-1">
                          <div className="w-22 sm:w-26 h-2 bg-border rounded-full" />
                          <div className="w-14 sm:w-18 h-1.5 bg-border-subtle rounded-full" />
                        </div>
                      </div>

                      {/* Right horizontal progress bars in blue */}
                      <div className="flex flex-col items-end gap-1 shrink-0">
                        <div className="w-14 sm:w-20 h-1.5 bg-accent rounded-full" />
                        <div className="w-10 sm:w-14 h-1.5 bg-accent/75 rounded-full" />
                        <div className="w-7 sm:w-10 h-1.5 bg-accent/50 rounded-full" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Laptop Base (Keyboard Chassis + Thumb Notch) */}
          <div className="h-3 sm:h-3.5 bg-gradient-to-b from-[#D4D7DC] to-[#B0B4BC] dark:from-[#252C39] dark:to-[#171D27] rounded-b-xl shadow-md relative flex justify-center border-t border-[#B8BCC4] dark:border-[#323B4A]">
            <div className="w-12 sm:w-16 h-1 bg-[#848A94] dark:bg-[#0E131C] rounded-b-sm" />
          </div>
        </div>

        {/* ========================================================
            OVERLAPPING PHONE (Foreground Left)
            ======================================================== */}
        <div className="absolute left-1 sm:left-4 md:-left-3 bottom-[-14px] sm:bottom-[-20px] w-[135px] sm:w-[170px] md:w-[190px] z-20">
          <div className="bg-[#121316] rounded-[28px] sm:rounded-[36px] p-2 sm:p-2.5 shadow-[0_25px_50px_-10px_rgba(0,0,0,0.35)] ring-1 ring-white/10 dark:ring-white/5">
            {/* Phone Speaker Pill */}
            <div className="w-10 sm:w-12 h-2.5 sm:h-3 bg-black rounded-full mx-auto mb-2 flex items-center justify-center">
              <span className="w-1 h-1 rounded-full bg-[#2A2B30]" />
            </div>

            {/* Phone Screen */}
            <div className="bg-paper rounded-[22px] sm:rounded-[28px] p-2 sm:p-2.5 border border-border text-center">
              {/* Shopify Green Icon Badge */}
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-[#95BF47]/15 flex items-center justify-center mx-auto mb-1">
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5"
                  viewBox="0 0 105 105"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M87.7 20.3c-.6-.4-1.3-.2-1.7.3l-5.6 8.5c-.7.5-1.1 1.2-1.2 2l-2.4 10.9c-1-.5-2.2-.8-3.5-.8-9.4 0-14.5 7.8-16 15.2-4.3 1.2-9 2.3-13.3 3.9-3.9 1.2-3.9 1.6-4.3 5.1L35.6 96c-.4 3.1 1.2 4.7 4.3 4.7h64c3.1 0 4.7-2 4.7-5.1L98.8 20.6c0-3.1-1.6-4.7-4.7-4.7l-6.4 4.4zm-14.4 17.9l1.6-7 4.7-1.6-2.7 9.3-3.6-.7zm-9.3 14c1.6-5.8 5.1-10.9 11.3-10.9 1.2 0 2 .4 2.7.8l-3.9 17.1c-3.5-1.6-7-3.5-10.1-7zm23 6.2l-2.7 12.1c-2-.8-4.3-.8-6.2-.8-4.3 0-8.2 1.2-11.3 3.1l4.3-17.5c2.7 1.2 5.1 2 8.2 2.7 3.1.8 5.8.8 7.7.4z"
                    fill="#95BF47"
                  />
                </svg>
              </div>

              <div className="text-[10px] font-medium text-ink-subtle">
                Total Sales
              </div>
              <div className="text-sm sm:text-lg font-bold text-ink tracking-tight">
                $56,230
              </div>
              <div className="text-[10px] sm:text-xs font-bold text-emerald-600 dark:text-emerald-400 mb-1">
                ↑ 32%
              </div>

              {/* Green Sparkline with Gradient Fill */}
              <div className="w-full">
                <svg
                  viewBox="0 0 140 45"
                  fill="none"
                  className="w-full h-8 sm:h-10 overflow-hidden"
                  aria-hidden="true"
                >
                  <defs>
                    <linearGradient
                      id="phone-green-fill"
                      x1="0"
                      y1="0"
                      x2="0"
                      y2="1"
                    >
                      <stop offset="0%" stopColor="#10B981" stopOpacity="0.3" />
                      <stop offset="100%" stopColor="#10B981" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M 5 38 C 22 38, 30 28, 48 30 C 65 32, 78 18, 98 21 C 112 23, 122 10, 135 4 L 135 45 L 5 45 Z"
                    fill="url(#phone-green-fill)"
                  />
                  <path
                    d="M 5 38 C 22 38, 30 28, 48 30 C 65 32, 78 18, 98 21 C 112 23, 122 10, 135 4"
                    fill="none"
                    stroke="#10B981"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                  />
                </svg>
              </div>

              {/* Mini Product Thumbnails in Phone */}
              <div className="pt-1.5 mt-1 border-t border-border-subtle space-y-1.5">
                <div className="flex items-center gap-1.5">
                  <div className="w-5 h-5 bg-amber-50 dark:bg-amber-950/40 rounded flex items-center justify-center p-0.5 shrink-0">
                    <AmberBottleIcon />
                  </div>
                  <div className="space-y-0.5 text-left">
                    <div className="w-12 h-1 bg-border rounded-full" />
                    <div className="w-8 h-1 bg-border-subtle rounded-full" />
                  </div>
                </div>

                <div className="flex items-center gap-1.5">
                  <div className="w-5 h-5 bg-amber-50 dark:bg-amber-950/40 rounded flex items-center justify-center p-0.5 shrink-0">
                    <AmberBottleIcon />
                  </div>
                  <div className="space-y-0.5 text-left">
                    <div className="w-14 h-1 bg-border rounded-full" />
                    <div className="w-9 h-1 bg-border-subtle rounded-full" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Ground Soft Cast Shadow */}
        <div
          className="mt-2 mx-auto w-4/5 h-3 bg-black/10 dark:bg-black/40 blur-md rounded-full"
          aria-hidden="true"
        />
      </div>
    </div>
  );
}
