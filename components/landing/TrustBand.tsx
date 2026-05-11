"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { KineticCounter } from "./KineticCounter";
import { partnerLogos, trustMetrics } from "./data";
import { fadeUp, stagger, viewportOnce } from "@/lib/motion";

export function TrustBand() {
  return (
    <section
      aria-labelledby="trust-heading"
      className="relative overflow-hidden border-t border-white/[0.06] bg-ink-950 py-20 md:py-24"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-400/40 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 -top-40 h-80 bg-[radial-gradient(60rem_30rem_at_50%_0,rgba(0,229,229,0.08),transparent)]" />

      <div className="relative mx-auto max-w-7xl px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={stagger(0, 0.12)}
          className="grid gap-4 text-center md:grid-cols-3"
        >
          {trustMetrics.map((metric) => (
            <motion.div
              key={metric.label}
              variants={fadeUp}
              className="group relative rounded-[1.75rem] border border-white/[0.06] bg-white/[0.02] p-8 transition hover:border-brand-400/30 hover:bg-white/[0.04] md:p-10"
            >
              <div className="absolute inset-x-8 -top-px h-px bg-gradient-to-r from-transparent via-brand-400/40 to-transparent opacity-0 transition group-hover:opacity-100" />
              <p className="font-display text-6xl font-normal leading-none tracking-tight text-white md:text-7xl">
                <KineticCounter to={metric.value} />
                <span className="text-brand-300">{metric.suffix}</span>
              </p>
              <p className="mt-5 text-base font-semibold text-white md:text-lg">{metric.label}</p>
              <p className="mt-2 text-sm leading-6 text-ink-200">{metric.caption}</p>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-16">
          <h2
            id="trust-heading"
            className="text-center text-[11px] font-semibold uppercase tracking-[0.32em] text-ink-200"
          >
            Realta che ci hanno scelto
          </h2>

          <motion.ul
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={stagger(0.1, 0.06)}
            className="mt-8 grid grid-cols-2 items-center gap-x-8 gap-y-6 sm:grid-cols-3 lg:grid-cols-6"
          >
            {partnerLogos.map((logo) => (
              <motion.li
                key={logo.name}
                variants={fadeUp}
                className="flex h-14 items-center justify-center"
              >
                {logo.src ? (
                  <Image
                    src={logo.src}
                    alt={logo.name}
                    width={140}
                    height={40}
                    className="h-8 w-auto object-contain opacity-50 grayscale transition hover:opacity-100 hover:grayscale-0"
                  />
                ) : (
                  <LogoPlaceholder name={logo.name} />
                )}
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </div>
    </section>
  );
}

function LogoPlaceholder({ name }: { name: string }) {
  const initials = name
    .split(" ")
    .map((part) => part[0])
    .filter(Boolean)
    .slice(0, 2)
    .join("");

  return (
    <div className="flex items-center gap-2.5 opacity-60 transition hover:opacity-100">
      <span className="grid size-8 place-items-center rounded-md border border-white/15 bg-white/[0.04] text-[11px] font-semibold tracking-tight text-white">
        {initials}
      </span>
      <span className="text-xs font-medium tracking-tight text-ink-100">{name}</span>
    </div>
  );
}
