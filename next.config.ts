/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'media.istockphoto.com',
      },
      {
        hostname: 'i.ibb.co',
      },
      {
        hostname: 'www.usatoday.com',
      },
      {
        hostname: 'japannews.yomiuri.co.jp',
      },
    ],
  },
}

module.exports = nextConfig
