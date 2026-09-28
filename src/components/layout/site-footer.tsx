import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { COMPANY } from "@/lib/constants";
import { MapPin, Mail, Phone, ArrowUpRight, ArrowRight } from "lucide-react";
import { SocialIcon } from "@/components/ui/social-icons";

export function SiteFooter() {
  return (
    <footer className="bg-surface text-ink border-t border-border-subtle">
      <div className="max-w-11/12 mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-8 pb-12 sm:pb-16 border-b border-border-subtle">
          {/* Brand & Contact Column */}
          <div className="md:col-span-6 lg:col-span-4 space-y-4">
            <Link
              href="/"
              className="flex items-center group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-lg inline-flex"
              aria-label={`${COMPANY.name} Home`}
            >
              <div className="relative h-10 w-55 transition-opacity group-hover:opacity-90">
                <Image
                  src="/logos/logo_amigo.webp"
                  alt={COMPANY.name}
                  fill
                  className="object-contain object-left brand-logo-img"
                  sizes="220px"
                />
              </div>
            </Link>

            <p className="text-xs sm:text-sm text-ink-muted max-w-sm leading-relaxed mt-4">
              {COMPANY.tagline}. High-rigor marketplace management across
              Amazon, TikTok Shop, Walmart, eBay, and Shopify for established
              store owners.
            </p>

            <div className="pt-2 space-y-2 text-xs text-ink-muted">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-3.5 h-3.5 text-accent shrink-0 mt-0.5" />
                <span className="leading-snug">{COMPANY.fullAddress}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-3.5 h-3.5 text-accent shrink-0" />
                <a
                  href={`mailto:${COMPANY.email}`}
                  className="hover:text-accent transition-colors"
                >
                  {COMPANY.email}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-3.5 h-3.5 text-accent shrink-0" />
                <a
                  href={`tel:${COMPANY.phone.replace(/[^+\d]/g, "")}`}
                  className="hover:text-accent transition-colors"
                >
                  {COMPANY.phone}
                </a>
              </div>
            </div>

            {/* Official Social Media Profiles */}
            <div className="pt-2">
              <span className="text-[11px] font-semibold text-ink uppercase tracking-wider block font-heading mb-2">
                Connect With Us
              </span>
              <div className="flex items-center gap-2.5">
                {COMPANY.socialLinks.map((social) => (
                  <a
                    key={social.platform}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Follow ${COMPANY.name} on ${social.label}`}
                    title={`${COMPANY.name} on ${social.label}`}
                    className="w-8 h-8 rounded-full bg-paper border border-border flex items-center justify-center text-ink-muted hover:text-accent hover:border-accent/40 hover:bg-accent-subtle transition-all duration-200 shadow-2xs hover:shadow-xs group"
                  >
                    <SocialIcon
                      platform={social.platform}
                      className="w-4 h-4 transition-transform duration-200 group-hover:scale-110"
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Nav Links: Company & Resources */}
          <div className="md:col-span-6 lg:col-span-4 grid grid-cols-2 gap-8">
            {/* Navigation Column 1: Company */}
            <div>
              <h3 className="text-xs font-bold text-ink tracking-wider uppercase mb-4 font-heading">
                Company
              </h3>
              <ul className="space-y-2.5 text-xs sm:text-sm">
                <li>
                  <Link
                    href="/about"
                    className="text-ink-muted hover:text-accent transition-colors inline-block"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services"
                    className="text-ink-muted hover:text-accent transition-colors inline-block"
                  >
                    Services &amp; Ops
                  </Link>
                </li>
                <li>
                  <Link
                    href="/pricing"
                    className="text-ink-muted hover:text-accent transition-colors inline-block"
                  >
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link
                    href="/how-it-works"
                    className="text-ink-muted hover:text-accent transition-colors inline-block"
                  >
                    How It Works
                  </Link>
                </li>
              </ul>
            </div>

            {/* Navigation Column 2: Resources */}
            <div>
              <h3 className="text-xs font-bold text-ink tracking-wider uppercase mb-4 font-heading">
                Resources
              </h3>
              <ul className="space-y-2.5 text-xs sm:text-sm">
                <li>
                  <Link
                    href="/case-studies"
                    className="text-ink-muted hover:text-accent transition-colors inline-block"
                  >
                    Case Studies
                  </Link>
                </li>
                <li>
                  <Link
                    href="/faq"
                    className="text-ink-muted hover:text-accent transition-colors inline-block"
                  >
                    Frequently Asked Questions
                  </Link>
                </li>
                <li>
                  <a
                    href={COMPANY.calLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-ink-muted hover:text-accent transition-colors inline-flex items-center gap-1"
                  >
                    Discovery Call
                    <ArrowUpRight className="w-3 h-3 text-accent" />
                  </a>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-ink-muted hover:text-accent transition-colors inline-block"
                  >
                    Contact Support
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Column 3: Conversion Action Card */}
          <div className="md:col-span-12 lg:col-span-4">
            <div className="bg-paper rounded-2xl border border-border p-5 sm:p-6 shadow-xs flex flex-col justify-between h-full">
              <div className="space-y-2">
                <span className="text-xs font-bold text-accent uppercase tracking-wider block font-heading">
                  Confidential Diagnostic
                </span>
                <h3 className="text-xs font-bold text-ink tracking-wider uppercase font-heading">
                  Request a Free Store Audit
                </h3>
                <p className="text-xs text-ink-muted leading-relaxed">
                  Uncover suppressed keywords, Buy Box leakages, and ad spend
                  waste across your current sales channels.
                </p>
              </div>

              <div className="pt-4 sm:pt-5">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center w-full h-10 px-5 text-xs font-semibold rounded-full bg-accent text-white hover:bg-accent-deep shadow-xs transition-all group"
                >
                  <span>Request Free Audit</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-ink-subtle text-center sm:text-left">
          <p>
            © {new Date().getFullYear()} {COMPANY.legalName}. All rights
            reserved.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs">
            <Link
              href="/privacy-policy"
              className="text-ink-muted hover:text-ink transition-colors"
            >
              Privacy Policy
            </Link>
            <span className="text-border" aria-hidden="true">
              •
            </span>
            <Link
              href="/terms-of-service"
              className="text-ink-muted hover:text-ink transition-colors"
            >
              Terms of Service
            </Link>
            <span className="text-border" aria-hidden="true">
              •
            </span>
            <Link
              href="/sitemap"
              className="text-ink-muted hover:text-ink transition-colors"
            >
              HTML Sitemap
            </Link>
            <span className="text-border" aria-hidden="true">
              •
            </span>
            <span className="text-ink-subtle">{COMPANY.location}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
