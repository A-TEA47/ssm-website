import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Shield, Target, Users, Award, Building } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about SSM Inc., our mission, values, and our commitment to providing top-quality security services since 2013.",
};

export default function AboutPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-surface py-20 border-b border-white/5">
        <Container>
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white heading-premium mb-4">About SSM Inc.</h1>
            <p className="text-xl text-muted">
              A trusted provider of security guard services and facilities management since 2013.
            </p>
          </div>
        </Container>
      </section>

      {/* ABOUT US TEXT SECTION */}
      <Section className="bg-background">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white heading-premium mb-8 uppercase tracking-wide border-b border-white/10 pb-4">
              ABOUT US
            </h2>
            <div className="space-y-6 text-muted leading-relaxed text-lg">
              <p>
                The Security Systems Management (SSM) Inc. is your top choice for a qualified securities guard services and facilities security services company. The SSM Inc. has been providing, since 2013, quality security services and facilities management services to the government, and to commercial, industrial, and residential properties. The SSM Inc. is a full-service security company specializing in security guards and mobile patrols, as well as providing a training program, and managing all databases and technology resources, including providing vehicles support services, uniforms, and other services.
              </p>
              <p>
                The SSM Inc. is a minority company that provides the expertise and experience to meet client requirements and expectations, and the company is scalable to adjust to whatever needs the client requires. The SSM Inc. provides a variety of security services and facilities management services in the security industry, such as 24 hours a day, seven (7) days a week security guards, patrol services, and surveillance and tracking, among other services. The SSM Inc. creates customized security systems and programs for each client's requirements and facilities management services.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* PRIVACY POLICY SECTION */}
      <Section className="bg-surface border-t border-white/5" id="privacy-policy">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white heading-premium mb-8 uppercase tracking-wide border-b border-white/10 pb-4">
              Privacy Policy
            </h2>
            <div className="space-y-8 text-gray-300">
              <p className="text-lg font-medium text-white">
                "SMS opt-in or phone numbers for the purpose of SMS are not being shared with any third party and affiliate company for marketing purposes."
              </p>

              <div>
                <h4 className="text-xl font-bold text-white mb-2">1- SMS Consent Communication:</h4>
                <p>Information (510-363-9189) obtained as part of the SMS consent process will not be shared with third parties for marketing purposes.</p>
              </div>

              <div>
                <h4 className="text-xl font-bold text-white mb-2">2- Types of SMS Communications:</h4>
                <p className="mb-2">If consent has been given to receive text messages from Security Systems Management Inc, messages may be received related to the following.</p>
                <ul className="list-disc pl-6 space-y-1 mb-2">
                  <li>Appointment reminders(if applicable)</li>
                  <li>Follow-up messages (if applicable)</li>
                  <li>Billing inquiries (if applicable)</li>
                  <li>Promotions or offers (if applicable)</li>
                </ul>
                <p>Follow-up messages</p>
                <p>Reply STOP to opt out of SMS messaging at any time.</p>
              </div>

              <div>
                <h4 className="text-xl font-bold text-white mb-2">3- Message Frequency:</h4>
                <p>Message frequency may vary depending on the type of communication.</p>
                <p>For example, you may receive up to [X] SMS messages per week related to your [appointments/billing, etc.].</p>
              </div>

              <div>
                <h4 className="text-xl font-bold text-white mb-2">4- Potential Fees for SMS Messaging:</h4>
                <p>Standard message and data rates may apply, depending on the carrier's pricing plan. These fees may vary if the message is sent domestically or internationally.</p>
              </div>

              <div>
                <h4 className="text-xl font-bold text-white mb-2">5- Opt-In Method:</h4>
                <p className="mb-2">Opt-in to receive SMS messages from Security Systems Management Inc can be done in the following ways:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Verbally, during a conversation</li>
                  <li>By submitting an online form</li>
                  <li>By filling out a paper form</li>
                </ul>
              </div>

              <div>
                <h4 className="text-xl font-bold text-white mb-2">6- Opt-Out Method:</h4>
                <p>Opting out of receiving SMS messages can be done at any time by replying "STOP" to any SMS message received. Alternatively, direct contact can be made to request removal from the messaging list.</p>
              </div>

              <div>
                <h4 className="text-xl font-bold text-white mb-2">7- Help:</h4>
                <p>For any issues, reply with the keyword HELP.</p>
                <p>Alternatively, help can be obtained directly from us at +1 (510) 3639189</p>
                <p>Additional Options: If SMS messages are not desired, the SMS consent box on forms can be left unchecked.</p>
              </div>

              <div>
                <h4 className="text-xl font-bold text-white mb-2">8- Standard Messaging Disclosures:</h4>
                <p>Message and data rates may apply. Opt out at any time by texting "STOP." For assistance, text "HELP" or visit our Privacy Policy and Terms and Conditions pages. Message frequency may vary.</p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* LICENSE SECTION */}
      <Section className="bg-background border-t border-white/5" id="license">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white heading-premium mb-8 uppercase tracking-wide border-b border-white/10 pb-4">
              License
            </h2>
            <div className="space-y-12 text-gray-300">
              <div className="space-y-4">
                <h4 className="text-xl font-bold text-white">Licensed Security Provider in Texas – Security Systems Management Inc</h4>
                <p>
                  Welcome to Security Systems Management Inc, your trusted and fully licensed security services provider in the state of Texas. With a strong commitment to safety, professionalism, and reliability, we are proud to offer a wide range of security solutions tailored to meet the needs of individuals, businesses, and communities across the region. Your security is our priority.
                </p>

                <h4 className="text-xl font-bold text-white pt-4">Licensed by the Texas Department of Public Safety (DPS)</h4>
                <p>
                  Security Systems Management Inc is officially licensed by the Texas Department of Public Safety – Private Security Bureau (License Number: B12668001), ensuring that all our operations comply with the state's strict legal, ethical, and professional standards. Our licensing guarantees that:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>All security personnel undergo extensive background checks and are certified in line with DPS guidelines.</li>
                  <li>We meet all state-mandated insurance and bonding requirements.</li>
                </ul>
              </div>

              <div className="space-y-4 pt-8 border-t border-white/10">
                <h3 className="text-2xl font-bold text-white heading-premium uppercase">VIRGINIA</h3>
                
                <h4 className="text-xl font-bold text-white">Registered and Authorized to Do Business in Virginia</h4>
                <p className="font-medium text-white">Officially Licensed by the Virginia State Corporation Commission</p>
                <p>
                  At Security Systems Management Inc., we are proud to be officially licensed and registered with the Virginia State Corporation Commission (SCC) to legally transact business in the Commonwealth of Virginia.
                </p>

                <h4 className="text-xl font-bold text-white pt-4">✅ Licensed by the Virginia SCC</h4>
                <p>
                  Security Systems Management Inc. is a duly registered business entity in the Commonwealth of Virginia. Our status with the Virginia State Corporation Commission ensures that we are authorized to provide our full range of security services across the state.
                </p>
                <div className="bg-surface p-6 rounded-xl border border-white/5 space-y-2 font-mono text-sm">
                  <p><span className="text-white font-bold">Entity Name:</span> Security Systems Management Inc.</p>
                  <p><span className="text-white font-bold">Business Entity Type:</span> Corporation</p>
                  <p><span className="text-white font-bold">SCC ID:</span> 11839637</p>
                  <p><span className="text-white font-bold">Status:</span> Active</p>
                  <p><span className="text-white font-bold">Jurisdiction:</span> Virginia</p>
                  <p><span className="text-white font-bold">Date of Incorporation:</span> 05/01/2025</p>
                </div>
                <p>
                  You can verify our registration directly with the Virginia SCC at: 🔗 <a href="https://cis.scc.virginia.gov" target="_blank" rel="noopener noreferrer" className="text-secondary hover:underline">https://cis.scc.virginia.gov</a>
                </p>
              </div>

              <div className="space-y-4 pt-8 border-t border-white/10">
                <h3 className="text-2xl font-bold text-white heading-premium">Fiji Islands Operations</h3>
                <p>
                  We're proud to extend our services to the Fiji Islands, where we've established a growing footprint in the security sector. From local businesses and resorts to public service buildings and private homes, our Fiji team is equipped with the tools and knowledge to deliver world-class protection tailored to island life.
                </p>
                <p className="pt-2">
                  Whether you're located in the states of California, Texas, Virginia U.S. or a remote island in Fiji, SSM is committed to securing what matters most to you. Our international experience allows us to deliver globally informed solutions that are locally adapted.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* VALUED CLIENTS SECTION */}
      <Section className="bg-surface border-t border-white/5 py-20">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white heading-premium mb-6 uppercase tracking-wide">
              SOME OF SSM'S VALUED CLIENTS
            </h2>
            <div className="w-24 h-1 bg-secondary mx-auto rounded-full"></div>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-12 lg:gap-24 opacity-80 hover:opacity-100 transition-opacity">
            {/* Enterprise Rent-A-Car Placeholder */}
            <div className="flex flex-col items-center justify-center space-y-4">
               <div className="bg-white p-6 rounded-lg w-48 h-24 flex items-center justify-center grayscale hover:grayscale-0 transition-all shadow-xl">
                 <span className="text-green-700 font-black text-xl tracking-tighter">enterprise</span>
               </div>
               <span className="text-muted font-medium">Enterprise Rent-A-Car</span>
            </div>

            {/* NOAA Placeholder */}
            <div className="flex flex-col items-center justify-center space-y-4">
               <div className="bg-white p-6 rounded-lg w-48 h-24 flex items-center justify-center grayscale hover:grayscale-0 transition-all shadow-xl">
                 <span className="text-blue-800 font-bold text-2xl tracking-widest">NOAA</span>
               </div>
               <span className="text-muted font-medium">NOAA</span>
            </div>

            {/* Sheraton Placeholder */}
            <div className="flex flex-col items-center justify-center space-y-4">
               <div className="bg-white p-6 rounded-lg w-48 h-24 flex items-center justify-center grayscale hover:grayscale-0 transition-all shadow-xl">
                 <div className="flex flex-col items-center">
                   <span className="text-gray-800 text-2xl mb-1">S</span>
                   <span className="text-gray-800 tracking-[0.3em] text-xs">SHERATON</span>
                 </div>
               </div>
               <span className="text-muted font-medium">Sheraton</span>
            </div>

            {/* Alameda Point Collaborative Placeholder */}
            <div className="flex flex-col items-center justify-center space-y-4">
               <div className="bg-white p-6 rounded-lg w-48 h-24 flex flex-col items-center justify-center grayscale hover:grayscale-0 transition-all shadow-xl">
                  <span className="text-red-700 font-bold text-center leading-tight">Alameda Point<br/>Collaborative</span>
               </div>
               <span className="text-muted font-medium">Alameda Point Collaborative</span>
            </div>

            {/* BAART Programs Placeholder */}
            <div className="flex flex-col items-center justify-center space-y-4">
               <div className="bg-white p-6 rounded-lg w-48 h-24 flex items-center justify-center grayscale hover:grayscale-0 transition-all shadow-xl">
                  <span className="text-teal-700 font-bold text-xl">BAART<br/>Programs</span>
               </div>
               <span className="text-muted font-medium">BAART Programs</span>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
