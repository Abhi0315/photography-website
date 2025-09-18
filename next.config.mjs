/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/",
        destination: "/website",
      },
      {
        source: "/about",
        destination: "/website/about",
      },
      {
        source: "/portfolio",
        destination: "/website/portfolio",
      },
      {
        source: "/services",
        destination: "/website/services",
      },
      {
        source: "/contact",
        destination: "/website/contact",
      },
    ];
  },
};

export default nextConfig;
