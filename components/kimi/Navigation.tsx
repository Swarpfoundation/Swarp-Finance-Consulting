"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useLenis } from "@/components/kimi/hooks/useLenis";

const navLinks = [
  { label: "Servizi", target: "#servizi" },
  { label: "Processo", target: "#processo" },
  { label: "Formazione", target: "#formazione" },
  { label: "Bandi", target: "#bandi" },
  { label: "FAQ", target: "#faq" },
  { label: "Contatti", target: "#contatti" },
];

export default function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { scrollTo } = useLenis();

  const handleNavClick = (target: string) => {
    setMobileOpen(false);
    scrollTo(target, { offset: -64 });
  };

  return (
    <>
      <nav
        className="fixed left-0 right-0 top-0 z-50 flex h-16 items-center justify-between px-6 lg:px-10"
        style={{
          background: "rgba(26, 26, 26, 0.85)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          borderBottom: "1px solid rgba(250, 250, 250, 0.1)",
        }}
      >
        <Link href="/" className="flex flex-col items-start">
          <span
            className="leading-none text-white"
            style={{
              fontFamily: "'Instrument Serif', serif",
              fontSize: "24px",
              fontWeight: 700,
              letterSpacing: "-0.02em",
            }}
          >
            SWARP
          </span>
          <span
            className="leading-none"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "10px",
              color: "var(--gold)",
              letterSpacing: "0.3em",
              fontWeight: 500,
            }}
          >
            CONSULTING
          </span>
        </Link>

        <div className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <button
              key={link.target}
              onClick={() => handleNavClick(link.target)}
              className="cursor-pointer border-none bg-transparent font-body text-sm font-medium uppercase tracking-widest text-white transition-colors duration-300 hover:text-[var(--gold)]"
            >
              {link.label}
            </button>
          ))}
        </div>

        <button
          onClick={() => handleNavClick("#contatti")}
          className="hidden cursor-pointer rounded px-5 py-2.5 font-body text-[13px] font-semibold uppercase transition-all duration-300 hover:scale-[1.02] lg:block"
          style={{
            background: "var(--gold)",
            color: "var(--black)",
          }}
        >
          Consulenza Gratuita
        </button>

        <button
          className="cursor-pointer border-none bg-transparent text-white lg:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Chiudi menu" : "Apri menu"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-8"
          style={{
            background: "rgba(26, 26, 26, 0.98)",
            backdropFilter: "blur(20px)",
          }}
        >
          {navLinks.map((link) => (
            <button
              key={link.target}
              onClick={() => handleNavClick(link.target)}
              className="cursor-pointer border-none bg-transparent font-body text-3xl font-medium text-white transition-colors duration-300 hover:text-[var(--gold)]"
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => handleNavClick("#contatti")}
            className="mt-4 cursor-pointer rounded px-8 py-3 font-body text-sm font-semibold uppercase"
            style={{ background: "var(--gold)", color: "var(--black)" }}
          >
            Consulenza Gratuita
          </button>
        </div>
      )}
    </>
  );
}
