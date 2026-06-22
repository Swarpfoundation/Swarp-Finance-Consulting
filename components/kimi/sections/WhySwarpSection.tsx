"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SectionOverline from "@/components/kimi/SectionOverline";
import SplitHeading from "@/components/kimi/SplitHeading";

gsap.registerPlugin(ScrollTrigger);

const proofPoints = [
  "Corsi per tutte le aziende private con almeno un dipendente",
  "Formazione finanziabile fino al 100%, in base ai requisiti",
  "Burocrazia gestita da Swarp",
  "Percorsi per ogni settore e area professionale",
];

export default function WhySwarpSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        section.querySelector(".why-copy"),
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: { trigger: section, start: "top 75%", once: true },
        },
      );

      gsap.fromTo(
        section.querySelectorAll(".why-proof"),
        { opacity: 0, x: 30 },
        {
          opacity: 1,
          x: 0,
          duration: 0.55,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: { trigger: ".why-proof-grid", start: "top 80%", once: true },
        },
      );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="perche-swarp"
      ref={sectionRef}
      className="relative w-full overflow-hidden"
      style={{ background: "var(--black)", padding: "128px 0" }}
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(700px 500px at 88% 20%, rgba(200,164,92,0.12), transparent 65%)",
        }}
      />

      <div className="relative mx-auto max-w-6xl px-6 lg:px-10">
        <div className="grid items-start gap-16 lg:grid-cols-[0.72fr_1.28fr]">
          <div>
            <SectionOverline>PERCHÉ SWARP</SectionOverline>
            <SplitHeading as="h2" className="mt-4">
              Risorse già versate. Competenze ancora da costruire.
            </SplitHeading>
          </div>

          <div className="why-copy opacity-0">
            <p
              className="font-display"
              style={{
                color: "var(--white)",
                fontSize: "clamp(26px, 3vw, 42px)",
                lineHeight: 1.18,
              }}
            >
              Ogni mese le aziende versano lo <span style={{ color: "var(--gold)" }}>0,30%</span>{" "}
              dei contributi destinati alla formazione dei dipendenti.
            </p>
            <p
              className="mt-6 font-body"
              style={{ color: "var(--light-gray)", fontSize: "18px", lineHeight: 1.7 }}
            >
              Molte imprese non sanno che queste risorse possono essere utilizzate. I fondi non
              impiegati tornano all&apos;INPS: Swarp ti aiuta a capire cosa può essere finanziato,
              gestisce la procedura e trasforma il fondo in corsi concreti per il tuo team.
            </p>
          </div>
        </div>

        <div className="why-proof-grid mt-20 grid gap-px overflow-hidden rounded-lg border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
          {proofPoints.map((point, index) => (
            <div key={point} className="why-proof bg-[var(--black)] p-7 opacity-0">
              <span className="font-display text-3xl" style={{ color: "var(--gold)" }}>
                0{index + 1}
              </span>
              <p className="mt-5 font-body leading-7 text-white/75">{point}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
