/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['cdn.sanity.io'], // Add this if you're using Sanity images
  },
  // Enable React strict mode for better development experience
  reactStrictMode: true,
};

export default nextConfig;
