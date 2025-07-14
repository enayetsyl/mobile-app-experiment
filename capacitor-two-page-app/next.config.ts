import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    output: 'export',
  // optional: generate each route as folder/index.html
  trailingSlash: true,
};

export default nextConfig;
