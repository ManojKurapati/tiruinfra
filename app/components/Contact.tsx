"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "motion/react";
import { Reveal, SectionLabel } from "./primitives";

export function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      className="relative isolate overflow-hidden noise-overlay"
    >
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/image5.webp"
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[var(--color-bg)]/[0.88]" />
      </div>

      <div className="mx-auto max-w-[1200px] px-6 lg:px-10 py-24 lg:py-32">
        <div className="text-center max-w-[820px] mx-auto">
          <Reveal>
            <SectionLabel>Let&apos;s Build Together</SectionLabel>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="display mt-5 text-[40px] sm:text-[52px] lg:text-[64px] text-[var(--color-sand)]">
              Your Project Starts With One Conversation.
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-6 text-[16px] lg:text-[18px] text-[var(--color-muted)]">
              Tell us what you&apos;re building. We&apos;ll tell you how we make
              it happen.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.3}>
          <form
            onSubmit={onSubmit}
            className="mt-14 mx-auto max-w-[980px] bg-[var(--color-bg)]/60 border border-white/5 backdrop-blur-md p-6 sm:p-10 rounded-[3px]"
          >
            <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
              {/* Left column */}
              <div className="flex flex-col gap-5">
                <Field name="name" label="Full Name" required />
                <Field name="company" label="Company" />
                <Field name="phone" label="Phone" type="tel" required />
                <Field name="email" label="Email" type="email" required />
              </div>

              {/* Right column */}
              <div className="flex flex-col gap-5">
                <SelectField
                  name="type"
                  label="Project Type"
                  options={[
                    "Civil & Structural Construction",
                    "Project Management & Turnkey",
                    "Infrastructure Development",
                    "Renovation & Retrofit",
                    "Other",
                  ]}
                />
                <SelectField
                  name="budget"
                  label="Approximate Budget"
                  options={[
                    "Under ₹5 Cr",
                    "₹5 – 25 Cr",
                    "₹25 – 100 Cr",
                    "₹100 Cr +",
                    "Not sure yet",
                  ]}
                />
                <div>
                  <Label htmlFor="brief">Brief Description</Label>
                  <textarea
                    id="brief"
                    name="brief"
                    rows={5}
                    placeholder="Site location, scope, target completion…"
                    className="field resize-none"
                  />
                </div>
              </div>
            </div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.005 }}
              whileTap={{ scale: 0.99 }}
              className="mt-10 group relative w-full flex items-center justify-center gap-3 h-16 bg-[var(--color-orange)] text-[var(--color-bg)] uppercase tracking-[0.22em] text-[13px] font-semibold cursor-none overflow-hidden rounded-[2px]"
              data-cursor="hover"
            >
              <span className="relative z-10">
                {submitted ? "Enquiry Sent · We'll be in touch" : "Send Enquiry"}
              </span>
              <span
                aria-hidden
                className="relative z-10 transition-transform duration-300 group-hover:translate-x-1"
              >
                →
              </span>
              <span className="absolute inset-0 bg-[var(--color-orange-soft)] translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
            </motion.button>
          </form>
        </Reveal>

        {/* Contact pills */}
        <div className="mt-12 grid sm:grid-cols-3 gap-4">
          {[
            { icon: "phone", label: "Call", value: "+91 00 0000 0000" },
            { icon: "mail", label: "Email", value: "hello@tiruinfra.com" },
            { icon: "pin", label: "Office", value: "Chennai, India" },
          ].map((c, i) => (
            <Reveal key={c.label} delay={0.1 + i * 0.08}>
              <div className="flex items-center gap-4 px-5 py-4 bg-[var(--color-bg)]/60 border border-white/5 rounded-[3px] backdrop-blur-md">
                <ContactIcon name={c.icon as "phone" | "mail" | "pin"} />
                <div>
                  <div className="eyebrow text-[var(--color-muted)]">
                    {c.label}
                  </div>
                  <div className="text-[14px] text-[var(--color-sand)] mt-1">
                    {c.value}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Label({
  children,
  htmlFor,
}: {
  children: React.ReactNode;
  htmlFor: string;
}) {
  return (
    <label
      htmlFor={htmlFor}
      className="block eyebrow text-[var(--color-muted)] mb-2"
    >
      {children}
    </label>
  );
}

function Field({
  name,
  label,
  type = "text",
  required,
}: {
  name: string;
  label: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <Label htmlFor={name}>
        {label}
        {required && <span className="text-[var(--color-orange)]"> *</span>}
      </Label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        autoComplete="off"
        className="field"
        placeholder={`${label}…`}
      />
    </div>
  );
}

function SelectField({
  name,
  label,
  options,
}: {
  name: string;
  label: string;
  options: string[];
}) {
  return (
    <div>
      <Label htmlFor={name}>{label}</Label>
      <select id={name} name={name} className="field" defaultValue="">
        <option value="" disabled>
          Select…
        </option>
        {options.map((o) => (
          <option key={o} value={o} className="bg-[var(--color-bg)]">
            {o}
          </option>
        ))}
      </select>
    </div>
  );
}

function ContactIcon({ name }: { name: "phone" | "mail" | "pin" }) {
  const common =
    "h-10 w-10 grid place-items-center rounded-[2px] bg-[var(--color-orange)]/15 text-[var(--color-orange)] shrink-0";
  if (name === "phone")
    return (
      <span className={common}>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20 15.5c-1.25 0-2.45-.2-3.57-.57-.35-.11-.74-.03-1.02.24l-2.2 2.2a15.05 15.05 0 0 1-6.59-6.59l2.2-2.2c.27-.27.35-.66.24-1.02C8.7 6.45 8.5 5.25 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1z" />
        </svg>
      </span>
    );
  if (name === "mail")
    return (
      <span className={common}>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 4-8 5-8-5V6l8 5 8-5z" />
        </svg>
      </span>
    );
  return (
    <span className={common}>
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5z" />
      </svg>
    </span>
  );
}
