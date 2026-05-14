/** 櫃位詳情 `/branches/[id]/cabinet/[cabinetId]` — 繁 / 简 / 英 */

const noticeTW =
  "（一）櫃內禁止存放下列物包含：\n1.任何形式的活物（包括植物）與任何形式的遺體（包括動物）。\n2.食物、易腐壞或影響公共衛生之物品。\n3.油品、溶劑、化工原料等易燃物品。\n4.炮竹、火藥、瓦斯、武器等易爆裂物品。\n5.化學品、輻射物、生化物、有毒廢料等危害公眾安全物品。\n6.任何發出異味、噪音、震動之物品。\n7.非法取得、法律禁止或有違公序良俗之物品。\n一旦發現違規物品，我們將立即終止合約。\n\n（二）簽約首月將收取二個月之保證金，並於退約時，經確認倉位原狀無損後，保證金會在十個工作日內全數返還客戶。\n\n（三）APP中尺寸資訊僅供參考，因人員施工原因，現場空間尺寸誤差值正負5%屬正常範疇。";

const noticeCN =
  "（一）柜内禁止存放下列物品：\n1.任何形式的活物（包括植物）与任何形式的遗体（包括动物）。\n2.食物、易腐坏或影响公共卫生之物品。\n3.油品、溶剂、化工原料等易燃物品。\n4.爆竹、火药、瓦斯、武器等易爆裂物品。\n5.化学品、辐射物、生化物、有毒废料等危害公众安全物品。\n6.任何发出异味、噪音、震动之物品。\n7.非法取得、法律禁止或有违公序良俗之物品。\n一旦发现违规物品，我们将立即终止合约。\n\n（二）签约首月将收取两个月之保证金，并于退约时，经确认仓位原状无损后，保证金会在十个工作日内全数返还客户。\n\n（三）APP 中尺寸信息仅供参考，因人员施工原因，现场空间尺寸误差值正负5%属正常范畴。";

const noticeEN =
  "(1) The following may not be stored inside a unit:\n1) Live animals or plants, or remains of any kind.\n2) Food or anything that may spoil or harm sanitation.\n3) Fuels, solvents, or other flammable chemicals.\n4) Explosives, firearms, compressed gas, or weapons.\n5) Hazmat, radioactive/biological waste, or toxic refuse.\n6) Anything that creates odor, noise, or vibration nuisances.\n7) Contraband or items unlawful or against public order.\nWe may terminate the agreement immediately if prohibited items are found.\n\n(2) Two months of security deposit are collected at signing; after move-out and a damage-free inspection, the deposit is returned within ten business days.\n\n(3) In-app dimensions are indicative only; ±5% field variance after installation is considered normal.";

const zhTW = {
  notFoundTitle: "找不到櫃子資料",
  backHome: "返回首頁",
  monthlyRent: "每月租金",
  priceNote: "（此價格尚不含優惠）",
  perMonth: "元 / 月",
  volume: "材積",
  len: "長",
  wid: "寬",
  hgt: "高",
  featuresTitle: "櫃位功能",
  featureTitles: ["24小時\n濕度控制", "智能\n密碼門鎖", "24小時\n櫃內監控"],
  noticeTitle: "注意事項",
  noticeBody: noticeTW,
  realPhotoAlt: "{name} 實境圖",
} as const;

const zhCN = {
  notFoundTitle: "找不到柜子资料",
  backHome: "返回首页",
  monthlyRent: "每月租金",
  priceNote: "（此价格尚不含优惠）",
  perMonth: "元 / 月",
  volume: "材积",
  len: "长",
  wid: "宽",
  hgt: "高",
  featuresTitle: "柜位功能",
  featureTitles: ["24小时\n湿度控制", "智能\n密码门锁", "24小时\n柜内监控"],
  noticeTitle: "注意事项",
  noticeBody: noticeCN,
  realPhotoAlt: "{name} 实景图",
} as const;

const en = {
  notFoundTitle: "We couldn’t find this unit",
  backHome: "Back to home",
  monthlyRent: "Monthly rent",
  priceNote: "(Promotions not included)",
  perMonth: "TWD / mo",
  volume: "Volume",
  len: "L",
  wid: "W",
  hgt: "H",
  featuresTitle: "What you get",
  featureTitles: ["24/7\nhumidity control", "Smart\ndigital lock", "24/7\nin-unit monitoring"],
  noticeTitle: "Important notes",
  noticeBody: noticeEN,
  realPhotoAlt: "{name} photo",
} as const;

export const cabinetPage = {
  "zh-TW": zhTW,
  "zh-CN": zhCN,
  en,
} as const;
