import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
        sassOptions: {
            includePaths: ['./src'],
            prependData: ` @import 'src/styles/main';`,
        },
};

export default nextConfig;
