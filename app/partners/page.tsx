"use client";

import Link from "next/link";
import { useState, useRef, ChangeEvent } from "react";
import { motion, AnimatePresence } from "motion/react";

interface OptImage { id: string; url: string; size: number; optimizedSize: number; }

function optimizeImage(file: File): Promise<{ url: string; size: number }> {
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const img = new Image();
      img.onload = () => {
        const canvas = document.createElement("canvas");
        let w = img.width, h = img.height;
        if (w > 1200) { h = (1200 / w) * h; w = 1200; }
        canvas.width = w; canvas.height = h;
        canvas.getContext("2d")?.drawImage(img, 0, 0, w, h);
        const url = canvas.toDataURL("image/jpeg", 0.8);
        resolve({ url, size: Math.floor((url.length - "data:image/jpeg;base64,".length) * 0.75) });
      };
      img.src = e.target?.result as string;
    };
    reader.readAsDataURL(file);
  });
}

export default function Partners() {
  const [images, setImages] = useState<OptImage[]>([]);
  const [optimizing, setOptimizing] = useState(false);
  const fileRef = useRef<HTMLInputElement>(null);

  const handleFiles = async (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;
    setOptimizing(true);
    const next: OptImage[] = [];
    for (let i = 0; i < files.length; i++) {
      const { url, size: optimizedSize } = await optimizeImage(files[i]);
      next.push({ id: Math.random().toString(36).slice(2), url, size: files[i].size, optimizedSize });
    }
    setImages((p) => [...p, ...next]);
    setOptimizing(false);
    if (fileRef.current) fileRef.current.value = "";
  };

  return (
    <div className="pt-20">
      {/* HERO */}
      <section className="min-h-[70vh] flex items-center relative overflow-hidden be-1">
        <div className="hero-dark absolute inset-0 z-10" />
        <div className="absolute inset-0 bg-cover bg-center opacity-25" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format,compress&fit=crop&q=80&w=1920')" }} />
        <div className="relative z-20 max-w-7xl mx-auto px-6 lg:px-12 py-32 w-full">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 border border-primary-container/40 text-primary-container px-4 py-1.5 rounded-full text-xs font-label font-bold tracking-widest uppercase mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-primary-container inline-block" />投資合作
            </div>
            <h1 className="font-headline text-5xl md:text-7xl font-black text-white leading-[1.0] tracking-tight mb-6">
              為你的資產，<br /><span className="text-primary-container">找到最好的出路。</span>
            </h1>
            <p className="text-white/70 text-xl leading-relaxed mb-10 max-w-xl">
              閒置空間搖身一變成為穩定現金流。星域智空間提供完整的智慧倉儲系統、品牌授權與全程營運支援，讓你的資產從第一天就開始賺錢。
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contact-form" className="butler-gradient text-white px-8 py-4 rounded-xl font-bold text-base cloud-shadow flex items-center justify-center gap-2 hover:scale-[1.02] transition-transform">
                <span className="material-symbols-outlined text-[20px]">handshake</span>提出合作申請
              </a>
              <a href="#why" className="bg-white/10 border border-white/20 text-white px-8 py-4 rounded-xl font-bold text-base flex items-center justify-center gap-2 hover:bg-white/20 transition-colors">
                <span className="material-symbols-outlined text-[20px]">info</span>了解加盟方案
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* WHY PARTNER */}
      <section id="why" className="py-24 px-6 lg:px-12 bg-surface be-2">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="font-label text-primary font-bold tracking-widest uppercase text-xs block mb-3">為什麼選擇星域智空間</span>
            <h2 className="font-headline text-4xl md:text-5xl font-black text-on-surface tracking-tight">智聯核心賦能<br />你的資產六大維度</h2>
            <p className="text-on-surface-variant mt-4 text-lg max-w-xl mx-auto">我們把技術、品牌、系統都整合好了，你只需要提供空間。</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: "smartphone", bg: "bg-primary-fixed", color: "text-primary", title: "無人化自建平台", desc: "全套自建 APP、門禁、監控系統整合完畢，從租倉到開門全程無人化，大幅降低人力成本。" },
              { icon: "trending_up", bg: "bg-secondary-container", color: "text-secondary", title: "穩定現金流模型", desc: "月租制訂閱收入，出租率穩定後現金流可預測，適合資產長期配置。" },
              { icon: "auto_fix_high", bg: "bg-tertiary-fixed", color: "text-on-tertiary-container", title: "彈性改造策略", desc: "地下室、商辦空置樓層、工業廠辦均可評估改造，初始 CAPEX 可依合作模式靈活規劃。" },
              { icon: "shield_lock", bg: "bg-primary-fixed", color: "text-primary", title: "低營運風險", desc: "無人化系統降低人力依賴，自動扣款減少壞帳風險，智慧門禁管控租戶進出。" },
              { icon: "analytics", bg: "bg-secondary-container", color: "text-secondary", title: "數據化營運儀表板", desc: "即時出租率、收入報表、倉位狀態一目瞭然，讓你隨時掌握資產表現。" },
              { icon: "public", bg: "bg-tertiary-fixed", color: "text-on-tertiary-container", title: "品牌主流化佈局", desc: "加入星域智空間品牌網絡，共享行銷曝光、SEO 流量與品牌知名度，加速據點起量。" },
            ].map((c) => (
              <div key={c.title} className="bg-surface-container-lowest cloud-shadow rounded-2xl p-8 border border-outline-variant/5">
                <div className={`w-12 h-12 ${c.bg} rounded-xl flex items-center justify-center mb-5`}>
                  <span className={`material-symbols-outlined ${c.color} text-2xl`}>{c.icon}</span>
                </div>
                <h3 className="font-headline font-bold text-lg text-on-surface mb-2">{c.title}</h3>
                <p className="text-on-surface-variant text-sm leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ROI */}
      <section className="py-24 px-6 lg:px-12 bg-surface-container-low relative overflow-hidden be-3">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -mr-48 -mt-48" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <span className="font-label text-primary font-bold tracking-widest uppercase text-xs block mb-3">投資回報分析</span>
            <h2 className="font-headline text-3xl md:text-5xl font-black text-on-surface tracking-tight">投資回報分析</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              { stat: "12-18%", label: "預估年化報酬率", desc: "優於傳統房地產租賃，且具備更高的抗通膨能力。" },
              { stat: "24-36", label: "投資回收期 (月)", desc: "依據空間條件與地段，平均 2-3 年即可回收初始投資。" },
              { stat: "90%", label: "穩定出租率", desc: "成熟據點平均出租率，月租金收入穩定且持續。" },
            ].map((r) => (
              <div key={r.label} className="bg-surface-container-lowest p-8 rounded-3xl border border-outline-variant/10 cloud-shadow text-center">
                <div className="text-primary font-headline text-5xl font-black mb-2">{r.stat}</div>
                <div className="font-label text-xs font-bold uppercase tracking-widest text-on-surface-variant">{r.label}</div>
                <p className="mt-4 text-sm text-on-surface-variant">{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PARTNER UPLOAD */}
      <section className="py-24 px-6 lg:px-12 bg-surface-container-lowest border-y border-outline-variant/10 be-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="font-label text-primary font-bold tracking-widest uppercase text-xs block mb-3">合作夥伴專區</span>
            <h2 className="font-headline text-3xl md:text-4xl font-black text-on-surface tracking-tight mb-4">上傳案例實景圖</h2>
            <p className="text-on-surface-variant text-lg max-w-2xl mx-auto">歡迎合作夥伴上傳門市實景照片。系統將自動進行網頁效能優化（縮放與壓縮）。</p>
          </div>

          <div className="bg-surface-container-low rounded-[2rem] p-8 md:p-12 border border-dashed border-outline-variant/30 text-center relative overflow-hidden">
            <input type="file" ref={fileRef} onChange={handleFiles} multiple accept="image/*" className="hidden" />
            <AnimatePresence mode="wait">
              {images.length === 0 ? (
                <motion.div key="empty" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="flex flex-col items-center">
                  <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                    <span className="material-symbols-outlined text-primary text-4xl">cloud_upload</span>
                  </div>
                  <h3 className="font-headline text-xl font-bold text-on-surface mb-2">拖放圖片或點擊上傳</h3>
                  <p className="text-on-surface-variant text-sm mb-8">支援 JPG, PNG, WEBP (單張最大 10MB)</p>
                  <button onClick={() => fileRef.current?.click()} className="bg-primary text-white px-8 py-3.5 rounded-xl font-bold text-sm hover:scale-[1.02] transition-transform cloud-shadow">
                    選擇檔案
                  </button>
                </motion.div>
              ) : (
                <motion.div key="grid" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-8">
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {images.map((img) => (
                      <motion.div layout key={img.id} initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="group relative aspect-square rounded-2xl overflow-hidden bg-surface-container-high border border-outline-variant/10">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={img.url} alt="Preview" className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center p-4">
                          <div className="text-white text-[10px] font-bold uppercase tracking-widest mb-1">已優化</div>
                          <div className="text-white/80 text-[10px]">{(img.size / 1024).toFixed(0)}KB → {(img.optimizedSize / 1024).toFixed(0)}KB</div>
                          <button onClick={() => setImages((p) => p.filter((x) => x.id !== img.id))} className="mt-3 w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                            <span className="material-symbols-outlined text-[18px]">delete</span>
                          </button>
                        </div>
                      </motion.div>
                    ))}
                    <button onClick={() => fileRef.current?.click()} className="aspect-square rounded-2xl border-2 border-dashed border-outline-variant/30 flex flex-col items-center justify-center hover:bg-surface-container-high transition-colors group">
                      <span className="material-symbols-outlined text-on-surface-variant group-hover:text-primary transition-colors text-3xl mb-2">add_photo_alternate</span>
                      <span className="text-xs font-bold text-on-surface-variant">繼續新增</span>
                    </button>
                  </div>
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-8 border-t border-outline-variant/10">
                    <div className="text-left">
                      <div className="text-sm font-bold text-on-surface">共 {images.length} 張圖片</div>
                      <div className="text-xs text-on-surface-variant">總計節省約 {((images.reduce((a, i) => a + (i.size - i.optimizedSize), 0)) / 1024 / 1024).toFixed(2)} MB 頻寬</div>
                    </div>
                    <div className="flex gap-3">
                      <button onClick={() => setImages([])} className="px-6 py-3 rounded-xl font-bold text-sm text-on-surface-variant hover:bg-surface-container-high transition-colors">全部清除</button>
                      <button className="butler-gradient text-white px-8 py-3 rounded-xl font-bold text-sm cloud-shadow hover:scale-[1.02] transition-transform">確認提交案例</button>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
            {optimizing && (
              <div className="absolute inset-0 bg-surface-container-low/80 backdrop-blur-sm z-50 flex flex-col items-center justify-center">
                <div className="w-12 h-12 border-4 border-primary/20 border-t-primary rounded-full animate-spin mb-4" />
                <div className="font-bold text-on-surface">正在優化圖片效能...</div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CONTACT FORM */}
      <section id="contact-form" className="py-24 px-6 lg:px-12">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <span className="font-label text-primary font-bold tracking-widest uppercase text-xs block mb-3">立即開始</span>
            <h2 className="font-headline text-3xl md:text-4xl font-black text-on-surface tracking-tight mb-4">下一個是你嗎？</h2>
            <p className="text-on-surface-variant text-lg">填寫基本資料，我們會在三個工作日內與你聯繫。</p>
          </div>
          <div className="bg-surface-container-lowest cloud-shadow rounded-2xl p-8 md:p-10 border border-outline-variant/5">
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="font-label text-xs font-bold uppercase tracking-wide text-on-surface-variant block mb-2">姓名 *</label>
                  <input type="text" name="name" required placeholder="您的姓名" className="w-full px-4 py-3 bg-surface-container rounded-xl text-on-surface placeholder-on-surface-variant/40 focus:outline-none focus:ring-2 focus:ring-primary/30 text-sm" />
                </div>
                <div>
                  <label className="font-label text-xs font-bold uppercase tracking-wide text-on-surface-variant block mb-2">聯絡電話 *</label>
                  <input type="tel" name="phone" required placeholder="0912-345-678" className="w-full px-4 py-3 bg-surface-container rounded-xl text-on-surface placeholder-on-surface-variant/40 focus:outline-none focus:ring-2 focus:ring-primary/30 text-sm" />
                </div>
              </div>
              <div>
                <label className="font-label text-xs font-bold uppercase tracking-wide text-on-surface-variant block mb-2">電子信箱 *</label>
                <input type="email" name="email" required placeholder="your@email.com" className="w-full px-4 py-3 bg-surface-container rounded-xl text-on-surface placeholder-on-surface-variant/40 focus:outline-none focus:ring-2 focus:ring-primary/30 text-sm" />
              </div>
              <div>
                <label className="font-label text-xs font-bold uppercase tracking-wide text-on-surface-variant block mb-2">空間所在區域</label>
                <select name="location" className="w-full px-4 py-3 bg-surface-container rounded-xl text-on-surface focus:outline-none focus:ring-2 focus:ring-primary/30 text-sm">
                  <option value="">請選擇（選填）</option>
                  {["台北市","新北市","桃園市","台中市","台南市","高雄市","其他縣市"].map((o) => <option key={o}>{o}</option>)}
                </select>
              </div>
              <div>
                <label className="font-label text-xs font-bold uppercase tracking-wide text-on-surface-variant block mb-2">預估可用面積（坪）</label>
                <select name="area" className="w-full px-4 py-3 bg-surface-container rounded-xl text-on-surface focus:outline-none focus:ring-2 focus:ring-primary/30 text-sm">
                  <option value="">請選擇（選填）</option>
                  {["50 坪以下","50–100 坪","100–200 坪","200 坪以上","尚未確定"].map((o) => <option key={o}>{o}</option>)}
                </select>
              </div>
              <div>
                <label className="font-label text-xs font-bold uppercase tracking-wide text-on-surface-variant block mb-2">感興趣的合作方式</label>
                <div className="flex flex-wrap gap-4">
                  {[["standard","一般加盟"],["exclusive","特許加盟"],["jv","合資開發"]].map(([v,l]) => (
                    <label key={v} className="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" name="type" value={v} className="accent-primary w-4 h-4" />
                      <span className="text-sm text-on-surface">{l}</span>
                    </label>
                  ))}
                </div>
              </div>
              <div>
                <label className="font-label text-xs font-bold uppercase tracking-wide text-on-surface-variant block mb-2">備註或想問的問題</label>
                <textarea name="message" rows={4} placeholder="請簡單描述你的空間狀況或想了解的內容..." className="w-full px-4 py-3 bg-surface-container rounded-xl text-on-surface placeholder-on-surface-variant/40 focus:outline-none focus:ring-2 focus:ring-primary/30 text-sm resize-none" />
              </div>
              <button type="submit" className="w-full butler-gradient text-white py-4 rounded-xl font-bold text-base cloud-shadow hover:scale-[1.01] active:scale-[0.99] transition-transform flex items-center justify-center gap-2">
                <span className="material-symbols-outlined text-[20px]">send</span>送出合作申請
              </button>
              <p className="text-xs text-on-surface-variant text-center font-label">
                或直接聯繫我們：
                <a href="mailto:spark@sparklands.co" className="text-primary font-bold hover:underline">spark@sparklands.co</a>
                ·
                <a href="tel:02-8177-7085" className="text-primary font-bold hover:underline">(02) 8177-7085</a>
              </p>
            </form>
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-6 lg:px-12 pb-8 text-center">
        <Link href="/" className="inline-flex items-center gap-2 text-primary font-bold font-label text-sm hover:gap-3 transition-all">
          <span className="material-symbols-outlined text-[18px]">arrow_back</span>回到首頁
        </Link>
      </div>
    </div>
  );
}
