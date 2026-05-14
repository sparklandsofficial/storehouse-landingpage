/** 服務條款頁外殼；正文見 `components/legal/terms/TermsDocZhTW.tsx`（全語系一律繁體法律用語） */
const zhTW = {
  metaTitle: "服務條款 | Spark Space 星域智空間",
  kicker: "法律條款",
  h1: "服務條款",
  intro: "本條款規範您使用 Spark Space 星域智空間倉儲服務及相關 APP 的權利義務。使用本服務即表示您同意以下全部條款。",
  lastUpdated: "最後更新：2026 年 3 月 26 日",
  linkPrivacy: "查看隱私權政策",
  tocTitle: "目錄",
  tocItems: [
    "1. 服務使用",
    "2. 帳號責任",
    "3. 使用期間與費用",
    "4. 租金與滯納金",
    "5. 退租與提前終止",
    "6. 使用限制",
    "7. 禁止存放物品",
    "8. 危險負擔",
    "9. 違約處罰",
    "10. 免責聲明",
    "11. 知識產權",
    "12. 服務變更",
    "13. 條款變更",
    "14. 準據法與管轄",
    "15. 聯絡我們",
  ],
  footerPrivacy: "查看隱私權政策",
  footerHome: "回到首頁",
  footerFaq: "常見問題",
} as const;

export const termsPage = {
  "zh-TW": zhTW,
  "zh-CN": zhTW,
  en: zhTW,
} as const;
