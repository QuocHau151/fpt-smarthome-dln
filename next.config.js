/** @type {import('next').NextConfig} */
const nextConfig = {
  eactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["lh3.googleusercontent.com"],
  },
};

module.exports = nextConfig;
