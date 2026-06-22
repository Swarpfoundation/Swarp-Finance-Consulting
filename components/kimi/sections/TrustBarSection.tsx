"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const partners = [
  "FORMAZIENDA",
  "FONARCOM",
  "FSE+ LOMBARDIA",
  "INPS",
  "SICUREZZA SUL LAVORO",
  "PRIMO SOCCORSO",
  "ANTINCENDIO",
  "MARKETING",
  "VENDITE",
  "EXCEL",
  "INTELLIGENZA ARTIFICIALE",
  "LINGUE",
];

export default function TrustBarSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const anim = gsap.fromTo(
      el,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 0.6,
        scrollTrigger: { trigger: el, start: "top 90%", once: true },
      }
    );
    return () => { anim.kill(); };
  }, []);

  return (
    <div
      ref={sectionRef}
      className="w-full py-12 opacity-0"
      style={{
        background: "var(--black)",
        borderTop: "1px solid rgba(250, 250, 250, 0.1)",
        borderBottom: "1px solid rgba(250, 250, 250, 0.1)",
      }}
    >
      <div className="relative overflow-hidden">
        {/* Left gradient mask */}
        <div
          className="absolute left-0 top-0 bottom-0 z-10"
          style={{
            width: "80px",
            background: "linear-gradient(to right, #1A1A1A, transparent)",
          }}
        />
        {/* Right gradient mask */}
        <div
          className="absolute right-0 top-0 bottom-0 z-10"
          style={{
            width: "80px",
            background: "linear-gradient(to left, #1A1A1A, transparent)",
          }}
        />

        {/* Scrolling track */}
        <div
          className="flex gap-20 items-center"
          style={{
            width: "max-content",
            animation: "scrollLogos 30s linear infinite",
          }}
        >
          {/* Double the logos for seamless scroll */}
          {[...partners, ...partners].map((name, i) => (
            <span
              key={i}
              className="font-body text-sm font-medium uppercase tracking-[0.15em] whitespace-nowrap transition-all duration-300 hover:text-white cursor-default"
              style={{
                color: "var(--light-gray)",
                opacity: 0.7,
              }}
              onMouseEnter={(e) => {
                (e.target as HTMLElement).style.opacity = "1";
                (e.target as HTMLElement).style.color = "var(--gold)";
              }}
              onMouseLeave={(e) => {
                (e.target as HTMLElement).style.opacity = "0.7";
                (e.target as HTMLElement).style.color = "var(--light-gray)";
              }}
            >
              {name}
            </span>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes scrollLogos {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}
