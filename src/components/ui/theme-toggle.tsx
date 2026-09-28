"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/components/theme-provider";
import { cn } from "@/lib/utils";

interface ThemeToggleProps {
  className?: string;
}

export function ThemeToggle({ className }: ThemeToggleProps) {
  const { resolvedTheme, toggleTheme } = useTheme();
  const mounted = React.useSyncExternalStore(
    () => () => {},
    () => true,
    () => false,
  );

  const isDark = mounted ? resolvedTheme === "dark" : false;

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={cn(
        "relative inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-surface/70 text-ink-muted transition-all duration-200 hover:bg-surface hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 cursor-pointer shadow-2xs",
        className,
      )}
      aria-label={
        mounted
          ? isDark
            ? "Switch to light mode"
            : "Switch to dark mode"
          : "Toggle theme"
      }
      title={
        mounted
          ? isDark
            ? "Switch to light mode"
            : "Switch to dark mode"
          : "Toggle theme"
      }
    >
      <Sun
        className={cn(
          "h-4 w-4 transition-all duration-300 transform",
          isDark
            ? "rotate-0 scale-100 opacity-100 text-amber-400"
            : "rotate-90 scale-0 opacity-0 absolute",
        )}
      />
      <Moon
        className={cn(
          "h-4 w-4 transition-all duration-300 transform",
          !isDark
            ? "rotate-0 scale-100 opacity-100 text-ink-muted"
            : "-rotate-90 scale-0 opacity-0 absolute",
        )}
      />
    </button>
  );
}
