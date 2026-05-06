"use client";

import { ChevronDown } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const items = [
  [
    "È formazione gratuita?",
    "È più corretto parlare di formazione finanziata. L'azienda utilizza meccanismi collegati a contributi già versati, quando i requisiti sono soddisfatti e il piano viene approvato.",
  ],
  [
    "L'azienda riceve denaro?",
    "No. Normalmente il beneficio riguarda il finanziamento o rimborso di percorsi formativi approvati, non un contributo cash libero.",
  ],
  [
    "Serve il consulente del lavoro?",
    "Sì, nella maggior parte dei casi il consulente del lavoro è coinvolto per la posizione contributiva e l'adesione al fondo.",
  ],
  [
    "Quali aziende possono accedere?",
    "Generalmente aziende private con almeno un dipendente, ma la verifica dipende da posizione contributiva, fondo scelto e requisiti applicabili.",
  ],
  [
    "Quanto tempo serve?",
    "Dipende dalla situazione aziendale e dal fondo. L'attivazione e la preparazione possono richiedere alcune settimane.",
  ],
  [
    "Quali corsi si possono fare?",
    "AI, digitale, sicurezza, vendite, lingue, marketing, gestione operativa e formazione tecnica di settore, se coerenti con il piano e finanziabili.",
  ],
  [
    "L'approvazione è garantita?",
    "No. Ogni richiesta è soggetta a requisiti, fondi disponibili, procedure e approvazione del piano.",
  ],
];

export function FAQ() {
  return (
    <section id="faq" className="bg-[#07111f]/70 py-20">
      <div className="section-shell">
        <SectionHeading title="FAQ" />
        <div className="mx-auto max-w-3xl divide-y divide-white/10 rounded-lg border border-white/10 bg-[#050B14]/70">
          {items.map(([question, answer]) => (
            <details key={question} className="group p-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold">
                {question}
                <ChevronDown
                  className="shrink-0 text-[#00D2D3] transition group-open:rotate-180"
                  aria-hidden="true"
                  size={20}
                />
              </summary>
              <p className="mt-4 leading-7 text-slate-300">{answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
