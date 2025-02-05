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
    domains: ['media.istockphoto.com', 'i.ibb.co', 'www.usatoday.com', 'japannews.yomiuri.co.jp']
  },
}

module.exports = nextConfig