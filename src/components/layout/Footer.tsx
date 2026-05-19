import React from "react";
import Link from "next/link";
import { Container } from "./Container";
import { Phone, Mail, MapPin, Shield } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary-light border-t border-white/5 pt-16 pb-8 text-sm">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand & Mission */}
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-bold tracking-tight text-white uppercase heading-premium mb-1">
                SSM Inc.
              </h3>
              <p className="text-xs text-secondary font-medium tracking-widest uppercase">
                Security Systems Management
              </p>
            </div>
            <p className="text-muted leading-relaxed">
              "To Protect with Courage, To Serve with Compassion"
            </p>
            <p className="text-muted leading-relaxed">
              Providing trusted, top-quality security and facilities management services to government, commercial, and residential clients since 2013.
            </p>
            <div className="flex items-center gap-2 text-secondary font-medium mt-4">
              <Shield className="w-5 h-5" />
              <span>Licensed & Insured</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-6 heading-premium text-lg">Quick Links</h4>
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
                  <Link href={link.href} className="text-muted hover:text-secondary transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>


          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-6 heading-premium text-lg">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-muted">
                <MapPin className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                <span>350 Winton Avenue<br />Hayward, CA 94544<br />United States</span>
              </li>
              <li className="flex items-center gap-3 text-muted">
                <Phone className="w-5 h-5 text-secondary shrink-0" />
                <div>
                  <a href="tel:5103639189" className="hover:text-white block">(510) 363-9189</a>
                  <a href="tel:5107541245" className="hover:text-white block">(510) 754-1245</a>
                </div>
              </li>
              <li className="flex items-center gap-3 text-muted">
                <Mail className="w-5 h-5 text-secondary shrink-0" />
                <a href="mailto:ssm@securitysystemsmanagement.us" className="hover:text-white">
                  ssm@securitysystemsmanagement.us
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted text-center md:text-left">
            &copy; {currentYear} Security Systems Management Inc. All Rights Reserved.
          </p>
          <div className="flex items-center gap-6 text-muted">
            <Link href="/about#privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/about#license" className="hover:text-white transition-colors">License</Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
