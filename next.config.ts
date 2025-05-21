/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['catalog.cinema-api.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'image.tmdb.org',
      },
    ],
  },
};

module.exports = nextConfig;
