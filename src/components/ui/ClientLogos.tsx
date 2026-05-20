import React from "react";

const clients = [
  {
    name: "Enterprise Rent-A-Car",
    abbr: "enterprise",
    svgContent: (
      <text x="100" y="30" fill="currentColor" fontFamily="Georgia, serif" fontSize="19" fontWeight="bold" letterSpacing="-0.02em" textAnchor="middle">
        enterprise
      </text>
    ),
  },
  {
    name: "NOAA",
    abbr: "NOAA",
    svgContent: (
      <>
        <circle cx="24" cy="24" r="20" stroke="currentColor" strokeWidth="2" fill="currentColor" fillOpacity="0.08" />
        <path d="M8 26C12 24 16 28 20 26C24 24 28 28 32 26C36 24 40 26 40 26" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M12 18C16 16 20 20 24 16C28 20 32 16 36 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <text x="115" y="31" fill="currentColor" fontFamily="var(--font-inter, sans-serif)" fontSize="23" fontWeight="900" letterSpacing="0.15em" textAnchor="middle">NOAA</text>
      </>
    ),
  },
  {
    name: "Sheraton Hotels",
    abbr: "SHERATON",
    svgContent: (
      <>
        <circle cx="24" cy="24" r="18" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 3" />
        <text x="24" y="30" fill="currentColor" fontFamily="Georgia, serif" fontSize="20" fontWeight="bold" textAnchor="middle">S</text>
        <text x="120" y="30" fill="currentColor" fontFamily="Georgia, serif" fontSize="16" fontWeight="600" letterSpacing="0.2em" textAnchor="middle">SHERATON</text>
      </>
    ),
  },
  {
    name: "Alameda Point Collaborative",
    abbr: "APC",
    svgContent: (
      <>
        <rect x="6" y="22" width="12" height="12" stroke="currentColor" strokeWidth="2" rx="1" fill="currentColor" fillOpacity="0.1" />
        <path d="M4 22L12 14L20 22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <rect x="22" y="16" width="10" height="18" stroke="currentColor" strokeWidth="2" rx="1" fill="currentColor" fillOpacity="0.1" />
        <path d="M20 16L27 10L34 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <text x="100" y="22" fill="currentColor" fontFamily="var(--font-inter, sans-serif)" fontSize="12" fontWeight="bold" textAnchor="middle">Alameda Point</text>
        <text x="100" y="34" fill="currentColor" fontFamily="var(--font-inter, sans-serif)" fontSize="10" letterSpacing="0.05em" textAnchor="middle" opacity="0.8">Collaborative</text>
      </>
    ),
  },
  {
    name: "BAART Programs",
    abbr: "BAART",
    svgContent: (
      <>
        <path d="M12 28V12M6 18H18" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
        <path d="M4 18C4 10 12 6 12 14C12 6 20 10 20 18C20 26 12 32 12 32C12 32 4 26 4 18Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" fill="currentColor" fillOpacity="0.08" />
        <text x="110" y="24" fill="currentColor" fontFamily="var(--font-inter, sans-serif)" fontSize="16" fontWeight="bold" letterSpacing="0.05em" textAnchor="middle">BAART</text>
        <text x="110" y="35" fill="currentColor" fontFamily="var(--font-inter, sans-serif)" fontSize="10" letterSpacing="0.1em" textAnchor="middle" opacity="0.8">PROGRAMS</text>
      </>
    ),
  },
];

export function ClientLogos() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center justify-center">
      {clients.map((client) => (
        <div key={client.name} className="group flex flex-col items-center justify-center space-y-3">
          <div
            className="p-6 w-full h-28 flex items-center justify-center rounded-sm border transition-all duration-300"
            style={{
              backgroundColor: "var(--card-bg)",
              borderColor: "var(--card-border)",
              boxShadow: "var(--card-shadow)",
            }}
          >
            <svg
              className="h-10 w-full transition-all duration-300 group-hover:scale-105"
              viewBox="0 0 200 48"
              fill="none"
              style={{ color: "var(--text-muted)" }}
            >
              {client.svgContent}
            </svg>
          </div>
          <span
            className="text-xs font-semibold tracking-wide text-center transition-colors"
            style={{ color: "var(--text-muted)" }}
          >
            {client.name}
          </span>
        </div>
      ))}
    </div>
  );
}
