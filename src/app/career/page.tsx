import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/Button";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Career",
  description: "Career opportunities and requirements at SSM Inc.",
};

export default function CareerPage() {
  return (
    <>
      <section className="bg-surface py-20 border-b border-white/5">
        <Container>
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white heading-premium mb-4 uppercase">
              Career
            </h1>
          </div>
        </Container>
      </section>

      <Section className="bg-background min-h-[50vh]">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="bg-surface p-8 lg:p-12 rounded-2xl border border-white/5">
              <h2 className="text-2xl font-bold text-white heading-premium mb-8 border-b border-white/10 pb-4">
                Requirements
              </h2>
              
              <ul className="space-y-4 text-muted">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-secondary mt-2 shrink-0" />
                  <span>Valid registration guard card</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-secondary mt-2 shrink-0" />
                  <span>Must be at least 18 years old</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-secondary mt-2 shrink-0" />
                  <span>Employment background history</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-secondary mt-2 shrink-0" />
                  <span>Screening and drug test</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-secondary mt-2 shrink-0" />
                  <span>Possess a GED or high school diploma</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-secondary mt-2 shrink-0" />
                  <span>Authorization documents to work in USA</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-secondary mt-2 shrink-0" />
                  <span>Must pass the security training exam</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-secondary mt-2 shrink-0" />
                  <span>Criminal background check</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-secondary mt-2 shrink-0" />
                  <span>DMV record for patrolling positions</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-secondary mt-2 shrink-0" />
                  <span>Must pass the interview by SSM manger</span>
                </li>
              </ul>
            </div>

            <div className="mt-16 bg-surface p-8 lg:p-12 rounded-2xl border border-white/5">
              <h2 className="text-3xl font-bold text-white heading-premium mb-8 border-b border-white/10 pb-4 uppercase tracking-wider">
                APPLY NOW
              </h2>
              
              <div className="bg-background rounded-xl p-8 border border-white/10 shadow-2xl">
                <div className="text-center mb-10">
                  <h3 className="text-2xl font-bold text-white uppercase tracking-wider mb-2">EMPLOYMENT APPLICATION</h3>
                  <div className="w-16 h-1 bg-secondary mx-auto mb-8 rounded-full"></div>
                  
                  <div className="text-left">
                    <h4 className="text-xl font-bold text-white mb-2">Pre- employment Application</h4>
                    <p className="text-muted text-sm">Please complete the form below to apply for a position with us.</p>
                  </div>
                </div>

                <form className="space-y-8">
                  {/* Full Name */}
                  <div className="space-y-3">
                    <label className="text-sm font-semibold text-gray-200 block">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <input 
                          type="text" 
                          id="firstName" 
                          required
                          className="w-full bg-surface border border-white/10 rounded-md px-4 py-2.5 text-white focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all"
                        />
                        <label htmlFor="firstName" className="text-xs text-muted mt-1 block">First Name</label>
                      </div>
                      <div>
                        <input 
                          type="text" 
                          id="lastName" 
                          required
                          className="w-full bg-surface border border-white/10 rounded-md px-4 py-2.5 text-white focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all"
                        />
                        <label htmlFor="lastName" className="text-xs text-muted mt-1 block">Last Name</label>
                      </div>
                    </div>
                  </div>

                  {/* Phone Number */}
                  <div className="space-y-3">
                    <label className="text-sm font-semibold text-gray-200 block">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <div className="flex gap-4">
                      <div className="w-24">
                        <input 
                          type="text" 
                          id="areaCode" 
                          required
                          className="w-full bg-surface border border-white/10 rounded-md px-4 py-2.5 text-white focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all"
                        />
                        <label htmlFor="areaCode" className="text-xs text-muted mt-1 block">Area Code</label>
                      </div>
                      <div className="hidden sm:flex items-center text-muted">-</div>
                      <div className="flex-1">
                        <input 
                          type="text" 
                          id="phoneNumber" 
                          required
                          className="w-full bg-surface border border-white/10 rounded-md px-4 py-2.5 text-white focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all"
                        />
                        <label htmlFor="phoneNumber" className="text-xs text-muted mt-1 block">Phone Number</label>
                      </div>
                    </div>
                  </div>

                  {/* Address */}
                  <div className="space-y-3">
                    <label className="text-sm font-semibold text-gray-200 block">
                      Address
                    </label>
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
                        <div>
                          <select id="country" className="w-full bg-surface border border-white/10 rounded-md px-4 py-2.5 text-white focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all appearance-none">
                            <option value="">Please Select</option>
                            <option value="US">United States</option>
                            <option value="CA">Canada</option>
                            <option value="MX">Mexico</option>
                          </select>
                          <label htmlFor="country" className="text-xs text-muted mt-1 block">Country</label>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Today's date */}
                  <div className="space-y-3">
                    <label className="text-sm font-semibold text-gray-200 block">
                      Today's date
                    </label>
                    <div className="max-w-xs">
                      <input type="date" id="todaysDate" className="w-full bg-surface border border-white/10 rounded-md px-4 py-2.5 text-white focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all" />
                      <label htmlFor="todaysDate" className="text-xs text-muted mt-1 block">Date</label>
                    </div>
                  </div>

                  {/* Upload Resume */}
                  <div className="space-y-3">
                    <label className="text-sm font-semibold text-gray-200 block">
                      Upload Resume
                    </label>
                    <div className="max-w-xs">
                      <label className="w-full flex items-center justify-center bg-surface border border-white/10 rounded-md px-4 py-3 text-white hover:bg-white/5 cursor-pointer transition-all">
                        <span className="text-sm">Upload a File</span>
                        <input type="file" className="hidden" />
                      </label>
                    </div>
                  </div>

                  {/* Job Requirement Questionnaire */}
                  <div className="space-y-3">
                    <label className="text-sm font-semibold text-gray-200 block">
                      Job Requirement Questionnaire <span className="text-red-500">*</span>
                    </label>
                    <div className="space-y-2 text-gray-300 text-sm">
                      <label className="flex items-center gap-3"><input type="checkbox" className="rounded border-white/20 bg-background text-secondary focus:ring-secondary focus:ring-offset-background" /> Do you have a Driver License?</label>
                      <label className="flex items-center gap-3"><input type="checkbox" className="rounded border-white/20 bg-background text-secondary focus:ring-secondary focus:ring-offset-background" /> Do you have a Guard Card?</label>
                      <label className="flex items-center gap-3"><input type="checkbox" className="rounded border-white/20 bg-background text-secondary focus:ring-secondary focus:ring-offset-background" /> Are you legally eligible to work in the United States?</label>
                      <label className="flex items-center gap-3"><input type="checkbox" className="rounded border-white/20 bg-background text-secondary focus:ring-secondary focus:ring-offset-background" /> Do you have reliable transportation to work?</label>
                      <label className="flex items-center gap-3"><input type="checkbox" className="rounded border-white/20 bg-background text-secondary focus:ring-secondary focus:ring-offset-background" /> 
                        Other
                        <input type="text" className="ml-2 bg-surface border border-white/10 rounded px-2 py-1 text-white focus:outline-none focus:border-secondary" />
                      </label>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="space-y-3">
                    <label className="text-sm font-semibold text-gray-200 block">Email</label>
                    <div className="max-w-md">
                      <input type="email" id="appEmail" placeholder="example@example.com" className="w-full bg-surface border border-white/10 rounded-md px-4 py-2.5 text-white focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all" />
                      <label htmlFor="appEmail" className="text-xs text-muted mt-1 block">example@example.com</label>
                    </div>
                  </div>

                  {/* Have you worked as a guard before? */}
                  <div className="space-y-3">
                    <label className="text-sm font-semibold text-gray-200 block">
                      Have you worked as a guard before?
                    </label>
                    <div className="max-w-md">
                      <input type="text" id="guardBefore" className="w-full bg-surface border border-white/10 rounded-md px-4 py-2.5 text-white focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all" />
                      <label htmlFor="guardBefore" className="text-xs text-muted mt-1 block">If yes, Provide the name of the company</label>
                    </div>
                  </div>

                  {/* What position are you applying for? */}
                  <div className="space-y-3">
                    <label className="text-sm font-semibold text-gray-200 block">
                      What position are you applying for?
                    </label>
                    <div className="space-y-2 text-gray-300 text-sm">
                      <label className="flex items-center gap-3"><input type="checkbox" className="rounded border-white/20 bg-background text-secondary focus:ring-secondary focus:ring-offset-background" /> Unarmed Guard</label>
                      <label className="flex items-center gap-3"><input type="checkbox" className="rounded border-white/20 bg-background text-secondary focus:ring-secondary focus:ring-offset-background" /> Flex Officer</label>
                      <label className="flex items-center gap-3"><input type="checkbox" className="rounded border-white/20 bg-background text-secondary focus:ring-secondary focus:ring-offset-background" /> Daytime Supervisor</label>
                      <label className="flex items-center gap-3"><input type="checkbox" className="rounded border-white/20 bg-background text-secondary focus:ring-secondary focus:ring-offset-background" /> Night Supervisor</label>
                      <label className="flex items-center gap-3"><input type="checkbox" className="rounded border-white/20 bg-background text-secondary focus:ring-secondary focus:ring-offset-background" /> Weekend Day Supervisor</label>
                      <label className="flex items-center gap-3"><input type="checkbox" className="rounded border-white/20 bg-background text-secondary focus:ring-secondary focus:ring-offset-background" /> Weekend Night Supervisor</label>
                    </div>
                  </div>

                  {/* When can you start? */}
                  <div className="space-y-3">
                    <label className="text-sm font-semibold text-gray-200 block">
                      When can you start? <span className="text-red-500">*</span>
                    </label>
                    <div className="max-w-xs">
                      <input type="date" id="startDate" required className="w-full bg-surface border border-white/10 rounded-md px-4 py-2.5 text-white focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all" />
                      <label htmlFor="startDate" className="text-xs text-muted mt-1 block">Date</label>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white pt-8 pb-4 border-b border-white/10">Employment Questions</h3>

                  <div className="space-y-3">
                    <label className="text-sm font-semibold text-gray-200 block">
                      What are your salary expectations?
                    </label>
                    <div className="max-w-xs">
                      <select className="w-full bg-surface border border-white/10 rounded-md px-4 py-2.5 text-white focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all appearance-none">
                        <option value=""></option>
                        <option value="minimum">Minimum Wage</option>
                        <option value="15-20">$15 - $20 / hr</option>
                        <option value="20-25">$20 - $25 / hr</option>
                        <option value="25+">$25+ / hr</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <label className="text-sm font-semibold text-gray-200 block">
                      Are you interested in full-time employment, part-time or either?
                    </label>
                    <div className="max-w-xs">
                      <select className="w-full bg-surface border border-white/10 rounded-md px-4 py-2.5 text-white focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all appearance-none">
                        <option value=""></option>
                        <option value="full-time">Full-Time</option>
                        <option value="part-time">Part-Time</option>
                        <option value="either">Either</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <label className="text-sm font-semibold text-gray-200 block">
                      Are you able to communicate (orally and in writing) in English
                    </label>
                    <div className="max-w-xs">
                      <select className="w-full bg-surface border border-white/10 rounded-md px-4 py-2.5 text-white focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all appearance-none">
                        <option value=""></option>
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <label className="text-sm font-semibold text-gray-200 block">
                      How adept are you in learning rising computer software programs and systems?
                    </label>
                    <div className="space-y-2 text-gray-300 text-sm">
                      <label className="flex items-center gap-3"><input type="radio" name="adept" className="text-secondary bg-background border-white/20 focus:ring-secondary" /> Experienced</label>
                      <label className="flex items-center gap-3"><input type="radio" name="adept" className="text-secondary bg-background border-white/20 focus:ring-secondary" /> Averaged</label>
                      <label className="flex items-center gap-3"><input type="radio" name="adept" className="text-secondary bg-background border-white/20 focus:ring-secondary" /> NO Experience</label>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <label className="text-sm font-semibold text-gray-200 block">
                      Which mobile technologies are you experienced in using?
                    </label>
                    <div className="space-y-2 text-gray-300 text-sm">
                      <label className="flex items-center gap-3"><input type="radio" name="mobileTech" className="text-secondary bg-background border-white/20 focus:ring-secondary" /> Apple</label>
                      <label className="flex items-center gap-3"><input type="radio" name="mobileTech" className="text-secondary bg-background border-white/20 focus:ring-secondary" /> Android</label>
                      <label className="flex items-center gap-3"><input type="radio" name="mobileTech" className="text-secondary bg-background border-white/20 focus:ring-secondary" /> Guard Tek Device</label>
                      <label className="flex items-center gap-3"><input type="radio" name="mobileTech" className="text-secondary bg-background border-white/20 focus:ring-secondary" /> 
                        Other
                        <input type="text" className="ml-2 bg-surface border border-white/10 rounded px-2 py-1 text-white focus:outline-none focus:border-secondary" />
                      </label>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <label className="text-sm font-semibold text-gray-200 block">
                      How would you rate your e-mail skills and use the online Time Clock Software?
                    </label>
                    <div className="space-y-2 text-gray-300 text-sm">
                      <label className="flex items-center gap-3"><input type="radio" name="emailSkills" className="text-secondary bg-background border-white/20 focus:ring-secondary" /> Excellent</label>
                      <label className="flex items-center gap-3"><input type="radio" name="emailSkills" className="text-secondary bg-background border-white/20 focus:ring-secondary" /> Good</label>
                      <label className="flex items-center gap-3"><input type="radio" name="emailSkills" className="text-secondary bg-background border-white/20 focus:ring-secondary" /> Poor</label>
                    </div>
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

                  <div className="pt-8 border-t border-white/10 flex flex-wrap justify-end gap-4">
                    <Button type="button" variant="outline" className="bg-surface text-white hover:bg-white/5 border-white/10">
                      Save
                    </Button>
                    <Button type="button" variant="primary">
                      Submit
                    </Button>
                    <Button type="button" variant="outline" className="bg-surface text-white hover:bg-white/5 border-white/10">
                      Clear Form
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
