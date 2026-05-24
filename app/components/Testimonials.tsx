"use client";

import { motion } from "motion/react";
import { OrangeLine, Reveal, SectionLabel } from "./primitives";

const logos = [
  "Larsen Group",
  "Adani Ports",
  "TNRDC",
  "Tata Realty",
  "L&T Construction",
  "NHAI",
  "Brigade Group",
  "Mahindra Logistics",
  "JSW Infra",
  "Reliance Industries",
];

const quotes = [
  {
    body: "Tiruinfra delivered our 180,000 sq ft facility two weeks ahead of schedule with zero safety incidents. The structural detailing was first-class, and their site reporting kept our board fully in the loop.",
    name: "Pradeep Iyer",
    role: "Director, Capital Projects",
    company: "Coastal Logistics Pvt Ltd",
  },
  {
    body: "We engaged them to retrofit a 1920s mill complex — a job most contractors refused. They brought engineering rigour, conservation sensitivity, and finished on the contracted date.",
    name: "Anuradha Krishnan",
    role: "Chief Project Officer",
    company: "Coimbatore Heritage Trust",
  },
];

export function Testimonials() {
  return (
    <section
      id="testimonials"
      className="relative bg-[var(--color-surface-2)] noise-overlay py-24 lg:py-32 overflow-hidden"
    >
      <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
        <div className="grid lg:grid-cols-[1fr_auto] items-end gap-8 mb-14">
          <div>
            <Reveal>
              <SectionLabel>Client Trust</SectionLabel>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="display mt-5 text-[36px] sm:text-[44px] lg:text-[52px] text-[var(--color-sand)]">
                What Our Clients Say
              </h2>
            </Reveal>
            <div className="mt-6">
              <OrangeLine width={80} />
            </div>
          </div>
        </div>

        {/* Logo ticker */}
        <div className="relative mb-20 overflow-hidden">
          <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[var(--color-surface-2)] to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[var(--color-surface-2)] to-transparent z-10 pointer-events-none" />
          <motion.div
            className="flex gap-14 whitespace-nowrap py-4"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 40,
              ease: "linear",
              repeat: Infinity,
            }}
          >
            {[...logos, ...logos].map((l, i) => (
              <span
                key={i}
                className="font-display text-[22px] sm:text-[28px] text-[var(--color-sand)]/40 tracking-wide shrink-0"
              >
                {l}
              </span>
            ))}
          </motion.div>
        </div>

        {/* Quote cards */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {quotes.map((q, i) => (
            <motion.figure
              key={q.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                delay: i * 0.15,
                duration: 0.9,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="relative pl-8 lg:pl-10 py-8 lg:py-10 pr-6 lg:pr-10 bg-[var(--color-surface)] border-l-2 border-[var(--color-orange)]"
            >
              <span
                aria-hidden
                className="absolute -top-2 left-4 lg:left-6 font-display text-[80px] lg:text-[120px] leading-none text-[var(--color-orange)]/40 select-none"
              >
                &ldquo;
              </span>
              <blockquote className="relative z-10">
                <p className="font-display italic text-[19px] lg:text-[22px] leading-[1.5] text-[var(--color-sand)]">
                  {q.body}
                </p>
              </blockquote>
              <figcaption className="mt-7 flex items-end justify-between gap-4">
                <div>
                  <div className="text-[14px] font-medium text-[var(--color-sand)]">
                    {q.name}
                  </div>
                  <div className="text-[12px] text-[var(--color-muted)] mt-1">
                    {q.role} · {q.company}
                  </div>
                </div>
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, k) => (
                    <Star key={k} />
                  ))}
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function Star() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="var(--color-orange)"
      aria-hidden
    >
      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27z" />
    </svg>
  );
}
