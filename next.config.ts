import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  reactStrictMode: true,
  productionBrowserSourceMaps: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ccfkoyzoakztqtsfcelt.supabase.co'
      }
    ]
  }
}

export default nextConfig
