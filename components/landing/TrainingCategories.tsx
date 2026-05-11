"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { trainingCategories, trainingFilters, type TrainingTag } from "./data";
import { SectionHeader } from "./SectionHeader";
import { cn } from "@/lib/cn";

type FilterId = "all" | TrainingTag;

export function TrainingCategories() {
  const [active, setActive] = useState<FilterId>("all");

  const filtered = useMemo(() => {
    if (active === "all") return trainingCategories;
    return trainingCategories.filter((category) => category.tag === active);
  }, [active]);

  return (
    <section
      id="corsi"
      className="relative border-t border-white/10 bg-ink-950 py-24 md:py-32"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(50rem_30rem_at_20%_10%,rgba(0,229,229,0.06),transparent)]" />

      <div className="relative mx-auto max-w-7xl px-6">
        <SectionHeader
          align="center"
          eyebrow="Percorsi"
          title="Si può finanziare qualsiasi formazione utile alla tua azienda."
          text="Obbligatoria, professionalizzante o di settore: i fondi interprofessionali coprono tutte le aree previste dalla normativa."
        />

        {/* Filter tabs */}
        <div className="mt-12 flex justify-center">
          <div
            role="tablist"
            aria-label="Filtra percorsi formativi"
            className="inline-flex flex-wrap items-center justify-center gap-1 rounded-full border border-white/10 bg-white/[0.04] p-1.5 backdrop-blur-xl"
          >
            {trainingFilters.map((filter) => {
              const isActive = filter.id === active;
              return (
                <button
                  key={filter.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActive(filter.id)}
                  className={cn(
                    "relative rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] transition-colors",
                    isActive ? "text-ink-950" : "text-ink-100 hover:text-white",
                  )}
                >
                  {isActive ? (
                    <motion.span
                      layoutId="training-filter-active"
                      className="absolute inset-0 rounded-full bg-brand-300"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  ) : null}
                  <span className="relative">{filter.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Cards grid */}
        <motion.div
          layout
          className="mt-12 grid auto-rows-[minmax(200px,auto)] gap-4 md:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((category, index) => {
              const Icon = category.icon;
              const isFeatured = Boolean(category.featured);
              return (
                <motion.article
                  layout
                  key={category.title}
                  initial={{ opacity: 0, y: 16, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -8, scale: 0.96 }}
                  transition={{
                    duration: 0.45,
                    ease: [0.16, 1, 0.3, 1],
                    delay: index * 0.04,
                  }}
                  className={cn(
                    "group relative overflow-hidden rounded-[1.5rem] border border-white/10 p-6 transition hover:-translate-y-1 hover:border-brand-400/45",
                    isFeatured
                      ? "bg-[linear-gradient(145deg,rgba(0,229,229,0.10),rgba(255,255,255,0.02))] lg:col-span-2 lg:row-span-1"
                      : "bg-[linear-gradient(145deg,rgba(255,255,255,0.07),rgba(255,255,255,0.02))]",
                  )}
                >
                  {isFeatured ? (
                    <div className="pointer-events-none absolute -right-16 -top-16 size-48 rounded-full bg-brand-400/15 blur-3xl" />
                  ) : null}

                  <div className="relative flex h-full flex-col">
                    <div className="flex items-start justify-between gap-4">
                      <div
                        className={cn(
                          "flex size-12 items-center justify-center rounded-2xl ring-1 transition group-hover:bg-brand-300 group-hover:text-ink-950",
                          isFeatured
                            ? "bg-brand-400/15 text-brand-200 ring-brand-400/30"
                            : "bg-brand-400/10 text-brand-200 ring-brand-400/25",
                        )}
                      >
                        <Icon className="size-6" aria-hidden="true" />
                      </div>
                      {isFeatured ? (
                        <span className="inline-flex items-center gap-1.5 rounded-full border border-brand-400/30 bg-brand-400/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-brand-200">
                          In evidenza
                        </span>
                      ) : null}
                    </div>

                    <h3
                      className={cn(
                        "mt-8 font-semibold text-white",
                        isFeatured ? "text-2xl md:text-3xl" : "text-xl",
                      )}
                    >
                      {category.title}
                    </h3>
                    <p className="mt-3 flex-1 text-pretty leading-7 text-ink-200">
                      {category.text}
                    </p>

                    <div className="mt-6 flex items-center justify-between border-t border-white/5 pt-4">
                      <span className="text-[10px] font-semibold uppercase tracking-[0.24em] text-ink-300">
                        {trainingFilters.find((f) => f.id === category.tag)?.label}
                      </span>
                      <ArrowUpRight className="size-4 text-ink-300 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand-300" />
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
