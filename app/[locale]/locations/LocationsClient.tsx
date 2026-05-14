"use client";

import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
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

function YanjiCarousel({ carouselAlt }: { carouselAlt: string }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setIndex((p) => (p + 1) % YANJI_IMAGES.length), 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="absolute inset-0 z-0 w-full h-full overflow-hidden bg-surface-container-high">
      <AnimatePresence initial={false}>
        <motion.img
          key={index}
          src={YANJI_IMAGES[index]}
          alt={`${carouselAlt} ${index + 1}`}
          initial={{ opacity: 0, scale: 1.02 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0 z-0 h-full w-full object-cover"
        />
      </AnimatePresence>
      <div className="absolute bottom-4 left-1/2 z-30 flex -translate-x-1/2 gap-2">
        {YANJI_IMAGES.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setIndex(i)}
            className={`h-1.5 rounded-full transition-all duration-500 hover:bg-white/80 ${
              index === i ? "bg-primary w-6" : "bg-white/30 w-1.5"
            }`}
            aria-label={`${carouselAlt} ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

export default function LocationsClient() {
  const t = useTranslations("LocationsPage");
  const mrtItems = t.raw("mrtItems") as string[];
  const carItems = t.raw("carItems") as string[];
  const moveItems = t.raw("moveItems") as string[];

  const infoRows = [
    {
      icon: "location_on" as const,
      bg: "bg-primary-fixed",
      color: "text-primary",
      title: t("addrTitle"),
      content: t("addrLine"),
      sub: t("addrSub"),
    },
    {
      icon: "call" as const,
      bg: "bg-secondary-container",
      color: "text-secondary",
      title: t("phoneTitle"),
      phone: t("phone"),
    },
    {
      icon: "schedule" as const,
      bg: "bg-tertiary-fixed",
      color: "text-tertiary",
      title: t("hoursTitle"),
      content: t("hoursLine"),
      sub: t("hoursSub"),
    },
  ];

  const featTiles = [
    { icon: "humidity_mid" as const, title: t("feat1t"), sub: t("feat1s") },
    { icon: "videocam" as const, title: t("feat2t"), sub: t("feat2s") },
    { icon: "smartphone" as const, title: t("feat3t"), sub: t("feat3s") },
    { icon: "view_quilt" as const, title: t("feat4t"), sub: t("feat4s") },
  ];

  const howColumns = [
    {
      icon: "train" as const,
      bg: "bg-primary-fixed",
      color: "text-primary",
      title: t("mrtTitle"),
      items: mrtItems,
    },
    {
      icon: "directions_car" as const,
      bg: "bg-secondary-container",
      color: "text-secondary",
      title: t("carTitle"),
      items: carItems,
    },
    {
      icon: "local_shipping" as const,
      bg: "bg-tertiary-fixed",
      color: "text-tertiary",
      title: t("moveTitle"),
      items: moveItems,
    },
  ];

  return (
    <div className="pt-20">
      <section className="relative flex h-[480px] items-end overflow-hidden be-1">
        <YanjiCarousel carouselAlt={t("carouselAlt")} />
        <div className="hero-overlay pointer-events-none absolute inset-0 z-10" />
        <div className="relative z-20 mx-auto w-full max-w-7xl px-6 pb-12 lg:px-12">
          <h1 className="font-headline text-5xl md:text-6xl font-black text-white leading-tight mb-2 tracking-tight">
            {t("heroH1")}
          </h1>
          <div className="font-label text-primary-container text-xl font-bold tracking-widest">{t("heroSub")}</div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-16 be-2">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <span className="font-label text-primary font-bold tracking-widest uppercase text-xs block mb-6">
              {t("specKicker")}
            </span>
            <div className="space-y-5 mb-8">
              {infoRows.map((item) => (
                <div key={item.title} className="flex items-start gap-4">
                  <div className={`w-10 h-10 ${item.bg} rounded-xl flex items-center justify-center flex-shrink-0`}>
                    <span className={`material-symbols-outlined ${item.color} text-[20px]`}>{item.icon}</span>
                  </div>
                  <div>
                    <div className="font-bold text-on-surface mb-0.5">{item.title}</div>
                    {"phone" in item && item.phone ? (
                      <a href={`tel:${item.phone.replace(/[^0-9]/g, "")}`} className="text-primary font-bold hover:underline">
                        {item.phone}
                      </a>
                    ) : (
                      <>
                        <div className="text-on-surface-variant">{"content" in item ? item.content : null}</div>
                        {"sub" in item && item.sub ? (
                          <div className="text-on-surface-variant text-sm font-label mt-0.5">{item.sub}</div>
                        ) : null}
                      </>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-3 mb-8">
              {featTiles.map((f) => (
                <div
                  key={f.title}
                  className="bg-surface-container-low rounded-xl p-4 flex items-center gap-3 border border-outline-variant/5"
                >
                  <span className="material-symbols-outlined text-primary text-[20px]">{f.icon}</span>
                  <div>
                    <div className="font-bold text-sm text-on-surface">{f.title}</div>
                    <div className="text-xs text-on-surface-variant font-label">{f.sub}</div>
                  </div>
                </div>
              ))}
            </div>

            <Link
              href="/pricing"
              className="w-full butler-gradient text-white py-4 rounded-xl font-bold text-base cloud-shadow flex items-center justify-center gap-2 hover:scale-[1.01] transition-transform"
            >
              <span className="material-symbols-outlined text-[20px]">grid_view</span>
              {t("ctaUnits")}
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
                  <div className="font-bold text-sm text-on-surface">{t("mapOpen")}</div>
                  <div className="text-xs text-on-surface-variant font-label">{t("mapAddr")}</div>
                </div>
              </div>
              <span className="material-symbols-outlined text-on-surface-variant text-[20px]">open_in_new</span>
            </a>
          </div>
        </div>
      </section>

      <section className="bg-surface-container-low py-16 px-6 lg:px-12 be-3">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-headline text-2xl font-black text-on-surface tracking-tight mb-10">{t("howH2")}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {howColumns.map((c) => (
              <div key={c.title} className="bg-surface-container-lowest cloud-shadow rounded-2xl p-7 border border-outline-variant/5">
                <div className={`w-12 h-12 ${c.bg} rounded-xl flex items-center justify-center mb-5`}>
                  <span className={`material-symbols-outlined ${c.color} text-2xl`}>{c.icon}</span>
                </div>
                <h3 className="font-headline font-bold text-lg text-on-surface mb-3">{c.title}</h3>
                <div className="space-y-2 text-sm text-on-surface-variant leading-relaxed">
                  {c.items.map((line) => (
                    <div key={line} className="flex items-start gap-2">
                      <span className="text-primary font-bold flex-shrink-0">●</span>
                      <span>{line}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 lg:px-12 py-24 text-center">
        <h2 className="font-headline text-3xl font-black text-on-surface tracking-tight mb-4">{t("bottomH2")}</h2>
        <p className="text-on-surface-variant text-lg mb-8 max-w-md mx-auto">{t("bottomP")}</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/pricing"
            className="butler-gradient text-white px-8 py-4 rounded-xl font-bold text-base cloud-shadow flex items-center justify-center gap-2 hover:scale-[1.02] transition-transform"
          >
            <span className="material-symbols-outlined text-[20px]">grid_view</span>
            {t("bottomCtaUnits")}
          </Link>
          <a
            href="https://lin.ee/zL7pC2r"
            target="_blank"
            rel="noopener"
            className="bg-surface-container-lowest border border-outline-variant/20 text-on-surface px-8 py-4 rounded-xl font-bold text-base flex items-center justify-center gap-2 hover:bg-surface-container transition-colors"
          >
            <span className="material-symbols-outlined text-[20px]">chat_bubble</span>
            {t("bottomCtaLine")}
          </a>
        </div>
      </section>
    </div>
  );
}
