import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/Button";
import type { Metadata } from "next";
import { SignatureCanvas } from "@/components/ui/SignatureCanvas";

export const metadata: Metadata = {
  title: "SSM Academy",
  description: "Training Packages for Security Systems Management Inc.",
};

const inputClass = "w-full rounded-sm px-4 py-2.5 transition-all shadow-sm theme-input";
const checkClass = "mt-1 rounded w-4 h-4 shrink-0";
const labelStyle = { color: "var(--text-secondary)" };
const headingStyle = { color: "var(--text-primary)" };

const packages = [
  { id: "A", price: "$97.00", desc: "Guard card Training — Two Classes in one day" },
  { id: "B", price: "$50.00", desc: "Resume Creation, interview Practice, Employment Readiness Workshop" },
  { id: "C", price: null, desc: "DOJ and FBI Fingerprinting and background Check", note: "($32 DOJ, $19 FBI, $35 Fingerprinting and Live-Scan)" },
  { id: "D", price: "$25.00", desc: "Processing and mailing package for you" },
];

export default function SSMAcademyPage() {
  return (
    <>
      <section className="py-20 border-b" style={{ backgroundColor: "var(--section-alt)", borderColor: "var(--surface-border)" }}>
        <Container>
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold editorial-heading mb-4 uppercase" style={headingStyle}>ACADEMY</h1>
          </div>
        </Container>
      </section>

      <Section className="min-h-[50vh]" style={{ backgroundColor: "var(--bg-base)" }}>
        <Container>
          <div className="max-w-4xl mx-auto">
            {/* Training Packages */}
            <div className="corporate-card p-8 lg:p-12 border-t-4" style={{ borderTopColor: "var(--brand-blue)" }}>
              <h2 className="text-2xl font-bold editorial-heading mb-8 border-b pb-4"
                style={{ ...headingStyle, borderColor: "var(--surface-border)" }}>Training Packages</h2>
              <ul className="space-y-6">
                {packages.map((pkg) => (
                  <li key={pkg.id} className="flex items-start gap-4 p-6 rounded-sm border"
                    style={{ backgroundColor: "var(--section-alt)", borderColor: "var(--surface-border)" }}>
                    <div className="w-10 h-10 rounded-sm flex items-center justify-center font-bold shrink-0 border"
                      style={{ backgroundColor: "var(--bg-muted)", color: "var(--brand-blue)", borderColor: "var(--surface-border)" }}>
                      {pkg.id}
                    </div>
                    <div>
                      {pkg.price && <span className="font-bold text-lg block mb-1" style={headingStyle}>{pkg.price}</span>}
                      <span className="font-bold block" style={headingStyle}>{pkg.desc}</span>
                      {pkg.note && <span className="text-sm font-medium italic block mt-1" style={{ color: "var(--brand-blue)" }}>{pkg.note}</span>}
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Schedule Form */}
            <div className="mt-16 corporate-card p-8 lg:p-12">
              <h2 className="text-3xl font-bold editorial-heading mb-8 border-b pb-4 uppercase tracking-wider"
                style={{ ...headingStyle, borderColor: "var(--surface-border)" }}>SCHEDULE A CLASS</h2>

              <div className="rounded-sm p-8 border" style={{ backgroundColor: "var(--section-alt)", borderColor: "var(--surface-border)" }}>
                <div className="mb-10 border-b pb-8" style={{ borderColor: "var(--surface-border)" }}>
                  <h3 className="text-3xl font-bold mb-2 editorial-heading" style={headingStyle}>SSM Academy</h3>
                  <p className="text-lg mb-8 font-medium" style={labelStyle}>Guard Card Classes</p>
                  <div className="space-y-3 p-6 rounded-sm border corporate-card">
                    <p className="font-bold text-lg" style={headingStyle}>Tell a Friend - Security Systems Management</p>
                    <p className="font-bold text-lg" style={{ color: "var(--brand-blue)" }}>A Quick Route To Success</p>
                    <p className="font-bold text-lg" style={headingStyle}>510-363-9189</p>
                  </div>
                  <div className="mt-8 space-y-2 font-medium" style={labelStyle}>
                    <p className="font-bold" style={headingStyle}>SSM Academy</p>
                    <p>24301 Southland Drive, Suite B5</p>
                    <p>Hayward, CA, 94545</p>
                  </div>
                </div>

                <form className="space-y-8">
                  {/* Name */}
                  <div className="space-y-3">
                    <label className="text-sm font-semibold block" style={headingStyle}>Name</label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div><input type="text" id="firstName" className={inputClass} /><label htmlFor="firstName" className="text-xs mt-1 block" style={labelStyle}>First Name</label></div>
                      <div><input type="text" id="lastName" className={inputClass} /><label htmlFor="lastName" className="text-xs mt-1 block" style={labelStyle}>Last Name</label></div>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="space-y-3">
                    <label className="text-sm font-semibold block" style={headingStyle}>Phone Number</label>
                    <div className="flex gap-4">
                      <div className="w-24"><input type="text" id="areaCode" className={inputClass} /><label htmlFor="areaCode" className="text-xs mt-1 block" style={labelStyle}>Area Code</label></div>
                      <div className="hidden sm:flex items-center" style={labelStyle}>-</div>
                      <div className="flex-1"><input type="text" id="phoneNumber" className={inputClass} /><label htmlFor="phoneNumber" className="text-xs mt-1 block" style={labelStyle}>Phone Number</label></div>
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
                      <div><input type="text" id="zipCode" className={inputClass} /><label htmlFor="zipCode" className="text-xs mt-1 block" style={labelStyle}>Postal / Zip Code</label></div>
                    </div>
                  </div>

                  {/* Note */}
                  <div className="py-6 space-y-3 p-6 rounded-sm border corporate-card">
                    <h4 className="text-lg font-bold mb-2" style={headingStyle}>Note:</h4>
                    <p className="font-medium" style={labelStyle}>Classes are capped at a maximum of 8 students.</p>
                    <p className="font-medium" style={labelStyle}>Pre-payment ensures that your preferred class will not fill up.</p>
                    <p className="italic text-sm" style={labelStyle}>*Extra time is provided at the end of each class for test re-takes or questions.</p>
                  </div>

                  {/* Book a class */}
                  <div className="space-y-3">
                    <label className="text-sm font-semibold block" style={headingStyle}>Book A Class <span className="text-red-500">*</span></label>
                    <select className={inputClass} size={2}>
                      <option className="p-2">Monday @9:00 AM-5:00 PM (February 17th) {"{8}"}</option>
                      <option className="p-2">Monday @9:00 AM-5:00 PM (March 16th) {"{8}"}</option>
                    </select>
                  </div>

                  {/* Packages selection */}
                  <div className="space-y-3 pt-4">
                    <label className="text-sm font-semibold block" style={headingStyle}>Training Packages</label>
                    <div className="space-y-3 text-sm font-medium" style={labelStyle}>
                      {[
                        "A-$97.00 Guard card Training-Two Classes in one day",
                        "B-$50.00 Resume Creation, interview Practice, Employment Readiness Workshop",
                        "C-DOJ and FBI Fingerprinting and background Check ($32 DOJ, $19 FBI, $35 Fingerprinting and Live-Scan)",
                        "D-$25.00 Processing and mailing package for you",
                        "E-Employee Orientation Training for New guards, how we do it at SSM",
                        "FBI-DOJ Livescan $80",
                      ].map((pkg) => (
                        <label key={pkg} className="flex items-start gap-3"><input type="checkbox" className={checkClass} style={{ accentColor: "var(--brand-blue)" }} /> {pkg}</label>
                      ))}
                      <label className="flex items-center gap-3"><input type="checkbox" className="rounded w-4 h-4 shrink-0" style={{ accentColor: "var(--brand-blue)" }} /> Other <input type="text" className="ml-2 rounded-sm px-2 py-1 theme-input w-40 text-sm" /></label>
                    </div>
                  </div>

                  {/* Discount note */}
                  <div className="py-4 px-6 rounded-sm border italic text-sm" style={{ color: "var(--text-muted)", borderColor: "var(--surface-border)", backgroundColor: "var(--bg-muted)" }}>
                    10% Discount for new hire on one-year contract with SSM employee pay-as-you-go repayment plan. *Not every graduate can be placed at SSM, check post availability.
                  </div>

                  {/* Signature */}
                  <div className="space-y-3">
                    <label className="text-sm font-semibold block" style={headingStyle}>Signature <span className="text-red-500">*</span></label>
                    <div className="max-w-md"><SignatureCanvas name="signature" required /></div>
                  </div>

                  <div className="pt-8 flex justify-start">
                    <Button type="button" variant="primary" size="lg" className="px-8">Submit</Button>
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
