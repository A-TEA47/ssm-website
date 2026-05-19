import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/Button";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SSM Academy",
  description: "Training Packages for Security Systems Management Inc.",
};

export default function SSMAcademyPage() {
  return (
    <>
      <section className="bg-surface py-20 border-b border-white/5">
        <Container>
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white heading-premium mb-4 uppercase">
              ACADEMY
            </h1>
          </div>
        </Container>
      </section>

      <Section className="bg-background min-h-[50vh]">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="bg-surface p-8 lg:p-12 rounded-2xl border border-white/5">
              <h2 className="text-2xl font-bold text-white heading-premium mb-8 border-b border-white/10 pb-4">
                Training Packages
              </h2>
              
              <ul className="space-y-6 text-muted">
                <li className="flex items-start gap-4 bg-background p-6 rounded-xl border border-white/5">
                  <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center font-bold text-secondary shrink-0">
                    A
                  </div>
                  <div>
                    <span className="font-bold text-white text-lg block mb-1">$97.00</span>
                    <span className="text-gray-300 block">Guard card Training-Two Classes in one day</span>
                  </div>
                </li>
                
                <li className="flex items-start gap-4 bg-background p-6 rounded-xl border border-white/5">
                  <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center font-bold text-secondary shrink-0">
                    B
                  </div>
                  <div>
                    <span className="font-bold text-white text-lg block mb-1">$50.00</span>
                    <span className="text-gray-300 block">Resume Creation, interview Practice, Employment Readiness Workshop</span>
                  </div>
                </li>
                
                <li className="flex items-start gap-4 bg-background p-6 rounded-xl border border-white/5">
                  <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center font-bold text-secondary shrink-0">
                    C
                  </div>
                  <div>
                    <span className="text-gray-300 block mb-1">DOJ and FBI Fingerprinting and background Check</span>
                    <span className="text-secondary text-sm font-medium italic block">($32 DOJ, $19 FBI, $35 Fingerprinting and Live-Scan)</span>
                  </div>
                </li>
                
                <li className="flex items-start gap-4 bg-background p-6 rounded-xl border border-white/5">
                  <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center font-bold text-secondary shrink-0">
                    D
                  </div>
                  <div>
                    <span className="font-bold text-white text-lg block mb-1">$25.00</span>
                    <span className="text-gray-300 block">Processing and mailing package for you</span>
                  </div>
                </li>
              </ul>
            </div>

            <div className="mt-16 bg-surface p-8 lg:p-12 rounded-2xl border border-white/5">
              <h2 className="text-3xl font-bold text-white heading-premium mb-8 border-b border-white/10 pb-4 uppercase tracking-wider">
                SCHEDULE A CLASS
              </h2>
              
              <div className="bg-background rounded-xl p-8 border border-white/10 shadow-2xl">
                <div className="mb-10 border-b border-white/10 pb-8">
                  <h3 className="text-3xl font-bold text-white mb-2">SSM Academy</h3>
                  <p className="text-muted text-lg mb-8">Guard Card Classes</p>
                  
                  <div className="space-y-4">
                    <p className="text-white font-bold text-lg">Tell a Friend - Security Systems Management</p>
                    <p className="text-white font-bold text-lg">A Quick Route To Sucess</p>
                    <p className="text-white font-bold text-lg">510-363-9189</p>
                  </div>
                  
                  <div className="mt-8 space-y-4 text-gray-300">
                    <p>SSM Academy</p>
                    <p>24301 Southland Drive, Suite B5</p>
                    <p>Hayward, CA, 94545</p>
                  </div>
                </div>

                <form className="space-y-8">
                  {/* Name */}
                  <div className="space-y-3">
                    <label className="text-sm font-semibold text-gray-200 block">Name</label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <input type="text" id="firstName" className="w-full bg-surface border border-white/10 rounded-md px-4 py-2.5 text-white focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all" />
                        <label htmlFor="firstName" className="text-xs text-muted mt-1 block">First Name</label>
                      </div>
                      <div>
                        <input type="text" id="lastName" className="w-full bg-surface border border-white/10 rounded-md px-4 py-2.5 text-white focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all" />
                        <label htmlFor="lastName" className="text-xs text-muted mt-1 block">Last Name</label>
                      </div>
                    </div>
                  </div>

                  {/* Phone Number */}
                  <div className="space-y-3">
                    <label className="text-sm font-semibold text-gray-200 block">Phone Number</label>
                    <div className="flex gap-4">
                      <div className="w-24">
                        <input type="text" id="areaCode" className="w-full bg-surface border border-white/10 rounded-md px-4 py-2.5 text-white focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all" />
                        <label htmlFor="areaCode" className="text-xs text-muted mt-1 block">Area Code</label>
                      </div>
                      <div className="hidden sm:flex items-center text-muted">-</div>
                      <div className="flex-1">
                        <input type="text" id="phoneNumber" className="w-full bg-surface border border-white/10 rounded-md px-4 py-2.5 text-white focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all" />
                        <label htmlFor="phoneNumber" className="text-xs text-muted mt-1 block">Phone Number</label>
                      </div>
                    </div>
                  </div>

                  {/* Address */}
                  <div className="space-y-3">
                    <label className="text-sm font-semibold text-gray-200 block">Address</label>
                    <div className="space-y-4">
                      <div>
                        <input type="text" id="streetAddress" className="w-full bg-surface border border-white/10 rounded-md px-4 py-2.5 text-white focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all" />
                        <label htmlFor="streetAddress" className="text-xs text-muted mt-1 block">Street Address</label>
                      </div>
                      <div>
                        <input type="text" id="streetAddress2" className="w-full bg-surface border border-white/10 rounded-md px-4 py-2.5 text-white focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all" />
                        <label htmlFor="streetAddress2" className="text-xs text-muted mt-1 block">Street Address Line 2</label>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <input type="text" id="city" className="w-full bg-surface border border-white/10 rounded-md px-4 py-2.5 text-white focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all" />
                          <label htmlFor="city" className="text-xs text-muted mt-1 block">City</label>
                        </div>
                        <div>
                          <input type="text" id="state" className="w-full bg-surface border border-white/10 rounded-md px-4 py-2.5 text-white focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all" />
                          <label htmlFor="state" className="text-xs text-muted mt-1 block">State / Province</label>
                        </div>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <input type="text" id="zipCode" className="w-full bg-surface border border-white/10 rounded-md px-4 py-2.5 text-white focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all" />
                          <label htmlFor="zipCode" className="text-xs text-muted mt-1 block">Postal / Zip Code</label>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Note Section */}
                  <div className="py-6 space-y-4 text-gray-300">
                    <h4 className="text-lg font-bold text-white mb-4">Note:</h4>
                    <p>Classes are capped at a maximum of 8 students.</p>
                    <p>Pre-payment ensures that your preferred class will not fill up.</p>
                    <p className="italic">*Extra time is provided at the end of each class for test re-takes or questions</p>
                  </div>

                  {/* Book A Class */}
                  <div className="space-y-3">
                    <label className="text-sm font-semibold text-gray-200 block">
                      Book A Class <span className="text-red-500">*</span>
                    </label>
                    <select className="w-full bg-surface border border-white/10 rounded-md px-4 py-2.5 text-white focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all appearance-none bg-none" size={2}>
                      <option>Monday @9:00 PM-5:00 PM (February 17th) {"{8}"}</option>
                      <option>Monday @9:00 PM-5:00 PM (March 16th) {"{8}"}</option>
                    </select>
                  </div>

                  {/* Training Packages */}
                  <div className="space-y-3 pt-4">
                    <label className="text-sm font-semibold text-gray-200 block">Training Packages</label>
                    <div className="space-y-3 text-gray-300 text-sm">
                      <label className="flex items-start gap-3"><input type="checkbox" className="mt-1 rounded border-white/20 bg-background text-secondary focus:ring-secondary focus:ring-offset-background shrink-0" /> A-$97.00 Guard card Training-Two Classes in one day</label>
                      <label className="flex items-start gap-3"><input type="checkbox" className="mt-1 rounded border-white/20 bg-background text-secondary focus:ring-secondary focus:ring-offset-background shrink-0" /> B-$50.00 Resume Creation, interview Practice, Employment Readiness Workshop</label>
                      <label className="flex items-start gap-3"><input type="checkbox" className="mt-1 rounded border-white/20 bg-background text-secondary focus:ring-secondary focus:ring-offset-background shrink-0" /> C-DOJ and FBI Fingerprinting and background Check ($32 DOJ, $19 FBI, $35 Fingerprinting and Live-Scan)</label>
                      <label className="flex items-start gap-3"><input type="checkbox" className="mt-1 rounded border-white/20 bg-background text-secondary focus:ring-secondary focus:ring-offset-background shrink-0" /> D-$25.00 Processing and mailing package for you</label>
                      <label className="flex items-start gap-3"><input type="checkbox" className="mt-1 rounded border-white/20 bg-background text-secondary focus:ring-secondary focus:ring-offset-background shrink-0" /> E-Employee Orientation Training for New guards, how we do it at SSM</label>
                      <label className="flex items-start gap-3"><input type="checkbox" className="mt-1 rounded border-white/20 bg-background text-secondary focus:ring-secondary focus:ring-offset-background shrink-0" /> FBI-DOJ Livescan $80</label>
                      <label className="flex items-center gap-3"><input type="checkbox" className="rounded border-white/20 bg-background text-secondary focus:ring-secondary focus:ring-offset-background shrink-0" /> Other <input type="text" className="ml-2 bg-surface border border-white/10 rounded px-2 py-1 text-white focus:outline-none focus:border-secondary w-full max-w-[200px]" /></label>
                    </div>
                  </div>

                  <div className="py-6 text-gray-300 text-sm leading-relaxed border-t border-white/10 mt-8">
                    {"{10% Discount for new hire on one-year contract with SSM employee pay-as-you-go repayment plan. *Not every graduate can be placed at SSM, check post availability}"}
                  </div>

                  <div className="space-y-3">
                    <label className="text-sm font-semibold text-gray-200 block">
                      Signature
                    </label>
                    <div className="max-w-md h-40 bg-surface border border-white/10 rounded-md relative flex items-center justify-center overflow-hidden">
                       <span className="text-muted/30 font-serif italic text-3xl transform -rotate-12 select-none pointer-events-none">Draw Signature Here</span>
                       <div className="absolute bottom-2 right-4 text-xs text-secondary hover:text-white cursor-pointer transition-colors font-medium">Clear</div>
                    </div>
                  </div>

                  <div className="pt-8 flex justify-start">
                    <Button type="button" variant="primary" size="lg" className="px-8">
                      Submit
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
