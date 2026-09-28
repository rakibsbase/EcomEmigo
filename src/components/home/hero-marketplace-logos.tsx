import * as React from "react";

export interface MarketplaceItem {
  id: string;
  name: string;
  renderLogo: () => React.ReactNode;
}

export const MARKETPLACE_LOGOS: MarketplaceItem[] = [
  {
    id: "shopify",
    name: "Shopify",
    renderLogo: () => (
      <div className="flex items-center gap-2">
        <svg
          className="h-5 sm:h-6 w-auto"
          viewBox="0 0 105 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            d="M20.2 3.6c-.2-.1-.4 0-.5.1L18.1 5.2c-.2.1-.3.3-.3.5l-.7 2.8c-.3-.1-.6-.2-.9-.2-2.4 0-3.7 2-4.1 3.9-1.1.3-2.3.6-3.4 1-1 .3-1 .4-1.1 1.3L5.3 25.6c-.1.8.3 1.2 1.1 1.2h16.4c.8 0 1.2-.5 1.2-1.3l-2.5-19.3c0-.8-.4-1.2-1.2-1.2l-.7-.1zm-3.7 4.6l.4-1.8 1.2-.4-.7 2.4-1-.1zm-2.4 3.6c.4-1.5 1.3-2.8 2.9-2.8.3 0 .5.1.7.2l-1 4.4c-.9-.4-1.8-.9-2.6-1.8zm5.9 1.6l-.7 3.1c-.5-.2-1.1-.2-1.6-.2-1.1 0-2.1.3-2.9.8l1.1-4.5c.7.3 1.3.5 2.1.7.8.2 1.5.2 2 .2z"
            fill="#95BF47"
          />
          <text
            x="30"
            y="21"
            fontFamily="var(--font-heading), sans-serif"
            fontSize="16"
            fontWeight="700"
            className="fill-ink"
            letterSpacing="-0.5"
          >
            shopify
          </text>
        </svg>
      </div>
    ),
  },
  {
    id: "amazon",
    name: "Amazon",
    renderLogo: () => (
      <div className="flex items-center gap-1.5">
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-5 h-5 text-ink"
          aria-hidden="true"
        >
          <path d="M13.9 12.3c-.1-.7-.6-1.1-1.3-1.1-.9 0-1.5.7-1.5 1.7 0 1 .6 1.7 1.5 1.7.7 0 1.2-.5 1.3-1.1v-1.2zm2.6 1.8c-.1.3-.3.4-.6.4-.3 0-.5-.2-.5-.5v-4c0-1.4-.9-2.3-2.6-2.3-1.4 0-2.4.6-2.8 1.7l1.1.6c.3-.6.8-1 1.6-1 .9 0 1.4.5 1.4 1.3v.5c-.5-.1-1.2-.1-1.9-.1-1.9 0-3.1.9-3.1 2.5 0 1.5 1 2.4 2.4 2.4 1.1 0 1.9-.5 2.3-1.3l.1 1.1h1.3c.1 0 .2-.1.2-.2v-2.6l-1.9.6zM20.9 17.8c-2.4 1.8-5.8 2.7-8.8 2.7-4.2 0-7.9-1.6-10.7-4.2-.2-.2-.2-.5.1-.7.4-.3.7-.2.9 0 2.5 2.3 5.9 3.7 9.7 3.7 2.7 0 5.8-.8 8-2.4.3-.2.7-.1.9.2.2.4.1.7-.1.9zm.6-1.5c-.3-.4-2-.2-3-.1-.3 0-.4-.2-.1-.4 1.7-1.2 3.6-.9 3.9-.5.3.4-.2 2.3-1.8 3.7-.3.2-.5.1-.3-.2.4-.7 1.6-2.1 1.3-2.5z" />
        </svg>
        <span className="text-ink text-sm font-bold tracking-tight font-heading">
          amazon
        </span>
      </div>
    ),
  },
  {
    id: "tiktok-shop",
    name: "TikTok Shop",
    renderLogo: () => (
      <div className="flex items-center gap-1.5">
        <svg
          viewBox="0 0 24 24"
          className="w-4 h-4 fill-current text-ink"
          aria-hidden="true"
        >
          <path d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.245V2h-3.445v13.672a2.896 2.896 0 0 1-2.882 2.882 2.895 2.895 0 0 1-2.882-2.882 2.896 2.896 0 0 1 2.882-2.883c.277 0 .543.036.797.103V9.418a6.34 6.34 0 0 0-.797-.052 6.34 6.34 0 0 0-6.335 6.336 6.34 6.34 0 0 0 6.335 6.336 6.34 6.34 0 0 0 6.336-6.336v-6.91a8.168 8.168 0 0 0 4.887 1.62V6.953a4.838 4.838 0 0 1-1.126-.267z" />
        </svg>
        <span className="text-ink text-sm font-bold tracking-tight font-heading">
          TikTok Shop
        </span>
      </div>
    ),
  },
  {
    id: "walmart",
    name: "Walmart",
    renderLogo: () => (
      <div className="flex items-center gap-1.5">
        <svg
          viewBox="0 0 24 24"
          className="w-4 h-4 text-[#FFC220] fill-current"
          aria-hidden="true"
        >
          <path d="M12 2a1.3 1.3 0 0 0-1.3 1.3v4.4a1.3 1.3 0 0 0 2.6 0V3.3A1.3 1.3 0 0 0 12 2zm6.9 3.6a1.3 1.3 0 0 0-1.8.5l-2.2 3.8a1.3 1.3 0 0 0 .5 1.8 1.3 1.3 0 0 0 1.8-.5l2.2-3.8a1.3 1.3 0 0 0-.5-1.8zm-13.8 0a1.3 1.3 0 0 0-.5 1.8l2.2 3.8a1.3 1.3 0 0 0 1.8.5 1.3 1.3 0 0 0 .5-1.8L6.9 6.1a1.3 1.3 0 0 0-1.8-.5zm2.2 9.5a1.3 1.3 0 0 0-.5-1.8 1.3 1.3 0 0 0-1.8.5l-2.2 3.8a1.3 1.3 0 0 0 .5 1.8 1.3 1.3 0 0 0 1.8-.5l2.2-3.8zm9.4-1.3a1.3 1.3 0 0 0-.5 1.8l2.2 3.8a1.3 1.3 0 0 0 1.8.5 1.3 1.3 0 0 0 .5-1.8l-2.2-3.8a1.3 1.3 0 0 0-1.8-.5zM12 16.3a1.3 1.3 0 0 0-1.3 1.3v4.4a1.3 1.3 0 0 0 2.6 0v-4.4a1.3 1.3 0 0 0-1.3-1.3z" />
        </svg>
        <span className="text-[#0071DC] dark:text-[#38BDF8] text-sm font-bold tracking-tight font-heading">
          Walmart
        </span>
      </div>
    ),
  },
  {
    id: "ebay",
    name: "eBay",
    renderLogo: () => (
      <div
        className="flex items-center tracking-tight font-heading"
        aria-label="eBay"
      >
        <span className="text-[#E53238] font-bold text-base">e</span>
        <span className="text-[#0064D2] dark:text-[#38BDF8] font-bold text-base">
          b
        </span>
        <span className="text-[#F5AF02] font-bold text-base">a</span>
        <span className="text-[#86B817] font-bold text-base">y</span>
      </div>
    ),
  },
];

export function HeroMarketplaceLogos() {
  return (
    <ul
      role="list"
      aria-label="Supported eCommerce platforms"
      className="flex flex-wrap items-center gap-4 sm:gap-7 mb-5 sm:mb-8"
    >
      {MARKETPLACE_LOGOS.map((platform) => (
        <li
          key={platform.id}
          className="inline-flex items-center hover:opacity-90 transition-opacity"
          title={platform.name}
        >
          {platform.renderLogo()}
        </li>
      ))}
    </ul>
  );
}
