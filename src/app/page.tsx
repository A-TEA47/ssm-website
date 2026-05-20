import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/Button";
import { ShieldCheck, Target, Shield, MapPin, Phone, Clock, Mail } from "lucide-react";
import Link from "next/link";
import { SafeAccessControlVisual } from "@/components/ui/SafeAccessControlVisual";

const inputClass = "w-full rounded-sm px-4 py-3 transition-all theme-input";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative flex min-h-[90vh] items-center justify-center overflow-hidden pt-20 border-b"
        style={{ backgroundColor: "var(--bg-base)", borderColor: "var(--surface-border)" }}
      >
        <div
          className="absolute inset-0 z-0 opacity-40"
          style={{
            backgroundImage: "linear-gradient(to right, var(--bg-subtle) 1px, transparent 1px), linear-gradient(to bottom, var(--bg-subtle) 1px, transparent 1px)",
            backgroundSize: "4rem 4rem",
            maskImage: "radial-gradient(ellipse 60% 50% at 50% 0%, #000 70%, transparent 100%)",
          }}
        />
        <Container className="relative z-20">
          <div className="max-w-3xl">
            <div
              className="mb-6 inline-flex items-center rounded-full px-3 py-1 text-sm font-semibold border"
              style={{ backgroundColor: "var(--bg-muted)", color: "var(--brand-blue)", borderColor: "var(--surface-border)" }}
            >
              Trusted Security Services Since 2013
            </div>
            <h1 className="mb-6 text-5xl font-extrabold tracking-tight sm:text-6xl editorial-heading leading-tight" style={{ color: "var(--text-primary)" }}>
              To Protect with Courage, <br />
              <span style={{ color: "var(--brand-blue)" }}>To Serve with Compassion.</span>
            </h1>
            <p className="mb-10 text-lg leading-8 max-w-2xl" style={{ color: "var(--text-secondary)" }}>
              SSM Inc. provides premium 24/7 armed and unarmed security guards, mobile patrol, and facilities management services for government, commercial, and residential properties.
            </p>
            <div className="flex flex-col sm:flex-row items-start gap-4">
              <Button asChild size="lg" variant="primary"><Link href="/contact">Request a Quote</Link></Button>
              <Button asChild size="lg" variant="outline"><Link href="/services">Explore Our Services</Link></Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Trusted Section */}
      <Section style={{ backgroundColor: "var(--section-alt)" }}>
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2
              className="text-3xl font-bold editorial-heading mb-8 uppercase tracking-wide border-b pb-4"
              style={{ color: "var(--text-primary)", borderColor: "var(--surface-border)" }}
            >
              Trusted and Reliable Security Guard Services and Facilities Management Services
            </h2>
            <div className="space-y-6 text-lg leading-relaxed" style={{ color: "var(--text-secondary)" }}>
              <p>The Security Systems Management (SSM) Inc.'s headquarters are in Hayward, California, United States of America. The SSM Inc. is expanding geographically to include office locations in the Washington D.C. metropolitan area. In addition to providing services in the United States of America, the SSM Inc. is positioned to provide services in multiple international locations. The SSM Inc.'s diversification of service offerings, coupled with its experience and expertise in delivering security services, excellent past performance history, and a dedicated management team and staff provide SSM Inc. with the platform to successfully deliver security services and facilities management and maintenance services to a wide range of clients worldwide.</p>
              <p>The SSM Inc. has been providing high quality security services and facilities management and maintenance services to government clients, and to commercial, industrial, and residential property clients since 2013. The SSM Inc. specializes in providing on-call unarmed security guards, and other services. The SSM Inc.'s management team and staff are dedicated and motivated to provide clients with the best security and facilities management services. The SSM Inc. team works with clients to develop and operationalize custom security and facilities management programs that are designed to meet all specifications and requirements of each client. The SSM Inc.'s team offers comprehensive services which are provided 24 hours a day, seven (7) days a week, with security guards, vehicle patrol, surveillance, tracking, training, and various other security and facilities services as required by each client.</p>
            </div>
          </div>
        </Container>
      </Section>

      {/* Mission & Values */}
      <Section style={{ backgroundColor: "var(--bg-base)" }} className="border-y" data-style-border="var(--surface-border)">
        <Container>
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
            {[
              {
                icon: <Target className="w-6 h-6" />,
                title: "Our Mission",
                quote: '"To Protect with Courage, To Serve with Compassion"',
                body: [
                  "The Security Systems Management (SSM) Inc.'s mission is to provide the best quality security and facilities management and maintenance services to its clients. The SSM Inc. does this by empowering employees to serve with compassion, and to protect with courage.",
                  "The SSM Inc. aims to meet and surpass client expectations and fully meet all requirements. The SSM Inc.'s dedication to client relations has led the company to become one of the most trusted and fastest growing security companies.",
                ],
              },
              {
                icon: <Shield className="w-6 h-6" />,
                title: "Our Values and Vision",
                body: [
                  "The SSM Inc. prides itself on doing business amiably and respectfully. The SSM Inc. provides clients with top quality customer service and professionalism.",
                ],
                bullets: [
                  { label: "Values", text: "The SSM Inc.'s values include providing a safe and professional work environment as the company aims to positively impact employees and the clients and communities it serves." },
                  { label: "Vision", text: "The SSM Inc.'s vision is to become one of the top security guard and other supporting services, and facilities security services companies in the United States of America, and internationally." },
                ],
              },
            ].map((card) => (
              <div key={card.title} className="corporate-card p-8 sm:p-10">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg mb-6 border"
                  style={{ backgroundColor: "var(--bg-muted)", color: "var(--brand-blue)", borderColor: "var(--surface-border)" }}>
                  {card.icon}
                </div>
                <h2 className="text-3xl font-bold editorial-heading mb-6" style={{ color: "var(--text-primary)" }}>{card.title}</h2>
                {card.quote && (
                  <blockquote className="border-l-4 pl-4 italic text-xl mb-6 font-serif p-4 rounded-r-md"
                    style={{ borderColor: "var(--brand-blue)", color: "var(--text-secondary)", backgroundColor: "var(--bg-subtle)" }}>
                    {card.quote}
                  </blockquote>
                )}
                {card.body.map((p, i) => (
                  <p key={i} className="leading-relaxed mb-4" style={{ color: "var(--text-secondary)" }}>{p}</p>
                ))}
                {card.bullets && (
                  <div className="space-y-6 mt-2">
                    {card.bullets.map((b) => (
                      <div key={b.label}>
                        <h3 className="text-xl font-bold mb-2 flex items-center gap-2" style={{ color: "var(--text-primary)" }}>
                          <div className="w-2 h-2 rounded-sm" style={{ backgroundColor: "var(--brand-blue)" }} />
                          {b.label}
                        </h3>
                        <p className="leading-relaxed" style={{ color: "var(--text-secondary)" }}>{b.text}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Dark Banner */}
      <section className="relative overflow-hidden py-20 border-y" style={{ backgroundColor: "var(--bg-inverse)", borderColor: "rgba(255,255,255,0.08)" }}>
        <Container className="relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold editorial-heading mb-6 uppercase tracking-wider" style={{ color: "#FFFFFF" }}>
              Professional Security Guard Services And Facilities Management And Maintenance Services
            </h2>
            <p className="text-xl leading-relaxed font-light" style={{ color: "rgba(255,255,255,0.7)" }}>
              The SSM Inc. provides security guard services in various locations. With a start in providing services for the Northern California and the Greater Bay Area, as well as multiple other cities in California, the company is expanding to the Washington D.C. area and internationally.
            </p>
          </div>
        </Container>
      </section>

      {/* COVID Section */}
      <Section style={{ backgroundColor: "var(--section-alt)" }}>
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <SafeAccessControlVisual />
            <div>
              <h2 className="text-3xl font-bold editorial-heading mb-6 uppercase tracking-wide border-b pb-4"
                style={{ color: "var(--text-primary)", borderColor: "var(--surface-border)" }}>
                COVID-19 Security Solutions
              </h2>
              {[
                "The SSM Inc.'s management team and staff recognize the importance of following federal and state regulations pertaining to COVID-19 safety. The SSM Inc. providing clients with various access control screening solutions to ensure maximum safety.",
                "The SSM Inc. is offering clients COVID-19 specific security service measures such as social distancing enforcement, face mask enforcement, maximum occupancy enforcement, and temperature screening, among other requirements.",
                "The SSM Inc.'s security guards and private patrol ensures its clients the highest level of protection. The SSM Inc. offers Raptor Technology and Lobby guard Solutions to clients to assist in COVID-19 tracking, among other services.",
              ].map((p, i) => (
                <p key={i} className="leading-relaxed mb-6" style={{ color: "var(--text-secondary)" }}>{p}</p>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* Contact Section */}
      <Section className="border-t py-20" style={{ backgroundColor: "var(--bg-base)", borderColor: "var(--surface-border)" }}>
        <Container>
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="corporate-card p-8 sm:p-12">
              <h2 className="text-3xl font-bold editorial-heading mb-8 uppercase tracking-wide border-b pb-4"
                style={{ color: "var(--text-primary)", borderColor: "var(--surface-border)" }}>
                CONTACT US
              </h2>
              <form className="space-y-6">
                <input type="text" id="name" className={inputClass} placeholder="Name" />
                <input type="email" id="email" className={inputClass} placeholder="Email*" required />
                <textarea id="message" rows={5} className={inputClass} placeholder="Message" />
                <Button type="button" variant="primary" className="w-full text-base font-bold py-4">SEND</Button>
                <p className="text-xs text-center mt-4" style={{ color: "var(--text-muted)" }}>
                  This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.
                </p>
              </form>
            </div>
            <div className="lg:pt-4">
              <h3 className="text-2xl font-bold editorial-heading mb-4" style={{ color: "var(--text-primary)" }}>Better yet, see us in person!</h3>
              <p className="leading-relaxed mb-10" style={{ color: "var(--text-secondary)" }}>We love our customers, so feel free to visit during normal business hours.</p>
              <div className="space-y-8">
                <div>
                  <h4 className="text-xl font-bold mb-2" style={{ color: "var(--text-primary)" }}>Security Systems Management</h4>
                  {[
                    { icon: <MapPin className="w-5 h-5 shrink-0 mt-1" />, content: <p>350 Winton Avenue, Hayward, California 94544, United States</p> },
                    { icon: <Phone className="w-5 h-5 shrink-0" />, content: <p>P: <a href="tel:5103639189" className="font-semibold" style={{ color: "var(--brand-blue)" }}>(510) 363-9189</a> or <a href="tel:5107541245" className="font-semibold" style={{ color: "var(--brand-blue)" }}>(510) 754-1245</a></p> },
                  ].map((row, i) => (
                    <div key={i} className="flex items-start gap-3 mb-4" style={{ color: "var(--text-secondary)" }}>
                      <span style={{ color: "var(--brand-blue)" }}>{row.icon}</span>
                      {row.content}
                    </div>
                  ))}
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-4" style={{ color: "var(--text-primary)" }}>Hours</h4>
                  <div className="flex items-center gap-3 mb-6" style={{ color: "var(--text-secondary)" }}>
                    <Clock className="w-5 h-5 shrink-0" style={{ color: "var(--brand-blue)" }} />
                    <p>Open today 09:00 am – 05:00 pm</p>
                  </div>
                  <div className="flex items-start gap-3" style={{ color: "var(--text-secondary)" }}>
                    <Mail className="w-5 h-5 shrink-0 mt-1" style={{ color: "var(--brand-blue)" }} />
                    <div>
                      <p className="mb-1">Email:</p>
                      <a href="mailto:ssm@securitysystemsmanagement.us" className="font-semibold" style={{ color: "var(--brand-blue)" }}>
                        ssm@securitysystemsmanagement.us
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Map */}
      <section className="w-full h-[500px] relative border-t" style={{ borderColor: "var(--surface-border)" }}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1m3!1d3159.267868018151!2d-122.09117652399225!3d37.643037672018864!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808f910403fb2ab1%3A0x6e2c3e1e9c2f5d9f!2s350%20Winton%20Ave%2C%20Hayward%2C%20CA%2094544!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
          width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"
          className="grayscale opacity-80"
        />
      </section>
    </>
  );
}
