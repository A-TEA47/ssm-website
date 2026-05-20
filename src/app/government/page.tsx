import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { FileText, Download } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Government Services",
  description: "Download SSM Inc. Government Brochures and Services.",
};

const docs = [
  {
    label: "E6. Brochure_Security Systems Management Inc.pdf",
    href: "https://img1.wsimg.com/blobby/go/94663fab-43bc-4548-8196-d416ddebf9fc/E6.%20Brochure_Security%20Systems%20Management%20Inc.pdf",
  },
  {
    label: "SSm2-0001.pdf",
    href: "https://img1.wsimg.com/blobby/go/94663fab-43bc-4548-8196-d416ddebf9fc/SSm2-0001.pdf",
  },
];

export default function GovernmentPage() {
  return (
    <>
      <section className="py-20 border-b" style={{ backgroundColor: "var(--section-alt)", borderColor: "var(--surface-border)" }}>
        <Container className="relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold editorial-heading mb-4 uppercase" style={{ color: "var(--text-primary)" }}>GOVERNMENT</h1>
          </div>
        </Container>
      </section>

      <Section className="min-h-[50vh]" style={{ backgroundColor: "var(--bg-base)" }}>
        <Container>
          <div className="max-w-3xl mx-auto space-y-6">
            {docs.map((doc) => (
              <a
                key={doc.label}
                href={doc.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-6 rounded-sm border transition-all group"
                style={{
                  backgroundColor: "var(--card-bg)",
                  borderColor: "var(--card-border)",
                  boxShadow: "var(--card-shadow)",
                }}
              >
                <div
                  className="p-4 rounded-sm border transition-colors"
                  style={{
                    backgroundColor: "var(--bg-muted)",
                    color: "var(--brand-blue)",
                    borderColor: "var(--surface-border)",
                  }}
                >
                  <FileText className="w-8 h-8" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold editorial-heading mb-1" style={{ color: "var(--text-primary)" }}>{doc.label}</h3>
                  <span className="text-sm font-semibold flex items-center gap-2" style={{ color: "var(--brand-blue)" }}>
                    <Download className="w-4 h-4" /> Download PDF
                  </span>
                </div>
              </a>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
