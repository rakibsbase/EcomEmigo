import Link from "next/link";
import { constructMetadata } from "@/lib/seo";
import { HOW_IT_WORKS_STEPS, COMPANY } from "@/lib/constants";
import { ProcessTimeline, Stage } from "./_components/process-timeline";
import { ArrowRight, Calendar } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const metadata = constructMetadata({
  title: "How It Works | EcomAmigo Store Management Process",
  description:
    "Our structured onboarding and ongoing management workflow: from confidential store audit and channel strategy to catalog optimization and scaled management.",
  path: "/how-it-works",
});

const STAGES: Stage[] = HOW_IT_WORKS_STEPS.map((step) => ({
  number: String(step.step).padStart(2, "0"),
  phase: `Phase ${step.step}`,
  title: step.title,
  description: step.summary,
  deliverables: step.details,
}));

export default function HowItWorksPage() {
  return (
    <div className="flex flex-col">
      {/* 1. THE 5 SEQUENTIAL PHASES */}
      <section className="pt-8 sm:pt-10 md:pt-12 lg:pt-16 pb-12 sm:pb-16 lg:pb-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 sm:mb-10 lg:mb-14 text-center max-w-2xl mx-auto">
            <span className="text-xs font-semibold text-accent uppercase tracking-wider">
              Step-by-Step Delivery
            </span>
            <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-ink font-heading mt-2 tracking-tight">
              The 5 Operational Stages
            </h1>
            <p className="text-xs sm:text-sm lg:text-base text-ink-muted mt-2 sm:mt-3 leading-relaxed">
              Review what occurs during each phase and the exact deliverables
              your team receives.
            </p>
          </div>

          <ProcessTimeline stages={STAGES} />

          {/* Onboarding Timeline Note */}
          <div className="mt-8 sm:mt-10 lg:mt-12 bg-paper rounded-2xl border border-border p-5 sm:p-6 lg:p-8 space-y-3.5 sm:space-y-4 shadow-xs">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-accent-subtle text-accent flex items-center justify-center font-bold text-xs shrink-0">
                5-7d
              </div>
              <h3 className="text-base sm:text-lg font-semibold text-ink font-heading">
                Rapid Onboarding Cycle (5 to 7 Business Days)
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-ink-muted leading-relaxed">
              Once child account permissions are authorized in Amazon Seller
              Central, TikTok Shop, or Walmart, our California team immediately
              deploys catalog scanners, reconciles active inventory feeds, and
              begins 24/7 account monitoring without disrupting ongoing revenue.
            </p>
          </div>
        </div>
      </section>

      {/* 2. CTA */}
      <section className="py-12 sm:py-16 lg:py-24 bg-background relative overflow-hidden">
        <div className="w-full lg:max-w-11/12 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-[20px] sm:rounded-[36px] bg-[#10151C] dark:bg-paper border border-[#242A35] dark:border-border p-6 sm:p-10 lg:p-16 shadow-2xl">
            {/* Ambient Background Glows */}
            <div
              className="pointer-events-none absolute -right-24 -top-24 w-96 h-96 bg-accent/25 rounded-full blur-3xl"
              aria-hidden="true"
            />
            <div
              className="pointer-events-none absolute -left-24 -bottom-24 w-80 h-80 bg-accent-deep/20 rounded-full blur-3xl"
              aria-hidden="true"
            />
            <div
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(#242A35_1px,transparent_1px)] dark:bg-[radial-gradient(#222C3C_1px,transparent_1px)] bg-size-[24px_24px] opacity-25"
              aria-hidden="true"
            />

            <div className="relative z-10 max-w-3xl mx-auto text-center space-y-4 sm:space-y-6">
              <div className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-accent/15 border border-accent/30 text-accent-subtle text-xs font-semibold uppercase tracking-wider">
                <span>Begin With Phase 01</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-heading text-white tracking-tight">
                Get your comprehensive store audit.
              </h2>
              <p className="text-xs sm:text-sm lg:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
                Submit your store URL and primary channels. We will prepare an
                executive audit report diagnosing catalog errors, keyword
                opportunities, and ad spend efficiency.
              </p>
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4">
                <Link
                  href="/contact"
                  className={cn(
                    buttonVariants({ variant: "primary" }),
                    "shadow-lg shadow-accent/25 w-full sm:w-auto",
                  )}
                >
                  <span>Request Free Store Audit</span>
                  <ArrowRight className="w-4 h-4 shrink-0 transition-transform duration-200 group-hover:translate-x-1" />
                </Link>
                <a
                  href={COMPANY.calLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    buttonVariants({ variant: "outline-white" }),
                    "w-full sm:w-auto",
                  )}
                >
                  <Calendar className="w-4 h-4 shrink-0 text-white/70 group-hover:text-white transition-colors" />
                  <span>Schedule 15-Min Intro Call</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
