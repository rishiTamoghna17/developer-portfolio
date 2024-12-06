/* eslint-disable import/no-extraneous-dependencies, import/extensions */
import withBundleAnalyzer from "@next/bundle-analyzer";

const bundleAnalyzer = withBundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
});

/** @type {import('next').NextConfig} */
export default bundleAnalyzer({
  eslint: {
    dirs: ["."],
  },
  swcMinify: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.pexels.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "firebasestorage.googleapis.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "ik.imagekit.io",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "merriam-webster.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
  poweredByHeader: false,
  reactStrictMode: true,

  async redirects() {
    return [
      {
        source: "/",
        destination: "/home",
        permanent: true,
      },
      {
        source: "/about",
        destination: "/home",
        permanent: true,
      },
      {
        source: "/blog",
        destination: "/home",
        permanent: true,
      },
      // {
      //   source: '/contact',
      //   destination: '/home',
      //   permanent: true,
      // },
    ];
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    // Disable TypeScript type checking during builds
    ignoreBuildErrors: true,
  },
  webpack: (config) => {
    // config.externals is needed to resolve the following errors:
    // Module not found: Can't resolve 'bufferutil'
    // Module not found: Can't resolve 'utf-8-validate'
    config.externals.push({
      bufferutil: "bufferutil",
      "utf-8-validate": "utf-8-validate",
    });

    return config;
  },
});