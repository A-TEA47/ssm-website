import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/Button";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { ShieldCheck, Users, Car, Building2, Shield, HeartPulse, Target, ShieldAlert, Award, Phone, Mail, MapPin, Clock } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative flex min-h-[90vh] items-center justify-center overflow-hidden bg-primary pt-20">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/90 to-primary/40 z-10" />
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
        </div>
        
        <Container className="relative z-20">
          <div className="max-w-3xl">
            <div className="mb-6 inline-flex items-center rounded-full bg-secondary/10 px-3 py-1 text-sm font-medium text-secondary ring-1 ring-inset ring-secondary/20">
              Trusted Security Services Since 2013
            </div>
            <h1 className="mb-6 text-5xl font-bold tracking-tight text-white sm:text-6xl heading-premium leading-tight">
              To Protect with Courage, <br/>
              <span className="text-secondary">To Serve with Compassion.</span>
            </h1>
            <p className="mb-10 text-lg leading-8 text-gray-300 max-w-2xl">
              SSM Inc. provides premium 24/7 armed and unarmed security guards, mobile patrol, and facilities management services for government, commercial, and residential properties.
            </p>
            <div className="flex flex-col sm:flex-row items-start gap-4">
              <Button asChild size="lg" variant="primary">
                <Link href="/contact">Request a Quote</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-transparent">
                <Link href="/services">Explore Our Services</Link>
              </Button>
            </div>
          </div>
        </Container>
      </section>


      {/* TRUSTED AND RELIABLE SECTION */}
      <Section className="bg-background">
        <Container>
          <div className="max-w-4xl mx-auto text-center lg:text-left">
            <h2 className="text-3xl font-bold text-white heading-premium mb-8 uppercase tracking-wide border-b border-white/10 pb-4">
              Trusted and Reliable Security Guard Services and Facilities Management Services
            </h2>
            <div className="space-y-6 text-muted leading-relaxed text-lg">
              <p>
                The Security Systems Management (SSM) Inc.'s headquarters are in Hayward, California, United States of America. The SSM Inc. is expanding geographically to include office locations in the Washington D.C. metropolitan area. In addition to providing services in the United States of America, the SSM Inc. is positioned to provide services in multiple international locations. The SSM Inc.'s diversification of service offerings, coupled with its experience and expertise in delivering security services, excellent past performance history, and a dedicated management team and staff provide SSM Inc. with the platform to successfully deliver security services and facilities management and maintenance services to a wide range of clients worldwide.
              </p>
              <p>
                The SSM Inc. has been providing high quality security services and facilities management and maintenance services to government clients, and to commercial, industrial, and residential property clients since 2013. The SSM Inc. specializes in providing on-call unarmed security guards, and other services. The SSM Inc.'s management team and staff are dedicated and motivated to provide clients with the best security and facilities management services. The SSM Inc. team works with clients to develop and operationalize custom security and facilities management programs that are designed to meet all specifications and requirements of each client. The SSM Inc.'s team offers comprehensive services which are provided 24 hours a day, seven (7) days a week, with security guards, vehicle patrol, surveillance, tracking, training, and various other security and facilities services as required by each client.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* MISSION, VALUES, AND VISION */}
      <Section className="bg-surface border-y border-white/5">
        <Container>
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
            {/* Mission */}
            <div className="bg-primary/20 p-8 rounded-2xl border border-white/5">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary-light text-secondary mb-6">
                <Target className="w-6 h-6" />
              </div>
              <h2 className="text-3xl font-bold text-white heading-premium mb-6">Our Mission</h2>
              <blockquote className="border-l-4 border-secondary pl-4 italic text-xl text-gray-300 mb-6 font-serif">
                "To Protect with Courage, To Serve with Compassion"
              </blockquote>
              <p className="text-muted leading-relaxed mb-4">
                The Security Systems Management (SSM) Inc.'s mission is to provide the best quality security and facilities management and maintenance services to its clients. The SSM Inc. does this by empowering employees to serve with compassion, and to protect with courage. 
              </p>
              <p className="text-muted leading-relaxed">
                The SSM Inc. aims to meet and surpass client expectations and fully meet all requirements. The SSM Inc.'s dedication to client relations has led the company to become one of the most trusted and fastest growing security companies.
              </p>
            </div>

            {/* Values & Vision */}
            <div className="bg-primary/20 p-8 rounded-2xl border border-white/5">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary-light text-secondary mb-6">
                <Shield className="w-6 h-6" />
              </div>
              <h2 className="text-3xl font-bold text-white heading-premium mb-6">Our Values and Vision</h2>
              <p className="text-muted leading-relaxed mb-6">
                The SSM Inc. prides itself on doing business amiably and respectfully. The SSM Inc. provides clients with top quality customer service and professionalism.
              </p>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2 flex items-center gap-2">
                    <div className="w-2 h-2 bg-secondary rounded-full"></div> Values
                  </h3>
                  <p className="text-muted leading-relaxed">
                    The SSM Inc.'s values include providing a safe and professional work environment as the company aims to positively impact employees and the clients and communities it serves.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2 flex items-center gap-2">
                    <div className="w-2 h-2 bg-secondary rounded-full"></div> Vision
                  </h3>
                  <p className="text-muted leading-relaxed">
                    The SSM Inc.'s vision is to become one of the top security guard and other supporting services, and facilities security services companies in the United States of America, and internationally. The SSM Inc. values each client and is optimistic that its security services will fully meet all client requirements and exceed client expectations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* PROFESSIONAL SECURITY GUARD SERVICES... */}
      <Section className="bg-primary relative overflow-hidden border-b border-white/5">
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
        <Container className="relative z-10">
          <div className="max-w-4xl mx-auto text-center">
             <h2 className="text-2xl md:text-3xl font-bold text-white heading-premium mb-6 uppercase tracking-wider">
              Professional Security Guard Services And Facilities Management And Maintenance Services
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed font-light">
              The SSM Inc. provides security guard services in various locations. With a start in providing services for the Northern California and the Greater Bay Area, as well as multiple other cities in California, the company is expanding to the Washington D.C. area and internationally to provide security and facilities management services.
            </p>
          </div>
        </Container>
      </Section>

      {/* COVID-19 SECURITY SOLUTIONS */}
      <Section className="bg-background">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Visual Placeholder for Covid-19 Image */}
            <div className="relative h-[400px] w-full rounded-2xl overflow-hidden glass-effect border border-white/10 flex items-center justify-center bg-surface">
              {/* In a real scenario, an <Image> component would go here */}
              <div className="absolute inset-0 bg-primary/40 mix-blend-multiply z-10" />
              <ShieldAlert className="w-32 h-32 text-white/20 absolute z-0" />
              <div className="relative z-20 text-center p-6">
                <span className="bg-secondary/20 text-secondary px-4 py-2 rounded-full font-medium tracking-widest text-sm uppercase mb-4 inline-block">
                  Health & Safety
                </span>
                <p className="text-white font-medium italic">COVID-19 Preparedness Image</p>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-white heading-premium mb-6 uppercase tracking-wide border-b border-white/10 pb-4">
                COVID-19 Security Solutions
              </h2>
              <p className="text-muted leading-relaxed mb-6">
                The SSM Inc.'s management team and staff recognize the importance of following federal and state regulations pertaining to COVID-19 safety. The SSM Inc. providing clients with various access control screening solutions to ensure maximum safety. 
              </p>
              <p className="text-muted leading-relaxed mb-6">
                The SSM Inc. is offering clients COVID-19 specific security service measures such as social distancing enforcement, face mask enforcement, maximum occupancy enforcement, and temperature screening, among other requirements.
              </p>
              <p className="text-muted leading-relaxed">
                The SSM Inc.'s security guards and private patrol ensures its clients the highest level of protection. The SSM Inc. offers Raptor Technology and Lobby guard Solutions to clients to assist in COVID-19 tracking, among other services.
              </p>
            </div>
          </div>
        </Container>
      </Section>


      {/* CONTACT US */}
      <Section className="bg-surface border-t border-white/5 py-20">
        <Container>
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="glass-effect p-8 rounded-2xl border border-white/10">
              <h2 className="text-3xl font-bold text-white heading-premium mb-8 uppercase tracking-wide border-b border-white/10 pb-4">
                CONTACT US
              </h2>
              <form className="space-y-6">
                <div className="space-y-2">
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full bg-background border border-white/10 rounded-md px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all placeholder:text-gray-500"
                    placeholder="Name"
                  />
                </div>
                <div className="space-y-2">
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full bg-background border border-white/10 rounded-md px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all placeholder:text-gray-500"
                    placeholder="Email*"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <textarea 
                    id="message" 
                    rows={5}
                    className="w-full bg-background border border-white/10 rounded-md px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all placeholder:text-gray-500"
                    placeholder="Message"
                  ></textarea>
                </div>
                <Button type="button" variant="primary" className="w-full text-base font-bold py-4">
                  SEND
                </Button>
                <p className="text-xs text-muted text-center mt-4">
                  This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.
                </p>
              </form>
            </div>

            <div className="lg:pt-4">
              <h3 className="text-2xl font-bold text-white heading-premium mb-4">Better yet, see us in person!</h3>
              <p className="text-muted leading-relaxed mb-10">
                We love our customers, so feel free to visit during normal business hours.
              </p>

              <div className="space-y-8">
                <div>
                  <h4 className="text-xl font-bold text-white mb-2">Security Systems Management</h4>
                  <div className="flex items-start gap-3 text-muted mb-4">
                    <MapPin className="w-5 h-5 text-secondary shrink-0 mt-1" />
                    <p>350 Winton Avenue, Hayward, California 94544, United States</p>
                  </div>
                  <div className="flex items-center gap-3 text-muted mb-4">
                    <Phone className="w-5 h-5 text-secondary shrink-0" />
                    <p>P: <a href="tel:5103639189" className="text-white hover:text-secondary transition-colors">(510) 363-9189</a> or <a href="tel:5107541245" className="text-white hover:text-secondary transition-colors">(510) 754-1245</a></p>
                  </div>
                  <div className="flex items-start gap-3 text-muted">
                    <div className="w-5 h-5 flex items-center justify-center shrink-0 font-bold text-secondary">FB:</div>
                    <a href="https://www.facebook.com/Security-Systems-Management-102791264887741/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-secondary transition-colors break-all">
                      https://www.facebook.com/Security-Systems-Management-102791264887741/
                    </a>
                  </div>
                </div>

                <div>
                  <h4 className="text-xl font-bold text-white mb-4">Hours</h4>
                  <div className="flex items-center gap-3 text-muted mb-6">
                    <Clock className="w-5 h-5 text-secondary shrink-0" />
                    <p>Open today 09:00 am – 05:00 pm</p>
                  </div>
                  
                  <div className="flex items-start gap-3 text-muted">
                    <Mail className="w-5 h-5 text-secondary shrink-0 mt-1" />
                    <div>
                      <p className="mb-1">Email:</p>
                      <a href="mailto:ssm@securitysystemsmanagement.us" className="text-white hover:text-secondary transition-colors break-all">
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

      {/* MAP EMBED */}
      <section className="w-full h-[500px] relative border-t border-white/10">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1m3!1d3159.267868018151!2d-122.09117652399225!3d37.643037672018864!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808f910403fb2ab1%3A0x6e2c3e1e9c2f5d9f!2s350%20Winton%20Ave%2C%20Hayward%2C%20CA%2094544!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          className="grayscale opacity-90 contrast-125"
        ></iframe>
      </section>
    </>
  );
}
