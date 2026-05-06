import { BarChart3, Clock3, Landmark, TrendingUp } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const cards = [
  {
    icon: Landmark,
    title: "Contributi già versati",
    text: "Le aziende sostengono contributi obbligatori collegati alla formazione continua.",
  },
  {
    icon: BarChart3,
    title: "Processo complesso",
    text: "Fondi, avvisi, requisiti e documentazione rendono difficile orientarsi.",
  },
  {
    icon: Clock3,
    title: "Poco tempo per le PMI",
    text: "Imprenditori e consulenti del lavoro spesso non hanno tempo per seguire tutto.",
  },
  {
    icon: TrendingUp,
    title: "Competenze non aggiornate",
    text: "AI, digitale, vendita e sicurezza richiedono formazione continua e pratica.",
  },
];

export function ProblemSection() {
  return (
    <section className="py-20">
      <div className="section-shell">
        <SectionHeading title="Molte aziende pagano già, ma non utilizzano il valore formativo" />
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {cards.map(({ icon: Icon, title, text }) => (
            <article key={title} className="rounded-lg border border-white/10 bg-white/[0.04] p-6">
              <Icon className="mb-5 text-[#00D2D3]" aria-hidden="true" />
              <h3 className="text-lg font-semibold">{title}</h3>
              <p className="mt-3 leading-7 text-slate-300">{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
