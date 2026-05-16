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
        className="inline-flex h-12 w-12 items-center justify-center rounded-full text-primary/70 outline-none transition-all hover:text-primary focus-visible:ring-2 focus-visible:ring-primary/40"
        aria-label={t("language")}
      >
        <GlobeIcon className="h-6 w-6" />
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

const B2B_SECTIONS = [
  "market", "traction", "system", "positioning", "moat", "partnership", "roadmap",
] as const;

function B2BDropdown({
  t,
  pathname,
}: {
  t: (key: string) => string;
  pathname: string;
}) {
  const active = pathname.startsWith("/b2b");
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          type="button"
          className={`relative flex items-center gap-[3px] pb-[6px] text-[13px] tracking-[0.02em] transition-colors outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:rounded-sm ${
            active ? "font-semibold text-primary" : "font-medium text-on-surface/55 hover:text-on-surface/90"
          }`}
        >
          {t("b2b")}
          <span className="material-symbols-outlined text-[14px] opacity-60">expand_more</span>
          <span
            className={`absolute bottom-0 left-0 h-[2px] w-full rounded-full bg-primary transition-opacity ${active ? "opacity-100" : "opacity-0"}`}
            aria-hidden
          />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="center"
        sideOffset={8}
        className="z-[200] min-w-[9rem] border-outline-variant/20 bg-surface-container p-1 shadow-lg"
      >
        <DropdownMenuItem asChild className="cursor-pointer p-0 focus:bg-transparent">
          <Link
            href="/b2b"
            className="flex w-full items-center gap-2 rounded-md px-3 py-2 text-[13px] font-semibold text-primary hover:bg-primary/10"
          >
            <span className="material-symbols-outlined text-[15px]">business_center</span>
            {t("b2b")}
          </Link>
        </DropdownMenuItem>
        <div className="my-1 border-t border-outline-variant/10" />
        {B2B_SECTIONS.map((key) => (
          <DropdownMenuItem key={key} asChild className="cursor-pointer p-0 focus:bg-transparent">
            <Link
              href={`/b2b#${key}`}
              className="flex w-full items-center gap-2 rounded-md px-3 py-2 text-[12.5px] font-medium text-on-surface/70 hover:bg-surface-container-high hover:text-on-surface"
            >
              {t(`b2bMenu.${key}`)}
            </Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

function B2BMobileMenu({
  t,
  pathname,
  onClose,
}: {
  t: (key: string) => string;
  pathname: string;
  onClose: () => void;
}) {
  const active = pathname.startsWith("/b2b");
  const [open, setOpen] = useState(false);
  return (
    <div>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className={`flex w-full items-center justify-between gap-3 rounded-xl px-4 py-3.5 text-[15px] font-semibold tracking-wide transition-colors ${
          active ? "bg-primary/10 text-primary" : "text-on-surface/80 hover:bg-surface-container-high hover:text-on-surface"
        }`}
      >
        <span className="flex items-center gap-3">
          {active && <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-primary" aria-hidden />}
          {!active && <span className="h-1.5 w-1.5 shrink-0" aria-hidden />}
          {t("b2b")}
        </span>
        <span className={`material-symbols-outlined text-[18px] transition-transform ${open ? "rotate-180" : ""}`}>expand_more</span>
      </button>
      <div
        style={{
          maxHeight: open ? 500 : 0,
          opacity: open ? 1 : 0,
          overflow: "hidden",
          transition: "max-height 1s cubic-bezier(0.16,1,0.3,1), opacity 0.5s ease",
        }}
      >
        <div className="ml-8 mt-1 flex flex-col gap-0.5 pb-1">
          <Link
            href="/b2b"
            onClick={onClose}
            className="rounded-lg px-3 py-2 text-[13.5px] font-semibold text-primary hover:bg-primary/8"
          >
            {t("b2b")} →
          </Link>
          {B2B_SECTIONS.map((key) => (
            <Link
              key={key}
              href={`/b2b#${key}`}
              onClick={onClose}
              className="rounded-lg px-3 py-2 text-[13px] text-on-surface/65 hover:bg-surface-container-high hover:text-on-surface"
            >
              {t(`b2bMenu.${key}`)}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Navigation() {
  const pathname = usePathname();
  const locale = useLocale();
  const t = useTranslations("nav");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [headerHeight, setHeaderHeight] = useState(56);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLElement>(null);
  const menuId = useId();

  useEffect(() => { setMounted(true); }, []);

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
        className={`relative pb-[6px] text-[13px] tracking-[0.02em] transition-colors outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:rounded-sm ${
          active
            ? "font-semibold text-primary"
            : "font-medium text-on-surface/55 hover:text-on-surface/90"
        }`}
      >
        {label}
        {/* active 底部橫條：absolute 定位不影響高度 */}
        <span
          className={`absolute bottom-0 left-0 h-[2px] w-full rounded-full bg-primary transition-opacity ${
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
            className="h-8 w-auto object-contain object-left md:h-9"
            priority
          />
        </Link>

        {/* 桌面版 Nav — absolute 置中，不被左右元素擠壓 */}
        <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-7 md:flex" aria-label="Main">
          {linkDesktop("/pricing", t("pricing"))}
          {linkDesktop("/process", t("process"))}
          {linkDesktop("/locations", t("locations"))}
          {linkDesktop("/faq", t("faq"))}
          {/* 商務合作 dropdown */}
          <B2BDropdown t={t} pathname={pathname} />
        </nav>

        {/* 右側：Globe + CTA（桌面） + Hamburger（手機） */}
        <div className="flex items-center gap-2 md:gap-3">
          <LocaleMenu t={t} pathname={pathname} current={locale} />
          <Link
            href="/pricing"
            className="butler-gradient hidden text-white px-5 py-2 rounded-xl text-[13px] font-bold tracking-wide cloud-shadow hover:scale-[1.02] active:scale-[0.98] transition-transform font-label whitespace-nowrap outline-none focus-visible:ring-2 focus-visible:ring-primary/50 md:inline-flex"
          >
            {t("ctaRent")}
          </Link>
          <button
            ref={menuButtonRef}
            type="button"
            className="inline-flex h-12 w-12 items-center justify-center rounded-lg text-primary/70 outline-none transition-all hover:text-primary focus-visible:ring-2 focus-visible:ring-primary/40 md:hidden"
            aria-expanded={mobileOpen}
            aria-controls={menuId}
            aria-label={mobileOpen ? t("closeMenu") : t("openMenu")}
            onClick={() => setMobileOpen((o) => !o)}
          >
            <span className="material-symbols-outlined text-[33px]">
              {mobileOpen ? "close" : "menu"}
            </span>
          </button>
        </div>
      </div>

      {/* 手機版選單 portal — 避免 glass-nav backdrop-filter 的 containing block 問題 */}
      {mounted && createPortal(
        <>
          {/* 半透明背景 */}
          <div
            className="fixed inset-0 z-[49] md:hidden"
            aria-hidden
            onClick={closeMobile}
            style={{
              background: "rgba(0,0,0,0.4)",
              opacity: mobileOpen ? 1 : 0,
              pointerEvents: mobileOpen ? "auto" : "none",
              transition: "opacity 0.4s ease",
            }}
          />
          {/* 選單面板：max-height 展開動畫 */}
          <div
            ref={panelRef}
            id={menuId}
            role="dialog"
            aria-modal="true"
            aria-label={t("menuTitle")}
            style={{
              top: headerHeight,
              maxHeight: mobileOpen ? "min(70vh, calc(100dvh - 3.5rem))" : "0px",
              opacity: mobileOpen ? 1 : 0,
              overflow: "hidden",
              transition: "max-height 1s cubic-bezier(0.16,1,0.3,1), opacity 0.4s ease",
              pointerEvents: mobileOpen ? "auto" : "none",
            }}
            className="fixed inset-x-0 z-[50] box-border w-full overflow-x-hidden border-t border-outline-variant/10 bg-surface shadow-xl md:hidden"
          >
            <nav className="flex flex-col gap-1 px-3 py-3 pb-5 overflow-y-auto max-h-[min(70vh,calc(100dvh-4.5rem))]" aria-label="Main">
              {linkMobile("/pricing", t("pricing"))}
              {linkMobile("/process", t("process"))}
              {linkMobile("/locations", t("locations"))}
              {linkMobile("/faq", t("faq"))}
              {/* 商務合作 mobile sub-section */}
              <B2BMobileMenu t={t} pathname={pathname} onClose={closeMobile} />
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
