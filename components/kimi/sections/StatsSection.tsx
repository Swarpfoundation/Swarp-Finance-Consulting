"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SectionOverline from "@/components/kimi/SectionOverline";
import SplitHeading from "@/components/kimi/SplitHeading";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { value: 100, suffix: "%", prefix: "", label: "Formazione finanziabile in base ai requisiti" },
  { value: 2, suffix: "", prefix: "", label: "Fondi gestiti: Formazienda e FonARCom" },
  { value: 2000, suffix: "", prefix: "€", label: "Valore massimo percorsi per partecipante FSE+" },
  { value: 45, suffix: " giorni", prefix: "", label: "Tempo indicativo per iscrizione al fondo" },
];

export default function StatsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const numbersRef = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      // Number count-up
      stats.forEach((stat, i) => {
        const el = numbersRef.current[i];
        if (!el) return;

        const proxy = { val: 0 };
        gsap.to(proxy, {
          val: stat.value,
          duration: 2.0,
          ease: "power2.out",
          delay: i * 0.1,
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            once: true,
          },
          onUpdate: () => {
            const display =
              stat.value >= 1000
                ? Math.round(proxy.val).toLocaleString("it-IT")
                : Math.round(proxy.val).toString();
            el.textContent = `${stat.prefix}${display}${stat.suffix}`;
          },
        });
      });

      // Divider lines scale in
      const dividers = section.querySelectorAll(".stat-divider");
      gsap.fromTo(
        dividers,
        { scaleX: 0 },
        {
          scaleX: 1,
          duration: 0.4,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: { trigger: section, start: "top 80%", once: true },
        }
      );

      // Cards fade up
      const cards = section.querySelectorAll(".stat-card");
      gsap.fromTo(
        cards,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.15,
          ease: "power2.out",
          scrollTrigger: { trigger: section, start: "top 80%", once: true },
        }
      );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden"
      style={{
        background: "var(--black)",
        padding: "96px 0",
        borderTop: "1px solid rgba(250, 250, 250, 0.1)",
        borderBottom: "1px solid rgba(250, 250, 250, 0.1)",
      }}
    >
      {/* Parallax background grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(200, 164, 92, 0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(200, 164, 92, 0.05) 1px, transparent 1px)
          `,
          backgroundSize: "120px 120px",
        }}
      />

      <div className="relative max-w-6xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="text-center mb-16">
          <SectionOverline>I NOSTRI NUMERI</SectionOverline>
          <SplitHeading
            as="h2"
            className="mt-4"
          >
            Numeri da verificare prima di partire
          </SplitHeading>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {stats.map((stat, i) => (
            <div key={i} className="stat-card text-center opacity-0">
              <span
                ref={(el) => { numbersRef.current[i] = el; }}
                className="font-display block"
                style={{
                  fontSize: "clamp(36px, 4vw, 56px)",
                  color: "var(--gold)",
                  fontWeight: 700,
                }}
              >
                0
              </span>
              <span
                className="font-body block mt-2"
                style={{ fontSize: "16px", color: "var(--light-gray)" }}
              >
                {stat.label}
              </span>
              <div
                className="stat-divider mx-auto mt-4"
                style={{
                  width: "40px",
                  height: "1px",
                  background: "var(--gold-dim)",
                  transform: "scaleX(0)",
                  transformOrigin: "center",
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
