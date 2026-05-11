import Link from "next/link";
import type { AnchorHTMLAttributes, ReactNode } from "react";

type CtaButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
};

export function CtaButton({
  href,
  children,
  variant = "primary",
  className = "",
  ...props
}: CtaButtonProps) {
  const variants = {
    primary:
      "bg-white text-slate-950 shadow-[0_20px_80px_rgba(255,255,255,0.18)] hover:bg-brand-300",
    secondary:
      "border border-white/15 bg-white/[0.04] text-white hover:border-brand-400/60 hover:bg-brand-400/10",
    ghost: "text-slate-200 hover:text-brand-200",
  };

  return (
    <Link
      href={href}
      className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-5 text-sm font-semibold transition focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-300 focus-visible:ring-offset-2 focus-visible:ring-offset-ink-950 ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </Link>
  );
}
