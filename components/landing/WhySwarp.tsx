"use client";

import { Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { fadeUp, viewportOnce } from "@/lib/motion";

export function WhySwarp() {
  return (
    <section
      id="perche-swarp"
      className="relative border-t border-white/[0.06] bg-ink-950 py-24 md:py-32"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60rem_40rem_at_85%_15%,rgba(0,229,229,0.06),transparent)]" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mb-14 max-w-3xl">
          <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.32em] text-brand-300">
            Perché Swarp
          </p>
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-white md:text-5xl">
            La formazione è ciò che fa{" "}
            <span className="font-display italic font-normal text-brand-300">
              crescere davvero
            </span>{" "}
            la tua azienda.
          </h2>
          <p className="mt-5 text-pretty text-lg leading-8 text-ink-100">
            Scopri con noi come finanziarla al meglio con Swarp.
          </p>
        </div>

        <motion.article
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeUp}
          className="group relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-gradient-to-br from-white/[0.07] via-white/[0.03] to-transparent p-7 md:p-12"
        >
          <div className="absolute -right-12 -top-12 size-72 rounded-full bg-brand-400/15 blur-3xl" />
          <div className="relative grid gap-10 md:grid-cols-[auto_1fr] md:items-center">
            <span className="inline-flex items-center gap-2 self-start rounded-full border border-brand-400/30 bg-brand-400/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.24em] text-brand-200">
              <Sparkles className="size-3" aria-hidden="true" />
              Come funziona
            </span>
            <p className="text-balance text-xl leading-relaxed text-ink-100 md:text-2xl">
              Ogni mese le aziende versano lo 0,30% dei contributi destinati alla formazione dei
              dipendenti.{" "}
              <span className="text-white">
                Molte non sanno che questi fondi possono essere utilizzati.
              </span>{" "}
              È proprio qui che entra in gioco Swarp: ti aiutiamo a gestire i fondi e a utilizzarli
              per finanziare corsi per il tuo team, occupandoci di tutta la parte burocratica.
            </p>
          </div>
        </motion.article>
      </div>
    </section>
  );
}
