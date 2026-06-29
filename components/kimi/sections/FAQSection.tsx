"use client";

import { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitHeading from "@/components/kimi/SplitHeading";
import SectionOverline from "@/components/kimi/SectionOverline";
import { Plus } from "lucide-react";
import { faqItems } from "@/lib/site-data";

gsap.registerPlugin(ScrollTrigger);

const faqs = faqItems.map((item, index) => ({
  id: `faq-${index + 1}`,
  q: item.q,
  a: item.a,
}));

export default function FAQSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [openId, setOpenId] = useState<string | null>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      const items = section.querySelectorAll(".faq-item");
      gsap.fromTo(
        items,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.08,
          ease: "power2.out",
          scrollTrigger: { trigger: section, start: "top 80%", once: true },
        }
      );
    }, section);

    return () => ctx.revert();
  }, []);

  const toggleFaq = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section
      id="faq"
      ref={sectionRef}
      className="w-full"
      style={{ background: "var(--black)", padding: "128px 0" }}
    >
      <div className="max-w-3xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="text-center mb-16">
          <SectionOverline>DOMANDE FREQUENTI</SectionOverline>
          <SplitHeading as="h2" className="mt-4">
            Hai Dubbi? Ti Rispondiamo Noi
          </SplitHeading>
        </div>

        {/* FAQ Items */}
        <div className="space-y-0">
          {faqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="faq-item opacity-0"
                style={{ borderBottom: "1px solid rgba(250, 250, 250, 0.1)" }}
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full flex items-center justify-between py-6 text-left bg-transparent border-none cursor-pointer"
                >
                  <span
                    className="font-body font-medium pr-4"
                    style={{ fontSize: "18px", color: "var(--white)" }}
                  >
                    {faq.q}
                  </span>
                  <Plus
                    size={20}
                    style={{
                      color: "var(--gold)",
                      transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
                      transition: "transform 0.3s ease",
                      flexShrink: 0,
                    }}
                  />
                </button>
                <div
                  className="overflow-hidden transition-all duration-400"
                  style={{
                    maxHeight: isOpen ? "500px" : "0",
                    opacity: isOpen ? 1 : 0,
                  }}
                >
                  <p
                    className="font-body pb-6"
                    style={{
                      fontSize: "16px",
                      color: "var(--light-gray)",
                      lineHeight: 1.6,
                    }}
                  >
                    {faq.a}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
