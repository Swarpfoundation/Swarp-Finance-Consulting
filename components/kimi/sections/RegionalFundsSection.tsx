"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitHeading from "@/components/kimi/SplitHeading";
import SectionOverline from "@/components/kimi/SectionOverline";
import { useLenis } from "@/components/kimi/hooks/useLenis";

gsap.registerPlugin(ScrollTrigger);

// Simplified Lombardy-like SVG paths
const sketchPaths = [
  // Outer region outline
  "M80,60 Q120,40 180,50 Q240,35 300,55 Q360,40 420,60 Q450,100 440,150 Q460,200 430,250 Q450,300 420,340 Q380,370 320,360 Q260,380 200,360 Q140,380 100,350 Q60,320 50,270 Q40,220 60,170 Q50,120 70,80 Z",
  // Building silhouettes
  "M120,200 L120,280 L150,280 L150,180 L170,180 L170,280 L200,280 L200,160 L220,160 L220,280 L250,280 L250,200 Z",
  "M320,220 L320,300 L340,300 L340,190 L360,190 L360,300 L380,300 L380,210 Z",
  // Euro symbols
  "M260,130 Q290,110 310,130 Q330,150 310,170 Q290,190 260,170",
  "M265,140 L305,140 M265,160 L305,160",
  // Connecting lines
  "M150,180 L260,130 M340,190 L310,170",
  // Grid dots
  "M100,120 L100,120 M200,100 L200,100 M350,140 L350,140 M400,280 L400,280",
];

const goldPaths = [
  "M80,60 Q120,40 180,50 Q240,35 300,55 Q360,40 420,60 Q450,100 440,150 Q460,200 430,250 Q450,300 420,340 Q380,370 320,360 Q260,380 200,360 Q140,380 100,350 Q60,320 50,270 Q40,220 60,170 Q50,120 70,80 Z",
  "M120,200 L120,280 L150,280 L150,180 L170,180 L170,280 L200,280 L200,160 L220,160 L220,280 L250,280 L250,200 Z",
  "M320,220 L320,300 L340,300 L340,190 L360,190 L360,300 L380,300 L380,210 Z",
  "M260,130 Q290,110 310,130 Q330,150 310,170 Q290,190 260,170",
  "M265,140 L305,140 M265,160 L305,160",
];

export default function RegionalFundsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const sketchGroupRef = useRef<SVGGElement>(null);
  const goldGroupRef = useRef<SVGGElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const { scrollTo } = useLenis();

  useEffect(() => {
    const section = sectionRef.current;
    const svg = svgRef.current;
    const sketchGroup = sketchGroupRef.current;
    const goldGroup = goldGroupRef.current;
    const content = contentRef.current;
    if (!section || !svg || !sketchGroup || !goldGroup || !content) return;

    const ctx = gsap.context(() => {
      // Set up stroke-dasharray for sketch paths
      const sketchPaths = sketchGroup.querySelectorAll("path");
      sketchPaths.forEach((path) => {
        const length = (path as SVGPathElement).getTotalLength();
        gsap.set(path, {
          strokeDasharray: length,
          strokeDashoffset: length,
        });
      });

      // Gold paths start hidden
      gsap.set(goldGroup, { opacity: 0 });

      // Content elements
      const contentEls = content.querySelectorAll(".rf-anim");
      gsap.set(contentEls, { opacity: 0, y: 30 });

      // Timeline
      const tl = gsap.timeline();

      // Phase 1: Draw sketch paths
      sketchPaths.forEach((path, i) => {
        tl.to(
          path,
          {
            strokeDashoffset: 0,
            duration: 1.5,
            ease: "power2.inOut",
          },
          i * 0.3
        );
      });

      // Phase 2: Crossfade to gold
      tl.to(sketchGroup, { opacity: 0, duration: 0.5 }, "-=0.5");
      tl.to(goldGroup, { opacity: 1, duration: 0.5 }, "-=0.3");

      // Phase 3: Content entrance
      tl.to(
        contentEls,
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: "power2.out",
        },
        "-=0.3"
      );

      ScrollTrigger.create({
        trigger: section,
        start: "center center",
        end: "+=200%",
        pin: true,
        scrub: 1,
        animation: tl,
        snap: {
          snapTo: (progress: number) => {
            const snaps = [1 / 3, 2 / 3, 1];
            return snaps.reduce((closest, s) =>
              Math.abs(s - progress) < Math.abs(closest - progress) ? s : closest
            );
          },
          duration: { min: 0.15, max: 0.35 },
          ease: "power2.out",
        },
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="bandi"
      ref={sectionRef}
      className="relative w-full flex items-center"
      style={{ minHeight: "100vh", background: "var(--black)", padding: "128px 0" }}
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* SVG Canvas */}
          <div className="relative">
            <svg
              ref={svgRef}
              viewBox="0 0 500 420"
              className="w-full max-w-lg mx-auto"
              style={{ overflow: "visible" }}
            >
              {/* Sketch layer (rough, animated) */}
              <g ref={sketchGroupRef} style={{ opacity: 1 }}>
                {sketchPaths.map((d, i) => (
                  <path
                    key={`sketch-${i}`}
                    d={d}
                    fill="none"
                    stroke="var(--light-gray)"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                ))}
              </g>

              {/* Gold layer (clean, revealed) */}
              <g ref={goldGroupRef} style={{ opacity: 0 }}>
                {goldPaths.map((d, i) => (
                  <path
                    key={`gold-${i}`}
                    d={d}
                    fill="none"
                    stroke="var(--gold)"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                ))}
                {/* Gold fills */}
                <path
                  d="M120,200 L120,280 L150,280 L150,180 L170,180 L170,280 L200,280 L200,160 L220,160 L220,280 L250,280 L250,200 Z"
                  fill="rgba(200, 164, 92, 0.1)"
                  stroke="none"
                />
                <path
                  d="M320,220 L320,300 L340,300 L340,190 L360,190 L360,300 L380,300 L380,210 Z"
                  fill="rgba(200, 164, 92, 0.1)"
                  stroke="none"
                />
                {/* Center glow */}
                <circle cx="260" cy="150" r="40" fill="rgba(200, 164, 92, 0.05)" />
              </g>
            </svg>
          </div>

          {/* Content */}
          <div ref={contentRef}>
            <div className="rf-anim">
              <SectionOverline>FINANZIAMENTI REGIONALI</SectionOverline>
            </div>
            <div className="rf-anim mt-4">
              <SplitHeading
                as="h2"
                className="font-display"
                style={{ fontSize: "clamp(28px, 3.5vw, 40px)", color: "var(--white)" }}
              >
                Lombardia FSE+ 2021-2027
              </SplitHeading>
            </div>
            <p
              className="rf-anim font-body mt-6 opacity-0"
              style={{ fontSize: "16px", color: "var(--light-gray)", lineHeight: 1.6 }}
            >
              Attraverso questo bando, la tua impresa può investire nella crescita professionale
              non solo dei dipendenti, ma anche di soci, titolari e soggetti con Partita IVA
              collegati all&apos;azienda. Verifichiamo requisiti, disponibilità delle risorse e
              condizioni del bando attivo prima di procedere.
            </p>

            {/* Stats Row */}
            <div className="rf-anim flex flex-wrap gap-8 mt-10 opacity-0">
              {[
                {
                  value: "2000",
                  label: "Valore massimo dei corsi formativi a cui può accedere ogni partecipante",
                },
                {
                  value: "50000",
                  label: "Importo annuale massimo per ciascun'impresa",
                },
                {
                  value: "Cofinanziamento fino al 90%",
                  label: "Se la formazione riguarda tematiche digitali",
                },
              ].map((stat, i) => (
                <div key={i}>
                  <span
                    className="font-display block"
                    style={{ fontSize: "24px", color: "var(--gold)" }}
                  >
                    {stat.value}
                  </span>
                  <span
                    className="font-body text-sm"
                    style={{ color: "var(--light-gray)" }}
                  >
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>

            <p
              className="rf-anim font-body mt-6 italic opacity-0"
              style={{ fontSize: "12px", color: "var(--light-gray)" }}
            >
              *I contributi sono soggetti a verifica dell&apos;idoneità e disponibilità di
              risorse del bando attivo.
            </p>

            <button
              onClick={() => scrollTo("#contatti", { offset: -64 })}
              className="rf-anim mt-8 font-body text-sm font-semibold uppercase px-8 py-3.5 rounded opacity-0 transition-all duration-300 hover:scale-[1.02] cursor-pointer"
              style={{ background: "var(--gold)", color: "var(--black)" }}
              onMouseEnter={(e) => { (e.target as HTMLElement).style.background = "#D4B76A"; }}
              onMouseLeave={(e) => { (e.target as HTMLElement).style.background = "var(--gold)"; }}
            >
              Verifica la Tua Idoneità
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
