"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Plus } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { faqItems } from "./data";
import { cn } from "@/lib/cn";

export function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section
      id="faq"
      className="relative border-t border-white/10 bg-ink-950 py-24 md:py-32"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60rem_40rem_at_85%_30%,rgba(0,229,229,0.05),transparent)]" />

      <div className="relative mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[1.25fr_0.75fr]">
        <div>
          <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.32em] text-brand-300">
            FAQ
          </p>
          <h2 className="text-balance text-3xl font-semibold leading-[1.05] tracking-tight text-white md:text-5xl">
            Domande frequenti,{" "}
            <span className="font-display italic font-normal text-brand-300">
              senza promesse ambigue.
            </span>
          </h2>
          <p className="mt-5 max-w-xl text-pretty text-lg leading-8 text-ink-100">
            La comunicazione resta prudente: ogni percorso dipende da requisiti e approvazioni.
          </p>

          <ul className="mt-12 divide-y divide-white/10 border-t border-white/10">
            {faqItems.map((item, index) => {
              const isOpen = open === index;
              return (
                <li key={item.q}>
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? -1 : index)}
                    aria-expanded={isOpen}
                    className="group flex w-full items-start gap-6 py-7 text-left transition"
                  >
                    <span className="mt-1 font-display text-2xl font-normal leading-none text-ink-300 transition group-hover:text-brand-300">
                      0{index + 1}
                    </span>
                    <span
                      className={cn(
                        "flex-1 font-display text-xl italic leading-snug text-white transition md:text-2xl",
                        isOpen && "text-brand-100",
                      )}
                    >
                      {item.q}
                    </span>
                    <span
                      className={cn(
                        "mt-1 grid size-9 shrink-0 place-items-center rounded-full border transition",
                        isOpen
                          ? "rotate-45 border-brand-400/60 bg-brand-400/10 text-brand-200"
                          : "border-white/10 text-ink-100 group-hover:border-brand-400/40 group-hover:text-brand-200",
                      )}
                    >
                      <Plus className="size-4" aria-hidden="true" />
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen ? (
                      <motion.div
                        key="content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="pb-8 pl-[3.25rem] pr-12 text-pretty leading-8 text-ink-100">
                          {item.a}
                        </p>
                      </motion.div>
                    ) : null}
                  </AnimatePresence>
                </li>
              );
            })}
          </ul>
        </div>

        <aside className="lg:sticky lg:top-32 lg:h-fit">
          <div className="relative overflow-hidden rounded-[2rem] border border-brand-400/25 bg-[linear-gradient(155deg,rgba(0,229,229,0.14),rgba(255,255,255,0.02))] p-7 md:p-8">
            <div className="pointer-events-none absolute -right-16 -top-16 size-48 rounded-full bg-brand-400/20 blur-3xl" />
            <div className="relative">
              <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-brand-200">
                Hai altre domande?
              </p>
              <h3 className="mt-5 font-display text-3xl italic leading-snug text-white">
                Ti rispondiamo direttamente.
              </h3>
              <p className="mt-4 text-sm leading-7 text-ink-100">
                Compila una verifica preliminare: in pochi minuti raccogliamo i dati per capire se
                ha senso procedere.
              </p>
              <Link
                href="#contatti"
                className="mt-7 inline-flex items-center gap-2 rounded-full bg-brand-300 px-5 py-3 text-sm font-semibold text-ink-950 transition hover:bg-brand-200"
              >
                Richiedi valutazione
                <ArrowUpRight className="size-4" aria-hidden="true" />
              </Link>
            </div>
          </div>

          <div className="mt-4 rounded-[2rem] border border-white/10 bg-white/[0.03] p-7">
            <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-ink-200">
              Trasparenza
            </p>
            <p className="mt-4 text-sm leading-7 text-ink-100">
              Non siamo un ente pubblico, INPS o Ministero del Lavoro. Operiamo come supporto
              consulenziale B2B, con coordinamento e gestione documentale.
            </p>
          </div>
        </aside>
      </div>
    </section>
  );
}
