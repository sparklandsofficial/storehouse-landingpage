import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./i18n/request.ts");

/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/app/gamescope/support",
        destination: "/app/gamescope/support.html",
      },
      {
        source: "/app/gamescope/privacy",
        destination: "/app/gamescope/privacy.html",
      },
    ];
  },
};

export default withNextIntl(nextConfig);
