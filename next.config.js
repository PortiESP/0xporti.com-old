/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["i.gyazo.com", "cdn.jsdelivr.net", "yt3.googleusercontent.com"]
  },
  async redirects() {
    return [
      {
        source: '/api',
        destination: 'https://github.com/PortiESP/porti.dev/blob/main/public/api.md',
        permanent: true,
      },
      {
        source: '/',
        destination: '/blog',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
