import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  href: string;
  className?: string;
}

export function ServiceCard({ title, description, icon, href, className }: ServiceCardProps) {
  return (
    <Link 
      href={href}
      className={cn(
        "group relative flex flex-col justify-between overflow-hidden rounded-xl bg-surface p-8 transition-all hover:bg-surface-hover hover:shadow-xl hover:-translate-y-1 border border-white/5",
        className
      )}
    >
      <div>
        <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary-light text-secondary group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>
        <h3 className="mb-3 text-xl font-semibold text-white heading-premium group-hover:text-secondary transition-colors">
          {title}
        </h3>
        <p className="text-muted leading-relaxed mb-6">
          {description}
        </p>
      </div>
      <div className="mt-auto flex items-center text-sm font-medium text-secondary group-hover:text-white transition-colors">
        Learn more <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
      </div>
    </Link>
  );
}
