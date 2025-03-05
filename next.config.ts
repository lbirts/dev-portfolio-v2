import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.simpleicons.org',
        port: '',
        pathname: '/**',
      },
    ],
    dangerouslyAllowSVG: true,
    formats: ["image/avif", "image/webp"],
  },
  i18n: {
    locales: ['en'],
    defaultLocale: 'en',
  },
  compiler: {
    styledComponents: true,
  }
};

export default nextConfig;
