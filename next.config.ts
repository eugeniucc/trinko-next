import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
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
