"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import { processSteps } from "./data";
import { fadeUp, viewportOnce } from "@/lib/motion";

export function ProcessSection() {
  const timelineRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start 70%", "end 60%"],
  });
  const lineScaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section
      id="metodo"
      className="relative overflow-hidden border-t border-white/10 bg-[#f6f8fb] py-24 text-slate-950 md:py-32"
    >
      <div className="absolute inset-0 bg-[linear-gradient(115deg,rgba(15,23,42,0.06)_0,transparent_34%),radial-gradient(circle_at_82%_8%,rgba(0,229,229,0.22),transparent_36rem)]" />
      <div className="pointer-events-none absolute inset-0 opacity-[0.35] [background-image:linear-gradient(rgba(15,23,42,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.06)_1px,transparent_1px)] [background-size:64px_64px] [mask-image:radial-gradient(circle_at_50%_30%,black,transparent_70%)]" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-[0.78fr_1.22fr]">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={fadeUp}
            className="lg:sticky lg:top-32 lg:h-fit"
          >
            <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.32em] text-brand-700">
              Metodo operativo
            </p>
            <h2 className="text-balance text-3xl font-semibold leading-[1.05] tracking-tight md:text-5xl">
              Dal contributo al piano:{" "}
              <span className="font-display italic font-normal text-brand-700">
                una regia chiara.
              </span>
            </h2>
            <p className="mt-5 max-w-md text-pretty text-lg leading-8 text-slate-600">
              Ogni passaggio e progettato per ridurre attrito tra azienda, consulente del lavoro,
              fondo e partner formativi.
            </p>

            <div className="mt-10 hidden rounded-2xl border border-slate-200 bg-white/70 p-5 shadow-[0_24px_60px_rgba(15,23,42,0.06)] backdrop-blur lg:block">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
                Tempistiche indicative
              </p>
              <p className="mt-3 font-display text-3xl leading-none tracking-tight text-slate-900">
                3–8 <span className="text-brand-700">settimane</span>
              </p>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Variabile in base a fondo, piano e procedure applicabili.
              </p>
            </div>
          </motion.div>

          <div ref={timelineRef} className="relative">
            <div className="absolute left-[1.45rem] top-6 hidden h-[calc(100%-3rem)] w-px bg-slate-300/70 md:block" />
            <motion.div
              style={{ scaleY: lineScaleY }}
              className="absolute left-[1.45rem] top-6 hidden h-[calc(100%-3rem)] w-px origin-top bg-gradient-to-b from-brand-500 via-brand-400 to-brand-300 md:block"
            />

            <div className="space-y-5">
              {processSteps.map((step, index) => (
                <TimelineRow
                  key={step.title}
                  step={step}
                  index={index}
                  scrollYProgress={scrollYProgress}
                  total={processSteps.length}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

type TimelineRowProps = {
  step: (typeof processSteps)[number];
  index: number;
  total: number;
  scrollYProgress: MotionValue<number>;
};

function TimelineRow({ step, index, total, scrollYProgress }: TimelineRowProps) {
  const Icon = step.icon as LucideIcon;
  const threshold = index / total;

  const active = useTransform(scrollYProgress, (latest) => latest >= threshold);
  const dotScale = useTransform(active, (a) => (a ? 1.05 : 1));
  const dotBg = useTransform(active, (a) => (a ? "#030817" : "#ffffff"));
  const dotColor = useTransform(active, (a) => (a ? "#67e8f9" : "#030817"));
  const dotShadow = useTransform(active, (a) =>
    a
      ? "0 24px 50px -10px rgba(0,229,229,0.55), 0 0 0 6px rgba(0,229,229,0.08)"
      : "0 12px 30px rgba(15,23,42,0.10)",
  );
  const dotBorder = useTransform(active, (a) =>
    a ? "1px solid rgba(0,229,229,0.5)" : "1px solid rgba(15,23,42,0.08)",
  );

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: index * 0.05 }}
      className="relative grid gap-5 rounded-[1.75rem] border border-slate-200 bg-white p-5 shadow-[0_24px_80px_rgba(15,23,42,0.08)] md:grid-cols-[4rem_1fr_auto] md:items-center"
    >
      <motion.div
        style={{
          scale: dotScale,
          backgroundColor: dotBg,
          color: dotColor,
          boxShadow: dotShadow,
          border: dotBorder,
        }}
        className="z-10 grid size-12 place-items-center rounded-2xl"
      >
        <Icon className="size-5" aria-hidden="true" />
      </motion.div>

      <div>
        <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-brand-700">
          {step.label}
        </p>
        <h3 className="mt-2 text-2xl font-semibold tracking-tight">{step.title}</h3>
        <p className="mt-2 text-pretty leading-7 text-slate-600">{step.text}</p>
      </div>

      <span className="font-display text-5xl font-normal leading-none text-slate-100 md:text-6xl">
        0{index + 1}
      </span>
    </motion.article>
  );
}
