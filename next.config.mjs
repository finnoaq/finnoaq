/** @type {import('next').NextConfig} */
const nextConfig = {
  // export:false,
  // output: 'export',
  reactStrictMode: true,
  eslint: {
    dirs: ['pages', 'utils'], // Only run ESLint on the 'pages' and 'utils' directories during production builds (next build)
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
            value: "upgrade-insecure-requests; connect-src 'self' http://194.238.16.37:4000 https://194.238.16.37:4000 http: https:;"
          }
        ]
      }
    ]
  }
};

export default nextConfig;
