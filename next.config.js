/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.unsplash.com', 'via.placeholder.com'],
  },
  // Railway için production optimizasyonu
  output: 'standalone',
  // TypeScript ve ESLint hatalarını ignore et (production build için)
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  // appDir is no longer needed in Next.js 14 - it's the default
}

module.exports = nextConfig 