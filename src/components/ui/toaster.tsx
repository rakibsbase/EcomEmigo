"use client";

import * as React from "react";
import { useToast } from "@/hooks/use-toast";
import { CheckCircle2, AlertCircle, Info, X } from "lucide-react";
import { cn } from "@/lib/utils";

export function Toaster() {
  const { toasts, dismiss } = useToast();

  if (toasts.length === 0) return null;

  return (
    <aside
      aria-live="polite"
      aria-atomic="true"
      aria-label="Notifications"
      className="fixed bottom-4 right-4 z-[9999] flex flex-col gap-2.5 max-w-[420px] w-[calc(100vw-2rem)] pointer-events-none"
    >
      {toasts.map((item) => {
        const isSuccess = item.variant === "success";
        const isDestructive = item.variant === "destructive";
        const isDefault = !isSuccess && !isDestructive;

        return (
          <div
            key={item.id}
            role="alert"
            className={cn(
              "pointer-events-auto relative flex w-full items-start gap-3 rounded-2xl border p-4 shadow-2xl transition-all duration-300 animate-toast-in bg-paper text-ink",
              isSuccess &&
                "border-emerald-400/80 dark:border-emerald-500/50 shadow-emerald-500/10",
              isDestructive &&
                "border-red-400/80 dark:border-red-500/50 shadow-red-500/10",
              isDefault && "border-border shadow-black/10",
            )}
          >
            {/* Status Icon */}
            {isSuccess && (
              <div className="w-6 h-6 rounded-full bg-emerald-50 dark:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0 mt-0.5 border border-emerald-200/80 dark:border-emerald-500/30">
                <CheckCircle2 className="w-4 h-4" />
              </div>
            )}
            {isDestructive && (
              <div className="w-6 h-6 rounded-full bg-red-50 dark:bg-red-500/20 text-red-600 dark:text-red-400 flex items-center justify-center shrink-0 mt-0.5 border border-red-200/80 dark:border-red-500/30">
                <AlertCircle className="w-4 h-4" />
              </div>
            )}
            {isDefault && (
              <div className="w-6 h-6 rounded-full bg-accent-subtle text-accent flex items-center justify-center shrink-0 mt-0.5 border border-accent/20">
                <Info className="w-4 h-4" />
              </div>
            )}

            {/* Content */}
            <div className="grid gap-1 flex-1 pr-4">
              {item.title && (
                <div className="text-xs sm:text-sm font-bold font-heading leading-tight text-ink">
                  {item.title}
                </div>
              )}
              {item.description && (
                <div className="text-xs text-ink-muted leading-relaxed">
                  {item.description}
                </div>
              )}
            </div>

            {/* Close Button */}
            <button
              type="button"
              onClick={() => dismiss(item.id)}
              className="absolute right-3 top-3 rounded-lg p-1 text-ink-subtle hover:text-ink hover:bg-surface transition-colors cursor-pointer"
              aria-label="Dismiss notification"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        );
      })}
    </aside>
  );
}

export default Toaster;
