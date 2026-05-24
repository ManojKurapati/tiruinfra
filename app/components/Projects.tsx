"use client";

import { motion } from "motion/react";
import { asset } from "../lib/paths";
import {
  MagneticButton,
  OrangeLine,
  Reveal,
  SectionLabel,
  ShutterImage,
} from "./primitives";

const projects = [
  {
    name: "Coastal Industrial Park",
    location: "Tuticorin, Tamil Nadu",
    year: "2024",
    tag: "Industrial",
    brief:
      "180,000 sq ft pre-engineered structure with heavy crane bays and full site development.",
    img: asset("/images/image.webp"),
    size: "lg",
  },
  {
    name: "Civic Riverfront Promenade",
    location: "Vijayawada, Andhra Pradesh",
    year: "2023",
    tag: "Infrastructure",
    brief:
      "2.4 km of public infrastructure — retaining walls, drainage, hardscape and landscape.",
    img: asset("/images/image3.webp"),
    size: "md",
  },
  {
    name: "Logistics Mega-Warehouse",
    location: "Hosur, Tamil Nadu",
    year: "2024",
    tag: "Industrial",
    brief: "320,000 sq ft warehousing with 16m clear height and full MEP fit-out.",
    img: asset("/images/image7.webp"),
    size: "md",
  },
  {
    name: "Tower Foundation & Basement",
    location: "Bengaluru, Karnataka",
    year: "2022",
    tag: "Structural",
    brief:
      "5-level basement excavation, secant pile walls and raft foundation for a 32-storey tower.",
    img: asset("/images/image6.webp"),
    size: "sm",
  },
  {
    name: "Heritage Mill Retrofit",
    location: "Coimbatore, Tamil Nadu",
    year: "2023",
    tag: "Renovation",
    brief:
      "Structural strengthening and adaptive reuse of a 1920s industrial complex into office space.",
    img: asset("/images/image4.webp"),
    size: "sm",
  },
  {
    name: "State Highway Bypass",
    location: "Salem, Tamil Nadu",
    year: "2024",
    tag: "Infrastructure",
    brief:
      "8.6 km four-lane bypass — earthworks, base course, drainage and protective works.",
    img: asset("/images/image5.webp"),
    size: "sm",
  },
];

export function Projects() {
  return (
    <section
      id="projects"
      className="relative bg-[var(--color-bg)] noise-overlay py-24 lg:py-36"
    >
      <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
        <div className="grid lg:grid-cols-[1fr_auto] items-end gap-8 mb-16">
          <div>
            <Reveal>
              <SectionLabel>Selected Work</SectionLabel>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="display mt-5 text-[40px] sm:text-[52px] lg:text-[64px] text-[var(--color-sand)] max-w-[820px]">
                Built to Last. Built to Prove It.
              </h2>
            </Reveal>
            <div className="mt-7">
              <OrangeLine width={120} />
            </div>
          </div>
          <Reveal delay={0.2}>
            <p className="text-[var(--color-muted)] text-[15px] max-w-[320px]">
              Six representative projects across industrial, civic and
              structural disciplines.
            </p>
          </Reveal>
        </div>

        {/* Asymmetric featured grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 mb-5">
          <ProjectCard p={projects[0]} className="lg:col-span-7 h-[420px] lg:h-[640px]" />
          <div className="lg:col-span-5 grid grid-rows-2 gap-5">
            <ProjectCard p={projects[1]} className="h-[300px] lg:h-auto" />
            <ProjectCard p={projects[2]} className="h-[300px] lg:h-auto" />
          </div>
        </div>

        {/* Three-column row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.slice(3).map((p, i) => (
            <ProjectCard key={p.name} p={p} delay={i * 0.1} className="h-[340px] lg:h-[360px]" />
          ))}
        </div>

        <Reveal>
          <div className="mt-16 flex justify-center">
            <MagneticButton href="#contact" variant="ghost">
              View All Projects
            </MagneticButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function ProjectCard({
  p,
  className,
  delay = 0,
}: {
  p: (typeof projects)[number];
  className?: string;
  delay?: number;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] }}
      className={`group relative overflow-hidden rounded-[2px] bg-[var(--color-surface)] cursor-none ${className}`}
      data-cursor="hover"
    >
      <ShutterImage
        src={p.img}
        alt={`${p.name} — ${p.location}`}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 700px"
        className="absolute inset-0"
        imageClassName="object-cover transition-transform duration-[1500ms] ease-out group-hover:scale-105"
        delay={delay}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-bg)] via-[var(--color-bg)]/30 to-transparent" />

      {/* Tag */}
      <div className="absolute top-5 left-5 z-10">
        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--color-orange)]/90 text-[var(--color-bg)] text-[10px] uppercase tracking-[0.18em] font-medium">
          {p.tag}
        </span>
      </div>

      {/* Bottom content */}
      <div className="absolute bottom-0 inset-x-0 z-10 p-6">
        <h3 className="font-display text-[22px] lg:text-[26px] leading-tight text-[var(--color-sand)]">
          {p.name}
        </h3>
        <div className="mt-2 flex items-center gap-3 text-[12px] text-[var(--color-muted)]">
          <span>{p.location}</span>
          <span className="h-1 w-1 rounded-full bg-[var(--color-orange)]" />
          <span>{p.year}</span>
        </div>

        {/* Hover overlay */}
        <div className="mt-4 max-h-0 group-hover:max-h-32 opacity-0 group-hover:opacity-100 transition-all duration-700 ease-out overflow-hidden">
          <p className="text-[13px] text-[var(--color-sand)]/90 leading-relaxed">
            {p.brief}
          </p>
          <div className="mt-3 inline-flex items-center gap-2 eyebrow text-[var(--color-orange)]">
            Case Study
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </div>
        </div>
      </div>
    </motion.article>
  );
}
