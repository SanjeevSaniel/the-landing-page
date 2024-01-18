/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { hostname: 'media.licdn.com' },
      {
        hostname: 'img.icons8.com',
      },
    ],
  },
};

module.exports = nextConfig
