"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";

const CATEGORY_IDS = [
  { id: "rental", icon: "home_storage" },
  { id: "trust", icon: "verified_user" },
  { id: "access", icon: "lock_open" },
  { id: "billing", icon: "receipt_long" },
] as const;

export default function FAQSidebar() {
  const t = useTranslations("FaqSidebar");
  const [active, setActive] = useState("rental");

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    CATEGORY_IDS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;

      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(id);
        },
        {
          // navbar ~112px，偵測區：從 navbar 下方到畫面 30% 處
          rootMargin: "-112px 0px -70% 0px",
          threshold: 0,
        }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <div className="space-y-1">
      <div className="font-label text-xs uppercase tracking-widest text-on-surface-variant font-bold mb-4">{t("tocTitle")}</div>
      {CATEGORY_IDS.map(({ id, icon }) => {
        const label = t(id as "rental" | "trust" | "access" | "billing");
        const isActive = active === id;
        return (
          <a
            key={id}
            href={`#${id}`}
            className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-label font-medium transition-colors ${
              isActive
                ? "text-primary bg-primary/8 hover:bg-primary/12"
                : "text-on-surface-variant hover:text-primary hover:bg-primary/6"
            }`}
          >
            <span className="material-symbols-outlined text-[16px]">{icon}</span>
            {label}
          </a>
        );
      })}
    </div>
  );
}
