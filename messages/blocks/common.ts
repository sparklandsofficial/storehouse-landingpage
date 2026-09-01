/** 全站 metadata / nav / footer — 繁 / 简 / 英 */
const zhTW = {
  metadata: {
    title: "星域智空間 | 您的收納小管家",
    description: "星域智空間，您的收納小管家",
  },
  nav: {
    pricing: "倉位方案",
    process: "租倉流程",
    locations: "延吉店",
    faq: "常見問題",
    ctaRent: "立即租倉",
    b2b: "商務合作",
    b2bMenu: {
      market: "時機",
      traction: "實績",
      system: "系統",
      positioning: "定位",
      moat: "護城河",
      partnership: "合作",
      roadmap: "藍圖",
    },
    logoAlt: "Spark Space 星域智空間",
    lang: { zhTW: "繁體中文", zhCN: "簡體中文", en: "English" },
    openMenu: "開啟選單",
    closeMenu: "關閉選單",
    language: "語言",
    menuTitle: "網站選單",
  },
  footer: {
    tagline: "台北松山區智能倉儲，全程手機操作，24 小時進出。",
    logoAlt: "Spark Space 星域智空間",
    sectionService: "租倉服務",
    sectionSupport: "支援",
    sectionApp: "下載 APP",
    pricingSpecs: "倉位規格與方案",
    processApp: "租倉流程 & APP",
    locationYanji: "台北延吉店",
    faq: "常見問題",
    lineSupport: "LINE 客服",
    partners: "加盟合作",
    privacy: "隱私權條款",
    terms: "服務條款",
    copyright:
      "© 2026 Sparklands Tech CO., LTD.星域智慧科技股份有限公司. ALL RIGHTS RESERVED. · 110 台北市信義區信義路五段7號37樓",
  },
} as const;

const zhCN = {
  metadata: {
    title: "星域智空间 | 您的收纳小管家",
    description: "星域智空间，您的收纳小管家",
  },
  nav: {
    pricing: "仓位方案",
    process: "租仓流程",
    locations: "延吉店",
    faq: "常见问题",
    ctaRent: "立即租仓",
    b2b: "商务合作",
    b2bMenu: {
      market: "时机",
      traction: "实绩",
      system: "系统",
      positioning: "定位",
      moat: "护城河",
      partnership: "合作",
      roadmap: "蓝图",
    },
    logoAlt: "Spark Space 星域智空间",
    lang: { zhTW: "繁體中文", zhCN: "簡體中文", en: "English" },
    openMenu: "打开菜单",
    closeMenu: "关闭菜单",
    language: "语言",
    menuTitle: "网站菜单",
  },
  footer: {
    tagline: "台北松山区智能仓储，全程手机操作，24 小时进出。",
    logoAlt: "Spark Space 星域智空间",
    sectionService: "租仓服务",
    sectionSupport: "支持",
    sectionApp: "下载 APP",
    pricingSpecs: "仓位规格与方案",
    processApp: "租仓流程 & APP",
    locationYanji: "台北延吉店",
    faq: "常见问题",
    lineSupport: "LINE 客服",
    partners: "加盟合作",
    privacy: "隐私条款",
    terms: "服务条款",
    copyright:
      "© 2026 Sparklands Tech CO., LTD.星域智慧科技股份有限公司. ALL RIGHTS RESERVED. · 110 台北市信义区信义路五段7号37楼",
  },
} as const;

const en = {
  metadata: {
    title: "Spark Space | Your storage concierge",
    description:
      "Smart self-storage in Taipei Songshan—rent, access, and pay from your phone, 24/7.",
  },
  nav: {
    pricing: "Plans",
    process: "How it works",
    locations: "Yanji store",
    faq: "FAQ",
    ctaRent: "Rent now",
    b2b: "Business",
    b2bMenu: {
      market: "Why Now",
      traction: "Traction",
      system: "System",
      positioning: "Position",
      moat: "Moat",
      partnership: "Partnership",
      roadmap: "Roadmap",
    },
    logoAlt: "Spark Space",
    lang: { zhTW: "繁體中文", zhCN: "簡體中文", en: "English" },
    openMenu: "Open menu",
    closeMenu: "Close menu",
    language: "Language",
    menuTitle: "Site menu",
  },
  footer: {
    tagline: "Smart storage in Taipei Songshan—fully mobile, 24/7 access.",
    logoAlt: "Spark Space",
    sectionService: "Storage",
    sectionSupport: "Support",
    sectionApp: "Download app",
    pricingSpecs: "Unit sizes & plans",
    processApp: "Rental flow & app",
    locationYanji: "Taipei Yanji store",
    faq: "FAQ",
    lineSupport: "LINE support",
    partners: "Partnerships",
    privacy: "Privacy",
    terms: "Terms of service",
    copyright:
      "© 2026 Sparklands Tech CO., LTD. ALL RIGHTS RESERVED. · 37F, No. 7, Sec. 5, Xinyi Rd., Xinyi Dist., Taipei 110",
  },
} as const;

export const common = {
  "zh-TW": zhTW,
  "zh-CN": zhCN,
  en,
} as const;

export type AppLocale = keyof typeof common;

export function isAppLocale(s: string): s is AppLocale {
  return s === "zh-TW" || s === "zh-CN" || s === "en";
}
