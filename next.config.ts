import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  // 1. Enable static export (required for GitHub Pages)
  output: 'export', 

  // 2. Set the sub-path for GitHub Pages (e.g., /my-repo/)
  // If using a custom domain, set this to an empty string ''
  basePath: isProd ? '/Menu-Fast-Food/' : '',

  // 3. Ensure assets like CSS/JS use the correct path
  assetPrefix: isProd ? '/Menu-Fast-Food/' : '',

  reactStrictMode: true,
  trailingSlash: true, // Recommended for static hosting
  images: {
    unoptimized: true, // Required: GitHub Pages doesn't support Next.js image optimization
  },
};

export default nextConfig;
