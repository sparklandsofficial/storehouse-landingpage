"use client";

import { Link, usePathname } from "@/i18n/navigation";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import { useCallback, useEffect, useId, useRef, useState } from "react";
import { createPortal } from "react-dom";

import type { AppLocale } from "@/messages/blocks/common";
import { routing } from "@/i18n/routing";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const LOCALES = routing.locales;

function localeLabelKey(l: AppLocale): "lang.zhTW" | "lang.zhCN" | "lang.en" {
  if (l === "zh-TW") return "lang.zhTW";
  if (l === "zh-CN") return "lang.zhCN";
  return "lang.en";
}

function GlobeIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  );
}

/** 語言選擇下拉 — 只顯示地球圖示 */
function LocaleMenu({
  t,
  pathname,
  current,
  onPick,
}: {
  t: (key: string) => string;
  pathname: string;
  current: string;
  onPick?: () => void;
}) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        type="button"
        className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-primary/35 bg-primary/5 text-primary outline-none transition-all hover:border-primary/60 hover:bg-primary/10 focus-visible:ring-2 focus-visible:ring-primary/40"
        aria-label={t("language")}
      >
        <GlobeIcon className="h-4 w-4" />
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        sideOffset={8}
        className="z-[200] min-w-[10rem] border-outline-variant/20 bg-surface-container p-1 shadow-lg"
      >
        {LOCALES.map((loc) => {
          const active = current === loc;
          return (
            <DropdownMenuItem key={loc} asChild className="cursor-pointer p-0 focus:bg-transparent">
              <Link
                href={pathname}
                locale={loc}
                hrefLang={loc === "zh-TW" ? "zh-Hant" : loc === "zh-CN" ? "zh-Hans" : "en"}
                onClick={onPick}
                className={`flex w-full items-center gap-2 rounded-md px-3 py-2.5 text-sm font-label font-semibold ${
                  active ? "bg-primary/15 text-primary" : "text-on-surface hover:bg-surface-container-high"
                }`}
              >
                <span className="flex w-5 shrink-0 justify-center" aria-hidden>
                  {active && (
                    <span className="material-symbols-outlined text-[18px] text-primary">check</span>
                  )}
                </span>
                <span>{t(localeLabelKey(loc as AppLocale))}</span>
              </Link>
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default function Navigation() {
  const pathname = usePathname();
  const locale = useLocale();
  const t = useTranslations("nav");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [headerHeight, setHeaderHeight] = useState(56);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLElement>(null);
  const menuId = useId();

  useEffect(() => {
    const update = () => {
      if (headerRef.current) setHeaderHeight(headerRef.current.offsetHeight);
    };
    update();
    const ro = new ResizeObserver(update);
    if (headerRef.current) ro.observe(headerRef.current);
    return () => ro.disconnect();
  }, []);

  const closeMobile = useCallback(() => setMobileOpen(false), []);

  // pathname 變更時自動關閉選單
  useEffect(() => { closeMobile(); }, [pathname, closeMobile]);

  const isActive = (path: string) => pathname === path;

  useEffect(() => {
    if (!mobileOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeMobile();
    };
    window.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [mobileOpen, closeMobile]);

  useEffect(() => {
    if (!mobileOpen) return;
    const onPointerDown = (e: MouseEvent | TouchEvent) => {
      const target = e.target as Node;
      if (panelRef.current?.contains(target)) return;
      if (menuButtonRef.current?.contains(target)) return;
      closeMobile();
    };
    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("touchstart", onPointerDown, { passive: true });
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("touchstart", onPointerDown);
    };
  }, [mobileOpen, closeMobile]);

  // 桌面版導航連結 — active 以底部小圓點標示，非 active 用中等灰
  const linkDesktop = (path: string, label: string) => {
    const active = isActive(path);
    return (
      <Link
        href={path}
        className={`relative pb-[5px] text-[13px] tracking-[0.02em] transition-colors ${
          active
            ? "font-semibold text-primary"
            : "font-medium text-on-surface/55 hover:text-on-surface/90"
        }`}
      >
        {label}
        {/* active 指示圓點：absolute 定位，不撐高連結高度 */}
        <span
          className={`absolute bottom-0 left-1/2 h-[3px] w-[3px] -translate-x-1/2 rounded-full bg-primary transition-opacity ${
            active ? "opacity-100" : "opacity-0"
          }`}
          aria-hidden
        />
      </Link>
    );
  };

  // 手機版導航連結
  const linkMobile = (path: string, label: string) => {
    const active = isActive(path);
    return (
      <Link
        href={path}
        onClick={closeMobile}
        className={`flex items-center gap-3 rounded-xl px-4 py-3.5 text-[15px] font-semibold tracking-wide transition-colors ${
          active
            ? "bg-primary/10 text-primary"
            : "text-on-surface/80 hover:bg-surface-container-high hover:text-on-surface"
        }`}
      >
        {active && (
          <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-primary" aria-hidden />
        )}
        {!active && <span className="h-1.5 w-1.5 shrink-0" aria-hidden />}
        {label}
      </Link>
    );
  };

  return (
    <header
      ref={headerRef}
      className="fixed inset-x-0 top-0 z-50 box-border w-full max-w-full overflow-x-hidden glass-nav border-b border-outline-variant/10"
    >
      <div className="relative mx-auto flex min-h-[3.5rem] w-full min-w-0 max-w-7xl items-center justify-between px-4 py-2.5 sm:px-6 md:py-3 lg:px-12">

        {/* 左側：Logo */}
        <Link href="/" className="flex shrink-0 items-center" onClick={closeMobile}>
          <Image
            src={locale === "en" ? "/images/logo-en.png" : "/images/logo.png"}
            alt={t("logoAlt")}
            width={locale === "en" ? 160 : 120}
            height={40}
            className="h-8 w-auto max-h-8 object-contain object-left md:h-9"
            priority
          />
        </Link>

        {/* 桌面版：Nav links + 地球 + CTA */}
        <div className="hidden md:flex items-center gap-8">
          <nav className="flex items-center gap-7" aria-label="Main">
            {linkDesktop("/pricing", t("pricing"))}
            {linkDesktop("/process", t("process"))}
            {linkDesktop("/locations", t("locations"))}
            {linkDesktop("/faq", t("faq"))}
          </nav>

          <div className="flex items-center gap-3">
            <LocaleMenu t={t} pathname={pathname} current={locale} />
            <Link
              href="/pricing"
              className="butler-gradient text-white px-5 py-2 rounded-xl text-[13px] font-bold tracking-wide cloud-shadow hover:scale-[1.02] active:scale-[0.98] transition-transform font-label whitespace-nowrap"
            >
              {t("ctaRent")}
            </Link>
          </div>
        </div>

        {/* 手機版：地球 + Hamburger */}
        <div className="flex items-center gap-2 md:hidden">
          <LocaleMenu t={t} pathname={pathname} current={locale} />
          <button
            ref={menuButtonRef}
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-outline-variant/20 bg-surface-container text-on-surface transition-colors hover:bg-surface-container-high"
            aria-expanded={mobileOpen}
            aria-controls={menuId}
            aria-label={mobileOpen ? t("closeMenu") : t("openMenu")}
            onClick={() => setMobileOpen((o) => !o)}
          >
            <span className="material-symbols-outlined text-[22px]">
              {mobileOpen ? "close" : "menu"}
            </span>
          </button>
        </div>
      </div>

      {/* 手機版選單 portal — 避免 glass-nav backdrop-filter 的 containing block 問題 */}
      {mobileOpen && createPortal(
        <>
          <div
            className="fixed inset-0 z-[49] bg-black/40 md:hidden"
            aria-hidden
            onClick={closeMobile}
          />
          <div
            ref={panelRef}
            id={menuId}
            role="dialog"
            aria-modal="true"
            aria-label={t("menuTitle")}
            style={{ top: headerHeight }}
            className="fixed inset-x-0 z-[50] box-border max-h-[min(70vh,calc(100dvh-4.5rem))] w-full overflow-y-auto overflow-x-hidden border-t border-outline-variant/10 bg-surface shadow-xl md:hidden"
          >
            <nav className="flex flex-col gap-1 px-3 py-3 pb-5" aria-label="Main">
              {linkMobile("/pricing", t("pricing"))}
              {linkMobile("/process", t("process"))}
              {linkMobile("/locations", t("locations"))}
              {linkMobile("/faq", t("faq"))}
              <div className="mx-1 my-2 border-t border-outline-variant/10" />
              <Link
                href="/pricing"
                onClick={closeMobile}
                className="butler-gradient mx-1 box-border w-[calc(100%-0.5rem)] rounded-xl py-3.5 text-center text-sm font-bold font-label text-white cloud-shadow"
              >
                {t("ctaRent")}
              </Link>
            </nav>
          </div>
        </>,
        document.body
      )}
    </header>
  );
}
