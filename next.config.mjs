/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  experimental: {
    optimizePackageImports: ['lucide-react'],
  },
  images: {
    domains: [
      'localhost',
      'successnow.ai',
      'www.successnow.ai',
      'images.unsplash.com',
      'via.placeholder.com',
    ],
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
    unoptimized: true,
  },
  async headers() {
    return [
      {
        source: '/_next/static/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/images/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ]
  },
  async redirects() {
    return [
      {
        source: '/autodealersnow',
        destination: '/industries/autodealers-now',
        permanent: true,
      },
      {
        source: '/chiropractorsnow',
        destination: '/industries/chiropractors-now',
        permanent: true,
      },
      {
        source: '/contractorsnow',
        destination: '/industries/contractors-now',
        permanent: true,
      },
      {
        source: '/dentistsnow',
        destination: '/industries/dentists-now',
        permanent: true,
      },
      {
        source: '/gymsnow',
        destination: '/industries/gyms-now',
        permanent: true,
      },
      {
        source: '/hvacnow',
        destination: '/industries/hvac-now',
        permanent: true,
      },
      {
        source: '/lawyersnow',
        destination: '/industries/lawyers-now',
        permanent: true,
      },
      {
        source: '/medspanow',
        destination: '/industries/medspa-now',
        permanent: true,
      },
      {
        source: '/mortgagenow',
        destination: '/industries/mortgage-now',
        permanent: true,
      },
      {
        source: '/plumbersnow',
        destination: '/industries/plumbers-now',
        permanent: true,
      },
      {
        source: '/realtornow',
        destination: '/industries/realtor-now',
        permanent: true,
      },
      {
        source: '/restaurantsnow',
        destination: '/industries/restaurants-now',
        permanent: true,
      },
      {
        source: '/roofersnow',
        destination: '/industries/roofers-now',
        permanent: true,
      },
      {
        source: '/solarnow',
        destination: '/industries/solar-now',
        permanent: true,
      },
    ]
  },
  async rewrites() {
    return [
      {
        source: '/sitemap.xml',
        destination: '/api/sitemap',
      },
    ]
  },
  compress: true,
  poweredByHeader: false,
  reactStrictMode: true,
  trailingSlash: false,
  generateEtags: false,
  httpAgentOptions: {
    keepAlive: true,
  },
}

export default nextConfig
