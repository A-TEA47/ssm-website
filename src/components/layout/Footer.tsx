import React from "react";
import Link from "next/link";
import { Container } from "./Container";
import { Phone, Mail, MapPin, Shield } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="pt-16 pb-8 text-sm border-t transition-colors"
      style={{
        backgroundColor: "var(--footer-bg)",
        borderColor: "var(--footer-border)",
      }}
    >
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand & Mission */}
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-bold tracking-tight uppercase editorial-heading mb-1" style={{ color: "var(--footer-heading)" }}>
                SSM Inc.
              </h3>
              <p className="text-xs font-medium tracking-widest uppercase" style={{ color: "var(--footer-accent)" }}>
                Security Systems Management
              </p>
            </div>
            <p className="leading-relaxed" style={{ color: "var(--footer-text)" }}>
              "To Protect with Courage, To Serve with Compassion"
            </p>
            <p className="leading-relaxed" style={{ color: "var(--footer-text)" }}>
              Providing trusted, top-quality security and facilities management services to government, commercial, and residential clients since 2013.
            </p>
            <div className="flex items-center gap-2 font-medium mt-4" style={{ color: "var(--footer-accent)" }}>
              <Shield className="w-5 h-5" />
              <span>Licensed & Insured</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-6 editorial-heading text-lg" style={{ color: "var(--footer-heading)" }}>Quick Links</h4>
            <ul className="space-y-3">
              {[
                { name: "Home", href: "/" },
                { name: "About Us", href: "/about" },
                { name: "Services", href: "/services" },
                { name: "GOVERNMENT", href: "/government" },
                { name: "Career", href: "/career" },
                { name: "SSM Academy", href: "/ssm-academy" },
                { name: "Contact", href: "/contact" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="transition-colors hover:opacity-100 opacity-70"
                    style={{ color: "var(--footer-text)" }}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-6 editorial-heading text-lg" style={{ color: "var(--footer-heading)" }}>Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3" style={{ color: "var(--footer-text)" }}>
                <MapPin className="w-5 h-5 shrink-0 mt-0.5" style={{ color: "var(--footer-accent)" }} />
                <span>350 Winton Avenue<br />Hayward, CA 94544<br />United States</span>
              </li>
              <li className="flex items-center gap-3" style={{ color: "var(--footer-text)" }}>
                <Phone className="w-5 h-5 shrink-0" style={{ color: "var(--footer-accent)" }} />
                <div>
                  <a href="tel:5103639189" className="hover:opacity-100 opacity-80 block transition-opacity">(510) 363-9189</a>
                  <a href="tel:5107541245" className="hover:opacity-100 opacity-80 block transition-opacity">(510) 754-1245</a>
                </div>
              </li>
              <li className="flex items-center gap-3" style={{ color: "var(--footer-text)" }}>
                <Mail className="w-5 h-5 shrink-0" style={{ color: "var(--footer-accent)" }} />
                <a href="mailto:ssm@securitysystemsmanagement.us" className="hover:opacity-100 opacity-80 transition-opacity break-all">
                  ssm@securitysystemsmanagement.us
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div
          className="border-t pt-8 flex flex-col md:flex-row justify-between items-center gap-4"
          style={{ borderColor: "var(--footer-border)" }}
        >
          <p className="text-center md:text-left" style={{ color: "var(--footer-text)" }}>
            &copy; {currentYear} Security Systems Management Inc. All Rights Reserved.
          </p>
          <div className="flex items-center gap-6" style={{ color: "var(--footer-text)" }}>
            <Link href="/about#privacy-policy" className="hover:opacity-100 opacity-70 transition-opacity">Privacy Policy</Link>
            <Link href="/about#license" className="hover:opacity-100 opacity-70 transition-opacity">License</Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
