/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    serverComponentsExternalPackages: ["mongoose"],
  },
  images: {
    domains: ['image.tmdb.org', 'fakeimg.pl'],
  },
};

export default nextConfig;