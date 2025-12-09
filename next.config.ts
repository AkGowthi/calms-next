import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', // enables static HTML export
  distDir: 'out',
  images:{
    unoptimized: true
  }
};

export default nextConfig;
