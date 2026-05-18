"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeUp, stagger, viewportOnce } from "@/lib/motion";

const partners = [
  {
    src: "/partner-the-one-trade.png",
    alt: "The One Trade Group",
    name: "The One Trade Group",
    description: "Gestione e valorizzazione dei rifiuti al servizio delle imprese.",
  },
  {
    src: "/partner-marocco-italia.png",
    alt: "Organismo del Commercio e dell'Industria del Marocco in Italia",
    name: "Commercio e Industria Marocco–Italia",
    description:
      "Organismo per la promozione delle relazioni commerciali e industriali tra Marocco e Italia.",
  },
  {
    src: "/partner-wd-university.png",
    alt: "WD University",
    name: "WD University",
    description: "Polo universitario e formazione accademica in Italia.",
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
          <p className="mt-5 text-pretty text-lg leading-8 text-ink-100">
            Costruiamo relazioni con organizzazioni e istituzioni che condividono il nostro
            approccio alla crescita delle imprese.
          </p>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={stagger(0.05, 0.12)}
          className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {partners.map((partner) => (
            <motion.article
              key={partner.name}
              variants={fadeUp}
              className="group flex flex-col overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-5 transition hover:border-brand-400/35 md:p-6"
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
              <div className="mt-6 flex-1">
                <h3 className="text-lg font-semibold text-white">{partner.name}</h3>
                <p className="mt-2 text-pretty leading-7 text-ink-200">{partner.description}</p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
