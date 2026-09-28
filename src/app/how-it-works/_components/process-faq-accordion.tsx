"use client";

import * as React from "react";
import { ChevronDown } from "lucide-react";

interface FaqItem {
  question: string;
  answer: string;
}

interface ProcessFaqAccordionProps {
  items: FaqItem[];
}

export function ProcessFaqAccordion({ items }: ProcessFaqAccordionProps) {
  const [openIndex, setOpenIndex] = React.useState<number | null>(0);

  const toggleIndex = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className="space-y-4 w-full">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={index}
            className="bg-paper rounded-2xl border border-border overflow-hidden shadow-xs transition-colors"
          >
            <button
              type="button"
              onClick={() => toggleIndex(index)}
              className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent cursor-pointer"
              aria-expanded={isOpen}
            >
              <h3 className="font-bold text-ink text-base sm:text-lg font-heading pr-2">
                {item.question}
              </h3>
              <div className="w-8 h-8 rounded-full bg-surface flex items-center justify-center shrink-0">
                <ChevronDown
                  className={`w-4 h-4 text-accent transition-transform duration-200 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                />
              </div>
            </button>
            {isOpen && (
              <div className="px-5 pb-5 sm:px-6 sm:pb-6 text-xs sm:text-sm text-ink-muted leading-relaxed border-t border-border/60 pt-4">
                {item.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
