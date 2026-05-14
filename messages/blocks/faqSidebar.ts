const zhTW = {
  tocTitle: "問題分類",
  rental: "租倉與流程",
  trust: "信任與保障",
  access: "進出與使用",
  billing: "費用與合約",
} as const;

const zhCN = {
  tocTitle: "问题分类",
  rental: "租仓与流程",
  trust: "信任与保障",
  access: "进出与使用",
  billing: "费用与合约",
} as const;

const en = {
  tocTitle: "Categories",
  rental: "Renting & process",
  trust: "Trust & safety",
  access: "Access & use",
  billing: "Billing & contract",
} as const;

export const faqSidebar = {
  "zh-TW": zhTW,
  "zh-CN": zhCN,
  en,
} as const;
