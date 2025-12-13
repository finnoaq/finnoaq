/** @type {import('next').NextConfig} */
const nextConfig = {
  // export:false,
  // output: 'export',
  reactStrictMode: true,
  eslint: {
    dirs: ['src'], // Only run ESLint on the 'src' directory during production builds (next build)
    ignoreDuringBuilds: true,
  },
  // images: {
  //   unoptimized: true,
  // },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: "upgrade-insecure-requests; connect-src 'self' https://ai.finnoaq.com http: https:;"
          }
        ]
      }
    ]
  }
};

export default nextConfig;
