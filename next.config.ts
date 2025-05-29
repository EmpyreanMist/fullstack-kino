/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['catalog.cinema-api.com', 'image.tmdb.org', 'freefrontend.dev'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'assets.example.com',
        pathname: '/account123/**',
      },
    ],
  },
};

module.exports = nextConfig;
