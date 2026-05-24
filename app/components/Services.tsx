"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { OrangeLine, Reveal, SectionLabel } from "./primitives";

const services = [
  {
    n: "01",
    title: "Civil & Structural Construction",
    blurb:
      "Buildings, industrial sheds, foundations and structural steel — engineered and executed by our in-house teams.",
    img: "/images/image.webp",
  },
  {
    n: "02",
    title: "Project Management & Turnkey Delivery",
    blurb:
      "Single-point accountability from design through procurement, execution and handover.",
    img: "/images/image3.webp",
  },
  {
    n: "03",
    title: "Infrastructure Development",
    blurb:
      "Roads, drainage, site development and the heavy civil works that get a project off the ground.",
    img: "/images/image7.webp",
  },
  {
    n: "04",
    title: "Renovation & Retrofit",
    blurb:
      "Structural strengthening, facility upgrades and adaptive reuse, executed without disrupting operations.",
    img: "/images/image4.webp",
  },
];

export function Services() {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  // Desktop horizontal scroll — translate the track
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-62%"]);

  return (
    <section
      id="services"
      className="relative bg-[var(--color-bg)] noise-overlay"
    >
      {/* Headline block */}
      <div className="mx-auto max-w-[1440px] px-6 lg:px-10 pt-28 pb-16 lg:pt-40 lg:pb-20">
        <Reveal>
          <SectionLabel>What We Do</SectionLabel>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="display mt-5 max-w-[820px] text-[36px] sm:text-[48px] lg:text-[58px] text-[var(--color-sand)]">
            End-to-End. Every Stage. One Partner.
          </h2>
        </Reveal>
        <div className="mt-7">
          <OrangeLine width={120} />
        </div>
        <Reveal delay={0.25}>
          <p className="mt-7 max-w-[520px] text-[var(--color-muted)] text-[15px] leading-relaxed">
            Four disciplines. One team carrying the project. No hand-offs to
            blame when a deadline slips.
          </p>
        </Reveal>
      </div>

      {/* Desktop: pinned horizontal scroll */}
      <div
        ref={containerRef}
        className="relative hidden lg:block h-[260vh]"
      >
        <div className="sticky top-0 h-screen overflow-hidden">
          <motion.div
            ref={trackRef}
            style={{ x }}
            className="flex h-full items-center gap-8 pl-10 pr-[20vw] will-change-transform"
          >
            {services.map((s) => (
              <ServiceCard key={s.n} {...s} />
            ))}
            <div className="shrink-0 w-[120px]" />
          </motion.div>

          {/* Progress indicator */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-3">
            <span className="eyebrow text-[var(--color-muted)]">Scroll</span>
            <div className="h-px w-32 bg-white/10 overflow-hidden">
              <motion.div
                className="h-full bg-[var(--color-orange)] origin-left"
                style={{ scaleX: scrollYProgress }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile: vertical stack */}
      <div className="lg:hidden flex flex-col gap-6 px-6 pb-24">
        {services.map((s) => (
          <Reveal key={s.n}>
            <ServiceCard {...s} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function ServiceCard({
  n,
  title,
  blurb,
  img,
}: {
  n: string;
  title: string;
  blurb: string;
  img: string;
}) {
  return (
    <article
      className="group relative shrink-0 w-[88vw] sm:w-[480px] h-[520px] sm:h-[560px] overflow-hidden bg-[var(--color-surface)] rounded-[4px] transition-transform duration-700 ease-out hover:scale-[1.025] cursor-none"
      data-cursor="hover"
    >
      <Image
        src={img}
        alt={title}
        fill
        sizes="(max-width: 1024px) 88vw, 480px"
        className="object-cover transition-transform duration-[1500ms] ease-out group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-bg)] via-[var(--color-bg)]/40 to-transparent" />
      <div className="absolute inset-0 bg-[var(--color-bg)]/20" />

      {/* Card border (animated on hover) */}
      <span className="pointer-events-none absolute inset-0 border border-transparent group-hover:border-[var(--color-orange)]/60 transition-colors duration-500" />
      <span className="pointer-events-none absolute top-0 left-0 h-px w-0 bg-[var(--color-orange)] transition-all duration-700 group-hover:w-full" />
      <span className="pointer-events-none absolute bottom-0 right-0 h-px w-0 bg-[var(--color-orange)] transition-all duration-700 group-hover:w-full" />

      <div className="relative z-10 flex h-full flex-col justify-between p-7">
        <div className="flex items-center gap-3">
          <span className="font-display text-[var(--color-orange)] text-xl">
            [{n}]
          </span>
          <span className="h-px flex-1 bg-[var(--color-orange)]/40" />
        </div>

        <div>
          <h3 className="font-display text-[32px] sm:text-[36px] leading-[1.05] text-[var(--color-sand)] max-w-[380px]">
            {title}
          </h3>
          <p className="mt-4 max-w-[360px] text-[14px] leading-relaxed text-[var(--color-muted)] group-hover:text-[var(--color-sand)]/80 transition-colors duration-500">
            {blurb}
          </p>
          <div className="mt-6 flex items-center gap-2 text-[var(--color-orange)] eyebrow opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            Learn more
            <span className="transition-transform duration-500 group-hover:translate-x-1">
              →
            </span>
          </div>
        </div>
      </div>
    </article>
  );
}
