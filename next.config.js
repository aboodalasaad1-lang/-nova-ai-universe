/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['localhost', 'nova-ai-universe.vercel.app'],
    remotePatterns: [
      { protocol: 'https', hostname: '**' },
    ],
  },
  webpack: (config) => {
    config.externals.push('canvas', 'jsdom');
    return config;
  },
}

module.exports = nextConfig
