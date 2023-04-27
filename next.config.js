/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH,
  basePath: process.env.NEXT_PUBLIC_BASE_PATH,
  reactStrictMode: true,
  swcMinify: true,
  optimizeFonts: true,
  experimental: {
    esmExternals: false,
  },
  env: {
    SERVER_URL: process.env.SERVER_URL,
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'arber.ua',
      },
    ],
    minimumCacheTTL: 1500000,
  },
}

module.exports = nextConfig
