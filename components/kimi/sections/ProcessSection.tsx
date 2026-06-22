"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    num: "01",
    title: "Spiegazione riguardo il fondo",
    desc: "Ti spieghiamo che cosa sono i fondi interprofessionali, da dove arrivano questi soldi e quale tipo di formazione può essere finanziata.",
  },
  {
    num: "02",
    title: "Raccolta documenti e dati",
    desc: "Raccogliamo i dati del titolare dell'azienda, del consulente del lavoro e richiediamo tutti i documenti necessari.",
  },
  {
    num: "03",
    title: "Iscrizione al fondo",
    desc: "Dopo aver ottenuto tutta la documentazione necessaria, procediamo con l'iscrizione al fondo tramite il portale dell'INPS.",
  },
  {
    num: "04",
    title: "Definizione del piano formativo",
    desc: "Decidiamo insieme a te i corsi da svolgere e gli obiettivi da raggiungere.",
  },
  {
    num: "05",
    title: "Avvio dei corsi",
    desc: "Una volta iscritti al fondo, sarà possibile iniziare la formazione.",
  },
];

export default function ProcessSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsContainerRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const container = cardsContainerRef.current;
    const progressBar = progressRef.current;
    if (!section || !container || !progressBar) return;

    const cards = container.querySelectorAll<HTMLElement>(".process-card");
    const ctx = gsap.context(() => {
      // Stack cards with offset
      cards.forEach((card, i) => {
        gsap.set(card, {
          zIndex: steps.length - i,
          x: `${i * 15}%`,
          y: `${i * 15}%`,
          rotation: i * 2,
          scale: 1 - i * 0.1,
        });
      });

      const tl = gsap.timeline();

      // Animate each card to center, then fly off
      cards.forEach((card, i) => {
        // Bring to center
        tl.to(
          card,
          {
            x: "0%",
            y: "0%",
            rotation: 0,
            scale: 1,
            duration: 1,
            ease: "power2.inOut",
          },
          i * 0.8
        );

        // Then fly off (except last)
        if (i < cards.length - 1) {
          tl.to(
            card,
            {
              x: `${-80 - i * 20}%`,
              rotation: -10 - i * 5,
              opacity: 0,
              duration: 0.6,
              ease: "power2.in",
            },
            i * 0.8 + 0.7
          );
        }
      });

      // Progress bar
      tl.fromTo(
        progressBar,
        { scaleX: 0 },
        { scaleX: 1, duration: cards.length * 0.8, ease: "none" },
        0
      );

      ScrollTrigger.create({
        trigger: section,
        start: "center center",
        end: "+=200%",
        pin: true,
        scrub: 1,
        animation: tl,
        snap: {
          snapTo: (progress: number) => {
            const snaps = [0.2, 0.4, 0.6, 0.8, 1.0];
            return snaps.reduce((closest, s) =>
              Math.abs(s - progress) < Math.abs(closest - progress) ? s : closest
            );
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
      id="processo"
      ref={sectionRef}
      className="relative w-full flex items-center justify-center"
      style={{ height: "100vh", background: "var(--black)", perspective: "1000px" }}
    >
      {/* Section label */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 z-10 text-center">
        <span
          className="font-body text-xs uppercase tracking-[0.2em]"
          style={{ color: "var(--gold)" }}
        >
          IL NOSTRO PROCESSO
        </span>
      </div>

      {/* Progress bar */}
      <div
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10 w-64 h-0.5 rounded-full overflow-hidden"
        style={{ background: "rgba(250, 250, 250, 0.1)" }}
      >
        <div
          ref={progressRef}
          className="h-full origin-left"
          style={{ background: "var(--gold)", transform: "scaleX(0)" }}
        />
      </div>

      {/* Cards container */}
      <div
        ref={cardsContainerRef}
        className="relative w-[70vw] max-w-[900px] h-[50vh] max-h-[500px]"
        style={{ transformStyle: "preserve-3d" }}
      >
        {steps.map((step, i) => (
          <div
            key={i}
            className="process-card absolute inset-0 flex flex-col justify-between p-12 rounded-2xl"
            style={{
              background: `linear-gradient(135deg, var(--dark-gray) 0%, #222 100%)`,
              border: "1px solid rgba(250, 250, 250, 0.2)",
              boxShadow: "0 20px 60px rgba(0,0,0,0.5)",
            }}
          >
            <span
              className="font-display"
              style={{
                fontSize: "72px",
                color: "var(--gold)",
                opacity: 0.4,
                lineHeight: 1,
              }}
            >
              {step.num}
            </span>

            <div>
              <h3
                className="font-display"
                style={{ fontSize: "clamp(28px, 3vw, 40px)", color: "var(--white)" }}
              >
                {step.title}
              </h3>
              <p
                className="font-body mt-4 max-w-lg"
                style={{ fontSize: "18px", color: "var(--light-gray)", lineHeight: 1.6 }}
              >
                {step.desc}
              </p>
              <div
                className="mt-6"
                style={{ width: "40px", height: "2px", background: "var(--gold)" }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
