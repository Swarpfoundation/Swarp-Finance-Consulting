"use client";

import { motion } from "framer-motion";
import { Laptop } from "lucide-react";
import { fadeUp, stagger, viewportOnce } from "@/lib/motion";

const figures = [
  {
    amount: "€ 2.000,00",
    text: "Valore complessivo massimo dei percorsi formativi a cui ogni partecipante può accedere, anche su più corsi.",
  },
  {
    amount: "€ 50.000,00",
    text: "Importo annuale massimo previsto per ciascuna impresa.",
  },
];

const cofinancing = [
  { rate: "90%", label: "Micro imprese" },
  { rate: "70%", label: "Piccole imprese" },
  { rate: "60%", label: "Medie imprese" },
  { rate: "50%", label: "Grandi imprese" },
];

export function BandoSection() {
  return (
    <section
      id="bando"
      className="relative overflow-hidden border-t border-white/10 bg-[#f6f8fb] py-24 text-slate-950 md:py-32"
    >
      <div className="absolute inset-0 bg-[linear-gradient(115deg,rgba(15,23,42,0.06)_0,transparent_34%),radial-gradient(circle_at_85%_8%,rgba(0,229,229,0.20),transparent_36rem)]" />
      <div className="pointer-events-none absolute inset-0 opacity-[0.35] [background-image:linear-gradient(rgba(15,23,42,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.06)_1px,transparent_1px)] [background-size:64px_64px] [mask-image:radial-gradient(circle_at_50%_20%,black,transparent_70%)]" />

      <div className="relative mx-auto max-w-7xl px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeUp}
          className="max-w-3xl"
        >
          <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.32em] text-brand-700">
            Bando regionale
          </p>
          <h2 className="text-balance text-3xl font-semibold leading-[1.08] tracking-tight md:text-5xl">
            Bando Formazione Continua FSE+ 2021–2027{" "}
            <span className="font-display italic font-normal text-brand-700">
              Regione Lombardia
            </span>
          </h2>
          <p className="mt-6 text-pretty text-lg leading-8 text-slate-600">
            Attraverso questo bando, la tua impresa potrà investire nella crescita professionale
            non solo dei dipendenti, ma anche dei soci, titolari e di qualsiasi soggetto con
            Partita IVA collegato all&apos;azienda.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={stagger(0, 0.12)}
          className="mt-12 grid gap-4 sm:grid-cols-2"
        >
          {figures.map((figure) => (
            <motion.div
              key={figure.amount}
              variants={fadeUp}
              className="rounded-[1.75rem] border border-slate-200 bg-white p-7 shadow-[0_24px_80px_rgba(15,23,42,0.08)] md:p-9"
            >
              <p className="font-display text-5xl font-normal leading-none tracking-tight text-slate-900 md:text-6xl">
                {figure.amount}
              </p>
              <p className="mt-4 text-base leading-7 text-slate-600">{figure.text}</p>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-12">
          <p className="max-w-3xl text-pretty text-lg leading-8 text-slate-600">
            Il cofinanziamento varia in base alla dimensione aziendale, con rimborso diretto da
            parte della Regione Lombardia pari a:
          </p>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={stagger(0, 0.08)}
            className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
          >
            {cofinancing.map((tier) => (
              <motion.div
                key={tier.label}
                variants={fadeUp}
                className="rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-[0_18px_50px_rgba(15,23,42,0.06)]"
              >
                <p className="font-display text-5xl font-normal leading-none tracking-tight text-brand-700">
                  {tier.rate}
                </p>
                <p className="mt-3 text-base font-semibold text-slate-900">{tier.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeUp}
          className="mt-6 flex items-start gap-4 rounded-[1.5rem] border border-brand-600/30 bg-brand-50 p-6 md:items-center"
        >
          <div className="grid size-12 shrink-0 place-items-center rounded-2xl bg-brand-700 text-white">
            <Laptop className="size-6" aria-hidden="true" />
          </div>
          <p className="text-pretty leading-7 text-slate-700">
            Per tutte le categorie di impresa il rimborso può arrivare{" "}
            <span className="font-semibold text-brand-800">fino al 90%</span> in caso di formazione
            su tematiche digitali.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
