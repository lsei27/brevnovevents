"use client";

import { useActionState, useState, useEffect } from "react";
import { submitInquiry } from "@/app/actions";
import { Button } from "@/components/ui/Button";
import {
  eventTypeOptions,
  guestCountOptions,
  cateringOptions,
  sourceOptions,
} from "@/lib/validation";

interface FormState {
  success: boolean;
  errors?: Record<string, string[]>;
  message?: string;
}

const initialState: FormState = {
  success: false,
  errors: undefined,
  message: undefined,
};

export function InquiryForm() {
  const [state, action, isPending] = useActionState(submitInquiry, initialState);
  const [detailsOpen, setDetailsOpen] = useState(false);

  useEffect(() => {
    if (state.success && state.message) {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: "form_submit",
        form_type: "general_inquiry",
      });
    }
  }, [state.success, state.message]);

  if (state.success && state.message) {
    return (
      <div className="rounded-2xl border border-green-600/30 bg-green-900/20 p-8">
        <p className="text-lg font-bold text-green-400">
          ✓ Poptávka odeslána
        </p>
        <p className="mt-2 text-brand-white/80">{state.message}</p>
        <p className="mt-4 text-sm text-brand-white/60">
          Pro urgentní požadavky volejte{" "}
          <a href="tel:+420602346729" className="underline">
            +420 602 346 729
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form action={action} className="space-y-5">
      {/* Honeypot */}
      <div className="sr-only" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input
          type="text"
          id="website"
          name="website"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      {/* Visible required fields */}
      <FormField
        label="Jméno a příjmení"
        name="name"
        type="text"
        required
        errors={state.errors?.name}
      />
      <FormField
        label="Firma / organizace"
        name="company"
        type="text"
        required
        errors={state.errors?.company}
      />
      <FormField
        label="E-mail"
        name="email"
        type="email"
        required
        errors={state.errors?.email}
      />
      <FormField
        label="Telefon"
        name="phone"
        type="tel"
        required
        errors={state.errors?.phone}
      />
      <SelectField
        label="Typ akce"
        name="eventType"
        required
        options={eventTypeOptions}
        errors={state.errors?.eventType}
      />
      <SelectField
        label="Předpokládaný počet hostů"
        name="guestCount"
        required
        options={guestCountOptions}
        errors={state.errors?.guestCount}
      />
      <FormField
        label="Preferovaný termín"
        name="preferredDate"
        type="text"
        required
        placeholder="Konkrétní datum nebo období"
        errors={state.errors?.preferredDate}
      />

      {/* Optional fields under details */}
      <details
        open={detailsOpen}
        onToggle={(e) =>
          setDetailsOpen((e.target as HTMLDetailsElement).open)
        }
      >
        <summary className="cursor-pointer text-sm text-brand-white/60 hover:text-brand-white">
          Další informace (nepovinné)
        </summary>
        <div className="mt-4 space-y-5">
          <RadioGroup
            label="Potřebujete catering?"
            name="catering"
            options={cateringOptions}
          />
          <RadioGroup
            label="Jste event agentura?"
            name="isAgency"
            options={["Ano", "Ne"]}
          />
          <div>
            <label
              htmlFor="description"
              className="mb-1 block text-sm font-bold"
            >
              Krátký popis akce
            </label>
            <textarea
              id="description"
              name="description"
              rows={3}
              placeholder="Cíl akce, průběh dne, speciální požadavky…"
              className="w-full rounded-lg border border-brand-gray-dark/40 bg-brand-black-alt px-4 py-3 text-brand-white placeholder:text-brand-white/30 focus:border-brand-red focus:outline-none focus:ring-1 focus:ring-brand-red"
            />
          </div>
          <SelectField
            label="Jak jste se o nás dozvěděli?"
            name="source"
            options={sourceOptions}
          />
        </div>
      </details>

      {/* Error message */}
      {state.message && !state.success && (
        <p className="text-sm text-red-400">{state.message}</p>
      )}

      {/* Submit */}
      <Button type="submit" variant="primary" disabled={isPending} className="w-full">
        {isPending ? "Odesílám…" : "Odeslat nezávaznou poptávku"}
      </Button>
      <p className="text-center text-xs text-brand-white/40">
        Odpovíme do 24 hodin. Vaše data zpracováváme v souladu s GDPR.
      </p>
    </form>
  );
}

/* --- Helper sub-components --- */

function FormField({
  label,
  name,
  type,
  required,
  placeholder,
  errors,
}: {
  label: string;
  name: string;
  type: string;
  required?: boolean;
  placeholder?: string;
  errors?: string[];
}) {
  const id = `field-${name}`;
  const errorId = `${id}-error`;
  return (
    <div>
      <label htmlFor={id} className="mb-1 block text-sm font-bold">
        {label}
        {required && <span className="text-brand-red"> *</span>}
      </label>
      <input
        type={type}
        id={id}
        name={name}
        required={required}
        placeholder={placeholder}
        aria-describedby={errors ? errorId : undefined}
        className={`w-full rounded-lg border px-4 py-3 text-brand-white placeholder:text-brand-white/30 focus:outline-none focus:ring-1 ${
          errors
            ? "border-red-500 focus:border-red-500 focus:ring-red-500"
            : "border-brand-gray-dark/40 focus:border-brand-red focus:ring-brand-red"
        } bg-brand-black-alt`}
      />
      {errors && (
        <p id={errorId} className="mt-1 text-sm text-red-400">
          {errors[0]}
        </p>
      )}
    </div>
  );
}

function SelectField({
  label,
  name,
  required,
  options,
  errors,
}: {
  label: string;
  name: string;
  required?: boolean;
  options: string[];
  errors?: string[];
}) {
  const id = `field-${name}`;
  const errorId = `${id}-error`;
  return (
    <div>
      <label htmlFor={id} className="mb-1 block text-sm font-bold">
        {label}
        {required && <span className="text-brand-red"> *</span>}
      </label>
      <select
        id={id}
        name={name}
        required={required}
        defaultValue=""
        aria-describedby={errors ? errorId : undefined}
        className={`w-full rounded-lg border px-4 py-3 text-brand-white focus:outline-none focus:ring-1 ${
          errors
            ? "border-red-500 focus:border-red-500 focus:ring-red-500"
            : "border-brand-gray-dark/40 focus:border-brand-red focus:ring-brand-red"
        } bg-brand-black-alt`}
      >
        <option value="" disabled>
          Vyberte…
        </option>
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
      {errors && (
        <p id={errorId} className="mt-1 text-sm text-red-400">
          {errors[0]}
        </p>
      )}
    </div>
  );
}

function RadioGroup({
  label,
  name,
  options,
}: {
  label: string;
  name: string;
  options: string[];
}) {
  return (
    <fieldset>
      <legend className="mb-2 text-sm font-bold">{label}</legend>
      <div className="flex flex-wrap gap-4">
        {options.map((opt) => (
          <label key={opt} className="flex items-center gap-2 text-sm">
            <input
              type="radio"
              name={name}
              value={opt}
              className="accent-brand-red"
            />
            {opt}
          </label>
        ))}
      </div>
    </fieldset>
  );
}
