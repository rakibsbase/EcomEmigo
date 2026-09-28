"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface TocItem {
  id: string;
  label: string;
  number: string;
}

interface LegalTocProps {
  items: TocItem[];
  title?: string;
}

export function LegalToc({
  items,
  title = "Table of Contents",
}: LegalTocProps) {
  const [activeId, setActiveId] = React.useState<string>(items[0]?.id || "");

  React.useEffect(() => {
    const observerCallback: IntersectionObserverCallback = (entries) => {
      const visibleEntries = entries.filter((entry) => entry.isIntersecting);
      if (visibleEntries.length > 0) {
        visibleEntries.sort(
          (a, b) => a.boundingClientRect.top - b.boundingClientRect.top,
        );
        setActiveId(visibleEntries[0].target.id);
      }
    };

    const observer = new IntersectionObserver(observerCallback, {
      rootMargin: "-15% 0px -60% 0px",
      threshold: [0, 0.1],
    });

    items.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) {
        observer.observe(el);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, [items]);

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
          {title}
        </h3>
        <span className="text-[11px] font-mono text-accent font-semibold">
          {items.length} Sections
        </span>
      </div>

      <nav
        className="space-y-1 text-xs sm:text-[13px] font-medium"
        aria-label="Legal Navigation Index"
      >
        {items.map(({ id, label, number }) => {
          const isActive = activeId === id;
          return (
            <a
              key={id}
              href={`#${id}`}
              onClick={(e) => handleScrollTo(e, id)}
              className={cn(
                "flex items-center gap-2.5 px-3 py-2 rounded-xl transition-all duration-150 group",
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
