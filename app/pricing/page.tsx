import Link from "next/link";

export const metadata = {
  title: "倉位規格與方案 | Spark Space 星域智空間",
};

export default function Pricing() {
  return (
    <div className="pt-28 pb-24">
      {/* PAGE HEADER */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 mb-16 be-1">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
          <div>
            <span className="font-label text-primary font-bold tracking-widest uppercase text-xs block mb-3">優質倉儲方案</span>
            <h1 className="font-headline text-5xl md:text-6xl font-black tracking-tight text-on-surface leading-[1.0] mb-4">
              倉位規格與方案
            </h1>
            <p className="text-on-surface-variant text-lg max-w-lg leading-relaxed">
              從個人換季收納到企業庫存，選一個剛好夠用的大小，按月租、季租或年租。有問題直接加 LINE，我們幫你挑最適合的。
            </p>
          </div>
          <div className="flex gap-4 flex-shrink-0">
            <div className="bg-surface-container-low rounded-xl p-5 text-center min-w-[120px] border border-outline-variant/5">
              <div className="font-label text-2xl font-black text-primary">24/7</div>
              <div className="text-xs text-on-surface-variant font-label mt-1 uppercase tracking-wide">手機進出</div>
            </div>
            <div className="bg-surface-container-low rounded-xl p-5 text-center min-w-[120px] border border-outline-variant/5">
              <div className="font-label text-2xl font-black text-primary">55%</div>
              <div className="text-xs text-on-surface-variant font-label mt-1 uppercase tracking-wide">恆定濕度</div>
            </div>
          </div>
        </div>
      </div>

      {/* UNIT CARDS */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 mb-24 be-2">
        <h2 className="font-headline text-2xl font-black text-on-surface mb-8 tracking-tight">選擇倉位大小</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {/* S */}
          <div className="unit-card bg-surface-container-lowest cloud-shadow rounded-2xl border border-outline-variant/5 overflow-hidden flex flex-col">
            <div className="p-7 flex-1">
              <div className="flex items-center justify-between mb-5">
                <div className="w-11 h-11 bg-secondary-container rounded-xl flex items-center justify-center">
                  <span className="material-symbols-outlined text-on-secondary-container text-[22px]">inventory_2</span>
                </div>
                <span className="font-label text-xs font-bold text-on-surface-variant bg-surface-container px-3 py-1 rounded-full">S 號</span>
              </div>
              <h3 className="font-headline text-xl font-black text-on-surface mb-1">S 號（半格倉）</h3>
              <div className="font-label text-primary text-xs font-bold mb-4 tracking-wide">92 × 107 × 110 cm</div>
              <div className="mb-5">
                <div className="text-3xl font-black text-on-surface font-headline">洽詢報價</div>
                <div className="text-xs text-on-surface-variant font-label mt-1">加 LINE 詢問月租金額</div>
              </div>
              <p className="text-on-surface-variant text-sm leading-relaxed mb-5">
                適合行李箱、換季衣物、個人文件、小型收藏品。約可放 15–20 個標準紙箱。
              </p>
              <div className="space-y-2">
                {["個人換季收納", "網拍小商品庫存", "文件書籍保存"].map((t) => (
                  <div key={t} className="flex items-center gap-2 text-xs font-label text-secondary">
                    <span className="material-symbols-outlined text-[15px] text-primary">check_circle</span>{t}
                  </div>
                ))}
              </div>
            </div>
            <div className="p-5 border-t border-outline-variant/10">
              <a href="https://lin.ee/zL7pC2r" target="_blank" rel="noopener" className="w-full py-3 rounded-xl text-sm font-bold text-center flex items-center justify-center gap-2 bg-surface-container hover:bg-surface-container-high transition-colors text-on-surface">
                <span className="material-symbols-outlined text-[17px]">chat_bubble</span>詢問 S 號方案
              </a>
            </div>
          </div>

          {/* M (featured) */}
          <div className="unit-card bg-surface-container-lowest rounded-2xl border-2 border-primary/20 overflow-hidden flex flex-col shadow-[0_20px_50px_rgba(137,81,0,0.10)]">
            <div className="butler-gradient px-7 py-2.5 flex items-center gap-2">
              <span className="material-symbols-outlined text-white text-[15px]">star</span>
              <span className="text-white text-xs font-bold font-label tracking-wide">最多人選擇</span>
            </div>
            <div className="p-7 flex-1">
              <div className="flex items-center justify-between mb-5">
                <div className="w-11 h-11 bg-primary-fixed rounded-xl flex items-center justify-center">
                  <span className="material-symbols-outlined text-primary text-[22px]">shelves</span>
                </div>
                <span className="font-label text-xs font-bold text-primary bg-primary/10 px-3 py-1 rounded-full">M 號</span>
              </div>
              <h3 className="font-headline text-xl font-black text-on-surface mb-1">M 號（一般倉）</h3>
              <div className="font-label text-primary text-xs font-bold mb-4 tracking-wide">123 × 107 × 213 cm</div>
              <div className="mb-5">
                <div className="text-3xl font-black text-on-surface font-headline">洽詢報價</div>
                <div className="text-xs text-on-surface-variant font-label mt-1">加 LINE 詢問月租金額</div>
              </div>
              <p className="text-on-surface-variant text-sm leading-relaxed mb-5">
                最受歡迎的尺寸。可放自行車、單人床架、約 40 個標準紙箱，滿足大多數個人與小型商業需求。
              </p>
              <div className="space-y-2">
                {["中型家具暫存", "電商備貨倉", "自行車存放"].map((t) => (
                  <div key={t} className="flex items-center gap-2 text-xs font-label text-secondary">
                    <span className="material-symbols-outlined text-[15px] text-primary">check_circle</span>{t}
                  </div>
                ))}
              </div>
            </div>
            <div className="p-5 border-t border-primary/10">
              <a href="https://lin.ee/zL7pC2r" target="_blank" rel="noopener" className="w-full py-3 rounded-xl text-sm font-bold text-center flex items-center justify-center gap-2 butler-gradient text-white cloud-shadow hover:scale-[1.01] active:scale-[0.99] transition-transform">
                <span className="material-symbols-outlined text-[17px]">chat_bubble</span>詢問 M 號方案
              </a>
            </div>
          </div>

          {/* L */}
          <div className="unit-card bg-surface-container-lowest cloud-shadow rounded-2xl border border-outline-variant/5 overflow-hidden flex flex-col">
            <div className="p-7 flex-1">
              <div className="flex items-center justify-between mb-5">
                <div className="w-11 h-11 bg-tertiary-fixed rounded-xl flex items-center justify-center">
                  <span className="material-symbols-outlined text-on-tertiary-container text-[22px]">warehouse</span>
                </div>
                <span className="font-label text-xs font-bold text-on-surface-variant bg-surface-container px-3 py-1 rounded-full">L 號</span>
              </div>
              <h3 className="font-headline text-xl font-black text-on-surface mb-1">L 號（加大倉）</h3>
              <div className="font-label text-primary text-xs font-bold mb-4 tracking-wide">167.5 × 107 × 213 cm</div>
              <div className="mb-5">
                <div className="text-3xl font-black text-on-surface font-headline">洽詢報價</div>
                <div className="text-xs text-on-surface-variant font-label mt-1">加 LINE 詢問月租金額</div>
              </div>
              <p className="text-on-surface-variant text-sm leading-relaxed mb-5">
                適合家庭雜物或裝修過渡。可放雙人床組、沙發，或大量商業文件、設備備品。
              </p>
              <div className="space-y-2">
                {["沙發 / 大型家電", "裝修過渡暫存", "商業文件庫"].map((t) => (
                  <div key={t} className="flex items-center gap-2 text-xs font-label text-secondary">
                    <span className="material-symbols-outlined text-[15px] text-primary">check_circle</span>{t}
                  </div>
                ))}
              </div>
            </div>
            <div className="p-5 border-t border-outline-variant/10">
              <a href="https://lin.ee/zL7pC2r" target="_blank" rel="noopener" className="w-full py-3 rounded-xl text-sm font-bold text-center flex items-center justify-center gap-2 bg-surface-container hover:bg-surface-container-high transition-colors text-on-surface">
                <span className="material-symbols-outlined text-[17px]">chat_bubble</span>詢問 L 號方案
              </a>
            </div>
          </div>

          {/* XL */}
          <div className="unit-card bg-surface-container-lowest cloud-shadow rounded-2xl border border-outline-variant/5 overflow-hidden flex flex-col">
            <div className="p-7 flex-1">
              <div className="flex items-center justify-between mb-5">
                <div className="w-11 h-11 bg-secondary-container rounded-xl flex items-center justify-center">
                  <span className="material-symbols-outlined text-on-secondary-container text-[22px]">domain</span>
                </div>
                <span className="font-label text-xs font-bold text-on-surface-variant bg-surface-container px-3 py-1 rounded-full">XL 號</span>
              </div>
              <h3 className="font-headline text-xl font-black text-on-surface mb-1">XL 號（特大倉）</h3>
              <div className="font-label text-primary text-xs font-bold mb-4 tracking-wide">245 × 107 × 213 cm</div>
              <div className="mb-5">
                <div className="text-3xl font-black text-on-surface font-headline">洽詢報價</div>
                <div className="text-xs text-on-surface-variant font-label mt-1">加 LINE 詢問月租金額</div>
              </div>
              <p className="text-on-surface-variant text-sm leading-relaxed mb-5">
                最大規格空間。適合企業庫存、門市備貨，或整戶家具的長期保存，相當於半個標準停車位。
              </p>
              <div className="space-y-2">
                {["企業庫存 / 門市備貨", "整戶家具長期保存", "藝術品 / 精品大件"].map((t) => (
                  <div key={t} className="flex items-center gap-2 text-xs font-label text-secondary">
                    <span className="material-symbols-outlined text-[15px] text-primary">check_circle</span>{t}
                  </div>
                ))}
              </div>
            </div>
            <div className="p-5 border-t border-outline-variant/10">
              <a href="https://lin.ee/zL7pC2r" target="_blank" rel="noopener" className="w-full py-3 rounded-xl text-sm font-bold text-center flex items-center justify-center gap-2 bg-surface-container hover:bg-surface-container-high transition-colors text-on-surface">
                <span className="material-symbols-outlined text-[17px]">chat_bubble</span>詢問 XL 號方案
              </a>
            </div>
          </div>
        </div>
        <p className="text-xs text-on-surface-variant mt-6 font-label text-center">
          ※ 以上尺寸因施工因素，可能有正負 5% 誤差。不確定要哪個大小？
          <a href="https://lin.ee/zL7pC2r" target="_blank" rel="noopener" className="text-primary font-bold hover:underline">
            加 LINE 讓我們幫你挑
          </a>。
        </p>
      </section>

      {/* PRICING PLANS */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 mb-24 be-3">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          <div className="lg:col-span-1">
            <h2 className="font-headline text-3xl font-black text-on-surface tracking-tight mb-4">計費方案</h2>
            <p className="text-on-surface-variant leading-relaxed mb-6">
              租期越長，優惠越多。全程信用卡自動扣款，告別每月繁瑣繳費，到期前 LINE 自動提醒。
            </p>
            <div className="bg-primary/6 rounded-xl p-5 border-l-4 border-primary">
              <div className="flex items-center gap-3 mb-2">
                <span className="material-symbols-outlined text-primary text-[20px]">credit_card</span>
                <span className="font-bold text-sm text-on-surface">信用卡自動扣款</span>
              </div>
              <p className="text-sm text-on-surface-variant leading-relaxed">綁定一次，自動續租、自動扣款，完全不用擔心忘記繳費。</p>
            </div>
            <div className="mt-6">
              <a href="https://lin.ee/zL7pC2r" target="_blank" rel="noopener" className="inline-flex items-center gap-2 text-primary font-bold font-label text-sm hover:gap-3 transition-all">
                詢問目前有哪些倉位 <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
              </a>
            </div>
          </div>
          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="plan-card bg-surface-container-low rounded-2xl p-7 flex flex-col items-center text-center border border-outline-variant/5">
              <span className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant mb-4 block">標準方案</span>
              <div className="font-headline text-3xl font-black text-on-surface mb-1">月租</div>
              <div className="text-on-surface-variant text-sm mb-6 font-label">最彈性</div>
              <div className="w-full h-px bg-outline-variant/20 mb-6" />
              <div className="text-on-surface font-bold text-lg mb-2 font-headline">原價計算</div>
              <div className="text-on-surface-variant text-xs font-label">隨時可退，流程簡便</div>
            </div>
            <div className="plan-card bg-surface-container-lowest rounded-2xl p-7 flex flex-col items-center text-center border-2 border-primary/20 shadow-[0_10px_30px_rgba(137,81,0,0.08)] relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 butler-gradient text-white text-[10px] font-bold font-label px-3 py-1 rounded-full tracking-widest">HOT</div>
              <span className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant mb-4 block">超值方案</span>
              <div className="font-headline text-3xl font-black text-on-surface mb-1">季租</div>
              <div className="text-on-surface-variant text-sm mb-6 font-label">95折 優惠</div>
              <div className="w-full h-px bg-outline-variant/20 mb-6" />
              <div className="text-primary font-black text-xl mb-1 font-headline">5% OFF</div>
              <div className="text-on-surface-variant text-xs font-label">3 個月一次付清</div>
            </div>
            <div className="plan-card bg-surface-container-low rounded-2xl p-7 flex flex-col items-center text-center border border-outline-variant/5">
              <span className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant mb-4 block">最划算方案</span>
              <div className="font-headline text-3xl font-black text-on-surface mb-1">年租</div>
              <div className="text-on-surface-variant text-sm mb-6 font-label">八折 優惠</div>
              <div className="w-full h-px bg-outline-variant/20 mb-6" />
              <div className="text-primary font-black text-xl mb-1 font-headline">20% OFF</div>
              <div className="text-on-surface-variant text-xs font-label">12 個月，省最多</div>
            </div>
          </div>
        </div>
      </section>

      {/* CORE FEATURES */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 mb-24 be-3">
        <div className="bg-surface-container-high/50 rounded-3xl p-12 md:p-16">
          <div className="text-center mb-14">
            <h2 className="font-headline text-2xl font-black text-on-surface tracking-tight mb-3 uppercase">六大核心優勢</h2>
            <div className="h-1 w-16 butler-gradient mx-auto rounded-full" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {[
              { icon: "contactless", label: "無接觸租倉", sub: "全程 APP 完成" },
              { icon: "view_quilt", label: "多元化櫃型", sub: "S 到 XL 全尺寸" },
              { icon: "event_available", label: "高彈性租期", sub: "月 / 季 / 年租" },
              { icon: "videocam", label: "零死角監控", sub: "APP 即時查看" },
              { icon: "key_off", label: "免鑰匙進出", sub: "手機即門鑰匙" },
              { icon: "humidity_mid", label: "工業級除濕", sub: "55% 恆定濕度" },
            ].map((item) => (
              <div key={item.label} className="flex flex-col items-center text-center group">
                <div className="w-14 h-14 rounded-full bg-surface-container-lowest flex items-center justify-center mb-3 cloud-shadow group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-primary text-2xl">{item.icon}</span>
                </div>
                <span className="font-bold text-sm text-on-surface">{item.label}</span>
                <span className="text-xs text-on-surface-variant mt-1">{item.sub}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
        <h2 className="font-headline text-3xl font-black text-on-surface tracking-tight mb-4">不確定要哪個大小？</h2>
        <p className="text-on-surface-variant text-lg mb-8 max-w-md mx-auto">
          告訴我們你想放什麼，我們幫你挑最適合的倉位，不讓你租到浪費或不夠用的。
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="https://lin.ee/zL7pC2r" target="_blank" rel="noopener" className="butler-gradient text-white px-8 py-4 rounded-xl font-bold text-base cloud-shadow flex items-center justify-center gap-2 hover:scale-[1.02] transition-transform">
            <span className="material-symbols-outlined text-[20px]">chat_bubble</span>加 LINE 讓我們幫你挑
          </a>
          <Link href="/process" className="bg-surface-container-lowest border border-outline-variant/20 text-on-surface px-8 py-4 rounded-xl font-bold text-base flex items-center justify-center gap-2 hover:bg-surface-container transition-colors">
            <span className="material-symbols-outlined text-[20px]">play_circle</span>先看租倉流程
          </Link>
        </div>
      </section>
    </div>
  );
}
