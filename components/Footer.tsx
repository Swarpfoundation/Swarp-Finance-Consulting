import Link from "next/link";

const links = [
  { href: "#come-funziona", label: "Come funziona" },
  { href: "#corsi", label: "Corsi" },
  { href: "#faq", label: "FAQ" },
  { href: "#contatti", label: "Contatti" },
];

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#050B14] py-10">
      <div className="section-shell flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
        <div>
          <p className="text-lg font-semibold">Swarp Finance Consulting</p>
          <p className="mt-2 text-slate-400">Formazione finanziata per aziende italiane</p>
          <p className="mt-4 max-w-xl text-sm leading-6 text-slate-500">
            Servizio di supporto consulenziale e operativo. Accesso soggetto a requisiti e
            approvazione.
          </p>
          <p className="mt-4 text-xs uppercase tracking-[0.18em] text-slate-500">
            Swarp Finance Consulting
          </p>
        </div>
        <nav aria-label="Footer" className="flex flex-wrap gap-4 text-sm text-slate-300">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="transition hover:text-white">
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
