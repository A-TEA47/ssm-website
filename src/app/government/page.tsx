import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { FileText, Download } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Government Services",
  description: "Download SSM Inc. Government Brochures and Services.",
};

export default function GovernmentPage() {
  return (
    <>
      <section className="bg-surface py-20 border-b border-white/5">
        <Container>
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white heading-premium mb-4 uppercase">
              GOVERNMENT
            </h1>
          </div>
        </Container>
      </section>

      <Section className="bg-background min-h-[50vh]">
        <Container>
          <div className="max-w-3xl mx-auto space-y-6">
            <a 
              href="https://img1.wsimg.com/blobby/go/94663fab-43bc-4548-8196-d416ddebf9fc/E6.%20Brochure_Security%20Systems%20Management%20Inc.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-4 bg-surface p-6 rounded-xl border border-white/5 hover:border-secondary transition-colors group"
            >
              <div className="bg-primary/20 p-4 rounded-lg text-secondary group-hover:bg-secondary group-hover:text-white transition-colors">
                <FileText className="w-8 h-8" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-white mb-1">E6. Brochure_Security Systems Management Inc.pdf</h3>
                <span className="text-secondary text-sm font-medium flex items-center gap-2">
                  <Download className="w-4 h-4" /> Download PDF
                </span>
              </div>
            </a>

            <a 
              href="https://img1.wsimg.com/blobby/go/94663fab-43bc-4548-8196-d416ddebf9fc/SSm2-0001.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-4 bg-surface p-6 rounded-xl border border-white/5 hover:border-secondary transition-colors group"
            >
              <div className="bg-primary/20 p-4 rounded-lg text-secondary group-hover:bg-secondary group-hover:text-white transition-colors">
                <FileText className="w-8 h-8" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-white mb-1">SSm2-0001.pdf</h3>
                <span className="text-secondary text-sm font-medium flex items-center gap-2">
                  <Download className="w-4 h-4" /> Download PDF
                </span>
              </div>
            </a>
          </div>
        </Container>
      </Section>
    </>
  );
}
