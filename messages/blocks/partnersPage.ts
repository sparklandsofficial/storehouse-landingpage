/** 投資合作／夥伴申請頁 — 繁 / 简 / 英（表單提交 value 仍用繁中，與既有 API 一致） */

const cityRows = [
  { value: "台北市", tw: "台北市", cn: "台北市", en: "Taipei City" },
  { value: "新北市", tw: "新北市", cn: "新北市", en: "New Taipei City" },
  { value: "桃園市", tw: "桃園市", cn: "桃园市", en: "Taoyuan City" },
  { value: "台中市", tw: "台中市", cn: "台中市", en: "Taichung City" },
  { value: "台南市", tw: "台南市", cn: "台南市", en: "Tainan City" },
  { value: "高雄市", tw: "高雄市", cn: "高雄市", en: "Kaohsiung City" },
  { value: "其他縣市", tw: "其他縣市", cn: "其他县市", en: "Other cities/counties" },
] as const;

const areaRows = [
  { value: "50 坪以下", tw: "50 坪以下", cn: "50 坪以下", en: "Under 50 ping" },
  { value: "50–100 坪", tw: "50–100 坪", cn: "50–100 坪", en: "50–100 ping" },
  { value: "100–200 坪", tw: "100–200 坪", cn: "100–200 坪", en: "100–200 ping" },
  { value: "200 坪以上", tw: "200 坪以上", cn: "200 坪以上", en: "200+ ping" },
  { value: "尚未確定", tw: "尚未確定", cn: "尚未确定", en: "Not sure yet" },
] as const;

function cities(tw: "tw" | "cn" | "en") {
  return cityRows.map((r) => ({
    value: r.value,
    label: tw === "tw" ? r.tw : tw === "cn" ? r.cn : r.en,
  }));
}

function areas(tw: "tw" | "cn" | "en") {
  return areaRows.map((r) => ({
    value: r.value,
    label: tw === "tw" ? r.tw : tw === "cn" ? r.cn : r.en,
  }));
}

const zhTW = {
  metaTitle: "投資合作 | Spark Space 星域智空間",
  hero: {
    kicker: "投資合作",
    h1Line1: "為你的資產，",
    h1Highlight: "找到最好的出路。",
    body: "閒置空間搖身一變成為穩定現金流。星域智空間提供完整的智慧倉儲系統、品牌授權與全程營運支援，讓你的資產從第一天就開始賺錢。",
    ctaApply: "提出合作申請",
    ctaLearn: "了解加盟方案",
  },
  why: {
    kicker: "為什麼選擇星域智空間",
    h2Line1: "智聯核心賦能",
    h2Line2: "你的資產六大維度",
    sub: "我們把技術、品牌、系統都整合好了，你只需要提供空間。",
  },
  whyCards: [
    { title: "無人化自建平台", desc: "全套自建 APP、門禁、監控系統整合完畢，從租倉到開門全程無人化，大幅降低人力成本。" },
    { title: "穩定現金流模型", desc: "月租制訂閱收入，出租率穩定後現金流可預測，適合資產長期配置。" },
    { title: "彈性改造策略", desc: "地下室、商辦空置樓層、工業廠辦均可評估改造，初始 CAPEX 可依合作模式靈活規劃。" },
    { title: "低營運風險", desc: "無人化系統降低人力依賴，自動扣款減少壞帳風險，智慧門禁管控租戶進出。" },
    { title: "數據化營運儀表板", desc: "即時出租率、收入報表、倉位狀態一目瞭然，讓你隨時掌握資產表現。" },
    { title: "品牌主流化佈局", desc: "加入星域智空間品牌網絡，共享行銷曝光、SEO 流量與品牌知名度，加速據點起量。" },
  ],
  roi: {
    kicker: "投資回報分析",
    h2: "投資回報分析",
  },
  roiStats: [
    { stat: "12-18%", label: "預估年化報酬率", desc: "優於傳統房地產租賃，且具備更高的抗通膨能力。" },
    { stat: "24-36", label: "投資回收期 (月)", desc: "依據空間條件與地段，平均 2-3 年即可回收初始投資。" },
    { stat: "90%", label: "穩定出租率", desc: "成熟據點平均出租率，月租金收入穩定且持續。" },
  ],
  form: {
    kicker: "立即開始",
    h2: "下一個是你嗎？",
    sub: "填寫基本資料，我們會在三個工作日內與你聯繫。",
    successTitle: "申請已送出！",
    successBody: "我們收到你的合作申請，將在三個工作日內與你聯繫。",
    errSubmit: "送出失敗，請稍後再試",
    errNetwork: "網路錯誤，請確認連線後再試",
    emptySelect: "請選擇（選填）",
    footerPrefix: "或直接聯繫我們：",
  },
  labels: {
    name: "姓名 *",
    phone: "聯絡電話 *",
    email: "電子信箱 *",
    location: "空間所在區域",
    area: "預估可用面積（坪）",
    types: "感興趣的合作方式",
    message: "備註或想問的問題",
  },
  placeholders: {
    name: "您的姓名",
    message: "請簡單描述你的空間狀況或想了解的內容...",
  },
  partnerTypes: [
    { value: "standard", label: "一般加盟" },
    { value: "exclusive", label: "特許加盟" },
    { value: "jv", label: "合資開發" },
  ],
  cities: cities("tw"),
  areas: areas("tw"),
  submit: "送出合作申請",
  submitting: "送出中…",
  backHome: "回到首頁",
  errors: {
    nameRequired: "請填寫姓名",
    nameLen: "姓名不得超過 50 字",
    emailRequired: "請填寫電子信箱",
    emailInvalid: "電子信箱格式不正確",
    phoneRequired: "請填寫聯絡電話",
    phoneInvalid: "請輸入有效的台灣電話（市話或手機）",
  },
} as const;

const zhCN = {
  metaTitle: "投资合作 | Spark Space 星域智空间",
  hero: {
    kicker: "投资合作",
    h1Line1: "为你的资产，",
    h1Highlight: "找到最好的出路。",
    body: "闲置空间摇身一变成为稳定现金流。星域智空间提供完整的智慧仓储系统、品牌授权与全程营运支持，让你的资产从第一天就开始赚钱。",
    ctaApply: "提出合作申请",
    ctaLearn: "了解加盟方案",
  },
  why: {
    kicker: "为什么选择星域智空间",
    h2Line1: "智联核心赋能",
    h2Line2: "你的资产六大维度",
    sub: "我们把技术、品牌、系统都整合好了，你只需要提供空间。",
  },
  whyCards: [
    { title: "无人化自建平台", desc: "全套自建 APP、门禁、监控系统整合完毕，从租仓到开门全程无人化，大幅降低人力成本。" },
    { title: "稳定现金流模型", desc: "月租制订阅收入，出租率稳定后现金流可预测，适合资产长期配置。" },
    { title: "弹性改造策略", desc: "地下室、商办空置楼层、工业厂办均可评估改造，初始 CAPEX 可依合作模式灵活规划。" },
    { title: "低营运风险", desc: "无人化系统降低人力依赖，自动扣款减少坏账风险，智慧门禁管控租户进出。" },
    { title: "数据化营运仪表板", desc: "即时出租率、收入报表、仓位状态一目了然，让你随时掌握资产表现。" },
    { title: "品牌主流化布局", desc: "加入星域智空间品牌网络，共享行销曝光、SEO 流量与品牌知名度，加速据点起量。" },
  ],
  roi: {
    kicker: "投资回报分析",
    h2: "投资回报分析",
  },
  roiStats: [
    { stat: "12-18%", label: "预估年化报酬率", desc: "优于传统房地产租赁，且具备更高的抗通胀能力。" },
    { stat: "24-36", label: "投资回收期 (月)", desc: "依据空间条件与地段，平均 2-3 年即可回收初始投资。" },
    { stat: "90%", label: "稳定出租率", desc: "成熟据点平均出租率，月租金收入稳定且持续。" },
  ],
  form: {
    kicker: "立即开始",
    h2: "下一个是你吗？",
    sub: "填写基本资料，我们会在三个工作日内与你联系。",
    successTitle: "申请已送出！",
    successBody: "我们收到你的合作申请，将在三个工作日内与你联系。",
    errSubmit: "送出失败，请稍后再试",
    errNetwork: "网络错误，请确认连线后再试",
    emptySelect: "请选择（选填）",
    footerPrefix: "或直接联系我们：",
  },
  labels: {
    name: "姓名 *",
    phone: "联络电话 *",
    email: "电子信箱 *",
    location: "空间所在区域",
    area: "预估可用面积（坪）",
    types: "感兴趣的合作方式",
    message: "备注或想问的问题",
  },
  placeholders: {
    name: "您的姓名",
    message: "请简单描述你的空间状况或想了解的内容...",
  },
  partnerTypes: [
    { value: "standard", label: "一般加盟" },
    { value: "exclusive", label: "特许加盟" },
    { value: "jv", label: "合资开发" },
  ],
  cities: cities("cn"),
  areas: areas("cn"),
  submit: "送出合作申请",
  submitting: "送出中…",
  backHome: "回到首页",
  errors: {
    nameRequired: "请填写姓名",
    nameLen: "姓名不得超过 50 字",
    emailRequired: "请填写电子信箱",
    emailInvalid: "电子信箱格式不正确",
    phoneRequired: "请填写联络电话",
    phoneInvalid: "请输入有效的台湾电话（市话或手机）",
  },
} as const;

const en = {
  metaTitle: "Partner with us | Spark Space",
  hero: {
    kicker: "Partnerships",
    h1Line1: "Turn idle space into",
    h1Highlight: "predictable yield.",
    body: "Spark Space bundles the smart-storage stack, brand, and operating support so your asset can earn from day one.",
    ctaApply: "Start a conversation",
    ctaLearn: "Explore franchise models",
  },
  why: {
    kicker: "Why Spark Space",
    h2Line1: "Six pillars that",
    h2Line2: "power your asset",
    sub: "We bring the tech, brand, and systems—you bring the space.",
  },
  whyCards: [
    { title: "Automation-native stack", desc: "App, access, and CCTV wired end-to-end—fewer onsite hours and lower labor load." },
    { title: "Subscription-style cash flow", desc: "Monthly rents with predictable occupancy curves—built for long-horizon owners." },
    { title: "Flexible retrofit playbooks", desc: "Basements, vacant office floors, and industrial shells—capex staged to the deal." },
    { title: "Lower operating risk", desc: "Self-service flows, automated billing, and digital access reduce arrears and staffing drag." },
    { title: "Operator dashboards", desc: "Live occupancy, revenue, and unit health so you always know how the asset is performing." },
    { title: "Brand distribution", desc: "Tap shared marketing, SEO, and awareness as the network scales new sites faster." },
  ],
  roi: {
    kicker: "Return profile",
    h2: "Illustrative returns",
  },
  roiStats: [
    { stat: "12-18%", label: "Indicative annual yield", desc: "Often more resilient than vanilla office/resi leases in inflationary cycles." },
    { stat: "24-36", label: "Payback (months)", desc: "Typical 2–3 year capex payback depending on micro-location and layout." },
    { stat: "90%", label: "Stabilized occupancy", desc: "Mature sites reference band; actuals vary by trade area execution." },
  ],
  form: {
    kicker: "Get started",
    h2: "Tell us about your site",
    sub: "Share the basics—we’ll reply within three business days.",
    successTitle: "Received!",
    successBody: "Thanks for reaching out. A partner lead will contact you within three business days.",
    errSubmit: "We couldn’t submit just now. Please try again shortly.",
    errNetwork: "Network issue—check your connection and retry.",
    emptySelect: "Optional — select",
    footerPrefix: "Prefer direct contact:",
  },
  labels: {
    name: "Name *",
    phone: "Phone *",
    email: "Email *",
    location: "City / region",
    area: "Estimated floor area (ping)",
    types: "Models you’re exploring",
    message: "Notes or questions",
  },
  placeholders: {
    name: "Your name",
    message: "Briefly describe the space or what you’d like to learn…",
  },
  partnerTypes: [
    { value: "standard", label: "Standard franchise" },
    { value: "exclusive", label: "Licensed franchise" },
    { value: "jv", label: "Joint development" },
  ],
  cities: cities("en"),
  areas: areas("en"),
  submit: "Submit inquiry",
  submitting: "Sending…",
  backHome: "Back to home",
  errors: {
    nameRequired: "Please enter your name",
    nameLen: "Name must be 50 characters or fewer",
    emailRequired: "Please enter your email",
    emailInvalid: "That email doesn’t look valid",
    phoneRequired: "Please enter a phone number",
    phoneInvalid: "Use a valid Taiwan landline or mobile number",
  },
} as const;

export const partnersPage = {
  "zh-TW": zhTW,
  "zh-CN": zhCN,
  en,
} as const;
