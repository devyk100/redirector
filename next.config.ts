import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async redirects() {
    return [
      {
        source: '/',
        destination: 'https://othersite.com',
        permanent: true,
      },
      {
        source: '/1',
        destination: 'https://othersite.com/page-one',
        permanent: true,
      },
    ];
  },

};

export default nextConfig;
