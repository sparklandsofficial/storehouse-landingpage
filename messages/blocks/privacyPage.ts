/** 隱私權頁外殼（目錄、按鈕、meta）；正文見 `components/legal/privacy/PrivacyDocZhTW.tsx`（全語系一律繁體法律用語，避免翻譯誤差） */
const zhTW = {
  metaTitle: "隱私權政策 | Spark Space 星域智空間",
  kicker: "法律條款",
  h1: "隱私權政策",
  intro: "本政策說明星域智慧科技股份有限公司如何蒐集、處理、利用及保護您使用 Spark Space 服務時的個人資料。",
  lastUpdated: "最後更新：2026 年 3 月 26 日",
  linkTerms: "查看服務條款",
  tocTitle: "目錄",
  tocItems: [
    "1. 資料蒐集",
    "2. 資料使用",
    "3. 資料保護",
    "4. 資料分享",
    "5. 門禁與監控",
    "6. 資料保存期限",
    "7. 您的權利",
    "8. Cookie 政策",
    "9. 未成年人保護",
    "10. 政策更新",
    "11. 聯絡我們",
  ],
  footerTerms: "查看服務條款",
  footerHome: "回到首頁",
  footerFaq: "常見問題",
} as const;

export const privacyPage = {
  "zh-TW": zhTW,
  /** 與 zh-TW 相同：法律頁面不作簡體／英文翻譯 */
  "zh-CN": zhTW,
  en: zhTW,
} as const;
