export interface CaseStudyMetric {
  value: string;
  label: string;
  subtext?: string;
  iconType: "chart" | "cart" | "package";
}

export interface CaseStudyData {
  slug: string;
  clientName: string;
  websiteUrl: string;
  websiteDisplay: string;
  logoSrc: string;
  mockupSrc: string;
  tagline: string;
  heroTitle: string;
  heroSubtitle: string;
  industry: string;
  channels: string[];
  engagementDuration: string;
  metrics: CaseStudyMetric[];
  servicesProvided: string[];

  // 3-Column Info Panel
  overview: {
    clientOverview: {
      industry: string;
      businessModel: string;
      catalogScope: string;
    };
    challenge: {
      primaryBottleneck: string;
      adSpendIssue: string;
      operationalGap: string;
    };
    impact: {
      growthMetric: string;
      conversionMetric: string;
      managedCadence: string;
    };
  };

  // Editorial Story Sections
  theProblem: {
    title: string;
    description: string;
    bulletPoints: {
      title: string;
      detail: string;
    }[];
  };

  ourSolution: {
    title: string;
    description: string;
    actions: {
      title: string;
      detail: string;
    }[];
  };

  whyThisStrategy: {
    title: string;
    description: string;
    reasons: string[];
  };

  journeyTimeline: {
    phase: string;
    timeframe: string;
    title: string;
    description: string;
    deliverables: string[];
  }[];

  testimonial: {
    quote: string;
    author: string;
    role: string;
    company: string;
    rating: number;
  };

  conclusion: {
    summary: string;
    takeaways: string[];
  };
}

export const CASE_STUDIES: CaseStudyData[] = [
  {
    slug: "oud-store",
    clientName: "Oud Store",
    websiteUrl: "https://OudStore.com",
    websiteDisplay: "OudStore.com",
    logoSrc: "/logos/oudh.jpg",
    mockupSrc: "/images/case-study-1.webp",
    tagline: "Luxury Fragrances & Niche Perfumery",
    heroTitle: "Scaling Oud Store: Operational Overhaul & Multi-Channel Growth",
    heroSubtitle:
      "How we restructured product listings, defended Buy Box margins, and scaled revenue by 68% in 6 months across Shopify and Amazon.",
    industry: "Luxury Perfumes & Fragrances",
    channels: ["Shopify", "Amazon Seller Central", "TikTok Shop"],
    engagementDuration: "6 Months Ongoing",
    metrics: [
      {
        value: "+68%",
        label: "Revenue Growth",
        subtext: "(6 months)",
        iconType: "chart",
      },
      {
        value: "+42%",
        label: "Conversion Rate",
        subtext: "Post-reconstruction",
        iconType: "cart",
      },
      {
        value: "200+",
        label: "Products Optimized",
        subtext: "Parent-child SKUs",
        iconType: "package",
      },
    ],
    servicesProvided: [
      "Store Management (Shopify & Amazon)",
      "Marketplace Operations",
      "Product Listing Optimization",
      "Fulfillment Support",
      "Inventory & Order Management",
      "Ongoing E-Commerce Management",
    ],
    overview: {
      clientOverview: {
        industry: "Luxury Fragrances & Artisanal Oud",
        businessModel: "Direct-to-Consumer & Marketplace Retail",
        catalogScope: "200+ Complex Perfume Variations & Gift Sets",
      },
      challenge: {
        primaryBottleneck:
          "Suppressed listings and split parent-child variations on Amazon.",
        adSpendIssue:
          "Runaway TACoS with budget wasted on broad non-converting keywords.",
        operationalGap:
          "Fragmented inventory tracking between Shopify and Amazon FBA warehouses.",
      },
      impact: {
        growthMetric: "+68% Verified Revenue Growth",
        conversionMetric: "+42% Conversion Rate Lift",
        managedCadence: "Daily SLA & Bi-Weekly Margin Audits",
      },
    },
    theProblem: {
      title: "The Problem",
      description:
        "Oud Store operated a rapidly growing catalog of premium fragrances, but technical storefront debt and unmonitored listing errors capped their growth. Variations were fractured across multiple categories, diluting review counts and hurting organic rank.",
      bulletPoints: [
        {
          title: "Broken Parent-Child Variations",
          detail:
            "Over 40% of perfume size and concentration variants were detached into isolated orphan listings, confusing buyers and causing high bounce rates.",
        },
        {
          title: "Ad Spend Leakage & High TACoS",
          detail:
            "Sponsored ad campaigns were burning budget on generic keywords without negative match filtering, draining profit margins on flagship SKUs.",
        },
        {
          title: "Stranded Inventory & Warehouse Delays",
          detail:
            "Inventory stockouts occurred regularly during peak holiday seasons because FBA restock thresholds were not synchronized with Shopify orders.",
        },
      ],
    },
    ourSolution: {
      title: "Our Solution",
      description:
        "EcomAmigo assumed full operational control of Oud Store's channels. We initiated a forensic catalog reconstruction, revamped listing copy and A+ Content, and deployed disciplined inventory buffers.",
      actions: [
        {
          title: "Catalog Architecture Reconstruction",
          detail:
            "Re-anchored all 200+ SKUs into clean parent-child variation trees using flat-file uploads, immediately consolidating reviews and boosting conversion.",
        },
        {
          title: "Algorithmic SEO & A+ Content Refresh",
          detail:
            "Rewrote titles, bullet points, and backend search terms to maximize keyword indexation, while designing premium visual A+ Content matching the luxury brand identity.",
        },
        {
          title: "Inventory Velocity & Safety Stock Buffers",
          detail:
            "Established automated restock velocity trackers between Shopify and Amazon FBA warehouses to eliminate holiday stockouts completely.",
        },
        {
          title: "TACoS Guardrails & Ad Restructuring",
          detail:
            "Pruned non-converting search terms, implemented exact-match negative keywords, and reallocated spend toward high-margin hero fragrances.",
        },
      ],
    },
    whyThisStrategy: {
      title: "Why We Chose This Strategy",
      description:
        "In luxury fragrance retail, brand presentation and catalog integrity dictate conversion rates. Rather than attempting to discount prices or boost ad budgets blindly, we focused on operational foundations that compound profitability.",
      reasons: [
        "Consolidated reviews on parent listings immediately build buyer trust for premium price points ($120+).",
        "Disciplined FBA inbound planning avoids costly aged storage surcharges and protects Buy Box momentum.",
        "Targeted ad spend reallocation delivers higher return on ad spend without eroding net profit margins.",
      ],
    },
    journeyTimeline: [
      {
        phase: "Phase 01",
        timeframe: "Weeks 1–2",
        title: "Forensic Audit & Quick Fixes",
        description:
          "Conducted comprehensive diagnostic across Amazon Seller Central and Shopify, identifying 35 suppressed ASINs and $3.2k in wasted monthly negative keyword spend.",
        deliverables: [
          "Complete Buy Box & Fee Audit Report",
          "Catalog Variation Map",
          "Negative Keyword Exclusion List",
        ],
      },
      {
        phase: "Phase 02",
        timeframe: "Weeks 3–4",
        title: "Catalog & Variation Reconstruction",
        description:
          "Rebuilt flat files, unified orphan variations, and deployed high-converting A+ Content and Brand Story modules across active listings.",
        deliverables: [
          "Restructured Parent-Child Trees",
          "A+ Content Brand Story Launch",
          "Updated Backend Search Terms",
        ],
      },
      {
        phase: "Phase 03",
        timeframe: "Weeks 5–8",
        title: "PPC Optimization & Margin Defense",
        description:
          "Restructured Sponsored Products and Brand campaigns with strict margin controls, lowering blended TACoS from 24% to 14.8%.",
        deliverables: [
          "TACoS Efficiency Dashboard",
          "Dynamic Keyword Bidding Rules",
          "Promotional Event Calendar",
        ],
      },
      {
        phase: "Phase 04",
        timeframe: "Months 3–6",
        title: "Scaled Multi-Channel Velocity",
        description:
          "Expanded top-selling SKUs into TikTok Shop with creator affiliate sample distribution, sustaining 68% top-line revenue growth.",
        deliverables: [
          "TikTok Shop Catalog Integration",
          "Bi-Weekly Margin & SLA Reports",
          "Continuous 24/7 Account Defense",
        ],
      },
    ],
    testimonial: {
      quote:
        "EcomAmigo completely turned our marketplace operations around. Before them, our Amazon listings were constantly suppressed and ad spend was eating our profits. Now our catalog is pristine, our sales are up 68%, and we actually have time to focus on product formulation.",
      author: "Verified Store Owner",
      role: "Founder & Creative Director",
      company: "Oud Store",
      rating: 5,
    },
    conclusion: {
      summary:
        "By addressing the fundamental operational bottlenecks — variation trees, listing compliance, FBA stock buffers, and ad hygiene — Oud Store unlocked substantial incremental revenue without increasing customer acquisition costs.",
      takeaways: [
        "Consolidating 200+ product listings increased overall store conversion rate by 42%.",
        "Disciplined ad management lowered TACoS by nearly 10 percentage points.",
        "Zero listing suppressions or account health alerts maintained throughout the engagement.",
      ],
    },
  },
  {
    slug: "thai-organic",
    clientName: "Thai Organic",
    websiteUrl: "https://thai-organics.com",
    websiteDisplay: "ThaiOrganic.com",
    logoSrc: "/logos/organic.png",
    mockupSrc: "/images/case-study-2.webp",
    tagline: "Pure, Natural Skincare & Wellness from Thailand",
    heroTitle:
      "Scaling Thai Organic: Storefront Overhaul & Multi-Platform Growth",
    heroSubtitle:
      "How we helped Thai Organic streamline product listings, scale across marketplaces, and achieve +120% online sales growth over 12 months.",
    industry: "Organic Skincare & Herbal Wellness",
    channels: ["Shopify", "Amazon", "Walmart Marketplace"],
    engagementDuration: "12 Months Ongoing",
    metrics: [
      {
        value: "+120%",
        label: "Online Sales",
        subtext: "(12 months)",
        iconType: "chart",
      },
      {
        value: "+55%",
        label: "Conversion Rate",
        subtext: "Storewide lift",
        iconType: "cart",
      },
      {
        value: "150+",
        label: "Product Listings",
        subtext: "Optimized & syndicated",
        iconType: "package",
      },
    ],
    servicesProvided: [
      "Shopify Store Management",
      "Marketplace Integration",
      "Product Listing & SEO Optimization",
      "Promotional Campaign Support",
      "Inventory & Order Management",
      "Ongoing E-Commerce Operations",
    ],
    overview: {
      clientOverview: {
        industry: "Organic Cosmetics, Skincare & Herbal Oils",
        businessModel: "Omnichannel DTC & Marketplace Syndication",
        catalogScope: "150+ Certified Organic Skincare SKUs",
      },
      challenge: {
        primaryBottleneck:
          "Low organic search visibility and outdated listing creative on Shopify and Amazon.",
        adSpendIssue:
          "Unprofitable ad click spend with weak product differentiation in search results.",
        operationalGap:
          "Manual multi-channel inventory updates causing occasional overselling and fulfillment delays.",
      },
      impact: {
        growthMetric: "+120% Annual Online Sales",
        conversionMetric: "+55% Storewide Conversion Lift",
        managedCadence: "Full Store Ops & Daily Fulfillment Monitoring",
      },
    },
    theProblem: {
      title: "The Problem",
      description:
        "Thai Organic formulated exceptional botanical skincare products, but their online store suffered from low search ranking, generic listing copy, and inconsistent customer journey touchpoints across platforms.",
      bulletPoints: [
        {
          title: "Weak Algorithmic Search Visibility",
          detail:
            "Product titles and descriptions lacked essential category keywords and ingredient metadata, leaving them invisible for high-intent organic searches.",
        },
        {
          title: "Low Listing Conversion & Visual Bounce",
          detail:
            "Product pages lacked standardized benefit-driven imagery, ingredient transparency callouts, and clean mobile responsive architecture.",
        },
        {
          title: "Multi-Platform Inventory Sync Gaps",
          detail:
            "Orders on Shopify were not automatically updating Amazon inventory feeds, resulting in order cancellations and policy metric dings.",
        },
      ],
    },
    ourSolution: {
      title: "Our Solution",
      description:
        "EcomAmigo restructured Thai Organic's entire digital catalog footprint. We rewrote listing copy, created conversion-focused visual assets, and implemented synchronized order and inventory routing.",
      actions: [
        {
          title: "Complete Listing & SEO Overhaul",
          detail:
            "Rewrote and keyword-optimized all 150+ product listings, highlighting USDA organic certifications, ingredient purity, and customer usage benefits.",
        },
        {
          title: "Visual Merchandising & Storefront Optimization",
          detail:
            "Designed high-converting lifestyle imagery, comparative infographics, and clear mobile-first storefront navigation on Shopify and Amazon Brand Stores.",
        },
        {
          title: "Centralized Multi-Channel Inventory Routing",
          detail:
            "Connected multi-channel order feeds with safety stock alerts, ensuring live inventory parity between Shopify and marketplace channels.",
        },
        {
          title: "Targeted Promotional Campaigns",
          detail:
            "Structured seasonal promotional campaigns and bundle deals (skincare routines, daily cleansers, body oils) that substantially lifted Average Order Value (AOV).",
        },
      ],
    },
    whyThisStrategy: {
      title: "Why We Chose This Strategy",
      description:
        "Organic wellness consumers demand radical transparency, clean visuals, and clear routine recommendations. Our strategy centered on elevating product education and operational reliability.",
      reasons: [
        "Educated consumers who understand botanical ingredients convert at a 55% higher rate.",
        "Synchronized multi-channel inventory prevents stockout penalties and preserves algorithmic ranking.",
        "Routine-based product bundles drove immediate expansion in cart size and customer lifetime value.",
      ],
    },
    journeyTimeline: [
      {
        phase: "Phase 01",
        timeframe: "Months 1–2",
        title: "Storefront & Catalog Diagnostics",
        description:
          "Audited full 150-SKU catalog, fixed missing compliance tags, and mapped target search terms across competitive organic skincare categories.",
        deliverables: [
          "Catalog Diagnostic Audit",
          "Competitor Keyword Benchmark",
          "Ingredient Compliance Checklist",
        ],
      },
      {
        phase: "Phase 02",
        timeframe: "Months 3–5",
        title: "Listing Rewrites & Creative Rollout",
        description:
          "Rewrote all product descriptions, published enhanced brand graphics, and standardized mobile product pages across Shopify and Amazon.",
        deliverables: [
          "150+ Optimized Product Listings",
          "Brand Story & Infographic Assets",
          "Mobile UX Layout Enhancements",
        ],
      },
      {
        phase: "Phase 03",
        timeframe: "Months 6–8",
        title: "Omnichannel Inventory Integration",
        description:
          "Deployed automated inventory sync and order routing, eliminating stockouts and enabling next-day fulfillment readiness.",
        deliverables: [
          "Multi-Channel Order Routing Sync",
          "Automated Low-Stock Thresholds",
          "Fulfillment SLA Dashboard",
        ],
      },
      {
        phase: "Phase 04",
        timeframe: "Months 9–12",
        title: "Expansion & Retargeting Campaigns",
        description:
          "Scaled targeted promotional bundles and expanded verified catalog listings onto Walmart Marketplace, doubling annual sales volume.",
        deliverables: [
          "Walmart Marketplace Integration",
          "Curated Bundle Architecture",
          "+120% Annual Sales Growth Achievement",
        ],
      },
    ],
    testimonial: {
      quote:
        "Working with EcomAmigo gave us the dedicated operational team we needed without having to hire in-house. They completely rebuilt our product pages, solved our inventory sync headaches, and our sales grew by 120% this past year. Truly indispensable partners.",
      author: "Operations Lead",
      role: "Head of E-Commerce",
      company: "Thai Organic",
      rating: 5,
    },
    conclusion: {
      summary:
        "Through systematic listing optimization, multi-channel inventory routing, and routine bundling, Thai Organic expanded into an omnichannel category leader with sustainable, profitable growth.",
      takeaways: [
        "Over 150 organic product listings rewritten, resulting in a +55% conversion rate lift.",
        "Full 120% annual sales increase achieved while protecting healthy profit margins.",
        "Seamless inventory synchronization achieved across Shopify, Amazon, and Walmart.",
      ],
    },
  },
];

export function getAllCaseStudies(): CaseStudyData[] {
  return CASE_STUDIES;
}

export function getCaseStudyBySlug(slug: string): CaseStudyData | undefined {
  return CASE_STUDIES.find((cs) => cs.slug === slug);
}
