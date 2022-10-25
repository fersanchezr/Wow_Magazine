/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["bucket.somosohlala.com.ar"],
  },
  compress: true,
};

module.exports = nextConfig;
