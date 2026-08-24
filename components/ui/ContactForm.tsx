"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { contactEmail } from "@/lib/content/siteConfig";
import { cn } from "@/lib/utils";
import { useTranslation } from "@/lib/i18n/context";

const inputClass =
  "w-full rounded-lg border border-dark/15 bg-light px-4 py-3 font-body text-sm text-dark placeholder:text-dark/35 focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent transition-colors duration-150";
const errorClass = "font-body text-xs text-red-600 mt-1.5";
const labelClass = "font-body text-sm font-medium text-dark/80 mb-1.5 block";

type ContactFormValues = {
  name: string;
  email: string;
  projectType: string;
  message: string;
};

export default function ContactForm(): React.JSX.Element {
  const [submitted, setSubmitted] = useState(false);
  const { t } = useTranslation();
  const f = t.contact.form;

  // Build schema from translated error messages so they update when lang changes
  const contactSchema = z.object({
    name:        z.string().min(2, f.errorName),
    email:       z.string().email(f.errorEmail),
    projectType: z.string().min(1, f.errorProjectType),
    message:     z.string().min(10, f.errorMessage),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormValues) => {
    const subject = encodeURIComponent(`New project inquiry, ${data.projectType}`);
    const body = encodeURIComponent(
      `Name: ${data.name}\nEmail: ${data.email}\nProject type: ${data.projectType}\n\n${data.message}`
    );
    window.location.href = `mailto:${contactEmail}?subject=${subject}&body=${body}`;
    setSubmitted(true);
    reset();
  };

  if (submitted) {
    return (
      <div className="rounded-lg border border-brand-accent/30 bg-brand-accent/5 p-6 font-body text-sm text-dark/80">
        {f.successMessage}{" "}
        <a href={`mailto:${contactEmail}`} className="text-brand-accent font-medium">
          {contactEmail}
        </a>
        .
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5 max-w-xl">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className={labelClass}>{f.labelName}</label>
          <input id="name" className={inputClass} {...register("name")} />
          {errors.name && <p className={errorClass}>{errors.name.message}</p>}
        </div>
        <div>
          <label htmlFor="email" className={labelClass}>{f.labelEmail}</label>
          <input id="email" type="email" className={inputClass} {...register("email")} />
          {errors.email && <p className={errorClass}>{errors.email.message}</p>}
        </div>
      </div>

      <div>
        <label htmlFor="projectType" className={labelClass}>{f.labelProjectType}</label>
        <select
          id="projectType"
          className={cn(inputClass, "appearance-none bg-light")}
          defaultValue=""
          {...register("projectType")}
        >
          <option value="" disabled>{f.placeholder}</option>
          {f.options.map((opt) => (
            <option key={opt.value} value={opt.value}>{opt.label}</option>
          ))}
        </select>
        {errors.projectType && <p className={errorClass}>{errors.projectType.message}</p>}
      </div>

      <div>
        <label htmlFor="message" className={labelClass}>{f.labelMessage}</label>
        <textarea
          id="message"
          rows={4}
          className={cn(inputClass, "resize-none")}
          {...register("message")}
        />
        {errors.message && <p className={errorClass}>{errors.message.message}</p>}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="self-start rounded-lg bg-brand-accent px-7 py-3.5 font-body text-sm font-semibold text-dark hover:bg-brand-accent-hover transition-colors duration-200 disabled:opacity-60"
      >
        {isSubmitting ? f.submitting : f.submit}
      </button>
    </form>
  );
}
