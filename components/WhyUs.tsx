import { FileCheck2, Handshake, MessageCircle, Network, Sparkles, Workflow } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const reasons = [
  { icon: MessageCircle, title: "Linguaggio semplice" },
  { icon: Workflow, title: "Approccio digitale" },
  { icon: Sparkles, title: "Focus su AI e competenze moderne" },
  { icon: Network, title: "Supporto operativo end-to-end" },
  { icon: Handshake, title: "Coordinamento con consulenti e partner" },
  { icon: FileCheck2, title: "Documentazione chiara" },
];

export function WhyUs() {
  return (
    <section className="bg-[#07111f]/70 py-20">
      <div className="section-shell">
        <SectionHeading title="Perché scegliere Swarp Academy" />
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {reasons.map(({ icon: Icon, title }) => (
            <article key={title} className="rounded-lg border border-white/10 bg-[#050B14]/70 p-6">
              <Icon className="mb-5 text-[#00D2D3]" aria-hidden="true" />
              <h3 className="text-lg font-semibold">{title}</h3>
              <p className="mt-3 leading-7 text-slate-300">
                Un metodo concreto per ridurre incertezza, tempi operativi e dispersione tra
                consulenza, progettazione ed erogazione.
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
