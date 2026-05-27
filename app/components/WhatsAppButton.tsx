"use client";

import { motion } from "motion/react";

export function WhatsAppButton({
  phone,
  message = "",
}: {
  phone: string;
  message?: string;
}) {
  const href = `https://wa.me/${phone}${
    message ? `?text=${encodeURIComponent(message)}` : ""
  }`;

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Tiruinfra on WhatsApp"
      data-cursor="hover"
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: 3.2, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ scale: 1.06 }}
      whileTap={{ scale: 0.96 }}
      className="fixed bottom-6 right-6 lg:bottom-8 lg:right-8 z-[60] group inline-flex h-14 w-14 lg:h-16 lg:w-16 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_12px_40px_-8px_rgba(37,211,102,0.55)] cursor-none"
    >
      <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-60 animate-ping pointer-events-none" />
      <span className="absolute inset-0 rounded-full ring-1 ring-white/30 pointer-events-none" />
      <svg
        viewBox="0 0 32 32"
        width="26"
        height="26"
        fill="currentColor"
        className="relative z-10"
        aria-hidden
      >
        <path d="M19.11 17.21c-.29-.15-1.7-.84-1.96-.94-.26-.1-.45-.15-.65.15-.19.29-.74.94-.91 1.13-.17.19-.34.22-.62.07-.29-.15-1.22-.45-2.32-1.43-.86-.77-1.43-1.71-1.6-2-.17-.29-.02-.45.13-.6.13-.13.29-.34.43-.51.14-.17.19-.29.29-.48.09-.19.05-.36-.02-.51-.07-.15-.65-1.56-.89-2.13-.23-.56-.47-.49-.65-.5l-.55-.01c-.19 0-.51.07-.78.36-.27.29-1.02 1-1.02 2.43 0 1.43 1.04 2.81 1.19 3.01.15.19 2.05 3.13 4.97 4.39.69.3 1.24.48 1.66.61.7.22 1.34.19 1.85.12.56-.08 1.7-.69 1.94-1.36.24-.67.24-1.25.17-1.36-.07-.12-.26-.19-.55-.34zM16.02 5.33c-5.9 0-10.69 4.79-10.69 10.69 0 1.88.49 3.72 1.43 5.34l-1.52 5.55 5.69-1.49a10.66 10.66 0 0 0 5.08 1.29h.01c5.9 0 10.69-4.79 10.69-10.69s-4.8-10.69-10.69-10.69zm0 19.6h-.01a8.88 8.88 0 0 1-4.52-1.24l-.32-.19-3.38.89.9-3.29-.21-.34a8.86 8.86 0 0 1-1.36-4.74c0-4.9 3.99-8.89 8.9-8.89 2.38 0 4.61.93 6.29 2.61a8.84 8.84 0 0 1 2.6 6.29c0 4.9-3.99 8.9-8.9 8.9z" />
      </svg>
      <span className="pointer-events-none absolute right-[calc(100%+12px)] top-1/2 -translate-y-1/2 whitespace-nowrap rounded-[2px] bg-[var(--color-bg)] text-[var(--color-text)] border border-[var(--color-border)] px-3 py-1.5 text-[11px] uppercase tracking-[0.18em] opacity-0 translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
        Chat on WhatsApp
      </span>
    </motion.a>
  );
}
