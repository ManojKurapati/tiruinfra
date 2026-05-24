"use client";

export function Footer() {
  return (
    <footer className="relative border-t border-[var(--color-orange)]/40 bg-[var(--color-bg)] noise-overlay">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-10 py-16 lg:py-20">
        <div className="grid lg:grid-cols-[1.4fr_1fr_1fr_1fr] gap-10 lg:gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3">
              <span className="h-3 w-3 bg-[var(--color-orange)]" />
              <span className="font-display text-2xl tracking-wide text-[var(--color-sand)]">
                Tiruinfra
              </span>
            </div>
            <p className="mt-5 text-[15px] text-[var(--color-muted)] max-w-[320px] leading-relaxed">
              Turnkey Infrastructure. Delivered.
            </p>
            <p className="mt-3 text-[13px] text-[var(--color-muted)]/70 max-w-[360px]">
              Civil and structural construction across India — engineered in
              house, executed by us, accountable to you.
            </p>
          </div>

          <FooterColumn
            title="Company"
            links={[
              { label: "About", href: "#about" },
              { label: "Services", href: "#services" },
              { label: "Projects", href: "#projects" },
              { label: "Why Us", href: "#why" },
            ]}
          />
          <FooterColumn
            title="Services"
            links={[
              { label: "Civil & Structural", href: "#services" },
              { label: "Turnkey Delivery", href: "#services" },
              { label: "Infrastructure", href: "#services" },
              { label: "Retrofit", href: "#services" },
            ]}
          />
          <FooterColumn
            title="Connect"
            links={[
              { label: "Get a Quote", href: "#contact" },
              { label: "Careers", href: "#contact" },
              { label: "LinkedIn", href: "#" },
              { label: "YouTube", href: "#" },
            ]}
          />
        </div>

        {/* Certifications row */}
        <div className="mt-14 pt-8 border-t border-white/5 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <Badge>ISO 9001</Badge>
            <Badge>ISO 45001</Badge>
            <Badge>GST Registered</Badge>
          </div>
          <div className="flex items-center gap-4">
            <SocialIcon label="LinkedIn">
              <path d="M19 3A2 2 0 0 1 21 5V19A2 2 0 0 1 19 21H5A2 2 0 0 1 3 19V5A2 2 0 0 1 5 3H19M18.5 18.5V13.2A3.26 3.26 0 0 0 15.24 9.94C14.39 9.94 13.4 10.46 12.92 11.24V10.13H10.13V18.5H12.92V13.57C12.92 12.8 13.54 12.17 14.31 12.17A1.4 1.4 0 0 1 15.71 13.57V18.5H18.5M6.88 8.56A1.68 1.68 0 0 0 8.56 6.88C8.56 5.95 7.81 5.19 6.88 5.19A1.69 1.69 0 0 0 5.19 6.88C5.19 7.81 5.95 8.56 6.88 8.56M8.27 18.5V10.13H5.5V18.5H8.27Z" />
            </SocialIcon>
            <SocialIcon label="YouTube">
              <path d="M10 15L15.19 12L10 9V15M21.56 7.17C21.69 7.64 21.78 8.27 21.84 9.07C21.91 9.87 21.94 10.56 21.94 11.16L22 12C22 14.19 21.84 15.8 21.56 16.83C21.31 17.73 20.73 18.31 19.83 18.56C19.36 18.69 18.5 18.78 17.18 18.84C15.88 18.91 14.69 18.94 13.59 18.94L12 19C7.81 19 5.2 18.84 4.17 18.56C3.27 18.31 2.69 17.73 2.44 16.83C2.31 16.36 2.22 15.73 2.16 14.93C2.09 14.13 2.06 13.44 2.06 12.84L2 12C2 9.81 2.16 8.2 2.44 7.17C2.69 6.27 3.27 5.69 4.17 5.44C4.64 5.31 5.5 5.22 6.82 5.16C8.12 5.09 9.31 5.06 10.41 5.06L12 5C16.19 5 18.8 5.16 19.83 5.44C20.73 5.69 21.31 6.27 21.56 7.17Z" />
            </SocialIcon>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-[12px] text-[var(--color-muted)]">
          <span>© {new Date().getFullYear()} Tiruinfra. All rights reserved.</span>
          <span className="flex items-center gap-2">
            <span className="h-1 w-1 rounded-full bg-[var(--color-orange)]" />
            Built with precision in India
          </span>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div>
      <h4 className="eyebrow text-[var(--color-orange)] mb-5">{title}</h4>
      <ul className="flex flex-col gap-3">
        {links.map((l) => (
          <li key={l.label}>
            <a
              href={l.href}
              className="text-[14px] text-[var(--color-sand)]/85 hover:text-[var(--color-orange)] transition-colors duration-300 cursor-none"
              data-cursor="hover"
            >
              {l.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center px-3 py-1.5 text-[10px] uppercase tracking-[0.18em] border border-[var(--color-orange)]/40 text-[var(--color-sand)]">
      {children}
    </span>
  );
}

function SocialIcon({
  children,
  label,
}: {
  children: React.ReactNode;
  label: string;
}) {
  return (
    <a
      href="#"
      aria-label={label}
      className="h-10 w-10 grid place-items-center border border-white/10 hover:border-[var(--color-orange)] text-[var(--color-sand)]/80 hover:text-[var(--color-orange)] transition-colors duration-300 cursor-none"
      data-cursor="hover"
    >
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        {children}
      </svg>
    </a>
  );
}
