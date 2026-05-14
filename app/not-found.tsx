import Link from "next/link";
import { routing } from "@/i18n/routing";

/** 無 locale 前綴時嘅 fallback（唔用 next-intl，避免冇 Provider） */
export default function GlobalNotFound() {
  const home = `/${routing.defaultLocale}`;
  return (
    <div className="min-h-[50vh] flex flex-col items-center justify-center gap-4 px-4 py-24">
      <p className="text-lg text-on-surface">找不到頁面</p>
      <Link href={home} className="text-primary underline font-medium">
        返回首頁
      </Link>
    </div>
  );
}
