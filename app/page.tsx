import Link from "next/link";
import Image from "next/image";
import { Smartphone, Key, CreditCard, Eye } from "lucide-react";
import TestimonialCarousel from "./components/TestimonialCarousel";

export default function Home() {
  // Hero 背景暗度（0 = 不暗，1 = 全黑）。你之後就調呢個數值即可。
  const HERO_DIM = 0.80;

  return (
    <div className="pt-20">
      {/* HERO */}
      <section className="relative min-h-[88vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="hero-overlay absolute inset-0 z-10" />
          <div
            className="absolute inset-0 z-10 bg-black"
            style={{ opacity: HERO_DIM }}
            aria-hidden="true"
          />
          <div
            className="w-full h-full bg-cover bg-center"
            style={{
              backgroundImage:
                "url('/images/202510/cover1.png')",
            }}
          />
        </div>
        <div className="relative z-20 text-center max-w-4xl px-6 be-1">
          <h1 className="text-white font-headline font-black leading-[1.05] tracking-tight mb-6">
            <span className="text-5xl md:text-7xl block">放不下的，</span>
            <span className="text-5xl md:text-7xl block text-primary-container">交給我們。</span>
          </h1>
          <p className="text-white/80 text-lg md:text-xl font-normal mb-4 max-w-xl mx-auto leading-relaxed">
            24 小時全程手機操作，從租倉到開門，
            <br className="hidden sm:block" />
            不需要任何人工協助。
          </p>
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            <span className="tech-chip text-white/90 text-xs font-label px-4 py-2 rounded-full flex items-center gap-2 transition-all hover:bg-white/20 hover:scale-105 cursor-default">
              <Smartphone size={14} className="text-primary-container" />
              APP 簽約租倉
            </span>
            <span className="tech-chip text-white/90 text-xs font-label px-4 py-2 rounded-full flex items-center gap-2 transition-all hover:bg-white/20 hover:scale-105 cursor-default">
              <Key size={14} className="text-primary-container" />
              手機無鑰匙進出
            </span>
            <span className="tech-chip text-white/90 text-xs font-label px-4 py-2 rounded-full flex items-center gap-2 transition-all hover:bg-white/20 hover:scale-105 cursor-default">
              <CreditCard size={14} className="text-primary-container" />
              線上支付合約
            </span>
            <span className="tech-chip text-white/90 text-xs font-label px-4 py-2 rounded-full flex items-center gap-2 transition-all hover:bg-white/20 hover:scale-105 cursor-default">
              <Eye size={14} className="text-primary-container" />
              即時監控查看
            </span>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/pricing"
              className="butler-gradient text-white px-8 py-4 rounded-xl text-base font-bold cloud-shadow flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-[0.98] transition-transform"
            >
              <span className="material-symbols-outlined text-[20px]">grid_view</span>
              看可用倉位與方案
            </Link>
            <a
              href="https://lin.ee/zL7pC2r"
              target="_blank"
              rel="noopener"
              className="bg-white/10 backdrop-blur-md border border-white/25 text-white px-8 py-4 rounded-xl text-base font-bold hover:bg-white/20 transition-all flex items-center justify-center gap-2"
            >
              <span className="material-symbols-outlined text-[20px]">chat_bubble</span>
              加 LINE 詢問
            </a>
          </div>
        </div>
      </section>

      {/* SCENE BRIDGE */}
      <section className="py-24 px-6 lg:px-12 bg-surface be-2">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <span className="font-label text-primary font-bold tracking-widest uppercase text-xs block mb-3">尋找您的方案</span>
            <h2 className="font-headline text-3xl md:text-4xl font-black text-on-surface tracking-tight">你是哪種情況？</h2>
            <p className="text-on-surface-variant mt-3 text-base">每一種需求，都有適合的倉位等著你。</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: "🏠", title: "裝修過渡", desc: "家具沒地方放的那幾個月，先搬進來，裝好再搬回去。" },
              { icon: "📦", title: "電商備貨", desc: "庫存不再佔滿家裡，24 小時隨時進出補貨取件。", bg: "bg-tertiary-fixed" },
              { icon: "🧹", title: "換季收納", desc: "行李箱、棉被、不捨得丟的東西，都有地方好好放。", bg: "bg-primary-fixed" },
              { icon: "🏢", title: "小公司存貨", desc: "不用租整個倉庫，按需彈性租倉，節省辦公室空間。" },
            ].map((item) => (
              <Link
                key={item.title}
                href="/pricing"
                className="scene-card group bg-surface-container-lowest cloud-shadow rounded-2xl p-7 flex flex-col gap-4 hover:-translate-y-1 transition-all border border-outline-variant/5"
              >
                <div className={`w-12 h-12 ${item.bg ?? "bg-secondary-container"} rounded-xl flex items-center justify-center text-2xl`}>
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-headline font-bold text-lg text-on-surface mb-1">{item.title}</h3>
                  <p className="text-on-surface-variant text-sm leading-relaxed">{item.desc}</p>
                </div>
                <div className="mt-auto flex items-center gap-1 text-primary text-sm font-bold font-label">
                  看適合的倉位{" "}
                  <span className="material-symbols-outlined text-[16px] sa">arrow_forward</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* TECH DIFFERENTIATOR */}
      <section className="py-24 px-6 lg:px-12 bg-surface-container-low be-3">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="font-label text-primary font-bold tracking-widest uppercase text-xs block mb-4">自建智慧平台</span>
              <h2 className="font-headline text-4xl md:text-5xl font-black text-on-surface tracking-tight leading-tight mb-6">
                全程手機，<br />
                <span className="text-primary">不需要任何人。</span>
              </h2>
              <p className="text-on-surface-variant text-lg leading-relaxed mb-10">
                星域智空間自建智慧管理平台，把租倉、開門、監控、支付全部整合進一支 APP。從你看到這個頁面，到你的東西放進倉庫，全程不需要任何人工協助。
              </p>
              <div className="space-y-5">
                {[
                  { icon: "smartphone", bg: "bg-primary-fixed", color: "text-primary", title: "APP 完成租倉全流程", desc: "選倉位、簽電子合約、線上支付，5 分鐘完成，不需到場。" },
                  { icon: "lock_open", bg: "bg-secondary-container", color: "text-secondary", title: "手機即鑰匙", desc: "數位身份驗證 + 智慧門禁控制，手機開門，不用帶鑰匙。" },
                  { icon: "videocam", bg: "bg-tertiary-fixed", color: "text-tertiary", title: "即時監控隨時查", desc: "倉內攝影機即時串流，隨時打開 APP 查看倉內狀況。" },
                  { icon: "humidity_mid", bg: "bg-primary-fixed", color: "text-primary", title: "55% 恆濕全時管控", desc: "工業級除濕設備，確保衣物、文件、精品不受潮損壞。" },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-4">
                    <div className={`w-10 h-10 ${item.bg} rounded-xl flex items-center justify-center flex-shrink-0`}>
                      <span className={`material-symbols-outlined ${item.color} text-[20px]`}>{item.icon}</span>
                    </div>
                    <div>
                      <div className="font-bold text-on-surface mb-1">{item.title}</div>
                      <div className="text-on-surface-variant text-sm">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-10 flex flex-wrap gap-4 items-center">
                <Link href="/process" className="butler-gradient text-white px-6 py-3 rounded-xl text-sm font-bold flex items-center gap-2 cloud-shadow hover:scale-[1.02] transition-transform h-[48px]">
                  <span className="material-symbols-outlined text-[18px]">play_circle</span>看完整流程
                </Link>
                <a href="https://www.sparkspace.com.tw/iosdownload" target="_blank" rel="noopener" className="hover:opacity-80 transition-opacity">
                  <Image src="/images/ios-download.webp" alt="Download on the App Store" width={135} height={40} className="h-[40px] w-auto" />
                </a>
                <a href="https://play.google.com/store/apps/details?id=terizac.intheblackworld.storehouseapp&pcampaignid=web_share" target="_blank" rel="noopener" className="hover:opacity-80 transition-opacity">
                  <Image src="/images/android-download.webp" alt="Get it on Google Play" width={152} height={45} className="h-[40px] w-auto" />
                </a>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { stat: "24H", label: "隨時進出", sub: "全年無休，深夜補貨也沒問題", highlight: false },
                { stat: "55%", label: "恆定濕度", sub: "工業級除濕，全時監測", highlight: false },
                { stat: "5 min", label: "完成租倉", sub: "全程 APP，不需到場", highlight: false },
                { stat: "360°", label: "零死角監控", sub: "即時串流，APP 隨時查看", highlight: true },
              ].map((item) => (
                <div
                  key={item.stat}
                  className={`rounded-2xl p-8 flex flex-col gap-2 ${
                    item.highlight
                      ? "bg-primary text-white shadow-[0_20px_40px_rgba(137,81,0,0.20)]"
                      : "bg-surface-container-lowest cloud-shadow border border-outline-variant/5"
                  }`}
                >
                  <span className={`font-label text-3xl font-black ${item.highlight ? "text-primary-container" : "text-primary"}`}>
                    {item.stat}
                  </span>
                  <span className={`font-bold ${item.highlight ? "text-white" : "text-on-surface"}`}>{item.label}</span>
                  <span className={`text-sm ${item.highlight ? "text-white/80" : "text-on-surface-variant"}`}>{item.sub}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* BRAND STORY */}
      <section className="py-24 px-6 lg:px-12 bg-surface be-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div
                className="aspect-square rounded-2xl bg-cover bg-center cloud-shadow"
                style={{
                  backgroundImage:
                    "url('/images/image_group_1/1.jpg')",
                }}
              />
              <div className="absolute -bottom-6 -right-6 w-48 h-48 butler-gradient rounded-2xl opacity-15 -z-10" />
            </div>
            <div>
              <span className="font-label text-primary font-bold tracking-widest uppercase text-xs block mb-4">我們的故事</span>
              <h2 className="font-headline text-4xl md:text-5xl font-black text-on-surface tracking-tight leading-tight mb-10">
                為你打造的<br />第二個空間
              </h2>
              <div className="space-y-8">
                {[
                  { num: "01", title: "我們在哪裡", desc: "105臺北市松山區延吉街7-1號 B1，捷運步行可達。提供 S 到 XXL 全尺寸智能倉位，個人收納到企業庫存都能服務。" },
                  { num: "02", title: "我們解決什麼問題", desc: "台北的家，應該拿來住，不是拿來堆東西。把佔空間的東西搬進星域，你的家多出來的不只是空間，是生活品質。" },
                  { num: "03", title: "為什麼選我們", desc: "我們自建整套智慧管理系統，把租倉、門禁、監控、支付全部整合進一個 APP，讓你完全自主管理自己的空間。" },
                ].map((item) => (
                  <div key={item.num} className="flex gap-5">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full border border-primary/30 flex items-center justify-center text-primary font-bold font-label text-sm">
                      {item.num}
                    </div>
                    <div>
                      <h4 className="font-bold text-on-surface mb-2">{item.title}</h4>
                      <p className="text-on-surface-variant leading-relaxed text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-10">
                <Link href="/locations" className="inline-flex items-center gap-2 text-primary font-bold font-label text-sm hover:gap-3 transition-all">
                  查看延吉店資訊 <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 px-6 lg:px-12 bg-surface-container-low relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-30">
          <div className="absolute top-1/4 -left-20 w-80 h-80 bg-primary/10 rounded-full blur-[100px]" />
          <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-secondary/10 rounded-full blur-[100px]" />
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-14">
            <span className="font-label text-primary font-bold tracking-widest uppercase text-xs block mb-3">用戶心聲</span>
            <h2 className="font-headline text-3xl md:text-5xl font-black text-on-surface tracking-tight">用戶怎麼說</h2>
            <p className="text-on-surface-variant mt-4 text-lg max-w-xl mx-auto">聽聽用戶們的分享，感受空間釋放後的生活新氣象。</p>
          </div>
          <TestimonialCarousel />
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-24 px-6 lg:px-12">
        <div className="max-w-4xl mx-auto">
          <div className="butler-gradient rounded-3xl p-12 md:p-16 text-center shadow-[0_30px_60px_rgba(137,81,0,0.20)]">
            <h2 className="font-headline text-3xl md:text-5xl font-black text-white leading-tight mb-4">
              現在就找一個<br />適合你的倉位
            </h2>
            <p className="text-white/80 text-lg mb-10 max-w-lg mx-auto">延吉街步行可達，今天租、今天就能放東西。</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/pricing"
                className="bg-white text-primary px-8 py-4 rounded-xl font-black text-base hover:bg-surface-container-lowest transition-colors flex items-center justify-center gap-2"
              >
                <span className="material-symbols-outlined text-[20px]">grid_view</span>查看可用倉位
              </Link>
              <a
                href="https://lin.ee/zL7pC2r"
                target="_blank"
                rel="noopener"
                className="bg-white/15 border border-white/30 text-white px-8 py-4 rounded-xl font-bold text-base hover:bg-white/25 transition-colors flex items-center justify-center gap-2"
              >
                <span className="material-symbols-outlined text-[20px]">chat_bubble</span>加 LINE 詢問
              </a>
            </div>
            <div className="mt-8 flex justify-center gap-4 items-center flex-wrap">
              <a href="https://www.sparkspace.com.tw/iosdownload" target="_blank" rel="noopener" className="hover:opacity-80 transition-opacity">
                <Image src="/images/ios-download.webp" alt="Download on the App Store" width={135} height={40} className="h-[40px] w-auto" />
              </a>
              <a href="https://play.google.com/store/apps/details?id=terizac.intheblackworld.storehouseapp&pcampaignid=web_share" target="_blank" rel="noopener" className="hover:opacity-80 transition-opacity">
                <Image src="/images/android-download.webp" alt="Get it on Google Play" width={152} height={45} className="h-[40px] w-auto" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
