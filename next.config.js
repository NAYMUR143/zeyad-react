/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["res.cloudinary.com", "f.shgcdn.com"],
  },
};

module.exports = nextConfig;
