import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  /* config options here */
        sassOptions: {
            includePaths: ['./src'],
            prependData: ` @import 'src/styles/main';`,
        },
};

export default nextConfig;
