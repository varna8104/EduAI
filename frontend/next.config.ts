import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  trailingSlash: true,
  generateEtags: false,
  poweredByHeader: false,
  compress: true,
  
  // Handle environment variables
  env: {
    NEXT_PUBLIC_GROQ_API_KEY: process.env.NEXT_PUBLIC_GROQ_API_KEY,
  },

  // Remove API rewrites for direct Vercel deployment
  // The frontend will call Groq API directly without backend

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
