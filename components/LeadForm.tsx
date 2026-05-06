"use client";

import { FormEvent, useMemo, useState } from "react";
import { Send } from "lucide-react";
import { validateLeadPayload, type LeadPayload } from "@/lib/validation";
import { SectionHeading } from "./SectionHeading";

const interests = [
  "AI",
  "Digitale",
  "Marketing e vendite",
  "Sicurezza",
  "Lingue",
  "Formazione tecnica",
  "Altro",
];

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

type Status = "idle" | "loading" | "success" | "error";

export function LeadForm() {
  const [form, setForm] = useState<LeadPayload>(initialForm);
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Partial<Record<keyof LeadPayload, string>>>({});

  const canSubmit = useMemo(() => status !== "loading" && status !== "success", [status]);

  function updateField<K extends keyof LeadPayload>(key: K, value: LeadPayload[K]) {
    setForm((current) => ({ ...current, [key]: value }));
    setErrors((current) => ({ ...current, [key]: undefined }));
    if (status === "error") setStatus("idle");
  }

  function toggleInterest(value: string) {
    const next = form.interests.includes(value)
      ? form.interests.filter((item) => item !== value)
      : [...form.interests, value];
    updateField("interests", next);
  }

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!canSubmit) return;

    const validation = validateLeadPayload(form);
    if (!validation.valid) {
      setErrors(validation.errors);
      setStatus("error");
      return;
    }

    setStatus("loading");
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
        return;
      }
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  const inputClass =
    "mt-2 w-full rounded-md border border-white/10 bg-[#050B14] px-4 py-3 text-white outline-none transition placeholder:text-slate-600 focus:border-[#00D2D3] focus:ring-2 focus:ring-[#00D2D3]/25";

  return (
    <section id="contatti" className="py-20">
      <div className="section-shell">
        <SectionHeading title="Verifica se la tua azienda può attivare formazione finanziata" />
        <form
          onSubmit={onSubmit}
          noValidate
          className="mx-auto max-w-4xl rounded-lg border border-white/10 bg-white/[0.04] p-5 md:p-8"
        >
          <div className="grid gap-5 md:grid-cols-2">
            <Field label="Nome e cognome" error={errors.fullName}>
              <input
                className={inputClass}
                value={form.fullName}
                onChange={(event) => updateField("fullName", event.target.value)}
                autoComplete="name"
              />
            </Field>
            <Field label="Email" error={errors.email}>
              <input
                className={inputClass}
                type="email"
                value={form.email}
                onChange={(event) => updateField("email", event.target.value)}
                autoComplete="email"
              />
            </Field>
            <Field label="Telefono" error={errors.phone}>
              <input
                className={inputClass}
                value={form.phone}
                onChange={(event) => updateField("phone", event.target.value)}
                autoComplete="tel"
              />
            </Field>
            <Field label="Nome azienda" error={errors.company}>
              <input
                className={inputClass}
                value={form.company}
                onChange={(event) => updateField("company", event.target.value)}
                autoComplete="organization"
              />
            </Field>
            <Field label="Città / provincia" error={errors.location}>
              <input
                className={inputClass}
                value={form.location}
                onChange={(event) => updateField("location", event.target.value)}
                autoComplete="address-level2"
              />
            </Field>
            <Field label="Numero dipendenti" error={errors.employees}>
              <input
                className={inputClass}
                value={form.employees}
                onChange={(event) => updateField("employees", event.target.value)}
                inputMode="numeric"
              />
            </Field>
            <Field label="Settore" error={errors.sector}>
              <input
                className={inputClass}
                value={form.sector}
                onChange={(event) => updateField("sector", event.target.value)}
              />
            </Field>
            <Field label="Hai già un consulente del lavoro?" error={errors.hasConsultant}>
              <select
                className={inputClass}
                value={form.hasConsultant}
                onChange={(event) =>
                  updateField("hasConsultant", event.target.value as LeadPayload["hasConsultant"])
                }
              >
                <option value="">Seleziona</option>
                <option value="yes">Sì</option>
                <option value="no">No</option>
              </select>
            </Field>
          </div>

          <fieldset className="mt-6">
            <legend className="font-medium">Aree formative di interesse</legend>
            <div className="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {interests.map((interest) => (
                <label
                  key={interest}
                  className="flex cursor-pointer items-center gap-3 rounded-md border border-white/10 bg-[#050B14] p-3 text-sm"
                >
                  <input
                    type="checkbox"
                    checked={form.interests.includes(interest)}
                    onChange={() => toggleInterest(interest)}
                    className="size-4 accent-[#00D2D3]"
                  />
                  {interest}
                </label>
              ))}
            </div>
            {errors.interests ? <ErrorText>{errors.interests}</ErrorText> : null}
          </fieldset>

          <Field label="Messaggio" error={errors.message} className="mt-6">
            <textarea
              className={`${inputClass} min-h-32 resize-y`}
              value={form.message}
              onChange={(event) => updateField("message", event.target.value)}
            />
          </Field>

          <label className="mt-6 flex items-start gap-3 text-sm leading-6 text-slate-300">
            <input
              type="checkbox"
              checked={form.consent}
              onChange={(event) => updateField("consent", event.target.checked)}
              className="mt-1 size-4 shrink-0 accent-[#00D2D3]"
            />
            Accetto di essere ricontattato per una valutazione preliminare. La richiesta non
            garantisce accesso al finanziamento.
          </label>
          {errors.consent ? <ErrorText>{errors.consent}</ErrorText> : null}

          <div className="mt-7 flex flex-col gap-4 sm:flex-row sm:items-center">
            <button
              type="submit"
              disabled={!canSubmit}
              className="inline-flex items-center justify-center gap-2 rounded-md bg-[#00D2D3] px-5 py-3 font-semibold text-[#031018] transition hover:bg-[#3ff4f4] disabled:cursor-not-allowed disabled:opacity-60"
            >
              {status === "loading" ? "Invio in corso..." : "Richiedi valutazione"}
              <Send aria-hidden="true" size={18} />
            </button>
            {status === "success" ? (
              <p className="text-sm font-medium text-[#8bfafa]">
                Richiesta ricevuta. Ti ricontatteremo per una valutazione preliminare.
              </p>
            ) : null}
            {status === "error" ? (
              <p className="text-sm font-medium text-amber-200">
                Controlla i campi o riprova tra poco.
              </p>
            ) : null}
          </div>
        </form>
      </div>
    </section>
  );
}

function Field({
  label,
  error,
  className,
  children,
}: {
  label: string;
  error?: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <label className={`block ${className ?? ""}`}>
      <span className="font-medium">{label}</span>
      {children}
      {error ? <ErrorText>{error}</ErrorText> : null}
    </label>
  );
}

function ErrorText({ children }: { children: React.ReactNode }) {
  return <span className="mt-2 block text-sm text-amber-200">{children}</span>;
}
