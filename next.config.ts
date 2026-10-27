import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  agentRules: false,
  images: {
    unoptimized: true,
  },
  outputFileTracingIncludes: {
    "/[locale]/opengraph-image": ["./assets/**/*"],
  },
};

export default nextConfig;
