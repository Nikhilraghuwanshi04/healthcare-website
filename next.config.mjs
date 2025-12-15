/** @type {import('next').NextConfig} */
const nextConfig = {

  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  async rewrites() {
    return [
      {
        source: '/api/auth/:path*',
        destination: 'https://healthcare-website-backend-1.onrender.com/api/auth/:path*',
      },
    ]
  },
}

export default nextConfig
