import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import {
  constructMetadata,
  getBreadcrumbJsonLd,
  getServiceJsonLd,
} from "@/lib/seo";
import { COMPANY } from "@/lib/constants";
import { getServiceBySlug, getAllServices } from "@/lib/services-data";
import { FeaturesStrip } from "@/components/home/features-strip";
import { CtaBanner } from "@/components/home/cta-banner";
import { ServiceSidebarNav } from "../_components/service-sidebar-nav";
import {
  TrendingUp,
  Target,
  Layers,
  ShieldCheck,
  BarChart3,
  Zap,
  Check,
  Calendar,
  ArrowRight,
  ArrowLeft,
  ChevronRight,
  HelpCircle,
  Wrench,
} from "lucide-react";

interface ServicePageProps {
  params: Promise<{ slug: string }>;
}

const ICON_MAP = {
  TrendingUp,
  Target,
  Layers,
  ShieldCheck,
  BarChart3,
  Zap,
};

const NAV_SECTIONS = [
  { id: "the-friction", label: "The Operational Friction", number: "01" },
  {
    id: "operational-pillars",
    label: "Core Operational Pillars",
    number: "02",
  },
  { id: "why-ecomamigo", label: "Why EcomAmigo", number: "03" },
  { id: "onboarding-roadmap", label: "60-Day Execution Roadmap", number: "04" },
  { id: "tech-stack", label: "Software Stack Deployed", number: "05" },
  { id: "service-faqs", label: "Frequently Asked Questions", number: "06" },
];

export async function generateStaticParams() {
  const services = getAllServices();
  return services.map((s) => ({
    slug: s.slug,
  }));
}

export async function generateMetadata({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return constructMetadata({
      title: "Service Not Found | EcomAmigo",
      description: "The requested service could not be located.",
      path: "/services",
    });
  }

  return constructMetadata({
    title: `${service.name} | EcomAmigo Marketplace Services`,
    description: service.heroSubtitle,
    path: `/services/${service.slug}`,
  });
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const allServices = getAllServices();
  const currentIndex = allServices.findIndex((s) => s.slug === service.slug);
  const prevService =
    allServices[(currentIndex - 1 + allServices.length) % allServices.length];
  const nextService = allServices[(currentIndex + 1) % allServices.length];

  const breadcrumbsJsonLd = getBreadcrumbJsonLd([
    { name: "Home", url: "/" },
    { name: "Services", url: "/services" },
    { name: service.name, url: `/services/${service.slug}` },
  ]);

  const serviceJsonLd = getServiceJsonLd({
    name: service.name,
    description: service.heroSubtitle,
    url: `/services/${service.slug}`,
    image: service.imageSrc,
  });

  const faqsJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: service.narrative.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <div className="relative bg-background text-ink">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbsJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqsJsonLd) }}
      />
      {/* ========================================================
          1. BREADCRUMBS & HERO SECTION
          ======================================================== */}
      <section
        className="relative pt-12 sm:pt-16 pb-12 sm:pb-16 border-b border-border-subtle"
        aria-label="Service Header"
      >
        <div
          className="absolute inset-0 -z-10 overflow-hidden"
          aria-hidden="true"
        >
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_20%,var(--accent-subtle)_0%,transparent_100%)] opacity-70" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/50 to-background" />
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
              href="/services"
              className="hover:text-accent transition-colors"
            >
              Services
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-ink font-semibold truncate">
              {service.name}
            </span>
          </nav>

          {/* Hero Header Block */}
          <div className="max-w-4xl space-y-4">
            <p className="text-[11px] sm:text-xs font-bold tracking-wider text-accent uppercase font-heading">
              {service.badge}
            </p>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-ink tracking-tight leading-[1.15]">
              {service.heroTitle}
            </h1>

            <p className="text-sm sm:text-base lg:text-lg text-ink-muted leading-relaxed">
              {service.heroSubtitle}
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4 text-xs text-ink-muted">
              <div className="flex items-center gap-1.5 font-semibold text-ink">
                <span>Category:</span>
                <span className="text-accent">{service.category}</span>
              </div>
              <span>•</span>
              <span>Model: Dedicated Month-to-Month Retainer</span>
              <span>•</span>
              <span>SLA: 12-Hour Emergency Response</span>
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
          <div className="relative w-full rounded-2xl sm:rounded-3xl overflow-hidden bg-gradient-to-b from-[#091122] via-[#050a14] to-[#040810] p-6 sm:p-10 lg:p-14 border border-[#162744] shadow-2xl flex items-center justify-center">
            <div className="relative w-full max-w-4xl aspect-16/9 drop-shadow-[0_25px_45px_rgba(0,0,0,0.6)] rounded-xl sm:rounded-2xl overflow-hidden border border-white/10">
              <Image
                src={service.imageSrc}
                alt={service.imageAlt}
                fill
                priority
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 900px"
              />
            </div>
          </div>

          {/* 3-Column Summary Panel */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 bg-paper rounded-2xl sm:rounded-[24px] border border-border p-6 sm:p-8 shadow-xs">
            {/* Column 1: Channel Scope */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-accent font-bold text-xs uppercase tracking-wider font-heading pb-2 border-b border-border-subtle">
                <Layers className="w-4 h-4" />
                <span>{service.overview.channelScope.headline}</span>
              </div>
              <ul className="space-y-2 text-xs sm:text-[13px] text-ink-muted">
                {service.overview.channelScope.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-accent font-bold">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 2: Pain Points Solved */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-rose-600 dark:text-rose-400 font-bold text-xs uppercase tracking-wider font-heading pb-2 border-b border-border-subtle">
                <Target className="w-4 h-4" />
                <span>{service.overview.painPointsSolved.headline}</span>
              </div>
              <ul className="space-y-2 text-xs sm:text-[13px] text-ink-muted">
                {service.overview.painPointsSolved.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-rose-500 font-bold">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Business Impact */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-bold text-xs uppercase tracking-wider font-heading pb-2 border-b border-border-subtle">
                <TrendingUp className="w-4 h-4" />
                <span>{service.overview.businessImpact.headline}</span>
              </div>
              <ul className="space-y-2 text-xs sm:text-[13px] text-ink-muted">
                {service.overview.businessImpact.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-emerald-500 font-bold">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* 4 Stats Grid Bar */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-4 lg:gap-5">
            {service.stats.map((stat) => {
              const IconComponent =
                ICON_MAP[stat.iconName as keyof typeof ICON_MAP] || TrendingUp;
              return (
                <div
                  key={stat.label}
                  className="bg-paper p-4.5 sm:p-5 rounded-2xl border border-border shadow-xs flex flex-col justify-between hover:border-accent/30 hover:shadow-xs transition-all duration-300"
                >
                  <div>
                    <div className="flex items-center gap-2 mb-2.5">
                      <div className="p-1.5 rounded-lg bg-accent-subtle text-accent shrink-0">
                        <IconComponent className="w-3.5 h-3.5" />
                      </div>
                      <span className="text-xs sm:text-[13px] font-semibold text-ink-muted leading-snug">
                        {stat.label}
                      </span>
                    </div>
                    <div className="text-2xl sm:text-3xl font-bold font-heading text-ink tracking-tight whitespace-nowrap">
                      {stat.value}
                    </div>
                  </div>
                  <p className="text-xs text-ink-subtle mt-2 sm:mt-2.5 leading-relaxed">
                    {stat.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================================
          3. 2-COLUMN EDITORIAL NARRATIVE LAYOUT
          ======================================================== */}
      <section className="py-16 sm:py-20 bg-background">
        <div className="max-w-11/12 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 sm:space-y-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            {/* Left Column: Sticky Section Overview / Index */}
            <aside className="lg:col-span-4 lg:sticky lg:top-28 space-y-5 self-start">
              <ServiceSidebarNav sections={NAV_SECTIONS} />

              {/* Recommended Retainer Card */}
              <div className="p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-[#0B1528] to-[#040810] border border-[#162744] text-white space-y-3.5 shadow-lg">
                <div className="space-y-1">
                  <span className="text-[11px] font-mono text-accent uppercase tracking-wider">
                    Recommended Retainer
                  </span>
                  <h4 className="text-base font-bold font-heading">
                    {service.recommendedTier.name}
                  </h4>
                  <div className="text-2xl font-bold font-heading text-white">
                    {service.recommendedTier.price}{" "}
                    <span className="text-xs font-normal text-slate-400">
                      {service.recommendedTier.period}
                    </span>
                  </div>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed">
                  Zero revenue cuts. Full operational ownership, weekly KPI
                  reporting, and direct Slack channel access.
                </p>

                <div className="pt-1 flex flex-col gap-2">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 w-full py-2.5 rounded-full bg-accent hover:bg-accent-deep text-white text-xs font-semibold transition-all duration-300 ease-out shadow-xs hover:shadow-md hover:shadow-accent/25 active:scale-[0.98]"
                  >
                    <span>Book Free Store Audit</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>

                  <Link
                    href="/pricing"
                    className="inline-flex items-center justify-center gap-2 w-full py-2 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs font-semibold transition-all duration-300 ease-out active:scale-[0.98]"
                  >
                    <span>Compare All Tiers</span>
                  </Link>
                </div>
              </div>

              {/* Related Case Study Card */}
              {service.relatedCaseStudy && (
                <div className="p-4 sm:p-5 rounded-2xl bg-paper border border-border space-y-2 shadow-2xs">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-accent font-heading">
                    Client Proof In Action
                  </span>
                  <h5 className="font-bold text-sm text-ink">
                    {service.relatedCaseStudy.clientName}
                  </h5>
                  <p className="text-xs text-ink-muted">
                    {service.relatedCaseStudy.stat}
                  </p>
                  <Link
                    href={`/case-studies/${service.relatedCaseStudy.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-accent hover:text-accent-deep pt-0.5"
                  >
                    <span>Read Case Study</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              )}
            </aside>

            {/* Right Column: Detailed Narrative Sections */}
            <main className="lg:col-span-8 space-y-16 sm:space-y-20 min-w-0">
              {/* SECTION 1: THE FRICTION */}
              <section id="the-friction" className="scroll-mt-28 space-y-6">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-rose-600 dark:text-rose-400 font-heading">
                    01 • Operational Friction
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-bold font-heading text-ink mt-1">
                    {service.narrative.challengeSection.title}
                  </h2>
                  <p className="text-xs sm:text-sm text-ink-muted mt-2 leading-relaxed">
                    {service.narrative.challengeSection.subtitle}
                  </p>
                </div>

                <div className="space-y-4">
                  {service.narrative.challengeSection.cards.map((card, i) => (
                    <div
                      key={i}
                      className="p-5 sm:p-6 rounded-2xl bg-paper border border-border shadow-xs space-y-2.5"
                    >
                      <h3 className="font-bold text-sm sm:text-base text-ink font-heading">
                        {card.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-ink-muted leading-relaxed">
                        {card.description}
                      </p>
                      <div className="pt-2 text-xs font-medium text-rose-600 dark:text-rose-400 flex items-start gap-1.5">
                        <strong className="shrink-0">Bottom-Line Risk:</strong>
                        <span>{card.impact}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* SECTION 2: OPERATIONAL PILLARS */}
              <section
                id="operational-pillars"
                className="scroll-mt-28 space-y-6"
              >
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-accent font-heading">
                    02 • Structured Methodology
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-bold font-heading text-ink mt-1">
                    {service.narrative.solutionSection.title}
                  </h2>
                  <p className="text-xs sm:text-sm text-ink-muted mt-2 leading-relaxed">
                    {service.narrative.solutionSection.subtitle}
                  </p>
                </div>

                <div className="space-y-6">
                  {service.narrative.solutionSection.pillars.map(
                    (pillar, i) => (
                      <div
                        key={i}
                        className="p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-paper border border-border shadow-xs space-y-4"
                      >
                        <div className="space-y-1">
                          <div className="flex items-center gap-2">
                            <span className="text-xs font-bold px-2.5 py-0.5 rounded-md bg-accent-subtle text-accent font-mono">
                              Pillar 0{i + 1}
                            </span>
                            <span className="text-xs font-semibold text-ink-subtle">
                              {pillar.tagline}
                            </span>
                          </div>
                          <h3 className="text-lg sm:text-xl font-bold font-heading text-ink">
                            {pillar.title}
                          </h3>
                        </div>

                        <p className="text-xs sm:text-sm text-ink-muted leading-relaxed">
                          {pillar.description}
                        </p>

                        <div className="pt-2 space-y-2 border-t border-border-subtle">
                          <span className="text-[11px] font-bold uppercase tracking-wider text-ink-subtle block">
                            Included Deliverables:
                          </span>
                          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-ink-muted">
                            {pillar.bullets.map((bullet, bIdx) => (
                              <li key={bIdx} className="flex items-start gap-2">
                                <div className="p-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5">
                                  <Check className="w-3 h-3 stroke-[3]" />
                                </div>
                                <span>{bullet}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    ),
                  )}
                </div>
              </section>

              {/* SECTION 3: WHY ECOMAMIGO */}
              <section id="why-ecomamigo" className="scroll-mt-28 space-y-6">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-accent font-heading">
                    03 • Partnership Advantage
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-bold font-heading text-ink mt-1">
                    {service.narrative.whyEcomAmigo.title}
                  </h2>
                  <p className="text-xs sm:text-sm text-ink-muted mt-2 leading-relaxed">
                    {service.narrative.whyEcomAmigo.subtitle}
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {service.narrative.whyEcomAmigo.reasons.map((reason, i) => (
                    <div
                      key={i}
                      className="p-5 rounded-2xl bg-surface border border-border space-y-2"
                    >
                      <h4 className="font-bold text-sm text-ink font-heading">
                        {reason.title}
                      </h4>
                      <p className="text-xs text-ink-muted leading-relaxed">
                        {reason.description}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              {/* SECTION 4: 60-DAY EXECUTION ROADMAP */}
              <section
                id="onboarding-roadmap"
                className="scroll-mt-28 space-y-6"
              >
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-accent font-heading">
                    04 • Execution Roadmap
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-bold font-heading text-ink mt-1">
                    {service.narrative.roadmap.title}
                  </h2>
                  <p className="text-xs sm:text-sm text-ink-muted mt-2 leading-relaxed">
                    {service.narrative.roadmap.subtitle}
                  </p>
                </div>

                <div className="space-y-4">
                  {service.narrative.roadmap.steps.map((step, i) => (
                    <div
                      key={i}
                      className="p-6 rounded-2xl bg-paper border border-border shadow-xs space-y-3"
                    >
                      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-border-subtle pb-2.5">
                        <div className="flex items-center gap-2">
                          <span className="px-2.5 py-0.5 rounded-full bg-accent-subtle text-accent text-xs font-bold font-mono">
                            {step.phase}
                          </span>
                          <h4 className="font-bold text-sm sm:text-base text-ink font-heading">
                            {step.title}
                          </h4>
                        </div>
                        <span className="text-xs font-semibold text-ink-subtle">
                          {step.timeline}
                        </span>
                      </div>

                      <p className="text-xs sm:text-sm text-ink-muted leading-relaxed">
                        {step.description}
                      </p>

                      <div className="pt-2">
                        <span className="text-[11px] font-bold uppercase tracking-wider text-ink-subtle block mb-1.5">
                          Key Deliverables:
                        </span>
                        <div className="flex flex-wrap gap-2">
                          {step.deliverables.map((deliv, dIdx) => (
                            <span
                              key={dIdx}
                              className="px-2.5 py-1 rounded-lg bg-surface text-ink-muted text-[11px] border border-border-subtle"
                            >
                              {deliv}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* SECTION 5: TECH STACK */}
              <section id="tech-stack" className="scroll-mt-28 space-y-6">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-accent font-heading">
                    05 • Software Infrastructure
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-bold font-heading text-ink mt-1">
                    {service.narrative.techStack.title}
                  </h2>
                  <p className="text-xs sm:text-sm text-ink-muted mt-2 leading-relaxed">
                    We deploy battle-tested intelligence tools and API
                    integrations to automate data gathering and protect your
                    margins.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {service.narrative.techStack.tools.map((tool, i) => (
                    <div
                      key={i}
                      className="p-4 rounded-xl bg-surface border border-border flex items-start gap-3"
                    >
                      <div className="p-2 rounded-lg bg-accent-subtle text-accent shrink-0">
                        <Wrench className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="font-bold text-sm text-ink">
                          {tool.name}
                        </h4>
                        <p className="text-xs text-ink-muted mt-0.5">
                          {tool.purpose}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* SECTION 6: FAQS */}
              <section id="service-faqs" className="scroll-mt-28 space-y-6">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-accent font-heading">
                    06 • Real Answers
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-bold font-heading text-ink mt-1">
                    Frequently Asked Questions
                  </h2>
                  <p className="text-xs sm:text-sm text-ink-muted mt-2 leading-relaxed">
                    Direct answers regarding onboarding, permissions, and
                    operational management.
                  </p>
                </div>

                <div className="space-y-4">
                  {service.narrative.faqs.map((faq, i) => (
                    <div
                      key={i}
                      className="p-5 sm:p-6 rounded-2xl bg-paper border border-border space-y-2"
                    >
                      <div className="flex items-start gap-2.5">
                        <HelpCircle className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                        <h4 className="font-bold text-sm sm:text-base text-ink">
                          {faq.question}
                        </h4>
                      </div>
                      <p className="text-xs sm:text-sm text-ink-muted pl-6 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            </main>
          </div>

          {/* ========================================================
              CENTERED AUDIT CTA CARD
              ======================================================== */}
          <div className="mt-16 sm:mt-20 max-w-4xl mx-auto">
            <div className="p-8 sm:p-12 rounded-3xl bg-surface border border-border text-center space-y-4 shadow-xs">
              <p className="text-[11px] sm:text-xs font-bold tracking-wider text-accent uppercase font-heading">
                Take The Next Step
              </p>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-heading text-ink tracking-tight">
                Ready to optimize your {service.shortName}?
              </h3>
              <p className="text-xs sm:text-sm lg:text-base text-ink-muted max-w-xl mx-auto leading-relaxed">
                Request a confidential forensic store audit. We review your
                catalog health, Buy Box ownership, and PPC efficiency within 24
                to 48 hours.
              </p>
              <div className="pt-3 flex flex-col sm:flex-row items-center justify-center gap-3.5">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-accent hover:bg-accent-deep text-white font-semibold text-xs sm:text-sm transition-all duration-300 ease-out shadow-xs hover:shadow-md hover:shadow-accent/25 active:scale-[0.98]"
                >
                  <span>Request Free Store Audit</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href={COMPANY.calLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-paper hover:bg-accent hover:text-white text-accent border border-accent/40 hover:border-accent text-xs sm:text-sm font-semibold transition-all duration-300 ease-out shadow-2xs hover:shadow-xs active:scale-[0.98] dark:bg-surface dark:text-accent dark:border-accent/40 dark:hover:bg-accent dark:hover:text-white"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book 15-Min Intro Call</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          4. PREVIOUS / NEXT SERVICE NAVIGATION SWITCHER
          ======================================================== */}
      <section className="py-8 border-y border-border-subtle">
        <div className="max-w-11/12 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <Link
              href={`/services/${prevService.slug}`}
              className="group flex items-center gap-3 text-left w-full sm:w-auto p-3 rounded-xl hover:bg-paper transition-colors"
            >
              <ArrowLeft className="w-4 h-4 text-accent transition-transform group-hover:-translate-x-1" />
              <div>
                <span className="text-[11px] uppercase tracking-wider text-ink-subtle block">
                  Previous Service
                </span>
                <span className="text-xs sm:text-sm font-bold text-ink group-hover:text-accent transition-colors">
                  {prevService.name}
                </span>
              </div>
            </Link>

            <Link
              href="/services"
              className="text-xs font-semibold text-accent hover:text-white hover:bg-accent bg-paper border border-accent/40 hover:border-accent py-2 px-5 rounded-full transition-all duration-300 ease-out shadow-2xs active:scale-[0.98] dark:bg-surface dark:text-accent dark:border-accent/40 dark:hover:bg-accent dark:hover:text-white"
            >
              All Services
            </Link>

            <Link
              href={`/services/${nextService.slug}`}
              className="group flex items-center justify-end text-right gap-3 w-full sm:w-auto p-3 rounded-xl hover:bg-paper transition-colors"
            >
              <div>
                <span className="text-[11px] uppercase tracking-wider text-ink-subtle block">
                  Next Service
                </span>
                <span className="text-xs sm:text-sm font-bold text-ink group-hover:text-accent transition-colors">
                  {nextService.name}
                </span>
              </div>
              <ArrowRight className="w-4 h-4 text-accent transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* ========================================================
          5. REUSABLE SITE MODULES
          ======================================================== */}
      <FeaturesStrip />
      <CtaBanner />
    </div>
  );
}
