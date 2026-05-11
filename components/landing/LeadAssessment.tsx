"use client";

import { FormEvent, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Loader2,
  RotateCcw,
  Sparkles,
} from "lucide-react";
import { validateLeadPayload, type LeadPayload } from "@/lib/validation";
import { cn } from "@/lib/cn";

const initialForm: LeadPayload = {
  fullName: "",
  email: "",
  phone: "",
  company: "",
  location: "",
  employees: "",
  sector: "",
  hasConsultant: "",
  interests: [],
  message: "",
  consent: false,
};

const interests = [
  "Sicurezza obbligatoria",
  "Marketing e vendite",
  "AI e digitale",
  "Lingue",
  "Gestione aziendale",
  "Formazione di settore",
  "Altro",
];

const steps = [
  { id: 1, label: "Azienda", caption: "Dati di base" },
  { id: 2, label: "Fabbisogni", caption: "Aree formative" },
  { id: 3, label: "Contatti", caption: "Ricontatto" },
] as const;

type Status = "idle" | "loading" | "success" | "error";

const slideTransition = { duration: 0.4, ease: [0.16, 1, 0.3, 1] as const };

export function LeadAssessment() {
  const [form, setForm] = useState<LeadPayload>(initialForm);
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Partial<Record<keyof LeadPayload, string>>>({});
  const [serverMessage, setServerMessage] = useState("");
  const [step, setStep] = useState(1);
  const [direction, setDirection] = useState<1 | -1>(1);

  const completion = useMemo(() => {
    const checks = [
      Boolean(form.company.trim()),
      Boolean(form.location.trim()),
      Boolean(form.sector.trim()),
      Boolean(form.employees.trim()),
      form.hasConsultant === "yes" || form.hasConsultant === "no",
      form.interests.length > 0,
      Boolean(form.fullName.trim()),
      Boolean(form.email.trim()),
      Boolean(form.phone.trim()),
      form.consent,
    ];
    return Math.round((checks.filter(Boolean).length / checks.length) * 100);
  }, [form]);

  function updateField<K extends keyof LeadPayload>(key: K, value: LeadPayload[K]) {
    setForm((current) => ({ ...current, [key]: value }));
    setErrors((current) => ({ ...current, [key]: undefined }));
    if (status === "error") {
      setStatus("idle");
      setServerMessage("");
    }
  }

  function toggleInterest(value: string) {
    updateField(
      "interests",
      form.interests.includes(value)
        ? form.interests.filter((item) => item !== value)
        : [...form.interests, value],
    );
  }

  function validateStep(target: number): boolean {
    const stepErrors: Partial<Record<keyof LeadPayload, string>> = {};
    if (target === 1) {
      if (!form.company.trim()) stepErrors.company = "Campo obbligatorio";
      if (!form.location.trim()) stepErrors.location = "Campo obbligatorio";
      if (!form.sector.trim()) stepErrors.sector = "Campo obbligatorio";
      if (!form.employees.trim()) stepErrors.employees = "Campo obbligatorio";
      if (form.hasConsultant !== "yes" && form.hasConsultant !== "no")
        stepErrors.hasConsultant = "Seleziona una risposta";
    }
    if (target === 2) {
      if (form.interests.length === 0) stepErrors.interests = "Seleziona almeno un'area";
    }
    setErrors((current) => ({ ...current, ...stepErrors }));
    return Object.keys(stepErrors).length === 0;
  }

  function goNext() {
    if (!validateStep(step)) return;
    setDirection(1);
    setStep((current) => Math.min(current + 1, 3));
  }

  function goBack() {
    setDirection(-1);
    setStep((current) => Math.max(current - 1, 1));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "loading" || status === "success") return;

    const validation = validateLeadPayload(form);
    if (!validation.valid) {
      setErrors(validation.errors);
      setStatus("error");
      setServerMessage("Completa i campi obbligatori e correggi le informazioni evidenziate.");
      const errorKeys = Object.keys(validation.errors) as (keyof LeadPayload)[];
      if (errorKeys.some((k) => ["company", "location", "sector", "employees", "hasConsultant"].includes(k))) {
        setDirection(-1);
        setStep(1);
      } else if (errorKeys.includes("interests")) {
        setDirection(-1);
        setStep(2);
      }
      return;
    }

    setStatus("loading");
    setServerMessage("");

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(validation.data),
      });
      const payload = await response.json();

      if (!response.ok || !payload.ok) {
        setErrors(payload.errors ?? {});
        setStatus("error");
        setServerMessage(payload.message ?? "Invio non riuscito. Riprova tra poco.");
        return;
      }

      setStatus("success");
    } catch {
      setStatus("error");
      setServerMessage("Invio non riuscito. Riprova tra poco.");
    }
  }

  if (status === "success") {
    return (
      <section id="contatti" className="relative border-t border-white/10 bg-ink-950 py-24 md:py-32">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(50rem_30rem_at_50%_30%,rgba(34,211,238,0.16),transparent)]" />
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="relative mx-auto max-w-4xl px-6 text-center"
        >
          <div className="mx-auto grid size-20 place-items-center rounded-full bg-brand-300 text-ink-950">
            <CheckCircle2 className="size-10" aria-hidden="true" />
          </div>
          <h2 className="mt-8 text-balance text-4xl font-semibold tracking-tight text-white md:text-5xl">
            Richiesta <span className="font-display italic font-normal text-brand-300">ricevuta.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-pretty text-lg leading-8 text-ink-100">
            Verifichiamo il tuo fondo interprofessionale e ti ricontattiamo con una stima delle ore
            finanziabili e dei corsi attivabili per la tua azienda.
          </p>
          <button
            type="button"
            className="mt-8 inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-3 font-semibold text-white transition hover:border-brand-400/50"
            onClick={() => {
              setForm(initialForm);
              setStatus("idle");
              setErrors({});
              setStep(1);
            }}
          >
            Nuova richiesta <RotateCcw size={18} aria-hidden="true" />
          </button>
        </motion.div>
      </section>
    );
  }

  return (
    <section
      id="contatti"
      className="relative overflow-hidden border-t border-white/10 bg-ink-950 py-24 md:py-32"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(34,211,238,0.18),transparent_26rem),radial-gradient(circle_at_82%_12%,rgba(16,185,129,0.14),transparent_28rem)]" />

      <div className="relative mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[0.75fr_1.25fr]">
        <aside className="rounded-[2rem] border border-white/10 bg-white/[0.05] p-7 backdrop-blur-xl lg:sticky lg:top-28 lg:h-fit">
          <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-brand-200">
            Verifica fondo
          </p>
          <h2 className="mt-4 text-balance text-4xl font-semibold leading-tight tracking-tight text-white">
            Quanto ti spetta?{" "}
            <span className="font-display italic font-normal text-brand-300">Scoprilo in pochi minuti.</span>
          </h2>
          <p className="mt-5 text-pretty leading-8 text-ink-100">
            Bastano pochi dati: dimensione azienda, settore e aree formative di interesse. Ti
            ricontattiamo entro pochi giorni con una stima concreta delle ore finanziabili.
          </p>

          <div className="mt-8">
            <div className="mb-2 flex items-center justify-between text-sm text-ink-100">
              <span>Completamento</span>
              <span className="font-display text-base text-brand-200">{completion}%</span>
            </div>
            <div className="h-1.5 overflow-hidden rounded-full bg-white/10">
              <motion.div
                animate={{ width: `${completion}%` }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="h-full rounded-full bg-gradient-to-r from-brand-400 to-brand-300"
              />
            </div>
          </div>

          <ul className="mt-8 grid gap-2">
            {steps.map((s) => {
              const isActive = step === s.id;
              const isDone = step > s.id;
              return (
                <li
                  key={s.id}
                  className={cn(
                    "flex items-center gap-4 rounded-2xl border p-4 transition",
                    isActive
                      ? "border-brand-400/50 bg-brand-400/10"
                      : isDone
                        ? "border-white/10 bg-white/[0.04]"
                        : "border-white/10 bg-white/[0.02]",
                  )}
                >
                  <span
                    className={cn(
                      "grid size-9 shrink-0 place-items-center rounded-full text-xs font-semibold transition",
                      isActive
                        ? "bg-brand-300 text-ink-950"
                        : isDone
                          ? "bg-brand-400/20 text-brand-200"
                          : "bg-white/10 text-ink-100",
                    )}
                  >
                    {isDone ? <CheckCircle2 className="size-4" aria-hidden="true" /> : s.id}
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-white">{s.label}</p>
                    <p className="text-xs text-ink-200">{s.caption}</p>
                  </div>
                </li>
              );
            })}
          </ul>

          <div className="mt-8 flex items-center gap-3 rounded-2xl border border-gold-200/20 bg-gold-200/5 p-4 text-xs leading-6 text-gold-200">
            <Sparkles className="size-4 shrink-0" aria-hidden="true" />
            Possono accedere tutte le aziende private con almeno un dipendente.
          </div>
        </aside>

        <form
          onSubmit={handleSubmit}
          noValidate
          className="overflow-hidden rounded-[2rem] border border-white/10 bg-white p-5 text-slate-950 shadow-2xl shadow-black/30 md:p-8"
        >
          <div className="mb-6 flex items-center justify-between">
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-brand-700">
              Step {step} di 3
            </p>
            <div className="flex gap-1.5">
              {steps.map((s) => (
                <span
                  key={s.id}
                  className={cn(
                    "h-1 rounded-full transition-all",
                    s.id <= step ? "w-10 bg-brand-500" : "w-4 bg-slate-200",
                  )}
                />
              ))}
            </div>
          </div>

          <div className="relative">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={step}
                custom={direction}
                initial={{ opacity: 0, x: direction * 32 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction * -32 }}
                transition={slideTransition}
              >
                {step === 1 ? (
                  <StepAzienda
                    form={form}
                    errors={errors}
                    update={updateField}
                  />
                ) : null}
                {step === 2 ? (
                  <StepFabbisogni
                    form={form}
                    errors={errors}
                    update={updateField}
                    toggleInterest={toggleInterest}
                  />
                ) : null}
                {step === 3 ? (
                  <StepContatti
                    form={form}
                    errors={errors}
                    update={updateField}
                  />
                ) : null}
              </motion.div>
            </AnimatePresence>
          </div>

          {status === "error" ? (
            <p className="mt-6 rounded-2xl border border-amber-300 bg-amber-50 p-4 text-sm font-medium text-amber-950">
              {serverMessage}
            </p>
          ) : null}

          <div className="mt-8 flex flex-col gap-4 border-t border-slate-200 pt-6 sm:flex-row sm:items-center sm:justify-between">
            {step > 1 ? (
              <button
                type="button"
                onClick={goBack}
                className="inline-flex min-h-12 items-center gap-2 rounded-full border border-slate-200 px-5 text-sm font-semibold text-slate-700 transition hover:border-slate-300 hover:bg-slate-50"
              >
                <ArrowLeft size={16} aria-hidden="true" /> Indietro
              </button>
            ) : (
              <p className="text-sm leading-6 text-slate-500">
                Dati usati solo per ricontattarti sulla verifica del tuo fondo.
              </p>
            )}

            {step < 3 ? (
              <button
                type="button"
                onClick={goNext}
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-ink-950 px-6 font-semibold text-white transition hover:bg-brand-700"
              >
                Continua <ArrowRight size={18} aria-hidden="true" />
              </button>
            ) : (
              <button
                type="submit"
                disabled={status === "loading"}
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-ink-950 px-6 font-semibold text-white transition hover:bg-brand-700 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {status === "loading" ? (
                  <>
                    <Loader2 className="size-5 animate-spin" aria-hidden="true" />
                    Invio in corso
                  </>
                ) : (
                  <>
                    Invia richiesta <ArrowRight size={18} aria-hidden="true" />
                  </>
                )}
              </button>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}

type StepProps = {
  form: LeadPayload;
  errors: Partial<Record<keyof LeadPayload, string>>;
  update: <K extends keyof LeadPayload>(key: K, value: LeadPayload[K]) => void;
};

function StepAzienda({ form, errors, update }: StepProps) {
  return (
    <div className="grid gap-5 md:grid-cols-2">
      <Field label="Azienda" error={errors.company}>
        <input
          className="input-modern"
          value={form.company}
          onChange={(event) => update("company", event.target.value)}
          autoComplete="organization"
          placeholder="Ragione sociale"
        />
      </Field>
      <Field label="Citta / provincia" error={errors.location}>
        <input
          className="input-modern"
          value={form.location}
          onChange={(event) => update("location", event.target.value)}
          autoComplete="address-level2"
          placeholder="Milano"
        />
      </Field>
      <Field label="Settore" error={errors.sector}>
        <input
          className="input-modern"
          value={form.sector}
          onChange={(event) => update("sector", event.target.value)}
          placeholder="Servizi, retail, produzione..."
        />
      </Field>
      <Field label="Dipendenti" error={errors.employees}>
        <select
          className="input-modern"
          value={form.employees}
          onChange={(event) => update("employees", event.target.value)}
        >
          <option value="">Seleziona fascia</option>
          <option value="1-5">1 - 5 dipendenti</option>
          <option value="6-15">6 - 15 dipendenti</option>
          <option value="16-50">16 - 50 dipendenti</option>
          <option value="50+">Oltre 50 dipendenti</option>
        </select>
      </Field>
      <Field label="Consulente del lavoro" error={errors.hasConsultant} className="md:col-span-2">
        <select
          className="input-modern"
          value={form.hasConsultant}
          onChange={(event) =>
            update("hasConsultant", event.target.value as LeadPayload["hasConsultant"])
          }
        >
          <option value="">Presente in azienda?</option>
          <option value="yes">Si, abbiamo un consulente</option>
          <option value="no">No / Non so</option>
        </select>
      </Field>
    </div>
  );
}

function StepFabbisogni({
  form,
  errors,
  update,
  toggleInterest,
}: StepProps & { toggleInterest: (value: string) => void }) {
  return (
    <div>
      <fieldset>
        <legend className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
          Aree formative
        </legend>
        <p className="mt-2 text-sm leading-6 text-slate-600">
          Obbligatoria, professionalizzante o di settore: seleziona almeno un&apos;area di interesse.
        </p>
        <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {interests.map((interest) => (
            <label
              key={interest}
              className={cn(
                "flex cursor-pointer items-center justify-between gap-3 rounded-2xl border p-4 text-sm font-medium transition",
                form.interests.includes(interest)
                  ? "border-brand-500 bg-brand-50 text-slate-950"
                  : "border-slate-200 bg-slate-50 text-slate-700 hover:border-brand-400",
              )}
            >
              {interest}
              <input
                type="checkbox"
                checked={form.interests.includes(interest)}
                onChange={() => toggleInterest(interest)}
                className="size-4 accent-brand-500"
              />
            </label>
          ))}
        </div>
        {errors.interests ? <ErrorText>{errors.interests}</ErrorText> : null}
      </fieldset>

      <Field label="Messaggio (opzionale)" error={errors.message} className="mt-8">
        <textarea
          className="input-modern min-h-32 resize-y"
          value={form.message}
          onChange={(event) => update("message", event.target.value)}
          placeholder="Raccontaci le esigenze formative principali"
        />
      </Field>
    </div>
  );
}

function StepContatti({ form, errors, update }: StepProps) {
  return (
    <div>
      <div className="grid gap-5 md:grid-cols-2">
        <Field label="Nome e cognome" error={errors.fullName}>
          <input
            className="input-modern"
            value={form.fullName}
            onChange={(event) => update("fullName", event.target.value)}
            autoComplete="name"
            placeholder="Mario Rossi"
          />
        </Field>
        <Field label="Email aziendale" error={errors.email}>
          <input
            className="input-modern"
            type="email"
            value={form.email}
            onChange={(event) => update("email", event.target.value)}
            autoComplete="email"
            placeholder="mario@azienda.it"
          />
        </Field>
        <Field label="Telefono" error={errors.phone} className="md:col-span-2">
          <input
            className="input-modern"
            value={form.phone}
            onChange={(event) => update("phone", event.target.value)}
            autoComplete="tel"
            placeholder="+39"
          />
        </Field>
      </div>

      <label className="mt-6 flex cursor-pointer items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm leading-6 text-slate-700">
        <input
          type="checkbox"
          checked={form.consent}
          onChange={(event) => update("consent", event.target.checked)}
          className="mt-1 size-4 shrink-0 accent-brand-500"
        />
        Accetto di essere ricontattato da Swarp per la verifica del fondo interprofessionale e per
        ricevere informazioni sull&apos;attivazione della formazione finanziata.
      </label>
      {errors.consent ? <ErrorText>{errors.consent}</ErrorText> : null}
    </div>
  );
}

function Field({
  label,
  error,
  className = "",
  children,
}: {
  label: string;
  error?: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <label className={`block ${className}`}>
      <span className="mb-2 block text-sm font-semibold text-slate-700">{label}</span>
      {children}
      {error ? <ErrorText>{error}</ErrorText> : null}
    </label>
  );
}

function ErrorText({ children }: { children: React.ReactNode }) {
  return <span className="mt-2 block text-sm font-medium text-amber-700">{children}</span>;
}
