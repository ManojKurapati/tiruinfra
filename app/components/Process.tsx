"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { OrangeLine, Reveal, SectionLabel } from "./primitives";

const steps = [
  {
    n: "01",
    title: "Site Assessment & Feasibility",
    body: "Ground survey, soil testing, constraint mapping — we map reality before we draw lines.",
  },
  {
    n: "02",
    title: "Engineering & Design",
    body: "Structural drawings, BOQ, sequencing, timeline — fully resolved before mobilisation.",
  },
  {
    n: "03",
    title: "Procurement",
    body: "Vetted materials, audited vendors, supply-chain control from cement to steel.",
  },
  {
    n: "04",
    title: "Construction Execution",
    body: "Skilled in-house workforce, daily quality control, milestone-driven reporting.",
  },
  {
    n: "05",
    title: "Handover & Support",
    body: "Snag resolution, full documentation, post-completion support — the work outlasts the contract.",
  },
];

export function Process() {
  return (
    <section
      id="about"
      className="relative bg-[var(--color-bg)] noise-overlay py-24 lg:py-36"
    >
      <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
        <div className="grid lg:grid-cols-[1fr_1.4fr] gap-12 lg:gap-20 mb-16 lg:mb-24">
          <div>
            <Reveal>
              <SectionLabel>Our Process</SectionLabel>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="display mt-5 text-[40px] sm:text-[52px] lg:text-[62px] text-[var(--color-sand)]">
                The Tiruinfra Method
              </h2>
            </Reveal>
            <div className="mt-6">
              <OrangeLine width={100} />
            </div>
          </div>
          <Reveal delay={0.2}>
            <p className="mt-2 lg:mt-12 text-[18px] lg:text-[20px] leading-relaxed text-[var(--color-text)]/85 max-w-[560px]">
              Turnkey means we carry it — from first drawing to final key. Five
              stages, one accountable team, zero hand-offs to chase.
            </p>
          </Reveal>
        </div>

        <Timeline />
      </div>
    </section>
  );
}

function Timeline() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <div ref={ref} className="relative">
      {/* Desktop horizontal connector */}
      <div className="hidden lg:block absolute top-12 left-0 right-0 h-px bg-white/10">
        <motion.div
          className="h-full bg-[var(--color-orange)] origin-left"
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : { scaleX: 0 }}
          transition={{ duration: 2.4, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
        />
      </div>

      <ol className="grid lg:grid-cols-5 gap-12 lg:gap-6">
        {steps.map((s, i) => (
          <motion.li
            key={s.n}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{
              delay: 0.4 + i * 0.18,
              duration: 0.9,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="relative lg:pr-4"
          >
            {/* Dot on connector */}
            <div className="hidden lg:flex absolute -top-[3px] left-0 h-6 w-6 -translate-y-1/2 items-center justify-center">
              <motion.span
                className="h-3 w-3 rounded-full bg-[var(--color-orange)]"
                initial={{ scale: 0 }}
                animate={inView ? { scale: 1 } : { scale: 0 }}
                transition={{
                  delay: 0.5 + i * 0.18,
                  duration: 0.5,
                  ease: [0.16, 1, 0.3, 1],
                }}
              />
              <span className="absolute h-6 w-6 rounded-full border border-[var(--color-orange)]/30" />
            </div>

            <div className="pt-10 lg:pt-12 relative">
              <span
                aria-hidden
                className="font-display absolute -top-3 lg:-top-8 -left-2 text-[80px] lg:text-[110px] leading-none text-[var(--color-orange)]/10 select-none"
              >
                {s.n}
              </span>
              <div className="relative">
                <span className="eyebrow text-[var(--color-muted)]">
                  Stage {s.n}
                </span>
                <h3 className="font-display text-[22px] lg:text-[24px] mt-3 text-[var(--color-sand)] leading-tight">
                  {s.title}
                </h3>
                <p className="mt-3 text-[14px] leading-relaxed text-[var(--color-muted)]">
                  {s.body}
                </p>
              </div>
            </div>
          </motion.li>
        ))}
      </ol>
    </div>
  );
}
