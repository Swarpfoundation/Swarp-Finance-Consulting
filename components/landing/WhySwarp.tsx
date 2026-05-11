"use client";

import { ArrowUpRight, ClipboardCheck, Route, ShieldAlert, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import { fadeUp, stagger, viewportOnce } from "@/lib/motion";

const miniSteps = [
  { num: "01", label: "Iscrizione" },
  { num: "02", label: "Formazione" },
  { num: "03", label: "Rendicontazione" },
];

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
            I fondi <span className="font-display italic font-normal text-brand-300">ci sono già.</span>{" "}
            Quasi nessuno li usa.
          </h2>
          <p className="mt-5 text-pretty text-lg leading-8 text-ink-100">
            Ogni anno milioni di euro tornano all&apos;INPS perché le aziende non sanno di averli
            o non riescono a sbloccarli. Swarp li recupera e li ridistribuisce alle PMI.
          </p>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={stagger(0, 0.08)}
          className="grid auto-rows-[minmax(180px,auto)] grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3"
        >
          {/* T1 — Headline tile (large feature, 2x2 on lg) */}
          <motion.article
            variants={fadeUp}
            className="group relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-gradient-to-br from-white/[0.07] via-white/[0.03] to-transparent p-7 lg:col-span-2 lg:row-span-2 lg:p-10"
          >
            <div className="absolute -right-12 -top-12 size-48 rounded-full bg-brand-400/15 blur-3xl" />
            <div className="relative flex h-full flex-col justify-between gap-10">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full border border-brand-400/30 bg-brand-400/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.24em] text-brand-200">
                  <Sparkles className="size-3" aria-hidden="true" />
                  Il meccanismo
                </span>
                <h3 className="mt-6 text-balance text-2xl font-semibold leading-snug tracking-tight text-white md:text-3xl lg:text-4xl">
                  Ogni mese versi lo 0,30% dei contributi per la formazione dei tuoi dipendenti.{" "}
                  <span className="font-display italic font-normal text-brand-300">
                    Se a fine anno non li usi, li perdi.
                  </span>
                </h3>
              </div>
              <div className="flex items-center justify-between border-t border-white/10 pt-6">
                <p className="text-sm leading-6 text-ink-200">
                  I fondi inutilizzati tornano all&apos;INPS. Ogni anno, in silenzio.
                </p>
                <ArrowUpRight className="size-6 shrink-0 text-ink-200 transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-brand-300" />
              </div>
            </div>
          </motion.article>

          {/* T3 — Compliance tile */}
          <motion.article
            variants={fadeUp}
            className="relative overflow-hidden rounded-[1.75rem] border border-gold-200/20 bg-[linear-gradient(135deg,rgba(252,211,77,0.12),rgba(255,255,255,0.02))] p-6"
          >
            <ShieldAlert className="size-7 text-gold-200" aria-hidden="true" />
            <h3 className="mt-5 text-base font-semibold leading-snug text-white">
              Accesso reale, non promesse.
            </h3>
            <p className="mt-2 text-sm leading-6 text-ink-200">
              Tutte le aziende private con almeno un dipendente possono attivare il fondo.
            </p>
          </motion.article>

          {/* T6 — Process snippet tile */}
          <motion.article
            variants={fadeUp}
            className="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-6"
          >
            <div className="flex items-center justify-between">
              <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-brand-200">
                Metodo operativo
              </p>
              <Route className="size-5 text-ink-200" aria-hidden="true" />
            </div>
            <ul className="mt-5 space-y-2">
              {miniSteps.map((step) => (
                <li
                  key={step.num}
                  className="flex items-center gap-3 rounded-xl border border-white/5 bg-white/[0.02] px-3 py-2"
                >
                  <span className="text-[10px] font-semibold tracking-[0.2em] text-brand-300">
                    {step.num}
                  </span>
                  <span className="text-sm font-medium text-white">{step.label}</span>
                </li>
              ))}
            </ul>
          </motion.article>

          {/* T4 — Editorial quote tile */}
          <motion.article
            variants={fadeUp}
            className="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-6 lg:col-span-2"
          >
            <div className="absolute right-6 top-6 font-display text-[6rem] leading-none text-brand-400/20">
              &ldquo;
            </div>
            <p className="relative font-display text-2xl italic leading-snug text-white md:text-3xl">
              Sono soldi tuoi. Se non li usi, l&apos;INPS se li riprende.
            </p>
            <div className="mt-6 flex items-center gap-3 border-t border-white/10 pt-5">
              <span className="grid size-8 place-items-center rounded-full bg-brand-400/15 text-[10px] font-semibold text-brand-200">
                SF
              </span>
              <p className="text-xs uppercase tracking-[0.22em] text-ink-200">
                Swarp Finance — Posizionamento
              </p>
            </div>
          </motion.article>

          {/* T7 — CTA tile */}
          <motion.article
            variants={fadeUp}
            className="group relative overflow-hidden rounded-[1.75rem] border border-brand-400/25 bg-[linear-gradient(135deg,rgba(0,229,229,0.16),rgba(0,229,229,0.04))] p-6"
          >
            <ClipboardCheck className="size-7 text-brand-200" aria-hidden="true" />
            <h3 className="mt-5 text-base font-semibold leading-snug text-white">
              Vuoi sapere quanto ti spetta?
            </h3>
            <Link
              href="#contatti"
              className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brand-200 transition group-hover:text-brand-100"
            >
              Verifica il tuo fondo
              <ArrowUpRight className="size-4 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </motion.article>
        </motion.div>
      </div>
    </section>
  );
}
