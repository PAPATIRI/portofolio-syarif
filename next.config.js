/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["blog.zanccode.site"],
  },
  experimental: {
    appDir: true,
  },
};

module.exports = nextConfig;
