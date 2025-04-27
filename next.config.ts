import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: false,  /* to avoid/tackle hydration error */
  images: {

    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
      
    ],

  },
};

export default nextConfig;
