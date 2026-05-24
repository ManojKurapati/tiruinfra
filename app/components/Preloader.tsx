"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";

export function Preloader() {
  const [done, setDone] = useState(false);

  useEffect(() => {
    document.body.classList.add("locked");
    const t = setTimeout(() => {
      setDone(true);
      document.body.classList.remove("locked");
    }, 2500);
    return () => {
      clearTimeout(t);
      document.body.classList.remove("locked");
    };
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[200] pointer-events-none"
          aria-hidden
          initial={false}
        >
          {/* Top half */}
          <motion.div
            className="absolute inset-x-0 top-0 h-1/2 bg-[var(--color-bg)] noise-overlay"
            initial={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.9, ease: [0.85, 0, 0.15, 1] }}
          />
          {/* Bottom half */}
          <motion.div
            className="absolute inset-x-0 bottom-0 h-1/2 bg-[var(--color-bg)] noise-overlay"
            initial={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ duration: 0.9, ease: [0.85, 0, 0.15, 1] }}
          />

          {/* Center content */}
          <motion.div
            className="absolute inset-0 grid place-items-center"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            <div className="flex flex-col items-center gap-6">
              <svg
                width="280"
                height="48"
                viewBox="0 0 280 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-label="Tiruinfra"
              >
                <motion.text
                  x="0"
                  y="36"
                  fill="#F5F0EA"
                  stroke="#FF6B2B"
                  strokeWidth="0.9"
                  style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: 700,
                    fontSize: 36,
                    letterSpacing: "0.02em",
                  }}
                  initial={{ fillOpacity: 0, strokeOpacity: 1 }}
                  animate={{ fillOpacity: 1, strokeOpacity: 0.6 }}
                  transition={{
                    fillOpacity: { delay: 1.4, duration: 0.6 },
                    strokeOpacity: { delay: 1.4, duration: 0.6 },
                  }}
                >
                  TIRUINFRA
                </motion.text>
              </svg>

              <div className="h-px w-64 overflow-hidden bg-white/10">
                <motion.div
                  className="h-full bg-[var(--color-orange)]"
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 2.2, ease: [0.16, 1, 0.3, 1] }}
                />
              </div>

              <span className="eyebrow text-[var(--color-muted)]">
                Loading · Civil & Structural
              </span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
