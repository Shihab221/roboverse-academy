import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: '/arduino', destination: '/lessons', permanent: false },
      { source: '/arduino/lessons/:slug', destination: '/lessons/arduino/:slug', permanent: true },
      { source: '/esp32', destination: '/lessons', permanent: false },
      { source: '/esp32/lessons/:slug', destination: '/lessons/esp32/:slug', permanent: true },
      { source: '/raspberrypi', destination: '/lessons', permanent: false },
      {
        source: '/raspberrypi/lessons/:slug',
        destination: '/lessons/raspberrypi/:slug',
        permanent: true,
      },
    ]
  },
};

export default nextConfig;
