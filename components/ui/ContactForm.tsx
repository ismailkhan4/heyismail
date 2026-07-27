"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { contactEmail } from "@/lib/content/siteConfig";
import { cn } from "@/lib/utils";

const contactSchema = z.object({
  name: z.string().min(2, "Enter your name"),
  email: z.string().email("Enter a valid email"),
  projectType: z.string().min(1, "Select a project type"),
  message: z.string().min(10, "Give a bit more detail (10+ characters)"),
});

type ContactFormValues = z.infer<typeof contactSchema>;

const inputClass =
  "w-full rounded-lg border border-dark/15 bg-light px-4 py-3 font-body text-sm text-dark placeholder:text-dark/35 focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent transition-colors duration-150";

const errorClass = "font-body text-xs text-red-600 mt-1.5";
const labelClass = "font-body text-sm font-medium text-dark/80 mb-1.5 block";

export default function ContactForm(): React.JSX.Element {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormValues) => {
    // TODO: wire up to a real submission endpoint (API route, Resend, or
    // Formspree). For now this opens a pre-filled mailto as a working
    // fallback so the form is functional without a backend.
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
        Thanks, your email client should have opened with your message ready to send.
        If it didn&apos;t, reach out directly at{" "}
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
          <label htmlFor="name" className={labelClass}>
            Name
          </label>
          <input id="name" className={inputClass} {...register("name")} />
          {errors.name && <p className={errorClass}>{errors.name.message}</p>}
        </div>
        <div>
          <label htmlFor="email" className={labelClass}>
            Email
          </label>
          <input id="email" type="email" className={inputClass} {...register("email")} />
          {errors.email && <p className={errorClass}>{errors.email.message}</p>}
        </div>
      </div>

      <div>
        <label htmlFor="projectType" className={labelClass}>
          Project type
        </label>
        <select
          id="projectType"
          className={cn(inputClass, "appearance-none bg-light")}
          defaultValue=""
          {...register("projectType")}
        >
          <option value="" disabled>
            Select one
          </option>
          <option value="Web application">Web application</option>
          <option value="Mobile app">Mobile app</option>
          <option value="AI & automation">AI & automation</option>
          <option value="Full product build (0→1)">Full product build (0→1)</option>
          <option value="Not sure yet">Not sure yet</option>
        </select>
        {errors.projectType && <p className={errorClass}>{errors.projectType.message}</p>}
      </div>

      <div>
        <label htmlFor="message" className={labelClass}>
          Message
        </label>
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
        {isSubmitting ? "Sending…" : "Send message"}
      </button>
    </form>
  );
}
