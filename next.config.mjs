/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'placehold.co',
            pathname: '**',
          },
          {
            protocol: 'https',
            hostname: 'hebbkx1anhila5yf.public.blob.vercel-storage.com',
            pathname: '**',
          },
        ],
      },
};

export default nextConfig;
