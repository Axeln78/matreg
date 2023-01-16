/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true, // Recommended for the `pages` directory, default in `app`.
  swcMinify: true,
  productionBrowserSourceMaps: true,
  images: {
    domains: [],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  compiler: {
    styledComponents: true,
  },
  experimental: {
    // Required:
    appDir: true,
  },
};

module.exports = nextConfig;
