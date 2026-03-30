"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-nav border-b border-outline-variant/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image
            src="/images/logo.png"
            alt="Spark Space 星域智空間"
            width={120}
            height={40}
            className="h-10 w-auto object-contain"
            priority
          />
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          <Link
            href="/pricing"
            className={`font-label text-sm tracking-wide transition-colors ${
              isActive("/pricing")
                ? "text-primary font-bold border-b-2 border-primary pb-0.5"
                : "text-on-surface-variant hover:text-primary"
            }`}
          >
            倉位方案
          </Link>
          <Link
            href="/process"
            className={`font-label text-sm tracking-wide transition-colors ${
              isActive("/process")
                ? "text-primary font-bold border-b-2 border-primary pb-0.5"
                : "text-on-surface-variant hover:text-primary"
            }`}
          >
            租倉流程
          </Link>
          <Link
            href="/locations"
            className={`font-label text-sm tracking-wide transition-colors ${
              isActive("/locations")
                ? "text-primary font-bold border-b-2 border-primary pb-0.5"
                : "text-on-surface-variant hover:text-primary"
            }`}
          >
            延吉店
          </Link>
          <Link
            href="/faq"
            className={`font-label text-sm tracking-wide transition-colors ${
              isActive("/faq")
                ? "text-primary font-bold border-b-2 border-primary pb-0.5"
                : "text-on-surface-variant hover:text-primary"
            }`}
          >
            常見問題
          </Link>
        </nav>
        <Link
          href="/pricing"
          className="butler-gradient text-white px-5 py-2.5 rounded-xl text-sm font-bold cloud-shadow hover:scale-[1.02] active:scale-[0.98] transition-transform font-label"
        >
          立即租倉
        </Link>
      </div>
    </header>
  );
}
