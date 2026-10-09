import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/programs/vip",
        destination: "/programs/collective",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
