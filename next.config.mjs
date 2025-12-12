/** @type {import("next").NextConfig} */
const nextConfig = {
  transpilePackages: ["reactstrap", "aos"],
  reactStrictMode: true,
  sassOptions: {
    silenceDeprecations: ["legacy-js-api", "import", "global-builtin", "color-functions", "if-function"],
    quietDeps: true,
  },
};

export default nextConfig;
