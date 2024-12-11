/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
      return [
        {
          source: '/old_site/:path*',
          destination: '/old_site/:path*',
        },
      ];
    },
  };
  
  export default nextConfig;