/** 分店詳情 `/branches/[id]` — 繁 / 简 / 英 */

const zhTW = {
  sizesHeroTitle: "倉庫尺寸",
  cabinetImageAlt: "倉庫尺寸圖",
  thModel: "型號",
  thHeight: "高",
  thWidth: "寬",
  thDepth: "深",
  thVolume: "材積",
  thMonthlyRent: "月租金",
  sizeFootnote: `上表尺寸因施工因素，可能會有正負5％之施工誤差。
尺寸範例：
・郵局包裹便利箱BOX3尺寸：長39.5 x 寬27.5 x 高23cm
・7-11交貨便寄件箱(大)：長35 x 寬30 x 高30cm
・一般通用大型紙箱：長45 x 寬30 x 高30cm
・半車3.5頓貨車載貨量：約110材積`,
  storeName: "台北延吉店",
  addrLabel: "地址：",
  addrValue: "台北市松山區延吉街7-1號B1（屈臣氏後方）",
  phoneLabel: "服務電話：",
  phoneValue: "(02)8177-7085",
  hoursLabel: "進出時間：",
  hoursValue: "24小時",
  lineCta: "可加 Line 聯繫客服",
  innovationTitle: "全台首創 24H 智能迷你倉",
  innovationAlt: "24H 智能迷你倉",
  galleryTitle: "環境照片",
  slideAlt: "台北延吉店",
  downloadAppTitle: "下載APP 一機完成",
} as const;

const zhCN = {
  sizesHeroTitle: "仓库尺寸",
  cabinetImageAlt: "仓库尺寸图",
  thModel: "型号",
  thHeight: "高",
  thWidth: "宽",
  thDepth: "深",
  thVolume: "材积",
  thMonthlyRent: "月租金",
  sizeFootnote: `上表尺寸因施工因素，可能会有正负5%的施工误差。
尺寸示例：
・邮局包裹便利箱BOX3尺寸：长39.5 x 宽27.5 x 高23cm
・7-11交货便寄件箱(大)：长35 x 宽30 x 高30cm
・一般通用大型纸箱：长45 x 宽30 x 高30cm
・半车3.5吨货车载货量：约110材积`,
  storeName: "台北延吉店",
  addrLabel: "地址：",
  addrValue: "台北市松山区延吉街7-1号B1（屈臣氏后方）",
  phoneLabel: "服务电话：",
  phoneValue: "(02)8177-7085",
  hoursLabel: "进出时间：",
  hoursValue: "24小时",
  lineCta: "可加 Line 联系客服",
  innovationTitle: "全台首创 24H 智能迷你仓",
  innovationAlt: "24H 智能迷你仓",
  galleryTitle: "环境照片",
  slideAlt: "台北延吉店",
  downloadAppTitle: "下载APP 一机完成",
} as const;

const en = {
  sizesHeroTitle: "Unit sizes",
  cabinetImageAlt: "Size diagram",
  thModel: "Model",
  thHeight: "H",
  thWidth: "W",
  thDepth: "D",
  thVolume: "Cu. ft.",
  thMonthlyRent: "Monthly rent",
  sizeFootnote: `Dimensions may vary by ±5% after build-out.
Reference objects:
・Chunghwa Post BOX3: 39.5 × 27.5 × 23 cm
・7-ELEVEN large shipping box: 35 × 30 × 30 cm
・Typical large carton: 45 × 30 × 30 cm
・3.5t truck load ≈ 110 cu. ft.`,
  storeName: "Yanji, Taipei",
  addrLabel: "Address:",
  addrValue: "B1, No. 7-1, Yanji St., Songshan Dist., Taipei (behind Watsons)",
  phoneLabel: "Phone:",
  phoneValue: "(02) 8177-7085",
  hoursLabel: "Access:",
  hoursValue: "24/7",
  lineCta: "Chat with us on LINE",
  innovationTitle: "24/7 smart self-storage",
  innovationAlt: "24/7 smart mini storage",
  galleryTitle: "Site photos",
  slideAlt: "Yanji Taipei store",
  downloadAppTitle: "Get the app",
} as const;

export const branchDetailPage = {
  "zh-TW": zhTW,
  "zh-CN": zhCN,
  en,
} as const;
