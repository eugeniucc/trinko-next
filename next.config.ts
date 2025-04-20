import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  output: 'standalone',
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
