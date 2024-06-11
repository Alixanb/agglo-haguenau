const withPWA = require("next-pwa")({
  dest: "public",
  register: true,
  skipWaiting: true,
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.haguenau.fr",
      },
      {
        protocol: "https",
        hostname: "apps.tourisme-alsace.info",
      },
    ],
  },
};

module.exports = withPWA(nextConfig);
