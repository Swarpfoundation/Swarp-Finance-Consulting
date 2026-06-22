"use client";

import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer
      className="w-full"
      style={{
        background: "var(--black)",
        borderTop: "1px solid rgba(250, 250, 250, 0.1)",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-10 py-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {/* Left Column - Brand */}
          <div className="flex flex-col">
            <span
              className="text-white leading-none"
              style={{
                fontFamily: "'Instrument Serif', serif",
                fontSize: "48px",
              }}
            >
              SWARP
            </span>
            <span
              className="leading-none mt-1"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "12px",
                color: "var(--gold)",
                letterSpacing: "0.3em",
              }}
            >
              CONSULTING
            </span>
            <p
              className="mt-4 font-body text-base"
              style={{ color: "var(--light-gray)" }}
            >
              Formazione finanziata per il tuo business
            </p>
            {/* Italian Tricolor */}
            <div className="flex gap-0 mt-3" style={{ width: "60px", height: "3px" }}>
              <div style={{ flex: 1, background: "var(--green)" }} />
              <div style={{ flex: 1, background: "var(--white)" }} />
              <div style={{ flex: 1, background: "var(--red)" }} />
            </div>
          </div>

          {/* Center Column - Contact */}
          <div className="flex flex-col gap-4">
            <h4
              className="font-body text-sm uppercase tracking-widest"
              style={{ color: "var(--light-gray)" }}
            >
              Contatti
            </h4>
            <a
              href="mailto:info@swarpconsulting.com"
              className="flex items-center gap-2 font-body text-base text-white hover:text-[var(--gold)] transition-colors duration-300"
            >
              <Mail size={16} />
              info@swarpconsulting.com
            </a>
            <a
              href="tel:+393759836127"
              className="flex items-center gap-2 font-body text-base text-white hover:text-[var(--gold)] transition-colors duration-300"
            >
              <Phone size={16} />
              +39 375 983 6127
            </a>
            <a
              href="tel:+393759941811"
              className="flex items-center gap-2 font-body text-base text-white hover:text-[var(--gold)] transition-colors duration-300"
            >
              <Phone size={16} />
              +39 375 994 1811
            </a>
            <span className="flex items-center gap-2 font-body text-base" style={{ color: "var(--light-gray)" }}>
              <MapPin size={16} />
              Viale Tunisia 22, 20124 Milano
            </span>
          </div>

          {/* Right Column - Links */}
          <div className="flex flex-col gap-4">
            <h4
              className="font-body text-sm uppercase tracking-widest"
              style={{ color: "var(--light-gray)" }}
            >
              Collegamenti
            </h4>
            <Link
              href="/privacy"
              className="font-body text-base text-white hover:text-[var(--gold)] hover:underline transition-colors duration-300"
            >
              Privacy Policy
            </Link>
            <a
              href="mailto:info@swarpconsulting.com?subject=Candidatura%20Swarp%20Consulting"
              className="font-body text-base text-white hover:text-[var(--gold)] hover:underline transition-colors duration-300"
            >
              Lavora con noi
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div
        className="w-full py-6 px-6 lg:px-10"
        style={{ borderTop: "1px solid rgba(250, 250, 250, 0.1)" }}
      >
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="font-body text-xs" style={{ color: "var(--light-gray)" }}>
            Swarp Foundation S.r.l. | C.F. / P. IVA 14284090967 | REA MI-2771688
          </span>
        </div>
      </div>
    </footer>
  );
}
