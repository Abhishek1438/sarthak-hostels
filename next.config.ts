import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    localPatterns: [
      {
        pathname: '/hostel/**',
      },
    ],
  },
};

export default nextConfig;
