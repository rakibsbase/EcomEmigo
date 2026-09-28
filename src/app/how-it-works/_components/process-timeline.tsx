import Image from "next/image";
import {
  ClipboardList,
  ClipboardCheck,
  Compass,
  Share2,
  SlidersHorizontal,
  BarChart3,
  ShieldCheck,
  CheckCircle2,
  TrendingUp,
  Rocket,
  ArrowDown,
  Check,
  type LucideIcon,
} from "lucide-react";

export interface Stage {
  number: string; // "01"
  phase: string; // "Phase 1"
  title: string;
  description: string;
  deliverables: string[];
}

interface ProcessTimelineProps {
  stages: Stage[];
}

interface StageVisualConfig {
  headerIcon: LucideIcon;
  visualIcon: LucideIcon;
  metricBadge: string;
  imageSrc: string;
  imageAlt: string;
}

const STAGE_CONFIGS: Record<string, StageVisualConfig> = {
  "01": {
    headerIcon: ClipboardList,
    visualIcon: ClipboardCheck,
    metricBadge: "Full Audit Diagnostic",
    imageSrc: "/images/stages/stage-1.webp",
    imageAlt:
      "E-commerce operations specialist conducting a forensic store audit on multi-channel analytics dashboards",
  },
  "02": {
    headerIcon: Compass,
    visualIcon: Share2,
    metricBadge: "90-Day Channel Roadmap",
    imageSrc: "/images/stages/stage-2.webp",
    imageAlt:
      "E-commerce strategy team collaborating on multi-marketplace roadmap and growth milestones",
  },
  "03": {
    headerIcon: SlidersHorizontal,
    visualIcon: BarChart3,
    metricBadge: "A+ Content & SEO Repair",
    imageSrc: "/images/stages/stage-3.webp",
    imageAlt:
      "Marketplace operations dashboard tracking catalog optimization, buy box share, and revenue performance",
  },
  "04": {
    headerIcon: ShieldCheck,
    visualIcon: CheckCircle2,
    metricBadge: "24/7 SLA & Inventory Defense",
    imageSrc: "/images/stages/stage-4.webp",
    imageAlt:
      "EcomAmigo operations team collaborating on marketplace dashboards and inventory feeds in California",
  },
  "05": {
    headerIcon: TrendingUp,
    visualIcon: Rocket,
    metricBadge: "Multi-Channel Velocity",
    imageSrc: "/images/stages/stage-5.webp",
    imageAlt:
      "EcomAmigo executive operations war room at 9747 Businesspark Ave #255 in California",
  },
};

export function ProcessTimeline({ stages }: ProcessTimelineProps) {
  return (
    <div className="relative mx-auto w-full">
      <div className="flex flex-col">
        {stages.map((stage, i) => {
          const isEven = i % 2 === 0;
          const config = STAGE_CONFIGS[stage.number] ?? {
            headerIcon: ClipboardList,
            visualIcon: ClipboardCheck,
            metricBadge: `Phase ${stage.number} Execution`,
          };
          const HeaderIcon = config.headerIcon;
          const VisualIcon = config.visualIcon;

          return (
            <div key={stage.number} className="w-full">
              {/* Stage Row: 2-Column Alternating Grid on Tablet & Desktop */}
              <div className="grid grid-cols-1 items-center gap-6 sm:gap-8 md:grid-cols-2 md:gap-8 lg:gap-16">
                {/* Text Content Column */}
                <div
                  className={`flex flex-col justify-center order-1 ${
                    isEven ? "md:order-1 lg:order-1" : "md:order-2 lg:order-2"
                  }`}
                >
                  {/* Big Number Label on Desktop */}
                  <div className="hidden lg:block text-5xl lg:text-6xl font-bold font-mono text-accent/30 dark:text-accent/40 tracking-tight select-none mb-3 font-mono">
                    {stage.number}
                  </div>

                  {/* Header on Mobile & Tablet (< lg): Icon + Title with Number aligned on right */}
                  <div className="flex items-center justify-between gap-3 mb-3">
                    <div className="flex items-center gap-3 min-w-0">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent text-white shadow-xs shadow-accent/25">
                        <HeaderIcon className="h-5 w-5" />
                      </div>
                      <div className="min-w-0">
                        <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-ink font-heading leading-snug">
                          {stage.title}
                        </h3>
                        <span className="text-xs font-semibold text-accent uppercase tracking-wider block">
                          {stage.phase}
                        </span>
                      </div>
                    </div>
                    {/* Compact Number on right for sm/md */}
                    <div className="lg:hidden text-4xl sm:text-5xl font-bold font-mono text-accent/25 dark:text-accent/35 tracking-tight select-none shrink-0 font-mono">
                      {stage.number}
                    </div>
                  </div>

                  {/* Summary Description */}
                  <p className="text-xs sm:text-sm md:text-base text-ink-muted leading-relaxed mt-1 sm:mt-2 max-w-xl">
                    {stage.description}
                  </p>

                  {/* Deliverables Checklist */}
                  <div className="mt-4 sm:mt-5 space-y-2 sm:space-y-2.5">
                    {stage.deliverables.map((item, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-2.5 text-xs sm:text-sm text-ink-muted"
                      >
                        <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent">
                          <Check className="h-2.5 w-2.5 stroke-[2.5]" />
                        </span>
                        <span className="leading-relaxed">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Visual Representation Card Column with Realistic Operations Image */}
                <div
                  className={`order-2 ${isEven ? "md:order-2 lg:order-2" : "md:order-1 lg:order-1"}`}
                >
                  <div className="group relative overflow-hidden rounded-2xl sm:rounded-3xl border border-border bg-paper p-2.5 sm:p-3.5 lg:p-4 shadow-xs transition-all duration-300 ease-out hover:border-accent/40 motion-safe:hover:-translate-y-1.5">
                    {/* Realistic Operations Photo Container */}
                    <div className="relative aspect-16/10 w-full overflow-hidden rounded-xl sm:rounded-2xl bg-surface">
                      <Image
                        src={config.imageSrc}
                        alt={config.imageAlt}
                        fill
                        className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 50vw"
                        priority={i === 0}
                      />

                      {/* Subtle elegant gradient overlay */}
                      <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />

                      {/* Stage Tag & Interactive Metric Pill */}
                      <div className="pointer-events-none absolute bottom-2.5 left-2.5 right-2.5 sm:bottom-4 sm:left-4 sm:right-4 flex items-center justify-between gap-2">
                        <div className="inline-flex items-center gap-1.5 sm:gap-2 rounded-lg sm:rounded-xl bg-black/85 backdrop-blur-md px-2.5 sm:px-3 py-1 sm:py-1.5 text-[11px] sm:text-xs font-semibold text-white border border-white/15 shadow-xs min-w-0">
                          <span className="h-1.5 w-1.5 rounded-full bg-[#079455] animate-pulse shrink-0" />
                          <span className="truncate">{config.metricBadge}</span>
                        </div>
                        <div className="flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-full bg-white/20 backdrop-blur-md text-white border border-white/20 transition-all duration-300 group-hover:scale-110 group-hover:bg-accent group-hover:border-accent shrink-0">
                          <VisualIcon className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Connecting Downward Arrow between Stages */}
              {i < stages.length - 1 && (
                <div
                  className="flex items-center justify-center py-4 sm:py-6 md:py-8 lg:py-12"
                  aria-hidden="true"
                >
                  <div className="flex h-8 w-8 sm:h-9 sm:w-9 lg:h-10 lg:w-10 items-center justify-center rounded-full border border-border bg-paper text-accent/80 shadow-2xs transition-all duration-200 hover:scale-110 hover:border-accent/40 hover:text-accent hover:shadow-xs">
                    <ArrowDown className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
