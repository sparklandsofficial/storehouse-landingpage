"use client";

import { useEffect, useState } from "react";

const CATEGORIES = [
  { id: "rental",  icon: "home_storage",   label: "租倉與流程" },
  { id: "trust",   icon: "verified_user",  label: "信任與保障" },
  { id: "access",  icon: "lock_open",      label: "進出與使用" },
  { id: "billing", icon: "receipt_long",   label: "費用與合約" },
];

export default function FAQSidebar() {
  const [active, setActive] = useState("rental");

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    CATEGORIES.forEach(({ id }) => {
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
      <div className="font-label text-xs uppercase tracking-widest text-on-surface-variant font-bold mb-4">
        問題分類
      </div>
      {CATEGORIES.map(({ id, icon, label }) => {
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
