import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FAQItem } from "@/types";

interface FAQAccordionProps {
  items: FAQItem[];
  defaultOpenId?: string;
}

export function FAQAccordion({ items, defaultOpenId }: FAQAccordionProps) {
  return (
    <Accordion
      type="single"
      collapsible
      defaultValue={defaultOpenId}
      className="w-full space-y-3 sm:space-y-3.5"
    >
      {items.map((item, idx) => {
        const cleanAnswer = item.answer.replace(
          "// TODO: client to approve final copy\n",
          "",
        );

        return (
          <AccordionItem
            key={item.id}
            value={item.id}
            className="rounded-xl sm:rounded-2xl bg-paper border border-border hover:border-accent/40 hover:shadow-xs data-[state=open]:border-accent/50 data-[state=open]:shadow-xs transition-all duration-200 px-4 sm:px-6 lg:px-7 overflow-hidden"
          >
            <AccordionTrigger className="cursor-pointer text-left font-heading font-semibold text-xs sm:text-sm md:text-base text-ink hover:text-accent py-3.5 sm:py-4.5 transition-colors duration-200 hover:no-underline">
              <span className="flex items-start gap-2.5 sm:gap-3 pr-2 sm:pr-4">
                <span className="w-6 h-6 sm:w-7 sm:h-7 rounded-lg bg-accent-subtle text-accent text-[11px] sm:text-xs font-bold font-mono flex items-center justify-center shrink-0 mt-0.5">
                  {idx < 9 ? `0${idx + 1}` : idx + 1}
                </span>
                <span className="leading-snug pt-0.5">{item.question}</span>
              </span>
            </AccordionTrigger>
            <AccordionContent className="text-xs sm:text-[13px] text-ink-muted leading-relaxed pb-4 sm:pb-5 pt-2 sm:pt-2.5 pl-0 sm:pl-9 lg:pl-10 border-t border-border mt-1">
              <p>{cleanAnswer}</p>
            </AccordionContent>
          </AccordionItem>
        );
      })}
    </Accordion>
  );
}
