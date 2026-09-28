"use client";

import * as React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  auditFormSchema,
  AuditFormSchemaType,
  MARKETPLACE_OPTIONS,
  MONTHLY_SALES_OPTIONS,
} from "@/lib/validations";
import { submitAuditRequest } from "../actions";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  CheckCircle2,
  AlertCircle,
  Loader2,
  ArrowRight,
  ShieldCheck,
  Calendar,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

export function AuditForm() {
  const { toast } = useToast();
  const [serverError, setServerError] = React.useState<string | null>(null);
  const [isSuccess, setIsSuccess] = React.useState(false);
  const [successMessage, setSuccessMessage] = React.useState<string>("");
  const [mountTime, setMountTime] = React.useState<number>(0);
  const [isOtherSelected, setIsOtherSelected] = React.useState(false);
  const [otherCustomValue, setOtherCustomValue] = React.useState("");

  React.useEffect(() => {
    setMountTime(Date.now());
  }, []);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<AuditFormSchemaType>({
    resolver: zodResolver(auditFormSchema),
    defaultValues: {
      fullName: "",
      companyName: "",
      email: "",
      phone: "",
      websiteUrl: "",
      marketplaces: [],
      monthlySales: "",
      helpNeeds: "",
      websiteConfirmEmpty: "",
    },
  });

  const selectedMarketplaces = watch("marketplaces") || [];
  const selectedMonthlySales = watch("monthlySales");

  const toggleMarketplace = (m: string) => {
    const current = [...selectedMarketplaces];
    const index = current.indexOf(m);
    if (index > -1) {
      current.splice(index, 1);
    } else {
      current.push(m);
    }
    setValue("marketplaces", current, { shouldValidate: true });
  };

  const toggleOtherMarketplace = () => {
    if (isOtherSelected) {
      const filtered = selectedMarketplaces.filter(
        (m) => !m.startsWith("Other") && m !== "Other",
      );
      setIsOtherSelected(false);
      setOtherCustomValue("");
      setValue("marketplaces", filtered, { shouldValidate: true });
    } else {
      setIsOtherSelected(true);
      const otherLabel = otherCustomValue.trim()
        ? `Other: ${otherCustomValue.trim()}`
        : "Other";
      setValue("marketplaces", [...selectedMarketplaces, otherLabel], {
        shouldValidate: true,
      });
    }
  };

  const handleOtherInputChange = (val: string) => {
    setOtherCustomValue(val);
    const standardSelected = selectedMarketplaces.filter(
      (m) => !m.startsWith("Other") && m !== "Other",
    );
    const otherLabel = val.trim() ? `Other: ${val.trim()}` : "Other";
    setValue("marketplaces", [...standardSelected, otherLabel], {
      shouldValidate: true,
    });
  };

  const onSubmit = async (values: AuditFormSchemaType) => {
    setServerError(null);
    try {
      const payload: AuditFormSchemaType = {
        ...values,
        submitTimestamp: mountTime,
      };

      const result = await submitAuditRequest(payload);

      if (result.success) {
        setIsSuccess(true);
        setSuccessMessage(result.message);
        setIsOtherSelected(false);
        setOtherCustomValue("");
        reset();
        toast({
          variant: "success",
          title: "Store Audit Request Received",
          description:
            result.message ||
            "Thank you! Our operations specialists will review your store catalog and reach out within 24–48 hours.",
        });
      } else {
        setServerError(result.message);
        toast({
          variant: "destructive",
          title: "Submission Incomplete",
          description:
            result.message ||
            "Please check the highlighted fields and try again.",
        });
      }
    } catch (err: unknown) {
      console.error("[AuditForm Submission Error]", err);
      const errorMsg =
        err instanceof Error && err.message
          ? err.message
          : "An unexpected error occurred. Please try again or reach out directly.";
      setServerError(errorMsg);
      toast({
        variant: "destructive",
        title: "Submission Error",
        description: errorMsg,
      });
    }
  };

  const onInvalid = () => {
    toast({
      variant: "destructive",
      title: "Missing Required Fields",
      description:
        "Please check the highlighted fields and complete all required inputs.",
    });
  };

  if (isSuccess) {
    return (
      <div className="bg-paper rounded-2xl border border-border p-5 sm:p-8 shadow-xs space-y-5 animate-in fade-in duration-300">
        <div className="w-11 h-11 rounded-xl bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center border border-emerald-200/80 dark:border-emerald-500/20">
          <CheckCircle2 className="w-6 h-6" />
        </div>
        <div className="space-y-1.5">
          <h3 className="text-lg sm:text-xl font-bold text-ink font-heading">
            Store Audit Request Received
          </h3>
          <p className="text-xs sm:text-sm text-ink-muted leading-relaxed max-w-xl">
            {successMessage ||
              "Thank you. Our senior marketplace operations specialists are reviewing your catalog and ad structure. We will deliver your confidential diagnostic report within 24–48 business hours."}
          </p>
        </div>

        <div className="bg-surface p-4 sm:p-5 rounded-xl border border-border space-y-2 text-xs text-ink-muted">
          <span className="font-semibold text-ink block uppercase tracking-wider text-[11px] font-heading">
            What Happens Next:
          </span>
          <p className="flex items-start gap-2">
            <span className="font-bold text-accent">1.</span>
            <span>
              Forensic catalog inspection for suppressed ASINs, titles, and
              indexing gaps.
            </span>
          </p>
          <p className="flex items-start gap-2">
            <span className="font-bold text-accent">2.</span>
            <span>
              TACoS and ad spend leakage diagnostic across active marketplace
              campaigns.
            </span>
          </p>
          <p className="flex items-start gap-2">
            <span className="font-bold text-accent">3.</span>
            <span>
              Executive debrief call with our California operations lead to walk
              through findings.
            </span>
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 pt-1">
          <a
            href="#schedule"
            className={cn(
              buttonVariants({ variant: "primary" }),
              "w-full sm:w-auto px-5 gap-2",
            )}
          >
            <Calendar className="w-3.5 h-3.5 shrink-0" />
            <span>Schedule Debrief Call Now</span>
          </a>
          <button
            type="button"
            onClick={() => setIsSuccess(false)}
            className="inline-flex items-center justify-center h-11 px-5 text-xs sm:text-sm font-semibold rounded-full border border-border text-ink hover:bg-surface transition-colors cursor-pointer"
          >
            Submit Another Store URL
          </button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit, onInvalid)}
      className="bg-paper rounded-2xl border border-border p-4 sm:p-5 lg:p-7 shadow-xs space-y-3.5 sm:space-y-4"
      noValidate
    >
      {/* Server Error Alert */}
      {serverError && (
        <div
          role="alert"
          className="p-3 rounded-xl bg-red-50 dark:bg-red-500/10 border border-red-200 dark:border-red-500/20 flex items-start gap-2.5 text-xs text-red-700 dark:text-red-400"
        >
          <AlertCircle className="w-4 h-4 shrink-0 mt-0.5 text-red-600 dark:text-red-400" />
          <span className="font-medium">{serverError}</span>
        </div>
      )}

      {/* Honeypot Anti-Spam (hidden from users) */}
      <div style={{ display: "none" }} aria-hidden="true">
        <label htmlFor="websiteConfirmEmpty">Confirm Empty</label>
        <input
          id="websiteConfirmEmpty"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          {...register("websiteConfirmEmpty")}
        />
      </div>

      {/* ─────────────────────────────────────────────
          CONTACT & BRAND DETAILS
      ───────────────────────────────────────────── */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-3.5">
        {/* Full Name */}
        <div className="space-y-1">
          <label
            htmlFor="fullName"
            className="text-xs font-medium text-ink flex items-center gap-1"
          >
            <span>Full Name</span>
            <span className="text-red-500 font-semibold">*</span>
          </label>
          <Input
            id="fullName"
            type="text"
            placeholder="e.g. Marcus Vance"
            {...register("fullName")}
            aria-invalid={errors.fullName ? "true" : "false"}
            className={cn(
              "h-10 sm:h-11 text-xs sm:text-sm",
              errors.fullName &&
                "border-red-400 bg-red-50/20 focus-visible:ring-red-400",
            )}
          />
          {errors.fullName && (
            <p className="text-[11px] text-red-600 dark:text-red-400 font-medium">
              {errors.fullName.message}
            </p>
          )}
        </div>

        {/* Company / Brand Name */}
        <div className="space-y-1">
          <label
            htmlFor="companyName"
            className="text-xs font-medium text-ink flex items-center gap-1"
          >
            <span>Company / Brand Name</span>
            <span className="text-red-500 font-semibold">*</span>
          </label>
          <Input
            id="companyName"
            type="text"
            placeholder="e.g. Apex Gear Co."
            {...register("companyName")}
            aria-invalid={errors.companyName ? "true" : "false"}
            className={cn(
              "h-10 sm:h-11 text-xs sm:text-sm",
              errors.companyName &&
                "border-red-400 bg-red-50/20 focus-visible:ring-red-400",
            )}
          />
          {errors.companyName && (
            <p className="text-[11px] text-red-600 dark:text-red-400 font-medium">
              {errors.companyName.message}
            </p>
          )}
        </div>

        {/* Business Email */}
        <div className="space-y-1">
          <label
            htmlFor="email"
            className="text-xs font-medium text-ink flex items-center gap-1"
          >
            <span>Business Email</span>
            <span className="text-red-500 font-semibold">*</span>
          </label>
          <Input
            id="email"
            type="email"
            placeholder="e.g. marcus@brand.com"
            {...register("email")}
            aria-invalid={errors.email ? "true" : "false"}
            className={cn(
              "h-10 sm:h-11 text-xs sm:text-sm",
              errors.email &&
                "border-red-400 bg-red-50/20 focus-visible:ring-red-400",
            )}
          />
          {errors.email && (
            <p className="text-[11px] text-red-600 dark:text-red-400 font-medium">
              {errors.email.message}
            </p>
          )}
        </div>

        {/* Phone Number */}
        <div className="space-y-1">
          <label
            htmlFor="phone"
            className="text-xs font-medium text-ink flex items-center gap-1"
          >
            <span>Phone Number</span>
            <span className="text-red-500 font-semibold">*</span>
          </label>
          <Input
            id="phone"
            type="tel"
            placeholder="e.g. (619) 771-2691"
            {...register("phone")}
            aria-invalid={errors.phone ? "true" : "false"}
            className={cn(
              "h-10 sm:h-11 text-xs sm:text-sm",
              errors.phone &&
                "border-red-400 bg-red-50/20 focus-visible:ring-red-400",
            )}
          />
          {errors.phone && (
            <p className="text-[11px] text-red-600 dark:text-red-400 font-medium">
              {errors.phone.message}
            </p>
          )}
        </div>

        {/* Website / Storefront URL (Spans full width) */}
        <div className="space-y-1 sm:col-span-2">
          <label
            htmlFor="websiteUrl"
            className="text-xs font-medium text-ink flex items-center gap-1"
          >
            <span>Website or Storefront URL</span>
            <span className="text-red-500 font-semibold">*</span>
          </label>
          <Input
            id="websiteUrl"
            type="url"
            placeholder="e.g. https://amazon.com/shops/yourbrand or https://yourbrand.com"
            {...register("websiteUrl")}
            aria-invalid={errors.websiteUrl ? "true" : "false"}
            className={cn(
              "h-10 sm:h-11 text-xs sm:text-sm",
              errors.websiteUrl &&
                "border-red-400 bg-red-50/20 focus-visible:ring-red-400",
            )}
          />
          {errors.websiteUrl && (
            <p className="text-[11px] text-red-600 dark:text-red-400 font-medium">
              {errors.websiteUrl.message}
            </p>
          )}
        </div>
      </div>

      {/* ─────────────────────────────────────────────
          PRIMARY MARKETPLACES (PILLS + CUSTOM OTHER BOX)
      ───────────────────────────────────────────── */}
      <div className="space-y-1.5 pt-1">
        <div className="flex items-center justify-between">
          <label className="text-xs font-medium text-ink flex items-center gap-1">
            <span>Primary Marketplaces</span>
            <span className="text-red-500 font-semibold">*</span>
          </label>
          <span className="text-[11px] text-ink-subtle font-medium">
            Select all that apply
          </span>
        </div>

        <div className="flex flex-wrap gap-1.5 sm:gap-2">
          {MARKETPLACE_OPTIONS.map((marketplace) => {
            const isSelected = selectedMarketplaces.includes(marketplace);
            return (
              <button
                key={marketplace}
                type="button"
                onClick={() => toggleMarketplace(marketplace)}
                aria-pressed={isSelected}
                className={cn(
                  "inline-flex items-center gap-1.5 rounded-full px-3.5 py-2 text-xs font-medium border transition-all duration-200 cursor-pointer select-none",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2",
                  isSelected
                    ? "bg-accent text-white border-accent shadow-xs"
                    : "bg-surface text-ink-muted border-border hover:bg-surface-hover hover:border-border-clean hover:text-ink",
                )}
              >
                <span>{marketplace}</span>
                {isSelected && (
                  <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                )}
              </button>
            );
          })}

          {/* "+ Other" Pill Button */}
          <button
            type="button"
            onClick={toggleOtherMarketplace}
            aria-pressed={isOtherSelected}
            className={cn(
              "inline-flex items-center gap-1.5 rounded-full px-3.5 py-2 text-xs font-medium border transition-all duration-200 cursor-pointer select-none",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2",
              isOtherSelected
                ? "bg-accent text-white border-accent shadow-xs"
                : "bg-surface text-ink-muted border-border hover:bg-surface-hover hover:border-border-clean hover:text-ink",
            )}
          >
            <span>+ Other</span>
            {isOtherSelected && (
              <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
            )}
          </button>
        </div>

        {/* Custom Marketplace Input Box (appears smoothly when + Other is selected) */}
        {isOtherSelected && (
          <div className="pt-1.5 animate-in fade-in slide-in-from-top-1 duration-200">
            <Input
              type="text"
              placeholder="Specify platform(s), e.g. Etsy, Target Plus, WooCommerce, Faire..."
              value={otherCustomValue}
              onChange={(e) => handleOtherInputChange(e.target.value)}
              className="h-9 sm:h-10 text-xs sm:text-sm"
              autoFocus
            />
          </div>
        )}

        {errors.marketplaces && (
          <p className="text-[11px] text-red-600 dark:text-red-400 font-medium">
            {errors.marketplaces.message}
          </p>
        )}
      </div>

      {/* ─────────────────────────────────────────────
          MONTHLY SALES VOLUME
      ───────────────────────────────────────────── */}
      <div className="space-y-1.5 pt-1">
        <label className="text-xs font-medium text-ink flex items-center gap-1">
          <span>Monthly Sales Volume</span>
          <span className="text-red-500 font-semibold">*</span>
        </label>

        <div className="flex flex-wrap gap-1.5 sm:gap-2">
          {MONTHLY_SALES_OPTIONS.map((option) => {
            const isSelected = selectedMonthlySales === option;
            return (
              <label
                key={option}
                className={cn(
                  "relative rounded-full px-3.5 py-2 text-xs font-medium border cursor-pointer transition-all duration-200 flex items-center gap-1.5 select-none",
                  "focus-within:ring-2 focus-within:ring-accent focus-within:ring-offset-2",
                  isSelected
                    ? "bg-accent text-white border-accent shadow-xs"
                    : "bg-surface text-ink-muted border-border hover:bg-surface-hover hover:border-border-clean hover:text-ink",
                )}
              >
                <input
                  type="radio"
                  value={option}
                  {...register("monthlySales")}
                  className="sr-only"
                />
                <span>{option}</span>
                {isSelected && (
                  <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                )}
              </label>
            );
          })}
        </div>
        {errors.monthlySales && (
          <p className="text-[11px] text-red-600 dark:text-red-400 font-medium">
            {errors.monthlySales.message}
          </p>
        )}
      </div>

      {/* ─────────────────────────────────────────────
          WHAT DO YOU NEED HELP WITH?
      ───────────────────────────────────────────── */}
      <div className="space-y-1 pt-1">
        <label
          htmlFor="helpNeeds"
          className="text-xs font-medium text-ink flex items-center gap-1"
        >
          <span>What do you need help with?</span>
          <span className="text-red-500 font-semibold">*</span>
        </label>

        <Textarea
          id="helpNeeds"
          rows={3}
          placeholder="e.g. Doing $45k/mo on Amazon with high TACoS. Looking to optimize listings, fix Buy Box suppression, and expand our catalog to TikTok Shop and Walmart."
          {...register("helpNeeds")}
          aria-invalid={errors.helpNeeds ? "true" : "false"}
          className={cn(
            "min-h-18.75 sm:min-h-21.25 py-2.5 text-xs sm:text-sm leading-relaxed",
            errors.helpNeeds &&
              "border-red-400 bg-red-50/20 focus-visible:ring-red-400",
          )}
        />
        {errors.helpNeeds && (
          <p className="text-[11px] text-red-600 dark:text-red-400 font-medium mt-0.5">
            {errors.helpNeeds.message}
          </p>
        )}
      </div>

      {/* ─────────────────────────────────────────────
          SUBMIT ACTION & PRIVACY DISCLAIMER
      ───────────────────────────────────────────── */}
      <div className="pt-3.5 border-t border-border flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 sm:gap-4">
        <button
          type="submit"
          disabled={isSubmitting}
          className={cn(
            buttonVariants({ variant: "primary" }),
            "w-full sm:w-auto px-6 sm:px-8",
          )}
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin shrink-0" />
              <span>Analyzing Storefront...</span>
            </>
          ) : (
            <>
              <span>Request Free Store Audit</span>
              <ArrowRight className="w-4 h-4 shrink-0" />
            </>
          )}
        </button>

        <div className="flex items-center justify-center sm:justify-start gap-1.5 text-xs text-ink-subtle leading-tight text-center sm:text-left">
          <ShieldCheck className="w-3.5 h-3.5 text-accent shrink-0" />
          <span>Protected under mutual NDA. Zero obligation.</span>
        </div>
      </div>
    </form>
  );
}
