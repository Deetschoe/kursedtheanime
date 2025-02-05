/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'media.istockphoto.com',
      },
      {
        protocol: 'https',
        hostname: 'i.ibb.co',
      },
      {
        protocol: 'https',
        hostname: 'www.usatoday.com',
      },
      {
        protocol: 'https',
        hostname: 'japannews.yomiuri.co.jp',
      }
    ],
  },
  // Add these to help with build issues
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = nextConfig