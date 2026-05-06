import { SectionHeading } from "./SectionHeading";

const steps = [
  ["Primo contatto", "Spieghiamo in modo semplice il meccanismo della formazione finanziata."],
  [
    "Raccolta informazioni",
    "Analizziamo azienda, dipendenti, settore, esigenze formative e consulente del lavoro.",
  ],
  ["Verifica percorso", "Valutiamo fondo, requisiti, procedura e documenti necessari."],
  ["Piano formativo", "Costruiamo obiettivi, corsi, calendario, modalità e contenuti."],
  ["Avvio formazione", "La formazione parte dopo le verifiche e le approvazioni necessarie."],
  [
    "Supporto documentale",
    "Supportiamo registri, presenze, documentazione e rendicontazione operativa.",
  ],
];

export function ProcessSection() {
  return (
    <section id="come-funziona" className="bg-[#07111f]/70 py-20">
      <div className="section-shell">
        <SectionHeading title="Come funziona" />
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {steps.map(([title, text], index) => (
            <article key={title} className="rounded-lg border border-white/10 bg-[#050B14]/70 p-6">
              <span className="mb-5 grid size-11 place-items-center rounded-md bg-[#00D2D3] text-lg font-semibold text-[#031018]">
                {index + 1}
              </span>
              <h3 className="text-xl font-semibold">{title}</h3>
              <p className="mt-3 leading-7 text-slate-300">{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
