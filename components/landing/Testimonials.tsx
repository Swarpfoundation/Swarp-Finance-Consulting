"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import { testimonials } from "./data";
import { fadeUp, stagger, viewportOnce } from "@/lib/motion";
import { cn } from "@/lib/cn";

export function Testimonials() {
  const featured = testimonials.find((testimonial) => testimonial.featured) ?? testimonials[0];
  const others = testimonials.filter((testimonial) => testimonial !== featured);

  return (
    <section
      aria-labelledby="testimonials-heading"
      className="relative overflow-hidden border-t border-white/[0.06] bg-ink-950 py-24 md:py-32"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(70rem_40rem_at_50%_100%,rgba(0,229,229,0.10),transparent)]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-400/30 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-brand-300">
            Voce dei clienti
          </p>
          <h2
            id="testimonials-heading"
            className="mt-4 text-balance text-3xl font-semibold tracking-tight text-white md:text-5xl"
          >
            Chi ha lavorato con noi{" "}
            <span className="font-display italic font-normal text-brand-300">racconta cosi.</span>
          </h2>
          <p className="mt-5 text-pretty text-lg leading-8 text-ink-100">
            Esperienze concrete su processi, coordinamento e chiarezza operativa.
          </p>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={stagger(0, 0.12)}
          className="mt-14 grid gap-4 lg:grid-cols-[1.4fr_1fr]"
        >
          <TestimonialCard testimonial={featured} variant="featured" />
          <div className="grid gap-4">
            {others.map((testimonial) => (
              <TestimonialCard
                key={testimonial.name}
                testimonial={testimonial}
                variant="satellite"
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

type Testimonial = (typeof testimonials)[number];

function TestimonialCard({
  testimonial,
  variant,
}: {
  testimonial: Testimonial;
  variant: "featured" | "satellite";
}) {
  const isFeatured = variant === "featured";

  return (
    <motion.article
      variants={fadeUp}
      className={cn(
        "group relative flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-white/10 p-7 transition hover:border-brand-400/35 md:p-9",
        isFeatured
          ? "bg-[linear-gradient(165deg,rgba(0,229,229,0.10),rgba(255,255,255,0.02))]"
          : "bg-white/[0.03]",
      )}
    >
      {isFeatured ? (
        <div className="pointer-events-none absolute -right-20 -top-20 size-72 rounded-full bg-brand-400/15 blur-3xl" />
      ) : null}

      <div className="relative flex items-center justify-between">
        <Quote
          className={cn(
            "shrink-0 text-brand-300/80",
            isFeatured ? "size-10" : "size-7",
          )}
          aria-hidden="true"
        />
        <div className="flex items-center gap-0.5 text-brand-300">
          {Array.from({ length: 5 }).map((_, index) => (
            <Star
              key={index}
              className={cn(isFeatured ? "size-4" : "size-3")}
              fill="currentColor"
              strokeWidth={0}
              aria-hidden="true"
            />
          ))}
        </div>
      </div>

      <blockquote
        className={cn(
          "relative mt-6 flex-1 font-display italic leading-[1.25] text-white",
          isFeatured ? "text-3xl md:text-4xl" : "text-xl md:text-2xl",
        )}
      >
        &ldquo;{testimonial.quote}&rdquo;
      </blockquote>

      <figcaption className="relative mt-8 flex items-center gap-4 border-t border-white/10 pt-6">
        {testimonial.photo ? (
          <Image
            src={testimonial.photo}
            alt={testimonial.name}
            width={48}
            height={48}
            className={cn(
              "shrink-0 rounded-full object-cover",
              isFeatured ? "size-12" : "size-10",
            )}
          />
        ) : (
          <span
            className={cn(
              "grid shrink-0 place-items-center rounded-full border border-brand-400/30 bg-brand-400/15 font-semibold text-brand-200",
              isFeatured ? "size-12 text-sm" : "size-10 text-xs",
            )}
          >
            {testimonial.name
              .split(" ")
              .map((part) => part[0])
              .slice(0, 2)
              .join("")}
          </span>
        )}
        <div className="min-w-0">
          <p
            className={cn(
              "font-semibold text-white",
              isFeatured ? "text-base" : "text-sm",
            )}
          >
            {testimonial.name}
          </p>
          <p className="text-xs text-ink-200">
            {testimonial.role} ·{" "}
            <span className="text-ink-100">{testimonial.company}</span>
          </p>
        </div>
        <span className="ml-auto rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-ink-200">
          {testimonial.sector}
        </span>
      </figcaption>
    </motion.article>
  );
}
