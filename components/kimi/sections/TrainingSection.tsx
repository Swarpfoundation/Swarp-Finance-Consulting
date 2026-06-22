"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const categories = [
  {
    number: "01",
    overline: "OBBLIGATORIA",
    title: "Formazione Obbligatoria",
    subtitle: "Salute, sicurezza e conformità per il lavoro quotidiano.",
    background: "#20231f",
    accent: "#6fa678",
    items: [
      "Sicurezza sul lavoro secondo D.Lgs. 81/08",
      "Antincendio per addetti e aggiornamenti periodici",
      "Primo soccorso per addetti aziendali",
      "Aggiornamenti obbligatori in materia di salute e sicurezza",
    ],
  },
  {
    number: "02",
    overline: "PROFESSIONALIZZANTE",
    title: "Competenze che fanno crescere l'azienda",
    subtitle: "Percorsi pratici per organizzazione, digitale e sviluppo commerciale.",
    background: "#252321",
    accent: "#c8a45c",
    items: [
      "Marketing, branding, vendite e gestione del cliente",
      "Gestione aziendale, organizzazione, Excel e analisi dati",
      "Siti web, e-commerce e presenza digitale",
      "Intelligenza artificiale e automazioni",
      "Inglese business e italiano operativo per il personale straniero",
    ],
  },
  {
    number: "03",
    overline: "SETTORIALE",
    title: "Formazione costruita sul tuo settore",
    subtitle: "Contenuti specifici per attività, ruoli e obiettivi reali.",
    background: "#211f24",
    accent: "#d2b571",
    items: [
      "Formazione istruttori e personal trainer",
      "Gestione clienti e organizzazione dei centri fitness",
      "Bartender, mixology, gestione staff e servizio clienti",
      "Percorsi per ristoranti, hotel e bar",
      "Formazione tecnica definita sui fabbisogni dell'azienda",
    ],
  },
];

export default function TrainingSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const media = gsap.matchMedia();
    const context = gsap.context(() => {
      const panels = gsap.utils.toArray<HTMLElement>(".training-panel");

      media.add("(min-width: 768px)", () => {
        gsap.set(panels.slice(1), { yPercent: 100 });

        const timeline = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: "+=140%",
            pin: true,
            scrub: 0.65,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        });

        timeline
          .to(panels[0], { yPercent: -100, ease: "none", duration: 1 }, 0)
          .to(panels[1], { yPercent: 0, ease: "none", duration: 1 }, 0)
          .to(panels[1], { yPercent: -100, ease: "none", duration: 1 }, 1)
          .to(panels[2], { yPercent: 0, ease: "none", duration: 1 }, 1);

        return () => timeline.kill();
      });

      media.add("(max-width: 767px)", () => {
        panels.forEach((panel) => {
          gsap.fromTo(
            panel,
            { opacity: 0, y: 32 },
            {
              opacity: 1,
              y: 0,
              duration: 0.65,
              ease: "power2.out",
              scrollTrigger: { trigger: panel, start: "top 85%", once: true },
            },
          );
        });
      });
    }, section);

    return () => {
      media.revert();
      context.revert();
    };
  }, []);

  return (
    <section
      id="formazione"
      ref={sectionRef}
      className="relative w-full bg-[var(--black)] md:h-screen md:overflow-hidden"
    >
      <div className="pointer-events-none absolute left-6 top-8 z-20 md:left-10 md:top-10">
        <span className="font-body text-xs uppercase tracking-[0.24em] text-[var(--gold)]">
          AREE FORMATIVE
        </span>
      </div>

      <div className="relative md:h-screen">
        {categories.map((category, index) => (
          <article
            key={category.number}
            className="training-panel relative flex min-h-[78svh] w-full items-center overflow-hidden border-t border-white/10 px-6 py-24 md:absolute md:inset-0 md:min-h-0 md:border-0 md:px-10 md:py-20"
            style={{ background: category.background, zIndex: categories.length - index }}
          >
            <span
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-8 right-0 font-display leading-none opacity-[0.045]"
              style={{ color: category.accent, fontSize: "clamp(180px, 30vw, 460px)" }}
            >
              {category.number}
            </span>

            <div className="relative mx-auto grid w-full max-w-6xl gap-12 pt-8 md:grid-cols-[1.05fr_0.95fr] md:items-center md:gap-20 md:pt-0">
              <div>
                <div className="flex items-center gap-4">
                  <span
                    className="font-display text-5xl md:text-7xl"
                    style={{ color: category.accent }}
                  >
                    {category.number}
                  </span>
                  <span
                    className="font-body text-xs uppercase tracking-[0.24em]"
                    style={{ color: category.accent }}
                  >
                    {category.overline}
                  </span>
                </div>
                <h2
                  className="mt-7 max-w-3xl font-display text-white"
                  style={{ fontSize: "clamp(40px, 6vw, 84px)", lineHeight: 0.98 }}
                >
                  {category.title}
                </h2>
                <p
                  className="mt-6 max-w-xl font-body"
                  style={{ color: "var(--light-gray)", fontSize: "18px", lineHeight: 1.65 }}
                >
                  {category.subtitle}
                </p>
              </div>

              <div className="border-l border-white/10 pl-6 md:pl-10">
                <p className="mb-6 font-body text-xs uppercase tracking-[0.2em] text-white/40">
                  Percorsi disponibili
                </p>
                <ul className="space-y-0">
                  {category.items.map((item, itemIndex) => (
                    <li
                      key={item}
                      className="grid grid-cols-[auto_1fr] gap-4 border-t border-white/10 py-4 first:border-t-0 first:pt-0"
                    >
                      <span
                        className="font-display text-lg"
                        style={{ color: category.accent }}
                      >
                        {String(itemIndex + 1).padStart(2, "0")}
                      </span>
                      <span className="font-body text-sm leading-6 text-white/75 md:text-base">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
