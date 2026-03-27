"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

const YANJI_IMAGES = [
  "/images/image_group_1/1.jpg",
  "/images/image_group_1/2.jpg",
  "/images/image_group_1/3.jpg",
  "/images/image_group_1/4.jpg",
  "/images/image_group_1/5.jpg",
  "/images/image_group_1/6.jpg",
  "/images/image_group_1/7.jpg",
  "/images/image_group_1/8.jpg",
  "/images/image_group_1/9.jpg",
];

function YanjiCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setIndex((p) => (p + 1) % YANJI_IMAGES.length), 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden bg-surface-container-high">
      <AnimatePresence mode="wait">
        <motion.img
          key={index}
          src={YANJI_IMAGES[index]}
          alt={`台北延吉店 ${index + 1}`}
          initial={{ opacity: 0, scale: 1.05, filter: "blur(4px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          exit={{ opacity: 0, scale: 0.95, filter: "blur(4px)" }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </AnimatePresence>
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-30 flex gap-2">
        {YANJI_IMAGES.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`h-1.5 rounded-full transition-all duration-500 hover:bg-white/80 ${
              index === i ? "bg-primary w-6" : "bg-white/30 w-1.5"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

export default function Locations() {
  return (
    <div className="pt-20">
      {/* HERO */}
      <section className="relative h-[480px] flex items-end overflow-hidden be-1">
        <div className="hero-overlay absolute inset-0 z-10" />
        <YanjiCarousel />
        <div className="relative z-20 max-w-7xl mx-auto px-6 lg:px-12 pb-12 w-full">
          <h1 className="font-headline text-5xl md:text-6xl font-black text-white leading-tight mb-2 tracking-tight">台北延吉店</h1>
          <div className="font-label text-primary-container text-xl font-bold tracking-widest">TAIPEI YANJI</div>
        </div>
      </section>

      {/* LOCATION INFO */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-16 be-2">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <span className="font-label text-primary font-bold tracking-widest uppercase text-xs block mb-6">門市規格</span>
            <div className="space-y-5 mb-8">
              {[
                { icon: "location_on", bg: "bg-primary-fixed", color: "text-primary", title: "地址", content: "105臺北市松山區延吉街7-1號 B1", sub: "屈臣氏後方" },
                { icon: "call", bg: "bg-secondary-container", color: "text-secondary", title: "服務電話", phone: "(02) 8177-7085" },
                { icon: "schedule", bg: "bg-tertiary-fixed", color: "text-tertiary", title: "進出時間", content: "24 小時，全年無休", sub: "手機開門，隨時可進出" },
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-4">
                  <div className={`w-10 h-10 ${item.bg} rounded-xl flex items-center justify-center flex-shrink-0`}>
                    <span className={`material-symbols-outlined ${item.color} text-[20px]`}>{item.icon}</span>
                  </div>
                  <div>
                    <div className="font-bold text-on-surface mb-0.5">{item.title}</div>
                    {item.phone ? (
                      <a href={`tel:${item.phone.replace(/[^0-9]/g, "")}`} className="text-primary font-bold hover:underline">{item.phone}</a>
                    ) : (
                      <>
                        <div className="text-on-surface-variant">{item.content}</div>
                        {item.sub && <div className="text-on-surface-variant text-sm font-label mt-0.5">{item.sub}</div>}
                      </>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-3 mb-8">
              {[
                { icon: "humidity_mid", title: "工業級除濕", sub: "Constant Humidity" },
                { icon: "videocam", title: "零死角監控", sub: "24/7 AI Security" },
                { icon: "smartphone", title: "數位密碼進出", sub: "Smart Key Access" },
                { icon: "view_quilt", title: "全尺寸服務", sub: "S – XL Storage" },
              ].map((f) => (
                <div key={f.title} className="bg-surface-container-low rounded-xl p-4 flex items-center gap-3 border border-outline-variant/5">
                  <span className="material-symbols-outlined text-primary text-[20px]">{f.icon}</span>
                  <div>
                    <div className="font-bold text-sm text-on-surface">{f.title}</div>
                    <div className="text-xs text-on-surface-variant font-label">{f.sub}</div>
                  </div>
                </div>
              ))}
            </div>

            <Link href="/pricing" className="w-full butler-gradient text-white py-4 rounded-xl font-bold text-base cloud-shadow flex items-center justify-center gap-2 hover:scale-[1.01] transition-transform">
              <span className="material-symbols-outlined text-[20px]">grid_view</span>查看可用倉位
            </Link>
          </div>

          <div className="flex flex-col gap-4">
            <div className="rounded-2xl overflow-hidden cloud-shadow border border-outline-variant/5 flex-1 min-h-[360px]">
              <iframe
                src="https://maps.google.com/maps?q=105臺北市松山區延吉街7-1號B1&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "360px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <a
              href="https://maps.app.goo.gl/5jxiXEVaHsXHcXx5A"
              target="_blank"
              rel="noopener"
              className="bg-surface-container-lowest border border-outline-variant/15 rounded-xl px-5 py-4 flex items-center justify-between hover:bg-surface-container transition-colors cloud-shadow"
            >
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary text-[22px]">map</span>
                <div>
                  <div className="font-bold text-sm text-on-surface">在 Google 地圖開啟</div>
                  <div className="text-xs text-on-surface-variant font-label">105臺北市松山區延吉街7-1號 B1</div>
                </div>
              </div>
              <span className="material-symbols-outlined text-on-surface-variant text-[20px]">open_in_new</span>
            </a>
          </div>
        </div>
      </section>

      {/* HOW TO GET THERE */}
      <section className="bg-surface-container-low py-16 px-6 lg:px-12 be-3">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-headline text-2xl font-black text-on-surface tracking-tight mb-10">怎麼到我們這裡</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: "train", bg: "bg-primary-fixed", color: "text-primary", title: "搭捷運",
                items: ["板南線「忠孝敦化站」5 號出口，步行約 8 分鐘", "文湖線「南京三民站」1 號出口，步行約 10 分鐘"],
              },
              {
                icon: "directions_car", bg: "bg-secondary-container", color: "text-secondary", title: "開車停車",
                items: ["八德路路邊停車格", "北寧路路邊停車格，步行約 2 分鐘", "台北田徑場地下停車場，步行約 3 分鐘"],
              },
              {
                icon: "local_shipping", bg: "bg-tertiary-fixed", color: "text-tertiary", title: "搬家公司直送",
                items: ["可直接請搬家公司將物品送至延吉街門口", "入口備有輸送帶供搬運使用", "如需協助請提前加 LINE 告知"],
              },
            ].map((c) => (
              <div key={c.title} className="bg-surface-container-lowest cloud-shadow rounded-2xl p-7 border border-outline-variant/5">
                <div className={`w-12 h-12 ${c.bg} rounded-xl flex items-center justify-center mb-5`}>
                  <span className={`material-symbols-outlined ${c.color} text-2xl`}>{c.icon}</span>
                </div>
                <h3 className="font-headline font-bold text-lg text-on-surface mb-3">{c.title}</h3>
                <div className="space-y-2 text-sm text-on-surface-variant leading-relaxed">
                  {c.items.map((item) => (
                    <div key={item} className="flex items-start gap-2">
                      <span className="text-primary font-bold flex-shrink-0">●</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="max-w-4xl mx-auto px-6 lg:px-12 py-24 text-center">
        <h2 className="font-headline text-3xl font-black text-on-surface tracking-tight mb-4">今天就來看看</h2>
        <p className="text-on-surface-variant text-lg mb-8 max-w-md mx-auto">倉位有限，先加 LINE 確認目前可用的大小與方案。</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/pricing" className="butler-gradient text-white px-8 py-4 rounded-xl font-bold text-base cloud-shadow flex items-center justify-center gap-2 hover:scale-[1.02] transition-transform">
            <span className="material-symbols-outlined text-[20px]">grid_view</span>查看可用倉位
          </Link>
          <a href="https://lin.ee/zL7pC2r" target="_blank" rel="noopener" className="bg-surface-container-lowest border border-outline-variant/20 text-on-surface px-8 py-4 rounded-xl font-bold text-base flex items-center justify-center gap-2 hover:bg-surface-container transition-colors">
            <span className="material-symbols-outlined text-[20px]">chat_bubble</span>加 LINE 詢問
          </a>
        </div>
      </section>
    </div>
  );
}
