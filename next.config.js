/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'fakestoreapi.com',
      'images.unsplash.com',
      'fastly.4sqi.net',
      'ss3.4sqi.net'
    ]
  },
  reactStrictMode: true
};

module.exports = nextConfig;
