"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Government", href: "/government" },
  { name: "Career", href: "/career" },
  { name: "Academy", href: "/ssm-academy" },
  { name: "Contact", href: "/contact" },
];

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className="fixed inset-x-0 top-0 z-50 transition-all duration-300"
      style={{
        backgroundColor: "var(--navbar-bg)",
        borderBottom: "1px solid var(--navbar-border)",
        boxShadow: scrolled ? "0 1px 16px rgba(0,0,0,0.08)" : "none",
        backdropFilter: scrolled ? "blur(12px)" : "none",
      }}
    >
      {/* Top bar: brand + actions */}
      <div
        className="border-b hidden lg:flex items-center justify-between px-8 xl:px-12 py-2"
        style={{ borderColor: "var(--surface-border)" }}
      >
        {/* Logo */}
        <Link href="/" className="flex flex-col leading-none group">
          <span
            className="text-xl font-extrabold tracking-tight uppercase editorial-heading"
            style={{ color: "var(--navbar-text)" }}
          >
            SSM Inc.
          </span>
          <span
            className="text-[11px] font-semibold tracking-[0.18em] uppercase"
            style={{ color: "var(--brand-blue)" }}
          >
            Security Systems Management
          </span>
        </Link>

        {/* Right: phone + theme toggle + CTA */}
        <div className="flex items-center gap-5">
          <a
            href="tel:5103639189"
            className="flex items-center gap-2 text-sm font-semibold transition-colors whitespace-nowrap"
            style={{ color: "var(--text-secondary)" }}
          >
            <Phone
              className="w-4 h-4 shrink-0"
              style={{ color: "var(--brand-blue)" }}
            />
            (510) 363-9189
          </a>
          <ThemeToggle />
          <Button asChild variant="primary" size="sm">
            <Link href="/contact">Get a Quote</Link>
          </Button>
        </div>
      </div>

      {/* Bottom bar: nav links */}
      <nav
        className="hidden lg:flex items-center justify-center gap-1 px-8 xl:px-12 py-0"
        aria-label="Main navigation"
      >
        {navigation.map((item) => {
          const isActive =
            pathname === item.href ||
            (item.href !== "/" && pathname?.startsWith(item.href));
          return (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "relative px-4 py-3 text-sm font-semibold transition-all duration-200 whitespace-nowrap group"
              )}
              style={{ color: isActive ? "var(--brand-blue)" : "var(--navbar-link)" }}
            >
              {item.name}
              {/* Active indicator */}
              <span
                className="absolute bottom-0 left-4 right-4 h-[2px] rounded-t-full transition-all duration-200"
                style={{
                  backgroundColor: "var(--brand-blue)",
                  opacity: isActive ? 1 : 0,
                  transform: isActive ? "scaleX(1)" : "scaleX(0)",
                }}
              />
              {/* Hover indicator */}
              {!isActive && (
                <span
                  className="absolute bottom-0 left-4 right-4 h-[2px] rounded-t-full opacity-0 group-hover:opacity-40 transition-opacity duration-200"
                  style={{ backgroundColor: "var(--brand-blue)" }}
                />
              )}
            </Link>
          );
        })}
      </nav>

      {/* ── Mobile bar ── */}
      <div className="lg:hidden flex items-center justify-between px-5 py-4">
        <Link href="/" className="flex flex-col leading-none">
          <span
            className="text-lg font-extrabold tracking-tight uppercase editorial-heading"
            style={{ color: "var(--navbar-text)" }}
          >
            SSM Inc.
          </span>
          <span
            className="text-[10px] font-semibold tracking-widest uppercase"
            style={{ color: "var(--brand-blue)" }}
          >
            Security Systems Management
          </span>
        </Link>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <button
            type="button"
            className="p-2 rounded-md transition-colors"
            style={{ color: "var(--text-secondary)" }}
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden" role="dialog" aria-modal="true">
          <div
            className="fixed inset-0 z-50"
            style={{ backgroundColor: "rgba(15,23,42,0.4)", backdropFilter: "blur(4px)" }}
            onClick={() => setMobileMenuOpen(false)}
          />
          <div
            className="fixed inset-y-0 right-0 z-50 w-full max-w-xs overflow-y-auto shadow-2xl flex flex-col"
            style={{ backgroundColor: "var(--surface)", borderLeft: "1px solid var(--surface-border)" }}
          >
            {/* Drawer header */}
            <div
              className="flex items-center justify-between px-6 py-5 border-b"
              style={{ borderColor: "var(--surface-border)" }}
            >
              <Link
                href="/"
                className="flex flex-col"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="text-lg font-extrabold tracking-tight uppercase editorial-heading" style={{ color: "var(--text-primary)" }}>
                  SSM Inc.
                </span>
                <span className="text-[10px] font-semibold tracking-widest uppercase" style={{ color: "var(--brand-blue)" }}>
                  Security Systems Management
                </span>
              </Link>
              <button
                type="button"
                className="p-2 rounded-md"
                style={{ color: "var(--text-secondary)" }}
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Close menu"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            {/* Drawer links */}
            <nav className="flex-1 px-4 py-6 space-y-1">
              {navigation.map((item) => {
                const isActive =
                  pathname === item.href ||
                  (item.href !== "/" && pathname?.startsWith(item.href));
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="flex items-center px-4 py-3 rounded-sm text-base font-semibold transition-colors"
                    style={{
                      color: isActive ? "var(--brand-blue)" : "var(--text-secondary)",
                      backgroundColor: isActive ? "var(--bg-muted)" : "transparent",
                    }}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {isActive && (
                      <span className="w-1.5 h-1.5 rounded-full mr-3 shrink-0" style={{ backgroundColor: "var(--brand-blue)" }} />
                    )}
                    {item.name}
                  </Link>
                );
              })}
            </nav>

            {/* Drawer footer */}
            <div
              className="px-6 py-6 border-t space-y-4"
              style={{ borderColor: "var(--surface-border)" }}
            >
              <a
                href="tel:5103639189"
                className="flex items-center gap-3 font-semibold"
                style={{ color: "var(--text-primary)" }}
              >
                <Phone className="w-5 h-5 shrink-0" style={{ color: "var(--brand-blue)" }} />
                (510) 363-9189
              </a>
              <Button asChild variant="primary" className="w-full">
                <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                  Get a Quote
                </Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
