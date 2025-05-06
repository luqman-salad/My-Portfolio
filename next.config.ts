import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  /* config options here */
  
  images: {
    domains: ["cdn.sanity.io"],

  },
};

export default nextConfig;
