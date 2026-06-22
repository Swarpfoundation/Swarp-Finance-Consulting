"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";

gsap.registerPlugin(ScrollTrigger);

interface SplitHeadingProps {
  children: string;
  as?: "h1" | "h2" | "h3" | "h4";
  className?: string;
  style?: React.CSSProperties;
}

export default function SplitHeading({
  children,
  as: Tag = "h2",
  className = "",
  style,
}: SplitHeadingProps) {
  const ref = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const split = new SplitType(el, { types: "chars" });
    const chars = split.chars;
    if (!chars || chars.length === 0) return;

    gsap.set(chars, { opacity: 0, yPercent: 40 });

    const anim = gsap.to(chars, {
      opacity: 1,
      yPercent: 0,
      duration: 0.8,
      ease: "power3.out",
      stagger: 0.03,
      scrollTrigger: {
        trigger: el,
        start: "top 80%",
        once: true,
      },
    });

    return () => {
      anim.kill();
      ScrollTrigger.getAll().forEach((st) => {
        if (st.trigger === el) st.kill();
      });
      split.revert();
    };
  }, [children]);

  return (
    <Tag ref={ref} className={className} style={style}>
      {children}
    </Tag>
  );
}
