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
      {
        source: "/app/momentra/support",
        destination: "/app/momentra/support.html",
      },
      {
        source: "/app/momentra/privacy",
        destination: "/app/momentra/privacy.html",
      },
      {
        source: "/app/momentra/terms",
        destination: "/app/momentra/terms.html",
      },
    ];
  },
};

export default withNextIntl(nextConfig);
