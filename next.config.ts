import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  // Fully static output — works on GitHub Pages, Vercel, S3, anywhere.
  output: "export",

  // Custom domain serves at the root, so basePath and assetPrefix are no longer needed
  basePath: "",
  assetPrefix: "",

  // Keep this empty string so client components referencing it don't break
  env: {
    NEXT_PUBLIC_BASE_PATH: "",
  },

  // next/image's optimization endpoint doesn't exist in a static export.
  images: {
    unoptimized: true,
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1440, 1920],
  },

  trailingSlash: true,

  turbopack: {
    root: path.resolve(__dirname),
  },
};

export default nextConfig;
