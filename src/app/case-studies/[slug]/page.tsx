import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { constructMetadata, getBreadcrumbJsonLd } from "@/lib/seo";
import { getCaseStudyBySlug, getAllCaseStudies } from "@/lib/case-studies-data";
import { COMPANY } from "@/lib/constants";
import { FeaturesStrip } from "@/components/home/features-strip";
import { CtaBanner } from "@/components/home/cta-banner";
import {
  Check,
  ArrowRight,
  ArrowLeft,
  Star,
  CheckCircle2,
  ExternalLink,
  ChevronRight,
  Layers,
  TrendingUp,
  Target,
} from "lucide-react";

interface CaseStudyPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const caseStudies = getAllCaseStudies();
  return caseStudies.map((study) => ({
    slug: study.slug,
  }));
}

export async function generateMetadata({ params }: CaseStudyPageProps) {
  const { slug } = await params;
  const study = getCaseStudyBySlug(slug);

  if (!study) {
    return constructMetadata({
      title: "Case Study Not Found",
      description: "The requested case study could not be located.",
      path: "/case-studies",
    });
  }

  return constructMetadata({
    title: `${study.clientName} Case Study | EcomAmigo Client Results`,
    description: study.heroSubtitle,
    path: `/case-studies/${study.slug}`,
  });
}

export default async function CaseStudyDetailPage({
  params,
}: CaseStudyPageProps) {
  const { slug } = await params;
  const study = getCaseStudyBySlug(slug);

  if (!study) {
    notFound();
  }

  const allStudies = getAllCaseStudies();
  const currentIndex = allStudies.findIndex((s) => s.slug === study.slug);
  const prevStudy =
    allStudies[(currentIndex - 1 + allStudies.length) % allStudies.length];
  const nextStudy = allStudies[(currentIndex + 1) % allStudies.length];

  const breadcrumbsJsonLd = getBreadcrumbJsonLd([
    { name: "Home", url: "/" },
    { name: "Case Studies", url: "/case-studies" },
    { name: study.clientName, url: `/case-studies/${study.slug}` },
  ]);

  const caseStudyJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: `${study.clientName} Case Study: ${study.heroTitle}`,
    description: study.heroSubtitle,
    image: `${study.mockupSrc}`,
    author: {
      "@type": "Organization",
      name: "EcomAmigo",
      url: "https://ecomamigo.com",
    },
    publisher: {
      "@type": "Organization",
      name: "EcomAmigo",
      logo: {
        "@type": "ImageObject",
        url: `${COMPANY.siteUrl}${COMPANY.logo}`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://ecomamigo.com/case-studies/${study.slug}`,
    },
  };

  return (
    <div className="relative bg-background text-ink">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbsJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(caseStudyJsonLd) }}
      />
      {/* ========================================================
          1. BREADCRUMBS & HERO SECTION
          ======================================================== */}
      <section
        className="relative pt-12 sm:pt-16 pb-12 sm:pb-16 border-b border-border-subtle"
        aria-label="Case Study Header"
      >
        <div
          className="absolute inset-0 -z-10 overflow-hidden"
          aria-hidden="true"
        >
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_20%,var(--accent-subtle)_0%,transparent_100%)] opacity-70" />
          <div className="absolute inset-0 bg-linear-to-b from-background/80 via-background/50 to-background" />
        </div>

        <div className="max-w-11/12 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb Navigation */}
          <nav
            aria-label="Breadcrumbs"
            className="flex items-center gap-2 text-xs text-ink-subtle mb-6 font-medium"
          >
            <Link href="/" className="hover:text-accent transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link
              href="/case-studies"
              className="hover:text-accent transition-colors"
            >
              Case Studies
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-ink font-semibold truncate">
              {study.clientName}
            </span>
          </nav>

          {/* Hero Header Block */}
          <div className="max-w-4xl space-y-4">
            <p className="text-[11px] sm:text-xs font-bold tracking-wider text-accent uppercase font-heading">
              Case Study • {study.industry}
            </p>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-ink tracking-tight leading-[1.15]">
              {study.heroTitle}
            </h1>

            <p className="text-sm sm:text-base lg:text-lg text-ink-muted leading-relaxed">
              {study.heroSubtitle}
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4 text-xs text-ink-muted">
              <div className="flex items-center gap-1.5 font-semibold text-ink">
                <ExternalLink className="w-4 h-4 text-accent" />
                <a
                  href={study.websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent transition-colors underline underline-offset-4"
                >
                  {study.websiteDisplay}
                </a>
              </div>
              <span>•</span>
              <span>Timeline: {study.engagementDuration}</span>
              <span>•</span>
              <span>Channels: {study.channels.join(", ")}</span>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          2. LARGE HERO MOCKUP & 3-COLUMN SUMMARY PANEL
          ======================================================== */}
      <section className="py-12 sm:py-16 bg-surface border-b border-border-subtle">
        <div className="max-w-11/12 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-10">
          {/* Main Visual Showcase Container */}
          <div className="relative w-full rounded-2xl sm:rounded-3xl overflow-hidden bg-linear-to-b from-[#091122] via-[#050a14] to-[#040810] p-6 sm:p-10 lg:p-14 border border-[#162744] shadow-2xl flex items-center justify-center">
            <div className="relative w-full max-w-3xl aspect-[1.45/1] drop-shadow-[0_25px_45px_rgba(0,0,0,0.6)]">
              <Image
                src={study.mockupSrc}
                alt={`${study.clientName} Multi-Device Experience`}
                fill
                priority
                className="object-contain"
                sizes="(max-width: 1024px) 100vw, 800px"
              />
            </div>
          </div>

          {/* 3-Column Summary Panel */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 bg-paper rounded-2xl sm:rounded-3xl border border-border p-6 sm:p-8 shadow-xs">
            {/* Column 1: Client Overview */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-accent font-bold text-xs uppercase tracking-wider font-heading pb-2 border-b border-border-subtle">
                <Layers className="w-4 h-4" />
                <span>Client Overview</span>
              </div>
              <ul className="space-y-2 text-xs sm:text-[13px] text-ink-muted">
                <li>
                  <strong className="text-ink block mb-0.5">Industry:</strong>
                  {study.overview.clientOverview.industry}
                </li>
                <li>
                  <strong className="text-ink block mb-0.5">
                    Business Model:
                  </strong>
                  {study.overview.clientOverview.businessModel}
                </li>
                <li>
                  <strong className="text-ink block mb-0.5">
                    Catalog Scope:
                  </strong>
                  {study.overview.clientOverview.catalogScope}
                </li>
              </ul>
            </div>

            {/* Column 2: The Core Challenge */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-accent font-bold text-xs uppercase tracking-wider font-heading pb-2 border-b border-border-subtle">
                <Target className="w-4 h-4" />
                <span>The Core Challenge</span>
              </div>
              <ul className="space-y-2 text-xs sm:text-[13px] text-ink-muted">
                <li>
                  <strong className="text-ink block mb-0.5">
                    Primary Bottleneck:
                  </strong>
                  {study.overview.challenge.primaryBottleneck}
                </li>
                <li>
                  <strong className="text-ink block mb-0.5">
                    Ad Spend Efficiency:
                  </strong>
                  {study.overview.challenge.adSpendIssue}
                </li>
                <li>
                  <strong className="text-ink block mb-0.5">
                    Logistics &amp; Inventory:
                  </strong>
                  {study.overview.challenge.operationalGap}
                </li>
              </ul>
            </div>

            {/* Column 3: Operational Impact */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-accent font-bold text-xs uppercase tracking-wider font-heading pb-2 border-b border-border-subtle">
                <TrendingUp className="w-4 h-4" />
                <span>Operational Impact</span>
              </div>
              <ul className="space-y-2 text-xs sm:text-[13px] text-ink-muted">
                <li>
                  <strong className="text-ink block mb-0.5">
                    Verified Revenue Lift:
                  </strong>
                  <span className="text-accent font-bold">
                    {study.overview.impact.growthMetric}
                  </span>
                </li>
                <li>
                  <strong className="text-ink block mb-0.5">
                    Conversion Rate Impact:
                  </strong>
                  <span className="text-[#22C55E] font-bold">
                    {study.overview.impact.conversionMetric}
                  </span>
                </li>
                <li>
                  <strong className="text-ink block mb-0.5">
                    Engagement Model:
                  </strong>
                  {study.overview.impact.managedCadence}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          3. EDITORIAL CASE STUDY NARRATIVE (2-Column Layout)
          ======================================================== */}
      <section className="py-16 sm:py-20 lg:py-24 bg-background border-b border-border-subtle">
        <div className="max-w-11/12 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 sm:space-y-20">
          {/* SECTION 1: THE PROBLEM */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-10 items-start">
            <div className="md:col-span-4 sticky top-28">
              <h2 className="text-xl sm:text-2xl font-bold font-heading text-ink">
                {study.theProblem.title}
              </h2>
              <span className="text-xs text-ink-subtle mt-1 block">
                Pre-Engagement Friction
              </span>
            </div>
            <div className="md:col-span-8 space-y-5">
              <p className="text-sm sm:text-base text-ink-muted leading-relaxed">
                {study.theProblem.description}
              </p>
              <div className="space-y-3 pt-2">
                {study.theProblem.bulletPoints.map((point, idx) => (
                  <div
                    key={idx}
                    className="p-4 sm:p-5 rounded-2xl bg-surface border border-border-subtle space-y-1.5"
                  >
                    <h3 className="text-xs sm:text-sm font-bold text-ink font-heading">
                      {point.title}
                    </h3>
                    <p className="text-xs sm:text-[13px] text-ink-muted leading-relaxed">
                      {point.detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <hr className="border-border-subtle" />

          {/* SECTION 2: OUR SOLUTION */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-10 items-start">
            <div className="md:col-span-4 sticky top-28">
              <h2 className="text-xl sm:text-2xl font-bold font-heading text-ink">
                {study.ourSolution.title}
              </h2>
              <span className="text-xs text-ink-subtle mt-1 block">
                Strategic Implementation
              </span>
            </div>
            <div className="md:col-span-8 space-y-5">
              <p className="text-sm sm:text-base text-ink-muted leading-relaxed">
                {study.ourSolution.description}
              </p>
              <div className="space-y-3 pt-2">
                {study.ourSolution.actions.map((act, idx) => (
                  <div
                    key={idx}
                    className="p-4 sm:p-5 rounded-2xl bg-surface border border-border-subtle flex items-start gap-3.5"
                  >
                    <div className="mt-0.5 bg-[#22C55E] rounded-full p-0.5 shrink-0">
                      <Check
                        className="w-3.5 h-3.5 text-white"
                        strokeWidth={3.5}
                      />
                    </div>
                    <div>
                      <h3 className="text-xs sm:text-sm font-bold text-ink font-heading mb-1">
                        {act.title}
                      </h3>
                      <p className="text-xs sm:text-[13px] text-ink-muted leading-relaxed">
                        {act.detail}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <hr className="border-border-subtle" />

          {/* SECTION 3: WHY WE CHOSE THIS STRATEGY */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-10 items-start">
            <div className="md:col-span-4 sticky top-28">
              <h2 className="text-xl sm:text-2xl font-bold font-heading text-ink">
                {study.whyThisStrategy.title}
              </h2>
              <span className="text-xs text-ink-subtle mt-1 block">
                Operator Rationale
              </span>
            </div>
            <div className="md:col-span-8 space-y-5">
              <p className="text-sm sm:text-base text-ink-muted leading-relaxed">
                {study.whyThisStrategy.description}
              </p>
              <ul className="space-y-3 pt-2">
                {study.whyThisStrategy.reasons.map((reason, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3 text-xs sm:text-sm text-ink-muted"
                  >
                    <div className="mt-1 w-2 h-2 rounded-full bg-accent shrink-0" />
                    <span className="leading-relaxed">{reason}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <hr className="border-border-subtle" />

          {/* SECTION 4: OUR JOURNEY TIMELINE */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-10 items-start">
            <div className="md:col-span-4 sticky top-28">
              <h2 className="text-xl sm:text-2xl font-bold font-heading text-ink">
                Our Journey So Far
              </h2>
              <span className="text-xs text-ink-subtle mt-1 block">
                Phase-by-Phase Roadmap
              </span>
            </div>
            <div className="md:col-span-8 space-y-4">
              {study.journeyTimeline.map((item, idx) => (
                <div
                  key={idx}
                  className="p-5 sm:p-6 rounded-2xl bg-surface border border-border-subtle space-y-3"
                >
                  <div className="flex items-center justify-between gap-3">
                    <span className="px-3 py-1 rounded-full bg-paper border border-border text-accent text-xs font-bold uppercase tracking-wider font-heading">
                      {item.phase} • {item.timeframe}
                    </span>
                    <span className="text-xs font-bold font-mono text-ink-subtle">
                      0{idx + 1}
                    </span>
                  </div>
                  <h3 className="text-sm sm:text-base font-bold text-ink font-heading">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-ink-muted leading-relaxed">
                    {item.description}
                  </p>
                  <div className="pt-2 flex flex-wrap gap-2">
                    {item.deliverables.map((del, dIdx) => (
                      <span
                        key={dIdx}
                        className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-paper text-[11px] font-medium text-ink border border-border"
                      >
                        <Check className="w-3 h-3 text-[#22C55E]" />
                        <span>{del}</span>
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <hr className="border-border-subtle" />

          {/* SECTION 5: KEY RESULTS & CLIENT REVIEW */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-10 items-start">
            <div className="md:col-span-4 sticky top-28">
              <h2 className="text-xl sm:text-2xl font-bold font-heading text-ink">
                Conclusion &amp; Review
              </h2>
              <span className="text-xs text-ink-subtle mt-1 block">
                Verified Outcome
              </span>
            </div>
            <div className="md:col-span-8 space-y-6">
              {/* Testimonial Quote Box */}
              <div className="p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-surface border border-border-subtle space-y-4">
                <div className="flex items-center gap-1 text-[#F59E0B]">
                  {[...Array(study.testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-current text-[#F59E0B]"
                    />
                  ))}
                </div>
                <blockquote className="text-sm sm:text-base italic text-ink leading-relaxed">
                  &ldquo;{study.testimonial.quote}&rdquo;
                </blockquote>
                <div className="pt-2 border-t border-border-subtle flex items-center justify-between">
                  <div>
                    <span className="text-xs sm:text-sm font-bold text-ink font-heading block">
                      {study.testimonial.author}
                    </span>
                    <span className="text-xs text-ink-subtle">
                      {study.testimonial.role}, {study.testimonial.company}
                    </span>
                  </div>
                  <span className="inline-flex items-center gap-1 text-xs font-semibold text-[#22C55E]">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Verified Client</span>
                  </span>
                </div>
              </div>

              {/* Final Takeaways */}
              <div className="space-y-3">
                <h3 className="text-sm font-bold text-ink uppercase tracking-wider font-heading">
                  Key Takeaways
                </h3>
                <ul className="space-y-2">
                  {study.conclusion.takeaways.map((point, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2.5 text-xs sm:text-sm text-ink-muted"
                    >
                      <div className="mt-0.5 bg-[#22C55E] rounded-full p-0.5 shrink-0">
                        <Check
                          className="w-3 h-3 text-white"
                          strokeWidth={3.5}
                        />
                      </div>
                      <span className="leading-relaxed">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          4. PREVIOUS / NEXT CASE STUDY SWITCHER
          ======================================================== */}
      <section className="py-12 sm:py-16 bg-surface border-b border-border-subtle">
        <div className="max-w-11/12 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            <Link
              href={`/case-studies/${prevStudy.slug}`}
              className="p-5 sm:p-6 rounded-2xl bg-paper border border-border hover:border-accent/40 transition-all flex items-center justify-between group shadow-xs"
            >
              <div className="space-y-1 text-left min-w-0">
                <span className="text-xs text-ink-subtle flex items-center gap-1 group-hover:text-accent transition-colors">
                  <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
                  <span>Previous Case Study</span>
                </span>
                <p className="text-sm sm:text-base font-bold text-ink font-heading truncate">
                  {prevStudy.clientName}
                </p>
              </div>
              <span className="text-xs font-semibold text-accent shrink-0 ml-3">
                {prevStudy.metrics[0].value}
              </span>
            </Link>

            <Link
              href={`/case-studies/${nextStudy.slug}`}
              className="p-5 sm:p-6 rounded-2xl bg-paper border border-border hover:border-accent/40 transition-all flex items-center justify-between group shadow-xs"
            >
              <div className="space-y-1 text-left min-w-0">
                <span className="text-xs text-ink-subtle flex items-center gap-1 group-hover:text-accent transition-colors">
                  <span>Next Case Study</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </span>
                <p className="text-sm sm:text-base font-bold text-ink font-heading truncate">
                  {nextStudy.clientName}
                </p>
              </div>
              <span className="text-xs font-semibold text-accent shrink-0 ml-3">
                {nextStudy.metrics[0].value}
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* ========================================================
          5. 4-PILLAR FEATURES STRIP
          ======================================================== */}
      <FeaturesStrip className="py-20 sm:py-24 lg:py-28" />

      {/* ========================================================
          6. SIGNATURE BOTTOM CTA BANNER
          ======================================================== */}
      <CtaBanner className="py-20 sm:py-24 lg:py-28" />
    </div>
  );
}
