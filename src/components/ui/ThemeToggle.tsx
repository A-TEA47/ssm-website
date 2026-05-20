"use client";

import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch: only render after mount
  useEffect(() => setMounted(true), []);
  if (!mounted) return <div className="w-9 h-9" />;

  const isDark = theme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className="relative w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
      style={{
        backgroundColor: isDark ? "rgba(255,255,255,0.08)" : "rgba(15,23,42,0.07)",
      }}
      title={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      <span
        className="absolute inset-0 rounded-full transition-all duration-300"
        style={{
          backgroundColor: isDark
            ? "rgba(96, 165, 250, 0.15)"
            : "rgba(37, 99, 235, 0.08)",
        }}
      />
      <span
        key={isDark ? "moon" : "sun"}
        className="relative z-10 transition-all duration-300"
        style={{
          color: isDark ? "#60A5FA" : "#2563EB",
        }}
      >
        {isDark ? (
          <Sun className="w-4.5 h-4.5" strokeWidth={2} />
        ) : (
          <Moon className="w-4.5 h-4.5" strokeWidth={2} />
        )}
      </span>
    </button>
  );
}
