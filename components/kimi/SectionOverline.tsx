"use client";

interface SectionOverlineProps {
  children: string;
  className?: string;
}

export default function SectionOverline({ children, className = "" }: SectionOverlineProps) {
  return (
    <span
      className={`inline-block font-body text-xs uppercase tracking-[0.2em] ${className}`}
      style={{ color: "var(--gold)" }}
    >
      {children}
    </span>
  );
}
