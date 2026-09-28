import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  tagline?: string;
  title: string;
  description?: string;
  centered?: boolean;
  className?: string;
}

export function SectionHeading({
  tagline,
  title,
  description,
  centered = false,
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "space-y-3 mb-12",
        {
          "text-center max-w-2xl mx-auto": centered,
          "max-w-3xl text-left": !centered,
        },
        className,
      )}
    >
      {tagline && (
        <div
          className={cn(
            "flex items-center gap-2",
            centered && "justify-center",
          )}
        >
          <div className="w-2.5 h-2.5 rounded-xs bg-accent" />
          <span className="text-xs font-semibold text-accent tracking-tight">
            {tagline}
          </span>
        </div>
      )}
      <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-semibold text-ink tracking-tight leading-[1.2] font-heading">
        {title}
      </h2>
      {description && (
        <p className="text-base sm:text-lg text-ink-muted leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
