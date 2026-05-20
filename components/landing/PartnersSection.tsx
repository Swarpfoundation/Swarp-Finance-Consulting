"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { fadeUp, stagger, viewportOnce } from "@/lib/motion";

const partners = [
  {
    src: "/partner-the-one-trade.png",
    alt: "The One Trade Group",
    name: "The One Trade Group",
    description:
      "Società che si occupa della produzione e vendita di presse industriali per la compattazione e riduzione del volume dei rifiuti, oltre a sistemi tecnologici avanzati per la bonifica ambientale e il trattamento di acque reflue e rifiuti organici.",
    href: "https://theonetrade.it/",
  },
  {
    src: "/partner-marocco-italia.png",
    alt: "Organismo del Commercio e dell'Industria del Marocco in Italia",
    name: "Organismo del Commercio e dell'Industria del Marocco in Italia",
    description:
      "Organizzazione dedicata allo sviluppo e al rafforzamento delle relazioni economiche, commerciali e industriali tra Italia e Marocco, favorendo opportunità di collaborazione, investimenti e networking tra imprese dei due Paesi.",
    href: "https://ccmaroccoitalia.it/",
  },
  {
    src: "/partner-wd-university.png",
    alt: "WD University",
    name: "WD University",
    description:
      "Polo universitario e centro di formazione accademica in Italia, dedicato allo sviluppo di percorsi di istruzione superiore e programmi formativi orientati alla crescita professionale e all'innovazione.",
    href: "https://companywd.com/",
  },
];

export function PartnersSection() {
  return (
    <section
      id="partner"
      className="relative border-t border-white/10 bg-ink-950 py-24 md:py-32"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60rem_40rem_at_80%_20%,rgba(0,229,229,0.06),transparent)]" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-brand-300">
            Partner
          </p>
          <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-white md:text-5xl">
            Le realtà con cui{" "}
            <span className="font-display italic font-normal text-brand-300">collaboriamo.</span>
          </h2>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={stagger(0.05, 0.12)}
          className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {partners.map((partner) => (
            <motion.a
              key={partner.name}
              href={partner.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${partner.name} — apri il sito in una nuova scheda`}
              variants={fadeUp}
              className="group flex flex-col overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-5 transition hover:-translate-y-1 hover:border-brand-400/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-300 focus-visible:ring-offset-2 focus-visible:ring-offset-ink-950 md:p-6"
            >
              <div className="relative h-44 w-full overflow-hidden rounded-2xl bg-white">
                <Image
                  src={partner.src}
                  alt={partner.alt}
                  fill
                  sizes="(max-width: 768px) 90vw, (max-width: 1024px) 45vw, 30vw"
                  className="object-contain p-7"
                />
              </div>
              <div className="mt-6 flex flex-1 items-start justify-between gap-4">
                <div>
                  <h3 className="text-lg font-semibold text-white">{partner.name}</h3>
                  <p className="mt-2 text-pretty leading-7 text-ink-200">
                    {partner.description}
                  </p>
                </div>
                <ArrowUpRight
                  className="mt-1 size-5 shrink-0 text-ink-300 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand-300"
                  aria-hidden="true"
                />
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
