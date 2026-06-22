"use client";

import { useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SectionOverline from "@/components/kimi/SectionOverline";
import SplitHeading from "@/components/kimi/SplitHeading";

gsap.registerPlugin(ScrollTrigger);

const pillars = [
  {
    title: "Cresci con noi",
    text: "Lavora in un'azienda dove crescita e risultati vengono realmente valorizzati.",
  },
  {
    title: "Un team che ti supporta",
    text: "Entra in un team dinamico e collaborativo, pronto a supportarti in ogni fase del percorso.",
  },
  {
    title: "Formazione interna",
    text: "Non serve esperienza nel settore: riceverai una formazione completa per acquisire le competenze necessarie.",
  },
];

export default function CareerSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        section.querySelector(".career-copy"),
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: { trigger: section, start: "top 72%", once: true },
        },
      );

      gsap.fromTo(
        section.querySelectorAll(".career-pillar"),
        { opacity: 0, x: 45 },
        {
          opacity: 1,
          x: 0,
          duration: 0.65,
          stagger: 0.12,
          ease: "power2.out",
          scrollTrigger: { trigger: ".career-pillars", start: "top 80%", once: true },
        },
      );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="lavora-con-noi"
      ref={sectionRef}
      className="relative w-full overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, var(--dark-gray) 0%, var(--black) 65%, rgba(200,164,92,0.08) 100%)",
        padding: "128px 0",
        borderTop: "1px solid rgba(250,250,250,0.1)",
        borderBottom: "1px solid rgba(250,250,250,0.1)",
      }}
    >
      <div className="mx-auto grid max-w-6xl items-start gap-16 px-6 lg:grid-cols-[1.08fr_0.92fr] lg:px-10">
        <div className="career-copy opacity-0">
          <SectionOverline>LAVORA CON NOI</SectionOverline>
          <SplitHeading as="h2" className="mt-4">
            Cerchiamo persone che portino valore alla nostra realtà
          </SplitHeading>
          <div
            className="mt-6 space-y-4 font-body"
            style={{ color: "var(--light-gray)", fontSize: "17px", lineHeight: 1.7 }}
          >
            <p>
              Swarp Consulting è una realtà in continua espansione, composta da un team dinamico e
              ambizioso. Cerchiamo persone motivate, con voglia di imparare e crescere con noi.
            </p>
            <p>
              Se vuoi entrare in un ambiente stimolante, orientato alla crescita e ai risultati,
              inviaci il tuo CV e una breve presentazione.
            </p>
          </div>
          <a
            href="mailto:info@swarpconsulting.com?subject=Candidatura%20Swarp%20Consulting"
            className="mt-9 inline-flex items-center gap-2 rounded bg-[var(--gold)] px-7 py-3.5 font-body text-sm font-semibold uppercase text-[var(--black)] transition-all duration-300 hover:scale-[1.02]"
          >
            Invia la tua candidatura <ArrowRight size={17} />
          </a>
        </div>

        <div className="career-pillars grid gap-px overflow-hidden rounded-lg border border-white/10 bg-white/10">
          {pillars.map((pillar, index) => (
            <article
              key={pillar.title}
              className="career-pillar grid grid-cols-[auto_1fr] gap-5 bg-[var(--black)] p-7 opacity-0"
            >
              <span className="font-display text-4xl text-[var(--gold)]">0{index + 1}</span>
              <div>
                <h3 className="font-display text-2xl text-white">{pillar.title}</h3>
                <p
                  className="mt-2 font-body text-sm"
                  style={{ color: "var(--light-gray)", lineHeight: 1.65 }}
                >
                  {pillar.text}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
