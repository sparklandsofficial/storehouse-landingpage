/**
 * app/robots.ts — robots.txt 自動產生
 *
 * 允許所有 bot 抓取，並告知 sitemap 位置。
 * 排除 API routes、reset-password 等私人路徑。
 */

import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/api/",
          "/*/reset-password",
          "/*/paylink",
          "/paylink",
        ],
      },
    ],
    sitemap: "https://www.sparkspace.com.tw/sitemap.xml",
  };
}
