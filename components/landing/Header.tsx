"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useState } from "react";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { navItems } from "./data";
import { CtaButton } from "./CtaButton";
import { cn } from "@/lib/cn";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 24);
  });

  return (
    <header className="fixed left-0 top-0 z-50 w-full px-4 pt-4 md:px-6">
      <motion.div
        className={cn(
          "mx-auto flex max-w-7xl items-center justify-between rounded-full border transition-[padding,background-color,border-color] duration-300 ease-out",
          scrolled
            ? "border-white/10 bg-ink-950/80 px-4 py-2 shadow-elevated backdrop-blur-2xl md:px-5"
            : "border-white/5 bg-ink-950/40 px-4 py-3 backdrop-blur-xl md:px-5",
        )}
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <Link href="#" className="flex items-center gap-3" aria-label="Swarp Finance Consulting home">
          <motion.div
            animate={{ scale: scrolled ? 0.92 : 1 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <Image
              src="/swarp-finance-consulting-logo.png"
              alt="Swarp Finance Consulting"
              width={96}
              height={96}
              className="size-12 object-contain md:size-14"
              priority
            />
          </motion.div>
          <span className="hidden max-w-44 text-[11px] font-semibold uppercase leading-tight tracking-[0.22em] text-white sm:block">
            Swarp
            <span className="block text-ink-200">Finance Consulting</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-7 text-sm text-ink-100 lg:flex" aria-label="Navigazione principale">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group relative py-1 transition hover:text-white"
            >
              {item.label}
              <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-brand-400 transition-[width] duration-300 group-hover:w-full" />
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <CtaButton href="#contatti" className="min-h-10 px-4">
            Contattaci <ArrowUpRight size={16} aria-hidden="true" />
          </CtaButton>
        </div>

        <button
          type="button"
          className="grid size-10 place-items-center rounded-full border border-white/10 text-white lg:hidden"
          onClick={() => setOpen((current) => !current)}
          aria-expanded={open}
          aria-label={open ? "Chiudi menu" : "Apri menu"}
        >
          {open ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
        </button>
      </motion.div>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="mx-auto mt-3 max-w-7xl rounded-3xl border border-white/10 bg-ink-950/95 p-4 shadow-elevated backdrop-blur-2xl lg:hidden"
          >
            <nav className="grid gap-1" aria-label="Navigazione mobile">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-2xl px-4 py-3 text-sm font-medium text-ink-100 hover:bg-white/5"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="#contatti"
                className="mt-2 rounded-2xl bg-brand-400 px-4 py-3 text-center text-sm font-semibold text-ink-950"
                onClick={() => setOpen(false)}
              >
                Contattaci
              </Link>
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
