# agent.md — EcomAmigo Project Architecture & Engineering Memory

## 1. Project Purpose & Business Goal

- **Brand:** EcomAmigo
- **Entity:** EcomAmigo LLC
- **Business Model:** California-based dedicated multi-marketplace e-commerce management and growth agency.
- **Marketplaces Managed:** Shopify, Amazon, TikTok Shop, Walmart, eBay.
- **Core Value Proposition:** Full-service operations, catalog hygiene, buy box defense, inventory reconciliation, and advertising management with flat monthly retainers and zero revenue cuts.
- **Core Objectives:**
  1. High organic Google SEO rankings and indexation.
  2. Technical SEO perfection based on the official Website Audit Checklist.
  3. Real credibility and high trust for California e-commerce store owners.
  4. Conversion-focused user journeys driving free store audit and call bookings.
  5. Exceptional Core Web Vitals (sub-second LCP, zero CLS, minimal JS).
  6. 100% static export compatibility for deployment on shared Apache hosting (Hostinger) without a Node.js server.

---

## 2. Technical Stack

- **Framework:** Next.js 16.3.6 (App Router)
- **Library / Runtime:** React 19.2.8, React DOM 19.2.8
- **Language:** TypeScript 5.9.3 (Strict Mode)
- **Styling:** Tailwind CSS v4.3.3 + PostCSS 4.3.3
- **Icons:** `lucide-react`
- **Utilities:** `clsx`, `tailwind-merge`
- **Package Manager:** `pnpm` 11.1.1
- **Deployment Architecture:** Static Export (`output: "export"`) with static HTML/CSS/JS and PHP form relay (`public/send-audit.php`).

---

## 3. Directory & Folder Conventions

```
EcomAmigo/
├── public/
│   ├── favicon.ico                 # Multi-size direct icon
│   ├── send-audit.php              # Static PHP mailer relay (Resend integration)
│   └── logos/
│       ├── logo_amigo.png          # Master brand logo (1764x310, aspect ratio ~5.69:1)
│       └── current_favicon.png     # Master 1024x1024 brand icon
├── src/
│   ├── app/
│   │   ├── globals.css             # Verbatim design tokens & GPU keyframe animations
│   │   ├── layout.tsx              # Root server layout, Inter fonts, JSON-LD, ThemeProvider
│   │   ├── page.tsx                # Homepage (Navbar + Hero)
│   │   ├── favicon.ico             # Next.js multi-size icon
│   │   ├── icon.png                # 512x512 web app icon
│   │   └── apple-icon.png          # 180x180 iOS touch icon
│   ├── components/
│   │   ├── layout/
│   │   │   ├── navbar.tsx          # Server Component header
│   │   │   └── mobile-menu.tsx     # "use client" drawer trigger & slide-over
│   │   └── ui/
│   │       └── theme-toggle.tsx    # "use client" theme switch button
│   ├── lib/
│   │   ├── constants.ts            # Single source of truth for company & navigation data
│   │   ├── seo.ts                  # Metadata generator & JSON-LD schemas
│   │   └── utils.ts                # cn() class merger
│   └── types/
│       └── index.ts                # Shared TypeScript interfaces
├── next.config.ts                  # Static export configuration
├── tsconfig.json                   # Strict TypeScript compiler options (@/* path alias)
├── package.json                    # Project dependencies
├── eslint.config.mjs               # ESLint config
└── agent.md                        # Persistent project memory (this document)
```

---

## 4. Source-Project Patterns & Copied Assets

- **Logo Asset:** `public/logos/logo_amigo.png` copied directly. Tight cropped, 1764x310 dimensions with 5.69:1 aspect ratio. Rendered via Next.js `<Image src="/logos/logo_amigo.png" ... />`.
- **Favicons:** High-contrast brand blue squircle (`#1E4FD8`) with white upward-arrow 'A' emblem: `favicon.ico`, `icon.png`, `apple-icon.png`.
- **Globals CSS:** Copied verbatim from source. Preserves tokens: `ink`, `paper`, `surface`, `border`, `accent`, and dark mode adaptations.
- **Form Mailer:** `public/send-audit.php` preserved for static lead dispatch via Resend API.
- **Cal.com Integration:** https://cal.com/franchise/ecom-amigo (username: `franchise`, slug: `ecom-amigo`).

---

## 5. SEO Requirements & Audit Checklist Safeguards

Based on the official `Website Audit Checklist- ecomamigo.xlsx` findings, the new site enforces:

1. **Title & Description:** Every page must define unique, descriptive metadata via Next.js `generateMetadata` / `Metadata` API. (Old site had 7 pages missing titles/descriptions).
2. **Single `<h1>`:** Exactly one semantic `<h1>` per page. (Old site had 7 pages with missing H1).
3. **Image Alt Tags:** Every image/graphic has descriptive, non-empty alt text. (Old site had missing alt tags).
4. **Structured Data:** Embed `Organization` and `WebSite` JSON-LD schemas in the root layout. (Old site had no structured data).
5. **Semantic Landmarks:** Proper `<header>`, `<nav aria-label="Main">`, `<main>`, `<section>`, and crawlable `<a>` links.
6. **Zero Broken Links / Images:** All internal links point to active routes; all image sources verified.
7. **Mobile Core Web Vitals:** Minimized client JS, CSS-based animations, no Framer Motion, instant LCP with server-rendered markup.

---

## 6. Design System & Tokens

- **Light Mode (`:root`):**
  - `--background`: `#ffffff`
  - `--foreground`: `#10151c`
  - `--ink`: `#10151c` (Primary text)
  - `--ink-muted`: `#4f5662` (Body & subtitles)
  - `--ink-subtle`: `#838b96` (Labels & captions)
  - `--paper`: `#ffffff` (Card background)
  - `--surface`: `#f5f6f8` (Off-white sections)
  - `--surface-hover`: `#eceef2`
  - `--border`: `#e4e6ea` (Hairline card borders)
  - `--border-subtle`: `#edeff2`
  - `--accent`: `#1e4fd8` (Brand royal blue)
  - `--accent-deep`: `#15379c` (Hover state)
  - `--accent-subtle`: `#eff4fe` (Pill badges)
- **Dark Mode (`.dark`):**
  - `--background`: `#0b0f15`
  - `--foreground`: `#f3f4f6`
  - `--ink`: `#f9fafb`
  - `--ink-muted`: `#9ca3af`
  - `--ink-subtle`: `#6b7280`
  - `--paper`: `#111722`
  - `--surface`: `#161e2c`
  - `--surface-hover`: `#1e293b`
  - `--border`: `#222c3c`
  - `--accent`: `#2563eb`
  - `--accent-deep`: `#3b82f6`
  - `--accent-subtle`: `rgba(37, 99, 235, 0.15)`
- **Typography:** Headings: `Inter Tight` (`--font-heading`), Body: `Inter` (`--font-sans`).

---

## 7. Reusable Animation Rules (CSS Native, No Framer Motion)

- `.animate-hero-entrance`: GPU-accelerated entrance (`500ms cubic-bezier(0.16, 1, 0.3, 1)`).
- `.hero-accent-text`: Shimmering gradient text accent.
- `.hero-underline`: Expanding gradient line under headline accent.
- `.animate-hero-float-main`: Subtle 9s ease-in-out GPU floating motion.
- `.animate-drawer-in`: Smooth 0.28s right-to-left half-screen slide-over.
- `.animate-fade-in-overlay`: 0.22s backdrop overlay fade.
- `.brand-logo-img`: Dark mode filter (`invert(1) hue-rotate(180deg)`) rendering white text while preserving brand blue.
- `@media (prefers-reduced-motion: reduce)`: All animations gracefully disabled.

---

## 8. Component Architecture & Client Boundaries

- **Server Components Default:** Root layout, homepage, navbar, and hero section are 100% server components.
- **Client Components Strictly Limited To:**
  - `src/components/ui/theme-toggle.tsx`: Light/dark switch with `resolvedTheme` & `toggleTheme`.
  - `src/components/layout/mobile-menu.tsx`: Mobile drawer open/close state, escape key, and scroll lock.
- **Zero-JS CTAs:** All call-to-actions are semantic Next.js `<Link>` elements.

---

## 9. Things That Must NOT Be Changed

1. Do NOT turn the entire page or layout into `"use client"`.
2. Do NOT add Framer Motion or heavy JS animation runtimes.
3. Do NOT invent new brand colors outside `globals.css`.
4. Do NOT break static export compatibility (`output: "export"`).
5. Do NOT change `/logos/logo_amigo.png` file or path.
6. Do NOT invent fake testimonials, fake client quotes, or synthetic statistics.

---

## 10. Running Task Log

### ✅ Completed: Phase 1 — Project Initialization, Navbar & Hero Section

1. Scaffolding initialized with `pnpm create next-app@latest .` using Next.js 16.3.6, TypeScript, Tailwind CSS v4.3.3, and pnpm.
2. Verified `node_modules` exists directly in `EcomAmigo/node_modules`.
3. Created `agent.md` context document.
4. Integrated official brand assets (`logo_amigo.png`, multi-resolution favicon suite).
5. Implemented Navbar with active link states ("Home" active by default), desktop dropdown, `<ThemeToggle />`, primary CTA, and smooth right-to-left `<MobileMenu />` drawer.
6. Implemented Hero Section matching the reference composition:
   - Eyebrow, single H1 with `.hero-accent-text` and `.hero-underline`, supporting copy.
   - Platform logos: Shopify, Amazon, TikTok Shop, Walmart, eBay.
   - Dual CTAs: Primary "Get Your Free E-Commerce Audit →" + Secondary "View Our Services".
   - Coded dashboard mockup (laptop with Total Sales, Orders, Top Products cards + overlapping mobile device with Shopify badge and green revenue chart) animated with `.animate-hero-float-main`.
7. Refined Hero Banner per client specifications:
   - Replaced flat background with softly blurred executive daylight office background (`/images/hero-bg-flipped.jpg`) with subtle backdrop blur and gradient overlay ensuring high contrast in light & dark modes.
   - Constrained layout to `max-w-11/12 mx-auto` and configured banner height to `92dvh` (`min-h-[92dvh] flex items-center`).
   - Built with semantic HTML landmarks (`<section>`, `<header>`, `<h1>`, `<p>`, `<ul role="list">`, `<div role="group">`).
   - Extracted platform logos into a modular, typed `<HeroMarketplaceLogos />` component with SVG brand marks.
   - Matched CTA buttons directly to reference design: Solid blue `rounded-lg` primary button ("Get Your Free E-Commerce Audit →") + White/blue-border `rounded-lg` secondary button ("View Our Services").
   - Integrated hyper-realistic commercial device visual (`/images/hero-devices-transparent.png`) in `<HeroVisual />` featuring MacBook Pro and iPhone with live e-commerce metrics and GPU floating keyframe animation.
8. Passed TypeScript check, ESLint check (0 errors), and Next.js static export build (`pnpm build`).
9. Updated Hero Visual to Transparent & Left-Facing:
   - Generated a clean transparent PNG (`/images/hero-devices-transparent.png`) isolating the MacBook Pro and iPhone with exact left/forward-facing orientation matching the reference layout.
   - Removed the rectangular card border and frame completely; devices now sit directly on the wood desk in the background image.
   - Added natural silhouette drop-shadow via CSS (`drop-shadow-[0_22px_40px_rgba(0,0,0,0.22)]`) so the devices blend into the daylight office scene.
   - Refined the banner gradient overlay to fade to transparent on the right, allowing the oak desk and green foliage to show through with natural depth.
10. Integrated Final High-Resolution Banner (`fina_banner_right`) & Asset Audit Cleanup:

- Extracted precision alpha-channel transparent cutout of `fina_banner_right.jpg` (`/images/fina_banner_right_transparent.webp` and `.png`) with defringed edges and contact desk shadow.
- Removed video element and `/public/video/` directory per user direction.
- Blended transparent devices directly into the hero banner desk with brand royal blue ambient glow and CSS drop shadow.
- Audited and purged 28+ unused intermediate/scratch image, video, and logo assets from `public/`.

11. Responsive Layout Refinement & Mobile Buttons Visibility Fix:

- Configured the right hero device visual to `display: none` on mobile/tablet viewports (`hidden lg:block`).
- Removed `overflow-hidden` from the hero `<section>` so content is never clipped on mobile screens.
- Optimized mobile typography and vertical rhythm so both CTA buttons ("Get Your Free E-Commerce Audit →" and "View Our Services") fit comfortably above the fold.
- Added secondary "View Our Services" button to the mobile drawer bottom action area alongside "Get Your Free Audit".

### ⏳ Upcoming Tasks (Future Phases)

- **Phase 2:** Marketplace Logos Bar & Trust Credentials
- **Phase 3:** Services Grid & Detailed Operation Pillars
- **Phase 4:** Process / How It Works Interactive Timeline
- **Phase 5:** Case Studies Showcase & Metrics
- **Phase 6:** Transparent Pricing Tiers & Calculator
- **Phase 7:** Site Footer, HTML Sitemap, and Static Audit Form Lead Capture

---

## 11. Hero Visual Asset Record

- **Final asset:** `public/images/ecomamigo-hero-operations.webp` (1594 x 926, WebP with transparency).
- **Source:** Optimized production derivative of the existing generated `assets/source/ecomamigo-hero-operations-source.png`; the native image-generation tool was not available in this environment, so no new generative source was introduced.
- **Composition:** The transparent laptop and phone foreground stays visually weighted to the right on desktop, then moves below the HTML copy on mobile. It sits over `public/images/hero-bg-flipped.jpg`, retaining the calm workspace, desk grounding, soft daylight, and clear left-side copy area.
- **Brand direction:** The dashboard is kept restrained and operational, with white surfaces, dark ink typography, muted supporting text, hairline borders, and blue-led analytics. The previous floating-card source and decorative blue ambient glow are not used.
- **Responsive implementation:** `HeroVisual` now renders at every breakpoint with intrinsic 1594 x 926 dimensions and responsive `sizes`; its parent uses the homepage grid order to place it after copy below `lg`.
- **Performance:** The production WebP uses lossy quality 85 with alpha quality 90 and is the sole preloaded hero visual. The project remains compatible with `output: "export"`; the background is eagerly requested without a competing preload. Future improvement: replace the derived source with a newly generated 2x photographic composition once native image generation is available.

## 12. Image Cleanup

- Removed unused `banner_right.png` and `banner_right2.png` variants from `public/images`.
- Moved the retained PNG source outside `public` so it remains available for future asset work without being copied into the static deployment.

### ✅ Completed: Phase 2 — Trusted Results Section

- Built `src/components/home/trusted-results.tsx` immediately below the Hero section.
- **Section Details:** Eyebrow ("Real Results For Growing Brands"), H1 ("Proven E-Commerce Growth"), supporting text, and two placeholder case study cards side by side.
- **Data Placeholders:** Used `Aura Apparel` (Shopify) and `Glow Wellness` (Amazon/TikTok Shop) as dummy brands. These are clearly marked with `// PLACEHOLDER — replace with real client data` for future updates.
- **Assets:** Generated two highly realistic laptop/phone mockups with exact 19.5:9 smartphone aspect ratios, landscape crops (16:10), and zero AI distortion or stretched proportions.
  - `public/images/case-study-1.webp` (Apparel brand storefront)
  - `public/images/case-study-2.webp` (Skincare wellness dashboard)
- **Hard Constraints Addressed:** The content density was aggressively trimmed (max 15 words description, 2 stat boxes, 3 checklist items single-column, no per-card buttons) to ensure the section comfortably fits within `100vh` on desktop (`lg`) viewports including the fixed navbar.
- **Responsive Behavior:** Stacks gracefully on mobile/tablet viewports where the 100vh constraint is lifted.
- **Bottom CTA:** Consolidated the CTA to a single "See More Case Studies" button at the bottom of the section linking to `/case-studies`.
- Validated via `pnpm build`.
