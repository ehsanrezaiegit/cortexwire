import type { NextConfig } from "next";
import { withContentCollections } from "@content-collections/next";
import path from "node:path";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
  },
  webpack: (config) => {
    config.resolve.alias["content-collections"] = path.resolve(
      process.cwd(),
      ".content-collections/generated",
    );
    return config;
  },
};

export default withContentCollections(nextConfig);
