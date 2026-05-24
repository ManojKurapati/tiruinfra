"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { asset } from "../lib/paths";
import { OrangeLine, Reveal, SectionLabel } from "./primitives";

const items = [
  {
    n: "01",
    title: "Single-point accountability",
    body: "One team, one contract. No blame-shifting between sub-contractors when something goes wrong.",
  },
  {
    n: "02",
    title: "In-house structural expertise",
    body: "Our engineers own both the design and the execution. No sub-contracted guesswork on the critical path.",
  },
  {
    n: "03",
    title: "On-time delivery track record",
    body: "Milestone-driven execution with weekly transparent reporting. We commit to dates and we hit them.",
  },
  {
    n: "04",
    title: "Compliance & quality assurance",
    body: "ISO-aligned processes, third-party material testing, full documentation trail at handover.",
  },
];

export function WhyUs() {
  return (
    <section
      id="why"
      className="relative bg-[var(--color-bg)] noise-overlay py-24 lg:py-36"
    >
      <div className="mx-auto max-w-[1440px] px-6 lg:px-10 grid lg:grid-cols-[1fr_1fr] gap-12 lg:gap-20 items-stretch">
        {/* Image column */}
        <Reveal className="relative h-[420px] lg:h-auto lg:min-h-[640px] overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src={asset("/images/image6.webp")}
              alt="Tiruinfra engineering team on site"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover grayscale contrast-110"
            />
          </div>
          <div
            className="absolute inset-0 mix-blend-multiply"
            style={{ background: "rgba(255, 107, 43, 0.35)" }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-bg)]/30 to-[var(--color-bg)]/60" />

          {/* Caption */}
          <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8 z-10">
            <div className="flex items-center gap-3 mb-2">
              <span className="h-px w-10 bg-[var(--color-sand)]" />
              <span className="eyebrow text-[var(--color-sand)]">
                On Site · Chennai
              </span>
            </div>
            <p className="font-display text-[var(--color-sand)] text-[18px] lg:text-[22px] max-w-[320px]">
              Built by people who sign their name to the work.
            </p>
          </div>
        </Reveal>

        {/* Content column */}
        <div className="flex flex-col justify-center">
          <Reveal>
            <SectionLabel>Why Tiruinfra</SectionLabel>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="display mt-5 text-[36px] sm:text-[44px] lg:text-[52px] text-[var(--color-sand)] max-w-[540px]">
              Why Builders, Developers and Governments Trust Us
            </h2>
          </Reveal>
          <div className="mt-6">
            <OrangeLine width={80} />
          </div>

          <ul className="mt-12 flex flex-col gap-9">
            {items.map((it, i) => (
              <motion.li
                key={it.n}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  delay: i * 0.12,
                  duration: 0.8,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="pl-6 border-l border-[var(--color-orange)]"
              >
                <div className="flex items-baseline gap-4">
                  <span className="font-display text-[14px] text-[var(--color-orange)]">
                    {it.n}
                  </span>
                  <h3 className="font-display text-[22px] lg:text-[24px] text-[var(--color-sand)] leading-snug">
                    {it.title}
                  </h3>
                </div>
                <p className="mt-3 text-[14px] lg:text-[15px] text-[var(--color-muted)] leading-relaxed max-w-[480px]">
                  {it.body}
                </p>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
