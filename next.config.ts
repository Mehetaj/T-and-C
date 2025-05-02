import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.html$/,
      issuer: /node_modules\/@mapbox\/node-pre-gyp/,
      use: 'ignore-loader'
    });
    return config;
  }
};

export default nextConfig;
