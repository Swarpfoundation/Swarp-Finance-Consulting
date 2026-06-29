"use client";

import { useRef, useEffect, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Text } from "@react-three/drei";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import * as THREE from "three";
import { useLenis } from "@/components/kimi/hooks/useLenis";

gsap.registerPlugin(ScrollTrigger);

function SceneContent() {
  const groupRef = useRef<THREE.Group>(null);
  const swarpRef = useRef<THREE.Mesh>(null);
  const consultingRef = useRef<THREE.Mesh>(null);
  const mousePos = useRef({ x: 0, y: 0 });

  const matGold = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: 0xc8a45c,
        roughness: 0.3,
        metalness: 0.8,
      }),
    []
  );

  const matWhite = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: 0xfafafa,
        roughness: 0.4,
        metalness: 0.6,
      }),
    []
  );

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current.x = (e.clientX / window.innerWidth - 0.5) * 0.2;
      mousePos.current.y = (e.clientY / window.innerHeight - 0.5) * 0.2;
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useFrame(() => {
    if (!groupRef.current) return;

    // Mouse parallax
    groupRef.current.rotation.x +=
      (mousePos.current.y - groupRef.current.rotation.x) * 0.05;
    groupRef.current.rotation.y +=
      (mousePos.current.x - groupRef.current.rotation.y) * 0.05;
  });

  useEffect(() => {
    const group = groupRef.current;
    if (!group) return;

    const tl = gsap.timeline();

    // Entrance (0-20%)
    tl.from(
      group.scale,
      { x: 0, y: 0, z: 0, duration: 1, ease: "none" },
      0
    );
    tl.from(
      group.rotation,
      { x: Math.PI, y: Math.PI, duration: 1, ease: "none" },
      0
    );

    // Exit (80-100%)
    tl.to(
      group.position,
      { y: 5, duration: 1, ease: "power2.in" },
      4
    );
    tl.to(
      group.rotation,
      { x: Math.PI / 2, duration: 1, ease: "none" },
      4
    );

    ScrollTrigger.create({
      trigger: "#hero-wrapper",
      start: "top top",
      end: "+=400%",
      pin: true,
      scrub: 1,
      animation: tl,
      snap: {
        snapTo: (progress: number) => {
          if (progress < 0.2) return 0.2;
          if (progress > 0.8) return 1.0;
          return 0.5;
        },
        duration: { min: 0.15, max: 0.35 },
        ease: "power2.out",
      },
    });

    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach((st) => {
        if (st.trigger === document.getElementById("hero-wrapper")) st.kill();
      });
    };
  }, []);

  return (
    <>
      <ambientLight intensity={0.2} />
      <spotLight
        position={[-5, 5, 5]}
        angle={0.4}
        penumbra={0.5}
        intensity={50}
        castShadow
        color="#C8A45C"
      />
      <spotLight
        position={[5, 3, 5]}
        angle={0.3}
        penumbra={0.6}
        intensity={30}
        castShadow
        color="#FFFFFF"
      />

      <group ref={groupRef}>
        <Text
          ref={swarpRef}
          position={[0, 0.5, 0]}
          fontSize={0.8}
          font={"https://fonts.gstatic.com/s/instrumentserif/v4/jizBRFtNs2ka5fDjejmkUvIzzR8jYY_JJVl88J5J6iT_6uPKow.woff"}
          material={matGold}
          castShadow
          receiveShadow
        >
          SWARP
        </Text>
        <Text
          ref={consultingRef}
          position={[0, -0.5, 0]}
          fontSize={0.3}
          font={"https://fonts.gstatic.com/s/instrumentserif/v4/jizBRFtNs2ka5fDjejmkUvIzzR8jYY_JJVl88J5J6iT_6uPKow.woff"}
          material={matWhite}
          castShadow
          receiveShadow
        >
          CONSULTING
        </Text>
      </group>

      <mesh
        rotation={[-Math.PI / 2, 0, 0]}
        position={[0, -2, 0]}
        receiveShadow
      >
        <planeGeometry args={[100, 100]} />
        <meshStandardMaterial color="#1A1A1A" roughness={0.9} />
      </mesh>
    </>
  );
}

export default function HeroSection() {
  const overlayRef = useRef<HTMLDivElement>(null);
  const { scrollTo } = useLenis();

  useEffect(() => {
    const el = overlayRef.current;
    if (!el) return;

    const headline = el.querySelector(".hero-headline");
    const subheadline = el.querySelector(".hero-subheadline");
    const ctas = el.querySelectorAll(".hero-cta");
    const tricolor = el.querySelector(".hero-tricolor");

    const tl = gsap.timeline({ delay: 0.5 });
    if (headline) tl.to(headline, { opacity: 1, y: 0, duration: 1, ease: "power3.out" }, 0);
    if (subheadline) tl.to(subheadline, { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }, 0.3);
    if (ctas.length) tl.to(ctas, { opacity: 1, y: 0, duration: 0.6, ease: "power2.out", stagger: 0.1 }, 0.6);
    if (tricolor) tl.to(tricolor, { opacity: 1, scaleX: 1, duration: 0.5, ease: "power2.out" }, 0.9);

    return () => { tl.kill(); };
  }, []);

  return (
    <div id="hero-wrapper" className="relative w-full" style={{ height: "100vh" }}>
      {/* Three.js Canvas */}
      <div className="absolute inset-0 z-[1]">
        <Canvas
          shadows
          camera={{ position: [0, 0, 5], fov: 75 }}
          gl={{
            antialias: true,
            powerPreference: "high-performance",
          }}
          style={{ background: "#1A1A1A" }}
        >
          <SceneContent />
        </Canvas>
      </div>

      {/* Text Overlay */}
      <div
        ref={overlayRef}
        className="absolute inset-0 z-[2] flex flex-col items-center justify-end pb-[15vh] px-6"
      >
        <h1
          className="hero-headline font-display text-center opacity-0 translate-y-8"
          style={{
            fontSize: "clamp(36px, 5vw, 56px)",
            color: "var(--white)",
            textShadow: "0 4px 24px rgba(0,0,0,0.8)",
          }}
        >
          Formazione Finanziata
        </h1>
        <p
          className="hero-subheadline font-body text-center mt-4 max-w-xl opacity-0 translate-y-5"
          style={{
            fontSize: "clamp(14px, 1.2vw, 18px)",
            color: "var(--light-gray)",
            textShadow: "0 2px 12px rgba(0,0,0,0.8)",
          }}
        >
          Gestiamo i fondi interprofessionali per finanziare la crescita della tua azienda.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
          <button
            onClick={() => scrollTo("#contatti", { offset: -64 })}
            className="hero-cta font-body text-sm font-semibold uppercase px-8 py-3.5 rounded opacity-0 translate-y-5 transition-all duration-300 hover:scale-[1.02] cursor-pointer"
            style={{ background: "var(--gold)", color: "var(--black)" }}
            onMouseEnter={(e) => { (e.target as HTMLElement).style.background = "#D4B76A"; }}
            onMouseLeave={(e) => { (e.target as HTMLElement).style.background = "var(--gold)"; }}
          >
            Consulenza Gratuita
          </button>
          <button
            onClick={() => scrollTo("#servizi", { offset: -64 })}
            className="hero-cta font-body text-sm font-medium uppercase px-8 py-3.5 rounded opacity-0 translate-y-5 transition-all duration-300 cursor-pointer"
            style={{
              border: "1px solid rgba(250, 250, 250, 0.2)",
              color: "var(--white)",
            }}
            onMouseEnter={(e) => { (e.target as HTMLElement).style.borderColor = "var(--gold)"; }}
            onMouseLeave={(e) => { (e.target as HTMLElement).style.borderColor = "rgba(250, 250, 250, 0.2)"; }}
          >
            Scopri i Servizi
          </button>
        </div>

        {/* Italian Tricolor */}
        <div
          className="hero-tricolor flex gap-0 mt-6 opacity-0"
          style={{
            width: "60px",
            height: "2px",
            transformOrigin: "center",
            transform: "scaleX(0)",
          }}
        >
          <div style={{ flex: 1, background: "var(--green)" }} />
          <div style={{ flex: 1, background: "var(--white)" }} />
          <div style={{ flex: 1, background: "var(--red)" }} />
        </div>
      </div>
    </div>
  );
}
