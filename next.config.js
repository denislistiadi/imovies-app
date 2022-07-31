/** @type {import('next').NextConfig} */
const withPWA = require("next-pwa");

const nextConfig = withPWA({
  devIndicators: {
    buildActivity: false,
  },
  swcMinify: true,
  pwa: {
    dest: "public",
    register: true,
  },
  reactStrictMode: true,
  images: {
    domains: ["image.tmdb.org"],
  },
});

module.exports = nextConfig;
