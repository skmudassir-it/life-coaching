import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable React Compiler for automatic memoization
  reactCompiler: true,

  // Image optimization
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },

  // Security headers
  headers: async () => [
    {
      source: "/(.*)",
      headers: [
        {
          key: "X-Frame-Options",
          value: "DENY",
        },
        {
          key: "X-Content-Type-Options",
          value: "nosniff",
        },
        {
          key: "Referrer-Policy",
          value: "strict-origin-when-cross-origin",
        },
        {
          key: "Permissions-Policy",
          value:
            "camera=(), microphone=(), geolocation=(), interest-cohort=()",
        },
      ],
    },
  ],

  // Redirects
  redirects: async () => [
    {
      source: "/home",
      destination: "/",
      permanent: true,
    },
    {
      source: "/coaching",
      destination: "/services",
      permanent: true,
    },
    {
      source: "/book",
      destination: "/contact",
      permanent: true,
    },
    {
      source: "/discovery-call",
      destination: "/contact",
      permanent: true,
    },
    {
      source: "/pricing",
      destination: "/services",
      permanent: true,
    },
  ],

  // Compress responses
  compress: true,

  // Enable React strict mode
  reactStrictMode: true,

  // Trailing slash configuration
  trailingSlash: false,
};

export default nextConfig;
