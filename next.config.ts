import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  reactStrictMode: true,
  images: {
    formats: ["image/avif", "image/webp"],
    qualities: [35, 40, 45, 50, 60, 75],
  },
};

export default nextConfig;
