import * as React from "react";
import Image from "next/image";

export function HeroVisual() {
  return (
    <div className="relative w-full max-w-[34rem] sm:max-w-[38rem] md:max-w-[42rem] lg:max-w-none mx-auto select-none">
      {/* Subtle Ambient Backlight Glow behind Mockup */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[85%] h-[75%] bg-radial from-accent/15 dark:from-accent/25 via-accent/5 dark:via-accent/10 to-transparent blur-3xl rounded-full pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="animate-hero-float-main relative flex items-center justify-center lg:justify-end">
        <div className="relative w-full max-w-[48rem] mx-auto lg:ml-auto filter drop-shadow-[0_20px_35px_rgba(16,21,28,0.12)] dark:drop-shadow-[0_25px_45px_rgba(0,0,0,0.65)]">
          <Image
            src="/images/ecomamigo-hero-operations.webp"
            alt="E-commerce operations dashboard shown on a laptop and phone"
            width={1594}
            height={926}
            className="w-full h-auto object-contain select-none"
            sizes="(max-width: 639px) calc(100vw - 2rem), (max-width: 1023px) min(42rem, calc(100vw - 3rem)), 48vw"
          />
        </div>
      </div>
    </div>
  );
}
