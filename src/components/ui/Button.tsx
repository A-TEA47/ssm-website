import React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "@/lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", asChild = false, style, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";

    const variantStyle: React.CSSProperties = (() => {
      switch (variant) {
        case "primary":
          return {
            backgroundColor: "var(--brand-navy)",
            color: "#FFFFFF",
            boxShadow: "0 1px 3px rgba(0,0,0,0.12)",
          };
        case "secondary":
          return {
            backgroundColor: "var(--brand-blue)",
            color: "#FFFFFF",
            boxShadow: "0 1px 3px rgba(0,0,0,0.12)",
          };
        case "outline":
          return {
            border: "1px solid var(--brand-blue)",
            color: "var(--brand-blue)",
            backgroundColor: "transparent",
          };
        case "ghost":
          return {
            backgroundColor: "transparent",
            color: "var(--text-primary)",
          };
      }
    })();

    return (
      <Comp
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center rounded-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:opacity-90 hover:shadow-md",
          {
            "h-9 px-4 text-sm": size === "sm",
            "h-11 px-8 text-base": size === "md",
            "h-14 px-10 text-lg": size === "lg",
          },
          className
        )}
        style={{ ...variantStyle, ...style }}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

export { Button };
