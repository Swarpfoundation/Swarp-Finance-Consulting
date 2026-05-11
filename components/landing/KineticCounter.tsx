"use client";

import { useEffect, useRef } from "react";
import { animate, useInView, useMotionValue, useTransform } from "framer-motion";

type KineticCounterProps = {
  to: number;
  duration?: number;
  format?: (value: number) => string;
};

export function KineticCounter({
  to,
  duration = 1.8,
  format = (value) => Math.round(value).toLocaleString("it-IT"),
}: KineticCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const count = useMotionValue(0);
  const display = useTransform(count, (latest) => format(latest));

  useEffect(() => {
    if (!inView) return;
    const controls = animate(count, to, {
      duration,
      ease: [0.16, 1, 0.3, 1],
    });
    return () => controls.stop();
  }, [count, duration, inView, to]);

  useEffect(() => {
    return display.on("change", (latest) => {
      if (ref.current) ref.current.textContent = latest;
    });
  }, [display]);

  return (
    <span ref={ref} aria-label={format(to)}>
      {format(0)}
    </span>
  );
}
