export interface ServiceMetric {
  label: string;
  value: string;
  description: string;
  iconName:
    | "TrendingUp"
    | "Target"
    | "Layers"
    | "ShieldCheck"
    | "BarChart3"
    | "Zap";
}

export interface ServicePillar {
  title: string;
  tagline: string;
  description: string;
  bullets: string[];
}

export interface ServiceProcessStep {
  phase: string;
  title: string;
  timeline: string;
  description: string;
  deliverables: string[];
}

export interface ServiceData {
  id: string;
  slug: string;
  name: string;
  shortName: string;
  badge: string;
  category: string;
  heroTitle: string;
  heroSubtitle: string;
  imageSrc: string;
  imageAlt: string;
  stats: ServiceMetric[];
  overview: {
    channelScope: {
      headline: string;
      items: string[];
    };
    painPointsSolved: {
      headline: string;
      items: string[];
    };
    businessImpact: {
      headline: string;
      items: string[];
    };
  };
  narrative: {
    challengeSection: {
      title: string;
      subtitle: string;
      cards: {
        title: string;
        description: string;
        impact: string;
      }[];
    };
    solutionSection: {
      title: string;
      subtitle: string;
      pillars: ServicePillar[];
    };
    whyEcomAmigo: {
      title: string;
      subtitle: string;
      reasons: {
        title: string;
        description: string;
      }[];
    };
    roadmap: {
      title: string;
      subtitle: string;
      steps: ServiceProcessStep[];
    };
    techStack: {
      title: string;
      tools: {
        name: string;
        purpose: string;
      }[];
    };
    faqs: {
      question: string;
      answer: string;
    }[];
  };
  recommendedTier: {
    name: string;
    price: string;
    period: string;
    ctaHref: string;
    ctaText: string;
  };
  relatedCaseStudy?: {
    slug: string;
    clientName: string;
    stat: string;
  };
}

export const SERVICES_DATA: ServiceData[] = [
  {
    id: "amazon-store-management",
    slug: "amazon-store-management",
    name: "Amazon Store Management",
    shortName: "Amazon Operations",
    badge: "Primary Marketplace • FBA & FBM",
    category: "Full Marketplace Management",
    heroTitle: "Full-Funnel Amazon Seller Central & FBA Operations",
    heroSubtitle:
      "We assume complete operational responsibility for your Amazon channel: COSMO/A9 search indexing, Buy Box defense, TACoS-controlled Sponsored Ads, and FBA restock forecasting.",
    imageSrc: "/images/services/amazon-store-management.webp",
    imageAlt: "Amazon Seller Central Analytics and Revenue Dashboard",
    stats: [
      {
        label: "Organic Traffic Growth",
        value: "+145%",
        description:
          "Average organic keyword indexation growth in first 90 days",
        iconName: "TrendingUp",
      },
      {
        label: "Target TACoS Range",
        value: "12 - 16%",
        description:
          "Strict blended ad spend guardrails protecting product margins",
        iconName: "Target",
      },
      {
        label: "Buy Box Win Rate",
        value: "99.4%",
        description:
          "Autonomous repricing rules & continuous unauthorized seller defense",
        iconName: "ShieldCheck",
      },
      {
        label: "FBA Order SLA",
        value: "100%",
        description:
          "Zero stockout penalties through predictive shipment scheduling",
        iconName: "Zap",
      },
    ],
    overview: {
      channelScope: {
        headline: "Channel Coverage",
        items: [
          "Amazon Seller Central (US, Canada, UK & EU marketplaces)",
          "Amazon Brand Registry, Storefront & A+ Content management",
          "FBA Restock Limits, AWD & 3PL Inbound coordination",
          "Vendor Central hybrid & Seller-Fulfilled Prime (SFP) support",
        ],
      },
      painPointsSolved: {
        headline: "Operational Roadblocks Solved",
        items: [
          "Suppressed ASINs and search de-indexation due to backend attribute mismatches",
          "Runaway PPC ad spend draining profit margins on non-converting search terms",
          "Unauthorized Buy Box hijackers and MAP violations undercutting retail prices",
          "Costly FBA stranded inventory and unexpected storage surcharge penalties",
        ],
      },
      businessImpact: {
        headline: "Direct Business Impact",
        items: [
          "Top-line sales expansion driven by high-intent organic keyword ranking",
          "Controlled TACoS ensuring predictable net margins across all SKUs",
          "Zero-stress operations reclaiming 15 to 20 weekly hours for brand executives",
          "Uncompromised account health metrics with 100% policy compliance",
        ],
      },
    },
    narrative: {
      challengeSection: {
        title: "The Friction of Scaling on Amazon",
        subtitle:
          "Managing an active Amazon storefront is no longer just listing products and running auto PPC. Between aggressive competitors, algorithm updates, and strict fulfillment requirements, operations require daily vigilance.",
        cards: [
          {
            title: "Algorithm Volatility & Search De-Indexation",
            description:
              "Amazon's COSMO and A9 algorithms continuously re-weight buyer intent, category nodes, and backend search terms. A single misconfigured attribute can instantly drop high-performing ASINs off page one.",
            impact:
              "Lost organic placement resulting in sudden 40-60% revenue drops.",
          },
          {
            title: "Uncontrolled PPC Bidding & Bleeding TACoS",
            description:
              "Auto-pilot bidding software and broad match campaigns frequently bid on high-cost, irrelevant keywords that eat into gross margins without driving repeat customers.",
            impact:
              "Advertising costs consuming 30%+ of revenue with dwindling net profits.",
          },
          {
            title: "FBA Restock Limits & Stranded Inventory",
            description:
              "Balancing supplier lead times against Amazon's dynamic capacity limits and aged inventory surcharges requires forensic demand forecasting and split inbound planning.",
            impact:
              "Stockout ranking resets and thousands of dollars in avoidable storage fees.",
          },
        ],
      },
      solutionSection: {
        title: "How EcomAmigo Manages Your Amazon Store",
        subtitle:
          "Our dedicated Amazon specialists handle every operational touchpoint with institutional rigor, data-backed decisions, and daily account surveillance.",
        pillars: [
          {
            title: "COSMO & A9 Keyword Indexation Architecture",
            tagline:
              "Algorithmic visibility engineered for commercial buyer intent.",
            description:
              "We perform deep reverse-ASIN competitor forensics to uncover high-volume, high-converting keyword roots. We restructure your titles, bullet points, backend search terms, and product attributes to maximize organic ranking weight.",
            bullets: [
              "Reverse-ASIN keyword harvesting across top 10 category competitors",
              "Backend search terms & leaf-node attribute calibration to prevent de-indexation",
              "Conversion-optimized copywriting adhering to Amazon style guidelines",
              "Custom A+ Content, Brand Story modules, and premium Storefront navigation",
            ],
          },
          {
            title: "Precision PPC Management & TACoS Defense",
            tagline:
              "Disciplined advertising that fuels organic rank without eroding margin.",
            description:
              "We reject automated set-and-forget bid software. Our team manages Sponsored Products, Sponsored Brands, and Sponsored Display with isolated exact match structures, daily negative harvesting, and strict TACoS targets.",
            bullets: [
              "Single-keyword ad groups (SKAGs) for top brand and category drivers",
              "Weekly negative keyword pruning to eliminate wasted ad spend immediately",
              "Competitor ASIN defense campaigns protecting your brand's PDP real estate",
              "Blended TACoS guardrails keeping advertising spend aligned with true SKU profitability",
            ],
          },
          {
            title: "FBA Restock Forecasting & Inbound Logistics",
            tagline:
              "Eliminate stockouts and eliminate excess storage surcharges.",
            description:
              "We calculate daily sales velocity, seasonality curves, and supplier transit times to generate weekly replenishment recommendations. We create inbound shipping plans and resolve stranded inventory alerts within hours.",
            bullets: [
              "Predictive inventory forecasting model accounting for lead time and sales spikes",
              "Full inbound shipment creation, barcode prep verification, and carrier booking",
              "Stranded inventory triage and FBA unfulfillable inventory reconciliation",
              "AWD (Amazon Warehousing & Distribution) hybrid buffer routing when needed",
            ],
          },
          {
            title: "24/7 Account Health & Buy Box Surveillance",
            tagline:
              "Uncompromising brand protection against hijackers and policy flags.",
            description:
              "We monitor your account health score, Voice of the Customer (VOC) ratings, and Buy Box ownership around the clock. We issue cease-and-desist notices to unauthorized sellers and submit Brand Registry IP violation claims.",
            bullets: [
              "Automated repricing rules engineered to defend Buy Box share against unauthorized sellers",
              "Brand Registry enforcement, counterfeit removals, and copyright/trademark filings",
              "Proactive Voice of the Customer monitoring to intercept NCX defects before ASIN deactivation",
              "Rapid resolution of buyer messages and A-to-z guarantee claims within 12-hour SLA",
            ],
          },
        ],
      },
      whyEcomAmigo: {
        title: "Why Brands Choose Our Amazon Team",
        subtitle:
          "We operate as an embedded operational partner, not an arms-length agency relying on junior interns or black-box automations.",
        reasons: [
          {
            title: "Senior E-Commerce Operators",
            description:
              "Your account is managed directly by seasoned specialists who have operated 7- and 8-figure Amazon storefronts across competitive consumer categories.",
          },
          {
            title: "No Long-Term Contracts",
            description:
              "We operate on straightforward month-to-month retainers. We earn your partnership through transparent performance and weekly operational deliverables.",
          },
          {
            title: "Direct Slack Collaboration",
            description:
              "Never wait days for email support. Our team communicates in real-time in your dedicated Slack channel alongside bi-weekly executive video strategy sessions.",
          },
          {
            title: "Holistic Margin Focus",
            description:
              "We measure success in net operating profit, not vanity top-line GMV. Every ad dollar, coupon, and restock plan is evaluated against your bottom line.",
          },
        ],
      },
      roadmap: {
        title: "Our 4-Phase Amazon Onboarding & Execution",
        subtitle:
          "From diagnostic intake to scaled profitability, here is our proven 60-day operational roadmap.",
        steps: [
          {
            phase: "Phase 1",
            title: "Forensic Audit & Account Stabilization",
            timeline: "Days 1 – 7",
            description:
              "We conduct a 50-point inspection of your Seller Central account, isolate suppressed ASINs, pause bleeding PPC campaigns, and resolve outstanding account health alerts.",
            deliverables: [
              "Comprehensive Amazon health audit report",
              "Immediate negative keyword pruning list",
              "Suppressed listing diagnostic & fix plan",
              "Secondary user permission onboarding",
            ],
          },
          {
            phase: "Phase 2",
            title: "Catalog Reconstruction & SEO Indexing",
            timeline: "Days 8 – 21",
            description:
              "We rewrite copy for priority ASINs, rebuild backend search terms, update category classification nodes, and design high-converting A+ Content.",
            deliverables: [
              "Optimized titles, bullets, and backend terms for priority SKUs",
              "A+ Content and Brand Story design layout",
              "Competitor price & Buy Box baseline matrix",
              "Voice of the Customer (VOC) sentiment breakdown",
            ],
          },
          {
            phase: "Phase 3",
            title: "PPC Restructuring & Bidding Migration",
            timeline: "Days 22 – 35",
            description:
              "We migrate ad campaigns into structured auto, broad, and exact match funnels with strict negative bid exclusions and TACoS targets.",
            deliverables: [
              "Restructured Sponsored Products campaign architecture",
              "Sponsored Brands video and headline search assets",
              "Target TACoS calibration per SKU margin tier",
              "Competitor ASIN defense campaign deployment",
            ],
          },
          {
            phase: "Phase 4",
            title: "Scaled Velocity & Autonomous Management",
            timeline: "Day 36 Onward",
            description:
              "We assume daily operational oversight: monitoring inventory levels, adjusting bids, resolving customer inquiries, and conducting bi-weekly strategic reviews.",
            deliverables: [
              "Weekly FBA inventory replenishment forecasts",
              "Daily account health and customer inquiry management",
              "Bi-weekly executive KPI and revenue reports",
              "Ongoing seasonal promotional planning",
            ],
          },
        ],
      },
      techStack: {
        title: "Tools & Analytics We Deploy",
        tools: [
          {
            name: "Amazon Seller Central",
            purpose:
              "Core store administration, inventory, and order fulfillment",
          },
          {
            name: "Amazon Brand Analytics",
            purpose:
              "First-party search query performance and market share tracking",
          },
          {
            name: "Helium 10 & DataDive",
            purpose: "Deep reverse-ASIN keyword research and rank tracking",
          },
          {
            name: "Sellerboard",
            purpose:
              "Real-time net profit accounting and margin reconciliation",
          },
          {
            name: "Keepa",
            purpose: "Historical Buy Box and competitor pricing analytics",
          },
        ],
      },
      faqs: [
        {
          question:
            "Do you require full admin access to our Seller Central account?",
          answer:
            "No. We only require secondary user permissions tailored specifically to catalog management, advertising, and inventory logistics. You retain complete administrative and financial ownership at all times.",
        },
        {
          question: "How do you handle our existing advertising campaigns?",
          answer:
            "We never delete your historical campaign data. We analyze historical search term reports to identify proven converters, prune non-converting negative keywords, and systematically migrate bids into our structured exact and broad match funnels.",
        },
        {
          question: "What happens if an ASIN gets suppressed or suspended?",
          answer:
            "Our team responds within hours. We identify the exact policy citation (e.g., attribute mismatch, image violation, or customer complaint), correct the backend metadata, and submit formal appeal cases with Amazon Seller Support until resolution.",
        },
        {
          question: "Can you help coordinate our inbound shipments to FBA?",
          answer:
            "Yes. We create the shipment plans directly in Seller Central, provide your warehouse or 3PL with the required box labels and pallet specifications, and track the inbound delivery until inventory is fully received by Amazon fulfillment centers.",
        },
      ],
    },
    recommendedTier: {
      name: "Launch or Growth Retainer",
      price: "$799 – $1,499",
      period: "per month",
      ctaHref: "/pricing",
      ctaText: "View Retainer Tiers",
    },
    relatedCaseStudy: {
      slug: "oud-store",
      clientName: "Oud Store",
      stat: "+240% Revenue Growth with 21.4% TACoS",
    },
  },
  {
    id: "tiktok-shop-operations",
    slug: "tiktok-shop-operations",
    name: "TikTok Shop Operations",
    shortName: "TikTok Operations",
    badge: "Social Commerce • Affiliate GMV",
    category: "Social Commerce & Creators",
    heroTitle: "End-to-End TikTok Shop Operations & Creator Affiliate Scaling",
    heroSubtitle:
      "Turn short-form content into a predictable revenue channel. We manage your TikTok Shop Seller Center, creator affiliate outreach pipeline, sample distribution, and live shopping strategy.",
    imageSrc: "/images/services/tiktok-shop-operations.webp",
    imageAlt: "TikTok Shop Seller Center Creator Affiliate Dashboard",
    stats: [
      {
        label: "Creator GMV Growth",
        value: "3.4x",
        description:
          "Average affiliate revenue expansion across brand partners",
        iconName: "TrendingUp",
      },
      {
        label: "Creator Pipeline",
        value: "850+",
        description:
          "Active creator collaborations initiated and tracked monthly",
        iconName: "Target",
      },
      {
        label: "On-Time Fulfillment SLA",
        value: "99.8%",
        description:
          "Fast dispatch safeguarding TikTok Shop Seller Health Score",
        iconName: "Zap",
      },
      {
        label: "Late Dispatch Rate",
        value: "<1.2%",
        description: "Strict compliance avoiding TikTok algorithm penalties",
        iconName: "ShieldCheck",
      },
    ],
    overview: {
      channelScope: {
        headline: "Channel Coverage",
        items: [
          "TikTok Shop US Seller Center configuration & operational management",
          "Creator Affiliate Open & Target Collaboration campaign orchestration",
          "Sample request evaluation, approvals, and 3PL dispatch tracking",
          "TikTok Spark Ads boosting for high-performing creator UGC videos",
        ],
      },
      painPointsSolved: {
        headline: "Operational Roadblocks Solved",
        items: [
          "Overwhelming creator DM outreach and high drop-off without video delivery",
          "Risk of account restrictions due to late dispatch (>2 business days SLA)",
          "Lack of catalog synchronization leading to out-of-stock viral orders",
          "Low affiliate response rates without professional commission structures",
        ],
      },
      businessImpact: {
        headline: "Direct Business Impact",
        items: [
          "Scalable social commerce GMV independent of traditional paid ad reliance",
          "Continuous library of high-converting user-generated video content",
          "Flawless Seller Performance Rating unlocking TikTok platform subsidies",
          "Direct product exposure to millions of mobile-first demographic buyers",
        ],
      },
    },
    narrative: {
      challengeSection: {
        title: "The Reality of Scaling on TikTok Shop",
        subtitle:
          "TikTok Shop is the highest-velocity growth channel in e-commerce, but its strict seller performance metrics and high-volume creator ecosystem break traditional agency models.",
        cards: [
          {
            title: "Creator Management Overhead",
            description:
              "Finding vetted creators, negotiating commissions, shipping product samples, and following up on video posting deadlines requires dozens of hours of manual coordination every single week.",
            impact:
              "Samples sent into the void with zero video deliverables or ROI.",
          },
          {
            title: "Unforgiving 48-Hour Dispatch SLAs",
            description:
              "TikTok Shop penalizes delayed tracking uploads severely. A late dispatch rate above 4% results in frozen product showcases, reduced algorithm impressions, or total account suspension.",
            impact:
              "Algorithm throttles that kill product momentum in under 24 hours.",
          },
          {
            title: "Managing Sudden Viral Demand",
            description:
              "When an affiliate video takes off, orders can spike from 20 per day to 1,500 overnight. Without real-time 3PL communication and stock reserves, brands risk massive stockouts.",
            impact:
              "Out-of-stock listings and missed six-figure revenue opportunities.",
          },
        ],
      },
      solutionSection: {
        title: "How We Turn TikTok Shop Into a Growth Engine",
        subtitle:
          "We build a systematized operational engine covering creator recruitment, sample logistics, product merchandising, and Seller Center compliance.",
        pillars: [
          {
            title: "Systematized Creator Affiliate Outreach",
            tagline:
              "A predictable pipeline connecting your products with high-impact creators.",
            description:
              "We leverage creator intelligence databases to identify niche influencers with proven sales conversion history. We manage open plans, target collaboration invites, and sample vetting.",
            bullets: [
              "Daily targeted outreach to creators with verified GMV and high engagement",
              "Automated sample vetting criteria to ensure samples only go to active creators",
              "Rigorous sample dispatch tracking with automated posting deadline reminders",
              "Negotiated commission tiers and performance bonuses for top performers",
            ],
          },
          {
            title: "Seller Center Merchandising & Showcase Optimization",
            tagline:
              "Mobile-first listings designed for instant checkout within TikTok.",
            description:
              "We optimize your TikTok Shop catalog with clear mobile visual cards, compelling bundle offers, flash deals, and seamless checkout attributes that maximize in-app conversion.",
            bullets: [
              "Mobile-first product image cards highlighting key features in 3 seconds",
              "Creation of high-margin bundle listings and attractive promotional flash deals",
              "Integration of TikTok Shop platform promotional campaigns and shipping subsidies",
              "Category taxonomy and attribute validation to prevent listing rejections",
            ],
          },
          {
            title: "Fulfillment & SLA Compliance Engineering",
            tagline:
              "Protect your shop rating with guaranteed 48-hour order fulfillment.",
            description:
              "We link your TikTok Shop directly with your 3PL or warehouse management system to ensure same-day or next-day shipping. We track carrier scans daily to guarantee zero SLA breaches.",
            bullets: [
              "Direct API integration between TikTok Shop Seller Center and your warehouse",
              "Daily order flow monitoring to identify and resolve delayed shipments",
              "Automated customer messaging for delivery tracking updates and review requests",
              "Management of returns, refunds, and dispute claims within strict policy windows",
            ],
          },
          {
            title: "Paid Spark Ads & Creator Video Amplification",
            tagline:
              "Scale what works by turning organic viral videos into paid ad winners.",
            description:
              "When an affiliate video generates organic sales momentum, we obtain Spark Ad authorization codes and deploy targeted ad spend behind the video to scale customer acquisition.",
            bullets: [
              "Spark Ads code collection from top-performing affiliate creators",
              "Audience targeting and budget scaling across high-converting creative hooks",
              "Continuous ROAS tracking ensuring ad spend remains accretive to net margins",
              "Creator whitelisting and content licensing coordination for brand channels",
            ],
          },
        ],
      },
      whyEcomAmigo: {
        title: "Why Partner With EcomAmigo on TikTok",
        subtitle:
          "We understand the intersection of viral short-form social dynamics and strict e-commerce supply chain execution.",
        reasons: [
          {
            title: "Proven Affiliate Engine",
            description:
              "We have active relationships with hundreds of high-performing TikTok creators across beauty, fragrance, lifestyle, and wellness categories.",
          },
          {
            title: "SLA Protection Obsession",
            description:
              "We treat TikTok's late dispatch rate and seller rating metrics with zero tolerance to ensure your store always maintains peak algorithmic favor.",
          },
          {
            title: "Content & Logistics Synergy",
            description:
              "Unlike creative-only agencies, we coordinate inventory stock levels and 3PL routing directly so your products never go out of stock during a viral surge.",
          },
          {
            title: "Transparent Commission Tracking",
            description:
              "We provide crystal-clear reporting on sample costs, affiliate commissions paid, Spark Ad spend, and true net margin per product line.",
          },
        ],
      },
      roadmap: {
        title: "The 60-Day TikTok Shop Launch & Scale Roadmap",
        subtitle:
          "How we build, launch, and scale your social commerce presence from day one.",
        steps: [
          {
            phase: "Phase 1",
            title: "Store Setup & Catalog Onboarding",
            timeline: "Weeks 1 – 2",
            description:
              "We configure your Seller Center account, link banking and tax credentials, synchronize active product listings, and test 3PL order routing.",
            deliverables: [
              "Fully verified TikTok Shop Seller Center setup",
              "Mobile-optimized product listings and bundle showcases",
              "Warehouse API integration and test order fulfillment",
              "Base affiliate commission structure and open plans",
            ],
          },
          {
            phase: "Phase 2",
            title: "Creator Recruitment & Sample Seeding",
            timeline: "Weeks 3 – 4",
            description:
              "We launch targeted creator outreach, screen sample applications, ship initial product seeding batches, and provide creators with content briefs.",
            deliverables: [
              "Outreach to 300+ category-relevant creators",
              "First 50 product samples shipped to vetted affiliates",
              "Creator tracking CRM with video deliverable deadlines",
              "Creative inspiration and brand compliance guide",
            ],
          },
          {
            phase: "Phase 3",
            title: "Content Flow & Spark Ads Deployment",
            timeline: "Weeks 5 – 6",
            description:
              "Creator videos go live. We monitor initial conversion metrics, harvest Spark Ad authorization codes, and amplify top-converting video assets.",
            deliverables: [
              "First batch of 30+ organic creator videos published",
              "Spark Ads campaign setup behind winning creator hooks",
              "Daily comment and customer inquiry triage",
              "Sample-to-GMV conversion analysis",
            ],
          },
          {
            phase: "Phase 4",
            title: "Evergreen Scaling & Live Shopping",
            timeline: "Week 7 Onward",
            description:
              "We scale the top affiliate partnerships with tiered bonuses, run scheduled flash sales, and coordinate weekly creator live shopping events.",
            deliverables: [
              "Ongoing monthly recruitment of 100+ new creators",
              "Bi-weekly affiliate GMV performance dashboards",
              "Live shopping strategy and promotional scheduling",
              "Continuous Seller Health Score maintenance",
            ],
          },
        ],
      },
      techStack: {
        title: "Platform Tools & Intelligence",
        tools: [
          {
            name: "TikTok Shop Seller Center",
            purpose:
              "Catalog management, order fulfillment, and policy compliance",
          },
          {
            name: "FastMoss & Kalodata",
            purpose:
              "Creator analytics, trending product intelligence, and competitor sales tracking",
          },
          {
            name: "Creator CRM",
            purpose:
              "Automated affiliate outreach, sample tracking, and deadline follow-ups",
          },
          {
            name: "ShipStation / 3PL API",
            purpose:
              "Automated same-day order routing and tracking number synchronization",
          },
        ],
      },
      faqs: [
        {
          question:
            "Do we have to create our own TikTok videos to sell on TikTok Shop?",
          answer:
            "No. While brand-owned content is beneficial, the primary growth driver on TikTok Shop is the Creator Affiliate Network. We recruit independent creators who create authentic UGC videos featuring your product in exchange for samples and sales commissions.",
        },
        {
          question:
            "How do we prevent creators from receiving free samples and never posting?",
          answer:
            "We employ strict screening criteria using creator intelligence tools (minimum engagement rates, previous sales history, and verification of past video posts). We also automate follow-ups and hold creators accountable to their agreed posting deadlines.",
        },
        {
          question:
            "How does fulfillment work with our existing warehouse or 3PL?",
          answer:
            "We connect TikTok Shop directly to your existing fulfillment system (ShipStation, Shopify, or warehouse ERP). When a customer buys on TikTok, the order routes automatically to your warehouse, and the tracking number flows back to TikTok within minutes.",
        },
        {
          question: "What are TikTok's platform fees and commissions?",
          answer:
            "TikTok Shop typically charges a platform referral fee (currently ~6% in the US, subject to category promotions). Creator affiliate commissions are set by you (typically 10-20% depending on product margins). We help model your margins to ensure profitable unit economics.",
        },
      ],
    },
    recommendedTier: {
      name: "Growth Retainer",
      price: "$1,499",
      period: "per month",
      ctaHref: "/pricing",
      ctaText: "View Retainer Tiers",
    },
    relatedCaseStudy: {
      slug: "oud-store",
      clientName: "Oud Store",
      stat: "Expanded onto TikTok Shop with creator affiliate engine",
    },
  },
  {
    id: "walmart-marketplace",
    slug: "walmart-marketplace",
    name: "Walmart Marketplace Management",
    shortName: "Walmart Operations",
    badge: "Fast-Growing Channel • WFS",
    category: "Retail Marketplace Expansion",
    heroTitle: "Walmart Marketplace Management & WFS Acceleration",
    heroSubtitle:
      "Expand into the US's fastest-growing retail marketplace. We handle Walmart catalog onboarding, Pro Seller badge qualification, Walmart Fulfillment Services (WFS), and Walmart Connect ads.",
    imageSrc: "/images/services/walmart-marketplace.webp",
    imageAlt: "Walmart Marketplace Seller Center Performance Dashboard",
    stats: [
      {
        label: "Incremental Revenue",
        value: "+88%",
        description: "New customer acquisition outside Amazon ecosystem",
        iconName: "TrendingUp",
      },
      {
        label: "Pro Seller Badge",
        value: "Earned",
        description: "Unlocks algorithmic Buy Box priority & buyer trust boost",
        iconName: "ShieldCheck",
      },
      {
        label: "Delivery Speed",
        value: "2-Day",
        description: "Nationwide fast shipping powered by Walmart WFS hubs",
        iconName: "Zap",
      },
      {
        label: "Blended Ad ROAS",
        value: "4.1x",
        description:
          "High-efficiency Walmart Connect sponsored search campaigns",
        iconName: "Target",
      },
    ],
    overview: {
      channelScope: {
        headline: "Channel Coverage",
        items: [
          "Walmart Seller Center US registration, onboarding & catalog syndication",
          "Walmart Fulfillment Services (WFS) inventory inbound & allocation",
          "Walmart Connect advertising (Sponsored Products, Brands & Search in-grid)",
          "Pro Seller badge qualification & ongoing compliance monitoring",
        ],
      },
      painPointsSolved: {
        headline: "Operational Roadblocks Solved",
        items: [
          "Strict Item Spec 5.0 feed errors preventing catalog ingestion and variation setup",
          "Slow fulfillment times leading to lost Buy Box ownership against WFS sellers",
          "Poor listing quality scores suppressing products in Walmart organic search",
          "Unauthorized price scrapers undercutting MAP and creating cross-channel conflict",
        ],
      },
      businessImpact: {
        headline: "Direct Business Impact",
        items: [
          "Instant access to 120M+ unique monthly Walmart.com retail shoppers",
          "Pro Seller badge visible on search results driving a 20-30% conversion lift",
          "Subsidized 2-day delivery badging across the continental United States",
          "Diversified revenue base protecting your business against Amazon algorithm shocks",
        ],
      },
    },
    narrative: {
      challengeSection: {
        title: "Why Most Brands Struggle on Walmart Marketplace",
        subtitle:
          "Walmart Marketplace is less saturated than Amazon, but its backend technology and strict Item Spec standards create steep operational hurdles.",
        cards: [
          {
            title: "Complex Item Spec 5.0 Data Requirements",
            description:
              "Walmart requires exacting product attributes, taxonomy leaf nodes, and rich media specs. Uploading spreadsheets blindly leads to feed rejection errors and orphaned variations.",
            impact:
              "Products stuck in unpublished limbo for weeks without sales.",
          },
          {
            title: "The WFS 2-Day Shipping Requirement",
            description:
              "Products fulfilled by merchant (FBM) with 5-day shipping rarely win the Buy Box against Walmart Fulfillment Services (WFS) products with the blue '2-Day Shipping' badge.",
            impact:
              "Low conversion rates and suppressed search grid placements.",
          },
          {
            title: "Walmart Connect Ad Complexity",
            description:
              "Walmart's first-price ad auction functions differently from Amazon's second-price model. Inexperienced managers easily overpay for top-of-search placement.",
            impact: "Wasted ad budget with high CPCs and disappointing ROAS.",
          },
        ],
      },
      solutionSection: {
        title: "How We Build Your Walmart Growth Engine",
        subtitle:
          "We take you from initial application to Pro Seller status with end-to-end catalog, fulfillment, and advertising management.",
        pillars: [
          {
            title: "Item Spec 5.0 Catalog Synchronization",
            tagline:
              "Achieve 95%+ Listing Quality Scores across your entire catalog.",
            description:
              "We map your product catalog to Walmart's precise category requirements. We enrich listings with key attributes, optimized titles, mobile image stacks, and Rich Media interactive carousels.",
            bullets: [
              "Attribute mapping to achieve top-tier 95%+ Walmart Listing Quality Scores",
              "Parent-child variation grouping to aggregate reviews and ratings",
              "Rich Media integration (360-degree spins, comparison tables, instructional video)",
              "Automated listing sync and price parity guardrails to prevent de-listings",
            ],
          },
          {
            title: "WFS Logistics & Inbound Inventory Coordination",
            tagline:
              "Unlock nationwide 2-day delivery and priority Buy Box ownership.",
            description:
              "We set up your WFS portal, calculate required inventory allocations across Walmart's fulfillment centers, and coordinate freight shipments from your manufacturer or 3PL.",
            bullets: [
              "WFS onboarding and inbound shipment manifest creation",
              "Pallet and carton label compliance adhering to Walmart receiving guidelines",
              "Restock forecasting to prevent out-of-stock penalties during peak seasons",
              "Stranded WFS inventory reconciliation and customer return processing",
            ],
          },
          {
            title: "Walmart Connect Advertising Management",
            tagline:
              "First-page visibility with disciplined first-price auction efficiency.",
            description:
              "We build Sponsored Products and Sponsored Brands campaigns designed specifically for Walmart's search algorithm, focusing on high-intent search grid placements with strict ROAS thresholds.",
            bullets: [
              "Exact, phrase, and broad manual campaign segmentation for core hero SKUs",
              "Bid adjustment rules designed specifically for Walmart's first-price auction",
              "Brand amplifier campaigns defending your branded keywords against competitors",
              "Weekly keyword harvesting and search query performance analysis",
            ],
          },
          {
            title: "Pro Seller Badge & Operational Compliance",
            tagline:
              "Maintain elite merchant standing and unlock exclusive platform perks.",
            description:
              "We continuously track your On-Time In-Full (OTIF) metrics, customer dispute resolution times, and cancellation rates to maintain your Walmart Pro Seller status.",
            bullets: [
              "Daily monitoring of order fulfillment and cancellation rates (<1.5% target)",
              "Proactive customer support message response within Walmart's strict 24-hour SLA",
              "Buy Box monitoring against third-party unauthorized resellers",
              "Enrollment in Walmart promotional events (Deals for Days, Flash Picks, Holiday)",
            ],
          },
        ],
      },
      whyEcomAmigo: {
        title: "Why Brands Trust EcomAmigo for Walmart",
        subtitle:
          "We have mastered Walmart's unique algorithmic ecosystem, giving your brand an unfair advantage in the retail giant's digital marketplace.",
        reasons: [
          {
            title: "Official Channel Best Practices",
            description:
              "We adhere strictly to Walmart's official Item Spec 5.0 standards and compliance rules, ensuring zero listing suspensions or feed rejections.",
          },
          {
            title: "WFS Fulfillment Experts",
            description:
              "We know how to navigate Walmart Fulfillment Services to unlock fast shipping badges while minimizing inbound freight and storage expenses.",
          },
          {
            title: "Cross-Marketplace Price Parity",
            description:
              "We safeguard your pricing between Walmart and Amazon to ensure an algorithm price mismatch never triggers an Amazon Buy Box suppression.",
          },
          {
            title: "Dedicated Account Specialists",
            description:
              "Your brand receives personalized attention from an operations specialist dedicated to optimizing your Walmart revenue and profitability.",
          },
        ],
      },
      roadmap: {
        title: "The 4-Step Walmart Expansion Framework",
        subtitle:
          "Our proven pathway to launching and scaling on Walmart Marketplace.",
        steps: [
          {
            phase: "Phase 1",
            title: "Seller Center Application & Approval",
            timeline: "Days 1 – 10",
            description:
              "We prepare your business documentation, submit the official Walmart Marketplace application, and complete backend account configurations.",
            deliverables: [
              "Approved Walmart Seller Center account",
              "Banking, tax, and shipping profile configuration",
              "API credentials and inventory sync linkage",
              "WFS program application and approval",
            ],
          },
          {
            phase: "Phase 2",
            title: "Catalog Ingestion & Listing Quality Optimization",
            timeline: "Days 11 – 20",
            description:
              "We upload and map your product catalog, resolve feed errors, group variations, and optimize listings to achieve a 90%+ Listing Quality Score.",
            deliverables: [
              "Catalog ingestion for all active target SKUs",
              "Listing Quality Score audit and attribute fixes",
              "High-resolution mobile image stack deployment",
              "Review syndication setup from Shopify/Amazon",
            ],
          },
          {
            phase: "Phase 3",
            title: "WFS Shipment & Inventory Inbound",
            timeline: "Days 21 – 30",
            description:
              "We create inbound shipping plans for initial inventory batches to Walmart Fulfillment Services, ensuring products receive the 2-Day Delivery badge.",
            deliverables: [
              "WFS inbound shipment plan and carton labels",
              "Freight coordination with your warehouse or 3PL",
              "Verification of inventory check-in at Walmart hubs",
              "Activation of nationwide 2-day delivery badges",
            ],
          },
          {
            phase: "Phase 4",
            title: "Walmart Connect Advertising & Pro Seller Scaling",
            timeline: "Day 31 Onward",
            description:
              "We launch targeted Sponsored Products campaigns, manage customer service, monitor Buy Box win rates, and qualify for the Pro Seller badge.",
            deliverables: [
              "Walmart Connect ad campaign structure live",
              "Daily order tracking and customer support management",
              "Achievement of Pro Seller badge qualification metrics",
              "Bi-weekly performance and gross margin reporting",
            ],
          },
        ],
      },
      techStack: {
        title: "Walmart Operations Software",
        tools: [
          {
            name: "Walmart Seller Center",
            purpose:
              "Catalog administration, order routing, and policy metrics",
          },
          {
            name: "Walmart Connect",
            purpose:
              "First-party Sponsored Products and Sponsored Brands advertising",
          },
          {
            name: "WFS Management Portal",
            purpose:
              "Inbound shipment creation, inventory allocation, and fees",
          },
          {
            name: "Helium 10 Walmart",
            purpose:
              "Walmart search volume analysis and competitor rank tracking",
          },
        ],
      },
      faqs: [
        {
          question: "Can we sell on Walmart if we already sell on Amazon?",
          answer:
            "Absolutely! In fact, Walmart actively seeks established Amazon brands with a history of strong reviews and reliable fulfillment. Expanding onto Walmart allows you to acquire customers who do not shop on Amazon without cannibalizing existing sales.",
        },
        {
          question: "Can we import our Amazon customer reviews to Walmart?",
          answer:
            "Yes. Walmart allows review syndication through approved partners (such as Bazaarvoice, Yotpo, or PowerReviews) and allows verified brand reviews to be imported to help establish immediate social proof on new listings.",
        },
        {
          question:
            "What is the Walmart Pro Seller Badge, and how do we earn it?",
          answer:
            "The Pro Seller Badge is a blue checkmark displayed next to your listings in Walmart search results. It is awarded to sellers who maintain a 90%+ listing quality score, on-time delivery rate >95%, cancellation rate <1.5%, and free return offerings.",
        },
        {
          question: "Do we have to use Walmart Fulfillment Services (WFS)?",
          answer:
            "No, you can fulfill orders from your own warehouse or 3PL (Merchant Fulfilled). However, using WFS provides nationwide 2-day shipping badging, lower fulfillment fees, and significantly higher Buy Box win rates, which is why we highly recommend it.",
        },
      ],
    },
    recommendedTier: {
      name: "Growth or Scale Retainer",
      price: "$1,499 – $2,999",
      period: "per month",
      ctaHref: "/pricing",
      ctaText: "View Retainer Tiers",
    },
    relatedCaseStudy: {
      slug: "thai-organic",
      clientName: "Thai Organic",
      stat: "Expanded onto Walmart Marketplace driving $195k/mo",
    },
  },
  {
    id: "multichannel-operations",
    slug: "multichannel-operations",
    name: "Multichannel Operations & Syndication",
    shortName: "Multichannel Operations",
    badge: "Omnichannel Orchestration • Unified Sync",
    category: "Full Marketplace Management",
    heroTitle: "Unified Multichannel Operations & Centralized Order Routing",
    heroSubtitle:
      "Orchestrate your entire e-commerce footprint across Amazon, TikTok Shop, Walmart, eBay, and Shopify with synchronized stock levels, unified order routing, and MAP price parity.",
    imageSrc: "/images/services/multichannel-operations.webp",
    imageAlt: "Multichannel E-Commerce Admin and Analytics Dashboard",
    stats: [
      {
        label: "Inventory Accuracy",
        value: "99.9%",
        description: "Zero oversells or out-of-stock cancellation penalties",
        iconName: "ShieldCheck",
      },
      {
        label: "Catalog Parity",
        value: "100%",
        description:
          "Synchronized descriptions, images, and prices across all channels",
        iconName: "Layers",
      },
      {
        label: "Supported Channels",
        value: "4+ Platforms",
        description:
          "Amazon, TikTok Shop, Walmart, Shopify & eBay orchestration",
        iconName: "Zap",
      },
      {
        label: "Unified Dashboard",
        value: "Real-Time",
        description:
          "Single-pane-of-glass executive visibility into cross-channel GMV",
        iconName: "BarChart3",
      },
    ],
    overview: {
      channelScope: {
        headline: "Channel Coverage",
        items: [
          "Amazon (FBA & FBM), TikTok Shop US, Walmart (WFS), Shopify D2C, and eBay",
          "Centralized inventory pooling across FBA, WFS, and independent 3PL warehouses",
          "Unified multichannel order routing with automated carrier selection",
          "Cross-channel MAP monitoring and automated algorithmic price parity",
        ],
      },
      painPointsSolved: {
        headline: "Operational Roadblocks Solved",
        items: [
          "Overselling and out-of-stock cancellations caused by unsynchronized channel inventory",
          "Cross-channel price discrepancies triggering Amazon Buy Box loss and algorithmic suppression",
          "Fragmented order management requiring daily logins across 5 different seller portals",
          "Blind spots in true contribution margins due to varying marketplace fee structures",
        ],
      },
      businessImpact: {
        headline: "Direct Business Impact",
        items: [
          "Maximized revenue by exposing 100% of available inventory to all active channels safely",
          "Protected brand reputation with uniform customer experience across every touchpoint",
          "Single point of operational accountability with a dedicated senior e-commerce manager",
          "True blended financial reporting showing exact net margins after all marketplace fees",
        ],
      },
    },
    narrative: {
      challengeSection: {
        title: "The Chaos of Selling Across Multiple Channels",
        subtitle:
          "Multi-channel selling is essential for brand resilience, but without unified operational infrastructure, complexity multiplies exponentially with every new platform.",
        cards: [
          {
            title: "The Overselling Nightmare",
            description:
              "Selling the last 50 units on Amazon while TikTok Shop and Shopify simultaneously accept orders leads to delayed dispatches, emergency cancellations, and severe platform penalties.",
            impact:
              "Seller rating demotions and temporary channel suspensions.",
          },
          {
            title: "Algorithmic Price Conflict",
            description:
              "Amazon crawlers continuously scan Walmart and TikTok Shop. If your item sells for $1 less on another channel, Amazon immediately strips your Buy Box, halting sales.",
            impact:
              "Catastrophic sales drops on your highest-volume sales channel.",
          },
          {
            title: "Fragmented Operations & Data Silos",
            description:
              "Logging into four separate portals to respond to customer inquiries, download invoices, track inventory levels, and check ad spend wastes 20+ hours every week.",
            impact:
              "Executive burnout and critical operational details slipping through cracks.",
          },
        ],
      },
      solutionSection: {
        title: "How We Harmonize Your Multichannel Footprint",
        subtitle:
          "We implement a unified operational architecture that centralizes your inventory, standardizes order routing, and preserves brand equity everywhere you sell.",
        pillars: [
          {
            title: "Unified Inventory Buffer Management",
            tagline:
              "Live inventory synchronization with automated safety stock thresholds.",
            description:
              "We centralize your stock feeds across FBA, WFS, and 3PL warehouses. When a unit sells on any marketplace, stock levels update across all channels within seconds, complete with custom safety stock buffers.",
            bullets: [
              "Real-time two-way inventory sync across Amazon, TikTok Shop, Walmart, and Shopify",
              "Dynamic safety stock buffers that prevent overselling during high-velocity flash sales",
              "Virtual inventory allocation allowing priority stock reservation for high-margin channels",
              "Multi-warehouse inventory routing that ships orders from the nearest fulfillment node",
            ],
          },
          {
            title: "Automated Price Parity & MAP Protection",
            tagline:
              "Defend your Amazon Buy Box while running channel-specific promotions.",
            description:
              "We configure centralized pricing rules that synchronize prices across all storefronts. We deploy automated alerts that flag unauthorized reseller price cuts before Amazon algorithms detect them.",
            bullets: [
              "Centralized price rule engine keeping all marketplace listings in perfect price harmony",
              "Channel-specific promotion isolation using unique bundles to avoid price scraping penalties",
              "24/7 monitoring of unauthorized third-party resellers undercutting your MAP policy",
              "Automated cease-and-desist notifications and brand protection enforcement",
            ],
          },
          {
            title: "Centralized Order Fulfillment & Logistics",
            tagline:
              "One unified routing hub for all incoming multi-channel customer orders.",
            description:
              "We route orders from all channels into a centralized fulfillment workflow. Whether an order is fulfilled by FBA Multi-Channel Fulfillment (MCF), WFS, or your private 3PL, tracking details flow back automatically.",
            bullets: [
              "Amazon MCF integration to fulfill Shopify, TikTok, and eBay orders from FBA stock",
              "Automated routing logic choosing the lowest-cost, fastest shipping carrier per order",
              "Centralized return processing and customer refund authorization workflows",
              "Unified tracking updates delivered directly to end customers within channel SLAs",
            ],
          },
          {
            title: "Blended Contribution Margin Analytics",
            tagline:
              "True clarity into channel-by-channel profitability and net unit economics.",
            description:
              "We synthesize financial data from every marketplace into an executive dashboard, calculating referral fees, shipping costs, ad spend, and net operating profit per SKU.",
            bullets: [
              "Consolidated weekly P&L dashboard showing blended gross sales and true net margins",
              "Channel-by-channel profitability breakdown to identify which platforms deliver highest ROI",
              "SKU-level unit economics accounting for storage fees, return rates, and ad spend",
              "Bi-weekly executive strategy reviews with prioritized inventory reorder recommendations",
            ],
          },
        ],
      },
      whyEcomAmigo: {
        title: "Why Trust EcomAmigo for Multichannel Scale",
        subtitle:
          "We have built and managed multi-marketplace operations for enterprise consumer brands across the United States.",
        reasons: [
          {
            title: "Zero Channel Conflict",
            description:
              "We design listing variations and pricing structures specifically to prevent cross-channel friction, keeping both Amazon and Walmart algorithms happy.",
          },
          {
            title: "Full Operational Ownership",
            description:
              "We handle daily logins, customer messages, restock plans, and ad optimizations across all channels so your team never has to juggle multiple logins.",
          },
          {
            title: "Enterprise Software Stack",
            description:
              "We integrate leading e-commerce software (ChannelEngine, ShipStation, Sellerboard) to provide robust, institutional-grade infrastructure.",
          },
          {
            title: "Scale Retainer Predictability",
            description:
              "Enjoy all-inclusive multichannel management under a fixed monthly retainer with zero percentages of sales or hidden surprises.",
          },
        ],
      },
      roadmap: {
        title: "Our 60-Day Multichannel Integration Framework",
        subtitle:
          "How we unite your sales channels into a high-performance e-commerce engine.",
        steps: [
          {
            phase: "Phase 1",
            title: "Architecture & Data Audit",
            timeline: "Days 1 – 7",
            description:
              "We review active accounts, catalog SKU identifiers, pricing structures, and warehouse fulfillment capabilities to map the integration blueprint.",
            deliverables: [
              "Multichannel systems architecture diagram",
              "Master SKU catalog reconciliation sheet",
              "Cross-channel price parity analysis",
              "Integration roadmap with milestone dates",
            ],
          },
          {
            phase: "Phase 2",
            title: "Inventory & Order Routing Integration",
            timeline: "Days 8 – 21",
            description:
              "We connect all sales channels to a centralized inventory hub, set up safety stock buffers, and configure automated fulfillment routing rules.",
            deliverables: [
              "Two-way inventory sync live across all active channels",
              "Safety stock buffer rules deployed to prevent overselling",
              "Order fulfillment routing tested with live test orders",
              "FBA Multi-Channel Fulfillment (MCF) fallback rules enabled",
            ],
          },
          {
            phase: "Phase 3",
            title: "Catalog Harmonization & Price Parity",
            timeline: "Days 22 – 35",
            description:
              "We align product titles, bullet points, imagery, and pricing across all platforms to protect brand equity and avoid Buy Box penalties.",
            deliverables: [
              "Synchronized product listings on all channels",
              "Centralized price rule automation deployed",
              "Brand protection and reseller monitoring alerts live",
              "Review syndication between Shopify and retail channels",
            ],
          },
          {
            phase: "Phase 4",
            title: "Unified Management & Autonomous Scaling",
            timeline: "Day 36 Onward",
            description:
              "We assume daily management across all marketplaces: daily order triage, inventory forecasting, multi-platform ad spend, and executive P&L reporting.",
            deliverables: [
              "Daily operational management across all channels",
              "Centralized customer support triage under 12-hour SLA",
              "Weekly multichannel inventory restock recommendations",
              "Bi-weekly executive financial and margin reviews",
            ],
          },
        ],
      },
      techStack: {
        title: "Omnichannel Infrastructure",
        tools: [
          {
            name: "ChannelEngine / Sellbrite",
            purpose:
              "Centralized multichannel inventory sync and catalog syndication",
          },
          {
            name: "ShipStation",
            purpose:
              "Unified order routing, carrier rate optimization, and tracking updates",
          },
          {
            name: "Sellerboard",
            purpose:
              "Real-time cross-channel net profit and unit economic tracking",
          },
          {
            name: "Inventory Planner",
            purpose:
              "Predictive supply chain forecasting and multi-warehouse allocation",
          },
        ],
      },
      faqs: [
        {
          question:
            "Can we use our Amazon FBA inventory to fulfill orders from Walmart and TikTok Shop?",
          answer:
            "Yes! Amazon offers Multi-Channel Fulfillment (MCF), which allows Amazon warehouses to pick, pack, and ship orders placed on Shopify, TikTok Shop, or eBay in unbranded packaging. We can configure automated MCF routing as a primary or backup fulfillment method.",
        },
        {
          question:
            "How do you prevent price wars between Amazon and our Shopify or TikTok store?",
          answer:
            "We maintain strict MAP (Minimum Advertised Price) parity across all public channels. For channel-exclusive promotions (e.g., TikTok flash sales), we create unique bundle SKUs or gift-with-purchase offers so Amazon crawlers do not register a price mismatch on your core hero ASINs.",
        },
        {
          question: "What happens if we run out of stock in one warehouse?",
          answer:
            "Our automated routing system immediately redirects orders to your secondary warehouse or switches the listing to an alternate fulfillment method (e.g., from 3PL to FBA MCF) without any manual intervention, ensuring uninterrupted sales velocity.",
        },
        {
          question: "How many channels does the Multichannel service cover?",
          answer:
            "Our Multichannel service covers all your core active marketplaces: Amazon, TikTok Shop, Walmart, Shopify D2C, and eBay. We also support specialized wholesale and B2B portals upon request.",
        },
      ],
    },
    recommendedTier: {
      name: "Scale Retainer",
      price: "$2,999",
      period: "per month",
      ctaHref: "/pricing",
      ctaText: "View Retainer Tiers",
    },
    relatedCaseStudy: {
      slug: "thai-organic",
      clientName: "Thai Organic",
      stat: "Synchronized Shopify D2C & Walmart Marketplace scaling",
    },
  },
];

export function getServiceBySlug(slug: string): ServiceData | undefined {
  return SERVICES_DATA.find((s) => s.slug === slug);
}

export function getAllServices(): ServiceData[] {
  return SERVICES_DATA;
}
