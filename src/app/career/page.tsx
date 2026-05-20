import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/Button";
import type { Metadata } from "next";
import { SignatureCanvas } from "@/components/ui/SignatureCanvas";

export const metadata: Metadata = {
  title: "Career",
  description: "Career opportunities and requirements at SSM Inc.",
};

const inputClass = "w-full rounded-sm px-4 py-2.5 transition-all shadow-sm theme-input";
const checkClass = "rounded w-4 h-4 shrink-0";
const labelStyle = { color: "var(--text-secondary)" };
const headingStyle = { color: "var(--text-primary)" };
const bulletStyle = { backgroundColor: "var(--brand-blue)" };

const requirements = [
  "Valid registration guard card", "Must be at least 18 years old",
  "Employment background history", "Screening and drug test",
  "Possess a GED or high school diploma", "Authorization documents to work in USA",
  "Must pass the security training exam", "Criminal background check",
  "DMV record for patrolling positions", "Must pass the interview by SSM manger",
];

export default function CareerPage() {
  return (
    <>
      <section className="py-20 border-b" style={{ backgroundColor: "var(--section-alt)", borderColor: "var(--surface-border)" }}>
        <Container>
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold editorial-heading mb-4 uppercase" style={headingStyle}>Career</h1>
          </div>
        </Container>
      </section>

      <Section className="min-h-[50vh]" style={{ backgroundColor: "var(--bg-base)" }}>
        <Container>
          <div className="max-w-4xl mx-auto">
            {/* Requirements */}
            <div className="corporate-card p-8 lg:p-12 border-t-4" style={{ borderTopColor: "var(--brand-blue)" }}>
              <h2 className="text-2xl font-bold editorial-heading mb-8 border-b pb-4"
                style={{ ...headingStyle, borderColor: "var(--surface-border)" }}>Requirements</h2>
              <ul className="space-y-4 font-medium" style={labelStyle}>
                {requirements.map((r) => (
                  <li key={r} className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-sm mt-2 shrink-0" style={bulletStyle} />
                    <span>{r}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Application Form */}
            <div className="mt-16 corporate-card p-8 lg:p-12">
              <h2 className="text-3xl font-bold editorial-heading mb-8 border-b pb-4 uppercase tracking-wider"
                style={{ ...headingStyle, borderColor: "var(--surface-border)" }}>APPLY NOW</h2>

              <div className="rounded-sm p-8 border" style={{ backgroundColor: "var(--section-alt)", borderColor: "var(--surface-border)" }}>
                <div className="text-center mb-10">
                  <h3 className="text-2xl font-bold uppercase tracking-wider mb-2 editorial-heading" style={headingStyle}>EMPLOYMENT APPLICATION</h3>
                  <div className="w-16 h-1 mx-auto mb-8 rounded-sm" style={{ backgroundColor: "var(--brand-blue)" }} />
                  <div className="text-left">
                    <h4 className="text-xl font-bold mb-2" style={headingStyle}>Pre-employment Application</h4>
                    <p className="text-sm" style={labelStyle}>Please complete the form below to apply for a position with us.</p>
                  </div>
                </div>

                <form className="space-y-8">
                  {/* Full Name */}
                  <div className="space-y-3">
                    <label className="text-sm font-semibold block" style={headingStyle}>Full Name <span className="text-red-500">*</span></label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div><input type="text" id="firstName" required className={inputClass} /><label htmlFor="firstName" className="text-xs mt-1 block" style={labelStyle}>First Name</label></div>
                      <div><input type="text" id="lastName" required className={inputClass} /><label htmlFor="lastName" className="text-xs mt-1 block" style={labelStyle}>Last Name</label></div>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="space-y-3">
                    <label className="text-sm font-semibold block" style={headingStyle}>Phone Number <span className="text-red-500">*</span></label>
                    <div className="flex gap-4">
                      <div className="w-24"><input type="text" id="areaCode" required className={inputClass} /><label htmlFor="areaCode" className="text-xs mt-1 block" style={labelStyle}>Area Code</label></div>
                      <div className="hidden sm:flex items-center" style={labelStyle}>-</div>
                      <div className="flex-1"><input type="text" id="phoneNumber" required className={inputClass} /><label htmlFor="phoneNumber" className="text-xs mt-1 block" style={labelStyle}>Phone Number</label></div>
                    </div>
                  </div>

                  {/* Address */}
                  <div className="space-y-3">
                    <label className="text-sm font-semibold block" style={headingStyle}>Address</label>
                    <div className="space-y-4">
                      <div><input type="text" id="streetAddress" className={inputClass} /><label htmlFor="streetAddress" className="text-xs mt-1 block" style={labelStyle}>Street Address</label></div>
                      <div><input type="text" id="streetAddress2" className={inputClass} /><label htmlFor="streetAddress2" className="text-xs mt-1 block" style={labelStyle}>Street Address Line 2</label></div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div><input type="text" id="city" className={inputClass} /><label htmlFor="city" className="text-xs mt-1 block" style={labelStyle}>City</label></div>
                        <div><input type="text" id="state" className={inputClass} /><label htmlFor="state" className="text-xs mt-1 block" style={labelStyle}>State / Province</label></div>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div><input type="text" id="zipCode" className={inputClass} /><label htmlFor="zipCode" className="text-xs mt-1 block" style={labelStyle}>Postal / Zip Code</label></div>
                        <div>
                          <select id="country" className={inputClass + " appearance-none"}>
                            <option value="">Please Select</option>
                            <option value="US">United States</option>
                            <option value="CA">Canada</option>
                            <option value="MX">Mexico</option>
                          </select>
                          <label htmlFor="country" className="text-xs mt-1 block" style={labelStyle}>Country</label>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Date */}
                  <div className="space-y-3">
                    <label className="text-sm font-semibold block" style={headingStyle}>Today's date</label>
                    <div className="max-w-xs"><input type="date" id="todaysDate" className={inputClass} /><label htmlFor="todaysDate" className="text-xs mt-1 block" style={labelStyle}>Date</label></div>
                  </div>

                  {/* Resume upload */}
                  <div className="space-y-3">
                    <label className="text-sm font-semibold block" style={headingStyle}>Upload Resume</label>
                    <label className="max-w-xs w-full flex items-center justify-center px-4 py-4 rounded-sm cursor-pointer transition-all theme-input border-dashed font-semibold text-sm" style={{ color: "var(--text-secondary)" }}>
                      Upload a File
                      <input type="file" className="hidden" />
                    </label>
                  </div>

                  {/* Questionnaire */}
                  <div className="space-y-3">
                    <label className="text-sm font-semibold block" style={headingStyle}>Job Requirement Questionnaire <span className="text-red-500">*</span></label>
                    <div className="space-y-2 text-sm font-medium" style={labelStyle}>
                      {["Do you have a Driver License?", "Do you have a Guard Card?", "Are you legally eligible to work in the United States?", "Do you have reliable transportation to work?"].map(q => (
                        <label key={q} className="flex items-center gap-3"><input type="checkbox" className={checkClass} style={{ accentColor: "var(--brand-blue)" }} /> {q}</label>
                      ))}
                      <label className="flex items-center gap-3"><input type="checkbox" className={checkClass} style={{ accentColor: "var(--brand-blue)" }} /> Other <input type="text" className="ml-2 rounded-sm px-2 py-1 theme-input w-40 text-sm" /></label>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="space-y-3">
                    <label className="text-sm font-semibold block" style={headingStyle}>Email</label>
                    <div className="max-w-md"><input type="email" id="appEmail" placeholder="example@example.com" className={inputClass} /></div>
                  </div>

                  {/* Guard experience */}
                  <div className="space-y-3">
                    <label className="text-sm font-semibold block" style={headingStyle}>Have you worked as a guard before?</label>
                    <div className="max-w-md"><input type="text" id="guardBefore" className={inputClass} /><label htmlFor="guardBefore" className="text-xs mt-1 block" style={labelStyle}>If yes, Provide the name of the company</label></div>
                  </div>

                  {/* Position */}
                  <div className="space-y-3">
                    <label className="text-sm font-semibold block" style={headingStyle}>What position are you applying for?</label>
                    <div className="space-y-2 text-sm font-medium" style={labelStyle}>
                      {["Unarmed Guard", "Flex Officer", "Daytime Supervisor", "Night Supervisor", "Weekend Day Supervisor", "Weekend Night Supervisor"].map(pos => (
                        <label key={pos} className="flex items-center gap-3"><input type="checkbox" className={checkClass} style={{ accentColor: "var(--brand-blue)" }} /> {pos}</label>
                      ))}
                    </div>
                  </div>

                  {/* Start date */}
                  <div className="space-y-3">
                    <label className="text-sm font-semibold block" style={headingStyle}>When can you start? <span className="text-red-500">*</span></label>
                    <div className="max-w-xs"><input type="date" id="startDate" required className={inputClass} /></div>
                  </div>

                  <h3 className="text-xl font-bold pt-8 pb-4 border-b editorial-heading" style={{ ...headingStyle, borderColor: "var(--surface-border)" }}>Employment Questions</h3>

                  {/* Salary */}
                  <div className="space-y-3">
                    <label className="text-sm font-semibold block" style={headingStyle}>What are your salary expectations?</label>
                    <div className="max-w-xs">
                      <select className={inputClass + " appearance-none"}>
                        <option value=""></option>
                        <option value="minimum">Minimum Wage</option>
                        <option value="15-20">$15 - $20 / hr</option>
                        <option value="20-25">$20 - $25 / hr</option>
                        <option value="25+">$25+ / hr</option>
                      </select>
                    </div>
                  </div>

                  {/* Employment type */}
                  <div className="space-y-3">
                    <label className="text-sm font-semibold block" style={headingStyle}>Are you interested in full-time, part-time or either?</label>
                    <div className="max-w-xs">
                      <select className={inputClass + " appearance-none"}>
                        <option value=""></option>
                        <option value="full-time">Full-Time</option>
                        <option value="part-time">Part-Time</option>
                        <option value="either">Either</option>
                      </select>
                    </div>
                  </div>

                  {/* English */}
                  <div className="space-y-3">
                    <label className="text-sm font-semibold block" style={headingStyle}>Are you able to communicate (orally and in writing) in English?</label>
                    <div className="max-w-xs">
                      <select className={inputClass + " appearance-none"}>
                        <option value=""></option>
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                      </select>
                    </div>
                  </div>

                  {/* Computer skills */}
                  <div className="space-y-3">
                    <label className="text-sm font-semibold block" style={headingStyle}>How adept are you in learning rising computer software programs?</label>
                    <div className="space-y-2 text-sm font-medium" style={labelStyle}>
                      {["Experienced", "Averaged", "NO Experience"].map(opt => (
                        <label key={opt} className="flex items-center gap-3"><input type="radio" name="adept" className="w-4 h-4" style={{ accentColor: "var(--brand-blue)" }} /> {opt}</label>
                      ))}
                    </div>
                  </div>

                  {/* Mobile tech */}
                  <div className="space-y-3">
                    <label className="text-sm font-semibold block" style={headingStyle}>Which mobile technologies are you experienced in using?</label>
                    <div className="space-y-2 text-sm font-medium" style={labelStyle}>
                      {["Apple", "Android", "Guard Tek Device"].map(opt => (
                        <label key={opt} className="flex items-center gap-3"><input type="radio" name="mobileTech" className="w-4 h-4" style={{ accentColor: "var(--brand-blue)" }} /> {opt}</label>
                      ))}
                      <label className="flex items-center gap-3"><input type="radio" name="mobileTech" className="w-4 h-4" style={{ accentColor: "var(--brand-blue)" }} /> Other <input type="text" className="ml-2 rounded-sm px-2 py-1 theme-input w-40 text-sm" /></label>
                    </div>
                  </div>

                  {/* Email skills */}
                  <div className="space-y-3">
                    <label className="text-sm font-semibold block" style={headingStyle}>How would you rate your e-mail skills and use of the online Time Clock Software?</label>
                    <div className="space-y-2 text-sm font-medium" style={labelStyle}>
                      {["Excellent", "Good", "Poor"].map(opt => (
                        <label key={opt} className="flex items-center gap-3"><input type="radio" name="emailSkills" className="w-4 h-4" style={{ accentColor: "var(--brand-blue)" }} /> {opt}</label>
                      ))}
                    </div>
                  </div>

                  {/* Signature */}
                  <div className="space-y-3">
                    <label className="text-sm font-semibold block" style={headingStyle}>Signature <span className="text-red-500">*</span></label>
                    <div className="max-w-md"><SignatureCanvas name="signature" required /></div>
                  </div>

                  <div className="pt-8 border-t flex flex-wrap justify-end gap-4" style={{ borderColor: "var(--surface-border)" }}>
                    <Button type="button" variant="outline" className="font-semibold">Save</Button>
                    <Button type="button" variant="primary">Submit</Button>
                    <Button type="button" variant="outline" className="font-semibold">Clear Form</Button>
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
