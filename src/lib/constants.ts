import {
  CompanyInfo,
  NavItem,
  ProcessStep,
  FAQItem,
  PricingTier,
} from "@/types";

export const COMPANY: CompanyInfo = {
  name: "EcomAmigo",
  legalName: "EcomAmigo LLC",
  tagline: "Dedicated Multi-Marketplace Operations & Growth",
  subheadline:
    "We help brands manage, optimize, and grow their online stores across Shopify, Amazon, TikTok Shop, Walmart, and eBay.",
  location: "California, USA",
  fullAddress: "9747 Businesspark Ave #255",
  phone: "+1 (619) 771-2691",
  email: "caliecomamigo@gmail.com",
  auditEmail: "caliecomamigo@gmail.com",
  calLink: "https://cal.com/franchise/ecom-amigo",
  calUsername: "franchise",
  calEventSlug: "ecom-amigo",
  siteUrl: "https://ecomamigo.com",
  logo: "/logos/logo_amigo.webp",
  socialLinks: [
    {
      platform: "linkedin",
      label: "LinkedIn",
      url: "https://www.linkedin.com/company/ecomamigo/",
    },
    {
      platform: "instagram",
      label: "Instagram",
      url: "https://www.instagram.com/ecomamigo",
    },
    {
      platform: "facebook",
      label: "Facebook",
      url: "https://www.facebook.com/profile.php?id=61584374320010",
    },
  ],
};

export const NAV_LINKS: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "Services",
    href: "/services",
    children: [
      {
        label: "Amazon Store Management",
        href: "/services/amazon-store-management",
        description:
          "Full operational handling, buy box defense & catalog hygiene.",
      },
      {
        label: "TikTok Shop Operations",
        href: "/services/tiktok-shop-operations",
        description:
          "Creator affiliate pipeline, live shopping & sample fulfillment.",
      },
      {
        label: "Walmart Marketplace",
        href: "/services/walmart-marketplace",
        description: "WFS fulfillment setup, Pro Seller badges & catalog sync.",
      },
      {
        label: "Multichannel Operations",
        href: "/services/multichannel-operations",
        description:
          "Unified inventory reconciliation and multi-channel order routing.",
      },
    ],
  },
  { label: "How It Works", href: "/how-it-works" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Pricing", href: "/pricing" },
  { label: "About", href: "/about" },
];

export const HOW_IT_WORKS_STEPS: ProcessStep[] = [
  {
    step: 1,
    title: "Free Store Audit",
    summary:
      "We conduct a thorough diagnostic of your active stores, catalog indexing, advertising efficiency, and inventory health.",
    details: [
      "Catalog & SEO indexing audit to identify missed keyword traffic and buy box suppression.",
      "Advertising review to isolate wasted ad spend, negative keyword leakage, and TACoS efficiency.",
      "Account health & policy check to verify standing against platform requirements.",
      "Deliverable: A transparent diagnostic report with immediate operational fixes and growth opportunities.",
    ],
  },
  {
    step: 2,
    title: "Growth Strategy & Roadmap",
    summary:
      "We build a custom 90-day multi-channel roadmap aligned with your margins, inventory capital, and growth targets.",
    details: [
      "Channel prioritization based on category demand across Amazon, TikTok Shop, Walmart, and eBay.",
      "Margin analysis to ensure advertising and marketplace fee structures support profitability.",
      "Operational calendar outlining product launches, seasonal promotions, and inventory shipment dates.",
    ],
  },
  {
    step: 3,
    title: "Store & Catalog Optimization",
    summary:
      "Our team reconstructs product listings, creative assets, backend search parameters, and storefront architecture.",
    details: [
      "Title, bullet, and description rewrite adhering to marketplace-specific character weights.",
      "High-converting A+ Content, Brand Story, and TikTok showcase layout optimization.",
      "Backend search terms, attributes, and category leaf-node corrections for maximum algorithmic visibility.",
    ],
  },
  {
    step: 4,
    title: "Ongoing Day-to-Day Management",
    summary:
      "We assume full operational responsibility for daily store maintenance, orders, inventory, and customer inquiries.",
    details: [
      "Daily account health and policy surveillance to safeguard seller privileges.",
      "FBA, WFS, and 3PL inbound shipment planning and stranded inventory reconciliation.",
      "Rapid resolution of buyer messages, return authorizations, and dispute claims within strict SLAs.",
    ],
  },
  {
    step: 5,
    title: "Scale & Marketplace Expansion",
    summary:
      "We aggressively scale advertising, expand onto secondary marketplaces, and syndicate brand catalog reach.",
    details: [
      "Expansion from Amazon into TikTok Shop, Walmart Marketplace, and eBay without channel conflict.",
      "TikTok creator affiliate outreach and sample distribution management for viral velocity.",
      "Bi-weekly data reviews with full visibility into blended gross revenue, margins, and next-quarter targets.",
    ],
  },
];

export const FAQS: FAQItem[] = [
  {
    id: "faq-1",
    question:
      "Will granting your team access put our seller privileges or banking credentials at risk?",
    answer:
      "// TODO: client to approve final copy\nNever. We never ask for your primary root credentials or banking access. You invite our California operations leads as secondary users with strict, least-privilege permissions (catalog editing, ad management, and messaging). Every action taken on your account is fully logged in your seller portal audit trail, and our team conducts daily health surveillance to catch policy notices before they escalate.",
    isPlaceholder: true,
  },
  {
    id: "faq-2",
    question:
      "How do you prevent stockouts and overselling across multiple marketplace channels?",
    answer:
      "// TODO: client to approve final copy\nStockouts penalize your algorithmic ranking severely. We establish automated safety stock thresholds and track inbound FBA and WFS shipment statuses, 3PL inventory transfers, and daily sales velocity. When inventory gets low, we dynamically throttle ad spend on low-margin keywords and reallocate units across channels to protect your Buy Box status.",
    isPlaceholder: true,
  },
  {
    id: "faq-3",
    question:
      "Why do you charge a flat monthly retainer instead of taking a percentage of our revenue?",
    answer:
      "// TODO: client to approve final copy\nTraditional revenue-share agencies have conflicting incentives: they pump excessive, unprofitable ad spend to artificially inflate gross sales while your net margin gets destroyed. Our flat monthly retainers align our incentives with your profitability. As your store doubles or 5x in revenue, our fee stays the same — you keep 100% of your margin.",
    isPlaceholder: true,
  },
  {
    id: "faq-4",
    question:
      "What happens when an urgent listing suppression or IP policy warning hits on a weekend?",
    answer:
      "// TODO: client to approve final copy\nMarketplace algorithms don't pause on weekends. We maintain continuous 24/7 API monitoring for sudden Buy Box losses, stranded inventory, and performance alerts. When an urgent issue strikes, our senior operations leads intervene within strict SLA timeframes to prepare formal Plans of Action (POAs) and liaise with platform seller support for rapid reinstatement.",
    isPlaceholder: true,
  },
  {
    id: "faq-5",
    question:
      "How much of my own time will this take once your team assumes daily operations?",
    answer:
      "// TODO: client to approve final copy\nOur primary objective is returning 15 to 20 hours to your weekly schedule. We handle customer service messages, review escalations, FBA inbound planning, keyword bid optimization, and catalog hygiene completely autonomously. All we require from you is a bi-weekly 30-minute strategic review and approvals on new manufacturing runs or product launches.",
    isPlaceholder: true,
  },
  {
    id: "faq-6",
    question:
      "Can we start with our primary marketplace (like Amazon) and expand into other channels later?",
    answer:
      "// TODO: client to approve final copy\nYes. Over 60% of our partners begin on their primary channel (typically Amazon or Shopify). Once we stabilize catalog hygiene, reduce wasted PPC spend, and build a predictable operating cadence, we construct a 90-day expansion playbook to syndicate your listings into TikTok Shop, Walmart, and eBay without causing channel pricing conflict.",
    isPlaceholder: true,
  },
  {
    id: "faq-7",
    question:
      "How do you prevent price wars and MAP violations across Amazon, TikTok Shop, and Walmart?",
    answer:
      "// TODO: client to approve final copy\nWe centralize pricing parity controls across all channels. We monitor unauthorized 3PL resellers and price scrapers who undercut your Minimum Advertised Price (MAP), causing Amazon Buy Box suppression. We submit formal brand protection notifications and harmonize promotional calendars so you never trigger algorithmic price penalties.",
    isPlaceholder: true,
  },
  {
    id: "faq-8",
    question:
      "Do you write marketplace-compliant copy, create A+ Content, and design storefront assets?",
    answer:
      "// TODO: client to approve final copy\nYes. Our copywriters and designers reconstruct product titles, bullet points, and backend search terms to adhere strictly to marketplace character weight rules and mobile conversion best practices. We build high-converting A+ Content, Brand Story modules, and TikTok showcase layouts using your existing photography and brand guidelines.",
    isPlaceholder: true,
  },
  {
    id: "faq-9",
    question:
      "How does your team manage advertising and PPC to prevent ad spend leakage?",
    answer:
      "// TODO: client to approve final copy\nWe don't rely on generic auto-pilot bidding tools that waste ad dollars. We manage Amazon Sponsored Products, Brands, and Display, Walmart Connect, and TikTok Spark Ads with strict Total Advertising Cost of Sale (TACoS) guardrails. We isolate negative keywords, prune non-converting search queries weekly, and allocate spend exclusively to high-margin SKUs.",
    isPlaceholder: true,
  },
  {
    id: "faq-10",
    question:
      "What does the Free Store Audit include, and what commitment is required?",
    answer:
      "// TODO: client to approve final copy\nOur diagnostic is a comprehensive forensic review of your active catalog, Buy Box retention, keyword search indexation, advertising TACoS, and account health standing. You receive a clear, actionable diagnostic report outlining immediate profit leaks and growth vectors with zero sales pressure and zero obligation to hire us.",
    isPlaceholder: true,
  },
  {
    id: "faq-11",
    question:
      "How fast can your team onboard and take over day-to-day operations?",
    answer:
      "// TODO: client to approve final copy\nOnboarding is completed within 5 to 7 business days. Once secondary user permissions are granted, we conduct an initial catalog reconciliation, establish custom customer response templates, map your 3PL or FBA workflows, and assume active daily management without causing a single minute of sales interruption.",
    isPlaceholder: true,
  },
  {
    id: "faq-12",
    question:
      "How does monthly billing work, and what notice is needed if we ever need to pause?",
    answer:
      "// TODO: client to approve final copy\nWe operate on straightforward month-to-month retainers with zero multi-month or annual lock-ins. Invoices are billed at the start of each 30-day operational cycle. If your supply chain pauses or business needs change, you can pause or cancel at any time with a simple 30-day written notice.",
    isPlaceholder: true,
  },
];

export const PRICING_TIERS: PricingTier[] = [
  {
    id: "launch",
    name: "Launch",
    price: "$799",
    period: "per month",
    positioning:
      "For businesses starting with professional marketplace management",
    featuresPlaceholder: [
      "Single primary marketplace management (Amazon, TikTok Shop, or Shopify)",
      "Listing optimization and catalog hygiene (up to 25 active SKUs)",
      "Basic advertising oversight and keyword bidding adjustments",
      "Account health and policy compliance monitoring",
      "Standard customer inquiry management (24-hour SLA)",
      "Monthly performance and sales reporting summary",
    ],
    ctaText: "Book a Free Store Audit",
    ctaHref: "/contact",
  },
  {
    id: "growth",
    name: "Growth",
    price: "$1,499",
    period: "per month",
    positioning: "For established businesses looking to scale operations",
    popular: true,
    featuresPlaceholder: [
      "Dual marketplace management (e.g., Amazon + TikTok Shop or Walmart)",
      "Comprehensive catalog management & A+ / enhanced brand content (up to 75 SKUs)",
      "Active PPC management (Sponsored Products, Brands, Display, & Spark Ads)",
      "Inventory replenishment alerts & FBA/WFS inbound shipment coordination",
      "Priority customer service & dispute handling (12-hour SLA)",
      "Bi-weekly strategic reviews & real-time operational dashboard access",
    ],
    ctaText: "Book a Free Store Audit",
    ctaHref: "/contact",
  },
  {
    id: "scale",
    name: "Scale",
    price: "$2,999",
    period: "per month",
    positioning:
      "For businesses requiring broader marketplace management and growth support",
    featuresPlaceholder: [
      "Full multi-marketplace orchestration (Amazon, TikTok Shop, eBay, Shopify, Walmart)",
      "Unlimited catalog SKU maintenance & rapid product launch playbook",
      "Advanced advertising portfolio management & external creator campaign coordination",
      "Holistic supply chain forecasting & multi-warehouse inventory balancing",
      "Dedicated senior operations lead & direct Slack channel access",
      "Weekly executive reviews & competitor category market share analysis",
    ],
    ctaText: "Book a Free Store Audit",
    ctaHref: "/contact",
  },
];
