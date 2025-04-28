import type { NextConfig } from "next";

const repoName = "shift_mind";

const nextConfig: NextConfig = {
  basePath: `/${repoName}`,
  assetPrefix: `/${repoName}/`,
  output: "export",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
