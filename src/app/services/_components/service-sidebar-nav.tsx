"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface SectionItem {
  id: string;
  label: string;
  number: string;
}

interface ServiceSidebarNavProps {
  sections: SectionItem[];
}

export function ServiceSidebarNav({ sections }: ServiceSidebarNavProps) {
  const [activeId, setActiveId] = React.useState<string>(sections[0]?.id || "");

  React.useEffect(() => {
    const observerCallback: IntersectionObserverCallback = (entries) => {
      // Find the first section that is intersecting or closest to top
      const visibleEntries = entries.filter((entry) => entry.isIntersecting);
      if (visibleEntries.length > 0) {
        // Sort by bounding top to pick the one currently in reading view
        visibleEntries.sort(
          (a, b) => a.boundingClientRect.top - b.boundingClientRect.top,
        );
        setActiveId(visibleEntries[0].target.id);
      }
    };

    const observer = new IntersectionObserver(observerCallback, {
      rootMargin: "-20% 0px -55% 0px",
      threshold: [0, 0.1, 0.25],
    });

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) {
        observer.observe(el);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, [sections]);

  const handleScrollTo = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string,
  ) => {
    e.preventDefault();
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveId(id);
      if (window.history.pushState) {
        window.history.pushState(null, "", `#${id}`);
      }
    }
  };

  return (
    <div className="p-5 sm:p-6 rounded-2xl bg-surface border border-border space-y-3.5 shadow-2xs">
      <div className="flex items-center justify-between pb-2 border-b border-border-subtle">
        <h3 className="text-xs font-bold uppercase tracking-wider text-ink-subtle font-heading">
          Service Scope &amp; Details
        </h3>
        <span className="text-[11px] font-mono text-accent font-semibold">
          Scroll Index
        </span>
      </div>

      <nav
        className="space-y-1 text-xs sm:text-[13px] font-medium"
        aria-label="Table of Contents"
      >
        {sections.map(({ id, label, number }) => {
          const isActive = activeId === id;
          return (
            <a
              key={id}
              href={`#${id}`}
              onClick={(e) => handleScrollTo(e, id)}
              className={cn(
                "flex items-center gap-2 px-2.5 py-2 rounded-xl transition-all duration-150 group",
                isActive
                  ? "bg-accent-subtle text-accent font-bold shadow-2xs"
                  : "text-ink-muted hover:text-ink hover:bg-surface-hover",
              )}
            >
              <span
                className={cn(
                  "font-mono text-[11px] shrink-0 transition-colors",
                  isActive
                    ? "text-accent font-bold"
                    : "text-ink-subtle group-hover:text-ink",
                )}
              >
                {number}
              </span>
              <span className="truncate">{label}</span>
            </a>
          );
        })}
      </nav>
    </div>
  );
}
