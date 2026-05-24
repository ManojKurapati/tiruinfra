"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { Counter, OrangeLine, Reveal } from "./primitives";

const stats = [
  { num: 200, suffix: "+", label: "Projects Delivered" },
  { num: 18, suffix: " Yrs", label: "In Operation" },
  { num: 12, suffix: " States", label: "Pan-India Presence" },
  { num: 800, suffix: " Cr+", prefix: "₹", label: "Infrastructure Built" },
];

export function Stats() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const bgX = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <section
      ref={ref}
      className="relative w-full bg-[var(--color-surface)] noise-overlay py-20 lg:py-28 overflow-hidden"
    >
      {/* Animated concrete texture parallax */}
      <motion.div
        style={{ x: bgX }}
        className="absolute inset-0 opacity-[0.04] mix-blend-overlay pointer-events-none"
        aria-hidden
      >
        <div className="h-full w-[140%] bg-[radial-gradient(ellipse_at_center,rgba(255,107,43,0.6),transparent_60%)]" />
      </motion.div>

      <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
        <Reveal>
          <div className="flex items-center gap-3 mb-3">
            <span className="eyebrow text-[var(--color-orange)]">
              Track Record
            </span>
            <OrangeLine width={40} />
          </div>
        </Reveal>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-0 mt-8 lg:mt-12">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08}>
              <div
                className={`relative px-2 lg:px-8 ${
                  i !== 0 ? "lg:border-l lg:border-[var(--color-orange)]/30" : ""
                }`}
              >
                <div className="font-display text-[56px] sm:text-[72px] lg:text-[88px] leading-none text-[var(--color-orange)] tracking-tight">
                  <Counter
                    to={s.num}
                    prefix={s.prefix ?? ""}
                    suffix={s.suffix}
                  />
                </div>
                <div className="eyebrow mt-4 text-[var(--color-muted)]">
                  {s.label}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
