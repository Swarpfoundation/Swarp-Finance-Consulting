import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const links = [
  { href: "#come-funziona", label: "Come funziona" },
  { href: "#corsi", label: "Corsi" },
  { href: "#aziende", label: "Per aziende" },
  { href: "#faq", label: "FAQ" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#050B14]/75 backdrop-blur-xl">
      <nav
        aria-label="Navigazione principale"
        className="section-shell flex min-h-16 items-center justify-between gap-4"
      >
        <Link href="#" className="flex items-center gap-3 font-semibold tracking-wide">
          <Image
            src="/swarp-finance-consulting-logo.png"
            alt="Swarp Finance Consulting"
            width={40}
            height={40}
            className="size-10 rounded-md border border-[#00D2D3]/35 object-cover"
            priority
          />
          <span>Swarp Finance Consulting</span>
        </Link>
        <div className="hidden items-center gap-8 text-sm text-slate-300 md:flex">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="transition hover:text-white">
              {link.label}
            </Link>
          ))}
        </div>
        <Link
          href="#contatti"
          className="inline-flex items-center gap-2 rounded-md bg-[#00D2D3] px-4 py-2 text-sm font-semibold text-[#031018] shadow-[0_0_30px_rgba(0,210,211,0.25)] transition hover:bg-[#3ff4f4] focus:outline-none focus:ring-2 focus:ring-[#00D2D3] focus:ring-offset-2 focus:ring-offset-[#050B14]"
        >
          Richiedi valutazione
          <ArrowRight aria-hidden="true" size={16} />
        </Link>
      </nav>
    </header>
  );
}
