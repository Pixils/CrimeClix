/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*.r2.dev',
        port: '',
        pathname: '**',
      },
    ],
  },
}

module.exports = nextConfig
