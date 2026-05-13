"use client";

import Image from "next/image";
import { useRef } from "react";
import { ArrowRight, CheckCircle2, ChevronDown } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { CtaButton } from "./CtaButton";
import { proofPoints } from "./data";
import { fadeUp, stagger, viewportOnce } from "@/lib/motion";

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
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
        className="relative mx-auto flex max-w-5xl flex-col items-start px-6 text-left"
        variants={stagger(0.15, 0.12)}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          variants={fadeUp}
          className="text-balance text-5xl font-semibold leading-[0.96] tracking-tight text-white md:text-7xl lg:text-[5.5rem]"
        >
          Formazione finanziata{" "}
          <span className="font-display italic font-normal text-brand-300">
            per la tua azienda.
          </span>
        </motion.h1>

        <motion.p
          variants={fadeUp}
          className="mt-7 max-w-2xl text-pretty text-lg leading-8 text-ink-100 md:text-xl"
        >
          Offriamo percorsi di formazione finanziata su misura per sviluppare le competenze del
          tuo team e far crescere la tua azienda.
        </motion.p>

        <motion.div variants={fadeUp} className="mt-9 flex flex-col gap-3 sm:flex-row">
          <CtaButton href="#contatti">
            Contattaci <ArrowRight size={18} aria-hidden="true" />
          </CtaButton>
          <CtaButton href="#metodo" variant="secondary">
            Scopri come funziona
          </CtaButton>
        </motion.div>

        <motion.ul
          variants={stagger(0.6, 0.1)}
          initial="hidden"
          animate="visible"
          className="mt-10 grid w-full max-w-3xl gap-3 sm:grid-cols-2"
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
