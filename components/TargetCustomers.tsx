import { Building2, Dumbbell, Factory, Hotel, Laptop, Scale, ShoppingBag, UsersRound } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const targets = [
  { icon: UsersRound, title: "Micro imprese" },
  { icon: Building2, title: "Piccole e medie imprese" },
  { icon: Scale, title: "Studi professionali" },
  { icon: Hotel, title: "Ristoranti, bar e hotel" },
  { icon: Dumbbell, title: "Palestre e centri sportivi" },
  { icon: ShoppingBag, title: "Retail e servizi locali" },
  { icon: Laptop, title: "Aziende tech e digitali" },
  { icon: Factory, title: "Logistica, produzione e servizi B2B" },
];

export function TargetCustomers() {
  return (
    <section id="aziende" className="py-20">
      <div className="section-shell">
        <SectionHeading title="Pensato per PMI, attività locali e aziende in crescita" />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {targets.map(({ icon: Icon, title }) => (
            <article key={title} className="rounded-lg border border-white/10 bg-white/[0.04] p-5">
              <Icon className="mb-4 text-[#00D2D3]" aria-hidden="true" />
              <h3 className="font-semibold leading-7">{title}</h3>
            </article>
          ))}
        </div>
        <p className="mx-auto mt-8 max-w-3xl rounded-lg border border-white/10 bg-white/[0.04] p-4 text-center text-sm leading-6 text-slate-300">
          Il servizio è pensato principalmente per aziende private con almeno un dipendente. La
          possibilità di accesso viene verificata caso per caso.
        </p>
      </div>
    </section>
  );
}
