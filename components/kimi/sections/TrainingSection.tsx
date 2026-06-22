"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const categories = [
  {
    title: "Formazione Obbligatoria",
    subtitle: "Sicurezza sul lavoro, antincendio, primo soccorso",
    image: "/assets/training-safety.jpg",
    items: [
      "Sicurezza sul lavoro secondo D.Lgs. 81/08",
      "Antincendio per addetti e aggiornamenti periodici",
      "Primo soccorso per addetti aziendali",
      "Aggiornamenti obbligatori in materia di salute e sicurezza",
    ],
  },
  {
    title: "Formazione Professionale",
    subtitle: "Marketing, vendite, gestione, Excel, AI, lingue",
    image: "/assets/training-professional.jpg",
    items: [
      "Marketing e branding",
      "Vendite e gestione del cliente",
      "Gestione aziendale e organizzazione",
      "Excel e analisi dati",
      "Siti web, e-commerce e presenza digitale",
      "Intelligenza artificiale e automazioni",
      "Corsi di lingua per il business",
    ],
  },
  {
    title: "Formazione di Settore",
    subtitle: "Palestre, ristorazione, competenze tecniche di settore",
    image: "/assets/training-sector.jpg",
    items: [
      "Formazione istruttori e personal trainer",
      "Gestione clienti e organizzazione centri fitness",
      "Bartender e mixology",
      "Gestione staff e servizio clienti per ristoranti, hotel e bar",
      "Formazione tecnica costruita sui fabbisogni reali dell'azienda",
    ],
  },
];

export default function TrainingSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const card1Ref = useRef<HTMLDivElement>(null);
  const card2Ref = useRef<HTMLDivElement>(null);
  const card3Ref = useRef<HTMLDivElement>(null);
  const listsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const card1 = card1Ref.current;
    const card2 = card2Ref.current;
    const card3 = card3Ref.current;
    const lists = listsRef.current;
    if (!section || !card1 || !card2 || !card3 || !lists) return;

    const ctx = gsap.context(() => {
      // Curtain animation
      gsap.to(card1, {
        yPercent: -100,
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "+=150%",
          pin: true,
          scrub: 1,
        },
      });

      gsap.to(card2, {
        yPercent: 100,
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "+=150%",
          pin: true,
          scrub: 1,
        },
      });

      // Category lists fade in after curtain opens
      const listItems = lists.querySelectorAll(".cat-list");
      gsap.fromTo(
        listItems,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: "+=150%",
            scrub: 1,
          },
        }
      );

      ScrollTrigger.create({
        trigger: section,
        start: "top top",
        end: "+=150%",
        pin: true,
        scrub: 1,
        snap: {
          snapTo: (progress: number) => {
            if (progress < 0.33) return 0.33;
            return 0.66;
          },
          duration: { min: 0.15, max: 0.35 },
          ease: "power2.out",
        },
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="formazione"
      ref={sectionRef}
      className="relative w-full overflow-hidden"
      style={{ height: "100vh", background: "var(--black)" }}
    >
      {/* Bottom card (stays fixed) */}
      <div
        ref={card3Ref}
        className="absolute inset-0 z-[1]"
        style={{
          backgroundImage: `url(${categories[2].image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div
          className="absolute inset-0 flex flex-col items-center justify-center"
          style={{ background: "rgba(0,0,0,0.6)" }}
        >
          <h2
            className="font-display text-center"
            style={{ fontSize: "clamp(32px, 4vw, 56px)", color: "var(--white)" }}
          >
            {categories[2].title}
          </h2>
          <p
            className="font-body text-center mt-3"
            style={{ fontSize: "18px", color: "var(--gold)" }}
          >
            {categories[2].subtitle}
          </p>
          {/* Tricolor */}
          <div className="flex gap-0 mt-6" style={{ width: "40px", height: "3px" }}>
            <div style={{ flex: 1, background: "var(--green)" }} />
            <div style={{ flex: 1, background: "var(--white)" }} />
            <div style={{ flex: 1, background: "var(--red)" }} />
          </div>
        </div>
      </div>

      {/* Middle card (slides down) */}
      <div
        ref={card2Ref}
        className="absolute inset-0 z-[2]"
        style={{
          backgroundImage: `url(${categories[1].image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div
          className="absolute inset-0 flex flex-col items-center justify-center"
          style={{ background: "rgba(0,0,0,0.55)" }}
        >
          <h2
            className="font-display text-center"
            style={{ fontSize: "clamp(32px, 4vw, 56px)", color: "var(--white)" }}
          >
            {categories[1].title}
          </h2>
          <p
            className="font-body text-center mt-3"
            style={{ fontSize: "18px", color: "var(--gold)" }}
          >
            {categories[1].subtitle}
          </p>
        </div>
      </div>

      {/* Top card (slides up) */}
      <div
        ref={card1Ref}
        className="absolute inset-0 z-[3]"
        style={{
          backgroundImage: `url(${categories[0].image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div
          className="absolute inset-0 flex flex-col items-center justify-center"
          style={{ background: "rgba(0,0,0,0.5)" }}
        >
          <h2
            className="font-display text-center"
            style={{ fontSize: "clamp(32px, 4vw, 56px)", color: "var(--white)" }}
          >
            {categories[0].title}
          </h2>
          <p
            className="font-body text-center mt-3"
            style={{ fontSize: "18px", color: "var(--gold)" }}
          >
            {categories[0].subtitle}
          </p>
          {/* Tricolor */}
          <div className="flex gap-0 mt-6" style={{ width: "40px", height: "3px" }}>
            <div style={{ flex: 1, background: "var(--green)" }} />
            <div style={{ flex: 1, background: "var(--white)" }} />
            <div style={{ flex: 1, background: "var(--red)" }} />
          </div>
        </div>
      </div>

      {/* Category detail lists (appear after curtain opens) */}
      <div
        ref={listsRef}
        className="absolute inset-0 z-[4] flex flex-col items-center justify-center pointer-events-none"
      >
        <div className="max-w-4xl w-full px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((cat, i) => (
            <div key={i} className="cat-list opacity-0">
              <h4
                className="font-display mb-4"
                style={{ fontSize: "20px", color: "var(--gold)" }}
              >
                {cat.title}
              </h4>
              <ul className="space-y-2">
                {cat.items.map((item, j) => (
                  <li key={j} className="flex items-start gap-2">
                    <span
                      className="mt-2 flex-shrink-0 w-1.5 h-1.5 rounded-full"
                      style={{ background: "var(--gold)" }}
                    />
                    <span
                      className="font-body text-sm"
                      style={{ color: "var(--white)", lineHeight: 1.5 }}
                    >
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
