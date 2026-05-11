"use client";

import Image from "next/image";
import { useRef } from "react";
import { ArrowRight, CheckCircle2, ChevronDown, ShieldAlert } from "lucide-react";
import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { CtaButton } from "./CtaButton";
import { proofPoints } from "./data";
import { fadeUp, stagger, viewportOnce } from "@/lib/motion";

const heroSteps = [
  ["01", "Iscrizione", "adesione al fondo via portale INPS (1–1,5 mesi)"],
  ["02", "Definizione", "corsi e obiettivi scelti insieme"],
  ["03", "Erogazione", "teoria e training on the job"],
  ["04", "Rendicontazione", "burocrazia gestita da Swarp"],
] as const;

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const activeStep = useTransform(scrollYProgress, [0, 0.25, 0.5, 0.75, 1], [0, 1, 2, 3, 3]);
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[100vh] overflow-hidden pb-24 pt-36 md:pt-40"
    >
      <motion.div
        className="absolute inset-0"
        style={{ y: imageY, scale: imageScale }}
      >
        <Image
          src="/swarp-hero-visual.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-60"
        />
      </motion.div>

      <div className="absolute inset-0 bg-[linear-gradient(92deg,var(--color-ink-950)_0%,rgba(3,8,23,0.92)_34%,rgba(3,8,23,0.55)_66%,rgba(3,8,23,0.82)_100%)]" />
      <div className="mesh-orbs absolute inset-0" />
      <div className="noise" />
      <div className="absolute inset-x-0 bottom-0 h-52 bg-gradient-to-t from-ink-950 to-transparent" />

      <motion.div
        className="relative mx-auto grid max-w-7xl items-end gap-12 px-6 lg:grid-cols-[1.05fr_0.95fr]"
        variants={stagger(0.15, 0.12)}
        initial="hidden"
        animate="visible"
      >
        <div className="max-w-3xl">
          <motion.div
            variants={fadeUp}
            className="mb-7 inline-flex items-center gap-3 rounded-full border border-brand-400/30 bg-brand-400/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-brand-100"
          >
            <span className="relative flex size-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-300 opacity-60" />
              <span className="relative inline-flex size-2 rounded-full bg-brand-300 shadow-[0_0_20px_rgba(103,232,249,0.9)]" />
            </span>
            Fondi interprofessionali · B2B
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="text-balance text-5xl font-semibold leading-[0.96] tracking-tight text-white md:text-7xl lg:text-[5.5rem]"
          >
            Formazione finanziata al 100%,{" "}
            <span className="font-display italic font-normal text-brand-300">con soldi tuoi.</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-7 max-w-2xl text-pretty text-lg leading-8 text-ink-100 md:text-xl"
          >
            Ogni azienda versa lo 0,30% dei contributi per la formazione continua dei propri
            dipendenti. Se non li usi, tornano all&apos;INPS. Swarp li recupera, li trasforma in
            corsi reali per la tua squadra e gestisce tutta la burocrazia.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-9 flex flex-col gap-3 sm:flex-row">
            <CtaButton href="#contatti">
              Verifica il tuo fondo <ArrowRight size={18} aria-hidden="true" />
            </CtaButton>
            <CtaButton href="#metodo" variant="secondary">
              Scopri il metodo
            </CtaButton>
          </motion.div>

          <motion.ul
            variants={stagger(0.6, 0.1)}
            initial="hidden"
            animate="visible"
            className="mt-10 grid gap-3 sm:grid-cols-2"
          >
            {proofPoints.map((point) => (
              <motion.li
                key={point}
                variants={fadeUp}
                className="flex items-center gap-3 text-sm text-ink-100"
              >
                <span className="grid size-7 place-items-center rounded-full border border-brand-400/30 bg-brand-400/10">
                  <CheckCircle2 className="size-3.5 text-brand-300" aria-hidden="true" />
                </span>
                {point}
              </motion.li>
            ))}
          </motion.ul>
        </div>

        <motion.div
          variants={fadeUp}
          className="relative rounded-[2rem] border border-white/10 bg-white/[0.04] p-5 shadow-elevated backdrop-blur-2xl md:p-7"
        >
          <div className="absolute -inset-px rounded-[2rem] bg-[linear-gradient(135deg,rgba(0,229,229,0.25),transparent_40%)] opacity-60" aria-hidden="true" />
          <div className="relative">
            <div className="mb-6 flex items-start justify-between gap-5">
              <div>
                <p className="text-[11px] uppercase tracking-[0.26em] text-brand-200">
                  Come funziona
                </p>
                <h2 className="mt-2 text-2xl font-semibold text-white">Dal contatto al rendiconto</h2>
              </div>
              <div className="rounded-full border border-gold-200/25 bg-gold-200/10 p-3">
                <ShieldAlert className="size-5 text-gold-200" aria-hidden="true" />
              </div>
            </div>

            <div className="space-y-3">
              {heroSteps.map(([num, title, text], index) => (
                <StepRow
                  key={title}
                  num={num}
                  title={title}
                  text={text}
                  index={index}
                  activeStep={activeStep}
                />
              ))}
            </div>

            <p className="mt-5 rounded-2xl border border-gold-200/20 bg-gold-200/10 p-4 text-[11px] uppercase leading-6 tracking-[0.18em] text-gold-200/85">
              Non sono bandi regionali. Sono fondi interprofessionali raccolti dall&apos;INPS e
              regolati dal Ministero del Lavoro.
            </p>
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.6 }}
        viewport={viewportOnce}
        className="pointer-events-none absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-ink-200 md:flex"
      >
        <span>Scorri</span>
        <ChevronDown className="size-4 animate-bounce" aria-hidden="true" />
      </motion.div>
    </section>
  );
}

type StepRowProps = {
  num: string;
  title: string;
  text: string;
  index: number;
  activeStep: MotionValue<number>;
};

function StepRow({ num, title, text, index, activeStep }: StepRowProps) {
  const isActive = useTransform(activeStep, (latest) => Math.round(latest) === index);
  const bg = useTransform(isActive, (active) =>
    active ? "rgba(0, 229, 229, 0.10)" : "rgba(3, 8, 23, 0.45)",
  );
  const borderColor = useTransform(isActive, (active) =>
    active ? "rgba(0, 229, 229, 0.45)" : "rgba(255, 255, 255, 0.10)",
  );
  const badgeBg = useTransform(isActive, (active) => (active ? "#67e8f9" : "#ffffff"));

  return (
    <motion.div
      style={{ backgroundColor: bg, borderColor }}
      className="grid grid-cols-[3.2rem_1fr] gap-4 rounded-3xl border p-4 transition-colors"
    >
      <motion.span
        style={{ backgroundColor: badgeBg }}
        className="grid size-12 place-items-center rounded-2xl text-sm font-semibold text-ink-950"
      >
        {num}
      </motion.span>
      <div>
        <h3 className="font-semibold text-white">{title}</h3>
        <p className="mt-1 text-sm leading-6 text-ink-200">{text}</p>
      </div>
    </motion.div>
  );
}
