import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Building2, FileText, MapPin } from "lucide-react";
import { navItems } from "./data";

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-ink-950 pt-20 pb-10">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-400/40 to-transparent" />
      <div className="pointer-events-none absolute -bottom-40 left-1/2 -translate-x-1/2">
        <div className="font-display text-[14rem] font-normal leading-none tracking-tight text-white/[0.03] md:text-[20rem]">
          Swarp
        </div>
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid gap-12 md:grid-cols-[1.2fr_0.8fr]">
          <div>
            <div className="flex items-center gap-4">
              <Image
                src="/swarp_consulting_transparent.png"
                alt="Swarp Consulting"
                width={160}
                height={160}
                className="h-16 w-auto object-contain"
              />
              <div>
                <p className="text-[10px] font-semibold uppercase leading-tight tracking-[0.32em] text-white">
                  Swarp
                </p>
                <p className="text-[10px] font-semibold uppercase tracking-[0.32em] text-ink-200">
                  Consulting
                </p>
              </div>
            </div>
            <p className="mt-7 max-w-xl text-pretty text-lg leading-8 text-ink-100">
              Formazione finanziata per le aziende italiane:{" "}
              <span className="font-display italic font-normal text-brand-200">
                ci occupiamo della gestione dei fondi
              </span>{" "}
              e di tutta la burocrazia.
            </p>
          </div>

          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.32em] text-ink-200">
              Naviga
            </p>
            <nav className="mt-5 flex flex-wrap gap-2" aria-label="Footer">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-full border border-white/10 px-4 py-2 text-sm text-ink-100 transition hover:border-brand-400/45 hover:text-white"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <Link
              href="#contatti"
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-brand-300 px-5 py-3 text-sm font-semibold text-ink-950 transition hover:bg-brand-200"
            >
              Contattaci
              <ArrowUpRight className="size-4" aria-hidden="true" />
            </Link>
          </div>
        </div>

        <div className="mt-16 rounded-[2rem] border border-white/10 bg-white/[0.02] p-7 md:p-9">
          <div className="flex flex-col gap-2 border-b border-white/10 pb-6 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.32em] text-brand-300">
                Parte di
              </p>
              <p className="mt-3 font-display text-3xl font-normal leading-tight tracking-tight text-white md:text-4xl">
                Swarp Foundation{" "}
                <span className="italic text-brand-200">S.r.l.</span>
              </p>
              <p className="mt-2 text-sm text-ink-200">
                Swarp Consulting è un servizio di Swarp Foundation S.r.l.
              </p>
            </div>
            <a
              href="mailto:info@swarpconsulting.com"
              className="inline-flex items-center gap-2 self-start rounded-full border border-white/10 px-4 py-2 text-sm text-ink-100 transition hover:border-brand-400/45 hover:text-white md:self-end"
            >
              info@swarpconsulting.com
              <ArrowUpRight className="size-4" aria-hidden="true" />
            </a>
          </div>

          <dl className="mt-6 grid gap-6 md:grid-cols-3">
            <div>
              <dt className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.28em] text-ink-200">
                <MapPin className="size-3.5" aria-hidden="true" /> Sede legale
              </dt>
              <dd className="mt-3 text-sm not-italic leading-6 text-white">
                Viale Tunisia 22
                <br />
                20124 Milano (MI)
                <br />
                Italia
              </dd>
            </div>
            <div>
              <dt className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.28em] text-ink-200">
                <FileText className="size-3.5" aria-hidden="true" /> Registrazione
              </dt>
              <dd className="mt-3 space-y-1 text-sm leading-6 text-white">
                <p>
                  <span className="text-ink-300">Reg.</span> 14284090967
                </p>
                <p>
                  <span className="text-ink-300">REA</span> MI-2771688
                </p>
                <p>
                  <span className="text-ink-300">VAT</span> 14284090967
                </p>
              </dd>
            </div>
            <div>
              <dt className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.28em] text-ink-200">
                <Building2 className="size-3.5" aria-hidden="true" /> Contatti
              </dt>
              <dd className="mt-3 space-y-1 text-sm leading-6 text-white">
                <p>
                  <a
                    href="mailto:info@swarpconsulting.com"
                    className="text-brand-200 underline-offset-4 transition hover:text-brand-100 hover:underline"
                  >
                    info@swarpconsulting.com
                  </a>
                </p>
                <p className="text-ink-200">Supporto B2B</p>
              </dd>
            </div>
          </dl>
        </div>

        <div className="mt-8 flex flex-col gap-4 border-t border-white/10 pt-8 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-[11px] uppercase tracking-[0.28em] text-ink-300">
            <p>© {new Date().getFullYear()} Swarp Foundation S.r.l.</p>
            <Link
              href="/privacy"
              className="transition hover:text-brand-200"
            >
              Privacy Policy
            </Link>
          </div>
          <p className="max-w-xl text-xs leading-6 text-ink-300 md:text-right">
            Formazione finanziata per le aziende italiane. Gestione dei fondi interprofessionali e
            della burocrazia.
          </p>
        </div>
      </div>
    </footer>
  );
}
