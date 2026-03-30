import Link from "next/link";
import FAQSidebar from "@/app/components/FAQSidebar";

export const metadata = {
  title: "常見問題 | Spark Space 星域智空間",
};

export default function FAQ() {
  return (
    <div className="pt-28 pb-24">
      {/* PAGE HEADER */}
      <div className="max-w-3xl mx-auto px-6 lg:px-12 text-center mb-16 be-1">
        <span className="font-label text-primary font-bold tracking-widest uppercase text-xs block mb-4">支援中心</span>
        <h1 className="font-headline text-5xl md:text-6xl font-black tracking-tight text-on-surface leading-[1.05] mb-6">常見問題</h1>
        <p className="text-on-surface-variant text-lg">找不到答案？直接加 LINE，我們馬上回覆。</p>
      </div>

      {/* FAQ CONTENT */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 be-2">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Sidebar */}
          <div className="lg:col-span-1 hidden lg:block lg:sticky lg:top-28 lg:self-start">
            <FAQSidebar />
          </div>

          {/* FAQ Items */}
          <div className="lg:col-span-3 space-y-10">
            {/* 租倉與流程 */}
            <div id="rental" className="scroll-mt-28">
              <h2 className="font-headline text-xl font-black text-on-surface mb-4 flex items-center gap-2">
                <span className="material-symbols-outlined text-primary text-[22px]">home_storage</span>租倉與流程
              </h2>
              <div className="bg-surface-container-lowest cloud-shadow rounded-2xl border border-outline-variant/5 overflow-hidden divide-y divide-outline-variant/10">
                {[
                  { q: "如何租用 Spark Space 倉位？", a: "下載「Spark Space 星域智空間」APP，完成手機號碼驗證後，選擇延吉店的可用倉位，線上簽署電子合約並完成信用卡付款，整個流程最快 5 分鐘，完全不需要到場或聯絡任何人員。" },
                  { q: "我可以在租之前先看倉位嗎？", a: "可以。下載 APP 後，系統會提供預覽功能，讓你在不付費的情況下查看倉位的實際尺寸與位置。如果你想親自到現場感受一下空間，可以加 LINE 預約參觀，我們會安排人員陪同說明。" },
                  { q: "倉位內不能放哪些東西？", a: "禁止存放：任何形式的活物（含植物）、食物或易腐壞物品、油品或易燃化工原料、炸藥或武器、化學品或有毒廢料、發出異味或噪音的物品，以及任何違法物品。如有疑問請加 LINE 詢問。" },
                  { q: "空間是否有溫濕度控制？", a: "是的。星域智空間全場配備工業級除濕設備，維持濕度在 55% 左右，全時自動監測。你也可以透過 APP 即時查看倉內的溫濕度數值，確保你的物品處於最佳保存狀態。" },
                ].map((item) => (
                  <details key={item.q} className="group">
                    <summary className="flex items-center justify-between px-7 py-5 font-bold text-on-surface hover:text-primary transition-colors cursor-pointer">
                      {item.q}
                      <span className="material-symbols-outlined faq-icon text-primary text-[22px] flex-shrink-0" aria-hidden="true">add</span>
                    </summary>
                    <div className="px-7 pb-6 text-on-surface-variant leading-relaxed text-sm">{item.a}</div>
                  </details>
                ))}
              </div>
            </div>

            {/* 信任與保障 */}
            <div id="trust" className="scroll-mt-28">
              <h2 className="font-headline text-xl font-black text-on-surface mb-4 flex items-center gap-2">
                <span className="material-symbols-outlined text-primary text-[22px]">verified_user</span>信任與保障
              </h2>
              <div className="bg-surface-container-lowest cloud-shadow rounded-2xl border border-outline-variant/5 overflow-hidden divide-y divide-outline-variant/10">
                {[
                  { q: "押金怎麼退？退租流程是什麼？", a: "在 APP 中辦理退租手續，確認倉位已清空且無損壞後，甲方於七日內以原信用卡刷退方式返還押金。請確保退租前已結清所有租金與滯納金，否則將從押金中扣除。" },
                  { q: "如果我的東西在倉內損壞或不見，怎麼處理？", a: "每個倉位均配備 24 小時高清監控，所有進出紀錄完整保存。若發生異常狀況，請立即加 LINE 或致電客服，我們會調取監控影像配合處理。建議貴重物品另行投保，單價超過五萬元的物品不建議存放於倉位中。" },
                  { q: "你們的安全設備實際上有什麼？", a: "店內設有零死角 24 小時監控攝影機、數位門禁系統（手機動態密碼開門）、工業級除濕設備（全時維持 55% 濕度）。所有進出紀錄均上傳雲端保存，你也可以隨時透過 APP 查看倉內即時影像。" },
                ].map((item) => (
                  <details key={item.q} className="group">
                    <summary className="flex items-center justify-between px-7 py-5 font-bold text-on-surface hover:text-primary transition-colors cursor-pointer">
                      {item.q}
                      <span className="material-symbols-outlined faq-icon text-primary text-[22px] flex-shrink-0" aria-hidden="true">add</span>
                    </summary>
                    <div className="px-7 pb-6 text-on-surface-variant leading-relaxed text-sm">{item.a}</div>
                  </details>
                ))}
              </div>
            </div>

            {/* 進出與使用 */}
            <div id="access" className="scroll-mt-28">
              <h2 className="font-headline text-xl font-black text-on-surface mb-4 flex items-center gap-2">
                <span className="material-symbols-outlined text-primary text-[22px]">lock_open</span>進出與使用
              </h2>
              <div className="bg-surface-container-lowest cloud-shadow rounded-2xl border border-outline-variant/5 overflow-hidden divide-y divide-outline-variant/10">
                {[
                  { q: "我可以隨時進出倉庫嗎？", a: "是的。透過智慧門禁系統，租戶可享受 24 小時自由進出的便利性。在 APP 中產生當次動態密碼，輸入後即可開啟大門與個人倉位，全程不需要鑰匙或任何人工協助。", open: true },
                  { q: "我可以授權別人幫我進出倉庫嗎？", a: "可以。在 APP 中可以產生臨時授權密碼，分享給親友或搬家公司人員，讓他們在指定時間內進出你的倉位。所有進出紀錄都會即時通知你，確保安全可控。" },
                  { q: "搬家公司可以直接把東西送到倉庫嗎？", a: "可以。你只需要提前透過 APP 產生臨時密碼給搬家公司人員，他們就能獨立完成搬運。B1 入口備有推車供搬運使用。如果是第一次使用，建議提前加 LINE 告知，我們可以協助規劃搬運動線。" },
                ].map((item) => (
                  <details key={item.q} className="group" {...(item.open ? { open: true } : {})}>
                    <summary className="flex items-center justify-between px-7 py-5 font-bold text-on-surface hover:text-primary transition-colors cursor-pointer">
                      {item.q}
                      <span className="material-symbols-outlined faq-icon text-primary text-[22px] flex-shrink-0" aria-hidden="true">add</span>
                    </summary>
                    <div className="px-7 pb-6 text-on-surface-variant leading-relaxed text-sm">{item.a}</div>
                  </details>
                ))}
              </div>
            </div>

            {/* 費用與合約 */}
            <div id="billing" className="scroll-mt-28">
              <h2 className="font-headline text-xl font-black text-on-surface mb-4 flex items-center gap-2">
                <span className="material-symbols-outlined text-primary text-[22px]">receipt_long</span>費用與合約
              </h2>
              <div className="bg-surface-container-lowest cloud-shadow rounded-2xl border border-outline-variant/5 overflow-hidden divide-y divide-outline-variant/10">
                {[
                  { q: "合約可以提前終止嗎？費用怎麼算？", a: "選擇月繳方案者：可隨時在 APP 辦理退租，當月未使用天數按日退還租金，並扣除一個月押金作為違約金。選擇季繳或年繳優惠方案者：若提前退租，按未使用月數退還「原價」租金（非優惠價），並扣除一個月押金。" },
                  { q: "可以開立發票嗎？公司可以報帳嗎？", a: "可以。我們依法開立電子發票，每月自動寄送至你的信箱。如需公司抬頭發票（統一編號）以便報帳，請在加入 LINE 時告知，我們會在簽約時為你設定。" },
                  { q: "忘記繳費會怎樣？有滯納金嗎？", a: "系統會在到期前透過 APP 通知提醒。若信用卡扣款失敗，我們會透過 LINE 或簡訊再次通知。若超過 5 天仍未繳清，將從第 6 天起每日加收原租金 1% 的滯納金。建議綁定信用卡自動扣款，避免漏繳。" },
                ].map((item) => (
                  <details key={item.q} className="group">
                    <summary className="flex items-center justify-between px-7 py-5 font-bold text-on-surface hover:text-primary transition-colors cursor-pointer">
                      {item.q}
                      <span className="material-symbols-outlined faq-icon text-primary text-[22px] flex-shrink-0" aria-hidden="true">add</span>
                    </summary>
                    <div className="px-7 pb-6 text-on-surface-variant leading-relaxed text-sm">{item.a}</div>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CONTACT SECTION */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 mt-20 be-3">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-surface-container-lowest cloud-shadow rounded-2xl p-8 border border-outline-variant/5">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-primary-fixed rounded-xl flex items-center justify-center">
                <span className="material-symbols-outlined text-primary text-[20px]">support_agent</span>
              </div>
              <div>
                <div className="font-bold text-on-surface">還有其他問題？</div>
                <div className="text-sm text-on-surface-variant font-label">加 LINE 直接問，我們馬上回覆</div>
              </div>
            </div>
            <div className="space-y-3 mb-6">
              {[
                { icon: "location_on", text: "105臺北市松山區延吉街7-1號 B1（屈臣氏後方）" },
                { icon: "call", text: "(02) 8177-7085", href: "tel:02-8177-7085" },
                { icon: "mail", text: "spark@sparklands.co", href: "mailto:spark@sparklands.co" },
                { icon: "schedule", text: "LINE 客服：週一至週五 09:00–18:00（其他時間留言，隔日回覆）" },
              ].map((c) => (
                <div key={c.icon} className="flex items-center gap-3 text-sm text-on-surface-variant">
                  <span className="material-symbols-outlined text-primary text-[18px]">{c.icon}</span>
                  {c.href ? (
                    <a href={c.href} className="text-primary font-bold hover:underline">{c.text}</a>
                  ) : (
                    c.text
                  )}
                </div>
              ))}
            </div>
            <a href="https://lin.ee/zL7pC2r" target="_blank" rel="noopener">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="https://scdn.line-apps.com/n/line_add_friends/btn/zh-Hant.png" alt="加入好友" height="36" className="h-9" referrerPolicy="no-referrer" />
            </a>
          </div>

          <div className="bg-surface-container-lowest cloud-shadow rounded-2xl p-8 border border-outline-variant/5">
            <div className="font-bold text-on-surface mb-6">快速連結</div>
            <div className="space-y-3">
              {[
                { href: "/pricing", icon: "grid_view", title: "倉位規格與方案", sub: "S / M / L / XL 全尺寸" },
                { href: "/process", icon: "play_circle", title: "租倉流程 & APP", sub: "四步驟 5 分鐘完成" },
                { href: "/locations", icon: "location_on", title: "台北延吉店資訊", sub: "交通 · 停車 · 地圖" },
              ].map((l) => (
                <Link key={l.href} href={l.href} className="flex items-center justify-between p-4 bg-surface-container-low rounded-xl hover:bg-surface-container transition-colors group">
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-primary text-[20px]">{l.icon}</span>
                    <div>
                      <div className="font-bold text-sm text-on-surface">{l.title}</div>
                      <div className="text-xs text-on-surface-variant font-label">{l.sub}</div>
                    </div>
                  </div>
                  <span className="material-symbols-outlined text-on-surface-variant group-hover:text-primary transition-colors text-[18px]">arrow_forward</span>
                </Link>
              ))}
              <a href="https://www.sparkspace.com.tw/iosdownload" target="_blank" rel="noopener" className="flex items-center justify-between p-4 bg-surface-container-low rounded-xl hover:bg-surface-container transition-colors group">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary text-[20px]">download</span>
                  <div>
                    <div className="font-bold text-sm text-on-surface">下載 APP</div>
                    <div className="text-xs text-on-surface-variant font-label">App Store · Google Play</div>
                  </div>
                </div>
                <span className="material-symbols-outlined text-on-surface-variant group-hover:text-primary transition-colors text-[18px]">open_in_new</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
