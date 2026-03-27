"use client";

import Link from "next/link";
import { useState, useRef, ChangeEvent, FormEvent } from "react";
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

// ── 前端輕量驗證 ──────────────────────────────────────────────────────────────
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_RE = /^(0[2-9]\d{7,8}|09\d{8})$/;

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
}

function validateForm(form: HTMLFormElement): FormErrors {
  const errors: FormErrors = {};
  const name = (form.elements.namedItem("name") as HTMLInputElement)?.value.trim();
  const email = (form.elements.namedItem("email") as HTMLInputElement)?.value.trim();
  const phone = (form.elements.namedItem("phone") as HTMLInputElement)?.value.replace(/[\s\-]/g, "");

  if (!name) errors.name = "請填寫姓名";
  else if (name.length > 50) errors.name = "姓名不得超過 50 字";

  if (!email) errors.email = "請填寫電子信箱";
  else if (!EMAIL_RE.test(email)) errors.email = "電子信箱格式不正確";

  if (!phone) errors.phone = "請填寫聯絡電話";
  else if (!PHONE_RE.test(phone)) errors.phone = "請輸入有效的台灣電話（市話或手機）";

  return errors;
}

type SubmitStatus = "idle" | "loading" | "success" | "error";

export default function Partners() {
  const [images, setImages] = useState<OptImage[]>([]);
  const [optimizing, setOptimizing] = useState(false);
  const fileRef = useRef<HTMLInputElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const [fieldErrors, setFieldErrors] = useState<FormErrors>({});
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

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

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;

    const errors = validateForm(form);
    setFieldErrors(errors);
    if (Object.keys(errors).length > 0) return;

    setSubmitStatus("loading");
    setErrorMessage("");

    const data = new FormData(form);
    const partnerTypes = data.getAll("type") as string[];

    const payload = {
      name: (data.get("name") as string)?.trim(),
      email: (data.get("email") as string)?.trim(),
      phone: (data.get("phone") as string)?.trim(),
      location: (data.get("location") as string)?.trim(),
      area: (data.get("area") as string)?.trim(),
      partnerTypes,
      message: (data.get("message") as string)?.trim(),
      website: (data.get("website") as string) ?? "",
    };

    try {
      const res = await fetch("/api/frontend/landingpage-partners-submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = await res.json().catch(() => ({}));

      if (res.ok && result.success) {
        setSubmitStatus("success");
        form.reset();
        setFieldErrors({});
      } else {
        setSubmitStatus("error");
        setErrorMessage(result.message || "送出失敗，請稍後再試");
        if (result.errors) setFieldErrors(result.errors as FormErrors);
      }
    } catch {
      setSubmitStatus("error");
      setErrorMessage("網路錯誤，請確認連線後再試");
    }
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


      {/* CONTACT FORM */}
      <section id="contact-form" className="py-24 px-6 lg:px-12">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <span className="font-label text-primary font-bold tracking-widest uppercase text-xs block mb-3">立即開始</span>
            <h2 className="font-headline text-3xl md:text-4xl font-black text-on-surface tracking-tight mb-4">下一個是你嗎？</h2>
            <p className="text-on-surface-variant text-lg">填寫基本資料，我們會在三個工作日內與你聯繫。</p>
          </div>
          <div className="bg-surface-container-lowest cloud-shadow rounded-2xl p-8 md:p-10 border border-outline-variant/5">

            {/* 成功提示 */}
            <AnimatePresence>
              {submitStatus === "success" && (
                <motion.div
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  className="mb-6 flex items-start gap-3 bg-primary/10 border border-primary/30 text-primary rounded-xl px-5 py-4"
                >
                  <span className="material-symbols-outlined text-[22px] mt-0.5 shrink-0">check_circle</span>
                  <div>
                    <p className="font-bold text-sm">申請已送出！</p>
                    <p className="text-xs mt-0.5 text-primary/80">我們收到你的合作申請，將在三個工作日內與你聯繫。</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* 系統錯誤提示 */}
            <AnimatePresence>
              {submitStatus === "error" && errorMessage && (
                <motion.div
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  className="mb-6 flex items-start gap-3 bg-error/10 border border-error/30 text-error rounded-xl px-5 py-4"
                >
                  <span className="material-symbols-outlined text-[22px] mt-0.5 shrink-0">error</span>
                  <p className="text-sm">{errorMessage}</p>
                </motion.div>
              )}
            </AnimatePresence>

            <form ref={formRef} onSubmit={handleSubmit} noValidate className="space-y-6">
              {/* Honeypot：人類看不到，bot 會填，後端見到有值就靜默丟棄 */}
              <div aria-hidden="true" style={{ position: "absolute", left: "-9999px", width: 0, height: 0, overflow: "hidden" }}>
                <label htmlFor="hp-website">Website</label>
                <input id="hp-website" type="text" name="website" tabIndex={-1} autoComplete="off" />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="font-label text-xs font-bold uppercase tracking-wide text-on-surface-variant block mb-2">姓名 *</label>
                  <input
                    type="text" name="name" placeholder="您的姓名"
                    onChange={() => fieldErrors.name && setFieldErrors((p) => ({ ...p, name: undefined }))}
                    className={`w-full px-4 py-3 bg-surface-container rounded-xl text-on-surface placeholder-on-surface-variant/40 focus:outline-none focus:ring-2 text-sm transition-shadow ${fieldErrors.name ? "ring-2 ring-error/60 focus:ring-error/60" : "focus:ring-primary/30"}`}
                  />
                  {fieldErrors.name && <p className="text-error text-xs mt-1.5 font-label">{fieldErrors.name}</p>}
                </div>
                <div>
                  <label className="font-label text-xs font-bold uppercase tracking-wide text-on-surface-variant block mb-2">聯絡電話 *</label>
                  <input
                    type="tel" name="phone" placeholder="0912-345-678"
                    onChange={() => fieldErrors.phone && setFieldErrors((p) => ({ ...p, phone: undefined }))}
                    className={`w-full px-4 py-3 bg-surface-container rounded-xl text-on-surface placeholder-on-surface-variant/40 focus:outline-none focus:ring-2 text-sm transition-shadow ${fieldErrors.phone ? "ring-2 ring-error/60 focus:ring-error/60" : "focus:ring-primary/30"}`}
                  />
                  {fieldErrors.phone && <p className="text-error text-xs mt-1.5 font-label">{fieldErrors.phone}</p>}
                </div>
              </div>
              <div>
                <label className="font-label text-xs font-bold uppercase tracking-wide text-on-surface-variant block mb-2">電子信箱 *</label>
                <input
                  type="email" name="email" placeholder="your@email.com"
                  onChange={() => fieldErrors.email && setFieldErrors((p) => ({ ...p, email: undefined }))}
                  className={`w-full px-4 py-3 bg-surface-container rounded-xl text-on-surface placeholder-on-surface-variant/40 focus:outline-none focus:ring-2 text-sm transition-shadow ${fieldErrors.email ? "ring-2 ring-error/60 focus:ring-error/60" : "focus:ring-primary/30"}`}
                />
                {fieldErrors.email && <p className="text-error text-xs mt-1.5 font-label">{fieldErrors.email}</p>}
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
              <button
                type="submit"
                disabled={submitStatus === "loading"}
                className="w-full butler-gradient text-white py-4 rounded-xl font-bold text-base cloud-shadow hover:scale-[1.01] active:scale-[0.99] transition-transform flex items-center justify-center gap-2 disabled:opacity-60 disabled:scale-100 disabled:cursor-not-allowed"
              >
                {submitStatus === "loading" ? (
                  <>
                    <span className="material-symbols-outlined text-[20px] animate-spin">progress_activity</span>送出中…
                  </>
                ) : (
                  <>
                    <span className="material-symbols-outlined text-[20px]">send</span>送出合作申請
                  </>
                )}
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
