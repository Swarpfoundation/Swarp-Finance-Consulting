"use client";

import { useCallback, useEffect, useRef } from "react";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollProvider } from "@/components/kimi/hooks/useLenis";
import CursorGlow from "@/components/kimi/CursorGlow";
import Footer from "@/components/kimi/Footer";
import Navigation from "@/components/kimi/Navigation";
import ContactSection from "@/components/kimi/sections/ContactSection";
import FAQSection from "@/components/kimi/sections/FAQSection";
import HeroSection from "@/components/kimi/sections/HeroSection";
import ProcessSection from "@/components/kimi/sections/ProcessSection";
import RegionalFundsSection from "@/components/kimi/sections/RegionalFundsSection";
import ServicesSection from "@/components/kimi/sections/ServicesSection";
import StatsSection from "@/components/kimi/sections/StatsSection";
import TrainingSection from "@/components/kimi/sections/TrainingSection";
import TrustBarSection from "@/components/kimi/sections/TrustBarSection";

gsap.registerPlugin(ScrollTrigger);

export function PremiumLanding() {
  const lenisRef = useRef<Lenis | null>(null);

  const scrollTo = useCallback((target: string | number, options?: object) => {
    lenisRef.current?.scrollTo(target, options);
  }, []);

  useEffect(() => {
    const lenisInstance = new Lenis({
      lerp: 0.1,
      smoothWheel: true,
    });

    lenisRef.current = lenisInstance;
    lenisInstance.on("scroll", ScrollTrigger.update);

    const tickerCallback = (time: number) => {
      lenisInstance.raf(time * 1000);
    };

    gsap.ticker.add(tickerCallback);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(tickerCallback);
      lenisInstance.destroy();
      lenisRef.current = null;
    };
  }, []);

  return (
    <ScrollProvider value={{ lenis: null, scrollTo }}>
      <div className="kimi-page min-h-screen overflow-x-hidden bg-[var(--black)] text-[var(--white)]">
        <CursorGlow />
        <Navigation />
        <main>
          <HeroSection />
          <TrustBarSection />
          <ServicesSection />
          <ProcessSection />
          <TrainingSection />
          <RegionalFundsSection />
          <StatsSection />
          <FAQSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </ScrollProvider>
  );
}
