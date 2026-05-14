"use client";

import Link from "next/link";
import { ArrowUpRight, Briefcase, Compass, Users } from "lucide-react";
import { motion } from "framer-motion";
import { fadeUp, stagger, viewportOnce } from "@/lib/motion";

const pillars = [
  {
    icon: Compass,
    title: "Cresci con noi",
    text: "Lavora in un'azienda dove crescita e risultati vengono realmente valorizzati.",
  },
  {
    icon: Users,
    title: "Un Team Che Ti Supporta",
    text: "Entra a far parte di un team dinamico e collaborativo, pronto a supportarti in ogni fase del tuo percorso.",
  },
  {
    icon: Briefcase,
    title: "Formazione interna",
    text: "Non serve esperienza previa: riceverai una formazione completa che ti permetterà di acquisire tutte le competenze necessarie.",
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
              Cerchiamo persone che possano portare valore{" "}
              <span className="font-display italic font-normal text-brand-300">
                alla nostra realtà.
              </span>
            </h2>
            <div className="mt-5 max-w-xl space-y-4 text-pretty text-lg leading-8 text-ink-100">
              <p>
                Swarp Consulting è una realtà in continua espansione, composta da un team dinamico
                e ambizioso. Cerchiamo persone motivate, con voglia di imparare e crescere
                professionalmente insieme a noi.
              </p>
              <p>Non è richiesta esperienza nel settore, ti formiamo noi.</p>
              <p>
                Se vuoi entrare a far parte di un ambiente stimolante, orientato alla crescita e
                ai risultati, unisciti al nostro team.
              </p>
            </div>

            <Link
              href="mailto:info@swarpconsulting.com?subject=Candidatura%20Swarp%20Consulting"
              className="mt-9 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-white px-6 text-sm font-semibold text-slate-950 shadow-[0_20px_80px_rgba(255,255,255,0.18)] transition hover:bg-brand-300"
            >
              Invia la tua candidatura
              <ArrowUpRight className="size-4" aria-hidden="true" />
            </Link>

            <p className="mt-5 max-w-xl text-sm leading-7 text-ink-200">
              Scrivici a{" "}
              <a
                className="text-brand-200 underline-offset-4 hover:text-brand-100 hover:underline"
                href="mailto:info@swarpconsulting.com"
              >
                info@swarpconsulting.com
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
