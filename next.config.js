module.exports = {
  reactStrictMode: true,
  compress: true,
  poweredByHeader: false,
  images: {
    domains: [],
    formats: ['image/webp'],
    minimumCacheTTL: 60,
  },
  experimental: {
    optimizeCss: true,
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
};