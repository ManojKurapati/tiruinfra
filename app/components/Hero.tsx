"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import Image from "next/image";
import { HeadlineReveal, MagneticButton, SectionLabel } from "./primitives";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.4]);

  return (
    <section
      id="hero"
      ref={ref}
      className="relative min-h-screen w-full overflow-hidden noise-overlay"
    >
      <div className="grid min-h-screen grid-cols-1 lg:grid-cols-[55fr_45fr]">
        {/* LEFT — image with parallax */}
        <div className="relative h-[55vh] lg:h-screen overflow-hidden">
          <motion.div
            style={{ y, opacity }}
            className="absolute inset-0 will-change-transform"
          >
            <Image
              src="/images/image2.webp"
              alt="Tiruinfra construction project — large structural site at golden hour"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 55vw"
              className="object-cover scale-[1.12]"
            />
          </motion.div>
          {/* dark overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-bg)]/30 via-transparent to-[var(--color-bg)]/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-bg)]/70 via-transparent to-transparent" />

          {/* Construction site marker overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.7, duration: 1.2 }}
            className="absolute bottom-10 left-10 hidden lg:flex flex-col gap-3"
          >
            <div className="flex items-center gap-3">
              <span className="h-px w-12 bg-[var(--color-orange)]" />
              <span className="eyebrow text-[var(--color-sand)]">
                Site 09 · Active
              </span>
            </div>
            <span className="font-display text-lg text-[var(--color-sand)]">
              N 13°04′ · E 80°16′
            </span>
          </motion.div>
        </div>

        {/* RIGHT — content with blueprint grid */}
        <div className="relative flex items-center px-7 py-20 sm:px-12 lg:px-16 lg:py-0">
          <div className="absolute inset-0 blueprint-grid opacity-40 pointer-events-none" />
          <div className="absolute top-0 left-0 hidden lg:block h-full w-px bg-gradient-to-b from-transparent via-[var(--color-border)] to-transparent" />

          <div className="relative z-10 max-w-[560px]">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.6, duration: 0.8 }}
            >
              <SectionLabel className="flex items-center gap-3">
                <span className="h-px w-8 bg-[var(--color-orange)]" />
                Turnkey Infrastructure Solutions
              </SectionLabel>
            </motion.div>

            <div className="mt-7">
              <HeadlineReveal
                text={"We Build What\nOthers Only Plan."}
                className="text-[42px] sm:text-[58px] lg:text-[72px] xl:text-[86px] text-[var(--color-sand)]"
                delay={2.7}
              />
            </div>

            <motion.p
              className="mt-7 max-w-[440px] text-[16px] sm:text-[18px] leading-[1.55] text-[var(--color-muted)]"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 3.5, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            >
              From blueprint to handover — Tiruinfra delivers complete civil
              and structural infrastructure with precision, accountability, and
              zero compromise.
            </motion.p>

            <motion.div
              className="mt-10 flex flex-wrap items-center gap-4"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 3.8, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            >
              <MagneticButton href="#projects" variant="primary">
                Explore Our Work
              </MagneticButton>
              <MagneticButton href="#contact" variant="ghost">
                Talk to Us
              </MagneticButton>
            </motion.div>

            <motion.div
              className="mt-10 flex flex-wrap items-center gap-x-4 gap-y-2 text-[12px] tracking-[0.06em] text-[var(--color-muted)]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 4.1, duration: 0.9 }}
            >
              <span>
                <strong className="text-[var(--color-sand)] font-medium">
                  200+
                </strong>{" "}
                Projects
              </span>
              <span className="h-1 w-1 rounded-full bg-[var(--color-orange)]" />
              <span>
                <strong className="text-[var(--color-sand)] font-medium">
                  15+
                </strong>{" "}
                Years
              </span>
              <span className="h-1 w-1 rounded-full bg-[var(--color-orange)]" />
              <span>
                <strong className="text-[var(--color-sand)] font-medium">
                  Pan-India
                </strong>{" "}
                Presence
              </span>
            </motion.div>

            {/* Scroll indicator */}
            <motion.div
              className="absolute -bottom-20 lg:-bottom-2 left-7 lg:left-16 flex items-center gap-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 4.4, duration: 1 }}
            >
              <motion.span
                className="block h-10 w-px bg-[var(--color-orange)]"
                animate={{ scaleY: [0.3, 1, 0.3] }}
                transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
                style={{ transformOrigin: "top" }}
              />
              <span className="eyebrow text-[var(--color-muted)]">Scroll</span>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Jagged concrete-crack divider */}
      <svg
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        className="absolute -bottom-px left-0 w-full h-12 text-[var(--color-bg)]"
        aria-hidden
      >
        <polygon
          fill="currentColor"
          points="0,80 0,40 120,55 260,30 380,60 510,35 640,68 780,42 920,72 1080,40 1220,60 1360,32 1440,55 1440,80"
        />
      </svg>
    </section>
  );
}
