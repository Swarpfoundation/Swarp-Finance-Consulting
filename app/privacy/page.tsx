import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Informativa privacy di Swarp Foundation S.r.l. — Swarp Consulting: dati raccolti, finalità, diritti dell'interessato ai sensi del Regolamento UE 2016/679 (GDPR).",
};

const lastUpdated = "13 maggio 2026";

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-ink-950 text-white selection:bg-brand-400/30 selection:text-white">
      <Header />
      <main className="pt-36 pb-24 md:pt-40">
        <article className="mx-auto max-w-3xl px-6 text-ink-100">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-brand-200 transition hover:text-brand-100"
          >
            <ArrowLeft className="size-4" aria-hidden="true" /> Torna alla home
          </Link>

          <header className="mt-8 border-b border-white/10 pb-8">
            <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-brand-300">
              Informativa privacy
            </p>
            <h1 className="mt-4 text-balance text-4xl font-semibold tracking-tight text-white md:text-5xl">
              Privacy <span className="font-display italic font-normal text-brand-300">Policy.</span>
            </h1>
            <p className="mt-5 text-pretty text-base leading-7 text-ink-100">
              Questa informativa spiega come Swarp Foundation S.r.l. — il soggetto che gestisce il
              sito www.swarpconsulting.com e il servizio Swarp Consulting — tratta i dati personali
              raccolti tramite il sito, ai sensi del Regolamento UE 2016/679 («GDPR») e del D.Lgs.
              196/2003, come modificato dal D.Lgs. 101/2018.
            </p>
            <p className="mt-3 text-sm leading-6 text-ink-200">
              Versione 1.0 — ultimo aggiornamento: {lastUpdated}.
            </p>
          </header>

          <Section id="titolare" number="1" title="Titolare del trattamento">
            <p>Titolare del trattamento dei dati è:</p>
            <div className="mt-5 rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-sm leading-7">
              <p className="font-semibold text-white">Swarp Foundation S.r.l.</p>
              <p>Sede legale: Viale Tunisia 22, 20124 Milano (MI), Italia</p>
              <p>C.F. / P. IVA: 14284090967 — REA MI-2771688</p>
              <p>
                Email:{" "}
                <a
                  className="text-brand-200 underline-offset-4 hover:text-brand-100 hover:underline"
                  href="mailto:info@swarppay.com"
                >
                  info@swarppay.com
                </a>
              </p>
            </div>
            <p className="mt-5">
              Per la dimensione e la natura del trattamento svolto, il Titolare non rientra nelle
              ipotesi che impongono la nomina di un Responsabile della Protezione dei Dati ai sensi
              dell&apos;art. 37 GDPR. Per qualunque richiesta in materia di privacy puoi rivolgerti
              direttamente all&apos;indirizzo email indicato.
            </p>
          </Section>

          <Section id="dati" number="2" title="Dati personali raccolti">
            <p>
              Raccogliamo soltanto i dati che ti chiediamo di inserire e quelli strettamente
              necessari al funzionamento del sito.
            </p>

            <h3 className="mt-7 text-base font-semibold text-white">
              Tramite il modulo di contatto
            </h3>
            <p className="mt-3">
              Quando ci scrivi compilando il modulo presente nella pagina di contatto raccogliamo:
            </p>
            <ul className="mt-3 list-disc space-y-1.5 pl-6">
              <li>nome e cognome;</li>
              <li>indirizzo email;</li>
              <li>numero di telefono (campo facoltativo);</li>
              <li>
                categoria di interlocutore — azienda, consulente del lavoro, commercialista o altro
                (campo facoltativo);
              </li>
              <li>contenuto del messaggio che ci invii;</li>
              <li>conferma del consenso al trattamento.</li>
            </ul>

            <h3 className="mt-7 text-base font-semibold text-white">Durante la navigazione</h3>
            <p className="mt-3">
              Il sito è ospitato sull&apos;infrastruttura di Vercel Inc. che, per finalità di
              erogazione del servizio e sicurezza, tratta dati tecnici minimi (indirizzo IP, tipo
              di dispositivo e browser, pagine richieste, momento della visita). Questi dati non
              sono utilizzati da Swarp per attività di profilazione.
            </p>
            <p className="mt-3">
              Al momento non utilizziamo strumenti di analytics di terze parti né cookie di
              profilazione o di marketing. Eventuali introduzioni future verranno comunicate
              aggiornando questa informativa e — dove richiesto — tramite banner di consenso.
            </p>
          </Section>

          <Section id="finalita" number="3" title="Finalità e base giuridica del trattamento">
            <p>I dati che raccogliamo sono trattati per le finalità seguenti.</p>

            <PurposeRow
              purpose="Rispondere alla tua richiesta di contatto, fornirti le informazioni richieste e dare eventualmente seguito a una proposta commerciale."
              legalBasis="Misure precontrattuali su tua richiesta — art. 6.1.b GDPR."
            />
            <PurposeRow
              purpose="Inviarti comunicazioni di follow-up direttamente collegate alla richiesta che ci hai inviato (chiarimenti, materiali informativi, appuntamenti)."
              legalBasis="Legittimo interesse del Titolare a gestire correttamente la relazione iniziata — art. 6.1.f GDPR."
            />
            <PurposeRow
              purpose="Adempiere a obblighi previsti dalla normativa fiscale, contabile e dalle norme in materia di tutela in sede giudiziale."
              legalBasis="Obbligo di legge — art. 6.1.c GDPR; legittimo interesse — art. 6.1.f GDPR."
            />
            <PurposeRow
              purpose="Garantire il corretto funzionamento, la sicurezza e la disponibilità del sito."
              legalBasis="Legittimo interesse del Titolare alla sicurezza dei propri sistemi — art. 6.1.f GDPR."
            />

            <p className="mt-7">
              Non effettuiamo trattamenti automatizzati che producano effetti giuridici sull&apos;interessato
              e non svolgiamo attività di profilazione. Non vendiamo, né cediamo a terzi i tuoi dati
              per finalità commerciali. Non riceverai newsletter o comunicazioni di marketing diverse
              da quelle strettamente collegate alla richiesta che ci hai inviato.
            </p>
          </Section>

          <Section id="conferimento" number="4" title="Conferimento dei dati">
            <p>
              Il conferimento dei dati contrassegnati come obbligatori nel modulo è necessario per
              poterti rispondere: senza tali dati non possiamo prendere in carico la richiesta. Gli
              altri dati (telefono e categoria di interlocutore) sono facoltativi e ci servono per
              contattarti nel modo più rapido e per personalizzare la risposta.
            </p>
          </Section>

          <Section id="conservazione" number="5" title="Periodo di conservazione">
            <ul className="list-disc space-y-3 pl-6">
              <li>
                <span className="text-white">Dati raccolti tramite il modulo di contatto:</span>{" "}
                conservati per il tempo strettamente necessario a riscontrare la richiesta e, di
                norma, fino a 24 mesi dall&apos;ultimo contatto utile, salvo che tu chieda prima la
                cancellazione.
              </li>
              <li>
                <span className="text-white">Rapporto contrattuale:</span> se a seguito del contatto
                si avvia un rapporto contrattuale, i dati seguono la durata del rapporto e i
                successivi termini di conservazione previsti dalla normativa civilistica e fiscale,
                tipicamente dieci anni.
              </li>
              <li>
                <span className="text-white">Dati tecnici di hosting:</span> seguono i tempi di
                ritenzione del fornitore (Vercel Inc.), in genere non superiori a trenta giorni per
                i log applicativi.
              </li>
            </ul>
            <p className="mt-5">
              Al termine del periodo di conservazione i dati vengono cancellati o resi anonimi in
              modo irreversibile, fatti salvi gli obblighi di legge che ne impongano la
              conservazione.
            </p>
          </Section>

          <Section id="destinatari" number="6" title="Destinatari dei dati">
            <p>
              I dati sono trattati internamente da personale autorizzato di Swarp Foundation S.r.l.
              Possono inoltre essere comunicati a:
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-6">
              <li>
                <span className="text-white">Fornitori di infrastruttura tecnologica</span> — in
                particolare Vercel Inc., fornitore del servizio di hosting del sito, che agisce in
                qualità di responsabile del trattamento ai sensi dell&apos;art. 28 GDPR sulla base
                di apposito accordo (Data Processing Agreement).
              </li>
              <li>
                <span className="text-white">Professionisti e consulenti del Titolare</span>{" "}
                (commercialista, consulente del lavoro, studi legali) qualora il trattamento sia
                necessario per finalità amministrative, contabili, fiscali o di difesa in giudizio.
              </li>
              <li>
                <span className="text-white">Autorità competenti</span> ove la comunicazione sia
                imposta dalla legge o richiesta nell&apos;esercizio dei poteri di vigilanza.
              </li>
            </ul>
            <p className="mt-5">
              I dati non sono diffusi e non sono ceduti a terzi per finalità di marketing o
              profilazione.
            </p>
          </Section>

          <Section id="extra-ue" number="7" title="Trasferimenti extra-UE">
            <p>
              I dati restano di norma all&apos;interno dello Spazio Economico Europeo. Per quanto
              riguarda l&apos;hosting, l&apos;infrastruttura di Vercel Inc. è basata negli Stati
              Uniti: il trasferimento avviene sulla base delle Clausole Contrattuali Tipo approvate
              dalla Commissione Europea con Decisione di esecuzione UE 2021/914, integrate dalle
              ulteriori misure di sicurezza adottate dal fornitore, in coerenza con quanto previsto
              dagli artt. 44–49 GDPR.
            </p>
          </Section>

          <Section id="cookie" number="8" title="Cookie">
            <p>
              Il sito utilizza esclusivamente cookie tecnici necessari al corretto funzionamento e
              alla sicurezza delle pagine. Per questi cookie, in linea con le Linee guida del
              Garante per la Protezione dei Dati Personali del 10 giugno 2021, non è richiesto il
              consenso preventivo.
            </p>
            <p className="mt-3">
              Non sono attualmente installati cookie di profilazione, cookie analitici di terze
              parti né strumenti di marketing automation. Qualora in futuro venissero introdotti
              strumenti di questo tipo, l&apos;informativa sarà aggiornata e verrà mostrato un
              banner per la raccolta del consenso ai sensi dell&apos;art. 7 GDPR.
            </p>
          </Section>

          <Section id="diritti" number="9" title="Diritti dell'interessato">
            <p>
              In qualunque momento, e a titolo gratuito, puoi esercitare i diritti previsti dagli
              articoli da 15 a 22 del GDPR:
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-6">
              <li>
                <span className="text-white">Accesso (art. 15)</span> — chiedere conferma che siano
                in corso trattamenti che ti riguardano e ottenerne una copia.
              </li>
              <li>
                <span className="text-white">Rettifica (art. 16)</span> — chiedere la correzione di
                dati inesatti o l&apos;integrazione di dati incompleti.
              </li>
              <li>
                <span className="text-white">Cancellazione (art. 17)</span> — chiedere la
                cancellazione dei dati nei casi previsti dalla norma, ivi compresa la revoca del
                consenso prestato.
              </li>
              <li>
                <span className="text-white">Limitazione (art. 18)</span> — chiedere la sospensione
                del trattamento in presenza dei presupposti di legge.
              </li>
              <li>
                <span className="text-white">Portabilità (art. 20)</span> — ricevere in un formato
                strutturato, di uso comune e leggibile da dispositivo automatico i dati che ci hai
                fornito, e chiedere la loro trasmissione a un altro titolare.
              </li>
              <li>
                <span className="text-white">Opposizione (art. 21)</span> — opporti al trattamento
                fondato sul legittimo interesse del Titolare.
              </li>
              <li>
                <span className="text-white">Revoca del consenso (art. 7.3)</span> — revocare in
                qualunque momento il consenso prestato, senza pregiudicare la liceità del
                trattamento svolto in precedenza.
              </li>
            </ul>
            <p className="mt-5">
              Per esercitare uno qualunque di questi diritti puoi scrivere a{" "}
              <a
                className="text-brand-200 underline-offset-4 hover:text-brand-100 hover:underline"
                href="mailto:info@swarppay.com"
              >
                info@swarppay.com
              </a>
              . Ti risponderemo nei termini previsti dall&apos;art. 12 GDPR, di norma entro un mese
              dalla ricezione della richiesta.
            </p>
            <p className="mt-5">
              Hai inoltre diritto di proporre reclamo al{" "}
              <span className="text-white">Garante per la Protezione dei Dati Personali</span>{" "}
              (Piazza Venezia 11, 00187 Roma — www.garanteprivacy.it) oppure all&apos;autorità di
              controllo dello Stato membro dell&apos;Unione in cui risiedi abitualmente o lavori.
            </p>
          </Section>

          <Section id="sicurezza" number="10" title="Sicurezza dei dati">
            <p>
              Adottiamo misure tecniche e organizzative adeguate a proteggere i dati che trattiamo:
              comunicazioni cifrate via HTTPS, accesso limitato al personale autorizzato,
              segregazione tra ambienti operativi e amministrativi, sistemi di logging e di
              monitoraggio.
            </p>
            <p className="mt-3">
              Nessun sistema può tuttavia garantire una sicurezza assoluta. In caso di violazione
              dei dati personali che comporti un rischio elevato per i diritti e le libertà degli
              interessati seguiamo le procedure di notifica al Garante e di comunicazione
              all&apos;interessato previste dagli artt. 33 e 34 GDPR.
            </p>
          </Section>

          <Section id="modifiche" number="11" title="Modifiche all'informativa">
            <p>
              Questa informativa può essere aggiornata per riflettere modifiche normative,
              evoluzioni del sito o l&apos;introduzione di nuovi servizi. La versione vigente è
              sempre pubblicata su questa pagina, con indicazione della data dell&apos;ultimo
              aggiornamento. Ti invitiamo a consultarla periodicamente.
            </p>
          </Section>

          <footer className="mt-14 rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-7 md:p-8">
            <p className="text-[10px] font-semibold uppercase tracking-[0.32em] text-brand-200">
              Contatti
            </p>
            <p className="mt-4 text-sm leading-7">
              Per qualunque domanda relativa a questa informativa o al trattamento dei tuoi dati
              personali puoi scrivere a{" "}
              <a
                className="font-semibold text-brand-200 underline-offset-4 hover:text-brand-100 hover:underline"
                href="mailto:info@swarppay.com"
              >
                info@swarppay.com
              </a>
              .
            </p>
          </footer>
        </article>
      </main>
      <Footer />
    </div>
  );
}

function Section({
  id,
  number,
  title,
  children,
}: {
  id: string;
  number: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="mt-12 scroll-mt-32">
      <h2 className="flex items-baseline gap-3 text-2xl font-semibold tracking-tight text-white md:text-3xl">
        <span className="font-display text-base font-normal text-brand-300">{number}.</span>
        <span>{title}</span>
      </h2>
      <div className="mt-5 space-y-3 text-pretty leading-7">{children}</div>
    </section>
  );
}

function PurposeRow({ purpose, legalBasis }: { purpose: string; legalBasis: string }) {
  return (
    <div className="mt-5 grid gap-1 rounded-2xl border border-white/10 bg-white/[0.02] p-5 md:grid-cols-[1.4fr_1fr] md:gap-6">
      <p className="text-sm leading-7 text-ink-100">{purpose}</p>
      <p className="text-sm leading-7 text-brand-100 md:border-l md:border-white/10 md:pl-6">
        {legalBasis}
      </p>
    </div>
  );
}
