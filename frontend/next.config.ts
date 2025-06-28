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
    NEXT_PUBLIC_API_BASE_URL: process.env.NEXT_PUBLIC_API_BASE_URL || 
                             (process.env.NODE_ENV === 'production' 
                               ? 'https://your-backend-domain.herokuapp.com'  // Replace with your actual backend URL
                               : 'http://localhost:8000'),
    NEXT_PUBLIC_GROQ_API_KEY: process.env.NEXT_PUBLIC_GROQ_API_KEY,
  },

  // Rewrites for API calls
  async rewrites() {
    const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || 
                      (process.env.NODE_ENV === 'production' 
                        ? 'https://your-backend-domain.herokuapp.com'  // Replace with your actual backend URL
                        : 'http://localhost:8000');
    
    return [
      {
        source: '/api/:path*',
        destination: `${apiBaseUrl}/api/:path*`,
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
