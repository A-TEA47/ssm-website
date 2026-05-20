import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import type { Metadata } from "next";
import { ClientLogos } from "@/components/ui/ClientLogos";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about SSM Inc., our mission, values, and our commitment to providing top-quality security services since 2013.",
};

export default function AboutPage() {
  return (
    <>
      {/* Page Header */}
      <section className="relative py-20 border-b overflow-hidden" style={{ backgroundColor: "var(--section-alt)", borderColor: "var(--surface-border)" }}>
        <Container className="relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold editorial-heading mb-4" style={{ color: "var(--text-primary)" }}>About SSM Inc.</h1>
            <p className="text-xl" style={{ color: "var(--text-secondary)" }}>
              A trusted provider of security guard services and facilities management since 2013.
            </p>
          </div>
        </Container>
      </section>

      {/* About Text */}
      <Section style={{ backgroundColor: "var(--bg-base)" }}>
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold editorial-heading mb-8 uppercase tracking-wide border-b pb-4"
              style={{ color: "var(--text-primary)", borderColor: "var(--surface-border)" }}>ABOUT US</h2>
            <div className="space-y-6 text-lg leading-relaxed" style={{ color: "var(--text-secondary)" }}>
              <p>The Security Systems Management (SSM) Inc. is your top choice for a qualified securities guard services and facilities security services company. The SSM Inc. has been providing, since 2013, quality security services and facilities management services to the government, and to commercial, industrial, and residential properties. The SSM Inc. is a full-service security company specializing in security guards and mobile patrols, as well as providing a training program, and managing all databases and technology resources, including providing vehicles support services, uniforms, and other services.</p>
              <p>The SSM Inc. is a minority company that provides the expertise and experience to meet client requirements and expectations, and the company is scalable to adjust to whatever needs the client requires. The SSM Inc. provides a variety of security services and facilities management services in the security industry, such as 24 hours a day, seven (7) days a week security guards, patrol services, and surveillance and tracking, among other services. The SSM Inc. creates customized security systems and programs for each client's requirements and facilities management services.</p>
            </div>
          </div>
        </Container>
      </Section>

      {/* Privacy Policy */}
      <Section className="border-t" id="privacy-policy" style={{ backgroundColor: "var(--section-alt)", borderColor: "var(--surface-border)" }}>
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold editorial-heading mb-8 uppercase tracking-wide border-b pb-4"
              style={{ color: "var(--text-primary)", borderColor: "var(--surface-border)" }}>Privacy Policy</h2>
            <div className="space-y-8" style={{ color: "var(--text-secondary)" }}>
              <p className="text-lg font-bold" style={{ color: "var(--text-primary)" }}>
                "SMS opt-in or phone numbers for the purpose of SMS are not being shared with any third party and affiliate company for marketing purposes."
              </p>
              {[
                { title: "1- SMS Consent Communication:", body: "Information (510-363-9189) obtained as part of the SMS consent process will not be shared with third parties for marketing purposes." },
                { title: "2- Types of SMS Communications:", body: null, list: ["Appointment reminders(if applicable)", "Follow-up messages (if applicable)", "Billing inquiries (if applicable)", "Promotions or offers (if applicable)"], extra: ["Follow-up messages", "Reply STOP to opt out of SMS messaging at any time."] },
                { title: "3- Message Frequency:", body: "Message frequency may vary depending on the type of communication. For example, you may receive up to [X] SMS messages per week related to your [appointments/billing, etc.]." },
                { title: "4- Potential Fees for SMS Messaging:", body: "Standard message and data rates may apply, depending on the carrier's pricing plan. These fees may vary if the message is sent domestically or internationally." },
                { title: "5- Opt-In Method:", body: null, list: ["Verbally, during a conversation", "By submitting an online form", "By filling out a paper form"] },
                { title: "6- Opt-Out Method:", body: 'Opting out of receiving SMS messages can be done at any time by replying "STOP" to any SMS message received. Alternatively, direct contact can be made to request removal from the messaging list.' },
                { title: "7- Help:", body: "For any issues, reply with the keyword HELP. Alternatively, help can be obtained directly from us at +1 (510) 3639189. Additional Options: If SMS messages are not desired, the SMS consent box on forms can be left unchecked." },
                { title: "8- Standard Messaging Disclosures:", body: 'Message and data rates may apply. Opt out at any time by texting "STOP." For assistance, text "HELP" or visit our Privacy Policy and Terms and Conditions pages. Message frequency may vary.' },
              ].map((item) => (
                <div key={item.title}>
                  <h4 className="text-xl font-bold mb-2" style={{ color: "var(--text-primary)" }}>{item.title}</h4>
                  {item.body && <p>{item.body}</p>}
                  {item.list && <ul className="list-disc pl-6 space-y-1 mt-2">{item.list.map(li => <li key={li}>{li}</li>)}</ul>}
                  {item.extra && item.extra.map(e => <p key={e} className="mt-1">{e}</p>)}
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* License */}
      <Section className="border-t" id="license" style={{ backgroundColor: "var(--bg-base)", borderColor: "var(--surface-border)" }}>
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold editorial-heading mb-8 uppercase tracking-wide border-b pb-4"
              style={{ color: "var(--text-primary)", borderColor: "var(--surface-border)" }}>License</h2>
            <div className="space-y-12" style={{ color: "var(--text-secondary)" }}>
              <div className="space-y-4">
                <h4 className="text-xl font-bold" style={{ color: "var(--text-primary)" }}>Licensed Security Provider in Texas – Security Systems Management Inc</h4>
                <p>Welcome to Security Systems Management Inc, your trusted and fully licensed security services provider in the state of Texas. With a strong commitment to safety, professionalism, and reliability, we are proud to offer a wide range of security solutions tailored to meet the needs of individuals, businesses, and communities across the region. Your security is our priority.</p>
                <h4 className="text-xl font-bold pt-4" style={{ color: "var(--text-primary)" }}>Licensed by the Texas Department of Public Safety (DPS)</h4>
                <p>Security Systems Management Inc is officially licensed by the Texas Department of Public Safety – Private Security Bureau (License Number: B12668001), ensuring that all our operations comply with the state's strict legal, ethical, and professional standards. Our licensing guarantees that:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>All security personnel undergo extensive background checks and are certified in line with DPS guidelines.</li>
                  <li>We meet all state-mandated insurance and bonding requirements.</li>
                </ul>
              </div>
              <div className="space-y-4 pt-8 border-t" style={{ borderColor: "var(--surface-border)" }}>
                <h3 className="text-2xl font-bold editorial-heading uppercase" style={{ color: "var(--text-primary)" }}>VIRGINIA</h3>
                <h4 className="text-xl font-bold" style={{ color: "var(--text-primary)" }}>Registered and Authorized to Do Business in Virginia</h4>
                <p className="font-semibold" style={{ color: "var(--text-primary)" }}>Officially Licensed by the Virginia State Corporation Commission</p>
                <p>At Security Systems Management Inc., we are proud to be officially licensed and registered with the Virginia State Corporation Commission (SCC) to legally transact business in the Commonwealth of Virginia.</p>
                <h4 className="text-xl font-bold pt-4" style={{ color: "var(--text-primary)" }}>✅ Licensed by the Virginia SCC</h4>
                <p>Security Systems Management Inc. is a duly registered business entity in the Commonwealth of Virginia. Our status with the Virginia State Corporation Commission ensures that we are authorized to provide our full range of security services across the state.</p>
                <div className="p-6 rounded-sm border space-y-2 font-mono text-sm"
                  style={{ backgroundColor: "var(--section-alt)", borderColor: "var(--surface-border)" }}>
                  {[
                    ["Entity Name:", "Security Systems Management Inc."],
                    ["Business Entity Type:", "Corporation"],
                    ["SCC ID:", "11839637"],
                    ["Status:", "Active"],
                    ["Jurisdiction:", "Virginia"],
                    ["Date of Incorporation:", "05/01/2025"],
                  ].map(([k, v]) => (
                    <p key={k}><span className="font-bold" style={{ color: "var(--text-primary)" }}>{k}</span> {v}</p>
                  ))}
                </div>
                <p>You can verify our registration directly with the Virginia SCC at: 🔗 <a href="https://cis.scc.virginia.gov" target="_blank" rel="noopener noreferrer" style={{ color: "var(--brand-blue)" }} className="hover:underline">https://cis.scc.virginia.gov</a></p>
              </div>
              <div className="space-y-4 pt-8 border-t" style={{ borderColor: "var(--surface-border)" }}>
                <h3 className="text-2xl font-bold editorial-heading" style={{ color: "var(--text-primary)" }}>Fiji Islands Operations</h3>
                <p>We're proud to extend our services to the Fiji Islands, where we've established a growing footprint in the security sector. From local businesses and resorts to public service buildings and private homes, our Fiji team is equipped with the tools and knowledge to deliver world-class protection tailored to island life.</p>
                <p>Whether you're located in the states of California, Texas, Virginia U.S. or a remote island in Fiji, SSM is committed to securing what matters most to you. Our international experience allows us to deliver globally informed solutions that are locally adapted.</p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Valued Clients */}
      <Section className="border-t py-20" style={{ backgroundColor: "var(--section-alt)", borderColor: "var(--surface-border)" }}>
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold editorial-heading mb-6 uppercase tracking-wide" style={{ color: "var(--text-primary)" }}>
              SOME OF SSM'S VALUED CLIENTS
            </h2>
            <div className="accent-line mx-auto" />
          </div>
          <ClientLogos />
        </Container>
      </Section>
    </>
  );
}
