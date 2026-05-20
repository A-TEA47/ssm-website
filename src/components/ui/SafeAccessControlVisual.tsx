import React from "react";
import { ShieldCheck, Thermometer, UserCheck, ShieldAlert } from "lucide-react";

export function SafeAccessControlVisual() {
  return (
    <div
      className="relative w-full h-[450px] overflow-hidden flex flex-col justify-between p-8 group rounded-sm border transition-all duration-300"
      style={{
        backgroundColor: "var(--card-bg)",
        borderColor: "var(--card-border)",
        boxShadow: "var(--card-shadow)",
      }}
    >
      {/* Background geometric accents */}
      <div className="absolute top-0 right-0 w-64 h-64 rounded-full -mr-20 -mt-20 opacity-30 z-0"
        style={{ backgroundColor: "var(--bg-subtle)" }} />
      <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full -ml-20 -mb-20 opacity-20 z-0"
        style={{ backgroundColor: "var(--brand-blue)", filter: "blur(40px)" }} />

      {/* Header */}
      <div className="relative z-10 flex justify-between items-start">
        <div>
          <span
            className="px-3.5 py-1.5 rounded-full font-semibold tracking-wider text-xs uppercase mb-3 inline-block border"
            style={{
              backgroundColor: "var(--bg-muted)",
              color: "var(--brand-blue)",
              borderColor: "var(--surface-border)",
            }}
          >
            Health & Safety Protocols
          </span>
          <h3 className="text-xl font-bold editorial-heading group-hover:opacity-80 transition-colors duration-300"
            style={{ color: "var(--text-primary)" }}>
            Access Control Solutions
          </h3>
        </div>
        <div className="p-3 rounded-xl border shadow-sm"
          style={{ backgroundColor: "var(--card-bg)", borderColor: "var(--surface-border)", color: "var(--brand-blue)" }}>
          <ShieldCheck className="w-6 h-6 animate-pulse" />
        </div>
      </div>

      {/* Metrics Grid */}
      <div className="relative z-10 grid grid-cols-3 gap-4 my-6">
        {[
          { icon: <Thermometer className="w-5 h-5" />, label: "Thermal Check", sub: "Temperature Screen" },
          { icon: <ShieldAlert className="w-5 h-5" />, label: "Face Covers", sub: "Mask Enforcement" },
          { icon: <UserCheck className="w-5 h-5" />, label: "Distancing", sub: "Occupancy Control" },
        ].map((item, i) => (
          <div
            key={i}
            className="flex flex-col items-center p-4 rounded-xl border transition-all duration-300"
            style={{
              backgroundColor: "var(--bg-subtle)",
              borderColor: "var(--surface-border)",
            }}
          >
            <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-3 border"
              style={{ backgroundColor: "var(--bg-muted)", color: "var(--brand-blue)", borderColor: "var(--surface-border)" }}>
              {item.icon}
            </div>
            <span className="text-xs font-bold text-center" style={{ color: "var(--text-primary)" }}>{item.label}</span>
            <span className="text-[10px] text-center mt-1" style={{ color: "var(--text-muted)" }}>{item.sub}</span>
          </div>
        ))}
      </div>

      {/* SVG Shield */}
      <div className="relative z-10 w-full h-36 flex items-center justify-center">
        <svg className="w-full h-full max-w-[260px]" viewBox="0 0 200 100" fill="none">
          <path
            d="M100 10L170 30V65C170 85 130 95 100 98C70 95 30 85 30 65V30L100 10Z"
            stroke="var(--surface-border)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
            fill="var(--brand-blue)" fillOpacity="0.05"
          />
          <path
            d="M100 20L155 36V62C155 77 125 85 100 88C75 85 45 77 45 62V36L100 20Z"
            stroke="var(--brand-blue)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
          />
          <path
            d="M85 54L96 65L118 42"
            stroke="var(--brand-blue)" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"
          />
          <rect x="70" y="74" width="60" height="12" rx="3" fill="var(--card-bg)" stroke="var(--brand-blue)" strokeWidth="0.5" />
          <text x="100" y="82" fill="var(--brand-blue)" fontFamily="var(--font-inter, sans-serif)"
            fontSize="6.5" fontWeight="bold" letterSpacing="0.05em" textAnchor="middle">SAFE ACCESS</text>
        </svg>
      </div>

      <p className="relative z-10 text-[11px] text-center mt-2 transition-colors" style={{ color: "var(--text-muted)" }}>
        Equipped with Raptor Technology and Lobby Guard safety screening systems.
      </p>
    </div>
  );
}
