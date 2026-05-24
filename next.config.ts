import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Move it to the root level like this:
  allowedDevOrigins: ['192.168.29.187'],

  // Any other configs you have...
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
};

export default nextConfig;
