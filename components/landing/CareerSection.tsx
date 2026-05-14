"use client";

import Link from "next/link";
import { ArrowUpRight, Briefcase, Compass, Users } from "lucide-react";
import { motion } from "framer-motion";
import { fadeUp, stagger, viewportOnce } from "@/lib/motion";

const pillars = [
  {
    icon: Compass,
    title: "Lavoro che ha senso",
    text: "Aiuti aziende vere a usare strumenti che esistono già ma che quasi nessuno conosce.",
  },
  {
    icon: Users,
    title: "Team in costruzione",
    text: "Siamo all'inizio: chi entra ora avrà voce sulle scelte, sul prodotto e sul modo di lavorare.",
  },
  {
    icon: Briefcase,
    title: "Formazione interna",
    text: "Non serve aver già lavorato con i fondi interprofessionali. Ti formiamo noi.",
  },
];

export function CareerSection() {
  return (
    <section
      id="lavora-con-noi"
      className="relative border-t border-white/10 bg-ink-950 py-24 md:py-32"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60rem_40rem_at_15%_30%,rgba(0,229,229,0.08),transparent)]" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={fadeUp}
          >
            <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.32em] text-brand-300">
              Lavora con noi
            </p>
            <h2 className="text-balance text-3xl font-semibold leading-[1.05] tracking-tight text-white md:text-5xl">
              Stiamo cercando persone{" "}
              <span className="font-display italic font-normal text-brand-300">
                con cui crescere.
              </span>
            </h2>
            <p className="mt-5 max-w-xl text-pretty text-lg leading-8 text-ink-100">
              Swarp Consulting è un team giovane in costruzione. Cerchiamo persone con voglia di
              imparare e di costruire qualcosa che ha senso — anche senza esperienza diretta nei
              fondi interprofessionali.
            </p>

            <Link
              href="mailto:info@swarppay.com?subject=Candidatura%20Swarp%20Consulting"
              className="mt-9 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-white px-6 text-sm font-semibold text-slate-950 shadow-[0_20px_80px_rgba(255,255,255,0.18)] transition hover:bg-brand-300"
            >
              Invia la tua candidatura
              <ArrowUpRight className="size-4" aria-hidden="true" />
            </Link>

            <p className="mt-5 max-w-xl text-sm leading-7 text-ink-200">
              Scrivici a{" "}
              <a
                className="text-brand-200 underline-offset-4 hover:text-brand-100 hover:underline"
                href="mailto:info@swarppay.com"
              >
                info@swarppay.com
              </a>{" "}
              allegando CV e una breve presentazione. Ti rispondiamo entro pochi giorni.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={stagger(0.05, 0.1)}
            className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1"
          >
            {pillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <motion.article
                  key={pillar.title}
                  variants={fadeUp}
                  className="group relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-6 transition hover:border-brand-400/35 lg:flex lg:items-start lg:gap-5 lg:p-7"
                >
                  <div className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-brand-400/10 text-brand-200 ring-1 ring-brand-400/25 transition group-hover:bg-brand-300 group-hover:text-ink-950">
                    <Icon className="size-6" aria-hidden="true" />
                  </div>
                  <div className="mt-5 lg:mt-0">
                    <h3 className="text-lg font-semibold text-white">{pillar.title}</h3>
                    <p className="mt-2 text-pretty leading-7 text-ink-200">{pillar.text}</p>
                  </div>
                </motion.article>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
