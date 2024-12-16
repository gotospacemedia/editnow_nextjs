import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.vimeocdn.com"
      },
      {
        protocol: "https",
        hostname: "cdn.prod.website-files.com"
      }
    ]
  }
};

export default nextConfig;
