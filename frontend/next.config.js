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
      {
        protocol: 'https',
        hostname: 'w3s.link',
        port: '',
        pathname: '**',
      },
    ],
  },
}

module.exports = nextConfig
