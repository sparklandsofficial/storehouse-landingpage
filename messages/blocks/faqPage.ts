const rentalTW = [
  {
    q: "如何租用 Spark Space 倉位？",
    a: "下載「Spark Space 星域智空間」APP，完成手機號碼驗證後，選擇延吉店的可用倉位，線上簽署電子合約並完成信用卡付款，整個流程最快 5 分鐘，完全不需要到場或聯絡任何人員。",
  },
  {
    q: "我可以在租之前先看倉位嗎？",
    a: "可以。下載 APP 後，系統會提供預覽功能，讓你在不付費的情況下查看倉位的實際尺寸與位置。如果你想親自到現場感受一下空間，可以加 LINE 預約參觀，我們會安排人員陪同說明。",
  },
  {
    q: "倉位內不能放哪些東西？",
    a: "禁止存放：任何形式的活物（含植物）、食物或易腐壞物品、油品或易燃化工原料、炸藥或武器、化學品或有毒廢料、發出異味或噪音的物品，以及任何違法物品。如有疑問請加 LINE 詢問。",
  },
  {
    q: "空間是否有溫濕度控制？",
    a: "是的。星域智空間全場配備工業級除濕設備，維持濕度在 55% 左右，全時自動監測。你也可以透過 APP 即時查看倉內的溫濕度數值，確保你的物品處於最佳保存狀態。",
  },
] as const;

const rentalCN = [
  {
    q: "如何租用 Spark Space 仓位？",
    a: "下载「Spark Space 星域智空间」APP，完成手机号码验证后，选择延吉店的可用仓位，线上签署电子合约并完成信用卡付款，整个流程最快 5 分钟，完全不需要到场或联系任何人员。",
  },
  {
    q: "我可以在租之前先看仓位吗？",
    a: "可以。下载 APP 后，系统会提供预览功能，让你在不付费的情况下查看仓位的实际尺寸与位置。如果你想亲自到现场感受一下空间，可以加 LINE 预约参观，我们会安排人员陪同说明。",
  },
  {
    q: "仓位内不能放哪些东西？",
    a: "禁止存放：任何形式的活物（含植物）、食物或易腐坏物品、油品或易燃化工原料、炸药或武器、化学品或有毒废料、发出异味或噪音的物品，以及任何违法物品。如有疑问请加 LINE 询问。",
  },
  {
    q: "空间是否有温湿度控制？",
    a: "是的。星域智空间全场配备工业级除湿设备，维持湿度在 55% 左右，全时自动监测。你也可以透过 APP 即时查看仓内的温湿度数值，确保你的物品处于最佳保存状态。",
  },
] as const;

const rentalEN = [
  {
    q: "How do I rent a Spark Space unit?",
    a: "Download the Spark Space app, verify your phone number, pick an available unit at the Yanji store, sign the e‑contract, and pay by card—often under five minutes with no walk‑ins or staff calls required.",
  },
  {
    q: "Can I preview a unit before renting?",
    a: "Yes. After you download the app, preview mode lets you inspect real dimensions and placement without paying. Want to visit in person? Message us on LINE to book a tour and we’ll walk you through the space.",
  },
  {
    q: "What items are prohibited inside a unit?",
    a: "No living things (including plants), food or perishables, oils or flammable chemicals, explosives or weapons, toxic/hazardous waste, noisy or foul‑smelling items, or anything illegal. Message us on LINE if you’re unsure.",
  },
  {
    q: "Do you control temperature and humidity?",
    a: "Yes. The facility runs industrial dehumidifiers targeting ~55% RH with continuous monitoring. You can also check live temperature and humidity readings in the app to keep valuables in a stable environment.",
  },
] as const;

const trustTW = [
  {
    q: "押金怎麼退？退租流程是什麼？",
    a: "在 APP 中辦理退租手續，確認倉位已清空且無損壞後，甲方於七日內以原信用卡刷退方式返還押金。請確保退租前已結清所有租金與滯納金，否則將從押金中扣除。",
  },
  {
    q: "如果我的東西在倉內損壞或不見，怎麼處理？",
    a: "每個倉位均配備 24 小時高清監控，所有進出紀錄完整保存。若發生異常狀況，請立即加 LINE 或致電客服，我們會調取監控影像配合處理。建議貴重物品另行投保，單價超過五萬元的物品不建議存放於倉位中。",
  },
  {
    q: "你們的安全設備實際上有什麼？",
    a: "店內設有零死角 24 小時監控攝影機、數位門禁系統（手機動態密碼開門）、工業級除濕設備（全時維持 55% 濕度）。所有進出紀錄均上傳雲端保存，你也可以隨時透過 APP 查看倉內即時影像。",
  },
] as const;

const trustCN = [
  {
    q: "押金怎么退？退租流程是什么？",
    a: "在 APP 中办理退租手续，确认仓位已清空且无损坏后，甲方于七日内以原信用卡刷退方式返还押金。请确保退租前已结清所有租金与滞纳金，否则将从押金中扣除。",
  },
  {
    q: "如果我的东西在仓内损坏或不见，怎么处理？",
    a: "每个仓位均配备 24 小时高清监控，所有进出纪录完整保存。若发生异常状况，请立即加 LINE 或致电客服，我们会调取监控影像配合处理。建议贵重物品另行投保，单价超过五万元的物品不建议存放于仓位中。",
  },
  {
    q: "你们的安全设备实际上有什么？",
    a: "店内设有零死角 24 小时监控摄影机、数位门禁系统（手机动态密码开门）、工业级除湿设备（全时维持 55% 湿度）。所有进出纪录均上传云端保存，你也可以随时透过 APP 查看仓内即时影像。",
  },
] as const;

const trustEN = [
  {
    q: "How do I get my deposit back? What’s the move‑out flow?",
    a: "Start move‑out in the app. After the unit is cleared and inspected for damage, we refund the deposit to your original card within seven days. All rent and late fees must be settled first—otherwise they’re deducted from the deposit.",
  },
  {
    q: "What if my belongings are damaged or missing?",
    a: "Each unit has 24/7 HD monitoring with retained access logs. If something looks wrong, contact us on LINE or phone immediately—we’ll pull footage to assist. We recommend separate insurance for valuables; items over NT$50,000 aren’t ideal to store.",
  },
  {
    q: "What security equipment do you actually run?",
    a: "Full‑coverage 24/7 cameras, digital access with rotating phone codes, and industrial dehumidifiers holding ~55% RH. Access logs are stored in the cloud, and you can view live in‑unit video from the app anytime.",
  },
] as const;

const accessTW = [
  {
    q: "我可以隨時進出倉庫嗎？",
    a: "是的。透過智慧門禁系統，租戶可享受 24 小時自由進出的便利性。在 APP 中產生當次動態密碼，輸入後即可開啟大門與個人倉位，全程不需要鑰匙或任何人工協助。",
  },
  {
    q: "我可以授權別人幫我進出倉庫嗎？",
    a: "可以。在 APP 中可以產生臨時授權密碼，分享給親友或搬家公司人員，讓他們在指定時間內進出你的倉位。所有進出紀錄都會即時通知你，確保安全可控。",
  },
  {
    q: "搬家公司可以直接把東西送到倉庫嗎？",
    a: "可以。你只需要提前透過 APP 產生臨時密碼給搬家公司人員，他們就能獨立完成搬運。B1 入口備有推車供搬運使用。如果是第一次使用，建議提前加 LINE 告知，我們可以協助規劃搬運動線。",
  },
] as const;

const accessCN = [
  {
    q: "我可以随时进出仓库吗？",
    a: "是的。透过智慧门禁系统，租户可享受 24 小时自由进出的便利性。在 APP 中产生当次动态密码，输入后即可开启大门与个人仓位，全程不需要钥匙或任何人工协助。",
  },
  {
    q: "我可以授权别人帮我进出仓库吗？",
    a: "可以。在 APP 中可以产生临时授权密码，分享给亲友或搬家公司人员，让他们在指定时间内进出你的仓位。所有进出纪录都会即时通知你，确保安全可控。",
  },
  {
    q: "搬家公司可以直接把东西送到仓库吗？",
    a: "可以。你只需要提前透过 APP 产生临时密码给搬家公司人员，他们就能独立完成搬运。B1 入口备有推车供搬运使用。如果是第一次使用，建议提前加 LINE 告知，我们可以协助规划搬运动线。",
  },
] as const;

const accessEN = [
  {
    q: "Can I access my unit anytime?",
    a: "Yes. Smart access lets tenants enter 24/7. Generate a one‑time dynamic code in the app to open the store and your private unit—no physical keys or staff assistance required.",
  },
  {
    q: "Can I authorize someone else to access my unit?",
    a: "Yes. Issue a temporary guest code in the app for family, friends, or movers. Access is time‑boxed and you get instant notifications for every entry and exit.",
  },
  {
    q: "Can movers deliver directly to the facility?",
    a: "Yes. Share a temporary code from the app so movers can work independently. Dollies are available at the B1 entrance. First time? Message us on LINE and we can help plan the route.",
  },
] as const;

const billingTW = [
  {
    q: "合約可以提前終止嗎？費用怎麼算？",
    a: "選擇月繳方案者：可隨時在 APP 辦理退租，當月未使用天數按日退還租金，並扣除一個月押金作為違約金。選擇季繳或年繳優惠方案者：若提前退租，按未使用月數退還「原價」租金（非優惠價），並扣除一個月押金。",
  },
  {
    q: "可以開立發票嗎？公司可以報帳嗎？",
    a: "可以。我們依法開立電子發票，每月自動寄送至你的信箱。如需公司抬頭發票（統一編號）以便報帳，請在加入 LINE 時告知，我們會在簽約時為你設定。",
  },
  {
    q: "忘記繳費會怎樣？有滯納金嗎？",
    a: "系統會在到期前透過 APP 通知提醒。若信用卡扣款失敗，我們會透過 LINE 或簡訊再次通知。若超過 5 天仍未繳清，將從第 6 天起每日加收原租金 1% 的滯納金。建議綁定信用卡自動扣款，避免漏繳。",
  },
] as const;

const billingCN = [
  {
    q: "合约可以提前终止吗？费用怎么算？",
    a: "选择月缴方案者：可随时在 APP 办理退租，当月未使用天数按日退还租金，并扣除一个月押金作为违约金。选择季缴或年缴优惠方案者：若提前退租，按未使用月数退还「原价」租金（非优惠价），并扣除一个月押金。",
  },
  {
    q: "可以开立发票吗？公司可以报账吗？",
    a: "可以。我们依法开立电子发票，每月自动寄送至你的信箱。如需公司抬头发票（统一编号）以便报账，请在加入 LINE 时告知，我们会在签约时为你设定。",
  },
  {
    q: "忘记缴费会怎样？有滞纳金吗？",
    a: "系统会在到期前透过 APP 通知提醒。若信用卡扣款失败，我们会透过 LINE 或短信再次通知。若超过 5 天仍未缴清，将从第 6 天起每日加收原租金 1% 的滞纳金。建议绑定信用卡自动扣款，避免漏缴。",
  },
] as const;

const billingEN = [
  {
    q: "Can I end the contract early? How are fees calculated?",
    a: "Monthly billing: cancel anytime in the app—unused days in the current month are refunded daily, with one month’s deposit retained as a cancellation fee. Quarterly/yearly promos: early termination refunds list‑price months not used (not the promo rate) and also retains one month’s deposit.",
  },
  {
    q: "Do you issue invoices? Can companies reimburse?",
    a: "Yes. We issue e‑invoices as required by law and email them monthly. Need a company title and tax ID for reimbursement? Tell us on LINE when you sign up and we’ll configure it in your contract.",
  },
  {
    q: "What if I miss a payment? Are there late fees?",
    a: "The app reminds you before each due date. If a card charge fails, we follow up on LINE or SMS. After five unpaid days, a 1% daily late fee on the base rent begins on day six. Autopay is the easiest way to avoid gaps.",
  },
] as const;

const zhTW = {
  metaTitle: "常見問題 | Spark Space 星域智空間",
  kicker: "支援中心",
  h1: "常見問題",
  sub: "找不到答案？直接加 LINE，我們馬上回覆。",
  rentalH: "租倉與流程",
  trustH: "信任與保障",
  accessH: "進出與使用",
  billingH: "費用與合約",
  rental: rentalTW,
  trust: trustTW,
  access: accessTW,
  billing: billingTW,
  moreQ: "還有其他問題？",
  moreSub: "加 LINE 直接問，我們馬上回覆",
  addr: "105臺北市松山區延吉街7-1號 B1（屈臣氏後方）",
  phone: "(02) 8177-7085",
  email: "spark@sparklands.co",
  lineHours: "LINE 客服：週一至週五 09:00–18:00（其他時間留言，隔日回覆）",
  lineAddAlt: "加入好友",
  quickH: "快速連結",
  quick1t: "倉位規格與方案",
  quick1s: "S / M / L / XL 全尺寸",
  quick2t: "租倉流程 & APP",
  quick2s: "四步驟 5 分鐘完成",
  quick3t: "台北延吉店資訊",
  quick3s: "交通 · 停車 · 地圖",
  dlApp: "下載 APP",
  dlSub: "App Store · Google Play",
} as const;

const zhCN = {
  metaTitle: "常见问题 | Spark Space 星域智空间",
  kicker: "支持中心",
  h1: "常见问题",
  sub: "找不到答案？直接加 LINE，我们马上回复。",
  rentalH: "租仓与流程",
  trustH: "信任与保障",
  accessH: "进出与使用",
  billingH: "费用与合约",
  rental: rentalCN,
  trust: trustCN,
  access: accessCN,
  billing: billingCN,
  moreQ: "还有其他问题？",
  moreSub: "加 LINE 直接问，我们马上回复",
  addr: "105台北市松山区延吉街7-1号 B1（屈臣氏后方）",
  phone: "(02) 8177-7085",
  email: "spark@sparklands.co",
  lineHours: "LINE 客服：周一至周五 09:00–18:00（其他时间留言，次日回复）",
  lineAddAlt: "加入好友",
  quickH: "快速链接",
  quick1t: "仓位规格与方案",
  quick1s: "S / M / L / XL 全尺寸",
  quick2t: "租仓流程 & APP",
  quick2s: "四步骤 5 分钟完成",
  quick3t: "台北延吉店资讯",
  quick3s: "交通 · 停车 · 地图",
  dlApp: "下载 APP",
  dlSub: "App Store · Google Play",
} as const;

const en = {
  metaTitle: "FAQ | Spark Space",
  kicker: "Support",
  h1: "Frequently asked questions",
  sub: "Can’t find an answer? Message us on LINE—we reply fast.",
  rentalH: "Renting & process",
  trustH: "Trust & safety",
  accessH: "Access & use",
  billingH: "Billing & contract",
  rental: rentalEN,
  trust: trustEN,
  access: accessEN,
  billing: billingEN,
  moreQ: "Still have questions?",
  moreSub: "Ping us on LINE for a quick answer",
  addr: "B1, No. 7-1, Yanji St., Songshan Dist., Taipei 105 (behind Watsons)",
  phone: "(02) 8177-7085",
  email: "spark@sparklands.co",
  lineHours: "LINE support: Mon–Fri 09:00–18:00 (off‑hours messages answered next business day)",
  lineAddAlt: "Add friend on LINE",
  quickH: "Quick links",
  quick1t: "Unit sizes & plans",
  quick1s: "S / M / L / XL",
  quick2t: "Rental flow & app",
  quick2s: "Four steps in ~5 minutes",
  quick3t: "Taipei Yanji store",
  quick3s: "Transit · parking · map",
  dlApp: "Download the app",
  dlSub: "App Store · Google Play",
} as const;

export const faqPage = {
  "zh-TW": zhTW,
  "zh-CN": zhCN,
  en,
} as const;
