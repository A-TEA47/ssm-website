import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Security Services",
  description: "24/7 Unarmed & Armed Security Guards, Mobile Patrol, and Security Services at competitive rates in the Bay Area.",
};

const capabilities = [
  "Unarmed Security Officers", "Undercover Security Officers", "Bodyguard Services",
  "Patrol Services", "Bilingual Guards (multiple languages)", "Uniformed Officers",
  "Fully Accredited Security School", "Robust Training Program",
  "Government, Commercial, Industrial & Residential", "24 Hours / 7 Days a week Services",
  "Hourly, Daily, Weekly, Monthly, Yearly Contracts", "2-Way Radios",
  "Highly Trained Management team and staff", "Best Rate Guaranteed",
  "Full-Service Security Guards", "Private Investigation", "Surveillance and Tracking",
  "Employment Screenings", "Mandatory Drug Testing (and COVID-19 as applicable)",
  "Video Surveillance Specialists", "Fully Licensed and Insured",
];

const guarantees = [
  "The SSM Inc. performs background checks on all security guards and officers.",
  "The SSM Inc. staff conduct required drug test screenings at all relevant locations including on post and upon hiring.",
  "The SSM Inc. offers all types of contracts depending on the clients' needs (Hourly, Daily, Weekly, Monthly, and Yearly).",
  "The SSM Inc. offers an unmatched \"best rate guarantee\" options for its clients.",
  "The SSM Inc. provides 24-hour Dispatch with radio check every 30-minutes, or as required by each client.",
];

export default function ServicesPage() {
  return (
    <>
      <section className="py-20 border-b" style={{ backgroundColor: "var(--section-alt)", borderColor: "var(--surface-border)" }}>
        <Container className="relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold editorial-heading mb-4" style={{ color: "var(--text-primary)" }}>Our Security Services</h1>
            <p className="text-xl" style={{ color: "var(--text-secondary)" }}>Providing 24/7 unarmed security guards, mobile patrols, and the latest security technology.</p>
          </div>
        </Container>
      </section>

      <Section style={{ backgroundColor: "var(--bg-base)" }}>
        <Container>
          <div className="mb-12 max-w-3xl">
            <h2 className="text-3xl font-bold editorial-heading mb-6" style={{ color: "var(--text-primary)" }}>Scope of SSM Inc.'s Security Services</h2>
            <p className="leading-relaxed mb-4" style={{ color: "var(--text-secondary)" }}>The SSM Inc. has been providing personnel security and facilities management security services since 2013. Today, SSM Inc. is providing services throughout California. In addition, it is expanding its office locations to the Washington D.C. area, and internationally.</p>
            <p className="leading-relaxed" style={{ color: "var(--text-secondary)" }}>The SSM Inc. specializes in providing highly trained and qualified unarmed security guards, and undercover security officers. The SSM Inc. has offered the best in security services and consultants throughout the last more than 12 years. The SSM Inc.'s management team and staff are a dedicated workforce, providing clients with the highest quality of security services.</p>
          </div>

          {/* Capabilities */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold editorial-heading mb-8 border-b pb-4"
              style={{ color: "var(--text-primary)", borderColor: "var(--surface-border)" }}>Comprehensive Capabilities</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-y-4 gap-x-8 font-medium" style={{ color: "var(--text-secondary)" }}>
              {capabilities.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-sm mt-2 shrink-0" style={{ backgroundColor: "var(--brand-blue)" }} />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Service detail cards */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {[
              { title: "Latest Security Technology", body: "The SSM Inc. provides clients the latest security technology and mobile patrols as well as creates custom programs designed to meet all client requirements. The SSM Inc. offers surveillance and tracking, as well as Detex technology to ensure that each client's property is protected." },
              { title: "Highly Trained Staff", body: "Our security guards are trained to offer you the highest quality of service. We take great pride in our work and will ensure that all of your security needs are met. The SSM Inc.'s security guards and mobile patrols are trained to monitor all activities as applicable for each client." },
            ].map((card) => (
              <div key={card.title} className="corporate-card p-8 sm:p-10">
                <h3 className="text-xl font-bold editorial-heading mb-4" style={{ color: "var(--text-primary)" }}>{card.title}</h3>
                <p className="leading-relaxed" style={{ color: "var(--text-secondary)" }}>{card.body}</p>
              </div>
            ))}
          </div>

          {/* CTA banner */}
          <div className="corporate-card p-8 lg:p-12 border-t-4" style={{ borderTopColor: "var(--brand-blue)", backgroundColor: "var(--section-alt)" }}>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold editorial-heading mb-6" style={{ color: "var(--text-primary)" }}>Professional Security Guard Services</h3>
                <ul className="space-y-4" style={{ color: "var(--text-secondary)" }}>
                  {guarantees.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-sm mt-2 shrink-0" style={{ backgroundColor: "var(--brand-blue)" }} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="text-center p-8 rounded-xl border shadow-sm corporate-card">
                <h4 className="text-2xl font-bold editorial-heading mb-4" style={{ color: "var(--text-primary)" }}>Need a Custom Program?</h4>
                <p className="mb-8" style={{ color: "var(--text-secondary)" }}>We provide free consultations to understand your unique security challenges and design a system that works for you.</p>
                <Button asChild variant="primary" size="lg" className="w-full sm:w-auto">
                  <Link href="/contact">Get a Free Consultation</Link>
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
