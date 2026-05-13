"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Loader2, RotateCcw, Sparkles } from "lucide-react";
import { validateLeadPayload, type LeadPayload } from "@/lib/validation";
import { contactRoles, type ContactRole } from "./data";
import { cn } from "@/lib/cn";

const initialForm: LeadPayload = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  roles: [],
  message: "",
  consent: false,
};

type Status = "idle" | "loading" | "success" | "error";

export function LeadAssessment() {
  const [form, setForm] = useState<LeadPayload>(initialForm);
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Partial<Record<keyof LeadPayload, string>>>({});
  const [serverMessage, setServerMessage] = useState("");

  function updateField<K extends keyof LeadPayload>(key: K, value: LeadPayload[K]) {
    setForm((current) => ({ ...current, [key]: value }));
    setErrors((current) => ({ ...current, [key]: undefined }));
    if (status === "error") {
      setStatus("idle");
      setServerMessage("");
    }
  }

  function toggleRole(role: ContactRole) {
    updateField(
      "roles",
      form.roles.includes(role)
        ? form.roles.filter((item) => item !== role)
        : [...form.roles, role],
    );
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "loading" || status === "success") return;

    const validation = validateLeadPayload(form);
    if (!validation.valid) {
      setErrors(validation.errors);
      setStatus("error");
      setServerMessage("Completa i campi obbligatori e correggi le informazioni evidenziate.");
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
            Ti ricontatteremo entro pochi giorni per risponderti e per proporti i corsi più adatti
            alla tua azienda.
          </p>
          <button
            type="button"
            className="mt-8 inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-3 font-semibold text-white transition hover:border-brand-400/50"
            onClick={() => {
              setForm(initialForm);
              setStatus("idle");
              setErrors({});
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
            Contatti
          </p>
          <h2 className="mt-4 text-balance text-4xl font-semibold leading-tight tracking-tight text-white">
            Contattaci.
          </h2>
          <p className="mt-5 text-pretty leading-8 text-ink-100">
            Per ricevere maggiori informazioni compila il questionario qui sotto.
          </p>

          <div className="mt-8 flex items-center gap-3 rounded-2xl border border-gold-200/20 bg-gold-200/5 p-4 text-xs leading-6 text-gold-200">
            <Sparkles className="size-4 shrink-0" aria-hidden="true" />
            Ti rispondiamo entro pochi giorni con i corsi più adatti alla tua azienda.
          </div>
        </aside>

        <form
          onSubmit={handleSubmit}
          noValidate
          className="rounded-[2rem] border border-white/10 bg-white p-6 text-slate-950 shadow-2xl shadow-black/30 md:p-8"
        >
          <div className="grid gap-5 md:grid-cols-2">
            <Field label="Nome" required error={errors.firstName}>
              <input
                className="input-modern"
                value={form.firstName}
                onChange={(event) => updateField("firstName", event.target.value)}
                autoComplete="given-name"
              />
            </Field>
            <Field label="Cognome" required error={errors.lastName}>
              <input
                className="input-modern"
                value={form.lastName}
                onChange={(event) => updateField("lastName", event.target.value)}
                autoComplete="family-name"
              />
            </Field>
            <Field label="Email" required error={errors.email}>
              <input
                className="input-modern"
                type="email"
                value={form.email}
                onChange={(event) => updateField("email", event.target.value)}
                autoComplete="email"
              />
            </Field>
            <Field label="Telefono" error={errors.phone}>
              <input
                className="input-modern"
                value={form.phone}
                onChange={(event) => updateField("phone", event.target.value)}
                autoComplete="tel"
                placeholder="+39"
              />
            </Field>
          </div>

          <fieldset className="mt-7">
            <legend className="text-sm font-semibold text-slate-700">Chi sei</legend>
            <div className="mt-3 grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
              {contactRoles.map((role) => {
                const checked = form.roles.includes(role);
                return (
                  <label
                    key={role}
                    className={cn(
                      "flex min-h-14 cursor-pointer items-center gap-2 rounded-2xl border px-3 py-2.5 text-[11px] font-semibold transition",
                      checked
                        ? "border-brand-500 bg-brand-50 text-slate-950"
                        : "border-slate-200 bg-slate-50 text-slate-700 hover:border-brand-400",
                    )}
                  >
                    <input
                      type="checkbox"
                      checked={checked}
                      onChange={() => toggleRole(role)}
                      className="size-4 shrink-0 accent-brand-500"
                    />
                    <span className="min-w-0 flex-1 uppercase leading-tight tracking-normal">
                      {role}
                    </span>
                  </label>
                );
              })}
            </div>
            {errors.roles ? <ErrorText>{errors.roles}</ErrorText> : null}
          </fieldset>

          <Field label="Messaggio" required error={errors.message} className="mt-7">
            <textarea
              className="input-modern min-h-32 resize-y"
              value={form.message}
              onChange={(event) => updateField("message", event.target.value)}
              placeholder="Raccontaci come possiamo aiutarti"
            />
          </Field>

          <label className="mt-6 flex cursor-pointer items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm leading-6 text-slate-700">
            <input
              type="checkbox"
              checked={form.consent}
              onChange={(event) => updateField("consent", event.target.checked)}
              className="mt-1 size-4 shrink-0 accent-brand-500"
            />
            <span>
              Confermo di aver letto e accettato i termini e le condizioni della{" "}
              <Link
                href="/privacy"
                className="font-semibold text-slate-900 underline underline-offset-2 hover:text-brand-700"
              >
                Privacy Policy
              </Link>{" "}
              e di confermare l&apos;utilizzo da parte vostra dei miei dati personali come da
              informativa privacy.
            </span>
          </label>
          {errors.consent ? <ErrorText>{errors.consent}</ErrorText> : null}

          {status === "error" ? (
            <p className="mt-6 rounded-2xl border border-amber-300 bg-amber-50 p-4 text-sm font-medium text-amber-950">
              {serverMessage}
            </p>
          ) : null}

          <div className="mt-8 flex flex-col gap-4 border-t border-slate-200 pt-6 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm leading-6 text-slate-500">
              Dati usati solo per ricontattarti.
            </p>
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
                  Invia <ArrowRight size={18} aria-hidden="true" />
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

function Field({
  label,
  error,
  required = false,
  className = "",
  children,
}: {
  label: string;
  error?: string;
  required?: boolean;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <label className={`block ${className}`}>
      <span className="mb-2 block text-sm font-semibold text-slate-700">
        {label}
        {required ? <span className="ml-1 text-rose-500">*</span> : null}
      </span>
      {children}
      {error ? <ErrorText>{error}</ErrorText> : null}
    </label>
  );
}

function ErrorText({ children }: { children: React.ReactNode }) {
  return <span className="mt-2 block text-sm font-medium text-amber-700">{children}</span>;
}
