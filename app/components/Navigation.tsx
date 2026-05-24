"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import clsx from "clsx";
import { MagneticButton } from "./primitives";

const links = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Why Us", href: "#why" },
  { label: "Contact", href: "#contact" },
];

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={clsx(
          "fixed top-0 inset-x-0 z-50 transition-colors duration-500",
          scrolled ? "nav-frosted" : "bg-transparent"
        )}
      >
        <div className="mx-auto max-w-[1440px] px-6 lg:px-10 h-20 flex items-center justify-between">
          <a
            href="#hero"
            className="flex items-center gap-3 group cursor-none"
            data-cursor="hover"
            aria-label="Tiruinfra home"
          >
            <span className="block h-3 w-3 bg-[var(--color-orange)] transition-transform duration-500 group-hover:rotate-45" />
            <span className="font-display text-xl tracking-wide text-[var(--color-sand)]">
              Tiruinfra
            </span>
          </a>

          <nav className="hidden lg:flex items-center gap-9">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="eyebrow text-[var(--color-text)]/80 hover:text-[var(--color-sand)] relative transition-colors duration-300 cursor-none"
                data-cursor="hover"
              >
                {l.label}
                <span className="absolute -bottom-2 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-[var(--color-orange)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </a>
            ))}
          </nav>

          <div className="hidden lg:block">
            <MagneticButton href="#contact" variant="primary">
              Get a Quote
            </MagneticButton>
          </div>

          {/* Mobile burger */}
          <button
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden flex flex-col gap-1.5 p-2 cursor-none"
            aria-label="Toggle menu"
            data-cursor="hover"
          >
            <span
              className={clsx(
                "block h-px w-6 bg-[var(--color-sand)] transition-transform duration-400",
                open && "translate-y-[6px] rotate-45"
              )}
            />
            <span
              className={clsx(
                "block h-px w-6 bg-[var(--color-sand)] transition-opacity duration-300",
                open && "opacity-0"
              )}
            />
            <span
              className={clsx(
                "block h-px w-6 bg-[var(--color-sand)] transition-transform duration-400",
                open && "-translate-y-[6px] -rotate-45"
              )}
            />
          </button>
        </div>
      </header>

      {/* Mobile fullscreen menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-40 bg-[var(--color-bg)] noise-overlay lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            <div className="h-full flex flex-col justify-center px-8">
              <nav className="flex flex-col gap-6">
                {links.map((l, i) => (
                  <motion.a
                    key={l.href}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="font-display text-5xl text-[var(--color-sand)] hover:text-[var(--color-orange)] transition-colors"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: 0.1 + i * 0.08,
                      duration: 0.7,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                  >
                    {l.label}
                  </motion.a>
                ))}
              </nav>
              <motion.div
                className="mt-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.7 }}
              >
                <MagneticButton href="#contact" variant="primary">
                  Get a Quote
                </MagneticButton>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
