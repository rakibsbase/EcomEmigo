"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ChevronDown, ArrowRight, X } from "lucide-react";
import { NavItem } from "@/types";
import { COMPANY, NAV_LINKS } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { SocialIcon } from "@/components/ui/social-icons";

interface NavbarProps {
  navLinks?: NavItem[];
}

export function Navbar({ navLinks = NAV_LINKS }: NavbarProps) {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [dropdownOpen, setDropdownOpen] = React.useState(false);
  const [desktopDropdownOpen, setDesktopDropdownOpen] = React.useState(false);
  const desktopCloseTimeoutRef = React.useRef<NodeJS.Timeout | null>(null);
  const desktopDropdownRef = React.useRef<HTMLDivElement>(null);

  const handleDesktopDropdownEnter = () => {
    if (desktopCloseTimeoutRef.current) {
      clearTimeout(desktopCloseTimeoutRef.current);
      desktopCloseTimeoutRef.current = null;
    }
    setDesktopDropdownOpen(true);
  };

  const handleDesktopDropdownLeave = () => {
    if (desktopCloseTimeoutRef.current) {
      clearTimeout(desktopCloseTimeoutRef.current);
    }
    desktopCloseTimeoutRef.current = setTimeout(() => {
      setDesktopDropdownOpen(false);
    }, 180);
  };

  // Cleanup desktop dropdown timeout on unmount
  React.useEffect(() => {
    return () => {
      if (desktopCloseTimeoutRef.current) {
        clearTimeout(desktopCloseTimeoutRef.current);
      }
    };
  }, []);

  // Close desktop dropdown on click outside
  React.useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        desktopDropdownRef.current &&
        !desktopDropdownRef.current.contains(e.target as Node)
      ) {
        setDesktopDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Throttled scroll listener with requestAnimationFrame
  React.useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 15);
          ticking = false;
        });
        ticking = true;
      }
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  React.useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [menuOpen]);

  // Close menus when route changes
  const prevPathRef = React.useRef(pathname);
  React.useEffect(() => {
    if (prevPathRef.current !== pathname) {
      prevPathRef.current = pathname;
      setMenuOpen(false);
      setDropdownOpen(false);
      setDesktopDropdownOpen(false);
    }
  }, [pathname]);

  // Close menu on Escape key
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMenuOpen(false);
        setDropdownOpen(false);
        setDesktopDropdownOpen(false);
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300 ease-in-out bg-paper",
        isScrolled
          ? "border-b border-border shadow-xs bg-paper/95 backdrop-blur-md py-3 sm:py-3.5"
          : "border-b border-border/60 py-4 sm:py-5",
      )}
    >
      <nav
        className="max-w-11/12 mx-auto flex items-center justify-between px-3 sm:px-6 w-full"
        aria-label="Main Navigation"
      >
        {/* Left Side: Brand Logo */}
        <div className="flex items-center gap-6 xl:gap-10">
          <Link
            href="/"
            className="flex items-center group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-lg shrink-0"
            aria-label={`${COMPANY.name} Home`}
          >
            <div className="relative h-7 w-37.5 sm:h-7.5 sm:w-40 md:h-8 md:w-43 lg:h-8.5 lg:w-46.25 transition-opacity group-hover:opacity-90">
              <Image
                src="/logos/logo_amigo.webp"
                alt={COMPANY.name}
                fill
                priority
                className="object-contain object-left brand-logo-img"
                sizes="(max-width: 640px) 150px, (max-width: 1024px) 172px, 185px"
              />
            </div>
          </Link>

          {/* Center / Left Desktop Navigation Links (lg+ viewports) */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navLinks.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname === link.href ||
                    pathname.startsWith(`${link.href}/`);

              // Services dropdown
              if (link.children && link.children.length > 0) {
                const isServicesActive =
                  isActive ||
                  link.children.some(
                    (c) =>
                      pathname === c.href ||
                      (c.href !== "/services" &&
                        pathname.startsWith(c.href.split("#")[0])),
                  );

                return (
                  <div
                    key={link.label}
                    ref={desktopDropdownRef}
                    className="relative"
                    onMouseEnter={handleDesktopDropdownEnter}
                    onMouseLeave={handleDesktopDropdownLeave}
                  >
                    <button
                      type="button"
                      onClick={() => {
                        if (desktopCloseTimeoutRef.current) {
                          clearTimeout(desktopCloseTimeoutRef.current);
                          desktopCloseTimeoutRef.current = null;
                        }
                        setDesktopDropdownOpen((prev) => !prev);
                      }}
                      className={cn(
                        "flex items-center gap-1.5 text-sm font-medium py-1.5 border-b-2 cursor-pointer transition-colors duration-150 focus-visible:outline-none focus-visible:text-accent",
                        isServicesActive
                          ? "text-accent font-semibold border-accent"
                          : "text-ink-muted hover:text-ink border-transparent hover:border-border",
                      )}
                      aria-expanded={desktopDropdownOpen}
                      aria-haspopup="true"
                    >
                      <span>{link.label}</span>
                      <ChevronDown
                        className={cn(
                          "w-4 h-4 transition-transform duration-200 text-ink-subtle",
                          desktopDropdownOpen ? "rotate-180" : "",
                        )}
                        aria-hidden="true"
                      />
                    </button>

                    {/* Desktop Dropdown Flyout with continuous hover bridge */}
                    {desktopDropdownOpen && (
                      <div
                        className="absolute top-full left-0 pt-2 w-72 z-50 animate-fade-in-overlay"
                        onMouseEnter={handleDesktopDropdownEnter}
                        onMouseLeave={handleDesktopDropdownLeave}
                      >
                        {/* Invisible bridge over the top gap */}
                        <div
                          className="absolute -top-3 left-0 right-0 h-3"
                          aria-hidden="true"
                        />

                        <div className="bg-paper border border-border rounded-2xl shadow-xl p-2">
                          <div className="space-y-1">
                            {link.children.map((sub) => {
                              const isSubActive = pathname === sub.href;
                              return (
                                <Link
                                  key={sub.label}
                                  href={sub.href}
                                  onClick={() => setDesktopDropdownOpen(false)}
                                  className={cn(
                                    "block px-3 py-2.5 rounded-xl text-xs transition-colors",
                                    isSubActive
                                      ? "bg-accent-subtle text-accent font-semibold"
                                      : "text-ink-muted hover:text-ink hover:bg-surface",
                                  )}
                                >
                                  <div className="font-semibold text-[13px]">
                                    {sub.label}
                                  </div>
                                  {sub.description && (
                                    <div className="text-[11px] text-ink-subtle line-clamp-1 mt-0.5">
                                      {sub.description}
                                    </div>
                                  )}
                                </Link>
                              );
                            })}
                          </div>
                          <div className="mt-2 pt-2 border-t border-border px-3 pb-1">
                            <Link
                              href="/services"
                              onClick={() => setDesktopDropdownOpen(false)}
                              className="text-xs font-semibold text-accent hover:text-accent-deep flex items-center justify-between"
                            >
                              <span>Explore All Services</span>
                              <ArrowRight className="w-3.5 h-3.5" />
                            </Link>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              // Standard Link (Home, How It Works, Case Studies, Pricing, About)
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "text-sm font-medium py-1.5 border-b-2 transition-colors duration-150 focus-visible:outline-none focus-visible:text-accent",
                    isActive
                      ? "text-accent font-semibold border-accent"
                      : "text-ink-muted hover:text-ink border-transparent hover:border-border",
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
        </div>

        {/* Right Side Controls: Theme Toggle + CTA Button + Mobile Menu Trigger */}
        <div className="flex items-center gap-3 sm:gap-4">
          <ThemeToggle />

          {/* Primary CTA (Desktop only - lg+) */}
          <Link
            href="/contact"
            className="hidden lg:inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-accent hover:bg-accent-deep text-white font-medium text-sm transition-all duration-300 ease-out shadow-xs hover:shadow-md hover:shadow-accent/25 active:scale-[0.98]"
          >
            <span>Get Your Free Audit</span>
            <ArrowRight className="w-4 h-4 shrink-0" aria-hidden="true" />
          </Link>

          {/* Mobile Hamburger Button (lg:hidden) */}
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            className="lg:hidden p-2 rounded-lg text-ink hover:bg-surface transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent cursor-pointer"
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span
                className={cn(
                  "h-0.5 w-full bg-current rounded-full transition-transform duration-300 origin-left",
                  menuOpen ? "rotate-45 translate-y-0.5" : "",
                )}
              />
              <span
                className={cn(
                  "h-0.5 w-full bg-current rounded-full transition-opacity duration-200",
                  menuOpen ? "opacity-0" : "",
                )}
              />
              <span
                className={cn(
                  "h-0.5 w-full bg-current rounded-full transition-transform duration-300 origin-left",
                  menuOpen ? "-rotate-45 -translate-y-0.5" : "",
                )}
              />
            </div>
          </button>
        </div>

        {/* Mobile Slide-Over Drawer: Opens Right to Left, Half Screen */}
        {menuOpen && (
          <div className="lg:hidden">
            {/* Backdrop Overlay */}
            <div
              className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs animate-fade-in-overlay"
              onClick={() => setMenuOpen(false)}
              aria-hidden="true"
            />

            {/* Slide-Over Drawer */}
            <div
              className="fixed top-0 right-0 h-dvh w-[80vw] sm:w-1/2 min-w-72 max-w-sm bg-paper shadow-2xl border-l border-border flex flex-col z-50 animate-drawer-in"
              role="dialog"
              aria-modal="true"
              aria-label="Navigation Menu"
            >
              {/* Drawer Top Header */}
              <div className="flex items-center justify-between px-5 py-4 border-b border-border shrink-0">
                <span className="text-xs font-bold uppercase tracking-wider text-ink-subtle">
                  Menu
                </span>
                <button
                  type="button"
                  onClick={() => setMenuOpen(false)}
                  aria-label="Close menu"
                  className="p-1.5 rounded-lg text-ink-muted hover:text-ink hover:bg-surface-hover transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Scrollable Nav Links */}
              <div className="flex-1 overflow-y-auto px-4 py-4 space-y-1">
                {navLinks.map((link) => {
                  const isActive =
                    link.href === "/"
                      ? pathname === "/"
                      : pathname === link.href ||
                        pathname.startsWith(`${link.href}/`);

                  // Mobile Dropdown for Services
                  if (link.children && link.children.length > 0) {
                    const isServicesActive =
                      isActive ||
                      link.children.some(
                        (c) =>
                          pathname === c.href ||
                          (c.href !== "/services" &&
                            pathname.startsWith(c.href.split("#")[0])),
                      );

                    return (
                      <div key={link.label} className="py-0.5">
                        <button
                          type="button"
                          onClick={() => setDropdownOpen(!dropdownOpen)}
                          className={cn(
                            "flex items-center justify-between w-full px-3.5 py-2.5 rounded-xl text-sm font-medium transition-colors text-left cursor-pointer",
                            isServicesActive
                              ? "text-accent font-semibold bg-accent-subtle"
                              : "text-ink hover:bg-surface",
                          )}
                        >
                          <span>{link.label}</span>
                          <ChevronDown
                            className={cn(
                              "w-4 h-4 transition-transform duration-200 text-ink-subtle",
                              dropdownOpen ? "rotate-180" : "",
                            )}
                          />
                        </button>
                        {dropdownOpen && (
                          <div className="flex flex-col pl-3 space-y-1 pt-1">
                            {link.children.map((sub) => {
                              const isSubActive = pathname === sub.href;
                              return (
                                <Link
                                  key={sub.label}
                                  href={sub.href}
                                  onClick={() => setMenuOpen(false)}
                                  className={cn(
                                    "px-3 py-2 rounded-lg text-xs transition-colors",
                                    isSubActive
                                      ? "text-accent font-semibold bg-accent-subtle"
                                      : "text-ink-muted hover:text-ink hover:bg-surface",
                                  )}
                                >
                                  {sub.label}
                                </Link>
                              );
                            })}
                            <Link
                              href="/services"
                              onClick={() => setMenuOpen(false)}
                              className="px-3 py-2 rounded-lg text-xs font-semibold text-accent hover:bg-accent-subtle transition-colors flex items-center justify-between"
                            >
                              <span>All Services</span>
                              <ArrowRight className="w-3.5 h-3.5" />
                            </Link>
                          </div>
                        )}
                      </div>
                    );
                  }

                  // Standard Link (Home, How It Works, Case Studies, Pricing, About)
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setMenuOpen(false)}
                      className={cn(
                        "block px-3.5 py-2.5 rounded-xl text-sm font-medium transition-colors",
                        isActive
                          ? "text-accent font-semibold bg-accent-subtle border-l-3 border-accent"
                          : "text-ink-muted hover:text-ink hover:bg-surface",
                      )}
                    >
                      {link.label}
                    </Link>
                  );
                })}
              </div>

              {/* Drawer Bottom CTA Area */}
              <div className="p-4 border-t border-border bg-surface/50 shrink-0 space-y-2.5">
                <Link
                  href="/contact"
                  onClick={() => setMenuOpen(false)}
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-accent hover:bg-accent-deep text-white font-semibold text-sm transition-all duration-300 ease-out shadow-xs active:scale-[0.98]"
                >
                  <span>Get Your Free Audit</span>
                  <ArrowRight className="w-4 h-4 shrink-0" />
                </Link>
                <Link
                  href="/services"
                  onClick={() => setMenuOpen(false)}
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-paper hover:bg-accent text-accent hover:text-white border border-accent/40 hover:border-accent font-semibold text-sm transition-all duration-300 ease-out shadow-2xs active:scale-[0.98]"
                >
                  <span>View Our Services</span>
                </Link>

                {/* Mobile Drawer Social Links */}
                <div className="flex items-center justify-center gap-3 pt-2">
                  {COMPANY.socialLinks.map((social) => (
                    <a
                      key={social.platform}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${COMPANY.name} on ${social.label}`}
                      title={`${COMPANY.name} on ${social.label}`}
                      className="w-8 h-8 rounded-full bg-paper border border-border flex items-center justify-center text-ink-muted hover:text-accent hover:border-accent/40 transition-colors shadow-2xs group"
                    >
                      <SocialIcon
                        platform={social.platform}
                        className="w-4 h-4 transition-transform group-hover:scale-110"
                      />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
