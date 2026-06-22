"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SectionOverline from "@/components/kimi/SectionOverline";
import SplitHeading from "@/components/kimi/SplitHeading";

gsap.registerPlugin(ScrollTrigger);

const partners = [
  {
    src: "/partner-the-one-trade.png",
    name: "The One Trade Group",
    description:
      "Società specializzata nella produzione e vendita di presse industriali e sistemi tecnologici per la bonifica ambientale, le acque reflue e i rifiuti organici.",
    href: "https://theonetrade.it/",
  },
  {
    src: "/partner-marocco-italia.png",
    name: "Organismo del Commercio e dell'Industria del Marocco in Italia",
    description:
      "Organizzazione dedicata allo sviluppo delle relazioni economiche, commerciali e industriali tra Italia e Marocco.",
    href: "https://ccmaroccoitalia.it/",
  },
  {
    src: "/partner-wd-university.png",
    name: "WD University",
    description:
      "Polo universitario e centro di formazione accademica dedicato a percorsi di istruzione superiore, crescita professionale e innovazione.",
    href: "https://companywd.com/",
  },
];

export default function PartnersSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        section.querySelectorAll(".partner-card"),
        { opacity: 0, y: 50, rotateX: 8 },
        {
          opacity: 1,
          y: 0,
          rotateX: 0,
          duration: 0.75,
          stagger: 0.14,
          ease: "power3.out",
          scrollTrigger: { trigger: section, start: "top 70%", once: true },
        },
      );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="partner"
      ref={sectionRef}
      className="w-full"
      style={{ background: "var(--black)", padding: "128px 0" }}
    >
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <div className="mx-auto max-w-3xl text-center">
          <SectionOverline>PARTNER</SectionOverline>
          <SplitHeading as="h2" className="mt-4">
            Le realtà con cui collaboriamo
          </SplitHeading>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3" style={{ perspective: "1200px" }}>
          {partners.map((partner) => (
            <a
              key={partner.name}
              href={partner.href}
              target="_blank"
              rel="noopener noreferrer"
              className="partner-card group flex flex-col rounded-lg border border-white/10 bg-[var(--dark-gray)] p-5 opacity-0 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--gold-dim)]"
            >
              <div className="relative h-44 overflow-hidden rounded bg-white">
                <Image
                  src={partner.src}
                  alt={partner.name}
                  fill
                  sizes="(max-width: 768px) 90vw, 33vw"
                  className="object-contain p-7 transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col pt-6">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-display text-2xl text-white">{partner.name}</h3>
                  <ArrowUpRight className="shrink-0 text-[var(--gold)]" size={20} />
                </div>
                <p
                  className="mt-4 font-body text-sm"
                  style={{ color: "var(--light-gray)", lineHeight: 1.65 }}
                >
                  {partner.description}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
