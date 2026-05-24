"use client";

import {
  motion,
  useAnimation,
  useInView,
  useMotionValue,
  useSpring,
  useTransform,
  useScroll,
  type MotionValue,
  type Variants,
} from "motion/react";
import Image, { type ImageProps } from "next/image";
import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ReactNode,
} from "react";
import clsx from "clsx";

/* ----------------------------- Reveal wrapper ----------------------------- */
export function Reveal({
  children,
  delay = 0,
  y = 40,
  className,
  as: As = "div",
  once = true,
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  as?: keyof React.JSX.IntrinsicElements;
  once?: boolean;
}) {
  const MotionAs = motion[As as keyof typeof motion] as typeof motion.div;
  return (
    <MotionAs
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, amount: 0.2 }}
      transition={{ duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </MotionAs>
  );
}

/* ---------------------------- Stagger container --------------------------- */
export function Stagger({
  children,
  className,
  delay = 0,
  stagger = 0.12,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  stagger?: number;
}) {
  const variants: Variants = {
    hidden: {},
    show: {
      transition: { staggerChildren: stagger, delayChildren: delay },
    },
  };
  return (
    <motion.div
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
    >
      {children}
    </motion.div>
  );
}

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] },
  },
};

/* ----------------------------- Orange Line ------------------------------- */
export function OrangeLine({
  width = 80,
  className,
}: {
  width?: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  return (
    <span
      ref={ref}
      className={clsx("orange-line", inView && "is-in", className)}
      style={{ ["--line-w" as string]: `${width}px` } as CSSProperties}
    />
  );
}

/* ----------------------------- Eyebrow Label ----------------------------- */
export function SectionLabel({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return <span className={clsx("eyebrow", className)}>{children}</span>;
}

/* ------------------------- Word-by-word display reveal ------------------- */
export function HeadlineReveal({
  text,
  className,
  delay = 0,
}: {
  text: string;
  className?: string;
  delay?: number;
}) {
  const lines = text.split("\n");
  return (
    <motion.h1
      className={clsx("display", className)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      transition={{ staggerChildren: 0.08, delayChildren: delay }}
    >
      {lines.map((line, i) => (
        <span key={i} className="block overflow-hidden">
          <motion.span
            className="block"
            variants={{
              hidden: { y: "110%" },
              show: {
                y: "0%",
                transition: { duration: 1, ease: [0.16, 1, 0.3, 1] },
              },
            }}
          >
            {line}
          </motion.span>
        </span>
      ))}
    </motion.h1>
  );
}

/* ----------------------------- Magnetic Button --------------------------- */
export function MagneticButton({
  children,
  className,
  href,
  onClick,
  variant = "primary",
  type = "button",
  strength = 0.35,
  ariaLabel,
}: {
  children: ReactNode;
  className?: string;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "ghost";
  type?: "button" | "submit";
  strength?: number;
  ariaLabel?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 220, damping: 18, mass: 0.6 });
  const sy = useSpring(y, { stiffness: 220, damping: 18, mass: 0.6 });

  const handle = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const dx = e.clientX - (r.left + r.width / 2);
    const dy = e.clientY - (r.top + r.height / 2);
    x.set(dx * strength);
    y.set(dy * strength);
  };
  const reset = () => {
    x.set(0);
    y.set(0);
  };

  const base =
    "magnetic group inline-flex items-center gap-3 px-7 h-14 text-sm uppercase tracking-[0.18em] font-medium rounded-[2px] transition-colors duration-300 cursor-none";
  const styles =
    variant === "primary"
      ? "bg-[var(--color-orange)] text-[var(--color-bg)] hover:bg-[var(--color-orange-soft)]"
      : "border border-[var(--color-sand)]/30 text-[var(--color-sand)] hover:bg-[var(--color-sand)]/5 hover:border-[var(--color-sand)]/70";

  const inner = (
    <motion.div
      ref={ref}
      onMouseMove={handle}
      onMouseLeave={reset}
      style={{ x: sx, y: sy }}
      className="magnetic"
      data-cursor="hover"
    >
      <span className={clsx(base, styles, className)}>
        {children}
        <span
          aria-hidden
          className="inline-block transition-transform duration-300 group-hover:translate-x-1"
        >
          →
        </span>
      </span>
    </motion.div>
  );

  if (href) {
    return (
      <a href={href} aria-label={ariaLabel}>
        {inner}
      </a>
    );
  }
  return (
    <button type={type} onClick={onClick} aria-label={ariaLabel}>
      {inner}
    </button>
  );
}

/* ---------------------------- Counter ------------------------------------ */
export function Counter({
  to,
  suffix = "",
  prefix = "",
  duration = 2,
  className,
}: {
  to: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let raf = 0;
    const start = performance.now();
    const ease = (t: number) => 1 - Math.pow(1 - t, 3);
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / (duration * 1000));
      setN(Math.round(to * ease(t)));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to, duration]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {n.toLocaleString("en-IN")}
      {suffix}
    </span>
  );
}

/* ------------------ Parallax wrapper using useScroll --------------------- */
export function Parallax({
  children,
  speed = 0.4,
  className,
}: {
  children: ReactNode;
  speed?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [
    `${speed * 100}px`,
    `${-speed * 100}px`,
  ]);
  return (
    <div ref={ref} className={clsx("relative overflow-hidden", className)}>
      <motion.div style={{ y }} className="h-full w-full will-change-transform">
        {children}
      </motion.div>
    </div>
  );
}

/* ---------------- Image with clip-path shutter reveal -------------------- */
export function ShutterImage({
  src,
  alt,
  width,
  height,
  fill,
  sizes,
  priority,
  className,
  imageClassName,
  blurDataURL,
  delay = 0,
  ...rest
}: {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  fill?: boolean;
  sizes?: string;
  priority?: boolean;
  className?: string;
  imageClassName?: string;
  blurDataURL?: string;
  delay?: number;
} & Partial<ImageProps>) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });
  const hasPosition = /\b(absolute|fixed|sticky|relative)\b/.test(
    className ?? ""
  );
  return (
    <div
      ref={ref}
      className={clsx(!hasPosition && "relative", "overflow-hidden", className)}
    >
      <motion.div
        className="absolute inset-0 z-10 bg-[var(--color-orange)] origin-left"
        initial={{ scaleX: 1 }}
        animate={inView ? { scaleX: 0 } : { scaleX: 1 }}
        transition={{
          duration: 1.1,
          ease: [0.7, 0, 0.2, 1],
          delay: delay + 0.15,
        }}
        style={{ transformOrigin: "right center" }}
      />
      <motion.div
        className="absolute inset-0 z-20 bg-[var(--color-bg)] origin-right"
        initial={{ scaleX: 1 }}
        animate={inView ? { scaleX: 0 } : { scaleX: 1 }}
        transition={{
          duration: 1.1,
          ease: [0.7, 0, 0.2, 1],
          delay,
        }}
        style={{ transformOrigin: "right center" }}
      />
      {fill ? (
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          placeholder={blurDataURL ? "blur" : undefined}
          blurDataURL={blurDataURL}
          className={clsx("object-cover", imageClassName)}
          {...rest}
        />
      ) : (
        <Image
          src={src}
          alt={alt}
          width={width!}
          height={height!}
          sizes={sizes}
          priority={priority}
          placeholder={blurDataURL ? "blur" : undefined}
          blurDataURL={blurDataURL}
          className={imageClassName}
          {...rest}
        />
      )}
    </div>
  );
}

/* ------------ Hook to expose progress for a section (optional) ----------- */
export function useSectionProgress(): [
  React.RefObject<HTMLDivElement | null>,
  MotionValue<number>
] {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  return [ref, scrollYProgress];
}

/* ---------- Trigger an arbitrary callback when element enters ----------- */
export function useInViewOnce(amount: number = 0.3) {
  const ref = useRef<HTMLElement | null>(null);
  const controls = useAnimation();
  const inView = useInView(ref as React.RefObject<Element>, {
    once: true,
    amount,
  });
  useEffect(() => {
    if (inView) controls.start("show");
  }, [inView, controls]);
  return { ref, controls, inView };
}
