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
};

export default nextConfig;
