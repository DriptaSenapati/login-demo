const withPWA = require("next-pwa");

const isProd = process.env.NODE_ENV === 'production'
/** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
// }

// module.exports = nextConfig
module.exports = withPWA({
  pwa: {
    dest: "public",
    register: true,
    skipWaiting: true,
    // disable: process.env.NODE_ENV === "development",
  },
  reactStrictMode: true,
  experimental: {
    images: {
      unoptimized: true,
    },
  },
  assetPrefix: isProd ? '/logindemo/' : '',
  basePath: isProd ? '/logindemo' : '',
});