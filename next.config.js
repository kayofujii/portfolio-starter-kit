/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/development/robotics-b2b-commerce',
        destination: '/design/robotics-b2b-commerce',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
