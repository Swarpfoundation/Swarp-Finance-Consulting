import { ShieldAlert } from "lucide-react";

export function ComplianceBox() {
  return (
    <section className="py-20">
      <div className="section-shell">
        <div className="accent-ring rounded-lg border border-[#00D2D3]/30 bg-[#00D2D3]/10 p-6 md:p-8">
          <div className="flex flex-col gap-5 md:flex-row">
            <ShieldAlert className="shrink-0 text-[#00D2D3]" size={34} aria-hidden="true" />
            <div>
              <h2 className="text-3xl font-semibold">Chiarezza prima di tutto</h2>
              <p className="mt-4 leading-8 text-slate-200">
                Swarp Finance Consulting non è un ente pubblico, INPS o Ministero del Lavoro. Il servizio
                consiste in supporto consulenziale, progettazione formativa, coordinamento operativo
                e gestione documentale. L&apos;accesso alla formazione finanziata dipende dal fondo
                interprofessionale scelto, dai requisiti dell&apos;azienda, dagli avvisi disponibili,
                dalle procedure applicabili e dall&apos;approvazione del piano formativo. Dove richiesto,
                la gestione può coinvolgere enti o partner accreditati.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
