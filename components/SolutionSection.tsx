import { CheckCircle2 } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const points = [
  "Comprendere l'eleggibilità dell'azienda",
  "Coordinarsi con il consulente del lavoro",
  "Identificare i fabbisogni formativi corretti",
  "Preparare un piano formativo coerente e conforme",
  "Coordinare l'erogazione della formazione",
  "Gestire documentazione, registri e supporto alla rendicontazione",
];

const timeline = ["Analisi", "Fondo e requisiti", "Piano formativo", "Erogazione", "Documentazione"];

export function SolutionSection() {
  return (
    <section className="bg-[#07111f]/70 py-20">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Soluzione"
          title="Swarp Academy semplifica l'intero percorso"
          text="Un servizio operativo per passare dalla confusione burocratica a un piano formativo concreto, con passaggi chiari e responsabilità coordinate."
        />
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-lg border border-white/10 bg-[#050B14]/70 p-6">
            <h3 className="text-xl font-semibold">Supporto end-to-end</h3>
            <div className="mt-6 space-y-4">
              {points.map((point) => (
                <div key={point} className="flex gap-3">
                  <CheckCircle2 className="mt-1 shrink-0 text-[#00D2D3]" size={18} aria-hidden="true" />
                  <p className="text-slate-300">{point}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-lg border border-[#00D2D3]/20 bg-gradient-to-br from-[#0A192F] to-[#050B14] p-6">
            <div className="space-y-4">
              {timeline.map((item, index) => (
                <div key={item} className="grid grid-cols-[44px_1fr] gap-4">
                  <div className="flex flex-col items-center">
                    <span className="grid size-10 place-items-center rounded-md bg-[#00D2D3] font-semibold text-[#031018]">
                      {index + 1}
                    </span>
                    {index < timeline.length - 1 ? <span className="h-8 w-px bg-[#00D2D3]/30" /> : null}
                  </div>
                  <div className="rounded-md border border-white/10 bg-white/[0.04] p-4">
                    <h3 className="font-semibold">{item}</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-400">
                      Verifiche, decisioni e materiali vengono ordinati in un percorso comprensibile
                      per azienda, consulente e partner formativi.
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
