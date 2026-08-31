/**
 * app/sitemap.ts — XML Sitemap 自動產生
 *
 * Next.js 在 build 時自動呼叫此函數，輸出 /sitemap.xml。
 * 每個頁面列出所有語系的 alternates，讓 Google 正確理解多語系結構。
 *
 * 新增頁面時，在 PAGES 陣列加入對應路徑即可。
 */

import type { MetadataRoute } from "next";

const BASE_URL = "https://www.sparkspace.com.tw";
const LOCALES  = ["zh-TW", "zh-CN", "en"] as const;

/** 所有公開頁面的路徑（不含 locale prefix） */
const PAGES = [
  "",           // 首頁
  "/about",
  "/branches",
  "/pricing",
  "/faq",
  "/process",
  "/partners",
  "/b2b",
  "/franchise",
  "/terms",
  "/privacy",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  for (const page of PAGES) {
    // 每個頁面產生一筆，包含所有語系的 alternates
    const alternates: Record<string, string> = {};
    for (const locale of LOCALES) {
      alternates[locale] = `${BASE_URL}/${locale}${page}`;
    }

    entries.push({
      url: `${BASE_URL}/zh-TW${page}`, // 主要 URL 用繁中版
      lastModified: new Date(),
      changeFrequency: page === "" ? "weekly" : "monthly",
      priority: page === "" ? 1.0 : 0.8,
      alternates: { languages: alternates },
    });
  }

  return entries;
}
