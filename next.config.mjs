import {env} from './src/env.mjs';

/** @type {import('next').NextConfig} */
const nextConfig = {
  // skipTrailingSlashRedirect: true,
  // skipMiddlewareUrlNormalize: true,
  // async redirects() {
  //   return [
  //     {
  //       source: '/',
  //       destination: '/ecommerce',
  //       permanent: true,
  //     },
  //   ];
  // },
  eslint: {
    ignoreDuringBuilds: ["src/__generated__"],
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "randomuser.me",
        port: "",
        pathname: "/api/portraits/**",
      },
      {
        protocol: "https",
        hostname: "cloudflare-ipfs.com",
        port: "",
        pathname: "/ipfs/**",
      },
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
        port: "",
        pathname: "/u/**",
      },
      {
        protocol: "https",
        hostname: "picsum.photos",
        // port: '',
        // pathname: '/u/**',
      },
      {
        protocol: "https",
        hostname: "flagcdn.com",
        // port: '',
        // pathname: '/u/**',
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        // port: '',
        // pathname: '/u/**',
      },
      {
        protocol: "https",
        hostname: "s3.amazonaws.com",
        pathname: "/redqteam.com/isomorphic-furyroad/public/**",
      },
      {
        hostname: env.NEXT_PUBLIC_AWS_S3_FILE_HOST,
        protocol: "https",
      },
      {
        hostname:'placehold.co',
        protocol: "https",
      }
    ],
  },
};

export default nextConfig;
