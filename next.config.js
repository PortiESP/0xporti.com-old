/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  async redirects() {
    return [
      {
        source: '/api',
        destination: 'https://github.com/PortiESP/porti.dev/blob/main/public/api.md',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
