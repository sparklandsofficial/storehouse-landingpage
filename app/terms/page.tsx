import Link from "next/link";

export const metadata = {
  title: "服務條款 | Spark Space 星域智空間",
};

export default function Terms() {
  return (
    <main className="pt-28 pb-24">
      <div className="max-w-4xl mx-auto px-6 lg:px-12 mb-10 be-1">
        <span className="font-label text-primary font-bold tracking-widest uppercase text-xs block mb-3">法律條款</span>
        <h1 className="font-headline text-4xl md:text-5xl font-black tracking-tight text-on-surface leading-tight mb-4">服務條款</h1>
        <p className="text-on-surface-variant text-base leading-relaxed max-w-2xl">
          本條款規範您使用 Spark Space 星域智空間倉儲服務及相關 APP 的權利義務。使用本服務即表示您同意以下全部條款。
        </p>
        <div className="mt-4 flex flex-wrap gap-3">
          <div className="inline-flex items-center gap-2 bg-surface-container rounded-xl px-4 py-2 text-sm text-on-surface-variant font-label">
            <span className="material-symbols-outlined text-[15px] text-primary">calendar_today</span>最後更新：2026 年 3 月 26 日
          </div>
          <Link href="/privacy" className="inline-flex items-center gap-2 bg-surface-container rounded-xl px-4 py-2 text-sm text-on-surface-variant font-label hover:bg-surface-container-high transition-colors">
            <span className="material-symbols-outlined text-[15px] text-primary">security</span>查看隱私權政策
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
                {[
                  "1. 服務使用","2. 帳號責任","3. 使用期間與費用","4. 租金與滯納金",
                  "5. 退租與提前終止","6. 使用限制","7. 禁止存放物品","8. 危險負擔",
                  "9. 違約處罰","10. 免責聲明","11. 知識產權","12. 服務變更",
                  "13. 條款變更","14. 準據法與管轄","15. 聯絡我們",
                ].map((t, i) => (
                  <a key={t} href={`#t${i + 1}`} className="toc-link">{t}</a>
                ))}
              </nav>
            </div>
          </div>

          {/* Content */}
          <div className="lg:col-span-3">
            <div className="bg-surface-container-lowest cloud-shadow rounded-2xl p-8 md:p-10 border border-outline-variant/5 prose">
              <div className="not-prose bg-primary/6 rounded-xl p-5 border-l-4 border-primary mb-8">
                <p className="text-sm text-on-surface-variant leading-relaxed">
                  <strong className="text-on-surface">請注意：</strong>當您下載並使用「Spark Space 星域智空間」APP 或租用本公司倉位時，即表示您已閱讀、理解並同意本服務條款之全部內容。若您不同意本條款，請勿使用本服務。
                </p>
              </div>

              <h2 id="t1">1. 服務使用</h2>
              <p>歡迎使用星域智空間的倉儲服務。本公司提供自助式智能倉位租賃，透過專屬 APP 完成租倉、簽約、付款、門禁進出及退租全流程。</p>
              <ul>
                <li>本服務僅限 <strong>18 歲（含）以上</strong>之成年人使用。</li>
                <li>您使用本服務即表示您同意遵守本條款及中華民國相關法律規定。</li>
                <li>本公司保留拒絕或終止任何違反本條款之使用者繼續使用本服務之權利。</li>
                <li>本服務係倉儲設施出租，性質不同於房屋租賃，不得作為居住或營業登記使用。</li>
              </ul>

              <h2 id="t2">2. 帳號責任</h2>
              <ul>
                <li>您有責任維護帳號安全，包括妥善保管 APP 登入密碼及門禁動態密碼。</li>
                <li>您對所有使用您帳號進行的活動負完全責任，包含您授權他人使用的情形。</li>
                <li>若發現帳號遭未授權使用，請立即透過 LINE 客服或電話通知本公司。</li>
                <li>您不得將帳號轉讓、出借或提供他人使用，亦不得共用帳號。</li>
              </ul>

              <h2 id="t3">3. 使用期間與費用</h2>
              <h3>租賃期間</h3>
              <ul>
                <li>租金及押金繳付後，合約始生效。</li>
                <li>如欲續約，請於到期日 <strong>14 日前</strong>透過 APP 辦理，並完成付款。</li>
                <li>若未於合約結束前完成退租手續，本公司將按原價自動續租一個月，您不得異議。</li>
              </ul>
              <h3>押金</h3>
              <ul>
                <li>押金於退租並確認倉位已清空、無損壞且結清所有費用後，於 <strong>7 日內</strong>退還（信用卡刷退方式）。</li>
              </ul>
              <h3>計費方案</h3>
              <div className="not-prose overflow-x-auto my-3">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-surface-container">
                      <th className="text-left px-4 py-3 font-bold text-on-surface border border-outline-variant/20">方案</th>
                      <th className="text-left px-4 py-3 font-bold text-on-surface border border-outline-variant/20">優惠</th>
                      <th className="text-left px-4 py-3 font-bold text-on-surface border border-outline-variant/20">說明</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-outline-variant/10">
                    <tr><td className="px-4 py-3 text-on-surface-variant border border-outline-variant/10">月租</td><td className="px-4 py-3 text-on-surface-variant border border-outline-variant/10">原價</td><td className="px-4 py-3 text-on-surface-variant border border-outline-variant/10">最彈性，可隨時退租</td></tr>
                    <tr><td className="px-4 py-3 text-on-surface-variant border border-outline-variant/10">季租（3 個月）</td><td className="px-4 py-3 text-on-surface-variant border border-outline-variant/10">95 折（5% OFF）</td><td className="px-4 py-3 text-on-surface-variant border border-outline-variant/10">一次付清 3 個月</td></tr>
                    <tr><td className="px-4 py-3 text-on-surface-variant border border-outline-variant/10">年租（12 個月）</td><td className="px-4 py-3 text-on-surface-variant border border-outline-variant/10">八折（20% OFF）</td><td className="px-4 py-3 text-on-surface-variant border border-outline-variant/10">一次付清 12 個月，省最多</td></tr>
                  </tbody>
                </table>
              </div>

              <h2 id="t4">4. 租金與滯納金</h2>
              <ul>
                <li>逾期 <strong>5 日</strong>未繳納租金者，自第 6 天起每日加收原租金 <strong>1%</strong> 之滯納金。</li>
                <li>逾期達 <strong>1 個月</strong>仍未繳清者，本公司有權立即終止合約，並視同您拋棄倉內置放物之所有權。</li>
              </ul>

              <h2 id="t5">5. 退租與提前終止</h2>
              <h3>月繳方案</h3>
              <ul>
                <li>可隨時在 APP 辦理退租，當月未使用天數按日退還租金。</li>
                <li>扣除 <strong>一個月押金</strong>作為違約金後退還餘額。</li>
              </ul>
              <h3>季繳 / 年繳優惠方案</h3>
              <ul>
                <li>提前退租時，按未使用月數退還<strong>原價</strong>租金（非優惠價）。</li>
                <li>扣除 <strong>一個月押金</strong>作為違約金後退還餘額。</li>
              </ul>

              <h2 id="t6">6. 使用限制</h2>
              <ul>
                <li>在公共區域放置私有物品或妨礙他人之行為。</li>
                <li>將倉位作為居住、養殖或任何違法、不道德用途。</li>
                <li>未經本公司同意，在倉位上進行任何改裝。</li>
                <li>惡意破壞場所設施，違者照價賠償。</li>
              </ul>
              <p>上層倉位之物品總重量不得超過 <strong>200 公斤</strong>。</p>

              <h2 id="t7">7. 禁止存放物品</h2>
              <div className="not-prose bg-red-50 border border-red-200 rounded-xl p-5 my-3">
                <p className="text-sm font-bold text-red-800 mb-3">以下物品嚴禁存放於倉位，違者本公司有權立即終止合約：</p>
                <ul className="space-y-1.5 text-sm text-red-700">
                  {[
                    "任何形式的活物（含植物）及任何形式的遺體（含動物）",
                    "食物、易腐壞或影響公共衛生之物品",
                    "油品、溶劑、化工原料等易燃物品",
                    "炮竹、火藥、瓦斯、武器等易爆裂物品",
                    "化學品、輻射物、生化物、有毒廢料等危害公眾安全物品",
                    "任何發出異味、噪音或震動之物品",
                    "非法取得、法律禁止或有違公序良俗之物品",
                    "現金、骨董、金飾、珠寶、有價證券等貴重物品（單價超過新台幣五萬元者）",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="text-red-500 font-bold mt-0.5">✗</span>{item}
                    </li>
                  ))}
                </ul>
              </div>

              <h2 id="t8">8. 危險負擔</h2>
              <ul>
                <li>您應以善良管理人之注意使用倉位，因您之故意或過失致損壞倉位，由您負賠償責任。</li>
                <li>本公司不對存放於倉位內的現金、骨董、珠寶、有價證券及藝術品（單價五萬元以上）之損失負責。</li>
              </ul>

              <h2 id="t9">9. 違約處罰</h2>
              <ul>
                <li>未依約繳付租金前，本公司有權使您的 APP 帳號門禁失效；補足費用後方可恢復進出。</li>
                <li>積欠租金且滯納金已高於押金，本公司得經 <strong>10 日</strong>催告後，立即終止合約。</li>
              </ul>

              <h2 id="t10">10. 免責聲明</h2>
              <ul>
                <li>本服務按現況提供，本公司不對任何直接、間接、附帶損害負責。</li>
                <li>因天災、地變、停電或其他不可抗力因素造成之服務中斷，本公司不負賠償責任。</li>
              </ul>

              <h2 id="t11">11. 知識產權</h2>
              <p>本公司的 APP、網站、商標「Spark Space」及「星域智空間」、logo 及所有相關內容，受著作權、商標及其他知識產權法律保護。</p>

              <h2 id="t12">12. 服務變更</h2>
              <p>星域智空間保留隨時修改、暫停或終止部分或全部服務的權利（調整前將提前 <strong>30 日</strong>通知現有租戶）。</p>

              <h2 id="t13">13. 條款變更</h2>
              <p>本公司保留隨時修改本服務條款之權利。修訂後條款於公告後 <strong>7 日</strong>起生效。繼續使用本服務即表示您接受修改後的條款。</p>

              <h2 id="t14">14. 準據法與管轄法院</h2>
              <p>本服務條款以<strong>中華民國法律</strong>為準據法。因本條款或使用本服務所生之爭議，雙方同意以<strong>台灣台北地方法院</strong>為第一審管轄法院。</p>

              <h2 id="t15">15. 聯絡我們</h2>
              <div className="not-prose bg-surface-container-lowest border border-outline-variant/10 rounded-xl p-5 space-y-3">
                <div className="flex items-center gap-3 text-sm"><span className="material-symbols-outlined text-primary text-[17px]">apartment</span><div><strong className="text-on-surface">公司名稱：</strong><span className="text-on-surface-variant">星域智慧科技股份有限公司</span></div></div>
                <div className="flex items-center gap-3 text-sm"><span className="material-symbols-outlined text-primary text-[17px]">location_on</span><div><strong className="text-on-surface">地址：</strong><span className="text-on-surface-variant">台北市松山區延吉街 7-1 號 B1</span></div></div>
                <div className="flex items-center gap-3 text-sm"><span className="material-symbols-outlined text-primary text-[17px]">mail</span><div><strong className="text-on-surface">電子信箱：</strong><a href="mailto:spark@sparklands.co" className="text-primary font-bold">spark@sparklands.co</a></div></div>
                <div className="flex items-center gap-3 text-sm"><span className="material-symbols-outlined text-primary text-[17px]">call</span><div><strong className="text-on-surface">電話：</strong><a href="tel:02-8177-7085" className="text-primary font-bold">(02) 8177-7085</a></div></div>
                <div className="flex items-center gap-3 text-sm"><span className="material-symbols-outlined text-primary text-[17px]">chat_bubble</span><div><strong className="text-on-surface">LINE 客服：</strong><a href="https://lin.ee/zL7pC2r" target="_blank" rel="noopener" className="text-primary font-bold">加入好友</a></div></div>
              </div>
            </div>

            <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-between items-center">
              <Link href="/privacy" className="text-sm text-primary font-bold font-label flex items-center gap-1.5 hover:underline">
                <span className="material-symbols-outlined text-[16px]">security</span>查看隱私權政策
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
