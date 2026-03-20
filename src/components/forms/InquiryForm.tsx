"use client";

import { useActionState, useState, useEffect, useRef } from "react";
import { submitInquiry } from "@/app/actions";
import { Button } from "@/components/ui/Button";
import { useLocale } from "@/lib/locale-context";
import cs from "@/lib/dictionaries/cs";
import en from "@/lib/dictionaries/en";

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
  const locale = useLocale();
  const dict = locale === "en" ? en : cs;
  const t = dict.inquiryForm;

  const [state, action, isPending] = useActionState(submitInquiry, initialState);
  const [detailsOpen, setDetailsOpen] = useState(false);
  const trackRef = useRef(false);

  useEffect(() => {
    if (state.success && state.message && !trackRef.current) {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: "form_submit",
        form_type: "general_inquiry",
      });
      trackRef.current = true;
    }
  }, [state.success, state.message]);

  if (state.success && state.message) {
    return (
      <div className="rounded-2xl border border-green-600/30 bg-green-900/20 p-8">
        <p className="text-lg font-bold text-green-400">
          {t.successTitle}
        </p>
        <p className="mt-2 text-brand-white/80">{state.message}</p>
        <p className="mt-4 text-sm text-brand-white/60">
          {t.urgentNote}{" "}
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

      <input type="hidden" name="locale" value={locale} />

      {/* Visible required fields */}
      <FormField
        label={t.name}
        name="name"
        type="text"
        required
        errors={state.errors?.name}
      />
      <FormField
        label={t.company}
        name="company"
        type="text"
        required
        errors={state.errors?.company}
      />
      <FormField
        label={t.email}
        name="email"
        type="email"
        required
        errors={state.errors?.email}
      />
      <FormField
        label={t.phone}
        name="phone"
        type="tel"
        required
        errors={state.errors?.phone}
      />
      <SelectField
        label={t.eventType}
        name="eventType"
        required
        options={t.eventTypeOptions}
        selectPlaceholder={t.selectPlaceholder}
        errors={state.errors?.eventType}
      />
      <SelectField
        label={t.guestCount}
        name="guestCount"
        required
        options={t.guestCountOptions}
        selectPlaceholder={t.selectPlaceholder}
        errors={state.errors?.guestCount}
      />
      <FormField
        label={t.preferredDate}
        name="preferredDate"
        type="text"
        required
        placeholder={t.preferredDatePlaceholder}
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
          {t.moreInfo}
        </summary>
        <div className="mt-4 space-y-5">
          <RadioGroup
            label={t.catering}
            name="catering"
            options={t.cateringOptions}
          />
          <RadioGroup
            label={t.isAgency}
            name="isAgency"
            options={[t.agencyYes, t.agencyNo]}
          />
          <div>
            <label
              htmlFor="description"
              className="mb-1 block text-sm font-bold"
            >
              {t.description}
            </label>
            <textarea
              id="description"
              name="description"
              rows={3}
              placeholder={t.descriptionPlaceholder}
              className="w-full rounded-lg border border-brand-gray-dark/40 bg-brand-black-alt px-4 py-3 text-brand-white placeholder:text-brand-white/30 focus:border-brand-red focus:outline-none focus:ring-1 focus:ring-brand-red"
            />
          </div>
          <SelectField
            label={t.source}
            name="source"
            options={t.sourceOptions}
            selectPlaceholder={t.selectPlaceholder}
          />
        </div>
      </details>

      {/* Error message */}
      {state.message && !state.success && (
        <p className="text-sm text-red-400">{state.message}</p>
      )}

      {/* Submit */}
      <Button type="submit" variant="primary" disabled={isPending} className="w-full">
        {isPending ? t.submitting : t.submit}
      </Button>
      <p className="text-center text-xs text-brand-white/40">
        {t.gdprNote}
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
  selectPlaceholder,
  errors,
}: {
  label: string;
  name: string;
  required?: boolean;
  options: string[];
  selectPlaceholder: string;
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
          {selectPlaceholder}
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
