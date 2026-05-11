import { ShieldAlert } from "lucide-react";

export function ComplianceSection() {
  return (
    <section className="bg-ink-950 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-8 rounded-[2rem] border border-gold-200/20 bg-[linear-gradient(135deg,rgba(251,191,36,0.12),rgba(255,255,255,0.04))] p-7 md:grid-cols-[auto_1fr] md:p-10">
          <div className="grid size-16 place-items-center rounded-2xl bg-gold-200/15 text-gold-200 ring-1 ring-gold-300/25">
            <ShieldAlert className="size-8" aria-hidden="true" />
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-gold-200">
              Chiarezza istituzionale
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white">
              Supporto consulenziale, non ente pubblico.
            </h2>
            <p className="mt-5 max-w-5xl text-lg leading-8 text-ink-100">
              Swarp Finance Consulting non e un ente pubblico, INPS o Ministero del Lavoro. Il servizio
              consiste in supporto consulenziale B2B, progettazione formativa, coordinamento operativo
              e gestione documentale. Dove richiesto, la gestione puo coinvolgere enti o partner
              accreditati. L&apos;accesso dipende sempre da fondo scelto, requisiti aziendali, avvisi
              disponibili, procedure applicabili e approvazione del piano.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
