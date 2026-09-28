# EcomAmigo — E-Commerce Management & Growth Solutions

> Dedicated Multi-Marketplace Operations & Growth for Established Brands across Shopify, Amazon, TikTok Shop, Walmart, and eBay.

---

## 🚀 Overview

**EcomAmigo** is a high-performance marketing and client acquisition platform built with **Next.js 16 (Turbopack)**, **React 19**, and **Tailwind CSS v4**. It features an enterprise-grade static architecture optimized for shared hosting (Apache/cPanel) and modern edge deployments (Vercel).

---

## ✨ Key Features & Architecture

- **⚡ 100% Performance & Core Web Vitals**:
  - Fully compressed WebP/AVIF asset delivery with 90% total payload reduction.
  - 1-Year immutable browser caching (`Cache-Control: public, max-age=31536000, immutable`).
  - Native font swapping with zero render-blocking styles.
- **🔍 100% SEO & Google Knowledge Graph**:
  - Full JSON-LD structured data (`ProfessionalService`, `WebSite`, `Service`, `FAQPage`, `Article`, `BreadcrumbList`).
  - Dynamic XML Sitemap (`/sitemap.xml`), Robots directives (`/robots.txt`), and semantic HTML Sitemap (`/sitemap`).
  - Social Graph validation across LinkedIn, Instagram, and Facebook with `sameAs` entity verification.
- **♿ 100% WCAG AA Accessibility**:
  - Calibrated color tokens with 5.4:1+ contrast on light surfaces and 6.6:1+ on dark surfaces.
  - Accessible ARIA landmarks, tablists, keyboard navigation, and screen-reader compliant headings.
- **🌓 Adaptive Light & Dark Mode**:
  - Anti-FOUC theme hydration with instant local storage persistence.
  - Deep obsidian (`#0B0F15`) dark surfaces paired with crisp royal blue brand accents.
- **📱 Responsive Mobile Experience**:
  - Touch swipe pricing carousel prioritizing popular growth plans.
  - Zero-shift responsive navigation drawer and adaptive device showcases.

---

## 🛠️ Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router, Turbopack)
- **Library**: [React 19](https://react.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Validation**: [Zod](https://zod.dev/) & [React Hook Form](https://react-hook-form.com/)
- **Primitives**: [Radix UI](https://www.radix-ui.com/) (Accordion, Toast)
- **Deployment**: Static Export (`output: "export"`) with Apache `.htaccess` headers

---

## 📦 Getting Started

### Prerequisites

- **Node.js**: `v20.x` or higher
- **Package Manager**: `pnpm` (recommended) or `npm`

### Installation

```bash
# Clone repository
git clone https://github.com/rakibsbase/EcomEmigo.git

# Navigate into project directory
cd EcomEmigo

# Install dependencies
pnpm install
```

### Development

```bash
# Run local dev server with Turbopack
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
# Generate static export into /out
pnpm build
```

---

## 📄 License

Copyright © 2026 EcomAmigo LLC. All rights reserved.
