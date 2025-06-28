import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'standalone',
  trailingSlash: true,
  generateEtags: false,
  poweredByHeader: false,
  compress: true,
  
  // Handle environment variables
  env: {
    NEXT_PUBLIC_API_BASE_URL: process.env.NEXT_PUBLIC_API_BASE_URL,
    NEXT_PUBLIC_GROQ_API_KEY: process.env.NEXT_PUBLIC_GROQ_API_KEY,
  },

  // Rewrites for API calls
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: `${process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:8000'}/api/:path*`,
      },
    ];
  },

  // Handle 404 pages properly
  async redirects() {
    return [
      {
        source: '/api',
        destination: '/api/',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
