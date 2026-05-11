import { CheckCircle2 } from "lucide-react";
import { targetCustomers } from "./data";
import { SectionHeader } from "./SectionHeader";

export function EligibilitySection() {
  return (
    <section id="aziende" className="border-t border-slate-200 bg-white py-24 text-slate-950 md:py-32">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <div>
          <SectionHeader
            eyebrow="Aziende"
            title="Per tutte le aziende private con almeno 1 dipendente."
            text="Le ore di formazione finanziabili variano in base alla dimensione: ~50 per le micro, ~100 per le piccole, ~200 per le medie. Le grandi imprese accedono a più fondi."
          />
          <div className="mt-8 rounded-[1.75rem] border border-amber-200 bg-amber-50 p-5 text-sm leading-7 text-amber-950">
            Le ore indicate sono orientative: il numero esatto dipende dal fondo specifico, dal
            settore e dalla composizione del personale. La verifica puntuale la facciamo insieme.
          </div>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          {targetCustomers.map((target) => (
            <div
              key={target}
              className="flex min-h-20 items-center gap-4 rounded-3xl border border-slate-200 bg-slate-50 p-5"
            >
              <CheckCircle2 className="size-5 shrink-0 text-emerald-600" aria-hidden="true" />
              <span className="font-medium">{target}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
