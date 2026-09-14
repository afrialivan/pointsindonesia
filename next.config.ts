import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true, // Membuat struktur folder rapi (tentang-kami/index.html)

  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'i.pravatar.cc' },
    ],
    unoptimized: true,
  },
  allowedDevOrigins: ['192.168.1.9'],
};
export default nextConfig;