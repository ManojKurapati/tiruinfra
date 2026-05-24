import type { NextConfig } from "next";
import path from "node:path";

const isGhPages = process.env.GITHUB_PAGES === "true";
const repo = "tiruinfra";
const basePath = isGhPages ? `/${repo}` : "";

const nextConfig: NextConfig = {
  // Fully static output — works on GitHub Pages, Vercel, S3, anywhere.
  output: "export",

  // GitHub Pages serves the site at /<repo>/. Vercel serves at /.
  ...(isGhPages
    ? { basePath, assetPrefix: `/${repo}/` }
    : {}),

  // Expose basePath to client components for public-asset URLs.
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
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
