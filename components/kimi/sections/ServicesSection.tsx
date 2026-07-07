"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SectionOverline from "@/components/kimi/SectionOverline";
import { ShieldCheck, GraduationCap, HardHat, FileText } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    icon: ShieldCheck,
    title: "Gestione Completa",
    description:
      "Ti seguiamo in ogni fase: ti spieghiamo come funziona il fondo, ci occupiamo della documentazione e ti affianchiamo fino all'avvio dei corsi.",
    tags: ["Iscrizione", "Documenti"],
    iconColor: "var(--gold)",
  },
  {
    icon: GraduationCap,
    title: "Formazione su Misura",
    description:
      "Costruiamo percorsi formativi adattati alle esigenze della tua azienda e alle specificità del tuo settore.",
    tags: ["Piani Formativi", "Fabbisogni"],
    iconColor: "var(--gold)",
  },
  {
    icon: HardHat,
    title: "Sicurezza sul Lavoro",
    description:
      "Formazione obbligatoria su salute e sicurezza, inclusi primo soccorso e antincendio.",
    tags: ["D.Lgs. 81/08", "Antincendio", "Primo Soccorso"],
    iconColor: "var(--green)",
  },
  {
    icon: FileText,
    title: "Bandi Regionali",
    description:
      "Monitoriamo e valutiamo le principali opportunità regionali attive, come ad esempio il bando FSE+ Lombardia 2021-2027.",
    tags: ["FSE+", "Lombardia", "Co-finanziamento"],
    iconColor: "var(--gold)",
  },
];

export default function ServicesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const heading = headingRef.current;
    const cards = cardsRef.current;
    const desc = descRef.current;
    if (!section || !heading || !cards || !desc) return;

    const ctx = gsap.context(() => {
      // Scroll-rebound on heading
      gsap.fromTo(
        heading,
        { scale: 0.8, transformOrigin: "50% 100%" },
        {
          scale: 1,
          scrollTrigger: {
            trigger: section,
            start: "top bottom",
            end: "center center",
            scrub: 1,
          },
        }
      );

      // Description fade
      gsap.fromTo(
        desc,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          scrollTrigger: { trigger: desc, start: "top 80%", once: true },
        }
      );

      // Cards stagger
      const cardEls = cards.querySelectorAll(".service-card");
      gsap.fromTo(
        cardEls,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.15,
          ease: "power2.out",
          scrollTrigger: { trigger: cards, start: "top 80%", once: true },
        }
      );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="servizi"
      ref={sectionRef}
      className="relative w-full"
      style={{
        background: "var(--black)",
        padding: "128px 0",
      }}
    >
      {/* Background grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(200, 164, 92, 0.08) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(200, 164, 92, 0.08) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
          opacity: 0.15,
        }}
      />

      <div className="relative max-w-6xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="text-center mb-20">
          <SectionOverline>I NOSTRI SERVIZI</SectionOverline>
          <h2
            ref={headingRef}
            className="font-display mt-4"
            style={{
              fontSize: "clamp(28px, 3.5vw, 40px)",
              color: "var(--white)",
            }}
          >
            Accesso ai Fondi Interprofessionali
          </h2>
          <p
            ref={descRef}
            className="font-body mt-6 mx-auto max-w-2xl opacity-0"
            style={{ fontSize: "18px", color: "var(--light-gray)", lineHeight: 1.6 }}
          >
            Gestiamo la burocrazia e ti aiutiamo a ottenere i fondi per la formazione a cui la tua azienda ha già diritto.
          </p>
        </div>

        {/* Cards Grid */}
        <div
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <div
                key={i}
                className={`service-card p-10 rounded-lg transition-all duration-400 opacity-0 ${
                  i === 1 ? "md:-mt-10" : ""
                }`}
                style={{
                  background: "var(--dark-gray)",
                  border: "1px solid rgba(250, 250, 250, 0.1)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "var(--gold-dim)";
                  (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(250, 250, 250, 0.1)";
                  (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                }}
              >
                <Icon size={48} style={{ color: service.iconColor }} strokeWidth={1.5} />
                <h3
                  className="font-display mt-6"
                  style={{ fontSize: "24px", color: "var(--white)" }}
                >
                  {service.title}
                </h3>
                <p
                  className="font-body mt-3"
                  style={{ fontSize: "16px", color: "var(--light-gray)", lineHeight: 1.6 }}
                >
                  {service.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-5">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-body text-xs px-3 py-1 rounded"
                      style={{
                        color: "var(--gold)",
                        border: "1px solid var(--gold-dim)",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
