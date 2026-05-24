import type { Metadata, Viewport } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "./components/SmoothScroll";
import { CustomCursor } from "./components/CustomCursor";
import { Preloader } from "./components/Preloader";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "600", "700", "900"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#1C1A17",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://tiruinfra.com"),
  title: {
    default: "Tiruinfra — Turnkey Infrastructure. Delivered.",
    template: "%s · Tiruinfra",
  },
  description:
    "Tiruinfra is a turnkey civil and structural construction company. From blueprint to handover — we deliver complete infrastructure with precision and accountability.",
  keywords: [
    "turnkey construction",
    "civil construction India",
    "structural engineering",
    "infrastructure development",
    "industrial sheds",
    "project management",
    "Tiruinfra",
  ],
  authors: [{ name: "Tiruinfra" }],
  openGraph: {
    type: "website",
    title: "Tiruinfra — Turnkey Infrastructure. Delivered.",
    description:
      "Civil and structural construction, project management and turnkey delivery — built with precision in India.",
    url: "https://tiruinfra.com",
    siteName: "Tiruinfra",
    images: [{ url: "/images/image2.webp", width: 1920, height: 1280 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tiruinfra — Turnkey Infrastructure. Delivered.",
    description:
      "Turnkey civil and structural construction. Built with precision.",
    images: ["/images/image2.webp"],
  },
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Tiruinfra",
  image: "https://tiruinfra.com/images/image2.webp",
  url: "https://tiruinfra.com",
  telephone: "+91-00-0000-0000",
  description:
    "Turnkey civil and structural construction company delivering pan-India infrastructure projects.",
  address: { "@type": "PostalAddress", addressCountry: "IN" },
  areaServed: "IN",
  sameAs: [],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable}`}
      suppressHydrationWarning
    >
      <body className="bg-[var(--color-bg)] text-[var(--color-text)] min-h-screen overflow-x-hidden">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessJsonLd),
          }}
        />
        <Preloader />
        <CustomCursor />
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
