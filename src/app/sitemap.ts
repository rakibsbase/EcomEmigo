import { MetadataRoute } from "next";
import { COMPANY } from "@/lib/constants";
import { getAllCaseStudies } from "@/lib/case-studies-data";
import { getAllServices } from "@/lib/services-data";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = COMPANY.siteUrl;
  const now = new Date();

  const caseStudies = getAllCaseStudies();
  const services = getAllServices();

  const routes = [
    { path: "", priority: 1.0, changeFrequency: "weekly" as const },
    { path: "/services", priority: 0.9, changeFrequency: "monthly" as const },
    ...services.map((s) => ({
      path: `/services/${s.slug}`,
      priority: 0.9,
      changeFrequency: "monthly" as const,
    })),
    {
      path: "/how-it-works",
      priority: 0.8,
      changeFrequency: "monthly" as const,
    },
    {
      path: "/case-studies",
      priority: 0.8,
      changeFrequency: "weekly" as const,
    },
    ...caseStudies.map((cs) => ({
      path: `/case-studies/${cs.slug}`,
      priority: 0.8,
      changeFrequency: "monthly" as const,
    })),
    { path: "/pricing", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/faq", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/about", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/contact", priority: 0.9, changeFrequency: "monthly" as const },
    {
      path: "/privacy-policy",
      priority: 0.5,
      changeFrequency: "yearly" as const,
    },
    {
      path: "/terms-of-service",
      priority: 0.5,
      changeFrequency: "yearly" as const,
    },
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route.path}`,
    lastModified: now,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
