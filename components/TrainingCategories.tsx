import { BrainCircuit, BriefcaseBusiness, Flame, Languages, MonitorCog, Shield, Store, Utensils, Wrench } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const categories = [
  { icon: BrainCircuit, title: "Intelligenza artificiale per PMI" },
  { icon: MonitorCog, title: "Digital skills, Excel e strumenti web" },
  { icon: BriefcaseBusiness, title: "Marketing, branding e vendite" },
  { icon: Shield, title: "Sicurezza sul lavoro" },
  { icon: Flame, title: "Antincendio e primo soccorso" },
  { icon: Languages, title: "Lingue: inglese e italiano per stranieri" },
  { icon: Store, title: "Customer service e gestione operativa" },
  { icon: Wrench, title: "Formazione tecnica per settore" },
  { icon: Utensils, title: "Hospitality, ristorazione, palestre, retail, logistica" },
];

export function TrainingCategories() {
  return (
    <section id="corsi" className="py-20">
      <div className="section-shell">
        <SectionHeading title="Percorsi formativi utili, concreti e finanziabili quando i requisiti sono soddisfatti" />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map(({ icon: Icon, title }) => (
            <article
              key={title}
              className="rounded-lg border border-white/10 bg-white/[0.04] p-5 transition hover:border-[#00D2D3]/40 hover:bg-white/[0.06]"
            >
              <Icon className="mb-4 text-[#00D2D3]" aria-hidden="true" />
              <h3 className="text-lg font-semibold leading-7">{title}</h3>
            </article>
          ))}
        </div>
        <p className="mx-auto mt-8 max-w-3xl text-center text-sm leading-6 text-slate-400">
          La finanziabilità dipende dal fondo, dall&apos;avviso disponibile, dal piano formativo e dai
          requisiti dell&apos;azienda.
        </p>
      </div>
    </section>
  );
}
