import * as React from "react";
import { cn } from "@/lib/utils";

export type ButtonVariant =
  | "primary"
  | "secondary"
  | "tertiary"
  | "outline"
  | "ghost"
  | "dark"
  | "outline-white";

export type ButtonSize = "sm" | "md" | "lg";

export interface ButtonVariantOptions {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
}

export function buttonVariants({
  variant = "primary",
  size = "md",
  className,
}: ButtonVariantOptions = {}) {
  const isSecondary = variant === "secondary" || variant === "dark";
  const isTertiary = variant === "tertiary";

  return cn(
    // Base styles across all variants: full pill shape, centered inline-flex, zero layout shift, smooth premium transition
    "inline-flex items-center justify-center rounded-full transition-all duration-300 ease-out cursor-pointer select-none text-center disabled:opacity-50 disabled:pointer-events-none group active:scale-[0.98]",
    // Accessible focus visible ring
    variant === "outline-white"
      ? "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-ink"
      : "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 dark:focus-visible:ring-offset-background",
    // Variants
    {
      // Primary: solid accent-blue pill with subtle shadow lift and depth
      "bg-accent text-white hover:bg-accent-deep hover:text-white shadow-xs hover:shadow-md hover:shadow-accent/25 border border-transparent":
        variant === "primary",

      // Secondary: outlined accent pill that smoothly fills on hover (crisp text in both light and dark modes)
      "bg-paper text-accent border border-accent/30 hover:bg-accent hover:text-white hover:border-accent shadow-2xs hover:shadow-xs dark:bg-surface dark:text-accent dark:border-accent/40 dark:hover:bg-accent dark:hover:text-white dark:hover:border-accent":
        isSecondary,

      // Tertiary: soft surface chip with subtle hairline border and calibrated compact weight
      "bg-surface hover:bg-surface-hover text-ink-muted hover:text-ink border border-border hover:border-border-clean shadow-2xs hover:shadow-xs":
        isTertiary,

      // Outline White: for dark hero/CTA bands with deep backgrounds
      "bg-transparent text-white border border-white/25 hover:bg-white hover:text-ink hover:border-white shadow-xs hover:shadow-md":
        variant === "outline-white",

      // Outline: transparent with neutral border
      "bg-transparent border border-border text-ink hover:bg-surface hover:text-ink hover:border-ink/20 shadow-2xs":
        variant === "outline",

      // Ghost: frameless with hover surface
      "bg-transparent text-ink-muted hover:text-ink hover:bg-surface":
        variant === "ghost",
    },
    // Sizes
    {
      "h-9 sm:h-10 px-4 text-xs font-medium gap-1.5": size === "sm",
      "h-11 sm:h-12 px-6 sm:px-7 text-sm font-semibold gap-2":
        size === "md" && !isTertiary,
      "h-11 sm:h-12 px-4 sm:px-5 text-xs sm:text-sm font-medium gap-2":
        size === "md" && isTertiary,
      "h-12 sm:h-14 px-7 sm:px-8 text-base font-semibold gap-2.5":
        size === "lg",
    },
    className,
  );
}

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={buttonVariants({ variant, size, className })}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";
