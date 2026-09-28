import { Metadata } from "next";
import { COMPANY, FAQS } from "./constants";

export function constructMetadata({
  title,
  description = COMPANY.subheadline,
  path = "",
  noIndex = false,
  keywords,
}: {
  title?: string;
  description?: string;
  path?: string;
  noIndex?: boolean;
  keywords?: string[];
} = {}): Metadata {
  const fullTitle = title
    ? title.includes(COMPANY.name)
      ? title
      : `${title} | ${COMPANY.name}`
    : `${COMPANY.name} | Dedicated Multi-Marketplace Operations & Growth`;

  const canonicalUrl = `${COMPANY.siteUrl}${path}`;
  const ogImageUrl = `${COMPANY.siteUrl}/images/og-ecomamigo.png`;

  const defaultKeywords = [
    "e-commerce marketplace management",
    "Amazon Seller Central agency",
    "TikTok Shop operations",
    "Walmart Marketplace management",
    "Amazon PPC optimization",
    "FBA inventory forecasting",
    "multichannel e-commerce operations",
    "e-commerce retainer agency",
    "Amazon SEO and Buy Box defense",
  ];

  return {
    title: fullTitle,
    description,
    keywords: keywords || defaultKeywords,
    authors: [{ name: COMPANY.name, url: COMPANY.siteUrl }],
    creator: COMPANY.name,
    publisher: COMPANY.name,
    metadataBase: new URL(COMPANY.siteUrl),
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: fullTitle,
      description,
      url: canonicalUrl,
      siteName: COMPANY.name,
      locale: "en_US",
      type: "website",
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: `${COMPANY.name} — Dedicated Multi-Marketplace Operations & Growth`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [ogImageUrl],
      creator: "@ecomamigo",
    },
    robots: {
      index: !noIndex,
      follow: !noIndex,
      googleBot: {
        index: !noIndex,
        follow: !noIndex,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    icons: {
      icon: [
        { url: "/favicon.ico", sizes: "48x48" },
        { url: "/icon.png", sizes: "512x512", type: "image/png" },
      ],
      apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
    },
  };
}

export function getOrganizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: COMPANY.name,
    legalName: COMPANY.legalName,
    url: COMPANY.siteUrl,
    logo: `${COMPANY.siteUrl}${COMPANY.logo}`,
    image: `${COMPANY.siteUrl}/images/og-ecomamigo.png`,
    description: COMPANY.subheadline,
    telephone: COMPANY.phone,
    email: COMPANY.email,
    priceRange: "$$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: COMPANY.fullAddress,
      addressLocality: "San Diego",
      addressRegion: "CA",
      postalCode: "92101",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "32.7157",
      longitude: "-117.1611",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "18:00",
      },
    ],
    sameAs: COMPANY.socialLinks.map((s) => s.url),
  };
}

export function getWebSiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: COMPANY.name,
    url: COMPANY.siteUrl,
    description: COMPANY.subheadline,
    publisher: {
      "@type": "Organization",
      name: COMPANY.name,
      logo: {
        "@type": "ImageObject",
        url: `${COMPANY.siteUrl}${COMPANY.logo}`,
      },
    },
    potentialAction: {
      "@type": "SearchAction",
      target: `${COMPANY.siteUrl}/services?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };
}

export function getBreadcrumbJsonLd(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url.startsWith("http")
        ? item.url
        : `${COMPANY.siteUrl}${item.url}`,
    })),
  };
}

export function getServiceJsonLd(service: {
  name: string;
  description: string;
  url: string;
  image?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "E-Commerce Marketplace Management",
    name: service.name,
    description: service.description,
    provider: {
      "@type": "ProfessionalService",
      name: COMPANY.name,
      url: COMPANY.siteUrl,
      telephone: COMPANY.phone,
      email: COMPANY.email,
    },
    url: service.url.startsWith("http")
      ? service.url
      : `${COMPANY.siteUrl}${service.url}`,
    ...(service.image && {
      image: service.image.startsWith("http")
        ? service.image
        : `${COMPANY.siteUrl}${service.image}`,
    }),
    areaServed: {
      "@type": "Country",
      name: "United States",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Marketplace Management Retainers",
      itemListElement: [
        {
          "@type": "Offer",
          name: "Launch Retainer",
          price: "799.00",
          priceCurrency: "USD",
        },
        {
          "@type": "Offer",
          name: "Growth Retainer",
          price: "1499.00",
          priceCurrency: "USD",
        },
        {
          "@type": "Offer",
          name: "Scale Retainer",
          price: "2999.00",
          priceCurrency: "USD",
        },
      ],
    },
  };
}

export function getFaqJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer.replace("// TODO: client to approve final copy\n", ""),
      },
    })),
  };
}
