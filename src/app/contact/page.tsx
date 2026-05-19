import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/Button";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with SSM Inc. for a free security consultation. Contact us at (510) 363-9189 or visit our Hayward, CA office.",
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-surface py-20 border-b border-white/5">
        <Container>
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white heading-premium mb-4">Contact Us</h1>
            <p className="text-xl text-muted">
              Ready to secure your future? Reach out to our team for a free consultation.
            </p>
          </div>
        </Container>
      </section>

      <Section className="bg-background">
        <Container>
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-white heading-premium mb-6">Get In Touch</h2>
              <p className="text-muted leading-relaxed mb-10">
                We love our customers, so feel free to visit during normal business hours or contact us via phone or email for immediate assistance. Our 24/7 dispatch is always ready to respond.
              </p>

              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="bg-primary-light p-3 rounded-lg text-secondary">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">Phone</h3>
                    <p className="text-muted mb-1">Main: <a href="tel:5103639189" className="text-white hover:text-secondary">(510) 363-9189</a></p>
                    <p className="text-muted">Alt: <a href="tel:5107541245" className="text-white hover:text-secondary">(510) 754-1245</a></p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary-light p-3 rounded-lg text-secondary">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">Email</h3>
                    <a href="mailto:ssm@securitysystemsmanagement.us" className="text-muted hover:text-secondary">
                      ssm@securitysystemsmanagement.us
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary-light p-3 rounded-lg text-secondary">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">Headquarters</h3>
                    <p className="text-muted">
                      Security Systems Management<br />
                      350 Winton Avenue<br />
                      Hayward, California 94544<br />
                      United States
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary-light p-3 rounded-lg text-secondary">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">Business Hours</h3>
                    <div className="text-muted space-y-1">
                      <p>Mon: 08:30 am – 05:00 pm</p>
                      <p>Tue: 08:30 am – 05:00 pm</p>
                      <p>Wed: 08:00 am – 05:00 pm</p>
                      <p>Thu: 08:00 am – 05:00 pm</p>
                      <p>Fri: 08:00 am – 05:00 pm</p>
                      <p>Sat: Closed</p>
                      <p>Sun: Closed</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="glass-effect p-8 rounded-2xl border border-white/10">
              <h2 className="text-2xl font-bold text-white heading-premium mb-6">Request a Quote</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="firstName" className="text-sm font-medium text-gray-300">First Name</label>
                    <input 
                      type="text" 
                      id="firstName" 
                      className="w-full bg-surface border border-white/10 rounded-md px-4 py-2.5 text-white focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all"
                      placeholder="John"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="lastName" className="text-sm font-medium text-gray-300">Last Name</label>
                    <input 
                      type="text" 
                      id="lastName" 
                      className="w-full bg-surface border border-white/10 rounded-md px-4 py-2.5 text-white focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-gray-300">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full bg-surface border border-white/10 rounded-md px-4 py-2.5 text-white focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all"
                    placeholder="john@example.com"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium text-gray-300">Phone Number</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    className="w-full bg-surface border border-white/10 rounded-md px-4 py-2.5 text-white focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all"
                    placeholder="(555) 123-4567"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="service" className="text-sm font-medium text-gray-300">Service Needed</label>
                  <select 
                    id="service" 
                    className="w-full bg-surface border border-white/10 rounded-md px-4 py-2.5 text-white focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all appearance-none"
                  >
                    <option value="">Select a service...</option>
                    <option value="unarmed">Unarmed Security Guards</option>
                    <option value="patrol">Mobile Patrol</option>
                    <option value="events">Event Security</option>
                    <option value="facilities">Facilities Management</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-gray-300">Message</label>
                  <textarea 
                    id="message" 
                    rows={4}
                    className="w-full bg-surface border border-white/10 rounded-md px-4 py-2.5 text-white focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all"
                    placeholder="Tell us about your security needs..."
                  ></textarea>
                </div>

                <Button type="button" variant="primary" className="w-full">
                  Send Message
                </Button>
                
                <div className="text-xs text-muted text-center mt-4 space-y-2">
                  <p>
                    By texting Security Systems Management Inc at 510-363-9189, you agree to receive conversational & marketing notifications messages from Security Systems Management Inc. Reply STOP to opt-out; Reply HELP for support; Message & data rates may apply; Messaging frequency may vary. Visit Privacy Policy page to see our privacy policy and Terms of Service.
                  </p>
                  <p>
                    This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.
                  </p>
                </div>
              </form>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
