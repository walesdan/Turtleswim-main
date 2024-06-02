/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  optimizeFonts: false,
  images: {
    domains: ["images.unsplash.com", "images.pexels.com"],
  },
};
