/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { isServer }) => {
    if (!isServer) {
      // Exclude the problematic module from being bundled on the client side
      config.externals.push('canvas');
    }
    config.module.rules.push({
      test: /\.node$/,
      use: 'node-loader'
    });
  //   config.resolve.alias = {
  //     ...config.resolve.alias,
  //     "sharp$": false,
  //     "onnxruntime-node$": false,
  // }
    return config;
  },
}

module.exports = nextConfig
