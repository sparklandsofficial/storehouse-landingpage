import Link from "next/link";

export const metadata = {
  title: "隱私權政策 | Spark Space 星域智空間",
};

export default function Privacy() {
  return (
    <main className="pt-28 pb-24">
      <div className="max-w-4xl mx-auto px-6 lg:px-12 mb-10 be-1">
        <span className="font-label text-primary font-bold tracking-widest uppercase text-xs block mb-3">法律條款</span>
        <h1 className="font-headline text-4xl md:text-5xl font-black tracking-tight text-on-surface leading-tight mb-4">隱私權政策</h1>
        <p className="text-on-surface-variant text-base leading-relaxed max-w-2xl">
          本政策說明星域智慧科技股份有限公司如何蒐集、處理、利用及保護您使用 Spark Space 服務時的個人資料。
        </p>
        <div className="mt-4 flex flex-wrap gap-3">
          <div className="inline-flex items-center gap-2 bg-surface-container rounded-xl px-4 py-2 text-sm text-on-surface-variant font-label">
            <span className="material-symbols-outlined text-[15px] text-primary">calendar_today</span>最後更新：2026 年 3 月 26 日
          </div>
          <Link href="/terms" className="inline-flex items-center gap-2 bg-surface-container rounded-xl px-4 py-2 text-sm text-on-surface-variant font-label hover:bg-surface-container-high transition-colors">
            <span className="material-symbols-outlined text-[15px] text-primary">description</span>查看服務條款
          </Link>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 lg:px-12 be-2">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
          {/* TOC */}
          <div className="hidden lg:block lg:col-span-1">
            <div className="sticky top-28 bg-surface-container-lowest cloud-shadow rounded-2xl p-5 border border-outline-variant/5">
              <div className="font-label text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-4">目錄</div>
              <nav className="space-y-0.5">
                {["1. 資料蒐集","2. 資料使用","3. 資料保護","4. 資料分享","5. 門禁與監控","6. 資料保存期限","7. 您的權利","8. Cookie 政策","9. 未成年人保護","10. 政策更新","11. 聯絡我們"].map((t, i) => (
                  <a key={t} href={`#s${i + 1}`} className="toc-link">{t}</a>
                ))}
              </nav>
            </div>
          </div>

          {/* Content */}
          <div className="lg:col-span-3">
            <div className="bg-surface-container-lowest cloud-shadow rounded-2xl p-8 md:p-10 border border-outline-variant/5 prose">
              <div className="not-prose bg-primary/6 rounded-xl p-5 border-l-4 border-primary mb-8">
                <p className="text-sm text-on-surface-variant leading-relaxed">
                  <strong className="text-on-surface">請注意：</strong>當您使用「Spark Space 星域智空間」APP 或相關服務時，即表示您同意本隱私權政策之全部內容。
                </p>
              </div>

              <h2 id="s1">1. 資料蒐集</h2>
              <p>星域智空間重視您的隱私權。基於提供服務之必要，我們可能蒐集以下類型的個人資料：</p>
              <h3>基本個人資料</h3>
              <ul>
                <li>姓名、手機號碼、電子郵件地址</li>
                <li>身份驗證資料（用於 APP 帳號註冊）</li>
                <li>聯絡地址及帳單資訊</li>
              </ul>
              <h3>服務使用資料</h3>
              <ul>
                <li>租用紀錄、合約簽署資料（電子簽章）</li>
                <li>付款資訊（信用卡末四碼，完整卡號由金流服務商保管）</li>
                <li>門禁進出紀錄（時間戳記、密碼使用紀錄）</li>
                <li>您授權他人進出的相關紀錄</li>
              </ul>
              <h3>技術資料</h3>
              <ul>
                <li>網站和應用程式使用數據（如 IP 位址、瀏覽器類型、訪問時間等）</li>
                <li>裝置識別碼、作業系統版本、APP 使用行為紀錄</li>
              </ul>
              <h3>影像資料</h3>
              <ul><li>倉位內部及公共區域之監控錄影（詳見第 5 條）</li></ul>

              <h2 id="s2">2. 資料使用</h2>
              <p>我們蒐集的資料將用於以下目的：</p>
              <ul>
                <li><strong>提供和改進服務：</strong>處理租倉申請、合約管理、進出管理及退租等事項</li>
                <li><strong>處理交易和付款：</strong>開立電子發票、處理信用卡扣款、退款作業</li>
                <li><strong>身份驗證與安全管理：</strong>確認租戶身份、管控門禁進出權限</li>
                <li><strong>與您溝通：</strong>發送繳費提醒、服務通知及客服往來</li>
                <li><strong>分析與改善：</strong>分析匿名化使用數據，優化 APP 功能與服務品質</li>
                <li><strong>法律遵循：</strong>配合主管機關調查或司法程序之需要</li>
              </ul>

              <h2 id="s3">3. 資料保護</h2>
              <p>我們採取適當的技術和組織措施來保護您的個人資料：</p>
              <ul>
                <li><strong>傳輸加密：</strong>APP 與伺服器間之資料傳輸採用 TLS 加密協定</li>
                <li><strong>儲存安全：</strong>敏感個人資料在資料庫中以加密方式儲存</li>
                <li><strong>存取控制：</strong>僅授權人員可存取個人資料，設有多重身份驗證機制</li>
                <li><strong>最小化原則：</strong>僅蒐集履行服務所必要之最少個人資料</li>
                <li><strong>事故應變：</strong>若發生個人資料外洩，本公司將依《個人資料保護法》規定通知受影響之當事人並採取補救措施</li>
              </ul>

              <h2 id="s4">4. 資料分享</h2>
              <p>除非法律要求或您同意，否則我們不會將您的個人資料販售或出租予第三方。以下情形我們可能分享您的資料：</p>
              <ul>
                <li><strong>金流服務商：</strong>處理信用卡授權及付款</li>
                <li><strong>電子發票服務商：</strong>依稅法規定開立及傳送統一發票</li>
                <li><strong>雲端服務供應商：</strong>提供 APP 系統及資料儲存服務（均受保密協議約束）</li>
                <li><strong>法律要求：</strong>依法律規定或主管機關、法院之合法要求</li>
                <li><strong>企業交易：</strong>若發生合併或收購，我們將事先通知您</li>
              </ul>

              <h2 id="s5">5. 門禁系統與監控影像</h2>
              <h3>門禁進出紀錄</h3>
              <p>每次進出均記錄時間戳記及密碼使用類型，用於安全管理及爭議解決。保存期間為 <strong>180 天</strong>，期滿自動刪除。</p>
              <h3>監控影像</h3>
              <ul>
                <li>倉位內部影像僅供該倉位租戶本人透過 APP 即時查看，本公司人員非必要不得存取</li>
                <li>公共區域影像保存期間為 <strong>30 天</strong>，逾期自動覆蓋</li>
                <li>影像僅用於安全保護目的，不得用於廣告或行銷</li>
                <li>司法機關合法調查、消防安檢或安全緊急事件時，本公司得調取影像</li>
              </ul>

              <h2 id="s6">6. 資料保存期限</h2>
              <div className="not-prose overflow-x-auto my-4">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-surface-container">
                      <th className="text-left px-4 py-3 font-bold text-on-surface border border-outline-variant/20">資料類別</th>
                      <th className="text-left px-4 py-3 font-bold text-on-surface border border-outline-variant/20">保存期間</th>
                      <th className="text-left px-4 py-3 font-bold text-on-surface border border-outline-variant/20">依據</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-outline-variant/10">
                    <tr><td className="px-4 py-3 text-on-surface-variant border border-outline-variant/10">租倉合約與交易紀錄</td><td className="px-4 py-3 text-on-surface-variant border border-outline-variant/10">合約終止後 5 年</td><td className="px-4 py-3 text-on-surface-variant border border-outline-variant/10">民法消滅時效</td></tr>
                    <tr><td className="px-4 py-3 text-on-surface-variant border border-outline-variant/10">發票與財務紀錄</td><td className="px-4 py-3 text-on-surface-variant border border-outline-variant/10">開立後 5 年</td><td className="px-4 py-3 text-on-surface-variant border border-outline-variant/10">稅捐稽徵法</td></tr>
                    <tr><td className="px-4 py-3 text-on-surface-variant border border-outline-variant/10">門禁進出紀錄</td><td className="px-4 py-3 text-on-surface-variant border border-outline-variant/10">180 天</td><td className="px-4 py-3 text-on-surface-variant border border-outline-variant/10">安全管理必要</td></tr>
                    <tr><td className="px-4 py-3 text-on-surface-variant border border-outline-variant/10">公共區域監控影像</td><td className="px-4 py-3 text-on-surface-variant border border-outline-variant/10">30 天</td><td className="px-4 py-3 text-on-surface-variant border border-outline-variant/10">安全管理必要</td></tr>
                    <tr><td className="px-4 py-3 text-on-surface-variant border border-outline-variant/10">APP 帳號資料</td><td className="px-4 py-3 text-on-surface-variant border border-outline-variant/10">帳號刪除後 30 天</td><td className="px-4 py-3 text-on-surface-variant border border-outline-variant/10">個資法</td></tr>
                  </tbody>
                </table>
              </div>

              <h2 id="s7">7. 您的權利</h2>
              <p>依據《個人資料保護法》第 3 條，您享有以下權利：</p>
              <ul>
                <li><strong>查詢或閱覽：</strong>確認本公司是否持有您的資料並請求閱覽</li>
                <li><strong>補充或更正：</strong>若資料不正確，請求補充或更正</li>
                <li><strong>停止蒐集或利用：</strong>符合法定事由時，請求停止處理您的資料</li>
                <li><strong>刪除：</strong>符合法定事由時，請求刪除（依法須保存者除外）</li>
              </ul>
              <div className="not-prose bg-surface-container rounded-xl p-4 border border-outline-variant/10 mt-3">
                <p className="text-sm text-on-surface-variant">請透過 APP 帳號設定或聯繫 <a href="mailto:spark@sparklands.co" className="text-primary font-bold">spark@sparklands.co</a> 行使您的權利。本公司將於 <strong className="text-on-surface">30 日內</strong>回覆。</p>
              </div>

              <h2 id="s8">8. Cookie 政策</h2>
              <p>本公司網站使用 Cookie 提升使用體驗及分析服務使用狀況：</p>
              <ul>
                <li><strong>必要性 Cookie：</strong>維持登入狀態及基本功能，無法關閉</li>
                <li><strong>分析性 Cookie：</strong>了解網站使用狀況，可透過瀏覽器設定關閉</li>
              </ul>

              <h2 id="s9">9. 未成年人保護</h2>
              <p>本公司服務限 18 歲（含）以上成年人使用，不會在明知的情況下蒐集未成年人個人資料。若發現未成年人已提供資料，請立即聯繫我們，本公司將儘速刪除。</p>

              <h2 id="s10">10. 政策更新</h2>
              <p>我們可能不時更新本隱私權政策。任何重大變更將透過 APP 通知及本頁面公佈，修訂後政策於公告後 <strong>7 日</strong>起生效。繼續使用本公司服務，即表示您同意修訂後之政策。</p>

              <h2 id="s11">11. 聯絡我們</h2>
              <div className="not-prose bg-surface-container-lowest border border-outline-variant/10 rounded-xl p-5 space-y-3">
                <div className="flex items-center gap-3 text-sm"><span className="material-symbols-outlined text-primary text-[17px]">apartment</span><div><strong className="text-on-surface">公司名稱：</strong><span className="text-on-surface-variant">星域智慧科技股份有限公司</span></div></div>
                <div className="flex items-center gap-3 text-sm"><span className="material-symbols-outlined text-primary text-[17px]">location_on</span><div><strong className="text-on-surface">地址：</strong><span className="text-on-surface-variant">台北市松山區延吉街 7-1 號 B1</span></div></div>
                <div className="flex items-center gap-3 text-sm"><span className="material-symbols-outlined text-primary text-[17px]">mail</span><div><strong className="text-on-surface">電子信箱：</strong><a href="mailto:spark@sparklands.co" className="text-primary font-bold">spark@sparklands.co</a></div></div>
                <div className="flex items-center gap-3 text-sm"><span className="material-symbols-outlined text-primary text-[17px]">call</span><div><strong className="text-on-surface">電話：</strong><a href="tel:02-8177-7085" className="text-primary font-bold">(02) 8177-7085</a></div></div>
              </div>
              <p className="mt-4 text-xs text-on-surface-variant">本政策受中華民國法律管轄。因本政策所生之爭議，雙方同意以台灣台北地方法院為第一審管轄法院。</p>
            </div>

            <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-between items-center">
              <Link href="/terms" className="text-sm text-primary font-bold font-label flex items-center gap-1.5 hover:underline">
                <span className="material-symbols-outlined text-[16px]">description</span>查看服務條款
              </Link>
              <div className="flex gap-3">
                <Link href="/" className="butler-gradient text-white px-6 py-2.5 rounded-xl text-sm font-bold cloud-shadow hover:scale-[1.02] transition-transform flex items-center gap-2">
                  <span className="material-symbols-outlined text-[16px]">home</span>回到首頁
                </Link>
                <Link href="/faq" className="bg-surface-container border border-outline-variant/15 text-on-surface px-6 py-2.5 rounded-xl text-sm font-bold hover:bg-surface-container-high transition-colors flex items-center gap-2">
                  <span className="material-symbols-outlined text-[16px]">help</span>常見問題
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
