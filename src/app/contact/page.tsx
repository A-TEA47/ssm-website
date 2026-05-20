import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/Button";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with SSM Inc. for a free security consultation. Contact us at (510) 363-9189 or visit our Hayward, CA office.",
};

const inputClass = "w-full rounded-sm px-4 py-2.5 transition-all theme-input";

export default function ContactPage() {
  return (
    <>
      <section className="py-20 border-b" style={{ backgroundColor: "var(--section-alt)", borderColor: "var(--surface-border)" }}>
        <Container>
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold editorial-heading mb-4" style={{ color: "var(--text-primary)" }}>Contact Us</h1>
            <p className="text-xl" style={{ color: "var(--text-secondary)" }}>Ready to secure your future? Reach out to our team for a free consultation.</p>
          </div>
        </Container>
      </section>

      <Section style={{ backgroundColor: "var(--bg-base)" }}>
        <Container>
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Info */}
            <div>
              <h2 className="text-3xl font-bold editorial-heading mb-6" style={{ color: "var(--text-primary)" }}>Get In Touch</h2>
              <p className="leading-relaxed mb-10" style={{ color: "var(--text-secondary)" }}>We love our customers, so feel free to visit during normal business hours or contact us via phone or email for immediate assistance. Our 24/7 dispatch is always ready to respond.</p>
              <div className="space-y-8">
                {[
                  { icon: <Phone className="w-6 h-6" />, title: "Phone", content: <><p className="mb-1" style={{ color: "var(--text-secondary)" }}>Main: <a href="tel:5103639189" className="font-semibold" style={{ color: "var(--brand-blue)" }}>(510) 363-9189</a></p><p style={{ color: "var(--text-secondary)" }}>Alt: <a href="tel:5107541245" className="font-semibold" style={{ color: "var(--brand-blue)" }}>(510) 754-1245</a></p></> },
                  { icon: <Mail className="w-6 h-6" />, title: "Email", content: <a href="mailto:ssm@securitysystemsmanagement.us" className="font-semibold" style={{ color: "var(--brand-blue)" }}>ssm@securitysystemsmanagement.us</a> },
                  { icon: <MapPin className="w-6 h-6" />, title: "Headquarters", content: <p style={{ color: "var(--text-secondary)" }}>Security Systems Management<br />350 Winton Avenue<br />Hayward, California 94544<br />United States</p> },
                  { icon: <Clock className="w-6 h-6" />, title: "Business Hours", content: <div style={{ color: "var(--text-secondary)" }} className="space-y-1"><p>Mon: 08:30 am – 05:00 pm</p><p>Tue: 08:30 am – 05:00 pm</p><p>Wed: 08:00 am – 05:00 pm</p><p>Thu: 08:00 am – 05:00 pm</p><p>Fri: 08:00 am – 05:00 pm</p><p>Sat: Closed</p><p>Sun: Closed</p></div> },
                ].map((row) => (
                  <div key={row.title} className="flex items-start gap-4">
                    <div className="p-3 rounded-sm border" style={{ backgroundColor: "var(--bg-muted)", color: "var(--brand-blue)", borderColor: "var(--surface-border)" }}>
                      {row.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold editorial-heading mb-1" style={{ color: "var(--text-primary)" }}>{row.title}</h3>
                      {row.content}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Form */}
            <div className="corporate-card p-8 sm:p-10 border-t-4" style={{ borderTopColor: "var(--brand-blue)" }}>
              <h2 className="text-2xl font-bold editorial-heading mb-6" style={{ color: "var(--text-primary)" }}>Request a Quote</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="firstName" className="text-sm font-semibold" style={{ color: "var(--text-primary)" }}>First Name</label>
                    <input type="text" id="firstName" className={inputClass} placeholder="John" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="lastName" className="text-sm font-semibold" style={{ color: "var(--text-primary)" }}>Last Name</label>
                    <input type="text" id="lastName" className={inputClass} placeholder="Doe" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-semibold" style={{ color: "var(--text-primary)" }}>Email Address</label>
                  <input type="email" id="email" className={inputClass} placeholder="john@example.com" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-semibold" style={{ color: "var(--text-primary)" }}>Phone Number</label>
                  <input type="tel" id="phone" className={inputClass} placeholder="(555) 123-4567" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="service" className="text-sm font-semibold" style={{ color: "var(--text-primary)" }}>Service Needed</label>
                  <select id="service" className={inputClass + " appearance-none"}>
                    <option value="">Select a service...</option>
                    <option value="unarmed">Unarmed Security Guards</option>
                    <option value="patrol">Mobile Patrol</option>
                    <option value="events">Event Security</option>
                    <option value="facilities">Facilities Management</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-semibold" style={{ color: "var(--text-primary)" }}>Message</label>
                  <textarea id="message" rows={4} className={inputClass} placeholder="Tell us about your security needs..." />
                </div>
                <Button type="button" variant="primary" className="w-full">Send Message</Button>
                <div className="text-xs text-center mt-4 space-y-2 pt-4 border-t" style={{ color: "var(--text-muted)", borderColor: "var(--surface-border)" }}>
                  <p>By texting Security Systems Management Inc at 510-363-9189, you agree to receive conversational & marketing notifications messages from Security Systems Management Inc. Reply STOP to opt-out; Reply HELP for support; Message & data rates may apply; Messaging frequency may vary. Visit Privacy Policy page to see our privacy policy and Terms of Service.</p>
                  <p>This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.</p>
                </div>
              </form>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
